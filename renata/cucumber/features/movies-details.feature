Feature: Movie Details Page
    Background: Navigate and search the "Batman Movie"
        Given I am on the home page
        When on the navbar I search movie "The Batman"
        Then I select the movie

    Scenario: Check if the director is Matt Reeves and Robert Pattinson the actor.
        Then check if the director is "Matt Reeves"
        Then check if the actor is "Robert Pattinson"

    Scenario: Validate the IMDB Ranking is 8.1 Stars
        Then check if the movie has "8.1" stars
        
    Scenario: Validate Genres
        Then check if the movie has the genre of "Acción"
        Then check if the movie has the genre of "Crimen"
        Then check if the movie has the genre of "Dorama"
