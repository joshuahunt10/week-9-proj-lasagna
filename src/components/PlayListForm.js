import React, {Component} from 'react';

class PlayListForm extends Component {
  constructor(props){
    super(props)

    this.state = {
      userName: "",
      songArtist:"",
      songTitle:"",
      songNotes:""
    }
    this.handleUserNameChange = this.handleUserNameChange.bind(this)
    this.handleArtistChange = this.handleArtistChange.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleNotesChange = this.handleNotesChange.bind(this)
  }
  handleUserNameChange(event){
    this.setState({
      userName: event.target.value
    })
  }

  handleArtistChange(event){
    this.setState({
      songArtist: event.target.value
    })
  }

  handleTitleChange(event){
    this.setState({
      songTitle: event.target.value
    })
  }

  handleNotesChange(event){
    this.setState({
      songNotes: event.target.value
    })
  }


  render() {
    return (
      <form>

        <div className="form-group">
          <label htmlFor="userName_input">Username</label>
          <input type="text" className="form-control" id="userName_input" aria-describedby="emailHelp" placeholder="Username" value={this.state.userName} onChange={this.handleUserNameChange}/>

          <label htmlFor="songArtist-band-input">Artist/Band</label>
          <input type="text" className="form-control" id="songArtist-band-input" aria-describedby="emailHelp" placeholder="Artist/Band" value={this.state.songArtist} onChange={this.handleArtistChange}/>

          <label htmlFor="song-songTitle-input">Song Title</label>
          <input type="text" className="form-control" id="song-songTitle-input" aria-describedby="emailHelp" placeholder="Song Title" value={this.state.songTitle} onChange={this.handleTitleChange}/>

            <label htmlFor="songNotes-input">Notes about Song:</label>
            <textarea className="form-control" id="songNotes-input" rows="3" value={this.state.songNotes} onChange={this.handleNotesChange}></textarea>
          </div>

        </form>

      )
    }
  }
  export default PlayListForm;
