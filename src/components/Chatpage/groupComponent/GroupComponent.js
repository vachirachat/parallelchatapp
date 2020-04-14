import React,{useState} from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const GroupComponent = (props) => {
const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const DisplayMember = () => {
    return (
      
      <p style={{marginLeft:'10px'}}>display member  <Button outline color="danger" size="sm" onClick={toggle} style={{ }}>Delete</Button></p>
      
    )
  }

  return (
    <div>
        <h5>Group Name ({props.numOfMember})  <Button outline color="success" size="sm" style={{fontSize:'14px'}}>AddMember</Button></h5>
      <Button color="info" onClick={toggle} size="sm"  style={{fontSize:'12px'}}>See Member</Button>
      {/*onClick should set new data for chat fetch in localStorage and in ChatDisplay should re-render in chat display*/}
      <Button color="success" size="sm"  style={{fontSize:'12px'}}>Chat</Button>
      <Collapse isOpen={isOpen}>
          <DisplayMember/>
        
      </Collapse>
    </div>
  );
};

export default GroupComponent;