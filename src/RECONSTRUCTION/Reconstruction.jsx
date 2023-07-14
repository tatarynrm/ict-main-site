import React from 'react'
import './Reconstruction.scss'
import reconstructionJPEG from   '../assets/images/reconstructionJPEG.jpg'
const Reconstruction = () => {
  return (
    <div className="reconstruction">
    <img src={reconstructionJPEG} alt="photo"/>
    <div className="title">
    <h2>Сайт на реконструції <br /> <a href="mailto:info@ict.lviv.ua">Email</a> </h2>
    </div>
    </div>
  )
}

export default Reconstruction