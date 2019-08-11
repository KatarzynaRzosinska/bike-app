import { Component, OnInit } from '@angular/core';
import { tileLayer, latLng, marker, icon, tooltip, } from 'leaflet';
import { StationService } from '../shared/station.srevice';
import { ActivatedRoute } from '@angular/router';
import { StationInterface } from '../shared/station.interface';

@Component({
  selector: 'app-bikes-details',
  templateUrl: './bikes-details.component.html',
  styleUrls: ['./bikes-details.component.scss']
})
export class BikesDetailsComponent implements OnInit {
  stationId;
  station: StationInterface;
  layers=[];
  marker;
  options = {};
  constructor(private route: ActivatedRoute, private stationService: StationService,) { }


  showMap(geometry, bikes){
   this.marker = marker([geometry[1],geometry[0]]).bindTooltip(bikes,{permanent:true, direction:'right', className:"marker-label"});
   //let label = tooltip({permanent:true, content:""}, this.marker)
      this.layers =[
        this.marker
      ]
    this.options= {
      layers: [
        tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
      ],
      zoom: 16,
      center: latLng(geometry[1],geometry[0]),
    };
  }
  
  ngOnInit() {
    this.stationId = this.route.snapshot.params['id'];
    console.log ('id',this.stationId);
    this.station = this.stationService.stations.find( station => station.id === this.stationId);
    console.log ('station',this.station);
    this.showMap(this.station.geometry, this.station.bikes);
    console.log ('geometry',this.station.geometry);
  }


}
