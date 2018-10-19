import React, { Component } from "react";
import { Icon, Menu, Button, Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";

const options = [
  { key: 1, text: 'Poslovno-apartmanski objekat “Oaza”', value: 1 },
  { key: 2, text: 'Ambasada UAE u Capital Plaza Centru (Podgorica)', value: 2 },
  { key: 3, text: 'Atlas banka u Capital Plaza Centru (Podgorica)', value: 3 },
  { key: 4, text: 'Stambeno-poslovni objekat “Bogdanov kraj” (Cetinje)', value: 4 },
  { key: 5, text: '“Benex fitnes centar” u Capital Plaza Centru (Podgorica)', value: 5 },
  { key: 6, text: 'Stambeni objekat Cetinje', value: 6 },
  { key: 7, text: 'Enterijer vile na primorju', value: 7 },
  { key: 8, text: 'Enterijer planinskog stana', value: 8 },
]



export default class Topbar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu
        icon
        style={{
          width: "100%",
          position: "fixed",
          top: "0",
          backgroundColor: "#181818",
          zIndex: 1,
          borderRadius: 0,
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "space-between",
          maxHeight: "20px"
        }}
      >
        <div 
          style={{ display: "flex", justifyContent: "flex-start"}}
        >
        <Menu.Item
          as={Link}
          to="/"
          style={{ color: "white", textDecoration: "none" }}
          onClick={this.handleItemClick}
        >
          MIŠKOVIĆ JELENA ARHITEKTA

        </Menu.Item>

        
        <Menu.Item
          
          name="account"
          active={activeItem === "facebook f"}
          onClick={this.handleItemClick}
          as={Link}
          to="/"
          style={{ color: "white", textDecoration: "none" }}
        >
          <Button
            style={{ backgroundColor: "#181818", color: "#9d9d9d" }}
            circular
            icon="facebook f"
          />
        </Menu.Item>

        
        <Menu.Item
          name="search"
          active={activeItem === "instagram"}
          onClick={this.handleItemClick}
          as={Link}
          to="#"
          style={{ color: "#00cd57", textDecoration: "none"}}
          
        >
          <Button
            style={{ backgroundColor: "#181818", color: "#9d9d9d" }}
            circular
            icon="instagram"
            
          />
        </Menu.Item>
        </div>
        
        <div 
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
        {/*  
        <Menu.Item
          as={Link}
          to="/"
          style={{ color: "white", textDecoration: "none" }}
          onClick={this.handleItemClick}
        >
          Dobrodosli

        </Menu.Item> */}

        <Menu.Item
          as={Link}
          to="/omeni"
          style={{ color: "white", textDecoration: "none" }}
          onClick={this.handleItemClick}
        >
          O Meni

        </Menu.Item>

        <Menu.Item
          as={Link}
          to="/odideje"
          style={{ color: "white", textDecoration: "none" }}
          onClick={this.handleItemClick}
        >
          Usluge

        </Menu.Item>

        <Dropdown 
          item text='Portfolio' options={options} simple item
          style={{ color: "white", textDecoration: "none" }}
        >
        </Dropdown>

       


        <Menu.Item
          as={Link}
          to="/kontakt"
          style={{ color: "white", textDecoration: "none" }}
          onClick={this.handleItemClick}
        >
          Kontakt

        </Menu.Item>  
        </div>

      </Menu>
    );
  }
}
