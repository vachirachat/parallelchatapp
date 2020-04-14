import React from 'react';
import InputBox from '../components/Chatpage/InputBox';
import NameDisplay from '../components/Chatpage/NameDisplay';
import DisplayChat from '../components/Chatpage/DisplayChat';
import {Row,Col} from 'reactstrap';
import '../App.css';
const Chatpage = () => {
    return (
        <div id="body" style={{overflow:'hidden'}}>
            <Row>
            <Col sm={2} xs={12} ><NameDisplay/></Col>
            <Col style={{marginRight:'20px',height:'100vh'}}>
                <DisplayChat/>
                <InputBox/>
            
            
            </Col>
            </Row>
        </div>
    );
};

export default Chatpage;