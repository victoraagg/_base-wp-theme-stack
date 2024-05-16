describe('Check LOGIN', function () {
  // Go to WordPress login page and login.
  beforeEach(function () {
    cy.visit('/wp-login.php')
    cy.wait(2000)
    cy.get('#user_login').type(Cypress.env('wpUser'))
    cy.get('#user_pass').type(Cypress.env('wpPassword'))
    cy.get('#wp-submit').click()
  })

  it('can login', function () {
    cy.wait(2000)
    // cy.url().should('eq', 'http://localhost/sanur/wp-admin/')
    cy.url().should('eq', 'https://www.bthebrand.es/wp-admin/')
  })
})
