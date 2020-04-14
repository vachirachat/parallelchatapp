import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,Col,Row
  } from 'reactstrap';
const BubbleChat = (props) => {
    if (props.float == 'left'){
        return (
            <div style={{display:'inline-block',maxWidth:'60%'}}>
                <Card>
                    <h6>chat Message</h6>
                </Card>
                <p >name time read</p>
            </div>
        );    
    }
    return (
        <div style={{display:'inline-block',maxWidth:'60%',float:'right'}}>
            <Card >
                <h6>chat Message</h6>
            </Card>
            
            <p style={{float:'right'}}>time read</p>
            
        </div>
    );
};

export default BubbleChat;