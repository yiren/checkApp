import { RouterModule, Routes } from '@angular/router';

import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { TrainingComponent } from './training/training.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'training', component: TrainingComponent},
  { path: 'auth', loadChildren: ()=>AuthModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//export const routedComponents = [NameComponent];
