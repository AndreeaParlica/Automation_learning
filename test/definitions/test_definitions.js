import { Given } from '@cucumber/cucumber';
import TestPageObject from "../pageobjects/test_page_object.js";
 
Given(/^I access the URL "([^"]*)"$/, async function (url) {
  await TestPageObject.openURL(url);
});

Given(/^I validate the text "([^"]*)"$/, async function (text){
  await TestPageObject.validateText(text);
});

Given(/^I change the language "([^"]*)"$/, async function (language){
  await TestPageObject.changeLanguage(language);
});

Given(/^I trigger an error "([^"]*)"$/, async function (error){
  await TestPageObject.errorCheck(error);
});

Given(/^I check the error message "([^"]*)"$/, async function (message){
  await TestPageObject.checkErrorText(message);
});

Given(/^I book a holiday "([^"]*)"$/, async function (destination){
  await TestPageObject.bookHoliday(destination);
});