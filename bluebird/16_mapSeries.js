/**
 * Created by wyq on 16/12/27.
 * Promise.mapSeries
 */
"use strict";
var Promise = require("bluebird");

function promResolve(args) {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, 1000, args || "success");
	});
}

Promise.resolve(["a", "b", "c", "d"]).mapSeries(item => {
	console.log("item: %j", item);
	return promResolve(item);
}).then(val => {
	console.log("val: %j", val);
}).catch(err => {
	console.log("err: %j", err);
});