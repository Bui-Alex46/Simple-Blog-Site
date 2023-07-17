import React, {Fragment} from "react";
import './App.css';
// compoonents
import InputContent from "./components/Input"
import ListContent from "./components/List"




function App() {
  return <Fragment>
    <div className = "container">
      <InputContent />
      <ListContent />
    </div>
    
  </Fragment>;
}

export default App;
