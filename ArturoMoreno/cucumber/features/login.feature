Feature: Search Input

  Scenario Outline: As a user, I should be able to search by Category
    Given I am on the home page
    When on the navbar I select category "<Category>"
    Then I should see the category dropdown now matches "<Category>"

    Examples:
      | Category    |
      | All         | 
      | Titles      |
      | TV Episodes |
