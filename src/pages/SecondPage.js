import React, { Component , useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

const SecondPage = () => {
  const [id, setId] = useState("");

    return (
      <div>
        <h1>SecondPage</h1>
        <input type="text" onChange={(event) => setId(event.target.value)} />
        <Link to={`/editSomething/${id}`}>
          <button className='btn'>Handle input</button>
        </Link>
        <Link to={'/'}>
            <button className='btn'>Navigate to home page</button>
        </Link>
      </div>
    )
}

export default SecondPage;