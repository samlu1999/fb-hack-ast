import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // Initialize state
  state = { passwords: [] }

  // Fetch passwords after first mount
  componentDidMount() {
    //this.getPasswords();
	this.getMatches();
  }

  getPasswords = () => {
    // Get the passwords and store them in state
    fetch('/api/passwords')
      .then(res => res.json())
      .then(passwords => this.setState({ passwords }));
  }
  
  getMatches = () => {
	  fetch('/api/getMatches')
		.then(res => res.json())
		.then(matches => this.setState({ matches }));
  }

  render() {
    const { matches } = this.state;

    return (
      <div className="App">
		{ JSON.stringify(matches, null, 2) }
      </div>
    );
  }
}

export default App;