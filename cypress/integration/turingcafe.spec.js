describe('Turing Cafe User Flows', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })  

  it('Should display header, form and exisiting reservation cards on page load', () => {
    cy.get('.app-title').contains('h1', 'Turing Cafe Reservations')
    cy.get('form').find('input').should('have.length', 4)
    cy.get('.resContainer').find('.card').should('have.length', 9)
  })

  it('should display appropriate information on existing cards', () => {
    cy.get('.resContainer').find('.card').first().contains('h3', 'Christie')
    cy.get('.resContainer').find('.card').first().contains('p', '12/29')
    cy.get('.resContainer').find('.card').first().contains('p', '7:00')
    cy.get('.resContainer').find('.card').first().contains('p', 'Number of guests: 12')
  })

  it('Should update form values to display user input', () => {
    cy.get('form').find('input[name="name"]').type('Corinne').should('have.value', 'Corinne')
    cy.get('form').find('input[name="date"]').type('07/20').should('have.value', '07/20')
  })
})