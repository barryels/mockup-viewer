'use strict';


var state = require('./state');


function updateCurrentRoutePath(routePath) {
	state.currentRoutePath = routePath;
}


module.exports = {
	updateCurrentRoutePath: updateCurrentRoutePath,
};
