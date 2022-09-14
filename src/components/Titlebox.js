import React from 'react'
import { ReactComponent as Tright } from '../imgs/RR.svg';
import { ReactComponent as Bright } from '../imgs/BR.svg';
import { ReactComponent as Bleft} from '../imgs/BL.svg';
import { ReactComponent as Tleft } from '../imgs/TL.svg';


function Titlebox() {
  return (
    <div className='titleBox'>
      <Tright id="trights" />
      <Bright id="brights" />
      <Bleft id="blefts" />
      <Tleft id="tlefts" />
      
    </div>
  )
}

export default Titlebox