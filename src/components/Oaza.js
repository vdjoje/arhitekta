import React from 'react'
import { Card, Icon, Image, Divider, Modal } from 'semantic-ui-react';
import slika1 from '../images/Oaza/1A.jpg';
import slika2 from '../images/Oaza/2A.jpg';
import slika3 from '../images/Oaza/3A.jpg';
import slika4 from '../images/Oaza/4A.jpg';
import slika5 from '../images/Oaza/5A.jpg';
import slika6 from '../images/Oaza/6.jpg';
import slika7 from '../images/Oaza/7A.jpg';
import slika8 from '../images/Oaza/8A.jpg';
import slika9 from '../images/Oaza/9A.jpg';
import slika10 from '../images/Oaza/10A.jpg';
import slika11 from '../images/Oaza/11A.jpg';
import slika12 from '../images/Oaza/12A.jpg';



const style = {
    margin:'0.5%'
}

const Oaza = () => ( 
        

  <div
      style={{
          color: "black", 
          marginTop: "10%",
          width: '48%',
          marginLeft: 'auto',
          marginRight: 'auto',
          backgroundColor: 'black'

        }}
  >
      <h1 style={{color:'white'}} >Poslovno-apartmanski objekat “Oaza”</h1>

      <div> 
        <Image src={slika1} size='big' floated='left' style={style}/>
        <Image src={slika2} size='medium' style={style}/> 
        <Image src={slika3} size='medium' style={style} /> 
        <Divider hidden />
      </div>
      <div  style={{ display:'flex', flexFlow: "row nowrap", alignItems: 'center' }}>
        <Image src={slika4} size='medium'  style={style}/> 
        <Image src={slika5} size='medium'  style={style}/>
        <Image src={slika6} size='medium' />
        <Divider hidden />
      </div>
      <div>
        <Image src={slika7} size='big' floated='right' style={style}/> 
        <Image src={slika8} size='medium' style={style}/> 
        <Image src={slika9} size='medium' style={style}/> 
      </div>
      <div style={{ display:'flex', flexFlow: "row nowrap", alignItems: 'center' }}>
        <Image src={slika10} size='medium' style={style}/> 
        <Image src={slika11} size='medium' style={style}/> 
        <Image src={slika12} size='medium' style={style}/> 
      </div>
      
         


  </div>
)
export default Oaza
 