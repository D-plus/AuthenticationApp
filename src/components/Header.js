import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { authenticate } from '../actions/auth'

export class Header extends Component {
  render() {
    const { authenticated, authenticate: onAuth } = this.props
    console.log(this.props);
    return (
      <nav className='navbar navbar-light'>
        <ul className='nav navbar-nav'>
          <li><Link to='/' className='nav-item' >Home</Link></li>
          <li><Link to='/resources' className='nav-item' >Resources</Link></li>
          <li>
            {
              authenticated ? <button onClick={ () => onAuth(false) }>Sign Out</button> : <button onClick={ () => onAuth(true) }>Sign In</button>
            }
          </li>
        </ul>
      </nav>
    )
  }
}

const mapStateToProps = ({ auth }) => ({
  authenticated: auth
})

export default connect(mapStateToProps, { authenticate })(Header)
