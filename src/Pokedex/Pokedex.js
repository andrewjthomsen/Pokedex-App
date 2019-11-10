import React, { Component } from "react";
import "./Pokedex.css";
import Pokecard from "../Pokecard/Pokecard";


class Pokedex extends Component {
 
  // possibly change line 25 to an if statement
  render() {
    let title;
    if (this.props.isWinner) {
      title = <h1 className="Pokedex-winner">Winning Hand!</h1>
    } else {
      title = <h1 className="Pokedex-loser">Losing Hand!</h1>
    }
    return (
      <div className="Pokedex">
      {title}
        <h4>Total Experience: { this.props.base_experience} </h4>
        <div className="Pokedex_cards">
          {" "}
          {this.props.pokemon.map(p => (
            <Pokecard
              id={p.id}
              name={p.name}
              type={p.type}
              base_experience={p.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
