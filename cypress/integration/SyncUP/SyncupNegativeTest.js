/// <reference types="Cypress" />

import LoginPage from '../../support/SyncupPageObjects/LoginPage'
import TimeEntry from '../../support/SyncupPageObjects/TimeEntry'
import BackDate from '../../support/SyncupPageObjects/BackDate'

describe('SyncUP Full Negative Test Sute', function() 
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
       //Login add from PageObject
       const Login = new LoginPage()
       
       Login.fillUserName(Cypress.env('email'))
       Login.fillUserPass(Cypress.env('password'))
       .submit()
      
       //cy.SyncUPEntry('','')
       cy.wait(1000) 
       cy.title().should('be.equal', 'My timesheet - Sync Up')
       
       
    })
  
    afterEach(() => {
      cy.log('************* This is Logout blog ****************')
      //const loginPage = new LoginPage()
     // loginPage.fullName().click()
     // loginPage.logOut().click()
 
    })
  
    after(() => {
      // runs once after all tests in the block
    })
  
  
    it('Test Case1: Click on + button without enter data', function()
    {
      const timeEntry = new TimeEntry()
      cy.location('protocol', { timeout: 10000 }).should('eq', 'https:')
      cy.url().should('include', 'time/add')
      timeEntry.getTimeSet().click()
      timeEntry.getErrorDescription1().should('have.text','The description field is required')
      timeEntry.getEmptyProject().should('have.text','You need to select a project')
      timeEntry.getEmptyCategory().should('have.text','You need to select a category')
      timeEntry.getEmptyTags().should('have.text','You need to select at least one tag')
      cy.wait(2000)
     
 
    } )
    
    
    it.only('Test Case2: Adding Time Entry without description', function()
     {
      cy.log('************* Adding Entry ****************')
      const timeEntry = new TimeEntry()
      cy.location('protocol', { timeout: 10000 }).should('eq', 'https:')
      cy.url().should('include', 'time/add')
      timeEntry.getDescription().type(this.data.TimeDescription1)
      timeEntry.getProject().type(this.data.TimeEntryProject)
      timeEntry.getclickCategory().click()
      cy.wait(500)
      timeEntry.getCategoryList().type(this.data.TimeEntryCategory)
      cy.wait(500)
      timeEntry.getSetCategory().click()
      cy.wait(1000)
      timeEntry.getTagsList().type(this.data.TimeEntryTag)
      cy.wait(500)
      // custom commands
      cy.selectTags(this.data.TimeEntryTag)
      timeEntry.getTimes().type(this.data.Timer)
      cy.wait(500)
      timeEntry.getTimeSet().click()
      timeEntry.getErrorDescription1().should('have.text','The description field is required')
      cy.wait(2000)

     } )
     

     it('Test Case3: Adding Entry with description less than 5 characters long', function()
     {
      cy.log('************* Adding Entry ****************')
      const timeEntry = new TimeEntry()
      cy.location('protocol', { timeout: 10000 }).should('eq', 'https:')
      timeEntry.getDescription().type(this.data.TimeDescription)
      timeEntry.getProject().type(this.data.TimeEntryProject)
      timeEntry.getclickCategory().click()
      timeEntry.getCategoryList().type(this.data.TimeEntryCategory)
      cy.wait(500)
      timeEntry.getSetCategory().click()
      cy.wait(1000)
      timeEntry.getTagsList().type(this.data.TimeEntryTag)
      cy.wait(500)
      
      // custom commands
      cy.selectTags(this.data.TimeEntryTag)
      timeEntry.getTimes().type(this.data.Timer)
      cy.wait(500)
      timeEntry.getTimeSet().click()
      timeEntry.getErrorDescription1().should('have.text','Your description should be at least 5 characters long')
      cy.wait(2000)

     } )

     
     it('Test Case4: Adding Entry without Project', function()
     {
      cy.log('************* Adding Entry ****************')
      const timeEntry = new TimeEntry()
      cy.location('protocol', { timeout: 10000 }).should('eq', 'https:')
      timeEntry.getDescription().type(this.data.TimeEntryDescription)
      //timeEntry.getclickCategory().click()
      cy.wait(500)
      timeEntry.getCategoryList().type(this.data.TimeEntryCategory)
      cy.wait(500)
      timeEntry.getSetCategory().click()
      cy.wait(1000)
      timeEntry.getTagsList().type(this.data.TimeEntryTag)
      cy.wait(500)
      // custom commands
      cy.selectTags(this.data.TimeEntryTag)
      timeEntry.getTimes().type(this.data.Timer)
      cy.wait(500)
      timeEntry.getTimeSet().click()
      timeEntry.getEmptyProject().should('have.text','You need to select a project')
      cy.wait(2000)

     } )
    
    
    
     it('Test Case5: Adding Entry without Category and Tags', function()
     { 
      cy.log('************* Adding Entry ****************')
      const timeEntry = new TimeEntry()
      cy.location('protocol', { timeout: 10000 }).should('eq', 'https:')
      timeEntry.getDescription().should('be.visible').should('be.enabled').type(this.data.TimeEntryDescription)
      timeEntry.getProject().type(this.data.TimeEntryProject)
      timeEntry.getclickCategory().click()
      timeEntry.getTimes().type(this.data.Timer)
      timeEntry.getTimeSet().click()
      timeEntry.getEmptyCategory().should('have.text','You need to select a category')
      timeEntry.getEmptyTags().should('have.text','You need to select at least one tag')
      cy.wait(4000)

     } )

     
     it('Test Case6: Adding Entry without Tags', function()
     {
      cy.log('************* Adding Entry ****************')
      const timeEntry = new TimeEntry()
      cy.location('protocol', { timeout: 10000 }).should('eq', 'https:')
      timeEntry.getDescription().type(this.data.TimeEntryDescription)
      timeEntry.getProject().type(this.data.TimeEntryProject)
      timeEntry.getclickCategory().click()
      cy.wait(500)
      timeEntry.getCategoryList().type(this.data.TimeEntryCategory)
      cy.wait(500)
      timeEntry.getSetCategory().click()
      cy.wait(1000)
      timeEntry.getTimes().type(this.data.Timer)
      timeEntry.getTimeSet().click()
      timeEntry.getEmptyTags().should('have.text','You need to select at least one tag')
      cy.wait(1000)

     } )


     it('Test Case7: Blank BACK DATE Entry', function()
      {
        cy.log('************* Adding blank Back date Entry ****************')
        const backDate = new BackDate()
        cy.location('protocol', { timeout: 10000 }).should('eq', 'https:')
        backDate.getbackdateEntry().click().should('be.visible')
        backDate.getSaveButton().click()
        backDate.getConfirmbtn().click()
        backDate.getDescriptionError().should('have.text','The description field is required')
        backDate.getCategorieError().should('have.text', 'You need to select a category')
        backDate.getTagError().should('have.text','You need to select at least one tag')
        
        
       }
      )

      it('Test Case8: Adding Blank Description', function()
      {
        cy.log('************* Adding Back date Entry ****************')
        const backDate = new BackDate()
        cy.location('protocol', { timeout: 10000 }).should('eq', 'https:')
        backDate.getbackdateEntry().click().should('be.visible')
        backDate.getProject().type(this.data.SelectProject).should('be.visible')
        backDate.getCategories().type(this.data.SelectCategories).should('be.visible')
        backDate.getTags().should('be.visible').type(this.data.MultiSelectTags)
        cy.tagSelect(this.data.MultiSelectTags)
        backDate.getTagsVerify().should('have.value', this.data.MultiSelectTags)
        cy.wait(500)
       
        backDate.getDate()
        backDate.getCalendar().contains(this.data.BackDate).click()
        backDate.getTimes().dblclick().clear().type(this.data.BackTime).should('be.visible').click()
        backDate.getSaveButton().click()
        backDate.getConfirmbtn().click()
        backDate.getDescriptionError().should('have.text','The description field is required')
        
       }
      )

      it('Test Case9: Adding Description less than 5 character', function()
      {
        cy.log('************* Adding Back date Entry ****************')
        const backDate = new BackDate()
        cy.location('protocol', { timeout: 10000 }).should('eq', 'https:')
        backDate.getbackdateEntry().click().should('be.visible')
        backDate.getDescriptions().focus().click().type(this.data.TimeDescription).should('be.visible')
        backDate.getProject().type(this.data.SelectProject).should('be.visible')
        backDate.getCategories().type(this.data.SelectCategories).should('be.visible')
        backDate.getTags().should('be.visible').type(this.data.MultiSelectTags)
        cy.tagSelect(this.data.MultiSelectTags)
        backDate.getTagsVerify().should('have.value', this.data.MultiSelectTags)
        cy.wait(500)
        backDate.getDate()
        backDate.getCalendar().contains(this.data.BackDate).should('be.visible').click()
        backDate.getTimes().dblclick().clear().type(this.data.BackTime).should('be.visible')
        
        backDate.getSaveButton().click()
        backDate.getConfirmbtn().click()
        backDate.getDescriptionError().should('have.text','Your description should be at least 5 characters long')
        
       }
      )

      it('Test Case10: Adding BackDate entry without Categories', function()
      {
        cy.log('************* Adding Back date Entry ****************')
        const backDate = new BackDate()
        cy.location('protocol', { timeout: 10000 }).should('eq', 'https:')
        backDate.getbackdateEntry().click().should('be.visible')
        backDate.getDescriptions().focus().click().type(this.data.BackDateDescription).should('be.visible')
        backDate.getProject().type(this.data.SelectProject).should('be.visible')
        cy.wait(500)
        backDate.getDate()
        backDate.getCalendar().contains(this.data.BackDate).should('be.visible').click()
        //backDate.getDate(this.data.BackDate).invoke('Accessibilty','Value').should('contain','2020-10-01')
        backDate.getTimes().dblclick().clear().type(this.data.BackTime).should('be.visible')
        
        backDate.getSaveButton().click()
        backDate.getConfirmbtn().click()
        backDate.getCategorieError().should('have.text', 'You need to select a category')
        backDate.getTagError().should('have.text','You need to select at least one tag')
        
       }
      )

   }
)