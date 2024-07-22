import React from 'react'
import './team.css'
import data from '../../data/data'
import { FaLinkedinIn } from "react-icons/fa6";
const Team = () => {
  return (
    <div className='team'>
        <div className='header' >
            <div className='title' >
                <h1>{data.team.title}</h1>
            </div>
            <p>{data.team.p}</p>
        </div>

        <div className='element' >
          {data.team.element.map((item)=>{
            return(
              <div className='card' key={item.id} >
                <div className='p1' >
                  <div className='img-containner' >
                  <img src={item.img} />
                  </div>
                  
                  <div className='txt-content' >
                    <h2>{item.name}</h2>
                    <p>{item.post}</p>
                  </div>
                  {item.social.map((icn,index)=>{
                    return(
                      <div className='sosial' key={index} >
                        <a href={icn.path}>
                
                          <FaLinkedinIn/>
                        </a>
                      </div>

                    )
                  })}
                  
                </div>
                <hr/>
                <div className='p2' >
                <p>{item.p}</p>
                </div>

              </div>
            )
          })}
          
        </div>
        <div className='btn-componment'>
          { data.team.btn.vzbl && <button className='btn' href={data.team.btn.path} >
            {data.team.btn.txt}
          </button>}
        </div>
    </div>
  )
}

export default Team