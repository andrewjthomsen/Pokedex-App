import React, { Component } from "react";
import Pokegame from "../Pokegame/Pokegame";
import "./App.css";
// Possible goals for Pokedex:
// Integrate state
// Further style
// Figure out to possible add redux
// Instead of hard coded pokemon, have a random pokemon generateor
class App extends Component {
  render() {
    return (
    <div className="App">
      <Pokegame />
    </div>
    )
  }
}

export default App;
