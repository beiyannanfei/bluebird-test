/**
 * Created by wyq on 16/12/27.
 * Promise.delay
 */
"use strict";
var Promise = require("bluebird");

Promise.delay(1000).then(function () {
	console.log("[%j] 1000 ms passed", new Date().toLocaleString());
	return "Hello World";
}).delay(5000).then(val => {
	console.log("[%j] val: %j", new Date().toLocaleString(), val);
}).catch(err => {
	console.log("err: %j", err);
});



