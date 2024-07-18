import React from 'react'
import './team.css'
import data from '../../data/data'
const Team = () => {
  return (
    <div className='team'>
        <div className='header' >
            <div className='title' >
                <h1>{data.team.title}</h1>
            </div>
            <p>{data.team.p}</p>
        </div>
    </div>
  )
}

export default Team