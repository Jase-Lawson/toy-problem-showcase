import React, { Component } from 'react';

export default class FilterObject extends Component {

  constructor() {
    super();

    this.state = {
      unFilteredAnimals: [
        {
          species: 'dog',
          name: 'titus',
          age: 8,
        },
        {
          species: 'cat',
          name: 'garfield',
          age: 18,
        },
        {
          species: 'horse',
          name: 'Nova',
          age: 12,
        }
      ],
      userInput: '',
      filteredAnimals: [],
    }
  }
  handleChange(val) {
    this.setState({
      userInput: val
    })
  }

  filterAnimals(prop) {
    let unFilteredAnimals = this.state.unFilteredAnimals;
    let filteredAnimals = [];

    for (let i = 0; i < unFilteredAnimals.length; i++) {
      if (unFilteredAnimals[i].hasOwnProperty(prop)) {
        filteredAnimals.push(unFilteredAnimals[i])
      }
    }
    this.setState({ filteredAnimals: filteredAnimals })
  }


  render() {
    return (
      <div className="puzzleBox filterObjectPB">

        <h4> Filter Object </h4>

        <span className="puzzleText"> Original: {JSON.stringify(this.state.unFilteredAnimals, null, 10)}</span>

        <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>

        <button className="confirmationButton" onClick={() => this.filterAnimals(this.state.userInput)}> Filter </button>

        <span className="resultsBox filterObjectRB"> Filtered: {JSON.stringify(this.state.filteredAnimals, null, 10)}</span>

      </div>
    )
  }
}









