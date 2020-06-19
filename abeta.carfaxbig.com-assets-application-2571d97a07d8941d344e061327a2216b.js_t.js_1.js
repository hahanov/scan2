//# sourceMappingURL=application.js.map
! function(d, l) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = d.document ? l(d, !0) : function(d) {
        if (!d.document) throw Error("jQuery requires a window with a document");
        return l(d)
    } : l(d)
}("undefined" != typeof window ? window : this, function(d, l) {
    function p(a, b, c) {
        var m, f = (b = b || A).createElement("script");
        if (f.text = a, c)
            for (m in Ib) c[m] && (f[m] = c[m]);
        b.head.appendChild(f).parentNode.removeChild(f)
    }

    function h(a) {
        return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? Fa[cb.call(a)] ||
            "object" : typeof a
    }

    function g(a) {
        var b = !!a && "length" in a && a.length,
            c = h(a);
        return !x(a) && !wa(a) && ("array" === c || 0 === b || "number" == typeof b && 0 < b && b - 1 in a)
    }

    function e(a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
    }

    function k(a, b, c) {
        return x(b) ? f.grep(a, function(a, f) {
            return !!b.call(a, f, a) !== c
        }) : b.nodeType ? f.grep(a, function(a) {
            return a === b !== c
        }) : "string" != typeof b ? f.grep(a, function(a) {
            return -1 < Ga.call(b, a) !== c
        }) : f.filter(b, a, c)
    }

    function q(a, b) {
        for (;
            (a = a[b]) && 1 !== a.nodeType;);
        return a
    }

    function w(a) {
        var b = {};
        return f.each(a.match(da) || [], function(a, f) {
            b[f] = !0
        }), b
    }

    function r(a) {
        return a
    }

    function u(a) {
        throw a;
    }

    function O(a, b, c, f) {
        var n;
        try {
            a && x(n = a.promise) ? n.call(a).done(b).fail(c) : a && x(n = a.then) ? n.call(a, b, c) : b.apply(void 0, [a].slice(f))
        } catch (v) {
            c.apply(void 0, [v])
        }
    }

    function J() {
        A.removeEventListener("DOMContentLoaded", J);
        d.removeEventListener("load", J);
        f.ready()
    }

    function S(a, b) {
        return b.toUpperCase()
    }

    function I(a) {
        return a.replace(Jb, "ms-").replace(Kb, S)
    }

    function N() {
        this.expando =
            f.expando + N.uid++
    }

    function Ha(a, b, c) {
        var f;
        if (void 0 === c && 1 === a.nodeType)
            if (f = "data-" + b.replace(Lb, "-$&").toLowerCase(), "string" == typeof(c = a.getAttribute(f))) {
                try {
                    f = c, c = "true" === f || "false" !== f && ("null" === f ? null : f === +f + "" ? +f : Mb.test(f) ? JSON.parse(f) : f)
                } catch (n) {}
                K.set(a, b, c)
            } else c = void 0;
        return c
    }

    function ma(a, b, c, m) {
        var n, v, d = 20,
            e = m ? function() {
                return m.cur()
            } : function() {
                return f.css(a, b, "")
            },
            g = e(),
            h = c && c[3] || (f.cssNumber[b] ? "" : "px"),
            k = (f.cssNumber[b] || "px" !== h && +g) && xa.exec(f.css(a, b));
        if (k && k[3] !==
            h) {
            g /= 2;
            h = h || k[3];
            for (k = +g || 1; d--;) f.style(a, b, k + h), 0 >= (1 - v) * (1 - (v = e() / g || .5)) && (d = 0), k /= v;
            k *= 2;
            f.style(a, b, k + h);
            c = c || []
        }
        return c && (k = +k || +g || 0, n = c[1] ? k + (c[1] + 1) * c[2] : +c[2], m && (m.unit = h, m.start = k, m.end = n)), n
    }

    function aa(a, b) {
        for (var c, m, n = [], v = 0, d = a.length; v < d; v++)
            if ((m = a[v]).style)
                if (c = m.style.display, b) {
                    if ("none" === c && (n[v] = z.get(m, "display") || null, n[v] || (m.style.display = "")), "" === m.style.display && Ia(m)) {
                        c = v;
                        var e, g = void 0;
                        e = m.ownerDocument;
                        var k = m.nodeName;
                        e = (m = db[k]) || (g = e.body.appendChild(e.createElement(k)),
                            m = f.css(g, "display"), g.parentNode.removeChild(g), "none" === m && (m = "block"), db[k] = m, m);
                        n[c] = e
                    }
                } else "none" !== c && (n[v] = "none", z.set(m, "display", c));
        for (v = 0; v < d; v++) null != n[v] && (a[v].style.display = n[v]);
        return a
    }

    function D(a, b) {
        var c;
        return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && e(a, b) ? f.merge([a], c) : c
    }

    function ea(a, b) {
        for (var c = 0, f = a.length; c < f; c++) z.set(a[c], "globalEval", !b || z.get(b[c],
            "globalEval"))
    }

    function ya(a, b, c, m, n) {
        for (var v, d, e, g, k = b.createDocumentFragment(), q = [], p = 0, l = a.length; p < l; p++)
            if ((v = a[p]) || 0 === v)
                if ("object" === h(v)) f.merge(q, v.nodeType ? [v] : v);
                else if (Pb.test(v)) {
            d = d || k.appendChild(b.createElement("div"));
            e = (eb.exec(v) || ["", ""])[1].toLowerCase();
            e = V[e] || V._default;
            d.innerHTML = e[1] + f.htmlPrefilter(v) + e[2];
            for (e = e[0]; e--;) d = d.lastChild;
            f.merge(q, d.childNodes);
            (d = k.firstChild).textContent = ""
        } else q.push(b.createTextNode(v));
        k.textContent = "";
        for (p = 0; v = q[p++];)
            if (m &&
                -1 < f.inArray(v, m)) n && n.push(v);
            else if (g = f.contains(v.ownerDocument, v), d = D(k.appendChild(v), "script"), g && ea(d), c)
            for (e = 0; v = d[e++];) fb.test(v.type || "") && c.push(v);
        return k
    }

    function na() {
        return !0
    }

    function Q() {
        return !1
    }

    function fa() {
        try {
            return A.activeElement
        } catch (a) {}
    }

    function W(a, b, c, m, n, d) {
        var e, g;
        if ("object" == typeof b) {
            "string" != typeof c && (m = m || c, c = void 0);
            for (g in b) W(a, g, c, m, b[g], d);
            return a
        }
        if (null == m && null == n ? (n = c, m = c = void 0) : null == n && ("string" == typeof c ? (n = m, m = void 0) : (n = m, m = c, c = void 0)), !1 ===
            n) n = Q;
        else if (!n) return a;
        return 1 === d && (e = n, (n = function(a) {
            return f().off(a), e.apply(this, arguments)
        }).guid = e.guid || (e.guid = f.guid++)), a.each(function() {
            f.event.add(this, b, n, m, c)
        })
    }

    function Ba(a, b) {
        return e(a, "table") && e(11 !== b.nodeType ? b : b.firstChild, "tr") ? f(a).children("tbody")[0] || a : a
    }

    function R(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function L(a) {
        return "true/" === (a.type || "").slice(0, 5) ? a.type = a.type.slice(5) : a.removeAttribute("type"), a
    }

    function Ca(a, b) {
        var c, m, n, d, e, g;
        if (1 === b.nodeType) {
            if (z.hasData(a) && (c = z.access(a), m = z.set(b, c), g = c.events))
                for (n in delete m.handle, m.events = {}, g)
                    for (c = 0, m = g[n].length; c < m; c++) f.event.add(b, n, g[n][c]);
            K.hasData(a) && (d = K.access(a), e = f.extend({}, d), K.set(b, e))
        }
    }

    function X(a, b, c, m) {
        b = gb.apply([], b);
        var n, d, e, g, k = 0,
            h = a.length,
            q = h - 1,
            l = b[0],
            t = x(l);
        if (t || 1 < h && "string" == typeof l && !E.checkClone && Qb.test(l)) return a.each(function(f) {
            var n = a.eq(f);
            t && (b[0] = l.call(this, f, n.html()));
            X(n, b, c, m)
        });
        if (h && (n = ya(b, a[0].ownerDocument, !1, a, m), d = n.firstChild,
                1 === n.childNodes.length && (n = d), d || m)) {
            for (e = (d = f.map(D(n, "script"), R)).length; k < h; k++) g = n, k !== q && (g = f.clone(g, !0, !0), e && f.merge(d, D(g, "script"))), c.call(a[k], g, k);
            if (e)
                for (n = d[d.length - 1].ownerDocument, f.map(d, L), k = 0; k < e; k++) g = d[k], fb.test(g.type || "") && !z.access(g, "globalEval") && f.contains(n, g) && (g.src && "module" !== (g.type || "").toLowerCase() ? f._evalUrl && f._evalUrl(g.src) : p(g.textContent.replace(Rb, ""), n, g))
        }
        return a
    }

    function ba(a, b, c) {
        for (var m = b ? f.filter(b, a) : a, n = 0; null != (b = m[n]); n++) c || 1 !== b.nodeType ||
            f.cleanData(D(b)), b.parentNode && (c && f.contains(b.ownerDocument, b) && ea(D(b, "script")), b.parentNode.removeChild(b));
        return a
    }

    function M(a, b, c) {
        var m, n, d, e, g = a.style;
        return (c = c || Ja(a)) && ("" !== (e = c.getPropertyValue(b) || c[b]) || f.contains(a.ownerDocument, a) || (e = f.style(a, b)), !E.pixelBoxStyles() && Ra.test(e) && Sb.test(b) && (m = g.width, n = g.minWidth, d = g.maxWidth, g.minWidth = g.maxWidth = g.width = e, e = c.width, g.width = m, g.minWidth = n, g.maxWidth = d)), void 0 !== e ? e + "" : e
    }

    function Y(a, b) {
        return {
            get: function() {
                if (!a()) return (this.get =
                    b).apply(this, arguments);
                delete this.get
            }
        }
    }

    function Ka(a) {
        var b = f.cssProps[a];
        if (!b) {
            var b = f.cssProps,
                c;
            a: if (c = a, !(c in hb)) {
                for (var m = c[0].toUpperCase() + c.slice(1), n = ib.length; n--;)
                    if ((c = ib[n] + m) in hb) break a;
                c = void 0
            } b = b[a] = c || a
        }
        return b
    }

    function jb(a, b, c) {
        return (a = xa.exec(b)) ? Math.max(0, a[2] - (c || 0)) + (a[3] || "px") : b
    }

    function Sa(a, b, c, m, n, d) {
        var e = "width" === b ? 1 : 0,
            g = 0,
            k = 0;
        if (c === (m ? "border" : "content")) return 0;
        for (; 4 > e; e += 2) "margin" === c && (k += f.css(a, c + ka[e], !0, n)), m ? ("content" === c && (k -= f.css(a, "padding" +
            ka[e], !0, n)), "margin" !== c && (k -= f.css(a, "border" + ka[e] + "Width", !0, n))) : (k += f.css(a, "padding" + ka[e], !0, n), "padding" !== c ? k += f.css(a, "border" + ka[e] + "Width", !0, n) : g += f.css(a, "border" + ka[e] + "Width", !0, n));
        return !m && 0 <= d && (k += Math.max(0, Math.ceil(a["offset" + b[0].toUpperCase() + b.slice(1)] - d - k - g - .5))), k
    }

    function kb(a, b, c) {
        var m = Ja(a),
            n = M(a, b, m),
            d = "border-box" === f.css(a, "boxSizing", !1, m),
            e = d;
        if (Ra.test(n)) {
            if (!c) return n;
            n = "auto"
        }
        return e = e && (E.boxSizingReliable() || n === a.style[b]), ("auto" === n || !parseFloat(n) &&
            "inline" === f.css(a, "display", !1, m)) && (n = a["offset" + b[0].toUpperCase() + b.slice(1)], e = !0), (n = parseFloat(n) || 0) + Sa(a, b, c || (d ? "border" : "content"), e, m, n) + "px"
    }

    function T(a, b, c, f, n) {
        return new T.prototype.init(a, b, c, f, n)
    }

    function Ta() {
        La && (!1 === A.hidden && d.requestAnimationFrame ? d.requestAnimationFrame(Ta) : d.setTimeout(Ta, f.fx.interval), f.fx.tick())
    }

    function lb() {
        return d.setTimeout(function() {
            la = void 0
        }), la = Date.now()
    }

    function Ma(a, b) {
        var c, f = 0,
            n = {
                height: a
            };
        for (b = b ? 1 : 0; 4 > f; f += 2 - b) n["margin" + (c = ka[f])] =
            n["padding" + c] = a;
        return b && (n.opacity = n.width = a), n
    }

    function mb(a, b, c) {
        for (var f, n = (ca.tweeners[b] || []).concat(ca.tweeners["*"]), d = 0, e = n.length; d < e; d++)
            if (f = n[d].call(c, b, a)) return f
    }

    function Tb(a, b) {
        var c, m, n, d, e;
        for (c in a)
            if (m = I(c), n = b[m], d = a[c], Array.isArray(d) && (n = d[1], d = a[c] = d[0]), c !== m && (a[m] = d, delete a[c]), (e = f.cssHooks[m]) && "expand" in e)
                for (c in d = e.expand(d), delete a[m], d) c in a || (a[c] = d[c], b[c] = n);
            else b[m] = n
    }

    function ca(a, b, c) {
        var m, n = 0,
            d = ca.prefilters.length,
            e = f.Deferred().always(function() {
                delete g.elem
            }),
            g = function() {
                if (m) return !1;
                for (var b = la || lb(), b = Math.max(0, k.startTime + k.duration - b), c = 1 - (b / k.duration || 0), f = 0, n = k.tweens.length; f < n; f++) k.tweens[f].run(c);
                return e.notifyWith(a, [k, c, b]), 1 > c && n ? b : (n || e.notifyWith(a, [k, 1, 0]), e.resolveWith(a, [k]), !1)
            },
            k = e.promise({
                elem: a,
                props: f.extend({}, b),
                opts: f.extend(!0, {
                    specialEasing: {},
                    easing: f.easing._default
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: la || lb(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    b = f.Tween(a, k.opts, b, c, k.opts.specialEasing[b] ||
                        k.opts.easing);
                    return k.tweens.push(b), b
                },
                stop: function(b) {
                    var c = 0,
                        f = b ? k.tweens.length : 0;
                    if (m) return this;
                    for (m = !0; c < f; c++) k.tweens[c].run(1);
                    return b ? (e.notifyWith(a, [k, 1, 0]), e.resolveWith(a, [k, b])) : e.rejectWith(a, [k, b]), this
                }
            });
        c = k.props;
        for (Tb(c, k.opts.specialEasing); n < d; n++)
            if (b = ca.prefilters[n].call(k, a, c, k.opts)) return x(b.stop) && (f._queueHooks(k.elem, k.opts.queue).stop = b.stop.bind(b)), b;
        return f.map(c, mb, k), x(k.opts.start) && k.opts.start.call(a, k), k.progress(k.opts.progress).done(k.opts.done,
            k.opts.complete).fail(k.opts.fail).always(k.opts.always), f.fx.timer(f.extend(g, {
            elem: a,
            anim: k,
            queue: k.opts.queue
        })), k
    }

    function oa(a) {
        return (a.match(da) || []).join(" ")
    }

    function pa(a) {
        return a.getAttribute && a.getAttribute("class") || ""
    }

    function Ua(a) {
        return Array.isArray(a) ? a : "string" == typeof a ? a.match(da) || [] : []
    }

    function Va(a, b, c, m) {
        var n;
        if (Array.isArray(b)) f.each(b, function(b, f) {
            c || Ub.test(a) ? m(a, f) : Va(a + "[" + ("object" == typeof f && null != f ? b : "") + "]", f, c, m)
        });
        else if (c || "object" !== h(b)) m(a, b);
        else
            for (n in b) Va(a +
                "[" + n + "]", b[n], c, m)
    }

    function nb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var f = 0,
                n = b.toLowerCase().match(da) || [];
            if (x(c))
                for (; b = n[f++];) "+" === b[0] ? (b = b.slice(1) || "*", (a[b] = a[b] || []).unshift(c)) : (a[b] = a[b] || []).push(c)
        }
    }

    function ob(a, b, c, m) {
        function n(g) {
            var k;
            return d[g] = !0, f.each(a[g] || [], function(a, f) {
                a = f(b, c, m);
                return "string" != typeof a || e || d[a] ? e ? !(k = a) : void 0 : (b.dataTypes.unshift(a), n(a), !1)
            }), k
        }
        var d = {},
            e = a === Wa;
        return n(b.dataTypes[0]) || !d["*"] && n("*")
    }

    function Xa(a, b) {
        var c,
            m, n = f.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((n[c] ? a : m || (m = {}))[c] = b[c]);
        return m && f.extend(!0, a, m), a
    }
    var qa = [],
        A = d.document,
        Vb = Object.getPrototypeOf,
        ga = qa.slice,
        gb = qa.concat,
        Ya = qa.push,
        Ga = qa.indexOf,
        Fa = {},
        cb = Fa.toString,
        Na = Fa.hasOwnProperty,
        pb = Na.toString,
        Wb = pb.call(Object),
        E = {},
        x = function(a) {
            return "function" == typeof a && "number" != typeof a.nodeType
        },
        wa = function(a) {
            return null != a && a === a.window
        },
        Ib = {
            type: !0,
            src: !0,
            noModule: !0
        },
        f = function(a, b) {
            return new f.fn.init(a, b)
        },
        Xb = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    f.fn = f.prototype = {
        jquery: "3.3.1",
        constructor: f,
        length: 0,
        toArray: function() {
            return ga.call(this)
        },
        get: function(a) {
            return null == a ? ga.call(this) : 0 > a ? this[a + this.length] : this[a]
        },
        pushStack: function(a) {
            a = f.merge(this.constructor(), a);
            return a.prevObject = this, a
        },
        each: function(a) {
            return f.each(this, a)
        },
        map: function(a) {
            return this.pushStack(f.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(ga.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length;
            a = +a + (0 > a ? b : 0);
            return this.pushStack(0 <= a && a < b ? [this[a]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: Ya,
        sort: qa.sort,
        splice: qa.splice
    };
    f.extend = f.fn.extend = function() {
        var a, b, c, m, n, d, e = arguments[0] || {},
            g = 1,
            k = arguments.length,
            h = !1;
        "boolean" == typeof e && (h = e, e = arguments[g] || {}, g++);
        "object" == typeof e || x(e) || (e = {});
        for (g === k && (e = this, g--); g < k; g++)
            if (null != (a = arguments[g]))
                for (b in a) c = e[b], e !== (m = a[b]) && (h && m && (f.isPlainObject(m) || (n = Array.isArray(m))) ?
                    (n ? (n = !1, d = c && Array.isArray(c) ? c : []) : d = c && f.isPlainObject(c) ? c : {}, e[b] = f.extend(h, d, m)) : void 0 !== m && (e[b] = m));
        return e
    };
    f.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw Error(a);
        },
        noop: function() {},
        isPlainObject: function(a) {
            var b, c;
            return !(!a || "[object Object]" !== cb.call(a)) && (!(b = Vb(a)) || "function" == typeof(c = Na.call(b, "constructor") && b.constructor) && pb.call(c) === Wb)
        },
        isEmptyObject: function(a) {
            for (var b in a) return !1;
            return !0
        },
        globalEval: function(a) {
            p(a)
        },
        each: function(a, b) {
            var c, f = 0;
            if (g(a))
                for (c = a.length; f < c && !1 !== b.call(a[f], f, a[f]); f++);
            else
                for (f in a)
                    if (!1 === b.call(a[f], f, a[f])) break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(Xb, "")
        },
        makeArray: function(a, b) {
            b = b || [];
            return null != a && (g(Object(a)) ? f.merge(b, "string" == typeof a ? [a] : a) : Ya.call(b, a)), b
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : Ga.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, f = 0, n = a.length; f < c; f++) a[n++] = b[f];
            return a.length = n, a
        },
        grep: function(a, b, c) {
            var f = [],
                n = 0,
                e = a.length;
            for (c = !c; n < e; n++) !b(a[n], n) !== c && f.push(a[n]);
            return f
        },
        map: function(a, b, c) {
            var f, n, e = 0,
                d = [];
            if (g(a))
                for (f = a.length; e < f; e++) null != (n = b(a[e], e, c)) && d.push(n);
            else
                for (e in a) null != (n = b(a[e], e, c)) && d.push(n);
            return gb.apply([], d)
        },
        guid: 1,
        support: E
    });
    "function" == typeof Symbol && (f.fn[Symbol.iterator] = qa[Symbol.iterator]);
    f.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        Fa["[object " + b + "]"] = b.toLowerCase()
    });
    var ua = function(a) {
        function b(a,
            b, c, f) {
            var m, n, e, d, g, k = b && b.ownerDocument,
                v = b ? b.nodeType : 9;
            if (c = c || [], "string" != typeof a || !a || 1 !== v && 9 !== v && 11 !== v) return c;
            if (!f && ((b ? b.ownerDocument || b : ha) !== B && za(b), b = b || B, ia)) {
                if (11 !== v && (d = Ka.exec(a)))
                    if (m = d[1])
                        if (9 === v) {
                            if (!(n = b.getElementById(m))) return c;
                            if (n.id === m) return c.push(n), c
                        } else {
                            if (k && (n = k.getElementById(m)) && K(b, n) && n.id === m) return c.push(n), c
                        }
                else {
                    if (d[2]) return N.apply(c, b.getElementsByTagName(a)), c;
                    if ((m = d[3]) && y.getElementsByClassName && b.getElementsByClassName) return N.apply(c,
                        b.getElementsByClassName(m)), c
                }
                if (!(!y.qsa || X[a + " "] || H && H.test(a))) {
                    if (1 !== v) k = b, g = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (e = b.getAttribute("id")) ? e = e.replace(va, xa): b.setAttribute("id", e = F);
                        for (m = (n = R(a)).length; m--;) n[m] = "#" + e + " " + w(n[m]);
                        g = n.join(",");
                        k = la.test(a) && p(b.parentNode) || b
                    }
                    if (g) try {
                        return N.apply(c, k.querySelectorAll(g)), c
                    } catch (h) {} finally {
                        e === F && b.removeAttribute("id")
                    }
                }
            }
            return O(a.replace(Z, "$1"), b, c, f)
        }

        function c() {
            function a(c, f) {
                return b.push(c + " ") > G.cacheLength && delete a[b.shift()],
                    a[c + " "] = f
            }
            var b = [];
            return a
        }

        function f(a) {
            return a[F] = !0, a
        }

        function n(a) {
            var b = B.createElement("fieldset");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b)
            }
        }

        function e(a, b) {
            a = a.split("|");
            for (var c = a.length; c--;) G.attrHandle[a[c]] = b
        }

        function d(a, b) {
            var c = b && a,
                f = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
            if (f) return f;
            if (c)
                for (; c = c.nextSibling;)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function g(a) {
            return function(b) {
                return "input" === b.nodeName.toLowerCase() &&
                    b.type === a
            }
        }

        function k(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function h(a) {
            return function(b) {
                return "form" in b ? b.parentNode && !1 === b.disabled ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && Aa(b) === a : b.disabled === a : "label" in b && b.disabled === a
            }
        }

        function q(a) {
            return f(function(b) {
                return b = +b, f(function(c, f) {
                    for (var m, n = a([], c.length, b), e = n.length; e--;) c[m = n[e]] && (c[m] = !(f[m] =
                        c[m]))
                })
            })
        }

        function p(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }

        function l() {}

        function w(a) {
            for (var b = 0, c = a.length, f = ""; b < c; b++) f += a[b].value;
            return f
        }

        function r(a, b, c) {
            var f = b.dir,
                m = b.next,
                n = m || f,
                e = c && "parentNode" === n,
                d = T++;
            return b.first ? function(b, c, m) {
                for (; b = b[f];)
                    if (1 === b.nodeType || e) return a(b, c, m);
                return !1
            } : function(b, c, g) {
                var k, v, h, C = [ra, d];
                if (g)
                    for (; b = b[f];) {
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                    } else
                        for (; b = b[f];)
                            if (1 === b.nodeType || e)
                                if (h = b[F] || (b[F] = {}), v = h[b.uniqueID] ||
                                    (h[b.uniqueID] = {}), m && m === b.nodeName.toLowerCase()) b = b[f] || b;
                                else {
                                    if ((k = v[n]) && k[0] === ra && k[1] === d) return C[2] = k[2];
                                    if (v[n] = C, C[2] = a(b, c, g)) return !0
                                } return !1
            }
        }

        function u(a) {
            return 1 < a.length ? function(b, c, f) {
                for (var m = a.length; m--;)
                    if (!a[m](b, c, f)) return !1;
                return !0
            } : a[0]
        }

        function z(a, b, c, f, m) {
            for (var n, e = [], d = 0, g = a.length, k = null != b; d < g; d++)(n = a[d]) && (c && !c(n, f, m) || (e.push(n), k && b.push(d)));
            return e
        }

        function W(a, c, n, e, d, g) {
            return e && !e[F] && (e = W(e)), d && !d[F] && (d = W(d, g)), f(function(f, m, g, k) {
                var v, h, C = [],
                    q = [],
                    U = m.length,
                    p;
                if (!(p = f)) {
                    p = c || "*";
                    for (var l = g.nodeType ? [g] : g, P = [], t = 0, w = l.length; t < w; t++) b(p, l[t], P);
                    p = P
                }
                p = !a || !f && c ? p : z(p, C, a, g, k);
                l = n ? d || (f ? a : U || e) ? [] : m : p;
                if (n && n(p, l, g, k), e)
                    for (v = z(l, q), e(v, [], g, k), g = v.length; g--;)(h = v[g]) && (l[q[g]] = !(p[q[g]] = h));
                if (f) {
                    if (d || a) {
                        if (d) {
                            v = [];
                            for (g = l.length; g--;)(h = l[g]) && v.push(p[g] = h);
                            d(null, l = [], v, k)
                        }
                        for (g = l.length; g--;)(h = l[g]) && -1 < (v = d ? Y(f, h) : C[g]) && (f[v] = !(m[v] = h))
                    }
                } else l = z(l === m ? l.splice(U, l.length) : l), d ? d(null, m, l, k) : N.apply(m, l)
            })
        }

        function x(a) {
            var b,
                c, f, m = a.length,
                n = G.relative[a[0].type];
            c = n || G.relative[" "];
            for (var e = n ? 1 : 0, d = r(function(a) {
                    return a === b
                }, c, !0), g = r(function(a) {
                    return -1 < Y(b, a)
                }, c, !0), k = [function(a, c, f) {
                    a = !n && (f || c !== Oa) || ((b = c).nodeType ? d(a, c, f) : g(a, c, f));
                    return b = null, a
                }]; e < m; e++)
                if (c = G.relative[a[e].type]) k = [r(u(k), c)];
                else {
                    if ((c = G.filter[a[e].type].apply(null, a[e].matches))[F]) {
                        for (f = ++e; f < m && !G.relative[a[f].type]; f++);
                        return W(1 < e && u(k), 1 < e && w(a.slice(0, e - 1).concat({
                                value: " " === a[e - 2].type ? "*" : ""
                            })).replace(Z, "$1"), c, e < f &&
                            x(a.slice(e, f)), f < m && x(a = a.slice(f)), f < m && w(a))
                    }
                    k.push(c)
                } return u(k)
        }

        function fa(a, c) {
            var n = 0 < c.length,
                e = 0 < a.length,
                d = function(f, m, d, g, k) {
                    var v, h, C, q = 0,
                        l = "0",
                        p = f && [],
                        U = [],
                        P = Oa,
                        t = f || e && G.find.TAG("*", k),
                        w = ra += null == P ? 1 : Math.random() || .1,
                        Nb = t.length;
                    for (k && (Oa = m === B || m || k); l !== Nb && null != (v = t[l]); l++) {
                        if (e && v) {
                            h = 0;
                            for (m || v.ownerDocument === B || (za(v), d = !ia); C = a[h++];)
                                if (C(v, m || B, d)) {
                                    g.push(v);
                                    break
                                } k && (ra = w)
                        }
                        n && ((v = !C && v) && q--, f && p.push(v))
                    }
                    if (q += l, n && l !== q) {
                        for (h = 0; C = c[h++];) C(p, U, m, d);
                        if (f) {
                            if (0 < q)
                                for (; l--;) p[l] ||
                                    U[l] || (U[l] = ca.call(g));
                            U = z(U)
                        }
                        N.apply(g, U);
                        k && !f && 0 < U.length && 1 < q + c.length && b.uniqueSort(g)
                    }
                    return k && (ra = w, Oa = P), p
                };
            return n ? f(d) : d
        }
        var Q, y, G, A, E, R, L, O, Oa, D, M, za, B, ja, ia, H, J, I, K, F = "sizzle" + 1 * new Date,
            ha = a.document,
            ra = 0,
            T = 0,
            Ba = c(),
            Ca = c(),
            X = c(),
            S = function(a, b) {
                return a === b && (M = !0), 0
            },
            V = {}.hasOwnProperty,
            ba = [],
            ca = ba.pop,
            da = ba.push,
            N = ba.push,
            aa = ba.slice,
            Y = function(a, b) {
                for (var c = 0, f = a.length; c < f; c++)
                    if (a[c] === b) return c;
                return -1
            },
            ka = /[\x20\t\r\n\f]+/g,
            Z = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
            ma = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
            na = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
            oa = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g,
            pa = /:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
            qa = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/,
            ga = {
                ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                TAG: /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/,
                ATTR: /^\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\]/,
                PSEUDO: /^:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
                CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
                bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
                needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i
            },
            ua = /^(?:input|select|textarea|button)$/i,
            wa = /^h\d$/i,
            ea =
            /^[^{]+\{\s*\[native \w/,
            Ka = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            la = /[+~]/,
            sa = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig,
            ta = function(a, b, c) {
                a = "0x" + b - 65536;
                return a !== a || c ? b : 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, 1023 & a | 56320)
            },
            va = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            xa = function(a, b) {
                return b ? "\x00" === a ? "\ufffd" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a
            },
            ya = function() {
                za()
            },
            Aa = r(function(a) {
                return !0 === a.disabled && ("form" in
                    a || "label" in a)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            N.apply(ba = aa.call(ha.childNodes), ha.childNodes), ba[ha.childNodes.length].nodeType
        } catch (xc) {
            N = {
                apply: ba.length ? function(a, b) {
                    da.apply(a, aa.call(b))
                } : function(a, b) {
                    for (var c = a.length, f = 0; a[c++] = b[f++];);
                    a.length = c - 1
                }
            }
        }
        y = b.support = {};
        E = b.isXML = function(a) {
            a = a && (a.ownerDocument || a).documentElement;
            return !!a && "HTML" !== a.nodeName
        };
        za = b.setDocument = function(a) {
            var b, c;
            a = a ? a.ownerDocument || a : ha;
            return a !== B && 9 === a.nodeType && a.documentElement ? (B = a, ja =
                B.documentElement, ia = !E(B), ha !== B && (c = B.defaultView) && c.top !== c && (c.addEventListener ? c.addEventListener("unload", ya, !1) : c.attachEvent && c.attachEvent("onunload", ya)), y.attributes = n(function(a) {
                    return a.className = "i", !a.getAttribute("className")
                }), y.getElementsByTagName = n(function(a) {
                    return a.appendChild(B.createComment("")), !a.getElementsByTagName("*").length
                }), y.getElementsByClassName = ea.test(B.getElementsByClassName), y.getById = n(function(a) {
                    return ja.appendChild(a).id = F, !B.getElementsByName || !B.getElementsByName(F).length
                }),
                y.getById ? (G.filter.ID = function(a) {
                    var b = a.replace(sa, ta);
                    return function(a) {
                        return a.getAttribute("id") === b
                    }
                }, G.find.ID = function(a, b) {
                    if ("undefined" != typeof b.getElementById && ia) return (a = b.getElementById(a)) ? [a] : []
                }) : (G.filter.ID = function(a) {
                    var b = a.replace(sa, ta);
                    return function(a) {
                        return (a = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id")) && a.value === b
                    }
                }, G.find.ID = function(a, b) {
                    if ("undefined" != typeof b.getElementById && ia) {
                        var c, f, m = b.getElementById(a);
                        if (m) {
                            if ((c = m.getAttributeNode("id")) &&
                                c.value === a) return [m];
                            f = b.getElementsByName(a);
                            for (b = 0; m = f[b++];)
                                if ((c = m.getAttributeNode("id")) && c.value === a) return [m]
                        }
                        return []
                    }
                }), G.find.TAG = y.getElementsByTagName ? function(a, b) {
                    return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : y.qsa ? b.querySelectorAll(a) : void 0
                } : function(a, b) {
                    var c = [],
                        f = 0;
                    b = b.getElementsByTagName(a);
                    if ("*" === a) {
                        for (; a = b[f++];) 1 === a.nodeType && c.push(a);
                        return c
                    }
                    return b
                }, G.find.CLASS = y.getElementsByClassName && function(a, b) {
                    if ("undefined" != typeof b.getElementsByClassName &&
                        ia) return b.getElementsByClassName(a)
                }, J = [], H = [], (y.qsa = ea.test(B.querySelectorAll)) && (n(function(a) {
                    ja.appendChild(a).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\r\\' msallowcapture=''><option selected=''></option></select>";
                    a.querySelectorAll("[msallowcapture^='']").length && H.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                    a.querySelectorAll("[selected]").length || H.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                    a.querySelectorAll("[id~=" + F + "-]").length || H.push("~=");
                    a.querySelectorAll(":checked").length || H.push(":checked");
                    a.querySelectorAll("a#" + F + "+*").length || H.push(".#.+[+~]")
                }), n(function(a) {
                    a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var b = B.createElement("input");
                    b.setAttribute("type", "hidden");
                    a.appendChild(b).setAttribute("name", "D");
                    a.querySelectorAll("[name=d]").length && H.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
                    2 !== a.querySelectorAll(":enabled").length &&
                        H.push(":enabled", ":disabled");
                    ja.appendChild(a).disabled = !0;
                    2 !== a.querySelectorAll(":disabled").length && H.push(":enabled", ":disabled");
                    a.querySelectorAll("*,:x");
                    H.push(",.*:")
                })), (y.matchesSelector = ea.test(I = ja.matches || ja.webkitMatchesSelector || ja.mozMatchesSelector || ja.oMatchesSelector || ja.msMatchesSelector)) && n(function(a) {
                    y.disconnectedMatch = I.call(a, "*");
                    I.call(a, "[s!='']:x");
                    J.push("!=", ":((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)")
                }),
                H = H.length && new RegExp(H.join("|")), J = J.length && new RegExp(J.join("|")), b = ea.test(ja.compareDocumentPosition), K = b || ea.test(ja.contains) ? function(a, b) {
                    var c = 9 === a.nodeType ? a.documentElement : a;
                    b = b && b.parentNode;
                    return a === b || !(!b || 1 !== b.nodeType || !(c.contains ? c.contains(b) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(b)))
                } : function(a, b) {
                    if (b)
                        for (; b = b.parentNode;)
                            if (b === a) return !0;
                    return !1
                }, S = b ? function(a, b) {
                    if (a === b) return M = !0, 0;
                    var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return c || (1 & (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1) || !y.sortDetached && b.compareDocumentPosition(a) === c ? a === B || a.ownerDocument === ha && K(ha, a) ? -1 : b === B || b.ownerDocument === ha && K(ha, b) ? 1 : D ? Y(D, a) - Y(D, b) : 0 : 4 & c ? -1 : 1)
                } : function(a, b) {
                    if (a === b) return M = !0, 0;
                    var c = 0,
                        f = a.parentNode,
                        m = b.parentNode,
                        n = [a],
                        e = [b];
                    if (!f || !m) return a === B ? -1 : b === B ? 1 : f ? -1 : m ? 1 : D ? Y(D, a) - Y(D, b) : 0;
                    if (f === m) return d(a, b);
                    for (; a = a.parentNode;) n.unshift(a);
                    for (a = b; a = a.parentNode;) e.unshift(a);
                    for (; n[c] ===
                        e[c];) c++;
                    return c ? d(n[c], e[c]) : n[c] === ha ? -1 : e[c] === ha ? 1 : 0
                }, B) : B
        };
        b.matches = function(a, c) {
            return b(a, null, null, c)
        };
        b.matchesSelector = function(a, c) {
            if ((a.ownerDocument || a) !== B && za(a), c = c.replace(oa, "='$1']"), !(!y.matchesSelector || !ia || X[c + " "] || J && J.test(c) || H && H.test(c))) try {
                var f = I.call(a, c);
                if (f || y.disconnectedMatch || a.document && 11 !== a.document.nodeType) return f
            } catch (m) {}
            return 0 < b(c, B, null, [a]).length
        };
        b.contains = function(a, b) {
            return (a.ownerDocument || a) !== B && za(a), K(a, b)
        };
        b.attr = function(a, b) {
            (a.ownerDocument ||
                a) !== B && za(a);
            var c = G.attrHandle[b.toLowerCase()],
                c = c && V.call(G.attrHandle, b.toLowerCase()) ? c(a, b, !ia) : void 0;
            return void 0 !== c ? c : y.attributes || !ia ? a.getAttribute(b) : (c = a.getAttributeNode(b)) && c.specified ? c.value : null
        };
        b.escape = function(a) {
            return (a + "").replace(va, xa)
        };
        b.error = function(a) {
            throw Error("Syntax error, unrecognized expression: " + a);
        };
        b.uniqueSort = function(a) {
            var b, c = [],
                f = 0,
                m = 0;
            if (M = !y.detectDuplicates, D = !y.sortStable && a.slice(0), a.sort(S), M) {
                for (; b = a[m++];) b === a[m] && (f = c.push(m));
                for (; f--;) a.splice(c[f],
                    1)
            }
            return D = null, a
        };
        A = b.getText = function(a) {
            var b, c = "",
                f = 0;
            if (b = a.nodeType)
                if (1 === b || 9 === b || 11 === b) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += A(a)
                } else {
                    if (3 === b || 4 === b) return a.nodeValue
                }
            else
                for (; b = a[f++];) c += A(b);
            return c
        };
        (G = b.selectors = {
            cacheLength: 50,
            createPseudo: f,
            match: ga,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] =
                        a[1].replace(sa, ta), a[3] = (a[3] || a[4] || a[5] || "").replace(sa, ta), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return ga.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && pa.test(c) && (b = R(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0,
                        b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(sa, ta).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = Ba[a + " "];
                    return b || (b = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)"), Ba(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    }))
                },
                ATTR: function(a, c, f) {
                    return function(m) {
                        m = b.attr(m,
                            a);
                        return null == m ? "!=" === c : !c || (m += "", "=" === c ? m === f : "!=" === c ? m !== f : "^=" === c ? f && 0 === m.indexOf(f) : "*=" === c ? f && -1 < m.indexOf(f) : "$=" === c ? f && m.slice(-f.length) === f : "~=" === c ? -1 < (" " + m.replace(ka, " ") + " ").indexOf(f) : "|=" === c && (m === f || m.slice(0, f.length + 1) === f + "-"))
                    }
                },
                CHILD: function(a, b, c, f, m) {
                    var n = "nth" !== a.slice(0, 3),
                        e = "last" !== a.slice(-4),
                        d = "of-type" === b;
                    return 1 === f && 0 === m ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, g) {
                        var k, v, h, C, q;
                        c = n !== e ? "nextSibling" : "previousSibling";
                        var l = b.parentNode,
                            p = d &&
                            b.nodeName.toLowerCase(),
                            U = !g && !d,
                            P = !1;
                        if (l) {
                            if (n) {
                                for (; c;) {
                                    for (h = b; h = h[c];)
                                        if (d ? h.nodeName.toLowerCase() === p : 1 === h.nodeType) return !1;
                                    q = c = "only" === a && !q && "nextSibling"
                                }
                                return !0
                            }
                            if (q = [e ? l.firstChild : l.lastChild], e && U)
                                for (P = (C = (k = (g = (v = (h = l)[F] || (h[F] = {}))[h.uniqueID] || (v[h.uniqueID] = {}))[a] || [])[0] === ra && k[1]) && k[2], h = C && l.childNodes[C]; h = ++C && h && h[c] || (P = C = 0) || q.pop();) {
                                    if (1 === h.nodeType && ++P && h === b) {
                                        g[a] = [ra, C, P];
                                        break
                                    }
                                } else if (U && (P = C = (k = ((v = (h = b)[F] || (h[F] = {}))[h.uniqueID] || (v[h.uniqueID] = {}))[a] || [])[0] === ra && k[1]), !1 === P)
                                    for (;
                                        (h = ++C && h && h[c] || (P = C = 0) || q.pop()) && ((d ? h.nodeName.toLowerCase() !== p : 1 !== h.nodeType) || !++P || (U && ((g = (v = h[F] || (h[F] = {}))[h.uniqueID] || (v[h.uniqueID] = {}))[a] = [ra, P]), h !== b)););
                            return (P -= m) === f || 0 == P % f && 0 <= P / f
                        }
                    }
                },
                PSEUDO: function(a, c) {
                    var n, e = G.pseudos[a] || G.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return e[F] ? e(c) : 1 < e.length ? (n = [a, a, "", c], G.setFilters.hasOwnProperty(a.toLowerCase()) ? f(function(a, b) {
                        for (var f, m = e(a, c), n = m.length; n--;) a[f = Y(a, m[n])] = !(b[f] = m[n])
                    }) : function(a) {
                        return e(a, 0, n)
                    }) : e
                }
            },
            pseudos: {
                not: f(function(a) {
                    var b = [],
                        c = [],
                        n = L(a.replace(Z, "$1"));
                    return n[F] ? f(function(a, b, c, f) {
                        var m;
                        c = n(a, null, f, []);
                        for (f = a.length; f--;)(m = c[f]) && (a[f] = !(b[f] = m))
                    }) : function(a, f, m) {
                        return b[0] = a, n(b, null, m, c), b[0] = null, !c.pop()
                    }
                }),
                has: f(function(a) {
                    return function(c) {
                        return 0 < b(a, c).length
                    }
                }),
                contains: f(function(a) {
                    return a = a.replace(sa, ta),
                        function(b) {
                            return -1 < (b.textContent || b.innerText || A(b)).indexOf(a)
                        }
                }),
                lang: f(function(a) {
                    return qa.test(a ||
                            "") || b.error("unsupported lang: " + a), a = a.replace(sa, ta).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = ia ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return (c = c.toLowerCase()) === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === ja
                },
                focus: function(a) {
                    return a === B.activeElement && (!B.hasFocus || B.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: h(!1),
                disabled: h(!0),
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, !0 === a.selected
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (6 > a.nodeType) return !1;
                    return !0
                },
                parent: function(a) {
                    return !G.pseudos.empty(a)
                },
                header: function(a) {
                    return wa.test(a.nodeName)
                },
                input: function(a) {
                    return ua.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" ===
                        a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: q(function() {
                    return [0]
                }),
                last: q(function(a, b) {
                    return [b - 1]
                }),
                eq: q(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: q(function(a, b) {
                    for (var c = 0; c < b; c += 2) a.push(c);
                    return a
                }),
                odd: q(function(a, b) {
                    for (var c = 1; c < b; c += 2) a.push(c);
                    return a
                }),
                lt: q(function(a, b, c) {
                    for (b = 0 > c ? c + b : c; 0 <= --b;) a.push(b);
                    return a
                }),
                gt: q(function(a, b, c) {
                    for (c = 0 > c ? c + b : c; ++c <
                        b;) a.push(c);
                    return a
                })
            }
        }).pseudos.nth = G.pseudos.eq;
        for (Q in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) G.pseudos[Q] = g(Q);
        for (Q in {
                submit: !0,
                reset: !0
            }) G.pseudos[Q] = k(Q);
        l.prototype = G.filters = G.pseudos;
        G.setFilters = new l;
        R = b.tokenize = function(a, c) {
            var f, m, n, e, d, g, k;
            if (d = Ca[a + " "]) return c ? 0 : d.slice(0);
            d = a;
            g = [];
            for (k = G.preFilter; d;) {
                f && !(m = ma.exec(d)) || (m && (d = d.slice(m[0].length) || d), g.push(n = []));
                f = !1;
                (m = na.exec(d)) && (f = m.shift(), n.push({
                    value: f,
                    type: m[0].replace(Z, " ")
                }), d = d.slice(f.length));
                for (e in G.filter) !(m = ga[e].exec(d)) || k[e] && !(m = k[e](m)) || (f = m.shift(), n.push({
                    value: f,
                    type: e,
                    matches: m
                }), d = d.slice(f.length));
                if (!f) break
            }
            return c ? d.length : d ? b.error(a) : Ca(a, g).slice(0)
        };
        return L = b.compile = function(a, b) {
                var c, f = [],
                    m = [],
                    n = X[a + " "];
                if (!n) {
                    b || (b = R(a));
                    for (c = b.length; c--;)(n = x(b[c]))[F] ? f.push(n) : m.push(n);
                    (n = X(a, fa(m, f))).selector = a
                }
                return n
            }, O = b.select = function(a, b, c, f) {
                var m, n, e, d, g, k = "function" == typeof a && a,
                    v = !f && R(a = k.selector || a);
                if (c = c || [], 1 === v.length) {
                    if (2 < (n = v[0] = v[0].slice(0)).length &&
                        "ID" === (e = n[0]).type && 9 === b.nodeType && ia && G.relative[n[1].type]) {
                        if (!(b = (G.find.ID(e.matches[0].replace(sa, ta), b) || [])[0])) return c;
                        k && (b = b.parentNode);
                        a = a.slice(n.shift().value.length)
                    }
                    for (m = ga.needsContext.test(a) ? 0 : n.length; m-- && (e = n[m], !G.relative[d = e.type]);)
                        if ((g = G.find[d]) && (f = g(e.matches[0].replace(sa, ta), la.test(n[0].type) && p(b.parentNode) || b))) {
                            if (n.splice(m, 1), !(a = f.length && w(n))) return N.apply(c, f), c;
                            break
                        }
                }
                return (k || L(a, v))(f, b, !ia, c, !b || la.test(a) && p(b.parentNode) || b), c
            }, y.sortStable =
            F.split("").sort(S).join("") === F, y.detectDuplicates = !!M, za(), y.sortDetached = n(function(a) {
                return 1 & a.compareDocumentPosition(B.createElement("fieldset"))
            }), n(function(a) {
                return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
            }) || e("type|href|height|width", function(a, b, c) {
                if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
            }), y.attributes && n(function(a) {
                return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
            }) || e("value",
                function(a, b, c) {
                    if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue
                }), n(function(a) {
                return null == a.getAttribute("disabled")
            }) || e("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function(a, b, c) {
                var f;
                if (!c) return !0 === a[b] ? b.toLowerCase() : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
            }), b
    }(d);
    f.find = ua;
    f.expr = ua.selectors;
    f.expr[":"] = f.expr.pseudos;
    f.uniqueSort = f.unique = ua.uniqueSort;
    f.text = ua.getText;
    f.isXMLDoc =
        ua.isXML;
    f.contains = ua.contains;
    f.escapeSelector = ua.escape;
    var va = function(a, b, c) {
            for (var m = [], n = void 0 !== c;
                (a = a[b]) && 9 !== a.nodeType;)
                if (1 === a.nodeType) {
                    if (n && f(a).is(c)) break;
                    m.push(a)
                } return m
        },
        qb = function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        },
        rb = f.expr.match.needsContext,
        sb = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    f.filter = function(a, b, c) {
        var m = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === m.nodeType ? f.find.matchesSelector(m,
            a) ? [m] : [] : f.find.matches(a, f.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    };
    f.fn.extend({
        find: function(a) {
            var b, c, m = this.length,
                n = this;
            if ("string" != typeof a) return this.pushStack(f(a).filter(function() {
                for (b = 0; b < m; b++)
                    if (f.contains(n[b], this)) return !0
            }));
            c = this.pushStack([]);
            for (b = 0; b < m; b++) f.find(a, n[b], c);
            return 1 < m ? f.uniqueSort(c) : c
        },
        filter: function(a) {
            return this.pushStack(k(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(k(this, a || [], !0))
        },
        is: function(a) {
            return !!k(this, "string" == typeof a &&
                rb.test(a) ? f(a) : a || [], !1).length
        }
    });
    var tb, Yb = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (f.fn.init = function(a, b, c) {
        var m, n;
        if (!a) return this;
        if (c = c || tb, "string" == typeof a) {
            if (!(m = "<" === a[0] && ">" === a[a.length - 1] && 3 <= a.length ? [null, a, null] : Yb.exec(a)) || !m[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
            if (m[1]) {
                if (b = b instanceof f ? b[0] : b, f.merge(this, f.parseHTML(m[1], b && b.nodeType ? b.ownerDocument || b : A, !0)), sb.test(m[1]) && f.isPlainObject(b))
                    for (m in b) x(this[m]) ? this[m](b[m]) : this.attr(m,
                        b[m]);
                return this
            }
            return (n = A.getElementById(m[2])) && (this[0] = n, this.length = 1), this
        }
        return a.nodeType ? (this[0] = a, this.length = 1, this) : x(a) ? void 0 !== c.ready ? c.ready(a) : a(f) : f.makeArray(a, this)
    }).prototype = f.fn;
    tb = f(A);
    var Zb = /^(?:parents|prev(?:Until|All))/,
        $b = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    f.fn.extend({
        has: function(a) {
            var b = f(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; a < c; a++)
                    if (f.contains(this, b[a])) return !0
            })
        },
        closest: function(a, b) {
            var c, m = 0,
                n = this.length,
                e = [],
                d = "string" !=
                typeof a && f(a);
            if (!rb.test(a))
                for (; m < n; m++)
                    for (c = this[m]; c && c !== b; c = c.parentNode)
                        if (11 > c.nodeType && (d ? -1 < d.index(c) : 1 === c.nodeType && f.find.matchesSelector(c, a))) {
                            e.push(c);
                            break
                        } return this.pushStack(1 < e.length ? f.uniqueSort(e) : e)
        },
        index: function(a) {
            return a ? "string" == typeof a ? Ga.call(f(a), this[0]) : Ga.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(f.uniqueSort(f.merge(this.get(), f(a, b))))
        },
        addBack: function(a) {
            return this.add(null ==
                a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    f.each({
        parent: function(a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a : null
        },
        parents: function(a) {
            return va(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return va(a, "parentNode", c)
        },
        next: function(a) {
            return q(a, "nextSibling")
        },
        prev: function(a) {
            return q(a, "previousSibling")
        },
        nextAll: function(a) {
            return va(a, "nextSibling")
        },
        prevAll: function(a) {
            return va(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return va(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return va(a,
                "previousSibling", c)
        },
        siblings: function(a) {
            return qb((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return qb(a.firstChild)
        },
        contents: function(a) {
            return e(a, "iframe") ? a.contentDocument : (e(a, "template") && (a = a.content || a), f.merge([], a.childNodes))
        }
    }, function(a, b) {
        f.fn[a] = function(c, m) {
            var n = f.map(this, b, c);
            return "Until" !== a.slice(-5) && (m = c), m && "string" == typeof m && (n = f.filter(m, n)), 1 < this.length && ($b[a] || f.uniqueSort(n), Zb.test(a) && n.reverse()), this.pushStack(n)
        }
    });
    var da = /[^\x20\t\r\n\f]+/g;
    f.Callbacks = function(a) {
        a = "string" == typeof a ? w(a) : f.extend({}, a);
        var b, c, m, n, e = [],
            d = [],
            g = -1,
            k = function() {
                n = n || a.once;
                for (m = b = !0; d.length; g = -1)
                    for (c = d.shift(); ++g < e.length;) !1 === e[g].apply(c[0], c[1]) && a.stopOnFalse && (g = e.length, c = !1);
                a.memory || (c = !1);
                b = !1;
                n && (e = c ? [] : "")
            },
            q = {
                add: function() {
                    return e && (c && !b && (g = e.length - 1, d.push(c)), function Ob(b) {
                        f.each(b, function(b, c) {
                            x(c) ? a.unique && q.has(c) || e.push(c) : c && c.length && "string" !== h(c) && Ob(c)
                        })
                    }(arguments), c && !b && k()), this
                },
                remove: function() {
                    return f.each(arguments,
                        function(a, b) {
                            for (var c; - 1 < (c = f.inArray(b, e, c));) e.splice(c, 1), c <= g && g--
                        }), this
                },
                has: function(a) {
                    return a ? -1 < f.inArray(a, e) : 0 < e.length
                },
                empty: function() {
                    return e && (e = []), this
                },
                disable: function() {
                    return n = d = [], e = c = "", this
                },
                disabled: function() {
                    return !e
                },
                lock: function() {
                    return n = d = [], c || b || (e = c = ""), this
                },
                locked: function() {
                    return !!n
                },
                fireWith: function(a, c) {
                    return n || (c = [a, (c = c || []).slice ? c.slice() : c], d.push(c), b || k()), this
                },
                fire: function() {
                    return q.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!m
                }
            };
        return q
    };
    f.extend({
        Deferred: function(a) {
            var b = [
                    ["notify", "progress", f.Callbacks("memory"), f.Callbacks("memory"), 2],
                    ["resolve", "done", f.Callbacks("once memory"), f.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", f.Callbacks("once memory"), f.Callbacks("once memory"), 1, "rejected"]
                ],
                c = "pending",
                m = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return n.done(arguments).fail(arguments), this
                    },
                    "catch": function(a) {
                        return m.then(null, a)
                    },
                    pipe: function() {
                        var a = arguments;
                        return f.Deferred(function(c) {
                            f.each(b,
                                function(b, f) {
                                    var m = x(a[f[4]]) && a[f[4]];
                                    n[f[1]](function() {
                                        var a = m && m.apply(this, arguments);
                                        a && x(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this, m ? [a] : arguments)
                                    })
                                });
                            a = null
                        }).promise()
                    },
                    then: function(a, c, m) {
                        function n(a, b, c, m) {
                            return function() {
                                var g = this,
                                    k = arguments,
                                    v = function() {
                                        var f, d;
                                        if (!(a < e)) {
                                            if ((f = c.apply(g, k)) === b.promise()) throw new TypeError("Thenable self-resolution");
                                            d = f && ("object" == typeof f || "function" == typeof f) && f.then;
                                            x(d) ? m ? d.call(f, n(e,
                                                b, r, m), n(e, b, u, m)) : (e++, d.call(f, n(e, b, r, m), n(e, b, u, m), n(e, b, r, b.notifyWith))) : (c !== r && (g = void 0, k = [f]), (m || b.resolveWith)(g, k))
                                        }
                                    },
                                    h = m ? v : function() {
                                        try {
                                            v()
                                        } catch (m) {
                                            f.Deferred.exceptionHook && f.Deferred.exceptionHook(m, h.stackTrace), a + 1 >= e && (c !== u && (g = void 0, k = [m]), b.rejectWith(g, k))
                                        }
                                    };
                                a ? h() : (f.Deferred.getStackHook && (h.stackTrace = f.Deferred.getStackHook()), d.setTimeout(h))
                            }
                        }
                        var e = 0;
                        return f.Deferred(function(f) {
                            b[0][3].add(n(0, f, x(m) ? m : r, f.notifyWith));
                            b[1][3].add(n(0, f, x(a) ? a : r));
                            b[2][3].add(n(0,
                                f, x(c) ? c : u))
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? f.extend(a, m) : m
                    }
                },
                n = {};
            return f.each(b, function(a, f) {
                var e = f[2],
                    d = f[5];
                m[f[1]] = e.add;
                d && e.add(function() {
                    c = d
                }, b[3 - a][2].disable, b[3 - a][3].disable, b[0][2].lock, b[0][3].lock);
                e.add(f[3].fire);
                n[f[0]] = function() {
                    return n[f[0] + "With"](this === n ? void 0 : this, arguments), this
                };
                n[f[0] + "With"] = e.fireWith
            }), m.promise(n), a && a.call(n, n), n
        },
        when: function(a) {
            var b = arguments.length,
                c = b,
                m = Array(c),
                n = ga.call(arguments),
                e = f.Deferred(),
                d = function(a) {
                    return function(c) {
                        m[a] =
                            this;
                        n[a] = 1 < arguments.length ? ga.call(arguments) : c;
                        --b || e.resolveWith(m, n)
                    }
                };
            if (1 >= b && (O(a, e.done(d(c)).resolve, e.reject, !b), "pending" === e.state() || x(n[c] && n[c].then))) return e.then();
            for (; c--;) O(n[c], d(c), e.reject);
            return e.promise()
        }
    });
    var ac = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    f.Deferred.exceptionHook = function(a, b) {
        d.console && d.console.warn && a && ac.test(a.name) && d.console.warn("jQuery.Deferred exception: " + a.message, a.stack, b)
    };
    f.readyException = function(a) {
        d.setTimeout(function() {
            throw a;
        })
    };
    var Za = f.Deferred();
    f.fn.ready = function(a) {
        return Za.then(a)["catch"](function(a) {
            f.readyException(a)
        }), this
    };
    f.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(a) {
            (!0 === a ? --f.readyWait : f.isReady) || (f.isReady = !0, !0 !== a && 0 < --f.readyWait || Za.resolveWith(A, [f]))
        }
    });
    f.ready.then = Za.then;
    "complete" === A.readyState || "loading" !== A.readyState && !A.documentElement.doScroll ? d.setTimeout(f.ready) : (A.addEventListener("DOMContentLoaded", J), d.addEventListener("load", J));
    var Z = function(a, b, c, m, e, d, g) {
            var k = 0,
                q = a.length,
                l = null == c;
            if ("object" === h(c))
                for (k in e = !0, c) Z(a, b, k, c[k], !0, d, g);
            else if (void 0 !== m && (e = !0, x(m) || (g = !0), l && (g ? (b.call(a, m), b = null) : (l = b, b = function(a, b, c) {
                    return l.call(f(a), c)
                })), b))
                for (; k < q; k++) b(a[k], c, g ? m : m.call(a[k], k, b(a[k], c)));
            return e ? a : l ? b.call(a) : q ? b(a[0], c) : d
        },
        Jb = /^-ms-/,
        Kb = /-([a-z])/g,
        Pa = function(a) {
            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
        };
    N.uid = 1;
    N.prototype = {
        cache: function(a) {
            var b = a[this.expando];
            return b || (b = {}, Pa(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a,
                this.expando, {
                    value: b,
                    configurable: !0
                }))), b
        },
        set: function(a, b, c) {
            var f;
            a = this.cache(a);
            if ("string" == typeof b) a[I(b)] = c;
            else
                for (f in b) a[I(f)] = b[f];
            return a
        },
        get: function(a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][I(b)]
        },
        access: function(a, b, c) {
            return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, m = a[this.expando];
            if (void 0 !== m) {
                if (void 0 !== b)
                    for (c = (b = Array.isArray(b) ? b.map(I) : (b = I(b)) in m ? [b] : b.match(da) || []).length; c--;) delete m[b[c]];
                (void 0 === b || f.isEmptyObject(m)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
            }
        },
        hasData: function(a) {
            a = a[this.expando];
            return void 0 !== a && !f.isEmptyObject(a)
        }
    };
    var z = new N,
        K = new N,
        Mb = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Lb = /[A-Z]/g;
    f.extend({
        hasData: function(a) {
            return K.hasData(a) || z.hasData(a)
        },
        data: function(a, b, c) {
            return K.access(a, b, c)
        },
        removeData: function(a, b) {
            K.remove(a, b)
        },
        _data: function(a, b, c) {
            return z.access(a, b, c)
        },
        _removeData: function(a, b) {
            z.remove(a,
                b)
        }
    });
    f.fn.extend({
        data: function(a, b) {
            var c, f, e, d = this[0],
                g = d && d.attributes;
            if (void 0 === a) {
                if (this.length && (e = K.get(d), 1 === d.nodeType && !z.get(d, "hasDataAttrs"))) {
                    for (c = g.length; c--;) g[c] && 0 === (f = g[c].name).indexOf("data-") && (f = I(f.slice(5)), Ha(d, f, e[f]));
                    z.set(d, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                K.set(this, a)
            }) : Z(this, function(b) {
                    var c;
                    if (d && void 0 === b) {
                        if (void 0 !== (c = K.get(d, a)) || void 0 !== (c = Ha(d, a))) return c
                    } else this.each(function() {
                        K.set(this, a, b)
                    })
                }, null,
                b, 1 < arguments.length, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                K.remove(this, a)
            })
        }
    });
    f.extend({
        queue: function(a, b, c) {
            var m;
            if (a) return b = (b || "fx") + "queue", m = z.get(a, b), c && (!m || Array.isArray(c) ? m = z.access(a, b, f.makeArray(c)) : m.push(c)), m || []
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = f.queue(a, b),
                m = c.length,
                e = c.shift(),
                d = f._queueHooks(a, b),
                g = function() {
                    f.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), m--);
            e && ("fx" === b && c.unshift("inprogress"), delete d.stop, e.call(a, g, d));
            !m && d && d.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return z.get(a, c) || z.access(a, c, {
                empty: f.Callbacks("once memory").add(function() {
                    z.remove(a, [b + "queue", c])
                })
            })
        }
    });
    f.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? f.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = f.queue(this, a, b);
                f._queueHooks(this, a);
                "fx" === a && "inprogress" !== c[0] && f.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                f.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a ||
                "fx", [])
        },
        promise: function(a, b) {
            var c, m = 1,
                e = f.Deferred(),
                d = this,
                g = this.length,
                k = function() {
                    --m || e.resolveWith(d, [d])
                };
            "string" != typeof a && (b = a, a = void 0);
            for (a = a || "fx"; g--;)(c = z.get(d[g], a + "queueHooks")) && c.empty && (m++, c.empty.add(k));
            return k(), e.promise(b)
        }
    });
    var ub = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        xa = new RegExp("^(?:([+-])=|)(" + ub + ")([a-z%]*)$", "i"),
        ka = ["Top", "Right", "Bottom", "Left"],
        Ia = function(a, b) {
            return "none" === (a = b || a).style.display || "" === a.style.display && f.contains(a.ownerDocument,
                a) && "none" === f.css(a, "display")
        },
        vb = function(a, b, c, f) {
            var e, d = {};
            for (e in b) d[e] = a.style[e], a.style[e] = b[e];
            c = c.apply(a, f || []);
            for (e in b) a.style[e] = d[e];
            return c
        },
        db = {};
    f.fn.extend({
        show: function() {
            return aa(this, !0)
        },
        hide: function() {
            return aa(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                Ia(this) ? f(this).show() : f(this).hide()
            })
        }
    });
    var wb = /^(?:checkbox|radio)$/i,
        eb = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        fb = /^$|^module$|\/(?:java|ecma)script/i,
        V = {
            option: [1,
                "<select multiple='multiple'>", "</select>"
            ],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    V.optgroup = V.option;
    V.tbody = V.tfoot = V.colgroup = V.caption = V.thead;
    V.th = V.td;
    var Pb = /<|&#?\w+;/;
    ! function() {
        var a = A.createDocumentFragment().appendChild(A.createElement("div")),
            b = A.createElement("input");
        b.setAttribute("type", "radio");
        b.setAttribute("checked", "checked");
        b.setAttribute("name", "t");
        a.appendChild(b);
        E.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked;
        a.innerHTML = "<textarea>x</textarea>";
        E.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue
    }();
    var Qa = A.documentElement,
        bc = /^key/,
        cc = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        xb = /^([^.]*)(?:\.(.+)|)/;
    f.event = {
        global: {},
        add: function(a, b, c, e, d) {
            var g, k, h, q, l, p, w, t, r, u;
            if (l = z.get(a))
                for (c.handler && (c = (g = c).handler, d = g.selector), d && f.find.matchesSelector(Qa, d), c.guid || (c.guid = f.guid++), (q =
                        l.events) || (q = l.events = {}), (k = l.handle) || (k = l.handle = function(b) {
                        return "undefined" != typeof f && f.event.triggered !== b.type ? f.event.dispatch.apply(a, arguments) : void 0
                    }), l = (b = (b || "").match(da) || [""]).length; l--;) r = u = (h = xb.exec(b[l]) || [])[1], h = (h[2] || "").split(".").sort(), r && (w = f.event.special[r] || {}, r = (d ? w.delegateType : w.bindType) || r, w = f.event.special[r] || {}, p = f.extend({
                        type: r,
                        origType: u,
                        data: e,
                        handler: c,
                        guid: c.guid,
                        selector: d,
                        needsContext: d && f.expr.match.needsContext.test(d),
                        namespace: h.join(".")
                    }, g),
                    (t = q[r]) || ((t = q[r] = []).delegateCount = 0, w.setup && !1 !== w.setup.call(a, e, h, k) || a.addEventListener && a.addEventListener(r, k)), w.add && (w.add.call(a, p), p.handler.guid || (p.handler.guid = c.guid)), d ? t.splice(t.delegateCount++, 0, p) : t.push(p), f.event.global[r] = !0)
        },
        remove: function(a, b, c, e, d) {
            var g, k, h, q, l, p, w, t, r, u, W, x = z.hasData(a) && z.get(a);
            if (x && (q = x.events)) {
                for (l = (b = (b || "").match(da) || [""]).length; l--;)
                    if (h = xb.exec(b[l]) || [], r = W = h[1], u = (h[2] || "").split(".").sort(), r) {
                        w = f.event.special[r] || {};
                        t = q[r = (e ? w.delegateType :
                            w.bindType) || r] || [];
                        h = h[2] && new RegExp("(^|\\.)" + u.join("\\.(?:.*\\.|)") + "(\\.|$)");
                        for (k = g = t.length; g--;) p = t[g], !d && W !== p.origType || c && c.guid !== p.guid || h && !h.test(p.namespace) || e && e !== p.selector && ("**" !== e || !p.selector) || (t.splice(g, 1), p.selector && t.delegateCount--, w.remove && w.remove.call(a, p));
                        k && !t.length && (w.teardown && !1 !== w.teardown.call(a, u, x.handle) || f.removeEvent(a, r, x.handle), delete q[r])
                    } else
                        for (r in q) f.event.remove(a, r + b[l], c, e, !0);
                f.isEmptyObject(q) && z.remove(a, "handle events")
            }
        },
        dispatch: function(a) {
            var b =
                f.event.fix(a),
                c, e, d, g, k, h, q = Array(arguments.length);
            e = (z.get(this, "events") || {})[b.type] || [];
            var l = f.event.special[b.type] || {};
            q[0] = b;
            for (c = 1; c < arguments.length; c++) q[c] = arguments[c];
            if (b.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, b)) {
                h = f.event.handlers.call(this, b, e);
                for (c = 0;
                    (g = h[c++]) && !b.isPropagationStopped();)
                    for (b.currentTarget = g.elem, e = 0;
                        (k = g.handlers[e++]) && !b.isImmediatePropagationStopped();) b.rnamespace && !b.rnamespace.test(k.namespace) || (b.handleObj = k, b.data = k.data,
                        void 0 !== (d = ((f.event.special[k.origType] || {}).handle || k.handler).apply(g.elem, q)) && !1 === (b.result = d) && (b.preventDefault(), b.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, b), b.result
            }
        },
        handlers: function(a, b) {
            var c, e, d, g, k, h = [],
                q = b.delegateCount,
                l = a.target;
            if (q && l.nodeType && !("click" === a.type && 1 <= a.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== a.type || !0 !== l.disabled)) {
                        g = [];
                        k = {};
                        for (c = 0; c < q; c++) void 0 === k[d = (e = b[c]).selector + " "] && (k[d] = e.needsContext ?
                            -1 < f(d, this).index(l) : f.find(d, this, null, [l]).length), k[d] && g.push(e);
                        g.length && h.push({
                            elem: l,
                            handlers: g
                        })
                    } return l = this, q < b.length && h.push({
                elem: l,
                handlers: b.slice(q)
            }), h
        },
        addProp: function(a, b) {
            Object.defineProperty(f.Event.prototype, a, {
                enumerable: !0,
                configurable: !0,
                get: x(b) ? function() {
                    if (this.originalEvent) return b(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[a]
                },
                set: function(b) {
                    Object.defineProperty(this, a, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: b
                    })
                }
            })
        },
        fix: function(a) {
            return a[f.expando] ? a : new f.Event(a)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== fa() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === fa() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && e(this, "input")) return this.click(), !1
                },
                _default: function(a) {
                    return e(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent &&
                        (a.originalEvent.returnValue = a.result)
                }
            }
        }
    };
    f.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    };
    f.Event = function(a, b) {
        if (!(this instanceof f.Event)) return new f.Event(a, b);
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 === a.returnValue ? na : Q, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a;
        b && f.extend(this, b);
        this.timeStamp = a && a.timeStamp || Date.now();
        this[f.expando] = !0
    };
    f.Event.prototype = {
        constructor: f.Event,
        isDefaultPrevented: Q,
        isPropagationStopped: Q,
        isImmediatePropagationStopped: Q,
        isSimulated: !1,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = na;
            a && !this.isSimulated && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = na;
            a && !this.isSimulated && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = na;
            a && !this.isSimulated && a.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    f.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(a) {
            var b = a.button;
            return null ==
                a.which && bc.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && cc.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which
        }
    }, f.event.addProp);
    f.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        f.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var e, d = a.relatedTarget,
                    g = a.handleObj;
                return d && (d === this || f.contains(this, d)) || (a.type = g.origType, e = g.handler.apply(this, arguments), a.type = b), e
            }
        }
    });
    f.fn.extend({
        on: function(a,
            b, c, f) {
            return W(this, a, b, c, f)
        },
        one: function(a, b, c, f) {
            return W(this, a, b, c, f, 1)
        },
        off: function(a, b, c) {
            var e, d;
            if (a && a.preventDefault && a.handleObj) return e = a.handleObj, f(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this;
            if ("object" == typeof a) {
                for (d in a) this.off(d, b, a[d]);
                return this
            }
            return !1 !== b && "function" != typeof b || (c = b, b = void 0), !1 === c && (c = Q), this.each(function() {
                f.event.remove(this, a, c, b)
            })
        }
    });
    var dc = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        ec = /<script|<style|<link/i,
        Qb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Rb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    f.extend({
        htmlPrefilter: function(a) {
            return a.replace(dc, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var e, d, g, k, h = a.cloneNode(!0),
                q = f.contains(a.ownerDocument, a);
            if (!(E.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || f.isXMLDoc(a)))
                for (k = D(h), e = 0, d = (g = D(a)).length; e < d; e++) {
                    var l = g[e],
                        p = k[e],
                        w = p.nodeName.toLowerCase();
                    "input" === w && wb.test(l.type) ? p.checked = l.checked : "input" !== w && "textarea" !== w ||
                        (p.defaultValue = l.defaultValue)
                }
            if (b)
                if (c)
                    for (g = g || D(a), k = k || D(h), e = 0, d = g.length; e < d; e++) Ca(g[e], k[e]);
                else Ca(a, h);
            return 0 < (k = D(h, "script")).length && ea(k, !q && D(a, "script")), h
        },
        cleanData: function(a) {
            for (var b, c, e, d = f.event.special, g = 0; void 0 !== (c = a[g]); g++)
                if (Pa(c)) {
                    if (b = c[z.expando]) {
                        if (b.events)
                            for (e in b.events) d[e] ? f.event.remove(c, e) : f.removeEvent(c, e, b.handle);
                        c[z.expando] = void 0
                    }
                    c[K.expando] && (c[K.expando] = void 0)
                }
        }
    });
    f.fn.extend({
        detach: function(a) {
            return ba(this, a, !0)
        },
        remove: function(a) {
            return ba(this,
                a)
        },
        text: function(a) {
            return Z(this, function(a) {
                return void 0 === a ? f.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return X(this, arguments, function(a) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ba(this, a).appendChild(a)
            })
        },
        prepend: function() {
            return X(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ba(this, a);
                    b.insertBefore(a,
                        b.firstChild)
                }
            })
        },
        before: function() {
            return X(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return X(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (f.cleanData(D(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null != a && a, b = null == b ? a : b, this.map(function() {
                return f.clone(this, a, b)
            })
        },
        html: function(a) {
            return Z(this,
                function(a) {
                    var c = this[0] || {},
                        e = 0,
                        d = this.length;
                    if (void 0 === a && 1 === c.nodeType) return c.innerHTML;
                    if ("string" == typeof a && !ec.test(a) && !V[(eb.exec(a) || ["", ""])[1].toLowerCase()]) {
                        a = f.htmlPrefilter(a);
                        try {
                            for (; e < d; e++) 1 === (c = this[e] || {}).nodeType && (f.cleanData(D(c, !1)), c.innerHTML = a);
                            c = 0
                        } catch (g) {}
                    }
                    c && this.empty().append(a)
                }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return X(this, arguments, function(b) {
                var c = this.parentNode;
                0 > f.inArray(this, a) && (f.cleanData(D(this)), c && c.replaceChild(b,
                    this))
            }, a)
        }
    });
    f.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        f.fn[a] = function(a) {
            for (var e = [], d = f(a), g = d.length - 1, k = 0; k <= g; k++) a = k === g ? this : this.clone(!0), f(d[k])[b](a), Ya.apply(e, a.get());
            return this.pushStack(e)
        }
    });
    var Ra = new RegExp("^(" + ub + ")(?!px)[a-z%]+$", "i"),
        Ja = function(a) {
            var b = a.ownerDocument.defaultView;
            return b && b.opener || (b = d), b.getComputedStyle(a)
        },
        Sb = new RegExp(ka.join("|"), "i");
    ! function() {
        function a() {
            if (q) {
                h.style.cssText =
                    "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
                q.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
                Qa.appendChild(h).appendChild(q);
                var a = d.getComputedStyle(q);
                b = "1%" !== a.top;
                k = 12 === Math.round(parseFloat(a.marginLeft));
                q.style.right = "60%";
                g = 36 === Math.round(parseFloat(a.right));
                c = 36 === Math.round(parseFloat(a.width));
                q.style.position = "absolute";
                e = 36 === q.offsetWidth || "absolute";
                Qa.removeChild(h);
                q = null
            }
        }
        var b, c, e, g, k, h = A.createElement("div"),
            q = A.createElement("div");
        q.style && (q.style.backgroundClip = "content-box", q.cloneNode(!0).style.backgroundClip = "", E.clearCloneStyle = "content-box" === q.style.backgroundClip, f.extend(E, {
            boxSizingReliable: function() {
                return a(), c
            },
            pixelBoxStyles: function() {
                return a(), g
            },
            pixelPosition: function() {
                return a(), b
            },
            reliableMarginLeft: function() {
                return a(), k
            },
            scrollboxSize: function() {
                return a(), e
            }
        }))
    }();
    var fc = /^(none|table(?!-c[ea]).+)/,
        yb = /^--/,
        gc = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        zb = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        ib = ["Webkit", "Moz", "ms"],
        hb = A.createElement("div").style;
    f.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) return a = M(a, "opacity"), "" === a ? "1" : a
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(a, b, c, e) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var d, g, k,
                    h = I(b),
                    q = yb.test(b),
                    l = a.style;
                if (q || (b = Ka(h)), k = f.cssHooks[b] || f.cssHooks[h], void 0 === c) return k && "get" in k && void 0 !== (d = k.get(a, !1, e)) ? d : l[b];
                "string" == (g = typeof c) && (d = xa.exec(c)) && d[1] && (c = ma(a, b, d), g = "number");
                null != c && c === c && ("number" === g && (c += d && d[3] || (f.cssNumber[h] ? "" : "px")), E.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (l[b] = "inherit"), k && "set" in k && void 0 === (c = k.set(a, c, e)) || (q ? l.setProperty(b, c) : l[b] = c))
            }
        },
        css: function(a, b, c, e) {
            var d, g, k, h = I(b);
            return yb.test(b) || (b = Ka(h)), (k =
                f.cssHooks[b] || f.cssHooks[h]) && "get" in k && (d = k.get(a, !0, c)), void 0 === d && (d = M(a, b, e)), "normal" === d && b in zb && (d = zb[b]), "" === c || c ? (g = parseFloat(d), !0 === c || isFinite(g) ? g || 0 : d) : d
        }
    });
    f.each(["height", "width"], function(a, b) {
        f.cssHooks[b] = {
            get: function(a, e, d) {
                if (e) return !fc.test(f.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? kb(a, b, d) : vb(a, gc, function() {
                    return kb(a, b, d)
                })
            },
            set: function(a, e, d) {
                var g, k = Ja(a),
                    h = "border-box" === f.css(a, "boxSizing", !1, k);
                d = d && Sa(a, b, d, h, k);
                return h &&
                    E.scrollboxSize() === k.position && (d -= Math.ceil(a["offset" + b[0].toUpperCase() + b.slice(1)] - parseFloat(k[b]) - Sa(a, b, "border", !1, k) - .5)), d && (g = xa.exec(e)) && "px" !== (g[3] || "px") && (a.style[b] = e, e = f.css(a, b)), jb(a, e, d)
            }
        }
    });
    f.cssHooks.marginLeft = Y(E.reliableMarginLeft, function(a, b) {
        if (b) return (parseFloat(M(a, "marginLeft")) || a.getBoundingClientRect().left - vb(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left
        })) + "px"
    });
    f.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        f.cssHooks[a + b] = {
            expand: function(c) {
                var f = 0,
                    e = {};
                for (c = "string" == typeof c ? c.split(" ") : [c]; 4 > f; f++) e[a + ka[f] + b] = c[f] || c[f - 2] || c[0];
                return e
            }
        };
        "margin" !== a && (f.cssHooks[a + b].set = jb)
    });
    f.fn.extend({
        css: function(a, b) {
            return Z(this, function(a, b, e) {
                var d, g = {},
                    k = 0;
                if (Array.isArray(b)) {
                    e = Ja(a);
                    for (d = b.length; k < d; k++) g[b[k]] = f.css(a, b[k], !1, e);
                    return g
                }
                return void 0 !== e ? f.style(a, b, e) : f.css(a, b)
            }, a, b, 1 < arguments.length)
        }
    });
    f.Tween = T;
    T.prototype = {
        constructor: T,
        init: function(a, b, c, e, d, g) {
            this.elem = a;
            this.prop = c;
            this.easing =
                d || f.easing._default;
            this.options = b;
            this.start = this.now = this.cur();
            this.end = e;
            this.unit = g || (f.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = T.propHooks[this.prop];
            return a && a.get ? a.get(this) : T.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = T.propHooks[this.prop];
            return this.options.duration ? this.pos = b = f.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now,
                this), c && c.set ? c.set(this) : T.propHooks._default.set(this), this
        }
    };
    T.prototype.init.prototype = T.prototype;
    T.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = f.css(a.elem, a.prop, "")) && "auto" !== b ? b : 0
            },
            set: function(a) {
                f.fx.step[a.prop] ? f.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[f.cssProps[a.prop]] && !f.cssHooks[a.prop] ? a.elem[a.prop] = a.now : f.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    };
    T.propHooks.scrollTop =
        T.propHooks.scrollLeft = {
            set: function(a) {
                a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
            }
        };
    f.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    };
    f.fx = T.prototype.init;
    f.fx.step = {};
    var la, La, hc = /^(?:toggle|show|hide)$/,
        ic = /queueHooks$/;
    f.Animation = f.extend(ca, {
        tweeners: {
            "*": [function(a, b) {
                var c = this.createTween(a, b);
                return ma(c.elem, a, xa.exec(b), c), c
            }]
        },
        tweener: function(a, b) {
            x(a) ? (b = a, a = ["*"]) : a = a.match(da);
            for (var c, f = 0, e = a.length; f < e; f++) c =
                a[f], ca.tweeners[c] = ca.tweeners[c] || [], ca.tweeners[c].unshift(b)
        },
        prefilters: [function(a, b, c) {
            var e, d, g, k, h, q, l, p = "width" in b || "height" in b,
                w = this,
                t = {},
                r = a.style,
                u = a.nodeType && Ia(a),
                x = z.get(a, "fxshow");
            c.queue || (null == (k = f._queueHooks(a, "fx")).unqueued && (k.unqueued = 0, h = k.empty.fire, k.empty.fire = function() {
                k.unqueued || h()
            }), k.unqueued++, w.always(function() {
                w.always(function() {
                    k.unqueued--;
                    f.queue(a, "fx").length || k.empty.fire()
                })
            }));
            for (e in b)
                if (d = b[e], hc.test(d)) {
                    if (delete b[e], g = g || "toggle" === d,
                        d === (u ? "hide" : "show")) {
                        if ("show" !== d || !x || void 0 === x[e]) continue;
                        u = !0
                    }
                    t[e] = x && x[e] || f.style(a, e)
                } if ((b = !f.isEmptyObject(b)) || !f.isEmptyObject(t))
                for (e in p && 1 === a.nodeType && (c.overflow = [r.overflow, r.overflowX, r.overflowY], null == (q = x && x.display) && (q = z.get(a, "display")), "none" === (l = f.css(a, "display")) && (q ? l = q : (aa([a], !0), q = a.style.display || q, l = f.css(a, "display"), aa([a]))), ("inline" === l || "inline-block" === l && null != q) && "none" === f.css(a, "float") && (b || (w.done(function() {
                        r.display = q
                    }), null == q && (l = r.display,
                        q = "none" === l ? "" : l)), r.display = "inline-block")), c.overflow && (r.overflow = "hidden", w.always(function() {
                        r.overflow = c.overflow[0];
                        r.overflowX = c.overflow[1];
                        r.overflowY = c.overflow[2]
                    })), b = !1, t) b || (x ? "hidden" in x && (u = x.hidden) : x = z.access(a, "fxshow", {
                    display: q
                }), g && (x.hidden = !u), u && aa([a], !0), w.done(function() {
                    u || aa([a]);
                    z.remove(a, "fxshow");
                    for (e in t) f.style(a, e, t[e])
                })), b = mb(u ? x[e] : 0, e, w), e in x || (x[e] = b.start, u && (b.end = b.start, b.start = 0))
        }],
        prefilter: function(a, b) {
            b ? ca.prefilters.unshift(a) : ca.prefilters.push(a)
        }
    });
    f.speed = function(a, b, c) {
        var e = a && "object" == typeof a ? f.extend({}, a) : {
            complete: c || !c && b || x(a) && a,
            duration: a,
            easing: c && b || b && !x(b) && b
        };
        return f.fx.off ? e.duration = 0 : "number" != typeof e.duration && (e.duration in f.fx.speeds ? e.duration = f.fx.speeds[e.duration] : e.duration = f.fx.speeds._default), null != e.queue && !0 !== e.queue || (e.queue = "fx"), e.old = e.complete, e.complete = function() {
            x(e.old) && e.old.call(this);
            e.queue && f.dequeue(this, e.queue)
        }, e
    };
    f.fn.extend({
        fadeTo: function(a, b, c, f) {
            return this.filter(Ia).css("opacity",
                0).show().end().animate({
                opacity: b
            }, a, c, f)
        },
        animate: function(a, b, c, e) {
            var d = f.isEmptyObject(a),
                g = f.speed(b, c, e);
            b = function() {
                var b = ca(this, f.extend({}, a), g);
                (d || z.get(this, "finish")) && b.stop(!0)
            };
            return b.finish = b, d || !1 === g.queue ? this.each(b) : this.queue(g.queue, b)
        },
        stop: function(a, b, c) {
            var e = function(a) {
                var b = a.stop;
                delete a.stop;
                b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && !1 !== a && this.queue(a || "fx", []), this.each(function() {
                var b = !0,
                    d = null != a && a + "queueHooks",
                    g = f.timers,
                    k = z.get(this);
                if (d) k[d] &&
                    k[d].stop && e(k[d]);
                else
                    for (d in k) k[d] && k[d].stop && ic.test(d) && e(k[d]);
                for (d = g.length; d--;) g[d].elem !== this || null != a && g[d].queue !== a || (g[d].anim.stop(c), b = !1, g.splice(d, 1));
                !b && c || f.dequeue(this, a)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var b, c = z.get(this),
                    e = c[a + "queue"];
                b = c[a + "queueHooks"];
                var d = f.timers,
                    g = e ? e.length : 0;
                c.finish = !0;
                f.queue(this, a, []);
                b && b.stop && b.stop.call(this, !0);
                for (b = d.length; b--;) d[b].elem === this && d[b].queue === a && (d[b].anim.stop(!0), d.splice(b,
                    1));
                for (b = 0; b < g; b++) e[b] && e[b].finish && e[b].finish.call(this);
                delete c.finish
            })
        }
    });
    f.each(["toggle", "show", "hide"], function(a, b) {
        var c = f.fn[b];
        f.fn[b] = function(a, f, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Ma(b, !0), a, f, e)
        }
    });
    f.each({
        slideDown: Ma("show"),
        slideUp: Ma("hide"),
        slideToggle: Ma("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        f.fn[a] = function(a, f, e) {
            return this.animate(b, a, f, e)
        }
    });
    f.timers = [];
    f.fx.tick =
        function() {
            var a, b = 0,
                c = f.timers;
            for (la = Date.now(); b < c.length; b++)(a = c[b])() || c[b] !== a || c.splice(b--, 1);
            c.length || f.fx.stop();
            la = void 0
        };
    f.fx.timer = function(a) {
        f.timers.push(a);
        f.fx.start()
    };
    f.fx.interval = 13;
    f.fx.start = function() {
        La || (La = !0, Ta())
    };
    f.fx.stop = function() {
        La = null
    };
    f.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    f.fn.delay = function(a, b) {
        return a = f.fx ? f.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, f) {
            var e = d.setTimeout(b, a);
            f.stop = function() {
                d.clearTimeout(e)
            }
        })
    };
    (function() {
        var a = A.createElement("input"),
            b = A.createElement("select").appendChild(A.createElement("option"));
        a.type = "checkbox";
        E.checkOn = "" !== a.value;
        E.optSelected = b.selected;
        (a = A.createElement("input")).value = "t";
        a.type = "radio";
        E.radioValue = "t" === a.value
    })();
    var Ab, Aa = f.expr.attrHandle;
    f.fn.extend({
        attr: function(a, b) {
            return Z(this, f.attr, a, b, 1 < arguments.length)
        },
        removeAttr: function(a) {
            return this.each(function() {
                f.removeAttr(this, a)
            })
        }
    });
    f.extend({
        attr: function(a, b, c) {
            var e, d, g = a.nodeType;
            if (3 !== g && 8 !== g && 2 !== g) return "undefined" == typeof a.getAttribute ?
                f.prop(a, b, c) : (1 === g && f.isXMLDoc(a) || (d = f.attrHooks[b.toLowerCase()] || (f.expr.match.bool.test(b) ? Ab : void 0)), void 0 !== c ? null === c ? void f.removeAttr(a, b) : d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : d && "get" in d && null !== (e = d.get(a, b)) ? e : null == (e = f.find.attr(a, b)) ? void 0 : e)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!E.radioValue && "radio" === b && e(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c = 0,
                f = b && b.match(da);
            if (f && 1 ===
                a.nodeType)
                for (; b = f[c++];) a.removeAttribute(b)
        }
    });
    Ab = {
        set: function(a, b, c) {
            return !1 === b ? f.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    };
    f.each(f.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = Aa[b] || f.find.attr;
        Aa[b] = function(a, b, f) {
            var e, d, g = b.toLowerCase();
            return f || (d = Aa[g], Aa[g] = e, e = null != c(a, b, f) ? g : null, Aa[g] = d), e
        }
    });
    var jc = /^(?:input|select|textarea|button)$/i,
        kc = /^(?:a|area)$/i;
    f.fn.extend({
        prop: function(a, b) {
            return Z(this, f.prop, a, b, 1 < arguments.length)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[f.propFix[a] ||
                    a]
            })
        }
    });
    f.extend({
        prop: function(a, b, c) {
            var e, d, g = a.nodeType;
            if (3 !== g && 8 !== g && 2 !== g) return 1 === g && f.isXMLDoc(a) || (b = f.propFix[b] || b, d = f.propHooks[b]), void 0 !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : a[b] = c : d && "get" in d && null !== (e = d.get(a, b)) ? e : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = f.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : jc.test(a.nodeName) || kc.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    });
    E.optSelected || (f.propHooks.selected = {
        get: function(a) {
            a =
                a.parentNode;
            return a && a.parentNode && a.parentNode.selectedIndex, null
        },
        set: function(a) {
            a = a.parentNode;
            a && (a.selectedIndex, a.parentNode && a.parentNode.selectedIndex)
        }
    });
    f.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function() {
        f.propFix[this.toLowerCase()] = this
    });
    f.fn.extend({
        addClass: function(a) {
            var b, c, e, d, g, k, h, q = 0;
            if (x(a)) return this.each(function(b) {
                f(this).addClass(a.call(this, b, pa(this)))
            });
            if ((b = Ua(a)).length)
                for (; c =
                    this[q++];)
                    if (d = pa(c), e = 1 === c.nodeType && " " + oa(d) + " ") {
                        for (k = 0; g = b[k++];) 0 > e.indexOf(" " + g + " ") && (e += g + " ");
                        d !== (h = oa(e)) && c.setAttribute("class", h)
                    } return this
        },
        removeClass: function(a) {
            var b, c, e, d, g, k, h, q = 0;
            if (x(a)) return this.each(function(b) {
                f(this).removeClass(a.call(this, b, pa(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((b = Ua(a)).length)
                for (; c = this[q++];)
                    if (d = pa(c), e = 1 === c.nodeType && " " + oa(d) + " ") {
                        for (k = 0; g = b[k++];)
                            for (; - 1 < e.indexOf(" " + g + " ");) e = e.replace(" " + g + " ", " ");
                        d !==
                            (h = oa(e)) && c.setAttribute("class", h)
                    } return this
        },
        toggleClass: function(a, b) {
            var c = typeof a,
                e = "string" === c || Array.isArray(a);
            return "boolean" == typeof b && e ? b ? this.addClass(a) : this.removeClass(a) : x(a) ? this.each(function(c) {
                f(this).toggleClass(a.call(this, c, pa(this), b), b)
            }) : this.each(function() {
                var b, d, g, k;
                if (e)
                    for (d = 0, g = f(this), k = Ua(a); b = k[d++];) g.hasClass(b) ? g.removeClass(b) : g.addClass(b);
                else void 0 !== a && "boolean" !== c || ((b = pa(this)) && z.set(this, "__className__", b), this.setAttribute && this.setAttribute("class",
                    b || !1 === a ? "" : z.get(this, "__className__") || ""))
            })
        },
        hasClass: function(a) {
            var b, c = 0;
            for (a = " " + a + " "; b = this[c++];)
                if (1 === b.nodeType && -1 < (" " + oa(pa(b)) + " ").indexOf(a)) return !0;
            return !1
        }
    });
    var lc = /\r/g;
    f.fn.extend({
        val: function(a) {
            var b, c, e, d = this[0];
            if (arguments.length) return e = x(a), this.each(function(c) {
                var d;
                1 === this.nodeType && (null == (d = e ? a.call(this, c, f(this).val()) : a) ? d = "" : "number" == typeof d ? d += "" : Array.isArray(d) && (d = f.map(d, function(a) {
                        return null == a ? "" : a + ""
                    })), (b = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()]) &&
                    "set" in b && void 0 !== b.set(this, d, "value") || (this.value = d))
            });
            if (d) return (b = f.valHooks[d.type] || f.valHooks[d.nodeName.toLowerCase()]) && "get" in b && void 0 !== (c = b.get(d, "value")) ? c : "string" == typeof(c = d.value) ? c.replace(lc, "") : null == c ? "" : c
        }
    });
    f.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = f.find.attr(a, "value");
                    return null != b ? b : oa(f.text(a))
                }
            },
            select: {
                get: function(a) {
                    var b, c, d = a.options,
                        g = a.selectedIndex,
                        k = "select-one" === a.type,
                        h = k ? null : [],
                        q = k ? g + 1 : d.length;
                    for (c = 0 > g ? q : k ? g : 0; c < q; c++)
                        if (!(!(b = d[c]).selected &&
                                c !== g || b.disabled || b.parentNode.disabled && e(b.parentNode, "optgroup"))) {
                            if (a = f(b).val(), k) return a;
                            h.push(a)
                        } return h
                },
                set: function(a, b) {
                    var c, e, d = a.options;
                    b = f.makeArray(b);
                    for (var g = d.length; g--;)((e = d[g]).selected = -1 < f.inArray(f.valHooks.option.get(e), b)) && (c = !0);
                    return c || (a.selectedIndex = -1), b
                }
            }
        }
    });
    f.each(["radio", "checkbox"], function() {
        f.valHooks[this] = {
            set: function(a, b) {
                if (Array.isArray(b)) return a.checked = -1 < f.inArray(f(a).val(), b)
            }
        };
        E.checkOn || (f.valHooks[this].get = function(a) {
            return null ===
                a.getAttribute("value") ? "on" : a.value
        })
    });
    E.focusin = "onfocusin" in d;
    var Bb = /^(?:focusinfocus|focusoutblur)$/,
        Cb = function(a) {
            a.stopPropagation()
        };
    f.extend(f.event, {
        trigger: function(a, b, c, e) {
            var g, k, h, q, l, p, w, r, t = [c || A],
                u = Na.call(a, "type") ? a.type : a;
            g = Na.call(a, "namespace") ? a.namespace.split(".") : [];
            if (k = r = h = c = c || A, 3 !== c.nodeType && 8 !== c.nodeType && !Bb.test(u + f.event.triggered) && (-1 < u.indexOf(".") && (u = (g = u.split(".")).shift(), g.sort()), l = 0 > u.indexOf(":") && "on" + u, a = a[f.expando] ? a : new f.Event(u, "object" ==
                    typeof a && a), a.isTrigger = e ? 2 : 3, a.namespace = g.join("."), a.rnamespace = a.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, a.result = void 0, a.target || (a.target = c), b = null == b ? [a] : f.makeArray(b, [a]), w = f.event.special[u] || {}, e || !w.trigger || !1 !== w.trigger.apply(c, b))) {
                if (!e && !w.noBubble && !wa(c)) {
                    q = w.delegateType || u;
                    for (Bb.test(q + u) || (k = k.parentNode); k; k = k.parentNode) t.push(k), h = k;
                    h === (c.ownerDocument || A) && t.push(h.defaultView || h.parentWindow || d)
                }
                for (g = 0;
                    (k = t[g++]) && !a.isPropagationStopped();) r =
                    k, a.type = 1 < g ? q : w.bindType || u, (p = (z.get(k, "events") || {})[a.type] && z.get(k, "handle")) && p.apply(k, b), (p = l && k[l]) && p.apply && Pa(k) && (a.result = p.apply(k, b), !1 === a.result && a.preventDefault());
                return a.type = u, e || a.isDefaultPrevented() || w._default && !1 !== w._default.apply(t.pop(), b) || !Pa(c) || l && x(c[u]) && !wa(c) && ((h = c[l]) && (c[l] = null), f.event.triggered = u, a.isPropagationStopped() && r.addEventListener(u, Cb), c[u](), a.isPropagationStopped() && r.removeEventListener(u, Cb), f.event.triggered = void 0, h && (c[l] = h)), a.result
            }
        },
        simulate: function(a, b, c) {
            a = f.extend(new f.Event, c, {
                type: a,
                isSimulated: !0
            });
            f.event.trigger(a, null, b)
        }
    });
    f.fn.extend({
        trigger: function(a, b) {
            return this.each(function() {
                f.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            if (c) return f.event.trigger(a, b, c, !0)
        }
    });
    E.focusin || f.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            f.event.simulate(b, a.target, f.event.fix(a))
        };
        f.event.special[b] = {
            setup: function() {
                var f = this.ownerDocument || this,
                    e = z.access(f, b);
                e || f.addEventListener(a,
                    c, !0);
                z.access(f, b, (e || 0) + 1)
            },
            teardown: function() {
                var f = this.ownerDocument || this,
                    e = z.access(f, b) - 1;
                e ? z.access(f, b, e) : (f.removeEventListener(a, c, !0), z.remove(f, b))
            }
        }
    });
    var Da = d.location,
        Db = Date.now(),
        $a = /\?/;
    f.parseXML = function(a) {
        var b;
        if (!a || "string" != typeof a) return null;
        try {
            b = (new d.DOMParser).parseFromString(a, "text/xml")
        } catch (c) {
            b = void 0
        }
        return b && !b.getElementsByTagName("parsererror").length || f.error("Invalid XML: " + a), b
    };
    var Ub = /\[\]$/,
        Eb = /\r?\n/g,
        mc = /^(?:submit|button|image|reset|file)$/i,
        nc = /^(?:input|select|textarea|keygen)/i;
    f.param = function(a, b) {
        var c, e = [],
            d = function(a, b) {
                b = x(b) ? b() : b;
                e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == b ? "" : b)
            };
        if (Array.isArray(a) || a.jquery && !f.isPlainObject(a)) f.each(a, function() {
            d(this.name, this.value)
        });
        else
            for (c in a) Va(c, a[c], b, d);
        return e.join("&")
    };
    f.fn.extend({
        serialize: function() {
            return f.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = f.prop(this, "elements");
                return a ? f.makeArray(a) :
                    this
            }).filter(function() {
                var a = this.type;
                return this.name && !f(this).is(":disabled") && nc.test(this.nodeName) && !mc.test(a) && (this.checked || !wb.test(a))
            }).map(function(a, b) {
                a = f(this).val();
                return null == a ? null : Array.isArray(a) ? f.map(a, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Eb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: a.replace(Eb, "\r\n")
                }
            }).get()
        }
    });
    var oc = /%20/g,
        pc = /#.*$/,
        qc = /([?&])_=[^&]*/,
        rc = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        sc = /^(?:GET|HEAD)$/,
        tc = /^\/\//,
        Fb = {},
        Wa = {},
        Gb = "*/".concat("*"),
        ab = A.createElement("a");
    ab.href = Da.href;
    f.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Da.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Da.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Gb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": f.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Xa(Xa(a, f.ajaxSettings), b) : Xa(f.ajaxSettings, a)
        },
        ajaxPrefilter: nb(Fb),
        ajaxTransport: nb(Wa),
        ajax: function(a, b) {
            function c(a, b, c, h) {
                var w, r, C, fa, A = b;
                if (!l) {
                    l = !0;
                    q && d.clearTimeout(q);
                    e = void 0;
                    k = h || "";
                    y.readyState = 0 < a ? 4 : 0;
                    h = 200 <= a && 300 > a || 304 === a;
                    if (c) {
                        C = t;
                        for (var E = y, B, D, R, H, M = C.contents, L = C.dataTypes;
                            "*" === L[0];) L.shift(), void 0 ===
                            B && (B = C.mimeType || E.getResponseHeader("Content-Type"));
                        if (B)
                            for (D in M)
                                if (M[D] && M[D].test(B)) {
                                    L.unshift(D);
                                    break
                                } if (L[0] in c) R = L[0];
                        else {
                            for (D in c) {
                                if (!L[0] || C.converters[D + " " + L[0]]) {
                                    R = D;
                                    break
                                }
                                H || (H = D)
                            }
                            R = R || H
                        }
                        c = R ? (R !== L[0] && L.unshift(R), c[R]) : void 0;
                        C = c
                    }
                    var J;
                    a: {
                        c = t;B = C;D = y;R = h;
                        var F, O, K;C = {};E = c.dataTypes.slice();
                        if (E[1])
                            for (F in c.converters) C[F.toLowerCase()] = c.converters[F];
                        for (H = E.shift(); H;)
                            if (c.responseFields[H] && (D[c.responseFields[H]] = B), !K && R && c.dataFilter && (B = c.dataFilter(B, c.dataType)),
                                K = H, H = E.shift())
                                if ("*" === H) H = K;
                                else if ("*" !== K && K !== H) {
                            if (!(F = C[K + " " + H] || C["* " + H]))
                                for (J in C)
                                    if ((O = J.split(" "))[1] === H && (F = C[K + " " + O[0]] || C["* " + O[0]])) {
                                        !0 === F ? F = C[J] : !0 !== C[J] && (H = O[0], E.unshift(O[1]));
                                        break
                                    } if (!0 !== F)
                                if (F && c["throws"]) B = F(B);
                                else try {
                                    B = F(B)
                                } catch (I) {
                                    J = {
                                        state: "parsererror",
                                        error: F ? I : "No conversion from " + K + " to " + H
                                    };
                                    break a
                                }
                        }
                        J = {
                            state: "success",
                            data: B
                        }
                    }
                    C = J;
                    h ? (t.ifModified && ((fa = y.getResponseHeader("Last-Modified")) && (f.lastModified[g] = fa), (fa = y.getResponseHeader("etag")) && (f.etag[g] =
                        fa)), 204 === a || "HEAD" === t.type ? A = "nocontent" : 304 === a ? A = "notmodified" : (A = C.state, w = C.data, h = !(r = C.error))) : (r = A, !a && A || (A = "error", 0 > a && (a = 0)));
                    y.status = a;
                    y.statusText = (b || A) + "";
                    h ? W.resolveWith(u, [w, A, y]) : W.rejectWith(u, [y, A, r]);
                    y.statusCode(Q);
                    Q = void 0;
                    p && x.trigger(h ? "ajaxSuccess" : "ajaxError", [y, t, h ? w : r]);
                    z.fireWith(u, [y, A]);
                    p && (x.trigger("ajaxComplete", [y, t]), --f.active || f.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof a && (b = a, a = void 0);
            b = b || {};
            var e, g, k, h, q, l, p, w, r, t = f.ajaxSetup({}, b),
                u = t.context ||
                t,
                x = t.context && (u.nodeType || u.jquery) ? f(u) : f.event,
                W = f.Deferred(),
                z = f.Callbacks("once memory"),
                Q = t.statusCode || {},
                fa = {},
                E = {},
                D = "canceled",
                y = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (l) {
                            if (!h)
                                for (h = {}; b = rc.exec(k);) h[b[1].toLowerCase()] = b[2];
                            b = h[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return l ? k : null
                    },
                    setRequestHeader: function(a, b) {
                        return null == l && (a = E[a.toLowerCase()] = E[a.toLowerCase()] || a, fa[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return null == l && (t.mimeType =
                            a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (l) y.always(a[y.status]);
                            else
                                for (b in a) Q[b] = [Q[b], a[b]];
                        return this
                    },
                    abort: function(a) {
                        a = a || D;
                        return e && e.abort(a), c(0, a), this
                    }
                };
            if (W.promise(y), t.url = ((a || t.url || Da.href) + "").replace(tc, Da.protocol + "//"), t.type = b.method || b.type || t.method || t.type, t.dataTypes = (t.dataType || "*").toLowerCase().match(da) || [""], null == t.crossDomain) {
                a = A.createElement("a");
                try {
                    a.href = t.url, a.href = a.href, t.crossDomain = ab.protocol + "//" + ab.host != a.protocol + "//" + a.host
                } catch (G) {
                    t.crossDomain = !0
                }
            }
            if (t.data && t.processData && "string" != typeof t.data && (t.data = f.param(t.data, t.traditional)), ob(Fb, t, b, y), l) return y;
            (p = f.event && t.global) && 0 == f.active++ && f.event.trigger("ajaxStart");
            t.type = t.type.toUpperCase();
            t.hasContent = !sc.test(t.type);
            g = t.url.replace(pc, "");
            t.hasContent ? t.data && t.processData && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && (t.data = t.data.replace(oc, "+")) : (r = t.url.slice(g.length), t.data && (t.processData || "string" == typeof t.data) && (g += ($a.test(g) ? "&" : "?") +
                t.data, delete t.data), !1 === t.cache && (g = g.replace(qc, "$1"), r = ($a.test(g) ? "&" : "?") + "_=" + Db++ + r), t.url = g + r);
            t.ifModified && (f.lastModified[g] && y.setRequestHeader("If-Modified-Since", f.lastModified[g]), f.etag[g] && y.setRequestHeader("If-None-Match", f.etag[g]));
            (t.data && t.hasContent && !1 !== t.contentType || b.contentType) && y.setRequestHeader("Content-Type", t.contentType);
            y.setRequestHeader("Accept", t.dataTypes[0] && t.accepts[t.dataTypes[0]] ? t.accepts[t.dataTypes[0]] + ("*" !== t.dataTypes[0] ? ", " + Gb + "; q=0.01" :
                "") : t.accepts["*"]);
            for (w in t.headers) y.setRequestHeader(w, t.headers[w]);
            if (t.beforeSend && (!1 === t.beforeSend.call(u, y, t) || l)) return y.abort();
            if (D = "abort", z.add(t.complete), y.done(t.success), y.fail(t.error), e = ob(Wa, t, b, y)) {
                if (y.readyState = 1, p && x.trigger("ajaxSend", [y, t]), l) return y;
                t.async && 0 < t.timeout && (q = d.setTimeout(function() {
                    y.abort("timeout")
                }, t.timeout));
                try {
                    l = !1, e.send(fa, c)
                } catch (G) {
                    if (l) throw G;
                    c(-1, G)
                }
            } else c(-1, "No Transport");
            return y
        },
        getJSON: function(a, b, c) {
            return f.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return f.get(a, void 0, b, "script")
        }
    });
    f.each(["get", "post"], function(a, b) {
        f[b] = function(a, e, d, g) {
            return x(e) && (g = g || d, d = e, e = void 0), f.ajax(f.extend({
                url: a,
                type: b,
                dataType: g,
                data: e,
                success: d
            }, f.isPlainObject(a) && a))
        }
    });
    f._evalUrl = function(a) {
        return f.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    };
    f.fn.extend({
        wrapAll: function(a) {
            var b;
            return this[0] && (x(a) && (a = a.call(this[0])), b = f(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode &&
                b.insertBefore(this[0]), b.map(function() {
                    for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                    return a
                }).append(this)), this
        },
        wrapInner: function(a) {
            return x(a) ? this.each(function(b) {
                f(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = f(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = x(a);
            return this.each(function(c) {
                f(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function(a) {
            return this.parent(a).not("body").each(function() {
                    f(this).replaceWith(this.childNodes)
                }),
                this
        }
    });
    f.expr.pseudos.hidden = function(a) {
        return !f.expr.pseudos.visible(a)
    };
    f.expr.pseudos.visible = function(a) {
        return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
    };
    f.ajaxSettings.xhr = function() {
        try {
            return new d.XMLHttpRequest
        } catch (a) {}
    };
    var uc = {
            0: 200,
            1223: 204
        },
        Ea = f.ajaxSettings.xhr();
    E.cors = !!Ea && "withCredentials" in Ea;
    E.ajax = Ea = !!Ea;
    f.ajaxTransport(function(a) {
        var b, c;
        if (E.cors || Ea && !a.crossDomain) return {
            send: function(f, e) {
                var g, k = a.xhr();
                if (k.open(a.type, a.url, a.async, a.username,
                        a.password), a.xhrFields)
                    for (g in a.xhrFields) k[g] = a.xhrFields[g];
                a.mimeType && k.overrideMimeType && k.overrideMimeType(a.mimeType);
                a.crossDomain || f["X-Requested-With"] || (f["X-Requested-With"] = "XMLHttpRequest");
                for (g in f) k.setRequestHeader(g, f[g]);
                b = function(a) {
                    return function() {
                        b && (b = c = k.onload = k.onerror = k.onabort = k.ontimeout = k.onreadystatechange = null, "abort" === a ? k.abort() : "error" === a ? "number" != typeof k.status ? e(0, "error") : e(k.status, k.statusText) : e(uc[k.status] || k.status, k.statusText, "text" !== (k.responseType ||
                            "text") || "string" != typeof k.responseText ? {
                            binary: k.response
                        } : {
                            text: k.responseText
                        }, k.getAllResponseHeaders()))
                    }
                };
                k.onload = b();
                c = k.onerror = k.ontimeout = b("error");
                void 0 !== k.onabort ? k.onabort = c : k.onreadystatechange = function() {
                    4 === k.readyState && d.setTimeout(function() {
                        b && c()
                    })
                };
                b = b("abort");
                try {
                    k.send(a.hasContent && a.data || null)
                } catch (h) {
                    if (b) throw h;
                }
            },
            abort: function() {
                b && b()
            }
        }
    });
    f.ajaxPrefilter(function(a) {
        a.crossDomain && (a.contents.script = !1)
    });
    f.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return f.globalEval(a), a
            }
        }
    });
    f.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1);
        a.crossDomain && (a.type = "GET")
    });
    f.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(e, d) {
                    b = f("<script>").prop({
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove();
                        c = null;
                        a && d("error" === a.type ? 404 : 200, a.type)
                    });
                    A.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Hb = [],
        bb = /(=)\?(?=&|$)|\?\?/;
    f.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Hb.pop() || f.expando + "_" + Db++;
            return this[a] = !0, a
        }
    });
    f.ajaxPrefilter("json jsonp", function(a, b, c) {
        var e, g, k, h = !1 !== a.jsonp && (bb.test(a.url) ? "url" : "string" == typeof a.data && 0 === (a.contentType || "").indexOf("application/x-www-form-urlencoded") && bb.test(a.data) && "data");
        if (h || "jsonp" === a.dataTypes[0]) return e = a.jsonpCallback = x(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback, h ? a[h] = a[h].replace(bb, "$1" + e) : !1 !==
            a.jsonp && (a.url += ($a.test(a.url) ? "&" : "?") + a.jsonp + "=" + e), a.converters["script json"] = function() {
                return k || f.error(e + " was not called"), k[0]
            }, a.dataTypes[0] = "json", g = d[e], d[e] = function() {
                k = arguments
            }, c.always(function() {
                void 0 === g ? f(d).removeProp(e) : d[e] = g;
                a[e] && (a.jsonpCallback = b.jsonpCallback, Hb.push(e));
                k && x(g) && g(k[0]);
                k = g = void 0
            }), "script"
    });
    E.createHTMLDocument = function() {
        var a = A.implementation.createHTMLDocument("").body;
        return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length
    }();
    f.parseHTML = function(a, b, c) {
        if ("string" != typeof a) return [];
        "boolean" == typeof b && (c = b, b = !1);
        var e, d, g;
        return b || (E.createHTMLDocument ? ((e = (b = A.implementation.createHTMLDocument("")).createElement("base")).href = A.location.href, b.head.appendChild(e)) : b = A), d = sb.exec(a), g = !c && [], d ? [b.createElement(d[1])] : (d = ya([a], b, g), g && g.length && f(g).remove(), f.merge([], d.childNodes))
    };
    f.fn.load = function(a, b, c) {
        var e, d, g, k = this,
            h = a.indexOf(" ");
        return -1 < h && (e = oa(a.slice(h)), a = a.slice(0, h)), x(b) ? (c = b, b = void 0) : b && "object" ==
            typeof b && (d = "POST"), 0 < k.length && f.ajax({
                url: a,
                type: d || "GET",
                dataType: "html",
                data: b
            }).done(function(a) {
                g = arguments;
                k.html(e ? f("<div>").append(f.parseHTML(a)).find(e) : a)
            }).always(c && function(a, b) {
                k.each(function() {
                    c.apply(this, g || [a.responseText, b, a])
                })
            }), this
    };
    f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
        f.fn[b] = function(a) {
            return this.on(b, a)
        }
    });
    f.expr.pseudos.animated = function(a) {
        return f.grep(f.timers, function(b) {
            return a === b.elem
        }).length
    };
    f.offset = {
        setOffset: function(a, b, c) {
            var e, d, g, k, h, q, l = f.css(a, "position"),
                p = f(a),
                w = {};
            "static" === l && (a.style.position = "relative");
            h = p.offset();
            g = f.css(a, "top");
            q = f.css(a, "left");
            ("absolute" === l || "fixed" === l) && -1 < (g + q).indexOf("auto") ? (k = (e = p.position()).top, d = e.left) : (k = parseFloat(g) || 0, d = parseFloat(q) || 0);
            x(b) && (b = b.call(a, c, f.extend({}, h)));
            null != b.top && (w.top = b.top - h.top + k);
            null != b.left && (w.left = b.left - h.left + d);
            "using" in b ? b.using.call(a, w) : p.css(w)
        }
    };
    f.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 ===
                a ? this : this.each(function(b) {
                    f.offset.setOffset(this, a, b)
                });
            var b, c, e = this[0];
            if (e) return e.getClientRects().length ? (b = e.getBoundingClientRect(), c = e.ownerDocument.defaultView, {
                top: b.top + c.pageYOffset,
                left: b.left + c.pageXOffset
            }) : {
                top: 0,
                left: 0
            }
        },
        position: function() {
            if (this[0]) {
                var a, b, c, e = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === f.css(e, "position")) b = e.getBoundingClientRect();
                else {
                    b = this.offset();
                    c = e.ownerDocument;
                    for (a = e.offsetParent || c.documentElement; a && (a === c.body || a === c.documentElement) && "static" ===
                        f.css(a, "position");) a = a.parentNode;
                    a && a !== e && 1 === a.nodeType && ((d = f(a).offset()).top += f.css(a, "borderTopWidth", !0), d.left += f.css(a, "borderLeftWidth", !0))
                }
                return {
                    top: b.top - d.top - f.css(e, "marginTop", !0),
                    left: b.left - d.left - f.css(e, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent; a && "static" === f.css(a, "position");) a = a.offsetParent;
                return a || Qa
            })
        }
    });
    f.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = "pageYOffset" === b;
        f.fn[a] =
            function(f) {
                return Z(this, function(a, f, e) {
                    var d;
                    if (wa(a) ? d = a : 9 === a.nodeType && (d = a.defaultView), void 0 === e) return d ? d[b] : a[f];
                    d ? d.scrollTo(c ? d.pageXOffset : e, c ? e : d.pageYOffset) : a[f] = e
                }, a, f, arguments.length)
            }
    });
    f.each(["top", "left"], function(a, b) {
        f.cssHooks[b] = Y(E.pixelPosition, function(a, e) {
            if (e) return e = M(a, b), Ra.test(e) ? f(a).position()[b] + "px" : e
        })
    });
    f.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        f.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, e) {
            f.fn[e] = function(d, g) {
                var k = arguments.length &&
                    (c || "boolean" != typeof d),
                    h = c || (!0 === d || !0 === g ? "margin" : "border");
                return Z(this, function(b, c, d) {
                    var g;
                    return wa(b) ? 0 === e.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (g = b.documentElement, Math.max(b.body["scroll" + a], g["scroll" + a], b.body["offset" + a], g["offset" + a], g["client" + a])) : void 0 === d ? f.css(b, c, h) : f.style(b, c, d, h)
                }, b, k ? d : void 0, k)
            }
        })
    });
    f.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
        function(a, b) {
            f.fn[b] = function(a, f) {
                return 0 < arguments.length ? this.on(b, null, a, f) : this.trigger(b)
            }
        });
    f.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    f.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, f) {
            return this.on(b, a, c, f)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    f.proxy = function(a, b) {
        var c, e, d;
        if ("string" == typeof b && (c = a[b],
                b = a, a = c), x(a)) return e = ga.call(arguments, 2), d = function() {
            return a.apply(b || this, e.concat(ga.call(arguments)))
        }, d.guid = a.guid = a.guid || f.guid++, d
    };
    f.holdReady = function(a) {
        a ? f.readyWait++ : f.ready(!0)
    };
    f.isArray = Array.isArray;
    f.parseJSON = JSON.parse;
    f.nodeName = e;
    f.isFunction = x;
    f.isWindow = wa;
    f.camelCase = I;
    f.type = h;
    f.now = Date.now;
    f.isNumeric = function(a) {
        var b = f.type(a);
        return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a))
    };
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return f
    });
    var vc = d.jQuery,
        wc = d.$;
    return f.noConflict = function(a) {
        return d.$ === f && (d.$ = wc), a && d.jQuery === f && (d.jQuery = vc), f
    }, l || (d.jQuery = d.$ = f), f
});
if ("undefined" === typeof jQuery) throw Error("Bootstrap's JavaScript requires jQuery"); + function(d) {
    d = d.fn.jquery.split(" ")[0].split(".");
    if (2 > d[0] && 9 > d[1] || 1 == d[0] && 9 == d[1] && 1 > d[2] || 3 < d[0]) throw Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");
}(jQuery); +
function(d) {
    function l() {
        var d = document.createElement("bootstrap"),
            h = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            },
            g;
        for (g in h)
            if (void 0 !== d.style[g]) return {
                end: h[g]
            };
        return !1
    }
    d.fn.emulateTransitionEnd = function(l) {
        var h = !1,
            g = this;
        d(this).one("bsTransitionEnd", function() {
            h = !0
        });
        setTimeout(function() {
            h || d(g).trigger(d.support.transition.end)
        }, l);
        return this
    };
    d(function() {
        d.support.transition = l();
        d.support.transition &&
            (d.event.special.bsTransitionEnd = {
                bindType: d.support.transition.end,
                delegateType: d.support.transition.end,
                handle: function(l) {
                    if (d(l.target).is(this)) return l.handleObj.handler.apply(this, arguments)
                }
            })
    })
}(jQuery); +
function(d) {
    var l = function(h) {
        d(h).on("click", '[data-dismiss="alert"]', this.close)
    };
    l.VERSION = "3.3.7";
    l.TRANSITION_DURATION = 150;
    l.prototype.close = function(h) {
        function g() {
            q.detach().trigger("closed.bs.alert").remove()
        }
        var e = d(this),
            k = e.attr("data-target");
        k || (k = (k = e.attr("href")) && k.replace(/.*(?=#[^\s]*$)/, ""));
        var q = d("#" === k ? [] : k);
        h && h.preventDefault();
        q.length || (q = e.closest(".alert"));
        q.trigger(h = d.Event("close.bs.alert"));
        h.isDefaultPrevented() || (q.removeClass("in"), d.support.transition && q.hasClass("fade") ?
            q.one("bsTransitionEnd", g).emulateTransitionEnd(l.TRANSITION_DURATION) : g())
    };
    var p = d.fn.alert;
    d.fn.alert = function(h) {
        return this.each(function() {
            var g = d(this),
                e = g.data("bs.alert");
            e || g.data("bs.alert", e = new l(this));
            "string" == typeof h && e[h].call(g)
        })
    };
    d.fn.alert.Constructor = l;
    d.fn.alert.noConflict = function() {
        d.fn.alert = p;
        return this
    };
    d(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', l.prototype.close)
}(jQuery); +
function(d) {
    function l(g) {
        return this.each(function() {
            var e = d(this),
                k = e.data("bs.button"),
                h = "object" == typeof g && g;
            k || e.data("bs.button", k = new p(this, h));
            "toggle" == g ? k.toggle() : g && k.setState(g)
        })
    }
    var p = function(g, e) {
        this.$element = d(g);
        this.options = d.extend({}, p.DEFAULTS, e);
        this.isLoading = !1
    };
    p.VERSION = "3.3.7";
    p.DEFAULTS = {
        loadingText: "loading..."
    };
    p.prototype.setState = function(g) {
        var e = this.$element,
            k = e.is("input") ? "val" : "html",
            h = e.data();
        g += "Text";
        null == h.resetText && e.data("resetText", e[k]());
        setTimeout(d.proxy(function() {
            e[k](null ==
                h[g] ? this.options[g] : h[g]);
            "loadingText" == g ? (this.isLoading = !0, e.addClass("disabled").attr("disabled", "disabled").prop("disabled", !0)) : this.isLoading && (this.isLoading = !1, e.removeClass("disabled").removeAttr("disabled").prop("disabled", !1))
        }, this), 0)
    };
    p.prototype.toggle = function() {
        var d = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var k = this.$element.find("input");
            "radio" == k.prop("type") ? (k.prop("checked") && (d = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) :
                "checkbox" == k.prop("type") && (k.prop("checked") !== this.$element.hasClass("active") && (d = !1), this.$element.toggleClass("active"));
            k.prop("checked", this.$element.hasClass("active"));
            d && k.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var h = d.fn.button;
    d.fn.button = l;
    d.fn.button.Constructor = p;
    d.fn.button.noConflict = function() {
        d.fn.button = h;
        return this
    };
    d(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(g) {
        var e =
            d(g.target).closest(".btn");
        l.call(e, "toggle");
        d(g.target).is('input[type="radio"], input[type="checkbox"]') || (g.preventDefault(), e.is("input,button") ? e.trigger("focus") : e.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(g) {
        d(g.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(g.type))
    })
}(jQuery); +
function(d) {
    function l(e) {
        return this.each(function() {
            var g = d(this),
                h = g.data("bs.carousel"),
                l = d.extend({}, p.DEFAULTS, g.data(), "object" == typeof e && e),
                r = "string" == typeof e ? e : l.slide;
            h || g.data("bs.carousel", h = new p(this, l));
            if ("number" == typeof e) h.to(e);
            else if (r) h[r]();
            else l.interval && h.pause().cycle()
        })
    }
    var p = function(e, g) {
        this.$element = d(e);
        this.$indicators = this.$element.find(".carousel-indicators");
        this.options = g;
        this.$items = this.$active = this.interval = this.sliding = this.paused = null;
        this.options.keyboard &&
            this.$element.on("keydown.bs.carousel", d.proxy(this.keydown, this));
        "hover" != this.options.pause || "ontouchstart" in document.documentElement || this.$element.on("mouseenter.bs.carousel", d.proxy(this.pause, this)).on("mouseleave.bs.carousel", d.proxy(this.cycle, this))
    };
    p.VERSION = "3.3.7";
    p.TRANSITION_DURATION = 600;
    p.DEFAULTS = {
        interval: 5E3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    };
    p.prototype.keydown = function(e) {
        if (!/input|textarea/i.test(e.target.tagName)) {
            switch (e.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            e.preventDefault()
        }
    };
    p.prototype.cycle = function(e) {
        e || (this.paused = !1);
        this.interval && clearInterval(this.interval);
        this.options.interval && !this.paused && (this.interval = setInterval(d.proxy(this.next, this), this.options.interval));
        return this
    };
    p.prototype.getItemIndex = function(e) {
        this.$items = e.parent().children(".item");
        return this.$items.index(e || this.$active)
    };
    p.prototype.getItemForDirection = function(e, d) {
        var g = this.getItemIndex(d);
        return ("prev" == e && 0 === g || "next" == e && g == this.$items.length -
            1) && !this.options.wrap ? d : this.$items.eq((g + ("prev" == e ? -1 : 1)) % this.$items.length)
    };
    p.prototype.to = function(e) {
        var d = this,
            g = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(e > this.$items.length - 1 || 0 > e)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
            d.to(e)
        }) : g == e ? this.pause().cycle() : this.slide(e > g ? "next" : "prev", this.$items.eq(e))
    };
    p.prototype.pause = function(e) {
        e || (this.paused = !0);
        this.$element.find(".next, .prev").length && d.support.transition && (this.$element.trigger(d.support.transition.end),
            this.cycle(!0));
        this.interval = clearInterval(this.interval);
        return this
    };
    p.prototype.next = function() {
        if (!this.sliding) return this.slide("next")
    };
    p.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev")
    };
    p.prototype.slide = function(e, g) {
        var h = this.$element.find(".item.active"),
            l = g || this.getItemForDirection(e, h);
        g = this.interval;
        var r = "next" == e ? "left" : "right",
            u = this;
        if (l.hasClass("active")) return this.sliding = !1;
        var O = l[0],
            J = d.Event("slide.bs.carousel", {
                relatedTarget: O,
                direction: r
            });
        this.$element.trigger(J);
        if (!J.isDefaultPrevented()) {
            this.sliding = !0;
            g && this.pause();
            this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), (J = d(this.$indicators.children()[this.getItemIndex(l)])) && J.addClass("active"));
            var S = d.Event("slid.bs.carousel", {
                relatedTarget: O,
                direction: r
            });
            d.support.transition && this.$element.hasClass("slide") ? (l.addClass(e), l[0].offsetWidth, h.addClass(r), l.addClass(r), h.one("bsTransitionEnd", function() {
                l.removeClass([e, r].join(" ")).addClass("active");
                h.removeClass(["active",
                    r
                ].join(" "));
                u.sliding = !1;
                setTimeout(function() {
                    u.$element.trigger(S)
                }, 0)
            }).emulateTransitionEnd(p.TRANSITION_DURATION)) : (h.removeClass("active"), l.addClass("active"), this.sliding = !1, this.$element.trigger(S));
            g && this.cycle();
            return this
        }
    };
    var h = d.fn.carousel;
    d.fn.carousel = l;
    d.fn.carousel.Constructor = p;
    d.fn.carousel.noConflict = function() {
        d.fn.carousel = h;
        return this
    };
    var g = function(e) {
        var g, h = d(this),
            p = d(h.attr("data-target") || (g = h.attr("href")) && g.replace(/.*(?=#[^\s]+$)/, ""));
        if (p.hasClass("carousel")) {
            g =
                d.extend({}, p.data(), h.data());
            if (h = h.attr("data-slide-to")) g.interval = !1;
            l.call(p, g);
            h && p.data("bs.carousel").to(h);
            e.preventDefault()
        }
    };
    d(document).on("click.bs.carousel.data-api", "[data-slide]", g).on("click.bs.carousel.data-api", "[data-slide-to]", g);
    d(window).on("load", function() {
        d('[data-ride="carousel"]').each(function() {
            var e = d(this);
            l.call(e, e.data())
        })
    })
}(jQuery); +
function(d) {
    function l(e) {
        var g;
        e = e.attr("data-target") || (g = e.attr("href")) && g.replace(/.*(?=#[^\s]+$)/, "");
        return d(e)
    }

    function p(e) {
        return this.each(function() {
            var g = d(this),
                l = g.data("bs.collapse"),
                p = d.extend({}, h.DEFAULTS, g.data(), "object" == typeof e && e);
            !l && p.toggle && /show|hide/.test(e) && (p.toggle = !1);
            l || g.data("bs.collapse", l = new h(this, p));
            if ("string" == typeof e) l[e]()
        })
    }
    var h = function(e, g) {
        this.$element = d(e);
        this.options = d.extend({}, h.DEFAULTS, g);
        this.$trigger = d('[data-toggle="collapse"][href="#' +
            e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]');
        this.transitioning = null;
        this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger);
        this.options.toggle && this.toggle()
    };
    h.VERSION = "3.3.7";
    h.TRANSITION_DURATION = 350;
    h.DEFAULTS = {
        toggle: !0
    };
    h.prototype.dimension = function() {
        return this.$element.hasClass("width") ? "width" : "height"
    };
    h.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, g = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (g && g.length && (e = g.data("bs.collapse")) && e.transitioning) return;
            var l = d.Event("show.bs.collapse");
            this.$element.trigger(l);
            if (!l.isDefaultPrevented()) {
                g && g.length && (p.call(g, "hide"), e || g.data("bs.collapse", null));
                var w = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[w](0).attr("aria-expanded", !0);
                this.$trigger.removeClass("collapsed").attr("aria-expanded", !0);
                this.transitioning = 1;
                e = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[w]("");
                    this.transitioning =
                        0;
                    this.$element.trigger("shown.bs.collapse")
                };
                if (!d.support.transition) return e.call(this);
                g = d.camelCase(["scroll", w].join("-"));
                this.$element.one("bsTransitionEnd", d.proxy(e, this)).emulateTransitionEnd(h.TRANSITION_DURATION)[w](this.$element[0][g])
            }
        }
    };
    h.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = d.Event("hide.bs.collapse");
            this.$element.trigger(e);
            if (!e.isDefaultPrevented()) {
                e = this.dimension();
                this.$element[e](this.$element[e]())[0].offsetHeight;
                this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",
                    !1);
                this.$trigger.addClass("collapsed").attr("aria-expanded", !1);
                this.transitioning = 1;
                var g = function() {
                    this.transitioning = 0;
                    this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                if (!d.support.transition) return g.call(this);
                this.$element[e](0).one("bsTransitionEnd", d.proxy(g, this)).emulateTransitionEnd(h.TRANSITION_DURATION)
            }
        }
    };
    h.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    h.prototype.getParent = function() {
        return d(this.options.parent).find('[data-toggle="collapse"][data-parent="' +
            this.options.parent + '"]').each(d.proxy(function(e, g) {
            e = d(g);
            this.addAriaAndCollapsedClass(l(e), e)
        }, this)).end()
    };
    h.prototype.addAriaAndCollapsedClass = function(e, d) {
        var g = e.hasClass("in");
        e.attr("aria-expanded", g);
        d.toggleClass("collapsed", !g).attr("aria-expanded", g)
    };
    var g = d.fn.collapse;
    d.fn.collapse = p;
    d.fn.collapse.Constructor = h;
    d.fn.collapse.noConflict = function() {
        d.fn.collapse = g;
        return this
    };
    d(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(e) {
        var g = d(this);
        g.attr("data-target") ||
            e.preventDefault();
        e = l(g);
        g = e.data("bs.collapse") ? "toggle" : g.data();
        p.call(e, g)
    })
}(jQuery); +
function(d) {
    function l(e) {
        var g = e.attr("data-target");
        g || (g = (g = e.attr("href")) && /#[A-Za-z]/.test(g) && g.replace(/.*(?=#[^\s]*$)/, ""));
        return (g = g && d(g)) && g.length ? g : e.parent()
    }

    function p(e) {
        e && 3 === e.which || (d(".dropdown-backdrop").remove(), d('[data-toggle="dropdown"]').each(function() {
            var g = d(this),
                h = l(g),
                p = {
                    relatedTarget: this
                };
            !h.hasClass("open") || e && "click" == e.type && /input|textarea/i.test(e.target.tagName) && d.contains(h[0], e.target) || (h.trigger(e = d.Event("hide.bs.dropdown", p)), e.isDefaultPrevented() ||
                (g.attr("aria-expanded", "false"), h.removeClass("open").trigger(d.Event("hidden.bs.dropdown", p))))
        }))
    }
    var h = function(e) {
        d(e).on("click.bs.dropdown", this.toggle)
    };
    h.VERSION = "3.3.7";
    h.prototype.toggle = function(e) {
        var g = d(this);
        if (!g.is(".disabled, :disabled")) {
            var h = l(g);
            e = h.hasClass("open");
            p();
            if (!e) {
                if ("ontouchstart" in document.documentElement && !h.closest(".navbar-nav").length) d(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(d(this)).on("click", p);
                var w = {
                    relatedTarget: this
                };
                h.trigger(e = d.Event("show.bs.dropdown", w));
                if (e.isDefaultPrevented()) return;
                g.trigger("focus").attr("aria-expanded", "true");
                h.toggleClass("open").trigger(d.Event("shown.bs.dropdown", w))
            }
            return !1
        }
    };
    h.prototype.keydown = function(e) {
        if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName)) {
            var g = d(this);
            e.preventDefault();
            e.stopPropagation();
            if (!g.is(".disabled, :disabled")) {
                var h = l(g),
                    p = h.hasClass("open");
                if (!p && 27 != e.which || p && 27 == e.which) return 27 == e.which && h.find('[data-toggle="dropdown"]').trigger("focus"),
                    g.trigger("click");
                g = h.find(".dropdown-menu li:not(.disabled):visible a");
                g.length && (h = g.index(e.target), 38 == e.which && 0 < h && h--, 40 == e.which && h < g.length - 1 && h++, ~h || (h = 0), g.eq(h).trigger("focus"))
            }
        }
    };
    var g = d.fn.dropdown;
    d.fn.dropdown = function(e) {
        return this.each(function() {
            var g = d(this),
                l = g.data("bs.dropdown");
            l || g.data("bs.dropdown", l = new h(this));
            "string" == typeof e && l[e].call(g)
        })
    };
    d.fn.dropdown.Constructor = h;
    d.fn.dropdown.noConflict = function() {
        d.fn.dropdown = g;
        return this
    };
    d(document).on("click.bs.dropdown.data-api",
        p).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
        e.stopPropagation()
    }).on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', h.prototype.toggle).on("keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', h.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", h.prototype.keydown)
}(jQuery); +
function(d) {
    function l(g, e) {
        return this.each(function() {
            var k = d(this),
                h = k.data("bs.modal"),
                l = d.extend({}, p.DEFAULTS, k.data(), "object" == typeof g && g);
            h || k.data("bs.modal", h = new p(this, l));
            if ("string" == typeof g) h[g](e);
            else l.show && h.show(e)
        })
    }
    var p = function(g, e) {
        this.options = e;
        this.$body = d(document.body);
        this.$element = d(g);
        this.$dialog = this.$element.find(".modal-dialog");
        this.originalBodyPad = this.isShown = this.$backdrop = null;
        this.scrollbarWidth = 0;
        this.ignoreBackdropClick = !1;
        this.options.remote && this.$element.find(".modal-content").load(this.options.remote,
            d.proxy(function() {
                this.$element.trigger("loaded.bs.modal")
            }, this))
    };
    p.VERSION = "3.3.7";
    p.TRANSITION_DURATION = 300;
    p.BACKDROP_TRANSITION_DURATION = 150;
    p.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    };
    p.prototype.toggle = function(d) {
        return this.isShown ? this.hide() : this.show(d)
    };
    p.prototype.show = function(g) {
        var e = this,
            k = d.Event("show.bs.modal", {
                relatedTarget: g
            });
        this.$element.trigger(k);
        this.isShown || k.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"),
            this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', d.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
                e.$element.one("mouseup.dismiss.bs.modal", function(g) {
                    d(g.target).is(e.$element) && (e.ignoreBackdropClick = !0)
                })
            }), this.backdrop(function() {
                var k = d.support.transition && e.$element.hasClass("fade");
                e.$element.parent().length || e.$element.appendTo(e.$body);
                e.$element.show().scrollTop(0);
                e.adjustDialog();
                k && e.$element[0].offsetWidth;
                e.$element.addClass("in");
                e.enforceFocus();
                var h = d.Event("shown.bs.modal", {
                    relatedTarget: g
                });
                k ? e.$dialog.one("bsTransitionEnd", function() {
                    e.$element.trigger("focus").trigger(h)
                }).emulateTransitionEnd(p.TRANSITION_DURATION) : e.$element.trigger("focus").trigger(h)
            }))
    };
    p.prototype.hide = function(g) {
        g && g.preventDefault();
        g = d.Event("hide.bs.modal");
        this.$element.trigger(g);
        this.isShown && !g.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), d(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),
            this.$dialog.off("mousedown.dismiss.bs.modal"), d.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", d.proxy(this.hideModal, this)).emulateTransitionEnd(p.TRANSITION_DURATION) : this.hideModal())
    };
    p.prototype.enforceFocus = function() {
        d(document).off("focusin.bs.modal").on("focusin.bs.modal", d.proxy(function(d) {
            document === d.target || this.$element[0] === d.target || this.$element.has(d.target).length || this.$element.trigger("focus")
        }, this))
    };
    p.prototype.escape = function() {
        if (this.isShown &&
            this.options.keyboard) this.$element.on("keydown.dismiss.bs.modal", d.proxy(function(d) {
            27 == d.which && this.hide()
        }, this));
        else this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    };
    p.prototype.resize = function() {
        if (this.isShown) d(window).on("resize.bs.modal", d.proxy(this.handleUpdate, this));
        else d(window).off("resize.bs.modal")
    };
    p.prototype.hideModal = function() {
        var d = this;
        this.$element.hide();
        this.backdrop(function() {
            d.$body.removeClass("modal-open");
            d.resetAdjustments();
            d.resetScrollbar();
            d.$element.trigger("hidden.bs.modal")
        })
    };
    p.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove();
        this.$backdrop = null
    };
    p.prototype.backdrop = function(g) {
        var e = this,
            k = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var h = d.support.transition && k;
            this.$backdrop = d(document.createElement("div")).addClass("modal-backdrop " + k).appendTo(this.$body);
            this.$element.on("click.dismiss.bs.modal", d.proxy(function(e) {
                this.ignoreBackdropClick ? this.ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" ==
                    this.options.backdrop ? this.$element[0].focus() : this.hide())
            }, this));
            h && this.$backdrop[0].offsetWidth;
            this.$backdrop.addClass("in");
            g && (h ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(p.BACKDROP_TRANSITION_DURATION) : g())
        } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), k = function() {
            e.removeBackdrop();
            g && g()
        }, d.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", k).emulateTransitionEnd(p.BACKDROP_TRANSITION_DURATION) : k()) : g && g()
    };
    p.prototype.handleUpdate = function() {
        this.adjustDialog()
    };
    p.prototype.adjustDialog = function() {
        var d = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && d ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !d ? this.scrollbarWidth : ""
        })
    };
    p.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    };
    p.prototype.checkScrollbar = function() {
        var d = window.innerWidth;
        d || (d = document.documentElement.getBoundingClientRect(),
            d = d.right - Math.abs(d.left));
        this.bodyIsOverflowing = document.body.clientWidth < d;
        this.scrollbarWidth = this.measureScrollbar()
    };
    p.prototype.setScrollbar = function() {
        var d = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "";
        this.bodyIsOverflowing && this.$body.css("padding-right", d + this.scrollbarWidth)
    };
    p.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    };
    p.prototype.measureScrollbar = function() {
        var d = document.createElement("div");
        d.className = "modal-scrollbar-measure";
        this.$body.append(d);
        var e = d.offsetWidth - d.clientWidth;
        this.$body[0].removeChild(d);
        return e
    };
    var h = d.fn.modal;
    d.fn.modal = l;
    d.fn.modal.Constructor = p;
    d.fn.modal.noConflict = function() {
        d.fn.modal = h;
        return this
    };
    d(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(g) {
        var e = d(this),
            k = e.attr("href"),
            h = d(e.attr("data-target") || k && k.replace(/.*(?=#[^\s]+$)/, "")),
            k = h.data("bs.modal") ? "toggle" : d.extend({
                remote: !/#/.test(k) && k
            }, h.data(), e.data());
        e.is("a") &&
            g.preventDefault();
        h.one("show.bs.modal", function(d) {
            if (!d.isDefaultPrevented()) h.one("hidden.bs.modal", function() {
                e.is(":visible") && e.trigger("focus")
            })
        });
        l.call(h, k, this)
    })
}(jQuery); +
function(d) {
    var l = function(d, g) {
        this.inState = this.$element = this.hoverState = this.timeout = this.enabled = this.options = this.type = null;
        this.init("tooltip", d, g)
    };
    l.VERSION = "3.3.7";
    l.TRANSITION_DURATION = 150;
    l.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    };
    l.prototype.init = function(h, g,
        e) {
        this.enabled = !0;
        this.type = h;
        this.$element = d(g);
        this.options = this.getOptions(e);
        this.$viewport = this.options.viewport && d(d.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport);
        this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        };
        if (this.$element[0] instanceof document.constructor && !this.options.selector) throw Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        h = this.options.trigger.split(" ");
        for (g = h.length; g--;)
            if (e = h[g], "click" == e) this.$element.on("click." + this.type, this.options.selector, d.proxy(this.toggle, this));
            else if ("manual" != e) {
            var k = "hover" == e ? "mouseleave" : "focusout";
            this.$element.on(("hover" == e ? "mouseenter" : "focusin") + "." + this.type, this.options.selector, d.proxy(this.enter, this));
            this.$element.on(k + "." + this.type, this.options.selector, d.proxy(this.leave, this))
        }
        this.options.selector ? this._options = d.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    };
    l.prototype.getDefaults =
        function() {
            return l.DEFAULTS
        };
    l.prototype.getOptions = function(h) {
        h = d.extend({}, this.getDefaults(), this.$element.data(), h);
        h.delay && "number" == typeof h.delay && (h.delay = {
            show: h.delay,
            hide: h.delay
        });
        return h
    };
    l.prototype.getDelegateOptions = function() {
        var h = {},
            g = this.getDefaults();
        this._options && d.each(this._options, function(e, d) {
            g[e] != d && (h[e] = d)
        });
        return h
    };
    l.prototype.enter = function(h) {
        var g = h instanceof this.constructor ? h : d(h.currentTarget).data("bs." + this.type);
        g || (g = new this.constructor(h.currentTarget,
            this.getDelegateOptions()), d(h.currentTarget).data("bs." + this.type, g));
        h instanceof d.Event && (g.inState["focusin" == h.type ? "focus" : "hover"] = !0);
        if (g.tip().hasClass("in") || "in" == g.hoverState) g.hoverState = "in";
        else {
            clearTimeout(g.timeout);
            g.hoverState = "in";
            if (!g.options.delay || !g.options.delay.show) return g.show();
            g.timeout = setTimeout(function() {
                "in" == g.hoverState && g.show()
            }, g.options.delay.show)
        }
    };
    l.prototype.isInStateTrue = function() {
        for (var d in this.inState)
            if (this.inState[d]) return !0;
        return !1
    };
    l.prototype.leave =
        function(h) {
            var g = h instanceof this.constructor ? h : d(h.currentTarget).data("bs." + this.type);
            g || (g = new this.constructor(h.currentTarget, this.getDelegateOptions()), d(h.currentTarget).data("bs." + this.type, g));
            h instanceof d.Event && (g.inState["focusout" == h.type ? "focus" : "hover"] = !1);
            if (!g.isInStateTrue()) {
                clearTimeout(g.timeout);
                g.hoverState = "out";
                if (!g.options.delay || !g.options.delay.hide) return g.hide();
                g.timeout = setTimeout(function() {
                    "out" == g.hoverState && g.hide()
                }, g.options.delay.hide)
            }
        };
    l.prototype.show =
        function() {
            var h = d.Event("show.bs." + this.type);
            if (this.hasContent() && this.enabled) {
                this.$element.trigger(h);
                var g = d.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                if (!h.isDefaultPrevented() && g) {
                    var e = this,
                        h = this.tip(),
                        g = this.getUID(this.type);
                    this.setContent();
                    h.attr("id", g);
                    this.$element.attr("aria-describedby", g);
                    this.options.animation && h.addClass("fade");
                    var g = "function" == typeof this.options.placement ? this.options.placement.call(this, h[0], this.$element[0]) : this.options.placement,
                        k = /\s?auto?\s?/i,
                        p = k.test(g);
                    p && (g = g.replace(k, "") || "top");
                    h.detach().css({
                        top: 0,
                        left: 0,
                        display: "block"
                    }).addClass(g).data("bs." + this.type, this);
                    this.options.container ? h.appendTo(this.options.container) : h.insertAfter(this.$element);
                    this.$element.trigger("inserted.bs." + this.type);
                    var k = this.getPosition(),
                        w = h[0].offsetWidth,
                        r = h[0].offsetHeight;
                    if (p) {
                        var p = g,
                            u = this.getPosition(this.$viewport),
                            g = "bottom" == g && k.bottom + r > u.bottom ? "top" : "top" == g && k.top - r < u.top ? "bottom" : "right" == g && k.right + w > u.width ? "left" :
                            "left" == g && k.left - w < u.left ? "right" : g;
                        h.removeClass(p).addClass(g)
                    }
                    k = this.getCalculatedOffset(g, k, w, r);
                    this.applyPlacement(k, g);
                    g = function() {
                        var d = e.hoverState;
                        e.$element.trigger("shown.bs." + e.type);
                        e.hoverState = null;
                        "out" == d && e.leave(e)
                    };
                    d.support.transition && this.$tip.hasClass("fade") ? h.one("bsTransitionEnd", g).emulateTransitionEnd(l.TRANSITION_DURATION) : g()
                }
            }
        };
    l.prototype.applyPlacement = function(h, g) {
        var e = this.tip(),
            k = e[0].offsetWidth,
            l = e[0].offsetHeight,
            p = parseInt(e.css("margin-top"), 10),
            r = parseInt(e.css("margin-left"),
                10);
        isNaN(p) && (p = 0);
        isNaN(r) && (r = 0);
        h.top += p;
        h.left += r;
        d.offset.setOffset(e[0], d.extend({
            using: function(d) {
                e.css({
                    top: Math.round(d.top),
                    left: Math.round(d.left)
                })
            }
        }, h), 0);
        e.addClass("in");
        p = e[0].offsetWidth;
        r = e[0].offsetHeight;
        "top" == g && r != l && (h.top = h.top + l - r);
        var u = this.getViewportAdjustedDelta(g, h, p, r);
        u.left ? h.left += u.left : h.top += u.top;
        k = (g = /top|bottom/.test(g)) ? 2 * u.left - k + p : 2 * u.top - l + r;
        l = g ? "offsetWidth" : "offsetHeight";
        e.offset(h);
        this.replaceArrow(k, e[0][l], g)
    };
    l.prototype.replaceArrow = function(d,
        g, e) {
        this.arrow().css(e ? "left" : "top", 50 * (1 - d / g) + "%").css(e ? "top" : "left", "")
    };
    l.prototype.setContent = function() {
        var d = this.tip(),
            g = this.getTitle();
        d.find(".tooltip-inner")[this.options.html ? "html" : "text"](g);
        d.removeClass("fade in top bottom left right")
    };
    l.prototype.hide = function(h) {
        function g() {
            "in" != e.hoverState && k.detach();
            e.$element && e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type);
            h && h()
        }
        var e = this,
            k = d(this.$tip),
            p = d.Event("hide.bs." + this.type);
        this.$element.trigger(p);
        if (!p.isDefaultPrevented()) return k.removeClass("in"), d.support.transition && k.hasClass("fade") ? k.one("bsTransitionEnd", g).emulateTransitionEnd(l.TRANSITION_DURATION) : g(), this.hoverState = null, this
    };
    l.prototype.fixTitle = function() {
        var d = this.$element;
        (d.attr("title") || "string" != typeof d.attr("data-original-title")) && d.attr("data-original-title", d.attr("title") || "").attr("title", "")
    };
    l.prototype.hasContent = function() {
        return this.getTitle()
    };
    l.prototype.getPosition = function(h) {
        h = h || this.$element;
        var g =
            h[0],
            e = "BODY" == g.tagName,
            k = g.getBoundingClientRect();
        null == k.width && (k = d.extend({}, k, {
            width: k.right - k.left,
            height: k.bottom - k.top
        }));
        g = window.SVGElement && g instanceof window.SVGElement;
        g = e ? {
            top: 0,
            left: 0
        } : g ? null : h.offset();
        h = {
            scroll: e ? document.documentElement.scrollTop || document.body.scrollTop : h.scrollTop()
        };
        e = e ? {
            width: d(window).width(),
            height: d(window).height()
        } : null;
        return d.extend({}, k, h, e, g)
    };
    l.prototype.getCalculatedOffset = function(d, g, e, k) {
        return "bottom" == d ? {
            top: g.top + g.height,
            left: g.left + g.width /
                2 - e / 2
        } : "top" == d ? {
            top: g.top - k,
            left: g.left + g.width / 2 - e / 2
        } : "left" == d ? {
            top: g.top + g.height / 2 - k / 2,
            left: g.left - e
        } : {
            top: g.top + g.height / 2 - k / 2,
            left: g.left + g.width
        }
    };
    l.prototype.getViewportAdjustedDelta = function(d, g, e, k) {
        var l = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return l;
        var p = this.options.viewport && this.options.viewport.padding || 0,
            r = this.getPosition(this.$viewport);
        /right|left/.test(d) ? (e = g.top - p - r.scroll, g = g.top + p - r.scroll + k, e < r.top ? l.top = r.top - e : g > r.top + r.height && (l.top = r.top + r.height - g)) : (k = g.left - p, g = g.left +
            p + e, k < r.left ? l.left = r.left - k : g > r.right && (l.left = r.left + r.width - g));
        return l
    };
    l.prototype.getTitle = function() {
        var d = this.$element,
            g = this.options;
        return d.attr("data-original-title") || ("function" == typeof g.title ? g.title.call(d[0]) : g.title)
    };
    l.prototype.getUID = function(d) {
        do d += ~~(1E6 * Math.random()); while (document.getElementById(d));
        return d
    };
    l.prototype.tip = function() {
        if (!this.$tip && (this.$tip = d(this.options.template), 1 != this.$tip.length)) throw Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    };
    l.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    };
    l.prototype.enable = function() {
        this.enabled = !0
    };
    l.prototype.disable = function() {
        this.enabled = !1
    };
    l.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    };
    l.prototype.toggle = function(h) {
        var g = this;
        h && (g = d(h.currentTarget).data("bs." + this.type), g || (g = new this.constructor(h.currentTarget, this.getDelegateOptions()), d(h.currentTarget).data("bs." + this.type, g)));
        h ? (g.inState.click = !g.inState.click,
            g.isInStateTrue() ? g.enter(g) : g.leave(g)) : g.tip().hasClass("in") ? g.leave(g) : g.enter(g)
    };
    l.prototype.destroy = function() {
        var d = this;
        clearTimeout(this.timeout);
        this.hide(function() {
            d.$element.off("." + d.type).removeData("bs." + d.type);
            d.$tip && d.$tip.detach();
            d.$tip = null;
            d.$arrow = null;
            d.$viewport = null;
            d.$element = null
        })
    };
    var p = d.fn.tooltip;
    d.fn.tooltip = function(h) {
        return this.each(function() {
            var g = d(this),
                e = g.data("bs.tooltip"),
                k = "object" == typeof h && h;
            if (e || !/destroy|hide/.test(h))
                if (e || g.data("bs.tooltip",
                        e = new l(this, k)), "string" == typeof h) e[h]()
        })
    };
    d.fn.tooltip.Constructor = l;
    d.fn.tooltip.noConflict = function() {
        d.fn.tooltip = p;
        return this
    }
}(jQuery); +
function(d) {
    var l = function(d, g) {
        this.init("popover", d, g)
    };
    if (!d.fn.tooltip) throw Error("Popover requires tooltip.js");
    l.VERSION = "3.3.7";
    l.DEFAULTS = d.extend({}, d.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    });
    l.prototype = d.extend({}, d.fn.tooltip.Constructor.prototype);
    l.prototype.constructor = l;
    l.prototype.getDefaults = function() {
        return l.DEFAULTS
    };
    l.prototype.setContent = function() {
        var d = this.tip(),
            g = this.getTitle(),
            e = this.getContent();
        d.find(".popover-title")[this.options.html ? "html" : "text"](g);
        d.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof e ? "html" : "append" : "text"](e);
        d.removeClass("fade top bottom left right in");
        d.find(".popover-title").html() || d.find(".popover-title").hide()
    };
    l.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    };
    l.prototype.getContent = function() {
        var d = this.$element,
            g = this.options;
        return d.attr("data-content") || ("function" == typeof g.content ? g.content.call(d[0]) : g.content)
    };
    l.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var p = d.fn.popover;
    d.fn.popover = function(h) {
        return this.each(function() {
            var g = d(this),
                e = g.data("bs.popover"),
                k = "object" == typeof h && h;
            if (e || !/destroy|hide/.test(h))
                if (e || g.data("bs.popover", e = new l(this, k)), "string" == typeof h) e[h]()
        })
    };
    d.fn.popover.Constructor = l;
    d.fn.popover.noConflict = function() {
        d.fn.popover =
            p;
        return this
    }
}(jQuery); +
function(d) {
    function l(g, e) {
        this.$body = d(document.body);
        this.$scrollElement = d(g).is(document.body) ? d(window) : d(g);
        this.options = d.extend({}, l.DEFAULTS, e);
        this.selector = (this.options.target || "") + " .nav li > a";
        this.offsets = [];
        this.targets = [];
        this.activeTarget = null;
        this.scrollHeight = 0;
        this.$scrollElement.on("scroll.bs.scrollspy", d.proxy(this.process, this));
        this.refresh();
        this.process()
    }

    function p(g) {
        return this.each(function() {
            var e = d(this),
                k = e.data("bs.scrollspy"),
                h = "object" == typeof g && g;
            k || e.data("bs.scrollspy",
                k = new l(this, h));
            if ("string" == typeof g) k[g]()
        })
    }
    l.VERSION = "3.3.7";
    l.DEFAULTS = {
        offset: 10
    };
    l.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    };
    l.prototype.refresh = function() {
        var g = this,
            e = "offset",
            k = 0;
        this.offsets = [];
        this.targets = [];
        this.scrollHeight = this.getScrollHeight();
        d.isWindow(this.$scrollElement[0]) || (e = "position", k = this.$scrollElement.scrollTop());
        this.$body.find(this.selector).map(function() {
            var g =
                d(this),
                g = g.data("target") || g.attr("href"),
                h = /^#./.test(g) && d(g);
            return h && h.length && h.is(":visible") && [
                [h[e]().top + k, g]
            ] || null
        }).sort(function(d, e) {
            return d[0] - e[0]
        }).each(function() {
            g.offsets.push(this[0]);
            g.targets.push(this[1])
        })
    };
    l.prototype.process = function() {
        var d = this.$scrollElement.scrollTop() + this.options.offset,
            e = this.getScrollHeight(),
            k = this.options.offset + e - this.$scrollElement.height(),
            h = this.offsets,
            l = this.targets,
            p = this.activeTarget,
            u;
        this.scrollHeight != e && this.refresh();
        if (d >= k) return p !=
            (u = l[l.length - 1]) && this.activate(u);
        if (p && d < h[0]) return this.activeTarget = null, this.clear();
        for (u = h.length; u--;) p != l[u] && d >= h[u] && (void 0 === h[u + 1] || d < h[u + 1]) && this.activate(l[u])
    };
    l.prototype.activate = function(g) {
        this.activeTarget = g;
        this.clear();
        g = d(this.selector + '[data-target="' + g + '"],' + this.selector + '[href="' + g + '"]').parents("li").addClass("active");
        g.parent(".dropdown-menu").length && (g = g.closest("li.dropdown").addClass("active"));
        g.trigger("activate.bs.scrollspy")
    };
    l.prototype.clear = function() {
        d(this.selector).parentsUntil(this.options.target,
            ".active").removeClass("active")
    };
    var h = d.fn.scrollspy;
    d.fn.scrollspy = p;
    d.fn.scrollspy.Constructor = l;
    d.fn.scrollspy.noConflict = function() {
        d.fn.scrollspy = h;
        return this
    };
    d(window).on("load.bs.scrollspy.data-api", function() {
        d('[data-spy="scroll"]').each(function() {
            var g = d(this);
            p.call(g, g.data())
        })
    })
}(jQuery); +
function(d) {
    function l(e) {
        return this.each(function() {
            var g = d(this),
                h = g.data("bs.tab");
            h || g.data("bs.tab", h = new p(this));
            if ("string" == typeof e) h[e]()
        })
    }
    var p = function(e) {
        this.element = d(e)
    };
    p.VERSION = "3.3.7";
    p.TRANSITION_DURATION = 150;
    p.prototype.show = function() {
        var e = this.element,
            g = e.closest("ul:not(.dropdown-menu)"),
            h = e.data("target");
        h || (h = (h = e.attr("href")) && h.replace(/.*(?=#[^\s]*$)/, ""));
        if (!e.parent("li").hasClass("active")) {
            var l = g.find(".active:last a"),
                p = d.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                u = d.Event("show.bs.tab", {
                    relatedTarget: l[0]
                });
            l.trigger(p);
            e.trigger(u);
            u.isDefaultPrevented() || p.isDefaultPrevented() || (h = d(h), this.activate(e.closest("li"), g), this.activate(h, h.parent(), function() {
                l.trigger({
                    type: "hidden.bs.tab",
                    relatedTarget: e[0]
                });
                e.trigger({
                    type: "shown.bs.tab",
                    relatedTarget: l[0]
                })
            }))
        }
    };
    p.prototype.activate = function(e, g, h) {
        function l() {
            r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1);
            e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",
                !0);
            u ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade");
            e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0);
            h && h()
        }
        var r = g.find("> .active"),
            u = h && d.support.transition && (r.length && r.hasClass("fade") || !!g.find("> .fade").length);
        r.length && u ? r.one("bsTransitionEnd", l).emulateTransitionEnd(p.TRANSITION_DURATION) : l();
        r.removeClass("in")
    };
    var h = d.fn.tab;
    d.fn.tab = l;
    d.fn.tab.Constructor = p;
    d.fn.tab.noConflict = function() {
        d.fn.tab =
            h;
        return this
    };
    var g = function(e) {
        e.preventDefault();
        l.call(d(this), "show")
    };
    d(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', g).on("click.bs.tab.data-api", '[data-toggle="pill"]', g)
}(jQuery); +
function(d) {
    function l(g) {
        return this.each(function() {
            var e = d(this),
                k = e.data("bs.affix"),
                h = "object" == typeof g && g;
            k || e.data("bs.affix", k = new p(this, h));
            if ("string" == typeof g) k[g]()
        })
    }
    var p = function(g, e) {
        this.options = d.extend({}, p.DEFAULTS, e);
        this.$target = d(this.options.target).on("scroll.bs.affix.data-api", d.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", d.proxy(this.checkPositionWithEventLoop, this));
        this.$element = d(g);
        this.pinnedOffset = this.unpin = this.affixed = null;
        this.checkPosition()
    };
    p.VERSION = "3.3.7";
    p.RESET = "affix affix-top affix-bottom";
    p.DEFAULTS = {
        offset: 0,
        target: window
    };
    p.prototype.getState = function(d, e, k, h) {
        var l = this.$target.scrollTop(),
            p = this.$element.offset(),
            u = this.$target.height();
        if (null != k && "top" == this.affixed) return l < k ? "top" : !1;
        if ("bottom" == this.affixed) return null != k ? l + this.unpin <= p.top ? !1 : "bottom" : l + u <= d - h ? !1 : "bottom";
        var O = null == this.affixed,
            p = O ? l : p.top;
        return null != k && l <= k ? "top" : null != h && p + (O ? u : e) >= d - h ? "bottom" : !1
    };
    p.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(p.RESET).addClass("affix");
        var d = this.$target.scrollTop();
        return this.pinnedOffset = this.$element.offset().top - d
    };
    p.prototype.checkPositionWithEventLoop = function() {
        setTimeout(d.proxy(this.checkPosition, this), 1)
    };
    p.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var g = this.$element.height(),
                e = this.options.offset,
                h = e.top,
                l = e.bottom,
                w = Math.max(d(document).height(), d(document.body).height());
            "object" != typeof e && (l = h = e);
            "function" == typeof h && (h = e.top(this.$element));
            "function" == typeof l && (l = e.bottom(this.$element));
            e = this.getState(w, g, h, l);
            if (this.affixed != e) {
                null != this.unpin && this.$element.css("top", "");
                var h = "affix" + (e ? "-" + e : ""),
                    r = d.Event(h + ".bs.affix");
                this.$element.trigger(r);
                if (r.isDefaultPrevented()) return;
                this.affixed = e;
                this.unpin = "bottom" == e ? this.getPinnedOffset() : null;
                this.$element.removeClass(p.RESET).addClass(h).trigger(h.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == e && this.$element.offset({
                top: w - g - l
            })
        }
    };
    var h = d.fn.affix;
    d.fn.affix = l;
    d.fn.affix.Constructor =
        p;
    d.fn.affix.noConflict = function() {
        d.fn.affix = h;
        return this
    };
    d(window).on("load", function() {
        d('[data-spy="affix"]').each(function() {
            var g = d(this),
                e = g.data();
            e.offset = e.offset || {};
            null != e.offsetBottom && (e.offset.bottom = e.offsetBottom);
            null != e.offsetTop && (e.offset.top = e.offsetTop);
            l.call(g, e)
        })
    })
}(jQuery);
! function(d) {
    d.matchMedia = d.matchMedia || function(d) {
        var p, h = d.documentElement,
            g = h.firstElementChild || h.firstChild,
            e = d.createElement("body"),
            k = d.createElement("div");
        return k.id = "mq-test-1", k.style.cssText = "position:absolute;top:-100em", e.style.background = "none", e.appendChild(k),
            function(d) {
                return k.innerHTML = '&shy;<style media="' + d + '"> #mq-test-1 { width: 42px; }</style>', h.insertBefore(e, g), p = 42 === k.offsetWidth, h.removeChild(e), {
                    matches: p,
                    media: d
                }
            }
    }(d.document)
}(this);
(function(d) {
    function l() {
        D(!0)
    }
    var p = {};
    d.respond = p;
    p.update = function() {};
    var h = [],
        g = function() {
            var e = !1;
            try {
                e = new d.XMLHttpRequest
            } catch (g) {
                e = new d.ActiveXObject("Microsoft.XMLHTTP")
            }
            return function() {
                return e
            }
        }(),
        e = function(d, e) {
            var h = g();
            h && (h.open("GET", d, !0), h.onreadystatechange = function() {
                4 !== h.readyState || 200 !== h.status && 304 !== h.status || e(h.responseText)
            }, 4 !== h.readyState && h.send(null))
        };
    if (p.ajax = e, p.queue = h, p.regex = {
            media: /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,
            keyframes: /@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,
            urls: /(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,
            findStyles: /@media *([^\{]+)\{([\S\s]+?)$/,
            only: /(only\s+)?([a-zA-Z]+)\s?/,
            minw: /\([\s]*min\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/,
            maxw: /\([\s]*max\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/
        }, p.mediaQueriesSupported = d.matchMedia && null !== d.matchMedia("only all") && d.matchMedia("only all").matches, !p.mediaQueriesSupported) {
        var k, q, w, r = d.document,
            u = r.documentElement,
            O = [],
            J = [],
            S = [],
            I = {},
            N = r.getElementsByTagName("head")[0] || u,
            Ha = r.getElementsByTagName("base")[0],
            ma = N.getElementsByTagName("link"),
            aa = function() {
                var d, e = r.createElement("div"),
                    g = r.body,
                    h = u.style.fontSize,
                    k = g && g.style.fontSize,
                    l = !1;
                return e.style.cssText = "position:absolute;font-size:1em;width:1em", g || (g = l = r.createElement("body"), g.style.background = "none"), u.style.fontSize = "100%", g.style.fontSize = "100%", g.appendChild(e), l && u.insertBefore(g, u.firstChild), d = e.offsetWidth, l ? u.removeChild(g) : g.removeChild(e), u.style.fontSize = h, k && (g.style.fontSize = k), w = parseFloat(d)
            },
            D = function(e) {
                var g = u.clientWidth,
                    h = "CSS1Compat" === r.compatMode && g || r.body.clientWidth || g,
                    g = {},
                    l = ma[ma.length - 1],
                    p = (new Date).getTime();
                if (e && k && 30 > p - k) return d.clearTimeout(q), q = d.setTimeout(D, 30), void 0;
                k = p;
                for (var L in O)
                    if (O.hasOwnProperty(L)) {
                        e = O[L];
                        var p = e.minw,
                            I = e.maxw,
                            X = null === p,
                            ba = null === I;
                        p && (p = parseFloat(p) * (-1 < p.indexOf("em") ? w || aa() : 1));
                        I && (I = parseFloat(I) * (-1 < I.indexOf("em") ? w || aa() : 1));
                        e.hasquery && (X && ba || !(X || h >= p) || !(ba || I >= h)) || (g[e.media] || (g[e.media] = []), g[e.media].push(J[e.rules]))
                    } for (var M in S) S.hasOwnProperty(M) &&
                    S[M] && S[M].parentNode === N && N.removeChild(S[M]);
                S.length = 0;
                for (var Y in g) g.hasOwnProperty(Y) && (L = r.createElement("style"), M = g[Y].join("\n"), L.type = "text/css", L.media = Y, N.insertBefore(L, l.nextSibling), L.styleSheet ? L.styleSheet.cssText = M : L.appendChild(r.createTextNode(M)), S.push(L))
            },
            ea = function(d, e, g) {
                var h = d.replace(p.regex.keyframes, "").match(p.regex.media),
                    k = h && h.length || 0;
                e = e.substring(0, e.lastIndexOf("/"));
                var l = !k && g;
                e.length && (e += "/");
                l && (k = 1);
                for (var q = 0; k > q; q++) {
                    var r, u, w, I;
                    l ? (r = g, J.push(d.replace(p.regex.urls,
                        "$1" + e + "$2$3"))) : (r = h[q].match(p.regex.findStyles) && RegExp.$1, J.push(RegExp.$2 && RegExp.$2.replace(p.regex.urls, "$1" + e + "$2$3")));
                    w = r.split(",");
                    I = w.length;
                    for (var N = 0; I > N; N++) u = w[N], O.push({
                        media: u.split("(")[0].match(p.regex.only) && RegExp.$2 || "all",
                        rules: J.length - 1,
                        hasquery: -1 < u.indexOf("("),
                        minw: u.match(p.regex.minw) && parseFloat(RegExp.$1) + (RegExp.$2 || ""),
                        maxw: u.match(p.regex.maxw) && parseFloat(RegExp.$1) + (RegExp.$2 || "")
                    })
                }
                D()
            },
            ya = function() {
                if (h.length) {
                    var g = h.shift();
                    e(g.href, function(e) {
                        ea(e,
                            g.href, g.media);
                        I[g.href] = !0;
                        d.setTimeout(function() {
                            ya()
                        }, 0)
                    })
                }
            },
            na = function() {
                for (var e = 0; e < ma.length; e++) {
                    var g = ma[e],
                        k = g.href,
                        l = g.media,
                        p = g.rel && "stylesheet" === g.rel.toLowerCase();
                    k && p && !I[k] && (g.styleSheet && g.styleSheet.rawCssText ? (ea(g.styleSheet.rawCssText, k, l), I[k] = !0) : (!/^([a-zA-Z:]*\/\/)/.test(k) && !Ha || k.replace(RegExp.$1, "").split("/")[0] === d.location.host) && ("//" === k.substring(0, 2) && (k = d.location.protocol + k), h.push({
                        href: k,
                        media: l
                    })))
                }
                ya()
            };
        na();
        p.update = na;
        p.getEmValue = aa;
        d.addEventListener ?
            d.addEventListener("resize", l, !1) : d.attachEvent && d.attachEvent("onresize", l)
    }
})(this);

function isIE(d, l) {
    var p = "IE",
        h = document.createElement("B"),
        g = document.documentElement;
    d && (p += " " + d, l && (p = l + " " + p));
    h.innerHTML = "\x3c!--[if " + p + ']><b id="iecctest"></b><![endif]--\x3e';
    g.appendChild(h);
    d = !!document.getElementById("iecctest");
    g.removeChild(h);
    return d
}

function openNotificationModal(d, l, p) {
    l = l || "Notification";
    p = p || "Close";
    var h = $("#notificationModal");
    h.find(".modal-body").html(d);
    h.find(".modal-title").text(l);
    h.find(".close-button").text(p);
    h.modal("show")
}
if (!window.original$ajax) {
    window.original$ajax = $.ajax;
    $.ajaxSetup({
        beforeSend: function(d) {
            d.setRequestHeader("nopage", !0)
        }
    });
    var patched$ajax = function(d) {
        var l = $.extend({}, d, {}),
            p = "/login/authenticate" !== d.url;
        l.fail = function(h, g, e) {
            401 === h.status && p ? (window.failedAjaxOptions = l, $("#loginModal").modal({
                show: !0
            })) : "function" === typeof d.fail ? d.fail(h, g, e) : openNotificationModal("Please try again. If you continue to experience issues, please <a href='/contact/form'>contact customer support</a>.", e)
        };
        return window.original$ajax(l)
    };
    $.ajax = patched$ajax
}
Array.prototype.indexOf || (Array.prototype.indexOf = function(d, l) {
    var p = this.length >>> 0;
    l = Number(l) || 0;
    l = 0 > l ? Math.ceil(l) : Math.floor(l);
    for (0 > l && (l += p); l < p; l++)
        if (l in this && this[l] === d) return l;
    return -1
});
var BigApplication = function(d, l, p) {
    return {
        goToPage: function(h) {
            d(h).find("option:selected").each(function() {
                l.location.href = d(this).val()
            })
        }
    }
}(window.jQuery, window);
Function.prototype.bind || (Function.prototype.bind = function(d) {
    if ("function" !== typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    var l = Array.prototype.slice.call(arguments, 1),
        p = this,
        h = function() {},
        g = function() {
            return p.apply(this instanceof h && d ? this : d, l.concat(Array.prototype.slice.call(arguments)))
        };
    h.prototype = this.prototype;
    g.prototype = new h;
    return g
});
