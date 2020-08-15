import React, { Component } from "react";
import Character from "./components/Character";
import Header from "./components/Header";
import array from "./array.json";
import "./App.css";

class App extends Component {
  state = {
    array,
    highScore: 0,
    currentScore: 0,
    Clicked: false
  };

 //ShufleFucntion() {
  //  Shuffles cards on click
 }


//  increaseScoreFunction() {
//    increases score when one of the cards is clicked
//  }


  render() {
    return (
      <>
        <Header />
        {this.state.array.map(array => (
          <Character
            Clicked={this.state.Clicked}
            id={array.id}
            key={array.id}
            name={array.name}
            image={array.image}
          />

          ))}
      </>
    );
  }
}

export default App;
