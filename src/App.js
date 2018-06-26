import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import Logo from "./components/Logo/Logo.js";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm.js";
import Rank from "./components/Rank/Rank.js";
import 'tachyons';
import Particles from 'react-particles-js';

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
        <ImageLinkForm />
      {/*<FaceeRecognition /> */}
      </div>
    )
  }
}

export default App;
