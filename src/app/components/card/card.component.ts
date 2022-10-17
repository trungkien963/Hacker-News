import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'oivan-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, AfterViewInit {
  @ViewChild("card") card: ElementRef | undefined;
  @Input() title: string = '';
  @Input() subTitle: string = '';
  @Input() img: string = '';
  @Input() description: string = '';
  @Input() url: string = '';
  @Input() height = '345';
  @Input() width = '332';

  defaultImage = 'assets/imgs/default-img.png';

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.card?.nativeElement, "max-height", `${this.height}px`);
    // this.renderer.setStyle(this.card?.nativeElement, "width", `${this.width}px`);
  }

  ngOnInit(): void {}
}
