describe('Arm me button', function() {
  it ('Allocates a weapon to the character', function() {
    cy.visit('/')
    cy.get('#1').find('.Sword').click()
    cy.get('#1').contains('Weapon: Sword')
    cy.get('#1').should('not.contain', 'Weapon: Unarmed')
  })
})

describe('Arm me button', function() {
  it ('Takes a weapon from the Arsenal', function() {
    cy.visit('/')
    cy.get('#1').find('.Sword').click()
    cy.get('.arsenal').should('not.contain', 'Sword')
  })
})
