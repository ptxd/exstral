import React, { Component } from 'react';
import HamburgerMenu from '../components/menubar/hamburger_menu';
import ScrollDown from '../components/button/scroll_button';
import ImageText from '../components/aos/image_text';
import {WhiteDivGeneral,WhiteDivChart,WhiteDivPie} from '../components/opaque_divs/white_div';


var title = {
            title1:'Providing unparallel oversight of the ICO industry and its technologies',
            title2:'Insights into financial and commercial feasibility',
            title3:'Futuristic digital dashboard for keeping tabs on all of your investments',
            title4:'Keep up to date with the latest happenings in the ICO industry'
};
var textp1 = {
            text1:'Cryptocurrencies allowed for the creation of a new method for startups to raise capital without going through conventional routes of raising capital in multiple stages.',
            text2:'Financing done through cryptocurrencies are not legally binding hence the nature of the investment is inherently risky.',
            text3:'The ability to keep track on multiple products and investment can be challenging without easy to use interfaces.',
            text4:'Everyday new startup companies spring up and it is the same in the ICO industry. Find out the latest technological advancements in the crypto world and search out for that new and exciting oppurtunity.'
};
var textp2 = {
             text1: 'Understand the nature of your investment in an unknown entity including various factors which can help you make a better informed decision.',
             text2:'Tracking the milestones and progress of the companies which raised funds through ICO\'s is crucial in determining if investment goals and objectives are met.',
             text3:'Get access to a personalized dashboard to find and keep track of your investments or find out whats new in the industry and market.',
             text4:'Find out about new, current and upcoming ICO\'s and the problems they are out to solve and how they plan to do it.'   
};

var aos = {
    data_aos:['zoom-out-right','zoom-out-left','fade-down','fade-up','zoom-in'],
    data_aos_easing:'linear',
    data_aos_duration:[1000,1500,2000,2500],
    data_aos_offset:300
}

class Start extends Component {
    render() {
        return (
            <div className="sbg-div">
                <header>
                    <HamburgerMenu/>
                </header>
                <div className="simg">
                    <ScrollDown/>
                </div>
                <div className="sbody-1">
                    <p>FEATURES</p>
                    <ImageText 
                        imageSource={'http://cdn.wallpapersafari.com/84/21/CFyc4K.jpg'} 
                        title={title.title1}
                        text1={textp1.text1}
                        text2={textp2.text1}
                        data_aos={aos.data_aos[0]}
                        data_aos_easing={aos.data_aos_easing}
                        data_aos_duration={aos.data_aos_duration[0]}
                        data_aos_offset={aos.data_aos_offset}
                        data_aos2={aos.data_aos[1]}
                        data_aos_easing2={aos.data_aos_easing}
                        data_aos_duration2={aos.data_aos_duration[0]}
                        data_aos_offset2={aos.data_aos_offset}
                    />
                    <ImageText 
                        imageSource={'http://cdn.wallpapersafari.com/74/65/86wOua.jpg'} 
                        title={title.title2}
                        text1={textp1.text2}
                        text2={textp2.text2}
                        data_aos={aos.data_aos[2]}
                        data_aos_easing={aos.data_aos_easing}
                        data_aos_duration={aos.data_aos_duration[1]}
                        data_aos2={aos.data_aos[2]}
                        data_aos_easing2={aos.data_aos_easing}
                        data_aos_duration2={aos.data_aos_duration[1]}
                    />
                    <ImageText 
                        imageSource={'http://cdn.wallpapersafari.com/93/73/TRD5mx.jpg'} 
                        title={title.title3}
                        text1={textp1.text3}
                        text2={textp2.text3}
                        data_aos={aos.data_aos[3]}
                        data_aos_duration={aos.data_aos_duration[2]}
                        data_aos2={aos.data_aos[3]}
                        data_aos_duration2={aos.data_aos_duration[2]}
                    />
                    <ImageText 
                        imageSource={'http://cdn.wallpapersafari.com/78/65/B7YruM.jpg'} 
                        title={title.title4}
                        text1={textp1.text4}
                        text2={textp2.text4}
                        data_aos={aos.data_aos[4]}
                        data_aos_duration={aos.data_aos_duration[3]}
                        data_aos2={aos.data_aos[4]}
                        data_aos_duration2={aos.data_aos_duration[3]}
                    />
                </div>
                <div className="sbody-2">
                    <WhiteDivGeneral/>
                    <WhiteDivPie/>
                    <WhiteDivChart/>
                </div>
                
            </div>
        );
    }
}

export default Start;