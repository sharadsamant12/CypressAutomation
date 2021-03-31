
Cypress.config('pageLoadTimeout',100000)

describe('Open Ragistration Form Test Sute', function() {
  before(function () {
    cy.log(
      "************* Runs once before all tests in the block ****************"
    );

    cy.fixture("Trualta").then(function (data) {
      this.data = data;
    });
  });

  beforeEach(() => {
    cy.log("************* This is Login blog ****************");

    cy.clearCookies();

    cy.visit(Cypress.env("url2"));
  });

  afterEach(() => {
    cy.log("************* This is Logout blog ****************");
  });

  after(() => {
    // runs once after all tests in the block
  });

  it.only("Test Case1: Adding Open Registration", function () {
    cy.log("************* Adding Ragistration ****************");

    cy.location("protocol", { timeout: 10000 }).should("eq", "http:");
    cy.contains(
      "Trualta is provided by the Wisconsin Family and Caregiver Support Alliance and is free for your use."
    ).should("be.visible");
    cy.get(".register-btn").should("be.visible");
    cy.contains("Register Today").click({ timeout: 10000 });
    cy.url().should("include", "open-registration/check-eligiblity");

    cy.get("select")
      .select("lcompton@hsd.co.ashland.wi.us")
      .should("have.value", "lcompton@hsd.co.ashland.wi.us");
    cy.get("#care_type_1")
      .check()
      .should("be.checked")
      .and("have.value", "Has memory loss or dementia");

    cy.get(".button").click({ timeout: 10000 });

    cy.title().should("be.equal", "Wisconsin Caregiver (Trualta)");

    Cypress.on("uncaught:exception", (err, runnable) => {
      expect(err.message).to.include("The following error");

      return false;
    });

    cy.get(":nth-child(7) > .control > .input")
      .should("be.visible")
      .type("Auto");
    cy.get(":nth-child(8) > .control > .input")
      .should("be.visible")
      .type("User");
    cy.get(":nth-child(9) > .control > .input")
      .should("be.visible")
      .type("1472583690");

    cy.get(":nth-child(10) > .control > .select > select")
      .select("male")
      .should("have.value", "male");
    cy.get(":nth-child(11) > .control > .select > select")
      .select("26-35")
      .should("have.value", "26-35");
    cy.get("#race_4")
      .check()
      .should("be.checked")
      .and("have.value", "Native Hawaiian/Pacific Islander");
    cy.get(".textarea").should("be.visible").type("This is bio of about us...");
    cy.get('input[type="email"]').type("Testtype8@test.com");
    cy.get('input[name="password"]').type("12345678");
    cy.get('input[name="confirm_password"]').type("12345678");
    cy.get(".is-primary").click({ timeout: 10000 });
    cy.url().should("include", "preferences");
    cy.get('.inline-field  > input[name="tags[37]"]')
      .check({ force: true })
      .should("be.checked")
      .and("have.id", "37");
    cy.get('.inline-field  > input[name="tags[40]"]')
      .check({ force: true })
      .should("be.checked")
      .and("have.id", "40");

    cy.contains("Next").click({ timeout: 1000 });
    cy.get(".modal-close").click();
    cy.title().should("be.equal", "Home - Wisconsin Caregiver (Trualta)");
    cy.get(".dropdown-menu.profile-drop-down")
      .should("be.hidden")
      .invoke("show");
    cy.contains("My Profile").click();
    cy.url().should("include", "profile");
  });

  it("Test Case2: Existing Email ID", function () {
    cy.log("************* Adding Ragistration ****************");

    cy.location("protocol", { timeout: 10000 }).should("eq", "http:");
    cy.contains(
      "Trualta is provided by the Wisconsin Family and Caregiver Support Alliance and is free for your use."
    ).should("be.visible");
    cy.get(".register-btn").should("be.visible");
    cy.contains("Register Today").click({ timeout: 10000 });
    cy.url().should("include", "open-registration/check-eligiblity");

    cy.get("select")
      .select("lcompton@hsd.co.ashland.wi.us")
      .should("have.value", "lcompton@hsd.co.ashland.wi.us");
    cy.get("#care_type_1")
      .check()
      .should("be.checked")
      .and("have.value", "Has memory loss or dementia");

    cy.get(".button").click({ timeout: 10000 });

    cy.title().should("be.equal", "Wisconsin Caregiver (Trualta)");

    Cypress.on("uncaught:exception", (err, runnable) => {
      expect(err.message).to.include("The following error");

      return false;
    });

    cy.get(":nth-child(7) > .control > .input")
      .should("be.visible")
      .type("Auto");
    cy.get(":nth-child(8) > .control > .input")
      .should("be.visible")
      .type("User");
    cy.get(":nth-child(9) > .control > .input")
      .should("be.visible")
      .type("1472583690");

    cy.get(":nth-child(10) > .control > .select > select")
      .select("male")
      .should("have.value", "male");
    cy.get(":nth-child(11) > .control > .select > select")
      .select("26-35")
      .should("have.value", "26-35");
    cy.get("#race_4")
      .check()
      .should("be.checked")
      .and("have.value", "Native Hawaiian/Pacific Islander");
    cy.get(".textarea").should("be.visible").type("This is bio of about us...");
    cy.get('input[type="email"]').type("Testtype@test.com");
    cy.get('input[name="password"]').type("12345678");
    cy.get('input[name="confirm_password"]').type("12345678");
    cy.get(".is-primary").click({ timeout: 10000 });
    cy.get(":nth-child(14) > .help").should(
      "have.text",
      "The email has already been taken."
    );
    //cy.contains('Register Today').click({timeout: 10000})
  });
} )