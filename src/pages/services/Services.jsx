import React from 'react'
import './services.css'
import data from '../../data/data'
import { TiLink } from "react-icons/ti";
const Services = () => {
  return (
    <div className='sev' >
        <div className='containner' >
          <div className='header' >
            <h1>{data.services.title}</h1>
            <p>{data.services.p}</p>
          </div>
          <div className='element'>
            {data.services.element.map((item)=>{
              return(
                <div 
                className = {`card ${item.color === 1 ? 'aa' : item.color === 2 ? 'bb' : 'cc'}`}
                  key={item.id} >
                  <div className='txt-content' >
                    <div>
                    <h2
                    className = {item.color === 1 ? 'txt-aa' : item.color === 2 ? 'txt-bb' : 'txt-cc'}
                    >{item.title1}</h2>
                    <h2
                    className = {item.color === 1 ? 'txt-aa' : item.color === 2 ? 'txt-bb' : 'txt-cc'}
                    >{item.title2}</h2>

                    </div>
                    <h2>{item.title}</h2>
                    <div className='btn'>

                    {item.btn.vzbl && (
                      <><div  >
                        <TiLink 
                        // className='icon'
                        className = {`icon ${item.color === 1 ? 'icon-aa' : item.color === 2 ? 'icon-bb' : 'icon-cc'}`}
                  
                         />

                        </div><a href={item.btn.path}>{item.btn.txt}</a></>
                    )
                    }
                    </div>
                  </div>
                  <div>
                    {item.img && <img src={item.img} />}
                  </div>
                </div>
              )
            })}

          </div>
          <div className='footer' >
          <div className='card'>
                  <div className='txt-content' >
                    <div>
                    <h2>{data.services.footer.title}</h2>

                    </div>
                    <div>
                      <p>{data.services.footer.p}</p>
                    </div>
                    <div className='btn'>

                    {data.services.footer.btn.vzbl && (
                      <><div  >

                        </div><a href={data.services.footer.path}>{data.services.footer.btn.txt}</a></>
                    )
                    }
                    </div>
                  </div>
                  <div className='img-conntainner' >
                    <img src={data.services.footer.img} />
                  </div>
                </div>

          </div>
        </div>
    </div>
  )
}

export default Services