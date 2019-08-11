import { Component, OnInit } from '@angular/core';
import { StationService } from '../shared/station.srevice';
import { StationInterface } from '../shared/station.interface';

@Component({
  selector: 'app-bikes-list',
  templateUrl: './bikes-list.component.html',
  styleUrls: ['./bikes-list.component.scss'],
})
export class BikesListComponent implements OnInit {
  stations: StationInterface[] = [];


  constructor(
    private stationService: StationService,
  ) {

   }

  ngOnInit() {
    this.stationService.GetBikesRequest();
    // console.log('tutu',this.bikes);
    this.stations = this.stationService.stations;
  }

}
