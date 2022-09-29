
import { assert } from 'chai';
import hooks from './generic/hooks.js';
import Generic from '../pageobjects/generic/generic_page_object';

const languageDropDown = $("[data-stid='site-selector']")
const languageChangeHeaderButton = $("[data-stid='button-type-picker-trigger']");
const textTravelh2 = $("h2[class='uitk-heading uitk-heading-5']");
const deutschlandLanguageOption = $("option[value='300000752']")
const acceptAllCookiesButon = $("[class*='accept-all']")
const saveLanguageChangeButton = $("button[class='uitk-button uitk-button-large uitk-button-fullWidth uitk-button-has-text uitk-button-primary uitk-button-floating-full-width']")
const deutschlandPhonePreffix = $("option[value='+49,Germany']")
const destinationsearchButton = $("button[class='uitk-button uitk-button-large uitk-button-only-icon uitk-button-primary']")
const noDestinationInsertedTextError = $("div[class='uitk-field-message uitk-field-message-error uitk-error-message']")
const destinationInputCursorButton = $("[data-stid='destination_form_field-menu-trigger']")
const destinationInputLabel = $("[data-stid='destination_form_field-menu-input']")
const prefilledDestinationButton = $("div.uitk-typeahead-results > ul > li:nth-child(1) > button")
const calendarCheckInButton = $("[data-stid='open-date-picker']")
const the27thDayfromJuneButton = $("div:nth-child(1) > table > tbody > tr:nth-child(5) > td:nth-child(2) > button")
const the4thofJulyDayButton = $("//div[2]/table/tbody/tr[2]/td[2]/button")
const goToTheCurentMonthButton = $("//div[2]/div[1]/button[1]")
const doneCalendarButton = $("[data-stid='apply-date-picker']")
const travelersNumberHeaderButton = $("//div/div/div[3]/div/div[1]/button")
const travelersNumberInsertInput = $('#traveler_selector_adult_step_input-0')
const doneTravelersInsertionButton = $('#traveler_selector_done_button')
const sortResultsSelect = $('#sort')
const priceSortOption = $("option[value='PRICE_LOW_TO_HIGH']")
const destinationButtoncheck = $("button[data-stid='hotels-destination-menu-trigger']")
const nextButtonAmazon = $("[class*='s-pagination-item s-pagination-next']")
const pageNumber = $('[class*="s-pagination-item"]')
const page_one = $("div > div > span > a:nth-child(2)")

let randomDestinationPicked;


class TestPageObject {

    async clickElement(element){
      await element.waitForClickable({timeout: 2000});
      await element.click();
    };

    async getSelector(text){
      const formattedText = await text.toLowerCase().replace(/ /g, '_')
      return {
        the_h2_paragraph: "h2[class='uitk-heading uitk-heading-5']",
      }[formattedText]
    }
    async scrollToElement(elementName, page) {
      let selector = hooks.getHook(elementName, page)
      await $(selector).scrollIntoView({behavior: "smooth"});
  }

    async openURL(url) {
      await browser.url(url);
    };
    
    //validate a text
    async validateText(element,text){
      const selector = await this.getSelector(element);      
      assert.equal(await $(selector).getText(), text, `The ${element} does not have the expected text`);
    }

    //change the language 
    async changeLanguage(language){
      this.clickElement(languageChangeHeaderButton);
      this.clickElement(deutschlandLanguageOption);
      await browser.pause(2000);

      if (acceptAllCookiesButon.isExisting()){
        this.clickElement(acceptAllCookiesButon);
      }
      this.clickElement(saveLanguageChangeButton);
      await browser.pause(3000);
      assert.equal(await languageChangeHeaderButton.getText(), language, `The Language does not match with Deutsch`);
    }
    //check a phone preffix
    async checkPrefix(preffix){
      assert.equal(await deutschlandPhonePreffix.getText(), preffix, "Phones are not matching");
    }
    //check 
    async errorCheck(error) {
      await destinationsearchButton.click();       
      assert.equal(await noDestinationInsertedTextError.getText(), error, "The error text is not found");
    };
      


    //Scenariu 4
    //random destination picker

    async searchForDestination(){

      const destinationsArrayforRandomFunction = ["Copenhagen","Vienna","Brussels","Bucharest","Madrid","Valencia","Berlin"];
      function inputRandomDestination(arr){
        let randomDestinationSelected = Math.floor(Math.random() * arr.length);
        return arr[randomDestinationSelected];
      };

      randomDestinationPicked = inputRandomDestination(destinationsArrayforRandomFunction); 
      await (await destinationInputCursorButton).click();
      await destinationInputLabel.setValue(randomDestinationPicked);
      await browser.pause(3000);
      await this.clickElement(prefilledDestinationButton);

    }

