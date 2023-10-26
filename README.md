## Application Details

### Starting the generated app

- This app has been generated using the SAP Fiori tools - App Generator, as part of the SAP Fiori tools suite. In order to launch the generated app, simply run the following from the generated app root folder:

```
    npm install
    npm start
    npm run unit-tests
    npm run init-tests
```

#### Pre-requisites:

1. Active NodeJS LTS (Long Term Support) version and associated supported NPM version. (See https://nodejs.org)

### Integration Tests: Add search journey

test/integration/pages/Main.js

- create function iEnterTextForSearchAndPressEnter

```
    iEnterTextForSearchAndPressEnter: function(text) {
        return this.waitFor({
            id: sSearchTodoItemsInputId,
            viewName: sViewName,
            actions: [new EnterText({ text: text })],
            errorMessage: "The text cannot be entered"
        });
    }
```

- create function iShouldSeeItemCount

```
iShouldSeeItemCount: function(iItemCount) {
    return this.waitFor({
        id: sItemListId,
        viewName: sViewName,
        matchers: [new AggregationLengthEquals({
            name: "items",
            length: iItemCount
        })],
        success: function() {
            Opa5.assert.ok(true, "The table has " + iItemCount + " item(s)");
        },
        errorMessage: "List does not have expected number of items '" + iItemCount + "'."
    });
}
```

- create test/integration/SearchJourney.js similar to navigation journey
- create function

```
opaTest("should show correct item count after search (1)", function (Given, When, Then) {

    // Arrangements
    Given.iStartMyApp();

    //Actions
    When.onTheAppPage.iEnterTextForSearchAndPressEnter("earn");

    // Assertions
    Then.onTheAppPage.iShouldSeeItemCount(1);

    // Cleanup
    Then.iTeardownMyApp();
});
```

## create additional test cases for:

- should show correct item count after searching something not in table
- should show correct item count after search and clearing the search
  <details>
    <summary>Hint</summary>

      // Arrangements
      Given.iStartMyApp();

      //Actions
      When.onTheAppPage.iEnterTextForSearchAndPressEnter("earn")
          .and.iEnterTextForSearchAndPressEnter("");

      // Assertions
      Then.onTheAppPage.iShouldSeeItemCount(2);

      // Cleanup
      Then.iTeardownMyApp();

  </details>

- should show correct item count after search and active items filter
  <details>
    <summary>Hint</summary>

      // Arrangements
      Given.iStartMyApp();

      //Actions
      When.onTheAppPage.iEnterTextForSearchAndPressEnter("earn")
          .and.iFilterForItems("active");

      // Assertions
      Then.onTheAppPage.iShouldSeeItemCount(1);

      // Cleanup
      Then.iTeardownMyApp();

  </details>

- should show correct item count after search and completed items filter
    <details>
      <summary>Hint</summary>

        // Arrangements
        Given.iStartMyApp();

        //Actions
        When.onTheAppPage.iEnterTextForSearchAndPressEnter("earn")
        .and.iFilterForItems("completed");

        // Assertions
        Then.onTheAppPage.iShouldSeeItemCount(0);

        // Cleanup
        Then.iTeardownMyApp();

  </details>

- should show correct item count after search and all items filter
    <details>
    <summary>Hint</summary>

        // Arrangements
        Given.iStartMyApp();

        //Actions
        When.onTheAppPage.iEnterTextForSearchAndPressEnter("earn")
        .and.iFilterForItems("all");

        // Assertions
        Then.onTheAppPage.iShouldSeeItemCount(1);

        // Cleanup
        Then.iTeardownMyApp();

    </details>
