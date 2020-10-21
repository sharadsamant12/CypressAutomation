class LoginPage
{
    visit()
    {
        cy.visit("https://syncup.focalworks.in/")

    }


    fillUserName(value)
    {
       
        //save in veriable (name is field)
        const field=cy.get('input[name=email]')
        field.clear()
        field.type(value)
        return this
      
    }

    fillUserPass(value)
    {
       //save in veriable (name is field)
        const field=cy.get('input[name=password]')
        field.clear()
        field.type(value)
        return this
      
    }

    submit()
    {
        //cy.get('.col-xs-4 > .btn').click()
        const button=cy.get('[type=submit]')
        button.click()

    }

    fullName()
    {
        return cy.get('.dropdown-toggle > .hidden-xs')
    }

    logOut()
    {
        return cy.get('#signout')
    }

}
export default LoginPage