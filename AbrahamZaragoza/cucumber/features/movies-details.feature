Feature: Movie Details Page

    Background: Navigate and search the "Batman Movie"
        Given I am on the home page
        And on the navbar I search "The Batman"
        And on the results page select "The Batman"
    
    
    Scenario: Validate the Director and main Star
        And on the details page I verify the Director as "Matt Reeves"
        Then on details page I verify the main star as "Robert Pattinson"
    
    @SmokeTest
    Scenario: Validate the IMDB Score
        Then on details page verify IMBD Score as "8.1"
    
    Scenario: Validate The Batman Movie Genres
        Then on details page verify genres matches "<Genre>"
        Examples:
            | Genre    |
            | Action   | 
            | Crime    |
            | Drama    |