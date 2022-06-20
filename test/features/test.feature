Feature: Homepage
 
   Automated tests for Hotels website homepage
 
   @test1
   Scenario: Access the Homepage
      Given I access the URL "https://www.hotels.com/?locale=en_IE&pos=HCOM_EMEA&siteid=300000025"

   @test2
   Scenario: Validate the TEXT
      Given I access the URL "https://www.hotels.com/?locale=en_IE&pos=HCOM_EMEA&siteid=300000025"
      Then I validate that the "the H2 paragraph:" has the following text: "Travel with confidence"

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
      Given I access the URL "https://www.hotels.com/?locale=en_IE&pos=HCOM_EMEA&siteid=300000025"
      When I search for a random destination
      When I book a holiday for 7 days starting with "27 Jun 2022"
      When I insert a random number of travelers
      Then I click the search button and view the filtered "results"
      # Then I filter and sort the results


