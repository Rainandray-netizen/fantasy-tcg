module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    "plugins": [
	    [
	      "module-resolver",
	      {
	        "root": ["./"],
	        "alias": {
	        	"@decks": "./assets/decks",
	          "@components": "./Components",
	          "@contexts": "./contexts",
	          "@constants": "./constants",
	          // "@screens": "./src/screens",
	        }
	      },
	    ],
	  ],
  };
};
