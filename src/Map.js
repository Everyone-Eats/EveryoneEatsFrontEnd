import React, { Component } from "react";
import tt from '@tomtom-international/web-sdk-maps';



class Map extends Component {

  componentDidMount() {
    this.map = tt.map({
      key: 'gixNACGBaKtGVVUXTFkNZld0pVqBxM3z',
      style: 'tomtom://vector/1/basic-main',
      container: 'map',
    });
    this.map.resize()
  }


  render() {
    return (
      < div id="map" className="map" >
      </div >
    );
  }
};

export default Map;