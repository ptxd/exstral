import React from 'react';
import MarketDom from '../pie_chart/marketdom_pie';


export const WhiteDivGeneral = () => {
    return (
        <div className="wd-wrapper">
            <div className="wd-cont-gen">
                <p><h4>CRYPTOCURRENCY <br/>TOTAL MARKET CAP</h4></p>
                <p><h1><strong>$95,541,943,200</strong></h1></p>
                <p><h4>BITCOIN MARKET CAP</h4></p>
                <p><h1><strong>$45,350,753,005</strong></h1></p>
                <p><h4>ETHER MARKET CAP</h4></p>
                <p><h1><strong>$21,215,208,280</strong></h1></p>
            </div>
        </div>
    );
};

export const WhiteDivPie = () => {
    return (
        <div className="wd-wrapper">
            <MarketDom/>
        </div>
    );
};

export const WhiteDivChart = () => {
    return (
        <div className="wd-wrapper">
        </div>
    );
};