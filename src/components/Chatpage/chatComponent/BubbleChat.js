import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col,
  Row,
} from "reactstrap";
import "./BubbleChat.css";
const BubbleChat = (props) => {
  if (props.float == "left") {
    return (
      <div id="displayBubble">
        <Card className="bg-success" color="green">
          <p id="ptext">{props.msg.msg_text}</p>
        </Card>
        <p>
          {props.msg.user_name} {props.msg.time_stamp}
        </p>
      </div>
    );
  }
  return (
    <div id="displayBubbleRight">
      <Card className="bg-secondary" id="cardRight">
        <p id="ptext">{props.msg.msg_text}</p>
      </Card>

      <p id="pTimeread">
        {props.msg.user_name} {props.msg.time_stamp}
      </p>
    </div>
  );
};

export default BubbleChat;
