import React from 'react';

function HomeButton(props) {
        return (
            <div>
                <button className="banner-btn">
                        <span>{props.hbutton}</span>
                </button>
            </div>
        );
    }

export default HomeButton;