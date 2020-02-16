import React, { Component } from "react";
import tt from '@tomtom-international/web-sdk-maps';
import { geolocated } from "react-geolocated";

console.log(process.env)
class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      map: {},
      locations: [[-122.478468, 37.769167], [-122.479468, 37.769167], [-122.478468, 37.768167],],
      locationDivs: [],
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
    // map.addControl(new tt.FullscreenControl());
    // map.addControl(new tt.NavigationControl())

    this.setState({ map })
    
  }

  createMarker(location) {
    console.log(location)
    const marker = new tt.Marker({
      anchor: "bottom"
    }).setLngLat(new tt.LngLat(location[0], location[1]))
    .addTo(this.state.map)

    // marker.setPopup(new tt.Popup({offset: 30}).setText("hello"));
    
    // console.log(marker.on("click", (e) => {
    //   console.log(e)
    // }))


  }

  zoomMap() {
    if (this.state.map) {
      this.state.map.flyTo({
        center: [this.props.coords.longitude, this.props.coords.latitude]
      })
      this.state.locations.forEach((location) => {
        this.createMarker(location)
      })
    }
  }


  render() {

    if (this.props.coords) {
      this.zoomMap()
    }

    return (
      < div id="map" className="map" >
        {this.state.locationDivs}
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