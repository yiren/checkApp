import { CommonModule } from '@angular/common';
import { CurrentTrainingComponent } from './current-training/current-training.component';
import { MatSharedModule } from '../shared/mat.module';
import { NewTrainingComponent } from './new-training/new-training.component';
import { NgModule } from '@angular/core';
import { PastTrainingComponent } from './past-training/past-training.component';
import { TrainingComponent } from './training.component';

@NgModule({
  imports: [
    CommonModule,
    MatSharedModule,
  ],
  declarations: [TrainingComponent, CurrentTrainingComponent, PastTrainingComponent, NewTrainingComponent]
})
export class TrainingModule { }
