import React, { Component } from 'react'
import './css/Article-Links.css'

class Article-Links extends Component {
  
  render() {
    return (
      <div className="article-links">
        <a className="article-link" href="#">
          <i className="fa fa-comments-o"></i>
          <span className="article-link-text">Comments</span>
        </a>
        <a className="article-link" href="#">
          <i className="fa fa-share"></i>
          <span className="article-link-text">Share Post</span>
        </a>
      </div>
    )
  }
}

export default Article-Links