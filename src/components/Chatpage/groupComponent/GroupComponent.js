import React, { useState, useEffect } from "react";
import {
  Collapse,
  Button,
  CardBody,
  Card,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";
import axios from 'axios';

const GroupComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const toggleModal = () => setModal(!modal);
  const DisplayMember = props.group.group_user.map((name) => {
    return <p style={{ marginLeft: "10px" }}>{name}</p>;
  });

  const [dataLeave, setDataLeave] = useState({
    user_name: String(localStorage.getItem("username")),
    group_id: props.group.group_id
  });

  // ------ edit code here -------
  const changeChatGroupId = () => {
    props.parentCallback(props.group.group_id);
  };

  const leaveGroup = () => {
    axios
      .post("http://127.0.0.1:8000/api/leave/",dataLeave)
      .then((res) => {
        console.log('leave group success')
        alert('Left Group Success')
        toggleModal()
      })
      .catch((err) => {
        console.log('leave group fail')
        console.log(dataLeave)
        console.log(err)
      })
  }

  return (
    <div style={{margin: '25px 0px'}}>
      <h5 style={{marginBottom: 0}}>
        {props.group.group_name} ({props.group.group_user.length})
        <Button outline color="danger" onClick={toggleModal} size="sm" style={{ fontSize: "14px" }}>
          Leave
        </Button>
      </h5>
      <p style={{marginBottom : 0}}>Group ID: {props.group.group_id}</p>
      <Button color="info" onClick={toggle} size="sm" style={{ fontSize: "12px" }}>
        See Member
      </Button>
      {/*onClick should set new data for chat fetch in localStorage and in ChatDisplay should re-render in chat display*/}
      <Button color="success" size="sm" style={{ fontSize: "12px" }} onClick={changeChatGroupId}>
        Chat
      </Button>
      <Collapse isOpen={isOpen}>{DisplayMember}</Collapse>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Are you sure to leave group</ModalHeader>
        {/* <ModalBody>
          <Button color="success" onClick={leaveGroup}>
            Confirm
          </Button>
          <Button color="secondary" onClick={toggleModal}>
            Cancel
          </Button>
        </ModalBody> */}
        <ModalFooter>
          <Button color="success" onClick={leaveGroup}>
            Confirm
          </Button>
          <Button color="secondary" onClick={toggleModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default GroupComponent;
