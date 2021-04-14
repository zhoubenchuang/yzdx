(function(t) {
    function e(e) {
        for (var a, l, v = e[0], n = e[1], x = e[2], r = 0, y = []; r < v.length; r++) l = v[r], Object.prototype.hasOwnProperty.call(i, l) && i[l] && y.push(i[l][0]), i[l] = 0;
        for (a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
        o && o(e);
        while (y.length) y.shift()();
        return u.push.apply(u, x || []), c()
    }

    function c() {
        for (var t, e = 0; e < u.length; e++) {
            for (var c = u[e], a = !0, l = 1; l < c.length; l++) {
                var v = c[l];
                0 !== i[v] && (a = !1)
            }
            a && (u.splice(e--, 1), t = n(n.s = c[0]))
        }
        return t
    }
    var a = {},
        l = {
            app: 0
        },
        i = {
            app: 0
        },
        u = [];

    function v(t) {
        return n.p + "js/" + ({
            "dx-affairs": "dx-affairs",
            "dx-campus": "dx-campus",
            "dx-dean": "dx-dean",
            "dx-ehall": "dx-ehall",
            "dx-novel": "dx-novel",
            "dx-service": "dx-service",
            "dx-stay": "dx-stay"
        }[t] || t) + "." + {
            "dx-affairs": "07153939",
            "dx-campus": "32046a79",
            "dx-dean": "44390526",
            "dx-ehall": "96f5b791",
            "dx-novel": "eee57031",
            "dx-service": "99121139",
            "dx-stay": "6718275d"
        }[t] + ".js"
    }

    function n(e) {
        if (a[e]) return a[e].exports;
        var c = a[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(c.exports, c, c.exports, n), c.l = !0, c.exports
    }
    n.e = function(t) {
        var e = [],
            c = {
                "dx-affairs": 1,
                "dx-campus": 1,
                "dx-dean": 1,
                "dx-ehall": 1,
                "dx-novel": 1,
                "dx-service": 1,
                "dx-stay": 1
            };
        l[t] ? e.push(l[t]) : 0 !== l[t] && c[t] && e.push(l[t] = new Promise((function(e, c) {
            for (var a = "css/" + ({
                    "dx-affairs": "dx-affairs",
                    "dx-campus": "dx-campus",
                    "dx-dean": "dx-dean",
                    "dx-ehall": "dx-ehall",
                    "dx-novel": "dx-novel",
                    "dx-service": "dx-service",
                    "dx-stay": "dx-stay"
                }[t] || t) + "." + {
                    "dx-affairs": "b6bc5762",
                    "dx-campus": "4ada8d45",
                    "dx-dean": "f3991a67",
                    "dx-ehall": "1ea67ba3",
                    "dx-novel": "534cdbfa",
                    "dx-service": "6627cb21",
                    "dx-stay": "9e294c07"
                }[t] + ".css", i = n.p + a, u = document.getElementsByTagName("link"), v = 0; v < u.length; v++) {
                var x = u[v],
                    r = x.getAttribute("data-href") || x.getAttribute("href");
                if ("stylesheet" === x.rel && (r === a || r === i)) return e()
            }
            var y = document.getElementsByTagName("style");
            for (v = 0; v < y.length; v++) {
                x = y[v], r = x.getAttribute("data-href");
                if (r === a || r === i) return e()
            }
            var o = document.createElement("link");
            o.rel = "stylesheet", o.type = "text/css", o.onload = e, o.onerror = function(e) {
                var a = e && e.target && e.target.src || i,
                    u = new Error("Loading CSS chunk " + t + " failed.\n(" + a + ")");
                u.code = "CSS_CHUNK_LOAD_FAILED", u.request = a, delete l[t], o.parentNode.removeChild(o), c(u)
            }, o.href = i;
            var s = document.getElementsByTagName("head")[0];
            s.appendChild(o)
        })).then((function() {
            l[t] = 0
        })));
        var a = i[t];
        if (0 !== a)
            if (a) e.push(a[2]);
            else {
                var u = new Promise((function(e, c) {
                    a = i[t] = [e, c]
                }));
                e.push(a[2] = u);
                var x, r = document.createElement("script");
                r.charset = "utf-8", r.timeout = 120, n.nc && r.setAttribute("nonce", n.nc), r.src = v(t);
                var y = new Error;
                x = function(e) {
                    r.onerror = r.onload = null, clearTimeout(o);
                    var c = i[t];
                    if (0 !== c) {
                        if (c) {
                            var a = e && ("load" === e.type ? "missing" : e.type),
                                l = e && e.target && e.target.src;
                            y.message = "Loading chunk " + t + " failed.\n(" + a + ": " + l + ")", y.name = "ChunkLoadError", y.type = a, y.request = l, c[1](y)
                        }
                        i[t] = void 0
                    }
                };
                var o = setTimeout((function() {
                    x({
                        type: "timeout",
                        target: r
                    })
                }), 12e4);
                r.onerror = r.onload = x, document.head.appendChild(r)
            }
        return Promise.all(e)
    }, n.m = t, n.c = a, n.d = function(t, e, c) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: c
        })
    }, n.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var c = Object.create(null);
        if (n.r(c), Object.defineProperty(c, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var a in t) n.d(c, a, function(e) {
                return t[e]
            }.bind(null, a));
        return c
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "/yzdx/", n.oe = function(t) {
        throw console.error(t), t
    };
    var x = window["webpackJsonp"] = window["webpackJsonp"] || [],
        r = x.push.bind(x);
    x.push = e, x = x.slice();
    for (var y = 0; y < x.length; y++) e(x[y]);
    var o = r;
    u.push([0, "chunk-vendors"]), c()
})({
    0: function(t, e, c) {
        t.exports = c("56d7")
    },
    "237b": function(t, e, c) {
        "use strict";
        var a = c("61e8"),
            l = c.n(a);
        l.a
    },
    2539: function(t, e, c) {},
    "25bf": function(t, e, c) {
        "use strict";
        var a = c("ab60"),
            l = c.n(a);
        l.a
    },
    "2b6c": function(t, e, c) {},
    "2c56": function(t, e, c) {
        "use strict";
        c.d(e, "e", (function() {
            return l
        })), c.d(e, "i", (function() {
            return i
        })), c.d(e, "g", (function() {
            return u
        })), c.d(e, "f", (function() {
            return v
        })), c.d(e, "c", (function() {
            return r
        })), c.d(e, "b", (function() {
            return n
        })), c.d(e, "h", (function() {
            return x
        })), c.d(e, "a", (function() {
            return y
        })), c.d(e, "d", (function() {
            return o
        }));
        var a = c("b775"),
            l = function() {
                return Object(a["a"])({
                    url: "/affairs/leave",
                    method: "get"
                })
            },
            i = function(t, e) {
                return Object(a["a"])({
                    url: "/affairs/vaccine",
                    method: "post",
                    data: {
                        inject: t,
                        type: e
                    }
                })
            },
            u = function(t) {
                return Object(a["a"])({
                    url: "/affairs/leave/read/".concat(t),
                    method: "get"
                })
            },
            v = function() {
                return Object(a["a"])({
                    url: "/affairs/leave/prev",
                    method: "get"
                })
            },
            n = function(t, e) {
                return Object(a["a"])({
                    url: "/affairs/leave/create",
                    method: "post",
                    data: {
                        data: t,
                        other: e
                    }
                })
            },
            x = function(t, e, c) {
                return Object(a["a"])({
                    url: "/affairs/leave/update/".concat(t),
                    method: "post",
                    data: {
                        data: e,
                        other: c
                    }
                })
            },
            r = function(t) {
                return Object(a["a"])({
                    url: "/affairs/leave/delete/".concat(t),
                    method: "post"
                })
            },
            y = function(t) {
                return Object(a["a"])({
                    url: "/affairs/leave/back/".concat(t),
                    method: "post"
                })
            },
            o = function(t) {
                return Object(a["a"])({
                    url: "/affairs/leave/generate/".concat(t),
                    method: "post"
                })
            }
    },
    "2daa": function(t, e, c) {
        "use strict";
        c.d(e, "a", (function() {
            return a
        })), c.d(e, "b", (function() {
            return l
        })), c.d(e, "c", (function() {
            return i
        }));
       
    },
    "3e92": function(t, e, c) {
        "use strict";
        c.d(e, "a", (function() {
            return l
        })), c.d(e, "b", (function() {
            return i
        })), c.d(e, "c", (function() {
            return u
        }));
        c("96cf"), c("1da1");
        var a = c("b775"),
            l = function() {
                return Object(a["a"])({
                    url: "/ehall/basic",
                    method: "get"
                })
            },
            i = function(t) {
                return Object(a["a"])({
                    url: "/ehall/confirmCode",
                    method: "post",
                    data: {
                        code: t
                    }
                })
            },
            u = function() {
                return Object(a["a"])({
                    url: "/ehall/avatar",
                    method: "get"
                })
            }
    },
    4360: function(t, e, c) {
        "use strict";
        var a = {};
        c.r(a), c.d(a, "UserModel", (function() {
            return p
        })), c.d(a, "UserInfo", (function() {
            return h
        })), c.d(a, "BindInfo", (function() {
            return d
        })), c.d(a, "UserRole", (function() {
            return f
        })), c.d(a, "NewsList", (function() {
            return m
        })), c.d(a, "ClassTable", (function() {
            return z
        })), c.d(a, "ScoreList", (function() {
            return b
        })), c.d(a, "EleData", (function() {
            return M
        })), c.d(a, "WorkStuApply", (function() {
            return F
        })), c.d(a, "TL", (function() {
            return w
        }));
        var l = {};
        c.r(l), c.d(l, "GetScore", (function() {
            return k
        })), c.d(l, "GetCourse", (function() {
            return H
        })), c.d(l, "ReportHealth", (function() {
            return j
        })), c.d(l, "GetLeave", (function() {
            return R
        })), c.d(l, "GetPrevLeave", (function() {
            return D
        })), c.d(l, "CancelLeave", (function() {
            return U
        })), c.d(l, "CreateLeave", (function() {
            return N
        })), c.d(l, "UpdateLeave", (function() {
            return $
        })), c.d(l, "ReadLeave", (function() {
            return I
        })), c.d(l, "DownloadLeave", (function() {
            return P
        })), c.d(l, "BackLeave", (function() {
            return Z
        })), c.d(l, "GetPrevUserInfo", (function() {
            return G
        })), c.d(l, "CheckSubscribe", (function() {
            return Y
        })), c.d(l, "CreateForm", (function() {
            return K
        })), c.d(l, "GetStayMe", (function() {
            return Q
        })), c.d(l, "BackHome", (function() {
            return X
        })), c.d(l, "ReportStayHealth", (function() {
            return tt
        })), c.d(l, "IsReportStayHealth", (function() {
            return et
        })), c.d(l, "GetEhallBasic", (function() {
            return at
        })), c.d(l, "ConfirmEhallUserCode", (function() {
            return lt
        })), c.d(l, "CreateCheckIn", (function() {
            return L
        })), c.d(l, "Login", (function() {
            return ut
        })), c.d(l, "OauthLogin", (function() {
            return vt
        })), c.d(l, "handleLogin", (function() {
            return nt
        })), c.d(l, "GetStuSignList", (function() {
            return xt
        })), c.d(l, "AddStuAttend", (function() {
            return rt
        })), c.d(l, "GetSignRole", (function() {
            return yt
        })), c.d(l, "GetTeaSignList", (function() {
            return ot
        })), c.d(l, "GetTeaSignListForDate", (function() {
            return st
        })), c.d(l, "AddSignTask", (function() {
            return pt
        })), c.d(l, "GetNewsColumn", (function() {
            return ht
        })), c.d(l, "GetNews", (function() {
            return dt
        })), c.d(l, "GetEle", (function() {
            return ft
        })), c.d(l, "ModifyDorm", (function() {
            return mt
        })), c.d(l, "LeaveAdvance", (function() {
            return zt
        })), c.d(l, "GetApplyItems", (function() {
            return bt
        })), c.d(l, "WorkStuSign", (function() {
            return Mt
        })), c.d(l, "WorkBestowTeaIndex", (function() {
            return Ft
        })), c.d(l, "WorkBestowTeaQuery", (function() {
            return wt
        })), c.d(l, "WorkBestowTeaReport", (function() {
            return gt
        })), c.d(l, "WorkBestowTeaLeave", (function() {
            return _t
        }));
        var i, u = c("2b0e"),
            v = c("2f62"),
            n = c("ade3"),
            x = c("2909"),
            r = c("9fb0"),
            y = c("6b43"),
            o = (i = {}, Object(n["a"])(i, r["SET_USER_MODEL"], (function(t, e) {
                Object(y["b"])(r["SET_USER_MODEL"], e), t.UserModel = e
            })), Object(n["a"])(i, r["SET_USER_INFO"], (function(t, e) {
                Object(y["b"])(r["SET_USER_INFO"], e), t.UserInfo = e
            })), Object(n["a"])(i, r["SET_TL"], (function(t, e) {
                Object(y["b"])(r["SET_TL"], e), t.TL = e
            })), Object(n["a"])(i, r["SET_BIND_INFO"], (function(t, e) {
                Object(y["b"])(r["SET_BIND_INFO"], e), t.BindInfo = e
            })), Object(n["a"])(i, r["SET_USER_ROLE"], (function(t, e) {
                Object(y["b"])(r["SET_USER_ROLE"], e), t.UserRole = e
            })), Object(n["a"])(i, r["SET_NEWS_LIST"], (function(t, e) {
                var c, a = e.type,
                    l = e.items;
                (c = t.NewsList[a]).push.apply(c, Object(x["a"])(l))
            })), Object(n["a"])(i, r["SET_SCORE_LIST"], (function(t, e) {
                t.ScoreList = e
            })), Object(n["a"])(i, r["SET_CLASS_TABLE"], (function(t, e) {
                t.ClassTable = e
            })), Object(n["a"])(i, r["SET_ELE_DATA"], (function(t, e) {
                t.EleData = e
            })), Object(n["a"])(i, r["SUBMIT_ON"], (function(t) {
                t.FormSubmit = !0
            })), Object(n["a"])(i, r["SUBMIT_OFF"], (function(t) {
                t.FormSubmit = !1
            })), Object(n["a"])(i, r["SET_WORK_STU_APPLY"], (function(t, e) {
                t.WorkStuApply = e
            })), i),
            s = o,
            p = function(t) {
                return t.UserModel
            },
            h = function(t) {
                return t.UserInfo
            },
            d = function(t) {
                return t.BindInfo
            },
            f = function(t) {
                return t.UserRole
            },
            m = function(t) {
                return t.NewsList
            },
            z = function(t) {
                return t.ClassTable
            },
            b = function(t) {
                return t.ScoreList
            },
            M = function(t) {
                return t.EleData
            },
            F = function(t) {
                return t.WorkStuApply
            },
            w = function(t) {
                return t.TL
            },
            g = c("8468"),
            _ = c("5530"),
            S = (c("96cf"), c("1da1")),
            V = c("b775"),
            B = function() {
                return Object(V["a"])({
                    url: "/user/getUserInfo",
                    method: "get"
                })
            },
            C = function() {
                return Object(V["a"])({
                    url: "/v1/score",
                    method: "get"
                })
            },
            O = function() {
                return Object(V["a"])({
                    url: "/v1/course",
                    method: "get"
                })
            },
            E = c("63b4"),
            k = function() {
                var t = Object(S["a"])(regeneratorRuntime.mark((function t(e) {
                    var c, a, l;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                if (c = e.commit, a = e.state, t.prev = 1, !a.FormSubmit) {
                                    t.next = 4;
                                    break
                                }
                                return t.abrupt("return", {});
                            case 4:
                                return c(r["SUBMIT_ON"]), t.next = 7, C();
                            case 7:
                                return l = t.sent, t.abrupt("return", l.data.data);
                            case 11:
                                throw t.prev = 11, t.t0 = t["catch"](1), t.t0;
                            case 14:
                                return t.prev = 14, c(r["SUBMIT_OFF"]), t.finish(14);
                            case 17:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [1, 11, 14, 17]
                    ])
                })));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }(),
            H = function() {
                var t = Object(S["a"])(regeneratorRuntime.mark((function t(e) {
                    var c, a, l;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                if (c = e.commit, a = e.state, t.prev = 1, !a.FormSubmit) {
                                    t.next = 4;
                                    break
                                }
                                return t.abrupt("return", {});
                            case 4:
                                return c(r["SUBMIT_ON"]), t.next = 7, O();
                            case 7:
                                l = t.sent, c(r["SET_CLASS_TABLE"], l.data.data), t.next = 14;
                                break;
                            case 11:
                                throw t.prev = 11, t.t0 = t["catch"](1), "获取课程表失败";
                            case 14:
                                return t.prev = 14, c(r["SUBMIT_OFF"]), t.finish(14);
                            case 17:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [1, 11, 14, 17]
                    ])
                })));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }(),
            T = (c("b0c0"), c("7550")),
            j = function() {
                var t = Object(S["a"])(regeneratorRuntime.mark((function t(e, c) {
                    var a, l, i, u, v;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                if (a = e.commit, l = e.state, i = c.temperature, u = c.remark, t.prev = 2, !l.FormSubmit) {
                                    t.next = 5;
                                    break
                                }
                                return t.abrupt("return", {});
                            case 5:
                                return a(r["SUBMIT_ON"]), t.next = 8, Object(T["i"])({
                                    temperature: i,
                                    remark: u
                                });
                            case 8:
                                return v = t.sent, t.abrupt("return", v.data.data);
                            case 12:
                                throw t.prev = 12, t.t0 = t["catch"](2), t.t0;
                            case 15:
                                return t.prev = 15, a(r["SUBMIT_OFF"]), t.finish(15);
                            case 18:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [2, 12, 15, 18]
                    ])
                })));
                return function(e, c) {
                    return t.apply(this, arguments)
                }
            }(),
            L = function() {
                var t = Object(S["a"])(regeneratorRuntime.mark((function t(e, c) {
                    var a, l, i, u, v, n, x, y, o, s, p;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                if (a = e.commit, l = e.state, i = c.name, u = c.college, v = c.datetime, n = c.vehicle, x = c.vehicle_info, y = c.local_info, o = c.arrival_station, s = c.car, t.prev = 2, !l.FormSubmit) {
                                    t.next = 5;
                                    break
                                }
                                return t.abrupt("return", {});
                            case 5:
                                return a(r["SUBMIT_ON"]), t.next = 8, Object(T["g"])({
                                    name: i,
                                    college: u,
                                    datetime: v,
                                    vehicle: n,
                                    vehicle_info: x,
                                    local_info: y,
                                    arrival_station: o,
                                    car: s
                                });
                            case 8:
                                return p = t.sent, t.abrupt("return", p.data.data);
                            case 12:
                                throw t.prev = 12, t.t0 = t["catch"](2), t.t0;
                            case 15:
                                return t.prev = 15, a(r["SUBMIT_OFF"]), t.finish(15);
                            case 18:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [2, 12, 15, 18]
                    ])
                })));
                return function(e, c) {
                    return t.apply(this, arguments)
                }
            }(),
            A = c("2c56"),
            R = function() {
                var t = Object(S["a"])(regeneratorRuntime.mark((function t(e) {
                    var c, a;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                return c = e.commit, t.prev = 1, c(r["SUBMIT_ON"]), t.next = 5, Object(A["e"])();
                            case 5:
                                return a = t.sent, t.abrupt("return", a.data.data);
                            case 9:
                                throw t.prev = 9, t.t0 = t["catch"](1), t.t0;
                            case 12:
                                return t.prev = 12, c(r["SUBMIT_OFF"]), t.finish(12);
                            case 15:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [1, 9, 12, 15]
                    ])
                })));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }(),
            I = function() {
                var t = Object(S["a"])(regeneratorRuntime.mark((function t(e, c) {
                    var a, l;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                return a = e.commit, t.prev = 1, a(r["SUBMIT_ON"]), t.next = 5, Object(A["g"])(c);
                            case 5:
                                return l = t.sent, t.abrupt("return", l.data.data);
                            case 9:
                                throw t.prev = 9, t.t0 = t["catch"](1), t.t0;
                            case 12:
                                return t.prev = 12, a(r["SUBMIT_OFF"]), t.finish(12);
                            case 15:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [1, 9, 12, 15]
                    ])
                })));
                return function(e, c) {
                    return t.apply(this, arguments)
                }
            }(),
            D = function() {
                var t = Object(S["a"])(regeneratorRuntime.mark((function t(e) {
                    var c, a;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                return c = e.commit, t.prev = 1, c(r["SUBMIT_ON"]), t.next = 5, Object(A["f"])();
                            case 5:
                                return a = t.sent, t.abrupt("return", a.data.data);
                            case 9:
                                throw t.prev = 9, t.t0 = t["catch"](1), t.t0;
                            case 12:
                                return t.prev = 12, c(r["SUBMIT_OFF"]), t.finish(12);
                            case 15:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [1, 9, 12, 15]
                    ])
                })));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }(),
            U = function() {
                var t = Object(S["a"])(regeneratorRuntime.mark((function t(e, c) {
                    var a, l;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                if (a = e.commit, l = e.state, t.prev = 1, !l.FormSubmit) {
                                    t.next = 4;
                                    break
                                }
                                return t.abrupt("return", {});
                            case 4:
                                return a(r["SUBMIT_ON"]), t.next = 7, Object(A["c"])(c);
                            case 7:
                                t.next = 12;
                                break;
                            case 9:
                                throw t.prev = 9, t.t0 = t["catch"](1), t.t0;
                            case 12:
                                return t.prev = 12, a(r["SUBMIT_OFF"]), t.finish(12);
                            case 15:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [1, 9, 12, 15]
                    ])
                })));
                return function(e, c) {
                    return t.apply(this, arguments)
                }
            }(),
            N = function() {
                var t = Object(S["a"])(regeneratorRuntime.mark((function t(e, c) {
                    var a, l, i, u;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                if (a = e.commit, l = e.state, i = c.data, u = c.other, t.prev = 2, !l.FormSubmit) {
                                    t.next = 5;
                                    break
                                }
                                return t.abrupt("return", {});
                            case 5:
                                return a(r["SUBMIT_ON"]), t.next = 8, Object(A["b"])(i, u);
                            case 8:
                                t.next = 13;
                                break;
                            case 10:
                                throw t.prev = 10, t.t0 = t["catch"](2), t.t0;
                            case 13:
                                return t.prev = 13, a(r["SUBMIT_OFF"]), t.finish(13);
                            case 16:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [2, 10, 13, 16]
                    ])
                })));
                return function(e, c) {
                    return t.apply(this, arguments)
                }
            }(),
            $ = function() {
                var t = Object(S["a"])(regeneratorRuntime.mark((function t(e, c) {
                    var a, l, i, u, v;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                if (a = e.commit, l = e.state, i = c.id, u = c.data, v = c.other, t.prev = 2, !l.FormSubmit) {
                                    t.next = 5;
                                    break
                                }
                                return t.abrupt("return", {});
                            case 5:
                                return a(r["SUBMIT_ON"]), t.next = 8, Object(A["h"])(i, u, v);
                            case 8:
                                t.next = 13;
                                break;
                            case 10:
                                throw t.prev = 10, t.t0 = t["catch"](2), t.t0;
                            case 13:
                                return t.prev = 13, a(r["SUBMIT_OFF"]), t.finish(13);
                            case 16:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [2, 10, 13, 16]
                    ])
                })));
                return function(e, c) {
                    return t.apply(this, arguments)
                }
            }(),
            P = function() {
                var t = Object(S["a"])(regeneratorRuntime.mark((function t(e, c) {
                    var a, l, i;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                if (a = e.commit, l = e.state, t.prev = 1, !l.FormSubmit) {
                                    t.next = 4;
                                    break
                                }
                                return t.abrupt("return", {});
                            case 4:
                                return a(r["SUBMIT_ON"]), t.next = 7, Object(A["d"])(c);
                            case 7:
                                return i = t.sent, t.abrupt("return", i.data.data);
                            case 11:
                                throw t.prev = 11, t.t0 = t["catch"](1), t.t0;
                            case 14:
                                return t.prev = 14, a(r["SUBMIT_OFF"]), t.finish(14);
                            case 17:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [1, 11, 14, 17]
                    ])
                })));
                return function(e, c) {
                    return t.apply(this, arguments)
                }
            }(),
            Z = function() {
                var t = Object(S["a"])(regeneratorRuntime.mark((function t(e, c) {
                    var a, l, i;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                if (a = e.commit, l = e.state, t.prev = 1, !l.FormSubmit) {
                                    t.next = 4;
                                    break
                                }
                                return t.abrupt("return", {});
                            case 4:
                                return a(r["SUBMIT_ON"]), t.next = 7, Object(A["a"])(c);
                            case 7:
                                return i = t.sent, t.abrupt("return", i.data.data);
                            case 11:
                                throw t.prev = 11, t.t0 = t["catch"](1), t.t0;
                            case 14:
                                return t.prev = 14, a(r["SUBMIT_OFF"]), t.finish(14);
                            case 17:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [1, 11, 14, 17]
                    ])
                })));
                return function(e, c) {
                    return t.apply(this, arguments)
                }
            }(),
            q = function(t) {
                return Object(V["a"])({
                    url: "/form/userInfo/".concat(t),
                    method: "get"
                })
            },
            W = function(t, e) {
                return Object(V["a"])({
                    url: "/form/create/".concat(t),
                    method: "post",
                    data: {
                        data: e
                    }
                })
            },
            G = function() {
                var t = Object(S["a"])(regeneratorRuntime.mark((function t(e, c) {
                    var a, l, i;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                if (a = e.commit, l = e.state, t.prev = 1, !l.FormSubmit) {
                                    t.next = 4;
                                    break
                                }
                                return t.abrupt("return", {});
                            case 4:
                                return a(r["SUBMIT_ON"]), t.next = 7, q(c);
                            case 7:
                                return i = t.sent, t.abrupt("return", i.data);
                            case 11:
                                throw t.prev = 11, t.t0 = t["catch"](1), t.t0;
                            case 14:
                                return t.prev = 14, a(r["SUBMIT_OFF"]), t.finish(14);
                            case 17:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [1, 11, 14, 17]
                    ])
                })));
                return function(e, c) {
                    return t.apply(this, arguments)
                }
            }(),
            Y = function() {
                var t = Object(S["a"])(regeneratorRuntime.mark((function t(e, c) {
                    var a, l, i;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                if (a = e.commit, l = e.state, t.prev = 1, !l.FormSubmit) {
                                    t.next = 4;
                                    break
                                }
                                return t.abrupt("return", {});
                            case 4:
                                return a(r["SUBMIT_ON"]), t.next = 7, checkSubscribe(c);
                            case 7:
                                return i = t.sent, t.abrupt("return", i.data);
                            case 11:
                                throw t.prev = 11, t.t0 = t["catch"](1), t.t0;
                            case 14:
                                return t.prev = 14, a(r["SUBMIT_OFF"]), t.finish(14);
                            case 17:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [1, 11, 14, 17]
                    ])
                })));
                return function(e, c) {
                    return t.apply(this, arguments)
                }
            }(),
            K = function() {
                var t = Object(S["a"])(regeneratorRuntime.mark((function t(e, c) {
                    var a, l, i, u, v;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                if (a = e.commit, l = e.state, i = c.id, u = c.data, t.prev = 2, !l.FormSubmit) {
                                    t.next = 5;
                                    break
                                }
                                return t.abrupt("return", {});
                            case 5:
                                return a(r["SUBMIT_ON"]), t.next = 8, W(i, u);
                            case 8:
                                return v = t.sent, t.abrupt("return", v.data.data);
                            case 12:
                                throw t.prev = 12, t.t0 = t["catch"](2), t.t0;
                            case 15:
                                return t.prev = 15, a(r["SUBMIT_OFF"]), t.finish(15);
                            case 18:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [2, 12, 15, 18]
                    ])
                })));
                return function(e, c) {
                    return t.apply(this, arguments)
                }
            }(),
            J = c("6407"),
            Q = function() {
                var t = Object(S["a"])(regeneratorRuntime.mark((function t(e) {
                    var c, a;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                return c = e.commit, t.prev = 1, c(r["SUBMIT_ON"]), t.next = 5, Object(J["f"])();
                            case 5:
                                return a = t.sent, t.abrupt("return", a.data.data);
                            case 9:
                                throw t.prev = 9, t.t0 = t["catch"](1), t.t0;
                            case 12:
                                return t.prev = 12, c(r["SUBMIT_OFF"]), t.finish(12);
                            case 15:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [1, 9, 12, 15]
                    ])
                })));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }(),
            X = function() {
                var t = Object(S["a"])(regeneratorRuntime.mark((function t(e) {
                    var c, a, l;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                if (c = e.commit, a = e.state, t.prev = 1, !a.FormSubmit) {
                                    t.next = 4;
                                    break
                                }
                                return t.abrupt("return", {});
                            case 4:
                                return c(r["SUBMIT_ON"]), t.next = 7, Object(J["e"])();
                            case 7:
                                return l = t.sent, t.abrupt("return", l.data.data);
                            case 11:
                                throw t.prev = 11, t.t0 = t["catch"](1), t.t0;
                            case 14:
                                return t.prev = 14, c(r["SUBMIT_OFF"]), t.finish(14);
                            case 17:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [1, 11, 14, 17]
                    ])
                })));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }(),
            tt = function() {
                var t = Object(S["a"])(regeneratorRuntime.mark((function t(e, c) {
                    var a, l, i, u;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                if (a = e.commit, l = e.state, i = c.gps, t.prev = 2, !l.FormSubmit) {
                                    t.next = 5;
                                    break
                                }
                                return t.abrupt("return", {});
                            case 5:
                                return a(r["SUBMIT_ON"]), t.next = 8, Object(J["g"])({
                                    gps: i
                                });
                            case 8:
                                return u = t.sent, t.abrupt("return", u.data.data);
                            case 12:
                                throw t.prev = 12, t.t0 = t["catch"](2), t.t0;
                            case 15:
                                return t.prev = 15, a(r["SUBMIT_OFF"]), t.finish(15);
                            case 18:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [2, 12, 15, 18]
                    ])
                })));
                return function(e, c) {
                    return t.apply(this, arguments)
                }
            }(),
            et = function() {
                var t = Object(S["a"])(regeneratorRuntime.mark((function t(e) {
                    var c, a, l;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                if (c = e.commit, a = e.state, t.prev = 1, !a.FormSubmit) {
                                    t.next = 4;
                                    break
                                }
                                return t.abrupt("return", {});
                            case 4:
                                return c(r["SUBMIT_ON"]), t.next = 7, Object(J["d"])();
                            case 7:
                                return l = t.sent, t.abrupt("return", l.data.data);
                            case 11:
                                throw t.prev = 11, t.t0 = t["catch"](1), t.t0;
                            case 14:
                                return t.prev = 14, c(r["SUBMIT_OFF"]), t.finish(14);
                            case 17:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [1, 11, 14, 17]
                    ])
                })));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }(),
            ct = c("3e92"),
            at = function() {
                var t = Object(S["a"])(regeneratorRuntime.mark((function t(e) {
                    var c, a;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                return c = e.commit, t.prev = 1, c(r["SUBMIT_ON"]), t.next = 5, Object(ct["a"])();
                            case 5:
                                return a = t.sent, t.abrupt("return", a.data.data);
                            case 9:
                                throw t.prev = 9, t.t0 = t["catch"](1), t.t0;
                            case 12:
                                return t.prev = 12, c(r["SUBMIT_OFF"]), t.finish(12);
                            case 15:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [1, 9, 12, 15]
                    ])
                })));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }(),
            lt = function() {
                var t = Object(S["a"])(regeneratorRuntime.mark((function t(e, c) {
                    var a, l, i;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                return a = e.commit, l = c.code, t.prev = 2, a(r["SUBMIT_ON"]), t.next = 6, Object(ct["b"])(l);
                            case 6:
                                return i = t.sent, t.abrupt("return", i.data.data);
                            case 10:
                                throw t.prev = 10, t.t0 = t["catch"](2), t.t0;
                            case 13:
                                return t.prev = 13, a(r["SUBMIT_OFF"]), t.finish(13);
                            case 16:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [2, 10, 13, 16]
                    ])
                })));
                return function(e, c) {
                    return t.apply(this, arguments)
                }
            }(),
            it = E["a"].$create({
                type: "loading",
                txt: "",
                time: 0
            }),
            ut = function() {
                var t = Object(S["a"])(regeneratorRuntime.mark((function t(e, c) {
                    var a;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                return a = e.dispatch, c.username, c.password, t.prev = 2, t.abrupt("return", a("handleLogin", res));
                            case 6:
                                throw t.prev = 6, t.t0 = t["catch"](2), "登录失败";
                            case 9:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [2, 6]
                    ])
                })));
                return function(e, c) {
                    return t.apply(this, arguments)
                }
            }(),
            vt = function() {
                var t = Object(S["a"])(regeneratorRuntime.mark((function t(e) {
                    var c, a;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                return c = e.dispatch, t.prev = 1, t.next = 4, B();
                            case 4:
                                return a = t.sent, t.next = 7, c("handleLogin", a);
                            case 7:
                                return t.abrupt("return", a.data.data);
                            case 10:
                                throw t.prev = 10, t.t0 = t["catch"](1), "易班授权登录失败";
                            case 13:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [1, 10]
                    ])
                })));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }(),
            nt = function() {
                var t = Object(S["a"])(regeneratorRuntime.mark((function t(e, c) {
                    var a, l, i;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                a = e.commit, l = c.data.data, i = Object(_["a"])({}, l.userModel, {
                                    jwtToken: c.headers["x-access-token"]
                                }), a(r["SET_USER_MODEL"], i), a(r["SET_USER_INFO"], l.userInfo), a(r["SET_BIND_INFO"], l.bindInfo), a(r["SET_TL"], l.tl);
                            case 7:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })));
                return function(e, c) {
                    return t.apply(this, arguments)
                }
            }(),
            xt = function() {
                var t = Object(S["a"])(regeneratorRuntime.mark((function t() {
                    return regeneratorRuntime.wrap((function(t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                return t.prev = 0, it.show(), t.abrupt("return", res.data.data);
                            case 5:
                                return t.prev = 5, t.t0 = t["catch"](0), t.abrupt("return", {});
                            case 8:
                                return t.prev = 8, it.hide(), t.finish(8);
                            case 11:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [0, 5, 8, 11]
                    ])
                })));
                return function() {
                    return t.apply(this, arguments)
                }
            }(),
            rt = function() {
                var t = Object(S["a"])(regeneratorRuntime.mark((function t(e, c) {
                    var a, l;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                if (a = e.commit, l = e.state, t.prev = 1, !l.FormSubmit) {
                                    t.next = 4;
                                    break
                                }
                                return t.abrupt("return", {});
                            case 4:
                                return it.show(), a(r["SUBMIT_ON"]), t.abrupt("return", res.data.data);
                            case 9:
                                t.prev = 9, t.t0 = t["catch"](1);
                            case 11:
                                return t.prev = 11, it.hide(), a(r["SUBMIT_OFF"]), t.finish(11);
                            case 15:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [1, 9, 11, 15]
                    ])
                })));
                return function(e, c) {
                    return t.apply(this, arguments)
                }
            }(),
            yt = function() {
                var t = Object(S["a"])(regeneratorRuntime.mark((function t(e) {
                    var c;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                c = e.commit, t.prev = 1, c(r["SET_USER_ROLE"], res.data.data), t.next = 8;
                                break;
                            case 5:
                                throw t.prev = 5, t.t0 = t["catch"](1), "获取教师权限失败";
                            case 8:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [1, 5]
                    ])
                })));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }(),
            ot = function() {
                var t = Object(S["a"])(regeneratorRuntime.mark((function t(e, c) {
                    return regeneratorRuntime.wrap((function(t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                return Object(g["a"])(e), t.prev = 1, it.show(), t.abrupt("return", res.data.data);
                            case 6:
                                throw t.prev = 6, t.t0 = t["catch"](1), "获取教师数据失败";
                            case 9:
                                return t.prev = 9, it.hide(), t.finish(9);
                            case 12:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [1, 6, 9, 12]
                    ])
                })));
                return function(e, c) {
                    return t.apply(this, arguments)
                }
            }(),
            st = function() {
                var t = Object(S["a"])(regeneratorRuntime.mark((function t(e, c) {
                    return regeneratorRuntime.wrap((function(t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                return Object(g["a"])(e), t.prev = 1, it.show(), t.abrupt("return", res.data.data);
                            case 6:
                                throw t.prev = 6, t.t0 = t["catch"](1), "获取教师数据失败";
                            case 9:
                                return t.prev = 9, it.hide(), t.finish(9);
                            case 12:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [1, 6, 9, 12]
                    ])
                })));
                return function(e, c) {
                    return t.apply(this, arguments)
                }
            }(),
            pt = function() {
                var t = Object(S["a"])(regeneratorRuntime.mark((function t(e, c) {
                    var a, l;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                if (a = e.commit, l = e.state, t.prev = 1, !l.FormSubmit) {
                                    t.next = 4;
                                    break
                                }
                                return t.abrupt("return", {});
                            case 4:
                                return it.show(), a(r["SUBMIT_ON"]), t.abrupt("return", res.data.data);
                            case 9:
                                throw t.prev = 9, t.t0 = t["catch"](1), "创建签到任务失败";
                            case 12:
                                return t.prev = 12, it.hide(), a(r["SUBMIT_OFF"]), t.finish(12);
                            case 16:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [1, 9, 12, 16]
                    ])
                })));
                return function(e, c) {
                    return t.apply(this, arguments)
                }
            }(),
            ht = function() {
                var t = Object(S["a"])(regeneratorRuntime.mark((function t(e, c) {
                    var a, l, i;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                a = e.commit, l = c.type, c.limit, c.page, t.prev = 2, i = {
                                    data: {
                                        data: []
                                    }
                                }, a(r["SET_NEWS_LIST"], "xxgw" === l || "hyap" === l ? {
                                    type: l,
                                    items: i.data.data.content
                                } : {
                                    type: l,
                                    items: i.data.data
                                }), t.next = 10;
                                break;
                            case 7:
                                throw t.prev = 7, t.t0 = t["catch"](2), "获取新闻列表失败";
                            case 10:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [2, 7]
                    ])
                })));
                return function(e, c) {
                    return t.apply(this, arguments)
                }
            }(),
            dt = function() {
                var t = Object(S["a"])(regeneratorRuntime.mark((function t(e, c) {
                    return regeneratorRuntime.wrap((function(t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                return e.commit, t.prev = 1, it.show(), t.abrupt("return", res.data.data);
                            case 6:
                                throw t.prev = 6, t.t0 = t["catch"](1), "获取新闻资讯失败";
                            case 9:
                                return t.prev = 9, it.hide(), t.finish(9);
                            case 12:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [1, 6, 9, 12]
                    ])
                })));
                return function(e, c) {
                    return t.apply(this, arguments)
                }
            }(),
            ft = function() {
                var t = Object(S["a"])(regeneratorRuntime.mark((function t(e) {
                    var c, a, l;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                c = e.commit, a = e.state, t.prev = 1, it.show(), l = a.BindInfo.dorm.status, l && c(r["SET_ELE_DATA"], res.data.data), t.next = 10;
                                break;
                            case 7:
                                throw t.prev = 7, t.t0 = t["catch"](1), "获取用电数据失败";
                            case 10:
                                return t.prev = 10, it.hide(), t.finish(10);
                            case 13:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [1, 7, 10, 13]
                    ])
                })));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }(),
            mt = function() {
                var t = Object(S["a"])(regeneratorRuntime.mark((function t(e, c) {
                    var a, l, i;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                return a = e.commit, l = e.state, c.campus, c.room, t.prev = 2, it.show(), l.UserModel.dxid, i = Object(_["a"])({}, l.BindInfo, {
                                    dorm: res.data.data
                                }), a(r["SET_BIND_INFO"], i), t.abrupt("return", i.dorm);
                            case 10:
                                throw t.prev = 10, t.t0 = t["catch"](2), "修改宿舍失败";
                            case 13:
                                return t.prev = 13, it.hide(), t.finish(13);
                            case 16:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [2, 10, 13, 16]
                    ])
                })));
                return function(e, c) {
                    return t.apply(this, arguments)
                }
            }(),
            zt = function() {
                var t = Object(S["a"])(regeneratorRuntime.mark((function t(e, c) {
                    return regeneratorRuntime.wrap((function(t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                return e.commit, e.state, c.key, t.prev = 2, it.show(), t.abrupt("return", res.data.data);
                            case 7:
                                throw t.prev = 7, t.t0 = t["catch"](2), "系统遇到未知错误导致无法设置提前离校";
                            case 10:
                                return t.prev = 10, it.hide(), t.finish(10);
                            case 13:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [2, 7, 10, 13]
                    ])
                })));
                return function(e, c) {
                    return t.apply(this, arguments)
                }
            }(),
            bt = function() {
                var t = Object(S["a"])(regeneratorRuntime.mark((function t(e) {
                    var c;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                return c = e.commit, e.state, t.prev = 1, it.show(), c(r["SET_WORK_STU_APPLY"], res.data.data), t.abrupt("return", res.data.data);
                            case 7:
                                throw t.prev = 7, t.t0 = t["catch"](1), "获取学工服务数据失败";
                            case 10:
                                return t.prev = 10, it.hide(), t.finish(10);
                            case 13:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [1, 7, 10, 13]
                    ])
                })));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }(),
            Mt = function() {
                var t = Object(S["a"])(regeneratorRuntime.mark((function t(e, c) {
                    return regeneratorRuntime.wrap((function(t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                return e.commit, e.state, c.key, c.uuid, c.latitude, c.longitude, c.address, t.prev = 2, it.show(), t.abrupt("return", res.data.data);
                            case 7:
                                throw t.prev = 7, t.t0 = t["catch"](2), "获取签到数据失败";
                            case 10:
                                return t.prev = 10, it.hide(), t.finish(10);
                            case 13:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [2, 7, 10, 13]
                    ])
                })));
                return function(e, c) {
                    return t.apply(this, arguments)
                }
            }(),
            Ft = function() {
                var t = Object(S["a"])(regeneratorRuntime.mark((function t() {
                    return regeneratorRuntime.wrap((function(t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                return t.prev = 0, it.show(), t.abrupt("return", res.data.data);
                            case 5:
                                throw t.prev = 5, t.t0 = t["catch"](0), "获取学工服务数据失败";
                            case 8:
                                return t.prev = 8, it.hide(), t.finish(8);
                            case 11:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [0, 5, 8, 11]
                    ])
                })));
                return function() {
                    return t.apply(this, arguments)
                }
            }(),
            wt = function() {
                var t = Object(S["a"])(regeneratorRuntime.mark((function t(e, c) {
                    return regeneratorRuntime.wrap((function(t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                return e.commit, e.state, c.college_key, c.date, t.prev = 2, it.show(), t.abrupt("return", res.data.data);
                            case 7:
                                throw t.prev = 7, t.t0 = t["catch"](2), "查询历史记录出错";
                            case 10:
                                return t.prev = 10, it.hide(), t.finish(10);
                            case 13:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [2, 7, 10, 13]
                    ])
                })));
                return function(e, c) {
                    return t.apply(this, arguments)
                }
            }(),
            gt = function() {
                var t = Object(S["a"])(regeneratorRuntime.mark((function t(e, c) {
                    var a;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                return a = e.commit, e.state, t.prev = 1, it.show(), a(r["SUBMIT_ON"]), t.abrupt("return", res.data.data);
                            case 7:
                                throw t.prev = 7, t.t0 = t["catch"](1), "上报记录出错";
                            case 10:
                                return t.prev = 10, it.hide(), a(r["SUBMIT_OFF"]), t.finish(10);
                            case 14:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [1, 7, 10, 14]
                    ])
                })));
                return function(e, c) {
                    return t.apply(this, arguments)
                }
            }(),
            _t = function() {
                var t = Object(S["a"])(regeneratorRuntime.mark((function t(e, c) {
                    var a;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                return a = e.commit, e.state, c.key, c.student, t.prev = 2, it.show(), a(r["SUBMIT_ON"]), t.abrupt("return", res.data.data);
                            case 8:
                                throw t.prev = 8, t.t0 = t["catch"](2), "设置学生提前离校出错";
                            case 11:
                                return t.prev = 11, it.hide(), a(r["SUBMIT_OFF"]), t.finish(11);
                            case 15:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [2, 8, 11, 15]
                    ])
                })));
                return function(e, c) {
                    return t.apply(this, arguments)
                }
            }(),
            St = {
                FormSubmit: !1,
                UserModel: {
                    dxid: "",
                    role: "guest",
                    jwtToken: ""
                },
                UserInfo: {
                    avatar: "",
                    dxid: "",
                    code: "",
                    name: "",
                    department: "",
                    grade: null,
                    class_name: "",
                    identity: "",
                    sfTxt: ""
                },
                TL: [],
                UserRole: {
                    school: !1,
                    college: [],
                    teacher: []
                },
                BindInfo: {
                    dorm: {
                        status: !1,
                        campus: "",
                        dorm: []
                    }
                },
                NewsList: {
                    xygg: [],
                    xxgw: [],
                    hyap: [],
                    jzbg: []
                },
                ScoreList: [],
                ClassTable: [],
                EleData: {},
                WorkStuApply: []
            },
            Vt = St;
        u["a"].use(v["a"]);
        e["a"] = new v["a"].Store({
            actions: l,
            getters: a,
            mutations: s,
            state: Vt
        })
    },
    4860: function(t, e, c) {
        "use strict";
        var a = c("e70a"),
            l = c.n(a);
        l.a
    },
    "56d7": function(t, e, c) {
        "use strict";
        c.r(e);
        c("e260"), c("e6cf"), c("cca6"), c("a79d"), c("db4d");
        var a = c("2b0e"),
            l = (c("df49"), c("ae0c")),
            i = c("47fe"),
            u = c("4403"),
            v = c("1cf7"),
            n = c("7add"),
            x = c("6fe1"),
            r = c("63b4"),
            y = c("8344"),
            o = c("664d"),
            s = c("9736"),
            p = c("1cc1"),
            h = c("e231"),
            d = c("0679"),
            f = c("0f85");
        a["a"].use(l["a"]), a["a"].use(i["a"]), a["a"].use(u["a"]), a["a"].use(v["a"]), a["a"].use(n["a"]), a["a"].use(x["a"]), a["a"].use(r["a"]), a["a"].use(y["a"]), a["a"].use(o["a"]), a["a"].use(s["a"]), a["a"].use(p["a"]), a["a"].use(h["a"]), a["a"].use(d["a"]), a["a"].use(f["a"]);
        c("4160"), c("159b"), c("b0c0");
        var m = function() {
                var t = this,
                    e = t.$createElement,
                    c = t._self._c || e;
                return c("button", t._b({
                    staticClass: "dx-btn",
                    class: t.btnClass,
                    attrs: {
                        type: t._type
                    },
                    on: {
                        click: t.handleClick
                    }
                }, "button", t.$props, !1), [t.icon ? c("i", {
                    class: t.icon
                }) : t._e(), t._t("default")], 2)
            },
            z = [],
            b = "dx-button",
            M = {
                name: b,
                props: {
                    icon: {
                        type: String,
                        default: ""
                    },
                    type: {
                        type: String,
                        default: ""
                    },
                    _type: {
                        type: String,
                        default: "button"
                    },
                    disabled: {
                        type: Boolean,
                        default: !1
                    },
                    plain: {
                        type: Boolean,
                        default: !1
                    },
                    round: {
                        type: Boolean,
                        default: !1
                    },
                    active: {
                        type: Boolean,
                        default: !1
                    }
                },
                computed: {
                    btnClass: function() {
                        return {
                            "dx-btn_disabled": this.disabled,
                            "dx-btn_round": this.round,
                            "dx-dx-btn_active": this.active,
                            "dx-btn_primary": "primary" === this.type,
                            "dx-btn_success": "success" === this.type,
                            "dx-btn_info": "info" === this.type,
                            "dx-btn_warning": "warning" === this.type,
                            "dx-btn_danger": "danger" === this.type
                        }
                    }
                },
                methods: {
                    handleClick: function(t) {
                        if (this.disabled) return t.preventDefault(), void t.stopPropagation();
                        this.$emit("click", t)
                    }
                }
            },
            F = M,
            w = (c("25bf"), c("2877")),
            g = Object(w["a"])(F, m, z, !1, null, null, null),
            _ = g.exports;
        _.install = function(t) {
            t.component(_.name, _)
        };
        var S = _,
            V = function() {
                var t = this,
                    e = t.$createElement,
                    c = t._self._c || e;
                return c("div", {
                    staticClass: "dx-form"
                }, [t.image || t.title || t.description ? c("div", {
                    staticClass: "dx-form_header"
                }, [t._t("header", [t.image ? c("img", {
                    staticClass: "dx-form_header-bg",
                    attrs: {
                        src: ""
                    }
                }) : t._e(), t.title ? c("p", {
                    staticClass: "dx-form_header-title"
                }, [t._v(t._s(t.title))]) : t._e(), t.description ? c("p", {
                    staticClass: "dx-form_header-description"
                }, [t._v(t._s(t.description))]) : t._e()])], 2) : t._e(), c("div", {
                    staticClass: "dx-form_body"
                }, t._l(t.schemas, (function(e, a) {
                    return c("div", {
                        key: a,
                        staticClass: "dx-form_body-box"
                    }, [c("p", {
                        staticClass: "dx-form_body-box-label"
                    }, [e.valid.required ? c("span", {
                        staticClass: "dx-form_body-box-label_required"
                    }, [t._v("*")]) : t._e(), t.order ? c("span", {
                        staticClass: "dx-form_body-box-label_order"
                    }, [t._v(t._s(a + 1) + ".")]) : t._e(), c("span", {
                        staticClass: "dx-form_body-box-label_text"
                    }, [t._v(t._s(e.label))])]), c(e.type, t._b({
                        tag: "component",
                        model: {
                            value: t.modelValue[e.model],
                            callback: function(c) {
                                t.$set(t.modelValue, e.model, c)
                            },
                            expression: "modelValue[item.model]"
                        }
                    }, "component", e.props, !1))], 1)
                })), 0), t.submit || t.back ? c("div", {
                    staticClass: "dx-form_footer"
                }, [c("div", {
                    staticClass: "dx-btn-group"
                }, [t.back ? c("dx-button", {
                    on: {
                        click: t.handleBack
                    }
                }, [t._v("返 回")]) : t._e(), t.submit ? c("dx-button", {
                    attrs: {
                        type: "primary",
                        disabled: t.isSubmit
                    },
                    on: {
                        click: t.handleSubmit
                    }
                }, [t._v("提 交")]) : t._e()], 1)]) : t._e()])
            },
            B = [],
            C = (c("96cf"), c("1da1")),
            O = "dx-form",
            E = {
                name: O,
                components: {
                    DxButton: _
                },
                props: {
                    submit: {
                        type: Boolean,
                        default: !0
                    },
                    back: {
                        type: Boolean,
                        default: !0
                    },
                    image: {
                        type: String,
                        default: ""
                    },
                    title: {
                        type: String,
                        default: ""
                    },
                    description: {
                        type: String,
                        default: ""
                    },
                    schema: {
                        type: Array,
                        default: function() {
                            return []
                        }
                    },
                    defaultValue: {
                        type: Object,
                        default: function() {}
                    },
                    order: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    for (var t = {}, e = 0; e < this.schema.length; e++) t[this.schema[e].model] = "";
                    return {
                        modelValue: t,
                        isSubmit: !1
                    }
                },
                watch: {
                    schema: function(t) {
                        for (var e = {}, c = 0; c < t.length; c++) e[t[c].model] = "";
                        this.modelValue = e
                    },
                    defaultValue: function(t) {
                        for (var e in t) e in this.modelValue && (this.modelValue[e] = t[e])
                    }
                },
                computed: {
                    schemas: function() {
                        return this.schema
                    }
                },
                methods: {
                    handleSubmit: function() {
                        var t = this;
                        return Object(C["a"])(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        t.$emit("submit", t.modelValue);
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    handleBack: function(t) {
                        var e = this;
                        return Object(C["a"])(regeneratorRuntime.mark((function c() {
                            return regeneratorRuntime.wrap((function(c) {
                                while (1) switch (c.prev = c.next) {
                                    case 0:
                                        e.$router.back(), e.$emit("back", t);
                                    case 2:
                                    case "end":
                                        return c.stop()
                                }
                            }), c)
                        })))()
                    },
                    start: function() {
                        var t = this;
                        return Object(C["a"])(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        t.isSubmit = !0;
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    end: function() {
                        var t = this;
                        return Object(C["a"])(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        t.isSubmit = !1;
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    }
                }
            },
            k = E,
            H = (c("c3dc"), Object(w["a"])(k, V, B, !1, null, "dd56e096", null)),
            T = H.exports;
        T.install = function(t) {
            t.component(T.name, T)
        };
        var j = T,
            L = function() {
                var t = this,
                    e = t.$createElement,
                    c = t._self._c || e;
                return c("div", {
                    staticClass: "dx-input",
                    class: {
                        "dx-input_active": t.isFocus
                    }
                }, ["checkbox" === t._type ? c("input", t._b({
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.inputValue,
                        expression: "inputValue"
                    }],
                    ref: "input",
                    staticClass: "dx-input-field",
                    attrs: {
                        disabled: t.disabled,
                        readonly: t.readonly,
                        autocomplete: t.autocomplete,
                        autofocus: t.autofocus,
                        type: "checkbox"
                    },
                    domProps: {
                        checked: Array.isArray(t.inputValue) ? t._i(t.inputValue, null) > -1 : t.inputValue
                    },
                    on: {
                        focus: t.handleFocus,
                        blur: t.handleBlur,
                        change: [function(e) {
                            var c = t.inputValue,
                                a = e.target,
                                l = !!a.checked;
                            if (Array.isArray(c)) {
                                var i = null,
                                    u = t._i(c, i);
                                a.checked ? u < 0 && (t.inputValue = c.concat([i])) : u > -1 && (t.inputValue = c.slice(0, u).concat(c.slice(u + 1)))
                            } else t.inputValue = l
                        }, t.changeHander]
                    }
                }, "input", t.$props, !1)) : "radio" === t._type ? c("input", t._b({
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.inputValue,
                        expression: "inputValue"
                    }],
                    ref: "input",
                    staticClass: "dx-input-field",
                    attrs: {
                        disabled: t.disabled,
                        readonly: t.readonly,
                        autocomplete: t.autocomplete,
                        autofocus: t.autofocus,
                        type: "radio"
                    },
                    domProps: {
                        checked: t._q(t.inputValue, null)
                    },
                    on: {
                        focus: t.handleFocus,
                        blur: t.handleBlur,
                        change: [function(e) {
                            t.inputValue = null
                        }, t.changeHander]
                    }
                }, "input", t.$props, !1)) : c("input", t._b({
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.inputValue,
                        expression: "inputValue"
                    }],
                    ref: "input",
                    staticClass: "dx-input-field",
                    attrs: {
                        disabled: t.disabled,
                        readonly: t.readonly,
                        autocomplete: t.autocomplete,
                        autofocus: t.autofocus,
                        type: t._type
                    },
                    domProps: {
                        value: t.inputValue
                    },
                    on: {
                        focus: t.handleFocus,
                        blur: t.handleBlur,
                        change: t.changeHander,
                        input: function(e) {
                            e.target.composing || (t.inputValue = e.target.value)
                        }
                    }
                }, "input", t.$props, !1)), t._showClear ? c("div", {
                    staticClass: "dx-input-append"
                }, [t._showClear ? c("div", {
                    staticClass: "dx-input-clear",
                    on: {
                        touchend: t.handleClear
                    }
                }, [c("i", {
                    staticClass: "cubeic-wrong"
                })]) : t._e()]) : t._e()])
            },
            A = [],
            R = (c("a9e3"), "dx-input"),
            I = "input",
            D = "blur",
            U = "focus",
            N = "change",
            $ = {
                name: R,
                props: {
                    value: [String, Number],
                    type: {
                        type: String,
                        default: "text"
                    },
                    disabled: {
                        type: Boolean,
                        default: !1
                    },
                    placeholder: String,
                    readonly: {
                        type: Boolean,
                        default: !1
                    },
                    autofocus: {
                        type: Boolean,
                        default: !1
                    },
                    autocomplete: {
                        type: [Boolean, String],
                        default: !1
                    },
                    clear: {
                        type: Boolean,
                        default: !0
                    },
                    name: String,
                    id: String,
                    form: String,
                    resize: String,
                    min: Number,
                    max: Number,
                    step: Number
                },
                methods: {
                    changeHander: function(t) {
                        this.$emit(N, t)
                    },
                    focus: function() {
                        this.$refs.input.focus()
                    },
                    blur: function() {
                        this.$refs.input.blur()
                    },
                    handleFocus: function(t) {
                        this.$emit(U, t), this.isFocus = !0
                    },
                    handleBlur: function(t) {
                        this.$emit(D, t), this.isFocus = !1
                    },
                    handleClear: function(t) {
                        this.inputValue = "", this.$refs.input.focus()
                    }
                },
                data: function() {
                    return {
                        inputValue: this.value,
                        isFocus: !1
                    }
                },
                computed: {
                    _type: function() {
                        return this.type
                    },
                    _showClear: function() {
                        return this.clear && !this.readonly && this.isFocus && this.inputValue
                    }
                },
                watch: {
                    value: function(t) {
                        this.inputValue = t
                    },
                    inputValue: function(t) {
                        this.$emit(I, t)
                    }
                }
            },
            P = $,
            Z = (c("81af"), Object(w["a"])(P, L, A, !1, null, "920aa3bc", null)),
            q = Z.exports;
        q.install = function(t) {
            t.component(q.name, q)
        };
        var W = q,
            G = function() {
                var t = this,
                    e = t.$createElement,
                    c = t._self._c || e;
                return c("div", {
                    staticClass: "dx-textarea",
                    class: {
                        "dx-textarea_active": t.isFocus
                    }
                }, [c("textarea", t._b({
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.inputValue,
                        expression: "inputValue"
                    }],
                    ref: "textarea",
                    staticClass: "dx-textarea-field",
                    attrs: {
                        type: t._type,
                        disabled: t.disabled,
                        readonly: t.readonly,
                        autocomplete: t.autocomplete,
                        autofocus: t.autofocus
                    },
                    domProps: {
                        value: t.inputValue
                    },
                    on: {
                        focus: t.handleFocus,
                        blur: t.handleBlur,
                        change: t.changeHander,
                        input: function(e) {
                            e.target.composing || (t.inputValue = e.target.value)
                        }
                    }
                }, "textarea", t.$props, !1))])
            },
            Y = [];
        c("acd8"), c("99af"), c("caad"), c("c975"), c("fb6a"), c("0d03"), c("d3b7"), c("e25e"), c("4d63"), c("ac1f"), c("25f0"), c("2532"), c("5319"), c("841c"), c("4795");

        function K(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                c = e.prefix,
                a = void 0 === c ? "" : c,
                l = e.firstUpperCase,
                i = void 0 !== l && l,
                u = t.name,
                v = u.replace(/^dx-/i, ""),
                n = "".concat("".concat(a).concat(v));
            i && (n = n.charAt(0).toUpperCase() + n.slice(1));
            while (n.includes("-")) {
                var x = n.indexOf("-");
                n = n.slice(0, x) + n.charAt(x + 1).toUpperCase() + n.slice(x + 2)
            }
            return n
        }
        var J = function(t, e, c, a) {
                e = e || 0;
                var l = !!document.getBoxObjectFor || "mozInnerScreenX" in window,
                    i = !!window.opera && !!window.opera.toString().indexOf("Opera"),
                    u = function(e, c) {
                        t.addEventListener ? t.addEventListener(e, c, !1) : t.attachEvent("on" + e, c)
                    },
                    v = t.currentStyle ? function(e) {
                        var c = t.currentStyle[e];
                        if ("height" === e && 1 !== c.search(/px/i)) {
                            var a = t.getBoundingClientRect();
                            return a.bottom - a.top - parseFloat(v("paddingTop")) - parseFloat(v("paddingBottom")) + "px"
                        }
                        return c
                    } : function(e) {
                        return getComputedStyle(t, null)[e]
                    },
                    n = parseFloat(v("height"));
                t.style.resize = "none";
                var x = function() {
                    var u, x, r = 0,
                        y = t.style;
                    t._length !== t.value.length && (t._length = t.value.length, l || i || (r = parseInt(v("paddingTop")) + parseInt(v("paddingBottom"))), u = document.body.scrollTop || document.documentElement.scrollTop, t.style.height = n + "px", t.scrollHeight > n && (c && t.scrollHeight > c ? (x = c - r, y.overflowY = "auto") : (x = t.scrollHeight - r, y.overflowY = "hidden"), y.height = x + e + "px", u += parseInt(y.height) - t.currHeight, document.body.scrollTop = u, document.documentElement.scrollTop = u, t.currHeight = parseInt(y.height), a(parseInt(y.height))))
                };
                u("propertychange", x), u("input", x), u("focus", x), x()
            },
            Q = function(t, e) {
                var c = {
                    "M+": e.getMonth() + 1,
                    "d+": e.getDate(),
                    "h+": e.getHours(),
                    "m+": e.getMinutes(),
                    "s+": e.getSeconds(),
                    "q+": Math.floor((e.getMonth() + 3) / 3),
                    S: e.getMilliseconds()
                };
                for (var a in /(y+)/.test(t) && (t = t.replace(RegExp.$1, (e.getFullYear() + "").substr(4 - RegExp.$1.length))), c) new RegExp("(" + a + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? c[a] : ("00" + c[a]).substr(("" + c[a]).length)));
                return t
            },
            X = function(t, e) {
                var c = new Date(t);
                return Q(e, c)
            },
            tt = parseFloat(document.documentElement.style.fontSize),
            et = "dx-textarea",
            ct = "input",
            at = "blur",
            lt = "focus",
            it = "change",
            ut = {
                name: et,
                props: {
                    value: [String, Number],
                    type: {
                        type: String,
                        default: "text"
                    },
                    disabled: {
                        type: Boolean,
                        default: !1
                    },
                    placeholder: String,
                    readonly: {
                        type: Boolean,
                        default: !1
                    },
                    autofocus: {
                        type: Boolean,
                        default: !1
                    },
                    autocomplete: {
                        type: [Boolean, String],
                        default: !1
                    },
                    name: String,
                    id: String,
                    form: String,
                    resize: String,
                    min: Number,
                    max: Number,
                    step: Number
                },
                methods: {
                    changeHander: function(t) {
                        this.$emit(it, t)
                    },
                    focus: function() {
                        this.$refs.input.focus()
                    },
                    blur: function() {
                        this.$refs.input.blur()
                    },
                    handleFocus: function(t) {
                        this.$emit(lt, t), this.isFocus = !0
                    },
                    handleBlur: function(t) {
                        this.$emit(at, t), this.isFocus = !1
                    },
                    handleClear: function(t) {
                        this.inputValue = "", this.$refs.input.focus()
                    }
                },
                data: function() {
                    return {
                        inputValue: this.value,
                        isFocus: !1
                    }
                },
                mounted: function() {
                    var t = this;
                    this.$nextTick((function() {
                        var e = t.$refs.textarea,
                            c = 65;
                        e && J(t.$refs.textarea, 5, 0, (function(e) {
                            if (e += 20, e !== c) {
                                c = e;
                                var a = e / tt;
                                t.$refs.textarea.style.height = "calc(100% - ".concat(a, "rem)")
                            }
                        }))
                    }))
                },
                computed: {
                    _type: function() {
                        var t = this.type;
                        return t
                    }
                },
                watch: {
                    value: function(t) {
                        this.inputValue = t
                    },
                    inputValue: function(t) {
                        this.$emit(ct, t)
                    }
                }
            },
            vt = ut,
            nt = (c("a990"), Object(w["a"])(vt, G, Y, !1, null, "85bbc094", null)),
            xt = nt.exports;
        xt.install = function(t) {
            t.component(xt.name, xt)
        };
        var rt = xt,
            yt = function() {
                var t = this,
                    e = t.$createElement,
                    c = t._self._c || e;
                return c("div", {
                    staticClass: "dx-box"
                }, [c("div", {
                    staticClass: "dx-box-header"
                }, [c("p", {
                    staticClass: "dx-box-header_title"
                }, [t._v(t._s(t.title))])]), c("div", {
                    staticClass: "body"
                }, [t._t("default")], 2), t.footer ? c("router-link", {
                    staticClass: "dx-box-footer",
                    attrs: {
                        tag: "div",
                        to: {
                            name: t.link
                        }
                    }
                }, [c("p", {
                    staticClass: "dx-box-footer_label"
                }, [t._v(t._s(t.footer.label))])]) : t._e()], 1)
            },
            ot = [],
            st = "dx-box",
            pt = {
                name: st,
                props: {
                    title: {
                        type: String,
                        default: ""
                    },
                    footer: {
                        type: [Boolean, Object],
                        default: !1
                    }
                }
            },
            ht = pt,
            dt = (c("f03e"), Object(w["a"])(ht, yt, ot, !1, null, "212c400e", null)),
            ft = dt.exports;
        ft.install = function(t) {
            t.component(ft.name, ft)
        };
        var mt = ft,
            zt = function() {
                var t = this,
                    e = t.$createElement,
                    c = t._self._c || e;
                return c("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.isVisible,
                        expression: "isVisible"
                    }],
                    staticClass: "dx-popup",
                    class: t.rootClass,
                    style: {
                        "z-index": t.zIndex
                    }
                }, [c("div", {
                    staticClass: "dx-popup-mask",
                    on: {
                        touchmove: function(t) {
                            t.preventDefault()
                        },
                        click: t.maskClick
                    }
                }, [t._t("mask")], 2), c("div", {
                    staticClass: "dx-popup-container",
                    on: {
                        touchmove: function(t) {
                            t.preventDefault()
                        }
                    }
                }, [t.$slots.default ? c("div", {
                    staticClass: "dx-popup-content"
                }, [t._t("default")], 2) : c("div", {
                    staticClass: "dx-popup-content",
                    domProps: {
                        innerHTML: t._s(t.content)
                    }
                })])])
            },
            bt = [],
            Mt = "toggle",
            Ft = {
                model: {
                    prop: "visible",
                    event: Mt
                },
                props: {
                    visible: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        isVisible: !1
                    }
                },
                watch: {
                    isVisible: function(t) {
                        this.$emit(Mt, t)
                    }
                },
                mounted: function() {
                    var t = this;
                    this.$watch("visible", (function(e, c) {
                        console.log(t.$el, e, c), e ? t.show() : c && !t._createAPI_reuse && t.hide()
                    }), {
                        immediate: !0
                    })
                },
                methods: {
                    show: function() {
                        this.isVisible = !0
                    },
                    hide: function() {
                        this.isVisible = !1
                    }
                }
            },
            wt = {
                props: {
                    zIndex: {
                        type: Number,
                        default: 100
                    },
                    maskClosable: {
                        type: Boolean,
                        default: !1
                    }
                }
            },
            gt = "dx-popup",
            _t = "mask-click",
            St = {
                name: gt,
                mixins: [Ft, wt],
                props: {
                    type: {
                        type: String,
                        default: ""
                    },
                    mask: {
                        type: Boolean,
                        default: !0
                    }
                },
                methods: {
                    maskClick: function(t) {
                        this.$emit(_t, t), this.maskClosable && this.hide()
                    }
                },
                computed: {
                    rootClass: function() {
                        var t = {
                            "dx-popup_mask": this.mask
                        };
                        return t
                    }
                }
            },
            Vt = St,
            Bt = (c("4860"), Object(w["a"])(Vt, zt, bt, !1, null, "43dbfec1", null)),
            Ct = Bt.exports;
        Ct.install = function(t) {
            t.component(Ct.name, Ct)
        };
        var Ot = Ct,
            Et = function() {
                var t = this,
                    e = t.$createElement,
                    c = t._self._c || e;
                return c("div", {
                    staticClass: "dx-radio"
                }, [c("div", {
                    staticClass: "dx-radio_box"
                }, [c("cube-radio-group", {
                    attrs: {
                        options: t.options,
                        position: t.position,
                        horizontal: t.horizontal,
                        "hollow-style": t.hollowStyle,
                        "col-num": t.colNum
                    },
                    model: {
                        value: t.inputValue,
                        callback: function(e) {
                            t.inputValue = e
                        },
                        expression: "inputValue"
                    }
                }), t.other && "其他" === t.inputValue ? [c("dx-input", {
                    attrs: {
                        placeholder: "请输入您的其他选择"
                    },
                    model: {
                        value: t.otherValue,
                        callback: function(e) {
                            t.otherValue = e
                        },
                        expression: "otherValue"
                    }
                })] : t._e()], 2)])
            },
            kt = [],
            Ht = "dx-radio",
            Tt = "input",
            jt = {
                name: Ht,
                components: {
                    DxInput: q
                },
                props: {
                    value: [String],
                    options: [Array],
                    position: [String],
                    horizontal: [Boolean],
                    colNum: [Number],
                    hollowStyle: [Boolean],
                    other: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        inputValue: this.value,
                        otherValue: ""
                    }
                },
                watch: {
                    inputValue: function(t) {
                        this.other ? "其他" !== t ? this.$emit(Tt, t) : "其他" === t && (this.otherValue = "") : this.$emit(Tt, t)
                    },
                    otherValue: function(t) {
                        this.other && "其他" === this.inputValue && this.$emit(Tt, t)
                    }
                }
            },
            Lt = jt,
            At = (c("237b"), Object(w["a"])(Lt, Et, kt, !1, null, "212f798e", null)),
            Rt = At.exports;
        Rt.install = function(t) {
            t.component(Rt.name, Rt)
        };
        var It = Rt,
            Dt = function() {
                var t = this,
                    e = t.$createElement,
                    c = t._self._c || e;
                return c("div", {
                    staticClass: "dx-checkbox"
                }, [c("div", {
                    staticClass: "dx-checkbox_box"
                }, [c("cube-checkbox-group", {
                    attrs: {
                        options: t.options,
                        horizontal: t.horizontal,
                        min: t.min,
                        max: t.max,
                        shape: t.shape,
                        "hollow-style": t.hollowStyle,
                        "col-num": t.colNum
                    },
                    model: {
                        value: t.inputValue,
                        callback: function(e) {
                            t.inputValue = e
                        },
                        expression: "inputValue"
                    }
                }), this._other ? [c("dx-input", {
                    attrs: {
                        placeholder: "请输入您的其他选择"
                    },
                    model: {
                        value: t.otherValue,
                        callback: function(e) {
                            t.otherValue = e
                        },
                        expression: "otherValue"
                    }
                })] : t._e()], 2)])
            },
            Ut = [],
            Nt = c("fa7d"),
            $t = "dx-checkbox",
            Pt = "input",
            Zt = {
                name: $t,
                components: {
                    DxInput: q
                },
                props: {
                    value: [Array, String],
                    options: [Array],
                    shape: [String],
                    min: [Number],
                    max: [Number],
                    horizontal: [Boolean],
                    colNum: [Number],
                    hollowStyle: [Boolean],
                    other: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    var t = [];
                    return this.value && (this.value instanceof String ? t.push(this.value) : t = this.value), {
                        inputValue: t,
                        otherValue: ""
                    }
                },
                computed: {
                    _other: function() {
                        return this.other && this.inputValue.includes("其他")
                    }
                },
                watch: {
                    inputValue: function(t) {
                        if (this.other)
                            if (this.inputValue.includes("其他")) {
                                if (this._other) {
                                    var e = Object(Nt["a"])(t),
                                        c = e.indexOf("其他");
                                    e[c] = this.otherValue, this.$emit(Pt, e)
                                }
                            } else this.$emit(Pt, t);
                        else this.$emit(Pt, t)
                    },
                    otherValue: function(t) {
                        if (this._other) {
                            var e = Object(Nt["a"])(this.inputValue),
                                c = e.indexOf("其他");
                            e[c] = t, this.$emit(Pt, e)
                        }
                    }
                }
            },
            qt = Zt,
            Wt = (c("f65e"), Object(w["a"])(qt, Dt, Ut, !1, null, "7ee54fe0", null)),
            Gt = Wt.exports;
        Gt.install = function(t) {
            t.component(Gt.name, Gt)
        };
        var Yt = Gt,
            Kt = function() {
                var t = this,
                    e = t.$createElement,
                    c = t._self._c || e;
                return c("div", {
                    staticClass: "dx-date-picker"
                }, [c("dx-input", {
                    attrs: {
                        readonly: "",
                        clear: !1,
                        placeholder: t.placeholder
                    },
                    nativeOn: {
                        click: function(e) {
                            return t.show(e)
                        }
                    },
                    model: {
                        value: t.showValue,
                        callback: function(e) {
                            t.showValue = e
                        },
                        expression: "showValue"
                    }
                })], 1)
            },
            Jt = [],
            Qt = "dx-date-picker",
            Xt = "input",
            te = [{
                is: "cube-date-picker",
                title: "开始时间",
                min: new Date,
                max: new Date(2030, 11, 31, 23, 59),
                columnCount: 5
            }, {
                is: "cube-date-picker",
                title: "结束时间",
                min: new Date,
                max: new Date(2030, 11, 31, 23, 59),
                columnCount: 5
            }],
            ee = [{
                is: "cube-date-picker",
                title: "选择日期",
                min: new Date,
                max: new Date(2030, 11, 31, 23, 59),
                columnCount: 3
            }, {
                is: "cube-date-picker",
                title: "选择时间",
                min: new Date,
                max: new Date(2030, 11, 31, 23, 59),
                startColumn: "hour",
                columnCount: 2
            }],
            ce = [{
                is: "cube-date-picker",
                title: "选择日期",
                min: new Date,
                max: new Date(2030, 11, 31, 23, 59),
                columnCount: 3
            }],
            ae = {
                name: Qt,
                components: {
                    DxInput: q
                },
                props: {
                    value: {
                        type: [Array, String],
                        default: function() {
                            return []
                        }
                    },
                    placeholder: String,
                    type: {
                        type: String,
                        default: "select"
                    },
                    options: {
                        type: [Object, Array],
                        default: function() {}
                    }
                },
                data: function() {
                    return {
                        datePicker: null,
                        showValue: "",
                        selectValue: this.value
                    }
                },
                methods: {
                    show: function() {
                        var t = this;
                        this.datePicker || ("select" === this.type ? this.datePicker = this.$createSegmentPicker({
                            data: te,
                            onSelect: this.selectHandle,
                            onCancel: this.cancelHandle,
                            onNext: function(e, c, a, l) {
                                te[1].min = c, 0 === e && t.datePicker.$updateProps({
                                    data: te
                                })
                            }
                        }) : "select1" === this.type ? this.datePicker = this.$createSegmentPicker({
                            data: ce,
                            onSelect: this.selectHandle,
                            onCancel: this.cancelHandle,
                            onNext: function(e, c, a, l) {
                                ce[1].min = c, 0 === e && t.datePicker.$updateProps({
                                    data: ce
                                })
                            }
                        }) : this.datePicker = this.$createSegmentPicker({
                            data: ee,
                            onSelect: this.selectHandle,
                            onCancel: this.cancelHandle,
                            onNext: function(e, c, a, l) {
                                ee[1].min = c, 0 === e && t.datePicker.$updateProps({
                                    data: ee
                                })
                            }
                        })), this.datePicker.show()
                    },
                    hide: function() {
                        this.datePicker.hide()
                    },
                    selectHandle: function(t, e, c) {
                        this.showText(t)
                    },
                    cancelHandle: function() {},
                    showText: function(t) {
                        t instanceof Array && ("select" === this.type ? (this.showValue = "".concat(X(t[0], "yyyy/MM/dd hh:mm"), " 至 ").concat(X(t[1], "yyyy/MM/dd hh:mm")), this.selectValue = t) : "select1" === this.type ? (this.showValue = "".concat(X(t[0], "yyyy/MM/dd")), this.selectValue = "".concat(X(t[0], "yyyy/MM/dd"))) : (this.showValue = "".concat(X(t[0], "yyyy/MM/dd"), " ").concat(X(t[1], "hh:mm:ss")), this.selectValue = this.showValue))
                    }
                },
                watch: {
                    value: function(t) {},
                    selectValue: function(t) {
                        this.$emit(Xt, t)
                    }
                }
            },
            le = ae,
            ie = Object(w["a"])(le, Kt, Jt, !1, null, "2ab05563", null),
            ue = ie.exports;
        ue.install = function(t) {
            t.component(ue.name, ue)
        };
        var ve = ue,
            ne = function() {
                var t = this,
                    e = t.$createElement,
                    c = t._self._c || e;
                return c("div", {
                    staticClass: "dx-local-picker"
                }, [c("dx-input", {
                    attrs: {
                        readonly: "",
                        clear: !1,
                        placeholder: t.placeholder
                    },
                    nativeOn: {
                        click: function(e) {
                            return t.show(e)
                        }
                    },
                    model: {
                        value: t.showValue,
                        callback: function(e) {
                            t.showValue = e
                        },
                        expression: "showValue"
                    }
                })], 1)
            },
            xe = [],
            re = [{
                text: "北京市",
                value: "110000"
            }, {
                text: "天津市",
                value: "120000"
            }, {
                text: "河北省",
                value: "130000"
            }, {
                text: "山西省",
                value: "140000"
            }, {
                text: "内蒙古自治区",
                value: "150000"
            }, {
                text: "辽宁省",
                value: "210000"
            }, {
                text: "吉林省",
                value: "220000"
            }, {
                text: "黑龙江省",
                value: "230000"
            }, {
                text: "上海市",
                value: "310000"
            }, {
                text: "江苏省",
                value: "320000"
            }, {
                text: "浙江省",
                value: "330000"
            }, {
                text: "安徽省",
                value: "340000"
            }, {
                text: "福建省",
                value: "350000"
            }, {
                text: "江西省",
                value: "360000"
            }, {
                text: "山东省",
                value: "370000"
            }, {
                text: "河南省",
                value: "410000"
            }, {
                text: "湖北省",
                value: "420000"
            }, {
                text: "湖南省",
                value: "430000"
            }, {
                text: "广东省",
                value: "440000"
            }, {
                text: "广西壮族自治区",
                value: "450000"
            }, {
                text: "海南省",
                value: "460000"
            }, {
                text: "重庆市",
                value: "500000"
            }, {
                text: "四川省",
                value: "510000"
            }, {
                text: "贵州省",
                value: "520000"
            }, {
                text: "云南省",
                value: "530000"
            }, {
                text: "西藏自治区",
                value: "540000"
            }, {
                text: "陕西省",
                value: "610000"
            }, {
                text: "甘肃省",
                value: "620000"
            }, {
                text: "青海省",
                value: "630000"
            }, {
                text: "宁夏回族自治区",
                value: "640000"
            }, {
                text: "新疆维吾尔自治区",
                value: "650000"
            }],
            ye = {
                11e4: [{
                    province: "北京市",
                    text: "北京市",
                    value: "110100"
                }],
                12e4: [{
                    province: "天津市",
                    text: "天津市",
                    value: "120100"
                }],
                13e4: [{
                    province: "河北省",
                    text: "石家庄市",
                    value: "130100"
                }, {
                    province: "河北省",
                    text: "唐山市",
                    value: "130200"
                }, {
                    province: "河北省",
                    text: "秦皇岛市",
                    value: "130300"
                }, {
                    province: "河北省",
                    text: "邯郸市",
                    value: "130400"
                }, {
                    province: "河北省",
                    text: "邢台市",
                    value: "130500"
                }, {
                    province: "河北省",
                    text: "保定市",
                    value: "130600"
                }, {
                    province: "河北省",
                    text: "张家口市",
                    value: "130700"
                }, {
                    province: "河北省",
                    text: "承德市",
                    value: "130800"
                }, {
                    province: "河北省",
                    text: "沧州市",
                    value: "130900"
                }, {
                    province: "河北省",
                    text: "廊坊市",
                    value: "131000"
                }, {
                    province: "河北省",
                    text: "衡水市",
                    value: "131100"
                }, {
                    province: "河北省",
                    text: "省直辖县级行政区划",
                    value: "139000"
                }],
                14e4: [{
                    province: "山西省",
                    text: "太原市",
                    value: "140100"
                }, {
                    province: "山西省",
                    text: "大同市",
                    value: "140200"
                }, {
                    province: "山西省",
                    text: "阳泉市",
                    value: "140300"
                }, {
                    province: "山西省",
                    text: "长治市",
                    value: "140400"
                }, {
                    province: "山西省",
                    text: "晋城市",
                    value: "140500"
                }, {
                    province: "山西省",
                    text: "朔州市",
                    value: "140600"
                }, {
                    province: "山西省",
                    text: "晋中市",
                    value: "140700"
                }, {
                    province: "山西省",
                    text: "运城市",
                    value: "140800"
                }, {
                    province: "山西省",
                    text: "忻州市",
                    value: "140900"
                }, {
                    province: "山西省",
                    text: "临汾市",
                    value: "141000"
                }, {
                    province: "山西省",
                    text: "吕梁市",
                    value: "141100"
                }],
                15e4: [{
                    province: "内蒙古自治区",
                    text: "呼和浩特市",
                    value: "150100"
                }, {
                    province: "内蒙古自治区",
                    text: "包头市",
                    value: "150200"
                }, {
                    province: "内蒙古自治区",
                    text: "乌海市",
                    value: "150300"
                }, {
                    province: "内蒙古自治区",
                    text: "赤峰市",
                    value: "150400"
                }, {
                    province: "内蒙古自治区",
                    text: "通辽市",
                    value: "150500"
                }, {
                    province: "内蒙古自治区",
                    text: "鄂尔多斯市",
                    value: "150600"
                }, {
                    province: "内蒙古自治区",
                    text: "呼伦贝尔市",
                    value: "150700"
                }, {
                    province: "内蒙古自治区",
                    text: "巴彦淖尔市",
                    value: "150800"
                }, {
                    province: "内蒙古自治区",
                    text: "乌兰察布市",
                    value: "150900"
                }, {
                    province: "内蒙古自治区",
                    text: "兴安盟",
                    value: "152200"
                }, {
                    province: "内蒙古自治区",
                    text: "锡林郭勒盟",
                    value: "152500"
                }, {
                    province: "内蒙古自治区",
                    text: "阿拉善盟",
                    value: "152900"
                }],
                21e4: [{
                    province: "辽宁省",
                    text: "沈阳市",
                    value: "210100"
                }, {
                    province: "辽宁省",
                    text: "大连市",
                    value: "210200"
                }, {
                    province: "辽宁省",
                    text: "鞍山市",
                    value: "210300"
                }, {
                    province: "辽宁省",
                    text: "抚顺市",
                    value: "210400"
                }, {
                    province: "辽宁省",
                    text: "本溪市",
                    value: "210500"
                }, {
                    province: "辽宁省",
                    text: "丹东市",
                    value: "210600"
                }, {
                    province: "辽宁省",
                    text: "锦州市",
                    value: "210700"
                }, {
                    province: "辽宁省",
                    text: "营口市",
                    value: "210800"
                }, {
                    province: "辽宁省",
                    text: "阜新市",
                    value: "210900"
                }, {
                    province: "辽宁省",
                    text: "辽阳市",
                    value: "211000"
                }, {
                    province: "辽宁省",
                    text: "盘锦市",
                    value: "211100"
                }, {
                    province: "辽宁省",
                    text: "铁岭市",
                    value: "211200"
                }, {
                    province: "辽宁省",
                    text: "朝阳市",
                    value: "211300"
                }, {
                    province: "辽宁省",
                    text: "葫芦岛市",
                    value: "211400"
                }],
                22e4: [{
                    province: "吉林省",
                    text: "长春市",
                    value: "220100"
                }, {
                    province: "吉林省",
                    text: "吉林市",
                    value: "220200"
                }, {
                    province: "吉林省",
                    text: "四平市",
                    value: "220300"
                }, {
                    province: "吉林省",
                    text: "辽源市",
                    value: "220400"
                }, {
                    province: "吉林省",
                    text: "通化市",
                    value: "220500"
                }, {
                    province: "吉林省",
                    text: "白山市",
                    value: "220600"
                }, {
                    province: "吉林省",
                    text: "松原市",
                    value: "220700"
                }, {
                    province: "吉林省",
                    text: "白城市",
                    value: "220800"
                }, {
                    province: "吉林省",
                    text: "延边朝鲜族自治州",
                    value: "222400"
                }],
                23e4: [{
                    province: "黑龙江省",
                    text: "哈尔滨市",
                    value: "230100"
                }, {
                    province: "黑龙江省",
                    text: "齐齐哈尔市",
                    value: "230200"
                }, {
                    province: "黑龙江省",
                    text: "鸡西市",
                    value: "230300"
                }, {
                    province: "黑龙江省",
                    text: "鹤岗市",
                    value: "230400"
                }, {
                    province: "黑龙江省",
                    text: "双鸭山市",
                    value: "230500"
                }, {
                    province: "黑龙江省",
                    text: "大庆市",
                    value: "230600"
                }, {
                    province: "黑龙江省",
                    text: "伊春市",
                    value: "230700"
                }, {
                    province: "黑龙江省",
                    text: "佳木斯市",
                    value: "230800"
                }, {
                    province: "黑龙江省",
                    text: "七台河市",
                    value: "230900"
                }, {
                    province: "黑龙江省",
                    text: "牡丹江市",
                    value: "231000"
                }, {
                    province: "黑龙江省",
                    text: "黑河市",
                    value: "231100"
                }, {
                    province: "黑龙江省",
                    text: "绥化市",
                    value: "231200"
                }, {
                    province: "黑龙江省",
                    text: "大兴安岭地区",
                    value: "232700"
                }],
                31e4: [{
                    province: "上海市",
                    text: "上海市",
                    value: "310100"
                }],
                32e4: [{
                    province: "江苏省",
                    text: "南京市",
                    value: "320100"
                }, {
                    province: "江苏省",
                    text: "无锡市",
                    value: "320200"
                }, {
                    province: "江苏省",
                    text: "徐州市",
                    value: "320300"
                }, {
                    province: "江苏省",
                    text: "常州市",
                    value: "320400"
                }, {
                    province: "江苏省",
                    text: "苏州市",
                    value: "320500"
                }, {
                    province: "江苏省",
                    text: "南通市",
                    value: "320600"
                }, {
                    province: "江苏省",
                    text: "连云港市",
                    value: "320700"
                }, {
                    province: "江苏省",
                    text: "淮安市",
                    value: "320800"
                }, {
                    province: "江苏省",
                    text: "盐城市",
                    value: "320900"
                }, {
                    province: "江苏省",
                    text: "扬州市",
                    value: "321000"
                }, {
                    province: "江苏省",
                    text: "镇江市",
                    value: "321100"
                }, {
                    province: "江苏省",
                    text: "泰州市",
                    value: "321200"
                }, {
                    province: "江苏省",
                    text: "宿迁市",
                    value: "321300"
                }],
                33e4: [{
                    province: "浙江省",
                    text: "杭州市",
                    value: "330100"
                }, {
                    province: "浙江省",
                    text: "宁波市",
                    value: "330200"
                }, {
                    province: "浙江省",
                    text: "温州市",
                    value: "330300"
                }, {
                    province: "浙江省",
                    text: "嘉兴市",
                    value: "330400"
                }, {
                    province: "浙江省",
                    text: "湖州市",
                    value: "330500"
                }, {
                    province: "浙江省",
                    text: "绍兴市",
                    value: "330600"
                }, {
                    province: "浙江省",
                    text: "金华市",
                    value: "330700"
                }, {
                    province: "浙江省",
                    text: "衢州市",
                    value: "330800"
                }, {
                    province: "浙江省",
                    text: "舟山市",
                    value: "330900"
                }, {
                    province: "浙江省",
                    text: "台州市",
                    value: "331000"
                }, {
                    province: "浙江省",
                    text: "丽水市",
                    value: "331100"
                }],
                34e4: [{
                    province: "安徽省",
                    text: "合肥市",
                    value: "340100"
                }, {
                    province: "安徽省",
                    text: "芜湖市",
                    value: "340200"
                }, {
                    province: "安徽省",
                    text: "蚌埠市",
                    value: "340300"
                }, {
                    province: "安徽省",
                    text: "淮南市",
                    value: "340400"
                }, {
                    province: "安徽省",
                    text: "马鞍山市",
                    value: "340500"
                }, {
                    province: "安徽省",
                    text: "淮北市",
                    value: "340600"
                }, {
                    province: "安徽省",
                    text: "铜陵市",
                    value: "340700"
                }, {
                    province: "安徽省",
                    text: "安庆市",
                    value: "340800"
                }, {
                    province: "安徽省",
                    text: "黄山市",
                    value: "341000"
                }, {
                    province: "安徽省",
                    text: "滁州市",
                    value: "341100"
                }, {
                    province: "安徽省",
                    text: "阜阳市",
                    value: "341200"
                }, {
                    province: "安徽省",
                    text: "宿州市",
                    value: "341300"
                }, {
                    province: "安徽省",
                    text: "六安市",
                    value: "341500"
                }, {
                    province: "安徽省",
                    text: "亳州市",
                    value: "341600"
                }, {
                    province: "安徽省",
                    text: "池州市",
                    value: "341700"
                }, {
                    province: "安徽省",
                    text: "宣城市",
                    value: "341800"
                }],
                35e4: [{
                    province: "福建省",
                    text: "福州市",
                    value: "350100"
                }, {
                    province: "福建省",
                    text: "厦门市",
                    value: "350200"
                }, {
                    province: "福建省",
                    text: "莆田市",
                    value: "350300"
                }, {
                    province: "福建省",
                    text: "三明市",
                    value: "350400"
                }, {
                    province: "福建省",
                    text: "泉州市",
                    value: "350500"
                }, {
                    province: "福建省",
                    text: "漳州市",
                    value: "350600"
                }, {
                    province: "福建省",
                    text: "南平市",
                    value: "350700"
                }, {
                    province: "福建省",
                    text: "龙岩市",
                    value: "350800"
                }, {
                    province: "福建省",
                    text: "宁德市",
                    value: "350900"
                }],
                36e4: [{
                    province: "江西省",
                    text: "南昌市",
                    value: "360100"
                }, {
                    province: "江西省",
                    text: "景德镇市",
                    value: "360200"
                }, {
                    province: "江西省",
                    text: "萍乡市",
                    value: "360300"
                }, {
                    province: "江西省",
                    text: "九江市",
                    value: "360400"
                }, {
                    province: "江西省",
                    text: "新余市",
                    value: "360500"
                }, {
                    province: "江西省",
                    text: "鹰潭市",
                    value: "360600"
                }, {
                    province: "江西省",
                    text: "赣州市",
                    value: "360700"
                }, {
                    province: "江西省",
                    text: "吉安市",
                    value: "360800"
                }, {
                    province: "江西省",
                    text: "宜春市",
                    value: "360900"
                }, {
                    province: "江西省",
                    text: "抚州市",
                    value: "361000"
                }, {
                    province: "江西省",
                    text: "上饶市",
                    value: "361100"
                }],
                37e4: [{
                    province: "山东省",
                    text: "济南市",
                    value: "370100"
                }, {
                    province: "山东省",
                    text: "青岛市",
                    value: "370200"
                }, {
                    province: "山东省",
                    text: "淄博市",
                    value: "370300"
                }, {
                    province: "山东省",
                    text: "枣庄市",
                    value: "370400"
                }, {
                    province: "山东省",
                    text: "东营市",
                    value: "370500"
                }, {
                    province: "山东省",
                    text: "烟台市",
                    value: "370600"
                }, {
                    province: "山东省",
                    text: "潍坊市",
                    value: "370700"
                }, {
                    province: "山东省",
                    text: "济宁市",
                    value: "370800"
                }, {
                    province: "山东省",
                    text: "泰安市",
                    value: "370900"
                }, {
                    province: "山东省",
                    text: "威海市",
                    value: "371000"
                }, {
                    province: "山东省",
                    text: "日照市",
                    value: "371100"
                }, {
                    province: "山东省",
                    text: "莱芜市",
                    value: "371200"
                }, {
                    province: "山东省",
                    text: "临沂市",
                    value: "371300"
                }, {
                    province: "山东省",
                    text: "德州市",
                    value: "371400"
                }, {
                    province: "山东省",
                    text: "聊城市",
                    value: "371500"
                }, {
                    province: "山东省",
                    text: "滨州市",
                    value: "371600"
                }, {
                    province: "山东省",
                    text: "菏泽市",
                    value: "371700"
                }],
                41e4: [{
                    province: "河南省",
                    text: "郑州市",
                    value: "410100"
                }, {
                    province: "河南省",
                    text: "开封市",
                    value: "410200"
                }, {
                    province: "河南省",
                    text: "洛阳市",
                    value: "410300"
                }, {
                    province: "河南省",
                    text: "平顶山市",
                    value: "410400"
                }, {
                    province: "河南省",
                    text: "安阳市",
                    value: "410500"
                }, {
                    province: "河南省",
                    text: "鹤壁市",
                    value: "410600"
                }, {
                    province: "河南省",
                    text: "新乡市",
                    value: "410700"
                }, {
                    province: "河南省",
                    text: "焦作市",
                    value: "410800"
                }, {
                    province: "河南省",
                    text: "濮阳市",
                    value: "410900"
                }, {
                    province: "河南省",
                    text: "许昌市",
                    value: "411000"
                }, {
                    province: "河南省",
                    text: "漯河市",
                    value: "411100"
                }, {
                    province: "河南省",
                    text: "三门峡市",
                    value: "411200"
                }, {
                    province: "河南省",
                    text: "南阳市",
                    value: "411300"
                }, {
                    province: "河南省",
                    text: "商丘市",
                    value: "411400"
                }, {
                    province: "河南省",
                    text: "信阳市",
                    value: "411500"
                }, {
                    province: "河南省",
                    text: "周口市",
                    value: "411600"
                }, {
                    province: "河南省",
                    text: "驻马店市",
                    value: "411700"
                }, {
                    province: "河南省",
                    text: "省直辖县级行政区划",
                    value: "419000"
                }],
                42e4: [{
                    province: "湖北省",
                    text: "武汉市",
                    value: "420100"
                }, {
                    province: "湖北省",
                    text: "黄石市",
                    value: "420200"
                }, {
                    province: "湖北省",
                    text: "十堰市",
                    value: "420300"
                }, {
                    province: "湖北省",
                    text: "宜昌市",
                    value: "420500"
                }, {
                    province: "湖北省",
                    text: "襄阳市",
                    value: "420600"
                }, {
                    province: "湖北省",
                    text: "鄂州市",
                    value: "420700"
                }, {
                    province: "湖北省",
                    text: "荆门市",
                    value: "420800"
                }, {
                    province: "湖北省",
                    text: "孝感市",
                    value: "420900"
                }, {
                    province: "湖北省",
                    text: "荆州市",
                    value: "421000"
                }, {
                    province: "湖北省",
                    text: "黄冈市",
                    value: "421100"
                }, {
                    province: "湖北省",
                    text: "咸宁市",
                    value: "421200"
                }, {
                    province: "湖北省",
                    text: "随州市",
                    value: "421300"
                }, {
                    province: "湖北省",
                    text: "恩施土家族苗族自治州",
                    value: "422800"
                }, {
                    province: "湖北省",
                    text: "省直辖县级行政区划",
                    value: "429000"
                }],
                43e4: [{
                    province: "湖南省",
                    text: "长沙市",
                    value: "430100"
                }, {
                    province: "湖南省",
                    text: "株洲市",
                    value: "430200"
                }, {
                    province: "湖南省",
                    text: "湘潭市",
                    value: "430300"
                }, {
                    province: "湖南省",
                    text: "衡阳市",
                    value: "430400"
                }, {
                    province: "湖南省",
                    text: "邵阳市",
                    value: "430500"
                }, {
                    province: "湖南省",
                    text: "岳阳市",
                    value: "430600"
                }, {
                    province: "湖南省",
                    text: "常德市",
                    value: "430700"
                }, {
                    province: "湖南省",
                    text: "张家界市",
                    value: "430800"
                }, {
                    province: "湖南省",
                    text: "益阳市",
                    value: "430900"
                }, {
                    province: "湖南省",
                    text: "郴州市",
                    value: "431000"
                }, {
                    province: "湖南省",
                    text: "永州市",
                    value: "431100"
                }, {
                    province: "湖南省",
                    text: "怀化市",
                    value: "431200"
                }, {
                    province: "湖南省",
                    text: "娄底市",
                    value: "431300"
                }, {
                    province: "湖南省",
                    text: "湘西土家族苗族自治州",
                    value: "433100"
                }],
                44e4: [{
                    province: "广东省",
                    text: "广州市",
                    value: "440100"
                }, {
                    province: "广东省",
                    text: "韶关市",
                    value: "440200"
                }, {
                    province: "广东省",
                    text: "深圳市",
                    value: "440300"
                }, {
                    province: "广东省",
                    text: "珠海市",
                    value: "440400"
                }, {
                    province: "广东省",
                    text: "汕头市",
                    value: "440500"
                }, {
                    province: "广东省",
                    text: "佛山市",
                    value: "440600"
                }, {
                    province: "广东省",
                    text: "江门市",
                    value: "440700"
                }, {
                    province: "广东省",
                    text: "湛江市",
                    value: "440800"
                }, {
                    province: "广东省",
                    text: "茂名市",
                    value: "440900"
                }, {
                    province: "广东省",
                    text: "肇庆市",
                    value: "441200"
                }, {
                    province: "广东省",
                    text: "惠州市",
                    value: "441300"
                }, {
                    province: "广东省",
                    text: "梅州市",
                    value: "441400"
                }, {
                    province: "广东省",
                    text: "汕尾市",
                    value: "441500"
                }, {
                    province: "广东省",
                    text: "河源市",
                    value: "441600"
                }, {
                    province: "广东省",
                    text: "阳江市",
                    value: "441700"
                }, {
                    province: "广东省",
                    text: "清远市",
                    value: "441800"
                }, {
                    province: "广东省",
                    text: "东莞市",
                    value: "441900"
                }, {
                    province: "广东省",
                    text: "中山市",
                    value: "442000"
                }, {
                    province: "广东省",
                    text: "潮州市",
                    value: "445100"
                }, {
                    province: "广东省",
                    text: "揭阳市",
                    value: "445200"
                }, {
                    province: "广东省",
                    text: "云浮市",
                    value: "445300"
                }],
                45e4: [{
                    province: "广西壮族自治区",
                    text: "南宁市",
                    value: "450100"
                }, {
                    province: "广西壮族自治区",
                    text: "柳州市",
                    value: "450200"
                }, {
                    province: "广西壮族自治区",
                    text: "桂林市",
                    value: "450300"
                }, {
                    province: "广西壮族自治区",
                    text: "梧州市",
                    value: "450400"
                }, {
                    province: "广西壮族自治区",
                    text: "北海市",
                    value: "450500"
                }, {
                    province: "广西壮族自治区",
                    text: "防城港市",
                    value: "450600"
                }, {
                    province: "广西壮族自治区",
                    text: "钦州市",
                    value: "450700"
                }, {
                    province: "广西壮族自治区",
                    text: "贵港市",
                    value: "450800"
                }, {
                    province: "广西壮族自治区",
                    text: "玉林市",
                    value: "450900"
                }, {
                    province: "广西壮族自治区",
                    text: "百色市",
                    value: "451000"
                }, {
                    province: "广西壮族自治区",
                    text: "贺州市",
                    value: "451100"
                }, {
                    province: "广西壮族自治区",
                    text: "河池市",
                    value: "451200"
                }, {
                    province: "广西壮族自治区",
                    text: "来宾市",
                    value: "451300"
                }, {
                    province: "广西壮族自治区",
                    text: "崇左市",
                    value: "451400"
                }],
                46e4: [{
                    province: "海南省",
                    text: "海口市",
                    value: "460100"
                }, {
                    province: "海南省",
                    text: "三亚市",
                    value: "460200"
                }, {
                    province: "海南省",
                    text: "三沙市",
                    value: "460300"
                }, {
                    province: "海南省",
                    text: "儋州市",
                    value: "460400"
                }, {
                    province: "海南省",
                    text: "省直辖县级行政区划",
                    value: "469000"
                }],
                5e5: [{
                    province: "重庆市",
                    text: "重庆市",
                    value: "500100"
                }, {
                    province: "重庆市",
                    text: "县",
                    value: "500200"
                }],
                51e4: [{
                    province: "四川省",
                    text: "成都市",
                    value: "510100"
                }, {
                    province: "四川省",
                    text: "自贡市",
                    value: "510300"
                }, {
                    province: "四川省",
                    text: "攀枝花市",
                    value: "510400"
                }, {
                    province: "四川省",
                    text: "泸州市",
                    value: "510500"
                }, {
                    province: "四川省",
                    text: "德阳市",
                    value: "510600"
                }, {
                    province: "四川省",
                    text: "绵阳市",
                    value: "510700"
                }, {
                    province: "四川省",
                    text: "广元市",
                    value: "510800"
                }, {
                    province: "四川省",
                    text: "遂宁市",
                    value: "510900"
                }, {
                    province: "四川省",
                    text: "内江市",
                    value: "511000"
                }, {
                    province: "四川省",
                    text: "乐山市",
                    value: "511100"
                }, {
                    province: "四川省",
                    text: "南充市",
                    value: "511300"
                }, {
                    province: "四川省",
                    text: "眉山市",
                    value: "511400"
                }, {
                    province: "四川省",
                    text: "宜宾市",
                    value: "511500"
                }, {
                    province: "四川省",
                    text: "广安市",
                    value: "511600"
                }, {
                    province: "四川省",
                    text: "达州市",
                    value: "511700"
                }, {
                    province: "四川省",
                    text: "雅安市",
                    value: "511800"
                }, {
                    province: "四川省",
                    text: "巴中市",
                    value: "511900"
                }, {
                    province: "四川省",
                    text: "资阳市",
                    value: "512000"
                }, {
                    province: "四川省",
                    text: "阿坝藏族羌族自治州",
                    value: "513200"
                }, {
                    province: "四川省",
                    text: "甘孜藏族自治州",
                    value: "513300"
                }, {
                    province: "四川省",
                    text: "凉山彝族自治州",
                    value: "513400"
                }],
                52e4: [{
                    province: "贵州省",
                    text: "贵阳市",
                    value: "520100"
                }, {
                    province: "贵州省",
                    text: "六盘水市",
                    value: "520200"
                }, {
                    province: "贵州省",
                    text: "遵义市",
                    value: "520300"
                }, {
                    province: "贵州省",
                    text: "安顺市",
                    value: "520400"
                }, {
                    province: "贵州省",
                    text: "毕节市",
                    value: "520500"
                }, {
                    province: "贵州省",
                    text: "铜仁市",
                    value: "520600"
                }, {
                    province: "贵州省",
                    text: "黔西南布依族苗族自治州",
                    value: "522300"
                }, {
                    province: "贵州省",
                    text: "黔东南苗族侗族自治州",
                    value: "522600"
                }, {
                    province: "贵州省",
                    text: "黔南布依族苗族自治州",
                    value: "522700"
                }],
                53e4: [{
                    province: "云南省",
                    text: "昆明市",
                    value: "530100"
                }, {
                    province: "云南省",
                    text: "曲靖市",
                    value: "530300"
                }, {
                    province: "云南省",
                    text: "玉溪市",
                    value: "530400"
                }, {
                    province: "云南省",
                    text: "保山市",
                    value: "530500"
                }, {
                    province: "云南省",
                    text: "昭通市",
                    value: "530600"
                }, {
                    province: "云南省",
                    text: "丽江市",
                    value: "530700"
                }, {
                    province: "云南省",
                    text: "普洱市",
                    value: "530800"
                }, {
                    province: "云南省",
                    text: "临沧市",
                    value: "530900"
                }, {
                    province: "云南省",
                    text: "楚雄彝族自治州",
                    value: "532300"
                }, {
                    province: "云南省",
                    text: "红河哈尼族彝族自治州",
                    value: "532500"
                }, {
                    province: "云南省",
                    text: "文山壮族苗族自治州",
                    value: "532600"
                }, {
                    province: "云南省",
                    text: "西双版纳傣族自治州",
                    value: "532800"
                }, {
                    province: "云南省",
                    text: "大理白族自治州",
                    value: "532900"
                }, {
                    province: "云南省",
                    text: "德宏傣族景颇族自治州",
                    value: "533100"
                }, {
                    province: "云南省",
                    text: "怒江傈僳族自治州",
                    value: "533300"
                }, {
                    province: "云南省",
                    text: "迪庆藏族自治州",
                    value: "533400"
                }],
                54e4: [{
                    province: "西藏自治区",
                    text: "拉萨市",
                    value: "540100"
                }, {
                    province: "西藏自治区",
                    text: "日喀则市",
                    value: "540200"
                }, {
                    province: "西藏自治区",
                    text: "昌都市",
                    value: "540300"
                }, {
                    province: "西藏自治区",
                    text: "林芝市",
                    value: "540400"
                }, {
                    province: "西藏自治区",
                    text: "山南市",
                    value: "540500"
                }, {
                    province: "西藏自治区",
                    text: "那曲地区",
                    value: "542400"
                }, {
                    province: "西藏自治区",
                    text: "阿里地区",
                    value: "542500"
                }],
                61e4: [{
                    province: "陕西省",
                    text: "西安市",
                    value: "610100"
                }, {
                    province: "陕西省",
                    text: "铜川市",
                    value: "610200"
                }, {
                    province: "陕西省",
                    text: "宝鸡市",
                    value: "610300"
                }, {
                    province: "陕西省",
                    text: "咸阳市",
                    value: "610400"
                }, {
                    province: "陕西省",
                    text: "渭南市",
                    value: "610500"
                }, {
                    province: "陕西省",
                    text: "延安市",
                    value: "610600"
                }, {
                    province: "陕西省",
                    text: "汉中市",
                    value: "610700"
                }, {
                    province: "陕西省",
                    text: "榆林市",
                    value: "610800"
                }, {
                    province: "陕西省",
                    text: "安康市",
                    value: "610900"
                }, {
                    province: "陕西省",
                    text: "商洛市",
                    value: "611000"
                }],
                62e4: [{
                    province: "甘肃省",
                    text: "兰州市",
                    value: "620100"
                }, {
                    province: "甘肃省",
                    text: "嘉峪关市",
                    value: "620200"
                }, {
                    province: "甘肃省",
                    text: "金昌市",
                    value: "620300"
                }, {
                    province: "甘肃省",
                    text: "白银市",
                    value: "620400"
                }, {
                    province: "甘肃省",
                    text: "天水市",
                    value: "620500"
                }, {
                    province: "甘肃省",
                    text: "武威市",
                    value: "620600"
                }, {
                    province: "甘肃省",
                    text: "张掖市",
                    value: "620700"
                }, {
                    province: "甘肃省",
                    text: "平凉市",
                    value: "620800"
                }, {
                    province: "甘肃省",
                    text: "酒泉市",
                    value: "620900"
                }, {
                    province: "甘肃省",
                    text: "庆阳市",
                    value: "621000"
                }, {
                    province: "甘肃省",
                    text: "定西市",
                    value: "621100"
                }, {
                    province: "甘肃省",
                    text: "陇南市",
                    value: "621200"
                }, {
                    province: "甘肃省",
                    text: "临夏回族自治州",
                    value: "622900"
                }, {
                    province: "甘肃省",
                    text: "甘南藏族自治州",
                    value: "623000"
                }],
                63e4: [{
                    province: "青海省",
                    text: "西宁市",
                    value: "630100"
                }, {
                    province: "青海省",
                    text: "海东市",
                    value: "630200"
                }, {
                    province: "青海省",
                    text: "海北藏族自治州",
                    value: "632200"
                }, {
                    province: "青海省",
                    text: "黄南藏族自治州",
                    value: "632300"
                }, {
                    province: "青海省",
                    text: "海南藏族自治州",
                    value: "632500"
                }, {
                    province: "青海省",
                    text: "果洛藏族自治州",
                    value: "632600"
                }, {
                    province: "青海省",
                    text: "玉树藏族自治州",
                    value: "632700"
                }, {
                    province: "青海省",
                    text: "海西蒙古族藏族自治州",
                    value: "632800"
                }],
                64e4: [{
                    province: "宁夏回族自治区",
                    text: "银川市",
                    value: "640100"
                }, {
                    province: "宁夏回族自治区",
                    text: "石嘴山市",
                    value: "640200"
                }, {
                    province: "宁夏回族自治区",
                    text: "吴忠市",
                    value: "640300"
                }, {
                    province: "宁夏回族自治区",
                    text: "固原市",
                    value: "640400"
                }, {
                    province: "宁夏回族自治区",
                    text: "中卫市",
                    value: "640500"
                }],
                65e4: [{
                    province: "新疆维吾尔自治区",
                    text: "乌鲁木齐市",
                    value: "650100"
                }, {
                    province: "新疆维吾尔自治区",
                    text: "克拉玛依市",
                    value: "650200"
                }, {
                    province: "新疆维吾尔自治区",
                    text: "吐鲁番市",
                    value: "650400"
                }, {
                    province: "新疆维吾尔自治区",
                    text: "哈密市",
                    value: "650500"
                }, {
                    province: "新疆维吾尔自治区",
                    text: "昌吉回族自治州",
                    value: "652300"
                }, {
                    province: "新疆维吾尔自治区",
                    text: "博尔塔拉蒙古自治州",
                    value: "652700"
                }, {
                    province: "新疆维吾尔自治区",
                    text: "巴音郭楞蒙古自治州",
                    value: "652800"
                }, {
                    province: "新疆维吾尔自治区",
                    text: "阿克苏地区",
                    value: "652900"
                }, {
                    province: "新疆维吾尔自治区",
                    text: "克孜勒苏柯尔克孜自治州",
                    value: "653000"
                }, {
                    province: "新疆维吾尔自治区",
                    text: "喀什地区",
                    value: "653100"
                }, {
                    province: "新疆维吾尔自治区",
                    text: "和田地区",
                    value: "653200"
                }, {
                    province: "新疆维吾尔自治区",
                    text: "伊犁哈萨克自治州",
                    value: "654000"
                }, {
                    province: "新疆维吾尔自治区",
                    text: "塔城地区",
                    value: "654200"
                }, {
                    province: "新疆维吾尔自治区",
                    text: "阿勒泰地区",
                    value: "654300"
                }, {
                    province: "新疆维吾尔自治区",
                    text: "自治区直辖县级行政区划",
                    value: "659000"
                }]
            },
            oe = {
                110100: [{
                    city: "市辖区",
                    text: "东城区",
                    value: "110101"
                }, {
                    city: "市辖区",
                    text: "西城区",
                    value: "110102"
                }, {
                    city: "市辖区",
                    text: "朝阳区",
                    value: "110105"
                }, {
                    city: "市辖区",
                    text: "丰台区",
                    value: "110106"
                }, {
                    city: "市辖区",
                    text: "石景山区",
                    value: "110107"
                }, {
                    city: "市辖区",
                    text: "海淀区",
                    value: "110108"
                }, {
                    city: "市辖区",
                    text: "门头沟区",
                    value: "110109"
                }, {
                    city: "市辖区",
                    text: "房山区",
                    value: "110111"
                }, {
                    city: "市辖区",
                    text: "通州区",
                    value: "110112"
                }, {
                    city: "市辖区",
                    text: "顺义区",
                    value: "110113"
                }, {
                    city: "市辖区",
                    text: "昌平区",
                    value: "110114"
                }, {
                    city: "市辖区",
                    text: "大兴区",
                    value: "110115"
                }, {
                    city: "市辖区",
                    text: "怀柔区",
                    value: "110116"
                }, {
                    city: "市辖区",
                    text: "平谷区",
                    value: "110117"
                }, {
                    city: "市辖区",
                    text: "密云区",
                    value: "110118"
                }, {
                    city: "市辖区",
                    text: "延庆区",
                    value: "110119"
                }],
                120100: [{
                    city: "市辖区",
                    text: "和平区",
                    value: "120101"
                }, {
                    city: "市辖区",
                    text: "河东区",
                    value: "120102"
                }, {
                    city: "市辖区",
                    text: "河西区",
                    value: "120103"
                }, {
                    city: "市辖区",
                    text: "南开区",
                    value: "120104"
                }, {
                    city: "市辖区",
                    text: "河北区",
                    value: "120105"
                }, {
                    city: "市辖区",
                    text: "红桥区",
                    value: "120106"
                }, {
                    city: "市辖区",
                    text: "东丽区",
                    value: "120110"
                }, {
                    city: "市辖区",
                    text: "西青区",
                    value: "120111"
                }, {
                    city: "市辖区",
                    text: "津南区",
                    value: "120112"
                }, {
                    city: "市辖区",
                    text: "北辰区",
                    value: "120113"
                }, {
                    city: "市辖区",
                    text: "武清区",
                    value: "120114"
                }, {
                    city: "市辖区",
                    text: "宝坻区",
                    value: "120115"
                }, {
                    city: "市辖区",
                    text: "滨海新区",
                    value: "120116"
                }, {
                    city: "市辖区",
                    text: "宁河区",
                    value: "120117"
                }, {
                    city: "市辖区",
                    text: "静海区",
                    value: "120118"
                }, {
                    city: "市辖区",
                    text: "蓟州区",
                    value: "120119"
                }],
                130100: [{
                    city: "石家庄市",
                    text: "市辖区",
                    value: "130101"
                }, {
                    city: "石家庄市",
                    text: "长安区",
                    value: "130102"
                }, {
                    city: "石家庄市",
                    text: "桥西区",
                    value: "130104"
                }, {
                    city: "石家庄市",
                    text: "新华区",
                    value: "130105"
                }, {
                    city: "石家庄市",
                    text: "井陉矿区",
                    value: "130107"
                }, {
                    city: "石家庄市",
                    text: "裕华区",
                    value: "130108"
                }, {
                    city: "石家庄市",
                    text: "藁城区",
                    value: "130109"
                }, {
                    city: "石家庄市",
                    text: "鹿泉区",
                    value: "130110"
                }, {
                    city: "石家庄市",
                    text: "栾城区",
                    value: "130111"
                }, {
                    city: "石家庄市",
                    text: "井陉县",
                    value: "130121"
                }, {
                    city: "石家庄市",
                    text: "正定县",
                    value: "130123"
                }, {
                    city: "石家庄市",
                    text: "行唐县",
                    value: "130125"
                }, {
                    city: "石家庄市",
                    text: "灵寿县",
                    value: "130126"
                }, {
                    city: "石家庄市",
                    text: "高邑县",
                    value: "130127"
                }, {
                    city: "石家庄市",
                    text: "深泽县",
                    value: "130128"
                }, {
                    city: "石家庄市",
                    text: "赞皇县",
                    value: "130129"
                }, {
                    city: "石家庄市",
                    text: "无极县",
                    value: "130130"
                }, {
                    city: "石家庄市",
                    text: "平山县",
                    value: "130131"
                }, {
                    city: "石家庄市",
                    text: "元氏县",
                    value: "130132"
                }, {
                    city: "石家庄市",
                    text: "赵县",
                    value: "130133"
                }, {
                    city: "石家庄市",
                    text: "晋州市",
                    value: "130183"
                }, {
                    city: "石家庄市",
                    text: "新乐市",
                    value: "130184"
                }],
                130200: [{
                    city: "唐山市",
                    text: "市辖区",
                    value: "130201"
                }, {
                    city: "唐山市",
                    text: "路南区",
                    value: "130202"
                }, {
                    city: "唐山市",
                    text: "路北区",
                    value: "130203"
                }, {
                    city: "唐山市",
                    text: "古冶区",
                    value: "130204"
                }, {
                    city: "唐山市",
                    text: "开平区",
                    value: "130205"
                }, {
                    city: "唐山市",
                    text: "丰南区",
                    value: "130207"
                }, {
                    city: "唐山市",
                    text: "丰润区",
                    value: "130208"
                }, {
                    city: "唐山市",
                    text: "曹妃甸区",
                    value: "130209"
                }, {
                    city: "唐山市",
                    text: "滦县",
                    value: "130223"
                }, {
                    city: "唐山市",
                    text: "滦南县",
                    value: "130224"
                }, {
                    city: "唐山市",
                    text: "乐亭县",
                    value: "130225"
                }, {
                    city: "唐山市",
                    text: "迁西县",
                    value: "130227"
                }, {
                    city: "唐山市",
                    text: "玉田县",
                    value: "130229"
                }, {
                    city: "唐山市",
                    text: "遵化市",
                    value: "130281"
                }, {
                    city: "唐山市",
                    text: "迁安市",
                    value: "130283"
                }],
                130300: [{
                    city: "秦皇岛市",
                    text: "市辖区",
                    value: "130301"
                }, {
                    city: "秦皇岛市",
                    text: "海港区",
                    value: "130302"
                }, {
                    city: "秦皇岛市",
                    text: "山海关区",
                    value: "130303"
                }, {
                    city: "秦皇岛市",
                    text: "北戴河区",
                    value: "130304"
                }, {
                    city: "秦皇岛市",
                    text: "抚宁区",
                    value: "130306"
                }, {
                    city: "秦皇岛市",
                    text: "青龙满族自治县",
                    value: "130321"
                }, {
                    city: "秦皇岛市",
                    text: "昌黎县",
                    value: "130322"
                }, {
                    city: "秦皇岛市",
                    text: "卢龙县",
                    value: "130324"
                }],
                130400: [{
                    city: "邯郸市",
                    text: "市辖区",
                    value: "130401"
                }, {
                    city: "邯郸市",
                    text: "邯山区",
                    value: "130402"
                }, {
                    city: "邯郸市",
                    text: "丛台区",
                    value: "130403"
                }, {
                    city: "邯郸市",
                    text: "复兴区",
                    value: "130404"
                }, {
                    city: "邯郸市",
                    text: "峰峰矿区",
                    value: "130406"
                }, {
                    city: "邯郸市",
                    text: "邯郸县",
                    value: "130421"
                }, {
                    city: "邯郸市",
                    text: "临漳县",
                    value: "130423"
                }, {
                    city: "邯郸市",
                    text: "成安县",
                    value: "130424"
                }, {
                    city: "邯郸市",
                    text: "大名县",
                    value: "130425"
                }, {
                    city: "邯郸市",
                    text: "涉县",
                    value: "130426"
                }, {
                    city: "邯郸市",
                    text: "磁县",
                    value: "130427"
                }, {
                    city: "邯郸市",
                    text: "肥乡县",
                    value: "130428"
                }, {
                    city: "邯郸市",
                    text: "永年县",
                    value: "130429"
                }, {
                    city: "邯郸市",
                    text: "邱县",
                    value: "130430"
                }, {
                    city: "邯郸市",
                    text: "鸡泽县",
                    value: "130431"
                }, {
                    city: "邯郸市",
                    text: "广平县",
                    value: "130432"
                }, {
                    city: "邯郸市",
                    text: "馆陶县",
                    value: "130433"
                }, {
                    city: "邯郸市",
                    text: "魏县",
                    value: "130434"
                }, {
                    city: "邯郸市",
                    text: "曲周县",
                    value: "130435"
                }, {
                    city: "邯郸市",
                    text: "武安市",
                    value: "130481"
                }],
                130500: [{
                    city: "邢台市",
                    text: "市辖区",
                    value: "130501"
                }, {
                    city: "邢台市",
                    text: "桥东区",
                    value: "130502"
                }, {
                    city: "邢台市",
                    text: "桥西区",
                    value: "130503"
                }, {
                    city: "邢台市",
                    text: "邢台县",
                    value: "130521"
                }, {
                    city: "邢台市",
                    text: "临城县",
                    value: "130522"
                }, {
                    city: "邢台市",
                    text: "内丘县",
                    value: "130523"
                }, {
                    city: "邢台市",
                    text: "柏乡县",
                    value: "130524"
                }, {
                    city: "邢台市",
                    text: "隆尧县",
                    value: "130525"
                }, {
                    city: "邢台市",
                    text: "任县",
                    value: "130526"
                }, {
                    city: "邢台市",
                    text: "南和县",
                    value: "130527"
                }, {
                    city: "邢台市",
                    text: "宁晋县",
                    value: "130528"
                }, {
                    city: "邢台市",
                    text: "巨鹿县",
                    value: "130529"
                }, {
                    city: "邢台市",
                    text: "新河县",
                    value: "130530"
                }, {
                    city: "邢台市",
                    text: "广宗县",
                    value: "130531"
                }, {
                    city: "邢台市",
                    text: "平乡县",
                    value: "130532"
                }, {
                    city: "邢台市",
                    text: "威县",
                    value: "130533"
                }, {
                    city: "邢台市",
                    text: "清河县",
                    value: "130534"
                }, {
                    city: "邢台市",
                    text: "临西县",
                    value: "130535"
                }, {
                    city: "邢台市",
                    text: "南宫市",
                    value: "130581"
                }, {
                    city: "邢台市",
                    text: "沙河市",
                    value: "130582"
                }],
                130600: [{
                    city: "保定市",
                    text: "市辖区",
                    value: "130601"
                }, {
                    city: "保定市",
                    text: "竞秀区",
                    value: "130602"
                }, {
                    city: "保定市",
                    text: "莲池区",
                    value: "130606"
                }, {
                    city: "保定市",
                    text: "满城区",
                    value: "130607"
                }, {
                    city: "保定市",
                    text: "清苑区",
                    value: "130608"
                }, {
                    city: "保定市",
                    text: "徐水区",
                    value: "130609"
                }, {
                    city: "保定市",
                    text: "涞水县",
                    value: "130623"
                }, {
                    city: "保定市",
                    text: "阜平县",
                    value: "130624"
                }, {
                    city: "保定市",
                    text: "定兴县",
                    value: "130626"
                }, {
                    city: "保定市",
                    text: "唐县",
                    value: "130627"
                }, {
                    city: "保定市",
                    text: "高阳县",
                    value: "130628"
                }, {
                    city: "保定市",
                    text: "容城县",
                    value: "130629"
                }, {
                    city: "保定市",
                    text: "涞源县",
                    value: "130630"
                }, {
                    city: "保定市",
                    text: "望都县",
                    value: "130631"
                }, {
                    city: "保定市",
                    text: "安新县",
                    value: "130632"
                }, {
                    city: "保定市",
                    text: "易县",
                    value: "130633"
                }, {
                    city: "保定市",
                    text: "曲阳县",
                    value: "130634"
                }, {
                    city: "保定市",
                    text: "蠡县",
                    value: "130635"
                }, {
                    city: "保定市",
                    text: "顺平县",
                    value: "130636"
                }, {
                    city: "保定市",
                    text: "博野县",
                    value: "130637"
                }, {
                    city: "保定市",
                    text: "雄县",
                    value: "130638"
                }, {
                    city: "保定市",
                    text: "涿州市",
                    value: "130681"
                }, {
                    city: "保定市",
                    text: "安国市",
                    value: "130683"
                }, {
                    city: "保定市",
                    text: "高碑店市",
                    value: "130684"
                }],
                130700: [{
                    city: "张家口市",
                    text: "市辖区",
                    value: "130701"
                }, {
                    city: "张家口市",
                    text: "桥东区",
                    value: "130702"
                }, {
                    city: "张家口市",
                    text: "桥西区",
                    value: "130703"
                }, {
                    city: "张家口市",
                    text: "宣化区",
                    value: "130705"
                }, {
                    city: "张家口市",
                    text: "下花园区",
                    value: "130706"
                }, {
                    city: "张家口市",
                    text: "万全区",
                    value: "130708"
                }, {
                    city: "张家口市",
                    text: "崇礼区",
                    value: "130709"
                }, {
                    city: "张家口市",
                    text: "张北县",
                    value: "130722"
                }, {
                    city: "张家口市",
                    text: "康保县",
                    value: "130723"
                }, {
                    city: "张家口市",
                    text: "沽源县",
                    value: "130724"
                }, {
                    city: "张家口市",
                    text: "尚义县",
                    value: "130725"
                }, {
                    city: "张家口市",
                    text: "蔚县",
                    value: "130726"
                }, {
                    city: "张家口市",
                    text: "阳原县",
                    value: "130727"
                }, {
                    city: "张家口市",
                    text: "怀安县",
                    value: "130728"
                }, {
                    city: "张家口市",
                    text: "怀来县",
                    value: "130730"
                }, {
                    city: "张家口市",
                    text: "涿鹿县",
                    value: "130731"
                }, {
                    city: "张家口市",
                    text: "赤城县",
                    value: "130732"
                }],
                130800: [{
                    city: "承德市",
                    text: "市辖区",
                    value: "130801"
                }, {
                    city: "承德市",
                    text: "双桥区",
                    value: "130802"
                }, {
                    city: "承德市",
                    text: "双滦区",
                    value: "130803"
                }, {
                    city: "承德市",
                    text: "鹰手营子矿区",
                    value: "130804"
                }, {
                    city: "承德市",
                    text: "承德县",
                    value: "130821"
                }, {
                    city: "承德市",
                    text: "兴隆县",
                    value: "130822"
                }, {
                    city: "承德市",
                    text: "平泉县",
                    value: "130823"
                }, {
                    city: "承德市",
                    text: "滦平县",
                    value: "130824"
                }, {
                    city: "承德市",
                    text: "隆化县",
                    value: "130825"
                }, {
                    city: "承德市",
                    text: "丰宁满族自治县",
                    value: "130826"
                }, {
                    city: "承德市",
                    text: "宽城满族自治县",
                    value: "130827"
                }, {
                    city: "承德市",
                    text: "围场满族蒙古族自治县",
                    value: "130828"
                }],
                130900: [{
                    city: "沧州市",
                    text: "市辖区",
                    value: "130901"
                }, {
                    city: "沧州市",
                    text: "新华区",
                    value: "130902"
                }, {
                    city: "沧州市",
                    text: "运河区",
                    value: "130903"
                }, {
                    city: "沧州市",
                    text: "沧县",
                    value: "130921"
                }, {
                    city: "沧州市",
                    text: "青县",
                    value: "130922"
                }, {
                    city: "沧州市",
                    text: "东光县",
                    value: "130923"
                }, {
                    city: "沧州市",
                    text: "海兴县",
                    value: "130924"
                }, {
                    city: "沧州市",
                    text: "盐山县",
                    value: "130925"
                }, {
                    city: "沧州市",
                    text: "肃宁县",
                    value: "130926"
                }, {
                    city: "沧州市",
                    text: "南皮县",
                    value: "130927"
                }, {
                    city: "沧州市",
                    text: "吴桥县",
                    value: "130928"
                }, {
                    city: "沧州市",
                    text: "献县",
                    value: "130929"
                }, {
                    city: "沧州市",
                    text: "孟村回族自治县",
                    value: "130930"
                }, {
                    city: "沧州市",
                    text: "泊头市",
                    value: "130981"
                }, {
                    city: "沧州市",
                    text: "任丘市",
                    value: "130982"
                }, {
                    city: "沧州市",
                    text: "黄骅市",
                    value: "130983"
                }, {
                    city: "沧州市",
                    text: "河间市",
                    value: "130984"
                }],
                131e3: [{
                    city: "廊坊市",
                    text: "市辖区",
                    value: "131001"
                }, {
                    city: "廊坊市",
                    text: "安次区",
                    value: "131002"
                }, {
                    city: "廊坊市",
                    text: "广阳区",
                    value: "131003"
                }, {
                    city: "廊坊市",
                    text: "固安县",
                    value: "131022"
                }, {
                    city: "廊坊市",
                    text: "永清县",
                    value: "131023"
                }, {
                    city: "廊坊市",
                    text: "香河县",
                    value: "131024"
                }, {
                    city: "廊坊市",
                    text: "大城县",
                    value: "131025"
                }, {
                    city: "廊坊市",
                    text: "文安县",
                    value: "131026"
                }, {
                    city: "廊坊市",
                    text: "大厂回族自治县",
                    value: "131028"
                }, {
                    city: "廊坊市",
                    text: "霸州市",
                    value: "131081"
                }, {
                    city: "廊坊市",
                    text: "三河市",
                    value: "131082"
                }],
                131100: [{
                    city: "衡水市",
                    text: "市辖区",
                    value: "131101"
                }, {
                    city: "衡水市",
                    text: "桃城区",
                    value: "131102"
                }, {
                    city: "衡水市",
                    text: "冀州区",
                    value: "131103"
                }, {
                    city: "衡水市",
                    text: "枣强县",
                    value: "131121"
                }, {
                    city: "衡水市",
                    text: "武邑县",
                    value: "131122"
                }, {
                    city: "衡水市",
                    text: "武强县",
                    value: "131123"
                }, {
                    city: "衡水市",
                    text: "饶阳县",
                    value: "131124"
                }, {
                    city: "衡水市",
                    text: "安平县",
                    value: "131125"
                }, {
                    city: "衡水市",
                    text: "故城县",
                    value: "131126"
                }, {
                    city: "衡水市",
                    text: "景县",
                    value: "131127"
                }, {
                    city: "衡水市",
                    text: "阜城县",
                    value: "131128"
                }, {
                    city: "衡水市",
                    text: "深州市",
                    value: "131182"
                }],
                139e3: [{
                    city: "省直辖县级行政区划",
                    text: "定州市",
                    value: "139001"
                }, {
                    city: "省直辖县级行政区划",
                    text: "辛集市",
                    value: "139002"
                }],
                140100: [{
                    city: "太原市",
                    text: "市辖区",
                    value: "140101"
                }, {
                    city: "太原市",
                    text: "小店区",
                    value: "140105"
                }, {
                    city: "太原市",
                    text: "迎泽区",
                    value: "140106"
                }, {
                    city: "太原市",
                    text: "杏花岭区",
                    value: "140107"
                }, {
                    city: "太原市",
                    text: "尖草坪区",
                    value: "140108"
                }, {
                    city: "太原市",
                    text: "万柏林区",
                    value: "140109"
                }, {
                    city: "太原市",
                    text: "晋源区",
                    value: "140110"
                }, {
                    city: "太原市",
                    text: "清徐县",
                    value: "140121"
                }, {
                    city: "太原市",
                    text: "阳曲县",
                    value: "140122"
                }, {
                    city: "太原市",
                    text: "娄烦县",
                    value: "140123"
                }, {
                    city: "太原市",
                    text: "古交市",
                    value: "140181"
                }],
                140200: [{
                    city: "大同市",
                    text: "市辖区",
                    value: "140201"
                }, {
                    city: "大同市",
                    text: "城区",
                    value: "140202"
                }, {
                    city: "大同市",
                    text: "矿区",
                    value: "140203"
                }, {
                    city: "大同市",
                    text: "南郊区",
                    value: "140211"
                }, {
                    city: "大同市",
                    text: "新荣区",
                    value: "140212"
                }, {
                    city: "大同市",
                    text: "阳高县",
                    value: "140221"
                }, {
                    city: "大同市",
                    text: "天镇县",
                    value: "140222"
                }, {
                    city: "大同市",
                    text: "广灵县",
                    value: "140223"
                }, {
                    city: "大同市",
                    text: "灵丘县",
                    value: "140224"
                }, {
                    city: "大同市",
                    text: "浑源县",
                    value: "140225"
                }, {
                    city: "大同市",
                    text: "左云县",
                    value: "140226"
                }, {
                    city: "大同市",
                    text: "大同县",
                    value: "140227"
                }],
                140300: [{
                    city: "阳泉市",
                    text: "市辖区",
                    value: "140301"
                }, {
                    city: "阳泉市",
                    text: "城区",
                    value: "140302"
                }, {
                    city: "阳泉市",
                    text: "矿区",
                    value: "140303"
                }, {
                    city: "阳泉市",
                    text: "郊区",
                    value: "140311"
                }, {
                    city: "阳泉市",
                    text: "平定县",
                    value: "140321"
                }, {
                    city: "阳泉市",
                    text: "盂县",
                    value: "140322"
                }],
                140400: [{
                    city: "长治市",
                    text: "市辖区",
                    value: "140401"
                }, {
                    city: "长治市",
                    text: "城区",
                    value: "140402"
                }, {
                    city: "长治市",
                    text: "郊区",
                    value: "140411"
                }, {
                    city: "长治市",
                    text: "长治县",
                    value: "140421"
                }, {
                    city: "长治市",
                    text: "襄垣县",
                    value: "140423"
                }, {
                    city: "长治市",
                    text: "屯留县",
                    value: "140424"
                }, {
                    city: "长治市",
                    text: "平顺县",
                    value: "140425"
                }, {
                    city: "长治市",
                    text: "黎城县",
                    value: "140426"
                }, {
                    city: "长治市",
                    text: "壶关县",
                    value: "140427"
                }, {
                    city: "长治市",
                    text: "长子县",
                    value: "140428"
                }, {
                    city: "长治市",
                    text: "武乡县",
                    value: "140429"
                }, {
                    city: "长治市",
                    text: "沁县",
                    value: "140430"
                }, {
                    city: "长治市",
                    text: "沁源县",
                    value: "140431"
                }, {
                    city: "长治市",
                    text: "潞城市",
                    value: "140481"
                }],
                140500: [{
                    city: "晋城市",
                    text: "市辖区",
                    value: "140501"
                }, {
                    city: "晋城市",
                    text: "城区",
                    value: "140502"
                }, {
                    city: "晋城市",
                    text: "沁水县",
                    value: "140521"
                }, {
                    city: "晋城市",
                    text: "阳城县",
                    value: "140522"
                }, {
                    city: "晋城市",
                    text: "陵川县",
                    value: "140524"
                }, {
                    city: "晋城市",
                    text: "泽州县",
                    value: "140525"
                }, {
                    city: "晋城市",
                    text: "高平市",
                    value: "140581"
                }],
                140600: [{
                    city: "朔州市",
                    text: "市辖区",
                    value: "140601"
                }, {
                    city: "朔州市",
                    text: "朔城区",
                    value: "140602"
                }, {
                    city: "朔州市",
                    text: "平鲁区",
                    value: "140603"
                }, {
                    city: "朔州市",
                    text: "山阴县",
                    value: "140621"
                }, {
                    city: "朔州市",
                    text: "应县",
                    value: "140622"
                }, {
                    city: "朔州市",
                    text: "右玉县",
                    value: "140623"
                }, {
                    city: "朔州市",
                    text: "怀仁县",
                    value: "140624"
                }],
                140700: [{
                    city: "晋中市",
                    text: "市辖区",
                    value: "140701"
                }, {
                    city: "晋中市",
                    text: "榆次区",
                    value: "140702"
                }, {
                    city: "晋中市",
                    text: "榆社县",
                    value: "140721"
                }, {
                    city: "晋中市",
                    text: "左权县",
                    value: "140722"
                }, {
                    city: "晋中市",
                    text: "和顺县",
                    value: "140723"
                }, {
                    city: "晋中市",
                    text: "昔阳县",
                    value: "140724"
                }, {
                    city: "晋中市",
                    text: "寿阳县",
                    value: "140725"
                }, {
                    city: "晋中市",
                    text: "太谷县",
                    value: "140726"
                }, {
                    city: "晋中市",
                    text: "祁县",
                    value: "140727"
                }, {
                    city: "晋中市",
                    text: "平遥县",
                    value: "140728"
                }, {
                    city: "晋中市",
                    text: "灵石县",
                    value: "140729"
                }, {
                    city: "晋中市",
                    text: "介休市",
                    value: "140781"
                }],
                140800: [{
                    city: "运城市",
                    text: "市辖区",
                    value: "140801"
                }, {
                    city: "运城市",
                    text: "盐湖区",
                    value: "140802"
                }, {
                    city: "运城市",
                    text: "临猗县",
                    value: "140821"
                }, {
                    city: "运城市",
                    text: "万荣县",
                    value: "140822"
                }, {
                    city: "运城市",
                    text: "闻喜县",
                    value: "140823"
                }, {
                    city: "运城市",
                    text: "稷山县",
                    value: "140824"
                }, {
                    city: "运城市",
                    text: "新绛县",
                    value: "140825"
                }, {
                    city: "运城市",
                    text: "绛县",
                    value: "140826"
                }, {
                    city: "运城市",
                    text: "垣曲县",
                    value: "140827"
                }, {
                    city: "运城市",
                    text: "夏县",
                    value: "140828"
                }, {
                    city: "运城市",
                    text: "平陆县",
                    value: "140829"
                }, {
                    city: "运城市",
                    text: "芮城县",
                    value: "140830"
                }, {
                    city: "运城市",
                    text: "永济市",
                    value: "140881"
                }, {
                    city: "运城市",
                    text: "河津市",
                    value: "140882"
                }],
                140900: [{
                    city: "忻州市",
                    text: "市辖区",
                    value: "140901"
                }, {
                    city: "忻州市",
                    text: "忻府区",
                    value: "140902"
                }, {
                    city: "忻州市",
                    text: "定襄县",
                    value: "140921"
                }, {
                    city: "忻州市",
                    text: "五台县",
                    value: "140922"
                }, {
                    city: "忻州市",
                    text: "代县",
                    value: "140923"
                }, {
                    city: "忻州市",
                    text: "繁峙县",
                    value: "140924"
                }, {
                    city: "忻州市",
                    text: "宁武县",
                    value: "140925"
                }, {
                    city: "忻州市",
                    text: "静乐县",
                    value: "140926"
                }, {
                    city: "忻州市",
                    text: "神池县",
                    value: "140927"
                }, {
                    city: "忻州市",
                    text: "五寨县",
                    value: "140928"
                }, {
                    city: "忻州市",
                    text: "岢岚县",
                    value: "140929"
                }, {
                    city: "忻州市",
                    text: "河曲县",
                    value: "140930"
                }, {
                    city: "忻州市",
                    text: "保德县",
                    value: "140931"
                }, {
                    city: "忻州市",
                    text: "偏关县",
                    value: "140932"
                }, {
                    city: "忻州市",
                    text: "原平市",
                    value: "140981"
                }],
                141e3: [{
                    city: "临汾市",
                    text: "市辖区",
                    value: "141001"
                }, {
                    city: "临汾市",
                    text: "尧都区",
                    value: "141002"
                }, {
                    city: "临汾市",
                    text: "曲沃县",
                    value: "141021"
                }, {
                    city: "临汾市",
                    text: "翼城县",
                    value: "141022"
                }, {
                    city: "临汾市",
                    text: "襄汾县",
                    value: "141023"
                }, {
                    city: "临汾市",
                    text: "洪洞县",
                    value: "141024"
                }, {
                    city: "临汾市",
                    text: "古县",
                    value: "141025"
                }, {
                    city: "临汾市",
                    text: "安泽县",
                    value: "141026"
                }, {
                    city: "临汾市",
                    text: "浮山县",
                    value: "141027"
                }, {
                    city: "临汾市",
                    text: "吉县",
                    value: "141028"
                }, {
                    city: "临汾市",
                    text: "乡宁县",
                    value: "141029"
                }, {
                    city: "临汾市",
                    text: "大宁县",
                    value: "141030"
                }, {
                    city: "临汾市",
                    text: "隰县",
                    value: "141031"
                }, {
                    city: "临汾市",
                    text: "永和县",
                    value: "141032"
                }, {
                    city: "临汾市",
                    text: "蒲县",
                    value: "141033"
                }, {
                    city: "临汾市",
                    text: "汾西县",
                    value: "141034"
                }, {
                    city: "临汾市",
                    text: "侯马市",
                    value: "141081"
                }, {
                    city: "临汾市",
                    text: "霍州市",
                    value: "141082"
                }],
                141100: [{
                    city: "吕梁市",
                    text: "市辖区",
                    value: "141101"
                }, {
                    city: "吕梁市",
                    text: "离石区",
                    value: "141102"
                }, {
                    city: "吕梁市",
                    text: "文水县",
                    value: "141121"
                }, {
                    city: "吕梁市",
                    text: "交城县",
                    value: "141122"
                }, {
                    city: "吕梁市",
                    text: "兴县",
                    value: "141123"
                }, {
                    city: "吕梁市",
                    text: "临县",
                    value: "141124"
                }, {
                    city: "吕梁市",
                    text: "柳林县",
                    value: "141125"
                }, {
                    city: "吕梁市",
                    text: "石楼县",
                    value: "141126"
                }, {
                    city: "吕梁市",
                    text: "岚县",
                    value: "141127"
                }, {
                    city: "吕梁市",
                    text: "方山县",
                    value: "141128"
                }, {
                    city: "吕梁市",
                    text: "中阳县",
                    value: "141129"
                }, {
                    city: "吕梁市",
                    text: "交口县",
                    value: "141130"
                }, {
                    city: "吕梁市",
                    text: "孝义市",
                    value: "141181"
                }, {
                    city: "吕梁市",
                    text: "汾阳市",
                    value: "141182"
                }],
                150100: [{
                    city: "呼和浩特市",
                    text: "市辖区",
                    value: "150101"
                }, {
                    city: "呼和浩特市",
                    text: "新城区",
                    value: "150102"
                }, {
                    city: "呼和浩特市",
                    text: "回民区",
                    value: "150103"
                }, {
                    city: "呼和浩特市",
                    text: "玉泉区",
                    value: "150104"
                }, {
                    city: "呼和浩特市",
                    text: "赛罕区",
                    value: "150105"
                }, {
                    city: "呼和浩特市",
                    text: "土默特左旗",
                    value: "150121"
                }, {
                    city: "呼和浩特市",
                    text: "托克托县",
                    value: "150122"
                }, {
                    city: "呼和浩特市",
                    text: "和林格尔县",
                    value: "150123"
                }, {
                    city: "呼和浩特市",
                    text: "清水河县",
                    value: "150124"
                }, {
                    city: "呼和浩特市",
                    text: "武川县",
                    value: "150125"
                }],
                150200: [{
                    city: "包头市",
                    text: "市辖区",
                    value: "150201"
                }, {
                    city: "包头市",
                    text: "东河区",
                    value: "150202"
                }, {
                    city: "包头市",
                    text: "昆都仑区",
                    value: "150203"
                }, {
                    city: "包头市",
                    text: "青山区",
                    value: "150204"
                }, {
                    city: "包头市",
                    text: "石拐区",
                    value: "150205"
                }, {
                    city: "包头市",
                    text: "白云鄂博矿区",
                    value: "150206"
                }, {
                    city: "包头市",
                    text: "九原区",
                    value: "150207"
                }, {
                    city: "包头市",
                    text: "土默特右旗",
                    value: "150221"
                }, {
                    city: "包头市",
                    text: "固阳县",
                    value: "150222"
                }, {
                    city: "包头市",
                    text: "达尔罕茂明安联合旗",
                    value: "150223"
                }],
                150300: [{
                    city: "乌海市",
                    text: "市辖区",
                    value: "150301"
                }, {
                    city: "乌海市",
                    text: "海勃湾区",
                    value: "150302"
                }, {
                    city: "乌海市",
                    text: "海南区",
                    value: "150303"
                }, {
                    city: "乌海市",
                    text: "乌达区",
                    value: "150304"
                }],
                150400: [{
                    city: "赤峰市",
                    text: "市辖区",
                    value: "150401"
                }, {
                    city: "赤峰市",
                    text: "红山区",
                    value: "150402"
                }, {
                    city: "赤峰市",
                    text: "元宝山区",
                    value: "150403"
                }, {
                    city: "赤峰市",
                    text: "松山区",
                    value: "150404"
                }, {
                    city: "赤峰市",
                    text: "阿鲁科尔沁旗",
                    value: "150421"
                }, {
                    city: "赤峰市",
                    text: "巴林左旗",
                    value: "150422"
                }, {
                    city: "赤峰市",
                    text: "巴林右旗",
                    value: "150423"
                }, {
                    city: "赤峰市",
                    text: "林西县",
                    value: "150424"
                }, {
                    city: "赤峰市",
                    text: "克什克腾旗",
                    value: "150425"
                }, {
                    city: "赤峰市",
                    text: "翁牛特旗",
                    value: "150426"
                }, {
                    city: "赤峰市",
                    text: "喀喇沁旗",
                    value: "150428"
                }, {
                    city: "赤峰市",
                    text: "宁城县",
                    value: "150429"
                }, {
                    city: "赤峰市",
                    text: "敖汉旗",
                    value: "150430"
                }],
                150500: [{
                    city: "通辽市",
                    text: "市辖区",
                    value: "150501"
                }, {
                    city: "通辽市",
                    text: "科尔沁区",
                    value: "150502"
                }, {
                    city: "通辽市",
                    text: "科尔沁左翼中旗",
                    value: "150521"
                }, {
                    city: "通辽市",
                    text: "科尔沁左翼后旗",
                    value: "150522"
                }, {
                    city: "通辽市",
                    text: "开鲁县",
                    value: "150523"
                }, {
                    city: "通辽市",
                    text: "库伦旗",
                    value: "150524"
                }, {
                    city: "通辽市",
                    text: "奈曼旗",
                    value: "150525"
                }, {
                    city: "通辽市",
                    text: "扎鲁特旗",
                    value: "150526"
                }, {
                    city: "通辽市",
                    text: "霍林郭勒市",
                    value: "150581"
                }],
                150600: [{
                    city: "鄂尔多斯市",
                    text: "市辖区",
                    value: "150601"
                }, {
                    city: "鄂尔多斯市",
                    text: "东胜区",
                    value: "150602"
                }, {
                    city: "鄂尔多斯市",
                    text: "康巴什区",
                    value: "150603"
                }, {
                    city: "鄂尔多斯市",
                    text: "达拉特旗",
                    value: "150621"
                }, {
                    city: "鄂尔多斯市",
                    text: "准格尔旗",
                    value: "150622"
                }, {
                    city: "鄂尔多斯市",
                    text: "鄂托克前旗",
                    value: "150623"
                }, {
                    city: "鄂尔多斯市",
                    text: "鄂托克旗",
                    value: "150624"
                }, {
                    city: "鄂尔多斯市",
                    text: "杭锦旗",
                    value: "150625"
                }, {
                    city: "鄂尔多斯市",
                    text: "乌审旗",
                    value: "150626"
                }, {
                    city: "鄂尔多斯市",
                    text: "伊金霍洛旗",
                    value: "150627"
                }],
                150700: [{
                    city: "呼伦贝尔市",
                    text: "市辖区",
                    value: "150701"
                }, {
                    city: "呼伦贝尔市",
                    text: "海拉尔区",
                    value: "150702"
                }, {
                    city: "呼伦贝尔市",
                    text: "扎赉诺尔区",
                    value: "150703"
                }, {
                    city: "呼伦贝尔市",
                    text: "阿荣旗",
                    value: "150721"
                }, {
                    city: "呼伦贝尔市",
                    text: "莫力达瓦达斡尔族自治旗",
                    value: "150722"
                }, {
                    city: "呼伦贝尔市",
                    text: "鄂伦春自治旗",
                    value: "150723"
                }, {
                    city: "呼伦贝尔市",
                    text: "鄂温克族自治旗",
                    value: "150724"
                }, {
                    city: "呼伦贝尔市",
                    text: "陈巴尔虎旗",
                    value: "150725"
                }, {
                    city: "呼伦贝尔市",
                    text: "新巴尔虎左旗",
                    value: "150726"
                }, {
                    city: "呼伦贝尔市",
                    text: "新巴尔虎右旗",
                    value: "150727"
                }, {
                    city: "呼伦贝尔市",
                    text: "满洲里市",
                    value: "150781"
                }, {
                    city: "呼伦贝尔市",
                    text: "牙克石市",
                    value: "150782"
                }, {
                    city: "呼伦贝尔市",
                    text: "扎兰屯市",
                    value: "150783"
                }, {
                    city: "呼伦贝尔市",
                    text: "额尔古纳市",
                    value: "150784"
                }, {
                    city: "呼伦贝尔市",
                    text: "根河市",
                    value: "150785"
                }],
                150800: [{
                    city: "巴彦淖尔市",
                    text: "市辖区",
                    value: "150801"
                }, {
                    city: "巴彦淖尔市",
                    text: "临河区",
                    value: "150802"
                }, {
                    city: "巴彦淖尔市",
                    text: "五原县",
                    value: "150821"
                }, {
                    city: "巴彦淖尔市",
                    text: "磴口县",
                    value: "150822"
                }, {
                    city: "巴彦淖尔市",
                    text: "乌拉特前旗",
                    value: "150823"
                }, {
                    city: "巴彦淖尔市",
                    text: "乌拉特中旗",
                    value: "150824"
                }, {
                    city: "巴彦淖尔市",
                    text: "乌拉特后旗",
                    value: "150825"
                }, {
                    city: "巴彦淖尔市",
                    text: "杭锦后旗",
                    value: "150826"
                }],
                150900: [{
                    city: "乌兰察布市",
                    text: "市辖区",
                    value: "150901"
                }, {
                    city: "乌兰察布市",
                    text: "集宁区",
                    value: "150902"
                }, {
                    city: "乌兰察布市",
                    text: "卓资县",
                    value: "150921"
                }, {
                    city: "乌兰察布市",
                    text: "化德县",
                    value: "150922"
                }, {
                    city: "乌兰察布市",
                    text: "商都县",
                    value: "150923"
                }, {
                    city: "乌兰察布市",
                    text: "兴和县",
                    value: "150924"
                }, {
                    city: "乌兰察布市",
                    text: "凉城县",
                    value: "150925"
                }, {
                    city: "乌兰察布市",
                    text: "察哈尔右翼前旗",
                    value: "150926"
                }, {
                    city: "乌兰察布市",
                    text: "察哈尔右翼中旗",
                    value: "150927"
                }, {
                    city: "乌兰察布市",
                    text: "察哈尔右翼后旗",
                    value: "150928"
                }, {
                    city: "乌兰察布市",
                    text: "四子王旗",
                    value: "150929"
                }, {
                    city: "乌兰察布市",
                    text: "丰镇市",
                    value: "150981"
                }],
                152200: [{
                    city: "兴安盟",
                    text: "乌兰浩特市",
                    value: "152201"
                }, {
                    city: "兴安盟",
                    text: "阿尔山市",
                    value: "152202"
                }, {
                    city: "兴安盟",
                    text: "科尔沁右翼前旗",
                    value: "152221"
                }, {
                    city: "兴安盟",
                    text: "科尔沁右翼中旗",
                    value: "152222"
                }, {
                    city: "兴安盟",
                    text: "扎赉特旗",
                    value: "152223"
                }, {
                    city: "兴安盟",
                    text: "突泉县",
                    value: "152224"
                }],
                152500: [{
                    city: "锡林郭勒盟",
                    text: "二连浩特市",
                    value: "152501"
                }, {
                    city: "锡林郭勒盟",
                    text: "锡林浩特市",
                    value: "152502"
                }, {
                    city: "锡林郭勒盟",
                    text: "阿巴嘎旗",
                    value: "152522"
                }, {
                    city: "锡林郭勒盟",
                    text: "苏尼特左旗",
                    value: "152523"
                }, {
                    city: "锡林郭勒盟",
                    text: "苏尼特右旗",
                    value: "152524"
                }, {
                    city: "锡林郭勒盟",
                    text: "东乌珠穆沁旗",
                    value: "152525"
                }, {
                    city: "锡林郭勒盟",
                    text: "西乌珠穆沁旗",
                    value: "152526"
                }, {
                    city: "锡林郭勒盟",
                    text: "太仆寺旗",
                    value: "152527"
                }, {
                    city: "锡林郭勒盟",
                    text: "镶黄旗",
                    value: "152528"
                }, {
                    city: "锡林郭勒盟",
                    text: "正镶白旗",
                    value: "152529"
                }, {
                    city: "锡林郭勒盟",
                    text: "正蓝旗",
                    value: "152530"
                }, {
                    city: "锡林郭勒盟",
                    text: "多伦县",
                    value: "152531"
                }],
                152900: [{
                    city: "阿拉善盟",
                    text: "阿拉善左旗",
                    value: "152921"
                }, {
                    city: "阿拉善盟",
                    text: "阿拉善右旗",
                    value: "152922"
                }, {
                    city: "阿拉善盟",
                    text: "额济纳旗",
                    value: "152923"
                }],
                210100: [{
                    city: "沈阳市",
                    text: "市辖区",
                    value: "210101"
                }, {
                    city: "沈阳市",
                    text: "和平区",
                    value: "210102"
                }, {
                    city: "沈阳市",
                    text: "沈河区",
                    value: "210103"
                }, {
                    city: "沈阳市",
                    text: "大东区",
                    value: "210104"
                }, {
                    city: "沈阳市",
                    text: "皇姑区",
                    value: "210105"
                }, {
                    city: "沈阳市",
                    text: "铁西区",
                    value: "210106"
                }, {
                    city: "沈阳市",
                    text: "苏家屯区",
                    value: "210111"
                }, {
                    city: "沈阳市",
                    text: "浑南区",
                    value: "210112"
                }, {
                    city: "沈阳市",
                    text: "沈北新区",
                    value: "210113"
                }, {
                    city: "沈阳市",
                    text: "于洪区",
                    value: "210114"
                }, {
                    city: "沈阳市",
                    text: "辽中区",
                    value: "210115"
                }, {
                    city: "沈阳市",
                    text: "康平县",
                    value: "210123"
                }, {
                    city: "沈阳市",
                    text: "法库县",
                    value: "210124"
                }, {
                    city: "沈阳市",
                    text: "新民市",
                    value: "210181"
                }],
                210200: [{
                    city: "大连市",
                    text: "市辖区",
                    value: "210201"
                }, {
                    city: "大连市",
                    text: "中山区",
                    value: "210202"
                }, {
                    city: "大连市",
                    text: "西岗区",
                    value: "210203"
                }, {
                    city: "大连市",
                    text: "沙河口区",
                    value: "210204"
                }, {
                    city: "大连市",
                    text: "甘井子区",
                    value: "210211"
                }, {
                    city: "大连市",
                    text: "旅顺口区",
                    value: "210212"
                }, {
                    city: "大连市",
                    text: "金州区",
                    value: "210213"
                }, {
                    city: "大连市",
                    text: "普兰店区",
                    value: "210214"
                }, {
                    city: "大连市",
                    text: "长海县",
                    value: "210224"
                }, {
                    city: "大连市",
                    text: "瓦房店市",
                    value: "210281"
                }, {
                    city: "大连市",
                    text: "庄河市",
                    value: "210283"
                }],
                210300: [{
                    city: "鞍山市",
                    text: "市辖区",
                    value: "210301"
                }, {
                    city: "鞍山市",
                    text: "铁东区",
                    value: "210302"
                }, {
                    city: "鞍山市",
                    text: "铁西区",
                    value: "210303"
                }, {
                    city: "鞍山市",
                    text: "立山区",
                    value: "210304"
                }, {
                    city: "鞍山市",
                    text: "千山区",
                    value: "210311"
                }, {
                    city: "鞍山市",
                    text: "台安县",
                    value: "210321"
                }, {
                    city: "鞍山市",
                    text: "岫岩满族自治县",
                    value: "210323"
                }, {
                    city: "鞍山市",
                    text: "海城市",
                    value: "210381"
                }],
                210400: [{
                    city: "抚顺市",
                    text: "市辖区",
                    value: "210401"
                }, {
                    city: "抚顺市",
                    text: "新抚区",
                    value: "210402"
                }, {
                    city: "抚顺市",
                    text: "东洲区",
                    value: "210403"
                }, {
                    city: "抚顺市",
                    text: "望花区",
                    value: "210404"
                }, {
                    city: "抚顺市",
                    text: "顺城区",
                    value: "210411"
                }, {
                    city: "抚顺市",
                    text: "抚顺县",
                    value: "210421"
                }, {
                    city: "抚顺市",
                    text: "新宾满族自治县",
                    value: "210422"
                }, {
                    city: "抚顺市",
                    text: "清原满族自治县",
                    value: "210423"
                }],
                210500: [{
                    city: "本溪市",
                    text: "市辖区",
                    value: "210501"
                }, {
                    city: "本溪市",
                    text: "平山区",
                    value: "210502"
                }, {
                    city: "本溪市",
                    text: "溪湖区",
                    value: "210503"
                }, {
                    city: "本溪市",
                    text: "明山区",
                    value: "210504"
                }, {
                    city: "本溪市",
                    text: "南芬区",
                    value: "210505"
                }, {
                    city: "本溪市",
                    text: "本溪满族自治县",
                    value: "210521"
                }, {
                    city: "本溪市",
                    text: "桓仁满族自治县",
                    value: "210522"
                }],
                210600: [{
                    city: "丹东市",
                    text: "市辖区",
                    value: "210601"
                }, {
                    city: "丹东市",
                    text: "元宝区",
                    value: "210602"
                }, {
                    city: "丹东市",
                    text: "振兴区",
                    value: "210603"
                }, {
                    city: "丹东市",
                    text: "振安区",
                    value: "210604"
                }, {
                    city: "丹东市",
                    text: "宽甸满族自治县",
                    value: "210624"
                }, {
                    city: "丹东市",
                    text: "东港市",
                    value: "210681"
                }, {
                    city: "丹东市",
                    text: "凤城市",
                    value: "210682"
                }],
                210700: [{
                    city: "锦州市",
                    text: "市辖区",
                    value: "210701"
                }, {
                    city: "锦州市",
                    text: "古塔区",
                    value: "210702"
                }, {
                    city: "锦州市",
                    text: "凌河区",
                    value: "210703"
                }, {
                    city: "锦州市",
                    text: "太和区",
                    value: "210711"
                }, {
                    city: "锦州市",
                    text: "黑山县",
                    value: "210726"
                }, {
                    city: "锦州市",
                    text: "义县",
                    value: "210727"
                }, {
                    city: "锦州市",
                    text: "凌海市",
                    value: "210781"
                }, {
                    city: "锦州市",
                    text: "北镇市",
                    value: "210782"
                }],
                210800: [{
                    city: "营口市",
                    text: "市辖区",
                    value: "210801"
                }, {
                    city: "营口市",
                    text: "站前区",
                    value: "210802"
                }, {
                    city: "营口市",
                    text: "西市区",
                    value: "210803"
                }, {
                    city: "营口市",
                    text: "鲅鱼圈区",
                    value: "210804"
                }, {
                    city: "营口市",
                    text: "老边区",
                    value: "210811"
                }, {
                    city: "营口市",
                    text: "盖州市",
                    value: "210881"
                }, {
                    city: "营口市",
                    text: "大石桥市",
                    value: "210882"
                }],
                210900: [{
                    city: "阜新市",
                    text: "市辖区",
                    value: "210901"
                }, {
                    city: "阜新市",
                    text: "海州区",
                    value: "210902"
                }, {
                    city: "阜新市",
                    text: "新邱区",
                    value: "210903"
                }, {
                    city: "阜新市",
                    text: "太平区",
                    value: "210904"
                }, {
                    city: "阜新市",
                    text: "清河门区",
                    value: "210905"
                }, {
                    city: "阜新市",
                    text: "细河区",
                    value: "210911"
                }, {
                    city: "阜新市",
                    text: "阜新蒙古族自治县",
                    value: "210921"
                }, {
                    city: "阜新市",
                    text: "彰武县",
                    value: "210922"
                }],
                211e3: [{
                    city: "辽阳市",
                    text: "市辖区",
                    value: "211001"
                }, {
                    city: "辽阳市",
                    text: "白塔区",
                    value: "211002"
                }, {
                    city: "辽阳市",
                    text: "文圣区",
                    value: "211003"
                }, {
                    city: "辽阳市",
                    text: "宏伟区",
                    value: "211004"
                }, {
                    city: "辽阳市",
                    text: "弓长岭区",
                    value: "211005"
                }, {
                    city: "辽阳市",
                    text: "太子河区",
                    value: "211011"
                }, {
                    city: "辽阳市",
                    text: "辽阳县",
                    value: "211021"
                }, {
                    city: "辽阳市",
                    text: "灯塔市",
                    value: "211081"
                }],
                211100: [{
                    city: "盘锦市",
                    text: "市辖区",
                    value: "211101"
                }, {
                    city: "盘锦市",
                    text: "双台子区",
                    value: "211102"
                }, {
                    city: "盘锦市",
                    text: "兴隆台区",
                    value: "211103"
                }, {
                    city: "盘锦市",
                    text: "大洼区",
                    value: "211104"
                }, {
                    city: "盘锦市",
                    text: "盘山县",
                    value: "211122"
                }],
                211200: [{
                    city: "铁岭市",
                    text: "市辖区",
                    value: "211201"
                }, {
                    city: "铁岭市",
                    text: "银州区",
                    value: "211202"
                }, {
                    city: "铁岭市",
                    text: "清河区",
                    value: "211204"
                }, {
                    city: "铁岭市",
                    text: "铁岭县",
                    value: "211221"
                }, {
                    city: "铁岭市",
                    text: "西丰县",
                    value: "211223"
                }, {
                    city: "铁岭市",
                    text: "昌图县",
                    value: "211224"
                }, {
                    city: "铁岭市",
                    text: "调兵山市",
                    value: "211281"
                }, {
                    city: "铁岭市",
                    text: "开原市",
                    value: "211282"
                }],
                211300: [{
                    city: "朝阳市",
                    text: "市辖区",
                    value: "211301"
                }, {
                    city: "朝阳市",
                    text: "双塔区",
                    value: "211302"
                }, {
                    city: "朝阳市",
                    text: "龙城区",
                    value: "211303"
                }, {
                    city: "朝阳市",
                    text: "朝阳县",
                    value: "211321"
                }, {
                    city: "朝阳市",
                    text: "建平县",
                    value: "211322"
                }, {
                    city: "朝阳市",
                    text: "喀喇沁左翼蒙古族自治县",
                    value: "211324"
                }, {
                    city: "朝阳市",
                    text: "北票市",
                    value: "211381"
                }, {
                    city: "朝阳市",
                    text: "凌源市",
                    value: "211382"
                }],
                211400: [{
                    city: "葫芦岛市",
                    text: "市辖区",
                    value: "211401"
                }, {
                    city: "葫芦岛市",
                    text: "连山区",
                    value: "211402"
                }, {
                    city: "葫芦岛市",
                    text: "龙港区",
                    value: "211403"
                }, {
                    city: "葫芦岛市",
                    text: "南票区",
                    value: "211404"
                }, {
                    city: "葫芦岛市",
                    text: "绥中县",
                    value: "211421"
                }, {
                    city: "葫芦岛市",
                    text: "建昌县",
                    value: "211422"
                }, {
                    city: "葫芦岛市",
                    text: "兴城市",
                    value: "211481"
                }],
                220100: [{
                    city: "长春市",
                    text: "市辖区",
                    value: "220101"
                }, {
                    city: "长春市",
                    text: "南关区",
                    value: "220102"
                }, {
                    city: "长春市",
                    text: "宽城区",
                    value: "220103"
                }, {
                    city: "长春市",
                    text: "朝阳区",
                    value: "220104"
                }, {
                    city: "长春市",
                    text: "二道区",
                    value: "220105"
                }, {
                    city: "长春市",
                    text: "绿园区",
                    value: "220106"
                }, {
                    city: "长春市",
                    text: "双阳区",
                    value: "220112"
                }, {
                    city: "长春市",
                    text: "九台区",
                    value: "220113"
                }, {
                    city: "长春市",
                    text: "农安县",
                    value: "220122"
                }, {
                    city: "长春市",
                    text: "榆树市",
                    value: "220182"
                }, {
                    city: "长春市",
                    text: "德惠市",
                    value: "220183"
                }],
                220200: [{
                    city: "吉林市",
                    text: "市辖区",
                    value: "220201"
                }, {
                    city: "吉林市",
                    text: "昌邑区",
                    value: "220202"
                }, {
                    city: "吉林市",
                    text: "龙潭区",
                    value: "220203"
                }, {
                    city: "吉林市",
                    text: "船营区",
                    value: "220204"
                }, {
                    city: "吉林市",
                    text: "丰满区",
                    value: "220211"
                }, {
                    city: "吉林市",
                    text: "永吉县",
                    value: "220221"
                }, {
                    city: "吉林市",
                    text: "蛟河市",
                    value: "220281"
                }, {
                    city: "吉林市",
                    text: "桦甸市",
                    value: "220282"
                }, {
                    city: "吉林市",
                    text: "舒兰市",
                    value: "220283"
                }, {
                    city: "吉林市",
                    text: "磐石市",
                    value: "220284"
                }],
                220300: [{
                    city: "四平市",
                    text: "市辖区",
                    value: "220301"
                }, {
                    city: "四平市",
                    text: "铁西区",
                    value: "220302"
                }, {
                    city: "四平市",
                    text: "铁东区",
                    value: "220303"
                }, {
                    city: "四平市",
                    text: "梨树县",
                    value: "220322"
                }, {
                    city: "四平市",
                    text: "伊通满族自治县",
                    value: "220323"
                }, {
                    city: "四平市",
                    text: "公主岭市",
                    value: "220381"
                }, {
                    city: "四平市",
                    text: "双辽市",
                    value: "220382"
                }],
                220400: [{
                    city: "辽源市",
                    text: "市辖区",
                    value: "220401"
                }, {
                    city: "辽源市",
                    text: "龙山区",
                    value: "220402"
                }, {
                    city: "辽源市",
                    text: "西安区",
                    value: "220403"
                }, {
                    city: "辽源市",
                    text: "东丰县",
                    value: "220421"
                }, {
                    city: "辽源市",
                    text: "东辽县",
                    value: "220422"
                }],
                220500: [{
                    city: "通化市",
                    text: "市辖区",
                    value: "220501"
                }, {
                    city: "通化市",
                    text: "东昌区",
                    value: "220502"
                }, {
                    city: "通化市",
                    text: "二道江区",
                    value: "220503"
                }, {
                    city: "通化市",
                    text: "通化县",
                    value: "220521"
                }, {
                    city: "通化市",
                    text: "辉南县",
                    value: "220523"
                }, {
                    city: "通化市",
                    text: "柳河县",
                    value: "220524"
                }, {
                    city: "通化市",
                    text: "梅河口市",
                    value: "220581"
                }, {
                    city: "通化市",
                    text: "集安市",
                    value: "220582"
                }],
                220600: [{
                    city: "白山市",
                    text: "市辖区",
                    value: "220601"
                }, {
                    city: "白山市",
                    text: "浑江区",
                    value: "220602"
                }, {
                    city: "白山市",
                    text: "江源区",
                    value: "220605"
                }, {
                    city: "白山市",
                    text: "抚松县",
                    value: "220621"
                }, {
                    city: "白山市",
                    text: "靖宇县",
                    value: "220622"
                }, {
                    city: "白山市",
                    text: "长白朝鲜族自治县",
                    value: "220623"
                }, {
                    city: "白山市",
                    text: "临江市",
                    value: "220681"
                }],
                220700: [{
                    city: "松原市",
                    text: "市辖区",
                    value: "220701"
                }, {
                    city: "松原市",
                    text: "宁江区",
                    value: "220702"
                }, {
                    city: "松原市",
                    text: "前郭尔罗斯蒙古族自治县",
                    value: "220721"
                }, {
                    city: "松原市",
                    text: "长岭县",
                    value: "220722"
                }, {
                    city: "松原市",
                    text: "乾安县",
                    value: "220723"
                }, {
                    city: "松原市",
                    text: "扶余市",
                    value: "220781"
                }],
                220800: [{
                    city: "白城市",
                    text: "市辖区",
                    value: "220801"
                }, {
                    city: "白城市",
                    text: "洮北区",
                    value: "220802"
                }, {
                    city: "白城市",
                    text: "镇赉县",
                    value: "220821"
                }, {
                    city: "白城市",
                    text: "通榆县",
                    value: "220822"
                }, {
                    city: "白城市",
                    text: "洮南市",
                    value: "220881"
                }, {
                    city: "白城市",
                    text: "大安市",
                    value: "220882"
                }],
                222400: [{
                    city: "延边朝鲜族自治州",
                    text: "延吉市",
                    value: "222401"
                }, {
                    city: "延边朝鲜族自治州",
                    text: "图们市",
                    value: "222402"
                }, {
                    city: "延边朝鲜族自治州",
                    text: "敦化市",
                    value: "222403"
                }, {
                    city: "延边朝鲜族自治州",
                    text: "珲春市",
                    value: "222404"
                }, {
                    city: "延边朝鲜族自治州",
                    text: "龙井市",
                    value: "222405"
                }, {
                    city: "延边朝鲜族自治州",
                    text: "和龙市",
                    value: "222406"
                }, {
                    city: "延边朝鲜族自治州",
                    text: "汪清县",
                    value: "222424"
                }, {
                    city: "延边朝鲜族自治州",
                    text: "安图县",
                    value: "222426"
                }],
                230100: [{
                    city: "哈尔滨市",
                    text: "市辖区",
                    value: "230101"
                }, {
                    city: "哈尔滨市",
                    text: "道里区",
                    value: "230102"
                }, {
                    city: "哈尔滨市",
                    text: "南岗区",
                    value: "230103"
                }, {
                    city: "哈尔滨市",
                    text: "道外区",
                    value: "230104"
                }, {
                    city: "哈尔滨市",
                    text: "平房区",
                    value: "230108"
                }, {
                    city: "哈尔滨市",
                    text: "松北区",
                    value: "230109"
                }, {
                    city: "哈尔滨市",
                    text: "香坊区",
                    value: "230110"
                }, {
                    city: "哈尔滨市",
                    text: "呼兰区",
                    value: "230111"
                }, {
                    city: "哈尔滨市",
                    text: "阿城区",
                    value: "230112"
                }, {
                    city: "哈尔滨市",
                    text: "双城区",
                    value: "230113"
                }, {
                    city: "哈尔滨市",
                    text: "依兰县",
                    value: "230123"
                }, {
                    city: "哈尔滨市",
                    text: "方正县",
                    value: "230124"
                }, {
                    city: "哈尔滨市",
                    text: "宾县",
                    value: "230125"
                }, {
                    city: "哈尔滨市",
                    text: "巴彦县",
                    value: "230126"
                }, {
                    city: "哈尔滨市",
                    text: "木兰县",
                    value: "230127"
                }, {
                    city: "哈尔滨市",
                    text: "通河县",
                    value: "230128"
                }, {
                    city: "哈尔滨市",
                    text: "延寿县",
                    value: "230129"
                }, {
                    city: "哈尔滨市",
                    text: "尚志市",
                    value: "230183"
                }, {
                    city: "哈尔滨市",
                    text: "五常市",
                    value: "230184"
                }],
                230200: [{
                    city: "齐齐哈尔市",
                    text: "市辖区",
                    value: "230201"
                }, {
                    city: "齐齐哈尔市",
                    text: "龙沙区",
                    value: "230202"
                }, {
                    city: "齐齐哈尔市",
                    text: "建华区",
                    value: "230203"
                }, {
                    city: "齐齐哈尔市",
                    text: "铁锋区",
                    value: "230204"
                }, {
                    city: "齐齐哈尔市",
                    text: "昂昂溪区",
                    value: "230205"
                }, {
                    city: "齐齐哈尔市",
                    text: "富拉尔基区",
                    value: "230206"
                }, {
                    city: "齐齐哈尔市",
                    text: "碾子山区",
                    value: "230207"
                }, {
                    city: "齐齐哈尔市",
                    text: "梅里斯达斡尔族区",
                    value: "230208"
                }, {
                    city: "齐齐哈尔市",
                    text: "龙江县",
                    value: "230221"
                }, {
                    city: "齐齐哈尔市",
                    text: "依安县",
                    value: "230223"
                }, {
                    city: "齐齐哈尔市",
                    text: "泰来县",
                    value: "230224"
                }, {
                    city: "齐齐哈尔市",
                    text: "甘南县",
                    value: "230225"
                }, {
                    city: "齐齐哈尔市",
                    text: "富裕县",
                    value: "230227"
                }, {
                    city: "齐齐哈尔市",
                    text: "克山县",
                    value: "230229"
                }, {
                    city: "齐齐哈尔市",
                    text: "克东县",
                    value: "230230"
                }, {
                    city: "齐齐哈尔市",
                    text: "拜泉县",
                    value: "230231"
                }, {
                    city: "齐齐哈尔市",
                    text: "讷河市",
                    value: "230281"
                }],
                230300: [{
                    city: "鸡西市",
                    text: "市辖区",
                    value: "230301"
                }, {
                    city: "鸡西市",
                    text: "鸡冠区",
                    value: "230302"
                }, {
                    city: "鸡西市",
                    text: "恒山区",
                    value: "230303"
                }, {
                    city: "鸡西市",
                    text: "滴道区",
                    value: "230304"
                }, {
                    city: "鸡西市",
                    text: "梨树区",
                    value: "230305"
                }, {
                    city: "鸡西市",
                    text: "城子河区",
                    value: "230306"
                }, {
                    city: "鸡西市",
                    text: "麻山区",
                    value: "230307"
                }, {
                    city: "鸡西市",
                    text: "鸡东县",
                    value: "230321"
                }, {
                    city: "鸡西市",
                    text: "虎林市",
                    value: "230381"
                }, {
                    city: "鸡西市",
                    text: "密山市",
                    value: "230382"
                }],
                230400: [{
                    city: "鹤岗市",
                    text: "市辖区",
                    value: "230401"
                }, {
                    city: "鹤岗市",
                    text: "向阳区",
                    value: "230402"
                }, {
                    city: "鹤岗市",
                    text: "工农区",
                    value: "230403"
                }, {
                    city: "鹤岗市",
                    text: "南山区",
                    value: "230404"
                }, {
                    city: "鹤岗市",
                    text: "兴安区",
                    value: "230405"
                }, {
                    city: "鹤岗市",
                    text: "东山区",
                    value: "230406"
                }, {
                    city: "鹤岗市",
                    text: "兴山区",
                    value: "230407"
                }, {
                    city: "鹤岗市",
                    text: "萝北县",
                    value: "230421"
                }, {
                    city: "鹤岗市",
                    text: "绥滨县",
                    value: "230422"
                }],
                230500: [{
                    city: "双鸭山市",
                    text: "市辖区",
                    value: "230501"
                }, {
                    city: "双鸭山市",
                    text: "尖山区",
                    value: "230502"
                }, {
                    city: "双鸭山市",
                    text: "岭东区",
                    value: "230503"
                }, {
                    city: "双鸭山市",
                    text: "四方台区",
                    value: "230505"
                }, {
                    city: "双鸭山市",
                    text: "宝山区",
                    value: "230506"
                }, {
                    city: "双鸭山市",
                    text: "集贤县",
                    value: "230521"
                }, {
                    city: "双鸭山市",
                    text: "友谊县",
                    value: "230522"
                }, {
                    city: "双鸭山市",
                    text: "宝清县",
                    value: "230523"
                }, {
                    city: "双鸭山市",
                    text: "饶河县",
                    value: "230524"
                }],
                230600: [{
                    city: "大庆市",
                    text: "市辖区",
                    value: "230601"
                }, {
                    city: "大庆市",
                    text: "萨尔图区",
                    value: "230602"
                }, {
                    city: "大庆市",
                    text: "龙凤区",
                    value: "230603"
                }, {
                    city: "大庆市",
                    text: "让胡路区",
                    value: "230604"
                }, {
                    city: "大庆市",
                    text: "红岗区",
                    value: "230605"
                }, {
                    city: "大庆市",
                    text: "大同区",
                    value: "230606"
                }, {
                    city: "大庆市",
                    text: "肇州县",
                    value: "230621"
                }, {
                    city: "大庆市",
                    text: "肇源县",
                    value: "230622"
                }, {
                    city: "大庆市",
                    text: "林甸县",
                    value: "230623"
                }, {
                    city: "大庆市",
                    text: "杜尔伯特蒙古族自治县",
                    value: "230624"
                }],
                230700: [{
                    city: "伊春市",
                    text: "市辖区",
                    value: "230701"
                }, {
                    city: "伊春市",
                    text: "伊春区",
                    value: "230702"
                }, {
                    city: "伊春市",
                    text: "南岔区",
                    value: "230703"
                }, {
                    city: "伊春市",
                    text: "友好区",
                    value: "230704"
                }, {
                    city: "伊春市",
                    text: "西林区",
                    value: "230705"
                }, {
                    city: "伊春市",
                    text: "翠峦区",
                    value: "230706"
                }, {
                    city: "伊春市",
                    text: "新青区",
                    value: "230707"
                }, {
                    city: "伊春市",
                    text: "美溪区",
                    value: "230708"
                }, {
                    city: "伊春市",
                    text: "金山屯区",
                    value: "230709"
                }, {
                    city: "伊春市",
                    text: "五营区",
                    value: "230710"
                }, {
                    city: "伊春市",
                    text: "乌马河区",
                    value: "230711"
                }, {
                    city: "伊春市",
                    text: "汤旺河区",
                    value: "230712"
                }, {
                    city: "伊春市",
                    text: "带岭区",
                    value: "230713"
                }, {
                    city: "伊春市",
                    text: "乌伊岭区",
                    value: "230714"
                }, {
                    city: "伊春市",
                    text: "红星区",
                    value: "230715"
                }, {
                    city: "伊春市",
                    text: "上甘岭区",
                    value: "230716"
                }, {
                    city: "伊春市",
                    text: "嘉荫县",
                    value: "230722"
                }, {
                    city: "伊春市",
                    text: "铁力市",
                    value: "230781"
                }],
                230800: [{
                    city: "佳木斯市",
                    text: "市辖区",
                    value: "230801"
                }, {
                    city: "佳木斯市",
                    text: "向阳区",
                    value: "230803"
                }, {
                    city: "佳木斯市",
                    text: "前进区",
                    value: "230804"
                }, {
                    city: "佳木斯市",
                    text: "东风区",
                    value: "230805"
                }, {
                    city: "佳木斯市",
                    text: "郊区",
                    value: "230811"
                }, {
                    city: "佳木斯市",
                    text: "桦南县",
                    value: "230822"
                }, {
                    city: "佳木斯市",
                    text: "桦川县",
                    value: "230826"
                }, {
                    city: "佳木斯市",
                    text: "汤原县",
                    value: "230828"
                }, {
                    city: "佳木斯市",
                    text: "同江市",
                    value: "230881"
                }, {
                    city: "佳木斯市",
                    text: "富锦市",
                    value: "230882"
                }, {
                    city: "佳木斯市",
                    text: "抚远市",
                    value: "230883"
                }],
                230900: [{
                    city: "七台河市",
                    text: "市辖区",
                    value: "230901"
                }, {
                    city: "七台河市",
                    text: "新兴区",
                    value: "230902"
                }, {
                    city: "七台河市",
                    text: "桃山区",
                    value: "230903"
                }, {
                    city: "七台河市",
                    text: "茄子河区",
                    value: "230904"
                }, {
                    city: "七台河市",
                    text: "勃利县",
                    value: "230921"
                }],
                231e3: [{
                    city: "牡丹江市",
                    text: "市辖区",
                    value: "231001"
                }, {
                    city: "牡丹江市",
                    text: "东安区",
                    value: "231002"
                }, {
                    city: "牡丹江市",
                    text: "阳明区",
                    value: "231003"
                }, {
                    city: "牡丹江市",
                    text: "爱民区",
                    value: "231004"
                }, {
                    city: "牡丹江市",
                    text: "西安区",
                    value: "231005"
                }, {
                    city: "牡丹江市",
                    text: "林口县",
                    value: "231025"
                }, {
                    city: "牡丹江市",
                    text: "绥芬河市",
                    value: "231081"
                }, {
                    city: "牡丹江市",
                    text: "海林市",
                    value: "231083"
                }, {
                    city: "牡丹江市",
                    text: "宁安市",
                    value: "231084"
                }, {
                    city: "牡丹江市",
                    text: "穆棱市",
                    value: "231085"
                }, {
                    city: "牡丹江市",
                    text: "东宁市",
                    value: "231086"
                }],
                231100: [{
                    city: "黑河市",
                    text: "市辖区",
                    value: "231101"
                }, {
                    city: "黑河市",
                    text: "爱辉区",
                    value: "231102"
                }, {
                    city: "黑河市",
                    text: "嫩江县",
                    value: "231121"
                }, {
                    city: "黑河市",
                    text: "逊克县",
                    value: "231123"
                }, {
                    city: "黑河市",
                    text: "孙吴县",
                    value: "231124"
                }, {
                    city: "黑河市",
                    text: "北安市",
                    value: "231181"
                }, {
                    city: "黑河市",
                    text: "五大连池市",
                    value: "231182"
                }],
                231200: [{
                    city: "绥化市",
                    text: "市辖区",
                    value: "231201"
                }, {
                    city: "绥化市",
                    text: "北林区",
                    value: "231202"
                }, {
                    city: "绥化市",
                    text: "望奎县",
                    value: "231221"
                }, {
                    city: "绥化市",
                    text: "兰西县",
                    value: "231222"
                }, {
                    city: "绥化市",
                    text: "青冈县",
                    value: "231223"
                }, {
                    city: "绥化市",
                    text: "庆安县",
                    value: "231224"
                }, {
                    city: "绥化市",
                    text: "明水县",
                    value: "231225"
                }, {
                    city: "绥化市",
                    text: "绥棱县",
                    value: "231226"
                }, {
                    city: "绥化市",
                    text: "安达市",
                    value: "231281"
                }, {
                    city: "绥化市",
                    text: "肇东市",
                    value: "231282"
                }, {
                    city: "绥化市",
                    text: "海伦市",
                    value: "231283"
                }],
                232700: [{
                    city: "大兴安岭地区",
                    text: "呼玛县",
                    value: "232721"
                }, {
                    city: "大兴安岭地区",
                    text: "塔河县",
                    value: "232722"
                }, {
                    city: "大兴安岭地区",
                    text: "漠河县",
                    value: "232723"
                }],
                310100: [{
                    city: "市辖区",
                    text: "黄浦区",
                    value: "310101"
                }, {
                    city: "市辖区",
                    text: "徐汇区",
                    value: "310104"
                }, {
                    city: "市辖区",
                    text: "长宁区",
                    value: "310105"
                }, {
                    city: "市辖区",
                    text: "静安区",
                    value: "310106"
                }, {
                    city: "市辖区",
                    text: "普陀区",
                    value: "310107"
                }, {
                    city: "市辖区",
                    text: "虹口区",
                    value: "310109"
                }, {
                    city: "市辖区",
                    text: "杨浦区",
                    value: "310110"
                }, {
                    city: "市辖区",
                    text: "闵行区",
                    value: "310112"
                }, {
                    city: "市辖区",
                    text: "宝山区",
                    value: "310113"
                }, {
                    city: "市辖区",
                    text: "嘉定区",
                    value: "310114"
                }, {
                    city: "市辖区",
                    text: "浦东新区",
                    value: "310115"
                }, {
                    city: "市辖区",
                    text: "金山区",
                    value: "310116"
                }, {
                    city: "市辖区",
                    text: "松江区",
                    value: "310117"
                }, {
                    city: "市辖区",
                    text: "青浦区",
                    value: "310118"
                }, {
                    city: "市辖区",
                    text: "奉贤区",
                    value: "310120"
                }, {
                    city: "市辖区",
                    text: "崇明区",
                    value: "310151"
                }],
                320100: [{
                    city: "南京市",
                    text: "市辖区",
                    value: "320101"
                }, {
                    city: "南京市",
                    text: "玄武区",
                    value: "320102"
                }, {
                    city: "南京市",
                    text: "秦淮区",
                    value: "320104"
                }, {
                    city: "南京市",
                    text: "建邺区",
                    value: "320105"
                }, {
                    city: "南京市",
                    text: "鼓楼区",
                    value: "320106"
                }, {
                    city: "南京市",
                    text: "浦口区",
                    value: "320111"
                }, {
                    city: "南京市",
                    text: "栖霞区",
                    value: "320113"
                }, {
                    city: "南京市",
                    text: "雨花台区",
                    value: "320114"
                }, {
                    city: "南京市",
                    text: "江宁区",
                    value: "320115"
                }, {
                    city: "南京市",
                    text: "六合区",
                    value: "320116"
                }, {
                    city: "南京市",
                    text: "溧水区",
                    value: "320117"
                }, {
                    city: "南京市",
                    text: "高淳区",
                    value: "320118"
                }],
                320200: [{
                    city: "无锡市",
                    text: "市辖区",
                    value: "320201"
                }, {
                    city: "无锡市",
                    text: "锡山区",
                    value: "320205"
                }, {
                    city: "无锡市",
                    text: "惠山区",
                    value: "320206"
                }, {
                    city: "无锡市",
                    text: "滨湖区",
                    value: "320211"
                }, {
                    city: "无锡市",
                    text: "梁溪区",
                    value: "320213"
                }, {
                    city: "无锡市",
                    text: "新吴区",
                    value: "320214"
                }, {
                    city: "无锡市",
                    text: "江阴市",
                    value: "320281"
                }, {
                    city: "无锡市",
                    text: "宜兴市",
                    value: "320282"
                }],
                320300: [{
                    city: "徐州市",
                    text: "市辖区",
                    value: "320301"
                }, {
                    city: "徐州市",
                    text: "鼓楼区",
                    value: "320302"
                }, {
                    city: "徐州市",
                    text: "云龙区",
                    value: "320303"
                }, {
                    city: "徐州市",
                    text: "贾汪区",
                    value: "320305"
                }, {
                    city: "徐州市",
                    text: "泉山区",
                    value: "320311"
                }, {
                    city: "徐州市",
                    text: "铜山区",
                    value: "320312"
                }, {
                    city: "徐州市",
                    text: "丰县",
                    value: "320321"
                }, {
                    city: "徐州市",
                    text: "沛县",
                    value: "320322"
                }, {
                    city: "徐州市",
                    text: "睢宁县",
                    value: "320324"
                }, {
                    city: "徐州市",
                    text: "新沂市",
                    value: "320381"
                }, {
                    city: "徐州市",
                    text: "邳州市",
                    value: "320382"
                }],
                320400: [{
                    city: "常州市",
                    text: "市辖区",
                    value: "320401"
                }, {
                    city: "常州市",
                    text: "天宁区",
                    value: "320402"
                }, {
                    city: "常州市",
                    text: "钟楼区",
                    value: "320404"
                }, {
                    city: "常州市",
                    text: "新北区",
                    value: "320411"
                }, {
                    city: "常州市",
                    text: "武进区",
                    value: "320412"
                }, {
                    city: "常州市",
                    text: "金坛区",
                    value: "320413"
                }, {
                    city: "常州市",
                    text: "溧阳市",
                    value: "320481"
                }],
                320500: [{
                    city: "苏州市",
                    text: "市辖区",
                    value: "320501"
                }, {
                    city: "苏州市",
                    text: "虎丘区",
                    value: "320505"
                }, {
                    city: "苏州市",
                    text: "吴中区",
                    value: "320506"
                }, {
                    city: "苏州市",
                    text: "相城区",
                    value: "320507"
                }, {
                    city: "苏州市",
                    text: "姑苏区",
                    value: "320508"
                }, {
                    city: "苏州市",
                    text: "吴江区",
                    value: "320509"
                }, {
                    city: "苏州市",
                    text: "常熟市",
                    value: "320581"
                }, {
                    city: "苏州市",
                    text: "张家港市",
                    value: "320582"
                }, {
                    city: "苏州市",
                    text: "昆山市",
                    value: "320583"
                }, {
                    city: "苏州市",
                    text: "太仓市",
                    value: "320585"
                }],
                320600: [{
                    city: "南通市",
                    text: "市辖区",
                    value: "320601"
                }, {
                    city: "南通市",
                    text: "崇川区",
                    value: "320602"
                }, {
                    city: "南通市",
                    text: "港闸区",
                    value: "320611"
                }, {
                    city: "南通市",
                    text: "通州区",
                    value: "320612"
                }, {
                    city: "南通市",
                    text: "海安县",
                    value: "320621"
                }, {
                    city: "南通市",
                    text: "如东县",
                    value: "320623"
                }, {
                    city: "南通市",
                    text: "启东市",
                    value: "320681"
                }, {
                    city: "南通市",
                    text: "如皋市",
                    value: "320682"
                }, {
                    city: "南通市",
                    text: "海门市",
                    value: "320684"
                }],
                320700: [{
                    city: "连云港市",
                    text: "市辖区",
                    value: "320701"
                }, {
                    city: "连云港市",
                    text: "连云区",
                    value: "320703"
                }, {
                    city: "连云港市",
                    text: "海州区",
                    value: "320706"
                }, {
                    city: "连云港市",
                    text: "赣榆区",
                    value: "320707"
                }, {
                    city: "连云港市",
                    text: "东海县",
                    value: "320722"
                }, {
                    city: "连云港市",
                    text: "灌云县",
                    value: "320723"
                }, {
                    city: "连云港市",
                    text: "灌南县",
                    value: "320724"
                }],
                320800: [{
                    city: "淮安市",
                    text: "市辖区",
                    value: "320801"
                }, {
                    city: "淮安市",
                    text: "淮安区",
                    value: "320803"
                }, {
                    city: "淮安市",
                    text: "淮阴区",
                    value: "320804"
                }, {
                    city: "淮安市",
                    text: "清江浦区",
                    value: "320812"
                }, {
                    city: "淮安市",
                    text: "洪泽区",
                    value: "320813"
                }, {
                    city: "淮安市",
                    text: "涟水县",
                    value: "320826"
                }, {
                    city: "淮安市",
                    text: "盱眙县",
                    value: "320830"
                }, {
                    city: "淮安市",
                    text: "金湖县",
                    value: "320831"
                }],
                320900: [{
                    city: "盐城市",
                    text: "市辖区",
                    value: "320901"
                }, {
                    city: "盐城市",
                    text: "亭湖区",
                    value: "320902"
                }, {
                    city: "盐城市",
                    text: "盐都区",
                    value: "320903"
                }, {
                    city: "盐城市",
                    text: "大丰区",
                    value: "320904"
                }, {
                    city: "盐城市",
                    text: "响水县",
                    value: "320921"
                }, {
                    city: "盐城市",
                    text: "滨海县",
                    value: "320922"
                }, {
                    city: "盐城市",
                    text: "阜宁县",
                    value: "320923"
                }, {
                    city: "盐城市",
                    text: "射阳县",
                    value: "320924"
                }, {
                    city: "盐城市",
                    text: "建湖县",
                    value: "320925"
                }, {
                    city: "盐城市",
                    text: "东台市",
                    value: "320981"
                }],
                321e3: [{
                    city: "扬州市",
                    text: "市辖区",
                    value: "321001"
                }, {
                    city: "扬州市",
                    text: "广陵区",
                    value: "321002"
                }, {
                    city: "扬州市",
                    text: "邗江区",
                    value: "321003"
                }, {
                    city: "扬州市",
                    text: "江都区",
                    value: "321012"
                }, {
                    city: "扬州市",
                    text: "宝应县",
                    value: "321023"
                }, {
                    city: "扬州市",
                    text: "仪征市",
                    value: "321081"
                }, {
                    city: "扬州市",
                    text: "高邮市",
                    value: "321084"
                }],
                321100: [{
                    city: "镇江市",
                    text: "市辖区",
                    value: "321101"
                }, {
                    city: "镇江市",
                    text: "京口区",
                    value: "321102"
                }, {
                    city: "镇江市",
                    text: "润州区",
                    value: "321111"
                }, {
                    city: "镇江市",
                    text: "丹徒区",
                    value: "321112"
                }, {
                    city: "镇江市",
                    text: "丹阳市",
                    value: "321181"
                }, {
                    city: "镇江市",
                    text: "扬中市",
                    value: "321182"
                }, {
                    city: "镇江市",
                    text: "句容市",
                    value: "321183"
                }],
                321200: [{
                    city: "泰州市",
                    text: "市辖区",
                    value: "321201"
                }, {
                    city: "泰州市",
                    text: "海陵区",
                    value: "321202"
                }, {
                    city: "泰州市",
                    text: "高港区",
                    value: "321203"
                }, {
                    city: "泰州市",
                    text: "姜堰区",
                    value: "321204"
                }, {
                    city: "泰州市",
                    text: "兴化市",
                    value: "321281"
                }, {
                    city: "泰州市",
                    text: "靖江市",
                    value: "321282"
                }, {
                    city: "泰州市",
                    text: "泰兴市",
                    value: "321283"
                }],
                321300: [{
                    city: "宿迁市",
                    text: "市辖区",
                    value: "321301"
                }, {
                    city: "宿迁市",
                    text: "宿城区",
                    value: "321302"
                }, {
                    city: "宿迁市",
                    text: "宿豫区",
                    value: "321311"
                }, {
                    city: "宿迁市",
                    text: "沭阳县",
                    value: "321322"
                }, {
                    city: "宿迁市",
                    text: "泗阳县",
                    value: "321323"
                }, {
                    city: "宿迁市",
                    text: "泗洪县",
                    value: "321324"
                }],
                330100: [{
                    city: "杭州市",
                    text: "市辖区",
                    value: "330101"
                }, {
                    city: "杭州市",
                    text: "上城区",
                    value: "330102"
                }, {
                    city: "杭州市",
                    text: "下城区",
                    value: "330103"
                }, {
                    city: "杭州市",
                    text: "江干区",
                    value: "330104"
                }, {
                    city: "杭州市",
                    text: "拱墅区",
                    value: "330105"
                }, {
                    city: "杭州市",
                    text: "西湖区",
                    value: "330106"
                }, {
                    city: "杭州市",
                    text: "滨江区",
                    value: "330108"
                }, {
                    city: "杭州市",
                    text: "萧山区",
                    value: "330109"
                }, {
                    city: "杭州市",
                    text: "余杭区",
                    value: "330110"
                }, {
                    city: "杭州市",
                    text: "富阳区",
                    value: "330111"
                }, {
                    city: "杭州市",
                    text: "桐庐县",
                    value: "330122"
                }, {
                    city: "杭州市",
                    text: "淳安县",
                    value: "330127"
                }, {
                    city: "杭州市",
                    text: "建德市",
                    value: "330182"
                }, {
                    city: "杭州市",
                    text: "临安市",
                    value: "330185"
                }],
                330200: [{
                    city: "宁波市",
                    text: "市辖区",
                    value: "330201"
                }, {
                    city: "宁波市",
                    text: "海曙区",
                    value: "330203"
                }, {
                    city: "宁波市",
                    text: "江东区",
                    value: "330204"
                }, {
                    city: "宁波市",
                    text: "江北区",
                    value: "330205"
                }, {
                    city: "宁波市",
                    text: "北仑区",
                    value: "330206"
                }, {
                    city: "宁波市",
                    text: "镇海区",
                    value: "330211"
                }, {
                    city: "宁波市",
                    text: "鄞州区",
                    value: "330212"
                }, {
                    city: "宁波市",
                    text: "象山县",
                    value: "330225"
                }, {
                    city: "宁波市",
                    text: "宁海县",
                    value: "330226"
                }, {
                    city: "宁波市",
                    text: "余姚市",
                    value: "330281"
                }, {
                    city: "宁波市",
                    text: "慈溪市",
                    value: "330282"
                }, {
                    city: "宁波市",
                    text: "奉化市",
                    value: "330283"
                }],
                330300: [{
                    city: "温州市",
                    text: "市辖区",
                    value: "330301"
                }, {
                    city: "温州市",
                    text: "鹿城区",
                    value: "330302"
                }, {
                    city: "温州市",
                    text: "龙湾区",
                    value: "330303"
                }, {
                    city: "温州市",
                    text: "瓯海区",
                    value: "330304"
                }, {
                    city: "温州市",
                    text: "洞头区",
                    value: "330305"
                }, {
                    city: "温州市",
                    text: "永嘉县",
                    value: "330324"
                }, {
                    city: "温州市",
                    text: "平阳县",
                    value: "330326"
                }, {
                    city: "温州市",
                    text: "苍南县",
                    value: "330327"
                }, {
                    city: "温州市",
                    text: "文成县",
                    value: "330328"
                }, {
                    city: "温州市",
                    text: "泰顺县",
                    value: "330329"
                }, {
                    city: "温州市",
                    text: "瑞安市",
                    value: "330381"
                }, {
                    city: "温州市",
                    text: "乐清市",
                    value: "330382"
                }],
                330400: [{
                    city: "嘉兴市",
                    text: "市辖区",
                    value: "330401"
                }, {
                    city: "嘉兴市",
                    text: "南湖区",
                    value: "330402"
                }, {
                    city: "嘉兴市",
                    text: "秀洲区",
                    value: "330411"
                }, {
                    city: "嘉兴市",
                    text: "嘉善县",
                    value: "330421"
                }, {
                    city: "嘉兴市",
                    text: "海盐县",
                    value: "330424"
                }, {
                    city: "嘉兴市",
                    text: "海宁市",
                    value: "330481"
                }, {
                    city: "嘉兴市",
                    text: "平湖市",
                    value: "330482"
                }, {
                    city: "嘉兴市",
                    text: "桐乡市",
                    value: "330483"
                }],
                330500: [{
                    city: "湖州市",
                    text: "市辖区",
                    value: "330501"
                }, {
                    city: "湖州市",
                    text: "吴兴区",
                    value: "330502"
                }, {
                    city: "湖州市",
                    text: "南浔区",
                    value: "330503"
                }, {
                    city: "湖州市",
                    text: "德清县",
                    value: "330521"
                }, {
                    city: "湖州市",
                    text: "长兴县",
                    value: "330522"
                }, {
                    city: "湖州市",
                    text: "安吉县",
                    value: "330523"
                }],
                330600: [{
                    city: "绍兴市",
                    text: "市辖区",
                    value: "330601"
                }, {
                    city: "绍兴市",
                    text: "越城区",
                    value: "330602"
                }, {
                    city: "绍兴市",
                    text: "柯桥区",
                    value: "330603"
                }, {
                    city: "绍兴市",
                    text: "上虞区",
                    value: "330604"
                }, {
                    city: "绍兴市",
                    text: "新昌县",
                    value: "330624"
                }, {
                    city: "绍兴市",
                    text: "诸暨市",
                    value: "330681"
                }, {
                    city: "绍兴市",
                    text: "嵊州市",
                    value: "330683"
                }],
                330700: [{
                    city: "金华市",
                    text: "市辖区",
                    value: "330701"
                }, {
                    city: "金华市",
                    text: "婺城区",
                    value: "330702"
                }, {
                    city: "金华市",
                    text: "金东区",
                    value: "330703"
                }, {
                    city: "金华市",
                    text: "武义县",
                    value: "330723"
                }, {
                    city: "金华市",
                    text: "浦江县",
                    value: "330726"
                }, {
                    city: "金华市",
                    text: "磐安县",
                    value: "330727"
                }, {
                    city: "金华市",
                    text: "兰溪市",
                    value: "330781"
                }, {
                    city: "金华市",
                    text: "义乌市",
                    value: "330782"
                }, {
                    city: "金华市",
                    text: "东阳市",
                    value: "330783"
                }, {
                    city: "金华市",
                    text: "永康市",
                    value: "330784"
                }],
                330800: [{
                    city: "衢州市",
                    text: "市辖区",
                    value: "330801"
                }, {
                    city: "衢州市",
                    text: "柯城区",
                    value: "330802"
                }, {
                    city: "衢州市",
                    text: "衢江区",
                    value: "330803"
                }, {
                    city: "衢州市",
                    text: "常山县",
                    value: "330822"
                }, {
                    city: "衢州市",
                    text: "开化县",
                    value: "330824"
                }, {
                    city: "衢州市",
                    text: "龙游县",
                    value: "330825"
                }, {
                    city: "衢州市",
                    text: "江山市",
                    value: "330881"
                }],
                330900: [{
                    city: "舟山市",
                    text: "市辖区",
                    value: "330901"
                }, {
                    city: "舟山市",
                    text: "定海区",
                    value: "330902"
                }, {
                    city: "舟山市",
                    text: "普陀区",
                    value: "330903"
                }, {
                    city: "舟山市",
                    text: "岱山县",
                    value: "330921"
                }, {
                    city: "舟山市",
                    text: "嵊泗县",
                    value: "330922"
                }],
                331e3: [{
                    city: "台州市",
                    text: "市辖区",
                    value: "331001"
                }, {
                    city: "台州市",
                    text: "椒江区",
                    value: "331002"
                }, {
                    city: "台州市",
                    text: "黄岩区",
                    value: "331003"
                }, {
                    city: "台州市",
                    text: "路桥区",
                    value: "331004"
                }, {
                    city: "台州市",
                    text: "玉环县",
                    value: "331021"
                }, {
                    city: "台州市",
                    text: "三门县",
                    value: "331022"
                }, {
                    city: "台州市",
                    text: "天台县",
                    value: "331023"
                }, {
                    city: "台州市",
                    text: "仙居县",
                    value: "331024"
                }, {
                    city: "台州市",
                    text: "温岭市",
                    value: "331081"
                }, {
                    city: "台州市",
                    text: "临海市",
                    value: "331082"
                }],
                331100: [{
                    city: "丽水市",
                    text: "市辖区",
                    value: "331101"
                }, {
                    city: "丽水市",
                    text: "莲都区",
                    value: "331102"
                }, {
                    city: "丽水市",
                    text: "青田县",
                    value: "331121"
                }, {
                    city: "丽水市",
                    text: "缙云县",
                    value: "331122"
                }, {
                    city: "丽水市",
                    text: "遂昌县",
                    value: "331123"
                }, {
                    city: "丽水市",
                    text: "松阳县",
                    value: "331124"
                }, {
                    city: "丽水市",
                    text: "云和县",
                    value: "331125"
                }, {
                    city: "丽水市",
                    text: "庆元县",
                    value: "331126"
                }, {
                    city: "丽水市",
                    text: "景宁畲族自治县",
                    value: "331127"
                }, {
                    city: "丽水市",
                    text: "龙泉市",
                    value: "331181"
                }],
                340100: [{
                    city: "合肥市",
                    text: "市辖区",
                    value: "340101"
                }, {
                    city: "合肥市",
                    text: "瑶海区",
                    value: "340102"
                }, {
                    city: "合肥市",
                    text: "庐阳区",
                    value: "340103"
                }, {
                    city: "合肥市",
                    text: "蜀山区",
                    value: "340104"
                }, {
                    city: "合肥市",
                    text: "包河区",
                    value: "340111"
                }, {
                    city: "合肥市",
                    text: "长丰县",
                    value: "340121"
                }, {
                    city: "合肥市",
                    text: "肥东县",
                    value: "340122"
                }, {
                    city: "合肥市",
                    text: "肥西县",
                    value: "340123"
                }, {
                    city: "合肥市",
                    text: "庐江县",
                    value: "340124"
                }, {
                    city: "合肥市",
                    text: "巢湖市",
                    value: "340181"
                }],
                340200: [{
                    city: "芜湖市",
                    text: "市辖区",
                    value: "340201"
                }, {
                    city: "芜湖市",
                    text: "镜湖区",
                    value: "340202"
                }, {
                    city: "芜湖市",
                    text: "弋江区",
                    value: "340203"
                }, {
                    city: "芜湖市",
                    text: "鸠江区",
                    value: "340207"
                }, {
                    city: "芜湖市",
                    text: "三山区",
                    value: "340208"
                }, {
                    city: "芜湖市",
                    text: "芜湖县",
                    value: "340221"
                }, {
                    city: "芜湖市",
                    text: "繁昌县",
                    value: "340222"
                }, {
                    city: "芜湖市",
                    text: "南陵县",
                    value: "340223"
                }, {
                    city: "芜湖市",
                    text: "无为县",
                    value: "340225"
                }],
                340300: [{
                    city: "蚌埠市",
                    text: "市辖区",
                    value: "340301"
                }, {
                    city: "蚌埠市",
                    text: "龙子湖区",
                    value: "340302"
                }, {
                    city: "蚌埠市",
                    text: "蚌山区",
                    value: "340303"
                }, {
                    city: "蚌埠市",
                    text: "禹会区",
                    value: "340304"
                }, {
                    city: "蚌埠市",
                    text: "淮上区",
                    value: "340311"
                }, {
                    city: "蚌埠市",
                    text: "怀远县",
                    value: "340321"
                }, {
                    city: "蚌埠市",
                    text: "五河县",
                    value: "340322"
                }, {
                    city: "蚌埠市",
                    text: "固镇县",
                    value: "340323"
                }],
                340400: [{
                    city: "淮南市",
                    text: "市辖区",
                    value: "340401"
                }, {
                    city: "淮南市",
                    text: "大通区",
                    value: "340402"
                }, {
                    city: "淮南市",
                    text: "田家庵区",
                    value: "340403"
                }, {
                    city: "淮南市",
                    text: "谢家集区",
                    value: "340404"
                }, {
                    city: "淮南市",
                    text: "八公山区",
                    value: "340405"
                }, {
                    city: "淮南市",
                    text: "潘集区",
                    value: "340406"
                }, {
                    city: "淮南市",
                    text: "凤台县",
                    value: "340421"
                }, {
                    city: "淮南市",
                    text: "寿县",
                    value: "340422"
                }],
                340500: [{
                    city: "马鞍山市",
                    text: "市辖区",
                    value: "340501"
                }, {
                    city: "马鞍山市",
                    text: "花山区",
                    value: "340503"
                }, {
                    city: "马鞍山市",
                    text: "雨山区",
                    value: "340504"
                }, {
                    city: "马鞍山市",
                    text: "博望区",
                    value: "340506"
                }, {
                    city: "马鞍山市",
                    text: "当涂县",
                    value: "340521"
                }, {
                    city: "马鞍山市",
                    text: "含山县",
                    value: "340522"
                }, {
                    city: "马鞍山市",
                    text: "和县",
                    value: "340523"
                }],
                340600: [{
                    city: "淮北市",
                    text: "市辖区",
                    value: "340601"
                }, {
                    city: "淮北市",
                    text: "杜集区",
                    value: "340602"
                }, {
                    city: "淮北市",
                    text: "相山区",
                    value: "340603"
                }, {
                    city: "淮北市",
                    text: "烈山区",
                    value: "340604"
                }, {
                    city: "淮北市",
                    text: "濉溪县",
                    value: "340621"
                }],
                340700: [{
                    city: "铜陵市",
                    text: "市辖区",
                    value: "340701"
                }, {
                    city: "铜陵市",
                    text: "铜官区",
                    value: "340705"
                }, {
                    city: "铜陵市",
                    text: "义安区",
                    value: "340706"
                }, {
                    city: "铜陵市",
                    text: "郊区",
                    value: "340711"
                }, {
                    city: "铜陵市",
                    text: "枞阳县",
                    value: "340722"
                }],
                340800: [{
                    city: "安庆市",
                    text: "市辖区",
                    value: "340801"
                }, {
                    city: "安庆市",
                    text: "迎江区",
                    value: "340802"
                }, {
                    city: "安庆市",
                    text: "大观区",
                    value: "340803"
                }, {
                    city: "安庆市",
                    text: "宜秀区",
                    value: "340811"
                }, {
                    city: "安庆市",
                    text: "怀宁县",
                    value: "340822"
                }, {
                    city: "安庆市",
                    text: "潜山县",
                    value: "340824"
                }, {
                    city: "安庆市",
                    text: "太湖县",
                    value: "340825"
                }, {
                    city: "安庆市",
                    text: "宿松县",
                    value: "340826"
                }, {
                    city: "安庆市",
                    text: "望江县",
                    value: "340827"
                }, {
                    city: "安庆市",
                    text: "岳西县",
                    value: "340828"
                }, {
                    city: "安庆市",
                    text: "桐城市",
                    value: "340881"
                }],
                341e3: [{
                    city: "黄山市",
                    text: "市辖区",
                    value: "341001"
                }, {
                    city: "黄山市",
                    text: "屯溪区",
                    value: "341002"
                }, {
                    city: "黄山市",
                    text: "黄山区",
                    value: "341003"
                }, {
                    city: "黄山市",
                    text: "徽州区",
                    value: "341004"
                }, {
                    city: "黄山市",
                    text: "歙县",
                    value: "341021"
                }, {
                    city: "黄山市",
                    text: "休宁县",
                    value: "341022"
                }, {
                    city: "黄山市",
                    text: "黟县",
                    value: "341023"
                }, {
                    city: "黄山市",
                    text: "祁门县",
                    value: "341024"
                }],
                341100: [{
                    city: "滁州市",
                    text: "市辖区",
                    value: "341101"
                }, {
                    city: "滁州市",
                    text: "琅琊区",
                    value: "341102"
                }, {
                    city: "滁州市",
                    text: "南谯区",
                    value: "341103"
                }, {
                    city: "滁州市",
                    text: "来安县",
                    value: "341122"
                }, {
                    city: "滁州市",
                    text: "全椒县",
                    value: "341124"
                }, {
                    city: "滁州市",
                    text: "定远县",
                    value: "341125"
                }, {
                    city: "滁州市",
                    text: "凤阳县",
                    value: "341126"
                }, {
                    city: "滁州市",
                    text: "天长市",
                    value: "341181"
                }, {
                    city: "滁州市",
                    text: "明光市",
                    value: "341182"
                }],
                341200: [{
                    city: "阜阳市",
                    text: "市辖区",
                    value: "341201"
                }, {
                    city: "阜阳市",
                    text: "颍州区",
                    value: "341202"
                }, {
                    city: "阜阳市",
                    text: "颍东区",
                    value: "341203"
                }, {
                    city: "阜阳市",
                    text: "颍泉区",
                    value: "341204"
                }, {
                    city: "阜阳市",
                    text: "临泉县",
                    value: "341221"
                }, {
                    city: "阜阳市",
                    text: "太和县",
                    value: "341222"
                }, {
                    city: "阜阳市",
                    text: "阜南县",
                    value: "341225"
                }, {
                    city: "阜阳市",
                    text: "颍上县",
                    value: "341226"
                }, {
                    city: "阜阳市",
                    text: "界首市",
                    value: "341282"
                }],
                341300: [{
                    city: "宿州市",
                    text: "市辖区",
                    value: "341301"
                }, {
                    city: "宿州市",
                    text: "埇桥区",
                    value: "341302"
                }, {
                    city: "宿州市",
                    text: "砀山县",
                    value: "341321"
                }, {
                    city: "宿州市",
                    text: "萧县",
                    value: "341322"
                }, {
                    city: "宿州市",
                    text: "灵璧县",
                    value: "341323"
                }, {
                    city: "宿州市",
                    text: "泗县",
                    value: "341324"
                }],
                341500: [{
                    city: "六安市",
                    text: "市辖区",
                    value: "341501"
                }, {
                    city: "六安市",
                    text: "金安区",
                    value: "341502"
                }, {
                    city: "六安市",
                    text: "裕安区",
                    value: "341503"
                }, {
                    city: "六安市",
                    text: "叶集区",
                    value: "341504"
                }, {
                    city: "六安市",
                    text: "霍邱县",
                    value: "341522"
                }, {
                    city: "六安市",
                    text: "舒城县",
                    value: "341523"
                }, {
                    city: "六安市",
                    text: "金寨县",
                    value: "341524"
                }, {
                    city: "六安市",
                    text: "霍山县",
                    value: "341525"
                }],
                341600: [{
                    city: "亳州市",
                    text: "市辖区",
                    value: "341601"
                }, {
                    city: "亳州市",
                    text: "谯城区",
                    value: "341602"
                }, {
                    city: "亳州市",
                    text: "涡阳县",
                    value: "341621"
                }, {
                    city: "亳州市",
                    text: "蒙城县",
                    value: "341622"
                }, {
                    city: "亳州市",
                    text: "利辛县",
                    value: "341623"
                }],
                341700: [{
                    city: "池州市",
                    text: "市辖区",
                    value: "341701"
                }, {
                    city: "池州市",
                    text: "贵池区",
                    value: "341702"
                }, {
                    city: "池州市",
                    text: "东至县",
                    value: "341721"
                }, {
                    city: "池州市",
                    text: "石台县",
                    value: "341722"
                }, {
                    city: "池州市",
                    text: "青阳县",
                    value: "341723"
                }],
                341800: [{
                    city: "宣城市",
                    text: "市辖区",
                    value: "341801"
                }, {
                    city: "宣城市",
                    text: "宣州区",
                    value: "341802"
                }, {
                    city: "宣城市",
                    text: "郎溪县",
                    value: "341821"
                }, {
                    city: "宣城市",
                    text: "广德县",
                    value: "341822"
                }, {
                    city: "宣城市",
                    text: "泾县",
                    value: "341823"
                }, {
                    city: "宣城市",
                    text: "绩溪县",
                    value: "341824"
                }, {
                    city: "宣城市",
                    text: "旌德县",
                    value: "341825"
                }, {
                    city: "宣城市",
                    text: "宁国市",
                    value: "341881"
                }],
                350100: [{
                    city: "福州市",
                    text: "市辖区",
                    value: "350101"
                }, {
                    city: "福州市",
                    text: "鼓楼区",
                    value: "350102"
                }, {
                    city: "福州市",
                    text: "台江区",
                    value: "350103"
                }, {
                    city: "福州市",
                    text: "仓山区",
                    value: "350104"
                }, {
                    city: "福州市",
                    text: "马尾区",
                    value: "350105"
                }, {
                    city: "福州市",
                    text: "晋安区",
                    value: "350111"
                }, {
                    city: "福州市",
                    text: "闽侯县",
                    value: "350121"
                }, {
                    city: "福州市",
                    text: "连江县",
                    value: "350122"
                }, {
                    city: "福州市",
                    text: "罗源县",
                    value: "350123"
                }, {
                    city: "福州市",
                    text: "闽清县",
                    value: "350124"
                }, {
                    city: "福州市",
                    text: "永泰县",
                    value: "350125"
                }, {
                    city: "福州市",
                    text: "平潭县",
                    value: "350128"
                }, {
                    city: "福州市",
                    text: "福清市",
                    value: "350181"
                }, {
                    city: "福州市",
                    text: "长乐市",
                    value: "350182"
                }],
                350200: [{
                    city: "厦门市",
                    text: "市辖区",
                    value: "350201"
                }, {
                    city: "厦门市",
                    text: "思明区",
                    value: "350203"
                }, {
                    city: "厦门市",
                    text: "海沧区",
                    value: "350205"
                }, {
                    city: "厦门市",
                    text: "湖里区",
                    value: "350206"
                }, {
                    city: "厦门市",
                    text: "集美区",
                    value: "350211"
                }, {
                    city: "厦门市",
                    text: "同安区",
                    value: "350212"
                }, {
                    city: "厦门市",
                    text: "翔安区",
                    value: "350213"
                }],
                350300: [{
                    city: "莆田市",
                    text: "市辖区",
                    value: "350301"
                }, {
                    city: "莆田市",
                    text: "城厢区",
                    value: "350302"
                }, {
                    city: "莆田市",
                    text: "涵江区",
                    value: "350303"
                }, {
                    city: "莆田市",
                    text: "荔城区",
                    value: "350304"
                }, {
                    city: "莆田市",
                    text: "秀屿区",
                    value: "350305"
                }, {
                    city: "莆田市",
                    text: "仙游县",
                    value: "350322"
                }],
                350400: [{
                    city: "三明市",
                    text: "市辖区",
                    value: "350401"
                }, {
                    city: "三明市",
                    text: "梅列区",
                    value: "350402"
                }, {
                    city: "三明市",
                    text: "三元区",
                    value: "350403"
                }, {
                    city: "三明市",
                    text: "明溪县",
                    value: "350421"
                }, {
                    city: "三明市",
                    text: "清流县",
                    value: "350423"
                }, {
                    city: "三明市",
                    text: "宁化县",
                    value: "350424"
                }, {
                    city: "三明市",
                    text: "大田县",
                    value: "350425"
                }, {
                    city: "三明市",
                    text: "尤溪县",
                    value: "350426"
                }, {
                    city: "三明市",
                    text: "沙县",
                    value: "350427"
                }, {
                    city: "三明市",
                    text: "将乐县",
                    value: "350428"
                }, {
                    city: "三明市",
                    text: "泰宁县",
                    value: "350429"
                }, {
                    city: "三明市",
                    text: "建宁县",
                    value: "350430"
                }, {
                    city: "三明市",
                    text: "永安市",
                    value: "350481"
                }],
                350500: [{
                    city: "泉州市",
                    text: "市辖区",
                    value: "350501"
                }, {
                    city: "泉州市",
                    text: "鲤城区",
                    value: "350502"
                }, {
                    city: "泉州市",
                    text: "丰泽区",
                    value: "350503"
                }, {
                    city: "泉州市",
                    text: "洛江区",
                    value: "350504"
                }, {
                    city: "泉州市",
                    text: "泉港区",
                    value: "350505"
                }, {
                    city: "泉州市",
                    text: "惠安县",
                    value: "350521"
                }, {
                    city: "泉州市",
                    text: "安溪县",
                    value: "350524"
                }, {
                    city: "泉州市",
                    text: "永春县",
                    value: "350525"
                }, {
                    city: "泉州市",
                    text: "德化县",
                    value: "350526"
                }, {
                    city: "泉州市",
                    text: "金门县",
                    value: "350527"
                }, {
                    city: "泉州市",
                    text: "石狮市",
                    value: "350581"
                }, {
                    city: "泉州市",
                    text: "晋江市",
                    value: "350582"
                }, {
                    city: "泉州市",
                    text: "南安市",
                    value: "350583"
                }],
                350600: [{
                    city: "漳州市",
                    text: "市辖区",
                    value: "350601"
                }, {
                    city: "漳州市",
                    text: "芗城区",
                    value: "350602"
                }, {
                    city: "漳州市",
                    text: "龙文区",
                    value: "350603"
                }, {
                    city: "漳州市",
                    text: "云霄县",
                    value: "350622"
                }, {
                    city: "漳州市",
                    text: "漳浦县",
                    value: "350623"
                }, {
                    city: "漳州市",
                    text: "诏安县",
                    value: "350624"
                }, {
                    city: "漳州市",
                    text: "长泰县",
                    value: "350625"
                }, {
                    city: "漳州市",
                    text: "东山县",
                    value: "350626"
                }, {
                    city: "漳州市",
                    text: "南靖县",
                    value: "350627"
                }, {
                    city: "漳州市",
                    text: "平和县",
                    value: "350628"
                }, {
                    city: "漳州市",
                    text: "华安县",
                    value: "350629"
                }, {
                    city: "漳州市",
                    text: "龙海市",
                    value: "350681"
                }],
                350700: [{
                    city: "南平市",
                    text: "市辖区",
                    value: "350701"
                }, {
                    city: "南平市",
                    text: "延平区",
                    value: "350702"
                }, {
                    city: "南平市",
                    text: "建阳区",
                    value: "350703"
                }, {
                    city: "南平市",
                    text: "顺昌县",
                    value: "350721"
                }, {
                    city: "南平市",
                    text: "浦城县",
                    value: "350722"
                }, {
                    city: "南平市",
                    text: "光泽县",
                    value: "350723"
                }, {
                    city: "南平市",
                    text: "松溪县",
                    value: "350724"
                }, {
                    city: "南平市",
                    text: "政和县",
                    value: "350725"
                }, {
                    city: "南平市",
                    text: "邵武市",
                    value: "350781"
                }, {
                    city: "南平市",
                    text: "武夷山市",
                    value: "350782"
                }, {
                    city: "南平市",
                    text: "建瓯市",
                    value: "350783"
                }],
                350800: [{
                    city: "龙岩市",
                    text: "市辖区",
                    value: "350801"
                }, {
                    city: "龙岩市",
                    text: "新罗区",
                    value: "350802"
                }, {
                    city: "龙岩市",
                    text: "永定区",
                    value: "350803"
                }, {
                    city: "龙岩市",
                    text: "长汀县",
                    value: "350821"
                }, {
                    city: "龙岩市",
                    text: "上杭县",
                    value: "350823"
                }, {
                    city: "龙岩市",
                    text: "武平县",
                    value: "350824"
                }, {
                    city: "龙岩市",
                    text: "连城县",
                    value: "350825"
                }, {
                    city: "龙岩市",
                    text: "漳平市",
                    value: "350881"
                }],
                350900: [{
                    city: "宁德市",
                    text: "市辖区",
                    value: "350901"
                }, {
                    city: "宁德市",
                    text: "蕉城区",
                    value: "350902"
                }, {
                    city: "宁德市",
                    text: "霞浦县",
                    value: "350921"
                }, {
                    city: "宁德市",
                    text: "古田县",
                    value: "350922"
                }, {
                    city: "宁德市",
                    text: "屏南县",
                    value: "350923"
                }, {
                    city: "宁德市",
                    text: "寿宁县",
                    value: "350924"
                }, {
                    city: "宁德市",
                    text: "周宁县",
                    value: "350925"
                }, {
                    city: "宁德市",
                    text: "柘荣县",
                    value: "350926"
                }, {
                    city: "宁德市",
                    text: "福安市",
                    value: "350981"
                }, {
                    city: "宁德市",
                    text: "福鼎市",
                    value: "350982"
                }],
                360100: [{
                    city: "南昌市",
                    text: "市辖区",
                    value: "360101"
                }, {
                    city: "南昌市",
                    text: "东湖区",
                    value: "360102"
                }, {
                    city: "南昌市",
                    text: "西湖区",
                    value: "360103"
                }, {
                    city: "南昌市",
                    text: "青云谱区",
                    value: "360104"
                }, {
                    city: "南昌市",
                    text: "湾里区",
                    value: "360105"
                }, {
                    city: "南昌市",
                    text: "青山湖区",
                    value: "360111"
                }, {
                    city: "南昌市",
                    text: "新建区",
                    value: "360112"
                }, {
                    city: "南昌市",
                    text: "南昌县",
                    value: "360121"
                }, {
                    city: "南昌市",
                    text: "安义县",
                    value: "360123"
                }, {
                    city: "南昌市",
                    text: "进贤县",
                    value: "360124"
                }],
                360200: [{
                    city: "景德镇市",
                    text: "市辖区",
                    value: "360201"
                }, {
                    city: "景德镇市",
                    text: "昌江区",
                    value: "360202"
                }, {
                    city: "景德镇市",
                    text: "珠山区",
                    value: "360203"
                }, {
                    city: "景德镇市",
                    text: "浮梁县",
                    value: "360222"
                }, {
                    city: "景德镇市",
                    text: "乐平市",
                    value: "360281"
                }],
                360300: [{
                    city: "萍乡市",
                    text: "市辖区",
                    value: "360301"
                }, {
                    city: "萍乡市",
                    text: "安源区",
                    value: "360302"
                }, {
                    city: "萍乡市",
                    text: "湘东区",
                    value: "360313"
                }, {
                    city: "萍乡市",
                    text: "莲花县",
                    value: "360321"
                }, {
                    city: "萍乡市",
                    text: "上栗县",
                    value: "360322"
                }, {
                    city: "萍乡市",
                    text: "芦溪县",
                    value: "360323"
                }],
                360400: [{
                    city: "九江市",
                    text: "市辖区",
                    value: "360401"
                }, {
                    city: "九江市",
                    text: "濂溪区",
                    value: "360402"
                }, {
                    city: "九江市",
                    text: "浔阳区",
                    value: "360403"
                }, {
                    city: "九江市",
                    text: "九江县",
                    value: "360421"
                }, {
                    city: "九江市",
                    text: "武宁县",
                    value: "360423"
                }, {
                    city: "九江市",
                    text: "修水县",
                    value: "360424"
                }, {
                    city: "九江市",
                    text: "永修县",
                    value: "360425"
                }, {
                    city: "九江市",
                    text: "德安县",
                    value: "360426"
                }, {
                    city: "九江市",
                    text: "都昌县",
                    value: "360428"
                }, {
                    city: "九江市",
                    text: "湖口县",
                    value: "360429"
                }, {
                    city: "九江市",
                    text: "彭泽县",
                    value: "360430"
                }, {
                    city: "九江市",
                    text: "瑞昌市",
                    value: "360481"
                }, {
                    city: "九江市",
                    text: "共青城市",
                    value: "360482"
                }, {
                    city: "九江市",
                    text: "庐山市",
                    value: "360483"
                }],
                360500: [{
                    city: "新余市",
                    text: "市辖区",
                    value: "360501"
                }, {
                    city: "新余市",
                    text: "渝水区",
                    value: "360502"
                }, {
                    city: "新余市",
                    text: "分宜县",
                    value: "360521"
                }],
                360600: [{
                    city: "鹰潭市",
                    text: "市辖区",
                    value: "360601"
                }, {
                    city: "鹰潭市",
                    text: "月湖区",
                    value: "360602"
                }, {
                    city: "鹰潭市",
                    text: "余江县",
                    value: "360622"
                }, {
                    city: "鹰潭市",
                    text: "贵溪市",
                    value: "360681"
                }],
                360700: [{
                    city: "赣州市",
                    text: "市辖区",
                    value: "360701"
                }, {
                    city: "赣州市",
                    text: "章贡区",
                    value: "360702"
                }, {
                    city: "赣州市",
                    text: "南康区",
                    value: "360703"
                }, {
                    city: "赣州市",
                    text: "赣县",
                    value: "360721"
                }, {
                    city: "赣州市",
                    text: "信丰县",
                    value: "360722"
                }, {
                    city: "赣州市",
                    text: "大余县",
                    value: "360723"
                }, {
                    city: "赣州市",
                    text: "上犹县",
                    value: "360724"
                }, {
                    city: "赣州市",
                    text: "崇义县",
                    value: "360725"
                }, {
                    city: "赣州市",
                    text: "安远县",
                    value: "360726"
                }, {
                    city: "赣州市",
                    text: "龙南县",
                    value: "360727"
                }, {
                    city: "赣州市",
                    text: "定南县",
                    value: "360728"
                }, {
                    city: "赣州市",
                    text: "全南县",
                    value: "360729"
                }, {
                    city: "赣州市",
                    text: "宁都县",
                    value: "360730"
                }, {
                    city: "赣州市",
                    text: "于都县",
                    value: "360731"
                }, {
                    city: "赣州市",
                    text: "兴国县",
                    value: "360732"
                }, {
                    city: "赣州市",
                    text: "会昌县",
                    value: "360733"
                }, {
                    city: "赣州市",
                    text: "寻乌县",
                    value: "360734"
                }, {
                    city: "赣州市",
                    text: "石城县",
                    value: "360735"
                }, {
                    city: "赣州市",
                    text: "瑞金市",
                    value: "360781"
                }],
                360800: [{
                    city: "吉安市",
                    text: "市辖区",
                    value: "360801"
                }, {
                    city: "吉安市",
                    text: "吉州区",
                    value: "360802"
                }, {
                    city: "吉安市",
                    text: "青原区",
                    value: "360803"
                }, {
                    city: "吉安市",
                    text: "吉安县",
                    value: "360821"
                }, {
                    city: "吉安市",
                    text: "吉水县",
                    value: "360822"
                }, {
                    city: "吉安市",
                    text: "峡江县",
                    value: "360823"
                }, {
                    city: "吉安市",
                    text: "新干县",
                    value: "360824"
                }, {
                    city: "吉安市",
                    text: "永丰县",
                    value: "360825"
                }, {
                    city: "吉安市",
                    text: "泰和县",
                    value: "360826"
                }, {
                    city: "吉安市",
                    text: "遂川县",
                    value: "360827"
                }, {
                    city: "吉安市",
                    text: "万安县",
                    value: "360828"
                }, {
                    city: "吉安市",
                    text: "安福县",
                    value: "360829"
                }, {
                    city: "吉安市",
                    text: "永新县",
                    value: "360830"
                }, {
                    city: "吉安市",
                    text: "井冈山市",
                    value: "360881"
                }],
                360900: [{
                    city: "宜春市",
                    text: "市辖区",
                    value: "360901"
                }, {
                    city: "宜春市",
                    text: "袁州区",
                    value: "360902"
                }, {
                    city: "宜春市",
                    text: "奉新县",
                    value: "360921"
                }, {
                    city: "宜春市",
                    text: "万载县",
                    value: "360922"
                }, {
                    city: "宜春市",
                    text: "上高县",
                    value: "360923"
                }, {
                    city: "宜春市",
                    text: "宜丰县",
                    value: "360924"
                }, {
                    city: "宜春市",
                    text: "靖安县",
                    value: "360925"
                }, {
                    city: "宜春市",
                    text: "铜鼓县",
                    value: "360926"
                }, {
                    city: "宜春市",
                    text: "丰城市",
                    value: "360981"
                }, {
                    city: "宜春市",
                    text: "樟树市",
                    value: "360982"
                }, {
                    city: "宜春市",
                    text: "高安市",
                    value: "360983"
                }],
                361e3: [{
                    city: "抚州市",
                    text: "市辖区",
                    value: "361001"
                }, {
                    city: "抚州市",
                    text: "临川区",
                    value: "361002"
                }, {
                    city: "抚州市",
                    text: "南城县",
                    value: "361021"
                }, {
                    city: "抚州市",
                    text: "黎川县",
                    value: "361022"
                }, {
                    city: "抚州市",
                    text: "南丰县",
                    value: "361023"
                }, {
                    city: "抚州市",
                    text: "崇仁县",
                    value: "361024"
                }, {
                    city: "抚州市",
                    text: "乐安县",
                    value: "361025"
                }, {
                    city: "抚州市",
                    text: "宜黄县",
                    value: "361026"
                }, {
                    city: "抚州市",
                    text: "金溪县",
                    value: "361027"
                }, {
                    city: "抚州市",
                    text: "资溪县",
                    value: "361028"
                }, {
                    city: "抚州市",
                    text: "东乡县",
                    value: "361029"
                }, {
                    city: "抚州市",
                    text: "广昌县",
                    value: "361030"
                }],
                361100: [{
                    city: "上饶市",
                    text: "市辖区",
                    value: "361101"
                }, {
                    city: "上饶市",
                    text: "信州区",
                    value: "361102"
                }, {
                    city: "上饶市",
                    text: "广丰区",
                    value: "361103"
                }, {
                    city: "上饶市",
                    text: "上饶县",
                    value: "361121"
                }, {
                    city: "上饶市",
                    text: "玉山县",
                    value: "361123"
                }, {
                    city: "上饶市",
                    text: "铅山县",
                    value: "361124"
                }, {
                    city: "上饶市",
                    text: "横峰县",
                    value: "361125"
                }, {
                    city: "上饶市",
                    text: "弋阳县",
                    value: "361126"
                }, {
                    city: "上饶市",
                    text: "余干县",
                    value: "361127"
                }, {
                    city: "上饶市",
                    text: "鄱阳县",
                    value: "361128"
                }, {
                    city: "上饶市",
                    text: "万年县",
                    value: "361129"
                }, {
                    city: "上饶市",
                    text: "婺源县",
                    value: "361130"
                }, {
                    city: "上饶市",
                    text: "德兴市",
                    value: "361181"
                }],
                370100: [{
                    city: "济南市",
                    text: "市辖区",
                    value: "370101"
                }, {
                    city: "济南市",
                    text: "历下区",
                    value: "370102"
                }, {
                    city: "济南市",
                    text: "市中区",
                    value: "370103"
                }, {
                    city: "济南市",
                    text: "槐荫区",
                    value: "370104"
                }, {
                    city: "济南市",
                    text: "天桥区",
                    value: "370105"
                }, {
                    city: "济南市",
                    text: "历城区",
                    value: "370112"
                }, {
                    city: "济南市",
                    text: "长清区",
                    value: "370113"
                }, {
                    city: "济南市",
                    text: "平阴县",
                    value: "370124"
                }, {
                    city: "济南市",
                    text: "济阳县",
                    value: "370125"
                }, {
                    city: "济南市",
                    text: "商河县",
                    value: "370126"
                }, {
                    city: "济南市",
                    text: "章丘市",
                    value: "370181"
                }],
                370200: [{
                    city: "青岛市",
                    text: "市辖区",
                    value: "370201"
                }, {
                    city: "青岛市",
                    text: "市南区",
                    value: "370202"
                }, {
                    city: "青岛市",
                    text: "市北区",
                    value: "370203"
                }, {
                    city: "青岛市",
                    text: "黄岛区",
                    value: "370211"
                }, {
                    city: "青岛市",
                    text: "崂山区",
                    value: "370212"
                }, {
                    city: "青岛市",
                    text: "李沧区",
                    value: "370213"
                }, {
                    city: "青岛市",
                    text: "城阳区",
                    value: "370214"
                }, {
                    city: "青岛市",
                    text: "胶州市",
                    value: "370281"
                }, {
                    city: "青岛市",
                    text: "即墨市",
                    value: "370282"
                }, {
                    city: "青岛市",
                    text: "平度市",
                    value: "370283"
                }, {
                    city: "青岛市",
                    text: "莱西市",
                    value: "370285"
                }],
                370300: [{
                    city: "淄博市",
                    text: "市辖区",
                    value: "370301"
                }, {
                    city: "淄博市",
                    text: "淄川区",
                    value: "370302"
                }, {
                    city: "淄博市",
                    text: "张店区",
                    value: "370303"
                }, {
                    city: "淄博市",
                    text: "博山区",
                    value: "370304"
                }, {
                    city: "淄博市",
                    text: "临淄区",
                    value: "370305"
                }, {
                    city: "淄博市",
                    text: "周村区",
                    value: "370306"
                }, {
                    city: "淄博市",
                    text: "桓台县",
                    value: "370321"
                }, {
                    city: "淄博市",
                    text: "高青县",
                    value: "370322"
                }, {
                    city: "淄博市",
                    text: "沂源县",
                    value: "370323"
                }],
                370400: [{
                    city: "枣庄市",
                    text: "市辖区",
                    value: "370401"
                }, {
                    city: "枣庄市",
                    text: "市中区",
                    value: "370402"
                }, {
                    city: "枣庄市",
                    text: "薛城区",
                    value: "370403"
                }, {
                    city: "枣庄市",
                    text: "峄城区",
                    value: "370404"
                }, {
                    city: "枣庄市",
                    text: "台儿庄区",
                    value: "370405"
                }, {
                    city: "枣庄市",
                    text: "山亭区",
                    value: "370406"
                }, {
                    city: "枣庄市",
                    text: "滕州市",
                    value: "370481"
                }],
                370500: [{
                    city: "东营市",
                    text: "市辖区",
                    value: "370501"
                }, {
                    city: "东营市",
                    text: "东营区",
                    value: "370502"
                }, {
                    city: "东营市",
                    text: "河口区",
                    value: "370503"
                }, {
                    city: "东营市",
                    text: "垦利区",
                    value: "370505"
                }, {
                    city: "东营市",
                    text: "利津县",
                    value: "370522"
                }, {
                    city: "东营市",
                    text: "广饶县",
                    value: "370523"
                }],
                370600: [{
                    city: "烟台市",
                    text: "市辖区",
                    value: "370601"
                }, {
                    city: "烟台市",
                    text: "芝罘区",
                    value: "370602"
                }, {
                    city: "烟台市",
                    text: "福山区",
                    value: "370611"
                }, {
                    city: "烟台市",
                    text: "牟平区",
                    value: "370612"
                }, {
                    city: "烟台市",
                    text: "莱山区",
                    value: "370613"
                }, {
                    city: "烟台市",
                    text: "长岛县",
                    value: "370634"
                }, {
                    city: "烟台市",
                    text: "龙口市",
                    value: "370681"
                }, {
                    city: "烟台市",
                    text: "莱阳市",
                    value: "370682"
                }, {
                    city: "烟台市",
                    text: "莱州市",
                    value: "370683"
                }, {
                    city: "烟台市",
                    text: "蓬莱市",
                    value: "370684"
                }, {
                    city: "烟台市",
                    text: "招远市",
                    value: "370685"
                }, {
                    city: "烟台市",
                    text: "栖霞市",
                    value: "370686"
                }, {
                    city: "烟台市",
                    text: "海阳市",
                    value: "370687"
                }],
                370700: [{
                    city: "潍坊市",
                    text: "市辖区",
                    value: "370701"
                }, {
                    city: "潍坊市",
                    text: "潍城区",
                    value: "370702"
                }, {
                    city: "潍坊市",
                    text: "寒亭区",
                    value: "370703"
                }, {
                    city: "潍坊市",
                    text: "坊子区",
                    value: "370704"
                }, {
                    city: "潍坊市",
                    text: "奎文区",
                    value: "370705"
                }, {
                    city: "潍坊市",
                    text: "临朐县",
                    value: "370724"
                }, {
                    city: "潍坊市",
                    text: "昌乐县",
                    value: "370725"
                }, {
                    city: "潍坊市",
                    text: "青州市",
                    value: "370781"
                }, {
                    city: "潍坊市",
                    text: "诸城市",
                    value: "370782"
                }, {
                    city: "潍坊市",
                    text: "寿光市",
                    value: "370783"
                }, {
                    city: "潍坊市",
                    text: "安丘市",
                    value: "370784"
                }, {
                    city: "潍坊市",
                    text: "高密市",
                    value: "370785"
                }, {
                    city: "潍坊市",
                    text: "昌邑市",
                    value: "370786"
                }],
                370800: [{
                    city: "济宁市",
                    text: "市辖区",
                    value: "370801"
                }, {
                    city: "济宁市",
                    text: "任城区",
                    value: "370811"
                }, {
                    city: "济宁市",
                    text: "兖州区",
                    value: "370812"
                }, {
                    city: "济宁市",
                    text: "微山县",
                    value: "370826"
                }, {
                    city: "济宁市",
                    text: "鱼台县",
                    value: "370827"
                }, {
                    city: "济宁市",
                    text: "金乡县",
                    value: "370828"
                }, {
                    city: "济宁市",
                    text: "嘉祥县",
                    value: "370829"
                }, {
                    city: "济宁市",
                    text: "汶上县",
                    value: "370830"
                }, {
                    city: "济宁市",
                    text: "泗水县",
                    value: "370831"
                }, {
                    city: "济宁市",
                    text: "梁山县",
                    value: "370832"
                }, {
                    city: "济宁市",
                    text: "曲阜市",
                    value: "370881"
                }, {
                    city: "济宁市",
                    text: "邹城市",
                    value: "370883"
                }],
                370900: [{
                    city: "泰安市",
                    text: "市辖区",
                    value: "370901"
                }, {
                    city: "泰安市",
                    text: "泰山区",
                    value: "370902"
                }, {
                    city: "泰安市",
                    text: "岱岳区",
                    value: "370911"
                }, {
                    city: "泰安市",
                    text: "宁阳县",
                    value: "370921"
                }, {
                    city: "泰安市",
                    text: "东平县",
                    value: "370923"
                }, {
                    city: "泰安市",
                    text: "新泰市",
                    value: "370982"
                }, {
                    city: "泰安市",
                    text: "肥城市",
                    value: "370983"
                }],
                371e3: [{
                    city: "威海市",
                    text: "市辖区",
                    value: "371001"
                }, {
                    city: "威海市",
                    text: "环翠区",
                    value: "371002"
                }, {
                    city: "威海市",
                    text: "文登区",
                    value: "371003"
                }, {
                    city: "威海市",
                    text: "荣成市",
                    value: "371082"
                }, {
                    city: "威海市",
                    text: "乳山市",
                    value: "371083"
                }],
                371100: [{
                    city: "日照市",
                    text: "市辖区",
                    value: "371101"
                }, {
                    city: "日照市",
                    text: "东港区",
                    value: "371102"
                }, {
                    city: "日照市",
                    text: "岚山区",
                    value: "371103"
                }, {
                    city: "日照市",
                    text: "五莲县",
                    value: "371121"
                }, {
                    city: "日照市",
                    text: "莒县",
                    value: "371122"
                }],
                371200: [{
                    city: "莱芜市",
                    text: "市辖区",
                    value: "371201"
                }, {
                    city: "莱芜市",
                    text: "莱城区",
                    value: "371202"
                }, {
                    city: "莱芜市",
                    text: "钢城区",
                    value: "371203"
                }],
                371300: [{
                    city: "临沂市",
                    text: "市辖区",
                    value: "371301"
                }, {
                    city: "临沂市",
                    text: "兰山区",
                    value: "371302"
                }, {
                    city: "临沂市",
                    text: "罗庄区",
                    value: "371311"
                }, {
                    city: "临沂市",
                    text: "河东区",
                    value: "371312"
                }, {
                    city: "临沂市",
                    text: "沂南县",
                    value: "371321"
                }, {
                    city: "临沂市",
                    text: "郯城县",
                    value: "371322"
                }, {
                    city: "临沂市",
                    text: "沂水县",
                    value: "371323"
                }, {
                    city: "临沂市",
                    text: "兰陵县",
                    value: "371324"
                }, {
                    city: "临沂市",
                    text: "费县",
                    value: "371325"
                }, {
                    city: "临沂市",
                    text: "平邑县",
                    value: "371326"
                }, {
                    city: "临沂市",
                    text: "莒南县",
                    value: "371327"
                }, {
                    city: "临沂市",
                    text: "蒙阴县",
                    value: "371328"
                }, {
                    city: "临沂市",
                    text: "临沭县",
                    value: "371329"
                }],
                371400: [{
                    city: "德州市",
                    text: "市辖区",
                    value: "371401"
                }, {
                    city: "德州市",
                    text: "德城区",
                    value: "371402"
                }, {
                    city: "德州市",
                    text: "陵城区",
                    value: "371403"
                }, {
                    city: "德州市",
                    text: "宁津县",
                    value: "371422"
                }, {
                    city: "德州市",
                    text: "庆云县",
                    value: "371423"
                }, {
                    city: "德州市",
                    text: "临邑县",
                    value: "371424"
                }, {
                    city: "德州市",
                    text: "齐河县",
                    value: "371425"
                }, {
                    city: "德州市",
                    text: "平原县",
                    value: "371426"
                }, {
                    city: "德州市",
                    text: "夏津县",
                    value: "371427"
                }, {
                    city: "德州市",
                    text: "武城县",
                    value: "371428"
                }, {
                    city: "德州市",
                    text: "乐陵市",
                    value: "371481"
                }, {
                    city: "德州市",
                    text: "禹城市",
                    value: "371482"
                }],
                371500: [{
                    city: "聊城市",
                    text: "市辖区",
                    value: "371501"
                }, {
                    city: "聊城市",
                    text: "东昌府区",
                    value: "371502"
                }, {
                    city: "聊城市",
                    text: "阳谷县",
                    value: "371521"
                }, {
                    city: "聊城市",
                    text: "莘县",
                    value: "371522"
                }, {
                    city: "聊城市",
                    text: "茌平县",
                    value: "371523"
                }, {
                    city: "聊城市",
                    text: "东阿县",
                    value: "371524"
                }, {
                    city: "聊城市",
                    text: "冠县",
                    value: "371525"
                }, {
                    city: "聊城市",
                    text: "高唐县",
                    value: "371526"
                }, {
                    city: "聊城市",
                    text: "临清市",
                    value: "371581"
                }],
                371600: [{
                    city: "滨州市",
                    text: "市辖区",
                    value: "371601"
                }, {
                    city: "滨州市",
                    text: "滨城区",
                    value: "371602"
                }, {
                    city: "滨州市",
                    text: "沾化区",
                    value: "371603"
                }, {
                    city: "滨州市",
                    text: "惠民县",
                    value: "371621"
                }, {
                    city: "滨州市",
                    text: "阳信县",
                    value: "371622"
                }, {
                    city: "滨州市",
                    text: "无棣县",
                    value: "371623"
                }, {
                    city: "滨州市",
                    text: "博兴县",
                    value: "371625"
                }, {
                    city: "滨州市",
                    text: "邹平县",
                    value: "371626"
                }],
                371700: [{
                    city: "菏泽市",
                    text: "市辖区",
                    value: "371701"
                }, {
                    city: "菏泽市",
                    text: "牡丹区",
                    value: "371702"
                }, {
                    city: "菏泽市",
                    text: "定陶区",
                    value: "371703"
                }, {
                    city: "菏泽市",
                    text: "曹县",
                    value: "371721"
                }, {
                    city: "菏泽市",
                    text: "单县",
                    value: "371722"
                }, {
                    city: "菏泽市",
                    text: "成武县",
                    value: "371723"
                }, {
                    city: "菏泽市",
                    text: "巨野县",
                    value: "371724"
                }, {
                    city: "菏泽市",
                    text: "郓城县",
                    value: "371725"
                }, {
                    city: "菏泽市",
                    text: "鄄城县",
                    value: "371726"
                }, {
                    city: "菏泽市",
                    text: "东明县",
                    value: "371728"
                }],
                410100: [{
                    city: "郑州市",
                    text: "市辖区",
                    value: "410101"
                }, {
                    city: "郑州市",
                    text: "中原区",
                    value: "410102"
                }, {
                    city: "郑州市",
                    text: "二七区",
                    value: "410103"
                }, {
                    city: "郑州市",
                    text: "管城回族区",
                    value: "410104"
                }, {
                    city: "郑州市",
                    text: "金水区",
                    value: "410105"
                }, {
                    city: "郑州市",
                    text: "上街区",
                    value: "410106"
                }, {
                    city: "郑州市",
                    text: "惠济区",
                    value: "410108"
                }, {
                    city: "郑州市",
                    text: "中牟县",
                    value: "410122"
                }, {
                    city: "郑州市",
                    text: "巩义市",
                    value: "410181"
                }, {
                    city: "郑州市",
                    text: "荥阳市",
                    value: "410182"
                }, {
                    city: "郑州市",
                    text: "新密市",
                    value: "410183"
                }, {
                    city: "郑州市",
                    text: "新郑市",
                    value: "410184"
                }, {
                    city: "郑州市",
                    text: "登封市",
                    value: "410185"
                }],
                410200: [{
                    city: "开封市",
                    text: "市辖区",
                    value: "410201"
                }, {
                    city: "开封市",
                    text: "龙亭区",
                    value: "410202"
                }, {
                    city: "开封市",
                    text: "顺河回族区",
                    value: "410203"
                }, {
                    city: "开封市",
                    text: "鼓楼区",
                    value: "410204"
                }, {
                    city: "开封市",
                    text: "禹王台区",
                    value: "410205"
                }, {
                    city: "开封市",
                    text: "金明区",
                    value: "410211"
                }, {
                    city: "开封市",
                    text: "祥符区",
                    value: "410212"
                }, {
                    city: "开封市",
                    text: "杞县",
                    value: "410221"
                }, {
                    city: "开封市",
                    text: "通许县",
                    value: "410222"
                }, {
                    city: "开封市",
                    text: "尉氏县",
                    value: "410223"
                }, {
                    city: "开封市",
                    text: "兰考县",
                    value: "410225"
                }],
                410300: [{
                    city: "洛阳市",
                    text: "市辖区",
                    value: "410301"
                }, {
                    city: "洛阳市",
                    text: "老城区",
                    value: "410302"
                }, {
                    city: "洛阳市",
                    text: "西工区",
                    value: "410303"
                }, {
                    city: "洛阳市",
                    text: "瀍河回族区",
                    value: "410304"
                }, {
                    city: "洛阳市",
                    text: "涧西区",
                    value: "410305"
                }, {
                    city: "洛阳市",
                    text: "吉利区",
                    value: "410306"
                }, {
                    city: "洛阳市",
                    text: "洛龙区",
                    value: "410311"
                }, {
                    city: "洛阳市",
                    text: "孟津县",
                    value: "410322"
                }, {
                    city: "洛阳市",
                    text: "新安县",
                    value: "410323"
                }, {
                    city: "洛阳市",
                    text: "栾川县",
                    value: "410324"
                }, {
                    city: "洛阳市",
                    text: "嵩县",
                    value: "410325"
                }, {
                    city: "洛阳市",
                    text: "汝阳县",
                    value: "410326"
                }, {
                    city: "洛阳市",
                    text: "宜阳县",
                    value: "410327"
                }, {
                    city: "洛阳市",
                    text: "洛宁县",
                    value: "410328"
                }, {
                    city: "洛阳市",
                    text: "伊川县",
                    value: "410329"
                }, {
                    city: "洛阳市",
                    text: "偃师市",
                    value: "410381"
                }],
                410400: [{
                    city: "平顶山市",
                    text: "市辖区",
                    value: "410401"
                }, {
                    city: "平顶山市",
                    text: "新华区",
                    value: "410402"
                }, {
                    city: "平顶山市",
                    text: "卫东区",
                    value: "410403"
                }, {
                    city: "平顶山市",
                    text: "石龙区",
                    value: "410404"
                }, {
                    city: "平顶山市",
                    text: "湛河区",
                    value: "410411"
                }, {
                    city: "平顶山市",
                    text: "宝丰县",
                    value: "410421"
                }, {
                    city: "平顶山市",
                    text: "叶县",
                    value: "410422"
                }, {
                    city: "平顶山市",
                    text: "鲁山县",
                    value: "410423"
                }, {
                    city: "平顶山市",
                    text: "郏县",
                    value: "410425"
                }, {
                    city: "平顶山市",
                    text: "舞钢市",
                    value: "410481"
                }, {
                    city: "平顶山市",
                    text: "汝州市",
                    value: "410482"
                }],
                410500: [{
                    city: "安阳市",
                    text: "市辖区",
                    value: "410501"
                }, {
                    city: "安阳市",
                    text: "文峰区",
                    value: "410502"
                }, {
                    city: "安阳市",
                    text: "北关区",
                    value: "410503"
                }, {
                    city: "安阳市",
                    text: "殷都区",
                    value: "410505"
                }, {
                    city: "安阳市",
                    text: "龙安区",
                    value: "410506"
                }, {
                    city: "安阳市",
                    text: "安阳县",
                    value: "410522"
                }, {
                    city: "安阳市",
                    text: "汤阴县",
                    value: "410523"
                }, {
                    city: "安阳市",
                    text: "滑县",
                    value: "410526"
                }, {
                    city: "安阳市",
                    text: "内黄县",
                    value: "410527"
                }, {
                    city: "安阳市",
                    text: "林州市",
                    value: "410581"
                }],
                410600: [{
                    city: "鹤壁市",
                    text: "市辖区",
                    value: "410601"
                }, {
                    city: "鹤壁市",
                    text: "鹤山区",
                    value: "410602"
                }, {
                    city: "鹤壁市",
                    text: "山城区",
                    value: "410603"
                }, {
                    city: "鹤壁市",
                    text: "淇滨区",
                    value: "410611"
                }, {
                    city: "鹤壁市",
                    text: "浚县",
                    value: "410621"
                }, {
                    city: "鹤壁市",
                    text: "淇县",
                    value: "410622"
                }],
                410700: [{
                    city: "新乡市",
                    text: "市辖区",
                    value: "410701"
                }, {
                    city: "新乡市",
                    text: "红旗区",
                    value: "410702"
                }, {
                    city: "新乡市",
                    text: "卫滨区",
                    value: "410703"
                }, {
                    city: "新乡市",
                    text: "凤泉区",
                    value: "410704"
                }, {
                    city: "新乡市",
                    text: "牧野区",
                    value: "410711"
                }, {
                    city: "新乡市",
                    text: "新乡县",
                    value: "410721"
                }, {
                    city: "新乡市",
                    text: "获嘉县",
                    value: "410724"
                }, {
                    city: "新乡市",
                    text: "原阳县",
                    value: "410725"
                }, {
                    city: "新乡市",
                    text: "延津县",
                    value: "410726"
                }, {
                    city: "新乡市",
                    text: "封丘县",
                    value: "410727"
                }, {
                    city: "新乡市",
                    text: "长垣县",
                    value: "410728"
                }, {
                    city: "新乡市",
                    text: "卫辉市",
                    value: "410781"
                }, {
                    city: "新乡市",
                    text: "辉县市",
                    value: "410782"
                }],
                410800: [{
                    city: "焦作市",
                    text: "市辖区",
                    value: "410801"
                }, {
                    city: "焦作市",
                    text: "解放区",
                    value: "410802"
                }, {
                    city: "焦作市",
                    text: "中站区",
                    value: "410803"
                }, {
                    city: "焦作市",
                    text: "马村区",
                    value: "410804"
                }, {
                    city: "焦作市",
                    text: "山阳区",
                    value: "410811"
                }, {
                    city: "焦作市",
                    text: "修武县",
                    value: "410821"
                }, {
                    city: "焦作市",
                    text: "博爱县",
                    value: "410822"
                }, {
                    city: "焦作市",
                    text: "武陟县",
                    value: "410823"
                }, {
                    city: "焦作市",
                    text: "温县",
                    value: "410825"
                }, {
                    city: "焦作市",
                    text: "沁阳市",
                    value: "410882"
                }, {
                    city: "焦作市",
                    text: "孟州市",
                    value: "410883"
                }],
                410900: [{
                    city: "濮阳市",
                    text: "市辖区",
                    value: "410901"
                }, {
                    city: "濮阳市",
                    text: "华龙区",
                    value: "410902"
                }, {
                    city: "濮阳市",
                    text: "清丰县",
                    value: "410922"
                }, {
                    city: "濮阳市",
                    text: "南乐县",
                    value: "410923"
                }, {
                    city: "濮阳市",
                    text: "范县",
                    value: "410926"
                }, {
                    city: "濮阳市",
                    text: "台前县",
                    value: "410927"
                }, {
                    city: "濮阳市",
                    text: "濮阳县",
                    value: "410928"
                }],
                411e3: [{
                    city: "许昌市",
                    text: "市辖区",
                    value: "411001"
                }, {
                    city: "许昌市",
                    text: "魏都区",
                    value: "411002"
                }, {
                    city: "许昌市",
                    text: "许昌县",
                    value: "411023"
                }, {
                    city: "许昌市",
                    text: "鄢陵县",
                    value: "411024"
                }, {
                    city: "许昌市",
                    text: "襄城县",
                    value: "411025"
                }, {
                    city: "许昌市",
                    text: "禹州市",
                    value: "411081"
                }, {
                    city: "许昌市",
                    text: "长葛市",
                    value: "411082"
                }],
                411100: [{
                    city: "漯河市",
                    text: "市辖区",
                    value: "411101"
                }, {
                    city: "漯河市",
                    text: "源汇区",
                    value: "411102"
                }, {
                    city: "漯河市",
                    text: "郾城区",
                    value: "411103"
                }, {
                    city: "漯河市",
                    text: "召陵区",
                    value: "411104"
                }, {
                    city: "漯河市",
                    text: "舞阳县",
                    value: "411121"
                }, {
                    city: "漯河市",
                    text: "临颍县",
                    value: "411122"
                }],
                411200: [{
                    city: "三门峡市",
                    text: "市辖区",
                    value: "411201"
                }, {
                    city: "三门峡市",
                    text: "湖滨区",
                    value: "411202"
                }, {
                    city: "三门峡市",
                    text: "陕州区",
                    value: "411203"
                }, {
                    city: "三门峡市",
                    text: "渑池县",
                    value: "411221"
                }, {
                    city: "三门峡市",
                    text: "卢氏县",
                    value: "411224"
                }, {
                    city: "三门峡市",
                    text: "义马市",
                    value: "411281"
                }, {
                    city: "三门峡市",
                    text: "灵宝市",
                    value: "411282"
                }],
                411300: [{
                    city: "南阳市",
                    text: "市辖区",
                    value: "411301"
                }, {
                    city: "南阳市",
                    text: "宛城区",
                    value: "411302"
                }, {
                    city: "南阳市",
                    text: "卧龙区",
                    value: "411303"
                }, {
                    city: "南阳市",
                    text: "南召县",
                    value: "411321"
                }, {
                    city: "南阳市",
                    text: "方城县",
                    value: "411322"
                }, {
                    city: "南阳市",
                    text: "西峡县",
                    value: "411323"
                }, {
                    city: "南阳市",
                    text: "镇平县",
                    value: "411324"
                }, {
                    city: "南阳市",
                    text: "内乡县",
                    value: "411325"
                }, {
                    city: "南阳市",
                    text: "淅川县",
                    value: "411326"
                }, {
                    city: "南阳市",
                    text: "社旗县",
                    value: "411327"
                }, {
                    city: "南阳市",
                    text: "唐河县",
                    value: "411328"
                }, {
                    city: "南阳市",
                    text: "新野县",
                    value: "411329"
                }, {
                    city: "南阳市",
                    text: "桐柏县",
                    value: "411330"
                }, {
                    city: "南阳市",
                    text: "邓州市",
                    value: "411381"
                }],
                411400: [{
                    city: "商丘市",
                    text: "市辖区",
                    value: "411401"
                }, {
                    city: "商丘市",
                    text: "梁园区",
                    value: "411402"
                }, {
                    city: "商丘市",
                    text: "睢阳区",
                    value: "411403"
                }, {
                    city: "商丘市",
                    text: "民权县",
                    value: "411421"
                }, {
                    city: "商丘市",
                    text: "睢县",
                    value: "411422"
                }, {
                    city: "商丘市",
                    text: "宁陵县",
                    value: "411423"
                }, {
                    city: "商丘市",
                    text: "柘城县",
                    value: "411424"
                }, {
                    city: "商丘市",
                    text: "虞城县",
                    value: "411425"
                }, {
                    city: "商丘市",
                    text: "夏邑县",
                    value: "411426"
                }, {
                    city: "商丘市",
                    text: "永城市",
                    value: "411481"
                }],
                411500: [{
                    city: "信阳市",
                    text: "市辖区",
                    value: "411501"
                }, {
                    city: "信阳市",
                    text: "浉河区",
                    value: "411502"
                }, {
                    city: "信阳市",
                    text: "平桥区",
                    value: "411503"
                }, {
                    city: "信阳市",
                    text: "罗山县",
                    value: "411521"
                }, {
                    city: "信阳市",
                    text: "光山县",
                    value: "411522"
                }, {
                    city: "信阳市",
                    text: "新县",
                    value: "411523"
                }, {
                    city: "信阳市",
                    text: "商城县",
                    value: "411524"
                }, {
                    city: "信阳市",
                    text: "固始县",
                    value: "411525"
                }, {
                    city: "信阳市",
                    text: "潢川县",
                    value: "411526"
                }, {
                    city: "信阳市",
                    text: "淮滨县",
                    value: "411527"
                }, {
                    city: "信阳市",
                    text: "息县",
                    value: "411528"
                }],
                411600: [{
                    city: "周口市",
                    text: "市辖区",
                    value: "411601"
                }, {
                    city: "周口市",
                    text: "川汇区",
                    value: "411602"
                }, {
                    city: "周口市",
                    text: "扶沟县",
                    value: "411621"
                }, {
                    city: "周口市",
                    text: "西华县",
                    value: "411622"
                }, {
                    city: "周口市",
                    text: "商水县",
                    value: "411623"
                }, {
                    city: "周口市",
                    text: "沈丘县",
                    value: "411624"
                }, {
                    city: "周口市",
                    text: "郸城县",
                    value: "411625"
                }, {
                    city: "周口市",
                    text: "淮阳县",
                    value: "411626"
                }, {
                    city: "周口市",
                    text: "太康县",
                    value: "411627"
                }, {
                    city: "周口市",
                    text: "鹿邑县",
                    value: "411628"
                }, {
                    city: "周口市",
                    text: "项城市",
                    value: "411681"
                }],
                411700: [{
                    city: "驻马店市",
                    text: "市辖区",
                    value: "411701"
                }, {
                    city: "驻马店市",
                    text: "驿城区",
                    value: "411702"
                }, {
                    city: "驻马店市",
                    text: "西平县",
                    value: "411721"
                }, {
                    city: "驻马店市",
                    text: "上蔡县",
                    value: "411722"
                }, {
                    city: "驻马店市",
                    text: "平舆县",
                    value: "411723"
                }, {
                    city: "驻马店市",
                    text: "正阳县",
                    value: "411724"
                }, {
                    city: "驻马店市",
                    text: "确山县",
                    value: "411725"
                }, {
                    city: "驻马店市",
                    text: "泌阳县",
                    value: "411726"
                }, {
                    city: "驻马店市",
                    text: "汝南县",
                    value: "411727"
                }, {
                    city: "驻马店市",
                    text: "遂平县",
                    value: "411728"
                }, {
                    city: "驻马店市",
                    text: "新蔡县",
                    value: "411729"
                }],
                419e3: [{
                    city: "省直辖县级行政区划",
                    text: "济源市",
                    value: "419001"
                }],
                420100: [{
                    city: "武汉市",
                    text: "市辖区",
                    value: "420101"
                }, {
                    city: "武汉市",
                    text: "江岸区",
                    value: "420102"
                }, {
                    city: "武汉市",
                    text: "江汉区",
                    value: "420103"
                }, {
                    city: "武汉市",
                    text: "硚口区",
                    value: "420104"
                }, {
                    city: "武汉市",
                    text: "汉阳区",
                    value: "420105"
                }, {
                    city: "武汉市",
                    text: "武昌区",
                    value: "420106"
                }, {
                    city: "武汉市",
                    text: "青山区",
                    value: "420107"
                }, {
                    city: "武汉市",
                    text: "洪山区",
                    value: "420111"
                }, {
                    city: "武汉市",
                    text: "东西湖区",
                    value: "420112"
                }, {
                    city: "武汉市",
                    text: "汉南区",
                    value: "420113"
                }, {
                    city: "武汉市",
                    text: "蔡甸区",
                    value: "420114"
                }, {
                    city: "武汉市",
                    text: "江夏区",
                    value: "420115"
                }, {
                    city: "武汉市",
                    text: "黄陂区",
                    value: "420116"
                }, {
                    city: "武汉市",
                    text: "新洲区",
                    value: "420117"
                }],
                420200: [{
                    city: "黄石市",
                    text: "市辖区",
                    value: "420201"
                }, {
                    city: "黄石市",
                    text: "黄石港区",
                    value: "420202"
                }, {
                    city: "黄石市",
                    text: "西塞山区",
                    value: "420203"
                }, {
                    city: "黄石市",
                    text: "下陆区",
                    value: "420204"
                }, {
                    city: "黄石市",
                    text: "铁山区",
                    value: "420205"
                }, {
                    city: "黄石市",
                    text: "阳新县",
                    value: "420222"
                }, {
                    city: "黄石市",
                    text: "大冶市",
                    value: "420281"
                }],
                420300: [{
                    city: "十堰市",
                    text: "市辖区",
                    value: "420301"
                }, {
                    city: "十堰市",
                    text: "茅箭区",
                    value: "420302"
                }, {
                    city: "十堰市",
                    text: "张湾区",
                    value: "420303"
                }, {
                    city: "十堰市",
                    text: "郧阳区",
                    value: "420304"
                }, {
                    city: "十堰市",
                    text: "郧西县",
                    value: "420322"
                }, {
                    city: "十堰市",
                    text: "竹山县",
                    value: "420323"
                }, {
                    city: "十堰市",
                    text: "竹溪县",
                    value: "420324"
                }, {
                    city: "十堰市",
                    text: "房县",
                    value: "420325"
                }, {
                    city: "十堰市",
                    text: "丹江口市",
                    value: "420381"
                }],
                420500: [{
                    city: "宜昌市",
                    text: "市辖区",
                    value: "420501"
                }, {
                    city: "宜昌市",
                    text: "西陵区",
                    value: "420502"
                }, {
                    city: "宜昌市",
                    text: "伍家岗区",
                    value: "420503"
                }, {
                    city: "宜昌市",
                    text: "点军区",
                    value: "420504"
                }, {
                    city: "宜昌市",
                    text: "猇亭区",
                    value: "420505"
                }, {
                    city: "宜昌市",
                    text: "夷陵区",
                    value: "420506"
                }, {
                    city: "宜昌市",
                    text: "远安县",
                    value: "420525"
                }, {
                    city: "宜昌市",
                    text: "兴山县",
                    value: "420526"
                }, {
                    city: "宜昌市",
                    text: "秭归县",
                    value: "420527"
                }, {
                    city: "宜昌市",
                    text: "长阳土家族自治县",
                    value: "420528"
                }, {
                    city: "宜昌市",
                    text: "五峰土家族自治县",
                    value: "420529"
                }, {
                    city: "宜昌市",
                    text: "宜都市",
                    value: "420581"
                }, {
                    city: "宜昌市",
                    text: "当阳市",
                    value: "420582"
                }, {
                    city: "宜昌市",
                    text: "枝江市",
                    value: "420583"
                }],
                420600: [{
                    city: "襄阳市",
                    text: "市辖区",
                    value: "420601"
                }, {
                    city: "襄阳市",
                    text: "襄城区",
                    value: "420602"
                }, {
                    city: "襄阳市",
                    text: "樊城区",
                    value: "420606"
                }, {
                    city: "襄阳市",
                    text: "襄州区",
                    value: "420607"
                }, {
                    city: "襄阳市",
                    text: "南漳县",
                    value: "420624"
                }, {
                    city: "襄阳市",
                    text: "谷城县",
                    value: "420625"
                }, {
                    city: "襄阳市",
                    text: "保康县",
                    value: "420626"
                }, {
                    city: "襄阳市",
                    text: "老河口市",
                    value: "420682"
                }, {
                    city: "襄阳市",
                    text: "枣阳市",
                    value: "420683"
                }, {
                    city: "襄阳市",
                    text: "宜城市",
                    value: "420684"
                }],
                420700: [{
                    city: "鄂州市",
                    text: "市辖区",
                    value: "420701"
                }, {
                    city: "鄂州市",
                    text: "梁子湖区",
                    value: "420702"
                }, {
                    city: "鄂州市",
                    text: "华容区",
                    value: "420703"
                }, {
                    city: "鄂州市",
                    text: "鄂城区",
                    value: "420704"
                }],
                420800: [{
                    city: "荆门市",
                    text: "市辖区",
                    value: "420801"
                }, {
                    city: "荆门市",
                    text: "东宝区",
                    value: "420802"
                }, {
                    city: "荆门市",
                    text: "掇刀区",
                    value: "420804"
                }, {
                    city: "荆门市",
                    text: "京山县",
                    value: "420821"
                }, {
                    city: "荆门市",
                    text: "沙洋县",
                    value: "420822"
                }, {
                    city: "荆门市",
                    text: "钟祥市",
                    value: "420881"
                }],
                420900: [{
                    city: "孝感市",
                    text: "市辖区",
                    value: "420901"
                }, {
                    city: "孝感市",
                    text: "孝南区",
                    value: "420902"
                }, {
                    city: "孝感市",
                    text: "孝昌县",
                    value: "420921"
                }, {
                    city: "孝感市",
                    text: "大悟县",
                    value: "420922"
                }, {
                    city: "孝感市",
                    text: "云梦县",
                    value: "420923"
                }, {
                    city: "孝感市",
                    text: "应城市",
                    value: "420981"
                }, {
                    city: "孝感市",
                    text: "安陆市",
                    value: "420982"
                }, {
                    city: "孝感市",
                    text: "汉川市",
                    value: "420984"
                }],
                421e3: [{
                    city: "荆州市",
                    text: "市辖区",
                    value: "421001"
                }, {
                    city: "荆州市",
                    text: "沙市区",
                    value: "421002"
                }, {
                    city: "荆州市",
                    text: "荆州区",
                    value: "421003"
                }, {
                    city: "荆州市",
                    text: "公安县",
                    value: "421022"
                }, {
                    city: "荆州市",
                    text: "监利县",
                    value: "421023"
                }, {
                    city: "荆州市",
                    text: "江陵县",
                    value: "421024"
                }, {
                    city: "荆州市",
                    text: "石首市",
                    value: "421081"
                }, {
                    city: "荆州市",
                    text: "洪湖市",
                    value: "421083"
                }, {
                    city: "荆州市",
                    text: "松滋市",
                    value: "421087"
                }],
                421100: [{
                    city: "黄冈市",
                    text: "市辖区",
                    value: "421101"
                }, {
                    city: "黄冈市",
                    text: "黄州区",
                    value: "421102"
                }, {
                    city: "黄冈市",
                    text: "团风县",
                    value: "421121"
                }, {
                    city: "黄冈市",
                    text: "红安县",
                    value: "421122"
                }, {
                    city: "黄冈市",
                    text: "罗田县",
                    value: "421123"
                }, {
                    city: "黄冈市",
                    text: "英山县",
                    value: "421124"
                }, {
                    city: "黄冈市",
                    text: "浠水县",
                    value: "421125"
                }, {
                    city: "黄冈市",
                    text: "蕲春县",
                    value: "421126"
                }, {
                    city: "黄冈市",
                    text: "黄梅县",
                    value: "421127"
                }, {
                    city: "黄冈市",
                    text: "麻城市",
                    value: "421181"
                }, {
                    city: "黄冈市",
                    text: "武穴市",
                    value: "421182"
                }],
                421200: [{
                    city: "咸宁市",
                    text: "市辖区",
                    value: "421201"
                }, {
                    city: "咸宁市",
                    text: "咸安区",
                    value: "421202"
                }, {
                    city: "咸宁市",
                    text: "嘉鱼县",
                    value: "421221"
                }, {
                    city: "咸宁市",
                    text: "通城县",
                    value: "421222"
                }, {
                    city: "咸宁市",
                    text: "崇阳县",
                    value: "421223"
                }, {
                    city: "咸宁市",
                    text: "通山县",
                    value: "421224"
                }, {
                    city: "咸宁市",
                    text: "赤壁市",
                    value: "421281"
                }],
                421300: [{
                    city: "随州市",
                    text: "市辖区",
                    value: "421301"
                }, {
                    city: "随州市",
                    text: "曾都区",
                    value: "421303"
                }, {
                    city: "随州市",
                    text: "随县",
                    value: "421321"
                }, {
                    city: "随州市",
                    text: "广水市",
                    value: "421381"
                }],
                422800: [{
                    city: "恩施土家族苗族自治州",
                    text: "恩施市",
                    value: "422801"
                }, {
                    city: "恩施土家族苗族自治州",
                    text: "利川市",
                    value: "422802"
                }, {
                    city: "恩施土家族苗族自治州",
                    text: "建始县",
                    value: "422822"
                }, {
                    city: "恩施土家族苗族自治州",
                    text: "巴东县",
                    value: "422823"
                }, {
                    city: "恩施土家族苗族自治州",
                    text: "宣恩县",
                    value: "422825"
                }, {
                    city: "恩施土家族苗族自治州",
                    text: "咸丰县",
                    value: "422826"
                }, {
                    city: "恩施土家族苗族自治州",
                    text: "来凤县",
                    value: "422827"
                }, {
                    city: "恩施土家族苗族自治州",
                    text: "鹤峰县",
                    value: "422828"
                }],
                429e3: [{
                    city: "省直辖县级行政区划",
                    text: "仙桃市",
                    value: "429004"
                }, {
                    city: "省直辖县级行政区划",
                    text: "潜江市",
                    value: "429005"
                }, {
                    city: "省直辖县级行政区划",
                    text: "天门市",
                    value: "429006"
                }, {
                    city: "省直辖县级行政区划",
                    text: "神农架林区",
                    value: "429021"
                }],
                430100: [{
                    city: "长沙市",
                    text: "市辖区",
                    value: "430101"
                }, {
                    city: "长沙市",
                    text: "芙蓉区",
                    value: "430102"
                }, {
                    city: "长沙市",
                    text: "天心区",
                    value: "430103"
                }, {
                    city: "长沙市",
                    text: "岳麓区",
                    value: "430104"
                }, {
                    city: "长沙市",
                    text: "开福区",
                    value: "430105"
                }, {
                    city: "长沙市",
                    text: "雨花区",
                    value: "430111"
                }, {
                    city: "长沙市",
                    text: "望城区",
                    value: "430112"
                }, {
                    city: "长沙市",
                    text: "长沙县",
                    value: "430121"
                }, {
                    city: "长沙市",
                    text: "宁乡县",
                    value: "430124"
                }, {
                    city: "长沙市",
                    text: "浏阳市",
                    value: "430181"
                }],
                430200: [{
                    city: "株洲市",
                    text: "市辖区",
                    value: "430201"
                }, {
                    city: "株洲市",
                    text: "荷塘区",
                    value: "430202"
                }, {
                    city: "株洲市",
                    text: "芦淞区",
                    value: "430203"
                }, {
                    city: "株洲市",
                    text: "石峰区",
                    value: "430204"
                }, {
                    city: "株洲市",
                    text: "天元区",
                    value: "430211"
                }, {
                    city: "株洲市",
                    text: "株洲县",
                    value: "430221"
                }, {
                    city: "株洲市",
                    text: "攸县",
                    value: "430223"
                }, {
                    city: "株洲市",
                    text: "茶陵县",
                    value: "430224"
                }, {
                    city: "株洲市",
                    text: "炎陵县",
                    value: "430225"
                }, {
                    city: "株洲市",
                    text: "醴陵市",
                    value: "430281"
                }],
                430300: [{
                    city: "湘潭市",
                    text: "市辖区",
                    value: "430301"
                }, {
                    city: "湘潭市",
                    text: "雨湖区",
                    value: "430302"
                }, {
                    city: "湘潭市",
                    text: "岳塘区",
                    value: "430304"
                }, {
                    city: "湘潭市",
                    text: "湘潭县",
                    value: "430321"
                }, {
                    city: "湘潭市",
                    text: "湘乡市",
                    value: "430381"
                }, {
                    city: "湘潭市",
                    text: "韶山市",
                    value: "430382"
                }],
                430400: [{
                    city: "衡阳市",
                    text: "市辖区",
                    value: "430401"
                }, {
                    city: "衡阳市",
                    text: "珠晖区",
                    value: "430405"
                }, {
                    city: "衡阳市",
                    text: "雁峰区",
                    value: "430406"
                }, {
                    city: "衡阳市",
                    text: "石鼓区",
                    value: "430407"
                }, {
                    city: "衡阳市",
                    text: "蒸湘区",
                    value: "430408"
                }, {
                    city: "衡阳市",
                    text: "南岳区",
                    value: "430412"
                }, {
                    city: "衡阳市",
                    text: "衡阳县",
                    value: "430421"
                }, {
                    city: "衡阳市",
                    text: "衡南县",
                    value: "430422"
                }, {
                    city: "衡阳市",
                    text: "衡山县",
                    value: "430423"
                }, {
                    city: "衡阳市",
                    text: "衡东县",
                    value: "430424"
                }, {
                    city: "衡阳市",
                    text: "祁东县",
                    value: "430426"
                }, {
                    city: "衡阳市",
                    text: "耒阳市",
                    value: "430481"
                }, {
                    city: "衡阳市",
                    text: "常宁市",
                    value: "430482"
                }],
                430500: [{
                    city: "邵阳市",
                    text: "市辖区",
                    value: "430501"
                }, {
                    city: "邵阳市",
                    text: "双清区",
                    value: "430502"
                }, {
                    city: "邵阳市",
                    text: "大祥区",
                    value: "430503"
                }, {
                    city: "邵阳市",
                    text: "北塔区",
                    value: "430511"
                }, {
                    city: "邵阳市",
                    text: "邵东县",
                    value: "430521"
                }, {
                    city: "邵阳市",
                    text: "新邵县",
                    value: "430522"
                }, {
                    city: "邵阳市",
                    text: "邵阳县",
                    value: "430523"
                }, {
                    city: "邵阳市",
                    text: "隆回县",
                    value: "430524"
                }, {
                    city: "邵阳市",
                    text: "洞口县",
                    value: "430525"
                }, {
                    city: "邵阳市",
                    text: "绥宁县",
                    value: "430527"
                }, {
                    city: "邵阳市",
                    text: "新宁县",
                    value: "430528"
                }, {
                    city: "邵阳市",
                    text: "城步苗族自治县",
                    value: "430529"
                }, {
                    city: "邵阳市",
                    text: "武冈市",
                    value: "430581"
                }],
                430600: [{
                    city: "岳阳市",
                    text: "市辖区",
                    value: "430601"
                }, {
                    city: "岳阳市",
                    text: "岳阳楼区",
                    value: "430602"
                }, {
                    city: "岳阳市",
                    text: "云溪区",
                    value: "430603"
                }, {
                    city: "岳阳市",
                    text: "君山区",
                    value: "430611"
                }, {
                    city: "岳阳市",
                    text: "岳阳县",
                    value: "430621"
                }, {
                    city: "岳阳市",
                    text: "华容县",
                    value: "430623"
                }, {
                    city: "岳阳市",
                    text: "湘阴县",
                    value: "430624"
                }, {
                    city: "岳阳市",
                    text: "平江县",
                    value: "430626"
                }, {
                    city: "岳阳市",
                    text: "汨罗市",
                    value: "430681"
                }, {
                    city: "岳阳市",
                    text: "临湘市",
                    value: "430682"
                }],
                430700: [{
                    city: "常德市",
                    text: "市辖区",
                    value: "430701"
                }, {
                    city: "常德市",
                    text: "武陵区",
                    value: "430702"
                }, {
                    city: "常德市",
                    text: "鼎城区",
                    value: "430703"
                }, {
                    city: "常德市",
                    text: "安乡县",
                    value: "430721"
                }, {
                    city: "常德市",
                    text: "汉寿县",
                    value: "430722"
                }, {
                    city: "常德市",
                    text: "澧县",
                    value: "430723"
                }, {
                    city: "常德市",
                    text: "临澧县",
                    value: "430724"
                }, {
                    city: "常德市",
                    text: "桃源县",
                    value: "430725"
                }, {
                    city: "常德市",
                    text: "石门县",
                    value: "430726"
                }, {
                    city: "常德市",
                    text: "津市市",
                    value: "430781"
                }],
                430800: [{
                    city: "张家界市",
                    text: "市辖区",
                    value: "430801"
                }, {
                    city: "张家界市",
                    text: "永定区",
                    value: "430802"
                }, {
                    city: "张家界市",
                    text: "武陵源区",
                    value: "430811"
                }, {
                    city: "张家界市",
                    text: "慈利县",
                    value: "430821"
                }, {
                    city: "张家界市",
                    text: "桑植县",
                    value: "430822"
                }],
                430900: [{
                    city: "益阳市",
                    text: "市辖区",
                    value: "430901"
                }, {
                    city: "益阳市",
                    text: "资阳区",
                    value: "430902"
                }, {
                    city: "益阳市",
                    text: "赫山区",
                    value: "430903"
                }, {
                    city: "益阳市",
                    text: "南县",
                    value: "430921"
                }, {
                    city: "益阳市",
                    text: "桃江县",
                    value: "430922"
                }, {
                    city: "益阳市",
                    text: "安化县",
                    value: "430923"
                }, {
                    city: "益阳市",
                    text: "沅江市",
                    value: "430981"
                }],
                431e3: [{
                    city: "郴州市",
                    text: "市辖区",
                    value: "431001"
                }, {
                    city: "郴州市",
                    text: "北湖区",
                    value: "431002"
                }, {
                    city: "郴州市",
                    text: "苏仙区",
                    value: "431003"
                }, {
                    city: "郴州市",
                    text: "桂阳县",
                    value: "431021"
                }, {
                    city: "郴州市",
                    text: "宜章县",
                    value: "431022"
                }, {
                    city: "郴州市",
                    text: "永兴县",
                    value: "431023"
                }, {
                    city: "郴州市",
                    text: "嘉禾县",
                    value: "431024"
                }, {
                    city: "郴州市",
                    text: "临武县",
                    value: "431025"
                }, {
                    city: "郴州市",
                    text: "汝城县",
                    value: "431026"
                }, {
                    city: "郴州市",
                    text: "桂东县",
                    value: "431027"
                }, {
                    city: "郴州市",
                    text: "安仁县",
                    value: "431028"
                }, {
                    city: "郴州市",
                    text: "资兴市",
                    value: "431081"
                }],
                431100: [{
                    city: "永州市",
                    text: "市辖区",
                    value: "431101"
                }, {
                    city: "永州市",
                    text: "零陵区",
                    value: "431102"
                }, {
                    city: "永州市",
                    text: "冷水滩区",
                    value: "431103"
                }, {
                    city: "永州市",
                    text: "祁阳县",
                    value: "431121"
                }, {
                    city: "永州市",
                    text: "东安县",
                    value: "431122"
                }, {
                    city: "永州市",
                    text: "双牌县",
                    value: "431123"
                }, {
                    city: "永州市",
                    text: "道县",
                    value: "431124"
                }, {
                    city: "永州市",
                    text: "江永县",
                    value: "431125"
                }, {
                    city: "永州市",
                    text: "宁远县",
                    value: "431126"
                }, {
                    city: "永州市",
                    text: "蓝山县",
                    value: "431127"
                }, {
                    city: "永州市",
                    text: "新田县",
                    value: "431128"
                }, {
                    city: "永州市",
                    text: "江华瑶族自治县",
                    value: "431129"
                }],
                431200: [{
                    city: "怀化市",
                    text: "市辖区",
                    value: "431201"
                }, {
                    city: "怀化市",
                    text: "鹤城区",
                    value: "431202"
                }, {
                    city: "怀化市",
                    text: "中方县",
                    value: "431221"
                }, {
                    city: "怀化市",
                    text: "沅陵县",
                    value: "431222"
                }, {
                    city: "怀化市",
                    text: "辰溪县",
                    value: "431223"
                }, {
                    city: "怀化市",
                    text: "溆浦县",
                    value: "431224"
                }, {
                    city: "怀化市",
                    text: "会同县",
                    value: "431225"
                }, {
                    city: "怀化市",
                    text: "麻阳苗族自治县",
                    value: "431226"
                }, {
                    city: "怀化市",
                    text: "新晃侗族自治县",
                    value: "431227"
                }, {
                    city: "怀化市",
                    text: "芷江侗族自治县",
                    value: "431228"
                }, {
                    city: "怀化市",
                    text: "靖州苗族侗族自治县",
                    value: "431229"
                }, {
                    city: "怀化市",
                    text: "通道侗族自治县",
                    value: "431230"
                }, {
                    city: "怀化市",
                    text: "洪江市",
                    value: "431281"
                }],
                431300: [{
                    city: "娄底市",
                    text: "市辖区",
                    value: "431301"
                }, {
                    city: "娄底市",
                    text: "娄星区",
                    value: "431302"
                }, {
                    city: "娄底市",
                    text: "双峰县",
                    value: "431321"
                }, {
                    city: "娄底市",
                    text: "新化县",
                    value: "431322"
                }, {
                    city: "娄底市",
                    text: "冷水江市",
                    value: "431381"
                }, {
                    city: "娄底市",
                    text: "涟源市",
                    value: "431382"
                }],
                433100: [{
                    city: "湘西土家族苗族自治州",
                    text: "吉首市",
                    value: "433101"
                }, {
                    city: "湘西土家族苗族自治州",
                    text: "泸溪县",
                    value: "433122"
                }, {
                    city: "湘西土家族苗族自治州",
                    text: "凤凰县",
                    value: "433123"
                }, {
                    city: "湘西土家族苗族自治州",
                    text: "花垣县",
                    value: "433124"
                }, {
                    city: "湘西土家族苗族自治州",
                    text: "保靖县",
                    value: "433125"
                }, {
                    city: "湘西土家族苗族自治州",
                    text: "古丈县",
                    value: "433126"
                }, {
                    city: "湘西土家族苗族自治州",
                    text: "永顺县",
                    value: "433127"
                }, {
                    city: "湘西土家族苗族自治州",
                    text: "龙山县",
                    value: "433130"
                }],
                440100: [{
                    city: "广州市",
                    text: "市辖区",
                    value: "440101"
                }, {
                    city: "广州市",
                    text: "荔湾区",
                    value: "440103"
                }, {
                    city: "广州市",
                    text: "越秀区",
                    value: "440104"
                }, {
                    city: "广州市",
                    text: "海珠区",
                    value: "440105"
                }, {
                    city: "广州市",
                    text: "天河区",
                    value: "440106"
                }, {
                    city: "广州市",
                    text: "白云区",
                    value: "440111"
                }, {
                    city: "广州市",
                    text: "黄埔区",
                    value: "440112"
                }, {
                    city: "广州市",
                    text: "番禺区",
                    value: "440113"
                }, {
                    city: "广州市",
                    text: "花都区",
                    value: "440114"
                }, {
                    city: "广州市",
                    text: "南沙区",
                    value: "440115"
                }, {
                    city: "广州市",
                    text: "从化区",
                    value: "440117"
                }, {
                    city: "广州市",
                    text: "增城区",
                    value: "440118"
                }],
                440200: [{
                    city: "韶关市",
                    text: "市辖区",
                    value: "440201"
                }, {
                    city: "韶关市",
                    text: "武江区",
                    value: "440203"
                }, {
                    city: "韶关市",
                    text: "浈江区",
                    value: "440204"
                }, {
                    city: "韶关市",
                    text: "曲江区",
                    value: "440205"
                }, {
                    city: "韶关市",
                    text: "始兴县",
                    value: "440222"
                }, {
                    city: "韶关市",
                    text: "仁化县",
                    value: "440224"
                }, {
                    city: "韶关市",
                    text: "翁源县",
                    value: "440229"
                }, {
                    city: "韶关市",
                    text: "乳源瑶族自治县",
                    value: "440232"
                }, {
                    city: "韶关市",
                    text: "新丰县",
                    value: "440233"
                }, {
                    city: "韶关市",
                    text: "乐昌市",
                    value: "440281"
                }, {
                    city: "韶关市",
                    text: "南雄市",
                    value: "440282"
                }],
                440300: [{
                    city: "深圳市",
                    text: "市辖区",
                    value: "440301"
                }, {
                    city: "深圳市",
                    text: "罗湖区",
                    value: "440303"
                }, {
                    city: "深圳市",
                    text: "福田区",
                    value: "440304"
                }, {
                    city: "深圳市",
                    text: "南山区",
                    value: "440305"
                }, {
                    city: "深圳市",
                    text: "宝安区",
                    value: "440306"
                }, {
                    city: "深圳市",
                    text: "龙岗区",
                    value: "440307"
                }, {
                    city: "深圳市",
                    text: "盐田区",
                    value: "440308"
                }],
                440400: [{
                    city: "珠海市",
                    text: "市辖区",
                    value: "440401"
                }, {
                    city: "珠海市",
                    text: "香洲区",
                    value: "440402"
                }, {
                    city: "珠海市",
                    text: "斗门区",
                    value: "440403"
                }, {
                    city: "珠海市",
                    text: "金湾区",
                    value: "440404"
                }],
                440500: [{
                    city: "汕头市",
                    text: "市辖区",
                    value: "440501"
                }, {
                    city: "汕头市",
                    text: "龙湖区",
                    value: "440507"
                }, {
                    city: "汕头市",
                    text: "金平区",
                    value: "440511"
                }, {
                    city: "汕头市",
                    text: "濠江区",
                    value: "440512"
                }, {
                    city: "汕头市",
                    text: "潮阳区",
                    value: "440513"
                }, {
                    city: "汕头市",
                    text: "潮南区",
                    value: "440514"
                }, {
                    city: "汕头市",
                    text: "澄海区",
                    value: "440515"
                }, {
                    city: "汕头市",
                    text: "南澳县",
                    value: "440523"
                }],
                440600: [{
                    city: "佛山市",
                    text: "市辖区",
                    value: "440601"
                }, {
                    city: "佛山市",
                    text: "禅城区",
                    value: "440604"
                }, {
                    city: "佛山市",
                    text: "南海区",
                    value: "440605"
                }, {
                    city: "佛山市",
                    text: "顺德区",
                    value: "440606"
                }, {
                    city: "佛山市",
                    text: "三水区",
                    value: "440607"
                }, {
                    city: "佛山市",
                    text: "高明区",
                    value: "440608"
                }],
                440700: [{
                    city: "江门市",
                    text: "市辖区",
                    value: "440701"
                }, {
                    city: "江门市",
                    text: "蓬江区",
                    value: "440703"
                }, {
                    city: "江门市",
                    text: "江海区",
                    value: "440704"
                }, {
                    city: "江门市",
                    text: "新会区",
                    value: "440705"
                }, {
                    city: "江门市",
                    text: "台山市",
                    value: "440781"
                }, {
                    city: "江门市",
                    text: "开平市",
                    value: "440783"
                }, {
                    city: "江门市",
                    text: "鹤山市",
                    value: "440784"
                }, {
                    city: "江门市",
                    text: "恩平市",
                    value: "440785"
                }],
                440800: [{
                    city: "湛江市",
                    text: "市辖区",
                    value: "440801"
                }, {
                    city: "湛江市",
                    text: "赤坎区",
                    value: "440802"
                }, {
                    city: "湛江市",
                    text: "霞山区",
                    value: "440803"
                }, {
                    city: "湛江市",
                    text: "坡头区",
                    value: "440804"
                }, {
                    city: "湛江市",
                    text: "麻章区",
                    value: "440811"
                }, {
                    city: "湛江市",
                    text: "遂溪县",
                    value: "440823"
                }, {
                    city: "湛江市",
                    text: "徐闻县",
                    value: "440825"
                }, {
                    city: "湛江市",
                    text: "廉江市",
                    value: "440881"
                }, {
                    city: "湛江市",
                    text: "雷州市",
                    value: "440882"
                }, {
                    city: "湛江市",
                    text: "吴川市",
                    value: "440883"
                }],
                440900: [{
                    city: "茂名市",
                    text: "市辖区",
                    value: "440901"
                }, {
                    city: "茂名市",
                    text: "茂南区",
                    value: "440902"
                }, {
                    city: "茂名市",
                    text: "电白区",
                    value: "440904"
                }, {
                    city: "茂名市",
                    text: "高州市",
                    value: "440981"
                }, {
                    city: "茂名市",
                    text: "化州市",
                    value: "440982"
                }, {
                    city: "茂名市",
                    text: "信宜市",
                    value: "440983"
                }],
                441200: [{
                    city: "肇庆市",
                    text: "市辖区",
                    value: "441201"
                }, {
                    city: "肇庆市",
                    text: "端州区",
                    value: "441202"
                }, {
                    city: "肇庆市",
                    text: "鼎湖区",
                    value: "441203"
                }, {
                    city: "肇庆市",
                    text: "高要区",
                    value: "441204"
                }, {
                    city: "肇庆市",
                    text: "广宁县",
                    value: "441223"
                }, {
                    city: "肇庆市",
                    text: "怀集县",
                    value: "441224"
                }, {
                    city: "肇庆市",
                    text: "封开县",
                    value: "441225"
                }, {
                    city: "肇庆市",
                    text: "德庆县",
                    value: "441226"
                }, {
                    city: "肇庆市",
                    text: "四会市",
                    value: "441284"
                }],
                441300: [{
                    city: "惠州市",
                    text: "市辖区",
                    value: "441301"
                }, {
                    city: "惠州市",
                    text: "惠城区",
                    value: "441302"
                }, {
                    city: "惠州市",
                    text: "惠阳区",
                    value: "441303"
                }, {
                    city: "惠州市",
                    text: "博罗县",
                    value: "441322"
                }, {
                    city: "惠州市",
                    text: "惠东县",
                    value: "441323"
                }, {
                    city: "惠州市",
                    text: "龙门县",
                    value: "441324"
                }],
                441400: [{
                    city: "梅州市",
                    text: "市辖区",
                    value: "441401"
                }, {
                    city: "梅州市",
                    text: "梅江区",
                    value: "441402"
                }, {
                    city: "梅州市",
                    text: "梅县区",
                    value: "441403"
                }, {
                    city: "梅州市",
                    text: "大埔县",
                    value: "441422"
                }, {
                    city: "梅州市",
                    text: "丰顺县",
                    value: "441423"
                }, {
                    city: "梅州市",
                    text: "五华县",
                    value: "441424"
                }, {
                    city: "梅州市",
                    text: "平远县",
                    value: "441426"
                }, {
                    city: "梅州市",
                    text: "蕉岭县",
                    value: "441427"
                }, {
                    city: "梅州市",
                    text: "兴宁市",
                    value: "441481"
                }],
                441500: [{
                    city: "汕尾市",
                    text: "市辖区",
                    value: "441501"
                }, {
                    city: "汕尾市",
                    text: "城区",
                    value: "441502"
                }, {
                    city: "汕尾市",
                    text: "海丰县",
                    value: "441521"
                }, {
                    city: "汕尾市",
                    text: "陆河县",
                    value: "441523"
                }, {
                    city: "汕尾市",
                    text: "陆丰市",
                    value: "441581"
                }],
                441600: [{
                    city: "河源市",
                    text: "市辖区",
                    value: "441601"
                }, {
                    city: "河源市",
                    text: "源城区",
                    value: "441602"
                }, {
                    city: "河源市",
                    text: "紫金县",
                    value: "441621"
                }, {
                    city: "河源市",
                    text: "龙川县",
                    value: "441622"
                }, {
                    city: "河源市",
                    text: "连平县",
                    value: "441623"
                }, {
                    city: "河源市",
                    text: "和平县",
                    value: "441624"
                }, {
                    city: "河源市",
                    text: "东源县",
                    value: "441625"
                }],
                441700: [{
                    city: "阳江市",
                    text: "市辖区",
                    value: "441701"
                }, {
                    city: "阳江市",
                    text: "江城区",
                    value: "441702"
                }, {
                    city: "阳江市",
                    text: "阳东区",
                    value: "441704"
                }, {
                    city: "阳江市",
                    text: "阳西县",
                    value: "441721"
                }, {
                    city: "阳江市",
                    text: "阳春市",
                    value: "441781"
                }],
                441800: [{
                    city: "清远市",
                    text: "市辖区",
                    value: "441801"
                }, {
                    city: "清远市",
                    text: "清城区",
                    value: "441802"
                }, {
                    city: "清远市",
                    text: "清新区",
                    value: "441803"
                }, {
                    city: "清远市",
                    text: "佛冈县",
                    value: "441821"
                }, {
                    city: "清远市",
                    text: "阳山县",
                    value: "441823"
                }, {
                    city: "清远市",
                    text: "连山壮族瑶族自治县",
                    value: "441825"
                }, {
                    city: "清远市",
                    text: "连南瑶族自治县",
                    value: "441826"
                }, {
                    city: "清远市",
                    text: "英德市",
                    value: "441881"
                }, {
                    city: "清远市",
                    text: "连州市",
                    value: "441882"
                }],
                441900: [],
                442e3: [],
                445100: [{
                    city: "潮州市",
                    text: "市辖区",
                    value: "445101"
                }, {
                    city: "潮州市",
                    text: "湘桥区",
                    value: "445102"
                }, {
                    city: "潮州市",
                    text: "潮安区",
                    value: "445103"
                }, {
                    city: "潮州市",
                    text: "饶平县",
                    value: "445122"
                }],
                445200: [{
                    city: "揭阳市",
                    text: "市辖区",
                    value: "445201"
                }, {
                    city: "揭阳市",
                    text: "榕城区",
                    value: "445202"
                }, {
                    city: "揭阳市",
                    text: "揭东区",
                    value: "445203"
                }, {
                    city: "揭阳市",
                    text: "揭西县",
                    value: "445222"
                }, {
                    city: "揭阳市",
                    text: "惠来县",
                    value: "445224"
                }, {
                    city: "揭阳市",
                    text: "普宁市",
                    value: "445281"
                }],
                445300: [{
                    city: "云浮市",
                    text: "市辖区",
                    value: "445301"
                }, {
                    city: "云浮市",
                    text: "云城区",
                    value: "445302"
                }, {
                    city: "云浮市",
                    text: "云安区",
                    value: "445303"
                }, {
                    city: "云浮市",
                    text: "新兴县",
                    value: "445321"
                }, {
                    city: "云浮市",
                    text: "郁南县",
                    value: "445322"
                }, {
                    city: "云浮市",
                    text: "罗定市",
                    value: "445381"
                }],
                450100: [{
                    city: "南宁市",
                    text: "市辖区",
                    value: "450101"
                }, {
                    city: "南宁市",
                    text: "兴宁区",
                    value: "450102"
                }, {
                    city: "南宁市",
                    text: "青秀区",
                    value: "450103"
                }, {
                    city: "南宁市",
                    text: "江南区",
                    value: "450105"
                }, {
                    city: "南宁市",
                    text: "西乡塘区",
                    value: "450107"
                }, {
                    city: "南宁市",
                    text: "良庆区",
                    value: "450108"
                }, {
                    city: "南宁市",
                    text: "邕宁区",
                    value: "450109"
                }, {
                    city: "南宁市",
                    text: "武鸣区",
                    value: "450110"
                }, {
                    city: "南宁市",
                    text: "隆安县",
                    value: "450123"
                }, {
                    city: "南宁市",
                    text: "马山县",
                    value: "450124"
                }, {
                    city: "南宁市",
                    text: "上林县",
                    value: "450125"
                }, {
                    city: "南宁市",
                    text: "宾阳县",
                    value: "450126"
                }, {
                    city: "南宁市",
                    text: "横县",
                    value: "450127"
                }],
                450200: [{
                    city: "柳州市",
                    text: "市辖区",
                    value: "450201"
                }, {
                    city: "柳州市",
                    text: "城中区",
                    value: "450202"
                }, {
                    city: "柳州市",
                    text: "鱼峰区",
                    value: "450203"
                }, {
                    city: "柳州市",
                    text: "柳南区",
                    value: "450204"
                }, {
                    city: "柳州市",
                    text: "柳北区",
                    value: "450205"
                }, {
                    city: "柳州市",
                    text: "柳江区",
                    value: "450206"
                }, {
                    city: "柳州市",
                    text: "柳城县",
                    value: "450222"
                }, {
                    city: "柳州市",
                    text: "鹿寨县",
                    value: "450223"
                }, {
                    city: "柳州市",
                    text: "融安县",
                    value: "450224"
                }, {
                    city: "柳州市",
                    text: "融水苗族自治县",
                    value: "450225"
                }, {
                    city: "柳州市",
                    text: "三江侗族自治县",
                    value: "450226"
                }],
                450300: [{
                    city: "桂林市",
                    text: "市辖区",
                    value: "450301"
                }, {
                    city: "桂林市",
                    text: "秀峰区",
                    value: "450302"
                }, {
                    city: "桂林市",
                    text: "叠彩区",
                    value: "450303"
                }, {
                    city: "桂林市",
                    text: "象山区",
                    value: "450304"
                }, {
                    city: "桂林市",
                    text: "七星区",
                    value: "450305"
                }, {
                    city: "桂林市",
                    text: "雁山区",
                    value: "450311"
                }, {
                    city: "桂林市",
                    text: "临桂区",
                    value: "450312"
                }, {
                    city: "桂林市",
                    text: "阳朔县",
                    value: "450321"
                }, {
                    city: "桂林市",
                    text: "灵川县",
                    value: "450323"
                }, {
                    city: "桂林市",
                    text: "全州县",
                    value: "450324"
                }, {
                    city: "桂林市",
                    text: "兴安县",
                    value: "450325"
                }, {
                    city: "桂林市",
                    text: "永福县",
                    value: "450326"
                }, {
                    city: "桂林市",
                    text: "灌阳县",
                    value: "450327"
                }, {
                    city: "桂林市",
                    text: "龙胜各族自治县",
                    value: "450328"
                }, {
                    city: "桂林市",
                    text: "资源县",
                    value: "450329"
                }, {
                    city: "桂林市",
                    text: "平乐县",
                    value: "450330"
                }, {
                    city: "桂林市",
                    text: "荔浦县",
                    value: "450331"
                }, {
                    city: "桂林市",
                    text: "恭城瑶族自治县",
                    value: "450332"
                }],
                450400: [{
                    city: "梧州市",
                    text: "市辖区",
                    value: "450401"
                }, {
                    city: "梧州市",
                    text: "万秀区",
                    value: "450403"
                }, {
                    city: "梧州市",
                    text: "长洲区",
                    value: "450405"
                }, {
                    city: "梧州市",
                    text: "龙圩区",
                    value: "450406"
                }, {
                    city: "梧州市",
                    text: "苍梧县",
                    value: "450421"
                }, {
                    city: "梧州市",
                    text: "藤县",
                    value: "450422"
                }, {
                    city: "梧州市",
                    text: "蒙山县",
                    value: "450423"
                }, {
                    city: "梧州市",
                    text: "岑溪市",
                    value: "450481"
                }],
                450500: [{
                    city: "北海市",
                    text: "市辖区",
                    value: "450501"
                }, {
                    city: "北海市",
                    text: "海城区",
                    value: "450502"
                }, {
                    city: "北海市",
                    text: "银海区",
                    value: "450503"
                }, {
                    city: "北海市",
                    text: "铁山港区",
                    value: "450512"
                }, {
                    city: "北海市",
                    text: "合浦县",
                    value: "450521"
                }],
                450600: [{
                    city: "防城港市",
                    text: "市辖区",
                    value: "450601"
                }, {
                    city: "防城港市",
                    text: "港口区",
                    value: "450602"
                }, {
                    city: "防城港市",
                    text: "防城区",
                    value: "450603"
                }, {
                    city: "防城港市",
                    text: "上思县",
                    value: "450621"
                }, {
                    city: "防城港市",
                    text: "东兴市",
                    value: "450681"
                }],
                450700: [{
                    city: "钦州市",
                    text: "市辖区",
                    value: "450701"
                }, {
                    city: "钦州市",
                    text: "钦南区",
                    value: "450702"
                }, {
                    city: "钦州市",
                    text: "钦北区",
                    value: "450703"
                }, {
                    city: "钦州市",
                    text: "灵山县",
                    value: "450721"
                }, {
                    city: "钦州市",
                    text: "浦北县",
                    value: "450722"
                }],
                450800: [{
                    city: "贵港市",
                    text: "市辖区",
                    value: "450801"
                }, {
                    city: "贵港市",
                    text: "港北区",
                    value: "450802"
                }, {
                    city: "贵港市",
                    text: "港南区",
                    value: "450803"
                }, {
                    city: "贵港市",
                    text: "覃塘区",
                    value: "450804"
                }, {
                    city: "贵港市",
                    text: "平南县",
                    value: "450821"
                }, {
                    city: "贵港市",
                    text: "桂平市",
                    value: "450881"
                }],
                450900: [{
                    city: "玉林市",
                    text: "市辖区",
                    value: "450901"
                }, {
                    city: "玉林市",
                    text: "玉州区",
                    value: "450902"
                }, {
                    city: "玉林市",
                    text: "福绵区",
                    value: "450903"
                }, {
                    city: "玉林市",
                    text: "容县",
                    value: "450921"
                }, {
                    city: "玉林市",
                    text: "陆川县",
                    value: "450922"
                }, {
                    city: "玉林市",
                    text: "博白县",
                    value: "450923"
                }, {
                    city: "玉林市",
                    text: "兴业县",
                    value: "450924"
                }, {
                    city: "玉林市",
                    text: "北流市",
                    value: "450981"
                }],
                451e3: [{
                    city: "百色市",
                    text: "市辖区",
                    value: "451001"
                }, {
                    city: "百色市",
                    text: "右江区",
                    value: "451002"
                }, {
                    city: "百色市",
                    text: "田阳县",
                    value: "451021"
                }, {
                    city: "百色市",
                    text: "田东县",
                    value: "451022"
                }, {
                    city: "百色市",
                    text: "平果县",
                    value: "451023"
                }, {
                    city: "百色市",
                    text: "德保县",
                    value: "451024"
                }, {
                    city: "百色市",
                    text: "那坡县",
                    value: "451026"
                }, {
                    city: "百色市",
                    text: "凌云县",
                    value: "451027"
                }, {
                    city: "百色市",
                    text: "乐业县",
                    value: "451028"
                }, {
                    city: "百色市",
                    text: "田林县",
                    value: "451029"
                }, {
                    city: "百色市",
                    text: "西林县",
                    value: "451030"
                }, {
                    city: "百色市",
                    text: "隆林各族自治县",
                    value: "451031"
                }, {
                    city: "百色市",
                    text: "靖西市",
                    value: "451081"
                }],
                451100: [{
                    city: "贺州市",
                    text: "市辖区",
                    value: "451101"
                }, {
                    city: "贺州市",
                    text: "八步区",
                    value: "451102"
                }, {
                    city: "贺州市",
                    text: "平桂区",
                    value: "451103"
                }, {
                    city: "贺州市",
                    text: "昭平县",
                    value: "451121"
                }, {
                    city: "贺州市",
                    text: "钟山县",
                    value: "451122"
                }, {
                    city: "贺州市",
                    text: "富川瑶族自治县",
                    value: "451123"
                }],
                451200: [{
                    city: "河池市",
                    text: "市辖区",
                    value: "451201"
                }, {
                    city: "河池市",
                    text: "金城江区",
                    value: "451202"
                }, {
                    city: "河池市",
                    text: "南丹县",
                    value: "451221"
                }, {
                    city: "河池市",
                    text: "天峨县",
                    value: "451222"
                }, {
                    city: "河池市",
                    text: "凤山县",
                    value: "451223"
                }, {
                    city: "河池市",
                    text: "东兰县",
                    value: "451224"
                }, {
                    city: "河池市",
                    text: "罗城仫佬族自治县",
                    value: "451225"
                }, {
                    city: "河池市",
                    text: "环江毛南族自治县",
                    value: "451226"
                }, {
                    city: "河池市",
                    text: "巴马瑶族自治县",
                    value: "451227"
                }, {
                    city: "河池市",
                    text: "都安瑶族自治县",
                    value: "451228"
                }, {
                    city: "河池市",
                    text: "大化瑶族自治县",
                    value: "451229"
                }, {
                    city: "河池市",
                    text: "宜州市",
                    value: "451281"
                }],
                451300: [{
                    city: "来宾市",
                    text: "市辖区",
                    value: "451301"
                }, {
                    city: "来宾市",
                    text: "兴宾区",
                    value: "451302"
                }, {
                    city: "来宾市",
                    text: "忻城县",
                    value: "451321"
                }, {
                    city: "来宾市",
                    text: "象州县",
                    value: "451322"
                }, {
                    city: "来宾市",
                    text: "武宣县",
                    value: "451323"
                }, {
                    city: "来宾市",
                    text: "金秀瑶族自治县",
                    value: "451324"
                }, {
                    city: "来宾市",
                    text: "合山市",
                    value: "451381"
                }],
                451400: [{
                    city: "崇左市",
                    text: "市辖区",
                    value: "451401"
                }, {
                    city: "崇左市",
                    text: "江州区",
                    value: "451402"
                }, {
                    city: "崇左市",
                    text: "扶绥县",
                    value: "451421"
                }, {
                    city: "崇左市",
                    text: "宁明县",
                    value: "451422"
                }, {
                    city: "崇左市",
                    text: "龙州县",
                    value: "451423"
                }, {
                    city: "崇左市",
                    text: "大新县",
                    value: "451424"
                }, {
                    city: "崇左市",
                    text: "天等县",
                    value: "451425"
                }, {
                    city: "崇左市",
                    text: "凭祥市",
                    value: "451481"
                }],
                460100: [{
                    city: "海口市",
                    text: "市辖区",
                    value: "460101"
                }, {
                    city: "海口市",
                    text: "秀英区",
                    value: "460105"
                }, {
                    city: "海口市",
                    text: "龙华区",
                    value: "460106"
                }, {
                    city: "海口市",
                    text: "琼山区",
                    value: "460107"
                }, {
                    city: "海口市",
                    text: "美兰区",
                    value: "460108"
                }],
                460200: [{
                    city: "三亚市",
                    text: "市辖区",
                    value: "460201"
                }, {
                    city: "三亚市",
                    text: "海棠区",
                    value: "460202"
                }, {
                    city: "三亚市",
                    text: "吉阳区",
                    value: "460203"
                }, {
                    city: "三亚市",
                    text: "天涯区",
                    value: "460204"
                }, {
                    city: "三亚市",
                    text: "崖州区",
                    value: "460205"
                }],
                460300: [],
                460400: [],
                469e3: [{
                    city: "省直辖县级行政区划",
                    text: "五指山市",
                    value: "469001"
                }, {
                    city: "省直辖县级行政区划",
                    text: "琼海市",
                    value: "469002"
                }, {
                    city: "省直辖县级行政区划",
                    text: "文昌市",
                    value: "469005"
                }, {
                    city: "省直辖县级行政区划",
                    text: "万宁市",
                    value: "469006"
                }, {
                    city: "省直辖县级行政区划",
                    text: "东方市",
                    value: "469007"
                }, {
                    city: "省直辖县级行政区划",
                    text: "定安县",
                    value: "469021"
                }, {
                    city: "省直辖县级行政区划",
                    text: "屯昌县",
                    value: "469022"
                }, {
                    city: "省直辖县级行政区划",
                    text: "澄迈县",
                    value: "469023"
                }, {
                    city: "省直辖县级行政区划",
                    text: "临高县",
                    value: "469024"
                }, {
                    city: "省直辖县级行政区划",
                    text: "白沙黎族自治县",
                    value: "469025"
                }, {
                    city: "省直辖县级行政区划",
                    text: "昌江黎族自治县",
                    value: "469026"
                }, {
                    city: "省直辖县级行政区划",
                    text: "乐东黎族自治县",
                    value: "469027"
                }, {
                    city: "省直辖县级行政区划",
                    text: "陵水黎族自治县",
                    value: "469028"
                }, {
                    city: "省直辖县级行政区划",
                    text: "保亭黎族苗族自治县",
                    value: "469029"
                }, {
                    city: "省直辖县级行政区划",
                    text: "琼中黎族苗族自治县",
                    value: "469030"
                }],
                500100: [{
                    city: "市辖区",
                    text: "万州区",
                    value: "500101"
                }, {
                    city: "市辖区",
                    text: "涪陵区",
                    value: "500102"
                }, {
                    city: "市辖区",
                    text: "渝中区",
                    value: "500103"
                }, {
                    city: "市辖区",
                    text: "大渡口区",
                    value: "500104"
                }, {
                    city: "市辖区",
                    text: "江北区",
                    value: "500105"
                }, {
                    city: "市辖区",
                    text: "沙坪坝区",
                    value: "500106"
                }, {
                    city: "市辖区",
                    text: "九龙坡区",
                    value: "500107"
                }, {
                    city: "市辖区",
                    text: "南岸区",
                    value: "500108"
                }, {
                    city: "市辖区",
                    text: "北碚区",
                    value: "500109"
                }, {
                    city: "市辖区",
                    text: "綦江区",
                    value: "500110"
                }, {
                    city: "市辖区",
                    text: "大足区",
                    value: "500111"
                }, {
                    city: "市辖区",
                    text: "渝北区",
                    value: "500112"
                }, {
                    city: "市辖区",
                    text: "巴南区",
                    value: "500113"
                }, {
                    city: "市辖区",
                    text: "黔江区",
                    value: "500114"
                }, {
                    city: "市辖区",
                    text: "长寿区",
                    value: "500115"
                }, {
                    city: "市辖区",
                    text: "江津区",
                    value: "500116"
                }, {
                    city: "市辖区",
                    text: "合川区",
                    value: "500117"
                }, {
                    city: "市辖区",
                    text: "永川区",
                    value: "500118"
                }, {
                    city: "市辖区",
                    text: "南川区",
                    value: "500119"
                }, {
                    city: "市辖区",
                    text: "璧山区",
                    value: "500120"
                }, {
                    city: "市辖区",
                    text: "铜梁区",
                    value: "500151"
                }, {
                    city: "市辖区",
                    text: "潼南区",
                    value: "500152"
                }, {
                    city: "市辖区",
                    text: "荣昌区",
                    value: "500153"
                }, {
                    city: "市辖区",
                    text: "开州区",
                    value: "500154"
                }],
                500200: [{
                    city: "县",
                    text: "梁平县",
                    value: "500228"
                }, {
                    city: "县",
                    text: "城口县",
                    value: "500229"
                }, {
                    city: "县",
                    text: "丰都县",
                    value: "500230"
                }, {
                    city: "县",
                    text: "垫江县",
                    value: "500231"
                }, {
                    city: "县",
                    text: "武隆县",
                    value: "500232"
                }, {
                    city: "县",
                    text: "忠县",
                    value: "500233"
                }, {
                    city: "县",
                    text: "云阳县",
                    value: "500235"
                }, {
                    city: "县",
                    text: "奉节县",
                    value: "500236"
                }, {
                    city: "县",
                    text: "巫山县",
                    value: "500237"
                }, {
                    city: "县",
                    text: "巫溪县",
                    value: "500238"
                }, {
                    city: "县",
                    text: "石柱土家族自治县",
                    value: "500240"
                }, {
                    city: "县",
                    text: "秀山土家族苗族自治县",
                    value: "500241"
                }, {
                    city: "县",
                    text: "酉阳土家族苗族自治县",
                    value: "500242"
                }, {
                    city: "县",
                    text: "彭水苗族土家族自治县",
                    value: "500243"
                }],
                510100: [{
                    city: "成都市",
                    text: "市辖区",
                    value: "510101"
                }, {
                    city: "成都市",
                    text: "锦江区",
                    value: "510104"
                }, {
                    city: "成都市",
                    text: "青羊区",
                    value: "510105"
                }, {
                    city: "成都市",
                    text: "金牛区",
                    value: "510106"
                }, {
                    city: "成都市",
                    text: "武侯区",
                    value: "510107"
                }, {
                    city: "成都市",
                    text: "成华区",
                    value: "510108"
                }, {
                    city: "成都市",
                    text: "龙泉驿区",
                    value: "510112"
                }, {
                    city: "成都市",
                    text: "青白江区",
                    value: "510113"
                }, {
                    city: "成都市",
                    text: "新都区",
                    value: "510114"
                }, {
                    city: "成都市",
                    text: "温江区",
                    value: "510115"
                }, {
                    city: "成都市",
                    text: "双流区",
                    value: "510116"
                }, {
                    city: "成都市",
                    text: "金堂县",
                    value: "510121"
                }, {
                    city: "成都市",
                    text: "郫县",
                    value: "510124"
                }, {
                    city: "成都市",
                    text: "大邑县",
                    value: "510129"
                }, {
                    city: "成都市",
                    text: "蒲江县",
                    value: "510131"
                }, {
                    city: "成都市",
                    text: "新津县",
                    value: "510132"
                }, {
                    city: "成都市",
                    text: "都江堰市",
                    value: "510181"
                }, {
                    city: "成都市",
                    text: "彭州市",
                    value: "510182"
                }, {
                    city: "成都市",
                    text: "邛崃市",
                    value: "510183"
                }, {
                    city: "成都市",
                    text: "崇州市",
                    value: "510184"
                }, {
                    city: "成都市",
                    text: "简阳市",
                    value: "510185"
                }],
                510300: [{
                    city: "自贡市",
                    text: "市辖区",
                    value: "510301"
                }, {
                    city: "自贡市",
                    text: "自流井区",
                    value: "510302"
                }, {
                    city: "自贡市",
                    text: "贡井区",
                    value: "510303"
                }, {
                    city: "自贡市",
                    text: "大安区",
                    value: "510304"
                }, {
                    city: "自贡市",
                    text: "沿滩区",
                    value: "510311"
                }, {
                    city: "自贡市",
                    text: "荣县",
                    value: "510321"
                }, {
                    city: "自贡市",
                    text: "富顺县",
                    value: "510322"
                }],
                510400: [{
                    city: "攀枝花市",
                    text: "市辖区",
                    value: "510401"
                }, {
                    city: "攀枝花市",
                    text: "东区",
                    value: "510402"
                }, {
                    city: "攀枝花市",
                    text: "西区",
                    value: "510403"
                }, {
                    city: "攀枝花市",
                    text: "仁和区",
                    value: "510411"
                }, {
                    city: "攀枝花市",
                    text: "米易县",
                    value: "510421"
                }, {
                    city: "攀枝花市",
                    text: "盐边县",
                    value: "510422"
                }],
                510500: [{
                    city: "泸州市",
                    text: "市辖区",
                    value: "510501"
                }, {
                    city: "泸州市",
                    text: "江阳区",
                    value: "510502"
                }, {
                    city: "泸州市",
                    text: "纳溪区",
                    value: "510503"
                }, {
                    city: "泸州市",
                    text: "龙马潭区",
                    value: "510504"
                }, {
                    city: "泸州市",
                    text: "泸县",
                    value: "510521"
                }, {
                    city: "泸州市",
                    text: "合江县",
                    value: "510522"
                }, {
                    city: "泸州市",
                    text: "叙永县",
                    value: "510524"
                }, {
                    city: "泸州市",
                    text: "古蔺县",
                    value: "510525"
                }],
                510600: [{
                    city: "德阳市",
                    text: "市辖区",
                    value: "510601"
                }, {
                    city: "德阳市",
                    text: "旌阳区",
                    value: "510603"
                }, {
                    city: "德阳市",
                    text: "中江县",
                    value: "510623"
                }, {
                    city: "德阳市",
                    text: "罗江县",
                    value: "510626"
                }, {
                    city: "德阳市",
                    text: "广汉市",
                    value: "510681"
                }, {
                    city: "德阳市",
                    text: "什邡市",
                    value: "510682"
                }, {
                    city: "德阳市",
                    text: "绵竹市",
                    value: "510683"
                }],
                510700: [{
                    city: "绵阳市",
                    text: "市辖区",
                    value: "510701"
                }, {
                    city: "绵阳市",
                    text: "涪城区",
                    value: "510703"
                }, {
                    city: "绵阳市",
                    text: "游仙区",
                    value: "510704"
                }, {
                    city: "绵阳市",
                    text: "安州区",
                    value: "510705"
                }, {
                    city: "绵阳市",
                    text: "三台县",
                    value: "510722"
                }, {
                    city: "绵阳市",
                    text: "盐亭县",
                    value: "510723"
                }, {
                    city: "绵阳市",
                    text: "梓潼县",
                    value: "510725"
                }, {
                    city: "绵阳市",
                    text: "北川羌族自治县",
                    value: "510726"
                }, {
                    city: "绵阳市",
                    text: "平武县",
                    value: "510727"
                }, {
                    city: "绵阳市",
                    text: "江油市",
                    value: "510781"
                }],
                510800: [{
                    city: "广元市",
                    text: "市辖区",
                    value: "510801"
                }, {
                    city: "广元市",
                    text: "利州区",
                    value: "510802"
                }, {
                    city: "广元市",
                    text: "昭化区",
                    value: "510811"
                }, {
                    city: "广元市",
                    text: "朝天区",
                    value: "510812"
                }, {
                    city: "广元市",
                    text: "旺苍县",
                    value: "510821"
                }, {
                    city: "广元市",
                    text: "青川县",
                    value: "510822"
                }, {
                    city: "广元市",
                    text: "剑阁县",
                    value: "510823"
                }, {
                    city: "广元市",
                    text: "苍溪县",
                    value: "510824"
                }],
                510900: [{
                    city: "遂宁市",
                    text: "市辖区",
                    value: "510901"
                }, {
                    city: "遂宁市",
                    text: "船山区",
                    value: "510903"
                }, {
                    city: "遂宁市",
                    text: "安居区",
                    value: "510904"
                }, {
                    city: "遂宁市",
                    text: "蓬溪县",
                    value: "510921"
                }, {
                    city: "遂宁市",
                    text: "射洪县",
                    value: "510922"
                }, {
                    city: "遂宁市",
                    text: "大英县",
                    value: "510923"
                }],
                511e3: [{
                    city: "内江市",
                    text: "市辖区",
                    value: "511001"
                }, {
                    city: "内江市",
                    text: "市中区",
                    value: "511002"
                }, {
                    city: "内江市",
                    text: "东兴区",
                    value: "511011"
                }, {
                    city: "内江市",
                    text: "威远县",
                    value: "511024"
                }, {
                    city: "内江市",
                    text: "资中县",
                    value: "511025"
                }, {
                    city: "内江市",
                    text: "隆昌县",
                    value: "511028"
                }],
                511100: [{
                    city: "乐山市",
                    text: "市辖区",
                    value: "511101"
                }, {
                    city: "乐山市",
                    text: "市中区",
                    value: "511102"
                }, {
                    city: "乐山市",
                    text: "沙湾区",
                    value: "511111"
                }, {
                    city: "乐山市",
                    text: "五通桥区",
                    value: "511112"
                }, {
                    city: "乐山市",
                    text: "金口河区",
                    value: "511113"
                }, {
                    city: "乐山市",
                    text: "犍为县",
                    value: "511123"
                }, {
                    city: "乐山市",
                    text: "井研县",
                    value: "511124"
                }, {
                    city: "乐山市",
                    text: "夹江县",
                    value: "511126"
                }, {
                    city: "乐山市",
                    text: "沐川县",
                    value: "511129"
                }, {
                    city: "乐山市",
                    text: "峨边彝族自治县",
                    value: "511132"
                }, {
                    city: "乐山市",
                    text: "马边彝族自治县",
                    value: "511133"
                }, {
                    city: "乐山市",
                    text: "峨眉山市",
                    value: "511181"
                }],
                511300: [{
                    city: "南充市",
                    text: "市辖区",
                    value: "511301"
                }, {
                    city: "南充市",
                    text: "顺庆区",
                    value: "511302"
                }, {
                    city: "南充市",
                    text: "高坪区",
                    value: "511303"
                }, {
                    city: "南充市",
                    text: "嘉陵区",
                    value: "511304"
                }, {
                    city: "南充市",
                    text: "南部县",
                    value: "511321"
                }, {
                    city: "南充市",
                    text: "营山县",
                    value: "511322"
                }, {
                    city: "南充市",
                    text: "蓬安县",
                    value: "511323"
                }, {
                    city: "南充市",
                    text: "仪陇县",
                    value: "511324"
                }, {
                    city: "南充市",
                    text: "西充县",
                    value: "511325"
                }, {
                    city: "南充市",
                    text: "阆中市",
                    value: "511381"
                }],
                511400: [{
                    city: "眉山市",
                    text: "市辖区",
                    value: "511401"
                }, {
                    city: "眉山市",
                    text: "东坡区",
                    value: "511402"
                }, {
                    city: "眉山市",
                    text: "彭山区",
                    value: "511403"
                }, {
                    city: "眉山市",
                    text: "仁寿县",
                    value: "511421"
                }, {
                    city: "眉山市",
                    text: "洪雅县",
                    value: "511423"
                }, {
                    city: "眉山市",
                    text: "丹棱县",
                    value: "511424"
                }, {
                    city: "眉山市",
                    text: "青神县",
                    value: "511425"
                }],
                511500: [{
                    city: "宜宾市",
                    text: "市辖区",
                    value: "511501"
                }, {
                    city: "宜宾市",
                    text: "翠屏区",
                    value: "511502"
                }, {
                    city: "宜宾市",
                    text: "南溪区",
                    value: "511503"
                }, {
                    city: "宜宾市",
                    text: "宜宾县",
                    value: "511521"
                }, {
                    city: "宜宾市",
                    text: "江安县",
                    value: "511523"
                }, {
                    city: "宜宾市",
                    text: "长宁县",
                    value: "511524"
                }, {
                    city: "宜宾市",
                    text: "高县",
                    value: "511525"
                }, {
                    city: "宜宾市",
                    text: "珙县",
                    value: "511526"
                }, {
                    city: "宜宾市",
                    text: "筠连县",
                    value: "511527"
                }, {
                    city: "宜宾市",
                    text: "兴文县",
                    value: "511528"
                }, {
                    city: "宜宾市",
                    text: "屏山县",
                    value: "511529"
                }],
                511600: [{
                    city: "广安市",
                    text: "市辖区",
                    value: "511601"
                }, {
                    city: "广安市",
                    text: "广安区",
                    value: "511602"
                }, {
                    city: "广安市",
                    text: "前锋区",
                    value: "511603"
                }, {
                    city: "广安市",
                    text: "岳池县",
                    value: "511621"
                }, {
                    city: "广安市",
                    text: "武胜县",
                    value: "511622"
                }, {
                    city: "广安市",
                    text: "邻水县",
                    value: "511623"
                }, {
                    city: "广安市",
                    text: "华蓥市",
                    value: "511681"
                }],
                511700: [{
                    city: "达州市",
                    text: "市辖区",
                    value: "511701"
                }, {
                    city: "达州市",
                    text: "通川区",
                    value: "511702"
                }, {
                    city: "达州市",
                    text: "达川区",
                    value: "511703"
                }, {
                    city: "达州市",
                    text: "宣汉县",
                    value: "511722"
                }, {
                    city: "达州市",
                    text: "开江县",
                    value: "511723"
                }, {
                    city: "达州市",
                    text: "大竹县",
                    value: "511724"
                }, {
                    city: "达州市",
                    text: "渠县",
                    value: "511725"
                }, {
                    city: "达州市",
                    text: "万源市",
                    value: "511781"
                }],
                511800: [{
                    city: "雅安市",
                    text: "市辖区",
                    value: "511801"
                }, {
                    city: "雅安市",
                    text: "雨城区",
                    value: "511802"
                }, {
                    city: "雅安市",
                    text: "名山区",
                    value: "511803"
                }, {
                    city: "雅安市",
                    text: "荥经县",
                    value: "511822"
                }, {
                    city: "雅安市",
                    text: "汉源县",
                    value: "511823"
                }, {
                    city: "雅安市",
                    text: "石棉县",
                    value: "511824"
                }, {
                    city: "雅安市",
                    text: "天全县",
                    value: "511825"
                }, {
                    city: "雅安市",
                    text: "芦山县",
                    value: "511826"
                }, {
                    city: "雅安市",
                    text: "宝兴县",
                    value: "511827"
                }],
                511900: [{
                    city: "巴中市",
                    text: "市辖区",
                    value: "511901"
                }, {
                    city: "巴中市",
                    text: "巴州区",
                    value: "511902"
                }, {
                    city: "巴中市",
                    text: "恩阳区",
                    value: "511903"
                }, {
                    city: "巴中市",
                    text: "通江县",
                    value: "511921"
                }, {
                    city: "巴中市",
                    text: "南江县",
                    value: "511922"
                }, {
                    city: "巴中市",
                    text: "平昌县",
                    value: "511923"
                }],
                512e3: [{
                    city: "资阳市",
                    text: "市辖区",
                    value: "512001"
                }, {
                    city: "资阳市",
                    text: "雁江区",
                    value: "512002"
                }, {
                    city: "资阳市",
                    text: "安岳县",
                    value: "512021"
                }, {
                    city: "资阳市",
                    text: "乐至县",
                    value: "512022"
                }],
                513200: [{
                    city: "阿坝藏族羌族自治州",
                    text: "马尔康市",
                    value: "513201"
                }, {
                    city: "阿坝藏族羌族自治州",
                    text: "汶川县",
                    value: "513221"
                }, {
                    city: "阿坝藏族羌族自治州",
                    text: "理县",
                    value: "513222"
                }, {
                    city: "阿坝藏族羌族自治州",
                    text: "茂县",
                    value: "513223"
                }, {
                    city: "阿坝藏族羌族自治州",
                    text: "松潘县",
                    value: "513224"
                }, {
                    city: "阿坝藏族羌族自治州",
                    text: "九寨沟县",
                    value: "513225"
                }, {
                    city: "阿坝藏族羌族自治州",
                    text: "金川县",
                    value: "513226"
                }, {
                    city: "阿坝藏族羌族自治州",
                    text: "小金县",
                    value: "513227"
                }, {
                    city: "阿坝藏族羌族自治州",
                    text: "黑水县",
                    value: "513228"
                }, {
                    city: "阿坝藏族羌族自治州",
                    text: "壤塘县",
                    value: "513230"
                }, {
                    city: "阿坝藏族羌族自治州",
                    text: "阿坝县",
                    value: "513231"
                }, {
                    city: "阿坝藏族羌族自治州",
                    text: "若尔盖县",
                    value: "513232"
                }, {
                    city: "阿坝藏族羌族自治州",
                    text: "红原县",
                    value: "513233"
                }],
                513300: [{
                    city: "甘孜藏族自治州",
                    text: "康定市",
                    value: "513301"
                }, {
                    city: "甘孜藏族自治州",
                    text: "泸定县",
                    value: "513322"
                }, {
                    city: "甘孜藏族自治州",
                    text: "丹巴县",
                    value: "513323"
                }, {
                    city: "甘孜藏族自治州",
                    text: "九龙县",
                    value: "513324"
                }, {
                    city: "甘孜藏族自治州",
                    text: "雅江县",
                    value: "513325"
                }, {
                    city: "甘孜藏族自治州",
                    text: "道孚县",
                    value: "513326"
                }, {
                    city: "甘孜藏族自治州",
                    text: "炉霍县",
                    value: "513327"
                }, {
                    city: "甘孜藏族自治州",
                    text: "甘孜县",
                    value: "513328"
                }, {
                    city: "甘孜藏族自治州",
                    text: "新龙县",
                    value: "513329"
                }, {
                    city: "甘孜藏族自治州",
                    text: "德格县",
                    value: "513330"
                }, {
                    city: "甘孜藏族自治州",
                    text: "白玉县",
                    value: "513331"
                }, {
                    city: "甘孜藏族自治州",
                    text: "石渠县",
                    value: "513332"
                }, {
                    city: "甘孜藏族自治州",
                    text: "色达县",
                    value: "513333"
                }, {
                    city: "甘孜藏族自治州",
                    text: "理塘县",
                    value: "513334"
                }, {
                    city: "甘孜藏族自治州",
                    text: "巴塘县",
                    value: "513335"
                }, {
                    city: "甘孜藏族自治州",
                    text: "乡城县",
                    value: "513336"
                }, {
                    city: "甘孜藏族自治州",
                    text: "稻城县",
                    value: "513337"
                }, {
                    city: "甘孜藏族自治州",
                    text: "得荣县",
                    value: "513338"
                }],
                513400: [{
                    city: "凉山彝族自治州",
                    text: "西昌市",
                    value: "513401"
                }, {
                    city: "凉山彝族自治州",
                    text: "木里藏族自治县",
                    value: "513422"
                }, {
                    city: "凉山彝族自治州",
                    text: "盐源县",
                    value: "513423"
                }, {
                    city: "凉山彝族自治州",
                    text: "德昌县",
                    value: "513424"
                }, {
                    city: "凉山彝族自治州",
                    text: "会理县",
                    value: "513425"
                }, {
                    city: "凉山彝族自治州",
                    text: "会东县",
                    value: "513426"
                }, {
                    city: "凉山彝族自治州",
                    text: "宁南县",
                    value: "513427"
                }, {
                    city: "凉山彝族自治州",
                    text: "普格县",
                    value: "513428"
                }, {
                    city: "凉山彝族自治州",
                    text: "布拖县",
                    value: "513429"
                }, {
                    city: "凉山彝族自治州",
                    text: "金阳县",
                    value: "513430"
                }, {
                    city: "凉山彝族自治州",
                    text: "昭觉县",
                    value: "513431"
                }, {
                    city: "凉山彝族自治州",
                    text: "喜德县",
                    value: "513432"
                }, {
                    city: "凉山彝族自治州",
                    text: "冕宁县",
                    value: "513433"
                }, {
                    city: "凉山彝族自治州",
                    text: "越西县",
                    value: "513434"
                }, {
                    city: "凉山彝族自治州",
                    text: "甘洛县",
                    value: "513435"
                }, {
                    city: "凉山彝族自治州",
                    text: "美姑县",
                    value: "513436"
                }, {
                    city: "凉山彝族自治州",
                    text: "雷波县",
                    value: "513437"
                }],
                520100: [{
                    city: "贵阳市",
                    text: "市辖区",
                    value: "520101"
                }, {
                    city: "贵阳市",
                    text: "南明区",
                    value: "520102"
                }, {
                    city: "贵阳市",
                    text: "云岩区",
                    value: "520103"
                }, {
                    city: "贵阳市",
                    text: "花溪区",
                    value: "520111"
                }, {
                    city: "贵阳市",
                    text: "乌当区",
                    value: "520112"
                }, {
                    city: "贵阳市",
                    text: "白云区",
                    value: "520113"
                }, {
                    city: "贵阳市",
                    text: "观山湖区",
                    value: "520115"
                }, {
                    city: "贵阳市",
                    text: "开阳县",
                    value: "520121"
                }, {
                    city: "贵阳市",
                    text: "息烽县",
                    value: "520122"
                }, {
                    city: "贵阳市",
                    text: "修文县",
                    value: "520123"
                }, {
                    city: "贵阳市",
                    text: "清镇市",
                    value: "520181"
                }],
                520200: [{
                    city: "六盘水市",
                    text: "钟山区",
                    value: "520201"
                }, {
                    city: "六盘水市",
                    text: "六枝特区",
                    value: "520203"
                }, {
                    city: "六盘水市",
                    text: "水城县",
                    value: "520221"
                }, {
                    city: "六盘水市",
                    text: "盘县",
                    value: "520222"
                }],
                520300: [{
                    city: "遵义市",
                    text: "市辖区",
                    value: "520301"
                }, {
                    city: "遵义市",
                    text: "红花岗区",
                    value: "520302"
                }, {
                    city: "遵义市",
                    text: "汇川区",
                    value: "520303"
                }, {
                    city: "遵义市",
                    text: "播州区",
                    value: "520304"
                }, {
                    city: "遵义市",
                    text: "桐梓县",
                    value: "520322"
                }, {
                    city: "遵义市",
                    text: "绥阳县",
                    value: "520323"
                }, {
                    city: "遵义市",
                    text: "正安县",
                    value: "520324"
                }, {
                    city: "遵义市",
                    text: "道真仡佬族苗族自治县",
                    value: "520325"
                }, {
                    city: "遵义市",
                    text: "务川仡佬族苗族自治县",
                    value: "520326"
                }, {
                    city: "遵义市",
                    text: "凤冈县",
                    value: "520327"
                }, {
                    city: "遵义市",
                    text: "湄潭县",
                    value: "520328"
                }, {
                    city: "遵义市",
                    text: "余庆县",
                    value: "520329"
                }, {
                    city: "遵义市",
                    text: "习水县",
                    value: "520330"
                }, {
                    city: "遵义市",
                    text: "赤水市",
                    value: "520381"
                }, {
                    city: "遵义市",
                    text: "仁怀市",
                    value: "520382"
                }],
                520400: [{
                    city: "安顺市",
                    text: "市辖区",
                    value: "520401"
                }, {
                    city: "安顺市",
                    text: "西秀区",
                    value: "520402"
                }, {
                    city: "安顺市",
                    text: "平坝区",
                    value: "520403"
                }, {
                    city: "安顺市",
                    text: "普定县",
                    value: "520422"
                }, {
                    city: "安顺市",
                    text: "镇宁布依族苗族自治县",
                    value: "520423"
                }, {
                    city: "安顺市",
                    text: "关岭布依族苗族自治县",
                    value: "520424"
                }, {
                    city: "安顺市",
                    text: "紫云苗族布依族自治县",
                    value: "520425"
                }],
                520500: [{
                    city: "毕节市",
                    text: "市辖区",
                    value: "520501"
                }, {
                    city: "毕节市",
                    text: "七星关区",
                    value: "520502"
                }, {
                    city: "毕节市",
                    text: "大方县",
                    value: "520521"
                }, {
                    city: "毕节市",
                    text: "黔西县",
                    value: "520522"
                }, {
                    city: "毕节市",
                    text: "金沙县",
                    value: "520523"
                }, {
                    city: "毕节市",
                    text: "织金县",
                    value: "520524"
                }, {
                    city: "毕节市",
                    text: "纳雍县",
                    value: "520525"
                }, {
                    city: "毕节市",
                    text: "威宁彝族回族苗族自治县",
                    value: "520526"
                }, {
                    city: "毕节市",
                    text: "赫章县",
                    value: "520527"
                }],
                520600: [{
                    city: "铜仁市",
                    text: "市辖区",
                    value: "520601"
                }, {
                    city: "铜仁市",
                    text: "碧江区",
                    value: "520602"
                }, {
                    city: "铜仁市",
                    text: "万山区",
                    value: "520603"
                }, {
                    city: "铜仁市",
                    text: "江口县",
                    value: "520621"
                }, {
                    city: "铜仁市",
                    text: "玉屏侗族自治县",
                    value: "520622"
                }, {
                    city: "铜仁市",
                    text: "石阡县",
                    value: "520623"
                }, {
                    city: "铜仁市",
                    text: "思南县",
                    value: "520624"
                }, {
                    city: "铜仁市",
                    text: "印江土家族苗族自治县",
                    value: "520625"
                }, {
                    city: "铜仁市",
                    text: "德江县",
                    value: "520626"
                }, {
                    city: "铜仁市",
                    text: "沿河土家族自治县",
                    value: "520627"
                }, {
                    city: "铜仁市",
                    text: "松桃苗族自治县",
                    value: "520628"
                }],
                522300: [{
                    city: "黔西南布依族苗族自治州",
                    text: "兴义市",
                    value: "522301"
                }, {
                    city: "黔西南布依族苗族自治州",
                    text: "兴仁县",
                    value: "522322"
                }, {
                    city: "黔西南布依族苗族自治州",
                    text: "普安县",
                    value: "522323"
                }, {
                    city: "黔西南布依族苗族自治州",
                    text: "晴隆县",
                    value: "522324"
                }, {
                    city: "黔西南布依族苗族自治州",
                    text: "贞丰县",
                    value: "522325"
                }, {
                    city: "黔西南布依族苗族自治州",
                    text: "望谟县",
                    value: "522326"
                }, {
                    city: "黔西南布依族苗族自治州",
                    text: "册亨县",
                    value: "522327"
                }, {
                    city: "黔西南布依族苗族自治州",
                    text: "安龙县",
                    value: "522328"
                }],
                522600: [{
                    city: "黔东南苗族侗族自治州",
                    text: "凯里市",
                    value: "522601"
                }, {
                    city: "黔东南苗族侗族自治州",
                    text: "黄平县",
                    value: "522622"
                }, {
                    city: "黔东南苗族侗族自治州",
                    text: "施秉县",
                    value: "522623"
                }, {
                    city: "黔东南苗族侗族自治州",
                    text: "三穗县",
                    value: "522624"
                }, {
                    city: "黔东南苗族侗族自治州",
                    text: "镇远县",
                    value: "522625"
                }, {
                    city: "黔东南苗族侗族自治州",
                    text: "岑巩县",
                    value: "522626"
                }, {
                    city: "黔东南苗族侗族自治州",
                    text: "天柱县",
                    value: "522627"
                }, {
                    city: "黔东南苗族侗族自治州",
                    text: "锦屏县",
                    value: "522628"
                }, {
                    city: "黔东南苗族侗族自治州",
                    text: "剑河县",
                    value: "522629"
                }, {
                    city: "黔东南苗族侗族自治州",
                    text: "台江县",
                    value: "522630"
                }, {
                    city: "黔东南苗族侗族自治州",
                    text: "黎平县",
                    value: "522631"
                }, {
                    city: "黔东南苗族侗族自治州",
                    text: "榕江县",
                    value: "522632"
                }, {
                    city: "黔东南苗族侗族自治州",
                    text: "从江县",
                    value: "522633"
                }, {
                    city: "黔东南苗族侗族自治州",
                    text: "雷山县",
                    value: "522634"
                }, {
                    city: "黔东南苗族侗族自治州",
                    text: "麻江县",
                    value: "522635"
                }, {
                    city: "黔东南苗族侗族自治州",
                    text: "丹寨县",
                    value: "522636"
                }],
                522700: [{
                    city: "黔南布依族苗族自治州",
                    text: "都匀市",
                    value: "522701"
                }, {
                    city: "黔南布依族苗族自治州",
                    text: "福泉市",
                    value: "522702"
                }, {
                    city: "黔南布依族苗族自治州",
                    text: "荔波县",
                    value: "522722"
                }, {
                    city: "黔南布依族苗族自治州",
                    text: "贵定县",
                    value: "522723"
                }, {
                    city: "黔南布依族苗族自治州",
                    text: "瓮安县",
                    value: "522725"
                }, {
                    city: "黔南布依族苗族自治州",
                    text: "独山县",
                    value: "522726"
                }, {
                    city: "黔南布依族苗族自治州",
                    text: "平塘县",
                    value: "522727"
                }, {
                    city: "黔南布依族苗族自治州",
                    text: "罗甸县",
                    value: "522728"
                }, {
                    city: "黔南布依族苗族自治州",
                    text: "长顺县",
                    value: "522729"
                }, {
                    city: "黔南布依族苗族自治州",
                    text: "龙里县",
                    value: "522730"
                }, {
                    city: "黔南布依族苗族自治州",
                    text: "惠水县",
                    value: "522731"
                }, {
                    city: "黔南布依族苗族自治州",
                    text: "三都水族自治县",
                    value: "522732"
                }],
                530100: [{
                    city: "昆明市",
                    text: "市辖区",
                    value: "530101"
                }, {
                    city: "昆明市",
                    text: "五华区",
                    value: "530102"
                }, {
                    city: "昆明市",
                    text: "盘龙区",
                    value: "530103"
                }, {
                    city: "昆明市",
                    text: "官渡区",
                    value: "530111"
                }, {
                    city: "昆明市",
                    text: "西山区",
                    value: "530112"
                }, {
                    city: "昆明市",
                    text: "东川区",
                    value: "530113"
                }, {
                    city: "昆明市",
                    text: "呈贡区",
                    value: "530114"
                }, {
                    city: "昆明市",
                    text: "晋宁县",
                    value: "530122"
                }, {
                    city: "昆明市",
                    text: "富民县",
                    value: "530124"
                }, {
                    city: "昆明市",
                    text: "宜良县",
                    value: "530125"
                }, {
                    city: "昆明市",
                    text: "石林彝族自治县",
                    value: "530126"
                }, {
                    city: "昆明市",
                    text: "嵩明县",
                    value: "530127"
                }, {
                    city: "昆明市",
                    text: "禄劝彝族苗族自治县",
                    value: "530128"
                }, {
                    city: "昆明市",
                    text: "寻甸回族彝族自治县",
                    value: "530129"
                }, {
                    city: "昆明市",
                    text: "安宁市",
                    value: "530181"
                }],
                530300: [{
                    city: "曲靖市",
                    text: "市辖区",
                    value: "530301"
                }, {
                    city: "曲靖市",
                    text: "麒麟区",
                    value: "530302"
                }, {
                    city: "曲靖市",
                    text: "沾益区",
                    value: "530303"
                }, {
                    city: "曲靖市",
                    text: "马龙县",
                    value: "530321"
                }, {
                    city: "曲靖市",
                    text: "陆良县",
                    value: "530322"
                }, {
                    city: "曲靖市",
                    text: "师宗县",
                    value: "530323"
                }, {
                    city: "曲靖市",
                    text: "罗平县",
                    value: "530324"
                }, {
                    city: "曲靖市",
                    text: "富源县",
                    value: "530325"
                }, {
                    city: "曲靖市",
                    text: "会泽县",
                    value: "530326"
                }, {
                    city: "曲靖市",
                    text: "宣威市",
                    value: "530381"
                }],
                530400: [{
                    city: "玉溪市",
                    text: "市辖区",
                    value: "530401"
                }, {
                    city: "玉溪市",
                    text: "红塔区",
                    value: "530402"
                }, {
                    city: "玉溪市",
                    text: "江川区",
                    value: "530403"
                }, {
                    city: "玉溪市",
                    text: "澄江县",
                    value: "530422"
                }, {
                    city: "玉溪市",
                    text: "通海县",
                    value: "530423"
                }, {
                    city: "玉溪市",
                    text: "华宁县",
                    value: "530424"
                }, {
                    city: "玉溪市",
                    text: "易门县",
                    value: "530425"
                }, {
                    city: "玉溪市",
                    text: "峨山彝族自治县",
                    value: "530426"
                }, {
                    city: "玉溪市",
                    text: "新平彝族傣族自治县",
                    value: "530427"
                }, {
                    city: "玉溪市",
                    text: "元江哈尼族彝族傣族自治县",
                    value: "530428"
                }],
                530500: [{
                    city: "保山市",
                    text: "市辖区",
                    value: "530501"
                }, {
                    city: "保山市",
                    text: "隆阳区",
                    value: "530502"
                }, {
                    city: "保山市",
                    text: "施甸县",
                    value: "530521"
                }, {
                    city: "保山市",
                    text: "龙陵县",
                    value: "530523"
                }, {
                    city: "保山市",
                    text: "昌宁县",
                    value: "530524"
                }, {
                    city: "保山市",
                    text: "腾冲市",
                    value: "530581"
                }],
                530600: [{
                    city: "昭通市",
                    text: "市辖区",
                    value: "530601"
                }, {
                    city: "昭通市",
                    text: "昭阳区",
                    value: "530602"
                }, {
                    city: "昭通市",
                    text: "鲁甸县",
                    value: "530621"
                }, {
                    city: "昭通市",
                    text: "巧家县",
                    value: "530622"
                }, {
                    city: "昭通市",
                    text: "盐津县",
                    value: "530623"
                }, {
                    city: "昭通市",
                    text: "大关县",
                    value: "530624"
                }, {
                    city: "昭通市",
                    text: "永善县",
                    value: "530625"
                }, {
                    city: "昭通市",
                    text: "绥江县",
                    value: "530626"
                }, {
                    city: "昭通市",
                    text: "镇雄县",
                    value: "530627"
                }, {
                    city: "昭通市",
                    text: "彝良县",
                    value: "530628"
                }, {
                    city: "昭通市",
                    text: "威信县",
                    value: "530629"
                }, {
                    city: "昭通市",
                    text: "水富县",
                    value: "530630"
                }],
                530700: [{
                    city: "丽江市",
                    text: "市辖区",
                    value: "530701"
                }, {
                    city: "丽江市",
                    text: "古城区",
                    value: "530702"
                }, {
                    city: "丽江市",
                    text: "玉龙纳西族自治县",
                    value: "530721"
                }, {
                    city: "丽江市",
                    text: "永胜县",
                    value: "530722"
                }, {
                    city: "丽江市",
                    text: "华坪县",
                    value: "530723"
                }, {
                    city: "丽江市",
                    text: "宁蒗彝族自治县",
                    value: "530724"
                }],
                530800: [{
                    city: "普洱市",
                    text: "市辖区",
                    value: "530801"
                }, {
                    city: "普洱市",
                    text: "思茅区",
                    value: "530802"
                }, {
                    city: "普洱市",
                    text: "宁洱哈尼族彝族自治县",
                    value: "530821"
                }, {
                    city: "普洱市",
                    text: "墨江哈尼族自治县",
                    value: "530822"
                }, {
                    city: "普洱市",
                    text: "景东彝族自治县",
                    value: "530823"
                }, {
                    city: "普洱市",
                    text: "景谷傣族彝族自治县",
                    value: "530824"
                }, {
                    city: "普洱市",
                    text: "镇沅彝族哈尼族拉祜族自治县",
                    value: "530825"
                }, {
                    city: "普洱市",
                    text: "江城哈尼族彝族自治县",
                    value: "530826"
                }, {
                    city: "普洱市",
                    text: "孟连傣族拉祜族佤族自治县",
                    value: "530827"
                }, {
                    city: "普洱市",
                    text: "澜沧拉祜族自治县",
                    value: "530828"
                }, {
                    city: "普洱市",
                    text: "西盟佤族自治县",
                    value: "530829"
                }],
                530900: [{
                    city: "临沧市",
                    text: "市辖区",
                    value: "530901"
                }, {
                    city: "临沧市",
                    text: "临翔区",
                    value: "530902"
                }, {
                    city: "临沧市",
                    text: "凤庆县",
                    value: "530921"
                }, {
                    city: "临沧市",
                    text: "云县",
                    value: "530922"
                }, {
                    city: "临沧市",
                    text: "永德县",
                    value: "530923"
                }, {
                    city: "临沧市",
                    text: "镇康县",
                    value: "530924"
                }, {
                    city: "临沧市",
                    text: "双江拉祜族佤族布朗族傣族自治县",
                    value: "530925"
                }, {
                    city: "临沧市",
                    text: "耿马傣族佤族自治县",
                    value: "530926"
                }, {
                    city: "临沧市",
                    text: "沧源佤族自治县",
                    value: "530927"
                }],
                532300: [{
                    city: "楚雄彝族自治州",
                    text: "楚雄市",
                    value: "532301"
                }, {
                    city: "楚雄彝族自治州",
                    text: "双柏县",
                    value: "532322"
                }, {
                    city: "楚雄彝族自治州",
                    text: "牟定县",
                    value: "532323"
                }, {
                    city: "楚雄彝族自治州",
                    text: "南华县",
                    value: "532324"
                }, {
                    city: "楚雄彝族自治州",
                    text: "姚安县",
                    value: "532325"
                }, {
                    city: "楚雄彝族自治州",
                    text: "大姚县",
                    value: "532326"
                }, {
                    city: "楚雄彝族自治州",
                    text: "永仁县",
                    value: "532327"
                }, {
                    city: "楚雄彝族自治州",
                    text: "元谋县",
                    value: "532328"
                }, {
                    city: "楚雄彝族自治州",
                    text: "武定县",
                    value: "532329"
                }, {
                    city: "楚雄彝族自治州",
                    text: "禄丰县",
                    value: "532331"
                }],
                532500: [{
                    city: "红河哈尼族彝族自治州",
                    text: "个旧市",
                    value: "532501"
                }, {
                    city: "红河哈尼族彝族自治州",
                    text: "开远市",
                    value: "532502"
                }, {
                    city: "红河哈尼族彝族自治州",
                    text: "蒙自市",
                    value: "532503"
                }, {
                    city: "红河哈尼族彝族自治州",
                    text: "弥勒市",
                    value: "532504"
                }, {
                    city: "红河哈尼族彝族自治州",
                    text: "屏边苗族自治县",
                    value: "532523"
                }, {
                    city: "红河哈尼族彝族自治州",
                    text: "建水县",
                    value: "532524"
                }, {
                    city: "红河哈尼族彝族自治州",
                    text: "石屏县",
                    value: "532525"
                }, {
                    city: "红河哈尼族彝族自治州",
                    text: "泸西县",
                    value: "532527"
                }, {
                    city: "红河哈尼族彝族自治州",
                    text: "元阳县",
                    value: "532528"
                }, {
                    city: "红河哈尼族彝族自治州",
                    text: "红河县",
                    value: "532529"
                }, {
                    city: "红河哈尼族彝族自治州",
                    text: "金平苗族瑶族傣族自治县",
                    value: "532530"
                }, {
                    city: "红河哈尼族彝族自治州",
                    text: "绿春县",
                    value: "532531"
                }, {
                    city: "红河哈尼族彝族自治州",
                    text: "河口瑶族自治县",
                    value: "532532"
                }],
                532600: [{
                    city: "文山壮族苗族自治州",
                    text: "文山市",
                    value: "532601"
                }, {
                    city: "文山壮族苗族自治州",
                    text: "砚山县",
                    value: "532622"
                }, {
                    city: "文山壮族苗族自治州",
                    text: "西畴县",
                    value: "532623"
                }, {
                    city: "文山壮族苗族自治州",
                    text: "麻栗坡县",
                    value: "532624"
                }, {
                    city: "文山壮族苗族自治州",
                    text: "马关县",
                    value: "532625"
                }, {
                    city: "文山壮族苗族自治州",
                    text: "丘北县",
                    value: "532626"
                }, {
                    city: "文山壮族苗族自治州",
                    text: "广南县",
                    value: "532627"
                }, {
                    city: "文山壮族苗族自治州",
                    text: "富宁县",
                    value: "532628"
                }],
                532800: [{
                    city: "西双版纳傣族自治州",
                    text: "景洪市",
                    value: "532801"
                }, {
                    city: "西双版纳傣族自治州",
                    text: "勐海县",
                    value: "532822"
                }, {
                    city: "西双版纳傣族自治州",
                    text: "勐腊县",
                    value: "532823"
                }],
                532900: [{
                    city: "大理白族自治州",
                    text: "大理市",
                    value: "532901"
                }, {
                    city: "大理白族自治州",
                    text: "漾濞彝族自治县",
                    value: "532922"
                }, {
                    city: "大理白族自治州",
                    text: "祥云县",
                    value: "532923"
                }, {
                    city: "大理白族自治州",
                    text: "宾川县",
                    value: "532924"
                }, {
                    city: "大理白族自治州",
                    text: "弥渡县",
                    value: "532925"
                }, {
                    city: "大理白族自治州",
                    text: "南涧彝族自治县",
                    value: "532926"
                }, {
                    city: "大理白族自治州",
                    text: "巍山彝族回族自治县",
                    value: "532927"
                }, {
                    city: "大理白族自治州",
                    text: "永平县",
                    value: "532928"
                }, {
                    city: "大理白族自治州",
                    text: "云龙县",
                    value: "532929"
                }, {
                    city: "大理白族自治州",
                    text: "洱源县",
                    value: "532930"
                }, {
                    city: "大理白族自治州",
                    text: "剑川县",
                    value: "532931"
                }, {
                    city: "大理白族自治州",
                    text: "鹤庆县",
                    value: "532932"
                }],
                533100: [{
                    city: "德宏傣族景颇族自治州",
                    text: "瑞丽市",
                    value: "533102"
                }, {
                    city: "德宏傣族景颇族自治州",
                    text: "芒市",
                    value: "533103"
                }, {
                    city: "德宏傣族景颇族自治州",
                    text: "梁河县",
                    value: "533122"
                }, {
                    city: "德宏傣族景颇族自治州",
                    text: "盈江县",
                    value: "533123"
                }, {
                    city: "德宏傣族景颇族自治州",
                    text: "陇川县",
                    value: "533124"
                }],
                533300: [{
                    city: "怒江傈僳族自治州",
                    text: "泸水市",
                    value: "533301"
                }, {
                    city: "怒江傈僳族自治州",
                    text: "福贡县",
                    value: "533323"
                }, {
                    city: "怒江傈僳族自治州",
                    text: "贡山独龙族怒族自治县",
                    value: "533324"
                }, {
                    city: "怒江傈僳族自治州",
                    text: "兰坪白族普米族自治县",
                    value: "533325"
                }],
                533400: [{
                    city: "迪庆藏族自治州",
                    text: "香格里拉市",
                    value: "533401"
                }, {
                    city: "迪庆藏族自治州",
                    text: "德钦县",
                    value: "533422"
                }, {
                    city: "迪庆藏族自治州",
                    text: "维西傈僳族自治县",
                    value: "533423"
                }],
                540100: [{
                    city: "拉萨市",
                    text: "市辖区",
                    value: "540101"
                }, {
                    city: "拉萨市",
                    text: "城关区",
                    value: "540102"
                }, {
                    city: "拉萨市",
                    text: "堆龙德庆区",
                    value: "540103"
                }, {
                    city: "拉萨市",
                    text: "林周县",
                    value: "540121"
                }, {
                    city: "拉萨市",
                    text: "当雄县",
                    value: "540122"
                }, {
                    city: "拉萨市",
                    text: "尼木县",
                    value: "540123"
                }, {
                    city: "拉萨市",
                    text: "曲水县",
                    value: "540124"
                }, {
                    city: "拉萨市",
                    text: "达孜县",
                    value: "540126"
                }, {
                    city: "拉萨市",
                    text: "墨竹工卡县",
                    value: "540127"
                }],
                540200: [{
                    city: "日喀则市",
                    text: "桑珠孜区",
                    value: "540202"
                }, {
                    city: "日喀则市",
                    text: "南木林县",
                    value: "540221"
                }, {
                    city: "日喀则市",
                    text: "江孜县",
                    value: "540222"
                }, {
                    city: "日喀则市",
                    text: "定日县",
                    value: "540223"
                }, {
                    city: "日喀则市",
                    text: "萨迦县",
                    value: "540224"
                }, {
                    city: "日喀则市",
                    text: "拉孜县",
                    value: "540225"
                }, {
                    city: "日喀则市",
                    text: "昂仁县",
                    value: "540226"
                }, {
                    city: "日喀则市",
                    text: "谢通门县",
                    value: "540227"
                }, {
                    city: "日喀则市",
                    text: "白朗县",
                    value: "540228"
                }, {
                    city: "日喀则市",
                    text: "仁布县",
                    value: "540229"
                }, {
                    city: "日喀则市",
                    text: "康马县",
                    value: "540230"
                }, {
                    city: "日喀则市",
                    text: "定结县",
                    value: "540231"
                }, {
                    city: "日喀则市",
                    text: "仲巴县",
                    value: "540232"
                }, {
                    city: "日喀则市",
                    text: "亚东县",
                    value: "540233"
                }, {
                    city: "日喀则市",
                    text: "吉隆县",
                    value: "540234"
                }, {
                    city: "日喀则市",
                    text: "聂拉木县",
                    value: "540235"
                }, {
                    city: "日喀则市",
                    text: "萨嘎县",
                    value: "540236"
                }, {
                    city: "日喀则市",
                    text: "岗巴县",
                    value: "540237"
                }],
                540300: [{
                    city: "昌都市",
                    text: "卡若区",
                    value: "540302"
                }, {
                    city: "昌都市",
                    text: "江达县",
                    value: "540321"
                }, {
                    city: "昌都市",
                    text: "贡觉县",
                    value: "540322"
                }, {
                    city: "昌都市",
                    text: "类乌齐县",
                    value: "540323"
                }, {
                    city: "昌都市",
                    text: "丁青县",
                    value: "540324"
                }, {
                    city: "昌都市",
                    text: "察雅县",
                    value: "540325"
                }, {
                    city: "昌都市",
                    text: "八宿县",
                    value: "540326"
                }, {
                    city: "昌都市",
                    text: "左贡县",
                    value: "540327"
                }, {
                    city: "昌都市",
                    text: "芒康县",
                    value: "540328"
                }, {
                    city: "昌都市",
                    text: "洛隆县",
                    value: "540329"
                }, {
                    city: "昌都市",
                    text: "边坝县",
                    value: "540330"
                }],
                540400: [{
                    city: "林芝市",
                    text: "巴宜区",
                    value: "540402"
                }, {
                    city: "林芝市",
                    text: "工布江达县",
                    value: "540421"
                }, {
                    city: "林芝市",
                    text: "米林县",
                    value: "540422"
                }, {
                    city: "林芝市",
                    text: "墨脱县",
                    value: "540423"
                }, {
                    city: "林芝市",
                    text: "波密县",
                    value: "540424"
                }, {
                    city: "林芝市",
                    text: "察隅县",
                    value: "540425"
                }, {
                    city: "林芝市",
                    text: "朗县",
                    value: "540426"
                }],
                540500: [{
                    city: "山南市",
                    text: "市辖区",
                    value: "540501"
                }, {
                    city: "山南市",
                    text: "乃东区",
                    value: "540502"
                }, {
                    city: "山南市",
                    text: "扎囊县",
                    value: "540521"
                }, {
                    city: "山南市",
                    text: "贡嘎县",
                    value: "540522"
                }, {
                    city: "山南市",
                    text: "桑日县",
                    value: "540523"
                }, {
                    city: "山南市",
                    text: "琼结县",
                    value: "540524"
                }, {
                    city: "山南市",
                    text: "曲松县",
                    value: "540525"
                }, {
                    city: "山南市",
                    text: "措美县",
                    value: "540526"
                }, {
                    city: "山南市",
                    text: "洛扎县",
                    value: "540527"
                }, {
                    city: "山南市",
                    text: "加查县",
                    value: "540528"
                }, {
                    city: "山南市",
                    text: "隆子县",
                    value: "540529"
                }, {
                    city: "山南市",
                    text: "错那县",
                    value: "540530"
                }, {
                    city: "山南市",
                    text: "浪卡子县",
                    value: "540531"
                }],
                542400: [{
                    city: "那曲地区",
                    text: "那曲县",
                    value: "542421"
                }, {
                    city: "那曲地区",
                    text: "嘉黎县",
                    value: "542422"
                }, {
                    city: "那曲地区",
                    text: "比如县",
                    value: "542423"
                }, {
                    city: "那曲地区",
                    text: "聂荣县",
                    value: "542424"
                }, {
                    city: "那曲地区",
                    text: "安多县",
                    value: "542425"
                }, {
                    city: "那曲地区",
                    text: "申扎县",
                    value: "542426"
                }, {
                    city: "那曲地区",
                    text: "索县",
                    value: "542427"
                }, {
                    city: "那曲地区",
                    text: "班戈县",
                    value: "542428"
                }, {
                    city: "那曲地区",
                    text: "巴青县",
                    value: "542429"
                }, {
                    city: "那曲地区",
                    text: "尼玛县",
                    value: "542430"
                }, {
                    city: "那曲地区",
                    text: "双湖县",
                    value: "542431"
                }],
                542500: [{
                    city: "阿里地区",
                    text: "普兰县",
                    value: "542521"
                }, {
                    city: "阿里地区",
                    text: "札达县",
                    value: "542522"
                }, {
                    city: "阿里地区",
                    text: "噶尔县",
                    value: "542523"
                }, {
                    city: "阿里地区",
                    text: "日土县",
                    value: "542524"
                }, {
                    city: "阿里地区",
                    text: "革吉县",
                    value: "542525"
                }, {
                    city: "阿里地区",
                    text: "改则县",
                    value: "542526"
                }, {
                    city: "阿里地区",
                    text: "措勤县",
                    value: "542527"
                }],
                610100: [{
                    city: "西安市",
                    text: "市辖区",
                    value: "610101"
                }, {
                    city: "西安市",
                    text: "新城区",
                    value: "610102"
                }, {
                    city: "西安市",
                    text: "碑林区",
                    value: "610103"
                }, {
                    city: "西安市",
                    text: "莲湖区",
                    value: "610104"
                }, {
                    city: "西安市",
                    text: "灞桥区",
                    value: "610111"
                }, {
                    city: "西安市",
                    text: "未央区",
                    value: "610112"
                }, {
                    city: "西安市",
                    text: "雁塔区",
                    value: "610113"
                }, {
                    city: "西安市",
                    text: "阎良区",
                    value: "610114"
                }, {
                    city: "西安市",
                    text: "临潼区",
                    value: "610115"
                }, {
                    city: "西安市",
                    text: "长安区",
                    value: "610116"
                }, {
                    city: "西安市",
                    text: "高陵区",
                    value: "610117"
                }, {
                    city: "西安市",
                    text: "蓝田县",
                    value: "610122"
                }, {
                    city: "西安市",
                    text: "周至县",
                    value: "610124"
                }, {
                    city: "西安市",
                    text: "户县",
                    value: "610125"
                }],
                610200: [{
                    city: "铜川市",
                    text: "市辖区",
                    value: "610201"
                }, {
                    city: "铜川市",
                    text: "王益区",
                    value: "610202"
                }, {
                    city: "铜川市",
                    text: "印台区",
                    value: "610203"
                }, {
                    city: "铜川市",
                    text: "耀州区",
                    value: "610204"
                }, {
                    city: "铜川市",
                    text: "宜君县",
                    value: "610222"
                }],
                610300: [{
                    city: "宝鸡市",
                    text: "市辖区",
                    value: "610301"
                }, {
                    city: "宝鸡市",
                    text: "渭滨区",
                    value: "610302"
                }, {
                    city: "宝鸡市",
                    text: "金台区",
                    value: "610303"
                }, {
                    city: "宝鸡市",
                    text: "陈仓区",
                    value: "610304"
                }, {
                    city: "宝鸡市",
                    text: "凤翔县",
                    value: "610322"
                }, {
                    city: "宝鸡市",
                    text: "岐山县",
                    value: "610323"
                }, {
                    city: "宝鸡市",
                    text: "扶风县",
                    value: "610324"
                }, {
                    city: "宝鸡市",
                    text: "眉县",
                    value: "610326"
                }, {
                    city: "宝鸡市",
                    text: "陇县",
                    value: "610327"
                }, {
                    city: "宝鸡市",
                    text: "千阳县",
                    value: "610328"
                }, {
                    city: "宝鸡市",
                    text: "麟游县",
                    value: "610329"
                }, {
                    city: "宝鸡市",
                    text: "凤县",
                    value: "610330"
                }, {
                    city: "宝鸡市",
                    text: "太白县",
                    value: "610331"
                }],
                610400: [{
                    city: "咸阳市",
                    text: "市辖区",
                    value: "610401"
                }, {
                    city: "咸阳市",
                    text: "秦都区",
                    value: "610402"
                }, {
                    city: "咸阳市",
                    text: "杨陵区",
                    value: "610403"
                }, {
                    city: "咸阳市",
                    text: "渭城区",
                    value: "610404"
                }, {
                    city: "咸阳市",
                    text: "三原县",
                    value: "610422"
                }, {
                    city: "咸阳市",
                    text: "泾阳县",
                    value: "610423"
                }, {
                    city: "咸阳市",
                    text: "乾县",
                    value: "610424"
                }, {
                    city: "咸阳市",
                    text: "礼泉县",
                    value: "610425"
                }, {
                    city: "咸阳市",
                    text: "永寿县",
                    value: "610426"
                }, {
                    city: "咸阳市",
                    text: "彬县",
                    value: "610427"
                }, {
                    city: "咸阳市",
                    text: "长武县",
                    value: "610428"
                }, {
                    city: "咸阳市",
                    text: "旬邑县",
                    value: "610429"
                }, {
                    city: "咸阳市",
                    text: "淳化县",
                    value: "610430"
                }, {
                    city: "咸阳市",
                    text: "武功县",
                    value: "610431"
                }, {
                    city: "咸阳市",
                    text: "兴平市",
                    value: "610481"
                }],
                610500: [{
                    city: "渭南市",
                    text: "市辖区",
                    value: "610501"
                }, {
                    city: "渭南市",
                    text: "临渭区",
                    value: "610502"
                }, {
                    city: "渭南市",
                    text: "华州区",
                    value: "610503"
                }, {
                    city: "渭南市",
                    text: "潼关县",
                    value: "610522"
                }, {
                    city: "渭南市",
                    text: "大荔县",
                    value: "610523"
                }, {
                    city: "渭南市",
                    text: "合阳县",
                    value: "610524"
                }, {
                    city: "渭南市",
                    text: "澄城县",
                    value: "610525"
                }, {
                    city: "渭南市",
                    text: "蒲城县",
                    value: "610526"
                }, {
                    city: "渭南市",
                    text: "白水县",
                    value: "610527"
                }, {
                    city: "渭南市",
                    text: "富平县",
                    value: "610528"
                }, {
                    city: "渭南市",
                    text: "韩城市",
                    value: "610581"
                }, {
                    city: "渭南市",
                    text: "华阴市",
                    value: "610582"
                }],
                610600: [{
                    city: "延安市",
                    text: "市辖区",
                    value: "610601"
                }, {
                    city: "延安市",
                    text: "宝塔区",
                    value: "610602"
                }, {
                    city: "延安市",
                    text: "安塞区",
                    value: "610603"
                }, {
                    city: "延安市",
                    text: "延长县",
                    value: "610621"
                }, {
                    city: "延安市",
                    text: "延川县",
                    value: "610622"
                }, {
                    city: "延安市",
                    text: "子长县",
                    value: "610623"
                }, {
                    city: "延安市",
                    text: "志丹县",
                    value: "610625"
                }, {
                    city: "延安市",
                    text: "吴起县",
                    value: "610626"
                }, {
                    city: "延安市",
                    text: "甘泉县",
                    value: "610627"
                }, {
                    city: "延安市",
                    text: "富县",
                    value: "610628"
                }, {
                    city: "延安市",
                    text: "洛川县",
                    value: "610629"
                }, {
                    city: "延安市",
                    text: "宜川县",
                    value: "610630"
                }, {
                    city: "延安市",
                    text: "黄龙县",
                    value: "610631"
                }, {
                    city: "延安市",
                    text: "黄陵县",
                    value: "610632"
                }],
                610700: [{
                    city: "汉中市",
                    text: "市辖区",
                    value: "610701"
                }, {
                    city: "汉中市",
                    text: "汉台区",
                    value: "610702"
                }, {
                    city: "汉中市",
                    text: "南郑县",
                    value: "610721"
                }, {
                    city: "汉中市",
                    text: "城固县",
                    value: "610722"
                }, {
                    city: "汉中市",
                    text: "洋县",
                    value: "610723"
                }, {
                    city: "汉中市",
                    text: "西乡县",
                    value: "610724"
                }, {
                    city: "汉中市",
                    text: "勉县",
                    value: "610725"
                }, {
                    city: "汉中市",
                    text: "宁强县",
                    value: "610726"
                }, {
                    city: "汉中市",
                    text: "略阳县",
                    value: "610727"
                }, {
                    city: "汉中市",
                    text: "镇巴县",
                    value: "610728"
                }, {
                    city: "汉中市",
                    text: "留坝县",
                    value: "610729"
                }, {
                    city: "汉中市",
                    text: "佛坪县",
                    value: "610730"
                }],
                610800: [{
                    city: "榆林市",
                    text: "市辖区",
                    value: "610801"
                }, {
                    city: "榆林市",
                    text: "榆阳区",
                    value: "610802"
                }, {
                    city: "榆林市",
                    text: "横山区",
                    value: "610803"
                }, {
                    city: "榆林市",
                    text: "神木县",
                    value: "610821"
                }, {
                    city: "榆林市",
                    text: "府谷县",
                    value: "610822"
                }, {
                    city: "榆林市",
                    text: "靖边县",
                    value: "610824"
                }, {
                    city: "榆林市",
                    text: "定边县",
                    value: "610825"
                }, {
                    city: "榆林市",
                    text: "绥德县",
                    value: "610826"
                }, {
                    city: "榆林市",
                    text: "米脂县",
                    value: "610827"
                }, {
                    city: "榆林市",
                    text: "佳县",
                    value: "610828"
                }, {
                    city: "榆林市",
                    text: "吴堡县",
                    value: "610829"
                }, {
                    city: "榆林市",
                    text: "清涧县",
                    value: "610830"
                }, {
                    city: "榆林市",
                    text: "子洲县",
                    value: "610831"
                }],
                610900: [{
                    city: "安康市",
                    text: "市辖区",
                    value: "610901"
                }, {
                    city: "安康市",
                    text: "汉滨区",
                    value: "610902"
                }, {
                    city: "安康市",
                    text: "汉阴县",
                    value: "610921"
                }, {
                    city: "安康市",
                    text: "石泉县",
                    value: "610922"
                }, {
                    city: "安康市",
                    text: "宁陕县",
                    value: "610923"
                }, {
                    city: "安康市",
                    text: "紫阳县",
                    value: "610924"
                }, {
                    city: "安康市",
                    text: "岚皋县",
                    value: "610925"
                }, {
                    city: "安康市",
                    text: "平利县",
                    value: "610926"
                }, {
                    city: "安康市",
                    text: "镇坪县",
                    value: "610927"
                }, {
                    city: "安康市",
                    text: "旬阳县",
                    value: "610928"
                }, {
                    city: "安康市",
                    text: "白河县",
                    value: "610929"
                }],
                611e3: [{
                    city: "商洛市",
                    text: "市辖区",
                    value: "611001"
                }, {
                    city: "商洛市",
                    text: "商州区",
                    value: "611002"
                }, {
                    city: "商洛市",
                    text: "洛南县",
                    value: "611021"
                }, {
                    city: "商洛市",
                    text: "丹凤县",
                    value: "611022"
                }, {
                    city: "商洛市",
                    text: "商南县",
                    value: "611023"
                }, {
                    city: "商洛市",
                    text: "山阳县",
                    value: "611024"
                }, {
                    city: "商洛市",
                    text: "镇安县",
                    value: "611025"
                }, {
                    city: "商洛市",
                    text: "柞水县",
                    value: "611026"
                }],
                620100: [{
                    city: "兰州市",
                    text: "市辖区",
                    value: "620101"
                }, {
                    city: "兰州市",
                    text: "城关区",
                    value: "620102"
                }, {
                    city: "兰州市",
                    text: "七里河区",
                    value: "620103"
                }, {
                    city: "兰州市",
                    text: "西固区",
                    value: "620104"
                }, {
                    city: "兰州市",
                    text: "安宁区",
                    value: "620105"
                }, {
                    city: "兰州市",
                    text: "红古区",
                    value: "620111"
                }, {
                    city: "兰州市",
                    text: "永登县",
                    value: "620121"
                }, {
                    city: "兰州市",
                    text: "皋兰县",
                    value: "620122"
                }, {
                    city: "兰州市",
                    text: "榆中县",
                    value: "620123"
                }],
                620200: [{
                    city: "嘉峪关市",
                    text: "市辖区",
                    value: "620201"
                }],
                620300: [{
                    city: "金昌市",
                    text: "市辖区",
                    value: "620301"
                }, {
                    city: "金昌市",
                    text: "金川区",
                    value: "620302"
                }, {
                    city: "金昌市",
                    text: "永昌县",
                    value: "620321"
                }],
                620400: [{
                    city: "白银市",
                    text: "市辖区",
                    value: "620401"
                }, {
                    city: "白银市",
                    text: "白银区",
                    value: "620402"
                }, {
                    city: "白银市",
                    text: "平川区",
                    value: "620403"
                }, {
                    city: "白银市",
                    text: "靖远县",
                    value: "620421"
                }, {
                    city: "白银市",
                    text: "会宁县",
                    value: "620422"
                }, {
                    city: "白银市",
                    text: "景泰县",
                    value: "620423"
                }],
                620500: [{
                    city: "天水市",
                    text: "市辖区",
                    value: "620501"
                }, {
                    city: "天水市",
                    text: "秦州区",
                    value: "620502"
                }, {
                    city: "天水市",
                    text: "麦积区",
                    value: "620503"
                }, {
                    city: "天水市",
                    text: "清水县",
                    value: "620521"
                }, {
                    city: "天水市",
                    text: "秦安县",
                    value: "620522"
                }, {
                    city: "天水市",
                    text: "甘谷县",
                    value: "620523"
                }, {
                    city: "天水市",
                    text: "武山县",
                    value: "620524"
                }, {
                    city: "天水市",
                    text: "张家川回族自治县",
                    value: "620525"
                }],
                620600: [{
                    city: "武威市",
                    text: "市辖区",
                    value: "620601"
                }, {
                    city: "武威市",
                    text: "凉州区",
                    value: "620602"
                }, {
                    city: "武威市",
                    text: "民勤县",
                    value: "620621"
                }, {
                    city: "武威市",
                    text: "古浪县",
                    value: "620622"
                }, {
                    city: "武威市",
                    text: "天祝藏族自治县",
                    value: "620623"
                }],
                620700: [{
                    city: "张掖市",
                    text: "市辖区",
                    value: "620701"
                }, {
                    city: "张掖市",
                    text: "甘州区",
                    value: "620702"
                }, {
                    city: "张掖市",
                    text: "肃南裕固族自治县",
                    value: "620721"
                }, {
                    city: "张掖市",
                    text: "民乐县",
                    value: "620722"
                }, {
                    city: "张掖市",
                    text: "临泽县",
                    value: "620723"
                }, {
                    city: "张掖市",
                    text: "高台县",
                    value: "620724"
                }, {
                    city: "张掖市",
                    text: "山丹县",
                    value: "620725"
                }],
                620800: [{
                    city: "平凉市",
                    text: "市辖区",
                    value: "620801"
                }, {
                    city: "平凉市",
                    text: "崆峒区",
                    value: "620802"
                }, {
                    city: "平凉市",
                    text: "泾川县",
                    value: "620821"
                }, {
                    city: "平凉市",
                    text: "灵台县",
                    value: "620822"
                }, {
                    city: "平凉市",
                    text: "崇信县",
                    value: "620823"
                }, {
                    city: "平凉市",
                    text: "华亭县",
                    value: "620824"
                }, {
                    city: "平凉市",
                    text: "庄浪县",
                    value: "620825"
                }, {
                    city: "平凉市",
                    text: "静宁县",
                    value: "620826"
                }],
                620900: [{
                    city: "酒泉市",
                    text: "市辖区",
                    value: "620901"
                }, {
                    city: "酒泉市",
                    text: "肃州区",
                    value: "620902"
                }, {
                    city: "酒泉市",
                    text: "金塔县",
                    value: "620921"
                }, {
                    city: "酒泉市",
                    text: "瓜州县",
                    value: "620922"
                }, {
                    city: "酒泉市",
                    text: "肃北蒙古族自治县",
                    value: "620923"
                }, {
                    city: "酒泉市",
                    text: "阿克塞哈萨克族自治县",
                    value: "620924"
                }, {
                    city: "酒泉市",
                    text: "玉门市",
                    value: "620981"
                }, {
                    city: "酒泉市",
                    text: "敦煌市",
                    value: "620982"
                }],
                621e3: [{
                    city: "庆阳市",
                    text: "市辖区",
                    value: "621001"
                }, {
                    city: "庆阳市",
                    text: "西峰区",
                    value: "621002"
                }, {
                    city: "庆阳市",
                    text: "庆城县",
                    value: "621021"
                }, {
                    city: "庆阳市",
                    text: "环县",
                    value: "621022"
                }, {
                    city: "庆阳市",
                    text: "华池县",
                    value: "621023"
                }, {
                    city: "庆阳市",
                    text: "合水县",
                    value: "621024"
                }, {
                    city: "庆阳市",
                    text: "正宁县",
                    value: "621025"
                }, {
                    city: "庆阳市",
                    text: "宁县",
                    value: "621026"
                }, {
                    city: "庆阳市",
                    text: "镇原县",
                    value: "621027"
                }],
                621100: [{
                    city: "定西市",
                    text: "市辖区",
                    value: "621101"
                }, {
                    city: "定西市",
                    text: "安定区",
                    value: "621102"
                }, {
                    city: "定西市",
                    text: "通渭县",
                    value: "621121"
                }, {
                    city: "定西市",
                    text: "陇西县",
                    value: "621122"
                }, {
                    city: "定西市",
                    text: "渭源县",
                    value: "621123"
                }, {
                    city: "定西市",
                    text: "临洮县",
                    value: "621124"
                }, {
                    city: "定西市",
                    text: "漳县",
                    value: "621125"
                }, {
                    city: "定西市",
                    text: "岷县",
                    value: "621126"
                }],
                621200: [{
                    city: "陇南市",
                    text: "市辖区",
                    value: "621201"
                }, {
                    city: "陇南市",
                    text: "武都区",
                    value: "621202"
                }, {
                    city: "陇南市",
                    text: "成县",
                    value: "621221"
                }, {
                    city: "陇南市",
                    text: "文县",
                    value: "621222"
                }, {
                    city: "陇南市",
                    text: "宕昌县",
                    value: "621223"
                }, {
                    city: "陇南市",
                    text: "康县",
                    value: "621224"
                }, {
                    city: "陇南市",
                    text: "西和县",
                    value: "621225"
                }, {
                    city: "陇南市",
                    text: "礼县",
                    value: "621226"
                }, {
                    city: "陇南市",
                    text: "徽县",
                    value: "621227"
                }, {
                    city: "陇南市",
                    text: "两当县",
                    value: "621228"
                }],
                622900: [{
                    city: "临夏回族自治州",
                    text: "临夏市",
                    value: "622901"
                }, {
                    city: "临夏回族自治州",
                    text: "临夏县",
                    value: "622921"
                }, {
                    city: "临夏回族自治州",
                    text: "康乐县",
                    value: "622922"
                }, {
                    city: "临夏回族自治州",
                    text: "永靖县",
                    value: "622923"
                }, {
                    city: "临夏回族自治州",
                    text: "广河县",
                    value: "622924"
                }, {
                    city: "临夏回族自治州",
                    text: "和政县",
                    value: "622925"
                }, {
                    city: "临夏回族自治州",
                    text: "东乡族自治县",
                    value: "622926"
                }, {
                    city: "临夏回族自治州",
                    text: "积石山保安族东乡族撒拉族自治县",
                    value: "622927"
                }],
                623e3: [{
                    city: "甘南藏族自治州",
                    text: "合作市",
                    value: "623001"
                }, {
                    city: "甘南藏族自治州",
                    text: "临潭县",
                    value: "623021"
                }, {
                    city: "甘南藏族自治州",
                    text: "卓尼县",
                    value: "623022"
                }, {
                    city: "甘南藏族自治州",
                    text: "舟曲县",
                    value: "623023"
                }, {
                    city: "甘南藏族自治州",
                    text: "迭部县",
                    value: "623024"
                }, {
                    city: "甘南藏族自治州",
                    text: "玛曲县",
                    value: "623025"
                }, {
                    city: "甘南藏族自治州",
                    text: "碌曲县",
                    value: "623026"
                }, {
                    city: "甘南藏族自治州",
                    text: "夏河县",
                    value: "623027"
                }],
                630100: [{
                    city: "西宁市",
                    text: "市辖区",
                    value: "630101"
                }, {
                    city: "西宁市",
                    text: "城东区",
                    value: "630102"
                }, {
                    city: "西宁市",
                    text: "城中区",
                    value: "630103"
                }, {
                    city: "西宁市",
                    text: "城西区",
                    value: "630104"
                }, {
                    city: "西宁市",
                    text: "城北区",
                    value: "630105"
                }, {
                    city: "西宁市",
                    text: "大通回族土族自治县",
                    value: "630121"
                }, {
                    city: "西宁市",
                    text: "湟中县",
                    value: "630122"
                }, {
                    city: "西宁市",
                    text: "湟源县",
                    value: "630123"
                }],
                630200: [{
                    city: "海东市",
                    text: "乐都区",
                    value: "630202"
                }, {
                    city: "海东市",
                    text: "平安区",
                    value: "630203"
                }, {
                    city: "海东市",
                    text: "民和回族土族自治县",
                    value: "630222"
                }, {
                    city: "海东市",
                    text: "互助土族自治县",
                    value: "630223"
                }, {
                    city: "海东市",
                    text: "化隆回族自治县",
                    value: "630224"
                }, {
                    city: "海东市",
                    text: "循化撒拉族自治县",
                    value: "630225"
                }],
                632200: [{
                    city: "海北藏族自治州",
                    text: "门源回族自治县",
                    value: "632221"
                }, {
                    city: "海北藏族自治州",
                    text: "祁连县",
                    value: "632222"
                }, {
                    city: "海北藏族自治州",
                    text: "海晏县",
                    value: "632223"
                }, {
                    city: "海北藏族自治州",
                    text: "刚察县",
                    value: "632224"
                }],
                632300: [{
                    city: "黄南藏族自治州",
                    text: "同仁县",
                    value: "632321"
                }, {
                    city: "黄南藏族自治州",
                    text: "尖扎县",
                    value: "632322"
                }, {
                    city: "黄南藏族自治州",
                    text: "泽库县",
                    value: "632323"
                }, {
                    city: "黄南藏族自治州",
                    text: "河南蒙古族自治县",
                    value: "632324"
                }],
                632500: [{
                    city: "海南藏族自治州",
                    text: "共和县",
                    value: "632521"
                }, {
                    city: "海南藏族自治州",
                    text: "同德县",
                    value: "632522"
                }, {
                    city: "海南藏族自治州",
                    text: "贵德县",
                    value: "632523"
                }, {
                    city: "海南藏族自治州",
                    text: "兴海县",
                    value: "632524"
                }, {
                    city: "海南藏族自治州",
                    text: "贵南县",
                    value: "632525"
                }],
                632600: [{
                    city: "果洛藏族自治州",
                    text: "玛沁县",
                    value: "632621"
                }, {
                    city: "果洛藏族自治州",
                    text: "班玛县",
                    value: "632622"
                }, {
                    city: "果洛藏族自治州",
                    text: "甘德县",
                    value: "632623"
                }, {
                    city: "果洛藏族自治州",
                    text: "达日县",
                    value: "632624"
                }, {
                    city: "果洛藏族自治州",
                    text: "久治县",
                    value: "632625"
                }, {
                    city: "果洛藏族自治州",
                    text: "玛多县",
                    value: "632626"
                }],
                632700: [{
                    city: "玉树藏族自治州",
                    text: "玉树市",
                    value: "632701"
                }, {
                    city: "玉树藏族自治州",
                    text: "杂多县",
                    value: "632722"
                }, {
                    city: "玉树藏族自治州",
                    text: "称多县",
                    value: "632723"
                }, {
                    city: "玉树藏族自治州",
                    text: "治多县",
                    value: "632724"
                }, {
                    city: "玉树藏族自治州",
                    text: "囊谦县",
                    value: "632725"
                }, {
                    city: "玉树藏族自治州",
                    text: "曲麻莱县",
                    value: "632726"
                }],
                632800: [{
                    city: "海西蒙古族藏族自治州",
                    text: "格尔木市",
                    value: "632801"
                }, {
                    city: "海西蒙古族藏族自治州",
                    text: "德令哈市",
                    value: "632802"
                }, {
                    city: "海西蒙古族藏族自治州",
                    text: "乌兰县",
                    value: "632821"
                }, {
                    city: "海西蒙古族藏族自治州",
                    text: "都兰县",
                    value: "632822"
                }, {
                    city: "海西蒙古族藏族自治州",
                    text: "天峻县",
                    value: "632823"
                }],
                640100: [{
                    city: "银川市",
                    text: "市辖区",
                    value: "640101"
                }, {
                    city: "银川市",
                    text: "兴庆区",
                    value: "640104"
                }, {
                    city: "银川市",
                    text: "西夏区",
                    value: "640105"
                }, {
                    city: "银川市",
                    text: "金凤区",
                    value: "640106"
                }, {
                    city: "银川市",
                    text: "永宁县",
                    value: "640121"
                }, {
                    city: "银川市",
                    text: "贺兰县",
                    value: "640122"
                }, {
                    city: "银川市",
                    text: "灵武市",
                    value: "640181"
                }],
                640200: [{
                    city: "石嘴山市",
                    text: "市辖区",
                    value: "640201"
                }, {
                    city: "石嘴山市",
                    text: "大武口区",
                    value: "640202"
                }, {
                    city: "石嘴山市",
                    text: "惠农区",
                    value: "640205"
                }, {
                    city: "石嘴山市",
                    text: "平罗县",
                    value: "640221"
                }],
                640300: [{
                    city: "吴忠市",
                    text: "市辖区",
                    value: "640301"
                }, {
                    city: "吴忠市",
                    text: "利通区",
                    value: "640302"
                }, {
                    city: "吴忠市",
                    text: "红寺堡区",
                    value: "640303"
                }, {
                    city: "吴忠市",
                    text: "盐池县",
                    value: "640323"
                }, {
                    city: "吴忠市",
                    text: "同心县",
                    value: "640324"
                }, {
                    city: "吴忠市",
                    text: "青铜峡市",
                    value: "640381"
                }],
                640400: [{
                    city: "固原市",
                    text: "市辖区",
                    value: "640401"
                }, {
                    city: "固原市",
                    text: "原州区",
                    value: "640402"
                }, {
                    city: "固原市",
                    text: "西吉县",
                    value: "640422"
                }, {
                    city: "固原市",
                    text: "隆德县",
                    value: "640423"
                }, {
                    city: "固原市",
                    text: "泾源县",
                    value: "640424"
                }, {
                    city: "固原市",
                    text: "彭阳县",
                    value: "640425"
                }],
                640500: [{
                    city: "中卫市",
                    text: "市辖区",
                    value: "640501"
                }, {
                    city: "中卫市",
                    text: "沙坡头区",
                    value: "640502"
                }, {
                    city: "中卫市",
                    text: "中宁县",
                    value: "640521"
                }, {
                    city: "中卫市",
                    text: "海原县",
                    value: "640522"
                }],
                650100: [{
                    city: "乌鲁木齐市",
                    text: "市辖区",
                    value: "650101"
                }, {
                    city: "乌鲁木齐市",
                    text: "天山区",
                    value: "650102"
                }, {
                    city: "乌鲁木齐市",
                    text: "沙依巴克区",
                    value: "650103"
                }, {
                    city: "乌鲁木齐市",
                    text: "新市区",
                    value: "650104"
                }, {
                    city: "乌鲁木齐市",
                    text: "水磨沟区",
                    value: "650105"
                }, {
                    city: "乌鲁木齐市",
                    text: "头屯河区",
                    value: "650106"
                }, {
                    city: "乌鲁木齐市",
                    text: "达坂城区",
                    value: "650107"
                }, {
                    city: "乌鲁木齐市",
                    text: "米东区",
                    value: "650109"
                }, {
                    city: "乌鲁木齐市",
                    text: "乌鲁木齐县",
                    value: "650121"
                }],
                650200: [{
                    city: "克拉玛依市",
                    text: "市辖区",
                    value: "650201"
                }, {
                    city: "克拉玛依市",
                    text: "独山子区",
                    value: "650202"
                }, {
                    city: "克拉玛依市",
                    text: "克拉玛依区",
                    value: "650203"
                }, {
                    city: "克拉玛依市",
                    text: "白碱滩区",
                    value: "650204"
                }, {
                    city: "克拉玛依市",
                    text: "乌尔禾区",
                    value: "650205"
                }],
                650400: [{
                    city: "吐鲁番市",
                    text: "高昌区",
                    value: "650402"
                }, {
                    city: "吐鲁番市",
                    text: "鄯善县",
                    value: "650421"
                }, {
                    city: "吐鲁番市",
                    text: "托克逊县",
                    value: "650422"
                }],
                650500: [{
                    city: "哈密市",
                    text: "伊州区",
                    value: "650502"
                }, {
                    city: "哈密市",
                    text: "巴里坤哈萨克自治县",
                    value: "650521"
                }, {
                    city: "哈密市",
                    text: "伊吾县",
                    value: "650522"
                }],
                652300: [{
                    city: "昌吉回族自治州",
                    text: "昌吉市",
                    value: "652301"
                }, {
                    city: "昌吉回族自治州",
                    text: "阜康市",
                    value: "652302"
                }, {
                    city: "昌吉回族自治州",
                    text: "呼图壁县",
                    value: "652323"
                }, {
                    city: "昌吉回族自治州",
                    text: "玛纳斯县",
                    value: "652324"
                }, {
                    city: "昌吉回族自治州",
                    text: "奇台县",
                    value: "652325"
                }, {
                    city: "昌吉回族自治州",
                    text: "吉木萨尔县",
                    value: "652327"
                }, {
                    city: "昌吉回族自治州",
                    text: "木垒哈萨克自治县",
                    value: "652328"
                }],
                652700: [{
                    city: "博尔塔拉蒙古自治州",
                    text: "博乐市",
                    value: "652701"
                }, {
                    city: "博尔塔拉蒙古自治州",
                    text: "阿拉山口市",
                    value: "652702"
                }, {
                    city: "博尔塔拉蒙古自治州",
                    text: "精河县",
                    value: "652722"
                }, {
                    city: "博尔塔拉蒙古自治州",
                    text: "温泉县",
                    value: "652723"
                }],
                652800: [{
                    city: "巴音郭楞蒙古自治州",
                    text: "库尔勒市",
                    value: "652801"
                }, {
                    city: "巴音郭楞蒙古自治州",
                    text: "轮台县",
                    value: "652822"
                }, {
                    city: "巴音郭楞蒙古自治州",
                    text: "尉犁县",
                    value: "652823"
                }, {
                    city: "巴音郭楞蒙古自治州",
                    text: "若羌县",
                    value: "652824"
                }, {
                    city: "巴音郭楞蒙古自治州",
                    text: "且末县",
                    value: "652825"
                }, {
                    city: "巴音郭楞蒙古自治州",
                    text: "焉耆回族自治县",
                    value: "652826"
                }, {
                    city: "巴音郭楞蒙古自治州",
                    text: "和静县",
                    value: "652827"
                }, {
                    city: "巴音郭楞蒙古自治州",
                    text: "和硕县",
                    value: "652828"
                }, {
                    city: "巴音郭楞蒙古自治州",
                    text: "博湖县",
                    value: "652829"
                }],
                652900: [{
                    city: "阿克苏地区",
                    text: "阿克苏市",
                    value: "652901"
                }, {
                    city: "阿克苏地区",
                    text: "温宿县",
                    value: "652922"
                }, {
                    city: "阿克苏地区",
                    text: "库车县",
                    value: "652923"
                }, {
                    city: "阿克苏地区",
                    text: "沙雅县",
                    value: "652924"
                }, {
                    city: "阿克苏地区",
                    text: "新和县",
                    value: "652925"
                }, {
                    city: "阿克苏地区",
                    text: "拜城县",
                    value: "652926"
                }, {
                    city: "阿克苏地区",
                    text: "乌什县",
                    value: "652927"
                }, {
                    city: "阿克苏地区",
                    text: "阿瓦提县",
                    value: "652928"
                }, {
                    city: "阿克苏地区",
                    text: "柯坪县",
                    value: "652929"
                }],
                653e3: [{
                    city: "克孜勒苏柯尔克孜自治州",
                    text: "阿图什市",
                    value: "653001"
                }, {
                    city: "克孜勒苏柯尔克孜自治州",
                    text: "阿克陶县",
                    value: "653022"
                }, {
                    city: "克孜勒苏柯尔克孜自治州",
                    text: "阿合奇县",
                    value: "653023"
                }, {
                    city: "克孜勒苏柯尔克孜自治州",
                    text: "乌恰县",
                    value: "653024"
                }],
                653100: [{
                    city: "喀什地区",
                    text: "喀什市",
                    value: "653101"
                }, {
                    city: "喀什地区",
                    text: "疏附县",
                    value: "653121"
                }, {
                    city: "喀什地区",
                    text: "疏勒县",
                    value: "653122"
                }, {
                    city: "喀什地区",
                    text: "英吉沙县",
                    value: "653123"
                }, {
                    city: "喀什地区",
                    text: "泽普县",
                    value: "653124"
                }, {
                    city: "喀什地区",
                    text: "莎车县",
                    value: "653125"
                }, {
                    city: "喀什地区",
                    text: "叶城县",
                    value: "653126"
                }, {
                    city: "喀什地区",
                    text: "麦盖提县",
                    value: "653127"
                }, {
                    city: "喀什地区",
                    text: "岳普湖县",
                    value: "653128"
                }, {
                    city: "喀什地区",
                    text: "伽师县",
                    value: "653129"
                }, {
                    city: "喀什地区",
                    text: "巴楚县",
                    value: "653130"
                }, {
                    city: "喀什地区",
                    text: "塔什库尔干塔吉克自治县",
                    value: "653131"
                }],
                653200: [{
                    city: "和田地区",
                    text: "和田市",
                    value: "653201"
                }, {
                    city: "和田地区",
                    text: "和田县",
                    value: "653221"
                }, {
                    city: "和田地区",
                    text: "墨玉县",
                    value: "653222"
                }, {
                    city: "和田地区",
                    text: "皮山县",
                    value: "653223"
                }, {
                    city: "和田地区",
                    text: "洛浦县",
                    value: "653224"
                }, {
                    city: "和田地区",
                    text: "策勒县",
                    value: "653225"
                }, {
                    city: "和田地区",
                    text: "于田县",
                    value: "653226"
                }, {
                    city: "和田地区",
                    text: "民丰县",
                    value: "653227"
                }],
                654e3: [{
                    city: "伊犁哈萨克自治州",
                    text: "伊宁市",
                    value: "654002"
                }, {
                    city: "伊犁哈萨克自治州",
                    text: "奎屯市",
                    value: "654003"
                }, {
                    city: "伊犁哈萨克自治州",
                    text: "霍尔果斯市",
                    value: "654004"
                }, {
                    city: "伊犁哈萨克自治州",
                    text: "伊宁县",
                    value: "654021"
                }, {
                    city: "伊犁哈萨克自治州",
                    text: "察布查尔锡伯自治县",
                    value: "654022"
                }, {
                    city: "伊犁哈萨克自治州",
                    text: "霍城县",
                    value: "654023"
                }, {
                    city: "伊犁哈萨克自治州",
                    text: "巩留县",
                    value: "654024"
                }, {
                    city: "伊犁哈萨克自治州",
                    text: "新源县",
                    value: "654025"
                }, {
                    city: "伊犁哈萨克自治州",
                    text: "昭苏县",
                    value: "654026"
                }, {
                    city: "伊犁哈萨克自治州",
                    text: "特克斯县",
                    value: "654027"
                }, {
                    city: "伊犁哈萨克自治州",
                    text: "尼勒克县",
                    value: "654028"
                }],
                654200: [{
                    city: "塔城地区",
                    text: "塔城市",
                    value: "654201"
                }, {
                    city: "塔城地区",
                    text: "乌苏市",
                    value: "654202"
                }, {
                    city: "塔城地区",
                    text: "额敏县",
                    value: "654221"
                }, {
                    city: "塔城地区",
                    text: "沙湾县",
                    value: "654223"
                }, {
                    city: "塔城地区",
                    text: "托里县",
                    value: "654224"
                }, {
                    city: "塔城地区",
                    text: "裕民县",
                    value: "654225"
                }, {
                    city: "塔城地区",
                    text: "和布克赛尔蒙古自治县",
                    value: "654226"
                }],
                654300: [{
                    city: "阿勒泰地区",
                    text: "阿勒泰市",
                    value: "654301"
                }, {
                    city: "阿勒泰地区",
                    text: "布尔津县",
                    value: "654321"
                }, {
                    city: "阿勒泰地区",
                    text: "富蕴县",
                    value: "654322"
                }, {
                    city: "阿勒泰地区",
                    text: "福海县",
                    value: "654323"
                }, {
                    city: "阿勒泰地区",
                    text: "哈巴河县",
                    value: "654324"
                }, {
                    city: "阿勒泰地区",
                    text: "青河县",
                    value: "654325"
                }, {
                    city: "阿勒泰地区",
                    text: "吉木乃县",
                    value: "654326"
                }],
                659e3: [{
                    city: "自治区直辖县级行政区划",
                    text: "石河子市",
                    value: "659001"
                }, {
                    city: "自治区直辖县级行政区划",
                    text: "阿拉尔市",
                    value: "659002"
                }, {
                    city: "自治区直辖县级行政区划",
                    text: "图木舒克市",
                    value: "659003"
                }, {
                    city: "自治区直辖县级行政区划",
                    text: "五家渠市",
                    value: "659004"
                }, {
                    city: "自治区直辖县级行政区划",
                    text: "铁门关市",
                    value: "659006"
                }]
            },
            se = "input",
            pe = "dx-local-picker",
            he = re;
        he.forEach((function(t) {
            t.children = ye[t.value], t.children.forEach((function(t) {
                t.children = oe[t.value]
            }))
        }));
        var de = {
                name: pe,
                components: {
                    DxInput: q
                },
                props: {
                    value: {
                        type: String,
                        default: ""
                    },
                    placeholder: String,
                    options: {
                        type: [Object, Array],
                        default: function() {}
                    }
                },
                data: function() {
                    return {
                        datePicker: null,
                        showValue: "",
                        selectValue: this.value
                    }
                },
                methods: {
                    show: function() {
                        this.datePicker || (this.datePicker = this.$createCascadePicker({
                            title: "选择地址",
                            data: he,
                            selectedIndex: [0, 0],
                            onSelect: this.selectHandle,
                            onCancel: this.cancelHandle
                        })), this.datePicker.show()
                    },
                    hide: function() {
                        this.datePicker.hide()
                    },
                    selectHandle: function(t, e, c) {
                        this.selectValue = c, this.showText(c)
                    },
                    cancelHandle: function() {},
                    showText: function(t) {
                        this.showValue = "".concat(t[0], " ").concat(t[1], " ").concat(t[2])
                    }
                },
                watch: {
                    value: function(t) {
                        this.selectValue = t, this.showText(t)
                    },
                    selectValue: function(t) {
                        this.$emit(se, t)
                    }
                }
            },
            fe = de,
            me = Object(w["a"])(fe, ne, xe, !1, null, "7b0ce056", null),
            ze = me.exports;
        ze.install = function(t) {
            t.component(ze.name, ze)
        };
        var be = ze,
            Me = [S, j, W, rt, mt, Ot, It, Yt, ve, be];

        function Fe(t) {
            Fe.installed || (Fe.installed = !0, Me.forEach((function(e) {
                e.install(t)
            })))
        }
        var we = {
            version: "0.0.1",
            install: Fe
        };
        Me.forEach((function(t) {
            var e = K(t, {
                firstUpperCase: !0
            });
            we[e] = t
        })), "undefined" !== typeof window && window.Vue && window.Vue.use(Fe);
        var ge = we;
        a["a"].use(ge.Button), a["a"].use(ge.Form), a["a"].use(ge.Input), a["a"].use(ge.Textarea), a["a"].use(ge.Box), a["a"].use(ge.Radio), a["a"].use(ge.Checkbox), a["a"].use(ge.DatePicker), a["a"].use(ge.LocalPicker);
        c("a675");
        var _e = c("8c4f"),
            Se = {
                Default: function() {
                    return c.e("dx-service").then(c.bind(null, "ed3a"))
                },
                Tab: function() {
                    return c.e("dx-service").then(c.bind(null, "99d7"))
                },
                NotFound: function() {
                    return c.e("dx-service").then(c.bind(null, "8cdb"))
                },
                Home: function() {
                    return c.e("dx-service").then(c.bind(null, "0964"))
                },
                News: function() {
                    return c.e("dx-service").then(c.bind(null, "bc4c"))
                },
                QR: function() {
                    return c.e("dx-service").then(c.bind(null, "e722"))
                },
                Me: {
                    Index: function() {
                        return c.e("dx-service").then(c.bind(null, "058e"))
                    },
                    Feedback: function() {
                        return c.e("dx-service").then(c.bind(null, "f5c2"))
                    }
                }
            },
            Ve = {
                Score: function() {
                    return c.e("dx-dean").then(c.bind(null, "62db"))
                },
                Course: function() {
                    return c.e("dx-dean").then(c.bind(null, "0419"))
                }
            },
            Be = {
                Layout: function() {
                    return c.e("dx-ehall").then(c.bind(null, "bbf9"))
                },
                Index: function() {
                    return c.e("dx-ehall").then(c.bind(null, "617b"))
                },
                Avatar: function() {
                    return c.e("dx-ehall").then(c.bind(null, "c95d"))
                }
            },
            Ce = {
                SchoolCar: function() {
                    return c.e("dx-campus").then(c.bind(null, "dc7e"))
                },
                Cwc: function() {
                    return c.e("dx-campus").then(c.bind(null, "15b2"))
                },
                Zzzx: function() {
                    return c.e("dx-campus").then(c.bind(null, "23fd"))
                },
                Tsg: function() {
                    return c.e("dx-campus").then(c.bind(null, "7c5c"))
                }
            },
            Oe = {
                Index: function() {
                    return c.e("dx-campus").then(c.bind(null, "22ee"))
                }
            },
            Ee = {
                Layout: function() {
                    return c.e("dx-affairs").then(c.bind(null, "a5ee"))
                },
                Leave: function() {
                    return c.e("dx-affairs").then(c.bind(null, "aabb"))
                },
                LeavePost: function() {
                    return c.e("dx-affairs").then(c.bind(null, "b522"))
                },
                LeaveDetail: function() {
                    return c.e("dx-affairs").then(c.bind(null, "5869"))
                },
                ForceRead: function() {
                    return c.e("dx-affairs").then(c.bind(null, "57db"))
                },
                VaccineCreate: function() {
                    return c.e("dx-affairs").then(c.bind(null, "6e1b4"))
                }
            },
            ke = {
                Layout: function() {
                    return c.e("dx-novel").then(c.bind(null, "3400"))
                },
                Report: function() {
                    return c.e("dx-novel").then(c.bind(null, "785c"))
                },
                Fever: function() {
                    return c.e("dx-novel").then(c.bind(null, "a7c4"))
                },
                Register: function() {
                    return c.e("dx-novel").then(c.bind(null, "35a0"))
                },
                CheckIn: function() {
                    return c.e("dx-novel").then(c.bind(null, "fff5"))
                },
                Traffic: function() {
                    return c.e("dx-novel").then(c.bind(null, "03ef"))
                }
            },
            He = {
                Layout: function() {
                    return c.e("dx-stay").then(c.bind(null, "b52a"))
                },
                Report: function() {
                    return c.e("dx-stay").then(c.bind(null, "30fa"))
                },
                Me: function() {
                    return c.e("dx-stay").then(c.bind(null, "4bd6"))
                },
                Force: function() {
                    return c.e("dx-stay").then(c.bind(null, "c211"))
                },
                Apply: function() {
                    return c.e("dx-stay").then(c.bind(null, "2230"))
                },
                View: function() {
                    return c.e("dx-stay").then(c.bind(null, "2230"))
                }
            };
        a["a"].use(_e["a"]);
        var Te = [{
                path: "/",
                name: "index",
                redirect: "home",
                component: Se.Tab,
                children: [{
                    path: "home",
                    name: "home",
                    component: Se.Home
                }, {
                    path: "news",
                    name: "news",
                    component: Se.News
                }, {
                    path: "me",
                    name: "me",
                    component: Se.Me.Index
                }]
            }, {
                path: "/m",
                component: Se.Default,
                children: [{
                    path: "qr",
                    name: "qr",
                    component: Se.QR
                }, {
                    path: "score",
                    name: "score",
                    component: Ve.Score
                }, {
                    path: "course",
                    name: "course",
                    component: Ve.Course
                }, {
                    path: "school-car",
                    name: "school-car",
                    component: Ce.SchoolCar
                }, {
                    path: "form/:id/:code?/:title?",
                    name: "form",
                    component: Oe.Index
                }, {
                    path: "cwc",
                    name: "cwc",
                    component: Ce.Cwc
                }, {
                    path: "zzzx",
                    name: "zzzx",
                    component: Ce.Zzzx
                }, {
                    path: "tsg",
                    name: "tsg",
                    component: Ce.Tsg
                }, {
                    path: "job",
                    name: "job",
                    component: Se.NotFound
                }, {
                    path: "notfound",
                    name: "notfound",
                    component: Se.NotFound
                }]
            }, {
                path: "/feedback",
                name: "feedback",
                component: Se.Me.Feedback
            }, {
                path: "/ehall",
                name: "ehall",
                component: Se.Default,
                children: [{
                    path: "index",
                    name: "ehall-index",
                    component: Be.Index,
                    meta: {
                        title: "迎新系统"
                    }
                }, {
                    path: "avatar/:code",
                    name: "ehall-avatar",
                    component: Be.Avatar,
                    meta: {
                        title: "迎新系统"
                    }
                }]
            }, {
                path: "/affairs",
                name: "affairs",
                component: Se.Default,
                children: [{
                    path: "leave",
                    name: "affairs-leave",
                    component: Ee.Leave,
                    meta: {
                        title: "我的假条"
                    }
                }, {
                    path: "leave/post/:type/:id?",
                    name: "affairs-leave-post",
                    component: Ee.LeavePost,
                    meta: {
                        title: "请假条"
                    }
                }, {
                    path: "leave/read/:id",
                    name: "affairs-leave-read",
                    component: Ee.LeaveDetail,
                    meta: {
                        title: "请假条"
                    }
                }, {
                    path: "leave/force-read",
                    name: "affairs-force-read",
                    component: Ee.ForceRead,
                    meta: {
                        title: "我的假条"
                    }
                }, {
                    path: "vaccine/create",
                    name: "vaccine-create",
                    component: Ee.VaccineCreate,
                    meta: {
                        title: "疫苗接种统计"
                    }
                }]
            }, {
                path: "/novel",
                name: "novel",
                component: ke.Layout,
                children: [{
                    path: "report",
                    name: "novel-report",
                    component: ke.Report,
                    meta: {
                        role: ["user", "admin"]
                    }
                }, {
                    path: "register",
                    name: "novel-register",
                    component: ke.Register,
                    meta: {
                        role: ["user", "admin"]
                    }
                }, {
                    path: "check-in",
                    name: "novel-check-in",
                    component: ke.CheckIn,
                    meta: {
                        role: ["user", "admin"]
                    }
                }, {
                    path: "traffic",
                    name: "novel-traffic",
                    component: ke.Traffic,
                    meta: {
                        role: ["user", "admin"]
                    }
                }, {
                    path: "fever",
                    name: "novel-fever",
                    component: ke.Fever,
                    meta: {
                        role: ["user", "admin"]
                    }
                }]
            }, {
                path: "/stay",
                name: "stay",
                component: He.Layout,
                children: [{
                    path: "report",
                    name: "stay-report",
                    component: He.Report,
                    meta: {
                        role: ["user", "admin"]
                    }
                }, {
                    path: "me",
                    name: "stay-me",
                    component: He.Me,
                    meta: {
                        role: ["user", "admin"]
                    }
                }, {
                    path: "force",
                    name: "stay-force",
                    component: He.Force,
                    meta: {
                        role: ["user", "admin"]
                    }
                }, {
                    path: "apply",
                    name: "stay-apply",
                    component: He.Apply,
                    meta: {
                        role: ["user", "admin"]
                    }
                }, {
                    path: "view",
                    name: "stay-view",
                    component: He.View,
                    meta: {
                        role: ["user", "admin"]
                    }
                }]
            }],
            je = new _e["a"]({
                mode: "history",
                base: "/yzdx/",
                routes: Te
            }),
            Le = je,
            Ae = c("4360"),
            Re = c("9fb0"),
            Ie = c("6b43"),
            De = function() {
                for (var t in Re) {
                    var e = Object(Ie["a"])(t);
                    e && Ae["a"].commit(t, e)
                }
            };
        Le.beforeEach((function(t, e, c) {
            var a = Ae["a"].state.UserModel;
            a.jwtToken || (a = Object(Ie["a"])(Re["SET_USER_MODEL"]), a.jwtToken && De()), document.title = t.meta.title ? t.meta.title : "易知独秀", c()
        }));
        c("a434"), c("466d");
        var Ue = navigator.userAgent,
            Ne = Object.assign({
                versions: {
                    version: navigator.appVersion,
                    mobile: !!Ue.match(/AppleWebKit.*Mobile.*/),
                    ios: !!Ue.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                    android: Ue.includes("Android") || Ue.includes("Adr"),
                    iPhone: Ue.includes("iPhone"),
                    iPad: Ue.includes("iPad")
                },
                language: (navigator.browserLanguage || navigator.language).toLowerCase()
            }),
            $e = navigator.appVersion.includes("yiban"),
            Pe = function(t) {
                return new Promise((function(e, c) {
                    c(t)
                }))
            },
            Ze = function() {
                window.yb || (window.ybEvent = new qe, window.yibanhtml5location = function(t) {
                    window.ybEvent.fire({
                        type: "YB-location",
                        data: t,
                        del: !0
                    })
                }, window.getScanResult = function(t) {
                    window.ybEvent.fire({
                        type: "YB-scanResult",
                        data: t,
                        del: !0
                    })
                }, window.onlyid_back = function(t) {
                    window.ybEvent.fire({
                        type: "YB-mobileApi",
                        data: t,
                        del: !0
                    })
                }, window.device_back = function(t) {
                    window.ybEvent.fire({
                        type: "YB-mobileApi",
                        data: t,
                        del: !0
                    })
                })
            };

        function qe() {
            this.handlers = {}
        }

        function We(t) {
            return JSON.parse(t.replace(/'/g, '"'))
        }

        function Ge() {
            if (!$e) return Pe("请在易班客户端使用该功能");
            if (Ne.versions.android) window.local_obj.yibanhtml5location();
            else {
                if (!Ne.versions.ios) return Pe("请在易班客户端使用该功能");
                ios_yibanhtml5location()
            }
            return new Promise((function(t, e) {
                window.ybEvent.addHandler("YB-location", (function(e) {
                    var c = e.data;
                    t(We(c))
                })), setTimeout((function() {
                    e({
                        error: "获取定位超时，可能没有网络或者没有允许易班客户端的定位权限，请确认网络或开启定位权限后重试"
                    })
                }), 1e4)
            }))
        }

        function Ye(t) {
            var e = /^1\d{10}$/,
                c = /^0\d{2,3}-?\d{7,8}$/;
            if (!e.test(t) && !c.test(t)) return Pe("手机号格式错误");
            if (!$e) return Pe("请在易班客户端使用该功能");
            if (Ne.versions.android) window.local_obj.phone(t);
            else {
                if (!Ne.versions.ios) return Pe("请在易班客户端使用该功能");
                phone(t)
            }
            return Promise.resolve()
        }

        function Ke(t) {
            var e = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
            e.test(t) ? $e ? Ne.versions.android ? window.local_obj.mail(t) : Ne.versions.ios ? mail(t) : Pe("请在易班客户端使用该功能") : Pe("请在易班客户端使用该功能") : Pe("邮箱地址格式错误")
        }

        function Je() {
            if (!$e) return Pe("请在易班客户端使用该功能");
            if (Ne.versions.android) window.local_obj.encode();
            else {
                if (!Ne.versions.ios) return Pe("请在易班客户端使用该功能");
                encode()
            }
            return new Promise((function(t, e) {
                window.ybEvent.addHandler("YB-scanResult", (function(e) {
                    t(e.data)
                })), setTimeout((function() {
                    e("扫描失败")
                }), 1e4)
            }))
        }

        function Qe() {
            if (!$e) return Pe("请在易班客户端使用该功能");
            if (Ne.versions.android) window.local_obj.back();
            else {
                if (!Ne.versions.ios) return Pe("请在易班客户端使用该功能");
                back()
            }
        }

        function Xe(t) {
            Ne.versions.android ? window.local_obj.download(t) : Ne.versions.ios ? download(t) : Pe("请在易班客户端使用该功能")
        }

        function tc(t) {
            if (!$e) return Pe("请在易班客户端使用该功能");
            var e = JSON.stringify(t);
            if (Ne.versions.android) window.local_obj.js2mobile(e);
            else {
                if (!Ne.versions.ios) return Pe("请在易班客户端使用该功能");
                js2mobile(e)
            }
            return new Promise((function(t, e) {
                window.ybEvent.addHandler("YB-mobileApi", (function(e) {
                    var c = e.data;
                    t(We(c))
                })), setTimeout((function() {
                    e({
                        error: "客户端开放交互失败，请前往意见反馈联系开发人员。"
                    })
                }), 1e4)
            }))
        }

        function ec() {
            return tc({
                action: "yiban_device",
                params: {},
                callback: "device_back"
            })
        }

        function cc() {
            return tc({
                action: "uuid",
                params: {},
                callback: "onlyid_back"
            })
        }
        qe.prototype = {
            constructor: qe,
            addHandler: function(t, e) {
                "undefined" === typeof this.handlers[t] && (this.handlers[t] = []), this.handlers[t].push(e)
            },
            fire: function(t) {
                if (t.target || (t.target = this), this.handlers[t.type] instanceof Array) {
                    var e = this.handlers[t.type];
                    e.forEach((function(c, a) {
                        c(t), t.del && e.splice(a, 1)
                    }))
                }
            },
            removeHandler: function(t, e) {
                if (this.handlers[t] instanceof Array) {
                    for (var c = this.handlers[t], a = 0, l = c.length; a < l; a++)
                        if (c[a] === e) break;
                    c.splice(a, 1)
                }
            }
        }, Ze();
        var ac = {
            install: function(t, e) {
                t.prototype.$yb = {
                    browser: Ne,
                    isApp: $e,
                    location: function() {
                        return Ge()
                    },
                    scanf: function() {
                        return Je()
                    },
                    download: function(t) {
                        return Xe(t)
                    },
                    back: function() {
                        return Qe()
                    },
                    phone: function(t) {
                        return Ye(t)
                    },
                    mail: function(t) {
                        return Ke(t)
                    },
                    gethtml5location_fun: function() {
                        return Ge()
                    },
                    encode_fun: function() {
                        return Je()
                    },
                    download_fun: function(t) {
                        return Xe(t)
                    },
                    back_fun: function() {
                        return Qe()
                    },
                    phone_fun: function(t) {
                        return Ye(t)
                    },
                    mail_fun: function(t) {
                        return Ke(t)
                    },
                    uuid: function() {
                        return cc()
                    },
                    yiban_device: function() {
                        return ec()
                    },
                    device: function() {
                        return ec()
                    }
                }
            }
        };
        a["a"].use(ac);
        var lc = function() {
                var t = this,
                    e = t.$createElement,
                    c = t._self._c || e;
                return c("div", {
                    attrs: {
                        id: "app"
                    }
                }, [c("keep-alive", [c("router-view")], 1)], 1)
            },
            ic = [],
            uc = c("2daa"),
            vc = {
                data: function() {
                    return {
                        loading: null
                    }
                },
                mounted: function() {
                    var t = this;
                    return Object(C["a"])(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1) switch (e.prev = e.next) {
                                case 0:
                                    return console.log("entry app"), e.next = 3, t.$nextTick();
                                case 3:
                                    return e.prev = 3, e.next = 6, t.$store.dispatch("OauthLogin");
                                case 6:
                                    return e.next = 8, t.statistics();
                                case 8:
                                    return e.next = 10, t.loadingToast();
                                case 10:
                                    e.next = 15;
                                    break;
                                case 12:
                                    e.prev = 12, e.t0 = e["catch"](3), t.$yb.isApp, window.location.href = uc["b"];
                                case 15:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [3, 12]
                        ])
                    })))()
                },
                methods: {
                    statistics: function() {
                        return Object(C["a"])(regeneratorRuntime.mark((function t() {
                            var e, c;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        ({
                                            performanceMonitor: 1,
                                            senseQuery: 1
                                        }), e = document.createElement("script"), e.src = "//pingjs.qq.com/h5/stats.js?v2.0.4", e.setAttribute("name", "MTAH5"), e.setAttribute("sid", "500527514"), e.setAttribute("cid", "500550897"), c = document.getElementsByTagName("script")[0], c.parentNode.insertBefore(e, c);
                                    case 8:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    loadingToast: function() {
                        var t = this;
                        return Object(C["a"])(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        t.loading = t.$createToast({
                                            type: "loading",
                                            txt: "",
                                            time: 0
                                        });
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    }
                },
                computed: {
                    submit: function() {
                        return this.$store.state.FormSubmit
                    }
                },
                watch: {
                    submit: function(t, e) {
                        t ? this.loading && this.loading.show() : e && this.loading && this.loading.hide()
                    }
                }
            },
            nc = vc,
            xc = (c("7faf"), Object(w["a"])(nc, lc, ic, !1, null, null, null)),
            rc = xc.exports;
        c("5cfb"), c("2b6c"), c("5cf0");
        a["a"].config.productionTip = !1, new a["a"]({
            router: Le,
            store: Ae["a"],
            render: function(t) {
                return t(rc)
            }
        }).$mount("#app")
    },
    "5cf0": function(t, e, c) {
        c("c975"), c("4795"),
            function(t) {
                var e, c, a, l, i, u, v, n = '<svg><symbol id="icon-jiaofei" viewBox="0 0 1025 1024"><path d="M368.9 928.1c-139.4 0-252.4-113-252.4-252.4s113-252.4 252.4-252.4 252.4 113 252.4 252.4-113 252.4-252.4 252.4z" fill="#00C2FF" ></path><path d="M937 1014.3H504.8c-68.2 0-134.3-13.3-196.5-39.7-60.1-25.4-114.1-61.8-160.5-108.1C101.5 820.2 65.1 766.2 39.7 706 13.4 643.8 0 577.7 0 509.5c0-68.2 13.3-134.3 39.7-196.5 25.4-60.1 61.8-114.1 108.1-160.5 46.3-46.3 100.3-82.7 160.5-108.1C370.5 18 436.7 4.7 504.8 4.7c68.5 0 135.1 13.5 197.7 40.1C763.1 70.5 817.4 107.2 863.9 154c46.1 46.3 82.1 100.2 107.2 160 26 62.1 39 127.9 38.6 195.8-0.4 53.3-0.9 119.6-49.4 219.1l-69.8-34c40.7-83.6 41.2-137.8 41.5-185.6 0.7-113.1-43.1-219.9-123.2-300.5-81-81.5-188.9-126.4-304-126.4C269.3 82.4 77.7 274 77.7 509.5S269.3 936.7 504.9 936.7h338.5L730.5 823.9l54.9-54.9 179 179c11.1 11.1 14.4 27.8 8.4 42.3-5.9 14.6-20.1 24-35.8 24z" fill="#27282A" ></path><path d="M349.5 403.9h349.5v77.7H349.5z" fill="#27282A" ></path><path d="M524.2 501c-11.2 0-21.9-4.8-29.2-13.3L359.1 332.4l58.4-51.1 106.7 121.9 106.7-122 58.4 51.1-135.8 155.4c-7.4 8.4-18.1 13.3-29.3 13.3z" fill="#27282A" ></path><path d="M485.4 462.1h77.7v310.7h-77.7z" fill="#27282A" ></path><path d="M349.5 559.2h349.5v77.7H349.5z" fill="#27282A" ></path></symbol><symbol id="icon-yezhuxuzhi" viewBox="0 0 1024 1024"><path d="M767.829333 82.432L856.405333 170.666667H767.829333V82.432M733.696 0v204.8h204.8L733.696 0z" fill="#333333" ></path><path d="M719.701333 34.133333L904.362667 218.965333V955.733333a34.133333 34.133333 0 0 1-34.133334 34.133334H153.429333a34.133333 34.133333 0 0 1-34.133333-34.133334V68.266667a34.133333 34.133333 0 0 1 34.133333-34.133334h566.272M733.696 0H153.429333a68.266667 68.266667 0 0 0-68.266666 68.266667v887.466666a68.266667 68.266667 0 0 0 68.266666 68.266667h716.8a68.266667 68.266667 0 0 0 68.266667-68.266667V204.8L733.696 0z" fill="#333333" ></path><path d="M767.829333 290.133333H255.829333v34.133334h512v-34.133334zM699.562667 494.421333H255.829333V529.066667h443.733334v-34.645334zM631.296 699.733333H255.829333v34.133334h375.466667v-34.133334z" fill="#19A764" ></path></symbol><symbol id="icon-questionnaire" viewBox="0 0 1024 1024"><path d="M376 352h272v40h-272zM376 496h272v40h-272zM376 640h144v40h-144z" fill="#707070" ></path><path d="M780.8 704V224H244.8v600H656l124.8-120z m-112 52.8v-57.6h59.2l-59.2 57.6z m-384-492.8h456v396.8h-112V784H284.8V264z" fill="#707070" ></path></symbol><symbol id="icon-wenjuan" viewBox="0 0 1024 1024"><path d="M689.6 728l-409.6 97.6a129.6 129.6 0 0 1-155.2-94.4L35.2 350.4c-16-68.8 27.2-137.6 94.4-153.6l409.6-97.6c68.8-16 137.6 25.6 155.2 94.4l91.2 379.2c16 68.8-27.2 137.6-96 155.2z" fill="#E1E1DF" ></path><path d="M772.8 992H259.2c-70.4 0-128-57.6-128-128V256c0-70.4 57.6-128 128-128h513.6c70.4 0 128 57.6 128 128v608c0 70.4-57.6 128-128 128z" fill="#4E8DF6" ></path><path d="M976 555.2l-35.2-22.4c-14.4-9.6-35.2-4.8-43.2 9.6l-22.4 35.2c-3.2 4.8-1.6 11.2 3.2 14.4l72 43.2c4.8 3.2 11.2 1.6 14.4-3.2l22.4-35.2c9.6-12.8 4.8-33.6-11.2-41.6zM713.6 851.2l70.4 43.2c4.8 3.2 11.2 1.6 16-3.2l142.4-220.8c3.2-4.8 1.6-11.2-3.2-16l-70.4-43.2c-4.8-3.2-11.2-1.6-16 3.2l-142.4 222.4c-4.8 4.8-3.2 11.2 3.2 14.4zM694.4 976l72-48c6.4-4.8 6.4-14.4 0-19.2L704 872c-6.4-3.2-16 0-17.6 8l-11.2 86.4c1.6 8 11.2 16 19.2 9.6z" fill="#E1E1DF" ></path><path d="M676.8 192H355.2c-25.6 0-48-22.4-48-48V80c0-27.2 22.4-48 48-48h321.6c27.2 0 48 20.8 48 48v64c0 25.6-22.4 48-48 48z" fill="#2166CC" ></path><path d="M737.6 427.2H534.4c-14.4 0-27.2-11.2-27.2-27.2v-11.2c0-14.4 11.2-27.2 27.2-27.2h203.2c14.4 0 27.2 12.8 27.2 27.2v11.2c0 14.4-12.8 27.2-27.2 27.2zM769.6 608H534.4c-14.4 0-27.2-12.8-27.2-27.2v-11.2c0-14.4 11.2-27.2 27.2-27.2h235.2c14.4 0 27.2 12.8 27.2 27.2v11.2c0 14.4-11.2 27.2-27.2 27.2zM673.6 788.8h-139.2c-14.4 0-27.2-12.8-27.2-27.2v-11.2c0-14.4 11.2-27.2 27.2-27.2h139.2c14.4 0 27.2 12.8 27.2 27.2v11.2c0 14.4-12.8 27.2-27.2 27.2z" fill="#2166CC" ></path><path d="M396.8 385.6l-88 92.8-25.6-27.2c-11.2-11.2-30.4-11.2-41.6 0-11.2 12.8-11.2 32 0 43.2l44.8 48c4.8 6.4 12.8 9.6 20.8 9.6s16-3.2 20.8-9.6l107.2-113.6c11.2-11.2 12.8-32 1.6-43.2-9.6-11.2-28.8-11.2-40 0z" fill="#FFFFFF" ></path></symbol><symbol id="icon-qingjia" viewBox="0 0 1024 1024"><path d="M310.857143 201.142857h475.428571c40.228571 0 73.142857 32.914286 73.142857 73.142857V914.285714l-182.857142-91.428571-164.571429 109.714286-175.542857-109.714286L237.714286 877.714286V274.285714c0-40.228571 32.914286-73.142857 73.142857-73.142857z" fill="#EEF5FE" ></path><path d="M512 950.857143c-29.257143 0-58.514286-10.971429-84.114286-29.257143L365.714286 870.4c-10.971429-10.971429-29.257143-10.971429-40.228572-3.657143L219.428571 925.257143c-18.285714 10.971429-36.571429 10.971429-54.857142 7.314286-18.285714-3.657143-36.571429-18.285714-43.885715-32.914286-7.314286-10.971429-10.971429-25.6-10.971428-36.571429V219.428571c0-80.457143 65.828571-146.285714 146.285714-146.285714h512c80.457143 0 146.285714 65.828571 146.285714 146.285714v643.657143c0 40.228571-32.914286 73.142857-73.142857 73.142857-14.628571 0-25.6-3.657143-36.571428-10.971428l-102.4-58.514286c-14.628571-7.314286-29.257143-7.314286-40.228572 3.657143l-65.828571 51.2c-25.6 18.285714-54.857143 29.257143-84.114286 29.257143z m-171.885714-146.285714c21.942857 0 40.228571 7.314286 58.514285 21.942857l65.828572 51.2c29.257143 21.942857 69.485714 21.942857 98.742857 0l65.828571-51.2c29.257143-21.942857 69.485714-25.6 102.4-7.314286l102.4 58.514286c10.971429 7.314286 29.257143-3.657143 29.257143-14.628572V219.428571c0-51.2-40.228571-91.428571-91.428571-91.428571H256C204.8 128 164.571429 168.228571 164.571429 219.428571v643.657143c0 3.657143 0 7.314286 3.657142 10.971429 3.657143 3.657143 7.314286 7.314286 10.971429 7.314286 3.657143 0 10.971429 0 14.628571-3.657143l102.4-58.514286c14.628571-7.314286 29.257143-14.628571 43.885715-14.628571z" fill="#262626" ></path><path d="M486.4 365.714286c14.628571 0 29.257143 10.971429 29.257143 29.257143v128c-3.657143 14.628571-14.628571 25.6-29.257143 25.6-18.285714 0-29.257143-10.971429-29.257143-29.257143v-124.342857c0-18.285714 10.971429-29.257143 29.257143-29.257143z" fill="#3496FB" ></path><path d="M640 519.314286c0 18.285714-10.971429 29.257143-29.257143 29.257143h-124.342857c-18.285714 0-29.257143-10.971429-29.257143-29.257143 0-14.628571 10.971429-29.257143 29.257143-29.257143h128c14.628571 3.657143 25.6 14.628571 25.6 29.257143z" fill="#3496FB" ></path></symbol><symbol id="icon-pre_icon_saomaqukuan" viewBox="0 0 1024 1024"><path d="M213.333333 192h746.666667v768H213.333333z" fill="#0099FF" opacity=".2" ></path><path d="M981.333333 1024H682.666667v-64h256a21.333333 21.333333 0 0 0 21.333333-21.333333V682.666667h64v298.666666a42.666667 42.666667 0 0 1-42.666667 42.666667zM960 85.333333a21.333333 21.333333 0 0 0-21.333333-21.333333H682.666667V0h298.666666a42.666667 42.666667 0 0 1 42.666667 42.666667v298.666666h-64V85.333333zM64 85.333333v256H0V42.666667a42.666667 42.666667 0 0 1 42.666667-42.666667h298.666666v64H85.333333a21.333333 21.333333 0 0 0-21.333333 21.333333z m192 416a53.333333 53.333333 0 0 1 53.333333-53.333333h405.333334a53.333333 53.333333 0 1 1 0 106.666667h-405.333334a53.333333 53.333333 0 0 1-53.333333-53.333334zM64 938.666667a21.333333 21.333333 0 0 0 21.333333 21.333333h256v64H42.666667a42.666667 42.666667 0 0 1-42.666667-42.666667V682.666667h64v256z" fill="#0099FF" ></path></symbol><symbol id="icon-yiqingtianbao" viewBox="0 0 1024 1024"><path d="M188.795 962.06l330.155-0.047-0.01-72-315.94 0.046V133h618v355.633h72V121c0-32.079-24.557-59.448-56.81-60h-647.4c-32.407 0-57.288 27.048-57.79 59.03v782.03c0 32.08 24.557 59.448 56.815 60h0.98z" fill="#474747" ></path><path d="M777.68 536c20.748 0 37.569 16.788 37.569 37.496 0 11.56-5.242 21.9-13.483 28.777v57.79c18.66 3.673 35.619 12.086 49.57 23.933l29.121-21.204c-0.01-0.356-0.015-0.712-0.015-1.07 0-20.709 16.82-37.496 37.569-37.496 20.749 0 37.57 16.787 37.57 37.496 0 20.708-16.821 37.496-37.57 37.496-4.759 0-9.311-0.883-13.501-2.494l-27.107 19.738C885.446 731.702 890 749.069 890 767.5c0 12.308-2.03 24.141-5.775 35.184l24.741 17.016a37.544 37.544 0 0 1 13.465-2.48c20.749 0 37.569 16.788 37.569 37.496 0 20.709-16.82 37.496-37.57 37.496-20.748 0-37.568-16.787-37.568-37.496 0-0.42 0.007-0.838 0.02-1.255l-21.29-14.642C843.51 862.194 813.734 877 780.5 877c-1.407 0-2.808-0.027-4.202-0.08l-5.085 21.588a37.31 37.31 0 0 1 7.847 16.167c4.32 20.267-8.655 40.19-28.98 44.497-20.325 4.308-40.303-8.63-44.624-28.897-4.094-19.205 7.343-38.101 25.848-43.694l4.495-19.09c-27.035-12.106-48.266-34.853-58.363-62.915l-45.134 10.42c-5.637 13.605-19.065 23.178-34.733 23.178-20.749 0-37.569-16.788-37.569-37.496 0-20.709 16.82-37.496 37.57-37.496 10.388 0 19.791 4.208 26.592 11.01l46.915-10.832c0.71-19.095 6.309-36.94 15.581-52.319l-29.04-23.515a37.614 37.614 0 0 1-11.43 1.767c-20.749 0-37.57-16.788-37.57-37.496 0-20.709 16.821-37.496 37.57-37.496s37.569 16.787 37.569 37.496c0 1.1-0.048 2.19-0.14 3.267l30.911 25.033c13.204-9.982 28.741-17.041 45.649-20.215v-53.2c-11.933-6.28-20.067-18.785-20.067-33.186 0-20.708 16.82-37.496 37.57-37.496z m-18.084-283.596v80.192h-495v-80.192h495z" fill="#1B69FD" ></path></symbol><symbol id="icon-drxx54" viewBox="0 0 1026 1024"><path d="M970.750447 248.218841h-101.990237v437.8617h-655.358951v95.027048a49.97112 49.97112 0 0 0 51.199918 51.199918H819.198689L1023.998362 1024V299.418759a49.97112 49.97112 0 0 0-53.247915-51.199918z" fill="#4E8CEE" ></path><path d="M715.160456 0.001638H81.919869a81.919869 81.919869 0 0 0-81.919869 72.908684v686.078902l160.562943-153.190155h554.597513a81.919869 81.919869 0 0 0 81.919869-72.908683V72.910322a81.919869 81.919869 0 0 0-81.919869-72.908684zM277.298756 343.245889h-81.919869V269.927607h81.919869z m160.562943 0h-81.919869V269.927607h81.919869z m160.562944 0h-81.919869V269.927607h81.919869z" fill="#A6C5F6" ></path></symbol><symbol id="icon-task" viewBox="0 0 1061 1024"><path d="M195.33333359 162.0000002h666.66666622a133.33333359 133.33333359 0 0 1 133.33333359 133.33333271v583.3333336a83.33333349 83.33333349 0 0 1-83.3333335 83.33333349H195.33333359a133.33333359 133.33333359 0 0 1-133.33333359-133.33333359V295.33333291a133.33333359 133.33333359 0 0 1 133.33333359-133.33333271z" fill="#BAE7FF" ></path><path d="M195.33333359 162.0000002h666.66666622a133.33333359 133.33333359 0 0 1 133.33333359 133.33333271v416.66666748l-133.33333359 120.33333281-1.99999952 2.00000039L728.66666709 962H195.33333359a133.33333359 133.33333359 0 0 1-133.33333359-133.33333359V295.33333291a133.33333359 133.33333359 0 0 1 133.33333359-133.33333271z" fill="#1890FF" ></path><path d="M195.33333359 162.0000002h666.66666622a133.33333359 133.33333359 0 0 1 133.33333359 133.33333271v416.66666748h-182.3333335a83.33333349 83.33333349 0 0 0-83.33333349 83.33333261v166.666667H195.33333359a133.33333359 133.33333359 0 0 1-133.33333359-133.33333359V295.33333291a133.33333359 133.33333359 0 0 1 133.33333359-133.33333271z" fill="#69C0FF" ></path><path d="M361.99999971 62a33.33333339 33.33333339 0 0 1 33.33333339 33.33333339v152.33333292a33.33333339 33.33333339 0 0 1-33.33333339 33.3333334 33.33333339 33.33333339 0 0 1-33.3333334-33.3333334V95.3333334a33.33333339 33.33333339 0 0 1 33.3333334-33.3333334zM695.33333369 62a33.33333339 33.33333339 0 0 1 33.3333334 33.33333339v152.33333292a33.33333339 33.33333339 0 0 1-33.3333334 33.3333334 33.33333339 33.33333339 0 0 1-33.3333334-33.3333334V95.3333334a33.33333339 33.33333339 0 0 1 33.3333334-33.3333334z" fill="#BAE7FF" ></path><path d="M345.33333301 495.3333333m-50.0000001 0a50.0000001 50.0000001 0 1 0 100.00000019 0 50.0000001 50.0000001 0 1 0-100.00000019 0Z" fill="#BAE7FF" ></path><path d="M528.6666667 461.9999999h200.00000039a33.33333339 33.33333339 0 0 1 33.33333252 33.3333334 33.33333339 33.33333339 0 0 1-33.33333252 33.3333334h-200.00000039a33.33333339 33.33333339 0 0 1-33.3333334-33.3333334 33.33333339 33.33333339 0 0 1 33.3333334-33.3333334zM528.6666667 628.6666669h200.00000039a33.33333339 33.33333339 0 0 1 33.33333252 33.33333339 33.33333339 33.33333339 0 0 1-33.33333252 33.3333334h-200.00000039a33.33333339 33.33333339 0 0 1-33.3333334-33.3333334 33.33333339 33.33333339 0 0 1 33.3333334-33.33333339z" fill="#BAE7FF" ></path><path d="M345.33333301 662.00000029m-50.0000001 0a50.0000001 50.0000001 0 1 0 100.00000019 0 50.0000001 50.0000001 0 1 0-100.00000019 0Z" fill="#BAE7FF" ></path></symbol><symbol id="icon-NMStubiao-" viewBox="0 0 1024 1024"><path d="M524.271711 2.39448C736.582283 3.79126 897.810612 208.519312 817.395988 403.370133c-62.655564 151.949719-165.01959 287.736697-253.116505 428.611945-24.742961 39.708462-65.050044 32.125942-87.897375-3.09287-82.310255-127.106987-180.38417-248.527084-236.454914-386.808312C137.862478 191.159331 308.269648 6.38528 524.271711 2.39448z m-15.963201 728.620352c9.478151 0.49885 18.956301 0.89793 28.434451 1.39678C600.196685 620.768976 667.840749 511.42105 725.507812 396.885083c43.499723-86.600365 19.754461-174.89682-49.984773-242.141804-68.841304-66.446824-175.69498-80.414625-259.900865-34.021572-75.725434 41.703862-151.849949 137.882148-119.125386 232.464113 47.290983 136.984218 137.782378 252.817195 211.811722 377.829012z" fill="#1296DB" ></path><path d="M157.118089 928.858754h717.346342c-38.810532-57.367753-75.725434-104.159886-102.962646-156.040289-11.074471-21.051471-1.49655-52.778333-1.29701-79.716235 24.942501 8.979301 59.163613 10.475851 73.131414 28.234912 51.880403 65.149814 98.572766 134.789278 143.968119 204.728052 41.105242 63.054644 24.443651 96.677136-49.286383 96.976445-255.610755 1.39678-593.232454 1.29701-848.843209-0.49885-62.056944-0.29931-81.013245-35.717662-47.191213-88.994845 47.390753-74.827504 98.073916-147.659609 152.348799-217.598383 11.972401-15.364581 44.896503-14.566421 68.142914-21.151241 1.29701 24.842731 12.271711 54.973273 1.9954 73.630265-28.633992 52.279483-65.848204 99.770006-107.352527 160.430169z" fill="#1296DB" ></path><path d="M523.972401 459.939727c-74.827504 0-135.687208-60.859704-135.687208-135.687208s60.859704-135.687208 135.687208-135.687208 135.687208 60.859704 135.687208 135.687208-60.859704 135.687208-135.687208 135.687208z m0-211.512413c-41.803632 0-75.825204 34.021572-75.825205 75.825205s34.021572 75.825204 75.825205 75.825204 75.825204-34.021572 75.825204-75.825204-34.021572-75.825204-75.825204-75.825205z" fill="#1296DB" ></path></symbol><symbol id="icon-icon_homepage_fill" viewBox="0 0 1024 1024"><path d="M607.995331 639.994116c-17.672498 0-31.998785 14.326287-31.998785 31.998785v31.998785c0 17.672498 14.326287 31.998785 31.998785 31.998784h31.998785c17.672498 0 31.998785-14.326287 31.998785-31.998784v-31.998785c0-17.672498-14.326287-31.998785-31.998785-31.998785h-31.998785z m-223.989447 0c-17.672498 0-31.998785 14.326287-31.998785 31.998785v31.998785c0 17.672498 14.326287 31.998785 31.998785 31.998784h31.998785c17.672498 0 31.998785-14.326287 31.998785-31.998784v-31.998785c0-17.672498-14.326287-31.998785-31.998785-31.998785h-31.998785z m223.989447-191.991686c-17.672498 0-31.998785 14.326287-31.998785 31.998785v31.998785c0 17.672498 14.326287 31.998785 31.998785 31.998785h31.998785c17.672498 0 31.998785-14.326287 31.998785-31.998785v-31.998785c0-17.672498-14.326287-31.998785-31.998785-31.998785h-31.998785z m-223.989447 0c-17.672498 0-31.998785 14.326287-31.998785 31.998785v31.998785c0 17.672498 14.326287 31.998785 31.998785 31.998785h31.998785c17.672498 0 31.998785-14.326287 31.998785-31.998785v-31.998785c0-17.672498-14.326287-31.998785-31.998785-31.998785h-31.998785z m223.989447-191.990662c-17.672498 0-31.998785 14.326287-31.998785 31.998785v31.998785c0 17.672498 14.326287 31.998785 31.998785 31.998784h31.998785c17.672498 0 31.998785-14.326287 31.998785-31.998784v-31.998785c0-17.672498-14.326287-31.998785-31.998785-31.998785h-31.998785z m-223.989447 0c-17.672498 0-31.998785 14.326287-31.998785 31.998785v31.998785c0 17.672498 14.326287 31.998785 31.998785 31.998784h31.998785c17.672498 0 31.998785-14.326287 31.998785-31.998784v-31.998785c0-17.672498-14.326287-31.998785-31.998785-31.998785h-31.998785zM160.016437 863.98254V160.016437c0-53.016471 42.97886-95.995331 95.995331-95.995331h511.975441c53.016471 0 95.995331 42.97886 95.995331 95.995331v703.966103h95.995331c17.672498 0 31.998785 14.326287 31.998785 31.998785v31.998784c0 17.672498-14.326287 31.998785-31.998785 31.998785H64.021106c-17.672498 0-31.998785-14.326287-31.998785-31.998785v-31.998784c0-17.672498 14.326287-31.998785 31.998785-31.998785h95.995331z"  ></path></symbol><symbol id="icon-dianming" viewBox="0 0 1024 1024"><path d="M141.963636 140.8c0 5.818182-1.163636 9.309091-4.654545 12.8-3.490909 3.490909-8.145455 4.654545-12.8 5.818182-3.490909 0-6.981818-1.163636-9.309091-2.327273-2.327273-1.163636-4.654545-2.327273-5.818182-4.654545-1.163636-1.163636-1.163636-3.490909-2.327273-5.818182 0-2.327273-1.163636-4.654545-1.163636-6.981818 0-5.818182-1.163636-12.8-1.163636-20.945455s0-16.290909 1.163636-25.6c1.163636-8.145455 2.327273-17.454545 4.654546-26.763636 2.327273-9.309091 4.654545-17.454545 8.145454-24.436364 3.490909-6.981818 8.145455-12.8 12.8-17.454545s10.472727-6.981818 17.454546-8.145455c8.145455-1.163636 15.127273 0 20.945454 4.654546 5.818182 3.490909 11.636364 8.145455 16.290909 15.127272s9.309091 12.8 12.8 20.945455c3.490909 8.145455 6.981818 16.290909 9.309091 23.272727 2.327273 9.309091 4.654545 17.454545 5.818182 24.436364 1.163636 6.981818 2.327273 13.963636 3.490909 18.618182v8.145454c0 3.490909-1.163636 4.654545-1.163636 6.981818-1.163636 2.327273-2.327273 4.654545-3.490909 5.818182-1.163636 1.163636-4.654545 3.490909-8.145455 3.490909-1.163636 1.163636-3.490909 1.163636-5.818182 1.163637s-4.654545 0-6.981818-1.163637c-2.327273-1.163636-4.654545-2.327273-5.818182-4.654545-1.163636-2.327273-2.327273-4.654545-3.490909-8.145455 0-3.490909-1.163636-8.145455-2.327273-13.963636l-1.163636-10.472727-23.272727 5.818181c-1.163636 0-3.490909 0-4.654546-1.163636-1.163636 0-2.327273-1.163636-3.490909-2.327273-1.163636-1.163636-1.163636-3.490909-2.327273-5.818182 0-4.654545 1.163636-8.145455 3.49091-9.30909 2.327273-1.163636 6.981818-2.327273 11.636363-3.49091l15.127273-1.163636-2.327273-6.981818c-2.327273-6.981818-3.490909-12.8-5.818182-17.454546-2.327273-5.818182-3.490909-9.309091-5.818181-11.636363-2.327273-3.490909-4.654545-4.654545-6.981819-4.654546-2.327273 0-4.654545 2.327273-5.818181 5.818182-2.327273 3.490909-3.490909 8.145455-4.654546 13.963637-1.163636 5.818182-2.327273 11.636364-2.327273 18.618181 0 6.981818-1.163636 13.963636 0 20.945455v18.618182c-1.163636 3.490909-1.163636 8.145455 0 10.472727zM285.090909 100.072727c-3.490909-3.490909-5.818182-6.981818-6.981818-9.309091-1.163636-2.327273-1.163636-4.654545-1.163636-8.145454 0-2.327273 1.163636-5.818182 3.490909-8.145455 2.327273-3.490909 5.818182-6.981818 10.472727-11.636363s10.472727-10.472727 16.290909-15.127273c5.818182-4.654545 11.636364-9.309091 18.618182-11.636364 5.818182-3.490909 11.636364-4.654545 17.454545-3.490909 5.818182 0 11.636364 3.490909 17.454546 9.309091 4.654545 4.654545 8.145455 9.309091 8.145454 15.127273s1.163636 10.472727 0 16.290909c8.145455-3.490909 16.290909-4.654545 23.272728-2.327273s13.963636 5.818182 20.945454 11.636364c5.818182 5.818182 9.309091 12.8 10.472727 18.618182 1.163636 6.981818-1.163636 13.963636-4.654545 19.781818-3.490909 6.981818-8.145455 13.963636-13.963636 20.945454-5.818182 6.981818-12.8 13.963636-19.781819 22.109091-2.327273 2.327273-4.654545 3.490909-6.981818 4.654546-2.327273 1.163636-4.654545 2.327273-8.145454 2.327272-2.327273 1.163636-5.818182 1.163636-8.145455 0-2.327273-1.163636-5.818182-2.327273-8.145454-4.654545-2.327273-1.163636-5.818182-3.490909-8.145455-5.818182-2.327273-2.327273-5.818182-4.654545-8.145455-6.981818L300.218182 116.363636c-1.163636-2.327273-3.490909-4.654545-6.981818-8.145454l-8.145455-8.145455z m70.981818 24.436364l5.818182 5.818182c2.327273 2.327273 4.654545 3.490909 5.818182 5.818182 2.327273 1.163636 3.490909 2.327273 5.818182 1.163636 1.163636 0 2.327273-1.163636 3.490909-1.163636 2.327273-2.327273 4.654545-5.818182 6.981818-8.145455 2.327273-2.327273 4.654545-5.818182 5.818182-8.145455 1.163636-3.490909 2.327273-5.818182 1.163636-8.145454 0-2.327273-1.163636-5.818182-4.654545-8.145455-3.490909-3.490909-5.818182-4.654545-9.309091-4.654545-3.490909 0-5.818182 1.163636-9.309091 3.490909-2.327273 1.163636-4.654545 3.490909-8.145455 6.981818l-6.981818 6.981818c-1.163636 1.163636-2.327273 2.327273-1.163636 4.654546 2.327273 0 3.490909 1.163636 4.654545 3.490909zM325.818182 95.418182c1.163636 1.163636 2.327273 1.163636 3.490909 1.163636 1.163636 0 2.327273 0 2.327273-1.163636 2.327273-2.327273 4.654545-4.654545 6.981818-8.145455l4.654545-8.145454c1.163636-2.327273 1.163636-4.654545 1.163637-6.981818 0-2.327273-1.163636-4.654545-2.327273-5.818182-2.327273-2.327273-4.654545-3.490909-6.981818-2.327273-2.327273 0-4.654545 1.163636-6.981818 1.163636-2.327273 1.163636-4.654545 3.490909-6.981819 5.818182-2.327273 2.327273-4.654545 3.490909-5.818181 5.818182-3.490909 2.327273-3.490909 4.654545-1.163637 6.981818l11.636364 11.636364zM653.963636 73.309091c0 4.654545 1.163636 9.309091 2.327273 15.127273 1.163636 4.654545 2.327273 10.472727 4.654546 15.127272s5.818182 8.145455 9.30909 10.472728c3.490909 3.490909 8.145455 4.654545 13.963637 4.654545 6.981818 0 12.8-1.163636 16.290909-4.654545 4.654545-3.490909 8.145455-6.981818 11.636364-12.8 1.163636-3.490909 2.327273-5.818182 4.654545-8.145455 2.327273-2.327273 5.818182-3.490909 11.636364-3.490909s9.309091 1.163636 11.636363 3.490909c2.327273 2.327273 3.490909 4.654545 3.490909 6.981818 1.163636 3.490909 1.163636 6.981818 0 10.472728-4.654545 12.8-12.8 22.109091-23.272727 27.927272-10.472727 5.818182-23.272727 8.145455-37.236364 8.145455-10.472727 0-20.945455-2.327273-29.090909-5.818182s-15.127273-9.309091-20.945454-16.290909c-4.654545-6.981818-8.145455-13.963636-11.636364-23.272727-2.327273-9.309091-4.654545-18.618182-4.654545-29.090909 0-9.309091 1.163636-18.618182 4.654545-27.927273 2.327273-9.309091 6.981818-16.290909 12.8-23.272727C640 13.963636 646.981818 8.145455 655.127273 4.654545s17.454545-4.654545 27.927272-4.654545c13.963636 0 26.763636 2.327273 37.236364 8.145455 10.472727 5.818182 18.618182 15.127273 23.272727 29.090909 1.163636 3.490909 1.163636 6.981818 1.163637 10.472727-1.163636 3.490909-2.327273 5.818182-4.654546 8.145454-2.327273 2.327273-5.818182 3.490909-11.636363 3.49091-3.490909 0-5.818182 0-8.145455-1.163637s-3.490909-2.327273-4.654545-4.654545c-2.327273-1.163636-3.490909-2.327273-4.654546-4.654546-1.163636-2.327273-2.327273-4.654545-3.490909-5.818182-2.327273-4.654545-5.818182-6.981818-9.309091-9.30909-3.490909-2.327273-8.145455-3.490909-13.963636-3.49091-4.654545 0-9.309091 1.163636-12.8 4.654546-3.490909 2.327273-6.981818 5.818182-9.309091 10.472727-2.327273 4.654545-4.654545 9.309091-5.818182 13.963637-2.327273 4.654545-2.327273 9.309091-2.327273 13.963636zM829.672727 64c-1.163636-5.818182 1.163636-10.472727 5.818182-13.963636 4.654545-3.490909 10.472727-4.654545 18.618182-5.818182 5.818182-1.163636 12.8-1.163636 18.618182-1.163637s12.8 0 19.781818 1.163637c5.818182 1.163636 12.8 3.490909 18.618182 5.818182s11.636364 5.818182 16.290909 11.636363c4.654545 4.654545 9.309091 10.472727 12.8 17.454546 2.327273 5.818182 4.654545 13.963636 5.818182 24.436363 1.163636 12.8 0 23.272727-4.654546 33.745455-4.654545 9.309091-10.472727 17.454545-17.454545 23.272727-8.145455 5.818182-16.290909 11.636364-26.763637 13.963637-10.472727 3.490909-19.781818 5.818182-30.254545 5.818181h-8.145455c-2.327273 0-5.818182-1.163636-8.145454-2.327272-2.327273-1.163636-4.654545-2.327273-6.981818-4.654546-2.327273-2.327273-3.490909-4.654545-3.490909-6.981818-1.163636-9.309091-2.327273-18.618182-3.49091-26.763636l-2.327272-23.272728c-1.163636-8.145455-1.163636-16.290909-2.327273-24.436363 0-8.145455-1.163636-17.454545-2.327273-27.927273z m37.236364 18.618182c0 10.472727 1.163636 19.781818 1.163636 29.090909 1.163636 9.309091 2.327273 18.618182 4.654546 27.927273 1.163636 3.490909 2.327273 4.654545 3.490909 5.818181 1.163636 1.163636 2.327273 1.163636 3.490909 1.163637 4.654545 0 9.309091-1.163636 12.8-3.490909 3.490909-2.327273 6.981818-4.654545 10.472727-8.145455 3.490909-3.490909 5.818182-6.981818 6.981818-11.636363 1.163636-4.654545 1.163636-10.472727 1.163637-16.29091-1.163636-6.981818-2.327273-12.8-4.654546-17.454545-2.327273-4.654545-5.818182-8.145455-10.472727-10.472727-3.490909-2.327273-6.981818-3.490909-11.636364-4.654546-4.654545-1.163636-8.145455-1.163636-12.8-1.163636-2.327273 0-3.490909 1.163636-4.654545 3.490909v5.818182z" fill="#FF8449" ></path><path d="M104.727273 628.363636c12.8 0 23.272727 10.472727 23.272727 23.272728v11.636363c0 12.8-10.472727 23.272727-23.272727 23.272728s-23.272727-10.472727-23.272728-23.272728v-11.636363c0-12.8 10.472727-23.272727 23.272728-23.272728z" fill="#FFD9B6" ></path><path d="M104.727273 686.545455c12.8 0 23.272727 10.472727 23.272727 23.272727v139.636363c0 12.8-10.472727 23.272727-23.272727 23.272728s-23.272727-10.472727-23.272728-23.272728V709.818182c0-12.8 10.472727-23.272727 23.272728-23.272727z" fill="#FFDB17" ></path><path d="M46.545455 128h930.90909c25.6 0 46.545455 20.945455 46.545455 46.545455v314.181818c0 25.6-20.945455 46.545455-46.545455 46.545454H46.545455c-25.6 0-46.545455-20.945455-46.545455-46.545454V174.545455c0-25.6 20.945455-46.545455 46.545455-46.545455z" fill="#488CFE" ></path><path d="M93.090909 174.545455h837.818182c25.6 0 46.545455 20.945455 46.545454 46.545454v221.090909c0 25.6-20.945455 46.545455-46.545454 46.545455H93.090909c-25.6 0-46.545455-20.945455-46.545454-46.545455V221.090909c0-25.6 20.945455-46.545455 46.545454-46.545454z" fill="#BBDBFC" ></path><path d="M157.090909 244.363636h709.818182c9.309091 0 17.454545 8.145455 17.454545 17.454546s-8.145455 17.454545-17.454545 17.454545h-709.818182c-9.309091 0-17.454545-8.145455-17.454545-17.454545s8.145455-17.454545 17.454545-17.454546zM157.090909 325.818182h290.909091c9.309091 0 17.454545 8.145455 17.454545 17.454545s-8.145455 17.454545-17.454545 17.454546h-290.909091c-9.309091 0-17.454545-8.145455-17.454545-17.454546s8.145455-17.454545 17.454545-17.454545zM552.727273 325.818182h209.454545c9.309091 0 17.454545 8.145455 17.454546 17.454545s-8.145455 17.454545-17.454546 17.454546h-209.454545c-9.309091 0-17.454545-8.145455-17.454546-17.454546s8.145455-17.454545 17.454546-17.454545z" fill="#9FC3E8" ></path><path d="M474.763636 211.781818h75.636364v82.618182h-75.636364zM629.527273 144.290909c0 13.963636-9.309091 24.436364-22.109091 27.927273-2.327273 0-4.654545 1.163636-6.981818 1.163636-16.290909 0-27.927273-12.8-27.927273-27.927273 0-16.290909 12.8-27.927273 27.927273-27.927272 2.327273 0 4.654545 0 6.981818 1.163636 12.8 1.163636 22.109091 11.636364 22.109091 25.6zM451.490909 144.290909c0 16.290909-12.8 27.927273-27.927273 27.927273-2.327273 0-4.654545 0-6.981818-1.163637-12.8-3.490909-22.109091-13.963636-22.109091-27.927272 0-12.8 9.309091-24.436364 22.109091-27.927273 2.327273 0 4.654545-1.163636 6.981818-1.163636 15.127273 1.163636 27.927273 13.963636 27.927273 30.254545z" fill="#F7C9A4" ></path><path d="M591.127273 62.836364V162.909091c0 43.054545-34.909091 79.127273-79.127273 79.127273s-79.127273-34.909091-79.127273-79.127273V62.836364h158.254546z" fill="#FFD9B6" ></path><path d="M432.872727 115.2s-24.436364-81.454545 17.454546-95.418182c0 0 5.818182-19.781818 26.763636-19.781818h116.363636c9.309091 0 16.290909 8.145455 16.29091 17.454545 0 22.109091-3.490909 60.509091-19.781819 98.909091l-18.618181-3.490909V90.763636s-46.545455-9.309091-119.854546-9.309091v30.254546l-18.618182 3.490909z" fill="#694B4B" ></path><path d="M548.072727 281.6h-72.145454l-94.254546 23.272727c-30.254545 6.981818-51.2 34.909091-51.2 66.327273v66.327273h361.890909v-66.327273c0-31.418182-20.945455-58.181818-51.2-66.327273l-93.090909-23.272727z" fill="#FFFFFF" ></path><path d="M388.654545 451.490909c-8.145455 0-15.127273-6.981818-15.127272-15.127273v-36.072727c0-8.145455 6.981818-15.127273 15.127272-15.127273 8.145455 0 15.127273 6.981818 15.127273 15.127273v36.072727c0 9.309091-6.981818 15.127273-15.127273 15.127273zM635.345455 451.490909c-8.145455 0-15.127273-6.981818-15.127273-15.127273v-36.072727c0-8.145455 6.981818-15.127273 15.127273-15.127273 8.145455 0 15.127273 6.981818 15.127272 15.127273v36.072727c0 9.309091-6.981818 15.127273-15.127272 15.127273z" fill="" ></path><path d="M353.745455 471.272727h315.345454V919.272727H353.745455z" fill="#FF8449" ></path><path d="M670.254545 663.272727H353.745455c-8.145455 0-15.127273-6.981818-15.127273-15.127272 0-8.145455 6.981818-15.127273 15.127273-15.127273h315.345454c8.145455 0 15.127273 6.981818 15.127273 15.127273 1.163636 8.145455-5.818182 15.127273-13.963637 15.127272zM670.254545 622.545455H353.745455c-8.145455 0-15.127273-6.981818-15.127273-15.127273 0-8.145455 6.981818-15.127273 15.127273-15.127273h315.345454c8.145455 0 15.127273 6.981818 15.127273 15.127273 1.163636 8.145455-5.818182 15.127273-13.963637 15.127273z" fill="#FFB686" ></path><path d="M809.890909 397.963636l-3.490909 10.472728-10.472727 31.418181-25.6 73.309091c-2.327273 6.981818-8.145455 11.636364-16.290909 11.636364H269.963636c-6.981818 0-13.963636-4.654545-16.290909-11.636364l-25.6-73.309091-10.472727-31.418181-3.490909-10.472728c-3.490909-10.472727 4.654545-22.109091 16.290909-22.109091h563.2c11.636364 0 19.781818 11.636364 16.290909 22.109091z" fill="#FFA56B" ></path><path d="M1006.545455 1013.527273h-989.09091c-9.309091 0-16.290909-9.309091-16.290909-20.945455V919.272727c0-11.636364 6.981818-20.945455 16.290909-20.945454h989.09091c9.309091 0 16.290909 9.309091 16.290909 20.945454v73.309091c1.163636 10.472727-6.981818 20.945455-16.290909 20.945455z" fill="#488CFE" ></path><path d="M180.363636 750.545455h66.327273v61.672727h-66.327273z" fill="#F7C9A4" ></path><path d="M288.581818 645.818182v39.563636c0 41.890909-33.745455 76.8-76.8 76.8-40.727273-1.163636-73.309091-33.745455-73.309091-74.472727v-40.727273c0-40.727273 33.745455-74.472727 74.472728-74.472727 20.945455 0 39.563636 8.145455 52.363636 22.109091 15.127273 11.636364 23.272727 30.254545 23.272727 51.2z" fill="#FFD9B6" ></path><path d="M308.363636 636.509091c0 60.509091-65.163636 81.454545-94.254545 81.454545-53.527273-1.163636-94.254545-41.890909-94.254546-70.981818v-17.454545c0-52.363636 41.890909-87.272727 94.254546-87.272728 25.6 0 50.036364 10.472727 66.327273 27.927273 17.454545 17.454545 27.927273 40.727273 27.927272 66.327273z" fill="#694B4B" ></path><path d="M301.381818 1017.018182H125.672727c-9.309091 0-16.290909-6.981818-16.290909-16.290909V847.127273c0-23.272727 18.618182-41.890909 41.890909-41.890909h125.672728c23.272727 0 41.890909 18.618182 41.890909 41.890909V1000.727273c0 9.309091-8.145455 16.290909-17.454546 16.290909z" fill="#FFDB17" ></path><path d="M242.036364 805.236364c23.272727 0 41.890909 18.618182 41.890909 41.890909v168.727272h17.454545c9.309091 0 16.290909-6.981818 16.290909-16.290909V847.127273c0-23.272727-18.618182-41.890909-41.890909-41.890909h-33.745454z" fill="#FFB604" ></path><path d="M479.418182 750.545455h66.327273v61.672727h-66.327273z" fill="#F7C9A4" ></path><path d="M586.472727 645.818182v39.563636c0 41.890909-33.745455 76.8-76.8 76.8-40.727273-1.163636-73.309091-33.745455-73.309091-74.472727v-40.727273c0-40.727273 33.745455-74.472727 74.472728-74.472727 20.945455 0 39.563636 8.145455 52.363636 22.109091 15.127273 11.636364 23.272727 30.254545 23.272727 51.2z" fill="#FFD9B6" ></path><path d="M606.254545 636.509091c0 60.509091-65.163636 81.454545-94.254545 81.454545-53.527273-1.163636-94.254545-41.890909-94.254545-70.981818v-17.454545c0-52.363636 41.890909-87.272727 94.254545-87.272728 25.6 0 50.036364 10.472727 66.327273 27.927273 17.454545 17.454545 27.927273 40.727273 27.927272 66.327273z" fill="#694B4B" ></path><path d="M600.436364 1017.018182H423.563636c-9.309091 0-16.290909-6.981818-16.290909-16.290909V847.127273c0-23.272727 18.618182-41.890909 41.890909-41.890909h125.672728c23.272727 0 41.890909 18.618182 41.890909 41.890909V1000.727273c0 9.309091-6.981818 16.290909-16.290909 16.290909z" fill="#FFDB17" ></path><path d="M541.090909 805.236364c23.272727 0 41.890909 18.618182 41.890909 41.890909v168.727272h17.454546c9.309091 0 16.290909-6.981818 16.290909-16.290909V847.127273c0-23.272727-18.618182-41.890909-41.890909-41.890909h-33.745455z" fill="#FFB604" ></path><path d="M777.309091 750.545455h66.327273v61.672727h-66.327273z" fill="#F7C9A4" ></path><path d="M885.527273 645.818182v39.563636c0 41.890909-33.745455 76.8-76.8 76.8-40.727273-1.163636-73.309091-33.745455-73.309091-74.472727v-40.727273c0-40.727273 33.745455-74.472727 74.472727-74.472727 20.945455 0 39.563636 8.145455 52.363636 22.109091 13.963636 11.636364 23.272727 30.254545 23.272728 51.2z" fill="#FFD9B6" ></path><path d="M904.145455 636.509091c0 60.509091-65.163636 81.454545-94.254546 81.454545-53.527273-1.163636-94.254545-41.890909-94.254545-70.981818v-17.454545c0-52.363636 41.890909-87.272727 94.254545-87.272728 25.6 0 50.036364 10.472727 66.327273 27.927273 17.454545 17.454545 27.927273 40.727273 27.927273 66.327273z" fill="#694B4B" ></path><path d="M898.327273 1017.018182H722.618182c-9.309091 0-16.290909-6.981818-16.290909-16.290909V847.127273c0-23.272727 18.618182-41.890909 41.890909-41.890909H872.727273c23.272727 0 41.890909 18.618182 41.890909 41.890909V1000.727273c0 9.309091-6.981818 16.290909-16.290909 16.290909z" fill="#FFDB17" ></path><path d="M838.981818 805.236364c23.272727 0 41.890909 18.618182 41.890909 41.890909v168.727272h17.454546c9.309091 0 16.290909-6.981818 16.290909-16.290909V847.127273c0-23.272727-18.618182-41.890909-41.890909-41.890909h-33.745455z" fill="#FFB604" ></path><path d="M806.4 408.436364l-11.636364 31.418181H229.236364l-11.636364-31.418181z" fill="#FF8449" ></path></symbol><symbol id="icon-kaoqindianming" viewBox="0 0 1034 1024"><path d="M18.432 507.552323c0 280.224323 227.162505 507.397172 507.386828 507.397172 280.21398 0 507.376485-227.172848 507.376485-507.386828C1033.205657 227.338343 806.032808 0.175838 525.818828 0.175838 245.594505 0.175838 18.432 227.348687 18.432 507.562667z" fill="#E9EAEB" ></path><path d="M819.56202 463.054869V641.086061l-69.425131 65.86699c-14.242909 14.242909-32.054303 23.148606-51.634424 23.148606H604.16c-55.192566 0-124.617697 49.84501-124.617697 124.617697v160.219798h302.648889V836.928646l97.910949-97.921292c16.032323-16.02198 26.706747-39.160242 26.706748-62.308849V553.849535c1.779071-51.634424-39.170586-90.794667-87.236525-90.794666z" fill="#A3D4FF" ></path><path d="M801.76097 1014.949495h-35.602101v-185.147475l103.258505-103.268848c14.232566-14.242909 21.359192-32.04396 21.359192-49.84501V553.849535c0-33.82303-23.148606-60.529778-53.413495-69.435474V649.981414L764.379798 721.19596a86.181495 86.181495 0 0 1-64.098263 28.485818h-94.352808c-42.718384 0-106.816646 40.949657-106.816646 106.816646v160.219798h-35.602101v-160.219798c0-81.88897 74.772687-142.429091 142.418747-142.429091h92.573738c14.242909 0 28.485818-5.337212 39.170586-17.790707l62.308848-62.319192V445.253818h17.80105c58.750707 0 106.816646 48.065939 106.816647 106.816647V674.909091c0 28.485818-10.684768 55.192566-32.04396 74.772687l-92.573737 92.573737v172.69398h1.779071z" fill="#2A5082" ></path><path d="M659.342222 674.909091c39.160242 0 71.204202-33.82303 71.204202-74.772687v-28.485818c0-40.949657-32.04396-74.772687-71.204202-74.772687-39.170586 0-71.214545 33.82303-71.214545 74.78303v28.475475c0 42.718384 30.264889 74.772687 71.214545 74.772687z" fill="#FFFFFF" ></path><path d="M659.342222 692.710141c-49.855354 0-89.015596-40.949657-89.015596-92.573737v-28.485818c0-51.624081 39.160242-92.573737 89.015596-92.573738 49.84501 0 89.005253 40.949657 89.005253 92.573738v28.485818c0 51.624081-40.939313 92.573737-89.005253 92.573737z m0-178.031192c-30.264889 0-53.413495 24.927677-53.413495 56.971637v28.485818c0 32.04396 23.148606 56.971636 53.413495 56.971636 30.264889 0 53.403152-24.927677 53.403152-56.971636v-28.485818c0-30.264889-24.927677-56.971636-53.403152-56.971637zM552.515232 854.719354h35.612445v160.219798h-35.612445v-160.219798z" fill="#2A5082" ></path><path d="M18.432 106.992485v286.626909a51.665455 51.665455 0 0 0 51.624081 51.634424h288.416323L467.068121 582.335354c10.684768 12.463838 32.04396 5.337212 32.04396-10.684768v-126.396768h35.602101c30.264889 0 53.413495-24.927677 53.413495-53.413495V106.992485c0-30.264889-23.148606-53.403152-53.413495-53.403152H71.845495c-30.264889 0-53.413495 23.138263-53.413495 53.403152z" fill="#FFFFFF" ></path><path d="M479.521616 607.26303c-10.674424 0-21.359192-5.347556-28.475475-14.242909l-103.258505-131.744323H70.066424c-39.170586 0-69.435475-32.04396-69.435475-69.435475V106.992485c0-39.160242 32.04396-71.204202 71.214546-71.204202h462.868687c39.170586 0 71.214545 32.04396 71.214545 71.204202v284.858182c0 39.160242-32.04396 71.204202-71.214545 71.204202h-17.790707v108.60606c0 16.011636-8.905697 28.475475-23.148606 33.823031-5.347556 1.768727-8.905697 1.768727-14.242909 1.768727zM71.855838 71.38004a35.705535 35.705535 0 0 0-35.612444 35.602101v286.62691c0 19.590465 16.032323 33.82303 33.82303 33.82303h297.311677l113.943273 144.208161V427.452768h53.403151a35.705535 35.705535 0 0 0 35.612445-35.612445V106.992485a35.705535 35.705535 0 0 0-35.612445-35.602101H71.845495z" fill="#2A5082" ></path><path d="M356.68299 231.620525h35.612444v35.602101h-35.612444v-35.602101z m-71.204202 0h35.602101v35.602101H285.478788v-35.602101z m-71.214546 0h35.602101v35.602101h-35.602101v-35.602101z m71.214546 747.726869h658.700929v35.602101H285.478788v-35.612444z m-71.214546 0h35.602101v35.602101h-35.602101v-35.612444z m-71.214545 0h35.612444v35.602101H143.049697v-35.612444z m836.742465 0h35.602101v35.602101h-35.602101v-35.612444z" fill="#2A5082" ></path></symbol><symbol id="icon-Group-copy" viewBox="0 0 1024 1024"><path d="M0 0h1024v1024H0z" fill="#FFFFFF" fill-opacity=".01" ></path><path d="M256 700.472889a31.971556 31.971556 0 0 0-32.028444-32.028445H117.361778a31.971556 31.971556 0 1 0 0 64h106.609778c17.692444 0 32.028444-14.336 32.028444-32.028444zM117.304889 414.151111h106.723555a31.971556 31.971556 0 1 0 0-64H117.304889a31.971556 31.971556 0 1 0 0 64z" fill="#02BC67" ></path><path d="M817.777778 142.222222H206.222222c-35.384889 0-64 28.615111-64 64V256a31.971556 31.971556 0 1 0 64 0v-49.777778h611.555556v668.444445H206.222222v-48.014223h-0.113778l0.113778-1.763555a31.971556 31.971556 0 1 0-64 0c0 0.568889 0 1.137778 0.113778 1.763555H142.222222v48.014223c0 35.384889 28.615111 64 64 64h611.555556c35.384889 0 64-28.615111 64-64V206.222222c0-35.384889-28.615111-64-64-64z" fill="#02BC67" ></path><path d="M461.312 581.233778A145.806222 145.806222 0 0 1 394.24 458.638222 145.976889 145.976889 0 0 1 540.103111 312.888889a145.976889 145.976889 0 0 1 145.749333 145.806222c0 51.313778-26.737778 96.597333-66.958222 122.538667a202.467556 202.467556 0 0 1 120.32 148.821333 32.028444 32.028444 0 1 1-62.862222 11.946667 138.808889 138.808889 0 0 0-272.497778 0 32.028444 32.028444 0 0 1-62.862222-11.946667 202.410667 202.410667 0 0 1 120.32-148.821333z m-343.950222-7.907556a31.971556 31.971556 0 1 1 0-64h106.609778a31.971556 31.971556 0 1 1 0 64H117.361778z m422.684444-196.437333a81.92 81.92 0 0 0-81.749333 81.806222A81.92 81.92 0 0 0 540.103111 540.444444a81.92 81.92 0 0 0 81.749333-81.806222 81.92 81.92 0 0 0-81.749333-81.749333z" fill="#02BC67" ></path></symbol><symbol id="icon-sushe" viewBox="0 0 1024 1024"><path d="M238.933333 187.733333H119.466667a17.066667 17.066667 0 0 0-17.066667 17.066667v34.133333h136.533333v-51.2z m68.266667 0v51.2h136.533333v-51.2h-136.533333z m204.8 0v51.2h136.533333v-34.133333a17.066667 17.066667 0 0 0-17.066666-17.066667h-119.466667z m136.533333 665.6H102.4v85.333334H34.133333V204.8a85.333333 85.333333 0 0 1 85.333334-85.333333h512a85.333333 85.333333 0 0 1 85.333333 85.333333v34.133333h238.933333a34.133333 34.133333 0 0 1 34.133334 34.133334v665.6h-68.266667v-85.333334H716.8v85.333334h-68.266667v-85.333334z m68.266667-68.266666h204.8V307.2H716.8v68.266667h204.8v68.266666H716.8v68.266667h204.8v68.266667H716.8v68.266666h204.8v68.266667H716.8v68.266667z m-68.266667-102.4V409.6H102.4v273.066667h546.133333z m0-341.333334v-34.133333H102.4v34.133333h546.133333z m0 443.733334v-34.133334H102.4v34.133334h546.133333z" fill="#222222" ></path><path d="M102.4 614.4h204.8a17.066667 17.066667 0 0 1 17.066667 17.066667v34.133333a17.066667 17.066667 0 0 1-17.066667 17.066667H102.4v-68.266667z" fill="#FFDF32" ></path></symbol><symbol id="icon-lishi" viewBox="0 0 1024 1024"><path d="M644.8 944c-144 0-260.8-116.8-260.8-260.8s116.8-260.8 260.8-260.8 260.8 116.8 260.8 260.8c1.6 144-116.8 260.8-260.8 260.8z" fill="#96E8BA" ></path><path d="M680 702.4c-3.2 0-8-1.6-11.2-3.2l-201.6-120c-6.4-4.8-11.2-11.2-11.2-19.2V256c0-12.8 9.6-22.4 22.4-22.4s22.4 9.6 22.4 22.4v291.2l190.4 113.6c11.2 6.4 14.4 20.8 8 30.4-4.8 8-11.2 11.2-19.2 11.2zM230.4 592c-8 0-16-4.8-19.2-11.2-14.4-25.6-44.8-94.4-22.4-179.2 8-32 24-62.4 44.8-88 8-9.6 22.4-11.2 32-3.2 9.6 8 11.2 22.4 3.2 32-17.6 20.8-30.4 44.8-36.8 72-17.6 68.8 6.4 124.8 19.2 145.6 6.4 11.2 1.6 24-8 30.4-6.4 0-9.6 1.6-12.8 1.6z" fill="#103E26" ></path><path d="M304 272m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" fill="#103E26" ></path><path d="M491.2 904c-224 0-406.4-182.4-406.4-406.4 0-224 182.4-406.4 406.4-406.4 224 0 406.4 182.4 406.4 406.4 0 224-182.4 406.4-406.4 406.4z m0-768C292.8 136 129.6 299.2 129.6 497.6s161.6 361.6 361.6 361.6 361.6-161.6 361.6-361.6S691.2 136 491.2 136z" fill="#103E26" ></path></symbol><symbol id="icon-drxx81" viewBox="0 0 1024 1024"><path d="M851.862069 94.032984h-54.50075a61.025487 61.025487 0 0 1 8.05997 30.704647v62.176912A61.409295 61.409295 0 0 1 745.931034 248.707646H246.98051a61.793103 61.793103 0 0 1-60.257871-61.793103V124.737631a57.955022 57.955022 0 0 1 8.443778-30.704647H140.665667A123.970015 123.970015 0 0 0 16.695652 217.61919V836.701649A123.970015 123.970015 0 0 0 140.665667 959.52024h417.967017A278.644678 278.644678 0 0 1 976.215892 597.973013V217.61919a123.970015 123.970015 0 0 0-124.353823-123.586206z m-369.223388 621.001499H186.722639v-95.952024h295.916042z m140.473763-207.64018H186.722639v-96.335832H623.112444z" fill="#A6C5F6" ></path><path d="M383.232384 187.682159H630.788606a62.176912 62.176912 0 0 0 62.176911-61.793104V64.095952A61.793103 61.793103 0 0 0 630.788606 2.302849H383.232384a61.793103 61.793103 0 0 0-62.176912 61.793103v61.793103a62.176912 62.176912 0 0 0 62.176912 61.793104zM790.068966 589.145427A216.467766 216.467766 0 1 0 1006.536732 805.997001a216.083958 216.083958 0 0 0-216.467766-216.851574z m123.586206 278.26087h-185.37931v-172.329835h61.793104v103.628186h123.586206z" fill="#4E8CEE" ></path></symbol><symbol id="icon-pre_icon_yuyuequxian" viewBox="0 0 1024 1024"><path d="M562.4649 531.827267m-347.319902 0a347.319903 347.319903 0 1 0 694.639805 0 347.319903 347.319903 0 1 0-694.639805 0Z" fill="#0099FF" opacity=".2" ></path><path d="M969.64641 328.808569A469.535647 469.535647 0 0 1 991.507133 470.53552c0 154.986399-75.368419 292.034746-191.087238 377.618456l88.648297 143.647426-55.693768 30.073817-85.95146-139.275281A467.615172 467.615172 0 0 1 521.603735 940.438918a467.083977 467.083977 0 0 1-235.789352-63.886432l-84.991224 147.243208-53.078653-30.645874 87.116004-150.920713C123.636419 756.298077 51.700338 621.966997 51.700338 470.53552c0-42.78164 6.210897-84.010555 16.916522-123.400718-77.615783-79.9653-77.002865-207.615579 2.063489-286.661504 71.936081-71.956512 184.099979-78.800757 263.963126-20.961777a467.921631 467.921631 0 0 1 360.865379-5.25066C774.759083-18.695209 882.877726-10.236948 952.83204 59.717367c73.509236 73.509236 79.005063 189.085041 16.81437 269.091202zM114.013614 103.806564c-47.439813 47.439813-54.161474 119.743644-21.002639 174.722341a471.006649 471.006649 0 0 1 178.032096-205.041326A142.871063 142.871063 0 0 0 114.013614 103.806564z m407.794427-41.678388c-93.837665 0-180.034293 31.953431-249.007939 85.134237l-56.79702 56.81745 56.79702-56.81745a410.511694 410.511694 0 0 0-74.469474 74.469473l17.672454-17.652023-17.672454 17.652023c-53.180806 68.994077-85.134237 155.170274-85.134237 249.00794 0 225.676214 182.935436 408.61165 408.61165 408.61165 225.655784 0 408.61165-182.935436 408.61165-408.61165 0-70.219912-17.754176-136.251555-48.931245-193.967951l-165.712455-165.712454a406.670745 406.670745 0 0 0-193.96795-48.931245z m359.659975 214.623269a410.34825 410.34825 0 0 0-165.692025-165.692024l165.692025 165.692024z m28.112481-173.762104c-39.308441-39.308441-95.676418-50.300094-145.138858-34.180365a471.170094 471.170094 0 0 1 176.07076 189.636667 142.728049 142.728049 0 0 0-30.931902-155.456302zM603.326065 511.396685h-81.72233a40.861165 40.861165 0 0 1-40.861165-40.861165v-163.44466a40.861165 40.861165 0 1 1 81.72233 0v122.583495h40.861165a40.861165 40.861165 0 0 1 0 81.72233z" fill="#0099FF" ></path></symbol><symbol id="icon-susheshenqingliucheng" viewBox="0 0 1024 1024"><path d="M320 538.666667a42.666667 42.666667 0 0 1-42.666667-42.666667v-24.064c0-119.509333 19.754667-165.12 23.68-173.056 5.546667-11.136 15.744-19.328 27.818667-22.357333A829.866667 829.866667 0 0 1 512 256c100.138667 0 179.84 19.712 183.168 20.522667 12.074667 3.029333 22.229333 11.221333 27.818667 22.357333 3.968 7.936 23.68 52.650667 23.68 153.813333v38.485334h-85.333334v-38.485334c0-48.384-5.248-80.128-9.514666-98.133333A780.970667 780.970667 0 0 0 512 341.333333c-59.136 0-110.976 7.850667-139.434667 13.184-4.266667 19.541333-9.898667 56.661333-9.898666 117.418667v24.064a42.666667 42.666667 0 0 1-42.666667 42.666667" fill="#8BB3F1" ></path><path d="M170.666667 768v-119.424c0-39.296 26.538667-73.386667 64.554666-82.773333C295.04 550.997333 391.68 533.333333 512 533.333333c120.32 0 216.917333 17.664 276.821333 32.426667A85.034667 85.034667 0 0 1 853.333333 648.618667V768H170.666667zM789.333333 170.666667c23.552 0 42.666667 19.157333 42.666667 42.666666v277.12a168.234667 168.234667 0 0 0-22.698667-7.466666c-64.512-16-168.405333-34.986667-297.301333-34.986667s-232.832 18.986667-297.301333 34.986667c-7.850667 1.877333-15.36 4.48-22.698667 7.466666V213.333333c0-23.509333 19.157333-42.666667 42.666667-42.666666h554.666666z m128 42.666666c0-70.613333-57.429333-128-128-128h-554.666666c-70.613333 0-128 57.386667-128 128v352.426667c-13.653333 24.746667-21.333333 52.992-21.333334 82.816V981.333333h85.333334v-128h85.333333v42.666667h85.333333v-42.666667h341.333334v42.666667h85.333333v-42.666667h85.333333v128h85.333334v-332.757333c0-29.824-7.68-58.112-21.333334-82.773333V213.333333z" fill="#1768E4" ></path></symbol><symbol id="icon--neutral" viewBox="0 0 1024 1024"><path d="M512.003 512.003m-491.986961 0a491.986961 491.986961 0 1 0 983.973922 0 491.986961 491.986961 0 1 0-983.973922 0Z" fill="#FDDF6D" ></path><path d="M617.431206 931.355819c-271.716531 0-491.984961-220.26843-491.984961-491.984961 0-145.168284 62.886123-275.632538 162.888318-365.684714-159.280311 81.438159-268.320524 247.140483-268.320524 438.312856 0 271.716531 220.26843 491.984961 491.984961 491.984961 126.548247 0 241.924473-47.794093 329.096643-126.298247-67.100131 34.312067-143.12228 53.670105-223.664437 53.670105z" fill="#FCC56B" ></path><path d="M426.312833 359.704703m-60.044118 0a60.044117 60.044117 0 1 0 120.088235 0 60.044117 60.044117 0 1 0-120.088235 0Z" fill="#FFFFFF" ></path><path d="M764.373493 359.704703m-60.044117 0a60.044117 60.044117 0 1 0 120.088234 0 60.044117 60.044117 0 1 0-120.088234 0Z" fill="#FFFFFF" ></path><path d="M300.574587 481.542941c-36.536071 0-66.158129 29.618058-66.158129 66.158129h132.312258c0.004-36.540071-29.618058-66.158129-66.154129-66.158129zM877.629714 472.676923c-36.536071 0-66.158129 29.618058-66.158129 66.156129h132.312258c0.002-36.534071-29.616058-66.156129-66.154129-66.156129z" fill="#F9A880" ></path><path d="M791.751546 710.345387H430.558841c-11.056022 0-20.014039-8.962018-20.014039-20.014039s8.958017-20.014039 20.014039-20.014039h361.194705c11.056022 0 20.014039 8.962018 20.014039 20.014039s-8.960018 20.014039-20.016039 20.014039z" fill="#7F184C" ></path><path d="M934.571825 222.816435c-57.122112-83.314163-136.602267-147.388288-229.846449-185.300362-10.24802-4.164008-21.918043 0.766001-26.080051 11.002022-4.164008 10.24002 0.764001 21.914043 11.002022 26.078051 85.958168 34.948068 159.236311 94.028184 211.908414 170.854333 53.916105 78.642154 82.418161 170.814334 82.418161 266.548521 0 260.246508-211.726414 471.970922-471.970922 471.970922S40.030078 772.247508 40.030078 511.999 251.754492 40.030078 511.999 40.030078c11.056022 0 20.014039-8.962018 20.014039-20.014039S523.055022 0 511.999 0C229.680449 0 0 229.682449 0 511.999s229.680449 511.999 511.999 511.999 511.999-229.680449 511.999-511.999c0.004-103.848203-30.92006-203.848398-89.426175-289.182565z" fill="" ></path><path d="M506.386989 359.712703c0-44.144086-35.91407-80.058156-80.058156-80.058157s-80.058156 35.91407-80.058157 80.058157 35.91407 80.058156 80.058157 80.058156 80.058156-35.91407 80.058156-80.058156z m-120.088235 0c0-22.072043 17.958035-40.030078 40.030079-40.030079s40.030078 17.958035 40.030078 40.030079-17.958035 40.030078-40.030078 40.030078-40.030078-17.958035-40.030079-40.030078zM844.433649 359.712703c0-44.144086-35.91407-80.058156-80.058156-80.058157s-80.058156 35.91407-80.058156 80.058157 35.91407 80.058156 80.058156 80.058156 80.058156-35.91407 80.058156-80.058156z m-120.088234 0c0-22.072043 17.958035-40.030078 40.030078-40.030079s40.030078 17.958035 40.030078 40.030079-17.958035 40.030078-40.030078 40.030078-40.030078-17.958035-40.030078-40.030078zM410.544802 690.333348c0 11.054022 8.958017 20.014039 20.014039 20.014039h361.194705c11.056022 0 20.014039-8.962018 20.014039-20.014039s-8.958017-20.014039-20.014039-20.014039H430.558841a20.010039 20.010039 0 0 0-20.014039 20.014039z" fill="" ></path><path d="M634.011238 37.494073m-20.014039 0a20.014039 20.014039 0 1 0 40.028078 0 20.014039 20.014039 0 1 0-40.028078 0Z" fill="" ></path></symbol><symbol id="icon-qiandao" viewBox="0 0 1024 1024"><path d="M405.2 301.8c-0.4 0-0.7 0-1.1-0.2l-55.6-15.8c-2.1-0.6-3.4-2.8-2.8-4.9 0.6-2.1 2.8-3.4 4.9-2.8l55.6 15.8c2.1 0.6 3.4 2.8 2.8 4.9-0.5 1.9-2.1 3-3.8 3z" fill="#80E7FF" ></path><path d="M369.5 321.8c-0.4 0-0.7 0-1.1-0.2-2.1-0.6-3.4-2.8-2.8-4.9l15.8-55.6c0.6-2.1 2.8-3.4 4.9-2.8 2.1 0.6 3.4 2.8 2.8 4.9l-15.8 55.6c-0.5 1.9-2.1 3-3.8 3z" fill="#80E7FF" ></path><path d="M915 744.2c-0.7 0-1.4-0.2-2-0.5l-36-20.8c-1.9-1.1-2.6-3.6-1.5-5.5s3.6-2.6 5.5-1.5l36 20.8c1.9 1.1 2.6 3.6 1.5 5.5-0.8 1.3-2.1 2-3.5 2z" fill="#ACD598" ></path><path d="M886.6 751.8c-0.7 0-1.4-0.2-2-0.5-1.9-1.1-2.6-3.5-1.5-5.5l20.7-36c1.1-1.9 3.5-2.6 5.5-1.5 1.9 1.1 2.6 3.5 1.5 5.5l-20.7 36c-0.8 1.3-2.1 2-3.5 2z" fill="#ACD598" ></path><path d="M90.1 506.8c-1.9 0-3.6-1.4-3.9-3.4-0.4-2.2 1.1-4.2 3.3-4.6l30-4.9c2.2-0.4 4.2 1.1 4.6 3.3 0.4 2.2-1.1 4.2-3.3 4.6l-30 4.9c-0.3 0.1-0.5 0.1-0.7 0.1z" fill="#FFF100" ></path><path d="M107.5 519.4c-1.9 0-3.6-1.4-3.9-3.4l-4.9-30c-0.4-2.2 1.1-4.2 3.3-4.6 2.2-0.4 4.2 1.1 4.6 3.3l4.9 30c0.4 2.2-1.1 4.2-3.3 4.6-0.3 0.1-0.5 0.1-0.7 0.1z" fill="#FFF100" ></path><path d="M338.5 143.1c-3.9 0-7.1-3.2-7.1-7.1s3.2-7.1 7.1-7.1 7.1 3.2 7.1 7.1-3.2 7.1-7.1 7.1z m0-10.4c-1.8 0-3.3 1.5-3.3 3.3s1.5 3.3 3.3 3.3 3.3-1.5 3.3-3.3-1.5-3.3-3.3-3.3z" fill="#FF8A8A" ></path><path d="M781.5 639.7c-8.1 0-14.7-6.6-14.7-14.7s6.6-14.7 14.7-14.7 14.7 6.6 14.7 14.7-6.6 14.7-14.7 14.7z m0-23.5c-4.9 0-8.8 4-8.8 8.8s4 8.8 8.8 8.8 8.8-4 8.8-8.8-3.9-8.8-8.8-8.8z" fill="#FF9CAA" ></path><path d="M211.5 370.5c-9.6 0-17.5-7.9-17.5-17.5s7.9-17.5 17.5-17.5S229 343.4 229 353s-7.9 17.5-17.5 17.5z m0-28c-5.8 0-10.5 4.7-10.5 10.5s4.7 10.5 10.5 10.5S222 358.8 222 353s-4.7-10.5-10.5-10.5z" fill="#78FFFB" ></path><path d="M953.5 594c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z m0-26.7c-5.9 0-10.7 4.8-10.7 10.7s4.8 10.7 10.7 10.7 10.7-4.8 10.7-10.7-4.8-10.7-10.7-10.7z" fill="#92B4FF" ></path><path d="M591.5 94.5c-8 0-14.5-6.5-14.5-14.5s6.5-14.5 14.5-14.5S606 72 606 80s-6.5 14.5-14.5 14.5z m0-22.9c-4.6 0-8.4 3.8-8.4 8.4s3.8 8.4 8.4 8.4 8.4-3.8 8.4-8.4-3.8-8.4-8.4-8.4z" fill="#88D5FF" ></path><path d="M237.5 617c-7.7 0-14-6.3-14-14s6.3-14 14-14 14 6.3 14 14-6.3 14-14 14z m0-22.9c-4.9 0-8.9 4-8.9 8.9s4 8.9 8.9 8.9 8.9-4 8.9-8.9-4-8.9-8.9-8.9z" fill="#FFC994" ></path><path d="M860 487.5m-8.5 0a8.5 8.5 0 1 0 17 0 8.5 8.5 0 1 0-17 0Z" fill="#D3D462" ></path><path d="M723.7 733a7.3 8.5 0 1 0 14.6 0 7.3 8.5 0 1 0-14.6 0Z" fill="#A657FF" ></path><path d="M55 308.5m-8.5 0a8.5 8.5 0 1 0 17 0 8.5 8.5 0 1 0-17 0Z" fill="#FF455C" ></path><path d="M314.5 503m-8 0a8 8 0 1 0 16 0 8 8 0 1 0-16 0Z" fill="#6AD125" ></path><path d="M123.5 105m-12 0a12 12 0 1 0 24 0 12 12 0 1 0-24 0Z" fill="#C49FFF" ></path><path d="M517.5 163m-6 0a6 6 0 1 0 12 0 6 6 0 1 0-12 0Z" fill="#B4DB61" ></path><path d="M324.5 723h36c11 0 20 9 20 20v200h-255c-11 0-20-9-20-20V743c0-11 9-20 20-20h97m174 64h265c11 0 20 9 20 20v136h-305V807c0-11 9-20 20-20z m301 64h241c11 0 20 9 20 20v52c0 11-9 20-20 20h-261v-72c0-11 9-20 20-20z" fill="#358AFE" ></path><path d="M643.4 236l97.6-97.5c50.7-49.3 131.7-48.1 181 2.6 48.2 49.7 48.2 128.7 0 178.4L611.6 629.9c-14.3 14.3-191.9 9.4-191.9 9.4s-2.5-177.1 10.9-190.5l136.5-136.5" fill="#FFDF00" ></path><path d="M611.6 629.9c-14.3 14.3-191.9 9.4-191.9 9.4s-2.5-177.1 10.9-190.5" fill="#87FFFE" ></path><path d="M741 138.5c50.7-49.3 131.7-48.1 181 2.6 48.2 49.7 48.2 128.7 0 178.4" fill="#EB6877" ></path><path d="M459.7 648.9c-37.1 0-67.9-0.8-68.2-0.8-5.4-0.1-9.6-4.5-9.7-9.9 0-0.5-0.6-46.9 0.4-94.4 0.6-28 1.7-51 3.3-68.2 2.6-29.6 6.1-38.7 10.5-43.1l142-142.3c3.9-3.9 10.2-3.9 14.1 0 3.9 3.9 3.9 10.2 0 14.1l-141.6 142c-1.4 2.6-6.7 18.1-8.4 101.4-0.7 33.1-0.6 65.2-0.5 80.7 15.5 0.3 47.8 0.8 81.2 0.5 84.1-0.9 99.4-6.5 101.9-7.9l322.8-323.2c46.8-47.5 46.8-125.1 0-172.8-23-23.5-53.9-36.7-86.8-37-32.9-0.3-64 12.2-87.5 35.3L631.6 224.9c-3.9 3.9-10.2 3.9-14.1 0-3.9-3.9-3.9-10.2 0-14.1L719 109l0.1-0.1c27.3-26.8 63.4-41.4 101.8-41 38.3 0.4 74.1 15.6 100.9 43 26.5 27 41 62.7 41 100.5s-14.6 73.5-41.1 100.4L598.5 635.4c-4.6 4.6-13.8 8.2-43.7 10.7-17.4 1.5-40.5 2.4-68.7 2.7-9 0.1-17.9 0.1-26.4 0.1z m-49.6-202.2z" fill="#222222" ></path><path d="M366.6 675.2c-2.6 0-5.1-1-7.1-2.9-3.9-3.9-3.9-10.2 0-14.1l27.6-27.6c3.9-3.9 10.2-3.9 14.1 0 3.9 3.9 3.9 10.2 0 14.1l-27.6 27.6c-1.9 1.9-4.4 2.9-7 2.9z" fill="#222222" ></path><path d="M582.5 258m-16 0a16 16 0 1 0 32 0 16 16 0 1 0-32 0Z" fill="#222222" ></path><path d="M259.5 712m-16 0a16 16 0 1 0 32 0 16 16 0 1 0-32 0Z" fill="#222222" ></path><path d="M886.7 335.8c-2.6 0-5.1-1-7.1-2.9l-181-181c-3.9-3.9-3.9-10.2 0-14.1 3.9-3.9 10.2-3.9 14.1 0l181 181c3.9 3.9 3.9 10.2 0 14.1-1.9 1.9-4.4 2.9-7 2.9zM910.7 304.8c-2.6 0-5.1-1-7.1-2.9l-181-181c-3.9-3.9-3.9-10.2 0-14.1 3.9-3.9 10.2-3.9 14.1 0l181 181c3.9 3.9 3.9 10.2 0 14.1-1.9 1.9-4.4 2.9-7 2.9zM590.2 633.2c-2.6 0-5.1-1-7.1-2.9l-181-181c-3.9-3.9-3.9-10.2 0-14.1 3.9-3.9 10.2-3.9 14.1 0l181 181c3.9 3.9 3.9 10.2 0 14.1-1.9 1.9-4.4 2.9-7 2.9zM381.5 963h-285c-16.5 0-30-13.5-30-30V733c0-16.5 13.5-30 30-30h110c5.5 0 10 4.5 10 10s-4.5 10-10 10h-110c-5.5 0-10 4.5-10 10v200c0 5.5 4.5 10 10 10h275V733c0-5.5-4.5-10-10-10h-46c-5.5 0-10-4.5-10-10s4.5-10 10-10h46c16.5 0 30 13.5 30 30v220c0 5.5-4.5 10-10 10z" fill="#222222" ></path><path d="M682.5 963h-301c-5.5 0-10-4.5-10-10V797c0-16.5 13.5-30 30-30h261c16.5 0 30 13.5 30 30v156c0 5.5-4.5 10-10 10z m-291-20h281V797c0-5.5-4.5-10-10-10h-261c-5.5 0-10 4.5-10 10v146z" fill="#222222" ></path><path d="M929.5 963h-247c-5.5 0-10-4.5-10-10v-92c0-16.5 13.5-30 30-30h227c16.5 0 30 13.5 30 30v72c0 16.5-13.5 30-30 30z m-237-20h237c5.5 0 10-4.5 10-10v-72c0-5.5-4.5-10-10-10h-227c-5.5 0-10 4.5-10 10v82z" fill="#222222" ></path><path d="M665.5 306.4c4.7 4.7 4.7 12.3 0 17s-12.3 4.7-17 0-4.7-12.3 0-16.9c4.6-4.8 12.2-4.8 17-0.1z m60.1 60.1c4.7 4.7 4.7 12.3 0 17s-12.3 4.7-17 0-4.7-12.3 0-16.9c4.7-4.8 12.3-4.8 17-0.1zM626.9 374.5c9.2-9.2 42.3 24.1 33.2 33.2-4.1 4.1-17.5 2.8-26.7-6.3s-10.8-22.5-6.5-26.9z" fill="#222222" ></path><path d="M652.9 412.9c-6.8 0-15.2-3-21.6-9.3-10.4-10.3-12.1-25.4-6.5-31.1 1.7-1.7 4.8-3.4 10-1.9 11 3 26.4 18.3 29.3 29.4 1.4 5.3-0.3 8.3-1.9 10-2 1.8-5.4 2.9-9.3 2.9zM629 376.6c-2.8 2.9-1.9 14.4 6.5 22.7 8.2 8.1 19.8 9 22.5 6.3 0.8-0.8 0.9-2.2 0.4-4.2-2.4-8.9-16.2-22.8-25.1-25.2-2-0.5-3.5-0.4-4.3 0.4z" fill="#222222" ></path><path d="M624 380.3c5.9 0.3 13.4 4 19.9 10.5s10.3 14 10.5 19.9c-16.4-0.8-29.6-13.9-30.4-30.4z" fill="#FF1834" ></path></symbol><symbol id="icon-tongji" viewBox="0 0 1024 1024"><path d="M462.480291 76.190255C208.532945 76.190255 2.397091 280.864582 0.018618 534.248727c-2.383127 254.142836 203.7248 464.411927 457.867637 466.878837 247.156364 2.401745 450.117818-189.095564 466.068945-431.662546 0.670255-10.179491 1.601164-69.306182-52.335709-69.590109-142.303418-0.749382-171.343127-1.047273-288.572509-1.047273-56.585309 0-57.869964 1.3312-57.869964-61.537745 0-78.969018 4.873309-215.375127 4.873309-297.029818-0.004655-73.527855-62.273164-64.069818-67.570036-64.069818zM446.678109 934.446545c-213.871709-7.996509-383.497309-187.964509-380.220509-401.96189 3.304727-215.896436 179.348945-389.888 396.027345-389.888 5.869382 0-0.121018 211.0464-0.121018 322.56 0 59.005673-9.965382 100.682473 49.152 100.682472 167.973236 0 347.308218-1.051927 347.308218 1.289309-0.009309 208.984436-193.9968 375.477527-412.146036 367.318109z" fill="#388CEB" ></path><path d="M614.660655 14.554764c-3.397818 0-6.777018 0.055855-10.14691 0.158254-10.449455 0.311855-18.697309 9.025164-18.697309 19.483927V422.912a19.493236 19.493236 0 0 0 19.493237 19.493236h398.671127c10.561164 0 19.297745-8.480582 19.3024-19.037091v-0.19549c0.004655-225.670982-182.942255-408.617891-408.622545-408.617891z m337.682618 346.149236c0 5.394618-4.375273 9.760582-9.765237 9.760582h-282.223709a9.9328 9.9328 0 0 1-9.9328-9.9328V107.147636c0-5.338764 4.221673-9.746618 9.560437-9.937454 2.946327-0.1024 5.901964-0.176873 8.880872-0.228073 129.461527-2.220218 261.757673 118.7328 283.364073 260.398546 0.079127 0.530618 0.116364 1.065891 0.116364 1.605818v1.717527z" fill="#E78E00" ></path></symbol><symbol id="icon-lishijilu" viewBox="0 0 1024 1024"><path d="M707.36 506.89a24.25 24.25 0 0 0-24.25-24.26H249.79a24.26 24.26 0 1 0 0 48.52h433.32a24.24 24.24 0 0 0 24.25-24.26zM521.54 666.68a24.26 24.26 0 0 0-24.26-24.26H249.79a24.26 24.26 0 1 0 0 48.52h247.49a24.25 24.25 0 0 0 24.26-24.26zM249.74 371.35h433.32a24.26 24.26 0 1 0 0-48.51H249.74a24.26 24.26 0 1 0 0 48.51zM249.83 802.27a24.26 24.26 0 1 0 0 48.51H421.6a24.26 24.26 0 0 0 0-48.51zM924.64 831.48a24.25 24.25 0 0 0-24.26-24.25h-69.13v-80a24.26 24.26 0 0 0-48.52 0v128.55h117.65a24.28 24.28 0 0 0 24.26-24.3z" fill="#108EE9" ></path><path d="M116.38 263.72c0-60.81 42.63-110.56 94.74-110.56h401.43c14.41 0 31.07-1.61 33.36 5.61V150c0-60.81-26.63-107.56-78.74-107.56l-472.43 2C42.63 44.4 40 94.15 40 155v653.91c0 44 44.31 42.18 76.38 60z" fill="#A0D3F8" ></path><path d="M208.46 1024h358.77a24.28 24.28 0 1 0 0-48.56H208.46a58.35 58.35 0 0 1-58.3-58.26V256.43a58.35 58.35 0 0 1 58.3-58.29h516.07a58.34 58.34 0 0 1 58.25 58.29v250.46a24.26 24.26 0 0 0 48.52 0V256.43a107 107 0 0 0-106.82-106.86h-516A107 107 0 0 0 101.6 256.43v660.75A107 107 0 0 0 208.46 1024z m0 0" fill="#108EE9" ></path><path d="M807 1024c119.66 0 217-97.35 217-217s-97.35-217-217-217-217 97.35-217 217 97.35 217 217 217z m0-385.44c92.89 0 168.45 75.55 168.45 168.44S899.88 975.44 807 975.44 638.6 899.89 638.6 807 714.15 638.56 807 638.56z m0 0M111.59 883.08h7.63a25.36 25.36 0 0 0 0-50.71h-7.67a60.92 60.92 0 0 1-60.88-60.83V111.59a60.94 60.94 0 0 1 60.88-60.88h458.91a60.92 60.92 0 0 1 60.83 60.88l1 51.52a25.33 25.33 0 0 0 50.66 0l-1-51.52A111.72 111.72 0 0 0 570.41 0H111.59A111.73 111.73 0 0 0 0 111.59v659.95a111.72 111.72 0 0 0 111.59 111.54z m0 0" fill="#108EE9" ></path></symbol><symbol id="icon-yiqiandao" viewBox="0 0 1024 1024"><path d="M512.1 957.4c-38.7 0-77.7-5.1-116-15.4-114.9-30.8-211-104.5-270.5-207.6-59.6-103-75.4-223-44.6-338 30.8-115 104.5-211 207.6-270.5C501.4 3.1 774.4 76.2 897.2 289c122.8 212.8 49.7 485.8-163.1 608.6-68.6 39.6-144.8 59.8-222 59.8zM510.7 88c-71.9 0-144.6 18.3-211.2 56.7-98 56.6-168.2 148-197.5 257.3-29.3 109.3-14.3 223.5 42.3 321.6 56.6 98 148 168.2 257.3 197.5s223.6 14.3 321.6-42.3l5.4 9.4-5.4-9.4c202.4-116.8 272-376.5 155.1-578.9C800 164 657.3 88 510.7 88z"  ></path><path d="M212.7 483.4c8.6-92.2 60.1-179 146.2-228.7 46.4-26.8 97.1-39.5 147.1-39.5 42.9 0 85.2 9.4 124 27.3l11.5-6.7c-88.6-43.4-196.5-43.4-288.1 9.5-91.6 52.9-145.5 146.4-152.2 244.7l11.5-6.6zM800.4 537.3c-1.5 16.6-4.4 33.1-8.8 49.5C771.2 663 722.3 726.6 654 766.1c-68.3 39.4-147.8 49.9-224 29.5-16.4-4.4-32.2-10.2-47.3-17.1l-11.5 6.6c17.8 8.7 36.5 15.8 56 21 26.4 7.1 53.1 10.6 79.7 10.6 53 0 105.4-13.9 152.5-41.1 70.8-40.9 121.4-106.9 142.6-185.9 5.2-19.5 8.5-39.3 9.8-59l-11.4 6.6z"  ></path><path d="M513.5 888.5l-0.1-14.5c2.4 0 4.7 0 7.1-0.1l0.4 14.5c-2.5 0-4.9 0.1-7.4 0.1z m-7.4 0c-2.5 0-4.9-0.1-7.4-0.2l0.5-14.5c2.4 0.1 4.7 0.1 7.1 0.2l-0.2 14.5z m22.2-0.4l-0.6-14.5c2.4-0.1 4.7-0.2 7.1-0.4l0.9 14.5c-2.5 0.2-5 0.3-7.4 0.4z m-36.9-0.2c-2.5-0.1-4.9-0.3-7.4-0.5l1.1-14.4c2.4 0.2 4.7 0.3 7.1 0.4l-0.8 14.5z m51.6-0.7l-1.2-14.4c2.4-0.2 4.7-0.4 7.1-0.7l1.5 14.4c-2.5 0.3-4.9 0.5-7.4 0.7z m-66.3-0.3c-2.4-0.2-4.9-0.5-7.3-0.8l1.6-14.4c2.3 0.3 4.7 0.5 7 0.7l-1.3 14.5z m81-1.2l-1.8-14.4c2.3-0.3 4.7-0.6 7-0.9l2.1 14.3c-2.4 0.3-4.9 0.7-7.3 1z m-95.7-0.5c-2.4-0.3-4.9-0.7-7.3-1l2.2-14.3c2.3 0.4 4.7 0.7 7 1l-1.9 14.3z m110.3-1.6l-2.3-14.3c2.3-0.4 4.7-0.8 7-1.2l2.6 14.3c-2.4 0.4-4.9 0.8-7.3 1.2z m-124.9-0.6c-2.4-0.4-4.8-0.9-7.3-1.3l2.7-14.2c2.3 0.4 4.7 0.9 7 1.3l-2.4 14.2z m139.4-2.1l-2.9-14.2 6.9-1.5 3.2 14.1c-2.4 0.6-4.8 1.1-7.2 1.6z m-153.9-0.7c-2.4-0.5-4.8-1.1-7.2-1.6l3.3-14.1c2.3 0.5 4.6 1.1 6.9 1.5l-3 14.2z m168.3-2.5l-3.5-14.1c2.3-0.6 4.6-1.1 6.9-1.8l3.7 14c-2.3 0.7-4.7 1.3-7.1 1.9z m-182.7-0.9c-2.4-0.6-4.8-1.2-7.1-1.9l3.8-14 6.9 1.8-3.6 14.1z m197-2.9l-4-13.9c2.3-0.7 4.5-1.3 6.8-2l4.3 13.8c-2.4 0.7-4.7 1.4-7.1 2.1z m-211.2-1c-2.4-0.7-4.7-1.4-7.1-2.2l4.4-13.8c2.2 0.7 4.5 1.4 6.8 2.1l-4.1 13.9z m225.3-3.4l-4.6-13.8c2.2-0.7 4.5-1.5 6.7-2.3l4.8 13.7c-2.2 0.8-4.6 1.6-6.9 2.4z m-239.4-1.1c-2.3-0.8-4.7-1.6-7-2.4l4.9-13.6c2.2 0.8 4.5 1.6 6.7 2.3l-4.6 13.7z m253.3-3.8l-5.1-13.6c2.2-0.8 4.4-1.7 6.6-2.6l5.4 13.5-6.9 2.7z m-267.2-1.2l-6.9-2.7 5.5-13.4c2.2 0.9 4.4 1.8 6.6 2.6l-5.2 13.5z m280.9-4.3l-5.6-13.4c2.2-0.9 4.3-1.9 6.5-2.8l5.9 13.2c-2.3 1.1-4.5 2.1-6.8 3z m-294.6-1.3c-2.3-1-4.5-2-6.8-3l6-13.2c2.2 1 4.3 1.9 6.5 2.9l-5.7 13.3z m308.1-4.7l-6.1-13.1c2.1-1 4.3-2 6.4-3.1l6.4 13c-2.3 1.1-4.5 2.2-6.7 3.2z m-321.5-1.4c-2.2-1.1-4.4-2.1-6.6-3.2l6.5-13c2.1 1.1 4.3 2.1 6.4 3.1l-6.3 13.1z m334.7-5.1l-6.7-12.9 6.3-3.3 6.9 12.7c-2.1 1.2-4.3 2.4-6.5 3.5z m-348-1.5c-2.2-1.1-4.4-2.3-6.5-3.5l7-12.7c2.1 1.1 4.2 2.3 6.2 3.4l-6.7 12.8z m361-5.5l-7.1-12.6 2.7-1.6c2.1-1.2 4.1-2.4 6.1-3.6l7.5 12.4c-2.1 1.3-4.2 2.5-6.4 3.7l-2.8 1.7zM323 838c-2.1-1.2-4.3-2.5-6.4-3.8l7.5-12.4c2 1.2 4.1 2.4 6.1 3.6L323 838z m-12.7-7.6c-2.1-1.3-4.2-2.6-6.2-4l8-12.1c2 1.3 4 2.6 6 3.8l-7.8 12.3z m402.1-0.1l-7.7-12.3c2-1.3 4-2.5 6-3.8l8 12.1c-2.2 1.4-4.2 2.7-6.3 4zM298 822.2c-2-1.4-4.1-2.8-6.1-4.2l8.4-11.8c1.9 1.4 3.9 2.7 5.8 4.1l-8.1 11.9z m426.7 0l-8.2-11.9c2-1.3 3.9-2.7 5.8-4.1l8.4 11.8c-1.9 1.4-3.9 2.8-6 4.2z m12-8.6L728 802c1.9-1.4 3.8-2.8 5.7-4.3l8.9 11.5c-1.9 1.5-3.9 3-5.9 4.4z m-450.8 0c-2-1.5-4-3-5.9-4.5l8.9-11.4c1.9 1.5 3.7 2.9 5.7 4.3l-8.7 11.6z m462.5-9l-9.1-11.3c1.8-1.5 3.7-3 5.5-4.5l9.3 11.1c-1.9 1.6-3.8 3.1-5.7 4.7z m-474.2-0.1c-1.9-1.5-3.8-3.1-5.7-4.7l9.3-11.1c1.8 1.5 3.7 3 5.5 4.5l-9.1 11.3z m485.6-9.4l-9.6-10.9c1.8-1.6 3.6-3.2 5.3-4.7l9.7 10.7c-1.8 1.6-3.6 3.2-5.4 4.9z m-496.9-0.1c-1.9-1.6-3.7-3.3-5.5-4.9l9.8-10.7c1.8 1.6 3.5 3.2 5.3 4.7l-9.6 10.9z m507.8-9.9l-10-10.5c1.7-1.6 3.4-3.3 5.1-4.9L776 780c-1.7 1.7-3.5 3.4-5.3 5.1zM252 785c-1.8-1.7-3.5-3.4-5.3-5.1l10.2-10.3c1.7 1.7 3.4 3.3 5.1 5L252 785z m529.3-10.3l-10.4-10.1c1.7-1.7 3.3-3.4 4.9-5.2l10.6 9.9-5.1 5.4z m-539.9-0.1l-5.1-5.4 10.6-9.9c1.6 1.7 3.3 3.5 4.9 5.2l-10.4 10.1z m550-10.7l-10.8-9.7c1.6-1.8 3.2-3.6 4.7-5.4l10.9 9.5c-1.5 1.9-3.2 3.8-4.8 5.6z m-560.1-0.1c-1.7-1.8-3.3-3.7-4.9-5.6l11-9.5c1.6 1.8 3.1 3.6 4.7 5.3l-10.8 9.8z m569.8-11.1l-11.1-9.3c1.5-1.8 3-3.7 4.5-5.5l11.3 9.1c-1.6 1.9-3.1 3.8-4.7 5.7z m-579.4-0.1c-1.6-1.9-3.1-3.8-4.7-5.7l11.3-9c1.5 1.9 3 3.7 4.5 5.5l-11.1 9.2z m588.6-11.5l-11.5-8.8c1.4-1.9 2.9-3.8 4.3-5.7l11.7 8.6c-1.5 2-3 4-4.5 5.9z m-597.9-0.1c-1.5-2-3-3.9-4.4-5.9l11.7-8.6c1.4 1.9 2.8 3.8 4.3 5.7l-11.6 8.8z m606.7-11.8l-11.8-8.3c1.4-1.9 2.7-3.9 4.1-5.9l12 8.1c-1.5 2.1-2.9 4.1-4.3 6.1z m-615.4-0.1c-1.4-2-2.8-4-4.2-6.1l12-8.1c1.3 2 2.7 3.9 4 5.8l-11.8 8.4zM827.4 717l-12.2-7.9c1.3-2 2.6-4 3.8-6l12.3 7.6-3.9 6.3z m-632-0.1c-1.3-2.1-2.7-4.1-3.9-6.2l12.3-7.6c1.3 2 2.5 4 3.8 6l-12.2 7.8z m639.8-12.5l-12.5-7.4c1.2-2 2.4-4.1 3.6-6.1l12.6 7.1c-1.2 2.1-2.5 4.3-3.7 6.4z m-647.6-0.1l-3.7-6.4 12.6-7.1 3.6 6.1-12.5 7.4z m654.9-12.8l-12.7-6.9 3.3-6.3 12.9 6.6c-1.2 2.3-2.3 4.5-3.5 6.6z m-662.2 0c-1.2-2.2-2.3-4.3-3.5-6.5l12.9-6.7 3.3 6.3-12.7 6.9z m-6.7-13.1c-1.1-2.2-2.2-4.4-3.2-6.7l13.1-6.2c1 2.1 2 4.3 3.1 6.4l-13 6.5z m675.7 0l-13-6.4c1.1-2.1 2.1-4.3 3.1-6.4l13.1 6.2c-1.1 2.2-2.2 4.4-3.2 6.6z m-682-13.3c-1-2.2-2-4.5-2.9-6.8l13.3-5.7c0.9 2.2 1.9 4.4 2.8 6.5l-13.2 6z m688.2-0.1l-13.2-5.9c1-2.2 1.9-4.3 2.8-6.5l13.4 5.6c-1 2.3-2 4.6-3 6.8z m-694-13.5l-2.7-6.9 13.6-5.1c0.8 2.2 1.7 4.4 2.6 6.6l-13.5 5.4z m699.8-0.1l-13.5-5.3c0.9-2.2 1.7-4.4 2.6-6.7l13.6 5.1-2.7 6.9z m-705-13.7c-0.8-2.3-1.6-4.7-2.4-7l13.7-4.6c0.7 2.2 1.5 4.5 2.3 6.7l-13.6 4.9z m710.2-0.1l-13.7-4.8c0.8-2.2 1.6-4.5 2.3-6.7l13.7 4.6c-0.7 2.2-1.5 4.5-2.3 6.9z m-714.9-13.9c-0.7-2.4-1.4-4.7-2.1-7.1l13.9-4c0.7 2.3 1.3 4.5 2 6.8l-13.8 4.3z m719.5-0.2l-13.8-4.3c0.7-2.3 1.4-4.5 2-6.8l13.9 4c-0.6 2.4-1.3 4.8-2.1 7.1z m-723.6-14c-0.6-2.4-1.3-4.8-1.8-7.2l14.1-3.5 1.8 6.9-14.1 3.8z m727.7-0.2l-14-3.7 1.8-6.9 14.1 3.5c-0.6 2.4-1.2 4.8-1.9 7.1z m-731.3-14.1c-0.6-2.4-1.1-4.8-1.6-7.2l14.2-2.9 1.5 6.9-14.1 3.2z m734.9-0.2l-14.1-3.2 1.5-6.9 14.2 2.9c-0.6 2.4-1.1 4.8-1.6 7.2z m-737.9-14.3c-0.4-2.4-0.9-4.8-1.3-7.3l14.3-2.4c0.4 2.3 0.8 4.7 1.2 7l-14.2 2.7z m740.9-0.1l-14.2-2.6c0.4-2.3 0.8-4.7 1.2-7l14.3 2.4c-0.5 2.3-0.9 4.7-1.3 7.2z m-743.3-14.5c-0.4-2.4-0.7-4.9-1-7.3l14.4-1.8c0.3 2.3 0.6 4.7 0.9 7l-14.3 2.1z m745.7-0.1l-14.3-2.1c0.3-2.3 0.7-4.7 1-7l14.4 1.8c-0.4 2.4-0.8 4.9-1.1 7.3z m-747.5-14.5c-0.3-2.5-0.5-4.9-0.7-7.4l14.4-1.2c0.2 2.4 0.4 4.7 0.7 7.1l-14.4 1.5z m749.3-0.1l-14.4-1.5c0.2-2.3 0.5-4.7 0.7-7.1l14.4 1.2c-0.2 2.5-0.4 4.9-0.7 7.4z m-750.6-14.6c-0.2-2.5-0.3-4.9-0.4-7.4l14.5-0.7c0.1 2.4 0.2 4.7 0.4 7.1l-14.5 1z m751.9-0.1l-14.5-1c0.2-2.4 0.3-4.7 0.4-7.1l14.5 0.7c-0.1 2.4-0.2 4.9-0.4 7.4zM134.7 522c-0.1-2.5-0.1-4.9-0.1-7.4l14.5-0.1c0 2.4 0.1 4.7 0.1 7.1l-14.5 0.4z m753.3-0.1l-14.5-0.4c0.1-2.4 0.1-4.7 0.1-7.1l14.5 0.1c0 2.5 0 5-0.1 7.4z m-738.9-14.4l-14.5-0.2c0-2.5 0.1-4.9 0.2-7.4l14.5 0.5c-0.1 2.3-0.1 4.7-0.2 7.1z m724.5-0.2c0-2.4-0.1-4.7-0.1-7.1l14.5-0.5c0.1 2.5 0.1 4.9 0.2 7.4l-14.6 0.2z m-724-14l-14.5-0.8c0.1-2.5 0.3-4.9 0.5-7.4l14.4 1c-0.1 2.4-0.3 4.8-0.4 7.2z m723.6-0.2c-0.1-2.4-0.3-4.7-0.4-7.1l14.4-1c0.2 2.5 0.3 4.9 0.5 7.4l-14.5 0.7z m-722.6-14l-14.4-1.3c0.2-2.5 0.5-4.9 0.7-7.4l14.4 1.6c-0.2 2.4-0.5 4.8-0.7 7.1z m721.6-0.1c-0.2-2.4-0.5-4.7-0.7-7.1l14.4-1.6c0.3 2.4 0.5 4.9 0.7 7.3l-14.4 1.4z m-720-14l-14.4-1.8c0.3-2.4 0.7-4.9 1-7.3l14.3 2.2c-0.3 2.2-0.6 4.5-0.9 6.9z m718.5-0.1c-0.3-2.3-0.6-4.7-1-7l14.3-2.2c0.4 2.4 0.7 4.9 1 7.3l-14.3 1.9zM154.3 451l-14.3-2.4c0.4-2.4 0.9-4.9 1.3-7.3l14.2 2.7c-0.4 2.3-0.8 4.6-1.2 7z m714.2-0.2c-0.4-2.3-0.8-4.7-1.3-7l14.2-2.7c0.5 2.4 0.9 4.8 1.3 7.3l-14.2 2.4zM157 437l-14.2-3c0.5-2.4 1-4.8 1.6-7.2l14.1 3.3c-0.6 2.3-1.1 4.6-1.5 6.9z m708.9-0.1l-1.5-6.9 14.1-3.3c0.6 2.4 1.1 4.8 1.6 7.2l-14.2 3z m-705.7-13.7l-14.1-3.5c0.6-2.4 1.2-4.8 1.9-7.2l14 3.8c-0.7 2.3-1.3 4.6-1.8 6.9z m702.5-0.1l-1.8-6.9 14-3.8c0.6 2.4 1.3 4.7 1.9 7.1l-14.1 3.6z m-698.8-13.6l-13.9-4.1c0.7-2.4 1.4-4.7 2.2-7.1l13.8 4.4c-0.8 2.3-1.4 4.5-2.1 6.8z m695-0.1c-0.7-2.3-1.4-4.5-2.1-6.8l13.8-4.4c0.7 2.4 1.5 4.7 2.2 7.1l-13.9 4.1zM168.1 396l-13.7-4.7 2.4-6.9 13.6 4.9c-0.7 2.2-1.5 4.4-2.3 6.7z m686.5-0.2c-0.8-2.2-1.5-4.5-2.3-6.7l13.6-4.9c0.8 2.3 1.7 4.6 2.4 7l-13.7 4.6zM173 382.6l-13.5-5.1 2.7-6.9 13.4 5.4c-0.9 2.1-1.8 4.3-2.6 6.6z m676.8-0.1c-0.8-2.2-1.7-4.4-2.6-6.6l13.4-5.4 2.7 6.9-13.5 5.1z m-671.5-13.1l-13.3-5.7c1-2.3 2-4.5 3-6.8l13.2 5.9c-1 2.2-2 4.4-2.9 6.6z m666.2 0c-0.9-2.2-1.9-4.3-2.9-6.5l13.2-6c1 2.2 2 4.5 3 6.8l-13.3 5.7z m-660.4-13l-13.1-6.2c1.1-2.2 2.1-4.4 3.2-6.6l13 6.4c-1 2.2-2.1 4.3-3.1 6.4z m654.6 0c-1-2.1-2-4.2-3.1-6.4l12.9-6.5c1.1 2.2 2.2 4.4 3.3 6.7l-13.1 6.2z m-6.4-12.7c-1.1-2.1-2.2-4.2-3.4-6.2l12.7-7c1.2 2.2 2.3 4.3 3.5 6.5l-12.8 6.7z m-641.9 0l-12.8-6.7c1.1-2.2 2.3-4.4 3.5-6.5l12.7 6.9c-1.1 2.1-2.3 4.2-3.4 6.3z m635.1-12.4l-0.4-0.7c-1.1-1.9-2.1-3.7-3.2-5.5l12.4-7.5 3.3 5.7 0.4 0.7-12.5 7.3z m-628.2-0.1l-12.6-7.2c1.2-2.1 2.5-4.3 3.7-6.4l12.4 7.5c-1.2 2-2.4 4.1-3.5 6.1z m620.9-12.1c-1.3-2-2.5-4-3.8-6l12.1-7.9c1.3 2.1 2.7 4.1 4 6.2l-12.3 7.7z m-613.6-0.1l-12.3-7.7c1.3-2.1 2.6-4.2 4-6.2l12.1 7.9c-1.3 2-2.6 4-3.8 6z m605.8-11.8c-1.3-2-2.7-3.9-4.1-5.8l11.8-8.4c1.4 2 2.8 4 4.2 6.1l-11.9 8.1z m-598-0.1l-12-8.2c1.4-2 2.8-4.1 4.2-6.1l11.8 8.4c-1.3 2-2.7 4-4 5.9z m589.8-11.4c-1.4-1.9-2.9-3.8-4.3-5.7l11.5-8.8c1.5 1.9 3 3.9 4.4 5.9l-11.6 8.6z m-581.6-0.2l-11.6-8.6c1.5-2 3-4 4.5-5.9l11.5 8.9c-1.5 1.9-2.9 3.7-4.4 5.6z m572.9-11.1c-1.5-1.8-3-3.7-4.5-5.5l11.1-9.3c1.6 1.9 3.1 3.8 4.7 5.7l-11.3 9.1z m-564.2-0.1l-11.3-9.1c1.5-1.9 3.1-3.8 4.7-5.7l11.1 9.3c-1.5 1.8-3 3.7-4.5 5.5z m555.1-10.8c-1.6-1.8-3.1-3.6-4.7-5.3l10.7-9.8c1.7 1.8 3.3 3.7 4.9 5.6l-10.9 9.5z m-545.9-0.1l-10.9-9.5c1.6-1.9 3.3-3.7 4.9-5.5l10.7 9.7c-1.6 1.7-3.2 3.5-4.7 5.3z m536.3-10.5c-1.6-1.7-3.3-3.4-4.9-5.1l10.4-10.1c1.7 1.8 3.4 3.5 5.1 5.3l-10.6 9.9z m-526.8 0l-10.5-10c1.7-1.8 3.4-3.6 5.1-5.3l10.3 10.2c-1.6 1.6-3.2 3.4-4.9 5.1z m516.8-10.1c-1.7-1.7-3.4-3.3-5.1-4.9l10-10.5c1.8 1.7 3.6 3.4 5.3 5.1l-10.2 10.3z m-506.8-0.1l-10.1-10.4c1.8-1.7 3.6-3.4 5.3-5.1l9.9 10.6c-1.7 1.6-3.4 3.3-5.1 4.9z m496.4-9.7c-1.8-1.6-3.5-3.2-5.3-4.7l9.5-10.9c1.9 1.6 3.7 3.3 5.5 4.9l-9.7 10.7z m-486 0l-9.7-10.7c1.8-1.7 3.7-3.3 5.6-4.9l9.5 11c-1.8 1.4-3.6 3-5.4 4.6z m475.3-9.3c-1.8-1.5-3.7-3-5.5-4.5l9.1-11.3c1.9 1.5 3.8 3.1 5.7 4.7l-9.3 11.1z m-464.5-0.1l-9.3-11.1c1.9-1.6 3.8-3.1 5.7-4.7l9.1 11.3c-1.9 1.5-3.7 3-5.5 4.5z m453.4-8.8c-1.9-1.5-3.8-2.9-5.7-4.3l8.6-11.6c2 1.5 3.9 3 5.9 4.5l-8.8 11.4z m-442.3 0l-8.8-11.5c1.9-1.5 3.9-3 5.9-4.4l8.6 11.7c-2 1.3-3.8 2.7-5.7 4.2z m11.4-8.5l-8.4-11.8c2-1.4 4-2.8 6.1-4.2l8.1 12c-1.9 1.3-3.9 2.7-5.8 4z m419.5 0c-1.9-1.4-3.9-2.7-5.8-4.1l8.1-12c2 1.4 4.1 2.8 6.1 4.2l-8.4 11.9z m-407.7-7.9l-7.9-12.1c2.1-1.3 4.1-2.7 6.2-4l7.7 12.3c-2.1 1.2-4.1 2.5-6 3.8z m395.9-0.1c-2-1.3-4-2.6-6-3.8l7.7-12.3c2.1 1.3 4.2 2.6 6.2 4l-7.9 12.1z m-383.9-7.5l-7.4-12.4c1.6-1 3.3-1.9 4.9-2.9l1.4-0.8 7.2 12.6-1.3 0.8-4.8 2.7z m371.8 0c-2-1.2-4.1-2.4-6.2-3.6l7.2-12.6c2.1 1.2 4.3 2.5 6.4 3.7l-7.4 12.5z m-359.5-7l-6.9-12.7c2.2-1.2 4.3-2.3 6.5-3.5l6.7 12.8c-2.1 1.1-4.2 2.2-6.3 3.4z m347.2-0.1l-6.3-3.3 6.7-12.8c2.2 1.1 4.4 2.3 6.5 3.5l-6.9 12.6z m-334.6-6.5l-6.5-13c2.2-1.1 4.4-2.2 6.6-3.2l6.2 13.1c-2 1-4.2 2.1-6.3 3.1z m322 0c-2.1-1.1-4.3-2.1-6.4-3.1l6.2-13.1c2.2 1.1 4.4 2.1 6.7 3.2l-6.5 13z m-309.2-6.1l-5.9-13.2c2.2-1 4.5-2 6.8-3l5.7 13.3c-2.2 1-4.4 2-6.6 2.9z m296.3 0c-2.2-1-4.3-1.9-6.5-2.8l5.6-13.3c2.3 1 4.5 1.9 6.8 3l-5.9 13.1z m-13.1-5.5c-2.2-0.9-4.4-1.7-6.6-2.6l5.1-13.6 6.9 2.7-5.4 13.5z m-270.1 0l-5.4-13.4 6.9-2.7L383 173c-2.3 0.8-4.5 1.7-6.7 2.6z m256.8-5c-2.2-0.8-4.5-1.6-6.7-2.3l4.6-13.7c2.3 0.8 4.6 1.6 7 2.4l-4.9 13.6z m-243.6-0.1l-4.9-13.6c2.3-0.8 4.6-1.6 7-2.4l4.6 13.7c-2.2 0.8-4.4 1.5-6.7 2.3z m230.2-4.4c-2.3-0.7-4.5-1.4-6.8-2.1l4.1-13.9c2.4 0.7 4.7 1.4 7.1 2.1l-4.4 13.9zM403 166l-4.4-13.8c2.3-0.7 4.7-1.5 7.1-2.1l4.1 13.9c-2.3 0.6-4.5 1.3-6.8 2z m203-3.9l-6.9-1.8 3.5-14.1c2.4 0.6 4.8 1.2 7.1 1.9l-3.7 14z m-189.4-0.1l-3.8-14c2.4-0.6 4.8-1.3 7.1-1.9l3.5 14.1c-2.2 0.6-4.5 1.2-6.8 1.8z m175.7-3.4l-6.9-1.5 3-14.2c2.4 0.5 4.8 1 7.2 1.6l-3.3 14.1z m-161.9 0l-3.2-14.1c2.4-0.6 4.8-1.1 7.2-1.6l3 14.2c-2.4 0.4-4.7 0.9-7 1.5z m148-2.9c-2.3-0.4-4.7-0.9-7-1.2l2.4-14.3c2.4 0.4 4.9 0.8 7.3 1.3l-2.7 14.2z m-134.1 0l-2.7-14.2c2.4-0.5 4.8-0.9 7.3-1.3l2.4 14.3c-2.4 0.3-4.7 0.7-7 1.2z m120.1-2.3c-2.3-0.3-4.7-0.7-7-1l1.8-14.4c2.4 0.3 4.9 0.7 7.3 1l-2.1 14.4z m-106.1-0.1l-2.1-14.3c2.4-0.4 4.9-0.7 7.3-1l1.8 14.4c-2.4 0.2-4.7 0.6-7 0.9z m92-1.7c-2.3-0.3-4.7-0.5-7.1-0.7l1.3-14.4c2.5 0.2 4.9 0.5 7.4 0.7l-1.6 14.4z m-78-0.1l-1.6-14.4c2.4-0.3 4.9-0.5 7.4-0.7l1.3 14.4c-2.3 0.2-4.7 0.5-7.1 0.7z m63.8-1.2c-2.4-0.2-4.7-0.3-7.1-0.4l0.7-14.5c2.5 0.1 4.9 0.3 7.4 0.4l-1 14.5z m-49.6 0l-1-14.5c2.4-0.2 4.9-0.3 7.4-0.4l0.7 14.5c-2.4 0.1-4.8 0.2-7.1 0.4z m35.5-0.7c-2.4-0.1-4.7-0.1-7.1-0.1l0.1-14.5c2.5 0 4.9 0.1 7.4 0.2l-0.4 14.4z m-21.3 0l-0.4-14.5c2.5-0.1 4.9-0.1 7.4-0.1l0.1 14.5c-2.4 0-4.8 0-7.1 0.1zM278.3 644.7l30.4 52.7c4.2 7.2 9.8 8.9 17 4.7l89.9-51.9c3.9-2.2 6.6-5.2 7.8-8.7 1.3-5-3-17.4-13.3-37.3l14.5-3.2c10.8 22.8 15.5 37.4 14.3 44.2-1.7 5.9-5.9 10.9-12.7 15.3l-97 56c-13.4 7.7-23.9 4.4-31.8-9.3L244 614.6l12.6-7.3 14.6 25.3 96.1-55.5-26.3-45.9-118.2 68.3-7.1-12.3 131-75.7 40.6 70.3-109 62.9z m141.4-120.3l-14.8-0.6c3.2-19.6 2.6-39-1.8-58l13.8-4.5c1.2 5.4 2.1 10.5 2.9 15.6l46.2-26.7 6.5 11.2-25.3 14.6c6.4 4.5 12.2 8.9 17 13.2l-9.2 10.9c-6.5-6.1-13.3-11.7-20.5-16.8l-13.4 7.7c0.6 11.7 0.1 22.7-1.4 33.4z m68.1-48.4c31 3.4 63.6 1.5 97.5-5.9l0.1 14.4c-34.5 6.8-66.2 8.2-95.7 4.2-10.1 25.5-27.4 52.4-51.8 80.7l-12.3-7.4c24.3-27.6 42.4-54.7 54-81.3l8.2-4.7z m63.9 14.6l6.5 11.2-91.2 52.7-6.5-11.2 91.2-52.7zM507.6 587l-9.7 9.6c-10-9.2-20.8-17.3-32.3-24.2l9.3-10.3c10.6 6.5 21.6 15 32.7 24.9z m64.3-79.3c3.9 17.2 5.8 33.6 5.9 49.1l37.8-21.8 6.8 11.8-148.3 85.6-6.8-11.8 97-56c0-15.9-2.3-33.6-6.6-53.1l14.2-3.8z m-77-36.1l-14.7-0.7c1.8-16 0.6-31.8-3.6-47.6l13.6-4.4c1.2 5.4 2.3 10.4 3.3 15.4l51.3-29.6 6.5 11.2-27.9 16.1c7.7 4.4 14.3 8.9 20 13.5l-9.2 10.9c-7.7-6.1-15.7-11.8-23.8-16.9l-15.3 8.8c0.4 8.2 0.4 15.9-0.2 23.3z m49.7 92.2l-9.5 9.5c-9.9-10.2-20.2-19.5-31-27.8l9.5-10.4c9.8 7.9 20.2 17.4 31 28.7z m104.7-229.1l6.9 11.9-45.1 26.1c1.7 22.4 1.4 40.2-0.8 53.4 16.4-11.8 31.7-23.4 45.9-35.4-7.5-4.1-15.6-7.9-24.1-11.6l6-11.9c20.9 9 37.9 17.7 51 25.8l-6.3 13.5c-4.9-3.2-10-6.4-15.6-9.5-19.9 16.6-42.4 34.1-67.2 51.9l-9.6-9.7c1.9-1.6 3.5-2.9 4.4-4.2 3.6-10.5 4.6-28.6 2.9-54.6L568.9 397l-6.9-11.9 87.3-50.4z m79.5 136.1c-23.8 21.2-50.1 43-79.2 64.9l-9.8-10.5c13.1-9.7 25.8-19.4 38-29.2l-19.2-33.2-34.3 19.8-7.1-12.3 34.3-19.8-11.8-20.4 12.6-7.3 11.8 20.4 31.6-18.3 7.1 12.3-31.6 18.3 18 31.1c11.3-9.3 22-18.8 32.4-28.3l7.2 12.5zM681 327.9l62.8 108.7-12.3 7.1L668.7 335l12.3-7.1z m76.5 146.7l-9.9-10.7c8.6-4.5 16.9-8.8 24.6-13.3 4.9-2.8 6-7 3.1-12.1l-80.6-139.7 12.8-7.4L790 434.3c6.2 10.7 3.9 19.3-6.7 25.4l-25.8 14.9z"  ></path></symbol><symbol id="icon-yiqiandao-copy" viewBox="0 0 1024 1024"><path d="M512.1 957.4c-38.7 0-77.7-5.1-116-15.4-114.9-30.8-211-104.5-270.5-207.6-59.6-103-75.4-223-44.6-338 30.8-115 104.5-211 207.6-270.5C501.4 3.1 774.4 76.2 897.2 289c122.8 212.8 49.7 485.8-163.1 608.6-68.6 39.6-144.8 59.8-222 59.8zM510.7 88c-71.9 0-144.6 18.3-211.2 56.7-98 56.6-168.2 148-197.5 257.3-29.3 109.3-14.3 223.5 42.3 321.6 56.6 98 148 168.2 257.3 197.5s223.6 14.3 321.6-42.3l5.4 9.4-5.4-9.4c202.4-116.8 272-376.5 155.1-578.9C800 164 657.3 88 510.7 88z" fill="#ffffff" ></path><path d="M212.7 483.4c8.6-92.2 60.1-179 146.2-228.7 46.4-26.8 97.1-39.5 147.1-39.5 42.9 0 85.2 9.4 124 27.3l11.5-6.7c-88.6-43.4-196.5-43.4-288.1 9.5-91.6 52.9-145.5 146.4-152.2 244.7l11.5-6.6zM800.4 537.3c-1.5 16.6-4.4 33.1-8.8 49.5C771.2 663 722.3 726.6 654 766.1c-68.3 39.4-147.8 49.9-224 29.5-16.4-4.4-32.2-10.2-47.3-17.1l-11.5 6.6c17.8 8.7 36.5 15.8 56 21 26.4 7.1 53.1 10.6 79.7 10.6 53 0 105.4-13.9 152.5-41.1 70.8-40.9 121.4-106.9 142.6-185.9 5.2-19.5 8.5-39.3 9.8-59l-11.4 6.6z" fill="#ffffff" ></path><path d="M513.5 888.5l-0.1-14.5c2.4 0 4.7 0 7.1-0.1l0.4 14.5c-2.5 0-4.9 0.1-7.4 0.1z m-7.4 0c-2.5 0-4.9-0.1-7.4-0.2l0.5-14.5c2.4 0.1 4.7 0.1 7.1 0.2l-0.2 14.5z m22.2-0.4l-0.6-14.5c2.4-0.1 4.7-0.2 7.1-0.4l0.9 14.5c-2.5 0.2-5 0.3-7.4 0.4z m-36.9-0.2c-2.5-0.1-4.9-0.3-7.4-0.5l1.1-14.4c2.4 0.2 4.7 0.3 7.1 0.4l-0.8 14.5z m51.6-0.7l-1.2-14.4c2.4-0.2 4.7-0.4 7.1-0.7l1.5 14.4c-2.5 0.3-4.9 0.5-7.4 0.7z m-66.3-0.3c-2.4-0.2-4.9-0.5-7.3-0.8l1.6-14.4c2.3 0.3 4.7 0.5 7 0.7l-1.3 14.5z m81-1.2l-1.8-14.4c2.3-0.3 4.7-0.6 7-0.9l2.1 14.3c-2.4 0.3-4.9 0.7-7.3 1z m-95.7-0.5c-2.4-0.3-4.9-0.7-7.3-1l2.2-14.3c2.3 0.4 4.7 0.7 7 1l-1.9 14.3z m110.3-1.6l-2.3-14.3c2.3-0.4 4.7-0.8 7-1.2l2.6 14.3c-2.4 0.4-4.9 0.8-7.3 1.2z m-124.9-0.6c-2.4-0.4-4.8-0.9-7.3-1.3l2.7-14.2c2.3 0.4 4.7 0.9 7 1.3l-2.4 14.2z m139.4-2.1l-2.9-14.2 6.9-1.5 3.2 14.1c-2.4 0.6-4.8 1.1-7.2 1.6z m-153.9-0.7c-2.4-0.5-4.8-1.1-7.2-1.6l3.3-14.1c2.3 0.5 4.6 1.1 6.9 1.5l-3 14.2z m168.3-2.5l-3.5-14.1c2.3-0.6 4.6-1.1 6.9-1.8l3.7 14c-2.3 0.7-4.7 1.3-7.1 1.9z m-182.7-0.9c-2.4-0.6-4.8-1.2-7.1-1.9l3.8-14 6.9 1.8-3.6 14.1z m197-2.9l-4-13.9c2.3-0.7 4.5-1.3 6.8-2l4.3 13.8c-2.4 0.7-4.7 1.4-7.1 2.1z m-211.2-1c-2.4-0.7-4.7-1.4-7.1-2.2l4.4-13.8c2.2 0.7 4.5 1.4 6.8 2.1l-4.1 13.9z m225.3-3.4l-4.6-13.8c2.2-0.7 4.5-1.5 6.7-2.3l4.8 13.7c-2.2 0.8-4.6 1.6-6.9 2.4z m-239.4-1.1c-2.3-0.8-4.7-1.6-7-2.4l4.9-13.6c2.2 0.8 4.5 1.6 6.7 2.3l-4.6 13.7z m253.3-3.8l-5.1-13.6c2.2-0.8 4.4-1.7 6.6-2.6l5.4 13.5-6.9 2.7z m-267.2-1.2l-6.9-2.7 5.5-13.4c2.2 0.9 4.4 1.8 6.6 2.6l-5.2 13.5z m280.9-4.3l-5.6-13.4c2.2-0.9 4.3-1.9 6.5-2.8l5.9 13.2c-2.3 1.1-4.5 2.1-6.8 3z m-294.6-1.3c-2.3-1-4.5-2-6.8-3l6-13.2c2.2 1 4.3 1.9 6.5 2.9l-5.7 13.3z m308.1-4.7l-6.1-13.1c2.1-1 4.3-2 6.4-3.1l6.4 13c-2.3 1.1-4.5 2.2-6.7 3.2z m-321.5-1.4c-2.2-1.1-4.4-2.1-6.6-3.2l6.5-13c2.1 1.1 4.3 2.1 6.4 3.1l-6.3 13.1z m334.7-5.1l-6.7-12.9 6.3-3.3 6.9 12.7c-2.1 1.2-4.3 2.4-6.5 3.5z m-348-1.5c-2.2-1.1-4.4-2.3-6.5-3.5l7-12.7c2.1 1.1 4.2 2.3 6.2 3.4l-6.7 12.8z m361-5.5l-7.1-12.6 2.7-1.6c2.1-1.2 4.1-2.4 6.1-3.6l7.5 12.4c-2.1 1.3-4.2 2.5-6.4 3.7l-2.8 1.7zM323 838c-2.1-1.2-4.3-2.5-6.4-3.8l7.5-12.4c2 1.2 4.1 2.4 6.1 3.6L323 838z m-12.7-7.6c-2.1-1.3-4.2-2.6-6.2-4l8-12.1c2 1.3 4 2.6 6 3.8l-7.8 12.3z m402.1-0.1l-7.7-12.3c2-1.3 4-2.5 6-3.8l8 12.1c-2.2 1.4-4.2 2.7-6.3 4zM298 822.2c-2-1.4-4.1-2.8-6.1-4.2l8.4-11.8c1.9 1.4 3.9 2.7 5.8 4.1l-8.1 11.9z m426.7 0l-8.2-11.9c2-1.3 3.9-2.7 5.8-4.1l8.4 11.8c-1.9 1.4-3.9 2.8-6 4.2z m12-8.6L728 802c1.9-1.4 3.8-2.8 5.7-4.3l8.9 11.5c-1.9 1.5-3.9 3-5.9 4.4z m-450.8 0c-2-1.5-4-3-5.9-4.5l8.9-11.4c1.9 1.5 3.7 2.9 5.7 4.3l-8.7 11.6z m462.5-9l-9.1-11.3c1.8-1.5 3.7-3 5.5-4.5l9.3 11.1c-1.9 1.6-3.8 3.1-5.7 4.7z m-474.2-0.1c-1.9-1.5-3.8-3.1-5.7-4.7l9.3-11.1c1.8 1.5 3.7 3 5.5 4.5l-9.1 11.3z m485.6-9.4l-9.6-10.9c1.8-1.6 3.6-3.2 5.3-4.7l9.7 10.7c-1.8 1.6-3.6 3.2-5.4 4.9z m-496.9-0.1c-1.9-1.6-3.7-3.3-5.5-4.9l9.8-10.7c1.8 1.6 3.5 3.2 5.3 4.7l-9.6 10.9z m507.8-9.9l-10-10.5c1.7-1.6 3.4-3.3 5.1-4.9L776 780c-1.7 1.7-3.5 3.4-5.3 5.1zM252 785c-1.8-1.7-3.5-3.4-5.3-5.1l10.2-10.3c1.7 1.7 3.4 3.3 5.1 5L252 785z m529.3-10.3l-10.4-10.1c1.7-1.7 3.3-3.4 4.9-5.2l10.6 9.9-5.1 5.4z m-539.9-0.1l-5.1-5.4 10.6-9.9c1.6 1.7 3.3 3.5 4.9 5.2l-10.4 10.1z m550-10.7l-10.8-9.7c1.6-1.8 3.2-3.6 4.7-5.4l10.9 9.5c-1.5 1.9-3.2 3.8-4.8 5.6z m-560.1-0.1c-1.7-1.8-3.3-3.7-4.9-5.6l11-9.5c1.6 1.8 3.1 3.6 4.7 5.3l-10.8 9.8z m569.8-11.1l-11.1-9.3c1.5-1.8 3-3.7 4.5-5.5l11.3 9.1c-1.6 1.9-3.1 3.8-4.7 5.7z m-579.4-0.1c-1.6-1.9-3.1-3.8-4.7-5.7l11.3-9c1.5 1.9 3 3.7 4.5 5.5l-11.1 9.2z m588.6-11.5l-11.5-8.8c1.4-1.9 2.9-3.8 4.3-5.7l11.7 8.6c-1.5 2-3 4-4.5 5.9z m-597.9-0.1c-1.5-2-3-3.9-4.4-5.9l11.7-8.6c1.4 1.9 2.8 3.8 4.3 5.7l-11.6 8.8z m606.7-11.8l-11.8-8.3c1.4-1.9 2.7-3.9 4.1-5.9l12 8.1c-1.5 2.1-2.9 4.1-4.3 6.1z m-615.4-0.1c-1.4-2-2.8-4-4.2-6.1l12-8.1c1.3 2 2.7 3.9 4 5.8l-11.8 8.4zM827.4 717l-12.2-7.9c1.3-2 2.6-4 3.8-6l12.3 7.6-3.9 6.3z m-632-0.1c-1.3-2.1-2.7-4.1-3.9-6.2l12.3-7.6c1.3 2 2.5 4 3.8 6l-12.2 7.8z m639.8-12.5l-12.5-7.4c1.2-2 2.4-4.1 3.6-6.1l12.6 7.1c-1.2 2.1-2.5 4.3-3.7 6.4z m-647.6-0.1l-3.7-6.4 12.6-7.1 3.6 6.1-12.5 7.4z m654.9-12.8l-12.7-6.9 3.3-6.3 12.9 6.6c-1.2 2.3-2.3 4.5-3.5 6.6z m-662.2 0c-1.2-2.2-2.3-4.3-3.5-6.5l12.9-6.7 3.3 6.3-12.7 6.9z m-6.7-13.1c-1.1-2.2-2.2-4.4-3.2-6.7l13.1-6.2c1 2.1 2 4.3 3.1 6.4l-13 6.5z m675.7 0l-13-6.4c1.1-2.1 2.1-4.3 3.1-6.4l13.1 6.2c-1.1 2.2-2.2 4.4-3.2 6.6z m-682-13.3c-1-2.2-2-4.5-2.9-6.8l13.3-5.7c0.9 2.2 1.9 4.4 2.8 6.5l-13.2 6z m688.2-0.1l-13.2-5.9c1-2.2 1.9-4.3 2.8-6.5l13.4 5.6c-1 2.3-2 4.6-3 6.8z m-694-13.5l-2.7-6.9 13.6-5.1c0.8 2.2 1.7 4.4 2.6 6.6l-13.5 5.4z m699.8-0.1l-13.5-5.3c0.9-2.2 1.7-4.4 2.6-6.7l13.6 5.1-2.7 6.9z m-705-13.7c-0.8-2.3-1.6-4.7-2.4-7l13.7-4.6c0.7 2.2 1.5 4.5 2.3 6.7l-13.6 4.9z m710.2-0.1l-13.7-4.8c0.8-2.2 1.6-4.5 2.3-6.7l13.7 4.6c-0.7 2.2-1.5 4.5-2.3 6.9z m-714.9-13.9c-0.7-2.4-1.4-4.7-2.1-7.1l13.9-4c0.7 2.3 1.3 4.5 2 6.8l-13.8 4.3z m719.5-0.2l-13.8-4.3c0.7-2.3 1.4-4.5 2-6.8l13.9 4c-0.6 2.4-1.3 4.8-2.1 7.1z m-723.6-14c-0.6-2.4-1.3-4.8-1.8-7.2l14.1-3.5 1.8 6.9-14.1 3.8z m727.7-0.2l-14-3.7 1.8-6.9 14.1 3.5c-0.6 2.4-1.2 4.8-1.9 7.1z m-731.3-14.1c-0.6-2.4-1.1-4.8-1.6-7.2l14.2-2.9 1.5 6.9-14.1 3.2z m734.9-0.2l-14.1-3.2 1.5-6.9 14.2 2.9c-0.6 2.4-1.1 4.8-1.6 7.2z m-737.9-14.3c-0.4-2.4-0.9-4.8-1.3-7.3l14.3-2.4c0.4 2.3 0.8 4.7 1.2 7l-14.2 2.7z m740.9-0.1l-14.2-2.6c0.4-2.3 0.8-4.7 1.2-7l14.3 2.4c-0.5 2.3-0.9 4.7-1.3 7.2z m-743.3-14.5c-0.4-2.4-0.7-4.9-1-7.3l14.4-1.8c0.3 2.3 0.6 4.7 0.9 7l-14.3 2.1z m745.7-0.1l-14.3-2.1c0.3-2.3 0.7-4.7 1-7l14.4 1.8c-0.4 2.4-0.8 4.9-1.1 7.3z m-747.5-14.5c-0.3-2.5-0.5-4.9-0.7-7.4l14.4-1.2c0.2 2.4 0.4 4.7 0.7 7.1l-14.4 1.5z m749.3-0.1l-14.4-1.5c0.2-2.3 0.5-4.7 0.7-7.1l14.4 1.2c-0.2 2.5-0.4 4.9-0.7 7.4z m-750.6-14.6c-0.2-2.5-0.3-4.9-0.4-7.4l14.5-0.7c0.1 2.4 0.2 4.7 0.4 7.1l-14.5 1z m751.9-0.1l-14.5-1c0.2-2.4 0.3-4.7 0.4-7.1l14.5 0.7c-0.1 2.4-0.2 4.9-0.4 7.4zM134.7 522c-0.1-2.5-0.1-4.9-0.1-7.4l14.5-0.1c0 2.4 0.1 4.7 0.1 7.1l-14.5 0.4z m753.3-0.1l-14.5-0.4c0.1-2.4 0.1-4.7 0.1-7.1l14.5 0.1c0 2.5 0 5-0.1 7.4z m-738.9-14.4l-14.5-0.2c0-2.5 0.1-4.9 0.2-7.4l14.5 0.5c-0.1 2.3-0.1 4.7-0.2 7.1z m724.5-0.2c0-2.4-0.1-4.7-0.1-7.1l14.5-0.5c0.1 2.5 0.1 4.9 0.2 7.4l-14.6 0.2z m-724-14l-14.5-0.8c0.1-2.5 0.3-4.9 0.5-7.4l14.4 1c-0.1 2.4-0.3 4.8-0.4 7.2z m723.6-0.2c-0.1-2.4-0.3-4.7-0.4-7.1l14.4-1c0.2 2.5 0.3 4.9 0.5 7.4l-14.5 0.7z m-722.6-14l-14.4-1.3c0.2-2.5 0.5-4.9 0.7-7.4l14.4 1.6c-0.2 2.4-0.5 4.8-0.7 7.1z m721.6-0.1c-0.2-2.4-0.5-4.7-0.7-7.1l14.4-1.6c0.3 2.4 0.5 4.9 0.7 7.3l-14.4 1.4z m-720-14l-14.4-1.8c0.3-2.4 0.7-4.9 1-7.3l14.3 2.2c-0.3 2.2-0.6 4.5-0.9 6.9z m718.5-0.1c-0.3-2.3-0.6-4.7-1-7l14.3-2.2c0.4 2.4 0.7 4.9 1 7.3l-14.3 1.9zM154.3 451l-14.3-2.4c0.4-2.4 0.9-4.9 1.3-7.3l14.2 2.7c-0.4 2.3-0.8 4.6-1.2 7z m714.2-0.2c-0.4-2.3-0.8-4.7-1.3-7l14.2-2.7c0.5 2.4 0.9 4.8 1.3 7.3l-14.2 2.4zM157 437l-14.2-3c0.5-2.4 1-4.8 1.6-7.2l14.1 3.3c-0.6 2.3-1.1 4.6-1.5 6.9z m708.9-0.1l-1.5-6.9 14.1-3.3c0.6 2.4 1.1 4.8 1.6 7.2l-14.2 3z m-705.7-13.7l-14.1-3.5c0.6-2.4 1.2-4.8 1.9-7.2l14 3.8c-0.7 2.3-1.3 4.6-1.8 6.9z m702.5-0.1l-1.8-6.9 14-3.8c0.6 2.4 1.3 4.7 1.9 7.1l-14.1 3.6z m-698.8-13.6l-13.9-4.1c0.7-2.4 1.4-4.7 2.2-7.1l13.8 4.4c-0.8 2.3-1.4 4.5-2.1 6.8z m695-0.1c-0.7-2.3-1.4-4.5-2.1-6.8l13.8-4.4c0.7 2.4 1.5 4.7 2.2 7.1l-13.9 4.1zM168.1 396l-13.7-4.7 2.4-6.9 13.6 4.9c-0.7 2.2-1.5 4.4-2.3 6.7z m686.5-0.2c-0.8-2.2-1.5-4.5-2.3-6.7l13.6-4.9c0.8 2.3 1.7 4.6 2.4 7l-13.7 4.6zM173 382.6l-13.5-5.1 2.7-6.9 13.4 5.4c-0.9 2.1-1.8 4.3-2.6 6.6z m676.8-0.1c-0.8-2.2-1.7-4.4-2.6-6.6l13.4-5.4 2.7 6.9-13.5 5.1z m-671.5-13.1l-13.3-5.7c1-2.3 2-4.5 3-6.8l13.2 5.9c-1 2.2-2 4.4-2.9 6.6z m666.2 0c-0.9-2.2-1.9-4.3-2.9-6.5l13.2-6c1 2.2 2 4.5 3 6.8l-13.3 5.7z m-660.4-13l-13.1-6.2c1.1-2.2 2.1-4.4 3.2-6.6l13 6.4c-1 2.2-2.1 4.3-3.1 6.4z m654.6 0c-1-2.1-2-4.2-3.1-6.4l12.9-6.5c1.1 2.2 2.2 4.4 3.3 6.7l-13.1 6.2z m-6.4-12.7c-1.1-2.1-2.2-4.2-3.4-6.2l12.7-7c1.2 2.2 2.3 4.3 3.5 6.5l-12.8 6.7z m-641.9 0l-12.8-6.7c1.1-2.2 2.3-4.4 3.5-6.5l12.7 6.9c-1.1 2.1-2.3 4.2-3.4 6.3z m635.1-12.4l-0.4-0.7c-1.1-1.9-2.1-3.7-3.2-5.5l12.4-7.5 3.3 5.7 0.4 0.7-12.5 7.3z m-628.2-0.1l-12.6-7.2c1.2-2.1 2.5-4.3 3.7-6.4l12.4 7.5c-1.2 2-2.4 4.1-3.5 6.1z m620.9-12.1c-1.3-2-2.5-4-3.8-6l12.1-7.9c1.3 2.1 2.7 4.1 4 6.2l-12.3 7.7z m-613.6-0.1l-12.3-7.7c1.3-2.1 2.6-4.2 4-6.2l12.1 7.9c-1.3 2-2.6 4-3.8 6z m605.8-11.8c-1.3-2-2.7-3.9-4.1-5.8l11.8-8.4c1.4 2 2.8 4 4.2 6.1l-11.9 8.1z m-598-0.1l-12-8.2c1.4-2 2.8-4.1 4.2-6.1l11.8 8.4c-1.3 2-2.7 4-4 5.9z m589.8-11.4c-1.4-1.9-2.9-3.8-4.3-5.7l11.5-8.8c1.5 1.9 3 3.9 4.4 5.9l-11.6 8.6z m-581.6-0.2l-11.6-8.6c1.5-2 3-4 4.5-5.9l11.5 8.9c-1.5 1.9-2.9 3.7-4.4 5.6z m572.9-11.1c-1.5-1.8-3-3.7-4.5-5.5l11.1-9.3c1.6 1.9 3.1 3.8 4.7 5.7l-11.3 9.1z m-564.2-0.1l-11.3-9.1c1.5-1.9 3.1-3.8 4.7-5.7l11.1 9.3c-1.5 1.8-3 3.7-4.5 5.5z m555.1-10.8c-1.6-1.8-3.1-3.6-4.7-5.3l10.7-9.8c1.7 1.8 3.3 3.7 4.9 5.6l-10.9 9.5z m-545.9-0.1l-10.9-9.5c1.6-1.9 3.3-3.7 4.9-5.5l10.7 9.7c-1.6 1.7-3.2 3.5-4.7 5.3z m536.3-10.5c-1.6-1.7-3.3-3.4-4.9-5.1l10.4-10.1c1.7 1.8 3.4 3.5 5.1 5.3l-10.6 9.9z m-526.8 0l-10.5-10c1.7-1.8 3.4-3.6 5.1-5.3l10.3 10.2c-1.6 1.6-3.2 3.4-4.9 5.1z m516.8-10.1c-1.7-1.7-3.4-3.3-5.1-4.9l10-10.5c1.8 1.7 3.6 3.4 5.3 5.1l-10.2 10.3z m-506.8-0.1l-10.1-10.4c1.8-1.7 3.6-3.4 5.3-5.1l9.9 10.6c-1.7 1.6-3.4 3.3-5.1 4.9z m496.4-9.7c-1.8-1.6-3.5-3.2-5.3-4.7l9.5-10.9c1.9 1.6 3.7 3.3 5.5 4.9l-9.7 10.7z m-486 0l-9.7-10.7c1.8-1.7 3.7-3.3 5.6-4.9l9.5 11c-1.8 1.4-3.6 3-5.4 4.6z m475.3-9.3c-1.8-1.5-3.7-3-5.5-4.5l9.1-11.3c1.9 1.5 3.8 3.1 5.7 4.7l-9.3 11.1z m-464.5-0.1l-9.3-11.1c1.9-1.6 3.8-3.1 5.7-4.7l9.1 11.3c-1.9 1.5-3.7 3-5.5 4.5z m453.4-8.8c-1.9-1.5-3.8-2.9-5.7-4.3l8.6-11.6c2 1.5 3.9 3 5.9 4.5l-8.8 11.4z m-442.3 0l-8.8-11.5c1.9-1.5 3.9-3 5.9-4.4l8.6 11.7c-2 1.3-3.8 2.7-5.7 4.2z m11.4-8.5l-8.4-11.8c2-1.4 4-2.8 6.1-4.2l8.1 12c-1.9 1.3-3.9 2.7-5.8 4z m419.5 0c-1.9-1.4-3.9-2.7-5.8-4.1l8.1-12c2 1.4 4.1 2.8 6.1 4.2l-8.4 11.9z m-407.7-7.9l-7.9-12.1c2.1-1.3 4.1-2.7 6.2-4l7.7 12.3c-2.1 1.2-4.1 2.5-6 3.8z m395.9-0.1c-2-1.3-4-2.6-6-3.8l7.7-12.3c2.1 1.3 4.2 2.6 6.2 4l-7.9 12.1z m-383.9-7.5l-7.4-12.4c1.6-1 3.3-1.9 4.9-2.9l1.4-0.8 7.2 12.6-1.3 0.8-4.8 2.7z m371.8 0c-2-1.2-4.1-2.4-6.2-3.6l7.2-12.6c2.1 1.2 4.3 2.5 6.4 3.7l-7.4 12.5z m-359.5-7l-6.9-12.7c2.2-1.2 4.3-2.3 6.5-3.5l6.7 12.8c-2.1 1.1-4.2 2.2-6.3 3.4z m347.2-0.1l-6.3-3.3 6.7-12.8c2.2 1.1 4.4 2.3 6.5 3.5l-6.9 12.6z m-334.6-6.5l-6.5-13c2.2-1.1 4.4-2.2 6.6-3.2l6.2 13.1c-2 1-4.2 2.1-6.3 3.1z m322 0c-2.1-1.1-4.3-2.1-6.4-3.1l6.2-13.1c2.2 1.1 4.4 2.1 6.7 3.2l-6.5 13z m-309.2-6.1l-5.9-13.2c2.2-1 4.5-2 6.8-3l5.7 13.3c-2.2 1-4.4 2-6.6 2.9z m296.3 0c-2.2-1-4.3-1.9-6.5-2.8l5.6-13.3c2.3 1 4.5 1.9 6.8 3l-5.9 13.1z m-13.1-5.5c-2.2-0.9-4.4-1.7-6.6-2.6l5.1-13.6 6.9 2.7-5.4 13.5z m-270.1 0l-5.4-13.4 6.9-2.7L383 173c-2.3 0.8-4.5 1.7-6.7 2.6z m256.8-5c-2.2-0.8-4.5-1.6-6.7-2.3l4.6-13.7c2.3 0.8 4.6 1.6 7 2.4l-4.9 13.6z m-243.6-0.1l-4.9-13.6c2.3-0.8 4.6-1.6 7-2.4l4.6 13.7c-2.2 0.8-4.4 1.5-6.7 2.3z m230.2-4.4c-2.3-0.7-4.5-1.4-6.8-2.1l4.1-13.9c2.4 0.7 4.7 1.4 7.1 2.1l-4.4 13.9zM403 166l-4.4-13.8c2.3-0.7 4.7-1.5 7.1-2.1l4.1 13.9c-2.3 0.6-4.5 1.3-6.8 2z m203-3.9l-6.9-1.8 3.5-14.1c2.4 0.6 4.8 1.2 7.1 1.9l-3.7 14z m-189.4-0.1l-3.8-14c2.4-0.6 4.8-1.3 7.1-1.9l3.5 14.1c-2.2 0.6-4.5 1.2-6.8 1.8z m175.7-3.4l-6.9-1.5 3-14.2c2.4 0.5 4.8 1 7.2 1.6l-3.3 14.1z m-161.9 0l-3.2-14.1c2.4-0.6 4.8-1.1 7.2-1.6l3 14.2c-2.4 0.4-4.7 0.9-7 1.5z m148-2.9c-2.3-0.4-4.7-0.9-7-1.2l2.4-14.3c2.4 0.4 4.9 0.8 7.3 1.3l-2.7 14.2z m-134.1 0l-2.7-14.2c2.4-0.5 4.8-0.9 7.3-1.3l2.4 14.3c-2.4 0.3-4.7 0.7-7 1.2z m120.1-2.3c-2.3-0.3-4.7-0.7-7-1l1.8-14.4c2.4 0.3 4.9 0.7 7.3 1l-2.1 14.4z m-106.1-0.1l-2.1-14.3c2.4-0.4 4.9-0.7 7.3-1l1.8 14.4c-2.4 0.2-4.7 0.6-7 0.9z m92-1.7c-2.3-0.3-4.7-0.5-7.1-0.7l1.3-14.4c2.5 0.2 4.9 0.5 7.4 0.7l-1.6 14.4z m-78-0.1l-1.6-14.4c2.4-0.3 4.9-0.5 7.4-0.7l1.3 14.4c-2.3 0.2-4.7 0.5-7.1 0.7z m63.8-1.2c-2.4-0.2-4.7-0.3-7.1-0.4l0.7-14.5c2.5 0.1 4.9 0.3 7.4 0.4l-1 14.5z m-49.6 0l-1-14.5c2.4-0.2 4.9-0.3 7.4-0.4l0.7 14.5c-2.4 0.1-4.8 0.2-7.1 0.4z m35.5-0.7c-2.4-0.1-4.7-0.1-7.1-0.1l0.1-14.5c2.5 0 4.9 0.1 7.4 0.2l-0.4 14.4z m-21.3 0l-0.4-14.5c2.5-0.1 4.9-0.1 7.4-0.1l0.1 14.5c-2.4 0-4.8 0-7.1 0.1zM278.3 644.7l30.4 52.7c4.2 7.2 9.8 8.9 17 4.7l89.9-51.9c3.9-2.2 6.6-5.2 7.8-8.7 1.3-5-3-17.4-13.3-37.3l14.5-3.2c10.8 22.8 15.5 37.4 14.3 44.2-1.7 5.9-5.9 10.9-12.7 15.3l-97 56c-13.4 7.7-23.9 4.4-31.8-9.3L244 614.6l12.6-7.3 14.6 25.3 96.1-55.5-26.3-45.9-118.2 68.3-7.1-12.3 131-75.7 40.6 70.3-109 62.9z m141.4-120.3l-14.8-0.6c3.2-19.6 2.6-39-1.8-58l13.8-4.5c1.2 5.4 2.1 10.5 2.9 15.6l46.2-26.7 6.5 11.2-25.3 14.6c6.4 4.5 12.2 8.9 17 13.2l-9.2 10.9c-6.5-6.1-13.3-11.7-20.5-16.8l-13.4 7.7c0.6 11.7 0.1 22.7-1.4 33.4z m68.1-48.4c31 3.4 63.6 1.5 97.5-5.9l0.1 14.4c-34.5 6.8-66.2 8.2-95.7 4.2-10.1 25.5-27.4 52.4-51.8 80.7l-12.3-7.4c24.3-27.6 42.4-54.7 54-81.3l8.2-4.7z m63.9 14.6l6.5 11.2-91.2 52.7-6.5-11.2 91.2-52.7zM507.6 587l-9.7 9.6c-10-9.2-20.8-17.3-32.3-24.2l9.3-10.3c10.6 6.5 21.6 15 32.7 24.9z m64.3-79.3c3.9 17.2 5.8 33.6 5.9 49.1l37.8-21.8 6.8 11.8-148.3 85.6-6.8-11.8 97-56c0-15.9-2.3-33.6-6.6-53.1l14.2-3.8z m-77-36.1l-14.7-0.7c1.8-16 0.6-31.8-3.6-47.6l13.6-4.4c1.2 5.4 2.3 10.4 3.3 15.4l51.3-29.6 6.5 11.2-27.9 16.1c7.7 4.4 14.3 8.9 20 13.5l-9.2 10.9c-7.7-6.1-15.7-11.8-23.8-16.9l-15.3 8.8c0.4 8.2 0.4 15.9-0.2 23.3z m49.7 92.2l-9.5 9.5c-9.9-10.2-20.2-19.5-31-27.8l9.5-10.4c9.8 7.9 20.2 17.4 31 28.7z m104.7-229.1l6.9 11.9-45.1 26.1c1.7 22.4 1.4 40.2-0.8 53.4 16.4-11.8 31.7-23.4 45.9-35.4-7.5-4.1-15.6-7.9-24.1-11.6l6-11.9c20.9 9 37.9 17.7 51 25.8l-6.3 13.5c-4.9-3.2-10-6.4-15.6-9.5-19.9 16.6-42.4 34.1-67.2 51.9l-9.6-9.7c1.9-1.6 3.5-2.9 4.4-4.2 3.6-10.5 4.6-28.6 2.9-54.6L568.9 397l-6.9-11.9 87.3-50.4z m79.5 136.1c-23.8 21.2-50.1 43-79.2 64.9l-9.8-10.5c13.1-9.7 25.8-19.4 38-29.2l-19.2-33.2-34.3 19.8-7.1-12.3 34.3-19.8-11.8-20.4 12.6-7.3 11.8 20.4 31.6-18.3 7.1 12.3-31.6 18.3 18 31.1c11.3-9.3 22-18.8 32.4-28.3l7.2 12.5zM681 327.9l62.8 108.7-12.3 7.1L668.7 335l12.3-7.1z m76.5 146.7l-9.9-10.7c8.6-4.5 16.9-8.8 24.6-13.3 4.9-2.8 6-7 3.1-12.1l-80.6-139.7 12.8-7.4L790 434.3c6.2 10.7 3.9 19.3-6.7 25.4l-25.8 14.9z" fill="#ffffff" ></path></symbol><symbol id="icon-richangxuncha" viewBox="0 0 1024 1024"><path d="M240.653598 317.09229c4.318764 16.292014 5.854079 32.164301 11.233205 51.250809a1046.146093 1046.146093 0 0 0 18.258101 58.386158 755.982569 755.982569 0 0 0 23.040773 58.905294c8.626483 19.406826 14.745653 35.411658 24.774907 52.366398v419.726453l-265.090392 66.272598V360.909522L240.653598 317.09229z m143.590629 309.272123c20.743323 22.576865 44.369504 42.933598 63.997238 61.324244a3557.656642 3557.656642 0 0 0 53.139578 48.820814c18.567373 16.247832 32.164301 31.799802 48.544678 44.491004 8.571256-7.046986 22.267593-16.236786 33.003754-25.470769a540.453035 540.453035 0 0 0 32.186392-29.668033c12.11684-12.028477 18.467964-29.469215 34.218751-44.281141v342.408423l-265.090391-66.272598V626.364413z m596.45338-332.290806v663.653795l-265.090391 66.272598v-408.68102c4.318764-4.263537 5.22449-6.317988 9.156664-10.912888 3.910083-4.561764 8.052121-9.024119 12.326703-13.254519 14.336972-15.518833 27.569401-34.130388 39.697286-55.691073a555.784096 555.784096 0 0 0 32.7718-68.934548 985.760711 985.760711 0 0 0 25.78004-73.209129c7.510894-24.432498 14.127109-47.208181 19.848643-68.426458l125.509255-30.816758z" fill="#009AFF" ></path><path d="M313.730183 266.029253c0-3.468266-0.176727-6.826078-0.541227-10.018208a94.703542 94.703542 0 0 1-0.497044-9.96298c0-31.589938 6.097079-61.103335 18.368555-88.507055a234.737542 234.737542 0 0 1 49.848039-72.203995c20.997368-20.754369 45.463002-37.046382 73.47422-48.997541 27.967036-11.940113 58.076887-17.937783 90.252233-17.937783 32.186392 0 62.25206 5.99767 90.30746 17.937783 27.922855 11.940113 52.476852 28.243172 73.47422 48.997541a236.847219 236.847219 0 0 1 49.848039 72.203995c12.23834 27.370583 18.324373 56.861889 18.324373 88.507055v12.613884c0 4.241446-0.331363 8.471847-1.03827 12.658067-4.230401 37.256245-12.404021 72.877767-24.675498 106.952927a562.610174 562.610174 0 0 1-46.677999 98.48108 704.698624 704.698624 0 0 1-65.123873 91.146913 1053.955214 1053.955214 0 0 1-78.742892 83.768564c-4.882081 4.904172-10.106571 7.378349-15.739742 7.378349-5.588989 0-10.846615-2.474177-15.739742-7.378349a896.171204 896.171204 0 0 1-79.781162-84.320835 691.996376 691.996376 0 0 1-65.090737-92.704319 578.813824 578.813824 0 0 1-46.633818-100.568668 453.724296 453.724296 0 0 1-23.615135-108.046425zM544.679141 149.113345c-14.0277 0-26.928766 2.474177-38.824697 7.367304a93.455408 93.455408 0 0 0-30.98244 20.577642c-8.725892 8.759028-15.739742 19.152781-20.953186 31.092893s-7.842257 24.553997-7.842257 37.930017c0 13.364974 2.628813 25.989904 7.842257 37.930017a100.259395 100.259395 0 0 0 20.953186 31.081848 93.687362 93.687362 0 0 0 30.98244 20.53346c11.895931 4.904172 24.808042 7.378349 38.824697 7.37835s27.138629-2.474177 39.365923-7.37835a92.196229 92.196229 0 0 0 31.479484-20.53346 101.28662 101.28662 0 0 0 20.997368-31.081848 92.803728 92.803728 0 0 0 7.842257-37.930017 93.676317 93.676317 0 0 0-7.842257-37.930017c-5.257626-11.940113-12.271476-22.300729-20.997368-31.092893s-19.241144-15.673469-31.479484-20.577642a104.931613 104.931613 0 0 0-39.365923-7.367304z" fill="#FF2121" ></path></symbol><symbol id="icon-right" viewBox="0 0 1024 1024"><path d="M765.7 486.8L314.9 134.7c-5.3-4.1-12.9-0.4-12.9 6.3v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1c16.4-12.8 16.4-37.6 0-50.4z"  ></path></symbol><symbol id="icon-ppt1" viewBox="0 0 1024 1024"><path d="M179 64h468.5l223 225.5V935c0 13.807-11.193 25-25 25H179c-13.807 0-25-11.193-25-25V89c0-13.807 11.193-25 25-25z" fill="#FF7861" ></path><path d="M647.5 64v200.5c0 13.807 11.193 25 25 25h198L647.5 64z" fill="#FFB0A4" ></path><path d="M670.098 478.093C677.884 486.056 682 497.51 682 514.5c0 16.989-4.116 28.444-11.902 36.407-8.313 8.504-22.397 14.822-43.202 18.093H318c-19.33 0-35 15.67-35 35v157c0 19.33 15.67 35 35 35s35-15.67 35-35V639h276.5a35 35 0 0 0 4.95-0.352C709.214 627.968 752 584.203 752 514.5s-42.786-113.468-117.55-124.148a35 35 0 0 0-4.95-0.352H318c-19.33 0-35 15.67-35 35s15.67 35 35 35h308.896c20.805 3.271 34.889 9.589 43.202 18.093z" fill="#FFFFFF" ></path></symbol><symbol id="icon-excel1" viewBox="0 0 1024 1024"><path d="M179 64h468.5l223 225.5V935c0 13.807-11.193 25-25 25H179c-13.807 0-25-11.193-25-25V89c0-13.807 11.193-25 25-25z" fill="#00C090" ></path><path d="M647.5 64v200.5c0 13.807 11.193 25 25 25h198L647.5 64z" fill="#68DBBF" ></path><path d="M677.007 388.282L297.22 769.07c-13.65 13.685-13.623 35.846 0.062 49.497 13.685 13.652 35.846 13.624 49.498-0.061l379.786-380.787c13.652-13.685 13.624-35.846-0.061-49.498-13.686-13.65-35.846-13.623-49.498 0.062z" fill="#FFFFFF" ></path><path d="M297.22 436.718l379.787 380.787c13.652 13.685 35.812 13.713 49.498 0.061 13.685-13.651 13.713-35.812 0.061-49.497L346.78 387.282c-13.652-13.685-35.813-13.713-49.498-0.062-13.685 13.652-13.713 35.813-0.062 49.498z" fill="#FFFFFF" ></path></symbol><symbol id="icon-word1" viewBox="0 0 1024 1024"><path d="M179 64h468.5l223 225.5V935c0 13.807-11.193 25-25 25H179c-13.807 0-25-11.193-25-25V89c0-13.807 11.193-25 25-25z" fill="#4A8DFF" ></path><path d="M647.5 64v200.5c0 13.807 11.193 25 25 25h198L647.5 64z" fill="#E5F0FF" ></path><path d="M693.153 784.6C714.698 808.196 754 792.953 754 761V389h-70v281.758L544.847 518.35c-13.879-15.201-37.815-15.201-51.694 0L354 670.758V389h-70v372c0 31.954 39.302 47.197 60.847 23.6L519 593.857 693.153 784.6z" fill="#FFFFFF" ></path></symbol><symbol id="icon-pdf1" viewBox="0 0 1024 1024"><path d="M179 64h468.5l223 225.5V935c0 13.807-11.193 25-25 25H179c-13.807 0-25-11.193-25-25V89c0-13.807 11.193-25 25-25z" fill="#FF4867" ></path><path d="M647.5 64v200.5c0 13.807 11.193 25 25 25h198L647.5 64z" fill="#FF97A9" ></path><path d="M691.919 812c-44.4 0-84.22-76.189-105.17-125.732-35.243-14.71-74.092-28.45-111.831-37.331-33.022 21.788-89.214 54.4-132.365 54.4-26.778 0-46.064-13.461-53.14-36.914-5.411-19.29-0.832-32.613 4.995-39.83 11.377-15.543 34.825-23.453 69.929-23.453 28.443 0 64.517 4.996 104.754 14.71 25.945-18.457 52.307-39.829 75.756-62.45-10.406-49.404-21.784-129.479 7.076-166.393 14.29-17.625 36.074-23.454 62.436-15.543 28.86 8.326 39.82 25.951 43.15 39.829 12.21 48.155-43.15 113.103-80.473 151.267 8.325 33.029 19.286 67.862 32.606 99.78 53.556 23.87 117.24 59.536 124.456 98.394 2.913 13.461-1.249 25.951-12.21 36.915-9.435 7.771-19.425 12.351-29.97 12.351zM652 728c9.768 21.74 19.081 32 23.99 32 0.76 0 1.823-0.333 3.341-1.664 1.822-1.996 1.822-3.327 1.518-4.547-1.012-5.713-9.262-15.085-28.849-25.789z m-281.922-88c-15.62 0-19.913 3.774-21.22 5.535-0.373 0.566-1.493 2.264-0.373 6.666 0.933 3.774 3.547 7.799 11.636 7.799 10.143 0 24.829-5.723 41.879-15.975-12.196-2.704-22.962-4.025-31.922-4.025zM523 620.582c9.333 2.6 19.01 5.951 28 9.418-3.264-8.551-5.898-17.449-8.13-26A629.121 629.121 0 0 1 523 620.582zM588.966 433c-3.32 0-5.649 1.229-7.745 3.511-6.173 7.783-6.872 27.386-2.097 52.489 18.111-19.427 27.953-37.275 25.507-46.813-0.35-1.404-1.398-5.676-9.842-8.134-2.33-0.702-4.076-1.053-5.823-1.053z" fill="#FFFFFF" ></path></symbol><symbol id="icon-wenjianjia" viewBox="0 0 1024 1024"><path d="M918.673 883H104.327C82.578 883 65 867.368 65 848.027V276.973C65 257.632 82.578 242 104.327 242h814.346C940.422 242 958 257.632 958 276.973v571.054C958 867.28 940.323 883 918.673 883z" fill="#FFE9B4" ></path><path d="M512 411H65V210.37C65 188.597 82.598 171 104.371 171h305.92c17.4 0 32.71 11.334 37.681 28.036L512 411z" fill="#FFB02C" ></path><path d="M918.673 883H104.327C82.578 883 65 865.42 65 843.668V335.332C65 313.58 82.578 296 104.327 296h814.346C940.422 296 958 313.58 958 335.332v508.336C958 865.32 940.323 883 918.673 883z" fill="#FFCA28" ></path></symbol><symbol id="icon-location" viewBox="0 0 1024 1024"><path d="M854.6 289.1c-18.8-43.4-45.7-82.3-79.9-115.7-34.2-33.4-73.9-59.5-118.2-77.8C610.7 76.6 562.1 67 512 67c-50.1 0-98.7 9.6-144.5 28.5-44.3 18.3-84 44.5-118.2 77.8-34.2 33.4-61.1 72.4-79.9 115.7-19.5 45-29.4 92.8-29.4 142 0 70.6 16.9 140.9 50.1 208.7 26.7 54.5 64 107.6 111 158.1 80.3 86.2 164.5 138.9 188.4 153 6.9 4.1 14.7 6.1 22.4 6.1 7.8 0 15.5-2 22.4-6.1 23.9-14.1 108.1-66.8 188.4-153 47-50.4 84.3-103.6 111-158.1C867.1 572 884 501.8 884 431.1c0-49.2-9.9-97-29.4-142zM512 880.2c-65.9-41.9-300-207.8-300-449.1 0-77.9 31.1-151.1 87.6-206.3C356.3 169.5 431.7 139 512 139s155.7 30.5 212.4 85.9C780.9 280 812 353.2 812 431.1c0 241.3-234.1 407.2-300 449.1z"  ></path><path d="M512 263c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176z m79.2 255.2C570 539.3 541.9 551 512 551c-29.9 0-58-11.7-79.2-32.8C411.7 497 400 468.9 400 439c0-29.9 11.7-58 32.8-79.2C454 338.6 482.1 327 512 327c29.9 0 58 11.6 79.2 32.8C612.4 381 624 409.1 624 439c0 29.9-11.6 58-32.8 79.2z"  ></path></symbol><symbol id="icon-Field-time" viewBox="0 0 1024 1024"><path d="M945 412H689c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h256c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM811 548H689c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h122c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM477.3 322.5H434c-6.2 0-11.2 5-11.2 11.2v248c0 3.6 1.7 6.9 4.6 9l148.9 108.6c5 3.6 12 2.6 15.6-2.4l25.7-35.1v-0.1c3.6-5 2.5-12-2.5-15.6l-126.7-91.6V333.7c0.1-6.2-5-11.2-11.1-11.2z"  ></path><path d="M804.8 673.9H747c-5.6 0-10.9 2.9-13.9 7.7-12.7 20.1-27.5 38.7-44.5 55.7-29.3 29.3-63.4 52.3-101.3 68.3-39.3 16.6-81 25-124 25-43.1 0-84.8-8.4-124-25-37.9-16-72-39-101.3-68.3s-52.3-63.4-68.3-101.3c-16.6-39.2-25-80.9-25-124 0-43.1 8.4-84.7 25-124 16-37.9 39-72 68.3-101.3 29.3-29.3 63.4-52.3 101.3-68.3 39.2-16.6 81-25 124-25 43.1 0 84.8 8.4 124 25 37.9 16 72 39 101.3 68.3 17 17 31.8 35.6 44.5 55.7 3 4.8 8.3 7.7 13.9 7.7h57.8c6.9 0 11.3-7.2 8.2-13.3-65.2-129.7-197.4-214-345-215.7-216.1-2.7-395.6 174.2-396 390.1C71.6 727.5 246.9 903 463.2 903c149.5 0 283.9-84.6 349.8-215.8 3.1-6.1-1.4-13.3-8.2-13.3z"  ></path></symbol><symbol id="icon-gengduo" viewBox="0 0 1024 1024"><path d="M167.253 733.867H844.8l88.747 109.226c30.72 39.254 17.066 69.974-34.134 69.974h-793.6c-49.493 0-63.146-30.72-32.426-68.267l93.866-110.933zM435.2 158.72c44.373 0 58.027 29.013 58.027 49.493v235.52c0 20.48-25.6 42.667-47.787 42.667H199.68c-22.187 0-39.253-22.187-39.253-42.667V196.267c0-20.48 17.066-37.547 39.253-37.547H435.2z" fill="#DAE9FF" ></path><path d="M803.84 523.947c46.08 0 59.733 30.72 59.733 49.493v235.52c0 18.773-15.36 35.84-35.84 35.84h-235.52c-18.773 0-35.84-15.36-35.84-35.84V573.44c0-18.773 15.36-35.84 35.84-35.84l211.627-13.653z m-365.227 0c51.2 5.12 61.44 30.72 61.44 49.493v235.52c0 18.773-15.36 35.84-35.84 35.84h-235.52c-18.773 0-35.84-15.36-35.84-35.84V573.44c0-18.773 15.36-35.84 35.84-35.84l209.92-13.653z" fill="#DAE9FF" ></path><path d="M431.787 158.72c18.773 0 35.84 15.36 35.84 35.84v235.52c0 18.773-15.36 35.84-35.84 35.84H194.56c-18.773 0-35.84-15.36-35.84-35.84V194.56c0-18.773 15.36-35.84 35.84-35.84h237.227zM793.6 520.533c18.773 0 35.84 15.36 35.84 35.84v235.52c0 18.774-15.36 35.84-35.84 35.84H558.08c-18.773 0-35.84-15.36-35.84-35.84v-235.52c0-18.773 15.36-35.84 35.84-35.84H793.6z m-361.813 0c18.773 0 35.84 15.36 35.84 35.84v235.52c0 18.774-15.36 35.84-35.84 35.84H194.56c-18.773 0-35.84-15.36-35.84-35.84v-235.52c0-18.773 15.36-35.84 35.84-35.84h237.227z" fill="#3889FF" ></path><path d="M899.413 223.573l-194.56-102.4c-17.066-10.24-71.68-3.413-80.213 15.36l-90.453 223.574c-8.534 17.066-3.414 39.253 15.36 49.493l184.32 105.813c42.666 17.067 68.266-1.706 76.8-18.773L916.48 295.253c10.24-18.773 10.24-58.026-17.067-71.68z" fill="#FFD6C2" ></path><path d="M868.693 233.813L658.773 122.88c-17.066-8.533-39.253-1.707-47.786 15.36L500.053 348.16c-8.533 17.067-1.706 39.253 15.36 47.787l209.92 110.933c17.067 8.533 39.254 1.707 47.787-15.36L884.053 281.6c8.534-17.067 1.707-37.547-15.36-47.787z" fill="#FB560A" ></path></symbol><symbol id="icon-xiaochex" viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#FFFFFF" ></path><path d="M758.4 332.8h18.4c14.4 0 26.4 12 26.4 26.4v27.2c0 14.4-12 26.4-26.4 26.4h-18.4c-14.4 0-26.4-12-26.4-26.4v-27.2c0-14.4 12-26.4 26.4-26.4z" fill="#FFFFFF" ></path><path d="M776.8 425.6h-18.4c-21.6 0-39.2-17.6-39.2-39.2v-27.2c0-21.6 17.6-39.2 39.2-39.2h18.4c21.6 0 39.2 17.6 39.2 39.2v27.2c0 21.6-17.6 39.2-39.2 39.2z m-18.4-80c-7.2 0-13.6 6.4-13.6 13.6v27.2c0 7.2 6.4 13.6 13.6 13.6h18.4c7.2 0 13.6-6.4 13.6-13.6v-27.2c0-7.2-6.4-13.6-13.6-13.6h-18.4z" fill="#333333" ></path><path d="M231.2 332.8h18.4c14.4 0 26.4 12 26.4 26.4v27.2c0 14.4-12 26.4-26.4 26.4h-18.4c-14.4 0-26.4-12-26.4-26.4v-27.2c0-14.4 12-26.4 26.4-26.4z" fill="#FFFFFF" ></path><path d="M249.6 425.6h-18.4c-21.6 0-39.2-17.6-39.2-38.4V360c0-22.4 17.6-40 39.2-40h18.4c21.6 0 39.2 17.6 39.2 39.2v27.2c0 21.6-17.6 39.2-39.2 39.2z m-18.4-80c-7.2 0-13.6 6.4-13.6 13.6v27.2c0 7.2 6.4 13.6 13.6 13.6h18.4c7.2 0 13.6-6.4 13.6-13.6v-27.2c0-7.2-6.4-13.6-13.6-13.6h-18.4zM277.6 758.4V792c0 18.4 14.4 32.8 32.8 32.8s32.8-14.4 32.8-32.8v-32.8h-65.6z" fill="#333333" ></path><path d="M310.4 840c-26.4 0-48-21.6-48-48v-48.8h96.8V792c0 26.4-21.6 48-48.8 48z m-16.8-65.6V792c0 9.6 8 17.6 17.6 17.6 9.6 0 17.6-8 17.6-17.6v-17.6h-35.2zM673.6 758.4V792c0 18.4 14.4 32.8 32.8 32.8s32.8-14.4 32.8-32.8v-32.8h-65.6z" fill="#333333" ></path><path d="M706.4 840c-26.4 0-48-21.6-48-48v-48.8h96.8V792c-0.8 26.4-22.4 48-48.8 48z m-17.6-65.6V792c0 9.6 8 17.6 17.6 17.6s17.6-8 17.6-17.6v-17.6h-35.2z" fill="#333333" ></path><path d="M781.6 660.8l-8-2.4L734.4 200c-0.8-6.4-4.8-12-11.2-13.6-71.2-19.2-142.4-29.6-213.6-29.6-71.2 0-146.4 9.6-224.8 29.6-6.4 1.6-11.2 7.2-11.2 13.6l-31.2 457.6-8 2.4c-12.8 4-20.8 16-20.8 29.6v44c0 17.6 13.6 31.2 31.2 31.2h527.2c17.6 0 31.2-13.6 31.2-31.2v-44c0-12.8-8.8-24.8-21.6-28.8z" fill="#FFB900" ></path><path d="M772 778.4H244.8c-24 0-44-20-44-44v-44c0-19.2 12-35.2 29.6-41.6l30.4-449.6c0.8-12 9.6-22.4 21.6-25.6 79.2-19.2 155.2-29.6 228-29.6 72 0 144.8 10.4 216.8 29.6 11.2 3.2 20 12.8 20.8 24.8L785.6 648c18.4 5.6 30.4 22.4 30.4 41.6v44c0 24.8-20 44.8-44 44.8zM510.4 169.6c-70.4 0-144.8 9.6-221.6 29.6-0.8 0-1.6 0.8-1.6 2.4l-32 465.6-16 5.6c-7.2 2.4-12.8 9.6-12.8 17.6v44c0 10.4 8 18.4 18.4 18.4h527.2c10.4 0 18.4-8 18.4-18.4v-44c0-8-4.8-15.2-12.8-17.6l-16-4.8-40-467.2c0-0.8-0.8-1.6-1.6-2.4-69.6-19.2-140-28.8-209.6-28.8z" fill="#333333" ></path><path d="M387.2 252.8c-8 0-15.2 6.4-16 14.4l-26.4 270.4v1.6c0 8.8 7.2 16 16 16H652c8.8-0.8 15.2-8.8 14.4-17.6L640 267.2c-0.8-8-8-14.4-16-14.4H387.2z" fill="#FFFFFF" ></path><path d="M650.4 568H360.8c-15.2 0-28-12.8-28-28v-2.4l26.4-270.4c1.6-14.4 13.6-25.6 28-25.6H624c14.4 0 26.4 11.2 28 25.6l26.4 270.4c1.6 15.2-9.6 29.6-25.6 30.4h-2.4zM387.2 264.8c-2.4 0-4 1.6-4 4l-26.4 270.4c0 2.4 1.6 4.8 4 4.8h289.6c2.4 0 4-2.4 4-4.8l-26.4-270.4c0-2.4-1.6-4-4-4H387.2z" fill="#333333" ></path><path d="M280 692a44 44 0 1 0 88 0 44 44 0 1 0-88 0Z" fill="#FF7400" ></path><path d="M656 692a44 44 0 1 0 88 0 44 44 0 1 0-88 0Z" fill="#FF7400" ></path><path d="M613.6 557.6c4.8-4 5.6-12 1.6-16.8L528 432.8c-4-4.8-12-5.6-16.8-1.6-4.8 4-5.6 12-1.6 16.8l87.2 108c4 4.8 11.2 5.6 16.8 1.6z" fill="#333333" ></path><path d="M509.6 557.6c4.8-4 5.6-12 1.6-16.8L424 432.8c-4-4.8-12-5.6-16.8-1.6-4.8 4-5.6 12-1.6 16.8l87.2 108c4 4.8 11.2 5.6 16.8 1.6z" fill="#333333" ></path></symbol><symbol id="icon-mbe-aixin" viewBox="0 0 1096 1024"><path d="M825.43333333 154.2c13.1 0 27 0.7 41.9 2.2 90.7 8.9 195.6 91.9 208.4 251.1v53c-11 141.2-110.6 312.9-392.7 524.9-41.6 31.2-99.1 31.2-140.6 0-282.1-212-381.6-383.8-392.7-524.9v-53c12.8-159.1 117.7-242.2 208.4-251.1 14.9-1.5 28.9-2.2 41.9-2.2 104.8 0 155.1 45.3 212.7 113.9 57.6-68.6 107.9-113.9 212.7-113.9" fill="#15c9be" ></path><path d="M523.56666667 1024c-28.9 0-56.4-9.2-79.5-26.5-29.1-21.9-56.9-43.8-82.8-65.3-6.5-5.4-7.3-15-2-21.4 5.4-6.5 15-7.3 21.4-2 25.5 21.2 52.9 42.8 81.6 64.4 36 27.1 86.3 27.1 122.3 0 247.4-186 373.9-353.9 386.6-513.4V408C958.76666667 257.4 861.66666667 179.8 776.46666667 171.5c-14.2-1.4-27.8-2.1-40.5-2.1-102.1 0-147.7 45-201 108.5-2.9 3.4-7.2 5.4-11.7 5.4s-8.8-2-11.7-5.4c-53.3-63.5-98.9-108.5-201-108.5-12.6 0-26.2 0.7-40.5 2.1-85.2 8.3-182.3 85.9-194.6 236.5v51.8c5.8 72.2 36 147.8 89.9 224.9 4.8 6.9 3.1 16.4-3.7 21.2-6.9 4.8-16.4 3.1-21.2-3.7-29.6-42.3-52.7-84.6-68.6-125.8-14.8-38.5-23.9-77.1-26.8-114.8V406.2c6.1-76.4 33.5-142.5 79-191.1 20.2-21.5 43.3-39 68.6-51.8 24.2-12.2 49.3-19.7 74.4-22.1 15.2-1.5 29.8-2.2 43.4-2.2 52.3 0 94.3 10.6 131.9 33.4 29.9 18.1 54.6 42.1 80.7 72.2 26.2-30.1 50.9-54.2 80.7-72.2C641.46666667 149.6 683.36666667 139 735.66666667 139c13.6 0 28.2 0.8 43.4 2.2 25.2 2.5 50.2 9.9 74.4 22.1 25.3 12.8 48.4 30.2 68.6 51.8 45.6 48.6 72.9 114.7 79.1 191.1v55.4c-3 38.1-12.2 77.2-27.3 116.1-16.2 41.7-39.8 84.5-70.1 127.4-32.1 45.5-72.8 92.4-121 139.5-50.8 49.7-111.5 101.2-180.3 152.9-22.5 17.3-50 26.5-78.9 26.5zM308.86666667 881.5c-3.7 0-7.4-1.3-10.3-4-44.9-41.2-84.4-82.3-117.3-122.2-5.3-6.5-4.4-16.1 2.1-21.4 6.5-5.3 16.1-4.4 21.4 2.1 32 38.8 70.4 78.9 114.3 119.1 6.2 5.7 6.6 15.3 0.9 21.5-2.9 3.3-7 4.9-11.1 4.9z" fill="#030000" ></path><path d="M724.3 826.2c-4.1 0-8.1-1.6-11.1-4.8-5.8-6.1-5.4-15.8 0.7-21.5 28.7-27 55.1-54 78.5-80.3 7.9-8.9 15.6-17.9 22.9-26.7 5.3-6.5 14.9-7.4 21.4-2.1 6.5 5.3 7.4 14.9 2.1 21.4-7.5 9.1-15.5 18.4-23.6 27.6-23.9 27-51 54.7-80.4 82.3-3 2.7-6.7 4.1-10.5 4.1z m155.1-179.3c-2.9 0-5.7-0.8-8.3-2.5-7-4.6-9-14-4.4-21.1 7-10.7 13.6-21.5 19.7-32.1 6.4-11.3 12.4-22.6 17.8-33.8 3.7-7.6 12.7-10.7 20.3-7.1 7.6 3.7 10.7 12.7 7.1 20.3-5.7 11.8-12 23.8-18.8 35.7-6.4 11.1-13.3 22.4-20.6 33.6-3 4.5-7.8 7-12.8 7z" fill="#FFFFFF" ></path><path d="M577.5 54.8a15.6 2.9 90 1 0 5.8 0 15.6 2.9 90 1 0-5.8 0zM564.356 59.634a15.6 2.9 60 1 0 5.023-2.9 15.6 2.9 60 1 0-5.023 2.9z" fill="#ffffff" ></path><path d="M555.315 70.442a15.6 2.9 30 1 0 2.9-5.023 15.6 2.9 30 1 0-2.9 5.023zM537.3 81.4a15.6 2.9 0 1 0 31.2 0 15.6 2.9 0 1 0-31.2 0z" fill="#ffffff" ></path><path d="M542.802 102.798a2.9 15.6 60 1 0 27.02-15.6 2.9 15.6 60 1 0-27.02 15.6zM558.193 118.553a2.9 15.6 30 1 0 15.6-27.02 2.9 15.6 30 1 0-15.6 27.02zM576.6 108.9a15.6 2.9 90 1 0 5.8 0 15.6 2.9 90 1 0-5.8 0z" fill="#ffffff" ></path><path d="M590.477 106.968a15.6 2.9 60 1 0 5.023-2.9 15.6 2.9 60 1 0-5.023 2.9z" fill="#ffffff" ></path><path d="M601.656 98.328a15.6 2.9 30 1 0 2.9-5.023 15.6 2.9 30 1 0-2.9 5.023zM591.4 82.4a15.6 2.9 0 1 0 31.2 0 15.6 2.9 0 1 0-31.2 0z" fill="#ffffff" ></path><path d="M590.085 76.59a2.9 15.6 60 1 0 27.02-15.6 2.9 15.6 60 1 0-27.02 15.6zM586.078 72.212a2.9 15.6 30 1 0 15.6-27.02 2.9 15.6 30 1 0-15.6 27.02z" fill="#ffffff" ></path><path d="M1058.6 271.4a19 19 0 1 0 38 0 19 19 0 1 0-38 0z" fill="#1bd9cd" ></path><path d="M171.73333334 101.4c-2.9 0-5.3-2.4-5.3-5.3V38c0-2.9 2.4-5.3 5.3-5.3s5.3 2.4 5.3 5.3v58c0 3-2.4 5.4-5.3 5.4z" fill="#ffffff" ></path><path d="M200.73333334 72.4h-58c-2.9 0-5.3-2.4-5.3-5.3s2.4-5.3 5.3-5.3h58c2.9 0 5.3 2.4 5.3 5.3s-2.4 5.3-5.3 5.3z" fill="#ffffff" ></path><path d="M860.8 2.1c-7 3.6-10.6 10.8-7.9 15.9l52 100.6c2.7 5.2 10.5 6.4 17.6 2.8 7-3.6 10.6-10.8 7.9-15.9l-52-100.6c-2.7-5.2-10.6-6.4-17.6-2.8z" fill="#1bd9cd" ></path><path d="M831.9 92.6c3.6 7 10.8 10.6 15.9 7.9l100.6-52c5.2-2.7 6.4-10.5 2.8-17.6-3.6-7-10.8-10.6-15.9-7.9L834.7 75c-5.2 2.7-6.4 10.5-2.8 17.6z" fill="#1bd9cd" ></path><path d="M48.2 240.6C21.6 240.6 0 219.2 0 192.9s21.6-47.7 48.2-47.7 48.2 21.4 48.2 47.7-21.6 47.7-48.2 47.7z m0-82.8c-19.5 0-35.4 15.8-35.4 35.1S28.7 228 48.2 228s35.4-15.8 35.4-35.1-15.8-35.1-35.4-35.1z" fill="#1bd9cd" ></path></symbol><symbol id="icon-tubiaozhizuomoban-" viewBox="0 0 1024 1024"><path d="M469.9136 248.0128a229.5808 229.5808 0 0 1 23.552-101.6832 187.392 187.392 0 0 0-58.4704 341.1968 55.5008 55.5008 0 0 1 25.088 47.104 56.832 56.832 0 0 1-56.832 56.832H289.3824a92.16 92.16 0 0 0-92.16 92.16 95.744 95.744 0 0 0 95.744 95.744h485.376a93.5936 93.5936 0 0 0 93.5936-93.5936A93.5936 93.5936 0 0 0 778.24 591.4624H666.8288a56.832 56.832 0 0 1-56.832-56.832 55.5008 55.5008 0 0 1 24.8832-47.104 188.6208 188.6208 0 0 0 18.8416-13.6192 230.7072 230.7072 0 0 1-183.808-225.8944z" fill="#A87DFF" ></path><path d="M797.4912 890.88a37.4784 37.4784 0 0 0 0-74.9568H272.5888a37.4784 37.4784 0 0 0 0 74.9568z" fill="#A87DFF" ></path><path d="M722.432 329.1136a187.2896 187.2896 0 0 0-228.9664-182.784 230.7072 230.7072 0 0 0 160.4608 327.68 187.0848 187.0848 0 0 0 68.5056-144.896z" fill="#B997FC" ></path></symbol><symbol id="icon-tubiaozhizuomoban-1" viewBox="0 0 1024 1024"><path d="M525.7216 794.112a230.6048 230.6048 0 0 1-8.4992 61.952h64.2048a15.7696 15.7696 0 0 0 13.824-23.6544A191.488 191.488 0 0 1 860.16 572.7232a15.7696 15.7696 0 0 0 23.9616-13.6192V396.8a159.4368 159.4368 0 0 0-115.4048-152.6784 15.9744 15.9744 0 0 0-20.48 15.4624v27.648c0 17.3056-14.336 38.4-47.7184 38.4s-47.7184-21.0944-47.7184-38.4v-33.4848a15.872 15.872 0 0 0-15.872-15.872h-225.28a15.872 15.872 0 0 0-15.872 15.872v33.4848c0 17.3056-14.336 38.4-47.7184 38.4s-47.7184-21.0944-47.7184-38.4v-29.7984a15.9744 15.9744 0 0 0-19.2512-15.6672 159.5392 159.5392 0 0 0-123.8016 155.0336V609.28a230.6048 230.6048 0 0 1 368.64 184.832zM253.8496 447.6928v-52.9408a21.2992 21.2992 0 0 1 21.1968-21.1968h491.52a21.2992 21.2992 0 0 1 21.1968 21.1968v52.9408a21.2992 21.2992 0 0 1-21.1968 21.1968h-491.52a21.2992 21.2992 0 0 1-21.1968-21.1968z" fill="#01C700" ></path><path d="M734.4128 284.9792v-76.8c0-11.4688-7.9872-25.6-31.744-25.6s-31.744 14.0288-31.744 25.6v76.8c0 11.4688 9.5232 25.6 31.744 25.6s31.744-13.6192 31.744-25.6zM381.3376 284.9792v-76.8c0-11.4688-7.9872-25.6-31.744-25.6S317.44 196.7104 317.44 208.1792v76.8c0 11.4688 9.5232 25.6 31.744 25.6s32.1536-13.6192 32.1536-25.6z" fill="#01C700" ></path><path d="M253.8496 373.5552l533.9136 0 0 95.3344-533.9136 0 0-95.3344Z" fill="#FFFFFF" ></path><path d="M760.6272 587.9808a146.432 146.432 0 1 0 146.432 146.432 146.432 146.432 0 0 0-146.432-146.432z m86.3232 120.0128l-86.4256 86.4256a23.8592 23.8592 0 0 1-33.6896 0l-52.4288-52.4288a23.8592 23.8592 0 1 1 33.6896-33.6896l35.6352 35.6352 69.5296-69.5296a23.8592 23.8592 0 1 1 33.6896 33.6896z" fill="#01C700" ></path><path d="M813.2608 674.304l-69.5296 69.5296-35.6352-35.6352a23.8592 23.8592 0 1 0-33.6896 33.6896L727.04 794.5216a23.8592 23.8592 0 0 0 33.6896 0l86.4256-86.4256a23.8592 23.8592 0 1 0-33.6896-33.6896z" fill="#FFFFFF" ></path><path d="M316.3136 856.064h201.0112a230.6048 230.6048 0 0 0-360.0384-246.784v87.8592A159.4368 159.4368 0 0 0 316.3136 856.064z" fill="#01C700" ></path><path d="M316.3136 856.064h201.0112a230.6048 230.6048 0 0 0-360.0384-246.784v87.8592A159.4368 159.4368 0 0 0 316.3136 856.064z" fill="#3DD240" ></path></symbol><symbol id="icon-shuben" viewBox="0 0 1024 1024"><path d="M963.490909 642.327273L907.636364 577.163636l11.636363-139.636363 79.127273-79.127273-2.327273-4.654545-37.236363-55.854546h-16.290909l-37.236364-46.545454 11.636364-137.309091 79.127272-79.127273V16.290909l-875.054545 13.963636-65.163637 44.218182-32.581818 69.818182v90.763636l55.854546 79.127273 34.909091 27.927273-53.527273 55.854545-34.909091 69.818182v93.090909l55.854545 76.8 30.254546 25.6-55.854546 60.509091-32.581818 69.818182V884.363636l55.854546 79.127273 41.890909 34.909091 290.909091 11.636364 584.145454-6.981819-37.236363-34.90909-53.527273-67.49091 11.636364-137.30909 79.127272-79.127273-4.654545-6.981818h6.981818z" fill="#FFC56F" ></path><path d="M1024 707.490909v-67.490909c-55.854545-13.963636-97.745455-67.490909-97.745455-130.327273 0-62.836364 41.890909-114.036364 97.745455-130.327272v-67.49091c-55.854545-13.963636-97.745455-67.490909-97.745455-130.327272 0-62.836364 41.890909-114.036364 97.745455-130.327273V0H181.527273C81.454545 0 0 83.781818 0 186.181818c0 69.818182 37.236364 130.327273 90.763636 162.909091C37.236364 381.672727 0 442.181818 0 512s37.236364 130.327273 90.763636 162.909091C37.236364 707.490909 0 768 0 837.818182c0 102.4 81.454545 186.181818 181.527273 186.181818H1024v-58.181818c-55.854545-13.963636-97.745455-67.490909-97.745455-130.327273 0-60.509091 41.890909-114.036364 97.745455-128zM48.872727 186.181818c0-76.8 60.509091-137.309091 132.654546-137.309091h756.363636c-37.236364 34.909091-60.509091 83.781818-60.509091 137.309091 0 53.527273 23.272727 104.727273 60.509091 137.309091H181.527273C107.054545 325.818182 48.872727 262.981818 48.872727 186.181818z m0 325.818182c0-76.8 60.509091-137.309091 132.654546-137.309091h756.363636c-37.236364 34.909091-60.509091 83.781818-60.509091 137.309091 0 53.527273 23.272727 104.727273 60.509091 137.309091H181.527273c-74.472727 0-132.654545-60.509091-132.654546-137.309091z m828.509091 325.818182c0 53.527273 23.272727 104.727273 60.509091 137.309091H181.527273c-74.472727 0-132.654545-62.836364-132.654546-137.309091 0-76.8 60.509091-137.309091 132.654546-137.309091h756.363636c-37.236364 32.581818-60.509091 81.454545-60.509091 137.309091z" fill="#FE6576" ></path><path d="M197.818182 48.872727v528.290909c0 9.309091 9.309091 13.963636 16.290909 11.636364l48.872727-23.272727 48.872727 23.272727c6.981818 4.654545 16.290909-2.327273 16.29091-11.636364V48.872727H197.818182z" fill="#FC4248" ></path><path d="M225.745455 79.127273c-9.309091 0-13.963636 6.981818-13.963637 13.963636v90.763636c0 9.309091 6.981818 13.963636 13.963637 13.963637 9.309091 0 13.963636-6.981818 13.963636-13.963637V95.418182c2.327273-9.309091-4.654545-16.290909-13.963636-16.290909z" fill="#FFFFFF" ></path><path d="M225.745455 232.727273m-13.963637 0a13.963636 13.963636 0 1 0 27.927273 0 13.963636 13.963636 0 1 0-27.927273 0Z" fill="#FFFFFF" ></path></symbol><symbol id="icon-rili" viewBox="0 0 1024 1024"><path d="M74.472727 276.945455h875.054546v616.727272H74.472727z" fill="#72E45E" ></path><path d="M197.818182 542.254545c27.927273 2.327273 55.854545 0 83.781818 0 25.6 0 53.527273 2.327273 58.181818-27.927272v-79.127273c0-23.272727 2.327273-51.2-30.254545-53.527273-27.927273-2.327273-55.854545 0-83.781818 0-25.6 0-53.527273-2.327273-58.181819 27.927273-4.654545 25.6 0 53.527273 0 79.127273 0 23.272727-2.327273 48.872727 30.254546 53.527272zM456.145455 542.254545c27.927273 2.327273 55.854545 0 83.781818 0 25.6 0 53.527273 2.327273 58.181818-27.927272v-79.127273c0-23.272727 2.327273-51.2-30.254546-53.527273-27.927273-2.327273-55.854545 0-83.781818 0-25.6 0-53.527273-2.327273-58.181818 27.927273-4.654545 25.6 0 53.527273 0 79.127273 2.327273 23.272727 0 48.872727 30.254546 53.527272zM716.8 542.254545c27.927273 2.327273 55.854545 0 83.781818 0 25.6 0 53.527273 2.327273 58.181818-27.927272v-79.127273c0-23.272727 2.327273-51.2-30.254545-53.527273-27.927273-2.327273-55.854545 0-83.781818 0-25.6 0-53.527273-2.327273-58.181818 27.927273-4.654545 25.6 0 53.527273 0 79.127273 0 23.272727-2.327273 48.872727 30.254545 53.527272zM309.527273 630.690909c-27.927273-2.327273-55.854545 0-83.781818 0-25.6 0-53.527273-2.327273-58.181819 27.927273-4.654545 25.6 0 53.527273 0 79.127273 0 18.618182-2.327273 51.2 25.6 53.527272 27.927273 4.654545 60.509091 0 88.436364 0 25.6 0 53.527273 2.327273 58.181818-27.927272v-79.127273c-2.327273-23.272727 0-48.872727-30.254545-53.527273zM567.854545 630.690909c-27.927273-2.327273-55.854545 0-83.781818 0-25.6 0-53.527273-2.327273-58.181818 27.927273-4.654545 25.6 0 53.527273 0 79.127273 0 18.618182-2.327273 51.2 25.6 53.527272 27.927273 4.654545 60.509091 0 88.436364 0 25.6 0 53.527273 2.327273 58.181818-27.927272v-79.127273c0-23.272727 2.327273-48.872727-30.254546-53.527273zM833.163636 630.690909c-27.927273-4.654545-60.509091 0-88.436363 0-25.6 0-53.527273-2.327273-58.181818 27.927273-4.654545 25.6 0 53.527273 0 79.127273 0 18.618182-2.327273 51.2 25.6 53.527272 27.927273 4.654545 60.509091 0 88.436363 0 25.6 0 53.527273 2.327273 58.181818-27.927272v-79.127273c0-18.618182 2.327273-48.872727-25.6-53.527273z" fill="#CEFF00" ></path><path d="M930.909091 86.109091h-123.345455V139.636364c0 62.836364-107.054545 62.836364-107.054545 0V86.109091H321.163636V139.636364c0 62.836364-107.054545 62.836364-107.054545 0V86.109091H93.090909c-39.563636 0-69.818182 27.927273-69.818182 65.163636v774.981818c0 34.909091 32.581818 65.163636 69.818182 65.163637h837.818182c39.563636 0 69.818182-27.927273 69.818182-65.163637V151.272727c2.327273-34.909091-30.254545-65.163636-69.818182-65.163636z m2.327273 768c0 25.6-23.272727 44.218182-51.2 44.218182H141.963636c-27.927273 0-51.2-20.945455-51.2-44.218182V356.072727c0-25.6 23.272727-44.218182 51.2-44.218182h740.072728c27.927273 0 51.2 20.945455 51.2 44.218182v498.036364z" fill="#72E45E" ></path><path d="M90.763636 130.327273c-9.309091 0-16.290909 6.981818-16.290909 16.290909v65.163636c0 9.309091 6.981818 16.290909 16.290909 16.290909s16.290909-6.981818 16.290909-16.290909V146.618182c-2.327273-9.309091-9.309091-16.290909-16.290909-16.290909z" fill="#FCFCFF" ></path><path d="M74.472727 258.327273a16.290909 13.963636 0 1 0 32.581818 0 16.290909 13.963636 0 1 0-32.581818 0Z" fill="#FCFCFF" ></path><path d="M930.909091 1012.363636H93.090909c-51.2 0-93.090909-37.236364-93.090909-86.109091V151.272727c0-46.545455 41.890909-86.109091 93.090909-86.109091h144.290909V139.636364c0 25.6 27.927273 25.6 32.581818 25.6 2.327273 0 32.581818 0 32.581819-25.6V67.490909h425.890909V139.636364c0 25.6 27.927273 25.6 32.581818 25.6 2.327273 0 32.581818 0 32.581818-25.6V67.490909H930.909091c25.6 0 46.545455 9.309091 65.163636 25.6 18.618182 13.963636 27.927273 34.909091 27.927273 58.181818v774.981818c0 46.545455-41.890909 86.109091-93.090909 86.109091zM93.090909 107.054545c-27.927273 0-48.872727 20.945455-48.872727 44.218182v774.981818c0 25.6 20.945455 44.218182 48.872727 44.218182h837.818182c27.927273 0 48.872727-20.945455 48.872727-44.218182V151.272727c0-11.636364-4.654545-23.272727-13.963636-30.254545-9.309091-9.309091-20.945455-13.963636-34.909091-13.963637h-100.072727V139.636364c0 20.945455-9.309091 39.563636-23.272728 51.2s-30.254545 16.290909-51.2 16.290909c-18.618182 0-37.236364-6.981818-51.2-16.290909-16.290909-11.636364-23.272727-30.254545-23.272727-51.2V107.054545H342.109091V139.636364c0 20.945455-9.309091 39.563636-23.272727 51.2s-30.254545 16.290909-51.2 16.290909c-18.618182 0-37.236364-6.981818-51.2-16.290909-16.290909-11.636364-23.272727-30.254545-23.272728-51.2V107.054545H93.090909z m788.945455 814.545455H141.963636c-39.563636 0-72.145455-30.254545-72.145454-65.163636V356.072727c0-37.236364 32.581818-65.163636 72.145454-65.163636h740.072728c39.563636 0 72.145455 30.254545 72.145454 65.163636v498.036364c0 37.236364-32.581818 67.490909-72.145454 67.490909zM141.963636 330.472727c-16.290909 0-27.927273 11.636364-27.927272 25.6v498.036364c0 13.963636 13.963636 25.6 27.927272 25.6h740.072728c16.290909 0 27.927273-11.636364 27.927272-25.6V356.072727c0-13.963636-13.963636-25.6-27.927272-25.6H141.963636z" fill="#2CC23F" ></path><path d="M269.963636 11.636364c-13.963636 0-23.272727 9.309091-23.272727 18.618181V139.636364c0 9.309091 11.636364 18.618182 23.272727 18.618181 13.963636 0 23.272727-9.309091 23.272728-18.618181V30.254545c2.327273-9.309091-9.309091-18.618182-23.272728-18.618181zM761.018182 11.636364c-13.963636 0-23.272727 9.309091-23.272727 18.618181V139.636364c0 9.309091 11.636364 18.618182 23.272727 18.618181 13.963636 0 23.272727-9.309091 23.272727-18.618181V30.254545c0-9.309091-9.309091-18.618182-23.272727-18.618181z" fill="#62DE43" ></path></symbol><symbol id="icon-boshimao" viewBox="0 0 1024 1024"><path d="M509.672727 444.509091c148.945455 0 232.727273 81.454545 232.727273 81.454545v279.272728s-86.109091 62.836364-244.363636 62.836363-216.436364-62.836364-216.436364-62.836363v-279.272728s76.8-81.454545 228.072727-81.454545" fill="#0093E2" ></path><path d="M498.036364 884.363636c-162.909091 0-225.745455-65.163636-228.072728-67.490909l-4.654545-4.654545V518.981818l4.654545-4.654545s20.945455-23.272727 62.836364-44.218182c37.236364-18.618182 97.745455-41.890909 176.872727-41.890909 81.454545 0 141.963636 23.272727 179.2 41.890909 41.890909 20.945455 62.836364 41.890909 65.163637 44.218182l4.654545 4.654545V814.545455l-6.981818 4.654545c-2.327273 2.327273-93.090909 65.163636-253.672727 65.163636z" fill="#0093E2" ></path><path d="M295.563636 798.254545c6.981818 4.654545 18.618182 16.290909 41.890909 25.6 30.254545 13.963636 81.454545 30.254545 160.581819 30.254546 79.127273 0 139.636364-16.290909 174.545454-30.254546 27.927273-9.309091 44.218182-20.945455 53.527273-25.6V532.945455c-6.981818-6.981818-25.6-20.945455-53.527273-34.909091-34.909091-16.290909-90.763636-37.236364-165.236363-37.236364-74.472727 0-128 20.945455-162.909091 37.236364-25.6 13.963636-44.218182 27.927273-51.2 34.909091v265.30909z" fill="#00BEF5" ></path><path d="M132.654545 442.181818L13.963636 390.981818 532.945455 155.927273 1007.709091 395.636364l-223.418182 90.763636s-107.054545-111.709091-258.327273-111.709091c-146.618182 0-290.909091 111.709091-290.909091 111.709091l-81.454545-34.909091" fill="#0093E2" ></path><path d="M784.290909 502.690909c-4.654545 0-6.981818-2.327273-11.636364-4.654545 0 0-27.927273-27.927273-69.818181-53.527273-39.563636-23.272727-102.4-53.527273-176.872728-53.527273-139.636364 0-279.272727 107.054545-281.6 109.381818-4.654545 2.327273-9.309091 4.654545-16.290909 2.327273l-95.418182-39.563636-128-53.527273c0-4.654545-4.654545-11.636364-4.654545-16.290909 0-6.981818 4.654545-11.636364 9.309091-13.963636L525.963636 139.636364c4.654545 0 9.309091 0 13.963637 2.327272l474.763636 239.709091c4.654545 2.327273 9.309091 9.309091 9.309091 13.963637 0 6.981818-4.654545 11.636364-9.309091 13.963636l-223.418182 93.090909h-6.981818z m-630.690909-69.818182l81.454545 34.909091c13.963636-9.309091 44.218182-30.254545 86.109091-51.2 51.2-25.6 128-58.181818 207.127273-58.181818 81.454545 0 148.945455 32.581818 193.163636 58.181818 32.581818 20.945455 55.854545 41.890909 67.49091 51.2l181.527272-74.472727-437.527272-221.090909-477.09091 218.763636 97.745455 41.890909z" fill="#0093E2" ></path><path d="M130.327273 458.472727v186.181818c11.636364 4.654545 20.945455 16.290909 20.945454 30.254546 0 13.963636-9.309091 25.6-23.272727 30.254545l23.272727 109.381819h-69.818182l23.272728-109.381819c-11.636364-4.654545-18.618182-16.290909-18.618182-30.254545 0-13.963636 6.981818-25.6 18.618182-30.254546v-197.818181" fill="#0093E2" ></path><path d="M507.345455 737.745455c-104.727273 0-188.509091 20.945455-188.509091 48.872727 0 25.6 83.781818 48.872727 188.509091 48.872727s188.509091-20.945455 188.50909-48.872727c0-27.927273-86.109091-48.872727-188.50909-48.872727zM695.854545 525.963636c-6.981818 0-13.963636 6.981818-13.963636 13.963637v151.272727c0 6.981818 6.981818 13.963636 13.963636 13.963636s13.963636-6.981818 13.963637-13.963636v-151.272727c0-6.981818-6.981818-13.963636-13.963637-13.963637z" fill="#FCFCFF" ></path><path d="M681.890909 737.745455a13.963636 13.963636 0 1 0 27.927273 0 13.963636 13.963636 0 1 0-27.927273 0Z" fill="#FCFCFF" ></path><path d="M153.6 432.872727l81.454545 34.909091c13.963636-9.309091 44.218182-30.254545 86.109091-51.2 51.2-25.6 128-58.181818 207.127273-58.181818 81.454545 0 148.945455 32.581818 193.163636 58.181818 32.581818 20.945455 55.854545 41.890909 67.49091 51.2l181.527272-74.472727-437.527272-221.090909-479.418182 218.763636 100.072727 41.890909" fill="#00BEF5" ></path></symbol><symbol id="icon-xuesheng" viewBox="0 0 1024 1024"><path d="M251.345455 484.072727s-16.290909 16.290909-37.236364 16.290909-37.236364-16.290909-37.236364-16.290909c0-60.509091 18.618182-134.981818 25.6-160.581818-6.981818-4.654545-9.309091-9.309091-9.309091-18.618182s6.981818-18.618182 16.290909-20.945454v-41.890909l11.636364 6.981818v34.909091c9.309091 2.327273 16.290909 11.636364 16.290909 20.945454 0 6.981818-4.654545 13.963636-9.309091 18.618182 4.654545 16.290909 13.963636 51.2 18.618182 93.090909 2.327273 20.945455 4.654545 44.218182 4.654546 67.490909z" fill="#01CB9A" ></path><path d="M281.6 470.109091v25.6c2.327273 23.272727 9.309091 46.545455 25.6 67.490909 9.309091 11.636364 13.963636 11.636364 27.927273 6.981818 4.654545 0 11.636364 20.945455 13.963636 25.6 16.290909 37.236364 44.218182 81.454545 95.418182 100.072727 34.909091 13.963636 74.472727 16.290909 109.381818 6.981819 37.236364-11.636364 67.490909-37.236364 90.763636-69.818182 20.945455-27.927273 27.927273-46.545455 32.581819-53.527273 2.327273-2.327273 2.327273-6.981818 4.654545-6.981818s6.981818 2.327273 9.309091 2.327273c6.981818 0 11.636364-4.654545 16.290909-9.309091 13.963636-18.618182 23.272727-41.890909 25.6-67.490909v-25.6c0-13.963636-9.309091-25.6-25.6-25.6h-2.327273l-2.327272-4.654546s0-11.636364 2.327272-16.290909c0-18.618182 2.327273-39.563636 4.654546-58.181818 0-6.981818 2.327273-16.290909 2.327273-23.272727l-48.872728-13.963637c-2.327273 0-23.272727-4.654545-23.272727-4.654545-11.636364-2.327273-79.127273-6.981818-144.290909-9.309091-51.2 0-100.072727 4.654545-111.709091 6.981818-4.654545 0-11.636364 2.327273-13.963636 2.327273 0 0-37.236364 6.981818-51.2 13.963636l-13.963637 4.654546c0 18.618182 2.327273 37.236364 2.327273 55.854545 0 13.963636 2.327273 30.254545 2.327273 44.218182h-2.327273c-16.290909 0-23.272727 13.963636-25.6 25.6z m76.8-39.563636c41.890909 0 79.127273-2.327273 111.709091-9.309091 11.636364-2.327273 25.6-4.654545 39.563636-6.981819 41.890909-9.309091 74.472727-25.6 102.4-46.545454 13.963636 16.290909 32.581818 30.254545 60.509091 41.890909h2.327273v11.636364c-2.327273 37.236364-6.981818 86.109091-13.963636 111.709091-6.981818 30.254545-58.181818 151.272727-158.254546 148.945454-16.290909 0-32.581818-4.654545-46.545454-9.309091-51.2-16.290909-79.127273-65.163636-100.072728-130.327273-9.309091-27.927273-13.963636-60.509091-13.963636-97.745454 0-6.981818 0-16.290909-2.327273-23.272727 6.981818 9.309091 13.963636 9.309091 18.618182 9.309091z" fill="#1FDEAE" ></path><path d="M702.836364 256c0-13.963636 0-6.981818-2.327273-20.945455-2.327273-6.981818-2.327273-11.636364-9.309091-13.963636-6.981818-4.654545-13.963636-9.309091-20.945455-11.636364-18.618182-9.309091-37.236364-16.290909-58.181818-18.618181-44.218182-9.309091-88.436364-11.636364-132.654545-9.309091-18.618182 0-37.236364 2.327273-55.854546 4.654545-30.254545 4.654545-60.509091 11.636364-88.436363 27.927273-9.309091 2.327273-16.290909 6.981818-18.618182 18.618182-6.981818 27.927273-6.981818 53.527273-6.981818 81.454545v2.327273c16.290909-6.981818 34.909091-11.636364 53.527272-13.963636 11.636364-2.327273 25.6-4.654545 39.563637-4.654546 9.309091-2.327273 46.545455-4.654545 81.454545-4.654545 32.581818 0 65.163636 0 100.072728 2.327272 23.272727 2.327273 48.872727 4.654545 72.145454 9.309091 4.654545 0 11.636364 2.327273 16.290909 4.654546l32.581818 9.309091c0-16.290909 0-48.872727-2.327272-62.836364z" fill="#1FDEAE" ></path><path d="M293.236364 228.072727c4.654545-20.945455 18.618182-27.927273 30.254545-34.909091 27.927273-16.290909 58.181818-25.6 97.745455-30.254545 16.290909-2.327273 76.8-4.654545 86.109091-4.654546 39.563636 0 74.472727 2.327273 109.381818 9.309091 23.272727 4.654545 44.218182 11.636364 62.836363 20.945455 6.981818 4.654545 23.272727 13.963636 23.272728 13.963636 11.636364 6.981818 16.290909 18.618182 18.618181 27.927273 2.327273 11.636364 2.327273 23.272727 2.327273 32.581818v9.309091s81.454545-46.545455 121.018182-69.818182c-6.981818-4.654545-9.309091-6.981818-13.963636-9.309091-102.4-58.181818-204.8-116.363636-309.527273-174.545454-11.636364-6.981818-18.618182-6.981818-30.254546 0-100.072727 58.181818-202.472727 114.036364-302.545454 172.218182-6.981818 4.654545-11.636364 6.981818-20.945455 13.963636 18.618182 9.309091 118.690909 69.818182 118.690909 69.818182 2.327273-18.618182 4.654545-32.581818 6.981819-46.545455zM833.163636 809.890909c-51.2-32.581818-174.545455-76.8-176.872727-76.8 0 0-30.254545 62.836364-41.890909 88.436364-9.309091 16.290909-23.272727 18.618182-32.581818 2.327272-9.309091-13.963636-32.581818-46.545455-34.909091-51.2-6.981818-9.309091-13.963636-11.636364-23.272727-2.327272-2.327273 2.327273-11.636364 11.636364-16.290909 11.636363-4.654545 0-13.963636-9.309091-16.29091-11.636363-9.309091-9.309091-13.963636-9.309091-23.272727 2.327272s-23.272727 34.909091-32.581818 44.218182c-18.618182 23.272727-34.909091 18.618182-44.218182 0-11.636364-30.254545-34.909091-86.109091-34.909091-86.109091-2.327273 0-125.672727 44.218182-176.872727 76.8-116.363636 72.145455-114.036364 197.818182-114.036364 197.818182h891.345455c2.327273 4.654545 16.290909-102.4-123.345455-195.490909z" fill="#1FDEAE" ></path><path d="M958.836364 1024c-2.327273 0-2.327273 0 0 0H65.163636c-9.309091 0-16.290909-6.981818-16.290909-13.963636 0-2.327273 0-34.909091 13.963637-76.8 13.963636-39.563636 41.890909-93.090909 107.054545-134.981819 51.2-34.909091 179.2-79.127273 181.527273-79.127272 6.981818-2.327273 13.963636 2.327273 16.290909 6.981818 0 2.327273 0 2.327273 6.981818 13.963636 6.981818 18.618182 20.945455 51.2 30.254546 72.145455 2.327273 4.654545 4.654545 6.981818 4.654545 6.981818s4.654545-2.327273 11.636364-9.309091c4.654545-6.981818 13.963636-20.945455 23.272727-30.254545 4.654545-4.654545 6.981818-9.309091 9.309091-13.963637 4.654545-6.981818 11.636364-13.963636 23.272727-13.963636s18.618182 6.981818 23.272727 11.636364l4.654546 4.654545c2.327273-2.327273 4.654545-2.327273 4.654545-4.654545 6.981818-6.981818 16.290909-11.636364 23.272728-11.636364 9.309091 0 16.290909 4.654545 23.272727 13.963636 2.327273 2.327273 9.309091 11.636364 16.290909 23.272728 6.981818 9.309091 13.963636 20.945455 18.618182 27.927272l4.654545 4.654546s2.327273-2.327273 2.327273-4.654546c4.654545-9.309091 41.890909-88.436364 44.218182-88.436363 2.327273-4.654545 9.309091-9.309091 16.290909-6.981819 4.654545 0 130.327273 44.218182 181.527273 79.127273 32.581818 20.945455 60.509091 46.545455 81.454545 72.145455 16.290909 20.945455 30.254545 44.218182 39.563636 67.490909 6.981818 16.290909 9.309091 34.909091 11.636364 51.2 0 2.327273 2.327273 18.618182 0 25.6-2.327273 2.327273-9.309091 6.981818-13.963636 6.981818zM81.454545 993.745455h861.09091c-2.327273-30.254545-18.618182-102.4-118.69091-169.89091-39.563636-25.6-128-60.509091-160.581818-72.145454-9.309091 18.618182-27.927273 55.854545-37.236363 76.8-4.654545 6.981818-11.636364 20.945455-27.927273 23.272727-6.981818 0-20.945455 0-32.581818-16.290909-4.654545-6.981818-11.636364-16.290909-18.618182-27.927273-6.981818-11.636364-13.963636-18.618182-16.290909-23.272727l-6.981818 6.981818c-6.981818 6.981818-11.636364 9.309091-18.618182 9.309091-4.654545 0-11.636364-2.327273-18.618182-9.309091-2.327273-2.327273-6.981818-4.654545-6.981818-6.981818-2.327273 4.654545-6.981818 9.309091-9.309091 13.963636-6.981818 11.636364-16.290909 23.272727-23.272727 32.581819-16.290909 20.945455-30.254545 23.272727-39.563637 20.945454-11.636364-2.327273-23.272727-9.309091-27.927272-25.6-9.309091-20.945455-20.945455-53.527273-30.254546-72.145454-34.909091 11.636364-121.018182 44.218182-160.581818 72.145454-86.109091 51.2-102.4 132.654545-107.054546 167.563637z m642.327273-705.163637c-2.327273 0-4.654545 0-6.981818-2.327273-4.654545-2.327273-6.981818-6.981818-6.981818-13.963636v-9.309091c0-9.309091 0-18.618182-2.327273-30.254545-2.327273-9.309091-4.654545-13.963636-11.636364-18.618182-6.981818-4.654545-16.290909-11.636364-20.945454-13.963636-18.618182-9.309091-37.236364-16.290909-58.181818-20.945455-32.581818-6.981818-67.490909-9.309091-104.727273-9.309091-9.309091 0-67.490909 2.327273-83.781818 4.654546-37.236364 4.654545-65.163636 13.963636-90.763637 27.927272-11.636364 6.981818-18.618182 11.636364-23.272727 25.6-2.327273 11.636364-4.654545 25.6-4.654545 41.890909 0 4.654545-2.327273 9.309091-6.981818 13.963637-4.654545 2.327273-11.636364 2.327273-16.29091 0 0 0-102.4-58.181818-118.690909-69.818182-11.636364 0-13.963636-4.654545-13.963636-9.309091s2.327273-11.636364 6.981818-13.963636c2.327273-2.327273 4.654545-2.327273 6.981818-4.654546 4.654545-2.327273 9.309091-6.981818 13.963637-9.309091 20.945455-11.636364 44.218182-23.272727 65.163636-37.236363C325.818182 95.418182 404.945455 48.872727 486.4 4.654545c16.290909-9.309091 30.254545-9.309091 44.218182 0 69.818182 39.563636 141.963636 81.454545 211.781818 121.018182 32.581818 18.618182 62.836364 37.236364 95.418182 55.854546 4.654545 2.327273 9.309091 4.654545 13.963636 9.309091l2.327273 2.327272c4.654545 2.327273 6.981818 6.981818 6.981818 11.636364s-2.327273 9.309091-6.981818 11.636364c-37.236364 20.945455-121.018182 69.818182-121.018182 69.818181-4.654545 2.327273-6.981818 2.327273-9.309091 2.327273z m-216.436363-146.618182c39.563636 0 76.8 4.654545 111.70909 11.636364 25.6 4.654545 46.545455 11.636364 67.49091 23.272727 6.981818 4.654545 23.272727 13.963636 25.6 13.963637 16.290909 11.636364 20.945455 25.6 25.6 37.236363 2.327273 6.981818 2.327273 13.963636 2.327272 20.945455 20.945455-11.636364 51.2-30.254545 76.8-44.218182-30.254545-16.290909-58.181818-32.581818-88.436363-48.872727-69.818182-39.563636-141.963636-79.127273-211.781819-121.018182-6.981818-4.654545-9.309091-4.654545-13.963636 0-83.781818 44.218182-162.909091 88.436364-242.036364 132.654545L197.818182 202.472727c23.272727 13.963636 55.854545 32.581818 76.8 44.218182 0-9.309091 2.327273-16.290909 4.654545-23.272727 6.981818-27.927273 25.6-37.236364 37.236364-44.218182 27.927273-16.290909 60.509091-25.6 102.4-32.581818 18.618182-2.327273 79.127273-4.654545 88.436364-4.654546z" fill="#01CB9A" ></path><path d="M435.2 472.436364m-13.963636 0a13.963636 13.963636 0 1 0 27.927272 0 13.963636 13.963636 0 1 0-27.927272 0Z" fill="#1FDEAE" ></path><path d="M579.490909 472.436364m-13.963636 0a13.963636 13.963636 0 1 0 27.927272 0 13.963636 13.963636 0 1 0-27.927272 0Z" fill="#1FDEAE" ></path><path d="M551.563636 609.745455s-20.945455 13.963636-44.218181 13.963636-44.218182-13.963636-44.218182-13.963636 20.945455 6.981818 44.218182 6.981818 44.218182-6.981818 44.218181-6.981818z" fill="#F44E72" ></path><path d="M421.236364 114.036364c-4.654545-6.981818-2.327273-16.290909 4.654545-18.618182l58.181818-32.581818c6.981818-4.654545 16.290909-2.327273 18.618182 4.654545 4.654545 6.981818 2.327273 16.290909-4.654545 18.618182L442.181818 121.018182c-6.981818 2.327273-16.290909 0-20.945454-6.981818z" fill="#FCFCFF" ></path><path d="M393.309091 130.327273m-13.963636 0a13.963636 13.963636 0 1 0 27.927272 0 13.963636 13.963636 0 1 0-27.927272 0Z" fill="#FCFCFF" ></path></symbol><symbol id="icon-xuesheng1" viewBox="0 0 1024 1024"><path d="M512 0c-20.897959 0-37.151927 16.253968-37.151927 37.151927v85.913833c0 20.897959 16.253968 37.151927 37.151927 37.151927 20.897959 0 37.151927-16.253968 37.151927-37.151927V37.151927C549.151927 16.253968 532.897959 0 512 0zM279.800454 99.845805c-11.609977-16.253968-34.829932-20.897959-51.083901-6.965986-16.253968 11.609977-18.575964 34.829932-6.965986 51.0839l51.0839 69.659864c6.965986 9.287982 18.575964 16.253968 30.185941 16.253968 6.965986 0 13.931973-2.321995 20.897959-6.965986 13.931973-13.931973 18.575964-37.151927 6.965987-53.405896l-51.0839-69.659864zM182.276644 334.367347l-81.269841-25.54195c-18.575964-6.965986-39.473923 4.643991-46.43991 23.219954-6.965986 18.575964 4.643991 39.473923 23.219955 46.43991l81.269841 25.54195c4.643991 2.321995 6.965986 2.321995 11.609978 2.321995 16.253968 0 30.185941-9.287982 34.829932-25.54195 6.965986-18.575964-4.643991-39.473923-23.219955-46.439909zM946.213152 582.820862L864.943311 557.278912c-18.575964-6.965986-39.473923 4.643991-46.43991 23.219954-6.965986 18.575964 4.643991 39.473923 23.219955 46.43991l81.269841 25.54195c4.643991 2.321995 6.965986 2.321995 11.609978 2.321995 16.253968 0 30.185941-9.287982 34.829932-25.54195 6.965986-18.575964-4.643991-39.473923-23.219955-46.439909zM159.056689 557.278912l-81.269841 25.54195c-18.575964 6.965986-30.185941 27.863946-23.219955 46.439909 4.643991 16.253968 18.575964 25.54195 34.829932 25.54195 4.643991 0 6.965986 0 11.609978-2.321995L182.276644 626.938776c18.575964-6.965986 30.185941-27.863946 23.219955-46.43991-6.965986-18.575964-27.863946-30.185941-46.43991-23.219954zM853.333333 406.349206c4.643991 0 6.965986 0 11.609978-2.321995l81.269841-25.54195c18.575964-6.965986 30.185941-27.863946 23.219955-46.43991-6.965986-18.575964-27.863946-30.185941-46.43991-23.219954l-81.269841 25.54195c-18.575964 6.965986-30.185941 27.863946-23.219955 46.439909 4.643991 16.253968 18.575964 25.54195 34.829932 25.54195zM795.283447 92.879819c-16.253968-11.609977-39.473923-9.287982-51.083901 9.287981l-51.0839 69.659864c-11.609977 13.931973-6.965986 37.151927 9.287982 48.761905 6.965986 4.643991 13.931973 6.965986 20.897959 6.965987 11.609977 0 23.219955-4.643991 30.185941-16.253969l51.083901-69.659864c9.287982-13.931973 6.965986-37.151927-9.287982-48.761904z" fill="#FFAE00" ></path><path d="M512 204.335601c-148.60771 0-269.351474 120.743764-269.351474 269.351474 0 60.371882 20.897959 118.421769 58.049887 167.183673 27.863946 34.829932 55.727891 74.303855 76.62585 113.777778v157.895692c0 13.931973 11.609977 25.54195 25.54195 25.54195h30.185941c2.321995 37.151927 32.507937 67.337868 69.659864 67.337868h16.253968c37.151927 0 67.337868-30.185941 69.659864-67.337868h30.185941c13.931973 0 25.54195-11.609977 25.54195-25.54195v-157.895692c23.219955-39.473923 48.761905-76.62585 76.625851-113.777778 37.151927-48.761905 58.049887-104.489796 58.049886-167.183673C781.351474 325.079365 660.60771 204.335601 512 204.335601z m81.269841 680.344671h-160.217687v-39.473923h160.217687v39.473923z m0-78.947846h-160.217687V766.258503h160.217687v39.473923z" fill="#FFDA00" ></path><path d="M416.798186 900.93424h192.725624v-69.659864h-192.725624v69.659864z m30.185941-39.473923h130.031746v6.965987h-130.031746v-6.965987z" fill="#FFAE00" ></path><path d="M512 190.403628c-157.895692 0-285.605442 127.709751-285.605442 285.605442 0 65.015873 20.897959 125.387755 60.371882 176.471656 27.863946 34.829932 53.405896 71.981859 74.303855 109.133786v153.251701c0 23.219955 18.575964 41.795918 41.795918 41.795919h16.253968c9.287982 39.473923 41.795918 67.337868 83.591837 67.337868h16.253968c41.795918 0 74.303855-27.863946 83.591837-67.337868h16.253968c23.219955 0 41.795918-18.575964 41.795919-41.795919v-153.251701c23.219955-37.151927 46.439909-74.303855 74.303855-109.133786 39.473923-51.0839 60.371882-111.455782 60.371882-176.471656 2.321995-157.895692-125.387755-285.605442-283.283447-285.605442z m199.69161 441.179138c-27.863946 37.151927-55.727891 74.303855-78.947846 116.099774l-2.321995 4.643991v162.539682c0 6.965986-4.643991 11.609977-11.609978 11.609977h-44.117913v13.931973c-2.321995 30.185941-25.54195 51.0839-53.405896 51.0839h-16.253968c-27.863946 0-53.405896-23.219955-53.405896-51.0839v-13.931973h-44.117914c-6.965986 0-11.609977-4.643991-11.609977-11.609977v-162.539682l-2.321996-4.643991c-23.219955-39.473923-51.0839-78.947846-78.947846-116.099774-34.829932-44.117914-53.405896-99.845805-53.405895-155.573696 0-139.319728 113.777778-253.097506 253.097505-253.097505S767.419501 336.689342 767.419501 476.00907c-2.321995 55.727891-20.897959 109.133787-55.727891 155.573696z" fill="#FFAE00" ></path><path d="M621.133787 448.145125L512 559.600907l-109.133787-109.133787c-6.965986-6.965986-20.897959-6.965986-27.863945 0-6.965986 6.965986-6.965986 20.897959 0 27.863946l118.421768 118.421768v155.573697h-76.62585v69.659864h192.725624v-69.659864h-76.625851v-155.573697l118.421769-118.421768c6.965986-6.965986 6.965986-20.897959 0-27.863946-9.287982-9.287982-20.897959-9.287982-30.185941-2.321995z m-44.117914 343.655329h-130.031746v-6.965987h130.031746v6.965987z" fill="#FFAE00" ></path><path d="M421.442177 276.31746c-4.643991-4.643991-16.253968-4.643991-20.897959 0l-53.405896 53.405896c-4.643991 4.643991-4.643991 16.253968 0 20.897959 4.643991 4.643991 16.253968 4.643991 20.897959 0l53.405896-53.405895c4.643991-6.965986 4.643991-16.253968 0-20.89796z" fill="#FCFCFF" ></path><path d="M323.918367 373.84127m-13.931972 0a13.931973 13.931973 0 1 0 27.863945 0 13.931973 13.931973 0 1 0-27.863945 0Z" fill="#FCFCFF" ></path></symbol><symbol id="icon-xiaoyuan" viewBox="0 0 1024 1024"><path d="M351.418182 502.690909h286.254545V977.454545H351.418182z" fill="#972EFB" ></path><path d="M877.381818 423.563636h-44.218182v467.781819c0 6.981818-4.654545 11.636364-11.636363 11.636363h-20.945455c-6.981818 0-11.636364-4.654545-11.636363-11.636363V276.945455L516.654545 37.236364 230.4 274.618182v614.4c0 6.981818-4.654545 11.636364-11.636364 11.636363h-18.618181c-6.981818 0-11.636364-4.654545-11.636364-11.636363v-465.454546H144.290909c-67.490909 0-128 44.218182-130.327273 132.654546v302.545454c0 72.145455 58.181818 128 128 130.327273h735.418182c72.145455 0 130.327273-58.181818 130.327273-130.327273v-302.545454c0-72.145455-58.181818-130.327273-130.327273-132.654546zM619.054545 900.654545h-216.436363V609.745455c0-53.527273 44.218182-97.745455 97.745454-97.745455h20.945455c53.527273 0 97.745455 44.218182 97.745454 97.745455v290.90909z" fill="#DE4FF6" ></path><path d="M879.709091 1003.054545H144.290909c-39.563636 0-74.472727-16.290909-102.4-41.890909S0 896 0 856.436364v-302.545455c0-46.545455 16.290909-83.781818 44.218182-111.709091 25.6-23.272727 60.509091-37.236364 100.072727-37.236363h44.218182c9.309091 0 16.290909 6.981818 16.290909 16.290909V884.363636h11.636364V274.618182c0-4.654545 2.327273-9.309091 4.654545-11.636364L505.018182 25.6c6.981818-4.654545 13.963636-4.654545 20.945454 0l274.618182 239.709091c2.327273 2.327273 4.654545 6.981818 4.654546 11.636364V884.363636h11.636363V423.563636c0-9.309091 6.981818-16.290909 16.290909-16.290909h44.218182c39.563636 0 74.472727 16.290909 102.4 44.218182 27.927273 27.927273 41.890909 65.163636 44.218182 102.4v302.545455c0 81.454545-65.163636 146.618182-144.290909 146.618181zM30.254545 556.218182v302.545454c0 30.254545 11.636364 58.181818 32.581819 79.127273 20.945455 20.945455 48.872727 32.581818 79.127272 32.581818h735.418182c62.836364 0 114.036364-51.2 114.036364-114.036363v-302.545455c0-30.254545-11.636364-60.509091-34.909091-81.454545-20.945455-20.945455-51.2-34.909091-81.454546-34.909091h-27.927272v451.490909c0 13.963636-11.636364 25.6-25.6 25.6h-20.945455c-13.963636 0-25.6-11.636364-25.6-25.6v-605.090909L516.654545 58.181818l-267.636363 223.418182v607.418182c0 13.963636-11.636364 25.6-25.6 25.6h-23.272727c-13.963636 0-25.6-11.636364-25.6-25.6V437.527273H144.290909c-30.254545 0-58.181818 9.309091-79.127273 27.927272-20.945455 23.272727-32.581818 53.527273-34.909091 90.763637z m588.8 360.727273h-216.436363c-9.309091 0-16.290909-6.981818-16.290909-16.29091V609.745455c0-62.836364 51.2-111.709091 111.709091-111.709091h20.945454c62.836364 0 111.709091 51.2 111.709091 111.709091v290.90909c4.654545 9.309091-2.327273 16.290909-11.636364 16.29091zM418.909091 884.363636h186.181818V609.745455c0-44.218182-37.236364-81.454545-81.454545-81.454546h-20.945455c-44.218182 0-81.454545 37.236364-81.454545 81.454546V884.363636z" fill="#B258FB" ></path><path d="M290.909091 297.890909c-6.981818 0-13.963636 6.981818-13.963636 13.963636v195.49091c0 6.981818 6.981818 13.963636 13.963636 13.963636s13.963636-6.981818 13.963636-13.963636v-195.49091c0-6.981818-4.654545-13.963636-13.963636-13.963636z" fill="#FCFCFF" ></path><path d="M290.909091 553.890909m-13.963636 0a13.963636 13.963636 0 1 0 27.927272 0 13.963636 13.963636 0 1 0-27.927272 0Z" fill="#FCFCFF" ></path></symbol><symbol id="icon-gongwenbao" viewBox="0 0 1026 1024"><path d="M228.072727 374.690909v-4.654545c0-23.272727 18.618182-41.890909 41.890909-41.890909H302.545455c23.272727 0 41.890909 18.618182 41.890909 41.890909v6.981818c0 23.272727 4.654545 25.6 27.927272 25.6h286.254546c20.945455 0 23.272727-2.327273 23.272727-23.272727v-9.309091c0-23.272727 18.618182-41.890909 41.890909-41.890909h32.581818c23.272727 0 41.890909 18.618182 41.890909 41.890909v6.981818c0 20.945455 6.981818 23.272727 27.927273 23.272727h158.254546c20.945455 0 27.927273-6.981818 27.927272-27.927273v-46.545454c0-46.545455-37.236364-83.781818-81.454545-83.781818H97.745455C53.527273 242.036364 16.290909 279.272727 16.290909 325.818182v44.218182c0 23.272727 6.981818 30.254545 32.581818 30.254545h148.945455c23.272727 0 30.254545-2.327273 30.254545-25.6z" fill="#FFB96C" ></path><path d="M979.781818 416.581818h-158.254545c-23.272727 0-44.218182-4.654545-41.890909-46.545454H809.890909v16.290909h169.890909c9.309091 0 11.636364 0 11.636364-2.327273v-55.854545c0-37.236364-30.254545-67.490909-67.490909-67.49091H97.745455c-37.236364 0-67.490909 30.254545-67.49091 67.49091V372.363636c0 9.309091 2.327273 11.636364 2.327273 11.636364s2.327273 2.327273 16.290909 2.327273h162.909091v-20.945455c2.327273-27.927273 27.927273-51.2 55.854546-51.2h32.581818c30.254545 0 53.527273 23.272727 55.854545 51.2v20.945455H660.945455v-18.618182c2.327273-30.254545 25.6-55.854545 55.854545-55.854546h32.581818c30.254545 0 53.527273 23.272727 55.854546 53.527273v4.654546h-30.254546c0-13.963636-11.636364-25.6-25.6-25.6H721.454545c-13.963636 0-25.6 11.636364-25.6 25.6v9.309091c0 27.927273-9.309091 37.236364-39.563636 37.236363H370.036364c-27.927273 0-44.218182-6.981818-44.218182-41.890909v-6.981818c0-13.963636-11.636364-25.6-25.6-25.6h-32.581818c-13.963636 0-25.6 11.636364-25.6 25.6v4.654545c0 34.909091-16.290909 41.890909-44.218182 41.890909H48.872727C13.963636 416.581818 0 402.618182 0 372.363636v-44.218181c0-55.854545 44.218182-100.072727 97.745455-100.072728h828.50909c53.527273 0 97.745455 44.218182 97.745455 100.072728v46.545454c0 30.254545-13.963636 41.890909-44.218182 41.890909z" fill="#FD5375" ></path><path d="M795.927273 486.4v9.309091c0 23.272727-18.618182 41.890909-41.890909 41.890909H721.454545c-23.272727 0-41.890909-18.618182-41.890909-41.890909v-9.309091c0-18.618182-4.654545-23.272727-23.272727-23.272727S395.636364 465.454545 372.363636 465.454545s-30.254545 4.654545-30.254545 25.6v4.654546c0 23.272727-18.618182 41.890909-41.890909 41.890909h-32.581818c-23.272727 0-41.890909-18.618182-41.890909-41.890909v-2.327273c0-25.6-6.981818-27.927273-27.927273-27.927273H46.545455c-25.6 0-32.581818 6.981818-32.581819 32.581819v421.236363c0 46.545455 37.236364 83.781818 81.454546 83.781818h828.509091c44.218182 0 81.454545-37.236364 81.454545-83.781818V493.381818c0-18.618182-6.981818-25.6-25.6-25.6h-160.581818c-18.618182-2.327273-23.272727 0-23.272727 18.618182z" fill="#FFB96C" ></path><path d="M926.254545 1017.018182H97.745455c-53.527273 0-97.745455-44.218182-97.745455-100.072727V495.709091c0-34.909091 13.963636-46.545455 46.545455-46.545455h151.272727c27.927273 0 44.218182 6.981818 44.218182 44.218182v2.327273c0 13.963636 11.636364 25.6 25.6 25.6h32.581818c13.963636 0 25.6-11.636364 25.6-25.6v-4.654546c0-37.236364 20.945455-41.890909 44.218182-41.890909h286.254545c27.927273 0 39.563636 11.636364 39.563636 39.563637v9.309091c0 13.963636 11.636364 25.6 25.6 25.6h32.581819c13.963636 0 25.6-11.636364 25.6-25.6V488.727273c0-32.581818 20.945455-37.236364 44.218181-37.236364h160.581819c34.909091 0 41.890909 23.272727 41.890909 41.890909v425.890909c-2.327273 51.2-46.545455 97.745455-100.072728 97.745455zM46.545455 479.418182c-11.636364 0-13.963636 2.327273-13.963637 2.327273s-2.327273 2.327273-2.327273 13.963636v421.236364c0 37.236364 30.254545 67.490909 67.49091 67.490909h828.50909c37.236364 0 67.490909-30.254545 67.49091-67.490909V488.727273c0-6.981818-2.327273-9.309091-2.327273-9.309091s-2.327273-2.327273-9.309091-2.327273h-172.218182v18.618182c-2.327273 30.254545-25.6 55.854545-55.854545 55.854545H721.454545c-30.254545 0-55.854545-25.6-55.854545-55.854545V488.727273v-6.981818H372.363636c-9.309091 0-11.636364 0-13.963636 2.327272v20.945455c-2.327273 30.254545-27.927273 51.2-55.854545 51.2h-32.581819c-27.927273 0-51.2-20.945455-55.854545-48.872727v-11.636364c0-9.309091 0-11.636364-2.327273-11.636364H46.545455z" fill="#FD5375" ></path><path d="M286.254545 367.709091c-16.290909 0-30.254545 18.618182-30.254545 41.890909v51.2c0 23.272727 13.963636 41.890909 30.254545 41.890909 16.290909 0 30.254545-18.618182 30.254546-41.890909v-51.2c0-23.272727-13.963636-41.890909-30.254546-41.890909zM737.745455 367.709091c-16.290909 0-30.254545 18.618182-30.254546 41.890909v51.2c0 23.272727 13.963636 41.890909 30.254546 41.890909 16.290909 0 30.254545-18.618182 30.254545-41.890909v-51.2c2.327273-23.272727-11.636364-41.890909-30.254545-41.890909zM756.363636 200.145455C728.436364 88.436364 628.363636 6.981818 512 6.981818s-216.436364 81.454545-244.363636 190.836364c0 0-2.327273 20.945455 32.581818 20.945454s39.563636-20.945455 39.563636-20.945454c25.6-72.145455 93.090909-123.345455 174.545455-123.345455s146.618182 51.2 174.545454 123.345455c0 0 4.654545 23.272727 37.236364 23.272727s30.254545-20.945455 30.254545-20.945454z" fill="#FC4248" ></path><path d="M72.145455 733.090909c-6.981818 0-13.963636-6.981818-13.963637-13.963636v-193.163637c0-6.981818 6.981818-13.963636 13.963637-13.963636s13.963636 6.981818 13.963636 13.963636v193.163637c0 6.981818-6.981818 13.963636-13.963636 13.963636z" fill="#FCFCFF" ></path><path d="M72.145455 763.345455m-13.963637 0a13.963636 13.963636 0 1 0 27.927273 0 13.963636 13.963636 0 1 0-27.927273 0Z" fill="#FCFCFF" ></path></symbol><symbol id="icon-icon_discovery_fill" viewBox="0 0 1024 1024"><path d="M640.690988 847.63727H384.703779c-17.672498 0-31.998785 14.326287-31.998785 31.998785s14.326287 31.998785 31.998785 31.998785h255.987209c17.672498 0 31.998785-14.326287 31.998784-31.998785s-14.326287-31.998785-31.998784-31.998785zM512.697895 1007.629147c52.344159 0 98.816586-25.136493 128.005372-63.996546H384.691499c29.189809 38.860053 75.662237 63.996546 128.006396 63.996546zM512.697895 15.677051c-212.066907 0-383.981325 171.914418-383.981325 383.981325 0 134.12372 68.766177 252.186649 172.965354 320.853565l8.735965 43.680848c5.982248 29.913287 32.248472 51.445696 62.754252 51.445696h279.051507c30.505781 0 56.770981-21.532409 62.754253-51.445696l8.735965-43.680848c104.199177-68.666916 172.965353-186.729845 172.965353-320.853565 0-212.066907-171.914418-383.981325-383.981324-383.981325z m224.37421 383.981325c-17.672498 0-31.998785-14.326287-31.998785-31.998785 0-70.688969-57.305147-127.994116-127.994116-127.994116-17.672498 0-31.998785-14.326287-31.998785-31.998785s14.326287-31.998785 31.998785-31.998785c106.033965 0 191.990662 85.956697 191.990663 191.990662 0.001023 17.673521-14.325263 31.999808-31.997762 31.999809z"  ></path></symbol><symbol id="icon-icon_message_fill" viewBox="0 0 1024 1024"><path d="M288.010553 489.070778c35.344996 0 63.996546-28.652574 63.996546-63.996546s-28.652574-63.996546-63.996546-63.996547c-35.344996 0-63.996546 28.652574-63.996546 63.996547s28.65155 63.996546 63.996546 63.996546z m223.989447 0c35.344996 0 63.996546-28.652574 63.996546-63.996546s-28.652574-63.996546-63.996546-63.996547-63.996546 28.652574-63.996546 63.996547 28.65155 63.996546 63.996546 63.996546z m223.989447 0c35.344996 0 63.996546-28.652574 63.996546-63.996546s-28.652574-63.996546-63.996546-63.996547-63.996546 28.652574-63.996546 63.996547 28.65155 63.996546 63.996546 63.996546zM527.999392 777.057795L317.478701 940.795996c-20.924565 16.274662-51.080376 12.504802-67.355037-8.419763a47.994084 47.994084 0 0 1-10.110265-29.468149V777.057795h-95.995331c-53.016471 0-95.995331-42.97886-95.995331-95.995331V169.087023c0-53.016471 42.97886-95.995331 95.995331-95.995331h735.964888c53.016471 0 95.995331 42.97886 95.995331 95.995331v511.975441c0 53.016471-42.97886 95.995331-95.995331 95.995331H527.999392z"  ></path></symbol><symbol id="icon-icon_namecard_fill" viewBox="0 0 1024 1024"><path d="M924.444587 131.281999H99.555413c-52.566216 0-95.179756 42.61354-95.179756 95.179756v571.077513c0 52.566216 42.61354 95.179756 95.179756 95.179757h824.889174c52.566216 0 95.179756-42.61354 95.179756-95.179757V226.460732c0-52.565193-42.61354-95.178733-95.179756-95.178733zM163.008584 543.726585h190.359512c17.522072 0 31.726585 14.204513 31.726586 31.726586s-14.204513 31.726585-31.726586 31.726585H163.008584c-17.522072 0-31.726585-14.204513-31.726585-31.726585s14.20349-31.726585 31.726585-31.726586z m380.718001 190.358489H163.008584c-17.522072 0-31.726585-14.204513-31.726585-31.726585s14.204513-31.726585 31.726585-31.726585h380.718001c17.522072 0 31.726585 14.204513 31.726586 31.726585s-14.204513 31.726585-31.726586 31.726585z m334.020447-191.539384a19.023262 19.023262 0 0 1-6.601349 1.180895l-242.358816-0.002046c-10.512425 0-19.034519-8.522094-19.034519-19.034519a19.033495 19.033495 0 0 1 1.191128-6.627954c4.516874-12.158924 12.656251-22.004153 24.419156-29.537733 28.732391-18.400069 78.815043-20.553105 78.815044-49.689703 0-7.759731-2.981914-17.482163-8.946767-26.223245-5.963829-8.741082-8.946766-11.654434-17.893532-23.403012-8.946766-11.748578-11.92868-29.043477-11.92868-37.784558 0-8.741082 5.963829-5.827729 5.963828-11.622712-0.415462-31.083949 3.77907-54.29765 32.804127-69.959352 5.940292-3.206018 20.013823-4.89652 26.732851-4.89652 7.361665-0.753153 0.073678-6.757914 16.313548-6.757914 16.239869 0 38.82526 7.154957 49.621141 29.30135 10.79588 22.147416 11.709693 46.454008 11.709692 52.280713 0 5.827729 5.963829 2.913353 5.963829 11.654435s-2.572592 26.03598-11.724019 37.784558c-9.151427 11.747555-12.133342 14.661931-18.098194 23.403012-5.964852 8.741082-8.946766 18.271132-8.946766 26.223245 0 29.136597 49.848315 31.289634 78.744436 49.689703 11.837606 7.538697 20.006659 17.393135 24.505113 29.563316l0.001023-0.001024c3.64911 9.862625-1.390673 20.813025-11.252274 24.459065z"  ></path></symbol><symbol id="icon-faxian" viewBox="0 0 1024 1024"><path d="M512 85.333333c235.637333 0 426.666667 191.029333 426.666667 426.666667S747.637333 938.666667 512 938.666667 85.333333 747.637333 85.333333 512 276.362667 85.333333 512 85.333333z m0 64c-200.298667 0-362.666667 162.368-362.666667 362.666667s162.368 362.666667 362.666667 362.666667 362.666667-162.368 362.666667-362.666667-162.368-362.666667-362.666667-362.666667z m149.162667 158.901334a42.666667 42.666667 0 0 1 54.602666 54.602666L637.642667 579.84a96 96 0 0 1-57.813334 57.802667l-216.992 78.122666a42.666667 42.666667 0 0 1-54.602666-54.602666l78.122666-217.002667a96 96 0 0 1 57.813334-57.802667z m-20.970667 75.573333l-174.346667 62.762667a32 32 0 0 0-19.274666 19.274666l-62.762667 174.346667 174.346667-62.762667a32 32 0 0 0 19.274666-19.274666l62.762667-174.346667z"  ></path></symbol><symbol id="icon-huati" viewBox="0 0 1024 1024"><path d="M476.021333 544h63.424l8.533334-64h-63.424l-8.533334 64z m-8.533333 64l-9.098667 68.224a32 32 0 0 1-63.445333-8.448L402.912 608H352a32 32 0 0 1 0-64h59.445333l8.533334-64H352a32 32 0 0 1 0-64h76.512l9.098667-68.224a32 32 0 0 1 63.445333 8.448L493.088 416h63.424l9.098667-68.224a32 32 0 0 1 63.445333 8.448L621.088 416H672a32 32 0 0 1 0 64h-59.445333l-8.533334 64H672a32 32 0 0 1 0 64h-76.512l-9.098667 68.224a32 32 0 0 1-63.445333-8.448L530.912 608h-63.424zM157.568 751.296c-11.008-18.688-18.218667-31.221333-21.802667-37.909333A424.885333 424.885333 0 0 1 85.333333 512C85.333333 276.362667 276.362667 85.333333 512 85.333333s426.666667 191.029333 426.666667 426.666667-191.029333 426.666667-426.666667 426.666667a424.778667 424.778667 0 0 1-219.125333-60.501334 2786.56 2786.56 0 0 0-20.053334-11.765333l-104.405333 28.48c-23.893333 6.506667-45.802667-15.413333-39.285333-39.296l28.437333-104.288z m65.301333 3.786667l-17.258666 63.306666 63.306666-17.258666a32 32 0 0 1 24.522667 3.210666 4515.84 4515.84 0 0 1 32.352 18.944A360.789333 360.789333 0 0 0 512 874.666667c200.298667 0 362.666667-162.368 362.666667-362.666667S712.298667 149.333333 512 149.333333 149.333333 311.701333 149.333333 512c0 60.586667 14.848 118.954667 42.826667 171.136 3.712 6.912 12.928 22.826667 27.370667 47.232a32 32 0 0 1 3.338666 24.714667z"  ></path></symbol><symbol id="icon-shequ" viewBox="0 0 1024 1024"><path d="M512 938.666667C276.362667 938.666667 85.333333 747.637333 85.333333 512S276.362667 85.333333 512 85.333333s426.666667 191.029333 426.666667 426.666667-191.029333 426.666667-426.666667 426.666667z m0-64c200.298667 0 362.666667-162.368 362.666667-362.666667S712.298667 149.333333 512 149.333333 149.333333 311.701333 149.333333 512s162.368 362.666667 362.666667 362.666667zM368.864 684.309333a32 32 0 1 1 40.917333-49.205333A159.189333 159.189333 0 0 0 512 672c37.888 0 73.674667-13.173333 102.186667-36.885333a32 32 0 0 1 40.917333 49.216A223.178667 223.178667 0 0 1 512 736a223.178667 223.178667 0 0 1-143.136-51.690667z"  ></path></symbol><symbol id="icon-shouye" viewBox="0 0 1024 1024"><path d="M155.584 342.56l312.874667-224.565333a74.666667 74.666667 0 0 1 87.082666 0l312.874667 224.565333A117.333333 117.333333 0 0 1 917.333333 437.866667V800c0 64.8-52.533333 117.333333-117.333333 117.333333H224c-64.8 0-117.333333-52.533333-117.333333-117.333333V437.877333a117.333333 117.333333 0 0 1 48.917333-95.317333z m37.322667 51.989333A53.333333 53.333333 0 0 0 170.666667 437.877333V800a53.333333 53.333333 0 0 0 53.333333 53.333333h576a53.333333 53.333333 0 0 0 53.333333-53.333333V437.877333a53.333333 53.333333 0 0 0-22.24-43.328L518.218667 169.984a10.666667 10.666667 0 0 0-12.437334 0L192.906667 394.56z"  ></path></symbol><symbol id="icon-faxian1" viewBox="0 0 1024 1024"><path d="M512 85.333333c235.637333 0 426.666667 191.029333 426.666667 426.666667S747.637333 938.666667 512 938.666667 85.333333 747.637333 85.333333 512 276.362667 85.333333 512 85.333333z m149.162667 222.901334L444.16 386.357333a96 96 0 0 0-57.802667 57.813334l-78.122666 216.992a42.666667 42.666667 0 0 0 54.602666 54.602666l217.002667-78.122666a96 96 0 0 0 57.802667-57.813334l78.122666-216.992a42.666667 42.666667 0 0 0-54.602666-54.602666zM512 565.333333a53.333333 53.333333 0 1 0 0-106.666666 53.333333 53.333333 0 0 0 0 106.666666z" fill="#1296db" ></path></symbol><symbol id="icon-huati1" viewBox="0 0 1024 1024"><path d="M476.021333 544h63.424l8.533334-64h-63.424l-8.533334 64zM512 85.333333c235.637333 0 426.666667 191.029333 426.666667 426.666667S747.637333 938.666667 512 938.666667a424.778667 424.778667 0 0 1-219.125333-60.501334 2786.56 2786.56 0 0 0-20.053334-11.765333l-104.405333 28.48c-23.893333 6.506667-45.802667-15.413333-39.285333-39.296l28.437333-104.288c-11.008-18.688-18.218667-31.221333-21.802667-37.909333A424.885333 424.885333 0 0 1 85.333333 512C85.333333 276.362667 276.362667 85.333333 512 85.333333z m89.557333 234.944a32 32 0 0 0-35.946666 27.498667L556.512 416h-63.424l7.968-59.776a32 32 0 0 0-63.445333-8.448L428.512 416H352a32 32 0 0 0 0 64h67.978667l-8.533334 64H352a32 32 0 0 0 0 64h50.912l-7.968 59.776a32 32 0 0 0 63.445333 8.448L467.488 608h63.424l-7.968 59.776a32 32 0 0 0 63.445333 8.448L595.488 608H672a32 32 0 0 0 0-64h-67.978667l8.533334-64H672a32 32 0 0 0 0-64h-50.912l7.968-59.776a32 32 0 0 0-27.498667-35.946667z"  ></path></symbol><symbol id="icon-shequ1" viewBox="0 0 1024 1024"><path d="M512 85.333333c235.637333 0 426.666667 191.029333 426.666667 426.666667S747.637333 938.666667 512 938.666667 85.333333 747.637333 85.333333 512 276.362667 85.333333 512 85.333333z m143.381333 497.781334A159.978667 159.978667 0 0 1 512 672a159.978667 159.978667 0 0 1-143.36-88.853333 32 32 0 1 0-57.301333 28.490666A223.968 223.968 0 0 0 512 736a223.968 223.968 0 0 0 200.682667-124.394667 32 32 0 0 0-57.301334-28.490666z" fill="#1296db" ></path></symbol><symbol id="icon-shouye1" viewBox="0 0 1024 1024"><path d="M555.541333 117.994667l312.874667 224.565333A117.333333 117.333333 0 0 1 917.333333 437.866667V800c0 64.8-52.533333 117.333333-117.333333 117.333333H640V746.666667c0-70.688-57.312-128-128-128s-128 57.312-128 128v170.666666H224c-64.8 0-117.333333-52.533333-117.333333-117.333333V437.877333a117.333333 117.333333 0 0 1 48.917333-95.317333l312.874667-224.565333a74.666667 74.666667 0 0 1 87.082666 0z" fill="#1296db" ></path></symbol></svg>',
                    x = (e = document.getElementsByTagName("script"))[e.length - 1].getAttribute("data-injectcss");
                if (x && !t.__iconfont__svg__cssinject__) {
                    t.__iconfont__svg__cssinject__ = !0;
                    try {
                        document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")
                    } catch (t) {
                        console && console.log(t)
                    }
                }

                function r() {
                    u || (u = !0, l())
                }
                c = function() {
                    var t, e, c, a, l, i = document.createElement("div");
                    i.innerHTML = n, n = null, (t = i.getElementsByTagName("svg")[0]) && (t.setAttribute("aria-hidden", "true"), t.style.position = "absolute", t.style.width = 0, t.style.height = 0, t.style.overflow = "hidden", e = t, (c = document.body).firstChild ? (a = e, (l = c.firstChild).parentNode.insertBefore(a, l)) : c.appendChild(e))
                }, document.addEventListener ? ~["complete", "loaded", "interactive"].indexOf(document.readyState) ? setTimeout(c, 0) : (a = function() {
                    document.removeEventListener("DOMContentLoaded", a, !1), c()
                }, document.addEventListener("DOMContentLoaded", a, !1)) : document.attachEvent && (l = c, i = t.document, u = !1, (v = function() {
                    try {
                        i.documentElement.doScroll("left")
                    } catch (t) {
                        return void setTimeout(v, 50)
                    }
                    r()
                })(), i.onreadystatechange = function() {
                    "complete" == i.readyState && (i.onreadystatechange = null, r())
                })
            }(window)
    },
    "61e8": function(t, e, c) {},
    6407: function(t, e, c) {
        "use strict";
        c.d(e, "f", (function() {
            return l
        })), c.d(e, "e", (function() {
            return i
        })), c.d(e, "g", (function() {
            return u
        })), c.d(e, "d", (function() {
            return v
        })), c.d(e, "a", (function() {
            return n
        })), c.d(e, "h", (function() {
            return x
        })), c.d(e, "b", (function() {
            return r
        })), c.d(e, "c", (function() {
            return y
        }));
        var a = c("b775"),
            l = function() {
                return Object(a["a"])({
                    url: "/stay/me",
                    method: "get"
                })
            },
            i = function() {
                return Object(a["a"])({
                    url: "/stay/leave",
                    method: "post"
                })
            },
            u = function(t) {
                var e = t.gps;
                return Object(a["a"])({
                    url: "/stay/report",
                    method: "post",
                    data: {
                        gps: e
                    }
                })
            },
            v = function() {
                return Object(a["a"])({
                    url: "/stay/isReport",
                    method: "get"
                })
            },
            n = function(t) {
                var e = t.tel,
                    c = t.teacher,
                    l = t.teacher_tel,
                    i = t.parent_tel,
                    u = t.campus,
                    v = t.dorm,
                    n = t.end_date,
                    x = t.reason,
                    r = t.stay_unit;
                return Object(a["a"])({
                    url: "/stay/apply",
                    method: "post",
                    data: {
                        tel: e,
                        teacher: c,
                        teacher_tel: l,
                        parent_tel: i,
                        campus: u,
                        dorm: v,
                        begin_date: "2021/01/16",
                        end_date: n,
                        reason: x,
                        stay_unit: r
                    }
                })
            },
            x = function() {
                return Object(a["a"])({
                    url: "/stay/view",
                    method: "get"
                })
            },
            r = function() {
                return Object(a["a"])({
                    url: "/stay/cancel",
                    method: "get"
                })
            },
            y = function() {
                return Object(a["a"])({
                    url: "/stay/index",
                    method: "get"
                })
            }
    },
    "6b43": function(t, e, c) {
        "use strict";
        c.d(e, "b", (function() {
            return l
        })), c.d(e, "a", (function() {
            return i
        }));
        var a = c("335a");

        function l(t, e) {
            a["a"].set(t, e)
        }

        function i(t) {
            return !!a["a"].has(t) && a["a"].get(t)
        }
    },
    7550: function(t, e, c) {
        "use strict";
        c.d(e, "e", (function() {
            return l
        })), c.d(e, "c", (function() {
            return i
        })), c.d(e, "d", (function() {
            return u
        })), c.d(e, "a", (function() {
            return v
        })), c.d(e, "b", (function() {
            return n
        })), c.d(e, "f", (function() {
            return x
        })), c.d(e, "h", (function() {
            return r
        })), c.d(e, "i", (function() {
            return y
        })), c.d(e, "g", (function() {
            return o
        }));
        c("99af"), c("b0c0");
        var a = c("b775"),
            l = function(t) {
                var e = t.lng,
                    c = t.lat;
                return Object(a["a"])({
                    url: "/bmap/yiban2baidu?lng=".concat(e, "&lat=").concat(c),
                    method: "get"
                })
            },
            i = function() {
                return Object(a["a"])({
                    url: "/novel/getBackCampusInfo",
                    method: "get"
                })
            },
            u = function() {
                return Object(a["a"])({
                    url: "/novel/getTraffic",
                    method: "get"
                })
            },
            v = function(t) {
                var e = t.longitude,
                    c = t.latitude,
                    l = t.address,
                    i = t.car,
                    u = t.number;
                return Object(a["a"])({
                    url: "/novel/confirmBackCampus",
                    method: "post",
                    data: {
                        longitude: e,
                        latitude: c,
                        address: l,
                        car: i,
                        number: u
                    }
                })
            },
            n = function() {
                return Object(a["a"])({
                    url: "/novel/dangerCar",
                    method: "post"
                })
            },
            x = function() {
                return Object(a["a"])({
                    url: "/novel/isReport",
                    method: "post"
                })
            },
            r = function() {
                return Object(a["a"])({
                    url: "/novel/reedit",
                    method: "post"
                })
            },
            y = function(t) {
                var e = t.temperature,
                    c = t.remark;
                return Object(a["a"])({
                    url: "/novel/reportTemperature",
                    method: "post",
                    data: {
                        temperature: e,
                        remark: c
                    }
                })
            },
            o = function(t) {
                var e = t.name,
                    c = t.college,
                    l = t.datetime,
                    i = t.vehicle,
                    u = t.vehicle_info,
                    v = t.local_info,
                    n = t.arrival_station,
                    x = t.car;
                return Object(a["a"])({
                    url: "/novel/postCheckIn",
                    method: "post",
                    data: {
                        name: e,
                        college: c,
                        datetime: l,
                        vehicle: i,
                        vehicle_info: u,
                        local_info: v,
                        arrival_station: n,
                        car: x
                    }
                })
            }
    },
    "7faf": function(t, e, c) {
        "use strict";
        var a = c("b8ff"),
            l = c.n(a);
        l.a
    },
    "81af": function(t, e, c) {
        "use strict";
        var a = c("a783"),
            l = c.n(a);
        l.a
    },
    "9fb0": function(t, e, c) {
        "use strict";
        c.r(e), c.d(e, "SET_USER_MODEL", (function() {
            return a
        })), c.d(e, "SET_USER_INFO", (function() {
            return l
        })), c.d(e, "SET_BIND_INFO", (function() {
            return i
        })), c.d(e, "SET_USER_ROLE", (function() {
            return u
        })), c.d(e, "SET_NEWS_LIST", (function() {
            return v
        })), c.d(e, "SET_SCORE_LIST", (function() {
            return n
        })), c.d(e, "SET_CLASS_TABLE", (function() {
            return x
        })), c.d(e, "SET_ELE_DATA", (function() {
            return r
        })), c.d(e, "SUBMIT_ON", (function() {
            return y
        })), c.d(e, "SUBMIT_OFF", (function() {
            return o
        })), c.d(e, "SET_WORK_STU_APPLY", (function() {
            return s
        })), c.d(e, "SET_TL", (function() {
            return p
        }));
        var a = "SET_USER_MODEL",
            l = "SET_USER_INFO",
            i = "SET_BIND_INFO",
            u = "SET_USER_ROLE",
            v = "SET_NEWS_LIST",
            n = "SET_SCORE_LIST",
            x = "SET_CLASS_TABLE",
            r = "SET_ELE_DATA",
            y = "SUBMIT_ON",
            o = "SUBMIT_OFF",
            s = "SET_WORK_STU_APPLY",
            p = "SET_TL"
    },
    a370: function(t, e, c) {},
    a675: function(t, e) {},
    a783: function(t, e, c) {},
    a990: function(t, e, c) {
        "use strict";
        var a = c("f1bb"),
            l = c.n(a);
        l.a
    },
    ab60: function(t, e, c) {},
    b775: function(t, e, c) {
        "use strict";
        c("0d03"), c("d3b7"), c("25f0"), c("4795");
        var a = c("bc3a"),
            l = c.n(a),
            i = c("4360"),
            u = c("63b4"),
            v = c("2daa"),
            n = l.a.create({
                baseURL: "production" === v["c"] ? "" : v["a"],
                timeout: 2e4
            });
        n.interceptors.request.use((function(t) {
            var e = i["a"].state.UserModel.jwtToken;
            return e && (t.headers["x-access-token"] = e), t
        }), (function(t) {
            return Promise.reject(t)
        })), n.interceptors.response.use((function(t) {
            var e = t.data;
            if (e.code < 4e3) {
                if (e.code, e.msg && "" !== e.msg) {
                    var c = u["a"].$create({
                        txt: e.msg,
                        type: "txt",
                        time: 2e3
                    }, !1).show();
                    x(c)
                }
                return Promise.resolve(t)
            }
            var a = u["a"].$create({
                txt: e.msg,
                type: "error",
                time: 2e3
            }, !1).show();
            return x(a), Promise.reject(t)
        }), (function(t) {
            var e = u["a"].$create({
                txt: t.toString(),
                type: "error",
                time: 2e3
            }, !1).show();
            return x(e), Promise.reject(t)
        }));
        var x = function(t) {
            setTimeout((function() {
                t.remove()
            }), 1e3)
        };
        e["a"] = n
    },
    b8ff: function(t, e, c) {},
    c3dc: function(t, e, c) {
        "use strict";
        var a = c("a370"),
            l = c.n(a);
        l.a
    },
    e70a: function(t, e, c) {},
    e7ac: function(t, e, c) {},
    f03e: function(t, e, c) {
        "use strict";
        var a = c("e7ac"),
            l = c.n(a);
        l.a
    },
    f1bb: function(t, e, c) {},
    f65e: function(t, e, c) {
        "use strict";
        var a = c("2539"),
            l = c.n(a);
        l.a
    },
    fa7d: function(t, e, c) {
        "use strict";
        c.d(e, "a", (function() {
            return l
        })), c.d(e, "b", (function() {
            return i
        }));
        c("99af"), c("4de4"), c("caad"), c("c975"), c("277d"), c("d81d"), c("fb6a"), c("a434"), c("0d03"), c("a9e3"), c("b680"), c("b64b"), c("d3b7"), c("acd8"), c("4d63"), c("ac1f"), c("25f0"), c("6062"), c("2532"), c("3ca3"), c("466d"), c("5319"), c("1276"), c("ddb0"), c("2909");
        var a = c("53ca"),
            l = function t(e) {
                var c = e.constructor === Object || e.constructor === Array ? new e.constructor : new e.constructor(e.valueOf());
                for (var l in e) e.hasOwnProperty(l) && c[l] !== e[l] && ("object" === Object(a["a"])(e[l]) ? c[l] = t(e[l]) : c[l] = e[l]);
                return c
            },
            i = function(t, e) {
                var c, a, l = e,
                    i = l.length,
                    u = !0,
                    v = 0,
                    n = 2e-10,
                    x = t;
                c = l[0];
                for (var r = 1; r <= i; ++r) {
                    if (x.lng === c.lng && x.lat === c.lat) return u;
                    if (a = l[r % i], x.lat < Math.min(c.lat, a.lat) || x.lat > Math.max(c.lat, a.lat)) c = a;
                    else {
                        if (x.lat > Math.min(c.lat, a.lat) && x.lat < Math.max(c.lat, a.lat)) {
                            if (x.lng <= Math.max(c.lng, a.lng)) {
                                if (c.lat == a.lat && x.lng >= Math.min(c.lng, a.lng)) return u;
                                if (c.lng == a.lng) {
                                    if (c.lng == x.lng) return u;
                                    ++v
                                } else {
                                    var y = (x.lat - c.lat) * (a.lng - c.lng) / (a.lat - c.lat) + c.lng;
                                    if (Math.abs(x.lng - y) < n) return u;
                                    x.lng < y && ++v
                                }
                            }
                        } else if (x.lat == a.lat && x.lng <= a.lng) {
                            var o = l[(r + 1) % i];
                            x.lat >= Math.min(c.lat, o.lat) && x.lat <= Math.max(c.lat, o.lat) ? ++v : v += 2
                        }
                        c = a
                    }
                }
                return v % 2 != 0
            }
    }
});