if (function(a, b) { "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) { if (!a.document) throw new Error("jQuery requires a window with a document"); return b(a) } : b(a) }("undefined" != typeof window ? window : this, function(a, b) {
        function c(a) { var b = "length" in a && a.length,
                c = _.type(a); return "function" === c || _.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a }

        function d(a, b, c) { if (_.isFunction(b)) return _.grep(a, function(a, d) { return !!b.call(a, d, a) !== c }); if (b.nodeType) return _.grep(a, function(a) { return a === b !== c }); if ("string" == typeof b) { if (ha.test(b)) return _.filter(b, a, c);
                b = _.filter(b, a) } return _.grep(a, function(a) { return U.call(b, a) >= 0 !== c }) }

        function e(a, b) { for (;
                (a = a[b]) && 1 !== a.nodeType;); return a }

        function f(a) { var b = oa[a] = {}; return _.each(a.match(na) || [], function(a, c) { b[c] = !0 }), b }

        function g() { Z.removeEventListener("DOMContentLoaded", g, !1), a.removeEventListener("load", g, !1), _.ready() }

        function h() { Object.defineProperty(this.cache = {}, 0, { get: function() { return {} } }), this.expando = _.expando + h.uid++ }

        function i(a, b, c) { var d; if (void 0 === c && 1 === a.nodeType)
                if (d = "data-" + b.replace(ua, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) { try { c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : ta.test(c) ? _.parseJSON(c) : c } catch (e) {}
                    sa.set(a, b, c) } else c = void 0;
            return c }

        function j() { return !0 }

        function k() { return !1 }

        function l() { try { return Z.activeElement } catch (a) {} }

        function m(a, b) { return _.nodeName(a, "table") && _.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a }

        function n(a) { return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a }

        function o(a) { var b = Ka.exec(a.type); return b ? a.type = b[1] : a.removeAttribute("type"), a }

        function p(a, b) { for (var c = 0, d = a.length; d > c; c++) ra.set(a[c], "globalEval", !b || ra.get(b[c], "globalEval")) }

        function q(a, b) { var c, d, e, f, g, h, i, j; if (1 === b.nodeType) { if (ra.hasData(a) && (f = ra.access(a), g = ra.set(b, f), j = f.events)) { delete g.handle, g.events = {}; for (e in j)
                        for (c = 0, d = j[e].length; d > c; c++) _.event.add(b, e, j[e][c]) }
                sa.hasData(a) && (h = sa.access(a), i = _.extend({}, h), sa.set(b, i)) } }

        function r(a, b) { var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : []; return void 0 === b || b && _.nodeName(a, b) ? _.merge([a], c) : c }

        function s(a, b) { var c = b.nodeName.toLowerCase(); "input" === c && ya.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue) }

        function t(b, c) { var d, e = _(c.createElement(b)).appendTo(c.body),
                f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : _.css(e[0], "display"); return e.detach(), f }

        function u(a) { var b = Z,
                c = Oa[a]; return c || (c = t(a, b), "none" !== c && c || (Na = (Na || _("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = Na[0].contentDocument, b.write(), b.close(), c = t(a, b), Na.detach()), Oa[a] = c), c }

        function v(a, b, c) { var d, e, f, g, h = a.style; return c = c || Ra(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || _.contains(a.ownerDocument, a) || (g = _.style(a, b)), Qa.test(g) && Pa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g }

        function w(a, b) { return { get: function() { return a() ? void delete this.get : (this.get = b).apply(this, arguments) } } }

        function x(a, b) { if (b in a) return b; for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Xa.length; e--;)
                if (b = Xa[e] + c, b in a) return b;
            return d }

        function y(a, b, c) { var d = Ta.exec(b); return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b }

        function z(a, b, c, d, e) { for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += _.css(a, c + wa[f], !0, e)), d ? ("content" === c && (g -= _.css(a, "padding" + wa[f], !0, e)), "margin" !== c && (g -= _.css(a, "border" + wa[f] + "Width", !0, e))) : (g += _.css(a, "padding" + wa[f], !0, e), "padding" !== c && (g += _.css(a, "border" + wa[f] + "Width", !0, e))); return g }

        function A(a, b, c) { var d = !0,
                e = "width" === b ? a.offsetWidth : a.offsetHeight,
                f = Ra(a),
                g = "border-box" === _.css(a, "boxSizing", !1, f); if (0 >= e || null == e) { if (e = v(a, b, f), (0 > e || null == e) && (e = a.style[b]), Qa.test(e)) return e;
                d = g && (Y.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0 } return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px" }

        function B(a, b) { for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = ra.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && xa(d) && (f[g] = ra.access(d, "olddisplay", u(d.nodeName)))) : (e = xa(d), "none" === c && e || ra.set(d, "olddisplay", e ? c : _.css(d, "display")))); for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none")); return a }

        function C(a, b, c, d, e) { return new C.prototype.init(a, b, c, d, e) }

        function D() { return setTimeout(function() { Ya = void 0 }), Ya = _.now() }

        function E(a, b) { var c, d = 0,
                e = { height: a }; for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = wa[d], e["margin" + c] = e["padding" + c] = a; return b && (e.opacity = e.width = a), e }

        function F(a, b, c) { for (var d, e = (cb[b] || []).concat(cb["*"]), f = 0, g = e.length; g > f; f++)
                if (d = e[f].call(c, b, a)) return d }

        function G(a, b, c) { var d, e, f, g, h, i, j, k, l = this,
                m = {},
                n = a.style,
                o = a.nodeType && xa(a),
                p = ra.get(a, "fxshow");
            c.queue || (h = _._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() { h.unqueued || i() }), h.unqueued++, l.always(function() { l.always(function() { h.unqueued--, _.queue(a, "fx").length || h.empty.fire() }) })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = _.css(a, "display"), k = "none" === j ? ra.get(a, "olddisplay") || u(a.nodeName) : j, "inline" === k && "none" === _.css(a, "float") && (n.display = "inline-block")), c.overflow && (n.overflow = "hidden", l.always(function() { n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2] })); for (d in b)
                if (e = b[d], $a.exec(e)) { if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) { if ("show" !== e || !p || void 0 === p[d]) continue;
                        o = !0 }
                    m[d] = p && p[d] || _.style(a, d) } else j = void 0;
            if (_.isEmptyObject(m)) "inline" === ("none" === j ? u(a.nodeName) : j) && (n.display = j);
            else { p ? "hidden" in p && (o = p.hidden) : p = ra.access(a, "fxshow", {}), f && (p.hidden = !o), o ? _(a).show() : l.done(function() { _(a).hide() }), l.done(function() { var b;
                    ra.remove(a, "fxshow"); for (b in m) _.style(a, b, m[b]) }); for (d in m) g = F(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0)) } }

        function H(a, b) { var c, d, e, f, g; for (c in a)
                if (d = _.camelCase(c), e = b[d], f = a[c], _.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = _.cssHooks[d], g && "expand" in g) { f = g.expand(f), delete a[d]; for (c in f) c in a || (a[c] = f[c], b[c] = e) } else b[d] = e }

        function I(a, b, c) { var d, e, f = 0,
                g = bb.length,
                h = _.Deferred().always(function() { delete i.elem }),
                i = function() { if (e) return !1; for (var b = Ya || D(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f); return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1) },
                j = h.promise({ elem: a, props: _.extend({}, b), opts: _.extend(!0, { specialEasing: {} }, c), originalProperties: b, originalOptions: c, startTime: Ya || D(), duration: c.duration, tweens: [], createTween: function(b, c) { var d = _.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing); return j.tweens.push(d), d }, stop: function(b) { var c = 0,
                            d = b ? j.tweens.length : 0; if (e) return this; for (e = !0; d > c; c++) j.tweens[c].run(1); return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this } }),
                k = j.props; for (H(k, j.opts.specialEasing); g > f; f++)
                if (d = bb[f].call(j, a, k, j.opts)) return d;
            return _.map(k, F, j), _.isFunction(j.opts.start) && j.opts.start.call(a, j), _.fx.timer(_.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always) }

        function J(a) { return function(b, c) { "string" != typeof b && (c = b, b = "*"); var d, e = 0,
                    f = b.toLowerCase().match(na) || []; if (_.isFunction(c))
                    for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c) } }

        function K(a, b, c, d) {
            function e(h) { var i; return f[h] = !0, _.each(a[h] || [], function(a, h) { var j = h(b, c, d); return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1) }), i } var f = {},
                g = a === tb; return e(b.dataTypes[0]) || !f["*"] && e("*") }

        function L(a, b) { var c, d, e = _.ajaxSettings.flatOptions || {}; for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]); return d && _.extend(!0, a, d), a }

        function M(a, b, c) { for (var d, e, f, g, h = a.contents, i = a.dataTypes;
                "*" === i[0];) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type")); if (d)
                for (e in h)
                    if (h[e] && h[e].test(d)) { i.unshift(e); break }
            if (i[0] in c) f = i[0];
            else { for (e in c) { if (!i[0] || a.converters[e + " " + i[0]]) { f = e; break }
                    g || (g = e) }
                f = f || g } return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0 }

        function N(a, b, c, d) { var e, f, g, h, i, j = {},
                k = a.dataTypes.slice(); if (k[1])
                for (g in a.converters) j[g.toLowerCase()] = a.converters[g]; for (f = k.shift(); f;)
                if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                    if ("*" === f) f = i;
                    else if ("*" !== i && i !== f) { if (g = j[i + " " + f] || j["* " + f], !g)
                    for (e in j)
                        if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) { g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1])); break }
                if (g !== !0)
                    if (g && a["throws"]) b = g(b);
                    else try { b = g(b) } catch (l) { return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f } } } return { state: "success", data: b } }

        function O(a, b, c, d) { var e; if (_.isArray(b)) _.each(b, function(b, e) { c || yb.test(a) ? d(a, e) : O(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d) });
            else if (c || "object" !== _.type(b)) d(a, b);
            else
                for (e in b) O(a + "[" + e + "]", b[e], c, d) }

        function P(a) { return _.isWindow(a) ? a : 9 === a.nodeType && a.defaultView }
        var Q = [],
            R = Q.slice,
            S = Q.concat,
            T = Q.push,
            U = Q.indexOf,
            V = {},
            W = V.toString,
            X = V.hasOwnProperty,
            Y = {},
            Z = a.document,
            $ = "2.1.4",
            _ = function(a, b) { return new _.fn.init(a, b) },
            aa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ba = /^-ms-/,
            ca = /-([\da-z])/gi,
            da = function(a, b) { return b.toUpperCase() };
        _.fn = _.prototype = { jquery: $, constructor: _, selector: "", length: 0, toArray: function() { return R.call(this) }, get: function(a) { return null != a ? 0 > a ? this[a + this.length] : this[a] : R.call(this) }, pushStack: function(a) { var b = _.merge(this.constructor(), a); return b.prevObject = this, b.context = this.context, b }, each: function(a, b) { return _.each(this, a, b) }, map: function(a) { return this.pushStack(_.map(this, function(b, c) { return a.call(b, c, b) })) }, slice: function() { return this.pushStack(R.apply(this, arguments)) }, first: function() { return this.eq(0) }, last: function() { return this.eq(-1) }, eq: function(a) { var b = this.length,
                    c = +a + (0 > a ? b : 0); return this.pushStack(c >= 0 && b > c ? [this[c]] : []) }, end: function() { return this.prevObject || this.constructor(null) }, push: T, sort: Q.sort, splice: Q.splice }, _.extend = _.fn.extend = function() { var a, b, c, d, e, f, g = arguments[0] || {},
                h = 1,
                i = arguments.length,
                j = !1; for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || _.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
                if (null != (a = arguments[h]))
                    for (b in a) c = g[b], d = a[b], g !== d && (j && d && (_.isPlainObject(d) || (e = _.isArray(d))) ? (e ? (e = !1, f = c && _.isArray(c) ? c : []) : f = c && _.isPlainObject(c) ? c : {}, g[b] = _.extend(j, f, d)) : void 0 !== d && (g[b] = d));
            return g }, _.extend({ expando: "jQuery" + ($ + Math.random()).replace(/\D/g, ""), isReady: !0, error: function(a) { throw new Error(a) }, noop: function() {}, isFunction: function(a) { return "function" === _.type(a) }, isArray: Array.isArray, isWindow: function(a) { return null != a && a === a.window }, isNumeric: function(a) { return !_.isArray(a) && a - parseFloat(a) + 1 >= 0 }, isPlainObject: function(a) { return "object" !== _.type(a) || a.nodeType || _.isWindow(a) ? !1 : a.constructor && !X.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0 }, isEmptyObject: function(a) { var b; for (b in a) return !1; return !0 }, type: function(a) { return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? V[W.call(a)] || "object" : typeof a }, globalEval: function(a) { var b, c = eval;
                a = _.trim(a), a && (1 === a.indexOf("use strict") ? (b = Z.createElement("script"), b.text = a, Z.head.appendChild(b).parentNode.removeChild(b)) : c(a)) }, camelCase: function(a) { return a.replace(ba, "ms-").replace(ca, da) }, nodeName: function(a, b) { return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase() }, each: function(a, b, d) { var e, f = 0,
                    g = a.length,
                    h = c(a); if (d) { if (h)
                        for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
                    else
                        for (f in a)
                            if (e = b.apply(a[f], d), e === !1) break } else if (h)
                    for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
                else
                    for (f in a)
                        if (e = b.call(a[f], f, a[f]), e === !1) break; return a }, trim: function(a) { return null == a ? "" : (a + "").replace(aa, "") }, makeArray: function(a, b) { var d = b || []; return null != a && (c(Object(a)) ? _.merge(d, "string" == typeof a ? [a] : a) : T.call(d, a)), d }, inArray: function(a, b, c) { return null == b ? -1 : U.call(b, a, c) }, merge: function(a, b) { for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d]; return a.length = e, a }, grep: function(a, b, c) { for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]); return e }, map: function(a, b, d) { var e, f = 0,
                    g = a.length,
                    h = c(a),
                    i = []; if (h)
                    for (; g > f; f++) e = b(a[f], f, d), null != e && i.push(e);
                else
                    for (f in a) e = b(a[f], f, d), null != e && i.push(e); return S.apply([], i) }, guid: 1, proxy: function(a, b) { var c, d, e; return "string" == typeof b && (c = a[b], b = a, a = c), _.isFunction(a) ? (d = R.call(arguments, 2), e = function() { return a.apply(b || this, d.concat(R.call(arguments))) }, e.guid = a.guid = a.guid || _.guid++, e) : void 0 }, now: Date.now, support: Y }), _.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) { V["[object " + b + "]"] = b.toLowerCase() });
        var ea = function(a) {
            function b(a, b, c, d) { var e, f, g, h, i, j, l, n, o, p; if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], h = b.nodeType, "string" != typeof a || !a || 1 !== h && 9 !== h && 11 !== h) return c; if (!d && I) { if (11 !== h && (e = sa.exec(a)))
                        if (g = e[1]) { if (9 === h) { if (f = b.getElementById(g), !f || !f.parentNode) return c; if (f.id === g) return c.push(f), c } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), c } else { if (e[2]) return $.apply(c, b.getElementsByTagName(a)), c; if ((g = e[3]) && v.getElementsByClassName) return $.apply(c, b.getElementsByClassName(g)), c }
                    if (v.qsa && (!J || !J.test(a))) { if (n = l = N, o = b, p = 1 !== h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) { for (j = z(a), (l = b.getAttribute("id")) ? n = l.replace(ua, "\\$&") : b.setAttribute("id", n), n = "[id='" + n + "'] ", i = j.length; i--;) j[i] = n + m(j[i]);
                            o = ta.test(a) && k(b.parentNode) || b, p = j.join(",") } if (p) try { return $.apply(c, o.querySelectorAll(p)), c } catch (q) {} finally { l || b.removeAttribute("id") } } } return B(a.replace(ia, "$1"), b, c, d) }

            function c() {
                function a(c, d) { return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d } var b = []; return a }

            function d(a) { return a[N] = !0, a }

            function e(a) { var b = G.createElement("div"); try { return !!a(b) } catch (c) { return !1 } finally { b.parentNode && b.parentNode.removeChild(b), b = null } }

            function f(a, b) { for (var c = a.split("|"), d = a.length; d--;) w.attrHandle[c[d]] = b }

            function g(a, b) { var c = b && a,
                    d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V); if (d) return d; if (c)
                    for (; c = c.nextSibling;)
                        if (c === b) return -1;
                return a ? 1 : -1 }

            function h(a) { return function(b) { var c = b.nodeName.toLowerCase(); return "input" === c && b.type === a } }

            function i(a) { return function(b) { var c = b.nodeName.toLowerCase(); return ("input" === c || "button" === c) && b.type === a } }

            function j(a) { return d(function(b) { return b = +b, d(function(c, d) { for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e])) }) }) }

            function k(a) { return a && "undefined" != typeof a.getElementsByTagName && a }

            function l() {}

            function m(a) { for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value; return d }

            function n(a, b, c) { var d = b.dir,
                    e = c && "parentNode" === d,
                    f = Q++; return b.first ? function(b, c, f) { for (; b = b[d];)
                        if (1 === b.nodeType || e) return a(b, c, f) } : function(b, c, g) { var h, i, j = [P, f]; if (g) { for (; b = b[d];)
                            if ((1 === b.nodeType || e) && a(b, c, g)) return !0 } else
                        for (; b = b[d];)
                            if (1 === b.nodeType || e) { if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f) return j[2] = h[2]; if (i[d] = j, j[2] = a(b, c, g)) return !0 } } }

            function o(a) { return a.length > 1 ? function(b, c, d) { for (var e = a.length; e--;)
                        if (!a[e](b, c, d)) return !1;
                    return !0 } : a[0] }

            function p(a, c, d) { for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d); return d }

            function q(a, b, c, d, e) { for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h)); return g }

            function r(a, b, c, e, f, g) { return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function(d, g, h, i) { var j, k, l, m = [],
                        n = [],
                        o = g.length,
                        r = d || p(b || "*", h.nodeType ? [h] : h, []),
                        s = !a || !d && b ? r : q(r, m, a, h, i),
                        t = c ? f || (d ? a : o || e) ? [] : g : s; if (c && c(s, t, h, i), e)
                        for (j = q(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l)); if (d) { if (f || a) { if (f) { for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
                                f(null, t = [], j, i) } for (k = t.length; k--;)(l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l)) } } else t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t) }) }

            function s(a) { for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function(a) { return a === b }, g, !0), j = n(function(a) { return aa(b, a) > -1 }, g, !0), k = [function(a, c, d) { var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d)); return b = null, e }]; e > h; h++)
                    if (c = w.relative[a[h].type]) k = [n(o(k), c)];
                    else { if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) { for (d = ++h; e > d && !w.relative[a[d].type]; d++); return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({ value: " " === a[h - 2].type ? "*" : "" })).replace(ia, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a)) }
                        k.push(c) }
                return o(k) }

            function t(a, c) { var e = c.length > 0,
                    f = a.length > 0,
                    g = function(d, g, h, i, j) { var k, l, m, n = 0,
                            o = "0",
                            p = d && [],
                            r = [],
                            s = C,
                            t = d || f && w.find.TAG("*", j),
                            u = P += null == s ? 1 : Math.random() || .1,
                            v = t.length; for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) { if (f && k) { for (l = 0; m = a[l++];)
                                    if (m(k, g, h)) { i.push(k); break }
                                j && (P = u) }
                            e && ((k = !m && k) && n--, d && p.push(k)) } if (n += o, e && o !== n) { for (l = 0; m = c[l++];) m(p, r, g, h); if (d) { if (n > 0)
                                    for (; o--;) p[o] || r[o] || (r[o] = Y.call(i));
                                r = q(r) }
                            $.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i) } return j && (P = u, C = s), p }; return e ? d(g) : g } var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date,
                O = a.document,
                P = 0,
                Q = 0,
                R = c(),
                S = c(),
                T = c(),
                U = function(a, b) { return a === b && (E = !0), 0 },
                V = 1 << 31,
                W = {}.hasOwnProperty,
                X = [],
                Y = X.pop,
                Z = X.push,
                $ = X.push,
                _ = X.slice,
                aa = function(a, b) { for (var c = 0, d = a.length; d > c; c++)
                        if (a[c] === b) return c;
                    return -1 },
                ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ca = "[\\x20\\t\\r\\n\\f]",
                da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                ea = da.replace("w", "w#"),
                fa = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ea + "))|)" + ca + "*\\]",
                ga = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + fa + ")*)|.*)\\)|)",
                ha = new RegExp(ca + "+", "g"),
                ia = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"),
                ja = new RegExp("^" + ca + "*," + ca + "*"),
                ka = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
                la = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
                ma = new RegExp(ga),
                na = new RegExp("^" + ea + "$"),
                oa = { ID: new RegExp("^#(" + da + ")"), CLASS: new RegExp("^\\.(" + da + ")"), TAG: new RegExp("^(" + da.replace("w", "w*") + ")"), ATTR: new RegExp("^" + fa), PSEUDO: new RegExp("^" + ga), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"), bool: new RegExp("^(?:" + ba + ")$", "i"), needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i") },
                pa = /^(?:input|select|textarea|button)$/i,
                qa = /^h\d$/i,
                ra = /^[^{]+\{\s*\[native \w/,
                sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ta = /[+~]/,
                ua = /'|\\/g,
                va = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"),
                wa = function(a, b, c) { var d = "0x" + b - 65536; return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320) },
                xa = function() { F() }; try { $.apply(X = _.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType } catch (ya) { $ = { apply: X.length ? function(a, b) { Z.apply(a, _.call(b)) } : function(a, b) { for (var c = a.length, d = 0; a[c++] = b[d++];);
                        a.length = c - 1 } } }
            v = b.support = {}, y = b.isXML = function(a) { var b = a && (a.ownerDocument || a).documentElement; return b ? "HTML" !== b.nodeName : !1 }, F = b.setDocument = function(a) { var b, c, d = a ? a.ownerDocument || a : O; return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = d.documentElement, c = d.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", xa, !1) : c.attachEvent && c.attachEvent("onunload", xa)), I = !y(d), v.attributes = e(function(a) { return a.className = "i", !a.getAttribute("className") }), v.getElementsByTagName = e(function(a) { return a.appendChild(d.createComment("")), !a.getElementsByTagName("*").length }), v.getElementsByClassName = ra.test(d.getElementsByClassName), v.getById = e(function(a) { return H.appendChild(a).id = N, !d.getElementsByName || !d.getElementsByName(N).length }), v.getById ? (w.find.ID = function(a, b) { if ("undefined" != typeof b.getElementById && I) { var c = b.getElementById(a); return c && c.parentNode ? [c] : [] } }, w.filter.ID = function(a) { var b = a.replace(va, wa); return function(a) { return a.getAttribute("id") === b } }) : (delete w.find.ID, w.filter.ID = function(a) { var b = a.replace(va, wa); return function(a) { var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id"); return c && c.value === b } }), w.find.TAG = v.getElementsByTagName ? function(a, b) { return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0 } : function(a, b) { var c, d = [],
                        e = 0,
                        f = b.getElementsByTagName(a); if ("*" === a) { for (; c = f[e++];) 1 === c.nodeType && d.push(c); return d } return f }, w.find.CLASS = v.getElementsByClassName && function(a, b) { return I ? b.getElementsByClassName(a) : void 0 }, K = [], J = [], (v.qsa = ra.test(d.querySelectorAll)) && (e(function(a) { H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + ca + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + ca + "*(?:value|" + ba + ")"), a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="), a.querySelectorAll(":checked").length || J.push(":checked"), a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]") }), e(function(a) { var b = d.createElement("input");
                    b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + ca + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:") })), (v.matchesSelector = ra.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) { v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", ga) }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = ra.test(H.compareDocumentPosition), M = b || ra.test(H.contains) ? function(a, b) { var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode; return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d))) } : function(a, b) { if (b)
                        for (; b = b.parentNode;)
                            if (b === a) return !0;
                    return !1 }, U = b ? function(a, b) { if (a === b) return E = !0, 0; var c = !a.compareDocumentPosition - !b.compareDocumentPosition; return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === d || a.ownerDocument === O && M(O, a) ? -1 : b === d || b.ownerDocument === O && M(O, b) ? 1 : D ? aa(D, a) - aa(D, b) : 0 : 4 & c ? -1 : 1) } : function(a, b) { if (a === b) return E = !0, 0; var c, e = 0,
                        f = a.parentNode,
                        h = b.parentNode,
                        i = [a],
                        j = [b]; if (!f || !h) return a === d ? -1 : b === d ? 1 : f ? -1 : h ? 1 : D ? aa(D, a) - aa(D, b) : 0; if (f === h) return g(a, b); for (c = a; c = c.parentNode;) i.unshift(c); for (c = b; c = c.parentNode;) j.unshift(c); for (; i[e] === j[e];) e++; return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0 }, d) : G }, b.matches = function(a, c) { return b(a, null, null, c) }, b.matchesSelector = function(a, c) { if ((a.ownerDocument || a) !== G && F(a), c = c.replace(la, "='$1']"), v.matchesSelector && I && (!K || !K.test(c)) && (!J || !J.test(c))) try { var d = L.call(a, c); if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d } catch (e) {}
                return b(c, G, null, [a]).length > 0 }, b.contains = function(a, b) { return (a.ownerDocument || a) !== G && F(a), M(a, b) }, b.attr = function(a, b) {
                (a.ownerDocument || a) !== G && F(a); var c = w.attrHandle[b.toLowerCase()],
                    d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0; return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null }, b.error = function(a) { throw new Error("Syntax error, unrecognized expression: " + a) }, b.uniqueSort = function(a) { var b, c = [],
                    d = 0,
                    e = 0; if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) { for (; b = a[e++];) b === a[e] && (d = c.push(e)); for (; d--;) a.splice(c[d], 1) } return D = null, a }, x = b.getText = function(a) { var b, c = "",
                    d = 0,
                    e = a.nodeType; if (e) { if (1 === e || 9 === e || 11 === e) { if ("string" == typeof a.textContent) return a.textContent; for (a = a.firstChild; a; a = a.nextSibling) c += x(a) } else if (3 === e || 4 === e) return a.nodeValue } else
                    for (; b = a[d++];) c += x(b); return c }, w = b.selectors = { cacheLength: 50, createPseudo: d, match: oa, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(a) { return a[1] = a[1].replace(va, wa), a[3] = (a[3] || a[4] || a[5] || "").replace(va, wa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4) }, CHILD: function(a) { return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a }, PSEUDO: function(a) { var b, c = !a[6] && a[2]; return oa.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && ma.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3)) } }, filter: { TAG: function(a) { var b = a.replace(va, wa).toLowerCase(); return "*" === a ? function() { return !0 } : function(a) { return a.nodeName && a.nodeName.toLowerCase() === b } }, CLASS: function(a) { var b = R[a + " "]; return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && R(a, function(a) { return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "") }) }, ATTR: function(a, c, d) { return function(e) { var f = b.attr(e, a); return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ha, " ") + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0 } }, CHILD: function(a, b, c, d, e) { var f = "nth" !== a.slice(0, 3),
                            g = "last" !== a.slice(-4),
                            h = "of-type" === b; return 1 === d && 0 === e ? function(a) { return !!a.parentNode } : function(b, c, i) { var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                                q = b.parentNode,
                                r = h && b.nodeName.toLowerCase(),
                                s = !i && !h; if (q) { if (f) { for (; p;) { for (l = b; l = l[p];)
                                            if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                        o = p = "only" === a && !o && "nextSibling" } return !0 } if (o = [g ? q.firstChild : q.lastChild], g && s) { for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
                                        if (1 === l.nodeType && ++m && l === b) { k[a] = [P, n, m]; break } } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1];
                                else
                                    for (;
                                        (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b));); return m -= e, m === d || m % d === 0 && m / d >= 0 } } }, PSEUDO: function(a, c) { var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a); return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) { for (var d, e = f(a, c), g = e.length; g--;) d = aa(a, e[g]), a[d] = !(b[d] = e[g]) }) : function(a) { return f(a, 0, e) }) : f } }, pseudos: { not: d(function(a) { var b = [],
                            c = [],
                            e = A(a.replace(ia, "$1")); return e[N] ? d(function(a, b, c, d) { for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f)) }) : function(a, d, f) { return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop() } }), has: d(function(a) { return function(c) { return b(a, c).length > 0 } }), contains: d(function(a) { return a = a.replace(va, wa),
                            function(b) { return (b.textContent || b.innerText || x(b)).indexOf(a) > -1 } }), lang: d(function(a) { return na.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(va, wa).toLowerCase(),
                            function(b) { var c;
                                do
                                    if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                                return !1 } }), target: function(b) { var c = a.location && a.location.hash; return c && c.slice(1) === b.id }, root: function(a) { return a === H }, focus: function(a) { return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex) }, enabled: function(a) { return a.disabled === !1 }, disabled: function(a) { return a.disabled === !0 }, checked: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && !!a.checked || "option" === b && !!a.selected }, selected: function(a) { return a.parentNode && a.parentNode.selectedIndex, a.selected === !0 }, empty: function(a) { for (a = a.firstChild; a; a = a.nextSibling)
                            if (a.nodeType < 6) return !1;
                        return !0 }, parent: function(a) { return !w.pseudos.empty(a) }, header: function(a) { return qa.test(a.nodeName) }, input: function(a) { return pa.test(a.nodeName) }, button: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && "button" === a.type || "button" === b }, text: function(a) { var b; return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase()) }, first: j(function() { return [0] }), last: j(function(a, b) { return [b - 1] }), eq: j(function(a, b, c) { return [0 > c ? c + b : c] }), even: j(function(a, b) { for (var c = 0; b > c; c += 2) a.push(c); return a }), odd: j(function(a, b) { for (var c = 1; b > c; c += 2) a.push(c); return a }), lt: j(function(a, b, c) { for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d); return a }), gt: j(function(a, b, c) { for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d); return a }) } }, w.pseudos.nth = w.pseudos.eq; for (u in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) w.pseudos[u] = h(u); for (u in { submit: !0, reset: !0 }) w.pseudos[u] = i(u); return l.prototype = w.filters = w.pseudos, w.setFilters = new l, z = b.tokenize = function(a, c) { var d, e, f, g, h, i, j, k = S[a + " "]; if (k) return c ? 0 : k.slice(0); for (h = a, i = [], j = w.preFilter; h;) {
                    (!d || (e = ja.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ka.exec(h)) && (d = e.shift(), f.push({ value: d, type: e[0].replace(ia, " ") }), h = h.slice(d.length)); for (g in w.filter) !(e = oa[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({ value: d, type: g, matches: e }), h = h.slice(d.length)); if (!d) break } return c ? h.length : h ? b.error(a) : S(a, i).slice(0) }, A = b.compile = function(a, b) { var c, d = [],
                    e = [],
                    f = T[a + " "]; if (!f) { for (b || (b = z(a)), c = b.length; c--;) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                    f = T(a, t(e, d)), f.selector = a } return f }, B = b.select = function(a, b, c, d) { var e, f, g, h, i, j = "function" == typeof a && a,
                    l = !d && z(a = j.selector || a); if (c = c || [], 1 === l.length) { if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) { if (b = (w.find.ID(g.matches[0].replace(va, wa), b) || [])[0], !b) return c;
                        j && (b = b.parentNode), a = a.slice(f.shift().value.length) } for (e = oa.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]);)
                        if ((i = w.find[h]) && (d = i(g.matches[0].replace(va, wa), ta.test(f[0].type) && k(b.parentNode) || b))) { if (f.splice(e, 1), a = d.length && m(f), !a) return $.apply(c, d), c; break } } return (j || A(a, l))(d, b, !I, c, ta.test(a) && k(b.parentNode) || b), c }, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !!E, F(), v.sortDetached = e(function(a) { return 1 & a.compareDocumentPosition(G.createElement("div")) }), e(function(a) { return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href") }) || f("type|href|height|width", function(a, b, c) { return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2) }), v.attributes && e(function(a) { return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value") }) || f("value", function(a, b, c) { return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue }), e(function(a) { return null == a.getAttribute("disabled") }) || f(ba, function(a, b, c) { var d; return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null }), b }(a);
        _.find = ea, _.expr = ea.selectors, _.expr[":"] = _.expr.pseudos, _.unique = ea.uniqueSort, _.text = ea.getText, _.isXMLDoc = ea.isXML, _.contains = ea.contains;
        var fa = _.expr.match.needsContext,
            ga = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            ha = /^.[^:#\[\.,]*$/;
        _.filter = function(a, b, c) { var d = b[0]; return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? _.find.matchesSelector(d, a) ? [d] : [] : _.find.matches(a, _.grep(b, function(a) { return 1 === a.nodeType })) }, _.fn.extend({
            find: function(a) {
                var b, c = this.length,
                    d = [],
                    e = this;
                if ("string" != typeof a) return this.pushStack(_(a).filter(function() { for (b = 0; c > b; b++)
                        if (_.contains(e[b], this)) return !0 }));
                for (b = 0; c > b; b++) _.find(a, e[b], d);
                return d = this.pushStack(c > 1 ? _.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
            },
            filter: function(a) { return this.pushStack(d(this, a || [], !1)) },
            not: function(a) { return this.pushStack(d(this, a || [], !0)) },
            is: function(a) { return !!d(this, "string" == typeof a && fa.test(a) ? _(a) : a || [], !1).length }
        });
        var ia, ja = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            ka = _.fn.init = function(a, b) { var c, d; if (!a) return this; if ("string" == typeof a) { if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : ja.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || ia).find(a) : this.constructor(b).find(a); if (c[1]) { if (b = b instanceof _ ? b[0] : b, _.merge(this, _.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : Z, !0)), ga.test(c[1]) && _.isPlainObject(b))
                            for (c in b) _.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]); return this } return d = Z.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = Z, this.selector = a, this } return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : _.isFunction(a) ? "undefined" != typeof ia.ready ? ia.ready(a) : a(_) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), _.makeArray(a, this)) };
        ka.prototype = _.fn, ia = _(Z);
        var la = /^(?:parents|prev(?:Until|All))/,
            ma = { children: !0, contents: !0, next: !0, prev: !0 };
        _.extend({ dir: function(a, b, c) { for (var d = [], e = void 0 !== c;
                    (a = a[b]) && 9 !== a.nodeType;)
                    if (1 === a.nodeType) { if (e && _(a).is(c)) break;
                        d.push(a) }
                return d }, sibling: function(a, b) { for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a); return c } }), _.fn.extend({ has: function(a) { var b = _(a, this),
                    c = b.length; return this.filter(function() { for (var a = 0; c > a; a++)
                        if (_.contains(this, b[a])) return !0 }) }, closest: function(a, b) { for (var c, d = 0, e = this.length, f = [], g = fa.test(a) || "string" != typeof a ? _(a, b || this.context) : 0; e > d; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && _.find.matchesSelector(c, a))) { f.push(c); break }
                return this.pushStack(f.length > 1 ? _.unique(f) : f) }, index: function(a) { return a ? "string" == typeof a ? U.call(_(a), this[0]) : U.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function(a, b) { return this.pushStack(_.unique(_.merge(this.get(), _(a, b)))) }, addBack: function(a) { return this.add(null == a ? this.prevObject : this.prevObject.filter(a)) } }), _.each({ parent: function(a) { var b = a.parentNode; return b && 11 !== b.nodeType ? b : null }, parents: function(a) { return _.dir(a, "parentNode") }, parentsUntil: function(a, b, c) { return _.dir(a, "parentNode", c) }, next: function(a) { return e(a, "nextSibling") }, prev: function(a) { return e(a, "previousSibling") }, nextAll: function(a) { return _.dir(a, "nextSibling") }, prevAll: function(a) { return _.dir(a, "previousSibling") }, nextUntil: function(a, b, c) { return _.dir(a, "nextSibling", c) }, prevUntil: function(a, b, c) { return _.dir(a, "previousSibling", c) }, siblings: function(a) { return _.sibling((a.parentNode || {}).firstChild, a) }, children: function(a) { return _.sibling(a.firstChild) }, contents: function(a) { return a.contentDocument || _.merge([], a.childNodes) } }, function(a, b) { _.fn[a] = function(c, d) { var e = _.map(this, b, c); return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = _.filter(d, e)), this.length > 1 && (ma[a] || _.unique(e), la.test(a) && e.reverse()), this.pushStack(e) } });
        var na = /\S+/g,
            oa = {};
        _.Callbacks = function(a) { a = "string" == typeof a ? oa[a] || f(a) : _.extend({}, a); var b, c, d, e, g, h, i = [],
                j = !a.once && [],
                k = function(f) { for (b = a.memory && f, c = !0, h = e || 0, e = 0, g = i.length, d = !0; i && g > h; h++)
                        if (i[h].apply(f[0], f[1]) === !1 && a.stopOnFalse) { b = !1; break }
                    d = !1, i && (j ? j.length && k(j.shift()) : b ? i = [] : l.disable()) },
                l = { add: function() { if (i) { var c = i.length;! function f(b) { _.each(b, function(b, c) { var d = _.type(c); "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c) }) }(arguments), d ? g = i.length : b && (e = c, k(b)) } return this }, remove: function() { return i && _.each(arguments, function(a, b) { for (var c;
                                (c = _.inArray(b, i, c)) > -1;) i.splice(c, 1), d && (g >= c && g--, h >= c && h--) }), this }, has: function(a) { return a ? _.inArray(a, i) > -1 : !(!i || !i.length) }, empty: function() { return i = [], g = 0, this }, disable: function() { return i = j = b = void 0, this }, disabled: function() { return !i }, lock: function() { return j = void 0, b || l.disable(), this }, locked: function() { return !j }, fireWith: function(a, b) { return !i || c && !j || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? j.push(b) : k(b)), this }, fire: function() { return l.fireWith(this, arguments), this }, fired: function() { return !!c } }; return l }, _.extend({ Deferred: function(a) { var b = [
                        ["resolve", "done", _.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", _.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", _.Callbacks("memory")]
                    ],
                    c = "pending",
                    d = { state: function() { return c }, always: function() { return e.done(arguments).fail(arguments), this }, then: function() { var a = arguments; return _.Deferred(function(c) { _.each(b, function(b, f) { var g = _.isFunction(a[b]) && a[b];
                                    e[f[1]](function() { var a = g && g.apply(this, arguments);
                                        a && _.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments) }) }), a = null }).promise() }, promise: function(a) { return null != a ? _.extend(a, d) : d } },
                    e = {}; return d.pipe = d.then, _.each(b, function(a, f) { var g = f[2],
                        h = f[3];
                    d[f[1]] = g.add, h && g.add(function() { c = h }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() { return e[f[0] + "With"](this === e ? d : this, arguments), this }, e[f[0] + "With"] = g.fireWith }), d.promise(e), a && a.call(e, e), e }, when: function(a) { var b, c, d, e = 0,
                    f = R.call(arguments),
                    g = f.length,
                    h = 1 !== g || a && _.isFunction(a.promise) ? g : 0,
                    i = 1 === h ? a : _.Deferred(),
                    j = function(a, c, d) { return function(e) { c[a] = this, d[a] = arguments.length > 1 ? R.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d) } }; if (g > 1)
                    for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && _.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h; return h || i.resolveWith(d, f), i.promise() } });
        var pa;
        _.fn.ready = function(a) { return _.ready.promise().done(a), this }, _.extend({ isReady: !1, readyWait: 1, holdReady: function(a) { a ? _.readyWait++ : _.ready(!0) }, ready: function(a) {
                (a === !0 ? --_.readyWait : _.isReady) || (_.isReady = !0, a !== !0 && --_.readyWait > 0 || (pa.resolveWith(Z, [_]), _.fn.triggerHandler && (_(Z).triggerHandler("ready"), _(Z).off("ready")))) } }), _.ready.promise = function(b) { return pa || (pa = _.Deferred(), "complete" === Z.readyState ? setTimeout(_.ready) : (Z.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", g, !1))), pa.promise(b) }, _.ready.promise();
        var qa = _.access = function(a, b, c, d, e, f, g) { var h = 0,
                i = a.length,
                j = null == c; if ("object" === _.type(c)) { e = !0; for (h in c) _.access(a, b, h, c[h], !0, f, g) } else if (void 0 !== d && (e = !0, _.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) { return j.call(_(a), c) })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c))); return e ? a : j ? b.call(a) : i ? b(a[0], c) : f };
        _.acceptData = function(a) { return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType }, h.uid = 1, h.accepts = _.acceptData, h.prototype = { key: function(a) { if (!h.accepts(a)) return 0; var b = {},
                    c = a[this.expando]; if (!c) { c = h.uid++; try { b[this.expando] = { value: c }, Object.defineProperties(a, b) } catch (d) { b[this.expando] = c, _.extend(a, b) } } return this.cache[c] || (this.cache[c] = {}), c }, set: function(a, b, c) { var d, e = this.key(a),
                    f = this.cache[e]; if ("string" == typeof b) f[b] = c;
                else if (_.isEmptyObject(f)) _.extend(this.cache[e], b);
                else
                    for (d in b) f[d] = b[d]; return f }, get: function(a, b) { var c = this.cache[this.key(a)]; return void 0 === b ? c : c[b] }, access: function(a, b, c) { var d; return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, _.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b) }, remove: function(a, b) { var c, d, e, f = this.key(a),
                    g = this.cache[f]; if (void 0 === b) this.cache[f] = {};
                else { _.isArray(b) ? d = b.concat(b.map(_.camelCase)) : (e = _.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(na) || [])), c = d.length; for (; c--;) delete g[d[c]] } }, hasData: function(a) { return !_.isEmptyObject(this.cache[a[this.expando]] || {}) }, discard: function(a) { a[this.expando] && delete this.cache[a[this.expando]] } };
        var ra = new h,
            sa = new h,
            ta = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            ua = /([A-Z])/g;
        _.extend({ hasData: function(a) { return sa.hasData(a) || ra.hasData(a) }, data: function(a, b, c) { return sa.access(a, b, c) }, removeData: function(a, b) { sa.remove(a, b) }, _data: function(a, b, c) { return ra.access(a, b, c) }, _removeData: function(a, b) { ra.remove(a, b) } }), _.fn.extend({ data: function(a, b) { var c, d, e, f = this[0],
                    g = f && f.attributes; if (void 0 === a) { if (this.length && (e = sa.get(f), 1 === f.nodeType && !ra.get(f, "hasDataAttrs"))) { for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = _.camelCase(d.slice(5)), i(f, d, e[d])));
                        ra.set(f, "hasDataAttrs", !0) } return e } return "object" == typeof a ? this.each(function() { sa.set(this, a) }) : qa(this, function(b) { var c, d = _.camelCase(a); if (f && void 0 === b) { if (c = sa.get(f, a), void 0 !== c) return c; if (c = sa.get(f, d), void 0 !== c) return c; if (c = i(f, d, void 0), void 0 !== c) return c } else this.each(function() { var c = sa.get(this, d);
                        sa.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && sa.set(this, a, b) }) }, null, b, arguments.length > 1, null, !0) }, removeData: function(a) { return this.each(function() { sa.remove(this, a) }) } }), _.extend({ queue: function(a, b, c) { var d; return a ? (b = (b || "fx") + "queue", d = ra.get(a, b), c && (!d || _.isArray(c) ? d = ra.access(a, b, _.makeArray(c)) : d.push(c)), d || []) : void 0 }, dequeue: function(a, b) { b = b || "fx"; var c = _.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = _._queueHooks(a, b),
                    g = function() { _.dequeue(a, b) }; "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire() }, _queueHooks: function(a, b) { var c = b + "queueHooks"; return ra.get(a, c) || ra.access(a, c, { empty: _.Callbacks("once memory").add(function() { ra.remove(a, [b + "queue", c]) }) }) } }), _.fn.extend({ queue: function(a, b) { var c = 2; return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? _.queue(this[0], a) : void 0 === b ? this : this.each(function() { var c = _.queue(this, a, b);
                    _._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && _.dequeue(this, a) }) }, dequeue: function(a) { return this.each(function() { _.dequeue(this, a) }) }, clearQueue: function(a) { return this.queue(a || "fx", []) }, promise: function(a, b) { var c, d = 1,
                    e = _.Deferred(),
                    f = this,
                    g = this.length,
                    h = function() {--d || e.resolveWith(f, [f]) }; for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = ra.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h)); return h(), e.promise(b) } });
        var va = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            wa = ["Top", "Right", "Bottom", "Left"],
            xa = function(a, b) { return a = b || a, "none" === _.css(a, "display") || !_.contains(a.ownerDocument, a) },
            ya = /^(?:checkbox|radio)$/i;
        ! function() { var a = Z.createDocumentFragment(),
                b = a.appendChild(Z.createElement("div")),
                c = Z.createElement("input");
            c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), Y.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue }();
        var za = "undefined";
        Y.focusinBubbles = "onfocusin" in a;
        var Aa = /^key/,
            Ba = /^(?:mouse|pointer|contextmenu)|click/,
            Ca = /^(?:focusinfocus|focusoutblur)$/,
            Da = /^([^.]*)(?:\.(.+)|)$/;
        _.event = { global: {}, add: function(a, b, c, d, e) { var f, g, h, i, j, k, l, m, n, o, p, q = ra.get(a); if (q)
                    for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = _.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) { return typeof _ !== za && _.event.triggered !== b.type ? _.event.dispatch.apply(a, arguments) : void 0 }), b = (b || "").match(na) || [""], j = b.length; j--;) h = Da.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = _.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = _.event.special[n] || {}, k = _.extend({ type: n, origType: p, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && _.expr.match.needsContext.test(e), namespace: o.join(".") }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), _.event.global[n] = !0) }, remove: function(a, b, c, d, e) { var f, g, h, i, j, k, l, m, n, o, p, q = ra.hasData(a) && ra.get(a); if (q && (i = q.events)) { for (b = (b || "").match(na) || [""], j = b.length; j--;)
                        if (h = Da.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) { for (l = _.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                            g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || _.removeEvent(a, n, q.handle), delete i[n]) } else
                            for (n in i) _.event.remove(a, n + b[j], c, d, !0);
                    _.isEmptyObject(i) && (delete q.handle, ra.remove(a, "events")) } }, trigger: function(b, c, d, e) { var f, g, h, i, j, k, l, m = [d || Z],
                    n = X.call(b, "type") ? b.type : b,
                    o = X.call(b, "namespace") ? b.namespace.split(".") : []; if (g = h = d = d || Z, 3 !== d.nodeType && 8 !== d.nodeType && !Ca.test(n + _.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[_.expando] ? b : new _.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : _.makeArray(c, [b]), l = _.event.special[n] || {}, e || !l.trigger || l.trigger.apply(d, c) !== !1)) { if (!e && !l.noBubble && !_.isWindow(d)) { for (i = l.delegateType || n, Ca.test(i + n) || (g = g.parentNode); g; g = g.parentNode) m.push(g), h = g;
                        h === (d.ownerDocument || Z) && m.push(h.defaultView || h.parentWindow || a) } for (f = 0;
                        (g = m[f++]) && !b.isPropagationStopped();) b.type = f > 1 ? i : l.bindType || n, k = (ra.get(g, "events") || {})[b.type] && ra.get(g, "handle"), k && k.apply(g, c), k = j && g[j], k && k.apply && _.acceptData(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault()); return b.type = n, e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !_.acceptData(d) || j && _.isFunction(d[n]) && !_.isWindow(d) && (h = d[j], h && (d[j] = null), _.event.triggered = n, d[n](), _.event.triggered = void 0, h && (d[j] = h)), b.result } }, dispatch: function(a) { a = _.event.fix(a); var b, c, d, e, f, g = [],
                    h = R.call(arguments),
                    i = (ra.get(this, "events") || {})[a.type] || [],
                    j = _.event.special[a.type] || {}; if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) { for (g = _.event.handlers.call(this, a, i), b = 0;
                        (e = g[b++]) && !a.isPropagationStopped();)
                        for (a.currentTarget = e.elem, c = 0;
                            (f = e.handlers[c++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(f.namespace)) && (a.handleObj = f, a.data = f.data, d = ((_.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation())); return j.postDispatch && j.postDispatch.call(this, a), a.result } }, handlers: function(a, b) { var c, d, e, f, g = [],
                    h = b.delegateCount,
                    i = a.target; if (h && i.nodeType && (!a.button || "click" !== a.type))
                    for (; i !== this; i = i.parentNode || this)
                        if (i.disabled !== !0 || "click" !== a.type) { for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? _(e, this).index(i) >= 0 : _.find(e, this, null, [i]).length), d[e] && d.push(f);
                            d.length && g.push({ elem: i, handlers: d }) }
                return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(a, b) { return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a } }, mouseHooks: { props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function(a, b) { var c, d, e, f = b.button; return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || Z, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a } }, fix: function(a) { if (a[_.expando]) return a; var b, c, d, e = a.type,
                    f = a,
                    g = this.fixHooks[e]; for (g || (this.fixHooks[e] = g = Ba.test(e) ? this.mouseHooks : Aa.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new _.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c]; return a.target || (a.target = Z), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a }, special: { load: { noBubble: !0 }, focus: { trigger: function() { return this !== l() && this.focus ? (this.focus(), !1) : void 0 }, delegateType: "focusin" }, blur: { trigger: function() { return this === l() && this.blur ? (this.blur(), !1) : void 0 }, delegateType: "focusout" }, click: { trigger: function() { return "checkbox" === this.type && this.click && _.nodeName(this, "input") ? (this.click(), !1) : void 0 }, _default: function(a) { return _.nodeName(a.target, "a") } }, beforeunload: { postDispatch: function(a) { void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result) } } }, simulate: function(a, b, c, d) { var e = _.extend(new _.Event, c, { type: a, isSimulated: !0, originalEvent: {} });
                d ? _.event.trigger(e, null, b) : _.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault() } }, _.removeEvent = function(a, b, c) { a.removeEventListener && a.removeEventListener(b, c, !1) }, _.Event = function(a, b) { return this instanceof _.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? j : k) : this.type = a, b && _.extend(this, b), this.timeStamp = a && a.timeStamp || _.now(), void(this[_.expando] = !0)) : new _.Event(a, b) }, _.Event.prototype = { isDefaultPrevented: k, isPropagationStopped: k, isImmediatePropagationStopped: k, preventDefault: function() { var a = this.originalEvent;
                this.isDefaultPrevented = j, a && a.preventDefault && a.preventDefault() }, stopPropagation: function() { var a = this.originalEvent;
                this.isPropagationStopped = j, a && a.stopPropagation && a.stopPropagation() }, stopImmediatePropagation: function() { var a = this.originalEvent;
                this.isImmediatePropagationStopped = j, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation() } }, _.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(a, b) { _.event.special[a] = { delegateType: b, bindType: b, handle: function(a) { var c, d = this,
                        e = a.relatedTarget,
                        f = a.handleObj; return (!e || e !== d && !_.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c } } }), Y.focusinBubbles || _.each({ focus: "focusin", blur: "focusout" }, function(a, b) { var c = function(a) { _.event.simulate(b, a.target, _.event.fix(a), !0) };
            _.event.special[b] = { setup: function() { var d = this.ownerDocument || this,
                        e = ra.access(d, b);
                    e || d.addEventListener(a, c, !0), ra.access(d, b, (e || 0) + 1) }, teardown: function() { var d = this.ownerDocument || this,
                        e = ra.access(d, b) - 1;
                    e ? ra.access(d, b, e) : (d.removeEventListener(a, c, !0), ra.remove(d, b)) } } }), _.fn.extend({ on: function(a, b, c, d, e) { var f, g; if ("object" == typeof a) { "string" != typeof b && (c = c || b, b = void 0); for (g in a) this.on(g, b, c, a[g], e); return this } if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = k;
                else if (!d) return this; return 1 === e && (f = d, d = function(a) { return _().off(a), f.apply(this, arguments) }, d.guid = f.guid || (f.guid = _.guid++)), this.each(function() { _.event.add(this, a, d, c, b) }) }, one: function(a, b, c, d) { return this.on(a, b, c, d, 1) }, off: function(a, b, c) { var d, e; if (a && a.preventDefault && a.handleObj) return d = a.handleObj, _(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this; if ("object" == typeof a) { for (e in a) this.off(e, b, a[e]); return this } return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = k), this.each(function() { _.event.remove(this, a, c, b) }) }, trigger: function(a, b) { return this.each(function() { _.event.trigger(a, b, this) }) }, triggerHandler: function(a, b) { var c = this[0]; return c ? _.event.trigger(a, b, c, !0) : void 0 } });
        var Ea = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Fa = /<([\w:]+)/,
            Ga = /<|&#?\w+;/,
            Ha = /<(?:script|style|link)/i,
            Ia = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ja = /^$|\/(?:java|ecma)script/i,
            Ka = /^true\/(.*)/,
            La = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Ma = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
        Ma.optgroup = Ma.option, Ma.tbody = Ma.tfoot = Ma.colgroup = Ma.caption = Ma.thead, Ma.th = Ma.td, _.extend({ clone: function(a, b, c) { var d, e, f, g, h = a.cloneNode(!0),
                    i = _.contains(a.ownerDocument, a); if (!(Y.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || _.isXMLDoc(a)))
                    for (g = r(h), f = r(a), d = 0, e = f.length; e > d; d++) s(f[d], g[d]); if (b)
                    if (c)
                        for (f = f || r(a), g = g || r(h), d = 0, e = f.length; e > d; d++) q(f[d], g[d]);
                    else q(a, h);
                return g = r(h, "script"), g.length > 0 && p(g, !i && r(a, "script")), h }, buildFragment: function(a, b, c, d) { for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, n = a.length; n > m; m++)
                    if (e = a[m], e || 0 === e)
                        if ("object" === _.type(e)) _.merge(l, e.nodeType ? [e] : e);
                        else if (Ga.test(e)) { for (f = f || k.appendChild(b.createElement("div")), g = (Fa.exec(e) || ["", ""])[1].toLowerCase(), h = Ma[g] || Ma._default, f.innerHTML = h[1] + e.replace(Ea, "<$1></$2>") + h[2], j = h[0]; j--;) f = f.lastChild;
                    _.merge(l, f.childNodes), f = k.firstChild, f.textContent = "" } else l.push(b.createTextNode(e)); for (k.textContent = "", m = 0; e = l[m++];)
                    if ((!d || -1 === _.inArray(e, d)) && (i = _.contains(e.ownerDocument, e), f = r(k.appendChild(e), "script"), i && p(f), c))
                        for (j = 0; e = f[j++];) Ja.test(e.type || "") && c.push(e);
                return k }, cleanData: function(a) { for (var b, c, d, e, f = _.event.special, g = 0; void 0 !== (c = a[g]); g++) { if (_.acceptData(c) && (e = c[ra.expando], e && (b = ra.cache[e]))) { if (b.events)
                            for (d in b.events) f[d] ? _.event.remove(c, d) : _.removeEvent(c, d, b.handle);
                        ra.cache[e] && delete ra.cache[e] }
                    delete sa.cache[c[sa.expando]] } } }), _.fn.extend({ text: function(a) { return qa(this, function(a) { return void 0 === a ? _.text(this) : this.empty().each(function() {
                        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a) }) }, null, a, arguments.length) }, append: function() { return this.domManip(arguments, function(a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var b = m(this, a);
                        b.appendChild(a) } }) }, prepend: function() { return this.domManip(arguments, function(a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var b = m(this, a);
                        b.insertBefore(a, b.firstChild) } }) }, before: function() { return this.domManip(arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this) }) }, after: function() { return this.domManip(arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this.nextSibling) }) }, remove: function(a, b) { for (var c, d = a ? _.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || _.cleanData(r(c)), c.parentNode && (b && _.contains(c.ownerDocument, c) && p(r(c, "script")), c.parentNode.removeChild(c)); return this }, empty: function() { for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (_.cleanData(r(a, !1)), a.textContent = ""); return this }, clone: function(a, b) { return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() { return _.clone(this, a, b) }) }, html: function(a) { return qa(this, function(a) { var b = this[0] || {},
                        c = 0,
                        d = this.length; if (void 0 === a && 1 === b.nodeType) return b.innerHTML; if ("string" == typeof a && !Ha.test(a) && !Ma[(Fa.exec(a) || ["", ""])[1].toLowerCase()]) { a = a.replace(Ea, "<$1></$2>"); try { for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (_.cleanData(r(b, !1)), b.innerHTML = a);
                            b = 0 } catch (e) {} }
                    b && this.empty().append(a) }, null, a, arguments.length) }, replaceWith: function() { var a = arguments[0]; return this.domManip(arguments, function(b) { a = this.parentNode, _.cleanData(r(this)), a && a.replaceChild(b, this) }), a && (a.length || a.nodeType) ? this : this.remove() }, detach: function(a) { return this.remove(a, !0) }, domManip: function(a, b) { a = S.apply([], a); var c, d, e, f, g, h, i = 0,
                    j = this.length,
                    k = this,
                    l = j - 1,
                    m = a[0],
                    p = _.isFunction(m); if (p || j > 1 && "string" == typeof m && !Y.checkClone && Ia.test(m)) return this.each(function(c) { var d = k.eq(c);
                    p && (a[0] = m.call(this, c, d.html())), d.domManip(a, b) }); if (j && (c = _.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) { for (e = _.map(r(c, "script"), n), f = e.length; j > i; i++) g = c, i !== l && (g = _.clone(g, !0, !0), f && _.merge(e, r(g, "script"))), b.call(this[i], g, i); if (f)
                        for (h = e[e.length - 1].ownerDocument, _.map(e, o), i = 0; f > i; i++) g = e[i], Ja.test(g.type || "") && !ra.access(g, "globalEval") && _.contains(h, g) && (g.src ? _._evalUrl && _._evalUrl(g.src) : _.globalEval(g.textContent.replace(La, ""))) } return this } }), _.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(a, b) { _.fn[a] = function(a) { for (var c, d = [], e = _(a), f = e.length - 1, g = 0; f >= g; g++) c = g === f ? this : this.clone(!0), _(e[g])[b](c), T.apply(d, c.get()); return this.pushStack(d) } });
        var Na, Oa = {},
            Pa = /^margin/,
            Qa = new RegExp("^(" + va + ")(?!px)[a-z%]+$", "i"),
            Ra = function(b) { return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null) };
        ! function() {
            function b() { g.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", g.innerHTML = "", e.appendChild(f); var b = a.getComputedStyle(g, null);
                c = "1%" !== b.top, d = "4px" === b.width, e.removeChild(f) } var c, d, e = Z.documentElement,
                f = Z.createElement("div"),
                g = Z.createElement("div");
            g.style && (g.style.backgroundClip = "content-box", g.cloneNode(!0).style.backgroundClip = "", Y.clearCloneStyle = "content-box" === g.style.backgroundClip, f.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", f.appendChild(g), a.getComputedStyle && _.extend(Y, { pixelPosition: function() { return b(), c }, boxSizingReliable: function() { return null == d && b(), d }, reliableMarginRight: function() { var b, c = g.appendChild(Z.createElement("div")); return c.style.cssText = g.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", g.style.width = "1px", e.appendChild(f), b = !parseFloat(a.getComputedStyle(c, null).marginRight), e.removeChild(f), g.removeChild(c), b } })) }(), _.swap = function(a, b, c, d) { var e, f, g = {}; for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []); for (f in b) a.style[f] = g[f]; return e };
        var Sa = /^(none|table(?!-c[ea]).+)/,
            Ta = new RegExp("^(" + va + ")(.*)$", "i"),
            Ua = new RegExp("^([+-])=(" + va + ")", "i"),
            Va = { position: "absolute", visibility: "hidden", display: "block" },
            Wa = { letterSpacing: "0", fontWeight: "400" },
            Xa = ["Webkit", "O", "Moz", "ms"];
        _.extend({ cssHooks: { opacity: { get: function(a, b) { if (b) { var c = v(a, "opacity"); return "" === c ? "1" : c } } } }, cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function(a, b, c, d) { if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) { var e, f, g, h = _.camelCase(b),
                        i = a.style; return b = _.cssProps[h] || (_.cssProps[h] = x(i, h)), g = _.cssHooks[b] || _.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ua.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(_.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || _.cssNumber[h] || (c += "px"), Y.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0) } }, css: function(a, b, c, d) { var e, f, g, h = _.camelCase(b); return b = _.cssProps[h] || (_.cssProps[h] = x(a.style, h)), g = _.cssHooks[b] || _.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = v(a, b, d)), "normal" === e && b in Wa && (e = Wa[b]), "" === c || c ? (f = parseFloat(e), c === !0 || _.isNumeric(f) ? f || 0 : e) : e } }), _.each(["height", "width"], function(a, b) { _.cssHooks[b] = { get: function(a, c, d) { return c ? Sa.test(_.css(a, "display")) && 0 === a.offsetWidth ? _.swap(a, Va, function() { return A(a, b, d) }) : A(a, b, d) : void 0 }, set: function(a, c, d) { var e = d && Ra(a); return y(a, c, d ? z(a, b, d, "border-box" === _.css(a, "boxSizing", !1, e), e) : 0) } } }), _.cssHooks.marginRight = w(Y.reliableMarginRight, function(a, b) { return b ? _.swap(a, { display: "inline-block" }, v, [a, "marginRight"]) : void 0 }), _.each({ margin: "", padding: "", border: "Width" }, function(a, b) { _.cssHooks[a + b] = { expand: function(c) { for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + wa[d] + b] = f[d] || f[d - 2] || f[0]; return e } }, Pa.test(a) || (_.cssHooks[a + b].set = y) }), _.fn.extend({ css: function(a, b) { return qa(this, function(a, b, c) { var d, e, f = {},
                        g = 0; if (_.isArray(b)) { for (d = Ra(a), e = b.length; e > g; g++) f[b[g]] = _.css(a, b[g], !1, d); return f } return void 0 !== c ? _.style(a, b, c) : _.css(a, b) }, a, b, arguments.length > 1) }, show: function() { return B(this, !0) }, hide: function() { return B(this) }, toggle: function(a) { return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() { xa(this) ? _(this).show() : _(this).hide() }) } }), _.Tween = C, C.prototype = { constructor: C, init: function(a, b, c, d, e, f) { this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (_.cssNumber[c] ? "" : "px") }, cur: function() { var a = C.propHooks[this.prop]; return a && a.get ? a.get(this) : C.propHooks._default.get(this) }, run: function(a) { var b, c = C.propHooks[this.prop]; return this.options.duration ? this.pos = b = _.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : C.propHooks._default.set(this), this } }, C.prototype.init.prototype = C.prototype, C.propHooks = { _default: { get: function(a) { var b; return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = _.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop] }, set: function(a) { _.fx.step[a.prop] ? _.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[_.cssProps[a.prop]] || _.cssHooks[a.prop]) ? _.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now } } }, C.propHooks.scrollTop = C.propHooks.scrollLeft = { set: function(a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now) } }, _.easing = { linear: function(a) { return a }, swing: function(a) { return .5 - Math.cos(a * Math.PI) / 2 } }, _.fx = C.prototype.init, _.fx.step = {};
        var Ya, Za, $a = /^(?:toggle|show|hide)$/,
            _a = new RegExp("^(?:([+-])=|)(" + va + ")([a-z%]*)$", "i"),
            ab = /queueHooks$/,
            bb = [G],
            cb = { "*": [function(a, b) { var c = this.createTween(a, b),
                        d = c.cur(),
                        e = _a.exec(b),
                        f = e && e[3] || (_.cssNumber[a] ? "" : "px"),
                        g = (_.cssNumber[a] || "px" !== f && +d) && _a.exec(_.css(c.elem, a)),
                        h = 1,
                        i = 20; if (g && g[3] !== f) { f = f || g[3], e = e || [], g = +d || 1;
                        do h = h || ".5", g /= h, _.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i) } return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c }] };
        _.Animation = _.extend(I, { tweener: function(a, b) { _.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" "); for (var c, d = 0, e = a.length; e > d; d++) c = a[d], cb[c] = cb[c] || [], cb[c].unshift(b) }, prefilter: function(a, b) { b ? bb.unshift(a) : bb.push(a) } }), _.speed = function(a, b, c) { var d = a && "object" == typeof a ? _.extend({}, a) : { complete: c || !c && b || _.isFunction(a) && a, duration: a, easing: c && b || b && !_.isFunction(b) && b }; return d.duration = _.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in _.fx.speeds ? _.fx.speeds[d.duration] : _.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() { _.isFunction(d.old) && d.old.call(this), d.queue && _.dequeue(this, d.queue) }, d }, _.fn.extend({
                fadeTo: function(a, b, c, d) { return this.filter(xa).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d) },
                animate: function(a, b, c, d) { var e = _.isEmptyObject(a),
                        f = _.speed(b, c, d),
                        g = function() { var b = I(this, _.extend({}, a), f);
                            (e || ra.get(this, "finish")) && b.stop(!0) }; return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g) },
                stop: function(a, b, c) { var d = function(a) { var b = a.stop;
                        delete a.stop, b(c) }; return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() { var b = !0,
                            e = null != a && a + "queueHooks",
                            f = _.timers,
                            g = ra.get(this); if (e) g[e] && g[e].stop && d(g[e]);
                        else
                            for (e in g) g[e] && g[e].stop && ab.test(e) && d(g[e]); for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                        (b || !c) && _.dequeue(this, a) }) },
                finish: function(a) {
                    return a !== !1 && (a = a || "fx"), this.each(function() {
                        var b, c = ra.get(this),
                            d = c[a + "queue"],
                            e = c[a + "queueHooks"],
                            f = _.timers,
                            g = d ? d.length : 0;
                        for (c.finish = !0, _.queue(this, a, []),
                            e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                        for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                        delete c.finish
                    })
                }
            }), _.each(["toggle", "show", "hide"], function(a, b) { var c = _.fn[b];
                _.fn[b] = function(a, d, e) { return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(E(b, !0), a, d, e) } }), _.each({ slideDown: E("show"), slideUp: E("hide"), slideToggle: E("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(a, b) { _.fn[a] = function(a, c, d) { return this.animate(b, a, c, d) } }), _.timers = [], _.fx.tick = function() { var a, b = 0,
                    c = _.timers; for (Ya = _.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
                c.length || _.fx.stop(), Ya = void 0 }, _.fx.timer = function(a) { _.timers.push(a), a() ? _.fx.start() : _.timers.pop() }, _.fx.interval = 13, _.fx.start = function() { Za || (Za = setInterval(_.fx.tick, _.fx.interval)) }, _.fx.stop = function() { clearInterval(Za), Za = null }, _.fx.speeds = { slow: 600, fast: 200, _default: 400 }, _.fn.delay = function(a, b) { return a = _.fx ? _.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) { var d = setTimeout(b, a);
                    c.stop = function() { clearTimeout(d) } }) },
            function() { var a = Z.createElement("input"),
                    b = Z.createElement("select"),
                    c = b.appendChild(Z.createElement("option"));
                a.type = "checkbox", Y.checkOn = "" !== a.value, Y.optSelected = c.selected, b.disabled = !0, Y.optDisabled = !c.disabled, a = Z.createElement("input"), a.value = "t", a.type = "radio", Y.radioValue = "t" === a.value }();
        var db, eb, fb = _.expr.attrHandle;
        _.fn.extend({ attr: function(a, b) { return qa(this, _.attr, a, b, arguments.length > 1) }, removeAttr: function(a) { return this.each(function() { _.removeAttr(this, a) }) } }), _.extend({ attr: function(a, b, c) { var d, e, f = a.nodeType; if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === za ? _.prop(a, b, c) : (1 === f && _.isXMLDoc(a) || (b = b.toLowerCase(), d = _.attrHooks[b] || (_.expr.match.bool.test(b) ? eb : db)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = _.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void _.removeAttr(a, b)) }, removeAttr: function(a, b) { var c, d, e = 0,
                    f = b && b.match(na); if (f && 1 === a.nodeType)
                    for (; c = f[e++];) d = _.propFix[c] || c, _.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c) }, attrHooks: { type: { set: function(a, b) { if (!Y.radioValue && "radio" === b && _.nodeName(a, "input")) { var c = a.value; return a.setAttribute("type", b), c && (a.value = c), b } } } } }), eb = { set: function(a, b, c) { return b === !1 ? _.removeAttr(a, c) : a.setAttribute(c, c), c } }, _.each(_.expr.match.bool.source.match(/\w+/g), function(a, b) { var c = fb[b] || _.find.attr;
            fb[b] = function(a, b, d) { var e, f; return d || (f = fb[b], fb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, fb[b] = f), e } });
        var gb = /^(?:input|select|textarea|button)$/i;
        _.fn.extend({ prop: function(a, b) { return qa(this, _.prop, a, b, arguments.length > 1) }, removeProp: function(a) { return this.each(function() { delete this[_.propFix[a] || a] }) } }), _.extend({ propFix: { "for": "htmlFor", "class": "className" }, prop: function(a, b, c) { var d, e, f, g = a.nodeType; if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !_.isXMLDoc(a), f && (b = _.propFix[b] || b, e = _.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b] }, propHooks: { tabIndex: { get: function(a) { return a.hasAttribute("tabindex") || gb.test(a.nodeName) || a.href ? a.tabIndex : -1 } } } }), Y.optSelected || (_.propHooks.selected = { get: function(a) { var b = a.parentNode; return b && b.parentNode && b.parentNode.selectedIndex, null } }), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { _.propFix[this.toLowerCase()] = this });
        var hb = /[\t\r\n\f]/g;
        _.fn.extend({ addClass: function(a) { var b, c, d, e, f, g, h = "string" == typeof a && a,
                    i = 0,
                    j = this.length; if (_.isFunction(a)) return this.each(function(b) { _(this).addClass(a.call(this, b, this.className)) }); if (h)
                    for (b = (a || "").match(na) || []; j > i; i++)
                        if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : " ")) { for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                            g = _.trim(d), c.className !== g && (c.className = g) }
                return this }, removeClass: function(a) { var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a,
                    i = 0,
                    j = this.length; if (_.isFunction(a)) return this.each(function(b) { _(this).removeClass(a.call(this, b, this.className)) }); if (h)
                    for (b = (a || "").match(na) || []; j > i; i++)
                        if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : "")) { for (f = 0; e = b[f++];)
                                for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
                            g = a ? _.trim(d) : "", c.className !== g && (c.className = g) }
                return this }, toggleClass: function(a, b) { var c = typeof a; return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : _.isFunction(a) ? this.each(function(c) { _(this).toggleClass(a.call(this, c, this.className, b), b) }) : this.each(function() { if ("string" === c)
                        for (var b, d = 0, e = _(this), f = a.match(na) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                    else(c === za || "boolean" === c) && (this.className && ra.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : ra.get(this, "__className__") || "") }) }, hasClass: function(a) { for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                    if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(hb, " ").indexOf(b) >= 0) return !0;
                return !1 } });
        var ib = /\r/g;
        _.fn.extend({ val: function(a) { var b, c, d, e = this[0]; { if (arguments.length) return d = _.isFunction(a), this.each(function(c) { var e;
                        1 === this.nodeType && (e = d ? a.call(this, c, _(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : _.isArray(e) && (e = _.map(e, function(a) { return null == a ? "" : a + "" })), b = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e)) }); if (e) return b = _.valHooks[e.type] || _.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ib, "") : null == c ? "" : c) } } }), _.extend({ valHooks: { option: { get: function(a) { var b = _.find.attr(a, "value"); return null != b ? b : _.trim(_.text(a)) } }, select: { get: function(a) { for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                            if (c = d[i], (c.selected || i === e) && (Y.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !_.nodeName(c.parentNode, "optgroup"))) { if (b = _(c).val(), f) return b;
                                g.push(b) }
                        return g }, set: function(a, b) { for (var c, d, e = a.options, f = _.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = _.inArray(d.value, f) >= 0) && (c = !0); return c || (a.selectedIndex = -1), f } } } }), _.each(["radio", "checkbox"], function() { _.valHooks[this] = { set: function(a, b) { return _.isArray(b) ? a.checked = _.inArray(_(a).val(), b) >= 0 : void 0 } }, Y.checkOn || (_.valHooks[this].get = function(a) { return null === a.getAttribute("value") ? "on" : a.value }) }), _.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) { _.fn[b] = function(a, c) { return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b) } }), _.fn.extend({ hover: function(a, b) { return this.mouseenter(a).mouseleave(b || a) }, bind: function(a, b, c) { return this.on(a, null, b, c) }, unbind: function(a, b) { return this.off(a, null, b) }, delegate: function(a, b, c, d) { return this.on(b, a, c, d) }, undelegate: function(a, b, c) { return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c) } });
        var jb = _.now(),
            kb = /\?/;
        _.parseJSON = function(a) { return JSON.parse(a + "") }, _.parseXML = function(a) { var b, c; if (!a || "string" != typeof a) return null; try { c = new DOMParser, b = c.parseFromString(a, "text/xml") } catch (d) { b = void 0 } return (!b || b.getElementsByTagName("parsererror").length) && _.error("Invalid XML: " + a), b };
        var lb = /#.*$/,
            mb = /([?&])_=[^&]*/,
            nb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            ob = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            pb = /^(?:GET|HEAD)$/,
            qb = /^\/\//,
            rb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            sb = {},
            tb = {},
            ub = "*/".concat("*"),
            vb = a.location.href,
            wb = rb.exec(vb.toLowerCase()) || [];
        _.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: vb, type: "GET", isLocal: ob.test(wb[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": ub, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": _.parseJSON, "text xml": _.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function(a, b) { return b ? L(L(a, _.ajaxSettings), b) : L(_.ajaxSettings, a) }, ajaxPrefilter: J(sb), ajaxTransport: J(tb), ajax: function(a, b) {
                function c(a, b, c, g) { var i, k, r, s, u, w = b;
                    2 !== t && (t = 2, h && clearTimeout(h), d = void 0, f = g || "", v.readyState = a > 0 ? 4 : 0, i = a >= 200 && 300 > a || 304 === a, c && (s = M(l, v, c)), s = N(l, s, v, i), i ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (_.lastModified[e] = u), u = v.getResponseHeader("etag"), u && (_.etag[e] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, k = s.data, r = s.error, i = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || w) + "", i ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, j && n.trigger(i ? "ajaxSuccess" : "ajaxError", [v, l, i ? k : r]), p.fireWith(m, [v, w]), j && (n.trigger("ajaxComplete", [v, l]), --_.active || _.event.trigger("ajaxStop"))) } "object" == typeof a && (b = a, a = void 0), b = b || {}; var d, e, f, g, h, i, j, k, l = _.ajaxSetup({}, b),
                    m = l.context || l,
                    n = l.context && (m.nodeType || m.jquery) ? _(m) : _.event,
                    o = _.Deferred(),
                    p = _.Callbacks("once memory"),
                    q = l.statusCode || {},
                    r = {},
                    s = {},
                    t = 0,
                    u = "canceled",
                    v = { readyState: 0, getResponseHeader: function(a) { var b; if (2 === t) { if (!g)
                                    for (g = {}; b = nb.exec(f);) g[b[1].toLowerCase()] = b[2];
                                b = g[a.toLowerCase()] } return null == b ? null : b }, getAllResponseHeaders: function() { return 2 === t ? f : null }, setRequestHeader: function(a, b) { var c = a.toLowerCase(); return t || (a = s[c] = s[c] || a, r[a] = b), this }, overrideMimeType: function(a) { return t || (l.mimeType = a), this }, statusCode: function(a) { var b; if (a)
                                if (2 > t)
                                    for (b in a) q[b] = [q[b], a[b]];
                                else v.always(a[v.status]);
                            return this }, abort: function(a) { var b = a || u; return d && d.abort(b), c(0, b), this } }; if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || vb) + "").replace(lb, "").replace(qb, wb[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = _.trim(l.dataType || "*").toLowerCase().match(na) || [""], null == l.crossDomain && (i = rb.exec(l.url.toLowerCase()), l.crossDomain = !(!i || i[1] === wb[1] && i[2] === wb[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (wb[3] || ("http:" === wb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = _.param(l.data, l.traditional)), K(sb, l, b, v), 2 === t) return v;
                j = _.event && l.global, j && 0 === _.active++ && _.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !pb.test(l.type), e = l.url, l.hasContent || (l.data && (e = l.url += (kb.test(e) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = mb.test(e) ? e.replace(mb, "$1_=" + jb++) : e + (kb.test(e) ? "&" : "?") + "_=" + jb++)), l.ifModified && (_.lastModified[e] && v.setRequestHeader("If-Modified-Since", _.lastModified[e]), _.etag[e] && v.setRequestHeader("If-None-Match", _.etag[e])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : l.accepts["*"]); for (k in l.headers) v.setRequestHeader(k, l.headers[k]); if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t)) return v.abort();
                u = "abort"; for (k in { success: 1, error: 1, complete: 1 }) v[k](l[k]); if (d = K(tb, l, b, v)) { v.readyState = 1, j && n.trigger("ajaxSend", [v, l]), l.async && l.timeout > 0 && (h = setTimeout(function() { v.abort("timeout") }, l.timeout)); try { t = 1, d.send(r, c) } catch (w) { if (!(2 > t)) throw w;
                        c(-1, w) } } else c(-1, "No Transport"); return v }, getJSON: function(a, b, c) { return _.get(a, b, c, "json") }, getScript: function(a, b) { return _.get(a, void 0, b, "script") } }), _.each(["get", "post"], function(a, b) { _[b] = function(a, c, d, e) { return _.isFunction(c) && (e = e || d, d = c, c = void 0), _.ajax({ url: a, type: b, dataType: e, data: c, success: d }) } }), _._evalUrl = function(a) { return _.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) }, _.fn.extend({ wrapAll: function(a) { var b; return _.isFunction(a) ? this.each(function(b) { _(this).wrapAll(a.call(this, b)) }) : (this[0] && (b = _(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() { for (var a = this; a.firstElementChild;) a = a.firstElementChild; return a }).append(this)), this) }, wrapInner: function(a) { return _.isFunction(a) ? this.each(function(b) { _(this).wrapInner(a.call(this, b)) }) : this.each(function() { var b = _(this),
                        c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a) }) }, wrap: function(a) { var b = _.isFunction(a); return this.each(function(c) { _(this).wrapAll(b ? a.call(this, c) : a) }) }, unwrap: function() { return this.parent().each(function() { _.nodeName(this, "body") || _(this).replaceWith(this.childNodes) }).end() } }), _.expr.filters.hidden = function(a) { return a.offsetWidth <= 0 && a.offsetHeight <= 0 }, _.expr.filters.visible = function(a) { return !_.expr.filters.hidden(a) };
        var xb = /%20/g,
            yb = /\[\]$/,
            zb = /\r?\n/g,
            Ab = /^(?:submit|button|image|reset|file)$/i,
            Bb = /^(?:input|select|textarea|keygen)/i;
        _.param = function(a, b) { var c, d = [],
                e = function(a, b) { b = _.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b) }; if (void 0 === b && (b = _.ajaxSettings && _.ajaxSettings.traditional), _.isArray(a) || a.jquery && !_.isPlainObject(a)) _.each(a, function() { e(this.name, this.value) });
            else
                for (c in a) O(c, a[c], b, e); return d.join("&").replace(xb, "+") }, _.fn.extend({ serialize: function() { return _.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var a = _.prop(this, "elements"); return a ? _.makeArray(a) : this }).filter(function() { var a = this.type; return this.name && !_(this).is(":disabled") && Bb.test(this.nodeName) && !Ab.test(a) && (this.checked || !ya.test(a)) }).map(function(a, b) { var c = _(this).val(); return null == c ? null : _.isArray(c) ? _.map(c, function(a) { return { name: b.name, value: a.replace(zb, "\r\n") } }) : { name: b.name, value: c.replace(zb, "\r\n") } }).get() } }), _.ajaxSettings.xhr = function() { try { return new XMLHttpRequest } catch (a) {} };
        var Cb = 0,
            Db = {},
            Eb = { 0: 200, 1223: 204 },
            Fb = _.ajaxSettings.xhr();
        a.attachEvent && a.attachEvent("onunload", function() { for (var a in Db) Db[a]() }), Y.cors = !!Fb && "withCredentials" in Fb, Y.ajax = Fb = !!Fb, _.ajaxTransport(function(a) { var b; return Y.cors || Fb && !a.crossDomain ? { send: function(c, d) { var e, f = a.xhr(),
                        g = ++Cb; if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                        for (e in a.xhrFields) f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest"); for (e in c) f.setRequestHeader(e, c[e]);
                    b = function(a) { return function() { b && (delete Db[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Eb[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? { text: f.responseText } : void 0, f.getAllResponseHeaders())) } }, f.onload = b(), f.onerror = b("error"), b = Db[g] = b("abort"); try { f.send(a.hasContent && a.data || null) } catch (h) { if (b) throw h } }, abort: function() { b && b() } } : void 0 }), _.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function(a) { return _.globalEval(a), a } } }), _.ajaxPrefilter("script", function(a) { void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET") }), _.ajaxTransport("script", function(a) { if (a.crossDomain) { var b, c; return { send: function(d, e) { b = _("<script>").prop({ async: !0, charset: a.scriptCharset, src: a.url }).on("load error", c = function(a) { b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type) }), Z.head.appendChild(b[0]) }, abort: function() { c && c() } } } });
        var Gb = [],
            Hb = /(=)\?(?=&|$)|\?\?/;
        _.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var a = Gb.pop() || _.expando + "_" + jb++; return this[a] = !0, a } }), _.ajaxPrefilter("json jsonp", function(b, c, d) { var e, f, g, h = b.jsonp !== !1 && (Hb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hb.test(b.data) && "data"); return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = _.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Hb, "$1" + e) : b.jsonp !== !1 && (b.url += (kb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() { return g || _.error(e + " was not called"), g[0] }, b.dataTypes[0] = "json", f = a[e], a[e] = function() { g = arguments }, d.always(function() { a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Gb.push(e)), g && _.isFunction(f) && f(g[0]), g = f = void 0 }), "script") : void 0 }), _.parseHTML = function(a, b, c) { if (!a || "string" != typeof a) return null; "boolean" == typeof b && (c = b, b = !1), b = b || Z; var d = ga.exec(a),
                e = !c && []; return d ? [b.createElement(d[1])] : (d = _.buildFragment([a], b, e), e && e.length && _(e).remove(), _.merge([], d.childNodes)) };
        var Ib = _.fn.load;
        _.fn.load = function(a, b, c) { if ("string" != typeof a && Ib) return Ib.apply(this, arguments); var d, e, f, g = this,
                h = a.indexOf(" "); return h >= 0 && (d = _.trim(a.slice(h)), a = a.slice(0, h)), _.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && _.ajax({ url: a, type: e, dataType: "html", data: b }).done(function(a) { f = arguments, g.html(d ? _("<div>").append(_.parseHTML(a)).find(d) : a) }).complete(c && function(a, b) { g.each(c, f || [a.responseText, b, a]) }), this }, _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) { _.fn[b] = function(a) { return this.on(b, a) } }), _.expr.filters.animated = function(a) { return _.grep(_.timers, function(b) { return a === b.elem }).length };
        var Jb = a.document.documentElement;
        _.offset = { setOffset: function(a, b, c) { var d, e, f, g, h, i, j, k = _.css(a, "position"),
                    l = _(a),
                    m = {}; "static" === k && (a.style.position = "relative"), h = l.offset(), f = _.css(a, "top"), i = _.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), _.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m) } }, _.fn.extend({ offset: function(a) { if (arguments.length) return void 0 === a ? this : this.each(function(b) { _.offset.setOffset(this, a, b) }); var b, c, d = this[0],
                    e = { top: 0, left: 0 },
                    f = d && d.ownerDocument; if (f) return b = f.documentElement, _.contains(b, d) ? (typeof d.getBoundingClientRect !== za && (e = d.getBoundingClientRect()), c = P(f), { top: e.top + c.pageYOffset - b.clientTop, left: e.left + c.pageXOffset - b.clientLeft }) : e }, position: function() { if (this[0]) { var a, b, c = this[0],
                        d = { top: 0, left: 0 }; return "fixed" === _.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), _.nodeName(a[0], "html") || (d = a.offset()), d.top += _.css(a[0], "borderTopWidth", !0), d.left += _.css(a[0], "borderLeftWidth", !0)), { top: b.top - d.top - _.css(c, "marginTop", !0), left: b.left - d.left - _.css(c, "marginLeft", !0) } } }, offsetParent: function() { return this.map(function() { for (var a = this.offsetParent || Jb; a && !_.nodeName(a, "html") && "static" === _.css(a, "position");) a = a.offsetParent; return a || Jb }) } }), _.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(b, c) { var d = "pageYOffset" === c;
            _.fn[b] = function(e) { return qa(this, function(b, e, f) { var g = P(b); return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f) }, b, e, arguments.length, null) } }), _.each(["top", "left"], function(a, b) { _.cssHooks[b] = w(Y.pixelPosition, function(a, c) { return c ? (c = v(a, b), Qa.test(c) ? _(a).position()[b] + "px" : c) : void 0 }) }), _.each({ Height: "height", Width: "width" }, function(a, b) { _.each({ padding: "inner" + a, content: b, "": "outer" + a }, function(c, d) { _.fn[d] = function(d, e) { var f = arguments.length && (c || "boolean" != typeof d),
                        g = c || (d === !0 || e === !0 ? "margin" : "border"); return qa(this, function(b, c, d) { var e; return _.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? _.css(b, c, g) : _.style(b, c, d, g) }, b, f ? d : void 0, f, null) } }) }), _.fn.size = function() { return this.length }, _.fn.andSelf = _.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() { return _ });
        var Kb = a.jQuery,
            Lb = a.$;
        return _.noConflict = function(b) { return a.$ === _ && (a.$ = Lb), b && a.jQuery === _ && (a.jQuery = Kb), _ }, typeof b === za && (a.jQuery = a.$ = _), _
    }), function(a, b, c) {
        "use strict";

        function d(a) { return function() { var b, c, d = arguments[0],
                    e = "[" + (a ? a + ":" : "") + d + "] ",
                    f = arguments[1],
                    g = arguments,
                    h = function(a) { return "function" == typeof a ? a.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof a ? "undefined" : "string" != typeof a ? JSON.stringify(a) : a }; for (b = e + f.replace(/\{\d+\}/g, function(a) { var b, c = +a.slice(1, -1); return c + 2 < g.length ? (b = g[c + 2], "function" == typeof b ? b.toString().replace(/ ?\{[\s\S]*$/, "") : "undefined" == typeof b ? "undefined" : "string" != typeof b ? Q(b) : b) : a }), b = b + "\nhttp://errors.angularjs.org/1.2.32/" + (a ? a + "/" : "") + d, c = 2; c < arguments.length; c++) b = b + (2 == c ? "?" : "&") + "p" + (c - 2) + "=" + encodeURIComponent(h(arguments[c])); return new Error(b) } }

        function e(a) { if (null == a || z(a)) return !1; var b = a.length; return 1 === a.nodeType && b ? !0 : u(a) || Gc(a) || 0 === b || "number" == typeof b && b > 0 && b - 1 in a }

        function f(a, b, c) { var d; if (a)
                if (x(a))
                    for (d in a) "prototype" == d || "length" == d || "name" == d || a.hasOwnProperty && !a.hasOwnProperty(d) || b.call(c, a[d], d);
                else if (Gc(a) || e(a))
                for (d = 0; d < a.length; d++) b.call(c, a[d], d);
            else if (a.forEach && a.forEach !== f) a.forEach(b, c);
            else
                for (d in a) a.hasOwnProperty(d) && b.call(c, a[d], d); return a }

        function g(a) { var b = []; for (var c in a) a.hasOwnProperty(c) && b.push(c); return b.sort() }

        function h(a, b, c) { for (var d = g(a), e = 0; e < d.length; e++) b.call(c, a[d[e]], d[e]); return d }

        function i(a) { return function(b, c) { a(c, b) } }

        function j() { for (var a, b = Fc.length; b;) { if (b--, a = Fc[b].charCodeAt(0), 57 == a) return Fc[b] = "A", Fc.join(""); if (90 != a) return Fc[b] = String.fromCharCode(a + 1), Fc.join("");
                Fc[b] = "0" } return Fc.unshift("0"), Fc.join("") }

        function k(a, b) { b ? a.$$hashKey = b : delete a.$$hashKey }

        function l(a) { var b = a.$$hashKey; return f(arguments, function(b) { b !== a && f(b, function(b, c) { a[c] = b }) }), k(a, b), a }

        function m(a) { return parseInt(a, 10) }

        function n(a, b) { return l(new(l(function() {}, { prototype: a })), b) }

        function o() {}

        function p(a) { return a }

        function q(a) { return function() { return a } }

        function r(a) { return "undefined" == typeof a }

        function s(a) { return "undefined" != typeof a }

        function t(a) { return null != a && "object" == typeof a }

        function u(a) { return "string" == typeof a }

        function v(a) { return "number" == typeof a }

        function w(a) { return "[object Date]" === Cc.call(a) }

        function x(a) { return "function" == typeof a }

        function y(a) { return "[object RegExp]" === Cc.call(a) }

        function z(a) { return a && a.document && a.location && a.alert && a.setInterval }

        function A(a) { return a && a.$evalAsync && a.$watch }

        function B(a) { return "[object File]" === Cc.call(a) }

        function C(a) { return "[object Blob]" === Cc.call(a) }

        function D(a) { return a && x(a.then) }

        function E(a) { return !(!a || !(a.nodeName || a.prop && a.attr && a.find)) }

        function F(a, b, c) { var d = []; return f(a, function(a, e, f) { d.push(b.call(c, a, e, f)) }), d }

        function G(a, b) { return -1 != H(a, b) }

        function H(a, b) { if (a.indexOf) return a.indexOf(b); for (var c = 0; c < a.length; c++)
                if (b === a[c]) return c;
            return -1 }

        function I(a, b) { var c = H(a, b); return c >= 0 && a.splice(c, 1), b }

        function J(a, b, c, d) { if (z(a) || A(a)) throw Dc("cpws", "Can't copy! Making copies of Window or Scope instances is not supported."); if (b) { if (a === b) throw Dc("cpi", "Can't copy! Source and destination are identical."); if (c = c || [], d = d || [], t(a)) { var e = H(c, a); if (-1 !== e) return d[e];
                    c.push(a), d.push(b) } var g; if (Gc(a)) { b.length = 0; for (var h = 0; h < a.length; h++) g = J(a[h], null, c, d), t(a[h]) && (c.push(a[h]), d.push(g)), b.push(g) } else { var i = b.$$hashKey;
                    Gc(b) ? b.length = 0 : f(b, function(a, c) { delete b[c] }); for (var j in a) g = J(a[j], null, c, d), t(a[j]) && (c.push(a[j]), d.push(g)), b[j] = g;
                    k(b, i) } } else b = a, a && (Gc(a) ? b = J(a, [], c, d) : w(a) ? b = new Date(a.getTime()) : y(a) ? (b = new RegExp(a.source, a.toString().match(/[^\/]*$/)[0]), b.lastIndex = a.lastIndex) : t(a) && (b = J(a, {}, c, d))); return b }

        function K(a, b) { if (Gc(a)) { b = b || []; for (var c = 0; c < a.length; c++) b[c] = a[c] } else if (t(a)) { b = b || {}; for (var d in a) !rc.call(a, d) || "$" === d.charAt(0) && "$" === d.charAt(1) || (b[d] = a[d]) } return b || a }

        function L(a, b) { if (a === b) return !0; if (null === a || null === b) return !1; if (a !== a && b !== b) return !0; var d, e, f, g = typeof a,
                h = typeof b; if (g == h && "object" == g) { if (!Gc(a)) { if (w(a)) return w(b) ? isNaN(a.getTime()) && isNaN(b.getTime()) || a.getTime() === b.getTime() : !1; if (y(a) && y(b)) return a.toString() == b.toString(); if (A(a) || A(b) || z(a) || z(b) || Gc(b)) return !1;
                    f = {}; for (e in a)
                        if ("$" !== e.charAt(0) && !x(a[e])) { if (!L(a[e], b[e])) return !1;
                            f[e] = !0 }
                    for (e in b)
                        if (!f.hasOwnProperty(e) && "$" !== e.charAt(0) && b[e] !== c && !x(b[e])) return !1;
                    return !0 } if (!Gc(b)) return !1; if ((d = a.length) == b.length) { for (e = 0; d > e; e++)
                        if (!L(a[e], b[e])) return !1;
                    return !0 } } return !1 }

        function M(a, b, c) { return a.concat(Ac.call(b, c)) }

        function N(a, b) { return Ac.call(a, b || 0) }

        function O(a, b) { var c = arguments.length > 2 ? N(arguments, 2) : []; return !x(b) || b instanceof RegExp ? b : c.length ? function() { return arguments.length ? b.apply(a, c.concat(Ac.call(arguments, 0))) : b.apply(a, c) } : function() { return arguments.length ? b.apply(a, arguments) : b.call(a) } }

        function P(a, d) { var e = d; return "string" == typeof a && "$" === a.charAt(0) ? e = c : z(d) ? e = "$WINDOW" : d && b === d ? e = "$DOCUMENT" : A(d) && (e = "$SCOPE"), e }

        function Q(a, b) { return "undefined" == typeof a ? c : JSON.stringify(a, P, b ? "  " : null) }

        function R(a) { return u(a) ? JSON.parse(a) : a }

        function S(a) { if ("function" == typeof a) a = !0;
            else if (a && 0 !== a.length) { var b = qc("" + a);
                a = !("f" == b || "0" == b || "false" == b || "no" == b || "n" == b || "[]" == b) } else a = !1; return a }

        function T(a) { a = wc(a).clone(); try { a.empty() } catch (b) {} var c = 3,
                d = wc("<div>").append(a).html(); try { return a[0].nodeType === c ? qc(d) : d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(a, b) { return "<" + qc(b) }) } catch (b) { return qc(d) } }

        function U(a) { try { return decodeURIComponent(a) } catch (b) {} }

        function V(a) { var b, c, d = {}; return f((a || "").split("&"), function(a) { if (a && (b = a.replace(/\+/g, "%20").split("="), c = U(b[0]), s(c))) { var e = s(b[1]) ? U(b[1]) : !0;
                    rc.call(d, c) ? Gc(d[c]) ? d[c].push(e) : d[c] = [d[c], e] : d[c] = e } }), d }

        function W(a) { var b = []; return f(a, function(a, c) { Gc(a) ? f(a, function(a) { b.push(Y(c, !0) + (a === !0 ? "" : "=" + Y(a, !0))) }) : b.push(Y(c, !0) + (a === !0 ? "" : "=" + Y(a, !0))) }), b.length ? b.join("&") : "" }

        function X(a) { return Y(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+") }

        function Y(a, b) { return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, b ? "%20" : "+") }

        function Z(a, c) {
            function d(a) { a && h.push(a) } var e, g, h = [a],
                i = ["ng:app", "ng-app", "x-ng-app", "data-ng-app"],
                j = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
            f(i, function(c) { i[c] = !0, d(b.getElementById(c)), c = c.replace(":", "\\:"), a.querySelectorAll && (f(a.querySelectorAll("." + c), d), f(a.querySelectorAll("." + c + "\\:"), d), f(a.querySelectorAll("[" + c + "]"), d)) }), f(h, function(a) { if (!e) { var b = " " + a.className + " ",
                        c = j.exec(b);
                    c ? (e = a, g = (c[2] || "").replace(/\s+/g, ",")) : f(a.attributes, function(b) {!e && i[b.name] && (e = a, g = b.value) }) } }), e && c(e, g ? [g] : []) }

        function $(c, d) { var e = function() { if (c = wc(c), c.injector()) { var a = c[0] === b ? "document" : T(c); throw Dc("btstrpd", "App Already Bootstrapped with this Element '{0}'", a.replace(/</, "&lt;").replace(/>/, "&gt;")) }
                    d = d || [], d.unshift(["$provide", function(a) { a.value("$rootElement", c) }]), d.unshift("ng"); var e = Ha(d); return e.invoke(["$rootScope", "$rootElement", "$compile", "$injector", "$animate", function(a, b, c, d, e) { a.$apply(function() { b.data("$injector", d), c(b)(a) }) }]), e },
                g = /^NG_DEFER_BOOTSTRAP!/; return a && !g.test(a.name) ? e() : (a.name = a.name.replace(g, ""), void(Ec.resumeBootstrap = function(a) { f(a, function(a) { d.push(a) }), e() })) }

        function _(a, b) { return b = b || "_", a.replace(Jc, function(a, c) { return (c ? b : "") + a.toLowerCase() }) }

        function aa() { xc = a.jQuery, xc && xc.fn.on ? (wc = xc, l(xc.fn, { scope: Xc.scope, isolateScope: Xc.isolateScope, controller: Xc.controller, injector: Xc.injector, inheritedData: Xc.inheritedData }), ka("remove", !0, !0, !1), ka("empty", !1, !1, !1), ka("html", !1, !1, !0)) : wc = oa, Ec.element = wc }

        function ba(a, b, c) { if (!a) throw Dc("areq", "Argument '{0}' is {1}", b || "?", c || "required"); return a }

        function ca(a, b, c) { return c && Gc(a) && (a = a[a.length - 1]), ba(x(a), b, "not a function, got " + (a && "object" == typeof a ? a.constructor.name || "Object" : typeof a)), a }

        function da(a, b) { if ("hasOwnProperty" === a) throw Dc("badname", "hasOwnProperty is not a valid {0} name", b) }

        function ea(a, b, c) { if (!b) return a; for (var d, e = b.split("."), f = a, g = e.length, h = 0; g > h; h++) d = e[h], a && (a = (f = a)[d]); return !c && x(a) ? O(f, a) : a }

        function fa(a) { var b = a[0],
                c = a[a.length - 1]; if (b === c) return wc(b); var d = b,
                e = [d];
            do { if (d = d.nextSibling, !d) break;
                e.push(d) } while (d !== c); return wc(e) }

        function ga(a) {
            function b(a, b, c) { return a[b] || (a[b] = c()) } var c = d("$injector"),
                e = d("ng"),
                f = b(a, "angular", Object); return f.$$minErr = f.$$minErr || d, b(f, "module", function() { var a = {}; return function(d, f, g) { var h = function(a, b) { if ("hasOwnProperty" === a) throw e("badname", "hasOwnProperty is not a valid {0} name", b) }; return h(d, "module"), f && a.hasOwnProperty(d) && (a[d] = null), b(a, d, function() {
                        function a(a, c, d) { return function() { return b[d || "push"]([a, c, arguments]), i } } if (!f) throw c("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", d); var b = [],
                            e = [],
                            h = a("$injector", "invoke"),
                            i = { _invokeQueue: b, _runBlocks: e, requires: f, name: d, provider: a("$provide", "provider"), factory: a("$provide", "factory"), service: a("$provide", "service"), value: a("$provide", "value"), constant: a("$provide", "constant", "unshift"), animation: a("$animateProvider", "register"), filter: a("$filterProvider", "register"), controller: a("$controllerProvider", "register"), directive: a("$compileProvider", "directive"), config: h, run: function(a) { return e.push(a), this } }; return g && h(g), i }) } }) }

        function ha(b) { l(b, { bootstrap: $, copy: J, extend: l, equals: L, element: wc, forEach: f, injector: Ha, noop: o, bind: O, toJson: Q, fromJson: R, identity: p, isUndefined: r, isDefined: s, isString: u, isFunction: x, isObject: t, isNumber: v, isElement: E, isArray: Gc, version: Kc, isDate: w, lowercase: qc, uppercase: sc, callbacks: { counter: 0 }, $$minErr: d, $$csp: Ic }), yc = ga(a); try { yc("ngLocale") } catch (c) { yc("ngLocale", []).provider("$locale", cb) }
            yc("ng", ["ngLocale"], ["$provide", function(a) { a.provider({ $$sanitizeUri: Gb }), a.provider("$compile", Oa).directive({ a: Hd, input: Sd, textarea: Sd, form: Ld, script: Ae, select: De, style: Fe, option: Ee, ngBind: ce, ngBindHtml: ee, ngBindTemplate: de, ngClass: fe, ngClassEven: he, ngClassOdd: ge, ngCloak: ie, ngController: je, ngForm: Md, ngHide: ue, ngIf: me, ngInclude: ne, ngInit: pe, ngNonBindable: qe, ngPluralize: re, ngRepeat: se, ngShow: te, ngStyle: ve, ngSwitch: we, ngSwitchWhen: xe, ngSwitchDefault: ye, ngOptions: Ce, ngTransclude: ze, ngModel: Yd, ngList: _d, ngChange: Zd, required: $d, ngRequired: $d, ngValue: be }).directive({ ngInclude: oe }).directive(Id).directive(ke), a.provider({ $anchorScroll: Ia, $animate: ed, $browser: La, $cacheFactory: Ma, $controller: Ra, $document: Sa, $exceptionHandler: Ta, $filter: Rb, $interpolate: ab, $interval: bb, $http: Ya, $httpBackend: $a, $location: qb, $log: rb, $parse: Bb, $rootScope: Fb, $q: Cb, $sce: Lb, $sceDelegate: Kb, $sniffer: Mb, $templateCache: Na, $timeout: Nb, $window: Qb, $$rAF: Eb, $$asyncCallback: Ja }) }]) }

        function ia() { return ++Mc }

        function ja(a) { return a.replace(Pc, function(a, b, c, d) { return d ? c.toUpperCase() : c }).replace(Qc, "Moz$1") }

        function ka(a, b, c, d) {
            function e(a) { var e, g, h, i, j, k, l, m = c && a ? [this.filter(a)] : [this],
                    n = b; if (!d || null != a)
                    for (; m.length;)
                        for (e = m.shift(), g = 0, h = e.length; h > g; g++)
                            for (i = wc(e[g]), n ? i.triggerHandler("$destroy") : n = !n, j = 0, k = (l = i.children()).length; k > j; j++) m.push(xc(l[j])); return f.apply(this, arguments) } var f = xc.fn[a];
            f = f.$original || f, e.$original = f, xc.fn[a] = e }

        function la(a) { return !Tc.test(a) }

        function ma(a, b) { var c, d, e, f, g, h, i = b.createDocumentFragment(),
                j = []; if (la(a)) j.push(b.createTextNode(a));
            else { for (c = i.appendChild(b.createElement("div")), d = (Uc.exec(a) || ["", ""])[1].toLowerCase(), e = Wc[d] || Wc._default, c.innerHTML = "<div>&#160;</div>" + e[1] + a.replace(Vc, "<$1></$2>") + e[2], c.removeChild(c.firstChild), f = e[0]; f--;) c = c.lastChild; for (g = 0, h = c.childNodes.length; h > g; ++g) j.push(c.childNodes[g]);
                c = i.firstChild, c.textContent = "" } return i.textContent = "", i.innerHTML = "", j }

        function na(a, c) {
            c = c || b;
            var d;
            return (d = Sc.exec(a)) ? [c.createElement(d[1])] : ma(a, c);
        }

        function oa(a) { if (a instanceof oa) return a; if (u(a) && (a = Hc(a)), !(this instanceof oa)) { if (u(a) && "<" != a.charAt(0)) throw Rc("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element"); return new oa(a) } if (u(a)) { ya(this, na(a)); var c = wc(b.createDocumentFragment());
                c.append(this) } else ya(this, a) }

        function pa(a) { return a.cloneNode(!0) }

        function qa(a) { sa(a); for (var b = 0, c = a.childNodes || []; b < c.length; b++) qa(c[b]) }

        function ra(a, b, c, d) { if (s(d)) throw Rc("offargs", "jqLite#off() does not support the `selector` argument"); var e = ta(a, "events"),
                g = ta(a, "handle");
            g && (r(b) ? f(e, function(b, c) { Oc(a, c, b), delete e[c] }) : f(b.split(" "), function(b) { r(c) ? (Oc(a, b, e[b]), delete e[b]) : I(e[b] || [], c) })) }

        function sa(a, b) { var d = a.ng339,
                e = Lc[d]; if (e) { if (b) return void delete Lc[d].data[b];
                e.handle && (e.events.$destroy && e.handle({}, "$destroy"), ra(a)), delete Lc[d], a.ng339 = c } }

        function ta(a, b, c) { var d = a.ng339,
                e = Lc[d || -1]; return s(c) ? (e || (a.ng339 = d = ia(), e = Lc[d] = {}), void(e[b] = c)) : e && e[b] }

        function ua(a, b, c) { var d = ta(a, "data"),
                e = s(c),
                f = !e && s(b),
                g = f && !t(b); if (d || g || ta(a, "data", d = {}), e) d[b] = c;
            else { if (!f) return d; if (g) return d && d[b];
                l(d, b) } }

        function va(a, b) { return a.getAttribute ? (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") > -1 : !1 }

        function wa(a, b) { b && a.setAttribute && f(b.split(" "), function(b) { a.setAttribute("class", Hc((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + Hc(b) + " ", " "))) }) }

        function xa(a, b) { if (b && a.setAttribute) { var c = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
                f(b.split(" "), function(a) { a = Hc(a), -1 === c.indexOf(" " + a + " ") && (c += a + " ") }), a.setAttribute("class", Hc(c)) } }

        function ya(a, b) { if (b) { b = b.nodeName || !s(b.length) || z(b) ? [b] : b; for (var c = 0; c < b.length; c++) a.push(b[c]) } }

        function za(a, b) { return Aa(a, "$" + (b || "ngController") + "Controller") }

        function Aa(a, b, d) { 9 == a.nodeType && (a = a.documentElement); for (var e = Gc(b) ? b : [b]; a;) { for (var f = 0, g = e.length; g > f; f++)
                    if ((d = wc.data(a, e[f])) !== c) return d;
                a = a.parentNode || 11 === a.nodeType && a.host } }

        function Ba(a) { for (var b = 0, c = a.childNodes; b < c.length; b++) qa(c[b]); for (; a.firstChild;) a.removeChild(a.firstChild) }

        function Ca(a, b) { var c = Yc[b.toLowerCase()]; return c && Zc[a.nodeName] && c }

        function Da(a, c) { var d = function(d, e) { if (d.preventDefault || (d.preventDefault = function() { d.returnValue = !1 }), d.stopPropagation || (d.stopPropagation = function() { d.cancelBubble = !0 }), d.target || (d.target = d.srcElement || b), r(d.defaultPrevented)) { var g = d.preventDefault;
                    d.preventDefault = function() { d.defaultPrevented = !0, g.call(d) }, d.defaultPrevented = !1 }
                d.isDefaultPrevented = function() { return d.defaultPrevented || d.returnValue === !1 }; var h = K(c[e || d.type] || []);
                f(h, function(b) { b.call(a, d) }), 8 >= vc ? (d.preventDefault = null, d.stopPropagation = null, d.isDefaultPrevented = null) : (delete d.preventDefault, delete d.stopPropagation, delete d.isDefaultPrevented) }; return d.elem = a, d }

        function Ea(a, b) { var d, e = typeof a; return "function" == e || "object" == e && null !== a ? "function" == typeof(d = a.$$hashKey) ? d = a.$$hashKey() : d === c && (d = a.$$hashKey = (b || j)()) : d = a, e + ":" + d }

        function Fa(a, b) { if (b) { var c = 0;
                this.nextUid = function() { return ++c } }
            f(a, this.put, this) }

        function Ga(a) { var b, c, d, e; return "function" == typeof a ? (b = a.$inject) || (b = [], a.length && (c = a.toString().replace(bd, ""), d = c.match($c), f(d[1].split(_c), function(a) { a.replace(ad, function(a, c, d) { b.push(d) }) })), a.$inject = b) : Gc(a) ? (e = a.length - 1, ca(a[e], "fn"), b = a.slice(0, e)) : ca(a, "fn", !0), b }

        function Ha(a) {
            function b(a) { return function(b, c) { return t(b) ? void f(b, i(a)) : a(b, c) } }

            function c(a, b) { if (da(a, "service"), (x(b) || Gc(b)) && (b = v.instantiate(b)), !b.$get) throw cd("pget", "Provider '{0}' must define $get factory method.", a); return s[a + n] = b }

            function d(a, b) { return c(a, { $get: b }) }

            function e(a, b) { return d(a, ["$injector", function(a) { return a.instantiate(b) }]) }

            function g(a, b) { return d(a, q(b)) }

            function h(a, b) { da(a, "constant"), s[a] = b, w[a] = b }

            function j(a, b) { var c = v.get(a + n),
                    d = c.$get;
                c.$get = function() { var a = y.invoke(d, c); return y.invoke(b, null, { $delegate: a }) } }

            function k(a) { var b, c, d, e, g = []; return f(a, function(a) { if (!r.get(a)) { r.put(a, !0); try { if (u(a))
                                for (b = yc(a), g = g.concat(k(b.requires)).concat(b._runBlocks), c = b._invokeQueue, d = 0, e = c.length; e > d; d++) { var f = c[d],
                                        h = v.get(f[0]);
                                    h[f[1]].apply(h, f[2]) } else x(a) ? g.push(v.invoke(a)) : Gc(a) ? g.push(v.invoke(a)) : ca(a, "module") } catch (i) { throw Gc(a) && (a = a[a.length - 1]), i.message && i.stack && -1 == i.stack.indexOf(i.message) && (i = i.message + "\n" + i.stack), cd("modulerr", "Failed to instantiate module {0} due to:\n{1}", a, i.stack || i.message || i) } } }), g }

            function l(a, b) {
                function c(c) { if (a.hasOwnProperty(c)) { if (a[c] === m) throw cd("cdep", "Circular dependency found: {0}", c + " <- " + p.join(" <- ")); return a[c] } try { return p.unshift(c), a[c] = m, a[c] = b(c) } catch (d) { throw a[c] === m && delete a[c], d } finally { p.shift() } }

                function d(a, b, d) { var e, f, g, h = [],
                        i = Ga(a); for (f = 0, e = i.length; e > f; f++) { if (g = i[f], "string" != typeof g) throw cd("itkn", "Incorrect injection token! Expected service name as string, got {0}", g);
                        h.push(d && d.hasOwnProperty(g) ? d[g] : c(g)) } return Gc(a) && (a = a[e]), a.apply(b, h) }

                function e(a, b) { var c, e, f = function() {}; return f.prototype = (Gc(a) ? a[a.length - 1] : a).prototype, c = new f, e = d(a, c, b), t(e) || x(e) ? e : c } return { invoke: d, instantiate: e, get: c, annotate: Ga, has: function(b) { return s.hasOwnProperty(b + n) || a.hasOwnProperty(b) } } } var m = {},
                n = "Provider",
                p = [],
                r = new Fa([], !0),
                s = { $provide: { provider: b(c), factory: b(d), service: b(e), value: b(g), constant: b(h), decorator: j } },
                v = s.$injector = l(s, function() { throw cd("unpr", "Unknown provider: {0}", p.join(" <- ")) }),
                w = {},
                y = w.$injector = l(w, function(a) { var b = v.get(a + n); return y.invoke(b.$get, b) }); return f(k(a), function(a) { y.invoke(a || o) }), y }

        function Ia() { var a = !0;
            this.disableAutoScrolling = function() { a = !1 }, this.$get = ["$window", "$location", "$rootScope", function(b, c, d) {
                function e(a) { var b = null; return f(a, function(a) { b || "a" !== qc(a.nodeName) || (b = a) }), b }

                function g() { var a, d = c.hash();
                    d ? (a = h.getElementById(d)) ? a.scrollIntoView() : (a = e(h.getElementsByName(d))) ? a.scrollIntoView() : "top" === d && b.scrollTo(0, 0) : b.scrollTo(0, 0) } var h = b.document; return a && d.$watch(function() { return c.hash() }, function() { d.$evalAsync(g) }), g }] }

        function Ja() { this.$get = ["$$rAF", "$timeout", function(a, b) { return a.supported ? function(b) { return a(b) } : function(a) { return b(a, 0, !1) } }] }

        function Ka(a, b, d, e) {
            function g(a) { try { a.apply(null, N(arguments, 1)) } finally { if (t--, 0 === t)
                        for (; v.length;) try { v.pop()() } catch (b) { d.error(b) } } }

            function h(a) { var b = a.indexOf("#"); return -1 === b ? "" : a.substr(b + 1) }

            function i(a, b) {! function c() { f(x, function(a) { a() }), w = b(c, a) }() }

            function j() { y != k.url() && (y = k.url(), f(B, function(a) { a(k.url()) })) } var k = this,
                l = b[0],
                m = a.location,
                n = a.history,
                p = a.setTimeout,
                q = a.clearTimeout,
                s = {};
            k.isMock = !1; var t = 0,
                v = [];
            k.$$completeOutstandingRequest = g, k.$$incOutstandingRequestCount = function() { t++ }, k.notifyWhenNoOutstandingRequests = function(a) { f(x, function(a) { a() }), 0 === t ? a() : v.push(a) }; var w, x = [];
            k.addPollFn = function(a) { return r(w) && i(100, p), x.push(a), a }; var y = m.href,
                z = b.find("base"),
                A = null;
            k.url = function(b, c) { if (m !== a.location && (m = a.location), n !== a.history && (n = a.history), b) { if (y == b) return; var d = y && hb(y) === hb(b); return y = b, !d && e.history ? c ? n.replaceState(null, "", b) : (n.pushState(null, "", b), z.attr("href", z.attr("href"))) : (d || (A = b), c ? m.replace(b) : d ? m.hash = h(b) : m.href = b), k } return A || m.href.replace(/%27/g, "'") }; var B = [],
                C = !1;
            k.onUrlChange = function(b) { return C || (e.history && wc(a).on("popstate", j), e.hashchange ? wc(a).on("hashchange", j) : k.addPollFn(j), C = !0), B.push(b), b }, k.$$checkUrlChange = j, k.baseHref = function() { var a = z.attr("href"); return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : "" }; var D = {},
                E = "",
                F = k.baseHref();
            k.cookies = function(a, b) { var e, f, g, h, i; if (!a) { if (l.cookie !== E)
                        for (E = l.cookie, f = E.split("; "), D = {}, h = 0; h < f.length; h++) g = f[h], i = g.indexOf("="), i > 0 && (a = unescape(g.substring(0, i)), D[a] === c && (D[a] = unescape(g.substring(i + 1)))); return D }
                b === c ? l.cookie = escape(a) + "=;path=" + F + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : u(b) && (e = (l.cookie = escape(a) + "=" + escape(b) + ";path=" + F).length + 1, e > 4096 && d.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + e + " > 4096 bytes)!")) }, k.defer = function(a, b) { var c; return t++, c = p(function() { delete s[c], g(a) }, b || 0), s[c] = !0, c }, k.defer.cancel = function(a) { return s[a] ? (delete s[a], q(a), g(o), !0) : !1 } }

        function La() { this.$get = ["$window", "$log", "$sniffer", "$document", function(a, b, c, d) { return new Ka(a, d, b, c) }] }

        function Ma() { this.$get = function() {
                function a(a, c) {
                    function e(a) { a != m && (n ? n == a && (n = a.n) : n = a, f(a.n, a.p), f(a, m), m = a, m.n = null) }

                    function f(a, b) { a != b && (a && (a.p = b), b && (b.n = a)) } if (a in b) throw d("$cacheFactory")("iid", "CacheId '{0}' is already taken!", a); var g = 0,
                        h = l({}, c, { id: a }),
                        i = {},
                        j = c && c.capacity || Number.MAX_VALUE,
                        k = {},
                        m = null,
                        n = null; return b[a] = { put: function(a, b) { if (j < Number.MAX_VALUE) { var c = k[a] || (k[a] = { key: a });
                                e(c) } if (!r(b)) return a in i || g++, i[a] = b, g > j && this.remove(n.key), b }, get: function(a) { if (j < Number.MAX_VALUE) { var b = k[a]; if (!b) return;
                                e(b) } return i[a] }, remove: function(a) { if (j < Number.MAX_VALUE) { var b = k[a]; if (!b) return;
                                b == m && (m = b.p), b == n && (n = b.n), f(b.n, b.p), delete k[a] }
                            delete i[a], g-- }, removeAll: function() { i = {}, g = 0, k = {}, m = n = null }, destroy: function() { i = null, h = null, k = null, delete b[a] }, info: function() { return l({}, h, { size: g }) } } } var b = {}; return a.info = function() { var a = {}; return f(b, function(b, c) { a[c] = b.info() }), a }, a.get = function(a) { return b[a] }, a } }

        function Na() { this.$get = ["$cacheFactory", function(a) { return a("templates") }] }

        function Oa(a, d) { var e = {},
                g = "Directive",
                h = /^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/,
                j = /(([\d\w_\-]+)(?:\:([^;]+))?;?)/,
                k = /^(on[a-z]+|formaction)$/;
            this.directive = function m(b, c) { return da(b, "directive"), u(b) ? (ba(c, "directiveFactory"), e.hasOwnProperty(b) || (e[b] = [], a.factory(b + g, ["$injector", "$exceptionHandler", function(a, c) { var d = []; return f(e[b], function(e, f) { try { var g = a.invoke(e);
                            x(g) ? g = { compile: q(g) } : !g.compile && g.link && (g.compile = q(g.link)), g.priority = g.priority || 0, g.index = f, g.name = g.name || b, g.require = g.require || g.controller && g.name, g.restrict = g.restrict || "A", d.push(g) } catch (h) { c(h) } }), d }])), e[b].push(c)) : f(b, i(m)), this }, this.aHrefSanitizationWhitelist = function(a) { return s(a) ? (d.aHrefSanitizationWhitelist(a), this) : d.aHrefSanitizationWhitelist() }, this.imgSrcSanitizationWhitelist = function(a) { return s(a) ? (d.imgSrcSanitizationWhitelist(a), this) : d.imgSrcSanitizationWhitelist() }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function(a, d, i, m, o, q, r, s, v, w, y, z) {
                function A(a, b, c, d, e) { a instanceof wc || (a = wc(a)), f(a, function(b, c) { 3 == b.nodeType && b.nodeValue.match(/\S+/) && (a[c] = b = wc(b).wrap("<span></span>").parent()[0]) }); var g = C(a, b, a, c, d, e); return B(a, "ng-scope"),
                        function(b, c, d, e) { ba(b, "scope"); var h = c ? Xc.clone.call(a) : a;
                            f(d, function(a, b) { h.data("$" + b + "Controller", a) }); for (var i = 0, j = h.length; j > i; i++) { var k = h[i],
                                    l = k.nodeType;
                                (1 === l || 9 === l) && h.eq(i).data("$scope", b) } return c && c(h, b), g && g(b, h, h, e), h } }

                function B(a, b) { try { a.addClass(b) } catch (c) {} }

                function C(a, b, d, e, f, g) {
                    function h(a, d, e, f) { var g, h, i, j, k, l, m, n, p = d.length,
                            q = new Array(p); for (k = 0; p > k; k++) q[k] = d[k]; for (k = 0, m = 0, l = o.length; l > k; m++) i = q[m], g = o[k++], h = o[k++], g ? (g.scope ? (j = a.$new(), wc.data(i, "$scope", j)) : j = a, n = g.transcludeOnThisElement ? D(a, g.transclude, f) : !g.templateOnThisElement && f ? f : !f && b ? D(a, b) : null, g(h, j, i, e, n)) : h && h(a, i.childNodes, c, f) } for (var i, j, k, l, m, n, o = [], p = 0; p < a.length; p++) i = new X, j = E(a[p], [], i, 0 === p ? e : c, f), k = j.length ? H(j, a[p], i, b, d, null, [], [], g) : null, k && k.scope && B(i.$$element, "ng-scope"), m = k && k.terminal || !(l = a[p].childNodes) || !l.length ? null : C(l, k ? (k.transcludeOnThisElement || !k.templateOnThisElement) && k.transclude : b), o.push(k, m), n = n || k || m, g = null; return n ? h : null }

                function D(a, b, c) { var d = function(d, e, f) { var g = !1;
                        d || (d = a.$new(), d.$$transcluded = !0, g = !0); var h = b(d, e, f, c); return g && h.on("$destroy", function() { d.$destroy() }), h }; return d }

                function E(a, b, c, d, e) { var f, g, i, k = a.nodeType,
                        l = c.$attr; switch (k) {
                        case 1:
                            g = zc(a).toLowerCase(), J(b, Pa(g), "E", d, e); for (var m, n, o, p, q, r, s = a.attributes, t = 0, v = s && s.length; v > t; t++) { var w = !1,
                                    x = !1; if (m = s[t], !vc || vc >= 8 || m.specified) { n = m.name, q = Hc(m.value), p = Pa(n), (r = aa.test(p)) && (n = _(p.substr(6), "-")); var y = p.replace(/(Start|End)$/, "");
                                    p === y + "Start" && (w = n, x = n.substr(0, n.length - 5) + "end", n = n.substr(0, n.length - 6)), o = Pa(n.toLowerCase()), l[o] = n, (r || !c.hasOwnProperty(o)) && (c[o] = q, Ca(a, o) && (c[o] = !0)), U(a, b, q, o), J(b, o, "A", d, e, w, x) } } if ("input" === g && "hidden" === a.getAttribute("type") && a.setAttribute("autocomplete", "off"), i = a.className, u(i) && "" !== i)
                                for (; f = j.exec(i);) o = Pa(f[2]), J(b, o, "C", d, e) && (c[o] = Hc(f[3])), i = i.substr(f.index + f[0].length); break;
                        case 3:
                            if (11 === vc)
                                for (; a.parentNode && a.nextSibling && 3 === a.nextSibling.nodeType;) a.nodeValue = a.nodeValue + a.nextSibling.nodeValue, a.parentNode.removeChild(a.nextSibling);
                            R(b, a.nodeValue); break;
                        case 8:
                            try { f = h.exec(a.nodeValue), f && (o = Pa(f[1]), J(b, o, "M", d, e) && (c[o] = Hc(f[2]))) } catch (z) {} } return b.sort(P), b }

                function F(a, b, c) { var d = [],
                        e = 0; if (b && a.hasAttribute && a.hasAttribute(b)) { do { if (!a) throw fd("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", b, c);
                            1 == a.nodeType && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--), d.push(a), a = a.nextSibling } while (e > 0) } else d.push(a); return wc(d) }

                function G(a, b, c) { return function(d, e, f, g, h) { return e = F(e[0], b, c), a(d, e, f, g, h) } }

                function H(a, e, g, h, j, k, l, m, n) {
                    function o(a, b, c, d) { a && (c && (a = G(a, c, d)), a.require = w.require, a.directiveName = y, (P === w || w.$$isolateScope) && (a = W(a, { isolateScope: !0 })), l.push(a)), b && (c && (b = G(b, c, d)), b.require = w.require, b.directiveName = y, (P === w || w.$$isolateScope) && (b = W(b, { isolateScope: !0 })), m.push(b)) }

                    function p(a, b, c, d) { var e, g = "data",
                            h = !1; if (u(b)) { for (;
                                "^" == (e = b.charAt(0)) || "?" == e;) b = b.substr(1), "^" == e && (g = "inheritedData"), h = h || "?" == e; if (e = null, d && "data" === g && (e = d[b]), e = e || c[g]("$" + b + "Controller"), !e && !h) throw fd("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", b, a); return e } return Gc(b) && (e = [], f(b, function(b) { e.push(p(a, b, c, d)) })), e }

                    function s(a, b, h, j, k) {
                        function n(a, b) { var d; return arguments.length < 2 && (b = a, a = c), Z && (d = z), k(a, b, d) } var o, s, t, u, v, w, x, y, z = {}; if (o = e === h ? g : K(g, new X(wc(h), g.$attr)), s = o.$$element, P) { var A = /^\s*([@=&])(\??)\s*(\w*)\s*$/;
                            x = b.$new(!0), !R || R !== P && R !== P.$$originalDirective ? s.data("$isolateScopeNoTemplate", x) : s.data("$isolateScope", x), B(s, "ng-isolate-scope"), f(P.scope, function(a, c) { var e, f, g, h, i = a.match(A) || [],
                                    j = i[3] || c,
                                    k = "?" == i[2],
                                    l = i[1]; switch (x.$$isolateBindings[c] = l + j, l) {
                                    case "@":
                                        o.$observe(j, function(a) { x[c] = a }), o.$$observers[j].$$scope = b, o[j] && (x[c] = d(o[j])(b)); break;
                                    case "=":
                                        if (k && !o[j]) return;
                                        f = q(o[j]), h = f.literal ? L : function(a, b) { return a === b || a !== a && b !== b }, g = f.assign || function() { throw e = x[c] = f(b), fd("nonassign", "Expression '{0}' used with directive '{1}' is non-assignable!", o[j], P.name) }, e = x[c] = f(b), x.$watch(function() { var a = f(b); return h(a, x[c]) || (h(a, e) ? g(b, a = x[c]) : x[c] = a), e = a }, null, f.literal); break;
                                    case "&":
                                        f = q(o[j]), x[c] = function(a) { return f(b, a) }; break;
                                    default:
                                        throw fd("iscp", "Invalid isolate scope definition for directive '{0}'. Definition: {... {1}: '{2}' ...}", P.name, c, a) } }) } for (y = k && n, J && f(J, function(a) { var c, d = { $scope: a === P || a.$$isolateScope ? x : b, $element: s, $attrs: o, $transclude: y };
                                w = a.controller, "@" == w && (w = o[a.name]), c = r(w, d), z[a.name] = c, Z || s.data("$" + a.name + "Controller", c), a.controllerAs && (d.$scope[a.controllerAs] = c) }), t = 0, u = l.length; u > t; t++) try { v = l[t], v(v.isolateScope ? x : b, s, o, v.require && p(v.directiveName, v.require, s, z), y) } catch (C) { i(C, T(s)) }
                        var D = b; for (P && (P.template || null === P.templateUrl) && (D = x), a && a(D, h.childNodes, c, k), t = m.length - 1; t >= 0; t--) try { v = m[t], v(v.isolateScope ? x : b, s, o, v.require && p(v.directiveName, v.require, s, z), y) } catch (C) { i(C, T(s)) } }
                    n = n || {}; for (var v, w, y, z, C, D, H = -Number.MAX_VALUE, J = n.controllerDirectives, P = n.newIsolateScopeDirective, R = n.templateDirective, S = n.nonTlbTranscludeDirective, U = !1, Y = !1, Z = n.hasElementTranscludeDirective, _ = g.$$element = wc(e), aa = k, ba = h, ca = 0, da = a.length; da > ca; ca++) { w = a[ca]; var ea = w.$$start,
                            fa = w.$$end; if (ea && (_ = F(e, ea, fa)), z = c, H > w.priority) break; if ((D = w.scope) && (v = v || w, w.templateUrl || (Q("new/isolated scope", P, w, _), t(D) && (P = w))), y = w.name, !w.templateUrl && w.controller && (D = w.controller, J = J || {}, Q("'" + y + "' controller", J[y], w, _), J[y] = w), (D = w.transclude) && (U = !0, w.$$tlb || (Q("transclusion", S, w, _), S = w), "element" == D ? (Z = !0, H = w.priority, z = _, _ = g.$$element = wc(b.createComment(" " + y + ": " + g[y] + " ")), e = _[0], V(j, N(z), e), ba = A(z, h, H, aa && aa.name, { nonTlbTranscludeDirective: S })) : (z = wc(pa(e)).contents(), _.empty(), ba = A(z, h))), w.template)
                            if (Y = !0, Q("template", R, w, _), R = w, D = x(w.template) ? w.template(_, g) : w.template, D = $(D), w.replace) { if (aa = w, z = la(D) ? [] : wc(Hc(D)), e = z[0], 1 != z.length || 1 !== e.nodeType) throw fd("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", y, "");
                                V(j, _, e); var ga = { $attr: {} },
                                    ha = E(e, [], ga),
                                    ia = a.splice(ca + 1, a.length - (ca + 1));
                                P && I(ha), a = a.concat(ha).concat(ia), M(g, ga), da = a.length } else _.html(D);
                        if (w.templateUrl) Y = !0, Q("template", R, w, _), R = w, w.replace && (aa = w), s = O(a.splice(ca, a.length - ca), _, g, j, U && ba, l, m, { controllerDirectives: J, newIsolateScopeDirective: P, templateDirective: R, nonTlbTranscludeDirective: S }), da = a.length;
                        else if (w.compile) try { C = w.compile(_, g, ba), x(C) ? o(null, C, ea, fa) : C && o(C.pre, C.post, ea, fa) } catch (ja) { i(ja, T(_)) }
                        w.terminal && (s.terminal = !0, H = Math.max(H, w.priority)) } return s.scope = v && v.scope === !0, s.transcludeOnThisElement = U, s.templateOnThisElement = Y, s.transclude = ba, n.hasElementTranscludeDirective = Z, s }

                function I(a) { for (var b = 0, c = a.length; c > b; b++) a[b] = n(a[b], { $$isolateScope: !0 }) }

                function J(b, d, f, h, j, k, l) { if (d === j) return null; var m = null; if (e.hasOwnProperty(d))
                        for (var o, p = a.get(d + g), q = 0, r = p.length; r > q; q++) try { o = p[q], (h === c || h > o.priority) && -1 != o.restrict.indexOf(f) && (k && (o = n(o, { $$start: k, $$end: l })), b.push(o), m = o) } catch (s) { i(s) }
                    return m }

                function M(a, b) { var c = b.$attr,
                        d = a.$attr,
                        e = a.$$element;
                    f(a, function(d, e) { "$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e])) }), f(b, function(b, f) { "class" == f ? (B(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f]) }) }

                function O(a, b, c, d, e, g, h, i) { var j, k, n = [],
                        p = b[0],
                        q = a.shift(),
                        r = l({}, q, { templateUrl: null, transclude: null, replace: null, $$originalDirective: q }),
                        s = x(q.templateUrl) ? q.templateUrl(b, c) : q.templateUrl; return b.empty(), m.get(w.getTrustedResourceUrl(s), { cache: o }).success(function(l) { var m, o, u, v; if (l = $(l), q.replace) { if (u = la(l) ? [] : wc(Hc(l)), m = u[0], 1 != u.length || 1 !== m.nodeType) throw fd("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", q.name, s);
                                o = { $attr: {} }, V(d, b, m); var w = E(m, [], o);
                                t(q.scope) && I(w), a = w.concat(a), M(c, o) } else m = p, b.html(l); for (a.unshift(r), j = H(a, m, c, e, b, q, g, h, i), f(d, function(a, c) { a == m && (d[c] = b[0]) }), k = C(b[0].childNodes, e); n.length;) { var x = n.shift(),
                                    y = n.shift(),
                                    z = n.shift(),
                                    A = n.shift(),
                                    F = b[0]; if (y !== p) { var G = y.className;
                                    i.hasElementTranscludeDirective && q.replace || (F = pa(m)), V(z, wc(y), F), B(wc(F), G) }
                                v = j.transcludeOnThisElement ? D(x, j.transclude, A) : A, j(k, x, F, d, v) }
                            n = null }).error(function(a, b, c, d) { throw fd("tpload", "Failed to load template: {0}", d.url) }),
                        function(a, b, c, d, e) { var f = e;
                            n ? (n.push(b), n.push(c), n.push(d), n.push(f)) : (j.transcludeOnThisElement && (f = D(b, j.transclude, e)), j(k, b, c, d, f)) } }

                function P(a, b) { var c = b.priority - a.priority; return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index }

                function Q(a, b, c, d) { if (b) throw fd("multidir", "Multiple directives [{0}, {1}] asking for {2} on: {3}", b.name, c.name, a, T(d)) }

                function R(a, b) { var c = d(b, !0);
                    c && a.push({ priority: 0, compile: function(a) { var b = a.parent(),
                                d = b.length; return d && B(a.parent(), "ng-binding"),
                                function(a, b) { var e = b.parent(),
                                        f = e.data("$binding") || [];
                                    f.push(c), e.data("$binding", f), d || B(e, "ng-binding"), a.$watch(c, function(a) { b[0].nodeValue = a }) } } }) }

                function S(a, b) { if ("srcdoc" == b) return w.HTML; var c = zc(a); return "xlinkHref" == b || "FORM" == c && "action" == b || "LINK" == c && "href" == b || "IMG" != c && ("src" == b || "ngSrc" == b) ? w.RESOURCE_URL : void 0 }

                function U(a, b, c, e) { var f = d(c, !0); if (f) { if ("multiple" === e && "SELECT" === zc(a)) throw fd("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", T(a));
                        b.push({ priority: 100, compile: function() { return { pre: function(b, c, g) { var h = g.$$observers || (g.$$observers = {}); if (k.test(e)) throw fd("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
                                        f = d(g[e], !0, S(a, e)), f && (g[e] = f(b), (h[e] || (h[e] = [])).$$inter = !0, (g.$$observers && g.$$observers[e].$$scope || b).$watch(f, function(a, b) { "class" === e && a != b ? g.$updateClass(a, b) : g.$set(e, a) })) } } } }) } }

                function V(a, c, d) { var e, f, g = c[0],
                        h = c.length,
                        i = g.parentNode; if (a)
                        for (e = 0, f = a.length; f > e; e++)
                            if (a[e] == g) { a[e++] = d; for (var j = e, k = j + h - 1, l = a.length; l > j; j++, k++) l > k ? a[j] = a[k] : delete a[j];
                                a.length -= h - 1; break }
                    i && i.replaceChild(d, g); var m = b.createDocumentFragment();
                    m.appendChild(g), d[wc.expando] = g[wc.expando]; for (var n = 1, o = c.length; o > n; n++) { var p = c[n];
                        wc(p).remove(), m.appendChild(p), delete c[n] }
                    c[0] = d, c.length = 1 }

                function W(a, b) { return l(function() { return a.apply(null, arguments) }, a, b) } var X = function(a, b) { this.$$element = a, this.$attr = b || {} };
                X.prototype = { $normalize: Pa, $addClass: function(a) { a && a.length > 0 && y.addClass(this.$$element, a) }, $removeClass: function(a) { a && a.length > 0 && y.removeClass(this.$$element, a) }, $updateClass: function(a, b) { var c = Qa(a, b),
                            d = Qa(b, a);
                        0 === c.length ? y.removeClass(this.$$element, d) : 0 === d.length ? y.addClass(this.$$element, c) : y.setClass(this.$$element, c, d) }, $set: function(a, b, d, e) { var g, h = Ca(this.$$element[0], a);
                        h && (this.$$element.prop(a, b), e = h), this[a] = b, e ? this.$attr[a] = e : (e = this.$attr[a], e || (this.$attr[a] = e = _(a, "-"))), g = zc(this.$$element).toUpperCase(), ("A" === g && ("href" === a || "xlinkHref" === a) || "IMG" === g && "src" === a) && (this[a] = b = z(b, "src" === a)), d !== !1 && (null === b || b === c ? this.$$element.removeAttr(e) : this.$$element.attr(e, b)); var j = this.$$observers;
                        j && f(j[a], function(a) { try { a(b) } catch (c) { i(c) } }) }, $observe: function(a, b) { var c = this,
                            d = c.$$observers || (c.$$observers = {}),
                            e = d[a] || (d[a] = []); return e.push(b), s.$evalAsync(function() { e.$$inter || b(c[a]) }), b } }; var Y = d.startSymbol(),
                    Z = d.endSymbol(),
                    $ = "{{" == Y || "}}" == Z ? p : function(a) { return a.replace(/\{\{/g, Y).replace(/}}/g, Z) },
                    aa = /^ngAttr[A-Z]/; return A }] }

        function Pa(a) { return ja(a.replace(gd, "")) }

        function Qa(a, b) { var c = "",
                d = a.split(/\s+/),
                e = b.split(/\s+/);
            a: for (var f = 0; f < d.length; f++) { for (var g = d[f], h = 0; h < e.length; h++)
                    if (g == e[h]) continue a;
                c += (c.length > 0 ? " " : "") + g }
            return c }

        function Ra() { var a = {},
                b = /^(\S+)(\s+as\s+(\w+))?$/;
            this.register = function(b, c) { da(b, "controller"), t(b) ? l(a, b) : a[b] = c }, this.$get = ["$injector", "$window", function(c, e) { return function(f, g) { var h, i, j, k; if (u(f) && (i = f.match(b), j = i[1], k = i[3], f = a.hasOwnProperty(j) ? a[j] : ea(g.$scope, j, !0) || ea(e, j, !0), ca(f, j, !0)), h = c.instantiate(f, g), k) { if (!g || "object" != typeof g.$scope) throw d("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", j || f.name, k);
                        g.$scope[k] = h } return h } }] }

        function Sa() { this.$get = ["$window", function(a) { return wc(a.document) }] }

        function Ta() { this.$get = ["$log", function(a) { return function(b, c) { a.error.apply(a, arguments) } }] }

        function Ua(a) { var b, c, d, e = {}; return a ? (f(a.split("\n"), function(a) { d = a.indexOf(":"), b = qc(Hc(a.substr(0, d))), c = Hc(a.substr(d + 1)), b && (e[b] = e[b] ? e[b] + ", " + c : c) }), e) : e }

        function Va(a) { var b = t(a) ? a : c; return function(c) { return b || (b = Ua(a)), c ? b[qc(c)] || null : b } }

        function Wa(a, b, c) { return x(c) ? c(a, b) : (f(c, function(c) { a = c(a, b) }), a) }

        function Xa(a) { return a >= 200 && 300 > a }

        function Ya() { var a = /^\s*(\[|\{[^\{])/,
                b = /[\}\]]\s*$/,
                d = /^\)\]\}',?\n/,
                e = { "Content-Type": "application/json;charset=utf-8" },
                g = this.defaults = { transformResponse: [function(c) { return u(c) && (c = c.replace(d, ""), a.test(c) && b.test(c) && (c = R(c))), c }], transformRequest: [function(a) { return !t(a) || B(a) || C(a) ? a : Q(a) }], headers: { common: { Accept: "application/json, text/plain, */*" }, post: K(e), put: K(e), patch: K(e) }, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN" },
                i = this.interceptors = [],
                j = this.responseInterceptors = [];
            this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function(a, b, d, e, k, m) {
                function n(a) {
                    function b(a) { var b = l({}, a, { data: Wa(a.data, a.headers, e.transformResponse) }); return Xa(a.status) ? b : k.reject(b) }

                    function d(a) {
                        function b(a) { var b;
                            f(a, function(c, d) { x(c) && (b = c(), null != b ? a[d] = b : delete a[d]) }) } var c, d, e, h = g.headers,
                            i = l({}, a.headers);
                        h = l({}, h.common, h[qc(a.method)]);
                        a: for (c in h) { d = qc(c); for (e in i)
                                if (qc(e) === d) continue a;
                            i[c] = h[c] }
                        return b(i), i } var e = { method: "get", transformRequest: g.transformRequest, transformResponse: g.transformResponse },
                        h = d(a);
                    l(e, a), e.headers = h, e.method = sc(e.method); var i = function(a) { h = a.headers; var c = Wa(a.data, Va(h), a.transformRequest); return r(c) && f(h, function(a, b) { "content-type" === qc(b) && delete h[b] }), r(a.withCredentials) && !r(g.withCredentials) && (a.withCredentials = g.withCredentials), q(a, c, h).then(b, b) },
                        j = [i, c],
                        m = k.when(e); for (f(z, function(a) {
                            (a.request || a.requestError) && j.unshift(a.request, a.requestError), (a.response || a.responseError) && j.push(a.response, a.responseError) }); j.length;) { var n = j.shift(),
                            o = j.shift();
                        m = m.then(n, o) } return m.success = function(a) { return m.then(function(b) { a(b.data, b.status, b.headers, e) }), m }, m.error = function(a) { return m.then(null, function(b) { a(b.data, b.status, b.headers, e) }), m }, m }

                function o(a) { f(arguments, function(a) { n[a] = function(b, c) { return n(l(c || {}, { method: a, url: b })) } }) }

                function p(a) { f(arguments, function(a) { n[a] = function(b, c, d) { return n(l(d || {}, { method: a, url: b, data: c })) } }) }

                function q(d, f, h) {
                    function i(a, b, c, d) { m && (Xa(a) ? m.put(u, [a, b, Ua(c), d]) : m.remove(u)), j(b, a, c, d), e.$$phase || e.$apply() }

                    function j(a, b, c, e) { b = Math.max(b, 0), (Xa(b) ? p.resolve : p.reject)({ data: a, status: b, headers: Va(c), config: d, statusText: e }) }

                    function l() { var a = H(n.pendingRequests, d); - 1 !== a && n.pendingRequests.splice(a, 1) } var m, o, p = k.defer(),
                        q = p.promise,
                        u = v(d.url, d.params); if (n.pendingRequests.push(d), q.then(l, l), !d.cache && !g.cache || d.cache === !1 || "GET" !== d.method && "JSONP" !== d.method || (m = t(d.cache) ? d.cache : t(g.cache) ? g.cache : y), m)
                        if (o = m.get(u), s(o)) { if (D(o)) return o.then(l, l), o;
                            Gc(o) ? j(o[1], o[0], K(o[2]), o[3]) : j(o, 200, {}, "OK") } else m.put(u, q);
                    if (r(o)) { var w = Pb(d.url) ? b.cookies()[d.xsrfCookieName || g.xsrfCookieName] : c;
                        w && (h[d.xsrfHeaderName || g.xsrfHeaderName] = w), a(d.method, u, f, i, h, d.timeout, d.withCredentials, d.responseType) } return q }

                function v(a, b) { if (!b) return a; var c = []; return h(b, function(a, b) { null === a || r(a) || (Gc(a) || (a = [a]), f(a, function(a) { t(a) && (a = w(a) ? a.toISOString() : Q(a)), c.push(Y(b) + "=" + Y(a)) })) }), c.length > 0 && (a += (-1 == a.indexOf("?") ? "?" : "&") + c.join("&")), a } var y = d("$http"),
                    z = []; return f(i, function(a) { z.unshift(u(a) ? m.get(a) : m.invoke(a)) }), f(j, function(a, b) { var c = u(a) ? m.get(a) : m.invoke(a);
                    z.splice(b, 0, { response: function(a) { return c(k.when(a)) }, responseError: function(a) { return c(k.reject(a)) } }) }), n.pendingRequests = [], o("get", "delete", "head", "jsonp"), p("post", "put", "patch"), n.defaults = g, n }] }

        function Za(b) { if (8 >= vc && (!b.match(/^(get|post|head|put|delete|options)$/i) || !a.XMLHttpRequest)) return new a.ActiveXObject("Microsoft.XMLHTTP"); if (a.XMLHttpRequest) return new a.XMLHttpRequest; throw d("$httpBackend")("noxhr", "This browser does not support XMLHttpRequest.") }

        function $a() { this.$get = ["$browser", "$window", "$document", function(a, b, c) { return _a(a, Za, a.defer, b.angular.callbacks, c[0]) }] }

        function _a(a, b, c, d, e) {
            function g(a, b, c) { var f = e.createElement("script"),
                    g = null; return f.type = "text/javascript", f.src = a, f.async = !0, g = function(a) { Oc(f, "load", g), Oc(f, "error", g), e.body.removeChild(f), f = null; var h = -1,
                        i = "unknown";
                    a && ("load" !== a.type || d[b].called || (a = { type: "error" }), i = a.type, h = "error" === a.type ? 404 : 200), c && c(h, i) }, Nc(f, "load", g), Nc(f, "error", g), 8 >= vc && (f.onreadystatechange = function() { u(f.readyState) && /loaded|complete/.test(f.readyState) && (f.onreadystatechange = null, g({ type: "load" })) }), e.body.appendChild(f), g } var h = -1; return function(e, i, j, k, l, m, n, p) {
                function q() { t = h, v && v(), w && w.abort() }

                function r(b, d, e, f, g) { y && c.cancel(y), v = w = null, 0 === d && (d = e ? 200 : "file" == Ob(i).protocol ? 404 : 0), d = 1223 === d ? 204 : d, g = g || "", b(d, e, f, g), a.$$completeOutstandingRequest(o) } var t; if (a.$$incOutstandingRequestCount(), i = i || a.url(), "jsonp" == qc(e)) { var u = "_" + (d.counter++).toString(36);
                    d[u] = function(a) { d[u].data = a, d[u].called = !0 }; var v = g(i.replace("JSON_CALLBACK", "angular.callbacks." + u), u, function(a, b) { r(k, a, d[u].data, "", b), d[u] = o }) } else { var w = b(e); if (w.open(e, i, !0), f(l, function(a, b) { s(a) && w.setRequestHeader(b, a) }), w.onreadystatechange = function() { if (w && 4 == w.readyState) { var a = null,
                                    b = null,
                                    c = "";
                                t !== h && (a = w.getAllResponseHeaders(), b = "response" in w ? w.response : w.responseText), t === h && 10 > vc || (c = w.statusText), r(k, t || w.status, b, a, c) } }, n && (w.withCredentials = !0), p) try { w.responseType = p } catch (x) { if ("json" !== p) throw x }
                    w.send(j || null) } if (m > 0) var y = c(q, m);
                else D(m) && m.then(q) } }

        function ab() { var a = "{{",
                b = "}}";
            this.startSymbol = function(b) { return b ? (a = b, this) : a }, this.endSymbol = function(a) { return a ? (b = a, this) : b }, this.$get = ["$parse", "$exceptionHandler", "$sce", function(c, d, e) {
                function f(f, i, j) { for (var k, l, m, n, o = 0, p = [], q = f.length, r = !1, s = []; q > o;) - 1 != (k = f.indexOf(a, o)) && -1 != (l = f.indexOf(b, k + g)) ? (o != k && p.push(f.substring(o, k)), p.push(m = c(n = f.substring(k + g, l))), m.exp = n, o = l + h, r = !0) : (o != q && p.push(f.substring(o)), o = q); if ((q = p.length) || (p.push(""), q = 1), j && p.length > 1) throw hd("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", f); return !i || r ? (s.length = q, m = function(a) { try { for (var b, c = 0, g = q; g > c; c++) { if ("function" == typeof(b = p[c]))
                                    if (b = b(a), b = j ? e.getTrusted(j, b) : e.valueOf(b), null == b) b = "";
                                    else switch (typeof b) {
                                        case "string":
                                            break;
                                        case "number":
                                            b = "" + b; break;
                                        default:
                                            b = Q(b) }
                                    s[c] = b } return s.join("") } catch (h) { var i = hd("interr", "Can't interpolate: {0}\n{1}", f, h.toString());
                            d(i) } }, m.exp = f, m.parts = p, m) : void 0 } var g = a.length,
                    h = b.length; return f.startSymbol = function() { return a }, f.endSymbol = function() { return b }, f }] }

        function bb() { this.$get = ["$rootScope", "$window", "$q", function(a, b, c) {
                function d(d, f, g, h) { var i = b.setInterval,
                        j = b.clearInterval,
                        k = c.defer(),
                        l = k.promise,
                        m = 0,
                        n = s(h) && !h; return g = s(g) ? g : 0, l.then(null, null, d), l.$$intervalId = i(function() { k.notify(m++), g > 0 && m >= g && (k.resolve(m), j(l.$$intervalId), delete e[l.$$intervalId]), n || a.$apply() }, f), e[l.$$intervalId] = k, l } var e = {}; return d.cancel = function(a) { return a && a.$$intervalId in e ? (e[a.$$intervalId].reject("canceled"), b.clearInterval(a.$$intervalId), delete e[a.$$intervalId], !0) : !1 }, d }] }

        function cb() { this.$get = function() { return { id: "en-us", NUMBER_FORMATS: { DECIMAL_SEP: ".", GROUP_SEP: ",", PATTERNS: [{ minInt: 1, minFrac: 0, maxFrac: 3, posPre: "", posSuf: "", negPre: "-", negSuf: "", gSize: 3, lgSize: 3 }, { minInt: 1, minFrac: 2, maxFrac: 2, posPre: "¤", posSuf: "", negPre: "(¤", negSuf: ")", gSize: 3, lgSize: 3 }], CURRENCY_SYM: "$" }, DATETIME_FORMATS: { MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","), SHORTMONTH: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","), DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","), SHORTDAY: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","), AMPMS: ["AM", "PM"], medium: "MMM d, y h:mm:ss a", "short": "M/d/yy h:mm a", fullDate: "EEEE, MMMM d, y", longDate: "MMMM d, y", mediumDate: "MMM d, y", shortDate: "M/d/yy", mediumTime: "h:mm:ss a", shortTime: "h:mm a" }, pluralCat: function(a) { return 1 === a ? "one" : "other" } } } }

        function db(a) { for (var b = a.split("/"), c = b.length; c--;) b[c] = X(b[c]); return b.join("/") }

        function eb(a, b, c) { var d = Ob(a, c);
            b.$$protocol = d.protocol, b.$$host = d.hostname, b.$$port = m(d.port) || jd[d.protocol] || null }

        function fb(a, b, c) { var d = "/" !== a.charAt(0);
            d && (a = "/" + a); var e = Ob(a, c);
            b.$$path = decodeURIComponent(d && "/" === e.pathname.charAt(0) ? e.pathname.substring(1) : e.pathname), b.$$search = V(e.search), b.$$hash = decodeURIComponent(e.hash), b.$$path && "/" != b.$$path.charAt(0) && (b.$$path = "/" + b.$$path) }

        function gb(a, b) { return 0 === b.indexOf(a) ? b.substr(a.length) : void 0 }

        function hb(a) { var b = a.indexOf("#"); return -1 == b ? a : a.substr(0, b) }

        function ib(a) { return a.replace(/(#.+)|#$/, "$1") }

        function jb(a) { return a.substr(0, hb(a).lastIndexOf("/") + 1) }

        function kb(a) { return a.substring(0, a.indexOf("/", a.indexOf("//") + 2)) }

        function lb(a, b) {
            this.$$html5 = !0, b = b || "";
            var d = jb(a);
            eb(a, this, a), this.$$parse = function(b) { var c = gb(d, b); if (!u(c)) throw kd("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', b, d);
                fb(c, this, a), this.$$path || (this.$$path = "/"), this.$$compose() }, this.$$compose = function() { var a = W(this.$$search),
                    b = this.$$hash ? "#" + X(this.$$hash) : "";
                this.$$url = db(this.$$path) + (a ? "?" + a : "") + b, this.$$absUrl = d + this.$$url.substr(1) }, this.$$parseLinkUrl = function(e, f) { var g, h, i; return (g = gb(a, e)) !== c ? (h = g, i = (g = gb(b, g)) !== c ? d + (gb("/", g) || g) : a + h) : (g = gb(d, e)) !== c ? i = d + g : d == e + "/" && (i = d), i && this.$$parse(i), !!i }
        }

        function mb(a, b) { var c = jb(a);
            eb(a, this, a), this.$$parse = function(d) {
                function e(a, b, c) { var d, e = /^\/[A-Z]:(\/.*)/; return 0 === b.indexOf(c) && (b = b.replace(c, "")), e.exec(b) ? a : (d = e.exec(a), d ? d[1] : a) } var f = gb(a, d) || gb(c, d),
                    g = "#" == f.charAt(0) ? gb(b, f) : this.$$html5 ? f : ""; if (!u(g)) throw kd("ihshprfx", 'Invalid url "{0}", missing hash prefix "{1}".', d, b);
                fb(g, this, a), this.$$path = e(this.$$path, g, a), this.$$compose() }, this.$$compose = function() { var c = W(this.$$search),
                    d = this.$$hash ? "#" + X(this.$$hash) : "";
                this.$$url = db(this.$$path) + (c ? "?" + c : "") + d, this.$$absUrl = a + (this.$$url ? b + this.$$url : "") }, this.$$parseLinkUrl = function(b, c) { return hb(a) == hb(b) ? (this.$$parse(b), !0) : !1 } }

        function nb(a, b) { this.$$html5 = !0, mb.apply(this, arguments); var c = jb(a);
            this.$$parseLinkUrl = function(d, e) { var f, g; return a == hb(d) ? f = d : (g = gb(c, d)) ? f = a + b + g : c === d + "/" && (f = c), f && this.$$parse(f), !!f }, this.$$compose = function() { var c = W(this.$$search),
                    d = this.$$hash ? "#" + X(this.$$hash) : "";
                this.$$url = db(this.$$path) + (c ? "?" + c : "") + d, this.$$absUrl = a + b + this.$$url } }

        function ob(a) { return function() { return this[a] } }

        function pb(a, b) { return function(c) { return r(c) ? this[a] : (this[a] = b(c), this.$$compose(), this) } }

        function qb() { var b = "",
                c = !1;
            this.hashPrefix = function(a) { return s(a) ? (b = a, this) : b }, this.html5Mode = function(a) { return s(a) ? (c = a, this) : c }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", function(d, e, f, g) {
                function h(a) { d.$broadcast("$locationChangeSuccess", i.absUrl(), a) } var i, j, k, l = e.baseHref(),
                    m = e.url();
                c ? (k = kb(m) + (l || "/"), j = f.history ? lb : nb) : (k = hb(m), j = mb), i = new j(k, "#" + b), i.$$parseLinkUrl(m, m); var n = /^\s*(javascript|mailto):/i;
                g.on("click", function(b) { if (!b.ctrlKey && !b.metaKey && 2 != b.which) { for (var c = wc(b.target);
                            "a" !== qc(c[0].nodeName);)
                            if (c[0] === g[0] || !(c = c.parent())[0]) return;
                        var f = c.prop("href"),
                            h = c.attr("href") || c.attr("xlink:href");
                        t(f) && "[object SVGAnimatedString]" === f.toString() && (f = Ob(f.animVal).href), n.test(f) || !f || c.attr("target") || b.isDefaultPrevented() || i.$$parseLinkUrl(f, h) && (b.preventDefault(), i.absUrl() != e.url() && (d.$apply(), a.angular["ff-684208-preventDefault"] = !0)) } }), i.absUrl() != m && e.url(i.absUrl(), !0), e.onUrlChange(function(a) { i.absUrl() != a && (d.$evalAsync(function() { var b = i.absUrl();
                        i.$$parse(a), d.$broadcast("$locationChangeStart", a, b).defaultPrevented ? (i.$$parse(b), e.url(b)) : h(b) }), d.$$phase || d.$digest()) }); var o = 0; return d.$watch(function() { var a = ib(e.url()),
                        b = ib(i.absUrl()),
                        c = i.$$replace; return o && a == b || (o++, d.$evalAsync(function() { d.$broadcast("$locationChangeStart", i.absUrl(), a).defaultPrevented ? i.$$parse(a) : (e.url(i.absUrl(), c), h(a)) })), i.$$replace = !1, o }), i }] }

        function rb() { var a = !0,
                b = this;
            this.debugEnabled = function(b) { return s(b) ? (a = b, this) : a }, this.$get = ["$window", function(c) {
                function d(a) { return a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line)), a }

                function e(a) { var b = c.console || {},
                        e = b[a] || b.log || o,
                        g = !1; try { g = !!e.apply } catch (h) {} return g ? function() { var a = []; return f(arguments, function(b) { a.push(d(b)) }), e.apply(b, a) } : function(a, b) { e(a, null == b ? "" : b) } } return { log: e("log"), info: e("info"), warn: e("warn"), error: e("error"), debug: function() { var c = e("debug"); return function() { a && c.apply(b, arguments) } }() } }] }

        function sb(a, b) { if ("__defineGetter__" === a || "__defineSetter__" === a || "__lookupGetter__" === a || "__lookupSetter__" === a || "__proto__" === a) throw md("isecfld", "Attempting to access a disallowed field in Angular expressions! Expression: {0}", b); return a }

        function tb(a, b) { if (a += "", !u(a)) throw md("iseccst", "Cannot convert object to primitive value! Expression: {0}", b); return a }

        function ub(a, b) { if (a) { if (a.constructor === a) throw md("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", b); if (a.document && a.location && a.alert && a.setInterval) throw md("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", b); if (a.children && (a.nodeName || a.prop && a.attr && a.find)) throw md("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", b); if (a === Object) throw md("isecobj", "Referencing Object in Angular expressions is disallowed! Expression: {0}", b) } return a }

        function vb(a, b) { if (a) { if (a.constructor === a) throw md("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", b); if (a === od || a === pd || qd && a === qd) throw md("isecff", "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}", b) } }

        function wb(a, b, d, e, f) { ub(a, e), f = f || {}; for (var g, h = b.split("."), i = 0; h.length > 1; i++) { g = sb(h.shift(), e); var j = ub(a[g], e);
                j || (j = {}, a[g] = j), a = j, a.then && f.unwrapPromises && (ld(e), "$$v" in a || ! function(a) { a.then(function(b) { a.$$v = b }) }(a), a.$$v === c && (a.$$v = {}), a = a.$$v) } return g = sb(h.shift(), e), ub(a[g], e), a[g] = d, d }

        function xb(a) { return "constructor" == a }

        function yb(a, b, d, e, f, g, h) { sb(a, g), sb(b, g), sb(d, g), sb(e, g), sb(f, g); var i = function(a) { return ub(a, g) },
                j = h.expensiveChecks,
                k = j || xb(a) ? i : p,
                l = j || xb(b) ? i : p,
                m = j || xb(d) ? i : p,
                n = j || xb(e) ? i : p,
                o = j || xb(f) ? i : p; return h.unwrapPromises ? function(h, i) { var j, p = i && i.hasOwnProperty(a) ? i : h; return null == p ? p : (p = k(p[a]), p && p.then && (ld(g), "$$v" in p || (j = p, j.$$v = c, j.then(function(a) { j.$$v = k(a) })), p = k(p.$$v)), b ? null == p ? c : (p = l(p[b]), p && p.then && (ld(g), "$$v" in p || (j = p, j.$$v = c, j.then(function(a) { j.$$v = l(a) })), p = l(p.$$v)), d ? null == p ? c : (p = m(p[d]), p && p.then && (ld(g), "$$v" in p || (j = p, j.$$v = c, j.then(function(a) { j.$$v = m(a) })), p = m(p.$$v)), e ? null == p ? c : (p = n(p[e]), p && p.then && (ld(g), "$$v" in p || (j = p, j.$$v = c, j.then(function(a) { j.$$v = n(a) })), p = n(p.$$v)), f ? null == p ? c : (p = o(p[f]), p && p.then && (ld(g), "$$v" in p || (j = p, j.$$v = c, j.then(function(a) { j.$$v = o(a) })), p = o(p.$$v)), p) : p) : p) : p) : p) } : function(g, h) { var i = h && h.hasOwnProperty(a) ? h : g; return null == i ? i : (i = k(i[a]), b ? null == i ? c : (i = l(i[b]), d ? null == i ? c : (i = m(i[d]), e ? null == i ? c : (i = n(i[e]), f ? null == i ? c : i = o(i[f]) : i) : i) : i) : i) } }

        function zb(a, b) { return function(c, d) { return a(c, d, ld, ub, b) } }

        function Ab(a, b, d) { var e = b.expensiveChecks,
                g = e ? wd : vd; if (g.hasOwnProperty(a)) return g[a]; var h, i = a.split("."),
                j = i.length; if (b.csp) h = 6 > j ? yb(i[0], i[1], i[2], i[3], i[4], d, b) : function(a, e) { var f, g = 0;
                do f = yb(i[g++], i[g++], i[g++], i[g++], i[g++], d, b)(a, e), e = c, a = f; while (j > g); return f };
            else { var k = "var p;\n";
                e && (k += "s = eso(s, fe);\nl = eso(l, fe);\n"); var l = e;
                f(i, function(a, c) { sb(a, d); var f = (c ? "s" : '((l&&l.hasOwnProperty("' + a + '"))?l:s)') + '["' + a + '"]',
                        g = e || xb(a);
                    g && (f = "eso(" + f + ", fe)", l = !0), k += "if(s == null) return undefined;\ns=" + f + ";\n", b.unwrapPromises && (k += 'if (s && s.then) {\n pw("' + d.replace(/(["\r\n])/g, "\\$1") + '");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=' + (g ? "eso(v)" : "v") + ";});\n}\n s=" + (g ? "eso(s.$$v)" : "s.$$v") + "\n}\n") }), k += "return s;"; var m = new Function("s", "l", "pw", "eso", "fe", k);
                m.toString = q(k), (l || b.unwrapPromises) && (m = zb(m, d)), h = m } return "hasOwnProperty" !== a && (g[a] = h), h }

        function Bb() { var a = {},
                b = {},
                c = { csp: !1, unwrapPromises: !1, logPromiseWarnings: !0, expensiveChecks: !1 };
            this.unwrapPromises = function(a) { return s(a) ? (c.unwrapPromises = !!a, this) : c.unwrapPromises }, this.logPromiseWarnings = function(a) { return s(a) ? (c.logPromiseWarnings = a, this) : c.logPromiseWarnings }, this.$get = ["$filter", "$sniffer", "$log", function(d, e, f) { c.csp = e.csp; var g = { csp: c.csp, unwrapPromises: c.unwrapPromises, logPromiseWarnings: c.logPromiseWarnings, expensiveChecks: !0 }; return ld = function(a) { c.logPromiseWarnings && !nd.hasOwnProperty(a) && (nd[a] = !0, f.warn("[$parse] Promise found in the expression `" + a + "`. Automatic unwrapping of promises in Angular expressions is deprecated.")) },
                    function(e, f) { var h; switch (typeof e) {
                            case "string":
                                var i = f ? b : a; if (i.hasOwnProperty(e)) return i[e]; var j = f ? g : c,
                                    k = new td(j),
                                    l = new ud(k, d, j); return h = l.parse(e), "hasOwnProperty" !== e && (i[e] = h), h;
                            case "function":
                                return e;
                            default:
                                return o } } }] }

        function Cb() { this.$get = ["$rootScope", "$exceptionHandler", function(a, b) { return Db(function(b) { a.$evalAsync(b) }, b) }] }

        function Db(a, b) {
            function d(a) { return a }

            function e(a) { return j(a) }

            function g(a) { var b = h(),
                    c = 0,
                    d = Gc(a) ? [] : {}; return f(a, function(a, e) { c++, i(a).then(function(a) { d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d)) }, function(a) { d.hasOwnProperty(e) || b.reject(a) }) }), 0 === c && b.resolve(d), b.promise } var h = function() { var f, g, j = []; return g = { resolve: function(b) { if (j) { var d = j;
                                j = c, f = i(b), d.length && a(function() { for (var a, b = 0, c = d.length; c > b; b++) a = d[b], f.then(a[0], a[1], a[2]) }) } }, reject: function(a) { g.resolve(k(a)) }, notify: function(b) { if (j) { var c = j;
                                j.length && a(function() { for (var a, d = 0, e = c.length; e > d; d++) a = c[d], a[2](b) }) } }, promise: { then: function(a, c, g) { var i = h(),
                                    k = function(c) { try { i.resolve((x(a) ? a : d)(c)) } catch (e) { i.reject(e), b(e) } },
                                    l = function(a) { try { i.resolve((x(c) ? c : e)(a)) } catch (d) { i.reject(d), b(d) } },
                                    m = function(a) { try { i.notify((x(g) ? g : d)(a)) } catch (c) { b(c) } }; return j ? j.push([k, l, m]) : f.then(k, l, m), i.promise }, "catch": function(a) { return this.then(null, a) }, "finally": function(a) {
                                function b(a, b) { var c = h(); return b ? c.resolve(a) : c.reject(a), c.promise }

                                function c(c, e) { var f = null; try { f = (a || d)() } catch (g) { return b(g, !1) } return D(f) ? f.then(function() { return b(c, e) }, function(a) { return b(a, !1) }) : b(c, e) } return this.then(function(a) { return c(a, !0) }, function(a) { return c(a, !1) }) } } } },
                i = function(b) { return D(b) ? b : { then: function(c) { var d = h(); return a(function() { d.resolve(c(b)) }), d.promise } } },
                j = function(a) { var b = h(); return b.reject(a), b.promise },
                k = function(c) { return { then: function(d, f) { var g = h(); return a(function() { try { g.resolve((x(f) ? f : e)(c)) } catch (a) { g.reject(a), b(a) } }), g.promise } } },
                l = function(c, f, g, k) { var l, m = h(),
                        n = function(a) { try { return (x(f) ? f : d)(a) } catch (c) { return b(c), j(c) } },
                        o = function(a) { try { return (x(g) ? g : e)(a) } catch (c) { return b(c), j(c) } },
                        p = function(a) { try { return (x(k) ? k : d)(a) } catch (c) { b(c) } }; return a(function() { i(c).then(function(a) { l || (l = !0, m.resolve(i(a).then(n, o, p))) }, function(a) { l || (l = !0, m.resolve(o(a))) }, function(a) { l || m.notify(p(a)) }) }), m.promise }; return { defer: h, reject: j, when: l, all: g } }

        function Eb() { this.$get = ["$window", "$timeout", function(a, b) { var c = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame,
                    d = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.mozCancelAnimationFrame || a.webkitCancelRequestAnimationFrame,
                    e = !!c,
                    f = e ? function(a) { var b = c(a); return function() { d(b) } } : function(a) { var c = b(a, 16.66, !1); return function() { b.cancel(c) } }; return f.supported = e, f }] }

        function Fb() { var a = 10,
                b = d("$rootScope"),
                c = null;
            this.digestTtl = function(b) { return arguments.length && (a = b), a }, this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function(d, g, h, i) {
                function k() { this.$id = j(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this["this"] = this.$root = this, this.$$destroyed = !1, this.$$asyncQueue = [], this.$$postDigestQueue = [], this.$$listeners = {}, this.$$listenerCount = {}, this.$$isolateBindings = {} }

                function l(a) { if (r.$$phase) throw b("inprog", "{0} already in progress", r.$$phase);
                    r.$$phase = a }

                function m() { r.$$phase = null }

                function n(a, b) { var c = h(a); return ca(c, b), c }

                function p(a, b, c) { do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent) }

                function q() {}
                k.prototype = { constructor: k, $new: function(a) { var b; return a ? (b = new k, b.$root = this.$root, b.$$asyncQueue = this.$$asyncQueue, b.$$postDigestQueue = this.$$postDigestQueue) : (this.$$childScopeClass || (this.$$childScopeClass = function() { this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$id = j(), this.$$childScopeClass = null }, this.$$childScopeClass.prototype = this), b = new this.$$childScopeClass), b["this"] = b, b.$parent = this, b.$$prevSibling = this.$$childTail, this.$$childHead ? (this.$$childTail.$$nextSibling = b, this.$$childTail = b) : this.$$childHead = this.$$childTail = b, b }, $watch: function(a, b, d) { var e = this,
                            f = n(a, "watch"),
                            g = e.$$watchers,
                            h = { fn: b, last: q, get: f, exp: a, eq: !!d }; if (c = null, !x(b)) { var i = n(b || o, "listener");
                            h.fn = function(a, b, c) { i(c) } } if ("string" == typeof a && f.constant) { var j = h.fn;
                            h.fn = function(a, b, c) { j.call(this, a, b, c), I(g, h) } } return g || (g = e.$$watchers = []), g.unshift(h),
                            function() { I(g, h), c = null } }, $watchCollection: function(a, b) {
                        function c() { f = m(j); var a, b, c; if (t(f))
                                if (e(f)) { g !== n && (g = n, q = g.length = 0, l++), a = f.length, q !== a && (l++, g.length = q = a); for (var d = 0; a > d; d++) c = g[d] !== g[d] && f[d] !== f[d], c || g[d] === f[d] || (l++, g[d] = f[d]) } else { g !== o && (g = o = {}, q = 0, l++), a = 0; for (b in f) f.hasOwnProperty(b) && (a++, g.hasOwnProperty(b) ? (c = g[b] !== g[b] && f[b] !== f[b], c || g[b] === f[b] || (l++, g[b] = f[b])) : (q++, g[b] = f[b], l++)); if (q > a) { l++; for (b in g) g.hasOwnProperty(b) && !f.hasOwnProperty(b) && (q--, delete g[b]) } }
                            else g !== f && (g = f, l++); return l }

                        function d() { if (p ? (p = !1, b(f, f, j)) : b(f, i, j), k)
                                if (t(f))
                                    if (e(f)) { i = new Array(f.length); for (var a = 0; a < f.length; a++) i[a] = f[a] } else { i = {}; for (var c in f) rc.call(f, c) && (i[c] = f[c]) }
                            else i = f } var f, g, i, j = this,
                            k = b.length > 1,
                            l = 0,
                            m = h(a),
                            n = [],
                            o = {},
                            p = !0,
                            q = 0; return this.$watch(c, d) }, $digest: function() { var d, e, f, h, j, k, n, o, p, r, s, t = this.$$asyncQueue,
                            u = this.$$postDigestQueue,
                            v = a,
                            w = this,
                            y = [];
                        l("$digest"), i.$$checkUrlChange(), c = null;
                        do { for (k = !1, o = w; t.length;) { try { s = t.shift(), s.scope.$eval(s.expression) } catch (z) { m(), g(z) }
                                c = null }
                            a: do { if (h = o.$$watchers)
                                    for (j = h.length; j--;) try { if (d = h[j])
                                            if ((e = d.get(o)) === (f = d.last) || (d.eq ? L(e, f) : "number" == typeof e && "number" == typeof f && isNaN(e) && isNaN(f))) { if (d === c) { k = !1; break a } } else k = !0, c = d, d.last = d.eq ? J(e, null) : e, d.fn(e, f === q ? e : f, o), 5 > v && (p = 4 - v, y[p] || (y[p] = []), r = x(d.exp) ? "fn: " + (d.exp.name || d.exp.toString()) : d.exp, r += "; newVal: " + Q(e) + "; oldVal: " + Q(f), y[p].push(r)) } catch (z) { m(), g(z) }
                                if (!(n = o.$$childHead || o !== w && o.$$nextSibling))
                                    for (; o !== w && !(n = o.$$nextSibling);) o = o.$parent } while (o = n); if ((k || t.length) && !v--) throw m(), b("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", a, Q(y)) } while (k || t.length); for (m(); u.length;) try { u.shift()() } catch (z) { g(z) } }, $destroy: function() { if (!this.$$destroyed) { var a = this.$parent;
                            this.$broadcast("$destroy"), this.$$destroyed = !0, this !== r && (f(this.$$listenerCount, O(null, p, this)), a.$$childHead == this && (a.$$childHead = this.$$nextSibling), a.$$childTail == this && (a.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = null, this.$$listeners = {}, this.$$watchers = this.$$asyncQueue = this.$$postDigestQueue = [], this.$destroy = this.$digest = this.$apply = o, this.$on = this.$watch = function() { return o }) } }, $eval: function(a, b) { return h(a)(this, b) }, $evalAsync: function(a) { r.$$phase || r.$$asyncQueue.length || i.defer(function() { r.$$asyncQueue.length && r.$digest() }), this.$$asyncQueue.push({ scope: this, expression: a }) }, $$postDigest: function(a) { this.$$postDigestQueue.push(a) }, $apply: function(a) { try { return l("$apply"), this.$eval(a) } catch (b) { g(b) } finally { m(); try { r.$digest() } catch (b) { throw g(b), b } } }, $on: function(a, b) { var c = this.$$listeners[a];
                        c || (this.$$listeners[a] = c = []), c.push(b); var d = this;
                        do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent); var e = this; return function() { var d = H(c, b); - 1 !== d && (c[d] = null, p(e, 1, a)) } }, $emit: function(a, b) { var c, d, e, f = [],
                            h = this,
                            i = !1,
                            j = { name: a, targetScope: h, stopPropagation: function() { i = !0 }, preventDefault: function() { j.defaultPrevented = !0 }, defaultPrevented: !1 },
                            k = M([j], arguments, 1);
                        do { for (c = h.$$listeners[a] || f, j.currentScope = h, d = 0, e = c.length; e > d; d++)
                                if (c[d]) try { c[d].apply(null, k) } catch (l) { g(l) } else c.splice(d, 1), d--, e--;
                            if (i) return j;
                            h = h.$parent } while (h); return j }, $broadcast: function(a, b) { for (var c, d, e, f = this, h = f, i = f, j = { name: a, targetScope: f, preventDefault: function() { j.defaultPrevented = !0 }, defaultPrevented: !1 }, k = M([j], arguments, 1); h = i;) { for (j.currentScope = h, c = h.$$listeners[a] || [], d = 0, e = c.length; e > d; d++)
                                if (c[d]) try { c[d].apply(null, k) } catch (l) { g(l) } else c.splice(d, 1), d--, e--;
                            if (!(i = h.$$listenerCount[a] && h.$$childHead || h !== f && h.$$nextSibling))
                                for (; h !== f && !(i = h.$$nextSibling);) h = h.$parent } return j } }; var r = new k; return r }] }

        function Gb() { var a = /^\s*(https?|ftp|mailto|tel|file):/,
                b = /^\s*((https?|ftp|file):|data:image\/)/;
            this.aHrefSanitizationWhitelist = function(b) { return s(b) ? (a = b, this) : a }, this.imgSrcSanitizationWhitelist = function(a) { return s(a) ? (b = a, this) : b }, this.$get = function() { return function(c, d) { var e, f = d ? b : a; return vc && !(vc >= 8) || (e = Ob(c).href, "" === e || e.match(f)) ? c : "unsafe:" + e } } }

        function Hb(a) { return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") }

        function Ib(a) { if ("self" === a) return a; if (u(a)) { if (a.indexOf("***") > -1) throw xd("iwcard", "Illegal sequence *** in string matcher.  String: {0}", a); return a = Hb(a).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + a + "$") } if (y(a)) return new RegExp("^" + a.source + "$"); throw xd("imatcher", 'Matchers may only be "self", string patterns or RegExp objects') }

        function Jb(a) { var b = []; return s(a) && f(a, function(a) { b.push(Ib(a)) }), b }

        function Kb() { this.SCE_CONTEXTS = yd; var a = ["self"],
                b = [];
            this.resourceUrlWhitelist = function(b) { return arguments.length && (a = Jb(b)), a }, this.resourceUrlBlacklist = function(a) { return arguments.length && (b = Jb(a)), b }, this.$get = ["$injector", function(d) {
                function e(a, b) { return "self" === a ? Pb(b) : !!a.exec(b.href) }

                function f(c) { var d, f, g = Ob(c.toString()),
                        h = !1; for (d = 0, f = a.length; f > d; d++)
                        if (e(a[d], g)) { h = !0; break }
                    if (h)
                        for (d = 0, f = b.length; f > d; d++)
                            if (e(b[d], g)) { h = !1; break }
                    return h }

                function g(a) { var b = function(a) { this.$$unwrapTrustedValue = function() { return a } }; return a && (b.prototype = new a), b.prototype.valueOf = function() { return this.$$unwrapTrustedValue() }, b.prototype.toString = function() { return this.$$unwrapTrustedValue().toString() }, b }

                function h(a, b) { var d = m.hasOwnProperty(a) ? m[a] : null; if (!d) throw xd("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", a, b); if (null === b || b === c || "" === b) return b; if ("string" != typeof b) throw xd("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", a); return new d(b) }

                function i(a) { return a instanceof l ? a.$$unwrapTrustedValue() : a }

                function j(a, b) { if (null === b || b === c || "" === b) return b; var d = m.hasOwnProperty(a) ? m[a] : null; if (d && b instanceof d) return b.$$unwrapTrustedValue(); if (a === yd.RESOURCE_URL) { if (f(b)) return b; throw xd("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", b.toString()) } if (a === yd.HTML) return k(b); throw xd("unsafe", "Attempting to use an unsafe value in a safe context.") } var k = function(a) { throw xd("unsafe", "Attempting to use an unsafe value in a safe context.") };
                d.has("$sanitize") && (k = d.get("$sanitize")); var l = g(),
                    m = {}; return m[yd.HTML] = g(l), m[yd.CSS] = g(l), m[yd.URL] = g(l), m[yd.JS] = g(l), m[yd.RESOURCE_URL] = g(m[yd.URL]), { trustAs: h, getTrusted: j, valueOf: i } }] }

        function Lb() { var a = !0;
            this.enabled = function(b) { return arguments.length && (a = !!b), a }, this.$get = ["$parse", "$sniffer", "$sceDelegate", function(b, c, d) { if (a && c.msie && c.msieDocumentMode < 8) throw xd("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 9 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information."); var e = K(yd);
                e.isEnabled = function() { return a }, e.trustAs = d.trustAs, e.getTrusted = d.getTrusted, e.valueOf = d.valueOf, a || (e.trustAs = e.getTrusted = function(a, b) { return b }, e.valueOf = p), e.parseAs = function(a, c) { var d = b(c); return d.literal && d.constant ? d : function(b, c) { return e.getTrusted(a, d(b, c)) } }; var g = e.parseAs,
                    h = e.getTrusted,
                    i = e.trustAs; return f(yd, function(a, b) { var c = qc(b);
                    e[ja("parse_as_" + c)] = function(b) { return g(a, b) }, e[ja("get_trusted_" + c)] = function(b) { return h(a, b) }, e[ja("trust_as_" + c)] = function(b) { return i(a, b) } }), e }] }

        function Mb() { this.$get = ["$window", "$document", function(a, b) { var c, d, e = {},
                    f = m((/android (\d+)/.exec(qc((a.navigator || {}).userAgent)) || [])[1]),
                    g = /Boxee/i.test((a.navigator || {}).userAgent),
                    h = b[0] || {},
                    i = h.documentMode,
                    j = /^(Moz|webkit|O|ms)(?=[A-Z])/,
                    k = h.body && h.body.style,
                    l = !1,
                    n = !1; if (k) { for (var o in k)
                        if (d = j.exec(o)) { c = d[0], c = c.substr(0, 1).toUpperCase() + c.substr(1); break }
                    c || (c = "WebkitOpacity" in k && "webkit"), l = !!("transition" in k || c + "Transition" in k), n = !!("animation" in k || c + "Animation" in k), !f || l && n || (l = u(h.body.style.webkitTransition), n = u(h.body.style.webkitAnimation)) } return { history: !(!a.history || !a.history.pushState || 4 > f || g), hashchange: "onhashchange" in a && (!i || i > 7), hasEvent: function(a) { if ("input" == a && 9 == vc) return !1; if (r(e[a])) { var b = h.createElement("div");
                            e[a] = "on" + a in b } return e[a] }, csp: Ic(), vendorPrefix: c, transitions: l, animations: n, android: f, msie: vc, msieDocumentMode: i } }] }

        function Nb() { this.$get = ["$rootScope", "$browser", "$q", "$exceptionHandler", function(a, b, c, d) {
                function e(e, g, h) { var i, j = c.defer(),
                        k = j.promise,
                        l = s(h) && !h; return i = b.defer(function() { try { j.resolve(e()) } catch (b) { j.reject(b), d(b) } finally { delete f[k.$$timeoutId] }
                        l || a.$apply() }, g), k.$$timeoutId = i, f[i] = j, k } var f = {}; return e.cancel = function(a) { return a && a.$$timeoutId in f ? (f[a.$$timeoutId].reject("canceled"), delete f[a.$$timeoutId], b.defer.cancel(a.$$timeoutId)) : !1 }, e }] }

        function Ob(a, b) { var c = a; return vc && (zd.setAttribute("href", c), c = zd.href), zd.setAttribute("href", c), { href: zd.href, protocol: zd.protocol ? zd.protocol.replace(/:$/, "") : "", host: zd.host, search: zd.search ? zd.search.replace(/^\?/, "") : "", hash: zd.hash ? zd.hash.replace(/^#/, "") : "", hostname: zd.hostname, port: zd.port, pathname: "/" === zd.pathname.charAt(0) ? zd.pathname : "/" + zd.pathname } }

        function Pb(a) { var b = u(a) ? Ob(a) : a; return b.protocol === Ad.protocol && b.host === Ad.host }

        function Qb() { this.$get = q(a) }

        function Rb(a) {
            function b(d, e) { if (t(d)) { var g = {}; return f(d, function(a, c) { g[c] = b(c, a) }), g } return a.factory(d + c, e) } var c = "Filter";
            this.register = b, this.$get = ["$injector", function(a) { return function(b) { return a.get(b + c) } }], b("currency", Tb), b("date", _b), b("filter", Sb), b("json", ac), b("limitTo", bc), b("lowercase", Fd), b("number", Ub), b("orderBy", cc), b("uppercase", Gd) }

        function Sb() { return function(a, b, c) { if (!Gc(a)) return a; var d = typeof c,
                    e = [];
                e.check = function(a) { for (var b = 0; b < e.length; b++)
                        if (!e[b](a)) return !1;
                    return !0 }, "function" !== d && (c = "boolean" === d && c ? function(a, b) { return Ec.equals(a, b) } : function(a, b) { if (a && b && "object" == typeof a && "object" == typeof b) { for (var d in a)
                            if ("$" !== d.charAt(0) && rc.call(a, d) && c(a[d], b[d])) return !0;
                        return !1 } return b = ("" + b).toLowerCase(), ("" + a).toLowerCase().indexOf(b) > -1 }); var f = function(a, b) { if ("string" == typeof b && "!" === b.charAt(0)) return !f(a, b.substr(1)); switch (typeof a) {
                        case "boolean":
                        case "number":
                        case "string":
                            return c(a, b);
                        case "object":
                            switch (typeof b) {
                                case "object":
                                    return c(a, b);
                                default:
                                    for (var d in a)
                                        if ("$" !== d.charAt(0) && f(a[d], b)) return !0 } return !1;
                        case "array":
                            for (var e = 0; e < a.length; e++)
                                if (f(a[e], b)) return !0;
                            return !1;
                        default:
                            return !1 } }; switch (typeof b) {
                    case "boolean":
                    case "number":
                    case "string":
                        b = { $: b };
                    case "object":
                        for (var g in b) ! function(a) { "undefined" != typeof b[a] && e.push(function(c) { return f("$" == a ? c : c && c[a], b[a]) }) }(g); break;
                    case "function":
                        e.push(b); break;
                    default:
                        return a } for (var h = [], i = 0; i < a.length; i++) { var j = a[i];
                    e.check(j) && h.push(j) } return h } }

        function Tb(a) { var b = a.NUMBER_FORMATS; return function(a, c) { return r(c) && (c = b.CURRENCY_SYM), Vb(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, 2).replace(/\u00A4/g, c) } }

        function Ub(a) { var b = a.NUMBER_FORMATS; return function(a, c) { return Vb(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c) } }

        function Vb(a, b, c, d, e) { if (null == a || !isFinite(a) || t(a)) return ""; var f = 0 > a;
            a = Math.abs(a); var g = a + "",
                h = "",
                i = [],
                j = !1; if (-1 !== g.indexOf("e")) { var k = g.match(/([\d\.]+)e(-?)(\d+)/);
                k && "-" == k[2] && k[3] > e + 1 ? (g = "0", a = 0) : (h = g, j = !0) } if (j) e > 0 && a > -1 && 1 > a && (h = a.toFixed(e));
            else { var l = (g.split(Bd)[1] || "").length;
                r(e) && (e = Math.min(Math.max(b.minFrac, l), b.maxFrac)), a = +(Math.round(+(a.toString() + "e" + e)).toString() + "e" + -e), 0 === a && (f = !1); var m = ("" + a).split(Bd),
                    n = m[0];
                m = m[1] || ""; var o, p = 0,
                    q = b.lgSize,
                    s = b.gSize; if (n.length >= q + s)
                    for (p = n.length - q, o = 0; p > o; o++)(p - o) % s === 0 && 0 !== o && (h += c), h += n.charAt(o); for (o = p; o < n.length; o++)(n.length - o) % q === 0 && 0 !== o && (h += c), h += n.charAt(o); for (; m.length < e;) m += "0";
                e && "0" !== e && (h += d + m.substr(0, e)) } return i.push(f ? b.negPre : b.posPre), i.push(h), i.push(f ? b.negSuf : b.posSuf), i.join("") }

        function Wb(a, b, c) { var d = ""; for (0 > a && (d = "-", a = -a), a = "" + a; a.length < b;) a = "0" + a; return c && (a = a.substr(a.length - b)), d + a }

        function Xb(a, b, c, d) { return c = c || 0,
                function(e) { var f = e["get" + a](); return (c > 0 || f > -c) && (f += c), 0 === f && -12 == c && (f = 12), Wb(f, b, d) } }

        function Yb(a, b) { return function(c, d) { var e = c["get" + a](),
                    f = sc(b ? "SHORT" + a : a); return d[f][e] } }

        function Zb(a) { var b = -1 * a.getTimezoneOffset(),
                c = b >= 0 ? "+" : ""; return c += Wb(Math[b > 0 ? "floor" : "ceil"](b / 60), 2) + Wb(Math.abs(b % 60), 2) }

        function $b(a, b) { return a.getHours() < 12 ? b.AMPMS[0] : b.AMPMS[1] }

        function _b(a) {
            function b(a) { var b; if (b = a.match(c)) { var d = new Date(0),
                        e = 0,
                        f = 0,
                        g = b[8] ? d.setUTCFullYear : d.setFullYear,
                        h = b[8] ? d.setUTCHours : d.setHours;
                    b[9] && (e = m(b[9] + b[10]), f = m(b[9] + b[11])), g.call(d, m(b[1]), m(b[2]) - 1, m(b[3])); var i = m(b[4] || 0) - e,
                        j = m(b[5] || 0) - f,
                        k = m(b[6] || 0),
                        l = Math.round(1e3 * parseFloat("0." + (b[7] || 0))); return h.call(d, i, j, k, l), d } return a } var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/; return function(c, d) { var e, g, h = "",
                    i = []; if (d = d || "mediumDate", d = a.DATETIME_FORMATS[d] || d, u(c) && (c = Ed.test(c) ? m(c) : b(c)), v(c) && (c = new Date(c)), !w(c)) return c; for (; d;) g = Dd.exec(d), g ? (i = M(i, g, 1), d = i.pop()) : (i.push(d), d = null); return f(i, function(b) { e = Cd[b], h += e ? e(c, a.DATETIME_FORMATS) : b.replace(/(^'|'$)/g, "").replace(/''/g, "'") }), h } }

        function ac() { return function(a) { return Q(a, !0) } }

        function bc() { return function(a, b) { return Gc(a) || u(a) ? (b = Math.abs(Number(b)) === 1 / 0 ? Number(b) : m(b), b ? b > 0 ? a.slice(0, b) : a.slice(b) : u(a) ? "" : []) : a } }

        function cc(a) { return function(b, c, d) {
                function f(a, b) { for (var d = 0; d < c.length; d++) { var e = c[d](a, b); if (0 !== e) return e } return 0 }

                function g(a, b) { return S(b) ? function(b, c) { return a(c, b) } : a }

                function h(a, b) { var c = typeof a,
                        d = typeof b; return c == d ? (w(a) && w(b) && (a = a.valueOf(), b = b.valueOf()), "string" == c && (a = a.toLowerCase(), b = b.toLowerCase()), a === b ? 0 : b > a ? -1 : 1) : d > c ? -1 : 1 } return e(b) ? (c = Gc(c) ? c : [c], 0 === c.length && (c = ["+"]), c = F(c, function(b) { var c = !1,
                        d = b || p; if (u(b)) { if (("+" == b.charAt(0) || "-" == b.charAt(0)) && (c = "-" == b.charAt(0), b = b.substring(1)), "" === b) return g(function(a, b) { return h(a, b) }, c); if (d = a(b), d.constant) { var e = d(); return g(function(a, b) { return h(a[e], b[e]) }, c) } } return g(function(a, b) { return h(d(a), d(b)) }, c) }), Ac.call(b).sort(g(f, d))) : b } }

        function dc(a) { return x(a) && (a = { link: a }), a.restrict = a.restrict || "AC", q(a) }

        function ec(a, b, c, d) {
            function e(b, c) { c = c ? "-" + _(c, "-") : "", d.setClass(a, (b ? Td : Ud) + c, (b ? Ud : Td) + c) } var g = this,
                h = a.parent().controller("form") || Jd,
                i = 0,
                j = g.$error = {},
                k = [];
            g.$name = b.name || b.ngForm, g.$dirty = !1, g.$pristine = !0, g.$valid = !0, g.$invalid = !1, h.$addControl(g), a.addClass(Vd), e(!0), g.$addControl = function(a) { da(a.$name, "input"), k.push(a), a.$name && (g[a.$name] = a) }, g.$removeControl = function(a) { a.$name && g[a.$name] === a && delete g[a.$name], f(j, function(b, c) { g.$setValidity(c, !0, a) }), I(k, a) }, g.$setValidity = function(a, b, c) { var d = j[a]; if (b) d && (I(d, c), d.length || (i--, i || (e(b), g.$valid = !0, g.$invalid = !1), j[a] = !1, e(!0, a), h.$setValidity(a, !0, g)));
                else { if (i || e(b), d) { if (G(d, c)) return } else j[a] = d = [], i++, e(!1, a), h.$setValidity(a, !1, g);
                    d.push(c), g.$valid = !1, g.$invalid = !0 } }, g.$setDirty = function() { d.removeClass(a, Vd), d.addClass(a, Wd), g.$dirty = !0, g.$pristine = !1, h.$setDirty() }, g.$setPristine = function() { d.removeClass(a, Wd), d.addClass(a, Vd), g.$dirty = !1, g.$pristine = !0, f(k, function(a) { a.$setPristine() }) } }

        function fc(a, b, d, e) { return a.$setValidity(b, d), d ? e : c }

        function gc(a, b) { var c, d; if (b)
                for (c = 0; c < b.length; ++c)
                    if (d = b[c], a[d]) return !0;
            return !1 }

        function hc(a, b, c, d, e) { if (t(e)) { a.$$hasNativeValidators = !0; var f = function(f) { return a.$error[b] || gc(e, d) || !gc(e, c) ? f : void a.$setValidity(b, !1) };
                a.$parsers.push(f) } }

        function ic(a, b, c, e, f, g) { var h = b.prop(pc),
                i = b[0].placeholder,
                j = {},
                k = qc(b[0].type); if (e.$$validityState = h, !f.android) { var l = !1;
                b.on("compositionstart", function(a) { l = !0 }), b.on("compositionend", function() { l = !1, n() }) } var n = function(d) { if (!l) { var f = b.val(); if (vc && "input" === (d || j).type && b[0].placeholder !== i) return void(i = b[0].placeholder); "password" !== k && S(c.ngTrim || "T") && (f = Hc(f)); var g = h && e.$$hasNativeValidators;
                    (e.$viewValue !== f || "" === f && g) && (a.$root.$$phase ? e.$setViewValue(f) : a.$apply(function() { e.$setViewValue(f) })) } }; if (f.hasEvent("input")) b.on("input", n);
            else { var o, p = function() { o || (o = g.defer(function() { n(), o = null })) };
                b.on("keydown", function(a) { var b = a.keyCode;
                    91 === b || b > 15 && 19 > b || b >= 37 && 40 >= b || p() }), f.hasEvent("paste") && b.on("paste cut", p) }
            b.on("change", n), e.$render = function() { b.val(e.$isEmpty(e.$viewValue) ? "" : e.$viewValue) }; var q, r, s = c.ngPattern; if (s) { var t = function(a, b) { return fc(e, "pattern", e.$isEmpty(b) || a.test(b), b) };
                r = s.match(/^\/(.*)\/([gim]*)$/), r ? (s = new RegExp(r[1], r[2]), q = function(a) { return t(s, a) }) : q = function(c) { var e = a.$eval(s); if (!e || !e.test) throw d("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", s, e, T(b)); return t(e, c) }, e.$formatters.push(q), e.$parsers.push(q) } if (c.ngMinlength) { var u = m(c.ngMinlength),
                    v = function(a) { return fc(e, "minlength", e.$isEmpty(a) || a.length >= u, a) };
                e.$parsers.push(v), e.$formatters.push(v) } if (c.ngMaxlength) { var w = m(c.ngMaxlength),
                    x = function(a) { return fc(e, "maxlength", e.$isEmpty(a) || a.length <= w, a) };
                e.$parsers.push(x), e.$formatters.push(x) } }

        function jc(a, b, d, e, f, g) { if (ic(a, b, d, e, f, g), e.$parsers.push(function(a) { var b = e.$isEmpty(a); return b || Pd.test(a) ? (e.$setValidity("number", !0), "" === a ? null : b ? a : parseFloat(a)) : (e.$setValidity("number", !1), c) }), hc(e, "number", Rd, null, e.$$validityState), e.$formatters.push(function(a) { return e.$isEmpty(a) ? "" : "" + a }), d.min) { var h = function(a) { var b = parseFloat(d.min); return fc(e, "min", e.$isEmpty(a) || a >= b, a) };
                e.$parsers.push(h), e.$formatters.push(h) } if (d.max) { var i = function(a) { var b = parseFloat(d.max); return fc(e, "max", e.$isEmpty(a) || b >= a, a) };
                e.$parsers.push(i), e.$formatters.push(i) }
            e.$formatters.push(function(a) { return fc(e, "number", e.$isEmpty(a) || v(a), a) }) }

        function kc(a, b, c, d, e, f) { ic(a, b, c, d, e, f); var g = function(a) { return fc(d, "url", d.$isEmpty(a) || Nd.test(a), a) };
            d.$formatters.push(g), d.$parsers.push(g) }

        function lc(a, b, c, d, e, f) { ic(a, b, c, d, e, f); var g = function(a) { return fc(d, "email", d.$isEmpty(a) || Od.test(a), a) };
            d.$formatters.push(g), d.$parsers.push(g) }

        function mc(a, b, c, d) { r(c.name) && b.attr("name", j()), b.on("click", function() { b[0].checked && a.$apply(function() { d.$setViewValue(c.value) }) }), d.$render = function() { var a = c.value;
                b[0].checked = a == d.$viewValue }, c.$observe("value", d.$render) }

        function nc(a, b, c, d) { var e = c.ngTrueValue,
                f = c.ngFalseValue;
            u(e) || (e = !0), u(f) || (f = !1), b.on("click", function() { a.$apply(function() { d.$setViewValue(b[0].checked) }) }), d.$render = function() { b[0].checked = d.$viewValue }, d.$isEmpty = function(a) { return a !== e }, d.$formatters.push(function(a) { return a === e }), d.$parsers.push(function(a) { return a ? e : f }) }

        function oc(a, b) {
            return a = "ngClass" + a, ["$animate", function(c) {
                function d(a, b) { var c = [];
                    a: for (var d = 0; d < a.length; d++) { for (var e = a[d], f = 0; f < b.length; f++)
                            if (e == b[f]) continue a;
                        c.push(e) }
                    return c }

                function e(a) { if (Gc(a)) return a; if (u(a)) return a.split(" "); if (t(a)) { var b = []; return f(a, function(a, c) { a && (b = b.concat(c.split(" "))) }), b } return a }
                return {
                    restrict: "AC",
                    link: function(g, h, i) {
                        function j(a) { var b = l(a, 1);
                            i.$addClass(b) }

                        function k(a) { var b = l(a, -1);
                            i.$removeClass(b) }

                        function l(a, b) { var c = h.data("$classCounts") || {},
                                d = []; return f(a, function(a) {
                                (b > 0 || c[a]) && (c[a] = (c[a] || 0) + b, c[a] === +(b > 0) && d.push(a)) }), h.data("$classCounts", c), d.join(" ") }

                        function m(a, b) { var e = d(b, a),
                                f = d(a, b);
                            f = l(f, -1), e = l(e, 1), 0 === e.length ? c.removeClass(h, f) : 0 === f.length ? c.addClass(h, e) : c.setClass(h, e, f) }

                        function n(a) {
                            if (b === !0 || g.$index % 2 === b) {
                                var c = e(a || []);
                                if (o) { if (!L(a, o)) { var d = e(o);
                                        m(d, c) } } else j(c)
                            }
                            o = K(a)
                        }
                        var o;
                        g.$watch(i[a], n, !0), i.$observe("class", function(b) { n(g.$eval(i[a])) }), "ngClass" !== a && g.$watch("$index", function(c, d) { var f = 1 & c; if (f !== (1 & d)) { var h = e(g.$eval(i[a]));
                                f === b ? j(h) : k(h) } })
                    }
                }
            }]
        }
        var pc = "validity",
            qc = function(a) { return u(a) ? a.toLowerCase() : a },
            rc = Object.prototype.hasOwnProperty,
            sc = function(a) { return u(a) ? a.toUpperCase() : a },
            tc = function(a) { return u(a) ? a.replace(/[A-Z]/g, function(a) { return String.fromCharCode(32 | a.charCodeAt(0)) }) : a },
            uc = function(a) { return u(a) ? a.replace(/[a-z]/g, function(a) { return String.fromCharCode(-33 & a.charCodeAt(0)) }) : a };
        "i" !== "I".toLowerCase() && (qc = tc, sc = uc);
        var vc, wc, xc, yc, zc, Ac = [].slice,
            Bc = [].push,
            Cc = Object.prototype.toString,
            Dc = d("ng"),
            Ec = a.angular || (a.angular = {}),
            Fc = ["0", "0", "0"];
        vc = m((/msie (\d+)/.exec(qc(navigator.userAgent)) || [])[1]), isNaN(vc) && (vc = m((/trident\/.*; rv:(\d+)/.exec(qc(navigator.userAgent)) || [])[1])), o.$inject = [], p.$inject = [];
        var Gc = function() { return x(Array.isArray) ? Array.isArray : function(a) { return "[object Array]" === Cc.call(a) } }(),
            Hc = function() { return String.prototype.trim ? function(a) { return u(a) ? a.trim() : a } : function(a) { return u(a) ? a.replace(/^\s\s*/, "").replace(/\s\s*$/, "") : a } }();
        zc = 9 > vc ? function(a) { return a = a.nodeName ? a : a[0], a.scopeName && "HTML" != a.scopeName ? sc(a.scopeName + ":" + a.nodeName) : a.nodeName } : function(a) { return a.nodeName ? a.nodeName : a[0].nodeName };
        var Ic = function() { if (s(Ic.isActive_)) return Ic.isActive_; var a = !(!b.querySelector("[ng-csp]") && !b.querySelector("[data-ng-csp]")); if (!a) try { new Function("") } catch (c) { a = !0 }
                return Ic.isActive_ = a },
            Jc = /[A-Z]/g,
            Kc = { full: "1.2.32", major: 1, minor: 2, dot: 32, codeName: "alternation-intention" };
        oa.expando = "ng339";
        var Lc = oa.cache = {},
            Mc = 1,
            Nc = a.document.addEventListener ? function(a, b, c) { a.addEventListener(b, c, !1) } : function(a, b, c) { a.attachEvent("on" + b, c) },
            Oc = a.document.removeEventListener ? function(a, b, c) { a.removeEventListener(b, c, !1) } : function(a, b, c) { a.detachEvent("on" + b, c) },
            Pc = (oa._data = function(a) { return this.cache[a[this.expando]] || {} }, /([\:\-\_]+(.))/g),
            Qc = /^moz([A-Z])/,
            Rc = d("jqLite"),
            Sc = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            Tc = /<|&#?\w+;/,
            Uc = /<([\w:]+)/,
            Vc = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Wc = { option: [1, '<select multiple="multiple">', "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
        Wc.optgroup = Wc.option, Wc.tbody = Wc.tfoot = Wc.colgroup = Wc.caption = Wc.thead, Wc.th = Wc.td;
        var Xc = oa.prototype = { ready: function(c) {
                    function d() { e || (e = !0, c()) } var e = !1; "complete" === b.readyState ? setTimeout(d) : (this.on("DOMContentLoaded", d), oa(a).on("load", d)) }, toString: function() { var a = []; return f(this, function(b) { a.push("" + b) }), "[" + a.join(", ") + "]" }, eq: function(a) { return wc(a >= 0 ? this[a] : this[this.length + a]) }, length: 0, push: Bc, sort: [].sort, splice: [].splice },
            Yc = {};
        f("multiple,selected,checked,disabled,readOnly,required,open".split(","), function(a) { Yc[qc(a)] = a });
        var Zc = {};
        f("input,select,option,textarea,button,form,details".split(","), function(a) { Zc[sc(a)] = !0 }), f({ data: ua, removeData: sa }, function(a, b) { oa[b] = a }), f({ data: ua, inheritedData: Aa, scope: function(a) { return wc.data(a, "$scope") || Aa(a.parentNode || a, ["$isolateScope", "$scope"]) }, isolateScope: function(a) { return wc.data(a, "$isolateScope") || wc.data(a, "$isolateScopeNoTemplate") }, controller: za, injector: function(a) { return Aa(a, "$injector") }, removeAttr: function(a, b) { a.removeAttribute(b) }, hasClass: va, css: function(a, b, d) { if (b = ja(b), !s(d)) { var e; return 8 >= vc && (e = a.currentStyle && a.currentStyle[b], "" === e && (e = "auto")), e = e || a.style[b], 8 >= vc && (e = "" === e ? c : e), e }
                a.style[b] = d }, attr: function(a, b, d) { var e = qc(b); if (Yc[e]) { if (!s(d)) return a[b] || (a.attributes.getNamedItem(b) || o).specified ? e : c;
                    d ? (a[b] = !0, a.setAttribute(b, e)) : (a[b] = !1, a.removeAttribute(e)) } else if (s(d)) a.setAttribute(b, d);
                else if (a.getAttribute) { var f = a.getAttribute(b, 2); return null === f ? c : f } }, prop: function(a, b, c) { return s(c) ? void(a[b] = c) : a[b] }, text: function() {
                function a(a, c) { var d = b[a.nodeType]; return r(c) ? d ? a[d] : "" : void(a[d] = c) } var b = []; return 9 > vc ? (b[1] = "innerText", b[3] = "nodeValue") : b[1] = b[3] = "textContent", a.$dv = "", a }(), val: function(a, b) { if (r(b)) { if ("SELECT" === zc(a) && a.multiple) { var c = []; return f(a.options, function(a) { a.selected && c.push(a.value || a.text) }), 0 === c.length ? null : c } return a.value }
                a.value = b }, html: function(a, b) { if (r(b)) return a.innerHTML; for (var c = 0, d = a.childNodes; c < d.length; c++) qa(d[c]);
                a.innerHTML = b }, empty: Ba }, function(a, b) { oa.prototype[b] = function(b, d) { var e, f, g = this.length; if (a !== Ba && (2 == a.length && a !== va && a !== za ? b : d) === c) { if (t(b)) { for (e = 0; g > e; e++)
                            if (a === ua) a(this[e], b);
                            else
                                for (f in b) a(this[e], f, b[f]);
                        return this } for (var h = a.$dv, i = h === c ? Math.min(g, 1) : g, j = 0; i > j; j++) { var k = a(this[j], b, d);
                        h = h ? h + k : k } return h } for (e = 0; g > e; e++) a(this[e], b, d); return this } }), f({ removeData: sa, dealoc: qa, on: function Ge(a, c, d, e) { if (s(e)) throw Rc("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters"); var g = ta(a, "events"),
                    h = ta(a, "handle");
                g || ta(a, "events", g = {}), h || ta(a, "handle", h = Da(a, g)), f(c.split(" "), function(c) { var e = g[c]; if (!e) { if ("mouseenter" == c || "mouseleave" == c) { var f = b.body.contains || b.body.compareDocumentPosition ? function(a, b) { var c = 9 === a.nodeType ? a.documentElement : a,
                                    d = b && b.parentNode; return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d))) } : function(a, b) { if (b)
                                    for (; b = b.parentNode;)
                                        if (b === a) return !0;
                                return !1 };
                            g[c] = []; var i = { mouseleave: "mouseout", mouseenter: "mouseover" };
                            Ge(a, i[c], function(a) { var b = this,
                                    d = a.relatedTarget;
                                (!d || d !== b && !f(b, d)) && h(a, c) }) } else Nc(a, c, h), g[c] = [];
                        e = g[c] }
                    e.push(d) }) }, off: ra, one: function(a, b, c) { a = wc(a), a.on(b, function d() { a.off(b, c), a.off(b, d) }), a.on(b, c) }, replaceWith: function(a, b) { var c, d = a.parentNode;
                qa(a), f(new oa(b), function(b) { c ? d.insertBefore(b, c.nextSibling) : d.replaceChild(b, a), c = b }) }, children: function(a) { var b = []; return f(a.childNodes, function(a) { 1 === a.nodeType && b.push(a) }), b }, contents: function(a) { return a.contentDocument || a.childNodes || [] }, append: function(a, b) { f(new oa(b), function(b) {
                    (1 === a.nodeType || 11 === a.nodeType) && a.appendChild(b) }) }, prepend: function(a, b) { if (1 === a.nodeType) { var c = a.firstChild;
                    f(new oa(b), function(b) { a.insertBefore(b, c) }) } }, wrap: function(a, b) { b = wc(b)[0]; var c = a.parentNode;
                c && c.replaceChild(b, a), b.appendChild(a) }, remove: function(a) { qa(a); var b = a.parentNode;
                b && b.removeChild(a) }, after: function(a, b) { var c = a,
                    d = a.parentNode;
                f(new oa(b), function(a) { d.insertBefore(a, c.nextSibling), c = a }) }, addClass: xa, removeClass: wa, toggleClass: function(a, b, c) { b && f(b.split(" "), function(b) { var d = c;
                    r(d) && (d = !va(a, b)), (d ? xa : wa)(a, b) }) }, parent: function(a) { var b = a.parentNode; return b && 11 !== b.nodeType ? b : null }, next: function(a) { if (a.nextElementSibling) return a.nextElementSibling; for (var b = a.nextSibling; null != b && 1 !== b.nodeType;) b = b.nextSibling; return b }, find: function(a, b) { return a.getElementsByTagName ? a.getElementsByTagName(b) : [] }, clone: pa, triggerHandler: function(a, b, c) { var d, e, g, h = b.type || b,
                    i = (ta(a, "events") || {})[h];
                i && (d = { preventDefault: function() { this.defaultPrevented = !0 }, isDefaultPrevented: function() { return this.defaultPrevented === !0 }, stopPropagation: o, type: h, target: a }, b.type && (d = l(d, b)), e = K(i), g = c ? [d].concat(c) : [d], f(e, function(b) { b.apply(a, g) })) } }, function(a, b) { oa.prototype[b] = function(b, c, d) { for (var e, f = 0; f < this.length; f++) r(e) ? (e = a(this[f], b, c, d), s(e) && (e = wc(e))) : ya(e, a(this[f], b, c, d)); return s(e) ? e : this }, oa.prototype.bind = oa.prototype.on, oa.prototype.unbind = oa.prototype.off }), Fa.prototype = { put: function(a, b) { this[Ea(a, this.nextUid)] = b }, get: function(a) { return this[Ea(a, this.nextUid)] }, remove: function(a) { var b = this[a = Ea(a, this.nextUid)]; return delete this[a], b } };
        var $c = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
            _c = /,/,
            ad = /^\s*(_?)(\S+?)\1\s*$/,
            bd = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
            cd = d("$injector"),
            dd = d("$animate"),
            ed = ["$provide", function(a) { this.$$selectors = {}, this.register = function(b, c) { var d = b + "-animation"; if (b && "." != b.charAt(0)) throw dd("notcsel", "Expecting class selector starting with '.' got '{0}'.", b);
                    this.$$selectors[b.substr(1)] = d, a.factory(d, c) }, this.classNameFilter = function(a) { return 1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null), this.$$classNameFilter }, this.$get = ["$timeout", "$$asyncCallback", function(a, b) {
                    function c(a) { a && b(a) } return { enter: function(a, b, d, e) { d ? d.after(a) : (b && b[0] || (b = d.parent()), b.append(a)), c(e) }, leave: function(a, b) { a.remove(), c(b) }, move: function(a, b, c, d) { this.enter(a, b, c, d) }, addClass: function(a, b, d) { b = u(b) ? b : Gc(b) ? b.join(" ") : "", f(a, function(a) { xa(a, b) }), c(d) }, removeClass: function(a, b, d) { b = u(b) ? b : Gc(b) ? b.join(" ") : "", f(a, function(a) { wa(a, b) }), c(d) }, setClass: function(a, b, d, e) { f(a, function(a) { xa(a, b), wa(a, d) }), c(e) }, enabled: o } }] }],
            fd = d("$compile");
        Oa.$inject = ["$provide", "$$sanitizeUriProvider"];
        var gd = /^(x[\:\-_]|data[\:\-_])/i,
            hd = d("$interpolate"),
            id = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
            jd = { http: 80, https: 443, ftp: 21 },
            kd = d("$location");
        nb.prototype = mb.prototype = lb.prototype = { $$html5: !1, $$replace: !1, absUrl: ob("$$absUrl"), url: function(a) { if (r(a)) return this.$$url; var b = id.exec(a); return b[1] && this.path(decodeURIComponent(b[1])), (b[2] || b[1]) && this.search(b[3] || ""), this.hash(b[5] || ""), this }, protocol: ob("$$protocol"), host: ob("$$host"), port: ob("$$port"), path: pb("$$path", function(a) { return a = null !== a ? a.toString() : "", "/" == a.charAt(0) ? a : "/" + a }), search: function(a, b) { switch (arguments.length) {
                    case 0:
                        return this.$$search;
                    case 1:
                        if (u(a) || v(a)) a = a.toString(), this.$$search = V(a);
                        else { if (!t(a)) throw kd("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
                            f(a, function(b, c) { null == b && delete a[c] }), this.$$search = a } break;
                    default:
                        r(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b } return this.$$compose(), this }, hash: pb("$$hash", function(a) { return null !== a ? a.toString() : "" }), replace: function() { return this.$$replace = !0, this } };
        var ld, md = d("$parse"),
            nd = {},
            od = Function.prototype.call,
            pd = Function.prototype.apply,
            qd = Function.prototype.bind,
            rd = { "null": function() { return null }, "true": function() { return !0 }, "false": function() { return !1 }, undefined: o, "+": function(a, b, d, e) { return d = d(a, b), e = e(a, b), s(d) ? s(e) ? d + e : d : s(e) ? e : c }, "-": function(a, b, c, d) { return c = c(a, b), d = d(a, b), (s(c) ? c : 0) - (s(d) ? d : 0) }, "*": function(a, b, c, d) { return c(a, b) * d(a, b) }, "/": function(a, b, c, d) { return c(a, b) / d(a, b) }, "%": function(a, b, c, d) { return c(a, b) % d(a, b) }, "^": function(a, b, c, d) { return c(a, b) ^ d(a, b) }, "=": o, "===": function(a, b, c, d) { return c(a, b) === d(a, b) }, "!==": function(a, b, c, d) { return c(a, b) !== d(a, b) }, "==": function(a, b, c, d) { return c(a, b) == d(a, b) }, "!=": function(a, b, c, d) { return c(a, b) != d(a, b) }, "<": function(a, b, c, d) { return c(a, b) < d(a, b) }, ">": function(a, b, c, d) { return c(a, b) > d(a, b) }, "<=": function(a, b, c, d) { return c(a, b) <= d(a, b) }, ">=": function(a, b, c, d) { return c(a, b) >= d(a, b) }, "&&": function(a, b, c, d) { return c(a, b) && d(a, b) }, "||": function(a, b, c, d) { return c(a, b) || d(a, b) }, "&": function(a, b, c, d) { return c(a, b) & d(a, b) }, "|": function(a, b, c, d) { return d(a, b)(a, b, c(a, b)) }, "!": function(a, b, c) { return !c(a, b) } },
            sd = { n: "\n", f: "\f", r: "\r", t: "	", v: "", "'": "'", '"': '"' },
            td = function(a) { this.options = a };
        td.prototype = { constructor: td, lex: function(a) { for (this.text = a, this.index = 0, this.ch = c, this.lastCh = ":", this.tokens = []; this.index < this.text.length;) { if (this.ch = this.text.charAt(this.index), this.is("\"'")) this.readString(this.ch);
                    else if (this.isNumber(this.ch) || this.is(".") && this.isNumber(this.peek())) this.readNumber();
                    else if (this.isIdent(this.ch)) this.readIdent();
                    else if (this.is("(){}[].,;:?")) this.tokens.push({ index: this.index, text: this.ch }), this.index++;
                    else { if (this.isWhitespace(this.ch)) { this.index++; continue } var b = this.ch + this.peek(),
                            d = b + this.peek(2),
                            e = rd[this.ch],
                            f = rd[b],
                            g = rd[d];
                        g ? (this.tokens.push({ index: this.index, text: d, fn: g }), this.index += 3) : f ? (this.tokens.push({ index: this.index, text: b, fn: f }), this.index += 2) : e ? (this.tokens.push({ index: this.index, text: this.ch, fn: e }), this.index += 1) : this.throwError("Unexpected next character ", this.index, this.index + 1) }
                    this.lastCh = this.ch } return this.tokens }, is: function(a) { return -1 !== a.indexOf(this.ch) }, was: function(a) { return -1 !== a.indexOf(this.lastCh) }, peek: function(a) { var b = a || 1; return this.index + b < this.text.length ? this.text.charAt(this.index + b) : !1 }, isNumber: function(a) { return a >= "0" && "9" >= a }, isWhitespace: function(a) { return " " === a || "\r" === a || "	" === a || "\n" === a || "" === a || " " === a }, isIdent: function(a) { return a >= "a" && "z" >= a || a >= "A" && "Z" >= a || "_" === a || "$" === a }, isExpOperator: function(a) { return "-" === a || "+" === a || this.isNumber(a) }, throwError: function(a, b, c) { c = c || this.index; var d = s(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, c) + "]" : " " + c; throw md("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", a, d, this.text) }, readNumber: function() { for (var a = "", b = this.index; this.index < this.text.length;) { var c = qc(this.text.charAt(this.index)); if ("." == c || this.isNumber(c)) a += c;
                    else { var d = this.peek(); if ("e" == c && this.isExpOperator(d)) a += c;
                        else if (this.isExpOperator(c) && d && this.isNumber(d) && "e" == a.charAt(a.length - 1)) a += c;
                        else { if (!this.isExpOperator(c) || d && this.isNumber(d) || "e" != a.charAt(a.length - 1)) break;
                            this.throwError("Invalid exponent") } }
                    this.index++ }
                a = 1 * a, this.tokens.push({ index: b, text: a, literal: !0, constant: !0, fn: function() { return a } }) }, readIdent: function() { for (var a, b, c, d, e = this, f = "", g = this.index; this.index < this.text.length && (d = this.text.charAt(this.index), "." === d || this.isIdent(d) || this.isNumber(d));) "." === d && (a = this.index), f += d, this.index++; if (a)
                    for (b = this.index; b < this.text.length;) { if (d = this.text.charAt(b), "(" === d) { c = f.substr(a - g + 1), f = f.substr(0, a - g), this.index = b; break } if (!this.isWhitespace(d)) break;
                        b++ }
                var h = { index: g, text: f }; if (rd.hasOwnProperty(f)) h.fn = rd[f], h.literal = !0, h.constant = !0;
                else { var i = Ab(f, this.options, this.text);
                    h.fn = l(function(a, b) { return i(a, b) }, { assign: function(a, b) { return wb(a, f, b, e.text, e.options) } }) }
                this.tokens.push(h), c && (this.tokens.push({ index: a, text: "." }), this.tokens.push({ index: a + 1, text: c })) }, readString: function(a) { var b = this.index;
                this.index++; for (var c = "", d = a, e = !1; this.index < this.text.length;) { var f = this.text.charAt(this.index); if (d += f, e) { if ("u" === f) { var g = this.text.substring(this.index + 1, this.index + 5);
                            g.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + g + "]"), this.index += 4, c += String.fromCharCode(parseInt(g, 16)) } else { var h = sd[f];
                            c += h || f }
                        e = !1 } else if ("\\" === f) e = !0;
                    else { if (f === a) return this.index++, void this.tokens.push({ index: b, text: d, string: c, literal: !0, constant: !0, fn: function() { return c } });
                        c += f }
                    this.index++ }
                this.throwError("Unterminated quote", b) } };
        var ud = function(a, b, c) { this.lexer = a, this.$filter = b, this.options = c };
        ud.ZERO = l(function() { return 0 }, { constant: !0 }), ud.prototype = { constructor: ud, parse: function(a) { this.text = a, this.tokens = this.lexer.lex(a); var b = this.statements(); return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), b.literal = !!b.literal, b.constant = !!b.constant, b }, primary: function() { var a; if (this.expect("(")) a = this.filterChain(), this.consume(")");
                else if (this.expect("[")) a = this.arrayDeclaration();
                else if (this.expect("{")) a = this.object();
                else { var b = this.expect();
                    a = b.fn, a || this.throwError("not a primary expression", b), a.literal = !!b.literal, a.constant = !!b.constant } for (var c, d; c = this.expect("(", "[", ".");) "(" === c.text ? (a = this.functionCall(a, d), d = null) : "[" === c.text ? (d = a, a = this.objectIndex(a)) : "." === c.text ? (d = a, a = this.fieldAccess(a)) : this.throwError("IMPOSSIBLE"); return a }, throwError: function(a, b) { throw md("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", b.text, a, b.index + 1, this.text, this.text.substring(b.index)) }, peekToken: function() { if (0 === this.tokens.length) throw md("ueoe", "Unexpected end of expression: {0}", this.text); return this.tokens[0] }, peek: function(a, b, c, d) { if (this.tokens.length > 0) { var e = this.tokens[0],
                        f = e.text; if (f === a || f === b || f === c || f === d || !a && !b && !c && !d) return e } return !1 }, expect: function(a, b, c, d) { var e = this.peek(a, b, c, d); return e ? (this.tokens.shift(), e) : !1 }, consume: function(a) { this.expect(a) || this.throwError("is unexpected, expecting [" + a + "]", this.peek()) }, unaryFn: function(a, b) { return l(function(c, d) { return a(c, d, b) }, { constant: b.constant }) }, ternaryFn: function(a, b, c) { return l(function(d, e) { return a(d, e) ? b(d, e) : c(d, e) }, { constant: a.constant && b.constant && c.constant }) }, binaryFn: function(a, b, c) { return l(function(d, e) { return b(d, e, a, c) }, { constant: a.constant && c.constant }) }, statements: function() { for (var a = [];;)
                    if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && a.push(this.filterChain()), !this.expect(";")) return 1 === a.length ? a[0] : function(b, c) { for (var d, e = 0; e < a.length; e++) { var f = a[e];
                            f && (d = f(b, c)) } return d } }, filterChain: function() { for (var a, b = this.expression();;) { if (!(a = this.expect("|"))) return b;
                    b = this.binaryFn(b, a.fn, this.filter()) } }, filter: function() { for (var a = this.expect(), b = this.$filter(a.text), c = [];;) { if (!(a = this.expect(":"))) { var d = function(a, d, e) { for (var f = [e], g = 0; g < c.length; g++) f.push(c[g](a, d)); return b.apply(a, f) }; return function() { return d } }
                    c.push(this.expression()) } }, expression: function() { return this.assignment() }, assignment: function() { var a, b, c = this.ternary(); return (b = this.expect("=")) ? (c.assign || this.throwError("implies assignment but [" + this.text.substring(0, b.index) + "] can not be assigned to", b), a = this.ternary(), function(b, d) { return c.assign(b, a(b, d), d) }) : c }, ternary: function() { var a, b, c = this.logicalOR(); return (b = this.expect("?")) ? (a = this.assignment(), (b = this.expect(":")) ? this.ternaryFn(c, a, this.assignment()) : void this.throwError("expected :", b)) : c }, logicalOR: function() { for (var a, b = this.logicalAND();;) { if (!(a = this.expect("||"))) return b;
                    b = this.binaryFn(b, a.fn, this.logicalAND()) } }, logicalAND: function() { var a, b = this.equality(); return (a = this.expect("&&")) && (b = this.binaryFn(b, a.fn, this.logicalAND())), b }, equality: function() { var a, b = this.relational(); return (a = this.expect("==", "!=", "===", "!==")) && (b = this.binaryFn(b, a.fn, this.equality())), b }, relational: function() { var a, b = this.additive(); return (a = this.expect("<", ">", "<=", ">=")) && (b = this.binaryFn(b, a.fn, this.relational())), b }, additive: function() { for (var a, b = this.multiplicative(); a = this.expect("+", "-");) b = this.binaryFn(b, a.fn, this.multiplicative()); return b }, multiplicative: function() { for (var a, b = this.unary(); a = this.expect("*", "/", "%");) b = this.binaryFn(b, a.fn, this.unary()); return b }, unary: function() { var a; return this.expect("+") ? this.primary() : (a = this.expect("-")) ? this.binaryFn(ud.ZERO, a.fn, this.unary()) : (a = this.expect("!")) ? this.unaryFn(a.fn, this.unary()) : this.primary() }, fieldAccess: function(a) { var b = this,
                    c = this.expect().text,
                    d = Ab(c, this.options, this.text); return l(function(b, c, e) { return d(e || a(b, c)) }, { assign: function(d, e, f) { var g = a(d, f); return g || a.assign(d, g = {}), wb(g, c, e, b.text, b.options) } }) }, objectIndex: function(a) { var b = this,
                    d = this.expression(); return this.consume("]"), l(function(e, f) { var g, h, i = a(e, f),
                        j = tb(d(e, f), b.text); return sb(j, b.text), i ? (g = ub(i[j], b.text), g && g.then && b.options.unwrapPromises && (h = g, "$$v" in g || (h.$$v = c, h.then(function(a) { h.$$v = a })), g = g.$$v), g) : c }, { assign: function(c, e, f) { var g = sb(tb(d(c, f), b.text), b.text),
                            h = ub(a(c, f), b.text); return h || a.assign(c, h = {}), h[g] = e } }) }, functionCall: function(a, b) { var c = []; if (")" !== this.peekToken().text)
                    do c.push(this.expression()); while (this.expect(","));
                this.consume(")"); var d = this; return function(e, f) { for (var g = [], h = b ? b(e, f) : e, i = 0; i < c.length; i++) g.push(ub(c[i](e, f), d.text)); var j = a(e, f, h) || o;
                    ub(h, d.text), vb(j, d.text); var k = j.apply ? j.apply(h, g) : j(g[0], g[1], g[2], g[3], g[4]); return ub(k, d.text) } }, arrayDeclaration: function() { var a = [],
                    b = !0; if ("]" !== this.peekToken().text)
                    do { if (this.peek("]")) break; var c = this.expression();
                        a.push(c), c.constant || (b = !1) } while (this.expect(",")); return this.consume("]"), l(function(b, c) { for (var d = [], e = 0; e < a.length; e++) d.push(a[e](b, c)); return d }, { literal: !0, constant: b }) }, object: function() { var a = [],
                    b = !0; if ("}" !== this.peekToken().text)
                    do { if (this.peek("}")) break; var c = this.expect(),
                            d = c.string || c.text;
                        this.consume(":"); var e = this.expression();
                        a.push({ key: d, value: e }), e.constant || (b = !1) } while (this.expect(",")); return this.consume("}"), l(function(b, c) { for (var d = {}, e = 0; e < a.length; e++) { var f = a[e];
                        d[f.key] = f.value(b, c) } return d }, { literal: !0, constant: b }) } };
        var vd = {},
            wd = {},
            xd = d("$sce"),
            yd = { HTML: "html", CSS: "css", URL: "url", RESOURCE_URL: "resourceUrl", JS: "js" },
            zd = b.createElement("a"),
            Ad = Ob(a.location.href, !0);
        Rb.$inject = ["$provide"], Tb.$inject = ["$locale"], Ub.$inject = ["$locale"];
        var Bd = ".",
            Cd = { yyyy: Xb("FullYear", 4), yy: Xb("FullYear", 2, 0, !0), y: Xb("FullYear", 1), MMMM: Yb("Month"), MMM: Yb("Month", !0), MM: Xb("Month", 2, 1), M: Xb("Month", 1, 1), dd: Xb("Date", 2), d: Xb("Date", 1), HH: Xb("Hours", 2), H: Xb("Hours", 1), hh: Xb("Hours", 2, -12), h: Xb("Hours", 1, -12), mm: Xb("Minutes", 2), m: Xb("Minutes", 1), ss: Xb("Seconds", 2), s: Xb("Seconds", 1), sss: Xb("Milliseconds", 3), EEEE: Yb("Day"), EEE: Yb("Day", !0), a: $b, Z: Zb },
            Dd = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,
            Ed = /^\-?\d+$/;
        _b.$inject = ["$locale"];
        var Fd = q(qc),
            Gd = q(sc);
        cc.$inject = ["$parse"];
        var Hd = q({ restrict: "E", compile: function(a, c) { return 8 >= vc && (c.href || c.name || c.$set("href", ""), a.append(b.createComment("IE fix"))), c.href || c.xlinkHref || c.name ? void 0 : function(a, b) { var c = "[object SVGAnimatedString]" === Cc.call(b.prop("href")) ? "xlink:href" : "href";
                        b.on("click", function(a) { b.attr(c) || a.preventDefault() }) } } }),
            Id = {};
        f(Yc, function(a, b) { if ("multiple" != a) { var c = Pa("ng-" + b);
                Id[c] = function() { return { priority: 100, link: function(a, d, e) { a.$watch(e[c], function(a) { e.$set(b, !!a) }) } } } } }), f(["src", "srcset", "href"], function(a) { var b = Pa("ng-" + a);
            Id[b] = function() { return { priority: 99, link: function(c, d, e) { var f = a,
                            g = a; "href" === a && "[object SVGAnimatedString]" === Cc.call(d.prop("href")) && (g = "xlinkHref", e.$attr[g] = "xlink:href", f = null), e.$observe(b, function(b) { return b ? (e.$set(g, b), void(vc && f && d.prop(f, e[g]))) : void("href" === a && e.$set(g, null)) }) } } } });
        var Jd = { $addControl: o, $removeControl: o, $setValidity: o, $setDirty: o, $setPristine: o };
        ec.$inject = ["$element", "$attrs", "$scope", "$animate"];
        var Kd = function(a) { return ["$timeout", function(b) { var d = { name: "form", restrict: a ? "EAC" : "E", controller: ec, compile: function() { return { pre: function(a, d, e, f) { if (!e.action) { var g = function(a) { a.preventDefault ? a.preventDefault() : a.returnValue = !1 };
                                        Nc(d[0], "submit", g), d.on("$destroy", function() { b(function() { Oc(d[0], "submit", g) }, 0, !1) }) } var h = d.parent().controller("form"),
                                        i = e.name || e.ngForm;
                                    i && wb(a, i, f, i), h && d.on("$destroy", function() { h.$removeControl(f), i && wb(a, i, c, i), l(f, Jd) }) } } } }; return d }] },
            Ld = Kd(),
            Md = Kd(!0),
            Nd = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
            Od = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
            Pd = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,
            Qd = { text: ic, number: jc, url: kc, email: lc, radio: mc, checkbox: nc, hidden: o, button: o, submit: o, reset: o, file: o },
            Rd = ["badInput"],
            Sd = ["$browser", "$sniffer", function(a, b) { return { restrict: "E", require: "?ngModel", link: function(c, d, e, f) { f && (Qd[qc(e.type)] || Qd.text)(c, d, e, f, b, a) } } }],
            Td = "ng-valid",
            Ud = "ng-invalid",
            Vd = "ng-pristine",
            Wd = "ng-dirty",
            Xd = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", function(a, b, c, e, g, h) {
                function i(a, b) { b = b ? "-" + _(b, "-") : "", h.removeClass(e, (a ? Ud : Td) + b), h.addClass(e, (a ? Td : Ud) + b) }
                this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$name = c.name; var j = g(c.ngModel),
                    k = j.assign; if (!k) throw d("ngModel")("nonassign", "Expression '{0}' is non-assignable. Element: {1}", c.ngModel, T(e));
                this.$render = o, this.$isEmpty = function(a) { return r(a) || "" === a || null === a || a !== a }; var l = e.inheritedData("$formController") || Jd,
                    m = 0,
                    n = this.$error = {};
                e.addClass(Vd), i(!0), this.$setValidity = function(a, b) { n[a] !== !b && (b ? (n[a] && m--, m || (i(!0), this.$valid = !0, this.$invalid = !1)) : (i(!1), this.$invalid = !0, this.$valid = !1, m++), n[a] = !b, i(b, a), l.$setValidity(a, b, this)) }, this.$setPristine = function() { this.$dirty = !1, this.$pristine = !0, h.removeClass(e, Wd), h.addClass(e, Vd) }, this.$setViewValue = function(c) { this.$viewValue = c, this.$pristine && (this.$dirty = !0, this.$pristine = !1, h.removeClass(e, Vd), h.addClass(e, Wd), l.$setDirty()), f(this.$parsers, function(a) { c = a(c) }), this.$modelValue !== c && (this.$modelValue = c, k(a, c), f(this.$viewChangeListeners, function(a) { try { a() } catch (c) { b(c) } })) }; var p = this;
                a.$watch(function() { var b = j(a); if (p.$modelValue !== b) { var c = p.$formatters,
                            d = c.length; for (p.$modelValue = b; d--;) b = c[d](b);
                        p.$viewValue !== b && (p.$viewValue = b, p.$render()) } return b }) }],
            Yd = function() { return { require: ["ngModel", "^?form"], controller: Xd, link: function(a, b, c, d) { var e = d[0],
                            f = d[1] || Jd;
                        f.$addControl(e), a.$on("$destroy", function() { f.$removeControl(e) }) } } },
            Zd = q({ require: "ngModel", link: function(a, b, c, d) { d.$viewChangeListeners.push(function() { a.$eval(c.ngChange) }) } }),
            $d = function() { return { require: "?ngModel", link: function(a, b, c, d) { if (d) { c.required = !0; var e = function(a) { return c.required && d.$isEmpty(a) ? void d.$setValidity("required", !1) : (d.$setValidity("required", !0), a) };
                            d.$formatters.push(e), d.$parsers.unshift(e), c.$observe("required", function() { e(d.$viewValue) }) } } } },
            _d = function() { return { require: "ngModel", link: function(a, b, d, e) { var g = /\/(.*)\//.exec(d.ngList),
                            h = g && new RegExp(g[1]) || d.ngList || ",",
                            i = function(a) { if (!r(a)) { var b = []; return a && f(a.split(h), function(a) { a && b.push(Hc(a)) }), b } };
                        e.$parsers.push(i), e.$formatters.push(function(a) { return Gc(a) ? a.join(", ") : c }), e.$isEmpty = function(a) { return !a || !a.length } } } },
            ae = /^(true|false|\d+)$/,
            be = function() { return { priority: 100, compile: function(a, b) { return ae.test(b.ngValue) ? function(a, b, c) { c.$set("value", a.$eval(c.ngValue)) } : function(a, b, c) { a.$watch(c.ngValue, function(a) { c.$set("value", a) }) } } } },
            ce = dc({ compile: function(a) { return a.addClass("ng-binding"),
                        function(a, b, d) { b.data("$binding", d.ngBind), a.$watch(d.ngBind, function(a) { b.text(a == c ? "" : a) }) } } }),
            de = ["$interpolate", function(a) { return function(b, c, d) { var e = a(c.attr(d.$attr.ngBindTemplate));
                    c.addClass("ng-binding").data("$binding", e), d.$observe("ngBindTemplate", function(a) { c.text(a) }) } }],
            ee = ["$sce", "$parse", function(a, b) { return { compile: function(c) { return c.addClass("ng-binding"),
                            function(c, d, e) {
                                function f() { return (g(c) || "").toString() }
                                d.data("$binding", e.ngBindHtml); var g = b(e.ngBindHtml);
                                c.$watch(f, function(b) { d.html(a.getTrustedHtml(g(c)) || "") }) } } } }],
            fe = oc("", !0),
            ge = oc("Odd", 0),
            he = oc("Even", 1),
            ie = dc({ compile: function(a, b) { b.$set("ngCloak", c), a.removeClass("ng-cloak") } }),
            je = [function() { return { scope: !0, controller: "@", priority: 500 } }],
            ke = {},
            le = { blur: !0, focus: !0 };
        f("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(a) { var b = Pa("ng-" + a);
            ke[b] = ["$parse", "$rootScope", function(c, d) { return { compile: function(e, f) { var g = c(f[b], !0); return function(b, c) { c.on(a, function(c) { var e = function() { g(b, { $event: c }) };
                                le[a] && d.$$phase ? b.$evalAsync(e) : b.$apply(e) }) } } } }] });
        var me = ["$animate", function(a) { return { transclude: "element", priority: 600, terminal: !0, restrict: "A", $$tlb: !0, link: function(c, d, e, f, g) { var h, i, j;
                        c.$watch(e.ngIf, function(f) { S(f) ? i || (i = c.$new(), g(i, function(c) { c[c.length++] = b.createComment(" end ngIf: " + e.ngIf + " "), h = { clone: c }, a.enter(c, d.parent(), d) })) : (j && (j.remove(), j = null), i && (i.$destroy(), i = null), h && (j = fa(h.clone), a.leave(j, function() { j = null }), h = null)) }) } } }],
            ne = ["$http", "$templateCache", "$anchorScroll", "$animate", "$sce", function(a, b, c, d, e) { return { restrict: "ECA", priority: 400, terminal: !0, transclude: "element", controller: Ec.noop, compile: function(f, g) { var h = g.ngInclude || g.src,
                            i = g.onload || "",
                            j = g.autoscroll; return function(f, g, k, l, m) { var n, o, p, q = 0,
                                r = function() { o && (o.remove(), o = null), n && (n.$destroy(), n = null), p && (d.leave(p, function() { o = null }), o = p, p = null) };
                            f.$watch(e.parseAsResourceUrl(h), function(e) { var h = function() {!s(j) || j && !f.$eval(j) || c() },
                                    k = ++q;
                                e ? (a.get(e, { cache: b }).success(function(a) { if (k === q) { var b = f.$new();
                                        l.template = a; var c = m(b, function(a) { r(), d.enter(a, null, g, h) });
                                        n = b, p = c, n.$emit("$includeContentLoaded"), f.$eval(i) } }).error(function() { k === q && r() }), f.$emit("$includeContentRequested")) : (r(), l.template = null) }) } } } }],
            oe = ["$compile", function(a) { return { restrict: "ECA", priority: -400, require: "ngInclude", link: function(b, c, d, e) { c.html(e.template), a(c.contents())(b) } } }],
            pe = dc({ priority: 450, compile: function() { return { pre: function(a, b, c) { a.$eval(c.ngInit) } } } }),
            qe = dc({ terminal: !0, priority: 1e3 }),
            re = ["$locale", "$interpolate", function(a, b) { var c = /{}/g; return { restrict: "EA", link: function(d, e, g) { var h = g.count,
                            i = g.$attr.when && e.attr(g.$attr.when),
                            j = g.offset || 0,
                            k = d.$eval(i) || {},
                            l = {},
                            m = b.startSymbol(),
                            n = b.endSymbol(),
                            o = /^when(Minus)?(.+)$/;
                        f(g, function(a, b) { o.test(b) && (k[qc(b.replace("when", "").replace("Minus", "-"))] = e.attr(g.$attr[b])) }), f(k, function(a, d) { l[d] = b(a.replace(c, m + h + "-" + j + n)) }), d.$watch(function() { var b = parseFloat(d.$eval(h)); return isNaN(b) ? "" : (b in k || (b = a.pluralCat(b - j)), l[b](d, e, !0)) }, function(a) { e.text(a) }) } } }],
            se = ["$parse", "$animate", function(a, c) {
                function g(a) { return a.clone[0] }

                function h(a) { return a.clone[a.clone.length - 1] } var i = "$$NG_REMOVED",
                    j = d("ngRepeat"); return { transclude: "element", priority: 1e3, terminal: !0, $$tlb: !0, link: function(d, k, l, m, n) { var o, p, q, r, s, t, u, v, w, x = l.ngRepeat,
                            y = x.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),
                            z = { $id: Ea }; if (!y) throw j("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", x); if (t = y[1], u = y[2], o = y[3], o ? (p = a(o), q = function(a, b, c) { return w && (z[w] = a), z[v] = b, z.$index = c, p(d, z) }) : (r = function(a, b) { return Ea(b) }, s = function(a) { return a }), y = t.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/), !y) throw j("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", t);
                        v = y[3] || y[1], w = y[2]; var A = {};
                        d.$watchCollection(u, function(a) { var l, m, o, p, t, u, y, z, B, C, D, E, F = k[0],
                                G = {},
                                H = []; if (e(a)) C = a, B = q || r;
                            else { B = q || s, C = []; for (u in a) a.hasOwnProperty(u) && "$" != u.charAt(0) && C.push(u);
                                C.sort() } for (p = C.length, m = H.length = C.length, l = 0; m > l; l++)
                                if (u = a === C ? l : C[l], y = a[u], z = B(u, y, l), da(z, "`track by` id"), A.hasOwnProperty(z)) D = A[z], delete A[z], G[z] = D, H[l] = D;
                                else { if (G.hasOwnProperty(z)) throw f(H, function(a) { a && a.scope && (A[a.id] = a) }), j("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", x, z, Q(y));
                                    H[l] = { id: z }, G[z] = !1 }
                            for (u in A) A.hasOwnProperty(u) && (D = A[u], E = fa(D.clone), c.leave(E), f(E, function(a) { a[i] = !0 }), D.scope.$destroy()); for (l = 0, m = C.length; m > l; l++) { if (u = a === C ? l : C[l], y = a[u], D = H[l], H[l - 1] && (F = h(H[l - 1])), D.scope) { t = D.scope, o = F;
                                    do o = o.nextSibling; while (o && o[i]);
                                    g(D) != o && c.move(fa(D.clone), null, wc(F)), F = h(D) } else t = d.$new();
                                t[v] = y, w && (t[w] = u), t.$index = l, t.$first = 0 === l, t.$last = l === p - 1, t.$middle = !(t.$first || t.$last), t.$odd = !(t.$even = 0 === (1 & l)), D.scope || n(t, function(a) { a[a.length++] = b.createComment(" end ngRepeat: " + x + " "), c.enter(a, null, wc(F)), F = a, D.scope = t, D.clone = a, G[D.id] = D }) }
                            A = G }) } } }],
            te = ["$animate", function(a) { return function(b, c, d) { b.$watch(d.ngShow, function(b) { a[S(b) ? "removeClass" : "addClass"](c, "ng-hide") }) } }],
            ue = ["$animate", function(a) { return function(b, c, d) { b.$watch(d.ngHide, function(b) { a[S(b) ? "addClass" : "removeClass"](c, "ng-hide") }) } }],
            ve = dc(function(a, b, c) { a.$watch(c.ngStyle, function(a, c) { c && a !== c && f(c, function(a, c) { b.css(c, "") }), a && b.css(a) }, !0) }),
            we = ["$animate", function(a) { return { restrict: "EA", require: "ngSwitch", controller: ["$scope", function() { this.cases = {} }], link: function(b, c, d, e) { var g = d.ngSwitch || d.on,
                            h = [],
                            i = [],
                            j = [],
                            k = [];
                        b.$watch(g, function(c) { var g, l; for (g = 0, l = j.length; l > g; ++g) j[g].remove(); for (j.length = 0, g = 0, l = k.length; l > g; ++g) { var m = i[g];
                                k[g].$destroy(), j[g] = m, a.leave(m, function() { j.splice(g, 1) }) }
                            i.length = 0, k.length = 0, (h = e.cases["!" + c] || e.cases["?"]) && (b.$eval(d.change), f(h, function(c) { var d = b.$new();
                                k.push(d), c.transclude(d, function(b) { var d = c.element;
                                    i.push(b), a.enter(b, d.parent(), d) }) })) }) } } }],
            xe = dc({ transclude: "element", priority: 800, require: "^ngSwitch", link: function(a, b, c, d, e) { d.cases["!" + c.ngSwitchWhen] = d.cases["!" + c.ngSwitchWhen] || [], d.cases["!" + c.ngSwitchWhen].push({ transclude: e, element: b }) } }),
            ye = dc({
                transclude: "element",
                priority: 800,
                require: "^ngSwitch",
                link: function(a, b, c, d, e) { d.cases["?"] = d.cases["?"] || [], d.cases["?"].push({ transclude: e, element: b }) }
            }),
            ze = dc({ link: function(a, b, c, e, f) { if (!f) throw d("ngTransclude")("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", T(b));
                    f(function(a) { b.empty(), b.append(a) }) } }),
            Ae = ["$templateCache", function(a) { return { restrict: "E", terminal: !0, compile: function(b, c) { if ("text/ng-template" == c.type) { var d = c.id,
                                e = b[0].text;
                            a.put(d, e) } } } }],
            Be = d("ngOptions"),
            Ce = q({ terminal: !0 }),
            De = ["$compile", "$parse", function(a, d) { var e = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
                    h = { $setViewValue: o }; return { restrict: "E", require: ["select", "?ngModel"], controller: ["$element", "$scope", "$attrs", function(a, b, c) { var d, e, f = this,
                            g = {},
                            i = h;
                        f.databound = c.ngModel, f.init = function(a, b, c) { i = a, d = b, e = c }, f.addOption = function(b) { da(b, '"option value"'), g[b] = !0, i.$viewValue == b && (a.val(b), e.parent() && e.remove()) }, f.removeOption = function(a) { this.hasOption(a) && (delete g[a], i.$viewValue == a && this.renderUnknownOption(a)) }, f.renderUnknownOption = function(b) { var c = "? " + Ea(b) + " ?";
                            e.val(c), a.prepend(e), a.val(c), e.prop("selected", !0) }, f.hasOption = function(a) { return g.hasOwnProperty(a) }, b.$on("$destroy", function() { f.renderUnknownOption = o }) }], link: function(h, i, j, k) {
                        function l(a, b, c, d) { c.$render = function() { var a = c.$viewValue;
                                d.hasOption(a) ? (y.parent() && y.remove(), b.val(a), "" === a && o.prop("selected", !0)) : r(a) && o ? b.val("") : d.renderUnknownOption(a) }, b.on("change", function() { a.$apply(function() { y.parent() && y.remove(), c.$setViewValue(b.val()) }) }) }

                        function m(a, b, c) { var d;
                            c.$render = function() { var a = new Fa(c.$viewValue);
                                f(b.find("option"), function(b) { b.selected = s(a.get(b.value)) }) }, a.$watch(function() { L(d, c.$viewValue) || (d = K(c.$viewValue), c.$render()) }), b.on("change", function() { a.$apply(function() { var a = [];
                                    f(b.find("option"), function(b) { b.selected && a.push(b.value) }), c.$setViewValue(a) }) }) }

                        function n(b, f, h) {
                            function i() { var a = !1; if (t) { var c = h.$modelValue; if (z && Gc(c)) { a = new Fa([]); for (var d = {}, e = 0; e < c.length; e++) d[m] = c[e], a.put(z(b, d), c[e]) } else a = new Fa(c) } return a }

                            function j() { var a, c, d, e, j, k, u, y, B, C, D, E, F, G, H, I = { "": [] },
                                    J = [""],
                                    K = h.$modelValue,
                                    L = r(b) || [],
                                    M = n ? g(L) : L,
                                    N = {},
                                    O = i(); for (D = 0; B = M.length, B > D; D++) { if (u = D, n) { if (u = M[D], "$" === u.charAt(0)) continue;
                                        N[n] = u } if (N[m] = L[u], a = o(b, N) || "", (c = I[a]) || (c = I[a] = [], J.push(a)), t) E = s(O.remove(z ? z(b, N) : q(b, N)));
                                    else { if (z) { var P = {};
                                            P[m] = K, E = z(b, P) === z(b, N) } else E = K === q(b, N);
                                        O = O || E }
                                    H = l(b, N), H = s(H) ? H : "", c.push({ id: z ? z(b, N) : n ? M[D] : D, label: H, selected: E }) } for (t || (v || null === K ? I[""].unshift({ id: "", label: "", selected: !O }) : O || I[""].unshift({ id: "?", label: "", selected: !0 })), C = 0, y = J.length; y > C; C++) { for (a = J[C], c = I[a], A.length <= C ? (e = { element: x.clone().attr("label", a), label: c.label }, j = [e], A.push(j), f.append(e.element)) : (j = A[C], e = j[0], e.label != a && e.element.attr("label", e.label = a)), F = null, D = 0, B = c.length; B > D; D++) d = c[D], (k = j[D + 1]) ? (F = k.element, k.label !== d.label && (F.text(k.label = d.label), F.prop("label", k.label)), k.id !== d.id && F.val(k.id = d.id), F[0].selected !== d.selected && (F.prop("selected", k.selected = d.selected), vc && F.prop("selected", k.selected))) : ("" === d.id && v ? G = v : (G = w.clone()).val(d.id).prop("selected", d.selected).attr("selected", d.selected).prop("label", d.label).text(d.label), j.push(k = { element: G, label: d.label, id: d.id, selected: d.selected }), p.addOption(d.label, G), F ? F.after(G) : e.element.append(G), F = G); for (D++; j.length > D;) d = j.pop(), p.removeOption(d.label), d.element.remove() } for (; A.length > C;) A.pop()[0].element.remove() } var k; if (!(k = u.match(e))) throw Be("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", u, T(f)); var l = d(k[2] || k[1]),
                                m = k[4] || k[6],
                                n = k[5],
                                o = d(k[3] || ""),
                                q = d(k[2] ? k[1] : m),
                                r = d(k[7]),
                                y = k[8],
                                z = y ? d(k[8]) : null,
                                A = [
                                    [{ element: f, label: "" }]
                                ];
                            v && (a(v)(b), v.removeClass("ng-scope"), v.remove()), f.empty(), f.on("change", function() { b.$apply(function() { var a, d, e, g, i, k, l, o, p, s = r(b) || [],
                                        u = {}; if (t) { for (e = [], k = 0, o = A.length; o > k; k++)
                                            for (a = A[k], i = 1, l = a.length; l > i; i++)
                                                if ((g = a[i].element)[0].selected) { if (d = g.val(), n && (u[n] = d), z)
                                                        for (p = 0; p < s.length && (u[m] = s[p], z(b, u) != d); p++);
                                                    else u[m] = s[d];
                                                    e.push(q(b, u)) } } else if (d = f.val(), "?" == d) e = c;
                                    else if ("" === d) e = null;
                                    else if (z) { for (p = 0; p < s.length; p++)
                                            if (u[m] = s[p], z(b, u) == d) { e = q(b, u); break } } else u[m] = s[d], n && (u[n] = d), e = q(b, u);
                                    h.$setViewValue(e), j() }) }), h.$render = j, b.$watchCollection(r, j), b.$watchCollection(function() { var a = {},
                                    c = r(b); if (c) { for (var d = new Array(c.length), e = 0, f = c.length; f > e; e++) a[m] = c[e], d[e] = l(b, a); return d } }, j), t && b.$watchCollection(function() { return h.$modelValue }, j) } if (k[1]) { for (var o, p = k[0], q = k[1], t = j.multiple, u = j.ngOptions, v = !1, w = wc(b.createElement("option")), x = wc(b.createElement("optgroup")), y = w.clone(), z = 0, A = i.children(), B = A.length; B > z; z++)
                                if ("" === A[z].value) { o = v = A.eq(z); break }
                            p.init(q, v, y), t && (q.$isEmpty = function(a) { return !a || 0 === a.length }), u ? n(h, i, q) : t ? m(h, i, q) : l(h, i, q, p) } } } }],
            Ee = ["$interpolate", function(a) { var b = { addOption: o, removeOption: o }; return { restrict: "E", priority: 100, compile: function(c, d) { if (r(d.value)) { var e = a(c.text(), !0);
                            e || d.$set("value", c.text()) } return function(a, c, d) { var f = "$selectController",
                                g = c.parent(),
                                h = g.data(f) || g.parent().data(f);
                            h && h.databound ? c.prop("selected", !1) : h = b, e ? a.$watch(e, function(a, b) { d.$set("value", a), a !== b && h.removeOption(b), h.addOption(a) }) : h.addOption(d.value), c.on("$destroy", function() { h.removeOption(d.value) }) } } } }],
            Fe = q({ restrict: "E", terminal: !0 });
        return a.angular.bootstrap ? void console.log("WARNING: Tried to load angular more than once.") : (aa(), ha(Ec), void wc(b).ready(function() { Z(b, $) }))
    }(window, document), !window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}.ng-hide-add-active,.ng-hide-remove{display:block!important;}</style>'), function(a, b, c) { "use strict";

        function d(a) { return null != a && "" !== a && "hasOwnProperty" !== a && h.test("." + a) }

        function e(a, b) { if (!d(b)) throw g("badmember", 'Dotted member path "@{0}" is invalid.', b); for (var e = b.split("."), f = 0, h = e.length; h > f && a !== c; f++) { var i = e[f];
                a = null !== a ? a[i] : c } return a }

        function f(a, c) { c = c || {}, b.forEach(c, function(a, b) { delete c[b] }); for (var d in a) !a.hasOwnProperty(d) || "$" === d.charAt(0) && "$" === d.charAt(1) || (c[d] = a[d]); return c } var g = b.$$minErr("$resource"),
            h = /^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;
        b.module("ngResource", ["ng"]).factory("$resource", ["$http", "$q", function(a, d) {
            function h(a) { return i(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+") }

            function i(a, b) { return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, b ? "%20" : "+") }

            function j(a, b) { this.template = a, this.defaults = b || {}, this.urlParams = {} }

            function k(h, i, r) {
                function s(a, b) { var c = {}; return b = o({}, i, b), n(b, function(b, d) { q(b) && (b = b()), c[d] = b && b.charAt && "@" == b.charAt(0) ? e(a, b.substr(1)) : b }), c }

                function t(a) { return a.resource }

                function u(a) { f(a || {}, this) } var v = new j(h); return r = o({}, l, r), n(r, function(e, h) { var i = /^(POST|PUT|PATCH)$/i.test(e.method);
                    u[h] = function(h, j, k, l) { var r, w, x, y = {}; switch (arguments.length) {
                            case 4:
                                x = l, w = k;
                            case 3:
                            case 2:
                                if (!q(j)) { y = h, r = j, w = k; break } if (q(h)) { w = h, x = j; break }
                                w = j, x = k;
                            case 1:
                                q(h) ? w = h : i ? r = h : y = h; break;
                            case 0:
                                break;
                            default:
                                throw g("badargs", "Expected up to 4 arguments [params, data, success, error], got {0} arguments", arguments.length) } var z = this instanceof u,
                            A = z ? r : e.isArray ? [] : new u(r),
                            B = {},
                            C = e.interceptor && e.interceptor.response || t,
                            D = e.interceptor && e.interceptor.responseError || c;
                        n(e, function(a, b) { "params" != b && "isArray" != b && "interceptor" != b && (B[b] = p(a)) }), i && (B.data = r), v.setUrlParams(B, o({}, s(r, e.params || {}), y), e.url); var E = a(B).then(function(a) { var c = a.data,
                                d = A.$promise; if (c) { if (b.isArray(c) !== !!e.isArray) throw g("badcfg", "Error in resource configuration. Expected response to contain an {0} but got an {1}", e.isArray ? "array" : "object", b.isArray(c) ? "array" : "object");
                                e.isArray ? (A.length = 0, n(c, function(a) { "object" == typeof a ? A.push(new u(a)) : A.push(a) })) : (f(c, A), A.$promise = d) } return A.$resolved = !0, a.resource = A, a }, function(a) { return A.$resolved = !0, (x || m)(a), d.reject(a) }); return E = E.then(function(a) { var b = C(a); return (w || m)(b, a.headers), b }, D), z ? E : (A.$promise = E, A.$resolved = !1, A) }, u.prototype["$" + h] = function(a, b, c) { q(a) && (c = b, b = a, a = {}); var d = u[h].call(this, a, this, b, c); return d.$promise || d } }), u.bind = function(a) { return k(h, o({}, i, a), r) }, u } var l = { get: { method: "GET" }, save: { method: "POST" }, query: { method: "GET", isArray: !0 }, remove: { method: "DELETE" }, "delete": { method: "DELETE" } },
                m = b.noop,
                n = b.forEach,
                o = b.extend,
                p = b.copy,
                q = b.isFunction; return j.prototype = { setUrlParams: function(a, c, d) { var e, f, i = this,
                        j = d || i.template,
                        k = i.urlParams = {};
                    n(j.split(/\W/), function(a) { if ("hasOwnProperty" === a) throw g("badname", "hasOwnProperty is not a valid parameter name.");!new RegExp("^\\d+$").test(a) && a && new RegExp("(^|[^\\\\]):" + a + "(\\W|$)").test(j) && (k[a] = !0) }), j = j.replace(/\\:/g, ":"), c = c || {}, n(i.urlParams, function(a, d) { e = c.hasOwnProperty(d) ? c[d] : i.defaults[d], b.isDefined(e) && null !== e ? (f = h(e), j = j.replace(new RegExp(":" + d + "(\\W|$)", "g"), function(a, b) { return f + b })) : j = j.replace(new RegExp("(/?):" + d + "(\\W|$)", "g"), function(a, b, c) { return "/" == c.charAt(0) ? c : b + c }) }), j = j.replace(/\/+$/, "") || "/", j = j.replace(/\/\.(?=\w+($|\?))/, "."), a.url = j.replace(/\/\\\./, "/."), n(c, function(b, c) { i.urlParams[c] || (a.params = a.params || {}, a.params[c] = b) }) } }, k }]) }(window, window.angular), function(a, b, c) { "use strict";
        b.module("ngCookies", ["ng"]).factory("$cookies", ["$rootScope", "$browser", function(a, d) {
            function e() { var a, e, f, i; for (a in h) k(g[a]) && d.cookies(a, c); for (a in g) e = g[a], b.isString(e) || (e = "" + e, g[a] = e), e !== h[a] && (d.cookies(a, e), i = !0); if (i) { i = !1, f = d.cookies(); for (a in g) g[a] !== f[a] && (k(f[a]) ? delete g[a] : g[a] = f[a], i = !0) } } var f, g = {},
                h = {},
                i = !1,
                j = b.copy,
                k = b.isUndefined; return d.addPollFn(function() { var b = d.cookies();
                f != b && (f = b, j(b, h), j(b, g), i && a.$apply()) })(), i = !0, a.$watch(e), g }]).factory("$cookieStore", ["$cookies", function(a) { return { get: function(c) { var d = a[c]; return d ? b.fromJson(d) : d }, put: function(c, d) { a[c] = b.toJson(d) }, remove: function(b) { delete a[b] } } }]) }(window, window.angular), function(a, b, c) { "use strict";

        function d() { this.$get = ["$$sanitizeUri", function(a) { return function(b) { var c = []; return g(b, j(c, function(b, c) { return !/^unsafe/.test(a(b, c)) })), c.join("") } }] }

        function e(a) { var c = [],
                d = j(c, b.noop); return d.chars(a), c.join("") }

        function f(a) { var b, c = {},
                d = a.split(","); for (b = 0; b < d.length; b++) c[d[b]] = !0; return c }

        function g(a, c) {
            function d(a, d, f, g) { if (d = b.lowercase(d), z[d])
                    for (; t.last() && A[t.last()];) e("", t.last());
                y[d] && t.last() == d && e("", d), g = v[d] || !!g, g || t.push(d); var i = {};
                f.replace(n, function(a, b, c, d, e) { var f = c || d || e || "";
                    i[b] = h(f) }), c.start && c.start(d, i, g) }

            function e(a, d) { var e, f = 0; if (d = b.lowercase(d))
                    for (f = t.length - 1; f >= 0 && t[f] != d; f--); if (f >= 0) { for (e = t.length - 1; e >= f; e--) c.end && c.end(t[e]);
                    t.length = f } } "string" != typeof a && (a = null === a || "undefined" == typeof a ? "" : "" + a); var f, g, i, j, t = [],
                u = a; for (t.last = function() { return t[t.length - 1] }; a;) { if (j = "", g = !0, t.last() && B[t.last()] ? (a = a.replace(new RegExp("(.*)<\\s*\\/\\s*" + t.last() + "[^>]*>", "i"), function(a, b) { return b = b.replace(q, "$1").replace(s, "$1"), c.chars && c.chars(h(b)), "" }), e("", t.last())) : (0 === a.indexOf("<!--") ? (f = a.indexOf("--", 4), f >= 0 && a.lastIndexOf("-->", f) === f && (c.comment && c.comment(a.substring(4, f)), a = a.substring(f + 3), g = !1)) : r.test(a) ? (i = a.match(r), i && (a = a.replace(i[0], ""), g = !1)) : p.test(a) ? (i = a.match(m), i && (a = a.substring(i[0].length), i[0].replace(m, e), g = !1)) : o.test(a) && (i = a.match(l), i ? (i[4] && (a = a.substring(i[0].length), i[0].replace(l, d)), g = !1) : (j += "<", a = a.substring(1))), g && (f = a.indexOf("<"), j += 0 > f ? a : a.substring(0, f), a = 0 > f ? "" : a.substring(f), c.chars && c.chars(h(j)))), a == u) throw k("badparse", "The sanitizer was unable to parse the following block of html: {0}", a);
                u = a }
            e() }

        function h(a) { if (!a) return ""; var b = G.exec(a),
                c = b[1],
                d = b[3],
                e = b[2]; return e && (F.innerHTML = e.replace(/</g, "&lt;"), e = "textContent" in F ? F.textContent : F.innerText), c + e + d }

        function i(a) { return a.replace(/&/g, "&amp;").replace(t, function(a) { var b = a.charCodeAt(0),
                    c = a.charCodeAt(1); return "&#" + (1024 * (b - 55296) + (c - 56320) + 65536) + ";" }).replace(u, function(a) { return "&#" + a.charCodeAt(0) + ";" }).replace(/</g, "&lt;").replace(/>/g, "&gt;") }

        function j(a, c) { var d = !1,
                e = b.bind(a, a.push); return { start: function(a, f, g) { a = b.lowercase(a), !d && B[a] && (d = a), d || C[a] !== !0 || (e("<"), e(a), b.forEach(f, function(d, f) { var g = b.lowercase(f),
                            h = "img" === a && "src" === g || "background" === g;
                        E[g] !== !0 || D[g] === !0 && !c(d, h) || (e(" "), e(f), e('="'), e(i(d)), e('"')) }), e(g ? "/>" : ">")) }, end: function(a) { a = b.lowercase(a), d || C[a] !== !0 || (e("</"), e(a), e(">")), a == d && (d = !1) }, chars: function(a) { d || e(i(a)) } } } var k = b.$$minErr("$sanitize"),
            l = /^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,
            m = /^<\/\s*([\w:-]+)[^>]*>/,
            n = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,
            o = /^</,
            p = /^<\//,
            q = /<!--(.*?)-->/g,
            r = /<!DOCTYPE([^>]*?)>/i,
            s = /<!\[CDATA\[(.*?)]]>/g,
            t = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
            u = /([^\#-~| |!])/g,
            v = f("area,br,col,hr,img,wbr"),
            w = f("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
            x = f("rp,rt"),
            y = b.extend({}, x, w),
            z = b.extend({}, w, f("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),
            A = b.extend({}, x, f("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
            B = f("script,style"),
            C = b.extend({}, v, z, A, y),
            D = f("background,cite,href,longdesc,src"),
            E = b.extend({}, D, f("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width")),
            F = document.createElement("pre"),
            G = /^(\s*)([\s\S]*?)(\s*)$/;
        b.module("ngSanitize", []).provider("$sanitize", d), b.module("ngSanitize").filter("linky", ["$sanitize", function(a) { var c = /((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"]/,
                d = /^mailto:/; return function(f, g) {
                function h(a) { a && n.push(e(a)) }

                function i(a, c) { n.push("<a "), b.isDefined(g) && (n.push('target="'), n.push(g), n.push('" ')), n.push('href="', a.replace('"', "&quot;"), '">'), h(c), n.push("</a>") } if (!f) return f; for (var j, k, l, m = f, n = []; j = m.match(c);) k = j[0], j[2] == j[3] && (k = "mailto:" + k), l = j.index, h(m.substr(0, l)), i(k, j[0].replace(d, "")), m = m.substring(l + j[0].length); return h(m), a(n.join("")) } }]) }(window, window.angular), function(a, b, c) { "use strict";

        function d() {
            function a(a, c) { return b.extend(new(b.extend(function() {}, { prototype: a })), c) }

            function c(a, b) { var c = b.caseInsensitiveMatch,
                    d = { originalPath: a, regexp: a },
                    e = d.keys = []; return a = a.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)([\?\*])?/g, function(a, b, c, d) { var f = "?" === d ? d : null,
                        g = "*" === d ? d : null; return e.push({ name: c, optional: !!f }), b = b || "", "" + (f ? "" : b) + "(?:" + (f ? b : "") + (g && "(.+?)" || "([^/]+)") + (f || "") + ")" + (f || "") }).replace(/([\/$\*])/g, "\\$1"), d.regexp = new RegExp("^" + a + "$", c ? "i" : ""), d } var d = {};
            this.when = function(a, e) { if (d[a] = b.extend({ reloadOnSearch: !0 }, e, a && c(a, e)), a) { var f = "/" == a[a.length - 1] ? a.substr(0, a.length - 1) : a + "/";
                    d[f] = b.extend({ redirectTo: a }, c(f, e)) } return this }, this.otherwise = function(a) { return this.when(null, a), this }, this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$http", "$templateCache", "$sce", function(c, e, f, g, h, i, j, k) {
                function l(a, b) { var c = b.keys,
                        d = {}; if (!b.regexp) return null; var e = b.regexp.exec(a); if (!e) return null; for (var f = 1, g = e.length; g > f; ++f) { var h = c[f - 1],
                            i = e[f];
                        h && i && (d[h.name] = i) } return d }

                function m() { var a = n(),
                        d = q.current;
                    a && d && a.$$route === d.$$route && b.equals(a.pathParams, d.pathParams) && !a.reloadOnSearch && !p ? (d.params = a.params, b.copy(d.params, f), c.$broadcast("$routeUpdate", d)) : (a || d) && (p = !1, c.$broadcast("$routeChangeStart", a, d), q.current = a, a && a.redirectTo && (b.isString(a.redirectTo) ? e.path(o(a.redirectTo, a.params)).search(a.params).replace() : e.url(a.redirectTo(a.pathParams, e.path(), e.search())).replace()), g.when(a).then(function() { if (a) { var c, d, e = b.extend({}, a.resolve); return b.forEach(e, function(a, c) { e[c] = b.isString(a) ? h.get(a) : h.invoke(a) }), b.isDefined(c = a.template) ? b.isFunction(c) && (c = c(a.params)) : b.isDefined(d = a.templateUrl) && (b.isFunction(d) && (d = d(a.params)), d = k.getTrustedResourceUrl(d), b.isDefined(d) && (a.loadedTemplateUrl = d, c = i.get(d, { cache: j }).then(function(a) { return a.data }))), b.isDefined(c) && (e.$template = c), g.all(e) } }).then(function(e) { a == q.current && (a && (a.locals = e, b.copy(a.params, f)), c.$broadcast("$routeChangeSuccess", a, d)) }, function(b) { a == q.current && c.$broadcast("$routeChangeError", a, d, b) })) }

                function n() { var c, f; return b.forEach(d, function(d, g) {!f && (c = l(e.path(), d)) && (f = a(d, { params: b.extend({}, e.search(), c), pathParams: c }), f.$$route = d) }), f || d[null] && a(d[null], { params: {}, pathParams: {} }) }

                function o(a, c) { var d = []; return b.forEach((a || "").split(":"), function(a, b) { if (0 === b) d.push(a);
                        else { var e = a.match(/(\w+)(?:[?*])?(.*)/),
                                f = e[1];
                            d.push(c[f]), d.push(e[2] || ""), delete c[f] } }), d.join("") } var p = !1,
                    q = { routes: d, reload: function() { p = !0, c.$evalAsync(m) } }; return c.$on("$locationChangeSuccess", m), q }] }

        function e() { this.$get = function() { return {} } }

        function f(a, c, d) { return { restrict: "ECA", terminal: !0, priority: 400, transclude: "element", link: function(e, f, g, h, i) {
                    function j() { n && (n.remove(), n = null), l && (l.$destroy(), l = null), m && (d.leave(m, function() { n = null }), n = m, m = null) }

                    function k() { var g = a.current && a.current.locals,
                            h = g && g.$template; if (b.isDefined(h)) { var k = e.$new(),
                                n = a.current,
                                q = i(k, function(a) { d.enter(a, null, m || f, function() {!b.isDefined(o) || o && !e.$eval(o) || c() }), j() });
                            m = q, l = n.scope = k, l.$emit("$viewContentLoaded"), l.$eval(p) } else j() } var l, m, n, o = g.autoscroll,
                        p = g.onload || "";
                    e.$on("$routeChangeSuccess", k), k() } } }

        function g(a, b, c) { return { restrict: "ECA", priority: -400, link: function(d, e) { var f = c.current,
                        g = f.locals;
                    e.html(g.$template); var h = a(e.contents()); if (f.controller) { g.$scope = d; var i = b(f.controller, g);
                        f.controllerAs && (d[f.controllerAs] = i), e.data("$ngControllerController", i), e.children().data("$ngControllerController", i) }
                    h(d) } } } var h = b.module("ngRoute", ["ng"]).provider("$route", d);
        h.provider("$routeParams", e), h.directive("ngView", f), h.directive("ngView", g), f.$inject = ["$route", "$anchorScroll", "$animate"], g.$inject = ["$compile", "$controller", "$route"] }(window, window.angular), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(a) { "use strict"; var b = a.fn.jquery.split(" ")[0].split("."); if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4") }(jQuery), + function(a) { "use strict";

    function b() { var a = document.createElement("bootstrap"),
            b = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" }; for (var c in b)
            if (void 0 !== a.style[c]) return { end: b[c] };
        return !1 }
    a.fn.emulateTransitionEnd = function(b) { var c = !1,
            d = this;
        a(this).one("bsTransitionEnd", function() { c = !0 }); var e = function() { c || a(d).trigger(a.support.transition.end) }; return setTimeout(e, b), this }, a(function() { a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = { bindType: a.support.transition.end, delegateType: a.support.transition.end, handle: function(b) { return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0 } }) }) }(jQuery), + function(a) { "use strict";

    function b(b) { return this.each(function() { var c = a(this),
                e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c) }) } var c = '[data-dismiss="alert"]',
        d = function(b) { a(b).on("click", c, this.close) };
    d.VERSION = "3.3.7", d.TRANSITION_DURATION = 150, d.prototype.close = function(b) {
        function c() { g.detach().trigger("closed.bs.alert").remove() } var e = a(this),
            f = e.attr("data-target");
        f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, "")); var g = a("#" === f ? [] : f);
        b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c()) }; var e = a.fn.alert;
    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() { return a.fn.alert = e, this }, a(document).on("click.bs.alert.data-api", c, d.prototype.close) }(jQuery), + function(a) { "use strict";

    function b(b) { return this.each(function() { var d = a(this),
                e = d.data("bs.button"),
                f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b) }) } var c = function(b, d) { this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1 };
    c.VERSION = "3.3.7", c.DEFAULTS = { loadingText: "loading..." }, c.prototype.setState = function(b) { var c = "disabled",
            d = this.$element,
            e = d.is("input") ? "val" : "html",
            f = d.data();
        b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function() { d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c).prop(c, !0)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c).prop(c, !1)) }, this), 0) }, c.prototype.toggle = function() { var a = !0,
            b = this.$element.closest('[data-toggle="buttons"]'); if (b.length) { var c = this.$element.find("input"); "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change") } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active") }; var d = a.fn.button;
    a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() { return a.fn.button = d, this }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) { var d = a(c.target).closest(".btn");
        b.call(d, "toggle"), a(c.target).is('input[type="radio"], input[type="checkbox"]') || (c.preventDefault(), d.is("input,button") ? d.trigger("focus") : d.find("input:visible,button:visible").first().trigger("focus")) }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) { a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type)) }) }(jQuery), + function(a) { "use strict";

    function b(b) { return this.each(function() { var d = a(this),
                e = d.data("bs.carousel"),
                f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
                g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle() }) } var c = function(b, c) { this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this)) };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 600, c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }, c.prototype.keydown = function(a) { if (!/input|textarea/i.test(a.target.tagName)) { switch (a.which) {
                case 37:
                    this.prev(); break;
                case 39:
                    this.next(); break;
                default:
                    return }
            a.preventDefault() } }, c.prototype.cycle = function(b) { return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this }, c.prototype.getItemIndex = function(a) { return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active) }, c.prototype.getItemForDirection = function(a, b) { var c = this.getItemIndex(b),
            d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1; if (d && !this.options.wrap) return b; var e = "prev" == a ? -1 : 1,
            f = (c + e) % this.$items.length; return this.$items.eq(f) }, c.prototype.to = function(a) { var b = this,
            c = this.getItemIndex(this.$active = this.$element.find(".item.active")); return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() { b.to(a) }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a)) }, c.prototype.pause = function(b) { return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this }, c.prototype.next = function() { return this.sliding ? void 0 : this.slide("next") }, c.prototype.prev = function() { return this.sliding ? void 0 : this.slide("prev") }, c.prototype.slide = function(b, d) { var e = this.$element.find(".item.active"),
            f = d || this.getItemForDirection(b, e),
            g = this.interval,
            h = "next" == b ? "left" : "right",
            i = this; if (f.hasClass("active")) return this.sliding = !1; var j = f[0],
            k = a.Event("slide.bs.carousel", { relatedTarget: j, direction: h }); if (this.$element.trigger(k), !k.isDefaultPrevented()) { if (this.sliding = !0, g && this.pause(), this.$indicators.length) { this.$indicators.find(".active").removeClass("active"); var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                l && l.addClass("active") } var m = a.Event("slid.bs.carousel", { relatedTarget: j, direction: h }); return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function() { f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function() { i.$element.trigger(m) }, 0) }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this } }; var d = a.fn.carousel;
    a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() { return a.fn.carousel = d, this }; var e = function(c) { var d, e = a(this),
            f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, "")); if (f.hasClass("carousel")) { var g = a.extend({}, f.data(), e.data()),
                h = e.attr("data-slide-to");
            h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault() } };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function() { a('[data-ride="carousel"]').each(function() { var c = a(this);
            b.call(c, c.data()) }) }) }(jQuery), + function(a) { "use strict";

    function b(b) { var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""); return a(d) }

    function c(b) { return this.each(function() { var c = a(this),
                e = c.data("bs.collapse"),
                f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);!e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]() }) } var d = function(b, c) { this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle() };
    d.VERSION = "3.3.7", d.TRANSITION_DURATION = 350, d.DEFAULTS = { toggle: !0 }, d.prototype.dimension = function() { var a = this.$element.hasClass("width"); return a ? "width" : "height" }, d.prototype.show = function() { if (!this.transitioning && !this.$element.hasClass("in")) { var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing"); if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) { var f = a.Event("show.bs.collapse"); if (this.$element.trigger(f), !f.isDefaultPrevented()) { e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null)); var g = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1; var h = function() { this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse") }; if (!a.support.transition) return h.call(this); var i = a.camelCase(["scroll", g].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i]) } } } }, d.prototype.hide = function() { if (!this.transitioning && this.$element.hasClass("in")) { var b = a.Event("hide.bs.collapse"); if (this.$element.trigger(b), !b.isDefaultPrevented()) { var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1; var e = function() { this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse") }; return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this) } } }, d.prototype.toggle = function() { this[this.$element.hasClass("in") ? "hide" : "show"]() }, d.prototype.getParent = function() { return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) { var e = a(d);
            this.addAriaAndCollapsedClass(b(e), e) }, this)).end() }, d.prototype.addAriaAndCollapsedClass = function(a, b) { var c = a.hasClass("in");
        a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c) }; var e = a.fn.collapse;
    a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function() { return a.fn.collapse = e, this }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) { var e = a(this);
        e.attr("data-target") || d.preventDefault(); var f = b(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : e.data();
        c.call(f, h) }) }(jQuery), + function(a) {
    "use strict";

    function b(b) { var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, "")); var d = c && a(c); return d && d.length ? d : b.parent() }

    function c(c) { c && 3 === c.which || (a(e).remove(), a(f).each(function() { var d = a(this),
                e = b(d),
                f = { relatedTarget: this };
            e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f))))) })) }

    function d(b) { return this.each(function() { var c = a(this),
                d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c) }) }
    var e = ".dropdown-backdrop",
        f = '[data-toggle="dropdown"]',
        g = function(b) { a(b).on("click.bs.dropdown", this.toggle) };
    g.VERSION = "3.3.7", g.prototype.toggle = function(d) { var e = a(this); if (!e.is(".disabled, :disabled")) { var f = b(e),
                g = f.hasClass("open"); if (c(), !g) { "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c); var h = { relatedTarget: this }; if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h)) } return !1 } }, g.prototype.keydown = function(c) { if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) { var d = a(this); if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) { var e = b(d),
                    g = e.hasClass("open"); if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click"); var h = " li:not(.disabled):visible a",
                    i = e.find(".dropdown-menu" + h); if (i.length) { var j = i.index(c.target);
                    38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus") } } } };
    var h = a.fn.dropdown;
    a.fn.dropdown = d,
        a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() { return a.fn.dropdown = h, this }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function(a) { a.stopPropagation() }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
}(jQuery), + function(a) { "use strict";

    function b(b, d) { return this.each(function() { var e = a(this),
                f = e.data("bs.modal"),
                g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d) }) } var c = function(b, c) { this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() { this.$element.trigger("loaded.bs.modal") }, this)) };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, c.prototype.toggle = function(a) { return this.isShown ? this.hide() : this.show(a) }, c.prototype.show = function(b) { var d = this,
            e = a.Event("show.bs.modal", { relatedTarget: b });
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() { d.$element.one("mouseup.dismiss.bs.modal", function(b) { a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0) }) }), this.backdrop(function() { var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus(); var f = a.Event("shown.bs.modal", { relatedTarget: b });
            e ? d.$dialog.one("bsTransitionEnd", function() { d.$element.trigger("focus").trigger(f) }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f) })) }, c.prototype.hide = function(b) { b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal()) }, c.prototype.enforceFocus = function() { a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) { document === a.target || this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus") }, this)) }, c.prototype.escape = function() { this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) { 27 == a.which && this.hide() }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal") }, c.prototype.resize = function() { this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal") }, c.prototype.hideModal = function() { var a = this;
        this.$element.hide(), this.backdrop(function() { a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal") }) }, c.prototype.removeBackdrop = function() { this.$backdrop && this.$backdrop.remove(), this.$backdrop = null }, c.prototype.backdrop = function(b) { var d = this,
            e = this.$element.hasClass("fade") ? "fade" : ""; if (this.isShown && this.options.backdrop) { var f = a.support.transition && e; if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) { return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())) }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b() } else if (!this.isShown && this.$backdrop) { this.$backdrop.removeClass("in"); var g = function() { d.removeBackdrop(), b && b() };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g() } else b && b() }, c.prototype.handleUpdate = function() { this.adjustDialog() }, c.prototype.adjustDialog = function() { var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({ paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : "" }) }, c.prototype.resetAdjustments = function() { this.$element.css({ paddingLeft: "", paddingRight: "" }) }, c.prototype.checkScrollbar = function() { var a = window.innerWidth; if (!a) { var b = document.documentElement.getBoundingClientRect();
            a = b.right - Math.abs(b.left) }
        this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar() }, c.prototype.setScrollbar = function() { var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth) }, c.prototype.resetScrollbar = function() { this.$body.css("padding-right", this.originalBodyPad) }, c.prototype.measureScrollbar = function() { var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a); var b = a.offsetWidth - a.clientWidth; return this.$body[0].removeChild(a), b }; var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() { return a.fn.modal = d, this }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) { var d = a(this),
            e = d.attr("href"),
            f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
            g = f.data("bs.modal") ? "toggle" : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data());
        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) { a.isDefaultPrevented() || f.one("hidden.bs.modal", function() { d.is(":visible") && d.trigger("focus") }) }), b.call(f, g, this) }) }(jQuery), + function(a) { "use strict";

    function b(b) { return this.each(function() { var d = a(this),
                e = d.data("bs.tooltip"),
                f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]()) }) } var c = function(a, b) { this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b) };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 } }, c.prototype.init = function(b, c, d) { if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = { click: !1, hover: !1, focus: !1 }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!"); for (var e = this.options.trigger.split(" "), f = e.length; f--;) { var g = e[f]; if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) { var h = "hover" == g ? "mouseenter" : "focusin",
                    i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this)) } }
        this.options.selector ? this._options = a.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle() }, c.prototype.getDefaults = function() { return c.DEFAULTS }, c.prototype.getOptions = function(b) { return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = { show: b.delay, hide: b.delay }), b }, c.prototype.getDelegateOptions = function() { var b = {},
            c = this.getDefaults(); return this._options && a.each(this._options, function(a, d) { c[a] != d && (b[a] = d) }), b }, c.prototype.enter = function(b) { var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type); return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void(c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() { "in" == c.hoverState && c.show() }, c.options.delay.show)) : c.show()) }, c.prototype.isInStateTrue = function() { for (var a in this.inState)
            if (this.inState[a]) return !0;
        return !1 }, c.prototype.leave = function(b) { var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type); return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), c.isInStateTrue() ? void 0 : (clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() { "out" == c.hoverState && c.hide() }, c.options.delay.hide)) : c.hide()) }, c.prototype.show = function() { var b = a.Event("show.bs." + this.type); if (this.hasContent() && this.enabled) { this.$element.trigger(b); var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]); if (b.isDefaultPrevented() || !d) return; var e = this,
                f = this.tip(),
                g = this.getUID(this.type);
            this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade"); var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
                i = /\s?auto?\s?/i,
                j = i.test(h);
            j && (h = h.replace(i, "") || "top"), f.detach().css({ top: 0, left: 0, display: "block" }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type); var k = this.getPosition(),
                l = f[0].offsetWidth,
                m = f[0].offsetHeight; if (j) { var n = h,
                    o = this.getPosition(this.$viewport);
                h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h) } var p = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(p, h); var q = function() { var a = e.hoverState;
                e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e) };
            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q() } }, c.prototype.applyPlacement = function(b, c) { var d = this.tip(),
            e = d[0].offsetWidth,
            f = d[0].offsetHeight,
            g = parseInt(d.css("margin-top"), 10),
            h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({ using: function(a) { d.css({ top: Math.round(a.top), left: Math.round(a.left) }) } }, b), 0), d.addClass("in"); var i = d[0].offsetWidth,
            j = d[0].offsetHeight; "top" == c && j != f && (b.top = b.top + f - j); var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top; var l = /top|bottom/.test(c),
            m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
            n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l) }, c.prototype.replaceArrow = function(a, b, c) { this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "") }, c.prototype.setContent = function() { var a = this.tip(),
            b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right") }, c.prototype.hide = function(b) {
        function d() { "in" != e.hoverState && f.detach(), e.$element && e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b() } var e = this,
            f = a(this.$tip),
            g = a.Event("hide.bs." + this.type); return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this) }, c.prototype.fixTitle = function() { var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "") }, c.prototype.hasContent = function() { return this.getTitle() }, c.prototype.getPosition = function(b) { b = b || this.$element; var c = b[0],
            d = "BODY" == c.tagName,
            e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({}, e, { width: e.right - e.left, height: e.bottom - e.top })); var f = window.SVGElement && c instanceof window.SVGElement,
            g = d ? { top: 0, left: 0 } : f ? null : b.offset(),
            h = { scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop() },
            i = d ? { width: a(window).width(), height: a(window).height() } : null; return a.extend({}, e, h, i, g) }, c.prototype.getCalculatedOffset = function(a, b, c, d) { return "bottom" == a ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 } : "top" == a ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 } : "left" == a ? { top: b.top + b.height / 2 - d / 2, left: b.left - c } : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width } }, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) { var e = { top: 0, left: 0 }; if (!this.$viewport) return e; var f = this.options.viewport && this.options.viewport.padding || 0,
            g = this.getPosition(this.$viewport); if (/right|left/.test(a)) { var h = b.top - f - g.scroll,
                i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i) } else { var j = b.left - f,
                k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k) } return e }, c.prototype.getTitle = function() { var a, b = this.$element,
            c = this.options; return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title) }, c.prototype.getUID = function(a) { do a += ~~(1e6 * Math.random()); while (document.getElementById(a)); return a }, c.prototype.tip = function() { if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!"); return this.$tip }, c.prototype.arrow = function() { return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow") }, c.prototype.enable = function() { this.enabled = !0 }, c.prototype.disable = function() { this.enabled = !1 }, c.prototype.toggleEnabled = function() { this.enabled = !this.enabled }, c.prototype.toggle = function(b) { var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c) }, c.prototype.destroy = function() { var a = this;
        clearTimeout(this.timeout), this.hide(function() { a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null, a.$element = null }) }; var d = a.fn.tooltip;
    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() { return a.fn.tooltip = d, this } }(jQuery), + function(a) { "use strict";

    function b(b) { return this.each(function() { var d = a(this),
                e = d.data("bs.popover"),
                f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]()) }) } var c = function(a, b) { this.init("popover", a, b) }; if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.3.7", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function() { return c.DEFAULTS }, c.prototype.setContent = function() { var a = this.tip(),
            b = this.getTitle(),
            c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide() }, c.prototype.hasContent = function() { return this.getTitle() || this.getContent() }, c.prototype.getContent = function() { var a = this.$element,
            b = this.options; return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content) }, c.prototype.arrow = function() { return this.$arrow = this.$arrow || this.tip().find(".arrow") }; var d = a.fn.popover;
    a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() { return a.fn.popover = d, this } }(jQuery), + function(a) { "use strict";

    function b(c, d) { this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process() }

    function c(c) { return this.each(function() { var d = a(this),
                e = d.data("bs.scrollspy"),
                f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]() }) }
    b.VERSION = "3.3.7", b.DEFAULTS = { offset: 10 }, b.prototype.getScrollHeight = function() { return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight) }, b.prototype.refresh = function() { var b = this,
            c = "offset",
            d = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() { var b = a(this),
                e = b.data("target") || b.attr("href"),
                f = /^#./.test(e) && a(e); return f && f.length && f.is(":visible") && [
                [f[c]().top + d, e]
            ] || null }).sort(function(a, b) { return a[0] - b[0] }).each(function() { b.offsets.push(this[0]), b.targets.push(this[1]) }) }, b.prototype.process = function() { var a, b = this.$scrollElement.scrollTop() + this.options.offset,
            c = this.getScrollHeight(),
            d = this.options.offset + c - this.$scrollElement.height(),
            e = this.offsets,
            f = this.targets,
            g = this.activeTarget; if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a); if (g && b < e[0]) return this.activeTarget = null, this.clear(); for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a]) }, b.prototype.activate = function(b) { this.activeTarget = b, this.clear(); var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
            d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy") }, b.prototype.clear = function() { a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active") }; var d = a.fn.scrollspy;
    a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() { return a.fn.scrollspy = d, this }, a(window).on("load.bs.scrollspy.data-api", function() { a('[data-spy="scroll"]').each(function() { var b = a(this);
            c.call(b, b.data()) }) }) }(jQuery), + function(a) { "use strict";

    function b(b) { return this.each(function() { var d = a(this),
                e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]() }) } var c = function(b) { this.element = a(b) };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.prototype.show = function() { var b = this.element,
            c = b.closest("ul:not(.dropdown-menu)"),
            d = b.data("target"); if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) { var e = c.find(".active:last a"),
                f = a.Event("hide.bs.tab", { relatedTarget: b[0] }),
                g = a.Event("show.bs.tab", { relatedTarget: e[0] }); if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) { var h = a(d);
                this.activate(b.closest("li"), c), this.activate(h, h.parent(), function() { e.trigger({ type: "hidden.bs.tab", relatedTarget: b[0] }), b.trigger({ type: "shown.bs.tab", relatedTarget: e[0] }) }) } } }, c.prototype.activate = function(b, d, e) {
        function f() { g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e() } var g = d.find("> .active"),
            h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
        g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in") }; var d = a.fn.tab;
    a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() { return a.fn.tab = d, this }; var e = function(c) { c.preventDefault(), b.call(a(this), "show") };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e) }(jQuery), + function(a) { "use strict";

    function b(b) { return this.each(function() { var d = a(this),
                e = d.data("bs.affix"),
                f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]() }) } var c = function(b, d) { this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition() };
    c.VERSION = "3.3.7", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = { offset: 0, target: window }, c.prototype.getState = function(a, b, c, d) { var e = this.$target.scrollTop(),
            f = this.$element.offset(),
            g = this.$target.height(); if (null != c && "top" == this.affixed) return c > e ? "top" : !1; if ("bottom" == this.affixed) return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom"; var h = null == this.affixed,
            i = h ? e : f.top,
            j = h ? g : b; return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1 }, c.prototype.getPinnedOffset = function() { if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix"); var a = this.$target.scrollTop(),
            b = this.$element.offset(); return this.pinnedOffset = b.top - a }, c.prototype.checkPositionWithEventLoop = function() { setTimeout(a.proxy(this.checkPosition, this), 1) }, c.prototype.checkPosition = function() { if (this.$element.is(":visible")) { var b = this.$element.height(),
                d = this.options.offset,
                e = d.top,
                f = d.bottom,
                g = Math.max(a(document).height(), a(document.body).height()); "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element)); var h = this.getState(g, b, e, f); if (this.affixed != h) { null != this.unpin && this.$element.css("top", ""); var i = "affix" + (h ? "-" + h : ""),
                    j = a.Event(i + ".bs.affix"); if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix") } "bottom" == h && this.$element.offset({ top: g - b - f }) } }; var d = a.fn.affix;
    a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() { return a.fn.affix = d, this }, a(window).on("load", function() { a('[data-spy="affix"]').each(function() { var c = a(this),
                d = c.data();
            d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d) }) }) }(jQuery),
function() {
    function a(a, b, c) { for (var d = (c || 0) - 1, e = a ? a.length : 0; ++d < e;)
            if (a[d] === b) return d;
        return -1 }

    function b(b, c) { var d = typeof c; if (b = b.cache, "boolean" == d || null == c) return b[c] ? 0 : -1; "number" != d && "string" != d && (d = "object"); var e = "number" == d ? c : u + c; return b = (b = b[d]) && b[e], "object" == d ? b && a(b, c) > -1 ? 0 : -1 : b ? 0 : -1 }

    function c(a) { var b = this.cache,
            c = typeof a; if ("boolean" == c || null == a) b[a] = !0;
        else { "number" != c && "string" != c && (c = "object"); var d = "number" == c ? a : u + a,
                e = b[c] || (b[c] = {}); "object" == c ? (e[d] || (e[d] = [])).push(a) : e[d] = !0 } }

    function d(a) { return a.charCodeAt(0) }

    function e(a, b) { for (var c = a.criteria, d = b.criteria, e = -1, f = c.length; ++e < f;) { var g = c[e],
                h = d[e]; if (g !== h) { if (g > h || "undefined" == typeof g) return 1; if (h > g || "undefined" == typeof h) return -1 } } return a.index - b.index }

    function f(a) { var b = -1,
            d = a.length,
            e = a[0],
            f = a[d / 2 | 0],
            g = a[d - 1]; if (e && "object" == typeof e && f && "object" == typeof f && g && "object" == typeof g) return !1; var h = i();
        h["false"] = h["null"] = h["true"] = h.undefined = !1; var j = i(); for (j.array = a, j.cache = h, j.push = c; ++b < d;) j.push(a[b]); return j }

    function g(a) { return "\\" + _[a] }

    function h() { return q.pop() || [] }

    function i() { return r.pop() || { array: null, cache: null, criteria: null, "false": !1, index: 0, "null": !1, number: null, object: null, push: null, string: null, "true": !1, undefined: !1, value: null } }

    function j(a) { return "function" != typeof a.toString && "string" == typeof(a + "") }

    function l(a) { a.length = 0, q.length < w && q.push(a) }

    function m(a) { var b = a.cache;
        b && m(b), a.array = a.cache = a.criteria = a.object = a.number = a.string = a.value = null, r.length < w && r.push(a) }

    function n(a, b, c) { b || (b = 0), "undefined" == typeof c && (c = a ? a.length : 0); for (var d = -1, e = c - b || 0, f = Array(0 > e ? 0 : e); ++d < e;) f[d] = a[b + d]; return f }

    function o(c) {
        function q(a) { return a && "object" == typeof a && !kd(a) && Rc.call(a, "__wrapped__") ? a : new r(a) }

        function r(a, b) { this.__chain__ = !!b, this.__wrapped__ = a }

        function w(a) {
            function b() { if (d) { var a = n(d);
                    Sc.apply(a, arguments) } if (this instanceof b) { var f = ba(c.prototype),
                        g = c.apply(f, a || arguments); return La(g) ? g : f } return c.apply(e, a || arguments) } var c = a[0],
                d = a[2],
                e = a[4]; return jd(b, a), b }

        function _(a, b, c, d, e) { if (c) { var f = c(a); if ("undefined" != typeof f) return f } var g = La(a); if (!g) return a; var i = Kc.call(a); if (!W[i] || !hd.nodeClass && j(a)) return a; var k = fd[i]; switch (i) {
                case O:
                case P:
                    return new k(+a);
                case S:
                case V:
                    return new k(a);
                case U:
                    return f = k(a.source, C.exec(a)), f.lastIndex = a.lastIndex, f } var m = kd(a); if (b) { var o = !d;
                d || (d = h()), e || (e = h()); for (var p = d.length; p--;)
                    if (d[p] == a) return e[p];
                f = m ? k(a.length) : {} } else f = m ? n(a) : vd({}, a); return m && (Rc.call(a, "index") && (f.index = a.index), Rc.call(a, "input") && (f.input = a.input)), b ? (d.push(a), e.push(f), (m ? ud : yd)(a, function(a, g) { f[g] = _(a, b, c, d, e) }), o && (l(d), l(e)), f) : f }

        function ba(a, b) { return La(a) ? Yc(a) : {} }

        function ca(a, b, c) { if ("function" != typeof a) return ec; if ("undefined" == typeof b || !("prototype" in a)) return a; var d = a.__bindData__; if ("undefined" == typeof d && (hd.funcNames && (d = !a.name), d = d || !hd.funcDecomp, !d)) { var e = Pc.call(a);
                hd.funcNames || (d = !D.test(e)), d || (d = H.test(e), jd(a, d)) } if (d === !1 || d !== !0 && 1 & d[1]) return a; switch (c) {
                case 1:
                    return function(c) { return a.call(b, c) };
                case 2:
                    return function(c, d) { return a.call(b, c, d) };
                case 3:
                    return function(c, d, e) { return a.call(b, c, d, e) };
                case 4:
                    return function(c, d, e, f) { return a.call(b, c, d, e, f) } } return Pb(a, b) }

        function da(a) {
            function b() { var a = i ? g : this; if (e) { var o = n(e);
                    Sc.apply(o, arguments) } if ((f || k) && (o || (o = n(arguments)), f && Sc.apply(o, f), k && o.length < h)) return d |= 16, da([c, l ? d : -4 & d, o, null, g, h]); if (o || (o = arguments), j && (c = a[m]), this instanceof b) { a = ba(c.prototype); var p = c.apply(a, o); return La(p) ? p : a } return c.apply(a, o) } var c = a[0],
                d = a[1],
                e = a[2],
                f = a[3],
                g = a[4],
                h = a[5],
                i = 1 & d,
                j = 2 & d,
                k = 4 & d,
                l = 8 & d,
                m = c; return jd(b, a), b }

        function ea(c, d) { var e = -1,
                g = pa(),
                h = c ? c.length : 0,
                i = h >= v && g === a,
                j = []; if (i) { var k = f(d);
                k ? (g = b, d = k) : i = !1 } for (; ++e < h;) { var l = c[e];
                g(d, l) < 0 && j.push(l) } return i && m(d), j }

        function ga(a, b, c, d) { for (var e = (d || 0) - 1, f = a ? a.length : 0, g = []; ++e < f;) { var h = a[e]; if (h && "object" == typeof h && "number" == typeof h.length && (kd(h) || ta(h))) { b || (h = ga(h, b, c)); var i = -1,
                        j = h.length,
                        k = g.length; for (g.length += j; ++i < j;) g[k++] = h[i] } else c || g.push(h) } return g }

        function ha(a, b, c, d, e, f) { if (c) { var g = c(a, b); if ("undefined" != typeof g) return !!g } if (a === b) return 0 !== a || 1 / a == 1 / b; var i = typeof a,
                k = typeof b; if (!(a !== a || a && $[i] || b && $[k])) return !1; if (null == a || null == b) return a === b; var m = Kc.call(a),
                n = Kc.call(b); if (m == M && (m = T), n == M && (n = T), m != n) return !1; switch (m) {
                case O:
                case P:
                    return +a == +b;
                case S:
                    return a != +a ? b != +b : 0 == a ? 1 / a == 1 / b : a == +b;
                case U:
                case V:
                    return a == Dc(b) } var o = m == N; if (!o) { var p = Rc.call(a, "__wrapped__"),
                    q = Rc.call(b, "__wrapped__"); if (p || q) return ha(p ? a.__wrapped__ : a, q ? b.__wrapped__ : b, c, d, e, f); if (m != T || !hd.nodeClass && (j(a) || j(b))) return !1; var r = !hd.argsObject && ta(a) ? Bc : a.constructor,
                    s = !hd.argsObject && ta(b) ? Bc : b.constructor; if (r != s && !(Ka(r) && r instanceof r && Ka(s) && s instanceof s) && "constructor" in a && "constructor" in b) return !1 } var t = !e;
            e || (e = h()), f || (f = h()); for (var u = e.length; u--;)
                if (e[u] == a) return f[u] == b;
            var v = 0; if (g = !0, e.push(a), f.push(b), o) { if (u = a.length, v = b.length, g = v == u, g || d)
                    for (; v--;) { var w = u,
                            x = b[v]; if (d)
                            for (; w-- && !(g = ha(a[w], x, c, d, e, f)););
                        else if (!(g = ha(a[v], x, c, d, e, f))) break } } else xd(b, function(b, h, i) { return Rc.call(i, h) ? (v++, g = Rc.call(a, h) && ha(a[h], b, c, d, e, f)) : void 0 }), g && !d && xd(a, function(a, b, c) { return Rc.call(c, b) ? g = --v > -1 : void 0 }); return e.pop(), f.pop(), t && (l(e), l(f)), g }

        function ia(a, b, c, d, e) {
            (kd(b) ? db : yd)(b, function(b, f) { var g, h, i = b,
                    j = a[f]; if (b && ((h = kd(b)) || zd(b))) { for (var k = d.length; k--;)
                        if (g = d[k] == b) { j = e[k]; break }
                    if (!g) { var l;
                        c && (i = c(j, b), (l = "undefined" != typeof i) && (j = i)), l || (j = h ? kd(j) ? j : [] : zd(j) ? j : {}), d.push(b), e.push(j), l || ia(j, b, c, d, e) } } else c && (i = c(j, b), "undefined" == typeof i && (i = b)), "undefined" != typeof i && (j = i);
                a[f] = j }) }

        function ja(a, b) { return a + Oc(ed() * (b - a + 1)) }

        function ka(c, d, e) { var g = -1,
                i = pa(),
                j = c ? c.length : 0,
                k = [],
                n = !d && j >= v && i === a,
                o = e || n ? h() : k; if (n) { var p = f(o);
                i = b, o = p } for (; ++g < j;) { var q = c[g],
                    r = e ? e(q, g, c) : q;
                (d ? !g || o[o.length - 1] !== r : i(o, r) < 0) && ((e || n) && o.push(r), k.push(q)) } return n ? (l(o.array), m(o)) : e && l(o), k }

        function la(a) { return function(b, c, d) { var e = {}; if (c = q.createCallback(c, d, 3), kd(b))
                    for (var f = -1, g = b.length; ++f < g;) { var h = b[f];
                        a(e, h, c(h, f, b), b) } else ud(b, function(b, d, f) { a(e, b, c(b, d, f), f) }); return e } }

        function ma(a, b, c, d, e, f) { var g = 1 & b,
                h = 2 & b,
                i = 4 & b,
                j = 16 & b,
                k = 32 & b; if (!h && !Ka(a)) throw new Ec;
            j && !c.length && (b &= -17, j = c = !1), k && !d.length && (b &= -33, k = d = !1); var l = a && a.__bindData__; if (l && l !== !0) return l = n(l), l[2] && (l[2] = n(l[2])), l[3] && (l[3] = n(l[3])), !g || 1 & l[1] || (l[4] = e), !g && 1 & l[1] && (b |= 8), !i || 4 & l[1] || (l[5] = f), j && Sc.apply(l[2] || (l[2] = []), c), k && Wc.apply(l[3] || (l[3] = []), d), l[1] |= b, ma.apply(null, l); var m = 1 == b || 17 === b ? w : da; return m([a, b, c, d, e, f]) }

        function na() { Z.shadowedProps = K, Z.array = Z.bottom = Z.loop = Z.top = "", Z.init = "iterable", Z.useHas = !0; for (var a, b = 0; a = arguments[b]; b++)
                for (var c in a) Z[c] = a[c]; var d = Z.args;
            Z.firstArg = /^[^,]+/.exec(d)[0]; var e = yc("baseCreateCallback, errorClass, errorProto, hasOwnProperty, indicatorObject, isArguments, isArray, isString, keys, objectProto, objectTypes, nonEnumProps, stringClass, stringProto, toString", "return function(" + d + ") {\n" + id(Z) + "\n}"); return e(ca, Q, Gc, Rc, t, ta, kd, Qa, Z.keys, Hc, $, gd, V, Ic, Kc) }

        function oa(a) { return qd[a] }

        function pa() { var b = (b = q.indexOf) === yb ? a : b; return b }

        function qa(a) { return "function" == typeof a && Lc.test(a) }

        function ra(a) { var b, c; return !a || Kc.call(a) != T || (b = a.constructor, Ka(b) && !(b instanceof b)) || !hd.argsClass && ta(a) || !hd.nodeClass && j(a) ? !1 : hd.ownLast ? (xd(a, function(a, b, d) { return c = Rc.call(d, b), !1 }), c !== !1) : (xd(a, function(a, b) { c = b }), "undefined" == typeof c || Rc.call(a, c)) }

        function sa(a) { return rd[a] }

        function ta(a) { return a && "object" == typeof a && "number" == typeof a.length && Kc.call(a) == M || !1 }

        function ua(a, b, c, d) { return "boolean" != typeof b && null != b && (d = c, c = b, b = !1), _(a, b, "function" == typeof c && ca(c, d, 1)) }

        function va(a, b, c) { return _(a, !0, "function" == typeof b && ca(b, c, 1)) }

        function wa(a, b) { var c = ba(a); return b ? vd(c, b) : c }

        function xa(a, b, c) { var d; return b = q.createCallback(b, c, 3), yd(a, function(a, c, e) { return b(a, c, e) ? (d = c, !1) : void 0 }), d }

        function ya(a, b, c) { var d; return b = q.createCallback(b, c, 3), Aa(a, function(a, c, e) { return b(a, c, e) ? (d = c, !1) : void 0 }), d }

        function za(a, b, c) { var d = [];
            xd(a, function(a, b) { d.push(b, a) }); var e = d.length; for (b = ca(b, c, 3); e-- && b(d[e--], d[e], a) !== !1;); return a }

        function Aa(a, b, c) { var d = md(a),
                e = d.length; for (b = ca(b, c, 3); e--;) { var f = d[e]; if (b(a[f], f, a) === !1) break } return a }

        function Ba(a) { var b = []; return xd(a, function(a, c) { Ka(a) && b.push(c) }), b.sort() }

        function Ca(a, b) {
            return a ? Rc.call(a, b) : !1;
        }

        function Da(a) { for (var b = -1, c = md(a), d = c.length, e = {}; ++b < d;) { var f = c[b];
                e[a[f]] = f } return e }

        function Ea(a) { return a === !0 || a === !1 || a && "object" == typeof a && Kc.call(a) == O || !1 }

        function Fa(a) { return a && "object" == typeof a && Kc.call(a) == P || !1 }

        function Ga(a) { return a && 1 === a.nodeType || !1 }

        function Ha(a) { var b = !0; if (!a) return b; var c = Kc.call(a),
                d = a.length; return c == N || c == V || (hd.argsClass ? c == M : ta(a)) || c == T && "number" == typeof d && Ka(a.splice) ? !d : (yd(a, function() { return b = !1 }), b) }

        function Ia(a, b, c, d) { return ha(a, b, "function" == typeof c && ca(c, d, 2)) }

        function Ja(a) { return $c(a) && !_c(parseFloat(a)) }

        function Ka(a) { return "function" == typeof a }

        function La(a) { return !(!a || !$[typeof a]) }

        function Ma(a) { return Oa(a) && a != +a }

        function Na(a) { return null === a }

        function Oa(a) { return "number" == typeof a || a && "object" == typeof a && Kc.call(a) == S || !1 }

        function Pa(a) { return a && $[typeof a] && Kc.call(a) == U || !1 }

        function Qa(a) { return "string" == typeof a || a && "object" == typeof a && Kc.call(a) == V || !1 }

        function Ra(a) { return "undefined" == typeof a }

        function Sa(a, b, c) { var d = {}; return b = q.createCallback(b, c, 3), yd(a, function(a, c, e) { d[c] = b(a, c, e) }), d }

        function Ta(a) { var b = arguments,
                c = 2; if (!La(a)) return a; if ("number" != typeof b[2] && (c = b.length), c > 3 && "function" == typeof b[c - 2]) var d = ca(b[--c - 1], b[c--], 2);
            else c > 2 && "function" == typeof b[c - 1] && (d = b[--c]); for (var e = n(arguments, 1, c), f = -1, g = h(), i = h(); ++f < c;) ia(a, e[f], d, g, i); return l(g), l(i), a }

        function Ua(a, b, c) { var d = {}; if ("function" != typeof b) { var e = [];
                xd(a, function(a, b) { e.push(b) }), e = ea(e, ga(arguments, !0, !1, 1)); for (var f = -1, g = e.length; ++f < g;) { var h = e[f];
                    d[h] = a[h] } } else b = q.createCallback(b, c, 3), xd(a, function(a, c, e) { b(a, c, e) || (d[c] = a) }); return d }

        function Va(a) { for (var b = -1, c = md(a), d = c.length, e = uc(d); ++b < d;) { var f = c[b];
                e[b] = [f, a[f]] } return e }

        function Wa(a, b, c) { var d = {}; if ("function" != typeof b)
                for (var e = -1, f = ga(arguments, !0, !1, 1), g = La(a) ? f.length : 0; ++e < g;) { var h = f[e];
                    h in a && (d[h] = a[h]) } else b = q.createCallback(b, c, 3), xd(a, function(a, c, e) { b(a, c, e) && (d[c] = a) }); return d }

        function Xa(a, b, c, d) { var e = kd(a); if (null == c)
                if (e) c = [];
                else { var f = a && a.constructor,
                        g = f && f.prototype;
                    c = ba(g) }
            return b && (b = q.createCallback(b, d, 4), (e ? ud : yd)(a, function(a, d, e) { return b(c, a, d, e) })), c }

        function Ya(a) { for (var b = -1, c = md(a), d = c.length, e = uc(d); ++b < d;) e[b] = a[c[b]]; return e }

        function Za(a) { var b = arguments,
                c = -1,
                d = ga(b, !0, !1, 1),
                e = b[2] && b[2][b[1]] === a ? 1 : d.length,
                f = uc(e); for (hd.unindexedChars && Qa(a) && (a = a.split("")); ++c < e;) f[c] = a[d[c]]; return f }

        function $a(a, b, c) { var d = -1,
                e = pa(),
                f = a ? a.length : 0,
                g = !1; return c = (0 > c ? bd(0, f + c) : c) || 0, kd(a) ? g = e(a, b, c) > -1 : "number" == typeof f ? g = (Qa(a) ? a.indexOf(b, c) : e(a, b, c)) > -1 : ud(a, function(a) { return ++d >= c ? !(g = a === b) : void 0 }), g }

        function _a(a, b, c) { var d = !0; if (b = q.createCallback(b, c, 3), kd(a))
                for (var e = -1, f = a.length; ++e < f && (d = !!b(a[e], e, a)););
            else ud(a, function(a, c, e) { return d = !!b(a, c, e) }); return d }

        function ab(a, b, c) { var d = []; if (b = q.createCallback(b, c, 3), kd(a))
                for (var e = -1, f = a.length; ++e < f;) { var g = a[e];
                    b(g, e, a) && d.push(g) } else ud(a, function(a, c, e) { b(a, c, e) && d.push(a) }); return d }

        function bb(a, b, c) { if (b = q.createCallback(b, c, 3), !kd(a)) { var d; return ud(a, function(a, c, e) { return b(a, c, e) ? (d = a, !1) : void 0 }), d } for (var e = -1, f = a.length; ++e < f;) { var g = a[e]; if (b(g, e, a)) return g } }

        function cb(a, b, c) { var d; return b = q.createCallback(b, c, 3), eb(a, function(a, c, e) { return b(a, c, e) ? (d = a, !1) : void 0 }), d }

        function db(a, b, c) { if (b && "undefined" == typeof c && kd(a))
                for (var d = -1, e = a.length; ++d < e && b(a[d], d, a) !== !1;);
            else ud(a, b, c); return a }

        function eb(a, b, c) { var d = a,
                e = a ? a.length : 0; if (b = b && "undefined" == typeof c ? b : ca(b, c, 3), kd(a))
                for (; e-- && b(a[e], e, a) !== !1;);
            else { if ("number" != typeof e) { var f = md(a);
                    e = f.length } else hd.unindexedChars && Qa(a) && (d = a.split(""));
                ud(a, function(a, c, g) { return c = f ? f[--e] : --e, b(d[c], c, g) }) } return a }

        function fb(a, b) { var c = n(arguments, 2),
                d = -1,
                e = "function" == typeof b,
                f = a ? a.length : 0,
                g = uc("number" == typeof f ? f : 0); return db(a, function(a) { g[++d] = (e ? b : a[b]).apply(a, c) }), g }

        function gb(a, b, c) { var d = -1,
                e = a ? a.length : 0,
                f = uc("number" == typeof e ? e : 0); if (b = q.createCallback(b, c, 3), kd(a))
                for (; ++d < e;) f[d] = b(a[d], d, a);
            else ud(a, function(a, c, e) { f[++d] = b(a, c, e) }); return f }

        function hb(a, b, c) { var e = -(1 / 0),
                f = e; if ("function" != typeof b && c && c[b] === a && (b = null), null == b && kd(a))
                for (var g = -1, h = a.length; ++g < h;) { var i = a[g];
                    i > f && (f = i) } else b = null == b && Qa(a) ? d : q.createCallback(b, c, 3), ud(a, function(a, c, d) { var g = b(a, c, d);
                    g > e && (e = g, f = a) }); return f }

        function ib(a, b, c) { var e = 1 / 0,
                f = e; if ("function" != typeof b && c && c[b] === a && (b = null), null == b && kd(a))
                for (var g = -1, h = a.length; ++g < h;) { var i = a[g];
                    f > i && (f = i) } else b = null == b && Qa(a) ? d : q.createCallback(b, c, 3), ud(a, function(a, c, d) { var g = b(a, c, d);
                    e > g && (e = g, f = a) }); return f }

        function jb(a, b, c, d) { var e = arguments.length < 3; if (b = q.createCallback(b, d, 4), kd(a)) { var f = -1,
                    g = a.length; for (e && (c = a[++f]); ++f < g;) c = b(c, a[f], f, a) } else ud(a, function(a, d, f) { c = e ? (e = !1, a) : b(c, a, d, f) }); return c }

        function kb(a, b, c, d) { var e = arguments.length < 3; return b = q.createCallback(b, d, 4), eb(a, function(a, d, f) { c = e ? (e = !1, a) : b(c, a, d, f) }), c }

        function lb(a, b, c) { return b = q.createCallback(b, c, 3), ab(a, function(a, c, d) { return !b(a, c, d) }) }

        function mb(a, b, c) { if (a && "number" != typeof a.length ? a = Ya(a) : hd.unindexedChars && Qa(a) && (a = a.split("")), null == b || c) return a ? a[ja(0, a.length - 1)] : p; var d = nb(a); return d.length = cd(bd(0, b), d.length), d }

        function nb(a) { var b = -1,
                c = a ? a.length : 0,
                d = uc("number" == typeof c ? c : 0); return db(a, function(a) { var c = ja(0, ++b);
                d[b] = d[c], d[c] = a }), d }

        function ob(a) { var b = a ? a.length : 0; return "number" == typeof b ? b : md(a).length }

        function pb(a, b, c) { var d; if (b = q.createCallback(b, c, 3), kd(a))
                for (var e = -1, f = a.length; ++e < f && !(d = b(a[e], e, a)););
            else ud(a, function(a, c, e) { return !(d = b(a, c, e)) }); return !!d }

        function qb(a, b, c) { var d = -1,
                f = kd(b),
                g = a ? a.length : 0,
                j = uc("number" == typeof g ? g : 0); for (f || (b = q.createCallback(b, c, 3)), db(a, function(a, c, e) { var g = j[++d] = i();
                    f ? g.criteria = gb(b, function(b) { return a[b] }) : (g.criteria = h())[0] = b(a, c, e), g.index = d, g.value = a }), g = j.length, j.sort(e); g--;) { var k = j[g];
                j[g] = k.value, f || l(k.criteria), m(k) } return j }

        function rb(a) { return a && "number" == typeof a.length ? hd.unindexedChars && Qa(a) ? a.split("") : n(a) : Ya(a) }

        function sb(a) { for (var b = -1, c = a ? a.length : 0, d = []; ++b < c;) { var e = a[b];
                e && d.push(e) } return d }

        function tb(a) { return ea(a, ga(arguments, !0, !0, 1)) }

        function ub(a, b, c) { var d = -1,
                e = a ? a.length : 0; for (b = q.createCallback(b, c, 3); ++d < e;)
                if (b(a[d], d, a)) return d;
            return -1 }

        function vb(a, b, c) { var d = a ? a.length : 0; for (b = q.createCallback(b, c, 3); d--;)
                if (b(a[d], d, a)) return d;
            return -1 }

        function wb(a, b, c) { var d = 0,
                e = a ? a.length : 0; if ("number" != typeof b && null != b) { var f = -1; for (b = q.createCallback(b, c, 3); ++f < e && b(a[f], f, a);) d++ } else if (d = b, null == d || c) return a ? a[0] : p; return n(a, 0, cd(bd(0, d), e)) }

        function xb(a, b, c, d) { return "boolean" != typeof b && null != b && (d = c, c = "function" != typeof b && d && d[b] === a ? null : b, b = !1), null != c && (a = gb(a, c, d)), ga(a, b) }

        function yb(b, c, d) { if ("number" == typeof d) { var e = b ? b.length : 0;
                d = 0 > d ? bd(0, e + d) : d || 0 } else if (d) { var f = Hb(b, c); return b[f] === c ? f : -1 } return a(b, c, d) }

        function zb(a, b, c) { var d = 0,
                e = a ? a.length : 0; if ("number" != typeof b && null != b) { var f = e; for (b = q.createCallback(b, c, 3); f-- && b(a[f], f, a);) d++ } else d = null == b || c ? 1 : b || d; return n(a, 0, cd(bd(0, e - d), e)) }

        function Ab() { for (var c = [], d = -1, e = arguments.length, g = h(), i = pa(), j = i === a, k = h(); ++d < e;) { var n = arguments[d];
                (kd(n) || ta(n)) && (c.push(n), g.push(j && n.length >= v && f(d ? c[d] : k))) } var o = c[0],
                p = -1,
                q = o ? o.length : 0,
                r = [];
            a: for (; ++p < q;) { var s = g[0]; if (n = o[p], (s ? b(s, n) : i(k, n)) < 0) { for (d = e, (s || k).push(n); --d;)
                        if (s = g[d], (s ? b(s, n) : i(c[d], n)) < 0) continue a;
                    r.push(n) } }
            for (; e--;) s = g[e], s && m(s); return l(g), l(k), r }

        function Bb(a, b, c) { var d = 0,
                e = a ? a.length : 0; if ("number" != typeof b && null != b) { var f = e; for (b = q.createCallback(b, c, 3); f-- && b(a[f], f, a);) d++ } else if (d = b, null == d || c) return a ? a[e - 1] : p; return n(a, bd(0, e - d)) }

        function Cb(a, b, c) { var d = a ? a.length : 0; for ("number" == typeof c && (d = (0 > c ? bd(0, d + c) : cd(c, d - 1)) + 1); d--;)
                if (a[d] === b) return d;
            return -1 }

        function Db(a) { for (var b = arguments, c = 0, d = b.length, e = a ? a.length : 0; ++c < d;)
                for (var f = -1, g = b[c]; ++f < e;) a[f] === g && (Vc.call(a, f--, 1), e--); return a }

        function Eb(a, b, c) { a = +a || 0, c = "number" == typeof c ? c : +c || 1, null == b && (b = a, a = 0); for (var d = -1, e = bd(0, Mc((b - a) / (c || 1))), f = uc(e); ++d < e;) f[d] = a, a += c; return f }

        function Fb(a, b, c) { var d = -1,
                e = a ? a.length : 0,
                f = []; for (b = q.createCallback(b, c, 3); ++d < e;) { var g = a[d];
                b(g, d, a) && (f.push(g), Vc.call(a, d--, 1), e--) } return f }

        function Gb(a, b, c) { if ("number" != typeof b && null != b) { var d = 0,
                    e = -1,
                    f = a ? a.length : 0; for (b = q.createCallback(b, c, 3); ++e < f && b(a[e], e, a);) d++ } else d = null == b || c ? 1 : bd(0, b); return n(a, d) }

        function Hb(a, b, c, d) { var e = 0,
                f = a ? a.length : e; for (c = c ? q.createCallback(c, d, 1) : ec, b = c(b); f > e;) { var g = e + f >>> 1;
                c(a[g]) < b ? e = g + 1 : f = g } return e }

        function Ib() { return ka(ga(arguments, !0, !0)) }

        function Jb(a, b, c, d) { return "boolean" != typeof b && null != b && (d = c, c = "function" != typeof b && d && d[b] === a ? null : b, b = !1), null != c && (c = q.createCallback(c, d, 3)), ka(a, b, c) }

        function Kb(a) { return ea(a, n(arguments, 1)) }

        function Lb() { for (var a = -1, b = arguments.length; ++a < b;) { var c = arguments[a]; if (kd(c) || ta(c)) var d = d ? ka(ea(d, c).concat(ea(c, d))) : c } return d || [] }

        function Mb() { for (var a = arguments.length > 1 ? arguments : arguments[0], b = -1, c = a ? hb(Dd(a, "length")) : 0, d = uc(0 > c ? 0 : c); ++b < c;) d[b] = Dd(a, b); return d }

        function Nb(a, b) { var c = -1,
                d = a ? a.length : 0,
                e = {}; for (b || !d || kd(a[0]) || (b = []); ++c < d;) { var f = a[c];
                b ? e[f] = b[c] : f && (e[f[0]] = f[1]) } return e }

        function Ob(a, b) { if (!Ka(b)) throw new Ec; return function() { return --a < 1 ? b.apply(this, arguments) : void 0 } }

        function Pb(a, b) { return arguments.length > 2 ? ma(a, 17, n(arguments, 2), null, b) : ma(a, 1, null, null, b) }

        function Qb(a) { for (var b = arguments.length > 1 ? ga(arguments, !0, !1, 1) : Ba(a), c = -1, d = b.length; ++c < d;) { var e = b[c];
                a[e] = ma(a[e], 1, null, null, a) } return a }

        function Rb(a, b) { return arguments.length > 2 ? ma(b, 19, n(arguments, 2), null, a) : ma(b, 3, null, null, a) }

        function Sb() { for (var a = arguments, b = a.length; b--;)
                if (!Ka(a[b])) throw new Ec;
            return function() { for (var b = arguments, c = a.length; c--;) b = [a[c].apply(this, b)]; return b[0] } }

        function Tb(a, b) { return b = "number" == typeof b ? b : +b || a.length, ma(a, 4, null, null, null, b) }

        function Ub(a, b, c) { var d, e, f, g, h, i, j, k = 0,
                l = !1,
                m = !0; if (!Ka(a)) throw new Ec; if (b = bd(0, b) || 0, c === !0) { var n = !0;
                m = !1 } else La(c) && (n = c.leading, l = "maxWait" in c && (bd(b, c.maxWait) || 0), m = "trailing" in c ? c.trailing : m); var o = function() { var c = b - (Fd() - g); if (0 >= c) { e && Nc(e); var l = j;
                        e = i = j = p, l && (k = Fd(), f = a.apply(h, d), i || e || (d = h = null)) } else i = Uc(o, c) },
                q = function() { i && Nc(i), e = i = j = p, (m || l !== b) && (k = Fd(), f = a.apply(h, d), i || e || (d = h = null)) }; return function() { if (d = arguments, g = Fd(), h = this, j = m && (i || !n), l === !1) var c = n && !i;
                else { e || n || (k = g); var p = l - (g - k),
                        r = 0 >= p;
                    r ? (e && (e = Nc(e)), k = g, f = a.apply(h, d)) : e || (e = Uc(q, p)) } return r && i ? i = Nc(i) : i || b === l || (i = Uc(o, b)), c && (r = !0, f = a.apply(h, d)), !r || i || e || (d = h = null), f } }

        function Vb(a) { if (!Ka(a)) throw new Ec; var b = n(arguments, 1); return Uc(function() { a.apply(p, b) }, 1) }

        function Wb(a, b) { if (!Ka(a)) throw new Ec; var c = n(arguments, 2); return Uc(function() { a.apply(p, c) }, b) }

        function Xb(a, b) { if (!Ka(a)) throw new Ec; var c = function() { var d = c.cache,
                    e = b ? b.apply(this, arguments) : u + arguments[0]; return Rc.call(d, e) ? d[e] : d[e] = a.apply(this, arguments) }; return c.cache = {}, c }

        function Yb(a) { var b, c; if (!Ka(a)) throw new Ec; return function() { return b ? c : (b = !0, c = a.apply(this, arguments), a = null, c) } }

        function Zb(a) { return ma(a, 16, n(arguments, 1)) }

        function $b(a) { return ma(a, 32, null, n(arguments, 1)) }

        function _b(a, b, c) { var d = !0,
                e = !0; if (!Ka(a)) throw new Ec; return c === !1 ? d = !1 : La(c) && (d = "leading" in c ? c.leading : d, e = "trailing" in c ? c.trailing : e), X.leading = d, X.maxWait = b, X.trailing = e, Ub(a, b, X) }

        function ac(a, b) { return ma(b, 16, [a]) }

        function bc(a) { return function() { return a } }

        function cc(a, b, c) { var d = typeof a; if (null == a || "function" == d) return ca(a, b, c); if ("object" != d) return ic(a); var e = md(a),
                f = e[0],
                g = a[f]; return 1 != e.length || g !== g || La(g) ? function(b) { for (var c = e.length, d = !1; c-- && (d = ha(b[e[c]], a[e[c]], null, !0));); return d } : function(a) { var b = a[f]; return g === b && (0 !== g || 1 / g == 1 / b) } }

        function dc(a) { return null == a ? "" : Dc(a).replace(td, oa) }

        function ec(a) { return a }

        function fc(a, b, c) { var d = !0,
                e = b && Ba(b);
            b && (c || e.length) || (null == c && (c = b), f = r, b = a, a = q, e = Ba(b)), c === !1 ? d = !1 : La(c) && "chain" in c && (d = c.chain); var f = a,
                g = Ka(f);
            db(e, function(c) { var e = a[c] = b[c];
                g && (f.prototype[c] = function() { var b = this.__chain__,
                        c = this.__wrapped__,
                        g = [c];
                    Sc.apply(g, arguments); var h = e.apply(a, g); if (d || b) { if (c === h && La(h)) return this;
                        h = new f(h), h.__chain__ = b } return h }) }) }

        function gc() { return c._ = Jc, this }

        function hc() {}

        function ic(a) { return function(b) { return b[a] } }

        function jc(a, b, c) { var d = null == a,
                e = null == b; if (null == c && ("boolean" == typeof a && e ? (c = a, a = 1) : e || "boolean" != typeof b || (c = b, e = !0)), d && e && (b = 1), a = +a || 0, e ? (b = a, a = 0) : b = +b || 0, c || a % 1 || b % 1) { var f = ed(); return cd(a + f * (b - a + parseFloat("1e-" + ((f + "").length - 1))), b) } return ja(a, b) }

        function kc(a, b) { if (a) { var c = a[b]; return Ka(c) ? a[b]() : c } }

        function lc(a, b, c) { var d = q.templateSettings;
            a = Dc(a || ""), c = wd({}, c, d); var e, f = wd({}, c.imports, d.imports),
                h = md(f),
                i = Ya(f),
                j = 0,
                k = c.interpolate || G,
                l = "__p += '",
                m = Cc((c.escape || G).source + "|" + k.source + "|" + (k === E ? B : G).source + "|" + (c.evaluate || G).source + "|$", "g");
            a.replace(m, function(b, c, d, f, h, i) { return d || (d = f), l += a.slice(j, i).replace(I, g), c && (l += "' +\n__e(" + c + ") +\n'"), h && (e = !0, l += "';\n" + h + ";\n__p += '"), d && (l += "' +\n((__t = (" + d + ")) == null ? '' : __t) +\n'"), j = i + b.length, b }), l += "';\n"; var n = c.variable,
                o = n;
            o || (n = "obj", l = "with (" + n + ") {\n" + l + "\n}\n"), l = (e ? l.replace(y, "") : l).replace(z, "$1").replace(A, "$1;"), l = "function(" + n + ") {\n" + (o ? "" : n + " || (" + n + " = {});\n") + "var __t, __p = '', __e = _.escape" + (e ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + l + "return __p\n}"; var r = "\n/*\n//# sourceURL=" + (c.sourceURL || "/lodash/template/source[" + L++ + "]") + "\n*/"; try { var s = yc(h, "return " + l + r).apply(p, i) } catch (t) { throw t.source = l, t } return b ? s(b) : (s.source = l, s) }

        function mc(a, b, c) { a = (a = +a) > -1 ? a : 0; var d = -1,
                e = uc(a); for (b = ca(b, c, 1); ++d < a;) e[d] = b(d); return e }

        function nc(a) { return null == a ? "" : Dc(a).replace(sd, sa) }

        function oc(a) { var b = ++s; return Dc(null == a ? "" : a) + b }

        function pc(a) { return a = new r(a), a.__chain__ = !0, a }

        function qc(a, b) { return b(a), a }

        function rc() { return this.__chain__ = !0, this }

        function sc() { return Dc(this.__wrapped__) }

        function tc() { return this.__wrapped__ }
        c = c ? fa.defaults(aa.Object(), c, fa.pick(aa, J)) : aa;
        var uc = c.Array,
            vc = c.Boolean,
            wc = c.Date,
            xc = c.Error,
            yc = c.Function,
            zc = c.Math,
            Ac = c.Number,
            Bc = c.Object,
            Cc = c.RegExp,
            Dc = c.String,
            Ec = c.TypeError,
            Fc = [],
            Gc = xc.prototype,
            Hc = Bc.prototype,
            Ic = Dc.prototype,
            Jc = c._,
            Kc = Hc.toString,
            Lc = Cc("^" + Dc(Kc).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$"),
            Mc = zc.ceil,
            Nc = c.clearTimeout,
            Oc = zc.floor,
            Pc = yc.prototype.toString,
            Qc = qa(Qc = Bc.getPrototypeOf) && Qc,
            Rc = Hc.hasOwnProperty,
            Sc = Fc.push,
            Tc = Hc.propertyIsEnumerable,
            Uc = c.setTimeout,
            Vc = Fc.splice,
            Wc = Fc.unshift,
            Xc = function() { try { var a = {},
                        b = qa(b = Bc.defineProperty) && b,
                        c = b(a, a, a) && b } catch (d) {} return c }(),
            Yc = qa(Yc = Bc.create) && Yc,
            Zc = qa(Zc = uc.isArray) && Zc,
            $c = c.isFinite,
            _c = c.isNaN,
            ad = qa(ad = Bc.keys) && ad,
            bd = zc.max,
            cd = zc.min,
            dd = c.parseInt,
            ed = zc.random,
            fd = {};
        fd[N] = uc, fd[O] = vc, fd[P] = wc, fd[R] = yc, fd[T] = Bc, fd[S] = Ac, fd[U] = Cc, fd[V] = Dc;
        var gd = {};
        gd[N] = gd[P] = gd[S] = { constructor: !0, toLocaleString: !0, toString: !0, valueOf: !0 }, gd[O] = gd[V] = { constructor: !0, toString: !0, valueOf: !0 }, gd[Q] = gd[R] = gd[U] = { constructor: !0, toString: !0 }, gd[T] = { constructor: !0 },
            function() { for (var a = K.length; a--;) { var b = K[a]; for (var c in gd) Rc.call(gd, c) && !Rc.call(gd[c], b) && (gd[c][b] = !1) } }(), r.prototype = q.prototype;
        var hd = q.support = {};
        ! function() { var a = function() { this.x = 1 },
                b = { 0: 1, length: 1 },
                d = [];
            a.prototype = { valueOf: 1, y: 1 }; for (var e in new a) d.push(e); for (e in arguments);
            hd.argsClass = Kc.call(arguments) == M, hd.argsObject = arguments.constructor == Bc && !(arguments instanceof uc), hd.enumErrorProps = Tc.call(Gc, "message") || Tc.call(Gc, "name"), hd.enumPrototypes = Tc.call(a, "prototype"), hd.funcDecomp = !qa(c.WinRTError) && H.test(o), hd.funcNames = "string" == typeof yc.name, hd.nonEnumArgs = 0 != e, hd.nonEnumShadows = !/valueOf/.test(d), hd.ownLast = "x" != d[0], hd.spliceObjects = (Fc.splice.call(b, 0, 1), !b[0]), hd.unindexedChars = "x" [0] + Bc("x")[0] != "xx"; try { hd.nodeClass = !(Kc.call(document) == T && !({ toString: 0 } + "")) } catch (f) { hd.nodeClass = !0 } }(1), q.templateSettings = { escape: /<%-([\s\S]+?)%>/g, evaluate: /<%([\s\S]+?)%>/g, interpolate: E, variable: "", imports: { _: q } };
        var id = function(a) { var b = "var index, iterable = " + a.firstArg + ", result = " + a.init + ";\nif (!iterable) return result;\n" + a.top + ";";
            a.array ? (b += "\nvar length = iterable.length; index = -1;\nif (" + a.array + ") {  ", hd.unindexedChars && (b += "\n  if (isString(iterable)) {\n    iterable = iterable.split('')\n  }  "), b += "\n  while (++index < length) {\n    " + a.loop + ";\n  }\n}\nelse {  ") : hd.nonEnumArgs && (b += "\n  var length = iterable.length; index = -1;\n  if (length && isArguments(iterable)) {\n    while (++index < length) {\n      index += '';\n      " + a.loop + ";\n    }\n  } else {  "), hd.enumPrototypes && (b += "\n  var skipProto = typeof iterable == 'function';\n  "), hd.enumErrorProps && (b += "\n  var skipErrorProps = iterable === errorProto || iterable instanceof Error;\n  "); var c = []; if (hd.enumPrototypes && c.push('!(skipProto && index == "prototype")'), hd.enumErrorProps && c.push('!(skipErrorProps && (index == "message" || index == "name"))'), a.useHas && a.keys) b += "\n  var ownIndex = -1,\n      ownProps = objectTypes[typeof iterable] && keys(iterable),\n      length = ownProps ? ownProps.length : 0;\n\n  while (++ownIndex < length) {\n    index = ownProps[ownIndex];\n", c.length && (b += "    if (" + c.join(" && ") + ") {\n  "), b += a.loop + ";    ", c.length && (b += "\n    }"), b += "\n  }  ";
            else if (b += "\n  for (index in iterable) {\n", a.useHas && c.push("hasOwnProperty.call(iterable, index)"), c.length && (b += "    if (" + c.join(" && ") + ") {\n  "), b += a.loop + ";    ", c.length && (b += "\n    }"), b += "\n  }    ", hd.nonEnumShadows) { for (b += "\n\n  if (iterable !== objectProto) {\n    var ctor = iterable.constructor,\n        isProto = iterable === (ctor && ctor.prototype),\n        className = iterable === stringProto ? stringClass : iterable === errorProto ? errorClass : toString.call(iterable),\n        nonEnum = nonEnumProps[className];\n      ", k = 0; k < 7; k++) b += "\n    index = '" + a.shadowedProps[k] + "';\n    if ((!(isProto && nonEnum[index]) && hasOwnProperty.call(iterable, index))", a.useHas || (b += " || (!nonEnum[index] && iterable[index] !== objectProto[index])"), b += ") {\n      " + a.loop + ";\n    }      ";
                b += "\n  }    " } return (a.array || hd.nonEnumArgs) && (b += "\n}"), b += a.bottom + ";\nreturn result" };
        Yc || (ba = function() {
            function a() {} return function(b) { if (La(b)) { a.prototype = b; var d = new a;
                    a.prototype = null } return d || c.Object() } }());
        var jd = Xc ? function(a, b) { Y.value = b, Xc(a, "__bindData__", Y), Y.value = null } : hc;
        hd.argsClass || (ta = function(a) { return a && "object" == typeof a && "number" == typeof a.length && Rc.call(a, "callee") && !Tc.call(a, "callee") || !1 });
        var kd = Zc || function(a) { return a && "object" == typeof a && "number" == typeof a.length && Kc.call(a) == N || !1 },
            ld = na({ args: "object", init: "[]", top: "if (!(objectTypes[typeof object])) return result", loop: "result.push(index)" }),
            md = ad ? function(a) { return La(a) ? hd.enumPrototypes && "function" == typeof a || hd.nonEnumArgs && a.length && ta(a) ? ld(a) : ad(a) : [] } : ld,
            nd = { args: "collection, callback, thisArg", top: "callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3)", array: "typeof length == 'number'", keys: md, loop: "if (callback(iterable[index], index, collection) === false) return result" },
            od = { args: "object, source, guard", top: "var args = arguments,\n    argsIndex = 0,\n    argsLength = typeof guard == 'number' ? 2 : args.length;\nwhile (++argsIndex < argsLength) {\n  iterable = args[argsIndex];\n  if (iterable && objectTypes[typeof iterable]) {", keys: md, loop: "if (typeof result[index] == 'undefined') result[index] = iterable[index]", bottom: "  }\n}" },
            pd = { top: "if (!objectTypes[typeof iterable]) return result;\n" + nd.top, array: !1 },
            qd = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" },
            rd = Da(qd),
            sd = Cc("(" + md(rd).join("|") + ")", "g"),
            td = Cc("[" + md(qd).join("") + "]", "g"),
            ud = na(nd),
            vd = na(od, { top: od.top.replace(";", ";\nif (argsLength > 3 && typeof args[argsLength - 2] == 'function') {\n  var callback = baseCreateCallback(args[--argsLength - 1], args[argsLength--], 2);\n} else if (argsLength > 2 && typeof args[argsLength - 1] == 'function') {\n  callback = args[--argsLength];\n}"), loop: "result[index] = callback ? callback(result[index], iterable[index]) : iterable[index]" }),
            wd = na(od),
            xd = na(nd, pd, { useHas: !1 }),
            yd = na(nd, pd);
        Ka(/x/) && (Ka = function(a) { return "function" == typeof a && Kc.call(a) == R });
        var zd = Qc ? function(a) { if (!a || Kc.call(a) != T || !hd.argsClass && ta(a)) return !1; var b = a.valueOf,
                    c = qa(b) && (c = Qc(b)) && Qc(c); return c ? a == c || Qc(a) == c : ra(a) } : ra,
            Ad = la(function(a, b, c) { Rc.call(a, c) ? a[c]++ : a[c] = 1 }),
            Bd = la(function(a, b, c) {
                (Rc.call(a, c) ? a[c] : a[c] = []).push(b) }),
            Cd = la(function(a, b, c) { a[c] = b }),
            Dd = gb,
            Ed = ab,
            Fd = qa(Fd = wc.now) && Fd || function() { return (new wc).getTime() },
            Gd = 8 == dd(x + "08") ? dd : function(a, b) { return dd(Qa(a) ? a.replace(F, "") : a, b || 0) };
        return q.after = Ob, q.assign = vd, q.at = Za, q.bind = Pb, q.bindAll = Qb, q.bindKey = Rb, q.chain = pc, q.compact = sb, q.compose = Sb, q.constant = bc, q.countBy = Ad, q.create = wa, q.createCallback = cc, q.curry = Tb, q.debounce = Ub, q.defaults = wd, q.defer = Vb, q.delay = Wb, q.difference = tb, q.filter = ab, q.flatten = xb, q.forEach = db, q.forEachRight = eb, q.forIn = xd, q.forInRight = za, q.forOwn = yd, q.forOwnRight = Aa, q.functions = Ba, q.groupBy = Bd, q.indexBy = Cd, q.initial = zb, q.intersection = Ab, q.invert = Da, q.invoke = fb, q.keys = md, q.map = gb, q.mapValues = Sa, q.max = hb, q.memoize = Xb, q.merge = Ta, q.min = ib, q.omit = Ua, q.once = Yb, q.pairs = Va, q.partial = Zb, q.partialRight = $b, q.pick = Wa, q.pluck = Dd, q.property = ic, q.pull = Db, q.range = Eb, q.reject = lb, q.remove = Fb, q.rest = Gb, q.shuffle = nb, q.sortBy = qb, q.tap = qc, q.throttle = _b, q.times = mc, q.toArray = rb, q.transform = Xa, q.union = Ib, q.uniq = Jb, q.values = Ya, q.where = Ed, q.without = Kb, q.wrap = ac, q.xor = Lb, q.zip = Mb, q.zipObject = Nb, q.collect = gb, q.drop = Gb, q.each = db, q.eachRight = eb, q.extend = vd, q.methods = Ba, q.object = Nb, q.select = ab, q.tail = Gb, q.unique = Jb, q.unzip = Mb, fc(q), q.clone = ua, q.cloneDeep = va, q.contains = $a, q.escape = dc, q.every = _a, q.find = bb, q.findIndex = ub, q.findKey = xa, q.findLast = cb, q.findLastIndex = vb, q.findLastKey = ya, q.has = Ca, q.identity = ec, q.indexOf = yb, q.isArguments = ta, q.isArray = kd, q.isBoolean = Ea, q.isDate = Fa, q.isElement = Ga, q.isEmpty = Ha, q.isEqual = Ia, q.isFinite = Ja, q.isFunction = Ka, q.isNaN = Ma, q.isNull = Na, q.isNumber = Oa, q.isObject = La, q.isPlainObject = zd, q.isRegExp = Pa, q.isString = Qa, q.isUndefined = Ra, q.lastIndexOf = Cb, q.mixin = fc, q.noConflict = gc, q.noop = hc, q.now = Fd, q.parseInt = Gd, q.random = jc, q.reduce = jb, q.reduceRight = kb, q.result = kc, q.runInContext = o, q.size = ob, q.some = pb, q.sortedIndex = Hb, q.template = lc, q.unescape = nc, q.uniqueId = oc, q.all = _a, q.any = pb, q.detect = bb, q.findWhere = bb, q.foldl = jb, q.foldr = kb, q.include = $a, q.inject = jb, fc(function() { var a = {}; return yd(q, function(b, c) { q.prototype[c] || (a[c] = b) }), a }(), !1), q.first = wb, q.last = Bb, q.sample = mb, q.take = wb, q.head = wb, yd(q, function(a, b) { var c = "sample" !== b;
            q.prototype[b] || (q.prototype[b] = function(b, d) { var e = this.__chain__,
                    f = a(this.__wrapped__, b, d); return e || null != b && (!d || c && "function" == typeof b) ? new r(f, e) : f }) }), q.VERSION = "2.4.2", q.prototype.chain = rc, q.prototype.toString = sc, q.prototype.value = tc, q.prototype.valueOf = tc, ud(["join", "pop", "shift"], function(a) { var b = Fc[a];
            q.prototype[a] = function() { var a = this.__chain__,
                    c = b.apply(this.__wrapped__, arguments); return a ? new r(c, a) : c } }), ud(["push", "reverse", "sort", "unshift"], function(a) { var b = Fc[a];
            q.prototype[a] = function() { return b.apply(this.__wrapped__, arguments), this } }), ud(["concat", "slice", "splice"], function(a) { var b = Fc[a];
            q.prototype[a] = function() { return new r(b.apply(this.__wrapped__, arguments), this.__chain__) } }), hd.spliceObjects || ud(["pop", "shift", "splice"], function(a) { var b = Fc[a],
                c = "splice" == a;
            q.prototype[a] = function() { var a = this.__chain__,
                    d = this.__wrapped__,
                    e = b.apply(d, arguments); return 0 === d.length && delete d[0], a || c ? new r(e, a) : e } }), q
    }
    var p, q = [],
        r = [],
        s = 0,
        t = {},
        u = +new Date + "",
        v = 75,
        w = 40,
        x = " 	\f \ufeff\n\r\u2028\u2029 ᠎             　",
        y = /\b__p \+= '';/g,
        z = /\b(__p \+=) '' \+/g,
        A = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
        B = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
        C = /\w*$/,
        D = /^\s*function[ \n\r\t]+\w/,
        E = /<%=([\s\S]+?)%>/g,
        F = RegExp("^[" + x + "]*0+(?=.$)"),
        G = /($^)/,
        H = /\bthis\b/,
        I = /['\n\r\t\u2028\u2029\\]/g,
        J = ["Array", "Boolean", "Date", "Error", "Function", "Math", "Number", "Object", "RegExp", "String", "_", "attachEvent", "clearTimeout", "isFinite", "isNaN", "parseInt", "setTimeout"],
        K = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        L = 0,
        M = "[object Arguments]",
        N = "[object Array]",
        O = "[object Boolean]",
        P = "[object Date]",
        Q = "[object Error]",
        R = "[object Function]",
        S = "[object Number]",
        T = "[object Object]",
        U = "[object RegExp]",
        V = "[object String]",
        W = {};
    W[R] = !1, W[M] = W[N] = W[O] = W[P] = W[S] = W[T] = W[U] = W[V] = !0;
    var X = { leading: !1, maxWait: 0, trailing: !1 },
        Y = { configurable: !1, enumerable: !1, value: null, writable: !1 },
        Z = { args: "", array: null, bottom: "", firstArg: "", init: "", keys: null, loop: "", shadowedProps: null, support: null, top: "", useHas: !1 },
        $ = { "boolean": !1, "function": !0, object: !0, number: !1, string: !1, undefined: !1 },
        _ = { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "	": "t", "\u2028": "u2028", "\u2029": "u2029" },
        aa = $[typeof window] && window || this,
        ba = $[typeof exports] && exports && !exports.nodeType && exports,
        ca = $[typeof module] && module && !module.nodeType && module,
        da = ca && ca.exports === ba && ba,
        ea = $[typeof global] && global;
    !ea || ea.global !== ea && ea.window !== ea || (aa = ea);
    var fa = o();
    "function" == typeof define && "object" == typeof define.amd && define.amd ? (aa._ = fa, define(function() { return fa })) : ba && ca ? da ? (ca.exports = fa)._ = fa : ba._ = fa : aa._ = fa
}.call(this), angular.module("btford.socket-io", []).provider("socketFactory", function() { "use strict"; var a = "socket:";
        this.$get = ["$rootScope", "$timeout", function(b, c) { var d = function(a, b) { return b ? function() { var d = arguments;
                    c(function() { b.apply(a, d) }, 0) } : angular.noop }; return function(c) { c = c || {}; var e = c.ioSocket || io.connect(),
                    f = void 0 === c.prefix ? a : c.prefix,
                    g = c.scope || b,
                    h = function(a, b) { e.on(a, b.__ng = d(e, b)) },
                    i = function(a, b) { e.once(a, b.__ng = d(e, b)) },
                    j = { on: h, addListener: h, once: i, emit: function(a, b, c) { var f = arguments.length - 1,
                                c = arguments[f]; return "function" == typeof c && (c = d(e, c), arguments[f] = c), e.emit.apply(e, arguments) }, removeListener: function(a, b) { return b && b.__ng && (arguments[1] = b.__ng), e.removeListener.apply(e, arguments) }, removeAllListeners: function() { return e.removeAllListeners.apply(e, arguments) }, disconnect: function(a) { return e.disconnect(a) }, forward: function(a, b) { a instanceof Array == !1 && (a = [a]), b || (b = g), a.forEach(function(a) { var c = f + a,
                                    g = d(e, function() { Array.prototype.unshift.call(arguments, c), b.$broadcast.apply(b, arguments) });
                                b.$on("$destroy", function() { e.removeListener(a, g) }), e.on(a, g) }) } }; return j } }] }),
    function() {
        function a(a, b) { window.XMLHttpRequest.prototype[a] = b(window.XMLHttpRequest.prototype[a]) }

        function b(a, b, c, d, g, h, j) {
            function k() { return "input" === b[0].tagName.toLowerCase() && b.attr("type") && "file" === b.attr("type").toLowerCase() }

            function l(b) { if (!q) { q = !0; try { var j = b.__files_ || b.target && b.target.files,
                            k = [],
                            l = [],
                            m = g(c.ngAccept); for (i = 0; i < j.length; i++) { var n = j.item(i);
                            f(a, m, n, b) ? k.push(n) : l.push(n) }
                        e(g, h, a, d, c, c.ngFileChange || c.ngFileDrop && c.ngFileDrop.indexOf("(") > 0, k, l, b), 0 == k.length && (b.target.value = k) } finally { q = !1 } } }

            function m(d) { c.ngMultiple && d.attr("multiple", g(c.ngMultiple)(a)), g(c.ngMultiple)(a) || d.attr("multiple", void 0), c.accept && d.attr("accept", c.accept), c.ngCapture && d.attr("capture", g(c.ngCapture)(a)), c.ngDisabled && d.attr("disabled", g(c.ngDisabled)(a)); for (var e = 0; e < b[0].attributes.length; e++) { var f = b[0].attributes[e]; "type" !== f.name && "class" !== f.name && "id" !== f.name && "style" !== f.name && d.attr(f.name, f.value) } }

            function n(a) { if (!b.attr("disabled")) { var c = angular.element('<input type="file">'); return m(c), k() ? (b.replaceWith(c), b = c) : (c.css("display", "none").attr("tabindex", "-1").attr("__ngf_gen__", !0), b.__ngf_ref_elem__ && b.__ngf_ref_elem__.remove(), b.__ngf_ref_elem__ = c, document.body.appendChild(c[0])), c } }

            function o(b) { e(g, h, a, d, c, c.ngFileChange || c.ngFileSelect, [], [], b, !0) }

            function p(a) {
                function c() { d[0].click(), k() && (b.bind(r, p), a.preventDefault()) } var d = n(a);
                d && (d.bind("change", l), o(a), navigator.userAgent.toLowerCase().match(/android/) ? setTimeout(function() { c() }, 0) : c()) } var q = !1,
                r = "ontouchend" in document ? "touchend" : "click";
            window.FileAPI && window.FileAPI.ngfFixIE ? window.FileAPI.ngfFixIE(b, n, m, l, o) : b.bind(r, p) }

        function c(a, b, c, g, h, j, k) {
            function l(a, b, c) { var d = !0,
                    e = c.dataTransfer.items; if (null != e)
                    for (i = 0; i < e.length && d; i++) d = d && ("file" == e[i].kind || "" == e[i].kind) && f(a, s, e[i], c); var g = h(b.dragOverClass)(a, { $event: c }); return g && (g.delay && (r = g.delay), g.accept && (g = d ? g.accept : g.reject)), g || b.dragOverClass || "dragover" }

            function m(b, c, d, e) {
                function g(c) { f(a, s, c, b) ? i.push(c) : l.push(c) }

                function h(a, b, c) { if (null != b)
                        if (b.isDirectory) { var d = (c || "") + b.name;
                            g({ name: b.name, type: "directory", path: d }); var e = b.createReader(),
                                f = [];
                            n++; var i = function() { e.readEntries(function(d) { try { if (d.length) f = f.concat(Array.prototype.slice.call(d || [], 0)), i();
                                        else { for (o = 0; o < f.length; o++) h(a, f[o], (c ? c : "") + b.name + "/");
                                            n-- } } catch (e) { n--, console.error(e) } }, function() { n-- }) };
                            i() } else n++, b.file(function(a) { try { n--, a.path = (c ? c : "") + a.name, g(a) } catch (b) { n--, console.error(b) } }, function() { n-- }) } var i = [],
                    l = [],
                    m = b.dataTransfer.items,
                    n = 0; if (m && m.length > 0 && "file" != k.protocol())
                    for (var o = 0; o < m.length; o++) { if (m[o].webkitGetAsEntry && m[o].webkitGetAsEntry() && m[o].webkitGetAsEntry().isDirectory) { var p = m[o].webkitGetAsEntry(); if (p.isDirectory && !d) continue;
                            null != p && h(i, p) } else { var q = m[o].getAsFile();
                            null != q && g(q) } if (!e && i.length > 0) break } else { var r = b.dataTransfer.files; if (null != r)
                            for (var o = 0; o < r.length && (g(r.item(o)), e || !(i.length > 0)); o++); }
                var t = 0;! function u(a) { j(function() { if (n) 10 * t++ < 2e4 && u(10);
                        else { if (!e && i.length > 1) { for (o = 0;
                                    "directory" == i[o].type;) o++;
                                i = [i[o]] }
                            c(i, l) } }, a || 0) }() } var n = d(); if (c.dropAvailable && j(function() { a[c.dropAvailable] ? a[c.dropAvailable].value = n : a[c.dropAvailable] = n }), !n) return void(1 == h(c.hideOnDropNotAvailable)(a) && b.css("display", "none")); var o, p = null,
                q = h(c.stopPropagation),
                r = 1,
                s = h(c.ngAccept),
                t = h(c.ngDisabled);
            b[0].addEventListener("dragover", function(d) { if (!t(a)) { if (d.preventDefault(), q(a) && d.stopPropagation(), navigator.userAgent.indexOf("Chrome") > -1) { var e = d.dataTransfer.effectAllowed;
                        d.dataTransfer.dropEffect = "move" === e || "linkMove" === e ? "move" : "copy" }
                    j.cancel(p), a.actualDragOverClass || (o = l(a, c, d)), b.addClass(o) } }, !1), b[0].addEventListener("dragenter", function(b) { t(a) || (b.preventDefault(), q(a) && b.stopPropagation()) }, !1), b[0].addEventListener("dragleave", function() { t(a) || (p = j(function() { b.removeClass(o), o = null }, r || 1)) }, !1), b[0].addEventListener("drop", function(d) { t(a) || (d.preventDefault(), q(a) && d.stopPropagation(), b.removeClass(o), o = null, m(d, function(b, f) { e(h, j, a, g, c, c.ngFileChange || c.ngFileDrop && c.ngFileDrop.indexOf("(") > 0, b, f, d) }, 0 != h(c.allowDir)(a), c.multiple || h(c.ngMultiple)(a))) }, !1) }

        function d() { var a = document.createElement("div"); return "draggable" in a && "ondrop" in a }

        function e(a, b, c, d, e, f, g, h, i, j) {
            function k() { d && (a(e.ngModel).assign(c, g), b(function() { d && d.$setViewValue(null != g && 0 == g.length ? null : g) })), e.ngModelRejected && a(e.ngModelRejected).assign(c, h), f && a(f)(c, { $files: g, $rejectedFiles: h, $event: i }) }
            j ? k() : b(function() { k() }) }

        function f(a, b, c, d) { var e = b(a, { $file: c, $event: d }); if (null == e) return !0; if (angular.isString(e)) { var f = new RegExp(g(e), "gi");
                e = null != c.type && c.type.match(f) || null != c.name && c.name.match(f) } return e }

        function g(a) { if (a.length > 2 && "/" === a[0] && "/" === a[a.length - 1]) return a.substring(1, a.length - 1); var b = a.split(","),
                c = ""; if (b.length > 1)
                for (i = 0; i < b.length; i++) c += "(" + g(b[i]) + ")", i < b.length - 1 && (c += "|");
            else 0 == a.indexOf(".") && (a = "*" + a), c = "^" + a.replace(new RegExp("[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\-]", "g"), "\\$&") + "$", c = c.replace(/\\\*/g, ".*").replace(/\\\?/g, "."); return c }
        var h, i;
        window.XMLHttpRequest && !window.XMLHttpRequest.__isFileAPIShim && a("setRequestHeader", function(a) { return function(b, c) { if ("__setXHR_" === b) { var d = c(this);
                    d instanceof Function && d(this) } else a.apply(this, arguments) } });
        var j = angular.module("angularFileUpload", []);
        j.version = "3.3.4", j.service("$upload", ["$http", "$q", "$timeout", function(a, b, c) {
            function d(d) {
                d.method = d.method || "POST", d.headers = d.headers || {}, d.transformRequest = d.transformRequest || function(b, c) { return window.ArrayBuffer && b instanceof window.ArrayBuffer ? b : a.defaults.transformRequest[0](b, c) };
                var e = b.defer(),
                    f = e.promise;
                return d.headers.__setXHR_ = function() {
                    return function(a) { a && (d.__XHR = a, d.xhrFn && d.xhrFn(a), a.upload.addEventListener("progress", function(a) { a.config = d, e.notify ? e.notify(a) : f.progress_fn && c(function() { f.progress_fn(a) }) }, !1), a.upload.addEventListener("load", function(a) { a.lengthComputable && (a.config = d, e.notify ? e.notify(a) : f.progress_fn && c(function() { f.progress_fn(a) })) }, !1)) }
                }, a(d).then(function(a) { e.resolve(a) }, function(a) { e.reject(a) }, function(a) { e.notify(a) }), f.success = function(a) { return f.then(function(b) { a(b.data, b.status, b.headers, d) }), f }, f.error = function(a) { return f.then(null, function(b) { a(b.data, b.status, b.headers, d) }), f }, f.progress = function(a) { return f.progress_fn = a, f.then(null, null, function(b) { a(b) }), f }, f.abort = function() { return d.__XHR && c(function() { d.__XHR.abort() }), f }, f.xhr = function(a) { return d.xhrFn = function(b) { return function() { b && b.apply(f, arguments), a.apply(f, arguments) } }(d.xhrFn), f }, f
            }
            this.upload = function(a) { return a.headers = a.headers || {}, a.headers["Content-Type"] = void 0, a.transformRequest = a.transformRequest ? angular.isArray(a.transformRequest) ? a.transformRequest : [a.transformRequest] : [], a.transformRequest.push(function(b) { var c = new FormData,
                        d = {}; for (h in a.fields) a.fields.hasOwnProperty(h) && (d[h] = a.fields[h]); if (b && (d.data = b), a.formDataAppender)
                        for (h in d) d.hasOwnProperty(h) && a.formDataAppender(c, h, d[h]);
                    else
                        for (h in d)
                            if (d.hasOwnProperty(h)) { var e = d[h];
                                void 0 !== e && (angular.isDate(e) && (e = e.toISOString()), angular.isString(e) ? c.append(h, e) : a.sendObjectsAsJsonBlob && angular.isObject(e) ? c.append(h, new Blob([e], { type: "application/json" })) : c.append(h, JSON.stringify(e))) } if (null != a.file) { var f = a.fileFormDataName || "file"; if (angular.isArray(a.file)) { var g = angular.isString(f); for (i = 0; i < a.file.length; i++) c.append(g ? f : f[i], a.file[i], a.fileName && a.fileName[i] || a.file[i].name) } else c.append(f, a.file, a.fileName || a.file.name) } return c }), d(a) }, this.http = function(a) { return d(a) }
        }]), j.directive("ngFileSelect", ["$parse", "$timeout", "$compile", function(a, c, d) { return { restrict: "AEC", require: "?ngModel", link: function(e, f, g, h) { b(e, f, g, h, a, c, d) } } }]), j.directive("ngFileDrop", ["$parse", "$timeout", "$location", function(a, b, d) { return { restrict: "AEC", require: "?ngModel", link: function(e, f, g, h) { c(e, f, g, h, a, b, d) } } }]), j.directive("ngNoFileDrop", function() { return function(a, b) { d() && b.css("display", "none") } }), j.directive("ngFileDropAvailable", ["$parse", "$timeout", function(a, b) { return function(c, e, f) { if (d()) { var g = a(f.ngFileDropAvailable);
                    b(function() { g(c) }) } } }]);
        var k = angular.module("ngFileUpload", []);
        for (h in j) j.hasOwnProperty(h) && (k[h] = j[h])
    }(),
    function(a, b) { "use strict"; "function" == typeof define && define.amd ? define(function() { return new(b(a, a.document)) }) : "undefined" != typeof module && module.exports ? module.exports = new(b(a, a.document)) : a.Push = new(b(a, a.document)) }("undefined" != typeof window ? window : this, function(a, b) { var c = function() { var b = this,
                c = function(a) { return void 0 === a },
                d = function(a) { return String(a) === a },
                e = function(a) { return a && "[object Function]" === {}.toString.call(a) },
                f = "PushError: push.js is incompatible with browser.",
                g = !1,
                h = [],
                i = function(b) { if (b.close) b.close();
                    else if (b.cancel) b.cancel();
                    else { if (!a.external || !a.external.msIsSiteMode) throw new Error("Unable to close notification: unknown interface");
                        a.external.msSiteModeClearIconOverlay() } },
                j = function() { b.count = h.length },
                k = function(b, f) { var g, k; if (f = f || {}, a.Notification) try { g = new a.Notification(b, { icon: d(f.icon) || c(f.icon) ? f.icon : f.icon.x32, body: f.body, tag: f.tag }) } catch (l) { a.navigator && (a.navigator.serviceWorker.register("sw.js"), a.navigator.serviceWorker.ready.then(function(a) { a.showNotification(b, { body: f.body, vibrate: f.vibrate, tag: f.tag }) })) } else if (a.webkitNotifications) g = a.webkitNotifications.createNotification(f.icon, b, f.body), g.show();
                        else if (navigator.mozNotification) g = navigator.mozNotification.createNotification(b, f.body, f.icon), g.show();
                    else { if (!a.external || !a.external.msIsSiteMode()) throw new Error("Unable to create notification: unknown interface");
                        a.external.msSiteModeClearIconOverlay(), a.external.msSiteModeSetIconOverlay(d(f.icon) || c(f.icon) ? f.icon : f.icon.x16, b), a.external.msSiteModeActivate(), g = {} } return k = { close: function() { i(g) } }, h.push(g), j(), f.timeout && setTimeout(function() { k.close() }, f.timeout), e(f.onShow) && g.addEventListener("show", f.onShow), e(f.onError) && g.addEventListener("error", f.onError), e(f.onClick) && g.addEventListener("click", f.onClick), e(f.onClose) && (g.addEventListener("close", f.onClose), g.addEventListener("cancel", f.onClose)), k },
                l = { DEFAULT: "default", GRANTED: "granted", DENIED: "denied" },
                m = [l.GRANTED, l.DEFAULT, l.DENIED];
            b.Permission = l, b.count = 0, b.Permission.request = function(c, d) { if (!b.isSupported) throw new Error(f); if (callback = function(a) { switch (a) {
                            case b.Permission.GRANTED:
                                g = !0, c && c(); break;
                            case b.Permission.DENIED:
                                g = !1, d && d() } }, a.Notification && a.Notification.requestPermission) Notification.requestPermission(callback);
                else { if (!a.webkitNotifications || !a.webkitNotifications.checkPermission) throw new Error(f);
                    a.webkitNotifications.requestPermission(callback) } }, b.Permission.has = function() { return g }, b.Permission.get = function() { var c; if (!b.isSupported) throw new Error(f); if (a.Notification && a.Notification.permissionLevel) c = a.Notification.permissionLevel;
                else if (a.webkitNotifications && a.webkitNotifications.checkPermission) c = m[a.webkitNotifications.checkPermission()];
                else if (a.Notification && a.Notification.permission) c = a.Notification.permission;
                else if (navigator.mozNotification) c = m.GRANTED;
                else { if (!a.external || void 0 === a.external.msIsSiteMode()) throw new Error(f);
                    c = a.external.msIsSiteMode() ? l.GRANTED : l.DEFAULT } return c }, b.isSupported = function() { var b = !1; try { b = !!(a.Notification || a.webkitNotifications || navigator.mozNotification || a.external && void 0 !== a.external.msIsSiteMode()) } catch (c) {} return b }(), b.create = function(a, c) { if (!b.isSupported) throw new Error(f); if (!d(a)) throw new Error("PushError: Title of notification must be a string"); return b.Permission.has() ? new Promise(function(b, d) { try { b(k(a, c)) } catch (e) { d(e) } }) : new Promise(function(d, e) { b.Permission.request(function() { try { d(k(a, c)) } catch (b) { e(b) } }, function() { e("Permission request declined") }) }) }, b.close = function(a) { var b, c; for (b = 0; b < h.length; b++)
                    if (c = h[b], c.tag === a) return i(c), h.splice(b, 1), void j() }, b.clear = function() { var a; for (a = 0; a < h.length; a++) i(h[a]);
                h = [], j() } }; return c });