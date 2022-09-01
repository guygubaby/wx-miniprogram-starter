module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1662000077519, function(require, module, exports) {
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to2, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to2, key) && key !== except)
        __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to2;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  assert: () => assert,
  at: () => at,
  blankObject: () => blankObject,
  clamp: () => clamp,
  clampArrayRange: () => clampArrayRange,
  clearUndefined: () => clearUndefined,
  createControlledPromise: () => createControlledPromise,
  createEventHook: () => createEventHook,
  customAlphabet: () => customAlphabet,
  debounce: () => debounce,
  ensurePrefix: () => ensurePrefix,
  ensureSuffix: () => ensureSuffix,
  fillWith: () => fillWith,
  flattenArrayable: () => flattenArrayable,
  getDeep: () => getDeep,
  hasOwnProperty: () => hasOwnProperty,
  hash: () => hash,
  isBoolean: () => isBoolean,
  isBrowser: () => isBrowser,
  isClient: () => isClient,
  isDef: () => isDef,
  isEmptyObject: () => isEmptyObject,
  isError: () => isError,
  isFunction: () => isFunction,
  isKeyOf: () => isKeyOf,
  isLooseFalsy: () => isLooseFalsy,
  isLooseTruthy: () => isLooseTruthy,
  isNumber: () => isNumber,
  isObject: () => isObject,
  isPromise: () => isPromise,
  isStrictFalsy: () => isStrictFalsy,
  isStrictTruthy: () => isStrictTruthy,
  isString: () => isString,
  isTruthy: () => isTruthy,
  isWindow: () => isWindow,
  last: () => last,
  lastPromiseFn: () => lastPromiseFn,
  lockPromiseFn: () => lockPromiseFn,
  memorize: () => memorize,
  memorizePromise: () => memorizePromise,
  mergeArrayable: () => mergeArrayable,
  move: () => move,
  nanoid: () => nanoid,
  noNull: () => noNull,
  noop: () => noop,
  notUndefined: () => notUndefined,
  objectOmit: () => objectOmit,
  objectPick: () => objectPick,
  partition: () => partition,
  range: () => range,
  rangeWithStart: () => rangeWithStart,
  remove: () => remove,
  retryPromiseFn: () => retryPromiseFn,
  run: () => run,
  runAll: () => runAll,
  runOnce: () => runOnce,
  singletonPromiseFn: () => singletonPromiseFn,
  slash: () => slash,
  sleep: () => sleep,
  sum: () => sum,
  throttle: () => throttle,
  timestamp: () => timestamp,
  to: () => to,
  toArray: () => toArray,
  toString: () => toString,
  uniq: () => uniq,
  uuid: () => uuid
});
module.exports = __toCommonJS(src_exports);

// src/misc.ts
var uuid = () => {
  return Array.from({ length: 16 }, () => Math.floor(Math.random() * 256).toString(16).padStart(2, "0")).join("");
};
var assert = (condition, message) => {
  if (!condition) {
    if (isError(message))
      throw message;
    else
      throw new Error(message || "assertion failed");
  }
};
var toString = (v) => Object.prototype.toString.call(v);
function noop() {
}
var timestamp = () => Date.now();
var blankObject = () => /* @__PURE__ */ Object.create(null);
var run = (fn) => fn();
var runAll = (fns) => fns.forEach(run);
var runOnce = (fn) => {
  let ran = false;
  return function(...args) {
    if (ran)
      return;
    ran = true;
    fn.apply(this, args);
  };
};
var hash = (str) => {
  let hash2 = 5381;
  let i = str.length;
  while (i--)
    hash2 = (hash2 << 5) - hash2 ^ str.charCodeAt(i);
  return hash2 >>> 0;
};

