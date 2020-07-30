import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoldDataService {

  selectedFeedType:  Subject<string> = new Subject<string>();
  constructor() { }

  setchangefeedtype(value) {
    this.selectedFeedType.next(value);
  }

  // getchangefeedtype(value) {
  // return this.selectedFeedType;
  // }
}
