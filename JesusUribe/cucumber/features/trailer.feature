@Trailer
Feature: Movie Trailer Page

    Background: Navigate to the "Batman Movie" and play the trailer
        Given I am on the home page
        And on the navbar I search "The Batman"
        And on the results page select "The Batman"
		And I click on play trailer and a new page opens
	
	Scenario: Validate an ad is running
		Then check that an ad is running