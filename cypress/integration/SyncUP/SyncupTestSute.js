/// <reference types="Cypress" />

import LoginPage from '../../support/SyncupPageObjects/LoginPage'
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
       const Login = new LoginPage()
       
       Login.fillUserName(Cypress.env('email'))
       Login.fillUserPass(Cypress.env('password'))
       .submit()


       //add user name password from
       //cy.SyncUPEntry('','')
       cy.wait(1000) 
       cy.title().should('be.equal', 'My timesheet - Sync Up')
       
    })
  
    afterEach(() => {
      //cy.log('************* This is Logout blog ****************')
      const loginPage = new LoginPage()
     // loginPage.fullName().click()
     // loginPage.logOut().click()
    })
  
    after(() => {
      // runs once after all tests in the block
    })
  
     it.only('Test Case1: Adding Time Entry', function()
       {
         cy.log("************* Adding Entry ****************");

         const timeEntry = new TimeEntry();

         timeEntry.getDescription().type(this.data.TimeEntryDescription);
         //cy.get('.TimeEntryDescription__timeEntryDescription > input').should('have.attr','minlength','5')
         timeEntry.getProject().type(this.data.TimeEntryProject);
         timeEntry.getclickCategory().click();
         timeEntry.getCategoryList().type(this.data.TimeEntryCategory);
         cy.wait(1000);
         timeEntry.getSetCategory().click();
         cy.wait(1000);
         timeEntry.getTagsList().type(this.data.TimeEntryTag);
         cy.get("div .Dropdown__value").each(($el, index, $list) => {
           if ($el.text().includes("Testing")) {
             // $el.click()
             cy.get("div .Dropdown__value").eq(index).click();
           }
         });

         // })
         //cy.pause
         // custom commands
         // cy.selectTags(this.data.TimeEntryTag)

         timeEntry.getTimes().type(this.data.Timer);
         timeEntry.getTimeSet().click({ timeout: 10000 });
         cy.reload();
         timeEntry
           .getDescriptionVerify()
           .should("have.text", this.data.TimeEntryDescription);
       }
      )


   

     it('Test Case2: Adding BACK DATE Entry', function()
       {
        cy.log('************* Adding Back date Entry ****************')
        const backDate = new BackDate()
        backDate.getbackdateEntry().should('be.visible').click().should('be.visible')
        backDate.getDescriptions().focus().click().type(this.data.BackDateDescription).should('be.visible')
        backDate.getProject().type(this.data.SelectProject).should('be.visible')
        backDate.getCategories().type(this.data.SelectCategories).should('be.visible')
        backDate.getTags().should('be.visible').type(this.data.MultiSelectTags)
        
        // custom commands
        cy.tagSelect(this.data.MultiSelectTags)
        backDate.getTagsVerify().should('have.value', this.data.MultiSelectTags)
        cy.wait(500)
        backDate.getDate()
        backDate.getCalendar().contains(this.data.BackDate).should('be.visible').click()
        backDate.getTimes().dblclick().clear().type(this.data.BackTime).should('be.visible')
        
        backDate.getSaveButton().click()
        cy.get('h2').should('have.text','Entry added successfully!')
       /* cy.on('.sweet-alert', (String)=>
         {
          expect(String).to.equal('Entry added successfully!')
         }
        )
        */
        cy.wait(500)
        backDate.getConfirmbtn().should('be.visible').click()
        cy.wait(500)
        backDate.getAddEntry().click()
       

       }
      )




   }
)