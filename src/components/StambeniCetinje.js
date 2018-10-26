import React, { Component }from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import s1 from '../images/StambeniCetinje/1.jpg';
import s2 from '../images/StambeniCetinje/2.jpg';
import s3 from '../images/StambeniCetinje/3.jpg';
import s4 from '../images/StambeniCetinje/4.jpg';


const images = [
    s1,
    s2,
    s3,
    s4,
  ];


export default class Stambeni extends Component {
    constructor(props) {
      super(props);
   
      this.state = {
        photoIndex: 0,
        isOpen: false,
      };
    }
   
    render() {
      const { photoIndex, isOpen } = this.state;
   
      return (
        <div>
             
          {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + images.length - 1) % images.length,
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % images.length,
                })
              }
            />
          )}
  
            <div
                style={{color: "black", marginTop: "20%"}}
            >
                <h1>Stambeni objekat Cetinje</h1>

                <div 
                  style={{
                    display: "flex",
                    flexFlow: "row",
                    justifyContent: "center"
                  }}
                > 
                    <Image src={s1} width='30% vw' height='30% vh'  onClick={() => this.setState({ isOpen: true })}/>    
                    <Image src={s2} width='30% vw' height='30% vh' onClick={() => this.setState({ isOpen: true })}/>                
                </div>
                <div 
                  style={{
                    display: "flex",
                    flexFlow: "row",
                    justifyContent: "center"
                  }}
                >     
                    <Image src={s3} width='30% vw' height='30% vh' onClick={() => this.setState({ isOpen: true })}/>
                    <Image src={s4} width='30% vw' height='30% vh' onClick={() => this.setState({ isOpen: true })}/>                    
                </div>  
            </div>     
        </div>

      );
    }
  }