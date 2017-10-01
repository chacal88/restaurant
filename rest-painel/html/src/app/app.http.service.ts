import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {environment} from '../environments/environment';
import {Router} from '@angular/router';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppHttpService {

    protected url: string;

    protected header: Headers;

    constructor(protected http: Http, private router: Router) {

        this.setAccessToken();
    }

    request() {

        return this.http;
    }

    getUser() {

        return this.builder('auth/me').list();
    }

    setAccessToken() {

        let token = this.getCookie('token');

        // this.header = new Headers({
        //     'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjdiMzA4ZDJkYTIxNzQ4YjFiYmFjZDFiMmEzMWIxN2E4MjVjMTIyMTk2Njc1YTI2YzFjNjAyNTk0NzUxYTU1MWZmMTgxZmZlMTQxY2U2NTg2In0.eyJhdWQiOiI1IiwianRpIjoiN2IzMDhkMmRhMjE3NDhiMWJiYWNkMWIyYTMxYjE3YTgyNWMxMjIxOTY2NzVhMjZjMWM2MDI1OTQ3NTFhNTUxZmYxODFmZmUxNDFjZTY1ODYiLCJpYXQiOjE1MDY2NDY0OTUsIm5iZiI6MTUwNjY0NjQ5NSwiZXhwIjoxNTM4MTgyNDk1LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.VLSjNs7bem9KCS0V9cj-GfqPH45RxLJ_7K3YlRDHLZKaiCawjJAKPGJur5TTI_evZHxJ2mWJ_tqy47blOX-s1WWCvl_D2jCp6PDC4NzVLUTyqLZRAWwAYlZ3P3gxp2QlvIWjGJzIkftnYUlJa8TDhSB2CXVUIgAaVs1K7FOedaQJCBl2TGkS5_B8-CLNJDkxcMWUMW-6Zu3QKAWD5imvOLa6j2Yzllaf11wOzdLgktY9xZq59XSb4J5j94kLK3DLgZJ2WwqC1V5e5foPKh4Jf730-HxC3ulIQAUOrlGi_Ary0XO8GcLKeefUJG2rLjEgF1wrjfcUbfQZp-GI2O-RWng7DuF9gj2j5XIXlYQZkzKMyBbvS0JUaWKGlPkwMDGoSIoPIaEGvdZD9CFztnGNsaxdzn6FSuHCdTmVyDPJyiYXY1mYyv4roSG1YFuvX9dZEHYGBYbX-O0gUdrVz-zYZzeegRKymsKo5qC4mIKXmUOQjHET-VxHj3luylInP-nbSRMynWJBa6vexQVyXfh66btvNVU8SuWQJlhhPccneDB11OyzFnsbM75O_pYazOUUtvHOYJF4AaN1uzdbhDk5zRxSTR1XSdmCEKPG9dYqhJ_3v0TIn9xwMnXXGqaJB8Tdf_xombs3suAmWENUqUNWOkKxYzLsgqS86XS7B5QnRns',
        //     'Accept': 'application/json'
        // });
        this.header = new Headers({'Authorization': 'Bearer ' + token, 'Accept': 'application/json'});
    }

    builder(resource: string) {

        this.url = environment.server_url + '/api/v1/' + resource;

        return this;
    }

    list(options: any = {}) {

        let url = this.url;

        if (options.filters !== undefined) {

            let filters = options.filters;

            filters.forEach((item, index) => {
                let field = Object.keys(item)[0];
                let value = item[field];
                url = url + '?where[' + field + ']=' + value;
            });
        }

        let observable = this.http.get(url, {headers: this.header})

        return this.toPromise(observable);
    }

    view(id: number) {

        let observable = this.http.get(this.url + '/' + id, {headers: this.header})

        return this.toPromise(observable);
    }

    update(id: number, data: object) {

        let observable = this.http.put(this.url + '/' + id, data, {headers: this.header})

        return this.toPromise(observable);
    }

    insert(data: Object) {

        let observable = this.http.post(this.url, data, {headers: this.header})

        return this.toPromise(observable);
    }

    delete(id: number) {

        let observable = this.http.delete(this.url + '/' + id, {headers: this.header});

        return this.toPromise(observable);
    }

    protected toPromise(request) {

        return request.toPromise()
            .then((res) => {
                return res.json() || {}
            })
            .catch((err) => {

                let message = 'Algo deu errado no servidor, informe o erro ' + err.status + ' ao administrador';

                if (err.status === 401) {
                    message = 'Você não tem permissão para ver isso, informe um usuário e senha válidos';
                    this.router.navigate(['/login']);
                }

                if (err.status === 422) {
                    message = 'Falha de validação, verifique os campos';
                }

                if (err.status === 404) {
                    message = 'Impossível se conectar ao servidor, verifique sua conexão ou tente novamente em alguns minutos';
                }

                window.Materialize.toast(message, 3000, 'red');
            });
    }

    private getCookie(name: string) {

        let cookies = document.cookie;

        if (!cookies) {
            return null;
        }

        let cookiesCollection: string[] = cookies.split(';');

        for (let i = 0, size = cookiesCollection.length; i < size; i++) {

            let cookieCurrent = cookiesCollection[i].split('=');

            if (cookieCurrent[0].trim() === name) {
                return cookieCurrent[1] || null;
            }
        }

        return null;
    }
}