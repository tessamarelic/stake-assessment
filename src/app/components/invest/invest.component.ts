import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  IonCol,
  IonContent,
  IonGrid,
  IonItem,
  IonLabel,
  IonRow
} from '@ionic/angular/standalone';
import { Subject } from 'rxjs';
import { map, mergeMap, takeUntil } from 'rxjs/operators';
import { Card } from 'src/app/models/card.model';
import { Holding } from 'src/app/models/holding.model';
import { CardComponent } from '../../shared/components/card/card.component';
import { InstrumentComponent } from '../../shared/components/instrument/instrument.component';
import { DetailsService } from '../../services/details.service';
import { HoldingsService } from '../../services/holdings.service';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-invest',
  templateUrl: './invest.component.html',
  styleUrls: ['./invest.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    CardComponent,
    InstrumentComponent
  ]
})
export class InvestComponent implements OnInit {

  holdingsService = inject(HoldingsService);
  detailsService = inject(DetailsService);

  cards: Card[] = [];
  holdings: Holding[] = [];

  private destroyRef = inject(DestroyRef);
  private destroy$ = new Subject<void>();

  constructor() {
    this.destroyRef.onDestroy(() => {
      this.destroy$.next();
      this.destroy$.complete();
    });
  }

  ngOnInit() {
    this.getHoldings();
    this.getCards();
  }

  getHoldings(): void {
    this.holdingsService.fetchHoldings().pipe(
      takeUntil(this.destroy$),
      mergeMap(holdings => {
        // get prices for holdings from price api
        return this.holdingsService.fetchPricing().pipe(
          map(pricing => {
            this.holdings = this.holdingsService.mapHoldingsWithPricing(holdings, pricing);
            return this.holdings;
          })
        );
      })
    ).subscribe({
      error: (err) => console.error('Error fetching holdings:', err)
    });
  }

  getCards(): void {
    this.detailsService.fetchDetails().pipe(
      takeUntil(this.destroy$),
      mergeMap(details => {
        return this.holdingsService.fetchPricing().pipe(
          map(pricing => {
            this.cards = this.detailsService.mapDetailsWithPricing(details, pricing);
            return this.cards;
          })
        );
      })
    ).subscribe({
      error: (err) => console.error('Error fetching cards:', err)
    });
  }

}