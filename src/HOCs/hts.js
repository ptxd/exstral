import React, { Component } from 'react';
import ImageText from '../components/aos/image_text';
import AOSImage from '../components/aos/image';
import AOSText from '../components/aos/text';
import Cryminchart from '../images/median-confirmation-time.svg';

var imt=[
    {
        imageSource:'http://www.wattagnet.com/ext/resources/Images-by-month-year/16_09/16_09-poultry/regulations-compliance-wordcloud.jpg?1497375072',
        title:'Regulation has been left in the dust and ambiguity is stifling innovation.',
        text1:'In the US, cryptocurrencies are classified as property by the IRS. US federal tax laws do not recognize virtual currencies as currency but rather as capital asset where gains and losses are taxable.',
        text2:''
    },
    {
        imageSource:Cryminchart,
        title:'Bitcoin is the dominant cryptocurrency but scalability is major impedence.',
        text1:'As transactions increase, the load on the network increases which has a propotional effect on the associated fees and transaction processing time. Trying to get all stakeholders to agree on improvements to the system has been met with resistance by certain quarters of the stakeholders.'
    },
    // {
    //     imageSource:'https://i.cbc.ca/1.3839793.1478533393!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/safe-zones.jpg',
    //     title:'In order for a currency or a new tech to effectively work in a market, it needs ease of access and an ecosystem to support it.',
    //     text1:'A developing ecosystem is now making it easier for people to gain access and use cryptocurrencies as a medium to perform transactions. The need for hubspots to support this development and help push cryptocurrencies into mainstream acceptance will greatly help cryptocurrencies be more business friendly.',
    //     text2:'In addition, hubspots helps drive collaboration which will potential benefit the community surrounding the hubspots and will generate more economic activities.'
    // }
]


class Hts extends Component {
    render() {
        return (
            <div className="hts-body">
                <p className="hts-p1">HERE'S THE SITUATION</p>
                <p className="hts-p2">Volatility of cryptocurrencies is limiting its potential</p>
                <p className="hts-p3"> As crytocurrencies gain traction in terms of merchant acceptance, price fluctuations can be potentially devastating to their balance sheets. Risks related to forex fluctuations are often more manageable.</p>
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
                    />
                </div>
                <div className="hts-qt1">
                    <p><i>"Investment transaction involving the offer or sale of a security  (Initial Coin Offerings/Token Sales) - regardless of terminology or technology used  - will depend on the facts and circumstances, including the economic realities of the transaction." </i> - SEC 2017-131</p>
                </div>
                <div className="hts-div2">
                    <h1>The blockhain technology is the gateway to the future of finance</h1>
                </div>
                <div className="hts-wrapperdiv3">
                    <div className="hts-div3">
                        <AOSImage 
                            imageSource={imt[1].imageSource} 
                            class="img"
                            data_aos="fade-down"
                            data_aos_easing="linear"
                            data_aos_duration="1500"
                        />
                        <br/>
                        <br/>
                        <AOSText 
                            title={imt[1].title}
                            text1={imt[1].text1}
                            data_aos="fade-down"
                            data_aos_easing="linear"
                            data_aos_duration="1500"
                        />
                    </div>
                </div>
                <div className="hts-div4">
                    <h1>The total market value of the top 10 cryptocurrencies is $ 98,596,341,527</h1>
                </div>
                <div className="hts-wrapperdiv5">

                </div>
            </div>
        );
    }
}

export default Hts;