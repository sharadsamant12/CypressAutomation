class BackDate
{
    getbackdateEntry()
    {
        return cy.get('.treeview-menu > :nth-child(4) > a').should('be.visible')
    }
    
    getDescriptions()
    {
       return cy.get('#description').focus().click()
    }

    getProject()
    {
       return cy.get('#select-project > .multiselect > .multiselect__tags')
    }

    getCategories()
    {
        return cy.get('#select-category > .multiselect > .multiselect__tags')
    }


    getTags()
    {
       return cy.get('#select-tags > .multiselect > .multiselect__tags').should('be.visible')
    }

    getTagsVerify()
    {
        return cy.get('[id="tags"]')
    }

    getDate()
    {
        cy.get('input[id=date]').click({force:true})
    }

    getCalendar()
    {
        return cy.get('.calendar span')
    }
    
    getTimes()
    {
       return cy.get('#time').click({force:true})
    }

    getSaveButton()
    {
        return cy.get('.btn-success')
    }

    getConfirmbtn()
    {
        return cy.get('.confirm')
    }

    getAddEntry()
    {
        return cy.get('.sidebar-menu > :nth-child(3) > a > .fa')
    }

    getDescriptionError()
    {
        return cy.get(':nth-child(1) > .help')
    }

    getCategorieError()
    {
        return cy.get('#select-category > .help')
    }

    getTagError()
    {
        return cy.get('#select-tags > .help')
    }

}

export default BackDate