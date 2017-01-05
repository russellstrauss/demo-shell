// function([string1, string2],target id,[color1,color2])    
//consoleText(['Hello World.', 'Console Text', 'Made with Love.'], 'text');


// features
// simply create json object to control all data such as text, speed, delete, newline, then iterate through so that the ideas are all that need to form rather than getting stuck in code
// switch statement for each type of control, i.e. speed, delay, delete, type, newline


var consoleData = [
	['type', 100, 'npm install self-destruct-sequence --save'],
	['delay', 3000],
	['delete', 30],
	['type', 100, 'gulp --save-dev'],
	['newline']
]


function consoleText(words, id, colors) {
	if (colors === undefined) colors = ['#00e500'];
	var visible = true;
	var con = document.getElementById('console');
	var letterCount = 1;
	var x = 1;
	var waiting = false;
	var target = document.getElementById(id)
	target.setAttribute('style', 'color:' + colors[0])
	window.setInterval(function() {

		if (letterCount === 0 && waiting === false) {
			waiting = true;
			target.innerHTML = words[0].substring(0, letterCount)
			window.setTimeout(function() {
				var usedColor = colors.shift();
				colors.push(usedColor);
				var usedWord = words.shift();
				words.push(usedWord);
				x = 1;
				target.setAttribute('style', 'color:' + colors[0])
				letterCount += x;
				waiting = false;
			}, 1000)
		} else if (letterCount === words[0].length + 1 && waiting === false) {
			waiting = true;
			window.setTimeout(function() {
				x = -1;
				letterCount += x;
				waiting = false;
			}, 1000)
		} else if (waiting === false) {
			target.innerHTML = words[0].substring(0, letterCount)
			letterCount += x;
		}
	}, 120);
	window.setInterval(function() {
		if (visible === true) {
			con.className = 'console-underscore hidden'
			visible = false;

		} else {
			con.className = 'console-underscore'

			visible = true;
		}
	}, 400);
}

var testData = [
	{
		'command': 'type',
		'speed': 400,
		'text': 'Hello  world'
	},
	{
		'command': 'newline'
	}
]

var consoleText2 = function(instructions) {
	
	$.each(instructions, function(index, value) {
		var step = value;

		switch(step['command']) {
			case 'type':
			
				var outputString = step['text'].split("");
				console.log(outputString);
				for (var i = 0; i < outputString.length; i++) {
					window.setInterval(function(){
						var test = "3141234123412";
						$('#text').append(test[i]);
						//console.log(outputString[i]);
					}, step['speed']);
				}
				
				break;
			case 'delete':
				break;
			case 'delay':
				break;
			case 'newline':
				break;
		}
	});
}
consoleText2(testData);