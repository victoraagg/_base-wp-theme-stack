describe('Check HOME', function () {
  beforeEach(function () {
    cy.visit('/')
    cy.wait(2000)
  })

  it('can login', function () {
    cy.wait(2000)
    cy.title().should(
      'eq',
      'Desarrollo web WordPress a medida y diseño gráfico - bthebrand'
    )
  })
})
