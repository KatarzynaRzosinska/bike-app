import { Component, OnInit } from '@angular/core';
import { StationService } from '../shared/station.srevice';
import { StationInterface } from '../shared/station.interface';

@Component({
  selector: 'app-bikes-list',
  templateUrl: './bikes-list.component.html',
  styleUrls: ['./bikes-list.component.scss']
})
export class BikesListComponent implements OnInit {
  stations: StationInterface[];
  error = null;

  constructor(private stationService: StationService) {}

  ngOnInit() {
    this.stationService.GetBikesRequest().subscribe(
      stations => {
        this.stationService.stationsList = stations;
        this.stations = this.stationService.stationsList;
      },
      error => {
        this.error = error.message;
      }
    );

    // if (this.stationService.stationsList) {
    //   this.stations = this.stationService.stationsList;
    // }
  }
}
