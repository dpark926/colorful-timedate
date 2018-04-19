import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import BlackBar from './BlackBar';
import SearchBar from './SearchBar';
import LOCATIONS from '../data/LOCATIONS';
import '../../styles/OriginDest.css';

function Origin (props) {
  let origin = props.origin
  let newArray = []

  for (var i = 0; i < LOCATIONS.length; i++) {
    let location = LOCATIONS[i]
      if (location.slice(0, origin.length).toLowerCase() === origin.toLowerCase() && !newArray.includes(location)) {
        newArray.push(location)
      }
  }

  const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  let loc = newArray.map( location => {
    if (alpha.includes(location)) {
      return (
        <div className='alpha'>
          <div className='letter'>{location}</div>
        </div>
      )
    } else if (location === '.') {
      return (
        <div className='blank'>
          {/* <div className='letter'></div> */}
        </div>
      )
    } else if (location === 'Grand Central Terminal') {
      return (
        <div className="location-list-blah" onClick={props.handleClickedOrigin}>
          <Link to="/destination">
            <div className="location-each" id={location}>{location.toUpperCase()}<span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em"}}></span></div>
          </Link>
        </div>
      )
    } else if (location === 'Penn Station') {
      return (
        <div className="location-list-blah" onClick={props.handleClickedOrigin}>
          <Link to="/destination">
            <div className="location-each penn-station" id={location}>{location.toUpperCase()}<span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em"}}></span></div>
          </Link>
        </div>
      )
    } else {
      return (
        <div className="location-list-blah" onClick={props.handleClickedOrigin}>
          <Link to="/destination">
            <div className={`location-each ${location.split(" ").join("-").toLowerCase()}`} id={location}>{location}<span className="location-arrow fa fa-angle-right" style={{color: "orange", fontSize: "1.8em"}}></span></div>
          </Link>
        </div>
      )
    }
  })

  return (
    <div className='test'>
      <div className="header-container">
        <Header
          headerTitle='Select Origin Station'
          previousLink='/buytickets'
        />
        <BlackBar
          yellowWidth='10%'
        />
        <SearchBar
          handleLocation={props.handleOrigin}
          origin={props.origin}
          handleClickedOrigin={props.handleClickedOrigin}
        />
      </div>
      <div className="location-list-wrapper animated slideInRight">
        <div className="location-list">
          {loc}
        </div>
      </div>
    </div>
  )
}

export default Origin