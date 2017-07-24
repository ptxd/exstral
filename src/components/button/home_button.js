import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class HomeButton extends Component {
    render() {
        return (
            <div>
                <button className="banner-btn">
                    <Link to='/start'>
                        <span>GET STARTED</span>
                    </Link>
                </button>
            </div>
        );
    }
}

export default HomeButton;