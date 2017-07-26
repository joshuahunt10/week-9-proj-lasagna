import React, { Component } from 'react';

class PlayListItem extends Component {

  render() {
    return (
      <div className="row">
         {this.props.songs.map((block) => {
          return(
            <div className="col-sm-4">
            <div className="card" key={block._id}>
              <p className="card-text"><strong>User:{block.userName}</strong></p>
              <p className="card-text"><strong>Artist/Band:{block.songArtist}</strong></p>
              <p className="card-text"><strong>Title:{block.songTitle}</strong></p>
              <p className="card-text"><strong>Notes:{block.songNotes}</strong></p>
            </div>
          </div>

          )
        })}

    </div>
    );
  }



}

export default PlayListItem;
