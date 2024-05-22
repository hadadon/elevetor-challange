# ElevatorChallenge

Hello everyone,
This is my first time using Angular and TypeScript. It was a very challenging and interesting task. I used ChatGPT and Google for assistance. I didn't manage to implement the timer for the elevetors and document each line as I work full-time, so I only had time in the evenings to work on the project.
Regarding the project itself, each component was built in three files: a CSS file that defines the design and appearance of the various functions, an HTML file that links the code itself for display on the web, and a TS file that defines the algorithm and functionality of the code.
The central algorithm, which optimizes the elevator's arrival time so that the nearest elevator reaches the requested floor, was built using a built-in absolute value function. This function subtracts the requested floor number from the floor numbers where the other elevators are located, and the elevator number that returns the smallest absolute difference causes that elevator to start moving to the requested floor.
Respectfully, Idan Hadad


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
