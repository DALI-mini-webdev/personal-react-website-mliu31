import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css'
import { Button } from '../Button'

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => { 
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav className="NavbarItems">
                <h1 className='navbar=logo'>megan liu </h1>
                {/* <i className="fab fa-react"></i> supposed to be inside h1 */}
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {
                        MenuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a className={item.cname} href={item.url}>
                                        {item.title}
                                    </a>
                                </li>
                            )
                        })
                    }

                </ul>
                <Button>Sign up</Button>
            </nav>
        )
    }
}

export default Navbar 