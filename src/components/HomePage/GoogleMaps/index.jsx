/* global google */
import { useState, useEffect } from 'react';
import googleMapsPreviewMb from '@assets/google-maps-preview-mb.jpg';
import googleMapsPreviewDt from '@assets/google-maps-preview-dt.jpg';

const GoogleMaps = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    async function initMap() {
      //  Request the needed libraries.
      const [{ Map }, { AdvancedMarkerElement }] = await Promise.all([
        google.maps.importLibrary('maps'),
        google.maps.importLibrary('marker'),
      ]);
      // Get the gmp-map element.
      const mapElement = document.querySelector('gmp-map');
      // Get the inner map.
      const innerMap = mapElement.innerMap;
      // Set map options.
      innerMap.setOptions({
        mapTypeControl: false,
      });
      // Add a marker positioned at the map center (Uluru).
      const marker = new AdvancedMarkerElement({
        map: innerMap,
        position: mapElement.center,
        title: 'Uluru/Ayers Rock',
      });

      innerMap.addListener('tilesloaded', () => {
        console.log('Map is fully loaded!');
        setMapLoaded(true);
      });
    }
    initMap();
  }, []);

  return (
    <div className="w-full">
      {!mapLoaded && (
        <div className="w-full">
          <img
            src={googleMapsPreviewMb}
            className="block md:hidden z-10"
            alt="SmogDay Google Maps preview"
          />
          <img
            src={googleMapsPreviewDt}
            className="hidden md:block h-[450px] z-10"
            alt="SmogDay Google Maps preview"
          />
        </div>
      )}
      <gmp-map
        center="37.52105763746327, -122.26616690019051"
        zoom="16"
        map-id="smogday_map"
        className="w-full h-[450px] block relative z-50"
      ></gmp-map>
    </div>
  );
};

export default GoogleMaps;
