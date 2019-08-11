import { StationInterface } from './station.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class StationService {
    stations: StationInterface[] = [
        {
          id: '1',
          geometry: [16.9116229,52.4028313],
          free_racks: '11',
          bikes: '4',
          name: 'Poznań Główny'
          
        }, 
        {
          id: '2',
          geometry: [16.9128835,52.4105153],
          free_racks: '12',
          bikes: '2',
          name: 'Most Teatralny'
        },
        {
            id: '3',
            geometry: [16.9252069,52.4083807],
            free_racks: '18',
            bikes: '6',
            name: 'Pl. Wolności'
          }
      ];


    stationsList: StationInterface[];
    constructor(private http: HttpClient){}
    
    GetBikesRequest(){
        this.http
        .get('http://www.poznan.pl/mim/plan/map_service.html?mtype=pub_transport&co=stacje_rowerowe')        
        .subscribe(stations =>  console.log('lista',stations));
        
    }

    FetchStationsData(data){
    }
}