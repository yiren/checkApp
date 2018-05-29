import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yiren-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit {
  isTrainingStarted = false;
  constructor() { }

  ngOnInit() {
  }

  onStartTraining() {
    this.isTrainingStarted=true;
  }
}
