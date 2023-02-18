import React, { useState } from 'react';
import { Icons } from '../../assets/Icons';
import { BgImage } from '../../assets/AppBackGroundImage';
import './LoggedApp.css'
import UserApp from './UserApp';
import { motion } from 'framer-motion';
const LoggedApp = () => {
  const {
    whatsapp, twitter, linkedin, spotify, messages, tiktok, instagram
  } = BgImage;
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

      <UserApp show={showWhatsapp} bgImage={whatsapp} />
      <UserApp show={showSpotify} bgImage={spotify} />
      <UserApp show={showTwitter} bgImage={twitter} />
      <UserApp show={showLinkedIn} bgImage={linkedin} />
      <UserApp show={showMessage} bgImage={messages} />
      <UserApp show={showTikTok} bgImage={tiktok} />
      <UserApp show={showInstagram} bgImage={instagram} />

      <motion.div
        initial={{ translateY: '200px' }}
        animate={{ translateY: '0px' }}
        transition={{ duration: 1 }}
        className='Dock__Container'>
        <div className='Dock'>
          <div className={`${showWhatsapp ? 'bgActive' : ''} Dock_Min_Container `} >
            <img src={Whatsapp} alt='' className={`${showWhatsapp ? 'active' : ''} Dock_Icon`} onClick={() => setshowWhatsapp(prev => !prev)} />
          </div>
          <div className={`${showSpotify ? 'bgActive' : ''} Dock_Min_Container `}>
            <img src={Spotify} className={`${showSpotify ? 'active' : ''} Dock_Icon`} alt='' onClick={() => setshowSpotify(prev => !prev)} />
          </div>
          <div className={`${showTwitter ? 'bgActive' : ''} Dock_Min_Container `}>
            <img src={Twitter} alt='' className={`${showTwitter ? 'active' : ''} Dock_Icon`} onClick={() => setshowTwitter(prev => !prev)} />
          </div>
          <div className={`${showMessage ? 'bgActive' : ''} Dock_Min_Container `}>
            <img src={Messages} className={`${showMessage ? 'active' : ''} Dock_Icon`} alt='' onClick={() => setshowMessage(prev => !prev)} />
          </div>
          <div className={`${showTikTok ? 'bgActive' : ''} Dock_Min_Container `}>
            <img src={TikTok} className={`${showTikTok ? 'active' : ''} Dock_Icon`} alt='' onClick={() => setshowTikTok(prev => !prev)} />
          </div>
          <div className={`${showInstagram ? 'bgActive' : ''} Dock_Min_Container `}>
            <img src={Instagram} className={`${showInstagram ? 'active' : ''} Dock_Icon`} alt='' onClick={() => setshowInstagram(prev => !prev)} />
          </div>
          <div className={`${showLinkedIn ? 'bgActive' : ''} Dock_Min_Container `}>
            <img src={LinkedIn} className={`${showLinkedIn ? 'active' : ''} Dock_Icon`} alt='' onClick={() => setshowLinkedIn(prev => !prev)} />
          </div>
        </div>
      </motion.div>

    </motion.div>
  )
}

export default LoggedApp

