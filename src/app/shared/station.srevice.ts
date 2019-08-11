import { StationInterface } from './station.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class StationService {
  stationsList: StationInterface[];
  constructor(private http: HttpClient) {}

  GetBikesRequest() {
    return this.http
      .get<StationInterface[]>(
        'http://www.poznan.pl/mim/plan/map_service.html?mtype=pub_transport&co=stacje_rowerowe'
      )
      .pipe(map(requestData => this.transformStationsData(requestData)));
    //   .subscribe(stations => {
    //     this.stationsList = stations;
    //     console.log('lista', this.stationsList);
    //   });
  }

  transformStationsData(data) {
    const stationsToBeReturned: StationInterface[] = [];
    const { features: stations } = data;
    stations.forEach(station => {
      const { id, geometry, properties } = station;
      const { coordinates } = geometry;
      const { label: name, free_racks, bikes } = properties;
      const newStation = {
        id,
        coordinates,
        free_racks,
        bikes,
        name
      };
      stationsToBeReturned.push(newStation);
    });
    console.log('rudej', stationsToBeReturned);
    return stationsToBeReturned;
  }
}
