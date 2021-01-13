import { Component} from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent  {

  search: string
  event: Event;

  constructor() { }

  onChange(event: Event) {
    this.event = event;
  }

}