// src/is.ts
var isBrowser = () => typeof window !== "undefined";
var isDef = (val) => typeof val !== "undefined";
var isBoolean = (val) => typeof val === "boolean";
var isFunction = (val) => typeof val === "function";
var isNumber = (val) => typeof val === "number";
var isString = (val) => typeof val === "string";
var isObject = (val) => toString(val) === "[object Object]";
var isWindow = (val) => toString(val) === "[object Window]" && typeof window !== "undefined";
var isError = (val) => toString(val) === "[object Error]" && val instanceof Error;
var isLooseFalsy = (val) => ["", null, void 0].includes(val);
var isStrictFalsy = (val) => ["", null, void 0, 0].includes(val);
var isLooseTruthy = (val) => !isLooseFalsy(val);
var isStrictTruthy = (val) => !isStrictFalsy(val);
var isEmptyObject = (val) => isObject(val) && Object.keys(val).length === 0;
var isClient = isBrowser();
var isPromise = (val) => {
  return val && toString(val) === "[object Promise]" && isFunction(val.then) && isFunction(val.catch) && val instanceof Promise;
};

// src/array.ts
function toArray(array) {
  if (Array.isArray(array))
    return array;
  return [array];
}
var flattenArrayable = (array) => {
  return toArray(array).flat(1);
};
var at = (array, index) => {
  const len = array.length;
  if (!len)
    return void 0;
  if (index < 0)
    index += len;
  return array[index];
};
var clampArrayRange = (index, array) => {
  const len = array.length;
  return clamp(index, 0, len - 1);
};
var last = (array) => {
  return at(array, -1);
};
var mergeArrayable = (...args) => {
  return args.flatMap((item) => toArray(item));
};
var move = (arr, from, to2) => {
  arr.splice(to2, 0, arr.splice(from, 1)[0]);
  return arr;
};
var partition = (array, ...filters) => {
  const result = new Array(filters.length + 1).fill(null).map(() => []);
  array.forEach((e, idx, arr) => {
    let i = 0;
    for (const filter of filters) {
      if (filter(e, idx, arr)) {
        result[i].push(e);
        return;
      }
      i += 1;
    }
    result[i].push(e);
  });
  return result;
};
var range = (stop) => {
  return Array.from({ length: stop }, (_, idx) => idx);
};
var rangeWithStart = (start, stop) => {
  return Array.from({ length: stop - start }, (_, idx) => start + idx);
};
function fillWith(count, item) {
  return Array.from({ length: count }, isFunction(item) ? item : () => item);
}
var remove = (array, value) => {
  if (!array)
    return false;
  const index = array.indexOf(value);
  if (index >= 0) {
    array.splice(index, 1);
    return true;
  }
  return false;
};
var uniq = (array) => {
  if (!Array.isArray(array))
    return array;
  return Array.from(new Set(array));
};

// src/math.ts
var clamp = (n, min, max) => {
  return Math.min(max, Math.max(min, n));
};
var sum = (...args) => {
  return flattenArrayable(args).reduce((sum2, value) => sum2 + value, 0);
};

// src/string.ts
var slash = (str) => {
  return str.replace(/\\/g, "/");
};
var ensurePrefix = (str, prefix) => {
  if (!str.startsWith(prefix))
    return prefix + str;
  return str;
};
var ensureSuffix = (str, suffix) => {
  if (!str.endsWith(suffix))
    return str + suffix;
  return str;
};

