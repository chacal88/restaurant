import {Component, OnInit} from '@angular/core';
import * as JQuery from 'jquery';
import {Router} from '@angular/router';


@Component({
  selector: 'app-edit-dishes',
  templateUrl: './edit-dishe.component.html'
})

export class EditDisheComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
    JQuery('.modal').modal({
      complete: () => this.router.navigate(['/dishes'])
    });
    JQuery('.modal').modal('open');
  }
}

