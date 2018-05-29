import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'yiren-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Output()
  closeNav = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  close(){
    this.closeNav.emit();
  }

}
