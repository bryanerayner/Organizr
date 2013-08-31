var assert = require("assert");
var fs = require('fs');

var Organizr = require("../organizr.js");

var baseName = "files/"
var testFiles = ["greek"];

var functions = {
	mapFile:"MapFile"
};


for (var i = 0, ii = testFiles.length; i < ii; i++)
{
	var filePath = baseName+testFiles;
	var txtFile, jsonFile, patternFile; 
	fs.readFile(filePath+".txt", function(err, data)
		{
			if (err) throw err;
			txtFile = data;
		});
	fs.readFile(filePath+".json", function(err, data)
		{
			if (err) throw err;
			jsonFile = data;
		});
	fs.readFile(filePath+".pattern", function(err, data)
		{
			if (err) throw err;
			patternFile = data;
		});

	var txt = txtFile;
	var json = JSON.parse(jsonFile);
	var pattern = JSON.parse(patternFile);

	for (var func in functions)
	{
		assert.deepEqual(Organizr[func](txt, pattern), json, functions[func]);
	}
}