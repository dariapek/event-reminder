import {Injectable} from '@angular/core';
import {EventItem} from './interface';
import {Subject} from 'rxjs';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})


export class EventService {
  private events: EventItem[] = [
    {
      date: '2020-09-11 00:00:00',
      person: 'Axmed',
      type: 'birthday',
      daysBefore: 1,
      isActive: true,
    },
    {
      date: '2001-07-30 00:00:00',
      person: 'Митя',
      text: 'День рождения Мити',
      type: 'birthday',
      daysBefore: 1,
      isActive: true,
    },
    {
      date: '2005-12-01 00:00:00',
      person: 'Саша',
      text: 'День рождения Саши',
      type: 'birthday',
      daysBefore: 1,
      isActive: true,
    },
    {
      date: '2020-09-03 00:00:00',
      person: 'Лена',
      text: 'Встретить Лену на вокзале',
      type: 'event',
      daysBefore: 0,
      isActive: true,
    },
    {
      date: '2020-09-03 00:00:00',
      text: 'Купить молоко',
      type: 'reminder',
      daysBefore: 0,
      isActive: true,
    },
  ];

  public event$ = new Subject<EventItem>();

  constructor() {
  }

  create() {
  }

  getEventDates() {
     return _.map(this.events, (eventItem) => {
      return new Date(eventItem.date).toDateString();
    });
  }

  remove() {
  }

  update() {
  }

  clickOnDate(date) {
    const targetDate = _.find(this.events, (event) => {
      return new Date(event.date).toDateString() === date.toDateString();
    });

    this.event$.next(targetDate);
  }
}
