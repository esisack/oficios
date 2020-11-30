import { Component,  OnInit} from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

  search: string
  event: Event;

  onChange(event: Event) {
    this.event = event;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
