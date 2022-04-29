Feature: Movie Details Page

    Scenario: Navigate and search the "Batman Movie"
        Given I am on the home page
        When on the navbar I search "The Batman" and click in the first result
        Then on the movie details page the director should be Matt Reeves and the actor should be Robert Pattison
        
    Scenario: The Ranking of The batman Movie    
        And the IMDB Ranking is "8.1"

        
