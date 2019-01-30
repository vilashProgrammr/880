describe ('Description buttons', function(){
  it ('shows the descriptions for the characters', function() {
    cy.visit('/')
    cy.get('#1').find('.description').find('.descriptionButton').click()
    cy.get('#1').find('.description').should('contain', 'A girl has no description.')

  })
})
