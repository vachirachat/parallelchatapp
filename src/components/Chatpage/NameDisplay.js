import React from 'react';
import GroupComponent from './groupComponent/GroupComponent';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import './NameDisplay.css'
const NameDisplay = () => {
    const data = []
    return (
        <div id='divOut'>
            <h4>Username display <Button color="danger" id ='buttonLogout'>Logout</Button></h4>
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
        </div>
    );
};

export default NameDisplay;