# QA project with Cucumber. 

The testing of the page IMDB was realized with cucumber,  and we were to validate the following Scenarios.
Scenarios:
            1. Validate the Director is Matt Reeves & and than Robert Pattison is the actor
            2. Validate the IMDB Ranking is 8.1 Stars
            3. Validate that the movie genres are "Action", "Crime" & "Drama"


## 1. For the first scenario we proceeded with the following outline.
    Given I am on the home page
    And on the navbar I search "The Batman"
    When on the page I select "The Batman"
    Then I should see the director "Matt Reeves" 
    Then  I should see the star "Robert Pattison"

![448b5083-3f6a-4046-ae37-1914b3e390e6](https://user-images.githubusercontent.com/94151927/166002392-67733d6f-dd80-4ad7-bf8f-e7ecd4062877.jpg)






Scenario 1- passed all the tests

## 2. For the second scenario we proceeded with the following outline. 

  Scenario Outline: As a user, I should be able the see the ranking of the movie "8.1"
    Given I am on the home page
    When on the navbar I search "The Batman"
    Then on the page I select "Batman" movie
    Then I should see that the ranking is "8.1"

![0663b706-e2d3-4957-99b5-4a0fd31da19a](https://user-images.githubusercontent.com/94151927/166002108-fdfd6c00-994f-4df3-a93f-72e1f6fbc642.jpg)


Scenario 2- passed all the tests

## 3. For the third scenario we proceeded with the following outline. 
 

  Scenario Outline: Validate that the movie genres are "Action", "Crime" & "Drama"
    Given I am on the home page
    When on the navbar I search "The Batman"
    Then on the page I select "The Batman" movie
    Then I should see genre "<Genre>"

    Examples:
      | Genre  |
      | Action  | 
      | Crime   |
      | Drama  |

![aba4f447-a1b4-4868-98e9-531196b472e0](https://user-images.githubusercontent.com/94151927/166002087-dfd038e8-042f-4d5d-b2d9-140bab72be11.jpg)
  
 Scenario 3- passed all the test.
In conclusion, all the Scenarios and Scenario outlines passed with 0 errors  meaning that the testing and page project were a success. 

![acfa1829-c7c1-494c-9c82-9f58b31ff1af](https://user-images.githubusercontent.com/94151927/166001945-222254f3-030a-4298-8b14-2735024c0bb5.jpg)

### Teamwork división:
**Roberto Jaime** and **Francisco Javier**, worked on the first Scenario mostly by peer programing ,  where **Roberto** focused on fixing the bugs  and developing the first half of reaching the page of the movie of batman, and **Francisco Javier** focused on entering to the movie batman and validating that the director Matt Reeves and actor Robert pattison where there.  

**Sergio Mijares** focused on the second part of validating that the ranking is 8.1 stars, any bug presented was fixed with the team by peer programing. 

**Omar Caleb Corpus** and **Marco Hernandez**, by peer programming, focused on the 3rd part by validating the movie genres of “Action”, “Crime” and “Drama”. 
**Caleb Corpus** focused on validating Action and Crime , while **Marco focused** on validating Drama.   Any bugs presented were fixed with the whole team. 

The Github was done through branches with every scenario being one branch, at the time of the merging: the branches were merged by **Francisco Javier**. 
