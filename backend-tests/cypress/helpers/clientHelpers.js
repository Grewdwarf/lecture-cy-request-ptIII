const faker = require('faker')

const CREATE_CLIENT_ENDPOINT = 'http://localhost:3000/api/client/new'

// functions
function createClientPayload() {
    let clientPayload = {
        "name": faker.name.firstName(),
        "email": faker.internet.email(),
        "telephone": faker.phone.phoneNumber()
    }

    return clientPayload
}

function createClientRequest() {
    cy.request({
        method: 'POST',
        url: 'http://localhost:3000/api/client/new',
        headers: {
            'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
            'Content-Type': 'application/json'
        },
        body: createClientPayload()
    }).then((response => {
        expect(response.status).to.eq(200)
        Cypress.env({ lastID: response.body.id })
        cy.log(response.body.id) //this responses to relative ID in inspect elements. (in this case "id":3)
    }))
}

function deleteClientRequest(idToDelete) {
    cy.request({
        method: 'DELETE',
        url: 'http://localhost:3000/api/client/' + idToDelete,
        headers: {
            'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
            'Content-Type': 'application/json'
        },
    }).then((response => {
        expect(response.status).to.eq(200)
    }))
}

function performLogout() {
    cy.request({
        method: 'POST',
        url: 'http://localhost:3000/api/logout',
        headers: {
            'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
            'Content-Type': 'application/json'
        },
    }).then((response => {
        expect(response.status).to.eq(200)
    }))
}


// exports
module.exports = {
    createClientPayload,
    createClientRequest,
    deleteClientRequest,
    performLogout,
}