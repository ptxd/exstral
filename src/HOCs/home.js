import React, { Component } from 'react';
import HomeButton from '../components/button/home_button';
import HamburgerMenu from '../components/menubar/hamburger_menu';
import Start from './start';
import ScrollDown from '../components/button/scroll_button';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="hbg-img">
                    <div >
                        <HamburgerMenu/>
                    </div>
                    <div className="exstral">
                        <p className=" tracking-in-expand">
                            EXSTRAL
                        </p>
                    </div>
                    <div className="htitle">  
                        <p className=" tracking-in-expand">
                            CRYPTOCURRENCY RESEARCH 
                        </p>
                    </div> 
                    <div className="hbtn">
                        <HomeButton/>
                    </div>
                    <ScrollDown/>
                </div>
                <Start/>
            </div>
        );
    }
}

export default Home;