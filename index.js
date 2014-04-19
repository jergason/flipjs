#!/usr/bin/env node

var flip = require('./flip.js');
var args = process.argv;


if (args.length < 3) {
    console.log('Usage: flip [text]\n');
}

var stringToFlip = "";
for (var i = 2; i < args.length; i++) {
    var arg = args[i];
    if (arg) {
	stringToFlip += arg + " ";
    }
}

flipped = flip(stringToFlip);

console.log("(╯°□°）╯︵" + flipped);

