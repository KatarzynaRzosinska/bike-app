import { StationInterface } from './station.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { stat } from 'fs';

@Injectable({ providedIn: 'root' })
export class StationService {
    stationsList: StationInterface[];
    constructor(private http: HttpClient){}
    
    GetBikesRequest(){
        this.http
        .get('http://www.poznan.pl/mim/plan/map_service.html?mtype=pub_transport&co=stacje_rowerowe')
        .pipe(map(responseData => {
            let bikesArray:StationInterface[];
            let stations= responseData['features'];
            for (const station in stations){
                if (stations.hasOwnProperty(station)){
                    const dzialaj= stations.map(station => {
                        const {id} = station;
                        const { geometry} = station['geometry'][0];
                        const { free_racks, bikes, name} = station['properties'][0];
                        return {id, geometry, free_racks,bikes, name};
                    });
                    console.log(JSON.stringify(dzialaj, null,2));
                }
            }
            console.log('stacje', stations);
            console.log('kurwa', bikesArray);
            return bikesArray;
        }))
        
        .subscribe(stations =>  console.log('lista',stations));
        
    }

    FetchStationsData(data){
    }
}