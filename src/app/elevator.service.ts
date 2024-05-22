import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElevatorService {
  private floorRequests: { [key: number]: number[] } = {};
  private currentFloors: { [key: number]: number } = {};
  public floorReached = new Subject<{ elevatorId: number, floor: number }>();
  public floorRequested = new Subject<{ floor: number, timestamp: number }>();

  constructor() {
    this.currentFloors = { 1: 1, 2: 1, 3: 1 };
    this.floorRequests = { 1: [], 2: [], 3: [] };
  }

  getCurrentFloor(elevatorId: number): number {
    return this.currentFloors[elevatorId];
  }

  requestFloor(floor: number) {
    const timestamp = Date.now();
    this.floorRequested.next({ floor, timestamp });
    const nearestElevator = this.getNearestElevator(floor);
    this.floorRequests[nearestElevator].push(floor);
    this.processQueue(nearestElevator);
  }

  private getNearestElevator(requestedFloor: number): number {
    const elevators = Object.keys(this.currentFloors).map(Number);
    const distances = elevators.map(elevatorId => {
      return Math.abs(requestedFloor - this.currentFloors[elevatorId]);
    });
    const nearestElevatorIndex = distances.indexOf(Math.min(...distances));
    return elevators[nearestElevatorIndex];
  }

  private processQueue(elevatorId: number) {
    if (this.floorRequests[elevatorId].length > 0) {
      const nextFloor = this.floorRequests[elevatorId].shift();
      if (nextFloor !== undefined) {
        setTimeout(() => {
          this.currentFloors[elevatorId] = nextFloor;
          this.floorReached.next({ elevatorId, floor: nextFloor });
          setTimeout(() => this.processQueue(elevatorId), 2000); // Delay processing next request by 2 seconds
        }, 2000); // Move to the next floor in two seconds
      }
    }
  }
}
