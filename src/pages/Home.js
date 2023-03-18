import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class Home extends Component {

  render() {
    return (
      <div>
        <h1>HOME</h1>
        <Link to={'/secondPage'}>
            <button className='btn'>Navigate to second page</button>
        </Link>
      </div>
    )
  }
}
