Feature: Movie Ranking 
    Scenario: Validate the IMDB Ranking is 8.1 Stars
        Given I am on the home page
        When on the navbar I search "The Batman"
        And on the list page click "The Batman" 
        Then verify if we are in thebatman page
        And validate the ranking in the IMDB is "8.1"