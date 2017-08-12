import React, { Component } from 'react';

class Hub extends Component {
    render() {
        return (
            <div className="mbody">
                <p>Decentralized Hubs</p>
                <div>
                    <div className="mbody-img">
                        <div>
                            <img src="https://peiwc-test1445460803.netdna-ssl.com/wp-content/uploads/2016/02/san-francisco-is-americas-snobbiest-city-according-to-the-rest-of-the-country.jpg" alt="san-francisco"/>
                            <p>San Francisco</p>
                        </div>
                        <div>
                            <img src="http://www.wildnatureimages.com/images%205/110328-070a..jpg" alt="las-vegas"/>
                            <p>Las Vegas</p>
                        </div>
                    </div>
                    <p className="mbody-img-title">Two Cities - Two Decentralized Economic Hub</p>
                    <p className="mbody-p1">Blockchain powered decentralized hub for facilitating trade and exchange between cyptocurrencies and fiat currencies. Physical location to support the buying and selling of cryptocurrencies without the need for going through exchanges or waiting days before receiving your currencies.</p>
                </div>
            </div>
        );
    }
}

export default Hub;