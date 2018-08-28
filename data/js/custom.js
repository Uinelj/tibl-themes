
var themes = {
 	"sakura": {
	  "name": "Sakura (default)",
	  "href": "css/sakura.css",
	  "link": "https://github.com/oxalorg/sakura"
	},
 	"sakura-earthly": {
	  "name": "Sakura Earthly",
	  "href": "css/sakura-earthly.css",
	  "link": "https://github.com/oxalorg/sakura"
	},
 	"sakura-vader": {
	  "name": "Sakura Vader",
	  "href": "css/sakura-vader.css",
	  "link": "https://github.com/oxalorg/sakura"
	},
 	"sakura-dark": {
	  "name": "Sakura Dark",
	  "href": "css/sakura-dark.css",
	  "link": "https://github.com/oxalorg/sakura"
	},
 	"marx": {
	  "name": "Marx",
	  "href": "css/marx.min.css",
	  "link": "https://github.com/oxalorg/sakura"
	},
 	"cocoa": {
	  "name": "Cocoa",
	  "href": "css/cocoa.css",
	  "link": "https://github.com/oxalorg/sakura"
	},
 	"motherf": {
	  "name": "Motherf*",
	  "href": "css/mother.css",
	  "link": "https://github.com/oxalorg/sakura"
	},
 	"hack": {
	  "name": "hack (coming soon)",
	  "href": "",
	  "link": ""
	},
 	"after-dark": {
	  "name": "After Dark (coming soon)",
	  "href": "",
	  "link": ""
	},
 }

function set_theme(theme_name) {
  var current_theme = document.getElementById("theme");
  current_theme.href = themes[theme_name].href;
  sessionStorage.setItem('theme', theme_name);
}

if(sessionStorage.getItem('theme')) {
  set_theme(sessionStorage.getItem('theme'));
}
