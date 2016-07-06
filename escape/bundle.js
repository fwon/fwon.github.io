/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:3000/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4);


/***/ },
/* 1 */
/***/ function(module, exports) {

	/**
	 * 地图类
	 */

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Map = (function () {
	    function Map() {
	        _classCallCheck(this, Map);
	    }

	    _createClass(Map, [{
	        key: "init",
	        value: function init(options) {
	            this.canvas = options.canvas;
	            this.ctx = this.canvas.getContext('2d');
	            this.width = options.width;
	            this.height = options.height;
	        }
	    }, {
	        key: "clear",
	        value: function clear() {
	            this.ctx.clearRect(0, 0, this.width, this.height);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            this.clear();
	            this.ctx.fillStyle = "black";
	            this.ctx.fillRect(0, 0, this.width, this.height);
	        }
	    }]);

	    return Map;
	})();

	exports["default"] = new Map();
	module.exports = exports["default"];

/***/ },
/* 2 */
/***/ function(module, exports) {

	/**
	 * 游戏中所有点的基类
	 */
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Point = function Point(options) {
	    _classCallCheck(this, Point);

	    if (options) {
	        this.x = options.x || 1;
	        this.y = options.y || 1;
	        this.radius = options.radius;
	        this.color = options.color;
	    }
	};

	exports["default"] = Point;
	module.exports = exports["default"];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * 敌人粒子类
	 */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _Map = __webpack_require__(1);

	var _Map2 = _interopRequireDefault(_Map);

	var _Point2 = __webpack_require__(2);

	var _Point3 = _interopRequireDefault(_Point2);

	var Enemy = (function (_Point) {
	    _inherits(Enemy, _Point);

	    function Enemy(options) {
	        _classCallCheck(this, Enemy);

	        _get(Object.getPrototypeOf(Enemy.prototype), 'constructor', this).call(this, options);
	        this.radius = Math.random() * 2 + 3;
	        this.color = "red";
	        this.vx = 0;
	        this.vy = 0;
	        this.speed = options.speed || Math.random() * 1 + 0.5;
	        this.type = options.type || 'normal';
	        this.ratio = window.innerHeight / window.innerWidth;
	    }

	    _createClass(Enemy, [{
	        key: 'update',
	        value: function update() {
	            this.x -= this.speed;
	            this.y += this.speed;

	            if (this.x < -10) {
	                this.x = _Map2['default'].width + 10 + Math.random() * 30;
	            }
	            if (this.y > _Map2['default'].height + 10) {
	                this.y = -10 + Math.random() * -30;
	            }
	        }
	    }, {
	        key: 'speedUp',
	        value: function speedUp(speed) {
	            this.speed += speed || 0.2;
	        }
	    }, {
	        key: 'speedDown',
	        value: function speedDown(speed) {
	            var _speed = speed || 0.8;
	            if (this.speed > _speed) this.speed -= _speed;
	        }
	    }, {
	        key: 'minimize',
	        value: function minimize(size) {
	            var _size = size || 2;
	            if (this.radius > _size) this.radius -= _size;
	        }
	    }, {
	        key: 'magnify',
	        value: function magnify(size) {
	            this.radius += size || 2;
	        }

	        //躲避player
	    }, {
	        key: 'escape',
	        value: function escape(player) {
	            // let angle = Math.atan(Math.abs(player.y - this.y) / Math.abs(player.x - this.x));
	            // let addX = (player.gravityRadius) * Math.cos(angle);
	            // let addY = (player.gravityRadius) * Math.sin(angle);

	            // if (this.x > player.x && this.x < player.x + addX) {
	            //     this.x += this.speed * 2;
	            // } else if (this.x < player.x && this.x > player.x - addX) {
	            //     this.x -= this.speed * 2;   
	            // }

	            // if (this.y > player.y && this.y < player.y + addY) {
	            //     this.y += this.speed;
	            // } else if (this.y < player.y && this.y > player.y - addY) {
	            //     this.y -= this.speed;   
	            // }

	            // if (this.y > player.y + addY) {
	            //     console.log('a');
	            //     this.x -= this.speed * Math.sin(angle);
	            //     this.y -= this.speed * Math.cos(angle);
	            // } else {
	            //     console.log('b');
	            //     this.x += this.speed * Math.sin(angle);
	            //     this.y += this.speed * Math.cos(angle);
	            // }
	            var ratio = 1 / 30;
	            var angle = Math.atan2(this.y - player.y, this.x - player.x);
	            var ax = Math.abs(player.gravityRadius * Math.cos(angle));
	            ax = this.x > player.x ? ax : -ax;

	            var ay = Math.abs(player.gravityRadius * Math.sin(angle));
	            ay = this.y > player.y ? ay : -ay;

	            this.vx += ax * ratio;
	            this.vy += ay * ratio;
	            this.x += this.vx * ratio;
	            this.y += this.vy * ratio;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var self = this;

	            _Map2['default'].ctx.beginPath();

	            _Map2['default'].ctx.fillStyle = self.color;
	            _Map2['default'].ctx.arc(self.x, self.y, self.radius, 0, Math.PI * 2, false);
	            _Map2['default'].ctx.fill();
	        }
	    }]);

	    return Enemy;
	})(_Point3['default']);

	exports['default'] = Enemy;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * entry
	 */

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(12);

	var _jsMap = __webpack_require__(1);

	var _jsMap2 = _interopRequireDefault(_jsMap);

	var _jsEnemy = __webpack_require__(3);

	var _jsEnemy2 = _interopRequireDefault(_jsEnemy);

	var _jsSkill = __webpack_require__(8);

	var _jsSkill2 = _interopRequireDefault(_jsSkill);

	var _jsPlayer = __webpack_require__(7);

	var _jsPlayer2 = _interopRequireDefault(_jsPlayer);

	var _jsLoader = __webpack_require__(9);

	var _jsLoader2 = _interopRequireDefault(_jsLoader);

	var _jsLoading = __webpack_require__(10);

	var enemyCount = 30;
	var player = undefined;
	var enemys = [];
	var skillPoint = undefined;
	var holdingTime = 0;
	var holdingLevel = 0;
	var timer = undefined;

	var startPage = document.getElementById("start-page");
	var loadingPage = document.getElementById("loading-page");
	var startBtn = document.getElementById("start-button");
	var helpBtn = document.getElementById("help-button");
	var gameTitle = document.getElementById("game-title");
	var gameBtn = document.getElementById("game-btn");
	var restartBtn = document.getElementById("restart");
	var startInfo = document.getElementById("introduction");
	var world = document.getElementById("game");
	var gamePanel = document.getElementById("game-panel");
	var gameOver = document.getElementById("game-over");
	var timeEle = document.getElementById("time");
	var levelEle = document.getElementById("level");

	var raf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
	    window.setTimeout(callback, 1000 / 60);
	};

	//地图初始化
	var canvas = document.getElementById('world');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	_jsMap2['default'].init({
	    canvas: canvas,
	    width: window.innerWidth,
	    height: window.innerHeight
	});

	//添加红色点
	function createEnemy(numEnemy) {
	    enemys = [];
	    for (var i = 0; i < numEnemy; i++) {
	        var x = Math.random() * _jsMap2['default'].width + _jsMap2['default'].width;
	        var y = Math.random() * _jsMap2['default'].height;
	        enemys.push(new _jsEnemy2['default']({ x: x, y: y }));
	    }
	}

	//添加技能点
	function createSkill() {
	    var x = Math.random() * _jsMap2['default'].width + _jsMap2['default'].width;
	    var y = -Math.random() * _jsMap2['default'].height;
	    var speed = Math.random() * 1 + 1;
	    var type = ['shield', 'gravity', 'time', 'minimize', 'life', ''][Math.floor(Math.random() * 5)];

	    skillPoint = new _jsSkill2['default']({ x: x, y: y, type: type });
	}

	//碰撞检测
	function collision(enemy, player) {
	    var disX = player.x - enemy.x;
	    var disY = player.y - enemy.y;
	    if (player.hasGravity) {
	        return Math.hypot(disX, disY) < player.gravityRadius + enemy.radius;
	    } else if (player.hasShield) {
	        return Math.hypot(disX, disY) < player.shieldRadius + enemy.radius;
	    }
	    return Math.hypot(disX, disY) < player.radius + enemy.radius;
	}

	//添加计时器
	function initTimer() {
	    holdingTime = 0;
	    holdingLevel = 0;
	    clearTimeout(timer);
	    var time = function time() {
	        timer = setTimeout(function () {
	            holdingTime = +timeEle.innerText + 1;
	            timeEle.innerText = holdingTime;
	            //每隔10秒加速一次
	            if (holdingTime % 10 === 0) {
	                holdingLevel++;
	                levelEle.innerText = holdingLevel;
	                for (var i = 0; i < enemys.length; i++) {
	                    enemys[i].speedUp();
	                }
	            }
	            clearTimeout(timer);
	            time();
	        }, 1000);
	    };
	    time();
	}

	//循环动画
	var enemyIndex;
	var skillId;
	var hadCollision = false;
	function animate() {
	    _jsMap2['default'].render();

	    //红色粒子撞击判断
	    for (var i = 0; i < enemys.length; i++) {
	        enemys[i].render();
	        enemys[i].update();
	        if (!player.dead && collision(enemys[i], player)) {
	            if (player.hasGravity) {
	                enemys[i].escape(player);
	            }
	            if (i !== enemyIndex) {

	                if (player.lives === 0) {
	                    player.destroy();
	                    finalScore();
	                }

	                player.collision(enemys[i].x, enemys[i].y);

	                if (player.hasShield) {
	                    enemys.splice(i, 1);
	                    enemys.push(new _jsEnemy2['default']({
	                        x: Math.random() * _jsMap2['default'].width + _jsMap2['default'].width,
	                        y: Math.random() * _jsMap2['default'].height
	                    }));
	                }

	                enemyIndex = i;
	            }

	            hadCollision = true;
	        }
	    }

	    //技能粒子撞击判断
	    if (collision(skillPoint, player)) {
	        if (!skillPoint.isEated && skillPoint.id !== skillId) {
	            player.setSkill(skillPoint.type);
	            skillId = skillPoint.id;
	            skillPoint.use();
	        }
	        hadCollision = true;
	    }

	    //碰到墙壁就狗带
	    if (player.x < 0 || player.x > _jsMap2['default'].width || player.y < 0 || player.y > _jsMap2['default'].height) {
	        if (!player.dead) finalScore();
	        player.destroy();
	    }

	    //一个粒子只进行一次撞击判断
	    if (hadCollision) {
	        hadCollision = false;
	    } else {
	        enemyIndex = null;
	        skillId = null;
	    }

	    skillPoint.render();
	    skillPoint.update();
	    player.render();

	    raf(animate);
	}

	//所有角色的初始化
	function initRoles() {
	    createEnemy(enemyCount);
	    player = new _jsPlayer2['default']({
	        x: _jsMap2['default'].width / 5,
	        y: _jsMap2['default'].height * 0.6,
	        enemys: enemys //引用用于相互作用
	    });
	    createSkill();
	}

	//最后分数
	function finalScore() {
	    gamePanel.style.display = "none";
	    gameOver.style.display = "block";
	    var time = holdingTime + '';
	    var timeStr = '';
	    for (var i = 0; i < time.length; i++) {
	        timeStr += '<span class="num-' + time[i] + '"></span>';
	    }
	    document.getElementById("score-date").innerHTML = timeStr;
	}

	//开始界面的背景
	function renderBackground() {
	    createEnemy(enemyCount);
	    (function animate() {
	        if (gameStart) return;
	        _jsMap2['default'].render();
	        //红色粒子撞击判断
	        for (var i = 0; i < enemys.length; i++) {
	            enemys[i].render();
	            enemys[i].update();
	        }
	        raf(animate);
	    })();
	}

	//重新开始游戏
	function resetGame() {
	    startInfo.style.display = "none";
	    world.style.display = "block";
	    gamePanel.style.display = "block";
	    gameOver.style.display = "none";
	    gameStart = true;
	    timeEle.innerText = '0';
	    levelEle.innerText = '0';

	    initRoles();
	    initTimer();
	}

	//场景交互
	var gameStart = false;
	function start() {
	    renderBackground();
	    gameTitle.classList.add('active');
	    gameBtn.classList.add('active');
	    startBtn.addEventListener('click', function () {
	        resetGame();
	        animate(); //animate只能调用一次
	    });
	    startBtn.addEventListener('touchstart', function () {
	        resetGame();
	        animate(); //animate只能调用一次
	    });
	    helpBtn.addEventListener('click', function () {
	        console.log(document.getElementById("legend").style);
	        document.getElementById("legend").style.opacity = document.getElementById("legend").style.opacity == '1' ? '0' : '1';
	    });
	    restartBtn.addEventListener('click', function () {
	        return resetGame();
	    });
	    restartBtn.addEventListener('touchstart', function () {
	        return resetGame();
	    });
	}

	//进度条渲染
	var barRatio = 0;
	(function loading() {
	    (0, _jsLoading.draw)(barRatio);
	    if (barRatio !== 1) {
	        raf(loading);
	    }
	})();

	//图片资源提前加载
	var loader = new _jsLoader2['default']();
	loader.load([{ src: 'assets/images/number.png' }, { src: 'assets/images/over.png' }, { src: 'assets/images/sprites.png' }], function () {
	    startPage.style.display = "block";
	    loadingPage.style.display = "none";
	    start();
	});

	//根据加载进度渲染进度条
	var loaded = 0;
	loader.on('load', function (e) {
	    ++loaded;
	    barRatio = loaded / 4;
	});

	if (false) {
	    module.hot.accept();
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * 尾巴中的生命粒子
	 */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _Map = __webpack_require__(1);

	var _Map2 = _interopRequireDefault(_Map);

	var _Point2 = __webpack_require__(2);

	var _Point3 = _interopRequireDefault(_Point2);

	var Life = (function (_Point) {
	    _inherits(Life, _Point);

	    function Life(options) {
	        _classCallCheck(this, Life);

	        _get(Object.getPrototypeOf(Life.prototype), 'constructor', this).call(this, options);
	        this.dead = false;
	    }

	    _createClass(Life, [{
	        key: 'render',
	        value: function render(pos) {
	            var self = this;

	            //粒子撞击后不渲染
	            if (!this.dead) {
	                _Map2['default'].ctx.beginPath();
	                _Map2['default'].ctx.fillStyle = self.color;
	                _Map2['default'].ctx.arc(pos.x, pos.y, 3, 0, 2 * Math.PI, false);
	                _Map2['default'].ctx.fill();
	            }
	        }
	    }]);

	    return Life;
	})(_Point3['default']);

	exports['default'] = Life;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * 撞击后的粒子
	 */

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _Map = __webpack_require__(1);

	var _Map2 = _interopRequireDefault(_Map);

	var rand = Math.random;

	var Particle = (function () {
	    function Particle(options) {
	        _classCallCheck(this, Particle);

	        this.x = options.x;
	        this.y = options.y;
	        this.vx = -2 + 4 * rand();
	        this.vy = -2 + 4 * rand();
	        this.destroy = false;
	        this.speed = 0.04;
	        this.size = options.size || 2;
	        this.color = options.color || "rgb(30,136,168)";
	        this.width = this.size + rand() * 2;
	        this.height = this.size + rand() * 2;
	    }

	    _createClass(Particle, [{
	        key: "update",
	        value: function update() {
	            this.x += this.vx;
	            this.y += this.vy;

	            this.width -= this.speed;
	            this.height -= this.speed;

	            if (this.width < 0) {
	                this.destroy = true;
	            }
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            _Map2["default"].ctx.fillStyle = this.color;
	            _Map2["default"].ctx.fillRect(this.x, this.y, this.width, this.height);
	        }
	    }]);

	    return Particle;
	})();

	exports["default"] = Particle;
	module.exports = exports["default"];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * 玩家粒子
	 */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _Point2 = __webpack_require__(2);

	var _Point3 = _interopRequireDefault(_Point2);

	var _Map = __webpack_require__(1);

	var _Map2 = _interopRequireDefault(_Map);

	var _Life = __webpack_require__(5);

	var _Life2 = _interopRequireDefault(_Life);

	var _Particle = __webpack_require__(6);

	var _Particle2 = _interopRequireDefault(_Particle);

	function detect(arr, val) {
	    return arr.some(function (v) {
	        return val.match(v);
	    });
	}
	var devices = ["android", "webos", "iphone", "ipad", "ipod", "blackberry", "windows phone", "mobile"];
	var agent = navigator.userAgent.toLowerCase();
	var isMobile = detect(devices, agent);
	var BODYCOLOR = "rgb(30,136,168)";
	var REDSCORE = 2; //撞击每个红点的分数
	var dis = 1; //每个几帧画一个尾巴粒子的计数器

	var Player = (function (_Point) {
	    _inherits(Player, _Point);

	    function Player(options) {
	        _classCallCheck(this, Player);

	        _get(Object.getPrototypeOf(Player.prototype), 'constructor', this).call(this, options);
	        this.enemys = options.enemys;
	        this.color = options.color || BODYCOLOR;
	        this.radius = 5;
	        this.lives = options.lives || 2; //生命值
	        this.livesPoint = [];
	        this.tail = []; //尾巴位置数组
	        this.tailLen = 25; //尾巴长度
	        this.skill = null;
	        this.shieldRadius = 20;
	        this.shieldColor = "rgba(30,136,168,0.6)";
	        this.gravityRadius = 80;
	        this.gravityTime = 500;
	        this.particleCount = 30;
	        this.particles = [];
	        this.addScore = [];
	        this.binding();
	        this.initLife();
	    }

	    _createClass(Player, [{
	        key: 'binding',
	        value: function binding() {
	            var self = this;

	            if (isMobile) {
	                self.moveTo(self.x, self.y);
	                window.addEventListener('touchstart', function (e) {
	                    e.preventDefault();
	                    self.touchStartX = e.touches[0].pageX;
	                    self.touchStartY = e.touches[0].pageY;
	                });
	                //手机上用位移计算位置
	                window.addEventListener('touchmove', function (e) {
	                    e.preventDefault();
	                    var moveX = e.touches[0].pageX - self.touchStartX;
	                    var moveY = e.touches[0].pageY - self.touchStartY;
	                    self.moveTo(self.x + moveX, self.y + moveY);
	                    self.touchStartX = e.touches[0].pageX;
	                    self.touchStartY = e.touches[0].pageY;
	                });
	            } else {
	                window.addEventListener('mousemove', function () {
	                    var e = arguments.length <= 0 || arguments[0] === undefined ? window.event : arguments[0];

	                    self.moveTo(e.clientX - 10, e.clientY - 30);
	                });
	            }
	        }
	    }, {
	        key: 'moveTo',
	        value: function moveTo(posX, posY) {
	            this.x = posX;
	            this.y = posY;
	        }

	        //爆炸方法
	    }, {
	        key: 'boom',
	        value: function boom(x, y, color, size) {
	            var self = this;
	            var eachPartical = [];
	            for (var i = 0; i < self.particleCount; i++) {
	                eachPartical.push(new _Particle2['default']({ x: x, y: y, color: color, size: size }));
	            }
	            self.particles.push(eachPartical);
	        }

	        //撞击
	    }, {
	        key: 'collision',
	        value: function collision(enemyX, enemyY) {
	            if (this.hasShield) {
	                this.boom(enemyX || this.x, enemyY || this.y, "red");
	                this.addScore.push({
	                    x: enemyX,
	                    y: enemyY,
	                    opacity: 1
	                });
	                var score = document.getElementById('time').innerText;
	                document.getElementById('time').innerText = +score + REDSCORE;
	            } else if (this.hasGravity) {
	                //do nothing
	            } else {
	                    this.minusLife();
	                    this.boom(this.x, this.y);
	                    this.flash();
	                }
	        }

	        //初始化生命值
	    }, {
	        key: 'initLife',
	        value: function initLife() {
	            this.livesPoint = [];
	            for (var i = 0; i < this.lives; i++) {
	                this.livesPoint.push(new _Life2['default']({}));
	            }
	        }

	        //增加生命值
	    }, {
	        key: 'addLife',
	        value: function addLife() {
	            this.lives++;
	            //死亡的子节点只标记为dead，并不会移除
	            if (this.livesPoint.length < this.lives) {
	                this.livesPoint.push(new _Life2['default']({}));
	            } else {
	                this.livesPoint[this.lives - 1].dead = false;
	            }

	            this.changeTailLen();
	        }

	        //减掉生命值
	    }, {
	        key: 'minusLife',
	        value: function minusLife() {
	            if (this.lives > 0) {
	                var life = this.livesPoint[this.lives - 1];
	                life.dead = true;
	                this.lives--;
	            } else {
	                //dead
	                this.destroy();
	            }

	            this.changeTailLen();
	        }

	        //改变尾巴长度
	    }, {
	        key: 'changeTailLen',
	        value: function changeTailLen() {
	            if (this.lives > 2) {
	                this.tailLen = 25 + (this.lives - 2) * 5;
	            } else {
	                this.tailLen = 25;
	            }
	        }

	        //失去生命的时候身体闪烁
	    }, {
	        key: 'flash',
	        value: function flash() {
	            var self = this;

	            self.flashing = true;
	            var timeout = setTimeout(function () {
	                self.flashing = false;
	                self.color = BODYCOLOR;
	                clearTimeout(timeout);
	            }, 500);
	        }
	    }, {
	        key: 'destroy',
	        value: function destroy() {
	            this.dead = true;
	            this.lives = -1;
	        }
	    }, {
	        key: 'setSkill',
	        value: function setSkill(type) {
	            var self = this;

	            self.skill = type;

	            switch (self.skill) {
	                case 'time':
	                    if (self.enemys) {
	                        (function () {
	                            for (var i = 0; i < self.enemys.length; i++) {
	                                self.enemys[i].speedDown();
	                            }
	                            var timeout = setTimeout(function () {
	                                for (var i = 0; i < self.enemys.length; i++) {
	                                    self.enemys[i].speedUp(0.8);
	                                }
	                                clearTimeout(timeout);
	                            }, 8000);
	                        })();
	                    }
	                    break;
	                case 'minimize':
	                    if (self.enemys) {
	                        (function () {
	                            for (var i = 0; i < self.enemys.length; i++) {
	                                self.enemys[i].minimize();
	                            }
	                            var timeout = setTimeout(function () {
	                                for (var i = 0; i < self.enemys.length; i++) {
	                                    self.enemys[i].magnify();
	                                }
	                                clearTimeout(timeout);
	                            }, 8000);
	                        })();
	                    }
	                    break;
	                case 'life':
	                    self.addLife();
	                    break;
	                case 'shield':
	                    self.hasShield = true;
	                    break;
	                case 'gravity':
	                    self.hasGravity = true;
	                    self['break'];
	                default:
	                    break;
	            }
	        }
	    }, {
	        key: 'recordTail',
	        value: function recordTail() {
	            var self = this;
	            if (self.tail.length > self.tailLen) {
	                self.tail.splice(0, self.tail.length - self.tailLen);
	            }
	            self.tail.push({
	                x: self.x,
	                y: self.y
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var self = this;

	            if (!self.dead) {
	                _Map2['default'].ctx.beginPath();

	                //闪烁效果
	                if (self.flashing) {
	                    self.color = ["#fff", BODYCOLOR][Math.round(Math.random())];
	                }

	                _Map2['default'].ctx.fillStyle = self.color;
	                _Map2['default'].ctx.arc(self.x, self.y, self.radius, 0, Math.PI * 2, false);
	                _Map2['default'].ctx.fill();

	                if (dis % 2) self.recordTail();
	                dis++;

	                if (self.tail.length > self.tailLen - 10) {
	                    self.renderTail();
	                }

	                //有护盾
	                if (self.hasShield) self.renderShield();

	                //有重力
	                if (self.hasGravity) self.renderGravity();

	                //分数
	                if (self.addScore.length) self.renderAddScore();
	            }

	            //爆炸
	            if (self.particles.length) self.renderBoom();
	        }
	    }, {
	        key: 'renderTail',
	        value: function renderTail() {
	            var self = this;
	            var tails = self.tail,
	                prevPot = undefined,
	                nextPot = undefined;
	            _Map2['default'].ctx.beginPath();
	            _Map2['default'].ctx.lineWidth = 2;
	            _Map2['default'].ctx.strokeStyle = self.color;

	            for (var i = 0; i < tails.length - 1; i++) {
	                prevPot = tails[i];
	                nextPot = tails[i + 1];
	                if (i === 0) {
	                    _Map2['default'].ctx.moveTo(prevPot.x, prevPot.y);
	                } else {
	                    _Map2['default'].ctx.quadraticCurveTo(prevPot.x, prevPot.y, prevPot.x + (nextPot.x - prevPot.x) / 2, prevPot.y + (nextPot.y - prevPot.y) / 2);
	                }

	                //保持尾巴最小长度，并有波浪效果
	                prevPot.x -= 1.5;
	                prevPot.y += 1.5;
	            }

	            _Map2['default'].ctx.stroke();

	            self.renderLife();
	        }

	        //渲染生命值节点
	    }, {
	        key: 'renderLife',
	        value: function renderLife() {
	            var self = this;
	            for (var j = 1; j <= self.livesPoint.length; j++) {
	                var tailIndex = j * 5;
	                var life = self.livesPoint[j - 1];
	                life.render(self.tail[tailIndex]);
	            }
	        }
	    }, {
	        key: 'renderShield',
	        value: function renderShield() {
	            _Map2['default'].ctx.beginPath();
	            _Map2['default'].ctx.globalCompositeOperation = "source-over";
	            _Map2['default'].ctx.fillStyle = this.shieldColor;
	            _Map2['default'].ctx.arc(this.x, this.y, this.shieldRadius, 0, Math.PI * 2, false);
	            _Map2['default'].ctx.fill();
	            _Map2['default'].lineWidth = 0.2;
	            _Map2['default'].ctx.strokeStyle = "#5DAC81";
	            _Map2['default'].ctx.arc(this.x, this.y, this.shieldRadius, 0, Math.PI * 2, false);
	            _Map2['default'].ctx.stroke();
	            this.shieldRadius -= 0.02;
	            if (this.shieldRadius < 15) {
	                this.shieldColor = this.shieldColor === "rgba(30,136,168,0.6)" ? "rgba(30,136,168,0.2)" : "rgba(30,136,168,0.6)";
	            }
	            if (this.shieldRadius < 10) {
	                this.hasShield = false;
	                this.shieldColor = "rgba(30,136,168,0.6)";
	                this.shieldRadius = 25;
	            }
	        }
	    }, {
	        key: 'renderGravity',
	        value: function renderGravity() {
	            _Map2['default'].ctx.beginPath();
	            _Map2['default'].ctx.globalCompositeOperation = "source-over";

	            var gradient = _Map2['default'].ctx.createRadialGradient(this.x, this.y, this.radius, this.x, this.y, this.gravityRadius);
	            gradient.addColorStop(0, "rgba(30,136,168,0.8)");
	            gradient.addColorStop(1, "rgba(30,136,168,0)");

	            _Map2['default'].ctx.fillStyle = gradient;
	            _Map2['default'].ctx.arc(this.x, this.y, this.gravityRadius, 0, Math.PI * 2, false);
	            _Map2['default'].ctx.fill();

	            if (this.gravityTime-- < 0) {
	                this.hasGravity = false;
	                this.gravityTime = 500;
	            }
	        }
	    }, {
	        key: 'renderBoom',
	        value: function renderBoom() {
	            for (var i = 0; i < this.particles.length; i++) {
	                var eachPartical = this.particles[i];
	                for (var j = 0; j < eachPartical.length; j++) {
	                    if (eachPartical[j].destroy) {
	                        eachPartical.splice(j, 1);
	                    } else {
	                        eachPartical[j].render();
	                        eachPartical[j].update();
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'renderAddScore',
	        value: function renderAddScore() {

	            for (var i = 0; i < this.addScore.length; i++) {
	                var score = this.addScore[i];
	                _Map2['default'].ctx.fillStyle = "rgba(255,255,255," + score.opacity + ")";
	                _Map2['default'].ctx.fillText("+" + REDSCORE, score.x + 40, score.y - 30);
	                score.opacity -= 0.02;

	                if (score.opacity < 0) {
	                    this.addScore.splice(i, 1);
	                }
	            }
	        }
	    }]);

	    return Player;
	})(_Point3['default']);

	exports['default'] = Player;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * 武器粒子
	 * type: shield/gravity/time/minimize/life
	 */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _Enemy2 = __webpack_require__(3);

	var _Enemy3 = _interopRequireDefault(_Enemy2);

	var _Map = __webpack_require__(1);

	var _Map2 = _interopRequireDefault(_Map);

	var COLORS = {
	    shield: '#007766',
	    gravity: '#225599',
	    time: '#665599',
	    minimize: '#acac00',
	    life: '#009955'
	};
	var TEXTS = {
	    shield: '盾',
	    gravity: '力',
	    time: '慢',
	    minimize: '小',
	    life: '命'
	};

	var Skill = (function (_Enemy) {
	    _inherits(Skill, _Enemy);

	    function Skill(options) {
	        _classCallCheck(this, Skill);

	        _get(Object.getPrototypeOf(Skill.prototype), 'constructor', this).call(this, options);
	        this.id = 1;
	        this.radius = 9;
	        this.isEated = false;
	    }

	    _createClass(Skill, [{
	        key: 'update',
	        value: function update() {
	            this.x -= this.speed;
	            this.y += this.speed;

	            if (this.x < -10 || this.y > _Map2['default'].height + 10) {
	                this.x = Math.random() * _Map2['default'].width + _Map2['default'].width;
	                this.y = -Math.random() * _Map2['default'].height;
	                this.reset();
	            }
	        }
	    }, {
	        key: 'reset',
	        value: function reset() {
	            this.id++;
	            this.radius = 9;
	            this.isEated = false;
	            this.type = ['shield', 'gravity', 'time', 'minimize', 'life', ''][Math.floor(Math.random() * 5)];;
	        }

	        //被使用
	    }, {
	        key: 'use',
	        value: function use() {
	            this.isEated = true;
	            this.radius = 0; //死亡暂时设置为0
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var self = this;

	            _Map2['default'].ctx.beginPath();

	            self.color = COLORS[self.type];

	            _Map2['default'].ctx.fillStyle = self.color;
	            _Map2['default'].ctx.arc(self.x, self.y, self.radius, 0, Math.PI * 2, false);
	            _Map2['default'].ctx.fill();

	            if (!self.isEated) {
	                _Map2['default'].ctx.fillStyle = "#fff";
	                _Map2['default'].ctx.fillText(TEXTS[self.type], self.x - 5, self.y + 2);
	            }
	        }
	    }]);

	    return Skill;
	})(_Enemy3['default']);

	exports['default'] = Skill;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * 资源加载器
	 * Modified from Hilo.js
	 * by fwon
	 */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _eventemitter3 = __webpack_require__(11);

	var _eventemitter32 = _interopRequireDefault(_eventemitter3);

	function getExtension(src) {
	    var extRegExp = /\/?[^/]+\.(\w+)(\?\S+)?$/i,
	        match,
	        extension;
	    if (match = src.match(extRegExp)) {
	        extension = match[1].toLowerCase();
	    }
	    return extension || null;
	}

	var ImageLoader = (function () {
	    function ImageLoader() {
	        _classCallCheck(this, ImageLoader);
	    }

	    _createClass(ImageLoader, [{
	        key: 'load',
	        value: function load(data) {
	            var self = this;

	            var image = new Image();
	            if (data.crossOrigin) {
	                image.crossOrigin = data.crossOrigin;
	            }
	            image.onload = function () {
	                self.onLoad(image);
	            };

	            image.onerror = image.onabort = self.onError.bind(image);
	            image.src = data.src;
	        }
	    }, {
	        key: 'onLoad',
	        value: function onLoad(e) {
	            e = e || window.event;
	            var image = e;
	            image.onload = image.onerror = image.onabort = null;
	            return image;
	        }
	    }, {
	        key: 'onError',
	        value: function onError() {
	            var image = e.target;
	            image.onload = image.onerror = image.onabort = null;
	            return e;
	        }
	    }]);

	    return ImageLoader;
	})();

	var ScriptLoader = (function () {
	    function ScriptLoader() {
	        _classCallCheck(this, ScriptLoader);
	    }

	    _createClass(ScriptLoader, [{
	        key: 'load',
	        value: function load(data) {
	            var self = this,
	                src = data.src,
	                isJSONP = data.type == 'jsonp';

	            if (isJSONP) {
	                var callbackName = data.callbackName || 'callback';
	                var callback = data.callback || 'jsonp' + ++ScriptLoader._count;
	                var win = window;

	                if (!win[callback]) {
	                    win[callback] = function (result) {
	                        delete win[callback];
	                    };
	                }
	            }

	            if (isJSONP) src += (src.indexOf('?') == -1 ? '?' : '&') + callbackName + '=' + callback;
	            if (data.noCache) src += (src.indexOf('?') == -1 ? '?' : '&') + 't=' + +new Date();

	            var script = document.createElement('script');
	            script.type = 'text/javascript';
	            script.async = true;
	            script.onload = self.onLoad.bind(self);
	            script.onerror = self.onError.bind(self);
	            script.src = src;
	            if (data.id) script.id = data.id;
	            document.getElementsByTagName('head')[0].appendChild(script);
	        }
	    }, {
	        key: 'onLoad',
	        value: function onLoad(e) {
	            var script = e.target;
	            script.onload = script.onerror = null;
	            return script;
	        }
	    }, {
	        key: 'onError',
	        value: function onError(e) {
	            var script = e.target;
	            script.onload = script.onerror = null;
	            return e;
	        }
	    }]);

	    return ScriptLoader;
	})();

	var CssLoader = (function () {
	    function CssLoader() {
	        _classCallCheck(this, CssLoader);
	    }

	    _createClass(CssLoader, [{
	        key: 'load',
	        value: function load(data) {
	            var link = document.createElement('link');
	            link.type = 'text/css';
	            link.rel = 'stylesheet';
	            if (data.id) link.id = data.id;
	            link.addEventListener('load', this.onLoad.bind(this), false);
	            link.addEventListener('error', this.onError.bind(this), false);
	            link.href = data.src;
	            document.getElementsByTagName('head')[0].appendChild(link);
	        }
	    }, {
	        key: 'onLoad',
	        value: function onLoad(e) {
	            return e.target;
	        }
	    }, {
	        key: 'onError',
	        value: function onError(e) {
	            return e;
	        }
	    }]);

	    return CssLoader;
	})();

	var Loader = (function (_EventEmitter) {
	    _inherits(Loader, _EventEmitter);

	    function Loader(options) {
	        _classCallCheck(this, Loader);

	        _get(Object.getPrototypeOf(Loader.prototype), 'constructor', this).call(this, options);
	        this._source = [];
	        this._loaded = 0;
	        this._currentIndex = -1;
	        this._completeCb = null;
	    }

	    _createClass(Loader, [{
	        key: 'load',
	        value: function load(source, complete) {
	            if (source) {
	                source = source instanceof Array ? source : [source];
	                this._source = this._source.concat(source);
	            }
	            if (complete && complete instanceof Function) {
	                this.on('complete', complete);
	            }
	            this._loadNext();
	            return this;
	        }
	    }, {
	        key: '_loadNext',
	        value: function _loadNext() {
	            var self = this;
	            var source = self._source;
	            var len = source.length;
	            if (self._loaded >= len) {
	                self.emit('complete');
	                return;
	            }

	            if (self._currentIndex < len - 1) {
	                (function () {
	                    ++self._currentIndex;
	                    var index = self._currentIndex;
	                    var item = source[index];
	                    var loader = self._getLoader(item);

	                    if (loader) {
	                        (function () {
	                            var onLoad = loader.onLoad,
	                                onError = loader.onError;

	                            loader.onLoad = function (e) {
	                                loader.onLoad = onLoad;
	                                loader.onError = onError;
	                                var content = onLoad && onLoad.call(loader, e) || e.target;
	                                self._onItemLoad(index, content);
	                            };
	                            loader.onError = function (e) {
	                                loader.onLoad = onLoad;
	                                loader.onError = onError;
	                                onError && onError.call(loader, e);
	                                self._onItemError(index, e);
	                            };
	                        })();
	                    }
	                    loader && loader.load(item);
	                    self._loadNext();
	                })();
	            }
	        }
	    }, {
	        key: '_getLoader',
	        value: function _getLoader(item) {
	            var self = this;
	            var loader = item.loader;

	            if (loader) return loader;
	            var type = item.type || getExtension(item.src);
	            switch (type) {
	                case 'png':
	                case 'jpg':
	                case 'jpeg':
	                case 'gif':
	                    loader = new ImageLoader();
	                    break;
	                case 'js':
	                case 'jsonp':
	                    loader = new ScriptLoader();
	                    break;
	                case 'css':
	                    loader = new CssLoader();
	                    break;
	            }

	            return loader;
	        }
	    }, {
	        key: '_onItemLoad',
	        value: function _onItemLoad(index, content) {
	            var self = this;
	            var item = self._source[index];

	            item.loaded = true;
	            item.content = content;
	            self._loaded++;
	            self.emit('load', item);
	            self._loadNext();
	        }
	    }, {
	        key: '_onItemError',
	        value: function _onItemError(index, e) {
	            var self = this;
	            var item = self._source[index];

	            item.error = e;
	            self._loaded++;
	            self.emit('error', item);
	            self._loadNext();
	        }
	    }]);

	    return Loader;
	})(_eventemitter32['default']);

	exports['default'] = Loader;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports) {

	/**
	 * 进度条功能
	 */

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	exports.draw = draw;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var canvas = document.getElementById("loading");
	var ctx = canvas.getContext("2d");
	var w = window.innerWidth;
	var h = window.innerHeight;
	canvas.width = w;
	canvas.height = h;

	var TOTALWIDTH = 200;
	var BARHEIGHT = 5;
	var counter = 0;
	var particles = [];
	var particle_no = 25;
	var prevBarWidth = 0;
	var barStartX = (w - TOTALWIDTH) / 2;
	var barStartY = (h - BARHEIGHT) / 2;

	var progressbar = (function () {
	    function progressbar() {
	        _classCallCheck(this, progressbar);

	        this.total = TOTALWIDTH;
	        this.width = 0;
	        this.hue = 0;
	    }

	    _createClass(progressbar, [{
	        key: "draw",
	        value: function draw() {
	            ctx.fillStyle = 'hsla(' + this.hue + ', 100%, 40%, 1)';
	            ctx.fillRect(barStartX, barStartY, this.width, BARHEIGHT);
	            var grad = ctx.createLinearGradient(0, 0, 0, 130);
	            grad.addColorStop(0, "transparent");
	            grad.addColorStop(1, "rgba(0,0,0,0.5)");
	            ctx.fillStyle = grad;
	            ctx.fillRect(barStartX, barStartY, this.width, BARHEIGHT);
	        }
	    }]);

	    return progressbar;
	})();

	var particle = (function () {
	    function particle() {
	        _classCallCheck(this, particle);

	        this.x = barStartX + bar.width;
	        this.y = barStartY;

	        this.vx = 0.8 + Math.random() * 1;
	        this.v = Math.random() * 5;
	        this.g = 1 + Math.random() * 3;
	        this.down = false;
	    }

	    _createClass(particle, [{
	        key: "draw",
	        value: function draw() {
	            ctx.fillStyle = 'hsla(' + (bar.hue + 0.3) + ', 100%, 40%, 1)';;
	            var size = Math.random() * 1;
	            ctx.fillRect(this.x, this.y, size, size);
	        }
	    }]);

	    return particle;
	})();

	var bar = new progressbar();

	function reset() {
	    ctx.fillStyle = "#000";
	    ctx.fillRect(0, 0, w, h);

	    ctx.fillStyle = "#171814";
	    ctx.fillRect(barStartX, barStartY, TOTALWIDTH, BARHEIGHT);
	}

	function update() {
	    for (var i = 0; i < particles.length; i++) {
	        var p = particles[i];
	        p.x -= p.vx;
	        if (p.down == true) {
	            p.g += 0.1;
	            p.y += p.g;
	        } else {
	            if (p.g < 0) {
	                p.down = true;
	                p.g += 0.1;
	                p.y += p.g;
	            } else {
	                p.y -= p.g;
	                p.g -= 0.1;
	            }
	        }
	        p.draw();
	    }
	}

	function draw(ratio) {
	    reset();
	    counter++;

	    bar.hue += 0.8;

	    var currentBarWidth = bar.total * ratio;
	    bar.width += 1;
	    if (currentBarWidth !== prevBarWidth) {
	        bar.width = currentBarWidth;
	    }
	    prevBarWidth = currentBarWidth;
	    if (bar.width >= bar.total) {
	        if (counter > 215) {
	            reset();
	            bar.hue = 0;
	            bar.width = 0;
	            counter = 0;
	            particles = [];
	        } else {
	            bar.hue = 126;
	            bar.width = bar.total + 1;
	            bar.draw();
	        }
	    } else {
	        bar.draw();
	        for (var i = 0; i < particle_no; i += 10) {
	            particles.push(new particle());
	        }
	    }
	    update();
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var has = Object.prototype.hasOwnProperty;

	//
	// We store our EE objects in a plain object whose properties are event names.
	// If `Object.create(null)` is not supported we prefix the event names with a
	// `~` to make sure that the built-in object properties are not overridden or
	// used as an attack vector.
	// We also assume that `Object.create(null)` is available when the event name
	// is an ES6 Symbol.
	//
	var prefix = typeof Object.create !== 'function' ? '~' : false;

	/**
	 * Representation of a single EventEmitter function.
	 *
	 * @param {Function} fn Event handler to be called.
	 * @param {Mixed} context Context for function execution.
	 * @param {Boolean} [once=false] Only emit once
	 * @api private
	 */
	function EE(fn, context, once) {
	  this.fn = fn;
	  this.context = context;
	  this.once = once || false;
	}

	/**
	 * Minimal EventEmitter interface that is molded against the Node.js
	 * EventEmitter interface.
	 *
	 * @constructor
	 * @api public
	 */
	function EventEmitter() { /* Nothing to set */ }

	/**
	 * Hold the assigned EventEmitters by name.
	 *
	 * @type {Object}
	 * @private
	 */
	EventEmitter.prototype._events = undefined;

	/**
	 * Return an array listing the events for which the emitter has registered
	 * listeners.
	 *
	 * @returns {Array}
	 * @api public
	 */
	EventEmitter.prototype.eventNames = function eventNames() {
	  var events = this._events
	    , names = []
	    , name;

	  if (!events) return names;

	  for (name in events) {
	    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
	  }

	  if (Object.getOwnPropertySymbols) {
	    return names.concat(Object.getOwnPropertySymbols(events));
	  }

	  return names;
	};

	/**
	 * Return a list of assigned event listeners.
	 *
	 * @param {String} event The events that should be listed.
	 * @param {Boolean} exists We only need to know if there are listeners.
	 * @returns {Array|Boolean}
	 * @api public
	 */
	EventEmitter.prototype.listeners = function listeners(event, exists) {
	  var evt = prefix ? prefix + event : event
	    , available = this._events && this._events[evt];

	  if (exists) return !!available;
	  if (!available) return [];
	  if (available.fn) return [available.fn];

	  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
	    ee[i] = available[i].fn;
	  }

	  return ee;
	};

	/**
	 * Emit an event to all registered event listeners.
	 *
	 * @param {String} event The name of the event.
	 * @returns {Boolean} Indication if we've emitted an event.
	 * @api public
	 */
	EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
	  var evt = prefix ? prefix + event : event;

	  if (!this._events || !this._events[evt]) return false;

	  var listeners = this._events[evt]
	    , len = arguments.length
	    , args
	    , i;

	  if ('function' === typeof listeners.fn) {
	    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

	    switch (len) {
	      case 1: return listeners.fn.call(listeners.context), true;
	      case 2: return listeners.fn.call(listeners.context, a1), true;
	      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
	      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
	      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
	      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
	    }

	    for (i = 1, args = new Array(len -1); i < len; i++) {
	      args[i - 1] = arguments[i];
	    }

	    listeners.fn.apply(listeners.context, args);
	  } else {
	    var length = listeners.length
	      , j;

	    for (i = 0; i < length; i++) {
	      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

	      switch (len) {
	        case 1: listeners[i].fn.call(listeners[i].context); break;
	        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
	        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
	        default:
	          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
	            args[j - 1] = arguments[j];
	          }

	          listeners[i].fn.apply(listeners[i].context, args);
	      }
	    }
	  }

	  return true;
	};

	/**
	 * Register a new EventListener for the given event.
	 *
	 * @param {String} event Name of the event.
	 * @param {Function} fn Callback function.
	 * @param {Mixed} [context=this] The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.on = function on(event, fn, context) {
	  var listener = new EE(fn, context || this)
	    , evt = prefix ? prefix + event : event;

	  if (!this._events) this._events = prefix ? {} : Object.create(null);
	  if (!this._events[evt]) this._events[evt] = listener;
	  else {
	    if (!this._events[evt].fn) this._events[evt].push(listener);
	    else this._events[evt] = [
	      this._events[evt], listener
	    ];
	  }

	  return this;
	};

	/**
	 * Add an EventListener that's only called once.
	 *
	 * @param {String} event Name of the event.
	 * @param {Function} fn Callback function.
	 * @param {Mixed} [context=this] The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.once = function once(event, fn, context) {
	  var listener = new EE(fn, context || this, true)
	    , evt = prefix ? prefix + event : event;

	  if (!this._events) this._events = prefix ? {} : Object.create(null);
	  if (!this._events[evt]) this._events[evt] = listener;
	  else {
	    if (!this._events[evt].fn) this._events[evt].push(listener);
	    else this._events[evt] = [
	      this._events[evt], listener
	    ];
	  }

	  return this;
	};

	/**
	 * Remove event listeners.
	 *
	 * @param {String} event The event we want to remove.
	 * @param {Function} fn The listener that we need to find.
	 * @param {Mixed} context Only remove listeners matching this context.
	 * @param {Boolean} once Only remove once listeners.
	 * @api public
	 */
	EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
	  var evt = prefix ? prefix + event : event;

	  if (!this._events || !this._events[evt]) return this;

	  var listeners = this._events[evt]
	    , events = [];

	  if (fn) {
	    if (listeners.fn) {
	      if (
	           listeners.fn !== fn
	        || (once && !listeners.once)
	        || (context && listeners.context !== context)
	      ) {
	        events.push(listeners);
	      }
	    } else {
	      for (var i = 0, length = listeners.length; i < length; i++) {
	        if (
	             listeners[i].fn !== fn
	          || (once && !listeners[i].once)
	          || (context && listeners[i].context !== context)
	        ) {
	          events.push(listeners[i]);
	        }
	      }
	    }
	  }

	  //
	  // Reset the array, or remove it completely if we have no more listeners.
	  //
	  if (events.length) {
	    this._events[evt] = events.length === 1 ? events[0] : events;
	  } else {
	    delete this._events[evt];
	  }

	  return this;
	};

	/**
	 * Remove all listeners or only the listeners for the specified event.
	 *
	 * @param {String} event The event want to remove all listeners for.
	 * @api public
	 */
	EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
	  if (!this._events) return this;

	  if (event) delete this._events[prefix ? prefix + event : event];
	  else this._events = prefix ? {} : Object.create(null);

	  return this;
	};

	//
	// Alias methods names because people roll like that.
	//
	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
	EventEmitter.prototype.addListener = EventEmitter.prototype.on;

	//
	// This function doesn't apply anymore.
	//
	EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
	  return this;
	};

	//
	// Expose the prefix.
	//
	EventEmitter.prefixed = prefix;

	//
	// Expose the module.
	//
	if (true) {
	  module.exports = EventEmitter;
	}


/***/ },
/* 12 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);