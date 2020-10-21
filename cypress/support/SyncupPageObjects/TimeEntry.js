class TimeEntry
{
    getDescription()
    {
        return cy.get('.TimeEntryDescription__timeEntryDescription > input').should('be.visible').should('be.enabled')
    }

    getProject()
    {
        return cy.get('.TimeEntryProject__container > .trigger > .noItemSelected > span').should('be.visible')
        
    }

    getclickCategory()
    {
        return cy.get('#app > div > section.content > div.TogglEntryForm__Wrapper > div.TimeEntryForm__newTimeEntry > div.TimeEntryProject__container.TimeEntrySelect__container > div > div > div.Dropdown__Element > div > i')
    }
    
    getCategoryList()
    {
        return cy.get('.TimeEntryCategory__container > .trigger > .noItemSelected > span').should('be.visible')
    }

    getSetCategory()
    {
        return cy.get('.Dropdown__value > .fa')
    }

    getTagsList()
    {
        return cy.get('.TimeEntryTag__container > .trigger > .noItemSelected > span').should('be.visible')
    }

    getTimes()
    {
        return cy.get('#time').dblclick().clear()
    }

    getTimeSet()
    {
        return cy.get('.Timer__timer > .Timer__button > .fa')
    }

    getDescriptionVerify()
    {
        return cy.get(':nth-child(1) > :nth-child(2) > .TogglEntries__row > .Description__container')
    }

    getErrorDescription1()
    {
        return cy.get('.col-md-10 > :nth-child(1)')
    }

    getEmptyProject()
    {
        return cy.get('.col-md-10 > :nth-child(2)')
    }

    getEmptyCategory()
    {
        return cy.get('.col-md-10 > :nth-child(3)')
    }

    getEmptyTags()
    {
        return cy.get('.col-md-10 > :nth-child(4)')
    }

}

export default TimeEntry