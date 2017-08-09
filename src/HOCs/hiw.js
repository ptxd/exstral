import React, { Component } from 'react';
import HiwCard from '../components/cards/hiw_card';
import imageEth from '../images/icons8-Ethereum.svg';
import imageCollab from '../images/networking.svg';
import imageStore from '../images/store.svg';


        
class HowItWorks extends Component {
    render() {
    var hiw = [  
        {title:'Technology',subtitle:'Cryptocurrencies & Blockchain',text:'Using the latest in financial technology including the blockchain and ethereum\'s smart contract to create a high-tech ecosystem.'},
        {title:'Collaboration',subtitle:'Community Engagement',text:'Support, understanding and acceptance of new financial technologies will drive further collaboration within the community.'},
        {title:'Hubs',subtitle:'Physical & Digital Access',text:'Allowing transactions to happen physically & digitally will increase utilization and generate mainstream acceptance.'}
    ]
        return (
                <div className="hiwbody">
                    <p>WHAT WE SET OUT TO ACHIEVE</p>
                    <div className="hiw-item">
                        <HiwCard 
                            image={imageEth} 
                            title={hiw[0].title} 
                            subtitle={hiw[0].subtitle} 
                            text={hiw[0].text}
                        />
                        <HiwCard 
                            image={imageCollab} 
                            title={hiw[1].title} 
                            subtitle={hiw[1].subtitle} 
                            text={hiw[1].text}
                        />
                        <HiwCard 
                            image={imageStore} 
                            title={hiw[2].title} 
                            subtitle={hiw[2].subtitle} 
                            text={hiw[2].text}
                        />
                    </div>
                </div>
        );
    }
}

export default HowItWorks;
