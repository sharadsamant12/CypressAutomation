class CaregiverUser {
  getProfiles() {
    return cy
      .get(".dropdown-menu.profile-drop-down")
      .should("be.hidden")
      .invoke("show");
  }

  getMyProfile() {
    return cy
      .get('.drop-down-inner > [href="http://beta.trualta.com/profile"]')
      .should("be.visible");
  }

  getFirstName() {
    return cy.get(":nth-child(3) > .control > .input");
  }

  getSave() {
    return cy.get(".control > .button");
  }

  getEmail() {
    return cy.get(":nth-child(5) > .control > .input");
  }

  getResidency() {
    return cy.get(":nth-child(14) > .control > .input");
  }

  getPhone() {
    return cy.get(":nth-child(7) > .control > .input");
  }

  getState() {
    return cy.get("#state_id");
  }

  getMytopics() {
    return cy.contains("My topics");
  }

  getMyDashboard() {
    return cy.contains("My Dashboard");
  }

  getCaregiver() {
    return cy.get("ul.nav-tabs").children().contains("Invited caregivers");
  }

  getAddNewCaregiver() {
    return cy.get("ul.right-btn").children().contains("Add New Caregiver");
  }

  getTags() {
    return cy
      .get('.inline-field  > input[name="tags[26]"]')
      .check({ force: true });
  }

  getUncheckTags() {
    return cy
      .get('.inline-field  > input[name="tags[26]"]')
      .uncheck({ force: true });
  }

  getTagSave() {
    return cy.get(".clearfix > .button");
  }

  getInviteFName() {
    return cy.get("#first_name");
  }

  getConfirm()
  {
    return cy.get(".swal2-confirm").should("be.visible");
  }

  getNotification()
  {
      return cy.get('#flash_notification')
  }

  getFirstNameError() {
    return cy.get(":nth-child(3) > .control > .help");
  }

  getTagSaveConformation() {
    return cy.get("#flash_notification");
  }

  getInviteFnameError() {
    return cy.get(":nth-child(1) > .modal-body > .md-form > .error");
  }

  getInviteLnameError() {
    return cy.get(":nth-child(2) > .modal-body > .md-form > .error");
  }

  getInvite(){
    return cy.get("#invite_cgs > .is-clearfix")
  }

  getInviteEmailError() {
    return cy.get(":nth-child(3) > .modal-body > .md-form > .error");
  }
}
export default CaregiverUser