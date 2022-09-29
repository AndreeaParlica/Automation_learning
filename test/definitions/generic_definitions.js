import { Given, When, Then } from '@cucumber/cucumber';
import Generic from "../pageobjects/generic/generic_page_object.js";

Given(/^I access the URL "([^"]*)"$/, async function (url) {
    await Generic.openURL(url);
  });

When(/^I generate a random string with "([^"]*)" characters$/, async function (charNo) {
  await Generic.randomStringGenerator(charNo);
});

When(/^I test date$/, async function () {
  await Generic.dateFormat();
});

When(/^I scroll to element "([^"]*)" from "([^"]*)" page$/, async function (elementName, page) {
  await Generic.scrollToElement(elementName, page);
});