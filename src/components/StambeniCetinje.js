import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import s1 from '../images/StambeniCetinje/1.jpg';
import s2 from '../images/StambeniCetinje/2.jpg';
import s3 from '../images/StambeniCetinje/3.jpg';
import s4 from '../images/StambeniCetinje/4.jpg';


const Stambeni = () => (
  
  <div
      style={{color: "black", marginTop: "20%"}}
  >
      <h1>Stambeni objekat Cetinje</h1>

    <div>
        <Image src={s1} />
        <Image src={s2} />
        <Image src={s3} />
        <Image src={s4} />


    </div>

  </div>
)
export default Stambeni
