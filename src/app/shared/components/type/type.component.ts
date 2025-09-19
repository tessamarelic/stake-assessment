import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss'],
  standalone: false
})
export class TypeComponent implements OnInit {
  @Input() name: string = '';
  @Input() selected: boolean = false;

  constructor() { }

  ngOnInit() {}
}