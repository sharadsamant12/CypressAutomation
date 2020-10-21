/// <reference types="Cypress" />



describe('SyncUP Entry Test Sute', function() 
 {

   before(function()  {
        cy.fixture('example').then(function(data)
            {
                this.data=data
            }
        )

    })
  
    beforeEach(() => {
      cy.log('************* This is Login blog ****************')
      cy.visit("https://syncup.focalworks.in/")
         
      

    })
  
    afterEach(() => {
      cy.log('************* This is Logout blog ****************')
      cy.get('.dropdown-toggle > .hidden-xs').click()
      cy.get('#signout').click()
    })
  
    after(() => {
      // runs once after all tests in the block
    })


    it('Test Case1: Adding Entry', function()
     {
       cy.log('************* Adding Post as quote ****************')
       cy.get('input[name=email]').should('be.visible').should('be.enabled').type(this.data.email)
       cy.wait(500)
       cy.get('input[name=password]').should('be.visible').should('be.enabled').type(this.data.password)
       cy.get('.col-xs-4 > .btn').click()
       cy.wait(1000) 
       

     }
    )




 }
)