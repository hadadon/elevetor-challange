// elevator.component.ts
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ElevatorService } from '../elevator.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-elevator',
  templateUrl: './elevator.component.html',
  styleUrls: ['./elevator.component.css']
})
export class ElevatorComponent implements OnInit, OnDestroy {
  @Input() id!: number;
  currentFloor!: number;
  topPosition!: string;
  private floorReachedSubscription!: Subscription;

  constructor(private elevatorService: ElevatorService) {}

  ngOnInit() {
    this.currentFloor = this.elevatorService.getCurrentFloor(this.id);
    this.updateTopPosition();
    this.floorReachedSubscription = this.elevatorService.floorReached.subscribe(({ elevatorId, floor }) => {
      if (elevatorId === this.id) {
        this.currentFloor = floor;
        this.updateTopPosition();
        this.playDingSound();
      }
    });
  }

  ngOnDestroy() {
    if (this.floorReachedSubscription) {
      this.floorReachedSubscription.unsubscribe();
    }
  }

  private updateTopPosition() {
    const floorHeight = 110; // Height of each floor
    const borderSize = 7; // Size of the border
    const totalHeight = floorHeight + borderSize;
    this.topPosition = `${(15 - this.currentFloor) * totalHeight}px`;
  }

  private playDingSound() {
    const audio = new Audio('assets/ding.mp3');
    audio.play();
  }
}
