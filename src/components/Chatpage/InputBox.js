import React from 'react';
import {Col,Row,Input,Button, InputGroup} from 'reactstrap';
const InputBox = () => {
    return (
        <div sm={12} style={{width:'100%'}}>
            
            <Row>
            <Col style={{width:'70%'}}><Input style={{height:'100px'}}/></Col>
            <Button color="success" size='lg'>Send</Button>
            </Row>
            
        </div>
    );
};

export default InputBox;