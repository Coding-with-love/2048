! function(e) {
    var t = {};

    function i(n) {
        if (t[n]) return t[n].exports;
        var a = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(a.exports, a, a.exports, i), a.l = !0, a.exports
    }
    i.m = e, i.c = t, i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "/packs/", i(i.s = 415)
}([function(e, t, i) {
    "use strict";
    t.__esModule = !0, t.default = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
}, function(e, t, i) {
    "use strict";
    t.__esModule = !0;
    var n, a = i(59),
        r = (n = a) && n.__esModule ? n : {
            default: n
        };
    t.default = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), (0, r.default)(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i), n && e(t, n), t
        }
    }()
}, function(e, t) {
    var i = e.exports = {
        version: "2.6.9"
    };
    "number" == typeof __e && (__e = i)
}, function(e, t, i) {
    e.exports = {
        default: i(141),
        __esModule: !0
    }
}, function(e, t, i) {
    var n = i(45)("wks"),
        a = i(32),
        r = i(9).Symbol,
        s = "function" == typeof r;
    (e.exports = function(e) {
        return n[e] || (n[e] = s && r[e] || (s ? r : a)("Symbol." + e))
    }).store = n
}, function(e, t, i) {
    "use strict";
    t.__esModule = !0;
    var n, a = i(73),
        r = (n = a) && n.__esModule ? n : {
            default: n
        };
    t.default = function(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" !== ("undefined" === typeof t ? "undefined" : (0, r.default)(t)) && "function" !== typeof t ? e : t
    }
}, function(e, t, i) {
    "use strict";
    t.__esModule = !0;
    var n = s(i(143)),
        a = s(i(147)),
        r = s(i(73));

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.default = function(e, t) {
        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" === typeof t ? "undefined" : (0, r.default)(t)));
        e.prototype = (0, a.default)(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (n.default ? (0, n.default)(e, t) : e.__proto__ = t)
    }
}, function(e, t, i) {
    var n = i(9),
        a = i(2),
        r = i(15),
        s = i(13),
        o = i(17),
        l = function(e, t, i) {
            var u, h, c, f = e & l.F,
                v = e & l.G,
                d = e & l.S,
                m = e & l.P,
                p = e & l.B,
                g = e & l.W,
                y = v ? a : a[t] || (a[t] = {}),
                b = y.prototype,
                x = v ? n : d ? n[t] : (n[t] || {}).prototype;
            for (u in v && (i = t), i)(h = !f && x && void 0 !== x[u]) && o(y, u) || (c = h ? x[u] : i[u], y[u] = v && "function" != typeof x[u] ? i[u] : p && h ? r(c, n) : g && x[u] == c ? function(e) {
                var t = function(t, i, n) {
                    if (this instanceof e) {
                        switch (arguments.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(t);
                            case 2:
                                return new e(t, i)
                        }
                        return new e(t, i, n)
                    }
                    return e.apply(this, arguments)
                };
                return t.prototype = e.prototype, t
            }(c) : m && "function" == typeof c ? r(Function.call, c) : c, m && ((y.virtual || (y.virtual = {}))[u] = c, e & l.R && b && !b[u] && s(b, u, c)))
        };
    l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, e.exports = l
}, function(e, t, i) {
    var n = i(14),
        a = i(49),
        r = i(44),
        s = Object.defineProperty;
    t.f = i(10) ? Object.defineProperty : function(e, t, i) {
        if (n(e), t = r(t, !0), n(i), a) try {
            return s(e, t, i)
        } catch (e) {}
        if ("get" in i || "set" in i) throw TypeError("Accessors not supported!");
        return "value" in i && (e[t] = i.value), e
    }
}, function(e, t) {
    var i = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = i)
}, function(e, t, i) {
    e.exports = !i(19)(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(e, t) {
    e.exports = function(e) {
        return "object" === typeof e ? null !== e : "function" === typeof e
    }
}, function(e, t, i) {
    e.exports = {
        default: i(79),
        __esModule: !0
    }
}, function(e, t, i) {
    var n = i(8),
        a = i(23);
    e.exports = i(10) ? function(e, t, i) {
        return n.f(e, t, a(1, i))
    } : function(e, t, i) {
        return e[t] = i, e
    }
}, function(e, t, i) {
    var n = i(11);
    e.exports = function(e) {
        if (!n(e)) throw TypeError(e + " is not an object!");
        return e
    }
}, function(e, t, i) {
    var n = i(36);
    e.exports = function(e, t, i) {
        if (n(e), void 0 === t) return e;
        switch (i) {
            case 1:
                return function(i) {
                    return e.call(t, i)
                };
            case 2:
                return function(i, n) {
                    return e.call(t, i, n)
                };
            case 3:
                return function(i, n, a) {
                    return e.call(t, i, n, a)
                }
        }
        return function() {
            return e.apply(t, arguments)
        }
    }
}, function(e, t, i) {
    "use strict";
    t.__esModule = !0;
    var n = r(i(66)),
        a = r(i(12));

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.default = function() {
        return function(e, t) {
            if (Array.isArray(e)) return e;
            if ((0, n.default)(Object(e))) return function(e, t) {
                var i = [],
                    n = !0,
                    r = !1,
                    s = void 0;
                try {
                    for (var o, l = (0, a.default)(e); !(n = (o = l.next()).done) && (i.push(o.value), !t || i.length !== t); n = !0);
                } catch (e) {
                    r = !0, s = e
                } finally {
                    try {
                        !n && l.return && l.return()
                    } finally {
                        if (r) throw s
                    }
                }
                return i
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }()
}, function(e, t) {
    var i = {}.hasOwnProperty;
    e.exports = function(e, t) {
        return i.call(e, t)
    }
}, function(e, t) {
    e.exports = {}
}, function(e, t) {
    e.exports = function(e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}, function(e, t, i) {
    var n = i(55),
        a = i(37);
    e.exports = function(e) {
        return n(a(e))
    }
}, function(e, t, i) {
    "use strict";
    var n = i(86)(!0);
    i(38)(String, "String", function(e) {
        this._t = String(e), this._i = 0
    }, function() {
        var e, t = this._t,
            i = this._i;
        return i >= t.length ? {
            value: void 0,
            done: !0
        } : (e = n(t, i), this._i += e.length, {
            value: e,
            done: !1
        })
    })
}, function(e, t, i) {
    e.exports = {
        default: i(101),
        __esModule: !0
    }
}, function(e, t) {
    e.exports = function(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
}, function(e, t, i) {
    "use strict";
    t.__esModule = !0;
    var n = r(i(3)),
        a = r(i(134));

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.default = function e(t, i, r) {
        null === t && (t = Function.prototype);
        var s = (0, a.default)(t, i);
        if (void 0 === s) {
            var o = (0, n.default)(t);
            return null === o ? void 0 : e(o, i, r)
        }
        if ("value" in s) return s.value;
        var l = s.get;
        return void 0 !== l ? l.call(r) : void 0
    }
}, function(e, t, i) {
    i(80);
    for (var n = i(9), a = i(13), r = i(18), s = i(4)("toStringTag"), o = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), l = 0; l < o.length; l++) {
        var u = o[l],
            h = n[u],
            c = h && h.prototype;
        c && !c[s] && a(c, s, u), r[u] = r.Array
    }
}, function(e, t, i) {
    var n = i(15),
        a = i(56),
        r = i(57),
        s = i(14),
        o = i(27),
        l = i(42),
        u = {},
        h = {};
    (t = e.exports = function(e, t, i, c, f) {
        var v, d, m, p, g = f ? function() {
                return e
            } : l(e),
            y = n(i, c, t ? 2 : 1),
            b = 0;
        if ("function" != typeof g) throw TypeError(e + " is not iterable!");
        if (r(g)) {
            for (v = o(e.length); v > b; b++)
                if ((p = t ? y(s(d = e[b])[0], d[1]) : y(e[b])) === u || p === h) return p
        } else
            for (m = g.call(e); !(d = m.next()).done;)
                if ((p = a(m, y, d.value, t)) === u || p === h) return p
    }).BREAK = u, t.RETURN = h
}, function(e, t, i) {
    var n = i(40),
        a = Math.min;
    e.exports = function(e) {
        return e > 0 ? a(n(e), 9007199254740991) : 0
    }
}, function(e, t, i) {
    var n = i(37);
    e.exports = function(e) {
        return Object(n(e))
    }
}, function(e, t, i) {
    var n = i(8).f,
        a = i(17),
        r = i(4)("toStringTag");
    e.exports = function(e, t, i) {
        e && !a(e = i ? e : e.prototype, r) && n(e, r, {
            configurable: !0,
            value: t
        })
    }
}, function(e, t, i) {
    e.exports = {
        default: i(98),
        __esModule: !0
    }
}, function(e, t, i) {
    "use strict";
    t.__esModule = !0;
    var n, a = i(30),
        r = (n = a) && n.__esModule ? n : {
            default: n
        };
    t.default = function(e) {
        if (Array.isArray(e)) {
            for (var t = 0, i = Array(e.length); t < e.length; t++) i[t] = e[t];
            return i
        }
        return (0, r.default)(e)
    }
}, function(e, t) {
    var i = 0,
        n = Math.random();
    e.exports = function(e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++i + n).toString(36))
    }
}, function(e, t) {
    var i = {}.toString;
    e.exports = function(e) {
        return i.call(e).slice(8, -1)
    }
}, function(e, t) {
    e.exports = !0
}, function(e, t, i) {
    var n = i(33),
        a = i(4)("toStringTag"),
        r = "Arguments" == n(function() {
            return arguments
        }());
    e.exports = function(e) {
        var t, i, s;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(i = function(e, t) {
            try {
                return e[t]
            } catch (e) {}
        }(t = Object(e), a)) ? i : r ? n(t) : "Object" == (s = n(t)) && "function" == typeof t.callee ? "Arguments" : s
    }
}, function(e, t) {
    e.exports = function(e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e
    }
}, function(e, t) {
    e.exports = function(e) {
        if (void 0 == e) throw TypeError("Can't call method on  " + e);
        return e
    }
}, function(e, t, i) {
    "use strict";
    var n = i(34),
        a = i(7),
        r = i(62),
        s = i(13),
        o = i(18),
        l = i(82),
        u = i(29),
        h = i(65),
        c = i(4)("iterator"),
        f = !([].keys && "next" in [].keys()),
        v = function() {
            return this
        };
    e.exports = function(e, t, i, d, m, p, g) {
        l(i, t, d);
        var y, b, x, w = function(e) {
                if (!f && e in _) return _[e];
                switch (e) {
                    case "keys":
                    case "values":
                        return function() {
                            return new i(this, e)
                        }
                }
                return function() {
                    return new i(this, e)
                }
            },
            k = t + " Iterator",
            q = "values" == m,
            j = !1,
            _ = e.prototype,
            S = _[c] || _["@@iterator"] || m && _[m],
            z = S || w(m),
            C = m ? q ? w("entries") : z : void 0,
            T = "Array" == t && _.entries || S;
        if (T && (x = h(T.call(new e))) !== Object.prototype && x.next && (u(x, k, !0), n || "function" == typeof x[c] || s(x, c, v)), q && S && "values" !== S.name && (j = !0, z = function() {
                return S.call(this)
            }), n && !g || !f && !j && _[c] || s(_, c, z), o[t] = z, o[k] = v, m)
            if (y = {
                    values: q ? z : w("values"),
                    keys: p ? z : w("keys"),
                    entries: C
                }, g)
                for (b in y) b in _ || r(_, b, y[b]);
            else a(a.P + a.F * (f || j), t, y);
        return y
    }
}, function(e, t, i) {
    var n = i(14),
        a = i(83),
        r = i(46),
        s = i(41)("IE_PROTO"),
        o = function() {},
        l = function() {
            var e, t = i(43)("iframe"),
                n = r.length;
            for (t.style.display = "none", i(77).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), l = e.F; n--;) delete l.prototype[r[n]];
            return l()
        };
    e.exports = Object.create || function(e, t) {
        var i;
        return null !== e ? (o.prototype = n(e), i = new o, o.prototype = null, i[s] = e) : i = l(), void 0 === t ? i : a(i, t)
    }
}, function(e, t) {
    var i = Math.ceil,
        n = Math.floor;
    e.exports = function(e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? n : i)(e)
    }
}, function(e, t, i) {
    var n = i(45)("keys"),
        a = i(32);
    e.exports = function(e) {
        return n[e] || (n[e] = a(e))
    }
}, function(e, t, i) {
    var n = i(35),
        a = i(4)("iterator"),
        r = i(18);
    e.exports = i(2).getIteratorMethod = function(e) {
        if (void 0 != e) return e[a] || e["@@iterator"] || r[n(e)]
    }
}, function(e, t, i) {
    var n = i(11),
        a = i(9).document,
        r = n(a) && n(a.createElement);
    e.exports = function(e) {
        return r ? a.createElement(e) : {}
    }
}, function(e, t, i) {
    var n = i(11);
    e.exports = function(e, t) {
        if (!n(e)) return e;
        var i, a;
        if (t && "function" == typeof(i = e.toString) && !n(a = i.call(e))) return a;
        if ("function" == typeof(i = e.valueOf) && !n(a = i.call(e))) return a;
        if (!t && "function" == typeof(i = e.toString) && !n(a = i.call(e))) return a;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(e, t, i) {
    var n = i(2),
        a = i(9),
        r = a["__core-js_shared__"] || (a["__core-js_shared__"] = {});
    (e.exports = function(e, t) {
        return r[e] || (r[e] = void 0 !== t ? t : {})
    })("versions", []).push({
        version: n.version,
        mode: i(34) ? "pure" : "global",
        copyright: "\xa9 2019 Denis Pushkarev (zloirock.ru)"
    })
}, function(e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(e, t, i) {
    var n = i(32)("meta"),
        a = i(11),
        r = i(17),
        s = i(8).f,
        o = 0,
        l = Object.isExtensible || function() {
            return !0
        },
        u = !i(19)(function() {
            return l(Object.preventExtensions({}))
        }),
        h = function(e) {
            s(e, n, {
                value: {
                    i: "O" + ++o,
                    w: {}
                }
            })
        },
        c = e.exports = {
            KEY: n,
            NEED: !1,
            fastKey: function(e, t) {
                if (!a(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                if (!r(e, n)) {
                    if (!l(e)) return "F";
                    if (!t) return "E";
                    h(e)
                }
                return e[n].i
            },
            getWeak: function(e, t) {
                if (!r(e, n)) {
                    if (!l(e)) return !0;
                    if (!t) return !1;
                    h(e)
                }
                return e[n].w
            },
            onFreeze: function(e) {
                return u && c.NEED && l(e) && !r(e, n) && h(e), e
            }
        }
}, function(e, t, i) {
    var n = i(11);
    e.exports = function(e, t) {
        if (!n(e) || e._t !== t) throw TypeError("Incompatible receiver, " + t + " required!");
        return e
    }
}, function(e, t, i) {
    e.exports = !i(10) && !i(19)(function() {
        return 7 != Object.defineProperty(i(43)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(e, t, i) {
    var n = i(63),
        a = i(46);
    e.exports = Object.keys || function(e) {
        return n(e, a)
    }
}, function(e, t) {}, function(e, t, i) {
    var n = i(13);
    e.exports = function(e, t, i) {
        for (var a in t) i && e[a] ? e[a] = t[a] : n(e, a, t[a]);
        return e
    }
}, function(e, t) {
    e.exports = function(e, t, i, n) {
        if (!(e instanceof t) || void 0 !== n && n in e) throw TypeError(i + ": incorrect invocation!");
        return e
    }
}, function(e, t) {
    e.exports = function(e, t) {
        return {
            value: t,
            done: !!e
        }
    }
}, function(e, t, i) {
    var n = i(33);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
        return "String" == n(e) ? e.split("") : Object(e)
    }
}, function(e, t, i) {
    var n = i(14);
    e.exports = function(e, t, i, a) {
        try {
            return a ? t(n(i)[0], i[1]) : t(i)
        } catch (t) {
            var r = e.return;
            throw void 0 !== r && n(r.call(e)), t
        }
    }
}, function(e, t, i) {
    var n = i(18),
        a = i(4)("iterator"),
        r = Array.prototype;
    e.exports = function(e) {
        return void 0 !== e && (n.Array === e || r[a] === e)
    }
}, , function(e, t, i) {
    e.exports = {
        default: i(60),
        __esModule: !0
    }
}, function(e, t, i) {
    i(61);
    var n = i(2).Object;
    e.exports = function(e, t, i) {
        return n.defineProperty(e, t, i)
    }
}, function(e, t, i) {
    var n = i(7);
    n(n.S + n.F * !i(10), "Object", {
        defineProperty: i(8).f
    })
}, function(e, t, i) {
    e.exports = i(13)
}, function(e, t, i) {
    var n = i(17),
        a = i(20),
        r = i(84)(!1),
        s = i(41)("IE_PROTO");
    e.exports = function(e, t) {
        var i, o = a(e),
            l = 0,
            u = [];
        for (i in o) i != s && n(o, i) && u.push(i);
        for (; t.length > l;) n(o, i = t[l++]) && (~r(u, i) || u.push(i));
        return u
    }
}, function(e, t, i) {
    var n = i(33);
    e.exports = Array.isArray || function(e) {
        return "Array" == n(e)
    }
}, function(e, t, i) {
    var n = i(17),
        a = i(28),
        r = i(41)("IE_PROTO"),
        s = Object.prototype;
    e.exports = Object.getPrototypeOf || function(e) {
        return e = a(e), n(e, r) ? e[r] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? s : null
    }
}, function(e, t, i) {
    e.exports = {
        default: i(88),
        __esModule: !0
    }
}, function(e, t, i) {
    "use strict";
    var n = i(8).f,
        a = i(39),
        r = i(52),
        s = i(15),
        o = i(53),
        l = i(26),
        u = i(38),
        h = i(54),
        c = i(78),
        f = i(10),
        v = i(47).fastKey,
        d = i(48),
        m = f ? "_s" : "size",
        p = function(e, t) {
            var i, n = v(t);
            if ("F" !== n) return e._i[n];
            for (i = e._f; i; i = i.n)
                if (i.k == t) return i
        };
    e.exports = {
        getConstructor: function(e, t, i, u) {
            var h = e(function(e, n) {
                o(e, h, t, "_i"), e._t = t, e._i = a(null), e._f = void 0, e._l = void 0, e[m] = 0, void 0 != n && l(n, i, e[u], e)
            });
            return r(h.prototype, {
                clear: function() {
                    for (var e = d(this, t), i = e._i, n = e._f; n; n = n.n) n.r = !0, n.p && (n.p = n.p.n = void 0), delete i[n.i];
                    e._f = e._l = void 0, e[m] = 0
                },
                delete: function(e) {
                    var i = d(this, t),
                        n = p(i, e);
                    if (n) {
                        var a = n.n,
                            r = n.p;
                        delete i._i[n.i], n.r = !0, r && (r.n = a), a && (a.p = r), i._f == n && (i._f = a), i._l == n && (i._l = r), i[m]--
                    }
                    return !!n
                },
                forEach: function(e) {
                    d(this, t);
                    for (var i, n = s(e, arguments.length > 1 ? arguments[1] : void 0, 3); i = i ? i.n : this._f;)
                        for (n(i.v, i.k, this); i && i.r;) i = i.p
                },
                has: function(e) {
                    return !!p(d(this, t), e)
                }
            }), f && n(h.prototype, "size", {
                get: function() {
                    return d(this, t)[m]
                }
            }), h
        },
        def: function(e, t, i) {
            var n, a, r = p(e, t);
            return r ? r.v = i : (e._l = r = {
                i: a = v(t, !0),
                k: t,
                v: i,
                p: n = e._l,
                n: void 0,
                r: !1
            }, e._f || (e._f = r), n && (n.n = r), e[m]++, "F" !== a && (e._i[a] = r)), e
        },
        getEntry: p,
        setStrong: function(e, t, i) {
            u(e, t, function(e, i) {
                this._t = d(e, t), this._k = i, this._l = void 0
            }, function() {
                for (var e = this._k, t = this._l; t && t.r;) t = t.p;
                return this._t && (this._l = t = t ? t.n : this._t._f) ? h(0, "keys" == e ? t.k : "values" == e ? t.v : [t.k, t.v]) : (this._t = void 0, h(1))
            }, i ? "entries" : "values", !i, !0), c(t)
        }
    }
}, function(e, t, i) {
    "use strict";
    var n = i(9),
        a = i(7),
        r = i(47),
        s = i(19),
        o = i(13),
        l = i(52),
        u = i(26),
        h = i(53),
        c = i(11),
        f = i(29),
        v = i(8).f,
        d = i(90)(0),
        m = i(10);
    e.exports = function(e, t, i, p, g, y) {
        var b = n[e],
            x = b,
            w = g ? "set" : "add",
            k = x && x.prototype,
            q = {};
        return m && "function" == typeof x && (y || k.forEach && !s(function() {
            (new x).entries().next()
        })) ? (x = t(function(t, i) {
            h(t, x, e, "_c"), t._c = new b, void 0 != i && u(i, g, t[w], t)
        }), d("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","), function(e) {
            var t = "add" == e || "set" == e;
            e in k && (!y || "clear" != e) && o(x.prototype, e, function(i, n) {
                if (h(this, x, e), !t && y && !c(i)) return "get" == e && void 0;
                var a = this._c[e](0 === i ? 0 : i, n);
                return t ? this : a
            })
        }), y || v(x.prototype, "size", {
            get: function() {
                return this._c.size
            }
        })) : (x = p.getConstructor(t, e, g, w), l(x.prototype, i), r.NEED = !0), f(x, e), q[e] = x, a(a.G + a.W + a.F, q), y || p.setStrong(x, e, g), x
    }
}, function(e, t, i) {
    var n = i(35),
        a = i(93);
    e.exports = function(e) {
        return function() {
            if (n(this) != e) throw TypeError(e + "#toJSON isn't generic");
            return a(this)
        }
    }
}, function(e, t, i) {
    "use strict";
    var n = i(7);
    e.exports = function(e) {
        n(n.S, e, {
            of: function() {
                for (var e = arguments.length, t = new Array(e); e--;) t[e] = arguments[e];
                return new this(t)
            }
        })
    }
}, function(e, t, i) {
    "use strict";
    var n = i(7),
        a = i(36),
        r = i(15),
        s = i(26);
    e.exports = function(e) {
        n(n.S, e, {
            from: function(e) {
                var t, i, n, o, l = arguments[1];
                return a(this), (t = void 0 !== l) && a(l), void 0 == e ? new this : (i = [], t ? (n = 0, o = r(l, arguments[2], 2), s(e, !1, function(e) {
                    i.push(o(e, n++))
                })) : s(e, !1, i.push, i), new this(i))
            }
        })
    }
}, , function(e, t, i) {
    "use strict";
    t.__esModule = !0;
    var n = s(i(119)),
        a = s(i(121)),
        r = "function" === typeof a.default && "symbol" === typeof n.default ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" === typeof a.default && e.constructor === a.default && e !== a.default.prototype ? "symbol" : typeof e
        };

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.default = "function" === typeof a.default && "symbol" === r(n.default) ? function(e) {
        return "undefined" === typeof e ? "undefined" : r(e)
    } : function(e) {
        return e && "function" === typeof a.default && e.constructor === a.default && e !== a.default.prototype ? "symbol" : "undefined" === typeof e ? "undefined" : r(e)
    }
}, function(e, t, i) {
    t.f = i(4)
}, function(e, t, i) {
    var n = i(9),
        a = i(2),
        r = i(34),
        s = i(74),
        o = i(8).f;
    e.exports = function(e) {
        var t = a.Symbol || (a.Symbol = r ? {} : n.Symbol || {});
        "_" == e.charAt(0) || e in t || o(t, e, {
            value: s.f(e)
        })
    }
}, function(e, t) {
    t.f = {}.propertyIsEnumerable
}, function(e, t, i) {
    var n = i(9).document;
    e.exports = n && n.documentElement
}, function(e, t, i) {
    "use strict";
    var n = i(9),
        a = i(2),
        r = i(8),
        s = i(10),
        o = i(4)("species");
    e.exports = function(e) {
        var t = "function" == typeof a[e] ? a[e] : n[e];
        s && t && !t[o] && r.f(t, o, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
}, function(e, t, i) {
    i(25), i(21), e.exports = i(87)
}, function(e, t, i) {
    "use strict";
    var n = i(81),
        a = i(54),
        r = i(18),
        s = i(20);
    e.exports = i(38)(Array, "Array", function(e, t) {
        this._t = s(e), this._i = 0, this._k = t
    }, function() {
        var e = this._t,
            t = this._k,
            i = this._i++;
        return !e || i >= e.length ? (this._t = void 0, a(1)) : a(0, "keys" == t ? i : "values" == t ? e[i] : [i, e[i]])
    }, "values"), r.Arguments = r.Array, n("keys"), n("values"), n("entries")
}, function(e, t) {
    e.exports = function() {}
}, function(e, t, i) {
    "use strict";
    var n = i(39),
        a = i(23),
        r = i(29),
        s = {};
    i(13)(s, i(4)("iterator"), function() {
        return this
    }), e.exports = function(e, t, i) {
        e.prototype = n(s, {
            next: a(1, i)
        }), r(e, t + " Iterator")
    }
}, function(e, t, i) {
    var n = i(8),
        a = i(14),
        r = i(50);
    e.exports = i(10) ? Object.defineProperties : function(e, t) {
        a(e);
        for (var i, s = r(t), o = s.length, l = 0; o > l;) n.f(e, i = s[l++], t[i]);
        return e
    }
}, function(e, t, i) {
    var n = i(20),
        a = i(27),
        r = i(85);
    e.exports = function(e) {
        return function(t, i, s) {
            var o, l = n(t),
                u = a(l.length),
                h = r(s, u);
            if (e && i != i) {
                for (; u > h;)
                    if ((o = l[h++]) != o) return !0
            } else
                for (; u > h; h++)
                    if ((e || h in l) && l[h] === i) return e || h || 0;
            return !e && -1
        }
    }
}, function(e, t, i) {
    var n = i(40),
        a = Math.max,
        r = Math.min;
    e.exports = function(e, t) {
        return (e = n(e)) < 0 ? a(e + t, 0) : r(e, t)
    }
}, function(e, t, i) {
    var n = i(40),
        a = i(37);
    e.exports = function(e) {
        return function(t, i) {
            var r, s, o = String(a(t)),
                l = n(i),
                u = o.length;
            return l < 0 || l >= u ? e ? "" : void 0 : (r = o.charCodeAt(l)) < 55296 || r > 56319 || l + 1 === u || (s = o.charCodeAt(l + 1)) < 56320 || s > 57343 ? e ? o.charAt(l) : r : e ? o.slice(l, l + 2) : s - 56320 + (r - 55296 << 10) + 65536
        }
    }
}, function(e, t, i) {
    var n = i(14),
        a = i(42);
    e.exports = i(2).getIterator = function(e) {
        var t = a(e);
        if ("function" != typeof t) throw TypeError(e + " is not iterable!");
        return n(t.call(e))
    }
}, function(e, t, i) {
    i(25), i(21), e.exports = i(89)
}, function(e, t, i) {
    var n = i(35),
        a = i(4)("iterator"),
        r = i(18);
    e.exports = i(2).isIterable = function(e) {
        var t = Object(e);
        return void 0 !== t[a] || "@@iterator" in t || r.hasOwnProperty(n(t))
    }
}, function(e, t, i) {
    var n = i(15),
        a = i(55),
        r = i(28),
        s = i(27),
        o = i(91);
    e.exports = function(e, t) {
        var i = 1 == e,
            l = 2 == e,
            u = 3 == e,
            h = 4 == e,
            c = 6 == e,
            f = 5 == e || c,
            v = t || o;
        return function(t, o, d) {
            for (var m, p, g = r(t), y = a(g), b = n(o, d, 3), x = s(y.length), w = 0, k = i ? v(t, x) : l ? v(t, 0) : void 0; x > w; w++)
                if ((f || w in y) && (p = b(m = y[w], w, g), e))
                    if (i) k[w] = p;
                    else if (p) switch (e) {
                case 3:
                    return !0;
                case 5:
                    return m;
                case 6:
                    return w;
                case 2:
                    k.push(m)
            } else if (h) return !1;
            return c ? -1 : u || h ? h : k
        }
    }
}, function(e, t, i) {
    var n = i(92);
    e.exports = function(e, t) {
        return new(n(e))(t)
    }
}, function(e, t, i) {
    var n = i(11),
        a = i(64),
        r = i(4)("species");
    e.exports = function(e) {
        var t;
        return a(e) && ("function" != typeof(t = e.constructor) || t !== Array && !a(t.prototype) || (t = void 0), n(t) && null === (t = t[r]) && (t = void 0)), void 0 === t ? Array : t
    }
}, function(e, t, i) {
    var n = i(26);
    e.exports = function(e, t) {
        var i = [];
        return n(e, !1, i.push, i, t), i
    }
}, , function(e, t, i) {
    var n = i(76),
        a = i(23),
        r = i(20),
        s = i(44),
        o = i(17),
        l = i(49),
        u = Object.getOwnPropertyDescriptor;
    t.f = i(10) ? u : function(e, t) {
        if (e = r(e), t = s(t, !0), l) try {
            return u(e, t)
        } catch (e) {}
        if (o(e, t)) return a(!n.f.call(e, t), e[t])
    }
}, function(e, t, i) {
    var n = i(4)("iterator"),
        a = !1;
    try {
        var r = [7][n]();
        r.return = function() {
            a = !0
        }, Array.from(r, function() {
            throw 2
        })
    } catch (e) {}
    e.exports = function(e, t) {
        if (!t && !a) return !1;
        var i = !1;
        try {
            var r = [7],
                s = r[n]();
            s.next = function() {
                return {
                    done: i = !0
                }
            }, r[n] = function() {
                return s
            }, e(r)
        } catch (e) {}
        return i
    }
}, , function(e, t, i) {
    i(21), i(99), e.exports = i(2).Array.from
}, function(e, t, i) {
    "use strict";
    var n = i(15),
        a = i(7),
        r = i(28),
        s = i(56),
        o = i(57),
        l = i(27),
        u = i(100),
        h = i(42);
    a(a.S + a.F * !i(96)(function(e) {
        Array.from(e)
    }), "Array", {
        from: function(e) {
            var t, i, a, c, f = r(e),
                v = "function" == typeof this ? this : Array,
                d = arguments.length,
                m = d > 1 ? arguments[1] : void 0,
                p = void 0 !== m,
                g = 0,
                y = h(f);
            if (p && (m = n(m, d > 2 ? arguments[2] : void 0, 2)), void 0 == y || v == Array && o(y))
                for (i = new v(t = l(f.length)); t > g; g++) u(i, g, p ? m(f[g], g) : f[g]);
            else
                for (c = y.call(f), i = new v; !(a = c.next()).done; g++) u(i, g, p ? s(c, m, [a.value, g], !0) : a.value);
            return i.length = g, i
        }
    })
}, function(e, t, i) {
    "use strict";
    var n = i(8),
        a = i(23);
    e.exports = function(e, t, i) {
        t in e ? n.f(e, t, a(0, i)) : e[t] = i
    }
}, function(e, t, i) {
    i(51), i(21), i(25), i(102), i(103), i(104), i(105), e.exports = i(2).Map
}, function(e, t, i) {
    "use strict";
    var n = i(67),
        a = i(48);
    e.exports = i(68)("Map", function(e) {
        return function() {
            return e(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }, {
        get: function(e) {
            var t = n.getEntry(a(this, "Map"), e);
            return t && t.v
        },
        set: function(e, t) {
            return n.def(a(this, "Map"), 0 === e ? 0 : e, t)
        }
    }, n, !0)
}, function(e, t, i) {
    var n = i(7);
    n(n.P + n.R, "Map", {
        toJSON: i(69)("Map")
    })
}, function(e, t, i) {
    i(70)("Map")
}, function(e, t, i) {
    i(71)("Map")
}, function(e, t) {
    t.f = Object.getOwnPropertySymbols
}, function(e, t, i) {
    var n = i(63),
        a = i(46).concat("length", "prototype");
    t.f = Object.getOwnPropertyNames || function(e) {
        return n(e, a)
    }
}, , function(e, t, i) {
    var n = i(7),
        a = i(2),
        r = i(19);
    e.exports = function(e, t) {
        var i = (a.Object || {})[e] || Object[e],
            s = {};
        s[e] = t(i), n(n.S + n.F * r(function() {
            i(1)
        }), "Object", s)
    }
}, function(e, t, i) {
    "use strict";
    var n = i(30),
        a = i.n(n),
        r = i(12),
        s = i.n(r),
        o = i(16),
        l = i.n(o),
        u = i(22),
        h = i.n(u),
        c = i(0),
        f = i.n(c),
        v = i(1),
        d = i.n(v),
        m = function() {
            function e() {
                f()(this, e)
            }
            return d()(e, null, [{
                key: "normalizeInfinity",
                value: function(e) {
                    return ["infinity", "\u221e"].includes(e) ? e = 1 / 0 : ["-infinity", "-\u221e"].includes(e) && (e = -1 / 0), e
                }
            }, {
                key: "capitalize",
                value: function(e) {
                    return e.charAt(0).toUpperCase() + e.slice(1)
                }
            }]), e
        }(),
        p = function() {
            function e(t) {
                f()(this, e), this.namespace = t
            }
            return d()(e, [{
                key: "setupInput",
                value: function() {
                    var e = this;
                    this.controlsElement = $("#customizeControls"), this.tilesTableElement = $("#" + this.namespace + "ProbabilitiesParent"), this.controlsElement.on("keyup", ".form-tile-row input", function(t) {
                        e.ensureEmptyTileRow(e.tileRowFromEvent(t)), e.ensureSomeProbabilityIsAuto()
                    }), this.controlsElement.on("change", "select.tile-special-values", function(t) {
                        var i = $(t.target),
                            n = e.tileRowFromEvent(t);
                        n.setValue(i.find("option:selected").val()), e.ensureEmptyTileRow(n)
                    }), this.controlsElement.on("click", ".tile-row-delete", function(t) {
                        e.tileRowFromEvent(t).element.remove(), e.ensureSomeProbabilityIsAuto(), e.adjustAutoProbabilities()
                    }), $("#customizeControls [data-substitute]").each(function(e, t) {
                        var i = $(t),
                            n = $("#" + i.data("substitute"));
                        n.length && (i.on("change", function(e) {
                            n.val() == i.val() != i.prop("checked") && n.val(i.prop("checked") ? i.val() : 2)
                        }), n.on("keyup", function(e) {
                            var t = n.val() == i.val();
                            t != i.prop("checked") && i.prop("checked", t)
                        }))
                    }), this.tilesTableElement.on("change", "input.probability-auto", function(t) {
                        var i = e.tileRowFromEvent(t);
                        e.ensureSomeProbabilityIsAuto(i), e.adjustAutoProbabilities(), i.probabilityIsAuto() && e.ensureEmptyTileRow(i)
                    }), this.tilesTableElement.on("keyup", "input[name=probability]", function(t) {
                        var i = e.tileRowFromEvent(t);
                        i.probabilityIsAuto(i) && (i.toggleAutoProbability(!1), e.ensureSomeProbabilityIsAuto(i)), e.adjustAutoProbabilities()
                    }), this.tilesTableElement.on("blur", "input[name=probability]", function(t) {
                        e.tileRowFromEvent(t).coerceProbabilityToBeValid(), e.adjustAutoProbabilities()
                    })
                }
            }, {
                key: "collapse",
                value: function() {
                    this.controlsElement.collapse("hide")
                }
            }, {
                key: "adjustAutoProbabilities",
                value: function() {
                    var e = 1,
                        t = [];
                    if (this.eachTileRow(function(i) {
                            var n = i.element.find("input.probability-auto");
                            n.length && n.prop("checked") ? t.push(i) : e -= i.getProbability()
                        }), t.length) {
                        var i = g.roundNumberForProbability(e / t.length),
                            n = !0,
                            a = !1,
                            r = void 0;
                        try {
                            for (var o, l = s()(t); !(n = (o = l.next()).done); n = !0) {
                                o.value.setProbability(i)
                            }
                        } catch (e) {
                            a = !0, r = e
                        } finally {
                            try {
                                !n && l.return && l.return()
                            } finally {
                                if (a) throw r
                            }
                        }
                        var u = e - i * t.length,
                            h = t.shift();
                        h.setProbability(u + h.getProbability())
                    }
                }
            }, {
                key: "addTileRow",
                value: function(e) {
                    var t = e.value,
                        i = e.probability,
                        n = new g(this.tileRowTemplate().clone());
                    n.element.addClass("form-tile-row").removeClass("form-tile-row-template"), n.setValue(t), n.setProbability(i);
                    var a = [null, ""].includes(t) && [null, ""].includes(i);
                    n.toggleDelete(!a), n.toggleSpecialValueSelector(a), this.tilesTableElement.append(n.element.show())
                }
            }, {
                key: "ensureEmptyTileRow",
                value: function(e) {
                    var t = this.lastTileRow().isEmpty(),
                        i = e.isEmpty();
                    t || this.addTileRow({
                        value: "",
                        probability: ""
                    }), e.toggleDelete(!i), e.toggleSpecialValueSelector(i)
                }
            }, {
                key: "ensureSomeProbabilityIsAuto",
                value: function(e) {
                    var t = void 0,
                        i = !1;
                    this.eachTileRow(function(n) {
                        i || (n.probabilityIsAuto() ? i = !0 : t || e && n.element.is(e.element) || (t = n))
                    }), !i && t && t.toggleAutoProbability(!0)
                }
            }, {
                key: "combineDuplicateRows",
                value: function() {
                    var e = new h.a;
                    this.eachTileRow(function(t) {
                        var i = t.getValue();
                        if (e.has(i)) {
                            var n = e.get(i);
                            t.setProbability(t.getProbability() + n.getProbability()), e.set(t), n.element.remove()
                        }
                        e.set(i, t)
                    })
                }
            }, {
                key: "getSettingFromInputs",
                value: function(e, t) {
                    var i = t.type,
                        n = this.getInputElement(e);
                    if ("boolean" == i) return "checkbox" == n.prop("type") ? n.prop("checked") : !["", "false", 0].includes(n.val());
                    if ("hash" != i) {
                        var a = t.min,
                            r = t.max,
                            s = n.val();
                        return "mergeLimit" == e && ["", 0].includes(s) && (s = 1 / 0), s = m.normalizeInfinity(s), a && s < a ? s = a : r && s > r && (s = r), s
                    }
                    if ("probabilities" == e) {
                        var o = this.lastTileRow();
                        this.eachTileRow(function(e) {
                            var t = e.getValue(),
                                i = e.getProbability();
                            ([null, ""].includes(t) || Number(i) <= 0) && (e.element.is(o.element) ? e.setProbability("") : e.element.remove())
                        }), this.combineDuplicateRows(), this.adjustAutoProbabilities();
                        var l = {
                            iterable: new h.a
                        };
                        return this.eachTileRow(function(e) {
                            var t = e.getValue(),
                                i = e.getProbability();
                            ![null, ""].includes(t) && Number(i) > 0 && (l.iterable.set(t, i), l[t] = i)
                        }), l
                    }
                }
            }, {
                key: "setSettingToInputs",
                value: function(e, t, i) {
                    var n = i.type,
                        a = this.getInputElement(e);
                    if ("boolean" == n) "checkbox" == a.prop("type") ? a.prop("checked", t) : a.val(t);
                    else if ("hash" == n) {
                        if ("probabilities" == e) {
                            this.tilesTableElement.find(".form-tile-row").remove();
                            this.tileRowTemplate();
                            var r = !0,
                                o = !1,
                                u = void 0;
                            try {
                                for (var h, c = s()(t.iterable); !(r = (h = c.next()).done); r = !0) {
                                    var f = h.value,
                                        v = l()(f, 2),
                                        d = v[0],
                                        p = v[1];
                                    this.addTileRow({
                                        value: m.normalizeInfinity(d),
                                        probability: p
                                    })
                                }
                            } catch (e) {
                                o = !0, u = e
                            } finally {
                                try {
                                    !r && c.return && c.return()
                                } finally {
                                    if (o) throw u
                                }
                            }
                            this.addTileRow({
                                value: "",
                                probability: ""
                            }), this.ensureSomeProbabilityIsAuto(), this.adjustAutoProbabilities()
                        }
                    } else {
                        var g = $('input[data-substitute="' + this.namespace + m.capitalize(e) + '"]');
                        g.length && t == g.val() && g.prop("checked", !0), a.val(t)
                    }
                }
            }, {
                key: "eachTileRow",
                value: function(e) {
                    this.tilesTableElement.find(".form-tile-row").each(function(t, i) {
                        e(new g($(i)))
                    })
                }
            }, {
                key: "lastTileRow",
                value: function() {
                    return new g(this.tilesTableElement.find(".form-tile-row").last())
                }
            }, {
                key: "tileRowFromEvent",
                value: function(e) {
                    return new g($(e.target).closest(".form-tile-row"))
                }
            }, {
                key: "tileRowTemplate",
                value: function() {
                    return this.controlsElement.find(".form-tile-row-template")
                }
            }, {
                key: "getInputElement",
                value: function(e) {
                    return $("#" + this.namespace + m.capitalize(e))
                }
            }]), e
        }(),
        g = function() {
            function e(t) {
                f()(this, e), this.element = t
            }
            return d()(e, [{
                key: "isEmpty",
                value: function() {
                    var e = [null, ""];
                    return e.includes(this.getValue()) && e.includes(this.probabilityElement().val())
                }
            }, {
                key: "probabilityIsAuto",
                value: function() {
                    return this.element.find("input.probability-auto").prop("checked")
                }
            }, {
                key: "toggleAutoProbability",
                value: function(e) {
                    this.element.find("input.probability-auto").prop("checked", e)
                }
            }, {
                key: "toggleDelete",
                value: function(e) {
                    this.element.find(".tile-row-delete").toggle(e)
                }
            }, {
                key: "toggleSpecialValueSelector",
                value: function(e) {
                    this.element.find(".tile-special-values-container").toggle(e)
                }
            }, {
                key: "getValue",
                value: function() {
                    return m.normalizeInfinity(this.valueElement().val().toString())
                }
            }, {
                key: "getProbability",
                value: function() {
                    return Number(this.probabilityElement().val())
                }
            }, {
                key: "coerceProbabilityToBeValid",
                value: function() {
                    var t = this.getProbability(),
                        i = e.coerceForProbability(t);
                    t != i && this.setProbability(i)
                }
            }, {
                key: "setProbability",
                value: function(t) {
                    [null, ""].includes(t) && this.isEmpty() ? this.probabilityElement().val("") : this.probabilityElement().val(e.coerceForProbability(t))
                }
            }, {
                key: "setValue",
                value: function(e) {
                    this.valueElement().val(m.normalizeInfinity(e))
                }
            }, {
                key: "probabilityElement",
                value: function() {
                    return this.element.find("[name=probability]")
                }
            }, {
                key: "valueElement",
                value: function() {
                    return this.element.find("[name=value]")
                }
            }], [{
                key: "coerceForProbability",
                value: function(e) {
                    return isNaN(e) ? 0 : (e = Number(e)) < 0 ? 0 : e > 1 ? 1 : this.roundNumberForProbability(e)
                }
            }, {
                key: "roundNumberForProbability",
                value: function(e) {
                    return Math.round(1e3 * e) / 1e3
                }
            }]), e
        }(),
        y = function() {
            function e() {
                f()(this, e), this.subvariationTypes = ["difficulty", "list"], this.useLabels = $("input.labels").prop("checked"), this.resetGameplay(), this.preferences = this.defaults(e.preferencesAttributes)
            }
            return d()(e, [{
                key: "setupInput",
                value: function(e) {
                    var t = this;
                    "adjustable" == this.variation && (this.adjustableForm = new p("gameplaySettings"), this.adjustableForm.setupInput(), this.adjustableForm.controlsElement.on("hidden.bs.collapse shown.bs.collapse", function() {
                        e.requestRefreshGameSize()
                    }), this.adjustableForm.controlsElement.on("click", ".reset-to-defaults", function() {
                        t.loadGameplayFromPresets(), t.setToInputs()
                    }))
                }
            }, {
                key: "defaults",
                value: function(e) {
                    var t = e.defaultValue;
                    if (t instanceof h.a) {
                        var i = {
                                iterable: new h.a
                            },
                            n = !0,
                            a = !1,
                            r = void 0;
                        try {
                            for (var o, u = s()(t); !(n = (o = u.next()).done); n = !0) {
                                var c = o.value,
                                    f = l()(c, 2),
                                    v = f[0],
                                    d = f[1];
                                i[v] = this.defaults(d), i.iterable.set(v, i[v])
                            }
                        } catch (e) {
                            a = !0, r = e
                        } finally {
                            try {
                                !n && u.return && u.return()
                            } finally {
                                if (a) throw r
                            }
                        }
                        return i
                    }
                    return t
                }
            }, {
                key: "loadGameplayFromPresets",
                value: function() {
                    this.resetGameplayToJSON(this.gameplayPresets.get("variation"));
                    var e = this.gameplayPresets.get("subvariation_overrides"),
                        t = !0,
                        i = !1,
                        n = void 0;
                    try {
                        for (var a, r = s()(this.subvariationTypes); !(t = (a = r.next()).done); t = !0) {
                            var o = a.value,
                                l = this[o];
                            l && this.overrideGameplayFromJSON(e.get(o).get(l))
                        }
                    } catch (e) {
                        i = !0, n = e
                    } finally {
                        try {
                            !t && r.return && r.return()
                        } finally {
                            if (i) throw n
                        }
                    }
                }
            }, {
                key: "analyticsEventLabel",
                value: function() {
                    return "TwoThousandFortyEight-" + (this.analyticsVariation ? this.analyticsVariation : this.variation)
                }
            }, {
                key: "resetGameplayToJSON",
                value: function(e) {
                    this.resetGameplay(), this.overrideGameplayFromJSON(e)
                }
            }, {
                key: "resetGameplay",
                value: function() {
                    this.gameplay = {
                        iterable: new h.a
                    }
                }
            }, {
                key: "overrideGameplayFromJSON",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (e.probabilities) {
                        this.gameplay.probabilities = {
                            iterable: new h.a
                        };
                        var t = !0,
                            i = !1,
                            n = void 0;
                        try {
                            for (var a, r = s()(e.probabilities); !(t = (a = r.next()).done); t = !0) {
                                var o = a.value,
                                    u = l()(o, 2),
                                    c = u[0],
                                    f = u[1];
                                "" != c && (f = Number(f), c = c.toString(), this.gameplay.probabilities[c] = f, this.gameplay.probabilities.iterable.set(c, f))
                            }
                        } catch (e) {
                            i = !0, n = e
                        } finally {
                            try {
                                !t && r.return && r.return()
                            } finally {
                                if (i) throw n
                            }
                        }
                    }
                    for (var v = ["tunneling", "mergeLimit", "decrementTiles", "tunnelingTilesDisappear", "negativesAnnihilate", "negativesSubtract", "tileGoal", "width", "height", "addTileAfterMoveCount", "startTileCount", "listSuffix"], d = 0; d < v.length; d++) {
                        var m = v[d];
                        null != e[m] && (this.gameplay.iterable.set(m, e[m]), this.gameplay[m] = e[m])
                    }
                }
            }, {
                key: "overrideGameplayFromInputs",
                value: function() {
                    if (this.adjustableForm) {
                        var t = !0,
                            i = !1,
                            n = void 0;
                        try {
                            for (var a, r = s()(e.gameplaySettingsAttributes); !(t = (a = r.next()).done); t = !0) {
                                var o = a.value,
                                    u = l()(o, 2),
                                    h = u[0],
                                    c = u[1];
                                this.gameplay[h] = this.adjustableForm.getSettingFromInputs(h, c)
                            }
                        } catch (e) {
                            i = !0, n = e
                        } finally {
                            try {
                                !t && r.return && r.return()
                            } finally {
                                if (i) throw n
                            }
                        }
                    }
                }
            }, {
                key: "setAutoProbabilitiesFromJSON",
                value: function(e) {
                    e.autoProbabilities && (this.autoProbabilities = e.autoProbabilities)
                }
            }, {
                key: "loadAutoProbabilitiesFromInputs",
                value: function() {
                    var e = this;
                    this.adjustableForm && (this.autoProbabilities = [], this.adjustableForm.eachTileRow(function(t) {
                        t.probabilityIsAuto() && e.autoProbabilities.push(t.getValue())
                    }))
                }
            }, {
                key: "toJSONForGame",
                value: function() {
                    var e = {
                        probabilities: a()(this.gameplay.probabilities.iterable)
                    };
                    this.autoProbabilities && (e.autoProbabilities = this.autoProbabilities);
                    var t = !0,
                        i = !1,
                        n = void 0;
                    try {
                        for (var r, o = s()(this.subvariationTypes); !(t = (r = o.next()).done); t = !0) {
                            var l = r.value;
                            e[l] = this[l]
                        }
                    } catch (e) {
                        i = !0, n = e
                    } finally {
                        try {
                            !t && o.return && o.return()
                        } finally {
                            if (i) throw n
                        }
                    }
                    for (var u = ["tunneling", "mergeLimit", "decrementTiles", "tunnelingTilesDisappear", "negativesAnnihilate", "negativesSubtract", "tileGoal", "width", "height", "addTileAfterMoveCount", "startTileCount", "listSuffix"], h = 0; h < u.length; h++) {
                        var c = u[h];
                        e[c] = this.gameplay[c]
                    }
                    return e.mergeLimit = this.gameplay.mergeLimit.toString(), e.version = "2", e
                }
            }, {
                key: "loadPreferencesFromData",
                value: function() {
                    this.preferences.autopilotEnabled = $(".preferences-data[data-autopilot-enabled]").data("autopilot-enabled")
                }
            }, {
                key: "getLegacySubvariation",
                value: function(e) {
                    var t = e + "-before-" + e + "-variations";
                    return $(".game-settings-by-data[data-" + t + "]").data(t)
                }
            }, {
                key: "setToInputs",
                value: function() {
                    var t = this;
                    if (this.setSubvariationsToInputs(), this.adjustableForm) {
                        var i = !0,
                            n = !1,
                            a = void 0;
                        try {
                            for (var r, o = s()(e.gameplaySettingsAttributes); !(i = (r = o.next()).done); i = !0) {
                                var u = r.value,
                                    h = l()(u, 2),
                                    c = h[0],
                                    f = h[1];
                                null != this.gameplay[c] && this.adjustableForm.setSettingToInputs(c, this.gameplay[c], f)
                            }
                        } catch (e) {
                            n = !0, a = e
                        } finally {
                            try {
                                !i && o.return && o.return()
                            } finally {
                                if (n) throw a
                            }
                        }
                        this.autoProbabilities && this.adjustableForm.eachTileRow(function(e) {
                            e.toggleAutoProbability(t.autoProbabilities.includes(e.getValue()))
                        })
                    }
                }
            }, {
                key: "loadSubvariationsFromInputs",
                value: function() {
                    var e = !0,
                        t = !1,
                        i = void 0;
                    try {
                        for (var n, a = s()(this.subvariationTypes); !(e = (n = a.next()).done); e = !0) {
                            var r = n.value;
                            this.setSubvariation(r, this.subvariationSelector(r).find("option").filter(":selected").val())
                        }
                    } catch (e) {
                        t = !0, i = e
                    } finally {
                        try {
                            !e && a.return && a.return()
                        } finally {
                            if (t) throw i
                        }
                    }
                }
            }, {
                key: "setSubvariationsToInputs",
                value: function() {
                    var e = !0,
                        t = !1,
                        i = void 0;
                    try {
                        for (var n, a = s()(this.subvariationTypes); !(e = (n = a.next()).done); e = !0) {
                            var r = n.value;
                            this[r] && this.subvariationSelector(r).val(this[r])
                        }
                    } catch (e) {
                        t = !0, i = e
                    } finally {
                        try {
                            !e && a.return && a.return()
                        } finally {
                            if (t) throw i
                        }
                    }
                }
            }, {
                key: "setSubvariation",
                value: function(e, t) {
                    return this[e] = t
                }
            }, {
                key: "subvariationSelector",
                value: function(e) {
                    return $('select[name="' + e + '"]')
                }
            }]), e
        }();
    Object.defineProperty(y, "gameplaySettingsAttributes", {
        enumerable: !0,
        writable: !0,
        value: new h.a([
            ["width", {
                type: "text",
                min: 0,
                max: 100
            }],
            ["height", {
                type: "text",
                min: 0,
                max: 100
            }],
            ["probabilities", {
                type: "hash",
                attributes: new h.a([
                    ["value", {
                        type: "text"
                    }],
                    ["probability", {
                        type: "text",
                        min: 0,
                        max: 1
                    }]
                ])
            }],
            ["tunneling", {
                type: "boolean"
            }],
            ["mergeLimit", {
                type: "text",
                min: 1,
                max: 1 / 0
            }],
            ["decrementTiles", {
                type: "boolean"
            }],
            ["tunnelingTilesDisappear", {
                type: "boolean"
            }],
            ["negativesAnnihilate", {
                type: "boolean"
            }],
            ["negativesSubtract", {
                type: "boolean"
            }],
            ["tileGoal", {
                type: "text"
            }],
            ["addTileAfterMoveCount", {
                type: "text",
                min: 0,
                max: 1 / 0
            }],
            ["startTileCount", {
                type: "text",
                min: 0,
                max: 1e4
            }],
            ["listSuffix", {
                type: "text"
            }]
        ])
    }), Object.defineProperty(y, "preferencesAttributes", {
        enumerable: !0,
        writable: !0,
        value: {
            defaultValue: new h.a([
                ["autopilotEnabled", {
                    defaultValue: !1
                }]
            ])
        }
    });
    var b = new y;
    t.a = b
}, function(e, t, i) {
    e.exports = {
        default: i(114),
        __esModule: !0
    }
}, , function(e, t, i) {
    var n = i(20),
        a = i(107).f,
        r = {}.toString,
        s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    e.exports.f = function(e) {
        return s && "[object Window]" == r.call(e) ? function(e) {
            try {
                return a(e)
            } catch (e) {
                return s.slice()
            }
        }(e) : a(n(e))
    }
}, function(e, t, i) {
    var n = i(2),
        a = n.JSON || (n.JSON = {
            stringify: JSON.stringify
        });
    e.exports = function(e) {
        return a.stringify.apply(a, arguments)
    }
}, , , , , function(e, t, i) {
    e.exports = {
        default: i(120),
        __esModule: !0
    }
}, function(e, t, i) {
    i(21), i(25), e.exports = i(74).f("iterator")
}, function(e, t, i) {
    e.exports = {
        default: i(122),
        __esModule: !0
    }
}, function(e, t, i) {
    i(123), i(51), i(125), i(126), e.exports = i(2).Symbol
}, function(e, t, i) {
    "use strict";
    var n = i(9),
        a = i(17),
        r = i(10),
        s = i(7),
        o = i(62),
        l = i(47).KEY,
        u = i(19),
        h = i(45),
        c = i(29),
        f = i(32),
        v = i(4),
        d = i(74),
        m = i(75),
        p = i(124),
        g = i(64),
        y = i(14),
        b = i(11),
        x = i(28),
        w = i(20),
        k = i(44),
        q = i(23),
        j = i(39),
        _ = i(113),
        S = i(95),
        z = i(106),
        C = i(8),
        T = i(50),
        A = S.f,
        P = C.f,
        M = _.f,
        O = n.Symbol,
        G = n.JSON,
        L = G && G.stringify,
        E = v("_hidden"),
        I = v("toPrimitive"),
        F = {}.propertyIsEnumerable,
        N = h("symbol-registry"),
        R = h("symbols"),
        W = h("op-symbols"),
        $ = Object.prototype,
        D = "function" == typeof O && !!z.f,
        B = n.QObject,
        V = !B || !B.prototype || !B.prototype.findChild,
        J = r && u(function() {
            return 7 != j(P({}, "a", {
                get: function() {
                    return P(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        }) ? function(e, t, i) {
            var n = A($, t);
            n && delete $[t], P(e, t, i), n && e !== $ && P($, t, n)
        } : P,
        U = function(e) {
            var t = R[e] = j(O.prototype);
            return t._k = e, t
        },
        H = D && "symbol" == typeof O.iterator ? function(e) {
            return "symbol" == typeof e
        } : function(e) {
            return e instanceof O
        },
        K = function(e, t, i) {
            return e === $ && K(W, t, i), y(e), t = k(t, !0), y(i), a(R, t) ? (i.enumerable ? (a(e, E) && e[E][t] && (e[E][t] = !1), i = j(i, {
                enumerable: q(0, !1)
            })) : (a(e, E) || P(e, E, q(1, {})), e[E][t] = !0), J(e, t, i)) : P(e, t, i)
        },
        Y = function(e, t) {
            y(e);
            for (var i, n = p(t = w(t)), a = 0, r = n.length; r > a;) K(e, i = n[a++], t[i]);
            return e
        },
        X = function(e) {
            var t = F.call(this, e = k(e, !0));
            return !(this === $ && a(R, e) && !a(W, e)) && (!(t || !a(this, e) || !a(R, e) || a(this, E) && this[E][e]) || t)
        },
        Q = function(e, t) {
            if (e = w(e), t = k(t, !0), e !== $ || !a(R, t) || a(W, t)) {
                var i = A(e, t);
                return !i || !a(R, t) || a(e, E) && e[E][t] || (i.enumerable = !0), i
            }
        },
        Z = function(e) {
            for (var t, i = M(w(e)), n = [], r = 0; i.length > r;) a(R, t = i[r++]) || t == E || t == l || n.push(t);
            return n
        },
        ee = function(e) {
            for (var t, i = e === $, n = M(i ? W : w(e)), r = [], s = 0; n.length > s;) !a(R, t = n[s++]) || i && !a($, t) || r.push(R[t]);
            return r
        };
    D || (o((O = function() {
        if (this instanceof O) throw TypeError("Symbol is not a constructor!");
        var e = f(arguments.length > 0 ? arguments[0] : void 0),
            t = function(i) {
                this === $ && t.call(W, i), a(this, E) && a(this[E], e) && (this[E][e] = !1), J(this, e, q(1, i))
            };
        return r && V && J($, e, {
            configurable: !0,
            set: t
        }), U(e)
    }).prototype, "toString", function() {
        return this._k
    }), S.f = Q, C.f = K, i(107).f = _.f = Z, i(76).f = X, z.f = ee, r && !i(34) && o($, "propertyIsEnumerable", X, !0), d.f = function(e) {
        return U(v(e))
    }), s(s.G + s.W + s.F * !D, {
        Symbol: O
    });
    for (var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ie = 0; te.length > ie;) v(te[ie++]);
    for (var ne = T(v.store), ae = 0; ne.length > ae;) m(ne[ae++]);
    s(s.S + s.F * !D, "Symbol", {
        for: function(e) {
            return a(N, e += "") ? N[e] : N[e] = O(e)
        },
        keyFor: function(e) {
            if (!H(e)) throw TypeError(e + " is not a symbol!");
            for (var t in N)
                if (N[t] === e) return t
        },
        useSetter: function() {
            V = !0
        },
        useSimple: function() {
            V = !1
        }
    }), s(s.S + s.F * !D, "Object", {
        create: function(e, t) {
            return void 0 === t ? j(e) : Y(j(e), t)
        },
        defineProperty: K,
        defineProperties: Y,
        getOwnPropertyDescriptor: Q,
        getOwnPropertyNames: Z,
        getOwnPropertySymbols: ee
    });
    var re = u(function() {
        z.f(1)
    });
    s(s.S + s.F * re, "Object", {
        getOwnPropertySymbols: function(e) {
            return z.f(x(e))
        }
    }), G && s(s.S + s.F * (!D || u(function() {
        var e = O();
        return "[null]" != L([e]) || "{}" != L({
            a: e
        }) || "{}" != L(Object(e))
    })), "JSON", {
        stringify: function(e) {
            for (var t, i, n = [e], a = 1; arguments.length > a;) n.push(arguments[a++]);
            if (i = t = n[1], (b(t) || void 0 !== e) && !H(e)) return g(t) || (t = function(e, t) {
                if ("function" == typeof i && (t = i.call(this, e, t)), !H(t)) return t
            }), n[1] = t, L.apply(G, n)
        }
    }), O.prototype[I] || i(13)(O.prototype, I, O.prototype.valueOf), c(O, "Symbol"), c(Math, "Math", !0), c(n.JSON, "JSON", !0)
}, function(e, t, i) {
    var n = i(50),
        a = i(106),
        r = i(76);
    e.exports = function(e) {
        var t = n(e),
            i = a.f;
        if (i)
            for (var s, o = i(e), l = r.f, u = 0; o.length > u;) l.call(e, s = o[u++]) && t.push(s);
        return t
    }
}, function(e, t, i) {
    i(75)("asyncIterator")
}, function(e, t, i) {
    i(75)("observable")
}, function(e, t, i) {
    e.exports = {
        default: i(128),
        __esModule: !0
    }
}, function(e, t, i) {
    i(51), i(21), i(25), i(129), i(130), i(131), i(132), e.exports = i(2).Set
}, function(e, t, i) {
    "use strict";
    var n = i(67),
        a = i(48);
    e.exports = i(68)("Set", function(e) {
        return function() {
            return e(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }, {
        add: function(e) {
            return n.def(a(this, "Set"), e = 0 === e ? 0 : e, e)
        }
    }, n)
}, function(e, t, i) {
    var n = i(7);
    n(n.P + n.R, "Set", {
        toJSON: i(69)("Set")
    })
}, function(e, t, i) {
    i(70)("Set")
}, function(e, t, i) {
    i(71)("Set")
}, , function(e, t, i) {
    e.exports = {
        default: i(150),
        __esModule: !0
    }
}, , , , , , , function(e, t, i) {
    i(142), e.exports = i(2).Object.getPrototypeOf
}, function(e, t, i) {
    var n = i(28),
        a = i(65);
    i(109)("getPrototypeOf", function() {
        return function(e) {
            return a(n(e))
        }
    })
}, function(e, t, i) {
    e.exports = {
        default: i(144),
        __esModule: !0
    }
}, function(e, t, i) {
    i(145), e.exports = i(2).Object.setPrototypeOf
}, function(e, t, i) {
    var n = i(7);
    n(n.S, "Object", {
        setPrototypeOf: i(146).set
    })
}, function(e, t, i) {
    var n = i(11),
        a = i(14),
        r = function(e, t) {
            if (a(e), !n(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
        };
    e.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, t, n) {
            try {
                (n = i(15)(Function.call, i(95).f(Object.prototype, "__proto__").set, 2))(e, []), t = !(e instanceof Array)
            } catch (e) {
                t = !0
            }
            return function(e, i) {
                return r(e, i), t ? e.__proto__ = i : n(e, i), e
            }
        }({}, !1) : void 0),
        check: r
    }
}, function(e, t, i) {
    e.exports = {
        default: i(148),
        __esModule: !0
    }
}, function(e, t, i) {
    i(149);
    var n = i(2).Object;
    e.exports = function(e, t) {
        return n.create(e, t)
    }
}, function(e, t, i) {
    var n = i(7);
    n(n.S, "Object", {
        create: i(39)
    })
}, function(e, t, i) {
    i(151);
    var n = i(2).Object;
    e.exports = function(e, t) {
        return n.getOwnPropertyDescriptor(e, t)
    }
}, function(e, t, i) {
    var n = i(20),
        a = i(95).f;
    i(109)("getOwnPropertyDescriptor", function() {
        return function(e, t) {
            return a(n(e), t)
        }
    })
}, function(e, t, i) {
    e.exports = {
        default: i(153),
        __esModule: !0
    }
}, function(e, t, i) {
    i(154), e.exports = i(2).Math.sign
}, function(e, t, i) {
    var n = i(7);
    n(n.S, "Math", {
        sign: i(155)
    })
}, function(e, t) {
    e.exports = Math.sign || function(e) {
        return 0 == (e = +e) || e != e ? e : e < 0 ? -1 : 1
    }
}, function(e, t, i) {
    "use strict";
    var n = i(22),
        a = i.n(n),
        r = i(30),
        s = i.n(r),
        o = i(152),
        l = i.n(o),
        u = i(12),
        h = i.n(u),
        c = i(16),
        f = i.n(c),
        v = i(0),
        d = i.n(v),
        m = i(1),
        p = i.n(m),
        g = i(31),
        y = i.n(g),
        b = function() {
            function e(t) {
                d()(this, e), this.rgb = t
            }
            return p()(e, null, [{
                key: "black",
                value: function() {
                    return new e([0, 0, 0])
                }
            }, {
                key: "gray",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 127;
                    return new e([t, t, t])
                }
            }, {
                key: "white",
                value: function() {
                    return new e([255, 255, 255])
                }
            }, {
                key: "visualComponentSensitivity",
                value: function() {
                    return [.978, 1.831, .19]
                }
            }, {
                key: "visualComponentMidpoint",
                value: function() {
                    return Math.round(this.visualLightnessMidpoint() / 100 * 255)
                }
            }, {
                key: "visualLightnessMidpoint",
                value: function() {
                    return 70
                }
            }, {
                key: "fromHsl",
                value: function(e) {
                    var t = f()(e, 3),
                        i = t[0],
                        n = t[1] / 100,
                        a = t[2] / 100,
                        r = (1 - Math.abs(2 * a - 1)) * n,
                        s = r * (1 - Math.abs(i / 60 % 2 - 1)),
                        o = a - r / 2,
                        l = [0, 0, 0];
                    return l[Math.floor(i / 120 + .5) % 3] = r, l[Math.floor(8 - i / 60) % 3] = s, new this(l.map(function(e) {
                        return Math.round(255 * (e + o))
                    }))
                }
            }]), p()(e, [{
                key: "css",
                value: function() {
                    return "rgb(" + this.rgb.join(", ") + ")"
                }
            }, {
                key: "visualNegative",
                value: function() {
                    return this.negative(e.visualLightnessMidpoint() / 100 * 255)
                }
            }, {
                key: "isVisuallyLight",
                value: function() {
                    return this.visualLightness() > e.visualLightnessMidpoint()
                }
            }, {
                key: "visualLightness",
                value: function() {
                    return this.rgb.reduce(function(t, i, n) {
                        return t + i * e.visualComponentSensitivity()[n]
                    }, 0) / 3 / 255 * 100
                }
            }, {
                key: "lightness",
                value: function() {
                    return Math.min.apply(Math, y()(this.rgb)) / 255 * 100
                }
            }, {
                key: "negative",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 127,
                        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        n = t - i,
                        a = 255 - t;
                    return new e(this.rgb.map(function(e) {
                        return e > t ? t - (e - t) / a * n : t + (t - Math.max(e, i)) / n * a
                    }))
                }
            }]), e
        }(),
        x = i(110),
        w = i(157),
        k = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    i = t.number,
                    n = t.value,
                    a = t.tunneling,
                    r = void 0 === a ? 0 : a,
                    s = t.omniMerge,
                    o = void 0 === s ? 0 : s;
                d()(this, e), void 0 == n && (n = i), this.constructor.isNumber(n) && (n = Number(n)), this.value = n, this.tunneling = Number(r), this.omniMerge = Number(o), this.imageTransform = {
                    x: 0,
                    y: 0,
                    zoom: 1
                }
            }
            return p()(e, null, [{
                key: "fromJSON",
                value: function(t) {
                    return new e(t)
                }
            }, {
                key: "merge",
                value: function(t, i) {
                    var n = t.reduce(function(e, t) {
                        return t.value + e
                    }, t[0].isNumber() ? 0 : "");
                    if (!x.a.gameplay.negativesAnnihilate || 0 == t[0].value || 0 != n) return 2 == t.length && t[0].dividesWith(t[1]) ? new e({
                        value: (t[0].isNumber() ? t[0].value : t[1].value) / 2,
                        tunneling: t[0].tunneling + t[1].tunneling
                    }) : x.a.gameplay.negativesAnnihilate && 2 == t.length && t[0].value == -t[1].value ? new e({
                        value: 0
                    }) : new e({
                        value: this.isNumber(n) ? Math.round(1e4 * n) / 1e4 : n,
                        tunneling: t.reduce(function(e, t) {
                            return e + t.tunneling
                        }, 0)
                    })
                }
            }, {
                key: "random",
                value: function() {
                    var t = Math.random(),
                        i = !0,
                        n = !1,
                        a = void 0;
                    try {
                        for (var r, s = h()(x.a.gameplay.probabilities.iterable); !(i = (r = s.next()).done); i = !0) {
                            var o = r.value,
                                l = f()(o, 2),
                                u = l[0],
                                c = l[1];
                            if ((t -= c = Number(c)) <= 0) return new e({
                                value: u
                            })
                        }
                    } catch (e) {
                        n = !0, a = e
                    } finally {
                        try {
                            !i && s.return && s.return()
                        } finally {
                            if (n) throw a
                        }
                    }
                }
            }]), p()(e, [{
                key: "toJSON",
                value: function() {
                    return {
                        number: this.value.toString(),
                        tunneling: this.tunneling
                    }
                }
            }, {
                key: "addToValue",
                value: function(e) {
                    this.isNumber() && (this.element.removeClass(["tile-" + this.value, "tile-digits-" + this.value.toString().length]), this.value += e, this.updateElement())
                }
            }, {
                key: "atPosition",
                value: function(e) {
                    return e.x == this.cell.x && e.y == this.cell.y
                }
            }, {
                key: "dividesWith",
                value: function(e) {
                    return this.isNumber() && e.isDivide() || this.isDivide() && e.isNumber()
                }
            }, {
                key: "mergesWith",
                value: function(e) {
                    return e.isNumber() || x.a.disableWordBuilding ? e.value == this.value || e.omniMerge || this.omniMerge || x.a.gameplay.negativesSubtract && l()(this.value) == -l()(e.value) : !!e.isLetters() && w.a.hasFragment(e.value + this.value)
                }
            }, {
                key: "disappearsWhenCreated",
                value: function() {
                    return this.isLetters() && this.value.length >= 2 && this.isWord() ? x.a.gameplay.tunneling ? !this.isFirstAppearance && !this.isPartOfLargerWord() : this.isFirstAppearance || !this.isPartOfLargerWord() : x.a.gameplay.negativesAnnihilate && 0 == this.value
                }
            }, {
                key: "initElement",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    this.tileContainer = e, this.element = $("<div>").addClass(["tile"]).append($("<div>").addClass("tile-inner").append($("<span>").addClass("tile-value tile-string"), $("<div>").addClass("tile-caption tile-string").toggle(x.a.useLabels)));
                    var t = void 0;
                    if (x.a.customTiles && x.a.customTiles.has(this.value.toString())) {
                        var i = x.a.customTiles.get(this.value.toString());
                        (t = i.image_url) && (this.setImageUrl(t), i.image_transform && this.setImageTransform(i.image_transform)), i.link_url && this.setLinkUrl(i.link_url)
                    }
                    return this.updateElement(), 123456789 == this.tunneling && this.element.find(".tile-value").text("4"), this
                }
            }, {
                key: "updateElement",
                value: function() {
                    var e = this.displayText(),
                        t = this.element.find(".tile-inner");
                    this.refreshTransform(), "original" == x.a.theme || x.a.customTiles ? t.css(this.tileDecorationCss()) : (t.addClass("has-image"), this.element.find(".tile-value.tile-string").toggle(x.a.useLabels));
                    var i = this.characterCount(),
                        n = $(".text-measurement-container .tile-inner"),
                        a = this.element.find(".tile-value");
                    if (this.isLetters() && !this.imageUrl) {
                        var r = n.width(),
                            s = $(".grid-cell")[0].getBoundingClientRect().width;
                        if (this.scaledForTileSize != r || s < 35 != this.scaledForAbsoluteCellSize < 35) {
                            for (var o = $("<span>"), l = s < 35 ? 6 : 8, u = Math.floor(i / l) + 1, h = Math.floor(i / u), c = u - i % h, f = 0, v = 1; v <= u; v++) {
                                var d = h + (v > c ? 1 : 0);
                                o.append(e.substr(f, d)), v < u && o.append("<br />"), f += d
                            }
                            o.appendTo($(".text-measurement-container"));
                            var m = n.height(),
                                p = o.width(),
                                g = o.height(),
                                y = r / p,
                                b = m / g,
                                w = .8 * Math.min(y, b);
                            a.css({
                                lineHeight: 1,
                                transform: "scale(" + w + ")",
                                left: (r - p) / 2,
                                top: (m - g) / 2,
                                position: "absolute"
                            }).html(o.html()), o.remove(), this.scaledForTileSize = r, this.scaledForAbsoluteCellSize = s
                        }
                    } else this.applyTextSizeAsNumber();
                    if (this.tunneling > 0 != this.element.hasClass("tile-tunneler") && (this.tunneling > 0 ? this.element.addClass("tile-tunneler") : this.element.removeClass("tile-tunneler")), this.tunneling && this.tunneling > 1) {
                        var k = this.element.find(".tile-tunnel-number");
                        0 == k.length ? this.element.append($("<div>").addClass("tile-tunnel-number").text(this.tunneling)) : k.text(this.tunneling)
                    }
                    return this.omniMerge && this.element.addClass("tile-omni-merger"), this
                }
            }, {
                key: "applyTextSizeAsNumber",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.element,
                        i = e.layoutWidth;
                    t || (t = this.element), i || (i = this.usingNarrowLayout() ? "narrow" : "wide");
                    var n = t.find(".tile-inner"),
                        a = t.find(".tile-value"),
                        r = this.characterCount();
                    if (t.addClass(["tile-digits-" + r]), x.a.suppressTileValueClasses || t.addClass(["tile-" + this.value.toString().replaceAll(/[^-a-zA-z0-9]/g, "")]), r > 5) {
                        var s = void 0;
                        this.value.toString().match(" ") && r > 10 ? (s = 17, n.css({
                            lineHeight: "initial"
                        })) : s = 170 / r, "narrow" == i && (s /= 2), n.css({
                            fontSize: s
                        })
                    }
                    a.text(this.displayText())
                }
            }, {
                key: "setImageUrl",
                value: function(e) {
                    e ? (this.imageUrl = e, this.element.addClass("has-image"), this.makeValueSmall(), x.a.useLabels || this.element.find(".tile-value.tile-string").hide()) : (this.element.removeClass("has-image"), this.makeValueLarge(), this.element.find(".tile-value.tile-string").show()), this.element.find(".tile-inner").css({
                        backgroundImage: e ? 'url("' + e + '")' : ""
                    })
                }
            }, {
                key: "setLinkUrl",
                value: function(e) {
                    this.element.addClass("tile-selectable"), this.element.data("link-url", e)
                }
            }, {
                key: "setElementPosition",
                value: function(e) {
                    return this.element.css(this.cssPosition(e || this.cell))
                }
            }, {
                key: "makeValueSmall",
                value: function() {
                    this.element.find(".tile-value").addClass("tile-value-small")
                }
            }, {
                key: "makeValueLarge",
                value: function() {
                    this.element.find(".tile-value").removeClass("tile-value-small")
                }
            }, {
                key: "setImageTransform",
                value: function(e) {
                    this.imageTransform = e, this.refreshTransform()
                }
            }, {
                key: "refreshTransform",
                value: function() {
                    var e = this.usingNarrowLayout() ? 58 : 107;
                    this.element.find(".tile-inner").css({
                        backgroundPositionX: this.imageTransform.x * e / 107 + "px",
                        backgroundPositionY: this.imageTransform.y * e / 107 + "px",
                        backgroundSize: 100 * this.imageTransform.zoom + "%"
                    })
                }
            }, {
                key: "tileDecorationCss",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.value,
                        t = this.value.toString().charCodeAt(0);
                    if (x.a.suppressTileColoring) return {};
                    if (123456789 == this.tunneling) {
                        for (var i = [], n = 0; n < 3; n++) i[n] = Number(e.toString().substr(3 * n + 1, 3));
                        return {
                            backgroundColor: "rgb(" + i.join(", ") + ")",
                            color: "rgb(249, 246, 242)"
                        }
                    }
                    if (this.characterIsLetter(t)) return {
                        backgroundColor: "white",
                        color: "black"
                    };
                    if ("\xf7" == e) return {
                        backgroundColor: "rgb(172, 126, 204)",
                        color: "white"
                    };
                    if (this.hasImage()) return {};
                    if (![null, ""].includes(this.value)) {
                        if (Math.abs(e) == 1 / 0 || e % 1 == 0) {
                            var a = this.backgroundColor(e);
                            return {
                                backgroundColor: a.css(),
                                color: this.textColor(e, {
                                    colors: [a]
                                }).css()
                            }
                        }
                        var r = {
                            colors: [this.backgroundColor(Math.floor(e)), this.backgroundColor(Math.ceil(e))],
                            center: e > 0 ? 1 - Math.abs(e) % 1 : Math.abs(e) % 1
                        };
                        return {
                            background: "linear-gradient(to right, " + r.colors[0].css() + ", " + 100 * r.center + "%, " + r.colors[1].css() + ")",
                            color: this.textColor(e, r).css()
                        }
                    }
                }
            }, {
                key: "characterIsLetter",
                value: function(e) {
                    return e >= 97 && e <= 122 || e >= 67 && e <= 90
                }
            }, {
                key: "cssPosition",
                value: function(e) {
                    var t = e.cssPosition();
                    return {
                        left: t.left + this.tileContainer.borderWidth,
                        top: t.top + this.tileContainer.borderWidth
                    }
                }
            }, {
                key: "textColor",
                value: function(t, i) {
                    if (t < 0) {
                        var n = {
                            colors: i.colors.map(function(e) {
                                return e.negative()
                            }),
                            center: i.center
                        };
                        return this.textColor(-t, n).negative()
                    }
                    if (0 == t) return b.white();
                    if (t == 1 / 0) return b.black();
                    if (this.valueIsInOriginalGame(t)) return [2, 4].includes(t) ? new b(e.originalTextColors.dark) : new b(e.originalTextColors.light);
                    var a = void 0,
                        r = !0,
                        s = !1,
                        o = void 0;
                    try {
                        for (var l, u = h()(i.colors); !(r = (l = u.next()).done); r = !0) {
                            var c = l.value.visualLightness() > 85;
                            if (null == a) a = c;
                            else if (a != c) {
                                a = "none";
                                break
                            }
                        }
                    } catch (e) {
                        s = !0, o = e
                    } finally {
                        try {
                            !r && u.return && u.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                    return new b("none" == a ? [65, 65, 65] : e.originalTextColors[a ? "dark" : "light"])
                }
            }, {
                key: "backgroundColor",
                value: function(t) {
                    if (0 == t) return b.gray(b.visualComponentMidpoint());
                    if (t == 1 / 0) return b.white();
                    if (t < 0) return this.backgroundColor(-t).visualNegative();
                    if (![null, ""].includes(t)) {
                        var i = void 0,
                            n = this.factorExponent(t, 2);
                        i = e.originalColors.has(Math.pow(2, n)) ? s()(e.originalColors.get(Math.pow(2, n))) : s()(e.originalColors.get(1));
                        var r = new a.a([
                                [3, [-.1, .1, 0]],
                                [5, [0, -.1, .1]],
                                [7, [-.22, -.22, .29]],
                                [11, [.05, 0, -.25]],
                                [13, [-.25, .15, -.25]]
                            ]),
                            o = [0, 0, 0],
                            l = !0,
                            u = !1,
                            c = void 0;
                        try {
                            for (var v, d = h()(r); !(l = (v = d.next()).done); l = !0)
                                for (var m = v.value, p = f()(m, 2), g = p[0], y = p[1], x = this.factorExponent(t, g), w = 0; w < y.length; w++) o[w] += y[w] * x
                        } catch (e) {
                            u = !0, c = e
                        } finally {
                            try {
                                !l && d.return && d.return()
                            } finally {
                                if (u) throw c
                            }
                        }
                        for (var k = 0; k < o.length; k++) o[k] < 0 ? i[k] += i[k] * o[k] : i[k] += (255 - i[k]) * o[k];
                        for (var q = 7; q < 120; q++) {
                            var j = this.primeFromIndex(q);
                            if (x = this.factorExponent(t, j)) return b.fromHsl([3 * q, 100, 56 + t / j * 5])
                        }
                        return new b(i)
                    }
                }
            }, {
                key: "characterCount",
                value: function() {
                    return e.specialCharacters.has(this.value) ? 1 : this.value.toString().length
                }
            }, {
                key: "displayText",
                value: function() {
                    return e.specialCharacters.has(this.value) ? e.specialCharacters.get(this.value) : this.value
                }
            }, {
                key: "valueIsInOriginalGame",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.value;
                    return [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536].includes(e)
                }
            }, {
                key: "factorExponent",
                value: function(e, t) {
                    for (var i = 0; i <= 100; i++) {
                        if (e / t % 1 > 1e-8) return i;
                        e /= t
                    }
                }
            }, {
                key: "primeFromIndex",
                value: function(e) {
                    return [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659][e]
                }
            }, {
                key: "isDivide",
                value: function() {
                    return "\xf7" == this.value
                }
            }, {
                key: "isLetters",
                value: function() {
                    return this.constructor.isLetters(this.value)
                }
            }, {
                key: "isNumber",
                value: function() {
                    return this.constructor.isNumber(this.value)
                }
            }, {
                key: "isPartOfLargerWord",
                value: function() {
                    return !(!this.isLetters() || x.a.disableWordBuilding) && (null == this._isPartOfLargerWord && (this._isPartOfLargerWord = w.a.hasLargerFragmentWithFragment(this.value)), this._isPartOfLargerWord)
                }
            }, {
                key: "isWord",
                value: function() {
                    return !(!this.isLetters() || x.a.disableWordBuilding) && (null == this._isWord && (this._isWord = w.a.hasWord(this.value)), this._isWord)
                }
            }, {
                key: "hasImage",
                value: function() {
                    return this.innerElement && this.innerElement.css("background-image") && "none" != this.innerElement.css("background-image")
                }
            }, {
                key: "usingNarrowLayout",
                value: function() {
                    return window.matchMedia("screen and (max-width: 530px)").matches
                }
            }, {
                key: "innerElement",
                get: function() {
                    return null == this._innerElement && (this._innerElement = this.element.find(".tile-inner"), 0 == this._innerElement.length && this._innerElement), this._innerElement
                }
            }, {
                key: "cell",
                get: function() {
                    return this._cell
                },
                set: function(e) {
                    return this._cell != e && (this._cell && (this._cell.tile = null), e && (e.tile = this), this._cell = e), this._cell
                }
            }], [{
                key: "isLetters",
                value: function(e) {
                    return !this.isNumber(e) && e.toString().match(/^[a-zA-Z]*$/)
                }
            }, {
                key: "isNumber",
                value: function(e) {
                    return !isNaN(e)
                }
            }]), e
        }();
    Object.defineProperty(k, "specialCharacters", {
        enumerable: !0,
        writable: !0,
        value: new a.a([
            [1 / 0, "\u221e"],
            [-1 / 0, "-\u221e"]
        ])
    }), Object.defineProperty(k, "originalColors", {
        enumerable: !0,
        writable: !0,
        value: new a.a([
            [1, [247, 237, 233]],
            [2, [238, 228, 218]],
            [4, [237, 224, 200]],
            [8, [242, 177, 121]],
            [16, [245, 149, 99]],
            [32, [246, 124, 95]],
            [64, [246, 94, 59]],
            [128, [237, 207, 114]],
            [256, [237, 204, 97]],
            [512, [237, 200, 80]],
            [1024, [237, 197, 63]],
            [2048, [237, 194, 46]],
            [4096, [60, 58, 50]],
            [8192, [60, 58, 50]],
            [16384, [60, 58, 50]],
            [32768, [60, 58, 50]],
            [65536, [128, 0, 128]],
            [131072, [255, 255, 255]]
        ])
    }), Object.defineProperty(k, "originalTextColors", {
        enumerable: !0,
        writable: !0,
        value: {
            light: [249, 246, 242],
            dark: [119, 110, 101]
        }
    });
    t.a = k
}, function(e, t, i) {
    "use strict";
    var n = i(22),
        a = i.n(n),
        r = i(12),
        s = i.n(r),
        o = i(127),
        l = i.n(o),
        u = i(0),
        h = i.n(u),
        c = i(1),
        f = i.n(c),
        v = function() {
            function e() {
                h()(this, e), this.loadCallbacks = []
            }
            return f()(e, [{
                key: "whenLoaded",
                value: function(e) {
                    return this.words ? e() : this.loadCallbacks.push(e)
                }
            }, {
                key: "load",
                value: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "large";
                    if (this.dictionarySuffix != t && (this.fragments = null, this.loading = null, this.loadCallbacks = []), !this.fragments && !this.loading) {
                        this.loading = !0, this.missingTwoLetterFragments = new l.a(this.constructor.missingTwoLetterFragmentsByDictionary.get(t)), $(".in-game-message > .loading").removeClass("d-none").find("> .description").text("Loading dictionary...");
                        var i = new XMLHttpRequest;
                        i.open("GET", "/2048/unique-fragments-" + t), i.onload = function() {
                            $(".in-game-message > .loading").addClass("d-none").find("> .description").text(""), e.fragments = new l.a, e.words = new l.a;
                            var t = i.response.split("\n"),
                                n = !0,
                                a = !1,
                                r = void 0;
                            try {
                                for (var o, u = s()(t); !(n = (o = u.next()).done); n = !0) {
                                    var h = o.value;
                                    "*" == h.charAt(0) ? (e.fragments.add(h.substring(1)), e.words.add(h.substring(1))) : e.fragments.add(h)
                                }
                            } catch (e) {
                                a = !0, r = e
                            } finally {
                                try {
                                    !n && u.return && u.return()
                                } finally {
                                    if (a) throw r
                                }
                            }
                            var c = !0,
                                f = !1,
                                v = void 0;
                            try {
                                for (var d, m = s()(e.loadCallbacks); !(c = (d = m.next()).done); c = !0) {
                                    (0, d.value)()
                                }
                            } catch (e) {
                                f = !0, v = e
                            } finally {
                                try {
                                    !c && m.return && m.return()
                                } finally {
                                    if (f) throw v
                                }
                            }
                            e.loading = !1
                        }, i.send()
                    }
                    this.dictionarySuffix = t
                }
            }, {
                key: "hasFragment",
                value: function(e) {
                    return 2 == e.length && this.missingTwoLetterFragments ? !this.missingTwoLetterFragments.has(e) : this.fragments.has(e)
                }
            }, {
                key: "hasLargerFragmentWithFragment",
                value: function(e) {
                    for (var t = 97; t <= 122; t++) {
                        var i = String.fromCharCode(t);
                        if (this.hasFragment(i + e) || this.hasFragment(e + i)) return !0
                    }
                    return !1
                }
            }, {
                key: "hasWord",
                value: function(e) {
                    return this.words.has(e)
                }
            }]), e
        }();
    Object.defineProperty(v, "letterFrequenciesByDictionary", {
        enumerable: !0,
        writable: !0,
        value: new a.a([
            [10, new a.a([
                ["a", .06915],
                ["b", .01334],
                ["c", .04357],
                ["d", .04442],
                ["e", .1303],
                ["f", .01601],
                ["g", .03159],
                ["h", .01917],
                ["i", .08443],
                ["j", .0014],
                ["k", .00734],
                ["l", .04739],
                ["m", .02532],
                ["n", .07435],
                ["o", .05718],
                ["p", .03222],
                ["q", .00211],
                ["r", .07112],
                ["s", .08098],
                ["t", .07412],
                ["u", .03051],
                ["v", .01294],
                ["w", .01027],
                ["x", .00355],
                ["y", .01624],
                ["z", 85e-5]
            ])],
            [20, new a.a([
                ["a", .07126],
                ["b", .01449],
                ["c", .04545],
                ["d", .04344],
                ["e", .12198],
                ["f", .0147],
                ["g", .03203],
                ["h", .01858],
                ["i", .0892],
                ["j", .00146],
                ["k", .00722],
                ["l", .04709],
                ["m", .02542],
                ["n", .07673],
                ["o", .05834],
                ["p", .03113],
                ["q", .00164],
                ["r", .07117],
                ["s", .08253],
                ["t", .07327],
                ["u", .03102],
                ["v", .01238],
                ["w", .00862],
                ["x", .00341],
                ["y", .01525],
                ["z", .00206]
            ])],
            [35, new a.a([
                ["a", .07128],
                ["b", .01777],
                ["c", .04013],
                ["d", .04332],
                ["e", .11931],
                ["f", .0148],
                ["g", .03491],
                ["h", .02096],
                ["i", .08837],
                ["j", .00185],
                ["k", .00905],
                ["l", .0492],
                ["m", .02553],
                ["n", .07338],
                ["o", .05688],
                ["p", .02902],
                ["q", .00193],
                ["r", .0725],
                ["s", .08772],
                ["t", .07083],
                ["u", .03242],
                ["v", .01073],
                ["w", .00924],
                ["x", .00265],
                ["y", .01282],
                ["z", .00328]
            ])],
            [40, new a.a([
                ["a", .07126],
                ["b", .01818],
                ["c", .04004],
                ["d", .04239],
                ["e", .11824],
                ["f", .01473],
                ["g", .03433],
                ["h", .0216],
                ["i", .08819],
                ["j", .00187],
                ["k", .00944],
                ["l", .04933],
                ["m", .02578],
                ["n", .07237],
                ["o", .05791],
                ["p", .02954],
                ["q", .00185],
                ["r", .07219],
                ["s", .08826],
                ["t", .07055],
                ["u", .0321],
                ["v", .01047],
                ["w", .00933],
                ["x", .00266],
                ["y", .01365],
                ["z", .00361]
            ])],
            [50, new a.a([
                ["a", .07322],
                ["b", .01897],
                ["c", .04045],
                ["d", .03988],
                ["e", .11634],
                ["f", .01431],
                ["g", .0316],
                ["h", .02217],
                ["i", .08734],
                ["j", .00179],
                ["k", .00924],
                ["l", .05116],
                ["m", .02653],
                ["n", .07081],
                ["o", .05931],
                ["p", .02931],
                ["q", .00189],
                ["r", .07185],
                ["s", .08987],
                ["t", .06933],
                ["u", .03343],
                ["v", .01022],
                ["w", .00918],
                ["x", .00271],
                ["y", .01504],
                ["z", .00394]
            ])],
            [55, new a.a([
                ["a", .0734],
                ["b", .01931],
                ["c", .04039],
                ["d", .0395],
                ["e", .11554],
                ["f", .01427],
                ["g", .03144],
                ["h", .02253],
                ["i", .08669],
                ["j", .0018],
                ["k", .00955],
                ["l", .05149],
                ["m", .02642],
                ["n", .06984],
                ["o", .06034],
                ["p", .02951],
                ["q", .00186],
                ["r", .07168],
                ["s", .09034],
                ["t", .06893],
                ["u", .03324],
                ["v", .01007],
                ["w", .00939],
                ["x", .00273],
                ["y", .01553],
                ["z", .00407]
            ])],
            [60, new a.a([
                ["a", .07392],
                ["b", .01951],
                ["c", .04062],
                ["d", .03841],
                ["e", .11583],
                ["f", .01402],
                ["g", .03036],
                ["h", .02239],
                ["i", .08653],
                ["j", .00178],
                ["k", .00928],
                ["l", .05208],
                ["m", .0267],
                ["n", .07008],
                ["o", .06102],
                ["p", .0291],
                ["q", .00182],
                ["r", .07279],
                ["s", .08956],
                ["t", .06851],
                ["u", .03338],
                ["v", .01015],
                ["w", .00915],
                ["x", .00273],
                ["y", .01593],
                ["z", .00421]
            ])],
            [70, new a.a([
                ["a", .07757],
                ["b", .01925],
                ["c", .04265],
                ["d", .03508],
                ["e", .11317],
                ["f", .01308],
                ["g", .02778],
                ["h", .02358],
                ["i", .08765],
                ["j", .00165],
                ["k", .00845],
                ["l", .0536],
                ["m", .02834],
                ["n", .0685],
                ["o", .06499],
                ["p", .02974],
                ["q", .00172],
                ["r", .07229],
                ["s", .08619],
                ["t", .0686],
                ["u", .03341],
                ["v", .00989],
                ["w", .00793],
                ["x", .0029],
                ["y", .01749],
                ["z", .00436]
            ])],
            [80, new a.a([
                ["a", .07708],
                ["b", .01859],
                ["c", .04129],
                ["d", .03295],
                ["e", .11184],
                ["f", .012],
                ["g", .02685],
                ["h", .02473],
                ["i", .08947],
                ["j", .00158],
                ["k", .00871],
                ["l", .05278],
                ["m", .02893],
                ["n", .06814],
                ["o", .06726],
                ["p", .03055],
                ["q", .00167],
                ["r", .07033],
                ["s", .09336],
                ["t", .06699],
                ["u", .03329],
                ["v", .00934],
                ["w", .00744],
                ["x", .00284],
                ["y", .01677],
                ["z", .00508]
            ])]
        ])
    }), Object.defineProperty(v, "missingTwoLetterFragmentsByDictionary", {
        enumerable: !0,
        writable: !0,
        value: new a.a([
            [10, ["aa", "ae", "aq", "bc", "bd", "bf", "bg", "bh", "bk", "bn", "bp", "bq", "bw", "bx", "bz", "cb", "cd", "cf", "cg", "cj", "cm", "cn", "cp", "cv", "cw", "cx", "cz", "df", "dh", "dk", "dp", "dq", "dt", "dx", "dz", "ez", "fb", "fc", "fd", "fg", "fh", "fj", "fk", "fm", "fn", "fp", "fq", "fs", "fv", "fw", "fx", "fz", "gb", "gc", "gd", "gj", "gk", "gp", "gq", "gv", "gw", "gx", "gz", "hb", "hf", "hg", "hh", "hj", "hk", "hp", "hq", "hv", "hx", "hz", "ih", "ii", "ij", "iw", "iy", "ja", "jb", "jc", "jd", "jf", "jg", "jh", "ji", "jj", "jk", "jl", "jm", "jn", "jp", "jq", "jr", "js", "jt", "jv", "jw", "jx", "jy", "jz", "kb", "kc", "kd", "kf", "kh", "kj", "kk", "km", "ko", "kp", "kq", "kr", "kt", "ku", "kv", "kx", "kz", "lh", "lj", "ln", "lq", "lx", "lz", "mc", "md", "mg", "mh", "mj", "mk", "mq", "mr", "mt", "mv", "mw", "mx", "mz", "nb", "nq", "nx", "nz", "oq", "pb", "pc", "pg", "pj", "pk", "pn", "pq", "pv", "px", "pz", "qa", "qb", "qc", "qd", "qe", "qf", "qg", "qh", "qi", "qj", "qk", "ql", "qm", "qn", "qo", "qp", "qq", "qr", "qs", "qt", "qv", "qw", "qx", "qy", "qz", "rj", "rq", "rx", "rz", "sd", "sg", "sj", "sn", "sr", "sv", "sx", "sz", "tb", "td", "tg", "tj", "tk", "tn", "tq", "tv", "tx", "tz", "uh", "uj", "uk", "uq", "uu", "uv", "uw", "ux", "uz", "vb", "vc", "vd", "vf", "vg", "vh", "vj", "vk", "vl", "vm", "vn", "vp", "vq", "vr", "vs", "vt", "vu", "vv", "vw", "vx", "vz", "wb", "wc", "wd", "wg", "wj", "wm", "wp", "wq", "wu", "wv", "ww", "wx", "wy", "wz", "xb", "xd", "xf", "xg", "xh", "xj", "xk", "xl", "xm", "xn", "xo", "xq", "xr", "xs", "xu", "xv", "xw", "xx", "xy", "xz", "ya", "yd", "yf", "yg", "yh", "yj", "yk", "yq", "yr", "yu", "yv", "yx", "yy", "yz", "zb", "zc", "zd", "zf", "zg", "zh", "zj", "zk", "zl", "zm", "zn", "zo", "zp", "zq", "zr", "zs", "zt", "zu", "zv", "zw", "zx", "zz"]],
            [20, ["aq", "bc", "bd", "bf", "bg", "bh", "bk", "bp", "bq", "bx", "bz", "cb", "cf", "cg", "cj", "cm", "cn", "cp", "cv", "cw", "cx", "cz", "dk", "dq", "dx", "dz", "fb", "fc", "fd", "fg", "fj", "fk", "fm", "fn", "fp", "fq", "fv", "fw", "fx", "fz", "gb", "gc", "gj", "gk", "gp", "gq", "gv", "gw", "gx", "gz", "hg", "hh", "hj", "hk", "hq", "hv", "hx", "hz", "ii", "ij", "iw", "iy", "jb", "jc", "jd", "jf", "jg", "jh", "ji", "jj", "jk", "jl", "jm", "jn", "jp", "jq", "jr", "js", "jt", "jv", "jw", "jx", "jy", "jz", "kc", "kh", "kj", "kk", "kp", "kq", "kv", "kx", "kz", "lh", "lj", "lq", "lx", "lz", "mc", "md", "mg", "mh", "mj", "mk", "mq", "mr", "mt", "mv", "mw", "mx", "mz", "nz", "pc", "pj", "pk", "pn", "pq", "pv", "px", "pz", "qa", "qb", "qc", "qd", "qe", "qf", "qg", "qh", "qi", "qj", "qk", "ql", "qm", "qn", "qo", "qp", "qq", "qr", "qs", "qt", "qv", "qw", "qx", "qy", "qz", "rj", "rq", "rx", "rz", "sj", "sv", "sx", "sz", "tj", "tk", "tq", "tv", "tx", "tz", "uj", "uk", "uq", "uw", "vb", "vc", "vd", "vf", "vg", "vh", "vj", "vk", "vl", "vm", "vn", "vp", "vq", "vr", "vs", "vt", "vv", "vw", "vx", "vz", "wg", "wj", "wm", "wq", "wv", "ww", "wx", "wz", "xb", "xd", "xf", "xg", "xj", "xk", "xl", "xm", "xn", "xq", "xr", "xs", "xv", "xw", "xx", "xz", "yf", "yj", "yk", "yq", "yu", "yv", "yx", "yy", "zb", "zc", "zd", "zf", "zg", "zh", "zj", "zk", "zm", "zn", "zp", "zq", "zr", "zs", "zt", "zu", "zv", "zw", "zx"]],
            [30, ["bk", "bq", "bx", "bz", "cb", "cf", "cg", "cj", "cp", "cv", "cw", "cx", "dx", "dz", "fd", "fg", "fj", "fk", "fm", "fp", "fq", "fv", "fx", "fz", "gc", "gj", "gk", "gq", "gv", "gx", "hg", "hj", "hk", "hv", "hx", "hz", "iy", "jb", "jc", "jd", "jf", "jg", "jh", "jj", "jk", "jl", "jm", "jn", "jp", "jq", "jr", "js", "jt", "jv", "jw", "jx", "jy", "jz", "kq", "kv", "kx", "kz", "lj", "lq", "lx", "lz", "mg", "mj", "mk", "mq", "mx", "mz", "pq", "pv", "px", "pz", "qa", "qb", "qc", "qd", "qe", "qf", "qg", "qh", "qi", "qj", "qk", "ql", "qm", "qn", "qo", "qp", "qq", "qr", "qs", "qt", "qv", "qw", "qx", "qy", "qz", "rx", "rz", "sx", "sz", "tk", "tq", "tv", "tx", "uw", "vb", "vc", "vd", "vf", "vg", "vh", "vj", "vk", "vl", "vm", "vn", "vp", "vq", "vr", "vt", "vw", "vx", "vz", "wj", "wq", "wv", "wx", "wz", "xb", "xd", "xf", "xg", "xj", "xk", "xm", "xn", "xr", "xs", "xv", "xw", "xx", "xz", "yj", "yk", "yq", "yv", "yy", "zb", "zc", "zd", "zf", "zg", "zh", "zj", "zk", "zm", "zn", "zp", "zq", "zr", "zs", "zt", "zw", "zx"]],
            [40, ["bk", "bq", "bx", "bz", "cb", "cf", "cg", "cj", "cp", "cv", "cw", "cx", "dx", "dz", "fd", "fg", "fk", "fm", "fp", "fq", "fv", "fx", "fz", "gc", "gk", "gq", "gv", "gx", "hj", "hk", "hv", "hx", "hz", "iy", "jb", "jc", "jd", "jf", "jg", "jh", "jj", "jk", "jl", "jm", "jn", "jp", "jq", "jr", "js", "jt", "jv", "jw", "jx", "jy", "jz", "kq", "kv", "kx", "kz", "lj", "lq", "lx", "lz", "mg", "mj", "mk", "mq", "mx", "mz", "pq", "pv", "px", "pz", "qa", "qb", "qc", "qd", "qe", "qf", "qg", "qh", "qi", "qj", "qk", "ql", "qm", "qn", "qo", "qp", "qq", "qr", "qs", "qt", "qv", "qw", "qx", "qy", "qz", "rx", "rz", "sx", "sz", "tq", "tv", "tx", "uw", "vb", "vc", "vd", "vf", "vg", "vh", "vj", "vk", "vl", "vm", "vn", "vp", "vq", "vr", "vt", "vw", "vx", "vz", "wj", "wq", "wv", "wx", "wz", "xb", "xd", "xf", "xg", "xj", "xk", "xm", "xn", "xr", "xs", "xv", "xw", "xx", "xz", "yj", "yq", "yv", "yy", "zb", "zc", "zd", "zf", "zg", "zh", "zj", "zk", "zn", "zq", "zr", "zs", "zt", "zx"]],
            [50, ["bq", "bx", "bz", "cb", "cf", "cg", "cj", "cp", "cv", "cw", "cx", "dx", "fk", "fm", "fq", "fv", "fx", "fz", "gk", "gq", "gv", "gx", "hj", "hv", "hx", "hz", "jb", "jc", "jd", "jf", "jg", "jh", "jj", "jk", "jl", "jm", "jn", "jp", "jq", "jr", "js", "jt", "jv", "jw", "jx", "jy", "jz", "kq", "kv", "kx", "kz", "lx", "lz", "mg", "mj", "mx", "mz", "pq", "pv", "px", "pz", "qa", "qb", "qc", "qd", "qe", "qf", "qg", "qh", "qi", "qj", "qk", "ql", "qm", "qn", "qo", "qp", "qq", "qr", "qs", "qt", "qv", "qw", "qx", "qy", "qz", "rx", "sx", "sz", "tq", "tx", "vb", "vc", "vd", "vf", "vg", "vh", "vj", "vk", "vl", "vm", "vn", "vp", "vq", "vt", "vw", "vx", "vz", "wj", "wq", "wv", "wx", "xd", "xj", "xk", "xm", "xr", "xv", "xx", "xz", "yq", "yv", "yy", "zb", "zc", "zd", "zf", "zg", "zh", "zj", "zn", "zq", "zr", "zs", "zt", "zx"]],
            [55, ["bq", "bx", "cb", "cf", "cg", "cj", "cp", "cv", "cw", "cx", "dx", "fk", "fm", "fq", "fv", "fx", "fz", "gk", "gq", "gv", "gx", "hj", "hv", "hx", "hz", "jb", "jc", "jd", "jf", "jg", "jh", "jk", "jl", "jm", "jn", "jp", "jq", "jr", "js", "jt", "jv", "jw", "jx", "jy", "jz", "kq", "kx", "kz", "lx", "lz", "mg", "mj", "mx", "mz", "pq", "pv", "px", "qa", "qb", "qc", "qd", "qe", "qf", "qg", "qh", "qi", "qj", "qk", "ql", "qm", "qn", "qo", "qp", "qq", "qr", "qs", "qt", "qv", "qx", "qy", "qz", "rx", "sx", "sz", "tq", "tx", "vb", "vc", "vd", "vf", "vg", "vh", "vj", "vk", "vm", "vp", "vq", "vt", "vw", "vx", "vz", "wq", "wv", "wx", "xd", "xj", "xk", "xv", "xx", "xz", "yq", "yv", "yy", "zb", "zc", "zd", "zf", "zg", "zh", "zj", "zn", "zq", "zr", "zs", "zt", "zx"]],
            [60, ["bq", "bx", "cb", "cf", "cg", "cj", "cp", "cv", "cw", "cx", "dx", "fk", "fq", "fv", "fx", "fz", "gk", "gq", "gv", "gx", "hj", "hv", "hx", "hz", "jb", "jc", "jd", "jf", "jg", "jh", "jk", "jl", "jm", "jn", "jp", "jq", "jr", "js", "jt", "jv", "jw", "jx", "jy", "jz", "kq", "kx", "kz", "lx", "lz", "mg", "mx", "mz", "pq", "pv", "px", "qa", "qb", "qc", "qd", "qe", "qf", "qg", "qh", "qi", "qj", "qk", "ql", "qm", "qn", "qo", "qp", "qq", "qr", "qs", "qt", "qv", "qx", "qy", "qz", "rx", "sx", "sz", "tq", "tx", "vb", "vc", "vd", "vf", "vg", "vh", "vj", "vk", "vm", "vp", "vq", "vt", "vw", "vx", "vz", "wq", "wv", "wx", "xd", "xj", "xk", "xv", "xx", "xz", "yq", "yy", "zc", "zd", "zf", "zg", "zh", "zj", "zn", "zq", "zr", "zs", "zt", "zx"]],
            [70, ["bq", "bx", "cf", "cg", "cj", "cv", "cx", "dx", "fq", "fv", "fx", "fz", "gk", "gq", "gx", "hj", "hx", "jb", "jc", "jd", "jf", "jg", "jh", "jk", "jl", "jm", "jp", "jq", "jr", "js", "jt", "jv", "jw", "jx", "jy", "jz", "kq", "kx", "kz", "mx", "pq", "pv", "px", "qb", "qc", "qd", "qf", "qg", "qh", "qj", "qk", "ql", "qm", "qn", "qp", "qq", "qr", "qs", "qt", "qv", "qx", "qy", "qz", "rx", "sx", "tx", "vb", "vc", "vd", "vf", "vg", "vh", "vj", "vk", "vm", "vp", "vq", "vt", "vw", "vx", "wq", "wv", "wx", "xj", "xk", "xv", "xx", "xz", "yq", "zf", "zj", "zq", "zr", "zt", "zx"]],
            [80, ["bq", "bx", "cf", "cg", "cj", "cv", "cx", "dx", "fq", "fx", "fz", "gq", "gx", "hj", "hx", "jb", "jc", "jf", "jg", "jm", "jq", "jv", "jx", "jz", "kq", "kx", "kz", "mx", "pq", "px", "qb", "qc", "qd", "qg", "qh", "qj", "qk", "ql", "qm", "qn", "qp", "qq", "qr", "qt", "qv", "qx", "qy", "qz", "sx", "tx", "vb", "vc", "vf", "vj", "vm", "vp", "vq", "vt", "vw", "vx", "wq", "wx", "xj", "xx", "xz", "zr", "zx"]],
            ["edited", ["bq", "bx", "cb", "cf", "cg", "cj", "cp", "cv", "cx", "dx", "fq", "fv", "fx", "fz", "gk", "gq", "gx", "hj", "hx", "jb", "jc", "jd", "jf", "jg", "jh", "jk", "jl", "jm", "jp", "jq", "jr", "js", "jt", "jv", "jx", "jz", "kq", "kx", "kz", "mx", "pq", "pv", "px", "qb", "qc", "qd", "qf", "qg", "qh", "qj", "qk", "ql", "qm", "qn", "qp", "qq", "qr", "qs", "qt", "qv", "qx", "qy", "qz", "rx", "sx", "tq", "tx", "vb", "vc", "vf", "vg", "vh", "vj", "vm", "vp", "vq", "vt", "vw", "vx", "wq", "wv", "wx", "xj", "xk", "xx", "xz", "yq", "yy", "zd", "zf", "zj", "zq", "zr", "zx"]],
            ["opensubtitles-words-10-80-edited", ["bq", "bx", "cb", "cf", "cg", "cj", "cp", "cv", "cx", "dx", "fq", "fv", "fx", "fz", "gk", "gq", "gv", "gx", "hj", "hx", "hz", "jb", "jc", "jd", "jf", "jg", "jh", "jk", "jl", "jm", "jp", "jq", "jr", "js", "jt", "jv", "jw", "jx", "jz", "kq", "kx", "kz", "mx", "pq", "pv", "px", "pz", "qb", "qc", "qd", "qe", "qf", "qg", "qh", "qj", "qk", "ql", "qm", "qn", "qp", "qq", "qr", "qs", "qt", "qv", "qx", "qy", "qz", "rx", "sx", "tq", "tx", "vb", "vc", "vf", "vg", "vh", "vj", "vm", "vp", "vq", "vt", "vw", "vx", "wq", "wv", "wx", "xd", "xj", "xk", "xx", "xz", "yq", "yy", "zd", "zf", "zj", "zq", "zr", "zx"]],
            ["small", ["bk", "bq", "bx", "cb", "cf", "cg", "cj", "cp", "cv", "cw", "cx", "dx", "fq", "fv", "fx", "fz", "gk", "gq", "gv", "gx", "hj", "hx", "hz", "jb", "jc", "jd", "jf", "jg", "jh", "jj", "jk", "jl", "jm", "jn", "jp", "jq", "jr", "js", "jt", "jv", "jw", "jx", "jy", "jz", "kq", "kv", "kx", "kz", "lx", "mk", "mx", "mz", "pq", "pv", "px", "pz", "qb", "qc", "qd", "qe", "qf", "qg", "qh", "qi", "qj", "qk", "ql", "qm", "qn", "qo", "qp", "qq", "qr", "qs", "qt", "qv", "qx", "qy", "qz", "rx", "sx", "sz", "tq", "tx", "vb", "vc", "vd", "vf", "vg", "vh", "vj", "vk", "vl", "vm", "vn", "vp", "vq", "vt", "vw", "vx", "vz", "wq", "wv", "wx", "wz", "xd", "xj", "xk", "xr", "xv", "xx", "xz", "yq", "yv", "yy", "zd", "zf", "zg", "zh", "zj", "zn", "zq", "zr", "zt", "zx"]],
            ["large", ["bq", "bx", "cf", "cg", "cj", "cv", "cx", "dx", "fq", "fv", "fx", "fz", "gq", "gx", "hx", "jb", "jc", "jf", "jg", "jh", "jl", "jm", "jp", "jq", "jr", "jt", "jv", "jw", "jx", "jy", "jz", "kq", "kx", "kz", "mx", "pq", "pv", "px", "pz", "qb", "qc", "qd", "qf", "qg", "qh", "qj", "qk", "ql", "qm", "qn", "qp", "qq", "qr", "qt", "qv", "qx", "qy", "qz", "rx", "sx", "tx", "vb", "vc", "vf", "vh", "vj", "vm", "vp", "vq", "vt", "vw", "vx", "wq", "wv", "wx", "xj", "xk", "xr", "xx", "xz", "yq", "zf", "zr", "zx"]]
        ])
    });
    var d = new v;
    t.a = d
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = i(111),
        a = i.n(n),
        r = i(12),
        s = i.n(r),
        o = i(22),
        l = i.n(o),
        u = i(0),
        h = i.n(u),
        c = i(1),
        f = i.n(c),
        v = i(30),
        d = i.n(v),
        m = i(16),
        p = i.n(m),
        g = function() {
            function e(t) {
                h()(this, e), this.element = t.empty(), this.extents = {
                    x: {
                        low: null,
                        high: null
                    },
                    y: {
                        low: null,
                        high: null
                    }
                }
            }
            return f()(e, [{
                key: "addCell",
                value: function(e) {
                    if (e.initElement(this), e)
                        for (var t = ["x", "y"], i = 0; i < t.length; i++) {
                            var n = t[i],
                                a = this.extents[n];
                            null == a.low || e[n] < a.low ? a.low = e[n] : (null == a.high || e[n] > a.high) && (a.high = e[n])
                        }
                }
            }, {
                key: "refreshViewSize",
                value: function(e) {
                    e.element.css(this.cssPosition(e))
                }
            }, {
                key: "rescale",
                value: function(e) {
                    this.element.css("transform", e)
                }
            }, {
                key: "extent",
                value: function(e) {
                    return this.extents[e].high - this.extents[e].low + 1
                }
            }, {
                key: "longestExtent",
                value: function() {
                    return Math.max(this.extents.x.high - this.extents.x.low, this.extents.y.high - this.extents.y.low) + 1
                }
            }]), e
        }(),
        y = function() {
            function e(t, i) {
                h()(this, e), this.element = t.empty(), this.cellContainer = i, this.tiles = []
            }
            return f()(e, [{
                key: "addTile",
                value: function(e) {
                    e.initElement(this)
                }
            }, {
                key: "destroy",
                value: function(e) {
                    e.element.remove()
                }
            }, {
                key: "refreshViewSize",
                value: function(e) {
                    e.element.css(this.cssPosition(e.cell))
                }
            }, {
                key: "rescale",
                value: function(e) {
                    this.element.css("transform", e)
                }
            }]), e
        }(),
        b = i(3),
        x = i.n(b),
        w = i(5),
        k = i.n(w),
        q = i(6),
        j = i.n(q),
        _ = function() {
            function e() {
                var t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).duration;
                h()(this, e), this.duration = t, this.timer = null, this.isComplete = !1, this.delaying = !1, this.playing = !1, this.finished = !1, this.onCompleteAttempts = 0
            }
            return f()(e, [{
                key: "delay",
                value: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    this.delaying = !0, this.timer = window.setTimeout(function() {
                        e.timer = null, e.start()
                    }, t)
                }
            }, {
                key: "clearTimer",
                value: function() {
                    this.timer && (window.clearTimeout(this.timer), this.timer = null)
                }
            }, {
                key: "onComplete",
                value: function(e) {
                    var t = this;
                    this.isComplete || this.onCompleteAttempts > 400 ? (this.onCompleteAttempts = 0, e()) : (this.onCompleteAttempts++, window.requestAnimationFrame(function() {
                        return t.onComplete(e)
                    }))
                }
            }, {
                key: "isComplete",
                get: function() {
                    return this._isComplete
                },
                set: function(e) {
                    return this._isComplete = e
                }
            }, {
                key: "duration",
                get: function() {
                    return null == this._duration ? null == this.constructor.duration ? 0 : this.constructor.duration : this._duration
                },
                set: function(e) {
                    return this._duration = e
                }
            }]), e
        }(),
        S = function(e) {
            function t(e, i) {
                h()(this, t);
                var n = k()(this, (t.__proto__ || x()(t)).call(this));
                return n.tile = e, n.cell = i, n.prepared = !1, n
            }
            return j()(t, e), f()(t, [{
                key: "start",
                value: function() {
                    this.playing || (this.playing = !0, this.prepare().addClass("tile-" + this.constructor.name))
                }
            }, {
                key: "finish",
                value: function() {
                    this.prepare(), this.playing && (this.playing = !1, this.tile.element.removeClass("tile-" + this.constructor.name))
                }
            }, {
                key: "prepare",
                value: function() {
                    return this.prepared || (this.prepared = !0, this.tile.setElementPosition(this.cell)), this.tile.element
                }
            }, {
                key: "isComplete",
                get: function() {
                    return this.cssChangeIsComplete()
                },
                set: function(e) {
                    return this._isComplete = e
                }
            }]), t
        }(_),
        z = function(e) {
            function t() {
                return h()(this, t), k()(this, (t.__proto__ || x()(t)).apply(this, arguments))
            }
            return j()(t, e), f()(t, [{
                key: "prepare",
                value: function() {
                    return this.prepared ? this.tile.element : (this.prepared = !0, this.tile.setElementPosition(this.cell), this.tile.element.appendTo(this.tile.tileContainer.element))
                }
            }, {
                key: "cssChangeIsComplete",
                value: function() {
                    return 1 == this.tile.element.css("opacity")
                }
            }]), t
        }(S);
    Object.defineProperty(z, "duration", {
        enumerable: !0,
        writable: !0,
        value: 200
    }), Object.defineProperty(z, "name", {
        enumerable: !0,
        writable: !0,
        value: "appear"
    });
    var C = z,
        T = function(e) {
            function t() {
                return h()(this, t), k()(this, (t.__proto__ || x()(t)).apply(this, arguments))
            }
            return j()(t, e), f()(t, [{
                key: "cssChangeIsComplete",
                value: function() {
                    for (var e = ["left", "top"], t = 0; t < e.length; t++) {
                        var i = e[t];
                        if (this.tile.element.css(i) != this.tile.cssPosition(this.cell)[i] + "px") return !1
                    }
                    return !0
                }
            }]), t
        }(S);
    Object.defineProperty(T, "duration", {
        enumerable: !0,
        writable: !0,
        value: 100
    }), Object.defineProperty(T, "name", {
        enumerable: !0,
        writable: !0,
        value: "slide"
    });
    var A = T,
        P = function(e) {
            function t(e, i) {
                h()(this, t);
                var n = k()(this, (t.__proto__ || x()(t)).call(this, e, i));
                return n.inner = n.tile.element.find(".tile-inner"), n
            }
            return j()(t, e), f()(t, [{
                key: "prepare",
                value: function() {
                    return this.prepared ? this.tile.element : (this.prepared = !0, this.tile.setElementPosition(this.cell), this.tile.element.appendTo(this.tile.tileContainer.element))
                }
            }, {
                key: "cssChangeIsComplete",
                value: function() {
                    return "scale(1)" == this.inner.css("transform")
                }
            }]), t
        }(S);
    Object.defineProperty(P, "duration", {
        enumerable: !0,
        writable: !0,
        value: 200
    }), Object.defineProperty(P, "name", {
        enumerable: !0,
        writable: !0,
        value: "pop"
    });
    var M = P,
        O = function(e) {
            function t() {
                return h()(this, t), k()(this, (t.__proto__ || x()(t)).apply(this, arguments))
            }
            return j()(t, e), f()(t, [{
                key: "cssChangeIsComplete",
                value: function() {
                    for (var e = ["left", "top"], t = 0; t < e.length; t++) {
                        var i = e[t];
                        if (this.tile.element.css(i) != this.tile.cssPosition(this.cell)[i] + "px") return !1
                    }
                    return !0
                }
            }]), t
        }(S);
    Object.defineProperty(O, "duration", {
        enumerable: !0,
        writable: !0,
        value: 150
    }), Object.defineProperty(O, "name", {
        enumerable: !0,
        writable: !0,
        value: "ram"
    });
    var G = O,
        L = i(24),
        E = i.n(L),
        I = function(e) {
            function t(e, i, n, a) {
                h()(this, t);
                var r = k()(this, (t.__proto__ || x()(t)).call(this, e, n));
                return r.destroy = a, r.tunnelsRemainingAfter = e.tunneling, r
            }
            return j()(t, e), f()(t, [{
                key: "finish",
                value: function() {
                    E()(t.prototype.__proto__ || x()(t.prototype), "finish", this).call(this), this.tunnelsRemainingAfter || this.tile.element.removeClass("tile-tunneler");
                    var e = this.tile.element.find(".tile-tunnel-number");
                    this.tile.tunneling && 1 != this.tile.tunneling ? e.text(this.tile.tunneling) : e.remove()
                }
            }, {
                key: "cssChangeIsComplete",
                value: function() {
                    for (var e = ["left", "top"], t = 0; t < e.length; t++) {
                        var i = e[t];
                        if (this.tile.element.css(i) != this.tile.cssPosition(this.cell)[i] + "px") return !1
                    }
                    return !0
                }
            }]), t
        }(S);
    Object.defineProperty(I, "duration", {
        enumerable: !0,
        writable: !0,
        value: 300
    }), Object.defineProperty(I, "name", {
        enumerable: !0,
        writable: !0,
        value: "drill"
    });
    var F = I,
        N = function(e) {
            function t(e, i, n) {
                var a = n.transitionCss,
                    r = n.finalCss;
                h()(this, t);
                var s = k()(this, (t.__proto__ || x()(t)).call(this));
                return s.toAnimate = e, s.cssClass = i, s.transitionCss = a, s.finalCss = r || a, s.prepared = !1, s
            }
            return j()(t, e), f()(t, [{
                key: "start",
                value: function() {
                    this.playing || (this.playing = !0, this.prepare().addClass(this.cssClass))
                }
            }, {
                key: "finish",
                value: function() {
                    this.prepare(), this.playing && (this.playing = !1, this.toAnimate.removeClass(this.cssClass))
                }
            }, {
                key: "prepare",
                value: function() {
                    if (!this.prepared && this.transitionCss) {
                        this.prepared = !0;
                        var e = !0,
                            t = !1,
                            i = void 0;
                        try {
                            for (var n, a = s()(this.transitionCss); !(e = (n = a.next()).done); e = !0) {
                                var r = n.value,
                                    o = p()(r, 2),
                                    l = o[0],
                                    u = o[1];
                                this.toAnimate.css(l, u)
                            }
                        } catch (e) {
                            t = !0, i = e
                        } finally {
                            try {
                                !e && a.return && a.return()
                            } finally {
                                if (t) throw i
                            }
                        }
                    }
                    return this.toAnimate
                }
            }, {
                key: "isComplete",
                get: function() {
                    if (!this._isComplete) {
                        var e = !0,
                            t = !1,
                            i = void 0;
                        try {
                            for (var n, a = s()(this.finalCss); !(e = (n = a.next()).done); e = !0) {
                                var r = n.value,
                                    o = p()(r, 2),
                                    l = o[0],
                                    u = o[1];
                                if (this.toAnimate.css(l) != u) return !1
                            }
                        } catch (e) {
                            t = !0, i = e
                        } finally {
                            try {
                                !e && a.return && a.return()
                            } finally {
                                if (t) throw i
                            }
                        }
                    }
                    return !0
                },
                set: function(e) {
                    return this._isComplete = e
                }
            }]), t
        }(_),
        R = function(e) {
            function t(e, i, n) {
                h()(this, t);
                for (var a = i.x == n.x ? "y" : "x", r = (n.x, i.x, n.y, i.y, n.cssPosition()), s = (i.cssPosition(), n.cellContainer.spacing - e.tileContainer.borderWidth), o = {}, l = [
                        ["left", "x"],
                        ["top", "y"]
                    ], u = 0; u < l.length; u++) {
                    var c = l[u],
                        f = p()(c, 2),
                        v = f[0],
                        d = f[1];
                    o[v] = r[v] + e.tileContainer.borderWidth + s / 2 * (n[d] - i[d])
                }
                return k()(this, (t.__proto__ || x()(t)).call(this, e.element, "tile-squish-" + a, {
                    transitionCss: [
                        ["top", o.top + "px"],
                        ["left", o.left + "px"]
                    ],
                    finalCss: [
                        ["transform", "scale" + a.toUpperCase() + "(0)"]
                    ]
                }))
            }
            return j()(t, e), f()(t, [{
                key: "finish",
                value: function() {
                    E()(t.prototype.__proto__ || x()(t.prototype), "finish", this).call(this), this.toAnimate.remove(), this.isComplete = !0
                }
            }]), t
        }(N);
    Object.defineProperty(R, "duration", {
        enumerable: !0,
        writable: !0,
        value: 300
    });
    var W = R,
        D = function(e) {
            function t(e, i) {
                return h()(this, t), k()(this, (t.__proto__ || x()(t)).call(this, e, i))
            }
            return j()(t, e), f()(t, [{
                key: "finish",
                value: function() {
                    this.tile.element.remove()
                }
            }]), t
        }(S);
    Object.defineProperty(D, "duration", {
        enumerable: !0,
        writable: !0,
        value: 200
    }), Object.defineProperty(D, "name", {
        enumerable: !0,
        writable: !0,
        value: "vanish"
    });
    var B = D,
        V = function(e) {
            function t() {
                var e;
                h()(this, t);
                for (var i = arguments.length, n = Array(i), a = 0; a < i; a++) n[a] = arguments[a];
                var r = k()(this, (e = t.__proto__ || x()(t)).call.apply(e, [this].concat(n)));
                return r.animations = [], r.assumeCompletionAfterFinish = !1, r
            }
            return j()(t, e), f()(t, [{
                key: "add",
                value: function(e) {
                    this.animations.push(e)
                }
            }, {
                key: "delay",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    this.animations.length && E()(t.prototype.__proto__ || x()(t.prototype), "delay", this).call(this, e)
                }
            }, {
                key: "start",
                value: function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    this.delaying = !1, this.clearTimer();
                    var t = !0,
                        i = !1,
                        n = void 0;
                    try {
                        for (var a, r = s()(this.animations); !(t = (a = r.next()).done); t = !0) {
                            var o = a.value;
                            o.start(e), !this.playing && o.playing && (this.playing = !0)
                        }
                    } catch (e) {
                        i = !0, n = e
                    } finally {
                        try {
                            !t && r.return && r.return()
                        } finally {
                            if (i) throw n
                        }
                    }
                }
            }, {
                key: "finish",
                value: function() {
                    if (this.clearTimer(), this.delaying = !1, this.playing = !1, !this.finished) {
                        this.finished = !0;
                        var e = !0,
                            t = !1,
                            i = void 0;
                        try {
                            for (var n, a = s()(this.animations); !(e = (n = a.next()).done); e = !0) {
                                n.value.finish()
                            }
                        } catch (e) {
                            t = !0, i = e
                        } finally {
                            try {
                                !e && a.return && a.return()
                            } finally {
                                if (t) throw i
                            }
                        }
                    }
                }
            }, {
                key: "isComplete",
                get: function() {
                    if (!this._isComplete && this.animations.length) {
                        if (this.assumeCompletionAfterFinish && this.finished) return !0;
                        var e = !0,
                            t = !1,
                            i = void 0;
                        try {
                            for (var n, a = s()(this.animations); !(e = (n = a.next()).done); e = !0) {
                                if (!n.value.isComplete) return !1
                            }
                        } catch (e) {
                            t = !0, i = e
                        } finally {
                            try {
                                !e && a.return && a.return()
                            } finally {
                                if (t) throw i
                            }
                        }
                    }
                    return this.isComplete = !0
                },
                set: function(e) {
                    return this._isComplete = e
                }
            }, {
                key: "duration",
                get: function() {
                    return null == this._duration ? this.animations.reduce(function(e, t) {
                        return Math.max(e, t.duration)
                    }, 0) : this._duration
                },
                set: function(e) {
                    return this._duration = e
                }
            }]), t
        }(_),
        J = function(e) {
            function t(e) {
                var i = e.animationClass,
                    n = e.duration;
                h()(this, t);
                var a = k()(this, (t.__proto__ || x()(t)).call(this, {
                    duration: n
                }));
                return a.animationClass = i, a
            }
            return j()(t, e), f()(t, [{
                key: "add",
                value: function() {
                    for (var e = arguments.length, i = Array(e), n = 0; n < e; n++) i[n] = arguments[n];
                    E()(t.prototype.__proto__ || x()(t.prototype), "add", this).call(this, new(Function.prototype.bind.apply(this.animationClass, [null].concat(i))))
                }
            }, {
                key: "start",
                value: function() {
                    var e = this,
                        i = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    E()(t.prototype.__proto__ || x()(t.prototype), "start", this).call(this, !1), this.playing && i && (this.timer = window.setTimeout(function() {
                        e.timer = null, e.finish(), e.isComplete = !0
                    }, this.duration))
                }
            }]), t
        }(V),
        U = function(e) {
            function t() {
                h()(this, t);
                var e = k()(this, (t.__proto__ || x()(t)).call(this, {
                    animationClass: C
                }));
                return e.isLoadAnimation = !0, e
            }
            return j()(t, e), f()(t, [{
                key: "addTileAppear",
                value: function(e) {
                    E()(t.prototype.__proto__ || x()(t.prototype), "add", this).call(this, e, e.cell)
                }
            }]), t
        }(J),
        H = function(e) {
            function t() {
                return h()(this, t), k()(this, (t.__proto__ || x()(t)).apply(this, arguments))
            }
            return j()(t, e), f()(t, [{
                key: "add",
                value: function(e) {
                    this.animations.push(e)
                }
            }, {
                key: "unshift",
                value: function(e) {
                    this.animations.unshift(e)
                }
            }, {
                key: "start",
                value: function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    this.delaying = !1, this.clearTimer();
                    var t = 0,
                        i = !0,
                        n = !1,
                        a = void 0;
                    try {
                        for (var r, o = s()(this.animations); !(i = (r = o.next()).done); i = !0) {
                            var l = r.value;
                            t ? l.delay(t) : (l.start(e), !this.playing && l.playing && (this.playing = !0)), t += l.duration
                        }
                    } catch (e) {
                        n = !0, a = e
                    } finally {
                        try {
                            !i && o.return && o.return()
                        } finally {
                            if (n) throw a
                        }
                    }
                }
            }, {
                key: "duration",
                get: function() {
                    return null == this._duration ? this.animations.reduce(function(e, t) {
                        return e + t.duration
                    }, 0) : this._duration
                },
                set: function(e) {
                    return this._duration = e
                }
            }]), t
        }(V),
        K = function(e) {
            function t() {
                h()(this, t);
                var e = k()(this, (t.__proto__ || x()(t)).call(this));
                return e.oldTiles = [], e.slides = new J({
                    animationClass: A
                }), e.pops = new J({
                    animationClass: M
                }), e.vanishes = new J({
                    animationClass: B
                }), e.add(e.slides), e.add(e.pops), e.add(e.vanishes), e
            }
            return j()(t, e), f()(t, [{
                key: "addMerge",
                value: function(e, t, i) {
                    var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        a = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var l, u = s()(e); !(a = (l = u.next()).done); a = !0) {
                            var h = l.value;
                            this.oldTiles.push(h), this.slides.add(h, i)
                        }
                    } catch (e) {
                        r = !0, o = e
                    } finally {
                        try {
                            !a && u.return && u.return()
                        } finally {
                            if (r) throw o
                        }
                    }
                    this.pops.add(t, i), n && this.vanishes.add(t, i)
                }
            }, {
                key: "start",
                value: function() {
                    var e = this,
                        i = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    E()(t.prototype.__proto__ || x()(t.prototype), "start", this).call(this, i), this.playing && i && (this.timer = window.setTimeout(function() {
                        e.timer = null, e.finish(), e.isComplete = !0
                    }, this.duration))
                }
            }, {
                key: "finish",
                value: function() {
                    E()(t.prototype.__proto__ || x()(t.prototype), "finish", this).call(this);
                    var e = !0,
                        i = !1,
                        n = void 0;
                    try {
                        for (var a, r = s()(this.oldTiles); !(e = (a = r.next()).done); e = !0) {
                            a.value.element.remove()
                        }
                    } catch (e) {
                        i = !0, n = e
                    } finally {
                        try {
                            !e && r.return && r.return()
                        } finally {
                            if (i) throw n
                        }
                    }
                }
            }, {
                key: "isComplete",
                get: function() {
                    return this._isComplete || this.pops.isComplete
                },
                set: function(e) {
                    return this._isComplete = !0
                }
            }]), t
        }(H),
        Y = function(e) {
            function t() {
                h()(this, t);
                var e = k()(this, (t.__proto__ || x()(t)).call(this));
                return e.destroyedTiles = [], e.drills = new J({
                    animationClass: F
                }), e.cellSlideOuts = new J({
                    animationClass: N
                }), e.disappears = new J({
                    animationClass: W
                }), e.drillsAndSlideOuts = new V, e.drillsAndSlideOuts.add(e.drills), e.drillsAndSlideOuts.add(e.cellSlideOuts), e.drillsAndSlideOuts.add(e.disappears), e.add(e.drillsAndSlideOuts), e
            }
            return j()(t, e), f()(t, [{
                key: "addTunnel",
                value: function(e, t, i, n) {
                    e.cell != t && (this.rams || (this.rams = new J({
                        animationClass: G
                    }), this.rams.assumeCompletionAfterFinish = !0, this.unshift(this.rams)), this.rams.add(e, t)), this.drills.add(e, t, i, n);
                    var a = i.cssPosition();
                    i.setElementPosition(t), this.cellSlideOuts.add(i.element, "grid-cell-slide-out", {
                        transitionCss: [
                            ["top", a.top + "px"],
                            ["left", a.left + "px"]
                        ]
                    }), this.cellSlideOuts.duration = F.duration, n && (this.drills.assumeCompletionAfterFinish = !0, this.disappears.add(e, t, i))
                }
            }]), t
        }(H),
        X = function(e) {
            function t() {
                h()(this, t);
                var e = k()(this, (t.__proto__ || x()(t)).call(this));
                return e.slides = new J({
                    animationClass: A
                }), e.appears = new J({
                    animationClass: C
                }), e.add(e.slides), e.add(e.appears), e.merges = new K, e.add(e.merges), e.tunnels = new Y, e.add(e.tunnels), e
            }
            return j()(t, e), f()(t, [{
                key: "addMerge",
                value: function() {
                    var e;
                    (e = this.merges).addMerge.apply(e, arguments)
                }
            }, {
                key: "addTileAppear",
                value: function(e) {
                    this.appears.add(e, e.cell)
                }
            }, {
                key: "addTileSlide",
                value: function(e, t) {
                    this.slides.add(e, t)
                }
            }, {
                key: "addTunnel",
                value: function() {
                    var e;
                    (e = this.tunnels).addTunnel.apply(e, arguments)
                }
            }, {
                key: "start",
                value: function() {
                    !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    this.tunnels.delay();
                    var e = Math.max(0, this.tunnels.duration - this.merges.slides.duration);
                    this.merges.delay(e);
                    var t = Math.max(0, this.tunnels.duration - this.slides.duration);
                    this.slides.delay(t), this.appears.delay(Math.max(0, this.tunnels.duration, e + this.merges.slides.duration, t + this.slides.duration))
                }
            }]), t
        }(V),
        Q = i(110),
        Z = function() {
            function e(t) {
                var i = t.name,
                    n = t.placement,
                    a = t.width,
                    r = t.height,
                    s = t.approximateRPM;
                h()(this, e), this.name = i, this.placement = n, this.width = a, this.height = r, this.approximateRPM = s, this.loadCount = 0, this.lastLoadAt = null
            }
            return f()(e, [{
                key: "activateAd",
                value: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this.loadCount++, this.lastLoadAt = new Date, this.element || (this.adPlacementElement().length && (this.element = $("<div id=" + this.id() + ">").addClass(["ad-box", this.cssClass()]).appendTo(this.adPlacementElement())), t || this.element.width(this.width).height(this.height).css({
                        border: "solid 1px black",
                        minWidth: this.width,
                        minHeight: this.height,
                        fontSize: "11pt",
                        overflow: "scroll"
                    })), this.element && (t ? (aiptag.cmd.display.push(function() {
                        var t = e.id();
                        aipDisplayTag ? (e.sendAnalyticsEvent("before_aipDisplayTag_display_" + t, "Debug"), aipDisplayTag.display(t), e.sendAnalyticsEvent("aipDisplayTag_display_" + t, "Debug")) : e.sendAnalyticsEvent("aipDisplayTag_missing", "Debug")
                    }), this.sendAnalyticsEvent("aiptag_cmd_display_push", Q.a.analyticsEventLabel())) : $("<div>").text(this.loadCount + ". " + this.lastLoadAt.toLocaleTimeString()).appendTo(this.element))
                }
            }, {
                key: "sendAnalyticsEvent",
                value: function(e, t) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (i.event_category || (i.event_category = "Ad"), i.event_label = t, Q.a.debugAds && "Ad" == i.event_category && console.log(e), "undefined" != typeof gtag) return gtag("event", e, i)
                }
            }, {
                key: "timeSinceLastLoad",
                value: function() {
                    return null == this.lastLoadAt ? 1 / 0 : new Date - this.lastLoadAt
                }
            }, {
                key: "available",
                value: function() {
                    return this.adPlacementElement().length > 0
                }
            }, {
                key: "widthMargin",
                value: function() {
                    return "vertical" == this.displacementDimension() ? 0 : this.width
                }
            }, {
                key: "heightMargin",
                value: function() {
                    return "vertical" == this.displacementDimension() ? "wide-bottom" == this.placement ? this.fitsVerticallyWithoutScroll() ? this.height : Math.max(0, $(window).height() - this.placementTop()) : this.height : 0
                }
            }, {
                key: "fitsHorizontally",
                value: function() {
                    return "vertical" == this.displacementDimension() ? !!this.adPlacementElement().length && this.adPlacementElement().offset().left + this.width < $(window).width() - 20 : $(window).width() - this.width > 500
                }
            }, {
                key: "fitsVerticallyWithoutScroll",
                value: function() {
                    return this.placementTop() + this.height < $(window).height()
                }
            }, {
                key: "placementTop",
                value: function() {
                    return "wide-bottom" == this.placement && $("#outerNavRow").length ? $("#outerNavRow").offset().top + $("#outerNavRow").height() : "vertical" == this.displacementDimension() ? this.adPlacementElement().offset().top : 0
                }
            }, {
                key: "fitsVertically",
                value: function() {
                    return this.height < $(window).height() - 10
                }
            }, {
                key: "displacementDimension",
                value: function() {
                    return "right" == this.placement ? "horizontal" : "vertical"
                }
            }, {
                key: "cssClass",
                value: function() {
                    return "ad-format-" + this.name.replaceAll("_", "-")
                }
            }, {
                key: "id",
                value: function() {
                    return "cesoid-com_" + this.width + "x" + this.height
                }
            }, {
                key: "adPlacementElement",
                value: function() {
                    return $(".ad-placement-" + this.placement)
                }
            }]), e
        }(),
        ee = new(function() {
            function e() {
                h()(this, e), this.formats = new l.a([
                    ["wide_skyscraper", new Z({
                        name: "wide_skyscraper",
                        placement: "right",
                        width: 160,
                        height: 600,
                        approximateRPM: 1
                    })],
                    ["medium_rectangle", new Z({
                        name: "medium_rectangle",
                        placement: "right",
                        width: 300,
                        height: 250,
                        approximateRPM: 5
                    })],
                    ["mobile_leaderboard", new Z({
                        name: "mobile_leaderboard",
                        placement: "bottom",
                        width: 320,
                        height: 50,
                        approximateRPM: .001
                    })],
                    ["leaderboard", new Z({
                        name: "leaderboard",
                        placement: "wide-bottom",
                        width: 728,
                        height: 90,
                        approximateRPM: .002
                    })]
                ]), this.activeAdFormat = null, this.minRefreshWait = 3e4
            }
            return f()(e, [{
                key: "availablePlacements",
                value: function() {
                    return ["right"]
                }
            }, {
                key: "availableVerticalPlacements",
                value: function() {
                    return ["bottom"]
                }
            }, {
                key: "availableMobilePlacements",
                value: function() {
                    return ["bottom"]
                }
            }, {
                key: "availableAdFormats",
                value: function() {
                    var e = new l.a,
                        t = !0,
                        i = !1,
                        n = void 0;
                    try {
                        for (var a, r = s()(this.formats); !(t = (a = r.next()).done); t = !0) {
                            var o = a.value,
                                u = p()(o, 2),
                                h = u[0],
                                c = u[1];
                            c.available() && e.set(h, c)
                        }
                    } catch (e) {
                        i = !0, n = e
                    } finally {
                        try {
                            !t && r.return && r.return()
                        } finally {
                            if (i) throw n
                        }
                    }
                    return e
                }
            }, {
                key: "gameAutoPauseChanged",
                value: function(e) {
                    e || this.loadAdIfReady()
                }
            }, {
                key: "gameStartedFromPageLoad",
                value: function() {
                    if (!this.activeAdFormat) try {
                        "undefined" != typeof gtag && gtag("event", "no_ad_used", {
                            event_category: "Ad",
                            event_label: Q.a.analyticsEventLabel()
                        })
                    } catch (e) {}
                    this.loadAdIfReady()
                }
            }, {
                key: "userInteractedWithGame",
                value: function() {
                    this.loadAdIfReady()
                }
            }, {
                key: "loadAdIfReady",
                value: function() {
                    try {
                        this.activeAdFormat && this.activeAdFormat.timeSinceLastLoad() > this.minRefreshWait && (this.activeAdFormat.activateAd(this.useRealAds), "undefined" != typeof gtag && gtag("event", this.activeAdFormat.loadCount > 1 ? "refresh" : "initial_load", {
                            event_category: "Ad",
                            event_label: Q.a.analyticsEventLabel()
                        }))
                    } catch (e) {}
                }
            }, {
                key: "setAdFormat",
                value: function(e) {
                    this.activeAdFormat || (this.activeAdFormat = e)
                }
            }]), e
        }()),
        te = [C, M, A, G, F, W, B],
        ie = !0,
        ne = !1,
        ae = void 0;
    try {
        for (var re, se = s()(te); !(ie = (re = se.next()).done); ie = !0) {
            var oe = re.value;
            oe.duration *= 1, $(document.documentElement).css("--" + oe.name + "-duration", oe.duration + "ms")
        }
    } catch (e) {
        ne = !0, ae = e
    } finally {
        try {
            !ie && se.return && se.return()
        } finally {
            if (ne) throw ae
        }
    }
    var le = function() {
            function e() {
                h()(this, e), this.cells = [], this.animations = {
                    standingBy: new U
                }, this.gameContainer = $(".game-container"), this.cellContainer = new g($(".grid-container")), this.tileContainer = new y($(".tile-container"), this.cellContainer), this.gameContainer.css("height", 900);
                var t = $("<div>").addClass("grid-cell").appendTo(this.cellContainer.element.append());
                this.allowedGameRefreshInterval = 100, this.whenRefreshGameSizeAllowed = Date.now(), this.activeAdFormat = ee.activeAdFormat, this.activeAdFormat || (this.activeAdFormat = this.bestAdFormat(), ee.setAdFormat(this.activeAdFormat)), this.requestRefreshGameSize(), t.remove()
            }
            return f()(e, [{
                key: "usingVerticallyDisplacedAd",
                value: function() {
                    return this.activeAdFormat && "vertical" == this.activeAdFormat.displacementDimension()
                }
            }, {
                key: "bestAdFormat",
                value: function() {
                    ee.availableAdFormats();
                    var e = 0,
                        t = void 0,
                        i = void 0,
                        n = !0,
                        a = !1,
                        r = void 0;
                    try {
                        for (var o, l = s()(ee.availableAdFormats()); !(n = (o = l.next()).done); n = !0) {
                            var u = o.value,
                                h = p()(u, 2),
                                c = (h[0], h[1]),
                                f = !0,
                                v = !1,
                                d = void 0;
                            try {
                                for (var m, g = s()(ee.availablePlacements()); !(f = (m = g.next()).done); f = !0) {
                                    var y = m.value;
                                    if (c.placement = y, (!t || c.fitsVerticallyWithoutScroll()) && c.fitsHorizontally() && c.fitsVertically()) {
                                        var b = this.adjustedGameContainerSize({
                                                adFormat: c,
                                                scroll: "pageTop"
                                            }),
                                            x = this.adjustedGameContainerSize({
                                                adFormat: c,
                                                scroll: "optimal"
                                            }),
                                            w = Math.max(Math.min(b.width, b.height), Math.min(x.width, x.height));
                                        (!t || w - e > 45 || Math.abs(w - e) < 45 && c.approximateRPM > t.approximateRPM || w > e && c.approximateRPM == t.approximateRPM) && (e = w, t = c, i = y)
                                    }
                                }
                            } catch (e) {
                                v = !0, d = e
                            } finally {
                                try {
                                    !f && g.return && g.return()
                                } finally {
                                    if (v) throw d
                                }
                            }
                        }
                    } catch (e) {
                        a = !0, r = e
                    } finally {
                        try {
                            !n && l.return && l.return()
                        } finally {
                            if (a) throw r
                        }
                    }
                    var k = !0,
                        q = !1,
                        j = void 0;
                    try {
                        for (var _, S = s()(ee.availableAdFormats()); !(k = (_ = S.next()).done); k = !0) {
                            var z = _.value,
                                C = p()(z, 2),
                                T = (C[0], C[1]),
                                A = !0,
                                P = !1,
                                M = void 0;
                            try {
                                for (var O, G = s()(ee.availableVerticalPlacements()); !(A = (O = G.next()).done); A = !0) {
                                    var L = O.value;
                                    if (T.placement = L, T.fitsHorizontally() && T.fitsVertically()) {
                                        var E = {
                                            width: $(window).width(),
                                            height: $(window).width()
                                        };
                                        if (50 + E.height + T.height < $(window).height())(!t || T.approximateRPM > t.approximateRPM) && (e = E.width, t = T, i = L)
                                    }
                                }
                            } catch (e) {
                                P = !0, M = e
                            } finally {
                                try {
                                    !A && G.return && G.return()
                                } finally {
                                    if (P) throw M
                                }
                            }
                        }
                    } catch (e) {
                        q = !0, j = e
                    } finally {
                        try {
                            !k && S.return && S.return()
                        } finally {
                            if (q) throw j
                        }
                    }
                    if (e > 250) return t.placement = i, t
                }
            }, {
                key: "requestRefreshGameSize",
                value: function(e) {
                    this.refreshGameSize(e)
                }
            }, {
                key: "refreshGameSize",
                value: function(e) {
                    var t = $(".game-message").hasClass("game-over") || $(".game-message").hasClass("game-won") || $(".game-message").hasClass("game-won-and-over");
                    this.whenRefreshGameSizeAllowed = Date.now() + this.allowedGameRefreshInterval;
                    var i = this.adjustedGameContainerSize({
                        scroll: e,
                        forceSquare: t
                    });
                    if (i.height != this.gameContainerHeight || i.width != this.gameContainerWidth || t != this.forceSquare) this.forceSquare = t, this.changeGameSize(i);
                    else {
                        var n = $(".grid-cell"),
                            a = (n.outerWidth() - n.innerWidth()) / 2;
                        this.tileContainerBorderWidth() != a ? this.changeGameSize(i) : this.rescale()
                    }
                }
            }, {
                key: "adjustedGameContainerSize",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.adFormat,
                        i = void 0 === t ? this.activeAdFormat : t,
                        n = e.scroll,
                        a = void 0 === n ? "current" : n,
                        r = e.forceSquare,
                        s = void 0 !== r && r,
                        o = $(".game-container-container"),
                        l = 0,
                        u = 0;
                    i && (l = i.widthMargin(), "horizontal" == i.displacementDimension() && i.element && i.element.is(":visible") && (l -= i.element.width()), u = i.heightMargin());
                    var h = void 0;
                    h = "pageTop" == a ? 180 : "optimal" == a ? 0 : this.gameContainer.offset().top - $(window).scrollTop();
                    var c = $(".in-game-controls");
                    c.length && c.innerHeight();
                    var f = $(window).height() - Math.max(0, h) - (10 + u);
                    f = Math.max(150, f);
                    var v = Math.min($(window).width() - 10, o.innerWidth() - l),
                        d = this.unscaledLength("x") / this.unscaledLength("y"),
                        m = v / f,
                        p = void 0;
                    if (s) {
                        var g = Math.min(v, f);
                        p = {
                            width: g,
                            height: g
                        }
                    } else p = d > m ? {
                        width: v,
                        height: v / d
                    } : {
                        width: f * m,
                        height: f
                    };
                    return this.gameContainer.offset().left < 80 && p.height + 80 > $(window).height() && (p.height = $(window).height() - 80), p
                }
            }, {
                key: "changeGameSize",
                value: function(e) {
                    this.gameContainerHeight = e.height, this.gameContainerWidth = e.width;
                    var t = this.cellContainer.spacing;
                    if (this.calibrateMeasurements(), this.cells.length && this.rescale(), this.gameContainer.css({
                            transition: "all 500ms ease-in-out 0s",
                            height: this.gameContainerHeight
                        }), t != this.cellContainerSpacing()) {
                        var i = !0,
                            n = !1,
                            a = void 0;
                        try {
                            for (var r, o = s()(this.cells); !(i = (r = o.next()).done); i = !0) {
                                var l = r.value;
                                l.setElementPosition(), l.tile && (l.tile.setElementPosition(), l.tile.updateElement())
                            }
                        } catch (e) {
                            n = !0, a = e
                        } finally {
                            try {
                                !i && o.return && o.return()
                            } finally {
                                if (n) throw a
                            }
                        }
                    }
                }
            }, {
                key: "unscaledLength",
                value: function(e) {
                    return this.cellContainerSpacing() * this.cellContainer.extent(e) + this.tileContainer.borderWidth
                }
            }, {
                key: "cellContainerSpacing",
                value: function() {
                    return null == this.cellContainer.spacing && this.calibrateMeasurements(), this.cellContainer.spacing
                }
            }, {
                key: "tileContainerBorderWidth",
                value: function() {
                    return this.tileContainer.borderWidth || this.calibrateMeasurements(), this.tileContainer.borderWidth
                }
            }, {
                key: "calibrateMeasurements",
                value: function() {
                    var e = $(".grid-cell");
                    e.length && (this.tileContainer.borderWidth = (e.outerWidth() - e.innerWidth()) / 2, this.cellContainer.spacing = e.outerWidth() - this.tileContainer.borderWidth)
                }
            }, {
                key: "rescale",
                value: function() {
                    var e = Math.min(this.gameContainerWidth / this.unscaledLength("x"), this.gameContainerHeight / this.unscaledLength("y")),
                        t = Math.max(this.gameContainerHeight, this.gameContainerWidth),
                        i = (t - (4 * this.cellContainerSpacing() + this.tileContainerBorderWidth())) / 2,
                        n = t / (4 * this.cellContainerSpacing() + this.tileContainerBorderWidth()),
                        a = "scale(" + e + ") translate(" + (-this.cellContainer.extents.x.low * this.cellContainerSpacing() - 2) + "px, " + (-this.cellContainer.extents.y.low * this.cellContainerSpacing() - 2) + "px)";
                    $(".game-message").css("transform", "translate(" + i + "px, " + i + "px) scale(" + n + ") translate(-2px, -2px)"), this.cellContainer.rescale(a), this.tileContainer.rescale(a)
                }
            }, {
                key: "tilesRemoved",
                value: function(e) {
                    var t = !0,
                        i = !1,
                        n = void 0;
                    try {
                        for (var a, r = s()(e); !(t = (a = r.next()).done); t = !0) {
                            var o = a.value;
                            this.tileElements.get(o).remove(), this.tileElements.delete(o)
                        }
                    } catch (e) {
                        i = !0, n = e
                    } finally {
                        try {
                            !t && r.return && r.return()
                        } finally {
                            if (i) throw n
                        }
                    }
                }
            }, {
                key: "addOmniMerge",
                value: function(e) {
                    e.element.addClass("tile-omni-merger")
                }
            }, {
                key: "addVanish",
                value: function(e) {
                    e.element.remove()
                }
            }, {
                key: "addCell",
                value: function(e) {
                    this.cellContainer.addCell(e), e.setElementPosition(), this.cells.push(e), e.tile && this.addTileAppear(e.tile)
                }
            }, {
                key: "addValueChange",
                value: function(e, t, i) {
                    e.element.find(".tile-inner").text(i)
                }
            }, {
                key: "addTileAppear",
                value: function(e) {
                    this.tileContainer.addTile(e), this.animations.standingBy.addTileAppear(e)
                }
            }, {
                key: "addTileMerge",
                value: function(e, t, i) {
                    var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    this.tileContainer.addTile(t), this.animations.standingBy.addMerge(e, t, i, n)
                }
            }, {
                key: "addTileSlide",
                value: function(e, t) {
                    this.animations.standingBy.addTileSlide(e, t)
                }
            }, {
                key: "addTunnel",
                value: function(e, t, i, n) {
                    this.cells.push(i), this.cellContainer.addCell(i), this.animations.standingBy.addTunnel(e, t, i, n)
                }
            }, {
                key: "animate",
                value: function() {
                    var e = this,
                        t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).fast_forward,
                        i = void 0 !== t && t,
                        n = function() {
                            var t = e.animations.standingBy.isLoadAnimation;
                            e.animations.standingBy.start(), e.rescale(), e.previousGameSizeRefreshTimout && window.clearTimeout(e.previousGameSizeRefreshTimout), e.previousGameSizeRefreshTimout = window.setTimeout(function() {
                                var i = e.usingVerticallyDisplacedAd() && t && e.startWithOptimallyScrolledSize ? "optimal" : "current";
                                e.startWithOptimallyScrolledSize = !1, e.refreshGameSize(i), e.previousGameSizeRefreshTimout = null
                            }, 1e3), e.animations.running = e.animations.standingBy, e.animations.standingBy = new X
                        };
                    this.animations.running ? (this.animations.running.finish(), this.animations.running.onComplete(n)) : (n(), i && (this.animations.running.finish(), this.animations.running.onComplete(n)))
                }
            }, {
                key: "interruptAnimations",
                value: function() {
                    this.previousGameSizeRefreshTimout && (window.clearTimeout(this.previousGameSizeRefreshTimout), this.previousGameSizeRefreshTimout = null), this.animations.running && this.animations.running.finish()
                }
            }]), e
        }(),
        ue = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [
                        []
                    ],
                    i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        x: 0,
                        y: 0
                    };
                h()(this, e), this.spaces = t, this.indexOffsets = i
            }
            return f()(e, null, [{
                key: "eachSpaceInRectangle",
                value: function(t, i, n) {
                    for (var a = [], r = 0; r < i; r++) {
                        for (var s = [], o = 0; o < t; o++) s.push(n({
                            x: o,
                            y: r
                        }));
                        a.push(s)
                    }
                    return new e(a)
                }
            }, {
                key: "fromJSON",
                value: function(t, i) {
                    var n = new e(t.spaces, t.indexOffsets);
                    if (i)
                        for (var a = 0; a < n.length("y"); a++)
                            for (var r = 0; r < n.length("x"); r++) n.spaces[a][r] && (n.spaces[a][r] = i(n.spaces[a][r]));
                    return n
                }
            }]), f()(e, [{
                key: "eachLinearGroupOfItems",
                value: function(e, t, i) {
                    for (var n = "x" == e ? "y" : "x", a = [], r = 0; r < this.length(n); r++) {
                        for (var s = this.length(e) - 1, o = 1 == t ? 0 : s, l = 0; l <= s; l++) {
                            var u = "x" == e ? [o, r] : [r, o],
                                h = p()(u, 2),
                                c = h[0],
                                f = h[1],
                                v = this.spaces[f][c];
                            v ? a.push(v) : a.length > 0 && (i(a), a = []), o += t
                        }
                        a.length > 0 && (i(a), a = [])
                    }
                }
            }, {
                key: "length",
                value: function(e) {
                    return "x" == e ? this.spaces[0].length : this.spaces.length
                }
            }, {
                key: "getItem",
                value: function(e) {
                    var t = this.spaces[this.indexOffsets.y + e.y];
                    if (t) return t[this.indexOffsets.x + e.x]
                }
            }, {
                key: "setItem",
                value: function(e, t) {
                    for (var i = {
                            x: this.length("x"),
                            y: this.length("y")
                        }; this.indexOffsets.y + e.y < 0; this.indexOffsets.y++) this.spaces.unshift(Array(i.x)), i.y++;
                    for (; this.indexOffsets.x + e.x < 0; this.indexOffsets.x++) {
                        var n = !0,
                            a = !1,
                            r = void 0;
                        try {
                            for (var o, l = s()(this.spaces); !(n = (o = l.next()).done); n = !0) {
                                o.value.unshift(null), i.x++
                            }
                        } catch (e) {
                            a = !0, r = e
                        } finally {
                            try {
                                !n && l.return && l.return()
                            } finally {
                                if (a) throw r
                            }
                        }
                    }
                    for (var u = this.indexOffsets.x + e.x, h = this.indexOffsets.y + e.y; i.y - 1 < h; i.y++) this.spaces.push(Array(i.x));
                    for (; i.x - 1 < u; i.x++) {
                        var c = !0,
                            f = !1,
                            v = void 0;
                        try {
                            for (var d, m = s()(this.spaces); !(c = (d = m.next()).done); c = !0) {
                                d.value.push(null)
                            }
                        } catch (e) {
                            f = !0, v = e
                        } finally {
                            try {
                                !c && m.return && m.return()
                            } finally {
                                if (f) throw v
                            }
                        }
                    }
                    return this.spaces[h][u] = t
                }
            }, {
                key: "itemCount",
                value: function() {
                    return this.reduceItems(function(e, t) {
                        return e + 1
                    })
                }
            }, {
                key: "eachItem",
                value: function(e) {
                    var t = !0,
                        i = !1,
                        n = void 0;
                    try {
                        for (var a, r = s()(this.spaces); !(t = (a = r.next()).done); t = !0) {
                            var o = a.value,
                                l = !0,
                                u = !1,
                                h = void 0;
                            try {
                                for (var c, f = s()(o); !(l = (c = f.next()).done); l = !0) {
                                    var v = c.value;
                                    if (v) {
                                        var d = e(v);
                                        if (null != d) return d
                                    }
                                }
                            } catch (e) {
                                u = !0, h = e
                            } finally {
                                try {
                                    !l && f.return && f.return()
                                } finally {
                                    if (u) throw h
                                }
                            }
                        }
                    } catch (e) {
                        i = !0, n = e
                    } finally {
                        try {
                            !t && r.return && r.return()
                        } finally {
                            if (i) throw n
                        }
                    }
                }
            }, {
                key: "eachItemWithPreviousTwoNeighbors",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        i = void 0,
                        n = !0,
                        a = !1,
                        r = void 0;
                    try {
                        for (var o, l = s()(this.spaces); !(n = (o = l.next()).done); n = !0) {
                            var u, h = o.value;
                            if (null != (u = this.eachItemInRowWithPreviousTwoNeighbors(h, i, e, t))) return u;
                            i = h
                        }
                    } catch (e) {
                        a = !0, r = e
                    } finally {
                        try {
                            !n && l.return && l.return()
                        } finally {
                            if (a) throw r
                        }
                    }
                    if (t && i && null != (u = this.eachItemInRowWithPreviousTwoNeighbors(Array(i.length), i, e, t))) return u
                }
            }, {
                key: "eachItemInRowWithPreviousTwoNeighbors",
                value: function(e, t, i) {
                    for (var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], a = void 0, r = 0; r < e.length; r++) {
                        var s = e[r],
                            o = t ? t[r] : null;
                        if (s || n && (a || o)) {
                            var l = i(s, a, o);
                            if (null != l) return l
                        }
                        a = s
                    }
                    if (n && a) {
                        var u = i(null, a, null);
                        if (null != u) return u
                    }
                }
            }, {
                key: "reduceItems",
                value: function(e, t) {
                    return this.spaces.reduce(function(t, i) {
                        return i.reduce(function(t, i) {
                            return i ? e(t, i) : t
                        }, t)
                    }, t)
                }
            }]), e
        }(),
        he = i(156),
        ce = function() {
            function e(t) {
                var i = t.x,
                    n = t.y;
                h()(this, e), this.x = i, this.y = n
            }
            return f()(e, null, [{
                key: "fromJSON",
                value: function(t) {
                    var i = t.x,
                        n = t.y,
                        a = t.tile,
                        r = new e({
                            x: i,
                            y: n
                        });
                    return a && (he.a.fromJSON(a).cell = r), r
                }
            }]), f()(e, [{
                key: "toJSON",
                value: function() {
                    return {
                        x: this.x,
                        y: this.y,
                        tile: this.tile
                    }
                }
            }, {
                key: "initElement",
                value: function(e) {
                    this.cellContainer = e, this.element = $("<div>").addClass("grid-cell").appendTo(this.cellContainer.element)
                }
            }, {
                key: "setElementPosition",
                value: function(e) {
                    this.element.css(this.cssPosition(e || this))
                }
            }, {
                key: "cssPosition",
                value: function(e) {
                    var t = this;
                    e || (e = this);
                    var i = ["x", "y"].map(function(i) {
                            return Math.round(t.cellContainer.spacing * e[i])
                        }),
                        n = p()(i, 2);
                    return {
                        left: n[0],
                        top: n[1]
                    }
                }
            }, {
                key: "position",
                get: function() {
                    return {
                        x: this.x,
                        y: this.y
                    }
                }
            }]), e
        }(),
        fe = i(157),
        ve = function() {
            function e(t) {
                var i = this;
                h()(this, e), this.cells = t || new ue, this.board = new le, this.cells.eachItem(function(e) {
                    i.board.addCell(e)
                })
            }
            return f()(e, null, [{
                key: "rectangular",
                value: function(t, i) {
                    return new e(ue.eachSpaceInRectangle(t, i, function(e) {
                        return new ce({
                            x: e.x,
                            y: e.y,
                            tile: null
                        })
                    }))
                }
            }, {
                key: "fromJSON",
                value: function(t) {
                    return new e(ue.fromJSON(t, function(e) {
                        return ce.fromJSON(e)
                    }))
                }
            }]), f()(e, [{
                key: "toJSON",
                value: function() {
                    return this.cells
                }
            }, {
                key: "addTile",
                value: function(e) {
                    e.cell && this.board.addTileAppear(e)
                }
            }, {
                key: "addEmptyCell",
                value: function(e) {
                    var t = e.x,
                        i = e.y,
                        n = new ce({
                            x: t,
                            y: i,
                            tile: null
                        });
                    this.cells.setItem(n, n), this.board.addCell(n)
                }
            }, {
                key: "addToAllTiles",
                value: function(e) {
                    this.cells.eachItem(function(t) {
                        t.tile && t.tile.addToValue(e)
                    })
                }
            }, {
                key: "removeTilesByValue",
                value: function(e) {
                    var t = this,
                        i = [];
                    this.cells.eachItem(function(n) {
                        n.tile && n.tile.value == e && (t.board.addVanish(n.tile), i.push(n.tile), n.tile = null)
                    })
                }
            }, {
                key: "removeTile",
                value: function(e) {
                    this.board.addVanish(e), e.cell = null
                }
            }, {
                key: "shiftTiles",
                value: function(e, t) {
                    var i = this,
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        a = !1;
                    if (this.cells.eachLinearGroupOfItems(e, -1 * t, function(r) {
                            a = i.resolveTunneling(e, t, r, n) || a, a = i.resolveTileInteractions(e, t, r, n) || a
                        }), n) return a;
                    a && this.game.tilesMoved()
                }
            }, {
                key: "resolveTunneling",
                value: function(e, t, i) {
                    var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        a = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var l, u = s()(i); !(a = (l = u.next()).done); a = !0) {
                            var h = l.value.tile;
                            if (h) {
                                if (h.tunneling) {
                                    if (n) return !0;
                                    var c = i[0],
                                        f = {
                                            x: c.x,
                                            y: c.y
                                        };
                                    f[e] += t;
                                    var v = new ce({
                                        x: f.x,
                                        y: f.y
                                    });
                                    return this.cells.setItem(f, v), i.unshift(v), h.tunneling--, this.board.addTunnel(h, c, v, Q.a.gameplay.tunnelingTilesDisappear && 0 == h.tunneling), Q.a.gameplay.tunnelingTilesDisappear && 0 == h.tunneling ? h.cell = null : h.cell = v, !0
                                }
                                return !1
                            }
                        }
                    } catch (e) {
                        r = !0, o = e
                    } finally {
                        try {
                            !a && u.return && u.return()
                        } finally {
                            if (r) throw o
                        }
                    }
                    return !1
                }
            }, {
                key: "resolveTileInteractions",
                value: function(e, t, i) {
                    var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        a = !1,
                        r = i.filter(function(e) {
                            return e.tile
                        }).map(function(e) {
                            return new de(e.tile)
                        });
                    r = this.collapseMerges(r), r = this.collapseAnnihilations(r), r = this.collapseDivisions(r);
                    var o = !0,
                        l = !1,
                        u = void 0;
                    try {
                        for (var h, c = s()(i); !(o = (h = c.next()).done); o = !0) {
                            var f = h.value,
                                v = r.shift();
                            v && v.tiles.length > 0 ? a = this.mergeTiles(v.tiles, f, t, n) || a : n || (f.tile = null)
                        }
                    } catch (e) {
                        l = !0, u = e
                    } finally {
                        try {
                            !o && c.return && c.return()
                        } finally {
                            if (l) throw u
                        }
                    }
                    return a
                }
            }, {
                key: "collapseMerges",
                value: function(e) {
                    var t = [],
                        i = void 0,
                        n = !0,
                        a = !1,
                        r = void 0;
                    try {
                        for (var o, l = s()(e); !(n = (o = l.next()).done); n = !0) {
                            var u = o.value;
                            i && i.addIfMerges(u) || (i = u, t.push(i))
                        }
                    } catch (e) {
                        a = !0, r = e
                    } finally {
                        try {
                            !n && l.return && l.return()
                        } finally {
                            if (a) throw r
                        }
                    }
                    return t
                }
            }, {
                key: "collapseAnnihilations",
                value: function(e) {
                    var t = [],
                        i = void 0,
                        n = !0,
                        a = !1,
                        r = void 0;
                    try {
                        for (var o, l = s()(e); !(n = (o = l.next()).done); n = !0) {
                            var u = o.value;
                            i && i.addIfAnnihilates(u) || (i = u, t.push(i))
                        }
                    } catch (e) {
                        a = !0, r = e
                    } finally {
                        try {
                            !n && l.return && l.return()
                        } finally {
                            if (a) throw r
                        }
                    }
                    return t
                }
            }, {
                key: "collapseDivisions",
                value: function(e) {
                    var t = [],
                        i = void 0,
                        n = !0,
                        a = !1,
                        r = void 0;
                    try {
                        for (var o, l = s()(e); !(n = (o = l.next()).done); n = !0) {
                            var u = o.value;
                            i && i.addIfDivides(u) || (i = u, t.push(i))
                        }
                    } catch (e) {
                        a = !0, r = e
                    } finally {
                        try {
                            !n && l.return && l.return()
                        } finally {
                            if (a) throw r
                        }
                    }
                    return t
                }
            }, {
                key: "mergeTiles",
                value: function(e, t, i) {
                    var n = this,
                        a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    if (1 == e.length) {
                        var r = e.shift();
                        if (r.atPosition(t)) return !1;
                        a || (r.cell = t, this.board.addTileSlide(r, t))
                    } else {
                        if (a) return !0;
                        var s = he.a.merge(e, i);
                        if (s) {
                            (s = this.game.initTile(s)).cell = t;
                            var o = function() {
                                n.board.addTileMerge(e, s, t, s.disappearsWhenCreated()), s.disappearsWhenCreated() && (s.cell = null)
                            };
                            s.isLetters() && !Q.a.disableWordBuilding ? fe.a.whenLoaded(function() {
                                o()
                            }) : o(), this.game.tilesMerged(e, s)
                        } else this.board.addTileMerge(e, new he.a({
                            value: 0
                        }), t, !0), t.tile = null
                    }
                    return !0
                }
            }, {
                key: "tilesCanSlide",
                value: function() {
                    for (var e = ["x", "y"], t = 0; t < e.length; t++)
                        for (var i = e[t], n = [1, -1], a = 0; a < n.length; a++) {
                            var r = n[a];
                            if (this.shiftTiles(i, r, !0)) return !0
                        }
                    return !1
                }
            }, {
                key: "mergesAreDirectional",
                value: function() {
                    return this.game.hasLetterTile
                }
            }, {
                key: "allTiles",
                value: function() {
                    var e = [];
                    return this.cells.eachItem(function(t) {
                        t.tile && e.push(t.tile)
                    }), e
                }
            }, {
                key: "cellCount",
                value: function() {
                    this.cells.itemCount()
                }
            }, {
                key: "emptyCellCount",
                value: function() {
                    return this.cells.reduceItems(function(e, t) {
                        return e + (t.tile ? 0 : 1)
                    }, 0)
                }
            }, {
                key: "nthEmptyCell",
                value: function(e) {
                    return this.cells.eachItem(function(t) {
                        if (!t.tile && 0 == --e) return t
                    })
                }
            }, {
                key: "nthTile",
                value: function(e) {
                    return this.cells.eachItem(function(t) {
                        if (t.tile && 0 == --e) return t.tile
                    })
                }
            }, {
                key: "tileCount",
                value: function() {
                    return this.cells.reduceItems(function(e, t) {
                        return e + (t.tile ? 1 : 0)
                    }, 0)
                }
            }]), e
        }(),
        de = function() {
            function e(t) {
                h()(this, e), this.tiles = [t], this.mergeLimit = Q.a.gameplay.mergeLimit
            }
            return f()(e, [{
                key: "addIfMerges",
                value: function(e) {
                    if (1 == e.tiles.length) {
                        var t = e.tiles[0],
                            i = this.tiles.length;
                        if (i < this.mergeLimit && this.tiles[i - 1].mergesWith(t)) return this.tiles.push(t), !0
                    }
                    return !1
                }
            }, {
                key: "addIfAnnihilates",
                value: function(e) {
                    if (Q.a.gameplay.negativesAnnihilate && 1 == e.tiles.length) {
                        var t = e.tiles[0];
                        if (1 == this.tiles.length && this.tiles[0].isNumber() && t.isNumber() && this.tiles[0].value == -t.value) return this.tiles.push(t), !0
                    }
                    return !1
                }
            }, {
                key: "addIfDivides",
                value: function(e) {
                    if (1 == e.tiles.length) {
                        var t = e.tiles[0];
                        if (1 == this.tiles.length && this.tiles[0].dividesWith(t)) return this.tiles.push(t), !0
                    }
                    return !1
                }
            }]), e
        }(),
        me = function() {
            function e(t, i) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                    a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                h()(this, e), this.scoreAddition = 0, this.winningTile = he.a.isNumber(Q.a.gameplay.tileGoal) ? Number(Q.a.gameplay.tileGoal) : Q.a.gameplay.tileGoal, this.hasLetterTile = !1, this.tileValuesCreated = n;
                var r = !0,
                    o = !1,
                    u = void 0;
                try {
                    for (var c, f = s()(this.tileValuesCreated); !(r = (c = f.next()).done); r = !0) {
                        var v = c.value;
                        if (he.a.isLetters(v) && !Q.a.disableWordBuilding) {
                            this.hasLetterTile = !0, "words" != Q.a.variation && fe.a.load();
                            break
                        }
                    }
                } catch (e) {
                    o = !0, u = e
                } finally {
                    try {
                        !r && f.return && f.return()
                    } finally {
                        if (o) throw u
                    }
                }
                if (this.movesSinceLastTileAdded = a, this.totalMoves = 0, this.grid = t, this.scores = new l.a, i) {
                    var d = !0,
                        m = !1,
                        g = void 0;
                    try {
                        for (var y, b = s()(i); !(d = (y = b.next()).done); d = !0) {
                            var x = y.value,
                                w = p()(x, 2),
                                k = w[0],
                                q = w[1];
                            this.setScore(k, q)
                        }
                    } catch (e) {
                        m = !0, g = e
                    } finally {
                        try {
                            !d && b.return && b.return()
                        } finally {
                            if (m) throw g
                        }
                    }
                } else this.setScore("standard", 0);
                if (!this.grid)
                    if (Q.a.testPattern)
                        if ("all_standard" == Q.a.testPattern) {
                            this.grid = ve.rectangular(4, 4);
                            for (var j = 0; j < 4; j++)
                                for (var _ = 0; _ < 4; _++)
                                    if (j < 3 || _ < 3) {
                                        var S = new he.a({
                                            value: Math.pow(2, 1 + j + 4 * _)
                                        });
                                        S.cell = this.grid.cells.getItem({
                                            x: j,
                                            y: _
                                        }), this.grid.addTile(S)
                                    }
                        } else if ("all_custom_tiles" == Q.a.testPattern) {
                    var z = Math.ceil((Q.a.customTiles.size + 1) / 4);
                    this.grid = ve.rectangular(4, z);
                    var C = 0,
                        T = !0,
                        A = !1,
                        P = void 0;
                    try {
                        for (var M, O = s()(Q.a.customTiles); !(T = (M = O.next()).done); T = !0) {
                            var G = M.value,
                                L = p()(G, 2),
                                E = L[0],
                                I = (L[1], new he.a({
                                    value: E
                                }));
                            I.cell = this.grid.cells.getItem({
                                x: C % 4,
                                y: Math.floor(C / 4)
                            }), this.grid.addTile(I), C++
                        }
                    } catch (e) {
                        A = !0, P = e
                    } finally {
                        try {
                            !T && O.return && O.return()
                        } finally {
                            if (A) throw P
                        }
                    }
                } else if ("all_supermerging" == Q.a.testPattern) {
                    this.grid = ve.rectangular(18, 7);
                    for (var F = [1, 3, 5, 7, 9, 15, 27], N = 0; N < 18; N++)
                        for (var R = 0; R < Math.min(7, F.length); R++)
                            if (N < 17 || R < 6) {
                                var W = new he.a({
                                    value: Math.pow(2, N) * F[R]
                                });
                                W.cell = this.grid.cells.getItem({
                                    x: N,
                                    y: R
                                }), this.grid.addTile(W)
                            }
                } else {
                    switch (Q.a.testPattern) {
                        case 1:
                            this.grid = ve.rectangular(13, 13);
                            for (var $ = 1; $ < 13; $++) {
                                for (var D = 0; D <= 3; D++) {
                                    var B = new he.a({
                                        value: Math.pow(2, $ - 1) * Math.pow(3, D)
                                    });
                                    B.cell = this.grid.cells.getItem({
                                        x: $,
                                        y: D
                                    }), this.grid.addTile(B)
                                }
                                for (var V = 4; V <= 5; V++) {
                                    var J = new he.a({
                                        value: Math.pow(2, $ - 1) * Math.pow(5, V - 3)
                                    });
                                    J.cell = this.grid.cells.getItem({
                                        x: $,
                                        y: V
                                    }), this.grid.addTile(J)
                                }
                                for (var U = 6; U <= 8; U++) {
                                    var H = new he.a({
                                        value: Math.pow(2, $ - 1) * Math.pow(3, U - 5) * 5
                                    });
                                    H.cell = this.grid.cells.getItem({
                                        x: $,
                                        y: U
                                    }), this.grid.addTile(H)
                                }
                                for (var K = 9; K <= 11; K++) {
                                    var Y = new he.a({
                                        value: Math.pow(2, $ - 1) * Math.pow(3, K - 8) * 25
                                    });
                                    Y.cell = this.grid.cells.getItem({
                                        x: $,
                                        y: K
                                    }), this.grid.addTile(Y)
                                }
                                for (var X = 12; X <= 12; X++) {
                                    var Z = new he.a({
                                        value: 7 * Math.pow(2, $ - 1)
                                    });
                                    Z.cell = this.grid.cells.getItem({
                                        x: $,
                                        y: X
                                    }), this.grid.addTile(Z)
                                }
                            }
                            break;
                        case 2:
                            this.grid = ve.rectangular(13, 13);
                            for (var ee = 1; ee < 13; ee++)
                                for (var te = 1; te <= 13; te++) {
                                    var ie = new he.a({
                                        value: ee - 1 + 12 * (te - 1)
                                    });
                                    ie.cell = this.grid.cells.getItem({
                                        x: ee,
                                        y: te - 1
                                    }), this.grid.addTile(ie)
                                }
                            break;
                        case 3:
                            this.grid = ve.rectangular(13, 13);
                            for (var ne = 1; ne < 13; ne++)
                                for (var ae = 1; ae <= 13; ae++) {
                                    var re = new he.a({
                                        value: .1 * (ne - 1) + 12 * (ae - 1)
                                    });
                                    re.cell = this.grid.cells.getItem({
                                        x: ne,
                                        y: ae - 1
                                    }), this.grid.addTile(re)
                                }
                            break;
                        case 4:
                            this.grid = ve.rectangular(13, 13);
                            for (var se = 1; se < 13; se++)
                                for (var oe = 1; oe <= 13; oe++) {
                                    var le = 127 + 127 / 13 * (se - 1),
                                        ue = 255 / 13 * (oe - 1),
                                        ce = new he.a({
                                            tunneling: 123456789,
                                            value: "1" + Math.round(le).toString().padStart(3, 0) + Math.round(ue).toString().padStart(3, 0) + "127",
                                            color: [249, 246, 242]
                                        });
                                    ce.cell = this.grid.cells.getItem({
                                        x: se,
                                        y: oe - 1
                                    }), this.grid.addTile(ce)
                                }
                    }
                } else {
                    var de = Q.a.startCellCount;
                    if (de) {
                        var me = Math.floor(Math.sqrt(de));
                        this.grid = ve.rectangular(me, me);
                        for (var pe = de - Math.pow(me, 2), ge = 0; ge < pe; ge++) this.grid.addEmptyCell({
                            x: ge,
                            y: me
                        })
                    } else this.grid = ve.rectangular(Q.a.gameplay.width, Q.a.gameplay.height)
                }
                this.grid.game = this
            }
            return f()(e, null, [{
                key: "fromJSON",
                value: function(t) {
                    var i = t.grid,
                        n = t.score,
                        a = t.scores,
                        r = t.tileNumbersCreated,
                        s = t.movesSinceLastTileAdded;
                    return a || (a = new l.a([
                        ["standard", n]
                    ])), new e(ve.fromJSON(i), a, r.map(function(e) {
                        return he.a.isNumber(e) ? Number(e) : e
                    }), s)
                }
            }]), f()(e, [{
                key: "start",
                value: function() {
                    var e = this,
                        t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).skip_animation,
                        i = void 0 !== t && t;
                    if (this.gameJustWon = !1, "words" == Q.a.variation && fe.a.load(Q.a.gameplay.listSuffix), $("#wordList").empty(), ("words" == Q.a.variation || this.hasLetterTile && !Q.a.disableWordBuilding) && fe.a.whenLoaded(function() {
                            var t = !0,
                                i = !1,
                                n = void 0;
                            try {
                                for (var a, r = s()(e.tileValuesCreated); !(t = (a = r.next()).done); t = !0) {
                                    var o = a.value;
                                    fe.a.hasWord(o) && e.addTileAchieved(o)
                                }
                            } catch (e) {
                                i = !0, n = e
                            } finally {
                                try {
                                    !t && r.return && r.return()
                                } finally {
                                    if (i) throw n
                                }
                            }
                        }), 0 == this.grid.tileCount() && this.grid.emptyCellCount() > 0) {
                        for (var n = 0; n < Q.a.gameplay.startTileCount; n++) this.addRandomTile();
                        this.movesSinceLastTileAdded = Q.a.gameplay.addTileAfterMoveCount - 1
                    }
                    this.grid.board.animate({
                        fast_forward: i
                    }), this.updateGameIsOver(function() {
                        e.gameManager.gameOutcomeReady()
                    })
                }
            }, {
                key: "toJSON",
                value: function() {
                    return {
                        grid: this.grid,
                        settings: Q.a.toJSONForGame(),
                        scores: d()(this.scores),
                        tileNumbersCreated: this.tileValuesCreated.map(function(e) {
                            return e.toString()
                        }),
                        movesSinceLastTileAdded: this.movesSinceLastTileAdded
                    }
                }
            }, {
                key: "destroy",
                value: function() {
                    $(".score-addition").remove()
                }
            }, {
                key: "getTiles",
                value: function() {
                    return !!this.grid && this.grid.allTiles()
                }
            }, {
                key: "move",
                value: function(e) {
                    var t = this;
                    this.gameJustWon = !1;
                    var i = ["left", "right"].includes(e) ? "x" : "y",
                        n = ["down", "right"].includes(e) ? 1 : -1;
                    this.hasLetterTile && this.totalMoves > 0 && !Q.a.disableWordBuilding ? fe.a.whenLoaded(function() {
                        t.grid.shiftTiles(i, n)
                    }) : this.grid.shiftTiles(i, n), this.updateGameIsOver(function() {
                        t.gameManager.gameOutcomeReady()
                    })
                }
            }, {
                key: "tilesMerged",
                value: function(e, t) {
                    var i = this;
                    t.isLetters() && !Q.a.disableWordBuilding ? fe.a.whenLoaded(function() {
                        t.value.length >= 2 && t.isWord() && (t.isFirstAppearance && (i.addTileAchieved(t.value), i.setScore("word_count", i.getScore("word_count") + 1)), !t.isFirstAppearance && t.isPartOfLargerWord() || (i.gameManager.scoreChanged("word_count"), i.scoreAddition += Math.pow(2, t.value.length - 2)))
                    }) : t.isNumber() && (this.scoreAddition += t.value)
                }
            }, {
                key: "factorial",
                value: function(e) {
                    return e > 1 ? e * this.factorial(e - 1) : 1
                }
            }, {
                key: "tilesMoved",
                value: function() {
                    this.totalMoves++, this.scoreAddition > 0 && (this.setScore("standard", this.getScore("standard") + this.scoreAddition), this.showScoreAddition(this.scoreAddition), this.gameManager.scoreChanged()), this.scoreAddition = 0, Q.a.gameplay.decrementTiles && (this.grid.addToAllTiles(-1), this.grid.removeTilesByValue(0)), (++this.movesSinceLastTileAdded >= Q.a.gameplay.addTileAfterMoveCount || 0 == this.grid.tileCount()) && (this.addRandomTile(), this.movesSinceLastTileAdded = 0), this.grid.board.animate(), this.gameManager.gameChanged()
                }
            }, {
                key: "addRandomTile",
                value: function() {
                    var e = he.a.random();
                    e && (!e.isLetters() || this.hasLetterTile || Q.a.disableWordBuilding || (fe.a.load(Q.a.gameplay.listSuffix), this.hasLetterTile = !0), this.initTile(e), e.cell = this.grid.nthEmptyCell(Math.ceil(Math.random() * this.grid.emptyCellCount())), this.grid.addTile(e))
                }
            }, {
                key: "updateGameIsOver",
                value: function(e) {
                    var t = this;
                    !this.hasLetterTile || fe.a.fragments || Q.a.disableWordBuilding ? (this.gameIsOver = !this.grid.tilesCanSlide(), e()) : this.hasLetterTile && fe.a.loadCallbacks.push(function() {
                        t.updateGameIsOver(e)
                    })
                }
            }, {
                key: "readyForMove",
                value: function() {
                    return !this.hasLetterTile || fe.a.fragments || 0 == this.grid.tileCount() || !Q.a.disableWordBuilding
                }
            }, {
                key: "initTile",
                value: function(e) {
                    return this.tileValuesCreated.includes(e.value) || (e.isFirstAppearance = !0, this.tileValuesCreated.push(e.value), e.value == this.winningTile && (this.gameJustWon = !0)), this.becomesTunnelingTile(e) && e.tunneling++, e
                }
            }, {
                key: "becomesTunnelingTile",
                value: function(e) {
                    if (Q.a.gameplay.tunneling && e.isFirstAppearance)
                        if ("words" == Q.a.variation) {
                            if (e.value.length >= 2 && e.isWord()) return this.gameManager.tunnelingTileCreated(), !0
                        } else {
                            if (!Q.a.gameplay.tunneling.restrictToFactors) return this.gameManager.tunnelingTileCreated(), !0;
                            var t = !0,
                                i = !1,
                                n = void 0;
                            try {
                                for (var a, r = s()(Q.a.gameplay.tunneling.restrictToFactors); !(t = (a = r.next()).done); t = !0) {
                                    var o = a.value;
                                    if (e.value / o == Math.round(e.value / o)) return this.gameManager.tunnelingTileCreated(), !0
                                }
                            } catch (e) {
                                i = !0, n = e
                            } finally {
                                try {
                                    !t && r.return && r.return()
                                } finally {
                                    if (i) throw n
                                }
                            }
                        } return !1
                }
            }, {
                key: "getScore",
                value: function(e) {
                    return this.scores.has(e) || this.scores.set(e, 0), this.scores.get(e)
                }
            }, {
                key: "setScore",
                value: function(e, t) {
                    this.scores.set(e, t), $(".score-container" + ("standard" == e ? "" : "-" + e)).text(t)
                }
            }, {
                key: "addTileAchieved",
                value: function(e) {
                    $("<span>").addClass("scored-word").text(e).appendTo("#wordList"), $("#wordList").append(" "), this.grid.board.requestRefreshGameSize()
                }
            }, {
                key: "showScoreAddition",
                value: function(e) {
                    $(".score-addition").remove(), $(".score-container").append($("<div>").addClass("score-addition").text("+" + this.scoreAddition)), window.setTimeout(function() {
                        return $(".score-addition").remove()
                    }, 650)
                }
            }]), e
        }(),
        pe = i(31),
        ge = i.n(pe),
        ye = function() {
            function e() {
                h()(this, e), this.keyCommands = new l.a, this.elementTouches = new l.a, this.elementGestureCommands = new l.a, this.buttonCommands = new l.a, this.keysPaused = !1
            }
            return f()(e, [{
                key: "addMethodKeys",
                value: function(e, t) {
                    var i = !0,
                        n = !1,
                        a = void 0;
                    try {
                        for (var r, o = s()(t); !(i = (r = o.next()).done); i = !0) {
                            var l = r.value,
                                u = p()(l, 3),
                                h = u[0],
                                c = u[1],
                                f = u[2],
                                v = !0,
                                d = !1,
                                m = void 0;
                            try {
                                for (var g, y = s()(c); !(v = (g = y.next()).done); v = !0) {
                                    var b = g.value,
                                        x = p()(b, 2),
                                        w = x[0],
                                        k = x[1],
                                        q = !0,
                                        j = !1,
                                        _ = void 0;
                                    try {
                                        for (var S, z = s()(k); !(q = (S = z.next()).done); q = !0) {
                                            var C = S.value;
                                            this.keyCommands.set(C, [e, h, w, f])
                                        }
                                    } catch (e) {
                                        j = !0, _ = e
                                    } finally {
                                        try {
                                            !q && z.return && z.return()
                                        } finally {
                                            if (j) throw _
                                        }
                                    }
                                }
                            } catch (e) {
                                d = !0, m = e
                            } finally {
                                try {
                                    !v && y.return && y.return()
                                } finally {
                                    if (d) throw m
                                }
                            }
                        }
                    } catch (e) {
                        n = !0, a = e
                    } finally {
                        try {
                            !i && o.return && o.return()
                        } finally {
                            if (n) throw a
                        }
                    }
                }
            }, {
                key: "pauseMethodKeys",
                value: function() {
                    this.keysPaused = !0
                }
            }, {
                key: "unpauseMethodKeys",
                value: function() {
                    this.keysPaused = !1
                }
            }, {
                key: "addMethodGestures",
                value: function(e, t, i) {
                    var n = document.getElementsByClassName(t);
                    if (n.length > 0) {
                        var a = this.elementGestureCommands.get(r);
                        a || (a = new l.a);
                        var r = n[0];
                        this.elementTouches.set(r, {
                            start: {
                                x: null,
                                y: null
                            }
                        });
                        var o = !0,
                            u = !1,
                            h = void 0;
                        try {
                            for (var c, f = s()(i); !(o = (c = f.next()).done); o = !0) {
                                var v = c.value,
                                    d = p()(v, 3),
                                    m = d[0],
                                    g = d[1],
                                    y = d[2],
                                    b = !0,
                                    x = !1,
                                    w = void 0;
                                try {
                                    for (var k, q = s()(g); !(b = (k = q.next()).done); b = !0) {
                                        var j = k.value,
                                            _ = p()(j, 2),
                                            S = _[0],
                                            z = _[1],
                                            C = !0,
                                            T = !1,
                                            A = void 0;
                                        try {
                                            for (var P, M = s()(z); !(C = (P = M.next()).done); C = !0) {
                                                var O = P.value;
                                                a.set(O, [e, m, S, y])
                                            }
                                        } catch (e) {
                                            T = !0, A = e
                                        } finally {
                                            try {
                                                !C && M.return && M.return()
                                            } finally {
                                                if (T) throw A
                                            }
                                        }
                                    }
                                } catch (e) {
                                    x = !0, w = e
                                } finally {
                                    try {
                                        !b && q.return && q.return()
                                    } finally {
                                        if (x) throw w
                                    }
                                }
                            }
                        } catch (e) {
                            u = !0, h = e
                        } finally {
                            try {
                                !o && f.return && f.return()
                            } finally {
                                if (u) throw h
                            }
                        }
                        this.elementGestureCommands.set(r, a)
                    }
                }
            }, {
                key: "addMethodButtons",
                value: function(e, t) {
                    var i = !0,
                        n = !1,
                        a = void 0;
                    try {
                        for (var r, o = s()(t); !(i = (r = o.next()).done); i = !0) {
                            var l = r.value,
                                u = p()(l, 3),
                                h = u[0],
                                c = u[1],
                                f = u[2],
                                v = !0,
                                d = !1,
                                m = void 0;
                            try {
                                for (var g, y = s()(c); !(v = (g = y.next()).done); v = !0) {
                                    var b = g.value,
                                        x = p()(b, 2),
                                        w = x[0],
                                        k = x[1],
                                        q = !0,
                                        j = !1,
                                        _ = void 0;
                                    try {
                                        for (var S, z = s()(k); !(q = (S = z.next()).done); q = !0) {
                                            var C = S.value;
                                            this.buttonCommands.set(C, [e, h, w, f])
                                        }
                                    } catch (e) {
                                        j = !0, _ = e
                                    } finally {
                                        try {
                                            !q && z.return && z.return()
                                        } finally {
                                            if (j) throw _
                                        }
                                    }
                                }
                            } catch (e) {
                                d = !0, m = e
                            } finally {
                                try {
                                    !v && y.return && y.return()
                                } finally {
                                    if (d) throw m
                                }
                            }
                        }
                    } catch (e) {
                        n = !0, a = e
                    } finally {
                        try {
                            !i && o.return && o.return()
                        } finally {
                            if (n) throw a
                        }
                    }
                }
            }, {
                key: "activate",
                value: function() {
                    var e = this;
                    $(document).keydown(function(t) {
                        var i = e.keyCommands.get(t.keyCode);
                        if (i && !e.keysPaused) {
                            var n = p()(i, 4),
                                a = n[0],
                                r = n[1],
                                s = n[2],
                                o = n[3];
                            t.preventDefault(), a[r].apply(a, ge()(s).concat([t])), o && e.triggerAnalyticsEvent(a, [o, r, s])
                        }
                    });
                    var t = function(t, i) {
                            t.addEventListener("touchstart", function(i) {
                                i.touches.length > 1 || e.elementTouches.set(t, {
                                    start: {
                                        x: i.touches[0].clientX,
                                        y: i.touches[0].clientY
                                    }
                                })
                            }), t.addEventListener("touchmove", function(e) {
                                e.preventDefault()
                            }), t.addEventListener("touchend", function(n) {
                                if (!(n.touches.length > 0)) {
                                    var a = n.changedTouches[0],
                                        r = e.elementTouches.get(t).start,
                                        s = a.clientX,
                                        o = a.clientY,
                                        l = s - r.x,
                                        u = Math.abs(l),
                                        h = o - r.y,
                                        c = Math.abs(h);
                                    if (Math.max(u, c) > 10) {
                                        var f = u > c ? l > 0 ? "right" : "left" : h > 0 ? "down" : "up",
                                            v = i.get(f);
                                        if (v) {
                                            var d = p()(v, 4),
                                                m = d[0],
                                                g = d[1],
                                                y = d[2],
                                                b = d[3];
                                            m[g].apply(m, ge()(y).concat([n])), b && e.triggerAnalyticsEvent(m, [b, g, y])
                                        }
                                    }
                                }
                            })
                        },
                        i = !0,
                        n = !1,
                        a = void 0;
                    try {
                        for (var r, o = s()(this.elementGestureCommands); !(i = (r = o.next()).done); i = !0) {
                            var l = r.value,
                                u = p()(l, 2);
                            t(u[0], u[1])
                        }
                    } catch (e) {
                        n = !0, a = e
                    } finally {
                        try {
                            !i && o.return && o.return()
                        } finally {
                            if (n) throw a
                        }
                    }
                    var h = function(t, i, n, a, r) {
                            $(t).on("click", function(t) {
                                i[n].apply(i, ge()(a).concat([t])), r && e.triggerAnalyticsEvent(i, [r, n, a]), t.target.blur()
                            })
                        },
                        c = !0,
                        f = !1,
                        v = void 0;
                    try {
                        for (var d, m = s()(this.buttonCommands); !(c = (d = m.next()).done); c = !0) {
                            var g = d.value,
                                y = p()(g, 2),
                                b = y[0],
                                x = p()(y[1], 4);
                            h(b, x[0], x[1], x[2], x[3])
                        }
                    } catch (e) {
                        f = !0, v = e
                    } finally {
                        try {
                            !c && m.return && m.return()
                        } finally {
                            if (f) throw v
                        }
                    }
                }
            }, {
                key: "triggerAnalyticsEvent",
                value: function(e, t) {
                    var i = p()(t, 3),
                        n = i[0],
                        a = (i[1], i[2], {
                            category: "Interactive",
                            action: n,
                            label: e.analyticsLabelData.join("-")
                        });
                    "undefined" != typeof gtag && gtag("event", a.action, {
                        event_category: a.category,
                        event_label: a.label
                    })
                }
            }]), e
        }(),
        be = function() {
            function e(t, i, n) {
                h()(this, e), this.name = "2048" + (i ? "_" + i : ""), this.gamePrefix = n, this.webStorage = t
            }
            return f()(e, null, [{
                key: "load",
                value: function() {
                    for (var t = arguments.length, i = Array(t), n = 0; n < t; n++) i[n] = arguments[n];
                    return new(Function.prototype.bind.apply(e, [null].concat([this.getWebStorage("localStorage")], i)))
                }
            }, {
                key: "getWebStorage",
                value: function(e) {
                    var t = void 0;
                    try {
                        t = window[e];
                        var i = "__storage_test__";
                        return t.setItem(i, i), t.removeItem(i), t
                    } catch (i) {
                        if (i instanceof DOMException && (22 === i.code || 1014 === i.code || "QuotaExceededError" === i.name || "NS_ERROR_DOM_QUOTA_REACHED" === i.name) && t && 0 !== t.length) return t;
                        throw new StorageAvailabilityException(e)
                    }
                }
            }]), f()(e, [{
                key: "getItemWithoutGamePrefix",
                value: function(e) {
                    return this.webStorage.getItem(this.name + "_" + e)
                }
            }, {
                key: "setItemWithoutGamePrefix",
                value: function(e, t) {
                    return this.webStorage.setItem(this.name + "_" + e, t)
                }
            }, {
                key: "getBestScore",
                value: function(t) {
                    return e.number(this.webStorage.getItem(this.name + (t ? "_" + t : "") + "_bestScore"), 0)
                }
            }, {
                key: "setBestScore",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    this.webStorage.setItem(this.name + (t ? "_" + t : "") + "_bestScore", e)
                }
            }, {
                key: "hasLastGame",
                value: function() {
                    return !!this.getUnparsedLastGame()
                }
            }, {
                key: "moveLastGame",
                value: function(e) {
                    this.setUnparsedLastGame(this.getUnparsedLastGame(), e), this.deleteLastGame()
                }
            }, {
                key: "getUnparsedLastGame",
                value: function() {
                    return this.webStorage.getItem(this.lastGameName())
                }
            }, {
                key: "setUnparsedLastGame",
                value: function(e, t) {
                    return this.webStorage.setItem(this.lastGameName(t), e)
                }
            }, {
                key: "deleteLastGame",
                value: function() {
                    return this.webStorage.removeItem(this.lastGameName())
                }
            }, {
                key: "setGamePrefix",
                value: function(e) {
                    this.gamePrefix = e
                }
            }, {
                key: "lastGameName",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.gamePrefix;
                    return (e ? e + "__" : "") + this.name + "_lastGame"
                }
            }, {
                key: "lastGame",
                get: function() {
                    try {
                        var t = JSON.parse(this.getUnparsedLastGame());
                        if (t) return t.score = e.number(t.score, 0), t
                    } catch (e) {
                        throw e instanceof SyntaxError ? xe("Stored game would not parse.") : e
                    }
                },
                set: function(e) {
                    this.setUnparsedLastGame(a()(e))
                }
            }], [{
                key: "number",
                value: function(e, t) {
                    if (null == e) return t;
                    var i = Number(e);
                    return isNaN(i) ? t : i
                }
            }]), e
        }(),
        xe = function() {
            function e(t) {
                h()(this, e), this.namespace = t, this.message = "not parseable"
            }
            return f()(e, [{
                key: "toString",
                value: function() {
                    return this.namespace + " " + this.message
                }
            }]), e
        }(),
        we = function() {
            function e(t) {
                h()(this, e), this.webStorageType = t, this.message = "not available"
            }
            return f()(e, [{
                key: "toString",
                value: function() {
                    return this.webStorageType + " " + this.message
                }
            }]), e
        }(),
        ke = new(function() {
            function e() {
                h()(this, e), this.minReportWait = 6e4, this.disableReporting = !1, this.startTime = new Date
            }
            return f()(e, [{
                key: "userInteractedWithGame",
                value: function(e) {
                    if (this.timeSinceLastReport() > this.minReportWait) {
                        var t = new Date;
                        t - this.startTime > this.minReportWait && (this.lastReportAt = t, this.reportThemePlayTimeToServer())
                    }
                }
            }, {
                key: "reportThemePlayTimeToServer",
                value: function() {
                    !this.disableReporting && this.incrementMinutesUrl && this.authenticityToken && $.post({
                        url: this.incrementMinutesUrl,
                        data: {
                            authenticity_token: this.authenticityToken
                        },
                        success: function(e) {
                            $(".theme-minutes-played").text(e)
                        }
                    })
                }
            }, {
                key: "timeSinceLastReport",
                value: function() {
                    return null == this.lastReportAt ? 1 / 0 : new Date - this.lastReportAt
                }
            }]), e
        }()),
        qe = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                h()(this, e), this.keptPlayingAnyway = 0, this.variation = Q.a.variation || "original", this.setGameCallbacks = [], this.history = [], this.future = [], this.bestScores = new l.a, Q.a.loadPreferencesFromData(), Q.a.theme = t.theme || "original", Q.a.testPattern = t.testPattern;
                try {
                    this.storage = be.load(e.storageNamespace(this.variation), e.gameNamespacePrefix()), this.loadBestScores()
                } catch (e) {
                    if (!(e instanceof we)) throw e;
                    console.error("StorageError: " + e.message)
                }
                this.setUseLabels(Q.a.useLabels), this.setThemesHaveSeparateGames(Q.a.themesHaveSeparateGames), this.analyticsLabelData = ["TwoThousandFortyEight", Q.a.variation], this.input = new ye, this.setupInput(), this.input.activate()
            }
            return f()(e, [{
                key: "startLastGameOrNewGame",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (Q.a.variation || (Q.a.variation = "original"), this.loadLastGame(e.legacySavedGameThemeName) && !["all_standard", "all_supermerging", "all_custom_tiles"].includes(e.testPattern) || ("adjustable" == Q.a.variation && (Q.a.loadGameplayFromPresets(), Q.a.setToInputs()), this.loadNewGame()), this.game.start(), this.game && this.game.grid && this.game.grid.board) {
                        this.game.grid.board.startWithOptimallyScrolledSize = e.startWithOptimallyScrolledSize;
                        try {
                            ee.gameStartedFromPageLoad()
                        } catch (e) {}
                    }
                    var t = $(".game-container").offset().top + $(window).height();
                    return $("body").css({
                        minHeight: t
                    }), this
                }
            }], [{
                key: "startLastGameOrNewGame",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    Q.a.variation || (Q.a.variation = "original");
                    var i = new e(t);
                    return i.startLastGameOrNewGame(t), i
                }
            }]), f()(e, [{
                key: "loadRequiresThemeSeparationAnswer",
                value: function() {
                    if (null == Q.a.themesHaveSeparateGames && !Q.a.testPattern) {
                        var e = this.getLastThemeUsed();
                        return e && Q.a.theme && e != Q.a.theme
                    }
                    return !1
                }
            }, {
                key: "addSetGameCallback",
                value: function(e) {
                    return this.setGameCallbacks.push(e)
                }
            }, {
                key: "getTilesInCurrentGame",
                value: function() {
                    return !!this.game && this.game.getTiles()
                }
            }, {
                key: "loadLastGame",
                value: function(e) {
                    if (this.storage) {
                        if (Q.a.themesHaveSeparateGames) {
                            var t = this.gameNamespacePrefix(!0, this.getLastThemeUsed());
                            this.storage.setGamePrefix(this.gameNamespacePrefix(!1)), this.storage.hasLastGame() && this.storage.moveLastGame(t), this.storage.setGamePrefix(this.gameNamespacePrefix()), e && e != Q.a.theme && (this.storage.hasLastGame() || (this.storage.setGamePrefix(this.gameNamespacePrefix(!0, e)), this.storage.hasLastGame() && this.storage.moveLastGame(t), this.storage.setGamePrefix(this.gameNamespacePrefix())))
                        }
                        try {
                            var i = this.storage.lastGame;
                            if (i) this.setupGameFromJSON(i);
                            else {
                                if (null == Q.a.themesHaveSeparateGames) return !1;
                                if (this.getLastThemeUsed() != Q.a.theme && Q.a.themesHaveSeparateGames) return !1;
                                var n = void 0;
                                Q.a.themesHaveSeparateGames || (n = this.getLastThemeUsed());
                                var a = this.gameNamespacePrefix();
                                this.storage.setGamePrefix(this.gameNamespacePrefix(!Q.a.themesHaveSeparateGames, n));
                                var r = this.storage.lastGame;
                                if (r && this.storage.moveLastGame(a), this.storage.setGamePrefix(a), !r) return !1;
                                this.setupGameFromJSON(r)
                            }
                        } catch (e) {
                            throw e instanceof xe && console.error("StorageError: " + e.message), e
                        }
                    }
                    return this.setLastThemeUsed(Q.a.theme), !0
                }
            }, {
                key: "getLastThemeUsed",
                value: function() {
                    return null == this._lastThemeUsed && (this._lastThemeUsed = this.storage.getItemWi
thoutGamePrefix("lastThemeUsed") || ""), this._lastThemeUsed
                }
            }, {
                key: "setLastThemeUsed",
                value: function(e) {
                    return this._lastThemeUsed != e && (this._lastThemeUsed = e, this.storage.setItemWithoutGamePrefix("lastThemeUsed", e)), this._lastThemeUsed
                }
            }, {
                key: "setupGameFromJSON",
                value: function(e) {
                    if (e.settings && (e.settings.mergeLimit || e.settings.version)) {
                        Q.a.version = e.settings.version ? e.settings.version : 1;
                        var t = !0,
                            i = !1,
                            n = void 0;
                        try {
                            for (var a, r = s()(Q.a.subvariationTypes); !(t = (a = r.next()).done); t = !0) {
                                var o = a.value;
                                Q.a.setSubvariation(o, e.settings[o])
                            }
                        } catch (e) {
                            i = !0, n = e
                        } finally {
                            try {
                                !t && r.return && r.return()
                            } finally {
                                if (i) throw n
                            }
                        }
                        Q.a.loadGameplayFromPresets(), Q.a.overrideGameplayFromJSON(e.settings), Q.a.setAutoProbabilitiesFromJSON(e.settings)
                    } else Q.a.setSubvariation("difficulty", Q.a.getLegacySubvariation("difficulty")), Q.a.overrideGameplayFromInputs();
                    Q.a.setToInputs(), e.settings = Q.a, this.loadBestScores(), this.setGame(me.fromJSON(e))
                }
            }, {
                key: "gameNamespacePrefix",
                value: function() {
                    return e.gameNamespacePrefix.apply(e, arguments)
                }
            }, {
                key: "loadNewGame",
                value: function() {
                    Q.a.loadSubvariationsFromInputs(), Q.a.loadGameplayFromPresets(), Q.a.overrideGameplayFromInputs(), Q.a.loadAutoProbabilitiesFromInputs(), this.loadBestScores(), this.setGame(new me)
                }
            }, {
                key: "selectedSubvariation",
                value: function(e) {
                    return $('select[name="' + e + '"] option').filter(":selected").val()
                }
            }, {
                key: "loadBestScores",
                value: function() {
                    this.setBestScore("standard", this.storage.getBestScore(this.scoreNamespace("standard"))), "words" == Q.a.variation && this.setBestScore("word_count", this.storage.getBestScore(this.scoreNamespace("word_count")))
                }
            }, {
                key: "setupInput",
                value: function() {
                    var e = this;
                    this.input.addMethodKeys(this, [
                        ["move", [
                            [
                                ["up"],
                                [38, 87, 188]
                            ],
                            [
                                ["left"],
                                [37, 65]
                            ],
                            [
                                ["down"],
                                [40, 83, 79]
                            ],
                            [
                                ["right"],
                                [39, 68, 69]
                            ]
                        ]],
                        ["undo", [
                            [
                                [],
                                [90]
                            ]
                        ]],
                        ["redo", [
                            [
                                [],
                                [86]
                            ]
                        ]],
                        ["keepGoingOrStartNew", [
                            [
                                [!1],
                                [13]
                            ]
                        ]]
                    ]);
                    for (var t = ["grid-container", "tile-container"], i = 0; i < t.length; i++) {
                        var n = t[i];
                        this.input.addMethodGestures(this, n, [
                            ["move", [
                                [
                                    ["up"],
                                    ["up"]
                                ],
                                [
                                    ["left"],
                                    ["left"]
                                ],
                                [
                                    ["down"],
                                    ["down"]
                                ],
                                [
                                    ["right"],
                                    ["right"]
                                ]
                            ]]
                        ])
                    }
                    this.input.addMethodButtons(this, [
                        ["startNew", [
                            [
                                [!0],
                                [".restart-button", ".retry-button"]
                            ]
                        ], "start_new_game"],
                        ["clearGameMessage", [
                            [
                                [],
                                [".clear-game-message-button"]
                            ]
                        ]],
                        ["keepGoing", [
                            [
                                [],
                                [".keep-playing-button"]
                            ]
                        ]],
                        ["keepPlayingAnyway", [
                            [
                                [],
                                [".keep-playing-anyway-button"]
                            ]
                        ]],
                        ["undo", [
                            [
                                [],
                                [".undo-button"]
                            ]
                        ]],
                        ["redo", [
                            [
                                [],
                                [".redo-button"]
                            ]
                        ]],
                        ["toggleLabels", [
                            [
                                [],
                                [".labels"]
                            ]
                        ]],
                        ["toggleThemesHaveSeparateGames", [
                            [
                                [],
                                [".themes-have-separate-games"]
                            ]
                        ]],
                        ["toggleAutopilot", [
                            [
                                [],
                                [".autopilot-toggle"]
                            ]
                        ]],
                        ["enableAutopilot", [
                            [
                                [],
                                [".enableAutopilot"]
                            ]
                        ]]
                    ]), $("body").on("focus", 'textarea, input[type="text"], input[type="number"]', function() {
                        e.adjustGameControls()
                    }), $("body").on("blur", 'textarea, input[type="text"], input[type="number"]', function() {
                        e.adjustGameControls()
                    }), $(window).on("resize", function() {
                        e.ensureSufficientBodySize(), e.adjustGameControls(), e.requestRefreshGameSize()
                    }), $(window).on("scroll", function() {
                        e.adjustGameControls(), e.requestRefreshGameSize()
                    }), $("body").on("shown.bs.modal hidden.bs.modal", ".modal", function() {
                        e.adjustGameControls()
                    }), Q.a.setupInput(this)
                }
            }, {
                key: "ensureSufficientBodySize",
                value: function() {
                    var e = $(".game-container").offset().top + $(window).height();
                    $("body").innerHeight() < e && $("body").css({
                        height: e
                    })
                }
            }, {
                key: "adjustGameControls",
                value: function() {
                    var e = this.input.keysPaused,
                        t = $('textarea, input[type="text"], input[type="number"]').filter(":focus").length > 0,
                        i = ($(window).scrollTop() - $(".game-container").offset().top) / $(".game-container").innerHeight() > .125,
                        n = $(".modal").hasClass("show");
                    this.input.keysPaused = t || i || n;
                    var a = i;
                    null != this.navigationGestureEnabled && this.navigationGestureEnabled == a || ($("body").css("touch-action", a ? "auto" : "manipulation"), this.navigationGestureEnabled = a), e != this.input.keysPaused && ee.gameAutoPauseChanged(this.input.keysPaused)
                }
            }, {
                key: "keepGoingOrStartNew",
                value: function() {
                    this.showingGameWonOrLost && (this.input.triggerAnalyticsEvent(this, ["start_new_game"]), this.userInteractedWithGame("start_new_game")), this.game.gameIsOver && (this.loadNewGame(), this.game.start(), this.gameChanged()), this.clearGameMessage()
                }
            }, {
                key: "keepGoing",
                value: function() {
                    this.clearGameMessage(), this.userInteractedWithGame("keep_going")
                }
            }, {
                key: "keepPlayingAnyway",
                value: function() {
                    if (this.game.gameIsOver) {
                        this.keptPlayingAnyway++;
                        var e = this.game.grid,
                            t = e.nthTile(Math.ceil(Math.random() * this.game.grid.tileCount()));
                        t.omniMerge = 1, this.clearGameMessage(), e.board.addOmniMerge(t), this.userInteractedWithGame("keep_playing_anyway")
                    }
                }
            }, {
                key: "toggleLabels",
                value: function() {
                    Q.a.useLabels = !Q.a.useLabels, this.setUseLabels(Q.a.useLabels)
                }
            }, {
                key: "setUseLabels",
                value: function(e) {
                    $("input.labels").prop("checked", e), $(".has-image .tile-string").toggle(e)
                }
            }, {
                key: "toggleThemesHaveSeparateGames",
                value: function() {
                    Q.a.themesHaveSeparateGames = !Q.a.themesHaveSeparateGames, this.setThemesHaveSeparateGames(Q.a.themesHaveSeparateGames);
                    var e = $("input.themes-have-separate-games");
                    e.length && e.data("url") && $.ajax({
                        url: e.data("url"),
                        method: "patch",
                        data: {
                            ttfe_themes_have_separate_games: Q.a.themesHaveSeparateGames,
                            authenticity_token: e.data("authenticity-token")
                        }
                    })
                }
            }, {
                key: "setThemesHaveSeparateGames",
                value: function(e) {
                    $("input.themes-have-separate-games").prop("checked", e), Q.a.themesHaveSeparateGames = e
                }
            }, {
                key: "move",
                value: function(e) {
                    this.game.readyForMove() && this.game.move(e), this.userInteractedWithGame("move")
                }
            }, {
                key: "enableAutopilot",
                value: function() {
                    Q.a.preferences.autopilotEnabled || (Q.a.preferences.autopilotEnabled = !0, $(".autopilotWarning").collapse("hide"), this.toggleAutopilot())
                }
            }, {
                key: "toggleAutopilot",
                value: function() {
                    Q.a.preferences.autopilotEnabled ? (this.autopilotOn = !this.autopilotOn, $("input.autopilot-toggle").prop("checked", this.autopilotOn), this.userInteractedWithGame(this.autopilotOn ? "turn_on_autopilot" : "turn_off_autopilot")) : $(".autopilotWarning").collapse("toggle"), this.autopilotOn && (this.resetAutopilotDelay(), this.autopilotMove())
                }
            }, {
                key: "autopilotMove",
                value: function() {
                    var e = this;
                    this.autopilotOn && (null == this.autopilotDelay ? this.resetAutopilotDelay() : this.autopilotDelayChangeFactor = 1 - (1 - this.autopilotDelayChangeFactor) * this.autopilotDelayChangeFactor, null == this.autopilotMoveCount ? (this.autopilotMoveCount = 0, this.autopilotClockwise = !0, this.autopilotDirection = 0) : (this.autopilotMoveCount++, this.autopilotMoveCount % 20 == 0 && (this.autopilotClockwise = !this.autopilotClockwise), this.autopilotClockwise ? 3 == this.autopilotDirection ? this.autopilotDirection = 0 : this.autopilotDirection++ : 0 == this.autopilotDirection ? this.autopilotDirection = 3 : this.autopilotDirection--), this.game.move({
                        0: "down",
                        1: "left",
                        2: "up",
                        3: "right"
                    } [this.autopilotDirection]), this.autopilotTimer = window.setTimeout(function() {
                        e.autopilotMove()
                    }, this.autopilotDelay))
                }
            }, {
                key: "startNew",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    (!this.game || this.game.gameIsOver || e) && (this.keptPlayingAnyway = 0, this.interruptAutopilot(), Q.a.adjustableForm && Q.a.adjustableForm.collapse(), this.clearGameMessage(), this.loadNewGame(), this.game.start(), this.gameChanged(), this.undoUsed = !1, this.userInteractedWithGame("start_new_game"))
                }
            }, {
                key: "undo",
                value: function() {
                    var e = this.history.pop();
                    e && ($(".redo-button").removeClass("d-none"), this.future.push(a()(this.storage.lastGame)), this.setGameState(e), this.clearGameMessage(), this.userInteractedWithGame("undo"))
                }
            }, {
                key: "redo",
                value: function() {
                    var e = this.future.pop();
                    e && (0 == this.future.length && $(".redo-button").addClass("d-none"), this.history.push(a()(this.storage.lastGame)), this.setGameState(e), this.userInteractedWithGame("redo"))
                }
            }, {
                key: "setGameState",
                value: function(e) {
                    this.interruptAutopilot();
                    var t = JSON.parse(e);
                    t.settings = this.settings, this.game && this.game.grid.board.interruptAnimations(), this.setGame(me.fromJSON(t)), this.game.start({
                        skip_animation: !0
                    }), this.setLastThemeUsed(Q.a.theme), this.storage.lastGame = this.game
                }
            }, {
                key: "gameOutcomeReady",
                value: function() {
                    var e = this.game.gameJustWon,
                        t = this.game.gameIsOver;
                    e && t ? this.gameWonAndLost() : e ? this.gameWon() : t && this.gameLost()
                }
            }, {
                key: "gameChanged",
                value: function() {
                    this.future = [], this.future.length > 0 && (this.undoUsed = !0), $(".redo-button").addClass("d-none"), this.history.push(a()(this.storage.lastGame)), this.setLastThemeUsed(Q.a.theme), this.storage.lastGame = this.game
                }
            }, {
                key: "gameLost",
                value: function() {
                    var e = this;
                    if (this.keptPlayingAnyway) {
                        var t = this.game.grid,
                            i = t.nthTile(Math.ceil(Math.random() * this.game.grid.tileCount()));
                        i.omniMerge = 1, t.board.addOmniMerge(i)
                    } else this.showingGameWonOrLost = !0, this.interruptAutopilot(), window.setTimeout(function() {
                        $(".game-message").addClass("game-over").find("p.gameMessageBigText").text("Game over!"), $(".game-message .keep-playing-anyway-button").toggleClass("d-none", e.game.hasLetterTile), e.requestRefreshGameSize()
                    })
                }
            }, {
                key: "gameWon",
                value: function() {
                    this.showingGameWonOrLost = !0, this.interruptAutopilot(), $(".game-message").addClass("game-won").find("p.gameMessageBigText").text("You win!"), $(".game-message .keep-playing-anyway-button").addClass("d-none"), this.requestRefreshGameSize()
                }
            }, {
                key: "gameWonAndLost",
                value: function() {
                    this.showingGameWonOrLost = !0, this.interruptAutopilot(), $(".game-message").addClass("game-won-and-over").find("p.gameMessageBigText").text("Game over win!?"), $(".game-message").addClass("game-won-and-over").find("p.gameMessageWonAndOver").removeClass("d-none"), this.requestRefreshGameSize()
                }
            }, {
                key: "interruptAutopilot",
                value: function() {
                    this.autopilotOn && (this.autopilotOn = !1, $("input.autopilot-toggle").prop("checked", !1))
                }
            }, {
                key: "scoreChanged",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "standard";
                    this.game.getScore(e) > this.getBestScore(e) && (this.setBestScore(e, this.game.getScore(e)), this.storage.setBestScore(this.getBestScore(e), this.scoreNamespace(e)))
                }
            }, {
                key: "scoreNamespace",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "standard",
                        t = "";
                    return "tunneling" == this.variation && 4 != Q.a.difficulty && null != Q.a.difficulty && (t = "difficulty_" + Q.a.difficulty + "_"), "standard" != e && (t += e), t
                }
            }, {
                key: "tunnelingTileCreated",
                value: function() {
                    this.resetAutopilotDelay()
                }
            }, {
                key: "resetAutopilotDelay",
                value: function() {
                    this.autopilotDelay = 600, this.autopilotDelayChangeFactor = .99
                }
            }, {
                key: "getBestScore",
                value: function(e) {
                    return this.bestScores.has(e) || this.bestScores.set(e, 0), this.bestScores.get(e)
                }
            }, {
                key: "setBestScore",
                value: function(e, t) {
                    this.bestScores.set(e, t), $("#bestScore_" + e).text(t)
                }
            }, {
                key: "clearGameMessage",
                value: function() {
                    var e = this;
                    this.showingGameWonOrLost = !1, $(".game-message").removeClass(["game-won", "game-over", "game-won-and-over"]), $(".game-message").find(".gameMessageWonAndOver").addClass("d-none"), window.setTimeout(function() {
                        return e.requestRefreshGameSize()
                    })
                }
            }, {
                key: "requestRefreshGameSize",
                value: function() {
                    this.game && this.game.grid && this.game.grid.board && this.game.grid.board.requestRefreshGameSize()
                }
            }, {
                key: "setGame",
                value: function(e) {
                    this.game && this.game.destroy(), this.game = e, this.game.gameManager = this;
                    var t = !0,
                        i = !1,
                        n = void 0;
                    try {
                        for (var a, r = s()(this.setGameCallbacks); !(t = (a = r.next()).done); t = !0) {
                            (0, a.value)()
                        }
                    } catch (e) {
                        i = !0, n = e
                    } finally {
                        try {
                            !t && r.return && r.return()
                        } finally {
                            if (i) throw n
                        }
                    }
                }
            }, {
                key: "userInteractedWithGame",
                value: function(e) {
                    ee.userInteractedWithGame(e), ke.userInteractedWithGame(e)
                }
            }], [{
                key: "gameNamespacePrefix",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Q.a.themesHaveSeparateGames,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Q.a.theme;
                    return e ? t : ""
                }
            }, {
                key: "storageNamespace",
                value: function(e) {
                    return (e || Q.a.variation || "original") + (Q.a.testPattern ? "_testPattern" : "")
                }
            }]), e
        }();
    App.TwoThousandFortyEight = qe, App.AdManager = ee, App.Settings = Q.a, App.Stats = ke, App.Storage = be
}]);