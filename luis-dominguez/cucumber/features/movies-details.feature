Feature: Movie Details Page

  Background: Navigate and search the "Batman Movie"
    Given I am on the home page
    When on the navbar I search "The Batman"
    And In the search page I click on "The Batman" Title

  Scenario: In Batman details I should validate that the Director is "Matt Reeves" & and that "Robert Pattison" is 1 of the actors
    Then I should read that the Director is "Matt Reeves" & and that "Robert Pattinson" is 1 of the actors

  Scenario: In Batman details I should validate the IMDB score of Batman is "8.1" Stars
    Then I should validate that the IMDB score of Batman is "8.1"

  Scenario: In Batman details I should validate that the movie genres are "Action", "Crime" & "Drama"
    Then I should validate that the movie genres are "<Genre>"
    Examples:
      | Genre  |
      | Action |
      | Crime  |
      | Drama  |