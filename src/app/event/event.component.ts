import {Component, OnInit} from '@angular/core';
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
  public isEmptyMessage = false;
  public isShow = false;

  constructor(private eventService: EventService) {
   this.openEvent();
  }

  ngOnInit(): void {
  }

  openEvent() {
    this.eventSubscription = this.eventService.event$.subscribe(event => {
      this.isShow = true;
      if (!event) {
        this.isEmptyMessage = true;
      } else {
        this.isEmptyMessage = false;
        return this.eventDate = event;
      }
    });
  }

  close() {
    this.isShow = false;
  }

}
