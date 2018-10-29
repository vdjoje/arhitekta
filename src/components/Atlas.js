import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
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

const photos = [
    { src: sl1, width: 6, height: 4 },
    { src: sl2, width: 6, height: 4 },
    { src: sl3, width: 6, height: 4 },
    { src: sl4, width: 6, height: 4 },
    { src: sl5, width: 6, height: 4 },
    { src: sl6, width: 6, height: 4 },
    { src: sl7, width: 6, height: 4 },
    { src: sl8, width: 6, height: 4 },
    { src: sl9, width: 6, height: 4 },
    { src: sl10, width: 6, height: 4 },
    { src: sl11, width: 6, height: 4 },
];


export default class Atlas extends Component {
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
  