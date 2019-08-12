import { Component, OnInit } from '@angular/core';
import { tileLayer, latLng, marker, icon, Marker } from 'leaflet';
import { StationService } from '../shared/station.service';
import { ActivatedRoute, Params } from '@angular/router';
import { StationInterface } from '../shared/station.interface';

@Component({
  selector: 'app-bikes-details',
  templateUrl: './bikes-details.component.html',
  styleUrls: ['./bikes-details.component.scss']
})
export class BikesDetailsComponent implements OnInit {
  stationId: string;
  station: StationInterface;
  layers = [];
  marker: Marker;
  options = {};
  constructor(
    private route: ActivatedRoute,
    private stationService: StationService
  ) {}

  showMap(coordinates: Array<number>, bikes: string) {
    this.marker = marker([coordinates[1], coordinates[0]], {
      icon: icon({
        iconSize: [35, 35],
        iconUrl: '../assets/icons/map-icon.svg'
      })
    }).bindTooltip(bikes, {
      permanent: true,
      direction: 'right',
      opacity: 1,
      className: 'marker-label'
    });
    this.layers = [this.marker];
    this.options = {
      layers: [
        tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 18,
          attribution: '...'
        })
      ],
      zoom: 16,
      center: latLng(coordinates[1], coordinates[0])
    };
  }

  getStation() {
    this.stationId = this.route.snapshot.params['id'];
    this.route.params.subscribe((params: Params) => {
      this.stationId = params['id'];
    });
    this.station = this.stationService.stationsList.find(
      station => station.id === this.stationId
    );
  }

  ngOnInit() {
    this.getStation();
    this.showMap(this.station.coordinates, this.station.bikes);
  }
}
