/// <reference types="cypress" />
const API_URL = Cypress.env('API_BASE_URL')

describe('Typeform API', () => {
    it('retrieves alle pakketjes', () => {
        cy.request({
            method: 'GET',
            url: `${API_URL}pakketje/getAll`
        }).should(({ status }) => {
            expect(status).to.eq(200)
        })
    })
})