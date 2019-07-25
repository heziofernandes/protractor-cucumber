Feature: Register a new user in the system
  	In order to complete registration
  	As User
    I want to register in the system

  Background: Access the registration form
    Given Im user logged in

  @OutlineScenario
  Scenario Outline:: Performs registration form
    When I insert a name
    And I insert a login
    And I inform a password
    When I inform an email
    And I insert a main address
    And I inform additional address details
    And I select an "<Education>"
    And I select a "<Course>" of interest
    And I save the form
    Then the system should inform, register successfully

    Examples:
    |Education       |Course      | 
    |Technician      |Java        |
    |Bachelor        |Java Script |
    |Master          |Python      |
    |Doctorate       |PHP         |
    |Highlander      |C#          |