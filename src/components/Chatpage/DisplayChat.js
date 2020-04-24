import React, { Component } from "react";
import { Card } from "reactstrap";
import ChatArea from "./chatComponent/ChatArea";
import "./DisplayChat.css";

class DisplayChat extends Component {
  constructor(props) {
    super(props);
    this.state = { chats: [] };
  }

  componentWillMount() {
    this.props.chatSocket.onmessage = (m) => {
      var tmp = this.state.chats;
      tmp.push(JSON.parse(m.data));
      this.setState({ chats: tmp });
    };
  }

  render() {
    return (
      <div id="divOut">
        <Card id="card">
          <div style={{ width: "80wh" }}>
            {this.state.chats.map((m) => {
              if (m.type == "chat_message") return <ChatArea msg={m} />;
            })}
          </div>
        </Card>
      </div>
    );
  }
}

export default DisplayChat;
