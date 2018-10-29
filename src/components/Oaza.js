import React, { Component }from 'react';
import { Card, Icon, Image, Divider, Modal } from 'semantic-ui-react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
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


const photos = [
  { src: slika1, width: 6, height: 4 },
  { src: slika2, width: 6, height: 4 },
  { src: slika3, width: 6, height: 4 },
  { src: slika4, width: 6, height: 4 },
  { src: slika5, width: 6, height: 4 },
  { src: slika6, width: 6, height: 4 },
  { src: slika7, width: 6, height: 4 },
  { src: slika8, width: 6, height: 4 },
  { src: slika9, width: 6, height: 4 },
  { src: slika10, width: 6, height: 4 },
  { src: slika11, width: 6, height: 4 },
  { src: slika12, width: 6, height: 4 },
];


export default class Oaza extends Component {
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
