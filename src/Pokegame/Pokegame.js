import React, { Component } from "react";
import Pokedex from "../Pokedex/Pokedex";

class Pokegame extends Component {
  static defaultProps = {
    pokemon: [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 65 }
    ]
  };
  render() {
    // Goal of this is to randomly pick pokemon from player2 hand and move it to player1 hand. Eventually will result in both hands being equal lengths.
    let hand1 = [];
    let hand2 = [...this.props.pokemon];
    while (hand1.length < hand2.length) {
      let randomIndex = Math.floor(Math.random() * hand2.length);
      let randomPokemon = hand2.splice(randomIndex, 1)[0];
      hand1.push(randomPokemon);
    }
    // Goes through all of hand1 and for each pokemon and take base_experience and reduce it, starting with zero.
    let handOneTotalExp = hand1.reduce((base_experience, pokemon) => base_experience + pokemon.base_experience, 0);
    let handTwoTotalExp = hand2.reduce((base_experience, pokemon) => base_experience + pokemon.base_experience, 0);

    return (
      <div>
        <Pokedex pokemon={hand1} base_experience={handOneTotalExp} isWinner={handOneTotalExp > handTwoTotalExp}/>
        <Pokedex pokemon={hand2} base_experience={handTwoTotalExp} isWinner={handTwoTotalExp > handOneTotalExp}/>
      </div>
    );
  }
}
export default Pokegame;
