import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from "./dashboard/dashboard.component";
import {EvaluationComponent} from "./dashboard/evaluation/evaluation.component";

import {DisheComponent} from "./dishe/dishe.component";
import {NewDisheComponent} from './dishe/new-dishe.component';
import {EditDisheComponent} from './dishe/edit-dishe.component';

import {EditComponent} from "./edit/edit.component";

import {PasswordComponent} from "./password/password.component";

import {ProfileComponent} from "./profile/profile.component";

const appRoutes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      {
        path: 'evaluation/:id', component: EvaluationComponent
      }
    ]
  },
  {
    path: 'dishes', component: DisheComponent,
    children: [
      {
        path: 'new', component: NewDisheComponent
      },
      {
        path: 'edit/:id', component: EditDisheComponent
      },
    ]
  },
  {
    path: 'edit', component: EditComponent
  },
  {
    path: 'password', component: PasswordComponent
  },
  {
    path: 'profile', component: ProfileComponent
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  declarations: [
    DashboardComponent,
    EvaluationComponent,
    DisheComponent,
    NewDisheComponent,
    EditDisheComponent,
    EditComponent,
    PasswordComponent,
    ProfileComponent,
  ]
})

export class RestaurantsModule {
}
