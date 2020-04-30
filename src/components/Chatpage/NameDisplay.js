import React, { useState, useEffect } from "react";
import GroupComponent from "./groupComponent/GroupComponent";

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
import "./NameDisplay.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { fixControlledValue } from "antd/lib/input/Input";
const NameDisplay = (props) => {
  //groupmember for add member that fetch from server
  const [groupmember, setGroupmember] = useState([]);
  const history = useHistory();
  const toggleModal = () => setModal(!modal);
  const [modal, setModal] = useState(false);

  const toggleModaljoin = () => setModaljoin(!modaljoin);
  const [modaljoin, setModaljoin] = useState(false);
  const [data, setData] = useState({
    user_name: String(localStorage.getItem("username")),
    group_name: "dasdasd",
  });

  const [dataJoin, setDataJoin] = useState({
    user_name: String(localStorage.getItem("username")),
    group_id: 10,
  });

  const [userName, setUserName] = useState(String(localStorage.getItem("username")));

  const handleOnChange1 = (event) => {
    const { name, value } = event.target;
    setDataJoin({ ...dataJoin, [name]: value });
  };
  const handleOnChange2 = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };
  const logoutButton = () => {
    props.parentCallback2();
    localStorage.clear();
    history.push("/");
  };
  const addGroup = () => {
    console.log(data);
    axios
      .post("http://127.0.0.1:8000/api/group/", data)
      .then((res) => {
        console.log(res.data.status);
        alert(data["groupname"]);
        alert("Success to create group");
        toggleModal()
      })
      .catch((err) => {
        console.log("this is data");
        console.log(data);
        console.log(err);
        alert(err);
      });
    console.log(data);
  };

  const joinGroup = () => {
    axios
      .post("http://127.0.0.1:8000/api/join/", dataJoin)
      .then((res) => {
        alert("Success to join group");
        toggleModaljoin()
      })
      .catch((err) => {
        console.log(dataJoin);
        console.log(err);
        alert(err);
      });
  };

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/group/?user_name=${userName}`)
      .then((res) => {
        console.log("Get success");
        setGroupmember(res.data);
        console.log("Data is already set");
        console.log(res.data);
      })
      .catch((err) => {
        console.log("ERROR FROM useEffect!!!");
        console.log(err.message);
        console.log(userName);
      });
  }, []);

  const groupsList = groupmember.map((group) => {
    console.log("group is ready");
    return (
      <GroupComponent
        key={group.group_id}
        group={group}
        parentCallback={props.parentCallback}
        /* groupname={group.group_name} 
                numOfMember={group.group_user.length} 
                memberName={group.group_user} */
      />
    );
  });

  return (
    <div id="divOut">
      <div>
        <h4>{localStorage.getItem("username")} </h4>

        <Button color="success" id="buttonLogout" onClick={toggleModal}>
          Create
        </Button>
        <Button color="info" id="buttonLogout" onClick={toggleModaljoin}>
          Join
        </Button>
        <Button color="danger" id="buttonLogout" onClick={logoutButton}>
          Logout
        </Button>
      </div>
      <div id="divGroupComponent">{groupsList}</div>

      <Modal isOpen={modaljoin} toggle={toggleModaljoin}>
        <ModalHeader toggle={toggleModaljoin}>Enter Group id</ModalHeader>
        <ModalBody>
          <Input name="group_id" onChange={handleOnChange1} />
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={joinGroup}>
            Join Group
          </Button>
          <Button color="secondary" onClick={toggleModaljoin}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Enter Group name</ModalHeader>
        <ModalBody>
          <Input name="group_name" onChange={handleOnChange2} />
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={addGroup}>
            Add Group
          </Button>
          <Button color="secondary" onClick={toggleModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default NameDisplay;
