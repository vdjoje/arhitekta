import React, { Component } from 'react'
import { Button, Header, Icon, Image, Modal, Divider } from 'semantic-ui-react'
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

const style = {
    margin:'0.5%'
}


class Modaltest extends Component {
    state = { open: false }
  
    show = dimmer => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })
  
    render() {
      const { open, dimmer } = this.state
  
      return (
        <div>
            <div>
                <Button onClick={this.show(true)}>Default</Button>
                {/* <Image src={slika1} onClick={this.show('inverted')}></Image> */}
                <Button onClick={this.show('blurring')}>Blurring</Button>
                
                <Modal dimmer={dimmer} open={open} onClose={this.close}>    
                <Image src={slika1} />
                <Modal.Actions>
                <Button color='black' onClick={this.close}>
                        Nope
                </Button>
                <Button
                        positive
                        icon='checkmark'
                        labelPosition='right'
                        content="Yep, that's me"
                        onClick={this.close}
                />
                </Modal.Actions>
                </Modal>
            </div>
            <div 
                style={{
                    color: "black", 
                    marginTop: "10%",
                    width: '48%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    backgroundColor: 'black'
        
                }}
            >
            <h1 style={{color:'white'}} >Poslovno-apartmanski objekat “Oaza”</h1>

                <div> 
                    <Image src={slika1} size='big' floated='left' style={style} onClick={this.show('blurring')}/>
                    <Image src={slika2} size='medium' style={style}/> 
                    <Image src={slika3} size='medium' style={style} /> 
                    <Divider hidden />
                </div>
                <div  style={{ display:'flex', flexFlow: "row nowrap", alignItems: 'center' }}>
                    <Image src={slika4} size='medium'  style={style}/> 
                    <Image src={slika5} size='medium'  style={style}/>
                    <Image src={slika6} size='medium' />
                    <Divider hidden />
                </div>
                <div>
                    <Image src={slika7} size='big' floated='right' style={style}/> 
                    <Image src={slika8} size='medium' style={style}/> 
                    <Image src={slika9} size='medium' style={style}/> 
                </div>
                <div style={{ display:'flex', flexFlow: "row nowrap", alignItems: 'center' }}>
                    <Image src={slika10} size='medium' style={style}/> 
                    <Image src={slika11} size='medium' style={style}/> 
                    <Image src={slika12} size='medium' style={style}/> 
                </div>  
            </div>
        </div>
      )
    }
  }

export default Modaltest