    async setTheHolidayPeriod(date){
      
      this.clickElement(calendarCheckInButton);
      this.clickElement(goToTheCurentMonthButton);
     
      await browser.pause(1000);
      this.clickElement(the27thDayfromJuneButton);
      let attributeOfStartDateButton = await the27thDayfromJuneButton.getAttribute('aria-label');
      let dateSubstring = attributeOfStartDateButton.substring(0, 11);
      await the4thofJulyDayButton.click();
      await doneCalendarButton.click();
      assert.equal(dateSubstring, date, "Dates ar not equal");
    }
      
    async insertNumberOf() {

      function randomNumberPicker(number) {
        let randomNumber = Math.floor(Math.random() * number);
        return randomNumber;
      }
      const randomTravelersNumberToBeInserted = randomNumberPicker(8);
      console.log(`========================================         ======nr travelers ${randomTravelersNumberToBeInserted}`)
      await travelersNumberHeaderButton.click();
      await travelersNumberInsertInput.setValue(randomTravelersNumberToBeInserted);
      await doneTravelersInsertionButton.waitForClickable({timeout: 2000});
      await doneTravelersInsertionButton.click();
    }
      
   async clickOnSearchButton() {
      await this.clickElement(destinationsearchButton);
      const textDestination = await destinationButtoncheck.getText();
      assert.isTrue(textDestination.includes(randomDestinationPicked), "the destination inserted and the destination from the search buton field are not the same");
   } 
      
    async clickOnSortButton() {
      await this.clickElement(sortResultsSelect);
      await priceSortOption.click();
    }

    async checkThatHotelsAreSortedByPriceAscending() {
      await browser.pause(3000)
      const pricesList = await $$("div[class*='uitk-type-bold uitk-text-emphasis-theme']").map((price) => price.getText());
      console.log(` ======================================== asa cum sunt extrase ${pricesList}`)
      let ascendingOrder;
      let array = [];
      for (let i = 0; i < pricesList.length; i++){
         array.push(parseInt(pricesList[i].replace("€"," ").split(',').join('')));
      }
      console.log(` ======================================== array dupa prelucrare si conversie ${array}`)
      for (const nr in array){
        if (array[nr]>array[nr+1]){
          ascendingOrder = false;
        } else {
          ascendingOrder = true;
        }
      }
      console.log(` ======================================== este ordonat ascending? ${ascendingOrder}`)
      assert.equal(ascendingOrder,true, "The prices are not sorted in ascending order")
      }
      // expect(["a","b"]).to.be.sorted({descending: false}) 
      
      async clickOnViewTourRequests(){
        const viewYourRequestsButton = await $("button[data-hook='dashboard_your-requests-button']");
        await this.clickElement(viewYourRequestsButton);
        await browser.pause(5000);
      }
     
      async navigateToLastAmazonPage() {
        while (await (nextButtonAmazon).getAttribute("aria-disabled") == null) { //is going trought the pagination elements until the last one
          await (nextButtonAmazon).scrollIntoView();
          await (nextButtonAmazon).click();
          await browser.pause(5000);
        }
        await (page_one).scrollIntoView(); //goes back to the first page
        await (page_one).click();
        await browser.pause(5000);
      }
        
     
      async navitageToNthPage(pageNumber){ //go to a specific page number
        let next_page = await $('[class*="s-pagination-item s-pagination-next"]');
        let current_page = await $('[class="s-pagination-item s-pagination-selected"]'); // DE MUTAT SUS    
        let previous_page = await $('[class*="s-pagination-item s-pagination-previous s-pagination"]');
        let current_page_text = await current_page.getText();
        let last_page = await (await $('[class="s-pagination-item s-pagination-disabled"]')).getText();
  
        if (pageNumber > last_page) {
          assert.fail("nu eixsta pagina asta")};
          
        while (current_page_text !== pageNumber) {
          if (current_page_text < pageNumber){
            console.log(`============ sunt in if ${current_page_text}`);
            next_page.scrollIntoView();
            next_page.click();
            await browser.pause(3000);
          }
          else {
            console.log(`============ sunt in else ${current_page_text}`);
            previous_page.scrollIntoView();
            previous_page.click();
            await browser.pause(3000);
          }
          current_page_text = await current_page.getText();
        }
        console.log(`============ am iesit din while ${current_page_text}`);
      }
    }

    export default new TestPageObject();