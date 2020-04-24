import React from "react";
import InputBox from "../components/Chatpage/InputBox";
import NameDisplay from "../components/Chatpage/NameDisplay";
import DisplayChat from "../components/Chatpage/DisplayChat";
import { Row, Col } from "reactstrap";
import "../App.css";

const Chatpage = () => {
  const group_id = "1";
  const user_name = "user1";
  const chatSocket = new WebSocket(
    "ws://127.0.0.1:8000/ws/chat/user_name=" + user_name + "&group_id=" + group_id + "/"
  );
  return (
    <div id="body" style={{ overflow: "hidden" }}>
      <Row>
        <Col sm={2} xs={12}>
          <NameDisplay />
        </Col>
        <Col style={{ marginRight: "20px", height: "100vh" }}>
          <DisplayChat chatSocket={chatSocket} />
          <InputBox />
        </Col>
      </Row>
    </div>
  );
};

export default Chatpage;
