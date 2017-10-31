import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/BuyTickets.css'

function BuyTickets () {

  return (
    <div className='buytickets'>
      <div className="location-header nav justify-content-center">
        <h2 className="location-header-text">MTA eTix</h2>
      </div>
      <div className="animated slideInRight">
        <Link to='/origin'>
          <div className="button">
            <div className="buy-ticket-text">Buy Tickets</div>
            <div className="buy-ticket-arrow fa fa-arrow-right"></div>
          </div>
        </Link>
        {/* <Link to='/origin'> */}
          <div className="button">
            <div className="buy-ticket-text">Ticket Wallet</div>
            <div className="buy-ticket-arrow fa fa-arrow-right"></div>
          </div>
        {/* </Link> */}
        {/* <Link to='/origin'> */}
          <div className="button">
            <div className="buy-ticket-text">Train Time</div>
            <div className="buy-ticket-arrow fa fa-arrow-right"></div>
          </div>
        {/* </Link> */}
      </div>
    </div>
  )
}

export default BuyTickets;
