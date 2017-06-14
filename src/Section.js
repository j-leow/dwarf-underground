import React, { Component } from 'react'
import './css/Section.css'
import ArticleByline from './ArticleByline'
import ArticleBody from './ArticleBody'
import ArticleLinks from './ArticleLinks'

class Section extends Component {

  render() {
    return (
      <div className="large-8 medium-12 columns article">
        <ArticleByline />
        <ArticleBody />
        <ArticleLinks />
      </div>      
    )
  }
}

export default Section