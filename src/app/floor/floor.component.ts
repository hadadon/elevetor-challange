import { Component, Input } from '@angular/core';
import { ElevatorService } from '../elevator.service';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.css']
})
export class FloorComponent {
  @Input() floorNumber!: number;

  constructor(private elevatorService: ElevatorService) {}

  selectFloor() {
    this.elevatorService.requestFloor(this.floorNumber);
  }
}