// src/promise.ts
var sleep = (ms, callback) => {
  let timer = null;
  const clear = () => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  };
  const p = new Promise((resolve) => {
    timer = setTimeout(() => {
      callback == null ? void 0 : callback();
      resolve();
    }, ms);
  });
  Object.defineProperty(p, "clear", {
    value: clear,
    writable: false,
    enumerable: false,
    configurable: true
  });
  return p;
};
function to(promise, errorExt) {
  return promise.then((data) => [null, data]).catch((err) => {
    if (errorExt) {
      const parsedError = Object.assign({}, err, errorExt);
      return [parsedError, void 0];
    }
    return [err, void 0];
  });
}
var lockPromiseFn = (fn) => {
  let lock = false;
  return async function(...args) {
    if (lock)
      return;
    lock = true;
    try {
      const ret = await fn(...args);
      lock = false;
      return ret;
    } catch (error) {
      lock = false;
      throw error;
    }
  };
};
var retryPromiseFn = (fn, options = {}) => {
  const { times = 3, onFail = noop } = options;
  return async function(...args) {
    for (let i = 0; i < times; i++) {
      try {
        return await fn(...args);
      } catch (error) {
        await Promise.resolve(onFail(error));
        if (i === times - 1)
          throw error;
      }
    }
  };
};
var lastPromiseFn = (fn) => {
  let calledTimes = 0;
  let resolvedTimes = 0;
  return function(...args) {
    calledTimes++;
    return new Promise((resolve, reject) => {
      fn(...args).then((ret) => {
        if (++resolvedTimes === calledTimes)
          resolve(ret);
      }).catch(reject);
    });
  };
};
function singletonPromiseFn(fn) {
  let _promise;
  function wrapper() {
    if (!_promise)
      _promise = fn();
    return _promise;
  }
  wrapper.reset = async () => {
    const _prev = _promise;
    _promise = void 0;
    if (_prev)
      await _prev;
  };
  return wrapper;
}
function createControlledPromise() {
  let resolve, reject;
  const promise = new Promise((_resolve, _reject) => {
    resolve = _resolve;
    reject = _reject;
  });
  promise.resolve = resolve;
  promise.reject = reject;
  return promise;
}

// node_modules/.pnpm/throttle-debounce@5.0.0/node_modules/throttle-debounce/esm/index.js
function throttle(delay, callback, options) {
  var _ref = options || {}, _ref$noTrailing = _ref.noTrailing, noTrailing = _ref$noTrailing === void 0 ? false : _ref$noTrailing, _ref$noLeading = _ref.noLeading, noLeading = _ref$noLeading === void 0 ? false : _ref$noLeading, _ref$debounceMode = _ref.debounceMode, debounceMode = _ref$debounceMode === void 0 ? void 0 : _ref$debounceMode;
  var timeoutID;
  var cancelled = false;
  var lastExec = 0;
  function clearExistingTimeout() {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
  }
  function cancel(options2) {
    var _ref2 = options2 || {}, _ref2$upcomingOnly = _ref2.upcomingOnly, upcomingOnly = _ref2$upcomingOnly === void 0 ? false : _ref2$upcomingOnly;
    clearExistingTimeout();
    cancelled = !upcomingOnly;
  }
  function wrapper() {
    for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
      arguments_[_key] = arguments[_key];
    }
    var self = this;
    var elapsed = Date.now() - lastExec;
    if (cancelled) {
      return;
    }
    function exec() {
      lastExec = Date.now();
      callback.apply(self, arguments_);
    }
    function clear() {
      timeoutID = void 0;
    }
    if (!noLeading && debounceMode && !timeoutID) {
      exec();
    }
    clearExistingTimeout();
    if (debounceMode === void 0 && elapsed > delay) {
      if (noLeading) {
        lastExec = Date.now();
        if (!noTrailing) {
          timeoutID = setTimeout(debounceMode ? clear : exec, delay);
        }
      } else {
        exec();
      }
    } else if (noTrailing !== true) {
      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === void 0 ? delay - elapsed : delay);
    }
  }
  wrapper.cancel = cancel;
  return wrapper;
}
function debounce(delay, callback, options) {
  var _ref = options || {}, _ref$atBegin = _ref.atBegin, atBegin = _ref$atBegin === void 0 ? false : _ref$atBegin;
  return throttle(delay, callback, {
    debounceMode: atBegin !== false
  });
}

