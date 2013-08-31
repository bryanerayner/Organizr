//     Organizr.js


(function(){

  // Initial Setup
  // -------------

  // Save a reference to the global object (`window` in the browser, `exports`
  // on the server).
  var root = this;


  // Create local references to array methods we'll want to use later.
  var array = [];
  var push = array.push;
  var slice = array.slice;
  var splice = array.splice;

  var Organizr;
  if (typeof exports !== 'undefined') {
    Organizr = exports;
  } else {
    Organizr = root.Backbone = {};
  }

  // Current version of the library. Keep in sync with `package.json`.
  Organizr.VERSION = '0.0.0.1';

  // Require Underscore, if we're on the server, and it's not already present.
/*  var _ = root._;
  if (!_ && (typeof require !== 'undefined')) _ = require('underscore.js');
*/
  
  var Tag = Organizr.Tag = function()
  {

  }

  //Return a JSON with the most appropriate mapping for the file
  var mapFile = Organizr.mapFile = function(txt, pattern)
  {

  }


}).call(this);