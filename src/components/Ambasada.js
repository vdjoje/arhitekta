import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import slika1 from '../images/Ambasada/ambasada-UAE.jpg';
import slika2 from '../images/Ambasada/ambasada-UAE2.jpg';
import slika3 from '../images/Ambasada/ambasada-UAE3.jpg';
import slika4 from '../images/Ambasada/ambasada-UAE4.jpg';
import slika5 from '../images/Ambasada/ambasada-UAE5.jpg';
import slika6 from '../images/Ambasada/ambasada-UAE6.jpg';


const Ambasada = () => (
  
  
    <div
        style={{
            color: "black", 
            marginTop: "10%",
            width: '920px',
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundColor: 'black'

            }}
    >
        <h1 style={{color:'white'}} >Ambasada UAE u Capital Plaza Centru (Podgorica)</h1>

        <div>
            <Image src={slika1} floated='right' width={605} height={405} style={{marginLeft:'5px' }}/>   
            <Image src={slika2} width={300} height={200} style={{marginBottom:'5px' }} />
            <Image src={slika3} width={300} height={200}  />
            <Image src={slika4} floated='left' width={605} height={405} />
            <Image src={slika5} width={300} height={200} style={{marginBottom:'5px' }}/>
            <Image src={slika6} width={300} height={200} />
                           
        </div> 
     
    </div>
)

export default Ambasada
