Feature: "The Batman" Movie Details Page

  Scenario Outline: As a user, I should be able the see if director is Matt Reeves & and than Robert Pattison is 1 of the "Stars"
    Given I am on the home page
    When on the navbar I search "The Batman"
    Then on the page I select "The Batman" movie
    Then I should see the director "Matt Reeves" 
    Then I should see the star "Robert Pattinson"

  Scenario Outline: As a user, I should be able the see the ranking of the movie "8.1"
    Given I am on the home page
    When on the navbar I search "The Batman"
    Then on the page I select "Batman" movie
    Then I should see that the ranking is "8,1"
        
  Scenario Outline: Validate that the movie genres are "Action", "Crime" & "Drama"
    Given I am on the home page
    When on the navbar I search "The Batman"
    Then on the page I select "The Batman" movie
    Then I should see genre "<Genre>"

    Examples:
      | Genre  |
      | Action | 
      | Crime  |
      | Drama  |



