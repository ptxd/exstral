import React, { Component } from 'react';




class CountdownTimer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days:0,
            hours:0,
            minutes:0,
            seconds:0
        };
    }
    
    componentWillMount() {
        this.getTimeUntil(this.props.deadline);
    }

    componentDidMount() {
        setInterval(()=>this.getTimeUntil(this.props.deadline),1000);
    }
    
    
    getTimeUntil(deadline){
        const time = Date.parse(deadline) - Date.parse(new Date());
        const seconds = Math.floor((time/1000)%60);
        const minutes = Math.floor((time/1000/60)%60);
        const hours = Math.floor((time/(1000*60*60))%24);
        const days = Math.floor((time/(1000*60*60*24)));
        
        console.log(days,',',hours,',',minutes,',',seconds);
        this.setState({days,hours,minutes,seconds});
    }
    render() {
        return (
            <div className="countdown-timer">
                <div id="clockdiv">
                    <h1>Countdown To Guild Token Sale</h1>
                    <div>
                    <span className="days">{this.state.days}</span>
                    <div className="smalltext">Days</div>
                    </div>
                    <div>
                    <span className="hours">{this.state.hours}</span>
                    <div className="smalltext">Hours</div>
                    </div>
                    <div>
                    <span className="minutes">{this.state.minutes}</span>
                    <div className="smalltext">Minutes</div>
                    </div>
                    <div>
                    <span className="seconds">{this.state.seconds}</span>
                    <div className="smalltext">Seconds</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CountdownTimer;