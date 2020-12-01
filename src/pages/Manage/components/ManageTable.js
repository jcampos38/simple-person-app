import React from 'react';
import { Table, Button } from 'reactstrap';
import PropTypes from 'prop-types';

const ManageTable = ({
    persons,
    doDelete,
    onUpdate
}) => {

    return(
        <div>
            <Table dark>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Weight</th>
                        <th>Height</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {persons.map(p => (
                        <tr>
                            <th scope="row">{p.idPerson}</th>
                            <td>{p.name}</td>
                            <td>{p.lastName}</td>
                            <td>{p.email}</td>
                            <td>{p.age}</td>
                            <td>{p.gender}</td>
                            <td>{p.weight}</td>
                            <td>{p.height}</td>
                            <td><Button color="info" onClick={() => onUpdate(p)}>
                                Update</Button></td>
                            <td><Button color="danger" onClick={() => doDelete(p.idPerson)}>
                                Delete</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

ManageTable.propTypes = {
    persons: PropTypes.array,
    doDelete: PropTypes.func,
    onUpdate: PropTypes.func
}

ManageTable.defaultProps = {
    persons: [],
    doDelete: () => {},
    onUpdate: () => {},
}
export default ManageTable;