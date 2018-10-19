import React, { Component } from 'react'
import { Button, Label } from 'semantic-ui-react'

const dugme = {
  backgroundColor: "#420040",
  color: "#00cd57",
  marginLeft: "2%"
};

class Buttons extends Component {
  state = {}

  handleClick = () => this.setState({ active: !this.state.active })

  render() {
    const { active } = this.state


    return (
      <div>
        <Button toggle active={active} onClick={this.handleClick} style={{marginLeft:"6%", backgroundColor: "#420040"}} label={<Label>2,048</Label>}
        icon='star' content='Fallow'>

        </Button>
        
      </div>
    )
  }
}

export default Buttons
