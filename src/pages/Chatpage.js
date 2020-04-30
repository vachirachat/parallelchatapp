import React, { Component } from "react";
import InputBox from "../components/Chatpage/InputBox";
import NameDisplay from "../components/Chatpage/NameDisplay";
import DisplayChat from "../components/Chatpage/DisplayChat";
import { Row, Col } from "reactstrap";
import "../App.css";

// const Chatpage = () => {
//   const group_id = "1";
//   const user_name = "user1";
//   const chatSocket = new WebSocket(
//     "ws://127.0.0.1:8000/ws/chat/user_name=" + user_name + "&group_id=" + group_id + "/"
//   );
//   return (
//     <div id="body" style={{ overflow: "hidden" }}>
//       <Row>
//         <Col sm={2} xs={12}>
//           <NameDisplay />
//         </Col>
//         <Col style={{ marginRight: "20px", height: "100vh" }}>
//           <DisplayChat chatSocket={chatSocket} />
//           <InputBox chatSocket={chatSocket} />
//         </Col>
//       </Row>
//     </div>
//   );
// };

class Chatpage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      chatSocket: "",
    };
  }

  callbackFunction = async (childData) => {
    if (this.state.chatSocket) this.state.chatSocket.close();
    const chatSocket = new WebSocket(
      "ws://127.0.0.1:8000/ws/chat/user_name=" +
        localStorage.getItem("username") +
        "&group_id=" +
        childData +
        "/"
    );
    this.setState({ chatSocket: chatSocket });
  };

  callbackFunction2 = () => {
    if (this.state.chatSocket) this.state.chatSocket.close();
  }

  render() {
    return (
      <div id="body" style={{ overflow: "hidden" }}>
        <Row>
          <Col sm={2} xs={12}>
            <NameDisplay parentCallback={this.callbackFunction} parentCallback2={this.callbackFunction2} />
          </Col>
          {this.state.chatSocket ? (
            <Col style={{ marginRight: "20px", height: "100vh" }}>
              <DisplayChat chatSocket={this.state.chatSocket} />
              <InputBox chatSocket={this.state.chatSocket} />
            </Col>
          ) : (
            ""
          )}
        </Row>
      </div>
    );
  }
}

export default Chatpage;
