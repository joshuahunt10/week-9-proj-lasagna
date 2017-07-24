import React, { Component } from 'react';
import PlayListItem from './PlayListItem'

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
      <div className='container'>
        <form onSubmit={this.handleFormUpdate}>
          <button type="submit">Update</button>
        </form>
          <div className="card-group">
              <PlayListItem songs={this.props.songs}/>
          </div>
        </div>
    );
  }

}

export default PlayList;
