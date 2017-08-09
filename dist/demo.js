/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tag = __webpack_require__(1);

var _tag2 = _interopRequireDefault(_tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 条 または 項
 * elementは下位のItemを配列で持つ
 */
var Element = function () {
  function Element(plain) {
    _classCallCheck(this, Element);

    this.id = plain.id;
    this.labelName = plain.labelName || '';
    this.appendix = plain.appendix || '';
    this.constructItems(plain.items);
  }

  _createClass(Element, [{
    key: 'renderAppendix',
    value: function renderAppendix() {
      if (!this.appendix) {
        return '';
      }
      return (0, _tag2.default)('div', this.appendix.split('\n').map(function (t) {
        return (0, _tag2.default)('p', t);
      }).join('\n'), { class: 'appendix' });
    }

    // template method to avoid circular dependencies (Item <=> Element)

  }, {
    key: 'constructItems',
    value: function constructItems() {
      throw new Error('implement constructItems() method');
    }
  }]);

  return Element;
}();

exports.default = Element;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = tag;

var _escapeHtml = __webpack_require__(8);

var _escapeHtml2 = _interopRequireDefault(_escapeHtml);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var through = function through(v) {
  return v;
};

// デフォルトではescapeしない
function tag(name, body, attrs) {
  var noEscape = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  var e = noEscape ? through : _escapeHtml2.default;
  // $FlowIssue(object-loop)
  var attrsStr = !attrs ? '' : ' ' + Object.keys(attrs).map(function (key) {
    return e(key) + '="' + e(attrs[key]) + '"';
  }).join(' ');
  var html = '<' + e(name) + attrsStr;
  if (!body) {
    return html + ' />';
  }
  return html + '>' + e(body) + '</' + e(name) + '>';
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _element = __webpack_require__(0);

var _element2 = _interopRequireDefault(_element);

var _article = __webpack_require__(3);

var _article2 = _interopRequireDefault(_article);

var _tag = __webpack_require__(1);

var _tag2 = _interopRequireDefault(_tag);

var _style = __webpack_require__(9);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 文書
 *
 * 文書は1つの「概要」を含む
 * 文書は複数の条を含む
 * 複数のタイムスタンプを含む
 *
 * メタ情報として、ラベル一覧、および各elementの座標の解決も行う
 */
var Document = function () {
  function Document(plain) {
    _classCallCheck(this, Document);

    var p = plain || {};
    this.title = p.title || '';
    this.description = p.description || '';
    this.articles = p.articles ? p.articles.map(function (pa) {
      return new _article2.default(pa);
    }) : [];
    this.timestamps = p.timestamps || [];
  }

  _createClass(Document, [{
    key: 'toHtml',
    value: function toHtml(ds, options) {
      var elementId = options.elementId || 'legal-doc-format-jp';
      var h1 = (0, _tag2.default)('h1', this.title, { class: 'documentTitle' });

      var description = (0, _tag2.default)('div', this.description, { class: 'documentDescription' });

      var articles = this.articles.map(function (article) {
        return article.toHtml(ds);
      }).join('\n');
      var footer = this.renderTimestamps();

      var htmlWithoutLabelLinks = (0, _tag2.default)('div', [h1, description, articles, footer].join('\n'), { id: elementId, class: 'legal-doc-format-jp' });

      var html = this.resolveLabels(htmlWithoutLabelLinks, ds);

      if (!options.standalone) {
        return html;
      }
      // $FlowIssue(css-is-string)
      return '<html><head><style>\n' + _style2.default + '</style><body>\n' + html + '</body></html>';
    }
  }, {
    key: 'toPlainText',
    value: function toPlainText(ds) {

      var articles = this.articles.map(function (article) {
        return article.toPlainText(ds);
      }).join('\n\n');
      var footer = this.timestamps.map(function (ts) {
        return '  ' + ts;
      }).join('\n');
      return [this.title, this.description, articles, footer].join('\n\n');
    }
  }, {
    key: 'renderTimestamps',
    value: function renderTimestamps() {
      var inner = this.timestamps.map(function (ts) {
        return (0, _tag2.default)('li', ts, { class: 'timestamp' });
      }).join('\n');

      return (0, _tag2.default)('ol', inner, { class: 'timestamps' });
    }
  }, {
    key: 'resolveLabels',
    value: function resolveLabels(html, ds) {
      return html.replace(/`\$?([^`]+)` */g, function (x, label) {
        try {
          return ds.getElementNameByLabel(label);
        } catch (e) {
          throw new Error('\u4E0D\u660E\u306A\u30E9\u30D9\u30EB: ' + label);
        }
      });
    }
  }]);

  return Document;
}();

exports.default = Document;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _element = __webpack_require__(0);

var _element2 = _interopRequireDefault(_element);

var _item = __webpack_require__(4);

var _item2 = _interopRequireDefault(_item);

var _tag = __webpack_require__(1);

var _tag2 = _interopRequireDefault(_tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 条
 */
var Article = function (_Element) {
  _inherits(Article, _Element);

  function Article(plain) {
    _classCallCheck(this, Article);

    var _this = _possibleConstructorReturn(this, (Article.__proto__ || Object.getPrototypeOf(Article)).call(this, plain));

    _this.title = plain.title || '';
    return _this;
  }

  _createClass(Article, [{
    key: 'toHtml',
    value: function toHtml(ds) {
      // タイトル部
      var h2 = (0, _tag2.default)('h2', this.title, { class: 'articleTitle' });

      var itemsHtml = this.renderItems(ds);
      var appendix = this.renderAppendix();

      return (0, _tag2.default)('div', [h2, itemsHtml, appendix].join('\n'), { class: 'article' });
    }
  }, {
    key: 'toPlainText',
    value: function toPlainText(ds) {
      var num = ds.getNumber(this);
      var title = '\u7B2C' + num + '\u6761 ' + this.title;
      var body = this.items.map(function (item) {
        return item.toPlainText(ds);
      }).join('\n');
      if (this.items.length === 1) {
        body = '     ' + body.slice(5);
      }
      return [title, body].join('\n');
    }
  }, {
    key: 'renderItems',
    value: function renderItems(ds) {
      if (this.items.length === 0) {
        return '';
      }

      // 項が1つだけなら、<ol>ではなく<div>で囲む
      if (this.items.length === 1) {
        return (0, _tag2.default)('div', this.items[0].toHtml(ds), { class: 'articleItems' });
      }

      // itemそれぞれに<li>タグをつけて囲む
      var inner = this.items.map(function (item) {
        return (0, _tag2.default)('li', item.toHtml(ds), { class: 'articleItem' });
      }).join('\n');

      return (0, _tag2.default)('ol', inner, { class: 'articleItems' });
    }

    // this method should be implemented at Element,
    // but written here to avoid circular dependencies (Element <=> Item)

  }, {
    key: 'constructItems',
    value: function constructItems(plainItems) {
      this.items = plainItems ? plainItems.map(function (pItem) {
        return new _item2.default(pItem);
      }) : [];
    }
  }]);

  return Article;
}(_element2.default);

exports.default = Article;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _element = __webpack_require__(0);

var _element2 = _interopRequireDefault(_element);

var _tag = __webpack_require__(1);

var _tag2 = _interopRequireDefault(_tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 項、およびそれ以下の概念
 */
var Item = function (_Element) {
  _inherits(Item, _Element);

  function Item(plain) {
    _classCallCheck(this, Item);

    var _this = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this, plain));

    _this.statement = plain.statement;
    return _this;
  }

  _createClass(Item, [{
    key: 'toHtml',
    value: function toHtml(ds) {
      var num = ds.getNumber(this);
      var depth = ds.getDepth(this);

      // 文
      var statement = (0, _tag2.default)('div', this.statement, { class: 'statement' });
      var itemsHtml = this.renderItems(ds);
      var appendix = this.renderAppendix();

      return (0, _tag2.default)('div', [statement, itemsHtml, appendix].join('\n'), { class: 'item' + depth });
    }
  }, {
    key: 'toPlainText',
    value: function toPlainText(ds) {
      var aiueo = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ'.split('');
      var elementNameConverters = [function (num) {
        return '\u7B2C' + num + '\u6761';
      }, function (num) {
        return num + '.';
      }, function (num) {
        return '\uFF08' + num + '\uFF09';
      }, function (num) {
        return '' + aiueo[num - 1];
      }, function (num) {
        return '\uFF08' + aiueo[num - 1] + '\uFF09';
      }, function (num) {
        return '\u306E' + num;
      }, function (num) {
        return '\u306E' + num;
      }, function (num) {
        return '\u306E' + num;
      }, function (num) {
        return '\u306E' + num;
      }, function (num) {
        return '\u306E' + num;
      }];
      var depth = ds.getDepth(this);
      var num = ds.getNumber(this);
      var spaces = '                 '.slice(0, depth * 2);
      var prefix = elementNameConverters[depth](num);
      var firstLine = spaces + prefix + ' ' + this.statement;
      if (this.items.length === 0) {
        return firstLine;
      }
      var sub = this.items.map(function (item) {
        return item.toPlainText(ds);
      }).join('\n');
      return [firstLine, sub].join('\n');
    }
  }, {
    key: 'renderItems',
    value: function renderItems(ds) {
      if (this.items.length === 0) {
        return '';
      }

      // itemそれぞれに<li>タグをつけて囲む
      var inner = this.items.map(function (item) {
        return (0, _tag2.default)('li', item.toHtml(ds), { class: 'subItem' });
      }).join('\n');

      return (0, _tag2.default)('ol', inner, { class: 'subItems' });
    }

    // this method should be implemented at Element,
    // but written here to avoid circular dependencies (Element <=> Item)

  }, {
    key: 'constructItems',
    value: function constructItems(plainItems) {
      this.items = plainItems ? plainItems.map(function (pItem) {
        return new Item(pItem);
      }) : [];
    }
  }]);

  return Item;
}(_element2.default);

exports.default = Item;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_index_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_index_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_index_js__);


function onChangeText() {
  const markdownText = document.getElementById("markdownText").value
  const html = Object(__WEBPACK_IMPORTED_MODULE_0__src_index_js__["format"])(markdownText, { standalone: false, elementId: 'corp-site-pp'})
  document.getElementById("convertedText").innerHTML = html
}

window.onload = function() {
  const mT = document.getElementById("markdownText")
  const cT = Object(__WEBPACK_IMPORTED_MODULE_0__src_index_js__["format"])(mT.value, { standalone: false, elementId: 'corp-site-pp' })
  document.getElementById("convertedText").innerHTML = cT
  mT.addEventListener("keydown", onChangeText)
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.format = format;

var _documentFactory = __webpack_require__(7);

var _documentFactory2 = _interopRequireDefault(_documentFactory);

var _documentStructure = __webpack_require__(12);

var _documentStructure2 = _interopRequireDefault(_documentStructure);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function format(markdownText, options) {
  return new legalDocFormatJp(markdownText).toHtml(options);
}

var legalDocFormatJp = function () {
  function legalDocFormatJp(markdownText) {
    _classCallCheck(this, legalDocFormatJp);

    var title = markdownText;
    this.document = new _documentFactory2.default().createFromText(markdownText);
  }

  _createClass(legalDocFormatJp, [{
    key: 'toHtml',
    value: function toHtml(options) {
      var ds = new _documentStructure2.default(this.document);
      return this.document.toHtml(ds, options || {});
    }
  }, {
    key: 'toPlainText',
    value: function toPlainText() {
      var ds = new _documentStructure2.default(this.document);
      return this.document.toPlainText(ds);
    }
  }]);

  return legalDocFormatJp;
}();

exports.default = legalDocFormatJp;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _document = __webpack_require__(2);

var _document2 = _interopRequireDefault(_document);

var _marked = __webpack_require__(10);

var _marked2 = _interopRequireDefault(_marked);

var _article = __webpack_require__(3);

var _article2 = _interopRequireDefault(_article);

var _element = __webpack_require__(0);

var _element2 = _interopRequireDefault(_element);

var _item = __webpack_require__(4);

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// inlineのみをrenderできるような設定
// label文法(codespan)だけはスルーするようにも設定
var inlineRenderer = new _marked2.default.Renderer();
inlineRenderer.paragraph = function (v) {
  return v;
};
inlineRenderer.codespan = function (v) {
  return '`' + v + '`';
};

var DocumentFactory = function () {
  function DocumentFactory() {
    _classCallCheck(this, DocumentFactory);
  }

  _createClass(DocumentFactory, [{
    key: 'createFromText',
    value: function createFromText(markdownText) {
      var _this = this;

      var tokens = new _marked2.default.Lexer().lex(markdownText);

      var doc = new _document2.default();
      var id = 1;
      var currentArticle = void 0;
      var itemStack = [];
      var inBlockquote = false;

      tokens.forEach(function (token) {
        var currentItem = itemStack[itemStack.length - 1];

        switch (token.type) {
          case 'heading':
            {
              if (token.depth === 1) {
                doc.title = token.text;
                break;
              }
              // depth が 2以上のときはarticleとみなす

              var _parseInline = _this.parseInline(token.text),
                  _labelName = _parseInline.labelName,
                  text = _parseInline.text;

              var article = new _article2.default({ id: (++id).toString(), title: text, labelName: _labelName });
              doc.articles.push(article);
              currentArticle = article;
              itemStack = [];
              break;
            }
          case 'paragraph':
            {
              // 第1条に達していないとき、descriptionと判断
              if (currentArticle == null) {
                doc.description = token.text;
                break;
              }

              var _parseInline2 = _this.parseInline(token.text),
                  _labelName2 = _parseInline2.labelName,
                  _text = _parseInline2.text;

              if (inBlockquote) {
                var currentElement = currentItem || currentArticle;
                currentElement.appendix = _text;
                break;
              }

              var paragraphItem = new _item2.default({ id: (++id).toString(), statement: _text, labelName: _labelName2 });
              // $FlowIssue(he-is-not-null)
              currentArticle.items.push(paragraphItem);
              itemStack = [paragraphItem];
              break;
            }
          case 'list_item_start':
            {
              var listItem = new _item2.default({ id: (++id).toString() });
              currentItem.items.push(listItem);
              itemStack.push(listItem);
              break;
            }
          case 'list_item_end':
            {
              itemStack.pop();
              break;
            }

          case 'text':
            {
              var _parseInline3 = _this.parseInline(token.text),
                  _labelName3 = _parseInline3.labelName,
                  _text2 = _parseInline3.text;

              currentItem.statement = _text2;
              currentItem.labelName = _labelName3;
              break;
            }
          case 'code':
            {
              doc.timestamps = token.text.split('\n');
              break;
            }
          case 'blockquote_start':
            {
              inBlockquote = true;
              break;
            }
          case 'blockquote_end':
            {
              inBlockquote = false;
              break;
            }
        }
      });

      return doc;
    }
  }, {
    key: 'parseInline',
    value: function parseInline(text) {
      var t = (0, _marked2.default)(text, { renderer: inlineRenderer });
      var matched = void 0;
      if (matched = t.match(/^`([^\$][^`]+)`( *)/)) {
        return { labelName: matched[1], text: t.slice(matched[1].length + matched[2].length + 2) };
      }
      return { labelName: '', text: t };
    }
  }]);

  return DocumentFactory;
}();

exports.default = DocumentFactory;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = escapeHtml;
var table = {
  '&': '&amp;',
  "'": '&#x27;',
  // '`': '&#x60;' // backquoteはlabelとする
  '"': '&quot;',
  '<': '&lt;',
  '>': '&gt;'
};

function escapeHtml(html) {
  return html.replace(/[&'"<>]/g, function (match) {
    return table[match];
  });
}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "div.legal-doc-format-jp {\n  max-width: 1200px;\n  line-height: 1.5em;\n  font-size: 14px;\n  margin: 6em auto;\n  color: #333337;\n  padding: 0 2em;\n}\n\ndiv.legal-doc-format-jp ol {\n  margin: 0;\n  padding: 0;\n}\n\ndiv.legal-doc-format-jp h1.documentTitle {\n  text-align: center;\n  font-size: 20px;\n  margin-bottom: 3em;\n}\n\ndiv.legal-doc-format-jp div.documentDescription {\n  margin-bottom: 3em;\n}\n\ndiv.legal-doc-format-jp div.article {\n  margin-bottom: 1.5em;\n  counter-increment: articleNum;\n}\n\ndiv.legal-doc-format-jp h2.articleTitle:before {\n  content: \"第\" counter(articleNum) \"条　\";\n}\n\ndiv.legal-doc-format-jp h2.articleTitle {\n  font-size: 1em;\n  font-weight: normal;\n  margin-bottom: auto;\n}\n\ndiv.legal-doc-format-jp .articleItems {\n  padding-left: 2.5em;\n}\n\n\ndiv.legal-doc-format-jp .item1>ol.subItems {\n  list-style-type: none;\n}\ndiv.legal-doc-format-jp .item1>ol.subItems>li{\n  counter-increment: parenNum;\n}\ndiv.legal-doc-format-jp .item1>ol.subItems>li:before{\n  content: \"(\" counter(parenNum) \")\";\n}\ndiv.legal-doc-format-jp div.item2 {\n  display: inline;\n  padding-left: 0.3em;\n}\ndiv.legal-doc-format-jp div.item2>div.statement {\n  display: inline;\n}\n\n\ndiv.legal-doc-format-jp .item2>ol.subItems {\n  padding-left: 3.1em;\n  list-style-type: katakana;\n  margin-bottom: -1.5em;\n}\n\n\ndiv.legal-doc-format-jp .item3>ol.subItems {\n  list-style-type: none;\n}\ndiv.legal-doc-format-jp .item3>ol.subItems>li{\n  counter-increment: parenKatakana;\n}\ndiv.legal-doc-format-jp .item3>ol.subItems>li:before{\n  content: \"(\" counter(parenKatakana, katakana) \")\";\n}\ndiv.legal-doc-format-jp div.item4 {\n  display: inline;\n  padding-left: 0.3em;\n}\ndiv.legal-doc-format-jp div.item4>div.statement {\n  display: inline;\n}\n\n\ndiv.legal-doc-format-jp ol.timestamps {\n  list-style-type: none;\n  margin-top: 3em;\n}\n\ndiv.legal-doc-format-jp div.appendix {\n  padding-top: 1.5em;\n}\n\ndiv.legal-doc-format-jp div.appendix>p {\n  padding: 0;\n"

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * marked - a markdown parser
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 */

;(function () {

  /**
   * Block-Level Grammar
   */

  var block = {
    newline: /^\n+/,
    code: /^( {4}[^\n]+\n*)+/,
    fences: noop,
    hr: /^( *[-*_]){3,} *(?:\n+|$)/,
    heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
    nptable: noop,
    lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
    blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
    list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
    html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
    table: noop,
    paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
    text: /^[^\n]+/
  };

  block.bullet = /(?:[*+-]|\d+\.)/;
  block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
  block.item = replace(block.item, 'gm')(/bull/g, block.bullet)();

  block.list = replace(block.list)(/bull/g, block.bullet)('hr', '\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))')('def', '\\n+(?=' + block.def.source + ')')();

  block.blockquote = replace(block.blockquote)('def', block.def)();

  block._tag = '(?!(?:' + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code' + '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo' + '|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b';

  block.html = replace(block.html)('comment', /<!--[\s\S]*?-->/)('closed', /<(tag)[\s\S]+?<\/\1>/)('closing', /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g, block._tag)();

  block.paragraph = replace(block.paragraph)('hr', block.hr)('heading', block.heading)('lheading', block.lheading)('blockquote', block.blockquote)('tag', '<' + block._tag)('def', block.def)();

  /**
   * Normal Block Grammar
   */

  block.normal = merge({}, block);

  /**
   * GFM Block Grammar
   */

  block.gfm = merge({}, block.normal, {
    fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
    paragraph: /^/,
    heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
  });

  block.gfm.paragraph = replace(block.paragraph)('(?!', '(?!' + block.gfm.fences.source.replace('\\1', '\\2') + '|' + block.list.source.replace('\\1', '\\3') + '|')();

  /**
   * GFM + Tables Block Grammar
   */

  block.tables = merge({}, block.gfm, {
    nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
    table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
  });

  /**
   * Block Lexer
   */

  function Lexer(options) {
    this.tokens = [];
    this.tokens.links = {};
    this.options = options || marked.defaults;
    this.rules = block.normal;

    if (this.options.gfm) {
      if (this.options.tables) {
        this.rules = block.tables;
      } else {
        this.rules = block.gfm;
      }
    }
  }

  /**
   * Expose Block Rules
   */

  Lexer.rules = block;

  /**
   * Static Lex Method
   */

  Lexer.lex = function (src, options) {
    var lexer = new Lexer(options);
    return lexer.lex(src);
  };

  /**
   * Preprocessing
   */

  Lexer.prototype.lex = function (src) {
    src = src.replace(/\r\n|\r/g, '\n').replace(/\t/g, '    ').replace(/\u00a0/g, ' ').replace(/\u2424/g, '\n');

    return this.token(src, true);
  };

  /**
   * Lexing
   */

  Lexer.prototype.token = function (src, top, bq) {
    var src = src.replace(/^ +$/gm, ''),
        next,
        loose,
        cap,
        bull,
        b,
        item,
        space,
        i,
        l;

    while (src) {
      // newline
      if (cap = this.rules.newline.exec(src)) {
        src = src.substring(cap[0].length);
        if (cap[0].length > 1) {
          this.tokens.push({
            type: 'space'
          });
        }
      }

      // code
      if (cap = this.rules.code.exec(src)) {
        src = src.substring(cap[0].length);
        cap = cap[0].replace(/^ {4}/gm, '');
        this.tokens.push({
          type: 'code',
          text: !this.options.pedantic ? cap.replace(/\n+$/, '') : cap
        });
        continue;
      }

      // fences (gfm)
      if (cap = this.rules.fences.exec(src)) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: 'code',
          lang: cap[2],
          text: cap[3] || ''
        });
        continue;
      }

      // heading
      if (cap = this.rules.heading.exec(src)) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: 'heading',
          depth: cap[1].length,
          text: cap[2]
        });
        continue;
      }

      // table no leading pipe (gfm)
      if (top && (cap = this.rules.nptable.exec(src))) {
        src = src.substring(cap[0].length);

        item = {
          type: 'table',
          header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
          align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
          cells: cap[3].replace(/\n$/, '').split('\n')
        };

        for (i = 0; i < item.align.length; i++) {
          if (/^ *-+: *$/.test(item.align[i])) {
            item.align[i] = 'right';
          } else if (/^ *:-+: *$/.test(item.align[i])) {
            item.align[i] = 'center';
          } else if (/^ *:-+ *$/.test(item.align[i])) {
            item.align[i] = 'left';
          } else {
            item.align[i] = null;
          }
        }

        for (i = 0; i < item.cells.length; i++) {
          item.cells[i] = item.cells[i].split(/ *\| */);
        }

        this.tokens.push(item);

        continue;
      }

      // lheading
      if (cap = this.rules.lheading.exec(src)) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: 'heading',
          depth: cap[2] === '=' ? 1 : 2,
          text: cap[1]
        });
        continue;
      }

      // hr
      if (cap = this.rules.hr.exec(src)) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: 'hr'
        });
        continue;
      }

      // blockquote
      if (cap = this.rules.blockquote.exec(src)) {
        src = src.substring(cap[0].length);

        this.tokens.push({
          type: 'blockquote_start'
        });

        cap = cap[0].replace(/^ *> ?/gm, '');

        // Pass `top` to keep the current
        // "toplevel" state. This is exactly
        // how markdown.pl works.
        this.token(cap, top, true);

        this.tokens.push({
          type: 'blockquote_end'
        });

        continue;
      }

      // list
      if (cap = this.rules.list.exec(src)) {
        src = src.substring(cap[0].length);
        bull = cap[2];

        this.tokens.push({
          type: 'list_start',
          ordered: bull.length > 1
        });

        // Get each top-level item.
        cap = cap[0].match(this.rules.item);

        next = false;
        l = cap.length;
        i = 0;

        for (; i < l; i++) {
          item = cap[i];

          // Remove the list item's bullet
          // so it is seen as the next token.
          space = item.length;
          item = item.replace(/^ *([*+-]|\d+\.) +/, '');

          // Outdent whatever the
          // list item contains. Hacky.
          if (~item.indexOf('\n ')) {
            space -= item.length;
            item = !this.options.pedantic ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '') : item.replace(/^ {1,4}/gm, '');
          }

          // Determine whether the next list item belongs here.
          // Backpedal if it does not belong in this list.
          if (this.options.smartLists && i !== l - 1) {
            b = block.bullet.exec(cap[i + 1])[0];
            if (bull !== b && !(bull.length > 1 && b.length > 1)) {
              src = cap.slice(i + 1).join('\n') + src;
              i = l - 1;
            }
          }

          // Determine whether item is loose or not.
          // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
          // for discount behavior.
          loose = next || /\n\n(?!\s*$)/.test(item);
          if (i !== l - 1) {
            next = item.charAt(item.length - 1) === '\n';
            if (!loose) loose = next;
          }

          this.tokens.push({
            type: loose ? 'loose_item_start' : 'list_item_start'
          });

          // Recurse.
          this.token(item, false, bq);

          this.tokens.push({
            type: 'list_item_end'
          });
        }

        this.tokens.push({
          type: 'list_end'
        });

        continue;
      }

      // html
      if (cap = this.rules.html.exec(src)) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: this.options.sanitize ? 'paragraph' : 'html',
          pre: !this.options.sanitizer && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
          text: cap[0]
        });
        continue;
      }

      // def
      if (!bq && top && (cap = this.rules.def.exec(src))) {
        src = src.substring(cap[0].length);
        this.tokens.links[cap[1].toLowerCase()] = {
          href: cap[2],
          title: cap[3]
        };
        continue;
      }

      // table (gfm)
      if (top && (cap = this.rules.table.exec(src))) {
        src = src.substring(cap[0].length);

        item = {
          type: 'table',
          header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
          align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
          cells: cap[3].replace(/(?: *\| *)?\n$/, '').split('\n')
        };

        for (i = 0; i < item.align.length; i++) {
          if (/^ *-+: *$/.test(item.align[i])) {
            item.align[i] = 'right';
          } else if (/^ *:-+: *$/.test(item.align[i])) {
            item.align[i] = 'center';
          } else if (/^ *:-+ *$/.test(item.align[i])) {
            item.align[i] = 'left';
          } else {
            item.align[i] = null;
          }
        }

        for (i = 0; i < item.cells.length; i++) {
          item.cells[i] = item.cells[i].replace(/^ *\| *| *\| *$/g, '').split(/ *\| */);
        }

        this.tokens.push(item);

        continue;
      }

      // top-level paragraph
      if (top && (cap = this.rules.paragraph.exec(src))) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: 'paragraph',
          text: cap[1].charAt(cap[1].length - 1) === '\n' ? cap[1].slice(0, -1) : cap[1]
        });
        continue;
      }

      // text
      if (cap = this.rules.text.exec(src)) {
        // Top-level should never reach here.
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: 'text',
          text: cap[0]
        });
        continue;
      }

      if (src) {
        throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
      }
    }

    return this.tokens;
  };

  /**
   * Inline-Level Grammar
   */

  var inline = {
    escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
    autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
    url: noop,
    tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
    link: /^!?\[(inside)\]\(href\)/,
    reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
    nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
    strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
    em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
    code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
    br: /^ {2,}\n(?!\s*$)/,
    del: noop,
    text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
  };

  inline._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;
  inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;

  inline.link = replace(inline.link)('inside', inline._inside)('href', inline._href)();

  inline.reflink = replace(inline.reflink)('inside', inline._inside)();

  /**
   * Normal Inline Grammar
   */

  inline.normal = merge({}, inline);

  /**
   * Pedantic Inline Grammar
   */

  inline.pedantic = merge({}, inline.normal, {
    strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
  });

  /**
   * GFM Inline Grammar
   */

  inline.gfm = merge({}, inline.normal, {
    escape: replace(inline.escape)('])', '~|])')(),
    url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
    del: /^~~(?=\S)([\s\S]*?\S)~~/,
    text: replace(inline.text)(']|', '~]|')('|', '|https?://|')()
  });

  /**
   * GFM + Line Breaks Inline Grammar
   */

  inline.breaks = merge({}, inline.gfm, {
    br: replace(inline.br)('{2,}', '*')(),
    text: replace(inline.gfm.text)('{2,}', '*')()
  });

  /**
   * Inline Lexer & Compiler
   */

  function InlineLexer(links, options) {
    this.options = options || marked.defaults;
    this.links = links;
    this.rules = inline.normal;
    this.renderer = this.options.renderer || new Renderer();
    this.renderer.options = this.options;

    if (!this.links) {
      throw new Error('Tokens array requires a `links` property.');
    }

    if (this.options.gfm) {
      if (this.options.breaks) {
        this.rules = inline.breaks;
      } else {
        this.rules = inline.gfm;
      }
    } else if (this.options.pedantic) {
      this.rules = inline.pedantic;
    }
  }

  /**
   * Expose Inline Rules
   */

  InlineLexer.rules = inline;

  /**
   * Static Lexing/Compiling Method
   */

  InlineLexer.output = function (src, links, options) {
    var inline = new InlineLexer(links, options);
    return inline.output(src);
  };

  /**
   * Lexing/Compiling
   */

  InlineLexer.prototype.output = function (src) {
    var out = '',
        link,
        text,
        href,
        cap;

    while (src) {
      // escape
      if (cap = this.rules.escape.exec(src)) {
        src = src.substring(cap[0].length);
        out += cap[1];
        continue;
      }

      // autolink
      if (cap = this.rules.autolink.exec(src)) {
        src = src.substring(cap[0].length);
        if (cap[2] === '@') {
          text = cap[1].charAt(6) === ':' ? this.mangle(cap[1].substring(7)) : this.mangle(cap[1]);
          href = this.mangle('mailto:') + text;
        } else {
          text = escape(cap[1]);
          href = text;
        }
        out += this.renderer.link(href, null, text);
        continue;
      }

      // url (gfm)
      if (!this.inLink && (cap = this.rules.url.exec(src))) {
        src = src.substring(cap[0].length);
        text = escape(cap[1]);
        href = text;
        out += this.renderer.link(href, null, text);
        continue;
      }

      // tag
      if (cap = this.rules.tag.exec(src)) {
        if (!this.inLink && /^<a /i.test(cap[0])) {
          this.inLink = true;
        } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
          this.inLink = false;
        }
        src = src.substring(cap[0].length);
        out += this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0];
        continue;
      }

      // link
      if (cap = this.rules.link.exec(src)) {
        src = src.substring(cap[0].length);
        this.inLink = true;
        out += this.outputLink(cap, {
          href: cap[2],
          title: cap[3]
        });
        this.inLink = false;
        continue;
      }

      // reflink, nolink
      if ((cap = this.rules.reflink.exec(src)) || (cap = this.rules.nolink.exec(src))) {
        src = src.substring(cap[0].length);
        link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
        link = this.links[link.toLowerCase()];
        if (!link || !link.href) {
          out += cap[0].charAt(0);
          src = cap[0].substring(1) + src;
          continue;
        }
        this.inLink = true;
        out += this.outputLink(cap, link);
        this.inLink = false;
        continue;
      }

      // strong
      if (cap = this.rules.strong.exec(src)) {
        src = src.substring(cap[0].length);
        out += this.renderer.strong(this.output(cap[2] || cap[1]));
        continue;
      }

      // em
      if (cap = this.rules.em.exec(src)) {
        src = src.substring(cap[0].length);
        out += this.renderer.em(this.output(cap[2] || cap[1]));
        continue;
      }

      // code
      if (cap = this.rules.code.exec(src)) {
        src = src.substring(cap[0].length);
        out += this.renderer.codespan(escape(cap[2], true));
        continue;
      }

      // br
      if (cap = this.rules.br.exec(src)) {
        src = src.substring(cap[0].length);
        out += this.renderer.br();
        continue;
      }

      // del (gfm)
      if (cap = this.rules.del.exec(src)) {
        src = src.substring(cap[0].length);
        out += this.renderer.del(this.output(cap[1]));
        continue;
      }

      // text
      if (cap = this.rules.text.exec(src)) {
        src = src.substring(cap[0].length);
        out += this.renderer.text(escape(this.smartypants(cap[0])));
        continue;
      }

      if (src) {
        throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
      }
    }

    return out;
  };

  /**
   * Compile Link
   */

  InlineLexer.prototype.outputLink = function (cap, link) {
    var href = escape(link.href),
        title = link.title ? escape(link.title) : null;

    return cap[0].charAt(0) !== '!' ? this.renderer.link(href, title, this.output(cap[1])) : this.renderer.image(href, title, escape(cap[1]));
  };

  /**
   * Smartypants Transformations
   */

  InlineLexer.prototype.smartypants = function (text) {
    if (!this.options.smartypants) return text;
    return text
    // em-dashes
    .replace(/---/g, '\u2014')
    // en-dashes
    .replace(/--/g, '\u2013')
    // opening singles
    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
    // closing singles & apostrophes
    .replace(/'/g, '\u2019')
    // opening doubles
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201C')
    // closing doubles
    .replace(/"/g, '\u201D')
    // ellipses
    .replace(/\.{3}/g, '\u2026');
  };

  /**
   * Mangle Links
   */

  InlineLexer.prototype.mangle = function (text) {
    if (!this.options.mangle) return text;
    var out = '',
        l = text.length,
        i = 0,
        ch;

    for (; i < l; i++) {
      ch = text.charCodeAt(i);
      if (Math.random() > 0.5) {
        ch = 'x' + ch.toString(16);
      }
      out += '&#' + ch + ';';
    }

    return out;
  };

  /**
   * Renderer
   */

  function Renderer(options) {
    this.options = options || {};
  }

  Renderer.prototype.code = function (code, lang, escaped) {
    if (this.options.highlight) {
      var out = this.options.highlight(code, lang);
      if (out != null && out !== code) {
        escaped = true;
        code = out;
      }
    }

    if (!lang) {
      return '<pre><code>' + (escaped ? code : escape(code, true)) + '\n</code></pre>';
    }

    return '<pre><code class="' + this.options.langPrefix + escape(lang, true) + '">' + (escaped ? code : escape(code, true)) + '\n</code></pre>\n';
  };

  Renderer.prototype.blockquote = function (quote) {
    return '<blockquote>\n' + quote + '</blockquote>\n';
  };

  Renderer.prototype.html = function (html) {
    return html;
  };

  Renderer.prototype.heading = function (text, level, raw) {
    return '<h' + level + ' id="' + this.options.headerPrefix + raw.toLowerCase().replace(/[^\w]+/g, '-') + '">' + text + '</h' + level + '>\n';
  };

  Renderer.prototype.hr = function () {
    return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
  };

  Renderer.prototype.list = function (body, ordered) {
    var type = ordered ? 'ol' : 'ul';
    return '<' + type + '>\n' + body + '</' + type + '>\n';
  };

  Renderer.prototype.listitem = function (text) {
    return '<li>' + text + '</li>\n';
  };

  Renderer.prototype.paragraph = function (text) {
    return '<p>' + text + '</p>\n';
  };

  Renderer.prototype.table = function (header, body) {
    return '<table>\n' + '<thead>\n' + header + '</thead>\n' + '<tbody>\n' + body + '</tbody>\n' + '</table>\n';
  };

  Renderer.prototype.tablerow = function (content) {
    return '<tr>\n' + content + '</tr>\n';
  };

  Renderer.prototype.tablecell = function (content, flags) {
    var type = flags.header ? 'th' : 'td';
    var tag = flags.align ? '<' + type + ' style="text-align:' + flags.align + '">' : '<' + type + '>';
    return tag + content + '</' + type + '>\n';
  };

  // span level renderer
  Renderer.prototype.strong = function (text) {
    return '<strong>' + text + '</strong>';
  };

  Renderer.prototype.em = function (text) {
    return '<em>' + text + '</em>';
  };

  Renderer.prototype.codespan = function (text) {
    return '<code>' + text + '</code>';
  };

  Renderer.prototype.br = function () {
    return this.options.xhtml ? '<br/>' : '<br>';
  };

  Renderer.prototype.del = function (text) {
    return '<del>' + text + '</del>';
  };

  Renderer.prototype.link = function (href, title, text) {
    if (this.options.sanitize) {
      try {
        var prot = decodeURIComponent(unescape(href)).replace(/[^\w:]/g, '').toLowerCase();
      } catch (e) {
        return '';
      }
      if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0) {
        return '';
      }
    }
    var out = '<a href="' + href + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += '>' + text + '</a>';
    return out;
  };

  Renderer.prototype.image = function (href, title, text) {
    var out = '<img src="' + href + '" alt="' + text + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += this.options.xhtml ? '/>' : '>';
    return out;
  };

  Renderer.prototype.text = function (text) {
    return text;
  };

  /**
   * Parsing & Compiling
   */

  function Parser(options) {
    this.tokens = [];
    this.token = null;
    this.options = options || marked.defaults;
    this.options.renderer = this.options.renderer || new Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
  }

  /**
   * Static Parse Method
   */

  Parser.parse = function (src, options, renderer) {
    var parser = new Parser(options, renderer);
    return parser.parse(src);
  };

  /**
   * Parse Loop
   */

  Parser.prototype.parse = function (src) {
    this.inline = new InlineLexer(src.links, this.options, this.renderer);
    this.tokens = src.reverse();

    var out = '';
    while (this.next()) {
      out += this.tok();
    }

    return out;
  };

  /**
   * Next Token
   */

  Parser.prototype.next = function () {
    return this.token = this.tokens.pop();
  };

  /**
   * Preview Next Token
   */

  Parser.prototype.peek = function () {
    return this.tokens[this.tokens.length - 1] || 0;
  };

  /**
   * Parse Text Tokens
   */

  Parser.prototype.parseText = function () {
    var body = this.token.text;

    while (this.peek().type === 'text') {
      body += '\n' + this.next().text;
    }

    return this.inline.output(body);
  };

  /**
   * Parse Current Token
   */

  Parser.prototype.tok = function () {
    switch (this.token.type) {
      case 'space':
        {
          return '';
        }
      case 'hr':
        {
          return this.renderer.hr();
        }
      case 'heading':
        {
          return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, this.token.text);
        }
      case 'code':
        {
          return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
        }
      case 'table':
        {
          var header = '',
              body = '',
              i,
              row,
              cell,
              flags,
              j;

          // header
          cell = '';
          for (i = 0; i < this.token.header.length; i++) {
            flags = { header: true, align: this.token.align[i] };
            cell += this.renderer.tablecell(this.inline.output(this.token.header[i]), { header: true, align: this.token.align[i] });
          }
          header += this.renderer.tablerow(cell);

          for (i = 0; i < this.token.cells.length; i++) {
            row = this.token.cells[i];

            cell = '';
            for (j = 0; j < row.length; j++) {
              cell += this.renderer.tablecell(this.inline.output(row[j]), { header: false, align: this.token.align[j] });
            }

            body += this.renderer.tablerow(cell);
          }
          return this.renderer.table(header, body);
        }
      case 'blockquote_start':
        {
          var body = '';

          while (this.next().type !== 'blockquote_end') {
            body += this.tok();
          }

          return this.renderer.blockquote(body);
        }
      case 'list_start':
        {
          var body = '',
              ordered = this.token.ordered;

          while (this.next().type !== 'list_end') {
            body += this.tok();
          }

          return this.renderer.list(body, ordered);
        }
      case 'list_item_start':
        {
          var body = '';

          while (this.next().type !== 'list_item_end') {
            body += this.token.type === 'text' ? this.parseText() : this.tok();
          }

          return this.renderer.listitem(body);
        }
      case 'loose_item_start':
        {
          var body = '';

          while (this.next().type !== 'list_item_end') {
            body += this.tok();
          }

          return this.renderer.listitem(body);
        }
      case 'html':
        {
          var html = !this.token.pre && !this.options.pedantic ? this.inline.output(this.token.text) : this.token.text;
          return this.renderer.html(html);
        }
      case 'paragraph':
        {
          return this.renderer.paragraph(this.inline.output(this.token.text));
        }
      case 'text':
        {
          return this.renderer.paragraph(this.parseText());
        }
    }
  };

  /**
   * Helpers
   */

  function escape(html, encode) {
    return html.replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function unescape(html) {
    // explicitly match decimal, hex, and named HTML entities 
    return html.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g, function (_, n) {
      n = n.toLowerCase();
      if (n === 'colon') return ':';
      if (n.charAt(0) === '#') {
        return n.charAt(1) === 'x' ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
      }
      return '';
    });
  }

  function replace(regex, opt) {
    regex = regex.source;
    opt = opt || '';
    return function self(name, val) {
      if (!name) return new RegExp(regex, opt);
      val = val.source || val;
      val = val.replace(/(^|[^\[])\^/g, '$1');
      regex = regex.replace(name, val);
      return self;
    };
  }

  function noop() {}
  noop.exec = noop;

  function merge(obj) {
    var i = 1,
        target,
        key;

    for (; i < arguments.length; i++) {
      target = arguments[i];
      for (key in target) {
        if (Object.prototype.hasOwnProperty.call(target, key)) {
          obj[key] = target[key];
        }
      }
    }

    return obj;
  }

  /**
   * Marked
   */

  function marked(src, opt, callback) {
    if (callback || typeof opt === 'function') {
      if (!callback) {
        callback = opt;
        opt = null;
      }

      opt = merge({}, marked.defaults, opt || {});

      var highlight = opt.highlight,
          tokens,
          pending,
          i = 0;

      try {
        tokens = Lexer.lex(src, opt);
      } catch (e) {
        return callback(e);
      }

      pending = tokens.length;

      var done = function done(err) {
        if (err) {
          opt.highlight = highlight;
          return callback(err);
        }

        var out;

        try {
          out = Parser.parse(tokens, opt);
        } catch (e) {
          err = e;
        }

        opt.highlight = highlight;

        return err ? callback(err) : callback(null, out);
      };

      if (!highlight || highlight.length < 3) {
        return done();
      }

      delete opt.highlight;

      if (!pending) return done();

      for (; i < tokens.length; i++) {
        (function (token) {
          if (token.type !== 'code') {
            return --pending || done();
          }
          return highlight(token.text, token.lang, function (err, code) {
            if (err) return done(err);
            if (code == null || code === token.text) {
              return --pending || done();
            }
            token.text = code;
            token.escaped = true;
            --pending || done();
          });
        })(tokens[i]);
      }

      return;
    }
    try {
      if (opt) opt = merge({}, marked.defaults, opt);
      return Parser.parse(Lexer.lex(src, opt), opt);
    } catch (e) {
      e.message += '\nPlease report this to https://github.com/chjj/marked.';
      if ((opt || marked.defaults).silent) {
        return '<p>An error occured:</p><pre>' + escape(e.message + '', true) + '</pre>';
      }
      throw e;
    }
  }

  /**
   * Options
   */

  marked.options = marked.setOptions = function (opt) {
    merge(marked.defaults, opt);
    return marked;
  };

  marked.defaults = {
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    sanitizer: null,
    mangle: true,
    smartLists: false,
    silent: false,
    highlight: null,
    langPrefix: 'lang-',
    smartypants: false,
    headerPrefix: '',
    renderer: new Renderer(),
    xhtml: false
  };

  /**
   * Expose
   */

  marked.Parser = Parser;
  marked.parser = Parser.parse;

  marked.Renderer = Renderer;

  marked.Lexer = Lexer;
  marked.lexer = Lexer.lex;

  marked.InlineLexer = InlineLexer;
  marked.inlineLexer = InlineLexer.output;

  marked.parse = marked;

  if (typeof module !== 'undefined' && ( false ? 'undefined' : _typeof(exports)) === 'object') {
    module.exports = marked;
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
      return marked;
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    this.marked = marked;
  }
}).call(function () {
  return this || (typeof window !== 'undefined' ? window : global);
}());
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _document = __webpack_require__(2);

