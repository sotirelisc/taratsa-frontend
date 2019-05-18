import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

const TaratsaMap = withScriptjs(withGoogleMap((props) =>
  (<div>
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: props.lat, lng: props.long }}
    >
      {props.isMarkerShown && <Marker position={{ lat: props.lat, lng: props.long }} />}
    </GoogleMap>
  </div>)
))

export default TaratsaMap;