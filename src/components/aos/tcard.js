import React, { Component } from 'react';
import AOS from 'aos';
import '../../../node_modules/aos/dist/aos.css';

class AOSTCard extends Component {
    
    constructor(props, context) { 
        super(props, context); 
        AOS.init(); 
    } 
    
    componentWillReceiveProps (){ 
        AOS.refresh(); 
    } 

    render() {
        return (
                <div className="tcard-wrapper" 
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration={this.props.duration}
                >
                     <div className="classrect">
                        <div className="tcard-header" style={this.props.style}>
                            <p className="tcard-title">{this.props.title}</p>
                        </div>
                        <p className="tcard-text">{this.props.text}</p>
                     </div>
                     <div className="classtri"></div>
                </div>    
        );
    }
}

export default AOSTCard;