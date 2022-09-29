
import hooks from './hooks';

class Generic { 
    async openURL(url) {
        await browser.url(url);
    };

    async randomStringGenerator(charNo){
        let new_string = '';
        let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        for(let i = 0; i <= charNo; i++){
            new_string += alphabet.charAt(Math.floor(Math.random() * alphabet.length))
        }
    }
    formatLocator(elementName) {
        return elementName.toLowerCase().replace(/ /g, '_');
      }
   
    async scrollToElement(elementName, page) {
        let selector = hooks.getHook(elementName, page)
        await $(selector).scrollIntoView({behavior: "smooth"});
    }

    async clickElement(elementName, page){
        let selector = hooks.getHook(elementName,page)
        await $(selector).waitForClickable({timeout: 2000});
        await $(selector).click();
      };
}

    export default new Generic();
