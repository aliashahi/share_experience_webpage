import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'EW-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  carouselIndex = 1;

  constructor() {}

  ngOnInit(): void {}

  onPrev() {
    this.carouselIndex = (this.carouselIndex - 1) % 3;
  }

  onNext() {
    this.carouselIndex = (this.carouselIndex + 1) % 3;
  }
}
