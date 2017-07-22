import React, { Component } from 'react';
import './styles/App.css';
import NavBar from './components/NavBar'
import PlayList from './components/PlayList'
import PlayListForm from './components/PlayListForm'



class App extends Component {
  render() {
    return (
      <div id="root">
        <NavBar />
        <div className="container">
          <div className="row">
            <div className="col-6">
              <PlayListForm />
            </div>

            <div className="col">
              1 of 3
            </div>
            <div className="col-5">
              <PlayList />
            </div>
          </div>

        </div>
      </div>
    );
  }
}





export default App;
