import React from 'react'
import './case.css'
import { TiLink } from "react-icons/ti";
import data from '../../data/data'
const Case = () => {
  return (
    <div className='case'>
        <div className='header' >
            <div className='title' >
                <h1>{data.CaseStudies.title}</h1>
            </div>
            <p>{data.CaseStudies.p}</p>
        </div>
        <div className='element' >
            {data.CaseStudies.cases.map((item,index)=>{
                return(
                    <div className='card' key={index} >
                        <p>
                            {item.p}
                        </p>
                        { item.btn &&<><a href={item.btn.path} >{item.btn.txt}</a> <TiLink className='icon' /> </>}

                    </div>

                )
            })}

        </div>
    </div>
  )
}

export default Case