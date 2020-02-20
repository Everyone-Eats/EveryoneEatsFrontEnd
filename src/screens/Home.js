import React from "react"

import { Link } from "react-router-dom"

import "../css/Home.css"

function Home() {

  return (
    <div className="home">
      <h1>Everyone Eats</h1>
      <h4>Bridging the gap between waste and want</h4>
      <div>
        <Link to="/maps/donors"><button>Show Donors</button></Link>
        <Link to="/maps/charities"><button>Show Charities</button></Link>
      </div>
    </div>
  )
}

export default Home