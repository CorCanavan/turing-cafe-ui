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
    cy.get('form').find('input[name="time"]').type('7:00').should('have.value', '7:00')
    cy.get('form').find('input[name="number"]').type(2).should('have.value', '02')
  })

  it('Should be able to display new reservation card once user completes the form and clicks button', () => {
    cy.get('form').find('input[name="name"]').type('Corinne')
    cy.get('form').find('input[name="date"]').type('7/20')
    cy.get('form').find('input[name="time"]').type('7:00')
    cy.get('form').find('input[name="number"]').type(2)
    cy.contains('Make A Reservation').click()
    cy.get('.resContainer').find('.card').should('have.length', 10)
    cy.get('.resContainer').find('.card').last().should('contain', 'Corinne')
    cy.get('.resContainer').find('.card').last().should('contain', '7/20')
    cy.get('.resContainer').find('.card').last().should('contain', '7:00')
    cy.get('.resContainer').find('.card').last().should('contain', 2)
  })
})