# iop-4xx
PRG-160-3485 Repo for 4xx project JS

https://4xx.dbachl.com

inside out project version 400.0
	- added base code to index.html and added initial JavaScript to app.js page
	
inside out project version 401-0
	- created the appData object
	- moved the title & tag line variables into appData
	- refactored the initializeApplication function.

inside out project version 401-1
	- added bootstrap to the index.html 
	- added a DOM injection of the progressbar to app.js
	- created the displayPB function in the app.js
	
inside out project version 402-0
	- added style.css and linked in index.html
	- added login form function and call after progress bar is completed	
	-added minimal validateLogin function to check for blank strings
	
inside out project version 403-0
	- moved stylesheet link below animate and bootstrap to allow fore custom styles to override all
	-style.css
		- added styles for application interface - sidebar, wrapper, navigation, etc.
	-app.js
		-added the applicationUserInterface function which defines the application user interface
		-added the buildMenu function which returns the navigation menu and will increase in dynamic navigation building. 
		-added the buildMain function which returns the primary content area and will evolve to return content dynamically. 
		-replaced document write with call to applicationUserInterface function in the validateLogin function.
		-added the linkClicked function which is calledby click events on anchor elements and returns dynamically driven results.
		
inside out project version 404-0
	- index.html
		- code changes https://www.diffchecker.com/oybNnzTY
		- removed comments and cleaned code
		- added script tag for quotes.js file
	- style.css
		-code changes at https://www.diffchecker.com/114fW8QY
		-added the quotArr sort to the initializeApplication function
		-modified buildMenu function to dynamically build the menu from the array
		-modified linkClicked function to dynamically populate main content with array content
	- added the assets/data/quotes.js file
		- code changes https://www.diffchecker.com/ylRCv0UM
		- used find and replace function to locate and replace all trademark characters with apostrophes in the text.
inside out project version 405-0
	-index.html
		-added script tag to pull in ajax.js file
	-style.css
		-modified .contStage by adjusting the (left: 180px;) - changed value to 80px to close gap between side menu and content
		-cleaned up comments
	-app.js
		-cleaned up comments
		-added sideMenu array to the appData object to be used to call ajax to load the pages and posts from the me site
		-modified the displayPB() function - changed preloader time from 50 to 15 speed to speed up load during development
		-modified the buildMenu() function to accept menu items from appData object - removed call to quotes array
		-modified the linkClicked () function
			-added conditional to evaluate if the objet clicked is in the menu array of the appData.sideMenu object
			-added ajax call to grab posts and pages
	-added the assets/js/ajax.js file
		