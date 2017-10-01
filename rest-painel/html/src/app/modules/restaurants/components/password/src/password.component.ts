import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../../user/services/auth.service";


@Component({
    selector: 'app-password',
    templateUrl: '../view/password.component.html'
})

export class PasswordComponent implements OnInit {

    user: any = {
        password: null,
        password_confirmation: null
    };

    constructor(private authService: AuthService) {

    }

    ngOnInit() {
    }

    save(e) {

        e.preventDefault();

        if (this.user.password && this.user.password == this.user.password_confirmation) {

            this.authService
                .builder()
                .changePassword(this.user)
                .then( () => {
                   window.Materialize.toast('Salvo com sucesso.',3000);
                });

        }

        window.Materialize.toast('Verifique a senha',3000,'red')
    }
}

