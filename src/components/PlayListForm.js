import React, {Component} from 'react';

class PlayListForm extends Component {

  render() {
    return (
      <div>
      <form>
        <div className="form-group">
          <label HTMLfor="exampleInputEmail1">Username</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="username" />

          </div>
          <div className="form-group">
            <label HTMLfor="exampleInputEmail1">Artist/Band</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Artist/Band" />

            </div>

            <div className="form-group">
              <label HTMLfor="exampleTextarea">Example textarea</label>
              <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
            </div>
                    </form>
                  </div>

                  )
                }
              }
              export default PlayListForm;
