import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import s1 from '../images/Bogdanov/1.jpg';
import s2 from '../images/Bogdanov/2.jpg';
import s3 from '../images/Bogdanov/3.jpg';
import s4 from '../images/Bogdanov/4.jpg';
import s5 from '../images/Bogdanov/5.jpg';
import s6 from '../images/Bogdanov/6.jpg';
import s7 from '../images/Bogdanov/7.jpg';
import s8 from '../images/Bogdanov/8.jpg';



const Bogdanov = () => (
  
  <div
        style={{
            color: "black", 
            marginTop: "10%",
            width: '930px',
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundColor: 'black'

        }}

    >
      <h1 style={{color:'white' }} >Stambeno-poslovni objekat "Bogdanov kraj" (Cetinje) </h1>
      
    <div>
        <Image src={s1} floated='left' width={605} height={405} style={{marginRight:'5px' }} />
        <Image src={s2} width={300} height={200} style={{marginBottom:'5px' }}/>
        <Image src={s3} width={300} height={200} style={{marginBottom:'5px' }}/>
        <Image src={s4} floated='left' width={300} height={200} style={{marginRight:'5px' }}/>
        <Image src={s5} floated='left' width={300} height={200} style={{marginRight:'5px' }}/>
        <Image src={s6} width={300} height={200} style={{marginBottom:'5px' }}/>
        <Image src={s7} width={452} height={301} style={{marginRight:'5px' }}/>
        <Image src={s8} width={452} height={301}/>  
          
    </div>  

  </div>
)
export default Bogdanov
