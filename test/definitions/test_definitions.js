import { Given, When, Then } from '@cucumber/cucumber';
import TestPageObject from "../pageobjects/test_page_object.js";

 
Given(/^I access the URL "([^"]*)"$/, async function (url) {
  await TestPageObject.openURL(url);
});

Then(/^I validate that the "([^"]*)" has the following text: "([^"]*)"$/, async function (element, text){
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

// const today = new Date();
// const bookingPeriod = new Date(new Date().setDate(today.getDate()+7));
// console.log(bookingPeriod.getDate());const today = new Date();
// const bookingPeriod = new Date(new Date().setDate(today.getDate()+7));
// console.log(bookingPeriod.getDate());const today = new Date();
// const bookingPeriod = new Date(new Date().setDate(today.getDate()+7));
// console.log(bookingPeriod.getDate());const today = new Date();
// const bookingPeriod = new Date(new Date().setDate(today.getDate()+7));
// console.log(bookingPeriod.getDate());

When(/^I insert a random number of travelers$/, async function (){
  await TestPageObject.insertNumberOf();
});

Then(/^I click the search button and view the filtered "([^"]*)"$/, async function (results){
  await TestPageObject.searchAndFilterResults(results);
});

// const today = new Date();
// const bookingPeriod = new Date(new Date().setDate(today.getDate()+7));
// console.log(bookingPeriod.getDate());const today = new Date();
// const bookingPeriod = new Date(new Date().setDate(today.getDate()+7));
// console.log(bookingPeriod.getDate());const today = new Date();
// const bookingPeriod = new Date(new Date().setDate(today.getDate()+7));
// console.log(bookingPeriod.getDate());const today = new Date();
// const bookingPeriod = new Date(new Date().setDate(today.getDate()+7));
// console.log(bookingPeriod.getDate());