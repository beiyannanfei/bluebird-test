/**
 * Created by wyq on 16/12/27.
 * Promise.promisify
 */
"use strict";
var Promise = require("bluebird");

function funcb(flag, cb) {
	setTimeout(function () {
		return flag ? cb(null, "SUCCESS") : cb("FIALD");
	}, 1000);
}

var cbProm = Promise.promisify(funcb);

cbProm(true).then(val => {
	console.log("val: %j", val);
	return cbProm(false);
}).catch(err => {
	console.log("err: %j", err.message);
});
