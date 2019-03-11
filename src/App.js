import React, { Component } from 'react';
import './App.css';

import Tickets from './containers/Tickets';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <code>AviaSales</code>
          </p>
        </header>
				<main>
					<Tickets />
				</main>
      </div>
    );
  }
}

export default App;
