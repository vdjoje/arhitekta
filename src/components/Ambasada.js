import React, { Component }from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import slika1 from '../images/Ambasada/ambasada-UAE.jpg';
import slika2 from '../images/Ambasada/ambasada-UAE2.jpg';
import slika3 from '../images/Ambasada/ambasada-UAE3.jpg';
import slika4 from '../images/Ambasada/ambasada-UAE4.jpg';
import slika5 from '../images/Ambasada/ambasada-UAE5.jpg';
import slika6 from '../images/Ambasada/ambasada-UAE6.jpg';

const photos = [
    { src: slika1, width: 6, height: 4 },
    { src: slika2, width: 6, height: 4 },
    { src: slika3, width: 6, height: 4 },
    { src: slika4, width: 6, height: 4 },
    { src: slika5, width: 6, height: 4 },
    { src: slika6, width: 6, height: 4 },
];


export default class Ambasada extends Component {
    constructor() {
      super();
      this.state = { currentImage: 0 };
      this.closeLightbox = this.closeLightbox.bind(this);
      this.openLightbox = this.openLightbox.bind(this);
      this.gotoNext = this.gotoNext.bind(this);
      this.gotoPrevious = this.gotoPrevious.bind(this);
    }
    openLightbox(event, obj) {
      this.setState({
        currentImage: obj.index,
        lightboxIsOpen: true,
      });
    }
    closeLightbox() {
      this.setState({
        currentImage: 0,
        lightboxIsOpen: false,
      });
    }
    gotoPrevious() {
      this.setState({
        currentImage: this.state.currentImage - 1,
      });
    }
    gotoNext() {
      this.setState({
        currentImage: this.state.currentImage + 1,
      });
    }
    render() {
      return (
        <div
            style={{
                marginTop:'5%'    
            }}
        >  
          <Gallery photos={photos} onClick={this.openLightbox} />
          <Lightbox images={photos}
            onClose={this.closeLightbox}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            currentImage={this.state.currentImage}
            isOpen={this.state.lightboxIsOpen}
            
          />
        </div>
      )
    }
  }
  