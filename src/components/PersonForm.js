import React, { useState } from 'react';
import { Container, Col, Row, Button } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import PropTypes from 'prop-types';

const PersonForm = ({
    person,
    onSubmit,
    mode,
    onCancel
}) => {
    const [newPerson, setNewPerson] = useState(person);
    const actionText = mode === "create" ? "Create" : "Update";
    
    const onChange = ({ target }) => {
        let { id, value } = target;
        console.log(id)
        setNewPerson({
            ...newPerson,
            [id]: value
        });
    }

    const onValidSubmit = () => {
        onSubmit(newPerson)
    }

    return(
        <Container>
            
                <AvForm onValidSubmit={onValidSubmit}>
                    <h3>Person</h3>
                    <AvField name="name" label="Name" value={person.name} required onChange={onChange}/>
                    <AvField name="lastName" label="Last Name" value={person.lastName} required onChange={onChange}/>
                    <AvField name="email" label="Email" type="email" value={person.email} required onChange={onChange}/>
                    <Row>
                        <Col>
                            <AvField name="age" label="Age" value={person.age} required onChange={onChange} min={10}/>
                        </Col>
                        <Col>
                            <AvField type="select" name="gender" label="Gender" value={person.gender} onChange={onChange}
                            helpMessage="M: Male, F: Female">
                                <option></option>
                                <option>M</option>
                                <option>F</option>
                            </AvField>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <AvField name="weight" label="Weight" value={person.weight} required onChange={onChange} min={10}/>
                        </Col>
                        <Col>
                            <AvField name="height" label="Height" value={person.height} required onChange={onChange} min={10}/>
                        </Col>
                    </Row>
                    {mode === "create" ?
                        <div className="text-center">
                            <Button size="lg" color="info">{actionText}</Button>
                        </div>
                        :
                        <div className="text-right">
                            <Button size="md" color="info">{actionText}</Button>{'      '}
                            <Button size="md" color="danger" onClick={onCancel}>Cancel</Button>
                        </div>
                    }
                    
                </AvForm>
            
        </Container>
    );
}

PersonForm.propTypes = {
    person: PropTypes.object,
    onSubmit: PropTypes.func,
    onCancel: PropTypes.func,
    mode: PropTypes.string
}

PersonForm.defaultProps = {
    person: {},
    onSubmit: () => {},
    onCancel: () => {},
    mode: "create"
}

export default PersonForm;
