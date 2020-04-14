import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,Row,Col
  } from 'reactstrap';
import BubbleChat from './BubbleChat';
const ChatArea = (props) => {
    if (props.ownerChat == true){
        return (
           
        <div style={{marginRight:'25px'}}>
            <Row>
            
                <Col>
                    <BubbleChat float="right"/>
                    
                </Col>
            <h1>Pic</h1>
            </Row>
        </div>
        );
    }
    return (
        <div style={{marginLeft:'25px'}}>
        <Row>
        <h1>Pic</h1>
            <Col>
            <BubbleChat float="left"/>
            
            </Col>
        </Row>
    </div>
    );
    
};

export default ChatArea;