Feature: End to End Testing


    application Regression
    @Regression
    Scenario: First Name Blank
    Given Open Trualta Login page
    When Profile page displayed
    Then Submit and verify The first name field.

    @Smoke
    Scenario: Filling the form with the first name blank
    Given Open Trualta Login page
    When Profile page displayed
    Then Submit Data
    And Verify The first name field.

    