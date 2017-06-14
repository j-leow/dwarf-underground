import React, { Component } from 'react';
import './css/App.css';
import Header from './Header.js'
import Section from './Section.js'
import Aside from './Aside.js'
import OtherArticles from './OtherArticles.js'
import Footer from './Footer.js'

class App extends Component {
    render() {
    return (
      <div className="App">
        <Header />

        <main className="expanded row">
          <Section />
          <Aside />
          <OtherArticles />
        </main>
        <Footer />
      </div>
    );
  }
  }

export default App;
