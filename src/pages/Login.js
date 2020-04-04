import React, { useState } from 'react';

import { Button, Form, FormGroup, Label, Input, FormText, Card, Col } from 'reactstrap';


const Login = () => {
    const [data, setData] = useState({
        'username':'',
        'password':''
    })
    const handleOnChange = e =>{
        const {name,value} = e.target;
        setData({...data,[name]:value})
    }
    return (
        <Col sm={7} xs={12} style={{margin:"0 auto",paddingTop:'50px',paddingBottom:'50px'}}>
            <Card class style={{borderRadius:'20px'}}>
                <Col sm={11} style={{margin:"0 auto",paddingTop:'50px',paddingBottom:'50px'}}>
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Username</Label>
                            <Input name="username" id="exampleEmail" placeholder="Please enter username" onChange={handleOnChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="Please enter password" onChange={handleOnChange}/>
                        </FormGroup>
                        <Button>Submit</Button>
                        <h1>{data.username}</h1>
                        <h1>{data.password}</h1>
                        </Form>
    </Col>
    </Card>

    </Col>
    );
};

export default Login;