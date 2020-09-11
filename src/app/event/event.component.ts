import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {EventService} from '../event.service';
import {EventItem} from '../interface';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  public eventSubscription: Subscription;
  public eventDate: EventItem;

  constructor(private eventService: EventService) {
    this.eventSubscription = eventService.event$.subscribe(event => {
      this.eventDate = event;
    });
  }

  ngOnInit(): void {
  }

}
