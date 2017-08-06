import React, { Component } from 'react';
import ImageText from '../components/aos/image_text';

var imt=[
    {
        imageSource:'http://www.wattagnet.com/ext/resources/Images-by-month-year/16_09/16_09-poultry/regulations-compliance-wordcloud.jpg?1497375072',
        title:'Regulation has been left in the dust and ambiguity is stifling innovation.',
        text1:'In the US, the IRS classifies cryptocurrencies as property and taxes it as such. IRS Notice 2014-21 states that US federal tax laws do not recognize virtual currencies as currency but rather as capital asset where gains and losses are taxable.',
        text2:'The SEC release 2017-131 states that an investment transaction involves the offer or sale of a security  - regardless of terminology or technology used  - will depend on the facts and circumstances, including the economic realities of the transaction. '
    }
]


class Hts extends Component {
    render() {
        return (
            <div className="hts-body">
                <p className="hts-p1">HERE'S THE SITUATION</p>
                <p className="hts-p2">Although cryptocurrencies are gaining more acceptance , the volatility of the currencies are limiting its potential to be just a tool for speculation. </p>
                <p className="hts-p3">Even if some of the more popular crytocurrencies are gaining traction in terms of merchant acceptance, the fluctuations in prices can be potentially devastating to their balance sheets. Risks related to forex fluctuations are often more manageable hence mainstream currencies (eg. US Dollar) are often the prefered medium of exchange.</p>
                <div className="hts-div1">
                    <ImageText 
                        imageSource={imt[0].imageSource}
                        title={imt[0].title}
                        text1={imt[0].text1}
                        text2={imt[0].text2}
                    />
                </div>
                    <br/>
                    <div className="hts-div2">
                        <h1>The blockhain technology is the gateway to the future of finance</h1>
                    </div>
                    <br/>
                    <div className="hts-div3"></div>
                    <div className="hts-div4">
                        <ImageText/>
                    </div>
            </div>
        );
    }
}

export default Hts;