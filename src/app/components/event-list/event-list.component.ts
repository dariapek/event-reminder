import { Component, OnInit } from '@angular/core';
import {EventItem} from '../../interface';
import {EventService} from '../../event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  public events: EventItem[];

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.events = this.eventService.getAllEvents();
  }

}
