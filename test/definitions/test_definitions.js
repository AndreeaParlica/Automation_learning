import { Given, When, Then } from '@cucumber/cucumber';
import TestPageObject from "../pageobjects/test_page_object.js";

Then(/^I validate that the "([^"]*)" has the following text: 5"([^"]*)"$/, async function (element, text){
  await TestPageObject.validateText(element, text);
});

When(/^I change the language to "([^"]*)"$/, async function (language){
  await TestPageObject.changeLanguage(language);
});

Then(/^I check the preffix "([^"]*)"$/, async function (preffix){
  await TestPageObject.checkPrefix(preffix);
});

When(/^I search without inserting a destination i see the error message "([^"]*)"$/, async function (error){
  await TestPageObject.errorCheck(error);
});


Given(/^I check the error message "([^"]*)"$/, async function (message){
  await TestPageObject.checkErrorText(message);
});

When(/^I search for a random destination$/, async function (){
  await TestPageObject.searchForDestination();
});

When(/^I book a holiday for 7 days starting with "([^"]*)"$/, async function (date){
  await TestPageObject.setTheHolidayPeriod(date);
});

When(/^I insert a random number of travelers$/, async function (){
  await TestPageObject.insertNumberOf();
});

When(/^I click the search button$/, async function (){
  await TestPageObject.clickOnSearchButton();
});
When(/^I sort the results by price$/, async function (){
  await TestPageObject.clickOnSortButton();
});
Then(/^I check that the hotels are sorted in ascending order by price$/, async function (){
  await TestPageObject.checkThatHotelsAreSortedByPriceAscending();
});

///pt UKR
When(/^I click on the button, I go to MyRequest page$/, async function (){
  await TestPageObject.clickOnViewTourRequests();
});


When(/^I navigate to the last page and back to the first one$/, async function (){
  await TestPageObject.navigateToLastAmazonPage();
});

When(/^I navigate to the page "([^"]*)" of the Amazon chairs page$/, async function (pageNumber){
  await TestPageObject.navitageToNthPage(pageNumber);
});

