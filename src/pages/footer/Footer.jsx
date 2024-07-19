import React from 'react'
import data from '../../data/data'
import './footer.css'
import { PiStarFourFill } from "react-icons/pi";
import { FaLinkedinIn, FaFacebook, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='footer-page' >
        <div className='p1' >
            <div className='logo'>
                <PiStarFourFill className='icon'/>
                <h1>{data.name}</h1>
            </div>
            
            <div className='p2'>
                {data.pageLink.map((link,index) =>{
                    return(
                        <a key={index} href={link.path} >{link.name}</a>
                    )
                } )}
                {/* {data.navBtn.vzbl && <a className='btn' href={data.path} >{data.navBtn.btnText}</a> } */}
                
            </div>
            <div className='social' >
                <a><FaLinkedinIn className='icon'/></a>
                <a><FaFacebook className='icon'/></a>
                <a><FaInstagram className='icon'/></a>
                
                

            </div>
        </div>
        <div className='p2-0'>
            <div className='p2-1'>
                <h2>{data.footer.title}</h2>
                {data.footer.info.map((item)=>{
                    return(
                        <p>{item}</p>
                    )
                })}
            </div>
            <div className='p2-2' >
                <div className='conponment' >
                    <input placeholder='Email' />
                    <label>Subscribe to news </label>
                </div>
            </div>
        </div>
        <hr/>
        <div className='p3'>
            <label>{data.footer.copyRaight}</label>
            <label>{data.footer.privecy}</label>
        </div>
    </div>
  )
}

export default Footer