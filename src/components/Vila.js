import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import s1 from '../images/Vila/1.jpg';
import s2 from '../images/Vila/2.jpg';
import s3 from '../images/Vila/3.jpg';
import s4 from '../images/Vila/4.jpg';
import s5 from '../images/Vila/5.jpg';
import s6 from '../images/Vila/6.jpg';
import s7 from '../images/Vila/7.jpg';
import s8 from '../images/Vila/8.jpg';
import s9 from '../images/Vila/9.jpg';



const Vile = () => (
  
  <div
      style={{color: "black", marginTop: "20%"}}
  >
      <h1>Enterijer vile na primorju</h1>
      
    <div>
        <Image src={s1} />
        <Image src={s2} />
        <Image src={s3} />
        <Image src={s4} />
        <Image src={s5} />
        <Image src={s6} />
        <Image src={s7} />
        <Image src={s8} />
        <Image src={s9} />

    </div>


  </div>
)
export default Vile
