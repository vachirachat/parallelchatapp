import React,{useState,useEffect} from 'react';
import GroupComponent from './groupComponent/GroupComponent';

import { Collapse, Button, CardBody, Card , Modal, ModalHeader, ModalBody, ModalFooter,Input} from 'reactstrap';
import './NameDisplay.css'
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import { fixControlledValue } from 'antd/lib/input/Input';
const NameDisplay = () => {
   
    const [groupmember,setGroupmember] = useState([])
    const history = useHistory()
    const toggleModal = () => setModal(!modal);
    const [modal, setModal] = useState(false);
    
    const toggleModaljoin = () => setModaljoin(!modaljoin);
    const [modaljoin, setModaljoin] = useState(false);
    const [data,setData] = useState({
        "user_name": String(localStorage.getItem('username')),
        "group_name": "dasdasd"
    })
  
    const [dataJoin,setDataJoin] = useState({
        
        "user_name": String(localStorage.getItem('username')),
        "group_id": 10
    })

    const handleOnChange1 = event => {
        const { name, value } = event.target;
        setDataJoin({ ...dataJoin, [name]: value });
        
      };
    const handleOnChange2 = event => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
        
    };
    const logoutButton = () =>{
        localStorage.clear()
        history.push('/')
    }
    const addGroup = () =>{
        console.log(data)
        axios.post('http://127.0.0.1:8000/api/group/',data)
        .then((res) => {
            console.log(res.data.status)
            alert(data['groupname'])
            alert('Success to create group')
        })
        .catch((err)=>{
            console.log('this is data')
            console.log(data)
            console.log(err)
            alert(err)
        })
        console.log(data)
    }

    const joinGroup = () =>{
        axios.post('http://127.0.0.1:8000/api/join/',dataJoin)
        .then((res)=>{
            alert('Success to join group')
        })
        .catch((err)=>{
            console.log(dataJoin)
            console.log(err)
            alert(err)
        })
    }

    const fetchGroup = () =>{

    }

    
    return (
        <div id='divOut'>
            <div>
            
            <h4>{localStorage.getItem('username')} </h4> 
            
            <Button color="success" id ='buttonLogout' onClick={toggleModal}>Create</Button> 
            <Button color="info" id ='buttonLogout' onClick={toggleModaljoin}>Join group</Button>
            <Button color="danger" id ='buttonLogout' onClick={logoutButton}>Logout</Button> 
            </div>
            <div id='divGroupComponent'>


                

            </div>

            
            <Modal isOpen={modaljoin} toggle={toggleModaljoin}>
                <ModalHeader toggle={toggleModaljoin}>Enter Group id</ModalHeader>
                <ModalBody>
                <Input name='group_id' onChange={handleOnChange1}/>
                </ModalBody>
                <ModalFooter>
                <Button color="success" onClick={joinGroup}>Join Group</Button>
                <Button color="secondary" onClick={toggleModaljoin}>Cancel</Button>
                </ModalFooter>
            </Modal>  

            <Modal isOpen={modal} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Enter Group name</ModalHeader>
                <ModalBody>
                <Input name="group_name" onChange={handleOnChange2}/>
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