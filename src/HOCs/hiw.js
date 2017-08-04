import React, { Component } from 'react';
import HiwCard from '../components/cards/hiw_card';
import imageEth from '../images/icons8-Ethereum.svg';
import imageCollab from '../images/beer-jars-making-a-toast.svg';
import imageStore from '../images/store.svg';


        
class HowItWorks extends Component {
    render() {
    var hiw = [  
        {title:'Technology',subtitle:'Crytocurrencies & Blockchain',text:'Using the latest in financial technology including the blockchain and ethereum\'s smart contract to create a high-tech ecosystem.'},
        {title:'Collaboration',subtitle:'Community Engagement',text:'Support, understanding and acceptance of new financial technologies will drive further collaboration within the community.'},
        {title:'Access',subtitle:'Physical & Digital Access',text:'By allowing people to transact both physically & digitally, there will be an increase in utilization and more acceptance of cryptocurrency as a mainstream medium for performing transactions.'}
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
