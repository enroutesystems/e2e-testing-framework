Feature: Movie Details Page

    Background: Navigate and search the "Batman Movie"
        Given I am on the home page
        And on the navbar I search "The Batman" and click in the first result
        And on the results page select "The Batman"
        And on the movie details page the director should be Matt Reeves and the actor should be Robert Pattison
        
    Scenario: Validate Ranking
        Then on the datails page the ranking should be "8.1"
        
    Scenario: Validate the genres
        Then verify genres matches "<Genre>"
        Examples:
            | Genre  |
            | Acción |
            | Crimen |
            | Drama |

        
        
