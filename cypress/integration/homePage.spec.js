describe('Home Page', function() {
  it ('Has characters', function() {
    cy.visit('/')
    cy.contains("Arya Stark")
    cy.contains("Sansa Stark")
    cy.contains("Brienne of Tarth")  
  })
})
