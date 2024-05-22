import { Component } from '@angular/core';
import { ElevatorService } from './elevator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  floors: number[] = Array.from({ length: 15 }, (_, i) => i + 1);
  elevators = [1, 2, 3];

  constructor(public elevatorService: ElevatorService) {}

  // public moveElevator(floor: number): void {
  //   this.elevatorService.moveElevator(floor);
  // }
}
