import React from 'react';
import './App.css';
import Player from './components/Player';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount(){
    fetch('http://localhost:5000/api/players')
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.setState( { players: response } )
      })
      .catch(error => {
        console.log(error)
      })
  }

    render(){
      return (
        <div className="App">
          <div className="player-container" data-testid='players'>
            {this.state.players.map(players => {
              return <Player key={players.id} players={players} />
            })}
          </div>
        </div>
      )
    }
}

export default App;
