import React, { useState } from 'react';
import { Col, Alert } from 'reactstrap';
import PersonForm from './../../components/PersonForm';
import PersonService from '../../services/PersonService';

const Create= () => {
    const [alert, setAlert ] = useState({
        color: 'info',
        text: 'Info',
        isOpen: false
    });

    const showMessage = (message, type) => {
        setAlert({
            isOpen: true,
            color: type,
            text: message
        });
    }

    const handleError = (message) => {
        setAlert({
            isOpen: true,
            color: 'danger',
            text: String(message)
        });
    }

    const doCreate = async (person) => {
        try {
            const { data } = await PersonService.createPerson(person);
            showMessage("New person created succesfully! id = " + data.idPerson, "success")
        } catch(e) {
            if(e.response.data.message)
                handleError(e.response.data.message);
            else if(e.response.data)
                handleError(JSON.stringify(e.response.data));
            else
                handleError(e);
        }
    }
    
    return(
        <Col md={{ size: 8, offset: 2 }}>
            <Alert
            isOpen={alert.isOpen}
            color={alert.color}
            toggle={()=>{ setAlert({ ...alert, isOpen: !alert.isOpen}) }}>
                {alert.text}
            </Alert>
            <PersonForm
            mode="create"
            onSubmit={doCreate}
            />
        </Col>
    );
}

export default Create;