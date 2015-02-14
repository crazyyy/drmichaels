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
    !function(t) {
        t(document).on("ready", function() {
        })
    }(jQuery)
} catch (e) {
    console.error("Error in script declaration; Error:" + e.message)
}