import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { ElevatorService } from '../../elevator.service';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-floor-button',
  templateUrl: './floor-button.component.html',
  styleUrls: ['./floor-button.component.css']
})
export class FloorButtonComponent implements OnInit, OnDestroy {
  @Input() floorNumber!: number;
  isPressed: boolean = false;
  timer: number = 0;
  private floorRequestedSubscription!: Subscription;
  private floorReachedSubscription!: Subscription;
  private timerInterval!: Subscription;

  constructor(private elevatorService: ElevatorService) {}

  ngOnInit() {
    this.floorRequestedSubscription = this.elevatorService.floorRequested.subscribe(({ floor, timestamp }) => {
      if (floor === this.floorNumber) {
        this.isPressed = true;
        this.startTimer(timestamp);
      }
    });

    this.floorReachedSubscription = this.elevatorService.floorReached.subscribe(({ floor }) => {
      if (floor === this.floorNumber) {
        this.isPressed = false;
        this.stopTimer();
      }
    });
  }

  ngOnDestroy() {
    if (this.floorRequestedSubscription) {
      this.floorRequestedSubscription.unsubscribe();
    }
    if (this.floorReachedSubscription) {
      this.floorReachedSubscription.unsubscribe();
    }
    if (this.timerInterval) {
      this.timerInterval.unsubscribe();
    }
  }

  selectFloor() {
    this.elevatorService.requestFloor(this.floorNumber);
  }

  startTimer(startTimestamp: number) {
    this.timer = 0;
    this.timerInterval = interval(100).subscribe(() => {
      this.timer = Date.now() - startTimestamp;
    });
  }

  stopTimer() {
    if (this.timerInterval) {
      this.timerInterval.unsubscribe();
    }
    this.timer = 0;
  }
}