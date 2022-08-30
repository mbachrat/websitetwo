import React from 'react'
import { ReactComponent as Tright } from '../../imgs/RR.svg';
import { ReactComponent as Bright } from '../../imgs/BR.svg';
import { ReactComponent as Bleft} from '../../imgs/BL.svg';
import { ReactComponent as Tleft } from '../../imgs/TL.svg';


function Firstpage() {
  return (
    <div id='main' className='containerOne'>
      <Tright id="tright" />
      <Bright id="bright" />
      <Bleft id="bleft" />
      <Tleft id="tleft" />

      <div className='text_intro'>
        <h1 className='lineUp'>Hi,</h1>
        <h1 className='lineUp'>I'm Matthew Bachraty</h1>
        <h3 className='lineUp'>Web Developer / UI Designer / Videographer / Content Creator</h3>
        <h3 className='lineUp'>Toronto, Canada</h3>
      </div>
      
     
    </div>
    

  )
}

export default Firstpage