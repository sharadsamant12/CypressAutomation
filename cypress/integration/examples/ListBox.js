/// <reference types="Cypress" />

describe('ListBox Test', function() 
    {

    it('Verify ListBox content on page', function() 
        {
            cy.visit("https://webuser:w3bus3r@stage2.dayre.me/auth/login")
            cy.get('input[name=login_e]').should('be.visible').should('be.enabled').type('sharad')
            cy.wait(1000)
            cy.get('input[name=login_p]').should('be.visible').should('be.enabled').type('43214321{enter}')
            cy.wait(1000)
            //Title verification
            cy.title().should('eq','Dayre')
            cy.wait(1500)
            cy.get('#navbardrop').click()
            cy.get(':nth-child(3) > .dropdown-item').click()
            cy.get('.search').click()
            cy.get('.search-box').type('India{enter}')
            cy.wait(500)
            cy.get('.custbtn').click()
            
            


        }

    )

}

)