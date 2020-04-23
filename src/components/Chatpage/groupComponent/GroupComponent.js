import React,{useState} from 'react';
import { Collapse, Button, CardBody, Card , Modal, ModalHeader, ModalBody, ModalFooter,Input} from 'reactstrap';

const GroupComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const toggleModal = () => setModal(!modal);
  const DisplayMember = props.group.group_user.map( (name) => {
    return <p style={{marginLeft:'10px'}}>{name}</p>
  })

  return (
    <div>
        <h5>{props.group.group_name} ({props.group.group_user.length})  
        <Button outline color="danger" onClick={toggleModal} size="sm" style={{fontSize:'14px'}}>Leave</Button>
        </h5>
      <Button color="info" onClick={toggle} size="sm"  style={{fontSize:'12px'}}>See Member</Button>
      {/*onClick should set new data for chat fetch in localStorage and in ChatDisplay should re-render in chat display*/}
      <Button color="success" size="sm"  style={{fontSize:'12px'}}>Chat</Button>
      <Collapse isOpen={isOpen}>
          {DisplayMember}
        
      </Collapse>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Enter Username</ModalHeader>
        <ModalBody>
          <Input />
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={toggleModal}>Add member</Button>
          <Button color="secondary" onClick={toggleModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default GroupComponent;