import React, { Component } from "react";
import { Card } from "reactstrap";
import ChatArea from "./chatComponent/ChatArea";
import "./DisplayChat.css";

class DisplayChat extends Component {
  constructor(props) {
    super(props);
    this.state = { chats: [], recent_msg_id: 0 };
  }

  componentWillMount() {
    this.props.chatSocket.onmessage = (m) => {
      var tmp = this.state.chats;
      tmp.push(JSON.parse(m.data));
      this.setState({ chats: tmp });
      this.setState({ recent_msg_id: tmp[0].recent_msg_id });
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.chatSocket != this.props.chatSocket) {
      this.setState({ chats: [] });
      this.props.chatSocket.onmessage = (m) => {
        var tmp = this.state.chats;
        tmp.push(JSON.parse(m.data));
        this.setState({ chats: tmp });
        this.setState({ recent_msg_id: tmp[0].recent_msg_id });
      };
      console.log(this.state);
    }
  }

  render() {
    return (
      <div id="divOut">
        <Card id="card">
          <div style={{ width: "80wh" }}>
            {this.state.chats.map((m) => {
              if (m.type == "chat_message") {
                if (m.msg_id == this.state.recent_msg_id) {
                  return (
                    <div>
                      <ChatArea msg={m} />
                      <div>-------------unread-------------</div>
                    </div>
                  );
                } else return <ChatArea msg={m} />;
              }
            })}
          </div>
        </Card>
      </div>
    );
  }
}

export default DisplayChat;
