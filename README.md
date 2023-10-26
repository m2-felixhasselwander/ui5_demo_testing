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

### Integration Tests: Add filter journey

test/integration/pages/Main.js

- create function iFilterForItems

```
    iFilterForItems: function(filterKey) {
        return this.waitFor({
            viewName: sViewName,
            controlType: "sap.m.SegmentedButtonItem",
            matchers: [
                new Properties({ key: filterKey })
            ],
            actions: [new Press()],
            errorMessage: "SegmentedButton can not be pressed"
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

- create test/integration/FilterJourney.js similar to navigation journey
- create function

```
    opaTest("should show correct items when filtering for 'Active' items", function (Given, When, Then) {

		// Arrangements
		Given.iStartMyApp();

		//Actions
		When.onTheAppPage.iFilterForItems("active");

		// Assertions
		Then.onTheAppPage.iShouldSeeItemCount(1);

		// Cleanup
		Then.iTeardownMyApp();
	});
```

## create additional test cases for:

- should show correct items when filtering for 'Completed' items
- should show correct items when filtering for 'Completed' items and switch back to 'All'
