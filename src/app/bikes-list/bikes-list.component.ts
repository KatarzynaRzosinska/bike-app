import { Component, OnInit } from '@angular/core';
import { StationService } from '../shared/station.srevice';

@Component({
  selector: 'app-bikes-list',
  templateUrl: './bikes-list.component.html',
  styleUrls: ['./bikes-list.component.scss'],
})
export class BikesListComponent implements OnInit {
  bikes

  constructor(
    private stationService: StationService,
  ) { }

  ngOnInit() {
    this.bikes =this.stationService.GetBikesRequest();
    // console.log('tutu',this.bikes);
  }

}
