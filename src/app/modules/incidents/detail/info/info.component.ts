import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Incidence } from 'src/app/model/incidence';
import { IncidenceService } from 'src/app/services/incidence.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {


  incidence: Incidence = null

  constructor(
      private route: ActivatedRoute,
      private service: IncidenceService
    ) {
      let id = this.route.snapshot.params['id'];
      this.getIncidence(id)

     }

  ngOnInit() {
    
  }

  getIncidence(id: number) {
    this.service.getIncidence(id)
      .subscribe(data => {
        this.incidence = data;
        console.log(data)
      }, error => console.log(error));
  }
}
