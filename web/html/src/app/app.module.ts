import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppHttpService} from "./app.http.service";
import {AppComponent} from './app.component';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {UserModule} from "./modules/user/user.module";
import {RestaurantsModule} from "./modules/restaurants/restaurants.module";

const appRoutes: Routes = [
    {path: '', redirectTo: '/search', pathMatch: 'full'}
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        UserModule,
        RouterModule.forRoot(appRoutes),
        RestaurantsModule
    ],
    providers: [
        AppHttpService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
