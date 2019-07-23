Feature: Register a new user in the system
  	In order to complete registration
  	As User
    I want to register in the system

  Background: Access the registration form
    Given Im user logged in

  @CucumberScenario
  Scenario: Performs registration form
    When I insert a name
    And I insert a login
    And I inform a password
    When I inform an email
    And I insert a main address
    And I inform additional address details
    And I select an education training
    And I select a course of interest
    And I save the form
    Then the system should inform, register successfully