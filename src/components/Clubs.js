import React from 'react'
import { Card, Divider, Button, Label } from 'semantic-ui-react'
import Buttons from './Buttons'
import { Link } from "react-router-dom"

const styles = {
    width: "150px",
    height: "149px",
    marginLeft: "6%",
    marginRight: "6%"
};

const dugme = {
  backgroundColor: "#420040",
  color: "#00cd57",
  marginLeft: "2%"
};

const dugmadva = {
  marginLeft: "3%",
  flex: "1",
  display:"flex",
  flexDirection:"collumn"
}


const src = 'https://unsplash.it/150/150/?random';

const Clubs = () => (
  <div
  style={{marginTop:"15%"}} itemsPerRow={1}>
    <Divider color='purple' horizontal>THE TUBE</Divider>
    <div style={{display:"flex", flexDirection:"row"}}>
      <Card style={styles} color='purple' image={src} />
      <div style={{maxWidth:"150px"}} >
        <div>Dobracina br.</div>
        <br />
        <div>23:00 - 04:00</div>
        <br />
        <div>Techno, House, Deep</div>
      </div>
    </div>
    <div style={dugmadva}>
      <Buttons />
      <Link to="/clubpage">
        <Button style={dugme} icon='info'content='Reed More' />
      </Link>
    </div>
    <Divider horizontal>NEW Club</Divider>

  </div>

)

export default Clubs
