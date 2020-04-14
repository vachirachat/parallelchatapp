import React from 'react';
import GroupComponent from './groupComponent/GroupComponent';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const NameDisplay = () => {
    const data = []
    return (
        <div style={{height:'100vh',width:'100%',display:'block'}}>
            <h4>Username display <Button color="danger" style={{fontSize:'14px'}}>Logout</Button></h4>
            <div style={{height:'100vh',width:'100%',display:'block',overflowY:'scroll',overflowX:'hidden',paddingBottom:'50px'}}>
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
        </div>
    );
};

export default NameDisplay;