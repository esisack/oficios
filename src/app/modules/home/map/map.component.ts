import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow } from '@angular/google-maps';
import { Incidence } from 'src/app/model/incidence';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  
  @Input() incidence: Incidence
  @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow;
  
  centroide = {
    lat: -34.6472556,
    lng: -58.4704024
  }

  position =  { lat: -34.6472556,  lng: -58.4704024  }


  label = {
    color: 'red',
    text: 'Marcador'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
