/*global QUnit*/

sap.ui.define([
	"sap/ui/test/opaQunit",
	"./pages/App",
	"./pages/Main"
], function (opaTest, App, Main) {
	"use strict";

	QUnit.module("Todo List");

	opaTest("should add an item", function (Given, When, Then) {

		// Arrangements
		Given.iStartMyApp();

		//Actions
		When.onTheViewPage.iEnterTextForNewItemAndPressEnter("my test");

		// Assertions
		Then.onTheViewPage.iShouldSeeTheItemBeingAdded(3, "my test");

		// Cleanup
		Then.iTeardownMyApp();
	});

	opaTest("should remove a completed item", function (Given, When, Then) {

		// Arrangements
		Given.iStartMyApp();

		//Actions
		When.onTheViewPage.iEnterTextForNewItemAndPressEnter("my test")
			.and.iSelectAllItems(true)
			.and.iClearTheCompletedItems()
			.and.iEnterTextForNewItemAndPressEnter("my test");

		// Assertions
		Then.onTheViewPage.iShouldSeeAllButOneItemBeingRemoved("my test");

		// Cleanup
		Then.iTeardownMyApp();
	});

	opaTest("should select an item", function (Given, When, Then) {

		// Arrangements
		Given.iStartMyApp();

		//Actions
		When.onTheViewPage.iEnterTextForNewItemAndPressEnter("my test")
			.and.iSelectTheLastItem(true);

		// Assertions
		Then.onTheViewPage.iShouldSeeTheLastItemBeingCompleted(true);

		// Cleanup
		Then.iTeardownMyApp();
	});

	opaTest("should unselect an item", function (Given, When, Then) {

		// Arrangements
		Given.iStartMyApp();

		//Actions
		When.onTheViewPage.iEnterTextForNewItemAndPressEnter("my test")
			.and.iSelectAllItems(true)
			.and.iClearTheCompletedItems()
			.and.iEnterTextForNewItemAndPressEnter("my test")
			.and.iSelectTheLastItem(true)
			.and.iSelectTheLastItem(false);

		// Assertions
		Then.onTheViewPage.iShouldSeeTheLastItemBeingCompleted(false);

		// Cleanup
		Then.iTeardownMyApp();
	});
});
