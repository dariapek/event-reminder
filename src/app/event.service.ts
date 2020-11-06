import {Injectable} from '@angular/core';
import {EventItem} from './interface';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})


export class EventService {
  public events: EventItem[] = [
    {
      date: '2020-09-11',
      person: 'Axmed',
      type: 'birthday',
      daysBefore: 1,
      isActive: true,
    },
    {
      date: '2001-07-30',
      person: 'Митя',
      text: 'День рождения Мити',
      type: 'birthday',
      daysBefore: 1,
      isActive: true,
    },
    {
      date: '2005-12-01',
      person: 'Саша',
      text: 'День рождения Саши',
      type: 'birthday',
      daysBefore: 1,
      isActive: true,
    },
    {
      date: '2020-09-03',
      person: 'Лена',
      text: 'Встретить Лену на вокзале',
      type: 'event',
      daysBefore: 0,
      isActive: true,
    },
    {
      date: '2020-09-03',
      text: 'Купить молоко',
      type: 'reminder',
      daysBefore: 0,
      isActive: true,
    },
    {
      date: '2020-10-07',
      text: 'Купить молоко',
      type: 'reminder',
      daysBefore: 0,
      isActive: true,
    },
    {
      date: '2020-10-15',
      text: 'Купить кока-колу',
      type: 'reminder',
      daysBefore: 0,
      isActive: true,
    },
    {
      date: '2020-11-06',
      text: 'Митинг после демо',
      type: 'reminder',
      daysBefore: 0,
      isActive: true,
    },
    {
      date: '2020-11-23',
      text: 'День рождение Тани',
      type: 'birthday',
      daysBefore: 0,
      isActive: true,
    },
  ];

  constructor() {
  }

  create() {
  }

  getEventDates() {
     return _.map(this.events, (eventItem) => {
      return new Date(eventItem.date).toDateString();
    });
  }

  getAllEvents() {
    return this.events;
  }


  remove() {
  }

  update() {
  }
}
