import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import s1 from '../images/Benex/05.jpg';
import s2 from '../images/Benex/04.jpg';
import s3 from '../images/Benex/01.jpg';
import s4 from '../images/Benex/02.jpg';
import s5 from '../images/Benex/03small.jpg';




const Benex = () => (
  
  <div
        style={{
            color: "black", 
            marginTop: "10%",
            width: '910px',
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundColor: 'black'

        }}
  >
      <h1 style={{color:'white'}} >"Benex fitnes centar" u Capital Plaza Centru (Podgorica)</h1>

    <div>
        <Image src={s1} floated='left' width={300} height={200} style={{marginBottom:'5px', marginRight:'5px' }}/>
        <Image src={s2} floated='left' width={300} height={200} style={{marginBottom:'5px', marginRight:'5px' }}/>
        <Image src={s3} width={300} height={200} style={{marginBottom:'5px' }} />
        <Image src={s4} floated='left' width={605} height={338} style={{marginRight:'5px'}} />
        <Image src={s5} width={300} height={338}/>

    </div>


  </div>
)
export default Benex
