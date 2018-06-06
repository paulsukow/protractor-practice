import {browser, element, by} from 'protractor';

export class FreeRiceWebsite {
    subjects = element(by.linkText('SUBJECTS'));
    multiplicationTable = element(by.linkText('Multiplication Table'));
    subjectTitle = element(by.className('subject-title'));
    question = element(by.className('question-link'));
    gameStatus = element(by.css('#game-status td'));

    to() {
        this.get();
        this.at();
    }

    get() {
        browser.get('http://freerice.com/');
    }

    at() {
        browser.getTitle().then(function (title) {
            expect(title).toContain("Freerice.com")
        });
    }

    selectMultiplicationTableFromMathSubject() {
        this.subjects.click();
        this.multiplicationTable.click();

        this.subjectTitle.getText().then( function (tableName) {
            expect(tableName).toEqual('Multiplication Table')
        });
    }

    selectMultiplicationTableAnswer(product) {
        element(by.linkText(product.toString())).click();
    }
}
