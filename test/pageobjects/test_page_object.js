class TestPageObject {
    async openURL(url) {
      await browser.url(url);
    }

    //validate the text of h2 "Travel with confidence"
    async validateText(text){
      await browser.url(url)
      const elem = await $(".uitk-heading uitk-heading-5")
      expect(elem).toHaveText(text)
    }

    //change the language to deutsch
    async changeLanguage(language){
      await browser.url(url)
      //select and click on English
      const elemEnglish = await $(".uitk-text uitk-type-300 uitk-text uitk-text-default-theme")
      elemEnglish.click()
      //find the german option
      const elemSelection = await $(".uitk-field uitk-field-select-field has-floatedLabel-label has-no-placeholder")
      $("#site-selector").selectByVisibleText('Germany · EUR €')
      browser.pause(3000)

      //click save
      const buttonSubmit = await $(".uitk-button uitk-button-large uitk-button-fullWidth uitk-button-has-text uitk-button-primary uitk-button-floating-full-width").
      buttonSubmit.click()

      //check if Deutsch is present
      const elemDeutsch = await $(".uitk-text uitk-type-300 uitk-text uitk-text-default-theme")
      expect(elemDeutsch).toHaveText(language)

      //check the Deutschland preffix +49
      const preffix='Deutschland +49'
      const elem = await $(".uitk-field uitk-field-select-field has-floatedLabel-label has-no-placeholder")
      elem.selectByVisibleText(preffix)
    }

      //raise errors and assert with Chai
      async errorCheck(error){
      const expectChai = require('chai').expect;
      describe('error', ()=> {
        it('should raise an error when searching wihtout no destination', async () =>{
          const browser= await browser.url(url);
          const elemtSearch = await $('.uitk-button uitk-button-large uitk-button-fullWidth uitk-button-has-text uitk-button-primary')
          elemtSearch.click()
          const error = await $('.uitk-error-summary')
          expectChai(isDisplayed).to.equal(true);
        });
      });
    }

      async checkErrorText (message){
        describe('text error', ()=> {
          it('please select a destination shoul be displayed', async () =>{
            //click on the search button wihtoun destination input
            const browser= await browser.url(url);
            const elemtSearch = await $('.uitk-button uitk-button-large uitk-button-fullWidth uitk-button-has-text uitk-button-primary')
            elemtSearch.click()
            //check the text message
            const textMessage = await $('.uitk-field-message uitk-field-message-error uitk-error-message')
            expectChai(message).is.equal(textMessage)
          });
      });
    }
    
    //Scenariu 4
    //random destination picker
    async bookHoliday(destination){
      const destinationsArray = ["Copenhagen","Vienna","Brussels","Bucharest","Madrid","Valencia","Berlin"]    

      //random destination selection function
      function inputRandomDestination(arr){
        let randomDest = Math.floor(Math.random() * arr.length);
        inputAction.val(arr[randomDest]);
      }

      describe("Input random destination", () => {
        it('should be inputed a random destination', async () => {
          const input = await $("#location-field-destination")
          const inputDestination = await input.setValue(inputRandomDestination(destinationsArray))
          expectChai(destination).is.equal(inputDestination)
        });
      });

      // booking a minimum one week in the future from the current day
      describe("Book a week from the current day",()=>{
        it("Should be selected 7 days ahead starting with the current day", async () => {
          const today = new Date();
          const bookingPeriod = new Date(new Date().setDate(today.getDate()+7));
          const checkIn = await (await $(".uitk-faux-input uitk-form-field-trigger")).click();
          const checkOut = await (await $(".uitk-date-picker-day edge")).click();
          const lastDay = bookingPeriod.getDate();

          expectChai(checkIn).is.equal(today);
          expectChai(checkOut).is.equal(lastDay);
        });
      });

      //input random nr of adults at Travelers section
      describe("Input random nr of adults", () => {
        it("should input the number of adults equal with the returned nr from the randomNrOfAdults function", async () => {
          const randomNumber = Math.floor(Math.random() * 6);
          const travelers = await (await $(".uitk-fake-input uitk-form-field-trigger")).click();
          const valueTravelerInput = await $(".uitk-layout-flex-item uitk-step-input-value");
          
          //iteration to click + button the exact nr of times equal with random nr
          for(let i=1; i<=randomNumber;i++){
            const addTraveler = await (await $(".uitk-layout-flex-item uitk-step-input-touch-target")).click(i);
            valueTravelerInput.setValue(addTraveler);
          }
          
          //click Done and search buttons
          const doneButton = await $(".uitk-button uitk-button-large uitk-button-fullWidth uitk-button-has-text uitk-button-primary uitk-button-floating-full-width".click())
          const searchButton = await $(".uitk-button uitk-button-large uitk-button-fullWidth uitk-button-has-text uitk-button-primary".click());

          expectChai(valueTravelerInput).is.equal(randomNumber);
        });
      });
      
      describe("filter and sort the price order", () => {
        it("should sort the prices in undescending order", async() => {
          const sortAndFilterButton = await (await $(".uitk-button uitk-button-medium uitk-button-fullWidth uitk-button-secondary")).click();
          const sortBy = await (await $(".uitk-field-label is-visually-hidden")).click();
          selectByVisibleText('Price');
          let checkboxButton = await (await $(".uitk-layout-flex uitk-layout-flex-flex-wrap-nowrap uitk-switch uitk-checkbox")).isSelected();
          //click the done button
          const doneButton = await (await $("uitk-button uitk-button-large uitk-button-fullWidth uitk-button-primary uitk-button-floating-full-width")).click();
        });
      });        
    }
  }



 
    export default new TestPageObject();