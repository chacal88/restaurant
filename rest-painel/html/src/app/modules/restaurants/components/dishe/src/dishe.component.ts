import {Component, OnInit} from '@angular/core';
import {DishesService} from "./dishe.service";
import {AuthService} from "../../../../user/services/auth.service";


@Component({
    selector: 'app-dishes',
    templateUrl: '../view/dishe.component.html'
})

export class DisheComponent implements OnInit {

    dishes = {};

    constructor(private dishesService: DishesService,
                protected authService: AuthService) {
    }

    ngOnInit() {
        this.authService.getUser()
            .then((res) => {
                let id = res.restaurant.id;
                let options = {
                    filters: [
                        {
                            restaurant_id: id
                        }
                    ]
                };

                this.dishesService.eventEmitter
                    .subscribe(() => {
                        this.dishesService.builder()
                            .list(options)
                            .then((res) => this.dishes = res);
                    });

                this.dishesService.eventEmitter.emit();
            });
    }

    remove(id: number) {
        this.dishesService
            .builder()
            .delete(id)
            .then(() => {
                this.dishesService.eventEmitter.emit();
            })
    }
}

