'use strict';
var test = require('ava');
var modifyKeys = require('./');

test(function (t) {
	t.assert(modifyKeys({FOO: true}, function (key) {
		return key.toLowerCase();
	}).foo === true);
	t.end();
});
