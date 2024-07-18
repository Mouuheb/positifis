import React, { useState } from 'react'
import './work.css'
import { TiPlus, TiMinus } from "react-icons/ti";
import data from '../../data/data'
const Work = () => {
    var[show,setShow]=useState(null)
  return (
    <div className='work'>
        <div className='header' >
            <div className='title' >
                <h1>{data.work.title}</h1>
            </div>
            <p>{data.work.p}</p>
        </div>

        <div className='element'>
            {data.work.element.map((item)=>{
                return(
                    <div className={`card ${show===item.id ? 'aa' :'bb'}`} >
                        <div className='p1-componment' onClick={() =>( show!==item.id ? setShow(item.id ): setShow(null))}>
                            <h1><span className='diff' >{item.num}</span> {item.title} </h1>
                            {show!==item.id ?<TiPlus className='icon' />:<TiMinus className='icon' />}
                        </div>
                        {show==item.id && 
                        <div>
                            <hr/>
                            <p>{item.p}</p>
                        </div> }
                        

                    </div>
                )
            })}

        </div>
    </div>
  )
}

export default Work