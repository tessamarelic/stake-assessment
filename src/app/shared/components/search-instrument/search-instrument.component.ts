import { CommonModule } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';
import { IonCol, IonGrid, IonRow } from '@ionic/angular/standalone';

@Component({
  selector: 'app-search-instrument',
  imports: [IonGrid, IonCol, IonRow, CommonModule],
  templateUrl: './search-instrument.component.html',
  styleUrl: './search-instrument.component.scss',
  standalone: true,
})
export class SearchInstrumentComponent {
  @Input() description: string = '';
  @Input() name: string = '';
  @Input() symbol: string = '';
  @Input() price: string = '';
}
