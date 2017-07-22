import React, { Component } from 'react';

class PlayListItem extends Component {

  render() {
    return (
      <div>
         {this.props.songs.map((block) => {
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
    );
  }



}

export default PlayListItem;
