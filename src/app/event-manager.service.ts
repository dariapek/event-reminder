import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {EventItem} from './interface';
import * as _ from 'lodash';
import {EventService} from './event.service';

@Injectable({
  providedIn: 'root'
})
export class EventManagerService {

  public event$ = new Subject<EventItem>();
  private eventsList = [];

  constructor(private eventService: EventService) { }

  onDateClick(date) {
    this.eventsList = this.eventService.getAllEvents();
    const targetDate = _.find(this.eventsList, (event) => {
      return new Date(event.date).toDateString() === date.toDateString();
    });

    this.event$.next(targetDate);
  }
}
