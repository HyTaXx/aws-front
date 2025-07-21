describe('App E2E Tests', () => {
  it('should click the counter button and increment the count', () => {
    cy.visit('/')
    
    // Vérifie que le titre est présent
    cy.contains('Vite + React + Armand').should('be.visible')
    
    // Vérifie que le bouton avec le count initial est présent
    cy.get('button').contains('count is 0').should('be.visible')
    
    // Clique sur le bouton
    cy.get('button').contains('count is 0').click()
    
    // Vérifie que le count a été incrémenté
    cy.get('button').contains('count is 1').should('be.visible')
    
    // Clique encore une fois pour vérifier que ça continue d'incrémenter
    cy.get('button').contains('count is 1').click()
    cy.get('button').contains('count is 2').should('be.visible')
  })
  
  it('should display the correct logos and links', () => {
    cy.visit('/')
    
    // Vérifie la présence des logos
    cy.get('img[alt="Vite logo"]').should('be.visible')
    cy.get('img[alt="React logo"]').should('be.visible')
    
    // Vérifie les liens
    cy.get('a[href="https://vite.dev"]').should('have.attr', 'target', '_blank')
    cy.get('a[href="https://react.dev"]').should('have.attr', 'target', '_blank')
  })
})
