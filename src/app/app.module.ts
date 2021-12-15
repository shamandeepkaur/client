import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeeTimeComponent } from './tee-time/tee-time.component';

@NgModule({
  declarations: [
    AppComponent,
    TeeTimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [TeeTimeComponent]
})
export class AppModule { }
