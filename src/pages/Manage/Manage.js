import React, { useState, useEffect } from 'react';
import { Alert, Modal, ModalBody, ModalHeader } from 'reactstrap';
import ManageTable from './components/ManageTable';
import PersonForm from './../../components/PersonForm';
import PersonService from './../../services/PersonService';

const Manage = () => {
    const [persons, setPersons] = useState([]);
    const [person, setPerson] = useState({});
    const [modal, setModal] = useState(false);
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

    const getPersonsList = async () => {
        try {
            const { data } = await PersonService.getPersonList();
            setPersons(data);
        } catch(e) {
            if(e.response.data.message)
                handleError(e.response.data.message);
            else if(e.response.data)
                handleError(JSON.stringify(e.response.data));
            else
                handleError(e);
        }
    }

    const doDelete = async (id) => {
        try{
            await PersonService.deletePerson(id);
            showMessage("Person " + id + " deleted succesfully!", "success")
            getPersonsList();
        } catch(e) {
            if(e.response.data.message)
                handleError(e.response.data.message);
            else if(e.response.data)
                handleError(JSON.stringify(e.response.data));
            else
                handleError(e);
        }
        
    }

    const onUpdate = (person) => {
        setPerson(person);
        setModal(true);
    }

    const doUpdate = async (person) => {
        try {
            const { data } = await PersonService.updatePerson(person);
            showMessage("Person " + data.idPerson + " updated succesfully!", "success")
            getPersonsList();
            setModal(false);
        } catch(e) {
            setModal(false);
            if(e.response.data.message)
                handleError(e.response.data.message);
            else if(e.response.data)
                handleError(JSON.stringify(e.response.data));
            else
                handleError(e);
        }
    }

    useEffect(() => {
        getPersonsList();
    }, []);

    return(
        <div>
            <Alert
            isOpen={alert.isOpen}
            color={alert.color}
            toggle={()=>{ setAlert({ ...alert, isOpen: !alert.isOpen}) }}>
                {alert.text}
            </Alert>
            <Modal isOpen={modal} toggle={() => setModal(!modal)}>
                <ModalHeader toggle={() => setModal(!modal)}>Create Person</ModalHeader>
                <ModalBody>
                    <PersonForm
                        mode="update"
                        person={person}
                        onSubmit={doUpdate}
                        onCancel={() => setModal(false)}/>
                </ModalBody>
            </Modal>
            <ManageTable
            persons={persons}
            doDelete={doDelete}
            onUpdate={onUpdate}/>
        </div>
    );
}

export default Manage;