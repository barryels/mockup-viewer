'use strict';


var m = require('mithril');


var state = require('./state');


function project(projectID) {
	console.log('project()', projectID);
	return m.request({
		url: './data/' + projectID + '/package.json',
	})
		.then(function (response) {
			state.projects = response ? response : [];
			console.log(response);
		});
}


module.exports = {
	project: project,
};
