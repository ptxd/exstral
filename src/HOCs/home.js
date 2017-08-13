import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import HomeButton from '../components/button/home_button';
import HamburgerMenu from '../components/menubar/hamburger_menu';
import HowItWorks from './hiw';
import Hts from './hts';
import Guild from './guild';
import Kmile from './kmile';
import Footer from './footer';
import Hub from './hub';
import ScrollDown from '../components/button/scroll_button';

class Home extends Component {
    render() {
        return (
            <div>
                <header >
                    <HamburgerMenu/>
                </header>
                <div className="hbg-img">
                    <div className="exstral">
                        <p className=" tracking-in-expand">
                            EXSTRAL
                        </p>
                    </div>
                    <div className="hbtn">
                        <Link to="/whitepaper"><HomeButton hbutton="WhitePaper"/></Link>
                    </div>
                    <ScrollDown/>
                </div>
                <div className="body-img">
                    <div className="body-wrapper">
                        <HowItWorks/>
                        <Hub/>
                        <Guild/>
                        <Hts/>
                        <Kmile/>
                    </div>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default Home;


