import React, { Component } from "react";
import Navigation1 from "./Components/Navigation1/Navigation1";
import Navigation2 from "./Components/Navigation2/Navigation2";
import Navigation3 from "./Components/Navigation3/Navigation3";
import BodyPart1 from "./Components/BodyPart1/BodyPart1";

class App extends Component{
  render() {
  return (
      <div className="App">
        <Navigation1 />
        <Navigation2 />
        <Navigation3 />
        <BodyPart1 />
        
      </div>
    );
  }
  }
   

export default App;
