import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { StationInterface } from '../shared/station.interface';
import { StationService } from '../shared/station.srevice';

@Injectable({ providedIn: 'root' })
export class BikesResolverService implements Resolve<StationInterface[]> {
  constructor(private stationService: StationService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.stationService.GetBikesRequest();
  }
}
