import React from 'react';

const HamburgerMenu = () => {
    return (
        <div className="hmbg-menu">
            <button className="hamburger1" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </button>
        </div>
    );
};

export default HamburgerMenu;