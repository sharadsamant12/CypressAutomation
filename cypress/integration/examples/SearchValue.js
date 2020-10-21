/// <reference types="Cypress" />
describe('Search Test', function()  
{
    it('Verify Search content on page', function() 
    {
      cy.visit("https://webuser:w3bus3r@stage2.dayre.me/auth/login")
      cy.get('input[name=login_e]').should('be.visible').should('be.enabled').type('sharad')
      cy.wait(1000)
      cy.get('input[name=login_p]').should('be.visible').should('be.enabled').type('43214321{enter}')
      cy.wait(1000)
        
      //Title verification
      cy.title().should('eq','Dayre')
      cy.wait(1500)
     
      //Search contains
      //cy.get(':nth-child(3) > .comment-list').contains('p','comment three').should('be.visible')
      cy.get('.comment-list').contains('p','comment three').should('be.visible')
      

       //Page navigate
      cy.get(':nth-child(2) > .nav-link-left').contains('Top').click()
      cy.title().should('eq','Top Posts') //Top Page title verification
      cy.wait(5000)
      cy.go('back')
      cy.title().should('eq','Feeds')
      cy.wait(1500)
      cy.reload() //Page reload
      //cy.get(':nth-child(1) > .textpost-conntainer > .user-text-block > .user-text > .description_text').click()
      //section.page-section.clearfix div.block-section.welcome-section.clearfix div.container div.row div.col-sm-12.col-md-6:nth-child(2) div.mid_content div.mid_container div.post-content div.infinite-scroll-component__outerdiv div.infinite-scroll-component div:nth-child(1) div:nth-child(3) > div.comment-list
      //section.page-section.clearfix div.block-section.welcome-section.clearfix div.container div.row div.col-sm-12.col-md-6:nth-child(2) div.mid_content div.mid_container div.post-content div.infinite-scroll-component__outerdiv div.infinite-scroll-component div:nth-child(1) div:nth-child(6) > div.comment-list:nth-child(3)


  
    }
    ) 
}
)