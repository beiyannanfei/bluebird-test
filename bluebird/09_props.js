/**
 * Created by wyq on 16/12/27.
 * Promise.props
 */
"use strict";
var Promise = require("bluebird");

function promResolve(args) {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, 1000, args || "success");
	});
}

let taskMap = {
	a: promResolve("aaa"),
	b: promResolve("bbb"),
	c: promResolve("ccc"),
	d: null
};

Promise.props(taskMap).then(val => {
	console.log("val: %j", val);
});
