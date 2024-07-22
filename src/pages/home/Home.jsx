import React from 'react'
import './home.css'
import data from '../../data/data'
const Home = () => {
  return (
    <div className='home' >
        <div className='containner'>
            <div className='contnent-containner' >
                <h1>{data.header.title}</h1>
                <div className='image-containner-ph'>
                    <img src={data.header.img} />
                </div>
                <p>{data.header.p}</p>
                <div className='btn-cmp' >
                {data.header.btn.map((btn,index)=>{
                    return(
                        btn.vzbl && <button className='btn' key={index} >
                            {btn.btnText}

                        </button>

                    )
                })}
                </div>
                

            </div>
            <div className='image-containner'>
                <img src={data.header.img} />
            </div>

        </div>
    </div>
  )
}

export default Home