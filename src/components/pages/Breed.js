import React, {Component} from 'react';
import '../css/Breed.css';

class Breed extends Component{
    constructor(props){
        super(props)
        this.state = {
          file: null
        }
        this.handleChange = this.handleChange.bind(this)
      }
      handleChange(event) {
        this.setState({
          file: URL.createObjectURL(event.target.files[0])
        })
      }
    render(){
        return(
            <div class="breed_Container">
                <h1>Breed Identifier</h1>
                  <br/>
                    <p><b>"If you don't own a dog, at least one, there may not 
                    necessarily be anything wrong with you, but there may 
                    be something wrong with your life."</b></p>
                    <hr/>

                    <input type="file" name="file" onChange={this.handleChange}/>
                    <br/>
                    <br/>

                    <div class="breed_imgBox">
                    <img src={this.state.file} alt='file'/>
                    </div>

			              <div>
				            <button>Find the Breed</button>
			              </div>
            </div>
        )
    }
}
export default Breed;