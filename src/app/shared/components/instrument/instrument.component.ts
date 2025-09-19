import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-instrument',
  templateUrl: './instrument.component.html',
  styleUrls: ['./instrument.component.scss'],
  standalone: false
})
export class InstrumentComponent implements OnInit {
  @Input() name: string = '';
  @Input() symbol: string = '';
  @Input() price: string = '';
  @Input() change: string = '';
  @Input() isPositive: boolean = true;
  @Input() image: string = '';

  constructor() { }

  ngOnInit() {}
}