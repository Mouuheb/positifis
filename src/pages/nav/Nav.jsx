import React from 'react'
import './nav.css'
import data from '../../data/data'
import { PiStarFourFill } from "react-icons/pi";

const Nav = () => {
  return (
    <div className='nav'>
        <div className='p1'>
            <div className='logo'>
                <PiStarFourFill className='icon'/>
                <h1>{data.name}</h1>
            </div>
            
            <div className='p2'>
                {data.pageLink.map((link,index) =>{
                    return(
                        <a className='links' key={index} href={link.path} >{link.name}</a>
                    )
                } )}
                {data.navBtn.vzbl && <a className='btn' href={data.path} >{data.navBtn.btnText}</a> }
                
            </div>
            

        </div>

    </div>
  )
}

export default Nav