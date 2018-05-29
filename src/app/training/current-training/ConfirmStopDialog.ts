import { Component, OnInit } from '@angular/core';

import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'yiren-confirm-stop-dialog',
    template: `
    <h2 mat-dialog-title>Stop Your Training Progress</h2>
    <mat-dialog-content>Current Progress: {{ data.progress }}</mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button [mat-dialog-close]="false">No</button>
      <!-- The mat-dialog-close directive optionally accepts a value as a result for the dialog. -->
      <button mat-button [mat-dialog-close]="true">Yes</button>
    </mat-dialog-actions>
    `
})

export class ConfirmStopDialogComponent implements OnInit {
    constructor(@Inject(MAT_DIALOG_DATA) private data: number) { }
    ngOnInit() {
    }


}