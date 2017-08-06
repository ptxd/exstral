import React, { Component } from 'react';
import ImageText from '../components/aos/image_text';

var imt=[
    {
        imageSource:'http://www.wattagnet.com/ext/resources/Images-by-month-year/16_09/16_09-poultry/regulations-compliance-wordcloud.jpg?1497375072',
        title:'Regulation has been left in the dust and ambiguity is stifling innovation.',
        text1:'In the US, the IRS classifies cryptocurrencies as property and taxes it as such. IRS Notice 2014-21 states that US federal tax laws do not recognize virtual currencies as currency but rather as capital asset where gains and losses are taxable.',
        text2:'The SEC release 2017-131 states that an investment transaction involves the offer or sale of a security  - regardless of terminology or technology used  - will depend on the facts and circumstances, including the economic realities of the transaction. '
    },
    {
        imageSource:'https://cdn3.computerworlduk.com/cmsdata/features/3640764/blockchain_thumb800.jpg',
        title:'As cryptocurrencies gain market acceptance, the scalability of these currencies are brought into question.',
        text1:'The split of bitcoin was caused due to the pressing issue of scalability of the network to support greater number or transactions, faster. ',
        text2:'As the number of transactions increase, so does it associated fees while the speed at which the transaction is processed decreases.'
    },
    {
        imageSource:'https://i.cbc.ca/1.3839793.1478533393!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/safe-zones.jpg',
        title:'In order for a currency or a new tech to effectively work in a market, it needs ease of access and an ecosystem to support it.',
        text1:'A developing ecosystem is now making it easier for people to gain access and use cryptocurrencies as a medium to perform transactions. The need for hubspots to support this development and help push cryptocurrencies into mainstream acceptance will greatly help cryptocurrencies be more business friendly.',
        text2:'In addition, hubspots helps drive collaboration which will potential benefit the community surrounding the hubspots and will generate more economic activities.'
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
                        data_aos="fade-right"
                        data_aos_offset="300"
                        data_aos_easing="linear"
                        data_aos_duration="1250"
                        data_aos2="fade-left"
                        data_aos_offset2="300"
                        data_aos_easing2="linear"
                        data_aos_duration2="1250" 
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
                <div className="hts-wrapperdiv3">
                    <div className="hts-div3">
                    <ImageText
                        data_aos="fade-down"
                        data_aos_offset="300"
                        data_aos_easing="linear"
                        data_aos_duration="1250"
                        data_aos2="fade-down"
                        data_aos_offset2="300"
                        data_aos_easing2="linear"
                        data_aos_duration2="1250" 
                        imageSource={imt[1].imageSource}
                        title={imt[1].title}
                        text1={imt[1].text1}
                        text2={imt[1].text2}
                    />
                    </div>
                </div>
                <div className="hts-div4">
                    <h1>The total market value of the top 10 cryptocurrencies is $ 98,596,341,527</h1>
                </div>
                <div className="hts-wrapperdiv5">
                    <div className="hts-div5">
                    <ImageText
                        data_aos="zoom-out-up"
                        data_aos_offset="300"
                        data_aos_easing="linear"
                        data_aos_duration="1250"
                        data_aos2="zoom-out-up"
                        data_aos_offset2="300"
                        data_aos_easing2="linear"
                        data_aos_duration2="1250" 
                        imageSource={imt[2].imageSource}
                        title={imt[2].title}
                        text1={imt[2].text1}
                        text2={imt[2].text2}
                    />
                    </div>
                </div>
            </div>
        );
    }
}

export default Hts;