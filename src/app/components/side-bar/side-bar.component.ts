import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'oivan-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit, OnChanges {
  @Input() isToggle = true;
  @Input() menus: any = [];
  @Output() onClick = new EventEmitter<MouseEvent>();

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    const element = document.getElementById('side-bar');
    if (element) {
      if (this.isToggle) {
        element.className = 'side-bar side-bar-open';
      } else {
        element.className = 'side-bar';
      }
    }
  }

  ngOnInit(): void {
  }
  
  handleClick(event: MouseEvent) {
    this.onClick.emit(event);
  }

}
