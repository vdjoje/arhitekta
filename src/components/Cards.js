import React from "react";
import { Card, Icon } from "semantic-ui-react";

const extra = (
  <a>
    <Icon name="user" />
    20 Attending
    <Icon
      style={{ marginLeft: "50%" }}
      name="star"
      onClick={this.handleItemClick}
    />
  </a>
);

const Cards = props => (
  <Card
    color="purple"
    style={{ marginBot: "5%" }}
    image="https://unsplash.it/200/300/?random"
    header={props.name}
    meta={props.artist}
    description={props.description}
    extra={extra}
  />
);

export default Cards;
