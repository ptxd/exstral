import React, { Component } from 'react';
import HiwCard from '../components/cards/hiw_card';
import laurel from '../images/laurel-48095_640.png';

var htp = [  
        {title:'',subtitle:'',text:'Be part of a community leading the development of cryptocurrencies into mainstream commerce.'},
        {title:'',subtitle:'',text:'Gain early access to guild benefits including no fee transfers and exciting guild benefits.'},
        {title:'',subtitle:'',text:'Prefered voting rights and premium access to provide services to the development of the hub.'}
    ]

class Guild extends Component {
    render() {
        return (
            <div className="htpbody">
                <p>The Guild</p>
                <div>
                    <p className="htp-p1">BE PART OF A DECENTRALIZED GUILD WHICH WILL DETERMINE THE FUTURE OF CRYPTOCURRENCIES</p>
                </div>
                <div className="htp-wrapper">
                    <HiwCard 
                            image="http://www.gaiscioch.com/images/saighdear/ucc.png"
                            text={htp[0].text}
                        />
                    <HiwCard 
                        image={laurel}
                        text={htp[1].text}
                    />
                    <HiwCard 
                        image="https://upload.wikimedia.org/wikipedia/en/thumb/0/01/A_coloured_voting_box.svg/1024px-A_coloured_voting_box.svg.png"
                        text={htp[2].text}
                    />
                </div>
            </div>
        );
    }
}

export default Guild;
