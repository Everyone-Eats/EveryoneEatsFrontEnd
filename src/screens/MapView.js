import React from "react";

import Map from "../components/Map";

import "../css/MapView.css";

function MapView(props) {
  return (
    <div>
      {/* <div className="floating-container">

      </div> */}
      <Map mapDisplay={props.mapDisplay} />
    </div>
  );
}

export default MapView;
