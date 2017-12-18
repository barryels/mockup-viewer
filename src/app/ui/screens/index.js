'use strict';


var m = require('mithril');


var _Template = require('./../components/_Template');


var home = {
	view: function () {
		return m('div.screen', [
			m('h1', 'screenHome'),
			m(_Template),
		]);
	},
};


module.exports = {
	home: home,
};
