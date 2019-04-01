# ApiView

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
 `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Mais Detalhes do projeto

A aplicação será executada na porta 4200, como estabelecido por defaut. url: localhost:4200/proposta.

Api possue um interface para criação de novas Propostas;
ao iniciar a aplicação est cadastrado duas propostas por default;
automaticamente é carregado as propostas através do método post,
mas infelizmente não concluí a API em Rails por dificuldades na configuração do 
CORS e roteamento usando o CORS-RACK
A aplicação faz todas as funcionalidades de um CRUD convencional.
