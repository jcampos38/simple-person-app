import query from '../utils/query';
import SERVICE_ENDPOINTS from './ServiceEndpoints';

class PersonService {
    static getPersonList() {
        return query({
            method: 'GET',
            endpoint: SERVICE_ENDPOINTS.MANAGE_PERSON
        });
    }

    static createPerson(person) {
        return query({
            method: 'POST',
            endpoint: SERVICE_ENDPOINTS.MANAGE_PERSON,
            data: person
        });
    }

    static updatePerson(person) {
        return query({
            method: 'PUT',
            endpoint: SERVICE_ENDPOINTS.MANAGE_PERSON + "/" + person.idPerson,
            data: person
        });
    }

    static deletePerson(id) {
        return query({
            method: 'DELETE',
            endpoint: SERVICE_ENDPOINTS.MANAGE_PERSON + "/" + id
        })
    }
}

export default PersonService;
