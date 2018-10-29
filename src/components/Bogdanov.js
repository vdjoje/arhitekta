import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import s1 from '../images/Bogdanov/1.jpg';
import s2 from '../images/Bogdanov/2.jpg';
import s3 from '../images/Bogdanov/3.jpg';
import s4 from '../images/Bogdanov/4.jpg';
import s5 from '../images/Bogdanov/5.jpg';
import s6 from '../images/Bogdanov/6.jpg';
import s7 from '../images/Bogdanov/7.jpg';
import s8 from '../images/Bogdanov/8.jpg';

const photos = [
  { src: s1, width: 6, height: 4 },
  { src: s2, width: 6, height: 4 },
  { src: s3, width: 4, height: 3 },
  { src: s4, width: 4, height: 3 },
  { src: s5, width: 6, height: 4 },
  { src: s6, width: 6, height: 4 },
  { src: s7, width: 4, height: 3 },
  { src: s8, width: 4, height: 3 },
];


export default class Bogdanov extends Component {
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
