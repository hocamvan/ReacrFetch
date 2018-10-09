import React, { Component } from 'react';
import './App.css';
import Button from './Button.jsx';
import Zonetexte from './Zonetexte.jsx'

class App extends Component {
  constructor(props) {
  const Simpson = [{quote:"I believe the children are the future... Unless we stop them now!",
  character:"Homer Simpson",
  image:"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939","characterDirection":"Right"}]
    super(props)
    this.state = {
      information: Simpson[0],
    }
  }
  getInformation() {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(resultat => resultat.json())
      .then((data) => this.setState({
        information: data[0]
      }))
  }

  render() {
    return (
      <div>
        <Button citation={() => this.getInformation()} />
        <Zonetexte personnel={this.state.information} />
      </div>
    );
  };
}

export default App;
