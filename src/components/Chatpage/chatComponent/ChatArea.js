import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
} from "reactstrap";
import "./ChatArea.css";
import BubbleChat from "./BubbleChat";
const ChatArea = (props) => {
  if (props.msg.user_name == localStorage.getItem("username")) {
    return (
      <div id="divBodyRight">
        <Row>
          <Col>
            {/*float is prop not css */}
            <BubbleChat float="right" msg={props.msg} />
          </Col>
          <h1>Pic</h1>
        </Row>
      </div>
    );
  }
  return (
    <div id="divBodyLeft">
      <Row>
        <h1>Pic</h1>
        <Col>
          <BubbleChat float="left" msg={props.msg} />
        </Col>
      </Row>
    </div>
  );
};

export default ChatArea;
