import { Component, Input, OnInit, TemplateRef, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonCard, IonCardContent, IonIcon, IonThumbnail } from '@ionic/angular/standalone';
import { TypeComponent } from '../type/type.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [CommonModule, IonCard, IonCardContent, IonIcon, IonThumbnail, TypeComponent]
})
export class CardComponent implements OnInit {
  @Input() symbol: string = '';
  @Input() fullname: string = '';
  @Input() logo: string = '';
  @Input() price: string = '';
  @Input() layout: 'compact' | 'full' = 'compact';
  @Input() type: string = '';
  
  @Input() additionalContent?: TemplateRef<any>;
  
  constructor() { }
  
  ngOnInit() { 
    console.log(this.logo);
  }
}