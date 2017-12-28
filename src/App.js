import React, { Component } from 'react';
import './App.css';

import SearchBar from './search-bar/Search-bar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row search">
            <div className="col-sm-8 col-sm-offset-2">
              <form role="form">
                <SearchBar/>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
