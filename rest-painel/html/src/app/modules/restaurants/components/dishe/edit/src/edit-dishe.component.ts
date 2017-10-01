import {Component, OnInit} from '@angular/core';
import * as JQuery from 'jquery';
import {Router, ActivatedRoute} from '@angular/router';
import {DishesService} from "../../src/dishe.service";


@Component({
    selector: 'app-edit-dishes',
    templateUrl: '../view/edit-dishe.component.html'
})

export class EditDisheComponent implements OnInit {


    dish: any = {};

    constructor(private router: Router, private route: ActivatedRoute, private dishService: DishesService) {
    }

    ngOnInit() {
        JQuery('.modal').modal({
            complete: () => this.router.navigate(['/dishes'])
        });

        JQuery('.modal').modal('open');

        this.route.params.subscribe(params => {
            this.dishService.builder().view(params['id']).then((res) => {
                this.dish = res;
                window.Materialize.updateTextFields();
            })
        })
    }

    addFile(e) {
        console.log(e.target.files);
        this.dish.photo = e.target.files[0];
    }

    save(e) {

        e.preventDefault();

        let formData = this.dish;

        if(this.dish.photo){

            let formData = new FormData();

            formData.append('photo', this.dish.photo);
            formData.append('name', this.dish.name);
            formData.append('description', this.dish.description);
            formData.append('price', this.dish.price);
            formData.append('restaurant_id', this.dish.restaurant_id);
        }

        this.dishService
            .builder()
            .update(this.dish.id, formData)
            .then(() => {
                this.dishService.eventEmitter.emit();
                JQuery('.modal').modal('close');
            });
    }
}

