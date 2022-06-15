import { Given, When, Then } from '@cucumber/cucumber';
import TestPageObject from "../pageobjects/test_page_object.js";
 
Given(/^I access the URL "([^"]*)"$/, async function (url) {
  await TestPageObject.openURL(url);
});

Then(/^I validate the text "([^"]*)"$/, async function (text){
  await TestPageObject.validateText(text);
});

When(/^I change the language to "([^"]*)"$/, async function (language){
  await TestPageObject.changeLanguage(language);
});

Then(/^I check the preffix "([^"]*)"$/, async function (preffix){
  await TestPageObject.checkPrefix(preffix);
});

When (/^I search without inserting a destination i see the error message "([^"]*)"$/, async function (error){
  await TestPageObject.errorCheck(error);
});


Given(/^I check the error message "([^"]*)"$/, async function (message){
  await TestPageObject.checkErrorText(message);
});

Given(/^I book a holiday "([^"]*)"$/, async function (destination){
  await TestPageObject.bookHoliday(destination);
});