// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"dom/extract.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.groupingDoms = exports.getSchemaType = exports.getSchemaName = exports.getSchemaLabel = exports.getRootProperty = exports.getProperty = exports.getFieldDoms = void 0;
var getSchemaLabel = function getSchemaLabel(fieldDom) {
  var schemaLabelNode = fieldDom.querySelector('[class ^= "SchemaNode__label__"]');
  return (schemaLabelNode === null || schemaLabelNode === void 0 ? void 0 : schemaLabelNode.textContent) || "root";
};
exports.getSchemaLabel = getSchemaLabel;
var getSchemaName = function getSchemaName(fieldDom) {
  var schemaNameNode = fieldDom.querySelector('[class ^= "SchemaNode__name__"]');
  return (schemaNameNode === null || schemaNameNode === void 0 ? void 0 : schemaNameNode.textContent) || "not specified";
};
exports.getSchemaName = getSchemaName;
var getSchemaType = function getSchemaType(fieldDom) {
  var schemaTypeNode = fieldDom.querySelector('[class ^= "SchemaNode__type__"');
  return (schemaTypeNode === null || schemaTypeNode === void 0 ? void 0 : schemaTypeNode.textContent) || "not specified";
};
exports.getSchemaType = getSchemaType;
var getProperty = function getProperty(schema) {
  return {
    name: getSchemaName(schema),
    type: getSchemaType(schema)
  };
};
exports.getProperty = getProperty;
var getRootProperty = function getRootProperty(schema) {
  return {
    name: getSchemaLabel(schema),
    type: "Object"
  };
};
exports.getRootProperty = getRootProperty;
var groupingDoms = function groupingDoms(nodes) {
  // grouping
  var root = nodes.find(function (c) {
    return c.className.includes("SchemaNode__root");
  });
  var leaves = nodes.filter(function (c) {
    return c.className.includes("SchemaLeaf__leaf__");
  });
  var groups = nodes.filter(function (c) {
    return c !== root && !leaves.includes(c);
  });
  return {
    root: root,
    leaves: leaves,
    groups: groups
  };
};
exports.groupingDoms = groupingDoms;
var getFieldDoms = function getFieldDoms(_ref) {
  var target = _ref.target,
    path = _ref.path,
    level = _ref.level;
  if (level === 1) {
    return target === null || target === void 0 ? void 0 : target.querySelectorAll("[data-level=\"".concat(level, "\"]"));
  } else {
    return target === null || target === void 0 ? void 0 : target.querySelectorAll("[data-node-path^=\"".concat(path, "\"][data-level=\"").concat(level, "\"]"));
  }
};
exports.getFieldDoms = getFieldDoms;
},{}],"dom/operation.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.open = exports.close = void 0;
var toggle = function toggle(element) {
  var button = element.querySelector('[class ^= "SchemaNode__symbol__"]');
  button === null || button === void 0 ? void 0 : button.click();
};
var open = function open(element) {
  if (element.ariaExpanded === "false") toggle(element);
};
exports.open = open;
var close = function close(element) {
  if (element.ariaExpanded === "true") toggle(element);
};
exports.close = close;
},{}],"dom/walk.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.walk = void 0;
var _extract = require("./extract");
var _operation = require("./operation");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var walk = function walk(_ref) {
  var root = _ref.root,
    group = _ref.group,
    path = _ref.path,
    level = _ref.level;
  (0, _operation.open)(group);
  var children = (0, _extract.getFieldDoms)({
    target: root,
    path: path,
    level: level
  });
  var property = (0, _extract.getProperty)(group);
  var abstract = _objectSpread(_objectSpread({}, property), {}, {
    leaves: [],
    groups: [],
    array: [],
    path: path
  });
  children === null || children === void 0 ? void 0 : children.forEach(function (child) {
    var name = (0, _extract.getSchemaName)(child);
    var nextPath = path ? path + "." + name : name;
    var walked = walk({
      root: root,
      group: child,
      path: nextPath,
      level: level + 1
    });
    if (walked.type === "Object") {
      var _abstract$groups;
      (_abstract$groups = abstract.groups) === null || _abstract$groups === void 0 ? void 0 : _abstract$groups.push(walked);
    } else if (walked.type === "array[]") {
      var _abstract$array;
      (_abstract$array = abstract.array) === null || _abstract$array === void 0 ? void 0 : _abstract$array.push(walked);
    } else {
      var _abstract$leaves;
      (_abstract$leaves = abstract.leaves) === null || _abstract$leaves === void 0 ? void 0 : _abstract$leaves.push(walked);
    }
  });
  (0, _operation.close)(group);
  return abstract;
};
exports.walk = walk;
},{"./extract":"dom/extract.ts","./operation":"dom/operation.ts"}],"index.ts":[function(require,module,exports) {
"use strict";

var _extract = require("./dom/extract");
var _walk = require("./dom/walk");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var main = function main() {
  var tree = document.querySelector('[class ^= "SchemaTree__tree"]');
  if (!tree) {
    console.log("Dom tree is not found. Click any dom element with dev-console");
    return;
  }
  var elementList = _toConsumableArray(tree.childNodes);
  var _groupingDoms = (0, _extract.groupingDoms)(elementList),
    root = _groupingDoms.root,
    leaves = _groupingDoms.leaves,
    groups = _groupingDoms.groups;
  if (!root) {
    console.log("Root is not found");
    return;
  }
  console.time();
  console.log("enter");
  var schemaTree = (0, _walk.walk)({
    root: tree,
    group: root,
    path: "",
    level: 1
  });
  console.log("res", schemaTree);
  console.timeEnd();
};
main();
},{"./dom/extract":"dom/extract.ts","./dom/walk":"dom/walk.ts"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57651" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.ts"], null)
//# sourceMappingURL=/index.js.map