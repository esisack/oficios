import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow } from '@angular/google-maps'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

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
