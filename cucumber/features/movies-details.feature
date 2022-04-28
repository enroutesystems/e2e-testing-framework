Feature: Movie Details Page

    Scenario: Navigate and search the "Batman Movie"
        Given I am on the home page
        And on the navbar I search "The Batman"
        When on the result page I select "The Batman"
        Then I should see the details of the movie "The Batman"


    Examples:
      | Category    |
      | All         | 
      | Titles      |
      | TV Episodes |
        
