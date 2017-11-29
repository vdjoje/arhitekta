import React, { Component } from 'react'
import { Icon, Menu, Button } from 'semantic-ui-react'
import { Link } from "react-router-dom";


export default class MenuExampleIcons extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu icon
        style={{
          width: "100%",
          position: "fixed",
          bottom: "0",
          backgroundColor: "#420040",
          zIndex: 1,
          borderRadius: 0,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          maxHeight: "20px"

      }}
      >
        <Menu.Item style={{ marginLeft: "10%"}} name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
          <Link to="/" style={{textDecoration: "none" }}>
          <Button style={{backgroundColor: "#420040",  color: "#00cd57"}} circular icon='home' />

          </Link>
        </Menu.Item>

        <Menu.Item name='events' active={activeItem === 'map signs'} onClick={this.handleItemClick}>
          <Link to="/" style={{ color: "#00cd57", textDecoration: "none" }}>
          <Button style={{backgroundColor: "#420040",  color: "#00cd57"}} circular icon='map signs' />
          </Link>
        </Menu.Item>

        <Menu.Item name='clubs' active={activeItem === 'bar'} onClick={this.handleItemClick}>
          <Link to="/clubs" style={{ color: "#00cd57", textDecoration: "none" }}>
          <Button style={{backgroundColor: "#420040",  color: "#00cd57"}} circular icon='bar' />
          </Link>
        </Menu.Item>
        <Menu.Item name='favorite' active={activeItem === 'favorite'} onClick={this.handleItemClick}>
          <Link to="/" style={{ color: "#00cd57", textDecoration: "none" }}>
          <Button style={{backgroundColor: "#420040",  color: "#00cd57"}} circular icon='favorite' />
          </Link>
        </Menu.Item>
      </Menu>
    )
  }
}
