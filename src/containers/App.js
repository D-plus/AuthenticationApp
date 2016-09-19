import React, { Component } from 'react'
import Header from '../components/Header'

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    )
  }
}
