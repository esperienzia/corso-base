import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {WelcomeComponent} from './welcome.component';
import {CommonService} from '../services/common.service';
import {CommonModule} from '../common/common.module';

@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  exports: [
    WelcomeComponent
  ],
  providers: [CommonService],
  bootstrap: []
})
export class WelcomeModule { }
