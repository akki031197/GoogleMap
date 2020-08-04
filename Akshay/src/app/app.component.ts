import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Akshay';
  //zoom level
  zoom: number = 10;
  //start positon
  lat = 51.678418;
  lng = 7.809007;
  //Markers
  markers: marker[] = [
    {
    name : 'Company One',
    lat : 51.678418,
     lng :7.809007,
     draggable : true
  },
  {
    name : 'Company Two',
    lat : 51.678684,
     lng :7.809087,
     draggable : true
  },
  {
    name : 'Company three',
    lat : 51.678298,
     lng :7.809043,
     draggable : true
  }
];
constructor(){

}
clickedMarker(marker:marker,index:number){
  console.log('Clicked Marker:' +marker.name+ 'at index '+index);
}
mapClicked($event:any){
  var  newMarker = {
    name : 'Untitled',
    lat :$event.coords.lat,
    lng :$event.coords.lng,
    draggable:false
  }
  this.markers.push(newMarker);
}

markerDragEnd(marker:any,$event:any){
  console.log('dragEnd',marker,$event)
  var updMarker={
    name:marker.name,
    lat: parseFloat(marker.lat),
    lng: parseFloat(marker.lng),
    draggable:false
  }
  var newLat=$event.coords.lat;
  var newLng=$event.coords.lng;
}
}
//marker type
interface marker{
  name? : string;
  lat: number;
  lng: number;
  draggable :boolean;
}
  
