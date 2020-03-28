import React, { Component } from 'react';
import './Home.css'
import logo from '../logo.svg';

class Home extends Component {
    render() {
        return <div>
            <header className="Home-header">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <p>
                    Hi there!
                </p>
                
            </header>
            <div style={{minHeight: "50vh"}}></div>
        </div>
    }
}

export default Home;