Feature: Homepage
 
   Automated tests for Hotels website homepage
 
   @test1
   Scenario: Access the Homepage
      Given I access the URL "https://www.hotels.com/?locale=en_IE&pos=HCOM_EMEA&siteid=300000025"
      # When I generate a random string with "8" characters
      When I test date

   @test2
   Scenario: Validate the TEXT
      Given I access the URL "https://www.hotels.com/?locale=en_IE&pos=HCOM_EMEA&siteid=300000025"
      Then I validate that the "the H2 paragraph" has the following text: "Travel with confidence"

   @test3
   Scenario: Change language to Deutsch
      Given I access the URL "https://www.hotels.com/?locale=en_IE&pos=HCOM_EMEA&siteid=300000025"
      When I change the language to "Deutsch"
      Then I check the preffix "Deutschland +49"
      
  @test4
  Scenario: Trigger error
      Given I access the URL "https://www.hotels.com/?locale=en_IE&pos=HCOM_EMEA&siteid=300000025"
      When I search without inserting a destination i see the error message "Please select a destination"

  
   @test5
   Scenario: Book a holiday
      Given I access the URL "https://www.hotels.com/Hotel-Search?adults=3&d1=2022-06-27&d2=2022-07-04&destination=Valencia%2C%20Valencian%20Community%2C%20Spain&directFlights=false&endDate=2022-07-04&latLong=39.47215%2C-0.37679&localDateFormat=dd%2FMM%2Fy&partialStay=false&regionId=3713&semdtl=&sort=RECOMMENDED&startDate=2022-06-27&theme=&useRewards=false&userIntent="
      # When I search for a random destination
      # When I book a holiday for 7 days starting with "27 Jun 2022"
      # When I insert a random number of travelers
      # When I click the search button
      When I sort the results by price
      Then I check that the hotels are sorted in ascending order by price
      # Then I filter and sort the results

   @test6
   Scenario: Check the dashboard
      Given I access the URL "https://dev.ukraineglobalresponse.org/dashboard"
      When I click on the button, I go to MyRequest page


   @test7
   Scenario: Amazon pagination
      Given I access the URL "https://www.amazon.com/s?k=chair&crid=NJNDHCQ72GU7&qid=1660819778&sprefix=chair%2Caps%2C183&ref=sr_pg_1"
      # When I scroll to element "Amazon Next Pagination Button" from "Amazon" page
      # When I navigate to the last page and back to the first one
      When I navigate to the page "4" of the Amazon chairs page
      When I navigate to the page "9" of the Amazon chairs page
      # When I navigate to the page "6" of the Amazon chairs page
      # When I navigate to the a certaint page



