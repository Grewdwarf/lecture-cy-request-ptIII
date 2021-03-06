/// <reference types="cypress" />

import * as client from '../helpers/clientHelpers'

describe('Test suite', () => {
    it('Create a new client', () => {
        cy.authenticate().then((response => {
            client.createClientRequest()
            client.performLogout()
        }))
    })

    it('Delete a client', () => {       // it.only -> runs this test suite only
        cy.authenticate().then((response => {
            client.createClientRequest()
            client.deleteClientRequest(Cypress.env().lastID)
            client.performLogout()
        }))
    })


    /*
OBS: KOD NEDAN ÄR OFARLIGT ATT RADERA

    it('GET request towards /api/clients', () => {
        cy.authenticate().then((response =>{
            cy.request({
                method: 'GET', 
                url: 'http://localhost:3000/api/clients', 
                headers: {
                    'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
                    'Content-Type': 'application/json'
                }
            })
        })).then((response => {
            expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response.body))
            cy.log(JSON.stringify(response.body[1]))
        }))
    })

    it('GET request towards /api/client/1', () => {
        cy.authenticate().then((response => {
            cy.request({
                method: 'GET', 
                url: 'http://localhost:3000/api/client/1', 
                headers: {
                    'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
                    'Content-Type': 'application/json'
                }
            }).then((response =>{
                expect(response.status).to.eq(200)
                // cy.log(JSON.stringify(response.body))
            }))
        }))
       
    })


    it('POST request towards /api/client/new', () => {
        cy.authenticate().then((response => {
            cy.request({
                method: 'POST',
                url:'http://localhost:3000/api/client/new',
                headers: {
                    'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
                    'Content-Type': 'application/json'
                }, 
                body:{
                    "name":"Client01",
                    "email":"client01@email.com",
                    "telephone":"12312423423423"
                }
            }).then((response => {
                expect(response.status).to.eq(200)
            }))
        }))       
    })  
    
    it('PUT request towards /api/client/1', () => {
        cy.authenticate().then((response => {
            cy.request({
                method: 'PUT',
                url:'http://localhost:3000/api/client/2',
                headers: {
                    'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
                    'Content-Type': 'application/json'
                }, 
                body:{
                    "id":2,
                    "name":"Client02",
                    "email":"client02@email.com",
                    "telephone":"12312423423423"
                }                
            }).then((response => {
                expect(response.status).to.eq(200)
            }))
        }))       
    })   

    it('DELETE request towards /api/client/1', () => {
        cy.authenticate().then((response => {
            cy.request({
                method: 'DELETE',
                url:'http://localhost:3000/api/client/1',
                headers: {
                    'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
                    'Content-Type': 'application/json'
                },                              
            }).then((response => {
                expect(response.status).to.eq(200)
            }))
        }))       
    }) 

    it('POST request towards /api/logout', () => {
        cy.authenticate().then((response => {
            cy.request({
                method: 'POST',
                url:'http://localhost:3000/api/logout',
                headers: {
                    'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
                    'Content-Type': 'application/json'
                },                              
            }).then((response => {
                expect(response.status).to.eq(200)
            }))
        }))       
    }) 


    // Test case - Create a client
    // 1. Login 
    // 2. Create a client
    // 3. Logout

    it('Create a client', () => {
        cy.authenticate().then((response => {

            //Crete a client request
            cy.request({
                method: 'POST',
                url:'http://localhost:3000/api/client/new',
                headers: {
                    'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
                    'Content-Type': 'application/json'
                }, 
                body:{
                    "name":"Client01",
                    "email":"client01@email.com",
                    "telephone":"12312423423423"
                }
            }).then((response => {
                expect(response.status).to.eq(200)
            }))

            // Perform a logout
            cy.request({
                method: 'POST',
                url:'http://localhost:3000/api/logout',
                headers: {
                    'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
                    'Content-Type': 'application/json'
                },                              
            }).then((response => {
                expect(response.status).to.eq(200)
            }))
        }))
    })



    it.only('GET request towards /api/client/{lastID}', () => {
        // Authentication; Getting a valid token
        cy.authenticate().then((response => {
            // Get request to get all clients in order to extract the lastID
            cy.request({
                method: 'GET', 
                url: 'http://localhost:3000/api/clients', 
                headers: {
                    'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
                    'Content-Type': 'application/json'
                }
            }).then((response =>{
                expect(response.status).to.eq(200)
                //Save the id of the last client into a variable
                let lastID = response.body[response.body.length -1].id
                cy.log(lastID)

                //The GET / PUT / DELETE request towards the client with the lastID.
                // The URL is build by appending the variable lastID in the end of the endpoint
                cy.request({
                    method: 'GET', 
                    url: 'http://localhost:3000/api/client/'+lastID, 
                    headers: {
                        'X-User-Auth':JSON.stringify(Cypress.env().loginToken), 
                        'Content-Type': 'application/json'
                    }
                }).then((response => {
                    expect(response.status).to.eq(200)
                    cy.log(JSON.stringify(response.body))
                }))

            }))
        }))
       
    })*/


})