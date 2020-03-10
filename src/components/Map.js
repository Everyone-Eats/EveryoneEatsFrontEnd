import React, { Component } from "react";
import axios from "axios";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import geolocation from "geolocation";

class MapContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locations: [],
      locationDivs: [],
      center: undefined,
    }
  }

  componentDidMount() {
    geolocation.getCurrentPosition((err, pos) => {
      if (err) {
        console.log(err);
        return;
      }
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;
      const center = { lat, lng };
      this.setState({ center })
    })
    const { search } = this.props;
    let type = search === 'donors' ? 'donor' : 'charity';

    axios.get('http://localhost:8000/api/users', { params: { type }})
    .then(response => {
      const { users } = response.data;
      const locations = [];
      users.forEach(user => {
        locations.push([user.position.long, user.position.lat]);
      })
      this.setState({ locations });
    })
    .catch(error => {
      console.log(error);
    })
  }

  displayMarkers() {
    const { locations } = this.state;
    return locations.map((location, index) => {
      const [ lng, lat ] = location;
      return <Marker key={index} id={index} position={{lat, lng}} />
    });
  }

  render() {
    const { center } = this.state;
    const lat = center ? center.lat : 37.7781452;
    const lng = center ? center.lng : -122.46422129999998;
    const zoom = center ? 15 : 1;
    return (
      <Map
        google = { this.props.google }
        zoom = { zoom }
        style = { {
          width: '100%',
          height: '100%'
        } }
        initialCenter = { { lat: lat, lng: lng} }
      >
        {this.displayMarkers()}
      </Map>
    );
  }
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
})(MapContainer);
