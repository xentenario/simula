# Simula

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.7.

## Description
The idea of this project is to show the  use via a simple UI some design concepts. The code was split into basic generic components aiming to reusability and composition.

Key Components.

DataDashboard: Displays data by means of listening to an event from the SimulaService
Charts: Generic presentational component.
Simula Form: Component for collecting the simulation data.
Simula Service: Service in charge of running the code logic. It will emit an event for every simulation cycle, allowing the rest of the UI to react and work with each individual calculation result.
Simula Data Model: Represents the data models necessary to work with the simulation data.

NOTE: 
  IF YOU RUN MULTIPLE SIMULATIONS, THE DATA WILL BE AGGREGATED TO THE TABLE AND TO THE GRAPH, THIS IS BY DESIGN ( A SIMPLE WAY TO COMPARE QUICKLY TO SIMULATIONS).
  A REAL APPLICATION WILL ALLOW THE USER TO DELETE, SAVE, ETC BUT I DIDN'T WANT TO COMPLICATE THE DEMO. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).  NOT INCLUDED IN THIS DEMO.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
