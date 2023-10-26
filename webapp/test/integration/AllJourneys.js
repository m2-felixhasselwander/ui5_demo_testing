sap.ui.define([
	"sap/ui/test/Opa5",
	"./arrangements/Startup",
	"./FilterJourney",
	"./NavigationJourney",
	"./SearchJourney",
	"./TodoListJourney"
], function (Opa5, Startup, NavigationJourney, FilterJourney) {
	"use strict";

	Opa5.extendConfig({
		arrangements: new Startup(),
		viewNamespace: "demoproject.view.",
		autoWait: true
	});
});
