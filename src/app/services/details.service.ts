import { HttpClient } from "@angular/common/http";
import { Inject, inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DetailApi } from "src/app/models/detailApi.model";
import { PricingApi } from "src/app/models/pricingApi.model";
import { Card } from "src/app/models/card.model";
import { Share } from "src/app/models/share.model";

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

    detailsUrl = 'assets/mocks/details.json';
    httpClient = inject(HttpClient);

    fetchDetails(): Observable<DetailApi[]> {
        return this.httpClient.get<DetailApi[]>(this.detailsUrl)
    }

    mapDetailsWithPricing(details: DetailApi[], pricing: PricingApi[]): Card[] {
            return details.map(detail => {
                const cardData = pricing.find(price => price.symbol === detail.symbol);
                if (cardData) {
                    return {
                        price: `$${cardData.ask.toFixed(2)}`,
                        fullname: detail.fullName,
                        symbol: detail.symbol,
                        logo: detail.logo,
                        type: detail.type
                    };
                }
                return null;
            }).filter(detail => detail !== null);
        }

    fetchShares(card: Card[]): Share[] {
        return card.map(data => {
            return {
                symbol: data.symbol,
                name: data.fullname,
                price: data.price,
            };
        }).filter(data => data !== null);
    }

}