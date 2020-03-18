import React from "react"
import MapContainer from '../components/Map'
import "../css/MapView.css"

function MapView(props) {
  const { search } = props.match.params;
  return(
    <div>
      {/* <div className="floating-container">
      </div> */}
      <MapContainer search={search}/>

    </div>
  );
};

export default MapView