// node_modules/.pnpm/registry.npmmirror.com+nanoid@4.0.0/node_modules/nanoid/non-secure/index.js
var urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
var customAlphabet = (alphabet, defaultSize = 21) => {
  return (size = defaultSize) => {
    let id = "";
    let i = size;
    while (i--) {
      id += alphabet[Math.random() * alphabet.length | 0];
    }
    return id;
  };
};
var nanoid = (size = 21) => {
  let id = "";
  let i = size;
  while (i--) {
    id += urlAlphabet[Math.random() * 64 | 0];
  }
  return id;
};

// src/guards.ts
function noNull(v) {
  return v !== null;
}
function notUndefined(v) {
  return v !== void 0;
}
function isTruthy(v) {
  return Boolean(v);
}

// src/object.ts
function clearUndefined(obj) {
  Object.keys(obj).forEach((key) => obj[key] === void 0 ? delete obj[key] : {});
  return obj;
}
function hasOwnProperty(obj, v) {
  if (obj == null)
    return false;
  return Object.prototype.hasOwnProperty.call(obj, v);
}
function objectPick(obj, keys, omitUndefined = false) {
  return keys.reduce((n, k) => {
    if (k in obj) {
      if (!omitUndefined || !obj[k] === void 0)
        n[k] = obj[k];
    }
    return n;
  }, {});
}
function objectOmit(obj, keys, omitUndefined = false) {
  const oldKeys = Object.keys(obj);
  return oldKeys.reduce((acc, key) => {
    if (!toArray(keys).includes(key)) {
      if (!omitUndefined || !obj[key] === void 0) {
        acc[key] = obj[key];
      }
    }
    return acc;
  }, {});
}
function isKeyOf(obj, k) {
  return k in obj;
}
var getDeep = (obj, path) => {
  try {
    return path.split(".").reduce((acc, key) => acc[key], obj);
  } catch (_) {
    return void 0;
  }
};

// src/event-hook.ts
function createEventHook() {
  const fns = [];
  const off = (fn) => {
    const index = fns.indexOf(fn);
    if (index !== -1)
      fns.splice(index, 1);
  };
  const on = (fn) => {
    fns.push(fn);
    return {
      off: () => off(fn)
    };
  };
  const trigger = (param) => {
    fns.forEach((fn) => fn(param));
  };
  return {
    on,
    off,
    trigger
  };
}

// src/memorize.ts
function memorizePromise(fn) {
  let cache;
  let hasRun = false;
  return async () => {
    if (!hasRun) {
      hasRun = true;
      cache = await fn();
    }
    return cache;
  };
}
function memorize(fn) {
  let cache;
  let hasRun = false;
  return () => {
    if (!hasRun) {
      hasRun = true;
      cache = fn();
    }
    return cache;
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assert,
  at,
  blankObject,
  clamp,
  clampArrayRange,
  clearUndefined,
  createControlledPromise,
  createEventHook,
  customAlphabet,
  debounce,
  ensurePrefix,
  ensureSuffix,
  fillWith,
  flattenArrayable,
  getDeep,
  hasOwnProperty,
  hash,
  isBoolean,
  isBrowser,
  isClient,
  isDef,
  isEmptyObject,
  isError,
  isFunction,
  isKeyOf,
  isLooseFalsy,
  isLooseTruthy,
  isNumber,
  isObject,
  isPromise,
  isStrictFalsy,
  isStrictTruthy,
  isString,
  isTruthy,
  isWindow,
  last,
  lastPromiseFn,
  lockPromiseFn,
  memorize,
  memorizePromise,
  mergeArrayable,
  move,
  nanoid,
  noNull,
  noop,
  notUndefined,
  objectOmit,
  objectPick,
  partition,
  range,
  rangeWithStart,
  remove,
  retryPromiseFn,
  run,
  runAll,
  runOnce,
  singletonPromiseFn,
  slash,
  sleep,
  sum,
  throttle,
  timestamp,
  to,
  toArray,
  toString,
  uniq,
  uuid
});

}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1662000077519);
})()
//miniprogram-npm-outsideDeps=[]
//# sourceMappingURL=index.js.map