
Cypress.config('pageLoadTimeout',10000)
import LoginPage from '../../support/TrualtaPageObjects/LoginPage'
import UserRegistrationPage from '../../support/TrualtaPageObjects/UserRagistrationPage'

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
    Login.fillUserName(Cypress.env('email1'))
    Login.fillUserPass(Cypress.env('password1'))
      .submit({ timeout: 2500 })


  })


  afterEach(() => {
    cy.log('************* This is Logout blog ****************')
    
    
  })

  after(() => {
    // runs once after all tests in the block
    const loginPage = new LoginPage()
    const userRegistration = new UserRegistrationPage()
    
    userRegistration.getProfile({timeout:2000})
    loginPage.logOut()
    
    //cy.clearCookies()
    cy.end

  })


  it('Test Case1: Adding Blank Data', function () {
    cy.log('************* Adding Ragistration ****************')
    //cy.get('login-box').within(())

    const userRegistration = new UserRegistrationPage()
    cy.location('protocol', { timeout: 10000 }).should('eq', 'http:')

    cy.title().should('be.equal', 'Home - Trualta', { timeout: 10000 })
    userRegistration.getProfile()
    userRegistration.getAdmin({ timeout: 10000 })
    cy.url().should('include', 'user/manage-user')

    userRegistration.getUser()
    cy.url().should('include', 'user/add1')
    userRegistration.getAdd()

    userRegistration.getEmailAddressError().should('have.text', 'The email field is required.')
    userRegistration.getFirstNameError().should('have.text', 'The first name field is required.')
    userRegistration.getRollError().should('have.text', 'Please select Role')
    /*
    const loginPage = new LoginPage()
    //const userRegistration = new UserRegistrationPage()

    userRegistration.getProfile()
    cy.wait(1500)
    userRegistration.getLogout().click()
    //cy.reload()
    */
  }
  )

  it.only('Test Case2: Verify existing email ID', function () {
    cy.log('************* Adding Ragistration ****************')

    const userRegistration = new UserRegistrationPage()

    cy.location('protocol', { timeout: 10000 }).should('eq', 'http:')
    cy.title().should('be.equal', 'Home - Trualta', { timeout: 10000 })

    userRegistration.getProfile({ timeout: 500 })
    userRegistration.getAdmin({ timeout: 10000 })
    cy.url().should('include', 'user/manage-user')
    userRegistration.getUser({ timeout: 10000 })
    cy.url().should('include', 'user/add1')

    userRegistration.getEmailAddress({ timeout: 10000 }).then(($fav) => {
      const favEmail=$fav.text()
      expect(favEmail).to.eq("")
    }).first().type(this.data.Email)
    

    userRegistration.getFirstName({ timeout: 5000 }).eq(0).type(this.data.Firstname)
    userRegistration.getLastName().eq(0).type(this.data.LastName)
    userRegistration.getMultiSelect()
    userRegistration.getMultiSelectTag()

    // custom commands
    cy.roleSelect(this.data.Role)
    //userRegistration.getMultiSelect().should('have.value', this.data.Role)
    userRegistration.getPhone().type(this.data.PhoneNo)
    userRegistration.getOrganisation().should('have.value', '5')
    userRegistration.getAdd()

    cy.wait(1000)
    userRegistration.getNotification().contains('This Email Id is already registered')

    cy.wait(1500)


  }
  )

  it('Test Case3: Verify Valid email ID', function () {
    cy.log('************* Adding Ragistration ****************')

    const userRegistration = new UserRegistrationPage()
    userRegistration.getProfile()
    cy.wait(1500)

    userRegistration.getAdmin()
    userRegistration.getUser()

    cy.wait(5000)
    userRegistration.getEmailAddress().type(this.data.VEmail)
    userRegistration.getFirstName().type(this.data.Firstname)
    userRegistration.getLastName().type(this.data.LastName)
    userRegistration.getMultiSelect()
    userRegistration.getMultiSelectTag()

    // custom commands
    cy.roleSelect(this.data.Role)
    //userRegistration.getMultiSelect().should('have.value', this.data.Role)
    userRegistration.getPhone().type(this.data.PhoneNo)
    userRegistration.getOrganisation().should('have.value', '5')
    userRegistration.getAdd()

    cy.wait(1000)


    userRegistration.getEmailAddressError().should('have.text', 'The email must be a valid email address.')

    cy.wait(1500)
  }
  )

  it('Test Case4: Add new User', function () {
    cy.log('************* Adding Ragistration ****************')

    const userRegistration = new UserRegistrationPage()
    userRegistration.getProfile()
    cy.wait(1500)

    userRegistration.getAdmin()
    userRegistration.getUser()

    cy.wait(5000)
    userRegistration.getEmailAddress().type(this.data.DEmail)
    userRegistration.getFirstName().type(this.data.Firstname)
    userRegistration.getLastName().type(this.data.LastName)
    userRegistration.getMultiSelect()
    userRegistration.getMultiSelectTag()

    // custom commands
    cy.roleSelect(this.data.Role)
    //userRegistration.getMultiSelect().should('have.value', this.data.Role)
    userRegistration.getPhone().type(this.data.PhoneNo)
    userRegistration.getOrganisation().should('have.value', '5')
    userRegistration.getAdd()

    cy.wait(1000)


    userRegistration.getNotification().contains('User invited successfully')
    cy.get('table tbody tr td:nth-child(1)').each(($el, index, $list) => {
      const text = $el.text()
      if (text.includes('this.data.VEmail')) {
        cy.get("table tbody tr td:nth-child(1)").eq(index).next().then(function (Name) {
          const nameText = Name.text()
          expect(nameText).to.equal('Sharad Samant')
        })
      }

    }
    )


    cy.wait(1500)
  }
  )

  it('Test Case5: Verify Invitation send for same email ID', function () {
    cy.log('************* Adding Ragistration ****************')

    const userRegistration = new UserRegistrationPage()
    userRegistration.getProfile()
    cy.wait(1500)

    userRegistration.getAdmin()
    userRegistration.getUser()

    cy.wait(5000)
    userRegistration.getEmailAddress().type(this.data.DEmail)
    userRegistration.getFirstName().type(this.data.Firstname)
    userRegistration.getLastName().type(this.data.LastName)
    userRegistration.getMultiSelect()
    userRegistration.getMultiSelectTag()

    // custom commands
    cy.roleSelect(this.data.Role)
    //userRegistration.getMultiSelect().should('have.value', this.data.Role)
    userRegistration.getPhone().type(this.data.PhoneNo)
    userRegistration.getOrganisation().should('have.value', '5')
    userRegistration.getAdd()

    cy.wait(1000)

    userRegistration.getNotification().contains('Invitation is already sent to this Email Id')

    cy.wait(1500)
  }
  )



})