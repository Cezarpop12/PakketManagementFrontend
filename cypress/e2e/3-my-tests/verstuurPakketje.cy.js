/// <reference types="cypress" />
const API_URL = Cypress.env('API_BASE_URL')
const id = 138;

describe('Typeform API', () => {
    it('verzend een pakketje', () => {
        cy.request({
            method: 'PUT',
            url: `${API_URL}pakketje/statusOnderweg/${id}`,
            headers: { 'Content-Type': 'application/json' }
        }).should(({ status}) => {
            expect(status).to.eq(200)
        })
    })
})