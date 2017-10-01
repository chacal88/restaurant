import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {RestaurantService} from './services/restaurant.service';
import {DashboardComponent} from "./components/dashboard/src/dashboard.component";
import {EvaluationComponent} from "./components/dashboard/evaluation/src/evaluation.component";
import {DisheComponent} from "./components/dishe/src/dishe.component";
import {NewDisheComponent} from "./components/dishe/new/src/new-dishe.component";
import {EditDisheComponent} from "./components/dishe/edit/src/edit-dishe.component";
import {EditComponent} from "./components/edit/src/edit.component";
import {DishesService} from "./components/dishe/src/dishe.service";
import {AuthService} from "../user/services/auth.service";

const appRoutes: Routes = [
    {
        path: 'dashboard', component: DashboardComponent,
        children: [
            {path: 'evaluation/:id', component: EvaluationComponent}
        ]
    },
    {
        path: 'dishes', component: DisheComponent,
        children: [
            {path: 'new', component: NewDisheComponent},
            {path: 'edit/:id', component: EditDisheComponent},
        ]
    },
    {path: 'edit', component: EditComponent},
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        DashboardComponent,
        EvaluationComponent,
        DisheComponent,
        EditComponent,
        EditDisheComponent,
        NewDisheComponent
    ],
    providers: [
        AuthService,
        RestaurantService,
        DishesService
    ]
})
export class RestaurantsModule {
}