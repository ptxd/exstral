import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBlock,CardTitle, CardSubtitle} from 'reactstrap';

class HiwCard extends Component {
    render() {
        return (
            <Card>
                <CardImg top width="100%" src={this.props.image} alt="Card image cap" />
                <CardBlock>
                    <CardTitle>{this.props.title}</CardTitle>
                    <CardSubtitle>{this.props.subtitle}</CardSubtitle>
                    <CardText>{this.props.text}</CardText>
                </CardBlock>
            </Card>
        );
    }
}

export default HiwCard;