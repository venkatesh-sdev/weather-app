import React, { useState, useEffect } from 'react';
import { Icons } from '../../assets/Icons';
import { BgImage } from '../../assets/AppBackGroundImage';
import './LoggedApp.css'
import UserApp from './UserApp';
import { motion } from 'framer-motion';
const LoggedApp = () => {
  const today = new Date();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  useEffect(() => {
    const timeData = setInterval(() => {
      setTime(today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds())
    }, 1000)
    return () => {
      clearInterval(timeData)
    }
  }, [time, setTime])
  useEffect(() => {
    setDate(today.getDay() + '/' + today.getMonth() + "/" + today.getFullYear())
  }, [])
  const {
    whatsapp, twitter, linkedin, spotify, messages, tiktok, instagram
  } = BgImage;

  const handleWhatsapp = () => {
    setshowWhatsapp(prev => !prev)
    setshowInstagram(false);
    setshowLinkedIn(false);
    setshowMessage(false);
    setshowSpotify(false);
    setshowTikTok(false);
    setshowTwitter(false);
  }
  const handleInstagram = () => {
    setshowWhatsapp(false)
    setshowInstagram(prev => !prev);
    setshowLinkedIn(false);
    setshowMessage(false);
    setshowSpotify(false);
    setshowTikTok(false);
    setshowTwitter(false);
  }
  const handleLinkedIn = () => {
    setshowWhatsapp(false)
    setshowInstagram(false);
    setshowLinkedIn(prev => !prev);
    setshowMessage(false);
    setshowSpotify(false);
    setshowTikTok(false);
    setshowTwitter(false);
  }
  const handleMessage = () => {
    setshowWhatsapp(false)
    setshowInstagram(false);
    setshowLinkedIn(false);
    setshowMessage(prev => !prev);
    setshowSpotify(false);
    setshowTikTok(false);
    setshowTwitter(false);
  }
  const handleSpotify = () => {
    setshowWhatsapp(false)
    setshowInstagram(false);
    setshowLinkedIn(false);
    setshowMessage(false);
    setshowSpotify(prev => !prev);
    setshowTikTok(false);
    setshowTwitter(false);
  }
  const handleTikTok = () => {
    setshowWhatsapp(false)
    setshowInstagram(false);
    setshowLinkedIn(false);
    setshowMessage(false);
    setshowSpotify(false);
    setshowTikTok(prev => !prev);
    setshowTwitter(false);
  }
  const handleTwitter = () => {
    setshowWhatsapp(false)
    setshowInstagram(false);
    setshowLinkedIn(false);
    setshowMessage(false);
    setshowSpotify(false);
    setshowTikTok(false);
    setshowTwitter(prev => !prev);
  }
  const {
    Instagram,
    LinkedIn,
    Messages,
    Spotify,
    Twitter,
    Whatsapp,
    TikTok
  } = Icons;
  const [showSpotify, setshowSpotify] = useState(false);
  const [showWhatsapp, setshowWhatsapp] = useState(false);
  const [showLinkedIn, setshowLinkedIn] = useState(false);
  const [showTwitter, setshowTwitter] = useState(false);
  const [showMessage, setshowMessage] = useState(false);
  const [showTikTok, setshowTikTok] = useState(false);
  const [showInstagram, setshowInstagram] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.3 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className='Logged_App_Container'>

      <div className='Time_Container'>
        <motion.h1
          initial={{ translateX: '-500px' }}
          animate={{ translateX: '0' }}
          exit={{ translateX: '-500px' }}
          transition={{ duration: '0.5' }}
        >{time ?? `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`}</motion.h1>
        <h2>{date}</h2>
      </div>

      <div className='absolute' >
        <UserApp show={showWhatsapp} bgImage={whatsapp} />
        <UserApp show={showSpotify} bgImage={spotify} />
        <UserApp show={showTwitter} bgImage={twitter} />
        <UserApp show={showLinkedIn} bgImage={linkedin} />
        <UserApp show={showMessage} bgImage={messages} />
        <UserApp show={showTikTok} bgImage={tiktok} />
        <UserApp show={showInstagram} bgImage={instagram} />
      </div>

      <motion.div
        initial={{ translateY: '200px' }}
        animate={{ translateY: '0px' }}
        transition={{ duration: 1 }}
        className='Dock__Container'>
        <div className='Dock'>
          <div className={`${showWhatsapp ? 'bgActive' : ''} Dock_Min_Container `} >
            <img src={Whatsapp} alt='' className={`${showWhatsapp ? 'active' : ''} Dock_Icon`} onClick={handleWhatsapp} />
          </div>
          <div className={`${showSpotify ? 'bgActive' : ''} Dock_Min_Container `}>
            <img src={Spotify} className={`${showSpotify ? 'active' : ''} Dock_Icon`} alt='' onClick={handleSpotify} />
          </div>
          <div className={`${showTwitter ? 'bgActive' : ''} Dock_Min_Container `}>
            <img src={Twitter} alt='' className={`${showTwitter ? 'active' : ''} Dock_Icon`} onClick={handleTwitter} />
          </div>
          <div className={`${showMessage ? 'bgActive' : ''} Dock_Min_Container `}>
            <img src={Messages} className={`${showMessage ? 'active' : ''} Dock_Icon`} alt='' onClick={handleMessage} />
          </div>
          <div className={`${showTikTok ? 'bgActive' : ''} Dock_Min_Container `}>
            <img src={TikTok} className={`${showTikTok ? 'active' : ''} Dock_Icon`} alt='' onClick={handleTikTok} />
          </div>
          <div className={`${showInstagram ? 'bgActive' : ''} Dock_Min_Container `}>
            <img src={Instagram} className={`${showInstagram ? 'active' : ''} Dock_Icon`} alt='' onClick={handleInstagram} />
          </div>
          <div className={`${showLinkedIn ? 'bgActive' : ''} Dock_Min_Container `}>
            <img src={LinkedIn} className={`${showLinkedIn ? 'active' : ''} Dock_Icon`} alt='' onClick={handleLinkedIn} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default LoggedApp

