import React from 'react'
// import { ReactComponent as Tright } from '../../imgs/RR.svg';
// import { ReactComponent as Bright } from '../../imgs/BR.svg';
// import { ReactComponent as Bleft} from '../../imgs/BL.svg';
// import { ReactComponent as Tleft } from '../../imgs/TL.svg';
import sample from '../../imgs/mvweb.mp4';
import profile from '../../imgs/emojiProfile.mp4'




function Firstpage() {
  return (
    <div id='main' className='containerOne'>
      
      <div className='full_page'>
        <div className='text_intro'>
          <h1 className='lineUp One'>Hi,</h1>
          <h1 className='lineUp Two'>I'm Matthew Bachraty</h1>
          <h3 className='lineUp Three'>Web Developer / UI Designer / Videographer / Content Creator</h3>
          <h3 className='lineUp Four'>Toronto, Canada</h3>
        </div>
        <div className='pic_intro'>
        <video loop className='videoProfile' width={600} autoPlay={true} muted>
          <source className='profile' src={profile} type='video/mp4' />
        </video>
        </div>
      </div>

      <a href='#mySkills'>
      <div class="container_arrows">
          <div class="content">
            <svg id="more-arrows">
            <polygon class="arrow-top" points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "/>
            <polygon class="arrow-middle" points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "/>
            <polygon class="arrow-bottom" points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "/>
            </svg>
         </div>
        </div>
        </a>

        <video loop className='videoTag' autoPlay={true} muted>
          <source className='video-inside' src={sample} type='video/mp4' />
        </video>

    </div>
    

  )
}

export default Firstpage