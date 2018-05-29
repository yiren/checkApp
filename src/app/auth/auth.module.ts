import { RouterModule, Routes } from '@angular/router';

import { AuthRoutingModule } from './auth.routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  declarations: [SignupComponent, SigninComponent]
})
export class AuthModule { }
