(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["dx-novel"], {
        "03ef": function(e, t, r) {
            "use strict";
            r.r(t);
            var n = function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", {
                        staticClass: "register"
                    }, [r("div", {
                        staticClass: "user-info"
                    }, [r("div", {
                        staticClass: "body"
                    }, [r("p", [r("span", [e._v("司机：")]), r("span", [e._v(e._s(e.info.driver))])]), r("p", [r("span", [e._v("司机联系方式：")]), r("span", [e._v(e._s(e.info.driver_tel))])])])]), r("div", {
                        staticClass: "btn-group"
                    }, [r("dx-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: e.callNum
                        }
                    }, [e._v("联系司机")]), r("dx-button", {
                        attrs: {
                            type: "info"
                        },
                        on: {
                            click: function(t) {
                                return e.$router.back()
                            }
                        }
                    }, [e._v("返 回")])], 1)])
                },
                a = [],
                i = (r("96cf"), r("1da1")),
                c = r("7550"),
                s = {
                    name: "traffic",
                    activated: function() {
                        var e = this;
                        return Object(i["a"])(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, e.getTraffic();
                                    case 2:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    data: function() {
                        return {
                            info: {
                                driver: "",
                                driver_tel: ""
                            }
                        }
                    },
                    methods: {
                        getTraffic: function() {
                            var e = this;
                            return Object(i["a"])(regeneratorRuntime.mark((function t() {
                                var r;
                                return regeneratorRuntime.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, Object(c["d"])();
                                        case 2:
                                            r = t.sent, e.info = r.data.data;
                                        case 4:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        callNum: function() {
                            this.info.driver_tel ? this.$yb.phone_fun(this.info.driver_tel) : alert("没有获取到电话")
                        }
                    }
                },
                o = s,
                l = (r("7145"), r("2877")),
                u = Object(l["a"])(o, n, a, !1, null, "28808210", null);
            t["default"] = u.exports
        },
        "056d": function(e, t, r) {
            "use strict";
            var n = r("20e6"),
                a = r.n(n);
            a.a
        },
        "20e6": function(e, t, r) {},
        3400: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", {
                        staticClass: "novel-layout"
                    }, [r("keep-alive", [r("router-view")], 1)], 1)
                },
                a = [],
                i = {
                    name: "novel-layout"
                },
                c = i,
                s = (r("056d"), r("2877")),
                o = Object(s["a"])(c, n, a, !1, null, "08122b80", null);
            t["default"] = o.exports
        },
        "35a0": function(e, t, r) {
            "use strict";
            r.r(t);
            var n = function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", {
                        staticClass: "register"
                    }, [r("div", {
                        staticClass: "user-info"
                    }, [r("div", {
                        staticClass: "header",
                        class: e.passColor
                    }, [e._v("返校信息-" + e._s(e.info.pass))]), r("div", {
                        staticClass: "body"
                    }, [r("p", [r("span", [e._v("姓名：")]), r("span", [e._v(e._s(e.info.name) + "（" + e._s(e.info.code) + "）")])]), r("p", [r("span", [e._v("学院：")]), r("span", [e._v(e._s(e.info.department))])]), r("p", [r("span", [e._v("班级：")]), r("span", [e._v(e._s(e.info.class_name))])]), r("p", [r("span", [e._v("校区：")]), r("span", [e._v(e._s(e.info.campus))]), r("span", [e._v(" 宿舍：")]), r("span", [e._v(e._s(e.info.building) + "栋" + e._s(e.info.dorm) + "室")])]), r("p", [r("span", [e._v("抵桂时间：")]), r("span", [e._v(e._s(e.info.arrival))])]), r("p", [r("span", [e._v("交通信息：")]), r("span", [e._v(e._s(e.info.traffic))])]), r("p", [r("span", [e._v("到校登记：")]), r("span", [e._v(e._s(e.info.register))])])])]), r("div", {
                        staticClass: "btn-group"
                    }, ["已通过" === e.info.pass ? r("dx-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: e.confirmLocation
                        }
                    }, [e._v("到校登记")]) : e._e(), r("dx-button", {
                        attrs: {
                            type: "success"
                        },
                        on: {
                            click: function(t) {
                                return e.$router.push({
                                    name: "novel-check-in"
                                })
                            }
                        }
                    }, [e._v("重新填写")]), r("dx-button", {
                        attrs: {
                            type: "info"
                        },
                        on: {
                            click: function(t) {
                                return e.$router.back()
                            }
                        }
                    }, [e._v("返 回")])], 1), r("p", {
                        staticClass: "confirm-info"
                    }, [e._v("防截图")]), e._m(0)])
                },
                a = [function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", {
                        staticClass: "spinner"
                    }, [r("div"), r("div"), r("div"), r("div"), r("div"), r("div"), r("div"), r("div"), r("div")])
                }],
                i = (r("d3b7"), r("96cf"), r("1da1")),
                c = r("7550"),
                s = r("fa7d"),
                o = {
                    name: "register",
                    activated: function() {
                        var e = this;
                        return Object(i["a"])(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return e.toast = e.$createToast({
                                            txt: "定位中...",
                                            mask: !0,
                                            time: 0
                                        }), t.next = 3, e.getRegisterInfo();
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    data: function() {
                        return {
                            baiduVisible: !1,
                            toast: null,
                            info: {
                                name: "",
                                code: "",
                                department: "",
                                class_name: "",
                                campus: "",
                                arrival: "",
                                traffic: "",
                                building: "",
                                dorm: "",
                                register: "未登记到校",
                                pass: "未通过",
                                car: ""
                            },
                            polygonPaths: [{
                                campus: "雁山校区",
                                paths: [{
                                    lng: 110.304344,
                                    lat: 25.106253
                                }, {
                                    lng: 110.304344,
                                    lat: 25.093197
                                }, {
                                    lng: 110.284078,
                                    lat: 25.093197
                                }, {
                                    lng: 110.284078,
                                    lat: 25.106253
                                }]
                            }, {
                                campus: "育才校区",
                                paths: [{
                                    lng: 110.337563,
                                    lat: 25.274035
                                }, {
                                    lng: 110.337563,
                                    lat: 25.267614
                                }, {
                                    lng: 110.328221,
                                    lat: 25.267614
                                }, {
                                    lng: 110.328221,
                                    lat: 25.274035
                                }]
                            }, {
                                campus: "王城校区",
                                paths: [{
                                    lng: 110.304236,
                                    lat: 25.290853
                                }, {
                                    lng: 110.307901,
                                    lat: 25.290118
                                }, {
                                    lng: 110.307021,
                                    lat: 25.285086
                                }, {
                                    lng: 110.303302,
                                    lat: 25.285609
                                }]
                            }],
                            number: null,
                            column1: [{
                                text: "网约车",
                                value: "网约车"
                            }, {
                                text: "出租车",
                                value: "出租车"
                            }, {
                                text: "交通专线",
                                value: "交通专线"
                            }, {
                                text: "自驾",
                                value: "自驾"
                            }, {
                                text: "自行车",
                                value: "自行车"
                            }, {
                                text: "走路",
                                value: "走路"
                            }, {
                                text: "公交车",
                                value: "公交车"
                            }]
                        }
                    },
                    computed: {
                        passColor: function() {
                            return {
                                "bg-danger": "未通过" === this.info.pass || "公交车" === this.info.car,
                                "bg-warning": "审核中" === this.info.pass,
                                "bg-success": "已通过" === this.info.pass
                            }
                        }
                    },
                    methods: {
                        getRegisterInfo: function() {
                            var e = this;
                            return Object(i["a"])(regeneratorRuntime.mark((function t() {
                                var r;
                                return regeneratorRuntime.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, Object(c["c"])();
                                        case 3:
                                            r = t.sent, e.info = r.data.data, t.next = 10;
                                            break;
                                        case 7:
                                            t.prev = 7, t.t0 = t["catch"](0), console.log(t.t0);
                                        case 10:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [0, 7]
                                ])
                            })))()
                        },
                        confirmLocation: function() {
                            var e = this;
                            "公交车" !== this.info.car ? "未登记到校" === this.info.register ? this.$createActionSheet({
                                title: "选择登记方式",
                                active: 0,
                                data: [{
                                    content: "易班定位"
                                }, {
                                    content: "执勤点确认"
                                }],
                                onSelect: function() {
                                    var t = Object(i["a"])(regeneratorRuntime.mark((function t(r, n) {
                                        var a, s, o, l, u, p, d, f, m;
                                        return regeneratorRuntime.wrap((function(t) {
                                            while (1) switch (t.prev = t.next) {
                                                case 0:
                                                    if (0 !== n) {
                                                        t.next = 30;
                                                        break
                                                    }
                                                    return t.prev = 1, e.toast.show(), t.next = 5, e.$yb.location();
                                                case 5:
                                                    return a = t.sent, s = a.longitude, o = a.latitude, l = a.address, u = {
                                                        lng: s,
                                                        lat: o
                                                    }, t.next = 10, Object(c["e"])(u);
                                                case 10:
                                                    if (p = t.sent, d = p.data.data, 0 !== d.status) {
                                                        t.next = 16;
                                                        break
                                                    }
                                                    f = {
                                                        lng: d.result[0].x,
                                                        lat: d.result[0].y
                                                    }, t.next = 19;
                                                    break;
                                                case 16:
                                                    return alert("GPS坐标转换失败"), e.toast.hide(), t.abrupt("return");
                                                case 19:
                                                    e.toast.hide(), m = {
                                                        longitude: f.lng,
                                                        latitude: f.lat,
                                                        address: l
                                                    }, e.showLocate(m), t.next = 28;
                                                    break;
                                                case 24:
                                                    t.prev = 24, t.t0 = t["catch"](1), alert(t.t0), e.toast.hide();
                                                case 28:
                                                    t.next = 31;
                                                    break;
                                                case 30:
                                                    1 === n && e.$createDialog({
                                                        type: "prompt",
                                                        title: "执勤点密码",
                                                        content: "输入时请不要给学生看到",
                                                        prompt: {
                                                            value: "",
                                                            placeholder: "请输入执勤点密码"
                                                        },
                                                        onConfirm: function() {
                                                            var t = Object(i["a"])(regeneratorRuntime.mark((function t(r, n) {
                                                                var a;
                                                                return regeneratorRuntime.wrap((function(t) {
                                                                    while (1) switch (t.prev = t.next) {
                                                                        case 0:
                                                                            if (7 !== n.length || "5846412" !== n) {
                                                                                t.next = 7;
                                                                                break
                                                                            }
                                                                            return t.next = 3, Object(c["a"])({
                                                                                longitude: "000",
                                                                                latitude: "000",
                                                                                address: "广西师范大学",
                                                                                car: "执勤点协助",
                                                                                number: n
                                                                            });
                                                                        case 3:
                                                                            a = t.sent, e.info = a.data.data, t.next = 8;
                                                                            break;
                                                                        case 7:
                                                                            alert("密码错误");
                                                                        case 8:
                                                                        case "end":
                                                                            return t.stop()
                                                                    }
                                                                }), t)
                                                            })));

                                                            function r(e, r) {
                                                                return t.apply(this, arguments)
                                                            }
                                                            return r
                                                        }()
                                                    }).show();
                                                case 31:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), t, null, [
                                            [1, 24]
                                        ])
                                    })));

                                    function r(e, r) {
                                        return t.apply(this, arguments)
                                    }
                                    return r
                                }(),
                                onCancel: function() {}
                            }).show() : this.$createDialog({
                                type: "alert",
                                title: "系统提示",
                                content: "您已登记到校，请不要重复登记",
                                icon: "cubeic-alert"
                            }).show() : this.$createDialog({
                                type: "alert",
                                title: "系统提示",
                                content: "由于您通过乘坐公交车返回学校，到校登记功能被系统锁定，请联系辅导员说明情况。",
                                icon: "cubeic-close"
                            }).show()
                        },
                        confirmBackCampus: function(e, t, r) {
                            var n = this;
                            return Object(i["a"])(regeneratorRuntime.mark((function a() {
                                var i, s, o;
                                return regeneratorRuntime.wrap((function(a) {
                                    while (1) switch (a.prev = a.next) {
                                        case 0:
                                            if (i = n.info.car, "公交车" !== i) {
                                                a.next = 3;
                                                break
                                            }
                                            return a.abrupt("return");
                                        case 3:
                                            if (null !== i && "" !== i) {
                                                a.next = 9;
                                                break
                                            }
                                            return a.next = 6, n.updateCar(i);
                                        case 6:
                                            i = a.sent, a.next = 12;
                                            break;
                                        case 9:
                                            return a.next = 11, n.confirmCar(i);
                                        case 11:
                                            i = a.sent;
                                        case 12:
                                            if (n.info.car = i, "公交车" !== i) {
                                                a.next = 19;
                                                break
                                            }
                                            return a.next = 16, Object(c["b"])();
                                        case 16:
                                            return a.next = 18, n.getRegisterInfo();
                                        case 18:
                                            return a.abrupt("return");
                                        case 19:
                                            if ("网约车" !== i && "出租车" !== i && "交通专线" !== i && "自驾" !== i) {
                                                a.next = 25;
                                                break
                                            }
                                            return a.next = 22, n.confirmCarNumber();
                                        case 22:
                                            s = a.sent, a.next = 26;
                                            break;
                                        case 25:
                                            s = i;
                                        case 26:
                                            return a.next = 28, Object(c["a"])({
                                                longitude: e,
                                                latitude: t,
                                                address: r,
                                                car: i,
                                                number: s
                                            });
                                        case 28:
                                            o = a.sent, n.info = o.data.data;
                                        case 30:
                                        case "end":
                                            return a.stop()
                                    }
                                }), a)
                            })))()
                        },
                        confirmCar: function(e) {
                            var t = this;
                            return Object(i["a"])(regeneratorRuntime.mark((function r() {
                                return regeneratorRuntime.wrap((function(r) {
                                    while (1) switch (r.prev = r.next) {
                                        case 0:
                                            return r.abrupt("return", new Promise((function(r, n) {
                                                t.$createDialog({
                                                    type: "confirm",
                                                    title: "请确认您的抵桂返校交通工具",
                                                    content: e,
                                                    confirmBtn: {
                                                        text: "确认交通方式",
                                                        active: !0,
                                                        disabled: !1,
                                                        href: "javascript:;"
                                                    },
                                                    cancelBtn: {
                                                        text: "修改",
                                                        active: !1,
                                                        disabled: !1,
                                                        href: "javascript:;"
                                                    },
                                                    onConfirm: function() {
                                                        return r(e)
                                                    },
                                                    onCancel: function() {
                                                        return r(t.updateCar(e))
                                                    }
                                                }).show()
                                            })));
                                        case 1:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r)
                            })))()
                        },
                        updateCar: function(e) {
                            var t = this;
                            return Object(i["a"])(regeneratorRuntime.mark((function r() {
                                return regeneratorRuntime.wrap((function(r) {
                                    while (1) switch (r.prev = r.next) {
                                        case 0:
                                            return r.abrupt("return", new Promise((function(r, n) {
                                                t.$createPicker({
                                                    title: "抵桂返校交通工具",
                                                    data: [t.column1],
                                                    onSelect: function(e, n, a) {
                                                        return r(t.confirmCar(e[0]))
                                                    },
                                                    onCancel: function() {
                                                        return r(t.confirmCar(e))
                                                    }
                                                }).show()
                                            })));
                                        case 1:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r)
                            })))()
                        },
                        confirmCarNumber: function() {
                            var e = this;
                            return Object(i["a"])(regeneratorRuntime.mark((function t() {
                                return regeneratorRuntime.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.abrupt("return", new Promise((function(t, r) {
                                                e.$createDialog({
                                                    type: "prompt",
                                                    title: "返校乘车车牌号",
                                                    content: "完整车牌号，例如：桂C12345",
                                                    prompt: {
                                                        value: "",
                                                        placeholder: "请输入您返校时乘坐车辆的车牌号"
                                                    },
                                                    cancelBtn: {
                                                        text: "忘记了",
                                                        active: !1,
                                                        disabled: !1,
                                                        href: "javascript:;"
                                                    },
                                                    onConfirm: function(r, n) {
                                                        return n.length >= 6 ? t(n) : (alert("车牌号格式错误，请重新输入"), t(e.confirmCarNumber()))
                                                    },
                                                    onCancel: function() {
                                                        return t("忘记车牌")
                                                    }
                                                }).show()
                                            })));
                                        case 1:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        showLocate: function(e) {
                            for (var t = this, r = e.longitude, n = e.latitude, a = e.address, i = {
                                    lng: r,
                                    lat: n
                                }, c = 0; c < this.polygonPaths.length; c++) {
                                for (var o = this.polygonPaths[c].paths, l = [], u = 0; u < o.length; u++) l.push({
                                    lng: o[u].lng,
                                    lat: o[u].lat
                                });
                                if (Object(s["b"])(i, l)) return void this.$createDialog({
                                    type: "confirm",
                                    title: this.polygonPaths[c].campus,
                                    content: a,
                                    icon: "cubeic-alert",
                                    confirmBtn: {
                                        text: "确认位置",
                                        active: !0,
                                        disabled: !1,
                                        href: "javascript:;"
                                    },
                                    cancelBtn: {
                                        text: "重新定位",
                                        active: !1,
                                        disabled: !1,
                                        href: "javascript:;"
                                    },
                                    onConfirm: function() {
                                        t.confirmBackCampus(r, n, a)
                                    },
                                    onCancel: function() {}
                                }).show()
                            }
                            this.$createDialog({
                                type: "alert",
                                title: "位置错误",
                                content: "您不在三个校区附近，请尝试重新定位或请联系执勤老师、学院管理员，或联系技术人员解决：chenzhtbb@qq.com",
                                icon: "cubeic-close"
                            }).show()
                        }
                    }
                },
                l = o,
                u = (r("e2ed"), r("2877")),
                p = Object(u["a"])(l, n, a, !1, null, "c4286ee8", null);
            t["default"] = p.exports
        },
        4876: function(e, t, r) {
            "use strict";
            var n = r("f6fc"),
                a = r.n(n);
            a.a
        },
        "656e": function(e, t, r) {
            "use strict";
            var n = r("a87d"),
                a = r.n(n);
            a.a
        },
        7145: function(e, t, r) {
            "use strict";
            var n = r("dec5"),
                a = r.n(n);
            a.a
        },
        "785c": function(e, t, r) {
            "use strict";
            r.r(t);
            var n = function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", {
                        staticClass: "report"
                    }, [r("dx-form", {
                        ref: "form",
                        attrs: {
                            title: "广西师范大学晨午间健康报告",
                            description: "为学校疫情防控需要，以及您的个人身体健康，请您如实测量体温并填写信息。\n          每日晨报：07：00-10：00\n          每日午报：12：00-15：00",
                            schema: e.schema
                        },
                        on: {
                            submit: e.handleSubmit
                        }
                    }), r("result", {
                        attrs: {
                            data: e.data,
                            visible: e.visible
                        },
                        on: {
                            close: function(t) {
                                e.visible = !1
                            }
                        }
                    })], 1)
                },
                a = [],
                i = (r("d3b7"), r("acd8"), r("96cf"), r("1da1")),
                c = r("7550"),
                s = r("8992"),
                o = {
                    name: "report",
                    components: {
                        Result: s["a"]
                    },
                    data: function() {
                        return {
                            schema: [{
                                label: "体温",
                                type: "dx-input",
                                model: "temperature",
                                props: {
                                    placeholder: "填写您的体温",
                                    type: "number",
                                    maxlength: 5,
                                    clearable: !0
                                },
                                valid: {
                                    required: !0
                                }
                            }, {
                                label: "备注",
                                type: "dx-textarea",
                                model: "remark",
                                props: {
                                    placeholder: "如果您身体状况欠佳请填写备注",
                                    autoExpand: !0,
                                    maxlength: 255
                                },
                                valid: {
                                    required: !1
                                }
                            }],
                            visible: !1,
                            data: {
                                name: "",
                                temperature: 0,
                                err: 0,
                                date: "",
                                time: 0
                            }
                        }
                    },
                    activated: function() {
                        return Object(i["a"])(regeneratorRuntime.mark((function e() {
                            var t;
                            return regeneratorRuntime.wrap((function(e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, Object(c["f"])();
                                    case 3:
                                        t = e.sent, t.data.data.url, e.next = 9;
                                        break;
                                    case 7:
                                        e.prev = 7, e.t0 = e["catch"](0);
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 7]
                            ])
                        })))()
                    },
                    methods: {
                        handleSubmit: function(e) {
                            var t = this;
                            return Object(i["a"])(regeneratorRuntime.mark((function r() {
                                var n, a, i;
                                return regeneratorRuntime.wrap((function(r) {
                                    while (1) switch (r.prev = r.next) {
                                        case 0:
                                            return n = e.temperature, a = e.remark, r.prev = 1, r.next = 4, t.checkTemperature(n);
                                        case 4:
                                            if (i = r.sent, i) {
                                                r.next = 7;
                                                break
                                            }
                                            return r.abrupt("return");
                                        case 7:
                                            return t.$refs.form.start(), r.next = 10, t.$store.dispatch("ReportHealth", {
                                                temperature: n,
                                                remark: a
                                            });
                                        case 10:
                                            t.data = r.sent, t.visible = !0, r.next = 17;
                                            break;
                                        case 14:
                                            r.prev = 14, r.t0 = r["catch"](1), console.log(r.t0);
                                        case 17:
                                            return r.prev = 17, t.$refs.form.end(), r.finish(17);
                                        case 20:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r, null, [
                                    [1, 14, 17, 20]
                                ])
                            })))()
                        },
                        checkTemperature: function(e) {
                            var t = this;
                            return Object(i["a"])(regeneratorRuntime.mark((function r() {
                                return regeneratorRuntime.wrap((function(r) {
                                    while (1) switch (r.prev = r.next) {
                                        case 0:
                                            return e = parseFloat(e || 0), r.abrupt("return", new Promise((function(r, n) {
                                                if (parseFloat(e) < 37.3 && parseFloat(e) >= 35) return r(!0);
                                                var a = "您的体温：".concat(e, "度，高于37.3度，属发热，请再次确认体温后提交");
                                                parseFloat(e) < 35 && (a = "您的体温：".concat(e, "度，较低，请再次确认体温后提交")), t.$createDialog({
                                                    type: "confirm",
                                                    title: "体温异常",
                                                    content: a,
                                                    confirmBtn: {
                                                        text: "确认体温",
                                                        active: !0,
                                                        disabled: !1,
                                                        href: "javascript:;"
                                                    },
                                                    cancelBtn: {
                                                        text: "修改",
                                                        active: !1,
                                                        disabled: !1,
                                                        href: "javascript:;"
                                                    },
                                                    onConfirm: function() {
                                                        return r(!0)
                                                    },
                                                    onCancel: function() {
                                                        return r(!1)
                                                    }
                                                }).show()
                                            })));
                                        case 2:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r)
                            })))()
                        }
                    }
                },
                l = o,
                u = (r("cc09"), r("2877")),
                p = Object(u["a"])(l, n, a, !1, null, "3def435f", null);
            t["default"] = p.exports
        },
        8992: function(e, t, r) {
            "use strict";
            var n = function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("transition", {
                        attrs: {
                            name: "bottomSlide"
                        }
                    }, [r("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.visible && !e.close,
                            expression: "visible && !close"
                        }],
                        staticClass: "novel-result"
                    }, [r("div", {
                        staticClass: "icon cubeic-right success"
                    }), e.stay ? r("p", {
                        staticClass: "tip"
                    }, [e._v(e._s(e.data.name) + "寒假留宿签到")]) : r("p", {
                        staticClass: "tip"
                    }, [e._v(e._s(e.data.name) + "本次上报体温" + e._s(e.data.temperature) + "度")]), r("p", {
                        staticClass: "time"
                    }, [e._v(e._s(e.data.date))]), e.stay ? r("p", {
                        staticClass: "time",
                        staticStyle: {
                            color: "#aaa"
                        }
                    }, [e._v("您可以保存此截图作为本次签到凭证")]) : r("p", {
                        staticClass: "time",
                        staticStyle: {
                            color: "#aaa"
                        }
                    }, [e._v("您可以保存此截图作为本次上报体温凭证")]), r("p", {
                        staticClass: "time",
                        staticStyle: {
                            color: "#ccc"
                        }
                    }, [e._v(e._s(e.data.time))]), r("dx-button", {
                        on: {
                            click: e.handleBack
                        }
                    }, [e._v("返 回")])], 1)])
                },
                a = [],
                i = (r("ac1f"), r("5319"), r("96cf"), r("1da1")),
                c = r("7550"),
                s = "close",
                o = {
                    name: "novel-result",
                    props: {
                        visible: {
                            type: Boolean,
                            default: !1
                        },
                        stay: {
                            type: Boolean,
                            default: !1
                        },
                        data: {
                            type: Object,
                            default: function() {
                                return {
                                    name: "",
                                    temperature: 40,
                                    err: 0,
                                    date: "",
                                    time: 0
                                }
                            }
                        }
                    },
                    data: function() {
                        return {
                            close: !1
                        }
                    },
                    methods: {
                        handleFever: function(e) {
                            var t = this;
                            return Object(i["a"])(regeneratorRuntime.mark((function r() {
                                return regeneratorRuntime.wrap((function(r) {
                                    while (1) switch (r.prev = r.next) {
                                        case 0:
                                            return t.handleClose(e), r.next = 3, t.$router.replace({
                                                name: "novel-fever"
                                            });
                                        case 3:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r)
                            })))()
                        },
                        handleReedit: function(e) {
                            var t = this;
                            return Object(i["a"])(regeneratorRuntime.mark((function r() {
                                return regeneratorRuntime.wrap((function(r) {
                                    while (1) switch (r.prev = r.next) {
                                        case 0:
                                            return r.next = 2, Object(c["h"])();
                                        case 2:
                                            t.handleClose(e);
                                        case 3:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r)
                            })))()
                        },
                        handleClose: function(e) {
                            this.close = !0, this.$emit(s, e)
                        },
                        handleBack: function(e) {
                            this.handleClose(e), this.$router.back()
                        }
                    },
                    watch: {
                        visible: function(e) {
                            e && (this.close = !1)
                        }
                    }
                },
                l = o,
                u = (r("656e"), r("2877")),
                p = Object(u["a"])(l, n, a, !1, null, "69f44fb8", null);
            t["a"] = p.exports
        },
        a41c: function(e, t, r) {},
        a7c4: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", {
                        staticClass: "fever"
                    }, [r("dx-form", {
                        ref: "form",
                        attrs: {
                            title: "广西师范大学学生发热情况跟踪表",
                            description: "您属于发热，请配合学校疫情防控工作并如实填写此表。填写完毕后请及时联系辅导员！",
                            schema: e.schema
                        },
                        on: {
                            submit: e.handleSubmit
                        }
                    })], 1)
                },
                a = [],
                i = {
                    name: "fever",
                    data: function() {
                        return {
                            schema: [{
                                label: "姓名",
                                type: "dx-input",
                                model: "name",
                                props: {
                                    placeholder: "填写您的姓名",
                                    type: "number",
                                    maxlength: 5,
                                    clearable: !0
                                },
                                valid: {
                                    required: !0
                                }
                            }, {
                                label: "学号",
                                type: "dx-input",
                                model: "code",
                                props: {
                                    placeholder: "填写您的学号",
                                    type: "number",
                                    maxlength: 5,
                                    clearable: !0
                                },
                                valid: {
                                    required: !0
                                }
                            }, {
                                label: "学院",
                                type: "dx-input",
                                model: "college",
                                props: {
                                    placeholder: "填写您的学院",
                                    type: "number",
                                    maxlength: 5,
                                    clearable: !0
                                },
                                valid: {
                                    required: !0
                                }
                            }, {
                                label: "性别",
                                type: "dx-input",
                                model: "sex",
                                props: {
                                    placeholder: "填写您的体温",
                                    type: "number",
                                    maxlength: 5,
                                    clearable: !0
                                },
                                valid: {
                                    required: !0
                                }
                            }, {
                                label: "联系电话",
                                type: "dx-input",
                                model: "tel",
                                props: {
                                    placeholder: "填写您的联系电话",
                                    type: "number",
                                    maxlength: 5,
                                    clearable: !0
                                },
                                valid: {
                                    required: !0
                                }
                            }, {
                                label: "辅导员",
                                type: "dx-input",
                                model: "teacher",
                                props: {
                                    placeholder: "填写您的辅导员",
                                    type: "number",
                                    maxlength: 5,
                                    clearable: !0
                                },
                                valid: {
                                    required: !0
                                }
                            }, {
                                label: "体温",
                                type: "dx-input",
                                model: "temperature",
                                props: {
                                    placeholder: "填写您的体温",
                                    type: "number",
                                    maxlength: 5,
                                    clearable: !0
                                },
                                valid: {
                                    required: !0
                                }
                            }]
                        }
                    },
                    methods: {
                        handleSubmit: function(e) {}
                    }
                },
                c = i,
                s = (r("4876"), r("2877")),
                o = Object(s["a"])(c, n, a, !1, null, "3c882be3", null);
            t["default"] = o.exports
        },
        a87d: function(e, t, r) {},
        b829: function(e, t, r) {},
        cc09: function(e, t, r) {
            "use strict";
            var n = r("b829"),
                a = r.n(n);
            a.a
        },
        dec5: function(e, t, r) {},
        e2ed: function(e, t, r) {
            "use strict";
            var n = r("a41c"),
                a = r.n(n);
            a.a
        },
        f6fc: function(e, t, r) {},
        fff5: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", {
                        staticClass: "check-in"
                    }, [r("dx-form", {
                        ref: "form",
                        attrs: {
                            title: e.title,
                            description: e.description,
                            schema: e.schema,
                            order: "",
                            defaultValue: e.defaultValue
                        },
                        on: {
                            submit: e.handleSubmit
                        }
                    })], 1)
                },
                a = [],
                i = (r("96cf"), r("1da1")),
                c = {
                    name: "check-in",
                    data: function() {
                        return {
                            defaultValue: {},
                            title: "广西师范大学返校申请表",
                            description: "请您如实填写返校申请表",
                            schema: [{
                                label: "学号",
                                type: "dx-input",
                                model: "code",
                                props: {
                                    placeholder: "请输入您的学号",
                                    readonly: !0
                                },
                                valid: {
                                    required: !0
                                }
                            }, {
                                label: "姓名",
                                type: "dx-input",
                                model: "name",
                                props: {
                                    placeholder: "请输入您的姓名",
                                    readonly: !0
                                },
                                valid: {
                                    required: !0
                                }
                            }, {
                                label: "学院",
                                type: "dx-input",
                                model: "college",
                                props: {
                                    placeholder: "请输入您的学院",
                                    readonly: !0
                                },
                                valid: {
                                    required: !0
                                }
                            }, {
                                label: "抵桂时间",
                                type: "dx-date-picker",
                                model: "datetime",
                                props: {
                                    placeholder: "请选择抵桂时间",
                                    type: "sj"
                                },
                                valid: {
                                    required: !0
                                }
                            }, {
                                label: "主要交通工具",
                                type: "dx-radio",
                                model: "vehicle",
                                props: {
                                    options: ["飞机", "火车", "大巴", "自驾"]
                                },
                                valid: {
                                    required: !0
                                }
                            }, {
                                label: "车次航班",
                                type: "dx-input",
                                model: "vehicle_info",
                                props: {
                                    placeholder: "请输入车次航班"
                                },
                                valid: {
                                    required: !0
                                }
                            }, {
                                label: "出发地",
                                type: "dx-local-picker",
                                model: "local_info",
                                props: {
                                    placeholder: "请选择出发地"
                                },
                                valid: {
                                    required: !0
                                }
                            }, {
                                label: "到达站",
                                type: "dx-radio",
                                model: "arrival_station",
                                props: {
                                    options: ["两江机场", "桂林站", "桂林西站", "桂林北站", "汽车总站", "直达到校"]
                                },
                                valid: {
                                    required: !0
                                }
                            }, {
                                label: "到校交通",
                                type: "dx-radio",
                                model: "car",
                                props: {
                                    options: ["网约车", "出租车", "交通专线", "自驾"]
                                },
                                valid: {
                                    required: !0
                                }
                            }]
                        }
                    },
                    activated: function() {
                        var e = this;
                        return Object(i["a"])(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, e.$nextTick();
                                    case 2:
                                        return t.next = 4, e.getUserInfo();
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    methods: {
                        getUserInfo: function() {
                            var e = this;
                            return Object(i["a"])(regeneratorRuntime.mark((function t() {
                                var r, n, a;
                                return regeneratorRuntime.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, e.$store.dispatch("GetPrevUserInfo", 1);
                                        case 3:
                                            if (r = t.sent, 5e3 === r.code)
                                                for (n = 0; n < 6; n++) e.schema[n].props.hasOwnProperty("readonly") && (e.schema[n].props.readonly = !1);
                                            e.defaultValue = r.data, t.next = 11;
                                            break;
                                        case 8:
                                            for (t.prev = 8, t.t0 = t["catch"](0), a = 0; a < 6; a++) e.schema[a].props.hasOwnProperty("readonly") && (e.schema[a].props.readonly = !1);
                                        case 11:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [0, 8]
                                ])
                            })))()
                        },
                        handleSubmit: function(e) {
                            var t = this;
                            return Object(i["a"])(regeneratorRuntime.mark((function r() {
                                return regeneratorRuntime.wrap((function(r) {
                                    while (1) switch (r.prev = r.next) {
                                        case 0:
                                            return r.prev = 0, t.$refs.form.start(), r.next = 4, t.$store.dispatch("CreateCheckIn", e);
                                        case 4:
                                            return r.next = 6, t.$router.back();
                                        case 6:
                                            r.next = 10;
                                            break;
                                        case 8:
                                            r.prev = 8, r.t0 = r["catch"](0);
                                        case 10:
                                            return r.prev = 10, t.$refs.form.end(), r.finish(10);
                                        case 13:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r, null, [
                                    [0, 8, 10, 13]
                                ])
                            })))()
                        }
                    }
                },
                s = c,
                o = r("2877"),
                l = Object(o["a"])(s, n, a, !1, null, "bee60c5c", null);
            t["default"] = l.exports
        }
    }
]);