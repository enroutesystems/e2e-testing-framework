Feature: Movie Genre
    Scenario: Validate that the movie genres are "Action", "Crime" & "Drama"
        Given I am on the home page
        When on the navbar I search "The Batman"
        Then on the list page click "The Batman 2022"
        And verify if we are in thebatman page 
        And validate if movie has genre "Action" "1"
        # And validate that the movie genres are "Crime"
        # And validate that the movie genres are "Drama"

Examples:
| name | number |
| Action | 1 | 
| Crime | 2 |
| Drama | 3 |