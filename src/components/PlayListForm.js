import React, {Component} from 'react';
import PlayList from './PlayList'

class PlayListForm extends Component {
  constructor(props){
    super(props)

    this.state = {
      userName: "",
      songArtist:"",
      songTitle:"",
      songNotes:"",
      songs:[]
    }
    this.handleUserNameChange = this.handleUserNameChange.bind(this)
    this.handleArtistChange = this.handleArtistChange.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleNotesChange = this.handleNotesChange.bind(this)
    this.addToList = this.addToList.bind(this)

    this.fetchData = this.fetchData.bind(this)
  }

  fetchData(){
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting')
    .then(r => r.json())
    .then(data => {
      console.log(data);
      this.setState({songs: data})
    })
  }
  componentDidMount(){
    this.fetchData()
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


  addToList = (e) => {
      e.preventDefault();
      // clearing out your form
      // this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
      // let listItem = ;

      fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    }
    ).then(response => {
      console.log(response, "yay");
    })
    .then( () => {
      console.log('inside the then');
      this.fetchData()
    })
    .catch(err => {
      console.log(err, "boo!");
    })

    this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
  }

  render() {
    return (
      <div>
      <form onSubmit={this.addToList}>

        <div className="form-group">
          <label htmlFor="userName">Username</label>
          <input type="text" className="form-control" id="userName_input" aria-describedby="emailHelp" placeholder="Username" value={this.state.userName} onChange={this.handleUserNameChange}/>

          <label htmlFor="songArtist">Artist/Band</label>
          <input type="text" className="form-control" id="songArtist-band-input" aria-describedby="emailHelp" placeholder="Artist/Band" value={this.state.songArtist} onChange={this.handleArtistChange}/>

          <label htmlFor="songTitle">Song Title</label>
          <input type="text" className="form-control" id="song-songTitle-input" aria-describedby="emailHelp" placeholder="Song Title" value={this.state.songTitle} onChange={this.handleTitleChange}/>

            <label htmlFor="songNotes">Notes about Song:</label>
            <textarea className="form-control" id="songNotes-input" rows="3" value={this.state.songNotes} onChange={this.handleNotesChange}></textarea>
          </div>
          <input type="submit" />
        </form>
        <PlayList
            handleUpdate={this.fetchData} songs={this.state.songs} />
      </div>

      )
    }
  }
  export default PlayListForm;
