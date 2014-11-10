'use strict';

/**
 *
 * Following is a SuperClass with a few useful shortcuts
 *
 **/

function LTApp() {
  this.WIN = $(window);
  this.DOC = $(document);
  this.BODY = $('body');
  this.HTML = $('html');
}
/**
 *
 * Main Application
 *
 **/

function App_Boilerplate() {
    LTApp.call(this);
}
App_Boilerplate.prototype = new LTApp();

/**
 *
 * Initialize your app, surcharge with whatever needed
 *
 **/
App_Boilerplate.prototype.init = function () {
	var scope = this;
    scope.addListeners();
};

/**
 *
 * Event Listeners, surcharge with whatever needed
 *
 **/
App_Boilerplate.prototype.addListeners = function () {
	var scope = this;
    this.WIN.resize(function (event) {
        return event;
    });
    this.DOC.ajaxError(function (event, xhr, settings, thrownError) {
        scope.onAjaxError(event, xhr, settings, thrownError);
        return arguments;
    });
    this.DOC.ajaxSuccess(function (event, xhr, settings) {
        scope.onAjaxSuccess(event, xhr, settings);
        return arguments;
    });
};

/**
 *
 * React on any Ajax Error
 *
 **/
App_Boilerplate.prototype.onAjaxError = function (event, xhr, settings, thrownError) {
	var scope = this;
    return arguments;
};

/**
 *
 * React on any Ajax Success
 * DOM may be updated/changed
 *
 **/
App_Boilerplate.prototype.onAjaxSuccess = function (event, xhr, settings) {
	var scope = this;
    return arguments;
};

/**
 *
 * Declare new methods in such way
 *
 **/
App_Boilerplate.prototype.doSomething = function () {
	var scope = this;
  
};
/**
 *
 * Launch the application
 *
 **/
$(document).ready(function () {
    var scope = new App_Boilerplate();
    scope.init();
});
