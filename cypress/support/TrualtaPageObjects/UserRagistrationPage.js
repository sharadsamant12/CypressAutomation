class UserRegistrationPage
{
    getProfile()
    {
        return  cy.get('.dropdown-menu.profile-drop-down').should('be.hidden').invoke('show')
    }

    getAdmin()
    {
        return cy.contains('Admin').click()
    }

    getLogout()
    {
        return cy.get('.drop-down-inner > #logout-button')
    }

    getUser()
    {
        return cy.contains('Add User').click()
    }

    getEmailAddress()
    {
        
        return cy.get(':nth-child(2) > .control > .input').should('be.visible').click()
    }

    getFirstName()
    {
        return cy.get(':nth-child(3) > .control > .input').click()
    }

    getLastName()
    {
        return cy.get(':nth-child(4) > .control > .input').click()
    }

    getMultiSelect()
    {
        return cy.get('.multiselect__select').click()
    }

    getMultiSelectTag()
    {
        return cy.get('.multiselect__tags-wrap').should('be.hidden').invoke('show')
    }

    getPhone()
    {
        return cy.get(':nth-child(6) > .control > .input').click()
    }

    getOrganisation()
    {
        return cy.get('select').select('5')
    }

    
    getAdd()
    {
        return cy.get('.button.is-primary.is-small').click()
    }

    getCancel()
    {
        return cy.get(':nth-child(2) > .button')
    }


    getEmailAddressError()
    {
        return cy.get(':nth-child(2) > .control > .help')
    }

    

    getValidEmailAddressError()
    {
        return cy.get(':nth-child(2) > .control > .help')
    }

    getFirstNameError()
    {
        return cy.get(':nth-child(3) > .control > .help')
    }

    getRollError()
    {
        return cy.get(':nth-child(5) > .control > .help')
    }

    getNotification()
    {
        return cy.get('#flash_notification')
    }
    
}
export default UserRegistrationPage