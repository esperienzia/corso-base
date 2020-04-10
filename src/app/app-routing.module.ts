import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {WelcomeComponent} from './core/welcome.component';
import {FirstComponent} from './first.component';

const appRoutes: Routes = [
  {
    path: '',
    component: FirstComponent,
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
