(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["dx-campus"], {
        "0827": function(e, t, r) {},
        "09c4": function(e, t, r) {
            e.exports = r.p + "img/GXSDCWCJF.0a7a2008.jpg"
        },
        "15b2": function(e, t, r) {
            "use strict";
            r.r(t);
            var d = function() {
                    var e = this,
                        t = e.$createElement,
                        d = e._self._c || t;
                    return d("div", {
                        staticClass: "cwc"
                    }, [d("img", {
                        attrs: {
                            src: r("09c4")
                        }
                    }), d("p", {
                        staticClass: "tip"
                    }, [e._v("微信号：GXSDCWCJF")]), d("p", {
                        staticClass: "tip"
                    }, [e._v("缴费方式：通过扫描上方二维码，关注微信进行缴费")]), d("div", {
                        staticStyle: {
                            margin: "32px"
                        }
                    }, [d("dx-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: function(t) {
                                return e.$router.back()
                            }
                        }
                    }, [e._v("返回")])], 1)])
                },
                l = [],
                o = {
                    name: "cwc",
                    data: function() {
                        return {}
                    }
                },
                p = o,
                a = (r("f673"), r("2877")),
                i = Object(a["a"])(p, d, l, !1, null, "bda8ceaa", null);
            t["default"] = i.exports
        },
        1808: function(e, t, r) {},
        "22ee": function(e, t, r) {
            "use strict";
            r.r(t);
            var d = function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", {
                        staticClass: "form"
                    }, [r("dx-form", {
                        ref: "form",
                        attrs: {
                            title: e._title,
                            description: e._description,
                            schema: e._schema,
                            order: "",
                            defaultValue: e.defaultValue
                        },
                        on: {
                            submit: e.handleSubmit
                        }
                    })], 1)
                },
                l = [],
                o = (r("a4d3"), r("e01a"), r("99af"), r("0d03"), r("96cf"), r("1da1")),
                p = {
                    data: function() {
                        var e = new Date,
                            t = new Date;
                        e.setDate(e.getDate() + 1), t.setDate(t.getDate() + 2);
                        var r = ["".concat(e.getMonth() + 1, "月").concat(e.getDate(), "日上午"), "".concat(e.getMonth() + 1, "月").concat(e.getDate(), "日下午"), "".concat(e.getMonth() + 1, "月").concat(e.getDate(), "日晚上"), "".concat(t.getMonth() + 1, "月").concat(t.getDate(), "日上午"), "".concat(t.getMonth() + 1, "月").concat(t.getDate(), "日下午"), "".concat(t.getMonth() + 1, "月").concat(t.getDate(), "日晚上")];
                        return {
                            defaultValue: {},
                            schema: [
                                [],
                                [{
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
                                    label: "性别",
                                    type: "dx-input",
                                    model: "sex",
                                    props: {
                                        placeholder: "请输入您的性别",
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
                                    label: "专业",
                                    type: "dx-input",
                                    model: "major",
                                    props: {
                                        placeholder: "请输入您的专业",
                                        readonly: !0
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "年级",
                                    type: "dx-input",
                                    model: "grade",
                                    props: {
                                        placeholder: "请输入您的年级",
                                        readonly: !0
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "您是否属于通过学校认定的家庭经济困难学生？",
                                    type: "dx-radio",
                                    model: "input1",
                                    props: {
                                        options: ["是", "否"],
                                        horizontal: !0
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "您是否属于建档立卡学生？",
                                    type: "dx-radio",
                                    model: "input2",
                                    props: {
                                        options: ["是", "否"],
                                        horizontal: !0
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "您是否愿意通过参加培训提高自身的综合素质和能力？",
                                    type: "dx-radio",
                                    model: "input3",
                                    props: {
                                        options: ["非常愿意，并希望多组织", "只要时间允许，我愿意参加", "偶尔去听听", "没时间参加", "不想参加"]
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "当前，您最希望提高哪些方面的素质和能力？（限选5项）",
                                    type: "dx-checkbox",
                                    model: "input4",
                                    props: {
                                        min: 1,
                                        max: 5,
                                        options: ["外语能力", "沟通表达能力", "教师技能", "就业创业能力", "计算机/新媒体技术", "人际交往能力", "团队合作能力", "领导能力", "创新能力", "科研能力", "生活技能", "心理素质", "其他"],
                                        other: !0
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "您希望学校开设哪些方面的培训课程？（可多选）",
                                    type: "dx-checkbox",
                                    model: "input5",
                                    props: {
                                        min: 1,
                                        options: ["英语考级", "公务员考试方法与技巧", "书法", "朗诵", "声乐", "演讲与口才", "公文写作", "新闻写作与摄影实务", "手机摄影", "新媒体技能", "常用办公软件操作技巧", "课件制作", "公务礼仪与形象设计", "职业生涯规划/就业创业指导", "论文写作", "文献检索", "科技创新能力提升", "团队素质能力拓展", "人际关系技巧", "情绪管理与压力应对", "茶艺", "形体与舞蹈", "手工", "绘画", "烹饪厨艺", "插花园艺", "其他"],
                                        other: !0
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "您倾向于选择哪种类型的授课教师？",
                                    type: "dx-radio",
                                    model: "input6",
                                    props: {
                                        options: ["专业培训人员", "知名教授学者", "企业成功人士", "朋辈小老师", "其他"],
                                        other: !0
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "您认为多大的培训规模比较合适？",
                                    type: "dx-radio",
                                    model: "input7",
                                    props: {
                                        options: ["30~50人", "50~100人", "100~150人", "150人以上", "其他"],
                                        other: !0
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "您希望学校组织的每一次培训课程，多长时间比较合适？",
                                    type: "dx-radio",
                                    model: "input8",
                                    props: {
                                        options: ["1个小时", "2个小时", "3个小时", "其他"],
                                        other: !0
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "您能够接受的培训频次：",
                                    type: "dx-radio",
                                    model: "input9",
                                    props: {
                                        options: ["1次/月", "2次/月", "3次/月", "4次/月", "其他"],
                                        other: !0
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "您认为在哪个时间段开展培训比较合适？（可多选）",
                                    type: "dx-checkbox",
                                    model: "input10",
                                    props: {
                                        min: 1,
                                        options: ["周五晚上", "周六/周日", "寒暑假期间", "其他"],
                                        other: !0
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "您个人比较喜欢哪种培训方式？（可多选）",
                                    type: "dx-checkbox",
                                    model: "input11",
                                    props: {
                                        min: 1,
                                        options: ["课堂讲授", "现场参观", "座谈研讨", "线上学习", "户外拓展", "其他"],
                                        other: !0
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "您认为培训应该采取哪种考核方式？",
                                    type: "dx-radio",
                                    model: "input12",
                                    props: {
                                        options: ["书面考试", "撰写心得体会", "课下讨论、分享", "其他"],
                                        other: !0
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "除本问卷涉及的内容，您对培训还有哪些建议和期望？",
                                    type: "dx-textarea",
                                    model: "remark",
                                    props: {
                                        placeholder: "请输入您对培训还有哪些建议和期望（选填）"
                                    },
                                    valid: {
                                        required: !1
                                    }
                                }],
                                [{
                                    label: "您的身份是：",
                                    type: "dx-radio",
                                    model: "input1",
                                    props: {
                                        options: ["2020届毕业研究生", "2020届毕业本科生", "非本届毕业的学生"]
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "您的政治面貌：",
                                    type: "dx-radio",
                                    model: "input2",
                                    props: {
                                        options: ["中共党员（含预备党员）", "共青团员", "群众", "民主党派人士", "无党派人士"]
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "您是否了解教育部24365校园招聘服务？",
                                    type: "dx-radio",
                                    model: "input3",
                                    props: {
                                        options: ["非常了解", "比较了解", "了解一点", "不了解"]
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "您从什么途径获得教育部24365校园招聘服务“互联网+”公益直播课信息？（多选）",
                                    type: "dx-checkbox",
                                    model: "input4",
                                    props: {
                                        options: ["班级群", "广西师大就业指导中心官网", "广西师大“大就”微信公众号", "学院网站", "易班", "其他"],
                                        other: !0
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "您共观看了几期教育部24365校园招聘服务互联网+就业公益直播课？",
                                    type: "dx-radio",
                                    model: "input5",
                                    props: {
                                        options: ["0期", "1期", "2期", "3期", "4期"]
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "在近几期的直播课中，您观看了哪几期？（多选）",
                                    type: "dx-checkbox",
                                    model: "input6",
                                    props: {
                                        options: ["“云”上求职，逆势飞跃——大学生“互联网+”求职加速方案", "一职为你——五大招聘平台全解析", "未来我做主：我的成功求职之路", "没有观看", "不了解", "其他"],
                                        other: !0
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "您观看直播课的目的是：（多选）",
                                    type: "dx-checkbox",
                                    model: "input7",
                                    props: {
                                        options: ["了解当前就业形势", "掌握空中招聘技巧", "寻求就业机会", "其他"],
                                        other: !0
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "通过观看直播课，对您的求职就业有帮助吗?",
                                    type: "dx-radio",
                                    model: "input8",
                                    props: {
                                        options: ["有很大帮助", "有一定帮助", "较少帮助", "几乎没有任何帮助"]
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "通过观看直播课，您对面试准备：",
                                    type: "dx-radio",
                                    model: "input9",
                                    props: {
                                        options: ["非常了解", "比较了解", "了解一点", "不了解"]
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "以下平台均开通了24365校园招聘服务，您在以下哪些平台投递了简历?（多选）",
                                    type: "dx-checkbox",
                                    model: "input10",
                                    props: {
                                        options: ["新职业网", "联合前程无忧", "智联招聘", "BOSS直聘", "中华英才网", "猎聘网", "其他"],
                                        other: !0
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "对于教育部联合举办的就业公益直播课，您的整体感觉是：",
                                    type: "dx-radio",
                                    model: "input11",
                                    props: {
                                        options: ["很满意", "基本满意", "一般", "不满意"]
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "对于后期的公益直播课，您最想听到的内容是：（多选）",
                                    type: "dx-checkbox",
                                    model: "input12",
                                    props: {
                                        options: ["就业信息与政策", "求职材料与简历制作", "求职礼仪", "笔试指导", "面试指导", "入职前适应", "职业定位", "就业心理调适", "企业人才需求", "其他"],
                                        other: !0
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "您对24365招聘有什么意见和建议：（必填）",
                                    type: "dx-textarea",
                                    model: "remark",
                                    props: {
                                        placeholder: "请输入您对24365招聘有什么意见和建议"
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }],
                                [{
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
                                    label: "专业",
                                    type: "dx-input",
                                    model: "major",
                                    props: {
                                        placeholder: "请输入您的专业",
                                        readonly: !0
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "年级",
                                    type: "dx-input",
                                    model: "grade",
                                    props: {
                                        placeholder: "请输入您的年级",
                                        readonly: !0
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "手机号码",
                                    type: "dx-input",
                                    model: "input1",
                                    props: {
                                        placeholder: "请输入您的手机号码"
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "微信号",
                                    type: "dx-input",
                                    model: "input2",
                                    props: {
                                        placeholder: "请输入您的微信号"
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "QQ号",
                                    type: "dx-input",
                                    model: "input3",
                                    props: {
                                        placeholder: "请输入您的QQ号"
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "邮箱",
                                    type: "dx-input",
                                    model: "input4",
                                    props: {
                                        placeholder: "请输入您的邮箱"
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "您是否属于建档立卡学生？",
                                    type: "dx-radio",
                                    model: "input5",
                                    props: {
                                        options: ["是", "否"],
                                        horizontal: !0
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "辅导员姓名",
                                    type: "dx-input",
                                    model: "input6",
                                    props: {
                                        placeholder: "请输入您的辅导员姓名"
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "生源地",
                                    type: "dx-input",
                                    model: "input7",
                                    props: {
                                        placeholder: "请输入您的生源地"
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "目前未就业原因",
                                    type: "dx-textarea",
                                    model: "input8",
                                    props: {
                                        placeholder: "请输入您的目前未就业原因"
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "求职意向",
                                    type: "dx-textarea",
                                    model: "input9",
                                    props: {
                                        placeholder: "请输入您的求职意向"
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "急需的求职帮助（具体说明）",
                                    type: "dx-textarea",
                                    model: "input10",
                                    props: {
                                        placeholder: "请输入您的急需的求职帮助"
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "本人独特优势",
                                    type: "dx-textarea",
                                    model: "input11",
                                    props: {
                                        placeholder: "请输入您的本人独特优势"
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "本人明显缺点",
                                    type: "dx-textarea",
                                    model: "input12",
                                    props: {
                                        placeholder: "请输入您的本人明显缺点"
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "本人总体评价",
                                    type: "dx-textarea",
                                    model: "input13",
                                    props: {
                                        placeholder: "请输入您的本人总体评价"
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "备注（家庭情况说明）",
                                    type: "dx-textarea",
                                    model: "remark",
                                    props: {
                                        placeholder: "请输入您的备注（家庭情况说明）"
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }],
                                [{
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
                                    label: "性别",
                                    type: "dx-input",
                                    model: "sex",
                                    props: {
                                        placeholder: "请输入您的性别",
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
                                    label: "专业",
                                    type: "dx-input",
                                    model: "major",
                                    props: {
                                        placeholder: "请输入您的专业",
                                        readonly: !0
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "年级",
                                    type: "dx-input",
                                    model: "grade",
                                    props: {
                                        placeholder: "请输入您的年级",
                                        readonly: !0
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "你目前是否已经签约？",
                                    type: "dx-radio",
                                    model: "input1",
                                    props: {
                                        options: ["是", "否"],
                                        horizontal: !0
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "您的专业类别是？",
                                    type: "dx-radio",
                                    model: "input2",
                                    props: {
                                        options: ["文科类", "理科类", "其他"],
                                        horizontal: !0
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "面对突发的疫情，你认为对自己的就业影响大吗？",
                                    type: "dx-radio",
                                    model: "input3",
                                    props: {
                                        options: ["不大", "大", "非常大"],
                                        horizontal: !0
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "你是否关注学校、学院发布各类就业信息？",
                                    type: "dx-radio",
                                    model: "input4",
                                    props: {
                                        options: ["是", "否"],
                                        horizontal: !0
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "学院是否有寻求多个途径了解同学们的就业意愿？",
                                    type: "dx-radio",
                                    model: "input5",
                                    props: {
                                        options: ["是", "否"],
                                        horizontal: !0
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "你认为学校就业指导中心等是否根据疫情适时调整招聘形式（例如网上招聘会）？",
                                    type: "dx-radio",
                                    model: "input6",
                                    props: {
                                        options: ["是", "否"],
                                        horizontal: !0
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "对于学校、学院提供的网络招聘是否满意？",
                                    type: "dx-radio",
                                    model: "input7",
                                    props: {
                                        options: ["是", "否"],
                                        horizontal: !0
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "你所在学院是否有开展针对湖北籍学生就业问题的专项帮扶？",
                                    type: "dx-radio",
                                    model: "input8",
                                    props: {
                                        options: ["是", "否", "不清楚"],
                                        horizontal: !0
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "你所在学院是否有开展针对建档立卡家庭贫困生学生就业问题的专项帮扶？",
                                    type: "dx-radio",
                                    model: "input9",
                                    props: {
                                        options: ["是", "否", "不清楚"],
                                        horizontal: !0
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "学院提供的就业信息是否与你的就业意愿相关？",
                                    type: "dx-radio",
                                    model: "input10",
                                    props: {
                                        options: ["是", "否"],
                                        horizontal: !0
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "学院提供就业信息是否满足同学们的需求？",
                                    type: "dx-radio",
                                    model: "input11",
                                    props: {
                                        options: ["是", "否"],
                                        horizontal: !0
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "学院是否针对特殊情况提供新的就业指导？",
                                    type: "dx-radio",
                                    model: "input12",
                                    props: {
                                        options: ["是", "否"],
                                        horizontal: !0
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "学院是否在疫情期间开展了线上专场招聘？",
                                    type: "dx-radio",
                                    model: "input13",
                                    props: {
                                        options: ["是", "否"],
                                        horizontal: !0
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "学院是否对就业困难的同学给予特别的关注和帮助？",
                                    type: "dx-radio",
                                    model: "input14",
                                    props: {
                                        options: ["是", "否"],
                                        horizontal: !0
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "辅导员是否及时传达了学校关于疫情防控工作的通知？",
                                    type: "dx-radio",
                                    model: "input15",
                                    props: {
                                        options: ["是", "否"],
                                        horizontal: !0
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "辅导员是否对特殊情况开展就业指导？",
                                    type: "dx-radio",
                                    model: "input16",
                                    props: {
                                        options: ["是", "否"],
                                        horizontal: !0
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "辅导员是否对就业政策及时宣传？",
                                    type: "dx-radio",
                                    model: "input17",
                                    props: {
                                        options: ["是", "否"],
                                        horizontal: !0
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "辅导员对于毕业生的就业问题是否关心？",
                                    type: "dx-radio",
                                    model: "input18",
                                    props: {
                                        options: ["是", "否"],
                                        horizontal: !0
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "辅导员是否开展了就业心理辅导工作？",
                                    type: "dx-radio",
                                    model: "input19",
                                    props: {
                                        options: ["是", "否"],
                                        horizontal: !0
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "请对于学校或学院在特殊时期毕业生就业问题提出建议",
                                    type: "dx-textarea",
                                    model: "remark",
                                    props: {
                                        placeholder: "请输入您对于学校或学院在特殊时期毕业生就业问题提出建议"
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }],
                                [{
                                    label: "您的身份类别是：",
                                    type: "dx-radio",
                                    model: "input1",
                                    props: {
                                        options: ["本科生", "研究生", "专任教师", "行政教辅人员", "工勤人员"]
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "您是否知道学校正在开展“全国文明校园”创建工作？",
                                    type: "dx-radio",
                                    model: "input7",
                                    props: {
                                        options: ["知道", "不知道"]
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "您所在的单位或学院（部）是否开展过关于学校“全国文明校园”创建工作的动员、宣传、培训或相关的主题教育？",
                                    type: "dx-radio",
                                    model: "input2",
                                    props: {
                                        options: ["召开了，并且我参加了", "召开了，但是我未参加", "未召开"]
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "返校以来，您对创建文明校园哪些方面还不够满意？（可多选）",
                                    type: "dx-checkbox",
                                    model: "input3",
                                    props: {
                                        min: 1,
                                        max: 5,
                                        options: ["师生思想道德方面", "领导班子建设方面", "教师队伍建设方面", "校园文化建设方面", "校园环境建设方面", "活动阵地建设方面"],
                                        other: !1
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "您是否能完整的说出社会主义核心价值观的内容？",
                                    type: "dx-radio",
                                    model: "input4",
                                    props: {
                                        options: ["完全可以", "能说的出一些，记不全", "不了解"]
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "您对学校“全国文明校园”创建工作的宣传氛围是否满意？",
                                    type: "dx-radio",
                                    model: "input5",
                                    props: {
                                        options: ["满意", "一般", "不满意"]
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "您对师生参与学校“全国文明校园”创建工作的态度是？",
                                    type: "dx-radio",
                                    model: "input6",
                                    props: {
                                        options: ["全体师生都应该主动积极参加", "创建工作和师生们的关系不大，有关部门做好就行", "无所谓，能参加的时候就参加", "不想参加"]
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }],
                                [{
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
                                    label: "性别",
                                    type: "dx-input",
                                    model: "sex",
                                    props: {
                                        placeholder: "请输入您的性别",
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
                                    label: "专业",
                                    type: "dx-input",
                                    model: "major",
                                    props: {
                                        placeholder: "请输入您的专业",
                                        readonly: !0
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "年级",
                                    type: "dx-input",
                                    model: "grade",
                                    props: {
                                        placeholder: "请输入您的年级",
                                        readonly: !0
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "是否在校？",
                                    type: "dx-radio",
                                    model: "input1",
                                    props: {
                                        options: ["是", "否"],
                                        horizontal: !0
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "是否符合参加条件？",
                                    type: "dx-radio",
                                    model: "input2",
                                    props: {
                                        options: ["是", "否"],
                                        horizontal: !0
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "是否确认参会？",
                                    type: "dx-radio",
                                    model: "input3",
                                    props: {
                                        options: ["是", "否"],
                                        horizontal: !0
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "参加原因",
                                    type: "dx-textarea",
                                    model: "remark",
                                    props: {
                                        placeholder: "请填写参加原因"
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }],
                                [{
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
                                    label: "性别",
                                    type: "dx-input",
                                    model: "sex",
                                    props: {
                                        placeholder: "请输入您的性别",
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
                                    label: "专业",
                                    type: "dx-input",
                                    model: "major",
                                    props: {
                                        placeholder: "请输入您的专业",
                                        readonly: !0
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "年级",
                                    type: "dx-input",
                                    model: "grade",
                                    props: {
                                        placeholder: "请输入您的年级",
                                        readonly: !0
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "联系方式",
                                    type: "dx-input",
                                    model: "input1",
                                    props: {
                                        placeholder: "请输入您的联系方式"
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "使用人数",
                                    type: "dx-input",
                                    model: "input2",
                                    props: {
                                        placeholder: "请填写使用人数",
                                        type: "number"
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "选择使用场地",
                                    type: "dx-radio",
                                    model: "input3",
                                    props: {
                                        options: ["思政家园（雁山四期恬园）", "共享厨房（雁山四期恬园）", "连廊电影区（雁山四期恬园）", "网络思政社区（雁山图书馆负一楼）"]
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "选择使用时间",
                                    type: "dx-radio",
                                    model: "input4",
                                    props: {
                                        options: r
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "使用原因",
                                    type: "dx-textarea",
                                    model: "remark",
                                    props: {
                                        placeholder: "请填写使用原因"
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }],
                                [],
                                [{
                                    label: "你的辅导员在爱国爱党、遵纪守法、敬业爱生、为人师表等方面做得如何？",
                                    type: "dx-input",
                                    model: "input1",
                                    props: {
                                        placeholder: "请填写评分",
                                        type: "number"
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "你的辅导员在坚持立德树人,帮助学生树立正确的世界观、人生观、价值观，引导学生胸怀远大的理想信念，正确认识国内外形势，弘扬时代主旋律,传播社会正能量等方面做得如何？",
                                    type: "dx-input",
                                    model: "input2",
                                    props: {
                                        placeholder: "请填写评分",
                                        type: "number"
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "你的辅导员是否能贴近学生，通过开班/年级会、进宿舍、下课堂和参与学生活动等方式，经常和学生进行谈心交流，主动帮助学生释疑解惑，积极解决学生的思想和实际问题？",
                                    type: "dx-input",
                                    model: "input3",
                                    props: {
                                        placeholder: "请填写评分",
                                        type: "number"
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "你的辅导员在指导学生开展党团建设、学术科技、文艺体育、志愿服务、社会实践等活动方面做得如何？",
                                    type: "dx-input",
                                    model: "input4",
                                    props: {
                                        placeholder: "请填写评分",
                                        type: "number"
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "你的辅导员在开展心理健康教育，引导学生养成良好的心理品质和自尊、自爱、自律、自强的优良品格方面的工作做得如何？",
                                    type: "dx-input",
                                    model: "input5",
                                    props: {
                                        placeholder: "请填写评分",
                                        type: "number"
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "你的辅导员对家庭经济困难生、学习困难生开展针对性、个性化帮扶方面的工作做得如何？",
                                    type: "dx-input",
                                    model: "input6",
                                    props: {
                                        placeholder: "请填写评分",
                                        type: "number"
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "你的辅导员在帮助学生进行职业生涯规划、就业指导等方面的工作做得如何？",
                                    type: "dx-input",
                                    model: "input7",
                                    props: {
                                        placeholder: "请填写评分",
                                        type: "number"
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "你的辅导员在加强班风、学风建设的工作中所取得的实际效果如何？",
                                    type: "dx-input",
                                    model: "input8",
                                    props: {
                                        placeholder: "请填写评分",
                                        type: "number"
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "你的辅导员在开展各类主题活动（爱国爱校、安全文明法纪、诚信教育、学术道德教育、入学教育、毕业生教育等）的效果如何？",
                                    type: "dx-input",
                                    model: "input9",
                                    props: {
                                        placeholder: "请填写评分",
                                        type: "number"
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "你的辅导员在推优入党、学生干部任用、奖助学金评定、违纪处理等工作上秉公办事、公平公正、公开透明、廉洁自律方面做得如何？",
                                    type: "dx-input",
                                    model: "input10",
                                    props: {
                                        placeholder: "请填写评分",
                                        type: "number"
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }],
                                [{
                                    label: "你的班主任在爱国爱校、遵纪守法、敬业爱生、为人师表等方面做得如何？",
                                    type: "dx-input",
                                    model: "input11",
                                    props: {
                                        placeholder: "请填写评分",
                                        type: "number"
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "你的班主任在坚持立德树人,帮助学生树立正确的世界观、人生观、价值观，引导学生胸怀远大的理想信念，正确认识国内外形势，弘扬时代主旋律,传播社会正能量等方面做得如何？",
                                    type: "dx-input",
                                    model: "input12",
                                    props: {
                                        placeholder: "请填写评分",
                                        type: "number"
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "你的班主任在指导学生的专业学习，引导学生培养专业学习兴趣，帮助学生端正学习目的、改进学习方法、养成良好学习习惯等方面做得如何？",
                                    type: "dx-input",
                                    model: "input13",
                                    props: {
                                        placeholder: "请填写评分",
                                        type: "number"
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "你的班主任是否能做到每两周深入学生课堂1次，与任课教师沟通，准确掌握学生的学习近况和思想动态？",
                                    type: "dx-input",
                                    model: "input14",
                                    props: {
                                        placeholder: "请填写评分",
                                        type: "number"
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "你的班主任是否能做到每月至少1次深入学生宿舍、班级，和学生进行谈心交流，主动帮助学生释疑解惑，积极解决学生的思想和实际问题？",
                                    type: "dx-input",
                                    model: "input15",
                                    props: {
                                        placeholder: "请填写评分",
                                        type: "number"
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "你的班主任在指导学生参加课外科技活动、各类学科竞赛、创新创业项目、社会实践活动等方面做得如何？",
                                    type: "dx-input",
                                    model: "input16",
                                    props: {
                                        placeholder: "请填写评分",
                                        type: "number"
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "你的班主任对家庭经济困难生、学习困难生开展针对性、个性化帮扶方面的工作做得如何？",
                                    type: "dx-input",
                                    model: "input17",
                                    props: {
                                        placeholder: "请填写评分",
                                        type: "number"
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "你的班主任在加强班风、学风建设的工作中所取得的实际效果如何？",
                                    type: "dx-input",
                                    model: "input18",
                                    props: {
                                        placeholder: "请填写评分",
                                        type: "number"
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "你的班主任能否根据学生的实际需求和专业特点，开展职业生涯规划教育，帮助学生明确就业方向和奋斗目标，切实加强对学生的职业规划和考研帮扶？",
                                    type: "dx-input",
                                    model: "input19",
                                    props: {
                                        placeholder: "请填写评分",
                                        type: "number"
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }, {
                                    label: "你的班主任能否定期开展形式多样的主题教育活动，对学生进行有针对性的教育和引导，帮助学生养成良好的心理素质和思想品格，更好地适应大学生活。",
                                    type: "dx-input",
                                    model: "input20",
                                    props: {
                                        placeholder: "请填写评分",
                                        type: "number"
                                    },
                                    valid: {
                                        required: !0
                                    }
                                }]
                            ],
                            title: ["", "广西师范大学家庭经济困难学生能力提升培训项目调查问卷", "教育部24365校园招聘服务“互联网+”公益直播课反馈调查问卷", "华民慈善基金个性化就业咨询报名", "广西师范大学2020届学生就业工作调查问卷", "广西师范大学全国文明校园创建工作调查问卷", "“2020届毕业典礼暨学位授予仪式”预约报名", "指定场地预约", "", "2020年广西师范大学辅导员工作情况学生评议表", "2020年广西师范大学班主任工作情况学生评议表"],
                            description: ["", "亲爱的同学：\n          您好！学校即将启动家庭经济困难学生“筑梦成长营”项目，为更好地满足同学们的实际需求，助力我校家庭经济困难学生全面提高综合素质和能力，我们专门组织了这次调查。请您腾出宝贵的时间认真填写问卷，真实地表达您的想法和意见。感谢您的支持和参与！\n          广西师范大学学生资助管理中心\n          2020年4月28日", "亲爱的同学们：\n          大家好！受教育部委托，为进一步了解我校毕业生观看教育部24365校园招聘服务“互联网+”就业公益直播课情况，及时追踪求职毕业生的需求与动态，我们发起本次问卷，诚挚邀请您填写问卷，感谢支持！\n          广西师范大学大学生就业指导中心\n          2020年5月1日\n          ", "仅毕业班建档立卡毕业生可填", "", "尊敬的老师、亲爱的同学们：\n        您好！感谢您参与本次调查。本次调查旨在了解广大师生对我校创建“全国文明校园”工作的了解情况，更好的推进我校全国文明校园创建工作。本问卷采用匿名作答的方式进行，调查结果会受到严格保密。您不必有任何顾虑，请根据自己的实际情况如实填写。\n        感谢您花费宝贵的时间来完成这份问卷，在此对您表示衷心的感谢！", "时间：6月23日 上午\n        现场仪式地点：雁山校区田径场（如因天气等问题则另行通知改为室内，如改期另行通知）\n        现场参加对象：在校学习生活满14天身体状况正常的2020届毕业生\n        特别提醒：  每个人符合条件的毕业生都可以参加，都有专属位置，报名则需按时参加。\n        毕业典礼及学位授予仪式筹备组", "预约注意事项：\n        网络思政社区(雁山图书馆负一楼)会议室可容纳70人\n        思政家园 (雁山四期恬园) 可容纳40人\n        共享厨房(雁山四期恬园) 可容纳12人\n        连廊电影区(雁山四期恬园)可容纳50人\n        网络思政社区使用时间段：8:30-22：30\n        恬园社区使用时间段：\n        上午:09:00-13:30\n        下午:13:30-18:00\n        晚上:18:00-22:00\n        有问题可添加qq服务号咨询：\n        恬园社区qq服务号:3180188845\n        网络思政社区qq服务号：1375717647\n        温馨提醒：以上场地提前两天申请，并合理使用，禁止在恬园社区共享厨房内烹饪刺激性气味食物（含麻辣火锅、泡菜火锅）。", "", "每题分数0至10分", "每题分数0至10分"]
                        }
                    },
                    computed: {
                        _id: function() {
                            return this.$route.params.id
                        },
                        _schema: function() {
                            return this.schema[this._id]
                        },
                        _code: function() {
                            return this.$route.params.code
                        },
                        _title: function() {
                            return this.$route.params.title || this.title[this._id]
                        },
                        _description: function() {
                            return this.description[this._id]
                        }
                    },
                    activated: function() {
                        var e = this;
                        return Object(o["a"])(regeneratorRuntime.mark((function t() {
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
                            return Object(o["a"])(regeneratorRuntime.mark((function t() {
                                var r, d, l;
                                return regeneratorRuntime.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, e.$store.dispatch("GetPrevUserInfo", e._id);
                                        case 3:
                                            if (r = t.sent, 5e3 === r.code)
                                                for (d = 0; d < 6; d++) e._schema[d].props.hasOwnProperty("readonly") && (e._schema[d].props.readonly = !1);
                                            e.defaultValue = r.data, 1 === r.data.status && (e.$createDialog({
                                                type: "alert",
                                                title: "预约提示",
                                                content: "您已预约".concat(r.data.date, "的").concat(r.data.addr, ",今日无法预约新场地"),
                                                icon: "cubeic-alert"
                                            }).show(), e.$router.back()), t.next = 12;
                                            break;
                                        case 9:
                                            for (t.prev = 9, t.t0 = t["catch"](0), l = 0; l < 6; l++) e._schema[l].props.hasOwnProperty("readonly") && (e._schema[l].props.readonly = !1);
                                        case 12:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [0, 9]
                                ])
                            })))()
                        },
                        handleSubmit: function(e) {
                            var t = this;
                            return Object(o["a"])(regeneratorRuntime.mark((function r() {
                                return regeneratorRuntime.wrap((function(r) {
                                    while (1) switch (r.prev = r.next) {
                                        case 0:
                                            return r.prev = 0, t.$refs.form.start(), e.hasOwnProperty("code") || (e["code"] = t._code), r.next = 5, t.$store.dispatch("CreateForm", {
                                                id: t._id,
                                                data: e
                                            });
                                        case 5:
                                            return r.next = 7, t.$router.back();
                                        case 7:
                                            r.next = 11;
                                            break;
                                        case 9:
                                            r.prev = 9, r.t0 = r["catch"](0);
                                        case 11:
                                            return r.prev = 11, t.$refs.form.end(), r.finish(11);
                                        case 14:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r, null, [
                                    [0, 9, 11, 14]
                                ])
                            })))()
                        }
                    }
                },
                a = p,
                i = (r("9dc3"), r("2877")),
                n = Object(i["a"])(a, d, l, !1, null, "3b88fce2", null);
            t["default"] = n.exports
        },
        "23fd": function(e, t, r) {
            "use strict";
            r.r(t);
            var d = function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", {
                        staticClass: "zzzx"
                    }, [r("dx-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: e.go
                        }
                    }, [e._v("前往资助中心")])], 1)
                },
                l = [],
                o = {
                    name: "zzzx",
                    methods: {
                        go: function() {
                            window.location.href = "https://oauth.yiban.cn/code/html?client_id=31b0e272f0b66ede&redirect_uri=http://zzzx.gxnu.edu.cn/api/yb_callback/yb_oauth&state=yb_oauth"
                        }
                    }
                },
                p = o,
                a = (r("371c"), r("2877")),
                i = Object(a["a"])(p, d, l, !1, null, "7cbcc839", null);
            t["default"] = i.exports
        },
        "31a7": function(e, t, r) {},
        "371c": function(e, t, r) {
            "use strict";
            var d = r("0827"),
                l = r.n(d);
            l.a
        },
        "6a31": function(e, t, r) {
            "use strict";
            var d = r("87b8"),
                l = r.n(d);
            l.a
        },
        "77ef": function(e, t, r) {},
        "7c5c": function(e, t, r) {
            "use strict";
            r.r(t);
            var d = function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", {
                        staticClass: "tsg"
                    }, [r("dx-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: e.go
                        }
                    }, [e._v("新生闯关")]), r("dx-button", {
                        attrs: {
                            type: "info"
                        },
                        on: {
                            click: function(t) {
                                return e.$router.back()
                            }
                        }
                    }, [e._v("返回")])], 1)
                },
                l = [],
                o = {
                    name: "tsg",
                    methods: {
                        go: function() {
                            window.location.href = "http://gxsfdxrgjy6.nczxst.com"
                        }
                    }
                },
                p = o,
                a = (r("6a31"), r("2877")),
                i = Object(a["a"])(p, d, l, !1, null, "ffababb4", null);
            t["default"] = i.exports
        },
        "87b8": function(e, t, r) {},
        "9dc3": function(e, t, r) {
            "use strict";
            var d = r("31a7"),
                l = r.n(d);
            l.a
        },
        b4fd: function(e, t, r) {
            "use strict";
            var d = r("1808"),
                l = r.n(d);
            l.a
        },
        dc7e: function(e, t, r) {
            "use strict";
            r.r(t);
            var d = function() {
                    var e = this,
                        t = e.$createElement;
                    e._self._c;
                    return e._m(0)
                },
                l = [function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", {
                        staticClass: "school-car"
                    }, [r("h1", [e._v("2020年春季学期学生返校后学校班车时刻表")]), r("h2", [e._v("学生请到学生候车点候车，疫情期间乘坐校车请佩戴口罩，做好个人安全防护。")]), r("br"), r("p", [e._v("学生专线班车育才校区往返雁山校区时刻表")]), r("p", [e._v("（星期一至星期五）")]), r("table", [r("tr", [r("td", [e._v("发车时间")]), r("td", [e._v("育才校区")]), r("td", [e._v("发车时间")]), r("td", [e._v("雁山校区")])]), r("tr", [r("td", [e._v("7:25")]), r("td", {
                        attrs: {
                            rowspan: "3"
                        }
                    }, [e._v("育才→雁山")]), r("td", [e._v("8:10")]), r("td", {
                        attrs: {
                            rowspan: "3"
                        }
                    }, [e._v("雁山→育才")])]), r("tr", [r("td", [e._v("12:50")]), r("td", [e._v("13:40")])]), r("tr", [r("td", [e._v("16:20")]), r("td", [e._v("18:30")])])]), r("h2", {
                        staticStyle: {
                            "margin-bottom": "20px"
                        }
                    }, [e._v("备注：学生专线班车法定节假日停开。")]), r("p", [e._v("教职工育才、王城往返雁山校区")]), r("p", [e._v("（星期一至星期五）")]), r("table", [r("tr", [r("td", [e._v("发车时间")]), r("td", [e._v("育才、王城校区")]), r("td", [e._v("发车时间")]), r("td", [e._v("雁山校区")])]), r("tr", [r("td", [e._v("7:10")]), r("td", [e._v("王城→育才→雁山")]), r("td", [e._v("8:10")]), r("td", [e._v("雁山→育才")])]), r("tr", [r("td", [e._v("7:25")]), r("td", [e._v("育才→雁山")]), r("td", [e._v("10:40")]), r("td", [e._v("雁山→育才")])]), r("tr", [r("td", [e._v("7:50")]), r("td", [e._v("育才→雁山")]), r("td", [e._v("10:40")]), r("td", [e._v("雁山→育才→王城")])]), r("tr", [r("td", [e._v("8:30")]), r("td", [e._v("王城→育才→雁山")]), r("td", [e._v("12:15")]), r("td", [e._v("雁山→育才→王城")])]), r("tr", [r("td", [e._v("8:55")]), r("td", [e._v("育才→雁山")]), r("td", [e._v("12:15")]), r("td", [e._v("雁山→育才")])]), r("tr", [r("td", [e._v("13:00")]), r("td", [e._v("王城→育才→雁山")]), r("td", [e._v("16:45")]), r("td", {
                        attrs: {
                            rowspan: "4"
                        }
                    }, [e._v("雁山→育才"), r("br"), e._v("16:45候车"), r("br"), e._v("人满即走，最迟17:15发车")])]), r("tr"), r("tr"), r("tr"), r("tr", [r("td", [e._v("13:15")]), r("td", [e._v("育才→雁山")]), r("td", [e._v("17:30")]), r("td", [e._v("雁山→育才")])]), r("tr", [r("td", [e._v("16:20")]), r("td", [e._v("育才→雁山")]), r("td", [e._v("17:30")]), r("td", [e._v("雁山→育才→王城")])]), r("tr", [r("td", [e._v("17:30")]), r("td", [e._v("王城→育才→雁山")]), r("td", [e._v("18:30")]), r("td", [e._v("雁山→育才")])]), r("tr", [r("td", [e._v("18:00")]), r("td", [e._v("育才→雁山")]), r("td", [e._v("21:50")]), r("td", [e._v("雁山→育才")])]), r("tr", [r("td"), r("td"), r("td", [e._v("21:50")]), r("td", [e._v("雁山→育才→王城")])])]), r("p", [e._v("教职工育才校区往返王城校区")]), r("p", [e._v("（星期一至星期五）")]), r("table", [r("tr", [r("td", [e._v("发车时间")]), r("td", [e._v("王城校区")]), r("td", [e._v("发车时间")]), r("td", [e._v("育才校区")])]), r("tr", [r("td", [e._v("07:15")]), r("td", {
                        attrs: {
                            rowspan: "4"
                        }
                    }, [e._v("王城→育才")]), r("td", [e._v("07:30")]), r("td", {
                        attrs: {
                            rowspan: "4"
                        }
                    }, [e._v("育才→王城")])]), r("tr", [r("td", [e._v("12:10")]), r("td", [e._v("12:25")])]), r("tr", [r("td", [e._v("13:45")]), r("td", [e._v("14:00")])]), r("tr", [r("td", [e._v("17:40")]), r("td", [e._v("18:00")])])]), r("p", [e._v("教职工双休日、法定节假日育才校区往返雁山校区")]), r("p"), r("table", [r("tr", [r("td", [e._v("发车时间")]), r("td", [e._v("育才校区")]), r("td", [e._v("发车时间")]), r("td", [e._v("雁山校区")])]), r("tr", [r("td", [e._v("7:40")]), r("td", [e._v(" 王城→育才→雁山 ")]), r("td", [e._v("9:00")]), r("td", [e._v("雁山→育才→王城")])]), r("tr", [r("td", [e._v("8:00")]), r("td", {
                        attrs: {
                            rowspan: "3"
                        }
                    }, [e._v("育才→雁山")]), r("td", [e._v("12:10")]), r("td", {
                        attrs: {
                            rowspan: "3"
                        }
                    }, [e._v("雁山→育才")])]), r("tr", [r("td", [e._v("11:00")]), r("td", {
                        attrs: {
                            rowspan: "2"
                        }
                    }, [e._v("17:15")])]), r("tr", [r("td", [e._v("13:30")])]), r("tr", [r("td", [e._v("17:30")]), r("td", [e._v("王城→育才→雁山")]), r("td", [e._v("21:50")]), r("td", [e._v("雁山→育才→王城")])]), r("tr", [r("td", [e._v("18:00")]), r("td", {
                        attrs: {
                            rowspan: "2"
                        }
                    }, [e._v("育才→雁山")]), r("td", {
                        attrs: {
                            rowspan: "2"
                        }
                    }, [e._v("21:50")]), r("td", {
                        attrs: {
                            rowspan: "2"
                        }
                    }, [e._v("雁山→育才")])]), r("tr", [r("td", [e._v("21:00")])])]), r("h2", [e._v("运输服务中心电话：0773-5848828")]), r("h2", {
                        staticStyle: {
                            "margin-bottom": "20px"
                        }
                    }, [e._v("发车时间如有变动请留意校园网通知")])])
                }],
                o = {
                    name: "school-car"
                },
                p = o,
                a = (r("b4fd"), r("2877")),
                i = Object(a["a"])(p, d, l, !1, null, "3ecd65c5", null);
            t["default"] = i.exports
        },
        f673: function(e, t, r) {
            "use strict";
            var d = r("77ef"),
                l = r.n(d);
            l.a
        }
    }
]);