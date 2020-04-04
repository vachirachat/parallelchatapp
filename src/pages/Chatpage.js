import React from 'react';
import InputBox from '../components/Chatpage/InputBox';
import NameDisplay from '../components/Chatpage/NameDisplay';
import DisplayChat from '../components/Chatpage/DisplayChat';
import {Row,Col} from 'reactstrap';
const Chatpage = () => {
    return (
        <div>
            <Row>
            <Col sm={2} xs={12}><NameDisplay/></Col>
            <Col style={{marginRight:'20px'}}>
            <DisplayChat/>
            <InputBox/>
            
            
            </Col>
            </Row>
        </div>
    );
};

export default Chatpage;