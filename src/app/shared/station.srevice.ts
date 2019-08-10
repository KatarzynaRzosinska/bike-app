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
        .subscribe(stations =>  console.log('lista',stations));
        
    }

    FetchStationsData(data){
    }
}