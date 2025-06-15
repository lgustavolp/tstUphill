Feature: Filter by Communication Status
  @smoke @filter
  Scenario: Filter scheduled journeys
    Given I am on the Patients board
    When I filter by status "Scheduled"
    Then only "Scheduled" cards are shown