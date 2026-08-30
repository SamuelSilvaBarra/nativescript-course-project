import { Component } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'
import { GoogleMapsModule } from '@nativescript/google-maps/angular'
import {
  GoogleMap,
  MapReadyEvent,
} from '@nativescript/google-maps'

@Component({
  selector: 'ns-maps',
  templateUrl: './maps.component.html',
  standalone: true,
  imports: [
    NativeScriptCommonModule,
    GoogleMapsModule,
  ],
})
export class MapsComponent {
  latitude = 19.4326
  longitude = -99.1332
  zoom = 14

  onReady(event: MapReadyEvent): void {
    const map: GoogleMap = event.map

    map.addMarker({
      position: {
        lat: this.latitude,
        lng: this.longitude,
      },
      title: 'NativeScript Marker',
      snippet: 'Marker created with Google Maps SDK',
    })
  }
}
