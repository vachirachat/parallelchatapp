import React, { Component } from "react";
import { Col, Row, Input, Button, Container, Form, FormGroup } from "reactstrap";

// const InputBox = () => {
//   return (
//     <div sm={12} style={{ width: "100%" }}>
//       <Row>
//         <Col style={{ width: "70%" }}>
//           <Input type="textarea" style={{ height: "70px", overflowY: "auto" }} />
//         </Col>
//         <Button color="success" size="sm">
//           Send
//         </Button>
//       </Row>
//     </div>
//   );
// };

class InputBox extends Component {
  constructor(props) {
    super(props);
    this.state = { postData: { msg_text: "" } };
  }

  handleChange = (e) => {
    let tempData = this.state.postData;
    tempData[e.target.name] = e.target.value;
    this.setState({
      postData: tempData,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.props.chatSocket.send(JSON.stringify(this.state.postData));
    this.setState({ postData: { msg_text: "" } });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Row>
          <Col sm={10}>
            <FormGroup>
              <Input
                type="text"
                name="msg_text"
                value={this.state.postData.msg_text}
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
          <Col>
            <Button>Send</Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default InputBox;
