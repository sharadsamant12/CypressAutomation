
describe('My Login Test', ()  =>
{
    it('Verify title page as Negative', () =>
    {
      cy.visit('https://webuser:w3bus3r@stage2.dayre.me/auth/login')
      cy.title().should('not.eq','dayre')

    })
    it('Verify title page as Positive', ()  =>
    {
      cy.visit('https://webuser:w3bus3r@stage2.dayre.me/auth/login')
      
      cy.title().should('eq','Dayre')

    })

    it('Prompt type - Alert', function()
    

    {
      //cy.visit('tage2.dayre.me/auth/login')
      cy.window().then(function($win){
        //cy.visit('https://stage2.dayre.me/')
        cy.stub($win, 'prompt').returns('webuser','w3bus3r')
      
        //cy.contains('Sing in').click()
        
      })
    
      
    })    

  })