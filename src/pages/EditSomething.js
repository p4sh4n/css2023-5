import React from 'react'
import {useParams, Link} from "react-router-dom";


export const EditSomething = () => {
  const {id} = useParams();

  return (
    <div>
      <h1>Edit Something</h1>
      <h1>{id}</h1>
      <Link to={'/secondPage'}>
        <button className='btn'>Back to second page</button>
      </Link>
    </div>
  )
}

export default EditSomething