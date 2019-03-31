// JavaScript Document
'use strict';
//Coming back to figure out how to get the clock in the footer. Starting building inside Initialize App function. Scrapped globals and started building in hexClock function. Tried to build the h1 and p tags into the javascript, but Use Strict will not allow 00 : 00 . 0. It comes up as an invalid number if it isn't a string. To be continued....

var clock = document.getElementById('clock');

var hexColor = document.getElementById('hex-color');

var applicationTitle = 'Inside out - js';

var applicationTagLine = 'continuously falling forward into the light...';

window.addEventListener('load', initializeApplication);

function initializeApplication() {
	
	document.title = applicationTitle;
	
	document.body.style.backgroundColor = '#BBB';
	document.body.style.textAlign = 'center';
	document.body.style.fontSize = '3em';
	
	var elWrapper = document.createElement('div');
	elWrapper.id = 'applicationWrapper';
	document.body.appendChild(elWrapper);
	
	var elHeader = document.createElement('header');
	elWrapper.appendChild(elHeader);
	
	var elHeaderTitle = document.createElement('h1');
	elHeaderTitle.innerHTML = applicationTitle;
	elHeader.appendChild(elHeaderTitle);
	
	var elHeaderTagLine = document.createElement('h2');
	elHeaderTagLine.textContent = applicationTagLine;
	elHeaderTagLine.style.fontSize = '.4em';
	elHeader.appendChild(elHeaderTagLine);
	
	var elMain = document.createElement('main');
	elMain.innerHTML = '<p>Hello World!</p>';
	elWrapper.appendChild(elMain);
	
	var elFooter = document.createElement('footer');
	elFooter.innerHTML = '<h4>get excited about learning Javascript....</h4>';
	elWrapper.appendChild(elFooter);
	
	/*var clock = document.createElement('footer');
	clock.innerHTML = clock;
	elFooter.appendChild(clock);
	
	var hexColor = document.createElement('p');
	hexColor.textContent = colorChange;
	elFooter.appendChild(hexColor);*/

	elHeaderTitle.className = 'animated bounceInDown';
	elHeaderTagLine.className = 'animated bounceInLeft';
	elMain.className = 'animated zoomIn';
	elFooter.className = 'animated bounceInRight';
}

function hexClock () {
			//var elFooter = document.createElement('footer');
			//document.getElementById('clock');
			//elFooter.innerHTML = clock;
			var time = new Date();
			var hours = (time.getHours() % 12).toString();
			var minutes = time.getMinutes().toString();
			var seconds = time.getSeconds().toString();
			
		if(hours.length < 2) {
			hours = '0' + hours;
		}

		if(minutes.length < 2){
			minutes = '0' + minutes;
		}

		if (seconds.length < 2){
			seconds = '0' + seconds;
		}

		var clockStr = hours + ' : ' + minutes + ' : ' + seconds;	
		var hexColorStr = '#' + hours + minutes + seconds;

		clock.textContent = clockStr;
		hexColor.textContent = hexColorStr;

		document.body.style.backgroundColor = hexColorStr;
		
		//var elFooter = document.createElement('footer');
	
		//var elFooter = document.createElement('footer');
		//document.getElementById('clock');
		//elFooter.innerHTML = clock;
		//.appendChild(elFooter);
	
		//var hexColor = document.createElement('p');
		//hexColor.textContent = colorChange;
		//elFooter.appendChild(hexColor);

		}

hexClock();
setInterval(hexClock, 1000);

