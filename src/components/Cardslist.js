import React from 'react';
import {Card, Icon} from 'semantic-ui-react';



const extra = (
  <a>
    <Icon name='user' />
    20 Attending
  </a>
);

const lista=[
    {
    image:'https://unsplash.it/200/300/?random',
    header:'Prodavnica Showcase',
    meta:'TUBE',
    description:'Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.',
    extra:{extra}
  },
    {
    image:'https://unsplash.it/200/300/?random',
    header:'Jevdja',
    meta:'Friend',
    description:'He did not share any information !!!',
    extra:{extra},
    }
]

class Cardslist {

    render (){
      let Mapirano = lista.map ((image)=>{
          return (
              <div>
                <lista.image />

              </div>
            );
          },
        )
    return(
      <div>
        {<Mapirano />}
      </div>
    );
  }
}




export default Cardslist
