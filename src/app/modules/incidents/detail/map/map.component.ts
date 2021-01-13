import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Incidence } from 'src/app/model/incidence';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input() incidence: Incidence

  lat: number
  lng: number
  zoom: number
  mapTypeId: string
  located: boolean
  paises: any[]

  constructor() {
    console.log(this.incidence)
    this.lat = -34.618473
    this.lng = -58.366545
    this.zoom = 16
    this.mapTypeId = 'hybrid'
  }

  ngOnInit() {
    // this.service.getAll()
    //   .then(paises =>  this.paises = paises )
    //   .catch(error => console.log(error))
  }

  getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(position => {
      this.lat = position.coords.latitude
      this.lng = position.coords.longitude
      this.zoom = 17
      this.located = true
    })
  }
}
