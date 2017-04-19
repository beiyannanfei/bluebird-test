/**
 * Created by wyq on 16/12/26.
 * .catch
 */
"use strict";
var Promise = require("bluebird");

function promResolve() {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, 1000, "success");
	});
}

function promReject() {
	return new Promise((resolve, reject) => {
		setTimeout(reject, 1000, "fiald");
	});
}

promReject().catch(err => {
	console.log("err: %j", err);
	return promResolve();
}).then(val => {
	console.log("val: %j", val);
});






