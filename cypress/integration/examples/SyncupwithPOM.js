/// <reference types="Cypress" />

import LoginPage from '../../support/SyncupPageObjects/LoginPage'

describe('SyncUPEntry Test Sute', function() 
    {
        it('Valid Login Page', function ()
        {
            const Login = new LoginPage()
            Login.visit()
            Login.fillUserName(Cypress.env('email'))
            Login.fillUserPass(Cypress.env('password'))
            .submit()
            cy.title().should('be.equal', 'My timesheet - Sync Up')
        }
        )
    }
)