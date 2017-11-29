import React from 'react';
import {Card, Icon} from 'semantic-ui-react';


const extra = (
  <a>
    <Icon name='user' />
    20 Attending
    <Icon style={{marginLeft:"50%"}} name='star' onClick={this.handleItemClick}/>
  </a>
);


const Cards = () => (
  <Card
    color='purple'
    style={{marginBot: "5%"}}
    image='https://unsplash.it/200/300/?random'
    header='Ime Događaja'
    meta='Carl Cox, Vuk Smiljanic'
    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
    extra={extra}
  />

)


export default Cards
