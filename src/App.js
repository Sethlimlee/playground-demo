import React, { Component } from 'react';
import axios from 'axios';
import { StyleSheet, css } from 'aphrodite';
import Home from './components/Home';

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      animals: [],
      theChosen: ''
    }
    this.updateTheChosen = this.updateTheChosen.bind(this)
    this.getAnimals = this.getAnimals.bind(this)
  }

  updateTheChosen() { }

  getAnimals() {
    axios.get('/api/animals/')
      .then(response => {
        this.setState({
          animals: response.data
        })
      })
      .catch(() => console.log('No animals fo you.'))
  }

  render() {
    console.log(this.state.animals)

    const styles = StyleSheet.create({
      button: {
        background: 'gray',
        border: 'none',
        borderRadius: '3px',
        color: 'white',

      }
    })

    return (
      <div className="App">
        {/* <input onChange={this.updateTheChosen} />
        <button className={css(styles.button)}>Chose</button>
        <br />
        <button onClick={this.getAnimals}>Available Animals</button> */}

        <Home />
        
      </div>
    );
  }
}

export default App;