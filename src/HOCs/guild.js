import React, { Component } from 'react';
import HiwCard from '../components/cards/hiw_card';
import laurel from '../images/laurel-48095_640.png';
import CountdownTimer from '../components/timer/countdowntimer';

var htp = [  
        {title:'',subtitle:'',text:'Be part of a community leading the development of cryptocurrencies into mainstream commerce.'},
        {title:'',subtitle:'',text:'Gain early access to guild benefits including premium access to exciting guild benefits.'},
        {title:'',subtitle:'',text:'Prefered voting rights and determine the direction of the group\'s lobbying efforts.'}
    ]

class Guild extends Component {
    constructor(props){
        super(props);
        this.state={
            deadline:'August 25, 2017'
        }
    }
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
                <CountdownTimer deadline={this.state.deadline}/>
            </div>
        );
    }
}

export default Guild;
