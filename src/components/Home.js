import React from 'react'
import { Image } from 'semantic-ui-react'
import back from '../../src/images/back.jpg'

const Home = () => (
  
    <container>
      <div
        style={{color: "black", position:"fixed" }}
      > 

        <Image src={back} />  

      </div>

      <div
        style={{position: 'absolute'}}
      >
        <h1>Dobro dosli</h1>
        <h3>Arhitektura… Dizajn… Kreacija… Umjetnost… Enterijer…</h3>
        <h5>“An interior is the Natural projection of the soul” </h5>
        <h5>(Coco Chanel)</h5>  
      </div>

    </container>
)

export default Home
