import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../../support/TrualtaPageObjects/LoginPage";
import CaregiverUser from "../../../support/TrualtaPageObjects/CaregiverUser";
import UserRegistrationPage from "../../../support/TrualtaPageObjects/UserRagistrationPage"

const Care = new CaregiverUser();
const Login = new LoginPage();

Given('Open Trualta Login page', ()=> {
    
    Login.visit();
    Login.fillUserName(Cypress.env("email2"));
    Login.fillUserPass(Cypress.env("password2")).submit({ timeout: 10000 });
})  

// When Profile page displayed

When('Profile page displayed', function() {
   
    cy.location("protocol", { timeout: 10000 }).should("eq", "http:");
    cy.get('.delete').click();
    cy.title().should("be.equal", "Home - Trualta", { timeout: 10000 });
    cy.url().should("include", "/home");
    
    Care.getProfiles({ timeout: 10000 });
    Care.getMyProfile().click({ timeout: 10000 });
    cy.url().should("include", "/profile");
    cy.title().should("be.equal", "Profile - Trualta", { timeout: 10000 });
    Care.getFirstName({ timeout: 10000 }).clear();
    
    cy.wait(2000);
})




//Then verify The first name field is required.
Then('Submit and verify The first name field.', function() {
    Care.getSave({ timeout: 10000 }).click();
    cy.wait(2000);
    Care.getFirstNameError().should(
        "have.text",
        "The first name field is required."
     );
    cy.wait(2000);
   
})



//Filling the form with the first name blank
When('Profile page displayed', function() {
    cy.location("protocol", { timeout: 10000 }).should("eq", "http:");
    cy.get('.delete').click();
    cy.title().should("be.equal", "Home - Trualta", { timeout: 10000 });
        cy.url().should("include", "/home");
    Care.getProfiles({ timeout: 10000 });
    
    Care.getMyProfile().click({ timeout: 10000 });
    cy.url().should("include", "/profile");
    cy.title().should("be.equal", "Profile - Trualta", { timeout: 10000 });
    //Care.getFirstName({ timeout: 10000 }).clear();
    //Care.getSave({ timeout: 10000 }).click();
    cy.wait(2000);
})

// Then verify The first name field is required
Then('Submit Data', function() {
    Care.getFirstName({ timeout: 10000 }).clear();
    cy.wait(2000);
    Care.getSave({ timeout: 10000 }).click();
    cy.wait(2000);

})


//And Validate the message
And('Verify The first name field.',() => {
    Care.getFirstNameError().should(
        "have.text",
        "The first name field is required."
     );
    cy.wait(2000);

})


