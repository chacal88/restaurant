# REST-PAINEL
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:8001/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


# Docker

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Build docker image

```
$ docker build -t rest-painel . 
```

## Run the container

```
$ docker run -d -p 8001:80 rest-painel
```


The app will be available at http://localhost:8001

You can easily tweak the nginx config in ```nginx/default.conf```