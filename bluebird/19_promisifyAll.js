/**
 * Created by wyq on 16/12/27.
 * Promise.promisifyAll
 */
"use strict";
var Promise = require("bluebird");
var redis = require("redis");
var redisClient = redis.createClient();

var rcProm = Promise.promisifyAll(redisClient, {suffix: "ABCD"});

rcProm.keysABCD("*").then(val => {
	console.log("val: %j", val);
}).catch(err => {
	console.log("err: %j", err);
});


