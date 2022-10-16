import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "oivan-menu-bar",
  templateUrl: "./menu-bar.component.html",
  styleUrls: ["./menu-bar.component.scss"],
})
export class MenuBarComponent implements OnInit {
  @Input() isToggle = false;
  @Output() toggleChanged = new EventEmitter<boolean>();
  @Input() menus: any = [];
  @Output() onClick = new EventEmitter<MouseEvent>();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  OnToggleChanged() {
    this.isToggle = !this.isToggle;
    this.toggleChanged.emit(this.isToggle);
  }
  handleClick(event: MouseEvent) {
    this.onClick.emit(event);
  }
  goHome() {
    this.router.navigate([""]);
  }
}
