import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,Col,Row
  } from 'reactstrap';
  import './BubbleChat.css';
const BubbleChat = (props) => {
    if (props.float == 'left'){
        return (
            <div id='displayBubble'>
                <Card className='bg-success' color='green'>
                    
                    <p id='ptext'>chat Message</p>
                    
                </Card>
                <p >name time read</p>
            </div>
        );    
    }
    return (
        <div id='displayBubbleRight'>
            <Card className="bg-secondary" id='cardRight'>
                <p id='ptext'>chat Message</p>
            </Card>
            
            <p id='pTimeread'>time read</p>
            
        </div>
    );
};

export default BubbleChat;