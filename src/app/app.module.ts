import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElevatorComponent } from './elevator/elevator.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FloorComponent } from './floor/floor.component';
import { FloorButtonComponent } from './floor/floor-button/floor-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ElevatorComponent,
    FloorComponent,
    FloorButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
