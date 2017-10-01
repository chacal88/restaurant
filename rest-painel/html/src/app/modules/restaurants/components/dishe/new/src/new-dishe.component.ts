import {Component, OnInit} from '@angular/core';
import * as JQuery from 'jquery';
import {Router} from '@angular/router';
import {DishesService} from "../../src/dishe.service";
import {AuthService} from "../../../../../user/services/auth.service";


@Component({
    selector: 'app-new-dishes',
    templateUrl: '../view/new-dishe.component.html'
})

export class NewDisheComponent implements OnInit {

    constructor(private router: Router, private authService: AuthService, private dishService: DishesService) {
    }

    dish: any = {};


    ngOnInit() {

        JQuery('.modal').modal({
            complete: () => this.router.navigate(['/dishes'])
        });

        JQuery('.modal').modal('open');

        this.authService.getUser()
            .then((res) => {
                this.dish.restaurant_id = res.restaurant.id;
            });
    }

    addFile(e) {
        console.log(e.target.files);
        this.dish.photo = e.target.files[0];
    }

    save(e) {

        e.preventDefault();

        if (!this.dish.photo) {
            window.Materialize.toast('Selecione uma foto antes.', 3000, 'red')
        }

        let formData = new FormData();

        formData.append('photo', this.dish.photo);
        formData.append('name', this.dish.name);
        formData.append('description', this.dish.description);
        formData.append('price', this.dish.price);
        formData.append('restaurant_id', this.dish.restaurant_id);

        this.dishService
            .builder()
            .insert(formData)
            .then(() => {
                this.dishService.eventEmitter.emit();
                JQuery('.modal').modal('close');
            });
    }
}

