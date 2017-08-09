import React, { Component } from 'react';
import university from '../images/central-bank-building-frontal-view.svg';
import city from '../images/city.svg';
import store from '../images/store2.svg';
import central from '../images/university.svg';
import factory from '../images/factory (1).svg';
import phone from '../images/smartphone.svg';
import crypto from '../images/bitcoin-with-olive-leaves-at-both-sides (1).svg';


class Htp extends Component {
    render() {
        return (
            <div className="htpbody">
                <p>THE PROPOSITION</p>
                <div>
                    <img src={central} alt="central" className="htp-special-img"/>
                </div>  
                <div className="htp-wrapper">
                    <img src={city} alt="city"/>
                    <img src={store} alt="store"/>
                    <img src={university} alt="university"/>
                    <img src={factory} alt="factory"/>
                    <img src={phone} alt="phone"/>
                    <img src={crypto} alt="cryptocurrency"/>
                </div>
            </div>
        );
    }
}

export default Htp;