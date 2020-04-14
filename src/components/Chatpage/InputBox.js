import React from 'react';
import {Col,Row,Input,Button, InputGroup} from 'reactstrap';
const InputBox = () => {
    return (
        <div sm={12} style={{width:'100%'}}>
            
            <Row>
            <Col style={{width:'70%'}}><Input type="textarea" style={{height:'70px',overflowY:'auto'}}/></Col>
            <Button color="success" size='sm'>Send</Button>
            </Row>
            
        </div>
    );
};

export default InputBox;