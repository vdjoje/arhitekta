import React, { Component } from 'react';
import { Image, Divider } from 'semantic-ui-react'; 
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import s1 from '../images/Oaza/1A.jpg'; 
import s2 from '../images/Oaza/2A.jpg'; 
import s3 from '../images/Oaza/3A.jpg'; 
import s4 from '../images/Oaza/4A.jpg'; 
import s5 from '../images/Oaza/5A.jpg'; 
import s6 from '../images/Oaza/6.jpg'; 
import s7 from '../images/Oaza/7A.jpg'; 
import s8 from '../images/Oaza/8A.jpg'; 
import s9 from '../images/Oaza/9A.jpg'; 
import s10 from '../images/Oaza/10A.jpg'; 
import s11 from '../images/Oaza/11A.jpg'; 
import s12 from '../images/Oaza/12A.jpg'; 

const style = {
    margin:'0.5%'
}

const images = [
  s1,
  s2,
  s3,
  s4,
  s5,
  s6,
  s7,
  s8,
  s9,
  s10,
  s11,
  s12,
];
 
export default class LightboxExample extends Component {
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
        <button type="button" onClick={() => this.setState({ isOpen: true })}>
          Open Lightbox
        </button>
 
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

      <div> 
        <Image src={s1} size='big' floated='left' style={style} onClick={() => this.setState({ isOpen: true })}/>
        <Image src={s2} size='medium' style={style} onClick={() => this.setState({ isOpen: true })}/> 
        <Image src={s3} size='medium' style={style} onClick={() => this.setState({ isOpen: true })}/> 
        <Divider hidden />
      </div>
      <div  style={{ display:'flex', flexFlow: "row nowrap", alignItems: 'center' }} onClick={() => this.setState({ isOpen: true })}>
        <Image src={s4} size='medium'  style={style} onClick={() => this.setState({ isOpen: true })}/> 
        <Image src={s5} size='medium'  style={style} onClick={() => this.setState({ isOpen: true })}/>
        <Image src={s6} size='medium'  onClick={() => this.setState({ isOpen: true })}/>
        <Divider hidden />
      </div>
      <div>
        <Image src={s7} size='big' floated='right' style={style} onClick={() => this.setState({ isOpen: true })}/> 
        <Image src={s8} size='medium' style={style} onClick={() => this.setState({ isOpen: true })}/> 
        <Image src={s9} size='medium' style={style} onClick={() => this.setState({ isOpen: true })}/> 
      </div>
      <div style={{ display:'flex', flexFlow: "row nowrap", alignItems: 'center' }} onClick={() => this.setState({ isOpen: true })}>
        <Image src={s10} size='medium' style={style} onClick={() => this.setState({ isOpen: true })} /> 
        <Image src={s11} size='medium' style={style} onClick={() => this.setState({ isOpen: true })} /> 
        <Image src={s12} size='medium' style={style} onClick={() => this.setState({ isOpen: true })} /> 
      </div>  



      </div>

        


    );
  }
}