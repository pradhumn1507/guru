import React from 'react'
import Live from '../Asssets/Livebtn.png'
import './Visitingcard.css' 
import { FaFacebookMessenger,FaPhone, FaSnapchat } from 'react-icons/fa';
import { Center, Flex } from '@chakra-ui/react';
 export default function Visitingcard({img}) {
 
    return (
        <div className="main"  
            style={{ backgroundImage: `url(${img})` }}> 
           <div className='topbar'>
              <p className=" ">10+ Years </p>
              <p className="online">Online </p>
           </div>      
           <div className="submain grid-container">
            <p className="grid-item ">4.5</p>
            <p className="heading grid-item">Astrologer Ramraj</p>
            <p className="grid-item">Specialties</p>
            <p className="grid-item">Love, Business, Life </p>
            <p className="heading grid-item">Skills</p>
            <p className="grid-item">Vedic Astrology, Kundali, </p>
            
           <div ClassName='live grid-item' style={{display:'flex',justifyContent:"space-between"}} >
            <img src={Live} /> 
            <div>
            <p className="Price" style={{color:'#12b828',fontWeight:'700',background:'#3332329c'}}>Price</p>
            <h2 className="₹10 " style={{color:'#12b828',fontWeight:'700',background:'#3332329c'}}>₹10 </h2>
            </div>        
           </div>            
             <div className="btn-grp grid-item" >
             <Center>
              <button className="btn " type="submit"><FaFacebookMessenger/>Chat</button>
              <button className="btn " type="submit"><FaPhone/>Call</button>
              </Center>
             </div>
           </div>    
         </div> 
    );
  }