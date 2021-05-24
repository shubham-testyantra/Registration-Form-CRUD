import "./App.css";
import React from "react";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div>
      <div className="row">
        <div className="col-md-9 mx-auto">
          <Contacts />
        </div>
      </div>
    </div>
  );
}

export default App;
