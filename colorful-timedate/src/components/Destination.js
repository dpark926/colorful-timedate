import React from 'react'
import '../styles/OriginDest.css'

let locations = ['Albertson', 'Amagansett', 'Amityville', 'Ansonia', 'Appalachian Trail',
  'Ardsley on Hudson', 'Atlantic Terminal', 'Auburndale', 'Babylon', 'Baldwin',
  'Bay Shore', 'Bayside', 'Beacon', 'Beacon-Falls', 'Beadford Hills',
  'Bellrose', 'Bellmore', 'Bellport', 'Bethel', 'Bethpage',
  'Botanical Garden', 'Branchville', 'Breakneck Ridge', 'Brentwood', 'Brewster',
  'Bridgehampton', 'Bridgeport', 'Broadway', 'Bronxville', 'Cannondale']

let loc = locations.map( location => <div className="location-list-blah"><a href="activate"><div className="location-each">{location}</div></a></div>)

function Destination () {
  return (
    <div className="animated slideInRight">
      <div className="location-header">
        <h2 className="location-header-text">Select Destination Station</h2>
      </div>
      <input className="location-search"placeholder="Search for Destinations"></input>
      <div className="location-list">
        {loc}
      </div>
    </div>
  )
}

export default Destination