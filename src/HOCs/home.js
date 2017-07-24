import React, { Component } from 'react';
import HomeButton from '../components/button/home_button';
import HamburgerMenu from '../components/menubar/hamburger_menu';

class Home extends Component {
    render() {
        return (
            <div className="hbg-img">
                <div >
                    <HamburgerMenu/>
                </div>
                <div className="exstral">
                    <p className=" tracking-in-expand">EXSTRAL</p> 
                </div> 
                <div>
                    <HomeButton/>
                </div>    
            </div>
        );
    }
}

export default Home;