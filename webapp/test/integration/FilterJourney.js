/*global QUnit*/

sap.ui.define([
	"sap/ui/test/opaQunit",
	"./pages/App",
	"./pages/Main"
], function (opaTest, App, Main) {
	"use strict";

	QUnit.module("Filter Journey");

	opaTest("should show correct items when filtering for 'Active' items", function (Given, When, Then) {

		// Arrangements
		Given.iStartMyApp();

		//Actions
		When.onTheViewPage.iFilterForItems("active");

		// Assertions
		Then.onTheViewPage.iShouldSeeItemCount(1);

		// Cleanup
		Then.iTeardownMyApp();
	});

	opaTest("should show correct items when filtering for 'Completed' items", function (Given, When, Then) {

		// Arrangements
		Given.iStartMyApp();

		//Actions
		When.onTheViewPage.iFilterForItems("completed");

		// Assertions
		Then.onTheViewPage.iShouldSeeItemCount(1);

		// Cleanup
		Then.iTeardownMyApp();
	});

	opaTest("should show correct items when filtering for 'Completed' items and switch back to 'All'", function (Given, When, Then) {

		// Arrangements
		Given.iStartMyApp();

		//Actions
		When.onTheViewPage.iFilterForItems("completed");

		// Assertions
		Then.onTheViewPage.iShouldSeeItemCount(1);

		//Actions
		When.onTheViewPage.iFilterForItems("all");

		// Assertions
		Then.onTheViewPage.iShouldSeeItemCount(2);

		// Cleanup
		Then.iTeardownMyApp();
	});
});
