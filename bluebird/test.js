/**
 * Created by wyq on 17/4/1.
 */
"use strict";
var Promise = require("bluebird");

let flag = true;
Promise.resolve(1).then(val => {
	console.log("val: %s", val);
}).catch(err => {
	console.log("err: %s", err);
});



