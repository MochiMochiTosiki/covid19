(window.webpackJsonp=window.webpackJsonp||[]).push([[5,65,66],{392:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return l}));n(261),n(91);function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return t<0?function(t){return null==t?void 0:t.toFixed(0)}:t>20?function(t){return null==t?void 0:t.toFixed(20)}:function(e){return null==e?void 0:e.toFixed(t)}}function r(){return function(t){return null==t?void 0:t.toLocaleString()}}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(e){return Number(o(t)(e)).toLocaleString("en",{minimumFractionDigits:t})}}},482:function(t,e,n){"use strict";n(18),n(21),n(29),n(33);var o=n(4),r=(n(91),n(22),n(67),n(31),n(245),n(246),n(247),n(248),n(249),n(250),n(251),n(252),n(253),n(254),n(255),n(256),n(257),n(258),n(12),n(30),n(34),n(51),n(17),n(71),n(260),n(1)),l=n(171),c=n(11);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=["sm","md","lg","xl"],v=f.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),h=f.reduce((function(t,e){return t["offset"+Object(c.B)(e)]={type:[String,Number],default:null},t}),{}),C=f.reduce((function(t,e){return t["order"+Object(c.B)(e)]={type:[String,Number],default:null},t}),{}),w={col:Object.keys(v),offset:Object.keys(h),order:Object.keys(C)};function y(t,e,n){var o=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");o+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(o+="-".concat(n)).toLowerCase():o.toLowerCase()}}var k=new Map;e.a=r.default.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},C),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,r=e.children,c=(e.parent,"");for(var m in n)c+=String(n[m]);var d=k.get(c);return d||function(){var t,e;for(e in d=[],w)w[e].forEach((function(t){var o=n[t],r=y(e,t,o);r&&d.push(r)}));var r=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!r||!n.cols},Object(o.a)(t,"col-".concat(n.cols),n.cols),Object(o.a)(t,"offset-".concat(n.offset),n.offset),Object(o.a)(t,"order-".concat(n.order),n.order),Object(o.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),k.set(c,d)}(),t(n.tag,Object(l.a)(data,{class:d}),r)}})},612:function(t,e,n){var content=n(673);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("4dce9c0c",content,!0,{sourceMap:!1})},613:function(t){t.exports=JSON.parse('{"date":"2021/3/18 18:00","data":{"専門家3行コメント":[{"@ja":"新規陽性者数の7週連続の減少傾向は止まり、増加比は100％を超えた。","@en":"The seven-week downward trend in new positive cases has stopped, with the 7-day average now more than 100 percent of the previous week. "},{"@ja":"今後、変異株等により急激に感染の再拡大が起こる可能性がある。","@en":"There could be a rapid resurgence in infections from variants and other reasons."},{"@ja":"今一度、実効性のある感染防止対策を徹底する必要がある。","@en":"There is the need to once again thoroughly implement effective infection prevention measures."}],"(1)新規陽性者数":297.1,"(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 ":52.6,"(3)新規陽性者における接触歴等不明者（人数）":142.1,"(3)新規陽性者における接触歴等不明者（増加比）":106.6,"(4)PCR・抗原検査（陽性率）":3.5,"(4)PCR・抗原検査（検査人数）":6704,"(5)救急医療の東京ルールの適用件数":60.6,"(6)入院患者数":1293,"(6)入院患者確保病床数":5048,"(7)重症患者数":44,"(7)重症患者確保病床数":332,"総括コメント-感染状況":{"date":"2021-03-04","level":4,"display":{"@ja":"感染の再拡大の危険性が高いと思われる","@en":"There is a high risk of a resurgence of the virus."}},"総括コメント-医療提供体制":{"date":"2021-03-04","level":4,"display":{"@ja":"通常の医療が大きく制限されていると思われる","@en":"The provision of non-COVID health care is under pressure."}}}}')},614:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return l}));n(67),n(31);var o=n(392),r=function(t){var e={text:"人",translatable:!0},n={text:"件.reports",translatable:!0},r={text:"%",translatable:!1},l={text:"床",translatable:!0,except:["en"]},c=Object(o.a)(0),m=Object(o.a)(1);return{"(1)新規陽性者数":{value:m(t["(1)新規陽性者数"]),unit:e,bold:!0},"(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 ":{value:m(t["(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 "]),unit:n,bold:!0},"(3)新規陽性者における接触歴等不明者（人数）":{value:m(t["(3)新規陽性者における接触歴等不明者（人数）"]),unit:e,bold:!0},"(3)新規陽性者における接触歴等不明者（増加比）":{value:m(t["(3)新規陽性者における接触歴等不明者（増加比）"]),unit:r,bold:!0},"(4)PCR・抗原検査（検査人数）":{value:m(t["(4)PCR・抗原検査（検査人数）"]),unit:e,bold:!0},"(4)PCR・抗原検査（陽性率）":{value:m(t["(4)PCR・抗原検査（陽性率）"]),unit:r,bold:!0},"(5)救急医療の東京ルールの適用件数":{value:m(t["(5)救急医療の東京ルールの適用件数"]),unit:n,bold:!0},"(6)入院患者数":{value:c(t["(6)入院患者数"]),unit:e,bold:!0},"(6)入院患者確保病床数":{value:c(parseInt("".concat(t["(6)入院患者確保病床数"]).replace(/床$/,""))),unit:l,bold:!1},"(7)重症患者数":{value:c(t["(7)重症患者数"]),unit:e,bold:!0},"(7)重症患者確保病床数":{value:c(parseInt("".concat(t["(7)重症患者確保病床数"]).replace(/床$/,""))),unit:l,bold:!1}}},l=function(t){return{"総括コメント-感染状況":{date:t["総括コメント-感染状況"].date,level:t["総括コメント-感染状況"].level,display:{"@ja":t["総括コメント-感染状況"].display["@ja"],"@en":t["総括コメント-感染状況"].display["@en"]}},"総括コメント-医療提供体制":{date:t["総括コメント-医療提供体制"].date,level:t["総括コメント-医療提供体制"].level,display:{"@ja":t["総括コメント-医療提供体制"].display["@ja"],"@en":t["総括コメント-医療提供体制"].display["@en"]}}}}},658:function(t,e,n){"use strict";n.r(e);n(51),n(44);var o=n(53),r=n(1),l=n(66),c=n(716),m=n(717),d=n(613),f=n(614),v=r.default.extend({components:{AppLink:l.default,MonitoringCommentFrame:m.default,MonitoringCommentCardImageSwipe:c.default},data:function(){return{monitoringComment:Object(f.a)(d.data),mdiChevronRight:o.f}},computed:{translatedMonitoringSummarizedComments:function(){var t=d.data.専門家3行コメント;return["ja","ja-basic"].includes(this.$i18n.locale)?t.map((function(t){return t["@ja"]})):t.map((function(t){return t["@en"]}))}},methods:{commentMonitoring:function(t){return["ja","ja-basic"].includes(this.$root.$i18n.locale)?this.monitoringComment[t].display["@ja"]:this.monitoringComment[t].display["@en"]}}}),h=(n(809),n(7)),C=n(46),w=n.n(C),y=n(482),k=n(365),M=n(597),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"MonitoringComment"},[n("div",{staticClass:"MonitoringComment-heading"},[n("h3",{staticClass:"MonitoringComment-title"},[t._v("\n      "+t._s(t.$t("感染状況・医療提供体制の分析"))+"\n    ")])]),t._v(" "),n("div",{staticClass:"MonitoringComment-comments"},[n("v-row",{staticClass:"MonitoringComment-row"},[n("v-col",{staticClass:"MonitoringComment-col"},[n("v-col",{attrs:{cols:"12"}},[n("p",{staticClass:"MonitoringComment-summary"},t._l(t.translatedMonitoringSummarizedComments,(function(e,i){return n("span",{key:i},[t._v("\n              "+t._s(e)+"\n            ")])})),0),t._v(" "),n("h4",{staticClass:"MonitoringCommentFrame-title"},[t._v(t._s(t.$t("感染状況")))]),t._v(" "),n("monitoring-comment-frame",{attrs:{level:t.monitoringComment["総括コメント-感染状況"].level-1,comment:t.commentMonitoring("総括コメント-感染状況")}})],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("h4",{staticClass:"MonitoringCommentFrame-title"},[t._v("\n            "+t._s(t.$t("医療提供体制"))+"\n          ")]),t._v(" "),n("monitoring-comment-frame",{attrs:{level:t.monitoringComment["総括コメント-医療提供体制"].level-1,comment:t.commentMonitoring("総括コメント-医療提供体制")}})],1)],1),t._v(" "),n("v-col",{staticClass:"MonitoringComment-col"},[n("div",{staticClass:"MonitoringComment-description"},[n("monitoring-comment-card-image-swipe"),t._v(" "),n("v-icon",{attrs:{color:"#D9D9D9"}},[t._v(t._s(t.mdiChevronRight))]),t._v(" "),n("app-link",{attrs:{to:"https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/monitoring.html"}},[t._v("\n            "+t._s(t.$t("専門家による分析・総括コメントの詳細はこちら"))+"\n          ")])],1)])],1)],1)])}),[],!1,null,null,null);e.default=component.exports;w()(component,{MonitoringCommentFrame:n(717).default,MonitoringCommentCardImageSwipe:n(716).default,AppLink:n(66).default}),w()(component,{VCol:y.a,VIcon:k.a,VRow:M.a})},663:function(t){t.exports=JSON.parse('{"date":"2021/3/4 19:02","data":{"images":[{"src":"https://www.seisakukikaku.metro.tokyo.lg.jp/2021/03/images/0318bunseki.JPG","alt":"感染状況・医療提供体制の分析（3月17日時点）","href":"https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/monitoring.html"},{"src":"https://www.seisakukikaku.metro.tokyo.lg.jp/2021/03/images/0318gurafu1-2.JPG","alt":"【感染状況】①-2 新規陽性者数（年代別）","href":"https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/monitoring.html"},{"src":"https://www.seisakukikaku.metro.tokyo.lg.jp/2021/03/images/0318gurafu1-5.JPG","alt":"【感染状況】①52 新規陽性者数（濃厚接触者における感染経路）","href":"https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/monitoring.html"},{"src":"https://www.seisakukikaku.metro.tokyo.lg.jp/2021/03/images/0318gurafu6-3.JPG","alt":"【医療提供体制】⑥-3 検査陽性者の療養状況（公表日の状況）","href":"https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/monitoring.html"}]}}')},672:function(t,e,n){"use strict";n(612)},673:function(t,e,n){var o=n(26)(!1);o.push([t.i,'.MonitoringCommentFrame[data-v-4e992267]{border:1px solid;text-align:center;margin-bottom:10px}.MonitoringCommentFrame>p[data-v-4e992267]{margin-top:auto;margin-bottom:auto;position:relative;font-style:normal;font-weight:600;color:#4d4d4d;padding:10px 0;font-size:1.3rem}.MonitoringCommentFrameAfter[data-v-4e992267]{margin-top:-11px;content:"";padding:7px;border:1px solid}',""]),t.exports=o},716:function(t,e,n){"use strict";n.r(e);var o=n(1),r=n(663),l=o.default.extend({data:function(){return{monitoringCommentImage:r}}}),c=n(7),m=n(46),d=n.n(m),f=n(933),v=n(949),h=n(597),C=n(467),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-carousel",{attrs:{cycle:"",width:"240",height:"180","hide-delimiter-background":""}},t._l(t.monitoringCommentImage.data.images,(function(t,i){return n("v-carousel-item",{key:i},[n("v-sheet",{attrs:{height:"100%",color:"#fff"}},[n("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[n("div",{staticClass:"display-3"},[n("a",{attrs:{target:"_blank",href:t.href}},[n("img",{attrs:{width:"240",height:"180",src:t.src,alt:t.alt}})])])])],1)],1)})),1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VCarousel:f.a,VCarouselItem:v.a,VRow:h.a,VSheet:C.a})},717:function(t,e,n){"use strict";n.r(e);n(91);var o=n(1).default.extend({props:{level:{type:Number,required:!0,default:0},comment:{type:String,required:!0,default:""}},data:function(){return{colors:["#96cd5f","#fffc4e","#fdbe40","#fa1629"]}}}),r=(n(672),n(7)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"MonitoringCommentFrame",style:{borderColor:""+t.colors[t.level]}},[n("p",[t._v(t._s(t.$t(t.comment)))])]),t._v(" "),n("div",{staticClass:"MonitoringCommentFrameAfter",style:{borderColor:""+t.colors[t.level],background:""+t.colors[t.level]}})])}),[],!1,null,"4e992267",null);e.default=component.exports},737:function(t,e,n){var content=n(810);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("69679f9e",content,!0,{sourceMap:!1})},809:function(t,e,n){"use strict";n(737)},810:function(t,e,n){var o=n(26)(!1);o.push([t.i,".MonitoringComment{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px;padding:5px 12px 10px;margin:0 0 10px}.MonitoringComment .MonitoringComment-heading{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap}.MonitoringComment .MonitoringComment-heading .MonitoringComment-title{display:flex;align-items:center;padding:8px 6px;font-size:1.9rem;color:#4d4d4d;font-weight:600}.MonitoringComment .MonitoringComment-comments{margin:0 10px;padding:2px}.MonitoringComment .MonitoringComment-comments .MonitoringComment-row .MonitoringComment-col{float:left;clear:both;padding:3px;min-width:300px}.MonitoringComment .MonitoringComment-comments .MonitoringComment-row .MonitoringComment-col .MonitoringComment-summary{font-size:1.2rem}.MonitoringComment .MonitoringComment-comments .MonitoringComment-row .MonitoringComment-col .MonitoringCommentFrame-title{margin-bottom:1px;color:#707070;font-weight:400;font-size:1.4rem}.MonitoringComment .MonitoringComment-description{padding:6px;text-align:center;font-size:1.4rem}.MonitoringComment .MonitoringComment-description>a{font-size:1.4rem;color:#006ca8!important;text-decoration:none}.MonitoringComment .MonitoringComment-description>a:hover{text-decoration:underline}",""]),t.exports=o}}]);