import {Component, OnInit} from '@angular/core';
import * as JQuery from 'jquery';
import {Router} from '@angular/router';


@Component({
  selector: 'app-new-dishes',
  templateUrl: './new-dishe.component.html'
})

export class NewDisheComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
    JQuery('.modal').modal({
      complete: () => this.router.navigate(['/dishes'])
    });
    JQuery('.modal').modal('open');
  }
}

