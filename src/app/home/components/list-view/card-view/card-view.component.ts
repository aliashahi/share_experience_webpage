import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/core/models/card';

@Component({
  selector: 'EW-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss'],
})
export class CardViewComponent implements OnInit {
  @Input() direction: 'LTR' | 'RTL' = 'LTR';
  @Input() card: Card = {
    id: 'd-fk-pwe-kfwe-fpo',
    title: 'Angular Formly Problem 1',
    initDate: '1399/12/1 11:28 AM',
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque autem
    cupiditate totam optio! Id a vitae optio suscipit repellendus aut
    sapiente, maxime veritatis sit ab voluptatem corporis repellat? Nisi,
    quidem.`,
    coverUrl: '../../../../assets/images/code1.jpg',
    userId: '1',
    liked: 4,
    tags: [
      { title: 'angular', id: '1' },
      { title: 'formly', id: '2' },
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
