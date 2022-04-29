Feature: Movie Details Page

    Background: Navigate and search "The Batman" Movie
        Given I am on the home page
        And on the navbar I search "The Batman"
        When on the result page I select "The Batman"
        And I see the details of the movie "The Batman"

    Scenario: Test
        Then I should see that the Director is "Matt Reeves" & the actor is "Robert Pattison"

    Scenario: Test2
        Then I should see that the IMDB Ranking is "8.1" Stars

    Scenario: Test3
        Then I should see that the movie genres are "Action" "Crime" & "Drama"