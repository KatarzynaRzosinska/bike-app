import { Component, OnInit, Input } from '@angular/core';
import { StationService } from '../shared/station.service';
import { StationInterface } from '../shared/station.interface';

@Component({
  selector: 'app-single-station',
  templateUrl: './single-station.component.html',
  styleUrls: ['./single-station.component.scss']
})
export class SingleStationComponent implements OnInit {
  @Input() station: StationInterface;

  ngOnInit() {}
}
