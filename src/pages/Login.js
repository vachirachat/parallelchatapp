import React, { useState } from "react";

import { Button, Form, FormGroup, Label, Input, FormText, Card, Col } from "reactstrap";
import { useHistory } from "react-router-dom";

const Login = () => {
  let history = useHistory();
  const axios = require("axios");
  const submitUsername = () => {
    if (data.username == "") {
      return alert("Please enter username");
    } else {
      console.log(data);
      axios
        .post("http://127.0.0.1:5000/api/login/", data)
        .then((res) => {
          console.log(res);
          localStorage.setItem("username", res.data.user_name);
          localStorage.setItem("chatGroupId", 0);
          history.push("/chat");
        })
        .catch((err) => {
          alert("Please enter new username");
        });
    }
  };
  const [data, setData] = useState({
    user_name: "",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  return (
    <Col sm={7} xs={12} style={{ margin: "0 auto", paddingTop: "50px", paddingBottom: "50px" }}>
      <Card class style={{ borderRadius: "20px" }}>
        <Col sm={11} style={{ margin: "0 auto", paddingTop: "50px", paddingBottom: "50px" }}>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Username</Label>
              <Input
                name="user_name"
                id="exampleEmail"
                placeholder="Please enter username"
                onChange={handleOnChange}
              />
            </FormGroup>
            <Button onClick={submitUsername}>Submit</Button>
            <h1>{data.username}</h1>
            <h1>{data.password}</h1>
          </Form>
        </Col>
      </Card>
    </Col>
  );
};

export default Login;
