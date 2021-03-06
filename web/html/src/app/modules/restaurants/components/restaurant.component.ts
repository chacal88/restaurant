import {Component} from "@angular/core";
import * as JQuery from 'jquery';
import {AppHttpService} from "../../../app.http.service";

@Component({
    selector: 'app-restaurants',
    templateUrl: './restaurant.component.html',
    styleUrls: ['./restaurant.component.css']

})

export class RestaurantComponent {

    address: string;
    restaurants: any = [];
    status: string;

    constructor(private appHttpService: AppHttpService) {

    }

    ngOnInit() {
        JQuery('.parallax').parallax();
    }

    search(e) {

        e.preventDefault();

        if (!this.address) {
            window.Materialize.toast('você precisa digitar seu endereço', 3000);
            return;
        }

        this.appHttpService
            .builder('restaurants/by-address?address=' + this.address)
            .list()
            .then((res) => {
                this.restaurants = res.restaurants;
                this.status = res.status;

                if (this.status === 'success' && this.restaurants.length === 0) {
                    this.status = 'error';
                }

                let body = JQuery('html,body');
                body.stop().animate({scrolltop: 300}, 500, 'swing');
            });
    }
}