import React from "react";
import GoogleMapReact from 'google-map-react';


function Map(){
  return(
    <div>
      <GoogleMapReact
        bootstrapURLKeys={{key:""}}
        defaultZoom={15}
        defaultCenter={{lat:37.5,lng:127}}
        >

        </GoogleMapReact>
    </div>
    )

}
export default Map