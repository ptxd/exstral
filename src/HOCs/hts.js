import React, { Component } from 'react';
import AOSTCard from '../components/aos/tcard';

var z = [                   
    {
    title:'REGULATORY',
    text:'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    style:'border-bottom:1px solid #ff9523;'
    },
    {
    title:'VOLATILITY',
    text:'',
    style:'border-bottom:1px solid #ff9523;'
    },
    {
    title:'ACCESS',
    text:'',
    style:'border-bottom:1px solid #ff9523;'
    }
]

class Hts extends Component {
    render() {
        return (
            <div className="hts-body">
                    <p className="hts-p1">HERE'S THE SITUATION</p>
                    <div className="hts-div1">
                        <AOSTCard
                            title={z[0].title}
                            style={{borderBottom:'1px solid #ff9523'}}
                            text={z[0].text}
                            duration="1000"
                        />
                        <AOSTCard
                            title={z[1].title}
                            style={{borderBottom:'1px solid #20c05c'}}
                            text={z[0].text}
                            duration="1500"
                        />
                        <AOSTCard
                            title={z[2].title}
                            style={{borderBottom:'1px solid #6e49ff'}}
                            text={z[0].text}
                            duration="2000"
                        />
                    </div>
                    <div className="hts-qt1">
                        <p><i>"Investment transaction involving the offer or sale of a security  (Initial Coin Offerings/Token Sales) - regardless of terminology or technology used  - will depend on the facts and circumstances, including the economic realities of the transaction." </i> - SEC 2017-131</p>
                    </div>
            </div>
        );
    }
}

export default Hts;