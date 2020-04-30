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
          <img src="https://cdn1.iconfinder.com/data/icons/ui-next-2020-shopping-and-e-commerce-1/12/75_user-circle-512.png" alt="PIC" style={{ height:'50px' }} />
          {/* <h1>Pic</h1> */}
        </Row>
      </div>
    );
  }
  return (
    <div id="divBodyLeft">
      <Row>
        <img src="https://cdn1.iconfinder.com/data/icons/ui-next-2020-shopping-and-e-commerce-1/12/75_user-circle-512.png" alt="PIC" style={{ height: '50px' }} />
        {/* <h1>Pic</h1> */}
        <Col>
          <BubbleChat float="left" msg={props.msg} />
        </Col>
      </Row>
    </div>
  );
};

export default ChatArea;
