import { Component, EventEmitter, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { ConfirmStopDialogComponent } from './ConfirmStopDialog';
import { Output } from '@angular/core';

@Component({
  selector: 'yiren-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.scss']
})
export class CurrentTrainingComponent implements OnInit {

  @Output()
  stopCurrentTraining = new EventEmitter<boolean>();

  progress = 0;
  constructor(private dialog: MatDialog) { }
  timerId;
  ngOnInit() {
    this.startOrResumeProgress();
  }

  startOrResumeProgress() {
    this.timerId = setInterval(() => this.progress = this.progress + 5
    , 500);
  }

  onStopConfirm() {
    clearInterval(this.timerId);
    const dialogRef = this.dialog.open(ConfirmStopDialogComponent,{
      data: {
        progress: this.progress
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.stopCurrentTraining.emit(result);
      } else {
        this.startOrResumeProgress();
      }
    });

  }





}
