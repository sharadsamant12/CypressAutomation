// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
import 'cypress-file-upload';

Cypress.Commands.add("selectTags", (tagName) => { 
  cy.get('div .Dropdown__value').each(($el, index, $list) => {
        
    if($el.text()===tagName)
       {
         $el.click() 

        //cy.get("[//div[contains(text(),'this.Data.TimeEntryTag')]]").click()
       // cy.break;

        //cy.get('div .Dropdown__value').eq(index).click()
        }
  })

 })


Cypress.Commands.add("tagSelect", (tagsName) => { 
  cy.get('.multiselect__element span').each(($el, index, $list) =>
        {
          if($el.text()===tagsName)
          {
            $el.click()
            
          }
        }
        )


 })

 
 //Trualta Ragistration
 Cypress.Commands.add("roleSelect", (Role) => { 
 cy.get('.multiselect__element > .multiselect__option span').each(($el, index, $list) => {
        
  if($el.text()==="Caregiver")
  {
    $el.click()
  }

 })

})

//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


Cypress.Commands.add("Dayrelogin", (email, password) => 

    { 
      cy.get('input[name=login_e]').should('be.visible').should('be.enabled').type('sharad')
      cy.wait(1000)
      cy.get('input[name=login_p]').should('be.visible').should('be.enabled').type('43214321{enter}')
      cy.wait(1000)

    }
   )

   
   Cypress.Commands.add("SyncUPEntry", (email, password) => 

   { 
     cy.get('input[name=email]').should('be.visible').should('be.enabled').type('sharad.samant@focalworks.in')
     cy.wait(1000)
     cy.get('input[name=password]').should('be.visible').should('be.enabled').type('check@123{enter}')
     cy.wait(1000)

   }
  )
