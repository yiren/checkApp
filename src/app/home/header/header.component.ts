import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'yiren-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output()
  toggleNav = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  toggle(){
    this.toggleNav.emit();
  }
}
