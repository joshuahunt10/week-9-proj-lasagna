import React, {Component} from 'react';
import './styles/App.css';
import NavBar from './components/NavBar'
import PlayListForm from './components/PlayListForm'

class App extends Component {
  render() {
    return (
      <div id="root">
        <NavBar/>
      
          <PlayListForm/>


      </div>

    );
  }
}

export default App;
