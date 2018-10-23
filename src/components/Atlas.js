import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import sl1 from '../images/Atlas/s1.jpg';
import sl2 from '../images/Atlas/s2.jpg';
import sl3 from '../images/Atlas/s3.jpg';
import sl4 from '../images/Atlas/s4.jpg';
import sl5 from '../images/Atlas/s5.jpg';
import sl6 from '../images/Atlas/s6.jpg';
import sl7 from '../images/Atlas/s7.jpg';
import sl8 from '../images/Atlas/s8.jpg';
import sl9 from '../images/Atlas/s9.jpg';
import sl10 from '../images/Atlas/s10.jpg';
import sl11 from '../images/Atlas/s11.jpg';



const Atlas = () => (
  
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
      <h1 style={{color:'white' }} >Atlas banka u Capital Plaza Centru (Podgorica)</h1>
      
      <div>
            <Image src={sl1} floated='left' width={605} height={405} />
            <Image src={sl2}  width={300} height={200}/>
            <Image src={sl3}  width={300} height={200}/>
            <Image src={sl4} floated='left' width={375} height={226}/>
            <Image src={sl5} floated='left' width={375} height={226}/>
            <Image src={sl6}  width={150} height={226}  />
            <Image src={sl7}  floated='right' width={605} height={405} />
            <Image src={sl8}  width={300} height={200}/>
            <Image src={sl9}  width={300} height={200}/>
            <Image src={sl10} floated='left' width={450} height={301}/>
            <Image src={sl11} width={452} height={301} />    
          
          
      </div>  


  </div>
)
export default Atlas