var _document2 = _interopRequireDefault(_document);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var aiueo = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ'.split('');
var elementNameConverters = [function (num) {
  return '\u7B2C' + num + '\u6761';
}, function (num) {
  return num + '\u9805';
}, function (num) {
  return '\uFF08' + num + '\uFF09';
}, function (num) {
  return '' + aiueo[num - 1];
}, function (num) {
  return '\uFF08' + aiueo[num - 1] + '\uFF09';
}, function (num) {
  return '\u306E' + num;
}, function (num) {
  return '\u306E' + num;
}, function (num) {
  return '\u306E' + num;
}, function (num) {
  return '\u306E' + num;
}, function (num) {
  return '\u306E' + num;
}];

function newPos(pos, num) {
  var ret = pos.slice();
  ret.push(num);
  return ret;
}

function appendElements(ds, el, pos, depth) {
  ds.elementsById[el.id] = el;
  ds.positionsById[el.id] = pos;
  ds.depthsById[el.id] = depth;
  if (el.labelName) {
    ds.elementsByLabel[el.labelName] = el;
  }
  el.items.forEach(function (item, i) {
    return appendElements(ds, item, newPos(pos, i + 1), depth + 1);
  });
}

/**
 * 文書構造
 */

var DocumentStructure = function () {
  function DocumentStructure(doc) {
    var _this = this;

    _classCallCheck(this, DocumentStructure);

    this.elementsById = {};
    this.elementsByLabel = {};
    this.positionsById = {};
    this.depthsById = {};
    doc.articles.forEach(function (article, i) {
      return appendElements(_this, article, [i + 1], 0);
    });
  }

  _createClass(DocumentStructure, [{
    key: 'getNumber',
    value: function getNumber(el) {
      var pos = this.positionsById[el.id];
      return pos[pos.length - 1];
    }
  }, {
    key: 'getDepth',
    value: function getDepth(el) {
      return this.depthsById[el.id];
    }
  }, {
    key: 'getElementNameByLabel',
    value: function getElementNameByLabel(labelName) {
      var el = this.elementsByLabel[labelName];
      var pos = this.positionsById[el.id];
      return pos.map(function (num, i) {
        return elementNameConverters[i](num);
      }).join('');
    }
  }]);

  return DocumentStructure;
}();

exports.default = DocumentStructure;

/***/ })
/******/ ]);