import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RestaurantsModule} from './modules/restaurants/restaurants.module'
import {AppHttpService} from "./app.http.service";
import {AppComponent} from './app.component';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";

const appRoutes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RestaurantsModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        AppHttpService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
