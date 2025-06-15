Feature: Offline search error
  @error @network
  Scenario: Show banner when search fails offline
    Given the API is offline
    When I search for "Maria"
    Then an error banner is displayed
