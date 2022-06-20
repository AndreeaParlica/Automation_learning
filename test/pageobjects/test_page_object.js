
import { assert } from 'chai';

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
const prefilledDestinationButton = $("li:nth-child(1) > button")
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


const selectorsMap = {travelTexth2: "h2[class='uitk-heading uitk-heading-5']"}

class TestPageObject {

    async clickElement(element){
      await element.waitForClickable()
      await element.click()
    };

    async getSelector(text){
      const formattedText = await text.toLowerCase().replace(/ /g, '_')
      console.log(`------------------------------------ selector ${formattedText}`)

      return {
        the_h2_paragraph: "h2[class='uitk-heading uitk-heading-5']",
      }[formattedText]
    }

 

    async openURL(url) {
      await browser.url(url);
    };
    
    //validate a text
    async validateText(element,text){
      const selector = await this.getSelector(element);
      console.log(`------------------------------------ selector ${this.getSelector(element)}`)
      console.log(`------------------------------------ selector ${await this.getSelector(element)}`)

      const selectorGet = await $(selector).getText();
      // console.log(`------------------------------------ selector ${$(selector)}`)
      console.log(`------------------------------------ gettext  ${selectorGet}`)
      
      console.log(`------------------------------------ ${selectorsMap.travelTexth2}`)
      assert.equal(selector, text, 'Element does not have the expected text');
    }

    //change the language 
    async changeLanguage(language){
      await languageChangeHeaderButton.click();
      await languageDropDown.click();
      await deutschlandLanguageOption.click();
      await browser.pause(2000);

      if (acceptAllCookiesButon.isExisting()){
        await acceptAllCookiesButon.click();
        await browser.pause(2000);
      }

      await saveLanguageChangeButton.click();
      await browser.pause(5000)
      assert.equal(await languageChangeHeaderButton.getText(), language, `The Language does not match with Deutsch`);
    }
    //check a phone preffix
    async checkPrefix(preffix){
      assert.equal(await deutschlandPhonePreffix.getText(), preffix, "Phones are not matching")
    }
    //check 
    async errorCheck(error) {
      await destinationsearchButton.click();       
      assert.equal(await noDestinationInsertedTextError.getText(), error, "The error text is not found")
    }
      
    //check if the
      
      
    //Scenariu 4
    //random destination picker

    async searchForDestination(){
      const destinationsArrayforRandomFunction = ["Copenhagen","Vienna","Brussels","Bucharest","Madrid","Valencia","Berlin"]
      function inputRandomDestination(arr){
        let randomDestinationSelected = Math.floor(Math.random() * arr.length);
        return arr[randomDestinationSelected];
      };

      const randomDestinationPicked = inputRandomDestination(destinationsArrayforRandomFunction);   
      await destinationInputCursorButton.click()
      await destinationInputLabel.setValue(randomDestinationPicked)
      await browser.pause(5000)
      await prefilledDestinationButton.click()
      const textDestination = await destinationInputLabel.getText()
      console.log(`--------------------------------------------------------------- textul inserat? ${textDestination}`)
      // assert.equal(randomDestinationPicked, destination, "the edestinations are not the same")

    }

    async setTheHolidayPeriod(date){
      
      this.clickElement(calendarCheckInButton)
      this.clickElement(goToTheCurentMonthButton)
      await browser.pause(1000)
      this.clickElement(the27thDayfromJuneButton)
      let attributeOfStartDateButton = await the27thDayfromJuneButton.getAttribute('aria-label')
      let dateSubstring = attributeOfStartDateButton.substring(0, 11)
      await the4thofJulyDayButton.click()
      await doneCalendarButton.click()
      assert.equal(dateSubstring, date, "Dates ar not equal")
    }
      
    async insertNumberOf() {

      function randomNumberPicker(number) {
        let randomNumber = Math.floor(Math.random() * number);
        return randomNumber
      }
      const randomTravelersNumberToBeInserted = randomNumberPicker(8);
      await travelersNumberHeaderButton.click()
      await travelersNumberInsertInput.setValue(randomTravelersNumberToBeInserted)
      await doneTravelersInsertionButton.waitForClickable({timeout: 2000})
      await doneTravelersInsertionButton.click()
    }
      
   async searchAndFilterResults(results) {
    await destinationsearchButton.waitForClickable({timeout: 2000})
    await destinationsearchButton.click()
    await sortResultsSelect.click()
    await priceSortOption.click()

   } 
}


 
    export default new TestPageObject();