Feature: Homepage
 
   Automated tests for Hotels website homepage
 
   @test1
   Scenario: Access the Homepage
      Given I access the URL "https://www.hotels.com/?locale=en_IE&pos=HCOM_EMEA&siteid=300000025"

   @test2
   Scenario: Validate the text
      Given I validate the TEXT "Travel with confidence"

   @test3
   Scenario: Change language to Deutsch
      Given I change the LANGUAGE "Deutsch"
      
  @test4
  Scenario: Trigger error
      Given I trigger an ERROR "error"

   @test5
   Scenario: Check error message
      Given I check the error MESSAGE "Please select a destination"

   @test6
   Scenario: Book a holiday
      Given I book a HOLIDAY "destination"