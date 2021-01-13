import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Incidence } from 'src/app/model/incidence';
import { IncidenceService } from 'src/app/services/incidence.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  incidence: Incidence;
  incidents: Incidence[] = [];
  total: number;

  constructor(
    private service: IncidenceService,
    private router: Router
    ) {  }

  ngOnInit(): void {
    this.getIncidents()
  }


  getIncidents() {
    this.service.getIncidents().subscribe(data => {
      this.incidents = data 
    })
  }

 onSelect(id: number){
    this.router.navigate(['/detail', id]);
  }


}
