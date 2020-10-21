


import BackDate from '../../support/SyncupPageObjects/BackDate'
import TimeEntry from '../../support/SyncupPageObjects/TimeEntry'


describe('SyncUP Full Test Sute', function() 
{

  before(function()  {
        
        cy.log('************* runs once before all tests in the block ****************')
        
        cy.fixture('Syncup').then(function(data)
            {
                this.data=data
            }
        )
       
        
     })
  
     beforeEach(() => {
       cy.log('************* This is Login blog ****************')
       cy.visit(Cypress.env('url'))
       cy.SyncUPEntry('','')
       cy.wait(1000) 
       cy.title().should('be.equal', 'My timesheet - Sync Up')
       
    })
  
    afterEach(() => {
      //cy.log('************* This is Logout blog ****************')
      //cy.get('.dropdown-toggle > .hidden-xs').click()
      //cy.get('#signout').click()
    })
  
    after(() => {
      // runs once after all tests in the block
    })
  
  

    it('Test Case2: Adding BACK DATE Entry', function()
      {
        cy.log('************* Adding Back date Entry ****************')
        const timeEntry = new TimeEntry()
        
          timeEntry.getDescription().type(this.data.TimeEntryDescription)
          //cy.get('.TimeEntryDescription__timeEntryDescription > input').should('have.attr','minlength','5')
          timeEntry.getProject().type(this.data.TimeEntryProject)
          timeEntry.getclickCategory().click()
          timeEntry.getCategoryList().type(this.data.TimeEntryCategory)
          cy.wait(1000)
          timeEntry.getSetCategory().click()
          cy.wait(1000)
          timeEntry.getTagsList().type(this.data.TimeEntryTag)
          

          
          cy.get('[class="Dropdown__value"]').each(($el, index, $list) => {
        
           
            if($el.text().includes(' Testing') && $el.text().not('Regression Testing')  )
               {
                //$el.text().length===' Testing'.length  
                $el.contents()=='Testing'             
                 $el.click() 
               
                }
               
          })
          
           timeEntry.getTimes().type(this.data.Timer)
           timeEntry.getTimeSet().click()

       }
      )



   }
)