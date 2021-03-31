import LoginPage from "../../support/SyncupPageObjects/LoginPage";
import TimeEntry from "../../support/SyncupPageObjects/TimeEntry";
import BackDate from "../../support/SyncupPageObjects/BackDate";
Cypress.config("pageLoadTimeout", 1000000);

describe("SyncUP Full Negative Test Sute", function () {
  before(function () {
    cy.log(
      "************* runs once before all tests in the block ****************"
    );

    cy.fixture("SyncupData/Syncup.json").then(function (data) {
      this.data = data;
    });
  });

  beforeEach(() => {
    cy.log("************* This is Login blog ****************");

    cy.clearCookies();
    //cy.visit(Cypress.env("url"));
    //Login add from PageObject
    const Login = new LoginPage();
    Login.visit();
    Login.fillUserName(Cypress.env("email"));
    Login.fillUserPass(Cypress.env("password")).submit({ timeout: 10000 });

    //cy.SyncUPEntry('','')
  });

  it("Test Case1: Click on + button without enter data", function () {
    const timeEntry = new TimeEntry();
    cy.location("protocol", { timeout: 10000 }).should("eq", "https:");
    cy.url().should("include", "time/add", { timeout: 10000 });
    cy.title().should("be.equal", "My timesheet - Sync Up", { timeout: 10000 });
    timeEntry.getTimeSet().click();
    timeEntry
      .getErrorDescription1()
      .should("have.text", "The description field is required");
    timeEntry
      .getEmptyProject()
      .should("have.text", "You need to select a project");
    timeEntry
      .getEmptyCategory()
      .should("have.text", "You need to select a category");
    timeEntry
      .getEmptyTags()
      .should("have.text", "You need to select at least one tag");
    cy.wait(3000);
    cy.reload();
  });

  it("Test Case2: Adding Time Entry without description", function () {
    cy.log("************* Adding Entry ****************");
    //cy.reload(true);
    //cy.wait(500);
    const timeEntry = new TimeEntry();
    cy.location("protocol", { timeout: 10000 }).should("eq", "https:");
    cy.title().should("be.equal", "My timesheet - Sync Up", { timeout: 10000 });
    cy.url().should("include", "time/add");

    timeEntry
      .getDescription({ timeout: 10000 })
      .type(this.data.TimeDescriptionBlank);

    cy.get("div.TimeEntryDescription__container").then((placeholder) => {
      expect(placeholder.text()).to.equal("");
    });

    timeEntry.getProject({ timeout: 10000 }).type(this.data.TimeEntryProject);
    timeEntry.getclickCategory().click();
    cy.wait(500);
    timeEntry.getCategoryList().type(this.data.TimeEntryCategory);
    cy.wait(500);
    timeEntry.getSetCategory().click();
    cy.wait(1000);
    timeEntry.getTagsList().type(this.data.TimeEntryTag);
    cy.wait(500);

    cy.get("div .Dropdown__value").each(($el, index, $list) => {
      if ($el.text().includes("Testing")) {
        // $el.click()
        cy.get("div .Dropdown__value").eq(index).click();
      }
    });

    // custom commands
    //cy.selectTags(this.data.TimeEntryTag)
    timeEntry.getTimes().type(this.data.Timer);
    cy.wait(500);
    timeEntry.getTimeSet().click();
    timeEntry
      .getErrorDescription1()
      .should("have.text", "The description field is required");
    cy.wait(2000);
  });

  it.only("Test Case3: Adding Entry with description less than 5 characters long", function () {
    cy.log("************* Adding Entry ****************");
    const timeEntry = new TimeEntry();
    cy.location("protocol", { timeout: 10000 }).should("eq", "https:");
    cy.title().should("be.equal", "My timesheet - Sync Up", { timeout: 10000 });
    cy.url().should("include", "time/add");

    timeEntry.getDescription({ timeout: 1000 }).type(this.data.TimeDescription)
    //cy.get('.content').focus()
    //cy.wrap(timeEntry.getDescription).invoke("prop", "_value").should('contain', 'this.data.TimeDescription');
    /*
    cy.get('div.TimeEntryDescription__container').invoke('text').then( text => {
      expect('text()').to.equal('this.data.TimeDescription')

    })
    */
    
    /*
    //cy.contains('div.TimeEntryDescription__timeEntryDescription').find('input[type="text"]').then( input => {
    //cy.contains('.TimeEntryForm__newTimeEntry', '.TimeEntryDescription__container').find('input').then( input => {
    //cy.get('.TimeEntryDescription__container').find('.TimeEntryDescription__timeEntryDescription > input').then( input => {
      cy.get('div.TimeEntryDescription__timeEntryDescription').find('input[type="text"]').then( input => {
    //cy.get('.TimeEntryDescription__container').find('.TimeEntryDescription__timeEntryDescription > input').then( input => {  
      cy.wrap(input).click()
      cy.get('.TimeEntryDescription__timeEntryDescription').should('be.visible').should('be.enabled',).type(this.data.TimeDescription);
      //timeEntry.getDescription({timeout: 1000}).type(this.data.TimeDescription);
      cy.wrap(input).invoke('prop','_value').should('contain', 'this.data.TimeDescription')
    })
    */
    
    

    timeEntry.getProject().type(this.data.TimeEntryProject);
    //div.TimeEntryProject__container div.Dropdown__Wrapper
    timeEntry.getclickCategory().click();
    timeEntry.getCategoryList().type(this.data.TimeEntryCategory);
    cy.wait(500);
    timeEntry.getSetCategory().click();
    cy.wait(1000);
    timeEntry.getTagsList().type(this.data.TimeEntryTag);
    cy.wait(500);

    cy.get("div .Dropdown__value").each(($el, index, $list) => {
      if ($el.text().includes("Testing")) {
        // $el.click()
        cy.get("div .Dropdown__value").eq(index).click();
      }
    });

    // custom commands
    //cy.selectTags(this.data.TimeEntryTag);
    timeEntry.getTimes().type(this.data.Timer);
    cy.wait(500);
    timeEntry.getTimeSet().click();
    timeEntry
      .getErrorDescription1()
      .should(
        "have.text",
        "Your description should be at least 5 characters long"
      );
    cy.wait(2000);
  });

  it("Test Case4: Adding Entry without Project", function () {
    cy.log("************* Adding Entry ****************");
    const timeEntry = new TimeEntry();
    cy.location("protocol", { timeout: 10000 }).should("eq", "https:");
    timeEntry.getDescription().type(this.data.TimeEntryDescription);
    //timeEntry.getclickCategory().click()
    cy.wait(500);
    timeEntry.getCategoryList().type(this.data.TimeEntryCategory);
    cy.wait(500);
    timeEntry.getSetCategory().click();
    cy.wait(1000);
    timeEntry.getTagsList().type(this.data.TimeEntryTag);
    cy.wait(500);
    cy.get("div .Dropdown__value").each(($el, index, $list) => {
      if ($el.text().includes("Testing")) {
        // $el.click()
        cy.get("div .Dropdown__value").eq(index).click();
      }
    });
    // custom commands
    //cy.selectTags(this.data.TimeEntryTag);
    timeEntry.getTimes().type(this.data.Timer);
    cy.wait(500);
    timeEntry.getTimeSet().click();
    timeEntry
      .getEmptyProject()
      .should("have.text", "You need to select a project");
    cy.wait(2000);
  });

  it("Test Case5: Adding Entry without Category and Tags", function () {
    cy.log("************* Adding Entry ****************");
    const timeEntry = new TimeEntry();
    cy.location("protocol", { timeout: 10000 }).should("eq", "https:");
    timeEntry
      .getDescription()
      .should("be.visible")
      .should("be.enabled")
      .type(this.data.TimeEntryDescription);
    timeEntry.getProject().type(this.data.TimeEntryProject);
    timeEntry.getclickCategory().click();
    timeEntry.getTimes().type(this.data.Timer);
    timeEntry.getTimeSet().click();
    timeEntry
      .getEmptyCategory()
      .should("have.text", "You need to select a category");
    timeEntry
      .getEmptyTags()
      .should("have.text", "You need to select at least one tag");
    cy.wait(4000);
  });

  it("Test Case6: Adding Entry without Tags", function () {
    cy.log("************* Adding Entry ****************");
    const timeEntry = new TimeEntry();
    cy.location("protocol", { timeout: 10000 }).should("eq", "https:");
    timeEntry.getDescription().type(this.data.TimeEntryDescription);
    timeEntry.getProject().type(this.data.TimeEntryProject);
    timeEntry.getclickCategory().click();
    cy.wait(500);
    timeEntry.getCategoryList().type(this.data.TimeEntryCategory);
    cy.wait(500);
    timeEntry.getSetCategory().click();
    cy.wait(1000);
    timeEntry.getTimes().type(this.data.Timer);
    timeEntry.getTimeSet().click();
    timeEntry
      .getEmptyTags()
      .should("have.text", "You need to select at least one tag");
    cy.wait(1000);
  });

  it("Test Case7: Blank BACK DATE Entry", function () {
    cy.log("************* Adding blank Back date Entry ****************");
    const backDate = new BackDate();
    cy.location("protocol", { timeout: 10000 }).should("eq", "https:");
    backDate.getbackdateEntry().click().should("be.visible");
    backDate.getSaveButton().click();
    backDate.getConfirmbtn().click();
    backDate
      .getDescriptionError()
      .should("have.text", "The description field is required");
    backDate
      .getCategorieError()
      .should("have.text", "You need to select a category");
    backDate
      .getTagError()
      .should("have.text", "You need to select at least one tag");
  });

  it("Test Case8: Adding Blank Description", function () {
    cy.log("************* Adding Back date Entry ****************");
    const backDate = new BackDate();
    cy.location("protocol", { timeout: 10000 }).should("eq", "https:");
    backDate.getbackdateEntry().click().should("be.visible");
    backDate.getProject().type(this.data.SelectProject).should("be.visible");
    backDate
      .getCategories()
      .type(this.data.SelectCategories)
      .should("be.visible");
    backDate.getTags().should("be.visible").type(this.data.MultiSelectTags);
    cy.tagSelect(this.data.MultiSelectTags);
    backDate.getTagsVerify().should("have.value", this.data.MultiSelectTags);
    cy.wait(500);

    backDate.getDate();
    backDate.getCalendar().contains(this.data.BackDate).click();
    backDate
      .getTimes()
      .dblclick()
      .clear()
      .type(this.data.BackTime)
      .should("be.visible")
      .click();
    backDate.getSaveButton().click();
    backDate.getConfirmbtn().click();
    backDate
      .getDescriptionError()
      .should("have.text", "The description field is required");
  });

  it("Test Case9: Adding Description less than 5 character", function () {
    cy.log("************* Adding Back date Entry ****************");
    const backDate = new BackDate();
    cy.location("protocol", { timeout: 10000 }).should("eq", "https:");
    backDate.getbackdateEntry().click().should("be.visible");
    backDate
      .getDescriptions()
      .focus()
      .click()
      .type(this.data.TimeDescription)
      .should("be.visible");
    backDate.getProject().type(this.data.SelectProject).should("be.visible");
    backDate
      .getCategories()
      .type(this.data.SelectCategories)
      .should("be.visible");
    backDate.getTags().should("be.visible").type(this.data.MultiSelectTags);
    cy.tagSelect(this.data.MultiSelectTags);
    backDate.getTagsVerify().should("have.value", this.data.MultiSelectTags);
    cy.wait(500);
    backDate.getDate();
    backDate
      .getCalendar()
      .contains(this.data.BackDate)
      .should("be.visible")
      .click();
    backDate
      .getTimes()
      .dblclick()
      .clear()
      .type(this.data.BackTime)
      .should("be.visible");

    backDate.getSaveButton().click();
    backDate.getConfirmbtn().click();
    backDate
      .getDescriptionError()
      .should(
        "have.text",
        "Your description should be at least 5 characters long"
      );
  });

  it("Test Case10: Adding BackDate entry without Categories", function () {
    cy.log("************* Adding Back date Entry ****************");
    const backDate = new BackDate();
    cy.location("protocol", { timeout: 10000 }).should("eq", "https:");
    backDate.getbackdateEntry().click().should("be.visible");
    backDate
      .getDescriptions()
      .focus()
      .click()
      .type(this.data.BackDateDescription)
      .should("be.visible");
    backDate.getProject().type(this.data.SelectProject).should("be.visible");
    cy.wait(500);
    backDate.getDate();
    backDate
      .getCalendar()
      .contains(this.data.BackDate)
      .should("be.visible")
      .click();
    //backDate.getDate(this.data.BackDate).invoke('Accessibilty','Value').should('contain','2020-10-01')
    backDate
      .getTimes()
      .dblclick()
      .clear()
      .type(this.data.BackTime)
      .should("be.visible");

    backDate.getSaveButton().click();
    backDate.getConfirmbtn().click();
    backDate
      .getCategorieError()
      .should("have.text", "You need to select a category");
    backDate
      .getTagError()
      .should("have.text", "You need to select at least one tag");
  });

  it("Test Case11: Full negetive testing", function () {
    cy.log("************* Click on + button ****************");
    const timeEntry = new TimeEntry();
    cy.location("protocol", { timeout: 10000 }).should("eq", "https:");
    cy.url().should("include", "time/add", { timeout: 10000 });
    cy.title().should("be.equal", "My timesheet - Sync Up", { timeout: 10000 });
    timeEntry.getTimeSet().click();
    timeEntry
      .getErrorDescription1()
      .should("have.text", "The description field is required");
    timeEntry
      .getEmptyProject()
      .should("have.text", "You need to select a project");
    timeEntry
      .getEmptyCategory()
      .should("have.text", "You need to select a category");
    timeEntry
      .getEmptyTags()
      .should("have.text", "You need to select at least one tag");
    cy.wait(3000);
    cy.reload();

    cy.log(
      "************* Adding Time Entry without description ****************"
    );

    timeEntry
      .getDescription({ timeout: 10000 })
      .type(this.data.TimeDescriptionBlank);

    cy.get("div.TimeEntryDescription__container").then((placeholder) => {
      expect(placeholder.text()).to.equal("");
    });

    timeEntry.getProject({ timeout: 10000 }).type(this.data.TimeEntryProject);
    timeEntry.getclickCategory().click();
    cy.wait(500);
    timeEntry.getCategoryList().type(this.data.TimeEntryCategory);
    cy.wait(500);
    timeEntry.getSetCategory().click();
    cy.wait(1000);
    timeEntry.getTagsList().type(this.data.TimeEntryTag);
    cy.wait(500);

    cy.get("div .Dropdown__value").each(($el, index, $list) => {
      if ($el.text().includes("Testing")) {
        // $el.click()
        cy.get("div .Dropdown__value").eq(index).click();
      }
    });

    // custom commands
    //cy.selectTags(this.data.TimeEntryTag)
    timeEntry.getTimes().type(this.data.Timer);
    cy.wait(500);
    timeEntry.getTimeSet().click();
    timeEntry
      .getErrorDescription1()
      .should("have.text", "The description field is required");
    cy.wait(2500);
    cy.reload();


    cy.log("************* Adding Entry with description less than 5 characters long ****************");

    timeEntry.getDescription({ timeout: 1000 }).type(this.data.TimeDescription);

    timeEntry.getProject().type(this.data.TimeEntryProject);
    //div.TimeEntryProject__container div.Dropdown__Wrapper
    timeEntry.getclickCategory().click();
    timeEntry.getCategoryList().type(this.data.TimeEntryCategory);
    cy.wait(500);
    timeEntry.getSetCategory().click();
    cy.wait(1000);
    timeEntry.getTagsList().type(this.data.TimeEntryTag);
    cy.wait(500);

    cy.get("div .Dropdown__value").each(($el, index, $list) => {
      if ($el.text().includes("Testing")) {
        // $el.click()
        cy.get("div .Dropdown__value").eq(index).click();
      }
    });

    // custom commands
    //cy.selectTags(this.data.TimeEntryTag);
    timeEntry.getTimes().type(this.data.Timer);
    cy.wait(500);
    timeEntry.getTimeSet().click();
    timeEntry
      .getErrorDescription1()
      .should(
        "have.text",
        "Your description should be at least 5 characters long"
      );
    cy.wait(2500);
    cy.reload();
    

    cy.log("************* Adding Entry without Project ****************");
    timeEntry.getDescription().type(this.data.TimeEntryDescription);
    //timeEntry.getclickCategory().click()
    cy.wait(500);
    timeEntry.getCategoryList().type(this.data.TimeEntryCategory);
    cy.wait(500);
    timeEntry.getSetCategory().click();
    cy.wait(1000);
    timeEntry.getTagsList().type(this.data.TimeEntryTag);
    cy.wait(500);
    cy.get("div .Dropdown__value").each(($el, index, $list) => {
      if ($el.text().includes("Testing")) {
        // $el.click()
        cy.get("div .Dropdown__value").eq(index).click();
      }
    });
    // custom commands
    //cy.selectTags(this.data.TimeEntryTag);
    timeEntry.getTimes().type(this.data.Timer);
    cy.wait(500);
    timeEntry.getTimeSet().click();
    timeEntry
      .getEmptyProject()
      .should("have.text", "You need to select a project");
    cy.wait(2000);


  });

  afterEach(() => {
    cy.log("************* This is Logout blog ****************");
    const loginPage = new LoginPage();
    loginPage.fullName().click();
    loginPage.logOut().click();
  });

  after(() => {
    // runs once after all tests in the block
  });
});
