import React, { Component } from "react";

import "./Header.css";

class Header extends Component {

    render() {

        return (

            <nav className="i-Nav">

                <div className="navbar-nav mr-auto">

                    <div className="nav-link " href="#"> <img src="https://img.icons8.com/color/70/null/totoro.png" />
                        | Good Books
                    </div>

                </div>

            </nav>

        );

    }

}

export default Header;
