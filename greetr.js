(function(global, $) {

	var Greetr = function(fname, lname, lang) {
		return new Greetr.init(fname, lname, lang);
	}

	Greetr.init = function(fname, lname, lang) {
		this.fname = fname || 'default';
		this.lname = lname || 'default';
		this.lang = lang || 'en';
	}

	var suppordetLangs = ['en', 'es'];

	var greetings = {
		en: 'Hello',
		es: 'Hola'
	};

	var formalGreetings = {
		en: 'Greetings',
		es: 'Saludos'
	};

	Greetr.prototype = {
		fullName: function() {
			return this.fname + ' ' + this.lname;
		},
		greeting: function () {
			return greetings[this.lang] + ' ' + this.fname + '!';
		},
		formalGreeting: function () {
			return formalGreetings[this.lang] + ' ' + this.fullName();
		},
		updateText: function(selector) {
			jQuery(selector).text(this.formalGreeting());
		}
	};

	Greetr.init.prototype = Greetr.prototype;
	global.Greetr = global.G$ = Greetr;


})(window, jQuery);