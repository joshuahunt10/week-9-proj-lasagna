import React, {Component} from 'react';

class NavBar extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-3">SourceTapes</h1>
          <hr/>
          <p className="lead">Crowd source a mixtape for the road</p>
        </div>
      </div>
    )
  }
}

export default NavBar;
