Feature: Search patient by name
  @smoke @search
  Scenario Outline: Find by name
    Given I am on the Patients board
    When I search for "<query>"
    Then I should see "<expected>"
    Examples:
      | query | expected   |
      | João  | João Silva |
      | Joao  | João Silva |
