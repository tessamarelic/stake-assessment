import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Holding } from "src/app/models/holding.model";
import { HoldingApi } from "src/app/models/holdingApi";
import { PricingApi } from "src/app/models/pricingApi.model";

@Injectable({
    providedIn: 'root'
  })
export class HoldingsService {

    holdingsUrl = 'assets/mocks/holdings.json';
    pricingUrl = 'assets/mocks/pricing.json';
    httpClient = inject(HttpClient);

    fetchHoldings(): Observable<HoldingApi[]> {
        return this.httpClient.get<HoldingApi[]>(this.holdingsUrl)
    } 

    fetchPricing(): Observable<PricingApi[]> {
        return this.httpClient.get<PricingApi[]>(this.pricingUrl)
    }

    calculateChange(purchasePrice: number, currentPrice: number): { change: number, isPositive: boolean } {
        // Calculate percentage change relative to original investment
        const percentageChange = ((currentPrice - purchasePrice) / purchasePrice) * 100;
        const isPositive = percentageChange >= 0;
        return { change: percentageChange, isPositive };
    }

    mapHoldingsWithPricing(holdings: HoldingApi[], pricing: PricingApi[]): Holding[] {
        return holdings.map(holding => {
            // Join by ID as holdings.json doesn't have symbol field
            const priceData = pricing.find(price => price.id === holding.id);
            if (priceData) {
                const changeData = this.calculateChange(holding.purchasePrice, priceData.close);
                return {
                    totalShares: holding.totalShares.toString(),
                    symbol: priceData.symbol,
                    price: `$${priceData.close.toFixed(2)}`,
                    change: `${changeData.change.toFixed(2)}%`,
                    isPositive: changeData.isPositive
                };
            }
            return null;
        }).filter(holding => holding !== null);
    }

}