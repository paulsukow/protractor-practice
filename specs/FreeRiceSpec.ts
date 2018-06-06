import {ElementFinder, browser, by, element, Browser} from 'protractor';

describe('free rice example', function () {
   it('should be able to reach the free rice website', function () {
       browser.waitForAngularEnabled(false);
       browser.get('http://freerice.com/');

       browser.getTitle().then(function (title) {
           expect(title).toContain("Freerice.com")
       });
   });

   it('should be able to change to the multiplication table under the math subject', function () {
       element(by.linkText('SUBJECTS')).click();
       element(by.linkText('Multiplication Table')).click();

       element(by.className('subject-title')).getText().then( function (tableName) {
           expect(tableName).toEqual('Multiplication Table')
       });
   });

   it('should be able to solve the multiplication problem', function () {
       let factors;
       let multiplicand;
       let multiplier;
       let product;

       element(by.className('question-link')).getText().then( function (problemText) {
           factors = problemText.split(' x ');
           multiplicand = parseInt(factors[0]);
           multiplier = parseInt(factors[1]);

           product = multiplier * multiplicand;

           element(by.linkText(product.toString())).click();
       });

       element(by.css('#game-status td')).getText().then( function (text) {
           expect(text).toContain('Correct! ' + multiplicand + ' x ' + multiplier + ' = ' + product)
       });
   });
});
