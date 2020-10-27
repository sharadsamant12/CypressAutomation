class Caregiver 
{
    getProfiles()
    {
        return  cy.get('.dropdown-menu.profile-drop-down').should('be.hidden').invoke('show')
    }

    getMyProfile()
    {
        return cy.get('.drop-down-inner > [href="http://beta.trualta.com/profile"]').should('be.visible')
    }

    getFirstName()
    {
        return cy.get(':nth-child(3) > .control > .input')
    }

    getSave()
    {
        return cy.get('.control > .button')
    }

    getEmail()
    {
        return cy.get(':nth-child(5) > .control > .input')
    }

    getResidency()
    {
        return cy.get(':nth-child(14) > .control > .input')
    }

    getPhone()
    {
        return cy.get(':nth-child(7) > .control > .input')
    }

    getState()
    {
        return cy.get('#state_id')
    }

    getMytopics()
    {
        return cy.contains('My topics')
    }

    getFirstNameError()
    {
        return cy.get(':nth-child(3) > .control > .help')
    }

    

}
export default Caregiver