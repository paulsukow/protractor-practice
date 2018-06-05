//Suite in Jasmine
describe('angularjs homepage todo list', function() {
    // Test in Jasmine
    it('should add a todo', function() {
        // Entering application url in browser
        browser.get('https://angularjs.org');
        // Enter text under TODO input field
        element(by.model('todoList.todoText')).sendKeys('write first protractor test');
        // Clicks on 'Add' button
        element(by.css('[value="add"]')).click();
        // Getting all Todo lists displayed
        var todoList = element.all(by.repeater('todo in todoList.todos'));
        // Asserting the TODO's count as 3
        expect(todoList.count()).toEqual(3);
        //Verifying newly entered TODO is added
        expect(todoList.get(2).getText()).toEqual('write first protractor test');
    });
});