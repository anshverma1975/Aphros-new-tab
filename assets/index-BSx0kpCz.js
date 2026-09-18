(function() {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const m of document.querySelectorAll('link[rel="modulepreload"]')) s(m);
  new MutationObserver(m => {
    for (const v of m)
      if (v.type === "childList")
        for (const x of v.addedNodes) x.tagName === "LINK" && x.rel === "modulepreload" && s(x)
  }).observe(document, {
    childList: !0,
    subtree: !0
  });

  function d(m) {
    const v = {};
    return m.integrity && (v.integrity = m.integrity), m.referrerPolicy && (v.referrerPolicy = m.referrerPolicy), m.crossOrigin === "use-credentials" ? v.credentials = "include" : m.crossOrigin === "anonymous" ? v.credentials = "omit" : v.credentials = "same-origin", v
  }

  function s(m) {
    if (m.ep) return;
    m.ep = !0;
    const v = d(m);
    fetch(m.href, v)
  }
})();

function fi(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c
}
var js = {
    exports: {}
  },
  qn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gd;

function av() {
  if (Gd) return qn;
  Gd = 1;
  var c = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.fragment");

  function d(s, m, v) {
    var x = null;
    if (v !== void 0 && (x = "" + v), m.key !== void 0 && (x = "" + m.key), "key" in m) {
      v = {};
      for (var j in m) j !== "key" && (v[j] = m[j])
    } else v = m;
    return m = v.ref, {
      $$typeof: c,
      type: s,
      key: x,
      ref: m !== void 0 ? m : null,
      props: v
    }
  }
  return qn.Fragment = r, qn.jsx = d, qn.jsxs = d, qn
}
var Ld;

function nv() {
  return Ld || (Ld = 1, js.exports = av()), js.exports
}
var f = nv(),
  Os = {
    exports: {}
  },
  ot = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qd;

function uv() {
  if (Qd) return ot;
  Qd = 1;
  var c = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.portal"),
    d = Symbol.for("react.fragment"),
    s = Symbol.for("react.strict_mode"),
    m = Symbol.for("react.profiler"),
    v = Symbol.for("react.consumer"),
    x = Symbol.for("react.context"),
    j = Symbol.for("react.forward_ref"),
    S = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    D = Symbol.for("react.lazy"),
    C = Symbol.iterator;

  function E(y) {
    return y === null || typeof y != "object" ? null : (y = C && y[C] || y["@@iterator"], typeof y == "function" ? y : null)
  }
  var R = {
      isMounted: function() {
        return !1
      },
      enqueueForceUpdate: function() {},
      enqueueReplaceState: function() {},
      enqueueSetState: function() {}
    },
    B = Object.assign,
    Z = {};

  function w(y, V, P) {
    this.props = y, this.context = V, this.refs = Z, this.updater = P || R
  }
  w.prototype.isReactComponent = {}, w.prototype.setState = function(y, V) {
    if (typeof y != "object" && typeof y != "function" && y != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, y, V, "setState")
  }, w.prototype.forceUpdate = function(y) {
    this.updater.enqueueForceUpdate(this, y, "forceUpdate")
  };

  function O() {}
  O.prototype = w.prototype;

  function q(y, V, P) {
    this.props = y, this.context = V, this.refs = Z, this.updater = P || R
  }
  var K = q.prototype = new O;
  K.constructor = q, B(K, w.prototype), K.isPureReactComponent = !0;
  var W = Array.isArray,
    G = {
      H: null,
      A: null,
      T: null,
      S: null,
      V: null
    },
    F = Object.prototype.hasOwnProperty;

  function M(y, V, P, Y, k, I) {
    return P = I.ref, {
      $$typeof: c,
      type: y,
      key: V,
      ref: P !== void 0 ? P : null,
      props: I
    }
  }

  function L(y, V) {
    return M(y.type, V, void 0, void 0, void 0, y.props)
  }

  function $(y) {
    return typeof y == "object" && y !== null && y.$$typeof === c
  }

  function st(y) {
    var V = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + y.replace(/[=:]/g, function(P) {
      return V[P]
    })
  }
  var ct = /\/+/g;

  function vt(y, V) {
    return typeof y == "object" && y !== null && y.key != null ? st("" + y.key) : V.toString(36)
  }

  function bt() {}

  function Tt(y) {
    switch (y.status) {
      case "fulfilled":
        return y.value;
      case "rejected":
        throw y.reason;
      default:
        switch (typeof y.status == "string" ? y.then(bt, bt) : (y.status = "pending", y.then(function(V) {
            y.status === "pending" && (y.status = "fulfilled", y.value = V)
          }, function(V) {
            y.status === "pending" && (y.status = "rejected", y.reason = V)
          })), y.status) {
          case "fulfilled":
            return y.value;
          case "rejected":
            throw y.reason
        }
    }
    throw y
  }

  function ht(y, V, P, Y, k) {
    var I = typeof y;
    (I === "undefined" || I === "boolean") && (y = null);
    var at = !1;
    if (y === null) at = !0;
    else switch (I) {
      case "bigint":
      case "string":
      case "number":
        at = !0;
        break;
      case "object":
        switch (y.$$typeof) {
          case c:
          case r:
            at = !0;
            break;
          case D:
            return at = y._init, ht(at(y._payload), V, P, Y, k)
        }
    }
    if (at) return k = k(y), at = Y === "" ? "." + vt(y, 0) : Y, W(k) ? (P = "", at != null && (P = at.replace(ct, "$&/") + "/"), ht(k, V, P, "", function(el) {
      return el
    })) : k != null && ($(k) && (k = L(k, P + (k.key == null || y && y.key === k.key ? "" : ("" + k.key).replace(ct, "$&/") + "/") + at)), V.push(k)), 1;
    at = 0;
    var oe = Y === "" ? "." : Y + ":";
    if (W(y))
      for (var Rt = 0; Rt < y.length; Rt++) Y = y[Rt], I = oe + vt(Y, Rt), at += ht(Y, V, P, I, k);
    else if (Rt = E(y), typeof Rt == "function")
      for (y = Rt.call(y), Rt = 0; !(Y = y.next()).done;) Y = Y.value, I = oe + vt(Y, Rt++), at += ht(Y, V, P, I, k);
    else if (I === "object") {
      if (typeof y.then == "function") return ht(Tt(y), V, P, Y, k);
      throw V = String(y), Error("Objects are not valid as a React child (found: " + (V === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : V) + "). If you meant to render a collection of children, use an array instead.")
    }
    return at
  }

  function z(y, V, P) {
    if (y == null) return y;
    var Y = [],
      k = 0;
    return ht(y, Y, "", "", function(I) {
      return V.call(P, I, k++)
    }), Y
  }

  function J(y) {
    if (y._status === -1) {
      var V = y._result;
      V = V(), V.then(function(P) {
        (y._status === 0 || y._status === -1) && (y._status = 1, y._result = P)
      }, function(P) {
        (y._status === 0 || y._status === -1) && (y._status = 2, y._result = P)
      }), y._status === -1 && (y._status = 0, y._result = V)
    }
    if (y._status === 1) return y._result.default;
    throw y._result
  }
  var lt = typeof reportError == "function" ? reportError : function(y) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var V = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y),
        error: y
      });
      if (!window.dispatchEvent(V)) return
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", y);
      return
    }
    console.error(y)
  };

  function yt() {}
  return ot.Children = {
    map: z,
    forEach: function(y, V, P) {
      z(y, function() {
        V.apply(this, arguments)
      }, P)
    },
    count: function(y) {
      var V = 0;
      return z(y, function() {
        V++
      }), V
    },
    toArray: function(y) {
      return z(y, function(V) {
        return V
      }) || []
    },
    only: function(y) {
      if (!$(y)) throw Error("React.Children.only expected to receive a single React element child.");
      return y
    }
  }, ot.Component = w, ot.Fragment = d, ot.Profiler = m, ot.PureComponent = q, ot.StrictMode = s, ot.Suspense = S, ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = G, ot.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(y) {
      return G.H.useMemoCache(y)
    }
  }, ot.cache = function(y) {
    return function() {
      return y.apply(null, arguments)
    }
  }, ot.cloneElement = function(y, V, P) {
    if (y == null) throw Error("The argument must be a React element, but you passed " + y + ".");
    var Y = B({}, y.props),
      k = y.key,
      I = void 0;
    if (V != null)
      for (at in V.ref !== void 0 && (I = void 0), V.key !== void 0 && (k = "" + V.key), V) !F.call(V, at) || at === "key" || at === "__self" || at === "__source" || at === "ref" && V.ref === void 0 || (Y[at] = V[at]);
    var at = arguments.length - 2;
    if (at === 1) Y.children = P;
    else if (1 < at) {
      for (var oe = Array(at), Rt = 0; Rt < at; Rt++) oe[Rt] = arguments[Rt + 2];
      Y.children = oe
    }
    return M(y.type, k, void 0, void 0, I, Y)
  }, ot.createContext = function(y) {
    return y = {
      $$typeof: x,
      _currentValue: y,
      _currentValue2: y,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, y.Provider = y, y.Consumer = {
      $$typeof: v,
      _context: y
    }, y
  }, ot.createElement = function(y, V, P) {
    var Y, k = {},
      I = null;
    if (V != null)
      for (Y in V.key !== void 0 && (I = "" + V.key), V) F.call(V, Y) && Y !== "key" && Y !== "__self" && Y !== "__source" && (k[Y] = V[Y]);
    var at = arguments.length - 2;
    if (at === 1) k.children = P;
    else if (1 < at) {
      for (var oe = Array(at), Rt = 0; Rt < at; Rt++) oe[Rt] = arguments[Rt + 2];
      k.children = oe
    }
    if (y && y.defaultProps)
      for (Y in at = y.defaultProps, at) k[Y] === void 0 && (k[Y] = at[Y]);
    return M(y, I, void 0, void 0, null, k)
  }, ot.createRef = function() {
    return {
      current: null
    }
  }, ot.forwardRef = function(y) {
    return {
      $$typeof: j,
      render: y
    }
  }, ot.isValidElement = $, ot.lazy = function(y) {
    return {
      $$typeof: D,
      _payload: {
        _status: -1,
        _result: y
      },
      _init: J
    }
  }, ot.memo = function(y, V) {
    return {
      $$typeof: g,
      type: y,
      compare: V === void 0 ? null : V
    }
  }, ot.startTransition = function(y) {
    var V = G.T,
      P = {};
    G.T = P;
    try {
      var Y = y(),
        k = G.S;
      k !== null && k(P, Y), typeof Y == "object" && Y !== null && typeof Y.then == "function" && Y.then(yt, lt)
    } catch (I) {
      lt(I)
    } finally {
      G.T = V
    }
  }, ot.unstable_useCacheRefresh = function() {
    return G.H.useCacheRefresh()
  }, ot.use = function(y) {
    return G.H.use(y)
  }, ot.useActionState = function(y, V, P) {
    return G.H.useActionState(y, V, P)
  }, ot.useCallback = function(y, V) {
    return G.H.useCallback(y, V)
  }, ot.useContext = function(y) {
    return G.H.useContext(y)
  }, ot.useDebugValue = function() {}, ot.useDeferredValue = function(y, V) {
    return G.H.useDeferredValue(y, V)
  }, ot.useEffect = function(y, V, P) {
    var Y = G.H;
    if (typeof P == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
    return Y.useEffect(y, V)
  }, ot.useId = function() {
    return G.H.useId()
  }, ot.useImperativeHandle = function(y, V, P) {
    return G.H.useImperativeHandle(y, V, P)
  }, ot.useInsertionEffect = function(y, V) {
    return G.H.useInsertionEffect(y, V)
  }, ot.useLayoutEffect = function(y, V) {
    return G.H.useLayoutEffect(y, V)
  }, ot.useMemo = function(y, V) {
    return G.H.useMemo(y, V)
  }, ot.useOptimistic = function(y, V) {
    return G.H.useOptimistic(y, V)
  }, ot.useReducer = function(y, V, P) {
    return G.H.useReducer(y, V, P)
  }, ot.useRef = function(y) {
    return G.H.useRef(y)
  }, ot.useState = function(y) {
    return G.H.useState(y)
  }, ot.useSyncExternalStore = function(y, V, P) {
    return G.H.useSyncExternalStore(y, V, P)
  }, ot.useTransition = function() {
    return G.H.useTransition()
  }, ot.version = "19.1.0", ot
}
var Zd;

function Vn() {
  return Zd || (Zd = 1, Os.exports = uv()), Os.exports
}
var U = Vn();
const Zt = fi(U);
var Ms = {
    exports: {}
  },
  Yn = {},
  Cs = {
    exports: {}
  },
  Rs = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vd;

function iv() {
  return Vd || (Vd = 1, function(c) {
    function r(z, J) {
      var lt = z.length;
      z.push(J);
      t: for (; 0 < lt;) {
        var yt = lt - 1 >>> 1,
          y = z[yt];
        if (0 < m(y, J)) z[yt] = J, z[lt] = y, lt = yt;
        else break t
      }
    }

    function d(z) {
      return z.length === 0 ? null : z[0]
    }

    function s(z) {
      if (z.length === 0) return null;
      var J = z[0],
        lt = z.pop();
      if (lt !== J) {
        z[0] = lt;
        t: for (var yt = 0, y = z.length, V = y >>> 1; yt < V;) {
          var P = 2 * (yt + 1) - 1,
            Y = z[P],
            k = P + 1,
            I = z[k];
          if (0 > m(Y, lt)) k < y && 0 > m(I, Y) ? (z[yt] = I, z[k] = lt, yt = k) : (z[yt] = Y, z[P] = lt, yt = P);
          else if (k < y && 0 > m(I, lt)) z[yt] = I, z[k] = lt, yt = k;
          else break t
        }
      }
      return J
    }

    function m(z, J) {
      var lt = z.sortIndex - J.sortIndex;
      return lt !== 0 ? lt : z.id - J.id
    }
    if (c.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var v = performance;
      c.unstable_now = function() {
        return v.now()
      }
    } else {
      var x = Date,
        j = x.now();
      c.unstable_now = function() {
        return x.now() - j
      }
    }
    var S = [],
      g = [],
      D = 1,
      C = null,
      E = 3,
      R = !1,
      B = !1,
      Z = !1,
      w = !1,
      O = typeof setTimeout == "function" ? setTimeout : null,
      q = typeof clearTimeout == "function" ? clearTimeout : null,
      K = typeof setImmediate < "u" ? setImmediate : null;

    function W(z) {
      for (var J = d(g); J !== null;) {
        if (J.callback === null) s(g);
        else if (J.startTime <= z) s(g), J.sortIndex = J.expirationTime, r(S, J);
        else break;
        J = d(g)
      }
    }

    function G(z) {
      if (Z = !1, W(z), !B)
        if (d(S) !== null) B = !0, F || (F = !0, vt());
        else {
          var J = d(g);
          J !== null && ht(G, J.startTime - z)
        }
    }
    var F = !1,
      M = -1,
      L = 5,
      $ = -1;

    function st() {
      return w ? !0 : !(c.unstable_now() - $ < L)
    }

    function ct() {
      if (w = !1, F) {
        var z = c.unstable_now();
        $ = z;
        var J = !0;
        try {
          t: {
            B = !1,
            Z && (Z = !1, q(M), M = -1),
            R = !0;
            var lt = E;
            try {
              e: {
                for (W(z), C = d(S); C !== null && !(C.expirationTime > z && st());) {
                  var yt = C.callback;
                  if (typeof yt == "function") {
                    C.callback = null, E = C.priorityLevel;
                    var y = yt(C.expirationTime <= z);
                    if (z = c.unstable_now(), typeof y == "function") {
                      C.callback = y, W(z), J = !0;
                      break e
                    }
                    C === d(S) && s(S), W(z)
                  } else s(S);
                  C = d(S)
                }
                if (C !== null) J = !0;
                else {
                  var V = d(g);
                  V !== null && ht(G, V.startTime - z), J = !1
                }
              }
              break t
            }
            finally {
              C = null, E = lt, R = !1
            }
            J = void 0
          }
        }
        finally {
          J ? vt() : F = !1
        }
      }
    }
    var vt;
    if (typeof K == "function") vt = function() {
      K(ct)
    };
    else if (typeof MessageChannel < "u") {
      var bt = new MessageChannel,
        Tt = bt.port2;
      bt.port1.onmessage = ct, vt = function() {
        Tt.postMessage(null)
      }
    } else vt = function() {
      O(ct, 0)
    };

    function ht(z, J) {
      M = O(function() {
        z(c.unstable_now())
      }, J)
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(z) {
      z.callback = null
    }, c.unstable_forceFrameRate = function(z) {
      0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : L = 0 < z ? Math.floor(1e3 / z) : 5
    }, c.unstable_getCurrentPriorityLevel = function() {
      return E
    }, c.unstable_next = function(z) {
      switch (E) {
        case 1:
        case 2:
        case 3:
          var J = 3;
          break;
        default:
          J = E
      }
      var lt = E;
      E = J;
      try {
        return z()
      } finally {
        E = lt
      }
    }, c.unstable_requestPaint = function() {
      w = !0
    }, c.unstable_runWithPriority = function(z, J) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          z = 3
      }
      var lt = E;
      E = z;
      try {
        return J()
      } finally {
        E = lt
      }
    }, c.unstable_scheduleCallback = function(z, J, lt) {
      var yt = c.unstable_now();
      switch (typeof lt == "object" && lt !== null ? (lt = lt.delay, lt = typeof lt == "number" && 0 < lt ? yt + lt : yt) : lt = yt, z) {
        case 1:
          var y = -1;
          break;
        case 2:
          y = 250;
          break;
        case 5:
          y = 1073741823;
          break;
        case 4:
          y = 1e4;
          break;
        default:
          y = 5e3
      }
      return y = lt + y, z = {
        id: D++,
        callback: J,
        priorityLevel: z,
        startTime: lt,
        expirationTime: y,
        sortIndex: -1
      }, lt > yt ? (z.sortIndex = lt, r(g, z), d(S) === null && z === d(g) && (Z ? (q(M), M = -1) : Z = !0, ht(G, lt - yt))) : (z.sortIndex = y, r(S, z), B || R || (B = !0, F || (F = !0, vt()))), z
    }, c.unstable_shouldYield = st, c.unstable_wrapCallback = function(z) {
      var J = E;
      return function() {
        var lt = E;
        E = J;
        try {
          return z.apply(this, arguments)
        } finally {
          E = lt
        }
      }
    }
  }(Rs)), Rs
}
var Kd;

function cv() {
  return Kd || (Kd = 1, Cs.exports = iv()), Cs.exports
}
var zs = {
    exports: {}
  },
  ee = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kd;

function sv() {
  if (kd) return ee;
  kd = 1;
  var c = Vn();

  function r(S) {
    var g = "https://react.dev/errors/" + S;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var D = 2; D < arguments.length; D++) g += "&args[]=" + encodeURIComponent(arguments[D])
    }
    return "Minified React error #" + S + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  }

  function d() {}
  var s = {
      d: {
        f: d,
        r: function() {
          throw Error(r(522))
        },
        D: d,
        C: d,
        L: d,
        m: d,
        X: d,
        S: d,
        M: d
      },
      p: 0,
      findDOMNode: null
    },
    m = Symbol.for("react.portal");

  function v(S, g, D) {
    var C = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: m,
      key: C == null ? null : "" + C,
      children: S,
      containerInfo: g,
      implementation: D
    }
  }
  var x = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

  function j(S, g) {
    if (S === "font") return "";
    if (typeof g == "string") return g === "use-credentials" ? g : ""
  }
  return ee.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, ee.createPortal = function(S, g) {
    var D = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11) throw Error(r(299));
    return v(S, g, null, D)
  }, ee.flushSync = function(S) {
    var g = x.T,
      D = s.p;
    try {
      if (x.T = null, s.p = 2, S) return S()
    } finally {
      x.T = g, s.p = D, s.d.f()
    }
  }, ee.preconnect = function(S, g) {
    typeof S == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, s.d.C(S, g))
  }, ee.prefetchDNS = function(S) {
    typeof S == "string" && s.d.D(S)
  }, ee.preinit = function(S, g) {
    if (typeof S == "string" && g && typeof g.as == "string") {
      var D = g.as,
        C = j(D, g.crossOrigin),
        E = typeof g.integrity == "string" ? g.integrity : void 0,
        R = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
      D === "style" ? s.d.S(S, typeof g.precedence == "string" ? g.precedence : void 0, {
        crossOrigin: C,
        integrity: E,
        fetchPriority: R
      }) : D === "script" && s.d.X(S, {
        crossOrigin: C,
        integrity: E,
        fetchPriority: R,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0
      })
    }
  }, ee.preinitModule = function(S, g) {
    if (typeof S == "string")
      if (typeof g == "object" && g !== null) {
        if (g.as == null || g.as === "script") {
          var D = j(g.as, g.crossOrigin);
          s.d.M(S, {
            crossOrigin: D,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
            nonce: typeof g.nonce == "string" ? g.nonce : void 0
          })
        }
      } else g == null && s.d.M(S)
  }, ee.preload = function(S, g) {
    if (typeof S == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
      var D = g.as,
        C = j(D, g.crossOrigin);
      s.d.L(S, D, {
        crossOrigin: C,
        integrity: typeof g.integrity == "string" ? g.integrity : void 0,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0,
        type: typeof g.type == "string" ? g.type : void 0,
        fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
        referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
        imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
        imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
        media: typeof g.media == "string" ? g.media : void 0
      })
    }
  }, ee.preloadModule = function(S, g) {
    if (typeof S == "string")
      if (g) {
        var D = j(g.as, g.crossOrigin);
        s.d.m(S, {
          as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
          crossOrigin: D,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0
        })
      } else s.d.m(S)
  }, ee.requestFormReset = function(S) {
    s.d.r(S)
  }, ee.unstable_batchedUpdates = function(S, g) {
    return S(g)
  }, ee.useFormState = function(S, g, D) {
    return x.H.useFormState(S, g, D)
  }, ee.useFormStatus = function() {
    return x.H.useHostTransitionStatus()
  }, ee.version = "19.1.0", ee
}
var Jd;

function Qs() {
  if (Jd) return zs.exports;
  Jd = 1;

  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)
    } catch (r) {
      console.error(r)
    }
  }
  return c(), zs.exports = sv(), zs.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wd;

function ov() {
  if (Wd) return Yn;
  Wd = 1;
  var c = cv(),
    r = Vn(),
    d = Qs();

  function s(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++) e += "&args[]=" + encodeURIComponent(arguments[l])
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  }

  function m(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
  }

  function v(t) {
    var e = t,
      l = t;
    if (t.alternate)
      for (; e.return;) e = e.return;
    else {
      t = e;
      do e = t, (e.flags & 4098) !== 0 && (l = e.return), t = e.return; while (t)
    }
    return e.tag === 3 ? l : null
  }

  function x(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated
    }
    return null
  }

  function j(t) {
    if (v(t) !== t) throw Error(s(188))
  }

  function S(t) {
    var e = t.alternate;
    if (!e) {
      if (e = v(t), e === null) throw Error(s(188));
      return e !== t ? null : t
    }
    for (var l = t, a = e;;) {
      var n = l.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (a = n.return, a !== null) {
          l = a;
          continue
        }
        break
      }
      if (n.child === u.child) {
        for (u = n.child; u;) {
          if (u === l) return j(n), t;
          if (u === a) return j(n), e;
          u = u.sibling
        }
        throw Error(s(188))
      }
      if (l.return !== a.return) l = n, a = u;
      else {
        for (var i = !1, o = n.child; o;) {
          if (o === l) {
            i = !0, l = n, a = u;
            break
          }
          if (o === a) {
            i = !0, a = n, l = u;
            break
          }
          o = o.sibling
        }
        if (!i) {
          for (o = u.child; o;) {
            if (o === l) {
              i = !0, l = u, a = n;
              break
            }
            if (o === a) {
              i = !0, a = u, l = n;
              break
            }
            o = o.sibling
          }
          if (!i) throw Error(s(189))
        }
      }
      if (l.alternate !== a) throw Error(s(190))
    }
    if (l.tag !== 3) throw Error(s(188));
    return l.stateNode.current === l ? t : e
  }

  function g(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null;) {
      if (e = g(t), e !== null) return e;
      t = t.sibling
    }
    return null
  }
  var D = Object.assign,
    C = Symbol.for("react.element"),
    E = Symbol.for("react.transitional.element"),
    R = Symbol.for("react.portal"),
    B = Symbol.for("react.fragment"),
    Z = Symbol.for("react.strict_mode"),
    w = Symbol.for("react.profiler"),
    O = Symbol.for("react.provider"),
    q = Symbol.for("react.consumer"),
    K = Symbol.for("react.context"),
    W = Symbol.for("react.forward_ref"),
    G = Symbol.for("react.suspense"),
    F = Symbol.for("react.suspense_list"),
    M = Symbol.for("react.memo"),
    L = Symbol.for("react.lazy"),
    $ = Symbol.for("react.activity"),
    st = Symbol.for("react.memo_cache_sentinel"),
    ct = Symbol.iterator;

  function vt(t) {
    return t === null || typeof t != "object" ? null : (t = ct && t[ct] || t["@@iterator"], typeof t == "function" ? t : null)
  }
  var bt = Symbol.for("react.client.reference");

  function Tt(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.$$typeof === bt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case B:
        return "Fragment";
      case w:
        return "Profiler";
      case Z:
        return "StrictMode";
      case G:
        return "Suspense";
      case F:
        return "SuspenseList";
      case $:
        return "Activity"
    }
    if (typeof t == "object") switch (t.$$typeof) {
      case R:
        return "Portal";
      case K:
        return (t.displayName || "Context") + ".Provider";
      case q:
        return (t._context.displayName || "Context") + ".Consumer";
      case W:
        var e = t.render;
        return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
      case M:
        return e = t.displayName || null, e !== null ? e : Tt(t.type) || "Memo";
      case L:
        e = t._payload, t = t._init;
        try {
          return Tt(t(e))
        } catch {}
    }
    return null
  }
  var ht = Array.isArray,
    z = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    J = d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    lt = {
      pending: !1,
      data: null,
      method: null,
      action: null
    },
    yt = [],
    y = -1;

  function V(t) {
    return {
      current: t
    }
  }

  function P(t) {
    0 > y || (t.current = yt[y], yt[y] = null, y--)
  }

  function Y(t, e) {
    y++, yt[y] = t.current, t.current = e
  }
  var k = V(null),
    I = V(null),
    at = V(null),
    oe = V(null);

  function Rt(t, e) {
    switch (Y(at, e), Y(I, t), Y(k, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? gd(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI) e = gd(e), t = vd(e, t);
        else switch (t) {
          case "svg":
            t = 1;
            break;
          case "math":
            t = 2;
            break;
          default:
            t = 0
        }
    }
    P(k), Y(k, t)
  }

  function el() {
    P(k), P(I), P(at)
  }

  function hi(t) {
    t.memoizedState !== null && Y(oe, t);
    var e = k.current,
      l = vd(e, t.type);
    e !== l && (Y(I, t), Y(k, l))
  }

  function Kn(t) {
    I.current === t && (P(k), P(I)), oe.current === t && (P(oe), Rn._currentValue = lt)
  }
  var mi = Object.prototype.hasOwnProperty,
    gi = c.unstable_scheduleCallback,
    vi = c.unstable_cancelCallback,
    Uh = c.unstable_shouldYield,
    Hh = c.unstable_requestPaint,
    Re = c.unstable_now,
    qh = c.unstable_getCurrentPriorityLevel,
    ks = c.unstable_ImmediatePriority,
    Js = c.unstable_UserBlockingPriority,
    kn = c.unstable_NormalPriority,
    Yh = c.unstable_LowPriority,
    Ws = c.unstable_IdlePriority,
    Bh = c.log,
    Xh = c.unstable_setDisableYieldValue,
    Ba = null,
    fe = null;

  function ll(t) {
    if (typeof Bh == "function" && Xh(t), fe && typeof fe.setStrictMode == "function") try {
      fe.setStrictMode(Ba, t)
    } catch {}
  }
  var re = Math.clz32 ? Math.clz32 : Qh,
    Gh = Math.log,
    Lh = Math.LN2;

  function Qh(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Gh(t) / Lh | 0) | 0
  }
  var Jn = 256,
    Wn = 4194304;

  function jl(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t
    }
  }

  function Fn(t, e, l) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var n = 0,
      u = t.suspendedLanes,
      i = t.pingedLanes;
    t = t.warmLanes;
    var o = a & 134217727;
    return o !== 0 ? (a = o & ~u, a !== 0 ? n = jl(a) : (i &= o, i !== 0 ? n = jl(i) : l || (l = o & ~t, l !== 0 && (n = jl(l))))) : (o = a & ~u, o !== 0 ? n = jl(o) : i !== 0 ? n = jl(i) : l || (l = a & ~t, l !== 0 && (n = jl(l)))), n === 0 ? 0 : e !== 0 && e !== n && (e & u) === 0 && (u = n & -n, l = e & -e, u >= l || u === 32 && (l & 4194048) !== 0) ? e : n
  }

  function Xa(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0
  }

  function Zh(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1
    }
  }

  function Fs() {
    var t = Jn;
    return Jn <<= 1, (Jn & 4194048) === 0 && (Jn = 256), t
  }

  function $s() {
    var t = Wn;
    return Wn <<= 1, (Wn & 62914560) === 0 && (Wn = 4194304), t
  }

  function yi(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e
  }

  function Ga(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0)
  }

  function Vh(t, e, l, a, n, u) {
    var i = t.pendingLanes;
    t.pendingLanes = l, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= l, t.entangledLanes &= l, t.errorRecoveryDisabledLanes &= l, t.shellSuspendCounter = 0;
    var o = t.entanglements,
      h = t.expirationTimes,
      N = t.hiddenUpdates;
    for (l = i & ~l; 0 < l;) {
      var H = 31 - re(l),
        Q = 1 << H;
      o[H] = 0, h[H] = -1;
      var _ = N[H];
      if (_ !== null)
        for (N[H] = null, H = 0; H < _.length; H++) {
          var A = _[H];
          A !== null && (A.lane &= -536870913)
        }
      l &= ~Q
    }
    a !== 0 && Ps(t, a, 0), u !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(i & ~e))
  }

  function Ps(t, e, l) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var a = 31 - re(e);
    t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | l & 4194090
  }

  function Is(t, e) {
    var l = t.entangledLanes |= e;
    for (t = t.entanglements; l;) {
      var a = 31 - re(l),
        n = 1 << a;
      n & e | t[a] & e && (t[a] |= e), l &= ~n
    }
  }

  function pi(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0
    }
    return t
  }

  function Si(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
  }

  function to() {
    var t = J.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Ud(t.type))
  }

  function Kh(t, e) {
    var l = J.p;
    try {
      return J.p = t, e()
    } finally {
      J.p = l
    }
  }
  var al = Math.random().toString(36).slice(2),
    It = "__reactFiber$" + al,
    ne = "__reactProps$" + al,
    Wl = "__reactContainer$" + al,
    bi = "__reactEvents$" + al,
    kh = "__reactListeners$" + al,
    Jh = "__reactHandles$" + al,
    eo = "__reactResources$" + al,
    La = "__reactMarker$" + al;

  function Ti(t) {
    delete t[It], delete t[ne], delete t[bi], delete t[kh], delete t[Jh]
  }

  function Fl(t) {
    var e = t[It];
    if (e) return e;
    for (var l = t.parentNode; l;) {
      if (e = l[Wl] || l[It]) {
        if (l = e.alternate, e.child !== null || l !== null && l.child !== null)
          for (t = bd(t); t !== null;) {
            if (l = t[It]) return l;
            t = bd(t)
          }
        return e
      }
      t = l, l = t.parentNode
    }
    return null
  }

  function $l(t) {
    if (t = t[It] || t[Wl]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3) return t
    }
    return null
  }

  function Qa(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(s(33))
  }

  function Pl(t) {
    var e = t[eo];
    return e || (e = t[eo] = {
      hoistableStyles: new Map,
      hoistableScripts: new Map
    }), e
  }

  function Vt(t) {
    t[La] = !0
  }
  var lo = new Set,
    ao = {};

  function Ol(t, e) {
    Il(t, e), Il(t + "Capture", e)
  }

  function Il(t, e) {
    for (ao[t] = e, t = 0; t < e.length; t++) lo.add(e[t])
  }
  var Wh = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
    no = {},
    uo = {};

  function Fh(t) {
    return mi.call(uo, t) ? !0 : mi.call(no, t) ? !1 : Wh.test(t) ? uo[t] = !0 : (no[t] = !0, !1)
  }

  function $n(t, e, l) {
    if (Fh(e))
      if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return
            }
        }
        t.setAttribute(e, "" + l)
      }
  }

  function Pn(t, e, l) {
    if (l === null) t.removeAttribute(e);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return
      }
      t.setAttribute(e, "" + l)
    }
  }

  function Be(t, e, l, a) {
    if (a === null) t.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return
      }
      t.setAttributeNS(e, l, "" + a)
    }
  }
  var xi, io;

  function ta(t) {
    if (xi === void 0) try {
      throw Error()
    } catch (l) {
      var e = l.stack.trim().match(/\n( *(at )?)/);
      xi = e && e[1] || "", io = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : ""
    }
    return `
` + xi + t + io
  }
  var Ni = !1;

  function Ei(t, e) {
    if (!t || Ni) return "";
    Ni = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var Q = function() {
                throw Error()
              };
              if (Object.defineProperty(Q.prototype, "props", {
                  set: function() {
                    throw Error()
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(Q, [])
                } catch (A) {
                  var _ = A
                }
                Reflect.construct(t, [], Q)
              } else {
                try {
                  Q.call()
                } catch (A) {
                  _ = A
                }
                t.call(Q.prototype)
              }
            } else {
              try {
                throw Error()
              } catch (A) {
                _ = A
              }(Q = t()) && typeof Q.catch == "function" && Q.catch(function() {})
            }
          } catch (A) {
            if (A && _ && typeof A.stack == "string") return [A.stack, _.stack]
          }
          return [null, null]
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
      n && n.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
        value: "DetermineComponentFrameRoot"
      });
      var u = a.DetermineComponentFrameRoot(),
        i = u[0],
        o = u[1];
      if (i && o) {
        var h = i.split(`
`),
          N = o.split(`
`);
        for (n = a = 0; a < h.length && !h[a].includes("DetermineComponentFrameRoot");) a++;
        for (; n < N.length && !N[n].includes("DetermineComponentFrameRoot");) n++;
        if (a === h.length || n === N.length)
          for (a = h.length - 1, n = N.length - 1; 1 <= a && 0 <= n && h[a] !== N[n];) n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (h[a] !== N[n]) {
            if (a !== 1 || n !== 1)
              do
                if (a--, n--, 0 > n || h[a] !== N[n]) {
                  var H = `
` + h[a].replace(" at new ", " at ");
                  return t.displayName && H.includes("<anonymous>") && (H = H.replace("<anonymous>", t.displayName)), H
                } while (1 <= a && 0 <= n);
            break
          }
      }
    } finally {
      Ni = !1, Error.prepareStackTrace = l
    }
    return (l = t ? t.displayName || t.name : "") ? ta(l) : ""
  }

  function $h(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return ta(t.type);
      case 16:
        return ta("Lazy");
      case 13:
        return ta("Suspense");
      case 19:
        return ta("SuspenseList");
      case 0:
      case 15:
        return Ei(t.type, !1);
      case 11:
        return Ei(t.type.render, !1);
      case 1:
        return Ei(t.type, !0);
      case 31:
        return ta("Activity");
      default:
        return ""
    }
  }

  function co(t) {
    try {
      var e = "";
      do e += $h(t), t = t.return; while (t);
      return e
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack
    }
  }

  function Se(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return ""
    }
  }

  function so(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
  }

  function Ph(t) {
    var e = so(t) ? "checked" : "value",
      l = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
      a = "" + t[e];
    if (!t.hasOwnProperty(e) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var n = l.get,
        u = l.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function() {
          return n.call(this)
        },
        set: function(i) {
          a = "" + i, u.call(this, i)
        }
      }), Object.defineProperty(t, e, {
        enumerable: l.enumerable
      }), {
        getValue: function() {
          return a
        },
        setValue: function(i) {
          a = "" + i
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e]
        }
      }
    }
  }

  function In(t) {
    t._valueTracker || (t._valueTracker = Ph(t))
  }

  function oo(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(),
      a = "";
    return t && (a = so(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== l ? (e.setValue(t), !0) : !1
  }

  function tu(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body
    } catch {
      return t.body
    }
  }
  var Ih = /[\n"\\]/g;

  function be(t) {
    return t.replace(Ih, function(e) {
      return "\\" + e.charCodeAt(0).toString(16) + " "
    })
  }

  function Di(t, e, l, a, n, u, i, o) {
    t.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? t.type = i : t.removeAttribute("type"), e != null ? i === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Se(e)) : t.value !== "" + Se(e) && (t.value = "" + Se(e)) : i !== "submit" && i !== "reset" || t.removeAttribute("value"), e != null ? _i(t, i, Se(e)) : l != null ? _i(t, i, Se(l)) : a != null && t.removeAttribute("value"), n == null && u != null && (t.defaultChecked = !!u), n != null && (t.checked = n && typeof n != "function" && typeof n != "symbol"), o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? t.name = "" + Se(o) : t.removeAttribute("name")
  }

  function fo(t, e, l, a, n, u, i, o) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || l != null) {
      if (!(u !== "submit" && u !== "reset" || e != null)) return;
      l = l != null ? "" + Se(l) : "", e = e != null ? "" + Se(e) : l, o || e === t.value || (t.value = e), t.defaultValue = e
    }
    a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = o ? t.checked : !!a, t.defaultChecked = !!a, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.name = i)
  }

  function _i(t, e, l) {
    e === "number" && tu(t.ownerDocument) === t || t.defaultValue === "" + l || (t.defaultValue = "" + l)
  }

  function ea(t, e, l, a) {
    if (t = t.options, e) {
      e = {};
      for (var n = 0; n < l.length; n++) e["$" + l[n]] = !0;
      for (l = 0; l < t.length; l++) n = e.hasOwnProperty("$" + t[l].value), t[l].selected !== n && (t[l].selected = n), n && a && (t[l].defaultSelected = !0)
    } else {
      for (l = "" + Se(l), e = null, n = 0; n < t.length; n++) {
        if (t[n].value === l) {
          t[n].selected = !0, a && (t[n].defaultSelected = !0);
          return
        }
        e !== null || t[n].disabled || (e = t[n])
      }
      e !== null && (e.selected = !0)
    }
  }

  function ro(t, e, l) {
    if (e != null && (e = "" + Se(e), e !== t.value && (t.value = e), l == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return
    }
    t.defaultValue = l != null ? "" + Se(l) : ""
  }

  function ho(t, e, l, a) {
    if (e == null) {
      if (a != null) {
        if (l != null) throw Error(s(92));
        if (ht(a)) {
          if (1 < a.length) throw Error(s(93));
          a = a[0]
        }
        l = a
      }
      l == null && (l = ""), e = l
    }
    l = Se(e), t.defaultValue = l, a = t.textContent, a === l && a !== "" && a !== null && (t.value = a)
  }

  function la(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return
      }
    }
    t.textContent = e
  }
  var tm = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

  function mo(t, e, l) {
    var a = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, l) : typeof l != "number" || l === 0 || tm.has(e) ? e === "float" ? t.cssFloat = l : t[e] = ("" + l).trim() : t[e] = l + "px"
  }

  function go(t, e, l) {
    if (e != null && typeof e != "object") throw Error(s(62));
    if (t = t.style, l != null) {
      for (var a in l) !l.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
      for (var n in e) a = e[n], e.hasOwnProperty(n) && l[n] !== a && mo(t, n, a)
    } else
      for (var u in e) e.hasOwnProperty(u) && mo(t, u, e[u])
  }

  function Ai(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0
    }
  }
  var em = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]),
    lm = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

  function eu(t) {
    return lm.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t
  }
  var ji = null;

  function Oi(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t
  }
  var aa = null,
    na = null;

  function vo(t) {
    var e = $l(t);
    if (e && (t = e.stateNode)) {
      var l = t[ne] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (Di(t, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name), e = l.name, l.type === "radio" && e != null) {
            for (l = t; l.parentNode;) l = l.parentNode;
            for (l = l.querySelectorAll('input[name="' + be("" + e) + '"][type="radio"]'), e = 0; e < l.length; e++) {
              var a = l[e];
              if (a !== t && a.form === t.form) {
                var n = a[ne] || null;
                if (!n) throw Error(s(90));
                Di(a, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name)
              }
            }
            for (e = 0; e < l.length; e++) a = l[e], a.form === t.form && oo(a)
          }
          break t;
        case "textarea":
          ro(t, l.value, l.defaultValue);
          break t;
        case "select":
          e = l.value, e != null && ea(t, !!l.multiple, e, !1)
      }
    }
  }
  var Mi = !1;

  function yo(t, e, l) {
    if (Mi) return t(e, l);
    Mi = !0;
    try {
      var a = t(e);
      return a
    } finally {
      if (Mi = !1, (aa !== null || na !== null) && (Xu(), aa && (e = aa, t = na, na = aa = null, vo(e), t)))
        for (e = 0; e < t.length; e++) vo(t[e])
    }
  }

  function Za(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var a = l[ne] || null;
    if (a === null) return null;
    l = a[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (t = t.type, a = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !a;
        break t;
      default:
        t = !1
    }
    if (t) return null;
    if (l && typeof l != "function") throw Error(s(231, e, typeof l));
    return l
  }
  var Xe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Ci = !1;
  if (Xe) try {
    var Va = {};
    Object.defineProperty(Va, "passive", {
      get: function() {
        Ci = !0
      }
    }), window.addEventListener("test", Va, Va), window.removeEventListener("test", Va, Va)
  } catch {
    Ci = !1
  }
  var nl = null,
    Ri = null,
    lu = null;

  function po() {
    if (lu) return lu;
    var t, e = Ri,
      l = e.length,
      a, n = "value" in nl ? nl.value : nl.textContent,
      u = n.length;
    for (t = 0; t < l && e[t] === n[t]; t++);
    var i = l - t;
    for (a = 1; a <= i && e[l - a] === n[u - a]; a++);
    return lu = n.slice(t, 1 < a ? 1 - a : void 0)
  }

  function au(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0
  }

  function nu() {
    return !0
  }

  function So() {
    return !1
  }

  function ue(t) {
    function e(l, a, n, u, i) {
      this._reactName = l, this._targetInst = n, this.type = a, this.nativeEvent = u, this.target = i, this.currentTarget = null;
      for (var o in t) t.hasOwnProperty(o) && (l = t[o], this[o] = l ? l(u) : u[o]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? nu : So, this.isPropagationStopped = So, this
    }
    return D(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = nu)
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = nu)
      },
      persist: function() {},
      isPersistent: nu
    }), e
  }
  var Ml = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(t) {
        return t.timeStamp || Date.now()
      },
      defaultPrevented: 0,
      isTrusted: 0
    },
    uu = ue(Ml),
    Ka = D({}, Ml, {
      view: 0,
      detail: 0
    }),
    am = ue(Ka),
    zi, wi, ka, iu = D({}, Ka, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Hi,
      button: 0,
      buttons: 0,
      relatedTarget: function(t) {
        return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
      },
      movementX: function(t) {
        return "movementX" in t ? t.movementX : (t !== ka && (ka && t.type === "mousemove" ? (zi = t.screenX - ka.screenX, wi = t.screenY - ka.screenY) : wi = zi = 0, ka = t), zi)
      },
      movementY: function(t) {
        return "movementY" in t ? t.movementY : wi
      }
    }),
    bo = ue(iu),
    nm = D({}, iu, {
      dataTransfer: 0
    }),
    um = ue(nm),
    im = D({}, Ka, {
      relatedTarget: 0
    }),
    Ui = ue(im),
    cm = D({}, Ml, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }),
    sm = ue(cm),
    om = D({}, Ml, {
      clipboardData: function(t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData
      }
    }),
    fm = ue(om),
    rm = D({}, Ml, {
      data: 0
    }),
    To = ue(rm),
    dm = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    },
    hm = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    },
    mm = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };

  function gm(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = mm[t]) ? !!e[t] : !1
  }

  function Hi() {
    return gm
  }
  var vm = D({}, Ka, {
      key: function(t) {
        if (t.key) {
          var e = dm[t.key] || t.key;
          if (e !== "Unidentified") return e
        }
        return t.type === "keypress" ? (t = au(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? hm[t.keyCode] || "Unidentified" : ""
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Hi,
      charCode: function(t) {
        return t.type === "keypress" ? au(t) : 0
      },
      keyCode: function(t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
      },
      which: function(t) {
        return t.type === "keypress" ? au(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
      }
    }),
    ym = ue(vm),
    pm = D({}, iu, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }),
    xo = ue(pm),
    Sm = D({}, Ka, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Hi
    }),
    bm = ue(Sm),
    Tm = D({}, Ml, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }),
    xm = ue(Tm),
    Nm = D({}, iu, {
      deltaX: function(t) {
        return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0
      },
      deltaY: function(t) {
        return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0
      },
      deltaZ: 0,
      deltaMode: 0
    }),
    Em = ue(Nm),
    Dm = D({}, Ml, {
      newState: 0,
      oldState: 0
    }),
    _m = ue(Dm),
    Am = [9, 13, 27, 32],
    qi = Xe && "CompositionEvent" in window,
    Ja = null;
  Xe && "documentMode" in document && (Ja = document.documentMode);
  var jm = Xe && "TextEvent" in window && !Ja,
    No = Xe && (!qi || Ja && 8 < Ja && 11 >= Ja),
    Eo = " ",
    Do = !1;

  function _o(t, e) {
    switch (t) {
      case "keyup":
        return Am.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1
    }
  }

  function Ao(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null
  }
  var ua = !1;

  function Om(t, e) {
    switch (t) {
      case "compositionend":
        return Ao(e);
      case "keypress":
        return e.which !== 32 ? null : (Do = !0, Eo);
      case "textInput":
        return t = e.data, t === Eo && Do ? null : t;
      default:
        return null
    }
  }

  function Mm(t, e) {
    if (ua) return t === "compositionend" || !qi && _o(t, e) ? (t = po(), lu = Ri = nl = null, ua = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which)
        }
        return null;
      case "compositionend":
        return No && e.locale !== "ko" ? null : e.data;
      default:
        return null
    }
  }
  var Cm = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };

  function jo(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Cm[t.type] : e === "textarea"
  }

  function Oo(t, e, l, a) {
    aa ? na ? na.push(a) : na = [a] : aa = a, e = Ku(e, "onChange"), 0 < e.length && (l = new uu("onChange", "change", null, l, a), t.push({
      event: l,
      listeners: e
    }))
  }
  var Wa = null,
    Fa = null;

  function Rm(t) {
    fd(t, 0)
  }

  function cu(t) {
    var e = Qa(t);
    if (oo(e)) return t
  }

  function Mo(t, e) {
    if (t === "change") return e
  }
  var Co = !1;
  if (Xe) {
    var Yi;
    if (Xe) {
      var Bi = "oninput" in document;
      if (!Bi) {
        var Ro = document.createElement("div");
        Ro.setAttribute("oninput", "return;"), Bi = typeof Ro.oninput == "function"
      }
      Yi = Bi
    } else Yi = !1;
    Co = Yi && (!document.documentMode || 9 < document.documentMode)
  }

  function zo() {
    Wa && (Wa.detachEvent("onpropertychange", wo), Fa = Wa = null)
  }

  function wo(t) {
    if (t.propertyName === "value" && cu(Fa)) {
      var e = [];
      Oo(e, Fa, t, Oi(t)), yo(Rm, e)
    }
  }

  function zm(t, e, l) {
    t === "focusin" ? (zo(), Wa = e, Fa = l, Wa.attachEvent("onpropertychange", wo)) : t === "focusout" && zo()
  }

  function wm(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown") return cu(Fa)
  }

  function Um(t, e) {
    if (t === "click") return cu(e)
  }

  function Hm(t, e) {
    if (t === "input" || t === "change") return cu(e)
  }

  function qm(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
  }
  var de = typeof Object.is == "function" ? Object.is : qm;

  function $a(t, e) {
    if (de(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null) return !1;
    var l = Object.keys(t),
      a = Object.keys(e);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!mi.call(e, n) || !de(t[n], e[n])) return !1
    }
    return !0
  }

  function Uo(t) {
    for (; t && t.firstChild;) t = t.firstChild;
    return t
  }

  function Ho(t, e) {
    var l = Uo(t);
    t = 0;
    for (var a; l;) {
      if (l.nodeType === 3) {
        if (a = t + l.textContent.length, t <= e && a >= e) return {
          node: l,
          offset: e - t
        };
        t = a
      }
      t: {
        for (; l;) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t
          }
          l = l.parentNode
        }
        l = void 0
      }
      l = Uo(l)
    }
  }

  function qo(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? qo(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1
  }

  function Yo(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = tu(t.document); e instanceof t.HTMLIFrameElement;) {
      try {
        var l = typeof e.contentWindow.location.href == "string"
      } catch {
        l = !1
      }
      if (l) t = e.contentWindow;
      else break;
      e = tu(t.document)
    }
    return e
  }

  function Xi(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true")
  }
  var Ym = Xe && "documentMode" in document && 11 >= document.documentMode,
    ia = null,
    Gi = null,
    Pa = null,
    Li = !1;

  function Bo(t, e, l) {
    var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Li || ia == null || ia !== tu(a) || (a = ia, "selectionStart" in a && Xi(a) ? a = {
      start: a.selectionStart,
      end: a.selectionEnd
    } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Pa && $a(Pa, a) || (Pa = a, a = Ku(Gi, "onSelect"), 0 < a.length && (e = new uu("onSelect", "select", null, e, l), t.push({
      event: e,
      listeners: a
    }), e.target = ia)))
  }

  function Cl(t, e) {
    var l = {};
    return l[t.toLowerCase()] = e.toLowerCase(), l["Webkit" + t] = "webkit" + e, l["Moz" + t] = "moz" + e, l
  }
  var ca = {
      animationend: Cl("Animation", "AnimationEnd"),
      animationiteration: Cl("Animation", "AnimationIteration"),
      animationstart: Cl("Animation", "AnimationStart"),
      transitionrun: Cl("Transition", "TransitionRun"),
      transitionstart: Cl("Transition", "TransitionStart"),
      transitioncancel: Cl("Transition", "TransitionCancel"),
      transitionend: Cl("Transition", "TransitionEnd")
    },
    Qi = {},
    Xo = {};
  Xe && (Xo = document.createElement("div").style, "AnimationEvent" in window || (delete ca.animationend.animation, delete ca.animationiteration.animation, delete ca.animationstart.animation), "TransitionEvent" in window || delete ca.transitionend.transition);

  function Rl(t) {
    if (Qi[t]) return Qi[t];
    if (!ca[t]) return t;
    var e = ca[t],
      l;
    for (l in e)
      if (e.hasOwnProperty(l) && l in Xo) return Qi[t] = e[l];
    return t
  }
  var Go = Rl("animationend"),
    Lo = Rl("animationiteration"),
    Qo = Rl("animationstart"),
    Bm = Rl("transitionrun"),
    Xm = Rl("transitionstart"),
    Gm = Rl("transitioncancel"),
    Zo = Rl("transitionend"),
    Vo = new Map,
    Zi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  Zi.push("scrollEnd");

  function je(t, e) {
    Vo.set(t, e), Ol(e, [t])
  }
  var Ko = new WeakMap;

  function Te(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = Ko.get(t);
      return l !== void 0 ? l : (e = {
        value: t,
        source: e,
        stack: co(e)
      }, Ko.set(t, e), e)
    }
    return {
      value: t,
      source: e,
      stack: co(e)
    }
  }
  var xe = [],
    sa = 0,
    Vi = 0;

  function su() {
    for (var t = sa, e = Vi = sa = 0; e < t;) {
      var l = xe[e];
      xe[e++] = null;
      var a = xe[e];
      xe[e++] = null;
      var n = xe[e];
      xe[e++] = null;
      var u = xe[e];
      if (xe[e++] = null, a !== null && n !== null) {
        var i = a.pending;
        i === null ? n.next = n : (n.next = i.next, i.next = n), a.pending = n
      }
      u !== 0 && ko(l, n, u)
    }
  }

  function ou(t, e, l, a) {
    xe[sa++] = t, xe[sa++] = e, xe[sa++] = l, xe[sa++] = a, Vi |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a)
  }

  function Ki(t, e, l, a) {
    return ou(t, e, l, a), fu(t)
  }

  function oa(t, e) {
    return ou(t, null, null, e), fu(t)
  }

  function ko(t, e, l) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, u = t.return; u !== null;) u.childLanes |= l, a = u.alternate, a !== null && (a.childLanes |= l), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (n = !0)), t = u, u = u.return;
    return t.tag === 3 ? (u = t.stateNode, n && e !== null && (n = 31 - re(l), t = u.hiddenUpdates, a = t[n], a === null ? t[n] = [e] : a.push(e), e.lane = l | 536870912), u) : null
  }

  function fu(t) {
    if (50 < En) throw En = 0, Pc = null, Error(s(185));
    for (var e = t.return; e !== null;) t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null
  }
  var fa = {};

  function Lm(t, e, l, a) {
    this.tag = t, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
  }

  function he(t, e, l, a) {
    return new Lm(t, e, l, a)
  }

  function ki(t) {
    return t = t.prototype, !(!t || !t.isReactComponent)
  }

  function Ge(t, e) {
    var l = t.alternate;
    return l === null ? (l = he(t.tag, e, t.key, t.mode), l.elementType = t.elementType, l.type = t.type, l.stateNode = t.stateNode, l.alternate = t, t.alternate = l) : (l.pendingProps = e, l.type = t.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = t.flags & 65011712, l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue, e = t.dependencies, l.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }, l.sibling = t.sibling, l.index = t.index, l.ref = t.ref, l.refCleanup = t.refCleanup, l
  }

  function Jo(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return l === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, t.type = l.type, e = l.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t
  }

  function ru(t, e, l, a, n, u) {
    var i = 0;
    if (a = t, typeof t == "function") ki(t) && (i = 1);
    else if (typeof t == "string") i = Zg(t, l, k.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else t: switch (t) {
      case $:
        return t = he(31, l, e, n), t.elementType = $, t.lanes = u, t;
      case B:
        return zl(l.children, n, u, e);
      case Z:
        i = 8, n |= 24;
        break;
      case w:
        return t = he(12, l, e, n | 2), t.elementType = w, t.lanes = u, t;
      case G:
        return t = he(13, l, e, n), t.elementType = G, t.lanes = u, t;
      case F:
        return t = he(19, l, e, n), t.elementType = F, t.lanes = u, t;
      default:
        if (typeof t == "object" && t !== null) switch (t.$$typeof) {
          case O:
          case K:
            i = 10;
            break t;
          case q:
            i = 9;
            break t;
          case W:
            i = 11;
            break t;
          case M:
            i = 14;
            break t;
          case L:
            i = 16, a = null;
            break t
        }
        i = 29, l = Error(s(130, t === null ? "null" : typeof t, "")), a = null
    }
    return e = he(i, l, e, n), e.elementType = t, e.type = a, e.lanes = u, e
  }

  function zl(t, e, l, a) {
    return t = he(7, t, a, e), t.lanes = l, t
  }

  function Ji(t, e, l) {
    return t = he(6, t, null, e), t.lanes = l, t
  }

  function Wi(t, e, l) {
    return e = he(4, t.children !== null ? t.children : [], t.key, e), e.lanes = l, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e
  }
  var ra = [],
    da = 0,
    du = null,
    hu = 0,
    Ne = [],
    Ee = 0,
    wl = null,
    Le = 1,
    Qe = "";

  function Ul(t, e) {
    ra[da++] = hu, ra[da++] = du, du = t, hu = e
  }

  function Wo(t, e, l) {
    Ne[Ee++] = Le, Ne[Ee++] = Qe, Ne[Ee++] = wl, wl = t;
    var a = Le;
    t = Qe;
    var n = 32 - re(a) - 1;
    a &= ~(1 << n), l += 1;
    var u = 32 - re(e) + n;
    if (30 < u) {
      var i = n - n % 5;
      u = (a & (1 << i) - 1).toString(32), a >>= i, n -= i, Le = 1 << 32 - re(e) + n | l << n | a, Qe = u + t
    } else Le = 1 << u | l << n | a, Qe = t
  }

  function Fi(t) {
    t.return !== null && (Ul(t, 1), Wo(t, 1, 0))
  }

  function $i(t) {
    for (; t === du;) du = ra[--da], ra[da] = null, hu = ra[--da], ra[da] = null;
    for (; t === wl;) wl = Ne[--Ee], Ne[Ee] = null, Qe = Ne[--Ee], Ne[Ee] = null, Le = Ne[--Ee], Ne[Ee] = null
  }
  var le = null,
    Ut = null,
    xt = !1,
    Hl = null,
    ze = !1,
    Pi = Error(s(519));

  function ql(t) {
    var e = Error(s(418, ""));
    throw en(Te(e, t)), Pi
  }

  function Fo(t) {
    var e = t.stateNode,
      l = t.type,
      a = t.memoizedProps;
    switch (e[It] = t, e[ne] = a, l) {
      case "dialog":
        gt("cancel", e), gt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        gt("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < _n.length; l++) gt(_n[l], e);
        break;
      case "source":
        gt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        gt("error", e), gt("load", e);
        break;
      case "details":
        gt("toggle", e);
        break;
      case "input":
        gt("invalid", e), fo(e, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0), In(e);
        break;
      case "select":
        gt("invalid", e);
        break;
      case "textarea":
        gt("invalid", e), ho(e, a.value, a.defaultValue, a.children), In(e)
    }
    l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || e.textContent === "" + l || a.suppressHydrationWarning === !0 || md(e.textContent, l) ? (a.popover != null && (gt("beforetoggle", e), gt("toggle", e)), a.onScroll != null && gt("scroll", e), a.onScrollEnd != null && gt("scrollend", e), a.onClick != null && (e.onclick = ku), e = !0) : e = !1, e || ql(t)
  }

  function $o(t) {
    for (le = t.return; le;) switch (le.tag) {
      case 5:
      case 13:
        ze = !1;
        return;
      case 27:
      case 3:
        ze = !0;
        return;
      default:
        le = le.return
    }
  }

  function Ia(t) {
    if (t !== le) return !1;
    if (!xt) return $o(t), xt = !0, !1;
    var e = t.tag,
      l;
    if ((l = e !== 3 && e !== 27) && ((l = e === 5) && (l = t.type, l = !(l !== "form" && l !== "button") || ms(t.type, t.memoizedProps)), l = !l), l && Ut && ql(t), $o(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(s(317));
      t: {
        for (t = t.nextSibling, e = 0; t;) {
          if (t.nodeType === 8)
            if (l = t.data, l === "/$") {
              if (e === 0) {
                Ut = Me(t.nextSibling);
                break t
              }
              e--
            } else l !== "$" && l !== "$!" && l !== "$?" || e++;
          t = t.nextSibling
        }
        Ut = null
      }
    } else e === 27 ? (e = Ut, bl(t.type) ? (t = ps, ps = null, Ut = t) : Ut = e) : Ut = le ? Me(t.stateNode.nextSibling) : null;
    return !0
  }

  function tn() {
    Ut = le = null, xt = !1
  }

  function Po() {
    var t = Hl;
    return t !== null && (se === null ? se = t : se.push.apply(se, t), Hl = null), t
  }

  function en(t) {
    Hl === null ? Hl = [t] : Hl.push(t)
  }
  var Ii = V(null),
    Yl = null,
    Ze = null;

  function ul(t, e, l) {
    Y(Ii, e._currentValue), e._currentValue = l
  }

  function Ve(t) {
    t._currentValue = Ii.current, P(Ii)
  }

  function tc(t, e, l) {
    for (; t !== null;) {
      var a = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), t === l) break;
      t = t.return
    }
  }

  function ec(t, e, l, a) {
    var n = t.child;
    for (n !== null && (n.return = t); n !== null;) {
      var u = n.dependencies;
      if (u !== null) {
        var i = n.child;
        u = u.firstContext;
        t: for (; u !== null;) {
          var o = u;
          u = n;
          for (var h = 0; h < e.length; h++)
            if (o.context === e[h]) {
              u.lanes |= l, o = u.alternate, o !== null && (o.lanes |= l), tc(u.return, l, t), a || (i = null);
              break t
            } u = o.next
        }
      } else if (n.tag === 18) {
        if (i = n.return, i === null) throw Error(s(341));
        i.lanes |= l, u = i.alternate, u !== null && (u.lanes |= l), tc(i, l, t), i = null
      } else i = n.child;
      if (i !== null) i.return = n;
      else
        for (i = n; i !== null;) {
          if (i === t) {
            i = null;
            break
          }
          if (n = i.sibling, n !== null) {
            n.return = i.return, i = n;
            break
          }
          i = i.return
        }
      n = i
    }
  }

  function ln(t, e, l, a) {
    t = null;
    for (var n = e, u = !1; n !== null;) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break
      }
      if (n.tag === 10) {
        var i = n.alternate;
        if (i === null) throw Error(s(387));
        if (i = i.memoizedProps, i !== null) {
          var o = n.type;
          de(n.pendingProps.value, i.value) || (t !== null ? t.push(o) : t = [o])
        }
      } else if (n === oe.current) {
        if (i = n.alternate, i === null) throw Error(s(387));
        i.memoizedState.memoizedState !== n.memoizedState.memoizedState && (t !== null ? t.push(Rn) : t = [Rn])
      }
      n = n.return
    }
    t !== null && ec(e, t, l, a), e.flags |= 262144
  }

  function mu(t) {
    for (t = t.firstContext; t !== null;) {
      if (!de(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next
    }
    return !1
  }

  function Bl(t) {
    Yl = t, Ze = null, t = t.dependencies, t !== null && (t.firstContext = null)
  }

  function te(t) {
    return Io(Yl, t)
  }

  function gu(t, e) {
    return Yl === null && Bl(t), Io(t, e)
  }

  function Io(t, e) {
    var l = e._currentValue;
    if (e = {
        context: e,
        memoizedValue: l,
        next: null
      }, Ze === null) {
      if (t === null) throw Error(s(308));
      Ze = e, t.dependencies = {
        lanes: 0,
        firstContext: e
      }, t.flags |= 524288
    } else Ze = Ze.next = e;
    return l
  }
  var Qm = typeof AbortController < "u" ? AbortController : function() {
      var t = [],
        e = this.signal = {
          aborted: !1,
          addEventListener: function(l, a) {
            t.push(a)
          }
        };
      this.abort = function() {
        e.aborted = !0, t.forEach(function(l) {
          return l()
        })
      }
    },
    Zm = c.unstable_scheduleCallback,
    Vm = c.unstable_NormalPriority,
    Lt = {
      $$typeof: K,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0
    };

  function lc() {
    return {
      controller: new Qm,
      data: new Map,
      refCount: 0
    }
  }

  function an(t) {
    t.refCount--, t.refCount === 0 && Zm(Vm, function() {
      t.controller.abort()
    })
  }
  var nn = null,
    ac = 0,
    ha = 0,
    ma = null;

  function Km(t, e) {
    if (nn === null) {
      var l = nn = [];
      ac = 0, ha = us(), ma = {
        status: "pending",
        value: void 0,
        then: function(a) {
          l.push(a)
        }
      }
    }
    return ac++, e.then(tf, tf), e
  }

  function tf() {
    if (--ac === 0 && nn !== null) {
      ma !== null && (ma.status = "fulfilled");
      var t = nn;
      nn = null, ha = 0, ma = null;
      for (var e = 0; e < t.length; e++)(0, t[e])()
    }
  }

  function km(t, e) {
    var l = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function(n) {
          l.push(n)
        }
      };
    return t.then(function() {
      a.status = "fulfilled", a.value = e;
      for (var n = 0; n < l.length; n++)(0, l[n])(e)
    }, function(n) {
      for (a.status = "rejected", a.reason = n, n = 0; n < l.length; n++)(0, l[n])(void 0)
    }), a
  }
  var ef = z.S;
  z.S = function(t, e) {
    typeof e == "object" && e !== null && typeof e.then == "function" && Km(t, e), ef !== null && ef(t, e)
  };
  var Xl = V(null);

  function nc() {
    var t = Xl.current;
    return t !== null ? t : Mt.pooledCache
  }

  function vu(t, e) {
    e === null ? Y(Xl, Xl.current) : Y(Xl, e.pool)
  }

  function lf() {
    var t = nc();
    return t === null ? null : {
      parent: Lt._currentValue,
      pool: t
    }
  }
  var un = Error(s(460)),
    af = Error(s(474)),
    yu = Error(s(542)),
    uc = {
      then: function() {}
    };

  function nf(t) {
    return t = t.status, t === "fulfilled" || t === "rejected"
  }

  function pu() {}

  function uf(t, e, l) {
    switch (l = t[l], l === void 0 ? t.push(e) : l !== e && (e.then(pu, pu), e = l), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, sf(t), t;
      default:
        if (typeof e.status == "string") e.then(pu, pu);
        else {
          if (t = Mt, t !== null && 100 < t.shellSuspendCounter) throw Error(s(482));
          t = e, t.status = "pending", t.then(function(a) {
            if (e.status === "pending") {
              var n = e;
              n.status = "fulfilled", n.value = a
            }
          }, function(a) {
            if (e.status === "pending") {
              var n = e;
              n.status = "rejected", n.reason = a
            }
          })
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, sf(t), t
        }
        throw cn = e, un
    }
  }
  var cn = null;

  function cf() {
    if (cn === null) throw Error(s(459));
    var t = cn;
    return cn = null, t
  }

  function sf(t) {
    if (t === un || t === yu) throw Error(s(483))
  }
  var il = !1;

  function ic(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null,
        lanes: 0,
        hiddenCallbacks: null
      },
      callbacks: null
    }
  }

  function cc(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    })
  }

  function cl(t) {
    return {
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    }
  }

  function sl(t, e, l) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (Nt & 2) !== 0) {
      var n = a.pending;
      return n === null ? e.next = e : (e.next = n.next, n.next = e), a.pending = e, e = fu(t), ko(t, null, l), e
    }
    return ou(t, a, e, l), fu(t)
  }

  function sn(t, e, l) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (l & 4194048) !== 0)) {
      var a = e.lanes;
      a &= t.pendingLanes, l |= a, e.lanes = l, Is(t, l)
    }
  }

  function sc(t, e) {
    var l = t.updateQueue,
      a = t.alternate;
    if (a !== null && (a = a.updateQueue, l === a)) {
      var n = null,
        u = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var i = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null
          };
          u === null ? n = u = i : u = u.next = i, l = l.next
        } while (l !== null);
        u === null ? n = u = e : u = u.next = e
      } else n = u = e;
      l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks
      }, t.updateQueue = l;
      return
    }
    t = l.lastBaseUpdate, t === null ? l.firstBaseUpdate = e : t.next = e, l.lastBaseUpdate = e
  }
  var oc = !1;

  function on() {
    if (oc) {
      var t = ma;
      if (t !== null) throw t
    }
  }

  function fn(t, e, l, a) {
    oc = !1;
    var n = t.updateQueue;
    il = !1;
    var u = n.firstBaseUpdate,
      i = n.lastBaseUpdate,
      o = n.shared.pending;
    if (o !== null) {
      n.shared.pending = null;
      var h = o,
        N = h.next;
      h.next = null, i === null ? u = N : i.next = N, i = h;
      var H = t.alternate;
      H !== null && (H = H.updateQueue, o = H.lastBaseUpdate, o !== i && (o === null ? H.firstBaseUpdate = N : o.next = N, H.lastBaseUpdate = h))
    }
    if (u !== null) {
      var Q = n.baseState;
      i = 0, H = N = h = null, o = u;
      do {
        var _ = o.lane & -536870913,
          A = _ !== o.lane;
        if (A ? (pt & _) === _ : (a & _) === _) {
          _ !== 0 && _ === ha && (oc = !0), H !== null && (H = H.next = {
            lane: 0,
            tag: o.tag,
            payload: o.payload,
            callback: null,
            next: null
          });
          t: {
            var it = t,
              nt = o;_ = e;
            var At = l;
            switch (nt.tag) {
              case 1:
                if (it = nt.payload, typeof it == "function") {
                  Q = it.call(At, Q, _);
                  break t
                }
                Q = it;
                break t;
              case 3:
                it.flags = it.flags & -65537 | 128;
              case 0:
                if (it = nt.payload, _ = typeof it == "function" ? it.call(At, Q, _) : it, _ == null) break t;
                Q = D({}, Q, _);
                break t;
              case 2:
                il = !0
            }
          }
          _ = o.callback, _ !== null && (t.flags |= 64, A && (t.flags |= 8192), A = n.callbacks, A === null ? n.callbacks = [_] : A.push(_))
        } else A = {
          lane: _,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null
        }, H === null ? (N = H = A, h = Q) : H = H.next = A, i |= _;
        if (o = o.next, o === null) {
          if (o = n.shared.pending, o === null) break;
          A = o, o = A.next, A.next = null, n.lastBaseUpdate = A, n.shared.pending = null
        }
      } while (!0);
      H === null && (h = Q), n.baseState = h, n.firstBaseUpdate = N, n.lastBaseUpdate = H, u === null && (n.shared.lanes = 0), vl |= i, t.lanes = i, t.memoizedState = Q
    }
  }

  function of(t, e) {
    if (typeof t != "function") throw Error(s(191, t));
    t.call(e)
  }

  function ff(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++) of(l[t], e)
  }
  var ga = V(null),
    Su = V(0);

  function rf(t, e) {
    t = Pe, Y(Su, t), Y(ga, e), Pe = t | e.baseLanes
  }

  function fc() {
    Y(Su, Pe), Y(ga, ga.current)
  }

  function rc() {
    Pe = Su.current, P(ga), P(Su)
  }
  var ol = 0,
    ft = null,
    Dt = null,
    Xt = null,
    bu = !1,
    va = !1,
    Gl = !1,
    Tu = 0,
    rn = 0,
    ya = null,
    Jm = 0;

  function qt() {
    throw Error(s(321))
  }

  function dc(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!de(t[l], e[l])) return !1;
    return !0
  }

  function hc(t, e, l, a, n, u) {
    return ol = u, ft = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, z.H = t === null || t.memoizedState === null ? Jf : Wf, Gl = !1, u = l(a, n), Gl = !1, va && (u = hf(e, l, a, n)), df(t), u
  }

  function df(t) {
    z.H = Au;
    var e = Dt !== null && Dt.next !== null;
    if (ol = 0, Xt = Dt = ft = null, bu = !1, rn = 0, ya = null, e) throw Error(s(300));
    t === null || Kt || (t = t.dependencies, t !== null && mu(t) && (Kt = !0))
  }

  function hf(t, e, l, a) {
    ft = t;
    var n = 0;
    do {
      if (va && (ya = null), rn = 0, va = !1, 25 <= n) throw Error(s(301));
      if (n += 1, Xt = Dt = null, t.updateQueue != null) {
        var u = t.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0)
      }
      z.H = eg, u = e(l, a)
    } while (va);
    return u
  }

  function Wm() {
    var t = z.H,
      e = t.useState()[0];
    return e = typeof e.then == "function" ? dn(e) : e, t = t.useState()[0], (Dt !== null ? Dt.memoizedState : null) !== t && (ft.flags |= 1024), e
  }

  function mc() {
    var t = Tu !== 0;
    return Tu = 0, t
  }

  function gc(t, e, l) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~l
  }

  function vc(t) {
    if (bu) {
      for (t = t.memoizedState; t !== null;) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next
      }
      bu = !1
    }
    ol = 0, Xt = Dt = ft = null, va = !1, rn = Tu = 0, ya = null
  }

  function ie() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Xt === null ? ft.memoizedState = Xt = t : Xt = Xt.next = t, Xt
  }

  function Gt() {
    if (Dt === null) {
      var t = ft.alternate;
      t = t !== null ? t.memoizedState : null
    } else t = Dt.next;
    var e = Xt === null ? ft.memoizedState : Xt.next;
    if (e !== null) Xt = e, Dt = t;
    else {
      if (t === null) throw ft.alternate === null ? Error(s(467)) : Error(s(310));
      Dt = t, t = {
        memoizedState: Dt.memoizedState,
        baseState: Dt.baseState,
        baseQueue: Dt.baseQueue,
        queue: Dt.queue,
        next: null
      }, Xt === null ? ft.memoizedState = Xt = t : Xt = Xt.next = t
    }
    return Xt
  }

  function yc() {
    return {
      lastEffect: null,
      events: null,
      stores: null,
      memoCache: null
    }
  }

  function dn(t) {
    var e = rn;
    return rn += 1, ya === null && (ya = []), t = uf(ya, t, e), e = ft, (Xt === null ? e.memoizedState : Xt.next) === null && (e = e.alternate, z.H = e === null || e.memoizedState === null ? Jf : Wf), t
  }

  function xu(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return dn(t);
      if (t.$$typeof === K) return te(t)
    }
    throw Error(s(438, String(t)))
  }

  function pc(t) {
    var e = null,
      l = ft.updateQueue;
    if (l !== null && (e = l.memoCache), e == null) {
      var a = ft.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (e = {
        data: a.data.map(function(n) {
          return n.slice()
        }),
        index: 0
      })))
    }
    if (e == null && (e = {
        data: [],
        index: 0
      }), l === null && (l = yc(), ft.updateQueue = l), l.memoCache = e, l = e.data[e.index], l === void 0)
      for (l = e.data[e.index] = Array(t), a = 0; a < t; a++) l[a] = st;
    return e.index++, l
  }

  function Ke(t, e) {
    return typeof e == "function" ? e(t) : e
  }

  function Nu(t) {
    var e = Gt();
    return Sc(e, Dt, t)
  }

  function Sc(t, e, l) {
    var a = t.queue;
    if (a === null) throw Error(s(311));
    a.lastRenderedReducer = l;
    var n = t.baseQueue,
      u = a.pending;
    if (u !== null) {
      if (n !== null) {
        var i = n.next;
        n.next = u.next, u.next = i
      }
      e.baseQueue = n = u, a.pending = null
    }
    if (u = t.baseState, n === null) t.memoizedState = u;
    else {
      e = n.next;
      var o = i = null,
        h = null,
        N = e,
        H = !1;
      do {
        var Q = N.lane & -536870913;
        if (Q !== N.lane ? (pt & Q) === Q : (ol & Q) === Q) {
          var _ = N.revertLane;
          if (_ === 0) h !== null && (h = h.next = {
            lane: 0,
            revertLane: 0,
            action: N.action,
            hasEagerState: N.hasEagerState,
            eagerState: N.eagerState,
            next: null
          }), Q === ha && (H = !0);
          else if ((ol & _) === _) {
            N = N.next, _ === ha && (H = !0);
            continue
          } else Q = {
            lane: 0,
            revertLane: N.revertLane,
            action: N.action,
            hasEagerState: N.hasEagerState,
            eagerState: N.eagerState,
            next: null
          }, h === null ? (o = h = Q, i = u) : h = h.next = Q, ft.lanes |= _, vl |= _;
          Q = N.action, Gl && l(u, Q), u = N.hasEagerState ? N.eagerState : l(u, Q)
        } else _ = {
          lane: Q,
          revertLane: N.revertLane,
          action: N.action,
          hasEagerState: N.hasEagerState,
          eagerState: N.eagerState,
          next: null
        }, h === null ? (o = h = _, i = u) : h = h.next = _, ft.lanes |= Q, vl |= Q;
        N = N.next
      } while (N !== null && N !== e);
      if (h === null ? i = u : h.next = o, !de(u, t.memoizedState) && (Kt = !0, H && (l = ma, l !== null))) throw l;
      t.memoizedState = u, t.baseState = i, t.baseQueue = h, a.lastRenderedState = u
    }
    return n === null && (a.lanes = 0), [t.memoizedState, a.dispatch]
  }

  function bc(t) {
    var e = Gt(),
      l = e.queue;
    if (l === null) throw Error(s(311));
    l.lastRenderedReducer = t;
    var a = l.dispatch,
      n = l.pending,
      u = e.memoizedState;
    if (n !== null) {
      l.pending = null;
      var i = n = n.next;
      do u = t(u, i.action), i = i.next; while (i !== n);
      de(u, e.memoizedState) || (Kt = !0), e.memoizedState = u, e.baseQueue === null && (e.baseState = u), l.lastRenderedState = u
    }
    return [u, a]
  }

  function mf(t, e, l) {
    var a = ft,
      n = Gt(),
      u = xt;
    if (u) {
      if (l === void 0) throw Error(s(407));
      l = l()
    } else l = e();
    var i = !de((Dt || n).memoizedState, l);
    i && (n.memoizedState = l, Kt = !0), n = n.queue;
    var o = yf.bind(null, a, n, t);
    if (hn(2048, 8, o, [t]), n.getSnapshot !== e || i || Xt !== null && Xt.memoizedState.tag & 1) {
      if (a.flags |= 2048, pa(9, Eu(), vf.bind(null, a, n, l, e), null), Mt === null) throw Error(s(349));
      u || (ol & 124) !== 0 || gf(a, e, l)
    }
    return l
  }

  function gf(t, e, l) {
    t.flags |= 16384, t = {
      getSnapshot: e,
      value: l
    }, e = ft.updateQueue, e === null ? (e = yc(), ft.updateQueue = e, e.stores = [t]) : (l = e.stores, l === null ? e.stores = [t] : l.push(t))
  }

  function vf(t, e, l, a) {
    e.value = l, e.getSnapshot = a, pf(e) && Sf(t)
  }

  function yf(t, e, l) {
    return l(function() {
      pf(e) && Sf(t)
    })
  }

  function pf(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !de(t, l)
    } catch {
      return !0
    }
  }

  function Sf(t) {
    var e = oa(t, 2);
    e !== null && pe(e, t, 2)
  }

  function Tc(t) {
    var e = ie();
    if (typeof t == "function") {
      var l = t;
      if (t = l(), Gl) {
        ll(!0);
        try {
          l()
        } finally {
          ll(!1)
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ke,
      lastRenderedState: t
    }, e
  }

  function bf(t, e, l, a) {
    return t.baseState = l, Sc(t, Dt, typeof a == "function" ? a : Ke)
  }

  function Fm(t, e, l, a, n) {
    if (_u(t)) throw Error(s(485));
    if (t = e.action, t !== null) {
      var u = {
        payload: n,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(i) {
          u.listeners.push(i)
        }
      };
      z.T !== null ? l(!0) : u.isTransition = !1, a(u), l = e.pending, l === null ? (u.next = e.pending = u, Tf(e, u)) : (u.next = l.next, e.pending = l.next = u)
    }
  }

  function Tf(t, e) {
    var l = e.action,
      a = e.payload,
      n = t.state;
    if (e.isTransition) {
      var u = z.T,
        i = {};
      z.T = i;
      try {
        var o = l(n, a),
          h = z.S;
        h !== null && h(i, o), xf(t, e, o)
      } catch (N) {
        xc(t, e, N)
      } finally {
        z.T = u
      }
    } else try {
      u = l(n, a), xf(t, e, u)
    } catch (N) {
      xc(t, e, N)
    }
  }

  function xf(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function(a) {
      Nf(t, e, a)
    }, function(a) {
      return xc(t, e, a)
    }) : Nf(t, e, l)
  }

  function Nf(t, e, l) {
    e.status = "fulfilled", e.value = l, Ef(e), t.state = l, e = t.pending, e !== null && (l = e.next, l === e ? t.pending = null : (l = l.next, e.next = l, Tf(t, l)))
  }

  function xc(t, e, l) {
    var a = t.pending;
    if (t.pending = null, a !== null) {
      a = a.next;
      do e.status = "rejected", e.reason = l, Ef(e), e = e.next; while (e !== a)
    }
    t.action = null
  }

  function Ef(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++)(0, t[e])()
  }

  function Df(t, e) {
    return e
  }

  function _f(t, e) {
    if (xt) {
      var l = Mt.formState;
      if (l !== null) {
        t: {
          var a = ft;
          if (xt) {
            if (Ut) {
              e: {
                for (var n = Ut, u = ze; n.nodeType !== 8;) {
                  if (!u) {
                    n = null;
                    break e
                  }
                  if (n = Me(n.nextSibling), n === null) {
                    n = null;
                    break e
                  }
                }
                u = n.data,
                n = u === "F!" || u === "F" ? n : null
              }
              if (n) {
                Ut = Me(n.nextSibling), a = n.data === "F!";
                break t
              }
            }
            ql(a)
          }
          a = !1
        }
        a && (e = l[0])
      }
    }
    return l = ie(), l.memoizedState = l.baseState = e, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Df,
      lastRenderedState: e
    }, l.queue = a, l = Vf.bind(null, ft, a), a.dispatch = l, a = Tc(!1), u = Ac.bind(null, ft, !1, a.queue), a = ie(), n = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, a.queue = n, l = Fm.bind(null, ft, n, u, l), n.dispatch = l, a.memoizedState = t, [e, l, !1]
  }

  function Af(t) {
    var e = Gt();
    return jf(e, Dt, t)
  }

  function jf(t, e, l) {
    if (e = Sc(t, e, Df)[0], t = Nu(Ke)[0], typeof e == "object" && e !== null && typeof e.then == "function") try {
      var a = dn(e)
    } catch (i) {
      throw i === un ? yu : i
    } else a = e;
    e = Gt();
    var n = e.queue,
      u = n.dispatch;
    return l !== e.memoizedState && (ft.flags |= 2048, pa(9, Eu(), $m.bind(null, n, l), null)), [a, u, t]
  }

  function $m(t, e) {
    t.action = e
  }

  function Of(t) {
    var e = Gt(),
      l = Dt;
    if (l !== null) return jf(e, l, t);
    Gt(), e = e.memoizedState, l = Gt();
    var a = l.queue.dispatch;
    return l.memoizedState = t, [e, a, !1]
  }

  function pa(t, e, l, a) {
    return t = {
      tag: t,
      create: l,
      deps: a,
      inst: e,
      next: null
    }, e = ft.updateQueue, e === null && (e = yc(), ft.updateQueue = e), l = e.lastEffect, l === null ? e.lastEffect = t.next = t : (a = l.next, l.next = t, t.next = a, e.lastEffect = t), t
  }

  function Eu() {
    return {
      destroy: void 0,
      resource: void 0
    }
  }

  function Mf() {
    return Gt().memoizedState
  }

  function Du(t, e, l, a) {
    var n = ie();
    a = a === void 0 ? null : a, ft.flags |= t, n.memoizedState = pa(1 | e, Eu(), l, a)
  }

  function hn(t, e, l, a) {
    var n = Gt();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    Dt !== null && a !== null && dc(a, Dt.memoizedState.deps) ? n.memoizedState = pa(e, u, l, a) : (ft.flags |= t, n.memoizedState = pa(1 | e, u, l, a))
  }

  function Cf(t, e) {
    Du(8390656, 8, t, e)
  }

  function Rf(t, e) {
    hn(2048, 8, t, e)
  }

  function zf(t, e) {
    return hn(4, 2, t, e)
  }

  function wf(t, e) {
    return hn(4, 4, t, e)
  }

  function Uf(t, e) {
    if (typeof e == "function") {
      t = t();
      var l = e(t);
      return function() {
        typeof l == "function" ? l() : e(null)
      }
    }
    if (e != null) return t = t(), e.current = t,
      function() {
        e.current = null
      }
  }

  function Hf(t, e, l) {
    l = l != null ? l.concat([t]) : null, hn(4, 4, Uf.bind(null, e, t), l)
  }

  function Nc() {}

  function qf(t, e) {
    var l = Gt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    return e !== null && dc(e, a[1]) ? a[0] : (l.memoizedState = [t, e], t)
  }

  function Yf(t, e) {
    var l = Gt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    if (e !== null && dc(e, a[1])) return a[0];
    if (a = t(), Gl) {
      ll(!0);
      try {
        t()
      } finally {
        ll(!1)
      }
    }
    return l.memoizedState = [a, e], a
  }

  function Ec(t, e, l) {
    return l === void 0 || (ol & 1073741824) !== 0 ? t.memoizedState = e : (t.memoizedState = l, t = Gr(), ft.lanes |= t, vl |= t, l)
  }

  function Bf(t, e, l, a) {
    return de(l, e) ? l : ga.current !== null ? (t = Ec(t, l, a), de(t, e) || (Kt = !0), t) : (ol & 42) === 0 ? (Kt = !0, t.memoizedState = l) : (t = Gr(), ft.lanes |= t, vl |= t, e)
  }

  function Xf(t, e, l, a, n) {
    var u = J.p;
    J.p = u !== 0 && 8 > u ? u : 8;
    var i = z.T,
      o = {};
    z.T = o, Ac(t, !1, e, l);
    try {
      var h = n(),
        N = z.S;
      if (N !== null && N(o, h), h !== null && typeof h == "object" && typeof h.then == "function") {
        var H = km(h, a);
        mn(t, e, H, ye(t))
      } else mn(t, e, a, ye(t))
    } catch (Q) {
      mn(t, e, {
        then: function() {},
        status: "rejected",
        reason: Q
      }, ye())
    } finally {
      J.p = u, z.T = i
    }
  }

  function Pm() {}

  function Dc(t, e, l, a) {
    if (t.tag !== 5) throw Error(s(476));
    var n = Gf(t).queue;
    Xf(t, n, e, lt, l === null ? Pm : function() {
      return Lf(t), l(a)
    })
  }

  function Gf(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: lt,
      baseState: lt,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ke,
        lastRenderedState: lt
      },
      next: null
    };
    var l = {};
    return e.next = {
      memoizedState: l,
      baseState: l,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ke,
        lastRenderedState: l
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e
  }

  function Lf(t) {
    var e = Gf(t).next.queue;
    mn(t, e, {}, ye())
  }

  function _c() {
    return te(Rn)
  }

  function Qf() {
    return Gt().memoizedState
  }

  function Zf() {
    return Gt().memoizedState
  }

  function Im(t) {
    for (var e = t.return; e !== null;) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = ye();
          t = cl(l);
          var a = sl(e, t, l);
          a !== null && (pe(a, e, l), sn(a, e, l)), e = {
            cache: lc()
          }, t.payload = e;
          return
      }
      e = e.return
    }
  }

  function tg(t, e, l) {
    var a = ye();
    l = {
      lane: a,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, _u(t) ? Kf(e, l) : (l = Ki(t, e, l, a), l !== null && (pe(l, t, a), kf(l, e, a)))
  }

  function Vf(t, e, l) {
    var a = ye();
    mn(t, e, l, a)
  }

  function mn(t, e, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (_u(t)) Kf(e, n);
    else {
      var u = t.alternate;
      if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null)) try {
        var i = e.lastRenderedState,
          o = u(i, l);
        if (n.hasEagerState = !0, n.eagerState = o, de(o, i)) return ou(t, e, n, 0), Mt === null && su(), !1
      } catch {} finally {}
      if (l = Ki(t, e, n, a), l !== null) return pe(l, t, a), kf(l, e, a), !0
    }
    return !1
  }

  function Ac(t, e, l, a) {
    if (a = {
        lane: 2,
        revertLane: us(),
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, _u(t)) {
      if (e) throw Error(s(479))
    } else e = Ki(t, l, a, 2), e !== null && pe(e, t, 2)
  }

  function _u(t) {
    var e = t.alternate;
    return t === ft || e !== null && e === ft
  }

  function Kf(t, e) {
    va = bu = !0;
    var l = t.pending;
    l === null ? e.next = e : (e.next = l.next, l.next = e), t.pending = e
  }

  function kf(t, e, l) {
    if ((l & 4194048) !== 0) {
      var a = e.lanes;
      a &= t.pendingLanes, l |= a, e.lanes = l, Is(t, l)
    }
  }
  var Au = {
      readContext: te,
      use: xu,
      useCallback: qt,
      useContext: qt,
      useEffect: qt,
      useImperativeHandle: qt,
      useLayoutEffect: qt,
      useInsertionEffect: qt,
      useMemo: qt,
      useReducer: qt,
      useRef: qt,
      useState: qt,
      useDebugValue: qt,
      useDeferredValue: qt,
      useTransition: qt,
      useSyncExternalStore: qt,
      useId: qt,
      useHostTransitionStatus: qt,
      useFormState: qt,
      useActionState: qt,
      useOptimistic: qt,
      useMemoCache: qt,
      useCacheRefresh: qt
    },
    Jf = {
      readContext: te,
      use: xu,
      useCallback: function(t, e) {
        return ie().memoizedState = [t, e === void 0 ? null : e], t
      },
      useContext: te,
      useEffect: Cf,
      useImperativeHandle: function(t, e, l) {
        l = l != null ? l.concat([t]) : null, Du(4194308, 4, Uf.bind(null, e, t), l)
      },
      useLayoutEffect: function(t, e) {
        return Du(4194308, 4, t, e)
      },
      useInsertionEffect: function(t, e) {
        Du(4, 2, t, e)
      },
      useMemo: function(t, e) {
        var l = ie();
        e = e === void 0 ? null : e;
        var a = t();
        if (Gl) {
          ll(!0);
          try {
            t()
          } finally {
            ll(!1)
          }
        }
        return l.memoizedState = [a, e], a
      },
      useReducer: function(t, e, l) {
        var a = ie();
        if (l !== void 0) {
          var n = l(e);
          if (Gl) {
            ll(!0);
            try {
              l(e)
            } finally {
              ll(!1)
            }
          }
        } else n = e;
        return a.memoizedState = a.baseState = n, t = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: n
        }, a.queue = t, t = t.dispatch = tg.bind(null, ft, t), [a.memoizedState, t]
      },
      useRef: function(t) {
        var e = ie();
        return t = {
          current: t
        }, e.memoizedState = t
      },
      useState: function(t) {
        t = Tc(t);
        var e = t.queue,
          l = Vf.bind(null, ft, e);
        return e.dispatch = l, [t.memoizedState, l]
      },
      useDebugValue: Nc,
      useDeferredValue: function(t, e) {
        var l = ie();
        return Ec(l, t, e)
      },
      useTransition: function() {
        var t = Tc(!1);
        return t = Xf.bind(null, ft, t.queue, !0, !1), ie().memoizedState = t, [!1, t]
      },
      useSyncExternalStore: function(t, e, l) {
        var a = ft,
          n = ie();
        if (xt) {
          if (l === void 0) throw Error(s(407));
          l = l()
        } else {
          if (l = e(), Mt === null) throw Error(s(349));
          (pt & 124) !== 0 || gf(a, e, l)
        }
        n.memoizedState = l;
        var u = {
          value: l,
          getSnapshot: e
        };
        return n.queue = u, Cf(yf.bind(null, a, u, t), [t]), a.flags |= 2048, pa(9, Eu(), vf.bind(null, a, u, l, e), null), l
      },
      useId: function() {
        var t = ie(),
          e = Mt.identifierPrefix;
        if (xt) {
          var l = Qe,
            a = Le;
          l = (a & ~(1 << 32 - re(a) - 1)).toString(32) + l, e = "«" + e + "R" + l, l = Tu++, 0 < l && (e += "H" + l.toString(32)), e += "»"
        } else l = Jm++, e = "«" + e + "r" + l.toString(32) + "»";
        return t.memoizedState = e
      },
      useHostTransitionStatus: _c,
      useFormState: _f,
      useActionState: _f,
      useOptimistic: function(t) {
        var e = ie();
        e.memoizedState = e.baseState = t;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null
        };
        return e.queue = l, e = Ac.bind(null, ft, !0, l), l.dispatch = e, [t, e]
      },
      useMemoCache: pc,
      useCacheRefresh: function() {
        return ie().memoizedState = Im.bind(null, ft)
      }
    },
    Wf = {
      readContext: te,
      use: xu,
      useCallback: qf,
      useContext: te,
      useEffect: Rf,
      useImperativeHandle: Hf,
      useInsertionEffect: zf,
      useLayoutEffect: wf,
      useMemo: Yf,
      useReducer: Nu,
      useRef: Mf,
      useState: function() {
        return Nu(Ke)
      },
      useDebugValue: Nc,
      useDeferredValue: function(t, e) {
        var l = Gt();
        return Bf(l, Dt.memoizedState, t, e)
      },
      useTransition: function() {
        var t = Nu(Ke)[0],
          e = Gt().memoizedState;
        return [typeof t == "boolean" ? t : dn(t), e]
      },
      useSyncExternalStore: mf,
      useId: Qf,
      useHostTransitionStatus: _c,
      useFormState: Af,
      useActionState: Af,
      useOptimistic: function(t, e) {
        var l = Gt();
        return bf(l, Dt, t, e)
      },
      useMemoCache: pc,
      useCacheRefresh: Zf
    },
    eg = {
      readContext: te,
      use: xu,
      useCallback: qf,
      useContext: te,
      useEffect: Rf,
      useImperativeHandle: Hf,
      useInsertionEffect: zf,
      useLayoutEffect: wf,
      useMemo: Yf,
      useReducer: bc,
      useRef: Mf,
      useState: function() {
        return bc(Ke)
      },
      useDebugValue: Nc,
      useDeferredValue: function(t, e) {
        var l = Gt();
        return Dt === null ? Ec(l, t, e) : Bf(l, Dt.memoizedState, t, e)
      },
      useTransition: function() {
        var t = bc(Ke)[0],
          e = Gt().memoizedState;
        return [typeof t == "boolean" ? t : dn(t), e]
      },
      useSyncExternalStore: mf,
      useId: Qf,
      useHostTransitionStatus: _c,
      useFormState: Of,
      useActionState: Of,
      useOptimistic: function(t, e) {
        var l = Gt();
        return Dt !== null ? bf(l, Dt, t, e) : (l.baseState = t, [t, l.queue.dispatch])
      },
      useMemoCache: pc,
      useCacheRefresh: Zf
    },
    Sa = null,
    gn = 0;

  function ju(t) {
    var e = gn;
    return gn += 1, Sa === null && (Sa = []), uf(Sa, t, e)
  }

  function vn(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null
  }

  function Ou(t, e) {
    throw e.$$typeof === C ? Error(s(525)) : (t = Object.prototype.toString.call(e), Error(s(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)))
  }

  function Ff(t) {
    var e = t._init;
    return e(t._payload)
  }

  function $f(t) {
    function e(b, p) {
      if (t) {
        var T = b.deletions;
        T === null ? (b.deletions = [p], b.flags |= 16) : T.push(p)
      }
    }

    function l(b, p) {
      if (!t) return null;
      for (; p !== null;) e(b, p), p = p.sibling;
      return null
    }

    function a(b) {
      for (var p = new Map; b !== null;) b.key !== null ? p.set(b.key, b) : p.set(b.index, b), b = b.sibling;
      return p
    }

    function n(b, p) {
      return b = Ge(b, p), b.index = 0, b.sibling = null, b
    }

    function u(b, p, T) {
      return b.index = T, t ? (T = b.alternate, T !== null ? (T = T.index, T < p ? (b.flags |= 67108866, p) : T) : (b.flags |= 67108866, p)) : (b.flags |= 1048576, p)
    }

    function i(b) {
      return t && b.alternate === null && (b.flags |= 67108866), b
    }

    function o(b, p, T, X) {
      return p === null || p.tag !== 6 ? (p = Ji(T, b.mode, X), p.return = b, p) : (p = n(p, T), p.return = b, p)
    }

    function h(b, p, T, X) {
      var tt = T.type;
      return tt === B ? H(b, p, T.props.children, X, T.key) : p !== null && (p.elementType === tt || typeof tt == "object" && tt !== null && tt.$$typeof === L && Ff(tt) === p.type) ? (p = n(p, T.props), vn(p, T), p.return = b, p) : (p = ru(T.type, T.key, T.props, null, b.mode, X), vn(p, T), p.return = b, p)
    }

    function N(b, p, T, X) {
      return p === null || p.tag !== 4 || p.stateNode.containerInfo !== T.containerInfo || p.stateNode.implementation !== T.implementation ? (p = Wi(T, b.mode, X), p.return = b, p) : (p = n(p, T.children || []), p.return = b, p)
    }

    function H(b, p, T, X, tt) {
      return p === null || p.tag !== 7 ? (p = zl(T, b.mode, X, tt), p.return = b, p) : (p = n(p, T), p.return = b, p)
    }

    function Q(b, p, T) {
      if (typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint") return p = Ji("" + p, b.mode, T), p.return = b, p;
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case E:
            return T = ru(p.type, p.key, p.props, null, b.mode, T), vn(T, p), T.return = b, T;
          case R:
            return p = Wi(p, b.mode, T), p.return = b, p;
          case L:
            var X = p._init;
            return p = X(p._payload), Q(b, p, T)
        }
        if (ht(p) || vt(p)) return p = zl(p, b.mode, T, null), p.return = b, p;
        if (typeof p.then == "function") return Q(b, ju(p), T);
        if (p.$$typeof === K) return Q(b, gu(b, p), T);
        Ou(b, p)
      }
      return null
    }

    function _(b, p, T, X) {
      var tt = p !== null ? p.key : null;
      if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint") return tt !== null ? null : o(b, p, "" + T, X);
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case E:
            return T.key === tt ? h(b, p, T, X) : null;
          case R:
            return T.key === tt ? N(b, p, T, X) : null;
          case L:
            return tt = T._init, T = tt(T._payload), _(b, p, T, X)
        }
        if (ht(T) || vt(T)) return tt !== null ? null : H(b, p, T, X, null);
        if (typeof T.then == "function") return _(b, p, ju(T), X);
        if (T.$$typeof === K) return _(b, p, gu(b, T), X);
        Ou(b, T)
      }
      return null
    }

    function A(b, p, T, X, tt) {
      if (typeof X == "string" && X !== "" || typeof X == "number" || typeof X == "bigint") return b = b.get(T) || null, o(p, b, "" + X, tt);
      if (typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case E:
            return b = b.get(X.key === null ? T : X.key) || null, h(p, b, X, tt);
          case R:
            return b = b.get(X.key === null ? T : X.key) || null, N(p, b, X, tt);
          case L:
            var rt = X._init;
            return X = rt(X._payload), A(b, p, T, X, tt)
        }
        if (ht(X) || vt(X)) return b = b.get(T) || null, H(p, b, X, tt, null);
        if (typeof X.then == "function") return A(b, p, T, ju(X), tt);
        if (X.$$typeof === K) return A(b, p, T, gu(p, X), tt);
        Ou(p, X)
      }
      return null
    }

    function it(b, p, T, X) {
      for (var tt = null, rt = null, et = p, ut = p = 0, Jt = null; et !== null && ut < T.length; ut++) {
        et.index > ut ? (Jt = et, et = null) : Jt = et.sibling;
        var St = _(b, et, T[ut], X);
        if (St === null) {
          et === null && (et = Jt);
          break
        }
        t && et && St.alternate === null && e(b, et), p = u(St, p, ut), rt === null ? tt = St : rt.sibling = St, rt = St, et = Jt
      }
      if (ut === T.length) return l(b, et), xt && Ul(b, ut), tt;
      if (et === null) {
        for (; ut < T.length; ut++) et = Q(b, T[ut], X), et !== null && (p = u(et, p, ut), rt === null ? tt = et : rt.sibling = et, rt = et);
        return xt && Ul(b, ut), tt
      }
      for (et = a(et); ut < T.length; ut++) Jt = A(et, b, ut, T[ut], X), Jt !== null && (t && Jt.alternate !== null && et.delete(Jt.key === null ? ut : Jt.key), p = u(Jt, p, ut), rt === null ? tt = Jt : rt.sibling = Jt, rt = Jt);
      return t && et.forEach(function(Dl) {
        return e(b, Dl)
      }), xt && Ul(b, ut), tt
    }

    function nt(b, p, T, X) {
      if (T == null) throw Error(s(151));
      for (var tt = null, rt = null, et = p, ut = p = 0, Jt = null, St = T.next(); et !== null && !St.done; ut++, St = T.next()) {
        et.index > ut ? (Jt = et, et = null) : Jt = et.sibling;
        var Dl = _(b, et, St.value, X);
        if (Dl === null) {
          et === null && (et = Jt);
          break
        }
        t && et && Dl.alternate === null && e(b, et), p = u(Dl, p, ut), rt === null ? tt = Dl : rt.sibling = Dl, rt = Dl, et = Jt
      }
      if (St.done) return l(b, et), xt && Ul(b, ut), tt;
      if (et === null) {
        for (; !St.done; ut++, St = T.next()) St = Q(b, St.value, X), St !== null && (p = u(St, p, ut), rt === null ? tt = St : rt.sibling = St, rt = St);
        return xt && Ul(b, ut), tt
      }
      for (et = a(et); !St.done; ut++, St = T.next()) St = A(et, b, ut, St.value, X), St !== null && (t && St.alternate !== null && et.delete(St.key === null ? ut : St.key), p = u(St, p, ut), rt === null ? tt = St : rt.sibling = St, rt = St);
      return t && et.forEach(function(lv) {
        return e(b, lv)
      }), xt && Ul(b, ut), tt
    }

    function At(b, p, T, X) {
      if (typeof T == "object" && T !== null && T.type === B && T.key === null && (T = T.props.children), typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case E:
            t: {
              for (var tt = T.key; p !== null;) {
                if (p.key === tt) {
                  if (tt = T.type, tt === B) {
                    if (p.tag === 7) {
                      l(b, p.sibling), X = n(p, T.props.children), X.return = b, b = X;
                      break t
                    }
                  } else if (p.elementType === tt || typeof tt == "object" && tt !== null && tt.$$typeof === L && Ff(tt) === p.type) {
                    l(b, p.sibling), X = n(p, T.props), vn(X, T), X.return = b, b = X;
                    break t
                  }
                  l(b, p);
                  break
                } else e(b, p);
                p = p.sibling
              }
              T.type === B ? (X = zl(T.props.children, b.mode, X, T.key), X.return = b, b = X) : (X = ru(T.type, T.key, T.props, null, b.mode, X), vn(X, T), X.return = b, b = X)
            }
            return i(b);
          case R:
            t: {
              for (tt = T.key; p !== null;) {
                if (p.key === tt)
                  if (p.tag === 4 && p.stateNode.containerInfo === T.containerInfo && p.stateNode.implementation === T.implementation) {
                    l(b, p.sibling), X = n(p, T.children || []), X.return = b, b = X;
                    break t
                  } else {
                    l(b, p);
                    break
                  }
                else e(b, p);
                p = p.sibling
              }
              X = Wi(T, b.mode, X),
              X.return = b,
              b = X
            }
            return i(b);
          case L:
            return tt = T._init, T = tt(T._payload), At(b, p, T, X)
        }
        if (ht(T)) return it(b, p, T, X);
        if (vt(T)) {
          if (tt = vt(T), typeof tt != "function") throw Error(s(150));
          return T = tt.call(T), nt(b, p, T, X)
        }
        if (typeof T.then == "function") return At(b, p, ju(T), X);
        if (T.$$typeof === K) return At(b, p, gu(b, T), X);
        Ou(b, T)
      }
      return typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint" ? (T = "" + T, p !== null && p.tag === 6 ? (l(b, p.sibling), X = n(p, T), X.return = b, b = X) : (l(b, p), X = Ji(T, b.mode, X), X.return = b, b = X), i(b)) : l(b, p)
    }
    return function(b, p, T, X) {
      try {
        gn = 0;
        var tt = At(b, p, T, X);
        return Sa = null, tt
      } catch (et) {
        if (et === un || et === yu) throw et;
        var rt = he(29, et, null, b.mode);
        return rt.lanes = X, rt.return = b, rt
      } finally {}
    }
  }
  var ba = $f(!0),
    Pf = $f(!1),
    De = V(null),
    we = null;

  function fl(t) {
    var e = t.alternate;
    Y(Qt, Qt.current & 1), Y(De, t), we === null && (e === null || ga.current !== null || e.memoizedState !== null) && (we = t)
  }

  function If(t) {
    if (t.tag === 22) {
      if (Y(Qt, Qt.current), Y(De, t), we === null) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (we = t)
      }
    } else rl()
  }

  function rl() {
    Y(Qt, Qt.current), Y(De, De.current)
  }

  function ke(t) {
    P(De), we === t && (we = null), P(Qt)
  }
  var Qt = V(0);

  function Mu(t) {
    for (var e = t; e !== null;) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || ys(l))) return e
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
        if ((e.flags & 128) !== 0) return e
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue
      }
      if (e === t) break;
      for (; e.sibling === null;) {
        if (e.return === null || e.return === t) return null;
        e = e.return
      }
      e.sibling.return = e.return, e = e.sibling
    }
    return null
  }

  function jc(t, e, l, a) {
    e = t.memoizedState, l = l(a, e), l = l == null ? e : D({}, e, l), t.memoizedState = l, t.lanes === 0 && (t.updateQueue.baseState = l)
  }
  var Oc = {
    enqueueSetState: function(t, e, l) {
      t = t._reactInternals;
      var a = ye(),
        n = cl(a);
      n.payload = e, l != null && (n.callback = l), e = sl(t, n, a), e !== null && (pe(e, t, a), sn(e, t, a))
    },
    enqueueReplaceState: function(t, e, l) {
      t = t._reactInternals;
      var a = ye(),
        n = cl(a);
      n.tag = 1, n.payload = e, l != null && (n.callback = l), e = sl(t, n, a), e !== null && (pe(e, t, a), sn(e, t, a))
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var l = ye(),
        a = cl(l);
      a.tag = 2, e != null && (a.callback = e), e = sl(t, a, l), e !== null && (pe(e, t, l), sn(e, t, l))
    }
  };

  function tr(t, e, l, a, n, u, i) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, u, i) : e.prototype && e.prototype.isPureReactComponent ? !$a(l, a) || !$a(n, u) : !0
  }

  function er(t, e, l, a) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(l, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(l, a), e.state !== t && Oc.enqueueReplaceState(e, e.state, null)
  }

  function Ll(t, e) {
    var l = e;
    if ("ref" in e) {
      l = {};
      for (var a in e) a !== "ref" && (l[a] = e[a])
    }
    if (t = t.defaultProps) {
      l === e && (l = D({}, l));
      for (var n in t) l[n] === void 0 && (l[n] = t[n])
    }
    return l
  }
  var Cu = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(e)) return
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return
    }
    console.error(t)
  };

  function lr(t) {
    Cu(t)
  }

  function ar(t) {
    console.error(t)
  }

  function nr(t) {
    Cu(t)
  }

  function Ru(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, {
        componentStack: e.stack
      })
    } catch (a) {
      setTimeout(function() {
        throw a
      })
    }
  }

  function ur(t, e, l) {
    try {
      var a = t.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      })
    } catch (n) {
      setTimeout(function() {
        throw n
      })
    }
  }

  function Mc(t, e, l) {
    return l = cl(l), l.tag = 3, l.payload = {
      element: null
    }, l.callback = function() {
      Ru(t, e)
    }, l
  }

  function ir(t) {
    return t = cl(t), t.tag = 3, t
  }

  function cr(t, e, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      t.payload = function() {
        return n(u)
      }, t.callback = function() {
        ur(e, l, a)
      }
    }
    var i = l.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (t.callback = function() {
      ur(e, l, a), typeof n != "function" && (yl === null ? yl = new Set([this]) : yl.add(this));
      var o = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: o !== null ? o : ""
      })
    })
  }

  function lg(t, e, l, a, n) {
    if (l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (e = l.alternate, e !== null && ln(e, l, n, !0), l = De.current, l !== null) {
        switch (l.tag) {
          case 13:
            return we === null ? ts() : l.alternate === null && Ht === 0 && (Ht = 3), l.flags &= -257, l.flags |= 65536, l.lanes = n, a === uc ? l.flags |= 16384 : (e = l.updateQueue, e === null ? l.updateQueue = new Set([a]) : e.add(a), ls(t, a, n)), !1;
          case 22:
            return l.flags |= 65536, a === uc ? l.flags |= 16384 : (e = l.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: new Set([a])
            }, l.updateQueue = e) : (l = e.retryQueue, l === null ? e.retryQueue = new Set([a]) : l.add(a)), ls(t, a, n)), !1
        }
        throw Error(s(435, l.tag))
      }
      return ls(t, a, n), ts(), !1
    }
    if (xt) return e = De.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = n, a !== Pi && (t = Error(s(422), {
      cause: a
    }), en(Te(t, l)))) : (a !== Pi && (e = Error(s(423), {
      cause: a
    }), en(Te(e, l))), t = t.current.alternate, t.flags |= 65536, n &= -n, t.lanes |= n, a = Te(a, l), n = Mc(t.stateNode, a, n), sc(t, n), Ht !== 4 && (Ht = 2)), !1;
    var u = Error(s(520), {
      cause: a
    });
    if (u = Te(u, l), Nn === null ? Nn = [u] : Nn.push(u), Ht !== 4 && (Ht = 2), e === null) return !0;
    a = Te(a, l), l = e;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, t = n & -n, l.lanes |= t, t = Mc(l.stateNode, a, t), sc(l, t), !1;
        case 1:
          if (e = l.type, u = l.stateNode, (l.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (yl === null || !yl.has(u)))) return l.flags |= 65536, n &= -n, l.lanes |= n, n = ir(n), cr(n, t, l, a), sc(l, n), !1
      }
      l = l.return
    } while (l !== null);
    return !1
  }
  var sr = Error(s(461)),
    Kt = !1;

  function Wt(t, e, l, a) {
    e.child = t === null ? Pf(e, null, l, a) : ba(e, t.child, l, a)
  }

  function or(t, e, l, a, n) {
    l = l.render;
    var u = e.ref;
    if ("ref" in a) {
      var i = {};
      for (var o in a) o !== "ref" && (i[o] = a[o])
    } else i = a;
    return Bl(e), a = hc(t, e, l, i, u, n), o = mc(), t !== null && !Kt ? (gc(t, e, n), Je(t, e, n)) : (xt && o && Fi(e), e.flags |= 1, Wt(t, e, a, n), e.child)
  }

  function fr(t, e, l, a, n) {
    if (t === null) {
      var u = l.type;
      return typeof u == "function" && !ki(u) && u.defaultProps === void 0 && l.compare === null ? (e.tag = 15, e.type = u, rr(t, e, u, a, n)) : (t = ru(l.type, null, a, e, e.mode, n), t.ref = e.ref, t.return = e, e.child = t)
    }
    if (u = t.child, !Yc(t, n)) {
      var i = u.memoizedProps;
      if (l = l.compare, l = l !== null ? l : $a, l(i, a) && t.ref === e.ref) return Je(t, e, n)
    }
    return e.flags |= 1, t = Ge(u, a), t.ref = e.ref, t.return = e, e.child = t
  }

  function rr(t, e, l, a, n) {
    if (t !== null) {
      var u = t.memoizedProps;
      if ($a(u, a) && t.ref === e.ref)
        if (Kt = !1, e.pendingProps = a = u, Yc(t, n))(t.flags & 131072) !== 0 && (Kt = !0);
        else return e.lanes = t.lanes, Je(t, e, n)
    }
    return Cc(t, e, l, a, n)
  }

  function dr(t, e, l) {
    var a = e.pendingProps,
      n = a.children,
      u = t !== null ? t.memoizedState : null;
    if (a.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (a = u !== null ? u.baseLanes | l : l, t !== null) {
          for (n = e.child = t.child, u = 0; n !== null;) u = u | n.lanes | n.childLanes, n = n.sibling;
          e.childLanes = u & ~a
        } else e.childLanes = 0, e.child = null;
        return hr(t, e, a, l)
      }
      if ((l & 536870912) !== 0) e.memoizedState = {
        baseLanes: 0,
        cachePool: null
      }, t !== null && vu(e, u !== null ? u.cachePool : null), u !== null ? rf(e, u) : fc(), If(e);
      else return e.lanes = e.childLanes = 536870912, hr(t, e, u !== null ? u.baseLanes | l : l, l)
    } else u !== null ? (vu(e, u.cachePool), rf(e, u), rl(), e.memoizedState = null) : (t !== null && vu(e, null), fc(), rl());
    return Wt(t, e, n, l), e.child
  }

  function hr(t, e, l, a) {
    var n = nc();
    return n = n === null ? null : {
      parent: Lt._currentValue,
      pool: n
    }, e.memoizedState = {
      baseLanes: l,
      cachePool: n
    }, t !== null && vu(e, null), fc(), If(e), t !== null && ln(t, e, a, !0), null
  }

  function zu(t, e) {
    var l = e.ref;
    if (l === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(s(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816)
    }
  }

  function Cc(t, e, l, a, n) {
    return Bl(e), l = hc(t, e, l, a, void 0, n), a = mc(), t !== null && !Kt ? (gc(t, e, n), Je(t, e, n)) : (xt && a && Fi(e), e.flags |= 1, Wt(t, e, l, n), e.child)
  }

  function mr(t, e, l, a, n, u) {
    return Bl(e), e.updateQueue = null, l = hf(e, a, l, n), df(t), a = mc(), t !== null && !Kt ? (gc(t, e, u), Je(t, e, u)) : (xt && a && Fi(e), e.flags |= 1, Wt(t, e, l, u), e.child)
  }

  function gr(t, e, l, a, n) {
    if (Bl(e), e.stateNode === null) {
      var u = fa,
        i = l.contextType;
      typeof i == "object" && i !== null && (u = te(i)), u = new l(a, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Oc, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = a, u.state = e.memoizedState, u.refs = {}, ic(e), i = l.contextType, u.context = typeof i == "object" && i !== null ? te(i) : fa, u.state = e.memoizedState, i = l.getDerivedStateFromProps, typeof i == "function" && (jc(e, l, i, a), u.state = e.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (i = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), i !== u.state && Oc.enqueueReplaceState(u, u.state, null), fn(e, a, u, n), on(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !0
    } else if (t === null) {
      u = e.stateNode;
      var o = e.memoizedProps,
        h = Ll(l, o);
      u.props = h;
      var N = u.context,
        H = l.contextType;
      i = fa, typeof H == "object" && H !== null && (i = te(H));
      var Q = l.getDerivedStateFromProps;
      H = typeof Q == "function" || typeof u.getSnapshotBeforeUpdate == "function", o = e.pendingProps !== o, H || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (o || N !== i) && er(e, u, a, i), il = !1;
      var _ = e.memoizedState;
      u.state = _, fn(e, a, u, n), on(), N = e.memoizedState, o || _ !== N || il ? (typeof Q == "function" && (jc(e, l, Q, a), N = e.memoizedState), (h = il || tr(e, l, h, a, _, N, i)) ? (H || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = N), u.props = a, u.state = N, u.context = i, a = h) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !1)
    } else {
      u = e.stateNode, cc(t, e), i = e.memoizedProps, H = Ll(l, i), u.props = H, Q = e.pendingProps, _ = u.context, N = l.contextType, h = fa, typeof N == "object" && N !== null && (h = te(N)), o = l.getDerivedStateFromProps, (N = typeof o == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== Q || _ !== h) && er(e, u, a, h), il = !1, _ = e.memoizedState, u.state = _, fn(e, a, u, n), on();
      var A = e.memoizedState;
      i !== Q || _ !== A || il || t !== null && t.dependencies !== null && mu(t.dependencies) ? (typeof o == "function" && (jc(e, l, o, a), A = e.memoizedState), (H = il || tr(e, l, H, a, _, A, h) || t !== null && t.dependencies !== null && mu(t.dependencies)) ? (N || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, A, h), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(a, A, h)), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === t.memoizedProps && _ === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && _ === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = A), u.props = a, u.state = A, u.context = h, a = H) : (typeof u.componentDidUpdate != "function" || i === t.memoizedProps && _ === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && _ === t.memoizedState || (e.flags |= 1024), a = !1)
    }
    return u = a, zu(t, e), a = (e.flags & 128) !== 0, u || a ? (u = e.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : u.render(), e.flags |= 1, t !== null && a ? (e.child = ba(e, t.child, null, n), e.child = ba(e, null, l, n)) : Wt(t, e, l, n), e.memoizedState = u.state, t = e.child) : t = Je(t, e, n), t
  }

  function vr(t, e, l, a) {
    return tn(), e.flags |= 256, Wt(t, e, l, a), e.child
  }
  var Rc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };

  function zc(t) {
    return {
      baseLanes: t,
      cachePool: lf()
    }
  }

  function wc(t, e, l) {
    return t = t !== null ? t.childLanes & ~l : 0, e && (t |= _e), t
  }

  function yr(t, e, l) {
    var a = e.pendingProps,
      n = !1,
      u = (e.flags & 128) !== 0,
      i;
    if ((i = u) || (i = t !== null && t.memoizedState === null ? !1 : (Qt.current & 2) !== 0), i && (n = !0, e.flags &= -129), i = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (xt) {
        if (n ? fl(e) : rl(), xt) {
          var o = Ut,
            h;
          if (h = o) {
            t: {
              for (h = o, o = ze; h.nodeType !== 8;) {
                if (!o) {
                  o = null;
                  break t
                }
                if (h = Me(h.nextSibling), h === null) {
                  o = null;
                  break t
                }
              }
              o = h
            }
            o !== null ? (e.memoizedState = {
              dehydrated: o,
              treeContext: wl !== null ? {
                id: Le,
                overflow: Qe
              } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, h = he(18, null, null, 0), h.stateNode = o, h.return = e, e.child = h, le = e, Ut = null, h = !0) : h = !1
          }
          h || ql(e)
        }
        if (o = e.memoizedState, o !== null && (o = o.dehydrated, o !== null)) return ys(o) ? e.lanes = 32 : e.lanes = 536870912, null;
        ke(e)
      }
      return o = a.children, a = a.fallback, n ? (rl(), n = e.mode, o = wu({
        mode: "hidden",
        children: o
      }, n), a = zl(a, n, l, null), o.return = e, a.return = e, o.sibling = a, e.child = o, n = e.child, n.memoizedState = zc(l), n.childLanes = wc(t, i, l), e.memoizedState = Rc, a) : (fl(e), Uc(e, o))
    }
    if (h = t.memoizedState, h !== null && (o = h.dehydrated, o !== null)) {
      if (u) e.flags & 256 ? (fl(e), e.flags &= -257, e = Hc(t, e, l)) : e.memoizedState !== null ? (rl(), e.child = t.child, e.flags |= 128, e = null) : (rl(), n = a.fallback, o = e.mode, a = wu({
        mode: "visible",
        children: a.children
      }, o), n = zl(n, o, l, null), n.flags |= 2, a.return = e, n.return = e, a.sibling = n, e.child = a, ba(e, t.child, null, l), a = e.child, a.memoizedState = zc(l), a.childLanes = wc(t, i, l), e.memoizedState = Rc, e = n);
      else if (fl(e), ys(o)) {
        if (i = o.nextSibling && o.nextSibling.dataset, i) var N = i.dgst;
        i = N, a = Error(s(419)), a.stack = "", a.digest = i, en({
          value: a,
          source: null,
          stack: null
        }), e = Hc(t, e, l)
      } else if (Kt || ln(t, e, l, !1), i = (l & t.childLanes) !== 0, Kt || i) {
        if (i = Mt, i !== null && (a = l & -l, a = (a & 42) !== 0 ? 1 : pi(a), a = (a & (i.suspendedLanes | l)) !== 0 ? 0 : a, a !== 0 && a !== h.retryLane)) throw h.retryLane = a, oa(t, a), pe(i, t, a), sr;
        o.data === "$?" || ts(), e = Hc(t, e, l)
      } else o.data === "$?" ? (e.flags |= 192, e.child = t.child, e = null) : (t = h.treeContext, Ut = Me(o.nextSibling), le = e, xt = !0, Hl = null, ze = !1, t !== null && (Ne[Ee++] = Le, Ne[Ee++] = Qe, Ne[Ee++] = wl, Le = t.id, Qe = t.overflow, wl = e), e = Uc(e, a.children), e.flags |= 4096);
      return e
    }
    return n ? (rl(), n = a.fallback, o = e.mode, h = t.child, N = h.sibling, a = Ge(h, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = h.subtreeFlags & 65011712, N !== null ? n = Ge(N, n) : (n = zl(n, o, l, null), n.flags |= 2), n.return = e, a.return = e, a.sibling = n, e.child = a, a = n, n = e.child, o = t.child.memoizedState, o === null ? o = zc(l) : (h = o.cachePool, h !== null ? (N = Lt._currentValue, h = h.parent !== N ? {
      parent: N,
      pool: N
    } : h) : h = lf(), o = {
      baseLanes: o.baseLanes | l,
      cachePool: h
    }), n.memoizedState = o, n.childLanes = wc(t, i, l), e.memoizedState = Rc, a) : (fl(e), l = t.child, t = l.sibling, l = Ge(l, {
      mode: "visible",
      children: a.children
    }), l.return = e, l.sibling = null, t !== null && (i = e.deletions, i === null ? (e.deletions = [t], e.flags |= 16) : i.push(t)), e.child = l, e.memoizedState = null, l)
  }

  function Uc(t, e) {
    return e = wu({
      mode: "visible",
      children: e
    }, t.mode), e.return = t, t.child = e
  }

  function wu(t, e) {
    return t = he(22, t, null, e), t.lanes = 0, t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, t
  }

  function Hc(t, e, l) {
    return ba(e, t.child, null, l), t = Uc(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t
  }

  function pr(t, e, l) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), tc(t.return, e, l)
  }

  function qc(t, e, l, a, n) {
    var u = t.memoizedState;
    u === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: l,
      tailMode: n
    } : (u.isBackwards = e, u.rendering = null, u.renderingStartTime = 0, u.last = a, u.tail = l, u.tailMode = n)
  }

  function Sr(t, e, l) {
    var a = e.pendingProps,
      n = a.revealOrder,
      u = a.tail;
    if (Wt(t, e, a.children, l), a = Qt.current, (a & 2) !== 0) a = a & 1 | 2, e.flags |= 128;
    else {
      if (t !== null && (t.flags & 128) !== 0) t: for (t = e.child; t !== null;) {
        if (t.tag === 13) t.memoizedState !== null && pr(t, l, e);
        else if (t.tag === 19) pr(t, l, e);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue
        }
        if (t === e) break t;
        for (; t.sibling === null;) {
          if (t.return === null || t.return === e) break t;
          t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
      }
      a &= 1
    }
    switch (Y(Qt, a), n) {
      case "forwards":
        for (l = e.child, n = null; l !== null;) t = l.alternate, t !== null && Mu(t) === null && (n = l), l = l.sibling;
        l = n, l === null ? (n = e.child, e.child = null) : (n = l.sibling, l.sibling = null), qc(e, !1, n, l, u);
        break;
      case "backwards":
        for (l = null, n = e.child, e.child = null; n !== null;) {
          if (t = n.alternate, t !== null && Mu(t) === null) {
            e.child = n;
            break
          }
          t = n.sibling, n.sibling = l, l = n, n = t
        }
        qc(e, !0, l, null, u);
        break;
      case "together":
        qc(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null
    }
    return e.child
  }

  function Je(t, e, l) {
    if (t !== null && (e.dependencies = t.dependencies), vl |= e.lanes, (l & e.childLanes) === 0)
      if (t !== null) {
        if (ln(t, e, l, !1), (l & e.childLanes) === 0) return null
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(s(153));
    if (e.child !== null) {
      for (t = e.child, l = Ge(t, t.pendingProps), e.child = l, l.return = e; t.sibling !== null;) t = t.sibling, l = l.sibling = Ge(t, t.pendingProps), l.return = e;
      l.sibling = null
    }
    return e.child
  }

  function Yc(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && mu(t)))
  }

  function ag(t, e, l) {
    switch (e.tag) {
      case 3:
        Rt(e, e.stateNode.containerInfo), ul(e, Lt, t.memoizedState.cache), tn();
        break;
      case 27:
      case 5:
        hi(e);
        break;
      case 4:
        Rt(e, e.stateNode.containerInfo);
        break;
      case 10:
        ul(e, e.type, e.memoizedProps.value);
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null) return a.dehydrated !== null ? (fl(e), e.flags |= 128, null) : (l & e.child.childLanes) !== 0 ? yr(t, e, l) : (fl(e), t = Je(t, e, l), t !== null ? t.sibling : null);
        fl(e);
        break;
      case 19:
        var n = (t.flags & 128) !== 0;
        if (a = (l & e.childLanes) !== 0, a || (ln(t, e, l, !1), a = (l & e.childLanes) !== 0), n) {
          if (a) return Sr(t, e, l);
          e.flags |= 128
        }
        if (n = e.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), Y(Qt, Qt.current), a) break;
        return null;
      case 22:
      case 23:
        return e.lanes = 0, dr(t, e, l);
      case 24:
        ul(e, Lt, t.memoizedState.cache)
    }
    return Je(t, e, l)
  }

  function br(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Kt = !0;
      else {
        if (!Yc(t, l) && (e.flags & 128) === 0) return Kt = !1, ag(t, e, l);
        Kt = (t.flags & 131072) !== 0
      }
    else Kt = !1, xt && (e.flags & 1048576) !== 0 && Wo(e, hu, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          t = e.pendingProps;
          var a = e.elementType,
            n = a._init;
          if (a = n(a._payload), e.type = a, typeof a == "function") ki(a) ? (t = Ll(a, t), e.tag = 1, e = gr(null, e, a, t, l)) : (e.tag = 0, e = Cc(null, e, a, t, l));
          else {
            if (a != null) {
              if (n = a.$$typeof, n === W) {
                e.tag = 11, e = or(null, e, a, t, l);
                break t
              } else if (n === M) {
                e.tag = 14, e = fr(null, e, a, t, l);
                break t
              }
            }
            throw e = Tt(a) || a, Error(s(306, e, ""))
          }
        }
        return e;
      case 0:
        return Cc(t, e, e.type, e.pendingProps, l);
      case 1:
        return a = e.type, n = Ll(a, e.pendingProps), gr(t, e, a, n, l);
      case 3:
        t: {
          if (Rt(e, e.stateNode.containerInfo), t === null) throw Error(s(387));a = e.pendingProps;
          var u = e.memoizedState;n = u.element,
          cc(t, e),
          fn(e, a, null, l);
          var i = e.memoizedState;
          if (a = i.cache, ul(e, Lt, a), a !== u.cache && ec(e, [Lt], l, !0), on(), a = i.element, u.isDehydrated)
            if (u = {
                element: a,
                isDehydrated: !1,
                cache: i.cache
              }, e.updateQueue.baseState = u, e.memoizedState = u, e.flags & 256) {
              e = vr(t, e, a, l);
              break t
            } else if (a !== n) {
            n = Te(Error(s(424)), e), en(n), e = vr(t, e, a, l);
            break t
          } else {
            switch (t = e.stateNode.containerInfo, t.nodeType) {
              case 9:
                t = t.body;
                break;
              default:
                t = t.nodeName === "HTML" ? t.ownerDocument.body : t
            }
            for (Ut = Me(t.firstChild), le = e, xt = !0, Hl = null, ze = !0, l = Pf(e, null, a, l), e.child = l; l;) l.flags = l.flags & -3 | 4096, l = l.sibling
          } else {
            if (tn(), a === n) {
              e = Je(t, e, l);
              break t
            }
            Wt(t, e, a, l)
          }
          e = e.child
        }
        return e;
      case 26:
        return zu(t, e), t === null ? (l = Ed(e.type, null, e.pendingProps, null)) ? e.memoizedState = l : xt || (l = e.type, t = e.pendingProps, a = Ju(at.current).createElement(l), a[It] = e, a[ne] = t, $t(a, l, t), Vt(a), e.stateNode = a) : e.memoizedState = Ed(e.type, t.memoizedProps, e.pendingProps, t.memoizedState), null;
      case 27:
        return hi(e), t === null && xt && (a = e.stateNode = Td(e.type, e.pendingProps, at.current), le = e, ze = !0, n = Ut, bl(e.type) ? (ps = n, Ut = Me(a.firstChild)) : Ut = n), Wt(t, e, e.pendingProps.children, l), zu(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && xt && ((n = a = Ut) && (a = Cg(a, e.type, e.pendingProps, ze), a !== null ? (e.stateNode = a, le = e, Ut = Me(a.firstChild), ze = !1, n = !0) : n = !1), n || ql(e)), hi(e), n = e.type, u = e.pendingProps, i = t !== null ? t.memoizedProps : null, a = u.children, ms(n, u) ? a = null : i !== null && ms(n, i) && (e.flags |= 32), e.memoizedState !== null && (n = hc(t, e, Wm, null, null, l), Rn._currentValue = n), zu(t, e), Wt(t, e, a, l), e.child;
      case 6:
        return t === null && xt && ((t = l = Ut) && (l = Rg(l, e.pendingProps, ze), l !== null ? (e.stateNode = l, le = e, Ut = null, t = !0) : t = !1), t || ql(e)), null;
      case 13:
        return yr(t, e, l);
      case 4:
        return Rt(e, e.stateNode.containerInfo), a = e.pendingProps, t === null ? e.child = ba(e, null, a, l) : Wt(t, e, a, l), e.child;
      case 11:
        return or(t, e, e.type, e.pendingProps, l);
      case 7:
        return Wt(t, e, e.pendingProps, l), e.child;
      case 8:
        return Wt(t, e, e.pendingProps.children, l), e.child;
      case 12:
        return Wt(t, e, e.pendingProps.children, l), e.child;
      case 10:
        return a = e.pendingProps, ul(e, e.type, a.value), Wt(t, e, a.children, l), e.child;
      case 9:
        return n = e.type._context, a = e.pendingProps.children, Bl(e), n = te(n), a = a(n), e.flags |= 1, Wt(t, e, a, l), e.child;
      case 14:
        return fr(t, e, e.type, e.pendingProps, l);
      case 15:
        return rr(t, e, e.type, e.pendingProps, l);
      case 19:
        return Sr(t, e, l);
      case 31:
        return a = e.pendingProps, l = e.mode, a = {
          mode: a.mode,
          children: a.children
        }, t === null ? (l = wu(a, l), l.ref = e.ref, e.child = l, l.return = e, e = l) : (l = Ge(t.child, a), l.ref = e.ref, e.child = l, l.return = e, e = l), e;
      case 22:
        return dr(t, e, l);
      case 24:
        return Bl(e), a = te(Lt), t === null ? (n = nc(), n === null && (n = Mt, u = lc(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= l), n = u), e.memoizedState = {
          parent: a,
          cache: n
        }, ic(e), ul(e, Lt, n)) : ((t.lanes & l) !== 0 && (cc(t, e), fn(e, null, null, l), on()), n = t.memoizedState, u = e.memoizedState, n.parent !== a ? (n = {
          parent: a,
          cache: a
        }, e.memoizedState = n, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = n), ul(e, Lt, a)) : (a = u.cache, ul(e, Lt, a), a !== n.cache && ec(e, [Lt], l, !0))), Wt(t, e, e.pendingProps.children, l), e.child;
      case 29:
        throw e.pendingProps
    }
    throw Error(s(156, e.tag))
  }

  function We(t) {
    t.flags |= 4
  }

  function Tr(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0) t.flags &= -16777217;
    else if (t.flags |= 16777216, !Od(e)) {
      if (e = De.current, e !== null && ((pt & 4194048) === pt ? we !== null : (pt & 62914560) !== pt && (pt & 536870912) === 0 || e !== we)) throw cn = uc, af;
      t.flags |= 8192
    }
  }

  function Uu(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? $s() : 536870912, t.lanes |= e, Ea |= e)
  }

  function yn(t, e) {
    if (!xt) switch (t.tailMode) {
      case "hidden":
        e = t.tail;
        for (var l = null; e !== null;) e.alternate !== null && (l = e), e = e.sibling;
        l === null ? t.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = t.tail;
        for (var a = null; l !== null;) l.alternate !== null && (a = l), l = l.sibling;
        a === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null
    }
  }

  function wt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      l = 0,
      a = 0;
    if (e)
      for (var n = t.child; n !== null;) l |= n.lanes | n.childLanes, a |= n.subtreeFlags & 65011712, a |= n.flags & 65011712, n.return = t, n = n.sibling;
    else
      for (n = t.child; n !== null;) l |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = t, n = n.sibling;
    return t.subtreeFlags |= a, t.childLanes = l, e
  }

  function ng(t, e, l) {
    var a = e.pendingProps;
    switch ($i(e), e.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return wt(e), null;
      case 1:
        return wt(e), null;
      case 3:
        return l = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), Ve(Lt), el(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (Ia(e) ? We(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Po())), wt(e), null;
      case 26:
        return l = e.memoizedState, t === null ? (We(e), l !== null ? (wt(e), Tr(e, l)) : (wt(e), e.flags &= -16777217)) : l ? l !== t.memoizedState ? (We(e), wt(e), Tr(e, l)) : (wt(e), e.flags &= -16777217) : (t.memoizedProps !== a && We(e), wt(e), e.flags &= -16777217), null;
      case 27:
        Kn(e), l = at.current;
        var n = e.type;
        if (t !== null && e.stateNode != null) t.memoizedProps !== a && We(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(s(166));
            return wt(e), null
          }
          t = k.current, Ia(e) ? Fo(e) : (t = Td(n, a, l), e.stateNode = t, We(e))
        }
        return wt(e), null;
      case 5:
        if (Kn(e), l = e.type, t !== null && e.stateNode != null) t.memoizedProps !== a && We(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(s(166));
            return wt(e), null
          }
          if (t = k.current, Ia(e)) Fo(e);
          else {
            switch (n = Ju(at.current), t) {
              case 1:
                t = n.createElementNS("http://www.w3.org/2000/svg", l);
                break;
              case 2:
                t = n.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                break;
              default:
                switch (l) {
                  case "svg":
                    t = n.createElementNS("http://www.w3.org/2000/svg", l);
                    break;
                  case "math":
                    t = n.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                    break;
                  case "script":
                    t = n.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild);
                    break;
                  case "select":
                    t = typeof a.is == "string" ? n.createElement("select", {
                      is: a.is
                    }) : n.createElement("select"), a.multiple ? t.multiple = !0 : a.size && (t.size = a.size);
                    break;
                  default:
                    t = typeof a.is == "string" ? n.createElement(l, {
                      is: a.is
                    }) : n.createElement(l)
                }
            }
            t[It] = e, t[ne] = a;
            t: for (n = e.child; n !== null;) {
              if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode);
              else if (n.tag !== 4 && n.tag !== 27 && n.child !== null) {
                n.child.return = n, n = n.child;
                continue
              }
              if (n === e) break t;
              for (; n.sibling === null;) {
                if (n.return === null || n.return === e) break t;
                n = n.return
              }
              n.sibling.return = n.return, n = n.sibling
            }
            e.stateNode = t;
            t: switch ($t(t, l, a), l) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!a.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1
            }
            t && We(e)
          }
        }
        return wt(e), e.flags &= -16777217, null;
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== a && We(e);
        else {
          if (typeof a != "string" && e.stateNode === null) throw Error(s(166));
          if (t = at.current, Ia(e)) {
            if (t = e.stateNode, l = e.memoizedProps, a = null, n = le, n !== null) switch (n.tag) {
              case 27:
              case 5:
                a = n.memoizedProps
            }
            t[It] = e, t = !!(t.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || md(t.nodeValue, l)), t || ql(e)
          } else t = Ju(t).createTextNode(a), t[It] = e, e.stateNode = t
        }
        return wt(e), null;
      case 13:
        if (a = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (n = Ia(e), a !== null && a.dehydrated !== null) {
            if (t === null) {
              if (!n) throw Error(s(318));
              if (n = e.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(s(317));
              n[It] = e
            } else tn(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            wt(e), n = !1
          } else n = Po(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), n = !0;
          if (!n) return e.flags & 256 ? (ke(e), e) : (ke(e), null)
        }
        if (ke(e), (e.flags & 128) !== 0) return e.lanes = l, e;
        if (l = a !== null, t = t !== null && t.memoizedState !== null, l) {
          a = e.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool);
          var u = null;
          a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== n && (a.flags |= 2048)
        }
        return l !== t && l && (e.child.flags |= 8192), Uu(e, e.updateQueue), wt(e), null;
      case 4:
        return el(), t === null && os(e.stateNode.containerInfo), wt(e), null;
      case 10:
        return Ve(e.type), wt(e), null;
      case 19:
        if (P(Qt), n = e.memoizedState, n === null) return wt(e), null;
        if (a = (e.flags & 128) !== 0, u = n.rendering, u === null)
          if (a) yn(n, !1);
          else {
            if (Ht !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null;) {
                if (u = Mu(t), u !== null) {
                  for (e.flags |= 128, yn(n, !1), t = u.updateQueue, e.updateQueue = t, Uu(e, t), e.subtreeFlags = 0, t = l, l = e.child; l !== null;) Jo(l, t), l = l.sibling;
                  return Y(Qt, Qt.current & 1 | 2), e.child
                }
                t = t.sibling
              }
            n.tail !== null && Re() > Yu && (e.flags |= 128, a = !0, yn(n, !1), e.lanes = 4194304)
          }
        else {
          if (!a)
            if (t = Mu(u), t !== null) {
              if (e.flags |= 128, a = !0, t = t.updateQueue, e.updateQueue = t, Uu(e, t), yn(n, !0), n.tail === null && n.tailMode === "hidden" && !u.alternate && !xt) return wt(e), null
            } else 2 * Re() - n.renderingStartTime > Yu && l !== 536870912 && (e.flags |= 128, a = !0, yn(n, !1), e.lanes = 4194304);
          n.isBackwards ? (u.sibling = e.child, e.child = u) : (t = n.last, t !== null ? t.sibling = u : e.child = u, n.last = u)
        }
        return n.tail !== null ? (e = n.tail, n.rendering = e, n.tail = e.sibling, n.renderingStartTime = Re(), e.sibling = null, t = Qt.current, Y(Qt, a ? t & 1 | 2 : t & 1), e) : (wt(e), null);
      case 22:
      case 23:
        return ke(e), rc(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (l & 536870912) !== 0 && (e.flags & 128) === 0 && (wt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : wt(e), l = e.updateQueue, l !== null && Uu(e, l.retryQueue), l = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== l && (e.flags |= 2048), t !== null && P(Xl), null;
      case 24:
        return l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), Ve(Lt), wt(e), null;
      case 25:
        return null;
      case 30:
        return null
    }
    throw Error(s(156, e.tag))
  }

  function ug(t, e) {
    switch ($i(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return Ve(Lt), el(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return Kn(e), null;
      case 13:
        if (ke(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null) throw Error(s(340));
          tn()
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return P(Qt), null;
      case 4:
        return el(), null;
      case 10:
        return Ve(e.type), null;
      case 22:
      case 23:
        return ke(e), rc(), t !== null && P(Xl), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return Ve(Lt), null;
      case 25:
        return null;
      default:
        return null
    }
  }

  function xr(t, e) {
    switch ($i(e), e.tag) {
      case 3:
        Ve(Lt), el();
        break;
      case 26:
      case 27:
      case 5:
        Kn(e);
        break;
      case 4:
        el();
        break;
      case 13:
        ke(e);
        break;
      case 19:
        P(Qt);
        break;
      case 10:
        Ve(e.type);
        break;
      case 22:
      case 23:
        ke(e), rc(), t !== null && P(Xl);
        break;
      case 24:
        Ve(Lt)
    }
  }

  function pn(t, e) {
    try {
      var l = e.updateQueue,
        a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & t) === t) {
            a = void 0;
            var u = l.create,
              i = l.inst;
            a = u(), i.destroy = a
          }
          l = l.next
        } while (l !== n)
      }
    } catch (o) {
      jt(e, e.return, o)
    }
  }

  function dl(t, e, l) {
    try {
      var a = e.updateQueue,
        n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & t) === t) {
            var i = a.inst,
              o = i.destroy;
            if (o !== void 0) {
              i.destroy = void 0, n = e;
              var h = l,
                N = o;
              try {
                N()
              } catch (H) {
                jt(n, h, H)
              }
            }
          }
          a = a.next
        } while (a !== u)
      }
    } catch (H) {
      jt(e, e.return, H)
    }
  }

  function Nr(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        ff(e, l)
      } catch (a) {
        jt(t, t.return, a)
      }
    }
  }

  function Er(t, e, l) {
    l.props = Ll(t.type, t.memoizedProps), l.state = t.memoizedState;
    try {
      l.componentWillUnmount()
    } catch (a) {
      jt(t, e, a)
    }
  }

  function Sn(t, e) {
    try {
      var l = t.ref;
      if (l !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode
        }
        typeof l == "function" ? t.refCleanup = l(a) : l.current = a
      }
    } catch (n) {
      jt(t, e, n)
    }
  }

  function Ue(t, e) {
    var l = t.ref,
      a = t.refCleanup;
    if (l !== null)
      if (typeof a == "function") try {
        a()
      } catch (n) {
        jt(t, e, n)
      } finally {
        t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null)
      } else if (typeof l == "function") try {
        l(null)
      } catch (n) {
        jt(t, e, n)
      } else l.current = null
  }

  function Dr(t) {
    var e = t.type,
      l = t.memoizedProps,
      a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break t;
        case "img":
          l.src ? a.src = l.src : l.srcSet && (a.srcset = l.srcSet)
      }
    }
    catch (n) {
      jt(t, t.return, n)
    }
  }

  function Bc(t, e, l) {
    try {
      var a = t.stateNode;
      _g(a, t.type, l, e), a[ne] = e
    } catch (n) {
      jt(t, t.return, n)
    }
  }

  function _r(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && bl(t.type) || t.tag === 4
  }

  function Xc(t) {
    t: for (;;) {
      for (; t.sibling === null;) {
        if (t.return === null || _r(t.return)) return null;
        t = t.return
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18;) {
        if (t.tag === 27 && bl(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child
      }
      if (!(t.flags & 2)) return t.stateNode
    }
  }

  function Gc(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6) t = t.stateNode, e ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(t, e) : (e = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.appendChild(t), l = l._reactRootContainer, l != null || e.onclick !== null || (e.onclick = ku));
    else if (a !== 4 && (a === 27 && bl(t.type) && (l = t.stateNode, e = null), t = t.child, t !== null))
      for (Gc(t, e, l), t = t.sibling; t !== null;) Gc(t, e, l), t = t.sibling
  }

  function Hu(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6) t = t.stateNode, e ? l.insertBefore(t, e) : l.appendChild(t);
    else if (a !== 4 && (a === 27 && bl(t.type) && (l = t.stateNode), t = t.child, t !== null))
      for (Hu(t, e, l), t = t.sibling; t !== null;) Hu(t, e, l), t = t.sibling
  }

  function Ar(t) {
    var e = t.stateNode,
      l = t.memoizedProps;
    try {
      for (var a = t.type, n = e.attributes; n.length;) e.removeAttributeNode(n[0]);
      $t(e, a, l), e[It] = t, e[ne] = l
    } catch (u) {
      jt(t, t.return, u)
    }
  }
  var Fe = !1,
    Yt = !1,
    Lc = !1,
    jr = typeof WeakSet == "function" ? WeakSet : Set,
    kt = null;

  function ig(t, e) {
    if (t = t.containerInfo, ds = ti, t = Yo(t), Xi(t)) {
      if ("selectionStart" in t) var l = {
        start: t.selectionStart,
        end: t.selectionEnd
      };
      else t: {
        l = (l = t.ownerDocument) && l.defaultView || window;
        var a = l.getSelection && l.getSelection();
        if (a && a.rangeCount !== 0) {
          l = a.anchorNode;
          var n = a.anchorOffset,
            u = a.focusNode;
          a = a.focusOffset;
          try {
            l.nodeType, u.nodeType
          } catch {
            l = null;
            break t
          }
          var i = 0,
            o = -1,
            h = -1,
            N = 0,
            H = 0,
            Q = t,
            _ = null;
          e: for (;;) {
            for (var A; Q !== l || n !== 0 && Q.nodeType !== 3 || (o = i + n), Q !== u || a !== 0 && Q.nodeType !== 3 || (h = i + a), Q.nodeType === 3 && (i += Q.nodeValue.length), (A = Q.firstChild) !== null;) _ = Q, Q = A;
            for (;;) {
              if (Q === t) break e;
              if (_ === l && ++N === n && (o = i), _ === u && ++H === a && (h = i), (A = Q.nextSibling) !== null) break;
              Q = _, _ = Q.parentNode
            }
            Q = A
          }
          l = o === -1 || h === -1 ? null : {
            start: o,
            end: h
          }
        } else l = null
      }
      l = l || {
        start: 0,
        end: 0
      }
    } else l = null;
    for (hs = {
        focusedElem: t,
        selectionRange: l
      }, ti = !1, kt = e; kt !== null;)
      if (e = kt, t = e.child, (e.subtreeFlags & 1024) !== 0 && t !== null) t.return = e, kt = t;
      else
        for (; kt !== null;) {
          switch (e = kt, u = e.alternate, t = e.flags, e.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && u !== null) {
                t = void 0, l = e, n = u.memoizedProps, u = u.memoizedState, a = l.stateNode;
                try {
                  var it = Ll(l.type, n, l.elementType === l.type);
                  t = a.getSnapshotBeforeUpdate(it, u), a.__reactInternalSnapshotBeforeUpdate = t
                } catch (nt) {
                  jt(l, l.return, nt)
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = e.stateNode.containerInfo, l = t.nodeType, l === 9) vs(t);
                else if (l === 1) switch (t.nodeName) {
                  case "HEAD":
                  case "HTML":
                  case "BODY":
                    vs(t);
                    break;
                  default:
                    t.textContent = ""
                }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(s(163))
          }
          if (t = e.sibling, t !== null) {
            t.return = e.return, kt = t;
            break
          }
          kt = e.return
        }
  }

  function Or(t, e, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        hl(t, l), a & 4 && pn(5, l);
        break;
      case 1:
        if (hl(t, l), a & 4)
          if (t = l.stateNode, e === null) try {
            t.componentDidMount()
          } catch (i) {
            jt(l, l.return, i)
          } else {
            var n = Ll(l.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(n, e, t.__reactInternalSnapshotBeforeUpdate)
            } catch (i) {
              jt(l, l.return, i)
            }
          }
        a & 64 && Nr(l), a & 512 && Sn(l, l.return);
        break;
      case 3:
        if (hl(t, l), a & 64 && (t = l.updateQueue, t !== null)) {
          if (e = null, l.child !== null) switch (l.child.tag) {
            case 27:
            case 5:
              e = l.child.stateNode;
              break;
            case 1:
              e = l.child.stateNode
          }
          try {
            ff(t, e)
          } catch (i) {
            jt(l, l.return, i)
          }
        }
        break;
      case 27:
        e === null && a & 4 && Ar(l);
      case 26:
      case 5:
        hl(t, l), e === null && a & 4 && Dr(l), a & 512 && Sn(l, l.return);
        break;
      case 12:
        hl(t, l);
        break;
      case 13:
        hl(t, l), a & 4 && Rr(t, l), a & 64 && (t = l.memoizedState, t !== null && (t = t.dehydrated, t !== null && (l = gg.bind(null, l), zg(t, l))));
        break;
      case 22:
        if (a = l.memoizedState !== null || Fe, !a) {
          e = e !== null && e.memoizedState !== null || Yt, n = Fe;
          var u = Yt;
          Fe = a, (Yt = e) && !u ? ml(t, l, (l.subtreeFlags & 8772) !== 0) : hl(t, l), Fe = n, Yt = u
        }
        break;
      case 30:
        break;
      default:
        hl(t, l)
    }
  }

  function Mr(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, Mr(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Ti(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null
  }
  var zt = null,
    ce = !1;

  function $e(t, e, l) {
    for (l = l.child; l !== null;) Cr(t, e, l), l = l.sibling
  }

  function Cr(t, e, l) {
    if (fe && typeof fe.onCommitFiberUnmount == "function") try {
      fe.onCommitFiberUnmount(Ba, l)
    } catch {}
    switch (l.tag) {
      case 26:
        Yt || Ue(l, e), $e(t, e, l), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        Yt || Ue(l, e);
        var a = zt,
          n = ce;
        bl(l.type) && (zt = l.stateNode, ce = !1), $e(t, e, l), jn(l.stateNode), zt = a, ce = n;
        break;
      case 5:
        Yt || Ue(l, e);
      case 6:
        if (a = zt, n = ce, zt = null, $e(t, e, l), zt = a, ce = n, zt !== null)
          if (ce) try {
            (zt.nodeType === 9 ? zt.body : zt.nodeName === "HTML" ? zt.ownerDocument.body : zt).removeChild(l.stateNode)
          } catch (u) {
            jt(l, e, u)
          } else try {
            zt.removeChild(l.stateNode)
          } catch (u) {
            jt(l, e, u)
          }
        break;
      case 18:
        zt !== null && (ce ? (t = zt, Sd(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, l.stateNode), Hn(t)) : Sd(zt, l.stateNode));
        break;
      case 4:
        a = zt, n = ce, zt = l.stateNode.containerInfo, ce = !0, $e(t, e, l), zt = a, ce = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Yt || dl(2, l, e), Yt || dl(4, l, e), $e(t, e, l);
        break;
      case 1:
        Yt || (Ue(l, e), a = l.stateNode, typeof a.componentWillUnmount == "function" && Er(l, e, a)), $e(t, e, l);
        break;
      case 21:
        $e(t, e, l);
        break;
      case 22:
        Yt = (a = Yt) || l.memoizedState !== null, $e(t, e, l), Yt = a;
        break;
      default:
        $e(t, e, l)
    }
  }

  function Rr(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
      Hn(t)
    } catch (l) {
      jt(e, e.return, l)
    }
  }

  function cg(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new jr), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new jr), e;
      default:
        throw Error(s(435, t.tag))
    }
  }

  function Qc(t, e) {
    var l = cg(t);
    e.forEach(function(a) {
      var n = vg.bind(null, t, a);
      l.has(a) || (l.add(a), a.then(n, n))
    })
  }

  function me(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a],
          u = t,
          i = e,
          o = i;
        t: for (; o !== null;) {
          switch (o.tag) {
            case 27:
              if (bl(o.type)) {
                zt = o.stateNode, ce = !1;
                break t
              }
              break;
            case 5:
              zt = o.stateNode, ce = !1;
              break t;
            case 3:
            case 4:
              zt = o.stateNode.containerInfo, ce = !0;
              break t
          }
          o = o.return
        }
        if (zt === null) throw Error(s(160));
        Cr(u, i, n), zt = null, ce = !1, u = n.alternate, u !== null && (u.return = null), n.return = null
      }
    if (e.subtreeFlags & 13878)
      for (e = e.child; e !== null;) zr(e, t), e = e.sibling
  }
  var Oe = null;

  function zr(t, e) {
    var l = t.alternate,
      a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        me(e, t), ge(t), a & 4 && (dl(3, t, t.return), pn(3, t), dl(5, t, t.return));
        break;
      case 1:
        me(e, t), ge(t), a & 512 && (Yt || l === null || Ue(l, l.return)), a & 64 && Fe && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (l = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
        break;
      case 26:
        var n = Oe;
        if (me(e, t), ge(t), a & 512 && (Yt || l === null || Ue(l, l.return)), a & 4) {
          var u = l !== null ? l.memoizedState : null;
          if (a = t.memoizedState, l === null)
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  a = t.type,
                  l = t.memoizedProps,
                  n = n.ownerDocument || n;e: switch (a) {
                    case "title":
                      u = n.getElementsByTagName("title")[0], (!u || u[La] || u[It] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(a), n.head.insertBefore(u, n.querySelector("head > title"))), $t(u, a, l), u[It] = t, Vt(u), a = u;
                      break t;
                    case "link":
                      var i = Ad("link", "href", n).get(a + (l.href || ""));
                      if (i) {
                        for (var o = 0; o < i.length; o++)
                          if (u = i[o], u.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && u.getAttribute("rel") === (l.rel == null ? null : l.rel) && u.getAttribute("title") === (l.title == null ? null : l.title) && u.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                            i.splice(o, 1);
                            break e
                          }
                      }
                      u = n.createElement(a), $t(u, a, l), n.head.appendChild(u);
                      break;
                    case "meta":
                      if (i = Ad("meta", "content", n).get(a + (l.content || ""))) {
                        for (o = 0; o < i.length; o++)
                          if (u = i[o], u.getAttribute("content") === (l.content == null ? null : "" + l.content) && u.getAttribute("name") === (l.name == null ? null : l.name) && u.getAttribute("property") === (l.property == null ? null : l.property) && u.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && u.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                            i.splice(o, 1);
                            break e
                          }
                      }
                      u = n.createElement(a), $t(u, a, l), n.head.appendChild(u);
                      break;
                    default:
                      throw Error(s(468, a))
                  }
                  u[It] = t,
                  Vt(u),
                  a = u
                }
                t.stateNode = a
              }
          else jd(n, t.type, t.stateNode);
          else t.stateNode = _d(n, a, t.memoizedProps);
          else u !== a ? (u === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : u.count--, a === null ? jd(n, t.type, t.stateNode) : _d(n, a, t.memoizedProps)) : a === null && t.stateNode !== null && Bc(t, t.memoizedProps, l.memoizedProps)
        }
        break;
      case 27:
        me(e, t), ge(t), a & 512 && (Yt || l === null || Ue(l, l.return)), l !== null && a & 4 && Bc(t, t.memoizedProps, l.memoizedProps);
        break;
      case 5:
        if (me(e, t), ge(t), a & 512 && (Yt || l === null || Ue(l, l.return)), t.flags & 32) {
          n = t.stateNode;
          try {
            la(n, "")
          } catch (A) {
            jt(t, t.return, A)
          }
        }
        a & 4 && t.stateNode != null && (n = t.memoizedProps, Bc(t, n, l !== null ? l.memoizedProps : n)), a & 1024 && (Lc = !0);
        break;
      case 6:
        if (me(e, t), ge(t), a & 4) {
          if (t.stateNode === null) throw Error(s(162));
          a = t.memoizedProps, l = t.stateNode;
          try {
            l.nodeValue = a
          } catch (A) {
            jt(t, t.return, A)
          }
        }
        break;
      case 3:
        if ($u = null, n = Oe, Oe = Wu(e.containerInfo), me(e, t), Oe = n, ge(t), a & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Hn(e.containerInfo)
        } catch (A) {
          jt(t, t.return, A)
        }
        Lc && (Lc = !1, wr(t));
        break;
      case 4:
        a = Oe, Oe = Wu(t.stateNode.containerInfo), me(e, t), ge(t), Oe = a;
        break;
      case 12:
        me(e, t), ge(t);
        break;
      case 13:
        me(e, t), ge(t), t.child.flags & 8192 && t.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Wc = Re()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Qc(t, a)));
        break;
      case 22:
        n = t.memoizedState !== null;
        var h = l !== null && l.memoizedState !== null,
          N = Fe,
          H = Yt;
        if (Fe = N || n, Yt = H || h, me(e, t), Yt = H, Fe = N, ge(t), a & 8192) t: for (e = t.stateNode, e._visibility = n ? e._visibility & -2 : e._visibility | 1, n && (l === null || h || Fe || Yt || Ql(t)), l = null, e = t;;) {
          if (e.tag === 5 || e.tag === 26) {
            if (l === null) {
              h = l = e;
              try {
                if (u = h.stateNode, n) i = u.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                else {
                  o = h.stateNode;
                  var Q = h.memoizedProps.style,
                    _ = Q != null && Q.hasOwnProperty("display") ? Q.display : null;
                  o.style.display = _ == null || typeof _ == "boolean" ? "" : ("" + _).trim()
                }
              } catch (A) {
                jt(h, h.return, A)
              }
            }
          } else if (e.tag === 6) {
            if (l === null) {
              h = e;
              try {
                h.stateNode.nodeValue = n ? "" : h.memoizedProps
              } catch (A) {
                jt(h, h.return, A)
              }
            }
          } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
            e.child.return = e, e = e.child;
            continue
          }
          if (e === t) break t;
          for (; e.sibling === null;) {
            if (e.return === null || e.return === t) break t;
            l === e && (l = null), e = e.return
          }
          l === e && (l = null), e.sibling.return = e.return, e = e.sibling
        }
        a & 4 && (a = t.updateQueue, a !== null && (l = a.retryQueue, l !== null && (a.retryQueue = null, Qc(t, l))));
        break;
      case 19:
        me(e, t), ge(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Qc(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        me(e, t), ge(t)
    }
  }

  function ge(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, a = t.return; a !== null;) {
          if (_r(a)) {
            l = a;
            break
          }
          a = a.return
        }
        if (l == null) throw Error(s(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode,
              u = Xc(t);
            Hu(t, u, n);
            break;
          case 5:
            var i = l.stateNode;
            l.flags & 32 && (la(i, ""), l.flags &= -33);
            var o = Xc(t);
            Hu(t, o, i);
            break;
          case 3:
          case 4:
            var h = l.stateNode.containerInfo,
              N = Xc(t);
            Gc(t, N, h);
            break;
          default:
            throw Error(s(161))
        }
      } catch (H) {
        jt(t, t.return, H)
      }
      t.flags &= -3
    }
    e & 4096 && (t.flags &= -4097)
  }

  function wr(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null;) {
        var e = t;
        wr(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling
      }
  }

  function hl(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null;) Or(t, e.alternate, e), e = e.sibling
  }

  function Ql(t) {
    for (t = t.child; t !== null;) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          dl(4, e, e.return), Ql(e);
          break;
        case 1:
          Ue(e, e.return);
          var l = e.stateNode;
          typeof l.componentWillUnmount == "function" && Er(e, e.return, l), Ql(e);
          break;
        case 27:
          jn(e.stateNode);
        case 26:
        case 5:
          Ue(e, e.return), Ql(e);
          break;
        case 22:
          e.memoizedState === null && Ql(e);
          break;
        case 30:
          Ql(e);
          break;
        default:
          Ql(e)
      }
      t = t.sibling
    }
  }

  function ml(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null;) {
      var a = e.alternate,
        n = t,
        u = e,
        i = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          ml(n, u, l), pn(4, u);
          break;
        case 1:
          if (ml(n, u, l), a = u, n = a.stateNode, typeof n.componentDidMount == "function") try {
            n.componentDidMount()
          } catch (N) {
            jt(a, a.return, N)
          }
          if (a = u, n = a.updateQueue, n !== null) {
            var o = a.stateNode;
            try {
              var h = n.shared.hiddenCallbacks;
              if (h !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < h.length; n++) of(h[n], o)
            } catch (N) {
              jt(a, a.return, N)
            }
          }
          l && i & 64 && Nr(u), Sn(u, u.return);
          break;
        case 27:
          Ar(u);
        case 26:
        case 5:
          ml(n, u, l), l && a === null && i & 4 && Dr(u), Sn(u, u.return);
          break;
        case 12:
          ml(n, u, l);
          break;
        case 13:
          ml(n, u, l), l && i & 4 && Rr(n, u);
          break;
        case 22:
          u.memoizedState === null && ml(n, u, l), Sn(u, u.return);
          break;
        case 30:
          break;
        default:
          ml(n, u, l)
      }
      e = e.sibling
    }
  }

  function Zc(t, e) {
    var l = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== l && (t != null && t.refCount++, l != null && an(l))
  }

  function Vc(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && an(t))
  }

  function He(t, e, l, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null;) Ur(t, e, l, a), e = e.sibling
  }

  function Ur(t, e, l, a) {
    var n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        He(t, e, l, a), n & 2048 && pn(9, e);
        break;
      case 1:
        He(t, e, l, a);
        break;
      case 3:
        He(t, e, l, a), n & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && an(t)));
        break;
      case 12:
        if (n & 2048) {
          He(t, e, l, a), t = e.stateNode;
          try {
            var u = e.memoizedProps,
              i = u.id,
              o = u.onPostCommit;
            typeof o == "function" && o(i, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0)
          } catch (h) {
            jt(e, e.return, h)
          }
        } else He(t, e, l, a);
        break;
      case 13:
        He(t, e, l, a);
        break;
      case 23:
        break;
      case 22:
        u = e.stateNode, i = e.alternate, e.memoizedState !== null ? u._visibility & 2 ? He(t, e, l, a) : bn(t, e) : u._visibility & 2 ? He(t, e, l, a) : (u._visibility |= 2, Ta(t, e, l, a, (e.subtreeFlags & 10256) !== 0)), n & 2048 && Zc(i, e);
        break;
      case 24:
        He(t, e, l, a), n & 2048 && Vc(e.alternate, e);
        break;
      default:
        He(t, e, l, a)
    }
  }

  function Ta(t, e, l, a, n) {
    for (n = n && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null;) {
      var u = t,
        i = e,
        o = l,
        h = a,
        N = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Ta(u, i, o, h, n), pn(8, i);
          break;
        case 23:
          break;
        case 22:
          var H = i.stateNode;
          i.memoizedState !== null ? H._visibility & 2 ? Ta(u, i, o, h, n) : bn(u, i) : (H._visibility |= 2, Ta(u, i, o, h, n)), n && N & 2048 && Zc(i.alternate, i);
          break;
        case 24:
          Ta(u, i, o, h, n), n && N & 2048 && Vc(i.alternate, i);
          break;
        default:
          Ta(u, i, o, h, n)
      }
      e = e.sibling
    }
  }

  function bn(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null;) {
        var l = t,
          a = e,
          n = a.flags;
        switch (a.tag) {
          case 22:
            bn(l, a), n & 2048 && Zc(a.alternate, a);
            break;
          case 24:
            bn(l, a), n & 2048 && Vc(a.alternate, a);
            break;
          default:
            bn(l, a)
        }
        e = e.sibling
      }
  }
  var Tn = 8192;

  function xa(t) {
    if (t.subtreeFlags & Tn)
      for (t = t.child; t !== null;) Hr(t), t = t.sibling
  }

  function Hr(t) {
    switch (t.tag) {
      case 26:
        xa(t), t.flags & Tn && t.memoizedState !== null && Kg(Oe, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        xa(t);
        break;
      case 3:
      case 4:
        var e = Oe;
        Oe = Wu(t.stateNode.containerInfo), xa(t), Oe = e;
        break;
      case 22:
        t.memoizedState === null && (e = t.alternate, e !== null && e.memoizedState !== null ? (e = Tn, Tn = 16777216, xa(t), Tn = e) : xa(t));
        break;
      default:
        xa(t)
    }
  }

  function qr(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do e = t.sibling, t.sibling = null, t = e; while (t !== null)
    }
  }

  function xn(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          kt = a, Br(a, t)
        }
      qr(t)
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null;) Yr(t), t = t.sibling
  }

  function Yr(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        xn(t), t.flags & 2048 && dl(9, t, t.return);
        break;
      case 3:
        xn(t);
        break;
      case 12:
        xn(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, qu(t)) : xn(t);
        break;
      default:
        xn(t)
    }
  }

  function qu(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          kt = a, Br(a, t)
        }
      qr(t)
    }
    for (t = t.child; t !== null;) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          dl(8, e, e.return), qu(e);
          break;
        case 22:
          l = e.stateNode, l._visibility & 2 && (l._visibility &= -3, qu(e));
          break;
        default:
          qu(e)
      }
      t = t.sibling
    }
  }

  function Br(t, e) {
    for (; kt !== null;) {
      var l = kt;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          dl(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++
          }
          break;
        case 24:
          an(l.memoizedState.cache)
      }
      if (a = l.child, a !== null) a.return = l, kt = a;
      else t: for (l = t; kt !== null;) {
        a = kt;
        var n = a.sibling,
          u = a.return;
        if (Mr(a), a === l) {
          kt = null;
          break t
        }
        if (n !== null) {
          n.return = u, kt = n;
          break t
        }
        kt = u
      }
    }
  }
  var sg = {
      getCacheForType: function(t) {
        var e = te(Lt),
          l = e.data.get(t);
        return l === void 0 && (l = t(), e.data.set(t, l)), l
      }
    },
    og = typeof WeakMap == "function" ? WeakMap : Map,
    Nt = 0,
    Mt = null,
    mt = null,
    pt = 0,
    Et = 0,
    ve = null,
    gl = !1,
    Na = !1,
    Kc = !1,
    Pe = 0,
    Ht = 0,
    vl = 0,
    Zl = 0,
    kc = 0,
    _e = 0,
    Ea = 0,
    Nn = null,
    se = null,
    Jc = !1,
    Wc = 0,
    Yu = 1 / 0,
    Bu = null,
    yl = null,
    Ft = 0,
    pl = null,
    Da = null,
    _a = 0,
    Fc = 0,
    $c = null,
    Xr = null,
    En = 0,
    Pc = null;

  function ye() {
    if ((Nt & 2) !== 0 && pt !== 0) return pt & -pt;
    if (z.T !== null) {
      var t = ha;
      return t !== 0 ? t : us()
    }
    return to()
  }

  function Gr() {
    _e === 0 && (_e = (pt & 536870912) === 0 || xt ? Fs() : 536870912);
    var t = De.current;
    return t !== null && (t.flags |= 32), _e
  }

  function pe(t, e, l) {
    (t === Mt && (Et === 2 || Et === 9) || t.cancelPendingCommit !== null) && (Aa(t, 0), Sl(t, pt, _e, !1)), Ga(t, l), ((Nt & 2) === 0 || t !== Mt) && (t === Mt && ((Nt & 2) === 0 && (Zl |= l), Ht === 4 && Sl(t, pt, _e, !1)), qe(t))
  }

  function Lr(t, e, l) {
    if ((Nt & 6) !== 0) throw Error(s(327));
    var a = !l && (e & 124) === 0 && (e & t.expiredLanes) === 0 || Xa(t, e),
      n = a ? dg(t, e) : es(t, e, !0),
      u = a;
    do {
      if (n === 0) {
        Na && !a && Sl(t, e, 0, !1);
        break
      } else {
        if (l = t.current.alternate, u && !fg(l)) {
          n = es(t, e, !1), u = !1;
          continue
        }
        if (n === 2) {
          if (u = e, t.errorRecoveryDisabledLanes & u) var i = 0;
          else i = t.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
          if (i !== 0) {
            e = i;
            t: {
              var o = t;n = Nn;
              var h = o.current.memoizedState.isDehydrated;
              if (h && (Aa(o, i).flags |= 256), i = es(o, i, !1), i !== 2) {
                if (Kc && !h) {
                  o.errorRecoveryDisabledLanes |= u, Zl |= u, n = 4;
                  break t
                }
                u = se, se = n, u !== null && (se === null ? se = u : se.push.apply(se, u))
              }
              n = i
            }
            if (u = !1, n !== 2) continue
          }
        }
        if (n === 1) {
          Aa(t, 0), Sl(t, e, 0, !0);
          break
        }
        t: {
          switch (a = t, u = n, u) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              Sl(a, e, _e, !gl);
              break t;
            case 2:
              se = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329))
          }
          if ((e & 62914560) === e && (n = Wc + 300 - Re(), 10 < n)) {
            if (Sl(a, e, _e, !gl), Fn(a, 0, !0) !== 0) break t;
            a.timeoutHandle = yd(Qr.bind(null, a, l, se, Bu, Jc, e, _e, Zl, Ea, gl, u, 2, -0, 0), n);
            break t
          }
          Qr(a, l, se, Bu, Jc, e, _e, Zl, Ea, gl, u, 0, -0, 0)
        }
      }
      break
    } while (!0);
    qe(t)
  }

  function Qr(t, e, l, a, n, u, i, o, h, N, H, Q, _, A) {
    if (t.timeoutHandle = -1, Q = e.subtreeFlags, (Q & 8192 || (Q & 16785408) === 16785408) && (Cn = {
        stylesheets: null,
        count: 0,
        unsuspend: Vg
      }, Hr(e), Q = kg(), Q !== null)) {
      t.cancelPendingCommit = Q(Fr.bind(null, t, e, u, l, a, n, i, o, h, H, 1, _, A)), Sl(t, u, i, !N);
      return
    }
    Fr(t, e, u, l, a, n, i, o, h)
  }

  function fg(t) {
    for (var e = t;;) {
      var l = e.tag;
      if ((l === 0 || l === 11 || l === 15) && e.flags & 16384 && (l = e.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var a = 0; a < l.length; a++) {
          var n = l[a],
            u = n.getSnapshot;
          n = n.value;
          try {
            if (!de(u(), n)) return !1
          } catch {
            return !1
          }
        }
      if (l = e.child, e.subtreeFlags & 16384 && l !== null) l.return = e, e = l;
      else {
        if (e === t) break;
        for (; e.sibling === null;) {
          if (e.return === null || e.return === t) return !0;
          e = e.return
        }
        e.sibling.return = e.return, e = e.sibling
      }
    }
    return !0
  }

  function Sl(t, e, l, a) {
    e &= ~kc, e &= ~Zl, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
    for (var n = e; 0 < n;) {
      var u = 31 - re(n),
        i = 1 << u;
      a[u] = -1, n &= ~i
    }
    l !== 0 && Ps(t, l, e)
  }

  function Xu() {
    return (Nt & 6) === 0 ? (Dn(0), !1) : !0
  }

  function Ic() {
    if (mt !== null) {
      if (Et === 0) var t = mt.return;
      else t = mt, Ze = Yl = null, vc(t), Sa = null, gn = 0, t = mt;
      for (; t !== null;) xr(t.alternate, t), t = t.return;
      mt = null
    }
  }

  function Aa(t, e) {
    var l = t.timeoutHandle;
    l !== -1 && (t.timeoutHandle = -1, jg(l)), l = t.cancelPendingCommit, l !== null && (t.cancelPendingCommit = null, l()), Ic(), Mt = t, mt = l = Ge(t.current, null), pt = e, Et = 0, ve = null, gl = !1, Na = Xa(t, e), Kc = !1, Ea = _e = kc = Zl = vl = Ht = 0, se = Nn = null, Jc = !1, (e & 8) !== 0 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a;) {
        var n = 31 - re(a),
          u = 1 << n;
        e |= t[n], a &= ~u
      }
    return Pe = e, su(), l
  }

  function Zr(t, e) {
    ft = null, z.H = Au, e === un || e === yu ? (e = cf(), Et = 3) : e === af ? (e = cf(), Et = 4) : Et = e === sr ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, ve = e, mt === null && (Ht = 1, Ru(t, Te(e, t.current)))
  }

  function Vr() {
    var t = z.H;
    return z.H = Au, t === null ? Au : t
  }

  function Kr() {
    var t = z.A;
    return z.A = sg, t
  }

  function ts() {
    Ht = 4, gl || (pt & 4194048) !== pt && De.current !== null || (Na = !0), (vl & 134217727) === 0 && (Zl & 134217727) === 0 || Mt === null || Sl(Mt, pt, _e, !1)
  }

  function es(t, e, l) {
    var a = Nt;
    Nt |= 2;
    var n = Vr(),
      u = Kr();
    (Mt !== t || pt !== e) && (Bu = null, Aa(t, e)), e = !1;
    var i = Ht;
    t: do try {
        if (Et !== 0 && mt !== null) {
          var o = mt,
            h = ve;
          switch (Et) {
            case 8:
              Ic(), i = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              De.current === null && (e = !0);
              var N = Et;
              if (Et = 0, ve = null, ja(t, o, h, N), l && Na) {
                i = 0;
                break t
              }
              break;
            default:
              N = Et, Et = 0, ve = null, ja(t, o, h, N)
          }
        }
        rg(), i = Ht;
        break
      } catch (H) {
        Zr(t, H)
      }
      while (!0);
      return e && t.shellSuspendCounter++, Ze = Yl = null, Nt = a, z.H = n, z.A = u, mt === null && (Mt = null, pt = 0, su()), i
  }

  function rg() {
    for (; mt !== null;) kr(mt)
  }

  function dg(t, e) {
    var l = Nt;
    Nt |= 2;
    var a = Vr(),
      n = Kr();
    Mt !== t || pt !== e ? (Bu = null, Yu = Re() + 500, Aa(t, e)) : Na = Xa(t, e);
    t: do try {
        if (Et !== 0 && mt !== null) {
          e = mt;
          var u = ve;
          e: switch (Et) {
            case 1:
              Et = 0, ve = null, ja(t, e, u, 1);
              break;
            case 2:
            case 9:
              if (nf(u)) {
                Et = 0, ve = null, Jr(e);
                break
              }
              e = function() {
                Et !== 2 && Et !== 9 || Mt !== t || (Et = 7), qe(t)
              }, u.then(e, e);
              break t;
            case 3:
              Et = 7;
              break t;
            case 4:
              Et = 5;
              break t;
            case 7:
              nf(u) ? (Et = 0, ve = null, Jr(e)) : (Et = 0, ve = null, ja(t, e, u, 7));
              break;
            case 5:
              var i = null;
              switch (mt.tag) {
                case 26:
                  i = mt.memoizedState;
                case 5:
                case 27:
                  var o = mt;
                  if (!i || Od(i)) {
                    Et = 0, ve = null;
                    var h = o.sibling;
                    if (h !== null) mt = h;
                    else {
                      var N = o.return;
                      N !== null ? (mt = N, Gu(N)) : mt = null
                    }
                    break e
                  }
              }
              Et = 0, ve = null, ja(t, e, u, 5);
              break;
            case 6:
              Et = 0, ve = null, ja(t, e, u, 6);
              break;
            case 8:
              Ic(), Ht = 6;
              break t;
            default:
              throw Error(s(462))
          }
        }
        hg();
        break
      } catch (H) {
        Zr(t, H)
      }
      while (!0);
      return Ze = Yl = null, z.H = a, z.A = n, Nt = l, mt !== null ? 0 : (Mt = null, pt = 0, su(), Ht)
  }

  function hg() {
    for (; mt !== null && !Uh();) kr(mt)
  }

  function kr(t) {
    var e = br(t.alternate, t, Pe);
    t.memoizedProps = t.pendingProps, e === null ? Gu(t) : mt = e
  }

  function Jr(t) {
    var e = t,
      l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = mr(l, e, e.pendingProps, e.type, void 0, pt);
        break;
      case 11:
        e = mr(l, e, e.pendingProps, e.type.render, e.ref, pt);
        break;
      case 5:
        vc(e);
      default:
        xr(l, e), e = mt = Jo(e, Pe), e = br(l, e, Pe)
    }
    t.memoizedProps = t.pendingProps, e === null ? Gu(t) : mt = e
  }

  function ja(t, e, l, a) {
    Ze = Yl = null, vc(e), Sa = null, gn = 0;
    var n = e.return;
    try {
      if (lg(t, n, e, l, pt)) {
        Ht = 1, Ru(t, Te(l, t.current)), mt = null;
        return
      }
    } catch (u) {
      if (n !== null) throw mt = n, u;
      Ht = 1, Ru(t, Te(l, t.current)), mt = null;
      return
    }
    e.flags & 32768 ? (xt || a === 1 ? t = !0 : Na || (pt & 536870912) !== 0 ? t = !1 : (gl = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = De.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Wr(e, t)) : Gu(e)
  }

  function Gu(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Wr(e, gl);
        return
      }
      t = e.return;
      var l = ng(e.alternate, e, Pe);
      if (l !== null) {
        mt = l;
        return
      }
      if (e = e.sibling, e !== null) {
        mt = e;
        return
      }
      mt = e = t
    } while (e !== null);
    Ht === 0 && (Ht = 5)
  }

  function Wr(t, e) {
    do {
      var l = ug(t.alternate, t);
      if (l !== null) {
        l.flags &= 32767, mt = l;
        return
      }
      if (l = t.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !e && (t = t.sibling, t !== null)) {
        mt = t;
        return
      }
      mt = t = l
    } while (t !== null);
    Ht = 6, mt = null
  }

  function Fr(t, e, l, a, n, u, i, o, h) {
    t.cancelPendingCommit = null;
    do Lu(); while (Ft !== 0);
    if ((Nt & 6) !== 0) throw Error(s(327));
    if (e !== null) {
      if (e === t.current) throw Error(s(177));
      if (u = e.lanes | e.childLanes, u |= Vi, Vh(t, l, u, i, o, h), t === Mt && (mt = Mt = null, pt = 0), Da = e, pl = t, _a = l, Fc = u, $c = n, Xr = a, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, yg(kn, function() {
          return ed(), null
        })) : (t.callbackNode = null, t.callbackPriority = 0), a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
        a = z.T, z.T = null, n = J.p, J.p = 2, i = Nt, Nt |= 4;
        try {
          ig(t, e, l)
        } finally {
          Nt = i, J.p = n, z.T = a
        }
      }
      Ft = 1, $r(), Pr(), Ir()
    }
  }

  function $r() {
    if (Ft === 1) {
      Ft = 0;
      var t = pl,
        e = Da,
        l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        l = z.T, z.T = null;
        var a = J.p;
        J.p = 2;
        var n = Nt;
        Nt |= 4;
        try {
          zr(e, t);
          var u = hs,
            i = Yo(t.containerInfo),
            o = u.focusedElem,
            h = u.selectionRange;
          if (i !== o && o && o.ownerDocument && qo(o.ownerDocument.documentElement, o)) {
            if (h !== null && Xi(o)) {
              var N = h.start,
                H = h.end;
              if (H === void 0 && (H = N), "selectionStart" in o) o.selectionStart = N, o.selectionEnd = Math.min(H, o.value.length);
              else {
                var Q = o.ownerDocument || document,
                  _ = Q && Q.defaultView || window;
                if (_.getSelection) {
                  var A = _.getSelection(),
                    it = o.textContent.length,
                    nt = Math.min(h.start, it),
                    At = h.end === void 0 ? nt : Math.min(h.end, it);
                  !A.extend && nt > At && (i = At, At = nt, nt = i);
                  var b = Ho(o, nt),
                    p = Ho(o, At);
                  if (b && p && (A.rangeCount !== 1 || A.anchorNode !== b.node || A.anchorOffset !== b.offset || A.focusNode !== p.node || A.focusOffset !== p.offset)) {
                    var T = Q.createRange();
                    T.setStart(b.node, b.offset), A.removeAllRanges(), nt > At ? (A.addRange(T), A.extend(p.node, p.offset)) : (T.setEnd(p.node, p.offset), A.addRange(T))
                  }
                }
              }
            }
            for (Q = [], A = o; A = A.parentNode;) A.nodeType === 1 && Q.push({
              element: A,
              left: A.scrollLeft,
              top: A.scrollTop
            });
            for (typeof o.focus == "function" && o.focus(), o = 0; o < Q.length; o++) {
              var X = Q[o];
              X.element.scrollLeft = X.left, X.element.scrollTop = X.top
            }
          }
          ti = !!ds, hs = ds = null
        } finally {
          Nt = n, J.p = a, z.T = l
        }
      }
      t.current = e, Ft = 2
    }
  }

  function Pr() {
    if (Ft === 2) {
      Ft = 0;
      var t = pl,
        e = Da,
        l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        l = z.T, z.T = null;
        var a = J.p;
        J.p = 2;
        var n = Nt;
        Nt |= 4;
        try {
          Or(t, e.alternate, e)
        } finally {
          Nt = n, J.p = a, z.T = l
        }
      }
      Ft = 3
    }
  }

  function Ir() {
    if (Ft === 4 || Ft === 3) {
      Ft = 0, Hh();
      var t = pl,
        e = Da,
        l = _a,
        a = Xr;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Ft = 5 : (Ft = 0, Da = pl = null, td(t, t.pendingLanes));
      var n = t.pendingLanes;
      if (n === 0 && (yl = null), Si(l), e = e.stateNode, fe && typeof fe.onCommitFiberRoot == "function") try {
        fe.onCommitFiberRoot(Ba, e, void 0, (e.current.flags & 128) === 128)
      } catch {}
      if (a !== null) {
        e = z.T, n = J.p, J.p = 2, z.T = null;
        try {
          for (var u = t.onRecoverableError, i = 0; i < a.length; i++) {
            var o = a[i];
            u(o.value, {
              componentStack: o.stack
            })
          }
        } finally {
          z.T = e, J.p = n
        }
      }(_a & 3) !== 0 && Lu(), qe(t), n = t.pendingLanes, (l & 4194090) !== 0 && (n & 42) !== 0 ? t === Pc ? En++ : (En = 0, Pc = t) : En = 0, Dn(0)
    }
  }

  function td(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, an(e)))
  }

  function Lu(t) {
    return $r(), Pr(), Ir(), ed()
  }

  function ed() {
    if (Ft !== 5) return !1;
    var t = pl,
      e = Fc;
    Fc = 0;
    var l = Si(_a),
      a = z.T,
      n = J.p;
    try {
      J.p = 32 > l ? 32 : l, z.T = null, l = $c, $c = null;
      var u = pl,
        i = _a;
      if (Ft = 0, Da = pl = null, _a = 0, (Nt & 6) !== 0) throw Error(s(331));
      var o = Nt;
      if (Nt |= 4, Yr(u.current), Ur(u, u.current, i, l), Nt = o, Dn(0, !1), fe && typeof fe.onPostCommitFiberRoot == "function") try {
        fe.onPostCommitFiberRoot(Ba, u)
      } catch {}
      return !0
    } finally {
      J.p = n, z.T = a, td(t, e)
    }
  }

  function ld(t, e, l) {
    e = Te(l, e), e = Mc(t.stateNode, e, 2), t = sl(t, e, 2), t !== null && (Ga(t, 2), qe(t))
  }

  function jt(t, e, l) {
    if (t.tag === 3) ld(t, t, l);
    else
      for (; e !== null;) {
        if (e.tag === 3) {
          ld(e, t, l);
          break
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (yl === null || !yl.has(a))) {
            t = Te(l, t), l = ir(2), a = sl(e, l, 2), a !== null && (cr(l, a, e, t), Ga(a, 2), qe(a));
            break
          }
        }
        e = e.return
      }
  }

  function ls(t, e, l) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new og;
      var n = new Set;
      a.set(e, n)
    } else n = a.get(e), n === void 0 && (n = new Set, a.set(e, n));
    n.has(l) || (Kc = !0, n.add(l), t = mg.bind(null, t, e, l), e.then(t, t))
  }

  function mg(t, e, l) {
    var a = t.pingCache;
    a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & l, t.warmLanes &= ~l, Mt === t && (pt & l) === l && (Ht === 4 || Ht === 3 && (pt & 62914560) === pt && 300 > Re() - Wc ? (Nt & 2) === 0 && Aa(t, 0) : kc |= l, Ea === pt && (Ea = 0)), qe(t)
  }

  function ad(t, e) {
    e === 0 && (e = $s()), t = oa(t, e), t !== null && (Ga(t, e), qe(t))
  }

  function gg(t) {
    var e = t.memoizedState,
      l = 0;
    e !== null && (l = e.retryLane), ad(t, l)
  }

  function vg(t, e) {
    var l = 0;
    switch (t.tag) {
      case 13:
        var a = t.stateNode,
          n = t.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(s(314))
    }
    a !== null && a.delete(e), ad(t, l)
  }

  function yg(t, e) {
    return gi(t, e)
  }
  var Qu = null,
    Oa = null,
    as = !1,
    Zu = !1,
    ns = !1,
    Vl = 0;

  function qe(t) {
    t !== Oa && t.next === null && (Oa === null ? Qu = Oa = t : Oa = Oa.next = t), Zu = !0, as || (as = !0, Sg())
  }

  function Dn(t, e) {
    if (!ns && Zu) {
      ns = !0;
      do
        for (var l = !1, a = Qu; a !== null;) {
          if (t !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var i = a.suspendedLanes,
                o = a.pingedLanes;
              u = (1 << 31 - re(42 | t) + 1) - 1, u &= n & ~(i & ~o), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0
            }
            u !== 0 && (l = !0, cd(a, u))
          } else u = pt, u = Fn(a, a === Mt ? u : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (u & 3) === 0 || Xa(a, u) || (l = !0, cd(a, u));
          a = a.next
        }
      while (l);
      ns = !1
    }
  }

  function pg() {
    nd()
  }

  function nd() {
    Zu = as = !1;
    var t = 0;
    Vl !== 0 && (Ag() && (t = Vl), Vl = 0);
    for (var e = Re(), l = null, a = Qu; a !== null;) {
      var n = a.next,
        u = ud(a, e);
      u === 0 ? (a.next = null, l === null ? Qu = n : l.next = n, n === null && (Oa = l)) : (l = a, (t !== 0 || (u & 3) !== 0) && (Zu = !0)), a = n
    }
    Dn(t)
  }

  function ud(t, e) {
    for (var l = t.suspendedLanes, a = t.pingedLanes, n = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u;) {
      var i = 31 - re(u),
        o = 1 << i,
        h = n[i];
      h === -1 ? ((o & l) === 0 || (o & a) !== 0) && (n[i] = Zh(o, e)) : h <= e && (t.expiredLanes |= o), u &= ~o
    }
    if (e = Mt, l = pt, l = Fn(t, t === e ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a = t.callbackNode, l === 0 || t === e && (Et === 2 || Et === 9) || t.cancelPendingCommit !== null) return a !== null && a !== null && vi(a), t.callbackNode = null, t.callbackPriority = 0;
    if ((l & 3) === 0 || Xa(t, l)) {
      if (e = l & -l, e === t.callbackPriority) return e;
      switch (a !== null && vi(a), Si(l)) {
        case 2:
        case 8:
          l = Js;
          break;
        case 32:
          l = kn;
          break;
        case 268435456:
          l = Ws;
          break;
        default:
          l = kn
      }
      return a = id.bind(null, t), l = gi(l, a), t.callbackPriority = e, t.callbackNode = l, e
    }
    return a !== null && a !== null && vi(a), t.callbackPriority = 2, t.callbackNode = null, 2
  }

  function id(t, e) {
    if (Ft !== 0 && Ft !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
    var l = t.callbackNode;
    if (Lu() && t.callbackNode !== l) return null;
    var a = pt;
    return a = Fn(t, t === Mt ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a === 0 ? null : (Lr(t, a, e), ud(t, Re()), t.callbackNode != null && t.callbackNode === l ? id.bind(null, t) : null)
  }

  function cd(t, e) {
    if (Lu()) return null;
    Lr(t, e, !0)
  }

  function Sg() {
    Og(function() {
      (Nt & 6) !== 0 ? gi(ks, pg) : nd()
    })
  }

  function us() {
    return Vl === 0 && (Vl = Fs()), Vl
  }

  function sd(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : eu("" + t)
  }

  function od(t, e) {
    var l = e.ownerDocument.createElement("input");
    return l.name = e.name, l.value = e.value, t.id && l.setAttribute("form", t.id), e.parentNode.insertBefore(l, e), t = new FormData(t), l.parentNode.removeChild(l), t
  }

  function bg(t, e, l, a, n) {
    if (e === "submit" && l && l.stateNode === n) {
      var u = sd((n[ne] || null).action),
        i = a.submitter;
      i && (e = (e = i[ne] || null) ? sd(e.formAction) : i.getAttribute("formAction"), e !== null && (u = e, i = null));
      var o = new uu("action", "action", null, a, n);
      t.push({
        event: o,
        listeners: [{
          instance: null,
          listener: function() {
            if (a.defaultPrevented) {
              if (Vl !== 0) {
                var h = i ? od(n, i) : new FormData(n);
                Dc(l, {
                  pending: !0,
                  data: h,
                  method: n.method,
                  action: u
                }, null, h)
              }
            } else typeof u == "function" && (o.preventDefault(), h = i ? od(n, i) : new FormData(n), Dc(l, {
              pending: !0,
              data: h,
              method: n.method,
              action: u
            }, u, h))
          },
          currentTarget: n
        }]
      })
    }
  }
  for (var is = 0; is < Zi.length; is++) {
    var cs = Zi[is],
      Tg = cs.toLowerCase(),
      xg = cs[0].toUpperCase() + cs.slice(1);
    je(Tg, "on" + xg)
  }
  je(Go, "onAnimationEnd"), je(Lo, "onAnimationIteration"), je(Qo, "onAnimationStart"), je("dblclick", "onDoubleClick"), je("focusin", "onFocus"), je("focusout", "onBlur"), je(Bm, "onTransitionRun"), je(Xm, "onTransitionStart"), je(Gm, "onTransitionCancel"), je(Zo, "onTransitionEnd"), Il("onMouseEnter", ["mouseout", "mouseover"]), Il("onMouseLeave", ["mouseout", "mouseover"]), Il("onPointerEnter", ["pointerout", "pointerover"]), Il("onPointerLeave", ["pointerout", "pointerover"]), Ol("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ol("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ol("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Ol("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ol("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ol("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var _n = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    Ng = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_n));

  function fd(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var a = t[l],
        n = a.event;
      a = a.listeners;
      t: {
        var u = void 0;
        if (e)
          for (var i = a.length - 1; 0 <= i; i--) {
            var o = a[i],
              h = o.instance,
              N = o.currentTarget;
            if (o = o.listener, h !== u && n.isPropagationStopped()) break t;
            u = o, n.currentTarget = N;
            try {
              u(n)
            } catch (H) {
              Cu(H)
            }
            n.currentTarget = null, u = h
          } else
            for (i = 0; i < a.length; i++) {
              if (o = a[i], h = o.instance, N = o.currentTarget, o = o.listener, h !== u && n.isPropagationStopped()) break t;
              u = o, n.currentTarget = N;
              try {
                u(n)
              } catch (H) {
                Cu(H)
              }
              n.currentTarget = null, u = h
            }
      }
    }
  }

  function gt(t, e) {
    var l = e[bi];
    l === void 0 && (l = e[bi] = new Set);
    var a = t + "__bubble";
    l.has(a) || (rd(e, t, 2, !1), l.add(a))
  }

  function ss(t, e, l) {
    var a = 0;
    e && (a |= 4), rd(l, t, a, e)
  }
  var Vu = "_reactListening" + Math.random().toString(36).slice(2);

  function os(t) {
    if (!t[Vu]) {
      t[Vu] = !0, lo.forEach(function(l) {
        l !== "selectionchange" && (Ng.has(l) || ss(l, !1, t), ss(l, !0, t))
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Vu] || (e[Vu] = !0, ss("selectionchange", !1, e))
    }
  }

  function rd(t, e, l, a) {
    switch (Ud(e)) {
      case 2:
        var n = Fg;
        break;
      case 8:
        n = $g;
        break;
      default:
        n = Ns
    }
    l = n.bind(null, e, l, t), n = void 0, !Ci || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (n = !0), a ? n !== void 0 ? t.addEventListener(e, l, {
      capture: !0,
      passive: n
    }) : t.addEventListener(e, l, !0) : n !== void 0 ? t.addEventListener(e, l, {
      passive: n
    }) : t.addEventListener(e, l, !1)
  }

  function fs(t, e, l, a, n) {
    var u = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null) t: for (;;) {
      if (a === null) return;
      var i = a.tag;
      if (i === 3 || i === 4) {
        var o = a.stateNode.containerInfo;
        if (o === n) break;
        if (i === 4)
          for (i = a.return; i !== null;) {
            var h = i.tag;
            if ((h === 3 || h === 4) && i.stateNode.containerInfo === n) return;
            i = i.return
          }
        for (; o !== null;) {
          if (i = Fl(o), i === null) return;
          if (h = i.tag, h === 5 || h === 6 || h === 26 || h === 27) {
            a = u = i;
            continue t
          }
          o = o.parentNode
        }
      }
      a = a.return
    }
    yo(function() {
      var N = u,
        H = Oi(l),
        Q = [];
      t: {
        var _ = Vo.get(t);
        if (_ !== void 0) {
          var A = uu,
            it = t;
          switch (t) {
            case "keypress":
              if (au(l) === 0) break t;
            case "keydown":
            case "keyup":
              A = ym;
              break;
            case "focusin":
              it = "focus", A = Ui;
              break;
            case "focusout":
              it = "blur", A = Ui;
              break;
            case "beforeblur":
            case "afterblur":
              A = Ui;
              break;
            case "click":
              if (l.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              A = bo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              A = um;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              A = bm;
              break;
            case Go:
            case Lo:
            case Qo:
              A = sm;
              break;
            case Zo:
              A = xm;
              break;
            case "scroll":
            case "scrollend":
              A = am;
              break;
            case "wheel":
              A = Em;
              break;
            case "copy":
            case "cut":
            case "paste":
              A = fm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              A = xo;
              break;
            case "toggle":
            case "beforetoggle":
              A = _m
          }
          var nt = (e & 4) !== 0,
            At = !nt && (t === "scroll" || t === "scrollend"),
            b = nt ? _ !== null ? _ + "Capture" : null : _;
          nt = [];
          for (var p = N, T; p !== null;) {
            var X = p;
            if (T = X.stateNode, X = X.tag, X !== 5 && X !== 26 && X !== 27 || T === null || b === null || (X = Za(p, b), X != null && nt.push(An(p, X, T))), At) break;
            p = p.return
          }
          0 < nt.length && (_ = new A(_, it, null, l, H), Q.push({
            event: _,
            listeners: nt
          }))
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (_ = t === "mouseover" || t === "pointerover", A = t === "mouseout" || t === "pointerout", _ && l !== ji && (it = l.relatedTarget || l.fromElement) && (Fl(it) || it[Wl])) break t;
          if ((A || _) && (_ = H.window === H ? H : (_ = H.ownerDocument) ? _.defaultView || _.parentWindow : window, A ? (it = l.relatedTarget || l.toElement, A = N, it = it ? Fl(it) : null, it !== null && (At = v(it), nt = it.tag, it !== At || nt !== 5 && nt !== 27 && nt !== 6) && (it = null)) : (A = null, it = N), A !== it)) {
            if (nt = bo, X = "onMouseLeave", b = "onMouseEnter", p = "mouse", (t === "pointerout" || t === "pointerover") && (nt = xo, X = "onPointerLeave", b = "onPointerEnter", p = "pointer"), At = A == null ? _ : Qa(A), T = it == null ? _ : Qa(it), _ = new nt(X, p + "leave", A, l, H), _.target = At, _.relatedTarget = T, X = null, Fl(H) === N && (nt = new nt(b, p + "enter", it, l, H), nt.target = T, nt.relatedTarget = At, X = nt), At = X, A && it) e: {
              for (nt = A, b = it, p = 0, T = nt; T; T = Ma(T)) p++;
              for (T = 0, X = b; X; X = Ma(X)) T++;
              for (; 0 < p - T;) nt = Ma(nt),
              p--;
              for (; 0 < T - p;) b = Ma(b),
              T--;
              for (; p--;) {
                if (nt === b || b !== null && nt === b.alternate) break e;
                nt = Ma(nt), b = Ma(b)
              }
              nt = null
            }
            else nt = null;
            A !== null && dd(Q, _, A, nt, !1), it !== null && At !== null && dd(Q, At, it, nt, !0)
          }
        }
        t: {
          if (_ = N ? Qa(N) : window, A = _.nodeName && _.nodeName.toLowerCase(), A === "select" || A === "input" && _.type === "file") var tt = Mo;
          else if (jo(_))
            if (Co) tt = Hm;
            else {
              tt = wm;
              var rt = zm
            }
          else A = _.nodeName,
          !A || A.toLowerCase() !== "input" || _.type !== "checkbox" && _.type !== "radio" ? N && Ai(N.elementType) && (tt = Mo) : tt = Um;
          if (tt && (tt = tt(t, N))) {
            Oo(Q, tt, l, H);
            break t
          }
          rt && rt(t, _, N),
          t === "focusout" && N && _.type === "number" && N.memoizedProps.value != null && _i(_, "number", _.value)
        }
        switch (rt = N ? Qa(N) : window, t) {
          case "focusin":
            (jo(rt) || rt.contentEditable === "true") && (ia = rt, Gi = N, Pa = null);
            break;
          case "focusout":
            Pa = Gi = ia = null;
            break;
          case "mousedown":
            Li = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Li = !1, Bo(Q, l, H);
            break;
          case "selectionchange":
            if (Ym) break;
          case "keydown":
          case "keyup":
            Bo(Q, l, H)
        }
        var et;
        if (qi) t: {
          switch (t) {
            case "compositionstart":
              var ut = "onCompositionStart";
              break t;
            case "compositionend":
              ut = "onCompositionEnd";
              break t;
            case "compositionupdate":
              ut = "onCompositionUpdate";
              break t
          }
          ut = void 0
        }
        else ua ? _o(t, l) && (ut = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (ut = "onCompositionStart");ut && (No && l.locale !== "ko" && (ua || ut !== "onCompositionStart" ? ut === "onCompositionEnd" && ua && (et = po()) : (nl = H, Ri = "value" in nl ? nl.value : nl.textContent, ua = !0)), rt = Ku(N, ut), 0 < rt.length && (ut = new To(ut, t, null, l, H), Q.push({
          event: ut,
          listeners: rt
        }), et ? ut.data = et : (et = Ao(l), et !== null && (ut.data = et)))),
        (et = jm ? Om(t, l) : Mm(t, l)) && (ut = Ku(N, "onBeforeInput"), 0 < ut.length && (rt = new To("onBeforeInput", "beforeinput", null, l, H), Q.push({
          event: rt,
          listeners: ut
        }), rt.data = et)),
        bg(Q, t, N, l, H)
      }
      fd(Q, e)
    })
  }

  function An(t, e, l) {
    return {
      instance: t,
      listener: e,
      currentTarget: l
    }
  }

  function Ku(t, e) {
    for (var l = e + "Capture", a = []; t !== null;) {
      var n = t,
        u = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = Za(t, l), n != null && a.unshift(An(t, n, u)), n = Za(t, e), n != null && a.push(An(t, n, u))), t.tag === 3) return a;
      t = t.return
    }
    return []
  }

  function Ma(t) {
    if (t === null) return null;
    do t = t.return; while (t && t.tag !== 5 && t.tag !== 27);
    return t || null
  }

  function dd(t, e, l, a, n) {
    for (var u = e._reactName, i = []; l !== null && l !== a;) {
      var o = l,
        h = o.alternate,
        N = o.stateNode;
      if (o = o.tag, h !== null && h === a) break;
      o !== 5 && o !== 26 && o !== 27 || N === null || (h = N, n ? (N = Za(l, u), N != null && i.unshift(An(l, N, h))) : n || (N = Za(l, u), N != null && i.push(An(l, N, h)))), l = l.return
    }
    i.length !== 0 && t.push({
      event: e,
      listeners: i
    })
  }
  var Eg = /\r\n?/g,
    Dg = /\u0000|\uFFFD/g;

  function hd(t) {
    return (typeof t == "string" ? t : "" + t).replace(Eg, `
`).replace(Dg, "")
  }

  function md(t, e) {
    return e = hd(e), hd(t) === e
  }

  function ku() {}

  function _t(t, e, l, a, n, u) {
    switch (l) {
      case "children":
        typeof a == "string" ? e === "body" || e === "textarea" && a === "" || la(t, a) : (typeof a == "number" || typeof a == "bigint") && e !== "body" && la(t, "" + a);
        break;
      case "className":
        Pn(t, "class", a);
        break;
      case "tabIndex":
        Pn(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Pn(t, l, a);
        break;
      case "style":
        go(t, a, u);
        break;
      case "data":
        if (e !== "object") {
          Pn(t, "data", a);
          break
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || l !== "href")) {
          t.removeAttribute(l);
          break
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(l);
          break
        }
        a = eu("" + a), t.setAttribute(l, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(l, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break
        } else typeof u == "function" && (l === "formAction" ? (e !== "input" && _t(t, e, "name", n.name, n, null), _t(t, e, "formEncType", n.formEncType, n, null), _t(t, e, "formMethod", n.formMethod, n, null), _t(t, e, "formTarget", n.formTarget, n, null)) : (_t(t, e, "encType", n.encType, n, null), _t(t, e, "method", n.method, n, null), _t(t, e, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(l);
          break
        }
        a = eu("" + a), t.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (t.onclick = ku);
        break;
      case "onScroll":
        a != null && gt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && gt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(s(61));
          if (l = a.__html, l != null) {
            if (n.children != null) throw Error(s(60));
            t.innerHTML = l
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          t.removeAttribute("xlink:href");
          break
        }
        l = eu("" + a), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, "" + a) : t.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, "") : t.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0 ? t.setAttribute(l, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, a) : t.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(l, a) : t.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(l) : t.setAttribute(l, a);
        break;
      case "popover":
        gt("beforetoggle", t), gt("toggle", t), $n(t, "popover", a);
        break;
      case "xlinkActuate":
        Be(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Be(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Be(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Be(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Be(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Be(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Be(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Be(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Be(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        $n(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = em.get(l) || l, $n(t, l, a))
    }
  }

  function rs(t, e, l, a, n, u) {
    switch (l) {
      case "style":
        go(t, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(s(61));
          if (l = a.__html, l != null) {
            if (n.children != null) throw Error(s(60));
            t.innerHTML = l
          }
        }
        break;
      case "children":
        typeof a == "string" ? la(t, a) : (typeof a == "number" || typeof a == "bigint") && la(t, "" + a);
        break;
      case "onScroll":
        a != null && gt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && gt("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = ku);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!ao.hasOwnProperty(l)) t: {
          if (l[0] === "o" && l[1] === "n" && (n = l.endsWith("Capture"), e = l.slice(2, n ? l.length - 7 : void 0), u = t[ne] || null, u = u != null ? u[l] : null, typeof u == "function" && t.removeEventListener(e, u, n), typeof a == "function")) {
            typeof u != "function" && u !== null && (l in t ? t[l] = null : t.hasAttribute(l) && t.removeAttribute(l)), t.addEventListener(e, a, n);
            break t
          }
          l in t ? t[l] = a : a === !0 ? t.setAttribute(l, "") : $n(t, l, a)
        }
    }
  }

  function $t(t, e, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        gt("error", t), gt("load", t);
        var a = !1,
          n = !1,
          u;
        for (u in l)
          if (l.hasOwnProperty(u)) {
            var i = l[u];
            if (i != null) switch (u) {
              case "src":
                a = !0;
                break;
              case "srcSet":
                n = !0;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, e));
              default:
                _t(t, e, u, i, l, null)
            }
          } n && _t(t, e, "srcSet", l.srcSet, l, null), a && _t(t, e, "src", l.src, l, null);
        return;
      case "input":
        gt("invalid", t);
        var o = u = i = n = null,
          h = null,
          N = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var H = l[a];
            if (H != null) switch (a) {
              case "name":
                n = H;
                break;
              case "type":
                i = H;
                break;
              case "checked":
                h = H;
                break;
              case "defaultChecked":
                N = H;
                break;
              case "value":
                u = H;
                break;
              case "defaultValue":
                o = H;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (H != null) throw Error(s(137, e));
                break;
              default:
                _t(t, e, a, H, l, null)
            }
          } fo(t, u, o, h, N, i, n, !1), In(t);
        return;
      case "select":
        gt("invalid", t), a = i = u = null;
        for (n in l)
          if (l.hasOwnProperty(n) && (o = l[n], o != null)) switch (n) {
            case "value":
              u = o;
              break;
            case "defaultValue":
              i = o;
              break;
            case "multiple":
              a = o;
            default:
              _t(t, e, n, o, l, null)
          }
        e = u, l = i, t.multiple = !!a, e != null ? ea(t, !!a, e, !1) : l != null && ea(t, !!a, l, !0);
        return;
      case "textarea":
        gt("invalid", t), u = n = a = null;
        for (i in l)
          if (l.hasOwnProperty(i) && (o = l[i], o != null)) switch (i) {
            case "value":
              a = o;
              break;
            case "defaultValue":
              n = o;
              break;
            case "children":
              u = o;
              break;
            case "dangerouslySetInnerHTML":
              if (o != null) throw Error(s(91));
              break;
            default:
              _t(t, e, i, o, l, null)
          }
        ho(t, a, n, u), In(t);
        return;
      case "option":
        for (h in l)
          if (l.hasOwnProperty(h) && (a = l[h], a != null)) switch (h) {
            case "selected":
              t.selected = a && typeof a != "function" && typeof a != "symbol";
              break;
            default:
              _t(t, e, h, a, l, null)
          }
        return;
      case "dialog":
        gt("beforetoggle", t), gt("toggle", t), gt("cancel", t), gt("close", t);
        break;
      case "iframe":
      case "object":
        gt("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < _n.length; a++) gt(_n[a], t);
        break;
      case "image":
        gt("error", t), gt("load", t);
        break;
      case "details":
        gt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        gt("error", t), gt("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (N in l)
          if (l.hasOwnProperty(N) && (a = l[N], a != null)) switch (N) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(s(137, e));
            default:
              _t(t, e, N, a, l, null)
          }
        return;
      default:
        if (Ai(e)) {
          for (H in l) l.hasOwnProperty(H) && (a = l[H], a !== void 0 && rs(t, e, H, a, l, void 0));
          return
        }
    }
    for (o in l) l.hasOwnProperty(o) && (a = l[o], a != null && _t(t, e, o, a, l, null))
  }

  function _g(t, e, l, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null,
          u = null,
          i = null,
          o = null,
          h = null,
          N = null,
          H = null;
        for (A in l) {
          var Q = l[A];
          if (l.hasOwnProperty(A) && Q != null) switch (A) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              h = Q;
            default:
              a.hasOwnProperty(A) || _t(t, e, A, null, a, Q)
          }
        }
        for (var _ in a) {
          var A = a[_];
          if (Q = l[_], a.hasOwnProperty(_) && (A != null || Q != null)) switch (_) {
            case "type":
              u = A;
              break;
            case "name":
              n = A;
              break;
            case "checked":
              N = A;
              break;
            case "defaultChecked":
              H = A;
              break;
            case "value":
              i = A;
              break;
            case "defaultValue":
              o = A;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (A != null) throw Error(s(137, e));
              break;
            default:
              A !== Q && _t(t, e, _, A, a, Q)
          }
        }
        Di(t, i, o, h, N, H, u, n);
        return;
      case "select":
        A = i = o = _ = null;
        for (u in l)
          if (h = l[u], l.hasOwnProperty(u) && h != null) switch (u) {
            case "value":
              break;
            case "multiple":
              A = h;
            default:
              a.hasOwnProperty(u) || _t(t, e, u, null, a, h)
          }
        for (n in a)
          if (u = a[n], h = l[n], a.hasOwnProperty(n) && (u != null || h != null)) switch (n) {
            case "value":
              _ = u;
              break;
            case "defaultValue":
              o = u;
              break;
            case "multiple":
              i = u;
            default:
              u !== h && _t(t, e, n, u, a, h)
          }
        e = o, l = i, a = A, _ != null ? ea(t, !!l, _, !1) : !!a != !!l && (e != null ? ea(t, !!l, e, !0) : ea(t, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        A = _ = null;
        for (o in l)
          if (n = l[o], l.hasOwnProperty(o) && n != null && !a.hasOwnProperty(o)) switch (o) {
            case "value":
              break;
            case "children":
              break;
            default:
              _t(t, e, o, null, a, n)
          }
        for (i in a)
          if (n = a[i], u = l[i], a.hasOwnProperty(i) && (n != null || u != null)) switch (i) {
            case "value":
              _ = n;
              break;
            case "defaultValue":
              A = n;
              break;
            case "children":
              break;
            case "dangerouslySetInnerHTML":
              if (n != null) throw Error(s(91));
              break;
            default:
              n !== u && _t(t, e, i, n, a, u)
          }
        ro(t, _, A);
        return;
      case "option":
        for (var it in l)
          if (_ = l[it], l.hasOwnProperty(it) && _ != null && !a.hasOwnProperty(it)) switch (it) {
            case "selected":
              t.selected = !1;
              break;
            default:
              _t(t, e, it, null, a, _)
          }
        for (h in a)
          if (_ = a[h], A = l[h], a.hasOwnProperty(h) && _ !== A && (_ != null || A != null)) switch (h) {
            case "selected":
              t.selected = _ && typeof _ != "function" && typeof _ != "symbol";
              break;
            default:
              _t(t, e, h, _, a, A)
          }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var nt in l) _ = l[nt], l.hasOwnProperty(nt) && _ != null && !a.hasOwnProperty(nt) && _t(t, e, nt, null, a, _);
        for (N in a)
          if (_ = a[N], A = l[N], a.hasOwnProperty(N) && _ !== A && (_ != null || A != null)) switch (N) {
            case "children":
            case "dangerouslySetInnerHTML":
              if (_ != null) throw Error(s(137, e));
              break;
            default:
              _t(t, e, N, _, a, A)
          }
        return;
      default:
        if (Ai(e)) {
          for (var At in l) _ = l[At], l.hasOwnProperty(At) && _ !== void 0 && !a.hasOwnProperty(At) && rs(t, e, At, void 0, a, _);
          for (H in a) _ = a[H], A = l[H], !a.hasOwnProperty(H) || _ === A || _ === void 0 && A === void 0 || rs(t, e, H, _, a, A);
          return
        }
    }
    for (var b in l) _ = l[b], l.hasOwnProperty(b) && _ != null && !a.hasOwnProperty(b) && _t(t, e, b, null, a, _);
    for (Q in a) _ = a[Q], A = l[Q], !a.hasOwnProperty(Q) || _ === A || _ == null && A == null || _t(t, e, Q, _, a, A)
  }
  var ds = null,
    hs = null;

  function Ju(t) {
    return t.nodeType === 9 ? t : t.ownerDocument
  }

  function gd(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0
    }
  }

  function vd(t, e) {
    if (t === 0) switch (e) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0
    }
    return t === 1 && e === "foreignObject" ? 0 : t
  }

  function ms(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
  }
  var gs = null;

  function Ag() {
    var t = window.event;
    return t && t.type === "popstate" ? t === gs ? !1 : (gs = t, !0) : (gs = null, !1)
  }
  var yd = typeof setTimeout == "function" ? setTimeout : void 0,
    jg = typeof clearTimeout == "function" ? clearTimeout : void 0,
    pd = typeof Promise == "function" ? Promise : void 0,
    Og = typeof queueMicrotask == "function" ? queueMicrotask : typeof pd < "u" ? function(t) {
      return pd.resolve(null).then(t).catch(Mg)
    } : yd;

  function Mg(t) {
    setTimeout(function() {
      throw t
    })
  }

  function bl(t) {
    return t === "head"
  }

  function Sd(t, e) {
    var l = e,
      a = 0,
      n = 0;
    do {
      var u = l.nextSibling;
      if (t.removeChild(l), u && u.nodeType === 8)
        if (l = u.data, l === "/$") {
          if (0 < a && 8 > a) {
            l = a;
            var i = t.ownerDocument;
            if (l & 1 && jn(i.documentElement), l & 2 && jn(i.body), l & 4)
              for (l = i.head, jn(l), i = l.firstChild; i;) {
                var o = i.nextSibling,
                  h = i.nodeName;
                i[La] || h === "SCRIPT" || h === "STYLE" || h === "LINK" && i.rel.toLowerCase() === "stylesheet" || l.removeChild(i), i = o
              }
          }
          if (n === 0) {
            t.removeChild(u), Hn(e);
            return
          }
          n--
        } else l === "$" || l === "$?" || l === "$!" ? n++ : a = l.charCodeAt(0) - 48;
      else a = 0;
      l = u
    } while (l);
    Hn(e)
  }

  function vs(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e;) {
      var l = e;
      switch (e = e.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          vs(l), Ti(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue
      }
      t.removeChild(l)
    }
  }

  function Cg(t, e, l, a) {
    for (; t.nodeType === 1;) {
      var n = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break
      } else if (a) {
        if (!t[La]) switch (e) {
          case "meta":
            if (!t.hasAttribute("itemprop")) break;
            return t;
          case "link":
            if (u = t.getAttribute("rel"), u === "stylesheet" && t.hasAttribute("data-precedence")) break;
            if (u !== n.rel || t.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || t.getAttribute("title") !== (n.title == null ? null : n.title)) break;
            return t;
          case "style":
            if (t.hasAttribute("data-precedence")) break;
            return t;
          case "script":
            if (u = t.getAttribute("src"), (u !== (n.src == null ? null : n.src) || t.getAttribute("type") !== (n.type == null ? null : n.type) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && u && t.hasAttribute("async") && !t.hasAttribute("itemprop")) break;
            return t;
          default:
            return t
        }
      } else if (e === "input" && t.type === "hidden") {
        var u = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && t.getAttribute("name") === u) return t
      } else return t;
      if (t = Me(t.nextSibling), t === null) break
    }
    return null
  }

  function Rg(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3;)
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = Me(t.nextSibling), t === null)) return null;
    return t
  }

  function ys(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState === "complete"
  }

  function zg(t, e) {
    var l = t.ownerDocument;
    if (t.data !== "$?" || l.readyState === "complete") e();
    else {
      var a = function() {
        e(), l.removeEventListener("DOMContentLoaded", a)
      };
      l.addEventListener("DOMContentLoaded", a), t._reactRetry = a
    }
  }

  function Me(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F") break;
        if (e === "/$") return null
      }
    }
    return t
  }
  var ps = null;

  function bd(t) {
    t = t.previousSibling;
    for (var e = 0; t;) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (e === 0) return t;
          e--
        } else l === "/$" && e++
      }
      t = t.previousSibling
    }
    return null
  }

  function Td(t, e, l) {
    switch (e = Ju(l), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(s(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(s(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(s(454));
        return t;
      default:
        throw Error(s(451))
    }
  }

  function jn(t) {
    for (var e = t.attributes; e.length;) t.removeAttributeNode(e[0]);
    Ti(t)
  }
  var Ae = new Map,
    xd = new Set;

  function Wu(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument
  }
  var Ie = J.d;
  J.d = {
    f: wg,
    r: Ug,
    D: Hg,
    C: qg,
    L: Yg,
    m: Bg,
    X: Gg,
    S: Xg,
    M: Lg
  };

  function wg() {
    var t = Ie.f(),
      e = Xu();
    return t || e
  }

  function Ug(t) {
    var e = $l(t);
    e !== null && e.tag === 5 && e.type === "form" ? Lf(e) : Ie.r(t)
  }
  var Ca = typeof document > "u" ? null : document;

  function Nd(t, e, l) {
    var a = Ca;
    if (a && typeof e == "string" && e) {
      var n = be(e);
      n = 'link[rel="' + t + '"][href="' + n + '"]', typeof l == "string" && (n += '[crossorigin="' + l + '"]'), xd.has(n) || (xd.add(n), t = {
        rel: t,
        crossOrigin: l,
        href: e
      }, a.querySelector(n) === null && (e = a.createElement("link"), $t(e, "link", t), Vt(e), a.head.appendChild(e)))
    }
  }

  function Hg(t) {
    Ie.D(t), Nd("dns-prefetch", t, null)
  }

  function qg(t, e) {
    Ie.C(t, e), Nd("preconnect", t, e)
  }

  function Yg(t, e, l) {
    Ie.L(t, e, l);
    var a = Ca;
    if (a && t && e) {
      var n = 'link[rel="preload"][as="' + be(e) + '"]';
      e === "image" && l && l.imageSrcSet ? (n += '[imagesrcset="' + be(l.imageSrcSet) + '"]', typeof l.imageSizes == "string" && (n += '[imagesizes="' + be(l.imageSizes) + '"]')) : n += '[href="' + be(t) + '"]';
      var u = n;
      switch (e) {
        case "style":
          u = Ra(t);
          break;
        case "script":
          u = za(t)
      }
      Ae.has(u) || (t = D({
        rel: "preload",
        href: e === "image" && l && l.imageSrcSet ? void 0 : t,
        as: e
      }, l), Ae.set(u, t), a.querySelector(n) !== null || e === "style" && a.querySelector(On(u)) || e === "script" && a.querySelector(Mn(u)) || (e = a.createElement("link"), $t(e, "link", t), Vt(e), a.head.appendChild(e)))
    }
  }

  function Bg(t, e) {
    Ie.m(t, e);
    var l = Ca;
    if (l && t) {
      var a = e && typeof e.as == "string" ? e.as : "script",
        n = 'link[rel="modulepreload"][as="' + be(a) + '"][href="' + be(t) + '"]',
        u = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = za(t)
      }
      if (!Ae.has(u) && (t = D({
          rel: "modulepreload",
          href: t
        }, e), Ae.set(u, t), l.querySelector(n) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Mn(u))) return
        }
        a = l.createElement("link"), $t(a, "link", t), Vt(a), l.head.appendChild(a)
      }
    }
  }

  function Xg(t, e, l) {
    Ie.S(t, e, l);
    var a = Ca;
    if (a && t) {
      var n = Pl(a).hoistableStyles,
        u = Ra(t);
      e = e || "default";
      var i = n.get(u);
      if (!i) {
        var o = {
          loading: 0,
          preload: null
        };
        if (i = a.querySelector(On(u))) o.loading = 5;
        else {
          t = D({
            rel: "stylesheet",
            href: t,
            "data-precedence": e
          }, l), (l = Ae.get(u)) && Ss(t, l);
          var h = i = a.createElement("link");
          Vt(h), $t(h, "link", t), h._p = new Promise(function(N, H) {
            h.onload = N, h.onerror = H
          }), h.addEventListener("load", function() {
            o.loading |= 1
          }), h.addEventListener("error", function() {
            o.loading |= 2
          }), o.loading |= 4, Fu(i, e, a)
        }
        i = {
          type: "stylesheet",
          instance: i,
          count: 1,
          state: o
        }, n.set(u, i)
      }
    }
  }

  function Gg(t, e) {
    Ie.X(t, e);
    var l = Ca;
    if (l && t) {
      var a = Pl(l).hoistableScripts,
        n = za(t),
        u = a.get(n);
      u || (u = l.querySelector(Mn(n)), u || (t = D({
        src: t,
        async: !0
      }, e), (e = Ae.get(n)) && bs(t, e), u = l.createElement("script"), Vt(u), $t(u, "link", t), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u))
    }
  }

  function Lg(t, e) {
    Ie.M(t, e);
    var l = Ca;
    if (l && t) {
      var a = Pl(l).hoistableScripts,
        n = za(t),
        u = a.get(n);
      u || (u = l.querySelector(Mn(n)), u || (t = D({
        src: t,
        async: !0,
        type: "module"
      }, e), (e = Ae.get(n)) && bs(t, e), u = l.createElement("script"), Vt(u), $t(u, "link", t), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u))
    }
  }

  function Ed(t, e, l, a) {
    var n = (n = at.current) ? Wu(n) : null;
    if (!n) throw Error(s(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (e = Ra(l.href), l = Pl(n).hoistableStyles, a = l.get(e), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, a)), a) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          t = Ra(l.href);
          var u = Pl(n).hoistableStyles,
            i = u.get(t);
          if (i || (n = n.ownerDocument || n, i = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: {
                loading: 0,
                preload: null
              }
            }, u.set(t, i), (u = n.querySelector(On(t))) && !u._p && (i.instance = u, i.state.loading = 5), Ae.has(t) || (l = {
              rel: "preload",
              as: "style",
              href: l.href,
              crossOrigin: l.crossOrigin,
              integrity: l.integrity,
              media: l.media,
              hrefLang: l.hrefLang,
              referrerPolicy: l.referrerPolicy
            }, Ae.set(t, l), u || Qg(n, t, l, i.state))), e && a === null) throw Error(s(528, ""));
          return i
        }
        if (e && a !== null) throw Error(s(529, ""));
        return null;
      case "script":
        return e = l.async, l = l.src, typeof l == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = za(l), l = Pl(n).hoistableScripts, a = l.get(e), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, a)), a) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      default:
        throw Error(s(444, t))
    }
  }

  function Ra(t) {
    return 'href="' + be(t) + '"'
  }

  function On(t) {
    return 'link[rel="stylesheet"][' + t + "]"
  }

  function Dd(t) {
    return D({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    })
  }

  function Qg(t, e, l, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? a.loading = 1 : (e = t.createElement("link"), a.preload = e, e.addEventListener("load", function() {
      return a.loading |= 1
    }), e.addEventListener("error", function() {
      return a.loading |= 2
    }), $t(e, "link", l), Vt(e), t.head.appendChild(e))
  }

  function za(t) {
    return '[src="' + be(t) + '"]'
  }

  function Mn(t) {
    return "script[async]" + t
  }

  function _d(t, e, l) {
    if (e.count++, e.instance === null) switch (e.type) {
      case "style":
        var a = t.querySelector('style[data-href~="' + be(l.href) + '"]');
        if (a) return e.instance = a, Vt(a), a;
        var n = D({}, l, {
          "data-href": l.href,
          "data-precedence": l.precedence,
          href: null,
          precedence: null
        });
        return a = (t.ownerDocument || t).createElement("style"), Vt(a), $t(a, "style", n), Fu(a, l.precedence, t), e.instance = a;
      case "stylesheet":
        n = Ra(l.href);
        var u = t.querySelector(On(n));
        if (u) return e.state.loading |= 4, e.instance = u, Vt(u), u;
        a = Dd(l), (n = Ae.get(n)) && Ss(a, n), u = (t.ownerDocument || t).createElement("link"), Vt(u);
        var i = u;
        return i._p = new Promise(function(o, h) {
          i.onload = o, i.onerror = h
        }), $t(u, "link", a), e.state.loading |= 4, Fu(u, l.precedence, t), e.instance = u;
      case "script":
        return u = za(l.src), (n = t.querySelector(Mn(u))) ? (e.instance = n, Vt(n), n) : (a = l, (n = Ae.get(u)) && (a = D({}, l), bs(a, n)), t = t.ownerDocument || t, n = t.createElement("script"), Vt(n), $t(n, "link", a), t.head.appendChild(n), e.instance = n);
      case "void":
        return null;
      default:
        throw Error(s(443, e.type))
    } else e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance, e.state.loading |= 4, Fu(a, l.precedence, t));
    return e.instance
  }

  function Fu(t, e, l) {
    for (var a = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n = a.length ? a[a.length - 1] : null, u = n, i = 0; i < a.length; i++) {
      var o = a[i];
      if (o.dataset.precedence === e) u = o;
      else if (u !== n) break
    }
    u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = l.nodeType === 9 ? l.head : l, e.insertBefore(t, e.firstChild))
  }

  function Ss(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title)
  }

  function bs(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity)
  }
  var $u = null;

  function Ad(t, e, l) {
    if ($u === null) {
      var a = new Map,
        n = $u = new Map;
      n.set(l, a)
    } else n = $u, a = n.get(l), a || (a = new Map, n.set(l, a));
    if (a.has(t)) return a;
    for (a.set(t, null), l = l.getElementsByTagName(t), n = 0; n < l.length; n++) {
      var u = l[n];
      if (!(u[La] || u[It] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = u.getAttribute(e) || "";
        i = t + i;
        var o = a.get(i);
        o ? o.push(u) : a.set(i, [u])
      }
    }
    return a
  }

  function jd(t, e, l) {
    t = t.ownerDocument || t, t.head.insertBefore(l, e === "title" ? t.querySelector("head > title") : null)
  }

  function Zg(t, e, l) {
    if (l === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "") break;
        return !0;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError) break;
        switch (e.rel) {
          case "stylesheet":
            return t = e.disabled, typeof e.precedence == "string" && t == null;
          default:
            return !0
        }
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string") return !0
    }
    return !1
  }

  function Od(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0)
  }
  var Cn = null;

  function Vg() {}

  function Kg(t, e, l) {
    if (Cn === null) throw Error(s(475));
    var a = Cn;
    if (e.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (e.state.loading & 4) === 0) {
      if (e.instance === null) {
        var n = Ra(l.href),
          u = t.querySelector(On(n));
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (a.count++, a = Pu.bind(a), t.then(a, a)), e.state.loading |= 4, e.instance = u, Vt(u);
          return
        }
        u = t.ownerDocument || t, l = Dd(l), (n = Ae.get(n)) && Ss(l, n), u = u.createElement("link"), Vt(u);
        var i = u;
        i._p = new Promise(function(o, h) {
          i.onload = o, i.onerror = h
        }), $t(u, "link", l), e.instance = u
      }
      a.stylesheets === null && (a.stylesheets = new Map), a.stylesheets.set(e, t), (t = e.state.preload) && (e.state.loading & 3) === 0 && (a.count++, e = Pu.bind(a), t.addEventListener("load", e), t.addEventListener("error", e))
    }
  }

  function kg() {
    if (Cn === null) throw Error(s(475));
    var t = Cn;
    return t.stylesheets && t.count === 0 && Ts(t, t.stylesheets), 0 < t.count ? function(e) {
      var l = setTimeout(function() {
        if (t.stylesheets && Ts(t, t.stylesheets), t.unsuspend) {
          var a = t.unsuspend;
          t.unsuspend = null, a()
        }
      }, 6e4);
      return t.unsuspend = e,
        function() {
          t.unsuspend = null, clearTimeout(l)
        }
    } : null
  }

  function Pu() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Ts(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t()
      }
    }
  }
  var Iu = null;

  function Ts(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Iu = new Map, e.forEach(Jg, t), Iu = null, Pu.call(t))
  }

  function Jg(t, e) {
    if (!(e.state.loading & 4)) {
      var l = Iu.get(t);
      if (l) var a = l.get(null);
      else {
        l = new Map, Iu.set(t, l);
        for (var n = t.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < n.length; u++) {
          var i = n[u];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (l.set(i.dataset.precedence, i), a = i)
        }
        a && l.set(null, a)
      }
      n = e.instance, i = n.getAttribute("data-precedence"), u = l.get(i) || a, u === a && l.set(null, n), l.set(i, n), this.count++, a = Pu.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), u ? u.parentNode.insertBefore(n, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(n, t.firstChild)), e.state.loading |= 4
    }
  }
  var Rn = {
    $$typeof: K,
    Provider: null,
    Consumer: null,
    _currentValue: lt,
    _currentValue2: lt,
    _threadCount: 0
  };

  function Wg(t, e, l, a, n, u, i, o) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = yi(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = yi(0), this.hiddenUpdates = yi(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = o, this.incompleteTransitions = new Map
  }

  function Md(t, e, l, a, n, u, i, o, h, N, H, Q) {
    return t = new Wg(t, e, l, i, o, h, N, Q), e = 1, u === !0 && (e |= 24), u = he(3, null, null, e), t.current = u, u.stateNode = t, e = lc(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: l,
      cache: e
    }, ic(u), t
  }

  function Cd(t) {
    return t ? (t = fa, t) : fa
  }

  function Rd(t, e, l, a, n, u) {
    n = Cd(n), a.context === null ? a.context = n : a.pendingContext = n, a = cl(e), a.payload = {
      element: l
    }, u = u === void 0 ? null : u, u !== null && (a.callback = u), l = sl(t, a, e), l !== null && (pe(l, t, e), sn(l, t, e))
  }

  function zd(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e
    }
  }

  function xs(t, e) {
    zd(t, e), (t = t.alternate) && zd(t, e)
  }

  function wd(t) {
    if (t.tag === 13) {
      var e = oa(t, 67108864);
      e !== null && pe(e, t, 67108864), xs(t, 67108864)
    }
  }
  var ti = !0;

  function Fg(t, e, l, a) {
    var n = z.T;
    z.T = null;
    var u = J.p;
    try {
      J.p = 2, Ns(t, e, l, a)
    } finally {
      J.p = u, z.T = n
    }
  }

  function $g(t, e, l, a) {
    var n = z.T;
    z.T = null;
    var u = J.p;
    try {
      J.p = 8, Ns(t, e, l, a)
    } finally {
      J.p = u, z.T = n
    }
  }

  function Ns(t, e, l, a) {
    if (ti) {
      var n = Es(a);
      if (n === null) fs(t, e, a, ei, l), Hd(t, a);
      else if (Ig(n, t, e, l, a)) a.stopPropagation();
      else if (Hd(t, a), e & 4 && -1 < Pg.indexOf(t)) {
        for (; n !== null;) {
          var u = $l(n);
          if (u !== null) switch (u.tag) {
            case 3:
              if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                var i = jl(u.pendingLanes);
                if (i !== 0) {
                  var o = u;
                  for (o.pendingLanes |= 2, o.entangledLanes |= 2; i;) {
                    var h = 1 << 31 - re(i);
                    o.entanglements[1] |= h, i &= ~h
                  }
                  qe(u), (Nt & 6) === 0 && (Yu = Re() + 500, Dn(0))
                }
              }
              break;
            case 13:
              o = oa(u, 2), o !== null && pe(o, u, 2), Xu(), xs(u, 2)
          }
          if (u = Es(a), u === null && fs(t, e, a, ei, l), u === n) break;
          n = u
        }
        n !== null && a.stopPropagation()
      } else fs(t, e, a, null, l)
    }
  }

  function Es(t) {
    return t = Oi(t), Ds(t)
  }
  var ei = null;

  function Ds(t) {
    if (ei = null, t = Fl(t), t !== null) {
      var e = v(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (t = x(e), t !== null) return t;
          t = null
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null
        } else e !== t && (t = null)
      }
    }
    return ei = t, null
  }

  function Ud(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (qh()) {
          case ks:
            return 2;
          case Js:
            return 8;
          case kn:
          case Yh:
            return 32;
          case Ws:
            return 268435456;
          default:
            return 32
        }
      default:
        return 32
    }
  }
  var _s = !1,
    Tl = null,
    xl = null,
    Nl = null,
    zn = new Map,
    wn = new Map,
    El = [],
    Pg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

  function Hd(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Tl = null;
        break;
      case "dragenter":
      case "dragleave":
        xl = null;
        break;
      case "mouseover":
      case "mouseout":
        Nl = null;
        break;
      case "pointerover":
      case "pointerout":
        zn.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        wn.delete(e.pointerId)
    }
  }

  function Un(t, e, l, a, n, u) {
    return t === null || t.nativeEvent !== u ? (t = {
      blockedOn: e,
      domEventName: l,
      eventSystemFlags: a,
      nativeEvent: u,
      targetContainers: [n]
    }, e !== null && (e = $l(e), e !== null && wd(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, n !== null && e.indexOf(n) === -1 && e.push(n), t)
  }

  function Ig(t, e, l, a, n) {
    switch (e) {
      case "focusin":
        return Tl = Un(Tl, t, e, l, a, n), !0;
      case "dragenter":
        return xl = Un(xl, t, e, l, a, n), !0;
      case "mouseover":
        return Nl = Un(Nl, t, e, l, a, n), !0;
      case "pointerover":
        var u = n.pointerId;
        return zn.set(u, Un(zn.get(u) || null, t, e, l, a, n)), !0;
      case "gotpointercapture":
        return u = n.pointerId, wn.set(u, Un(wn.get(u) || null, t, e, l, a, n)), !0
    }
    return !1
  }

  function qd(t) {
    var e = Fl(t.target);
    if (e !== null) {
      var l = v(e);
      if (l !== null) {
        if (e = l.tag, e === 13) {
          if (e = x(l), e !== null) {
            t.blockedOn = e, Kh(t.priority, function() {
              if (l.tag === 13) {
                var a = ye();
                a = pi(a);
                var n = oa(l, a);
                n !== null && pe(n, l, a), xs(l, a)
              }
            });
            return
          }
        } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return
        }
      }
    }
    t.blockedOn = null
  }

  function li(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length;) {
      var l = Es(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var a = new l.constructor(l.type, l);
        ji = a, l.target.dispatchEvent(a), ji = null
      } else return e = $l(l), e !== null && wd(e), t.blockedOn = l, !1;
      e.shift()
    }
    return !0
  }

  function Yd(t, e, l) {
    li(t) && l.delete(e)
  }

  function tv() {
    _s = !1, Tl !== null && li(Tl) && (Tl = null), xl !== null && li(xl) && (xl = null), Nl !== null && li(Nl) && (Nl = null), zn.forEach(Yd), wn.forEach(Yd)
  }

  function ai(t, e) {
    t.blockedOn === e && (t.blockedOn = null, _s || (_s = !0, c.unstable_scheduleCallback(c.unstable_NormalPriority, tv)))
  }
  var ni = null;

  function Bd(t) {
    ni !== t && (ni = t, c.unstable_scheduleCallback(c.unstable_NormalPriority, function() {
      ni === t && (ni = null);
      for (var e = 0; e < t.length; e += 3) {
        var l = t[e],
          a = t[e + 1],
          n = t[e + 2];
        if (typeof a != "function") {
          if (Ds(a || l) === null) continue;
          break
        }
        var u = $l(l);
        u !== null && (t.splice(e, 3), e -= 3, Dc(u, {
          pending: !0,
          data: n,
          method: l.method,
          action: a
        }, a, n))
      }
    }))
  }

  function Hn(t) {
    function e(h) {
      return ai(h, t)
    }
    Tl !== null && ai(Tl, t), xl !== null && ai(xl, t), Nl !== null && ai(Nl, t), zn.forEach(e), wn.forEach(e);
    for (var l = 0; l < El.length; l++) {
      var a = El[l];
      a.blockedOn === t && (a.blockedOn = null)
    }
    for (; 0 < El.length && (l = El[0], l.blockedOn === null);) qd(l), l.blockedOn === null && El.shift();
    if (l = (t.ownerDocument || t).$$reactFormReplay, l != null)
      for (a = 0; a < l.length; a += 3) {
        var n = l[a],
          u = l[a + 1],
          i = n[ne] || null;
        if (typeof u == "function") i || Bd(l);
        else if (i) {
          var o = null;
          if (u && u.hasAttribute("formAction")) {
            if (n = u, i = u[ne] || null) o = i.formAction;
            else if (Ds(n) !== null) continue
          } else o = i.action;
          typeof o == "function" ? l[a + 1] = o : (l.splice(a, 3), a -= 3), Bd(l)
        }
      }
  }

  function As(t) {
    this._internalRoot = t
  }
  ui.prototype.render = As.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(s(409));
    var l = e.current,
      a = ye();
    Rd(l, a, t, e, null, null)
  }, ui.prototype.unmount = As.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      Rd(t.current, 2, null, t, null, null), Xu(), e[Wl] = null
    }
  };

  function ui(t) {
    this._internalRoot = t
  }
  ui.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = to();
      t = {
        blockedOn: null,
        target: t,
        priority: e
      };
      for (var l = 0; l < El.length && e !== 0 && e < El[l].priority; l++);
      El.splice(l, 0, t), l === 0 && qd(t)
    }
  };
  var Xd = r.version;
  if (Xd !== "19.1.0") throw Error(s(527, Xd, "19.1.0"));
  J.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0) throw typeof t.render == "function" ? Error(s(188)) : (t = Object.keys(t).join(","), Error(s(268, t)));
    return t = S(e), t = t !== null ? g(t) : null, t = t === null ? null : t.stateNode, t
  };
  var ev = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: z,
    reconcilerVersion: "19.1.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ii = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ii.isDisabled && ii.supportsFiber) try {
      Ba = ii.inject(ev), fe = ii
    } catch {}
  }
  return Yn.createRoot = function(t, e) {
    if (!m(t)) throw Error(s(299));
    var l = !1,
      a = "",
      n = lr,
      u = ar,
      i = nr,
      o = null;
    return e != null && (e.unstable_strictMode === !0 && (l = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (i = e.onRecoverableError), e.unstable_transitionCallbacks !== void 0 && (o = e.unstable_transitionCallbacks)), e = Md(t, 1, !1, null, null, l, a, n, u, i, o, null), t[Wl] = e.current, os(t), new As(e)
  }, Yn.hydrateRoot = function(t, e, l) {
    if (!m(t)) throw Error(s(299));
    var a = !1,
      n = "",
      u = lr,
      i = ar,
      o = nr,
      h = null,
      N = null;
    return l != null && (l.unstable_strictMode === !0 && (a = !0), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (i = l.onCaughtError), l.onRecoverableError !== void 0 && (o = l.onRecoverableError), l.unstable_transitionCallbacks !== void 0 && (h = l.unstable_transitionCallbacks), l.formState !== void 0 && (N = l.formState)), e = Md(t, 1, !0, e, l ?? null, a, n, u, i, o, h, N), e.context = Cd(null), l = e.current, a = ye(), a = pi(a), n = cl(a), n.callback = null, sl(l, n, a), l = a, e.current.lanes = l, Ga(e, l), qe(e), t[Wl] = e.current, os(t), new ui(e)
  }, Yn.version = "19.1.0", Yn
}
var Fd;

function fv() {
  if (Fd) return Ms.exports;
  Fd = 1;

  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)
    } catch (r) {
      console.error(r)
    }
  }
  return c(), Ms.exports = ov(), Ms.exports
}
var rv = fv();
const dv = fi(rv);
var ws = {
    exports: {}
  },
  Us, $d;

function hv() {
  if ($d) return Us;
  $d = 1;
  var c = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Us = c, Us
}
var Hs, Pd;

function mv() {
  if (Pd) return Hs;
  Pd = 1;
  var c = hv();

  function r() {}

  function d() {}
  return d.resetWarningCache = r, Hs = function() {
    function s(x, j, S, g, D, C) {
      if (C !== c) {
        var E = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
        throw E.name = "Invariant Violation", E
      }
    }
    s.isRequired = s;

    function m() {
      return s
    }
    var v = {
      array: s,
      bigint: s,
      bool: s,
      func: s,
      number: s,
      object: s,
      string: s,
      symbol: s,
      any: s,
      arrayOf: m,
      element: s,
      elementType: s,
      instanceOf: m,
      node: s,
      objectOf: m,
      oneOf: m,
      oneOfType: m,
      shape: m,
      exact: m,
      checkPropTypes: d,
      resetWarningCache: r
    };
    return v.PropTypes = v, v
  }, Hs
}
var Id;

function Zs() {
  return Id || (Id = 1, ws.exports = mv()()), ws.exports
}
var gv = Zs();
const dt = fi(gv);

function yh({
  currentTime: c,
  currentDate: r,
  customMessage: d,
  isSettingsOpen: s,
  onMessageChange: m,
  onMessageKeyDown: v,
  clockRef: x
}) {
  return f.jsx("div", {
    className: "container",
    children: f.jsxs("div", {
      className: "clockDate",
      children: [f.jsx("div", {
        id: "clock",
        ref: x,
        children: c
      }), f.jsx("div", {
        id: "date",
        children: r
      }), null]
    })
  })
}
yh.propTypes = {
  currentTime: dt.string.isRequired,
  currentDate: dt.string.isRequired,
  customMessage: dt.string.isRequired,
  isSettingsOpen: dt.bool.isRequired,
  onMessageChange: dt.func.isRequired,
  onMessageKeyDown: dt.func.isRequired,
  clockRef: dt.oneOfType([dt.func, dt.shape({
    current: dt.instanceOf(Element)
  })]),
  msgRef: dt.oneOfType([dt.func, dt.shape({
    current: dt.instanceOf(Element)
  })])
};
var Bn = {
    exports: {}
  },
  qs = {},
  ci = {
    exports: {}
  },
  th;

function vv() {
  if (th) return ci.exports;
  th = 1;

  function c(d) {
    var s, m, v = "";
    if (typeof d == "string" || typeof d == "number") v += d;
    else if (typeof d == "object")
      if (Array.isArray(d)) {
        var x = d.length;
        for (s = 0; s < x; s++) d[s] && (m = c(d[s])) && (v && (v += " "), v += m)
      } else
        for (m in d) d[m] && (v && (v += " "), v += m);
    return v
  }

  function r() {
    for (var d, s, m = 0, v = "", x = arguments.length; m < x; m++)(d = arguments[m]) && (s = c(d)) && (v && (v += " "), v += s);
    return v
  }
  return ci.exports = r, ci.exports.clsx = r, ci.exports
}
var Bt = {},
  _l = {},
  eh;

function ri() {
  if (eh) return _l;
  eh = 1, Object.defineProperty(_l, "__esModule", {
    value: !0
  }), _l.dontSetMe = m, _l.findInArray = c, _l.int = s, _l.isFunction = r, _l.isNum = d;

  function c(v, x) {
    for (let j = 0, S = v.length; j < S; j++)
      if (x.apply(x, [v[j], j, v])) return v[j]
  }

  function r(v) {
    return typeof v == "function" || Object.prototype.toString.call(v) === "[object Function]"
  }

  function d(v) {
    return typeof v == "number" && !isNaN(v)
  }

  function s(v) {
    return parseInt(v, 10)
  }

  function m(v, x, j) {
    if (v[x]) return new Error(`Invalid prop ${x} passed to ${j} - do not set this, set it on the child.`)
  }
  return _l
}
var Al = {},
  lh;

function yv() {
  if (lh) return Al;
  lh = 1, Object.defineProperty(Al, "__esModule", {
    value: !0
  }), Al.browserPrefixToKey = d, Al.browserPrefixToStyle = s, Al.default = void 0, Al.getPrefix = r;
  const c = ["Moz", "Webkit", "O", "ms"];

  function r() {
    var j, S;
    let v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
    if (typeof window > "u") return "";
    const x = (S = (j = window.document) == null ? void 0 : j.documentElement) == null ? void 0 : S.style;
    if (!x || v in x) return "";
    for (let g = 0; g < c.length; g++)
      if (d(v, c[g]) in x) return c[g];
    return ""
  }

  function d(v, x) {
    return x ? `${x}${m(v)}` : v
  }

  function s(v, x) {
    return x ? `-${x.toLowerCase()}-${v}` : v
  }

  function m(v) {
    let x = "",
      j = !0;
    for (let S = 0; S < v.length; S++) j ? (x += v[S].toUpperCase(), j = !1) : v[S] === "-" ? j = !0 : x += v[S];
    return x
  }
  return Al.default = r(), Al
}
var ah;

function Vs() {
  if (ah) return Bt;
  ah = 1, Object.defineProperty(Bt, "__esModule", {
    value: !0
  }), Bt.addClassName = G, Bt.addEvent = x, Bt.addUserSelectStyles = q, Bt.createCSSTransform = R, Bt.createSVGTransform = B, Bt.getTouch = w, Bt.getTouchIdentifier = O, Bt.getTranslation = Z, Bt.innerHeight = D, Bt.innerWidth = C, Bt.matchesSelector = m, Bt.matchesSelectorAndParentsTo = v, Bt.offsetXYFromParent = E, Bt.outerHeight = S, Bt.outerWidth = g, Bt.removeClassName = F, Bt.removeEvent = j, Bt.scheduleRemoveUserSelectStyles = K;
  var c = ri(),
    r = d(yv());

  function d(M, L) {
    if (typeof WeakMap == "function") var $ = new WeakMap,
      st = new WeakMap;
    return (d = function(ct, vt) {
      if (!vt && ct && ct.__esModule) return ct;
      var bt, Tt, ht = {
        __proto__: null,
        default: ct
      };
      if (ct === null || typeof ct != "object" && typeof ct != "function") return ht;
      if (bt = vt ? st : $) {
        if (bt.has(ct)) return bt.get(ct);
        bt.set(ct, ht)
      }
      for (const z in ct) z !== "default" && {}.hasOwnProperty.call(ct, z) && ((Tt = (bt = Object.defineProperty) && Object.getOwnPropertyDescriptor(ct, z)) && (Tt.get || Tt.set) ? bt(ht, z, Tt) : ht[z] = ct[z]);
      return ht
    })(M, L)
  }
  let s = "";

  function m(M, L) {
    return s || (s = (0, c.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function($) {
      return (0, c.isFunction)(M[$])
    })), (0, c.isFunction)(M[s]) ? M[s](L) : !1
  }

  function v(M, L, $) {
    let st = M;
    do {
      if (m(st, L)) return !0;
      if (st === $) return !1;
      st = st.parentNode
    } while (st);
    return !1
  }

  function x(M, L, $, st) {
    if (!M) return;
    const ct = {
      capture: !0,
      ...st
    };
    M.addEventListener ? M.addEventListener(L, $, ct) : M.attachEvent ? M.attachEvent("on" + L, $) : M["on" + L] = $
  }

  function j(M, L, $, st) {
    if (!M) return;
    const ct = {
      capture: !0,
      ...st
    };
    M.removeEventListener ? M.removeEventListener(L, $, ct) : M.detachEvent ? M.detachEvent("on" + L, $) : M["on" + L] = null
  }

  function S(M) {
    let L = M.clientHeight;
    const $ = M.ownerDocument.defaultView.getComputedStyle(M);
    return L += (0, c.int)($.borderTopWidth), L += (0, c.int)($.borderBottomWidth), L
  }

  function g(M) {
    let L = M.clientWidth;
    const $ = M.ownerDocument.defaultView.getComputedStyle(M);
    return L += (0, c.int)($.borderLeftWidth), L += (0, c.int)($.borderRightWidth), L
  }

  function D(M) {
    let L = M.clientHeight;
    const $ = M.ownerDocument.defaultView.getComputedStyle(M);
    return L -= (0, c.int)($.paddingTop), L -= (0, c.int)($.paddingBottom), L
  }

  function C(M) {
    let L = M.clientWidth;
    const $ = M.ownerDocument.defaultView.getComputedStyle(M);
    return L -= (0, c.int)($.paddingLeft), L -= (0, c.int)($.paddingRight), L
  }

  function E(M, L, $) {
    const ct = L === L.ownerDocument.body ? {
        left: 0,
        top: 0
      } : L.getBoundingClientRect(),
      vt = (M.clientX + L.scrollLeft - ct.left) / $,
      bt = (M.clientY + L.scrollTop - ct.top) / $;
    return {
      x: vt,
      y: bt
    }
  }

  function R(M, L) {
    const $ = Z(M, L, "px");
    return {
      [(0, r.browserPrefixToKey)("transform", r.default)]: $
    }
  }

  function B(M, L) {
    return Z(M, L, "")
  }

  function Z(M, L, $) {
    let {
      x: st,
      y: ct
    } = M, vt = `translate(${st}${$},${ct}${$})`;
    if (L) {
      const bt = `${typeof L.x=="string"?L.x:L.x+$}`,
        Tt = `${typeof L.y=="string"?L.y:L.y+$}`;
      vt = `translate(${bt}, ${Tt})` + vt
    }
    return vt
  }

  function w(M, L) {
    return M.targetTouches && (0, c.findInArray)(M.targetTouches, $ => L === $.identifier) || M.changedTouches && (0, c.findInArray)(M.changedTouches, $ => L === $.identifier)
  }

  function O(M) {
    if (M.targetTouches && M.targetTouches[0]) return M.targetTouches[0].identifier;
    if (M.changedTouches && M.changedTouches[0]) return M.changedTouches[0].identifier
  }

  function q(M) {
    if (!M) return;
    let L = M.getElementById("react-draggable-style-el");
    L || (L = M.createElement("style"), L.type = "text/css", L.id = "react-draggable-style-el", L.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, L.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, M.getElementsByTagName("head")[0].appendChild(L)), M.body && G(M.body, "react-draggable-transparent-selection")
  }

  function K(M) {
    window.requestAnimationFrame ? window.requestAnimationFrame(() => {
      W(M)
    }) : W(M)
  }

  function W(M) {
    if (M) try {
      if (M.body && F(M.body, "react-draggable-transparent-selection"), M.selection) M.selection.empty();
      else {
        const L = (M.defaultView || window).getSelection();
        L && L.type !== "Caret" && L.removeAllRanges()
      }
    } catch {}
  }

  function G(M, L) {
    M.classList ? M.classList.add(L) : M.className.match(new RegExp(`(?:^|\\s)${L}(?!\\S)`)) || (M.className += ` ${L}`)
  }

  function F(M, L) {
    M.classList ? M.classList.remove(L) : M.className = M.className.replace(new RegExp(`(?:^|\\s)${L}(?!\\S)`, "g"), "")
  }
  return Bt
}
var Ye = {},
  nh;

function ph() {
  if (nh) return Ye;
  nh = 1, Object.defineProperty(Ye, "__esModule", {
    value: !0
  }), Ye.canDragX = m, Ye.canDragY = v, Ye.createCoreData = j, Ye.createDraggableData = S, Ye.getBoundPosition = d, Ye.getControlPosition = x, Ye.snapToGrid = s;
  var c = ri(),
    r = Vs();

  function d(C, E, R) {
    if (!C.props.bounds) return [E, R];
    let {
      bounds: B
    } = C.props;
    B = typeof B == "string" ? B : g(B);
    const Z = D(C);
    if (typeof B == "string") {
      const {
        ownerDocument: w
      } = Z, O = w.defaultView;
      let q;
      if (B === "parent" ? q = Z.parentNode : q = Z.getRootNode().querySelector(B), !(q instanceof O.HTMLElement)) throw new Error('Bounds selector "' + B + '" could not find an element.');
      const K = q,
        W = O.getComputedStyle(Z),
        G = O.getComputedStyle(K);
      B = {
        left: -Z.offsetLeft + (0, c.int)(G.paddingLeft) + (0, c.int)(W.marginLeft),
        top: -Z.offsetTop + (0, c.int)(G.paddingTop) + (0, c.int)(W.marginTop),
        right: (0, r.innerWidth)(K) - (0, r.outerWidth)(Z) - Z.offsetLeft + (0, c.int)(G.paddingRight) - (0, c.int)(W.marginRight),
        bottom: (0, r.innerHeight)(K) - (0, r.outerHeight)(Z) - Z.offsetTop + (0, c.int)(G.paddingBottom) - (0, c.int)(W.marginBottom)
      }
    }
    return (0, c.isNum)(B.right) && (E = Math.min(E, B.right)), (0, c.isNum)(B.bottom) && (R = Math.min(R, B.bottom)), (0, c.isNum)(B.left) && (E = Math.max(E, B.left)), (0, c.isNum)(B.top) && (R = Math.max(R, B.top)), [E, R]
  }

  function s(C, E, R) {
    const B = Math.round(E / C[0]) * C[0],
      Z = Math.round(R / C[1]) * C[1];
    return [B, Z]
  }

  function m(C) {
    return C.props.axis === "both" || C.props.axis === "x"
  }

  function v(C) {
    return C.props.axis === "both" || C.props.axis === "y"
  }

  function x(C, E, R) {
    const B = typeof E == "number" ? (0, r.getTouch)(C, E) : null;
    if (typeof E == "number" && !B) return null;
    const Z = D(R),
      w = R.props.offsetParent || Z.offsetParent || Z.ownerDocument.body;
    return (0, r.offsetXYFromParent)(B || C, w, R.props.scale)
  }

  function j(C, E, R) {
    const B = !(0, c.isNum)(C.lastX),
      Z = D(C);
    return B ? {
      node: Z,
      deltaX: 0,
      deltaY: 0,
      lastX: E,
      lastY: R,
      x: E,
      y: R
    } : {
      node: Z,
      deltaX: E - C.lastX,
      deltaY: R - C.lastY,
      lastX: C.lastX,
      lastY: C.lastY,
      x: E,
      y: R
    }
  }

  function S(C, E) {
    const R = C.props.scale;
    return {
      node: E.node,
      x: C.state.x + E.deltaX / R,
      y: C.state.y + E.deltaY / R,
      deltaX: E.deltaX / R,
      deltaY: E.deltaY / R,
      lastX: C.state.x,
      lastY: C.state.y
    }
  }

  function g(C) {
    return {
      left: C.left,
      top: C.top,
      right: C.right,
      bottom: C.bottom
    }
  }

  function D(C) {
    const E = C.findDOMNode();
    if (!E) throw new Error("<DraggableCore>: Unmounted during event!");
    return E
  }
  return Ye
}
var Xn = {},
  si = {},
  uh;

function Sh() {
  if (uh) return si;
  uh = 1, Object.defineProperty(si, "__esModule", {
    value: !0
  }), si.default = c;

  function c() {}
  return si
}
var ih;

function pv() {
  if (ih) return Xn;
  ih = 1, Object.defineProperty(Xn, "__esModule", {
    value: !0
  }), Xn.default = void 0;
  var c = S(Vn()),
    r = j(Zs()),
    d = j(Qs()),
    s = Vs(),
    m = ph(),
    v = ri(),
    x = j(Sh());

  function j(Z) {
    return Z && Z.__esModule ? Z : {
      default: Z
    }
  }

  function S(Z, w) {
    if (typeof WeakMap == "function") var O = new WeakMap,
      q = new WeakMap;
    return (S = function(K, W) {
      if (!W && K && K.__esModule) return K;
      var G, F, M = {
        __proto__: null,
        default: K
      };
      if (K === null || typeof K != "object" && typeof K != "function") return M;
      if (G = W ? q : O) {
        if (G.has(K)) return G.get(K);
        G.set(K, M)
      }
      for (const L in K) L !== "default" && {}.hasOwnProperty.call(K, L) && ((F = (G = Object.defineProperty) && Object.getOwnPropertyDescriptor(K, L)) && (F.get || F.set) ? G(M, L, F) : M[L] = K[L]);
      return M
    })(Z, w)
  }

  function g(Z, w, O) {
    return (w = D(w)) in Z ? Object.defineProperty(Z, w, {
      value: O,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : Z[w] = O, Z
  }

  function D(Z) {
    var w = C(Z, "string");
    return typeof w == "symbol" ? w : w + ""
  }

  function C(Z, w) {
    if (typeof Z != "object" || !Z) return Z;
    var O = Z[Symbol.toPrimitive];
    if (O !== void 0) {
      var q = O.call(Z, w);
      if (typeof q != "object") return q;
      throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (w === "string" ? String : Number)(Z)
  }
  const E = {
    touch: {
      start: "touchstart",
      move: "touchmove",
      stop: "touchend"
    },
    mouse: {
      start: "mousedown",
      move: "mousemove",
      stop: "mouseup"
    }
  };
  let R = E.mouse,
    B = class extends c.Component {
      constructor() {
        super(...arguments), g(this, "dragging", !1), g(this, "lastX", NaN), g(this, "lastY", NaN), g(this, "touchIdentifier", null), g(this, "mounted", !1), g(this, "handleDragStart", w => {
          if (this.props.onMouseDown(w), !this.props.allowAnyClick && typeof w.button == "number" && w.button !== 0) return !1;
          const O = this.findDOMNode();
          if (!O || !O.ownerDocument || !O.ownerDocument.body) throw new Error("<DraggableCore> not mounted on DragStart!");
          const {
            ownerDocument: q
          } = O;
          if (this.props.disabled || !(w.target instanceof q.defaultView.Node) || this.props.handle && !(0, s.matchesSelectorAndParentsTo)(w.target, this.props.handle, O) || this.props.cancel && (0, s.matchesSelectorAndParentsTo)(w.target, this.props.cancel, O)) return;
          w.type === "touchstart" && !this.props.allowMobileScroll && w.preventDefault();
          const K = (0, s.getTouchIdentifier)(w);
          this.touchIdentifier = K;
          const W = (0, m.getControlPosition)(w, K, this);
          if (W == null) return;
          const {
            x: G,
            y: F
          } = W, M = (0, m.createCoreData)(this, G, F);
          (0, x.default)("DraggableCore: handleDragStart: %j", M), (0, x.default)("calling", this.props.onStart), !(this.props.onStart(w, M) === !1 || this.mounted === !1) && (this.props.enableUserSelectHack && (0, s.addUserSelectStyles)(q), this.dragging = !0, this.lastX = G, this.lastY = F, (0, s.addEvent)(q, R.move, this.handleDrag), (0, s.addEvent)(q, R.stop, this.handleDragStop))
        }), g(this, "handleDrag", w => {
          const O = (0, m.getControlPosition)(w, this.touchIdentifier, this);
          if (O == null) return;
          let {
            x: q,
            y: K
          } = O;
          if (Array.isArray(this.props.grid)) {
            let F = q - this.lastX,
              M = K - this.lastY;
            if ([F, M] = (0, m.snapToGrid)(this.props.grid, F, M), !F && !M) return;
            q = this.lastX + F, K = this.lastY + M
          }
          const W = (0, m.createCoreData)(this, q, K);
          if ((0, x.default)("DraggableCore: handleDrag: %j", W), this.props.onDrag(w, W) === !1 || this.mounted === !1) {
            try {
              this.handleDragStop(new MouseEvent("mouseup"))
            } catch {
              const M = document.createEvent("MouseEvents");
              M.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), this.handleDragStop(M)
            }
            return
          }
          this.lastX = q, this.lastY = K
        }), g(this, "handleDragStop", w => {
          if (!this.dragging) return;
          const O = (0, m.getControlPosition)(w, this.touchIdentifier, this);
          if (O == null) return;
          let {
            x: q,
            y: K
          } = O;
          if (Array.isArray(this.props.grid)) {
            let M = q - this.lastX || 0,
              L = K - this.lastY || 0;
            [M, L] = (0, m.snapToGrid)(this.props.grid, M, L), q = this.lastX + M, K = this.lastY + L
          }
          const W = (0, m.createCoreData)(this, q, K);
          if (this.props.onStop(w, W) === !1 || this.mounted === !1) return !1;
          const F = this.findDOMNode();
          F && this.props.enableUserSelectHack && (0, s.scheduleRemoveUserSelectStyles)(F.ownerDocument), (0, x.default)("DraggableCore: handleDragStop: %j", W), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, F && ((0, x.default)("DraggableCore: Removing handlers"), (0, s.removeEvent)(F.ownerDocument, R.move, this.handleDrag), (0, s.removeEvent)(F.ownerDocument, R.stop, this.handleDragStop))
        }), g(this, "onMouseDown", w => (R = E.mouse, this.handleDragStart(w))), g(this, "onMouseUp", w => (R = E.mouse, this.handleDragStop(w))), g(this, "onTouchStart", w => (R = E.touch, this.handleDragStart(w))), g(this, "onTouchEnd", w => (R = E.touch, this.handleDragStop(w)))
      }
      componentDidMount() {
        this.mounted = !0;
        const w = this.findDOMNode();
        w && (0, s.addEvent)(w, E.touch.start, this.onTouchStart, {
          passive: !1
        })
      }
      componentWillUnmount() {
        this.mounted = !1;
        const w = this.findDOMNode();
        if (w) {
          const {
            ownerDocument: O
          } = w;
          (0, s.removeEvent)(O, E.mouse.move, this.handleDrag), (0, s.removeEvent)(O, E.touch.move, this.handleDrag), (0, s.removeEvent)(O, E.mouse.stop, this.handleDragStop), (0, s.removeEvent)(O, E.touch.stop, this.handleDragStop), (0, s.removeEvent)(w, E.touch.start, this.onTouchStart, {
            passive: !1
          }), this.props.enableUserSelectHack && (0, s.scheduleRemoveUserSelectStyles)(O)
        }
      }
      findDOMNode() {
        var w, O, q;
        return (w = this.props) != null && w.nodeRef ? (q = (O = this.props) == null ? void 0 : O.nodeRef) == null ? void 0 : q.current : d.default.findDOMNode(this)
      }
      render() {
        return c.cloneElement(c.Children.only(this.props.children), {
          onMouseDown: this.onMouseDown,
          onMouseUp: this.onMouseUp,
          onTouchEnd: this.onTouchEnd
        })
      }
    };
  return Xn.default = B, g(B, "displayName", "DraggableCore"), g(B, "propTypes", {
    allowAnyClick: r.default.bool,
    allowMobileScroll: r.default.bool,
    children: r.default.node.isRequired,
    disabled: r.default.bool,
    enableUserSelectHack: r.default.bool,
    offsetParent: function(Z, w) {
      if (Z[w] && Z[w].nodeType !== 1) throw new Error("Draggable's offsetParent must be a DOM Node.")
    },
    grid: r.default.arrayOf(r.default.number),
    handle: r.default.string,
    cancel: r.default.string,
    nodeRef: r.default.object,
    onStart: r.default.func,
    onDrag: r.default.func,
    onStop: r.default.func,
    onMouseDown: r.default.func,
    scale: r.default.number,
    className: v.dontSetMe,
    style: v.dontSetMe,
    transform: v.dontSetMe
  }), g(B, "defaultProps", {
    allowAnyClick: !1,
    allowMobileScroll: !1,
    disabled: !1,
    enableUserSelectHack: !0,
    onStart: function() {},
    onDrag: function() {},
    onStop: function() {},
    onMouseDown: function() {},
    scale: 1
  }), Xn
}
var ch;

function Sv() {
  return ch || (ch = 1, function(c) {
    Object.defineProperty(c, "__esModule", {
      value: !0
    }), Object.defineProperty(c, "DraggableCore", {
      enumerable: !0,
      get: function() {
        return S.default
      }
    }), c.default = void 0;
    var r = C(Vn()),
      d = D(Zs()),
      s = D(Qs()),
      m = vv(),
      v = Vs(),
      x = ph(),
      j = ri(),
      S = D(pv()),
      g = D(Sh());

    function D(O) {
      return O && O.__esModule ? O : {
        default: O
      }
    }

    function C(O, q) {
      if (typeof WeakMap == "function") var K = new WeakMap,
        W = new WeakMap;
      return (C = function(G, F) {
        if (!F && G && G.__esModule) return G;
        var M, L, $ = {
          __proto__: null,
          default: G
        };
        if (G === null || typeof G != "object" && typeof G != "function") return $;
        if (M = F ? W : K) {
          if (M.has(G)) return M.get(G);
          M.set(G, $)
        }
        for (const st in G) st !== "default" && {}.hasOwnProperty.call(G, st) && ((L = (M = Object.defineProperty) && Object.getOwnPropertyDescriptor(G, st)) && (L.get || L.set) ? M($, st, L) : $[st] = G[st]);
        return $
      })(O, q)
    }

    function E() {
      return E = Object.assign ? Object.assign.bind() : function(O) {
        for (var q = 1; q < arguments.length; q++) {
          var K = arguments[q];
          for (var W in K)({}).hasOwnProperty.call(K, W) && (O[W] = K[W])
        }
        return O
      }, E.apply(null, arguments)
    }

    function R(O, q, K) {
      return (q = B(q)) in O ? Object.defineProperty(O, q, {
        value: K,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : O[q] = K, O
    }

    function B(O) {
      var q = Z(O, "string");
      return typeof q == "symbol" ? q : q + ""
    }

    function Z(O, q) {
      if (typeof O != "object" || !O) return O;
      var K = O[Symbol.toPrimitive];
      if (K !== void 0) {
        var W = K.call(O, q);
        if (typeof W != "object") return W;
        throw new TypeError("@@toPrimitive must return a primitive value.")
      }
      return (q === "string" ? String : Number)(O)
    }
    class w extends r.Component {
      static getDerivedStateFromProps(q, K) {
        let {
          position: W
        } = q, {
          prevPropsPosition: G
        } = K;
        return W && (!G || W.x !== G.x || W.y !== G.y) ? ((0, g.default)("Draggable: getDerivedStateFromProps %j", {
          position: W,
          prevPropsPosition: G
        }), {
          x: W.x,
          y: W.y,
          prevPropsPosition: {
            ...W
          }
        }) : null
      }
      constructor(q) {
        super(q), R(this, "onDragStart", (K, W) => {
          if ((0, g.default)("Draggable: onDragStart: %j", W), this.props.onStart(K, (0, x.createDraggableData)(this, W)) === !1) return !1;
          this.setState({
            dragging: !0,
            dragged: !0
          })
        }), R(this, "onDrag", (K, W) => {
          if (!this.state.dragging) return !1;
          (0, g.default)("Draggable: onDrag: %j", W);
          const G = (0, x.createDraggableData)(this, W),
            F = {
              x: G.x,
              y: G.y,
              slackX: 0,
              slackY: 0
            };
          if (this.props.bounds) {
            const {
              x: L,
              y: $
            } = F;
            F.x += this.state.slackX, F.y += this.state.slackY;
            const [st, ct] = (0, x.getBoundPosition)(this, F.x, F.y);
            F.x = st, F.y = ct, F.slackX = this.state.slackX + (L - F.x), F.slackY = this.state.slackY + ($ - F.y), G.x = F.x, G.y = F.y, G.deltaX = F.x - this.state.x, G.deltaY = F.y - this.state.y
          }
          if (this.props.onDrag(K, G) === !1) return !1;
          this.setState(F)
        }), R(this, "onDragStop", (K, W) => {
          if (!this.state.dragging || this.props.onStop(K, (0, x.createDraggableData)(this, W)) === !1) return !1;
          (0, g.default)("Draggable: onDragStop: %j", W);
          const F = {
            dragging: !1,
            slackX: 0,
            slackY: 0
          };
          if (!!this.props.position) {
            const {
              x: L,
              y: $
            } = this.props.position;
            F.x = L, F.y = $
          }
          this.setState(F)
        }), this.state = {
          dragging: !1,
          dragged: !1,
          x: q.position ? q.position.x : q.defaultPosition.x,
          y: q.position ? q.position.y : q.defaultPosition.y,
          prevPropsPosition: {
            ...q.position
          },
          slackX: 0,
          slackY: 0,
          isElementSVG: !1
        }, q.position && !(q.onDrag || q.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.")
      }
      componentDidMount() {
        typeof window.SVGElement < "u" && this.findDOMNode() instanceof window.SVGElement && this.setState({
          isElementSVG: !0
        })
      }
      componentWillUnmount() {
        this.state.dragging && this.setState({
          dragging: !1
        })
      }
      findDOMNode() {
        var q, K;
        return ((K = (q = this.props) == null ? void 0 : q.nodeRef) == null ? void 0 : K.current) ?? s.default.findDOMNode(this)
      }
      render() {
        const {
          axis: q,
          bounds: K,
          children: W,
          defaultPosition: G,
          defaultClassName: F,
          defaultClassNameDragging: M,
          defaultClassNameDragged: L,
          position: $,
          positionOffset: st,
          scale: ct,
          ...vt
        } = this.props;
        let bt = {},
          Tt = null;
        const z = !!!$ || this.state.dragging,
          J = $ || G,
          lt = {
            x: (0, x.canDragX)(this) && z ? this.state.x : J.x,
            y: (0, x.canDragY)(this) && z ? this.state.y : J.y
          };
        this.state.isElementSVG ? Tt = (0, v.createSVGTransform)(lt, st) : bt = (0, v.createCSSTransform)(lt, st);
        const yt = (0, m.clsx)(W.props.className || "", F, {
          [M]: this.state.dragging,
          [L]: this.state.dragged
        });
        return r.createElement(S.default, E({}, vt, {
          onStart: this.onDragStart,
          onDrag: this.onDrag,
          onStop: this.onDragStop
        }), r.cloneElement(r.Children.only(W), {
          className: yt,
          style: {
            ...W.props.style,
            ...bt
          },
          transform: Tt
        }))
      }
    }
    c.default = w, R(w, "displayName", "Draggable"), R(w, "propTypes", {
      ...S.default.propTypes,
      axis: d.default.oneOf(["both", "x", "y", "none"]),
      bounds: d.default.oneOfType([d.default.shape({
        left: d.default.number,
        right: d.default.number,
        top: d.default.number,
        bottom: d.default.number
      }), d.default.string, d.default.oneOf([!1])]),
      defaultClassName: d.default.string,
      defaultClassNameDragging: d.default.string,
      defaultClassNameDragged: d.default.string,
      defaultPosition: d.default.shape({
        x: d.default.number,
        y: d.default.number
      }),
      positionOffset: d.default.shape({
        x: d.default.oneOfType([d.default.number, d.default.string]),
        y: d.default.oneOfType([d.default.number, d.default.string])
      }),
      position: d.default.shape({
        x: d.default.number,
        y: d.default.number
      }),
      className: j.dontSetMe,
      style: j.dontSetMe,
      transform: j.dontSetMe
    }), R(w, "defaultProps", {
      ...S.default.defaultProps,
      axis: "both",
      bounds: !1,
      defaultClassName: "react-draggable",
      defaultClassNameDragging: "react-draggable-dragging",
      defaultClassNameDragged: "react-draggable-dragged",
      defaultPosition: {
        x: 0,
        y: 0
      },
      scale: 1
    })
  }(qs)), qs
}
var sh;

function bv() {
  if (sh) return Bn.exports;
  sh = 1;
  const {
    default: c,
    DraggableCore: r
  } = Sv();
  return Bn.exports = c, Bn.exports.default = c, Bn.exports.DraggableCore = r, Bn.exports
}
var Tv = bv();
const Ha = fi(Tv),
  oh = c => {
    const r = new Date;
    let d, s;
    switch (c) {
      case "week":
        const x = new Date(r);
        x.setDate(r.getDate() - r.getDay()), d = new Date(x.setHours(0, 0, 0, 0)), s = new Date(d), s.setDate(d.getDate() + 7);
        break;
      case "month":
        d = new Date(r.getFullYear(), r.getMonth(), 1), s = new Date(r.getFullYear(), r.getMonth() + 1, 1);
        break;
      case "year":
        d = new Date(r.getFullYear(), 0, 1), s = new Date(r.getFullYear() + 1, 0, 1);
        break;
      case "day":
      default:
        d = new Date, d.setHours(0, 0, 0, 0), s = new Date, s.setHours(24, 0, 0, 0);
        break
    }
    const m = r.getTime() - d.getTime(),
      v = s.getTime() - d.getTime();
    return m / v * 100
  };

function xv({
  widgetRef: c,
  allWidgetRefs: r
}) {
  const {
    progressMode: d,
    widgetPositions: s,
    updateWidgetPosition: m
  } = Ce(), [v, x] = U.useState(oh(d));
  U.useEffect(() => {
    const S = setInterval(() => {
      x(oh(d))
    }, 1e3);
    return () => clearInterval(S)
  }, [d]);
  const j = (S, g) => {
    m("dayProgress", {
      x: g.x,
      y: g.y
    }, r)
  };
  return f.jsx(Ha, {
    nodeRef: c,
    handle: ".widget-drag-handle",
    position: s.dayProgress,
    onStop: j,
    bounds: "body",
    children: f.jsxs("div", {
      ref: c,
      className: "widget-container progress-bar-widget floating-widget",
      children: [f.jsxs("div", {
        className: "widget-header day-progress-header",
        children: [f.jsxs("h4", {
          className: "widget-title",
          children: [d, " Progress"]
        }), f.jsx("img", {
          src: qa,
          alt: "drag",
          className: "widget-drag-handle",
          draggable: "false"
        })]
      }), f.jsxs("div", {
        className: "linear-progress-container",
        children: [f.jsx("div", {
          className: "linear-progress-bar",
          children: f.jsx("div", {
            className: "linear-progress-bar__fill",
            style: {
              width: `${v}%`
            }
          })
        }), f.jsxs("span", {
          className: "linear-progress-text",
          children: [v.toFixed(2), "%"]
        })]
      })]
    })
  })
}
const Ot = (c, r) => {
  const d = localStorage.getItem(c);
  if (d === null) return r;
  if (typeof r == "boolean") return d === "true";
  if (r !== null && typeof r == "object" && d) try {
    return JSON.parse(d)
  } catch (s) {
    return console.error("Error parsing localStorage item:", c, s), r
  }
  return d || r
};

function Nv({
  widgetRef: c,
  allWidgetRefs: r
}) {
  var D, C;
  const {
    widgetPositions: d,
    updateWidgetPosition: s,
    playerState: m,
    togglePlayPause: v,
    nextTrack: x,
    prevTrack: j,
    setVolume: S
  } = Ce();
  U.useEffect(() => {
    Ot("lofiPlayerState", {}).isPlaying && (console.log("Attempting to auto-resume playback..."), Ct.play())
  }, []);
  const g = (E, R) => {
    s("lofiPlayer", {
      x: R.x,
      y: R.y
    }, r)
  };
  return f.jsx(Ha, {
    nodeRef: c,
    handle: ".widget-drag-handle",
    position: d.lofiPlayer,
    onStop: g,
    bounds: "body",
    children: f.jsxs("div", {
      ref: c,
      id: "lofi-player-widget",
      className: "lofi-player-widget floating-widget",
      children: [f.jsxs("div", {
        className: "widget-header",
        children: [f.jsx("h4", {
          className: "widget-title",
          title: (D = m.currentTrack) == null ? void 0 : D.name,
          children: ((C = m.currentTrack) == null ? void 0 : C.name) || "Lofi Beats"
        }), f.jsx("img", {
          src: qa,
          alt: "drag",
          className: "widget-drag-handle",
          draggable: "false"
        })]
      }), f.jsxs("div", {
        className: "lofi-player-controls",
        children: [f.jsx("button", {
          onClick: j,
          className: "lofi-control-btn",
          children: f.jsx("img", {
            src: Bv,
            alt: "Previous"
          })
        }), f.jsx("button", {
          onClick: v,
          className: "lofi-control-btn play-pause-btn",
          children: f.jsx("img", {
            src: m.isPlaying ? qv : Hv,
            alt: "Play/Pause"
          })
        }), f.jsx("button", {
          onClick: x,
          className: "lofi-control-btn",
          children: f.jsx("img", {
            src: Yv,
            alt: "Next"
          })
        })]
      }), f.jsx("div", {
        className: "lofi-volume-control",
        children: f.jsx("input", {
          type: "range",
          min: "0",
          max: "1",
          step: "0.01",
          value: m.volume ?? .3,
          onChange: E => S(E.target.value),
          className: "volume-slider"
        })
      })]
    })
  })
}

function bh(c, r) {
  U.useEffect(() => {
    const d = s => {
      !c.current || c.current.contains(s.target) || r(s)
    };
    return document.addEventListener("mousedown", d), document.addEventListener("touchstart", d), () => {
      document.removeEventListener("mousedown", d), document.removeEventListener("touchstart", d)
    }
  }, [c, r])
}

function Ev({
  widgetRef: c,
  allWidgetRefs: r
}) {
  const {
    widgetPositions: d,
    updateWidgetPosition: s
  } = Ce(), [m, v] = U.useState(""), [x, j] = U.useState([]), [S, g] = U.useState(-1);
  bh(c, () => {
    x.length > 0 && j([])
  }), U.useEffect(() => {
    if (m.trim() === "") {
      j([]);
      return
    }
    const B = setTimeout(async () => {
      const w = `https://www.google.com/complete/search?client=firefox&q=${encodeURIComponent(m)}`;
      try {
        const O = await fetch(w);
        if (!O.ok) throw new Error("Network response was not ok");
        const q = await O.json();
        j(q[1] || [])
      } catch (O) {
        console.error("Failed to fetch suggestions:", O), j([])
      }
    }, 200);
    return () => clearTimeout(B)
  }, [m]);
  const D = R => {
      R.trim() && (window.chrome && window.chrome.search ? (console.log("SUCCESS: chrome.search API is available. Using it."), chrome.search.query({
        text: R,
        disposition: "CURRENT_TAB"
      })) : (console.log("chrome.search API not available."), alert("This is a Chrome-Only Feature :)")), v(""), j([]))
    },
    C = R => {
      if (R.key === "ArrowDown") R.preventDefault(), g(B => B < x.length - 1 ? B + 1 : B);
      else if (R.key === "ArrowUp") R.preventDefault(), g(B => B > 0 ? B - 1 : 0);
      else if (R.key === "Enter") {
        R.preventDefault();
        const B = S > -1 ? x[S] : m;
        D(B)
      } else R.key === "Escape" && j([])
    },
    E = (R, B) => {
      s("search", {
        x: B.x,
        y: B.y
      }, r)
    };
  return f.jsx(Ha, {
    nodeRef: c,
    handle: ".widget-drag-handle",
    position: d.search,
    onStop: E,
    bounds: "body",
    children: f.jsxs("div", {
      ref: c,
      className: "widget-container search-widget floating-widget",
      children: [f.jsxs("div", {
        className: "search-input-container",
        children: [f.jsx("img", {
          src: jv,
          alt: "Google",
          className: "search-icon"
        }), f.jsx("input", {
          type: "text",
          className: "search-input",
          placeholder: "Search the internet",
          value: m,
          onChange: R => v(R.target.value),
          onKeyDown: C,
          onFocus: () => g(-1),
          autoComplete: "off"
        }), f.jsx("img", {
          src: qa,
          alt: "drag",
          className: "widget-drag-handle",
          draggable: "false"
        })]
      }), x.length > 0 && f.jsx("ul", {
        className: "suggestions-list",
        children: x.map((R, B) => f.jsxs("li", {
          className: `suggestion-item ${B===S?"active":""}`,
          onMouseDown: () => D(R),
          children: [f.jsx("span", {
            className: "suggestion-text",
            children: R
          }), f.jsx("img", {
            src: Ov,
            alt: "search",
            className: "suggestion-icon"
          })]
        }, B))
      })]
    })
  })
}

function Dv({
  widgetRef: c,
  allWidgetRefs: r
}) {
  const {
    widgetPositions: d,
    updateWidgetPosition: s,
    stickyNoteContent: m,
    updateStickyNoteContent: v
  } = Ce(), x = (S, g) => {
    s("stickyNote", {
      x: g.x,
      y: g.y
    }, r)
  }, j = async () => {
    try {
      const S = await navigator.clipboard.readText();
      v(m + S)
    } catch (S) {
      console.error("Failed to paste from clipboard:", S)
    }
  };
  return f.jsx(Ha, {
    nodeRef: c,
    handle: ".widget-drag-handle",
    position: d.stickyNote,
    onStop: x,
    bounds: "body",
    children: f.jsxs("div", {
      ref: c,
      className: "widget-container sticky-note-widget floating-widget",
      children: [f.jsxs("div", {
        className: "widget-header sticky-note-header",
        children: [f.jsx("h4", {
          className: "widget-title",
          children: "Sticky Note"
        }), f.jsxs("div", {
          className: "widget-header-controls",
          children: [f.jsx("button", {
            onClick: j,
            className: "widget-icon-btn",
            title: "Paste",
            children: f.jsx("img", {
              src: Nh,
              alt: "Paste"
            })
          }), f.jsx("img", {
            src: qa,
            alt: "drag",
            className: "widget-drag-handle",
            draggable: "false"
          })]
        })]
      }), f.jsx("textarea", {
        className: "sticky-note-textarea",
        value: m,
        onChange: S => v(S.target.value),
        placeholder: "Type your notes here..."
      })]
    })
  })
}

function _v({
  todo: c
}) {
  const {
    toggleTodoCompleted: r,
    updateTodoText: d,
    deleteTodo: s
  } = Ce(), [m, v] = U.useState(!1), [x, j] = U.useState(c.text), S = U.useRef(null);
  U.useEffect(() => {
    if (m && S.current) {
      const E = S.current;
      E.focus();
      const R = E.value.length;
      E.setSelectionRange(R, R)
    }
  }, [m]);
  const g = E => {
      E.target.classList.contains("todo-text") && !m && v(!0)
    },
    D = () => {
      v(!1), d(c.id, x)
    },
    C = E => {
      E.key === "Enter" ? D() : E.key === "Escape" && (j(c.text), v(!1))
    };
  return f.jsxs("div", {
    className: `todo-item ${c.completed?"completed":""}`,
    onClick: g,
    children: [f.jsxs("label", {
      className: "todo-checkbox-label",
      children: [f.jsx("input", {
        type: "checkbox",
        className: "todo-checkbox-hidden",
        checked: c.completed,
        onChange: () => r(c.id)
      }), f.jsx("span", {
        className: "todo-checkbox-custom"
      })]
    }), m ? f.jsx("input", {
      ref: S,
      type: "text",
      className: "todo-edit-input",
      value: x,
      onChange: E => j(E.target.value),
      onBlur: D,
      onKeyDown: C
    }) : f.jsx("span", {
      className: "todo-text",
      children: c.text
    }), f.jsx("button", {
      className: "delete-todo-btn",
      onClick: () => s(c.id),
      children: "×"
    })]
  })
}

function Av({
  widgetRef: c,
  allWidgetRefs: r
}) {
  const {
    todos: d,
    addTodo: s,
    widgetPositions: m,
    updateWidgetPosition: v
  } = Ce(), [x, j] = U.useState(""), S = D => {
    D.key === "Enter" && (D.preventDefault(), s(x), j(""))
  }, g = (D, C) => {
    v("todo", {
      x: C.x,
      y: C.y
    }, r)
  };
  return f.jsx(Ha, {
    nodeRef: c,
    handle: ".widget-drag-handle",
    position: m.todo,
    onStop: g,
    bounds: "body",
    children: f.jsxs("div", {
      ref: c,
      className: "widget-container todo-widget floating-widget",
      children: [f.jsxs("div", {
        className: "widget-header",
        children: [f.jsx("h4", {
          className: "widget-title",
          children: "To-Do List"
        }), f.jsx("img", {
          src: qa,
          alt: "drag",
          className: "widget-drag-handle",
          draggable: "false"
        })]
      }), f.jsxs("div", {
        className: "todo-list",
        children: [d.map(D => f.jsx(_v, {
          todo: D
        }, D.id)), f.jsxs("div", {
          className: "add-todo-item",
          children: [f.jsx("span", {
            className: "add-todo-plus",
            children: "+"
          }), f.jsx("input", {
            type: "text",
            className: "add-todo-input",
            placeholder: "Add a to-do...",
            value: x,
            onChange: D => j(D.target.value),
            onKeyDown: S
          })]
        })]
      })]
    })
  })
}
const Ua = {
    lavender: {
      name: "Lavender",
      color: "#E5D4F4",
      cssClass: "lavender"
    },
    sunbeam: {
      name: "Sunbeam",
      color: "#FCEAC6",
      cssClass: "sunbeam"
    },
    meadow: {
      name: "Meadow",
      color: "#c2d6b1",
      cssClass: "meadow"
    },
    pearl: {
      name: "Pearl",
      color: "#F9DCD8",
      cssClass: "pearl"
    },
    aqua: {
      name: "Aqua",
      color: "#a3cfd6",
      cssClass: "aqua"
    },
    mist: {
      name: "Mist",
      color: "#dedede",
      cssClass: "mist"
    },
    forest: {
      name: "Forest",
      color: "#A0CFA0",
      cssClass: "forest"
    },
    periwinkle: {
      name: "Periwinkle",
      color: "#CCCCFF",
      cssClass: "periwinkle"
    },
    auraIndigo: {
      name: "Aura Indigo",
      color: "#b0a6df",
      cssClass: "auraIndigo"
    },
    vanilla: {
      name: "Vanilla",
      color: "#ffebaf",
      cssClass: "vanilla"
    },
    softJade: {
      name: "Soft Jade",
      color: "#abd1c6",
      cssClass: "softJade"
    },
    peppermintPink: {
      name: "Peppermint Pink",
      color: "#f6c6c2",
      cssClass: "peppermintPink"
    }
  },
  jv = "/system/google-icon.svg",
  qa = "/system/drag-handle.svg",
  Ov = "/system/suggestion-arrow.svg",
  Th = [{
    value: "groovy",
    label: "Groovy",
    fontFamily: "FontEugusto",
    fontWeight: "400"
  }, {
    value: "bright",
    label: "Bright",
    fontFamily: "FontAugillion",
    fontWeight: "400"
  }, {
    value: "Dystopia",
    label: "Dystopia",
    fontFamily: "FontBrulia",
    fontWeight: "400"
  }, {
    value: "adventuro",
    label: "Velvette",
    fontFamily: "FontAdventuro",
    fontWeight: "400"
  }, {
    value: "classic",
    label: "Archivist",
    fontFamily: "FontAmericanTypewriter",
    fontWeight: "400"
  }, {
    value: "modern_serif",
    label: "News",
    fontFamily: "FontInstrumentSerif",
    fontWeight: "400",
    fontSize: "5rem"
  }, {
    value: "rounded",
    label: "Rounded",
    fontFamily: "FontArialRounded",
    fontWeight: "400"
  }, {
    value: "Subtle",
    label: "Subtle",
    fontFamily: "FontBricolage",
    fontWeight: "500"
  }, {
    value: "redacted",
    label: "Redacted",
    fontFamily: "FontRedaction",
    fontWeight: "400"
  }, {
    value: "calligraphy",
    label: "Luxe",
    fontFamily: "FontBethany",
    fontWeight: "400"
  }, {
    value: "retro",
    label: "Retro",
    fontFamily: "FontBurgess",
    fontWeight: "400"
  }, {
    value: "vintage",
    label: "Vintage",
    fontFamily: "FontStarVintage",
    fontWeight: "400"
  }, {
    value: "stencil",
    label: "Relic",
    fontFamily: "FontCaesar",
    fontWeight: "400"
  }, {
    value: "powerpuff",
    label: "SugarPop",
    fontFamily: "FontPowerpuff",
    fontWeight: "400",
    fontSize: "3rem"
  }, {
    value: "Gumdrop",
    label: "Bubble",
    fontFamily: "FontChoret",
    fontWeight: "400"
  }, {
    value: "pixel",
    label: "Pixel",
    fontFamily: "FontMinecraft",
    fontWeight: "400"
  }, {
    value: "mono",
    label: "NeoMono",
    fontFamily: "FontSpaceMono",
    fontWeight: "400",
    letterSpacing: "-4px"
  }, {
    value: "digital",
    label: "Digi",
    fontFamily: "FontDigital",
    fontWeight: "400",
    fontSize: "5rem"
  }],
  Mv = [{
    name: "chatgpt",
    url: "https://chatgpt.com",
    icon: "/Icons/chat.svg"
  }, {
    name: "youtube",
    url: "https://youtube.com",
    icon: "/Icons/yt.svg"
  }, {
    name: "Whatsapp",
    url: "https://web.whatsapp.com",
    icon: "/Icons/whatsapp.svg"
  }, {
    name: "gmail",
    url: "https://mail.google.com",
    icon: "/Icons/gmail.svg"
  }],
  xh = {
    "youtube.com": "/Icons/youtube.svg",
    "chatgpt.com": "/Icons/chat.svg",
    "mail.google.com": "/Icons/gmail.svg",
    "gmail.com": "/Icons/gmail.svg",
    "github.com": "/Icons/github.svg",
    "gemini.google.com": "/Icons/gemini.svg",
    "leetcode.com": "/Icons/leetcode.svg",
    "netflix.com": "/Icons/netflix.svg",
    "web.whatsapp.com": "/Icons/whatsapp.svg",
    "pinterest.com": "/Icons/pinterest.svg",
    "x.com": "/Icons/x.svg",
    "teams.microsoft.com": "/Icons/teams.svg",
    "linkedin.com": "/Icons/linkedin.svg",
    "reddit.com": "/Icons/reddit.svg",
    "facebook.com": "/Icons/facebook.svg",
    "canva.com": "/Icons/canva.svg",
    "google.com": "/Icons/google.svg",
    "codechef.com": "/Icons/codechef.svg",
    "codeforces.com": "/Icons/codeforces.svg",
    "tiktok.com": "/Icons/tiktok.svg",
    "edx.org": "/Icons/edx.svg",
    "instagram.com": "/Icons/instagram.svg",
    "drive.google.com": "/Icons/drive.svg",
    "coursera.org": "/Icons/coursera.svg"
  },
  Cv = "/system/aphros.png",
  Rv = "/system/link-external-new-window-open-svgrepo-com.svg",
  zv = "/system/report-issue-svgrepo-com.svg",
  wv = "/system/edit-icon.svg",
  Uv = (() => {
    const i = Math.floor(Math.random() * 20) + 1;
    return "/wallpaper/" + i + ".jpg"
  })(),
  Nh = "/system/paste-icon.svg",
  Bs = [{
    id: "todo",
    name: "To-Do List",
    component: Av
  }, {
    id: "search",
    name: "Quick Search",
    component: Ev
  }, {
    id: "dayProgress",
    name: "Progress Bar",
    component: xv
  }, {
    id: "stickyNote",
    name: "Sticky Note",
    component: Dv
  }, {
    id: "lofiPlayer",
    name: "Lofi Player",
    component: Nv
  }],
  Kl = [{
    src: "/lofi/peace.webm",
    name: "sepia"
  }, {
    src: "/lofi/allowed_to_pause.webm",
    name: "room 505"
  }, {
    src: "/lofi/calm.webm",
    name: "you came this far"
  }, {
    src: "/lofi/golden_wind.webm",
    name: "golden wind"
  }, {
    src: "/lofi/pink.webm",
    name: "pink pan"
  }, {
    src: "/lofi/river.webm",
    name: "a heart that won’t quit"
  }, {
    src: "/lofi/stillness.webm",
    name: "sunday loops"
  }, {
    src: "/lofi/suzume.webm",
    name: "doors keep appearing"
  }, {
    src: "/lofi/totoro.webm",
    name: "barefoot in the garden"
  }, {
    src: "/lofi/katawaredoki.webm",
    name: "slipped moment"
  }],
  Hv = "/system/play-icon.svg",
  qv = "/system/pause-icon.svg",
  Yv = "/system/next-icon.svg",
  Bv = "/system/prev-icon.svg",
  ae = new Audio;
ae.loop = !0;
const Xv = () => {
    const c = localStorage.getItem("lofiPlayerState");
    try {
      return c ? JSON.parse(c) : {}
    } catch {
      return {}
    }
  },
  Eh = Xv();
let tl = Eh.trackIndex ?? 0;
const Ct = {
  init: () => {
    ae.src = Kl[tl].src, ae.volume = Eh.volume ?? .3
  },
  saveState: () => {
    const c = {
      trackIndex: tl,
      volume: ae.volume
    };
    localStorage.setItem("lofiPlayerState", JSON.stringify(c))
  },
  play: () => {
    const c = ae.play();
    c && c.catch(r => console.log("Autoplay was prevented by browser. First interaction is needed."))
  },
  pause: () => ae.pause(),
  next: () => {
    tl = (tl + 1) % Kl.length, ae.src = Kl[tl].src, Ct.play()
  },
  prev: () => {
    tl = (tl - 1 + Kl.length) % Kl.length, ae.src = Kl[tl].src, Ct.play()
  },
  setVolume: c => {
    ae.volume = c
  },
  on: (c, r) => ae.addEventListener(c, r),
  off: (c, r) => ae.removeEventListener(c, r),
  get isPlaying() {
    return !ae.paused
  },
  get volume() {
    return ae.volume
  },
  get currentTrack() {
    return Kl[tl]
  }
};
ae.addEventListener("volumechange", Ct.saveState);
ae.addEventListener("loadeddata", Ct.saveState);
Ct.init();
const Dh = U.createContext(),
  Ce = () => U.useContext(Dh),
  fh = new Date;
fh.setDate(fh.getDate() + 7);
const Gv = [],
  Lv = {
    1: {
      x: window.innerWidth - 380,
      y: 220
    }
  },
  Qv = {
    todo: !0,
    search: !0,
    dayProgress: !0,
    stickyNote: !0,
    lofiPlayer: !0
  },
  Zv = [{
    id: 1,
    text: "install \u00C1phros",
    completed: !0
  }, {
    id: 2,
    text: "drink some water",
    completed: !1
  }, {
    id: 3,
    text: "drag the widgets",
    completed: !1
  }],
  Vv = {
    todo: {
      x: window.innerWidth - 380,
      y: 40
    },
    search: {
      x: window.innerWidth / 2 - 150,
      y: 90
    },
    dayProgress: {
      x: 40,
      y: 40
    },
    stickyNote: {
      x: 40,
      y: 160
    },
    lofiPlayer: {
      x: window.innerWidth / 2 - 100,
      y: window.innerHeight - 180
    }
  };

function Kv({
  children: c
}) {
  const [r, d] = U.useState(() => Ot("enabledWidgets", Qv)), [s, m] = U.useState(() => Ot("todos", Zv)), [v, x] = U.useState(() => Ot("widgetPositions", Vv)), [j, S] = U.useState(() => Ot("progressMode", "day")), [g, D] = U.useState(() => Ot("stickyNoteContent", "")), [C, E] = U.useState(() => Ot("isCountdownFeatureEnabled", !0)), [R, B] = U.useState(() => Ot("countdowns", Gv)), [Z, w] = U.useState(() => {
    const Y = Ot("countdownPositions", {});
    return {
      ...Lv,
      ...Y
    }
  });
  U.useEffect(() => {
    localStorage.setItem("enabledWidgets", JSON.stringify(r))
  }, [r]), U.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(s))
  }, [s]), U.useEffect(() => {
    localStorage.setItem("widgetPositions", JSON.stringify(v))
  }, [v]), U.useEffect(() => {
    localStorage.setItem("progressMode", j)
  }, [j]), U.useEffect(() => {
    localStorage.setItem("stickyNoteContent", g)
  }, [g]), U.useEffect(() => {
    localStorage.setItem("isCountdownFeatureEnabled", JSON.stringify(C))
  }, [C]), U.useEffect(() => {
    localStorage.setItem("countdowns", JSON.stringify(R))
  }, [R]), U.useEffect(() => {
    localStorage.setItem("countdownPositions", JSON.stringify(Z))
  }, [Z]);
  const O = Y => {
      d(k => ({
        ...k,
        [Y]: !k[Y]
      }))
    },
    q = Y => {
      if (!Y || !Y.trim()) return;
      const k = {
        id: Date.now(),
        text: Y.trim(),
        completed: !1
      };
      m(I => [...I, k])
    },
    K = Y => {
      m(k => k.filter(I => I.id !== Y))
    },
    W = Y => {
      m(k => k.map(I => I.id === Y ? {
        ...I,
        completed: !I.completed
      } : I))
    },
    G = (Y, k) => {
      if (!k || !k.trim()) {
        K(Y);
        return
      }
      m(I => I.map(at => at.id === Y ? {
        ...at,
        text: k.trim()
      } : at))
    },
    F = Y => {
      D(Y)
    },
    M = (Y, k) => {
      x(I => ({
        ...I,
        [Y]: {
          x: k.x,
          y: k.y
        }
      }))
    },
    L = () => {
      E(Y => !Y)
    },
    $ = Y => {
      const k = Date.now(),
        I = {
          ...Y,
          id: k,
          view: "overview",
          isEnabled: !0
        };
      B(at => [...at, I]), w(at => ({
        ...at,
        [k]: {
          x: 40,
          y: window.innerHeight - 200
        }
      }))
    },
    st = Y => {
      B(k => k.filter(I => I.id !== Y)), w(k => {
        const I = {
          ...k
        };
        return delete I[Y], I
      })
    },
    ct = Y => {
      B(k => k.map(I => I.id === Y ? {
        ...I,
        isEnabled: !I.isEnabled
      } : I))
    },
    vt = Y => {
      B(k => k.map(I => I.id === Y ? {
        ...I,
        view: I.view === "overview" ? "detailed" : "overview"
      } : I))
    },
    bt = (Y, k) => {
      w(I => ({
        ...I,
        [Y]: k
      }))
    },
    [Tt, ht] = U.useState({
      isPlaying: !1,
      volume: .3,
      currentTrack: null
    }),
    [z, J] = U.useState(() => Ot("lofiUserHasPaused", !1));
  U.useEffect(() => {
    const Y = () => {
      ht({
        isPlaying: Ct.isPlaying,
        volume: Ct.volume,
        currentTrack: Ct.currentTrack
      })
    };
    z || Ct.play(), Y();
    const k = () => {
      !z && Ct.isPlaying === !1 && Ct.play(), window.removeEventListener("click", k)
    };
    return window.addEventListener("click", k), Ct.on("play", Y), Ct.on("pause", Y), Ct.on("volumechange", Y), Ct.on("loadeddata", Y), () => {
      window.removeEventListener("click", k), Ct.off("play", Y), Ct.off("pause", Y), Ct.off("volumechange", Y), Ct.off("loadeddata", Y)
    }
  }, [z]);
  const lt = () => {
      Ct.isPlaying ? (Ct.pause(), J(!0), localStorage.setItem("lofiUserHasPaused", "true")) : (Ct.play(), J(!1), localStorage.setItem("lofiUserHasPaused", "false"))
    },
    yt = () => {
      Ct.next(), J(!1), localStorage.setItem("lofiUserHasPaused", "false")
    },
    y = () => {
      Ct.prev(), J(!1), localStorage.setItem("lofiUserHasPaused", "false")
    };
  U.useEffect(() => {
    localStorage.setItem("lofiVolume", Tt.volume)
  }, [Tt.volume]);
  const P = {
    enabledWidgets: r,
    toggleWidget: O,
    widgetPositions: v,
    updateWidgetPosition: M,
    todos: s,
    addTodo: q,
    deleteTodo: K,
    toggleTodoCompleted: W,
    updateTodoText: G,
    progressMode: j,
    setProgressMode: S,
    stickyNoteContent: g,
    updateStickyNoteContent: F,
    isCountdownFeatureEnabled: C,
    toggleCountdownFeature: L,
    countdowns: R,
    addCountdown: $,
    deleteCountdown: st,
    toggleCountdownEnabled: ct,
    toggleCountdownView: vt,
    countdownPositions: Z,
    updateCountdownPosition: bt,
    playerState: Tt,
    togglePlayPause: lt,
    nextTrack: yt,
    prevTrack: y,
    setVolume: Y => {
      Ct.setVolume(parseFloat(Y))
    }
  };
  return f.jsx(Dh.Provider, {
    value: P,
    children: c
  })
}
const rh = c => {
    const r = +new Date(c) - +new Date;
    let d = {};
    return r > 0 && (d = {
      days: Math.floor(r / (1e3 * 60 * 60 * 24)),
      hours: Math.floor(r / (1e3 * 60 * 60) % 24),
      minutes: Math.floor(r / 1e3 / 60 % 60),
      seconds: Math.floor(r / 1e3 % 60)
    }), d
  },
  dh = (c, r) => {
    const d = +new Date(c),
      s = +new Date(r),
      m = +new Date;
    if (m >= s) return 100;
    if (m < d) return 0;
    const v = s - d;
    return (m - d) / v * 100
  };

function kv({
  countdown: c,
  initialPosition: r
}) {
  const {
    deleteCountdown: d,
    toggleCountdownView: s,
    updateCountdownPosition: m
  } = Ce(), v = U.useRef(null), [x] = U.useState(c.startDate || new Date().toISOString()), [j, S] = U.useState(rh(c.endDate)), [g, D] = U.useState(dh(x, c.endDate));
  U.useEffect(() => {
    const R = setTimeout(() => {
      S(rh(c.endDate)), D(dh(x, c.endDate))
    }, 1e3);
    return () => clearTimeout(R)
  });
  const C = Object.keys(j).length === 0,
    E = (R, B) => {
      m(c.id, {
        x: B.x,
        y: B.y
      })
    };
  return f.jsx(Ha, {
    nodeRef: v,
    handle: ".widget-drag-handle",
    position: r,
    onStop: E,
    bounds: "body",
    children: f.jsxs("div", {
      ref: v,
      className: `widget-container countdown-widget floating-widget ${C?"ended":""}`,
      children: [f.jsxs("div", {
        className: "widget-header",
        children: [f.jsx("h4", {
          className: "widget-title",
          children: c.name
        }), f.jsxs("div", {
          className: "widget-header-controls",
          children: [!C && f.jsx("button", {
            onClick: () => s(c.id),
            className: "widget-text-btn",
            children: c.view === "overview" ? "Detailed" : "Simple"
          }), f.jsx("button", {
            onClick: () => d(c.id),
            className: "delete-countdown-btn",
            title: "Delete Countdown",
            children: "×"
          }), f.jsx("img", {
            src: qa,
            alt: "drag",
            className: "widget-drag-handle",
            draggable: "false"
          })]
        })]
      }), f.jsx("div", {
        className: "countdown-time-display",
        children: C ? f.jsx("span", {
          className: "countdown-ended-text",
          children: "The time has come!"
        }) : c.view === "overview" ? f.jsx("div", {
          className: "overview-view",
          children: j.days > 0 ? f.jsxs("div", {
            className: "overview-days",
            children: [f.jsx("span", {
              children: j.days
            }), f.jsxs("small", {
              children: ["Day", j.days > 1 ? "s" : "", " Left"]
            })]
          }) : f.jsxs("div", {
            className: "overview-hours-minutes",
            children: [f.jsxs("span", {
              children: [String(j.hours).padStart(2, "0"), ":", String(j.minutes).padStart(2, "0")]
            }), f.jsx("small", {
              children: "Hours Left"
            })]
          })
        }) : f.jsxs("div", {
          className: "detailed-view",
          children: [f.jsxs("div", {
            children: [f.jsx("span", {
              children: j.days
            }), f.jsx("small", {
              children: "d"
            })]
          }), f.jsxs("div", {
            children: [f.jsx("span", {
              children: j.hours
            }), f.jsx("small", {
              children: "h"
            })]
          }), f.jsxs("div", {
            children: [f.jsx("span", {
              children: j.minutes
            }), f.jsx("small", {
              children: "m"
            })]
          }), f.jsxs("div", {
            children: [f.jsx("span", {
              children: j.seconds
            }), f.jsx("small", {
              children: "s"
            })]
          })]
        })
      })]
    })
  })
}

function Jv() {
  const {
    enabledWidgets: c,
    countdowns: r,
    countdownPositions: d
  } = Ce(), s = U.useRef(Bs.reduce((m, v) => (m[v.id] = U.createRef(), m), {}));
  return f.jsxs(f.Fragment, {
    children: [Bs.filter(({id: m}) => m !== "search").map(({
      id: m,
      component: v
    }) => c[m] ? f.jsx(v, {
      widgetRef: s.current[m],
      allWidgetRefs: s.current
    }, m) : null), r.filter(m => m.isEnabled).map(m => f.jsx(kv, {
      countdown: m,
      initialPosition: d[m.id]
    }, m.id))]
  })
}
const _h = U.createContext(),
  Jl = () => U.useContext(_h);

function Wv({
  children: c
}) {
  const [r, d] = U.useState(() => Ot("appMode", "canvas")), [s, m] = U.useState(() => Ot("isLightMode", !1)), [v, x] = U.useState(() => Ot("currentThemeIdentifier", "periwinkle")), [j, S] = U.useState(() => Ot("customThemes", [])), [g, D] = U.useState(!1), [C, E] = U.useState(""), [R, B] = U.useState("#FFFFFF"), [Z, w] = U.useState("#252525"), [O, q] = U.useState("#AAAAAA"), [K, W] = U.useState(() => Ot("canvasImageSrc", null)), [G, F] = U.useState(() => Ot("canvasImageFit", "cover")), [M, L] = U.useState(() => Ot("canvasImagePosition", 50)), [$, st] = U.useState(() => Ot("canvasAccentColor", "#FFFFFF")), [ct, vt] = U.useState(() => Ot("canvasQuoteColor", "#D1D1D1")), [bt, Tt] = U.useState(() => Ot("canvasGlassEffect", !0)), [ht, z] = U.useState(() => Ot("selectedFont", "redacted")), [J, lt] = U.useState(() => Ot("is24HourFormat", !1)), [yt, y] = U.useState(() => Ot("canvasQuotePop", !1)), [V, P] = U.useState(() => Ot("canvasBgOpacity", 55)), [Gp, Ep] = U.useState(() => Ot("showShortcuts", !0)), [Hp, Ip] = U.useState(() => Ot("showClock", !0));
  U.useEffect(() => {
    localStorage.setItem("appMode", r)
  }, [r]), U.useEffect(() => {
    localStorage.setItem("isLightMode", String(s))
  }, [s]), U.useEffect(() => {
    localStorage.setItem("currentThemeIdentifier", v)
  }, [v]), U.useEffect(() => {
    localStorage.setItem("customThemes", JSON.stringify(j))
  }, [j]), U.useEffect(() => {
    K ? localStorage.setItem("canvasImageSrc", K) : localStorage.removeItem("canvasImageSrc")
  }, [K]), U.useEffect(() => {
    localStorage.setItem("canvasImageFit", G)
  }, [G]), U.useEffect(() => {
    localStorage.setItem("canvasImagePosition", String(M))
  }, [M]), U.useEffect(() => {
    localStorage.setItem("canvasAccentColor", $)
  }, [$]), U.useEffect(() => {
    localStorage.setItem("canvasQuoteColor", ct)
  }, [ct]), U.useEffect(() => {
    localStorage.setItem("canvasGlassEffect", String(bt))
  }, [bt]), U.useEffect(() => {
    localStorage.setItem("selectedFont", ht)
  }, [ht]), U.useEffect(() => {
    localStorage.setItem("is24HourFormat", String(J))
  }, [J]), U.useEffect(() => {
    localStorage.setItem("canvasQuotePop", String(yt))
  }, [yt]), U.useEffect(() => {
    localStorage.setItem("canvasBgOpacity", String(V))
  }, [V]), U.useEffect(() => {
    localStorage.setItem("showShortcuts", String(Gp))
  }, [Gp]), U.useEffect(() => {
    localStorage.setItem("showClock", String(Hp))
  }, [Hp]);
  const Y = {
    mode: r,
    setMode: d,
    isLightMode: s,
    setIsLightMode: m,
    currentThemeIdentifier: v,
    setCurrentThemeIdentifier: x,
    customThemes: j,
    setCustomThemes: S,
    isCreatingTheme: g,
    setIsCreatingTheme: D,
    newThemeName: C,
    setNewThemeName: E,
    newThemeAccent: R,
    setNewThemeAccent: B,
    newThemeBackground: Z,
    setNewThemeBackground: w,
    newThemeQuote: O,
    setNewThemeQuote: q,
    canvasImageSrc: K,
    setCanvasImageSrc: W,
    canvasImageFit: G,
    setCanvasImageFit: F,
    canvasImagePosition: M,
    setCanvasImagePosition: L,
    canvasAccentColor: $,
    setCanvasAccentColor: st,
    canvasQuoteColor: ct,
    setCanvasQuoteColor: vt,
    canvasBgOpacity: V,
    setCanvasBgOpacity: P,
    canvasQuotePop: yt,
    setCanvasQuotePop: y,
    canvasGlassEffect: bt,
    setCanvasGlassEffect: Tt,
    selectedFont: ht,
    setSelectedFont: z,
    is24HourFormat: J,
    setIs24HourFormat: lt,
    showShortcuts: Gp,
    setShowShortcuts: Ep,
    showClock: Hp,
    setShowClock: Ip
  };
  return f.jsx(_h.Provider, {
    value: Y,
    children: c
  })
}
const Gn = new Audio("/system/toggle-sound.webm");
Gn.preload = "auto";
const kl = () => {
    Gn.paused || (Gn.pause(), Gn.currentTime = 0);
    try {
      Gn.play()
    } catch (c) {
      console.error("Audio playback failed for toggle sound.", c)
    }
  },
  wa = new Audio("/system/click_2.webm");
wa.preload = "auto";
wa.volume = .05;
const Ah = () => {
  wa.paused || (wa.pause(), wa.currentTime = 0);
  try {
    wa.play()
  } catch (c) {
    console.error("Audio playback failed for click sound.", c)
  }
};

function jh({
  fileInputRef: c
}) {
  const {
    canvasImageSrc: r,
    setCanvasImageSrc: d,
    canvasImageFit: s,
    setCanvasImageFit: m,
    canvasImagePosition: v,
    setCanvasImagePosition: x,
    canvasAccentColor: j,
    setCanvasAccentColor: S,
    canvasQuoteColor: g,
    setCanvasQuoteColor: D,
    canvasGlassEffect: C,
    setCanvasGlassEffect: E,
    canvasQuotePop: R,
    setCanvasQuotePop: B,
    canvasBgOpacity: Z,
    setCanvasBgOpacity: w
  } = Jl(), O = G => {
    const F = G.target.files[0];
    if (!F || !F.type.startsWith("image/")) {
      alert("Please select a valid image file.");
      return
    }
    const M = new FileReader;
    M.onload = L => {
      const $ = new Image;
      $.onload = () => {
        const st = document.createElement("canvas"),
          ct = st.getContext("2d"),
          vt = 1920,
          bt = 1080;
        let Tt = $.width,
          ht = $.height;
        Tt > ht ? Tt > vt && (ht *= vt / Tt, Tt = vt) : ht > bt && (Tt *= bt / ht, ht = bt), st.width = Tt, st.height = ht, ct.drawImage($, 0, 0, Tt, ht);
        const z = st.toDataURL("image/jpeg", .8);
        d(z)
      }, $.src = L.target.result
    }, M.readAsDataURL(F), G.target.value = null
  }, q = () => {
    c.current && c.current.click()
  }, K = G => {
    E(G.target.checked), kl()
  }, W = G => {
    B(G.target.checked), kl()
  };
  return f.jsxs("div", {
    className: "canvas-settings",
    children: [f.jsx("h2", {
      className: "list-item themes-header",
      children: "CANVAS"
    }), f.jsxs("div", {
      className: "custom-background-controls",
      children: [f.jsx("h3", {
        className: "controls-header",
        children: "Background Image"
      }), f.jsxs("div", {
        className: "position-slider-container",
        children: [f.jsx("button", {
          type: "button",
          onClick: q,
          className: "upload-btn",
          children: "Current Wallpaper",
          style: {
            display: "none"
          }
        }), f.jsx("label", {
          htmlFor: "bgOpacity",
          className: "position-slider-label",
          children: "Image Opacity"
        }), f.jsx("input", {
          type: "range",
          id: "bgOpacity",
          className: "position-slider",
          min: "0",
          max: "100",
          value: Z,
          onChange: G => w(G.target.value)
        })]
      }), f.jsx("input", {
        type: "file",
        ref: c,
        onChange: O,
        accept: "image/*",
        style: {
          display: "none"
        }
      }), r && f.jsxs(f.Fragment, {
        children: [f.jsxs("div", {
          className: "background-fit-selector",
          children: [f.jsxs("label", {
            className: "fit-option",
            children: [f.jsx("input", {
              type: "radio",
              name: "canvasFit",
              value: "cover",
              checked: s === "cover",
              onChange: G => m(G.target.value)
            }), " Fill"]
          }), f.jsxs("label", {
            className: "fit-option",
            children: [f.jsx("input", {
              type: "radio",
              name: "canvasFit",
              value: "contain",
              checked: s === "contain",
              onChange: G => m(G.target.value)
            }), " Fit"]
          })]
        }), s === "cover" && f.jsxs("div", {
          className: "position-slider-container",
          children: [f.jsx("label", {
            htmlFor: "bgPosition",
            className: "position-slider-label",
            children: "Vertical Position"
          }), f.jsx("input", {
            type: "range",
            id: "bgPosition",
            className: "position-slider",
            min: "0",
            max: "100",
            value: v,
            onChange: G => x(G.target.value)
          })]
        }), f.jsx("button", {
          type: "button",
          onClick: () => d(null),
          className: "clear-bg-btn",
          children: "Use Default Canvas Image"
        })]
      })]
    }), f.jsxs("div", {
      className: "canvas-accent-controls",
      children: [f.jsxs("div", {
        className: "format-toggle glass-toggle",
        children: [f.jsx("h2", {
          className: "list-item",
          children: "Glass Effect"
        }), f.jsxs("label", {
          className: "switch",
          children: [f.jsx("input", {
            type: "checkbox",
            checked: C,
            onChange: K
          }), f.jsx("span", {
            className: "slider"
          })]
        })]
      }), f.jsxs("div", {
        className: `color-picker-group ${C?"disabled":""}`,
        children: [f.jsx("label", {
          htmlFor: "canvasAccent",
          className: "color-picker-label",
          children: "Accent Color"
        }), f.jsx("input", {
          type: "color",
          id: "canvasAccent",
          value: j,
          onInput: G => S(G.target.value),
          className: "color-picker-input",
          disabled: C
        })]
      })]
    })]
  })
}
jh.propTypes = {
  fileInputRef: dt.oneOfType([dt.func, dt.shape({
    current: dt.instanceOf(Element)
  })])
};

function Fv({
  onDone: c
}) {
  const {
    addCountdown: r
  } = Ce(), [d, s] = U.useState(""), [m, v] = U.useState(""), [x, j] = U.useState("00:00"), S = D => {
    if (D.preventDefault(), !d || !m) {
      alert("Please fill in a name and a date.");
      return
    }
    const C = new Date(`${m}T${x}`).toISOString();
    r({
      name: d,
      endDate: C
    }), c()
  }, g = new Date().toISOString().split("T")[0];
  return f.jsxs("form", {
    onSubmit: S,
    className: "countdown-form",
    children: [f.jsx("input", {
      type: "text",
      className: "countdown-input",
      placeholder: "Countdown Name",
      value: d,
      onChange: D => s(D.target.value)
    }), f.jsxs("div", {
      className: "countdown-datetime-inputs",
      children: [f.jsx("input", {
        type: "date",
        className: "countdown-input",
        value: m,
        min: g,
        onChange: D => v(D.target.value)
      }), f.jsx("input", {
        type: "time",
        className: "countdown-input",
        value: x,
        onChange: D => j(D.target.value)
      })]
    }), f.jsx("button", {
      type: "submit",
      className: "countdown-add-btn",
      children: "Add Countdown"
    })]
  })
}

function $v() {
  const {
    isCountdownFeatureEnabled: c,
    toggleCountdownFeature: r,
    countdowns: d,
    deleteCountdown: s,
    toggleCountdownEnabled: m
  } = Ce(), v = () => {
    r(), kl()
  }, x = g => {
    m(g), kl()
  }, [j, S] = U.useState(!1);
  return f.jsxs("div", {
    className: "countdown-manager-section",
    children: [f.jsxs("div", {
      className: "widget-toggle-item",
      children: [f.jsx("span", {
        className: "widget-name",
        children: "Enable Countdowns"
      }), f.jsxs("label", {
        className: "switch",
        children: [f.jsx("input", {
          type: "checkbox",
          checked: c,
          onChange: v
        }), f.jsx("span", {
          className: "slider"
        })]
      })]
    }), c && f.jsxs("div", {
      className: "countdown-controls",
      children: [j ? f.jsx(Fv, {
        onDone: () => S(!1)
      }) : f.jsx("button", {
        className: "add-countdown-btn",
        onClick: () => S(!0),
        children: "+ Add New Countdown"
      }), f.jsx("hr", {
        className: "countdown-divider"
      }), f.jsx("div", {
        className: "existing-countdowns-list",
        children: d.length > 0 ? d.map(g => f.jsxs("div", {
          className: "existing-countdown-item",
          children: [f.jsx("span", {
            className: "existing-countdown-name",
            children: g.name
          }), f.jsxs("div", {
            className: "existing-countdown-controls",
            children: [f.jsxs("label", {
              className: "switch small-switch",
              children: [f.jsx("input", {
                type: "checkbox",
                checked: g.isEnabled,
                onChange: x
              }), f.jsx("span", {
                className: "slider"
              })]
            }), f.jsx("button", {
              onClick: () => s(g.id),
              className: "delete-countdown-btn",
              children: "×"
            })]
          })]
        }, g.id)) : f.jsx("p", {
          className: "no-countdowns-text",
          children: "No countdowns created yet."
        })
      })]
    })]
  })
}

function Pv() {
  const {
    selectedFont: c,
    setSelectedFont: r
  } = Jl(), d = s => {
    r(s.target.value), Ah()
  };
  return f.jsxs("div", {
    className: "font-select",
    children: [f.jsx("h3", {
      className: "font-wrapper-title",
      children: "Typeface"
    }), f.jsx("div", {
      className: "fonts-wrapper",
      children: Th.map(s => f.jsxs("div", {
        className: "option",
        children: [f.jsx("input", {
          className: "input",
          type: "radio",
          name: "font",
          value: s.value,
          checked: c === s.value,
          onChange: d
        }), f.jsx("div", {
          className: "btn",
          children: f.jsx("span", {
            id: s.value,
            className: "span",
            style: {
              fontFamily: s.fontFamily,
              fontWeight: s.fontWeight,
              letterSpacing: s.letterSpacing
            },
            children: s.label
          })
        })]
      }, s.value))
    })]
  })
}

function Ya() {
  return (Ya = Object.assign || function(c) {
    for (var r = 1; r < arguments.length; r++) {
      var d = arguments[r];
      for (var s in d) Object.prototype.hasOwnProperty.call(d, s) && (c[s] = d[s])
    }
    return c
  }).apply(this, arguments)
}

function di(c, r) {
  if (c == null) return {};
  var d, s, m = {},
    v = Object.keys(c);
  for (s = 0; s < v.length; s++) r.indexOf(d = v[s]) >= 0 || (m[d] = c[d]);
  return m
}

function Qn(c) {
  var r = U.useRef(c),
    d = U.useRef(function(s) {
      r.current && r.current(s)
    });
  return r.current = c, d.current
}
var Zn = function(c, r, d) {
    return r === void 0 && (r = 0), d === void 0 && (d = 1), c > d ? d : c < r ? r : c
  },
  Ln = function(c) {
    return "touches" in c
  },
  Xs = function(c) {
    return c && c.ownerDocument.defaultView || self
  },
  hh = function(c, r, d) {
    var s = c.getBoundingClientRect(),
      m = Ln(r) ? function(v, x) {
        for (var j = 0; j < v.length; j++)
          if (v[j].identifier === x) return v[j];
        return v[0]
      }(r.touches, d) : r;
    return {
      left: Zn((m.pageX - (s.left + Xs(c).pageXOffset)) / s.width),
      top: Zn((m.pageY - (s.top + Xs(c).pageYOffset)) / s.height)
    }
  },
  mh = function(c) {
    !Ln(c) && c.preventDefault()
  },
  Oh = Zt.memo(function(c) {
    var r = c.onMove,
      d = c.onKey,
      s = di(c, ["onMove", "onKey"]),
      m = U.useRef(null),
      v = Qn(r),
      x = Qn(d),
      j = U.useRef(null),
      S = U.useRef(!1),
      g = U.useMemo(function() {
        var R = function(w) {
            mh(w), (Ln(w) ? w.touches.length > 0 : w.buttons > 0) && m.current ? v(hh(m.current, w, j.current)) : Z(!1)
          },
          B = function() {
            return Z(!1)
          };

        function Z(w) {
          var O = S.current,
            q = Xs(m.current),
            K = w ? q.addEventListener : q.removeEventListener;
          K(O ? "touchmove" : "mousemove", R), K(O ? "touchend" : "mouseup", B)
        }
        return [function(w) {
          var O = w.nativeEvent,
            q = m.current;
          if (q && (mh(O), ! function(W, G) {
              return G && !Ln(W)
            }(O, S.current) && q)) {
            if (Ln(O)) {
              S.current = !0;
              var K = O.changedTouches || [];
              K.length && (j.current = K[0].identifier)
            }
            q.focus(), v(hh(q, O, j.current)), Z(!0)
          }
        }, function(w) {
          var O = w.which || w.keyCode;
          O < 37 || O > 40 || (w.preventDefault(), x({
            left: O === 39 ? .05 : O === 37 ? -.05 : 0,
            top: O === 40 ? .05 : O === 38 ? -.05 : 0
          }))
        }, Z]
      }, [x, v]),
      D = g[0],
      C = g[1],
      E = g[2];
    return U.useEffect(function() {
      return E
    }, [E]), Zt.createElement("div", Ya({}, s, {
      onTouchStart: D,
      onMouseDown: D,
      className: "react-colorful__interactive",
      ref: m,
      onKeyDown: C,
      tabIndex: 0,
      role: "slider"
    }))
  }),
  Ks = function(c) {
    return c.filter(Boolean).join(" ")
  },
  Mh = function(c) {
    var r = c.color,
      d = c.left,
      s = c.top,
      m = s === void 0 ? .5 : s,
      v = Ks(["react-colorful__pointer", c.className]);
    return Zt.createElement("div", {
      className: v,
      style: {
        top: 100 * m + "%",
        left: 100 * d + "%"
      }
    }, Zt.createElement("div", {
      className: "react-colorful__pointer-fill",
      style: {
        backgroundColor: r
      }
    }))
  },
  Pt = function(c, r, d) {
    return r === void 0 && (r = 0), d === void 0 && (d = Math.pow(10, r)), Math.round(d * c) / d
  },
  Iv = function(c) {
    return ny(Gs(c))
  },
  Gs = function(c) {
    return c[0] === "#" && (c = c.substring(1)), c.length < 6 ? {
      r: parseInt(c[0] + c[0], 16),
      g: parseInt(c[1] + c[1], 16),
      b: parseInt(c[2] + c[2], 16),
      a: c.length === 4 ? Pt(parseInt(c[3] + c[3], 16) / 255, 2) : 1
    } : {
      r: parseInt(c.substring(0, 2), 16),
      g: parseInt(c.substring(2, 4), 16),
      b: parseInt(c.substring(4, 6), 16),
      a: c.length === 8 ? Pt(parseInt(c.substring(6, 8), 16) / 255, 2) : 1
    }
  },
  ty = function(c) {
    return ay(ly(c))
  },
  ey = function(c) {
    var r = c.s,
      d = c.v,
      s = c.a,
      m = (200 - r) * d / 100;
    return {
      h: Pt(c.h),
      s: Pt(m > 0 && m < 200 ? r * d / 100 / (m <= 100 ? m : 200 - m) * 100 : 0),
      l: Pt(m / 2),
      a: Pt(s, 2)
    }
  },
  Ls = function(c) {
    var r = ey(c);
    return "hsl(" + r.h + ", " + r.s + "%, " + r.l + "%)"
  },
  ly = function(c) {
    var r = c.h,
      d = c.s,
      s = c.v,
      m = c.a;
    r = r / 360 * 6, d /= 100, s /= 100;
    var v = Math.floor(r),
      x = s * (1 - d),
      j = s * (1 - (r - v) * d),
      S = s * (1 - (1 - r + v) * d),
      g = v % 6;
    return {
      r: Pt(255 * [s, j, x, x, S, s][g]),
      g: Pt(255 * [S, s, s, j, x, x][g]),
      b: Pt(255 * [x, x, S, s, s, j][g]),
      a: Pt(m, 2)
    }
  },
  oi = function(c) {
    var r = c.toString(16);
    return r.length < 2 ? "0" + r : r
  },
  ay = function(c) {
    var r = c.r,
      d = c.g,
      s = c.b,
      m = c.a,
      v = m < 1 ? oi(Pt(255 * m)) : "";
    return "#" + oi(r) + oi(d) + oi(s) + v
  },
  ny = function(c) {
    var r = c.r,
      d = c.g,
      s = c.b,
      m = c.a,
      v = Math.max(r, d, s),
      x = v - Math.min(r, d, s),
      j = x ? v === r ? (d - s) / x : v === d ? 2 + (s - r) / x : 4 + (r - d) / x : 0;
    return {
      h: Pt(60 * (j < 0 ? j + 6 : j)),
      s: Pt(v ? x / v * 100 : 0),
      v: Pt(v / 255 * 100),
      a: m
    }
  },
  uy = Zt.memo(function(c) {
    var r = c.hue,
      d = c.onChange,
      s = Ks(["react-colorful__hue", c.className]);
    return Zt.createElement("div", {
      className: s
    }, Zt.createElement(Oh, {
      onMove: function(m) {
        d({
          h: 360 * m.left
        })
      },
      onKey: function(m) {
        d({
          h: Zn(r + 360 * m.left, 0, 360)
        })
      },
      "aria-label": "Hue",
      "aria-valuenow": Pt(r),
      "aria-valuemax": "360",
      "aria-valuemin": "0"
    }, Zt.createElement(Mh, {
      className: "react-colorful__hue-pointer",
      left: r / 360,
      color: Ls({
        h: r,
        s: 100,
        v: 100,
        a: 1
      })
    })))
  }),
  iy = Zt.memo(function(c) {
    var r = c.hsva,
      d = c.onChange,
      s = {
        backgroundColor: Ls({
          h: r.h,
          s: 100,
          v: 100,
          a: 1
        })
      };
    return Zt.createElement("div", {
      className: "react-colorful__saturation",
      style: s
    }, Zt.createElement(Oh, {
      onMove: function(m) {
        d({
          s: 100 * m.left,
          v: 100 - 100 * m.top
        })
      },
      onKey: function(m) {
        d({
          s: Zn(r.s + 100 * m.left, 0, 100),
          v: Zn(r.v - 100 * m.top, 0, 100)
        })
      },
      "aria-label": "Color",
      "aria-valuetext": "Saturation " + Pt(r.s) + "%, Brightness " + Pt(r.v) + "%"
    }, Zt.createElement(Mh, {
      className: "react-colorful__saturation-pointer",
      top: 1 - r.v / 100,
      left: r.s / 100,
      color: Ls(r)
    })))
  }),
  Ch = function(c, r) {
    if (c === r) return !0;
    for (var d in c)
      if (c[d] !== r[d]) return !1;
    return !0
  },
  cy = function(c, r) {
    return c.toLowerCase() === r.toLowerCase() || Ch(Gs(c), Gs(r))
  };

function sy(c, r, d) {
  var s = Qn(d),
    m = U.useState(function() {
      return c.toHsva(r)
    }),
    v = m[0],
    x = m[1],
    j = U.useRef({
      color: r,
      hsva: v
    });
  U.useEffect(function() {
    if (!c.equal(r, j.current.color)) {
      var g = c.toHsva(r);
      j.current = {
        hsva: g,
        color: r
      }, x(g)
    }
  }, [r, c]), U.useEffect(function() {
    var g;
    Ch(v, j.current.hsva) || c.equal(g = c.fromHsva(v), j.current.color) || (j.current = {
      hsva: v,
      color: g
    }, s(g))
  }, [v, c, s]);
  var S = U.useCallback(function(g) {
    x(function(D) {
      return Object.assign({}, D, g)
    })
  }, []);
  return [v, S]
}
var oy = typeof window < "u" ? U.useLayoutEffect : U.useEffect,
  fy = function() {
    return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0
  },
  gh = new Map,
  ry = function(c) {
    oy(function() {
      var r = c.current ? c.current.ownerDocument : document;
      if (r !== void 0 && !gh.has(r)) {
        var d = r.createElement("style");
        d.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`, gh.set(r, d);
        var s = fy();
        s && d.setAttribute("nonce", s), r.head.appendChild(d)
      }
    }, [])
  },
  dy = function(c) {
    var r = c.className,
      d = c.colorModel,
      s = c.color,
      m = s === void 0 ? d.defaultColor : s,
      v = c.onChange,
      x = di(c, ["className", "colorModel", "color", "onChange"]),
      j = U.useRef(null);
    ry(j);
    var S = sy(d, m, v),
      g = S[0],
      D = S[1],
      C = Ks(["react-colorful", r]);
    return Zt.createElement("div", Ya({}, x, {
      ref: j,
      className: C
    }), Zt.createElement(iy, {
      hsva: g,
      onChange: D
    }), Zt.createElement(uy, {
      hue: g.h,
      onChange: D,
      className: "react-colorful__last-control"
    }))
  },
  hy = {
    defaultColor: "000",
    toHsva: Iv,
    fromHsva: function(c) {
      return ty({
        h: c.h,
        s: c.s,
        v: c.v,
        a: 1
      })
    },
    equal: cy
  },
  my = function(c) {
    return Zt.createElement(dy, Ya({}, c, {
      colorModel: hy
    }))
  },
  gy = /^#?([0-9A-F]{3,8})$/i,
  vy = function(c) {
    var r = c.color,
      d = r === void 0 ? "" : r,
      s = c.onChange,
      m = c.onBlur,
      v = c.escape,
      x = c.validate,
      j = c.format,
      S = c.process,
      g = di(c, ["color", "onChange", "onBlur", "escape", "validate", "format", "process"]),
      D = U.useState(function() {
        return v(d)
      }),
      C = D[0],
      E = D[1],
      R = Qn(s),
      B = Qn(m),
      Z = U.useCallback(function(O) {
        var q = v(O.target.value);
        E(q), x(q) && R(S ? S(q) : q)
      }, [v, S, x, R]),
      w = U.useCallback(function(O) {
        x(O.target.value) || E(v(d)), B(O)
      }, [d, v, x, B]);
    return U.useEffect(function() {
      E(v(d))
    }, [d, v]), Zt.createElement("input", Ya({}, g, {
      value: j ? j(C) : C,
      spellCheck: "false",
      onChange: Z,
      onBlur: w
    }))
  },
  vh = function(c) {
    return "#" + c
  },
  yy = function(c) {
    var r = c.prefixed,
      d = c.alpha,
      s = di(c, ["prefixed", "alpha"]),
      m = U.useCallback(function(x) {
        return x.replace(/([^0-9A-F]+)/gi, "").substring(0, d ? 8 : 6)
      }, [d]),
      v = U.useCallback(function(x) {
        return function(j, S) {
          var g = gy.exec(j),
            D = g ? g[1].length : 0;
          return D === 3 || D === 6 || !!S && D === 4 || !!S && D === 8
        }(x, d)
      }, [d]);
    return Zt.createElement(vy, Ya({}, s, {
      escape: m,
      format: r ? vh : void 0,
      process: vh,
      validate: v
    }))
  };

function Ys({
  color: c,
  onChange: r
}) {
  const d = U.useRef(),
    [s, m] = U.useState(!1),
    v = U.useCallback(() => m(!1), []);
  return bh(d, v), f.jsxs("div", {
    className: "color-picker-wrapper",
    ref: d,
    children: [f.jsx("button", {
      type: "button",
      className: "color-swatch-btn",
      style: {
        backgroundColor: c
      },
      onClick: () => m(!0),
      "aria-label": `Current color: ${c}. Click to open color picker.`
    }), s && f.jsxs("div", {
      className: "color-picker-popover",
      children: [f.jsx(my, {
        color: c,
        onChange: r
      }), f.jsxs("div", {
        className: "hex-input-wrapper",
        children: [f.jsx("span", {
          children: "#"
        }), f.jsx(yy, {
          className: "hex-input",
          color: c,
          onChange: r,
          prefixed: !0
        })]
      })]
    })]
  })
}

function py() {
  const {
    customThemes: c,
    setCustomThemes: r,
    setCurrentThemeIdentifier: d,
    setIsCreatingTheme: s,
    newThemeName: m,
    setNewThemeName: v,
    newThemeAccent: x,
    setNewThemeAccent: j,
    newThemeBackground: S,
    setNewThemeBackground: g,
    newThemeQuote: D,
    setNewThemeQuote: C
  } = Jl(), E = () => {
    if (!m.trim()) {
      alert("Please enter a name for the theme.");
      return
    }
    const R = `custom${Date.now()}`,
      B = {
        id: R,
        name: m.trim(),
        accent: x,
        background: S,
        quote: D
      };
    r(Z => [...Z, B]), d(R), s(!1)
  };
  return f.jsxs("div", {
    className: "theme-creator",
    children: [f.jsx("h4", {
      className: "theme-creator-title",
      children: "Create New Theme"
    }), f.jsxs("div", {
      className: "creator-input-group",
      children: [f.jsx("label", {
        htmlFor: "themeName",
        children: "Theme Name"
      }), f.jsx("input", {
        type: "text",
        id: "themeName",
        className: "theme-name-input",
        value: m,
        onChange: R => v(R.target.value),
        placeholder: "e.g., Ocean Vibe"
      })]
    }), f.jsxs("div", {
      className: "creator-input-group",
      children: [f.jsx("label", {
        children: "Accent"
      }), f.jsx(Ys, {
        color: x,
        onChange: j
      })]
    }), f.jsxs("div", {
      className: "creator-input-group",
      children: [f.jsx("label", {
        children: "Background"
      }), f.jsx(Ys, {
        color: S,
        onChange: g
      })]
    }), f.jsxs("div", {
      className: "creator-input-group",
      children: [f.jsx("label", {
        children: "Quote"
      }), f.jsx(Ys, {
        color: D,
        onChange: C
      })]
    }), f.jsxs("div", {
      className: "creator-actions",
      children: [f.jsx("button", {
        type: "button",
        onClick: E,
        className: "save-btn",
        children: "Save Theme"
      }), f.jsx("button", {
        type: "button",
        onClick: () => s(!1),
        className: "cancel-btn",
        children: "Cancel"
      })]
    })]
  })
}

function Sy() {
  const {
    currentThemeIdentifier: c,
    setCurrentThemeIdentifier: r
  } = Jl(), d = s => {
    r(s), Ah()
  };
  return f.jsx("div", {
    className: "themes-section",
    children: f.jsx("div", {
      className: "themes-container",
      children: f.jsx("div", {
        className: "wrapper",
        children: Object.entries(Ua).reduce((s, [m, v], x) => (x % 3 === 0 && s.push([]), s[s.length - 1].push(f.jsx("div", {
          id: m,
          className: `theme ${c===m?"is-selected":""}`,
          style: {
            backgroundColor: v.color
          },
          onClick: () => d(m),
          role: "button",
          tabIndex: "0",
          "aria-label": `Select ${v.name} theme`,
          onKeyDown: j => j.key === "Enter" && r(m)
        }, m)), s), []).map((s, m) => f.jsx("div", {
          className: "wrapper-row",
          children: s
        }, m))
      })
    })
  })
}

function by() {
  var B, Z;
  const {
    currentThemeIdentifier: c,
    setCurrentThemeIdentifier: r,
    customThemes: d,
    setCustomThemes: s,
    isCreatingTheme: m,
    setIsCreatingTheme: v,
    setNewThemeName: x,
    setNewThemeAccent: j,
    setNewThemeBackground: S,
    setNewThemeQuote: g
  } = Jl(), [D, C] = U.useState("preloaded"), E = () => {
    const w = d.length;
    x(`My Theme ${w}`), j("#FFFFFF"), S("#252525"), g("#AAAAAA"), v(!0)
  }, R = w => {
    confirm("Are you sure you want to delete this theme? This action cannot be undone.") && (s(O => O.filter(q => q.id !== w)), c === w && r("lavender"))
  };
  return f.jsxs("div", {
    className: "minimalistic-settings",
    children: [f.jsx("h2", {
      className: "list-item themes-header",
      children: "THEMES"
    }), f.jsxs("div", {
      className: "current",
      children: [f.jsx("p", {
        className: "current-theme",
        children: "Current:"
      }), f.jsx("p", {
        children: f.jsx("b", {
          children: ((B = Ua[c]) == null ? void 0 : B.name) || ((Z = d.find(w => w.id === c)) == null ? void 0 : Z.name) || "Unknown"
        })
      })]
    }), f.jsxs("div", {
      className: "sub-tabs",
      children: [f.jsx("button", {
        className: `sub-tab-btn ${D==="preloaded"?"active":""}`,
        onClick: () => C("preloaded"),
        children: "Pre-loaded"
      }), f.jsx("button", {
        className: `sub-tab-btn ${D==="custom"?"active":""}`,
        onClick: () => C("custom"),
        children: "Custom"
      })]
    }), f.jsxs("div", {
      className: "tab-content",
      children: [D === "preloaded" && f.jsx(Sy, {}), D === "custom" && f.jsx("div", {
        className: "custom-themes-manager",
        children: m ? f.jsx(py, {}) : f.jsxs(f.Fragment, {
          children: [f.jsx("div", {
            className: "custom-theme-list",
            children: d.map(w => f.jsxs("div", {
              className: `custom-theme-item ${c===w.id?"is-selected":""}`,
              onClick: () => r(w.id),
              children: [f.jsx("div", {
                className: "custom-theme-swatch",
                style: {
                  backgroundColor: w.background,
                  border: `2px solid ${w.accent}`
                }
              }), f.jsx("span", {
                children: w.name
              }), f.jsx("button", {
                className: "delete-custom-theme-btn",
                onClick: O => {
                  O.stopPropagation(), R(w.id)
                },
                children: "×"
              })]
            }, w.id))
          }), f.jsx("button", {
            className: "add-theme-btn",
            onClick: E,
            children: "+ Add New"
          })]
        })
      })]
    })]
  })
}
const Ty = ["day", "week", "month", "year"];

function xy() {
  const {
    enabledWidgets: c,
    toggleWidget: r,
    progressMode: d,
    setProgressMode: s
  } = Ce(), m = v => {
    r(v), kl()
  };
  return f.jsxs("div", {
    className: "widget-toggle-list",
    children: [f.jsx("h2", {
      className: "list-item themes-header",
      children: "WIDGETS"
    }), Bs.filter(({id: v}) => v !== "search").map(({
      id: v,
      name: x
    }) => f.jsxs("div", {
      className: "widget-toggle-item-wrapper",
      children: [f.jsxs("div", {
        className: "widget-toggle-item",
        children: [f.jsx("span", {
          className: "widget-name",
          children: x
        }), f.jsxs("label", {
          className: "switch",
          children: [f.jsx("input", {
            type: "checkbox",
            checked: !!c[v],
            onChange: () => m(v)
          }), f.jsx("span", {
            className: "slider"
          })]
        })]
      }), v === "dayProgress" && c.dayProgress && f.jsx("div", {
        className: "progress-mode-selector",
        children: Ty.map(j => f.jsxs("label", {
          className: "radio-label",
          children: [f.jsx("input", {
            type: "radio",
            name: "progressMode",
            value: j,
            checked: d === j,
            onChange: () => s(j)
          }), f.jsx("span", {
            className: "radio-text",
            children: j.charAt(0).toUpperCase() + j.slice(1)
          })]
        }, j))
      })]
    }, v))]
  })
}

function Rh({
  isOpen: c,
  fileInputRef: r,
  linkExternalIconPath: d,
  reportIconPath: s
}) {
  const m = Jl(),
    {
      mode: v,
      setMode: x,
      is24HourFormat: j,
      setIs24HourFormat: S,
      isLightMode: g,
      setIsLightMode: D,
      showShortcuts: Gp,
      setShowShortcuts: Ep,
      showClock: Hp,
      setShowClock: Ip
    } = m,
    C = B => {
      S(B.target.checked), kl()
    },
    E = !Object.prototype.hasOwnProperty.call(Ua, m.currentThemeIdentifier),
    R = B => {
      D(B.target.checked), kl()
    },
    Bp = B => {
      Ep(B.target.checked), kl()
    },
    Qp = B => {
      Ip(B.target.checked), kl()
    };
  return f.jsx("div", {
    className: `options ${c?"show":""}`,
    children: f.jsxs("div", {
      className: "options-container",
      children: [f.jsx("h2", {
        className: "options-title",
        children: "✷ Customize"
      }), f.jsxs("div", {
        className: "main-mode-selector",
        children: [f.jsxs("div", {
          className: "main-option",
          children: [f.jsx("input", {
            className: "input",
            type: "radio",
            name: "mainMode",
            value: "minimalistic",
            checked: v === "minimalistic",
            onChange: B => x(B.target.value)
          }), f.jsx("div", {
            className: "main-btn",
            children: f.jsx("span", {
              className: "span",
              children: "Minimalistic"
            })
          })]
        }), f.jsxs("div", {
          className: "main-option",
          children: [f.jsx("input", {
            className: "input",
            type: "radio",
            name: "mainMode",
            value: "canvas",
            checked: v === "canvas",
            onChange: B => x(B.target.value)
          }), f.jsx("div", {
            className: "main-btn",
            children: f.jsx("span", {
              className: "span",
              children: "Canvas"
            })
          })]
        })]
      }), f.jsx("hr", {}), v === "minimalistic" ? f.jsx(by, {}) : f.jsx(jh, {
        fileInputRef: r
      }), f.jsx("hr", {}), f.jsxs("div", {
        className: "format-toggle",
        children: [f.jsx("h2", {
          className: "list-item",
          children: "Use 24-Hour Format"
        }), f.jsxs("label", {
          id: "format-switch",
          className: "switch",
          children: [f.jsx("input", {
            type: "checkbox",
            checked: j,
            onChange: C
          }), f.jsx("span", {
            className: "slider"
          })]
        })]
      }), f.jsx("hr", {}), f.jsxs("div", {
        className: "format-toggle",
        children: [f.jsx("h2", {
          className: "list-item",
          children: "Show Shortcuts"
        }), f.jsxs("label", {
          id: "format-switch",
          className: "switch",
          children: [f.jsx("input", {
            type: "checkbox",
            checked: Gp,
            onChange: Bp
          }), f.jsx("span", {
            className: "slider"
          })]
        })]
      }), f.jsx("hr", {}), f.jsxs("div", {
        className: "format-toggle",
        children: [f.jsx("h2", {
          className: "list-item",
          children: "Show Clock"
        }), f.jsxs("label", {
          id: "format-switch",
          className: "switch",
          children: [f.jsx("input", {
            type: "checkbox",
            checked: Hp,
            onChange: Qp
          }), f.jsx("span", {
            className: "slider"
          })]
        })]
      }), f.jsx("hr", {}), v === "minimalistic" && f.jsxs(f.Fragment, {
        children: [f.jsxs("div", {
          className: `light-mode-toggler ${E?"disabled":""}`,
          children: [f.jsx("h2", {
            className: "list-item",
            children: "Use Light Mode"
          }), f.jsxs("label", {
            id: "light-switch",
            className: "switch",
            children: [f.jsx("input", {
              type: "checkbox",
              checked: g,
              onChange: R,
              disabled: E,
              title: E ? "Light mode only affects pre-loaded themes" : "Toggle light mode"
            }), f.jsx("span", {
              className: "slider"
            })]
          })]
        }), f.jsx("hr", {})]
      }), f.jsx(Pv, {}), f.jsx("hr", {}), f.jsx(xy, {}), f.jsx("hr", {}), f.jsx($v, {}), f.jsx("hr", {}), f.jsxs("div", {
        className: "fun",
        children: [f.jsx("h3", {
          className: "about-title",
          children: "About"
        }), f.jsxs("p", {
          className: "about-text",
          children: [f.jsx("b", {
            children: "\u00C1phros"
          }), " is dedicated to the souls the sea has claimed. So sail aboard, my lads\u2014raise a shanty for the fallen, and spare a thought for the ghosts in the foam. For they sank unnamed, so we could carry their story forward."]
        }), f.jsxs("div", {
          className: "about",
          children: [f.jsxs("a", {
            className: "my-links",
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://ansh-space.vercel.app",
            children: [f.jsx("p", {
              children: "ansh-space.vercel.app "
            }), f.jsx("img", {
              className: "external-link",
              src: d,
              alt: "external link"
            })]
        })]
      })
    ]})
  ]})
})
}
Rh.propTypes = {
  isOpen: dt.bool.isRequired,
  fileInputRef: dt.oneOfType([dt.func, dt.shape({
    current: dt.instanceOf(Element)
  })]),
  linkExternalIconPath: dt.string.isRequired,
  reportIconPath: dt.string.isRequired
};
const zh = U.createContext(),
  Ny = () => U.useContext(zh);

function Ey({
  children: c
}) {
  const [r, d] = U.useState(() => Ot("shortcuts", Mv)), [s, m] = U.useState(() => Ot("faviconCache", {}));
  U.useEffect(() => {
    localStorage.setItem("shortcuts", JSON.stringify(r))
  }, [r]), U.useEffect(() => {
    localStorage.setItem("faviconCache", JSON.stringify(s))
  }, [s]);
  const S = {
    shortcuts: r,
    faviconCache: s,
    addShortcut: async (g, D) => {
      const C = g.trim(),
        E = D.trim();
      if (!C || !E) {
        alert("Please enter both a URL and a name.");
        return
      }
      if (r.length >= 10) {
        alert("You can only have up to 10 shortcuts.");
        return
      }
      let R = C;
      !R.startsWith("http://") && !R.startsWith("https://") && (R = "https://" + R);
      let B;
      try {
        B = new URL(R).hostname.replace("www.", "")
      } catch {
        alert("The URL format is incorrect. Please check for typos.");
        return
      }
      let Z = xh[B] || null;
      if (!Z) try {
        const O = `https://www.google.com/s2/favicons?domain=${B}&sz=64`,
          q = await fetch(O);
        if (q.ok) {
          const K = await q.blob(),
            W = new FileReader;
          W.onloadend = () => {
            m(G => ({
              ...G,
              [B]: W.result
            }))
          }, W.readAsDataURL(K)
        }
      } catch (O) {
        console.error("Favicon fetch failed:", O)
      }
      const w = {
        url: R,
        name: E,
        icon: Z
      };
      d(O => [...O, w])
    },
    deleteShortcut: g => {
      try {
        const D = new URL(g).hostname.replace("www.", "");
        s[D] && m(C => {
          const E = {
            ...C
          };
          return delete E[D], E
        })
      } catch {}
      d(D => D.filter(C => C.url !== g))
    },
    updateShortcut: (g, D) => {
      d(C => C.map(E => E.url === g ? D : E))
    }
  };
  return f.jsx(zh.Provider, {
    value: S,
    children: c
  })
}

function Dy({
  shortcut: c,
  onSave: r,
  onDelete: d,
  onClose: s
}) {
  const [m, v] = U.useState(c.name), [x, j] = U.useState(c.url), S = m !== c.name || x !== c.url, g = () => {
    if (!m.trim() || !x.trim()) {
      alert("Name and URL cannot be empty.");
      return
    }
    r({
      ...c,
      name: m.trim(),
      url: x.trim()
    })
  }, D = () => {
    window.confirm(`Are you sure you want to delete the "${c.name}" shortcut?`) && d(c.url)
  };
  return U.useEffect(() => {
    const C = E => {
      E.key === "Escape" && s()
    };
    return window.addEventListener("keydown", C), () => window.removeEventListener("keydown", C)
  }, [s]), f.jsx("div", {
    className: "modal-overlay",
    onClick: s,
    children: f.jsxs("div", {
      className: "modal-content",
      onClick: C => C.stopPropagation(),
      children: [f.jsx("h3", {
        className: "modal-title",
        children: "Edit Shortcut"
      }), f.jsxs("div", {
        className: "modal-input-group",
        children: [f.jsx("label", {
          htmlFor: "edit-name",
          children: "Name"
        }), f.jsx("input", {
          id: "edit-name",
          type: "text",
          value: m,
          onChange: C => v(C.target.value),
          className: "modal-input"
        })]
      }), f.jsxs("div", {
        className: "modal-input-group",
        children: [f.jsx("label", {
          htmlFor: "edit-url",
          children: "URL"
        }), f.jsx("input", {
          id: "edit-url",
          type: "text",
          value: x,
          onChange: C => j(C.target.value),
          className: "modal-input"
        })]
      }), f.jsxs("div", {
        className: "modal-actions",
        children: [f.jsx("button", {
          onClick: D,
          className: "modal-btn delete",
          children: "Delete"
        }), f.jsx("button", {
          onClick: g,
          className: "modal-btn save",
          disabled: !S,
          children: "Save"
        })]
      }), f.jsx("button", {
        onClick: s,
        className: "modal-close-btn",
        "aria-label": "Close",
        children: "×"
      })]
    })
  })
}

function wh({
  shortcuts: c,
  faviconCache: r,
  isSettingsOpen: d,
  newShortcutUrl: s,
  onUrlChange: m,
  newShortcutName: v,
  onNameChange: x,
  onAddShortcut: j,
  onDeleteShortcut: S,
  onPaste: g,
  deleteIconPath: D,
  onEditShortcut: C,
  editIconPath: E
}) {
  return f.jsxs("div", {
    className: `shortcut-section animated ${!d&&c.length===0?"empty-shortcuts-hidden":""}`,
    children: [d && f.jsxs("div", {
      id: "addShortcut",
      className: "add-shortcut-container animated",
      children: [f.jsxs("div", {
        className: "input-with-paste",
        children: [f.jsx("input", {
          type: "text",
          className: "shortcut-input",
          placeholder: "Your URL",
          value: s,
          onChange: m,
          onKeyDown: R => R.key === "Enter" && j()
        }), f.jsx("button", {
          className: "paste-btn",
          onClick: g,
          title: "Paste from Clipboard",
          children: f.jsx("img", {
            src: Nh,
            alt: "Paste"
          })
        })]
      }), f.jsx("input", {
        type: "text",
        className: "shortcut-input",
        placeholder: "Enter NickName",
        value: v,
        onChange: x,
        onKeyDown: R => R.key === "Enter" && j()
      }), f.jsx("button", {
        id: "addShortcutBtn",
        onClick: j,
        "aria-label": "Add Shortcut",
        disabled: !v.trim() || !s.trim(),
        children: "+"
      })]
    }), f.jsxs("div", {
      id: "shortcuts",
      children: [c.map(R => {
        let B = "";
        try {
          B = new URL(R.url).hostname.replace("www.", "")
        } catch {
          return null
        }
        const Z = R.name || B,
          w = R.icon || r[B];
        return f.jsxs("div", {
          className: "shortcut-item-wrapper",
          children: [f.jsxs("div", {
            className: "shortcut",
            children: [f.jsx("a", {
              className: "link",
              href: R.url,
              rel: "noopener noreferrer",
              title: Z,
              children: w ? f.jsx("img", {
                className: "shortcut-icon",
                src: w,
                alt: Z
              }) : f.jsx("p", {
                className: "shortcut-text",
                children: Z.charAt(0).toUpperCase()
              })
            }), d && f.jsx("button", {
              className: "edit-btn",
              onClick: () => C(R),
              "aria-label": `Edit ${R.name}`,
              children: f.jsx("img", {
                className: "edit-icon",
                src: E,
                alt: "Edit"
              })
            })]
          }), f.jsx("p", {
            className: "shortcut-sub",
            children: Z
          })]
        }, R.url)
      }), c.length === 0 && !d && f.jsx("p", {
        className: "no-shortcuts",
        children: "Add shortcuts via the settings panel."
      })]
    })]
  })
}
wh.propTypes = {
  shortcuts: dt.array.isRequired,
  faviconCache: dt.object.isRequired,
  isSettingsOpen: dt.bool.isRequired,
  newShortcutUrl: dt.string.isRequired,
  onUrlChange: dt.func.isRequired,
  newShortcutName: dt.string.isRequired,
  onNameChange: dt.func.isRequired,
  onAddShortcut: dt.func.isRequired,
  onDeleteShortcut: dt.func.isRequired,
  deleteIconPath: dt.string.isRequired,
  onPaste: dt.func.isRequired,
  onEditShortcut: dt.func.isRequired,
  editIconPath: dt.string.isRequired
};

function _y({
  isSettingsOpen: c
}) {
  const {
    shortcuts: r,
    faviconCache: d,
    addShortcut: s,
    deleteShortcut: m,
    updateShortcut: v
  } = Ny(), [x, j] = U.useState(""), [S, g] = U.useState(""), [D, C] = U.useState(null), E = O => {
    var K;
    const q = O.target.value;
    j(q);
    try {
      const W = q.replace(/^(https?:\/\/)?(www\.)?/, "").split("/")[0],
        G = ((K = Object.keys(xh).find(F => W && F.includes(W))) == null ? void 0 : K.split(".")[0].replace(/^\w/, F => F.toUpperCase())) || "";
      g(G)
    } catch {
      g("")
    }
  }, R = async () => {
    try {
      const O = await navigator.clipboard.readText();
      O && E({
        target: {
          value: O
        }
      })
    } catch (O) {
      console.error("Failed to read clipboard contents: ", O)
    }
  }, B = async () => {
    await s(x, S), j(""), g("")
  }, Z = O => {
    v(D.url, O), C(null)
  }, w = O => {
    m(O), C(null)
  };
  return f.jsxs(f.Fragment, {
    children: [D && f.jsx(Dy, {
      shortcut: D,
      onSave: Z,
      onDelete: w,
      onClose: () => C(null)
    }), f.jsx(wh, {
      shortcuts: r,
      faviconCache: d,
      isSettingsOpen: c,
      newShortcutUrl: x,
      onUrlChange: E,
      onPaste: R,
      newShortcutName: S,
      onNameChange: O => g(O.target.value),
      onAddShortcut: B,
      onDeleteShortcut: m,
      onEditShortcut: O => C(O),
      editIconPath: wv
    })]
  })
}

  /* --- Adaptive widget panels ---------------------------------------------
     Widget glass is #ffffff26 (15% white) with white text, so on a bright
     wallpaper the panel itself goes near-white and the text disappears.
     White text on that glass only reaches WCAG AA (4.5:1) while the backdrop
     stays below ~0.37 mean luminance, so we sample the wallpaper region
     actually behind each panel and flip it to dark glass above 0.4.
     Panels live behind .floating-widget and #shortcuts, and are draggable,
     so the decision is per-element and re-run on resize / drag-end. */
  let _wallMap = null,
    _wallBound = !1;

  function _cssPlacement() {
    const m = _wallMap,
      W = window.innerWidth,
      H = window.innerHeight,
      cs = getComputedStyle(document.body),
      size = (cs.backgroundSize || 'cover').trim().split(/\s+/);
    let dw, dh;
    if (size[0] === 'cover' || size[0] === 'contain') {
      const k = Math[size[0] === 'cover' ? 'max' : 'min'](W / m.iw, H / m.ih);
      dw = m.iw * k, dh = m.ih * k;
    } else {
      const len = (v, base) => v == null || v === 'auto' ? null : v.indexOf('%') > -1 ? base * parseFloat(v) / 100 : parseFloat(v);
      dw = len(size[0], W), dh = len(size[1] === void 0 ? size[0] : size[1], H);
      if (dw === null) dw = m.iw;
      if (dh === null) dh = m.ih;
    }
    const kw = { left: 0, top: 0, center: .5, right: 1, bottom: 1 },
      pos = (cs.backgroundPosition || '50% 50%').trim().split(/\s+/),
      frac = v => v === void 0 ? .5 : kw[v] !== void 0 ? kw[v] : v.indexOf('%') > -1 ? parseFloat(v) / 100 : .5;
    return { dw, dh, ox: (W - dw) * frac(pos[0]), oy: (H - dh) * frac(pos[1] === void 0 ? pos[0] : pos[1]) };
  }

  function _regionLum(c) {
    if (!_wallMap) return null;
    const m = _wallMap,
      g = _cssPlacement(),
      u0 = (c.left - g.ox) / g.dw, u1 = (c.right - g.ox) / g.dw,
      v0 = (c.top - g.oy) / g.dh, v1 = (c.bottom - g.oy) / g.dh;
    let sum = 0, n = 0;
    for (let iy = 0; iy < 5; iy++)
      for (let ix = 0; ix < 5; ix++) {
        const u = u0 + (u1 - u0) * (ix + .5) / 5,
          v = v0 + (v1 - v0) * (iy + .5) / 5,
          px = Math.min(m.cw - 1, Math.max(0, Math.round(u * m.cw - .5))),
          py = Math.min(m.ch - 1, Math.max(0, Math.round(v * m.ch - .5))),
          o = (py * m.cw + px) * 4;
        sum += (.2126 * m.data[o] + .7152 * m.data[o + 1] + .0722 * m.data[o + 2]) / 255, n++;
      }
    return n ? sum / n : null;
  }

  function _applyPanelAdaptive() {
    if (!_wallMap || !document.body.classList.contains('canvas-mode-active')) return;
    const els = document.querySelectorAll('.floating-widget,#shortcuts');
    for (let i = 0; i < els.length; i++) {
      const c = els[i].getBoundingClientRect();
      if (!c.width || !c.height) continue;
      const L = _regionLum(c);
      L !== null && els[i].classList.toggle('on-light', L > .4);
    }
  }

  function _bindPanelAdaptive() {
    if (_wallBound) return;
    _wallBound = !0;
    let t = null;
    const run = () => {
      clearTimeout(t), t = setTimeout(_applyPanelAdaptive, 80);
    };
    window.addEventListener('resize', run), window.addEventListener('pointerup', run);
  }

  function _buildWallMap(src) {
    try {
      const im = new Image();
      im.onload = () => {
        try {
          const cv = document.createElement('canvas');
          cv.width = 96, cv.height = 54;
          const cx = cv.getContext('2d');
          cx.drawImage(im, 0, 0, 96, 54), _wallMap = {
            data: cx.getImageData(0, 0, 96, 54).data,
            cw: 96, ch: 54,
            iw: im.naturalWidth || 96, ih: im.naturalHeight || 54
          }, _applyPanelAdaptive(), _bindPanelAdaptive(), setTimeout(_applyPanelAdaptive, 400);
        } catch (_e) {}
      }, im.onerror = () => {
        _wallMap = null;
      }, im.src = src;
    } catch (_e) {}
  }

  function Ay() {
  const [c, r] = U.useState(""), [d, s] = U.useState(""), [m, v] = U.useState(!1), [x, j] = U.useState(() => Ot("customMessage", "")), S = Jl(), {showShortcuts: _sc, showClock: _cc} = S, g = U.useRef(null), D = U.useRef(null), C = U.useRef(null);
  return U.useEffect(() => {
    localStorage.setItem("customMessage", x)
  }, [x]), U.useEffect(() => {
    var w;
    const E = document.documentElement,
      R = D.current,
      B = document.getElementById("date"),
      Z = g.current;
    if (E.style.cssText = "", document.body.style.cssText = "", R && (R.style.cssText = ""), B && (B.style.cssText = ""), Z && (Z.style.cssText = ""), document.body.classList.remove("canvas-mode-active", "light-mode-active", "canvas-glass-on"), Object.values(Ua).forEach(O => {
        document.body.classList.remove(`theme-${O.cssClass}`)
      }), R && (R.className = ""), Z && (Z.className = "msg"), S.mode === "canvas") {
      document.body.classList.add("canvas-mode-active");
      const O = S.canvasImageSrc || Uv;
      E.style.setProperty("--canvas-bg-image", `url(${O})`), document.body.style.backgroundSize = S.canvasImageFit, document.body.style.backgroundPosition = `center ${S.canvasImagePosition}%`;
      (() => {
        try {
          const _im = new Image();
          _im.onload = () => {
            try {
              const _cv = document.createElement("canvas");
              _cv.width = 64, _cv.height = 36;
              const _ct = _cv.getContext("2d");
              _ct.drawImage(_im, 0, 0, 64, 36);
              const _dt = _ct.getImageData(0, 0, 64, 36).data;
              let _sm = 0, _ctr = 0;
              for (let _y = 0; _y < 9; _y++)
                for (let _x = 13; _x < 51; _x++) {
                  const _p = (_y * 64 + _x) * 4;
                  _sm += 0.2126 * _dt[_p] + 0.7152 * _dt[_p + 1] + 0.0722 * _dt[_p + 2], _ctr++
                }
              _ctr && document.body.classList.toggle("clock-on-light", _sm / _ctr / 255 > 0.62)
            } catch (_e) {}
          };
          _im.src = O
        } catch (_e) {}
      })();
      _buildWallMap(O);
      const q = (100 - S.canvasBgOpacity) / 100;
      E.style.setProperty("--canvas-bg-overlay-opacity", q), E.style.setProperty("--canvas-accent-color", S.canvasAccentColor), E.style.setProperty("--msg-color", S.canvasQuoteColor), S.canvasGlassEffect ? (document.body.classList.add("canvas-glass-on"), R && R.classList.add("glass-text-effect")) : (R && (R.style.color = S.canvasAccentColor), B && (B.style.color = S.canvasAccentColor), R && (R.style.opacity = "0.8"), B && (B.style.opacity = "0.8")), Z && (S.canvasQuotePop && Z.classList.add("quote-pop-effect"), Z.style.color = S.canvasQuoteColor)
    } else {
      const O = Ua.hasOwnProperty(S.currentThemeIdentifier);
      if (S.isLightMode && O && document.body.classList.add("light-mode-active"), S.isLightMode && document.body.classList.add("light-mode-active"), S.isCreatingTheme) E.style.setProperty("--text-clock", S.newThemeAccent), E.style.setProperty("--text-date", `${S.newThemeAccent}b3`), E.style.setProperty("--bg-body-parallel", S.newThemeBackground), E.style.setProperty("--bg-shortcuts-container", S.newThemeAccent), E.style.setProperty("--bg-add-shortcut-btn", S.newThemeAccent), Z && (E.style.setProperty("--msg-color", S.newThemeQuote), Z.classList.add("custom-quote-color"));
      else {
        let q = S.customThemes.find(K => K.id === S.currentThemeIdentifier);
        if (q) E.style.setProperty("--text-clock", q.accent), E.style.setProperty("--text-date", `${q.accent}b3`), E.style.setProperty("--bg-body-parallel", q.background), E.style.setProperty("--bg-shortcuts-container", q.accent), E.style.setProperty("--bg-add-shortcut-btn", q.accent), Z && q.quote ? (E.style.setProperty("--msg-color", q.quote), Z.classList.add("custom-quote-color")) : E.style.removeProperty("--msg-color");
        else {
          const K = ((w = Ua[S.currentThemeIdentifier]) == null ? void 0 : w.cssClass) || "lavender";
          document.body.classList.add(`theme-${K}`)
        }
      }
    }
    if (D.current) {
      const O = Th.find(q => q.value === S.selectedFont);
      O && (D.current.style.fontFamily = O.fontFamily, D.current.style.fontWeight = O.fontWeight, D.current.style.letterSpacing = O.letterSpacing || "normal", D.current.style.fontSize = O.fontSize || "normal")
    }
  }, [S]), U.useEffect(() => {
    const E = () => {
      const B = new Date;
      let Z = B.getHours(),
        w = "";
      S.is24HourFormat || (w = Z >= 12 ? " PM" : " AM", Z = Z % 12 || 12);
      const O = String(Z).padStart(2, "0"),
        q = String(B.getMinutes()).padStart(2, "0");
      r(S.is24HourFormat ? `${O}:${q}` : `${O}:${q}${w}`), s(B.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      }))
    };
    E();
    const R = setInterval(E, 1e3);
    return () => clearInterval(R)
  }, [S.is24HourFormat]), f.jsxs(f.Fragment, {
    children: [f.jsx("div", {
      id: "settings-button",
      onClick: () => v(!m),
      children: f.jsx("img", {
        className: "settings-icon",
        src: Cv,
        alt: "settings"
      })
    }), f.jsx(Rh, {
      isOpen: m,
      fileInputRef: C,
      linkExternalIconPath: Rv,
      reportIconPath: zv
    }), f.jsx(Jv, {}), f.jsx("div", {
      className: "body-parallel",
      children: f.jsxs("div", {
        className: "main-container",
        children: [_cc && f.jsx("div", {
          className: "clock-top",
          children: f.jsx(yh, {
            currentTime: c,
            currentDate: d,
            customMessage: x,
            isSettingsOpen: m,
            onMessageChange: E => j(E.target.value),
            onMessageKeyDown: E => {
              E.key === "Enter" && (E.preventDefault(), E.target.blur())
            },
            clockRef: D,
            msgRef: g
          })
        }), _sc && f.jsx(_y, {
          isSettingsOpen: m
        })]
      })
    })]
  })
}
dv.createRoot(document.getElementById("root")).render(f.jsx(Zt.StrictMode, {
  children: f.jsx(Wv, {
    children: f.jsx(Ey, {
      children: f.jsx(Kv, {
        children: f.jsx(Ay, {})
      })
    })
  })
}));