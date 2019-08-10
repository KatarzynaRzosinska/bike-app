import { Component, OnInit } from '@angular/core';
import { StationService } from '../shared/station.srevice';
import { StationInterface } from '../shared/station.interface';

@Component({
  selector: 'app-bikes-list',
  templateUrl: './bikes-list.component.html',
  styleUrls: ['./bikes-list.component.scss'],
})
export class BikesListComponent implements OnInit {
  stations: StationInterface[] = [
    {
      id: '1',
      //  geometry: (16.9116229,52.4028313),
      free_racks: '11',
      bikes: '4',
      name: 'Park Willsona'
      
    }, 
    {
      id: '2',
      // geometry: [16.9116229,52.4028313],
      free_racks: '12',
      bikes: '2',
      name: 'Park Willsona'
    }
  ];;


  constructor(
    private stationService: StationService,
  ) {

   }

  ngOnInit() {
    this.stationService.GetBikesRequest();
    // console.log('tutu',this.bikes);
  }

}
