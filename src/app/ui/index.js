'use strict';


var m = require('mithril');


var command = require('./../domain/command');
var query = require('./../domain/query');
var layouts = require('./layouts');
var screens = require('./screens');


function doLayout(layout, screen) {
	return {
		render: function () {
			return m(layout, m(screen));
		},
	};
}


function setupRoutes() {
	m.route.prefix('#!');
	m.route(document.body, '/', {
		'/': doLayout(layouts.default, screens.home),
	});
}


function onRouteChange() {
	command.updateCurrentRoutePath(window.location.hash, 'some other thing');
}


function init() {
	setupRoutes();

	window.addEventListener('hashchange', onRouteChange, false);
	onRouteChange(null);

	query.project('12345');
}

init();
