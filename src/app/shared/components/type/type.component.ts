import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonChip } from '@ionic/angular/standalone';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss'],
  standalone: true,
  imports: [CommonModule, IonChip]
})
export class TypeComponent {
  @Input() type: string = '';
  // @Input() selected: boolean = false;
}