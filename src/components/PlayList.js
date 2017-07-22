import React, { Component } from 'react';

class PlayList extends Component {

  constructor(props){
    super(props)

    this.state = {
      songs: []
    }

    this.handleUpdateFetch = this.handleUpdateFetch.bind(this)
  }



  componentDidMount(){
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
      return results.json();
    }).then(data => {
      this.setState({songs: data});
      console.log("state", this.state.songs);
    })
  }


    handleUpdateFetch(event){
      event.preventDefault()
      console.log(this.state.songs);
    }


  render() {
    return (
      <div className='container'>
        <form onSubmit={this.handleUpdateFetch}>
          <input type="submit" />
        </form>
          <div className="card-group">
              {this.state.songs.map((block) => {
                return(
                  <div className="card-block" key={block._id}>
                    <p className="card-text"><strong>ID:{block._id}</strong></p>

                    <p className="card-text"><strong>User:{block.userName}</strong></p>
                    <p className="card-text"><strong>Artist/Band:{block.songArtist}</strong></p>
                    <p className="card-text"><strong>Title:{block.songTitle}</strong></p>
                    <p className="card-text"><strong>Notes:{block.songNotes}</strong></p>
                  </div>

                )
              })}
          </div>
        </div>
    );
  }

}

export default PlayList;
