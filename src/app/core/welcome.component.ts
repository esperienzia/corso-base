import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {CommonService} from '../services/common.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  showSon = false;
  constructor(public common: CommonService,
              private router: Router) {}

  navigate(something) {
    this.router.navigate(['welcome']);
  }
}
