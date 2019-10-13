import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar.component";
import DynastyList from "./components/dynasty-list.component";
import DynastyEdit from "./components/dynasty-edit.component";
import DynastyCreate from "./components/dynasty-create.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar></Navbar>
        <br></br>
        <Route path="/" exact component={DynastyList}></Route>
        <Route path="/edit/:id" exact component={DynastyEdit}></Route>
        <Route path="/create" exact component={DynastyCreate}></Route>
      </div>
    </Router >
  );
}

export default App;
