beforeEach(function() {
    cy.fixture("TrualtaData/Trualta").then(function (data) {
        this.data = data;
      });
      
});
