import React, { Component } from 'react';
import AOS from 'aos';
import '../../../node_modules/aos/dist/aos.css';

class AOSImage extends Component {
    
    constructor(props, context) { 
        super(props, context); 
        AOS.init(); 
    } 
    
    componentWillReceiveProps (){ 
        AOS.refresh(); 
    } 

    render() {
        return (
                <div className={this.props.class}>
                    <img src={this.props.imageSource} alt="cool" className={this.props.class2}   
                            data-aos={this.props.data_aos}
                            data-aos-offset={this.props.data_aos_offset}
                            data-aos-easing={this.props.data_aos_easing}
                            data-aos-duration={this.props.data_aos_duration}
                            />   
                </div>    
        );
    }
}

export default AOSImage;