var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Headline = function (_React$Component) {
	_inherits(Headline, _React$Component);

	function Headline() {
		_classCallCheck(this, Headline);

		return _possibleConstructorReturn(this, (Headline.__proto__ || Object.getPrototypeOf(Headline)).apply(this, arguments));
	}

	_createClass(Headline, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				{ className: 'text-center' },
				React.createElement(
					'h1',
					null,
					'Simon'
				)
			);
		}
	}]);

	return Headline;
}(React.Component);

var Counter = function (_React$Component2) {
	_inherits(Counter, _React$Component2);

	function Counter() {
		_classCallCheck(this, Counter);

		return _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).apply(this, arguments));
	}

	_createClass(Counter, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				{ className: 'text-center card' },
				React.createElement(
					'h3',
					{ id: 'count' },
					'Count --'
				)
			);
		}
	}]);

	return Counter;
}(React.Component);

var Controls = function (_React$Component3) {
	_inherits(Controls, _React$Component3);

	function Controls() {
		_classCallCheck(this, Controls);

		return _possibleConstructorReturn(this, (Controls.__proto__ || Object.getPrototypeOf(Controls)).apply(this, arguments));
	}

	_createClass(Controls, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				{ className: 'text-center' },
				React.createElement(
					'button',
					{ className: 'btn btn-primary', id: 'start' },
					'Start'
				),
				React.createElement(
					'button',
					{ className: 'btn btn-warning', id: 'strict' },
					'Strict'
				),
				React.createElement(
					'button',
					{ className: 'btn btn-danger', id: 'restart' },
					'Restart'
				)
			);
		}
	}]);

	return Controls;
}(React.Component);

var Buttons = function (_React$Component4) {
	_inherits(Buttons, _React$Component4);

	function Buttons() {
		_classCallCheck(this, Buttons);

		return _possibleConstructorReturn(this, (Buttons.__proto__ || Object.getPrototypeOf(Buttons)).apply(this, arguments));
	}

	_createClass(Buttons, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'audio',
					{ id: 'soundCorrect' },
					React.createElement('source', { src: 'https://s3.amazonaws.com/freecodecamp/simonSound1.mp3', type: 'audio/mpeg' })
				),
				React.createElement(
					'audio',
					{ id: 'soundWrong' },
					React.createElement('source', { src: 'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3', type: 'audio/mpeg' })
				),
				React.createElement(
					'audio',
					{ id: 'soundWin' },
					React.createElement('source', { src: 'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3', type: 'audio/mpeg' })
				),
				React.createElement(
					'div',
					{ className: 'row' },
					React.createElement('div', { className: 'col' }),
					React.createElement('div', { className: 'col game-btns selectGrn', id: 'grn',
						onClick: this.handleGreenClick }),
					React.createElement('div', { className: 'col game-btns selectRed', id: 'red' }),
					React.createElement('div', { className: 'col' })
				),
				React.createElement(
					'div',
					{ className: 'row' },
					React.createElement('div', { className: 'col' }),
					React.createElement('div', { className: 'col game-btns selectYlw', id: 'ylw' }),
					React.createElement('div', { className: 'col game-btns selectBlu', id: 'blu' }),
					React.createElement('div', { className: 'col' })
				)
			);
		}
	}]);

	return Buttons;
}(React.Component);

var App = function (_React$Component5) {
	_inherits(App, _React$Component5);

	function App() {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	}

	_createClass(App, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				{ className: 'container' },
				React.createElement(Headline, null),
				React.createElement(Counter, null),
				React.createElement(Controls, null),
				React.createElement(Buttons, null)
			);
		}
	}]);

	return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));

/* Game Sounds */
var soundCorrect = document.getElementById("soundCorrect");
var soundWrong = document.getElementById("soundWrong");
var soundWin = document.getElementById("soundWin");

/* Game Progress */
var choicesPlayer = [];
var choicesRobot = [];
var choicesRobotSpecific = [];
var choicesEqual = "";

/* Game Objects */
var count = 0;

var green = {
	id: 1,
	sound: function sound() {
		soundCorrect.load();
		soundCorrect.play();
		$("#grn").css("background-color", "DarkGreen");
		setTimeout(function () {
			$("#grn").css("background-color", "green");
		}, 1200);
	}
};

var red = {
	id: 2,
	sound: function sound() {
		$("#red").css("background-color", "DarkRed");
		soundCorrect.load();
		soundCorrect.play();
		setTimeout(function () {
			$("#red").css("background-color", "red");
		}, 1200);
	}
};

var yellow = {
	id: 3,
	sound: function sound() {
		$("#ylw").css("background-color", "GoldenRod");
		soundCorrect.load();
		soundCorrect.play();
		setTimeout(function () {
			$("#ylw").css("background-color", "yellow");
		}, 1200);
	}
};

