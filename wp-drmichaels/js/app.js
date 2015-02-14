function wk_ajax_render_url(t) {
    return "/component/widgetkit/?format=raw&id=" + t
}
function JVXVote(t, e, i, n, a, o, r, s) {
    var l = window.location, d = l.protocol + "//" + l.host + ev_basefolder, c = document.getElementById("extravote_" + t + "_" + a), u = c.innerHTML;
    if (-1 == c.parentNode.className.indexOf("voted")) {
        c.innerHTML = '<img src="' + d + '/plugins/content/extravote/assets/images/loading.gif" align="absmiddle" /> <small>' + extravote_text[1] + "</small>";
        var h = new XMLHttpRequest;
        h.onreadystatechange = function() {
            var l;
            4 == h.readyState && (setTimeout(function() {
                l = h.responseText, "thanks" == l && (c.innerHTML = "<small>" + extravote_text[2] + "</small>"), "login" == l && (c.innerHTML = "<small>" + extravote_text[3] + "</small>"), "voted" == l && (c.innerHTML = "<small>" + extravote_text[4] + "</small>")
            }, 500), setTimeout(function() {
                if ("thanks" == l) {
                    u = "";
                    var d = n + 1, h = ((i + e) / d).toFixed(2);
                    0 != r && (u += 1 == s ? extravote_text[7].replace("%s", h) : extravote_text[7].replace("%s", Math.round(20 * h) + "%")), 0 != o && (u += 1 != d ? extravote_text[5].replace("%s", d) : extravote_text[6].replace("%s", d)), document.getElementById("rating_" + t + "_" + a).style.width = parseInt(20 * h) + "%"
                }
                c.innerHTML = u
            }, 2e3))
        }, h.open("GET", d + "/index.php?option=com_ajax&format=raw&plugin=extravote&user_rating=" + e + "&cid=" + t + "&xid=" + a, !0), h.send(null), c.parentNode.className = c.parentNode.className + " voted"
    }
}
function revslider_showDoubleJqueryError(t) {
    var e = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
    e += "<br> This includes make eliminates the revolution slider libraries, and make it not work.", e += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.", e += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.", e = "<span style='font-size:16px;color:#BC0C06;'>" + e + "</span>", jQuery(t).show().html(e)
}
try {
    !function(t, e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
            if (!t.document)
                throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, function(t, e) {
        function i(t) {
            var e = t.length, i = ae.type(t);
            return "function" === i || ae.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
        }
        function n(t, e, i) {
            if (ae.isFunction(e))
                return ae.grep(t, function(t, n) {
                    return !!e.call(t, n, t) !== i
                });
            if (e.nodeType)
                return ae.grep(t, function(t) {
                    return t === e !== i
                });
            if ("string" == typeof e) {
                if (he.test(e))
                    return ae.filter(e, t, i);
                e = ae.filter(e, t)
            }
            return ae.grep(t, function(t) {
                return ae.inArray(t, e) >= 0 !== i
            })
        }
        function a(t, e) {
            do
                t = t[e];
            while (t && 1 !== t.nodeType);
            return t
        }
        function o(t) {
            var e = be[t] = {};
            return ae.each(t.match(we) || [], function(t, i) {
                e[i] = !0
            }), e
        }
        function r() {
            fe.addEventListener ? (fe.removeEventListener("DOMContentLoaded", s, !1), t.removeEventListener("load", s, !1)) : (fe.detachEvent("onreadystatechange", s), t.detachEvent("onload", s))
        }
        function s() {
            (fe.addEventListener || "load" === event.type || "complete" === fe.readyState) && (r(), ae.ready())
        }
        function l(t, e, i) {
            if (void 0 === i && 1 === t.nodeType) {
                var n = "data-" + e.replace(Ce, "-$1").toLowerCase();
                if (i = t.getAttribute(n), "string" == typeof i) {
                    try {
                        i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : ke.test(i) ? ae.parseJSON(i) : i
                    } catch (a) {
                    }
                    ae.data(t, e, i)
                } else
                    i = void 0
            }
            return i
        }
        function d(t) {
            var e;
            for (e in t)
                if (("data" !== e || !ae.isEmptyObject(t[e])) && "toJSON" !== e)
                    return !1;
            return !0
        }
        function c(t, e, i, n) {
            if (ae.acceptData(t)) {
                var a, o, r = ae.expando, s = t.nodeType, l = s ? ae.cache : t, d = s ? t[r] : t[r] && r;
                if (d && l[d] && (n || l[d].data) || void 0 !== i || "string" != typeof e)
                    return d || (d = s ? t[r] = Y.pop() || ae.guid++ : r), l[d] || (l[d] = s ? {} : {toJSON: ae.noop}), ("object" == typeof e || "function" == typeof e) && (n ? l[d] = ae.extend(l[d], e) : l[d].data = ae.extend(l[d].data, e)), o = l[d], n || (o.data || (o.data = {}), o = o.data), void 0 !== i && (o[ae.camelCase(e)] = i), "string" == typeof e ? (a = o[e], null == a && (a = o[ae.camelCase(e)])) : a = o, a
            }
        }
        function u(t, e, i) {
            if (ae.acceptData(t)) {
                var n, a, o = t.nodeType, r = o ? ae.cache : t, s = o ? t[ae.expando] : ae.expando;
                if (r[s]) {
                    if (e && (n = i ? r[s] : r[s].data)) {
                        ae.isArray(e) ? e = e.concat(ae.map(e, ae.camelCase)) : e in n ? e = [e] : (e = ae.camelCase(e), e = e in n ? [e] : e.split(" ")), a = e.length;
                        for (; a--; )
                            delete n[e[a]];
                        if (i ? !d(n) : !ae.isEmptyObject(n))
                            return
                    }
                    (i || (delete r[s].data, d(r[s]))) && (o ? ae.cleanData([t], !0) : ie.deleteExpando || r != r.window ? delete r[s] : r[s] = null)
                }
            }
        }
        function h() {
            return !0
        }
        function p() {
            return !1
        }
        function f() {
            try {
                return fe.activeElement
            } catch (t) {
            }
        }
        function m(t) {
            var e = ze.split("|"), i = t.createDocumentFragment();
            if (i.createElement)
                for (; e.length; )
                    i.createElement(e.pop());
            return i
        }
        function g(t, e) {
            var i, n, a = 0, o = typeof t.getElementsByTagName !== Te ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== Te ? t.querySelectorAll(e || "*") : void 0;
            if (!o)
                for (o = [], i = t.childNodes || t; null != (n = i[a]); a++)
                    !e || ae.nodeName(n, e) ? o.push(n) : ae.merge(o, g(n, e));
            return void 0 === e || e && ae.nodeName(t, e) ? ae.merge([t], o) : o
        }
        function v(t) {
            Ae.test(t.type) && (t.defaultChecked = t.checked)
        }
        function y(t, e) {
            return ae.nodeName(t, "table") && ae.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }
        function w(t) {
            return t.type = (null !== ae.find.attr(t, "type")) + "/" + t.type, t
        }
        function b(t) {
            var e = Ue.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }
        function x(t, e) {
            for (var i, n = 0; null != (i = t[n]); n++)
                ae._data(i, "globalEval", !e || ae._data(e[n], "globalEval"))
        }
        function _(t, e) {
            if (1 === e.nodeType && ae.hasData(t)) {
                var i, n, a, o = ae._data(t), r = ae._data(e, o), s = o.events;
                if (s) {
                    delete r.handle, r.events = {};
                    for (i in s)
                        for (n = 0, a = s[i].length; a > n; n++)
                            ae.event.add(e, i, s[i][n])
                }
                r.data && (r.data = ae.extend({}, r.data))
            }
        }
        function T(t, e) {
            var i, n, a;
            if (1 === e.nodeType) {
                if (i = e.nodeName.toLowerCase(), !ie.noCloneEvent && e[ae.expando]) {
                    a = ae._data(e);
                    for (n in a.events)
                        ae.removeEvent(e, n, a.handle);
                    e.removeAttribute(ae.expando)
                }
                "script" === i && e.text !== t.text ? (w(e).text = t.text, b(e)) : "object" === i ? (e.parentNode && (e.outerHTML = t.outerHTML), ie.html5Clone && t.innerHTML && !ae.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && Ae.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === i ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue)
            }
        }
        function k(e, i) {
            var n, a = ae(i.createElement(e)).appendTo(i.body), o = t.getDefaultComputedStyle && (n = t.getDefaultComputedStyle(a[0])) ? n.display : ae.css(a[0], "display");
            return a.detach(), o
        }
        function C(t) {
            var e = fe, i = Ke[t];
            return i || (i = k(t, e), "none" !== i && i || (Je = (Je || ae("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Je[0].contentWindow || Je[0].contentDocument).document, e.write(), e.close(), i = k(t, e), Je.detach()), Ke[t] = i), i
        }
        function S(t, e) {
            return {get: function() {
                    var i = t();
                    return null != i ? i ? void delete this.get : (this.get = e).apply(this, arguments) : void 0
                }}
        }
        function O(t, e) {
            if (e in t)
                return e;
            for (var i = e.charAt(0).toUpperCase() + e.slice(1), n = e, a = hi.length; a--; )
                if (e = hi[a] + i, e in t)
                    return e;
            return n
        }
        function M(t, e) {
            for (var i, n, a, o = [], r = 0, s = t.length; s > r; r++)
                n = t[r], n.style && (o[r] = ae._data(n, "olddisplay"), i = n.style.display, e ? (o[r] || "none" !== i || (n.style.display = ""), "" === n.style.display && Me(n) && (o[r] = ae._data(n, "olddisplay", C(n.nodeName)))) : (a = Me(n), (i && "none" !== i || !a) && ae._data(n, "olddisplay", a ? i : ae.css(n, "display"))));
            for (r = 0; s > r; r++)
                n = t[r], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? o[r] || "" : "none"));
            return t
        }
        function L(t, e, i) {
            var n = li.exec(e);
            return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
        }
        function A(t, e, i, n, a) {
            for (var o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, r = 0; 4 > o; o += 2)
                "margin" === i && (r += ae.css(t, i + Oe[o], !0, a)), n ? ("content" === i && (r -= ae.css(t, "padding" + Oe[o], !0, a)), "margin" !== i && (r -= ae.css(t, "border" + Oe[o] + "Width", !0, a))) : (r += ae.css(t, "padding" + Oe[o], !0, a), "padding" !== i && (r += ae.css(t, "border" + Oe[o] + "Width", !0, a)));
            return r
        }
        function E(t, e, i) {
            var n = !0, a = "width" === e ? t.offsetWidth : t.offsetHeight, o = ti(t), r = ie.boxSizing && "border-box" === ae.css(t, "boxSizing", !1, o);
            if (0 >= a || null == a) {
                if (a = ei(t, e, o), (0 > a || null == a) && (a = t.style[e]), ni.test(a))
                    return a;
                n = r && (ie.boxSizingReliable() || a === t.style[e]), a = parseFloat(a) || 0
            }
            return a + A(t, e, i || (r ? "border" : "content"), n, o) + "px"
        }
        function P(t, e, i, n, a) {
            return new P.prototype.init(t, e, i, n, a)
        }
        function j() {
            return setTimeout(function() {
                pi = void 0
            }), pi = ae.now()
        }
        function I(t, e) {
            var i, n = {height: t}, a = 0;
            for (e = e ? 1 : 0; 4 > a; a += 2 - e)
                i = Oe[a], n["margin" + i] = n["padding" + i] = t;
            return e && (n.opacity = n.width = t), n
        }
        function D(t, e, i) {
            for (var n, a = (wi[e] || []).concat(wi["*"]), o = 0, r = a.length; r > o; o++)
                if (n = a[o].call(i, e, t))
                    return n
        }
        function z(t, e, i) {
            var n, a, o, r, s, l, d, c, u = this, h = {}, p = t.style, f = t.nodeType && Me(t), m = ae._data(t, "fxshow");
            i.queue || (s = ae._queueHooks(t, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
                s.unqueued || l()
            }), s.unqueued++, u.always(function() {
                u.always(function() {
                    s.unqueued--, ae.queue(t, "fx").length || s.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], d = ae.css(t, "display"), c = "none" === d ? ae._data(t, "olddisplay") || C(t.nodeName) : d, "inline" === c && "none" === ae.css(t, "float") && (ie.inlineBlockNeedsLayout && "inline" !== C(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")), i.overflow && (p.overflow = "hidden", ie.shrinkWrapBlocks() || u.always(function() {
                p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
            }));
            for (n in e)
                if (a = e[n], mi.exec(a)) {
                    if (delete e[n], o = o || "toggle" === a, a === (f ? "hide" : "show")) {
                        if ("show" !== a || !m || void 0 === m[n])
                            continue;
                        f = !0
                    }
                    h[n] = m && m[n] || ae.style(t, n)
                } else
                    d = void 0;
            if (ae.isEmptyObject(h))
                "inline" === ("none" === d ? C(t.nodeName) : d) && (p.display = d);
            else {
                m ? "hidden" in m && (f = m.hidden) : m = ae._data(t, "fxshow", {}), o && (m.hidden = !f), f ? ae(t).show() : u.done(function() {
                    ae(t).hide()
                }), u.done(function() {
                    var e;
                    ae._removeData(t, "fxshow");
                    for (e in h)
                        ae.style(t, e, h[e])
                });
                for (n in h)
                    r = D(f ? m[n] : 0, n, u), n in m || (m[n] = r.start, f && (r.end = r.start, r.start = "width" === n || "height" === n ? 1 : 0))
            }
        }
        function N(t, e) {
            var i, n, a, o, r;
            for (i in t)
                if (n = ae.camelCase(i), a = e[n], o = t[i], ae.isArray(o) && (a = o[1], o = t[i] = o[0]), i !== n && (t[n] = o, delete t[i]), r = ae.cssHooks[n], r && "expand" in r) {
                    o = r.expand(o), delete t[n];
                    for (i in o)
                        i in t || (t[i] = o[i], e[i] = a)
                } else
                    e[n] = a
        }
        function H(t, e, i) {
            var n, a, o = 0, r = yi.length, s = ae.Deferred().always(function() {
                delete l.elem
            }), l = function() {
                if (a)
                    return !1;
                for (var e = pi || j(), i = Math.max(0, d.startTime + d.duration - e), n = i / d.duration || 0, o = 1 - n, r = 0, l = d.tweens.length; l > r; r++)
                    d.tweens[r].run(o);
                return s.notifyWith(t, [d, o, i]), 1 > o && l ? i : (s.resolveWith(t, [d]), !1)
            }, d = s.promise({elem: t,props: ae.extend({}, e),opts: ae.extend(!0, {specialEasing: {}}, i),originalProperties: e,originalOptions: i,startTime: pi || j(),duration: i.duration,tweens: [],createTween: function(e, i) {
                    var n = ae.Tween(t, d.opts, e, i, d.opts.specialEasing[e] || d.opts.easing);
                    return d.tweens.push(n), n
                },stop: function(e) {
                    var i = 0, n = e ? d.tweens.length : 0;
                    if (a)
                        return this;
                    for (a = !0; n > i; i++)
                        d.tweens[i].run(1);
                    return e ? s.resolveWith(t, [d, e]) : s.rejectWith(t, [d, e]), this
                }}), c = d.props;
            for (N(c, d.opts.specialEasing); r > o; o++)
                if (n = yi[o].call(d, t, c, d.opts))
                    return n;
            return ae.map(c, D, d), ae.isFunction(d.opts.start) && d.opts.start.call(t, d), ae.fx.timer(ae.extend(l, {elem: t,anim: d,queue: d.opts.queue})), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always)
        }
        function $(t) {
            return function(e, i) {
                "string" != typeof e && (i = e, e = "*");
                var n, a = 0, o = e.toLowerCase().match(we) || [];
                if (ae.isFunction(i))
                    for (; n = o[a++]; )
                        "+" === n.charAt(0) ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
            }
        }
        function R(t, e, i, n) {
            function a(s) {
                var l;
                return o[s] = !0, ae.each(t[s] || [], function(t, s) {
                    var d = s(e, i, n);
                    return "string" != typeof d || r || o[d] ? r ? !(l = d) : void 0 : (e.dataTypes.unshift(d), a(d), !1)
                }), l
            }
            var o = {}, r = t === Wi;
            return a(e.dataTypes[0]) || !o["*"] && a("*")
        }
        function F(t, e) {
            var i, n, a = ae.ajaxSettings.flatOptions || {};
            for (n in e)
                void 0 !== e[n] && ((a[n] ? t : i || (i = {}))[n] = e[n]);
            return i && ae.extend(!0, t, i), t
        }
        function q(t, e, i) {
            for (var n, a, o, r, s = t.contents, l = t.dataTypes; "*" === l[0]; )
                l.shift(), void 0 === a && (a = t.mimeType || e.getResponseHeader("Content-Type"));
            if (a)
                for (r in s)
                    if (s[r] && s[r].test(a)) {
                        l.unshift(r);
                        break
                    }
            if (l[0] in i)
                o = l[0];
            else {
                for (r in i) {
                    if (!l[0] || t.converters[r + " " + l[0]]) {
                        o = r;
                        break
                    }
                    n || (n = r)
                }
                o = o || n
            }
            return o ? (o !== l[0] && l.unshift(o), i[o]) : void 0
        }
        function W(t, e, i, n) {
            var a, o, r, s, l, d = {}, c = t.dataTypes.slice();
            if (c[1])
                for (r in t.converters)
                    d[r.toLowerCase()] = t.converters[r];
            for (o = c.shift(); o; )
                if (t.responseFields[o] && (i[t.responseFields[o]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift())
                    if ("*" === o)
                        o = l;
                    else if ("*" !== l && l !== o) {
                        if (r = d[l + " " + o] || d["* " + o], !r)
                            for (a in d)
                                if (s = a.split(" "), s[1] === o && (r = d[l + " " + s[0]] || d["* " + s[0]])) {
                                    r === !0 ? r = d[a] : d[a] !== !0 && (o = s[0], c.unshift(s[1]));
                                    break
                                }
                        if (r !== !0)
                            if (r && t["throws"])
                                e = r(e);
                            else
                                try {
                                    e = r(e)
                                } catch (u) {
                                    return {state: "parsererror",error: r ? u : "No conversion from " + l + " to " + o}
                                }
                    }
            return {state: "success",data: e}
        }
        function B(t, e, i, n) {
            var a;
            if (ae.isArray(e))
                ae.each(e, function(e, a) {
                    i || Ui.test(t) ? n(t, a) : B(t + "[" + ("object" == typeof a ? e : "") + "]", a, i, n)
                });
            else if (i || "object" !== ae.type(e))
                n(t, e);
            else
                for (a in e)
                    B(t + "[" + a + "]", e[a], i, n)
        }
        function X() {
            try {
                return new t.XMLHttpRequest
            } catch (e) {
            }
        }
        function Q() {
            try {
                return new t.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {
            }
        }
        function U(t) {
            return ae.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
        }
        var Y = [], V = Y.slice, G = Y.concat, Z = Y.push, J = Y.indexOf, K = {}, te = K.toString, ee = K.hasOwnProperty, ie = {}, ne = "1.11.1", ae = function(t, e) {
            return new ae.fn.init(t, e)
        }, oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, re = /^-ms-/, se = /-([\da-z])/gi, le = function(t, e) {
            return e.toUpperCase()
        };
        ae.fn = ae.prototype = {jquery: ne,constructor: ae,selector: "",length: 0,toArray: function() {
                return V.call(this)
            },get: function(t) {
                return null != t ? 0 > t ? this[t + this.length] : this[t] : V.call(this)
            },pushStack: function(t) {
                var e = ae.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            },each: function(t, e) {
                return ae.each(this, t, e)
            },map: function(t) {
                return this.pushStack(ae.map(this, function(e, i) {
                    return t.call(e, i, e)
                }))
            },slice: function() {
                return this.pushStack(V.apply(this, arguments))
            },first: function() {
                return this.eq(0)
            },last: function() {
                return this.eq(-1)
            },eq: function(t) {
                var e = this.length, i = +t + (0 > t ? e : 0);
                return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
            },end: function() {
                return this.prevObject || this.constructor(null)
            },push: Z,sort: Y.sort,splice: Y.splice}, ae.extend = ae.fn.extend = function() {
            var t, e, i, n, a, o, r = arguments[0] || {}, s = 1, l = arguments.length, d = !1;
            for ("boolean" == typeof r && (d = r, r = arguments[s] || {}, s++), "object" == typeof r || ae.isFunction(r) || (r = {}), s === l && (r = this, s--); l > s; s++)
                if (null != (a = arguments[s]))
                    for (n in a)
                        t = r[n], i = a[n], r !== i && (d && i && (ae.isPlainObject(i) || (e = ae.isArray(i))) ? (e ? (e = !1, o = t && ae.isArray(t) ? t : []) : o = t && ae.isPlainObject(t) ? t : {}, r[n] = ae.extend(d, o, i)) : void 0 !== i && (r[n] = i));
            return r
        }, ae.extend({expando: "jQuery" + (ne + Math.random()).replace(/\D/g, ""),isReady: !0,error: function(t) {
                throw new Error(t)
            },noop: function() {
            },isFunction: function(t) {
                return "function" === ae.type(t)
            },isArray: Array.isArray || function(t) {
                return "array" === ae.type(t)
            },isWindow: function(t) {
                return null != t && t == t.window
            },isNumeric: function(t) {
                return !ae.isArray(t) && t - parseFloat(t) >= 0
            },isEmptyObject: function(t) {
                var e;
                for (e in t)
                    return !1;
                return !0
            },isPlainObject: function(t) {
                var e;
                if (!t || "object" !== ae.type(t) || t.nodeType || ae.isWindow(t))
                    return !1;
                try {
                    if (t.constructor && !ee.call(t, "constructor") && !ee.call(t.constructor.prototype, "isPrototypeOf"))
                        return !1
                } catch (i) {
                    return !1
                }
                if (ie.ownLast)
                    for (e in t)
                        return ee.call(t, e);
                for (e in t)
                    ;
                return void 0 === e || ee.call(t, e)
            },type: function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? K[te.call(t)] || "object" : typeof t
            },globalEval: function(e) {
                e && ae.trim(e) && (t.execScript || function(e) {
                    t.eval.call(t, e)
                })(e)
            },camelCase: function(t) {
                return t.replace(re, "ms-").replace(se, le)
            },nodeName: function(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },each: function(t, e, n) {
                var a, o = 0, r = t.length, s = i(t);
                if (n) {
                    if (s)
                        for (; r > o && (a = e.apply(t[o], n), a !== !1); o++)
                            ;
                    else
                        for (o in t)
                            if (a = e.apply(t[o], n), a === !1)
                                break
                } else if (s)
                    for (; r > o && (a = e.call(t[o], o, t[o]), a !== !1); o++)
                        ;
                else
                    for (o in t)
                        if (a = e.call(t[o], o, t[o]), a === !1)
                            break;
                return t
            },trim: function(t) {
                return null == t ? "" : (t + "").replace(oe, "")
            },makeArray: function(t, e) {
                var n = e || [];
                return null != t && (i(Object(t)) ? ae.merge(n, "string" == typeof t ? [t] : t) : Z.call(n, t)), n
            },inArray: function(t, e, i) {
                var n;
                if (e) {
                    if (J)
                        return J.call(e, t, i);
                    for (n = e.length, i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++)
                        if (i in e && e[i] === t)
                            return i
                }
                return -1
            },merge: function(t, e) {
                for (var i = +e.length, n = 0, a = t.length; i > n; )
                    t[a++] = e[n++];
                if (i !== i)
                    for (; void 0 !== e[n]; )
                        t[a++] = e[n++];
                return t.length = a, t
            },grep: function(t, e, i) {
                for (var n, a = [], o = 0, r = t.length, s = !i; r > o; o++)
                    n = !e(t[o], o), n !== s && a.push(t[o]);
                return a
            },map: function(t, e, n) {
                var a, o = 0, r = t.length, s = i(t), l = [];
                if (s)
                    for (; r > o; o++)
                        a = e(t[o], o, n), null != a && l.push(a);
                else
                    for (o in t)
                        a = e(t[o], o, n), null != a && l.push(a);
                return G.apply([], l)
            },guid: 1,proxy: function(t, e) {
                var i, n, a;
                return "string" == typeof e && (a = t[e], e = t, t = a), ae.isFunction(t) ? (i = V.call(arguments, 2), n = function() {
                    return t.apply(e || this, i.concat(V.call(arguments)))
                }, n.guid = t.guid = t.guid || ae.guid++, n) : void 0
            },now: function() {
                return +new Date
            },support: ie}), ae.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
            K["[object " + e + "]"] = e.toLowerCase()
        });
        var de = function(t) {
            function e(t, e, i, n) {
                var a, o, r, s, l, d, u, p, f, m;
                if ((e ? e.ownerDocument || e : R) !== P && E(e), e = e || P, i = i || [], !t || "string" != typeof t)
                    return i;
                if (1 !== (s = e.nodeType) && 9 !== s)
                    return [];
                if (I && !n) {
                    if (a = ye.exec(t))
                        if (r = a[1]) {
                            if (9 === s) {
                                if (o = e.getElementById(r), !o || !o.parentNode)
                                    return i;
                                if (o.id === r)
                                    return i.push(o), i
                            } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(r)) && H(e, o) && o.id === r)
                                return i.push(o), i
                        } else {
                            if (a[2])
                                return K.apply(i, e.getElementsByTagName(t)), i;
                            if ((r = a[3]) && x.getElementsByClassName && e.getElementsByClassName)
                                return K.apply(i, e.getElementsByClassName(r)), i
                        }
                    if (x.qsa && (!D || !D.test(t))) {
                        if (p = u = $, f = e, m = 9 === s && t, 1 === s && "object" !== e.nodeName.toLowerCase()) {
                            for (d = C(t), (u = e.getAttribute("id")) ? p = u.replace(be, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", l = d.length; l--; )
                                d[l] = p + h(d[l]);
                            f = we.test(t) && c(e.parentNode) || e, m = d.join(",")
                        }
                        if (m)
                            try {
                                return K.apply(i, f.querySelectorAll(m)), i
                            } catch (g) {
                            }finally {
                                u || e.removeAttribute("id")
                            }
                    }
                }
                return O(t.replace(le, "$1"), e, i, n)
            }
            function i() {
                function t(i, n) {
                    return e.push(i + " ") > _.cacheLength && delete t[e.shift()], t[i + " "] = n
                }
                var e = [];
                return t
            }
            function n(t) {
                return t[$] = !0, t
            }
            function a(t) {
                var e = P.createElement("div");
                try {
                    return !!t(e)
                } catch (i) {
                    return !1
                }finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }
            function o(t, e) {
                for (var i = t.split("|"), n = t.length; n--; )
                    _.attrHandle[i[n]] = e
            }
            function r(t, e) {
                var i = e && t, n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || Y) - (~t.sourceIndex || Y);
                if (n)
                    return n;
                if (i)
                    for (; i = i.nextSibling; )
                        if (i === e)
                            return -1;
                return t ? 1 : -1
            }
            function s(t) {
                return function(e) {
                    var i = e.nodeName.toLowerCase();
                    return "input" === i && e.type === t
                }
            }
            function l(t) {
                return function(e) {
                    var i = e.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && e.type === t
                }
            }
            function d(t) {
                return n(function(e) {
                    return e = +e, n(function(i, n) {
                        for (var a, o = t([], i.length, e), r = o.length; r--; )
                            i[a = o[r]] && (i[a] = !(n[a] = i[a]))
                    })
                })
            }
            function c(t) {
                return t && typeof t.getElementsByTagName !== U && t
            }
            function u() {
            }
            function h(t) {
                for (var e = 0, i = t.length, n = ""; i > e; e++)
                    n += t[e].value;
                return n
            }
            function p(t, e, i) {
                var n = e.dir, a = i && "parentNode" === n, o = q++;
                return e.first ? function(e, i, o) {
                    for (; e = e[n]; )
                        if (1 === e.nodeType || a)
                            return t(e, i, o)
                } : function(e, i, r) {
                    var s, l, d = [F, o];
                    if (r) {
                        for (; e = e[n]; )
                            if ((1 === e.nodeType || a) && t(e, i, r))
                                return !0
                    } else
                        for (; e = e[n]; )
                            if (1 === e.nodeType || a) {
                                if (l = e[$] || (e[$] = {}), (s = l[n]) && s[0] === F && s[1] === o)
                                    return d[2] = s[2];
                                if (l[n] = d, d[2] = t(e, i, r))
                                    return !0
                            }
                }
            }
            function f(t) {
                return t.length > 1 ? function(e, i, n) {
                    for (var a = t.length; a--; )
                        if (!t[a](e, i, n))
                            return !1;
                    return !0
                } : t[0]
            }
            function m(t, i, n) {
                for (var a = 0, o = i.length; o > a; a++)
                    e(t, i[a], n);
                return n
            }
            function g(t, e, i, n, a) {
                for (var o, r = [], s = 0, l = t.length, d = null != e; l > s; s++)
                    (o = t[s]) && (!i || i(o, n, a)) && (r.push(o), d && e.push(s));
                return r
            }
            function v(t, e, i, a, o, r) {
                return a && !a[$] && (a = v(a)), o && !o[$] && (o = v(o, r)), n(function(n, r, s, l) {
                    var d, c, u, h = [], p = [], f = r.length, v = n || m(e || "*", s.nodeType ? [s] : s, []), y = !t || !n && e ? v : g(v, h, t, s, l), w = i ? o || (n ? t : f || a) ? [] : r : y;
                    if (i && i(y, w, s, l), a)
                        for (d = g(w, p), a(d, [], s, l), c = d.length; c--; )
                            (u = d[c]) && (w[p[c]] = !(y[p[c]] = u));
                    if (n) {
                        if (o || t) {
                            if (o) {
                                for (d = [], c = w.length; c--; )
                                    (u = w[c]) && d.push(y[c] = u);
                                o(null, w = [], d, l)
                            }
                            for (c = w.length; c--; )
                                (u = w[c]) && (d = o ? ee.call(n, u) : h[c]) > -1 && (n[d] = !(r[d] = u))
                        }
                    } else
                        w = g(w === r ? w.splice(f, w.length) : w), o ? o(null, r, w, l) : K.apply(r, w)
                })
            }
            function y(t) {
                for (var e, i, n, a = t.length, o = _.relative[t[0].type], r = o || _.relative[" "], s = o ? 1 : 0, l = p(function(t) {
                    return t === e
                }, r, !0), d = p(function(t) {
                    return ee.call(e, t) > -1
                }, r, !0), c = [function(t, i, n) {
                        return !o && (n || i !== M) || ((e = i).nodeType ? l(t, i, n) : d(t, i, n))
                    }]; a > s; s++)
                    if (i = _.relative[t[s].type])
                        c = [p(f(c), i)];
                    else {
                        if (i = _.filter[t[s].type].apply(null, t[s].matches), i[$]) {
                            for (n = ++s; a > n && !_.relative[t[n].type]; n++)
                                ;
                            return v(s > 1 && f(c), s > 1 && h(t.slice(0, s - 1).concat({value: " " === t[s - 2].type ? "*" : ""})).replace(le, "$1"), i, n > s && y(t.slice(s, n)), a > n && y(t = t.slice(n)), a > n && h(t))
                        }
                        c.push(i)
                    }
                return f(c)
            }
            function w(t, i) {
                var a = i.length > 0, o = t.length > 0, r = function(n, r, s, l, d) {
                    var c, u, h, p = 0, f = "0", m = n && [], v = [], y = M, w = n || o && _.find.TAG("*", d), b = F += null == y ? 1 : Math.random() || .1, x = w.length;
                    for (d && (M = r !== P && r); f !== x && null != (c = w[f]); f++) {
                        if (o && c) {
                            for (u = 0; h = t[u++]; )
                                if (h(c, r, s)) {
                                    l.push(c);
                                    break
                                }
                            d && (F = b)
                        }
                        a && ((c = !h && c) && p--, n && m.push(c))
                    }
                    if (p += f, a && f !== p) {
                        for (u = 0; h = i[u++]; )
                            h(m, v, r, s);
                        if (n) {
                            if (p > 0)
                                for (; f--; )
                                    m[f] || v[f] || (v[f] = Z.call(l));
                            v = g(v)
                        }
                        K.apply(l, v), d && !n && v.length > 0 && p + i.length > 1 && e.uniqueSort(l)
                    }
                    return d && (F = b, M = y), m
                };
                return a ? n(r) : r
            }
            var b, x, _, T, k, C, S, O, M, L, A, E, P, j, I, D, z, N, H, $ = "sizzle" + -new Date, R = t.document, F = 0, q = 0, W = i(), B = i(), X = i(), Q = function(t, e) {
                return t === e && (A = !0), 0
            }, U = "undefined", Y = 1 << 31, V = {}.hasOwnProperty, G = [], Z = G.pop, J = G.push, K = G.push, te = G.slice, ee = G.indexOf || function(t) {
                for (var e = 0, i = this.length; i > e; e++)
                    if (this[e] === t)
                        return e;
                return -1
            }, ie = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", ae = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", oe = ae.replace("w", "w#"), re = "\\[" + ne + "*(" + ae + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ne + "*\\]", se = ":(" + ae + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)", le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"), de = new RegExp("^" + ne + "*," + ne + "*"), ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), ue = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), he = new RegExp(se), pe = new RegExp("^" + oe + "$"), fe = {ID: new RegExp("^#(" + ae + ")"),CLASS: new RegExp("^\\.(" + ae + ")"),TAG: new RegExp("^(" + ae.replace("w", "w*") + ")"),ATTR: new RegExp("^" + re),PSEUDO: new RegExp("^" + se),CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),bool: new RegExp("^(?:" + ie + ")$", "i"),needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")}, me = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, ve = /^[^{]+\{\s*\[native \w/, ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, we = /[+~]/, be = /'|\\/g, xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), _e = function(t, e, i) {
                var n = "0x" + e - 65536;
                return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            };
            try {
                K.apply(G = te.call(R.childNodes), R.childNodes), G[R.childNodes.length].nodeType
            } catch (Te) {
                K = {apply: G.length ? function(t, e) {
                        J.apply(t, te.call(e))
                    } : function(t, e) {
                        for (var i = t.length, n = 0; t[i++] = e[n++]; )
                            ;
                        t.length = i - 1
                    }}
            }
            x = e.support = {}, k = e.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return e ? "HTML" !== e.nodeName : !1
            }, E = e.setDocument = function(t) {
                var e, i = t ? t.ownerDocument || t : R, n = i.defaultView;
                return i !== P && 9 === i.nodeType && i.documentElement ? (P = i, j = i.documentElement, I = !k(i), n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", function() {
                    E()
                }, !1) : n.attachEvent && n.attachEvent("onunload", function() {
                    E()
                })), x.attributes = a(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), x.getElementsByTagName = a(function(t) {
                    return t.appendChild(i.createComment("")), !t.getElementsByTagName("*").length
                }), x.getElementsByClassName = ve.test(i.getElementsByClassName) && a(function(t) {
                    return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
                }), x.getById = a(function(t) {
                    return j.appendChild(t).id = $, !i.getElementsByName || !i.getElementsByName($).length
                }), x.getById ? (_.find.ID = function(t, e) {
                    if (typeof e.getElementById !== U && I) {
                        var i = e.getElementById(t);
                        return i && i.parentNode ? [i] : []
                    }
                }, _.filter.ID = function(t) {
                    var e = t.replace(xe, _e);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete _.find.ID, _.filter.ID = function(t) {
                    var e = t.replace(xe, _e);
                    return function(t) {
                        var i = typeof t.getAttributeNode !== U && t.getAttributeNode("id");
                        return i && i.value === e
                    }
                }), _.find.TAG = x.getElementsByTagName ? function(t, e) {
                    return typeof e.getElementsByTagName !== U ? e.getElementsByTagName(t) : void 0
                } : function(t, e) {
                    var i, n = [], a = 0, o = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; i = o[a++]; )
                            1 === i.nodeType && n.push(i);
                        return n
                    }
                    return o
                }, _.find.CLASS = x.getElementsByClassName && function(t, e) {
                    return typeof e.getElementsByClassName !== U && I ? e.getElementsByClassName(t) : void 0
                }, z = [], D = [], (x.qsa = ve.test(i.querySelectorAll)) && (a(function(t) {
                    t.innerHTML = "<select msallowclip=''><option selected=''></option></select>", t.querySelectorAll("[msallowclip^='']").length && D.push("[*^$]=" + ne + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || D.push("\\[" + ne + "*(?:value|" + ie + ")"), t.querySelectorAll(":checked").length || D.push(":checked")
                }), a(function(t) {
                    var e = i.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && D.push("name" + ne + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || D.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), D.push(",.*:")
                })), (x.matchesSelector = ve.test(N = j.matches || j.webkitMatchesSelector || j.mozMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && a(function(t) {
                    x.disconnectedMatch = N.call(t, "div"), N.call(t, "[s!='']:x"), z.push("!=", se)
                }), D = D.length && new RegExp(D.join("|")), z = z.length && new RegExp(z.join("|")), e = ve.test(j.compareDocumentPosition), H = e || ve.test(j.contains) ? function(t, e) {
                    var i = 9 === t.nodeType ? t.documentElement : t, n = e && e.parentNode;
                    return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode; )
                            if (e === t)
                                return !0;
                    return !1
                }, Q = e ? function(t, e) {
                    if (t === e)
                        return A = !0, 0;
                    var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !x.sortDetached && e.compareDocumentPosition(t) === n ? t === i || t.ownerDocument === R && H(R, t) ? -1 : e === i || e.ownerDocument === R && H(R, e) ? 1 : L ? ee.call(L, t) - ee.call(L, e) : 0 : 4 & n ? -1 : 1)
                } : function(t, e) {
                    if (t === e)
                        return A = !0, 0;
                    var n, a = 0, o = t.parentNode, s = e.parentNode, l = [t], d = [e];
                    if (!o || !s)
                        return t === i ? -1 : e === i ? 1 : o ? -1 : s ? 1 : L ? ee.call(L, t) - ee.call(L, e) : 0;
                    if (o === s)
                        return r(t, e);
                    for (n = t; n = n.parentNode; )
                        l.unshift(n);
                    for (n = e; n = n.parentNode; )
                        d.unshift(n);
                    for (; l[a] === d[a]; )
                        a++;
                    return a ? r(l[a], d[a]) : l[a] === R ? -1 : d[a] === R ? 1 : 0
                }, i) : P
            }, e.matches = function(t, i) {
                return e(t, null, null, i)
            }, e.matchesSelector = function(t, i) {
                if ((t.ownerDocument || t) !== P && E(t), i = i.replace(ue, "='$1']"), !(!x.matchesSelector || !I || z && z.test(i) || D && D.test(i)))
                    try {
                        var n = N.call(t, i);
                        if (n || x.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                            return n
                    } catch (a) {
                    }
                return e(i, P, null, [t]).length > 0
            }, e.contains = function(t, e) {
                return (t.ownerDocument || t) !== P && E(t), H(t, e)
            }, e.attr = function(t, e) {
                (t.ownerDocument || t) !== P && E(t);
                var i = _.attrHandle[e.toLowerCase()], n = i && V.call(_.attrHandle, e.toLowerCase()) ? i(t, e, !I) : void 0;
                return void 0 !== n ? n : x.attributes || !I ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }, e.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function(t) {
                var e, i = [], n = 0, a = 0;
                if (A = !x.detectDuplicates, L = !x.sortStable && t.slice(0), t.sort(Q), A) {
                    for (; e = t[a++]; )
                        e === t[a] && (n = i.push(a));
                    for (; n--; )
                        t.splice(i[n], 1)
                }
                return L = null, t
            }, T = e.getText = function(t) {
                var e, i = "", n = 0, a = t.nodeType;
                if (a) {
                    if (1 === a || 9 === a || 11 === a) {
                        if ("string" == typeof t.textContent)
                            return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling)
                            i += T(t)
                    } else if (3 === a || 4 === a)
                        return t.nodeValue
                } else
                    for (; e = t[n++]; )
                        i += T(e);
                return i
            }, _ = e.selectors = {cacheLength: 50,createPseudo: n,match: fe,attrHandle: {},find: {},relative: {">": {dir: "parentNode",first: !0}," ": {dir: "parentNode"},"+": {dir: "previousSibling",first: !0},"~": {dir: "previousSibling"}},preFilter: {ATTR: function(t) {
                        return t[1] = t[1].replace(xe, _e), t[3] = (t[3] || t[4] || t[5] || "").replace(xe, _e), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    },PSEUDO: function(t) {
                        var e, i = !t[6] && t[2];
                        return fe.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && he.test(i) && (e = C(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                    }},filter: {TAG: function(t) {
                        var e = t.replace(xe, _e).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },CLASS: function(t) {
                        var e = W[t + " "];
                        return e || (e = new RegExp("(^|" + ne + ")" + t + "(" + ne + "|$)")) && W(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== U && t.getAttribute("class") || "")
                        })
                    },ATTR: function(t, i, n) {
                        return function(a) {
                            var o = e.attr(a, t);
                            return null == o ? "!=" === i : i ? (o += "", "=" === i ? o === n : "!=" === i ? o !== n : "^=" === i ? n && 0 === o.indexOf(n) : "*=" === i ? n && o.indexOf(n) > -1 : "$=" === i ? n && o.slice(-n.length) === n : "~=" === i ? (" " + o + " ").indexOf(n) > -1 : "|=" === i ? o === n || o.slice(0, n.length + 1) === n + "-" : !1) : !0
                        }
                    },CHILD: function(t, e, i, n, a) {
                        var o = "nth" !== t.slice(0, 3), r = "last" !== t.slice(-4), s = "of-type" === e;
                        return 1 === n && 0 === a ? function(t) {
                            return !!t.parentNode
                        } : function(e, i, l) {
                            var d, c, u, h, p, f, m = o !== r ? "nextSibling" : "previousSibling", g = e.parentNode, v = s && e.nodeName.toLowerCase(), y = !l && !s;
                            if (g) {
                                if (o) {
                                    for (; m; ) {
                                        for (u = e; u = u[m]; )
                                            if (s ? u.nodeName.toLowerCase() === v : 1 === u.nodeType)
                                                return !1;
                                        f = m = "only" === t && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [r ? g.firstChild : g.lastChild], r && y) {
                                    for (c = g[$] || (g[$] = {}), d = c[t] || [], p = d[0] === F && d[1], h = d[0] === F && d[2], u = p && g.childNodes[p]; u = ++p && u && u[m] || (h = p = 0) || f.pop(); )
                                        if (1 === u.nodeType && ++h && u === e) {
                                            c[t] = [F, p, h];
                                            break
                                        }
                                } else if (y && (d = (e[$] || (e[$] = {}))[t]) && d[0] === F)
                                    h = d[1];
                                else
                                    for (; (u = ++p && u && u[m] || (h = p = 0) || f.pop()) && ((s ? u.nodeName.toLowerCase() !== v : 1 !== u.nodeType) || !++h || (y && ((u[$] || (u[$] = {}))[t] = [F, h]), u !== e)); )
                                        ;
                                return h -= a, h === n || h % n === 0 && h / n >= 0
                            }
                        }
                    },PSEUDO: function(t, i) {
                        var a, o = _.pseudos[t] || _.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return o[$] ? o(i) : o.length > 1 ? (a = [t, t, "", i], _.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) {
                            for (var n, a = o(t, i), r = a.length; r--; )
                                n = ee.call(t, a[r]), t[n] = !(e[n] = a[r])
                        }) : function(t) {
                            return o(t, 0, a)
                        }) : o
                    }},pseudos: {not: n(function(t) {
                        var e = [], i = [], a = S(t.replace(le, "$1"));
                        return a[$] ? n(function(t, e, i, n) {
                            for (var o, r = a(t, null, n, []), s = t.length; s--; )
                                (o = r[s]) && (t[s] = !(e[s] = o))
                        }) : function(t, n, o) {
                            return e[0] = t, a(e, null, o, i), !i.pop()
                        }
                    }),has: n(function(t) {
                        return function(i) {
                            return e(t, i).length > 0
                        }
                    }),contains: n(function(t) {
                        return function(e) {
                            return (e.textContent || e.innerText || T(e)).indexOf(t) > -1
                        }
                    }),lang: n(function(t) {
                        return pe.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(xe, _e).toLowerCase(), function(e) {
                            var i;
                            do
                                if (i = I ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                    return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-");
                            while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                    }),target: function(e) {
                        var i = t.location && t.location.hash;
                        return i && i.slice(1) === e.id
                    },root: function(t) {
                        return t === j
                    },focus: function(t) {
                        return t === P.activeElement && (!P.hasFocus || P.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },enabled: function(t) {
                        return t.disabled === !1
                    },disabled: function(t) {
                        return t.disabled === !0
                    },checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                    },empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6)
                                return !1;
                        return !0
                    },parent: function(t) {
                        return !_.pseudos.empty(t)
                    },header: function(t) {
                        return ge.test(t.nodeName)
                    },input: function(t) {
                        return me.test(t.nodeName)
                    },button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },first: d(function() {
                        return [0]
                    }),last: d(function(t, e) {
                        return [e - 1]
                    }),eq: d(function(t, e, i) {
                        return [0 > i ? i + e : i]
                    }),even: d(function(t, e) {
                        for (var i = 0; e > i; i += 2)
                            t.push(i);
                        return t
                    }),odd: d(function(t, e) {
                        for (var i = 1; e > i; i += 2)
                            t.push(i);
                        return t
                    }),lt: d(function(t, e, i) {
                        for (var n = 0 > i ? i + e : i; --n >= 0; )
                            t.push(n);
                        return t
                    }),gt: d(function(t, e, i) {
                        for (var n = 0 > i ? i + e : i; ++n < e; )
                            t.push(n);
                        return t
                    })}}, _.pseudos.nth = _.pseudos.eq;
            for (b in {radio: !0,checkbox: !0,file: !0,password: !0,image: !0})
                _.pseudos[b] = s(b);
            for (b in {submit: !0,reset: !0})
                _.pseudos[b] = l(b);
            return u.prototype = _.filters = _.pseudos, _.setFilters = new u, C = e.tokenize = function(t, i) {
                var n, a, o, r, s, l, d, c = B[t + " "];
                if (c)
                    return i ? 0 : c.slice(0);
                for (s = t, l = [], d = _.preFilter; s; ) {
                    (!n || (a = de.exec(s))) && (a && (s = s.slice(a[0].length) || s), l.push(o = [])), n = !1, (a = ce.exec(s)) && (n = a.shift(), o.push({value: n,type: a[0].replace(le, " ")}), s = s.slice(n.length));
                    for (r in _.filter)
                        !(a = fe[r].exec(s)) || d[r] && !(a = d[r](a)) || (n = a.shift(), o.push({value: n,type: r,matches: a}), s = s.slice(n.length));
                    if (!n)
                        break
                }
                return i ? s.length : s ? e.error(t) : B(t, l).slice(0)
            }, S = e.compile = function(t, e) {
                var i, n = [], a = [], o = X[t + " "];
                if (!o) {
                    for (e || (e = C(t)), i = e.length; i--; )
                        o = y(e[i]), o[$] ? n.push(o) : a.push(o);
                    o = X(t, w(a, n)), o.selector = t
                }
                return o
            }, O = e.select = function(t, e, i, n) {
                var a, o, r, s, l, d = "function" == typeof t && t, u = !n && C(t = d.selector || t);
                if (i = i || [], 1 === u.length) {
                    if (o = u[0] = u[0].slice(0), o.length > 2 && "ID" === (r = o[0]).type && x.getById && 9 === e.nodeType && I && _.relative[o[1].type]) {
                        if (e = (_.find.ID(r.matches[0].replace(xe, _e), e) || [])[0], !e)
                            return i;
                        d && (e = e.parentNode), t = t.slice(o.shift().value.length)
                    }
                    for (a = fe.needsContext.test(t) ? 0 : o.length; a-- && (r = o[a], !_.relative[s = r.type]); )
                        if ((l = _.find[s]) && (n = l(r.matches[0].replace(xe, _e), we.test(o[0].type) && c(e.parentNode) || e))) {
                            if (o.splice(a, 1), t = n.length && h(o), !t)
                                return K.apply(i, n), i;
                            break
                        }
                }
                return (d || S(t, u))(n, e, !I, i, we.test(t) && c(e.parentNode) || e), i
            }, x.sortStable = $.split("").sort(Q).join("") === $, x.detectDuplicates = !!A, E(), x.sortDetached = a(function(t) {
                return 1 & t.compareDocumentPosition(P.createElement("div"))
            }), a(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function(t, e, i) {
                return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), x.attributes && a(function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || o("value", function(t, e, i) {
                return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
            }), a(function(t) {
                return null == t.getAttribute("disabled")
            }) || o(ie, function(t, e, i) {
                var n;
                return i ? void 0 : t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }), e
        }(t);
        ae.find = de, ae.expr = de.selectors, ae.expr[":"] = ae.expr.pseudos, ae.unique = de.uniqueSort, ae.text = de.getText, ae.isXMLDoc = de.isXML, ae.contains = de.contains;
        var ce = ae.expr.match.needsContext, ue = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, he = /^.[^:#\[\.,]*$/;
        ae.filter = function(t, e, i) {
            var n = e[0];
            return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? ae.find.matchesSelector(n, t) ? [n] : [] : ae.find.matches(t, ae.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }, ae.fn.extend({find: function(t) {
                var e, i = [], n = this, a = n.length;
                if ("string" != typeof t)
                    return this.pushStack(ae(t).filter(function() {
                        for (e = 0; a > e; e++)
                            if (ae.contains(n[e], this))
                                return !0
                    }));
                for (e = 0; a > e; e++)
                    ae.find(t, n[e], i);
                return i = this.pushStack(a > 1 ? ae.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
            },filter: function(t) {
                return this.pushStack(n(this, t || [], !1))
            },not: function(t) {
                return this.pushStack(n(this, t || [], !0))
            },is: function(t) {
                return !!n(this, "string" == typeof t && ce.test(t) ? ae(t) : t || [], !1).length
            }});
        var pe, fe = t.document, me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ge = ae.fn.init = function(t, e) {
            var i, n;
            if (!t)
                return this;
            if ("string" == typeof t) {
                if (i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : me.exec(t), !i || !i[1] && e)
                    return !e || e.jquery ? (e || pe).find(t) : this.constructor(e).find(t);
                if (i[1]) {
                    if (e = e instanceof ae ? e[0] : e, ae.merge(this, ae.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : fe, !0)), ue.test(i[1]) && ae.isPlainObject(e))
                        for (i in e)
                            ae.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                    return this
                }
                if (n = fe.getElementById(i[2]), n && n.parentNode) {
                    if (n.id !== i[2])
                        return pe.find(t);
                    this.length = 1, this[0] = n
                }
                return this.context = fe, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ae.isFunction(t) ? "undefined" != typeof pe.ready ? pe.ready(t) : t(ae) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), ae.makeArray(t, this))
        };
        ge.prototype = ae.fn, pe = ae(fe);
        var ve = /^(?:parents|prev(?:Until|All))/, ye = {children: !0,contents: !0,next: !0,prev: !0};
        ae.extend({dir: function(t, e, i) {
                for (var n = [], a = t[e]; a && 9 !== a.nodeType && (void 0 === i || 1 !== a.nodeType || !ae(a).is(i)); )
                    1 === a.nodeType && n.push(a), a = a[e];
                return n
            },sibling: function(t, e) {
                for (var i = []; t; t = t.nextSibling)
                    1 === t.nodeType && t !== e && i.push(t);
                return i
            }}), ae.fn.extend({has: function(t) {
                var e, i = ae(t, this), n = i.length;
                return this.filter(function() {
                    for (e = 0; n > e; e++)
                        if (ae.contains(this, i[e]))
                            return !0
                })
            },closest: function(t, e) {
                for (var i, n = 0, a = this.length, o = [], r = ce.test(t) || "string" != typeof t ? ae(t, e || this.context) : 0; a > n; n++)
                    for (i = this[n]; i && i !== e; i = i.parentNode)
                        if (i.nodeType < 11 && (r ? r.index(i) > -1 : 1 === i.nodeType && ae.find.matchesSelector(i, t))) {
                            o.push(i);
                            break
                        }
                return this.pushStack(o.length > 1 ? ae.unique(o) : o)
            },index: function(t) {
                return t ? "string" == typeof t ? ae.inArray(this[0], ae(t)) : ae.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },add: function(t, e) {
                return this.pushStack(ae.unique(ae.merge(this.get(), ae(t, e))))
            },addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }}), ae.each({parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },parents: function(t) {
                return ae.dir(t, "parentNode")
            },parentsUntil: function(t, e, i) {
                return ae.dir(t, "parentNode", i)
            },next: function(t) {
                return a(t, "nextSibling")
            },prev: function(t) {
                return a(t, "previousSibling")
            },nextAll: function(t) {
                return ae.dir(t, "nextSibling")
            },prevAll: function(t) {
                return ae.dir(t, "previousSibling")
            },nextUntil: function(t, e, i) {
                return ae.dir(t, "nextSibling", i)
            },prevUntil: function(t, e, i) {
                return ae.dir(t, "previousSibling", i)
            },siblings: function(t) {
                return ae.sibling((t.parentNode || {}).firstChild, t)
            },children: function(t) {
                return ae.sibling(t.firstChild)
            },contents: function(t) {
                return ae.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : ae.merge([], t.childNodes)
            }}, function(t, e) {
            ae.fn[t] = function(i, n) {
                var a = ae.map(this, e, i);
                return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (a = ae.filter(n, a)), this.length > 1 && (ye[t] || (a = ae.unique(a)), ve.test(t) && (a = a.reverse())), this.pushStack(a)
            }
        });
        var we = /\S+/g, be = {};
        ae.Callbacks = function(t) {
            t = "string" == typeof t ? be[t] || o(t) : ae.extend({}, t);
            var e, i, n, a, r, s, l = [], d = !t.once && [], c = function(o) {
                for (i = t.memory && o, n = !0, r = s || 0, s = 0, a = l.length, e = !0; l && a > r; r++)
                    if (l[r].apply(o[0], o[1]) === !1 && t.stopOnFalse) {
                        i = !1;
                        break
                    }
                e = !1, l && (d ? d.length && c(d.shift()) : i ? l = [] : u.disable())
            }, u = {add: function() {
                    if (l) {
                        var n = l.length;
                        !function o(e) {
                            ae.each(e, function(e, i) {
                                var n = ae.type(i);
                                "function" === n ? t.unique && u.has(i) || l.push(i) : i && i.length && "string" !== n && o(i)
                            })
                        }(arguments), e ? a = l.length : i && (s = n, c(i))
                    }
                    return this
                },remove: function() {
                    return l && ae.each(arguments, function(t, i) {
                        for (var n; (n = ae.inArray(i, l, n)) > -1; )
                            l.splice(n, 1), e && (a >= n && a--, r >= n && r--)
                    }), this
                },has: function(t) {
                    return t ? ae.inArray(t, l) > -1 : !(!l || !l.length)
                },empty: function() {
                    return l = [], a = 0, this
                },disable: function() {
                    return l = d = i = void 0, this
                },disabled: function() {
                    return !l
                },lock: function() {
                    return d = void 0, i || u.disable(), this
                },locked: function() {
                    return !d
                },fireWith: function(t, i) {
                    return !l || n && !d || (i = i || [], i = [t, i.slice ? i.slice() : i], e ? d.push(i) : c(i)), this
                },fire: function() {
                    return u.fireWith(this, arguments), this
                },fired: function() {
                    return !!n
                }};
            return u
        }, ae.extend({Deferred: function(t) {
                var e = [["resolve", "done", ae.Callbacks("once memory"), "resolved"], ["reject", "fail", ae.Callbacks("once memory"), "rejected"], ["notify", "progress", ae.Callbacks("memory")]], i = "pending", n = {state: function() {
                        return i
                    },always: function() {
                        return a.done(arguments).fail(arguments), this
                    },then: function() {
                        var t = arguments;
                        return ae.Deferred(function(i) {
                            ae.each(e, function(e, o) {
                                var r = ae.isFunction(t[e]) && t[e];
                                a[o[1]](function() {
                                    var t = r && r.apply(this, arguments);
                                    t && ae.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[o[0] + "With"](this === n ? i.promise() : this, r ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },promise: function(t) {
                        return null != t ? ae.extend(t, n) : n
                    }}, a = {};
                return n.pipe = n.then, ae.each(e, function(t, o) {
                    var r = o[2], s = o[3];
                    n[o[1]] = r.add, s && r.add(function() {
                        i = s
                    }, e[1 ^ t][2].disable, e[2][2].lock), a[o[0]] = function() {
                        return a[o[0] + "With"](this === a ? n : this, arguments), this
                    }, a[o[0] + "With"] = r.fireWith
                }), n.promise(a), t && t.call(a, a), a
            },when: function(t) {
                var e, i, n, a = 0, o = V.call(arguments), r = o.length, s = 1 !== r || t && ae.isFunction(t.promise) ? r : 0, l = 1 === s ? t : ae.Deferred(), d = function(t, i, n) {
                    return function(a) {
                        i[t] = this, n[t] = arguments.length > 1 ? V.call(arguments) : a, n === e ? l.notifyWith(i, n) : --s || l.resolveWith(i, n)
                    }
                };
                if (r > 1)
                    for (e = new Array(r), i = new Array(r), n = new Array(r); r > a; a++)
                        o[a] && ae.isFunction(o[a].promise) ? o[a].promise().done(d(a, n, o)).fail(l.reject).progress(d(a, i, e)) : --s;
                return s || l.resolveWith(n, o), l.promise()
            }});
        var xe;
        ae.fn.ready = function(t) {
            return ae.ready.promise().done(t), this
        }, ae.extend({isReady: !1,readyWait: 1,holdReady: function(t) {
                t ? ae.readyWait++ : ae.ready(!0)
            },ready: function(t) {
                if (t === !0 ? !--ae.readyWait : !ae.isReady) {
                    if (!fe.body)
                        return setTimeout(ae.ready);
                    ae.isReady = !0, t !== !0 && --ae.readyWait > 0 || (xe.resolveWith(fe, [ae]), ae.fn.triggerHandler && (ae(fe).triggerHandler("ready"), ae(fe).off("ready")))
                }
            }}), ae.ready.promise = function(e) {
            if (!xe)
                if (xe = ae.Deferred(), "complete" === fe.readyState)
                    setTimeout(ae.ready);
                else if (fe.addEventListener)
                    fe.addEventListener("DOMContentLoaded", s, !1), t.addEventListener("load", s, !1);
                else {
                    fe.attachEvent("onreadystatechange", s), t.attachEvent("onload", s);
                    var i = !1;
                    try {
                        i = null == t.frameElement && fe.documentElement
                    } catch (n) {
                    }
                    i && i.doScroll && !function a() {
                        if (!ae.isReady) {
                            try {
                                i.doScroll("left")
                            } catch (t) {
                                return setTimeout(a, 50)
                            }
                            r(), ae.ready()
                        }
                    }()
                }
            return xe.promise(e)
        };
        var _e, Te = "undefined";
        for (_e in ae(ie))
            break;
        ie.ownLast = "0" !== _e, ie.inlineBlockNeedsLayout = !1, ae(function() {
            var t, e, i, n;
            i = fe.getElementsByTagName("body")[0], i && i.style && (e = fe.createElement("div"), n = fe.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), typeof e.style.zoom !== Te && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ie.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (i.style.zoom = 1)), i.removeChild(n))
        }), function() {
            var t = fe.createElement("div");
            if (null == ie.deleteExpando) {
                ie.deleteExpando = !0;
                try {
                    delete t.test
                } catch (e) {
                    ie.deleteExpando = !1
                }
            }
            t = null
        }(), ae.acceptData = function(t) {
            var e = ae.noData[(t.nodeName + " ").toLowerCase()], i = +t.nodeType || 1;
            return 1 !== i && 9 !== i ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
        };
        var ke = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Ce = /([A-Z])/g;
        ae.extend({cache: {},noData: {"applet ": !0,"embed ": !0,"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData: function(t) {
                return t = t.nodeType ? ae.cache[t[ae.expando]] : t[ae.expando], !!t && !d(t)
            },data: function(t, e, i) {
                return c(t, e, i)
            },removeData: function(t, e) {
                return u(t, e)
            },_data: function(t, e, i) {
                return c(t, e, i, !0)
            },_removeData: function(t, e) {
                return u(t, e, !0)
            }}), ae.fn.extend({data: function(t, e) {
                var i, n, a, o = this[0], r = o && o.attributes;
                if (void 0 === t) {
                    if (this.length && (a = ae.data(o), 1 === o.nodeType && !ae._data(o, "parsedAttrs"))) {
                        for (i = r.length; i--; )
                            r[i] && (n = r[i].name, 0 === n.indexOf("data-") && (n = ae.camelCase(n.slice(5)), l(o, n, a[n])));
                        ae._data(o, "parsedAttrs", !0)
                    }
                    return a
                }
                return "object" == typeof t ? this.each(function() {
                    ae.data(this, t)
                }) : arguments.length > 1 ? this.each(function() {
                    ae.data(this, t, e)
                }) : o ? l(o, t, ae.data(o, t)) : void 0
            },removeData: function(t) {
                return this.each(function() {
                    ae.removeData(this, t)
                })
            }}), ae.extend({queue: function(t, e, i) {
                var n;
                return t ? (e = (e || "fx") + "queue", n = ae._data(t, e), i && (!n || ae.isArray(i) ? n = ae._data(t, e, ae.makeArray(i)) : n.push(i)), n || []) : void 0
            },dequeue: function(t, e) {
                e = e || "fx";
                var i = ae.queue(t, e), n = i.length, a = i.shift(), o = ae._queueHooks(t, e), r = function() {
                    ae.dequeue(t, e)
                };
                "inprogress" === a && (a = i.shift(), n--), a && ("fx" === e && i.unshift("inprogress"), delete o.stop, a.call(t, r, o)), !n && o && o.empty.fire()
            },_queueHooks: function(t, e) {
                var i = e + "queueHooks";
                return ae._data(t, i) || ae._data(t, i, {empty: ae.Callbacks("once memory").add(function() {
                        ae._removeData(t, e + "queue"), ae._removeData(t, i)
                    })})
            }}), ae.fn.extend({queue: function(t, e) {
                var i = 2;
                return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? ae.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var i = ae.queue(this, t, e);
                    ae._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && ae.dequeue(this, t)
                })
            },dequeue: function(t) {
                return this.each(function() {
                    ae.dequeue(this, t)
                })
            },clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },promise: function(t, e) {
                var i, n = 1, a = ae.Deferred(), o = this, r = this.length, s = function() {
                    --n || a.resolveWith(o, [o])
                };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; r--; )
                    i = ae._data(o[r], t + "queueHooks"), i && i.empty && (n++, i.empty.add(s));
                return s(), a.promise(e)
            }});
        var Se = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Oe = ["Top", "Right", "Bottom", "Left"], Me = function(t, e) {
            return t = e || t, "none" === ae.css(t, "display") || !ae.contains(t.ownerDocument, t)
        }, Le = ae.access = function(t, e, i, n, a, o, r) {
            var s = 0, l = t.length, d = null == i;
            if ("object" === ae.type(i)) {
                a = !0;
                for (s in i)
                    ae.access(t, e, s, i[s], !0, o, r)
            } else if (void 0 !== n && (a = !0, ae.isFunction(n) || (r = !0), d && (r ? (e.call(t, n), e = null) : (d = e, e = function(t, e, i) {
                return d.call(ae(t), i)
            })), e))
                for (; l > s; s++)
                    e(t[s], i, r ? n : n.call(t[s], s, e(t[s], i)));
            return a ? t : d ? e.call(t) : l ? e(t[0], i) : o
        }, Ae = /^(?:checkbox|radio)$/i;
        !function() {
            var t = fe.createElement("input"), e = fe.createElement("div"), i = fe.createDocumentFragment();
            if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ie.leadingWhitespace = 3 === e.firstChild.nodeType, ie.tbody = !e.getElementsByTagName("tbody").length, ie.htmlSerialize = !!e.getElementsByTagName("link").length, ie.html5Clone = "<:nav></:nav>" !== fe.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, i.appendChild(t), ie.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", ie.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, i.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", ie.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, ie.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function() {
                ie.noCloneEvent = !1
            }), e.cloneNode(!0).click()), null == ie.deleteExpando) {
                ie.deleteExpando = !0;
                try {
                    delete e.test
                } catch (n) {
                    ie.deleteExpando = !1
                }
            }
        }(), function() {
            var e, i, n = fe.createElement("div");
            for (e in {submit: !0,change: !0,focusin: !0})
                i = "on" + e, (ie[e + "Bubbles"] = i in t) || (n.setAttribute(i, "t"), ie[e + "Bubbles"] = n.attributes[i].expando === !1);
            n = null
        }();
        var Ee = /^(?:input|select|textarea)$/i, Pe = /^key/, je = /^(?:mouse|pointer|contextmenu)|click/, Ie = /^(?:focusinfocus|focusoutblur)$/, De = /^([^.]*)(?:\.(.+)|)$/;
        ae.event = {global: {},add: function(t, e, i, n, a) {
                var o, r, s, l, d, c, u, h, p, f, m, g = ae._data(t);
                if (g) {
                    for (i.handler && (l = i, i = l.handler, a = l.selector), i.guid || (i.guid = ae.guid++), (r = g.events) || (r = g.events = {}), (c = g.handle) || (c = g.handle = function(t) {
                        return typeof ae === Te || t && ae.event.triggered === t.type ? void 0 : ae.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = t), e = (e || "").match(we) || [""], s = e.length; s--; )
                        o = De.exec(e[s]) || [], p = m = o[1], f = (o[2] || "").split(".").sort(), p && (d = ae.event.special[p] || {}, p = (a ? d.delegateType : d.bindType) || p, d = ae.event.special[p] || {}, u = ae.extend({type: p,origType: m,data: n,handler: i,guid: i.guid,selector: a,needsContext: a && ae.expr.match.needsContext.test(a),namespace: f.join(".")}, l), (h = r[p]) || (h = r[p] = [], h.delegateCount = 0, d.setup && d.setup.call(t, n, f, c) !== !1 || (t.addEventListener ? t.addEventListener(p, c, !1) : t.attachEvent && t.attachEvent("on" + p, c))), d.add && (d.add.call(t, u), u.handler.guid || (u.handler.guid = i.guid)), a ? h.splice(h.delegateCount++, 0, u) : h.push(u), ae.event.global[p] = !0);
                    t = null
                }
            },remove: function(t, e, i, n, a) {
                var o, r, s, l, d, c, u, h, p, f, m, g = ae.hasData(t) && ae._data(t);
                if (g && (c = g.events)) {
                    for (e = (e || "").match(we) || [""], d = e.length; d--; )
                        if (s = De.exec(e[d]) || [], p = m = s[1], f = (s[2] || "").split(".").sort(), p) {
                            for (u = ae.event.special[p] || {}, p = (n ? u.delegateType : u.bindType) || p, h = c[p] || [], s = s[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = h.length; o--; )
                                r = h[o], !a && m !== r.origType || i && i.guid !== r.guid || s && !s.test(r.namespace) || n && n !== r.selector && ("**" !== n || !r.selector) || (h.splice(o, 1), r.selector && h.delegateCount--, u.remove && u.remove.call(t, r));
                            l && !h.length && (u.teardown && u.teardown.call(t, f, g.handle) !== !1 || ae.removeEvent(t, p, g.handle), delete c[p])
                        } else
                            for (p in c)
                                ae.event.remove(t, p + e[d], i, n, !0);
                    ae.isEmptyObject(c) && (delete g.handle, ae._removeData(t, "events"))
                }
            },trigger: function(e, i, n, a) {
                var o, r, s, l, d, c, u, h = [n || fe], p = ee.call(e, "type") ? e.type : e, f = ee.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = c = n = n || fe, 3 !== n.nodeType && 8 !== n.nodeType && !Ie.test(p + ae.event.triggered) && (p.indexOf(".") >= 0 && (f = p.split("."), p = f.shift(), f.sort()), r = p.indexOf(":") < 0 && "on" + p, e = e[ae.expando] ? e : new ae.Event(p, "object" == typeof e && e), e.isTrigger = a ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : ae.makeArray(i, [e]), d = ae.event.special[p] || {}, a || !d.trigger || d.trigger.apply(n, i) !== !1)) {
                    if (!a && !d.noBubble && !ae.isWindow(n)) {
                        for (l = d.delegateType || p, Ie.test(l + p) || (s = s.parentNode); s; s = s.parentNode)
                            h.push(s), c = s;
                        c === (n.ownerDocument || fe) && h.push(c.defaultView || c.parentWindow || t)
                    }
                    for (u = 0; (s = h[u++]) && !e.isPropagationStopped(); )
                        e.type = u > 1 ? l : d.bindType || p, o = (ae._data(s, "events") || {})[e.type] && ae._data(s, "handle"), o && o.apply(s, i), o = r && s[r], o && o.apply && ae.acceptData(s) && (e.result = o.apply(s, i), e.result === !1 && e.preventDefault());
                    if (e.type = p, !a && !e.isDefaultPrevented() && (!d._default || d._default.apply(h.pop(), i) === !1) && ae.acceptData(n) && r && n[p] && !ae.isWindow(n)) {
                        c = n[r], c && (n[r] = null), ae.event.triggered = p;
                        try {
                            n[p]()
                        } catch (m) {
                        }
                        ae.event.triggered = void 0, c && (n[r] = c)
                    }
                    return e.result
                }
            },dispatch: function(t) {
                t = ae.event.fix(t);
                var e, i, n, a, o, r = [], s = V.call(arguments), l = (ae._data(this, "events") || {})[t.type] || [], d = ae.event.special[t.type] || {};
                if (s[0] = t, t.delegateTarget = this, !d.preDispatch || d.preDispatch.call(this, t) !== !1) {
                    for (r = ae.event.handlers.call(this, t, l), e = 0; (a = r[e++]) && !t.isPropagationStopped(); )
                        for (t.currentTarget = a.elem, o = 0; (n = a.handlers[o++]) && !t.isImmediatePropagationStopped(); )
                            (!t.namespace_re || t.namespace_re.test(n.namespace)) && (t.handleObj = n, t.data = n.data, i = ((ae.event.special[n.origType] || {}).handle || n.handler).apply(a.elem, s), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                    return d.postDispatch && d.postDispatch.call(this, t), t.result
                }
            },handlers: function(t, e) {
                var i, n, a, o, r = [], s = e.delegateCount, l = t.target;
                if (s && l.nodeType && (!t.button || "click" !== t.type))
                    for (; l != this; l = l.parentNode || this)
                        if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                            for (a = [], o = 0; s > o; o++)
                                n = e[o], i = n.selector + " ", void 0 === a[i] && (a[i] = n.needsContext ? ae(i, this).index(l) >= 0 : ae.find(i, this, null, [l]).length), a[i] && a.push(n);
                            a.length && r.push({elem: l,handlers: a})
                        }
                return s < e.length && r.push({elem: this,handlers: e.slice(s)}), r
            },fix: function(t) {
                if (t[ae.expando])
                    return t;
                var e, i, n, a = t.type, o = t, r = this.fixHooks[a];
                for (r || (this.fixHooks[a] = r = je.test(a) ? this.mouseHooks : Pe.test(a) ? this.keyHooks : {}), n = r.props ? this.props.concat(r.props) : this.props, t = new ae.Event(o), e = n.length; e--; )
                    i = n[e], t[i] = o[i];
                return t.target || (t.target = o.srcElement || fe), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, r.filter ? r.filter(t, o) : t
            },props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks: {},keyHooks: {props: "char charCode key keyCode".split(" "),filter: function(t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }},mouseHooks: {props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter: function(t, e) {
                    var i, n, a, o = e.button, r = e.fromElement;
                    return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || fe, a = n.documentElement, i = n.body, t.pageX = e.clientX + (a && a.scrollLeft || i && i.scrollLeft || 0) - (a && a.clientLeft || i && i.clientLeft || 0), t.pageY = e.clientY + (a && a.scrollTop || i && i.scrollTop || 0) - (a && a.clientTop || i && i.clientTop || 0)), !t.relatedTarget && r && (t.relatedTarget = r === t.target ? e.toElement : r), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
                }},special: {load: {noBubble: !0},focus: {trigger: function() {
                        if (this !== f() && this.focus)
                            try {
                                return this.focus(), !1
                            } catch (t) {
                            }
                    },delegateType: "focusin"},blur: {trigger: function() {
                        return this === f() && this.blur ? (this.blur(), !1) : void 0
                    },delegateType: "focusout"},click: {trigger: function() {
                        return ae.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    },_default: function(t) {
                        return ae.nodeName(t.target, "a")
                    }},beforeunload: {postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }}},simulate: function(t, e, i, n) {
                var a = ae.extend(new ae.Event, i, {type: t,isSimulated: !0,originalEvent: {}});
                n ? ae.event.trigger(a, null, e) : ae.event.dispatch.call(e, a), a.isDefaultPrevented() && i.preventDefault()
            }}, ae.removeEvent = fe.removeEventListener ? function(t, e, i) {
            t.removeEventListener && t.removeEventListener(e, i, !1)
        } : function(t, e, i) {
            var n = "on" + e;
            t.detachEvent && (typeof t[n] === Te && (t[n] = null), t.detachEvent(n, i))
        }, ae.Event = function(t, e) {
            return this instanceof ae.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? h : p) : this.type = t, e && ae.extend(this, e), this.timeStamp = t && t.timeStamp || ae.now(), void (this[ae.expando] = !0)) : new ae.Event(t, e)
        }, ae.Event.prototype = {isDefaultPrevented: p,isPropagationStopped: p,isImmediatePropagationStopped: p,preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = h, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
            },stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = h, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
            },stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = h, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
            }}, ae.each({mouseenter: "mouseover",mouseleave: "mouseout",pointerenter: "pointerover",pointerleave: "pointerout"}, function(t, e) {
            ae.event.special[t] = {delegateType: e,bindType: e,handle: function(t) {
                    var i, n = this, a = t.relatedTarget, o = t.handleObj;
                    return (!a || a !== n && !ae.contains(n, a)) && (t.type = o.origType, i = o.handler.apply(this, arguments), t.type = e), i
                }}
        }), ie.submitBubbles || (ae.event.special.submit = {setup: function() {
                return ae.nodeName(this, "form") ? !1 : void ae.event.add(this, "click._submit keypress._submit", function(t) {
                    var e = t.target, i = ae.nodeName(e, "input") || ae.nodeName(e, "button") ? e.form : void 0;
                    i && !ae._data(i, "submitBubbles") && (ae.event.add(i, "submit._submit", function(t) {
                        t._submit_bubble = !0
                    }), ae._data(i, "submitBubbles", !0))
                })
            },postDispatch: function(t) {
                t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && ae.event.simulate("submit", this.parentNode, t, !0))
            },teardown: function() {
                return ae.nodeName(this, "form") ? !1 : void ae.event.remove(this, "._submit")
            }}), ie.changeBubbles || (ae.event.special.change = {setup: function() {
                return Ee.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ae.event.add(this, "propertychange._change", function(t) {
                    "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
                }), ae.event.add(this, "click._change", function(t) {
                    this._just_changed && !t.isTrigger && (this._just_changed = !1), ae.event.simulate("change", this, t, !0)
                })), !1) : void ae.event.add(this, "beforeactivate._change", function(t) {
                    var e = t.target;
                    Ee.test(e.nodeName) && !ae._data(e, "changeBubbles") && (ae.event.add(e, "change._change", function(t) {
                        !this.parentNode || t.isSimulated || t.isTrigger || ae.event.simulate("change", this.parentNode, t, !0)
                    }), ae._data(e, "changeBubbles", !0))
                })
            },handle: function(t) {
                var e = t.target;
                return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
            },teardown: function() {
                return ae.event.remove(this, "._change"), !Ee.test(this.nodeName)
            }}), ie.focusinBubbles || ae.each({focus: "focusin",blur: "focusout"}, function(t, e) {
            var i = function(t) {
                ae.event.simulate(e, t.target, ae.event.fix(t), !0)
            };
            ae.event.special[e] = {setup: function() {
                    var n = this.ownerDocument || this, a = ae._data(n, e);
                    a || n.addEventListener(t, i, !0), ae._data(n, e, (a || 0) + 1)
                },teardown: function() {
                    var n = this.ownerDocument || this, a = ae._data(n, e) - 1;
                    a ? ae._data(n, e, a) : (n.removeEventListener(t, i, !0), ae._removeData(n, e))
                }}
        }), ae.fn.extend({on: function(t, e, i, n, a) {
                var o, r;
                if ("object" == typeof t) {
                    "string" != typeof e && (i = i || e, e = void 0);
                    for (o in t)
                        this.on(o, e, i, t[o], a);
                    return this
                }
                if (null == i && null == n ? (n = e, i = e = void 0) : null == n && ("string" == typeof e ? (n = i, i = void 0) : (n = i, i = e, e = void 0)), n === !1)
                    n = p;
                else if (!n)
                    return this;
                return 1 === a && (r = n, n = function(t) {
                    return ae().off(t), r.apply(this, arguments)
                }, n.guid = r.guid || (r.guid = ae.guid++)), this.each(function() {
                    ae.event.add(this, t, n, i, e)
                })
            },one: function(t, e, i, n) {
                return this.on(t, e, i, n, 1)
            },off: function(t, e, i) {
                var n, a;
                if (t && t.preventDefault && t.handleObj)
                    return n = t.handleObj, ae(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                if ("object" == typeof t) {
                    for (a in t)
                        this.off(a, e, t[a]);
                    return this
                }
                return (e === !1 || "function" == typeof e) && (i = e, e = void 0), i === !1 && (i = p), this.each(function() {
                    ae.event.remove(this, t, i, e)
                })
            },trigger: function(t, e) {
                return this.each(function() {
                    ae.event.trigger(t, e, this)
                })
            },triggerHandler: function(t, e) {
                var i = this[0];
                return i ? ae.event.trigger(t, e, i, !0) : void 0
            }});
        var ze = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Ne = / jQuery\d+="(?:null|\d+)"/g, He = new RegExp("<(?:" + ze + ")[\\s/>]", "i"), $e = /^\s+/, Re = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Fe = /<([\w:]+)/, qe = /<tbody/i, We = /<|&#?\w+;/, Be = /<(?:script|style|link)/i, Xe = /checked\s*(?:[^=]|=\s*.checked.)/i, Qe = /^$|\/(?:java|ecma)script/i, Ue = /^true\/(.*)/, Ye = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Ve = {option: [1, "<select multiple='multiple'>", "</select>"],legend: [1, "<fieldset>", "</fieldset>"],area: [1, "<map>", "</map>"],param: [1, "<object>", "</object>"],thead: [1, "<table>", "</table>"],tr: [2, "<table><tbody>", "</tbody></table>"],col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],_default: ie.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]}, Ge = m(fe), Ze = Ge.appendChild(fe.createElement("div"));
        Ve.optgroup = Ve.option, Ve.tbody = Ve.tfoot = Ve.colgroup = Ve.caption = Ve.thead, Ve.th = Ve.td, ae.extend({clone: function(t, e, i) {
                var n, a, o, r, s, l = ae.contains(t.ownerDocument, t);
                if (ie.html5Clone || ae.isXMLDoc(t) || !He.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (Ze.innerHTML = t.outerHTML, Ze.removeChild(o = Ze.firstChild)), !(ie.noCloneEvent && ie.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ae.isXMLDoc(t)))
                    for (n = g(o), s = g(t), r = 0; null != (a = s[r]); ++r)
                        n[r] && T(a, n[r]);
                if (e)
                    if (i)
                        for (s = s || g(t), n = n || g(o), r = 0; null != (a = s[r]); r++)
                            _(a, n[r]);
                    else
                        _(t, o);
                return n = g(o, "script"), n.length > 0 && x(n, !l && g(t, "script")), n = s = a = null, o
            },buildFragment: function(t, e, i, n) {
                for (var a, o, r, s, l, d, c, u = t.length, h = m(e), p = [], f = 0; u > f; f++)
                    if (o = t[f], o || 0 === o)
                        if ("object" === ae.type(o))
                            ae.merge(p, o.nodeType ? [o] : o);
                        else if (We.test(o)) {
                            for (s = s || h.appendChild(e.createElement("div")), l = (Fe.exec(o) || ["", ""])[1].toLowerCase(), c = Ve[l] || Ve._default, s.innerHTML = c[1] + o.replace(Re, "<$1></$2>") + c[2], a = c[0]; a--; )
                                s = s.lastChild;
                            if (!ie.leadingWhitespace && $e.test(o) && p.push(e.createTextNode($e.exec(o)[0])), !ie.tbody)
                                for (o = "table" !== l || qe.test(o) ? "<table>" !== c[1] || qe.test(o) ? 0 : s : s.firstChild, a = o && o.childNodes.length; a--; )
                                    ae.nodeName(d = o.childNodes[a], "tbody") && !d.childNodes.length && o.removeChild(d);
                            for (ae.merge(p, s.childNodes), s.textContent = ""; s.firstChild; )
                                s.removeChild(s.firstChild);
                            s = h.lastChild
                        } else
                            p.push(e.createTextNode(o));
                for (s && h.removeChild(s), ie.appendChecked || ae.grep(g(p, "input"), v), f = 0; o = p[f++]; )
                    if ((!n || -1 === ae.inArray(o, n)) && (r = ae.contains(o.ownerDocument, o), s = g(h.appendChild(o), "script"), r && x(s), i))
                        for (a = 0; o = s[a++]; )
                            Qe.test(o.type || "") && i.push(o);
                return s = null, h
            },cleanData: function(t, e) {
                for (var i, n, a, o, r = 0, s = ae.expando, l = ae.cache, d = ie.deleteExpando, c = ae.event.special; null != (i = t[r]); r++)
                    if ((e || ae.acceptData(i)) && (a = i[s], o = a && l[a])) {
                        if (o.events)
                            for (n in o.events)
                                c[n] ? ae.event.remove(i, n) : ae.removeEvent(i, n, o.handle);
                        l[a] && (delete l[a], d ? delete i[s] : typeof i.removeAttribute !== Te ? i.removeAttribute(s) : i[s] = null, Y.push(a))
                    }
            }}), ae.fn.extend({text: function(t) {
                return Le(this, function(t) {
                    return void 0 === t ? ae.text(this) : this.empty().append((this[0] && this[0].ownerDocument || fe).createTextNode(t))
                }, null, t, arguments.length)
            },append: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = y(this, t);
                        e.appendChild(t)
                    }
                })
            },prepend: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = y(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },before: function() {
                return this.domManip(arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },after: function() {
                return this.domManip(arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },remove: function(t, e) {
                for (var i, n = t ? ae.filter(t, this) : this, a = 0; null != (i = n[a]); a++)
                    e || 1 !== i.nodeType || ae.cleanData(g(i)), i.parentNode && (e && ae.contains(i.ownerDocument, i) && x(g(i, "script")), i.parentNode.removeChild(i));
                return this
            },empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) {
                    for (1 === t.nodeType && ae.cleanData(g(t, !1)); t.firstChild; )
                        t.removeChild(t.firstChild);
                    t.options && ae.nodeName(t, "select") && (t.options.length = 0)
                }
                return this
            },clone: function(t, e) {
                return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                    return ae.clone(this, t, e)
                })
            },html: function(t) {
                return Le(this, function(t) {
                    var e = this[0] || {}, i = 0, n = this.length;
                    if (void 0 === t)
                        return 1 === e.nodeType ? e.innerHTML.replace(Ne, "") : void 0;
                    if (!("string" != typeof t || Be.test(t) || !ie.htmlSerialize && He.test(t) || !ie.leadingWhitespace && $e.test(t) || Ve[(Fe.exec(t) || ["", ""])[1].toLowerCase()])) {
                        t = t.replace(Re, "<$1></$2>");
                        try {
                            for (; n > i; i++)
                                e = this[i] || {}, 1 === e.nodeType && (ae.cleanData(g(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (a) {
                        }
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },replaceWith: function() {
                var t = arguments[0];
                return this.domManip(arguments, function(e) {
                    t = this.parentNode, ae.cleanData(g(this)), t && t.replaceChild(e, this)
                }), t && (t.length || t.nodeType) ? this : this.remove()
            },detach: function(t) {
                return this.remove(t, !0)
            },domManip: function(t, e) {
                t = G.apply([], t);
                var i, n, a, o, r, s, l = 0, d = this.length, c = this, u = d - 1, h = t[0], p = ae.isFunction(h);
                if (p || d > 1 && "string" == typeof h && !ie.checkClone && Xe.test(h))
                    return this.each(function(i) {
                        var n = c.eq(i);
                        p && (t[0] = h.call(this, i, n.html())), n.domManip(t, e)
                    });
                if (d && (s = ae.buildFragment(t, this[0].ownerDocument, !1, this), i = s.firstChild, 1 === s.childNodes.length && (s = i), i)) {
                    for (o = ae.map(g(s, "script"), w), a = o.length; d > l; l++)
                        n = s, l !== u && (n = ae.clone(n, !0, !0), a && ae.merge(o, g(n, "script"))), e.call(this[l], n, l);
                    if (a)
                        for (r = o[o.length - 1].ownerDocument, ae.map(o, b), l = 0; a > l; l++)
                            n = o[l], Qe.test(n.type || "") && !ae._data(n, "globalEval") && ae.contains(r, n) && (n.src ? ae._evalUrl && ae._evalUrl(n.src) : ae.globalEval((n.text || n.textContent || n.innerHTML || "").replace(Ye, "")));
                    s = i = null
                }
                return this
            }}), ae.each({appendTo: "append",prependTo: "prepend",insertBefore: "before",insertAfter: "after",replaceAll: "replaceWith"}, function(t, e) {
            ae.fn[t] = function(t) {
                for (var i, n = 0, a = [], o = ae(t), r = o.length - 1; r >= n; n++)
                    i = n === r ? this : this.clone(!0), ae(o[n])[e](i), Z.apply(a, i.get());
                return this.pushStack(a)
            }
        });
        var Je, Ke = {};
        !function() {
            var t;
            ie.shrinkWrapBlocks = function() {
                if (null != t)
                    return t;
                t = !1;
                var e, i, n;
                return i = fe.getElementsByTagName("body")[0], i && i.style ? (e = fe.createElement("div"), n = fe.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), typeof e.style.zoom !== Te && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(fe.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), i.removeChild(n), t) : void 0
            }
        }();
        var ti, ei, ii = /^margin/, ni = new RegExp("^(" + Se + ")(?!px)[a-z%]+$", "i"), ai = /^(top|right|bottom|left)$/;
        t.getComputedStyle ? (ti = function(t) {
            return t.ownerDocument.defaultView.getComputedStyle(t, null)
        }, ei = function(t, e, i) {
            var n, a, o, r, s = t.style;
            return i = i || ti(t), r = i ? i.getPropertyValue(e) || i[e] : void 0, i && ("" !== r || ae.contains(t.ownerDocument, t) || (r = ae.style(t, e)), ni.test(r) && ii.test(e) && (n = s.width, a = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = r, r = i.width, s.width = n, s.minWidth = a, s.maxWidth = o)), void 0 === r ? r : r + ""
        }) : fe.documentElement.currentStyle && (ti = function(t) {
            return t.currentStyle
        }, ei = function(t, e, i) {
            var n, a, o, r, s = t.style;
            return i = i || ti(t), r = i ? i[e] : void 0, null == r && s && s[e] && (r = s[e]), ni.test(r) && !ai.test(e) && (n = s.left, a = t.runtimeStyle, o = a && a.left, o && (a.left = t.currentStyle.left), s.left = "fontSize" === e ? "1em" : r, r = s.pixelLeft + "px", s.left = n, o && (a.left = o)), void 0 === r ? r : r + "" || "auto"
        }), !function() {
            function e() {
                var e, i, n, a;
                i = fe.getElementsByTagName("body")[0], i && i.style && (e = fe.createElement("div"), n = fe.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = r = !1, l = !0, t.getComputedStyle && (o = "1%" !== (t.getComputedStyle(e, null) || {}).top, r = "4px" === (t.getComputedStyle(e, null) || {width: "4px"}).width, a = e.appendChild(fe.createElement("div")), a.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", a.style.marginRight = a.style.width = "0", e.style.width = "1px", l = !parseFloat((t.getComputedStyle(a, null) || {}).marginRight)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", a = e.getElementsByTagName("td"), a[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === a[0].offsetHeight, s && (a[0].style.display = "", a[1].style.display = "none", s = 0 === a[0].offsetHeight), i.removeChild(n))
            }
            var i, n, a, o, r, s, l;
            i = fe.createElement("div"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = i.getElementsByTagName("a")[0], (n = a && a.style) && (n.cssText = "float:left;opacity:.5", ie.opacity = "0.5" === n.opacity, ie.cssFloat = !!n.cssFloat, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === i.style.backgroundClip, ie.boxSizing = "" === n.boxSizing || "" === n.MozBoxSizing || "" === n.WebkitBoxSizing, ae.extend(ie, {reliableHiddenOffsets: function() {
                    return null == s && e(), s
                },boxSizingReliable: function() {
                    return null == r && e(), r
                },pixelPosition: function() {
                    return null == o && e(), o
                },reliableMarginRight: function() {
                    return null == l && e(), l
                }}))
        }(), ae.swap = function(t, e, i, n) {
            var a, o, r = {};
            for (o in e)
                r[o] = t.style[o], t.style[o] = e[o];
            a = i.apply(t, n || []);
            for (o in e)
                t.style[o] = r[o];
            return a
        };
        var oi = /alpha\([^)]*\)/i, ri = /opacity\s*=\s*([^)]*)/, si = /^(none|table(?!-c[ea]).+)/, li = new RegExp("^(" + Se + ")(.*)$", "i"), di = new RegExp("^([+-])=(" + Se + ")", "i"), ci = {position: "absolute",visibility: "hidden",display: "block"}, ui = {letterSpacing: "0",fontWeight: "400"}, hi = ["Webkit", "O", "Moz", "ms"];
        ae.extend({cssHooks: {opacity: {get: function(t, e) {
                        if (e) {
                            var i = ei(t, "opacity");
                            return "" === i ? "1" : i
                        }
                    }}},cssNumber: {columnCount: !0,fillOpacity: !0,flexGrow: !0,flexShrink: !0,fontWeight: !0,lineHeight: !0,opacity: !0,order: !0,orphans: !0,widows: !0,zIndex: !0,zoom: !0},cssProps: {"float": ie.cssFloat ? "cssFloat" : "styleFloat"},style: function(t, e, i, n) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var a, o, r, s = ae.camelCase(e), l = t.style;
                    if (e = ae.cssProps[s] || (ae.cssProps[s] = O(l, s)), r = ae.cssHooks[e] || ae.cssHooks[s], void 0 === i)
                        return r && "get" in r && void 0 !== (a = r.get(t, !1, n)) ? a : l[e];
                    if (o = typeof i, "string" === o && (a = di.exec(i)) && (i = (a[1] + 1) * a[2] + parseFloat(ae.css(t, e)), o = "number"), null != i && i === i && ("number" !== o || ae.cssNumber[s] || (i += "px"), ie.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(r && "set" in r && void 0 === (i = r.set(t, i, n)))))
                        try {
                            l[e] = i
                        } catch (d) {
                        }
                }
            },css: function(t, e, i, n) {
                var a, o, r, s = ae.camelCase(e);
                return e = ae.cssProps[s] || (ae.cssProps[s] = O(t.style, s)), r = ae.cssHooks[e] || ae.cssHooks[s], r && "get" in r && (o = r.get(t, !0, i)), void 0 === o && (o = ei(t, e, n)), "normal" === o && e in ui && (o = ui[e]), "" === i || i ? (a = parseFloat(o), i === !0 || ae.isNumeric(a) ? a || 0 : o) : o
            }}), ae.each(["height", "width"], function(t, e) {
            ae.cssHooks[e] = {get: function(t, i, n) {
                    return i ? si.test(ae.css(t, "display")) && 0 === t.offsetWidth ? ae.swap(t, ci, function() {
                        return E(t, e, n)
                    }) : E(t, e, n) : void 0
                },set: function(t, i, n) {
                    var a = n && ti(t);
                    return L(t, i, n ? A(t, e, n, ie.boxSizing && "border-box" === ae.css(t, "boxSizing", !1, a), a) : 0)
                }}
        }), ie.opacity || (ae.cssHooks.opacity = {get: function(t, e) {
                return ri.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
            },set: function(t, e) {
                var i = t.style, n = t.currentStyle, a = ae.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "", o = n && n.filter || i.filter || "";
                i.zoom = 1, (e >= 1 || "" === e) && "" === ae.trim(o.replace(oi, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === e || n && !n.filter) || (i.filter = oi.test(o) ? o.replace(oi, a) : o + " " + a)
            }}), ae.cssHooks.marginRight = S(ie.reliableMarginRight, function(t, e) {
            return e ? ae.swap(t, {display: "inline-block"}, ei, [t, "marginRight"]) : void 0
        }), ae.each({margin: "",padding: "",border: "Width"}, function(t, e) {
            ae.cssHooks[t + e] = {expand: function(i) {
                    for (var n = 0, a = {}, o = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++)
                        a[t + Oe[n] + e] = o[n] || o[n - 2] || o[0];
                    return a
                }}, ii.test(t) || (ae.cssHooks[t + e].set = L)
        }), ae.fn.extend({css: function(t, e) {
                return Le(this, function(t, e, i) {
                    var n, a, o = {}, r = 0;
                    if (ae.isArray(e)) {
                        for (n = ti(t), a = e.length; a > r; r++)
                            o[e[r]] = ae.css(t, e[r], !1, n);
                        return o
                    }
                    return void 0 !== i ? ae.style(t, e, i) : ae.css(t, e)
                }, t, e, arguments.length > 1)
            },show: function() {
                return M(this, !0)
            },hide: function() {
                return M(this)
            },toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    Me(this) ? ae(this).show() : ae(this).hide()
                })
            }}), ae.Tween = P, P.prototype = {constructor: P,init: function(t, e, i, n, a, o) {
                this.elem = t, this.prop = i, this.easing = a || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = o || (ae.cssNumber[i] ? "" : "px")
            },cur: function() {
                var t = P.propHooks[this.prop];
                return t && t.get ? t.get(this) : P.propHooks._default.get(this)
            },run: function(t) {
                var e, i = P.propHooks[this.prop];
                return this.pos = e = this.options.duration ? ae.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : P.propHooks._default.set(this), this
            }}, P.prototype.init.prototype = P.prototype, P.propHooks = {_default: {get: function(t) {
                    var e;
                    return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = ae.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
                },set: function(t) {
                    ae.fx.step[t.prop] ? ae.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[ae.cssProps[t.prop]] || ae.cssHooks[t.prop]) ? ae.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                }}}, P.propHooks.scrollTop = P.propHooks.scrollLeft = {set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }}, ae.easing = {linear: function(t) {
                return t
            },swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }}, ae.fx = P.prototype.init, ae.fx.step = {};
        var pi, fi, mi = /^(?:toggle|show|hide)$/, gi = new RegExp("^(?:([+-])=|)(" + Se + ")([a-z%]*)$", "i"), vi = /queueHooks$/, yi = [z], wi = {"*": [function(t, e) {
                    var i = this.createTween(t, e), n = i.cur(), a = gi.exec(e), o = a && a[3] || (ae.cssNumber[t] ? "" : "px"), r = (ae.cssNumber[t] || "px" !== o && +n) && gi.exec(ae.css(i.elem, t)), s = 1, l = 20;
                    if (r && r[3] !== o) {
                        o = o || r[3], a = a || [], r = +n || 1;
                        do
                            s = s || ".5", r /= s, ae.style(i.elem, t, r + o);
                        while (s !== (s = i.cur() / n) && 1 !== s && --l)
                    }
                    return a && (r = i.start = +r || +n || 0, i.unit = o, i.end = a[1] ? r + (a[1] + 1) * a[2] : +a[2]), i
                }]};
        ae.Animation = ae.extend(H, {tweener: function(t, e) {
                ae.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                for (var i, n = 0, a = t.length; a > n; n++)
                    i = t[n], wi[i] = wi[i] || [], wi[i].unshift(e)
            },prefilter: function(t, e) {
                e ? yi.unshift(t) : yi.push(t)
            }}), ae.speed = function(t, e, i) {
            var n = t && "object" == typeof t ? ae.extend({}, t) : {complete: i || !i && e || ae.isFunction(t) && t,duration: t,easing: i && e || e && !ae.isFunction(e) && e};
            return n.duration = ae.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in ae.fx.speeds ? ae.fx.speeds[n.duration] : ae.fx.speeds._default, (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                ae.isFunction(n.old) && n.old.call(this), n.queue && ae.dequeue(this, n.queue)
            }, n
        }, ae.fn.extend({fadeTo: function(t, e, i, n) {
                return this.filter(Me).css("opacity", 0).show().end().animate({opacity: e}, t, i, n)
            },animate: function(t, e, i, n) {
                var a = ae.isEmptyObject(t), o = ae.speed(e, i, n), r = function() {
                    var e = H(this, ae.extend({}, t), o);
                    (a || ae._data(this, "finish")) && e.stop(!0)
                };
                return r.finish = r, a || o.queue === !1 ? this.each(r) : this.queue(o.queue, r)
            },stop: function(t, e, i) {
                var n = function(t) {
                    var e = t.stop;
                    delete t.stop, e(i)
                };
                return "string" != typeof t && (i = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                    var e = !0, a = null != t && t + "queueHooks", o = ae.timers, r = ae._data(this);
                    if (a)
                        r[a] && r[a].stop && n(r[a]);
                    else
                        for (a in r)
                            r[a] && r[a].stop && vi.test(a) && n(r[a]);
                    for (a = o.length; a--; )
                        o[a].elem !== this || null != t && o[a].queue !== t || (o[a].anim.stop(i), e = !1, o.splice(a, 1));
                    (e || !i) && ae.dequeue(this, t)
                })
            },finish: function(t) {
                return t !== !1 && (t = t || "fx"), this.each(function() {
                    var e, i = ae._data(this), n = i[t + "queue"], a = i[t + "queueHooks"], o = ae.timers, r = n ? n.length : 0;
                    for (i.finish = !0, ae.queue(this, t, []), a && a.stop && a.stop.call(this, !0), e = o.length; e--; )
                        o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; r > e; e++)
                        n[e] && n[e].finish && n[e].finish.call(this);
                    delete i.finish
                })
            }}), ae.each(["toggle", "show", "hide"], function(t, e) {
            var i = ae.fn[e];
            ae.fn[e] = function(t, n, a) {
                return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(I(e, !0), t, n, a)
            }
        }), ae.each({slideDown: I("show"),slideUp: I("hide"),slideToggle: I("toggle"),fadeIn: {opacity: "show"},fadeOut: {opacity: "hide"},fadeToggle: {opacity: "toggle"}}, function(t, e) {
            ae.fn[t] = function(t, i, n) {
                return this.animate(e, t, i, n)
            }
        }), ae.timers = [], ae.fx.tick = function() {
            var t, e = ae.timers, i = 0;
            for (pi = ae.now(); i < e.length; i++)
                t = e[i], t() || e[i] !== t || e.splice(i--, 1);
            e.length || ae.fx.stop(), pi = void 0
        }, ae.fx.timer = function(t) {
            ae.timers.push(t), t() ? ae.fx.start() : ae.timers.pop()
        }, ae.fx.interval = 13, ae.fx.start = function() {
            fi || (fi = setInterval(ae.fx.tick, ae.fx.interval))
        }, ae.fx.stop = function() {
            clearInterval(fi), fi = null
        }, ae.fx.speeds = {slow: 600,fast: 200,_default: 400}, ae.fn.delay = function(t, e) {
            return t = ae.fx ? ae.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, i) {
                var n = setTimeout(e, t);
                i.stop = function() {
                    clearTimeout(n)
                }
            })
        }, function() {
            var t, e, i, n, a;
            e = fe.createElement("div"), e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = e.getElementsByTagName("a")[0], i = fe.createElement("select"), a = i.appendChild(fe.createElement("option")), t = e.getElementsByTagName("input")[0], n.style.cssText = "top:1px", ie.getSetAttribute = "t" !== e.className, ie.style = /top/.test(n.getAttribute("style")), ie.hrefNormalized = "/a" === n.getAttribute("href"), ie.checkOn = !!t.value, ie.optSelected = a.selected, ie.enctype = !!fe.createElement("form").enctype, i.disabled = !0, ie.optDisabled = !a.disabled, t = fe.createElement("input"), t.setAttribute("value", ""), ie.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), ie.radioValue = "t" === t.value
        }();
        var bi = /\r/g;
        ae.fn.extend({val: function(t) {
                var e, i, n, a = this[0];
                return arguments.length ? (n = ae.isFunction(t), this.each(function(i) {
                    var a;
                    1 === this.nodeType && (a = n ? t.call(this, i, ae(this).val()) : t, null == a ? a = "" : "number" == typeof a ? a += "" : ae.isArray(a) && (a = ae.map(a, function(t) {
                        return null == t ? "" : t + ""
                    })), e = ae.valHooks[this.type] || ae.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, a, "value") || (this.value = a))
                })) : a ? (e = ae.valHooks[a.type] || ae.valHooks[a.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(a, "value")) ? i : (i = a.value, "string" == typeof i ? i.replace(bi, "") : null == i ? "" : i)) : void 0
            }}), ae.extend({valHooks: {option: {get: function(t) {
                        var e = ae.find.attr(t, "value");
                        return null != e ? e : ae.trim(ae.text(t))
                    }},select: {get: function(t) {
                        for (var e, i, n = t.options, a = t.selectedIndex, o = "select-one" === t.type || 0 > a, r = o ? null : [], s = o ? a + 1 : n.length, l = 0 > a ? s : o ? a : 0; s > l; l++)
                            if (i = n[l], !(!i.selected && l !== a || (ie.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && ae.nodeName(i.parentNode, "optgroup"))) {
                                if (e = ae(i).val(), o)
                                    return e;
                                r.push(e)
                            }
                        return r
                    },set: function(t, e) {
                        for (var i, n, a = t.options, o = ae.makeArray(e), r = a.length; r--; )
                            if (n = a[r], ae.inArray(ae.valHooks.option.get(n), o) >= 0)
                                try {
                                    n.selected = i = !0
                                } catch (s) {
                                    n.scrollHeight
                                }
                            else
                                n.selected = !1;
                        return i || (t.selectedIndex = -1), a
                    }}}}), ae.each(["radio", "checkbox"], function() {
            ae.valHooks[this] = {set: function(t, e) {
                    return ae.isArray(e) ? t.checked = ae.inArray(ae(t).val(), e) >= 0 : void 0
                }}, ie.checkOn || (ae.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var xi, _i, Ti = ae.expr.attrHandle, ki = /^(?:checked|selected)$/i, Ci = ie.getSetAttribute, Si = ie.input;
        ae.fn.extend({attr: function(t, e) {
                return Le(this, ae.attr, t, e, arguments.length > 1)
            },removeAttr: function(t) {
                return this.each(function() {
                    ae.removeAttr(this, t)
                })
            }}), ae.extend({attr: function(t, e, i) {
                var n, a, o = t.nodeType;
                return t && 3 !== o && 8 !== o && 2 !== o ? typeof t.getAttribute === Te ? ae.prop(t, e, i) : (1 === o && ae.isXMLDoc(t) || (e = e.toLowerCase(), n = ae.attrHooks[e] || (ae.expr.match.bool.test(e) ? _i : xi)), void 0 === i ? n && "get" in n && null !== (a = n.get(t, e)) ? a : (a = ae.find.attr(t, e), null == a ? void 0 : a) : null !== i ? n && "set" in n && void 0 !== (a = n.set(t, i, e)) ? a : (t.setAttribute(e, i + ""), i) : void ae.removeAttr(t, e)) : void 0
            },removeAttr: function(t, e) {
                var i, n, a = 0, o = e && e.match(we);
                if (o && 1 === t.nodeType)
                    for (; i = o[a++]; )
                        n = ae.propFix[i] || i, ae.expr.match.bool.test(i) ? Si && Ci || !ki.test(i) ? t[n] = !1 : t[ae.camelCase("default-" + i)] = t[n] = !1 : ae.attr(t, i, ""), t.removeAttribute(Ci ? i : n)
            },attrHooks: {type: {set: function(t, e) {
                        if (!ie.radioValue && "radio" === e && ae.nodeName(t, "input")) {
                            var i = t.value;
                            return t.setAttribute("type", e), i && (t.value = i), e
                        }
                    }}}}), _i = {set: function(t, e, i) {
                return e === !1 ? ae.removeAttr(t, i) : Si && Ci || !ki.test(i) ? t.setAttribute(!Ci && ae.propFix[i] || i, i) : t[ae.camelCase("default-" + i)] = t[i] = !0, i
            }}, ae.each(ae.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var i = Ti[e] || ae.find.attr;
            Ti[e] = Si && Ci || !ki.test(e) ? function(t, e, n) {
                var a, o;
                return n || (o = Ti[e], Ti[e] = a, a = null != i(t, e, n) ? e.toLowerCase() : null, Ti[e] = o), a
            } : function(t, e, i) {
                return i ? void 0 : t[ae.camelCase("default-" + e)] ? e.toLowerCase() : null
            }
        }), Si && Ci || (ae.attrHooks.value = {set: function(t, e, i) {
                return ae.nodeName(t, "input") ? void (t.defaultValue = e) : xi && xi.set(t, e, i)
            }}), Ci || (xi = {set: function(t, e, i) {
                var n = t.getAttributeNode(i);
                return n || t.setAttributeNode(n = t.ownerDocument.createAttribute(i)), n.value = e += "", "value" === i || e === t.getAttribute(i) ? e : void 0
            }}, Ti.id = Ti.name = Ti.coords = function(t, e, i) {
            var n;
            return i ? void 0 : (n = t.getAttributeNode(e)) && "" !== n.value ? n.value : null
        }, ae.valHooks.button = {get: function(t, e) {
                var i = t.getAttributeNode(e);
                return i && i.specified ? i.value : void 0
            },set: xi.set}, ae.attrHooks.contenteditable = {set: function(t, e, i) {
                xi.set(t, "" === e ? !1 : e, i)
            }}, ae.each(["width", "height"], function(t, e) {
            ae.attrHooks[e] = {set: function(t, i) {
                    return "" === i ? (t.setAttribute(e, "auto"), i) : void 0
                }}
        })), ie.style || (ae.attrHooks.style = {get: function(t) {
                return t.style.cssText || void 0
            },set: function(t, e) {
                return t.style.cssText = e + ""
            }});
        var Oi = /^(?:input|select|textarea|button|object)$/i, Mi = /^(?:a|area)$/i;
        ae.fn.extend({prop: function(t, e) {
                return Le(this, ae.prop, t, e, arguments.length > 1)
            },removeProp: function(t) {
                return t = ae.propFix[t] || t, this.each(function() {
                    try {
                        this[t] = void 0, delete this[t]
                    } catch (e) {
                    }
                })
            }}), ae.extend({propFix: {"for": "htmlFor","class": "className"},prop: function(t, e, i) {
                var n, a, o, r = t.nodeType;
                return t && 3 !== r && 8 !== r && 2 !== r ? (o = 1 !== r || !ae.isXMLDoc(t), o && (e = ae.propFix[e] || e, a = ae.propHooks[e]), void 0 !== i ? a && "set" in a && void 0 !== (n = a.set(t, i, e)) ? n : t[e] = i : a && "get" in a && null !== (n = a.get(t, e)) ? n : t[e]) : void 0
            },propHooks: {tabIndex: {get: function(t) {
                        var e = ae.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : Oi.test(t.nodeName) || Mi.test(t.nodeName) && t.href ? 0 : -1
                    }}}}), ie.hrefNormalized || ae.each(["href", "src"], function(t, e) {
            ae.propHooks[e] = {get: function(t) {
                    return t.getAttribute(e, 4)
                }}
        }), ie.optSelected || (ae.propHooks.selected = {get: function(t) {
                var e = t.parentNode;
                return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
            }}), ae.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            ae.propFix[this.toLowerCase()] = this
        }), ie.enctype || (ae.propFix.enctype = "encoding");
        var Li = /[\t\r\n\f]/g;
        ae.fn.extend({addClass: function(t) {
                var e, i, n, a, o, r, s = 0, l = this.length, d = "string" == typeof t && t;
                if (ae.isFunction(t))
                    return this.each(function(e) {
                        ae(this).addClass(t.call(this, e, this.className))
                    });
                if (d)
                    for (e = (t || "").match(we) || []; l > s; s++)
                        if (i = this[s], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Li, " ") : " ")) {
                            for (o = 0; a = e[o++]; )
                                n.indexOf(" " + a + " ") < 0 && (n += a + " ");
                            r = ae.trim(n), i.className !== r && (i.className = r)
                        }
                return this
            },removeClass: function(t) {
                var e, i, n, a, o, r, s = 0, l = this.length, d = 0 === arguments.length || "string" == typeof t && t;
                if (ae.isFunction(t))
                    return this.each(function(e) {
                        ae(this).removeClass(t.call(this, e, this.className))
                    });
                if (d)
                    for (e = (t || "").match(we) || []; l > s; s++)
                        if (i = this[s], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Li, " ") : "")) {
                            for (o = 0; a = e[o++]; )
                                for (; n.indexOf(" " + a + " ") >= 0; )
                                    n = n.replace(" " + a + " ", " ");
                            r = t ? ae.trim(n) : "", i.className !== r && (i.className = r)
                        }
                return this
            },toggleClass: function(t, e) {
                var i = typeof t;
                return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : this.each(ae.isFunction(t) ? function(i) {
                    ae(this).toggleClass(t.call(this, i, this.className, e), e)
                } : function() {
                    if ("string" === i)
                        for (var e, n = 0, a = ae(this), o = t.match(we) || []; e = o[n++]; )
                            a.hasClass(e) ? a.removeClass(e) : a.addClass(e);
                    else
                        (i === Te || "boolean" === i) && (this.className && ae._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : ae._data(this, "__className__") || "")
                })
            },hasClass: function(t) {
                for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++)
                    if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(Li, " ").indexOf(e) >= 0)
                        return !0;
                return !1
            }}), ae.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
            ae.fn[e] = function(t, i) {
                return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
            }
        }), ae.fn.extend({hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            },bind: function(t, e, i) {
                return this.on(t, null, e, i)
            },unbind: function(t, e) {
                return this.off(t, null, e)
            },delegate: function(t, e, i, n) {
                return this.on(e, t, i, n)
            },undelegate: function(t, e, i) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
            }});
        var Ai = ae.now(), Ei = /\?/, Pi = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        ae.parseJSON = function(e) {
            if (t.JSON && t.JSON.parse)
                return t.JSON.parse(e + "");
            var i, n = null, a = ae.trim(e + "");
            return a && !ae.trim(a.replace(Pi, function(t, e, a, o) {
                return i && e && (n = 0), 0 === n ? t : (i = a || e, n += !o - !a, "")
            })) ? Function("return " + a)() : ae.error("Invalid JSON: " + e)
        }, ae.parseXML = function(e) {
            var i, n;
            if (!e || "string" != typeof e)
                return null;
            try {
                t.DOMParser ? (n = new DOMParser, i = n.parseFromString(e, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(e))
            } catch (a) {
                i = void 0
            }
            return i && i.documentElement && !i.getElementsByTagName("parsererror").length || ae.error("Invalid XML: " + e), i
        };
        var ji, Ii, Di = /#.*$/, zi = /([?&])_=[^&]*/, Ni = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Hi = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, $i = /^(?:GET|HEAD)$/, Ri = /^\/\//, Fi = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, qi = {}, Wi = {}, Bi = "*/".concat("*");
        try {
            Ii = location.href
        } catch (Xi) {
            Ii = fe.createElement("a"), Ii.href = "", Ii = Ii.href
        }
        ji = Fi.exec(Ii.toLowerCase()) || [], ae.extend({active: 0,lastModified: {},etag: {},ajaxSettings: {url: Ii,type: "GET",isLocal: Hi.test(ji[1]),global: !0,processData: !0,async: !0,contentType: "application/x-www-form-urlencoded; charset=UTF-8",accepts: {"*": Bi,text: "text/plain",html: "text/html",xml: "application/xml, text/xml",json: "application/json, text/javascript"},contents: {xml: /xml/,html: /html/,json: /json/},responseFields: {xml: "responseXML",text: "responseText",json: "responseJSON"},converters: {"* text": String,"text html": !0,"text json": ae.parseJSON,"text xml": ae.parseXML},flatOptions: {url: !0,context: !0}},ajaxSetup: function(t, e) {
                return e ? F(F(t, ae.ajaxSettings), e) : F(ae.ajaxSettings, t)
            },ajaxPrefilter: $(qi),ajaxTransport: $(Wi),ajax: function(t, e) {
                function i(t, e, i, n) {
                    var a, c, v, y, b, _ = e;
                    2 !== w && (w = 2, s && clearTimeout(s), d = void 0, r = n || "", x.readyState = t > 0 ? 4 : 0, a = t >= 200 && 300 > t || 304 === t, i && (y = q(u, x, i)), y = W(u, y, x, a), a ? (u.ifModified && (b = x.getResponseHeader("Last-Modified"), b && (ae.lastModified[o] = b), b = x.getResponseHeader("etag"), b && (ae.etag[o] = b)), 204 === t || "HEAD" === u.type ? _ = "nocontent" : 304 === t ? _ = "notmodified" : (_ = y.state, c = y.data, v = y.error, a = !v)) : (v = _, (t || !_) && (_ = "error", 0 > t && (t = 0))), x.status = t, x.statusText = (e || _) + "", a ? f.resolveWith(h, [c, _, x]) : f.rejectWith(h, [x, _, v]), x.statusCode(g), g = void 0, l && p.trigger(a ? "ajaxSuccess" : "ajaxError", [x, u, a ? c : v]), m.fireWith(h, [x, _]), l && (p.trigger("ajaxComplete", [x, u]), --ae.active || ae.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var n, a, o, r, s, l, d, c, u = ae.ajaxSetup({}, e), h = u.context || u, p = u.context && (h.nodeType || h.jquery) ? ae(h) : ae.event, f = ae.Deferred(), m = ae.Callbacks("once memory"), g = u.statusCode || {}, v = {}, y = {}, w = 0, b = "canceled", x = {readyState: 0,getResponseHeader: function(t) {
                        var e;
                        if (2 === w) {
                            if (!c)
                                for (c = {}; e = Ni.exec(r); )
                                    c[e[1].toLowerCase()] = e[2];
                            e = c[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },getAllResponseHeaders: function() {
                        return 2 === w ? r : null
                    },setRequestHeader: function(t, e) {
                        var i = t.toLowerCase();
                        return w || (t = y[i] = y[i] || t, v[t] = e), this
                    },overrideMimeType: function(t) {
                        return w || (u.mimeType = t), this
                    },statusCode: function(t) {
                        var e;
                        if (t)
                            if (2 > w)
                                for (e in t)
                                    g[e] = [g[e], t[e]];
                            else
                                x.always(t[x.status]);
                        return this
                    },abort: function(t) {
                        var e = t || b;
                        return d && d.abort(e), i(0, e), this
                    }};
                if (f.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, u.url = ((t || u.url || Ii) + "").replace(Di, "").replace(Ri, ji[1] + "//"), u.type = e.method || e.type || u.method || u.type, u.dataTypes = ae.trim(u.dataType || "*").toLowerCase().match(we) || [""], null == u.crossDomain && (n = Fi.exec(u.url.toLowerCase()), u.crossDomain = !(!n || n[1] === ji[1] && n[2] === ji[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (ji[3] || ("http:" === ji[1] ? "80" : "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = ae.param(u.data, u.traditional)), R(qi, u, e, x), 2 === w)
                    return x;
                l = u.global, l && 0 === ae.active++ && ae.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !$i.test(u.type), o = u.url, u.hasContent || (u.data && (o = u.url += (Ei.test(o) ? "&" : "?") + u.data, delete u.data), u.cache === !1 && (u.url = zi.test(o) ? o.replace(zi, "$1_=" + Ai++) : o + (Ei.test(o) ? "&" : "?") + "_=" + Ai++)), u.ifModified && (ae.lastModified[o] && x.setRequestHeader("If-Modified-Since", ae.lastModified[o]), ae.etag[o] && x.setRequestHeader("If-None-Match", ae.etag[o])), (u.data && u.hasContent && u.contentType !== !1 || e.contentType) && x.setRequestHeader("Content-Type", u.contentType), x.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + Bi + "; q=0.01" : "") : u.accepts["*"]);
                for (a in u.headers)
                    x.setRequestHeader(a, u.headers[a]);
                if (u.beforeSend && (u.beforeSend.call(h, x, u) === !1 || 2 === w))
                    return x.abort();
                b = "abort";
                for (a in {success: 1,error: 1,complete: 1})
                    x[a](u[a]);
                if (d = R(Wi, u, e, x)) {
                    x.readyState = 1, l && p.trigger("ajaxSend", [x, u]), u.async && u.timeout > 0 && (s = setTimeout(function() {
                        x.abort("timeout")
                    }, u.timeout));
                    try {
                        w = 1, d.send(v, i)
                    } catch (_) {
                        if (!(2 > w))
                            throw _;
                        i(-1, _)
                    }
                } else
                    i(-1, "No Transport");
                return x
            },getJSON: function(t, e, i) {
                return ae.get(t, e, i, "json")
            },getScript: function(t, e) {
                return ae.get(t, void 0, e, "script")
            }}), ae.each(["get", "post"], function(t, e) {
            ae[e] = function(t, i, n, a) {
                return ae.isFunction(i) && (a = a || n, n = i, i = void 0), ae.ajax({url: t,type: e,dataType: a,data: i,success: n})
            }
        }), ae.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            ae.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), ae._evalUrl = function(t) {
            return ae.ajax({url: t,type: "GET",dataType: "script",async: !1,global: !1,"throws": !0})
        }, ae.fn.extend({wrapAll: function(t) {
                if (ae.isFunction(t))
                    return this.each(function(e) {
                        ae(this).wrapAll(t.call(this, e))
                    });
                if (this[0]) {
                    var e = ae(t, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                        for (var t = this; t.firstChild && 1 === t.firstChild.nodeType; )
                            t = t.firstChild;
                        return t
                    }).append(this)
                }
                return this
            },wrapInner: function(t) {
                return this.each(ae.isFunction(t) ? function(e) {
                    ae(this).wrapInner(t.call(this, e))
                } : function() {
                    var e = ae(this), i = e.contents();
                    i.length ? i.wrapAll(t) : e.append(t)
                })
            },wrap: function(t) {
                var e = ae.isFunction(t);
                return this.each(function(i) {
                    ae(this).wrapAll(e ? t.call(this, i) : t)
                })
            },unwrap: function() {
                return this.parent().each(function() {
                    ae.nodeName(this, "body") || ae(this).replaceWith(this.childNodes)
                }).end()
            }}), ae.expr.filters.hidden = function(t) {
            return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !ie.reliableHiddenOffsets() && "none" === (t.style && t.style.display || ae.css(t, "display"))
        }, ae.expr.filters.visible = function(t) {
            return !ae.expr.filters.hidden(t)
        };
        var Qi = /%20/g, Ui = /\[\]$/, Yi = /\r?\n/g, Vi = /^(?:submit|button|image|reset|file)$/i, Gi = /^(?:input|select|textarea|keygen)/i;
        ae.param = function(t, e) {
            var i, n = [], a = function(t, e) {
                e = ae.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
            if (void 0 === e && (e = ae.ajaxSettings && ae.ajaxSettings.traditional), ae.isArray(t) || t.jquery && !ae.isPlainObject(t))
                ae.each(t, function() {
                    a(this.name, this.value)
                });
            else
                for (i in t)
                    B(i, t[i], e, a);
            return n.join("&").replace(Qi, "+")
        }, ae.fn.extend({serialize: function() {
                return ae.param(this.serializeArray())
            },serializeArray: function() {
                return this.map(function() {
                    var t = ae.prop(this, "elements");
                    return t ? ae.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !ae(this).is(":disabled") && Gi.test(this.nodeName) && !Vi.test(t) && (this.checked || !Ae.test(t))
                }).map(function(t, e) {
                    var i = ae(this).val();
                    return null == i ? null : ae.isArray(i) ? ae.map(i, function(t) {
                        return {name: e.name,value: t.replace(Yi, "\r\n")}
                    }) : {name: e.name,value: i.replace(Yi, "\r\n")}
                }).get()
            }}), ae.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function() {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && X() || Q()
        } : X;
        var Zi = 0, Ji = {}, Ki = ae.ajaxSettings.xhr();
        t.ActiveXObject && ae(t).on("unload", function() {
            for (var t in Ji)
                Ji[t](void 0, !0)
        }), ie.cors = !!Ki && "withCredentials" in Ki, Ki = ie.ajax = !!Ki, Ki && ae.ajaxTransport(function(t) {
            if (!t.crossDomain || ie.cors) {
                var e;
                return {send: function(i, n) {
                        var a, o = t.xhr(), r = ++Zi;
                        if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                            for (a in t.xhrFields)
                                o[a] = t.xhrFields[a];
                        t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                        for (a in i)
                            void 0 !== i[a] && o.setRequestHeader(a, i[a] + "");
                        o.send(t.hasContent && t.data || null), e = function(i, a) {
                            var s, l, d;
                            if (e && (a || 4 === o.readyState))
                                if (delete Ji[r], e = void 0, o.onreadystatechange = ae.noop, a)
                                    4 !== o.readyState && o.abort();
                                else {
                                    d = {}, s = o.status, "string" == typeof o.responseText && (d.text = o.responseText);
                                    try {
                                        l = o.statusText
                                    } catch (c) {
                                        l = ""
                                    }
                                    s || !t.isLocal || t.crossDomain ? 1223 === s && (s = 204) : s = d.text ? 200 : 404
                                }
                            d && n(s, l, d, o.getAllResponseHeaders())
                        }, t.async ? 4 === o.readyState ? setTimeout(e) : o.onreadystatechange = Ji[r] = e : e()
                    },abort: function() {
                        e && e(void 0, !0)
                    }}
            }
        }), ae.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents: {script: /(?:java|ecma)script/},converters: {"text script": function(t) {
                    return ae.globalEval(t), t
                }}}), ae.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
        }), ae.ajaxTransport("script", function(t) {
            if (t.crossDomain) {
                var e, i = fe.head || ae("head")[0] || fe.documentElement;
                return {send: function(n, a) {
                        e = fe.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function(t, i) {
                            (i || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, i || a(200, "success"))
                        }, i.insertBefore(e, i.firstChild)
                    },abort: function() {
                        e && e.onload(void 0, !0)
                    }}
            }
        });
        var tn = [], en = /(=)\?(?=&|$)|\?\?/;
        ae.ajaxSetup({jsonp: "callback",jsonpCallback: function() {
                var t = tn.pop() || ae.expando + "_" + Ai++;
                return this[t] = !0, t
            }}), ae.ajaxPrefilter("json jsonp", function(e, i, n) {
            var a, o, r, s = e.jsonp !== !1 && (en.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && en.test(e.data) && "data");
            return s || "jsonp" === e.dataTypes[0] ? (a = e.jsonpCallback = ae.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(en, "$1" + a) : e.jsonp !== !1 && (e.url += (Ei.test(e.url) ? "&" : "?") + e.jsonp + "=" + a), e.converters["script json"] = function() {
                return r || ae.error(a + " was not called"), r[0]
            }, e.dataTypes[0] = "json", o = t[a], t[a] = function() {
                r = arguments
            }, n.always(function() {
                t[a] = o, e[a] && (e.jsonpCallback = i.jsonpCallback, tn.push(a)), r && ae.isFunction(o) && o(r[0]), r = o = void 0
            }), "script") : void 0
        }), ae.parseHTML = function(t, e, i) {
            if (!t || "string" != typeof t)
                return null;
            "boolean" == typeof e && (i = e, e = !1), e = e || fe;
            var n = ue.exec(t), a = !i && [];
            return n ? [e.createElement(n[1])] : (n = ae.buildFragment([t], e, a), a && a.length && ae(a).remove(), ae.merge([], n.childNodes))
        };
        var nn = ae.fn.load;
        ae.fn.load = function(t, e, i) {
            if ("string" != typeof t && nn)
                return nn.apply(this, arguments);
            var n, a, o, r = this, s = t.indexOf(" ");
            return s >= 0 && (n = ae.trim(t.slice(s, t.length)), t = t.slice(0, s)), ae.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (o = "POST"), r.length > 0 && ae.ajax({url: t,type: o,dataType: "html",data: e}).done(function(t) {
                a = arguments, r.html(n ? ae("<div>").append(ae.parseHTML(t)).find(n) : t)
            }).complete(i && function(t, e) {
                r.each(i, a || [t.responseText, e, t])
            }), this
        }, ae.expr.filters.animated = function(t) {
            return ae.grep(ae.timers, function(e) {
                return t === e.elem
            }).length
        };
        var an = t.document.documentElement;
        ae.offset = {setOffset: function(t, e, i) {
                var n, a, o, r, s, l, d, c = ae.css(t, "position"), u = ae(t), h = {};
                "static" === c && (t.style.position = "relative"), s = u.offset(), o = ae.css(t, "top"), l = ae.css(t, "left"), d = ("absolute" === c || "fixed" === c) && ae.inArray("auto", [o, l]) > -1, d ? (n = u.position(), r = n.top, a = n.left) : (r = parseFloat(o) || 0, a = parseFloat(l) || 0), ae.isFunction(e) && (e = e.call(t, i, s)), null != e.top && (h.top = e.top - s.top + r), null != e.left && (h.left = e.left - s.left + a), "using" in e ? e.using.call(t, h) : u.css(h)
            }}, ae.fn.extend({offset: function(t) {
                if (arguments.length)
                    return void 0 === t ? this : this.each(function(e) {
                        ae.offset.setOffset(this, t, e)
                    });
                var e, i, n = {top: 0,left: 0}, a = this[0], o = a && a.ownerDocument;
                return o ? (e = o.documentElement, ae.contains(e, a) ? (typeof a.getBoundingClientRect !== Te && (n = a.getBoundingClientRect()), i = U(o), {top: n.top + (i.pageYOffset || e.scrollTop) - (e.clientTop || 0),left: n.left + (i.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)}) : n) : void 0
            },position: function() {
                if (this[0]) {
                    var t, e, i = {top: 0,left: 0}, n = this[0];
                    return "fixed" === ae.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ae.nodeName(t[0], "html") || (i = t.offset()), i.top += ae.css(t[0], "borderTopWidth", !0), i.left += ae.css(t[0], "borderLeftWidth", !0)), {top: e.top - i.top - ae.css(n, "marginTop", !0),left: e.left - i.left - ae.css(n, "marginLeft", !0)}
                }
            },offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent || an; t && !ae.nodeName(t, "html") && "static" === ae.css(t, "position"); )
                        t = t.offsetParent;
                    return t || an
                })
            }}), ae.each({scrollLeft: "pageXOffset",scrollTop: "pageYOffset"}, function(t, e) {
            var i = /Y/.test(e);
            ae.fn[t] = function(n) {
                return Le(this, function(t, n, a) {
                    var o = U(t);
                    return void 0 === a ? o ? e in o ? o[e] : o.document.documentElement[n] : t[n] : void (o ? o.scrollTo(i ? ae(o).scrollLeft() : a, i ? a : ae(o).scrollTop()) : t[n] = a)
                }, t, n, arguments.length, null)
            }
        }), ae.each(["top", "left"], function(t, e) {
            ae.cssHooks[e] = S(ie.pixelPosition, function(t, i) {
                return i ? (i = ei(t, e), ni.test(i) ? ae(t).position()[e] + "px" : i) : void 0
            })
        }), ae.each({Height: "height",Width: "width"}, function(t, e) {
            ae.each({padding: "inner" + t,content: e,"": "outer" + t}, function(i, n) {
                ae.fn[n] = function(n, a) {
                    var o = arguments.length && (i || "boolean" != typeof n), r = i || (n === !0 || a === !0 ? "margin" : "border");
                    return Le(this, function(e, i, n) {
                        var a;
                        return ae.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (a = e.documentElement, Math.max(e.body["scroll" + t], a["scroll" + t], e.body["offset" + t], a["offset" + t], a["client" + t])) : void 0 === n ? ae.css(e, i, r) : ae.style(e, i, n, r)
                    }, e, o ? n : void 0, o, null)
                }
            })
        }), ae.fn.size = function() {
            return this.length
        }, ae.fn.andSelf = ae.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return ae
        });
        var on = t.jQuery, rn = t.$;
        return ae.noConflict = function(e) {
            return t.$ === ae && (t.$ = rn), e && t.jQuery === ae && (t.jQuery = on), ae
        }, typeof e === Te && (t.jQuery = t.$ = ae), ae
    })
} catch (e) {
    console.error("Error in file:/media/jui/js/jquery.min.js; Error:" + e.message)
}
try {
    jQuery.noConflict()
} catch (e) {
    console.error("Error in file:/media/jui/js/jquery-noconflict.js; Error:" + e.message)
}
try {
    void 0 === jQuery.migrateMute && (jQuery.migrateMute = !0), function(t, e, i) {
        function n(i) {
            var n = e.console;
            o[i] || (o[i] = !0, t.migrateWarnings.push(i), n && n.warn && !t.migrateMute && (n.warn("JQMIGRATE: " + i), t.migrateTrace && n.trace && n.trace()))
        }
        function a(e, a, o, r) {
            if (Object.defineProperty)
                try {
                    return Object.defineProperty(e, a, {configurable: !0,enumerable: !0,get: function() {
                            return n(r), o
                        },set: function(t) {
                            n(r), o = t
                        }}), i
                } catch (s) {
                }
            t._definePropertyBroken = !0, e[a] = o
        }
        var o = {};
        t.migrateWarnings = [], !t.migrateMute && e.console && e.console.log && e.console.log("JQMIGRATE: Logging is active"), t.migrateTrace === i && (t.migrateTrace = !0), t.migrateReset = function() {
            o = {}, t.migrateWarnings.length = 0
        }, "BackCompat" === document.compatMode && n("jQuery is not compatible with Quirks Mode");
        var r = t("<input/>", {size: 1}).attr("size") && t.attrFn, s = t.attr, l = t.attrHooks.value && t.attrHooks.value.get || function() {
            return null
        }, d = t.attrHooks.value && t.attrHooks.value.set || function() {
            return i
        }, c = /^(?:input|button)$/i, u = /^[238]$/, h = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, p = /^(?:checked|selected)$/i;
        a(t, "attrFn", r || {}, "jQuery.attrFn is deprecated"), t.attr = function(e, a, o, l) {
            var d = a.toLowerCase(), f = e && e.nodeType;
            return l && (4 > s.length && n("jQuery.fn.attr( props, pass ) is deprecated"), e && !u.test(f) && (r ? a in r : t.isFunction(t.fn[a]))) ? t(e)[a](o) : ("type" === a && o !== i && c.test(e.nodeName) && e.parentNode && n("Can't change the 'type' of an input or button in IE 6/7/8"), !t.attrHooks[d] && h.test(d) && (t.attrHooks[d] = {get: function(e, n) {
                    var a, o = t.prop(e, n);
                    return o === !0 || "boolean" != typeof o && (a = e.getAttributeNode(n)) && a.nodeValue !== !1 ? n.toLowerCase() : i
                },set: function(e, i, n) {
                    var a;
                    return i === !1 ? t.removeAttr(e, n) : (a = t.propFix[n] || n, a in e && (e[a] = !0), e.setAttribute(n, n.toLowerCase())), n
                }}, p.test(d) && n("jQuery.fn.attr('" + d + "') may use property instead of attribute")), s.call(t, e, a, o))
        }, t.attrHooks.value = {get: function(t, e) {
                var i = (t.nodeName || "").toLowerCase();
                return "button" === i ? l.apply(this, arguments) : ("input" !== i && "option" !== i && n("jQuery.fn.attr('value') no longer gets properties"), e in t ? t.value : null)
            },set: function(t, e) {
                var a = (t.nodeName || "").toLowerCase();
                return "button" === a ? d.apply(this, arguments) : ("input" !== a && "option" !== a && n("jQuery.fn.attr('value', val) no longer sets properties"), t.value = e, i)
            }};
        var f, m, g = t.fn.init, v = t.parseJSON, y = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
        t.fn.init = function(e, i, a) {
            var o;
            return e && "string" == typeof e && !t.isPlainObject(i) && (o = y.exec(t.trim(e))) && o[0] && ("<" !== e.charAt(0) && n("$(html) HTML strings must start with '<' character"), o[3] && n("$(html) HTML text after last tag is ignored"), "#" === o[0].charAt(0) && (n("HTML string cannot start with a '#' character"), t.error("JQMIGRATE: Invalid selector string (XSS)")), i && i.context && (i = i.context), t.parseHTML) ? g.call(this, t.parseHTML(o[2], i, !0), i, a) : g.apply(this, arguments)
        }, t.fn.init.prototype = t.fn, t.parseJSON = function(t) {
            return t || null === t ? v.apply(this, arguments) : (n("jQuery.parseJSON requires a valid JSON string"), null)
        }, t.uaMatch = function(t) {
            t = t.toLowerCase();
            var e = /(chrome)[ \/]([\w.]+)/.exec(t) || /(webkit)[ \/]([\w.]+)/.exec(t) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t) || /(msie) ([\w.]+)/.exec(t) || 0 > t.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t) || [];
            return {browser: e[1] || "",version: e[2] || "0"}
        }, t.browser || (f = t.uaMatch(navigator.userAgent), m = {}, f.browser && (m[f.browser] = !0, m.version = f.version), m.chrome ? m.webkit = !0 : m.webkit && (m.safari = !0), t.browser = m), a(t, "browser", t.browser, "jQuery.browser is deprecated"), t.sub = function() {
            function e(t, i) {
                return new e.fn.init(t, i)
            }
            t.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function(n, a) {
                return a && a instanceof t && !(a instanceof e) && (a = e(a)), t.fn.init.call(this, n, a, i)
            }, e.fn.init.prototype = e.fn;
            var i = e(document);
            return n("jQuery.sub() is deprecated"), e
        }, t.ajaxSetup({converters: {"text json": t.parseJSON}});
        var w = t.fn.data;
        t.fn.data = function(e) {
            var a, o, r = this[0];
            return !r || "events" !== e || 1 !== arguments.length || (a = t.data(r, e), o = t._data(r, e), a !== i && a !== o || o === i) ? w.apply(this, arguments) : (n("Use of jQuery.fn.data('events') is deprecated"), o)
        };
        var b = /\/(java|ecma)script/i, x = t.fn.andSelf || t.fn.addBack;
        t.fn.andSelf = function() {
            return n("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), x.apply(this, arguments)
        }, t.clean || (t.clean = function(e, a, o, r) {
            a = a || document, a = !a.nodeType && a[0] || a, a = a.ownerDocument || a, n("jQuery.clean() is deprecated");
            var s, l, d, c, u = [];
            if (t.merge(u, t.buildFragment(e, a).childNodes), o)
                for (d = function(t) {
                    return !t.type || b.test(t.type) ? r ? r.push(t.parentNode ? t.parentNode.removeChild(t) : t) : o.appendChild(t) : i
                }, s = 0; null != (l = u[s]); s++)
                    t.nodeName(l, "script") && d(l) || (o.appendChild(l), l.getElementsByTagName !== i && (c = t.grep(t.merge([], l.getElementsByTagName("script")), d), u.splice.apply(u, [s + 1, 0].concat(c)), s += c.length));
            return u
        });
        var _ = t.event.add, T = t.event.remove, k = t.event.trigger, C = t.fn.toggle, S = t.fn.live, O = t.fn.die, M = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess", L = RegExp("\\b(?:" + M + ")\\b"), A = /(?:^|\s)hover(\.\S+|)\b/, E = function(e) {
            return "string" != typeof e || t.event.special.hover ? e : (A.test(e) && n("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), e && e.replace(A, "mouseenter$1 mouseleave$1"))
        };
        t.event.props && "attrChange" !== t.event.props[0] && t.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), t.event.dispatch && a(t.event, "handle", t.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), t.event.add = function(t, e, i, a, o) {
            t !== document && L.test(e) && n("AJAX events should be attached to document: " + e), _.call(this, t, E(e || ""), i, a, o)
        }, t.event.remove = function(t, e, i, n, a) {
            T.call(this, t, E(e) || "", i, n, a)
        }, t.fn.error = function() {
            var t = Array.prototype.slice.call(arguments, 0);
            return n("jQuery.fn.error() is deprecated"), t.splice(0, 0, "error"), arguments.length ? this.bind.apply(this, t) : (this.triggerHandler.apply(this, t), this)
        }, t.fn.toggle = function(e, i) {
            if (!t.isFunction(e) || !t.isFunction(i))
                return C.apply(this, arguments);
            n("jQuery.fn.toggle(handler, handler...) is deprecated");
            var a = arguments, o = e.guid || t.guid++, r = 0, s = function(i) {
                var n = (t._data(this, "lastToggle" + e.guid) || 0) % r;
                return t._data(this, "lastToggle" + e.guid, n + 1), i.preventDefault(), a[n].apply(this, arguments) || !1
            };
            for (s.guid = o; a.length > r; )
                a[r++].guid = o;
            return this.click(s)
        }, t.fn.live = function(e, i, a) {
            return n("jQuery.fn.live() is deprecated"), S ? S.apply(this, arguments) : (t(this.context).on(e, this.selector, i, a), this)
        }, t.fn.die = function(e, i) {
            return n("jQuery.fn.die() is deprecated"), O ? O.apply(this, arguments) : (t(this.context).off(e, this.selector || "**", i), this)
        }, t.event.trigger = function(t, e, i, a) {
            return i || L.test(t) || n("Global events are undocumented and deprecated"), k.call(this, t, e, i || document, a)
        }, t.each(M.split("|"), function(e, i) {
            t.event.special[i] = {setup: function() {
                    var e = this;
                    return e !== document && (t.event.add(document, i + "." + t.guid, function() {
                        t.event.trigger(i, null, e, !0)
                    }), t._data(this, i, t.guid++)), !1
                },teardown: function() {
                    return this !== document && t.event.remove(document, i + "." + t._data(this, i)), !1
                }}
        })
    }(jQuery, window)
} catch (e) {
    console.error("Error in file:/media/jui/js/jquery-migrate.min.js; Error:" + e.message)
}
try {
    window.WIDGETKIT_URL = "/media/widgetkit", function(t, e) {
        var i = {}, n = t(window);
        e.$widgetkit = {version: "1.4.9",lazyloaders: {},load: function(e) {
                if (!i[e]) {
                    var n = e + "?wkv=" + this.version;
                    i[e] = t.ajax({dataType: "script",cache: !0,url: n})
                }
                return i[e]
            },lazyload: function(e) {
                e = e || document, t("[data-widgetkit]", e).each(function() {
                    var e = t(this), i = e.data("widgetkit"), n = e.data("options") || {};
                    !e.data("wk-loaded") && $widgetkit.lazyloaders[i] && ($widgetkit.lazyloaders[i](e, n), e.data("wk-loaded", !0))
                })
            }}, t(function() {
            $widgetkit.lazyload()
        }), n.on("load", function() {
            n.resize()
        });
        for (var a = document.createElement("div"), o = a.style, r = !1, s = "-webkit- -moz- -o- -ms- -khtml-".split(" "), l = "Webkit Moz O ms Khtml".split(" "), d = "", c = 0; c < l.length; c++)
            if ("" === o[l[c] + "Transition"]) {
                r = l[c] + "Transition", d = s[c];
                break
            }
        $widgetkit.prefix = d, $widgetkit.support = {transition: r,css3d: r && "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix && !navigator.userAgent.match(/Chrome/i),canvas: function() {
                var t, e = document.createElement("canvas");
                return t = !(!e.getContext || !e.getContext("2d")), e = null, t
            }()}, $widgetkit.css3 = function(t) {
            return t = t || {}, t.transition && (t[d + "transition"] = t.transition), t.transform && (t[d + "transform"] = t.transform), t["transform-origin"] && (t[d + "transform-origin"] = t["transform-origin"]), t
        }, t.browser = t.browser || function(t) {
            t = t.toLowerCase();
            var e = {}, i = /(chrome)[ \/]([\w.]+)/.exec(t) || /(webkit)[ \/]([\w.]+)/.exec(t) || /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(t) || /(msie) ([\w.]+)/.exec(t) || t.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(t) || [];
            return i && (e[i[1]] = !0, e.version = i[2] || "0"), e
        }(navigator.userAgent), a = null
    }(jQuery, window), function(t) {
        var e = function() {
            try {
                return parseInt(navigator.appVersion.match(/MSIE (\d\.\d)/)[1], 10)
            } catch (t) {
            }
            return !1
        }();
        e && 9 > e && (t(document).ready(function() {
            t("body").addClass("wk-ie wk-ie" + e)
        }), t.each(["abbr", "article", "aside", "audio", "canvas", "details", "figcaption", "figure", "footer", "header", "hgroup", "mark", "meter", "nav", "output", "progress", "section", "summary", "time", "video"], function() {
            document.createElement(this)
        }))
    }(jQuery), function(t, e) {
        e.$widgetkit.trans = {__data: {},addDic: function(e) {
                t.extend(this.__data, e)
            },add: function(t, e) {
                this.__data[t] = e
            },get: function(t) {
                if (!this.__data[t])
                    return t;
                var e = 1 == arguments.length ? [] : Array.prototype.slice.call(arguments, 1), i = String(this.__data[t]);
                return this.printf(i, e)
            },printf: function(t, e) {
                if (!e)
                    return t;
                var i = "", n = t.split("%s");
                if (1 == n.length)
                    return t;
                for (var a = 0; a < e.length; a++)
                    n[a].lastIndexOf("%") == n[a].length - 1 && a != e.length - 1 && (n[a] += "s" + n.splice(a + 1, 1)[0]), i += n[a] + e[a];
                return i + n[n.length - 1]
            }}
    }(jQuery, window), function(t) {
        t.easing.jswing = t.easing.swing, t.extend(t.easing, {def: "easeOutQuad",swing: function(e, i, n, a, o) {
                return t.easing[t.easing.def](e, i, n, a, o)
            },easeInQuad: function(t, e, i, n, a) {
                return n * (e /= a) * e + i
            },easeOutQuad: function(t, e, i, n, a) {
                return -n * (e /= a) * (e - 2) + i
            },easeInOutQuad: function(t, e, i, n, a) {
                return (e /= a / 2) < 1 ? n / 2 * e * e + i : -n / 2 * (--e * (e - 2) - 1) + i
            },easeInCubic: function(t, e, i, n, a) {
                return n * (e /= a) * e * e + i
            },easeOutCubic: function(t, e, i, n, a) {
                return n * ((e = e / a - 1) * e * e + 1) + i
            },easeInOutCubic: function(t, e, i, n, a) {
                return (e /= a / 2) < 1 ? n / 2 * e * e * e + i : n / 2 * ((e -= 2) * e * e + 2) + i
            },easeInQuart: function(t, e, i, n, a) {
                return n * (e /= a) * e * e * e + i
            },easeOutQuart: function(t, e, i, n, a) {
                return -n * ((e = e / a - 1) * e * e * e - 1) + i
            },easeInOutQuart: function(t, e, i, n, a) {
                return (e /= a / 2) < 1 ? n / 2 * e * e * e * e + i : -n / 2 * ((e -= 2) * e * e * e - 2) + i
            },easeInQuint: function(t, e, i, n, a) {
                return n * (e /= a) * e * e * e * e + i
            },easeOutQuint: function(t, e, i, n, a) {
                return n * ((e = e / a - 1) * e * e * e * e + 1) + i
            },easeInOutQuint: function(t, e, i, n, a) {
                return (e /= a / 2) < 1 ? n / 2 * e * e * e * e * e + i : n / 2 * ((e -= 2) * e * e * e * e + 2) + i
            },easeInSine: function(t, e, i, n, a) {
                return -n * Math.cos(e / a * (Math.PI / 2)) + n + i
            },easeOutSine: function(t, e, i, n, a) {
                return n * Math.sin(e / a * (Math.PI / 2)) + i
            },easeInOutSine: function(t, e, i, n, a) {
                return -n / 2 * (Math.cos(Math.PI * e / a) - 1) + i
            },easeInExpo: function(t, e, i, n, a) {
                return 0 == e ? i : n * Math.pow(2, 10 * (e / a - 1)) + i
            },easeOutExpo: function(t, e, i, n, a) {
                return e == a ? i + n : n * (-Math.pow(2, -10 * e / a) + 1) + i
            },easeInOutExpo: function(t, e, i, n, a) {
                return 0 == e ? i : e == a ? i + n : (e /= a / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + i : n / 2 * (-Math.pow(2, -10 * --e) + 2) + i
            },easeInCirc: function(t, e, i, n, a) {
                return -n * (Math.sqrt(1 - (e /= a) * e) - 1) + i
            },easeOutCirc: function(t, e, i, n, a) {
                return n * Math.sqrt(1 - (e = e / a - 1) * e) + i
            },easeInOutCirc: function(t, e, i, n, a) {
                return (e /= a / 2) < 1 ? -n / 2 * (Math.sqrt(1 - e * e) - 1) + i : n / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + i
            },easeInElastic: function(t, e, i, n, a) {
                var o = 1.70158, r = 0, s = n;
                if (0 == e)
                    return i;
                if (1 == (e /= a))
                    return i + n;
                if (r || (r = .3 * a), s < Math.abs(n)) {
                    s = n;
                    var o = r / 4
                } else
                    var o = r / (2 * Math.PI) * Math.asin(n / s);
                return -(s * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * a - o) * Math.PI / r)) + i
            },easeOutElastic: function(t, e, i, n, a) {
                var o = 1.70158, r = 0, s = n;
                if (0 == e)
                    return i;
                if (1 == (e /= a))
                    return i + n;
                if (r || (r = .3 * a), s < Math.abs(n)) {
                    s = n;
                    var o = r / 4
                } else
                    var o = r / (2 * Math.PI) * Math.asin(n / s);
                return s * Math.pow(2, -10 * e) * Math.sin(2 * (e * a - o) * Math.PI / r) + n + i
            },easeInOutElastic: function(t, e, i, n, a) {
                var o = 1.70158, r = 0, s = n;
                if (0 == e)
                    return i;
                if (2 == (e /= a / 2))
                    return i + n;
                if (r || (r = .3 * a * 1.5), s < Math.abs(n)) {
                    s = n;
                    var o = r / 4
                } else
                    var o = r / (2 * Math.PI) * Math.asin(n / s);
                return 1 > e ? -.5 * s * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * a - o) * Math.PI / r) + i : s * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * (e * a - o) * Math.PI / r) * .5 + n + i
            },easeInBack: function(t, e, i, n, a, o) {
                return void 0 == o && (o = 1.70158), n * (e /= a) * e * ((o + 1) * e - o) + i
            },easeOutBack: function(t, e, i, n, a, o) {
                return void 0 == o && (o = 1.70158), n * ((e = e / a - 1) * e * ((o + 1) * e + o) + 1) + i
            },easeInOutBack: function(t, e, i, n, a, o) {
                return void 0 == o && (o = 1.70158), (e /= a / 2) < 1 ? n / 2 * e * e * (((o *= 1.525) + 1) * e - o) + i : n / 2 * ((e -= 2) * e * (((o *= 1.525) + 1) * e + o) + 2) + i
            },easeInBounce: function(e, i, n, a, o) {
                return a - t.easing.easeOutBounce(e, o - i, 0, a, o) + n
            },easeOutBounce: function(t, e, i, n, a) {
                return (e /= a) < 1 / 2.75 ? 7.5625 * n * e * e + i : 2 / 2.75 > e ? n * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + i : 2.5 / 2.75 > e ? n * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + i : n * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + i
            },easeInOutBounce: function(e, i, n, a, o) {
                return o / 2 > i ? .5 * t.easing.easeInBounce(e, 2 * i, 0, a, o) + n : .5 * t.easing.easeOutBounce(e, 2 * i - o, 0, a, o) + .5 * a + n
            }})
    }(jQuery), function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t : t(jQuery)
    }(function(t) {
        function e(e) {
            var r = e || window.event, s = l.call(arguments, 1), d = 0, u = 0, h = 0, p = 0, f = 0, m = 0;
            if (e = t.event.fix(r), e.type = "mousewheel", "detail" in r && (h = -1 * r.detail), "wheelDelta" in r && (h = r.wheelDelta), "wheelDeltaY" in r && (h = r.wheelDeltaY), "wheelDeltaX" in r && (u = -1 * r.wheelDeltaX), "axis" in r && r.axis === r.HORIZONTAL_AXIS && (u = -1 * h, h = 0), d = 0 === h ? u : h, "deltaY" in r && (h = -1 * r.deltaY, d = h), "deltaX" in r && (u = r.deltaX, 0 === h && (d = -1 * u)), 0 !== h || 0 !== u) {
                if (1 === r.deltaMode) {
                    var g = t.data(this, "mousewheel-line-height");
                    d *= g, h *= g, u *= g
                } else if (2 === r.deltaMode) {
                    var v = t.data(this, "mousewheel-page-height");
                    d *= v, h *= v, u *= v
                }
                if (p = Math.max(Math.abs(h), Math.abs(u)), (!o || o > p) && (o = p, n(r, p) && (o /= 40)), n(r, p) && (d /= 40, u /= 40, h /= 40), d = Math[d >= 1 ? "floor" : "ceil"](d / o), u = Math[u >= 1 ? "floor" : "ceil"](u / o), h = Math[h >= 1 ? "floor" : "ceil"](h / o), c.settings.normalizeOffset && this.getBoundingClientRect) {
                    var y = this.getBoundingClientRect();
                    f = e.clientX - y.left, m = e.clientY - y.top
                }
                return e.deltaX = u, e.deltaY = h, e.deltaFactor = o, e.offsetX = f, e.offsetY = m, e.deltaMode = 0, s.unshift(e, d, u, h), a && clearTimeout(a), a = setTimeout(i, 200), (t.event.dispatch || t.event.handle).apply(this, s)
            }
        }
        function i() {
            o = null
        }
        function n(t, e) {
            return c.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 === 0
        }
        var a, o, r = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], s = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], l = Array.prototype.slice;
        if (t.event.fixHooks)
            for (var d = r.length; d; )
                t.event.fixHooks[r[--d]] = t.event.mouseHooks;
        var c = t.event.special.mousewheel = {version: "3.1.11",setup: function() {
                if (this.addEventListener)
                    for (var i = s.length; i; )
                        this.addEventListener(s[--i], e, !1);
                else
                    this.onmousewheel = e;
                t.data(this, "mousewheel-line-height", c.getLineHeight(this)), t.data(this, "mousewheel-page-height", c.getPageHeight(this))
            },teardown: function() {
                if (this.removeEventListener)
                    for (var i = s.length; i; )
                        this.removeEventListener(s[--i], e, !1);
                else
                    this.onmousewheel = null;
                t.removeData(this, "mousewheel-line-height"), t.removeData(this, "mousewheel-page-height")
            },getLineHeight: function(e) {
                var i = t(e)["offsetParent" in t.fn ? "offsetParent" : "parent"]();
                return i.length || (i = t("body")), parseInt(i.css("fontSize"), 10)
            },getPageHeight: function(e) {
                return t(e).height()
            },settings: {adjustOldDeltas: !0,normalizeOffset: !0}};
        t.fn.extend({mousewheel: function(t) {
                return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
            },unmousewheel: function(t) {
                return this.unbind("mousewheel", t)
            }})
    }), function(t) {
        function e() {
            function t() {
                var t = document.createElement("INPUT");
                return t.type = "file", "files" in t
            }
            function e() {
                var t = new XMLHttpRequest;
                return !!(t && "upload" in t && "onprogress" in t.upload)
            }
            function i() {
                return !!window.FormData
            }
            return t() && e() && i()
        }
        if (t.support.ajaxupload = e(), t.support.ajaxupload && t.event.props.push("dataTransfer"), t.fn.uploadOnDrag = function(e) {
            return t.support.ajaxupload ? this.each(function() {
                var i = t(this), n = t.extend({action: "",single: !1,method: "POST",params: {},loadstart: function() {
                    },load: function() {
                    },loadend: function() {
                    },progress: function() {
                    },complete: function() {
                    },allcomplete: function() {
                    },readystatechange: function() {
                    }}, e);
                i.on("drop", function(e) {
                    function i(e, i) {
                        for (var n, a = new FormData, o = new XMLHttpRequest, r = 0; n = e[r]; r++)
                            a.append("files[]", n);
                        for (var s in i.params)
                            a.append(s, i.params[s]);
                        o.upload.addEventListener("progress", function(t) {
                            var e = t.loaded / t.total * 100;
                            i.progress(e, t)
                        }, !1), o.addEventListener("loadstart", function(t) {
                            i.loadstart(t)
                        }, !1), o.addEventListener("load", function(t) {
                            i.load(t)
                        }, !1), o.addEventListener("loadend", function(t) {
                            i.loadend(t)
                        }, !1), o.addEventListener("error", function(t) {
                            i.error(t)
                        }, !1), o.addEventListener("abort", function(t) {
                            i.abort(t)
                        }, !1), o.open(i.method, i.action, !0), o.onreadystatechange = function() {
                            if (i.readystatechange(o), 4 == o.readyState) {
                                var e = o.responseText;
                                if ("json" == i.type)
                                    try {
                                        e = t.parseJSON(e)
                                    } catch (n) {
                                        e = !1
                                    }
                                i.complete(e, o)
                            }
                        }, o.send(a)
                    }
                    e.stopPropagation(), e.preventDefault();
                    var a = e.dataTransfer.files;
                    if (n.single) {
                        var o = e.dataTransfer.files.length, r = 0, s = n.complete;
                        n.complete = function(t, e) {
                            r += 1, s(t, e), o > r ? i([a[r]], n) : n.allcomplete()
                        }, i([a[0]], n)
                    } else
                        i(a, n)
                }).on("dragover", function(t) {
                    t.stopPropagation(), t.preventDefault()
                })
            }) : this
        }, t.fn.ajaxform = function(e) {
            return t.support.ajaxupload ? this.each(function() {
                var i = t(this), n = t.extend({action: i.attr("action"),method: i.attr("method"),loadstart: function() {
                    },load: function() {
                    },loadend: function() {
                    },progress: function() {
                    },complete: function() {
                    },readystatechange: function() {
                    }}, e);
                i.on("submit", function(e) {
                    e.preventDefault();
                    var i = new FormData(this), a = new XMLHttpRequest;
                    i.append("formdata", "1"), a.upload.addEventListener("progress", function(t) {
                        var e = t.loaded / t.total * 100;
                        n.progress(e, t)
                    }, !1), a.addEventListener("loadstart", function(t) {
                        n.loadstart(t)
                    }, !1), a.addEventListener("load", function(t) {
                        n.load(t)
                    }, !1), a.addEventListener("loadend", function(t) {
                        n.loadend(t)
                    }, !1), a.addEventListener("error", function(t) {
                        n.error(t)
                    }, !1), a.addEventListener("abort", function(t) {
                        n.abort(t)
                    }, !1), a.open(n.method, n.action, !0), a.onreadystatechange = function() {
                        if (n.readystatechange(a), 4 == a.readyState) {
                            var e = a.responseText;
                            if ("json" == n.type)
                                try {
                                    e = t.parseJSON(e)
                                } catch (i) {
                                    e = !1
                                }
                            n.complete(e, a)
                        }
                    }, a.send(i)
                })
            }) : this
        }, !t.event.special.debouncedresize) {
            var i, n, a = t.event;
            i = a.special.debouncedresize = {setup: function() {
                    t(this).on("resize", i.handler)
                },teardown: function() {
                    t(this).off("resize", i.handler)
                },handler: function(t, e) {
                    var o = this, r = arguments, s = function() {
                        t.type = "debouncedresize", a.dispatch.apply(o, r)
                    };
                    n && clearTimeout(n), e ? s() : n = setTimeout(s, i.threshold)
                },threshold: 150}
        }
    }(jQuery), function(t, e, i) {
        function n(t) {
            return c.innerHTML = '&shy;<style media="' + t + '"> #mq-test-1 { width: 42px; }</style>', s.insertBefore(d, l), r = 42 == c.offsetWidth, s.removeChild(d), r
        }
        function a(t) {
            var e = n(t.media);
            if (t._listeners && t.matches != e) {
                t.matches = e;
                for (var i = 0, a = t._listeners.length; a > i; i++)
                    t._listeners[i](t)
            }
        }
        function o(t, e, i) {
            var n;
            return function() {
                var a = this, o = arguments, r = function() {
                    n = null, i || t.apply(a, o)
                }, s = i && !n;
                clearTimeout(n), n = setTimeout(r, e), s && t.apply(a, o)
            }
        }
        if (!e.matchMedia || t.userAgent.match(/(iPhone|iPod|iPad)/i)) {
            var r, s = i.documentElement, l = s.firstElementChild || s.firstChild, d = i.createElement("body"), c = i.createElement("div");
            c.id = "mq-test-1", c.style.cssText = "position:absolute;top:-100em", d.style.background = "none", d.appendChild(c), e.matchMedia = function(t) {
                var r, s = [];
                return r = {matches: n(t),media: t,_listeners: s,addListener: function(t) {
                        "function" == typeof t && s.push(t)
                    },removeListener: function(t) {
                        for (var e = 0, i = s.length; i > e; e++)
                            s[e] === t && delete s[e]
                    }}, e.addEventListener && e.addEventListener("resize", o(function() {
                    a(r)
                }, 150), !1), i.addEventListener && i.addEventListener("orientationchange", function() {
                    a(r)
                }, !1), r
            }
        }
    }(navigator, window, document), function(t, e, i) {
        if (!t.onMediaQuery) {
            var n = {}, a = e.matchMedia && e.matchMedia("only all").matches;
            t(i).ready(function() {
                for (var e in n) {
                    {
                        t(n[e]).trigger("init")
                    }
                    n[e].matches && t(n[e]).trigger("valid")
                }
            }), t(e).bind("load", function() {
                for (var e in n)
                    n[e].matches && t(n[e]).trigger("valid")
            }), t.onMediaQuery = function(i, o) {
                var r = i && n[i];
                return r || (r = n[i] = e.matchMedia(i), r.supported = a, r.addListener(function() {
                    t(r).trigger(r.matches ? "valid" : "invalid")
                })), t(r).bind(o), r
            }
        }
    }(jQuery, window, document), function(t) {
        var e = function() {
        };
        e.prototype = t.extend(e.prototype, {name: "accordion",options: {index: 0,duration: 500,easing: "easeOutQuart",animated: "slide",event: "click",collapseall: !0,matchheight: !0,toggler: ".toggler",content: ".content"},initialize: function(e, i) {
                var i = t.extend({}, this.options, i), n = e.find(i.toggler), a = function(e) {
                    var a = n.eq(e).hasClass("active") ? t([]) : n.eq(e), o = n.eq(e).hasClass("active") ? n.eq(e) : t([]);
                    switch (a.hasClass("active") && (o = a, a = t([])), i.collapseall && (o = n.filter(".active")), i.animated) {
                        case "slide":
                            a.next().stop().show().animate({height: a.next().data("height")}, {easing: i.easing,duration: i.duration}), o.next().stop().animate({height: 0}, {easing: i.easing,duration: i.duration,complete: function() {
                                    o.next().hide()
                                }});
                            break;
                        default:
                            a.next().show().css("height", a.next().data("height")), o.next().hide().css("height", 0)
                    }
                    a.addClass("active"), o.removeClass("active")
                }, o = function() {
                    var a = 0;
                    i.matchheight && e.find(i.content).css("min-height", "").css("height", "").each(function() {
                        a = Math.max(a, t(this).height())
                    }).css("min-height", a), n.each(function() {
                        var e = t(this), i = e.next();
                        i.data("height", i.css("height", "").show().height()), e.hasClass("active") ? i.show() : i.hide().css("height", 0)
                    })
                };
                n.each(function(e) {
                    var n = t(this).bind(i.event, function() {
                        a(e)
                    }), o = n.next().css("overflow", "hidden").addClass("content-wrapper");
                    e == i.index || "all" == i.index ? (n.addClass("active"), o.show()) : o.hide().css("height", 0)
                }), o(), t(window).bind("debouncedresize", function() {
                    o()
                })
            }}), t.fn[e.prototype.name] = function() {
            var i = arguments, n = i[0] ? i[0] : null;
            return this.each(function() {
                var a = t(this);
                if (e.prototype[n] && a.data(e.prototype.name) && "initialize" != n)
                    a.data(e.prototype.name)[n].apply(a.data(e.prototype.name), Array.prototype.slice.call(i, 1));
                else if (!n || t.isPlainObject(n)) {
                    var o = new e;
                    e.prototype.initialize && o.initialize.apply(o, t.merge([a], i)), a.data(e.prototype.name, o)
                } else
                    t.error("Method " + n + " does not exist on jQuery." + e.name)
            })
        }, window.$widgetkit && ($widgetkit.lazyloaders.accordion = function(e, i) {
            t(e).accordion(i)
        })
    }(jQuery), function() {
        $widgetkit.lazyloaders["gallery-slider"] = function(t, e) {
            var i = t.find(".slides:first"), n = i.children(), a = "auto" == e.total_width ? t.width() : e.total_width > t.width() ? t.width() : e.total_width, o = a / n.length - e.spacing, r = e.width, s = e.height;
            if ("auto" == e.total_width || e.total_width >= a) {
                {
                    var l = e.width / (a / 2);
                    e.height / l
                }
                r = e.width / l, s = e.height / l, n.css("background-size", r + "px " + s + "px")
            }
            n.css({width: o,"margin-right": e.spacing}), i.width(n.eq(0).width() * n.length * 2), t.css({width: a,height: s}), $widgetkit.load(WIDGETKIT_URL + "/widgets/gallery/js/slider.js").done(function() {
                t.galleryslider(e)
            })
        }
    }(jQuery), $widgetkit.load("/media/widgetkit/widgets/lightbox/js/lightbox.js").done(function() {
        jQuery(function(t) {
            setTimeout(function() {
                t("a[data-lightbox]").lightbox({titlePosition: "float",transitionIn: "fade",transitionOut: "fade",overlayShow: 1,overlayColor: "#777",overlayOpacity: .7})
            }, 500)
        })
    }), function() {
        $widgetkit.lazyloaders.googlemaps = function(t, e) {
            $widgetkit.load(WIDGETKIT_URL + "/widgets/map/js/map.js").done(function() {
                t.googlemaps(e)
            })
        }
    }(jQuery), $widgetkit.trans.addDic({FROM_ADDRESS: "From address: ",GET_DIRECTIONS: "Get directions",FILL_IN_ADDRESS: "Please fill in your address.",ADDRESS_NOT_FOUND: "Sorry, address not found!",LOCATION_NOT_FOUND: ", not found!"}), window.mejs ? jQuery(function(t) {
        mejs.MediaElementDefaults.pluginPath = "/media/widgetkit/widgets/mediaplayer/mediaelement/", t("video,audio").each(function() {
            var e = t(this);
            if (!e.parent().hasClass("mejs-mediaelement")) {
                e.data("mediaelement", new mejs.MediaElementPlayer(this, {pluginPath: "/media/widgetkit/widgets/mediaplayer/mediaelement/"}));
                var i = e.data("mediaelement").width, n = e.data("mediaelement").height;
                t.onMediaQuery("(max-width: 767px)", {valid: function() {
                        e.data("mediaelement").setPlayerSize("100%", e.is("video") ? "100%" : n)
                    },invalid: function() {
                        var t = e.parent().width();
                        i > t ? e.css({width: "",height: ""}).data("mediaelement").setPlayerSize("100%", "100%") : e.css({width: "",height: ""}).data("mediaelement").setPlayerSize(i, n)
                    }}), t(window).width() <= 767 && e.data("mediaelement").setPlayerSize("100%", e.is("video") ? "100%" : n)
            }
        })
    }) : $widgetkit.load("/media/widgetkit/widgets/mediaplayer/mediaelement/mediaelement-and-player.js").done(function() {
        jQuery(function(t) {
            mejs.MediaElementDefaults.pluginPath = "/media/widgetkit/widgets/mediaplayer/mediaelement/", t("video,audio").each(function() {
                var e = t(this);
                if (!e.parent().hasClass("mejs-mediaelement")) {
                    e.data("mediaelement", new mejs.MediaElementPlayer(this, {pluginPath: "/media/widgetkit/widgets/mediaplayer/mediaelement/"}));
                    var i = e.data("mediaelement").width, n = e.data("mediaelement").height;
                    t.onMediaQuery("(max-width: 767px)", {valid: function() {
                            e.data("mediaelement").setPlayerSize("100%", e.is("video") ? "100%" : n)
                        },invalid: function() {
                            var t = e.parent().width();
                            i > t ? e.css({width: "",height: ""}).data("mediaelement").setPlayerSize("100%", "100%") : e.css({width: "",height: ""}).data("mediaelement").setPlayerSize(i, n)
                        }}), t(window).width() <= 767 && e.data("mediaelement").setPlayerSize("100%", e.is("video") ? "100%" : n)
                }
            })
        })
    }), function(t) {
        $widgetkit.lazyloaders.slideset = function(e, i) {
            e.css("visibility", "hidden");
            var n = e.find(".sets:first"), a = n.css({width: ""}).width(), o = e.find("ul.set").show(), r = 0, s = ("auto" == i.width ? e.width() : i.width, "auto" == i.height ? o.eq(0).children().eq(0).outerHeight(!0) : i.height);
            if (o.each(function() {
                var e = t(this).show(), i = t(this).children(), n = 0;
                i.each(function() {
                    var e = t(this);
                    e.css("left", n), n += e.width()
                }), r = Math.max(r, n), e.css("width", n).data("width", n).hide()
            }), o.eq(0).show(), n.css({height: s}), r > a) {
                var l = r / a;
                o.css($widgetkit.css3({transform: "scale(" + 1 / l + ")"})), n.css("height", s / l)
            }
            o.css({height: s}), $widgetkit.load(WIDGETKIT_URL + "/widgets/slideset/js/slideset.js").done(function() {
                e.slideset(i).css("visibility", "visible"), e.find("img[data-src]").each(function() {
                    var e = t(this), i = e.data("src");
                    setTimeout(function() {
                        e.attr("src", i)
                    }, 1)
                })
            })
        }
    }(jQuery), function(t) {
        $widgetkit.lazyloaders.slideshow = function(e, i) {
            $widgetkit.support.canvas && e.find("img[data-src]").each(function() {
                var e = t(this), i = document.createElement("canvas"), n = i.getContext("2d");
                i.width = e.attr("width"), i.height = e.attr("height"), n.drawImage(this, 0, 0), e.attr("src", i.toDataURL("image/png"))
            }), e.css("visibility", "hidden");
            var n = i.width, a = i.height, o = e.find("ul.slides:first"), r = o.children(), s = !1;
            r.css("width", ""), r.css("height", ""), o.css("height", ""), e.css("width", ""), "auto" != n && e.width() < n && (n = "auto", a = "auto", s = !0), e.css({width: "auto" == n ? e.width() : n});
            var l = (o.width(), a);
            "auto" == l && (l = r.eq(0).show().height()), r.css({height: l}), o.css("height", l), $widgetkit.load(WIDGETKIT_URL + "/widgets/slideshow/js/slideshow.js").done(function() {
                e.find("img[data-src]").each(function() {
                    var e = t(this), i = e.data("src");
                    setTimeout(function() {
                        e.attr("src", i)
                    }, 1)
                }), e.slideshow(i).css("visibility", "visible")
            })
        }, $widgetkit.lazyloaders.showcase = function(e, i) {
            {
                var n = e.find(".wk-slideshow").css("visibility", "hidden"), a = e.find(".wk-slideset").css("visibility", "hidden"), o = a.find("ul.set > li");
                i.width
            }
            $widgetkit.lazyloaders.slideshow(n, i), $widgetkit.lazyloaders.slideset(a, t.extend({}, i, {width: "auto",height: "auto",autoplay: !1,duration: i.slideset_effect_duration,index: parseInt(i.index / i.items_per_set)})), t(window).bind("resize", function() {
                var t = function() {
                    e.css("width", ""), e.width("auto" == i.width || i.width > e.width() ? e.width() : i.width)
                };
                return t(), t
            }()), t.when($widgetkit.load(WIDGETKIT_URL + "/widgets/slideset/js/slideset.js"), $widgetkit.load(WIDGETKIT_URL + "/widgets/slideshow/js/slideshow.js")).done(function() {
                n.css("visibility", "visible"), a.css("visibility", "visible");
                var e = n.data("slideshow"), i = a.data("slideset");
                o.eq(e.index).addClass("active"), n.bind("slideshow-show", function(t, e, n) {
                    var a = o.removeClass("active").eq(n).addClass("active");
                    if (!a.parent().is(":visible"))
                        switch (n) {
                            case 0:
                                i.show(0);
                                break;
                            case o.length - 1:
                                i.show(i.sets.length - 1);
                                break;
                            default:
                                i[n > e ? "next" : "previous"]()
                        }
                }), o.each(function(i) {
                    t(this).bind("click", function() {
                        e.stop(), e.show(i)
                    })
                })
            })
        }
    }(jQuery), $widgetkit.load("/media/widgetkit/widgets/spotlight/js/spotlight.js").done(function() {
        jQuery(function(t) {
            t("[data-spotlight]").spotlight({duration: 300})
        })
    }), jQuery(function(t) {
        var e = function(t) {
            var e = new Date(Date.parse(t.replace(/(\d+)-(\d+)-(\d+)T(.+)([-\+]\d+):(\d+)/g, "$1/$2/$3 $4 UTC$5$6"))), i = arguments.length > 1 ? arguments[1] : new Date, n = parseInt((i.getTime() - e) / 1e3);
            return 60 > n ? $widgetkit.trans.get("LESS_THAN_A_MINUTE_AGO") : 120 > n ? $widgetkit.trans.get("ABOUT_A_MINUTE_AGO") : 2700 > n ? $widgetkit.trans.get("X_MINUTES_AGO", parseInt(n / 60).toString()) : 5400 > n ? $widgetkit.trans.get("ABOUT_AN_HOUR_AGO") : 86400 > n ? $widgetkit.trans.get("X_HOURS_AGO", parseInt(n / 3600).toString()) : 172800 > n ? $widgetkit.trans.get("ONE_DAY_AGO") : $widgetkit.trans.get("X_DAYS_AGO", parseInt(n / 86400).toString())
        };
        t(".wk-twitter time").each(function() {
            t(this).html(e(t(this).attr("datetime")))
        });
        var i = t(".wk-twitter-bubbles");
        if (i.length) {
            var n = function() {
                i.each(function() {
                    var e = 0;
                    t(this).find("p.content").each(function() {
                        var i = t(this).height();
                        i > e && (e = i)
                    }).css("min-height", e)
                })
            };
            n(), t(window).bind("load", n)
        }
    }), $widgetkit.trans.addDic({LESS_THAN_A_MINUTE_AGO: "less than a minute ago",ABOUT_A_MINUTE_AGO: "about a minute ago",X_MINUTES_AGO: "%s minutes ago",ABOUT_AN_HOUR_AGO: "about an hour ago",X_HOURS_AGO: "about %s hours ago",ONE_DAY_AGO: "1 day ago",X_DAYS_AGO: "%s days ago"})
} catch (e) {
    console.error("Error in file:/cache/widgetkit/widgetkit-b1b8713d.js; Error:" + e.message)
}
try {
} catch (e) {
    console.error("Error in file:/plugins/content/extravote/assets/extravote.js; Error:" + e.message)
}
try {
    if (function(t) {
        "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], t) : t(jQuery)
    }(function(t) {
        function e(e) {
            return !e || void 0 !== e.allowPageScroll || void 0 === e.swipe && void 0 === e.swipeStatus || (e.allowPageScroll = d), void 0 !== e.click && void 0 === e.tap && (e.tap = e.click), e || (e = {}), e = t.extend({}, t.fn.swipe.defaults, e), this.each(function() {
                var n = t(this), a = n.data(O);
                a || (a = new i(this, e), n.data(O, a))
            })
        }
        function i(e, i) {
            function M(e) {
                if (!(de() || t(e.target).closest(i.excludedElements, Be).length > 0)) {
                    var n, a = e.originalEvent ? e.originalEvent : e, o = k ? a.touches[0] : a;
                    return Xe = b, k ? Qe = a.touches.length : e.preventDefault(), De = 0, ze = null, qe = null, Ne = 0, He = 0, $e = 0, Re = 1, Fe = 0, Ue = fe(), We = ve(), se(), !k || Qe === i.fingers || i.fingers === y || W() ? (ue(0, o), Ye = Se(), 2 == Qe && (ue(1, a.touches[1]), He = $e = be(Ue[0].start, Ue[1].start)), (i.swipeStatus || i.pinchStatus) && (n = D(a, Xe))) : n = !1, n === !1 ? (Xe = T, D(a, Xe), n) : (i.hold && (ti = setTimeout(t.proxy(function() {
                        Be.trigger("hold", [a.target]), i.hold && (n = i.hold.call(Be, a, a.target))
                    }, this), i.longTapThreshold)), ce(!0), null)
                }
            }
            function L(t) {
                var e = t.originalEvent ? t.originalEvent : t;
                if (Xe !== _ && Xe !== T && !le()) {
                    var n, a = k ? e.touches[0] : e, o = he(a);
                    if (Ve = Se(), k && (Qe = e.touches.length), i.hold && clearTimeout(ti), Xe = x, 2 == Qe && (0 == He ? (ue(1, e.touches[1]), He = $e = be(Ue[0].start, Ue[1].start)) : (he(e.touches[1]), $e = be(Ue[0].end, Ue[1].end), qe = _e(Ue[0].end, Ue[1].end)), Re = xe(He, $e), Fe = Math.abs(He - $e)), Qe === i.fingers || i.fingers === y || !k || W()) {
                        if (ze = Ce(o.start, o.end), F(t, ze), De = Te(o.start, o.end), Ne = we(), me(ze, De), (i.swipeStatus || i.pinchStatus) && (n = D(e, Xe)), !i.triggerOnTouchEnd || i.triggerOnTouchLeave) {
                            var r = !0;
                            if (i.triggerOnTouchLeave) {
                                var s = Oe(this);
                                r = Me(o.end, s)
                            }
                            !i.triggerOnTouchEnd && r ? Xe = I(x) : i.triggerOnTouchLeave && !r && (Xe = I(_)), (Xe == T || Xe == _) && D(e, Xe)
                        }
                    } else
                        Xe = T, D(e, Xe);
                    n === !1 && (Xe = T, D(e, Xe))
                }
            }
            function A(t) {
                var e = t.originalEvent;
                return k && e.touches.length > 0 ? (re(), !0) : (le() && (Qe = Ze), Ve = Se(), Ne = we(), H() || !N() ? (Xe = T, D(e, Xe)) : i.triggerOnTouchEnd || 0 == i.triggerOnTouchEnd && Xe === x ? (t.preventDefault(), Xe = _, D(e, Xe)) : !i.triggerOnTouchEnd && G() ? (Xe = _, z(e, Xe, p)) : Xe === x && (Xe = T, D(e, Xe)), ce(!1), null)
            }
            function E() {
                Qe = 0, Ve = 0, Ye = 0, He = 0, $e = 0, Re = 1, se(), ce(!1)
            }
            function P(t) {
                var e = t.originalEvent;
                i.triggerOnTouchLeave && (Xe = I(_), D(e, Xe))
            }
            function j() {
                Be.unbind(Ae, M), Be.unbind(Ie, E), Be.unbind(Ee, L), Be.unbind(Pe, A), je && Be.unbind(je, P), ce(!1)
            }
            function I(t) {
                var e = t, n = R(), a = N(), o = H();
                return !n || o ? e = T : !a || t != x || i.triggerOnTouchEnd && !i.triggerOnTouchLeave ? !a && t == _ && i.triggerOnTouchLeave && (e = T) : e = _, e
            }
            function D(t, e) {
                var i = void 0;
                return U() || Q() ? i = z(t, e, u) : (B() || W()) && i !== !1 && (i = z(t, e, h)), ae() && i !== !1 ? i = z(t, e, f) : oe() && i !== !1 ? i = z(t, e, m) : ne() && i !== !1 && (i = z(t, e, p)), e === T && E(t), e === _ && (k ? 0 == t.touches.length && E(t) : E(t)), i
            }
            function z(e, d, c) {
                var g = void 0;
                if (c == u) {
                    if (Be.trigger("swipeStatus", [d, ze || null, De || 0, Ne || 0, Qe, Ue]), i.swipeStatus && (g = i.swipeStatus.call(Be, e, d, ze || null, De || 0, Ne || 0, Qe, Ue), g === !1))
                        return !1;
                    if (d == _ && X()) {
                        if (Be.trigger("swipe", [ze, De, Ne, Qe, Ue]), i.swipe && (g = i.swipe.call(Be, e, ze, De, Ne, Qe, Ue), g === !1))
                            return !1;
                        switch (ze) {
                            case n:
                                Be.trigger("swipeLeft", [ze, De, Ne, Qe, Ue]), i.swipeLeft && (g = i.swipeLeft.call(Be, e, ze, De, Ne, Qe, Ue));
                                break;
                            case a:
                                Be.trigger("swipeRight", [ze, De, Ne, Qe, Ue]), i.swipeRight && (g = i.swipeRight.call(Be, e, ze, De, Ne, Qe, Ue));
                                break;
                            case o:
                                Be.trigger("swipeUp", [ze, De, Ne, Qe, Ue]), i.swipeUp && (g = i.swipeUp.call(Be, e, ze, De, Ne, Qe, Ue));
                                break;
                            case r:
                                Be.trigger("swipeDown", [ze, De, Ne, Qe, Ue]), i.swipeDown && (g = i.swipeDown.call(Be, e, ze, De, Ne, Qe, Ue))
                        }
                    }
                }
                if (c == h) {
                    if (Be.trigger("pinchStatus", [d, qe || null, Fe || 0, Ne || 0, Qe, Re, Ue]), i.pinchStatus && (g = i.pinchStatus.call(Be, e, d, qe || null, Fe || 0, Ne || 0, Qe, Re, Ue), g === !1))
                        return !1;
                    if (d == _ && q())
                        switch (qe) {
                            case s:
                                Be.trigger("pinchIn", [qe || null, Fe || 0, Ne || 0, Qe, Re, Ue]), i.pinchIn && (g = i.pinchIn.call(Be, e, qe || null, Fe || 0, Ne || 0, Qe, Re, Ue));
                                break;
                            case l:
                                Be.trigger("pinchOut", [qe || null, Fe || 0, Ne || 0, Qe, Re, Ue]), i.pinchOut && (g = i.pinchOut.call(Be, e, qe || null, Fe || 0, Ne || 0, Qe, Re, Ue))
                        }
                }
                return c == p ? (d === T || d === _) && (clearTimeout(Ke), clearTimeout(ti), Z() && !te() ? (Je = Se(), Ke = setTimeout(t.proxy(function() {
                    Je = null, Be.trigger("tap", [e.target]), i.tap && (g = i.tap.call(Be, e, e.target))
                }, this), i.doubleTapThreshold)) : (Je = null, Be.trigger("tap", [e.target]), i.tap && (g = i.tap.call(Be, e, e.target)))) : c == f ? (d === T || d === _) && (clearTimeout(Ke), Je = null, Be.trigger("doubletap", [e.target]), i.doubleTap && (g = i.doubleTap.call(Be, e, e.target))) : c == m && (d === T || d === _) && (clearTimeout(Ke), Je = null, Be.trigger("longtap", [e.target]), i.longTap && (g = i.longTap.call(Be, e, e.target))), g
            }
            function N() {
                var t = !0;
                return null !== i.threshold && (t = De >= i.threshold), t
            }
            function H() {
                var t = !1;
                return null !== i.cancelThreshold && null !== ze && (t = ge(ze) - De >= i.cancelThreshold), t
            }
            function $() {
                return null !== i.pinchThreshold ? Fe >= i.pinchThreshold : !0
            }
            function R() {
                var t;
                return t = i.maxTimeThreshold && Ne >= i.maxTimeThreshold ? !1 : !0
            }
            function F(t, e) {
                if (i.allowPageScroll === d || W())
                    t.preventDefault();
                else {
                    var s = i.allowPageScroll === c;
                    switch (e) {
                        case n:
                            (i.swipeLeft && s || !s && i.allowPageScroll != g) && t.preventDefault();
                            break;
                        case a:
                            (i.swipeRight && s || !s && i.allowPageScroll != g) && t.preventDefault();
                            break;
                        case o:
                            (i.swipeUp && s || !s && i.allowPageScroll != v) && t.preventDefault();
                            break;
                        case r:
                            (i.swipeDown && s || !s && i.allowPageScroll != v) && t.preventDefault()
                    }
                }
            }
            function q() {
                var t = Y(), e = V(), i = $();
                return t && e && i
            }
            function W() {
                return !!(i.pinchStatus || i.pinchIn || i.pinchOut)
            }
            function B() {
                return !(!q() || !W())
            }
            function X() {
                var t = R(), e = N(), i = Y(), n = V(), a = H(), o = !a && n && i && e && t;
                return o
            }
            function Q() {
                return !!(i.swipe || i.swipeStatus || i.swipeLeft || i.swipeRight || i.swipeUp || i.swipeDown)
            }
            function U() {
                return !(!X() || !Q())
            }
            function Y() {
                return Qe === i.fingers || i.fingers === y || !k
            }
            function V() {
                return 0 !== Ue[0].end.x
            }
            function G() {
                return !!i.tap
            }
            function Z() {
                return !!i.doubleTap
            }
            function J() {
                return !!i.longTap
            }
            function K() {
                if (null == Je)
                    return !1;
                var t = Se();
                return Z() && t - Je <= i.doubleTapThreshold
            }
            function te() {
                return K()
            }
            function ee() {
                return (1 === Qe || !k) && (isNaN(De) || De < i.threshold)
            }
            function ie() {
                return Ne > i.longTapThreshold && w > De
            }
            function ne() {
                return !(!ee() || !G())
            }
            function ae() {
                return !(!K() || !Z())
            }
            function oe() {
                return !(!ie() || !J())
            }
            function re() {
                Ge = Se(), Ze = event.touches.length + 1
            }
            function se() {
                Ge = 0, Ze = 0
            }
            function le() {
                var t = !1;
                if (Ge) {
                    var e = Se() - Ge;
                    e <= i.fingerReleaseThreshold && (t = !0)
                }
                return t
            }
            function de() {
                return !(Be.data(O + "_intouch") !== !0)
            }
            function ce(t) {
                t === !0 ? (Be.bind(Ee, L), Be.bind(Pe, A), je && Be.bind(je, P)) : (Be.unbind(Ee, L, !1), Be.unbind(Pe, A, !1), je && Be.unbind(je, P, !1)), Be.data(O + "_intouch", t === !0)
            }
            function ue(t, e) {
                var i = void 0 !== e.identifier ? e.identifier : 0;
                return Ue[t].identifier = i, Ue[t].start.x = Ue[t].end.x = e.pageX || e.clientX, Ue[t].start.y = Ue[t].end.y = e.pageY || e.clientY, Ue[t]
            }
            function he(t) {
                var e = void 0 !== t.identifier ? t.identifier : 0, i = pe(e);
                return i.end.x = t.pageX || t.clientX, i.end.y = t.pageY || t.clientY, i
            }
            function pe(t) {
                for (var e = 0; e < Ue.length; e++)
                    if (Ue[e].identifier == t)
                        return Ue[e]
            }
            function fe() {
                for (var t = [], e = 0; 5 >= e; e++)
                    t.push({start: {x: 0,y: 0},end: {x: 0,y: 0},identifier: 0});
                return t
            }
            function me(t, e) {
                e = Math.max(e, ge(t)), We[t].distance = e
            }
            function ge(t) {
                return We[t] ? We[t].distance : void 0
            }
            function ve() {
                var t = {};
                return t[n] = ye(n), t[a] = ye(a), t[o] = ye(o), t[r] = ye(r), t
            }
            function ye(t) {
                return {direction: t,distance: 0}
            }
            function we() {
                return Ve - Ye
            }
            function be(t, e) {
                var i = Math.abs(t.x - e.x), n = Math.abs(t.y - e.y);
                return Math.round(Math.sqrt(i * i + n * n))
            }
            function xe(t, e) {
                var i = e / t * 1;
                return i.toFixed(2)
            }
            function _e() {
                return 1 > Re ? l : s
            }
            function Te(t, e) {
                return Math.round(Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)))
            }
            function ke(t, e) {
                var i = t.x - e.x, n = e.y - t.y, a = Math.atan2(n, i), o = Math.round(180 * a / Math.PI);
                return 0 > o && (o = 360 - Math.abs(o)), o
            }
            function Ce(t, e) {
                var i = ke(t, e);
                return 45 >= i && i >= 0 ? n : 360 >= i && i >= 315 ? n : i >= 135 && 225 >= i ? a : i > 45 && 135 > i ? r : o
            }
            function Se() {
                var t = new Date;
                return t.getTime()
            }
            function Oe(e) {
                e = t(e);
                var i = e.offset(), n = {left: i.left,right: i.left + e.outerWidth(),top: i.top,bottom: i.top + e.outerHeight()};
                return n
            }
            function Me(t, e) {
                return t.x > e.left && t.x < e.right && t.y > e.top && t.y < e.bottom
            }
            var Le = k || S || !i.fallbackToMouseEvents, Ae = Le ? S ? C ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown", Ee = Le ? S ? C ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove", Pe = Le ? S ? C ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup", je = Le ? null : "mouseleave", Ie = S ? C ? "MSPointerCancel" : "pointercancel" : "touchcancel", De = 0, ze = null, Ne = 0, He = 0, $e = 0, Re = 1, Fe = 0, qe = 0, We = null, Be = t(e), Xe = "start", Qe = 0, Ue = null, Ye = 0, Ve = 0, Ge = 0, Ze = 0, Je = 0, Ke = null, ti = null;
            try {
                Be.bind(Ae, M), Be.bind(Ie, E)
            } catch (ei) {
                t.error("events not supported " + Ae + "," + Ie + " on jQuery.swipe")
            }
            this.enable = function() {
                return Be.bind(Ae, M), Be.bind(Ie, E), Be
            }, this.disable = function() {
                return j(), Be
            }, this.destroy = function() {
                return j(), Be.data(O, null), Be
            }, this.option = function(e, n) {
                if (void 0 !== i[e]) {
                    if (void 0 === n)
                        return i[e];
                    i[e] = n
                } else
                    t.error("Option " + e + " does not exist on jQuery.swipe.options");
                return null
            }
        }
        var n = "left", a = "right", o = "up", r = "down", s = "in", l = "out", d = "none", c = "auto", u = "swipe", h = "pinch", p = "tap", f = "doubletap", m = "longtap", g = "horizontal", v = "vertical", y = "all", w = 10, b = "start", x = "move", _ = "end", T = "cancel", k = "ontouchstart" in window, C = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled, S = window.navigator.pointerEnabled || window.navigator.msPointerEnabled, O = "TouchSwipe", M = {fingers: 1,threshold: 75,cancelThreshold: null,pinchThreshold: 20,maxTimeThreshold: null,fingerReleaseThreshold: 250,longTapThreshold: 500,doubleTapThreshold: 200,swipe: null,swipeLeft: null,swipeRight: null,swipeUp: null,swipeDown: null,swipeStatus: null,pinchIn: null,pinchOut: null,pinchStatus: null,click: null,tap: null,doubleTap: null,longTap: null,hold: null,triggerOnTouchEnd: !0,triggerOnTouchLeave: !1,allowPageScroll: "auto",fallbackToMouseEvents: !0,excludedElements: "label, button, input, select, textarea, a, .noSwipe"};
        t.fn.swipe = function(i) {
            var n = t(this), a = n.data(O);
            if (a && "string" == typeof i) {
                if (a[i])
                    return a[i].apply(this, Array.prototype.slice.call(arguments, 1));
                t.error("Method " + i + " does not exist on jQuery.swipe")
            } else if (!(a || "object" != typeof i && i))
                return e.apply(this, arguments);
            return n
        }, t.fn.swipe.defaults = M, t.fn.swipe.phases = {PHASE_START: b,PHASE_MOVE: x,PHASE_END: _,PHASE_CANCEL: T}, t.fn.swipe.directions = {LEFT: n,RIGHT: a,UP: o,DOWN: r,IN: s,OUT: l}, t.fn.swipe.pageScroll = {NONE: d,HORIZONTAL: g,VERTICAL: v,AUTO: c}, t.fn.swipe.fingers = {ONE: 1,TWO: 2,THREE: 3,ALL: y}
    }), "undefined" == typeof console) {
        var console = {};
        console.log = console.error = console.info = console.debug = console.warn = console.trace = console.dir = console.dirxml = console.group = console.groupEnd = console.time = console.timeEnd = console.assert = console.profile = console.groupCollapsed = function() {
        }
    }
    if (1 == window.tplogs)
        try {
            console.groupCollapsed("ThemePunch GreenSocks Logs")
        } catch (e) {
        }
    var oldgs = window.GreenSockGlobals;
    oldgs_queue = window._gsQueue;
    var punchgs = window.GreenSockGlobals = {};
    if (1 == window.tplogs)
        try {
            console.info("Build GreenSock SandBox for ThemePunch Plugins"), console.info("GreenSock TweenLite Engine Initalised by ThemePunch Plugin")
        } catch (e) {
        }
    !function(t, e) {
        "use strict";
        var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
        if (!i.TweenLite) {
            var n, a, o, r, s, l = function(t) {
                var e, n = t.split("."), a = i;
                for (e = 0; n.length > e; e++)
                    a[n[e]] = a = a[n[e]] || {};
                return a
            }, d = l("com.greensock"), c = 1e-10, u = function(t) {
                var e, i = [], n = t.length;
                for (e = 0; e !== n; i.push(t[e++]))
                    ;
                return i
            }, h = function() {
            }, p = function() {
                var t = Object.prototype.toString, e = t.call([]);
                return function(i) {
                    return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                }
            }(), f = {}, m = function(n, a, o, r) {
                this.sc = f[n] ? f[n].sc : [], f[n] = this, this.gsClass = null, this.func = o;
                var s = [];
                this.check = function(d) {
                    for (var c, u, h, p, g = a.length, v = g; --g > -1; )
                        (c = f[a[g]] || new m(a[g], [])).gsClass ? (s[g] = c.gsClass, v--) : d && c.sc.push(this);
                    if (0 === v && o)
                        for (u = ("com.greensock." + n).split("."), h = u.pop(), p = l(u.join("."))[h] = this.gsClass = o.apply(o, s), r && (i[h] = p, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + n.split(".").pop(), [], function() {
                            return p
                        }) : n === e && "undefined" != typeof module && module.exports && (module.exports = p)), g = 0; this.sc.length > g; g++)
                            this.sc[g].check()
                }, this.check(!0)
            }, g = t._gsDefine = function(t, e, i, n) {
                return new m(t, e, i, n)
            }, v = d._class = function(t, e, i) {
                return e = e || function() {
                }, g(t, [], function() {
                    return e
                }, i), e
            };
            g.globals = i;
            var y = [0, 0, 1, 1], w = [], b = v("easing.Ease", function(t, e, i, n) {
                this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? y.concat(e) : y
            }, !0), x = b.map = {}, _ = b.register = function(t, e, i, n) {
                for (var a, o, r, s, l = e.split(","), c = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --c > -1; )
                    for (o = l[c], a = n ? v("easing." + o, null, !0) : d.easing[o] || {}, r = u.length; --r > -1; )
                        s = u[r], x[o + "." + s] = x[s + o] = a[s] = t.getRatio ? t : t[s] || new t
            };
            for (o = b.prototype, o._calcEnd = !1, o.getRatio = function(t) {
                if (this._func)
                    return this._params[0] = t, this._func.apply(null, this._params);
                var e = this._type, i = this._power, n = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : .5 > t ? n / 2 : 1 - n / 2
            }, n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], a = n.length; --a > -1; )
                o = n[a] + ",Power" + a, _(new b(null, null, 1, a), o, "easeOut", !0), _(new b(null, null, 2, a), o, "easeIn" + (0 === a ? ",easeNone" : "")), _(new b(null, null, 3, a), o, "easeInOut");
            x.linear = d.easing.Linear.easeIn, x.swing = d.easing.Quad.easeInOut;
            var T = v("events.EventDispatcher", function(t) {
                this._listeners = {}, this._eventTarget = t || this
            });
            o = T.prototype, o.addEventListener = function(t, e, i, n, a) {
                a = a || 0;
                var o, l, d = this._listeners[t], c = 0;
                for (null == d && (this._listeners[t] = d = []), l = d.length; --l > -1; )
                    o = d[l], o.c === e && o.s === i ? d.splice(l, 1) : 0 === c && a > o.pr && (c = l + 1);
                d.splice(c, 0, {c: e,s: i,up: n,pr: a}), this !== r || s || r.wake()
            }, o.removeEventListener = function(t, e) {
                var i, n = this._listeners[t];
                if (n)
                    for (i = n.length; --i > -1; )
                        if (n[i].c === e)
                            return void n.splice(i, 1)
            }, o.dispatchEvent = function(t) {
                var e, i, n, a = this._listeners[t];
                if (a)
                    for (e = a.length, i = this._eventTarget; --e > -1; )
                        n = a[e], n && (n.up ? n.c.call(n.s || i, {type: t,target: i}) : n.c.call(n.s || i))
            };
            var k = t.requestAnimationFrame, C = t.cancelAnimationFrame, S = Date.now || function() {
                return (new Date).getTime()
            }, O = S();
            for (n = ["ms", "moz", "webkit", "o"], a = n.length; --a > -1 && !k; )
                k = t[n[a] + "RequestAnimationFrame"], C = t[n[a] + "CancelAnimationFrame"] || t[n[a] + "CancelRequestAnimationFrame"];
            v("Ticker", function(t, e) {
                var i, n, a, o, l, d = this, u = S(), p = e !== !1 && k, f = 500, m = 33, g = function(t) {
                    var e, r, s = S() - O;
                    s > f && (u += s - m), O += s, d.time = (O - u) / 1e3, e = d.time - l, (!i || e > 0 || t === !0) && (d.frame++, l += e + (e >= o ? .004 : o - e), r = !0), t !== !0 && (a = n(g)), r && d.dispatchEvent("tick")
                };
                T.call(d), d.time = d.frame = 0, d.tick = function() {
                    g(!0)
                }, d.lagSmoothing = function(t, e) {
                    f = t || 1 / c, m = Math.min(e, f, 0)
                }, d.sleep = function() {
                    null != a && (p && C ? C(a) : clearTimeout(a), n = h, a = null, d === r && (s = !1))
                }, d.wake = function() {
                    null !== a ? d.sleep() : d.frame > 10 && (O = S() - f + 5), n = 0 === i ? h : p && k ? k : function(t) {
                        return setTimeout(t, 0 | 1e3 * (l - d.time) + 1)
                    }, d === r && (s = !0), g(2)
                }, d.fps = function(t) {
                    return arguments.length ? (i = t, o = 1 / (i || 60), l = this.time + o, void d.wake()) : i
                }, d.useRAF = function(t) {
                    return arguments.length ? (d.sleep(), p = t, void d.fps(i)) : p
                }, d.fps(t), setTimeout(function() {
                    p && (!a || 5 > d.frame) && d.useRAF(!1)
                }, 1500)
            }), o = d.Ticker.prototype = new d.events.EventDispatcher, o.constructor = d.Ticker;
            var M = v("core.Animation", function(t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, W) {
                    s || r.wake();
                    var i = this.vars.useFrames ? q : W;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            r = M.ticker = new d.Ticker, o = M.prototype, o._dirty = o._gc = o._initted = o._paused = !1, o._totalTime = o._time = 0, o._rawPrevTime = -1, o._next = o._last = o._onUpdate = o._timeline = o.timeline = null, o._paused = !1;
            var L = function() {
                s && S() - O > 2e3 && r.wake(), setTimeout(L, 2e3)
            };
            L(), o.play = function(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, o.pause = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, o.resume = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!1)
            }, o.seek = function(t, e) {
                return this.totalTime(Number(t), e !== !1)
            }, o.restart = function(t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
            }, o.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, o.render = function() {
            }, o.invalidate = function() {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, o.isActive = function() {
                var t, e = this._timeline, i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
            }, o._enabled = function(t, e) {
                return s || r.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
            }, o._kill = function() {
                return this._enabled(!1, !1)
            }, o.kill = function(t, e) {
                return this._kill(t, e), this
            }, o._uncache = function(t) {
                for (var e = t ? this : this.timeline; e; )
                    e._dirty = !0, e = e.timeline;
                return this
            }, o._swapSelfInParams = function(t) {
                for (var e = t.length, i = t.concat(); --e > -1; )
                    "{self}" === t[e] && (i[e] = this);
                return i
            }, o.eventCallback = function(t, e, i, n) {
                if ("on" === (t || "").substr(0, 2)) {
                    var a = this.vars;
                    if (1 === arguments.length)
                        return a[t];
                    null == e ? delete a[t] : (a[t] = e, a[t + "Params"] = p(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, a[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, o.delay = function(t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
            }, o.duration = function(t) {
                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, o.totalDuration = function(t) {
                return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
            }, o.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }, o.totalTime = function(t, e, i) {
                if (s || r.wake(), !arguments.length)
                    return this._totalTime;
                if (this._timeline) {
                    if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var n = this._totalDuration, a = this._timeline;
                        if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : a._time) - (this._reversed ? n - t : t) / this._timeScale, a._dirty || this._uncache(!1), a._timeline)
                            for (; a._timeline; )
                                a._timeline._time !== (a._startTime + a._totalTime) / a._timeScale && a.totalTime(a._totalTime, !0), a = a._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1), I.length && B())
                }
                return this
            }, o.progress = o.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
            }, o.startTime = function(t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
            }, o.endTime = function(t) {
                return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
            }, o.timeScale = function(t) {
                if (!arguments.length)
                    return this._timeScale;
                if (t = t || c, this._timeline && this._timeline.smoothChildTiming) {
                    var e = this._pauseTime, i = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / t
                }
                return this._timeScale = t, this._uncache(!1)
            }, o.reversed = function(t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, o.paused = function(t) {
                if (!arguments.length)
                    return this._paused;
                if (t != this._paused && this._timeline) {
                    s || t || r.wake();
                    var e = this._timeline, i = e.rawTime(), n = i - this._pauseTime;
                    !t && e.smoothChildTiming && (this._startTime += n, this._uncache(!1)), this._pauseTime = t ? i : null, this._paused = t, this._active = this.isActive(), !t && 0 !== n && this._initted && this.duration() && this.render(e.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0)
                }
                return this._gc && !t && this._enabled(!0, !1), this
            };
            var A = v("core.SimpleTimeline", function(t) {
                M.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            o = A.prototype = new M, o.constructor = A, o.kill()._gc = !1, o._first = o._last = o._recent = null, o._sortChildren = !1, o.add = o.insert = function(t, e) {
                var i, n;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
                    for (n = t._startTime; i && i._startTime > n; )
                        i = i._prev;
                return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._recent = t, this._timeline && this._uncache(!0), this
            }, o._remove = function(t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, o.render = function(t, e, i) {
                var n, a = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; a; )
                    n = a._next, (a._active || t >= a._startTime && !a._paused) && (a._reversed ? a.render((a._dirty ? a.totalDuration() : a._totalDuration) - (t - a._startTime) * a._timeScale, e, i) : a.render((t - a._startTime) * a._timeScale, e, i)), a = n
            }, o.rawTime = function() {
                return s || r.wake(), this._totalTime
            };
            var E = v("TweenLite", function(e, i, n) {
                if (M.call(this, i, n), this.render = E.prototype.render, null == e)
                    throw "Cannot tween a null target.";
                this.target = e = "string" != typeof e ? e : E.selector(e) || e;
                var a, o, r, s = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType), l = this.vars.overwrite;
                if (this._overwrite = l = null == l ? F[E.defaultOverwrite] : "number" == typeof l ? l >> 0 : F[l], (s || e instanceof Array || e.push && p(e)) && "number" != typeof e[0])
                    for (this._targets = r = u(e), this._propLookup = [], this._siblings = [], a = 0; r.length > a; a++)
                        o = r[a], o ? "string" != typeof o ? o.length && o !== t && o[0] && (o[0] === t || o[0].nodeType && o[0].style && !o.nodeType) ? (r.splice(a--, 1), this._targets = r = r.concat(u(o))) : (this._siblings[a] = X(o, this, !1), 1 === l && this._siblings[a].length > 1 && U(o, this, null, 1, this._siblings[a])) : (o = r[a--] = E.selector(o), "string" == typeof o && r.splice(a + 1, 1)) : r.splice(a--, 1);
                else
                    this._propLookup = {}, this._siblings = X(e, this, !1), 1 === l && this._siblings.length > 1 && U(e, this, null, 1, this._siblings);
                (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -c, this.render(-this._delay))
            }, !0), P = function(e) {
                return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
            }, j = function(t, e) {
                var i, n = {};
                for (i in t)
                    R[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!N[i] || N[i] && N[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                t.css = n
            };
            o = E.prototype = new M, o.constructor = E, o.kill()._gc = !1, o.ratio = 0, o._firstPT = o._targets = o._overwrittenProps = o._startAt = null, o._notifyPluginsOfEnabled = o._lazy = !1, E.version = "1.14.2", E.defaultEase = o._ease = new b(null, null, 1, 1), E.defaultOverwrite = "auto", E.ticker = r, E.autoSleep = !0, E.lagSmoothing = function(t, e) {
                r.lagSmoothing(t, e)
            }, E.selector = t.$ || t.jQuery || function(e) {
                var i = t.$ || t.jQuery;
                return i ? (E.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
            };
            var I = [], D = {}, z = E._internals = {isArray: p,isSelector: P,lazyTweens: I}, N = E._plugins = {}, H = z.tweenLookup = {}, $ = 0, R = z.reservedProps = {ease: 1,delay: 1,overwrite: 1,onComplete: 1,onCompleteParams: 1,onCompleteScope: 1,useFrames: 1,runBackwards: 1,startAt: 1,onUpdate: 1,onUpdateParams: 1,onUpdateScope: 1,onStart: 1,onStartParams: 1,onStartScope: 1,onReverseComplete: 1,onReverseCompleteParams: 1,onReverseCompleteScope: 1,onRepeat: 1,onRepeatParams: 1,onRepeatScope: 1,easeParams: 1,yoyo: 1,immediateRender: 1,repeat: 1,repeatDelay: 1,data: 1,paused: 1,reversed: 1,autoCSS: 1,lazy: 1,onOverwrite: 1}, F = {none: 0,all: 1,auto: 2,concurrent: 3,allOnStart: 4,preexisting: 5,"true": 1,"false": 0}, q = M._rootFramesTimeline = new A, W = M._rootTimeline = new A, B = z.lazyRender = function() {
                var t, e = I.length;
                for (D = {}; --e > -1; )
                    t = I[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                I.length = 0
            };
            W._startTime = r.time, q._startTime = r.frame, W._active = q._active = !0, setTimeout(B, 1), M._updateRoot = E.render = function() {
                var t, e, i;
                if (I.length && B(), W.render((r.time - W._startTime) * W._timeScale, !1, !1), q.render((r.frame - q._startTime) * q._timeScale, !1, !1), I.length && B(), !(r.frame % 120)) {
                    for (i in H) {
                        for (e = H[i].tweens, t = e.length; --t > -1; )
                            e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete H[i]
                    }
                    if (i = W._first, (!i || i._paused) && E.autoSleep && !q._first && 1 === r._listeners.tick.length) {
                        for (; i && i._paused; )
                            i = i._next;
                        i || r.sleep()
                    }
                }
            }, r.addEventListener("tick", M._updateRoot);
            var X = function(t, e, i) {
                var n, a, o = t._gsTweenID;
                if (H[o || (t._gsTweenID = o = "t" + $++)] || (H[o] = {target: t,tweens: []}), e && (n = H[o].tweens, n[a = n.length] = e, i))
                    for (; --a > -1; )
                        n[a] === e && n.splice(a, 1);
                return H[o].tweens
            }, Q = function(t, e, i, n) {
                var a, o, r = t.vars.onOverwrite;
                return r && (a = r(t, e, i, n)), r = E.onOverwrite, r && (o = r(t, e, i, n)), a !== !1 && o !== !1
            }, U = function(t, e, i, n, a) {
                var o, r, s, l;
                if (1 === n || n >= 4) {
                    for (l = a.length, o = 0; l > o; o++)
                        if ((s = a[o]) !== e)
                            s._gc || Q(s, e) && s._enabled(!1, !1) && (r = !0);
                        else if (5 === n)
                            break;
                    return r
                }
                var d, u = e._startTime + c, h = [], p = 0, f = 0 === e._duration;
                for (o = a.length; --o > -1; )
                    (s = a[o]) === e || s._gc || s._paused || (s._timeline !== e._timeline ? (d = d || Y(e, 0, f), 0 === Y(s, d, f) && (h[p++] = s)) : u >= s._startTime && s._startTime + s.totalDuration() / s._timeScale > u && ((f || !s._initted) && 2e-10 >= u - s._startTime || (h[p++] = s)));
                for (o = p; --o > -1; )
                    if (s = h[o], 2 === n && s._kill(i, t, e) && (r = !0), 2 !== n || !s._firstPT && s._initted) {
                        if (2 !== n && !Q(s, e))
                            continue;
                        s._enabled(!1, !1) && (r = !0)
                    }
                return r
            }, Y = function(t, e, i) {
                for (var n = t._timeline, a = n._timeScale, o = t._startTime; n._timeline; ) {
                    if (o += n._startTime, a *= n._timeScale, n._paused)
                        return -100;
                    n = n._timeline
                }
                return o /= a, o > e ? o - e : i && o === e || !t._initted && 2 * c > o - e ? c : (o += t.totalDuration() / t._timeScale / a) > e + c ? 0 : o - e - c
            };
            o._init = function() {
                var t, e, i, n, a, o = this.vars, r = this._overwrittenProps, s = this._duration, l = !!o.immediateRender, d = o.ease;
                if (o.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), a = {};
                    for (n in o.startAt)
                        a[n] = o.startAt[n];
                    if (a.overwrite = !1, a.immediateRender = !0, a.lazy = l && o.lazy !== !1, a.startAt = a.delay = null, this._startAt = E.to(this.target, 0, a), l)
                        if (this._time > 0)
                            this._startAt = null;
                        else if (0 !== s)
                            return
                } else if (o.runBackwards && 0 !== s)
                    if (this._startAt)
                        this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        0 !== this._time && (l = !1), i = {};
                        for (n in o)
                            R[n] && "autoCSS" !== n || (i[n] = o[n]);
                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && o.lazy !== !1, i.immediateRender = l, this._startAt = E.to(this.target, 0, i), l) {
                            if (0 === this._time)
                                return
                        } else
                            this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    }
                if (this._ease = d = d ? d instanceof b ? d : "function" == typeof d ? new b(d, o.easeParams) : x[d] || E.defaultEase : E.defaultEase, o.easeParams instanceof Array && d.config && (this._ease = d.config.apply(d, o.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (t = this._targets.length; --t > -1; )
                        this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], r ? r[t] : null) && (e = !0);
                else
                    e = this._initProps(this.target, this._propLookup, this._siblings, r);
                if (e && E._onPluginEvent("_onInitAllProps", this), r && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), o.runBackwards)
                    for (i = this._firstPT; i; )
                        i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = o.onUpdate, this._initted = !0
            }, o._initProps = function(e, i, n, a) {
                var o, r, s, l, d, c;
                if (null == e)
                    return !1;
                D[e._gsTweenID] && B(), this.vars.css || e.style && e !== t && e.nodeType && N.css && this.vars.autoCSS !== !1 && j(this.vars, e);
                for (o in this.vars) {
                    if (c = this.vars[o], R[o])
                        c && (c instanceof Array || c.push && p(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[o] = c = this._swapSelfInParams(c, this));
                    else if (N[o] && (l = new N[o])._onInitTween(e, this.vars[o], this)) {
                        for (this._firstPT = d = {_next: this._firstPT,t: l,p: "setRatio",s: 0,c: 1,f: !0,n: o,pg: !0,pr: l._priority}, r = l._overwriteProps.length; --r > -1; )
                            i[l._overwriteProps[r]] = this._firstPT;
                        (l._priority || l._onInitAllProps) && (s = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0)
                    } else
                        this._firstPT = i[o] = d = {_next: this._firstPT,t: e,p: o,f: "function" == typeof e[o],n: o,pg: !1,pr: 0}, d.s = d.f ? e[o.indexOf("set") || "function" != typeof e["get" + o.substr(3)] ? o : "get" + o.substr(3)]() : parseFloat(e[o]), d.c = "string" == typeof c && "=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * Number(c.substr(2)) : Number(c) - d.s || 0;
                    d && d._next && (d._next._prev = d)
                }
                return a && this._kill(a, e) ? this._initProps(e, i, n, a) : this._overwrite > 1 && this._firstPT && n.length > 1 && U(e, this, i, this._overwrite, n) ? (this._kill(i, e), this._initProps(e, i, n, a)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (D[e._gsTweenID] = !0), s)
            }, o.render = function(t, e, i) {
                var n, a, o, r, s = this._time, l = this._duration, d = this._rawPrevTime;
                if (t >= l)
                    this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, a = "onComplete"), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > d || d === c) && d !== t && (i = !0, d > c && (a = "onReverseComplete")), this._rawPrevTime = r = !e || t || d === t ? t : c);
                else if (1e-7 > t)
                    this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== s || 0 === l && d > 0 && d !== c) && (a = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (d >= 0 && (i = !0), this._rawPrevTime = r = !e || t || d === t ? t : c)), this._initted || (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var u = t / l, h = this._easeType, p = this._easePower;
                    (1 === h || 3 === h && u >= .5) && (u = 1 - u), 3 === h && (u *= 2), 1 === p ? u *= u : 2 === p ? u *= u * u : 3 === p ? u *= u * u * u : 4 === p && (u *= u * u * u * u), this.ratio = 1 === h ? 1 - u : 2 === h ? u : .5 > t / l ? u / 2 : 1 - u / 2
                } else
                    this.ratio = this._ease.getRatio(t / l);
                if (this._time !== s || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc)
                            return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration))
                            return this._time = this._totalTime = s, this._rawPrevTime = d, I.push(this), void (this._lazy = [t, e]);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== s && t >= 0 && (this._active = !0), 0 === s && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : a || (a = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || w))), o = this._firstPT; o; )
                        o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                    this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== s || n) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || w)), a && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this.vars[a].apply(this.vars[a + "Scope"] || this, this.vars[a + "Params"] || w), 0 === l && this._rawPrevTime === c && r !== c && (this._rawPrevTime = 0))
                }
            }, o._kill = function(t, e, i) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target))
                    return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : E.selector(e) || e;
                var n, a, o, r, s, l, d, c, u;
                if ((p(e) || P(e)) && "number" != typeof e[0])
                    for (n = e.length; --n > -1; )
                        this._kill(t, e[n]) && (l = !0);
                else {
                    if (this._targets) {
                        for (n = this._targets.length; --n > -1; )
                            if (e === this._targets[n]) {
                                s = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], a = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                                break
                            }
                    } else {
                        if (e !== this.target)
                            return !1;
                        s = this._propLookup, a = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (s) {
                        if (d = t || s, c = t !== a && "all" !== a && t !== s && ("object" != typeof t || !t._tempKill), i && (E.onOverwrite || this.vars.onOverwrite)) {
                            for (o in d)
                                s[o] && (u || (u = []), u.push(o));
                            if (!Q(this, i, e, u))
                                return !1
                        }
                        for (o in d)
                            (r = s[o]) && (r.pg && r.t._kill(d) && (l = !0), r.pg && 0 !== r.t._overwriteProps.length || (r._prev ? r._prev._next = r._next : r === this._firstPT && (this._firstPT = r._next), r._next && (r._next._prev = r._prev), r._next = r._prev = null), delete s[o]), c && (a[o] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return l
            }, o.invalidate = function() {
                return this._notifyPluginsOfEnabled && E._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], M.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -c, this.render(-this._delay)), this
            }, o._enabled = function(t, e) {
                if (s || r.wake(), t && this._gc) {
                    var i, n = this._targets;
                    if (n)
                        for (i = n.length; --i > -1; )
                            this._siblings[i] = X(n[i], this, !0);
                    else
                        this._siblings = X(this.target, this, !0)
                }
                return M.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? E._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
            }, E.to = function(t, e, i) {
                return new E(t, e, i)
            }, E.from = function(t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new E(t, e, i)
            }, E.fromTo = function(t, e, i, n) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new E(t, e, n)
            }, E.delayedCall = function(t, e, i, n, a) {
                return new E(e, 0, {delay: t,onComplete: e,onCompleteParams: i,onCompleteScope: n,onReverseComplete: e,onReverseCompleteParams: i,onReverseCompleteScope: n,immediateRender: !1,useFrames: a,overwrite: 0})
            }, E.set = function(t, e) {
                return new E(t, 0, e)
            }, E.getTweensOf = function(t, e) {
                if (null == t)
                    return [];
                t = "string" != typeof t ? t : E.selector(t) || t;
                var i, n, a, o;
                if ((p(t) || P(t)) && "number" != typeof t[0]) {
                    for (i = t.length, n = []; --i > -1; )
                        n = n.concat(E.getTweensOf(t[i], e));
                    for (i = n.length; --i > -1; )
                        for (o = n[i], a = i; --a > -1; )
                            o === n[a] && n.splice(i, 1)
                } else
                    for (n = X(t).concat(), i = n.length; --i > -1; )
                        (n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
                return n
            }, E.killTweensOf = E.killDelayedCallsTo = function(t, e, i) {
                "object" == typeof e && (i = e, e = !1);
                for (var n = E.getTweensOf(t, e), a = n.length; --a > -1; )
                    n[a]._kill(i, t)
            };
            var V = v("plugins.TweenPlugin", function(t, e) {
                this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = V.prototype
            }, !0);
            if (o = V.prototype, V.version = "1.10.1", V.API = 2, o._firstPT = null, o._addTween = function(t, e, i, n, a, o) {
                var r, s;
                return null != n && (r = "number" == typeof n || "=" !== n.charAt(1) ? Number(n) - i : parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2))) ? (this._firstPT = s = {_next: this._firstPT,t: t,p: e,s: i,c: r,f: "function" == typeof t[e],n: a || e,r: o}, s._next && (s._next._prev = s), s) : void 0
            }, o.setRatio = function(t) {
                for (var e, i = this._firstPT, n = 1e-6; i; )
                    e = i.c * t + i.s, i.r ? e = Math.round(e) : n > e && e > -n && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next
            }, o._kill = function(t) {
                var e, i = this._overwriteProps, n = this._firstPT;
                if (null != t[this._propName])
                    this._overwriteProps = [];
                else
                    for (e = i.length; --e > -1; )
                        null != t[i[e]] && i.splice(e, 1);
                for (; n; )
                    null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                return !1
            }, o._roundProps = function(t, e) {
                for (var i = this._firstPT; i; )
                    (t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
            }, E._onPluginEvent = function(t, e) {
                var i, n, a, o, r, s = e._firstPT;
                if ("_onInitAllProps" === t) {
                    for (; s; ) {
                        for (r = s._next, n = a; n && n.pr > s.pr; )
                            n = n._next;
                        (s._prev = n ? n._prev : o) ? s._prev._next = s : a = s, (s._next = n) ? n._prev = s : o = s, s = r
                    }
                    s = e._firstPT = a
                }
                for (; s; )
                    s.pg && "function" == typeof s.t[t] && s.t[t]() && (i = !0), s = s._next;
                return i
            }, V.activate = function(t) {
                for (var e = t.length; --e > -1; )
                    t[e].API === V.API && (N[(new t[e])._propName] = t[e]);
                return !0
            }, g.plugin = function(t) {
                if (!(t && t.propName && t.init && t.API))
                    throw "illegal plugin definition.";
                var e, i = t.propName, n = t.priority || 0, a = t.overwriteProps, o = {init: "_onInitTween",set: "setRatio",kill: "_kill",round: "_roundProps",initAll: "_onInitAllProps"}, r = v("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                    V.call(this, i, n), this._overwriteProps = a || []
                }, t.global === !0), s = r.prototype = new V(i);
                s.constructor = r, r.API = t.API;
                for (e in o)
                    "function" == typeof t[e] && (s[o[e]] = t[e]);
                return r.version = t.version, V.activate([r]), r
            }, n = t._gsQueue) {
                for (a = 0; n.length > a; a++)
                    n[a]();
                for (o in f)
                    f[o].func || t.console.log("GSAP encountered missing dependency: com.greensock." + o)
            }
            s = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenLite");
    var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
    (_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
            var n = function(t) {
                e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                var i, n, a = this.vars;
                for (n in a)
                    i = a[n], s(i) && -1 !== i.join("").indexOf("{self}") && (a[n] = this._swapSelfInParams(i));
                s(a.tweens) && this.add(a.tweens, 0, a.align, a.stagger)
            }, a = 1e-10, o = i._internals, r = o.isSelector, s = o.isArray, l = o.lazyTweens, d = o.lazyRender, c = [], u = _gsScope._gsDefine.globals, h = function(t) {
                var e, i = {};
                for (e in t)
                    i[e] = t[e];
                return i
            }, p = function(t, e, i, n) {
                var a = t._timeline._totalTime;
                (e || !this._forcingPlayhead) && (t._timeline.pause(t._startTime), e && e.apply(n || t._timeline, i || c), this._forcingPlayhead && t._timeline.seek(a))
            }, f = function(t) {
                var e, i = [], n = t.length;
                for (e = 0; e !== n; i.push(t[e++]))
                    ;
                return i
            }, m = n.prototype = new e;
            return n.version = "1.14.2", m.constructor = n, m.kill()._gc = m._forcingPlayhead = !1, m.to = function(t, e, n, a) {
                var o = n.repeat && u.TweenMax || i;
                return e ? this.add(new o(t, e, n), a) : this.set(t, n, a)
            }, m.from = function(t, e, n, a) {
                return this.add((n.repeat && u.TweenMax || i).from(t, e, n), a)
            }, m.fromTo = function(t, e, n, a, o) {
                var r = a.repeat && u.TweenMax || i;
                return e ? this.add(r.fromTo(t, e, n, a), o) : this.set(t, a, o)
            }, m.staggerTo = function(t, e, a, o, s, l, d, c) {
                var u, p = new n({onComplete: l,onCompleteParams: d,onCompleteScope: c,smoothChildTiming: this.smoothChildTiming});
                for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], r(t) && (t = f(t)), o = o || 0, 0 > o && (t = f(t), t.reverse(), o *= -1), u = 0; t.length > u; u++)
                    a.startAt && (a.startAt = h(a.startAt)), p.to(t[u], e, h(a), u * o);
                return this.add(p, s)
            }, m.staggerFrom = function(t, e, i, n, a, o, r, s) {
                return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, a, o, r, s)
            }, m.staggerFromTo = function(t, e, i, n, a, o, r, s, l) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, a, o, r, s, l)
            }, m.call = function(t, e, n, a) {
                return this.add(i.delayedCall(0, t, e, n), a)
            }, m.set = function(t, e, n) {
                return n = this._parseTimeOrLabel(n, 0, !0), null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused), this.add(new i(t, 0, e), n)
            }, n.exportRoot = function(t, e) {
                t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                var a, o, r = new n(t), s = r._timeline;
                for (null == e && (e = !0), s._remove(r, !0), r._startTime = 0, r._rawPrevTime = r._time = r._totalTime = s._time, a = s._first; a; )
                    o = a._next, e && a instanceof i && a.target === a.vars.onComplete || r.add(a, a._startTime - a._delay), a = o;
                return s.add(r, 0), r
            }, m.add = function(a, o, r, l) {
                var d, c, u, h, p, f;
                if ("number" != typeof o && (o = this._parseTimeOrLabel(o, 0, !0, a)), !(a instanceof t)) {
                    if (a instanceof Array || a && a.push && s(a)) {
                        for (r = r || "normal", l = l || 0, d = o, c = a.length, u = 0; c > u; u++)
                            s(h = a[u]) && (h = new n({tweens: h})), this.add(h, d), "string" != typeof h && "function" != typeof h && ("sequence" === r ? d = h._startTime + h.totalDuration() / h._timeScale : "start" === r && (h._startTime -= h.delay())), d += l;
                        return this._uncache(!0)
                    }
                    if ("string" == typeof a)
                        return this.addLabel(a, o);
                    if ("function" != typeof a)
                        throw "Cannot add " + a + " into the timeline; it is not a tween, timeline, function, or string.";
                    a = i.delayedCall(0, a)
                }
                if (e.prototype.add.call(this, a, o), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                    for (p = this, f = p.rawTime() > a._startTime; p._timeline; )
                        f && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1), p = p._timeline;
                return this
            }, m.remove = function(e) {
                if (e instanceof t)
                    return this._remove(e, !1);
                if (e instanceof Array || e && e.push && s(e)) {
                    for (var i = e.length; --i > -1; )
                        this.remove(e[i]);
                    return this
                }
                return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
            }, m._remove = function(t, i) {
                e.prototype._remove.call(this, t, i);
                var n = this._last;
                return n ? this._time > n._startTime + n._totalDuration / n._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
            }, m.append = function(t, e) {
                return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
            }, m.insert = m.insertMultiple = function(t, e, i, n) {
                return this.add(t, e || 0, i, n)
            }, m.appendMultiple = function(t, e, i, n) {
                return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
            }, m.addLabel = function(t, e) {
                return this._labels[t] = this._parseTimeOrLabel(e), this
            }, m.addPause = function(t, e, i, n) {
                return this.call(p, ["{self}", e, i, n], this, t)
            }, m.removeLabel = function(t) {
                return delete this._labels[t], this
            }, m.getLabelTime = function(t) {
                return null != this._labels[t] ? this._labels[t] : -1
            }, m._parseTimeOrLabel = function(e, i, n, a) {
                var o;
                if (a instanceof t && a.timeline === this)
                    this.remove(a);
                else if (a && (a instanceof Array || a.push && s(a)))
                    for (o = a.length; --o > -1; )
                        a[o] instanceof t && a[o].timeline === this && this.remove(a[o]);
                if ("string" == typeof i)
                    return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, n);
                if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e])
                    null == e && (e = this.duration());
                else {
                    if (o = e.indexOf("="), -1 === o)
                        return null == this._labels[e] ? n ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                    i = parseInt(e.charAt(o - 1) + "1", 10) * Number(e.substr(o + 1)), e = o > 1 ? this._parseTimeOrLabel(e.substr(0, o - 1), 0, n) : this.duration()
                }
                return Number(e) + i
            }, m.seek = function(t, e) {
                return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
            }, m.stop = function() {
                return this.paused(!0)
            }, m.gotoAndPlay = function(t, e) {
                return this.play(t, e)
            }, m.gotoAndStop = function(t, e) {
                return this.pause(t, e)
            }, m.render = function(t, e, i) {
                this._gc && this._enabled(!0, !1);
                var n, o, r, s, u, h = this._dirty ? this.totalDuration() : this._totalDuration, p = this._time, f = this._startTime, m = this._timeScale, g = this._paused;
                if (t >= h ? (this._totalTime = this._time = h, this._reversed || this._hasPausedChild() || (o = !0, s = "onComplete", 0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === a) && this._rawPrevTime !== t && this._first && (u = !0, this._rawPrevTime > a && (s = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : a, t = h + 1e-4) : 1e-7 > t ? (this._totalTime = this._time = 0, (0 !== p || 0 === this._duration && this._rawPrevTime !== a && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (s = "onReverseComplete", o = this._reversed), 0 > t ? (this._active = !1, this._rawPrevTime >= 0 && this._first && (u = !0), this._rawPrevTime = t) : (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : a, t = 0, this._initted || (u = !0))) : this._totalTime = this._time = this._rawPrevTime = t, this._time !== p && this._first || i || u) {
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== p && t > 0 && (this._active = !0), 0 === p && this.vars.onStart && 0 !== this._time && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || c)), this._time >= p)
                        for (n = this._first; n && (r = n._next, !this._paused || g); )
                            (n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = r;
                    else
                        for (n = this._last; n && (r = n._prev, !this._paused || g); )
                            (n._active || p >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = r;
                    this._onUpdate && (e || (l.length && d(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || c))), s && (this._gc || (f === this._startTime || m !== this._timeScale) && (0 === this._time || h >= this.totalDuration()) && (o && (l.length && d(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this.vars[s].apply(this.vars[s + "Scope"] || this, this.vars[s + "Params"] || c)))
                }
            }, m._hasPausedChild = function() {
                for (var t = this._first; t; ) {
                    if (t._paused || t instanceof n && t._hasPausedChild())
                        return !0;
                    t = t._next
                }
                return !1
            }, m.getChildren = function(t, e, n, a) {
                a = a || -9999999999;
                for (var o = [], r = this._first, s = 0; r; )
                    a > r._startTime || (r instanceof i ? e !== !1 && (o[s++] = r) : (n !== !1 && (o[s++] = r), t !== !1 && (o = o.concat(r.getChildren(!0, e, n)), s = o.length))), r = r._next;
                return o
            }, m.getTweensOf = function(t, e) {
                var n, a, o = this._gc, r = [], s = 0;
                for (o && this._enabled(!0, !0), n = i.getTweensOf(t), a = n.length; --a > -1; )
                    (n[a].timeline === this || e && this._contains(n[a])) && (r[s++] = n[a]);
                return o && this._enabled(!1, !0), r
            }, m.recent = function() {
                return this._recent
            }, m._contains = function(t) {
                for (var e = t.timeline; e; ) {
                    if (e === this)
                        return !0;
                    e = e.timeline
                }
                return !1
            }, m.shiftChildren = function(t, e, i) {
                i = i || 0;
                for (var n, a = this._first, o = this._labels; a; )
                    a._startTime >= i && (a._startTime += t), a = a._next;
                if (e)
                    for (n in o)
                        o[n] >= i && (o[n] += t);
                return this._uncache(!0)
            }, m._kill = function(t, e) {
                if (!t && !e)
                    return this._enabled(!1, !1);
                for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, a = !1; --n > -1; )
                    i[n]._kill(t, e) && (a = !0);
                return a
            }, m.clear = function(t) {
                var e = this.getChildren(!1, !0, !0), i = e.length;
                for (this._time = this._totalTime = 0; --i > -1; )
                    e[i]._enabled(!1, !1);
                return t !== !1 && (this._labels = {}), this._uncache(!0)
            }, m.invalidate = function() {
                for (var e = this._first; e; )
                    e.invalidate(), e = e._next;
                return t.prototype.invalidate.call(this)
            }, m._enabled = function(t, i) {
                if (t === this._gc)
                    for (var n = this._first; n; )
                        n._enabled(t, !0), n = n._next;
                return e.prototype._enabled.call(this, t, i)
            }, m.totalTime = function() {
                this._forcingPlayhead = !0;
                var e = t.prototype.totalTime.apply(this, arguments);
                return this._forcingPlayhead = !1, e
            }, m.duration = function(t) {
                return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
            }, m.totalDuration = function(t) {
                if (!arguments.length) {
                    if (this._dirty) {
                        for (var e, i, n = 0, a = this._last, o = 999999999999; a; )
                            e = a._prev, a._dirty && a.totalDuration(), a._startTime > o && this._sortChildren && !a._paused ? this.add(a, a._startTime - a._delay) : o = a._startTime, 0 > a._startTime && !a._paused && (n -= a._startTime, this._timeline.smoothChildTiming && (this._startTime += a._startTime / this._timeScale), this.shiftChildren(-a._startTime, !1, -9999999999), o = 0), i = a._startTime + a._totalDuration / a._timeScale, i > n && (n = i), a = e;
                        this._duration = this._totalDuration = n, this._dirty = !1
                    }
                    return this._totalDuration
                }
                return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
            }, m.usesFrames = function() {
                for (var e = this._timeline; e._timeline; )
                    e = e._timeline;
                return e === t._rootFramesTimeline
            }, m.rawTime = function() {
                return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
            }, n
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function(t) {
        "use strict";
        var e = function() {
            return (_gsScope.GreenSockGlobals || _gsScope)[t]
        };
        "function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (require("./TweenLite.js"), module.exports = e())
    }("TimelineLite");
    var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
    (_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
            var e, i, n, a = _gsScope.GreenSockGlobals || _gsScope, o = a.com.greensock, r = 2 * Math.PI, s = Math.PI / 2, l = o._class, d = function(e, i) {
                var n = l("easing." + e, function() {
                }, !0), a = n.prototype = new t;
                return a.constructor = n, a.getRatio = i, n
            }, c = t.register || function() {
            }, u = function(t, e, i, n) {
                var a = l("easing." + t, {easeOut: new e,easeIn: new i,easeInOut: new n}, !0);
                return c(a, t), a
            }, h = function(t, e, i) {
                this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
            }, p = function(e, i) {
                var n = l("easing." + e, function(t) {
                    this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                }, !0), a = n.prototype = new t;
                return a.constructor = n, a.getRatio = i, a.config = function(t) {
                    return new n(t)
                }, n
            }, f = u("Back", p("BackOut", function(t) {
                return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
            }), p("BackIn", function(t) {
                return t * t * ((this._p1 + 1) * t - this._p1)
            }), p("BackInOut", function(t) {
                return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
            })), m = l("easing.SlowMo", function(t, e, i) {
                e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
            }, !0), g = m.prototype = new t;
            return g.constructor = m, g.getRatio = function(t) {
                var e = t + (.5 - t) * this._p;
                return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
            }, m.ease = new m(.7, .7), g.config = m.config = function(t, e, i) {
                return new m(t, e, i)
            }, e = l("easing.SteppedEase", function(t) {
                t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
            }, !0), g = e.prototype = new t, g.constructor = e, g.getRatio = function(t) {
                return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
            }, g.config = e.config = function(t) {
                return new e(t)
            }, i = l("easing.RoughEase", function(e) {
                e = e || {};
                for (var i, n, a, o, r, s, l = e.taper || "none", d = [], c = 0, u = 0 | (e.points || 20), p = u, f = e.randomize !== !1, m = e.clamp === !0, g = e.template instanceof t ? e.template : null, v = "number" == typeof e.strength ? .4 * e.strength : .4; --p > -1; )
                    i = f ? Math.random() : 1 / u * p, n = g ? g.getRatio(i) : i, "none" === l ? a = v : "out" === l ? (o = 1 - i, a = o * o * v) : "in" === l ? a = i * i * v : .5 > i ? (o = 2 * i, a = .5 * o * o * v) : (o = 2 * (1 - i), a = .5 * o * o * v), f ? n += Math.random() * a - .5 * a : p % 2 ? n += .5 * a : n -= .5 * a, m && (n > 1 ? n = 1 : 0 > n && (n = 0)), d[c++] = {x: i,y: n};
                for (d.sort(function(t, e) {
                    return t.x - e.x
                }), s = new h(1, 1, null), p = u; --p > -1; )
                    r = d[p], s = new h(r.x, r.y, s);
                this._prev = new h(0, 0, 0 !== s.t ? s : s.next)
            }, !0), g = i.prototype = new t, g.constructor = i, g.getRatio = function(t) {
                var e = this._prev;
                if (t > e.t) {
                    for (; e.next && t >= e.t; )
                        e = e.next;
                    e = e.prev
                } else
                    for (; e.prev && e.t >= t; )
                        e = e.prev;
                return this._prev = e, e.v + (t - e.t) / e.gap * e.c
            }, g.config = function(t) {
                return new i(t)
            }, i.ease = new i, u("Bounce", d("BounceOut", function(t) {
                return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            }), d("BounceIn", function(t) {
                return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
            }), d("BounceInOut", function(t) {
                var e = .5 > t;
                return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
            })), u("Circ", d("CircOut", function(t) {
                return Math.sqrt(1 - (t -= 1) * t)
            }), d("CircIn", function(t) {
                return -(Math.sqrt(1 - t * t) - 1)
            }), d("CircInOut", function(t) {
                return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            })), n = function(e, i, n) {
                var a = l("easing." + e, function(t, e) {
                    this._p1 = t || 1, this._p2 = e || n, this._p3 = this._p2 / r * (Math.asin(1 / this._p1) || 0)
                }, !0), o = a.prototype = new t;
                return o.constructor = a, o.getRatio = i, o.config = function(t, e) {
                    return new a(t, e)
                }, a
            }, u("Elastic", n("ElasticOut", function(t) {
                return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * r / this._p2) + 1
            }, .3), n("ElasticIn", function(t) {
                return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * r / this._p2))
            }, .3), n("ElasticInOut", function(t) {
                return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * r / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * r / this._p2) + 1
            }, .45)), u("Expo", d("ExpoOut", function(t) {
                return 1 - Math.pow(2, -10 * t)
            }), d("ExpoIn", function(t) {
                return Math.pow(2, 10 * (t - 1)) - .001
            }), d("ExpoInOut", function(t) {
                return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
            })), u("Sine", d("SineOut", function(t) {
                return Math.sin(t * s)
            }), d("SineIn", function(t) {
                return -Math.cos(t * s) + 1
            }), d("SineInOut", function(t) {
                return -.5 * (Math.cos(Math.PI * t) - 1)
            })), l("easing.EaseLookup", {find: function(e) {
                    return t.map[e]
                }}, !0), c(a.SlowMo, "SlowMo", "ease,"), c(i, "RoughEase", "ease,"), c(e, "SteppedEase", "ease,"), f
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()();
    var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
    (_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
            var i, n, a, o, r = function() {
                t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = r.prototype.setRatio
            }, s = {}, l = r.prototype = new t("css");
            l.constructor = r, r.version = "1.14.2", r.API = 2, r.defaultTransformPerspective = 0, r.defaultSkewType = "compensated", l = "px", r.suffixMap = {top: l,right: l,bottom: l,left: l,width: l,height: l,fontSize: l,padding: l,margin: l,perspective: l,lineHeight: ""};
            var d, c, u, h, p, f, m = /(?:\d|\-\d|\.\d|\-\.\d)+/g, g = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, y = /(?![+-]?\d*\.?\d+|e[+-]\d+)[^0-9]/g, w = /(?:\d|\-|\+|=|#|\.)*/g, b = /opacity *= *([^)]*)/i, x = /opacity:([^;]*)/i, _ = /alpha\(opacity *=.+?\)/i, T = /^(rgb|hsl)/, k = /([A-Z])/g, C = /-([a-z])/gi, S = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, O = function(t, e) {
                return e.toUpperCase()
            }, M = /(?:Left|Right|Width)/i, L = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, A = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, E = /,(?=[^\)]*(?:\(|$))/gi, P = Math.PI / 180, j = 180 / Math.PI, I = {}, D = document, z = D.createElement("div"), N = D.createElement("img"), H = r._internals = {_specialProps: s}, $ = navigator.userAgent, R = function() {
                var t, e = $.indexOf("Android"), i = D.createElement("div");
                return u = -1 !== $.indexOf("Safari") && -1 === $.indexOf("Chrome") && (-1 === e || Number($.substr(e + 8, 1)) > 3), p = u && 6 > Number($.substr($.indexOf("Version/") + 8, 1)), h = -1 !== $.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec($) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec($)) && (f = parseFloat(RegExp.$1)), i.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>", t = i.getElementsByTagName("a")[0], t ? /^0.55/.test(t.style.opacity) : !1
            }(), F = function(t) {
                return b.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
            }, q = function(t) {
                window.console && console.log(t)
            }, W = "", B = "", X = function(t, e) {
                e = e || z;
                var i, n, a = e.style;
                if (void 0 !== a[t])
                    return t;
                for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === a[i[n] + t]; )
                    ;
                return n >= 0 ? (B = 3 === n ? "ms" : i[n], W = "-" + B.toLowerCase() + "-", B + t) : null
            }, Q = D.defaultView ? D.defaultView.getComputedStyle : function() {
            }, U = r.getStyle = function(t, e, i, n, a) {
                var o;
                return R || "opacity" !== e ? (!n && t.style[e] ? o = t.style[e] : (i = i || Q(t)) ? o = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(k, "-$1").toLowerCase()) : t.currentStyle && (o = t.currentStyle[e]), null == a || o && "none" !== o && "auto" !== o && "auto auto" !== o ? o : a) : F(t)
            }, Y = H.convertToPixels = function(t, i, n, a, o) {
                if ("px" === a || !a)
                    return n;
                if ("auto" === a || !n)
                    return 0;
                var s, l, d, c = M.test(i), u = t, h = z.style, p = 0 > n;
                if (p && (n = -n), "%" === a && -1 !== i.indexOf("border"))
                    s = n / 100 * (c ? t.clientWidth : t.clientHeight);
                else {
                    if (h.cssText = "border:0 solid red;position:" + U(t, "position") + ";line-height:0;", "%" !== a && u.appendChild)
                        h[c ? "borderLeftWidth" : "borderTopWidth"] = n + a;
                    else {
                        if (u = t.parentNode || D.body, l = u._gsCache, d = e.ticker.frame, l && c && l.time === d)
                            return l.width * n / 100;
                        h[c ? "width" : "height"] = n + a
                    }
                    u.appendChild(z), s = parseFloat(z[c ? "offsetWidth" : "offsetHeight"]), u.removeChild(z), c && "%" === a && r.cacheWidths !== !1 && (l = u._gsCache = u._gsCache || {}, l.time = d, l.width = 100 * (s / n)), 0 !== s || o || (s = Y(t, i, n, a, !0))
                }
                return p ? -s : s
            }, V = H.calculateOffset = function(t, e, i) {
                if ("absolute" !== U(t, "position", i))
                    return 0;
                var n = "left" === e ? "Left" : "Top", a = U(t, "margin" + n, i);
                return t["offset" + n] - (Y(t, e, parseFloat(a), a.replace(w, "")) || 0)
            }, G = function(t, e) {
                var i, n, a = {};
                if (e = e || Q(t, null))
                    if (i = e.length)
                        for (; --i > -1; )
                            a[e[i].replace(C, O)] = e.getPropertyValue(e[i]);
                    else
                        for (i in e)
                            a[i] = e[i];
                else if (e = t.currentStyle || t.style)
                    for (i in e)
                        "string" == typeof i && void 0 === a[i] && (a[i.replace(C, O)] = e[i]);
                return R || (a.opacity = F(t)), n = Ae(t, e, !1), a.rotation = n.rotation, a.skewX = n.skewX, a.scaleX = n.scaleX, a.scaleY = n.scaleY, a.x = n.x, a.y = n.y, Te && (a.z = n.z, a.rotationX = n.rotationX, a.rotationY = n.rotationY, a.scaleZ = n.scaleZ), a.filters && delete a.filters, a
            }, Z = function(t, e, i, n, a) {
                var o, r, s, l = {}, d = t.style;
                for (r in i)
                    "cssText" !== r && "length" !== r && isNaN(r) && (e[r] !== (o = i[r]) || a && a[r]) && -1 === r.indexOf("Origin") && ("number" == typeof o || "string" == typeof o) && (l[r] = "auto" !== o || "left" !== r && "top" !== r ? "" !== o && "auto" !== o && "none" !== o || "string" != typeof e[r] || "" === e[r].replace(y, "") ? o : 0 : V(t, r), void 0 !== d[r] && (s = new ue(d, r, d[r], s)));
                if (n)
                    for (r in n)
                        "className" !== r && (l[r] = n[r]);
                return {difs: l,firstMPT: s}
            }, J = {width: ["Left", "Right"],height: ["Top", "Bottom"]}, K = ["marginLeft", "marginRight", "marginTop", "marginBottom"], te = function(t, e, i) {
                var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight), a = J[e], o = a.length;
                for (i = i || Q(t, null); --o > -1; )
                    n -= parseFloat(U(t, "padding" + a[o], i, !0)) || 0, n -= parseFloat(U(t, "border" + a[o] + "Width", i, !0)) || 0;
                return n
            }, ee = function(t, e) {
                (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
                var i = t.split(" "), n = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0], a = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                return null == a ? a = "0" : "center" === a && (a = "50%"), ("center" === n || isNaN(parseFloat(n)) && -1 === (n + "").indexOf("=")) && (n = "50%"), e && (e.oxp = -1 !== n.indexOf("%"), e.oyp = -1 !== a.indexOf("%"), e.oxr = "=" === n.charAt(1), e.oyr = "=" === a.charAt(1), e.ox = parseFloat(n.replace(y, "")), e.oy = parseFloat(a.replace(y, ""))), n + " " + a + (i.length > 2 ? " " + i[2] : "")
            }, ie = function(t, e) {
                return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
            }, ne = function(t, e) {
                return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t)
            }, ae = function(t, e, i, n) {
                var a, o, r, s, l = 1e-6;
                return null == t ? s = e : "number" == typeof t ? s = t : (a = 360, o = t.split("_"), r = Number(o[0].replace(y, "")) * (-1 === t.indexOf("rad") ? 1 : j) - ("=" === t.charAt(1) ? 0 : e), o.length && (n && (n[i] = e + r), -1 !== t.indexOf("short") && (r %= a, r !== r % (a / 2) && (r = 0 > r ? r + a : r - a)), -1 !== t.indexOf("_cw") && 0 > r ? r = (r + 9999999999 * a) % a - (0 | r / a) * a : -1 !== t.indexOf("ccw") && r > 0 && (r = (r - 9999999999 * a) % a - (0 | r / a) * a)), s = e + r), l > s && s > -l && (s = 0), s
            }, oe = {aqua: [0, 255, 255],lime: [0, 255, 0],silver: [192, 192, 192],black: [0, 0, 0],maroon: [128, 0, 0],teal: [0, 128, 128],blue: [0, 0, 255],navy: [0, 0, 128],white: [255, 255, 255],fuchsia: [255, 0, 255],olive: [128, 128, 0],yellow: [255, 255, 0],orange: [255, 165, 0],gray: [128, 128, 128],purple: [128, 0, 128],green: [0, 128, 0],red: [255, 0, 0],pink: [255, 192, 203],cyan: [0, 255, 255],transparent: [255, 255, 255, 0]}, re = function(t, e, i) {
                return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
            }, se = r.parseColor = function(t) {
                var e, i, n, a, o, r;
                return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), oe[t] ? oe[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), n = t.charAt(3), t = "#" + e + e + i + i + n + n), t = parseInt(t.substr(1), 16), [t >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(m), a = Number(t[0]) % 360 / 360, o = Number(t[1]) / 100, r = Number(t[2]) / 100, i = .5 >= r ? r * (o + 1) : r + o - r * o, e = 2 * r - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = re(a + 1 / 3, e, i), t[1] = re(a, e, i), t[2] = re(a - 1 / 3, e, i), t) : (t = t.match(m) || oe.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : oe.black
            }, le = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
            for (l in oe)
                le += "|" + l + "\\b";
            le = RegExp(le + ")", "gi");
            var de = function(t, e, i, n) {
                if (null == t)
                    return function(t) {
                        return t
                    };
                var a, o = e ? (t.match(le) || [""])[0] : "", r = t.split(o).join("").match(v) || [], s = t.substr(0, t.indexOf(r[0])), l = ")" === t.charAt(t.length - 1) ? ")" : "", d = -1 !== t.indexOf(" ") ? " " : ",", c = r.length, u = c > 0 ? r[0].replace(m, "") : "";
                return c ? a = e ? function(t) {
                    var e, h, p, f;
                    if ("number" == typeof t)
                        t += u;
                    else if (n && E.test(t)) {
                        for (f = t.replace(E, "|").split("|"), p = 0; f.length > p; p++)
                            f[p] = a(f[p]);
                        return f.join(",")
                    }
                    if (e = (t.match(le) || [o])[0], h = t.split(e).join("").match(v) || [], p = h.length, c > p--)
                        for (; c > ++p; )
                            h[p] = i ? h[0 | (p - 1) / 2] : r[p];
                    return s + h.join(d) + d + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                } : function(t) {
                    var e, o, h;
                    if ("number" == typeof t)
                        t += u;
                    else if (n && E.test(t)) {
                        for (o = t.replace(E, "|").split("|"), h = 0; o.length > h; h++)
                            o[h] = a(o[h]);
                        return o.join(",")
                    }
                    if (e = t.match(v) || [], h = e.length, c > h--)
                        for (; c > ++h; )
                            e[h] = i ? e[0 | (h - 1) / 2] : r[h];
                    return s + e.join(d) + l
                } : function(t) {
                    return t
                }
            }, ce = function(t) {
                return t = t.split(","), function(e, i, n, a, o, r, s) {
                    var l, d = (i + "").split(" ");
                    for (s = {}, l = 0; 4 > l; l++)
                        s[t[l]] = d[l] = d[l] || d[(l - 1) / 2 >> 0];
                    return a.parse(e, s, o, r)
                }
            }, ue = (H._setPluginRatio = function(t) {
                this.plugin.setRatio(t);
                for (var e, i, n, a, o = this.data, r = o.proxy, s = o.firstMPT, l = 1e-6; s; )
                    e = r[s.v], s.r ? e = Math.round(e) : l > e && e > -l && (e = 0), s.t[s.p] = e, s = s._next;
                if (o.autoRotate && (o.autoRotate.rotation = r.rotation), 1 === t)
                    for (s = o.firstMPT; s; ) {
                        if (i = s.t, i.type) {
                            if (1 === i.type) {
                                for (a = i.xs0 + i.s + i.xs1, n = 1; i.l > n; n++)
                                    a += i["xn" + n] + i["xs" + (n + 1)];
                                i.e = a
                            }
                        } else
                            i.e = i.s + i.xs0;
                        s = s._next
                    }
            }, function(t, e, i, n, a) {
                this.t = t, this.p = e, this.v = i, this.r = a, n && (n._prev = this, this._next = n)
            }), he = (H._parseToProxy = function(t, e, i, n, a, o) {
                var r, s, l, d, c, u = n, h = {}, p = {}, f = i._transform, m = I;
                for (i._transform = null, I = e, n = c = i.parse(t, e, n, a), I = m, o && (i._transform = f, u && (u._prev = null, u._prev && (u._prev._next = null))); n && n !== u; ) {
                    if (1 >= n.type && (s = n.p, p[s] = n.s + n.c, h[s] = n.s, o || (d = new ue(n, "s", s, d, n.r), n.c = 0), 1 === n.type))
                        for (r = n.l; --r > 0; )
                            l = "xn" + r, s = n.p + "_" + l, p[s] = n.data[l], h[s] = n[l], o || (d = new ue(n, l, s, d, n.rxp[l]));
                    n = n._next
                }
                return {proxy: h,end: p,firstMPT: d,pt: c}
            }, H.CSSPropTween = function(t, e, n, a, r, s, l, d, c, u, h) {
                this.t = t, this.p = e, this.s = n, this.c = a, this.n = l || e, t instanceof he || o.push(this.n), this.r = d, this.type = s || 0, c && (this.pr = c, i = !0), this.b = void 0 === u ? n : u, this.e = void 0 === h ? n + a : h, r && (this._next = r, r._prev = this)
            }), pe = r.parseComplex = function(t, e, i, n, a, o, r, s, l, c) {
                i = i || o || "", r = new he(t, e, 0, 0, r, c ? 2 : 1, null, !1, s, i, n), n += "";
                var u, h, p, f, v, y, w, b, x, _, k, C, S = i.split(", ").join(",").split(" "), O = n.split(", ").join(",").split(" "), M = S.length, L = d !== !1;
                for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (S = S.join(" ").replace(E, ", ").split(" "), O = O.join(" ").replace(E, ", ").split(" "), M = S.length), M !== O.length && (S = (o || "").split(" "), M = S.length), r.plugin = l, r.setRatio = c, u = 0; M > u; u++)
                    if (f = S[u], v = O[u], b = parseFloat(f), b || 0 === b)
                        r.appendXtra("", b, ie(v, b), v.replace(g, ""), L && -1 !== v.indexOf("px"), !0);
                    else if (a && ("#" === f.charAt(0) || oe[f] || T.test(f)))
                        C = "," === v.charAt(v.length - 1) ? ")," : ")", f = se(f), v = se(v), x = f.length + v.length > 6, x && !R && 0 === v[3] ? (r["xs" + r.l] += r.l ? " transparent" : "transparent", r.e = r.e.split(O[u]).join("transparent")) : (R || (x = !1), r.appendXtra(x ? "rgba(" : "rgb(", f[0], v[0] - f[0], ",", !0, !0).appendXtra("", f[1], v[1] - f[1], ",", !0).appendXtra("", f[2], v[2] - f[2], x ? "," : C, !0), x && (f = 4 > f.length ? 1 : f[3], r.appendXtra("", f, (4 > v.length ? 1 : v[3]) - f, C, !1)));
                    else if (y = f.match(m)) {
                        if (w = v.match(g), !w || w.length !== y.length)
                            return r;
                        for (p = 0, h = 0; y.length > h; h++)
                            k = y[h], _ = f.indexOf(k, p), r.appendXtra(f.substr(p, _ - p), Number(k), ie(w[h], k), "", L && "px" === f.substr(_ + k.length, 2), 0 === h), p = _ + k.length;
                        r["xs" + r.l] += f.substr(p)
                    } else
                        r["xs" + r.l] += r.l ? " " + f : f;
                if (-1 !== n.indexOf("=") && r.data) {
                    for (C = r.xs0 + r.data.s, u = 1; r.l > u; u++)
                        C += r["xs" + u] + r.data["xn" + u];
                    r.e = C + r["xs" + u]
                }
                return r.l || (r.type = -1, r.xs0 = r.e), r.xfirst || r
            }, fe = 9;
            for (l = he.prototype, l.l = l.pr = 0; --fe > 0; )
                l["xn" + fe] = 0, l["xs" + fe] = "";
            l.xs0 = "", l._next = l._prev = l.xfirst = l.data = l.plugin = l.setRatio = l.rxp = null, l.appendXtra = function(t, e, i, n, a, o) {
                var r = this, s = r.l;
                return r["xs" + s] += o && s ? " " + t : t || "", i || 0 === s || r.plugin ? (r.l++, r.type = r.setRatio ? 2 : 1, r["xs" + r.l] = n || "", s > 0 ? (r.data["xn" + s] = e + i, r.rxp["xn" + s] = a, r["xn" + s] = e, r.plugin || (r.xfirst = new he(r, "xn" + s, e, i, r.xfirst || r, 0, r.n, a, r.pr), r.xfirst.xs0 = 0), r) : (r.data = {s: e + i}, r.rxp = {}, r.s = e, r.c = i, r.r = a, r)) : (r["xs" + s] += e + (n || ""), r)
            };
            var me = function(t, e) {
                e = e || {}, this.p = e.prefix ? X(t) || t : t, s[t] = s[this.p] = this, this.format = e.formatter || de(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
            }, ge = H._registerComplexSpecialProp = function(t, e, i) {
                "object" != typeof e && (e = {parser: i});
                var n, a, o = t.split(","), r = e.defaultValue;
                for (i = i || [r], n = 0; o.length > n; n++)
                    e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || r, a = new me(o[n], e)
            }, ve = function(t) {
                if (!s[t]) {
                    var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                    ge(t, {parser: function(t, i, n, a, o, r, l) {
                            var d = (_gsScope.GreenSockGlobals || _gsScope).com.greensock.plugins[e];
                            return d ? (d._cssRegister(), s[n].parse(t, i, n, a, o, r, l)) : (q("Error: " + e + " js file not loaded."), o)
                        }})
                }
            };
            l = me.prototype, l.parseComplex = function(t, e, i, n, a, o) {
                var r, s, l, d, c, u, h = this.keyword;
                if (this.multi && (E.test(i) || E.test(e) ? (s = e.replace(E, "|").split("|"), l = i.replace(E, "|").split("|")) : h && (s = [e], l = [i])), l) {
                    for (d = l.length > s.length ? l.length : s.length, r = 0; d > r; r++)
                        e = s[r] = s[r] || this.dflt, i = l[r] = l[r] || this.dflt, h && (c = e.indexOf(h), u = i.indexOf(h), c !== u && (i = -1 === u ? l : s, i[r] += " " + h));
                    e = s.join(", "), i = l.join(", ")
                }
                return pe(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, a, o)
            }, l.parse = function(t, e, i, n, o, r) {
                return this.parseComplex(t.style, this.format(U(t, this.p, a, !1, this.dflt)), this.format(e), o, r)
            }, r.registerSpecialProp = function(t, e, i) {
                ge(t, {parser: function(t, n, a, o, r, s) {
                        var l = new he(t, a, 0, 0, r, 2, a, !1, i);
                        return l.plugin = s, l.setRatio = e(t, n, o._tween, a), l
                    },priority: i})
            };
            var ye, we = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","), be = X("transform"), xe = W + "transform", _e = X("transformOrigin"), Te = null !== X("perspective"), ke = H.Transform = function() {
                this.skewY = 0
            }, Ce = window.SVGElement, Se = function(t, e, i) {
                var n, a = D.createElementNS("http://www.w3.org/2000/svg", t), o = /([a-z])([A-Z])/g;
                for (n in i)
                    a.setAttributeNS(null, n.replace(o, "$1-$2").toLowerCase(), i[n]);
                return e.appendChild(a), a
            }, Oe = document.documentElement, Me = function() {
                var t, e, i, n = f || /Android/i.test($) && !window.chrome;
                return D.createElementNS && !n && (t = Se("svg", Oe), e = Se("rect", t, {width: 100,height: 50,x: 100}), i = e.getBoundingClientRect().left, e.style[_e] = "50% 50%", e.style[be] = "scale(0.5,0.5)", n = i === e.getBoundingClientRect().left, Oe.removeChild(t)), n
            }(), Le = function(t, e, i) {
                var n = t.getBBox();
                e = ee(e).split(" "), i.xOrigin = (-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * n.width : parseFloat(e[0])) + n.x, i.yOrigin = (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * n.height : parseFloat(e[1])) + n.y
            }, Ae = H.getTransform = function(t, e, i, n) {
                if (t._gsTransform && i && !n)
                    return t._gsTransform;
                var o, s, l, d, c, u, h, p, f, m, g, v, y, w = i ? t._gsTransform || new ke : new ke, b = 0 > w.scaleX, x = 2e-5, _ = 1e5, T = 179.99, k = T * P, C = Te ? parseFloat(U(t, _e, e, !1, "0 0 0").split(" ")[2]) || w.zOrigin || 0 : 0, S = parseFloat(r.defaultTransformPerspective) || 0;
                if (be ? o = U(t, xe, e, !0) : t.currentStyle && (o = t.currentStyle.filter.match(L), o = o && 4 === o.length ? [o[0].substr(4), Number(o[2].substr(4)), Number(o[1].substr(4)), o[3].substr(4), w.x || 0, w.y || 0].join(",") : ""), o && "none" !== o && "matrix(1, 0, 0, 1, 0, 0)" !== o) {
                    for (s = (o || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], l = s.length; --l > -1; )
                        d = Number(s[l]), s[l] = (c = d - (d |= 0)) ? (0 | c * _ + (0 > c ? -.5 : .5)) / _ + d : d;
                    if (16 === s.length) {
                        var O = s[8], M = s[9], A = s[10], E = s[12], I = s[13], D = s[14];
                        if (w.zOrigin && (D = -w.zOrigin, E = O * D - s[12], I = M * D - s[13], D = A * D + w.zOrigin - s[14]), !i || n || null == w.rotationX) {
                            var z, N, H, $, R, F, q, W = s[0], B = s[1], X = s[2], Q = s[3], Y = s[4], V = s[5], G = s[6], Z = s[7], J = s[11], K = Math.atan2(G, A), te = -k > K || K > k;
                            w.rotationX = K * j, K && ($ = Math.cos(-K), R = Math.sin(-K), z = Y * $ + O * R, N = V * $ + M * R, H = G * $ + A * R, O = Y * -R + O * $, M = V * -R + M * $, A = G * -R + A * $, J = Z * -R + J * $, Y = z, V = N, G = H), K = Math.atan2(O, W), w.rotationY = K * j, K && (F = -k > K || K > k, $ = Math.cos(-K), R = Math.sin(-K), z = W * $ - O * R, N = B * $ - M * R, H = X * $ - A * R, M = B * R + M * $, A = X * R + A * $, J = Q * R + J * $, W = z, B = N, X = H), K = Math.atan2(B, V), w.rotation = K * j, K && (q = -k > K || K > k, $ = Math.cos(-K), R = Math.sin(-K), W = W * $ + Y * R, N = B * $ + V * R, V = B * -R + V * $, G = X * -R + G * $, B = N), q && te ? w.rotation = w.rotationX = 0 : q && F ? w.rotation = w.rotationY = 0 : F && te && (w.rotationY = w.rotationX = 0), w.scaleX = (0 | Math.sqrt(W * W + B * B) * _ + .5) / _, w.scaleY = (0 | Math.sqrt(V * V + M * M) * _ + .5) / _, w.scaleZ = (0 | Math.sqrt(G * G + A * A) * _ + .5) / _, w.skewX = 0, w.perspective = J ? 1 / (0 > J ? -J : J) : 0, w.x = E, w.y = I, w.z = D
                        }
                    } else if (!(Te && !n && s.length && w.x === s[4] && w.y === s[5] && (w.rotationX || w.rotationY) || void 0 !== w.x && "none" === U(t, "display", e))) {
                        var ee = s.length >= 6, ie = ee ? s[0] : 1, ne = s[1] || 0, ae = s[2] || 0, oe = ee ? s[3] : 1;
                        w.x = s[4] || 0, w.y = s[5] || 0, u = Math.sqrt(ie * ie + ne * ne), h = Math.sqrt(oe * oe + ae * ae), p = ie || ne ? Math.atan2(ne, ie) * j : w.rotation || 0, f = ae || oe ? Math.atan2(ae, oe) * j + p : w.skewX || 0, m = u - Math.abs(w.scaleX || 0), g = h - Math.abs(w.scaleY || 0), Math.abs(f) > 90 && 270 > Math.abs(f) && (b ? (u *= -1, f += 0 >= p ? 180 : -180, p += 0 >= p ? 180 : -180) : (h *= -1, f += 0 >= f ? 180 : -180)), v = (p - w.rotation) % 180, y = (f - w.skewX) % 180, (void 0 === w.skewX || m > x || -x > m || g > x || -x > g || v > -T && T > v && !1 | v * _ || y > -T && T > y && !1 | y * _) && (w.scaleX = u, w.scaleY = h, w.rotation = p, w.skewX = f), Te && (w.rotationX = w.rotationY = w.z = 0, w.perspective = S, w.scaleZ = 1)
                    }
                    w.zOrigin = C;
                    for (l in w)
                        x > w[l] && w[l] > -x && (w[l] = 0)
                } else
                    w = {x: 0,y: 0,z: 0,scaleX: 1,scaleY: 1,scaleZ: 1,skewX: 0,skewY: 0,perspective: S,rotation: 0,rotationX: 0,rotationY: 0,zOrigin: 0};
                return i && (t._gsTransform = w), w.svg = Ce && t instanceof Ce && t.parentNode instanceof Ce, w.svg && (Le(t, U(t, _e, a, !1, "50% 50%") + "", w), ye = r.useSVGTransformAttr || Me), w.xPercent = w.yPercent = 0, w
            }, Ee = function(t) {
                var e, i, n = this.data, a = -n.rotation * P, o = a + n.skewX * P, r = 1e5, s = (0 | Math.cos(a) * n.scaleX * r) / r, l = (0 | Math.sin(a) * n.scaleX * r) / r, d = (0 | Math.sin(o) * -n.scaleY * r) / r, c = (0 | Math.cos(o) * n.scaleY * r) / r, u = this.t.style, h = this.t.currentStyle;
                if (h) {
                    i = l, l = -d, d = -i, e = h.filter, u.filter = "";
                    var p, m, g = this.t.offsetWidth, v = this.t.offsetHeight, y = "absolute" !== h.position, x = "progid:DXImageTransform.Microsoft.Matrix(M11=" + s + ", M12=" + l + ", M21=" + d + ", M22=" + c, _ = n.x + g * n.xPercent / 100, T = n.y + v * n.yPercent / 100;
                    if (null != n.ox && (p = (n.oxp ? .01 * g * n.ox : n.ox) - g / 2, m = (n.oyp ? .01 * v * n.oy : n.oy) - v / 2, _ += p - (p * s + m * l), T += m - (p * d + m * c)), y ? (p = g / 2, m = v / 2, x += ", Dx=" + (p - (p * s + m * l) + _) + ", Dy=" + (m - (p * d + m * c) + T) + ")") : x += ", sizingMethod='auto expand')", u.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(A, x) : x + " " + e, (0 === t || 1 === t) && 1 === s && 0 === l && 0 === d && 1 === c && (y && -1 === x.indexOf("Dx=0, Dy=0") || b.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf("gradient(" && e.indexOf("Alpha")) && u.removeAttribute("filter")), !y) {
                        var k, C, S, O = 8 > f ? 1 : -1;
                        for (p = n.ieOffsetX || 0, m = n.ieOffsetY || 0, n.ieOffsetX = Math.round((g - ((0 > s ? -s : s) * g + (0 > l ? -l : l) * v)) / 2 + _), n.ieOffsetY = Math.round((v - ((0 > c ? -c : c) * v + (0 > d ? -d : d) * g)) / 2 + T), fe = 0; 4 > fe; fe++)
                            C = K[fe], k = h[C], i = -1 !== k.indexOf("px") ? parseFloat(k) : Y(this.t, C, parseFloat(k), k.replace(w, "")) || 0, S = i !== n[C] ? 2 > fe ? -n.ieOffsetX : -n.ieOffsetY : 2 > fe ? p - n.ieOffsetX : m - n.ieOffsetY, u[C] = (n[C] = Math.round(i - S * (0 === fe || 2 === fe ? 1 : O))) + "px"
                    }
                }
            }, Pe = H.set3DTransformRatio = function(t) {
                var e, i, n, a, o, r, s, l, d, c, u, p, f, m, g, v, y, w, b, x, _, T, k, C = this.data, S = this.t.style, O = C.rotation * P, M = C.scaleX, L = C.scaleY, A = C.scaleZ, E = C.x, j = C.y, I = C.z, D = C.perspective;
                if (!(1 !== t && 0 !== t || "auto" !== C.force3D || C.rotationY || C.rotationX || 1 !== A || D || I))
                    return void je.call(this, t);
                if (h) {
                    var z = 1e-4;
                    z > M && M > -z && (M = A = 2e-5), z > L && L > -z && (L = A = 2e-5), !D || C.z || C.rotationX || C.rotationY || (D = 0)
                }
                if (O || C.skewX)
                    w = Math.cos(O), b = Math.sin(O), e = w, o = b, C.skewX && (O -= C.skewX * P, w = Math.cos(O), b = Math.sin(O), "simple" === C.skewType && (x = Math.tan(C.skewX * P), x = Math.sqrt(1 + x * x), w *= x, b *= x)), i = -b, r = w;
                else {
                    if (!(C.rotationY || C.rotationX || 1 !== A || D || C.svg))
                        return void (S[be] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) translate3d(" : "translate3d(") + E + "px," + j + "px," + I + "px)" + (1 !== M || 1 !== L ? " scale(" + M + "," + L + ")" : ""));
                    e = r = 1, i = o = 0
                }
                u = 1, n = a = s = l = d = c = p = f = m = 0, g = D ? -1 / D : 0, v = C.zOrigin, y = 1e5, O = C.rotationY * P, O && (w = Math.cos(O), b = Math.sin(O), d = u * -b, f = g * -b, n = e * b, s = o * b, u *= w, g *= w, e *= w, o *= w), O = C.rotationX * P, O && (w = Math.cos(O), b = Math.sin(O), x = i * w + n * b, _ = r * w + s * b, T = c * w + u * b, k = m * w + g * b, n = i * -b + n * w, s = r * -b + s * w, u = c * -b + u * w, g = m * -b + g * w, i = x, r = _, c = T, m = k), 1 !== A && (n *= A, s *= A, u *= A, g *= A), 1 !== L && (i *= L, r *= L, c *= L, m *= L), 1 !== M && (e *= M, o *= M, d *= M, f *= M), v && (p -= v, a = n * p, l = s * p, p = u * p + v), C.svg && (a += C.xOrigin - (C.xOrigin * e + C.yOrigin * i), l += C.yOrigin - (C.xOrigin * o + C.yOrigin * r)), a = (x = (a += E) - (a |= 0)) ? (0 | x * y + (0 > x ? -.5 : .5)) / y + a : a, l = (x = (l += j) - (l |= 0)) ? (0 | x * y + (0 > x ? -.5 : .5)) / y + l : l, p = (x = (p += I) - (p |= 0)) ? (0 | x * y + (0 > x ? -.5 : .5)) / y + p : p, S[be] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix3d(" : "matrix3d(") + [(0 | e * y) / y, (0 | o * y) / y, (0 | d * y) / y, (0 | f * y) / y, (0 | i * y) / y, (0 | r * y) / y, (0 | c * y) / y, (0 | m * y) / y, (0 | n * y) / y, (0 | s * y) / y, (0 | u * y) / y, (0 | g * y) / y, a, l, p, D ? 1 + -p / D : 1].join(",") + ")"
            }, je = H.set2DTransformRatio = function(t) {
                var e, i, n, a, o, r, s, l, d, c, u, h = this.data, p = this.t, f = p.style, m = h.x, g = h.y;
                return !(h.rotationX || h.rotationY || h.z || h.force3D === !0 || "auto" === h.force3D && 1 !== t && 0 !== t) || h.svg && ye || !Te ? (a = h.scaleX, o = h.scaleY, void (h.rotation || h.skewX || h.svg ? (e = h.rotation * P, i = e - h.skewX * P, n = 1e5, r = Math.cos(e) * a, s = Math.sin(e) * a, l = Math.sin(i) * -o, d = Math.cos(i) * o, h.svg && (m += h.xOrigin - (h.xOrigin * r + h.yOrigin * l), g += h.yOrigin - (h.xOrigin * s + h.yOrigin * d), u = 1e-6, u > m && m > -u && (m = 0), u > g && g > -u && (g = 0)), c = (0 | r * n) / n + "," + (0 | s * n) / n + "," + (0 | l * n) / n + "," + (0 | d * n) / n + "," + m + "," + g + ")", h.svg && ye ? p.setAttribute("transform", "matrix(" + c) : f[be] = (h.xPercent || h.yPercent ? "translate(" + h.xPercent + "%," + h.yPercent + "%) matrix(" : "matrix(") + c) : f[be] = (h.xPercent || h.yPercent ? "translate(" + h.xPercent + "%," + h.yPercent + "%) matrix(" : "matrix(") + a + ",0,0," + o + "," + m + "," + g + ")")) : (this.setRatio = Pe, void Pe.call(this, t))
            };
            ge("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent", {parser: function(t, e, i, n, o, s, l) {
                    if (n._transform)
                        return o;
                    var d, c, u, h, p, f, m, g = n._transform = Ae(t, a, !0, l.parseTransform), v = t.style, y = 1e-6, w = we.length, b = l, x = {};
                    if ("string" == typeof b.transform && be)
                        u = z.style, u[be] = b.transform, u.display = "block", u.position = "absolute", D.body.appendChild(z), d = Ae(z, null, !1), D.body.removeChild(z);
                    else if ("object" == typeof b) {
                        if (d = {scaleX: ne(null != b.scaleX ? b.scaleX : b.scale, g.scaleX),scaleY: ne(null != b.scaleY ? b.scaleY : b.scale, g.scaleY),scaleZ: ne(b.scaleZ, g.scaleZ),x: ne(b.x, g.x),y: ne(b.y, g.y),z: ne(b.z, g.z),xPercent: ne(b.xPercent, g.xPercent),yPercent: ne(b.yPercent, g.yPercent),perspective: ne(b.transformPerspective, g.perspective)}, m = b.directionalRotation, null != m)
                            if ("object" == typeof m)
                                for (u in m)
                                    b[u] = m[u];
                            else
                                b.rotation = m;
                        "string" == typeof b.x && -1 !== b.x.indexOf("%") && (d.x = 0, d.xPercent = ne(b.x, g.xPercent)), "string" == typeof b.y && -1 !== b.y.indexOf("%") && (d.y = 0, d.yPercent = ne(b.y, g.yPercent)), d.rotation = ae("rotation" in b ? b.rotation : "shortRotation" in b ? b.shortRotation + "_short" : "rotationZ" in b ? b.rotationZ : g.rotation, g.rotation, "rotation", x), Te && (d.rotationX = ae("rotationX" in b ? b.rotationX : "shortRotationX" in b ? b.shortRotationX + "_short" : g.rotationX || 0, g.rotationX, "rotationX", x), d.rotationY = ae("rotationY" in b ? b.rotationY : "shortRotationY" in b ? b.shortRotationY + "_short" : g.rotationY || 0, g.rotationY, "rotationY", x)), d.skewX = null == b.skewX ? g.skewX : ae(b.skewX, g.skewX), d.skewY = null == b.skewY ? g.skewY : ae(b.skewY, g.skewY), (c = d.skewY - g.skewY) && (d.skewX += c, d.rotation += c)
                    }
                    for (Te && null != b.force3D && (g.force3D = b.force3D, f = !0), g.skewType = b.skewType || g.skewType || r.defaultSkewType, p = g.force3D || g.z || g.rotationX || g.rotationY || d.z || d.rotationX || d.rotationY || d.perspective, p || null == b.scale || (d.scaleZ = 1); --w > -1; )
                        i = we[w], h = d[i] - g[i], (h > y || -y > h || null != b[i] || null != I[i]) && (f = !0, o = new he(g, i, g[i], h, o), i in x && (o.e = x[i]), o.xs0 = 0, o.plugin = s, n._overwriteProps.push(o.n));
                    return h = b.transformOrigin, h && g.svg && (Le(t, h, d), o = new he(g, "xOrigin", g.xOrigin, d.xOrigin - g.xOrigin, o, -1, "transformOrigin"), o.b = g.xOrigin, o.e = o.xs0 = d.xOrigin, o = new he(g, "yOrigin", g.yOrigin, d.yOrigin - g.yOrigin, o, -1, "transformOrigin"), o.b = g.yOrigin, o.e = o.xs0 = d.yOrigin, h = "0px 0px"), (h || Te && p && g.zOrigin) && (be ? (f = !0, i = _e, h = (h || U(t, i, a, !1, "50% 50%")) + "", o = new he(v, i, 0, 0, o, -1, "transformOrigin"), o.b = v[i], o.plugin = s, Te ? (u = g.zOrigin, h = h.split(" "), g.zOrigin = (h.length > 2 && (0 === u || "0px" !== h[2]) ? parseFloat(h[2]) : u) || 0, o.xs0 = o.e = h[0] + " " + (h[1] || "50%") + " 0px", o = new he(g, "zOrigin", 0, 0, o, -1, o.n), o.b = u, o.xs0 = o.e = g.zOrigin) : o.xs0 = o.e = h) : ee(h + "", g)), f && (n._transformType = g.svg && ye || !p && 3 !== this._transformType ? 2 : 3), o
                },prefix: !0}), ge("boxShadow", {defaultValue: "0px 0px 0px 0px #999",prefix: !0,color: !0,multi: !0,keyword: "inset"}), ge("borderRadius", {defaultValue: "0px",parser: function(t, e, i, o, r) {
                    e = this.format(e);
                    var s, l, d, c, u, h, p, f, m, g, v, y, w, b, x, _, T = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], k = t.style;
                    for (m = parseFloat(t.offsetWidth), g = parseFloat(t.offsetHeight), s = e.split(" "), l = 0; T.length > l; l++)
                        this.p.indexOf("border") && (T[l] = X(T[l])), u = c = U(t, T[l], a, !1, "0px"), -1 !== u.indexOf(" ") && (c = u.split(" "), u = c[0], c = c[1]), h = d = s[l], p = parseFloat(u), y = u.substr((p + "").length), w = "=" === h.charAt(1), w ? (f = parseInt(h.charAt(0) + "1", 10), h = h.substr(2), f *= parseFloat(h), v = h.substr((f + "").length - (0 > f ? 1 : 0)) || "") : (f = parseFloat(h), v = h.substr((f + "").length)), "" === v && (v = n[i] || y), v !== y && (b = Y(t, "borderLeft", p, y), x = Y(t, "borderTop", p, y), "%" === v ? (u = 100 * (b / m) + "%", c = 100 * (x / g) + "%") : "em" === v ? (_ = Y(t, "borderLeft", 1, "em"), u = b / _ + "em", c = x / _ + "em") : (u = b + "px", c = x + "px"), w && (h = parseFloat(u) + f + v, d = parseFloat(c) + f + v)), r = pe(k, T[l], u + " " + c, h + " " + d, !1, "0px", r);
                    return r
                },prefix: !0,formatter: de("0px 0px 0px 0px", !1, !0)}), ge("backgroundPosition", {defaultValue: "0 0",parser: function(t, e, i, n, o, r) {
                    var s, l, d, c, u, h, p = "background-position", m = a || Q(t, null), g = this.format((m ? f ? m.getPropertyValue(p + "-x") + " " + m.getPropertyValue(p + "-y") : m.getPropertyValue(p) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"), v = this.format(e);
                    if (-1 !== g.indexOf("%") != (-1 !== v.indexOf("%")) && (h = U(t, "backgroundImage").replace(S, ""), h && "none" !== h)) {
                        for (s = g.split(" "), l = v.split(" "), N.setAttribute("src", h), d = 2; --d > -1; )
                            g = s[d], c = -1 !== g.indexOf("%"), c !== (-1 !== l[d].indexOf("%")) && (u = 0 === d ? t.offsetWidth - N.width : t.offsetHeight - N.height, s[d] = c ? parseFloat(g) / 100 * u + "px" : 100 * (parseFloat(g) / u) + "%");
                        g = s.join(" ")
                    }
                    return this.parseComplex(t.style, g, v, o, r)
                },formatter: ee}), ge("backgroundSize", {defaultValue: "0 0",formatter: ee}), ge("perspective", {defaultValue: "0px",prefix: !0}), ge("perspectiveOrigin", {defaultValue: "50% 50%",prefix: !0}), ge("transformStyle", {prefix: !0}), ge("backfaceVisibility", {prefix: !0}), ge("userSelect", {prefix: !0}), ge("margin", {parser: ce("marginTop,marginRight,marginBottom,marginLeft")}), ge("padding", {parser: ce("paddingTop,paddingRight,paddingBottom,paddingLeft")}), ge("clip", {defaultValue: "rect(0px,0px,0px,0px)",parser: function(t, e, i, n, o, r) {
                    var s, l, d;
                    return 9 > f ? (l = t.currentStyle, d = 8 > f ? " " : ",", s = "rect(" + l.clipTop + d + l.clipRight + d + l.clipBottom + d + l.clipLeft + ")", e = this.format(e).split(",").join(d)) : (s = this.format(U(t, this.p, a, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, s, e, o, r)
                }}), ge("textShadow", {defaultValue: "0px 0px 0px #999",color: !0,multi: !0}), ge("autoRound,strictUnits", {parser: function(t, e, i, n, a) {
                    return a
                }}), ge("border", {defaultValue: "0px solid #000",parser: function(t, e, i, n, o, r) {
                    return this.parseComplex(t.style, this.format(U(t, "borderTopWidth", a, !1, "0px") + " " + U(t, "borderTopStyle", a, !1, "solid") + " " + U(t, "borderTopColor", a, !1, "#000")), this.format(e), o, r)
                },color: !0,formatter: function(t) {
                    var e = t.split(" ");
                    return e[0] + " " + (e[1] || "solid") + " " + (t.match(le) || ["#000"])[0]
                }}), ge("borderWidth", {parser: ce("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}), ge("float,cssFloat,styleFloat", {parser: function(t, e, i, n, a) {
                    var o = t.style, r = "cssFloat" in o ? "cssFloat" : "styleFloat";
                    return new he(o, r, 0, 0, a, -1, i, !1, 0, o[r], e)
                }});
            var Ie = function(t) {
                var e, i = this.t, n = i.filter || U(this.data, "filter") || "", a = 0 | this.s + this.c * t;
                100 === a && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), e = !U(this.data, "filter")) : (i.filter = n.replace(_, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + a + ")"), -1 === n.indexOf("pacity") ? 0 === a && this.xn1 || (i.filter = n + " alpha(opacity=" + a + ")") : i.filter = n.replace(b, "opacity=" + a))
            };
            ge("opacity,alpha,autoAlpha", {defaultValue: "1",parser: function(t, e, i, n, o, r) {
                    var s = parseFloat(U(t, "opacity", a, !1, "1")), l = t.style, d = "autoAlpha" === i;
                    return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + s), d && 1 === s && "hidden" === U(t, "visibility", a) && 0 !== e && (s = 0), R ? o = new he(l, "opacity", s, e - s, o) : (o = new he(l, "opacity", 100 * s, 100 * (e - s), o), o.xn1 = d ? 1 : 0, l.zoom = 1, o.type = 2, o.b = "alpha(opacity=" + o.s + ")", o.e = "alpha(opacity=" + (o.s + o.c) + ")", o.data = t, o.plugin = r, o.setRatio = Ie), d && (o = new he(l, "visibility", 0, 0, o, -1, null, !1, 0, 0 !== s ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), o.xs0 = "inherit", n._overwriteProps.push(o.n), n._overwriteProps.push(i)), o
                }});
            var De = function(t, e) {
                e && (t.removeProperty ? ("ms" === e.substr(0, 2) && (e = "M" + e.substr(1)), t.removeProperty(e.replace(k, "-$1").toLowerCase())) : t.removeAttribute(e))
            }, ze = function(t) {
                if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                    this.t.setAttribute("class", 0 === t ? this.b : this.e);
                    for (var e = this.data, i = this.t.style; e; )
                        e.v ? i[e.p] = e.v : De(i, e.p), e = e._next;
                    1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                } else
                    this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
            };
            ge("className", {parser: function(t, e, n, o, r, s, l) {
                    var d, c, u, h, p, f = t.getAttribute("class") || "", m = t.style.cssText;
                    if (r = o._classNamePT = new he(t, n, 0, 0, r, 2), r.setRatio = ze, r.pr = -11, i = !0, r.b = f, c = G(t, a), u = t._gsClassPT) {
                        for (h = {}, p = u.data; p; )
                            h[p.p] = 1, p = p._next;
                        u.setRatio(1)
                    }
                    return t._gsClassPT = r, r.e = "=" !== e.charAt(1) ? e : f.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), o._tween._duration && (t.setAttribute("class", r.e), d = Z(t, c, G(t), l, h), t.setAttribute("class", f), r.data = d.firstMPT, t.style.cssText = m, r = r.xfirst = o.parse(t, d.difs, r, s)), r
                }});
            var Ne = function(t) {
                if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                    var e, i, n, a, o = this.t.style, r = s.transform.parse;
                    if ("all" === this.e)
                        o.cssText = "", a = !0;
                    else
                        for (e = this.e.split(" ").join("").split(","), n = e.length; --n > -1; )
                            i = e[n], s[i] && (s[i].parse === r ? a = !0 : i = "transformOrigin" === i ? _e : s[i].p), De(o, i);
                    a && (De(o, be), this.t._gsTransform && delete this.t._gsTransform)
                }
            };
            for (ge("clearProps", {parser: function(t, e, n, a, o) {
                    return o = new he(t, n, 0, 0, o, 2), o.setRatio = Ne, o.e = e, o.pr = -10, o.data = a._tween, i = !0, o
                }}), l = "bezier,throwProps,physicsProps,physics2D".split(","), fe = l.length; fe--; )
                ve(l[fe]);
            l = r.prototype, l._firstPT = null, l._onInitTween = function(t, e, s) {
                if (!t.nodeType)
                    return !1;
                this._target = t, this._tween = s, this._vars = e, d = e.autoRound, i = !1, n = e.suffixMap || r.suffixMap, a = Q(t, ""), o = this._overwriteProps;
                var l, h, f, m, g, v, y, w, b, _ = t.style;
                if (c && "" === _.zIndex && (l = U(t, "zIndex", a), ("auto" === l || "" === l) && this._addLazySet(_, "zIndex", 0)), "string" == typeof e && (m = _.cssText, l = G(t, a), _.cssText = m + ";" + e, l = Z(t, l, G(t)).difs, !R && x.test(e) && (l.opacity = parseFloat(RegExp.$1)), e = l, _.cssText = m), this._firstPT = h = this.parse(t, e, null), this._transformType) {
                    for (b = 3 === this._transformType, be ? u && (c = !0, "" === _.zIndex && (y = U(t, "zIndex", a), ("auto" === y || "" === y) && this._addLazySet(_, "zIndex", 0)), p && this._addLazySet(_, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (b ? "visible" : "hidden"))) : _.zoom = 1, f = h; f && f._next; )
                        f = f._next;
                    w = new he(t, "transform", 0, 0, null, 2), this._linkCSSP(w, null, f), w.setRatio = b && Te ? Pe : be ? je : Ee, w.data = this._transform || Ae(t, a, !0), o.pop()
                }
                if (i) {
                    for (; h; ) {
                        for (v = h._next, f = m; f && f.pr > h.pr; )
                            f = f._next;
                        (h._prev = f ? f._prev : g) ? h._prev._next = h : m = h, (h._next = f) ? f._prev = h : g = h, h = v
                    }
                    this._firstPT = m
                }
                return !0
            }, l.parse = function(t, e, i, o) {
                var r, l, c, u, h, p, f, m, g, v, y = t.style;
                for (r in e)
                    p = e[r], l = s[r], l ? i = l.parse(t, p, r, this, i, o, e) : (h = U(t, r, a) + "", g = "string" == typeof p, "color" === r || "fill" === r || "stroke" === r || -1 !== r.indexOf("Color") || g && T.test(p) ? (g || (p = se(p), p = (p.length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"), i = pe(y, r, h, p, !0, "transparent", i, 0, o)) : !g || -1 === p.indexOf(" ") && -1 === p.indexOf(",") ? (c = parseFloat(h), f = c || 0 === c ? h.substr((c + "").length) : "", ("" === h || "auto" === h) && ("width" === r || "height" === r ? (c = te(t, r, a), f = "px") : "left" === r || "top" === r ? (c = V(t, r, a), f = "px") : (c = "opacity" !== r ? 0 : 1, f = "")), v = g && "=" === p.charAt(1), v ? (u = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), u *= parseFloat(p), m = p.replace(w, "")) : (u = parseFloat(p), m = g ? p.substr((u + "").length) || "" : ""), "" === m && (m = r in n ? n[r] : f), p = u || 0 === u ? (v ? u + c : u) + m : e[r], f !== m && "" !== m && (u || 0 === u) && c && (c = Y(t, r, c, f), "%" === m ? (c /= Y(t, r, 100, "%") / 100, e.strictUnits !== !0 && (h = c + "%")) : "em" === m ? c /= Y(t, r, 1, "em") : "px" !== m && (u = Y(t, r, u, m), m = "px"), v && (u || 0 === u) && (p = u + c + m)), v && (u += c), !c && 0 !== c || !u && 0 !== u ? void 0 !== y[r] && (p || "NaN" != p + "" && null != p) ? (i = new he(y, r, u || c || 0, 0, i, -1, r, !1, 0, h, p), i.xs0 = "none" !== p || "display" !== r && -1 === r.indexOf("Style") ? p : h) : q("invalid " + r + " tween value: " + e[r]) : (i = new he(y, r, c, u - c, i, 0, r, d !== !1 && ("px" === m || "zIndex" === r), 0, h, p), i.xs0 = m)) : i = pe(y, r, h, p, !0, null, i, 0, o)), o && i && !i.plugin && (i.plugin = o);
                return i
            }, l.setRatio = function(t) {
                var e, i, n, a = this._firstPT, o = 1e-6;
                if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                    if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                        for (; a; ) {
                            if (e = a.c * t + a.s, a.r ? e = Math.round(e) : o > e && e > -o && (e = 0), a.type)
                                if (1 === a.type)
                                    if (n = a.l, 2 === n)
                                        a.t[a.p] = a.xs0 + e + a.xs1 + a.xn1 + a.xs2;
                                    else if (3 === n)
                                        a.t[a.p] = a.xs0 + e + a.xs1 + a.xn1 + a.xs2 + a.xn2 + a.xs3;
                                    else if (4 === n)
                                        a.t[a.p] = a.xs0 + e + a.xs1 + a.xn1 + a.xs2 + a.xn2 + a.xs3 + a.xn3 + a.xs4;
                                    else if (5 === n)
                                        a.t[a.p] = a.xs0 + e + a.xs1 + a.xn1 + a.xs2 + a.xn2 + a.xs3 + a.xn3 + a.xs4 + a.xn4 + a.xs5;
                                    else {
                                        for (i = a.xs0 + e + a.xs1, n = 1; a.l > n; n++)
                                            i += a["xn" + n] + a["xs" + (n + 1)];
                                        a.t[a.p] = i
                                    }
                                else
                                    -1 === a.type ? a.t[a.p] = a.xs0 : a.setRatio && a.setRatio(t);
                            else
                                a.t[a.p] = e + a.xs0;
                            a = a._next
                        }
                    else
                        for (; a; )
                            2 !== a.type ? a.t[a.p] = a.b : a.setRatio(t), a = a._next;
                else
                    for (; a; )
                        2 !== a.type ? a.t[a.p] = a.e : a.setRatio(t), a = a._next
            }, l._enableTransforms = function(t) {
                this._transform = this._transform || Ae(this._target, a, !0), this._transformType = this._transform.svg && ye || !t && 3 !== this._transformType ? 2 : 3
            };
            var He = function() {
                this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
            };
            l._addLazySet = function(t, e, i) {
                var n = this._firstPT = new he(t, e, 0, 0, this._firstPT, 2);
                n.e = i, n.setRatio = He, n.data = this
            }, l._linkCSSP = function(t, e, i, n) {
                return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
            }, l._kill = function(e) {
                var i, n, a, o = e;
                if (e.autoAlpha || e.alpha) {
                    o = {};
                    for (n in e)
                        o[n] = e[n];
                    o.opacity = 1, o.autoAlpha && (o.visibility = 1)
                }
                return e.className && (i = this._classNamePT) && (a = i.xfirst, a && a._prev ? this._linkCSSP(a._prev, i._next, a._prev._prev) : a === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, a._prev), this._classNamePT = null), t.prototype._kill.call(this, o)
            };
            var $e = function(t, e, i) {
                var n, a, o, r;
                if (t.slice)
                    for (a = t.length; --a > -1; )
                        $e(t[a], e, i);
                else
                    for (n = t.childNodes, a = n.length; --a > -1; )
                        o = n[a], r = o.type, o.style && (e.push(G(o)), i && i.push(o)), 1 !== r && 9 !== r && 11 !== r || !o.childNodes.length || $e(o, e, i)
            };
            return r.cascadeTo = function(t, i, n) {
                var a, o, r, s = e.to(t, i, n), l = [s], d = [], c = [], u = [], h = e._internals.reservedProps;
                for (t = s._targets || s.target, $e(t, d, u), s.render(i, !0), $e(t, c), s.render(0, !0), s._enabled(!0), a = u.length; --a > -1; )
                    if (o = Z(u[a], d[a], c[a]), o.firstMPT) {
                        o = o.difs;
                        for (r in n)
                            h[r] && (o[r] = n[r]);
                        l.push(e.to(u[a], i, o))
                    }
                return l
            }, t.activate([r]), r
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function(t) {
        "use strict";
        var e = function() {
            return (_gsScope.GreenSockGlobals || _gsScope)[t]
        };
        "function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), module.exports = e())
    }("CSSPlugin");
    var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
    !function(t) {
        "use strict";
        var e = t.GreenSockGlobals || t, i = function(t) {
            var i, n = t.split("."), a = e;
            for (i = 0; n.length > i; i++)
                a[n[i]] = a = a[n[i]] || {};
            return a
        }, n = i("com.greensock.utils"), a = function(t) {
            var e = t.nodeType, i = "";
            if (1 === e || 9 === e || 11 === e) {
                if ("string" == typeof t.textContent)
                    return t.textContent;
                for (t = t.firstChild; t; t = t.nextSibling)
                    i += a(t)
            } else if (3 === e || 4 === e)
                return t.nodeValue;
            return i
        }, o = document, r = o.defaultView ? o.defaultView.getComputedStyle : function() {
        }, s = /([A-Z])/g, l = function(t, e, i, n) {
            var a;
            return (i = i || r(t, null)) ? (t = i.getPropertyValue(e.replace(s, "-$1").toLowerCase()), a = t || i.length ? t : i[e]) : t.currentStyle && (i = t.currentStyle, a = i[e]), n ? a : parseInt(a, 10) || 0
        }, d = function(t) {
            return t.length && t[0] && (t[0].nodeType && t[0].style && !t.nodeType || t[0].length && t[0][0]) ? !0 : !1
        }, c = function(t) {
            var e, i, n, a = [], o = t.length;
            for (e = 0; o > e; e++)
                if (i = t[e], d(i))
                    for (n = i.length, n = 0; i.length > n; n++)
                        a.push(i[n]);
                else
                    a.push(i);
            return a
        }, u = ")eefec303079ad17405c", h = /(?:<br>|<br\/>|<br \/>)/gi, p = o.all && !o.addEventListener, f = "<div style='position:relative;display:inline-block;" + (p ? "*display:inline;*zoom:1;'" : "'"), m = function(t) {
            t = t || "";
            var e = -1 !== t.indexOf("++"), i = 1;
            return e && (t = t.split("++").join("")), function() {
                return f + (t ? " class='" + t + (e ? i++ : "") + "'>" : ">")
            }
        }, g = n.SplitText = e.SplitText = function(t, e) {
            if ("string" == typeof t && (t = g.selector(t)), !t)
                throw "cannot split a null element.";
            this.elements = d(t) ? c(t) : [t], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = e || {}, this.split(e)
        }, v = function(t, e, i) {
            var n = t.nodeType;
            if (1 === n || 9 === n || 11 === n)
                for (t = t.firstChild; t; t = t.nextSibling)
                    v(t, e, i);
            else
                (3 === n || 4 === n) && (t.nodeValue = t.nodeValue.split(e).join(i))
        }, y = function(t, e) {
            for (var i = e.length; --i > -1; )
                t.push(e[i])
        }, w = function(t, e, i, n, s) {
            h.test(t.innerHTML) && (t.innerHTML = t.innerHTML.replace(h, u));
            var d, c, p, f, g, w, b, x, _, T, k, C, S, O, M = a(t), L = e.type || e.split || "chars,words,lines", A = -1 !== L.indexOf("lines") ? [] : null, E = -1 !== L.indexOf("words"), P = -1 !== L.indexOf("chars"), j = "absolute" === e.position || e.absolute === !0, I = j ? "&#173; " : " ", D = -999, z = r(t), N = l(t, "paddingLeft", z), H = l(t, "borderBottomWidth", z) + l(t, "borderTopWidth", z), $ = l(t, "borderLeftWidth", z) + l(t, "borderRightWidth", z), R = l(t, "paddingTop", z) + l(t, "paddingBottom", z), F = l(t, "paddingLeft", z) + l(t, "paddingRight", z), q = l(t, "textAlign", z, !0), W = t.clientHeight, B = t.clientWidth, X = "</div>", Q = m(e.wordsClass), U = m(e.charsClass), Y = -1 !== (e.linesClass || "").indexOf("++"), V = e.linesClass, G = -1 !== M.indexOf("<"), Z = !0, J = [], K = [], te = [];
            for (Y && (V = V.split("++").join("")), G && (M = M.split("<").join("{{LT}}")), d = M.length, f = Q(), g = 0; d > g; g++)
                if (b = M.charAt(g), ")" === b && M.substr(g, 20) === u)
                    f += (Z ? X : "") + "<BR/>", Z = !1, g !== d - 20 && M.substr(g + 20, 20) !== u && (f += " " + Q(), Z = !0), g += 19;
                else if (" " === b && " " !== M.charAt(g - 1) && g !== d - 1 && M.substr(g - 20, 20) !== u) {
                    for (f += Z ? X : "", Z = !1; " " === M.charAt(g + 1); )
                        f += I, g++;
                    (")" !== M.charAt(g + 1) || M.substr(g + 1, 20) !== u) && (f += I + Q(), Z = !0)
                } else
                    f += P && " " !== b ? U() + b + "</div>" : b;
            for (t.innerHTML = f + (Z ? X : ""), G && v(t, "{{LT}}", "<"), w = t.getElementsByTagName("*"), d = w.length, x = [], g = 0; d > g; g++)
                x[g] = w[g];
            if (A || j)
                for (g = 0; d > g; g++)
                    _ = x[g], p = _.parentNode === t, (p || j || P && !E) && (T = _.offsetTop, A && p && T !== D && "BR" !== _.nodeName && (c = [], A.push(c), D = T), j && (_._x = _.offsetLeft, _._y = T, _._w = _.offsetWidth, _._h = _.offsetHeight), A && (E !== p && P || (c.push(_), _._x -= N), p && g && (x[g - 1]._wordEnd = !0), "BR" === _.nodeName && _.nextSibling && "BR" === _.nextSibling.nodeName && A.push([])));
            for (g = 0; d > g; g++)
                _ = x[g], p = _.parentNode === t, "BR" !== _.nodeName ? (j && (C = _.style, E || p || (_._x += _.parentNode._x, _._y += _.parentNode._y), C.left = _._x + "px", C.top = _._y + "px", C.position = "absolute", C.display = "block", C.width = _._w + 1 + "px", C.height = _._h + "px"), E ? p && "" !== _.innerHTML ? K.push(_) : P && J.push(_) : p ? (t.removeChild(_), x.splice(g--, 1), d--) : !p && P && (T = !A && !j && _.nextSibling, t.appendChild(_), T || t.appendChild(o.createTextNode(" ")), J.push(_))) : A || j ? (t.removeChild(_), x.splice(g--, 1), d--) : E || t.appendChild(_);
            if (A) {
                for (j && (k = o.createElement("div"), t.appendChild(k), S = k.offsetWidth + "px", T = k.offsetParent === t ? 0 : t.offsetLeft, t.removeChild(k)), C = t.style.cssText, t.style.cssText = "display:none;"; t.firstChild; )
                    t.removeChild(t.firstChild);
                for (O = !j || !E && !P, g = 0; A.length > g; g++) {
                    for (c = A[g], k = o.createElement("div"), k.style.cssText = "display:block;text-align:" + q + ";position:" + (j ? "absolute;" : "relative;"), V && (k.className = V + (Y ? g + 1 : "")), te.push(k), d = c.length, w = 0; d > w; w++)
                        "BR" !== c[w].nodeName && (_ = c[w], k.appendChild(_), O && (_._wordEnd || E) && k.appendChild(o.createTextNode(" ")), j && (0 === w && (k.style.top = _._y + "px", k.style.left = N + T + "px"), _.style.top = "0px", T && (_.style.left = _._x - T + "px")));
                    0 === d && (k.innerHTML = "&nbsp;"), E || P || (k.innerHTML = a(k).split(String.fromCharCode(160)).join(" ")), j && (k.style.width = S, k.style.height = _._h + "px"), t.appendChild(k)
                }
                t.style.cssText = C
            }
            j && (W > t.clientHeight && (t.style.height = W - R + "px", W > t.clientHeight && (t.style.height = W + H + "px")), B > t.clientWidth && (t.style.width = B - F + "px", B > t.clientWidth && (t.style.width = B + $ + "px"))), y(i, J), y(n, K), y(s, te)
        }, b = g.prototype;
        b.split = function(t) {
            this.isSplit && this.revert(), this.vars = t || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
            for (var e = this.elements.length; --e > -1; )
                this._originals[e] = this.elements[e].innerHTML, w(this.elements[e], this.vars, this.chars, this.words, this.lines);
            return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
        }, b.revert = function() {
            if (!this._originals)
                throw "revert() call wasn't scoped properly.";
            for (var t = this._originals.length; --t > -1; )
                this.elements[t].innerHTML = this._originals[t];
            return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
        }, g.selector = t.$ || t.jQuery || function(e) {
            var i = t.$ || t.jQuery;
            return i ? (g.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
        }, g.version = "0.3.3"
    }(_gsScope), function(t) {
        "use strict";
        var e = function() {
            return (_gsScope.GreenSockGlobals || _gsScope)[t]
        };
        "function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (module.exports = e())
    }("SplitText");
    try {
        window.GreenSockGlobals = null, window._gsQueue = null, window._gsDefine = null, delete window.GreenSockGlobals, delete window._gsQueue, delete window._gsDefine
    } catch (e) {
    }
    try {
        window.GreenSockGlobals = oldgs, window._gsQueue = oldgs_queue
    } catch (e) {
    }
    if (1 == window.tplogs)
        try {
            console.groupEnd()
        } catch (e) {
        }
    !function(t) {
        t.waitForImages = {hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage"]}, t.expr[":"].uncached = function(e) {
            var i = document.createElement("img");
            return i.src = e.src, t(e).is('img[src!=""]') && !i.complete
        }, t.fn.waitForImages = function(e, i, n) {
            if (t.isPlainObject(arguments[0]) && (i = e.each, n = e.waitForAll, e = e.finished), e = e || t.noop, i = i || t.noop, n = !!n, !t.isFunction(e) || !t.isFunction(i))
                throw new TypeError("An invalid callback was supplied.");
            return this.each(function() {
                var a = t(this), o = [];
                if (n) {
                    var r = t.waitForImages.hasImageProperties || [], s = /url\((['"]?)(.*?)\1\)/g;
                    a.find("*").each(function() {
                        var e = t(this);
                        e.is("img:uncached") && o.push({src: e.attr("src"),element: e[0]}), t.each(r, function(t, i) {
                            var n = e.css(i);
                            if (!n)
                                return !0;
                            for (var a; a = s.exec(n); )
                                o.push({src: a[2],element: e[0]})
                        })
                    })
                } else
                    a.find("img:uncached").each(function() {
                        o.push({src: this.src,element: this})
                    });
                var l = o.length, d = 0;
                0 == l && e.call(a[0]), t.each(o, function(n, o) {
                    var r = new Image;
                    t(r).bind("load error", function(t) {
                        return d++, i.call(o.element, d, l, "load" == t.type), d == l ? (e.call(a[0]), !1) : void 0
                    }), r.src = o.src
                })
            })
        }
    }(jQuery)
} catch (e) {
    console.error("Error in file:http://www.drmichaels.com/media/com_uniterevolution2/assets/rs-plugin/js/jquery.themepunch.tools.min.js; Error:" + e.message)
}
try {
    !function(t, e) {
        function i() {
            var t = !1;
            return navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) ? navigator.userAgent.match(/OS 4_\d like Mac OS X/i) && (t = !0) : t = !1, t
        }
        function n(n, l) {
            if (n == e)
                return !1;
            if (n.data("aimg") != e && ("enabled" == n.data("aie8") && s(8) || "enabled" == n.data("amobile") && Q()) && n.html('<img class="tp-slider-alternative-image" src="' + n.data("aimg") + '">'), ("preview1" == l.navigationStyle || "preview3" == l.navigationStyle || "preview4" == l.navigationStyle) && (l.soloArrowLeftHalign = "left", l.soloArrowLeftValign = "center", l.soloArrowLeftHOffset = 0, l.soloArrowLeftVOffset = 0, l.soloArrowRightHalign = "right", l.soloArrowRightValign = "center", l.soloArrowRightHOffset = 0, l.soloArrowRightVOffset = 0, l.navigationArrows = "solo"), "on" == l.simplifyAll && (s(8) || i()) && (n.find(".tp-caption").each(function() {
                var e = t(this);
                e.removeClass("customin").removeClass("customout").addClass("fadein").addClass("fadeout"), e.data("splitin", ""), e.data("speed", 400)
            }), n.find(">ul>li").each(function() {
                var e = t(this);
                e.data("transition", "fade"), e.data("masterspeed", 500), e.data("slotamount", 1);
                var i = e.find(">img").first();
                i.data("kenburns", "off")
            })), l.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), "on" != l.fullWidth && "on" != l.fullScreen && (l.autoHeight = "off"), "on" == l.fullScreen && (l.autoHeight = "on"), "on" != l.fullWidth && "on" != l.fullScreen && (forceFulWidth = "off"), "on" == l.fullWidth && "off" == l.autoHeight && n.css({maxHeight: l.startheight + "px"}), Q() && "on" == l.hideThumbsOnMobile && "thumb" == l.navigationType && (l.navigationType = "none"), Q() && "on" == l.hideBulletsOnMobile && "bullet" == l.navigationType && (l.navigationType = "none"), Q() && "on" == l.hideBulletsOnMobile && "both" == l.navigationType && (l.navigationType = "none"), Q() && "on" == l.hideArrowsOnMobile && (l.navigationArrows = "none"), "on" == l.forceFullWidth && 0 == n.closest(".forcefullwidth_wrapper_tp_banner").length) {
                var f = n.parent().offset().left, m = n.parent().css("marginBottom"), g = n.parent().css("marginTop");
                m == e && (m = 0), g == e && (g = 0), n.parent().wrap('<div style="position:relative;width:100%;height:auto;margin-top:' + g + ";margin-bottom:" + m + '" class="forcefullwidth_wrapper_tp_banner"></div>'), n.closest(".forcefullwidth_wrapper_tp_banner").append('<div class="tp-fullwidth-forcer" style="width:100%;height:' + n.height() + 'px"></div>'), n.css({backgroundColor: n.parent().css("backgroundColor"),backgroundImage: n.parent().css("backgroundImage")}), n.parent().css({left: 0 - f + "px",position: "absolute",width: t(window).width()}), l.width = t(window).width()
            }
            try {
                n.parent().find(".tp-bullets.tp-thumbs").css(l.hideThumbsUnderResolution > t(window).width() && 0 != l.hideThumbsUnderResolution ? {display: "none"} : {display: "block"})
            } catch (y) {
            }
            if (!n.hasClass("revslider-initialised")) {
                n.addClass("revslider-initialised"), n.attr("id") == e && n.attr("id", "revslider-" + Math.round(1e3 * Math.random() + 5)), l.firefox13 = !1, l.ie = !t.support.opacity, l.ie9 = 9 == document.documentMode, l.origcd = l.delay;
                var w = t.fn.jquery.split("."), b = parseFloat(w[0]), x = parseFloat(w[1]);
                parseFloat(w[2] || "0"), 1 == b && 7 > x && n.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:' + w + " <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>"), b > 1 && (l.ie = !1), t.support.transition || (t.fn.transition = t.fn.animate), n.find(".caption").each(function() {
                    t(this).addClass("tp-caption")
                }), Q() && n.find(".tp-caption").each(function() {
                    var e = t(this);
                    (1 == e.data("autoplayonlyfirsttime") || "true" == e.data("autoplayonlyfirsttime")) && e.data("autoplayonlyfirsttime", "false"), (1 == e.data("autoplay") || "true" == e.data("autoplay")) && e.data("autoplay", !1)
                });
                var _ = 0, T = 0, C = "http";
                if ("https:" === location.protocol && (C = "https"), n.find(".tp-caption").each(function() {
                    try {
                        if ((t(this).data("ytid") != e || t(this).find("iframe").attr("src").toLowerCase().indexOf("youtube") > 0) && 0 == _) {
                            _ = 1;
                            var i = document.createElement("script"), n = "https";
                            i.src = n + "://www.youtube.com/iframe_api";
                            var a = document.getElementsByTagName("script")[0], o = !0;
                            t("head").find("*").each(function() {
                                t(this).attr("src") == n + "://www.youtube.com/iframe_api" && (o = !1)
                            }), o && a.parentNode.insertBefore(i, a)
                        }
                    } catch (r) {
                    }
                    try {
                        if ((t(this).data("vimeoid") != e || t(this).find("iframe").attr("src").toLowerCase().indexOf("vimeo") > 0) && 0 == T) {
                            T = 1;
                            var s = document.createElement("script");
                            s.src = C + "://a.vimeocdn.com/js/froogaloop2.min.js";
                            var a = document.getElementsByTagName("script")[0], o = !0;
                            t("head").find("*").each(function() {
                                t(this).attr("src") == C + "://a.vimeocdn.com/js/froogaloop2.min.js" && (o = !1)
                            }), o && a.parentNode.insertBefore(s, a)
                        }
                    } catch (r) {
                    }
                    try {
                        t(this).data("videomp4") != e || t(this).data("videowebm") != e
                    } catch (r) {
                    }
                }), n.find(".tp-caption video").each(function() {
                    t(this).removeClass("video-js").removeClass("vjs-default-skin"), t(this).attr("preload", ""), t(this).css({display: "none"})
                }), n.find(">ul:first-child >li").each(function() {
                    var e = t(this);
                    e.data("origindex", e.index())
                }), "on" == l.shuffle) {
                    var S = new Object, O = n.find(">ul:first-child >li:first-child");
                    S.fstransition = O.data("fstransition"), S.fsmasterspeed = O.data("fsmasterspeed"), S.fsslotamount = O.data("fsslotamount");
                    for (var M = 0; M < n.find(">ul:first-child >li").length; M++) {
                        var L = Math.round(Math.random() * n.find(">ul:first-child >li").length);
                        n.find(">ul:first-child >li:eq(" + L + ")").prependTo(n.find(">ul:first-child"))
                    }
                    var A = n.find(">ul:first-child >li:first-child");
                    A.data("fstransition", S.fstransition), A.data("fsmasterspeed", S.fsmasterspeed), A.data("fsslotamount", S.fsslotamount)
                }
                l.slots = 4, l.act = -1, l.next = 0, l.startWithSlide != e && (l.next = l.startWithSlide);
                var E = o("#")[0];
                if (E.length < 9 && E.split("slide").length > 1) {
                    var P = parseInt(E.split("slide")[1], 0);
                    1 > P && (P = 1), P > n.find(">ul:first >li").length && (P = n.find(">ul:first >li").length), l.next = P - 1
                }
                l.firststart = 1, l.navigationHOffset == e && (l.navOffsetHorizontal = 0), l.navigationVOffset == e && (l.navOffsetVertical = 0), n.append('<div class="tp-loader ' + l.spinner + '"><div class="dot1"></div><div class="dot2"></div><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'), 0 == n.find(".tp-bannertimer").length && n.append('<div class="tp-bannertimer" style="visibility:hidden"></div>');
                var j = n.find(".tp-bannertimer");
                if (j.length > 0 && j.css({width: "0%"}), n.addClass("tp-simpleresponsive"), l.container = n, l.slideamount = n.find(">ul:first >li").length, 0 == n.height() && n.height(l.startheight), (l.startwidth == e || 0 == l.startwidth) && (l.startwidth = n.width()), (l.startheight == e || 0 == l.startheight) && (l.startheight = n.height()), l.width = n.width(), l.height = n.height(), l.bw = l.startwidth / n.width(), l.bh = l.startheight / n.height(), l.width != l.startwidth && (l.height = Math.round(l.startheight * (l.width / l.startwidth)), n.height(l.height)), 0 != l.shadow) {
                    n.parent().append('<div class="tp-bannershadow tp-shadow' + l.shadow + '"></div>');
                    var f = 0;
                    "on" == l.forceFullWidth && (f = 0 - l.container.parent().offset().left), n.parent().find(".tp-bannershadow").css({width: l.width,left: f})
                }
                n.find("ul").css({display: "none"}), n.find("ul").css({display: "block"}), v(n, l), "off" != l.parallax && J(n, l), l.slideamount > 1 && d(n, l), l.slideamount > 1 && "thumb" == l.navigationType && te(n, l), l.slideamount > 1 && c(n, l), "on" == l.keyboardNavigation && u(n, l), h(n, l), l.hideThumbs > 0 && p(n, l), setTimeout(function() {
                    k(n, l)
                }, l.startDelay), l.startDelay = 0, l.slideamount > 1 && X(n, l), setTimeout(function() {
                    n.trigger("revolution.slide.onloaded")
                }, 500), t("body").data("rs-fullScreenMode", !1), t(window).on("mozfullscreenchange webkitfullscreenchange fullscreenchange", function() {
                    t("body").data("rs-fullScreenMode", !t("body").data("rs-fullScreenMode")), t("body").data("rs-fullScreenMode") && setTimeout(function() {
                        t(window).trigger("resize")
                    }, 200)
                });
                var I = "resize.revslider-" + n.attr("id");
                t(window).on(I, function() {
                    if (n == e)
                        return !1;
                    if (0 != t("body").find(n) && "on" == l.forceFullWidth) {
                        var i = l.container.closest(".forcefullwidth_wrapper_tp_banner").offset().left;
                        l.container.parent().css({left: 0 - i + "px",width: t(window).width()})
                    }
                    (n.outerWidth(!0) != l.width || n.is(":hidden")) && r(n, l)
                });
                try {
                    0 != l.hideThumbsUnderResoluition && "thumb" == l.navigationType && t(".tp-bullets").css(l.hideThumbsUnderResoluition > t(window).width() ? {display: "none"} : {display: "block"})
                } catch (y) {
                }
                n.find(".tp-scrollbelowslider").on("click", function() {
                    var e = 0;
                    try {
                        e = t("body").find(l.fullScreenOffsetContainer).height()
                    } catch (i) {
                    }
                    try {
                        e -= parseInt(t(this).data("scrolloffset"), 0)
                    } catch (i) {
                    }
                    t("body,html").animate({scrollTop: n.offset().top + n.find(">ul >li").height() - e + "px"}, {duration: 400})
                });
                var D = n.parent();
                t(window).width() < l.hideSliderAtLimit && (n.trigger("stoptimer"), "none" != D.css("display") && D.data("olddisplay", D.css("display")), D.css({display: "none"})), a(n, l)
            }
        }
        t.fn.extend({revolution: function(i) {
                var a = {delay: 9e3,startheight: 500,startwidth: 960,fullScreenAlignForce: "off",autoHeight: "off",hideTimerBar: "off",hideThumbs: 200,hideNavDelayOnMobile: 1500,thumbWidth: 100,thumbHeight: 50,thumbAmount: 3,navigationType: "bullet",navigationArrows: "solo",navigationInGrid: "off",hideThumbsOnMobile: "off",hideBulletsOnMobile: "off",hideArrowsOnMobile: "off",hideThumbsUnderResoluition: 0,navigationStyle: "round",navigationHAlign: "center",navigationVAlign: "bottom",navigationHOffset: 0,navigationVOffset: 20,soloArrowLeftHalign: "left",soloArrowLeftValign: "center",soloArrowLeftHOffset: 20,soloArrowLeftVOffset: 0,soloArrowRightHalign: "right",soloArrowRightValign: "center",soloArrowRightHOffset: 20,soloArrowRightVOffset: 0,keyboardNavigation: "on",touchenabled: "on",onHoverStop: "on",stopAtSlide: -1,stopAfterLoops: -1,hideCaptionAtLimit: 0,hideAllCaptionAtLimit: 0,hideSliderAtLimit: 0,shadow: 0,fullWidth: "off",fullScreen: "off",minFullScreenHeight: 0,fullScreenOffsetContainer: "",fullScreenOffset: "0",dottedOverlay: "none",forceFullWidth: "off",spinner: "spinner0",swipe_treshold: 75,swipe_min_touches: 1,drag_block_vertical: !1,isJoomla: !1,parallax: "off",parallaxLevels: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],parallaxBgFreeze: "off",parallaxOpacity: "on",parallaxDisableOnMobile: "off",panZoomDisableOnMobile: "off",simplifyAll: "on",minHeight: 0,nextSlideOnWindowFocus: "off",startDelay: 0};
                return i = t.extend({}, a, i), this.each(function() {
                    if (1 == window.tplogs)
                        try {
                            console.groupCollapsed("Slider Revolution 4.6.3 Initialisation on " + t(this).attr("id")), console.groupCollapsed("Used Options:"), console.info(i), console.groupEnd(), console.groupCollapsed("Tween Engine:")
                        } catch (a) {
                        }
                    if (punchgs.TweenLite == e) {
                        if (1 == window.tplogs)
                            try {
                                console.error("GreenSock Engine Does not Exist!")
                            } catch (a) {
                            }
                        return !1
                    }
                    if (punchgs.force3D = !0, 1 == window.tplogs)
                        try {
                            console.info("GreenSock Engine Version in Slider Revolution:" + punchgs.TweenLite.version)
                        } catch (a) {
                        }
                    if ("on" == i.simplifyAll || (punchgs.TweenLite.lagSmoothing(1e3, 16), punchgs.force3D = "true"), 1 == window.tplogs)
                        try {
                            console.groupEnd(), console.groupEnd()
                        } catch (a) {
                        }
                    n(t(this), i)
                })
            },revscroll: function(i) {
                return this.each(function() {
                    var n = t(this);
                    n != e && n.length > 0 && t("body").find("#" + n.attr("id")).length > 0 && t("body,html").animate({scrollTop: n.offset().top + n.find(">ul >li").height() - i + "px"}, {duration: 400})
                })
            },revredraw: function() {
                return this.each(function() {
                    var i = t(this);
                    if (i != e && i.length > 0 && t("body").find("#" + i.attr("id")).length > 0) {
                        var n = i.parent().find(".tp-bannertimer"), a = n.data("opt");
                        r(i, a)
                    }
                })
            },revkill: function() {
                var i = this, n = t(this);
                if (n != e && n.length > 0 && t("body").find("#" + n.attr("id")).length > 0) {
                    n.data("conthover", 1), n.data("conthover-changed", 1), n.trigger("revolution.slide.onpause");
                    var a = n.parent().find(".tp-bannertimer"), o = a.data("opt");
                    o.bannertimeronpause = !0, n.trigger("stoptimer"), punchgs.TweenLite.killTweensOf(n.find("*"), !1), punchgs.TweenLite.killTweensOf(n, !1), n.unbind("hover, mouseover, mouseenter,mouseleave, resize");
                    var r = "resize.revslider-" + n.attr("id");
                    t(window).off(r), n.find("*").each(function() {
                        var i = t(this);
                        i.unbind("on, hover, mouseenter,mouseleave,mouseover, resize,restarttimer, stoptimer"), i.off("on, hover, mouseenter,mouseleave,mouseover, resize"), i.data("mySplitText", null), i.data("ctl", null), i.data("tween") != e && i.data("tween").kill(), i.data("kenburn") != e && i.data("kenburn").kill(), i.remove(), i.empty(), i = null
                    }), punchgs.TweenLite.killTweensOf(n.find("*"), !1), punchgs.TweenLite.killTweensOf(n, !1), a.remove();
                    try {
                        n.closest(".forcefullwidth_wrapper_tp_banner").remove()
                    } catch (s) {
                    }
                    try {
                        n.closest(".rev_slider_wrapper").remove()
                    } catch (s) {
                    }
                    try {
                        n.remove()
                    } catch (s) {
                    }
                    return n.empty(), n.html(), n = null, o = null, delete i.container, delete i.opt, !0
                }
                return !1
            },revpause: function() {
                return this.each(function() {
                    var i = t(this);
                    if (i != e && i.length > 0 && t("body").find("#" + i.attr("id")).length > 0) {
                        i.data("conthover", 1), i.data("conthover-changed", 1), i.trigger("revolution.slide.onpause");
                        var n = i.parent().find(".tp-bannertimer"), a = n.data("opt");
                        a.bannertimeronpause = !0, i.trigger("stoptimer")
                    }
                })
            },revresume: function() {
                return this.each(function() {
                    var i = t(this);
                    if (i != e && i.length > 0 && t("body").find("#" + i.attr("id")).length > 0) {
                        i.data("conthover", 0), i.data("conthover-changed", 1), i.trigger("revolution.slide.onresume");
                        var n = i.parent().find(".tp-bannertimer"), a = n.data("opt");
                        a.bannertimeronpause = !1, i.trigger("starttimer")
                    }
                })
            },revnext: function() {
                return this.each(function() {
                    var i = t(this);
                    i != e && i.length > 0 && t("body").find("#" + i.attr("id")).length > 0 && i.parent().find(".tp-rightarrow").click()
                })
            },revprev: function() {
                return this.each(function() {
                    var i = t(this);
                    i != e && i.length > 0 && t("body").find("#" + i.attr("id")).length > 0 && i.parent().find(".tp-leftarrow").click()
                })
            },revmaxslide: function() {
                return t(this).find(">ul:first-child >li").length
            },revcurrentslide: function() {
                var i = t(this);
                if (i != e && i.length > 0 && t("body").find("#" + i.attr("id")).length > 0) {
                    var n = i.parent().find(".tp-bannertimer"), a = n.data("opt");
                    return a.act
                }
            },revlastslide: function() {
                var i = t(this);
                if (i != e && i.length > 0 && t("body").find("#" + i.attr("id")).length > 0) {
                    var n = i.parent().find(".tp-bannertimer"), a = n.data("opt");
                    return a.lastslide
                }
            },revshowslide: function(i) {
                return this.each(function() {
                    var n = t(this);
                    n != e && n.length > 0 && t("body").find("#" + n.attr("id")).length > 0 && (n.data("showus", i), n.parent().find(".tp-rightarrow").click())
                })
            }}), function() {
            var t, e, i = {hidden: "visibilitychange",webkitHidden: "webkitvisibilitychange",mozHidden: "mozvisibilitychange",msHidden: "msvisibilitychange"};
            for (t in i)
                if (t in document) {
                    e = i[t];
                    break
                }
            return function(i) {
                return i && document.addEventListener(e, i), !document[t]
            }
        }();
        var a = function(i, n) {
            var a = document.documentMode === e, o = window.chrome;
            a && !o ? t(window).on("focusin", function() {
                return i == e ? !1 : void setTimeout(function() {
                    "on" == n.nextSlideOnWindowFocus && i.revnext(), i.revredraw()
                }, 300)
            }).on("focusout", function() {
            }) : window.addEventListener ? (window.addEventListener("focus", function() {
                return i == e ? !1 : void setTimeout(function() {
                    "on" == n.nextSlideOnWindowFocus && i.revnext(), i.revredraw()
                }, 300)
            }, !1), window.addEventListener("blur", function() {
            }, !1)) : (window.attachEvent("focus", function() {
                setTimeout(function() {
                    return i == e ? !1 : ("on" == n.nextSlideOnWindowFocus && i.revnext(), void i.revredraw())
                }, 300)
            }), window.attachEvent("blur", function() {
            }))
        }, o = function(t) {
            for (var e, i = [], n = window.location.href.slice(window.location.href.indexOf(t) + 1).split("_"), a = 0; a < n.length; a++)
                n[a] = n[a].replace("%3D", "="), e = n[a].split("="), i.push(e[0]), i[e[0]] = e[1];
            return i
        }, r = function(i, n) {
            if (i == e)
                return !1;
            try {
                0 != n.hideThumbsUnderResoluition && "thumb" == n.navigationType && t(".tp-bullets").css(n.hideThumbsUnderResoluition > t(window).width() ? {display: "none"} : {display: "block"})
            } catch (a) {
            }
            i.find(".defaultimg").each(function() {
                g(t(this), n)
            });
            var o = i.parent();
            t(window).width() < n.hideSliderAtLimit ? (i.trigger("stoptimer"), "none" != o.css("display") && o.data("olddisplay", o.css("display")), o.css({display: "none"})) : i.is(":hidden") && (o.css(o.data("olddisplay") != e && "undefined" != o.data("olddisplay") && "none" != o.data("olddisplay") ? {display: o.data("olddisplay")} : {display: "block"}), i.trigger("restarttimer"), setTimeout(function() {
                r(i, n)
            }, 150));
            var s = 0;
            "on" == n.forceFullWidth && (s = 0 - n.container.parent().offset().left);
            try {
                i.parent().find(".tp-bannershadow").css({width: n.width,left: s})
            } catch (a) {
            }
            var l = i.find(">ul >li:eq(" + n.act + ") .slotholder"), d = i.find(">ul >li:eq(" + n.next + ") .slotholder");
            b(i, n, i), punchgs.TweenLite.set(d.find(".defaultimg"), {opacity: 0}), l.find(".defaultimg").css({opacity: 1}), d.find(".defaultimg").each(function() {
                var a = t(this);
                "on" == n.panZoomDisableOnMobile || a.data("kenburn") != e && (a.data("kenburn").restart(), Y(i, n, !0))
            });
            var c = i.find(">ul >li:eq(" + n.next + ")"), u = i.parent().find(".tparrows");
            u.hasClass("preview2") && u.css({width: parseInt(u.css("minWidth"), 0)}), z(c, n, !0), f(i, n)
        }, s = function(e, i) {
            var n = t('<div style="display:none;"/>').appendTo(t("body"));
            n.html("<!--[if " + (i || "") + " IE " + (e || "") + "]><a>&nbsp;</a><![endif]-->");
            var a = n.find("a").length;
            return n.remove(), a
        }, l = function(t, e) {
            t.next == e.find(">ul >li").length - 1 && (t.looptogo = t.looptogo - 1, t.looptogo <= 0 && (t.stopLoop = "on")), k(e, t)
        }, d = function(e, i) {
            var n = "hidebullets";
            0 == i.hideThumbs && (n = ""), ("bullet" == i.navigationType || "both" == i.navigationType) && e.parent().append('<div class="tp-bullets ' + n + " simplebullets " + i.navigationStyle + '"></div>');
            var a = e.parent().find(".tp-bullets");
            e.find(">ul:first >li").each(function(t) {
                e.find(">ul:first >li:eq(" + t + ") img:first").attr("src"), a.append('<div class="bullet"></div>'), a.find(".bullet:first")
            }), a.find(".bullet").each(function(n) {
                var a = t(this);
                n == i.slideamount - 1 && a.addClass("last"), 0 == n && a.addClass("first"), a.click(function() {
                    var t = !1, n = a.index();
                    ("withbullet" == i.navigationArrows || "nexttobullets" == i.navigationArrows) && (n = a.index() - 1), n == i.act && (t = !0), 0 != i.transition || t || (i.next = n, l(i, e))
                })
            }), a.append('<div class="tpclear"></div>'), f(e, i)
        }, c = function(t, i) {
            function n(e) {
                t.parent().append('<div style="' + a + '" class="tp-' + e + "arrow " + o + " tparrows " + r + '"><div class="tp-arr-allwrapper"><div class="tp-arr-iwrapper"><div class="tp-arr-imgholder"></div><div class="tp-arr-imgholder2"></div><div class="tp-arr-titleholder"></div><div class="tp-arr-subtitleholder"></div></div></div></div>')
            }
            var a = (t.find(".tp-bullets"), ""), o = "hidearrows", r = i.navigationStyle;
            0 == i.hideThumbs && (o = ""), "none" == i.navigationArrows && (a = "visibility:hidden;display:none"), i.soloArrowStyle = "default " + i.navigationStyle, "none" != i.navigationArrows && "nexttobullets" != i.navigationArrows && (r = i.soloArrowStyle), n("left"), n("right"), t.parent().find(".tp-rightarrow").click(function() {
                0 == i.transition && (i.next = t.data("showus") != e && -1 != t.data("showus") ? t.data("showus") - 1 : i.next + 1, t.data("showus", -1), i.next >= i.slideamount && (i.next = 0), i.next < 0 && (i.next = 0), i.act != i.next && l(i, t))
            }), t.parent().find(".tp-leftarrow").click(function() {
                0 == i.transition && (i.next = i.next - 1, i.leftarrowpressed = 1, i.next < 0 && (i.next = i.slideamount - 1), l(i, t))
            }), f(t, i)
        }, u = function(i, n) {
            t(document).keydown(function(t) {
                0 == n.transition && 39 == t.keyCode && (n.next = i.data("showus") != e && -1 != i.data("showus") ? i.data("showus") - 1 : n.next + 1, i.data("showus", -1), n.next >= n.slideamount && (n.next = 0), n.next < 0 && (n.next = 0), n.act != n.next && l(n, i)), 0 == n.transition && 37 == t.keyCode && (n.next = n.next - 1, n.leftarrowpressed = 1, n.next < 0 && (n.next = n.slideamount - 1), l(n, i))
            }), f(i, n)
        }, h = function(e, i) {
            var n = "vertical";
            "on" == i.touchenabled && (1 == i.drag_block_vertical && (n = "none"), e.swipe({allowPageScroll: n,fingers: i.swipe_min_touches,treshold: i.swipe_treshold,swipe: function(a, o) {
                    switch (o) {
                        case "left":
                            0 == i.transition && (i.next = i.next + 1, i.next == i.slideamount && (i.next = 0), l(i, e));
                            break;
                        case "right":
                            0 == i.transition && (i.next = i.next - 1, i.leftarrowpressed = 1, i.next < 0 && (i.next = i.slideamount - 1), l(i, e));
                            break;
                        case "up":
                            "none" == n && t("html, body").animate({scrollTop: e.offset().top + e.height() + "px"});
                            break;
                        case "down":
                            "none" == n && t("html, body").animate({scrollTop: e.offset().top - t(window).height() + "px"})
                    }
                }}))
        }, p = function(t, e) {
            var i = t.parent().find(".tp-bullets"), n = t.parent().find(".tparrows");
            if (null == i) {
                t.append('<div class=".tp-bullets"></div>');
                var i = t.parent().find(".tp-bullets")
            }
            if (null == n) {
                t.append('<div class=".tparrows"></div>');
                var n = t.parent().find(".tparrows")
            }
            if (t.data("hideThumbs", e.hideThumbs), i.addClass("hidebullets"), n.addClass("hidearrows"), Q())
                try {
                    t.hammer().on("touch", function() {
                        t.addClass("hovered"), "on" == e.onHoverStop && t.trigger("stoptimer"), clearTimeout(t.data("hideThumbs")), i.removeClass("hidebullets"), n.removeClass("hidearrows")
                    }), t.hammer().on("release", function() {
                        t.removeClass("hovered"), t.trigger("starttimer"), t.hasClass("hovered") || i.hasClass("hovered") || t.data("hideThumbs", setTimeout(function() {
                            i.addClass("hidebullets"), n.addClass("hidearrows"), t.trigger("starttimer")
                        }, e.hideNavDelayOnMobile))
                    })
                } catch (a) {
                }
            else
                i.hover(function() {
                    e.overnav = !0, "on" == e.onHoverStop && t.trigger("stoptimer"), i.addClass("hovered"), clearTimeout(t.data("hideThumbs")), i.removeClass("hidebullets"), n.removeClass("hidearrows")
                }, function() {
                    e.overnav = !1, t.trigger("starttimer"), i.removeClass("hovered"), t.hasClass("hovered") || i.hasClass("hovered") || t.data("hideThumbs", setTimeout(function() {
                        i.addClass("hidebullets"), n.addClass("hidearrows")
                    }, e.hideThumbs))
                }), n.hover(function() {
                    e.overnav = !0, "on" == e.onHoverStop && t.trigger("stoptimer"), i.addClass("hovered"), clearTimeout(t.data("hideThumbs")), i.removeClass("hidebullets"), n.removeClass("hidearrows")
                }, function() {
                    e.overnav = !1, t.trigger("starttimer"), i.removeClass("hovered")
                }), t.on("mouseenter", function() {
                    t.addClass("hovered"), "on" == e.onHoverStop && t.trigger("stoptimer"), clearTimeout(t.data("hideThumbs")), i.removeClass("hidebullets"), n.removeClass("hidearrows")
                }), t.on("mouseleave", function() {
                    t.removeClass("hovered"), t.trigger("starttimer"), t.hasClass("hovered") || i.hasClass("hovered") || t.data("hideThumbs", setTimeout(function() {
                        i.addClass("hidebullets"), n.addClass("hidearrows")
                    }, e.hideThumbs))
                })
        }, f = function(e, i) {
            var n = e.parent(), a = n.find(".tp-bullets");
            if ("thumb" == i.navigationType) {
                a.find(".thumb").each(function() {
                    var e = t(this);
                    e.css({width: i.thumbWidth * i.bw + "px",height: i.thumbHeight * i.bh + "px"})
                });
                var o = a.find(".tp-mask");
                o.width(i.thumbWidth * i.thumbAmount * i.bw), o.height(i.thumbHeight * i.bh), o.parent().width(i.thumbWidth * i.thumbAmount * i.bw), o.parent().height(i.thumbHeight * i.bh)
            }
            var r = n.find(".tp-leftarrow"), s = n.find(".tp-rightarrow");
            "thumb" == i.navigationType && "nexttobullets" == i.navigationArrows && (i.navigationArrows = "solo"), "nexttobullets" == i.navigationArrows && (r.prependTo(a).css({"float": "left"}), s.insertBefore(a.find(".tpclear")).css({"float": "left"}));
            var l = 0;
            "on" == i.forceFullWidth && (l = 0 - i.container.parent().offset().left);
            var d = 0, c = 0;
            if ("on" == i.navigationInGrid && (d = e.width() > i.startwidth ? (e.width() - i.startwidth) / 2 : 0, c = e.height() > i.startheight ? (e.height() - i.startheight) / 2 : 0), "none" != i.navigationArrows && "nexttobullets" != i.navigationArrows) {
                var u = i.soloArrowLeftValign, h = i.soloArrowLeftHalign, p = i.soloArrowRightValign, f = i.soloArrowRightHalign, m = i.soloArrowLeftVOffset, g = i.soloArrowLeftHOffset, v = i.soloArrowRightVOffset, y = i.soloArrowRightHOffset;
                r.css({position: "absolute"}), s.css({position: "absolute"}), "center" == u ? r.css({top: "50%",marginTop: m - Math.round(r.innerHeight() / 2) + "px"}) : "bottom" == u ? r.css({top: "auto",bottom: 0 + m + "px"}) : "top" == u && r.css({bottom: "auto",top: 0 + m + "px"}), "center" == h ? r.css({left: "50%",marginLeft: l + g - Math.round(r.innerWidth() / 2) + "px"}) : "left" == h ? r.css({left: d + g + l + "px"}) : "right" == h && r.css({right: d + g - l + "px"}), "center" == p ? s.css({top: "50%",marginTop: v - Math.round(s.innerHeight() / 2) + "px"}) : "bottom" == p ? s.css({top: "auto",bottom: 0 + v + "px"}) : "top" == p && s.css({bottom: "auto",top: 0 + v + "px"}), "center" == f ? s.css({left: "50%",marginLeft: l + y - Math.round(s.innerWidth() / 2) + "px"}) : "left" == f ? s.css({left: d + y + l + "px"}) : "right" == f && s.css({right: d + y - l + "px"}), null != r.position() && r.css({top: Math.round(parseInt(r.position().top, 0)) + "px"}), null != s.position() && s.css({top: Math.round(parseInt(s.position().top, 0)) + "px"})
            }
            "none" == i.navigationArrows && (r.css({visibility: "hidden"}), s.css({visibility: "hidden"}));
            var w = i.navigationVAlign, b = i.navigationHAlign, x = i.navigationVOffset * i.bh, _ = i.navigationHOffset * i.bw;
            "center" == w && a.css({top: "50%",marginTop: x - Math.round(a.innerHeight() / 2) + "px"}), "bottom" == w && a.css({bottom: 0 + x + "px"}), "top" == w && a.css({top: 0 + x + "px"}), "center" == b && a.css({left: "50%",marginLeft: l + _ - Math.round(a.innerWidth() / 2) + "px"}), "left" == b && a.css({left: 0 + _ + l + "px"}), "right" == b && a.css({right: 0 + _ - l + "px"})
        }, m = function(i) {
            var n = i.container;
            i.beforli = i.next - 1, i.comingli = i.next + 1, i.beforli < 0 && (i.beforli = i.slideamount - 1), i.comingli >= i.slideamount && (i.comingli = 0);
            var a = n.find(">ul:first-child >li:eq(" + i.comingli + ")"), o = n.find(">ul:first-child >li:eq(" + i.beforli + ")"), r = o.find(".defaultimg").attr("src"), s = a.find(".defaultimg").attr("src");
            i.arr == e && (i.arr = n.parent().find(".tparrows"), i.rar = n.parent().find(".tp-rightarrow"), i.lar = n.parent().find(".tp-leftarrow"), i.raimg = i.rar.find(".tp-arr-imgholder"), i.laimg = i.lar.find(".tp-arr-imgholder"), i.raimg_b = i.rar.find(".tp-arr-imgholder2"), i.laimg_b = i.lar.find(".tp-arr-imgholder2"), i.ratit = i.rar.find(".tp-arr-titleholder"), i.latit = i.lar.find(".tp-arr-titleholder"));
            var l = i.arr, d = i.rar, c = i.lar, u = i.raimg, h = i.laimg, p = i.raimg_b, f = i.laimg_b, m = i.ratit, g = i.latit;
            if (a.data("title") != e && m.html(a.data("title")), o.data("title") != e && g.html(o.data("title")), d.hasClass("itishovered") && d.width(m.outerWidth(!0) + parseInt(d.css("minWidth"), 0)), c.hasClass("itishovered") && c.width(g.outerWidth(!0) + parseInt(c.css("minWidth"), 0)), l.hasClass("preview2") && !l.hasClass("hashoveralready"))
                if (l.addClass("hashoveralready"), Q()) {
                    var l = t(this), v = l.find(".tp-arr-titleholder");
                    v.addClass("alwayshidden"), punchgs.TweenLite.set(v, {autoAlpha: 0})
                } else
                    l.hover(function() {
                        var e = t(this), i = e.find(".tp-arr-titleholder");
                        t(window).width() > 767 && e.width(i.outerWidth(!0) + parseInt(e.css("minWidth"), 0)), e.addClass("itishovered")
                    }, function() {
                        var e = t(this);
                        e.find(".tp-arr-titleholder"), e.css({width: parseInt(e.css("minWidth"), 0)}), e.removeClass("itishovered")
                    });
            o.data("thumb") != e && (r = o.data("thumb")), a.data("thumb") != e && (s = a.data("thumb")), l.hasClass("preview4") ? (p.css({backgroundImage: "url(" + s + ")"}), f.css({backgroundImage: "url(" + r + ")"}), punchgs.TweenLite.fromTo(p, .8, {force3D: punchgs.force3d,x: 0}, {x: -u.width(),ease: punchgs.Power3.easeOut,delay: 1,onComplete: function() {
                    u.css({backgroundImage: "url(" + s + ")"}), punchgs.TweenLite.set(p, {x: 0})
                }}), punchgs.TweenLite.fromTo(f, .8, {force3D: punchgs.force3d,x: 0}, {x: u.width(),ease: punchgs.Power3.easeOut,delay: 1,onComplete: function() {
                    h.css({backgroundImage: "url(" + r + ")"}), punchgs.TweenLite.set(f, {x: 0})
                }}), punchgs.TweenLite.fromTo(u, .8, {x: 0}, {force3D: punchgs.force3d,x: -u.width(),ease: punchgs.Power3.easeOut,delay: 1,onComplete: function() {
                    punchgs.TweenLite.set(u, {x: 0})
                }}), punchgs.TweenLite.fromTo(h, .8, {x: 0}, {force3D: punchgs.force3d,x: u.width(),ease: punchgs.Power3.easeOut,delay: 1,onComplete: function() {
                    punchgs.TweenLite.set(h, {x: 0})
                }})) : (punchgs.TweenLite.to(u, .5, {autoAlpha: 0,onComplete: function() {
                    u.css({backgroundImage: "url(" + s + ")"}), h.css({backgroundImage: "url(" + r + ")"})
                }}), punchgs.TweenLite.to(h, .5, {autoAlpha: 0,onComplete: function() {
                    punchgs.TweenLite.to(u, .5, {autoAlpha: 1,delay: .2}), punchgs.TweenLite.to(h, .5, {autoAlpha: 1,delay: .2})
                }})), d.hasClass("preview4") && !d.hasClass("hashoveralready") && (d.addClass("hashoveralready"), d.hover(function() {
                var e = t(this).find(".tp-arr-iwrapper"), i = t(this).find(".tp-arr-allwrapper");
                punchgs.TweenLite.fromTo(e, .4, {x: e.width()}, {x: 0,delay: .3,ease: punchgs.Power3.easeOut,overwrite: "all"}), punchgs.TweenLite.to(i, .2, {autoAlpha: 1,overwrite: "all"})
            }, function() {
                var e = t(this).find(".tp-arr-iwrapper"), i = t(this).find(".tp-arr-allwrapper");
                punchgs.TweenLite.to(e, .4, {x: e.width(),ease: punchgs.Power3.easeOut,delay: .2,overwrite: "all"}), punchgs.TweenLite.to(i, .2, {delay: .6,autoAlpha: 0,overwrite: "all"})
            }), c.hover(function() {
                var e = t(this).find(".tp-arr-iwrapper"), i = t(this).find(".tp-arr-allwrapper");
                punchgs.TweenLite.fromTo(e, .4, {x: 0 - e.width()}, {x: 0,delay: .3,ease: punchgs.Power3.easeOut,overwrite: "all"}), punchgs.TweenLite.to(i, .2, {autoAlpha: 1,overwrite: "all"})
            }, function() {
                var e = t(this).find(".tp-arr-iwrapper"), i = t(this).find(".tp-arr-allwrapper");
                punchgs.TweenLite.to(e, .4, {x: 0 - e.width(),ease: punchgs.Power3.easeOut,delay: .2,overwrite: "all"}), punchgs.TweenLite.to(i, .2, {delay: .6,autoAlpha: 0,overwrite: "all"})
            }))
        }, g = function(i, n) {
            if (n.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").css({height: n.container.height()}), n.container.closest(".rev_slider_wrapper").css({height: n.container.height()}), n.width = parseInt(n.container.width(), 0), n.height = parseInt(n.container.height(), 0), n.bw = n.width / n.startwidth, n.bh = n.height / n.startheight, n.bh > n.bw && (n.bh = n.bw), n.bh < n.bw && (n.bw = n.bh), n.bw < n.bh && (n.bh = n.bw), n.bh > 1 && (n.bw = 1, n.bh = 1), n.bw > 1 && (n.bw = 1, n.bh = 1), n.height = Math.round(n.startheight * (n.width / n.startwidth)), n.height > n.startheight && "on" != n.autoHeight && (n.height = n.startheight), "on" == n.fullScreen) {
                n.height = n.bw * n.startheight, n.container.parent().width();
                var a = t(window).height();
                if (n.fullScreenOffsetContainer != e) {
                    try {
                        var o = n.fullScreenOffsetContainer.split(",");
                        t.each(o, function(e, i) {
                            a -= t(i).outerHeight(!0), a < n.minFullScreenHeight && (a = n.minFullScreenHeight)
                        })
                    } catch (r) {
                    }
                    try {
                        n.fullScreenOffset.split("%").length > 1 && n.fullScreenOffset != e && n.fullScreenOffset.length > 0 ? a -= t(window).height() * parseInt(n.fullScreenOffset, 0) / 100 : n.fullScreenOffset != e && n.fullScreenOffset.length > 0 && (a -= parseInt(n.fullScreenOffset, 0)), a < n.minFullScreenHeight && (a = n.minFullScreenHeight)
                    } catch (r) {
                    }
                }
                n.container.parent().height(a), n.container.closest(".rev_slider_wrapper").height(a), n.container.css({height: "100%"}), n.height = a, n.minHeight != e && n.height < n.minHeight && (n.height = n.minHeight)
            } else
                n.minHeight != e && n.height < n.minHeight && (n.height = n.minHeight), n.container.height(n.height);
            n.slotw = Math.ceil(n.width / n.slots), n.sloth = Math.ceil("on" == n.fullScreen ? t(window).height() / n.slots : n.height / n.slots), "on" == n.autoHeight && (n.sloth = Math.ceil(i.height() / n.slots))
        }, v = function(i, n) {
            i.find(".tp-caption").each(function() {
                t(this).addClass(t(this).data("transition")), t(this).addClass("start")
            }), i.find(">ul:first").css({overflow: "hidden",width: "100%",height: "100%",maxHeight: i.parent().css("maxHeight")}).addClass("tp-revslider-mainul"), "on" == n.autoHeight && (i.find(">ul:first").css({overflow: "hidden",width: "100%",height: "100%",maxHeight: "none"}), i.css({maxHeight: "none"}), i.parent().css({maxHeight: "none"})), i.find(">ul:first >li").each(function() {
                var n = t(this);
                if (n.addClass("tp-revslider-slidesli"), n.css({width: "100%",height: "100%",overflow: "hidden"}), n.data("link") != e) {
                    var a = n.data("link"), o = "_self", r = 60;
                    "back" == n.data("slideindex") && (r = 0);
                    var s = checksl = n.data("linktoslide");
                    s != e && "next" != s && "prev" != s && i.find(">ul:first-child >li").each(function() {
                        var e = t(this);
                        e.data("origindex") + 1 == checksl && (s = e.index() + 1)
                    }), n.data("target") != e && (o = n.data("target")), "slide" != a && (s = "no");
                    var l = '<div class="tp-caption sft slidelink" style="width:100%;height:100%;z-index:' + r + ';" data-x="center" data-y="center" data-linktoslide="' + s + '" data-start="0"><a style="width:100%;height:100%;display:block"';
                    "slide" != a && (l = l + ' target="' + o + '" href="' + a + '"'), l += '><span style="width:100%;height:100%;display:block"></span></a></div>', n.append(l)
                }
            }), i.parent().css({overflow: "visible"}), i.find(">ul:first >li >img").each(function(i) {
                var a = t(this);
                a.addClass("defaultimg"), a.data("lazyload") != e && 1 != a.data("lazydone") || g(a, n), s(8) && a.data("kenburns", "off"), "on" == n.panZoomDisableOnMobile && Q() && (a.data("kenburns", "off"), a.data("bgfit", "cover")), a.wrap('<div class="slotholder" style="width:100%;height:100%;"data-duration="' + a.data("duration") + '"data-zoomstart="' + a.data("zoomstart") + '"data-zoomend="' + a.data("zoomend") + '"data-rotationstart="' + a.data("rotationstart") + '"data-rotationend="' + a.data("rotationend") + '"data-ease="' + a.data("ease") + '"data-duration="' + a.data("duration") + '"data-bgpositionend="' + a.data("bgpositionend") + '"data-bgposition="' + a.data("bgposition") + '"data-duration="' + a.data("duration") + '"data-kenburns="' + a.data("kenburns") + '"data-easeme="' + a.data("ease") + '"data-bgfit="' + a.data("bgfit") + '"data-bgfitend="' + a.data("bgfitend") + '"data-owidth="' + a.data("owidth") + '"data-oheight="' + a.data("oheight") + '"></div>'), "none" != n.dottedOverlay && n.dottedOverlay != e && a.closest(".slotholder").append('<div class="tp-dottedoverlay ' + n.dottedOverlay + '"></div>');
                var o = a.attr("src"), r = (a.data("lazyload"), a.data("bgfit")), l = a.data("bgrepeat"), d = a.data("bgposition");
                r == e && (r = "cover"), l == e && (l = "no-repeat"), d == e && (d = "center center");
                var c = a.closest(".slotholder");
                a.replaceWith('<div class="tp-bgimg defaultimg" data-lazyload="' + a.data("lazyload") + '" data-bgfit="' + r + '"data-bgposition="' + d + '" data-bgrepeat="' + l + '" data-lazydone="' + a.data("lazydone") + '" src="' + o + '" data-src="' + o + '" style="background-color:' + a.css("backgroundColor") + ";background-repeat:" + l + ";background-image:url(" + o + ");background-size:" + r + ";background-position:" + d + ';width:100%;height:100%;"></div>'), s(8) && (c.find(".tp-bgimg").css({backgroundImage: "none","background-image": "none"}), c.find(".tp-bgimg").append('<img class="ieeightfallbackimage defaultimg" src="' + o + '" style="width:100%">')), a.css({opacity: 0}), a.data("li-id", i)
            })
        }, y = function(t, i, n, a) {
            var o = t, r = o.find(".defaultimg"), l = o.data("zoomstart"), d = o.data("rotationstart");
            r.data("currotate") != e && (d = r.data("currotate")), r.data("curscale") != e && "box" == a ? l = 100 * r.data("curscale") : r.data("curscale") != e && (l = r.data("curscale")), g(r, i);
            var c = r.data("src"), u = r.css("backgroundColor"), h = i.width, p = i.height, f = r.data("fxof"), m = 0;
            "on" == i.autoHeight && (p = i.container.height()), f == e && (f = 0);
            var v = 0, y = r.data("bgfit"), b = r.data("bgrepeat"), x = r.data("bgposition");
            if (y == e && (y = "cover"), b == e && (b = "no-repeat"), x == e && (x = "center center"), s(8)) {
                o.data("kenburns", "off");
                var _ = c;
                c = ""
            }
            switch (a) {
                case "box":
                    var T = 0, k = 0, C = 0;
                    if (T = i.sloth > i.slotw ? i.sloth : i.slotw, !n)
                        var v = 0 - T;
                    i.slotw = T, i.sloth = T;
                    var k = 0, C = 0;
                    "on" == o.data("kenburns") && (y = l, y.toString().length < 4 && (y = U(y, o, i)));
                    for (var S = 0; S < i.slots; S++) {
                        C = 0;
                        for (var O = 0; O < i.slots; O++)
                            o.append('<div class="slot" style="position:absolute;top:' + (m + C) + "px;left:" + (f + k) + "px;width:" + T + "px;height:" + T + 'px;overflow:hidden;"><div class="slotslide" data-x="' + k + '" data-y="' + C + '" style="position:absolute;top:0px;left:0px;width:' + T + "px;height:" + T + 'px;overflow:hidden;"><div style="position:absolute;top:' + (0 - C) + "px;left:" + (0 - k) + "px;width:" + h + "px;height:" + p + "px;background-color:" + u + ";background-image:url(" + c + ");background-repeat:" + b + ";background-size:" + y + ";background-position:" + x + ';"></div></div></div>'), C += T, s(8) && (o.find(".slot ").last().find(".slotslide").append('<img src="' + _ + '">'), w(o, i)), l != e && d != e && punchgs.TweenLite.set(o.find(".slot").last(), {rotationZ: d});
                        k += T
                    }
                    break;
                case "vertical":
                case "horizontal":
                    if ("on" == o.data("kenburns") && (y = l, y.toString().length < 4 && (y = U(y, o, i))), "horizontal" == a) {
                        if (!n)
                            var v = 0 - i.slotw;
                        for (var O = 0; O < i.slots; O++)
                            o.append('<div class="slot" style="position:absolute;top:' + (0 + m) + "px;left:" + (f + O * i.slotw) + "px;overflow:hidden;width:" + (i.slotw + .6) + "px;height:" + p + 'px"><div class="slotslide" style="position:absolute;top:0px;left:' + v + "px;width:" + (i.slotw + .6) + "px;height:" + p + 'px;overflow:hidden;"><div style="background-color:' + u + ";position:absolute;top:0px;left:" + (0 - O * i.slotw) + "px;width:" + h + "px;height:" + p + "px;background-image:url(" + c + ");background-repeat:" + b + ";background-size:" + y + ";background-position:" + x + ';"></div></div></div>'), l != e && d != e && punchgs.TweenLite.set(o.find(".slot").last(), {rotationZ: d}), s(8) && (o.find(".slot ").last().find(".slotslide").append('<img class="ieeightfallbackimage" src="' + _ + '" style="width:100%;height:auto">'), w(o, i))
                    } else {
                        if (!n)
                            var v = 0 - i.sloth;
                        for (var O = 0; O < i.slots + 2; O++)
                            o.append('<div class="slot" style="position:absolute;top:' + (m + O * i.sloth) + "px;left:" + f + "px;overflow:hidden;width:" + h + "px;height:" + i.sloth + 'px"><div class="slotslide" style="position:absolute;top:' + v + "px;left:0px;width:" + h + "px;height:" + i.sloth + 'px;overflow:hidden;"><div style="background-color:' + u + ";position:absolute;top:" + (0 - O * i.sloth) + "px;left:0px;width:" + h + "px;height:" + p + "px;background-image:url(" + c + ");background-repeat:" + b + ";background-size:" + y + ";background-position:" + x + ';"></div></div></div>'), l != e && d != e && punchgs.TweenLite.set(o.find(".slot").last(), {rotationZ: d}), s(8) && (o.find(".slot ").last().find(".slotslide").append('<img class="ieeightfallbackimage" src="' + _ + '" style="width:100%;height:auto;">'), w(o, i))
                    }
            }
        }, w = function(t, e) {
            if (s(8)) {
                var i = t.find(".ieeightfallbackimage");
                i.width(), i.height(), i.css(e.startwidth / e.startheight < t.data("owidth") / t.data("oheight") ? {width: "auto",height: "100%"} : {width: "100%",height: "auto"}), setTimeout(function() {
                    var n = i.width(), a = i.height(), o = t.data("bgposition");
                    "center center" == o && i.css({position: "absolute",top: e.height / 2 - a / 2 + "px",left: e.width / 2 - n / 2 + "px"}), ("center top" == o || "top center" == o) && i.css({position: "absolute",top: "0px",left: e.width / 2 - n / 2 + "px"}), ("center bottom" == o || "bottom center" == o) && i.css({position: "absolute",bottom: "0px",left: e.width / 2 - n / 2 + "px"}), ("right top" == o || "top right" == o) && i.css({position: "absolute",top: "0px",right: "0px"}), ("right bottom" == o || "bottom right" == o) && i.css({position: "absolute",bottom: "0px",right: "0px"}), ("right center" == o || "center right" == o) && i.css({position: "absolute",top: e.height / 2 - a / 2 + "px",right: "0px"}), ("left bottom" == o || "bottom left" == o) && i.css({position: "absolute",bottom: "0px",left: "0px"}), ("left center" == o || "center left" == o) && i.css({position: "absolute",top: e.height / 2 - a / 2 + "px",left: "0px"})
                }, 20)
            }
        }, b = function(e, i, n) {
            n.find(".slot").each(function() {
                t(this).remove()
            }), i.transition = 0
        }, x = function(i, n) {
            i.find("img, .defaultimg").each(function() {
                var i = t(this), a = i.data("lazyload");
                if (a != i.attr("src") && 3 > n && a != e && "undefined" != a) {
                    if (a != e && "undefined" != a) {
                        i.attr("src", a);
                        var o = new Image;
                        o.onload = function() {
                            i.data("lazydone", 1), i.hasClass("defaultimg") && _(i, o)
                        }, o.error = function() {
                            i.data("lazydone", 1)
                        }, o.src = i.attr("src"), o.complete && (i.hasClass("defaultimg") && _(i, o), i.data("lazydone", 1))
                    }
                } else if ((a === e || "undefined" === a) && 1 != i.data("lazydone")) {
                    var o = new Image;
                    o.onload = function() {
                        i.hasClass("defaultimg") && _(i, o), i.data("lazydone", 1)
                    }, o.error = function() {
                        i.data("lazydone", 1)
                    }, o.src = i.attr("src") != e && "undefined" != i.attr("src") ? i.attr("src") : i.data("src"), o.complete && (i.hasClass("defaultimg") && _(i, o), i.data("lazydone", 1))
                }
            })
        }, _ = function(t, e) {
            var i = t.closest("li"), n = e.width, a = e.height;
            i.data("owidth", n), i.data("oheight", a), i.find(".slotholder").data("owidth", n), i.find(".slotholder").data("oheight", a), i.data("loadeddone", 1)
        }, T = function(i, n, a) {
            x(i, 0);
            var o = setInterval(function() {
                a.bannertimeronpause = !0, a.container.trigger("stoptimer"), a.cd = 0;
                var r = 0;
                i.find("img, .defaultimg").each(function() {
                    1 != t(this).data("lazydone") && r++
                }), r > 0 ? x(i, r) : (clearInterval(o), n != e && n())
            }, 100)
        }, k = function(t, i) {
            try {
                t.find(">ul:first-child >li:eq(" + i.act + ")")
            } catch (n) {
                t.find(">ul:first-child >li:eq(1)")
            }
            i.lastslide = i.act;
            var a = t.find(">ul:first-child >li:eq(" + i.next + ")"), o = a.find(".defaultimg");
            i.bannertimeronpause = !0, t.trigger("stoptimer"), i.cd = 0, o.data("lazyload") != e && "undefined" != o.data("lazyload") && 1 != o.data("lazydone") ? (s(8) ? o.attr("src", a.find(".defaultimg").data("lazyload")) : o.css({backgroundImage: 'url("' + a.find(".defaultimg").data("lazyload") + '")'}), o.data("src", a.find(".defaultimg").data("lazyload")), o.data("lazydone", 0), o.data("orgw", 0), a.data("loadeddone", 1), t.find(".tp-loader").css({display: "block"}), T(t.find(".tp-static-layers"), function() {
                T(a, function() {
                    var e = a.find(".slotholder");
                    if ("on" == e.data("kenburns"))
                        var n = setInterval(function() {
                            var a = e.data("owidth");
                            a >= 0 && (clearInterval(n), C(i, o, t))
                        }, 10);
                    else
                        C(i, o, t)
                }, i)
            }, i)) : a.data("loadeddone") === e ? (a.data("loadeddone", 1), T(a, function() {
                C(i, o, t)
            }, i)) : C(i, o, t)
        }, C = function(t, e, i) {
            t.bannertimeronpause = !1, t.cd = 0, i.trigger("nulltimer"), i.find(".tp-loader").css({display: "none"}), g(e, t), f(i, t), g(e, t), S(i, t)
        }, S = function(t, i) {
            t.trigger("revolution.slide.onbeforeswap"), i.transition = 1, i.videoplaying = !1;
            try {
                var n = t.find(">ul:first-child >li:eq(" + i.act + ")")
            } catch (a) {
                var n = t.find(">ul:first-child >li:eq(1)")
            }
            i.lastslide = i.act;
            var o = t.find(">ul:first-child >li:eq(" + i.next + ")");
            setTimeout(function() {
                m(i)
            }, 200);
            var r = n.find(".slotholder"), s = o.find(".slotholder");
            ("on" == s.data("kenburns") || "on" == r.data("kenburns")) && (Z(t, i), t.find(".kenburnimg").remove()), o.data("delay") != e ? (i.cd = 0, i.delay = o.data("delay")) : i.delay = i.origcd, 1 == i.firststart && punchgs.TweenLite.set(n, {autoAlpha: 0}), punchgs.TweenLite.set(n, {zIndex: 18}), punchgs.TweenLite.set(o, {autoAlpha: 0,zIndex: 20});
            var l = 0;
            n.index() != o.index() && 1 != i.firststart && (l = F(n, i)), "on" != n.data("saveperformance") && (l = 0), setTimeout(function() {
                t.trigger("restarttimer"), O(t, i, o, n, r, s)
            }, l)
        }, O = function(i, n, a, o, r, l) {
            function d() {
                t.each(m, function(t, e) {
                    (e[0] == p || e[8] == p) && (c = e[1], f = e[2], w = b), b += 1
                })
            }
            "prepared" == a.data("differentissplayed") && (a.data("differentissplayed", "done"), a.data("transition", a.data("savedtransition")), a.data("slotamount", a.data("savedslotamount")), a.data("masterspeed", a.data("savedmasterspeed"))), a.data("fstransition") != e && "done" != a.data("differentissplayed") && (a.data("savedtransition", a.data("transition")), a.data("savedslotamount", a.data("slotamount")), a.data("savedmasterspeed", a.data("masterspeed")), a.data("transition", a.data("fstransition")), a.data("slotamount", a.data("fsslotamount")), a.data("masterspeed", a.data("fsmasterspeed")), a.data("differentissplayed", "prepared")), i.find(".active-revslide").removeClass(".active-revslide"), a.addClass("active-revslide"), a.data("transition") == e && a.data("transition", "random");
            var c = 0, u = a.data("transition").split(","), h = a.data("nexttransid") == e ? -1 : a.data("nexttransid");
            "on" == a.data("randomtransition") ? h = Math.round(Math.random() * u.length) : h += 1, h == u.length && (h = 0), a.data("nexttransid", h);
            var p = u[h];
            n.ie && ("boxfade" == p && (p = "boxslide"), "slotfade-vertical" == p && (p = "slotzoom-vertical"), "slotfade-horizontal" == p && (p = "slotzoom-horizontal")), s(8) && (p = 11);
            var f = 0;
            "scroll" == n.parallax && n.parallaxFirstGo == e && (n.parallaxFirstGo = !0, K(i, n), setTimeout(function() {
                K(i, n)
            }, 210), setTimeout(function() {
                K(i, n)
            }, 420)), "slidehorizontal" == p && (p = "slideleft", 1 == n.leftarrowpressed && (p = "slideright")), "slidevertical" == p && (p = "slideup", 1 == n.leftarrowpressed && (p = "slidedown")), "parallaxhorizontal" == p && (p = "parallaxtoleft", 1 == n.leftarrowpressed && (p = "parallaxtoright")), "parallaxvertical" == p && (p = "parallaxtotop", 1 == n.leftarrowpressed && (p = "parallaxtobottom"));
            var m = [["boxslide", 0, 1, 10, 0, "box", !1, null, 0], ["boxfade", 1, 0, 10, 0, "box", !1, null, 1], ["slotslide-horizontal", 2, 0, 0, 200, "horizontal", !0, !1, 2], ["slotslide-vertical", 3, 0, 0, 200, "vertical", !0, !1, 3], ["curtain-1", 4, 3, 0, 0, "horizontal", !0, !0, 4], ["curtain-2", 5, 3, 0, 0, "horizontal", !0, !0, 5], ["curtain-3", 6, 3, 25, 0, "horizontal", !0, !0, 6], ["slotzoom-horizontal", 7, 0, 0, 400, "horizontal", !0, !0, 7], ["slotzoom-vertical", 8, 0, 0, 0, "vertical", !0, !0, 8], ["slotfade-horizontal", 9, 0, 0, 500, "horizontal", !0, null, 9], ["slotfade-vertical", 10, 0, 0, 500, "vertical", !0, null, 10], ["fade", 11, 0, 1, 300, "horizontal", !0, null, 11], ["slideleft", 12, 0, 1, 0, "horizontal", !0, !0, 12], ["slideup", 13, 0, 1, 0, "horizontal", !0, !0, 13], ["slidedown", 14, 0, 1, 0, "horizontal", !0, !0, 14], ["slideright", 15, 0, 1, 0, "horizontal", !0, !0, 15], ["papercut", 16, 0, 0, 600, "", null, null, 16], ["3dcurtain-horizontal", 17, 0, 20, 100, "vertical", !1, !0, 17], ["3dcurtain-vertical", 18, 0, 10, 100, "horizontal", !1, !0, 18], ["cubic", 19, 0, 20, 600, "horizontal", !1, !0, 19], ["cube", 19, 0, 20, 600, "horizontal", !1, !0, 20], ["flyin", 20, 0, 4, 600, "vertical", !1, !0, 21], ["turnoff", 21, 0, 1, 1600, "horizontal", !1, !0, 22], ["incube", 22, 0, 20, 200, "horizontal", !1, !0, 23], ["cubic-horizontal", 23, 0, 20, 500, "vertical", !1, !0, 24], ["cube-horizontal", 23, 0, 20, 500, "vertical", !1, !0, 25], ["incube-horizontal", 24, 0, 20, 500, "vertical", !1, !0, 26], ["turnoff-vertical", 25, 0, 1, 200, "horizontal", !1, !0, 27], ["fadefromright", 12, 1, 1, 0, "horizontal", !0, !0, 28], ["fadefromleft", 15, 1, 1, 0, "horizontal", !0, !0, 29], ["fadefromtop", 14, 1, 1, 0, "horizontal", !0, !0, 30], ["fadefrombottom", 13, 1, 1, 0, "horizontal", !0, !0, 31], ["fadetoleftfadefromright", 12, 2, 1, 0, "horizontal", !0, !0, 32], ["fadetorightfadetoleft", 15, 2, 1, 0, "horizontal", !0, !0, 33], ["fadetobottomfadefromtop", 14, 2, 1, 0, "horizontal", !0, !0, 34], ["fadetotopfadefrombottom", 13, 2, 1, 0, "horizontal", !0, !0, 35], ["parallaxtoright", 12, 3, 1, 0, "horizontal", !0, !0, 36], ["parallaxtoleft", 15, 3, 1, 0, "horizontal", !0, !0, 37], ["parallaxtotop", 14, 3, 1, 0, "horizontal", !0, !0, 38], ["parallaxtobottom", 13, 3, 1, 0, "horizontal", !0, !0, 39], ["scaledownfromright", 12, 4, 1, 0, "horizontal", !0, !0, 40], ["scaledownfromleft", 15, 4, 1, 0, "horizontal", !0, !0, 41], ["scaledownfromtop", 14, 4, 1, 0, "horizontal", !0, !0, 42], ["scaledownfrombottom", 13, 4, 1, 0, "horizontal", !0, !0, 43], ["zoomout", 13, 5, 1, 0, "horizontal", !0, !0, 44], ["zoomin", 13, 6, 1, 0, "horizontal", !0, !0, 45], ["notransition", 26, 0, 1, 0, "horizontal", !0, null, 46]], g = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45], v = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27], c = 0, f = 1, w = 0, b = 0, x = new Array;
            "on" == l.data("kenburns") && (("boxslide" == p || 0 == p || "boxfade" == p || 1 == p || "papercut" == p || 16 == p) && (p = 11), Y(i, n, !0, !0)), "random" == p && (p = Math.round(Math.random() * m.length - 1), p > m.length - 1 && (p = m.length - 1)), "random-static" == p && (p = Math.round(Math.random() * g.length - 1), p > g.length - 1 && (p = g.length - 1), p = g[p]), "random-premium" == p && (p = Math.round(Math.random() * v.length - 1), p > v.length - 1 && (p = v.length - 1), p = v[p]);
            var _ = [12, 13, 14, 15, 16, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
            if (1 == n.isJoomla && window.MooTools != e && -1 != _.indexOf(p)) {
                var T = Math.round(Math.random() * (v.length - 2)) + 1;
                T > v.length - 1 && (T = v.length - 1), 0 == T && (T = 1), p = v[T]
            }
            d(), s(8) && c > 15 && 28 > c && (p = Math.round(Math.random() * g.length - 1), p > g.length - 1 && (p = g.length - 1), p = g[p], b = 0, d());
            var k = -1;
            (1 == n.leftarrowpressed || n.act > n.next) && (k = 1), n.leftarrowpressed = 0, c > 26 && (c = 26), 0 > c && (c = 0);
            var C = 300;
            a.data("masterspeed") != e && a.data("masterspeed") > 99 && a.data("masterspeed") < n.delay && (C = a.data("masterspeed")), a.data("masterspeed") != e && a.data("masterspeed") > n.delay && (C = n.delay), x = m[w], i.parent().find(".bullet").each(function() {
                var e = t(this), i = e.index();
                e.removeClass("selected"), ("withbullet" == n.navigationArrows || "nexttobullets" == n.navigationArrows) && (i = e.index() - 1), i == n.next && e.addClass("selected")
            });
            var S = new punchgs.TimelineLite({onComplete: function() {
                    M(i, n, l, r, a, o, S)
                }});
            if (S.add(punchgs.TweenLite.set(l.find(".defaultimg"), {opacity: 0})), S.pause(), a.data("slotamount") == e || a.data("slotamount") < 1 ? (n.slots = Math.round(12 * Math.random() + 4), "boxslide" == p ? n.slots = Math.round(6 * Math.random() + 3) : "flyin" == p && (n.slots = Math.round(4 * Math.random() + 1))) : n.slots = a.data("slotamount"), n.rotate = a.data("rotate") == e ? 0 : 999 == a.data("rotate") ? Math.round(360 * Math.random()) : a.data("rotate"), (!t.support.transition || n.ie || n.ie9) && (n.rotate = 0), 1 == n.firststart && (n.firststart = 0), C += x[4], (4 == c || 5 == c || 6 == c) && n.slots < 3 && (n.slots = 3), 0 != x[3] && (n.slots = Math.min(n.slots, x[3])), 9 == c && (n.slots = n.width / 20), 10 == c && (n.slots = n.height / 20), null != x[7] && y(r, n, x[7], x[5]), null != x[6] && y(l, n, x[6], x[5]), 0 == c) {
                var O = Math.ceil(n.height / n.sloth), L = 0;
                l.find(".slotslide").each(function(e) {
                    var i = t(this);
                    L += 1, L == O && (L = 0), S.add(punchgs.TweenLite.from(i, C / 600, {opacity: 0,top: 0 - n.sloth,left: 0 - n.slotw,rotation: n.rotate,force3D: "auto",ease: punchgs.Power2.easeOut}), (15 * e + 30 * L) / 1500)
                })
            }
            if (1 == c) {
                var A, E = 0;
                l.find(".slotslide").each(function(e) {
                    var i = t(this), a = Math.random() * C + 300, o = 500 * Math.random() + 200;
                    a + o > A && (A = o + o, E = e), S.add(punchgs.TweenLite.from(i, a / 1e3, {autoAlpha: 0,force3D: "auto",rotation: n.rotate,ease: punchgs.Power2.easeInOut}), o / 1e3)
                })
            }
            if (2 == c) {
                var P = new punchgs.TimelineLite;
                r.find(".slotslide").each(function() {
                    var e = t(this);
                    P.add(punchgs.TweenLite.to(e, C / 1e3, {left: n.slotw,force3D: "auto",rotation: 0 - n.rotate}), 0), S.add(P, 0)
                }), l.find(".slotslide").each(function() {
                    var e = t(this);
                    P.add(punchgs.TweenLite.from(e, C / 1e3, {left: 0 - n.slotw,force3D: "auto",rotation: n.rotate}), 0), S.add(P, 0)
                })
            }
            if (3 == c) {
                var P = new punchgs.TimelineLite;
                r.find(".slotslide").each(function() {
                    var e = t(this);
                    P.add(punchgs.TweenLite.to(e, C / 1e3, {top: n.sloth,rotation: n.rotate,force3D: "auto",transformPerspective: 600}), 0), S.add(P, 0)
                }), l.find(".slotslide").each(function() {
                    var e = t(this);
                    P.add(punchgs.TweenLite.from(e, C / 1e3, {top: 0 - n.sloth,rotation: n.rotate,ease: punchgs.Power2.easeOut,force3D: "auto",transformPerspective: 600}), 0), S.add(P, 0)
                })
            }
            if (4 == c || 5 == c) {
                setTimeout(function() {
                    r.find(".defaultimg").css({opacity: 0})
                }, 100);
                var j = C / 1e3, P = new punchgs.TimelineLite;
                r.find(".slotslide").each(function(e) {
                    var i = t(this), a = e * j / n.slots;
                    5 == c && (a = (n.slots - e - 1) * j / n.slots / 1.5), P.add(punchgs.TweenLite.to(i, 3 * j, {transformPerspective: 600,force3D: "auto",top: 0 + n.height,opacity: .5,rotation: n.rotate,ease: punchgs.Power2.easeInOut,delay: a}), 0), S.add(P, 0)
                }), l.find(".slotslide").each(function(e) {
                    var i = t(this), a = e * j / n.slots;
                    5 == c && (a = (n.slots - e - 1) * j / n.slots / 1.5), P.add(punchgs.TweenLite.from(i, 3 * j, {top: 0 - n.height,opacity: .5,rotation: n.rotate,force3D: "auto",ease: punchgs.Power2.easeInOut,delay: a}), 0), S.add(P, 0)
                })
            }
            if (6 == c) {
                n.slots < 2 && (n.slots = 2), n.slots % 2 && (n.slots = n.slots + 1);
                var P = new punchgs.TimelineLite;
                setTimeout(function() {
                    r.find(".defaultimg").css({opacity: 0})
                }, 100), r.find(".slotslide").each(function(e) {
                    var i = t(this);
                    if (e + 1 < n.slots / 2)
                        var a = 90 * (e + 2);
                    else
                        var a = 90 * (2 + n.slots - e);
                    P.add(punchgs.TweenLite.to(i, (C + a) / 1e3, {top: 0 + n.height,opacity: 1,force3D: "auto",rotation: n.rotate,ease: punchgs.Power2.easeInOut}), 0), S.add(P, 0)
                }), l.find(".slotslide").each(function(e) {
                    var i = t(this);
                    if (e + 1 < n.slots / 2)
                        var a = 90 * (e + 2);
                    else
                        var a = 90 * (2 + n.slots - e);
                    P.add(punchgs.TweenLite.from(i, (C + a) / 1e3, {top: 0 - n.height,opacity: 1,force3D: "auto",rotation: n.rotate,ease: punchgs.Power2.easeInOut}), 0), S.add(P, 0)
                })
            }
            if (7 == c) {
                C = 2 * C, C > n.delay && (C = n.delay);
                var P = new punchgs.TimelineLite;
                setTimeout(function() {
                    r.find(".defaultimg").css({opacity: 0})
                }, 100), r.find(".slotslide").each(function() {
                    var e = t(this).find("div");
                    P.add(punchgs.TweenLite.to(e, C / 1e3, {left: 0 - n.slotw / 2 + "px",top: 0 - n.height / 2 + "px",width: 2 * n.slotw + "px",height: 2 * n.height + "px",opacity: 0,rotation: n.rotate,force3D: "auto",ease: punchgs.Power2.easeOut}), 0), S.add(P, 0)
                }), l.find(".slotslide").each(function(e) {
                    var i = t(this).find("div");
                    P.add(punchgs.TweenLite.fromTo(i, C / 1e3, {left: 0,top: 0,opacity: 0,transformPerspective: 600}, {left: 0 - e * n.slotw + "px",ease: punchgs.Power2.easeOut,force3D: "auto",top: "0px",width: n.width,height: n.height,opacity: 1,rotation: 0,delay: .1}), 0), S.add(P, 0)
                })
            }
            if (8 == c) {
                C = 3 * C, C > n.delay && (C = n.delay);
                var P = new punchgs.TimelineLite;
                r.find(".slotslide").each(function() {
                    var e = t(this).find("div");
                    P.add(punchgs.TweenLite.to(e, C / 1e3, {left: 0 - n.width / 2 + "px",top: 0 - n.sloth / 2 + "px",width: 2 * n.width + "px",height: 2 * n.sloth + "px",force3D: "auto",opacity: 0,rotation: n.rotate}), 0), S.add(P, 0)
                }), l.find(".slotslide").each(function(e) {
                    var i = t(this).find("div");
                    P.add(punchgs.TweenLite.fromTo(i, C / 1e3, {left: 0,top: 0,opacity: 0,force3D: "auto"}, {left: "0px",top: 0 - e * n.sloth + "px",width: l.find(".defaultimg").data("neww") + "px",height: l.find(".defaultimg").data("newh") + "px",opacity: 1,rotation: 0}), 0), S.add(P, 0)
                })
            }
            if (9 == c || 10 == c) {
                var I = 0;
                l.find(".slotslide").each(function(e) {
                    var i = t(this);
                    I++, S.add(punchgs.TweenLite.fromTo(i, C / 1e3, {autoAlpha: 0,force3D: "auto",transformPerspective: 600}, {autoAlpha: 1,ease: punchgs.Power2.easeInOut,delay: 5 * e / 1e3}), 0)
                })
            }
            if (11 == c || 26 == c) {
                var I = 0;
                26 == c && (C = 0), l.find(".slotslide").each(function() {
                    var e = t(this);
                    S.add(punchgs.TweenLite.from(e, C / 1e3, {autoAlpha: 0,force3D: "auto",ease: punchgs.Power2.easeInOut}), 0)
                })
            }
            if (12 == c || 13 == c || 14 == c || 15 == c) {
                C = C, C > n.delay && (C = n.delay), setTimeout(function() {
                    punchgs.TweenLite.set(r.find(".defaultimg"), {autoAlpha: 0})
                }, 100);
                var D = n.width, N = n.height, H = l.find(".slotslide"), $ = 0, R = 0, F = 1, q = 1, W = 1, B = punchgs.Power2.easeInOut, X = punchgs.Power2.easeInOut, Q = C / 1e3, U = Q;
                ("on" == n.fullWidth || "on" == n.fullScreen) && (D = H.width(), N = H.height()), 12 == c ? $ = D : 15 == c ? $ = 0 - D : 13 == c ? R = N : 14 == c && (R = 0 - N), 1 == f && (F = 0), 2 == f && (F = 0), 3 == f && (B = punchgs.Power2.easeInOut, X = punchgs.Power1.easeInOut, Q = C / 1200), (4 == f || 5 == f) && (q = .6), 6 == f && (q = 1.4), (5 == f || 6 == f) && (W = 1.4, F = 0, D = 0, N = 0, $ = 0, R = 0), 6 == f && (W = .6), S.add(punchgs.TweenLite.from(H, Q, {left: $,top: R,scale: W,opacity: F,rotation: n.rotate,ease: X,force3D: "auto"}), 0);
                var V = r.find(".slotslide");
                if ((4 == f || 5 == f) && (D = 0, N = 0), 1 != f)
                    switch (c) {
                        case 12:
                            S.add(punchgs.TweenLite.to(V, U, {left: 0 - D + "px",force3D: "auto",scale: q,opacity: F,rotation: n.rotate,ease: B}), 0);
                            break;
                        case 15:
                            S.add(punchgs.TweenLite.to(V, U, {left: D + "px",force3D: "auto",scale: q,opacity: F,rotation: n.rotate,ease: B}), 0);
                            break;
                        case 13:
                            S.add(punchgs.TweenLite.to(V, U, {top: 0 - N + "px",force3D: "auto",scale: q,opacity: F,rotation: n.rotate,ease: B}), 0);
                            break;
                        case 14:
                            S.add(punchgs.TweenLite.to(V, U, {top: N + "px",force3D: "auto",scale: q,opacity: F,rotation: n.rotate,ease: B}), 0)
                    }
            }
            if (16 == c) {
                var P = new punchgs.TimelineLite;
                S.add(punchgs.TweenLite.set(o, {position: "absolute","z-index": 20}), 0), S.add(punchgs.TweenLite.set(a, {position: "absolute","z-index": 15}), 0), o.wrapInner('<div class="tp-half-one" style="position:relative; width:100%;height:100%"></div>'), o.find(".tp-half-one").clone(!0).appendTo(o).addClass("tp-half-two"), o.find(".tp-half-two").removeClass("tp-half-one");
                var D = n.width, N = n.height;
                "on" == n.autoHeight && (N = i.height()), o.find(".tp-half-one .defaultimg").wrap('<div class="tp-papercut" style="width:' + D + "px;height:" + N + 'px;"></div>'), o.find(".tp-half-two .defaultimg").wrap('<div class="tp-papercut" style="width:' + D + "px;height:" + N + 'px;"></div>'), o.find(".tp-half-two .defaultimg").css({position: "absolute",top: "-50%"}), o.find(".tp-half-two .tp-caption").wrapAll('<div style="position:absolute;top:-50%;left:0px;"></div>'), S.add(punchgs.TweenLite.set(o.find(".tp-half-two"), {width: D,height: N,overflow: "hidden",zIndex: 15,position: "absolute",top: N / 2,left: "0px",transformPerspective: 600,transformOrigin: "center bottom"}), 0), S.add(punchgs.TweenLite.set(o.find(".tp-half-one"), {width: D,height: N / 2,overflow: "visible",zIndex: 10,position: "absolute",top: "0px",left: "0px",transformPerspective: 600,transformOrigin: "center top"}), 0);
                var G = (o.find(".defaultimg"), Math.round(20 * Math.random() - 10)), Z = Math.round(20 * Math.random() - 10), J = Math.round(20 * Math.random() - 10), te = .4 * Math.random() - .2, ee = .4 * Math.random() - .2, ie = 1 * Math.random() + 1, ne = 1 * Math.random() + 1, ae = .3 * Math.random() + .3;
                S.add(punchgs.TweenLite.set(o.find(".tp-half-one"), {overflow: "hidden"}), 0), S.add(punchgs.TweenLite.fromTo(o.find(".tp-half-one"), C / 800, {width: D,height: N / 2,position: "absolute",top: "0px",left: "0px",force3D: "auto",transformOrigin: "center top"}, {scale: ie,rotation: G,y: 0 - N - N / 4,autoAlpha: 0,ease: punchgs.Power2.easeInOut}), 0), S.add(punchgs.TweenLite.fromTo(o.find(".tp-half-two"), C / 800, {width: D,height: N,overflow: "hidden",position: "absolute",top: N / 2,left: "0px",force3D: "auto",transformOrigin: "center bottom"}, {scale: ne,rotation: Z,y: N + N / 4,ease: punchgs.Power2.easeInOut,autoAlpha: 0,onComplete: function() {
                        punchgs.TweenLite.set(o, {position: "absolute","z-index": 15}), punchgs.TweenLite.set(a, {position: "absolute","z-index": 20}), o.find(".tp-half-one").length > 0 && (o.find(".tp-half-one .defaultimg").unwrap(), o.find(".tp-half-one .slotholder").unwrap()), o.find(".tp-half-two").remove()
                    }}), 0), P.add(punchgs.TweenLite.set(l.find(".defaultimg"), {autoAlpha: 1}), 0), null != o.html() && S.add(punchgs.TweenLite.fromTo(a, (C - 200) / 1e3, {scale: ae,x: n.width / 4 * te,y: N / 4 * ee,rotation: J,force3D: "auto",transformOrigin: "center center",ease: punchgs.Power2.easeOut}, {autoAlpha: 1,scale: 1,x: 0,y: 0,rotation: 0}), 0), S.add(P, 0)
            }
            if (17 == c && l.find(".slotslide").each(function(e) {
                var i = t(this);
                S.add(punchgs.TweenLite.fromTo(i, C / 800, {opacity: 0,rotationY: 0,scale: .9,rotationX: -110,force3D: "auto",transformPerspective: 600,transformOrigin: "center center"}, {opacity: 1,top: 0,left: 0,scale: 1,rotation: 0,rotationX: 0,force3D: "auto",rotationY: 0,ease: punchgs.Power3.easeOut,delay: .06 * e}), 0)
            }), 18 == c && l.find(".slotslide").each(function(e) {
                var i = t(this);
                S.add(punchgs.TweenLite.fromTo(i, C / 500, {autoAlpha: 0,rotationY: 310,scale: .9,rotationX: 10,force3D: "auto",transformPerspective: 600,transformOrigin: "center center"}, {autoAlpha: 1,top: 0,left: 0,scale: 1,rotation: 0,rotationX: 0,force3D: "auto",rotationY: 0,ease: punchgs.Power3.easeOut,delay: .06 * e}), 0)
            }), 19 == c || 22 == c) {
                var P = new punchgs.TimelineLite;
                S.add(punchgs.TweenLite.set(o, {zIndex: 20}), 0), S.add(punchgs.TweenLite.set(a, {zIndex: 20}), 0), setTimeout(function() {
                    r.find(".defaultimg").css({opacity: 0})
                }, 100);
                var oe = (a.css("z-index"), o.css("z-index"), 90), F = 1, re = "center center ";
                1 == k && (oe = -90), 19 == c ? (re = re + "-" + n.height / 2, F = 0) : re += n.height / 2, punchgs.TweenLite.set(i, {transformStyle: "flat",backfaceVisibility: "hidden",transformPerspective: 600}), l.find(".slotslide").each(function(e) {
                    var i = t(this);
                    P.add(punchgs.TweenLite.fromTo(i, C / 1e3, {transformStyle: "flat",backfaceVisibility: "hidden",left: 0,rotationY: n.rotate,z: 10,top: 0,scale: 1,force3D: "auto",transformPerspective: 600,transformOrigin: re,rotationX: oe}, {left: 0,rotationY: 0,top: 0,z: 0,scale: 1,force3D: "auto",rotationX: 0,delay: 50 * e / 1e3,ease: punchgs.Power2.easeInOut}), 0), P.add(punchgs.TweenLite.to(i, .1, {autoAlpha: 1,delay: 50 * e / 1e3}), 0), S.add(P)
                }), r.find(".slotslide").each(function(e) {
                    var i = t(this), a = -90;
                    1 == k && (a = 90), P.add(punchgs.TweenLite.fromTo(i, C / 1e3, {transformStyle: "flat",backfaceVisibility: "hidden",autoAlpha: 1,rotationY: 0,top: 0,z: 0,scale: 1,force3D: "auto",transformPerspective: 600,transformOrigin: re,rotationX: 0}, {autoAlpha: 1,rotationY: n.rotate,top: 0,z: 10,scale: 1,rotationX: a,delay: 50 * e / 1e3,force3D: "auto",ease: punchgs.Power2.easeInOut}), 0), S.add(P)
                })
            }
            if (20 == c) {
                if (setTimeout(function() {
                    r.find(".defaultimg").css({opacity: 0})
                }, 100), a.css("z-index"), o.css("z-index"), 1 == k)
                    var se = -n.width, oe = 70, re = "left center -" + n.height / 2;
                else
                    var se = n.width, oe = -70, re = "right center -" + n.height / 2;
                l.find(".slotslide").each(function(e) {
                    var i = t(this);
                    S.add(punchgs.TweenLite.fromTo(i, C / 1500, {left: se,rotationX: 40,z: -600,opacity: F,top: 0,force3D: "auto",transformPerspective: 600,transformOrigin: re,rotationY: oe}, {left: 0,delay: 50 * e / 1e3,ease: punchgs.Power2.easeInOut}), 0), S.add(punchgs.TweenLite.fromTo(i, C / 1e3, {rotationX: 40,z: -600,opacity: F,top: 0,scale: 1,force3D: "auto",transformPerspective: 600,transformOrigin: re,rotationY: oe}, {rotationX: 0,opacity: 1,top: 0,z: 0,scale: 1,rotationY: 0,delay: 50 * e / 1e3,ease: punchgs.Power2.easeInOut}), 0), S.add(punchgs.TweenLite.to(i, .1, {opacity: 1,force3D: "auto",delay: 50 * e / 1e3 + C / 2e3}), 0)
                }), r.find(".slotslide").each(function(e) {
                    var i = t(this);
                    if (1 != k)
                        var a = -n.width, o = 70, r = "left center -" + n.height / 2;
                    else
                        var a = n.width, o = -70, r = "right center -" + n.height / 2;
                    S.add(punchgs.TweenLite.fromTo(i, C / 1e3, {opacity: 1,rotationX: 0,top: 0,z: 0,scale: 1,left: 0,force3D: "auto",transformPerspective: 600,transformOrigin: r,rotationY: 0}, {opacity: 1,rotationX: 40,top: 0,z: -600,left: a,force3D: "auto",scale: .8,rotationY: o,delay: 50 * e / 1e3,ease: punchgs.Power2.easeInOut}), 0), S.add(punchgs.TweenLite.to(i, .1, {force3D: "auto",opacity: 0,delay: 50 * e / 1e3 + (C / 1e3 - C / 1e4)}), 0)
                })
            }
            if (21 == c || 25 == c) {
                setTimeout(function() {
                    r.find(".defaultimg").css({opacity: 0})
                }, 100);
                var oe = (a.css("z-index"), o.css("z-index"), 90), se = -n.width, le = -oe;
                if (1 == k)
                    if (25 == c) {
                        var re = "center top 0";
                        oe = n.rotate
                    } else {
                        var re = "left center 0";
                        le = n.rotate
                    }
                else if (se = n.width, oe = -90, 25 == c) {
                    var re = "center bottom 0";
                    le = -oe, oe = n.rotate
                } else {
                    var re = "right center 0";
                    le = n.rotate
                }
                l.find(".slotslide").each(function() {
                    var e = t(this);
                    S.add(punchgs.TweenLite.fromTo(e, C / 1e3, {left: 0,transformStyle: "flat",rotationX: le,z: 0,autoAlpha: 0,top: 0,scale: 1,force3D: "auto",transformPerspective: 600,transformOrigin: re,rotationY: oe}, {left: 0,rotationX: 0,top: 0,z: 0,autoAlpha: 1,scale: 1,rotationY: 0,force3D: "auto",ease: punchgs.Power3.easeInOut}), 0)
                }), 1 != k ? (se = -n.width, oe = 90, 25 == c ? (re = "center top 0", le = -oe, oe = n.rotate) : (re = "left center 0", le = n.rotate)) : (se = n.width, oe = -90, 25 == c ? (re = "center bottom 0", le = -oe, oe = n.rotate) : (re = "right center 0", le = n.rotate)), r.find(".slotslide").each(function() {
                    var e = t(this);
                    S.add(punchgs.TweenLite.fromTo(e, C / 1e3, {left: 0,transformStyle: "flat",rotationX: 0,z: 0,autoAlpha: 1,top: 0,scale: 1,force3D: "auto",transformPerspective: 600,transformOrigin: re,rotationY: 0}, {left: 0,rotationX: le,top: 0,z: 0,autoAlpha: 1,force3D: "auto",scale: 1,rotationY: oe,ease: punchgs.Power1.easeInOut}), 0)
                })
            }
            if (23 == c || 24 == c) {
                setTimeout(function() {
                    r.find(".defaultimg").css({opacity: 0})
                }, 100);
                var oe = (a.css("z-index"), o.css("z-index"), -90), F = 1, de = 0;
                if (1 == k && (oe = 90), 23 == c) {
                    var re = "center center -" + n.width / 2;
                    F = 0
                } else
                    var re = "center center " + n.width / 2;
                punchgs.TweenLite.set(i, {transformStyle: "preserve-3d",backfaceVisibility: "hidden",perspective: 2500}), l.find(".slotslide").each(function(e) {
                    var i = t(this);
                    S.add(punchgs.TweenLite.fromTo(i, C / 1e3, {left: de,rotationX: n.rotate,force3D: "auto",opacity: F,top: 0,scale: 1,transformPerspective: 600,transformOrigin: re,rotationY: oe}, {left: 0,rotationX: 0,autoAlpha: 1,top: 0,z: 0,scale: 1,rotationY: 0,delay: 50 * e / 500,ease: punchgs.Power2.easeInOut}), 0)
                }), oe = 90, 1 == k && (oe = -90), r.find(".slotslide").each(function(e) {
                    var i = t(this);
                    S.add(punchgs.TweenLite.fromTo(i, C / 1e3, {left: 0,autoAlpha: 1,rotationX: 0,top: 0,z: 0,scale: 1,force3D: "auto",transformPerspective: 600,transformOrigin: re,rotationY: 0}, {left: de,autoAlpha: 1,rotationX: n.rotate,top: 0,scale: 1,rotationY: oe,delay: 50 * e / 500,ease: punchgs.Power2.easeInOut}), 0)
                })
            }
            S.pause(), z(a, n, null, S), punchgs.TweenLite.to(a, .001, {autoAlpha: 1});
            var ce = {};
            ce.slideIndex = n.next + 1, ce.slide = a, i.trigger("revolution.slide.onchange", ce), setTimeout(function() {
                i.trigger("revolution.slide.onafterswap")
            }, C), i.trigger("revolution.slide.onvideostop")
        }, M = function(t, e, i, n, a, o, r) {
            punchgs.TweenLite.to(i.find(".defaultimg"), .001, {autoAlpha: 1,onComplete: function() {
                    b(t, e, a)
                }}), a.index() != o.index() && punchgs.TweenLite.to(o, .2, {autoAlpha: 0,onComplete: function() {
                    b(t, e, o)
                }}), e.act = e.next, "thumb" == e.navigationType && ee(t), "on" == i.data("kenburns") && Y(t, e), t.find(".current-sr-slide-visible").removeClass("current-sr-slide-visible"), a.addClass("current-sr-slide-visible"), ("scroll" == e.parallax || "scroll+mouse" == e.parallax || "mouse+scroll" == e.parallax) && K(t, e), r.clear()
        }, L = function(e) {
            var i = e.target.getVideoEmbedCode(), n = t("#" + i.split('id="')[1].split('"')[0]), a = n.closest(".tp-simpleresponsive"), o = n.parent().data("player");
            if (e.data == YT.PlayerState.PLAYING) {
                var r = a.find(".tp-bannertimer"), s = r.data("opt");
                "mute" == n.closest(".tp-caption").data("volume") && o.mute(), s.videoplaying = !0, a.trigger("stoptimer"), a.trigger("revolution.slide.onvideoplay")
            } else {
                var r = a.find(".tp-bannertimer"), s = r.data("opt");
                -1 != e.data && 3 != e.data && (s.videoplaying = !1, a.trigger("starttimer"), a.trigger("revolution.slide.onvideostop")), 0 == e.data && 1 == s.nextslideatend ? s.container.revnext() : (s.videoplaying = !1, a.trigger("starttimer"), a.trigger("revolution.slide.onvideostop"))
            }
        }, A = function(t, e, i) {
            t.addEventListener ? t.addEventListener(e, i, !1) : t.attachEvent(e, i, !1)
        }, E = function(e, i) {
            var n = $f(e), a = t("#" + e), o = a.closest(".tp-simpleresponsive"), r = a.closest(".tp-caption");
            setTimeout(function() {
                n.addEvent("ready", function() {
                    i && n.api("play"), n.addEvent("play", function() {
                        var t = o.find(".tp-bannertimer"), e = t.data("opt");
                        e.videoplaying = !0, o.trigger("stoptimer"), "mute" == r.data("volume") && n.api("setVolume", "0")
                    }), n.addEvent("finish", function() {
                        var t = o.find(".tp-bannertimer"), e = t.data("opt");
                        e.videoplaying = !1, o.trigger("starttimer"), o.trigger("revolution.slide.onvideoplay"), 1 == e.nextslideatend && e.container.revnext()
                    }), n.addEvent("pause", function() {
                        var t = o.find(".tp-bannertimer"), e = t.data("opt");
                        e.videoplaying = !1, o.trigger("starttimer"), o.trigger("revolution.slide.onvideostop")
                    }), r.find(".tp-thumb-image").click(function() {
                        punchgs.TweenLite.to(t(this), .3, {autoAlpha: 0,force3D: "auto",ease: punchgs.Power3.easeInOut}), n.api("play")
                    })
                })
            }, 150)
        }, P = function(t, i) {
            var n = i.width(), a = i.height(), o = t.data("mediaAspect");
            o == e && (o = 1);
            var r = n / a;
            t.css({position: "absolute"}), t.find("video"), o > r ? punchgs.TweenLite.to(t, 1e-4, {width: a * o,force3D: "auto",top: 0,left: 0 - (a * o - n) / 2,height: a}) : punchgs.TweenLite.to(t, 1e-4, {width: n,force3D: "auto",top: 0 - (n / o - a) / 2,left: 0,height: n / o})
        }, j = function() {
            var t = new Object;
            return t.x = 0, t.y = 0, t.rotationX = 0, t.rotationY = 0, t.rotationZ = 0, t.scale = 1, t.scaleX = 1, t.scaleY = 1, t.skewX = 0, t.skewY = 0, t.opacity = 0, t.transformOrigin = "center, center", t.transformPerspective = 400, t.rotation = 0, t
        }, I = function(e, i) {
            var n = i.split(";");
            return t.each(n, function(t, i) {
                i = i.split(":");
                var n = i[0], a = i[1];
                "rotationX" == n && (e.rotationX = parseInt(a, 0)), "rotationY" == n && (e.rotationY = parseInt(a, 0)), "rotationZ" == n && (e.rotationZ = parseInt(a, 0)), "rotationZ" == n && (e.rotation = parseInt(a, 0)), "scaleX" == n && (e.scaleX = parseFloat(a)), "scaleY" == n && (e.scaleY = parseFloat(a)), "opacity" == n && (e.opacity = parseFloat(a)), "skewX" == n && (e.skewX = parseInt(a, 0)), "skewY" == n && (e.skewY = parseInt(a, 0)), "x" == n && (e.x = parseInt(a, 0)), "y" == n && (e.y = parseInt(a, 0)), "z" == n && (e.z = parseInt(a, 0)), "transformOrigin" == n && (e.transformOrigin = a.toString()), "transformPerspective" == n && (e.transformPerspective = parseInt(a, 0))
            }), e
        }, D = function(e) {
            var i = e.split("animation:"), n = new Object;
            n.animation = I(j(), i[1]);
            var a = i[0].split(";");
            return t.each(a, function(t, e) {
                e = e.split(":");
                var i = e[0], a = e[1];
                "typ" == i && (n.typ = a), "speed" == i && (n.speed = parseInt(a, 0) / 1e3), "start" == i && (n.start = parseInt(a, 0) / 1e3), "elementdelay" == i && (n.elementdelay = parseFloat(a)), "ease" == i && (n.ease = a)
            }), n
        }, z = function(i, n, a, o) {
            function r() {
            }
            function l() {
            }
            i.data("ctl") == e && i.data("ctl", new punchgs.TimelineLite);
            var d = i.data("ctl"), c = 0, u = 0, h = i.find(".tp-caption"), p = n.container.find(".tp-static-layers").find(".tp-caption");
            d.pause(), t.each(p, function(t, e) {
                h.push(e)
            }), h.each(function(i) {
                var o = a, d = -1, h = t(this);
                if (h.hasClass("tp-static-layer")) {
                    var p = h.data("startslide"), f = h.data("endslide");
                    (-1 == p || "-1" == p) && h.data("startslide", 0), (-1 == f || "-1" == f) && h.data("endslide", n.slideamount), 0 == p && f == n.slideamount - 1 && h.data("endslide", n.slideamount + 1), p = h.data("startslide"), f = h.data("endslide"), h.hasClass("tp-is-shown") ? d = f == n.next || p > n.next || f < n.next ? 2 : 0 : p <= n.next && f >= n.next || p == n.next || f == n.next ? (h.addClass("tp-is-shown"), d = 1) : d = 0
                }
                c = n.width / 2 - n.startwidth * n.bw / 2;
                var m = n.bw;
                n.bh, "on" == n.fullScreen && (u = n.height / 2 - n.startheight * n.bh / 2), ("on" == n.autoHeight || n.minHeight != e && n.minHeight > 0) && (u = n.container.height() / 2 - n.startheight * n.bh / 2), 0 > u && (u = 0);
                var g = 0;
                if (n.width < n.hideCaptionAtLimit && "on" == h.data("captionhidden") ? (h.addClass("tp-hidden-caption"), g = 1) : n.width < n.hideAllCaptionAtLimit || n.width < n.hideAllCaptionAtLilmit ? (h.addClass("tp-hidden-caption"), g = 1) : h.removeClass("tp-hidden-caption"), 0 == g) {
                    if (h.data("linktoslide") == e || h.hasClass("hasclicklistener") || (h.addClass("hasclicklistener"), h.css({cursor: "pointer"}), "no" != h.data("linktoslide") && h.click(function() {
                        var e = t(this), i = e.data("linktoslide");
                        "next" != i && "prev" != i ? (n.container.data("showus", i), n.container.parent().find(".tp-rightarrow").click()) : "next" == i ? n.container.parent().find(".tp-rightarrow").click() : "prev" == i && n.container.parent().find(".tp-leftarrow").click()
                    })), 0 > c && (c = 0), h.hasClass("tp-videolayer") || h.find("iframe").length > 0 || h.find("video").length > 0) {
                        var v = "iframe" + Math.round(1e5 * Math.random() + 1), y = h.data("videowidth"), w = h.data("videoheight"), b = h.data("videoattributes"), x = h.data("ytid"), _ = h.data("vimeoid"), T = h.data("videpreload"), k = h.data("videomp4"), C = h.data("videowebm"), S = h.data("videoogv"), O = h.data("videocontrols"), M = "http", z = "loop" == h.data("videoloop") ? "loop" : "loopandnoslidestop" == h.data("videoloop") ? "loop" : "";
                        if (h.data("thumbimage") != e && h.data("videoposter") == e && h.data("videoposter", h.data("thumbimage")), x != e && String(x).length > 1 && 0 == h.find("iframe").length && (M = "https", "none" == O && (b = b.replace("controls=1", "controls=0"), -1 == b.toLowerCase().indexOf("controls") && (b += "&controls=0")), h.append('<iframe style="visible:hidden" src="' + M + "://www.youtube.com/embed/" + x + "?" + b + '" width="' + y + '" height="' + w + '" style="width:' + y + "px;height:" + w + 'px"></iframe>')), _ != e && String(_).length > 1 && 0 == h.find("iframe").length && ("https:" === location.protocol && (M = "https"), h.append('<iframe style="visible:hidden" src="' + M + "://player.vimeo.com/video/" + _ + "?" + b + '" width="' + y + '" height="' + w + '" style="width:' + y + "px;height:" + w + 'px"></iframe>')), (k != e || C != e) && 0 == h.find("video").length) {
                            "controls" != O && (O = "");
                            var F = '<video style="visible:hidden" class="" ' + z + ' preload="' + T + '" width="' + y + '" height="' + w + '"';
                            h.data("videoposter") != e && h.data("videoposter") != e && (F = F + 'poster="' + h.data("videoposter") + '">'), C != e && "firefox" == N().toLowerCase() && (F = F + '<source src="' + C + '" type="video/webm" />'), k != e && (F = F + '<source src="' + k + '" type="video/mp4" />'), S != e && (F = F + '<source src="' + S + '" type="video/ogg" />'), F += "</video>", h.append(F), "controls" == O && h.append('<div class="tp-video-controls"><div class="tp-video-button-wrap"><button type="button" class="tp-video-button tp-vid-play-pause">Play</button></div><div class="tp-video-seek-bar-wrap"><input  type="range" class="tp-seek-bar" value="0"></div><div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-mute">Mute</button></div><div class="tp-video-vol-bar-wrap"><input  type="range" class="tp-volume-bar" min="0" max="1" step="0.1" value="1"></div><div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-full-screen">Full-Screen</button></div></div>')
                        }
                        var B = !1;
                        (1 == h.data("autoplayonlyfirsttime") || "true" == h.data("autoplayonlyfirsttime") || 1 == h.data("autoplay")) && (h.data("autoplay", !0), B = !0), h.find("iframe").each(function() {
                            var i = t(this);
                            if (punchgs.TweenLite.to(i, .1, {autoAlpha: 1,zIndex: 0,transformStyle: "preserve-3d",z: 0,rotationX: 0,force3D: "auto"}), Q()) {
                                var r = i.attr("src");
                                i.attr("src", ""), i.attr("src", r)
                            }
                            if (n.nextslideatend = h.data("nextslideatend"), h.data("videoposter") != e && h.data("videoposter").length > 2 && 1 != h.data("autoplay") && !o && (0 == h.find(".tp-thumb-image").length ? h.append('<div class="tp-thumb-image" style="cursor:pointer; position:absolute;top:0px;left:0px;width:100%;height:100%;background-image:url(' + h.data("videoposter") + '); background-size:cover"></div>') : punchgs.TweenLite.set(h.find(".tp-thumb-image"), {autoAlpha: 1})), i.attr("src").toLowerCase().indexOf("youtube") >= 0)
                                if (i.hasClass("HasListener")) {
                                    if (!a) {
                                        var s = h.data("player");
                                        "on" != h.data("forcerewind") || Q() || s.seekTo(0), (!Q() && 1 == h.data("autoplay") || B) && h.data("timerplay", setTimeout(function() {
                                            s.playVideo()
                                        }, h.data("start")))
                                    }
                                } else
                                    try {
                                        i.attr("id", v);
                                        var s, l = setInterval(function() {
                                            YT != e && typeof YT.Player != e && "undefined" != typeof YT.Player && (s = new YT.Player(v, {events: {onStateChange: L,onReady: function(i) {
                                                        var n = i.target.getVideoEmbedCode(), a = t("#" + n.split('id="')[1].split('"')[0]), o = a.closest(".tp-caption"), r = o.data("videorate");
                                                        o.data("videostart"), r != e && i.target.setPlaybackRate(parseFloat(r)), (!Q() && 1 == o.data("autoplay") || B) && o.data("timerplay", setTimeout(function() {
                                                            i.target.playVideo()
                                                        }, o.data("start"))), o.find(".tp-thumb-image").click(function() {
                                                            punchgs.TweenLite.to(t(this), .3, {autoAlpha: 0,force3D: "auto",ease: punchgs.Power3.easeInOut}), Q() || s.playVideo()
                                                        })
                                                    }}})), i.addClass("HasListener"), h.data("player", s), clearInterval(l)
                                        }, 100)
                                    } catch (d) {
                                    }
                            else if (i.attr("src").toLowerCase().indexOf("vimeo") >= 0)
                                if (i.hasClass("HasListener")) {
                                    if (!(a || Q() || 1 != h.data("autoplay") && "on" != h.data("forcerewind"))) {
                                        var i = h.find("iframe"), c = i.attr("id"), u = $f(c);
                                        "on" == h.data("forcerewind") && u.api("seekTo", 0), h.data("timerplay", setTimeout(function() {
                                            1 == h.data("autoplay") && u.api("play")
                                        }, h.data("start")))
                                    }
                                } else {
                                    i.addClass("HasListener"), i.attr("id", v);
                                    for (var p, f = i.attr("src"), m = {}, g = f, y = /([^&=]+)=([^&]*)/g; p = y.exec(g); )
                                        m[decodeURIComponent(p[1])] = decodeURIComponent(p[2]);
                                    f = m.player_id != e ? f.replace(m.player_id, v) : f + "&player_id=" + v;
                                    try {
                                        f = f.replace("api=0", "api=1")
                                    } catch (d) {
                                    }
                                    f += "&api=1", i.attr("src", f);
                                    var s = h.find("iframe")[0], w = setInterval(function() {
                                        $f != e && typeof $f(v).api != e && "undefined" != typeof $f(v).api && ($f(s).addEvent("ready", function() {
                                            E(v, B)
                                        }), clearInterval(w))
                                    }, 100)
                                }
                        }), (Q() && 1 == h.data("disablevideoonmobile") || s(8)) && h.find("video").remove(), h.find("video").length > 0 && h.find("video").each(function() {
                            var i = this, a = t(this);
                            a.parent().hasClass("html5vid") || a.wrap('<div class="html5vid" style="position:relative;top:0px;left:0px;width:auto;height:auto"></div>');
                            var o = a.parent();
                            A(i, "loadedmetadata", function(t) {
                                t.data("metaloaded", 1)
                            }(o)), clearInterval(o.data("interval")), o.data("interval", setInterval(function() {
                                if (1 == o.data("metaloaded") || 0 / 0 != i.duration) {
                                    if (clearInterval(o.data("interval")), !o.hasClass("HasListener")) {
                                        o.addClass("HasListener"), "none" != h.data("dottedoverlay") && h.data("dottedoverlay") != e && 1 != h.find(".tp-dottedoverlay").length && o.append('<div class="tp-dottedoverlay ' + h.data("dottedoverlay") + '"></div>'), a.attr("control") == e && (0 == o.find(".tp-video-play-button").length && o.append('<div class="tp-video-play-button"><i class="revicon-right-dir"></i><div class="tp-revstop"></div></div>'), o.find("video, .tp-poster, .tp-video-play-button").click(function() {
                                            o.hasClass("videoisplaying") ? i.pause() : i.play()
                                        })), (1 == h.data("forcecover") || h.hasClass("fullscreenvideo")) && (1 == h.data("forcecover") && (P(o, n.container), o.addClass("fullcoveredvideo"), h.addClass("fullcoveredvideo")), o.css({width: "100%",height: "100%"}));
                                        var t = h.find(".tp-vid-play-pause")[0], r = h.find(".tp-vid-mute")[0], s = h.find(".tp-vid-full-screen")[0], l = h.find(".tp-seek-bar")[0], d = h.find(".tp-volume-bar")[0];
                                        t != e && (A(t, "click", function() {
                                            1 == i.paused ? i.play() : i.pause()
                                        }), A(r, "click", function() {
                                            0 == i.muted ? (i.muted = !0, r.innerHTML = "Unmute") : (i.muted = !1, r.innerHTML = "Mute")
                                        }), A(s, "click", function() {
                                            i.requestFullscreen ? i.requestFullscreen() : i.mozRequestFullScreen ? i.mozRequestFullScreen() : i.webkitRequestFullscreen && i.webkitRequestFullscreen()
                                        }), A(l, "change", function() {
                                            var t = i.duration * (l.value / 100);
                                            i.currentTime = t
                                        }), A(i, "timeupdate", function() {
                                            var t = 100 / i.duration * i.currentTime;
                                            l.value = t
                                        }), A(l, "mousedown", function() {
                                            i.pause()
                                        }), A(l, "mouseup", function() {
                                            i.play()
                                        }), A(d, "change", function() {
                                            i.volume = d.value
                                        })), A(i, "play", function() {
                                            "mute" == h.data("volume") && (i.muted = !0), o.addClass("videoisplaying"), "loopandnoslidestop" == h.data("videoloop") ? (n.videoplaying = !1, n.container.trigger("starttimer"), n.container.trigger("revolution.slide.onvideostop")) : (n.videoplaying = !0, n.container.trigger("stoptimer"), n.container.trigger("revolution.slide.onvideoplay"));
                                            var t = h.find(".tp-vid-play-pause")[0], a = h.find(".tp-vid-mute")[0];
                                            t != e && (t.innerHTML = "Pause"), a != e && i.muted && (a.innerHTML = "Unmute")
                                        }), A(i, "pause", function() {
                                            o.removeClass("videoisplaying"), n.videoplaying = !1, n.container.trigger("starttimer"), n.container.trigger("revolution.slide.onvideostop");
                                            var t = h.find(".tp-vid-play-pause")[0];
                                            t != e && (t.innerHTML = "Play")
                                        }), A(i, "ended", function() {
                                            o.removeClass("videoisplaying"), n.videoplaying = !1, n.container.trigger("starttimer"), n.container.trigger("revolution.slide.onvideostop"), 1 == n.nextslideatend && n.container.revnext()
                                        })
                                    }
                                    var c = !1;
                                    (1 == h.data("autoplayonlyfirsttime") || "true" == h.data("autoplayonlyfirsttime")) && (c = !0);
                                    var u = 16 / 9;
                                    if ("4:3" == h.data("aspectratio") && (u = 4 / 3), o.data("mediaAspect", u), 1 == o.closest(".tp-caption").data("forcecover") && (P(o, n.container), o.addClass("fullcoveredvideo")), a.css({display: "block"}), n.nextslideatend = h.data("nextslideatend"), (1 == h.data("autoplay") || 1 == c) && ("loopandnoslidestop" == h.data("videoloop") ? (n.videoplaying = !1, n.container.trigger("starttimer"), n.container.trigger("revolution.slide.onvideostop")) : (n.videoplaying = !0, n.container.trigger("stoptimer"), n.container.trigger("revolution.slide.onvideoplay")), "on" != h.data("forcerewind") || o.hasClass("videoisplaying") || i.currentTime > 0 && (i.currentTime = 0), "mute" == h.data("volume") && (i.muted = !0), o.data("timerplay", setTimeout(function() {
                                        "on" != h.data("forcerewind") || o.hasClass("videoisplaying") || i.currentTime > 0 && (i.currentTime = 0), "mute" == h.data("volume") && (i.muted = !0), i.play()
                                    }, 10 + h.data("start")))), o.data("ww") == e && o.data("ww", a.attr("width")), o.data("hh") == e && o.data("hh", a.attr("height")), !h.hasClass("fullscreenvideo") && 1 == h.data("forcecover"))
                                        try {
                                            o.width(o.data("ww") * n.bw), o.height(o.data("hh") * n.bh)
                                        } catch (p) {
                                        }
                                    clearInterval(o.data("interval"))
                                }
                            }), 100)
                        }), 1 == h.data("autoplay") && (setTimeout(function() {
                            "loopandnoslidestop" != h.data("videoloop") && (n.videoplaying = !0, n.container.trigger("stoptimer"))
                        }, 200), "loopandnoslidestop" != h.data("videoloop") && (n.videoplaying = !0, n.container.trigger("stoptimer")), (1 == h.data("autoplayonlyfirsttime") || "true" == h.data("autoplayonlyfirsttime")) && (h.data("autoplay", !1), h.data("autoplayonlyfirsttime", !1)))
                    }
                    var X = 0, U = 0;
                    if (h.find("img").length > 0) {
                        var Y = h.find("img");
                        0 == Y.width() && Y.css({width: "auto"}), 0 == Y.height() && Y.css({height: "auto"}), Y.data("ww") == e && Y.width() > 0 && Y.data("ww", Y.width()), Y.data("hh") == e && Y.height() > 0 && Y.data("hh", Y.height());
                        var V = Y.data("ww"), G = Y.data("hh");
                        V == e && (V = 0), G == e && (G = 0), Y.width(V * n.bw), Y.height(G * n.bh), X = Y.width(), U = Y.height()
                    } else if (h.find("iframe").length > 0 || h.find("video").length > 0) {
                        var Z = !1, Y = h.find("iframe");
                        0 == Y.length && (Y = h.find("video"), Z = !0), Y.css({display: "block"}), h.data("ww") == e && h.data("ww", Y.width()), h.data("hh") == e && h.data("hh", Y.height());
                        var V = h.data("ww"), G = h.data("hh"), J = h;
                        J.data("fsize") == e && J.data("fsize", parseInt(J.css("font-size"), 0) || 0), J.data("pt") == e && J.data("pt", parseInt(J.css("paddingTop"), 0) || 0), J.data("pb") == e && J.data("pb", parseInt(J.css("paddingBottom"), 0) || 0), J.data("pl") == e && J.data("pl", parseInt(J.css("paddingLeft"), 0) || 0), J.data("pr") == e && J.data("pr", parseInt(J.css("paddingRight"), 0) || 0), J.data("mt") == e && J.data("mt", parseInt(J.css("marginTop"), 0) || 0), J.data("mb") == e && J.data("mb", parseInt(J.css("marginBottom"), 0) || 0), J.data("ml") == e && J.data("ml", parseInt(J.css("marginLeft"), 0) || 0), J.data("mr") == e && J.data("mr", parseInt(J.css("marginRight"), 0) || 0), J.data("bt") == e && J.data("bt", parseInt(J.css("borderTop"), 0) || 0), J.data("bb") == e && J.data("bb", parseInt(J.css("borderBottom"), 0) || 0), J.data("bl") == e && J.data("bl", parseInt(J.css("borderLeft"), 0) || 0), J.data("br") == e && J.data("br", parseInt(J.css("borderRight"), 0) || 0), J.data("lh") == e && J.data("lh", parseInt(J.css("lineHeight"), 0) || 0), "auto" == J.data("lh") && J.data("lh", J.data("fsize") + 4);
                        var K = n.width, te = n.height;
                        if (K > n.startwidth && (K = n.startwidth), te > n.startheight && (te = n.startheight), h.hasClass("fullscreenvideo")) {
                            c = 0, u = 0, h.data("x", 0), h.data("y", 0);
                            var ee = n.height;
                            "on" == n.autoHeight && (ee = n.container.height()), h.css({width: n.width,height: ee})
                        } else
                            h.css({"font-size": J.data("fsize") * n.bw + "px","padding-top": J.data("pt") * n.bh + "px","padding-bottom": J.data("pb") * n.bh + "px","padding-left": J.data("pl") * n.bw + "px","padding-right": J.data("pr") * n.bw + "px","margin-top": J.data("mt") * n.bh + "px","margin-bottom": J.data("mb") * n.bh + "px","margin-left": J.data("ml") * n.bw + "px","margin-right": J.data("mr") * n.bw + "px","border-top": J.data("bt") * n.bh + "px","border-bottom": J.data("bb") * n.bh + "px","border-left": J.data("bl") * n.bw + "px","border-right": J.data("br") * n.bw + "px","line-height": J.data("lh") * n.bh + "px",height: G * n.bh + "px"});
                        0 == Z ? (Y.width(V * n.bw), Y.height(G * n.bh)) : 1 == h.data("forcecover") || h.hasClass("fullscreenvideo") || (Y.width(V * n.bw), Y.height(G * n.bh)), X = Y.width(), U = Y.height()
                    } else {
                        h.find(".tp-resizeme, .tp-resizeme *").each(function() {
                            H(t(this), n)
                        }), h.hasClass("tp-resizeme") && h.find("*").each(function() {
                            H(t(this), n)
                        }), H(h, n), U = h.outerHeight(!0), X = h.outerWidth(!0);
                        var ie = h.outerHeight(), ne = h.css("backgroundColor");
                        h.find(".frontcorner").css({borderWidth: ie + "px",left: 0 - ie + "px",borderRight: "0px solid transparent",borderTopColor: ne}), h.find(".frontcornertop").css({borderWidth: ie + "px",left: 0 - ie + "px",borderRight: "0px solid transparent",borderBottomColor: ne}), h.find(".backcorner").css({borderWidth: ie + "px",right: 0 - ie + "px",borderLeft: "0px solid transparent",borderBottomColor: ne}), h.find(".backcornertop").css({borderWidth: ie + "px",right: 0 - ie + "px",borderLeft: "0px solid transparent",borderTopColor: ne})
                    }
                    "on" == n.fullScreenAlignForce && (c = 0, u = 0), h.data("voffset") == e && h.data("voffset", 0), h.data("hoffset") == e && h.data("hoffset", 0);
                    var ae = h.data("voffset") * m, oe = h.data("hoffset") * m, re = n.startwidth * m, se = n.startheight * m;
                    "on" == n.fullScreenAlignForce && (re = n.container.width(), se = n.container.height()), ("center" == h.data("x") || "center" == h.data("xcenter")) && (h.data("xcenter", "center"), h.data("x", re / 2 - h.outerWidth(!0) / 2 + oe)), ("left" == h.data("x") || "left" == h.data("xleft")) && (h.data("xleft", "left"), h.data("x", 0 / m + oe)), ("right" == h.data("x") || "right" == h.data("xright")) && (h.data("xright", "right"), h.data("x", (re - h.outerWidth(!0) + oe) / m)), ("center" == h.data("y") || "center" == h.data("ycenter")) && (h.data("ycenter", "center"), h.data("y", se / 2 - h.outerHeight(!0) / 2 + ae)), ("top" == h.data("y") || "top" == h.data("ytop")) && (h.data("ytop", "top"), h.data("y", 0 / n.bh + ae)), ("bottom" == h.data("y") || "bottom" == h.data("ybottom")) && (h.data("ybottom", "bottom"), h.data("y", (se - h.outerHeight(!0) + ae) / m)), h.data("start") == e && h.data("start", 1e3);
                    var le = h.data("easing");
                    le == e && (le = "punchgs.Power1.easeOut");
                    var de = h.data("start") / 1e3, ce = h.data("speed") / 1e3;
                    if ("center" == h.data("x") || "center" == h.data("xcenter"))
                        var ue = h.data("x") + c;
                    else
                        var ue = m * h.data("x") + c;
                    if ("center" == h.data("y") || "center" == h.data("ycenter"))
                        var he = h.data("y") + u;
                    else
                        var he = n.bh * h.data("y") + u;
                    if (punchgs.TweenLite.set(h, {top: he,left: ue,overwrite: "auto"}), 0 == d && (o = !0), h.data("timeline") == e || o || (2 != d && h.data("timeline").gotoAndPlay(0), o = !0), !o) {
                        h.data("timeline") != e;
                        var pe = new punchgs.TimelineLite({smoothChildTiming: !0,onStart: l});
                        pe.pause(), "on" == n.fullScreenAlignForce;
                        var fe = h;
                        h.data("mySplitText") != e && h.data("mySplitText").revert(), ("chars" == h.data("splitin") || "words" == h.data("splitin") || "lines" == h.data("splitin") || "chars" == h.data("splitout") || "words" == h.data("splitout") || "lines" == h.data("splitout")) && (h.find("a").length > 0 ? h.data("mySplitText", new punchgs.SplitText(h.find("a"), {type: "lines,words,chars",charsClass: "tp-splitted",wordsClass: "tp-splitted",linesClass: "tp-splitted"})) : h.find(".tp-layer-inner-rotation").length > 0 ? h.data("mySplitText", new punchgs.SplitText(h.find(".tp-layer-inner-rotation"), {type: "lines,words,chars",charsClass: "tp-splitted",wordsClass: "tp-splitted",linesClass: "tp-splitted"})) : h.data("mySplitText", new punchgs.SplitText(h, {type: "lines,words,chars",charsClass: "tp-splitted",wordsClass: "tp-splitted",linesClass: "tp-splitted"})), h.addClass("splitted")), "chars" == h.data("splitin") && (fe = h.data("mySplitText").chars), "words" == h.data("splitin") && (fe = h.data("mySplitText").words), "lines" == h.data("splitin") && (fe = h.data("mySplitText").lines);
                        var me = j(), ge = j();
                        h.data("repeat") != e && (repeatV = h.data("repeat")), h.data("yoyo") != e && (yoyoV = h.data("yoyo")), h.data("repeatdelay") != e && (repeatdelayV = h.data("repeatdelay"));
                        var ve = h.attr("class");
                        ve.match("customin") ? me = I(me, h.data("customin")) : ve.match("randomrotate") ? (me.scale = 3 * Math.random() + 1, me.rotation = Math.round(200 * Math.random() - 100), me.x = Math.round(200 * Math.random() - 100), me.y = Math.round(200 * Math.random() - 100)) : ve.match("lfr") || ve.match("skewfromright") ? me.x = 15 + n.width : ve.match("lfl") || ve.match("skewfromleft") ? me.x = -15 - X : ve.match("sfl") || ve.match("skewfromleftshort") ? me.x = -50 : ve.match("sfr") || ve.match("skewfromrightshort") ? me.x = 50 : ve.match("lft") ? me.y = -25 - U : ve.match("lfb") ? me.y = 25 + n.height : ve.match("sft") ? me.y = -50 : ve.match("sfb") && (me.y = 50), ve.match("skewfromright") || h.hasClass("skewfromrightshort") ? me.skewX = -85 : (ve.match("skewfromleft") || h.hasClass("skewfromleftshort")) && (me.skewX = 85), (ve.match("fade") || ve.match("sft") || ve.match("sfl") || ve.match("sfb") || ve.match("skewfromleftshort") || ve.match("sfr") || ve.match("skewfromrightshort")) && (me.opacity = 0), "safari" == N().toLowerCase();
                        var ye = h.data("elementdelay") == e ? 0 : h.data("elementdelay");
                        ge.ease = me.ease = h.data("easing") == e ? punchgs.Power1.easeInOut : h.data("easing"), me.data = new Object, me.data.oldx = me.x, me.data.oldy = me.y, ge.data = new Object, ge.data.oldx = ge.x, ge.data.oldy = ge.y, me.x = me.x * m, me.y = me.y * m;
                        var we = new punchgs.TimelineLite;
                        if (2 != d)
                            if (ve.match("customin"))
                                fe != h && pe.add(punchgs.TweenLite.set(h, {force3D: "auto",opacity: 1,scaleX: 1,scaleY: 1,rotationX: 0,rotationY: 0,rotationZ: 0,skewX: 0,skewY: 0,z: 0,x: 0,y: 0,visibility: "visible",delay: 0,overwrite: "all"})), me.visibility = "hidden", ge.visibility = "visible", ge.overwrite = "all", ge.opacity = 1, ge.onComplete = r(), ge.delay = de, ge.force3D = "auto", pe.add(we.staggerFromTo(fe, ce, me, ge, ye), "frame0");
                            else if (me.visibility = "visible", me.transformPerspective = 600, fe != h && pe.add(punchgs.TweenLite.set(h, {force3D: "auto",opacity: 1,scaleX: 1,scaleY: 1,rotationX: 0,rotationY: 0,rotationZ: 0,skewX: 0,skewY: 0,z: 0,x: 0,y: 0,visibility: "visible",delay: 0,overwrite: "all"})), ge.visibility = "visible", ge.delay = de, ge.onComplete = r(), ge.opacity = 1, ge.force3D = "auto", ve.match("randomrotate") && fe != h)
                                for (var i = 0; i < fe.length; i++) {
                                    var be = new Object, xe = new Object;
                                    t.extend(be, me), t.extend(xe, ge), me.scale = 3 * Math.random() + 1, me.rotation = Math.round(200 * Math.random() - 100), me.x = Math.round(200 * Math.random() - 100), me.y = Math.round(200 * Math.random() - 100), 0 != i && (xe.delay = de + i * ye), pe.append(punchgs.TweenLite.fromTo(fe[i], ce, be, xe), "frame0")
                                }
                            else
                                pe.add(we.staggerFromTo(fe, ce, me, ge, ye), "frame0");
                        if (h.data("timeline", pe), new Array, h.data("frames") != e) {
                            var _e = h.data("frames");
                            _e = _e.replace(/\s+/g, ""), _e = _e.replace("{", "");
                            var Te = _e.split("}");
                            t.each(Te, function(t, e) {
                                if (e.length > 0) {
                                    var i = D(e);
                                    q(h, n, i, "frame" + (t + 10), m)
                                }
                            })
                        }
                        pe = h.data("timeline"), h.data("end") == e || -1 != d && 2 != d ? -1 == d || 2 == d ? W(h, n, 999999, me, "frame99", m) : W(h, n, 999999, me, "frame99", m) : W(h, n, h.data("end") / 1e3, me, "frame99", m), pe = h.data("timeline"), h.data("timeline", pe), $(h, m), pe.resume()
                    }
                }
                if (o && (R(h), $(h, m), h.data("timeline") != e)) {
                    var ke = h.data("timeline").getTweensOf();
                    t.each(ke, function(t, i) {
                        if (i.vars.data != e) {
                            var n = i.vars.data.oldx * m, a = i.vars.data.oldy * m;
                            if (1 != i.progress() && 0 != i.progress())
                                try {
                                    i.vars.x = n, i.vary.y = a
                                } catch (o) {
                                }
                            else
                                1 == i.progress() && punchgs.TweenLite.set(i.target, {x: n,y: a})
                        }
                    })
                }
            });
            var f = t("body").find("#" + n.container.attr("id")).find(".tp-bannertimer");
            f.data("opt", n), o != e && setTimeout(function() {
                o.resume()
            }, 30)
        }, N = function() {
            var t, e = navigator.appName, i = navigator.userAgent, n = i.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
            return n && null != (t = i.match(/version\/([\.\d]+)/i)) && (n[2] = t[1]), n = n ? [n[1], n[2]] : [e, navigator.appVersion, "-?"], n[0]
        }, H = function(t, i) {
            t.data("fsize") == e && t.data("fsize", parseInt(t.css("font-size"), 0) || 0), t.data("pt") == e && t.data("pt", parseInt(t.css("paddingTop"), 0) || 0), t.data("pb") == e && t.data("pb", parseInt(t.css("paddingBottom"), 0) || 0), t.data("pl") == e && t.data("pl", parseInt(t.css("paddingLeft"), 0) || 0), t.data("pr") == e && t.data("pr", parseInt(t.css("paddingRight"), 0) || 0), t.data("mt") == e && t.data("mt", parseInt(t.css("marginTop"), 0) || 0), t.data("mb") == e && t.data("mb", parseInt(t.css("marginBottom"), 0) || 0), t.data("ml") == e && t.data("ml", parseInt(t.css("marginLeft"), 0) || 0), t.data("mr") == e && t.data("mr", parseInt(t.css("marginRight"), 0) || 0), t.data("bt") == e && t.data("bt", parseInt(t.css("borderTopWidth"), 0) || 0), t.data("bb") == e && t.data("bb", parseInt(t.css("borderBottomWidth"), 0) || 0), t.data("bl") == e && t.data("bl", parseInt(t.css("borderLeftWidth"), 0) || 0), t.data("br") == e && t.data("br", parseInt(t.css("borderRightWidth"), 0) || 0), t.data("ls") == e && t.data("ls", parseInt(t.css("letterSpacing"), 0) || 0), t.data("lh") == e && t.data("lh", parseInt(t.css("lineHeight"), 0) || "auto"), t.data("minwidth") == e && t.data("minwidth", parseInt(t.css("minWidth"), 0) || 0), t.data("minheight") == e && t.data("minheight", parseInt(t.css("minHeight"), 0) || 0), t.data("maxwidth") == e && t.data("maxwidth", parseInt(t.css("maxWidth"), 0) || "none"), t.data("maxheight") == e && t.data("maxheight", parseInt(t.css("maxHeight"), 0) || "none"), t.data("wii") == e && t.data("wii", parseInt(t.css("width"), 0) || 0), t.data("hii") == e && t.data("hii", parseInt(t.css("height"), 0) || 0), t.data("wan") == e && t.data("wan", t.css("-webkit-transition")), t.data("moan") == e && t.data("moan", t.css("-moz-animation-transition")), t.data("man") == e && t.data("man", t.css("-ms-animation-transition")), t.data("ani") == e && t.data("ani", t.css("transition")), "auto" == t.data("lh") && t.data("lh", t.data("fsize") + 4), t.hasClass("tp-splitted") || (t.css("-webkit-transition", "none"), t.css("-moz-transition", "none"), t.css("-ms-transition", "none"), t.css("transition", "none"), punchgs.TweenLite.set(t, {fontSize: Math.round(t.data("fsize") * i.bw) + "px",letterSpacing: Math.floor(t.data("ls") * i.bw) + "px",paddingTop: Math.round(t.data("pt") * i.bh) + "px",paddingBottom: Math.round(t.data("pb") * i.bh) + "px",paddingLeft: Math.round(t.data("pl") * i.bw) + "px",paddingRight: Math.round(t.data("pr") * i.bw) + "px",marginTop: t.data("mt") * i.bh + "px",marginBottom: t.data("mb") * i.bh + "px",marginLeft: t.data("ml") * i.bw + "px",marginRight: t.data("mr") * i.bw + "px",borderTopWidth: Math.round(t.data("bt") * i.bh) + "px",borderBottomWidth: Math.round(t.data("bb") * i.bh) + "px",borderLeftWidth: Math.round(t.data("bl") * i.bw) + "px",borderRightWidth: Math.round(t.data("br") * i.bw) + "px",lineHeight: Math.round(t.data("lh") * i.bh) + "px",minWidth: t.data("minwidth") * i.bw + "px",minHeight: t.data("minheight") * i.bh + "px",overwrite: "auto"}), setTimeout(function() {
                t.css("-webkit-transition", t.data("wan")), t.css("-moz-transition", t.data("moan")), t.css("-ms-transition", t.data("man")), t.css("transition", t.data("ani"))
            }, 30), "none" != t.data("maxheight") && t.css({maxHeight: t.data("maxheight") * i.bh + "px"}), "none" != t.data("maxwidth") && t.css({maxWidth: t.data("maxwidth") * i.bw + "px"}))
        }, $ = function(i, n) {
            i.find(".rs-pendulum").each(function() {
                var i = t(this);
                if (i.data("timeline") == e) {
                    i.data("timeline", new punchgs.TimelineLite);
                    var a = i.data("startdeg") == e ? -20 : i.data("startdeg"), o = i.data("enddeg") == e ? 20 : i.data("enddeg"), r = i.data("speed") == e ? 2 : i.data("speed"), s = i.data("origin") == e ? "50% 50%" : i.data("origin"), l = i.data("easing") == e ? punchgs.Power2.easeInOut : i.data("ease");
                    a *= n, o *= n, i.data("timeline").append(new punchgs.TweenLite.fromTo(i, r, {force3D: "auto",rotation: a,transformOrigin: s}, {rotation: o,ease: l})), i.data("timeline").append(new punchgs.TweenLite.fromTo(i, r, {force3D: "auto",rotation: o,transformOrigin: s}, {rotation: a,ease: l,onComplete: function() {
                            i.data("timeline").restart()
                        }}))
                }
            }), i.find(".rs-rotate").each(function() {
                var i = t(this);
                if (i.data("timeline") == e) {
                    i.data("timeline", new punchgs.TimelineLite);
                    var a = i.data("startdeg") == e ? 0 : i.data("startdeg"), o = i.data("enddeg") == e ? 360 : i.data("enddeg");
                    speed = i.data("speed") == e ? 2 : i.data("speed"), origin = i.data("origin") == e ? "50% 50%" : i.data("origin"), easing = i.data("easing") == e ? punchgs.Power2.easeInOut : i.data("easing"), a *= n, o *= n, i.data("timeline").append(new punchgs.TweenLite.fromTo(i, speed, {force3D: "auto",rotation: a,transformOrigin: origin}, {rotation: o,ease: easing,onComplete: function() {
                            i.data("timeline").restart()
                        }}))
                }
            }), i.find(".rs-slideloop").each(function() {
                var i = t(this);
                if (i.data("timeline") == e) {
                    i.data("timeline", new punchgs.TimelineLite);
                    var a = i.data("xs") == e ? 0 : i.data("xs"), o = i.data("ys") == e ? 0 : i.data("ys"), r = i.data("xe") == e ? 0 : i.data("xe"), s = i.data("ye") == e ? 0 : i.data("ye"), l = i.data("speed") == e ? 2 : i.data("speed"), d = i.data("easing") == e ? punchgs.Power2.easeInOut : i.data("easing");
                    a *= n, o *= n, r *= n, s *= n, i.data("timeline").append(new punchgs.TweenLite.fromTo(i, l, {force3D: "auto",x: a,y: o}, {x: r,y: s,ease: d})), i.data("timeline").append(new punchgs.TweenLite.fromTo(i, l, {force3D: "auto",x: r,y: s}, {x: a,y: o,onComplete: function() {
                            i.data("timeline").restart()
                        }}))
                }
            }), i.find(".rs-pulse").each(function() {
                var i = t(this);
                if (i.data("timeline") == e) {
                    i.data("timeline", new punchgs.TimelineLite);
                    var n = i.data("zoomstart") == e ? 0 : i.data("zoomstart"), a = i.data("zoomend") == e ? 0 : i.data("zoomend"), o = i.data("speed") == e ? 2 : i.data("speed"), r = i.data("easing") == e ? punchgs.Power2.easeInOut : i.data("easing");
                    i.data("timeline").append(new punchgs.TweenLite.fromTo(i, o, {force3D: "auto",scale: n}, {scale: a,ease: r})), i.data("timeline").append(new punchgs.TweenLite.fromTo(i, o, {force3D: "auto",scale: a}, {scale: n,onComplete: function() {
                            i.data("timeline").restart()
                        }}))
                }
            }), i.find(".rs-wave").each(function() {
                var i = t(this);
                if (i.data("timeline") == e) {
                    i.data("timeline", new punchgs.TimelineLite);
                    var a = i.data("angle") == e ? 10 : i.data("angle"), o = i.data("radius") == e ? 10 : i.data("radius"), r = i.data("speed") == e ? -20 : i.data("speed");
                    i.data("origin") == e ? -20 : i.data("origin"), a *= n, o *= n;
                    var s = {a: 0,ang: a,element: i,unit: o};
                    i.data("timeline").append(new punchgs.TweenLite.fromTo(s, r, {a: 360}, {a: 0,force3D: "auto",ease: punchgs.Linear.easeNone,onUpdate: function() {
                            var t = s.a * (Math.PI / 180);
                            punchgs.TweenLite.to(s.element, .1, {force3D: "auto",x: Math.cos(t) * s.unit,y: s.unit * (1 - Math.sin(t))})
                        },onComplete: function() {
                            i.data("timeline").restart()
                        }}))
                }
            })
        }, R = function(i) {
            i.find(".rs-pendulum, .rs-slideloop, .rs-pulse, .rs-wave").each(function() {
                var i = t(this);
                i.data("timeline") != e && (i.data("timeline").pause(), i.data("timeline", null))
            })
        }, F = function(i, n) {
            var a = 0, o = i.find(".tp-caption"), r = n.container.find(".tp-static-layers").find(".tp-caption");
            return t.each(r, function(t, e) {
                o.push(e)
            }), o.each(function() {
                var i = -1, o = t(this);
                if (o.hasClass("tp-static-layer") && ((-1 == o.data("startslide") || "-1" == o.data("startslide")) && o.data("startslide", 0), (-1 == o.data("endslide") || "-1" == o.data("endslide")) && o.data("endslide", n.slideamount), o.hasClass("tp-is-shown") ? o.data("startslide") > n.next || o.data("endslide") < n.next ? (i = 2, o.removeClass("tp-is-shown")) : i = 0 : i = 2), 0 != i) {
                    if (R(o), o.find("iframe").length > 0) {
                        punchgs.TweenLite.to(o.find("iframe"), .2, {autoAlpha: 0}), Q() && o.find("iframe").remove();
                        try {
                            var r = o.find("iframe"), s = r.attr("id"), l = $f(s);
                            l.api("pause"), clearTimeout(o.data("timerplay"))
                        } catch (d) {
                        }
                        try {
                            var c = o.data("player");
                            c.stopVideo(), clearTimeout(o.data("timerplay"))
                        } catch (d) {
                        }
                    }
                    if (o.find("video").length > 0)
                        try {
                            o.find("video").each(function() {
                                var e = t(this).parent();
                                e.attr("id"), clearTimeout(e.data("timerplay"));
                                var i = this;
                                i.pause()
                            })
                        } catch (d) {
                        }
                    try {
                        var u = o.data("timeline"), h = u.getLabelTime("frame99"), p = u.time();
                        if (h > p) {
                            var f = u.getTweensOf(o);
                            if (t.each(f, function(t, e) {
                                0 != t && e.pause()
                            }), 0 != o.css("opacity")) {
                                var m = o.data(o.data("endspeed") == e ? "speed" : "endspeed");
                                m > a && (a = m), u.play("frame99")
                            } else
                                u.progress(1, !1)
                        }
                    } catch (d) {
                    }
                }
            }), a
        }, q = function(t, i, n, a, o) {
            var r = t.data("timeline"), s = new punchgs.TimelineLite, l = t;
            "chars" == n.typ ? l = t.data("mySplitText").chars : "words" == n.typ ? l = t.data("mySplitText").words : "lines" == n.typ && (l = t.data("mySplitText").lines), n.animation.ease = n.ease, n.animation.rotationZ != e && (n.animation.rotation = n.animation.rotationZ), n.animation.data = new Object, n.animation.data.oldx = n.animation.x, n.animation.data.oldy = n.animation.y, n.animation.x = n.animation.x * o, n.animation.y = n.animation.y * o, r.add(s.staggerTo(l, n.speed, n.animation, n.elementdelay), n.start), r.addLabel(a, n.start), t.data("timeline", r)
        }, W = function(t, i, n, a, o, r) {
            var s = t.data("timeline"), l = new punchgs.TimelineLite, d = j(), c = t.data(t.data("endspeed") == e ? "speed" : "endspeed"), u = t.attr("class");
            if (d.ease = t.data("endeasing") == e ? punchgs.Power1.easeInOut : t.data("endeasing"), c /= 1e3, u.match("ltr") || u.match("ltl") || u.match("str") || u.match("stl") || u.match("ltt") || u.match("ltb") || u.match("stt") || u.match("stb") || u.match("skewtoright") || u.match("skewtorightshort") || u.match("skewtoleft") || u.match("skewtoleftshort") || u.match("fadeout") || u.match("randomrotateout")) {
                u.match("skewtoright") || u.match("skewtorightshort") ? d.skewX = 35 : (u.match("skewtoleft") || u.match("skewtoleftshort")) && (d.skewX = -35), u.match("ltr") || u.match("skewtoright") ? d.x = i.width + 60 : u.match("ltl") || u.match("skewtoleft") ? d.x = 0 - (i.width + 60) : u.match("ltt") ? d.y = 0 - (i.height + 60) : u.match("ltb") ? d.y = i.height + 60 : u.match("str") || u.match("skewtorightshort") ? (d.x = 50, d.opacity = 0) : u.match("stl") || u.match("skewtoleftshort") ? (d.x = -50, d.opacity = 0) : u.match("stt") ? (d.y = -50, d.opacity = 0) : u.match("stb") ? (d.y = 50, d.opacity = 0) : u.match("randomrotateout") ? (d.x = Math.random() * i.width, d.y = Math.random() * i.height, d.scale = 2 * Math.random() + .3, d.rotation = 360 * Math.random() - 180, d.opacity = 0) : u.match("fadeout") && (d.opacity = 0), u.match("skewtorightshort") ? d.x = 270 : u.match("skewtoleftshort") && (d.x = -270), d.data = new Object, d.data.oldx = d.x, d.data.oldy = d.y, d.x = d.x * r, d.y = d.y * r, d.overwrite = "auto";
                var h = t, h = t;
                "chars" == t.data("splitout") ? h = t.data("mySplitText").chars : "words" == t.data("splitout") ? h = t.data("mySplitText").words : "lines" == t.data("splitout") && (h = t.data("mySplitText").lines);
                var p = t.data("endelementdelay") == e ? 0 : t.data("endelementdelay");
                s.add(l.staggerTo(h, c, d, p), n)
            } else if (t.hasClass("customout")) {
                d = I(d, t.data("customout"));
                var h = t;
                "chars" == t.data("splitout") ? h = t.data("mySplitText").chars : "words" == t.data("splitout") ? h = t.data("mySplitText").words : "lines" == t.data("splitout") && (h = t.data("mySplitText").lines);
                var p = t.data("endelementdelay") == e ? 0 : t.data("endelementdelay");
                d.onStart = function() {
                    punchgs.TweenLite.set(t, {transformPerspective: d.transformPerspective,transformOrigin: d.transformOrigin,overwrite: "auto"})
                }, d.data = new Object, d.data.oldx = d.x, d.data.oldy = d.y, d.x = d.x * r, d.y = d.y * r, s.add(l.staggerTo(h, c, d, p), n)
            } else
                a.delay = 0, s.add(punchgs.TweenLite.to(t, c, a), n);
            s.addLabel(o, n), t.data("timeline", s)
        }, B = function(e, i) {
            e.children().each(function() {
                try {
                    t(this).die("click")
                } catch (e) {
                }
                try {
                    t(this).die("mouseenter")
                } catch (e) {
                }
                try {
                    t(this).die("mouseleave")
                } catch (e) {
                }
                try {
                    t(this).unbind("hover")
                } catch (e) {
                }
            });
            try {
                e.die("click", "mouseenter", "mouseleave")
            } catch (n) {
            }
            clearInterval(i.cdint), e = null
        }, X = function(i, n) {
            if (n.cd = 0, n.loop = 0, n.looptogo = n.stopAfterLoops != e && n.stopAfterLoops > -1 ? n.stopAfterLoops : 9999999, n.lastslidetoshow = n.stopAtSlide != e && n.stopAtSlide > -1 ? n.stopAtSlide : 999, n.stopLoop = "off", 0 == n.looptogo && (n.stopLoop = "on"), n.slideamount > 1 && (0 != n.stopAfterLoops || 1 != n.stopAtSlide)) {
                var a = i.find(".tp-bannertimer");
                i.on("stoptimer", function() {
                    var e = t(this).find(".tp-bannertimer");
                    e.data("tween").pause(), "on" == n.hideTimerBar && e.css({visibility: "hidden"})
                }), i.on("starttimer", function() {
                    1 != n.conthover && 1 != n.videoplaying && n.width > n.hideSliderAtLimit && 1 != n.bannertimeronpause && 1 != n.overnav && ("on" == n.stopLoop && n.next == n.lastslidetoshow - 1 || 1 == n.noloopanymore ? n.noloopanymore = 1 : (a.css({visibility: "visible"}), a.data("tween").resume())), "on" == n.hideTimerBar && a.css({visibility: "hidden"})
                }), i.on("restarttimer", function() {
                    var e = t(this).find(".tp-bannertimer");
                    "on" == n.stopLoop && n.next == n.lastslidetoshow - 1 || 1 == n.noloopanymore ? n.noloopanymore = 1 : (e.css({visibility: "visible"}), e.data("tween").kill(), e.data("tween", punchgs.TweenLite.fromTo(e, n.delay / 1e3, {width: "0%"}, {force3D: "auto",width: "100%",ease: punchgs.Linear.easeNone,onComplete: o,delay: 1}))), "on" == n.hideTimerBar && e.css({visibility: "hidden"})
                }), i.on("nulltimer", function() {
                    a.data("tween").pause(0), "on" == n.hideTimerBar && a.css({visibility: "hidden"})
                });
                var o = function() {
                    0 == t("body").find(i).length && (B(i, n), clearInterval(n.cdint)), i.trigger("revolution.slide.slideatend"), 1 == i.data("conthover-changed") && (n.conthover = i.data("conthover"), i.data("conthover-changed", 0)), n.act = n.next, n.next = n.next + 1, n.next > i.find(">ul >li").length - 1 && (n.next = 0, n.looptogo = n.looptogo - 1, n.looptogo <= 0 && (n.stopLoop = "on")), "on" == n.stopLoop && n.next == n.lastslidetoshow - 1 ? (i.find(".tp-bannertimer").css({visibility: "hidden"}), i.trigger("revolution.slide.onstop"), n.noloopanymore = 1) : a.data("tween").restart(), k(i, n)
                };
                a.data("tween", punchgs.TweenLite.fromTo(a, n.delay / 1e3, {width: "0%"}, {force3D: "auto",width: "100%",ease: punchgs.Linear.easeNone,onComplete: o,delay: 1})), a.data("opt", n), i.hover(function() {
                    if ("on" == n.onHoverStop && !Q()) {
                        i.trigger("stoptimer"), i.trigger("revolution.slide.onpause");
                        var a = i.find(">ul >li:eq(" + n.next + ") .slotholder");
                        a.find(".defaultimg").each(function() {
                            var i = t(this);
                            i.data("kenburn") != e && i.data("kenburn").pause()
                        })
                    }
                }, function() {
                    if (1 != i.data("conthover")) {
                        i.trigger("revolution.slide.onresume"), i.trigger("starttimer");
                        var a = i.find(">ul >li:eq(" + n.next + ") .slotholder");
                        a.find(".defaultimg").each(function() {
                            var i = t(this);
                            i.data("kenburn") != e && i.data("kenburn").play()
                        })
                    }
                })
            }
        }, Q = function() {
            var t = ["android", "webos", "iphone", "ipad", "blackberry", "Android", "webos", , "iPod", "iPhone", "iPad", "Blackberry", "BlackBerry"], e = !1;
            for (var i in t)
                navigator.userAgent.split(t[i]).length > 1 && (e = !0);
            return e
        }, U = function(t, e, i) {
            var n = e.data("owidth"), a = e.data("oheight");
            if (n / a > i.width / i.height) {
                var o = i.container.width() / n, r = a * o, s = r / i.container.height() * t;
                return t *= 100 / s, s = 100, t = t, t + "% " + s + "% 1"
            }
            var o = i.container.width() / n, r = a * o, s = r / i.container.height() * t;
            return t + "% " + s + "%"
        }, Y = function(i, n, a, o) {
            try {
                i.find(">ul:first-child >li:eq(" + n.act + ")")
            } catch (r) {
                i.find(">ul:first-child >li:eq(1)")
            }
            n.lastslide = n.act;
            var l = i.find(">ul:first-child >li:eq(" + n.next + ")"), d = l.find(".slotholder"), c = d.data("bgposition"), u = d.data("bgpositionend"), h = d.data("zoomstart") / 100, p = d.data("zoomend") / 100, f = d.data("rotationstart"), m = d.data("rotationend"), g = d.data("bgfit"), v = d.data("bgfitend"), y = d.data("easeme"), w = d.data("duration") / 1e3, b = 100;
            g == e && (g = 100), v == e && (v = 100);
            var x = g, _ = v;
            g = U(g, d, n), v = U(v, d, n), b = U(100, d, n), h == e && (h = 1), p == e && (p = 1), f == e && (f = 0), m == e && (m = 0), 1 > h && (h = 1), 1 > p && (p = 1);
            var T = new Object;
            T.w = parseInt(b.split(" ")[0], 0), T.h = parseInt(b.split(" ")[1], 0);
            var k = !1;
            "1" == b.split(" ")[2] && (k = !0), d.find(".defaultimg").each(function() {
                var e = t(this);
                0 == d.find(".kenburnimg").length ? d.append('<div class="kenburnimg" style="position:absolute;z-index:1;width:100%;height:100%;top:0px;left:0px;"><img src="' + e.attr("src") + '" style="-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;position:absolute;width:' + T.w + "%;height:" + T.h + '%;"></div>') : d.find(".kenburnimg img").css({width: T.w + "%",height: T.h + "%"});
                var i = d.find(".kenburnimg img"), a = V(n, c, g, i, k), r = V(n, u, v, i, k);
                if (k && (a.w = x / 100, r.w = _ / 100), o) {
                    punchgs.TweenLite.set(i, {autoAlpha: 0,transformPerspective: 1200,transformOrigin: "0% 0%",top: 0,left: 0,scale: a.w,x: a.x,y: a.y});
                    var l = a.w, h = l * i.width() - n.width, p = l * i.height() - n.height, f = Math.abs(100 * (a.x / h)), b = Math.abs(100 * (a.y / p));
                    0 == p && (b = 0), 0 == h && (f = 0), e.data("bgposition", f + "% " + b + "%"), s(8) || e.data("currotate", G(i)), s(8) || e.data("curscale", T.w * l + "%  " + (T.h * l + "%")), d.find(".kenburnimg").remove()
                } else
                    e.data("kenburn", punchgs.TweenLite.fromTo(i, w, {autoAlpha: 1,force3D: punchgs.force3d,transformOrigin: "0% 0%",top: 0,left: 0,scale: a.w,x: a.x,y: a.y}, {autoAlpha: 1,rotationZ: m,ease: y,x: r.x,y: r.y,scale: r.w,onUpdate: function() {
                            var t = i[0]._gsTransform.scaleX, a = t * i.width() - n.width, o = t * i.height() - n.height, r = Math.abs(100 * (i[0]._gsTransform.x / a)), l = Math.abs(100 * (i[0]._gsTransform.y / o));
                            0 == o && (l = 0), 0 == a && (r = 0), e.data("bgposition", r + "% " + l + "%"), s(8) || e.data("currotate", G(i)), s(8) || e.data("curscale", T.w * t + "%  " + (T.h * t + "%"))
                        }}))
            })
        }, V = function(t, e, i, n, a) {
            var o = new Object;
            switch (o.w = a ? parseInt(i.split(" ")[1], 0) / 100 : parseInt(i.split(" ")[0], 0) / 100, e) {
                case "left top":
                case "top left":
                    o.x = 0, o.y = 0;
                    break;
                case "center top":
                case "top center":
                    o.x = ((0 - n.width()) * o.w + parseInt(t.width, 0)) / 2, o.y = 0;
                    break;
                case "top right":
                case "right top":
                    o.x = (0 - n.width()) * o.w + parseInt(t.width, 0), o.y = 0;
                    break;
                case "center left":
                case "left center":
                    o.x = 0, o.y = ((0 - n.height()) * o.w + parseInt(t.height, 0)) / 2;
                    break;
                case "center center":
                    o.x = ((0 - n.width()) * o.w + parseInt(t.width, 0)) / 2, o.y = ((0 - n.height()) * o.w + parseInt(t.height, 0)) / 2;
                    break;
                case "center right":
                case "right center":
                    o.x = (0 - n.width()) * o.w + parseInt(t.width, 0), o.y = ((0 - n.height()) * o.w + parseInt(t.height, 0)) / 2;
                    break;
                case "bottom left":
                case "left bottom":
                    o.x = 0, o.y = (0 - n.height()) * o.w + parseInt(t.height, 0);
                    break;
                case "bottom center":
                case "center bottom":
                    o.x = ((0 - n.width()) * o.w + parseInt(t.width, 0)) / 2, o.y = (0 - n.height()) * o.w + parseInt(t.height, 0);
                    break;
                case "bottom right":
                case "right bottom":
                    o.x = (0 - n.width()) * o.w + parseInt(t.width, 0), o.y = (0 - n.height()) * o.w + parseInt(t.height, 0)
            }
            return o
        }, G = function(t) {
            var e = t.css("-webkit-transform") || t.css("-moz-transform") || t.css("-ms-transform") || t.css("-o-transform") || t.css("transform");
            if ("none" !== e)
                var i = e.split("(")[1].split(")")[0].split(","), n = i[0], a = i[1], o = Math.round(Math.atan2(a, n) * (180 / Math.PI));
            else
                var o = 0;
            return 0 > o ? o += 360 : o
        }, Z = function(i, n) {
            try {
                var a = i.find(">ul:first-child >li:eq(" + n.act + ")")
            } catch (o) {
                var a = i.find(">ul:first-child >li:eq(1)")
            }
            n.lastslide = n.act;
            var r = i.find(">ul:first-child >li:eq(" + n.next + ")");
            a.find(".slotholder"), r.find(".slotholder"), i.find(".defaultimg").each(function() {
                var i = t(this);
                punchgs.TweenLite.killTweensOf(i, !1), punchgs.TweenLite.set(i, {scale: 1,rotationZ: 0}), punchgs.TweenLite.killTweensOf(i.data("kenburn img"), !1), i.data("kenburn") != e && i.data("kenburn").pause(), i.data("currotate") != e && i.data("bgposition") != e && i.data("curscale") != e && punchgs.TweenLite.set(i, {rotation: i.data("currotate"),backgroundPosition: i.data("bgposition"),backgroundSize: i.data("curscale")}), i != e && i.data("kenburn img") != e && i.data("kenburn img").length > 0 && punchgs.TweenLite.set(i.data("kenburn img"), {autoAlpha: 0})
            })
        }, J = function(e, i) {
            return Q() && "on" == i.parallaxDisableOnMobile ? !1 : (e.find(">ul:first-child >li").each(function() {
                for (var e = t(this), n = 1; 10 >= n; n++)
                    e.find(".rs-parallaxlevel-" + n).each(function() {
                        var e = t(this);
                        e.wrap('<div style="position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:' + e.css("zIndex") + '" class="tp-parallax-container" data-parallaxlevel="' + i.parallaxLevels[n - 1] + '"></div>')
                    })
            }), ("mouse" == i.parallax || "scroll+mouse" == i.parallax || "mouse+scroll" == i.parallax) && (e.mouseenter(function(t) {
                var i = e.find(".current-sr-slide-visible"), n = e.offset().top, a = e.offset().left, o = t.pageX - a, r = t.pageY - n;
                i.data("enterx", o), i.data("entery", r)
            }), e.on("mousemove.hoverdir, mouseleave.hoverdir", function(n) {
                var a = e.find(".current-sr-slide-visible");
                switch (n.type) {
                    case "mousemove":
                        var o = e.offset().top, r = e.offset().left, s = a.data("enterx"), l = a.data("entery"), d = s - (n.pageX - r), c = l - (n.pageY - o);
                        a.find(".tp-parallax-container").each(function() {
                            var e = t(this), n = parseInt(e.data("parallaxlevel"), 0) / 100, a = d * n, o = c * n;
                            "scroll+mouse" == i.parallax || "mouse+scroll" == i.parallax ? punchgs.TweenLite.to(e, .4, {force3D: "auto",x: a,ease: punchgs.Power3.easeOut,overwrite: "all"}) : punchgs.TweenLite.to(e, .4, {force3D: "auto",x: a,y: o,ease: punchgs.Power3.easeOut,overwrite: "all"})
                        });
                        break;
                    case "mouseleave":
                        a.find(".tp-parallax-container").each(function() {
                            var e = t(this);
                            "scroll+mouse" == i.parallax || "mouse+scroll" == i.parallax ? punchgs.TweenLite.to(e, 1.5, {force3D: "auto",x: 0,ease: punchgs.Power3.easeOut}) : punchgs.TweenLite.to(e, 1.5, {force3D: "auto",x: 0,y: 0,ease: punchgs.Power3.easeOut})
                        })
                }
            }), Q() && (window.ondeviceorientation = function(i) {
                var n = Math.round(i.beta || 0), a = Math.round(i.gamma || 0), o = e.find(".current-sr-slide-visible");
                if (t(window).width() > t(window).height()) {
                    var r = a;
                    a = n, n = r
                }
                var s = 360 / e.width() * a, l = 180 / e.height() * n;
                o.find(".tp-parallax-container").each(function() {
                    var e = t(this), i = parseInt(e.data("parallaxlevel"), 0) / 100, n = s * i, a = l * i;
                    punchgs.TweenLite.to(e, .2, {force3D: "auto",x: n,y: a,ease: punchgs.Power3.easeOut})
                })
            })), void (("scroll" == i.parallax || "scroll+mouse" == i.parallax || "mouse+scroll" == i.parallax) && t(window).on("scroll", function() {
                K(e, i)
            })))
        }, K = function(e, i) {
            if (Q() && "on" == i.parallaxDisableOnMobile)
                return !1;
            var n = e.offset().top, a = t(window).scrollTop(), o = n + e.height() / 2, r = n + e.height() / 2 - a, s = t(window).height() / 2, l = s - r;
            if (s > o && (l -= s - o), e.find(".current-sr-slide-visible"), e.find(".tp-parallax-container").each(function() {
                var e = t(this), i = parseInt(e.data("parallaxlevel"), 0) / 100, n = l * i;
                e.data("parallaxoffset", n), punchgs.TweenLite.to(e, .2, {force3D: "auto",y: n,ease: punchgs.Power3.easeOut})
            }), "on" != i.parallaxBgFreeze) {
                var d = i.parallaxLevels[0] / 100, c = l * d;
                punchgs.TweenLite.to(e, .2, {force3D: "auto",y: c,ease: punchgs.Power3.easeOut})
            }
        }, te = function(i, n) {
            var a = i.parent();
            ("thumb" == n.navigationType || "both" == n.navsecond) && a.append('<div class="tp-bullets tp-thumbs ' + n.navigationStyle + '"><div class="tp-mask"><div class="tp-thumbcontainer"></div></div></div>');
            var o = a.find(".tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer"), r = o.parent();
            r.width(n.thumbWidth * n.thumbAmount), r.height(n.thumbHeight), r.parent().width(n.thumbWidth * n.thumbAmount), r.parent().height(n.thumbHeight), i.find(">ul:first >li").each(function(t) {
                var a = i.find(">ul:first >li:eq(" + t + ")"), r = a.find(".defaultimg").css("backgroundColor");
                if (a.data("thumb") != e)
                    var s = a.data("thumb");
                else
                    var s = a.find("img:first").attr("src");
                o.append('<div class="bullet thumb" style="background-color:' + r + ";position:relative;width:" + n.thumbWidth + "px;height:" + n.thumbHeight + "px;background-image:url(" + s + ') !important;background-size:cover;background-position:center center;"></div>'), o.find(".bullet:first")
            });
            var s = 10;
            o.find(".bullet").each(function(e) {
                var a = t(this);
                e == n.slideamount - 1 && a.addClass("last"), 0 == e && a.addClass("first"), a.width(n.thumbWidth), a.height(n.thumbHeight), s < a.outerWidth(!0) && (s = a.outerWidth(!0)), a.click(function() {
                    0 == n.transition && a.index() != n.act && (n.next = a.index(), l(n, i))
                })
            });
            var d = s * i.find(">ul:first >li").length, c = o.parent().width();
            n.thumbWidth = s, d > c && (t(document).mousemove(function(e) {
                t("body").data("mousex", e.pageX)
            }), o.parent().mouseenter(function() {
                var e = t(this), n = e.offset(), a = t("body").data("mousex") - n.left, o = e.width(), r = e.find(".bullet:first").outerWidth(!0), s = r * i.find(">ul:first >li").length, l = s - o + 15, d = l / o;
                e.addClass("over"), a -= 30;
                var c = 0 - a * d;
                c > 0 && (c = 0), 0 - s + o > c && (c = 0 - s + o), ie(e, c, 200)
            }), o.parent().mousemove(function() {
                var e = t(this), n = e.offset(), a = t("body").data("mousex") - n.left, o = e.width(), r = e.find(".bullet:first").outerWidth(!0), s = r * i.find(">ul:first >li").length - 1, l = s - o + 15, d = l / o;
                a -= 3, 6 > a && (a = 0), a + 3 > o - 6 && (a = o);
                var c = 0 - a * d;
                c > 0 && (c = 0), 0 - s + o > c && (c = 0 - s + o), ie(e, c, 0)
            }), o.parent().mouseleave(function() {
                var e = t(this);
                e.removeClass("over"), ee(i)
            }))
        }, ee = function(t) {
            var e = t.parent().find(".tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer"), i = e.parent(), n = (i.offset(), i.find(".bullet:first").outerWidth(!0)), a = i.find(".bullet.selected").index() * n, o = i.width(), n = i.find(".bullet:first").outerWidth(!0), r = n * t.find(">ul:first >li").length, s = 0 - a;
            s > 0 && (s = 0), 0 - r + o > s && (s = 0 - r + o), i.hasClass("over") || ie(i, s, 200)
        }, ie = function(t, e) {
            punchgs.TweenLite.to(t.find(".tp-thumbcontainer"), .2, {force3D: "auto",left: e,ease: punchgs.Power3.easeOut,overwrite: "auto"})
        }
    }(jQuery)
} catch (e) {
    console.error("Error in file:http://www.drmichaels.com/media/com_uniterevolution2/assets/rs-plugin/js/jquery.themepunch.revolution.min.js; Error:" + e.message)
}
try {
    !function(t) {
        "use strict";
        t(function() {
            t.support.transition = function() {
                var t = function() {
                    var t, e = document.createElement("bootstrap"), i = {WebkitTransition: "webkitTransitionEnd",MozTransition: "transitionend",OTransition: "oTransitionEnd otransitionend",transition: "transitionend"};
                    for (t in i)
                        if (void 0 !== e.style[t])
                            return i[t]
                }();
                return t && {end: t}
            }()
        })
    }(window.jQuery), !function(t) {
        "use strict";
        var e = '[data-dismiss="alert"]', i = function(i) {
            t(i).on("click", e, this.close)
        };
        i.prototype.close = function(e) {
            function i() {
                n.trigger("closed").remove()
            }
            var n, a = t(this), o = a.attr("data-target");
            o || (o = a.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, "")), n = t(o), e && e.preventDefault(), n.length || (n = a.hasClass("alert") ? a : a.parent()), n.trigger(e = t.Event("close")), e.isDefaultPrevented() || (n.removeClass("in"), t.support.transition && n.hasClass("fade") ? n.on(t.support.transition.end, i) : i())
        };
        var n = t.fn.alert;
        t.fn.alert = function(e) {
            return this.each(function() {
                var n = t(this), a = n.data("alert");
                a || n.data("alert", a = new i(this)), "string" == typeof e && a[e].call(n)
            })
        }, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function() {
            return t.fn.alert = n, this
        }, t(document).on("click.alert.data-api", e, i.prototype.close)
    }(window.jQuery), !function(t) {
        "use strict";
        var e = function(e, i) {
            this.$element = t(e), this.options = t.extend({}, t.fn.button.defaults, i)
        };
        e.prototype.setState = function(t) {
            var e = "disabled", i = this.$element, n = i.data(), a = i.is("input") ? "val" : "html";
            t += "Text", n.resetText || i.data("resetText", i[a]()), i[a](n[t] || this.options[t]), setTimeout(function() {
                "loadingText" == t ? i.addClass(e).attr(e, e) : i.removeClass(e).removeAttr(e)
            }, 0)
        }, e.prototype.toggle = function() {
            var t = this.$element.closest('[data-toggle="buttons-radio"]');
            t && t.find(".active").removeClass("active"), this.$element.toggleClass("active")
        };
        var i = t.fn.button;
        t.fn.button = function(i) {
            return this.each(function() {
                var n = t(this), a = n.data("button"), o = "object" == typeof i && i;
                a || n.data("button", a = new e(this, o)), "toggle" == i ? a.toggle() : i && a.setState(i)
            })
        }, t.fn.button.defaults = {loadingText: "loading..."}, t.fn.button.Constructor = e, t.fn.button.noConflict = function() {
            return t.fn.button = i, this
        }, t(document).on("click.button.data-api", "[data-toggle^=button]", function(e) {
            var i = t(e.target);
            i.hasClass("btn") || (i = i.closest(".btn")), i.button("toggle")
        })
    }(window.jQuery), !function(t) {
        "use strict";
        var e = function(e, i) {
            this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, "hover" == this.options.pause && this.$element.on("mouseenter", t.proxy(this.pause, this)).on("mouseleave", t.proxy(this.cycle, this))
        };
        e.prototype = {cycle: function(e) {
                return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
            },getActiveIndex: function() {
                return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
            },to: function(e) {
                var i = this.getActiveIndex(), n = this;
                if (!(e > this.$items.length - 1 || 0 > e))
                    return this.sliding ? this.$element.one("slid", function() {
                        n.to(e)
                    }) : i == e ? this.pause().cycle() : this.slide(e > i ? "next" : "prev", t(this.$items[e]))
            },pause: function(e) {
                return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition.end && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), clearInterval(this.interval), this.interval = null, this
            },next: function() {
                return this.sliding ? void 0 : this.slide("next")
            },prev: function() {
                return this.sliding ? void 0 : this.slide("prev")
            },slide: function(e, i) {
                var n, a = this.$element.find(".item.active"), o = i || a[e](), r = this.interval, s = "next" == e ? "left" : "right", l = "next" == e ? "first" : "last", d = this;
                if (this.sliding = !0, r && this.pause(), o = o.length ? o : this.$element.find(".item")[l](), n = t.Event("slide", {relatedTarget: o[0],direction: s}), !o.hasClass("active")) {
                    if (this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid", function() {
                        var e = t(d.$indicators.children()[d.getActiveIndex()]);
                        e && e.addClass("active")
                    })), t.support.transition && this.$element.hasClass("slide")) {
                        if (this.$element.trigger(n), n.isDefaultPrevented())
                            return;
                        o.addClass(e), o[0].offsetWidth, a.addClass(s), o.addClass(s), this.$element.one(t.support.transition.end, function() {
                            o.removeClass([e, s].join(" ")).addClass("active"), a.removeClass(["active", s].join(" ")), d.sliding = !1, setTimeout(function() {
                                d.$element.trigger("slid")
                            }, 0)
                        })
                    } else {
                        if (this.$element.trigger(n), n.isDefaultPrevented())
                            return;
                        a.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger("slid")
                    }
                    return r && this.cycle(), this
                }
            }};
        var i = t.fn.carousel;
        t.fn.carousel = function(i) {
            return this.each(function() {
                var n = t(this), a = n.data("carousel"), o = t.extend({}, t.fn.carousel.defaults, "object" == typeof i && i), r = "string" == typeof i ? i : o.slide;
                a || n.data("carousel", a = new e(this, o)), "number" == typeof i ? a.to(i) : r ? a[r]() : o.interval && a.pause().cycle()
            })
        }, t.fn.carousel.defaults = {interval: 5e3,pause: "hover"}, t.fn.carousel.Constructor = e, t.fn.carousel.noConflict = function() {
            return t.fn.carousel = i, this
        }, t(document).on("click.carousel.data-api", "[data-slide], [data-slide-to]", function(e) {
            var i, n, a = t(this), o = t(a.attr("data-target") || (i = a.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "")), r = t.extend({}, o.data(), a.data());
            o.carousel(r), (n = a.attr("data-slide-to")) && o.data("carousel").pause().to(n).cycle(), e.preventDefault()
        })
    }(window.jQuery), !function(t) {
        "use strict";
        var e = function(e, i) {
            this.$element = t(e), this.options = t.extend({}, t.fn.collapse.defaults, i), this.options.parent && (this.$parent = t(this.options.parent)), this.options.toggle && this.toggle()
        };
        e.prototype = {constructor: e,dimension: function() {
                var t = this.$element.hasClass("width");
                return t ? "width" : "height"
            },show: function() {
                var e, i, n, a;
                if (!this.transitioning && !this.$element.hasClass("in")) {
                    if (e = this.dimension(), i = t.camelCase(["scroll", e].join("-")), n = this.$parent && this.$parent.find("> .accordion-group > .in"), n && n.length) {
                        if (a = n.data("collapse"), a && a.transitioning)
                            return;
                        n.collapse("hide"), a || n.data("collapse", null)
                    }
                    this.$element[e](0), this.transition("addClass", t.Event("show"), "shown"), t.support.transition && this.$element[e](this.$element[0][i])
                }
            },hide: function() {
                var e;
                !this.transitioning && this.$element.hasClass("in") && (e = this.dimension(), this.reset(this.$element[e]()), this.transition("removeClass", t.Event("hideme"), "hidden"), this.$element[e](0))
            },reset: function(t) {
                var e = this.dimension();
                return this.$element.removeClass("collapse")[e](t || "auto")[0].offsetWidth, this.$element[null !== t ? "addClass" : "removeClass"]("collapse"), this
            },transition: function(e, i, n) {
                var a = this, o = function() {
                    "show" == i.type && a.reset(), a.transitioning = 0, a.$element.trigger(n)
                };
                this.$element.trigger(i), i.isDefaultPrevented() || (this.transitioning = 1, this.$element[e]("in"), t.support.transition && this.$element.hasClass("collapse") ? this.$element.one(t.support.transition.end, o) : o())
            },toggle: function() {
                this[this.$element.hasClass("in") ? "hide" : "show"]()
            }};
        var i = t.fn.collapse;
        t.fn.collapse = function(i) {
            return this.each(function() {
                var n = t(this), a = n.data("collapse"), o = t.extend({}, t.fn.collapse.defaults, n.data(), "object" == typeof i && i);
                a || n.data("collapse", a = new e(this, o)), "string" == typeof i && a[i]()
            })
        }, t.fn.collapse.defaults = {toggle: !0}, t.fn.collapse.Constructor = e, t.fn.collapse.noConflict = function() {
            return t.fn.collapse = i, this
        }, t(document).on("click.collapse.data-api", "[data-toggle=collapse]", function(e) {
            var i, n = t(this), a = n.attr("data-target") || e.preventDefault() || (i = n.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""), o = t(a).data("collapse") ? "toggle" : n.data();
            n[t(a).hasClass("in") ? "addClass" : "removeClass"]("collapsed"), t(a).collapse(o)
        })
    }(window.jQuery), !function(t) {
        "use strict";
        function e() {
            t(n).parent().parent().removeClass("nav-hover"), t(".dropdown-backdrop").remove(), t(n).each(function() {
                i(t(this)).removeClass("open")
            })
        }
        function i(e) {
            var i, n = e.attr("data-target");
            return n || (n = e.attr("href"), n = n && /#/.test(n) && n.replace(/.*(?=#[^\s]*$)/, "")), i = n && t(n), i && i.length || (i = e.parent()), i
        }
        var n = "[data-toggle=dropdown]", a = function(e) {
            var i = t(e).on("click.dropdown.data-api", this.toggle).on("mouseover.dropdown.data-api", this.toggle);
            t("html").on("click.dropdown.data-api", function() {
                i.parent().parent().removeClass("nav-hover"), i.parent().removeClass("open")
            })
        };
        a.prototype = {constructor: a,toggle: function(n) {
                var a, o, r, s, l = t(this);
                if (!l.is(".disabled, :disabled") && (a = i(l), o = a.hasClass("open"), s = a.parent().hasClass("nav-hover"), s || "mouseover" != n.type))
                    return r = l.attr("href"), "click" == n.type && r && "#" !== r ? void (window.location = r) : (e(), (!o && "mouseover" != n.type || s && "mouseover" == n.type) && ("ontouchstart" in document.documentElement && (t('<div class="dropdown-backdrop"/>').insertBefore(t(this)).on("click", e), l.on("hover", function() {
                        t(".dropdown-backdrop").remove()
                    })), a.parent().toggleClass("nav-hover"), a.toggleClass("open")), l.focus(), !1)
            },keydown: function(e) {
                var a, o, r, s, l;
                if (/(38|40|27)/.test(e.keyCode) && (a = t(this), e.preventDefault(), e.stopPropagation(), !a.is(".disabled, :disabled"))) {
                    if (r = i(a), s = r.hasClass("open"), !s || s && 27 == e.keyCode)
                        return 27 == e.which && r.find(n).focus(), a.click();
                    o = t("[role=menu] li:not(.divider):visible a", r), o.length && (l = o.index(o.filter(":focus")), 38 == e.keyCode && l > 0 && l--, 40 == e.keyCode && l < o.length - 1 && l++, ~l || (l = 0), o.eq(l).focus())
                }
            }};
        var o = t.fn.dropdown;
        t.fn.dropdown = function(e) {
            return this.each(function() {
                var i = t(this), n = i.data("dropdown");
                n || i.data("dropdown", n = new a(this)), "string" == typeof e && n[e].call(i)
            })
        }, t.fn.dropdown.Constructor = a, t.fn.dropdown.noConflict = function() {
            return t.fn.dropdown = o, this
        }, t(document).on("click.dropdown.data-api", e).on("click.dropdown.data-api", ".dropdown form", function(t) {
            t.stopPropagation()
        }).on("click.dropdown.data-api", n, a.prototype.toggle).on("keydown.dropdown.data-api", n + ", [role=menu]", a.prototype.keydown).on("mouseover.dropdown.data-api", n, a.prototype.toggle)
    }(window.jQuery), !function(t) {
        "use strict";
        var e = function(e, i) {
            this.options = i, this.$element = t(e).delegate('[data-dismiss="modal"]', "click.dismiss.modal", t.proxy(this.hide, this)), this.options.remote && this.$element.find(".modal-body").load(this.options.remote)
        };
        e.prototype = {constructor: e,toggle: function() {
                return this[this.isShown ? "hide" : "show"]()
            },show: function() {
                var e = this, i = t.Event("show");
                this.$element.trigger(i), this.isShown || i.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.backdrop(function() {
                    var i = t.support.transition && e.$element.hasClass("fade");
                    e.$element.parent().length || e.$element.appendTo(document.body), e.$element.show(), i && e.$element[0].offsetWidth, e.$element.addClass("in").attr("aria-hidden", !1), e.enforceFocus(), i ? e.$element.one(t.support.transition.end, function() {
                        e.$element.focus().trigger("shown")
                    }) : e.$element.focus().trigger("shown")
                }))
            },hide: function(e) {
                e && e.preventDefault();
                e = t.Event("hide"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), t(document).off("focusin.modal"), this.$element.removeClass("in").attr("aria-hidden", !0), t.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal())
            },enforceFocus: function() {
                var e = this;
                t(document).on("focusin.modal", function(t) {
                    e.$element[0] !== t.target && !e.$element.has(t.target).length && e.$element.focus()
                })
            },escape: function() {
                var t = this;
                this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.modal", function(e) {
                    27 == e.which && t.hide()
                }) : this.isShown || this.$element.off("keyup.dismiss.modal")
            },hideWithTransition: function() {
                var e = this, i = setTimeout(function() {
                    e.$element.off(t.support.transition.end), e.hideModal()
                }, 500);
                this.$element.one(t.support.transition.end, function() {
                    clearTimeout(i), e.hideModal()
                })
            },hideModal: function() {
                var t = this;
                this.$element.hide(), this.backdrop(function() {
                    t.removeBackdrop(), t.$element.trigger("hidden")
                })
            },removeBackdrop: function() {
                this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
            },backdrop: function(e) {
                var i = this.$element.hasClass("fade") ? "fade" : "";
                if (this.isShown && this.options.backdrop) {
                    var n = t.support.transition && i;
                    if (this.$backdrop = t('<div class="modal-backdrop ' + i + '" />').appendTo(document.body), this.$backdrop.click("static" == this.options.backdrop ? t.proxy(this.$element[0].focus, this.$element[0]) : t.proxy(this.hide, this)), n && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e)
                        return;
                    n ? this.$backdrop.one(t.support.transition.end, e) : e()
                } else
                    !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(t.support.transition.end, e) : e()) : e && e()
            }};
        var i = t.fn.modal;
        t.fn.modal = function(i) {
            return this.each(function() {
                var n = t(this), a = n.data("modal"), o = t.extend({}, t.fn.modal.defaults, n.data(), "object" == typeof i && i);
                a || n.data("modal", a = new e(this, o)), "string" == typeof i ? a[i]() : o.show && a.show()
            })
        }, t.fn.modal.defaults = {backdrop: !0,keyboard: !0,show: !0}, t.fn.modal.Constructor = e, t.fn.modal.noConflict = function() {
            return t.fn.modal = i, this
        }, t(document).on("click.modal.data-api", '[data-toggle="modal"]', function(e) {
            var i = t(this), n = i.attr("href"), a = t(i.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, "")), o = a.data("modal") ? "toggle" : t.extend({remote: !/#/.test(n) && n}, a.data(), i.data());
            e.preventDefault(), a.modal(o).one("hide", function() {
                i.focus()
            })
        })
    }(window.jQuery), !function(t) {
        "use strict";
        var e = function(t, e) {
            this.init("tooltip", t, e)
        };
        e.prototype = {constructor: e,init: function(e, i, n) {
                var a, o, r, s, l;
                for (this.type = e, this.$element = t(i), this.options = this.getOptions(n), this.enabled = !0, r = this.options.trigger.split(" "), l = r.length; l--; )
                    s = r[l], "click" == s ? this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this)) : "manual" != s && (a = "hover" == s ? "mouseenter" : "focus", o = "hover" == s ? "mouseleave" : "blur", this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(o + "." + this.type, this.options.selector, t.proxy(this.leave, this)));
                this.options.selector ? this._options = t.extend({}, this.options, {trigger: "manual",selector: ""}) : this.fixTitle()
            },getOptions: function(e) {
                return e = t.extend({}, t.fn[this.type].defaults, this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {show: e.delay,hide: e.delay}), e
            },enter: function(e) {
                var i, n = t.fn[this.type].defaults, a = {};
                return this._options && t.each(this._options, function(t, e) {
                    n[t] != e && (a[t] = e)
                }, this), i = t(e.currentTarget)[this.type](a).data(this.type), i.options.delay && i.options.delay.show ? (clearTimeout(this.timeout), i.hoverState = "in", this.timeout = setTimeout(function() {
                    "in" == i.hoverState && i.show()
                }, i.options.delay.show), void 0) : i.show()
            },leave: function(e) {
                var i = t(e.currentTarget)[this.type](this._options).data(this.type);
                return this.timeout && clearTimeout(this.timeout), i.options.delay && i.options.delay.hide ? (i.hoverState = "out", void (this.timeout = setTimeout(function() {
                    "out" == i.hoverState && i.hide()
                }, i.options.delay.hide))) : i.hide()
            },show: function() {
                var e, i, n, a, o, r, s = t.Event("show");
                if (this.hasContent() && this.enabled) {
                    if (this.$element.trigger(s), s.isDefaultPrevented())
                        return;
                    switch (e = this.tip(), this.setContent(), this.options.animation && e.addClass("fade"), o = "function" == typeof this.options.placement ? this.options.placement.call(this, e[0], this.$element[0]) : this.options.placement, e.detach().css({top: 0,left: 0,display: "block"}), this.options.container ? e.appendTo(this.options.container) : e.insertAfter(this.$element), i = this.getPosition(), n = e[0].offsetWidth, a = e[0].offsetHeight, o) {
                        case "bottom":
                            r = {top: i.top + i.height,left: i.left + i.width / 2 - n / 2};
                            break;
                        case "top":
                            r = {top: i.top - a,left: i.left + i.width / 2 - n / 2};
                            break;
                        case "left":
                            r = {top: i.top + i.height / 2 - a / 2,left: i.left - n};
                            break;
                        case "right":
                            r = {top: i.top + i.height / 2 - a / 2,left: i.left + i.width}
                    }
                    this.applyPlacement(r, o), this.$element.trigger("shown")
                }
            },applyPlacement: function(t, e) {
                var i, n, a, o, r = this.tip(), s = r[0].offsetWidth, l = r[0].offsetHeight;
                r.offset(t).addClass(e).addClass("in"), i = r[0].offsetWidth, n = r[0].offsetHeight, "top" == e && n != l && (t.top = t.top + l - n, o = !0), "bottom" == e || "top" == e ? (a = 0, t.left < 0 && (a = -2 * t.left, t.left = 0, r.offset(t), i = r[0].offsetWidth, n = r[0].offsetHeight), this.replaceArrow(a - s + i, i, "left")) : this.replaceArrow(n - l, n, "top"), o && r.offset(t)
            },replaceArrow: function(t, e, i) {
                this.arrow().css(i, t ? 50 * (1 - t / e) + "%" : "")
            },setContent: function() {
                var t = this.tip(), e = this.getTitle();
                t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
            },hide: function() {
                function e() {
                    var e = setTimeout(function() {
                        i.off(t.support.transition.end).detach()
                    }, 500);
                    i.one(t.support.transition.end, function() {
                        clearTimeout(e), i.detach()
                    })
                }
                var i = this.tip(), n = t.Event("hideme");
                return this.$element.trigger(n), n.isDefaultPrevented() ? void 0 : (i.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? e() : i.detach(), this.$element.trigger("hidden"), this)
            },fixTitle: function() {
                var t = this.$element;
                (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
            },hasContent: function() {
                return this.getTitle()
            },getPosition: function() {
                var e = this.$element[0];
                return t.extend({}, "function" == typeof e.getBoundingClientRect ? e.getBoundingClientRect() : {width: e.offsetWidth,height: e.offsetHeight}, this.$element.offset())
            },getTitle: function() {
                var t, e = this.$element, i = this.options;
                return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
            },tip: function() {
                return this.$tip = this.$tip || t(this.options.template)
            },arrow: function() {
                return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
            },validate: function() {
                this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
            },enable: function() {
                this.enabled = !0
            },disable: function() {
                this.enabled = !1
            },toggleEnabled: function() {
                this.enabled = !this.enabled
            },toggle: function(e) {
                var i = e ? t(e.currentTarget)[this.type](this._options).data(this.type) : this;
                i.tip().hasClass("in") ? i.hide() : i.show()
            },destroy: function() {
                this.hide().$element.off("." + this.type).removeData(this.type)
            }};
        var i = t.fn.tooltip;
        t.fn.tooltip = function(i) {
            return this.each(function() {
                var n = t(this), a = n.data("tooltip"), o = "object" == typeof i && i;
                a || n.data("tooltip", a = new e(this, o)), "string" == typeof i && a[i]()
            })
        }, t.fn.tooltip.Constructor = e, t.fn.tooltip.defaults = {animation: !0,placement: "top",selector: !1,template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger: "hover focus",title: "",delay: 0,html: !0,container: !1}, t.fn.tooltip.noConflict = function() {
            return t.fn.tooltip = i, this
        }
    }(window.jQuery), !function(t) {
        "use strict";
        var e = function(t, e) {
            this.init("popover", t, e)
        };
        e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype, {constructor: e,setContent: function() {
                var t = this.tip(), e = this.getTitle(), i = this.getContent();
                t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content")[this.options.html ? "html" : "text"](i), t.removeClass("fade top bottom left right in")
            },hasContent: function() {
                return this.getTitle() || this.getContent()
            },getContent: function() {
                var t, e = this.$element, i = this.options;
                return t = ("function" == typeof i.content ? i.content.call(e[0]) : i.content) || e.attr("data-content")
            },tip: function() {
                return this.$tip || (this.$tip = t(this.options.template)), this.$tip
            },destroy: function() {
                this.hide().$element.off("." + this.type).removeData(this.type)
            }});
        var i = t.fn.popover;
        t.fn.popover = function(i) {
            return this.each(function() {
                var n = t(this), a = n.data("popover"), o = "object" == typeof i && i;
                a || n.data("popover", a = new e(this, o)), "string" == typeof i && a[i]()
            })
        }, t.fn.popover.Constructor = e, t.fn.popover.defaults = t.extend({}, t.fn.tooltip.defaults, {placement: "right",trigger: "click",content: "",template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}), t.fn.popover.noConflict = function() {
            return t.fn.popover = i, this
        }
    }(window.jQuery), !function(t) {
        "use strict";
        function e(e, i) {
            var n, a = t.proxy(this.process, this), o = t(t(e).is("body") ? window : e);
            this.options = t.extend({}, t.fn.scrollspy.defaults, i), this.$scrollElement = o.on("scroll.scroll-spy.data-api", a), this.selector = (this.options.target || (n = t(e).attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.$body = t("body"), this.refresh(), this.process()
        }
        e.prototype = {constructor: e,refresh: function() {
                var e, i = this;
                this.offsets = t([]), this.targets = t([]), e = this.$body.find(this.selector).map(function() {
                    var e = t(this), n = e.data("target") || e.attr("href"), a = /^#\w/.test(n) && t(n);
                    return a && a.length && [[a.position().top + (!t.isWindow(i.$scrollElement.get(0)) && i.$scrollElement.scrollTop()), n]] || null
                }).sort(function(t, e) {
                    return t[0] - e[0]
                }).each(function() {
                    i.offsets.push(this[0]), i.targets.push(this[1])
                })
            },process: function() {
                var t, e = this.$scrollElement.scrollTop() + this.options.offset, i = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight, n = i - this.$scrollElement.height(), a = this.offsets, o = this.targets, r = this.activeTarget;
                if (e >= n)
                    return r != (t = o.last()[0]) && this.activate(t);
                for (t = a.length; t--; )
                    r != o[t] && e >= a[t] && (!a[t + 1] || e <= a[t + 1]) && this.activate(o[t])
            },activate: function(e) {
                var i, n;
                this.activeTarget = e, t(this.selector).parent(".active").removeClass("active"), n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]', i = t(n).parent("li").addClass("active"), i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate")
            }};
        var i = t.fn.scrollspy;
        t.fn.scrollspy = function(i) {
            return this.each(function() {
                var n = t(this), a = n.data("scrollspy"), o = "object" == typeof i && i;
                a || n.data("scrollspy", a = new e(this, o)), "string" == typeof i && a[i]()
            })
        }, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.defaults = {offset: 10}, t.fn.scrollspy.noConflict = function() {
            return t.fn.scrollspy = i, this
        }, t(window).on("load", function() {
            t('[data-spy="scroll"]').each(function() {
                var e = t(this);
                e.scrollspy(e.data())
            })
        })
    }(window.jQuery), !function(t) {
        "use strict";
        var e = function(e) {
            this.element = t(e)
        };
        e.prototype = {constructor: e,show: function() {
                var e, i, n, a = this.element, o = a.closest("ul:not(.dropdown-menu)"), r = a.attr("data-target");
                r || (r = a.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, "")), a.parent("li").hasClass("active") || (e = o.find(".active:last a")[0], n = t.Event("show", {relatedTarget: e}), a.trigger(n), n.isDefaultPrevented() || (i = t(r), this.activate(a.parent("li"), o), this.activate(i, i.parent(), function() {
                    a.trigger({type: "shown",relatedTarget: e})
                })))
            },activate: function(e, i, n) {
                function a() {
                    o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), e.addClass("active"), r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active"), n && n()
                }
                var o = i.find("> .active"), r = n && t.support.transition && o.hasClass("fade");
                r ? o.one(t.support.transition.end, a) : a(), o.removeClass("in")
            }};
        var i = t.fn.tab;
        t.fn.tab = function(i) {
            return this.each(function() {
                var n = t(this), a = n.data("tab");
                a || n.data("tab", a = new e(this)), "string" == typeof i && a[i]()
            })
        }, t.fn.tab.Constructor = e, t.fn.tab.noConflict = function() {
            return t.fn.tab = i, this
        }, t(document).on("click.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(e) {
            e.preventDefault(), t(this).tab("show")
        })
    }(window.jQuery), !function(t) {
        "use strict";
        var e = function(e, i) {
            this.$element = t(e), this.options = t.extend({}, t.fn.typeahead.defaults, i), this.matcher = this.options.matcher || this.matcher, this.sorter = this.options.sorter || this.sorter, this.highlighter = this.options.highlighter || this.highlighter, this.updater = this.options.updater || this.updater, this.source = this.options.source, this.$menu = t(this.options.menu), this.shown = !1, this.listen()
        };
        e.prototype = {constructor: e,select: function() {
                var t = this.$menu.find(".active").attr("data-value");
                return this.$element.val(this.updater(t)).change(), this.hide()
            },updater: function(t) {
                return t
            },show: function() {
                var e = t.extend({}, this.$element.position(), {height: this.$element[0].offsetHeight});
                return this.$menu.insertAfter(this.$element).css({top: e.top + e.height,left: e.left}).show(), this.shown = !0, this
            },hide: function() {
                return this.$menu.hide(), this.shown = !1, this
            },lookup: function() {
                var e;
                return this.query = this.$element.val(), !this.query || this.query.length < this.options.minLength ? this.shown ? this.hide() : this : (e = t.isFunction(this.source) ? this.source(this.query, t.proxy(this.process, this)) : this.source, e ? this.process(e) : this)
            },process: function(e) {
                var i = this;
                return e = t.grep(e, function(t) {
                    return i.matcher(t)
                }), e = this.sorter(e), e.length ? this.render(e.slice(0, this.options.items)).show() : this.shown ? this.hide() : this
            },matcher: function(t) {
                return ~t.toLowerCase().indexOf(this.query.toLowerCase())
            },sorter: function(t) {
                for (var e, i = [], n = [], a = []; e = t.shift(); )
                    e.toLowerCase().indexOf(this.query.toLowerCase()) ? ~e.indexOf(this.query) ? n.push(e) : a.push(e) : i.push(e);
                return i.concat(n, a)
            },highlighter: function(t) {
                var e = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
                return t.replace(new RegExp("(" + e + ")", "ig"), function(t, e) {
                    return "<strong>" + e + "</strong>"
                })
            },render: function(e) {
                var i = this;
                return e = t(e).map(function(e, n) {
                    return e = t(i.options.item).attr("data-value", n), e.find("a").html(i.highlighter(n)), e[0]
                }), e.first().addClass("active"), this.$menu.html(e), this
            },next: function() {
                var e = this.$menu.find(".active").removeClass("active"), i = e.next();
                i.length || (i = t(this.$menu.find("li")[0])), i.addClass("active")
            },prev: function() {
                var t = this.$menu.find(".active").removeClass("active"), e = t.prev();
                e.length || (e = this.$menu.find("li").last()), e.addClass("active")
            },listen: function() {
                this.$element.on("focus", t.proxy(this.focus, this)).on("blur", t.proxy(this.blur, this)).on("keypress", t.proxy(this.keypress, this)).on("keyup", t.proxy(this.keyup, this)), this.eventSupported("keydown") && this.$element.on("keydown", t.proxy(this.keydown, this)), this.$menu.on("click", t.proxy(this.click, this)).on("mouseenter", "li", t.proxy(this.mouseenter, this)).on("mouseleave", "li", t.proxy(this.mouseleave, this))
            },eventSupported: function(t) {
                var e = t in this.$element;
                return e || (this.$element.setAttribute(t, "return;"), e = "function" == typeof this.$element[t]), e
            },move: function(t) {
                if (this.shown) {
                    switch (t.keyCode) {
                        case 9:
                        case 13:
                        case 27:
                            t.preventDefault();
                            break;
                        case 38:
                            t.preventDefault(), this.prev();
                            break;
                        case 40:
                            t.preventDefault(), this.next()
                    }
                    t.stopPropagation()
                }
            },keydown: function(e) {
                this.suppressKeyPressRepeat = ~t.inArray(e.keyCode, [40, 38, 9, 13, 27]), this.move(e)
            },keypress: function(t) {
                this.suppressKeyPressRepeat || this.move(t)
            },keyup: function(t) {
                switch (t.keyCode) {
                    case 40:
                    case 38:
                    case 16:
                    case 17:
                    case 18:
                        break;
                    case 9:
                    case 13:
                        if (!this.shown)
                            return;
                        this.select();
                        break;
                    case 27:
                        if (!this.shown)
                            return;
                        this.hide();
                        break;
                    default:
                        this.lookup()
                }
                t.stopPropagation(), t.preventDefault()
            },focus: function() {
                this.focused = !0
            },blur: function() {
                this.focused = !1, !this.mousedover && this.shown && this.hide()
            },click: function(t) {
                t.stopPropagation(), t.preventDefault(), this.select(), this.$element.focus()
            },mouseenter: function(e) {
                this.mousedover = !0, this.$menu.find(".active").removeClass("active"), t(e.currentTarget).addClass("active")
            },mouseleave: function() {
                this.mousedover = !1, !this.focused && this.shown && this.hide()
            }};
        var i = t.fn.typeahead;
        t.fn.typeahead = function(i) {
            return this.each(function() {
                var n = t(this), a = n.data("typeahead"), o = "object" == typeof i && i;
                a || n.data("typeahead", a = new e(this, o)), "string" == typeof i && a[i]()
            })
        }, t.fn.typeahead.defaults = {source: [],items: 8,menu: '<ul class="typeahead dropdown-menu"></ul>',item: '<li><a href="#"></a></li>',minLength: 1}, t.fn.typeahead.Constructor = e, t.fn.typeahead.noConflict = function() {
            return t.fn.typeahead = i, this
        }, t(document).on("focus.typeahead.data-api", '[data-provide="typeahead"]', function() {
            var e = t(this);
            e.data("typeahead") || e.typeahead(e.data())
        })
    }(window.jQuery), !function(t) {
        "use strict";
        var e = function(e, i) {
            this.options = t.extend({}, t.fn.affix.defaults, i), this.$window = t(window).on("scroll.affix.data-api", t.proxy(this.checkPosition, this)).on("click.affix.data-api", t.proxy(function() {
                setTimeout(t.proxy(this.checkPosition, this), 1)
            }, this)), this.$element = t(e), this.checkPosition()
        };
        e.prototype.checkPosition = function() {
            if (this.$element.is(":visible")) {
                var e, i = t(document).height(), n = this.$window.scrollTop(), a = this.$element.offset(), o = this.options.offset, r = o.bottom, s = o.top, l = "affix affix-top affix-bottom";
                "object" != typeof o && (r = s = o), "function" == typeof s && (s = o.top()), "function" == typeof r && (r = o.bottom()), e = null != this.unpin && n + this.unpin <= a.top ? !1 : null != r && a.top + this.$element.height() >= i - r ? "bottom" : null != s && s >= n ? "top" : !1, this.affixed !== e && (this.affixed = e, this.unpin = "bottom" == e ? a.top - n : null, this.$element.removeClass(l).addClass("affix" + (e ? "-" + e : "")))
            }
        };
        var i = t.fn.affix;
        t.fn.affix = function(i) {
            return this.each(function() {
                var n = t(this), a = n.data("affix"), o = "object" == typeof i && i;
                a || n.data("affix", a = new e(this, o)), "string" == typeof i && a[i]()
            })
        }, t.fn.affix.Constructor = e, t.fn.affix.defaults = {offset: 0}, t.fn.affix.noConflict = function() {
            return t.fn.affix = i, this
        }, t(window).on("load", function() {
            t('[data-spy="affix"]').each(function() {
                var e = t(this), i = e.data();
                i.offset = i.offset || {}, i.offsetBottom && (i.offset.bottom = i.offsetBottom), i.offsetTop && (i.offset.top = i.offsetTop), e.affix(i)
            })
        })
    }(window.jQuery)
} catch (e) {
    console.error("Error in file:/media/jui/js/bootstrap.min.js; Error:" + e.message)
}
try {
    jQuery(document).ready(function(t) {
        function e() {
            if (document.body) {
                var t = document.body, e = document.documentElement, i = window.innerHeight, n = t.scrollHeight;
                if (S = document.compatMode.indexOf("CSS") >= 0 ? e : t, p = t, k = !0, top != self)
                    _ = !0;
                else if (n > i && (t.offsetHeight <= i || e.offsetHeight <= i) && (S.style.height = "auto", S.offsetHeight <= i)) {
                    var o = document.createElement("div");
                    o.style.clear = "both", t.appendChild(o)
                }
                C || (t.style.backgroundAttachment = "scroll", e.style.backgroundAttachment = "scroll"), b && l("keydown", a)
            }
        }
        function i(t, e, i, n) {
            if (n || (n = 1e3), c(e, i), M.push({x: e,y: i,lastX: 0 > e ? .99 : -.99,lastY: 0 > i ? .99 : -.99,start: +new Date}), !L) {
                var a = function() {
                    for (var o = +new Date, r = 0, s = 0, l = 0; l < M.length; l++) {
                        var d = M[l], c = o - d.start, u = c >= m, p = u ? 1 : c / m;
                        v && (p = h(p));
                        var g = d.x * p - d.lastX >> 0, y = d.y * p - d.lastY >> 0;
                        r += g, s += y, d.lastX += g, d.lastY += y, u && (M.splice(l, 1), l--)
                    }
                    if (e) {
                        var w = t.scrollLeft;
                        t.scrollLeft += r, r && t.scrollLeft === w && (e = 0)
                    }
                    if (i) {
                        var b = t.scrollTop;
                        t.scrollTop += s, s && t.scrollTop === b && (i = 0)
                    }
                    e || i || (M = []), M.length ? setTimeout(a, n / f + 1) : L = !1
                };
                setTimeout(a, 0), L = !0
            }
        }
        function n(t) {
            k || init();
            var e = t.target, n = s(e);
            if (!n || t.defaultPrevented || d(p, "embed") || d(e, "embed") && /\.pdf/i.test(e.src))
                return !0;
            var a = t.wheelDeltaX || 0, o = t.wheelDeltaY || 0;
            a || o || (o = t.wheelDelta || 0), Math.abs(a) > 1.2 && (a *= g / 120), Math.abs(o) > 1.2 && (o *= g / 120), i(n, -a, -o), t.preventDefault()
        }
        function a(t) {
            var e = t.target, n = t.ctrlKey || t.altKey || t.metaKey;
            if (/input|textarea|embed/i.test(e.nodeName) || e.isContentEditable || t.defaultPrevented || n)
                return !0;
            if (d(e, "button") && t.keyCode === O.spacebar)
                return !0;
            var a, o = 0, r = 0, l = s(p), c = l.clientHeight;
            switch (l == document.body && (c = window.innerHeight), t.keyCode) {
                case O.up:
                    r = -x;
                    break;
                case O.down:
                    r = x;
                    break;
                case O.spacebar:
                    a = t.shiftKey ? 1 : -1, r = -a * c * .9;
                    break;
                case O.pageup:
                    r = .9 * -c;
                    break;
                case O.pagedown:
                    r = .9 * c;
                    break;
                case O.home:
                    r = -l.scrollTop;
                    break;
                case O.end:
                    var u = l.scrollHeight - l.scrollTop - c;
                    r = u > 0 ? u + 10 : 0;
                    break;
                case O.left:
                    o = -x;
                    break;
                case O.right:
                    o = x;
                    break;
                default:
                    return !0
            }
            i(l, o, r), t.preventDefault()
        }
        function o(t) {
            p = t.target
        }
        function r(t, e) {
            for (var i = t.length; i--; )
                A[E(t[i])] = e;
            return e
        }
        function s(t) {
            var e = [], i = S.scrollHeight;
            do {
                var n = A[E(t)];
                if (n)
                    return r(e, n);
                if (e.push(t), i === t.scrollHeight) {
                    if (!_ || S.clientHeight + 10 < i)
                        return r(e, document.body)
                } else if (t.clientHeight + 10 < t.scrollHeight && (overflow = getComputedStyle(t, "").getPropertyValue("overflow"), "scroll" === overflow || "auto" === overflow))
                    return r(e, t)
            } while (t = t.parentNode)
        }
        function l(t, e, i) {
            window.addEventListener(t, e, i || !1)
        }
        function d(t, e) {
            return t.nodeName.toLowerCase() === e.toLowerCase()
        }
        function c(t, e) {
            t = t > 0 ? 1 : -1, e = e > 0 ? 1 : -1, (T.x !== t || T.y !== e) && (T.x = t, T.y = e, M = [])
        }
        function u(t) {
            var e, i, n;
            return t *= y, 1 > t ? e = t - (1 - Math.exp(-t)) : (i = Math.exp(-1), t -= 1, n = 1 - Math.exp(-t), e = i + n * (1 - i)), e * w
        }
        function h(t) {
            return t >= 1 ? 1 : 0 >= t ? 0 : (1 == w && (w /= u(1)), u(t))
        }
        var p, f = 150, m = 700, g = 105, v = !0, y = 6, w = 1, b = !0, x = 50, _ = !1, T = {x: 0,y: 0}, k = !1, C = !0, S = document.documentElement, O = {left: 37,up: 38,right: 39,down: 40,spacebar: 32,pageup: 33,pagedown: 34,end: 35,home: 36}, M = [], L = !1, A = {};
        setInterval(function() {
            A = {}
        }, 1e4);
        var E = function() {
            var t = 0;
            return function(e) {
                return e.ssc_uniqueID || (e.ssc_uniqueID = t++)
            }
        }();
        t.browser.chrome = /chrome/.test(navigator.userAgent.toLowerCase()), t.browser.chrome && (l("mousedown", o), l("mousewheel", n), l("load", e))
    })
} catch (e) {
    console.error("Error in file:plugins/system/aikon_smooth_scroll/assets/js/SmoothScroll.js; Error:" + e.message)
}
try {
    var ev_basefolder = "", extravote_text = Array("Your browser does not support AJAX!", "Loading", "Thank you for rating!", "You need to login to rate this item.", "You have already rated.", "(%s Votes)", "(%s Vote)", "Rating %s ")
} catch (e) {
    console.error("Error in script declaration; Error:" + e.message)
}
try {
    !function(t) {
        var e = {}, i = function(t) {
            var e = !1, i = t.documentElement, n = i.firstElementChild || i.firstChild, a = t.createElement("div");
            if (a.style.cssText = "position:absolute;top:-100em;width:1.1px", i.insertBefore(a, n), e = (a.getBoundingClientRect().width || 1) % 1 !== 0, i.removeChild(a), !e) {
                var o = /msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase());
                o && (e = 8 == parseInt(o[1], 10) || 9 == parseInt(o[1], 10))
            }
            return e
        }(document);
        t.fn.socialButtons = function(i) {
            return i = t.extend({wrapper: '<div class="socialbuttons clearfix" />'}, i), i.twitter || i.plusone || i.facebook ? (i.twitter && !e.twitter && (e.twitter = t.getScript("//platform.twitter.com/widgets.js")), i.plusone && !e.plusone && (e.plusone = t.getScript("//apis.google.com/js/plusone.js")), window.FB || !i.facebook || e.facebook || (t("body").append('<div id="fb-root"></div>'), function(t, e, i) {
                var n, a = t.getElementsByTagName(e)[0];
                t.getElementById(i) || (n = t.createElement(e), n.id = i, n.src = "//connect.facebook.net/en_US/all.js#xfbml=1", a.parentNode.insertBefore(n, a))
            }(document, "script", "facebook-jssdk"), e.facebook = !0), this.each(function() {
                var e = t(this).data("permalink"), n = t(i.wrapper).appendTo(this);
                i.twitter && n.append('<div><a href="http://twitter.com/share" class="twitter-share-button" data-url="' + e + '" data-count="none">Tweet</a></div>'), i.plusone && n.append('<div><div class="g-plusone" data-size="medium" data-annotation="none" data-href="' + e + '"></div></div>'), i.facebook && n.append('<div><div class="fb-like" data-href="' + e + '" data-send="false" data-layout="button_count" data-width="100" data-show-faces="false"></div></div>')
            })) : this
        };
        var n = {};
        t.matchHeight = function(e, i, a) {
            function o() {
                l.match()
            }
            var r = t(window), s = "debouncedresize orientationchange", l = e && n[e];
            return l || (l = n[e] = {id: e,elements: i,deepest: a,match: function() {
                    var e = this.revert(), i = 0;
                    t(this.elements).each(function() {
                        i = Math.max(i, t(this).outerHeight())
                    }).each(function(n) {
                        var a = "outerHeight";
                        "border-box" == e[n].css("box-sizing") && (a = "height");
                        var o = t(this), r = e[n], s = r.height() + (i - o[a]());
                        r.css("min-height", s + "px")
                    })
                },revert: function() {
                    var e = [], i = this.deepest;
                    return t(this.elements).each(function() {
                        var n = i ? t(this).find(i + ":first") : t(this);
                        e.push(n.css("min-height", ""))
                    }), e
                },remove: function() {
                    r.unbind(s, o), this.revert(), delete n[this.id]
                }}, r.bind(s, o)), l
        }, t.matchWidth = function(e, a, o) {
            function r() {
                d.match()
            }
            var s = t(window), l = "debouncedresize orientationchange", d = e && n[e];
            if (!d) {
                if (i)
                    return n[e] = {match: function() {
                        },revert: function() {
                        },remove: function() {
                        }}, n[e];
                d = n[e] = {id: e,elements: a,selector: o,match: function() {
                        this.revert(), t(this.elements).each(function() {
                            var e = t(this), i = e.width(), n = e.children(o), a = 0;
                            n.each(function(e) {
                                return e < n.length - 1 ? void (a += t(this).width()) : void t(this).width(i - a)
                            })
                        })
                    },revert: function() {
                        t(a).children(o).css("width", "")
                    },remove: function() {
                        s.unbind(l, r), this.revert(), delete n[this.id]
                    }}, s.bind(l, r)
            }
            return d
        }, t.fn.matchHeight = function(e) {
            var i = 0, n = [];
            return this.each(function() {
                var i = e ? t(this).find(e + ":first") : t(this);
                n.push(i), i.css("min-height", "")
            }), this.each(function() {
                i = Math.max(i, t(this).outerHeight())
            }), this.each(function(e) {
                var a = t(this), o = n[e], r = o.height() + (i - a.outerHeight());
                o.css("min-height", r + "px")
            })
        }, t.fn.matchWidth = function(e) {
            return this.each(function() {
                var i = t(this), n = i.children(e), a = 0;
                n.width(function(t, e) {
                    return t < n.length - 1 ? (a += e, e) : i.width() - a
                })
            })
        }, t.fn.smoothScroller = function(e) {
            return e = t.extend({duration: 1e3,transition: "easeOutExpo"}, e), this.each(function() {
                t(this).bind("click", function() {
                    var i = this.hash, n = t(this.hash).offset().top, a = window.location.href.replace(window.location.hash, ""), o = this;
                    return a + i == o ? (t("html:not(:animated),body:not(:animated)").animate({scrollTop: n}, e.duration, e.transition, function() {
                        window.location.hash = i.replace("#", "")
                    }), !1) : void 0
                })
            })
        }
    }(jQuery), function(t) {
        t.easing.jswing = t.easing.swing, t.extend(t.easing, {def: "easeOutQuad",swing: function(e, i, n, a, o) {
                return t.easing[t.easing.def](e, i, n, a, o)
            },easeInQuad: function(t, e, i, n, a) {
                return n * (e /= a) * e + i
            },easeOutQuad: function(t, e, i, n, a) {
                return -n * (e /= a) * (e - 2) + i
            },easeInOutQuad: function(t, e, i, n, a) {
                return (e /= a / 2) < 1 ? n / 2 * e * e + i : -n / 2 * (--e * (e - 2) - 1) + i
            },easeInCubic: function(t, e, i, n, a) {
                return n * (e /= a) * e * e + i
            },easeOutCubic: function(t, e, i, n, a) {
                return n * ((e = e / a - 1) * e * e + 1) + i
            },easeInOutCubic: function(t, e, i, n, a) {
                return (e /= a / 2) < 1 ? n / 2 * e * e * e + i : n / 2 * ((e -= 2) * e * e + 2) + i
            },easeInQuart: function(t, e, i, n, a) {
                return n * (e /= a) * e * e * e + i
            },easeOutQuart: function(t, e, i, n, a) {
                return -n * ((e = e / a - 1) * e * e * e - 1) + i
            },easeInOutQuart: function(t, e, i, n, a) {
                return (e /= a / 2) < 1 ? n / 2 * e * e * e * e + i : -n / 2 * ((e -= 2) * e * e * e - 2) + i
            },easeInQuint: function(t, e, i, n, a) {
                return n * (e /= a) * e * e * e * e + i
            },easeOutQuint: function(t, e, i, n, a) {
                return n * ((e = e / a - 1) * e * e * e * e + 1) + i
            },easeInOutQuint: function(t, e, i, n, a) {
                return (e /= a / 2) < 1 ? n / 2 * e * e * e * e * e + i : n / 2 * ((e -= 2) * e * e * e * e + 2) + i
            },easeInSine: function(t, e, i, n, a) {
                return -n * Math.cos(e / a * (Math.PI / 2)) + n + i
            },easeOutSine: function(t, e, i, n, a) {
                return n * Math.sin(e / a * (Math.PI / 2)) + i
            },easeInOutSine: function(t, e, i, n, a) {
                return -n / 2 * (Math.cos(Math.PI * e / a) - 1) + i
            },easeInExpo: function(t, e, i, n, a) {
                return 0 == e ? i : n * Math.pow(2, 10 * (e / a - 1)) + i
            },easeOutExpo: function(t, e, i, n, a) {
                return e == a ? i + n : n * (-Math.pow(2, -10 * e / a) + 1) + i
            },easeInOutExpo: function(t, e, i, n, a) {
                return 0 == e ? i : e == a ? i + n : (e /= a / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + i : n / 2 * (-Math.pow(2, -10 * --e) + 2) + i
            },easeInCirc: function(t, e, i, n, a) {
                return -n * (Math.sqrt(1 - (e /= a) * e) - 1) + i
            },easeOutCirc: function(t, e, i, n, a) {
                return n * Math.sqrt(1 - (e = e / a - 1) * e) + i
            },easeInOutCirc: function(t, e, i, n, a) {
                return (e /= a / 2) < 1 ? -n / 2 * (Math.sqrt(1 - e * e) - 1) + i : n / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + i
            },easeInElastic: function(t, e, i, n, a) {
                var o = 1.70158, r = 0, s = n;
                if (0 == e)
                    return i;
                if (1 == (e /= a))
                    return i + n;
                if (r || (r = .3 * a), s < Math.abs(n)) {
                    s = n;
                    var o = r / 4
                } else
                    var o = r / (2 * Math.PI) * Math.asin(n / s);
                return -(s * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * a - o) * Math.PI / r)) + i
            },easeOutElastic: function(t, e, i, n, a) {
                var o = 1.70158, r = 0, s = n;
                if (0 == e)
                    return i;
                if (1 == (e /= a))
                    return i + n;
                if (r || (r = .3 * a), s < Math.abs(n)) {
                    s = n;
                    var o = r / 4
                } else
                    var o = r / (2 * Math.PI) * Math.asin(n / s);
                return s * Math.pow(2, -10 * e) * Math.sin(2 * (e * a - o) * Math.PI / r) + n + i
            },easeInOutElastic: function(t, e, i, n, a) {
                var o = 1.70158, r = 0, s = n;
                if (0 == e)
                    return i;
                if (2 == (e /= a / 2))
                    return i + n;
                if (r || (r = .3 * a * 1.5), s < Math.abs(n)) {
                    s = n;
                    var o = r / 4
                } else
                    var o = r / (2 * Math.PI) * Math.asin(n / s);
                return 1 > e ? -.5 * s * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * a - o) * Math.PI / r) + i : s * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * (e * a - o) * Math.PI / r) * .5 + n + i
            },easeInBack: function(t, e, i, n, a, o) {
                return void 0 == o && (o = 1.70158), n * (e /= a) * e * ((o + 1) * e - o) + i
            },easeOutBack: function(t, e, i, n, a, o) {
                return void 0 == o && (o = 1.70158), n * ((e = e / a - 1) * e * ((o + 1) * e + o) + 1) + i
            },easeInOutBack: function(t, e, i, n, a, o) {
                return void 0 == o && (o = 1.70158), (e /= a / 2) < 1 ? n / 2 * e * e * (((o *= 1.525) + 1) * e - o) + i : n / 2 * ((e -= 2) * e * (((o *= 1.525) + 1) * e + o) + 2) + i
            },easeInBounce: function(e, i, n, a, o) {
                return a - t.easing.easeOutBounce(e, o - i, 0, a, o) + n
            },easeOutBounce: function(t, e, i, n, a) {
                return (e /= a) < 1 / 2.75 ? 7.5625 * n * e * e + i : 2 / 2.75 > e ? n * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + i : 2.5 / 2.75 > e ? n * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + i : n * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + i
            },easeInOutBounce: function(e, i, n, a, o) {
                return o / 2 > i ? .5 * t.easing.easeInBounce(e, 2 * i, 0, a, o) + n : .5 * t.easing.easeOutBounce(e, 2 * i - o, 0, a, o) + .5 * a + n
            }})
    }(jQuery), function(t) {
        function e(e) {
            var i = {}, n = /^jQuery\d+$/;
            return t.each(e.attributes, function(t, e) {
                e.specified && !n.test(e.name) && (i[e.name] = e.value)
            }), i
        }
        function i() {
            var e = t(this);
            e.val() === e.attr("placeholder") && e.hasClass("placeholder") && (e.data("placeholder-password") ? e.hide().next().show().focus() : e.val("").removeClass("placeholder"))
        }
        function n() {
            var n, a = t(this);
            if ("" === a.val() || a.val() === a.attr("placeholder")) {
                if (a.is(":password")) {
                    if (!a.data("placeholder-textinput")) {
                        try {
                            n = a.clone().attr({type: "text"})
                        } catch (o) {
                            n = t("<input>").attr(t.extend(e(a[0]), {type: "text"}))
                        }
                        n.removeAttr("name").data("placeholder-password", !0).bind("focus.placeholder", i), a.data("placeholder-textinput", n).before(n)
                    }
                    a = a.hide().prev().show()
                }
                a.addClass("placeholder").val(a.attr("placeholder"))
            } else
                a.removeClass("placeholder")
        }
        var a = "placeholder" in document.createElement("input"), o = "placeholder" in document.createElement("textarea");
        t.fn.placeholder = a && o ? function() {
            return this
        } : function() {
            return this.filter((a ? "textarea" : ":input") + "[placeholder]").bind("focus.placeholder", i).bind("blur.placeholder", n).trigger("blur.placeholder").end()
        }, t(function() {
            t("form").bind("submit.placeholder", function() {
                var e = t(".placeholder", this).each(i);
                setTimeout(function() {
                    e.each(n)
                }, 10)
            })
        }), t(window).bind("unload.placeholder", function() {
            t(".placeholder").val("")
        })
    }(jQuery), function(t) {
        if (!t.event.special.debouncedresize) {
            var e, i, n = t.event;
            e = n.special.debouncedresize = {setup: function() {
                    t(this).on("resize", e.handler)
                },teardown: function() {
                    t(this).off("resize", e.handler)
                },handler: function(t, a) {
                    var o = this, r = arguments, s = function() {
                        t.type = "debouncedresize", n.dispatch.apply(o, r)
                    };
                    i && clearTimeout(i), a ? s() : i = setTimeout(s, e.threshold)
                },threshold: 150}
        }
    }(jQuery)
} catch (e) {
    console.error("Error in file:/templates/drmichaels/warp/js/warp.js; Error:" + e.message)
}
try {
    !function(t, e, i) {
        function n(t) {
            return c.innerHTML = '&shy;<style media="' + t + '"> #mq-test-1 { width: 42px; }</style>', s.insertBefore(d, l), r = 42 == c.offsetWidth, s.removeChild(d), r
        }
        function a(t) {
            var e = n(t.media);
            if (t._listeners && t.matches != e) {
                t.matches = e;
                for (var i = 0, a = t._listeners.length; a > i; i++)
                    t._listeners[i](t)
            }
        }
        function o(t, e, i) {
            var n;
            return function() {
                var a = this, o = arguments, r = function() {
                    n = null, i || t.apply(a, o)
                }, s = i && !n;
                clearTimeout(n), n = setTimeout(r, e), s && t.apply(a, o)
            }
        }
        if (!e.matchMedia || t.userAgent.match(/(iPhone|iPod|iPad)/i)) {
            var r, s = i.documentElement, l = s.firstElementChild || s.firstChild, d = i.createElement("body"), c = i.createElement("div");
            c.id = "mq-test-1", c.style.cssText = "position:absolute;top:-100em", d.style.background = "none", d.appendChild(c), e.matchMedia = function(t) {
                var r, s = [];
                return r = {matches: n(t),media: t,_listeners: s,addListener: function(t) {
                        "function" == typeof t && s.push(t)
                    },removeListener: function(t) {
                        for (var e = 0, i = s.length; i > e; e++)
                            s[e] === t && delete s[e]
                    }}, e.addEventListener && e.addEventListener("resize", o(function() {
                    a(r)
                }, 150), !1), i.addEventListener && i.addEventListener("orientationchange", function() {
                    a(r)
                }, !1), r
            }
        }
    }(navigator, window, document), function(t, e, i) {
        if (!t.onMediaQuery) {
            var n = {}, a = e.matchMedia && e.matchMedia("only all").matches;
            t(i).ready(function() {
                for (var e in n) {
                    {
                        t(n[e]).trigger("init")
                    }
                    n[e].matches && t(n[e]).trigger("valid")
                }
            }), t(e).bind("load", function() {
                for (var e in n)
                    n[e].matches && t(n[e]).trigger("valid")
            }), t.onMediaQuery = function(i, o) {
                var r = i && n[i];
                return r || (r = n[i] = e.matchMedia(i), r.supported = a, r.addListener(function() {
                    t(r).trigger(r.matches ? "valid" : "invalid")
                })), t(r).bind(o), r
            }
        }
    }(jQuery, window, document), function(t, e, i) {
        t.fn.responsiveMenu = function(n) {
            function a(e, i) {
                var n = "";
                return t(e).children().each(function() {
                    var e = t(this);
                    e.children("a, span.separator").each(function() {
                        var o = t(this), r = o.is("a") ? o.attr("href") : "", s = o.is("span") ? " disabled" : "", l = i > 1 ? new Array(i).join("-") + " " : "", d = o.find(".title").length ? o.find(".title").text() : o.text();
                        n += '<option value="' + r + '" class="' + o.attr("class") + '"' + s + ">" + l + d + "</option>", e.find("ul.level" + (i + 1)).each(function() {
                            n += a(this, i + 1)
                        })
                    })
                }), n
            }
            return n = t.extend({current: ".current"}, n), this.each(function() {
                var o = t(this), r = (n.target || this, t("<select/>")), s = "";
                o.find("ul.menu").each(function() {
                    s += a(this, 1)
                }), r.append(s).change(function() {
                    i.location.href = r.val()
                }), r.find(n.current).attr("selected", !0), /iPhone|iPad|iPod/.test(e.platform) && /OS [1-5]_[0-9_]* like Mac OS X/i.test(e.userAgent) && e.userAgent.indexOf("AppleWebKit") > -1 && r.find(":disabled").remove(), o.after(r)
            })
        }
    }(jQuery, navigator, window), function(t, e) {
        function i() {
            c.setAttribute("content", p), f = !0
        }
        function n() {
            c.setAttribute("content", h), f = !1
        }
        function a(e) {
            d = e.accelerationIncludingGravity, r = Math.abs(d.x), s = Math.abs(d.y), l = Math.abs(d.z), t.orientation && 180 !== t.orientation || !(r > 7 || (l > 6 && 8 > s || 8 > l && s > 6) && r > 5) ? f || i() : f && n()
        }
        if (/iPhone|iPad|iPod/.test(e.platform) && /OS [1-5]_[0-9_]* like Mac OS X/i.test(e.userAgent) && e.userAgent.indexOf("AppleWebKit") > -1) {
            var o = t.document;
            if (o.querySelector) {
                var r, s, l, d, c = o.querySelector("meta[name=viewport]"), u = c && c.getAttribute("content"), h = u + ",maximum-scale=1", p = u + ",maximum-scale=10", f = !0;
                c && (t.addEventListener("orientationchange", i, !1), t.addEventListener("devicemotion", a, !1))
            }
        }
    }(this, navigator)
} catch (e) {
    console.error("Error in file:/templates/drmichaels/warp/js/responsive.js; Error:" + e.message)
}
try {
    !function(t) {
        var e = function() {
        };
        t.extend(e.prototype, {name: "accordionMenu",options: {mode: "default",display: null,collapseall: !1,toggler: "span.level1.parent",content: "ul.level2",onaction: function() {
                }},initialize: function(e, i) {
                var i = t.extend({}, this.options, i), n = e.find(i.toggler);
                n.each(function(e) {
                    var n = t(this), o = n.next(i.content).wrap("<div>").parent();
                    o.data("height", o.height()), n.hasClass("active") || e == i.display ? o.show() : o.hide().css("height", 0), n.bind("click", function() {
                        a(e)
                    })
                });
                var a = function(e) {
                    var a = t(n.get(e)), o = t([]);
                    switch (a.hasClass("active") && (o = a, a = t([])), i.collapseall && (o = n.filter(".active")), i.mode) {
                        case "slide":
                            a.next().stop().show().animate({height: a.next().data("height")}, 400), o.next().stop().animate({height: 0}, 400, function() {
                                o.next().hide()
                            }), setTimeout(function() {
                                i.onaction.apply(this, [a, o])
                            }, 401);
                            break;
                        default:
                            a.next().show().css("height", a.next().data("height")), o.next().hide().css("height", 0), i.onaction.apply(this, [a, o])
                    }
                    a.addClass("active").parent().addClass("active"), o.removeClass("active").parent().removeClass("active")
                }
            }}), t.fn[e.prototype.name] = function() {
            var i = arguments, n = i[0] ? i[0] : null;
            return this.each(function() {
                var a = t(this);
                if (e.prototype[n] && a.data(e.prototype.name) && "initialize" != n)
                    a.data(e.prototype.name)[n].apply(a.data(e.prototype.name), Array.prototype.slice.call(i, 1));
                else if (!n || t.isPlainObject(n)) {
                    var o = new e;
                    e.prototype.initialize && o.initialize.apply(o, t.merge([a], i)), a.data(e.prototype.name, o)
                } else
                    t.error("Method " + n + " does not exist on jQuery." + e.name)
            })
        }
    }(jQuery)
} catch (e) {
    console.error("Error in file:/templates/drmichaels/warp/js/accordionmenu.js; Error:" + e.message)
}
try {
    !function(t) {
        var e = function() {
        };
        t.extend(e.prototype, {name: "dropdownMenu",options: {mode: "default",itemSelector: "li",firstLevelSelector: "li.level1",dropdownSelector: "ul",duration: 600,remainTime: 800,remainClass: "remain",matchHeight: !0,transition: "easeOutExpo",withopacity: !0,centerDropdown: !1,reverseAnimation: !1,fixWidth: !1,fancy: null,boundary: t(window),boundarySelector: null},initialize: function(e, i) {
                this.options = t.extend({}, this.options, i);
                var n = this, a = null, o = !1;
                if (this.menu = e, this.dropdowns = [], this.options.withopacity = t.support.opacity ? this.options.withopacity : !1, this.options.fixWidth) {
                    var r = 5;
                    this.menu.children().each(function() {
                        r += t(this).width()
                    }), this.menu.css("width", r)
                }
                if (this.options.matchHeight && this.matchHeight(), this.menu.find(this.options.firstLevelSelector).each(function(e) {
                    var i = t(this), r = i.find(n.options.dropdownSelector).css({overflow: "hidden"});
                    if (r.length) {
                        r.css("overflow", "hidden").show(), r.data("init-width", parseFloat(r.css("width"))), r.data("columns", r.find(".column").length), r.data("single-width", r.data("columns") > 1 ? r.data("init-width") / r.data("columns") : r.data("init-width"));
                        var s = t("<div>").css({overflow: "hidden"}).append("<div></div>"), l = s.find("div:first");
                        r.children().appendTo(l), s.appendTo(r), n.dropdowns.push({dropdown: r,div: s,innerdiv: l}), r.hide()
                    }
                    i.bind({mouseenter: function() {
                            if (o = !0, n.menu.trigger("menu:enter", [i, e]), a) {
                                if (a.index == e)
                                    return;
                                a.item.removeClass(n.options.remainClass), a.div.hide().parent().hide()
                            }
                            if (!r.length)
                                return active = null, void (a = null);
                            r.parent().find("div").css({width: "",height: "","min-width": "","min-height": ""}), r.removeClass("flip").removeClass("stack"), i.addClass(n.options.remainClass), s.stop().show(), r.show(), n.options.centerDropdown && r.css("margin-left", -1 * (parseFloat(r.data("init-width")) / 2 - i.width() / 2));
                            var d = r.css("width", r.data("init-width")).data("init-width");
                            dpitem = n.options.boundarySelector ? t(n.options.boundarySelector, s) : s, boundary = {top: 0,left: 0,width: n.options.boundary.width()}, l.css({"min-width": d});
                            try {
                                t.extend(boundary, n.options.boundary.offset())
                            } catch (c) {
                            }
                            (dpitem.offset().left < boundary.left || dpitem.offset().left + d - boundary.left > boundary.width) && (r.addClass("flip"), dpitem.offset().left < boundary.left && (r.removeClass("flip").addClass("stack"), d = r.css("width", r.data("single-width")).data("single-width"), l.css({"min-width": d}), n.options.centerDropdown && r.css({"margin-left": ""})));
                            var u = parseFloat(r.height());
                            switch (n.options.mode) {
                                case "showhide":
                                    var h = {width: d,height: u};
                                    s.css(h);
                                    break;
                                case "diagonal":
                                    var p = {width: 0,height: 0}, h = {width: d,height: u};
                                    n.options.withopacity && (p.opacity = 0, h.opacity = 1), s.css(p).animate(h, n.options.duration, n.options.transition);
                                    break;
                                case "height":
                                    var p = {width: d,height: 0}, h = {height: u};
                                    n.options.withopacity && (p.opacity = 0, h.opacity = 1), s.css(p).animate(h, n.options.duration, n.options.transition);
                                    break;
                                case "width":
                                    var p = {width: 0,height: u}, h = {width: d};
                                    n.options.withopacity && (p.opacity = 0, h.opacity = 1), s.css(p).animate(h, n.options.duration, n.options.transition);
                                    break;
                                case "slide":
                                    r.css({width: d,height: u}), s.css({width: d,height: u,"margin-top": -1 * u}).animate({"margin-top": 0}, n.options.duration, n.options.transition);
                                    break;
                                default:
                                    var p = {width: d,height: u}, h = {};
                                    n.options.withopacity && (p.opacity = 0, h.opacity = 1), s.css(p).animate(h, n.options.duration, n.options.transition)
                            }
                            a = {item: i,div: s,index: e}
                        },mouseleave: function(l) {
                            return l.srcElement && t(l.srcElement).hasClass("module") ? !1 : (o = !1, r.length ? void window.setTimeout(function() {
                                if (!o && "none" != s.css("display")) {
                                    n.menu.trigger("menu:leave", [i, e]);
                                    var t = function() {
                                        i.removeClass(n.options.remainClass), a = null, s.hide().parent().hide()
                                    };
                                    if (!n.options.reverseAnimation)
                                        return void t();
                                    switch (n.options.mode) {
                                        case "showhide":
                                            t();
                                            break;
                                        case "diagonal":
                                            var r = {width: 0,height: 0};
                                            n.options.withopacity && (r.opacity = 0), s.stop().animate(r, n.options.duration, n.options.transition, function() {
                                                t()
                                            });
                                            break;
                                        case "height":
                                            var r = {height: 0};
                                            n.options.withopacity && (r.opacity = 0), s.stop().animate(r, n.options.duration, n.options.transition, function() {
                                                t()
                                            });
                                            break;
                                        case "width":
                                            var r = {width: 0};
                                            n.options.withopacity && (r.opacity = 0), s.stop().animate(r, n.options.duration, n.options.transition, function() {
                                                t()
                                            });
                                            break;
                                        case "slide":
                                            s.stop().animate({"margin-top": -1 * parseFloat(s.data("dpheight"))}, n.options.duration, n.options.transition, function() {
                                                t()
                                            });
                                            break;
                                        default:
                                            var r = {};
                                            n.options.withopacity && (r.opacity = 0), s.stop().animate(r, n.options.duration, n.options.transition, function() {
                                                t()
                                            })
                                    }
                                }
                            }, n.options.remainTime) : void n.menu.trigger("menu:leave"))
                        }})
                }), this.options.fancy) {
                    var s = t.extend({mode: "move",transition: "easeOutExpo",duration: 500,onEnter: null,onLeave: null}, this.options.fancy), l = this.menu.append('<div class="fancy bg1"><div class="fancy-1"><div class="fancy-2"><div class="fancy-3"></div></div></div></div>').find(".fancy:first").hide(), d = this.menu.find(".active:first"), c = null, u = function(t, e) {
                        e && c && t.get(0) == c.get(0) || (l.stop().show().css("visibility", "visible"), "move" == s.mode ? d.length || e ? l.animate({left: t.position().left + "px",width: t.width() + "px"}, s.duration, s.transition) : l.hide() : e ? l.css({opacity: d ? 0 : 1,left: t.position().left + "px",width: t.width() + "px"}).animate({opacity: 1}, s.duration) : l.animate({opacity: 0}, s.duration), c = e ? t : null)
                    };
                    this.menu.bind({"menu:enter": function(t, e, i) {
                            u(e, !0), s.onEnter && s.onEnter(e, i, l)
                        },"menu:leave": function(t, e, i) {
                            u(d, !1), s.onLeave && s.onLeave(e, i, l)
                        },"menu:fixfancy": function() {
                            c && l.stop().show().css({left: c.position().left + "px",width: c.width() + "px"})
                        }}), d.length && "move" == s.mode && u(d, !0)
                }
            },matchHeight: function() {
                this.menu.find("li.level1.parent").each(function() {
                    var e = 0;
                    t(this).find("ul.level2").each(function() {
                        var i = t(this), n = i.parents(".dropdown:first").show();
                        e = Math.max(i.height(), e), n.hide()
                    }).css("min-height", e)
                })
            }}), t.fn[e.prototype.name] = function() {
            var i = arguments, n = i[0] ? i[0] : null;
            return this.each(function() {
                var a = t(this);
                if (e.prototype[n] && a.data(e.prototype.name) && "initialize" != n)
                    a.data(e.prototype.name)[n].apply(a.data(e.prototype.name), Array.prototype.slice.call(i, 1));
                else if (!n || t.isPlainObject(n)) {
                    var o = new e;
                    e.prototype.initialize && o.initialize.apply(o, t.merge([a], i)), a.data(e.prototype.name, o)
                } else
                    t.error("Method " + n + " does not exist on jQuery." + e.name)
            })
        }
    }(jQuery)
} catch (e) {
    console.error("Error in file:/templates/drmichaels/warp/js/dropdownmenu.js; Error:" + e.message)
}
try {
    !function(t) {
        if ("function" == typeof define && define.amd && define("uikit", function() {
            var e = t(window, window.jQuery, window.document);
            return e.load = function(t, i, n, a) {
                var o, r = t.split(","), s = [], l = (a.config && a.config.uikit && a.config.uikit.base ? a.config.uikit.base : "").replace(/\/+$/g, "");
                if (!l)
                    throw new Error("Please define base path to UIkit in the requirejs config.");
                for (o = 0; o < r.length; o += 1) {
                    var d = r[o].replace(/\./g, "/");
                    s.push(l + "/js/addons/" + d)
                }
                i(s, function() {
                    n(e)
                })
            }, e
        }), !window.jQuery)
            throw new Error("UIkit requires jQuery");
        window && window.jQuery && t(window, window.jQuery, window.document)
    }(function(t, e, i) {
        "use strict";
        var n = e.UIkit || {}, a = e("html"), o = e(window), r = e(document);
        if (n.fn)
            return n;
        if (n.version = "2.10.0", n.$doc = r, n.$win = o, n.fn = function(t, i) {
            var a = arguments, o = t.match(/^([a-z\-]+)(?:\.([a-z]+))?/i), r = o[1], s = o[2];
            return n[r] ? this.each(function() {
                var t = e(this), o = t.data(r);
                o || t.data(r, o = n[r](this, s ? void 0 : i)), s && o[s].apply(o, Array.prototype.slice.call(a, 1))
            }) : (e.error("UIkit component [" + r + "] does not exist."), this)
        }, n.support = {}, n.support.transition = function() {
            var t = function() {
                var t, e = i.body || i.documentElement, n = {WebkitTransition: "webkitTransitionEnd",MozTransition: "transitionend",OTransition: "oTransitionEnd otransitionend",transition: "transitionend"};
                for (t in n)
                    if (void 0 !== e.style[t])
                        return n[t]
            }();
            return t && {end: t}
        }(), n.support.animation = function() {
            var t = function() {
                var t, e = i.body || i.documentElement, n = {WebkitAnimation: "webkitAnimationEnd",MozAnimation: "animationend",OAnimation: "oAnimationEnd oanimationend",animation: "animationend"};
                for (t in n)
                    if (void 0 !== e.style[t])
                        return n[t]
            }();
            return t && {end: t}
        }(), n.support.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function(t) {
            setTimeout(t, 1e3 / 60)
        }, n.support.touch = "ontouchstart" in window && navigator.userAgent.toLowerCase().match(/mobile|tablet/) || t.DocumentTouch && document instanceof t.DocumentTouch || t.navigator.msPointerEnabled && t.navigator.msMaxTouchPoints > 0 || t.navigator.pointerEnabled && t.navigator.maxTouchPoints > 0 || !1, n.support.mutationobserver = t.MutationObserver || t.WebKitMutationObserver || null, n.Utils = {}, n.Utils.debounce = function(t, e, i) {
            var n;
            return function() {
                var a = this, o = arguments, r = function() {
                    n = null, i || t.apply(a, o)
                }, s = i && !n;
                clearTimeout(n), n = setTimeout(r, e), s && t.apply(a, o)
            }
        }, n.Utils.removeCssRules = function(t) {
            var e, i, n, a, o, r, s, l, d, c;
            t && setTimeout(function() {
                try {
                    for (c = document.styleSheets, a = 0, s = c.length; s > a; a++) {
                        for (n = c[a], i = [], n.cssRules = n.cssRules, e = o = 0, l = n.cssRules.length; l > o; e = ++o)
                            n.cssRules[e].type === CSSRule.STYLE_RULE && t.test(n.cssRules[e].selectorText) && i.unshift(e);
                        for (r = 0, d = i.length; d > r; r++)
                            n.deleteRule(i[r])
                    }
                } catch (u) {
                }
            }, 0)
        }, n.Utils.isInView = function(t, i) {
            var n = e(t);
            if (!n.is(":visible"))
                return !1;
            var a = o.scrollLeft(), r = o.scrollTop(), s = n.offset(), l = s.left, d = s.top;
            return i = e.extend({topoffset: 0,leftoffset: 0}, i), d + n.height() >= r && d - i.topoffset <= r + o.height() && l + n.width() >= a && l - i.leftoffset <= a + o.width() ? !0 : !1
        }, n.Utils.checkDisplay = function(t) {
            e("[data-uk-margin], [data-uk-grid-match], [data-uk-grid-margin], [data-uk-check-display]", t || document).trigger("uk-check-display")
        }, n.Utils.options = function(t) {
            if (e.isPlainObject(t))
                return t;
            var i = t ? t.indexOf("{") : -1, n = {};
            if (-1 != i)
                try {
                    n = new Function("", "var json = " + t.substr(i) + "; return JSON.parse(JSON.stringify(json));")()
                } catch (a) {
                }
            return n
        }, n.Utils.template = function(t, e) {
            for (var i, n, a, o, r = t.replace(/\n/g, "\\n").replace(/\{\{\{\s*(.+?)\s*\}\}\}/g, "{{!$1}}").split(/(\{\{\s*(.+?)\s*\}\})/g), s = 0, l = [], d = 0; s < r.length; ) {
                if (i = r[s], i.match(/\{\{\s*(.+?)\s*\}\}/))
                    switch (s += 1, i = r[s], n = i[0], a = i.substring(i.match(/^(\^|\#|\!|\~|\:)/) ? 1 : 0), n) {
                        case "~":
                            l.push("for(var $i=0;$i<" + a + ".length;$i++) { var $item = " + a + "[$i];"), d++;
                            break;
                        case ":":
                            l.push("for(var $key in " + a + ") { var $val = " + a + "[$key];"), d++;
                            break;
                        case "#":
                            l.push("if(" + a + ") {"), d++;
                            break;
                        case "^":
                            l.push("if(!" + a + ") {"), d++;
                            break;
                        case "/":
                            l.push("}"), d--;
                            break;
                        case "!":
                            l.push("__ret.push(" + a + ");");
                            break;
                        default:
                            l.push("__ret.push(escape(" + a + "));")
                    }
                else
                    l.push("__ret.push('" + i.replace(/\'/g, "\\'") + "');");
                s += 1
            }
            o = ["var __ret = [];", "try {", "with($data){", d ? '__ret = ["Not all blocks are closed correctly."]' : l.join(""), "};", "}catch(e){__ret = [e.message];}", 'return __ret.join("").replace(/\\n\\n/g, "\\n");', "function escape(html) { return String(html).replace(/&/g, '&amp;').replace(/\"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');}"].join("\n");
            var c = new Function("$data", o);
            return e ? c(e) : c
        }, n.Utils.events = {}, n.Utils.events.click = n.support.touch ? "tap" : "click", e.UIkit = n, e.fn.uk = n.fn, e.UIkit.langdirection = "rtl" == a.attr("dir") ? "right" : "left", n.domObservers = [], n.domObserve = function(t, i) {
            n.support.mutationobserver && e(t).each(function() {
                var t = this;
                try {
                    var a = new n.support.mutationobserver(n.Utils.debounce(function() {
                        i.apply(t, []), e(t).trigger("uk.dom.changed")
                    }, 50));
                    a.observe(t, {childList: !0,subtree: !0})
                } catch (o) {
                }
            })
        }, n.ready = function(t) {
            e(function() {
                t(document)
            }), n.domObservers.push(t)
        }, r.on("uk.domready", function() {
            n.domObservers.forEach(function(t) {
                t(document)
            }), r.trigger("uk.dom.changed")
        }), e(function() {
            setInterval(function() {
                var t = {x: window.pageXOffset,y: window.pageYOffset}, i = function() {
                    (t.x != window.pageXOffset || t.y != window.pageYOffset) && (t = {x: window.pageXOffset,y: window.pageYOffset}, r.trigger("uk-scroll", [t]))
                };
                return e.UIkit.support.touch && r.on("touchmove touchend MSPointerMove MSPointerUp", i), (t.x || t.y) && i(), i
            }(), 15), n.domObserve("[data-uk-observe]", function() {
                var t = this;
                n.domObservers.forEach(function(e) {
                    e(t)
                })
            }), n.support.touch && navigator.userAgent.match(/(iPad|iPhone|iPod)/g) && n.$win.on("load orientationchange resize", n.Utils.debounce(function() {
                var t = function() {
                    return e(".uk-height-viewport").css("height", window.innerHeight), t
                };
                return t()
            }(), 100))
        }), a.addClass(n.support.touch ? "uk-touch" : "uk-notouch"), n.support.touch) {
            var s, l = !1, d = ".uk-overlay, .uk-overlay-toggle, .uk-has-hover";
            r.on("touchstart MSPointerDown", d, function() {
                l && e(".uk-hover").removeClass("uk-hover"), l = e(this).addClass("uk-hover")
            }).on("touchend MSPointerUp", function(t) {
                s = e(t.target).parents(d), l && l.not(s).removeClass("uk-hover")
            })
        }
        return n
    }), function(t, e) {
        "use strict";
        e.components = {}, e.component = function(i, n) {
            var a = function(e, n) {
                var o = this;
                this.element = e ? t(e) : null, this.options = t.extend(!0, {}, this.defaults, n), this.plugins = {}, this.element && this.element.data(i, this), this.init(), (this.options.plugins.length ? this.options.plugins : Object.keys(a.plugins)).forEach(function(t) {
                    a.plugins[t].init && (a.plugins[t].init(o), o.plugins[t] = !0)
                }), this.trigger("init", [this])
            };
            return a.plugins = {}, t.extend(!0, a.prototype, {defaults: {plugins: []},init: function() {
                },on: function() {
                    return t(this.element || this).on.apply(this.element || this, arguments)
                },one: function() {
                    return t(this.element || this).one.apply(this.element || this, arguments)
                },off: function(e) {
                    return t(this.element || this).off(e)
                },trigger: function(e, i) {
                    return t(this.element || this).trigger(e, i)
                },find: function(e) {
                    return this.element ? this.element.find(e) : t([])
                },proxy: function(t, e) {
                    var i = this;
                    e.split(" ").forEach(function(e) {
                        i[e] || (i[e] = function() {
                            return t[e].apply(t, arguments)
                        })
                    })
                },mixin: function(t, e) {
                    var i = this;
                    e.split(" ").forEach(function(e) {
                        i[e] || (i[e] = t[e].bind(i))
                    })
                }}, n), this.components[i] = a, this[i] = function() {
                var n, a;
                if (arguments.length)
                    switch (arguments.length) {
                        case 1:
                            "string" == typeof arguments[0] || arguments[0].nodeType || arguments[0] instanceof jQuery ? n = t(arguments[0]) : a = arguments[0];
                            break;
                        case 2:
                            n = t(arguments[0]), a = arguments[1]
                    }
                return n && n.data(i) ? n.data(i) : new e.components[i](n, a)
            }, a
        }, e.plugin = function(t, e, i) {
            this.components[t].plugins[e] = i
        }
    }(jQuery, jQuery.UIkit), function(t, e) {
        "use strict";
        var i = [];
        e.component("stackMargin", {defaults: {cls: "uk-margin-small-top"},init: function() {
                var n = this;
                this.columns = this.element.children(), this.columns.length && (e.$win.on("resize orientationchange", function() {
                    var i = function() {
                        n.process()
                    };
                    return t(function() {
                        i(), e.$win.on("load", i)
                    }), e.Utils.debounce(i, 50)
                }()), e.$doc.on("uk.dom.changed", function() {
                    n.columns = n.element.children(), n.process()
                }), this.on("uk-check-display", function() {
                    this.element.is(":visible") && this.process()
                }.bind(this)), i.push(this))
            },process: function() {
                var e = this;
                this.revert();
                var i = !1, n = this.columns.filter(":visible:first"), a = n.length ? n.offset().top : !1;
                return a !== !1 ? (this.columns.each(function() {
                    var n = t(this);
                    n.is(":visible") && (i ? n.addClass(e.options.cls) : n.offset().top != a && (n.addClass(e.options.cls), i = !0))
                }), this) : void 0
            },revert: function() {
                return this.columns.removeClass(this.options.cls), this
            }}), e.ready(function(i) {
            t("[data-uk-margin]", i).each(function() {
                var i, n = t(this);
                n.data("stackMargin") || (i = e.stackMargin(n, e.Utils.options(n.attr("data-uk-margin"))))
            })
        })
    }(jQuery, jQuery.UIkit), function(t) {
        function e(t, e, i, n) {
            return Math.abs(t - e) >= Math.abs(i - n) ? t - e > 0 ? "Left" : "Right" : i - n > 0 ? "Up" : "Down"
        }
        function i() {
            d = null, u.last && (u.el.trigger("longTap"), u = {})
        }
        function n() {
            d && clearTimeout(d), d = null
        }
        function a() {
            r && clearTimeout(r), s && clearTimeout(s), l && clearTimeout(l), d && clearTimeout(d), r = s = l = d = null, u = {}
        }
        function o(t) {
            return t.pointerType == t.MSPOINTER_TYPE_TOUCH && t.isPrimary
        }
        var r, s, l, d, c, u = {}, h = 750;
        t(function() {
            var p, f, m, g = 0, v = 0;
            "MSGesture" in window && (c = new MSGesture, c.target = document.body), t(document).bind("MSGestureEnd", function(t) {
                var e = t.originalEvent.velocityX > 1 ? "Right" : t.originalEvent.velocityX < -1 ? "Left" : t.originalEvent.velocityY > 1 ? "Down" : t.originalEvent.velocityY < -1 ? "Up" : null;
                e && (u.el.trigger("swipe"), u.el.trigger("swipe" + e))
            }).on("touchstart MSPointerDown", function(e) {
                ("MSPointerDown" != e.type || o(e.originalEvent)) && (m = "MSPointerDown" == e.type ? e : e.originalEvent.touches[0], p = Date.now(), f = p - (u.last || p), u.el = t("tagName" in m.target ? m.target : m.target.parentNode), r && clearTimeout(r), u.x1 = m.pageX, u.y1 = m.pageY, f > 0 && 250 >= f && (u.isDoubleTap = !0), u.last = p, d = setTimeout(i, h), c && "MSPointerDown" == e.type && c.addPointer(e.originalEvent.pointerId))
            }).on("touchmove MSPointerMove", function(t) {
                ("MSPointerMove" != t.type || o(t.originalEvent)) && (m = "MSPointerMove" == t.type ? t : t.originalEvent.touches[0], n(), u.x2 = m.pageX, u.y2 = m.pageY, g += Math.abs(u.x1 - u.x2), v += Math.abs(u.y1 - u.y2))
            }).on("touchend MSPointerUp", function(i) {
                ("MSPointerUp" != i.type || o(i.originalEvent)) && (n(), u.x2 && Math.abs(u.x1 - u.x2) > 30 || u.y2 && Math.abs(u.y1 - u.y2) > 30 ? l = setTimeout(function() {
                    u.el.trigger("swipe"), u.el.trigger("swipe" + e(u.x1, u.x2, u.y1, u.y2)), u = {}
                }, 0) : "last" in u && (isNaN(g) || 30 > g && 30 > v ? s = setTimeout(function() {
                    var e = t.Event("tap");
                    e.cancelTouch = a, u.el.trigger(e), u.isDoubleTap ? (u.el.trigger("doubleTap"), u = {}) : r = setTimeout(function() {
                        r = null, u.el.trigger("singleTap"), u = {}
                    }, 250)
                }, 0) : u = {}, g = v = 0))
            }).on("touchcancel MSPointerCancel", a), t(window).on("scroll", a)
        }), ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function(e) {
            t.fn[e] = function(i) {
                return t(this).on(e, i)
            }
        })
    }(jQuery), function(t, e) {
        "use strict";
        e.component("alert", {defaults: {fade: !0,duration: 200,trigger: ".uk-alert-close"},init: function() {
                var t = this;
                this.on("click", this.options.trigger, function(e) {
                    e.preventDefault(), t.close()
                })
            },close: function() {
                function t() {
                    e.trigger("closed").remove()
                }
                var e = this.trigger("close");
                this.options.fade ? e.css("overflow", "hidden").css("max-height", e.height()).animate({height: 0,opacity: 0,"padding-top": 0,"padding-bottom": 0,"margin-top": 0,"margin-bottom": 0}, this.options.duration, t) : t()
            }}), e.$doc.on("click.alert.uikit", "[data-uk-alert]", function(i) {
            var n = t(this);
            if (!n.data("alert")) {
                var a = e.alert(n, e.Utils.options(n.data("uk-alert")));
                t(i.target).is(n.data("alert").options.trigger) && (i.preventDefault(), a.close())
            }
        })
    }(jQuery, jQuery.UIkit), function(t, e) {
        "use strict";
        e.component("buttonRadio", {defaults: {target: ".uk-button"},init: function() {
                var e = this;
                this.on("click", this.options.target, function(i) {
                    t(this).is('a[href="#"]') && i.preventDefault(), e.find(e.options.target).not(this).removeClass("uk-active").blur(), e.trigger("change", [t(this).addClass("uk-active")])
                })
            },getSelected: function() {
                return this.find(".uk-active")
            }}), e.component("buttonCheckbox", {defaults: {target: ".uk-button"},init: function() {
                var e = this;
                this.on("click", this.options.target, function(i) {
                    t(this).is('a[href="#"]') && i.preventDefault(), e.trigger("change", [t(this).toggleClass("uk-active").blur()])
                })
            },getSelected: function() {
                return this.find(".uk-active")
            }}), e.component("button", {defaults: {},init: function() {
                var t = this;
                this.on("click", function(e) {
                    t.element.is('a[href="#"]') && e.preventDefault(), t.toggle(), t.trigger("change", [t.element.blur().hasClass("uk-active")])
                })
            },toggle: function() {
                this.element.toggleClass("uk-active")
            }}), e.$doc.on("click.buttonradio.uikit", "[data-uk-button-radio]", function(i) {
            var n = t(this);
            if (!n.data("buttonRadio")) {
                var a = e.buttonRadio(n, e.Utils.options(n.attr("data-uk-button-radio")));
                t(i.target).is(a.options.target) && t(i.target).trigger("click")
            }
        }), e.$doc.on("click.buttoncheckbox.uikit", "[data-uk-button-checkbox]", function(i) {
            var n = t(this);
            if (!n.data("buttonCheckbox")) {
                var a = e.buttonCheckbox(n, e.Utils.options(n.attr("data-uk-button-checkbox"))), o = t(i.target);
                o.is(a.options.target) && n.trigger("change", [o.toggleClass("uk-active").blur()])
            }
        }), e.$doc.on("click.button.uikit", "[data-uk-button]", function() {
            var i = t(this);
            i.data("button") || (e.button(i, e.Utils.options(i.attr("data-uk-button"))), i.trigger("click"))
        })
    }(jQuery, jQuery.UIkit), function(t, e) {
        "use strict";
        var i, n = !1;
        e.component("dropdown", {defaults: {mode: "hover",remaintime: 800,justify: !1,boundary: e.$win,delay: 0},remainIdle: !1,init: function() {
                var a = this;
                this.dropdown = this.find(".uk-dropdown"), this.centered = this.dropdown.hasClass("uk-dropdown-center"), this.justified = this.options.justify ? t(this.options.justify) : !1, this.boundary = t(this.options.boundary), this.flipped = this.dropdown.hasClass("uk-dropdown-flip"), this.boundary.length || (this.boundary = e.$win), "click" == this.options.mode || e.support.touch ? this.on("click", function(e) {
                    var i = t(e.target);
                    i.parents(".uk-dropdown").length || ((i.is("a[href='#']") || i.parent().is("a[href='#']")) && e.preventDefault(), i.blur()), a.element.hasClass("uk-open") ? (i.is("a:not(.js-uk-prevent)") || i.is(".uk-dropdown-close") || !a.dropdown.find(e.target).length) && (a.element.removeClass("uk-open"), n = !1) : a.show()
                }) : this.on("mouseenter", function() {
                    a.remainIdle && clearTimeout(a.remainIdle), i && clearTimeout(i), i = setTimeout(a.show.bind(a), a.options.delay)
                }).on("mouseleave", function() {
                    i && clearTimeout(i), a.remainIdle = setTimeout(function() {
                        a.element.removeClass("uk-open"), a.remainIdle = !1, n && n[0] == a.element[0] && (n = !1)
                    }, a.options.remaintime)
                }).on("click", function(e) {
                    var i = t(e.target);
                    a.remainIdle && clearTimeout(a.remainIdle), (i.is("a[href='#']") || i.parent().is("a[href='#']")) && e.preventDefault(), a.show()
                })
            },show: function() {
                n && n[0] != this.element[0] && n.removeClass("uk-open"), i && clearTimeout(i), this.checkDimensions(), this.element.addClass("uk-open"), this.trigger("uk.dropdown.show", [this]), e.Utils.checkDisplay(this.dropdown), n = this.element, this.registerOuterClick()
            },registerOuterClick: function() {
                var a = this;
                e.$doc.off("click.outer.dropdown"), setTimeout(function() {
                    e.$doc.on("click.outer.dropdown", function(o) {
                        i && clearTimeout(i);
                        var r = t(o.target);
                        n && n[0] == a.element[0] && (r.is("a:not(.js-uk-prevent)") || r.is(".uk-dropdown-close") || !a.dropdown.find(o.target).length) && (n.removeClass("uk-open"), e.$doc.off("click.outer.dropdown"))
                    })
                }, 10)
            },checkDimensions: function() {
                if (this.dropdown.length) {
                    this.justified && this.justified.length && this.dropdown.css("min-width", "");
                    var e = this, i = this.dropdown.css("margin-" + t.UIkit.langdirection, ""), n = i.show().offset(), a = i.outerWidth(), o = this.boundary.width(), r = this.boundary.offset() ? this.boundary.offset().left : 0;
                    if (this.centered && (i.css("margin-" + t.UIkit.langdirection, -1 * (parseFloat(a) / 2 - i.parent().width() / 2)), n = i.offset(), (a + n.left > o || n.left < 0) && (i.css("margin-" + t.UIkit.langdirection, ""), n = i.offset())), this.justified && this.justified.length) {
                        var s = this.justified.outerWidth();
                        if (i.css("min-width", s), "right" == t.UIkit.langdirection) {
                            var l = o - (this.justified.offset().left + s), d = o - (i.offset().left + i.outerWidth());
                            i.css("margin-right", l - d)
                        } else
                            i.css("margin-left", this.justified.offset().left - n.left);
                        n = i.offset()
                    }
                    a + (n.left - r) > o && (i.addClass("uk-dropdown-flip"), n = i.offset()), n.left - r < 0 && (i.addClass("uk-dropdown-stack"), i.hasClass("uk-dropdown-flip") && (this.flipped || (i.removeClass("uk-dropdown-flip"), n = i.offset(), i.addClass("uk-dropdown-flip")), setTimeout(function() {
                        (i.offset().left - r < 0 || !e.flipped && i.outerWidth() + (n.left - r) < o) && i.removeClass("uk-dropdown-flip")
                    }, 0)), this.trigger("uk.dropdown.stack", [this])), i.css("display", "")
                }
            }});
        var a = e.support.touch ? "click" : "mouseenter";
        e.$doc.on(a + ".dropdown.uikit", "[data-uk-dropdown]", function(i) {
            var n = t(this);
            if (!n.data("dropdown")) {
                var o = e.dropdown(n, e.Utils.options(n.data("uk-dropdown")));
                ("click" == a || "mouseenter" == a && "hover" == o.options.mode) && o.element.trigger(a), o.element.find(".uk-dropdown").length && i.preventDefault()
            }
        })
    }(jQuery, jQuery.UIkit), function(t, e) {
        "use strict";
        var i = [];
        e.component("gridMatchHeight", {defaults: {target: !1,row: !0},init: function() {
                var n = this;
                this.columns = this.element.children(), this.elements = this.options.target ? this.find(this.options.target) : this.columns, this.columns.length && (e.$win.on("resize orientationchange", function() {
                    var i = function() {
                        n.match()
                    };
                    return t(function() {
                        i(), e.$win.on("load", i)
                    }), e.Utils.debounce(i, 50)
                }()), e.$doc.on("uk.dom.changed", function() {
                    n.columns = n.element.children(), n.elements = n.options.target ? n.find(n.options.target) : n.columns, n.match()
                }), this.on("uk-check-display", function() {
                    this.element.is(":visible") && this.match()
                }.bind(this)), i.push(this))
            },match: function() {
                this.revert();
                var e = this.columns.filter(":visible:first");
                if (e.length) {
                    var i = Math.ceil(100 * parseFloat(e.css("width")) / parseFloat(e.parent().css("width"))) >= 100 ? !0 : !1, n = this;
                    if (!i)
                        return this.options.row ? (this.element.width(), setTimeout(function() {
                            var e = !1, i = [];
                            n.elements.each(function() {
                                var a = t(this), o = a.offset().top;
                                o != e && i.length && (n.matchHeights(t(i)), i = [], o = a.offset().top), i.push(a), e = o
                            }), i.length && n.matchHeights(t(i))
                        }, 0)) : this.matchHeights(this.elements), this
                }
            },revert: function() {
                return this.elements.css("min-height", ""), this
            },matchHeights: function(e) {
                if (!(e.length < 2)) {
                    var i = 0;
                    e.each(function() {
                        i = Math.max(i, t(this).outerHeight())
                    }).each(function() {
                        var e = t(this), n = i - (e.outerHeight() - e.height());
                        e.css("min-height", n + "px")
                    })
                }
            }}), e.component("gridMargin", {defaults: {cls: "uk-grid-margin"},init: function() {
                e.stackMargin(this.element, this.options)
            }}), e.ready(function(i) {
            t("[data-uk-grid-match],[data-uk-grid-margin]", i).each(function() {
                var i, n = t(this);
                n.is("[data-uk-grid-match]") && !n.data("gridMatchHeight") && (i = e.gridMatchHeight(n, e.Utils.options(n.attr("data-uk-grid-match")))), n.is("[data-uk-grid-margin]") && !n.data("gridMargin") && (i = e.gridMargin(n, e.Utils.options(n.attr("data-uk-grid-margin"))))
            })
        })
    }(jQuery, jQuery.UIkit), function(t, e) {
        "use strict";
        function i(e, i) {
            return i ? ("object" == typeof e ? (e = e instanceof jQuery ? e : t(e), e.parent().length && (i.persist = e, i.persist.data("modalPersistParent", e.parent()))) : e = t("<div></div>").html("string" == typeof e || "number" == typeof e ? e : "$.UIkitt.modal Error: Unsupported data type: " + typeof e), e.appendTo(i.element.find(".uk-modal-dialog")), i) : void 0
        }
        var n, a = !1, o = t("html");
        e.component("modal", {defaults: {keyboard: !0,bgclose: !0,minScrollHeight: 150},scrollable: !1,transition: !1,init: function() {
                n || (n = t("body"));
                var i = this;
                this.transition = e.support.transition, this.dialog = this.find(".uk-modal-dialog"), this.on("click", ".uk-modal-close", function(t) {
                    t.preventDefault(), i.hide()
                }).on("click", function(e) {
                    var n = t(e.target);
                    n[0] == i.element[0] && i.options.bgclose && i.hide()
                })
            },toggle: function() {
                return this[this.isActive() ? "hide" : "show"]()
            },show: function() {
                return this.isActive() ? void 0 : (a && a.hide(!0), this.element.removeClass("uk-open").show(), this.resize(), a = this, o.addClass("uk-modal-page").height(), this.element.addClass("uk-open").trigger("uk.modal.show"), e.Utils.checkDisplay(this.dialog), this)
            },hide: function(t) {
                if (this.isActive()) {
                    if (!t && e.support.transition) {
                        var i = this;
                        this.one(e.support.transition.end, function() {
                            i._hide()
                        }).removeClass("uk-open")
                    } else
                        this._hide();
                    return this
                }
            },resize: function() {
                var t = "padding-" + ("left" == e.langdirection ? "left" : "right"), i = "margin-" + ("left" == e.langdirection ? "left" : "right"), a = n.width();
                this.scrollbarwidth = window.innerWidth - a, o.css(i, -1 * this.scrollbarwidth), this.element.css(t, ""), this.dialog.offset().left > this.scrollbarwidth && this.element.css(t, this.scrollbarwidth - (this.element[0].scrollHeight == window.innerHeight ? 0 : this.scrollbarwidth)), this.updateScrollable()
            },updateScrollable: function() {
                var t = this.dialog.find(".uk-overflow-container:visible:first");
                if (t) {
                    t.css("height", 0);
                    var e = Math.abs(parseInt(this.dialog.css("margin-top"), 10)), i = this.dialog.outerHeight(), n = window.innerHeight, a = n - 2 * (20 > e ? 20 : e) - i;
                    t.css("height", a < this.options.minScrollHeight ? "" : a)
                }
            },_hide: function() {
                this.element.hide().removeClass("uk-open"), o.removeClass("uk-modal-page").css("margin-" + ("left" == e.langdirection ? "left" : "right"), ""), a === this && (a = !1), this.trigger("uk.modal.hide")
            },isActive: function() {
                return a == this
            }}), e.component("modalTrigger", {init: function() {
                var i = this;
                this.options = t.extend({target: i.element.is("a") ? i.element.attr("href") : !1}, this.options), this.modal = e.modal(this.options.target, this.options), this.on("click", function(t) {
                    t.preventDefault(), i.show()
                }), this.proxy(this.modal, "show hide isActive")
            }}), e.modal.dialog = function(n, a) {
            var o = e.modal(t(e.modal.dialog.template).appendTo("body"), a);
            return o.on("uk.modal.hide", function() {
                o.persist && (o.persist.appendTo(o.persist.data("modalPersistParent")), o.persist = !1), o.element.remove()
            }), i(n, o), o
        }, e.modal.dialog.template = '<div class="uk-modal"><div class="uk-modal-dialog"></div></div>', e.modal.alert = function(i, n) {
            e.modal.dialog(['<div class="uk-margin uk-modal-content">' + String(i) + "</div>", '<div class="uk-modal-buttons"><button class="uk-button uk-button-primary uk-modal-close">Ok</button></div>'].join(""), t.extend({bgclose: !1,keyboard: !1}, n)).show()
        }, e.modal.confirm = function(i, n, a) {
            n = t.isFunction(n) ? n : function() {
            };
            var o = e.modal.dialog(['<div class="uk-margin uk-modal-content">' + String(i) + "</div>", '<div class="uk-modal-buttons"><button class="uk-button uk-button-primary js-modal-confirm">Ok</button> <button class="uk-button uk-modal-close">Cancel</button></div>'].join(""), t.extend({bgclose: !1,keyboard: !1}, a));
            o.element.find(".js-modal-confirm").on("click", function() {
                n(), o.hide()
            }), o.show()
        }, e.$doc.on("click.modal.uikit", "[data-uk-modal]", function(i) {
            var n = t(this);
            if (n.is("a") && i.preventDefault(), !n.data("modalTrigger")) {
                var a = e.modalTrigger(n, e.Utils.options(n.attr("data-uk-modal")));
                a.show()
            }
        }), e.$doc.on("keydown.modal.uikit", function(t) {
            a && 27 === t.keyCode && a.options.keyboard && (t.preventDefault(), a.hide())
        }), e.$win.on("resize orientationchange", e.Utils.debounce(function() {
            a && a.resize()
        }, 150))
    }(jQuery, jQuery.UIkit), function(t, e) {
        "use strict";
        var i = {x: window.scrollX,y: window.scrollY}, n = e.$win, a = e.$doc, o = t("html"), r = {show: function(e) {
                if (e = t(e), e.length) {
                    var s = t("body"), l = (n.width(), e.find(".uk-offcanvas-bar:first")), d = "right" == t.UIkit.langdirection, c = l.hasClass("uk-offcanvas-bar-flip") ? -1 : 1, u = c * (d ? -1 : 1);
                    i = {x: window.pageXOffset,y: window.pageYOffset}, e.addClass("uk-active"), s.css({width: window.innerWidth,height: n.height()}).addClass("uk-offcanvas-page"), s.css(d ? "margin-right" : "margin-left", (d ? -1 : 1) * l.outerWidth() * u).width(), o.css("margin-top", -1 * i.y), l.addClass("uk-offcanvas-bar-show"), e.off(".ukoffcanvas").on("click.ukoffcanvas swipeRight.ukoffcanvas swipeLeft.ukoffcanvas", function(e) {
                        var i = t(e.target);
                        if (!e.type.match(/swipe/) && !i.hasClass("uk-offcanvas-close")) {
                            if (i.hasClass("uk-offcanvas-bar"))
                                return;
                            if (i.parents(".uk-offcanvas-bar:first").length)
                                return
                        }
                        e.stopImmediatePropagation(), r.hide()
                    }), a.on("keydown.ukoffcanvas", function(t) {
                        27 === t.keyCode && r.hide()
                    }), a.trigger("uk.offcanvas.show", [e, l])
                }
            },hide: function(e) {
                var n = t("body"), r = t(".uk-offcanvas.uk-active"), s = "right" == t.UIkit.langdirection, l = r.find(".uk-offcanvas-bar:first"), d = function() {
                    n.removeClass("uk-offcanvas-page").css({width: "",height: "","margin-left": "","margin-right": ""}), r.removeClass("uk-active"), l.removeClass("uk-offcanvas-bar-show"), o.css("margin-top", ""), window.scrollTo(i.x, i.y), a.trigger("uk.offcanvas.hide", [r, l])
                };
                r.length && (t.UIkit.support.transition && !e ? (n.one(t.UIkit.support.transition.end, function() {
                    d()
                }).css(s ? "margin-right" : "margin-left", ""), setTimeout(function() {
                    l.removeClass("uk-offcanvas-bar-show")
                }, 0)) : d(), r.off(".ukoffcanvas"), a.off(".ukoffcanvas"))
            }};
        e.component("offcanvasTrigger", {init: function() {
                var e = this;
                this.options = t.extend({target: e.element.is("a") ? e.element.attr("href") : !1}, this.options), this.on("click", function(t) {
                    t.preventDefault(), r.show(e.options.target)
                })
            }}), e.offcanvas = r, a.on("click.offcanvas.uikit", "[data-uk-offcanvas]", function(i) {
            i.preventDefault();
            var n = t(this);
            n.data("offcanvasTrigger") || (e.offcanvasTrigger(n, e.Utils.options(n.attr("data-uk-offcanvas"))), n.trigger("click"))
        })
    }(jQuery, jQuery.UIkit), function(t, e) {
        "use strict";
        function i(e) {
            var i = t(e), n = "auto";
            if (i.is(":visible"))
                n = i.outerHeight();
            else {
                var a = {position: i.css("position"),visibility: i.css("visibility"),display: i.css("display")};
                n = i.css({position: "absolute",visibility: "hidden",display: "block"}).outerHeight(), i.css(a)
            }
            return n
        }
        e.component("nav", {defaults: {toggle: ">li.uk-parent > a[href='#']",lists: ">li.uk-parent > ul",multiple: !1},init: function() {
                var e = this;
                this.on("click", this.options.toggle, function(i) {
                    i.preventDefault();
                    var n = t(this);
                    e.open(n.parent()[0] == e.element[0] ? n : n.parent("li"))
                }), this.find(this.options.lists).each(function() {
                    var i = t(this), n = i.parent(), a = n.hasClass("uk-active");
                    i.wrap('<div style="overflow:hidden;height:0;position:relative;"></div>'), n.data("list-container", i.parent()), a && e.open(n, !0)
                })
            },open: function(e, n) {
                var a = this.element, o = t(e);
                this.options.multiple || a.children(".uk-open").not(e).each(function() {
                    t(this).data("list-container") && t(this).data("list-container").stop().animate({height: 0}, function() {
                        t(this).parent().removeClass("uk-open")
                    })
                }), o.toggleClass("uk-open"), o.data("list-container") && (n ? o.data("list-container").stop().height(o.hasClass("uk-open") ? "auto" : 0) : o.data("list-container").stop().animate({height: o.hasClass("uk-open") ? i(o.data("list-container").find("ul:first")) : 0}))
            }}), e.ready(function(i) {
            t("[data-uk-nav]", i).each(function() {
                var i = t(this);
                i.data("nav") || e.nav(i, e.Utils.options(i.attr("data-uk-nav")))
            })
        })
    }(jQuery, jQuery.UIkit), function(t, e, i) {
        "use strict";
        var n, a, o;
        e.component("tooltip", {defaults: {offset: 5,pos: "top",animation: !1,delay: 0,cls: "",src: function() {
                    return this.attr("title")
                }},tip: "",init: function() {
                var e = this;
                n || (n = t('<div class="uk-tooltip"></div>').appendTo("body")), this.on({focus: function() {
                        e.show()
                    },blur: function() {
                        e.hide()
                    },mouseenter: function() {
                        e.show()
                    },mouseleave: function() {
                        e.hide()
                    }}), this.tip = "function" == typeof this.options.src ? this.options.src.call(this.element) : this.options.src, this.element.attr("data-cached-title", this.element.attr("title")).attr("title", "")
            },show: function() {
                if (a && clearTimeout(a), o && clearTimeout(o), this.tip.length) {
                    n.stop().css({top: -2e3,visibility: "hidden"}).show(), n.html('<div class="uk-tooltip-inner">' + this.tip + "</div>");
                    var e = this, i = t.extend({}, this.element.offset(), {width: this.element[0].offsetWidth,height: this.element[0].offsetHeight}), r = n[0].offsetWidth, s = n[0].offsetHeight, l = "function" == typeof this.options.offset ? this.options.offset.call(this.element) : this.options.offset, d = "function" == typeof this.options.pos ? this.options.pos.call(this.element) : this.options.pos, c = d.split("-"), u = {display: "none",visibility: "visible",top: i.top + i.height + s,left: i.left};
                    if ("fixed" == t("html").css("position") || "fixed" == t("body").css("position")) {
                        var h = t("body").offset(), p = t("html").offset(), f = {top: p.top + h.top,left: p.left + h.left};
                        i.left -= f.left, i.top -= f.top
                    }
                    "left" != c[0] && "right" != c[0] || "right" != t.UIkit.langdirection || (c[0] = "left" == c[0] ? "right" : "left");
                    var m = {bottom: {top: i.top + i.height + l,left: i.left + i.width / 2 - r / 2},top: {top: i.top - s - l,left: i.left + i.width / 2 - r / 2},left: {top: i.top + i.height / 2 - s / 2,left: i.left - r - l},right: {top: i.top + i.height / 2 - s / 2,left: i.left + i.width + l}};
                    t.extend(u, m[c[0]]), 2 == c.length && (u.left = "left" == c[1] ? i.left : i.left + i.width - r);
                    var g = this.checkBoundary(u.left, u.top, r, s);
                    if (g) {
                        switch (g) {
                            case "x":
                                d = 2 == c.length ? c[0] + "-" + (u.left < 0 ? "left" : "right") : u.left < 0 ? "right" : "left";
                                break;
                            case "y":
                                d = 2 == c.length ? (u.top < 0 ? "bottom" : "top") + "-" + c[1] : u.top < 0 ? "bottom" : "top";
                                break;
                            case "xy":
                                d = 2 == c.length ? (u.top < 0 ? "bottom" : "top") + "-" + (u.left < 0 ? "left" : "right") : u.left < 0 ? "right" : "left"
                        }
                        c = d.split("-"), t.extend(u, m[c[0]]), 2 == c.length && (u.left = "left" == c[1] ? i.left : i.left + i.width - r)
                    }
                    u.left -= t("body").position().left, a = setTimeout(function() {
                        n.css(u).attr("class", ["uk-tooltip", "uk-tooltip-" + d, e.options.cls].join(" ")), e.options.animation ? n.css({opacity: 0,display: "block"}).animate({opacity: 1}, parseInt(e.options.animation, 10) || 400) : n.show(), a = !1, o = setInterval(function() {
                            e.element.is(":visible") || e.hide()
                        }, 150)
                    }, parseInt(this.options.delay, 10) || 0)
                }
            },hide: function() {
                this.element.is("input") && this.element[0] === document.activeElement || (a && clearTimeout(a), o && clearTimeout(o), n.stop(), this.options.animation ? n.fadeOut(parseInt(this.options.animation, 10) || 400) : n.hide())
            },content: function() {
                return this.tip
            },checkBoundary: function(t, e, n, a) {
                var o = "";
                return (0 > t || t - i.scrollLeft() + n > window.innerWidth) && (o += "x"), (0 > e || e - i.scrollTop() + a > window.innerHeight) && (o += "y"), o
            }}), e.$doc.on("mouseenter.tooltip.uikit focus.tooltip.uikit", "[data-uk-tooltip]", function() {
            var i = t(this);
            i.data("tooltip") || (e.tooltip(i, e.Utils.options(i.attr("data-uk-tooltip"))), i.trigger("mouseenter"))
        })
    }(jQuery, jQuery.UIkit, jQuery(window)), function(t, e) {
        "use strict";
        e.component("switcher", {defaults: {connect: !1,toggle: ">*",active: 0},init: function() {
                var e = this;
                if (this.on("click", this.options.toggle, function(t) {
                    t.preventDefault(), e.show(this)
                }), this.options.connect) {
                    this.connect = t(this.options.connect).find(".uk-active").removeClass(".uk-active").end(), this.connect.length && this.connect.on("click", "[data-uk-switcher-item]", function(i) {
                        i.preventDefault();
                        var n = t(this).data("ukSwitcherItem");
                        if (e.index != n)
                            switch (n) {
                                case "next":
                                case "previous":
                                    e.show(e.index + ("next" == n ? 1 : -1));
                                    break;
                                default:
                                    e.show(n)
                            }
                    });
                    var i = this.find(this.options.toggle), n = i.filter(".uk-active");
                    n.length ? this.show(n) : (n = i.eq(this.options.active), this.show(n.length ? n : i.eq(0)))
                }
            },show: function(i) {
                i = isNaN(i) ? t(i) : this.find(this.options.toggle).eq(i);
                var n = this, a = i;
                a.hasClass("uk-disabled") || (this.find(this.options.toggle).filter(".uk-active").removeClass("uk-active"), a.addClass("uk-active"), this.options.connect && this.connect.length && (this.index = this.find(this.options.toggle).index(a), -1 == this.index && (this.index = 0), this.connect.each(function() {
                    t(this).children().removeClass("uk-active").eq(n.index).addClass("uk-active"), e.Utils.checkDisplay(this)
                })), this.trigger("uk.switcher.show", [a]))
            }}), e.ready(function(i) {
            t("[data-uk-switcher]", i).each(function() {
                var i = t(this);
                i.data("switcher") || e.switcher(i, e.Utils.options(i.attr("data-uk-switcher")))
            })
        })
    }(jQuery, jQuery.UIkit), function(t, e) {
        "use strict";
        e.component("tab", {defaults: {target: ">li:not(.uk-tab-responsive, .uk-disabled)",connect: !1,active: 0},init: function() {
                var i = this;
                this.on("click", this.options.target, function(e) {
                    e.preventDefault(), i.find(i.options.target).not(this).removeClass("uk-active").blur(), i.trigger("uk.tab.change", [t(this).addClass("uk-active")])
                }), this.options.connect && (this.connect = t(this.options.connect)), this.responsivetab = t('<li class="uk-tab-responsive uk-active"><a></a></li>').append('<div class="uk-dropdown uk-dropdown-small"><ul class="uk-nav uk-nav-dropdown"></ul><div>'), this.responsivetab.dropdown = this.responsivetab.find(".uk-dropdown"), this.responsivetab.lst = this.responsivetab.dropdown.find("ul"), this.responsivetab.caption = this.responsivetab.find("a:first"), this.element.hasClass("uk-tab-bottom") && this.responsivetab.dropdown.addClass("uk-dropdown-up"), this.responsivetab.lst.on("click", "a", function(e) {
                    e.preventDefault(), e.stopPropagation();
                    var n = t(this);
                    i.element.children(":not(.uk-tab-responsive)").eq(n.data("index")).trigger("click")
                }), this.on("uk.switcher.show uk.tab.change", function(t, e) {
                    i.responsivetab.caption.html(e.text())
                }), this.element.append(this.responsivetab), this.options.connect && e.switcher(this.element, {toggle: ">li:not(.uk-tab-responsive)",connect: this.options.connect,active: this.options.active}), e.dropdown(this.responsivetab, {mode: "click"}), i.trigger("uk.tab.change", [this.element.find(this.options.target).filter(".uk-active")]), this.check(), e.$win.on("resize orientationchange", e.Utils.debounce(function() {
                    i.check()
                }, 100))
            },check: function() {
                var e = this.element.children(":not(.uk-tab-responsive)").removeClass("uk-hidden");
                if (!(e.length < 2)) {
                    var i, n, a = e.eq(0).offset().top + Math.ceil(e.eq(0).height() / 2), o = !1;
                    if (this.responsivetab.lst.empty(), e.each(function() {
                        t(this).offset().top > a && (o = !0)
                    }), o)
                        for (var r = 0; r < e.length; r++)
                            i = e.eq(r), n = i.find("a"), "none" == i.css("float") || i.attr("uk-dropdown") || (i.addClass("uk-hidden"), i.hasClass("uk-disabled") || this.responsivetab.lst.append('<li><a href="' + n.attr("href") + '" data-index="' + r + '">' + n.html() + "</a></li>"));
                    this.responsivetab[this.responsivetab.lst.children().length ? "removeClass" : "addClass"]("uk-hidden")
                }
            }}), e.ready(function(i) {
            t("[data-uk-tab]", i).each(function() {
                var i = t(this);
                i.data("tab") || e.tab(i, e.Utils.options(i.attr("data-uk-tab")))
            })
        })
    }(jQuery, jQuery.UIkit), function(t, e) {
        "use strict";
        var i = e.$win, n = e.$doc, a = [], o = function() {
            for (var t = 0; t < a.length; t++)
                e.support.requestAnimationFrame.apply(window, [a[t].check])
        };
        e.component("scrollspy", {defaults: {cls: "uk-scrollspy-inview",initcls: "uk-scrollspy-init-inview",topoffset: 0,leftoffset: 0,repeat: !1,delay: 0},init: function() {
                var t, i, n, o = this, r = function() {
                    var a = e.Utils.isInView(o.element, o.options);
                    a && !i && (t && clearTimeout(t), n || (o.element.addClass(o.options.initcls), o.offset = o.element.offset(), n = !0, o.trigger("uk.scrollspy.init")), t = setTimeout(function() {
                        a && o.element.addClass("uk-scrollspy-inview").addClass(o.options.cls).width()
                    }, o.options.delay), i = !0, o.trigger("uk.scrollspy.inview")), !a && i && o.options.repeat && (o.element.removeClass("uk-scrollspy-inview").removeClass(o.options.cls), i = !1, o.trigger("uk.scrollspy.outview"))
                };
                r(), this.check = r, a.push(this)
            }});
        var r = [], s = function() {
            for (var t = 0; t < r.length; t++)
                e.support.requestAnimationFrame.apply(window, [r[t].check])
        };
        e.component("scrollspynav", {defaults: {cls: "uk-active",closest: !1,topoffset: 0,leftoffset: 0,smoothscroll: !1},init: function() {
                var n, a = [], o = this.find("a[href^='#']").each(function() {
                    a.push(t(this).attr("href"))
                }), s = t(a.join(",")), l = this, d = function() {
                    n = [];
                    for (var t = 0; t < s.length; t++)
                        e.Utils.isInView(s.eq(t), l.options) && n.push(s.eq(t));
                    if (n.length) {
                        var a = i.scrollTop(), r = function() {
                            for (var t = 0; t < n.length; t++)
                                if (n[t].offset().top >= a)
                                    return n[t]
                        }();
                        if (!r)
                            return;
                        l.options.closest ? o.closest(l.options.closest).removeClass(l.options.cls).end().filter("a[href='#" + r.attr("id") + "']").closest(l.options.closest).addClass(l.options.cls) : o.removeClass(l.options.cls).filter("a[href='#" + r.attr("id") + "']").addClass(l.options.cls)
                    }
                };
                this.options.smoothscroll && e.smoothScroll && o.each(function() {
                    e.smoothScroll(this, l.options.smoothscroll)
                }), d(), this.element.data("scrollspynav", this), this.check = d, r.push(this)
            }});
        var l = function() {
            o(), s()
        };
        n.on("uk-scroll", l), i.on("resize orientationchange", e.Utils.debounce(l, 50)), e.ready(function(i) {
            t("[data-uk-scrollspy]", i).each(function() {
                var i = t(this);
                i.data("scrollspy") || e.scrollspy(i, e.Utils.options(i.attr("data-uk-scrollspy")))
            }), t("[data-uk-scrollspy-nav]", i).each(function() {
                var i = t(this);
                i.data("scrollspynav") || e.scrollspynav(i, e.Utils.options(i.attr("data-uk-scrollspy-nav")))
            })
        })
    }(jQuery, jQuery.UIkit), function(t, e) {
        "use strict";
        e.component("smoothScroll", {defaults: {duration: 1e3,transition: "easeOutExpo",offset: 0,complete: function() {
                }},init: function() {
                var i = this;
                this.on("click", function() {
                    var n = t(t(this.hash).length ? this.hash : "body"), a = n.offset().top - i.options.offset, o = e.$doc.height(), r = e.$win.height();
                    return n.outerHeight(), a + r > o && (a = o - r), t("html,body").stop().animate({scrollTop: a}, i.options.duration, i.options.transition).promise().done(i.options.complete), !1
                })
            }}), t.easing.easeOutExpo || (t.easing.easeOutExpo = function(t, e, i, n, a) {
            return e == a ? i + n : n * (-Math.pow(2, -10 * e / a) + 1) + i
        }), e.$doc.on("click.smooth-scroll.uikit", "[data-uk-smooth-scroll]", function() {
            var i = t(this);
            return i.data("smoothScroll") || (e.smoothScroll(i, e.Utils.options(i.attr("data-uk-smooth-scroll"))), i.trigger("click")), !1
        })
    }(jQuery, jQuery.UIkit), function(t, e, i) {
        var n = [];
        i.component("toggle", {defaults: {target: !1,cls: "uk-hidden"},init: function() {
                var t = this;
                this.getTogglers(), this.on("click", function(e) {
                    t.element.is('a[href="#"]') && e.preventDefault(), t.toggle()
                }), n.push(this)
            },toggle: function() {
                this.totoggle.length && (this.totoggle.toggleClass(this.options.cls), "uk-hidden" == this.options.cls && i.Utils.checkDisplay(this.totoggle))
            },getTogglers: function() {
                this.totoggle = this.options.target ? e(this.options.target) : []
            }}), i.ready(function(t) {
            e("[data-uk-toggle]", t).each(function() {
                var t = e(this);
                t.data("toggle") || i.toggle(t, i.Utils.options(t.attr("data-uk-toggle")))
            }), setTimeout(function() {
                n.forEach(function(t) {
                    t.getTogglers()
                })
            }, 0)
        })
    }(this, jQuery, jQuery.UIkit)
} catch (e) {
    console.error("Error in file:/templates/drmichaels/warp/js/uikit.min.js; Error:" + e.message)
}
try {
    !function(t) {
        "use strict";
        t(document).ready(function() {
            var e = t("html").data("config") || {};
            if (t("article[data-permalink]").socialButtons(e), t(".menu-sidebar").accordionMenu({mode: "slide",transition: "easeOutQuad",duration: 500,display: "show"}), t(".uk-nav-offcanvas .level1.parent").addClass("uk-nav-offcanvas"), t("#menu").dropdownMenu({mode: "height",dropdownSelector: "div.dropdown",transition: "easeOutExpo",duration: 500}), t(".menu-dropdown li a.level1, .menu-dropdown li a.level2, .menu-dropdown li a.level3, .menu-dropdown li a.level4, #offcanvas .canvas-menu a").each(function() {
                for (var e = t(this), i = e.attr("class").split(" "), n = 0; n < i.length; ++n) {
                    var a = i[n];
                    (0 == a.indexOf("icon-") || 0 == a.indexOf("7s-")) && (e.prepend('<i class="uk-' + a + '"></i>'), e.removeClass(a).addClass("has-icon"))
                }
            }), t(".email span.icon-envelope").removeClass("icon-envelope").addClass("uk-icon-envelope-o"), t(".print span.icon-print").removeClass("icon-print").addClass("uk-icon-print"), t("p.links").each(function() {
                var e = t(this);
                e.children().eq(0).addClass("uk-button uk-button-color"), e.children().eq(1).addClass("uk-button uk-button-default")
            }), t(".mod-color").closest("section").addClass("at-mod-color"), t(".mod-overlay").closest(".at-parent").addClass("overlay-margin"), t(".mod-color").parents(".uk-modal-dialog").addClass("mod-color"), t(".mod-dark").parents(".uk-modal-dialog").addClass("mod-dark"), t(".mod-box.mod-overlay").children("div").addClass("custom-module"), t(".mod-overlay.mod-padding").children(".custom-module").addClass("mod-padding"), t(".showhide li").length > 0) {
                var i = t(".showhide li");
                i.each(function() {
                    var e = t(this);
                    "block" === e.children("div").css("display") ? e.children("h3").prev().addClass("uk-icon-minus") : "none" === e.children("div").css("display") && e.children("h3").prev().addClass("uk-icon-plus"), e.children("h3").click(function() {
                        e.children("div").slideToggle(700, "easeOutQuint", function() {
                            "block" === e.children("div").css("display") ? e.children("h3").prev().addClass("uk-icon-minus").removeClass("uk-icon-plus") : "none" === e.children("div").css("display") && e.children("h3").prev().addClass("uk-icon-plus").removeClass("uk-icon-minus")
                        })
                    })
                })
            }
            t(".comment-head img, .zoo-comments-list img").each(function() {
                var e = t(this);
                e.addClass("uk-thumbnail")
            }), t(".element-itemtag a, .zoo-tagcloud a, .moduleItemTags a, p.taxonomy a, div.tags a, .k2TagCloudBlock a").each(function(e, i) {
                var n = t(this), a = t(i).html(), o = '<span class="tag">' + a + "</span>";
                n.html(o), n.addClass("tag-body")
            }), t(".block-number").each(function(e, i) {
                var n = t(i).html(), a = '<span class="digit">' + n + '</span><span class="bottom"></span>';
                t(this).html(a)
            }), t(".uk-event-time").each(function(e, i) {
                var n = t(i).html(), a = n.split(":"), o = '<span class="uk-event-date">' + a[0] + '</span><span class="uk-event-month">' + a[1] + "</span>";
                t(this).html(o), t(this).parent().addClass("uk-event")
            }), t("#totop-scroller").length && t().UItoTop({scrollSpeed: 700,easingType: "easeOutQuint"}), t("p").each(function() {
                var e = t(this);
                0 === e.html().replace(/\s|&nbsp;/g, "").length && e.remove()
            }), t("a[data-spotlight] img").each(function() {
                t(this).load(function() {
                    t(this).next(".overlay-default").addClass("uk-icon-plus-circle").css("line-height", t(this).height() + "px")
                })
            }), t(".module.modal-small").each(function() {
                t(this).closest(".uk-modal-dialog").addClass("md-small")
            }), t(".module.modal-large").each(function() {
                t(this).closest(".uk-modal-dialog").addClass("md-large")
            }), t(".uk-badge.badge-primary").addClass("uk-badge"), t(".uk-badge.badge-danger").addClass("uk-badge-danger").parent().removeClass("badge-danger"), t(".uk-badge.badge-success").addClass("uk-badge-success").parent().removeClass("badge-success"), t(".uk-badge.badge-warning").addClass("uk-badge-warning").parent().removeClass("badge-warning"), t(".deepest > .uk-badge").each(function() {
                for (var e = t(this).parent().attr("class").split(" "), i = 0; i < e.length; ++i) {
                    var n = e[i];
                    0 != n.indexOf("deepest") && t(this).text(n)
                }
            }), t(".mod-box.colored li.level2.active").closest("div").addClass("open-menu"), t(".mod-box .menu-sidebar a.level1 > span, .mod-box .menu-sidebar span.level1 > span").append('<i class="uk-float-right uk-icon-chevron-right"></i>'), t(".menu-dropdown").each(function(e, i) {
                new t.UIkit.scrollspynav(i, {smoothscroll: {closest: "li",offset: 120}})
            })
        }), t.onMediaQuery("(min-width: 960px)", {init: function() {
                this.supported || (this.matches = !0)
            },valid: function() {
                t.matchWidth("grid-block", ".grid-block", ".grid-h").match(), t.matchHeight("main", "#maininner, #sidebar-a, #sidebar-b").match(), t.matchHeight("top-a", "#top-a .grid-h", ".deepest").match(), t.matchHeight("top-b", "#top-b .grid-h", ".deepest").match(), t.matchHeight("bottom-a", "#bottom-a .grid-h", ".deepest").match(), t.matchHeight("bottom-b", "#bottom-b .grid-h", ".deepest").match(), t.matchHeight("bottom-c", "#bottom-c .grid-h", ".deepest").match(), t.matchHeight("innertop-a", "#innertop-a .grid-h", ".deepest").match(), t.matchHeight("innertop-b", "#innertop-b .grid-h", ".deepest").match(), t.matchHeight("innerbottom-a", "#innerbottom-a .grid-h", ".deepest").match(), t.matchHeight("innerbottom-b", "#innerbottom-b .grid-h", ".deepest").match()
            },invalid: function() {
                t.matchWidth("grid-block").remove(), t.matchHeight("main").remove(), t.matchHeight("top-a").remove(), t.matchHeight("top-b").remove(), t.matchHeight("bottom-a").remove(), t.matchHeight("bottom-b").remove(), t.matchHeight("bottom-c").remove(), t.matchHeight("innertop-a").remove(), t.matchHeight("innertop-b").remove(), t.matchHeight("innerbottom-a").remove(), t.matchHeight("innerbottom-b").remove()
            }});
        var e = [];
        t.onMediaQuery("(min-width: 480px) and (max-width: 959px)", {valid: function() {
                t.matchHeight("sidebars", ".sidebars-2 #sidebar-a, .sidebars-2 #sidebar-b").match(), e = [], t.each([".sidebars-1 #sidebar-a > .grid-box", ".sidebars-1 #sidebar-b > .grid-box", "#top-a .grid-h", "#top-b .grid-h", "#bottom-a .grid-h", "#bottom-b .grid-h", "#innertop .grid-h", "#innerbottom .grid-h", "#bottom-c .grid-h", "#bottom-d .grid-h"], function(i, n) {
                    for (var i = 0, a = t(n), o = parseInt(a.length / 2); o > i; i++) {
                        var r = "pair-" + e.length;
                        t.matchHeight(r, [a.get(2 * i), a.get(2 * i + 1)], ".deepest").match(), e.push(r)
                    }
                })
            },invalid: function() {
                t.matchHeight("sidebars").remove(), t.each(e, function() {
                    t.matchHeight(this).remove()
                })
            }}), t.onMediaQuery("(max-width: 767px)", {valid: function() {
                var e = t("#header-responsive");
                e.length || (e = t('<div id="header-responsive"/>').prependTo("#header"), t("#logo").clone().removeAttr("id").addClass("logo").appendTo(e), t("#at-navbar").clone().removeAttr("id").addClass("at-navbar").appendTo(e), t("#header-right").clone().removeAttr("id").addClass("header-right").appendTo(e))
            }}), t.onMediaQuery("(min-width: 768px)", {valid: function() {
                t(window).load(function() {
                    t(".fixed-header").sticky({topSpacing: 0})
                })
            }})
    }(jQuery), function(t) {
        for (var e = [{str: navigator.userAgent,sub: "Chrome",ver: "Chrome",name: "chrome"}, {str: navigator.vendor,sub: "Apple",ver: "Version",name: "safari"}, {prop: window.opera,ver: "Opera",name: "opera"}, {str: navigator.userAgent,sub: "Firefox",ver: "Firefox",name: "firefox"}, {str: navigator.userAgent,sub: "MSIE",ver: "MSIE",name: "ie"}], i = 0; i < e.length; i++)
            if (e[i].str && -1 != e[i].str.indexOf(e[i].sub) || e[i].prop) {
                var n = function(t) {
                    var n = t.indexOf(e[i].ver);
                    return -1 != n ? parseInt(t.substring(n + e[i].ver.length + 1)) : ""
                };
                t("html").addClass(e[i].name + " " + e[i].name + n(navigator.userAgent) || n(navigator.appVersion));
                break
            }
    }(jQuery), function(t) {
        t.fn.UItoTop = function(e) {
            var i = {text: "",min: 200,inDelay: 600,outDelay: 400,containerID: "toTop",containerHoverID: "toTopHover",scrollSpeed: 1e3,easingType: "linear"}, n = t.extend(i, e), a = "#" + n.containerID, o = "#" + n.containerHoverID;
            t("body").append('<a href="#" class="uk-icon-angle-up" title="" id="' + n.containerID + '">' + n.text + "</a>"), t(a).hide().click(function() {
                return t("html, body").animate({scrollTop: 0}, n.scrollSpeed, n.easingType), t("#" + n.containerHoverID, this).stop().animate({opacity: 0}, n.inDelay, n.easingType), !1
            }).prepend('<span id="' + n.containerHoverID + '"></span>').hover(function() {
                t(o, this).stop().animate({opacity: 1}, 600, "linear")
            }, function() {
                t(o, this).stop().animate({opacity: 0}, 700, "linear")
            }), t(window).scroll(function() {
                var e = t(window).scrollTop();
                "undefined" == typeof document.body.style.maxHeight && t(a).css({position: "absolute",top: t(window).scrollTop() + t(window).height() - 50}), e > n.min ? t(a).fadeIn(n.inDelay) : t(a).fadeOut(n.Outdelay)
            })
        }
    }(jQuery), function(t) {
        var e = {topSpacing: 0,bottomSpacing: 0,className: "is-sticky",wrapperClassName: "sticky-wrapper",center: !1,getWidthFrom: ""}, i = t(window), n = t(document), a = [], o = i.height(), r = function() {
            for (var e = i.scrollTop(), r = n.height(), s = r - o, l = e > s ? s - e : 0, d = 0; d < a.length; d++) {
                var c = a[d], u = c.stickyWrapper.offset().top, h = u - c.topSpacing - l;
                if (h >= e)
                    null !== c.currentTop && (c.stickyElement.css("position", "").css("top", ""), c.stickyElement.parent().removeClass(c.className), c.currentTop = null);
                else {
                    var p = r - c.stickyElement.outerHeight() - c.topSpacing - c.bottomSpacing - e - l;
                    0 > p ? p += c.topSpacing : p = c.topSpacing, c.currentTop != p && (c.stickyElement.css("position", "fixed").css("top", p), "undefined" != typeof c.getWidthFrom && c.stickyElement.css("width", t(c.getWidthFrom).width()), c.stickyElement.parent().addClass(c.className), c.currentTop = p)
                }
            }
        }, s = function() {
            o = i.height()
        }, l = {init: function(i) {
                var n = t.extend(e, i);
                return this.each(function() {
                    var e = t(this), i = e.attr("id"), o = t("<div></div>").attr("id", i + "-sticky-wrapper").addClass(n.wrapperClassName);
                    e.wrapAll(o), n.center && e.parent().css({width: e.outerWidth(),marginLeft: "auto",marginRight: "auto"}), "right" == e.css("float") && e.css({"float": "none"}).parent().css({"float": "right"});
                    var r = e.parent();
                    r.css("height", e.outerHeight()), a.push({topSpacing: n.topSpacing,bottomSpacing: n.bottomSpacing,stickyElement: e,currentTop: null,stickyWrapper: r,className: n.className,getWidthFrom: n.getWidthFrom})
                })
            },update: r};
        window.addEventListener ? (window.addEventListener("scroll", r, !1), window.addEventListener("resize", s, !1)) : window.attachEvent && (window.attachEvent("onscroll", r), window.attachEvent("onresize", s)), t.fn.sticky = function(e) {
            return l[e] ? l[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void t.error("Method " + e + " does not exist on jQuery.sticky") : l.init.apply(this, arguments)
        }, t(function() {
            setTimeout(r, 0)
        })
    }(jQuery)
} catch (e) {
    console.error("Error in file:/templates/drmichaels/js/template.js; Error:" + e.message)
}
try {
    var setREVStartSize = function() {
        var t = new Object;
        if (t.startwidth = 1200, t.startheight = 500, t.container = jQuery("#rev_slider_1_1"), t.fullScreen = "off", t.forceFullWidth = "off", t.container.closest(".rev_slider_wrapper").css({height: t.container.height()}), t.width = parseInt(t.container.width(), 0), t.height = parseInt(t.container.height(), 0), t.bw = t.width / t.startwidth, t.bh = t.height / t.startheight, t.bh > t.bw && (t.bh = t.bw), t.bh < t.bw && (t.bw = t.bh), t.bw < t.bh && (t.bh = t.bw), t.bh > 1 && (t.bw = 1, t.bh = 1), t.bw > 1 && (t.bw = 1, t.bh = 1), t.height = Math.round(t.startheight * (t.width / t.startwidth)), t.height > t.startheight && "on" != t.autoHeight && (t.height = t.startheight), "on" == t.fullScreen) {
            t.height = t.bw * t.startheight;
            var e = (t.container.parent().width(), jQuery(window).height());
            if (void 0 != t.fullScreenOffsetContainer)
                try {
                    var i = t.fullScreenOffsetContainer.split(",");
                    jQuery.each(i, function(i, n) {
                        e -= jQuery(n).outerHeight(!0), e < t.minFullScreenHeight && (e = t.minFullScreenHeight)
                    })
                } catch (n) {
                }
            t.container.parent().height(e), t.container.height(e), t.container.closest(".rev_slider_wrapper").height(e), t.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(e), t.container.css({height: "100%"}), t.height = e
        } else
            t.container.height(t.height), t.container.closest(".rev_slider_wrapper").height(t.height), t.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(t.height)
    };
    setREVStartSize();
    var tpj = jQuery;
    tpj.noConflict();
    var revapi1;
    tpj(document).ready(function() {
        void 0 == tpj("#rev_slider_1_1").revolution ? revslider_showDoubleJqueryError("#rev_slider_1_1") : revapi1 = tpj("#rev_slider_1_1").show().revolution({dottedOverlay: "none",delay: 5e3,startwidth: 1200,startheight: 500,hideThumbs: 200,thumbWidth: 100,thumbHeight: 50,thumbAmount: 5,simplifyAll: "off",navigationType: "none",navigationArrows: "solo",navigationStyle: "round",touchenabled: "on",onHoverStop: "on",nextSlideOnWindowFocus: "off",swipe_threshold: .2,swipe_min_touches: 1,drag_block_vertical: !1,keyboardNavigation: "off",navigationHAlign: "right",navigationVAlign: "bottom",navigationHOffset: 0,navigationVOffset: 20,soloArrowLeftHalign: "right",soloArrowLeftValign: "bottom",soloArrowLeftHOffset: 73,soloArrowLeftVOffset: 20,soloArrowRightHalign: "right",soloArrowRightValign: "bottom",soloArrowRightHOffset: 30,soloArrowRightVOffset: 20,shadow: 0,fullWidth: "on",fullScreen: "off",spinner: "spinner4",stopLoop: "off",stopAfterLoops: -1,stopAtSlide: -1,shuffle: "on",autoHeight: "off",forceFullWidth: "off",hideTimerBar: "on",hideThumbsOnMobile: "on",hideBulletsOnMobile: "on",hideArrowsOnMobile: "on",hideThumbsUnderResolution: 0,hideSliderAtLimit: 0,hideCaptionAtLimit: 0,hideAllCaptionAtLilmit: 0,startWithSlide: 0,isJoomla: !0})
    })
} catch (e) {
    console.error("Error in script declaration; Error:" + e.message)
}
try {
    !function(t, e, i, n, a, o, r) {
        t.GoogleAnalyticsObject = a, t[a] = t[a] || function() {
            (t[a].q = t[a].q || []).push(arguments)
        }, t[a].l = 1 * new Date, o = e.createElement(i), r = e.getElementsByTagName(i)[0], o.async = 1, o.src = n, r.parentNode.insertBefore(o, r)
    }(window, document, "script", "//www.google-analytics.com/analytics.js", "ga"), ga("create", "UA-33239921-2", "drmichaels.com"), ga("send", "pageview")
} catch (e) {
    console.error("Error in script declaration; Error:" + e.message)
}
try {
    !function(t) {
        t(document).on("ready", function() {
        })
    }(jQuery)
} catch (e) {
    console.error("Error in script declaration; Error:" + e.message)
}
