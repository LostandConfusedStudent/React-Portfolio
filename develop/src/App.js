import React from 'react';
import Container from "./components/Container";
import Header from './components/Header';
import Image from './components/Image';
import Content from './components/Content';
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <Container>
      <Header />
      <Image />
      <Content />
      <Footer />
    </Container>

  )
}

export default App;
