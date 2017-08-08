import React, { Component } from 'react';
import AOS from 'aos';
import '../../../node_modules/aos/dist/aos.css';

class AOSText extends Component {
    
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
                    <div className={this.props.class2} 
                                data-aos={this.props.data_aos}
                                data-aos-offset={this.props.data_aos_offset}
                                data-aos-easing={this.props.data_aos_easing}
                                data-aos-duration={this.props.data_aos_duration}
                    >
                        <p>
                            <strong>  
                                {this.props.title}
                            </strong>
                        </p>
                        <p className="aostxt-p1">
                                {this.props.text1}
                        </p>
                    </div>    
                </div>    
        );
    }
}

export default AOSText;