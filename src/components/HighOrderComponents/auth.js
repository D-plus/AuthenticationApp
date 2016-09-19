import React, { Component } from 'react'
import { connect } from 'react-redux'

export default function(ComposedComponent) {
  class Authentication extends Component {

    static contextTypes = {
      router: React.PropTypes.object
    }

    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.push('/')
      }
    }

    componentWillUpdate(newState) {
      if (!newState.authenticated) {
        this.context.router.push('/')
      }
    }

    render() {
      console.log(this.context);
      return (
        <ComposedComponent {...this.props} />
      )
    }
  }

  const mapStateToProps = ({ auth }) => ({
    authenticated: auth
  })

  return connect(mapStateToProps)(Authentication)
}
