import React, { Component } from 'react';
import './styles/App.css';
import NavBar from './components/NavBar'
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


          </div>

        </div>
      </div>
    );
  }
}





export default App;
