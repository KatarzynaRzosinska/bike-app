import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { StationInterface } from '../shared/station.interface';
import { StationService } from '../shared/station.service';

@Injectable({ providedIn: 'root' })
export class BikesResolverService implements Resolve<StationInterface[]> {
  constructor(private stationService: StationService) {}

  resolve() {
    return this.stationService.GetBikesRequest();
  }
}
