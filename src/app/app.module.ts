import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CommonService} from './services/common.service';
import {FormsModule} from '@angular/forms';
import {WelcomeModule} from './core/welcome.module';
import {AppRoutingModule} from './app-routing.module';
import {CommonModule} from './common/common.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    WelcomeModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [CommonService],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
