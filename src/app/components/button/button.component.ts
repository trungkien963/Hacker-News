import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'oivan-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() name = '';
  @Input() active = false;
  @Input() type = 'link';
  @Input() isMenu = false;
  @Input() hidden = false;
  @Output() onClick = new EventEmitter<MouseEvent>();
  constructor() {}

  ngOnInit(): void {}

  handleClick(event: MouseEvent) {
    this.onClick.emit(event);
  }
}
