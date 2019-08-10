import { Component, OnInit } from '@angular/core';
import { tileLayer, latLng } from 'leaflet';

@Component({
  selector: 'app-bikes-details',
  templateUrl: './bikes-details.component.html',
  styleUrls: ['./bikes-details.component.scss']
})
export class BikesDetailsComponent implements OnInit {
  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 5,
    center: latLng(46.879966, -121.726909)
  };
  constructor() { }

  ngOnInit() {
  }

}
