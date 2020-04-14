import React from 'react';
import {Card} from 'reactstrap';
import ChatArea from './chatComponent/ChatArea';
import './DisplayChat.css';
const DisplayChat = () => {
    return (
        <div id='divOut'>
            <Card  id='card'>
                <div style={{width:'80wh'}}>
                {/*fetch Data with user */}
                
                <ChatArea ownerChat={true} />
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