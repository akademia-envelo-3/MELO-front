import { AfterViewInit, ChangeDetectionStrategy, Component, Input } from '@angular/core';
import * as L from 'leaflet';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = iconDefault;

export type LocationCordinates = {
  lat: number;
  long: number;
};

@Component({
  selector: 'app-map[locationCordinates]',
  template: ` <div class="map-container">
    <div class="map-frame">
      <div id="map"></div>
    </div>
  </div>`,
  styles: [
    `
      .map-container {
        position: absolute;
        inset: 0;
      }

      .map-frame {
        border: 2px solid black;
        height: 100%;
      }

      #map {
        height: 100%;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent implements AfterViewInit {
  @Input() locationCordinates!: LocationCordinates;
  private map!: L.Map;

  private initMap(): void {
    const { lat, long } = this.locationCordinates;
    this.map = L.map('map', {
      center: [lat, long],
      zoom: 15,
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 4,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    });
    const marker = L.marker([lat, long]);
    marker.addTo(this.map);
    tiles.addTo(this.map);
  }
  ngAfterViewInit() {
    this.initMap();
  }
}
