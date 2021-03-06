import { Component } from '@angular/core';
import {CommonService} from './services/common.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(public common: CommonService,
              private router: Router) {}

  navigate(something) {
    this.router.navigate(['welcome']);
  }
}
