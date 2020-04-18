import React,{useState} from 'react';
import GroupComponent from './groupComponent/GroupComponent';

import { Collapse, Button, CardBody, Card , Modal, ModalHeader, ModalBody, ModalFooter,Input} from 'reactstrap';
import './NameDisplay.css'
import {useHistory} from 'react-router-dom';
import axios from 'axios';
const NameDisplay = () => {
    const history = useHistory()
    const toggleModal = () => setModal(!modal);
    const [modal, setModal] = useState(false);
    const data = useState({
        "user_name": String(localStorage.getItem('username')),
        "group_name": "dasdasd"
    })
    const logoutButton = () =>{
        localStorage.clear()
        history.push('/')
    }
    const addGroup = () =>{
        console.log(data)
        axios.post('http://127.0.0.1:8000/api/group/',data)
        .then((res) => {
            console.log(res.data.status)
        })
        .catch((err)=>{
            console.log('this is data')
            console.log(data)
            console.log(err)
        })
        console.log(data)

    }
    return (
        <div id='divOut'>
            <div>
            
            <h4>{localStorage.getItem('username')} </h4> 
            <Button color="danger" id ='buttonLogout' onClick={logoutButton}>Logout</Button> <Button color="success" id ='buttonLogout' onClick={toggleModal}>AddGroup</Button>
            </div>
            <div id='divGroupComponent'>
                <GroupComponent />
                <GroupComponent />
                <GroupComponent />
                <GroupComponent />
                <GroupComponent />
                <GroupComponent />
                <GroupComponent />
                <GroupComponent />
                <GroupComponent />
                <GroupComponent />
                <GroupComponent />
                <GroupComponent />
                <GroupComponent />
                <GroupComponent />
                <GroupComponent />
                <GroupComponent />
                <GroupComponent />
                <GroupComponent />
                <GroupComponent />
                <GroupComponent />
                <GroupComponent />
                <GroupComponent />

            </div>
            <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Enter Username</ModalHeader>
        <ModalBody>
          <Input />
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={addGroup}>Add Group</Button>
          <Button color="secondary" onClick={toggleModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
        </div>
    );
};

export default NameDisplay;