import React, { Component } from "react";
import tt from '@tomtom-international/web-sdk-maps';
import { geolocated } from "react-geolocated";


class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      map: {},
    }
  }



  componentDidMount() {
    const map = tt.map({
      key: 'gixNACGBaKtGVVUXTFkNZld0pVqBxM3z',
      style: 'tomtom://vector/1/basic-main',
      container: 'map',
      center: [-122.478468, 37.769167],
      zoom: 12,
    })
    map.resize()

    this.setState({map})
    
    console.log(this.props)
  }

  zoomMap() {
    if (this.state.map) {
      this.state.map.flyTo({
        center: [this.props.coords.longitude, this.props.coords.latitude]
      })
    }
  }


  render() {
    
    if(this.props.coords) {
      this.zoomMap()
    }

    return (
      < div id="map" className="map" >
      </div >
    );
  }
};

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Map);