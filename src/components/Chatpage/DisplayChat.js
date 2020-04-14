import React from 'react';
import {Card} from 'reactstrap';
import ChatArea from './chatComponent/ChatArea';
const DisplayChat = () => {
    return (
        <div style={{height:'90vh',display:'block',width:'100%'}}>
            <Card  style={{height:'90vh',display:'block',overflowY:'scroll',overflowX:'hidden'}}>
                <div style={{width:'80wh'}}>
                {/*fetch Data with user */}
                
                <ChatArea ownerChat={true} style={{backgroundColor:'#ff0000'}}/>
                <ChatArea/>
                <ChatArea ownerChat={true}/>
                <ChatArea/>
                <ChatArea ownerChat={true}/>
                <ChatArea/>
                <ChatArea ownerChat={true}/>
                <ChatArea/>
                <ChatArea ownerChat={true}/>
                <ChatArea/>
                <ChatArea ownerChat={true}/>
                <ChatArea/>
                <ChatArea ownerChat={true}/>
                <ChatArea/>
                <h1 style={{textAlign:'center'}}>----------------------unread message----------------------</h1>
                {/*fetch unread message */}
                <ChatArea ownerChat={true}/>
                <ChatArea/>
                </div>
            </Card>
        </div>
    );
};

export default DisplayChat;