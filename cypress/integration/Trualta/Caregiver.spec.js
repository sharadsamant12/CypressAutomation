import LoginPage from '../../support/TrualtaPageObjects/LoginPage'
import UserRegistrationPage from '../../support/TrualtaPageObjects/UserRagistrationPage'
import CaregiverUser from '../../support/TrualtaPageObjects/Caregiver'
Cypress.config('pageLoadTimeout',1000000)

describe('CM Ragistration Full Test Sute', function () {

    before(function () {
  
      cy.log('************* Runs once before all tests in the block ****************')
  
      cy.fixture('Trualta').then(function (data) {
        this.data = data
      }
      )
  
  
    })
  
    beforeEach(() => {
      cy.log('************* This is Login blog ****************')
  
      cy.clearCookies()
  
      cy.visit(Cypress.env('url1'))
  
      const Login = new LoginPage()
      Login.fillUserName(Cypress.env('email2'))
      Login.fillUserPass(Cypress.env('password2'))
        .submit({ timeout: 10000 })
  
  
    })
  
  
     
    it('Test Case1: Save First Name as blank ', function () {
      cy.log('************* Adding Ragistration ****************')
      //cy.get('login-box').within(())
      const Care = new CaregiverUser
      cy.location('protocol', { timeout: 10000 }).should('eq', 'http:')
     
      cy.title().should('be.equal', 'Home - Trualta', { timeout: 10000 })
      cy.url().should("include", '/home')
      Care.getProfiles({ timeout: 10000 })
      Care.getMyProfile().click({ timeout: 10000 })
      cy.url().should("include", '/profile')
      cy.title().should('be.equal', 'Profile - Trualta', { timeout: 10000 })

      Care.getFirstName({ timeout: 10000 }).clear()
      Care.getSave({timeout: 10000}).click()
      Care.getFirstNameError().should('have.text' , 'The first name field is required.')

    }
    )

    it('Test Case2: Edit the Email ', function () {
        cy.log('************* Adding Ragistration ****************')
        //cy.get('login-box').within(())
        const Care = new CaregiverUser
        cy.location('protocol', { timeout: 10000 }).should('eq', 'http:')
       
        cy.title().should('be.equal', 'Home - Trualta', { timeout: 10000 })
        cy.url().should("include", '/home')
        Care.getProfiles({ timeout: 10000 })
        Care.getMyProfile().click({ timeout: 10000 })
        cy.url().should("include", '/profile')
        cy.title().should('be.equal', 'Profile - Trualta', { timeout: 10000 })
  
        Care.getEmail().should('be.disabled')
        Care.getResidency().should('be.disabled')
        Care.getPhone().should('be.enabled')
          
      }
      )

      it('Test Case3: Edit State ', function () {
        cy.log('************* Adding Ragistration ****************')
        //cy.get('login-box').within(())
        const Care = new CaregiverUser
        cy.location('protocol', { timeout: 10000 }).should('eq', 'http:')
       
        cy.title().should('be.equal', 'Home - Trualta', { timeout: 10000 })
        cy.url().should("include", '/home')
        Care.getProfiles({ timeout: 10000 })
        Care.getMyProfile().click({ timeout: 10000 })
        cy.url().should("include", '/profile')
        cy.title().should('be.equal', 'Profile - Trualta', { timeout: 10000 })
  
        Care.getEmail().should('be.disabled')
        Care.getState('select').select('12').should('have.value','12')
        Care.getSave({timeout: 10000}).click()  


      }
      )

      it('Test Case4: My topic ', function () {
        cy.log('************* Adding Ragistration ****************')
        //cy.get('login-box').within(())
        const Care = new CaregiverUser
        cy.location('protocol', { timeout: 10000 }).should('eq', 'http:')
       
        cy.title().should('be.equal', 'Home - Trualta', { timeout: 10000 })
        cy.url().should("include", '/home')
        Care.getProfiles({ timeout: 10000 })
        Care.getMyProfile().click({ timeout: 10000 })
        cy.url().should("include", '/profile')
        cy.title().should('be.equal', 'Profile - Trualta', { timeout: 10000 })
        
        Care.getMytopics( { timeout: 10000 }).click()
        cy.url().should("include", '/profile/my-topics')
        

      }
      )



    afterEach(() => {
        cy.log('************* This is Logout blog ****************')
        /*
        const loginPage = new LoginPage()
        const userRegistration = new UserRegistrationPage()
        
        userRegistration.getProfile({timeout:2000})
        loginPage.logOut({timeout:2000}).click()
        cy.window().logOut
        */
        
        
      })
    
      after(() => {
        // runs once after all tests in the block
       
        //cy.clearCookies()

        //cy.clearLocalStorage()
    
      })

})