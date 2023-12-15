describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://google.com')
    cy.get('#L2AGLb > .QS5gu').click()
    cy.get('#APjFqb').type("SITA.dev")
    cy.contains('Sök på Google').click()
    cy.title().should('eq', 'SITA.dev - Sök på Google')
  })
})