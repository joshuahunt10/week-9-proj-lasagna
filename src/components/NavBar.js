import React, {Component} from 'react';

class NavBar extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-3">CrushTapes</h1>
          <hr/>
          <p className="lead">Create a mixtape for your crush to share.</p>
        </div>
      </div>
    )
  }
}

export default NavBar;
