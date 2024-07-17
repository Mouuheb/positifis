import React from 'react'
import './home.css'
import data from '../../data/data'
const Home = () => {
  return (
    <div className='home' >
        <div className='containner'>
            <div className='contnent-containner' >
                <h1>{data.header.title}</h1>
                <p>{data.header.p}</p>
                {data.header.btn.map((btn,index)=>{
                    return(
                        btn.vzbl && <a className='btn' key={index} >
                            {btn.btnText}

                        </a>

                    )
                })}
                

            </div>
            <div className='image-containner'>
                <img src={data.header.img} />
            </div>

        </div>
    </div>
  )
}

export default Home