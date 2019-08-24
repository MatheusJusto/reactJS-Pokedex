import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar nabar-expand-md fixed-top">
                    <div className="container">
                        <a className="navbar-brand col-sm-3 col-md-2 align-items-center" href >Pokedex</a>
                    </div>
                </nav>
            </div>
        )
    }
}
