Feature: Homepage
 
   Automated tests for Hotels website homepage
 
   @test1
   Scenario: Access the Homepage
      Given I access the URL "https://www.hotels.com/?locale=en_IE&pos=HCOM_EMEA&siteid=300000025"

   @test2
   Scenario: Validate the TEXT
      Given I access the URL "https://www.hotels.com/?locale=en_IE&pos=HCOM_EMEA&siteid=300000025"
      Then I validate the text "Travel with confidence"

   @test3
   Scenario: Change language to Deutsch
      Given I access the URL "https://www.hotels.com/?locale=en_IE&pos=HCOM_EMEA&siteid=300000025"
      When I change the language to "Deutsch"
      Then I check the preffix "Deutschland +49"
      
  @test4
  Scenario: Trigger error
      Given I access the URL "https://www.hotels.com/?locale=en_IE&pos=HCOM_EMEA&siteid=300000025"
      When I search without inserting a destination i see the error message "Please select a destination"

  
   # @test6
   # Scenario: Book a holiday
   #    Given I book a HOLIDAY "destination"