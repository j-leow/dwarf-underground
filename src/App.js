import React, { Component } from 'react';
import './css/App.css';
import Header from './Header.js'
import Footer from './Footer.js'
import Section from './Section.js'
import ArticleLinks from './ArticleLinks.js'
import Aside from './Aside.js'
import OtherArticles from './OtherArticles.js'

class App extends Component {
    render() {
    return (
      <div className="App">
        <Header />
        <Section />
        <Aside />
        <ArticleLinks />
        <OtherArticles />
        
        <Footer />

        <main className="expanded row">
          

                  <div className="App">
        <Header />
        <main className="expanded row">
          <Article />
          <Advertisement />
          <OtherArticles />
        </main>
        <Footer />
      </div>
            
            
          </div>

          
        </main>  
    );
  }
  }

export default App;
