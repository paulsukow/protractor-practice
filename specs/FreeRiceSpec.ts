import {browser, by, element} from 'protractor';
import {FreeRiceWebsite} from "../components/FreeRiceWebsite";

describe('free rice example', function () {

   it('should be able to solve a multiplication problem to donate free rice', function () {
       browser.waitForAngularEnabled(false);
       let freeRiceWebsite = new FreeRiceWebsite();

       freeRiceWebsite.to();
       freeRiceWebsite.selectMultiplicationTableFromMathSubject();

       let multiplicand, multiplier, product;

       freeRiceWebsite.question.getText().then( function (problemText) {
           let factors = problemText.split(' x ');
           multiplicand = parseInt(factors[0]);
           multiplier = parseInt(factors[1]);

           product = multiplier * multiplicand;

           freeRiceWebsite.selectMultiplicationTableAnswer(product);
       });

       freeRiceWebsite.gameStatus.getText().then( function (text) {
           expect(text).toContain('Correct! ' + multiplicand + ' x ' + multiplier + ' = ' + product)
       });
   });
});
