import { Component, OnInit} from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

  search: string
  event: Event;

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
   this.headerService.title = "Busquedas"
  }

  onChange(event: Event) {
    this.event = event;
  }

}
