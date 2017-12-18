'use strict';


var m = require('mithril');


var name = '_Template';


function view() {
	return m('div.' + name, [
		m('h2', '_Template'),
	]);
}


module.exports = {
	view: view,
};
