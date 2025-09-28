import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  IonContent, 
  IonHeader, 
  IonSearchbar, 
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonToolbar,
  IonTitle
} from '@ionic/angular/standalone';
import { CardComponent } from '../../shared/components/card/card.component';
import { SearchInstrumentComponent } from 'src/app/shared/components/search-instrument/search-instrument.component';
import { Card } from 'src/app/models/card.model';
import { Share } from 'src/app/models/share.model';
import { DetailsService } from '../../services/details.service';
import { mergeMap, Subject, takeUntil, map } from 'rxjs';
import { HoldingsService } from '../../services/holdings.service';
import { getIonPageElement, IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    CardComponent,
    SearchInstrumentComponent,
]
})
export class DiscoverComponent implements OnInit {

  holdingsService = inject(HoldingsService);
  detailsService = inject(DetailsService);

  cards: Card[] = [];
  shares: Share[] = [];
  results: Share[] = [];
  topVolumeStock: Card[] = [];
  recentlySearched: Share[] = []
 
  private destroyRef = inject(DestroyRef);
  private destroy$ = new Subject<void>();

  constructor() {
    this.destroyRef.onDestroy(() => {
      this.destroy$.next();
      this.destroy$.complete();
    });
   }

  ngOnInit() {
    this.getShareDetails();
  }

  getShareDetails(): void {
      this.detailsService.fetchDetails().pipe(
        takeUntil(this.destroy$),
        mergeMap(details => {
          const topVolumeStocks = details.sort((a, b) => b.volume - a.volume).slice(0, 3);
          return this.holdingsService.fetchPricing().pipe(
            map(pricing => {
              const allShares = this.detailsService.mapDetailsWithPricing(details, pricing);         
              this.shares = this.detailsService.fetchShares(allShares);
              this.recentlySearched = [...this.shares.slice(0, 3)];
              this.cards = this.detailsService.mapDetailsWithPricing(topVolumeStocks, pricing);
            })
          );
        })
      ).subscribe({
        error: (err) => console.error('Error fetching cards:', err)
      });
    }

  handleInput($event: Event) {
    console.log($event);
    if ($event.target) {
      const target = $event.target as HTMLIonSearchbarElement;
      const query = target.value?.toLowerCase() || '';
      this.results = this.shares.filter((share) => share.name.toLowerCase().includes(query));
      this.recentlySearched = this.results.slice(0, 3);
    }
  }
}