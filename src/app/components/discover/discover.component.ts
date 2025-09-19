import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

interface Card {
  title: string;
  subtitle: string;
  icon: string;
  amount: string;
  percentage: string;
  isPositive: boolean;
}

interface Type {
  name: string;
  selected: boolean;
}

interface Instrument {
  name: string;
  symbol: string;
  price: string;
  change: string;
  isPositive: boolean;
  image: string;
}

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss'],
  standalone: false
})
export class DiscoverComponent implements OnInit {
  cards: Card[] = [
    {
      title: 'Market Cap',
      subtitle: 'US Market',
      icon: 'square-dollar.svg',
      amount: '$42.9T',
      percentage: '0.24%',
      isPositive: true
    },
    {
      title: 'Trending',
      subtitle: 'Most active',
      icon: 'target.svg',
      amount: 'NVDA',
      percentage: '3.84%',
      isPositive: true
    }
  ];

  types: Type[] = [
    { name: 'All', selected: true },
    { name: 'Stocks', selected: false },
    { name: 'ETFs', selected: false },
    { name: 'Bonds', selected: false },
    { name: 'Crypto', selected: false }
  ];

  instruments: Instrument[] = [
    {
      name: 'NVIDIA Corp',
      symbol: 'NVDA',
      price: '$118.77',
      change: '3.84%',
      isPositive: true,
      image: 'https://logo.clearbit.com/nvidia.com'
    },
    {
      name: 'Amazon.com Inc',
      symbol: 'AMZN',
      price: '$178.75',
      change: '1.22%',
      isPositive: true,
      image: 'https://logo.clearbit.com/amazon.com'
    },
    {
      name: 'Meta Platforms',
      symbol: 'META',
      price: '$486.18',
      change: '0.91%',
      isPositive: true,
      image: 'https://logo.clearbit.com/meta.com'
    },
    {
      name: 'Alphabet Inc',
      symbol: 'GOOGL',
      price: '$163.71',
      change: '0.32%',
      isPositive: false,
      image: 'https://logo.clearbit.com/google.com'
    }
  ];

  constructor() { }

  ngOnInit() {}

  selectType(index: number) {
    this.types.forEach((type, i) => {
      type.selected = i === index;
    });
  }
}