// import { expect } from "chai";

// //scenariu 3

// const expectChai = require('chai').expect;

// describe('Button',() => {
//     it('should be desplayed', async () => {
//         await browser.url(url);
//         const elemtSearch = await $('.uitk-button uitk-button-large uitk-button-fullWidth uitk-button-has-text uitk-button-primary')
//         expectChai(await elemtSearch).click();
//     })
// })

const today = new Date();
const bookingPeriod = new Date(new Date().setDate(today.getDate()+7));
console.log(bookingPeriod.getDate());