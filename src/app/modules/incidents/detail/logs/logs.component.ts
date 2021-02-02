import { Component, Input, OnInit } from '@angular/core';
import { ActivityLog } from 'src/app/model/activity-log';
import { Incidence } from 'src/app/model/incidence';
import { IncidenceService } from 'src/app/services/incidence.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {

  @Input() incidence: Incidence
  activities: ActivityLog[] = []

  constructor(private service: IncidenceService ) { }

  ngOnInit() {
    this.getActivities(this.incidence.id)
  }

  getActivities(id: number) {
    this.service.getActivities(id).subscribe(data => {
      this.activities = data
    })
  }

}
