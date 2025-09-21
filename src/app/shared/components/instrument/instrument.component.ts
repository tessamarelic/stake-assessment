import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonRow, IonCol } from '@ionic/angular/standalone';
import { IonContent } from '@ionic/angular';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-instrument',
  templateUrl: './instrument.component.html',
  styleUrls: ['./instrument.component.scss'],
  standalone: true,
  imports: [CommonModule, SharedModule]
})
export class InstrumentComponent implements OnInit {
  @Input() totalShares: string = '';
  @Input() name: string = '';
  @Input() symbol: string = '';
  @Input() price: string = '';
  @Input() change: string = '';
  @Input() isPositive: boolean = true;


  constructor() { }

  ngOnInit() {}
}