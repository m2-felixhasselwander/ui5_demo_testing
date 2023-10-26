/*global QUnit*/

sap.ui.define([
	"demo_project/controller/Main.controller",
	"sap/ui/base/ManagedObject",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (MainController, ManagedObject, Controller, JSONModel) {
	"use strict";

	QUnit.module("Main Controller", {

		beforeEach: function () {
			this.oAppController = new MainController();
			this.oViewStub = new ManagedObject({});
			sinon.stub(Controller.prototype, "getView").returns(this.oViewStub);

			this.oJSONModelStub = new JSONModel({
				todos: []
			});
			this.oViewStub.setModel(this.oJSONModelStub);
		},

		afterEach: function () {
			Controller.prototype.getView.restore();

			this.oViewStub.destroy();
		}
	});

	QUnit.test("I should test the Main controller", function (assert) {

		this.oAppController.onInit();
		assert.ok(this.oAppController);
	});

	// QUnit.test("Should add a todo element to the model", function (assert) {
	// 	// Arrange
	// 	// initial assumption: to-do list is empty


	// 	// Act


	// 	// Assumption

	// });

	// QUnit.test("Should toggle the completed items in the model", function (assert) {
	// 	// Arrange
	// 	var oModelData = {
	// 		todos: [{
	// 			"title": "Start this app",
	// 			"completed": false
	// 		}],
	// 		itemsLeftCount: 1
	// 	};
	// 	this.oJSONModelStub.setData(oModelData);

	// 	// initial assumption


	// 	// Act


	// 	// Assumption
	// });

	// QUnit.test("Should clear the completed items", function (assert) {
	// 	// Arrange

	// 	// initial assumption


	// 	// Act


	// 	// Assumption

	// });

	// QUnit.test("Should update items left count when no todos are loaded, yet", function (assert) {
	// 	// Arrange


	// 	// initial assumption


	// 	// Act


	// 	// Assumption

	// });

});
