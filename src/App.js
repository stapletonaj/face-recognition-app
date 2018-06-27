import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import Logo from "./components/Logo/Logo.js";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition.js";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm.js";
import Rank from "./components/Rank/Rank.js";
import 'tachyons';
import Particles from 'react-particles-js';
import Clarifai from "clarifai";

const app = new Clarifai.App({
  apiKey: "aad7917382274dd09426dc25911853a6"
});

const particlesOptions = {
  particles: {
    number: {
      value: 128,
      density: {
        enable: true,
        value_area: 800, 
      }
    }
  }
}

class App extends Component {
  constructor(){
    super()
    this.state = {
      input : '',
      imageURL: '',
    }
  }

  onInputChange = (event) => {
    this.setState({
      input: event.target.value,
    })
  }

  onButtonSubmit = () => {
    this.setState({
      imageURL: this.state.input,
    })
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL, 
      this.state.input).then(
        function (response) {
          console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
        },
        function (err) {
          // there was an error
        }
      );
  }

  render() {
    return (
      <div className="App">
        <div className="particles">
            <Particles
              params={particlesOptions}
            />
        </div>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit} 
        />
        <FaceRecognition imageURL={this.state.imageURL}/>
      </div>
    )
  }
}

export default App;
