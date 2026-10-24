export default function(global, globalThis, window, $app_exports$, $app_evaluate$) {
    var org_app_require = $app_require$;
    (function(global, globalThis, window, $app_exports$, $app_evaluate$) {
        var setTimeout = global.setTimeout;
        var setInterval = global.setInterval;
        var clearTimeout = global.clearTimeout;
        var clearInterval = global.clearInterval;
        var $app_require$1 = global.$app_require$ || org_app_require;
        var createPageHandler = function() {
            return (()=>{
                var __webpack_modules__ = {};
                var __webpack_module_cache__ = {};
                function __webpack_require__(moduleId) {
                    var cachedModule = __webpack_module_cache__[moduleId];
                    if (void 0 !== cachedModule) return cachedModule.exports;
                    var module = __webpack_module_cache__[moduleId] = {
                        exports: {}
                    };
                    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
                    return module.exports;
                }
                (()=>{
                    __webpack_require__.g = (()=>{
                        if ('object' == typeof globalThis) return globalThis;
                        try {
                            return this || new Function('return this')();
                        } catch (e) {
                            if ('object' == typeof window) return window;
                        }
                    })();
                })();
                (()=>{
                    __webpack_require__.rv = ()=>"1.7.12";
                })();
                (()=>{
                    __webpack_require__.ruid = "bundler=rspack@1.7.12";
                })();
                var $app_style$ = [
                    [
                        [
                            [
                                0,
                                "screen"
                            ]
                        ],
                        {
                            width: "194px",
                            height: "390px",
                            backgroundColor: "#07100c",
                            color: "#e8f5e9",
                            position: "relative",
                            overflow: "hidden"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "page"
                            ]
                        ],
                        {
                            width: "194px",
                            height: "390px",
                            backgroundColor: "#07100c",
                            position: "relative",
                            overflow: "scroll"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "bg"
                            ]
                        ],
                        {
                            position: "absolute",
                            left: "0px",
                            top: "0px",
                            width: "194px",
                            height: "390px",
                            backgroundColor: "#07100c"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "delta"
                            ]
                        ],
                        {
                            position: "absolute",
                            left: "68px",
                            top: "44px",
                            width: "66px",
                            height: "58px",
                            backgroundColor: "#153623",
                            borderTopWidth: "2px",
                            borderRightWidth: "2px",
                            borderBottomWidth: "2px",
                            borderLeftWidth: "2px",
                            borderTopColor: "#61ff9e",
                            borderRightColor: "#61ff9e",
                            borderBottomColor: "#61ff9e",
                            borderLeftColor: "#61ff9e"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "deltaImg"
                            ]
                        ],
                        {
                            position: "absolute",
                            left: "68px",
                            top: "44px",
                            width: "66px",
                            height: "58px",
                            borderTopWidth: "2px",
                            borderRightWidth: "2px",
                            borderBottomWidth: "2px",
                            borderLeftWidth: "2px",
                            borderTopColor: "#61ff9e",
                            borderRightColor: "#61ff9e",
                            borderBottomColor: "#61ff9e",
                            borderLeftColor: "#61ff9e"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "top"
                            ]
                        ],
                        {
                            position: "absolute",
                            left: "0px",
                            top: "10px",
                            width: "194px",
                            textAlign: "center",
                            fontSize: "11px",
                            color: "#c8ffd8"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "name"
                            ]
                        ],
                        {
                            position: "absolute",
                            left: "0px",
                            top: "108px",
                            width: "194px",
                            textAlign: "center",
                            fontSize: "21px",
                            color: "#f2f7dd",
                            fontWeight: "bold"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "modeLine"
                            ]
                        ],
                        {
                            position: "absolute",
                            left: "0px",
                            top: "132px",
                            width: "194px",
                            textAlign: "center",
                            fontSize: "10px",
                            color: "#d7c878"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "btn"
                            ]
                        ],
                        {
                            position: "absolute",
                            left: "34px",
                            width: "126px",
                            height: "34px",
                            borderRadius: "8px",
                            backgroundColor: "#102015",
                            borderTopWidth: "2px",
                            borderRightWidth: "2px",
                            borderBottomWidth: "2px",
                            borderLeftWidth: "2px",
                            borderTopColor: "#61ff9e",
                            borderRightColor: "#61ff9e",
                            borderBottomColor: "#61ff9e",
                            borderLeftColor: "#61ff9e",
                            color: "#f3fff5",
                            textAlign: "center",
                            fontSize: "14px",
                            paddingTop: "7px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "homeBtn"
                            ]
                        ],
                        {
                            position: "absolute",
                            left: "20px",
                            width: "154px",
                            height: "42px",
                            borderRadius: "10px",
                            backgroundColor: "#102015",
                            borderTopWidth: "2px",
                            borderRightWidth: "2px",
                            borderBottomWidth: "2px",
                            borderLeftWidth: "2px",
                            borderTopColor: "#61ff9e",
                            borderRightColor: "#61ff9e",
                            borderBottomColor: "#61ff9e",
                            borderLeftColor: "#61ff9e",
                            color: "#f3fff5",
                            textAlign: "center",
                            fontSize: "15px",
                            paddingTop: "12px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "hb1"
                            ]
                        ],
                        {
                            top: "152px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "hb2"
                            ]
                        ],
                        {
                            top: "204px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "hb3"
                            ]
                        ],
                        {
                            top: "256px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "hb4"
                            ]
                        ],
                        {
                            top: "308px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "hb5"
                            ]
                        ],
                        {
                            top: "360px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "hb6"
                            ]
                        ],
                        {
                            top: "412px",
                            borderTopColor: "#d7c878",
                            borderRightColor: "#d7c878",
                            borderBottomColor: "#d7c878",
                            borderLeftColor: "#d7c878",
                            color: "#fff4bd"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "hb7"
                            ]
                        ],
                        {
                            top: "464px",
                            borderTopColor: "#4aa3ff",
                            borderRightColor: "#4aa3ff",
                            borderBottomColor: "#4aa3ff",
                            borderLeftColor: "#4aa3ff",
                            color: "#d7ecff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "hb8"
                            ]
                        ],
                        {
                            top: "516px",
                            borderTopColor: "#b45cff",
                            borderRightColor: "#b45cff",
                            borderBottomColor: "#b45cff",
                            borderLeftColor: "#b45cff",
                            color: "#efd8ff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "hb9"
                            ]
                        ],
                        {
                            top: "568px",
                            borderTopColor: "#ff6b2a",
                            borderRightColor: "#ff6b2a",
                            borderBottomColor: "#ff6b2a",
                            borderLeftColor: "#ff6b2a",
                            color: "#ffe1d2"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "b1"
                            ]
                        ],
                        {
                            top: "168px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "b2"
                            ]
                        ],
                        {
                            top: "212px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "b3"
                            ]
                        ],
                        {
                            top: "256px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "b4"
                            ]
                        ],
                        {
                            top: "300px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "b5"
                            ]
                        ],
                        {
                            top: "344px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "hint"
                            ]
                        ],
                        {
                            position: "absolute",
                            left: "0px",
                            top: "368px",
                            width: "194px",
                            textAlign: "center",
                            fontSize: "10px",
                            color: "#d7c878"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "assetLine"
                            ]
                        ],
                        {
                            position: "absolute",
                            left: "18px",
                            width: "158px",
                            height: "34px",
                            borderRadius: "7px",
                            backgroundColor: "#102015",
                            borderTopWidth: "1px",
                            borderRightWidth: "1px",
                            borderBottomWidth: "1px",
                            borderLeftWidth: "1px",
                            borderTopColor: "#61ff9e",
                            borderRightColor: "#61ff9e",
                            borderBottomColor: "#61ff9e",
                            borderLeftColor: "#61ff9e",
                            color: "#f3fff5",
                            textAlign: "center",
                            fontSize: "13px",
                            paddingTop: "9px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "a1"
                            ]
                        ],
                        {
                            top: "70px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "a2"
                            ]
                        ],
                        {
                            top: "118px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "a3"
                            ]
                        ],
                        {
                            top: "166px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "a4"
                            ]
                        ],
                        {
                            top: "214px",
                            borderTopColor: "#d7c878",
                            borderRightColor: "#d7c878",
                            borderBottomColor: "#d7c878",
                            borderLeftColor: "#d7c878",
                            color: "#fff4bd"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "eventBtn"
                            ]
                        ],
                        {
                            position: "absolute",
                            right: "6px",
                            bottom: "6px",
                            width: "46px",
                            height: "24px",
                            borderRadius: "12px",
                            backgroundColor: "#2b2410",
                            borderTopWidth: "1px",
                            borderRightWidth: "1px",
                            borderBottomWidth: "1px",
                            borderLeftWidth: "1px",
                            borderTopColor: "#d7c878",
                            borderRightColor: "#d7c878",
                            borderBottomColor: "#d7c878",
                            borderLeftColor: "#d7c878",
                            color: "#fff4bd",
                            textAlign: "center",
                            fontSize: "10px",
                            paddingTop: "5px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "slot"
                            ]
                        ],
                        {
                            position: "absolute",
                            left: "14px",
                            width: "166px",
                            height: "28px",
                            borderRadius: "6px",
                            backgroundColor: "#102015",
                            borderTopWidth: "1px",
                            borderRightWidth: "1px",
                            borderBottomWidth: "1px",
                            borderLeftWidth: "1px",
                            borderTopColor: "#4aa86a",
                            borderRightColor: "#4aa86a",
                            borderBottomColor: "#4aa86a",
                            borderLeftColor: "#4aa86a"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "slotText"
                            ]
                        ],
                        {
                            width: "166px",
                            textAlign: "center",
                            fontSize: "10px",
                            color: "#f3fff5",
                            paddingTop: "8px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "s1"
                            ]
                        ],
                        {
                            top: "42px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "s2"
                            ]
                        ],
                        {
                            top: "76px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "s3"
                            ]
                        ],
                        {
                            top: "110px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "s4"
                            ]
                        ],
                        {
                            top: "144px",
                            left: "14px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "s5"
                            ]
                        ],
                        {
                            top: "178px",
                            left: "14px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "s6"
                            ]
                        ],
                        {
                            top: "212px",
                            left: "14px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "info"
                            ]
                        ],
                        {
                            position: "absolute",
                            left: "0px",
                            top: "246px",
                            width: "194px",
                            textAlign: "center",
                            fontSize: "12px",
                            color: "#d7c878"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "modeInfo"
                            ]
                        ],
                        {
                            top: "318px",
                            fontSize: "10px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "smallBtn"
                            ]
                        ],
                        {
                            width: "74px",
                            height: "30px",
                            fontSize: "12px",
                            paddingTop: "7px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "confirm"
                            ]
                        ],
                        {
                            left: "20px",
                            top: "308px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "back"
                            ]
                        ],
                        {
                            left: "100px",
                            top: "344px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "prev"
                            ]
                        ],
                        {
                            left: "20px",
                            top: "306px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "next"
                            ]
                        ],
                        {
                            left: "100px",
                            top: "306px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "qty"
                            ]
                        ],
                        {
                            position: "absolute",
                            top: "274px",
                            height: "26px",
                            borderRadius: "5px",
                            backgroundColor: "#102015",
                            borderTopWidth: "1px",
                            borderRightWidth: "1px",
                            borderBottomWidth: "1px",
                            borderLeftWidth: "1px",
                            borderTopColor: "#61ff9e",
                            borderRightColor: "#61ff9e",
                            borderBottomColor: "#61ff9e",
                            borderLeftColor: "#61ff9e",
                            color: "#f3fff5",
                            textAlign: "center",
                            fontSize: "13px",
                            paddingTop: "5px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "qMinus"
                            ]
                        ],
                        {
                            left: "38px",
                            width: "34px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "qNum"
                            ]
                        ],
                        {
                            left: "80px",
                            width: "34px",
                            borderTopColor: "#d7c878",
                            borderRightColor: "#d7c878",
                            borderBottomColor: "#d7c878",
                            borderLeftColor: "#d7c878"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "qPlus"
                            ]
                        ],
                        {
                            left: "122px",
                            width: "34px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "opCard"
                            ]
                        ],
                        {
                            position: "absolute",
                            left: "14px",
                            width: "166px",
                            height: "48px",
                            borderRadius: "8px",
                            backgroundColor: "#102015",
                            borderTopWidth: "1px",
                            borderRightWidth: "1px",
                            borderBottomWidth: "1px",
                            borderLeftWidth: "1px",
                            borderTopColor: "#61ff9e",
                            borderRightColor: "#61ff9e",
                            borderBottomColor: "#61ff9e",
                            borderLeftColor: "#61ff9e"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "op1"
                            ]
                        ],
                        {
                            top: "42px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "op2"
                            ]
                        ],
                        {
                            top: "96px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "op3"
                            ]
                        ],
                        {
                            top: "150px",
                            borderTopColor: "#d7c878",
                            borderRightColor: "#d7c878",
                            borderBottomColor: "#d7c878",
                            borderLeftColor: "#d7c878"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "op4"
                            ]
                        ],
                        {
                            top: "204px",
                            borderTopColor: "#4aa3ff",
                            borderRightColor: "#4aa3ff",
                            borderBottomColor: "#4aa3ff",
                            borderLeftColor: "#4aa3ff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "op5"
                            ]
                        ],
                        {
                            top: "258px",
                            borderTopColor: "#d7c878",
                            borderRightColor: "#d7c878",
                            borderBottomColor: "#d7c878",
                            borderLeftColor: "#d7c878"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "op6"
                            ]
                        ],
                        {
                            top: "312px",
                            borderTopColor: "#ff6b2a",
                            borderRightColor: "#ff6b2a",
                            borderBottomColor: "#ff6b2a",
                            borderLeftColor: "#ff6b2a"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "op7"
                            ]
                        ],
                        {
                            top: "366px",
                            borderTopColor: "#ff3030",
                            borderRightColor: "#ff3030",
                            borderBottomColor: "#ff3030",
                            borderLeftColor: "#ff3030"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "opName"
                            ]
                        ],
                        {
                            position: "absolute",
                            left: "10px",
                            top: "8px",
                            fontSize: "15px",
                            color: "#f3fff5"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "guide"
                            ]
                        ],
                        {
                            position: "absolute",
                            left: "12px",
                            width: "170px",
                            height: "30px",
                            color: "#f3fff5",
                            fontSize: "12px",
                            textAlign: "center"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "g1"
                            ]
                        ],
                        {
                            top: "62px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "g2"
                            ]
                        ],
                        {
                            top: "96px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "g3"
                            ]
                        ],
                        {
                            top: "130px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "g4"
                            ]
                        ],
                        {
                            top: "164px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "g5"
                            ]
                        ],
                        {
                            top: "198px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "opSkill"
                            ]
                        ],
                        {
                            position: "absolute",
                            left: "10px",
                            top: "28px",
                            fontSize: "10px",
                            color: "#c8ffd8"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "shopItem"
                            ]
                        ],
                        {
                            position: "absolute",
                            left: "18px",
                            width: "158px",
                            height: "30px",
                            borderRadius: "6px",
                            backgroundColor: "#102015",
                            borderTopWidth: "1px",
                            borderRightWidth: "1px",
                            borderBottomWidth: "1px",
                            borderLeftWidth: "1px",
                            borderTopColor: "#4aa86a",
                            borderRightColor: "#4aa86a",
                            borderBottomColor: "#4aa86a",
                            borderLeftColor: "#4aa86a",
                            color: "#f3fff5",
                            textAlign: "center",
                            fontSize: "12px",
                            paddingTop: "7px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "eventCard"
                            ]
                        ],
                        {
                            position: "absolute",
                            left: "18px",
                            width: "158px",
                            height: "46px",
                            borderRadius: "8px",
                            backgroundColor: "#102015",
                            borderTopWidth: "2px",
                            borderRightWidth: "2px",
                            borderBottomWidth: "2px",
                            borderLeftWidth: "2px",
                            borderTopColor: "#d7c878",
                            borderRightColor: "#d7c878",
                            borderBottomColor: "#d7c878",
                            borderLeftColor: "#d7c878",
                            color: "#fff4bd",
                            textAlign: "center",
                            fontSize: "12px",
                            paddingTop: "14px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "ev1"
                            ]
                        ],
                        {
                            top: "62px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "ev2"
                            ]
                        ],
                        {
                            top: "124px",
                            borderTopColor: "#61ff9e",
                            borderRightColor: "#61ff9e",
                            borderBottomColor: "#61ff9e",
                            borderLeftColor: "#61ff9e",
                            color: "#e6fff0"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "ev3"
                            ]
                        ],
                        {
                            top: "186px",
                            borderTopColor: "#4aa3ff",
                            borderRightColor: "#4aa3ff",
                            borderBottomColor: "#4aa3ff",
                            borderLeftColor: "#4aa3ff",
                            color: "#d7ecff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "i1"
                            ]
                        ],
                        {
                            top: "46px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "i2"
                            ]
                        ],
                        {
                            top: "84px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "i3"
                            ]
                        ],
                        {
                            top: "122px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "i4"
                            ]
                        ],
                        {
                            top: "160px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "i5"
                            ]
                        ],
                        {
                            top: "198px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "i6"
                            ]
                        ],
                        {
                            top: "236px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "i7"
                            ]
                        ],
                        {
                            top: "274px",
                            borderTopColor: "#d7c878",
                            borderRightColor: "#d7c878",
                            borderBottomColor: "#d7c878",
                            borderLeftColor: "#d7c878",
                            color: "#fff4bd"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "redeemBox"
                            ]
                        ],
                        {
                            position: "absolute",
                            left: "20px",
                            top: "70px",
                            width: "154px",
                            height: "38px",
                            borderRadius: "8px",
                            backgroundColor: "#102015",
                            borderTopWidth: "2px",
                            borderRightWidth: "2px",
                            borderBottomWidth: "2px",
                            borderLeftWidth: "2px",
                            borderTopColor: "#ff6b2a",
                            borderRightColor: "#ff6b2a",
                            borderBottomColor: "#ff6b2a",
                            borderLeftColor: "#ff6b2a",
                            color: "#fff4bd",
                            textAlign: "center",
                            fontSize: "18px",
                            paddingTop: "8px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "num"
                            ]
                        ],
                        {
                            position: "absolute",
                            width: "44px",
                            height: "34px",
                            borderRadius: "7px",
                            backgroundColor: "#102015",
                            borderTopWidth: "1px",
                            borderRightWidth: "1px",
                            borderBottomWidth: "1px",
                            borderLeftWidth: "1px",
                            borderTopColor: "#61ff9e",
                            borderRightColor: "#61ff9e",
                            borderBottomColor: "#61ff9e",
                            borderLeftColor: "#61ff9e",
                            color: "#f3fff5",
                            textAlign: "center",
                            fontSize: "15px",
                            paddingTop: "8px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "n1"
                            ]
                        ],
                        {
                            left: "24px",
                            top: "132px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "n2"
                            ]
                        ],
                        {
                            left: "75px",
                            top: "132px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "n3"
                            ]
                        ],
                        {
                            left: "126px",
                            top: "132px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "n4"
                            ]
                        ],
                        {
                            left: "24px",
                            top: "174px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "n5"
                            ]
                        ],
                        {
                            left: "75px",
                            top: "174px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "n6"
                            ]
                        ],
                        {
                            left: "126px",
                            top: "174px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "n7"
                            ]
                        ],
                        {
                            left: "24px",
                            top: "216px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "n8"
                            ]
                        ],
                        {
                            left: "75px",
                            top: "216px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "n9"
                            ]
                        ],
                        {
                            left: "126px",
                            top: "216px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "mapCard"
                            ]
                        ],
                        {
                            position: "absolute",
                            left: "16px",
                            width: "162px",
                            height: "54px",
                            borderRadius: "8px",
                            backgroundColor: "#102015",
                            borderTopWidth: "2px",
                            borderRightWidth: "2px",
                            borderBottomWidth: "2px",
                            borderLeftWidth: "2px",
                            borderTopColor: "#61ff9e",
                            borderRightColor: "#61ff9e",
                            borderBottomColor: "#61ff9e",
                            borderLeftColor: "#61ff9e"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "m1"
                            ]
                        ],
                        {
                            top: "44px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "m2"
                            ]
                        ],
                        {
                            top: "108px",
                            borderTopColor: "#d7c878",
                            borderRightColor: "#d7c878",
                            borderBottomColor: "#d7c878",
                            borderLeftColor: "#d7c878"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "m3"
                            ]
                        ],
                        {
                            top: "172px",
                            borderTopColor: "#61ff9e",
                            borderRightColor: "#61ff9e",
                            borderBottomColor: "#61ff9e",
                            borderLeftColor: "#61ff9e"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "m4"
                            ]
                        ],
                        {
                            top: "236px",
                            borderTopColor: "#d7c878",
                            borderRightColor: "#d7c878",
                            borderBottomColor: "#d7c878",
                            borderLeftColor: "#d7c878"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "mapName"
                            ]
                        ],
                        {
                            position: "absolute",
                            left: "0px",
                            top: "8px",
                            width: "162px",
                            textAlign: "center",
                            fontSize: "14px",
                            color: "#f3fff5"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "mapDesc"
                            ]
                        ],
                        {
                            position: "absolute",
                            left: "0px",
                            top: "32px",
                            width: "162px",
                            textAlign: "center",
                            fontSize: "9px",
                            color: "#c8ffd8"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "mapBtn"
                            ]
                        ],
                        {
                            position: "absolute",
                            left: "16px",
                            width: "162px",
                            height: "34px",
                            borderRadius: "8px",
                            backgroundColor: "#102015",
                            borderTopWidth: "2px",
                            borderRightWidth: "2px",
                            borderBottomWidth: "2px",
                            borderLeftWidth: "2px",
                            borderTopColor: "#61ff9e",
                            borderRightColor: "#61ff9e",
                            borderBottomColor: "#61ff9e",
                            borderLeftColor: "#61ff9e",
                            color: "#f3fff5",
                            textAlign: "center",
                            fontSize: "13px",
                            paddingTop: "8px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "mapTip"
                            ]
                        ],
                        {
                            position: "absolute",
                            left: "0px",
                            width: "194px",
                            textAlign: "center",
                            fontSize: "9px",
                            color: "#c8ffd8"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "mb1"
                            ]
                        ],
                        {
                            top: "42px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "mt1"
                            ]
                        ],
                        {
                            top: "80px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "mb2"
                            ]
                        ],
                        {
                            top: "102px",
                            borderTopColor: "#d7c878",
                            borderRightColor: "#d7c878",
                            borderBottomColor: "#d7c878",
                            borderLeftColor: "#d7c878"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "mt2"
                            ]
                        ],
                        {
                            top: "140px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "mb3"
                            ]
                        ],
                        {
                            top: "162px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "mt3"
                            ]
                        ],
                        {
                            top: "200px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "mb4"
                            ]
                        ],
                        {
                            top: "222px",
                            borderTopColor: "#d7c878",
                            borderRightColor: "#d7c878",
                            borderBottomColor: "#d7c878",
                            borderLeftColor: "#d7c878"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "mt4"
                            ]
                        ],
                        {
                            top: "260px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "mapB1"
                            ]
                        ],
                        {
                            left: "34px",
                            top: "54px",
                            width: "126px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "mapB2"
                            ]
                        ],
                        {
                            left: "34px",
                            top: "114px",
                            width: "126px",
                            borderTopColor: "#d7c878",
                            borderRightColor: "#d7c878",
                            borderBottomColor: "#d7c878",
                            borderLeftColor: "#d7c878"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "mapB3"
                            ]
                        ],
                        {
                            left: "34px",
                            top: "174px",
                            width: "126px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "mapB4"
                            ]
                        ],
                        {
                            left: "34px",
                            top: "216px",
                            width: "126px",
                            borderTopColor: "#d7c878",
                            borderRightColor: "#d7c878",
                            borderBottomColor: "#d7c878",
                            borderLeftColor: "#d7c878"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "mapB5"
                            ]
                        ],
                        {
                            left: "34px",
                            top: "268px",
                            width: "126px",
                            borderTopColor: "#61ff9e",
                            borderRightColor: "#61ff9e",
                            borderBottomColor: "#61ff9e",
                            borderLeftColor: "#61ff9e"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "mapB6"
                            ]
                        ],
                        {
                            left: "34px",
                            top: "320px",
                            width: "126px",
                            borderTopColor: "#ff5858",
                            borderRightColor: "#ff5858",
                            borderBottomColor: "#ff5858",
                            borderLeftColor: "#ff5858"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "game"
                            ]
                        ],
                        {
                            width: "194px",
                            height: "390px",
                            backgroundColor: "#050907",
                            position: "relative",
                            overflow: "hidden"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "mapBg"
                            ]
                        ],
                        {
                            position: "absolute",
                            left: "0px",
                            top: "0px",
                            width: "194px",
                            height: "390px",
                            backgroundColor: "#07100c"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "world"
                            ]
                        ],
                        {
                            position: "absolute"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "mapShade"
                            ]
                        ],
                        {
                            position: "absolute",
                            backgroundColor: "#000000",
                            opacity: 0.12
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "river"
                            ]
                        ],
                        {
                            position: "absolute",
                            backgroundColor: "#214d62",
                            opacity: 0.16
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "road"
                            ]
                        ],
                        {
                            position: "absolute",
                            backgroundColor: "#2d342e",
                            opacity: 0.18
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "building"
                            ]
                        ],
                        {
                            position: "absolute",
                            backgroundColor: "#1b261d",
                            borderTopWidth: "1px",
                            borderRightWidth: "1px",
                            borderBottomWidth: "1px",
                            borderLeftWidth: "1px",
                            borderTopColor: "#667260",
                            borderRightColor: "#667260",
                            borderBottomColor: "#667260",
                            borderLeftColor: "#667260",
                            opacity: 0.2
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "exfil"
                            ]
                        ],
                        {
                            position: "absolute",
                            backgroundColor: "#42ff78",
                            borderTopWidth: "2px",
                            borderRightWidth: "2px",
                            borderBottomWidth: "2px",
                            borderLeftWidth: "2px",
                            borderTopColor: "#b8ffd0",
                            borderRightColor: "#b8ffd0",
                            borderBottomColor: "#b8ffd0",
                            borderLeftColor: "#b8ffd0",
                            borderRadius: "25px",
                            opacity: 0.72
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "battleBase"
                            ]
                        ],
                        {
                            position: "absolute",
                            borderTopWidth: "2px",
                            borderRightWidth: "2px",
                            borderBottomWidth: "2px",
                            borderLeftWidth: "2px",
                            borderRadius: "4px",
                            opacity: 0.86
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "allyBase"
                            ]
                        ],
                        {
                            backgroundColor: "#18d67a",
                            borderTopColor: "#b8ffd0",
                            borderRightColor: "#b8ffd0",
                            borderBottomColor: "#b8ffd0",
                            borderLeftColor: "#b8ffd0"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "enemyBase"
                            ]
                        ],
                        {
                            backgroundColor: "#e33a3a",
                            borderTopColor: "#ffd0d0",
                            borderRightColor: "#ffd0d0",
                            borderBottomColor: "#ffd0d0",
                            borderLeftColor: "#ffd0d0"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "bot"
                            ]
                        ],
                        {
                            position: "absolute",
                            borderTopWidth: "2px",
                            borderRightWidth: "2px",
                            borderBottomWidth: "2px",
                            borderLeftWidth: "2px",
                            borderRadius: "4px",
                            textAlign: "center",
                            fontSize: "12px",
                            fontWeight: "bold"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "allyBot"
                            ]
                        ],
                        {
                            backgroundColor: "#61ff9e",
                            borderTopColor: "#ffffff",
                            borderRightColor: "#ffffff",
                            borderBottomColor: "#ffffff",
                            borderLeftColor: "#ffffff",
                            color: "#062313"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "enemyBot"
                            ]
                        ],
                        {
                            backgroundColor: "#ff1f1f",
                            borderTopColor: "#ffffff",
                            borderRightColor: "#ffffff",
                            borderBottomColor: "#ffffff",
                            borderLeftColor: "#ffffff",
                            color: "#ffffff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "container"
                            ]
                        ],
                        {
                            position: "absolute"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "mandel"
                            ]
                        ],
                        {
                            position: "absolute",
                            borderTopWidth: "2px",
                            borderRightWidth: "2px",
                            borderBottomWidth: "2px",
                            borderLeftWidth: "2px",
                            borderTopColor: "#ffd54a",
                            borderRightColor: "#ffd54a",
                            borderBottomColor: "#ffd54a",
                            borderLeftColor: "#ffd54a",
                            borderRadius: "5px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "safe"
                            ]
                        ],
                        {
                            position: "absolute",
                            backgroundColor: "#d7c878",
                            borderTopWidth: "1px",
                            borderRightWidth: "1px",
                            borderBottomWidth: "1px",
                            borderLeftWidth: "1px",
                            borderTopColor: "#fff1a4",
                            borderRightColor: "#fff1a4",
                            borderBottomColor: "#fff1a4",
                            borderLeftColor: "#fff1a4"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "smallSafe"
                            ]
                        ],
                        {
                            backgroundColor: "#b8a84c"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "box"
                            ]
                        ],
                        {
                            position: "absolute",
                            backgroundColor: "#6a5432",
                            borderTopWidth: "1px",
                            borderRightWidth: "1px",
                            borderBottomWidth: "1px",
                            borderLeftWidth: "1px",
                            borderTopColor: "#d7c878",
                            borderRightColor: "#d7c878",
                            borderBottomColor: "#d7c878",
                            borderLeftColor: "#d7c878"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "medbox"
                            ]
                        ],
                        {
                            position: "absolute",
                            backgroundColor: "#a13b3b",
                            borderTopWidth: "1px",
                            borderRightWidth: "1px",
                            borderBottomWidth: "1px",
                            borderLeftWidth: "1px",
                            borderTopColor: "#ffffff",
                            borderRightColor: "#ffffff",
                            borderBottomColor: "#ffffff",
                            borderLeftColor: "#ffffff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "enemy"
                            ]
                        ],
                        {
                            position: "absolute",
                            backgroundColor: "#c94141",
                            borderRadius: "8px",
                            borderTopWidth: "2px",
                            borderRightWidth: "2px",
                            borderBottomWidth: "2px",
                            borderLeftWidth: "2px",
                            borderTopColor: "#4d0b0b",
                            borderRightColor: "#4d0b0b",
                            borderBottomColor: "#4d0b0b",
                            borderLeftColor: "#4d0b0b"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "hard"
                            ]
                        ],
                        {
                            backgroundColor: "#ee6d3c"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "summonAlly"
                            ]
                        ],
                        {
                            position: "absolute",
                            backgroundColor: "#135c30",
                            borderRadius: "8px",
                            borderTopWidth: "2px",
                            borderRightWidth: "2px",
                            borderBottomWidth: "2px",
                            borderLeftWidth: "2px",
                            borderTopColor: "#61ff9e",
                            borderRightColor: "#61ff9e",
                            borderBottomColor: "#61ff9e",
                            borderLeftColor: "#61ff9e",
                            color: "#ffffff",
                            textAlign: "center",
                            fontSize: "10px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "player"
                            ]
                        ],
                        {
                            position: "absolute",
                            backgroundColor: "#61ff9e",
                            borderRadius: "4px",
                            borderTopWidth: "2px",
                            borderRightWidth: "2px",
                            borderBottomWidth: "2px",
                            borderLeftWidth: "2px",
                            borderTopColor: "#ffffff",
                            borderRightColor: "#ffffff",
                            borderBottomColor: "#ffffff",
                            borderLeftColor: "#ffffff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "hud"
                            ]
                        ],
                        {
                            position: "absolute",
                            left: "4px",
                            width: "100px",
                            color: "#f3fff5",
                            fontSize: "10px",
                            backgroundColor: "#07100c"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "h1"
                            ]
                        ],
                        {
                            top: "4px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "h2"
                            ]
                        ],
                        {
                            top: "19px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "h3"
                            ]
                        ],
                        {
                            top: "34px",
                            color: "#d7c878"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "h4"
                            ]
                        ],
                        {
                            top: "49px",
                            color: "#61ff9e"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "h5"
                            ]
                        ],
                        {
                            top: "64px",
                            color: "#ffffff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "joy"
                            ]
                        ],
                        {
                            position: "absolute",
                            width: "44px",
                            height: "44px",
                            borderRadius: "22px",
                            backgroundColor: "#102015",
                            opacity: 0.72,
                            borderTopWidth: "1px",
                            borderRightWidth: "1px",
                            borderBottomWidth: "1px",
                            borderLeftWidth: "1px",
                            borderTopColor: "#61ff9e",
                            borderRightColor: "#61ff9e",
                            borderBottomColor: "#61ff9e",
                            borderLeftColor: "#61ff9e"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "jUp"
                            ]
                        ],
                        {
                            left: "40px",
                            top: "262px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "jLeft"
                            ]
                        ],
                        {
                            left: "4px",
                            top: "310px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "jRight"
                            ]
                        ],
                        {
                            left: "76px",
                            top: "310px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "jDown"
                            ]
                        ],
                        {
                            left: "40px",
                            top: "344px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "act"
                            ]
                        ],
                        {
                            position: "absolute",
                            right: "8px",
                            width: "54px",
                            height: "40px",
                            borderRadius: "20px",
                            backgroundColor: "#102015",
                            borderTopWidth: "1px",
                            borderRightWidth: "1px",
                            borderBottomWidth: "1px",
                            borderLeftWidth: "1px",
                            borderTopColor: "#d7c878",
                            borderRightColor: "#d7c878",
                            borderBottomColor: "#d7c878",
                            borderLeftColor: "#d7c878",
                            color: "#f3fff5",
                            textAlign: "center",
                            fontSize: "14px",
                            paddingTop: "10px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "search"
                            ]
                        ],
                        {
                            top: "244px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "attack"
                            ]
                        ],
                        {
                            top: "294px",
                            borderTopColor: "#ff6c5c",
                            borderRightColor: "#ff6c5c",
                            borderBottomColor: "#ff6c5c",
                            borderLeftColor: "#ff6c5c"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "leave"
                            ]
                        ],
                        {
                            top: "8px",
                            borderTopColor: "#a13b3b",
                            borderRightColor: "#a13b3b",
                            borderBottomColor: "#a13b3b",
                            borderLeftColor: "#a13b3b"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "skill"
                            ]
                        ],
                        {
                            top: "194px",
                            borderTopColor: "#61ff9e",
                            borderRightColor: "#61ff9e",
                            borderBottomColor: "#61ff9e",
                            borderLeftColor: "#61ff9e"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "bandage"
                            ]
                        ],
                        {
                            top: "344px",
                            borderTopColor: "#ffffff",
                            borderRightColor: "#ffffff",
                            borderBottomColor: "#ffffff",
                            borderLeftColor: "#ffffff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "bagBtn"
                            ]
                        ],
                        {
                            top: "144px",
                            borderTopColor: "#4aa3ff",
                            borderRightColor: "#4aa3ff",
                            borderBottomColor: "#4aa3ff",
                            borderLeftColor: "#4aa3ff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "weapon"
                            ]
                        ],
                        {
                            top: "94px",
                            borderTopColor: "#b45cff",
                            borderRightColor: "#b45cff",
                            borderBottomColor: "#b45cff",
                            borderLeftColor: "#b45cff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "sellAllBtn"
                            ]
                        ],
                        {
                            left: "14px",
                            top: "310px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "modBtn"
                            ]
                        ],
                        {
                            left: "104px",
                            top: "310px",
                            borderTopColor: "#b45cff",
                            borderRightColor: "#b45cff",
                            borderBottomColor: "#b45cff",
                            borderLeftColor: "#b45cff"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "boss"
                            ]
                        ],
                        {
                            position: "absolute",
                            borderTopWidth: "2px",
                            borderRightWidth: "2px",
                            borderBottomWidth: "2px",
                            borderLeftWidth: "2px",
                            borderTopColor: "#ff3333",
                            borderRightColor: "#ff3333",
                            borderBottomColor: "#ff3333",
                            borderLeftColor: "#ff3333"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "bossBar"
                            ]
                        ],
                        {
                            position: "absolute",
                            backgroundColor: "#3b0b0b"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "bossHpBar"
                            ]
                        ],
                        {
                            position: "absolute",
                            backgroundColor: "#ff3333"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "burnZone"
                            ]
                        ],
                        {
                            position: "absolute",
                            backgroundColor: "#ff6b1a",
                            borderTopWidth: "2px",
                            borderRightWidth: "2px",
                            borderBottomWidth: "2px",
                            borderLeftWidth: "2px",
                            borderTopColor: "#ffd06a",
                            borderRightColor: "#ffd06a",
                            borderBottomColor: "#ffd06a",
                            borderLeftColor: "#ffd06a",
                            borderRadius: "26px",
                            opacity: 0.55
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "nightMask"
                            ]
                        ],
                        {
                            position: "absolute",
                            backgroundColor: "#000000",
                            opacity: 0.92
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "capture"
                            ]
                        ],
                        {
                            top: "244px",
                            borderTopColor: "#61ff9e",
                            borderRightColor: "#61ff9e",
                            borderBottomColor: "#61ff9e",
                            borderLeftColor: "#61ff9e"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "drop"
                            ]
                        ],
                        {
                            position: "absolute",
                            left: "150px",
                            width: "30px",
                            height: "24px",
                            borderRadius: "5px",
                            backgroundColor: "#2b1414",
                            borderTopWidth: "1px",
                            borderRightWidth: "1px",
                            borderBottomWidth: "1px",
                            borderLeftWidth: "1px",
                            borderTopColor: "#ff6c5c",
                            borderRightColor: "#ff6c5c",
                            borderBottomColor: "#ff6c5c",
                            borderLeftColor: "#ff6c5c",
                            color: "#ffffff",
                            textAlign: "center",
                            fontSize: "11px",
                            paddingTop: "5px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "d1"
                            ]
                        ],
                        {
                            top: "118px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "d2"
                            ]
                        ],
                        {
                            top: "148px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "d3"
                            ]
                        ],
                        {
                            top: "178px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "d4"
                            ]
                        ],
                        {
                            top: "208px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "result"
                            ]
                        ],
                        {
                            position: "absolute",
                            left: "0px",
                            top: "110px",
                            width: "194px",
                            color: "#f3fff5",
                            textAlign: "center",
                            fontSize: "15px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "r2txt"
                            ]
                        ],
                        {
                            top: "140px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "r3txt"
                            ]
                        ],
                        {
                            top: "250px",
                            fontSize: "12px",
                            color: "#d7c878"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "found"
                            ]
                        ],
                        {
                            position: "absolute",
                            left: "18px",
                            width: "158px",
                            height: "24px",
                            borderRadius: "5px",
                            borderTopWidth: "2px",
                            borderRightWidth: "2px",
                            borderBottomWidth: "2px",
                            borderLeftWidth: "2px",
                            backgroundColor: "#102015",
                            textAlign: "center",
                            fontSize: "11px",
                            paddingTop: "5px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "f1"
                            ]
                        ],
                        {
                            top: "118px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "f2"
                            ]
                        ],
                        {
                            top: "148px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "f3"
                            ]
                        ],
                        {
                            top: "178px"
                        }
                    ],
                    [
                        [
                            [
                                0,
                                "f4"
                            ]
                        ],
                        {
                            top: "208px"
                        }
                    ]
                ];
                var $app_script$ = function __scriptModule__(module, exports, $app_require$1) {
                    "use strict";
                    Object.defineProperty(exports, "__esModule", {
                        value: true
                    });
                    exports.default = void 0;
                    const VW = 194;
                    const VH = 390;
                    const MW = 760;
                    const MH = 390;
                    const GUNS = [
                        'M4A1',
                        'AKM',
                        'Vector',
                        'M870',
                        'PKM',
                        'SR-25',
                        'M7',
                        'MCX',
                        'MP7',
                        '复合弓',
                        'K416',
                        'AS Val',
                        'G3',
                        'AUG',
                        'P90',
                        'SG552',
                        'QBZ95-1',
                        'SCAR-H',
                        'M14',
                        'ASh-12',
                        'MP5',
                        'UZI',
                        '野牛',
                        'K437',
                        'AK-12',
                        'M249',
                        'SVD'
                    ];
                    const ARMORS = [
                        'TG-H防弹衣',
                        'DT-AVS防弹衣',
                        'FS复合防弹衣',
                        'Hvk-2防弹衣',
                        'HMP防弹衣',
                        '重型突击背心',
                        '轻型防弹衣',
                        '制式防弹衣',
                        '突击防弹衣',
                        '重装防弹衣',
                        '老赛甲',
                        'MK2战术背心',
                        '摩托马甲',
                        'HLS-2重型背包',
                        '重型防爆甲',
                        '精英作战背心'
                    ];
                    const HELMETS = [
                        'DICH训练盔',
                        'MC201头盔',
                        '安保战术盔',
                        '防爆头盔',
                        'H70夜视盔',
                        'GT5重型头盔'
                    ];
                    const BATTLE_RANKS = [
                        '列兵',
                        '上等兵',
                        '军士长',
                        '尉官',
                        '校官',
                        '将军',
                        '统帅'
                    ];
                    const ATTACHMENTS = [
                        '红点瞄准镜',
                        '2倍全息',
                        '轻语消音器',
                        '双流制退器',
                        'RK-0前握把',
                        '共振三代握把',
                        '45发扩容弹匣',
                        '30发扩容弹匣',
                        '战术枪托',
                        'DBAL激光镭指',
                        '护木片',
                        '快拔套'
                    ];
                    const LOOT_NAMES = {
                        white: [
                            '螺丝刀',
                            '胶带',
                            '电池',
                            '普通电线',
                            '塑料零件',
                            '旧手机',
                            '扳手'
                        ],
                        green: [
                            '军用电台',
                            '精密齿轮',
                            '医疗注射器',
                            '战术手电',
                            '加固胶布',
                            '高分子布料'
                        ],
                        blue: [
                            '卫星天线',
                            '精密齿轮组',
                            '显卡',
                            '军用终端',
                            '高强度纤维',
                            '加密硬盘'
                        ],
                        purple: [
                            '钛合金构件',
                            '超导材料',
                            '纳米陶瓷涂层',
                            '实验室房卡',
                            '航空仪表',
                            '服务器主板'
                        ],
                        gold: [
                            '曼德尔超算单元',
                            '黑匣子',
                            '火箭燃料',
                            '非洲之星',
                            '军用服务器',
                            '总裁室密钥'
                        ],
                        red: [
                            '黄金瞪羚',
                            '绝密服务器',
                            '量子存储阵列',
                            '航天核心样本',
                            '绝密黑匣子',
                            '典藏军工藏品'
                        ]
                    };
                    var _default = exports.default = {
                        private: {
                            pageHome: true,
                            pageWarehouse: false,
                            pageOperator: false,
                            pagePrep: false,
                            pageShop: false,
                            pageReady: false,
                            pageMap: false,
                            pageGame: false,
                            pageResult: false,
                            pageCollection: false,
                            pageWarehouseLoot: false,
                            pageGunMod: false,
                            pageEvent: false,
                            pageAssets: false,
                            pageRedeem: false,
                            pageLoot: false,
                            pageRaidBag: false,
                            pageMode: false,
                            pageBattleHome: false,
                            pageBattleSwitch: false,
                            pageBattleRank: false,
                            pageBattleGuide: false,
                            pageNightHome: false,
                            pageNightMap: false,
                            pageChallengeHome: false,
                            pageChallengeGuide: false,
                            pageKingMap: false,
                            pageKingGun: false,
                            pageKingGame: false,
                            pageBattleResult: false,
                            level: 1,
                            exp: 0,
                            nextExp: 100,
                            cash: 500,
                            ticket: 0,
                            playCount: 0,
                            gun: 1,
                            gunName: 'M4A1',
                            gunInv: 'M4A1',
                            selectedGunIndex: 0,
                            gunItem: 'M4A1 x1',
                            armor: 1,
                            armorName: 'Hvk-2防弹衣',
                            armorInv: 'Hvk-2防弹衣',
                            selectedArmorIndex: 0,
                            armorItem: 'Hvk-2防弹衣 x1',
                            helmet: 1,
                            helmetName: 'DICH训练盔',
                            ammoStore: 30,
                            med: 2,
                            knife: 1,
                            loot: 0,
                            whiteInv: 0,
                            greenInv: 0,
                            blueInv: 0,
                            purpleInv: 0,
                            goldInv: 0,
                            redInv: 0,
                            runWhite: 0,
                            runGreen: 0,
                            runBlue: 0,
                            runPurple: 0,
                            runGold: 0,
                            runRed: 0,
                            collection: 0,
                            collectionGun: 0,
                            collectionArmor: 0,
                            collectionInv: '',
                            collectionGunInv: '',
                            collectionArmorInv: '',
                            collectQty: 1,
                            collectMax: 1,
                            collectType: '',
                            collectLootItem: '物资 0',
                            collectGunItem: '枪械 0',
                            collectArmorItem: '护甲 0',
                            collectionText: '暂无收藏',
                            collectionBest: '暂无收藏',
                            collectionStyle: 'border-color:#ffffff;color:#f5f5f5;',
                            bestLootName: '物资 0',
                            attachment: 0,
                            gunPower: 0,
                            modText: '收集配件后可一键强化当前枪械',
                            whItem1: '',
                            whItem2: '',
                            whItem3: '',
                            whItem4: '',
                            whStyle1: '',
                            whStyle2: '',
                            whStyle3: '',
                            whStyle4: '',
                            eventText: '活动奖励可领取',
                            weekendClaimed: false,
                            assaultClaimed: false,
                            humanClaimed: false,
                            challengeTicket: 10,
                            challengeLevel: 1,
                            challengeDone: false,
                            challengeText: '找到曼德尔并撤离',
                            currentMode: '烽火地带',
                            modeText: '大战场开发中',
                            battleRank: 0,
                            battleRankName: '列兵',
                            battleLastWeek: 0,
                            battleText: '选择烬区开始',
                            battleGunIndex: 0,
                            battleGunName: 'M4A1',
                            battleResultTitle: '胜利',
                            battleTimer: null,
                            battleLoad1: null,
                            battleLoad2: null,
                            battleLoad3: null,
                            battleLoad4: null,
                            battleShowPlayer: false,
                            battleShowAllies: false,
                            battleShowEnemies: false,
                            battleReady: false,
                            battleMapStyle: '',
                            battlePx: 92,
                            battlePy: 190,
                            battleHp: 100,
                            battleRespawn: 0,
                            battlePlayerStyle: '',
                            allyBaseCount: 3,
                            enemyBaseCount: 3,
                            allyBase1: true,
                            allyBase2: true,
                            allyBase3: true,
                            enemyBase1: true,
                            enemyBase2: true,
                            enemyBase3: true,
                            allyBase1Style: '',
                            allyBase2Style: '',
                            allyBase3Style: '',
                            enemyBase1Style: '',
                            enemyBase2Style: '',
                            enemyBase3Style: '',
                            ally1Style: '',
                            ally2Style: '',
                            ally3Style: '',
                            ally4Style: '',
                            enemy1Style: '',
                            enemy2Style: '',
                            enemy3Style: '',
                            enemy4Style: '',
                            enemy5Style: '',
                            ally1on: true,
                            ally2on: true,
                            ally3on: true,
                            ally4on: true,
                            enemy1on: true,
                            enemy2on: true,
                            enemy3on: true,
                            enemy4on: true,
                            enemy5on: true,
                            ally1x: 120,
                            ally1y: 120,
                            ally2x: 120,
                            ally2y: 180,
                            ally3x: 120,
                            ally3y: 240,
                            ally4x: 160,
                            ally4y: 190,
                            enemy1x: 600,
                            enemy1y: 115,
                            enemy2x: 635,
                            enemy2y: 175,
                            enemy3x: 600,
                            enemy3y: 235,
                            enemy4x: 660,
                            enemy4y: 150,
                            enemy5x: 660,
                            enemy5y: 220,
                            enemy1hp: 40,
                            enemy2hp: 40,
                            enemy3hp: 40,
                            enemy4hp: 40,
                            enemy5hp: 40,
                            moveDir: '',
                            sellType: '',
                            sellQty: 1,
                            sellMax: 1,
                            sellRarity: '',
                            sellUnitPrice: 0,
                            sellText: '选择物品',
                            shopPage: 0,
                            shop1: '',
                            shop2: '',
                            shop3: '',
                            shop4: '',
                            shop5: '',
                            shop6: '',
                            operatorName: '威龙',
                            redWolfUnlocked: false,
                            deepBlueUnlocked: false,
                            lunaUnlocked: false,
                            uluruUnlocked: false,
                            chixiaoUnlocked: false,
                            redWolfText: '未解锁  20券',
                            deepBlueText: '未解锁  50券',
                            lunaText: '未解锁  20券',
                            uluruText: '未解锁  20券',
                            chixiaoText: '兑换码专属',
                            redeemInput: '',
                            redeemText: '输入6位兑换码解锁赤枭',
                            skillCd: 0,
                            skillTime: 0,
                            shieldOn: false,
                            speedBoostOn: false,
                            burnOn: false,
                            burnX: 0,
                            burnY: 0,
                            burnTime: 0,
                            burnStyle: '',
                            en1Burn: 0,
                            en2Burn: 0,
                            en3Burn: 0,
                            bossBurn: 0,
                            chixiaoSummoned: 0,
                            skillText: '技能就绪',
                            currentWeapon: 'gun',
                            weaponText: '武器 枪',
                            mapText: '机密大坝 12级解锁',
                            carryGun: true,
                            carryArmor: true,
                            carryHelmet: true,
                            carryKnife: false,
                            carryAmmo: 20,
                            carryMed: 1,
                            carryGunText: '已带',
                            carryArmorText: '已穿',
                            carryHelmetText: '已戴',
                            carryKnifeText: '未带',
                            raidGunName: '',
                            raidArmorName: '',
                            raidKnifeTaken: false,
                            readyGunIndex: 0,
                            readyArmorIndex: 0,
                            readyGunText: '枪 M4A1',
                            readyArmorText: '甲 Hvk-2防弹衣',
                            storageBad: false,
                            isSecret: false,
                            isValley: false,
                            isSpace: false,
                            nightRaid: false,
                            nightTopStyle: '',
                            nightBottomStyle: '',
                            nightLeftStyle: '',
                            nightRightStyle: '',
                            challengeRaid: false,
                            mandelOn: false,
                            mandelFound: false,
                            mandelX: 300,
                            mandelY: 180,
                            mandelStyle: '',
                            useDamMap: true,
                            useValleyMap: false,
                            useSpaceMap: false,
                            raidName: '普通大坝',
                            px: 70,
                            py: 520,
                            hp: 100,
                            armorDur: 0,
                            armorMax: 0,
                            inAmmo: 20,
                            raidLoot: 0,
                            time: 120,
                            timer: null,
                            expGain: 0,
                            lootGain: 0,
                            cashGain: 0,
                            resultTitle: '成功撤离',
                            found1: '',
                            found2: '',
                            found3: '',
                            found4: '',
                            foundStyle1: '',
                            foundStyle2: '',
                            foundStyle3: '',
                            foundStyle4: '',
                            foundCount: 0,
                            pending1: '',
                            pending2: '',
                            pending3: '',
                            pendingStyle1: '',
                            pendingStyle2: '',
                            pendingStyle3: '',
                            pendingRarity1: '',
                            pendingRarity2: '',
                            pendingRarity3: '',
                            pending1on: false,
                            pending2on: false,
                            pending3on: false,
                            pendingEmpty: false,
                            playerStyle: '',
                            worldStyle: '',
                            mapStyle: '',
                            riverStyle: '',
                            road1: '',
                            road2: '',
                            b1Style: '',
                            b2Style: '',
                            b3Style: '',
                            b4Style: '',
                            exfilStyle: '',
                            c1: '',
                            c2: '',
                            c3: '',
                            c4: '',
                            c5: '',
                            c6: '',
                            c7: '',
                            c8: '',
                            c9: '',
                            c10: '',
                            c11: '',
                            c12: '',
                            c13: '',
                            c14: '',
                            c15: '',
                            c16: '',
                            c17: '',
                            c18: '',
                            c19: '',
                            c20: '',
                            c21: '',
                            c22: '',
                            c23: '',
                            c24: '',
                            c25: '',
                            c1x: 0,
                            c1y: 0,
                            c2x: 0,
                            c2y: 0,
                            c3x: 0,
                            c3y: 0,
                            c4x: 0,
                            c4y: 0,
                            c5x: 0,
                            c5y: 0,
                            c6x: 0,
                            c6y: 0,
                            c7x: 0,
                            c7y: 0,
                            c8x: 0,
                            c8y: 0,
                            c9x: 0,
                            c9y: 0,
                            c10x: 0,
                            c10y: 0,
                            c11x: 0,
                            c11y: 0,
                            c12x: 0,
                            c12y: 0,
                            c13x: 0,
                            c13y: 0,
                            c14x: 0,
                            c14y: 0,
                            c15x: 0,
                            c15y: 0,
                            c16x: 0,
                            c16y: 0,
                            c17x: 0,
                            c17y: 0,
                            c18x: 0,
                            c18y: 0,
                            c19x: 0,
                            c19y: 0,
                            c20x: 0,
                            c20y: 0,
                            c21x: 0,
                            c21y: 0,
                            c22x: 0,
                            c22y: 0,
                            c23x: 0,
                            c23y: 0,
                            c24x: 0,
                            c24y: 0,
                            c25x: 0,
                            c25y: 0,
                            c1on: true,
                            c2on: true,
                            c3on: true,
                            c4on: true,
                            c5on: true,
                            c6on: true,
                            c7on: true,
                            c8on: true,
                            c9on: true,
                            c10on: true,
                            c11on: false,
                            c12on: false,
                            c13on: false,
                            c14on: false,
                            c15on: false,
                            c16on: false,
                            c17on: false,
                            c18on: false,
                            c19on: false,
                            c20on: false,
                            c21on: false,
                            c22on: false,
                            c23on: false,
                            c24on: false,
                            c25on: false,
                            bossOn: false,
                            bossX: 520,
                            bossY: 160,
                            bossHp: 160,
                            bossMaxHp: 160,
                            bossStyle: '',
                            bossBarStyle: '',
                            bossHpStyle: '',
                            sAlly1Style: '',
                            sAlly2Style: '',
                            sAlly3Style: '',
                            sAlly4Style: '',
                            sAlly5Style: '',
                            sAlly6Style: '',
                            sAlly7Style: '',
                            sAlly1on: false,
                            sAlly2on: false,
                            sAlly3on: false,
                            sAlly4on: false,
                            sAlly5on: false,
                            sAlly6on: false,
                            sAlly7on: false,
                            sAlly1x: 0,
                            sAlly1y: 0,
                            sAlly2x: 0,
                            sAlly2y: 0,
                            sAlly3x: 0,
                            sAlly3y: 0,
                            sAlly4x: 0,
                            sAlly4y: 0,
                            sAlly5x: 0,
                            sAlly5y: 0,
                            sAlly6x: 0,
                            sAlly6y: 0,
                            sAlly7x: 0,
                            sAlly7y: 0,
                            sAlly1hp: 50,
                            sAlly2hp: 50,
                            sAlly3hp: 50,
                            sAlly4hp: 50,
                            sAlly5hp: 50,
                            sAlly6hp: 50,
                            sAlly7hp: 50,
                            en1: '',
                            en2: '',
                            en3: '',
                            en1x: 260,
                            en1y: 460,
                            en2x: 410,
                            en2y: 210,
                            en3x: 350,
                            en3y: 100,
                            en1hp: 2,
                            en2hp: 2,
                            en3hp: 4,
                            en1on: true,
                            en2on: true,
                            en3on: true
                        },
                        onInit () {
                            this.refreshAll();
                            setTimeout(()=>{
                                this.loadGame();
                            }, 300);
                        },
                        onDestroy () {
                            this.stop();
                        },
                        stop () {
                            if (this.timer) {
                                clearInterval(this.timer);
                                this.timer = null;
                            }
                            if (this.battleTimer) {
                                clearInterval(this.battleTimer);
                                this.battleTimer = null;
                            }
                            if (this.battleLoad1) {
                                clearTimeout(this.battleLoad1);
                                this.battleLoad1 = null;
                            }
                            if (this.battleLoad2) {
                                clearTimeout(this.battleLoad2);
                                this.battleLoad2 = null;
                            }
                            if (this.battleLoad3) {
                                clearTimeout(this.battleLoad3);
                                this.battleLoad3 = null;
                            }
                            if (this.battleLoad4) {
                                clearTimeout(this.battleLoad4);
                                this.battleLoad4 = null;
                            }
                        },
                        saveGame () {
                            if (this.storageBad) return;
                            let st = null;
                            try {
                                st = $app_require$1("@app-module/system.storage");
                            } catch (e) {
                                this.storageBad = true;
                                return;
                            }
                            const data = {
                                level: this.level,
                                exp: this.exp,
                                nextExp: this.nextExp,
                                cash: this.cash,
                                ticket: this.ticket,
                                playCount: this.playCount,
                                gunInv: this.gunInv,
                                gunName: this.gunName,
                                selectedGunIndex: this.selectedGunIndex,
                                armorInv: this.armorInv,
                                armorName: this.armorName,
                                selectedArmorIndex: this.selectedArmorIndex,
                                helmet: this.helmet,
                                helmetName: this.helmetName,
                                ammoStore: this.ammoStore,
                                med: this.med,
                                knife: this.knife,
                                loot: this.loot,
                                whiteInv: this.whiteInv,
                                greenInv: this.greenInv,
                                blueInv: this.blueInv,
                                purpleInv: this.purpleInv,
                                goldInv: this.goldInv,
                                redInv: this.redInv,
                                collection: this.collection,
                                collectionGun: this.collectionGun,
                                collectionArmor: this.collectionArmor,
                                collectionInv: this.collectionInv,
                                collectionGunInv: this.collectionGunInv,
                                collectionArmorInv: this.collectionArmorInv,
                                weekendClaimed: this.weekendClaimed,
                                assaultClaimed: this.assaultClaimed,
                                humanClaimed: this.humanClaimed,
                                operatorName: this.operatorName,
                                currentMode: this.currentMode,
                                readyGunIndex: this.readyGunIndex,
                                readyArmorIndex: this.readyArmorIndex,
                                redWolfUnlocked: this.redWolfUnlocked,
                                deepBlueUnlocked: this.deepBlueUnlocked,
                                lunaUnlocked: this.lunaUnlocked,
                                uluruUnlocked: this.uluruUnlocked,
                                chixiaoUnlocked: this.chixiaoUnlocked,
                                battleRank: this.battleRank,
                                battleLastWeek: this.battleLastWeek,
                                attachment: this.attachment,
                                gunPower: this.gunPower,
                                challengeTicket: this.challengeTicket,
                                challengeLevel: this.challengeLevel,
                                challengeDone: this.challengeDone
                            };
                            try {
                                st.set({
                                    key: 'df_save_082',
                                    value: JSON.stringify(data)
                                });
                            } catch (e2) {
                                this.storageBad = true;
                            }
                        },
                        loadGame () {
                            if (this.storageBad) return;
                            let st = null;
                            try {
                                st = $app_require$1("@app-module/system.storage");
                            } catch (e) {
                                this.storageBad = true;
                                return;
                            }
                            try {
                                st.get({
                                    key: 'df_save_082',
                                    success: (res)=>{
                                        const raw = res && res.data ? res.data : res;
                                        if (!raw) return;
                                        let data = {};
                                        try {
                                            data = JSON.parse(raw);
                                        } catch (e2) {
                                            return;
                                        }
                                        const keys = [
                                            'level',
                                            'exp',
                                            'nextExp',
                                            'cash',
                                            'ticket',
                                            'playCount',
                                            'gunInv',
                                            'gunName',
                                            'selectedGunIndex',
                                            'armorInv',
                                            'armorName',
                                            'selectedArmorIndex',
                                            'helmet',
                                            'helmetName',
                                            'ammoStore',
                                            'med',
                                            'knife',
                                            'loot',
                                            'whiteInv',
                                            'greenInv',
                                            'blueInv',
                                            'purpleInv',
                                            'goldInv',
                                            'redInv',
                                            'collection',
                                            'collectionGun',
                                            'collectionArmor',
                                            'collectionInv',
                                            'collectionGunInv',
                                            'collectionArmorInv',
                                            'weekendClaimed',
                                            'assaultClaimed',
                                            'humanClaimed',
                                            'operatorName',
                                            'currentMode',
                                            'readyGunIndex',
                                            'readyArmorIndex',
                                            'redWolfUnlocked',
                                            'deepBlueUnlocked',
                                            'lunaUnlocked',
                                            'uluruUnlocked',
                                            'chixiaoUnlocked',
                                            'battleRank',
                                            'battleLastWeek',
                                            'attachment',
                                            'gunPower',
                                            'challengeTicket',
                                            'challengeLevel',
                                            'challengeDone'
                                        ];
                                        for(let i = 0; i < keys.length; i++){
                                            const k = keys[i];
                                            if (void 0 !== data[k]) this[k] = data[k];
                                        }
                                        this.checkBattleWeek();
                                        this.refreshAll();
                                    },
                                    fail: ()=>{}
                                });
                            } catch (e3) {
                                this.storageBad = true;
                            }
                        },
                        listCount (s) {
                            if (!s) return 0;
                            return s.split('|').length;
                        },
                        listFirst (s, empty) {
                            if (!s) return empty;
                            const arr = s.split('|');
                            return arr[0] || empty;
                        },
                        listAdd (s, name, n) {
                            let arr = s ? s.split('|') : [];
                            for(let i = 0; i < n; i++)arr.push(name);
                            return arr.join('|');
                        },
                        listRemove (s, n) {
                            let arr = s ? s.split('|') : [];
                            arr.splice(0, n);
                            return arr.join('|');
                        },
                        listGet (s, idx, empty) {
                            const arr = s ? s.split('|') : [];
                            if (0 === arr.length) return empty;
                            if (idx < 0) return empty;
                            if (idx >= arr.length) idx = 0;
                            return arr[idx] || empty;
                        },
                        listRemoveAt (s, idx) {
                            let arr = s ? s.split('|') : [];
                            if (0 === arr.length) return '';
                            if (idx < 0 || idx >= arr.length) idx = 0;
                            arr.splice(idx, 1);
                            return arr.join('|');
                        },
                        refreshAll () {
                            this.gun = this.listCount(this.gunInv);
                            this.armor = this.listCount(this.armorInv);
                            if (this.readyGunIndex >= this.gun) this.readyGunIndex = this.gun > 0 ? 0 : -1;
                            if (this.readyArmorIndex >= this.armor) this.readyArmorIndex = this.armor > 0 ? 0 : -1;
                            if (this.selectedGunIndex >= this.gun) this.selectedGunIndex = this.gun > 0 ? 0 : -1;
                            if (this.selectedArmorIndex >= this.armor) this.selectedArmorIndex = this.armor > 0 ? 0 : -1;
                            this.gunName = this.gun > 0 ? this.listGet(this.gunInv, this.selectedGunIndex, this.gunName || 'M4A1') : this.gunName || 'M4A1';
                            this.armorName = this.armor > 0 ? this.listGet(this.armorInv, this.selectedArmorIndex, this.armorName || 'Hvk-2防弹衣') : this.armorName || 'Hvk-2防弹衣';
                            this.gunItem = this.gun > 0 ? this.gunName + ' x' + this.gun : '枪械 0';
                            this.armorItem = this.armor > 0 ? this.armorName + ' x' + this.armor : '护甲 0';
                            this.refreshReady();
                            this.redWolfText = this.redWolfUnlocked ? '已解锁 / 疾速突击' : '未解锁  20券';
                            this.deepBlueText = this.deepBlueUnlocked ? '已解锁 / 盾墙免伤' : '未解锁  50券';
                            this.lunaText = this.lunaUnlocked ? '已解锁 / 侦察箭' : '未解锁  20券';
                            this.uluruText = this.uluruUnlocked ? '已解锁 / 燃烧弹' : '未解锁  20券';
                            this.chixiaoText = this.chixiaoUnlocked ? '已解锁 / 召唤队友' : '兑换码专属';
                            if (this.challengeDone) this.challengeText = '7个关卡已全部完成';
                            else if (!this.challengeText) this.challengeText = '找到曼德尔并撤离';
                            this.refreshLootNames();
                            this.refreshCollection();
                            this.refreshShop();
                            this.refreshBattleRank();
                        },
                        refreshReady () {
                            if (this.carryGun) {
                                const n = this.gun > 0 ? this.listGet(this.gunInv, this.readyGunIndex, this.gunName) : 'M4A1';
                                this.gunName = n;
                                this.carryGunText = '已带';
                                this.readyGunText = '枪 已带 ' + n;
                            } else {
                                this.carryGun = false;
                                this.carryGunText = '未带';
                                this.readyGunText = '枪 未带';
                            }
                            if (this.carryArmor) {
                                const a = this.armor > 0 ? this.listGet(this.armorInv, this.readyArmorIndex, this.armorName) : 'Hvk-2防弹衣';
                                this.armorName = a;
                                this.carryArmorText = '已穿';
                                this.readyArmorText = '甲 已穿 ' + a;
                            } else {
                                this.carryArmor = false;
                                this.carryArmorText = '未穿';
                                this.readyArmorText = '甲 未穿';
                            }
                        },
                        clear () {
                            this.pageHome = false;
                            this.pageWarehouse = false;
                            this.pageOperator = false;
                            this.pagePrep = false;
                            this.pageShop = false;
                            this.pageReady = false;
                            this.pageMap = false;
                            this.pageGame = false;
                            this.pageResult = false;
                            this.pageCollection = false;
                            this.pageLoot = false;
                            this.pageRaidBag = false;
                            this.pageWarehouseLoot = false;
                            this.pageGunMod = false;
                            this.pageEvent = false;
                            this.pageAssets = false;
                            this.pageRedeem = false;
                            this.pageMode = false;
                            this.pageBattleHome = false;
                            this.pageBattleSwitch = false;
                            this.pageBattleRank = false;
                            this.pageBattleGuide = false;
                            this.pageNightHome = false;
                            this.pageNightMap = false;
                            this.pageChallengeHome = false;
                            this.pageChallengeGuide = false;
                            this.pageKingMap = false;
                            this.pageKingGun = false;
                            this.pageKingGame = false;
                            this.pageBattleResult = false;
                        },
                        goHome () {
                            this.stop();
                            this.saveGame();
                            this.refreshAll();
                            this.clear();
                            this.pageHome = true;
                        },
                        openWarehouse () {
                            this.stop();
                            this.refreshAll();
                            this.clear();
                            this.pageWarehouse = true;
                        },
                        openOperator () {
                            this.stop();
                            this.clear();
                            this.pageOperator = true;
                        },
                        openPrep () {
                            this.stop();
                            this.clear();
                            this.pagePrep = true;
                        },
                        openCollection () {
                            this.stop();
                            this.refreshAll();
                            this.clear();
                            this.pageCollection = true;
                        },
                        openWarehouseLoot () {
                            this.stop();
                            this.refreshAll();
                            this.clear();
                            this.pageWarehouseLoot = true;
                        },
                        openGunMod () {
                            this.stop();
                            this.refreshAll();
                            this.clear();
                            this.modText = '配件' + this.attachment + '个，可强化当前枪械';
                            this.pageGunMod = true;
                        },
                        oneKeyMod () {
                            if (this.attachment <= 0) {
                                this.modText = '没有配件';
                                return;
                            }
                            const use = this.attachment;
                            this.attachment = 0;
                            this.gunPower += use;
                            this.modText = '已装上' + use + '个配件，枪械强化+' + use;
                            this.refreshAll();
                            this.saveGame();
                        },
                        openEvent () {
                            this.stop();
                            this.clear();
                            this.pageEvent = true;
                        },
                        openAssets () {
                            this.stop();
                            this.clear();
                            this.pageAssets = true;
                        },
                        openRedeem () {
                            this.stop();
                            this.clear();
                            this.redeemInput = '';
                            this.redeemText = this.chixiaoUnlocked ? '赤枭已经解锁' : '输入6位兑换码解锁赤枭';
                            this.pageRedeem = true;
                        },
                        openMode () {
                            this.stop();
                            this.clear();
                            this.pageMode = true;
                        },
                        openShop () {
                            this.refreshShop();
                            this.clear();
                            this.pageShop = true;
                        },
                        openReady () {
                            this.refreshAll();
                            this.clear();
                            this.pageReady = true;
                        },
                        openMap () {
                            this.stop();
                            this.refreshAll();
                            this.clear();
                            if ('黑夜玩法' === this.currentMode) this.pageNightMap = true;
                            else this.pageMap = true;
                        },
                        openNightHome () {
                            this.stop();
                            this.refreshAll();
                            this.clear();
                            this.pageNightHome = true;
                        },
                        openNightMap () {
                            this.stop();
                            this.refreshAll();
                            this.clear();
                            this.pageNightMap = true;
                        },
                        openChallengeHome () {
                            this.stop();
                            this.refreshAll();
                            this.clear();
                            this.pageChallengeHome = true;
                        },
                        openChallengeGuide () {
                            this.stop();
                            this.clear();
                            this.pageChallengeGuide = true;
                        },
                        setBeacon () {
                            this.currentMode = '烽火地带';
                            this.modeText = '已切回烽火地带';
                            this.saveGame();
                            this.goHome();
                        },
                        setBattle () {
                            this.currentMode = '大战场';
                            this.modeText = '已进入大战场';
                            this.saveGame();
                            this.openBattleHome();
                        },
                        setNight () {
                            this.currentMode = '黑夜玩法';
                            this.modeText = '已进入黑夜玩法';
                            this.saveGame();
                            this.openNightHome();
                        },
                        setChallenge () {
                            this.currentMode = '烽火挑战';
                            this.modeText = '已进入烽火挑战';
                            this.saveGame();
                            this.openChallengeHome();
                        },
                        openBattleHome () {
                            this.stop();
                            this.checkBattleWeek();
                            this.refreshBattleRank();
                            this.clear();
                            this.pageBattleHome = true;
                        },
                        openBattleSwitch () {
                            this.clear();
                            this.pageBattleSwitch = true;
                        },
                        openBattleRank () {
                            this.checkBattleWeek();
                            this.refreshBattleRank();
                            this.clear();
                            this.pageBattleRank = true;
                        },
                        openBattleGuide () {
                            this.clear();
                            this.pageBattleGuide = true;
                        },
                        openKingMode () {
                            this.clear();
                            this.pageKingMap = true;
                        },
                        openKingGun () {
                            this.battleGunIndex = 0;
                            this.battleGunName = GUNS[this.battleGunIndex];
                            this.clear();
                            this.pageKingGun = true;
                        },
                        refreshBattleRank () {
                            if (this.battleRank < 0) this.battleRank = 0;
                            if (this.battleRank >= BATTLE_RANKS.length) this.battleRank = BATTLE_RANKS.length - 1;
                            this.battleRankName = BATTLE_RANKS[this.battleRank];
                        },
                        checkBattleWeek () {
                            const now = new Date().getTime();
                            if (!this.battleLastWeek) {
                                this.battleLastWeek = now;
                                return;
                            }
                            if (now - this.battleLastWeek >= 604800000) {
                                if (this.battleRank > 0) this.battleRank -= 1;
                                this.battleLastWeek = now;
                                this.refreshBattleRank();
                                this.saveGame();
                            }
                        },
                        battleGunPrev () {
                            this.battleGunIndex -= 1;
                            if (this.battleGunIndex < 0) this.battleGunIndex = GUNS.length - 1;
                            this.battleGunName = GUNS[this.battleGunIndex];
                        },
                        battleGunNext () {
                            this.battleGunIndex += 1;
                            if (this.battleGunIndex >= GUNS.length) this.battleGunIndex = 0;
                            this.battleGunName = GUNS[this.battleGunIndex];
                        },
                        startKingBattle () {
                            this.stop();
                            this.currentMode = '大战场';
                            this.battleShowPlayer = true;
                            this.battleShowAllies = true;
                            this.battleShowEnemies = true;
                            this.battleReady = true;
                            this.battleHp = 100;
                            this.battleRespawn = 0;
                            this.battlePx = 45;
                            this.battlePy = 190;
                            this.allyBase1 = true;
                            this.allyBase2 = true;
                            this.allyBase3 = true;
                            this.enemyBase1 = true;
                            this.enemyBase2 = true;
                            this.enemyBase3 = true;
                            this.ally1on = true;
                            this.ally2on = true;
                            this.ally3on = true;
                            this.ally4on = true;
                            this.enemy1on = true;
                            this.enemy2on = true;
                            this.enemy3on = true;
                            this.enemy4on = true;
                            this.enemy5on = true;
                            this.ally1x = 25;
                            this.ally1y = 130;
                            this.ally2x = 25;
                            this.ally2y = 190;
                            this.ally3x = 25;
                            this.ally3y = 250;
                            this.ally4x = 50;
                            this.ally4y = 260;
                            this.enemy1x = 140;
                            this.enemy1y = 130;
                            this.enemy2x = 165;
                            this.enemy2y = 175;
                            this.enemy3x = 140;
                            this.enemy3y = 220;
                            this.enemy4x = 175;
                            this.enemy4y = 150;
                            this.enemy5x = 175;
                            this.enemy5y = 200;
                            this.enemy1hp = 60;
                            this.enemy2hp = 60;
                            this.enemy3hp = 60;
                            this.enemy4hp = 60;
                            this.enemy5hp = 60;
                            this.battleText = '占领敌方红色据点';
                            this.updateBattleMap();
                            this.clear();
                            this.pageKingGame = true;
                        },
                        battleFrame () {
                            if (this.battleRespawn > 0) {
                                this.battleText = '复活中';
                                this.updateBattleMap();
                                return;
                            }
                            this.moveBattleBots();
                            this.battleEnemyFire();
                            this.autoCaptureBases();
                            this.checkBattleWinLose();
                            this.updateBattleMap();
                        },
                        battleCamX () {
                            let c = this.battlePx - VW / 2;
                            if (c < 0) c = 0;
                            if (c > 300 - VW) c = 300 - VW;
                            return c;
                        },
                        bsx (x) {
                            return x - this.battleCamX();
                        },
                        bsy (y) {
                            return y;
                        },
                        bbox (x, y, w, h) {
                            return 'left:' + this.bsx(x) + 'px;top:' + this.bsy(y) + 'px;width:' + w + 'px;height:' + h + 'px;';
                        },
                        updateBattleMap () {
                            this.battleMapStyle = this.bbox(0, 0, 300, 390);
                            this.battlePlayerStyle = this.bbox(this.battlePx, this.battlePy, 14, 14);
                            this.allyBase1Style = this.bbox(12, 130, 28, 28);
                            this.allyBase2Style = this.bbox(12, 195, 28, 28);
                            this.allyBase3Style = this.bbox(12, 260, 28, 28);
                            this.enemyBase1Style = this.bbox(265, 130, 28, 28);
                            this.enemyBase2Style = this.bbox(265, 195, 28, 28);
                            this.enemyBase3Style = this.bbox(265, 260, 28, 28);
                            this.allyBaseCount = (this.allyBase1 ? 1 : 0) + (this.allyBase2 ? 1 : 0) + (this.allyBase3 ? 1 : 0);
                            this.enemyBaseCount = (this.enemyBase1 ? 1 : 0) + (this.enemyBase2 ? 1 : 0) + (this.enemyBase3 ? 1 : 0);
                            this.ally1Style = this.bbox(this.ally1x, this.ally1y, 16, 16);
                            this.ally2Style = this.bbox(this.ally2x, this.ally2y, 16, 16);
                            this.ally3Style = this.bbox(this.ally3x, this.ally3y, 16, 16);
                            this.ally4Style = this.bbox(this.ally4x, this.ally4y, 16, 16);
                            this.enemy1Style = this.bbox(this.enemy1x, this.enemy1y, 22, 22);
                            this.enemy2Style = this.bbox(this.enemy2x, this.enemy2y, 22, 22);
                            this.enemy3Style = this.bbox(this.enemy3x, this.enemy3y, 22, 22);
                            this.enemy4Style = this.bbox(this.enemy4x, this.enemy4y, 22, 22);
                            this.enemy5Style = this.bbox(this.enemy5x, this.enemy5y, 22, 22);
                        },
                        battleMove (dx, dy) {
                            if (!this.battleReady) return;
                            if (this.battleRespawn > 0) return;
                            this.battlePx += dx;
                            this.battlePy += dy;
                            if (this.battlePx < 15) this.battlePx = 15;
                            if (this.battlePx > 285) this.battlePx = 285;
                            if (this.battlePy < 40) this.battlePy = 40;
                            if (this.battlePy > 360) this.battlePy = 360;
                            this.battleFrame();
                        },
                        battleMoveUp () {
                            this.battleMove(0, -18);
                        },
                        battleMoveDown () {
                            this.battleMove(0, 18);
                        },
                        battleMoveLeft () {
                            this.battleMove(-18, 0);
                        },
                        battleMoveRight () {
                            this.battleMove(18, 0);
                        },
                        battleAttack () {
                            if (!this.battleReady) return;
                            if (this.battleRespawn > 0) return;
                            this.hitBattleEnemy(1, this.enemy1x, this.enemy1y);
                            this.hitBattleEnemy(2, this.enemy2x, this.enemy2y);
                            this.hitBattleEnemy(3, this.enemy3x, this.enemy3y);
                            this.hitBattleEnemy(4, this.enemy4x, this.enemy4y);
                            this.hitBattleEnemy(5, this.enemy5x, this.enemy5y);
                            this.battleFrame();
                        },
                        hitBattleEnemy (i, x, y) {
                            if (!this['enemy' + i + 'on']) return;
                            if (this.dist(this.battlePx, this.battlePy, x, y) > 60) return;
                            this['enemy' + i + 'hp'] -= 15;
                            this.battleText = '击中敌人';
                            if (this['enemy' + i + 'hp'] <= 0) {
                                this['enemy' + i + 'on'] = false;
                                this.battleText = '击倒敌人';
                                setTimeout(()=>{
                                    this['enemy' + i + 'hp'] = 60;
                                    this['enemy' + i + 'x'] = 250;
                                    this['enemy' + i + 'y'] = 130 + 25 * i;
                                    this['enemy' + i + 'on'] = true;
                                }, 5000);
                            }
                        },
                        battleCapture () {
                            if (!this.battleReady) return;
                            if (this.battleRespawn > 0) return;
                            let ok = false;
                            if (this.enemyBase1 && this.dist(this.battlePx, this.battlePy, 279, 144) < 35) {
                                this.enemyBase1 = false;
                                ok = true;
                            } else if (this.enemyBase2 && this.dist(this.battlePx, this.battlePy, 279, 209) < 35) {
                                this.enemyBase2 = false;
                                ok = true;
                            } else if (this.enemyBase3 && this.dist(this.battlePx, this.battlePy, 279, 274) < 35) {
                                this.enemyBase3 = false;
                                ok = true;
                            }
                            this.battleText = ok ? '占领成功' : '靠近红方据点再占';
                            this.battleFrame();
                        },
                        moveBattleBots () {
                            if (!this.battleShowEnemies) return;
                            this.stepBot('ally1', 265, 130);
                            this.stepBot('ally2', 265, 195);
                            this.stepBot('ally3', 265, 260);
                            this.stepBot('ally4', 265, 195);
                            this.stepBot('enemy1', 30, 130);
                            this.stepBot('enemy2', 30, 195);
                            this.stepBot('enemy3', 30, 260);
                            this.stepBot('enemy4', this.battlePx, this.battlePy);
                            this.stepBot('enemy5', this.battlePx, this.battlePy);
                        },
                        stepBot (prefix, tx, ty) {
                            if (!this[prefix + 'on']) return;
                            let x = this[prefix + 'x'], y = this[prefix + 'y'];
                            if (x < tx) x += 12;
                            if (x > tx) x -= 12;
                            if (y < ty) y += 12;
                            if (y > ty) y -= 12;
                            this[prefix + 'x'] = x;
                            this[prefix + 'y'] = y;
                        },
                        battleEnemyFire () {
                            if (!this.battleShowEnemies) return;
                            for(let i = 1; i <= 5; i++)if (this['enemy' + i + 'on'] && this.dist(this.battlePx, this.battlePy, this['enemy' + i + 'x'], this['enemy' + i + 'y']) < 80) this.battleHp -= 6;
                            if (this.battleHp <= 0) {
                                this.battleHp = 0;
                                this.battleRespawn = 5;
                                this.battleText = '阵亡，等待复活';
                                setTimeout(()=>{
                                    this.battleHp = 100;
                                    this.battleRespawn = 0;
                                    this.battlePx = 45;
                                    this.battlePy = 190;
                                    this.battleText = '已复活';
                                    this.updateBattleMap();
                                }, 5000);
                            }
                        },
                        autoCaptureBases () {
                            if (!this.battleShowEnemies) return;
                            for(let i = 1; i <= 4; i++)if (this['ally' + i + 'on']) {
                                if (this.enemyBase1 && this.dist(this['ally' + i + 'x'], this['ally' + i + 'y'], 279, 144) < 24) this.enemyBase1 = false;
                                if (this.enemyBase2 && this.dist(this['ally' + i + 'x'], this['ally' + i + 'y'], 279, 209) < 24) this.enemyBase2 = false;
                                if (this.enemyBase3 && this.dist(this['ally' + i + 'x'], this['ally' + i + 'y'], 279, 274) < 24) this.enemyBase3 = false;
                            }
                            for(let i = 1; i <= 5; i++)if (this['enemy' + i + 'on']) {
                                if (this.allyBase1 && this.dist(this['enemy' + i + 'x'], this['enemy' + i + 'y'], 26, 144) < 24) this.allyBase1 = false;
                                if (this.allyBase2 && this.dist(this['enemy' + i + 'x'], this['enemy' + i + 'y'], 26, 209) < 24) this.allyBase2 = false;
                                if (this.allyBase3 && this.dist(this['enemy' + i + 'x'], this['enemy' + i + 'y'], 26, 274) < 24) this.allyBase3 = false;
                            }
                        },
                        checkBattleWinLose () {
                            const enemyLeft = (this.enemyBase1 ? 1 : 0) + (this.enemyBase2 ? 1 : 0) + (this.enemyBase3 ? 1 : 0);
                            const allyLeft = (this.allyBase1 ? 1 : 0) + (this.allyBase2 ? 1 : 0) + (this.allyBase3 ? 1 : 0);
                            if (enemyLeft <= 0) this.finishBattle(true);
                            else if (allyLeft <= 0) this.finishBattle(false);
                        },
                        finishBattle (win) {
                            this.stop();
                            if (win) {
                                this.battleResultTitle = '胜利';
                                if (this.battleRank < BATTLE_RANKS.length - 1) this.battleRank += 1;
                            } else {
                                this.battleResultTitle = '失败';
                                if (this.battleRank > 0) this.battleRank -= 1;
                            }
                            this.refreshBattleRank();
                            this.saveGame();
                            this.clear();
                            this.pageBattleResult = true;
                        },
                        chooseWeilong () {
                            this.operatorName = '威龙';
                            this.saveGame();
                        },
                        chooseFengyi () {
                            this.operatorName = '蜂医';
                            this.saveGame();
                        },
                        chooseRedWolf () {
                            if (!this.redWolfUnlocked) {
                                if (this.ticket < 20) return;
                                this.ticket -= 20;
                                this.redWolfUnlocked = true;
                            }
                            this.operatorName = '红狼';
                            this.refreshAll();
                            this.saveGame();
                        },
                        chooseDeepBlue () {
                            if (!this.deepBlueUnlocked) {
                                if (this.ticket < 50) return;
                                this.ticket -= 50;
                                this.deepBlueUnlocked = true;
                            }
                            this.operatorName = '深蓝';
                            this.refreshAll();
                            this.saveGame();
                        },
                        chooseLuna () {
                            if (!this.lunaUnlocked) {
                                if (this.ticket < 20) return;
                                this.ticket -= 20;
                                this.lunaUnlocked = true;
                            }
                            this.operatorName = '露娜';
                            this.refreshAll();
                            this.saveGame();
                        },
                        chooseUluru () {
                            if (!this.uluruUnlocked) {
                                if (this.ticket < 20) return;
                                this.ticket -= 20;
                                this.uluruUnlocked = true;
                            }
                            this.operatorName = '乌鲁鲁';
                            this.refreshAll();
                            this.saveGame();
                        },
                        chooseChixiao () {
                            if (!this.chixiaoUnlocked) {
                                this.openRedeem();
                                this.redeemText = '赤枭只能通过兑换码获得';
                                return;
                            }
                            this.operatorName = '赤枭';
                            this.refreshAll();
                            this.saveGame();
                        },
                        redeemNum (n) {
                            if (this.redeemInput.length >= 6) return;
                            this.redeemInput += '' + n;
                        },
                        redeemNum1 () {
                            this.redeemNum(1);
                        },
                        redeemNum2 () {
                            this.redeemNum(2);
                        },
                        redeemNum3 () {
                            this.redeemNum(3);
                        },
                        redeemNum4 () {
                            this.redeemNum(4);
                        },
                        redeemNum5 () {
                            this.redeemNum(5);
                        },
                        redeemNum6 () {
                            this.redeemNum(6);
                        },
                        redeemNum7 () {
                            this.redeemNum(7);
                        },
                        redeemNum8 () {
                            this.redeemNum(8);
                        },
                        redeemNum9 () {
                            this.redeemNum(9);
                        },
                        confirmRedeem () {
                            if ('541678' === this.redeemInput) {
                                this.chixiaoUnlocked = true;
                                this.operatorName = '赤枭';
                                this.redeemText = '兑换成功，已获得赤枭';
                                this.refreshAll();
                                this.saveGame();
                                return;
                            }
                            this.redeemInput = '';
                            this.redeemText = '兑换码错误，请重新输入';
                        },
                        setSell (type, max, price, text, rarity) {
                            this.sellType = type;
                            this.sellMax = max;
                            this.sellQty = max > 0 ? 1 : 0;
                            this.sellUnitPrice = price;
                            this.sellRarity = rarity || '';
                            this.sellText = max > 0 ? text + '  数量' + this.sellQty : '没有可售物品';
                        },
                        selectGun () {
                            this.refreshAll();
                            this.setSell('gun', this.gun, 90, '售卖枪械 $90');
                        },
                        selectArmor () {
                            this.refreshAll();
                            this.setSell('armor', this.armor, 60, '售卖护甲 $60');
                        },
                        selectHelmet () {
                            this.setSell('helmet', this.helmet, 45, '售卖头盔 $45');
                        },
                        selectAmmo () {
                            this.setSell('ammo', Math.floor(this.ammoStore / 10), 30, '售卖10发 $30');
                        },
                        selectMed () {
                            this.setSell('med', this.med, 20, '售卖医疗 $20');
                        },
                        selectLootRed () {
                            this.setSell('loot', this.redInv, 800, '售卖红色物资 $800', 'red');
                        },
                        selectLootGold () {
                            this.setSell('loot', this.goldInv, 350, '售卖金色物资 $350', 'gold');
                        },
                        selectLootPurple () {
                            this.setSell('loot', this.purpleInv, 120, '售卖紫色物资 $120', 'purple');
                        },
                        selectLootLow () {
                            if (this.blueInv > 0) this.setSell('loot', this.blueInv, 50, '售卖蓝色物资 $50', 'blue');
                            else if (this.greenInv > 0) this.setSell('loot', this.greenInv, 20, '售卖绿色物资 $20', 'green');
                            else this.setSell('loot', this.whiteInv, 5, '售卖白色物资 $5', 'white');
                        },
                        sellPlus () {
                            if (this.sellQty < this.sellMax) this.sellQty += 1;
                            this.sellText = '数量' + this.sellQty + '  可得$' + this.sellQty * this.sellUnitPrice;
                        },
                        sellMinus () {
                            if (this.sellQty > 1) this.sellQty -= 1;
                            this.sellText = '数量' + this.sellQty + '  可得$' + this.sellQty * this.sellUnitPrice;
                        },
                        sellAllLoot () {
                            const total = 5 * this.whiteInv + 20 * this.greenInv + 50 * this.blueInv + 120 * this.purpleInv + 350 * this.goldInv + 800 * this.redInv;
                            if (total <= 0) {
                                this.sellText = '没有物资可出售';
                                return;
                            }
                            this.cash += total;
                            this.whiteInv = 0;
                            this.greenInv = 0;
                            this.blueInv = 0;
                            this.purpleInv = 0;
                            this.goldInv = 0;
                            this.redInv = 0;
                            this.loot = 0;
                            this.sellText = '已一键出售所有物资，获得$' + total;
                            this.refreshAll();
                            this.saveGame();
                        },
                        confirmSell () {
                            if (!this.sellType || this.sellQty <= 0) return;
                            const q = this.sellQty;
                            if ('gun' === this.sellType && this.gun >= q) this.gunInv = this.listRemove(this.gunInv, q);
                            else if ('armor' === this.sellType && this.armor >= q) this.armorInv = this.listRemove(this.armorInv, q);
                            else if ('helmet' === this.sellType && this.helmet >= q) this.helmet -= q;
                            else if ('ammo' === this.sellType && this.ammoStore >= 10 * q) this.ammoStore -= 10 * q;
                            else if ('med' === this.sellType && this.med >= q) this.med -= q;
                            else {
                                if ('loot' !== this.sellType) return;
                                this.sellLootByRarity(this.sellRarity, q);
                            }
                            this.cash += q * this.sellUnitPrice;
                            this.sellText = '已售出' + q + '件';
                            this.refreshAll();
                            this.saveGame();
                        },
                        refreshLootNames () {
                            this.bestLootName = this.loot > 0 ? '物资 ' + this.getTopLootName() : '物资 0';
                            this.whItem1 = this.redInv > 0 ? '红 ' + this.pickItem('red') + ' x' + this.redInv : '';
                            this.whStyle1 = this.rarityStyle('red');
                            this.whItem2 = this.goldInv > 0 ? '金 ' + this.pickItem('gold') + ' x' + this.goldInv : '';
                            this.whStyle2 = this.rarityStyle('gold');
                            this.whItem3 = this.purpleInv > 0 ? '紫 ' + this.pickItem('purple') + ' x' + this.purpleInv : '';
                            this.whStyle3 = this.rarityStyle('purple');
                            let lower = '';
                            if (this.blueInv > 0) lower += '蓝x' + this.blueInv + ' ';
                            if (this.greenInv > 0) lower += '绿x' + this.greenInv + ' ';
                            if (this.whiteInv > 0) lower += '白x' + this.whiteInv;
                            this.whItem4 = lower;
                            this.whStyle4 = this.rarityStyle('blue');
                        },
                        getTopLootName () {
                            if (this.redInv > 0) return '红 ' + this.pickItem('red');
                            if (this.goldInv > 0) return '金 ' + this.pickItem('gold');
                            if (this.purpleInv > 0) return '紫 ' + this.pickItem('purple');
                            if (this.blueInv > 0) return '蓝 ' + this.pickItem('blue');
                            if (this.greenInv > 0) return '绿 ' + this.pickItem('green');
                            if (this.whiteInv > 0) return '白 ' + this.pickItem('white');
                            return '0';
                        },
                        refreshCollection () {
                            const lootName = this.listFirst(this.collectionInv, '');
                            const gunName = this.listFirst(this.collectionGunInv, '');
                            const armorName = this.listFirst(this.collectionArmorInv, '');
                            this.collectionBest = lootName ? lootName + ' x' + this.collection : gunName ? gunName + ' x' + this.collectionGun : armorName ? armorName + ' x' + this.collectionArmor : '暂无收藏物资';
                            this.collectionStyle = this.collection > 0 ? this.rarityStyle('gold') : this.rarityStyle('white');
                            this.collectionText = '收藏：物资' + this.collection + ' 枪' + this.collectionGun + ' 甲' + this.collectionArmor;
                            this.collectLootItem = this.loot > 0 ? this.getTopLootName() + ' x' + this.loot : '可收藏物资 0';
                            this.collectGunItem = this.gun > 0 ? this.gunName + ' x' + this.gun : '可收藏枪械 0';
                            this.collectArmorItem = this.armor > 0 ? this.armorName + ' x' + this.armor : '可收藏护甲 0';
                        },
                        claimWeekend () {
                            if (this.weekendClaimed) {
                                this.eventText = '周末爽打已领取';
                                return;
                            }
                            const gun = GUNS[Math.floor(Math.random() * GUNS.length)];
                            this.gunInv = this.listAdd(this.gunInv, gun, 1);
                            this.gunName = gun;
                            this.weekendClaimed = true;
                            this.eventText = '已到账 ' + gun;
                            this.refreshAll();
                            this.saveGame();
                        },
                        claimAssault () {
                            if (this.assaultClaimed) {
                                this.eventText = '猛攻节已领取';
                                return;
                            }
                            this.ticket += 20;
                            this.assaultClaimed = true;
                            this.eventText = '已到账20三角券';
                            this.saveGame();
                        },
                        claimHuman () {
                            if (this.humanClaimed) {
                                this.eventText = '人道补助已领取';
                                return;
                            }
                            if (this.cash >= 100) {
                                this.eventText = '哈夫币少于100才能领';
                                return;
                            }
                            this.cash += 500;
                            this.humanClaimed = true;
                            this.eventText = '已到账500哈夫币';
                            this.saveGame();
                        },
                        sellLootByRarity (rarity, q) {
                            if ('red' === rarity && this.redInv >= q) this.redInv -= q;
                            else if ('gold' === rarity && this.goldInv >= q) this.goldInv -= q;
                            else if ('purple' === rarity && this.purpleInv >= q) this.purpleInv -= q;
                            else if ('blue' === rarity && this.blueInv >= q) this.blueInv -= q;
                            else if ('green' === rarity && this.greenInv >= q) this.greenInv -= q;
                            else {
                                if ('white' !== rarity || !(this.whiteInv >= q)) return;
                                this.whiteInv -= q;
                            }
                            this.loot -= q;
                            if (this.loot < 0) this.loot = 0;
                        },
                        setCollect (type, max) {
                            this.collectType = type;
                            this.collectMax = max;
                            this.collectQty = max > 0 ? 1 : 0;
                            this.collectionText = max > 0 ? '选择收藏数量' + this.collectQty : '没有可收藏物品';
                        },
                        selectCollectLoot () {
                            this.refreshAll();
                            this.setCollect('loot', this.loot);
                        },
                        selectCollectGun () {
                            this.refreshAll();
                            this.setCollect('gun', this.gun);
                        },
                        selectCollectArmor () {
                            this.refreshAll();
                            this.setCollect('armor', this.armor);
                        },
                        collectPlus () {
                            if (this.collectQty < this.collectMax) this.collectQty += 1;
                            this.collectionText = '收藏数量' + this.collectQty;
                        },
                        collectMinus () {
                            if (this.collectQty > 1) this.collectQty -= 1;
                            this.collectionText = '收藏数量' + this.collectQty;
                        },
                        confirmCollect () {
                            const q = this.collectQty;
                            if (!this.collectType || q <= 0) return;
                            if ('gun' === this.collectType && this.gun >= q) {
                                const name = this.gunName;
                                this.gunInv = this.listRemove(this.gunInv, q);
                                this.collectionGunInv = this.listAdd(this.collectionGunInv, name, q);
                                this.collectionGun += q;
                            } else if ('armor' === this.collectType && this.armor >= q) {
                                const name = this.armorName;
                                this.armorInv = this.listRemove(this.armorInv, q);
                                this.collectionArmorInv = this.listAdd(this.collectionArmorInv, name, q);
                                this.collectionArmor += q;
                            } else {
                                if ('loot' !== this.collectType || !(this.loot >= q)) return;
                                const name = this.getTopLootName();
                                for(let i = 0; i < q; i++)this.moveOneLootToCollection(name);
                            }
                            this.collectionText = '已收藏' + q + '件';
                            this.refreshAll();
                            this.saveGame();
                        },
                        moveOneLootToCollection (name) {
                            if (this.redInv > 0) this.redInv -= 1;
                            else if (this.goldInv > 0) this.goldInv -= 1;
                            else if (this.purpleInv > 0) this.purpleInv -= 1;
                            else if (this.blueInv > 0) this.blueInv -= 1;
                            else if (this.greenInv > 0) this.greenInv -= 1;
                            else if (this.whiteInv > 0) this.whiteInv -= 1;
                            this.loot -= 1;
                            this.collection += 1;
                            this.collectionInv = this.listAdd(this.collectionInv, name, 1);
                        },
                        refreshShop () {
                            const start = 6 * this.shopPage;
                            this.shop1 = this.shopLine(start);
                            this.shop2 = this.shopLine(start + 1);
                            this.shop3 = this.shopLine(start + 2);
                            this.shop4 = this.shopLine(start + 3);
                            this.shop5 = this.shopLine(start + 4);
                            this.shop6 = this.shopLine(start + 5);
                        },
                        itemLv (i) {
                            return i % 6 + 1;
                        },
                        gunPrice (i) {
                            return 100 + 90 * this.itemLv(i);
                        },
                        armorPrice (i) {
                            return 90 + 80 * this.itemLv(i);
                        },
                        helmetPrice (i) {
                            return 70 + 55 * this.itemLv(i);
                        },
                        shopLine (i) {
                            if (i < GUNS.length) return 'Lv' + this.itemLv(i) + ' ' + GUNS[i] + '  $' + this.gunPrice(i);
                            const ai = i - GUNS.length;
                            if (ai >= 0 && ai < ARMORS.length) return 'Lv' + this.itemLv(ai) + ' ' + ARMORS[ai] + '  $' + this.armorPrice(ai);
                            const hi = i - GUNS.length - ARMORS.length;
                            if (hi >= 0 && hi < HELMETS.length) return 'Lv' + this.itemLv(hi) + ' ' + HELMETS[hi] + '  $' + this.helmetPrice(hi);
                            const base = GUNS.length + ARMORS.length + HELMETS.length;
                            if (i === base) return '绷带 +1  $30';
                            if (i === base + 1) return '5.56子弹 +10  $60';
                            if (i === base + 2) return '刀 +1  $50';
                            if (i === base + 3) return '随机枪械配件  $80';
                            return '';
                        },
                        shopPrev () {
                            if (this.shopPage > 0) this.shopPage -= 1;
                            this.refreshShop();
                        },
                        shopNext () {
                            if (this.shopPage < 8) this.shopPage += 1;
                            this.refreshShop();
                        },
                        buyShop1 () {
                            this.buyShop(6 * this.shopPage);
                        },
                        buyShop2 () {
                            this.buyShop(6 * this.shopPage + 1);
                        },
                        buyShop3 () {
                            this.buyShop(6 * this.shopPage + 2);
                        },
                        buyShop4 () {
                            this.buyShop(6 * this.shopPage + 3);
                        },
                        buyShop5 () {
                            this.buyShop(6 * this.shopPage + 4);
                        },
                        buyShop6 () {
                            this.buyShop(6 * this.shopPage + 5);
                        },
                        buyShop (i) {
                            if (i < GUNS.length) {
                                const p = this.gunPrice(i);
                                if (this.cash < p) return;
                                this.cash -= p;
                                this.gunInv = this.listAdd(this.gunInv, GUNS[i], 1);
                                this.selectedGunIndex = this.listCount(this.gunInv) - 1;
                                this.readyGunIndex = this.selectedGunIndex;
                                this.gunName = GUNS[i];
                            } else if (i >= GUNS.length && i < GUNS.length + ARMORS.length) {
                                const ai = i - GUNS.length;
                                const p = this.armorPrice(ai);
                                if (this.cash < p) return;
                                this.cash -= p;
                                this.armorInv = this.listAdd(this.armorInv, ARMORS[ai], 1);
                                this.selectedArmorIndex = this.listCount(this.armorInv) - 1;
                                this.readyArmorIndex = this.selectedArmorIndex;
                                this.armorName = ARMORS[ai];
                            } else {
                                const hi = i - GUNS.length - ARMORS.length;
                                if (hi >= 0 && hi < HELMETS.length) {
                                    const p = this.helmetPrice(hi);
                                    if (this.cash < p) return;
                                    this.cash -= p;
                                    this.helmet += 1;
                                    this.helmetName = HELMETS[hi];
                                }
                                const base = GUNS.length + ARMORS.length + HELMETS.length;
                                if (i === base && this.cash >= 30) {
                                    this.cash -= 30;
                                    this.med += 1;
                                } else if (i === base + 1 && this.cash >= 60) {
                                    this.cash -= 60;
                                    this.ammoStore += 10;
                                } else if (i === base + 2 && this.cash >= 50) {
                                    this.cash -= 50;
                                    this.knife += 1;
                                } else if (i === base + 3 && this.cash >= 80) {
                                    this.cash -= 80;
                                    this.attachment += 1;
                                }
                            }
                            this.refreshAll();
                            this.saveGame();
                        },
                        nextReadyGun () {
                            this.refreshAll();
                            if (this.gun <= 0) {
                                this.readyGunIndex = -1;
                                this.refreshReady();
                                return;
                            }
                            this.readyGunIndex += 1;
                            if (this.readyGunIndex >= this.gun) this.readyGunIndex = -1;
                            this.refreshReady();
                            this.saveGame();
                        },
                        toggleReadyGunCarry () {
                            this.gun = this.listCount(this.gunInv);
                            this.carryGun = !this.carryGun;
                            if (this.carryGun && this.readyGunIndex < 0) this.readyGunIndex = 0;
                            if (this.carryGun && this.gun <= 0) this.gunName = 'M4A1';
                            this.refreshReady();
                            this.saveGame();
                        },
                        toggleReadyArmorCarry () {
                            this.armor = this.listCount(this.armorInv);
                            this.carryArmor = !this.carryArmor;
                            if (this.carryArmor && this.readyArmorIndex < 0) this.readyArmorIndex = 0;
                            if (this.carryArmor && this.armor <= 0) this.armorName = 'Hvk-2防弹衣';
                            this.refreshReady();
                            this.saveGame();
                        },
                        nextReadyArmor () {
                            this.refreshAll();
                            if (this.armor <= 0) {
                                this.readyArmorIndex = -1;
                                this.refreshReady();
                                return;
                            }
                            this.readyArmorIndex += 1;
                            if (this.readyArmorIndex >= this.armor) this.readyArmorIndex = -1;
                            this.refreshReady();
                            this.saveGame();
                        },
                        toggleGun () {
                            this.nextReadyGun();
                        },
                        toggleArmor () {
                            this.nextReadyArmor();
                        },
                        toggleHelmet () {
                            if (this.helmet > 0) {
                                this.carryHelmet = !this.carryHelmet;
                                this.carryHelmetText = this.carryHelmet ? '已戴' : '未戴';
                            }
                        },
                        toggleAmmo () {
                            if (0 === this.carryAmmo && this.ammoStore >= 20) this.carryAmmo = 20;
                            else this.carryAmmo = 0;
                        },
                        toggleMed () {
                            if (0 === this.carryMed && this.med > 0) this.carryMed = 1;
                            else this.carryMed = 0;
                        },
                        toggleKnife () {
                            if (this.knife > 0) {
                                this.carryKnife = !this.carryKnife;
                                this.carryKnifeText = this.carryKnife ? '已带' : '未带';
                            }
                        },
                        returnGame () {
                            this.clear();
                            this.pageGame = true;
                            this.updateMap();
                            if (!this.timer) this.timer = setInterval(()=>{
                                this.frame();
                            }, 700);
                        },
                        openRaidBag () {
                            this.stop();
                            this.clear();
                            this.pageRaidBag = true;
                        },
                        startNormal () {
                            this.isSecret = false;
                            this.isValley = false;
                            this.isSpace = false;
                            this.nightRaid = false;
                            this.challengeRaid = false;
                            this.useDamMap = true;
                            this.useValleyMap = false;
                            this.useSpaceMap = false;
                            this.raidName = '普通大坝';
                            this.startRaid();
                        },
                        startSecret () {
                            this.isSecret = true;
                            this.isValley = false;
                            this.isSpace = false;
                            this.nightRaid = false;
                            this.challengeRaid = false;
                            this.useDamMap = true;
                            this.useValleyMap = false;
                            this.useSpaceMap = false;
                            this.raidName = '机密大坝';
                            this.startRaid();
                        },
                        startValley () {
                            this.isSecret = false;
                            this.isValley = true;
                            this.isSpace = false;
                            this.nightRaid = false;
                            this.challengeRaid = false;
                            this.useDamMap = false;
                            this.useValleyMap = true;
                            this.useSpaceMap = false;
                            this.raidName = '普通长弓溪谷';
                            this.startRaid();
                        },
                        startValleySecret () {
                            this.isSecret = true;
                            this.isValley = true;
                            this.isSpace = false;
                            this.nightRaid = false;
                            this.challengeRaid = false;
                            this.useDamMap = false;
                            this.useValleyMap = true;
                            this.useSpaceMap = false;
                            this.raidName = '机密长弓溪谷';
                            this.startRaid();
                        },
                        startSpace () {
                            if (this.level < 10) {
                                this.mapText = '普通航天10级解锁';
                                return;
                            }
                            this.isSecret = false;
                            this.isValley = false;
                            this.isSpace = true;
                            this.nightRaid = false;
                            this.challengeRaid = false;
                            this.useDamMap = false;
                            this.useValleyMap = false;
                            this.useSpaceMap = true;
                            this.raidName = '普通航天';
                            this.startRaid();
                        },
                        startSpaceSecret () {
                            if (this.level < 20) {
                                this.mapText = '绝密航天20级解锁';
                                return;
                            }
                            this.isSecret = true;
                            this.isValley = false;
                            this.isSpace = true;
                            this.nightRaid = false;
                            this.challengeRaid = false;
                            this.useDamMap = false;
                            this.useValleyMap = false;
                            this.useSpaceMap = true;
                            this.raidName = '绝密航天';
                            this.startRaid();
                        },
                        startNightNormal () {
                            this.isSecret = false;
                            this.isValley = false;
                            this.isSpace = false;
                            this.nightRaid = true;
                            this.challengeRaid = false;
                            this.useDamMap = true;
                            this.useValleyMap = false;
                            this.useSpaceMap = false;
                            this.raidName = '黑夜普通大坝';
                            this.startRaid();
                        },
                        startNightSecret () {
                            if (this.level < 12) {
                                this.mapText = '黑夜机密大坝12级解锁';
                                return;
                            }
                            this.isSecret = true;
                            this.isValley = false;
                            this.isSpace = false;
                            this.nightRaid = true;
                            this.challengeRaid = false;
                            this.useDamMap = true;
                            this.useValleyMap = false;
                            this.useSpaceMap = false;
                            this.raidName = '黑夜机密大坝';
                            this.startRaid();
                        },
                        startChallenge () {
                            if (this.challengeDone) {
                                this.challengeText = '7个关卡已全部完成';
                                return;
                            }
                            if (this.challengeTicket <= 0) {
                                this.challengeText = '烽火券不足';
                                return;
                            }
                            this.challengeTicket -= 1;
                            const r = Math.floor(6 * Math.random());
                            this.isSecret = 1 === r || 3 === r || 5 === r;
                            this.isValley = 2 === r || 3 === r;
                            this.isSpace = 4 === r || 5 === r;
                            this.nightRaid = false;
                            this.challengeRaid = true;
                            this.useDamMap = !this.isValley && !this.isSpace;
                            this.useValleyMap = this.isValley;
                            this.useSpaceMap = this.isSpace;
                            if (this.isSpace) this.raidName = this.isSecret ? '挑战绝密航天' : '挑战普通航天';
                            else if (this.isValley) this.raidName = this.isSecret ? '挑战机密长弓溪谷' : '挑战普通长弓溪谷';
                            else this.raidName = this.isSecret ? '挑战机密大坝' : '挑战普通大坝';
                            this.startRaid();
                        },
                        startRaid () {
                            this.refreshAll();
                            if (!this.carryGun && !this.carryKnife) if (this.gun > 0) {
                                this.carryGun = true;
                                if (this.readyGunIndex < 0) this.readyGunIndex = 0;
                            } else {
                                this.carryGun = true;
                                this.gunName = 'M4A1';
                            }
                            if (this.carryArmor && this.armor <= 0) this.armorName = 'Hvk-2防弹衣';
                            if (this.carryHelmet && this.helmet <= 0) this.carryHelmet = false;
                            if (this.carryKnife && this.knife <= 0) this.knife = 1;
                            if (this.carryGun && this.carryAmmo <= 0) this.carryAmmo = 20;
                            if (this.carryGun) if (this.gun > 0) {
                                this.gunName = this.listGet(this.gunInv, this.readyGunIndex, this.gunName);
                                this.gunInv = this.listRemoveAt(this.gunInv, this.readyGunIndex);
                            } else this.gunName = 'M4A1';
                            if (this.carryArmor) if (this.armor > 0) {
                                this.armorName = this.listGet(this.armorInv, this.readyArmorIndex, this.armorName);
                                this.armorInv = this.listRemoveAt(this.armorInv, this.readyArmorIndex);
                            } else this.armorName = 'Hvk-2防弹衣';
                            if (this.carryHelmet) this.helmet -= 1;
                            if (this.carryKnife) this.knife -= 1;
                            if (this.carryAmmo > 0 && this.ammoStore >= this.carryAmmo) this.ammoStore -= this.carryAmmo;
                            if (this.carryMed > 0) this.med -= this.carryMed;
                            this.playCount += 1;
                            this.clear();
                            this.pageGame = true;
                            this.px = Math.floor(40 + Math.random() * (MW - 80));
                            this.py = Math.floor(40 + Math.random() * (MH - 80));
                            this.hp = 100;
                            this.armorMax = this.carryArmor ? this.getArmorDur() : 0;
                            this.armorDur = this.armorMax;
                            if ('蜂医' === this.operatorName) this.hp = 100;
                            this.inAmmo = this.carryAmmo;
                            this.raidGunName = this.carryGun ? this.gunName : '';
                            this.raidArmorName = this.carryArmor ? this.armorName : '';
                            this.raidKnifeTaken = this.carryKnife;
                            this.raidLoot = 0;
                            this.skillCd = 0;
                            this.skillTime = 0;
                            this.shieldOn = false;
                            this.speedBoostOn = false;
                            this.burnOn = false;
                            this.burnTime = 0;
                            this.en1Burn = 0;
                            this.en2Burn = 0;
                            this.en3Burn = 0;
                            this.bossBurn = 0;
                            this.chixiaoSummoned = 0;
                            for(let i = 1; i <= 7; i++){
                                this['sAlly' + i + 'on'] = false;
                                this['sAlly' + i + 'hp'] = 50;
                            }
                            this.skillText = '技能就绪';
                            this.currentWeapon = '赤枭' === this.operatorName ? 'firebow' : this.carryGun ? 'gun' : 'knife';
                            this.refreshWeaponText();
                            this.runWhite = 0;
                            this.runGreen = 0;
                            this.runBlue = 0;
                            this.runPurple = 0;
                            this.runGold = 0;
                            this.runRed = 0;
                            this.found1 = '';
                            this.found2 = '';
                            this.found3 = '';
                            this.found4 = '';
                            this.foundStyle1 = '';
                            this.foundStyle2 = '';
                            this.foundStyle3 = '';
                            this.foundStyle4 = '';
                            this.foundCount = 0;
                            this.time = this.isSecret ? 90 : 120;
                            if (this.nightRaid) this.time = this.isSecret ? 65 : 85;
                            this.randomContainers();
                            this.mandelOn = false;
                            this.mandelFound = false;
                            if (this.challengeRaid) {
                                this.time = Math.max(55, 130 - 8 * this.challengeLevel);
                                for(let i = 1; i <= 25; i++)this['c' + i + 'on'] = false;
                                this.mandelX = this.randX();
                                this.mandelY = this.randY();
                                this.mandelOn = true;
                                this.found1 = '目标：寻找曼德尔';
                                this.foundStyle1 = this.rarityStyle('gold');
                            }
                            this.en1on = true;
                            this.en2on = true;
                            this.en3on = this.isSecret || this.nightRaid || this.challengeRaid;
                            this.en1x = 230;
                            this.en1y = 230;
                            this.en2x = 410;
                            this.en2y = 110;
                            this.en3x = 350;
                            this.en3y = 70;
                            this.en1hp = this.isSecret ? 22 : 15;
                            this.en2hp = this.isSecret ? 22 : 15;
                            this.en3hp = this.isSecret ? 34 : 24;
                            if (this.nightRaid) {
                                this.en1hp += 8;
                                this.en2hp += 8;
                                this.en3hp += 10;
                            }
                            if (this.challengeRaid) {
                                const add = 6 * this.challengeLevel;
                                this.en1hp += add;
                                this.en2hp += add;
                                this.en3hp += add + 4;
                            }
                            this.bossOn = this.useDamMap;
                            this.bossX = this.isSecret ? 520 : 500;
                            this.bossY = this.isSecret ? 150 : 190;
                            this.bossMaxHp = this.isSecret ? 220 : 160;
                            if (this.nightRaid) this.bossMaxHp += this.isSecret ? 60 : 40;
                            if (this.challengeRaid) this.bossMaxHp += 25 * this.challengeLevel;
                            this.bossHp = this.bossMaxHp;
                            this.updateMap();
                            this.saveGame();
                            this.timer = setInterval(()=>{
                                this.frame();
                            }, 700);
                        },
                        frame () {
                            this.time -= 1;
                            this.updateSkillState();
                            this.enemyStep();
                            this.updateMap();
                            if (this.near(260, 150, 44)) if (this.challengeRaid && !this.mandelFound) this.skillText = '先找曼德尔';
                            else this.finish(true);
                            if (this.hp <= 0 || this.time <= 0) this.finish(false);
                        },
                        getArmorDur () {
                            if ('TG-H防弹衣' === this.armorName) return 70;
                            if ('DT-AVS防弹衣' === this.armorName) return 100;
                            if ('FS复合防弹衣' === this.armorName) return 105;
                            if ('Hvk-2防弹衣' === this.armorName) return 115;
                            if ('HMP防弹衣' === this.armorName) return 80;
                            if ('重型突击背心' === this.armorName) return 125;
                            if ('轻型防弹衣' === this.armorName) return 45;
                            if ('制式防弹衣' === this.armorName) return 60;
                            if ('突击防弹衣' === this.armorName) return 90;
                            if ('重装防弹衣' === this.armorName) return 135;
                            return 115;
                        },
                        randomContainers () {
                            const count = this.isSpace ? 23 + Math.floor(3 * Math.random()) : this.isValley ? 20 + Math.floor(6 * Math.random()) : 10 + Math.floor(8 * Math.random());
                            this.setContainer(1, 150, 70, count >= 1);
                            this.setContainer(2, 390, 190, count >= 2);
                            this.setContainer(3, 260, 92, count >= 3);
                            this.setContainer(4, 120, 178, count >= 4);
                            this.setContainer(5, 430, 248, count >= 5);
                            this.setContainer(6, 80, 132, count >= 6);
                            this.setContainer(7, 340, 136, count >= 7);
                            this.setContainer(8, 230, 224, count >= 8);
                            this.setContainer(9, 470, 74, count >= 9);
                            this.setContainer(10, 70, 242, count >= 10);
                            this.setContainer(11, this.randX(), this.randY(), count >= 11);
                            this.setContainer(12, this.randX(), this.randY(), count >= 12);
                            this.setContainer(13, this.randX(), this.randY(), count >= 13);
                            this.setContainer(14, this.randX(), this.randY(), count >= 14);
                            this.setContainer(15, this.randX(), this.randY(), count >= 15);
                            this.setContainer(16, this.randX(), this.randY(), count >= 16);
                            this.setContainer(17, this.randX(), this.randY(), count >= 17);
                            this.setContainer(18, this.randX(), this.randY(), count >= 18);
                            this.setContainer(19, this.randX(), this.randY(), count >= 19);
                            this.setContainer(20, this.randX(), this.randY(), count >= 20);
                            this.setContainer(21, this.randX(), this.randY(), count >= 21);
                            this.setContainer(22, this.randX(), this.randY(), count >= 22);
                            this.setContainer(23, this.randX(), this.randY(), count >= 23);
                            this.setContainer(24, this.randX(), this.randY(), count >= 24);
                            this.setContainer(25, this.randX(), this.randY(), count >= 25);
                        },
                        randX () {
                            return Math.floor(40 + Math.random() * (MW - 80));
                        },
                        randY () {
                            return Math.floor(40 + Math.random() * (MH - 80));
                        },
                        setContainer (id, x, y, on) {
                            if (1 === id) {
                                this.c1x = x;
                                this.c1y = y;
                                this.c1on = on;
                            }
                            if (2 === id) {
                                this.c2x = x;
                                this.c2y = y;
                                this.c2on = on;
                            }
                            if (3 === id) {
                                this.c3x = x;
                                this.c3y = y;
                                this.c3on = on;
                            }
                            if (4 === id) {
                                this.c4x = x;
                                this.c4y = y;
                                this.c4on = on;
                            }
                            if (5 === id) {
                                this.c5x = x;
                                this.c5y = y;
                                this.c5on = on;
                            }
                            if (6 === id) {
                                this.c6x = x;
                                this.c6y = y;
                                this.c6on = on;
                            }
                            if (7 === id) {
                                this.c7x = x;
                                this.c7y = y;
                                this.c7on = on;
                            }
                            if (8 === id) {
                                this.c8x = x;
                                this.c8y = y;
                                this.c8on = on;
                            }
                            if (9 === id) {
                                this.c9x = x;
                                this.c9y = y;
                                this.c9on = on;
                            }
                            if (10 === id) {
                                this.c10x = x;
                                this.c10y = y;
                                this.c10on = on;
                            }
                            if (11 === id) {
                                this.c11x = x;
                                this.c11y = y;
                                this.c11on = on;
                            }
                            if (12 === id) {
                                this.c12x = x;
                                this.c12y = y;
                                this.c12on = on;
                            }
                            if (13 === id) {
                                this.c13x = x;
                                this.c13y = y;
                                this.c13on = on;
                            }
                            if (14 === id) {
                                this.c14x = x;
                                this.c14y = y;
                                this.c14on = on;
                            }
                            if (15 === id) {
                                this.c15x = x;
                                this.c15y = y;
                                this.c15on = on;
                            }
                            if (16 === id) {
                                this.c16x = x;
                                this.c16y = y;
                                this.c16on = on;
                            }
                            if (17 === id) {
                                this.c17x = x;
                                this.c17y = y;
                                this.c17on = on;
                            }
                            if (18 === id) {
                                this.c18x = x;
                                this.c18y = y;
                                this.c18on = on;
                            }
                            if (19 === id) {
                                this.c19x = x;
                                this.c19y = y;
                                this.c19on = on;
                            }
                            if (20 === id) {
                                this.c20x = x;
                                this.c20y = y;
                                this.c20on = on;
                            }
                            if (21 === id) {
                                this.c21x = x;
                                this.c21y = y;
                                this.c21on = on;
                            }
                            if (22 === id) {
                                this.c22x = x;
                                this.c22y = y;
                                this.c22on = on;
                            }
                            if (23 === id) {
                                this.c23x = x;
                                this.c23y = y;
                                this.c23on = on;
                            }
                            if (24 === id) {
                                this.c24x = x;
                                this.c24y = y;
                                this.c24on = on;
                            }
                            if (25 === id) {
                                this.c25x = x;
                                this.c25y = y;
                                this.c25on = on;
                            }
                        },
                        moveUp () {
                            this.move(0, -24);
                        },
                        moveDown () {
                            this.move(0, 24);
                        },
                        moveLeft () {
                            this.move(-24, 0);
                        },
                        moveRight () {
                            this.move(24, 0);
                        },
                        move (dx, dy) {
                            if (this.shieldOn) {
                                dx /= 2;
                                dy /= 2;
                            }
                            if (this.speedBoostOn) {
                                dx *= 2;
                                dy *= 2;
                            }
                            this.px += dx;
                            this.py += dy;
                            if (this.px < 18) this.px = 18;
                            if (this.py < 18) this.py = 18;
                            if (this.px > MW - 18) this.px = MW - 18;
                            if (this.py > MH - 18) this.py = MH - 18;
                            this.updateMap();
                        },
                        search () {
                            if (this.tryContainer(1)) ;
                            else if (this.tryContainer(2)) ;
                            else if (this.tryContainer(3)) ;
                            else if (this.tryContainer(4)) ;
                            else if (this.tryContainer(5)) ;
                            else if (this.tryContainer(6)) ;
                            else if (this.tryContainer(7)) ;
                            else if (this.tryContainer(8)) ;
                            else if (this.tryContainer(9)) ;
                            else if (this.tryContainer(10)) ;
                            else if (this.tryContainer(11)) ;
                            else if (this.tryContainer(12)) ;
                            else if (this.tryContainer(13)) ;
                            else if (this.tryContainer(14)) ;
                            else if (this.tryContainer(15)) ;
                            else if (this.tryContainer(16)) ;
                            else if (this.tryContainer(17)) ;
                            else if (this.tryContainer(18)) ;
                            else if (this.tryContainer(19)) ;
                            else if (this.tryContainer(20)) ;
                            else if (this.tryContainer(21)) ;
                            else if (this.tryContainer(22)) ;
                            else if (this.tryContainer(23)) ;
                            else if (this.tryContainer(24)) ;
                            else if (this.tryContainer(25)) ;
                            else if (this.challengeRaid && this.mandelOn && this.near(this.mandelX, this.mandelY, 48)) {
                                this.mandelFound = true;
                                this.mandelOn = false;
                                this.found1 = '已获得曼德尔';
                                this.foundStyle1 = this.rarityStyle('gold');
                                this.skillText = '前往撤离点';
                            } else if (this.near(260, 150, 54)) if (this.challengeRaid && !this.mandelFound) this.skillText = '先找曼德尔';
                            else this.finish(true);
                            this.updateMap();
                        },
                        tryContainer (id) {
                            let x = this.c1x;
                            let y = this.c1y;
                            let on = this.c1on;
                            if (2 === id) {
                                x = this.c2x;
                                y = this.c2y;
                                on = this.c2on;
                            }
                            if (3 === id) {
                                x = this.c3x;
                                y = this.c3y;
                                on = this.c3on;
                            }
                            if (4 === id) {
                                x = this.c4x;
                                y = this.c4y;
                                on = this.c4on;
                            }
                            if (5 === id) {
                                x = this.c5x;
                                y = this.c5y;
                                on = this.c5on;
                            }
                            if (6 === id) {
                                x = this.c6x;
                                y = this.c6y;
                                on = this.c6on;
                            }
                            if (7 === id) {
                                x = this.c7x;
                                y = this.c7y;
                                on = this.c7on;
                            }
                            if (8 === id) {
                                x = this.c8x;
                                y = this.c8y;
                                on = this.c8on;
                            }
                            if (9 === id) {
                                x = this.c9x;
                                y = this.c9y;
                                on = this.c9on;
                            }
                            if (10 === id) {
                                x = this.c10x;
                                y = this.c10y;
                                on = this.c10on;
                            }
                            if (11 === id) {
                                x = this.c11x;
                                y = this.c11y;
                                on = this.c11on;
                            }
                            if (12 === id) {
                                x = this.c12x;
                                y = this.c12y;
                                on = this.c12on;
                            }
                            if (13 === id) {
                                x = this.c13x;
                                y = this.c13y;
                                on = this.c13on;
                            }
                            if (14 === id) {
                                x = this.c14x;
                                y = this.c14y;
                                on = this.c14on;
                            }
                            if (15 === id) {
                                x = this.c15x;
                                y = this.c15y;
                                on = this.c15on;
                            }
                            if (16 === id) {
                                x = this.c16x;
                                y = this.c16y;
                                on = this.c16on;
                            }
                            if (17 === id) {
                                x = this.c17x;
                                y = this.c17y;
                                on = this.c17on;
                            }
                            if (18 === id) {
                                x = this.c18x;
                                y = this.c18y;
                                on = this.c18on;
                            }
                            if (19 === id) {
                                x = this.c19x;
                                y = this.c19y;
                                on = this.c19on;
                            }
                            if (20 === id) {
                                x = this.c20x;
                                y = this.c20y;
                                on = this.c20on;
                            }
                            if (21 === id) {
                                x = this.c21x;
                                y = this.c21y;
                                on = this.c21on;
                            }
                            if (22 === id) {
                                x = this.c22x;
                                y = this.c22y;
                                on = this.c22on;
                            }
                            if (23 === id) {
                                x = this.c23x;
                                y = this.c23y;
                                on = this.c23on;
                            }
                            if (24 === id) {
                                x = this.c24x;
                                y = this.c24y;
                                on = this.c24on;
                            }
                            if (25 === id) {
                                x = this.c25x;
                                y = this.c25y;
                                on = this.c25on;
                            }
                            if (!on || !this.near(x, y, 46)) return false;
                            if (1 === id) this.c1on = false;
                            if (2 === id) this.c2on = false;
                            if (3 === id) this.c3on = false;
                            if (4 === id) this.c4on = false;
                            if (5 === id) this.c5on = false;
                            if (6 === id) this.c6on = false;
                            if (7 === id) this.c7on = false;
                            if (8 === id) this.c8on = false;
                            if (9 === id) this.c9on = false;
                            if (10 === id) this.c10on = false;
                            if (11 === id) this.c11on = false;
                            if (12 === id) this.c12on = false;
                            if (13 === id) this.c13on = false;
                            if (14 === id) this.c14on = false;
                            if (15 === id) this.c15on = false;
                            if (16 === id) this.c16on = false;
                            if (17 === id) this.c17on = false;
                            if (18 === id) this.c18on = false;
                            if (19 === id) this.c19on = false;
                            if (20 === id) this.c20on = false;
                            if (21 === id) this.c21on = false;
                            if (22 === id) this.c22on = false;
                            if (23 === id) this.c23on = false;
                            if (24 === id) this.c24on = false;
                            if (25 === id) this.c25on = false;
                            this.openLootBox(id);
                            return true;
                        },
                        openLootBox (id) {
                            this.stop();
                            this.pending1on = false;
                            this.pending2on = false;
                            this.pending3on = false;
                            this.pendingEmpty = false;
                            this.pending1 = '';
                            this.pending2 = '';
                            this.pending3 = '';
                            const count = Math.floor(4 * Math.random());
                            if (0 === count) this.pendingEmpty = true;
                            if (count >= 1) this.rollPending(1, id);
                            if (count >= 2) this.rollPending(2, id);
                            if (count >= 3) this.rollPending(3, id);
                            this.clear();
                            this.pageLoot = true;
                        },
                        rollPending (slot, id) {
                            let r = Math.random();
                            if (this.isValley) r += 0.025;
                            if (this.isSpace) r += 0.045;
                            if (25 === id) r += 0.12;
                            let rarity = 'white';
                            const high = 1 === id || 2 === id || 23 === id || 25 === id;
                            const mid = 3 === id || 4 === id || 5 === id || 9 === id || 14 === id || 19 === id || 21 === id || 24 === id;
                            if (high) {
                                if (this.isSecret && r > 0.94) rarity = 'red';
                                else if (r > 0.86) rarity = 'gold';
                                else if (r > 0.62) rarity = 'purple';
                                else if (r > 0.34) rarity = 'blue';
                                else if (r > 0.12) rarity = 'green';
                            } else if (mid) {
                                if (this.isSecret && r > 0.98) rarity = 'red';
                                else if (r > 0.92) rarity = 'gold';
                                else if (r > 0.72) rarity = 'purple';
                                else if (r > 0.42) rarity = 'blue';
                                else if (r > 0.18) rarity = 'green';
                            } else if (this.isSecret && r > 0.995) rarity = 'red';
                            else if (r > 0.97) rarity = 'gold';
                            else if (r > 0.86) rarity = 'purple';
                            else if (r > 0.58) rarity = 'blue';
                            else if (r > 0.25) rarity = 'green';
                            let itemName = this.pickItem(rarity);
                            if (25 === id && Math.random() > 0.35) itemName = this.pickGearLoot();
                            if (8 === id || 13 === id || 20 === id) itemName = this.pickBandage();
                            if ((9 === id || 12 === id || 14 === id || 17 === id || 21 === id) && r > 0.70) {
                                itemName = '实验室房卡';
                                rarity = this.isSecret ? 'gold' : 'purple';
                            }
                            const st = this.rarityStyle(rarity);
                            if (1 === slot) {
                                this.pending1 = itemName;
                                this.pendingRarity1 = rarity;
                                this.pendingStyle1 = st;
                                this.pending1on = true;
                            }
                            if (2 === slot) {
                                this.pending2 = itemName;
                                this.pendingRarity2 = rarity;
                                this.pendingStyle2 = st;
                                this.pending2on = true;
                            }
                            if (3 === slot) {
                                this.pending3 = itemName;
                                this.pendingRarity3 = rarity;
                                this.pendingStyle3 = st;
                                this.pending3on = true;
                            }
                        },
                        pickGearLoot () {
                            const r = Math.random();
                            if (r < 0.32) return '枪械:' + GUNS[Math.floor(Math.random() * GUNS.length)];
                            if (r < 0.58) return '护甲:' + ARMORS[Math.floor(Math.random() * ARMORS.length)];
                            if (r < 0.74) return '头盔:DICH训练盔';
                            return '配件:' + ATTACHMENTS[Math.floor(Math.random() * ATTACHMENTS.length)];
                        },
                        pickBandage () {
                            const n = 1 + Math.floor(3 * Math.random());
                            if (1 === n) return '止血绷带';
                            if (2 === n) return '基础纱布';
                            return '强效止血带';
                        },
                        takePending1 () {
                            this.takePending(1);
                        },
                        takePending2 () {
                            this.takePending(2);
                        },
                        takePending3 () {
                            this.takePending(3);
                        },
                        takePending (slot) {
                            let name = this.pending1;
                            let rarity = this.pendingRarity1;
                            if (2 === slot) {
                                name = this.pending2;
                                rarity = this.pendingRarity2;
                            }
                            if (3 === slot) {
                                name = this.pending3;
                                rarity = this.pendingRarity3;
                            }
                            if (!name || this.raidLoot >= 20) return;
                            if (0 === name.indexOf('枪械:')) {
                                const g = name.split(':')[1];
                                this.gunInv = this.listAdd(this.gunInv, g, 1);
                                this.gunName = g;
                            } else if (0 === name.indexOf('护甲:')) {
                                const a = name.split(':')[1];
                                this.armorInv = this.listAdd(this.armorInv, a, 1);
                                this.armorName = a;
                            } else if (0 === name.indexOf('头盔:')) this.helmet += 1;
                            else if (0 === name.indexOf('配件:')) this.attachment += 1;
                            this.addFound(name, rarity);
                            this.raidLoot += 1;
                            if (name.indexOf('绷带') >= 0 || name.indexOf('纱布') >= 0 || name.indexOf('止血带') >= 0) this.carryMed += 1;
                            if (1 === slot) this.pending1on = false;
                            if (2 === slot) this.pending2on = false;
                            if (3 === slot) this.pending3on = false;
                        },
                        pickItem (rarity) {
                            const arr = LOOT_NAMES[rarity] || LOOT_NAMES.white;
                            return arr[Math.floor(Math.random() * arr.length)];
                        },
                        rarityStyle (rarity) {
                            if ('red' === rarity) return 'border-color:#ff3030;color:#ffdddd;';
                            if ('gold' === rarity) return 'border-color:#ffd54a;color:#fff1b0;';
                            if ('purple' === rarity) return 'border-color:#b45cff;color:#efd8ff;';
                            if ('blue' === rarity) return 'border-color:#4aa3ff;color:#d7ecff;';
                            if ('green' === rarity) return 'border-color:#55d66b;color:#ddffe2;';
                            return 'border-color:#ffffff;color:#f5f5f5;';
                        },
                        addFound (name, rarity) {
                            if ('white' === rarity) this.runWhite += 1;
                            if ('green' === rarity) this.runGreen += 1;
                            if ('blue' === rarity) this.runBlue += 1;
                            if ('purple' === rarity) this.runPurple += 1;
                            if ('gold' === rarity) this.runGold += 1;
                            if ('red' === rarity) this.runRed += 1;
                            this.foundCount += 1;
                            const line = name;
                            const st = this.rarityStyle(rarity);
                            if (1 === this.foundCount) {
                                this.found1 = line;
                                this.foundStyle1 = st;
                            } else if (2 === this.foundCount) {
                                this.found2 = line;
                                this.foundStyle2 = st;
                            } else if (3 === this.foundCount) {
                                this.found3 = line;
                                this.foundStyle3 = st;
                            } else if (4 === this.foundCount) {
                                this.found4 = line;
                                this.foundStyle4 = st;
                            } else {
                                this.found4 = '另有 ' + (this.foundCount - 3) + ' 件物资';
                                this.foundStyle4 = 'border-color:#888888;color:#dddddd;';
                            }
                        },
                        attack () {
                            if ('firebow' === this.currentWeapon && '赤枭' === this.operatorName) {
                                this.hitEnemy(125, 2);
                                this.applyFirebowBurn(125);
                                this.skillText = '燃烧弩命中';
                                return;
                            }
                            if ('gun' === this.currentWeapon && this.carryGun && this.inAmmo > 0) {
                                this.inAmmo -= 1;
                                let dmg = 2;
                                if ('复合弓' === this.gunName) dmg = 5;
                                if ('PKM' === this.gunName) dmg = 3;
                                if ('SR-25' === this.gunName) dmg = 4;
                                dmg += Math.floor(this.gunPower / 3);
                                this.hitEnemy(115, dmg);
                                return;
                            }
                            if ('gun' === this.currentWeapon && this.carryKnife && this.inAmmo <= 0) {
                                this.currentWeapon = 'knife';
                                this.refreshWeaponText();
                            }
                            if ('knife' === this.currentWeapon && this.carryKnife) this.hitEnemy(36, 1);
                        },
                        switchWeapon () {
                            if ('赤枭' === this.operatorName) if (this.carryGun) this.currentWeapon = 'firebow' === this.currentWeapon ? 'gun' : 'firebow';
                            else this.currentWeapon = 'firebow';
                            else if (this.carryGun && this.carryKnife) this.currentWeapon = 'gun' === this.currentWeapon ? 'knife' : 'gun';
                            else if (this.carryGun) this.currentWeapon = 'gun';
                            else if (this.carryKnife) this.currentWeapon = 'knife';
                            this.refreshWeaponText();
                        },
                        refreshWeaponText () {
                            if ('knife' === this.currentWeapon) this.weaponText = '武器 刀';
                            else if ('firebow' === this.currentWeapon) this.weaponText = '武器 燃烧弩';
                            else this.weaponText = '武器 枪';
                        },
                        useSkill () {
                            if (this.skillCd > 0) return;
                            this.skillCd = 12;
                            if ('蜂医' === this.operatorName) {
                                this.hp += 35;
                                if (this.hp > 100) this.hp = 100;
                                if (this.armorMax > 0) {
                                    this.armorDur += 25;
                                    if (this.armorDur > this.armorMax) this.armorDur = this.armorMax;
                                }
                                this.skillText = '蜂医治疗';
                                return;
                            }
                            if ('威龙' === this.operatorName) {
                                this.move(36, 0);
                                this.hitEnemy(70, 3);
                                this.skillText = '冷却中';
                                return;
                            }
                            if ('深蓝' === this.operatorName) {
                                this.shieldOn = true;
                                this.speedBoostOn = false;
                                this.skillTime = 7;
                                this.skillText = '护盾中';
                                return;
                            }
                            if ('红狼' === this.operatorName) {
                                this.speedBoostOn = true;
                                this.shieldOn = false;
                                this.skillTime = 7;
                                this.skillText = '疾跑中';
                                return;
                            }
                            if ('露娜' === this.operatorName) {
                                this.hitEnemy(190, 8);
                                this.skillText = '侦察箭命中';
                                return;
                            }
                            if ('乌鲁鲁' === this.operatorName) {
                                this.burnOn = true;
                                this.burnX = this.px + 72;
                                if (this.burnX > this.mapW() - 30) this.burnX = this.px - 72;
                                if (this.burnX < 20) this.burnX = 20;
                                this.burnY = this.py;
                                this.burnTime = 8;
                                this.skillText = '燃烧弹';
                                this.updateMap();
                                return;
                            }
                            if ('赤枭' === this.operatorName) {
                                if (this.chixiaoSummoned >= 7) {
                                    this.skillCd = 0;
                                    this.skillText = '队友已满';
                                    return;
                                }
                                this.summonChixiaoAlly();
                                this.skillText = '召唤队友' + this.chixiaoSummoned + '/7';
                                this.updateMap();
                                return;
                            }
                            this.hitEnemy(80, 2);
                            this.skillText = '冷却中';
                        },
                        updateSkillState () {
                            this.updateFirebowBurn();
                            this.updateSummonAllies();
                            if (this.burnOn) {
                                this.burnTime -= 1;
                                if (this.en1on && this.dist(this.burnX, this.burnY, this.en1x, this.en1y) < 56) {
                                    this.en1hp -= 5;
                                    if (this.en1hp <= 0) this.en1on = false;
                                }
                                if (this.en2on && this.dist(this.burnX, this.burnY, this.en2x, this.en2y) < 56) {
                                    this.en2hp -= 5;
                                    if (this.en2hp <= 0) this.en2on = false;
                                }
                                if (this.en3on && this.dist(this.burnX, this.burnY, this.en3x, this.en3y) < 56) {
                                    this.en3hp -= 5;
                                    if (this.en3hp <= 0) this.en3on = false;
                                }
                                if (this.bossOn && this.dist(this.burnX, this.burnY, this.bossX, this.bossY) < 64) {
                                    this.bossHp -= 7;
                                    if (this.bossHp <= 0) this.killBoss();
                                }
                                if (this.burnTime <= 0) this.burnOn = false;
                            }
                            if (this.skillTime > 0) {
                                this.skillTime -= 1;
                                if (this.skillTime <= 0) {
                                    this.shieldOn = false;
                                    this.speedBoostOn = false;
                                }
                            }
                            if (this.skillCd > 0) this.skillCd -= 1;
                            if (this.burnOn) this.skillText = '燃烧' + this.burnTime;
                            else if ('赤枭' === this.operatorName && this.chixiaoSummoned >= 7 && this.skillCd <= 0) this.skillText = '队友已满';
                            else if (this.shieldOn) this.skillText = '护盾' + this.skillTime;
                            else if (this.speedBoostOn) this.skillText = '疾跑' + this.skillTime;
                            else if (this.skillCd > 0) this.skillText = '冷却' + this.skillCd;
                            else this.skillText = '技能就绪';
                        },
                        useBandage () {
                            if (this.carryMed <= 0) return;
                            this.carryMed -= 1;
                            this.hp += 18;
                            if (this.hp > 100) this.hp = 100;
                        },
                        discardBag1 () {
                            this.discardBag(1);
                        },
                        discardBag2 () {
                            this.discardBag(2);
                        },
                        discardBag3 () {
                            this.discardBag(3);
                        },
                        discardBag4 () {
                            this.discardBag(4);
                        },
                        discardBag (slot) {
                            if (this.raidLoot <= 0) return;
                            this.raidLoot -= 1;
                            if (1 === slot) {
                                this.found1 = '';
                                this.foundStyle1 = '';
                            }
                            if (2 === slot) {
                                this.found2 = '';
                                this.foundStyle2 = '';
                            }
                            if (3 === slot) {
                                this.found3 = '';
                                this.foundStyle3 = '';
                            }
                            if (4 === slot) {
                                this.found4 = '';
                                this.foundStyle4 = '';
                            }
                        },
                        hitEnemy (range, damage) {
                            if (this.bossOn && this.dist(this.px, this.py, this.bossX, this.bossY) < range + 18) {
                                this.bossHp -= damage;
                                if (this.bossHp <= 0) this.killBoss();
                            } else if (this.en1on && this.dist(this.px, this.py, this.en1x, this.en1y) < range) {
                                this.en1hp -= damage;
                                if (this.en1hp <= 0) this.en1on = false;
                            } else if (this.en2on && this.dist(this.px, this.py, this.en2x, this.en2y) < range) {
                                this.en2hp -= damage;
                                if (this.en2hp <= 0) this.en2on = false;
                            } else if (this.en3on && this.dist(this.px, this.py, this.en3x, this.en3y) < range) {
                                this.en3hp -= damage;
                                if (this.en3hp <= 0) this.en3on = false;
                            }
                            this.updateMap();
                        },
                        applyFirebowBurn (range) {
                            if (this.bossOn && this.dist(this.px, this.py, this.bossX, this.bossY) < range + 18) {
                                this.bossBurn = 5;
                                return;
                            }
                            if (this.en1on && this.dist(this.px, this.py, this.en1x, this.en1y) < range) {
                                this.en1Burn = 5;
                                return;
                            }
                            if (this.en2on && this.dist(this.px, this.py, this.en2x, this.en2y) < range) {
                                this.en2Burn = 5;
                                return;
                            }
                            if (this.en3on && this.dist(this.px, this.py, this.en3x, this.en3y) < range) this.en3Burn = 5;
                        },
                        updateFirebowBurn () {
                            if (this.en1Burn > 0) {
                                this.en1Burn -= 1;
                                if (this.en1on) {
                                    this.en1hp -= 3;
                                    if (this.en1hp <= 0) this.en1on = false;
                                }
                            }
                            if (this.en2Burn > 0) {
                                this.en2Burn -= 1;
                                if (this.en2on) {
                                    this.en2hp -= 3;
                                    if (this.en2hp <= 0) this.en2on = false;
                                }
                            }
                            if (this.en3Burn > 0) {
                                this.en3Burn -= 1;
                                if (this.en3on) {
                                    this.en3hp -= 3;
                                    if (this.en3hp <= 0) this.en3on = false;
                                }
                            }
                            if (this.bossBurn > 0) {
                                this.bossBurn -= 1;
                                if (this.bossOn) {
                                    this.bossHp -= 4;
                                    if (this.bossHp <= 0) this.killBoss();
                                }
                            }
                        },
                        summonChixiaoAlly () {
                            for(let i = 1; i <= 7; i++)if (!this['sAlly' + i + 'on']) {
                                this['sAlly' + i + 'on'] = true;
                                this['sAlly' + i + 'hp'] = 50;
                                this['sAlly' + i + 'x'] = this.px + 18;
                                this['sAlly' + i + 'y'] = this.py + 18;
                                this.chixiaoSummoned += 1;
                                return;
                            }
                        },
                        updateSummonAllies () {
                            for(let i = 1; i <= 7; i++)this.summonAllyAct(i);
                        },
                        summonAllyAct (id) {
                            if (!this['sAlly' + id + 'on']) return;
                            let x = this['sAlly' + id + 'x'];
                            let y = this['sAlly' + id + 'y'];
                            let tx = this.px;
                            let ty = this.py;
                            let target = '';
                            let best = 9999;
                            if (this.bossOn) {
                                const d = this.dist(x, y, this.bossX, this.bossY);
                                if (d < best) {
                                    best = d;
                                    tx = this.bossX;
                                    ty = this.bossY;
                                    target = 'boss';
                                }
                            }
                            if (this.en1on) {
                                const d = this.dist(x, y, this.en1x, this.en1y);
                                if (d < best) {
                                    best = d;
                                    tx = this.en1x;
                                    ty = this.en1y;
                                    target = 'en1';
                                }
                            }
                            if (this.en2on) {
                                const d = this.dist(x, y, this.en2x, this.en2y);
                                if (d < best) {
                                    best = d;
                                    tx = this.en2x;
                                    ty = this.en2y;
                                    target = 'en2';
                                }
                            }
                            if (this.en3on) {
                                const d = this.dist(x, y, this.en3x, this.en3y);
                                if (d < best) {
                                    best = d;
                                    tx = this.en3x;
                                    ty = this.en3y;
                                    target = 'en3';
                                }
                            }
                            if ('' === target) return;
                            const sp = 6;
                            if (best > 44) {
                                if (tx > x) x += sp;
                                if (tx < x) x -= sp;
                                if (ty > y) y += sp;
                                if (ty < y) y -= sp;
                            } else {
                                if ('boss' === target) {
                                    this.bossHp -= 2;
                                    if (this.bossHp <= 0) this.killBoss();
                                }
                                if ('en1' === target) {
                                    this.en1hp -= 1;
                                    if (this.en1hp <= 0) this.en1on = false;
                                }
                                if ('en2' === target) {
                                    this.en2hp -= 1;
                                    if (this.en2hp <= 0) this.en2on = false;
                                }
                                if ('en3' === target) {
                                    this.en3hp -= 1;
                                    if (this.en3hp <= 0) this.en3on = false;
                                }
                            }
                            this['sAlly' + id + 'x'] = x;
                            this['sAlly' + id + 'y'] = y;
                        },
                        damageSummonAlly (id, dmg) {
                            if (!this['sAlly' + id + 'on']) return;
                            this['sAlly' + id + 'hp'] -= Math.ceil(dmg / 2);
                            if (this['sAlly' + id + 'hp'] <= 0) this['sAlly' + id + 'on'] = false;
                        },
                        nearestSummonAlly (x, y, range) {
                            let best = range;
                            let target = 0;
                            for(let i = 1; i <= 7; i++)if (this['sAlly' + i + 'on']) {
                                const d = this.dist(x, y, this['sAlly' + i + 'x'], this['sAlly' + i + 'y']);
                                if (d < best) {
                                    best = d;
                                    target = i;
                                }
                            }
                            return target;
                        },
                        killBoss () {
                            this.bossOn = false;
                            if (this.challengeRaid) {
                                this.found1 = 'Boss已击杀';
                                this.foundStyle1 = this.rarityStyle('gold');
                                return;
                            }
                            this.c25x = this.bossX;
                            this.c25y = this.bossY;
                            this.c25on = true;
                            this.found1 = 'Boss已击杀，掉落高级箱';
                            this.foundStyle1 = this.rarityStyle('gold');
                        },
                        enemyStep () {
                            if (this.en1on) this.moveEnemy(1);
                            if (this.en2on) this.moveEnemy(2);
                            if (this.en3on) this.moveEnemy(3);
                            this.bossStep();
                        },
                        bossStep () {
                            if (!this.bossOn) return;
                            let tx = this.px;
                            let ty = this.py;
                            const allyTarget = this.nearestSummonAlly(this.bossX, this.bossY, 190);
                            if (allyTarget > 0) {
                                tx = this['sAlly' + allyTarget + 'x'];
                                ty = this['sAlly' + allyTarget + 'y'];
                            }
                            const d = this.dist(tx, ty, this.bossX, this.bossY);
                            if (d < 190) {
                                const sp = this.isSecret ? 12 : 9;
                                if (tx > this.bossX) this.bossX += sp;
                                if (tx < this.bossX) this.bossX -= sp;
                                if (ty > this.bossY) this.bossY += sp;
                                if (ty < this.bossY) this.bossY -= sp;
                            }
                            if (allyTarget > 0) {
                                if (d < 95) this.damageSummonAlly(allyTarget, this.isSecret ? 12 : 8);
                                if (d < 34) this.damageSummonAlly(allyTarget, this.isSecret ? 20 : 14);
                            } else {
                                if (d < 95) this.takeDamage(this.isSecret ? 12 : 8);
                                if (d < 34) this.takeDamage(this.isSecret ? 20 : 14);
                            }
                        },
                        moveEnemy (id) {
                            let x = this.en1x;
                            let y = this.en1y;
                            if (2 === id) {
                                x = this.en2x;
                                y = this.en2y;
                            }
                            if (3 === id) {
                                x = this.en3x;
                                y = this.en3y;
                            }
                            let tx = this.px;
                            let ty = this.py;
                            const allyTarget = this.nearestSummonAlly(x, y, 170);
                            if (allyTarget > 0) {
                                tx = this['sAlly' + allyTarget + 'x'];
                                ty = this['sAlly' + allyTarget + 'y'];
                            }
                            const d = this.dist(tx, ty, x, y);
                            const sp = this.isSecret ? 12 : 8;
                            if (d < 170) {
                                if (tx > x) x += sp;
                                if (tx < x) x -= sp;
                                if (ty > y) y += sp;
                                if (ty < y) y -= sp;
                            }
                            if (allyTarget > 0) {
                                if (d >= 70 && d < 150) this.damageSummonAlly(allyTarget, this.isSecret ? 7 : 5);
                                if (d < 28) this.damageSummonAlly(allyTarget, this.isSecret ? 14 : 9);
                            } else {
                                if (d >= 70 && d < 150) this.takeDamage(this.isSecret ? 7 : 5);
                                if (d < 28) this.takeDamage(this.isSecret ? 14 : 9);
                            }
                            if (1 === id) {
                                this.en1x = x;
                                this.en1y = y;
                            }
                            if (2 === id) {
                                this.en2x = x;
                                this.en2y = y;
                            }
                            if (3 === id) {
                                this.en3x = x;
                                this.en3y = y;
                            }
                        },
                        abortRaid () {
                            this.finish(false);
                        },
                        takeDamage (v) {
                            if (this.shieldOn) return;
                            if (this.armorDur > 0) {
                                this.armorDur -= v;
                                if (this.armorDur <= 0) {
                                    this.armorDur = 0;
                                    this.carryArmor = false;
                                    this.carryArmorText = '未穿';
                                }
                                return;
                            }
                            this.hp -= v;
                        },
                        finish (win) {
                            this.stop();
                            const wasChallenge = this.challengeRaid;
                            this.expGain = win ? 35 + 8 * this.raidLoot : 10;
                            if (this.isSecret) this.expGain += 20;
                            this.lootGain = win ? this.raidLoot : 0;
                            this.cashGain = 0;
                            if (win) {
                                this.whiteInv += this.runWhite;
                                this.greenInv += this.runGreen;
                                this.blueInv += this.runBlue;
                                this.purpleInv += this.runPurple;
                                this.goldInv += this.runGold;
                                this.redInv += this.runRed;
                                this.loot += this.lootGain;
                                if (this.raidGunName) this.gunInv = this.listAdd(this.gunInv, this.raidGunName, 1);
                                if (this.raidArmorName && this.armorDur > 0) this.armorInv = this.listAdd(this.armorInv, this.raidArmorName, 1);
                                if (this.raidKnifeTaken) this.knife += 1;
                            }
                            this.resultTitle = win ? '撤离成功' : '行动失败';
                            if (!win) {
                                this.found1 = '物资遗失';
                                this.found2 = '带入装备遗失';
                                this.found3 = '';
                                this.found4 = '';
                                this.foundStyle1 = 'border-color:#888888;color:#dddddd;';
                                this.foundStyle2 = 'border-color:#888888;color:#dddddd;';
                            }
                            this.raidGunName = '';
                            this.raidArmorName = '';
                            this.raidKnifeTaken = false;
                            this.mandelOn = false;
                            this.mandelFound = false;
                            if (wasChallenge) {
                                if (win) if (this.challengeLevel < 7) {
                                    this.challengeLevel += 1;
                                    this.challengeText = '挑战成功，进入第' + this.challengeLevel + '关';
                                } else {
                                    this.challengeDone = true;
                                    this.challengeText = '7个关卡已全部完成';
                                }
                                else this.challengeText = '挑战失败，可重新挑战第' + this.challengeLevel + '关';
                                this.challengeRaid = false;
                                this.addExp(this.expGain);
                                this.refreshAll();
                                this.saveGame();
                                this.clear();
                                this.pageChallengeHome = true;
                                return;
                            }
                            this.addExp(this.expGain);
                            this.refreshAll();
                            this.saveGame();
                            this.clear();
                            this.pageResult = true;
                        },
                        addExp (v) {
                            this.exp += v;
                            while(this.exp >= this.nextExp){
                                this.exp -= this.nextExp;
                                this.level += 1;
                                this.nextExp += 40;
                            }
                        },
                        near (x, y, r) {
                            return this.dist(this.px, this.py, x, y) < r;
                        },
                        dist (ax, ay, bx, by) {
                            const dx = ax - bx;
                            const dy = ay - by;
                            return Math.sqrt(dx * dx + dy * dy);
                        },
                        camX () {
                            let c = this.px - VW / 2;
                            if (c < 0) c = 0;
                            if (c > this.camMaxX()) c = this.camMaxX();
                            return c;
                        },
                        camY () {
                            return 0;
                        },
                        mapW () {
                            if (this.isSpace) return 930;
                            return this.isValley ? 719 : 780;
                        },
                        camMaxX () {
                            return this.mapW() - VW;
                        },
                        oldCamY () {
                            let c = this.py - VH / 2;
                            if (c < 0) c = 0;
                            if (c > MH - VH) c = MH - VH;
                            return c;
                        },
                        sx (x) {
                            return x - this.camX();
                        },
                        sy (y) {
                            return y - this.camY();
                        },
                        box (x, y, w, h) {
                            return 'left:' + this.sx(x) + 'px;top:' + this.sy(y) + 'px;width:' + w + 'px;height:' + h + 'px;';
                        },
                        updateMap () {
                            const imgW = this.mapW();
                            const imgH = 390;
                            this.mapStyle = this.box(0, 0, imgW, imgH);
                            this.worldStyle = this.box(0, 0, imgW, imgH);
                            this.playerStyle = this.box(this.px, this.py, 14, 14);
                            this.mandelStyle = this.box(this.mandelX, this.mandelY, 30, 30);
                            this.riverStyle = '';
                            this.road1 = '';
                            this.road2 = '';
                            this.b1Style = '';
                            this.b2Style = '';
                            this.b3Style = '';
                            this.b4Style = '';
                            this.exfilStyle = this.box(260, 150, 42, 42);
                            this.c1 = this.box(this.c1x, this.c1y, 28, 34);
                            this.c2 = this.box(this.c2x, this.c2y, 28, 34);
                            this.c3 = this.box(this.c3x, this.c3y, 28, 34);
                            this.c4 = this.box(this.c4x, this.c4y, 28, 34);
                            this.c5 = this.box(this.c5x, this.c5y, 28, 34);
                            this.c6 = this.box(this.c6x, this.c6y, 28, 34);
                            this.c7 = this.box(this.c7x, this.c7y, 28, 34);
                            this.c8 = this.box(this.c8x, this.c8y, 28, 34);
                            this.c9 = this.box(this.c9x, this.c9y, 28, 34);
                            this.c10 = this.box(this.c10x, this.c10y, 28, 34);
                            this.c11 = this.box(this.c11x, this.c11y, 28, 34);
                            this.c12 = this.box(this.c12x, this.c12y, 28, 34);
                            this.c13 = this.box(this.c13x, this.c13y, 28, 34);
                            this.c14 = this.box(this.c14x, this.c14y, 28, 34);
                            this.c15 = this.box(this.c15x, this.c15y, 28, 34);
                            this.c16 = this.box(this.c16x, this.c16y, 28, 34);
                            this.c17 = this.box(this.c17x, this.c17y, 28, 34);
                            this.c18 = this.box(this.c18x, this.c18y, 28, 34);
                            this.c19 = this.box(this.c19x, this.c19y, 28, 34);
                            this.c20 = this.box(this.c20x, this.c20y, 28, 34);
                            this.c21 = this.box(this.c21x, this.c21y, 28, 34);
                            this.c22 = this.box(this.c22x, this.c22y, 28, 34);
                            this.c23 = this.box(this.c23x, this.c23y, 28, 34);
                            this.c24 = this.box(this.c24x, this.c24y, 28, 34);
                            this.c25 = this.box(this.c25x, this.c25y, 28, 34);
                            this.en1 = this.box(this.en1x, this.en1y, 16, 16);
                            this.en2 = this.box(this.en2x, this.en2y, 16, 16);
                            this.en3 = this.box(this.en3x, this.en3y, 18, 18);
                            this.bossStyle = this.box(this.bossX, this.bossY, 34, 42);
                            this.bossBarStyle = this.box(this.bossX, this.bossY - 8, 36, 4);
                            const bw = Math.floor(36 * this.bossHp / this.bossMaxHp);
                            this.bossHpStyle = this.box(this.bossX, this.bossY - 8, bw, 4);
                            this.burnStyle = this.box(this.burnX - 26, this.burnY - 26, 52, 52);
                            this.sAlly1Style = this.box(this.sAlly1x, this.sAlly1y, 16, 16);
                            this.sAlly2Style = this.box(this.sAlly2x, this.sAlly2y, 16, 16);
                            this.sAlly3Style = this.box(this.sAlly3x, this.sAlly3y, 16, 16);
                            this.sAlly4Style = this.box(this.sAlly4x, this.sAlly4y, 16, 16);
                            this.sAlly5Style = this.box(this.sAlly5x, this.sAlly5y, 16, 16);
                            this.sAlly6Style = this.box(this.sAlly6x, this.sAlly6y, 16, 16);
                            this.sAlly7Style = this.box(this.sAlly7x, this.sAlly7y, 16, 16);
                            const vx = this.sx(this.px) + 7;
                            const vy = this.sy(this.py) + 7;
                            const vr = this.nightRaid ? 48 : 300;
                            const topH = Math.max(0, vy - vr);
                            const bottomY = Math.min(VH, vy + vr);
                            const leftW = Math.max(0, vx - vr);
                            const rightX = Math.min(VW, vx + vr);
                            const bandTop = Math.max(0, vy - vr);
                            const bandH = Math.min(VH, vy + vr) - bandTop;
                            this.nightTopStyle = 'left:0px;top:0px;width:' + VW + 'px;height:' + topH + 'px;';
                            this.nightBottomStyle = 'left:0px;top:' + bottomY + 'px;width:' + VW + 'px;height:' + Math.max(0, VH - bottomY) + 'px;';
                            this.nightLeftStyle = 'left:0px;top:' + bandTop + 'px;width:' + leftW + 'px;height:' + bandH + 'px;';
                            this.nightRightStyle = 'left:' + rightX + 'px;top:' + bandTop + 'px;width:' + Math.max(0, VW - rightX) + 'px;height:' + bandH + 'px;';
                        }
                    };
                    const moduleOwn = exports.default || module.exports;
                    const accessors = [
                        'public',
                        'protected',
                        'private'
                    ];
                    if (moduleOwn.data && accessors.some(function(acc) {
                        return moduleOwn[acc];
                    })) throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
                    if (!moduleOwn.data) {
                        moduleOwn.data = {};
                        moduleOwn._descriptor = {};
                        accessors.forEach(function(acc) {
                            const accType = typeof moduleOwn[acc];
                            if ('object' === accType) {
                                moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
                                for(const name in moduleOwn[acc])moduleOwn._descriptor[name] = {
                                    access: acc
                                };
                            } else if ('function' === accType) console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
                        });
                    }
                };
                var $app_template$ = function(vm) {
                    const _vm_ = vm || this;
                    return aiot.__ce__("div", {
                        __vm__: _vm_,
                        __opts__: {
                            classList: [
                                "screen"
                            ]
                        }
                    }, [
                        aiot.__ci__({
                            __vm__: _vm_,
                            __opts__: {
                                shown: function() {
                                    return _vm_.pageHome;
                                }
                            }
                        }, function() {
                            return [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "page"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "bg"
                                            ]
                                        }
                                    }, []),
                                    aiot.__ce__("image", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "deltaImg"
                                            ],
                                            src: "/assets/home_top_v094.jpg"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "top"
                                            ],
                                            value: function() {
                                                return "行动等级" + _vm_.level + " 经验" + _vm_.exp + "/" + _vm_.nextExp;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "name"
                                            ],
                                            value: "三角洲行动"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "modeLine"
                                            ],
                                            value: function() {
                                                return "当前玩法：" + _vm_.currentMode;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "homeBtn",
                                                "hb1"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.openWarehouse(evt);
                                                }
                                            },
                                            value: "仓库"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "homeBtn",
                                                "hb2"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.openOperator(evt);
                                                }
                                            },
                                            value: "干员"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "homeBtn",
                                                "hb3"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.openPrep(evt);
                                                }
                                            },
                                            value: "备战"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "homeBtn",
                                                "hb4"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.openMap(evt);
                                                }
                                            },
                                            value: "开始游戏"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "homeBtn",
                                                "hb5"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.openCollection(evt);
                                                }
                                            },
                                            value: "收藏室"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "homeBtn",
                                                "hb6"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.openEvent(evt);
                                                }
                                            },
                                            value: "活动"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "homeBtn",
                                                "hb7"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.openAssets(evt);
                                                }
                                            },
                                            value: "资产"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "homeBtn",
                                                "hb8"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.openMode(evt);
                                                }
                                            },
                                            value: "切换玩法"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "homeBtn",
                                                "hb9"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.openRedeem(evt);
                                                }
                                            },
                                            value: "兑换码"
                                        }
                                    }, [])
                                ])
                            ];
                        }),
                        aiot.__ci__({
                            __vm__: _vm_,
                            __opts__: {
                                shown: function() {
                                    return _vm_.pageWarehouse;
                                }
                            }
                        }, function() {
                            return [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "page"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "top"
                                            ],
                                            value: "仓库 选物品和数量"
                                        }
                                    }, []),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "slot",
                                                "s1"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.selectGun(evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "slotText"
                                                ],
                                                value: function() {
                                                    return _vm_.gunItem;
                                                }
                                            }
                                        }, [])
                                    ]),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "slot",
                                                "s2"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.selectArmor(evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "slotText"
                                                ],
                                                value: function() {
                                                    return _vm_.armorItem;
                                                }
                                            }
                                        }, [])
                                    ]),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "slot",
                                                "s3"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.selectHelmet(evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "slotText"
                                                ],
                                                value: function() {
                                                    return _vm_.helmetName + " " + _vm_.helmet;
                                                }
                                            }
                                        }, [])
                                    ]),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "slot",
                                                "s4"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.selectAmmo(evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "slotText"
                                                ],
                                                value: function() {
                                                    return "子弹 " + _vm_.ammoStore;
                                                }
                                            }
                                        }, [])
                                    ]),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "slot",
                                                "s5"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.selectMed(evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "slotText"
                                                ],
                                                value: function() {
                                                    return "医疗 " + _vm_.med;
                                                }
                                            }
                                        }, [])
                                    ]),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "slot",
                                                "s6"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.openWarehouseLoot(evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "slotText"
                                                ],
                                                value: function() {
                                                    return _vm_.bestLootName;
                                                }
                                            }
                                        }, [])
                                    ]),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "info"
                                            ],
                                            value: function() {
                                                return _vm_.sellText;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "qty",
                                                "qMinus"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.sellMinus(evt);
                                                }
                                            },
                                            value: "-"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "qty",
                                                "qNum"
                                            ],
                                            value: function() {
                                                return _vm_.sellQty;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "qty",
                                                "qPlus"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.sellPlus(evt);
                                                }
                                            },
                                            value: "+"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "btn",
                                                "smallBtn",
                                                "confirm"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.confirmSell(evt);
                                                }
                                            },
                                            value: "确认"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "btn",
                                                "smallBtn",
                                                "sellAllBtn"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.sellAllLoot(evt);
                                                }
                                            },
                                            value: "一键出售"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "btn",
                                                "smallBtn",
                                                "modBtn"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.openGunMod(evt);
                                                }
                                            },
                                            value: "改枪"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "btn",
                                                "smallBtn",
                                                "back"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.goHome(evt);
                                                }
                                            },
                                            value: "返回"
                                        }
                                    }, [])
                                ])
                            ];
                        }),
                        aiot.__ci__({
                            __vm__: _vm_,
                            __opts__: {
                                shown: function() {
                                    return _vm_.pageGunMod;
                                }
                            }
                        }, function() {
                            return [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "page"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "top"
                                            ],
                                            value: function() {
                                                return "改枪 配件" + _vm_.attachment;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "assetLine",
                                                "a1"
                                            ],
                                            value: function() {
                                                return "枪械数量：" + _vm_.gun;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "assetLine",
                                                "a2"
                                            ],
                                            value: function() {
                                                return "强化等级：" + _vm_.gunPower;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "assetLine",
                                                "a3"
                                            ],
                                            value: function() {
                                                return _vm_.modText;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "shopItem",
                                                "i5"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.oneKeyMod(evt);
                                                }
                                            },
                                            value: "一键改装"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "btn",
                                                "smallBtn",
                                                "back"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.openWarehouse(evt);
                                                }
                                            },
                                            value: "返回"
                                        }
                                    }, [])
                                ])
                            ];
                        }),
                        aiot.__ci__({
                            __vm__: _vm_,
                            __opts__: {
                                shown: function() {
                                    return _vm_.pageCollection;
                                }
                            }
                        }, function() {
                            return [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "page"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "top"
                                            ],
                                            value: "收藏室 选物品和数量"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "shopItem",
                                                "i1"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.selectCollectLoot(evt);
                                                }
                                            },
                                            value: function() {
                                                return _vm_.collectLootItem;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "shopItem",
                                                "i2"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.selectCollectGun(evt);
                                                }
                                            },
                                            value: function() {
                                                return _vm_.collectGunItem;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "shopItem",
                                                "i3"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.selectCollectArmor(evt);
                                                }
                                            },
                                            value: function() {
                                                return _vm_.collectArmorItem;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "found",
                                                "f4"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.collectionStyle);
                                            },
                                            value: function() {
                                                return _vm_.collectionBest;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "info"
                                            ],
                                            value: function() {
                                                return _vm_.collectionText;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "qty",
                                                "qMinus"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.collectMinus(evt);
                                                }
                                            },
                                            value: "-"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "qty",
                                                "qNum"
                                            ],
                                            value: function() {
                                                return _vm_.collectQty;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "qty",
                                                "qPlus"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.collectPlus(evt);
                                                }
                                            },
                                            value: "+"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "btn",
                                                "smallBtn",
                                                "confirm"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.confirmCollect(evt);
                                                }
                                            },
                                            value: "收藏"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "btn",
                                                "smallBtn",
                                                "back"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.goHome(evt);
                                                }
                                            },
                                            value: "返回"
                                        }
                                    }, [])
                                ])
                            ];
                        }),
                        aiot.__ci__({
                            __vm__: _vm_,
                            __opts__: {
                                shown: function() {
                                    return _vm_.pageWarehouseLoot;
                                }
                            }
                        }, function() {
                            return [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "page"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "top"
                                            ],
                                            value: "仓库物资"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "found",
                                                "f1"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.whStyle1);
                                            },
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.selectLootRed(evt);
                                                }
                                            },
                                            value: function() {
                                                return _vm_.whItem1;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "found",
                                                "f2"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.whStyle2);
                                            },
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.selectLootGold(evt);
                                                }
                                            },
                                            value: function() {
                                                return _vm_.whItem2;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "found",
                                                "f3"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.whStyle3);
                                            },
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.selectLootPurple(evt);
                                                }
                                            },
                                            value: function() {
                                                return _vm_.whItem3;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "found",
                                                "f4"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.whStyle4);
                                            },
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.selectLootLow(evt);
                                                }
                                            },
                                            value: function() {
                                                return _vm_.whItem4;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "btn",
                                                "smallBtn",
                                                "confirm"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.openWarehouse(evt);
                                                }
                                            },
                                            value: "售卖"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "btn",
                                                "smallBtn",
                                                "back"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.openWarehouse(evt);
                                                }
                                            },
                                            value: "返回"
                                        }
                                    }, [])
                                ])
                            ];
                        }),
                        aiot.__ci__({
                            __vm__: _vm_,
                            __opts__: {
                                shown: function() {
                                    return _vm_.pageEvent;
                                }
                            }
                        }, function() {
                            return [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "page"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "top"
                                            ],
                                            value: "活动"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "eventCard",
                                                "ev1"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.claimWeekend(evt);
                                                }
                                            },
                                            value: "周末爽打 随机枪"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "eventCard",
                                                "ev2"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.claimAssault(evt);
                                                }
                                            },
                                            value: "猛攻节 20三角券"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "eventCard",
                                                "ev3"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.claimHuman(evt);
                                                }
                                            },
                                            value: "人道补助 500哈夫币"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "info"
                                            ],
                                            value: function() {
                                                return _vm_.eventText;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "btn",
                                                "smallBtn",
                                                "back"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.goHome(evt);
                                                }
                                            },
                                            value: "返回"
                                        }
                                    }, [])
                                ])
                            ];
                        }),
                        aiot.__ci__({
                            __vm__: _vm_,
                            __opts__: {
                                shown: function() {
                                    return _vm_.pageAssets;
                                }
                            }
                        }, function() {
                            return [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "page"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "top"
                                            ],
                                            value: "资产"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "assetLine",
                                                "a1"
                                            ],
                                            value: function() {
                                                return "游玩次数 " + _vm_.playCount;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "assetLine",
                                                "a2"
                                            ],
                                            value: function() {
                                                return "哈夫币 " + _vm_.cash;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "assetLine",
                                                "a3"
                                            ],
                                            value: function() {
                                                return "三角券 " + _vm_.ticket;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "assetLine",
                                                "a4"
                                            ],
                                            value: function() {
                                                return "行动等级 " + _vm_.level;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "btn",
                                                "smallBtn",
                                                "back"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.goHome(evt);
                                                }
                                            },
                                            value: "返回"
                                        }
                                    }, [])
                                ])
                            ];
                        }),
                        aiot.__ci__({
                            __vm__: _vm_,
                            __opts__: {
                                shown: function() {
                                    return _vm_.pageRedeem;
                                }
                            }
                        }, function() {
                            return [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "page"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "top"
                                            ],
                                            value: "兑换码"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "redeemBox"
                                            ],
                                            value: function() {
                                                return _vm_.redeemInput;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "info"
                                            ],
                                            value: function() {
                                                return _vm_.redeemText;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "num",
                                                "n1"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.redeemNum1(evt);
                                                }
                                            },
                                            value: "1"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "num",
                                                "n2"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.redeemNum2(evt);
                                                }
                                            },
                                            value: "2"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "num",
                                                "n3"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.redeemNum3(evt);
                                                }
                                            },
                                            value: "3"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "num",
                                                "n4"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.redeemNum4(evt);
                                                }
                                            },
                                            value: "4"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "num",
                                                "n5"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.redeemNum5(evt);
                                                }
                                            },
                                            value: "5"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "num",
                                                "n6"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.redeemNum6(evt);
                                                }
                                            },
                                            value: "6"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "num",
                                                "n7"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.redeemNum7(evt);
                                                }
                                            },
                                            value: "7"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "num",
                                                "n8"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.redeemNum8(evt);
                                                }
                                            },
                                            value: "8"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "num",
                                                "n9"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.redeemNum9(evt);
                                                }
                                            },
                                            value: "9"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "btn",
                                                "smallBtn",
                                                "confirm"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.confirmRedeem(evt);
                                                }
                                            },
                                            value: "确认"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "btn",
                                                "smallBtn",
                                                "back"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.goHome(evt);
                                                }
                                            },
                                            value: "返回"
                                        }
                                    }, [])
                                ])
                            ];
                        }),
                        aiot.__ci__({
                            __vm__: _vm_,
                            __opts__: {
                                shown: function() {
                                    return _vm_.pageOperator;
                                }
                            }
                        }, function() {
                            return [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "page"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "top"
                                            ],
                                            value: function() {
                                                return "干员 当前 " + _vm_.operatorName;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "opCard",
                                                "op1"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.chooseWeilong(evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "opName"
                                                ],
                                                value: "威龙"
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "opSkill"
                                                ],
                                                value: "动力推进 / 快速突入"
                                            }
                                        }, [])
                                    ]),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "opCard",
                                                "op2"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.chooseFengyi(evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "opName"
                                                ],
                                                value: "蜂医"
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "opSkill"
                                                ],
                                                value: "治疗支援 / 回血续航"
                                            }
                                        }, [])
                                    ]),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "opCard",
                                                "op3"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.chooseRedWolf(evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "opName"
                                                ],
                                                value: "红狼"
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "opSkill"
                                                ],
                                                value: function() {
                                                    return _vm_.redWolfText;
                                                }
                                            }
                                        }, [])
                                    ]),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "opCard",
                                                "op4"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.chooseDeepBlue(evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "opName"
                                                ],
                                                value: "深蓝"
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "opSkill"
                                                ],
                                                value: function() {
                                                    return _vm_.deepBlueText;
                                                }
                                            }
                                        }, [])
                                    ]),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "opCard",
                                                "op5"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.chooseLuna(evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "opName"
                                                ],
                                                value: "露娜"
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "opSkill"
                                                ],
                                                value: function() {
                                                    return _vm_.lunaText;
                                                }
                                            }
                                        }, [])
                                    ]),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "opCard",
                                                "op6"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.chooseUluru(evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "opName"
                                                ],
                                                value: "乌鲁鲁"
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "opSkill"
                                                ],
                                                value: function() {
                                                    return _vm_.uluruText;
                                                }
                                            }
                                        }, [])
                                    ]),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "opCard",
                                                "op7"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.chooseChixiao(evt);
                                                }
                                            }
                                        }
                                    }, [
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "opName"
                                                ],
                                                value: "赤枭"
                                            }
                                        }, []),
                                        aiot.__ce__("text", {
                                            __vm__: _vm_,
                                            __opts__: {
                                                classList: [
                                                    "opSkill"
                                                ],
                                                value: function() {
                                                    return _vm_.chixiaoText;
                                                }
                                            }
                                        }, [])
                                    ]),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "btn",
                                                "smallBtn",
                                                "back"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.goHome(evt);
                                                }
                                            },
                                            value: "返回"
                                        }
                                    }, [])
                                ])
                            ];
                        }),
                        aiot.__ci__({
                            __vm__: _vm_,
                            __opts__: {
                                shown: function() {
                                    return _vm_.pagePrep;
                                }
                            }
                        }, function() {
                            return [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "page"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "top"
                                            ],
                                            value: "备战"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "btn",
                                                "b1"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.openShop(evt);
                                                }
                                            },
                                            value: "交易处"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "btn",
                                                "b2"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.openReady(evt);
                                                }
                                            },
                                            value: "准备"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "btn",
                                                "b4"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.goHome(evt);
                                                }
                                            },
                                            value: "返回"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "hint"
                                            ],
                                            value: "进图必须携带子弹，或带刀近战"
                                        }
                                    }, [])
                                ])
                            ];
                        }),
                        aiot.__ci__({
                            __vm__: _vm_,
                            __opts__: {
                                shown: function() {
                                    return _vm_.pageShop;
                                }
                            }
                        }, function() {
                            return [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "page"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "top"
                                            ],
                                            value: function() {
                                                return "交易处 哈夫币" + _vm_.cash;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "shopItem",
                                                "i1"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.buyShop1(evt);
                                                }
                                            },
                                            value: function() {
                                                return _vm_.shop1;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "shopItem",
                                                "i2"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.buyShop2(evt);
                                                }
                                            },
                                            value: function() {
                                                return _vm_.shop2;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "shopItem",
                                                "i3"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.buyShop3(evt);
                                                }
                                            },
                                            value: function() {
                                                return _vm_.shop3;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "shopItem",
                                                "i4"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.buyShop4(evt);
                                                }
                                            },
                                            value: function() {
                                                return _vm_.shop4;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "shopItem",
                                                "i5"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.buyShop5(evt);
                                                }
                                            },
                                            value: function() {
                                                return _vm_.shop5;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "shopItem",
                                                "i6"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.buyShop6(evt);
                                                }
                                            },
                                            value: function() {
                                                return _vm_.shop6;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "btn",
                                                "smallBtn",
                                                "prev"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.shopPrev(evt);
                                                }
                                            },
                                            value: "上页"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "btn",
                                                "smallBtn",
                                                "next"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.shopNext(evt);
                                                }
                                            },
                                            value: "下页"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "btn",
                                                "smallBtn",
                                                "back"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.openPrep(evt);
                                                }
                                            },
                                            value: "返回"
                                        }
                                    }, [])
                                ])
                            ];
                        }),
                        aiot.__ci__({
                            __vm__: _vm_,
                            __opts__: {
                                shown: function() {
                                    return _vm_.pageMode;
                                }
                            }
                        }, function() {
                            return [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "page"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "top"
                                            ],
                                            value: "切换玩法"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "assetLine",
                                                "a1"
                                            ],
                                            value: function() {
                                                return "目前玩法：" + _vm_.currentMode;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "shopItem",
                                                "i4"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.setBeacon(evt);
                                                }
                                            },
                                            value: "烽火地带"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "shopItem",
                                                "i5"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.setBattle(evt);
                                                }
                                            },
                                            value: "大战场"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "shopItem",
                                                "i6"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.setNight(evt);
                                                }
                                            },
                                            value: "黑夜玩法"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "shopItem",
                                                "i7"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.setChallenge(evt);
                                                }
                                            },
                                            value: "烽火挑战"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "info",
                                                "modeInfo"
                                            ],
                                            value: function() {
                                                return _vm_.modeText;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "btn",
                                                "smallBtn",
                                                "back"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.goHome(evt);
                                                }
                                            },
                                            value: "返回"
                                        }
                                    }, [])
                                ])
                            ];
                        }),
                        aiot.__ci__({
                            __vm__: _vm_,
                            __opts__: {
                                shown: function() {
                                    return _vm_.pageChallengeHome;
                                }
                            }
                        }, function() {
                            return [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "page"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "top"
                                            ],
                                            value: "烽火挑战"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "assetLine",
                                                "a1"
                                            ],
                                            value: function() {
                                                return "关卡 " + _vm_.challengeLevel + "/7";
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "assetLine",
                                                "a2"
                                            ],
                                            value: function() {
                                                return "烽火券 " + _vm_.challengeTicket;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "assetLine",
                                                "a3"
                                            ],
                                            value: function() {
                                                return _vm_.challengeText;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "homeBtn",
                                                "hb2"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.startChallenge(evt);
                                                }
                                            },
                                            value: "开始游戏"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "homeBtn",
                                                "hb3"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.openChallengeGuide(evt);
                                                }
                                            },
                                            value: "查看说明"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "btn",
                                                "smallBtn",
                                                "back"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.goHome(evt);
                                                }
                                            },
                                            value: "返回"
                                        }
                                    }, [])
                                ])
                            ];
                        }),
                        aiot.__ci__({
                            __vm__: _vm_,
                            __opts__: {
                                shown: function() {
                                    return _vm_.pageChallengeGuide;
                                }
                            }
                        }, function() {
                            return [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "page"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "top"
                                            ],
                                            value: "烽火挑战说明"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "guide",
                                                "g1"
                                            ],
                                            value: "每个关卡随机地图"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "guide",
                                                "g2"
                                            ],
                                            value: "每次挑战消耗1张烽火券"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "guide",
                                                "g3"
                                            ],
                                            value: "地图中没有普通物资"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "guide",
                                                "g4"
                                            ],
                                            value: "找到曼德尔并成功撤离"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "guide",
                                                "g5"
                                            ],
                                            value: "一共7个关卡，逐关变难"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "btn",
                                                "smallBtn",
                                                "back"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.openChallengeHome(evt);
                                                }
                                            },
                                            value: "返回"
                                        }
                                    }, [])
                                ])
                            ];
                        }),
                        aiot.__ci__({
                            __vm__: _vm_,
                            __opts__: {
                                shown: function() {
                                    return _vm_.pageNightHome;
                                }
                            }
                        }, function() {
                            return [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "page"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "top"
                                            ],
                                            value: "黑夜玩法"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "assetLine",
                                                "a1"
                                            ],
                                            value: "场景更黑，视野更小"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "assetLine",
                                                "a2"
                                            ],
                                            value: "规则和烽火地带一样"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "homeBtn",
                                                "hb2"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.openPrep(evt);
                                                }
                                            },
                                            value: "备战"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "homeBtn",
                                                "hb3"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.openNightMap(evt);
                                                }
                                            },
                                            value: "开始游戏"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "btn",
                                                "smallBtn",
                                                "back"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.goHome(evt);
                                                }
                                            },
                                            value: "返回"
                                        }
                                    }, [])
                                ])
                            ];
                        }),
                        aiot.__ci__({
                            __vm__: _vm_,
                            __opts__: {
                                shown: function() {
                                    return _vm_.pageBattleHome;
                                }
                            }
                        }, function() {
                            return [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "page"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "top"
                                            ],
                                            value: "大战场"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "homeBtn",
                                                "hb1"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.openKingMode(evt);
                                                }
                                            },
                                            value: "胜者为王"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "homeBtn",
                                                "hb2"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.openBattleRank(evt);
                                                }
                                            },
                                            value: "查看段位"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "homeBtn",
                                                "hb3"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.openBattleSwitch(evt);
                                                }
                                            },
                                            value: "切换玩法"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "homeBtn",
                                                "hb4"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.openBattleGuide(evt);
                                                }
                                            },
                                            value: "查看教程"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "btn",
                                                "smallBtn",
                                                "back"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.goHome(evt);
                                                }
                                            },
                                            value: "返回"
                                        }
                                    }, [])
                                ])
                            ];
                        }),
                        aiot.__ci__({
                            __vm__: _vm_,
                            __opts__: {
                                shown: function() {
                                    return _vm_.pageBattleSwitch;
                                }
                            }
                        }, function() {
                            return [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "page"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "top"
                                            ],
                                            value: "切换玩法"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "assetLine",
                                                "a1"
                                            ],
                                            value: "当前：大战场"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "shopItem",
                                                "i4"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.setBeacon(evt);
                                                }
                                            },
                                            value: "切回烽火地带"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "btn",
                                                "smallBtn",
                                                "back"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.openBattleHome(evt);
                                                }
                                            },
                                            value: "返回"
                                        }
                                    }, [])
                                ])
                            ];
                        }),
                        aiot.__ci__({
                            __vm__: _vm_,
                            __opts__: {
                                shown: function() {
                                    return _vm_.pageBattleRank;
                                }
                            }
                        }, function() {
                            return [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "page"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "top"
                                            ],
                                            value: "大战场段位"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "assetLine",
                                                "a1"
                                            ],
                                            value: function() {
                                                return "当前段位：" + _vm_.battleRankName;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "assetLine",
                                                "a2"
                                            ],
                                            value: "胜利升段，失败降段"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "assetLine",
                                                "a3"
                                            ],
                                            value: "列兵不会继续降段"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "assetLine",
                                                "a4"
                                            ],
                                            value: "每周自动降一段"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "btn",
                                                "smallBtn",
                                                "back"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.openBattleHome(evt);
                                                }
                                            },
                                            value: "返回"
                                        }
                                    }, [])
                                ])
                            ];
                        }),
                        aiot.__ci__({
                            __vm__: _vm_,
                            __opts__: {
                                shown: function() {
                                    return _vm_.pageBattleGuide;
                                }
                            }
                        }, function() {
                            return [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "page"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "top"
                                            ],
                                            value: "胜者为王教程"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "guide",
                                                "g1"
                                            ],
                                            value: "我方5人对敌方5人"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "guide",
                                                "g2"
                                            ],
                                            value: "绿色区域出生，红色为敌方"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "guide",
                                                "g3"
                                            ],
                                            value: "靠近红方方块点占领"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "guide",
                                                "g4"
                                            ],
                                            value: "占完敌方3个据点胜利"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "guide",
                                                "g5"
                                            ],
                                            value: "阵亡5秒后我方复活"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "btn",
                                                "smallBtn",
                                                "back"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.openBattleHome(evt);
                                                }
                                            },
                                            value: "返回"
                                        }
                                    }, [])
                                ])
                            ];
                        }),
                        aiot.__ci__({
                            __vm__: _vm_,
                            __opts__: {
                                shown: function() {
                                    return _vm_.pageKingMap;
                                }
                            }
                        }, function() {
                            return [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "page"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "top"
                                            ],
                                            value: "胜者为王 选择地图"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "btn",
                                                "mapB2"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.openKingGun(evt);
                                                }
                                            },
                                            value: "烬区"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "info"
                                            ],
                                            value: function() {
                                                return _vm_.battleText;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "btn",
                                                "smallBtn",
                                                "back"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.openBattleHome(evt);
                                                }
                                            },
                                            value: "返回"
                                        }
                                    }, [])
                                ])
                            ];
                        }),
                        aiot.__ci__({
                            __vm__: _vm_,
                            __opts__: {
                                shown: function() {
                                    return _vm_.pageKingGun;
                                }
                            }
                        }, function() {
                            return [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "page"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "top"
                                            ],
                                            value: "选择枪械"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "shopItem",
                                                "i1"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.battleGunPrev(evt);
                                                }
                                            },
                                            value: "上一把"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "shopItem",
                                                "i2"
                                            ],
                                            value: function() {
                                                return _vm_.battleGunName;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "shopItem",
                                                "i3"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.battleGunNext(evt);
                                                }
                                            },
                                            value: "下一把"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "btn",
                                                "smallBtn",
                                                "confirm"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.startKingBattle(evt);
                                                }
                                            },
                                            value: "开始"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "btn",
                                                "smallBtn",
                                                "back"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.openKingMode(evt);
                                                }
                                            },
                                            value: "返回"
                                        }
                                    }, [])
                                ])
                            ];
                        }),
                        aiot.__ci__({
                            __vm__: _vm_,
                            __opts__: {
                                shown: function() {
                                    return _vm_.pageKingGame;
                                }
                            }
                        }, function() {
                            return [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "game"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("image", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "world"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.battleMapStyle);
                                            },
                                            src: "/assets/battle_jinzone_v096.jpeg"
                                        }
                                    }, []),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "battleBase",
                                                "allyBase"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.allyBase1Style);
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "battleBase",
                                                "allyBase"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.allyBase2Style);
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "battleBase",
                                                "allyBase"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.allyBase3Style);
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "battleBase",
                                                "enemyBase"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.enemyBase1Style);
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "battleBase",
                                                "enemyBase"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.enemyBase2Style);
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "battleBase",
                                                "enemyBase"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.enemyBase3Style);
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "player"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.battlePlayerStyle);
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "bot",
                                                "allyBot"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.ally1Style);
                                            },
                                            value: "友"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "bot",
                                                "allyBot"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.ally2Style);
                                            },
                                            value: "友"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "bot",
                                                "allyBot"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.ally3Style);
                                            },
                                            value: "友"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "bot",
                                                "allyBot"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.ally4Style);
                                            },
                                            value: "友"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "bot",
                                                "enemyBot"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.enemy1Style);
                                            },
                                            value: "敌"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "bot",
                                                "enemyBot"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.enemy2Style);
                                            },
                                            value: "敌"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "bot",
                                                "enemyBot"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.enemy3Style);
                                            },
                                            value: "敌"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "bot",
                                                "enemyBot"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.enemy4Style);
                                            },
                                            value: "敌"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "bot",
                                                "enemyBot"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.enemy5Style);
                                            },
                                            value: "敌"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "hud",
                                                "h1"
                                            ],
                                            value: function() {
                                                return "我方" + _vm_.allyBaseCount + "/3 敌方" + _vm_.enemyBaseCount + "/3";
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "hud",
                                                "h2"
                                            ],
                                            value: function() {
                                                return "生命" + _vm_.battleHp + " 枪" + _vm_.battleGunName;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "hud",
                                                "h3"
                                            ],
                                            value: function() {
                                                return _vm_.battleText;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "joy",
                                                "jUp"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.battleMoveUp(evt);
                                                }
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "joy",
                                                "jDown"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.battleMoveDown(evt);
                                                }
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "joy",
                                                "jLeft"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.battleMoveLeft(evt);
                                                }
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "joy",
                                                "jRight"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.battleMoveRight(evt);
                                                }
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "act",
                                                "attack"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.battleAttack(evt);
                                                }
                                            },
                                            value: "攻"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "act",
                                                "capture"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.battleCapture(evt);
                                                }
                                            },
                                            value: "占"
                                        }
                                    }, [])
                                ])
                            ];
                        }),
                        aiot.__ci__({
                            __vm__: _vm_,
                            __opts__: {
                                shown: function() {
                                    return _vm_.pageBattleResult;
                                }
                            }
                        }, function() {
                            return [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "page"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "top"
                                            ],
                                            value: function() {
                                                return _vm_.battleResultTitle;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "result"
                                            ],
                                            value: function() {
                                                return "当前段位：" + _vm_.battleRankName;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "btn",
                                                "smallBtn",
                                                "confirm"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.openBattleHome(evt);
                                                }
                                            },
                                            value: "返回大战场"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "btn",
                                                "smallBtn",
                                                "back"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.goHome(evt);
                                                }
                                            },
                                            value: "主界面"
                                        }
                                    }, [])
                                ])
                            ];
                        }),
                        aiot.__ci__({
                            __vm__: _vm_,
                            __opts__: {
                                shown: function() {
                                    return _vm_.pageReady;
                                }
                            }
                        }, function() {
                            return [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "page"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "top"
                                            ],
                                            value: "准备 选择带入装备"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "shopItem",
                                                "i1"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.toggleReadyGunCarry(evt);
                                                }
                                            },
                                            value: function() {
                                                return _vm_.readyGunText;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "shopItem",
                                                "i2"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.toggleReadyArmorCarry(evt);
                                                }
                                            },
                                            value: function() {
                                                return _vm_.readyArmorText;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "shopItem",
                                                "i3"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.toggleHelmet(evt);
                                                }
                                            },
                                            value: function() {
                                                return _vm_.helmetName + " " + _vm_.carryHelmetText;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "shopItem",
                                                "i4"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.toggleAmmo(evt);
                                                }
                                            },
                                            value: function() {
                                                return "5.56子弹 " + _vm_.carryAmmo;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "shopItem",
                                                "i5"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.toggleMed(evt);
                                                }
                                            },
                                            value: function() {
                                                return "绷带 " + _vm_.carryMed;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "shopItem",
                                                "i6"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.toggleKnife(evt);
                                                }
                                            },
                                            value: function() {
                                                return "刀 " + _vm_.carryKnifeText;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "shopItem",
                                                "i7"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.openMap(evt);
                                                }
                                            },
                                            value: "进入地图"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "btn",
                                                "smallBtn",
                                                "back"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.openPrep(evt);
                                                }
                                            },
                                            value: "返回"
                                        }
                                    }, [])
                                ])
                            ];
                        }),
                        aiot.__ci__({
                            __vm__: _vm_,
                            __opts__: {
                                shown: function() {
                                    return _vm_.pageMap;
                                }
                            }
                        }, function() {
                            return [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "page"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "top"
                                            ],
                                            value: "选择行动地图"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "btn",
                                                "mapB1"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.startNormal(evt);
                                                }
                                            },
                                            value: "普通大坝"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "btn",
                                                "mapB2"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.startSecret(evt);
                                                }
                                            },
                                            value: "机密大坝"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "btn",
                                                "mapB3"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.startValley(evt);
                                                }
                                            },
                                            value: "普通长弓溪谷"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "btn",
                                                "mapB4"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.startValleySecret(evt);
                                                }
                                            },
                                            value: "机密长弓溪谷"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "btn",
                                                "mapB5"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.startSpace(evt);
                                                }
                                            },
                                            value: "普通航天"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "btn",
                                                "mapB6"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.startSpaceSecret(evt);
                                                }
                                            },
                                            value: "绝密航天"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "info"
                                            ],
                                            value: function() {
                                                return _vm_.mapText;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "btn",
                                                "smallBtn",
                                                "back"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.goHome(evt);
                                                }
                                            },
                                            value: "返回"
                                        }
                                    }, [])
                                ])
                            ];
                        }),
                        aiot.__ci__({
                            __vm__: _vm_,
                            __opts__: {
                                shown: function() {
                                    return _vm_.pageNightMap;
                                }
                            }
                        }, function() {
                            return [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "page"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "top"
                                            ],
                                            value: "黑夜玩法 选择地图"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "btn",
                                                "mapB1"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.startNightNormal(evt);
                                                }
                                            },
                                            value: "普通大坝"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "btn",
                                                "mapB2"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.startNightSecret(evt);
                                                }
                                            },
                                            value: "机密大坝"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "info"
                                            ],
                                            value: function() {
                                                return _vm_.mapText;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "btn",
                                                "smallBtn",
                                                "back"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.openNightHome(evt);
                                                }
                                            },
                                            value: "返回"
                                        }
                                    }, [])
                                ])
                            ];
                        }),
                        aiot.__ci__({
                            __vm__: _vm_,
                            __opts__: {
                                shown: function() {
                                    return _vm_.pageGame;
                                }
                            }
                        }, function() {
                            return [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "game"
                                        ]
                                    }
                                }, [
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.useDamMap;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("image", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "world"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.mapStyle);
                                                    },
                                                    src: "/assets/dam_world_v089.png"
                                                }
                                            }, [])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.useValleyMap;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("image", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "world"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.mapStyle);
                                                    },
                                                    src: "/assets/valley_world_v089.png"
                                                }
                                            }, [])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.useSpaceMap;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("image", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "world"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.mapStyle);
                                                    },
                                                    src: "/assets/space_world_v100.jpeg"
                                                }
                                            }, [])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.mandelOn;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("image", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "mandel"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.mandelStyle);
                                                    },
                                                    src: "/assets/mandel_challenge_v102.jpg"
                                                }
                                            }, [])
                                        ];
                                    }),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "exfil"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.exfilStyle);
                                            }
                                        }
                                    }, []),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.c1on;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("image", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "container"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.c1);
                                                    },
                                                    src: "/assets/container_safe.png"
                                                }
                                            }, [])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.c2on;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("image", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "container"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.c2);
                                                    },
                                                    src: "/assets/container_safe.png"
                                                }
                                            }, [])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.c3on;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("image", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "container"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.c3);
                                                    },
                                                    src: "/assets/container_small.png"
                                                }
                                            }, [])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.c4on;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("image", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "container"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.c4);
                                                    },
                                                    src: "/assets/container_small.png"
                                                }
                                            }, [])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.c5on;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("image", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "container"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.c5);
                                                    },
                                                    src: "/assets/container_small.png"
                                                }
                                            }, [])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.c6on;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("image", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "container"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.c6);
                                                    },
                                                    src: "/assets/container_drawer.png"
                                                }
                                            }, [])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.c7on;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("image", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "container"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.c7);
                                                    },
                                                    src: "/assets/container_drawer.png"
                                                }
                                            }, [])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.c8on;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("image", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "container"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.c8);
                                                    },
                                                    src: "/assets/container_med.png"
                                                }
                                            }, [])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.c9on;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("image", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "container"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.c9);
                                                    },
                                                    src: "/assets/container_lab.png"
                                                }
                                            }, [])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.c10on;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("image", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "container"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.c10);
                                                    },
                                                    src: "/assets/container_drawer.png"
                                                }
                                            }, [])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.c11on;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("image", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "container"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.c11);
                                                    },
                                                    src: "/assets/container_drawer.png"
                                                }
                                            }, [])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.c12on;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("image", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "container"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.c12);
                                                    },
                                                    src: "/assets/container_lab.png"
                                                }
                                            }, [])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.c13on;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("image", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "container"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.c13);
                                                    },
                                                    src: "/assets/container_med.png"
                                                }
                                            }, [])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.c14on;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("image", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "container"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.c14);
                                                    },
                                                    src: "/assets/container_lab.png"
                                                }
                                            }, [])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.c15on;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("image", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "container"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.c15);
                                                    },
                                                    src: "/assets/container_small.png"
                                                }
                                            }, [])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.c16on;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("image", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "container"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.c16);
                                                    },
                                                    src: "/assets/container_drawer.png"
                                                }
                                            }, [])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.c17on;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("image", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "container"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.c17);
                                                    },
                                                    src: "/assets/container_lab.png"
                                                }
                                            }, [])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.c18on;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("image", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "container"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.c18);
                                                    },
                                                    src: "/assets/container_drawer.png"
                                                }
                                            }, [])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.c19on;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("image", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "container"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.c19);
                                                    },
                                                    src: "/assets/container_small.png"
                                                }
                                            }, [])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.c20on;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("image", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "container"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.c20);
                                                    },
                                                    src: "/assets/container_med.png"
                                                }
                                            }, [])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.c21on;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("image", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "container"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.c21);
                                                    },
                                                    src: "/assets/container_lab.png"
                                                }
                                            }, [])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.c22on;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("image", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "container"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.c22);
                                                    },
                                                    src: "/assets/container_drawer.png"
                                                }
                                            }, [])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.c23on;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("image", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "container"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.c23);
                                                    },
                                                    src: "/assets/container_safe.png"
                                                }
                                            }, [])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.c24on;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("image", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "container"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.c24);
                                                    },
                                                    src: "/assets/container_small.png"
                                                }
                                            }, [])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.c25on;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("image", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "container"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.c25);
                                                    },
                                                    src: "/assets/container_weapon_v100.jpg"
                                                }
                                            }, [])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.bossOn;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("image", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "boss"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.bossStyle);
                                                    },
                                                    src: "/assets/dam_boss_v100.jpg"
                                                }
                                            }, [])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.bossOn;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "bossBar"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.bossBarStyle);
                                                    }
                                                }
                                            }, [])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.bossOn;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "bossHpBar"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.bossHpStyle);
                                                    }
                                                }
                                            }, [])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.burnOn;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "burnZone"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.burnStyle);
                                                    }
                                                }
                                            }, [])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.sAlly1on;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "summonAlly"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.sAlly1Style);
                                                    },
                                                    value: "友"
                                                }
                                            }, [])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.sAlly2on;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "summonAlly"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.sAlly2Style);
                                                    },
                                                    value: "友"
                                                }
                                            }, [])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.sAlly3on;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "summonAlly"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.sAlly3Style);
                                                    },
                                                    value: "友"
                                                }
                                            }, [])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.sAlly4on;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "summonAlly"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.sAlly4Style);
                                                    },
                                                    value: "友"
                                                }
                                            }, [])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.sAlly5on;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "summonAlly"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.sAlly5Style);
                                                    },
                                                    value: "友"
                                                }
                                            }, [])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.sAlly6on;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "summonAlly"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.sAlly6Style);
                                                    },
                                                    value: "友"
                                                }
                                            }, [])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.sAlly7on;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "summonAlly"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.sAlly7Style);
                                                    },
                                                    value: "友"
                                                }
                                            }, [])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.en1on;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "enemy"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.en1);
                                                    }
                                                }
                                            }, [])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.en2on;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "enemy"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.en2);
                                                    }
                                                }
                                            }, [])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.en3on;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "enemy",
                                                        "hard"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.en3);
                                                    }
                                                }
                                            }, [])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.nightRaid;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "nightMask"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.nightTopStyle);
                                                    }
                                                }
                                            }, [])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.nightRaid;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "nightMask"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.nightBottomStyle);
                                                    }
                                                }
                                            }, [])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.nightRaid;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "nightMask"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.nightLeftStyle);
                                                    }
                                                }
                                            }, [])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.nightRaid;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("div", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "nightMask"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.nightRightStyle);
                                                    }
                                                }
                                            }, [])
                                        ];
                                    }),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "player"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.playerStyle);
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "hud",
                                                "h1"
                                            ],
                                            value: function() {
                                                return "生命" + _vm_.hp + "/100 甲" + _vm_.armorDur;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "hud",
                                                "h2"
                                            ],
                                            value: function() {
                                                return "弹" + _vm_.inAmmo + " 包" + _vm_.raidLoot;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "hud",
                                                "h3"
                                            ],
                                            value: function() {
                                                return _vm_.raidName;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "hud",
                                                "h4"
                                            ],
                                            value: function() {
                                                return _vm_.skillText;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "hud",
                                                "h5"
                                            ],
                                            value: function() {
                                                return _vm_.weaponText;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "joy",
                                                "jUp"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.moveUp(evt);
                                                }
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "joy",
                                                "jDown"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.moveDown(evt);
                                                }
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "joy",
                                                "jLeft"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.moveLeft(evt);
                                                }
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("div", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "joy",
                                                "jRight"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.moveRight(evt);
                                                }
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "act",
                                                "search"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.search(evt);
                                                }
                                            },
                                            value: "搜"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "act",
                                                "attack"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.attack(evt);
                                                }
                                            },
                                            value: "攻"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "act",
                                                "leave"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.abortRaid(evt);
                                                }
                                            },
                                            value: "撤"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "act",
                                                "skill"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.useSkill(evt);
                                                }
                                            },
                                            value: "技"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "act",
                                                "bandage"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.useBandage(evt);
                                                }
                                            },
                                            value: "扎"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "act",
                                                "bagBtn"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.openRaidBag(evt);
                                                }
                                            },
                                            value: "包"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "act",
                                                "weapon"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.switchWeapon(evt);
                                                }
                                            },
                                            value: "换"
                                        }
                                    }, [])
                                ])
                            ];
                        }),
                        aiot.__ci__({
                            __vm__: _vm_,
                            __opts__: {
                                shown: function() {
                                    return _vm_.pageLoot;
                                }
                            }
                        }, function() {
                            return [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "page"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "top"
                                            ],
                                            value: "容器物资 点击放入背包"
                                        }
                                    }, []),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.pending1on;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "found",
                                                        "f1"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.pendingStyle1);
                                                    },
                                                    events: {
                                                        click: function(evt) {
                                                            return _vm_.takePending1(evt);
                                                        }
                                                    },
                                                    value: function() {
                                                        return _vm_.pending1;
                                                    }
                                                }
                                            }, [])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.pending2on;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "found",
                                                        "f2"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.pendingStyle2);
                                                    },
                                                    events: {
                                                        click: function(evt) {
                                                            return _vm_.takePending2(evt);
                                                        }
                                                    },
                                                    value: function() {
                                                        return _vm_.pending2;
                                                    }
                                                }
                                            }, [])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.pending3on;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "found",
                                                        "f3"
                                                    ],
                                                    style: function() {
                                                        return __webpack_require__.g.$translateStyle$(_vm_.pendingStyle3);
                                                    },
                                                    events: {
                                                        click: function(evt) {
                                                            return _vm_.takePending3(evt);
                                                        }
                                                    },
                                                    value: function() {
                                                        return _vm_.pending3;
                                                    }
                                                }
                                            }, [])
                                        ];
                                    }),
                                    aiot.__ci__({
                                        __vm__: _vm_,
                                        __opts__: {
                                            shown: function() {
                                                return _vm_.pendingEmpty;
                                            }
                                        }
                                    }, function() {
                                        return [
                                            aiot.__ce__("text", {
                                                __vm__: _vm_,
                                                __opts__: {
                                                    classList: [
                                                        "info"
                                                    ],
                                                    value: "这个容器是空的"
                                                }
                                            }, [])
                                        ];
                                    }),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "btn",
                                                "smallBtn",
                                                "back"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.returnGame(evt);
                                                }
                                            },
                                            value: "返回"
                                        }
                                    }, [])
                                ])
                            ];
                        }),
                        aiot.__ci__({
                            __vm__: _vm_,
                            __opts__: {
                                shown: function() {
                                    return _vm_.pageRaidBag;
                                }
                            }
                        }, function() {
                            return [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "page"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "top"
                                            ],
                                            value: function() {
                                                return "本局背包 " + _vm_.raidLoot + "/20";
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "found",
                                                "f1"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.foundStyle1);
                                            },
                                            value: function() {
                                                return _vm_.found1;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "drop",
                                                "d1"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.discardBag1(evt);
                                                }
                                            },
                                            value: "丢"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "found",
                                                "f2"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.foundStyle2);
                                            },
                                            value: function() {
                                                return _vm_.found2;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "drop",
                                                "d2"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.discardBag2(evt);
                                                }
                                            },
                                            value: "丢"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "found",
                                                "f3"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.foundStyle3);
                                            },
                                            value: function() {
                                                return _vm_.found3;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "drop",
                                                "d3"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.discardBag3(evt);
                                                }
                                            },
                                            value: "丢"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "found",
                                                "f4"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.foundStyle4);
                                            },
                                            value: function() {
                                                return _vm_.found4;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "drop",
                                                "d4"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.discardBag4(evt);
                                                }
                                            },
                                            value: "丢"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "btn",
                                                "smallBtn",
                                                "back"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.returnGame(evt);
                                                }
                                            },
                                            value: "返回"
                                        }
                                    }, [])
                                ])
                            ];
                        }),
                        aiot.__ci__({
                            __vm__: _vm_,
                            __opts__: {
                                shown: function() {
                                    return _vm_.pageResult;
                                }
                            }
                        }, function() {
                            return [
                                aiot.__ce__("div", {
                                    __vm__: _vm_,
                                    __opts__: {
                                        classList: [
                                            "page"
                                        ]
                                    }
                                }, [
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "top"
                                            ],
                                            value: function() {
                                                return _vm_.resultTitle;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "result"
                                            ],
                                            value: function() {
                                                return "经验 +" + _vm_.expGain;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "found",
                                                "f1"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.foundStyle1);
                                            },
                                            value: function() {
                                                return _vm_.found1;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "found",
                                                "f2"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.foundStyle2);
                                            },
                                            value: function() {
                                                return _vm_.found2;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "found",
                                                "f3"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.foundStyle3);
                                            },
                                            value: function() {
                                                return _vm_.found3;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "found",
                                                "f4"
                                            ],
                                            style: function() {
                                                return __webpack_require__.g.$translateStyle$(_vm_.foundStyle4);
                                            },
                                            value: function() {
                                                return _vm_.found4;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "result",
                                                "r3txt"
                                            ],
                                            value: function() {
                                                return "行动等级 " + _vm_.level + " 经验 " + _vm_.exp + "/" + _vm_.nextExp;
                                            }
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "btn",
                                                "smallBtn",
                                                "confirm"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.openWarehouse(evt);
                                                }
                                            },
                                            value: "仓库"
                                        }
                                    }, []),
                                    aiot.__ce__("text", {
                                        __vm__: _vm_,
                                        __opts__: {
                                            classList: [
                                                "btn",
                                                "smallBtn",
                                                "back"
                                            ],
                                            events: {
                                                click: function(evt) {
                                                    return _vm_.goHome(evt);
                                                }
                                            },
                                            value: "主界面"
                                        }
                                    }, [])
                                ])
                            ];
                        })
                    ]);
                };
                $app_exports$['entry'] = function($app_exports$) {
                    $app_script$({}, $app_exports$, $app_require$1);
                    $app_exports$.default.template = $app_template$;
                    $app_exports$.default.style = $app_style$;
                };
            })();
        };
        return createPageHandler();
    })(global, globalThis, window, $app_exports$, $app_evaluate$);
}
