import React, { Component } from 'react';
import PlayListItem from './PlayListItem'
import '../styles/App.css'

class PlayList extends Component {

  constructor(props){
    super(props)

    this.handleFormUpdate = this.handleFormUpdate.bind(this)
  }

  handleFormUpdate(e){
    e.preventDefault();
    this.props.handleUpdate()
  }


  render() {
    return (
      <div className='container' id="playListContainer">
        <form onSubmit={this.handleFormUpdate}>
          <button type="submit">Update the List</button>
        </form>
          <div>
              <PlayListItem songs={this.props.songs}/>
          </div>
        </div>
    );
  }

}

export default PlayList;
