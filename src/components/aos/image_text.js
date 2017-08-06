import React, { Component } from 'react';
import AOS from 'aos';
import '../../../node_modules/aos/dist/aos.css';

class ImageText extends Component {
    
    constructor(props, context) { 
        super(props, context); 
        AOS.init(); 
    } 
    
    componentWillReceiveProps (){ 
        AOS.refresh(); 
    } 

    render() {
        return (
                <div className="aos-imgtxt-wrapper">
                    <img src={this.props.imageSource} alt="cool" className="aos-imgtxt-img"   
                            data-aos={this.props.data_aos}
                            data-aos-offset={this.props.data_aos_offset}
                            data-aos-easing={this.props.data_aos_easing}
                            data-aos-duration={this.props.data_aos_duration}
                            />
                    <div className="aos-imgtxt-txt" 
                                data-aos={this.props.data_aos2}
                                data-aos-offset={this.props.data_aos_offset2}
                                data-aos-easing={this.props.data_aos_easing2}
                                data-aos-duration={this.props.data_aos_duration2}
                    >
                        <p className="aos-imgtxt-title">
                            <strong>  
                                {this.props.title}
                            </strong>
                        </p>
                        <p className="aos-imgtxt-p1">
                                {this.props.text1}
                        <br/>
                        <br/>

                               {this.props.text2}

                        </p>
                    </div>    
                </div>    
        );
    }
}

export default ImageText;