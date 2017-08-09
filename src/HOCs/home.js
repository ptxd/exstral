import React, { Component } from 'react';
import HomeButton from '../components/button/home_button';
import HamburgerMenu from '../components/menubar/hamburger_menu';
import HowItWorks from './hiw';
import Hts from './hts';
import Htp from './htp';
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
                    <div className="hbtn">
                        <HomeButton hbutton="Learn More"/>
                    </div>
                    <ScrollDown/>
                </div>
                <div className="body-img">
                    <Hts/>
                    <HowItWorks/>
                    <Htp/>
                </div>
            </div>
        );
    }
}

export default Home;