var blue = {
	id: 4,
	sound: function sound() {
		$("#blu").css("background-color", "MidnightBlue");
		soundCorrect.load();
		soundCorrect.play();
		setTimeout(function () {
			$("#blu").css("background-color", "blue");
		}, 1200);
	}
};

// Pre-determine Robot's 20 choices by number
function createRobotChoices() {
	for (i = 0; i < 20; i++) {
		var r = Math.floor(Math.random() * 4) + 1;
		choicesRobot.push(r);
	}

	// Robot's choices by color
	choicesRobot.forEach(function (x) {
		if (x == 1) {
			choicesRobotSpecific.push(green);
		} else if (x == 2) {
			choicesRobotSpecific.push(red);
		} else if (x == 3) {
			choicesRobotSpecific.push(yellow);
		} else {
			choicesRobotSpecific.push(blue);
		}
	});
}

/* Robot choices */
var progress = [];
var progressRobot = [];

// Compares choicesRobot with choicesPlayer
function progressGame() {

	progress = choicesRobotSpecific.slice(0, count);
	progressRobot = choicesRobot.slice(0, count);

	progress.forEach(function (x, index) {
		setTimeout(function () {
			x.sound();
		}, index * 2500);
	});
}

$(document).ready(function () {

	/* Restart Game */
	$("#restart").click(function () {
		count = 1;
		$("#count").text(count);
		choicesRobot = [];
		choicesRobotSpecific = [];
		createRobotChoices();
		progressGame();
	});

	/* Start Game */
	$("#start").click(function () {

		// Initial setup after start
		count = 1;
		choicesRobot = [];
		choicesRobotSpecific = [];

		// Update counter
		$("#count").text(count);

		// Initial setup for robot after start
		createRobotChoices();
		console.log('choicesRobot: ' + choicesRobot);

		/* First Game Step */

		// Initial comparison of player and robot choices 
		if (count <= 20) {
			progressGame();
		}

		// Plays all 20 robot choices
		// choicesRobotSpecific.forEach(function(x, index) {
		// 	setTimeout(function() {
		// 		x.sound();
		// 	}, index * 2000);
		// });

		// Green Button
		$("#grn").mousedown(function () {

			green.sound();

			choicesPlayer.push(green.id);

			// Check if player choices equal robot choices
			choicesEqual = progressRobot.every(function (x, index) {
				return x === choicesPlayer[index];
			});
		});

		$("#grn").mouseup(function () {

			/* If player and robot choices are equal... */
			if (choicesPlayer.length == progressRobot.length && choicesEqual == true) {

				choicesPlayer = [];
				count += 1;
				$("#count").text(count);

				console.log("choicesEqual = true");

				/* Winning the Game */
				if (count == 21) {

					soundWin.play();
					choicesRobot = [];
					choicesRobotSpecific = [];
					createRobotChoices();
					count = 1;
				} else {

					progressGame();
				}
			} else if (choicesPlayer.length == progressRobot.length && choicesEqual == false) {

				soundWrong.load();
				soundWrong.play();
				choicesPlayer = [];

				console.log("choicesEqual = false");
				progressGame();
			} else if (choicesPlayer.length < progressRobot.length) {

				console.log(choicesPlayer);
				console.log("building choices");
			} else {

				count += 1;
				$("#count").text(count);
				console.log("For some reason, choicesEqual = true");
				choicesPlayer = [];
				progressGame();
			}
		});

		// Red Button
		$("#red").mousedown(function () {

			red.sound();
			choicesPlayer.push(red.id);

			choicesEqual = progressRobot.every(function (x, index) {
				return x === choicesPlayer[index];
			});
		});

		$("#red").mouseup(function () {
			if (choicesPlayer.length == progressRobot.length && choicesEqual == true) {

				choicesPlayer = [];
				count += 1;
				$("#count").text(count);
				console.log("choicesEqual = true");

				/* soundWinning the Game */
				if (count == 20) {

					soundWin.load();
					soundWin.play();
					choicesRobot = [];
					choicesRobotSpecific = [];
					createRobotChoices();
					count = 1;
				} else {

					progressGame();
				}
			} else if (choicesPlayer.length == progressRobot.length && choicesEqual == false) {

				soundWrong.load();
				soundWrong.play();
				choicesPlayer = [];
				console.log("choicesEqual = false");

				progressGame();
			} else if (choicesPlayer.length < progressRobot.length) {

				console.log(choicesPlayer);
				console.log("building choices");
			} else {

				count += 1;
				$("#count").text(count);
				console.log("for some reason, choicesEqual = true");
				choicesPlayer = [];
				progressGame();
			}
		});

		// Yellow Button
		$("#ylw").mousedown(function () {

			yellow.sound();
			choicesPlayer.push(yellow.id);

			choicesEqual = progressRobot.every(function (x, index) {
				return x === choicesPlayer[index];
			});
		});

		$("#ylw").mouseup(function () {

			if (choicesPlayer.length == progressRobot.length && choicesEqual == true) {

				choicesPlayer = [];
				count += 1;
				$("#count").text(count);
				console.log("choicesEqual = true");

				/* soundWinning the Game */
				if (count == 20) {

					soundWin.load();
					soundWin.play();
					choicesRobot = [];
					choicesRobotSpecific = [];
					createRobotChoices();
					count = 1;
				} else {

					progressGame();
				}
			} else if (choicesPlayer.length == progressRobot.length && choicesEqual == false) {

				soundWrong.load();
				soundWrong.play();
				choicesPlayer = [];
				console.log("choicesEqual = false");

				progressGame();
			} else if (choicesPlayer.length < progressRobot.length) {

				console.log(choicesPlayer);
				console.log("building choices");
			} else {

				count += 1;
				$("#count").text(count);
				console.log("for some reason, choicesEqual = true");
				choicesPlayer = [];
				progressGame();
			}
		});

		// Blue Button
		$("#blu").mousedown(function () {

			blue.sound();
			choicesPlayer.push(blue.id);

			choicesEqual = progressRobot.every(function (x, index) {
				return x === choicesPlayer[index];
			});
		});

		$("#blu").mouseup(function () {

			if (choicesPlayer.length == progressRobot.length && choicesEqual == true) {

				choicesPlayer = [];
				count += 1;
				$("#count").text(count);
				console.log("choicesEqual = true");

				/* soundWinning the Game */
				if (count == 20) {

					soundWin.load();
					soundWin.play();
					choicesRobot = [];
					choicesRobotSpecific = [];
					createRobotChoices();
					count = 1;
				} else {

					progressGame();
				}
			} else if (choicesPlayer.length == progressRobot.length && choicesEqual == false) {

				soundWrong.load();
				soundWrong.play();
				choicesPlayer = [];
				console.log("choicesEqual = false");

				progressGame();
			} else if (choicesPlayer.length < progressRobot.length) {

				console.log(choicesPlayer);
				console.log("building choices");
			} else {

				count += 1;
				$("#count").text(count);
				console.log("for some reason, choicesEqual = true");
				choicesPlayer = [];
				progressGame();
			}
		});
	});

	/* Strict Mode */
	$("#strict").click(function () {

		count = 1;
		choicesRobot = [];
		choicesRobotSpecific = [];
		$("#count").text(count);
		createRobotChoices();

		/* Game Button Feedback */
		console.log(choicesRobot);

		/* Robot choices */
		var progress = [];
		var progressRobot = [];

		// Compares choicesRobot with choicesPlayer
		var choicesEqual = "";
		function progressGame() {

			progress = choicesRobotSpecific.slice(0, count);
			progressRobot = choicesRobot.slice(0, count);
			progress.forEach(function (x, index) {
				setTimeout(function () {
					x.sound();
				}, index * 2500);
			});
		}

		function progressGameStrict() {

			progress = choicesRobotSpecific.slice(0, count - count + 1);
			progressRobot = choicesRobot.slice(0, count - count + 1);
			progress.forEach(function (x, index) {
				setTimeout(function () {
					x.sound();
				}, index * 2500);
			});
		}

		/* Restart Game */
		$("#restart").click(function () {

			count = 1;
			$("#count").text(count);
			choicesRobot = [];
			choicesRobotSpecific = [];
			createRobotChoices();
			console.log(choicesRobot);
			progressGameStrict();
		});

		/* First Game Step */
		if (count <= 20) {

			progressGame();
		}

		// Plays all 20 robot choices
		// choicesRobotSpecific.forEach(function(x, index) {
		// 	setTimeout(function() {
		// 		x.sound();
		// 	}, index * 2000);
		// });

		// Green Button
		$("#grn").mousedown(function () {

			green.sound();
			choicesPlayer.push(green.id);

			choicesEqual = progressRobot.every(function (x, index) {
				return x === choicesPlayer[index];
			});
		});

		$("#grn").mouseup(function () {

			if (choicesPlayer.length == progressRobot.length && choicesEqual == true) {

				choicesPlayer = [];
				count += 1;
				$("#count").text(count);
				console.log("choicesEqual = true");

				/* soundWinning the Game */
				if (count >= 21) {

					soundWin.load();
					soundWin.play();
					choicesRobot = [];
					choicesRobotSpecific = [];
					createRobotChoices();
					count = 1;
					progressGame();
				} else {

					progressGame();
				}
			} else if (choicesPlayer.length == progressRobot.length && choicesEqual == false) {

				soundWrong.load();
				soundWrong.play();
				count = 1;
				$("#count").text(count);
				choicesPlayer = [];

				console.log("choicesEqual = false");
				choicesRobot = [];
				choicesRobotSpecific = [];
				createRobotChoices();

				progressGameStrict();
			} else if (choicesPlayer.length < progressRobot.length) {

				console.log(choicesPlayer);
				console.log("building choices");
			} else {

				count += 1;
				$("#count").text(count);
				console.log("For some reason, choicesEqual = true");
				choicesPlayer = [];
				progressGame();
			}
		});

		// Red Button
		$("#red").mousedown(function () {

			red.sound();
			choicesPlayer.push(red.id);

			choicesEqual = progressRobot.every(function (x, index) {
				return x === choicesPlayer[index];
			});
		});

		$("#red").mouseup(function () {

			if (choicesPlayer.length == progressRobot.length && choicesEqual == true) {

				choicesPlayer = [];
				count += 1;
				$("#count").text(count);
				console.log("choicesEqual = true");

				/* soundWinning the Game */
				if (count >= 21) {
					soundWin.load();
					soundWin.play();
					choicesRobot = [];
					choicesRobotSpecific = [];
					createRobotChoices();
					count = 1;
					progressGame();
				} else {
					progressGame();
				}
			} else if (choicesPlayer.length == progressRobot.length && choicesEqual == false) {

				soundWrong.load();
				soundWrong.play();
				count = 1;
				$("#count").text(count);
				choicesPlayer = [];
				console.log("choicesEqual = false");
				choicesRobot = [];
				choicesRobotSpecific = [];
				createRobotChoices();

				progressGameStrict();
			} else if (choicesPlayer.length < progressRobot.length) {

				console.log(choicesPlayer);
				console.log("building choices");
			} else {

				count += 1;
				$("#count").text(count);
				console.log("for some reason, choicesEqual = true");
				choicesPlayer = [];
				progressGame();
			}
		});

		// Yellow Button
		$("#ylw").mousedown(function () {

			yellow.sound();
			choicesPlayer.push(yellow.id);

			choicesEqual = progressRobot.every(function (x, index) {
				return x === choicesPlayer[index];
			});
		});

		$("#ylw").mouseup(function () {

			if (choicesPlayer.length == progressRobot.length && choicesEqual == true) {

				choicesPlayer = [];
				count += 1;
				$("#count").text(count);
				console.log("choicesEqual = true");

				/* soundWinning the Game */
				if (count >= 21) {

					soundWin.load();
					soundWin.play();
					choicesRobot = [];
					choicesRobotSpecific = [];
					createRobotChoices();
					count = 1;
					progressGame();
				} else {

					progressGame();
				}
			} else if (choicesPlayer.length == progressRobot.length && choicesEqual == false) {

				soundWrong.load();
				soundWrong.play();
				count = 1;
				$("#count").text(count);
				choicesPlayer = [];
				console.log("choicesEqual = false");
				choicesRobot = [];
				choicesRobotSpecific = [];
				createRobotChoices();

				progressGameStrict();
			} else if (choicesPlayer.length < progressRobot.length) {

				console.log(choicesPlayer);
				console.log("building choices");
			} else {

				count += 1;
				$("#count").text(count);
				console.log("for some reason, choicesEqual = true");
				choicesPlayer = [];
				progressGame();
			}
		});

		// Blue Button
		$("#blu").mousedown(function () {

			blue.sound();
			choicesPlayer.push(blue.id);

			choicesEqual = progressRobot.every(function (x, index) {
				return x === choicesPlayer[index];
			});
		});

		$("#blu").mouseup(function () {

			if (choicesPlayer.length == progressRobot.length && choicesEqual == true) {

				choicesPlayer = [];
				count += 1;
				$("#count").text(count);
				console.log("choicesEqual = true");

				/* soundWinning the Game */
				if (count >= 21) {

					soundWin.load();
					soundWin.play();
					choicesRobot = [];
					choicesRobotSpecific = [];
					createRobotChoices();
					count = 1;
					progressGame();
				} else {

					progressGame();
				}
			} else if (choicesPlayer.length == progressRobot.length && choicesEqual == false) {

				soundWrong.load();
				soundWrong.play();
				count = 1;
				$("#count").text(count);
				choicesPlayer = [];
				console.log("choicesEqual = false");
				choicesRobot = [];
				choicesRobotSpecific = [];
				createRobotChoices();

				progressGameStrict();
			} else if (choicesPlayer.length < progressRobot.length) {

				console.log(choicesPlayer);
				console.log("building choices");
			} else {

				count += 1;
				$("#count").text(count);
				console.log("for some reason, choicesEqual = true");
				choicesPlayer = [];
				progressGame();
			}
		});
	});
});