import React, { useEffect, useRef } from 'react';

const GMap = ({ height, markList }) => {
  const googleMapRef = useRef(null);
  let googleMap = null;

  // list of icons
  const iconList = {
    icon1:
      'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Flag--Right-Chartreuse.png',
    icon2:
      'https://cdn2.iconfinder.com/data/icons/IconsLandVistaMapMarkersIconsDemo/256/MapMarker_Marker_Outside_Chartreuse.png',
    icon3:
      'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Ball-Right-Azure.png',
    icon4:
      'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Marker-Outside-Pink.png',
  };

  // list of the marker object along with icon
  const markerList = [
    { lat: -1.9434492, lng: 30.0565475, icon: iconList.icon2 },
    { lat: -1.9530845, lng: 30.0909381, icon: iconList.icon2 },
    { lat: -1.9522649, lng: 30.0728001, icon: iconList.icon2 },
  ];

  useEffect(() => {
    googleMap = initGoogleMap();
    var bounds = new window.google.maps.LatLngBounds();
    markerList.map((x) => {
      const marker = createMarker(x);
      bounds.extend(marker.position);
    });
    googleMap.fitBounds(bounds); // the map to contain all markers
  }, []);

  // initialize the google map
  const initGoogleMap = () => {
    return new window.google.maps.Map(googleMapRef.current, {
      center: { lat: -1.9529728, lng: 30.1006848 },
      zoom: 8,
    });
  };

  // create marker on google map
  const createMarker = (markerObj) =>
    new window.google.maps.Marker({
      position: { lat: markerObj.lat, lng: markerObj.lng },
      map: googleMap,
      icon: {
        url: markerObj.icon,
        // set marker width and height
        scaledSize: new window.google.maps.Size(50, 50),
      },
    });

  return (
    <>
      <div ref={googleMapRef} style={{ width: ' 100%', height: `${height}` }} />
    </>
  );
};

export default GMap;
