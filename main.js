
var csscolors = require("css-color-names");
var _ = require("underscore");
var doT = require("dot");

function Vari() {}

//Returns random integer between min and max argument
//Copied from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
Vari.prototype.GetRandomInt = function(min, max) {
	 return Math.floor(Math.random() * (max - min + 1)) + min;
};

//Generates two hex colors and executes vari HTML template.
Vari.prototype.Template = function() {
	var red = this.Generate()
	var blue = this.Generate()
	var tt =	
	['<form class="vari-form">',
		'<fieldset>',
			'<p style="color:black;" id="vari">Input below what color you see this text in</p>',
			'<input type="text">',
			'<button type="submit" class="vari-button">Submit</button>',
		'</fieldset>',
	'</form>',
	'<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>',
	'<script>',
		'function red (){ $("#vari").css("color", "{{=it.red}}");  setTimeout(function(){ blue(); }, 15); }',
		'function blue(){ $("#vari").css("color", "{{=it.blue}}"); setTimeout(function(){ red();  }, 15); }',
		'blue()',
	'</script>'].join('\n');
	var template = doT.template(tt)
	var result = template({red: red, blue: blue});
	return result
};

//Returns random hex value without a name
Vari.prototype.Generate = function() {
	var hexcodes = _.values(csscolors);
    return hexcodes[this.GetRandomInt(1, 147)];
};

