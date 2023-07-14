import React from 'react'
import './HeroTitleItem.scss'
const HeroTitleItem = ({text}) => {
  return (
    <span className='hero__title'>
        {text}
    </span>
  )
}

export default HeroTitleItem