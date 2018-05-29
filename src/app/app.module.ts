import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { AuthModule } from './auth/auth.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ConfirmStopDialogComponent } from './training/current-training/ConfirmStopDialog';
import { HeaderComponent } from './home/header/header.component';
import { HomeComponent } from './home/home.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSharedModule } from './shared/mat.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { TrainingModule } from './training/training.module';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    ConfirmStopDialogComponent
  ],
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    BrowserModule,
    AuthModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TrainingModule,
    MatSharedModule,
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[
    ConfirmStopDialogComponent
  ]
})
export class AppModule { }
