var EventEmitter = require("events").EventEmitter;

var bus = new EventEmitter();

module.exports = bus;