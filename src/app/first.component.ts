import { Component } from '@angular/core';
import {CommonService} from './services/common.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html'
})
export class FirstComponent {
  title = 'app';
  constructor(public common: CommonService,
              private router: Router) {}

  navigate(something) {
    this.router.navigate(['welcome']);
  }
}
