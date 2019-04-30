import React from 'react'
import { connect } from 'react-redux'
import '../style/header.css'
import avatar from '../res/avatar.png'

const Header = ({ locationUrl }) => (
    <nav className="header navbar navbar-expand-lg">
        <a className="navbar-brand" href="#/"><img className="avatar-icon" src={avatar} alt="|" /> cassiius</a>

        <div id="navbarSupportedContent" className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
                {locationUrl === '/'
                    ? (<li className="nav-item active">
                        <span className="nav-link">Home <span className="sr-only">(current)</span></span>
                    </li>)
                    : (<li className="nav-item">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>)}
                {locationUrl === '/between-worlds'
                    ? (<li className="nav-item active">
                        <span className="nav-link">StoneQuest</span>
                    </li>)
                    : (<li className="nav-item">
                        <a className="nav-link" href="/between-worlds">StoneQuest</a>
                    </li>)}
            </ul>
        </div>
    </nav>
)

export default connect(
    state => ({
        locationUrl: state.router.location.pathname
    })
)(Header)
