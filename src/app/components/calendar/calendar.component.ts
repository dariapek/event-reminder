import {Component, OnInit} from '@angular/core';
import * as _ from 'lodash';
import {EventService} from '../../event.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  private date = new Date();

  public currentDay = new Date().getDate();
  public currentDate = new Date();
  public currentMonth = new Date().getMonth();
  public monthName: string;
  public month: number;
  public year: number;
  public daysOfMonth: any = [];
  public daysOfPrevMonth: any = [];
  public daysOfNextMonth: any = [];
  public eventDates = [];

  constructor(private eventService: EventService) {
  }

  ngOnInit(): void {
    this.eventDates = this.eventService.getEventDates();
    this.renderCalendar();
  }

  renderCalendar() {
    this.date.setDate(1);
    this.month = this.date.getMonth();
    this.monthName = {
      0: 'January',
      1: 'February',
      2: 'March',
      3: 'April',
      4: 'May',
      5: 'June',
      6: 'July',
      7: 'August',
      8: 'September',
      9: 'October',
      10: 'November',
      11: 'December',
    }[this.month];
    this.year = this.date.getFullYear();

    const lastDay = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
    const lastDayPrevMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
    const firstDayIndex = this.date.getDay();
    const lastDayIndex = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDay();
    const DAYS_OF_WEEK = 7;

    this.daysOfMonth = [];
    this.daysOfNextMonth = [];
    this.daysOfPrevMonth = [];

    _.times(firstDayIndex - 1, (index) => {
      this.daysOfPrevMonth.push(lastDayPrevMonth - index);
    });
    this.daysOfPrevMonth.reverse();

    _.times(lastDay, (day) => {
      const fullDate = new Date(this.date.getFullYear(), this.date.getMonth(), day + 1);
      this.daysOfMonth.push({
        day: day + 1,
        fullDate,
        hasEvent: this.eventDates.includes(fullDate.toDateString())});
    });

    // TODO: поправить вывод, при некоторых значениях встречаются баги
    _.times(DAYS_OF_WEEK - lastDayIndex, (day) => {
      this.daysOfNextMonth.push(day);
    });
  }

  changeToPrevMonth() {
    this.date.setMonth(this.date.getMonth() - 1);
    this.renderCalendar();
  }

  changeToNextMonth() {
    this.date.setMonth(this.date.getMonth() + 1);
    this.renderCalendar();
  }

  onDateClick(date) {
    if (!date) {
      return;
    }

    const dateWithoutTime = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    this.eventService.clickOnDate(dateWithoutTime);
  }
}
