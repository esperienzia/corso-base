import {NgModule} from '@angular/core';
import {FirstComponent} from '../first.component';
import {FormsModule} from '@angular/forms';
import {CommonService} from '../services/common.service';
import {BrowserModule} from '@angular/platform-browser';


@NgModule({
  declarations: [
    FirstComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CommonService],
  exports: [
    FirstComponent
  ],
  bootstrap: []
})
export class CommonModule { }
