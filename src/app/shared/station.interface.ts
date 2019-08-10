import { Point } from 'leaflet';

//import { Point } from 'geojson';
//a może ten z lefletu nie wiem jeszcze

export interface StationInterface {
    id: string;
    //geometry: Point;
    free_racks: string;
    bikes: string;
    name: string;
    //address: string;
    //tego nie ma w jsonie, pewnie mam to pobierać z mapy...
    
    

}