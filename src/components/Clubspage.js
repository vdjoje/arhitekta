import React from 'react'
import { Card, Divider, Button, Label } from 'semantic-ui-react'
import Buttons from './Buttons'

const slika = {
    width: "400px",
    height: "153px",
    marginLeft: "6%",
    marginRight: "6%"
};

const dugme = {
  backgroundColor: "#420040",
  color: "white"
}

const strana = {
  marginTop: "15%"
}

const src = 'https://unsplash.it/400/200/?random';

const Clubspage = () => (
  <div style={strana} >

    <Divider color='purple' horizontal>THE TUBE</Divider>
    <div style={{display:"flex", flexDirection:"row"}}>
      <Card style={slika} color='purple' image={src}/>
    </div>
    <div>
      <p style={{marginTop:"5%", align: "center"}}>Naslov</p>
      <p style={{marginTop:"5%", align: "center"}}>Tekst</p>
    </div>

  </div>
)

export default Clubspage
