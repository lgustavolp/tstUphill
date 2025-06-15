Feature: Switch UI language
  @i18n @l10n
  Scenario: English ↔ Portuguese toggle
    Given I open the language menu
    When I choose "English"
    Then the UI appears in English
    When I choose "Português"
    Then the UI appears in Portuguese
