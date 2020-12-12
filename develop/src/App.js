import React from 'react';
import Container from "./components/Container";
import Header from './components/Header';
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Switch>
          <Route exact path="/" component = { Home } />
          <Route exact path="/Home" component = { Home } />
          <Route exact path="/Portfolio" component = { Portfolio } />
        </Switch>
      </Container>
      <Footer />
    </Router>
  )
}

export default App;
