import React, { Component } from "react";
import Cards from "./Cards";

const styles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

class Home extends Component {
  constructor() {
    super();
    this.state = {
      events: [
        {
          name: "Ime dogadjaja",
          artists: "Cox i Vuk",
          description: "Bice nam do jaja."
        },
        {
          name: "Ime dogadj2aja",
          artists: "Cox i Vu2k",
          description: "Bice nddgdam do jaja."
        },
        {
          name: "Ime dogadj3aja",
          artists: "Cox i Vu2k",
          description: "Bice aadsam do jaja."
        },
        {
          name: "Ime dogadj3aja",
          artists: "Cox i Vu2k",
          description: "Bice aadsam do jaja."
        }
      ]
    };
  }

  render() {
    const ivent = this.state.events;
    // const eventList = ivent.map((a, index) => {
    //     return <li key={index}>{a.name}</li>;
    // });
    const eventList = ivent.map((a, index) => {
      return (
        <Cards
          key={index}
          artist={a.artists}
          description={a.description}
          name={a.name}
        />
      );
    });
    return (
      <div style={styles}>
        <br />
        <br />
        {eventList}
        {/* <Cards artist={"Kurton"} description="opis" name="Ime ludo" />
        <Cards />
        <Cards /> */}
      </div>
    );
  }
}

export default Home;
