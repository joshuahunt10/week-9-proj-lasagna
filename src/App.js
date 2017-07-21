import React, { Component } from 'react';
import './styles/App.css';
import NavBar from './components/NavBar'
import PlayList from './components/PlayList'
import PlayListForm from './components/PlayListForm'



class App extends Component {
  render() {
    return (
      <div className="container">
        <NavBar />
        <PlayListForm />
        <PlayList />
      </div>
    );
  }
}

export default App;
