import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'oivan-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  defaultImage = 'assets/imgs/default-img.png';
  @Input() title: string = '';
  @Input() subTitle: string = '';
  @Input() img: string = '';
  @Input() description: string = '';
  @Input() url: string = '';

  constructor() {}

  ngOnInit(): void {}
}
