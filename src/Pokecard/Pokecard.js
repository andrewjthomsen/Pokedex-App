import React, { Component } from "react";
import "./Pokecard.css";

// const Pokemon_API =
//   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const Pokemon_API =
  "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
// Function that takes a number in, determines if its less than or equal to 999,
// If number is greater then just return number, if less pad with two zeros plus the number
// Last array slice method is applied to slice 3 digits
  let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3): number)

class Pokecard extends Component {
  render() {
    let imgSrc = `${Pokemon_API}${padToThree(this.props.id)}.png`;
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{this.props.name}</h1>
        <img src ={imgSrc} alt={this.props.name}/>
        <div className="Pokecard-data">Type: {this.props.type}</div>
        <div className="Pokecard-data">EXP: {this.props.base_experience}</div>
      </div>
    );
  }
}

export default Pokecard;
