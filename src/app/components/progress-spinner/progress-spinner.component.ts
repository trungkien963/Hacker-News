import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'oivan-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss']
})
export class ProgressSpinnerComponent implements AfterViewInit {
  @ViewChild("loader") loader: ElementRef | undefined;

  @Input() height = '120';
  @Input() width = '120';

  constructor(private renderer: Renderer2) { }
  ngAfterViewInit(): void {

    this.renderer.setStyle(this.loader?.nativeElement, "height", `${this.height}px`);
    this.renderer.setStyle(this.loader?.nativeElement, "width", `${this.width}px`);
    this.renderer.setStyle(this.loader?.nativeElement, "border", `${Number(this.width)/7.5}px solid #f3f3f3`);
    this.renderer.setStyle(this.loader?.nativeElement, "border-top", `${Number(this.width)/7.5}px solid #3498db`);
  }

  ngOnInit(): void {
  }

}
