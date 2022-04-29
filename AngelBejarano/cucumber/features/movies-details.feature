Feature: Movie Details Page

  Background: Navigate and search the "Batman Movie"
    Given I am on the home page
    When on the navbar I search "The Batman"
    And In the search page I click on "The Batman" Title

  Scenario: In Batman details I should validate that the Director is Matt Reeves & and than Robert Pattison is 1 of the actors
    Then I should read that the Director is "Matt Reeves" & and than "Robert Pattinson" is 1 of the actors

  Scenario: In Batman details I should verify that the Validate the IMDB Ranking of Batman is 8.1 Stars
    Then I should verify that the Validate the IMDB Ranking of Batman is "8.1"

  Scenario: In Batman details I should validate that the movie genres are "Action", "Crime" & "Drama"
    Then I should Validate that the movie genres is "<Genre>"
    Examples:
      | Genre  |
      | Action |
      | Crime  |
<<<<<<< HEAD
      | Drama  |
=======
      | Drama  |
>>>>>>> 2e70f025ffa6958b62f7574afbc2844704f40263
