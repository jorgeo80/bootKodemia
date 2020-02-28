import React, { Component } from 'react'

import Navbar from './components/Navbar'

import Home from './views/Home'
import Post from './views/Post'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  onNewPost (post) {
    this.setState({
      posts: [
        ...this.state.posts,
        post]
    })
  }

  redender () {
    return (
      <div className='app'>
        <Navbar />

        <div className='container'>
          <Post />
          <Home />
        </div>
      </div>
    )
  }
}

export default App
