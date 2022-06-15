
import { assert } from 'chai';
class TestPageObject {
    async openURL(url) {
      await browser.url(url);
    };


    //validate the text of h2 "Travel with confidence"
    async validateText(text){
      const elem = await $("h2[class='uitk-heading uitk-heading-5']");
      let elemText = await elem.getText()
      assert.equal(elemText, text, 'Element does not have the expected text');
    }

    //change the language to deutsch
    async changeLanguage(language){
      
      //select and click on English
      const elemEnglish = await $("button[class='uitk-button uitk-button-medium uitk-button-tertiary global-navigation-nav-button']");
      await elemEnglish.click();
      
      //select option Germany
      const option = await $("option[value='300000752']")
      await option.click();
           
      const acceptAllBtn = await $("button[class='osano-cm-accept-all osano-cm-buttons__button osano-cm-button osano-cm-button--type_accept']")
      await acceptAllBtn.click();
      
      //click save
      const buttonSave = await $("button[class='uitk-button uitk-button-large uitk-button-fullWidth uitk-button-has-text uitk-button-primary uitk-button-floating-full-width']")
      await buttonSave.click();

      //check if Deutsch is present
      const deutschUrl = 'https://de.hotels.com/?currency=EUR&eapid=752&locale=de_DE&pos=HCOM_DE&siteid=300000752&tpid=3102'
      await browser.url(deutschUrl);

      const elemDeutsch = await $("div[class='uitk-text uitk-type-300 uitk-text uitk-text-default-theme']");
      const deutschText = await elemDeutsch.getText();
      assert.equal(deutschText, language, `${deutschText} not the same with ${language}`);
    }

    async checkPrefix(preffix){
      //check the Deutschland preffix +49
      const elem = await $("option[value='+49,Germany']")
      const elemText = await elem.getText();
      assert.equal(elemText, preffix, "Phones are not matching")
    }

    
    async errorCheck(error) {
      const searchButton = await $("button[class='uitk-button uitk-button-large uitk-button-only-icon uitk-button-primary']")
      await searchButton.click();        
      const casetaEroare = await (await $("div[class='uitk-typeahead-menu uitk-menu uitk-menu-mounted']")).isDisplayed();
      const actualError = await $("div[class='uitk-field-message uitk-field-message-error uitk-error-message']")
      const text = await actualError.getText();
      assert.equal(text, error, "The text is not the same")
    }
      

      
      
    // //Scenariu 4
    // //random destination picker
    // async bookHoliday(destination){
    //   const destinationsArray = ["Copenhagen","Vienna","Brussels","Bucharest","Madrid","Valencia","Berlin"]    

    //   //random destination selection function
    //   function inputRandomDestination(arr){
    //     let randomDest = Math.floor(Math.random() * arr.length);
    //     inputAction.val(arr[randomDest]);
    //   }

    //   describe("Input random destination", () => {
    //     it('should be inputed a random destination', async () => {
    //       const input = await $("#location-field-destination")
    //       const inputDestination = await input.setValue(inputRandomDestination(destinationsArray))
    //       expectChai(destination).is.equal(inputDestination)
    //     });
    //   });

    //   // booking a minimum one week in the future from the current day
    //   describe("Book a week from the current day",()=>{
    //     it("Should be selected 7 days ahead starting with the current day", async () => {
    //       const today = new Date();
    //       const bookingPeriod = new Date(new Date().setDate(today.getDate()+7));
    //       const checkIn = await (await $(".uitk-faux-input uitk-form-field-trigger")).click();
    //       const checkOut = await (await $(".uitk-date-picker-day edge")).click();
    //       const lastDay = bookingPeriod.getDate();

    //       expectChai(checkIn).is.equal(today);
    //       expectChai(checkOut).is.equal(lastDay);
    //     });
    //   });

    //   //input random nr of adults at Travelers section
    //   describe("Input random nr of adults", () => {
    //     it("should input the number of adults equal with the returned nr from the randomNrOfAdults function", async () => {
    //       const randomNumber = Math.floor(Math.random() * 6);
    //       const travelers = await (await $(".uitk-fake-input uitk-form-field-trigger")).click();
    //       const valueTravelerInput = await $(".uitk-layout-flex-item uitk-step-input-value");
          
    //       //iteration to click + button the exact nr of times equal with random nr
    //       for(let i=1; i<=randomNumber;i++){
    //         const addTraveler = await (await $(".uitk-layout-flex-item uitk-step-input-touch-target")).click(i);
    //         valueTravelerInput.setValue(addTraveler);
    //       }
          
    //       //click Done and search buttons
    //       const doneButton = await $(".uitk-button uitk-button-large uitk-button-fullWidth uitk-button-has-text uitk-button-primary uitk-button-floating-full-width".click())
    //       const searchButton = await $(".uitk-button uitk-button-large uitk-button-fullWidth uitk-button-has-text uitk-button-primary".click());

    //       expectChai(valueTravelerInput).is.equal(randomNumber);
    //     });
    //   });
      
    //   describe("filter and sort the price order", () => {
    //     it("should sort the prices in undescending order", async() => {
    //       const sortAndFilterButton = await (await $(".uitk-button uitk-button-medium uitk-button-fullWidth uitk-button-secondary")).click();
    //       const sortBy = await (await $(".uitk-field-label is-visually-hidden")).click();
    //       selectByVisibleText('Price');
    //       let checkboxButton = await (await $(".uitk-layout-flex uitk-layout-flex-flex-wrap-nowrap uitk-switch uitk-checkbox")).isSelected();
    //       //click the done button
    //       const doneButton = await (await $("uitk-button uitk-button-large uitk-button-fullWidth uitk-button-primary uitk-button-floating-full-width")).click();
    //     });
    //   });        
    // }
  }



 
    export default new TestPageObject();