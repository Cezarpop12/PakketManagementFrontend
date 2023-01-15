// /// <reference types="cypress" />
// const API_URL = Cypress.env('API_BASE_URL')

// describe('Typeform API', () => {
//     it('Add een pakketje', () => {
//         cy.request({
//             method: 'POST',
//             url: `${API_URL}pakketje/add`,
//             headers: { 'Content-Type': 'application/json' }
//         }).should(({ status}) => {
//             expect(status).to.eq(200)
//         })
//     })
// })