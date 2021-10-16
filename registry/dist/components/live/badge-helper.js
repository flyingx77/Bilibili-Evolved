!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["live/badge-helper"]=n():e["live/badge-helper"]=n()}(self,(function(){return function(){var e,n,o={551:function(e,n,o){"use strict";o.d(n,{j9:function(){return c},Dx:function(){return d},KK:function(){return s},eB:function(){return p}});var t=o(663),l=o(109),i=coreApis.utils.log;function a(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}class r{constructor(e=!1,n=0){this.isActive=e,this.id=n}static parseJson(e,n){const o=JSON.parse(e);return 0!==o.code?((0,i.logError)(`${n.errorMessage} 错误码:${o.code} ${o.message||""}`),n.errorAction(o)):n.successAction(o)}}class c extends r{constructor(e){const{medal:{medal_id:n,level:o,medal_name:t,wearing_status:l,is_lighted:i},anchor_info:{nick_name:r},room_info:{room_id:c}}=e;super(1===l,n),a(this,"level",void 0),a(this,"name",void 0),a(this,"upName",void 0),a(this,"roomID",void 0),a(this,"isLighted",void 0),this.level=o,this.name=t,this.upName=r,this.roomID=c,this.isLighted=i}async activate(){return r.parseJson(await(0,t.postTextWithCredentials)("https://api.live.bilibili.com/xlive/web-room/v1/fansMedal/wear",(0,l.formData)({medal_id:this.id,csrf_token:(0,l.getCsrf)(),csrf:(0,l.getCsrf)()})),{successAction:()=>(this.isActive=!0,!0),errorAction:()=>!1,errorMessage:"佩戴勋章失败."})}async deactivate(){return r.parseJson(await(0,t.postTextWithCredentials)("https://api.live.bilibili.com/xlive/web-room/v1/fansMedal/take_off",(0,l.formData)({csrf_token:(0,l.getCsrf)(),csrf:(0,l.getCsrf)()})),{successAction:()=>(this.isActive=!1,!0),errorAction:()=>!1,errorMessage:"卸下勋章失败."})}}const s=async()=>{const{getTextWithCredentials:e}=await Promise.resolve().then(o.t.bind(o,663,23));return r.parseJson(await e(`https://api.live.bilibili.com/xlive/app-ucenter/v1/fansMedal/panel?page=1&page_size=256&target_id=${(0,l.getUID)()}`),{successAction:e=>(e.data.list??[]).concat(e.data.special_list??[]).map((e=>new c(e))),errorAction:()=>[],errorMessage:"无法获取勋章列表."})};class d extends r{constructor(e){const{id:n,cid:o,wear:t,css:l,name:i,source:r}=e;super(t,l),a(this,"tid",void 0),a(this,"cid",void 0),a(this,"name",void 0),a(this,"source",void 0),a(this,"imageUrl",void 0),this.tid=n,this.cid=o,this.name=i,this.source=r,d.getImageMap().then((e=>{this.imageUrl=e[this.id]}))}static async getImageMap(){if(void 0===d.imageMap){const{getTextWithCredentials:e}=await Promise.resolve().then(o.t.bind(o,663,23));return r.parseJson(await e("https://api.live.bilibili.com/rc/v1/Title/webTitles"),{successAction:e=>(d.imageMap={},e.data.forEach((e=>{d.imageMap[e.identification]=e.web_pic_url})),d.imageMap),errorAction:()=>({}),errorMessage:"获取头衔图片失败."})}return d.imageMap}async activate(){return r.parseJson(await(0,t.postTextWithCredentials)("https://api.live.bilibili.com/i/ajaxWearTitle",`id=${this.tid}&cid=${this.cid}&csrf=${(0,l.getCsrf)()}&csrf_token=${(0,l.getCsrf)()}`),{successAction:()=>(this.isActive=!0,!0),errorAction:()=>!1,errorMessage:"佩戴头衔失败."})}async deactivate(){return r.parseJson(await(0,t.postTextWithCredentials)("https://api.live.bilibili.com/i/ajaxCancelWearTitle",`csrf=${(0,l.getCsrf)()}&csrf_token=${(0,l.getCsrf)()}`),{successAction:()=>(this.isActive=!1,!0),errorAction:()=>!1,errorMessage:"卸下头衔失败."})}}a(d,"imageMap",void 0);const p=async()=>{const{getTextWithCredentials:e}=await Promise.resolve().then(o.t.bind(o,663,23));return r.parseJson(await e("https://api.live.bilibili.com/i/api/ajaxTitleInfo?page=1&pageSize=256&had=1"),{successAction:e=>lodash.get(e,"data.list",[]).map((e=>new d(e))),errorAction:()=>[],errorMessage:"无法获取头衔列表."})}},422:function(e,n,o){var t=o(645)((function(e){return e[1]}));t.push([e.id,".badge-popup {\n  top: 50%;\n  left: calc(100% + 8px);\n  transform: scale(0.9) translateY(-50%);\n  transform-origin: left;\n  padding: 4px;\n  background-color: #fff;\n  color: black;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);\n  border: 1px solid rgba(136,136,136,0.13333);\n  box-sizing: border-box;\n  border-radius: 4px;\n}\nbody.dark .badge-popup {\n  background-color: #282828;\n  color: #eee;\n  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);\n}\n.badge-popup.open {\n  transform: scale(1) translateY(-50%);\n}\nbody.settings-panel-dock-right .badge-popup {\n  right: calc(100% + 8px);\n  left: unset;\n  transform-origin: right;\n}\n.badge-popup, .badge-popup * {\n  transition: 0.2s ease-out;\n}\n.badge-popup ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n.badge-popup ul li {\n  border-radius: 4px;\n  cursor: pointer;\n  padding: 6px 8px;\n  display: flex;\n  justify-content: center;\n}\n.badge-popup ul li:hover {\n  background-color: rgba(136,136,136,0.13333);\n}\n.badge-popup ul li.active {\n  box-shadow: 0 0 0px 1px var(--theme-color), 0 0 0px 3px var(--theme-color-20);\n}\n.badge-popup ul li.gray:not(:hover) {\n  filter: grayscale(1);\n}\n.badge-popup ul li .title-image {\n  display: inline-block;\n  vertical-align: middle;\n  height: 20px;\n}\n.badge-popup ul li .fans-medal-item {\n  display: flex !important;\n  height: 14px;\n  line-height: 14px;\n  color: #fff;\n  border: 1px solid #48b6a5;\n  border-left: 0;\n  white-space: nowrap;\n  border-radius: 2px;\n  flex-shrink: 0;\n  font-size: 12px;\n}\n.badge-popup ul li .fans-medal-item .label {\n  width: 40px;\n  text-align: center;\n  padding: 0 2px;\n  color: #fff;\n  border-radius: 1px 0 0 1px;\n}\n.badge-popup ul li .fans-medal-item .level {\n  width: 16px;\n  background-color: #fff;\n  text-align: center;\n  color: #48b6a5;\n  border-radius: 0 1px 1px 0;\n}\n.badge-popup ul li .fans-medal-item .label,\n.badge-popup ul li .fans-medal-item .level {\n  cursor: pointer;\n  position: relative;\n  display: block;\n  float: left;\n}\n.badge-popup ul li .level-1 {\n  border-color: #48b6a5;\n  background-color: #48b6a5;\n}\n.badge-popup ul li .level-1 .label {\n  background-color: #48b6a5;\n}\n.badge-popup ul li .level-1 .level {\n  color: #48b6a5;\n}\n.badge-popup ul li .level-2 {\n  border-color: #48b6a5;\n  background-color: #48b6a5;\n}\n.badge-popup ul li .level-2 .label {\n  background-color: #48b6a5;\n}\n.badge-popup ul li .level-2 .level {\n  color: #48b6a5;\n}\n.badge-popup ul li .level-3 {\n  border-color: #48b6a5;\n  background-color: #48b6a5;\n}\n.badge-popup ul li .level-3 .label {\n  background-color: #48b6a5;\n}\n.badge-popup ul li .level-3 .level {\n  color: #48b6a5;\n}\n.badge-popup ul li .level-4 {\n  border-color: #48b6a5;\n  background-color: #48b6a5;\n}\n.badge-popup ul li .level-4 .label {\n  background-color: #48b6a5;\n}\n.badge-popup ul li .level-4 .level {\n  color: #48b6a5;\n}\n.badge-popup ul li .level-5 {\n  border-color: #5896de;\n  background-color: #5896de;\n}\n.badge-popup ul li .level-5 .label {\n  background-color: #5896de;\n}\n.badge-popup ul li .level-5 .level {\n  color: #5896de;\n}\n.badge-popup ul li .level-6 {\n  border-color: #5896de;\n  background-color: #5896de;\n}\n.badge-popup ul li .level-6 .label {\n  background-color: #5896de;\n}\n.badge-popup ul li .level-6 .level {\n  color: #5896de;\n}\n.badge-popup ul li .level-7 {\n  border-color: #5896de;\n  background-color: #5896de;\n}\n.badge-popup ul li .level-7 .label {\n  background-color: #5896de;\n}\n.badge-popup ul li .level-7 .level {\n  color: #5896de;\n}\n.badge-popup ul li .level-8 {\n  border-color: #5896de;\n  background-color: #5896de;\n}\n.badge-popup ul li .level-8 .label {\n  background-color: #5896de;\n}\n.badge-popup ul li .level-8 .level {\n  color: #5896de;\n}\n.badge-popup ul li .level-9 {\n  border-color: #a068f1;\n  background-color: #a068f1;\n}\n.badge-popup ul li .level-9 .label {\n  background-color: #a068f1;\n}\n.badge-popup ul li .level-9 .level {\n  color: #a068f1;\n}\n.badge-popup ul li .level-10 {\n  border-color: #a068f1;\n  background-color: #a068f1;\n}\n.badge-popup ul li .level-10 .label {\n  background-color: #a068f1;\n}\n.badge-popup ul li .level-10 .level {\n  color: #a068f1;\n}\n.badge-popup ul li .level-11 {\n  border-color: #a068f1;\n  background-color: #a068f1;\n}\n.badge-popup ul li .level-11 .label {\n  background-color: #a068f1;\n}\n.badge-popup ul li .level-11 .level {\n  color: #a068f1;\n}\n.badge-popup ul li .level-12 {\n  border-color: #a068f1;\n  background-color: #a068f1;\n}\n.badge-popup ul li .level-12 .label {\n  background-color: #a068f1;\n}\n.badge-popup ul li .level-12 .level {\n  color: #a068f1;\n}\n.badge-popup ul li .level-13 {\n  border-color: #ff86b2;\n  background-color: #ff86b2;\n}\n.badge-popup ul li .level-13 .label {\n  background-color: #ff86b2;\n}\n.badge-popup ul li .level-13 .level {\n  color: #ff86b2;\n}\n.badge-popup ul li .level-14 {\n  border-color: #ff86b2;\n  background-color: #ff86b2;\n}\n.badge-popup ul li .level-14 .label {\n  background-color: #ff86b2;\n}\n.badge-popup ul li .level-14 .level {\n  color: #ff86b2;\n}\n.badge-popup ul li .level-15 {\n  border-color: #ff86b2;\n  background-color: #ff86b2;\n}\n.badge-popup ul li .level-15 .label {\n  background-color: #ff86b2;\n}\n.badge-popup ul li .level-15 .level {\n  color: #ff86b2;\n}\n.badge-popup ul li .level-16 {\n  border-color: #ff86b2;\n  background-color: #ff86b2;\n}\n.badge-popup ul li .level-16 .label {\n  background-color: #ff86b2;\n}\n.badge-popup ul li .level-16 .level {\n  color: #ff86b2;\n}\n.badge-popup ul li .level-17 {\n  border-color: #f6be18;\n  background-color: #f6be18;\n}\n.badge-popup ul li .level-17 .label {\n  background-color: #f6be18;\n}\n.badge-popup ul li .level-17 .level {\n  color: #f6be18;\n}\n.badge-popup ul li .level-18 {\n  border-color: #f6be18;\n  background-color: #f6be18;\n}\n.badge-popup ul li .level-18 .label {\n  background-color: #f6be18;\n}\n.badge-popup ul li .level-18 .level {\n  color: #f6be18;\n}\n.badge-popup ul li .level-19 {\n  border-color: #f6be18;\n  background-color: #f6be18;\n}\n.badge-popup ul li .level-19 .label {\n  background-color: #f6be18;\n}\n.badge-popup ul li .level-19 .level {\n  color: #f6be18;\n}\n.badge-popup ul li .level-20 {\n  border-color: #f6be18;\n  background-color: #f6be18;\n}\n.badge-popup ul li .level-20 .label {\n  background-color: #f6be18;\n}\n.badge-popup ul li .level-20 .level {\n  color: #f6be18;\n}",""]),e.exports=t},645:function(e){"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var o=e(n);return n[2]?"@media ".concat(n[2]," {").concat(o,"}"):o})).join("")},
// eslint-disable-next-line func-names
n.i=function(e,o,t){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var l={};if(t)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var a=this[i][0];null!=a&&(l[a]=!0)}for(var r=0;r<e.length;r++){var c=[].concat(e[r]);t&&l[c[0]]||(o&&(c[2]?c[2]="".concat(o," and ").concat(c[2]):c[2]=o),n.push(c))}},n}},379:function(e,n,o){"use strict";var t,l=function(){return void 0===t&&(
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// @see https://github.com/webpack-contrib/style-loader/issues/177
t=Boolean(window&&document&&document.all&&!window.atob)),t},i=function(){var e={};return function(n){if(void 0===e[n]){var o=document.querySelector(n);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}e[n]=o}return e[n]}}(),a=[];function r(e){for(var n=-1,o=0;o<a.length;o++)if(a[o].identifier===e){n=o;break}return n}function c(e,n){for(var o={},t=[],l=0;l<e.length;l++){var i=e[l],c=n.base?i[0]+n.base:i[0],s=o[c]||0,d="".concat(c," ").concat(s);o[c]=s+1;var p=r(d),u={css:i[1],media:i[2],sourceMap:i[3]};-1!==p?(a[p].references++,a[p].updater(u)):a.push({identifier:d,updater:v(u,n),references:1}),t.push(d)}return t}function s(e){var n=document.createElement("style"),t=e.attributes||{};if(void 0===t.nonce){var l=o.nc;l&&(t.nonce=l)}if(Object.keys(t).forEach((function(e){n.setAttribute(e,t[e])})),"function"==typeof e.insert)e.insert(n);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var d,p=(d=[],function(e,n){return d[e]=n,d.filter(Boolean).join("\n")});function u(e,n,o,t){var l=o?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(e.styleSheet)e.styleSheet.cssText=p(n,l);else{var i=document.createTextNode(l),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function b(e,n,o){var t=o.css,l=o.media,i=o.sourceMap;if(l?e.setAttribute("media",l):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var f=null,g=0;function v(e,n){var o,t,l;if(n.singleton){var i=g++;o=f||(f=s(n)),t=u.bind(null,o,i,!1),l=u.bind(null,o,i,!0)}else o=s(n),t=b.bind(null,o,n),l=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(o)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else l()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=l());var o=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var t=0;t<o.length;t++){var l=r(o[t]);a[l].references--}for(var i=c(e,n),s=0;s<o.length;s++){var d=r(o[s]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}o=i}}}},757:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return b}});var t=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{staticClass:"multiple-widgets"},[o("VPopup",{ref:"medalPopup",staticClass:"badge-popup medal",attrs:{"trigger-element":e.$refs.medalButton},model:{value:e.medalOpen,callback:function(n){e.medalOpen=n},expression:"medalOpen"}},[o("ul",e._l(e.medalList,(function(n){return o("li",{key:n.id,class:{active:n.isActive,gray:!n.isLighted},attrs:{"data-id":n.id,title:n.upName},on:{click:function(o){return e.toggleBadge(n,e.medalList)}}},[o("div",{staticClass:"fans-medal-item",class:["level-"+n.level]},[o("span",{staticClass:"label"},[e._v(e._s(n.name))]),e._v(" "),o("span",{staticClass:"level"},[e._v(e._s(n.level))])])])})),0)]),e._v(" "),o("DefaultWidget",{ref:"medalButton",attrs:{icon:"mdi-medal"},on:{click:function(n){e.medalOpen=!e.medalOpen}}},[o("span",[e._v("更换勋章")])]),e._v(" "),o("VPopup",{ref:"titlePopup",staticClass:"badge-popup title",attrs:{"trigger-element":e.$refs.titleButton},model:{value:e.titleOpen,callback:function(n){e.titleOpen=n},expression:"titleOpen"}},[o("ul",e._l(e.titleList,(function(n){return o("li",{key:n.id,class:{active:n.isActive},attrs:{"data-id":n.id},on:{click:function(o){return e.toggleBadge(n,e.titleList)}}},[o("img",{staticClass:"title-image",attrs:{src:n.imageUrl}})])})),0)]),e._v(" "),o("DefaultWidget",{ref:"titleButton",attrs:{icon:"mdi-script-outline"},on:{click:function(n){e.titleOpen=!e.titleOpen}}},[o("span",[e._v("更换头衔")])])],1)};t._withStripped=!0;var l=coreApis.ui,i=o(551),a=Vue.extend({components:{DefaultWidget:l.DefaultWidget,VPopup:l.VPopup},data:()=>({medalList:[],titleList:[],medalOpen:!1,titleOpen:!1}),async mounted(){this.loadMedalList(),await i.Dx.getImageMap(),this.loadTitleList()},methods:{async loadMedalList(){this.medalList=await(0,i.KK)()},async loadTitleList(){this.titleList=await(0,i.eB)()},async toggleBadge(e,n){if(console.log(e),e.isActive)e.isActive=!1,await e.deactivate();else{const t=n.find((e=>e.isActive));if(t&&(t.isActive=!1),e.isActive=!0,await e.activate(),e instanceof i.j9){const{getComponentSettings:n}=await Promise.resolve().then(o.t.bind(o,407,23));n("badgeHelper").options.defaultMedalID=e.id}}e instanceof i.j9?await this.loadMedalList():e instanceof i.Dx&&await this.loadTitleList()}}}),r=o(379),c=o.n(r),s=o(422),d=o.n(s),p={insert:"head",singleton:!1};c()(d(),p),d().locals;var u=function(e,n,o,t,l,i,a,r){var c,s="function"==typeof e?e.options:e;if(n&&(s.render=n,s.staticRenderFns=o,s._compiled=!0),t&&(s.functional=!0),i&&(s._scopeId="data-v-"+i),a?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),l&&l.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},s._ssrRegister=c):l&&(c=r?function(){l.call(this,(s.functional?this.parent:this).$root.$options.shadowRoot)}:l),c)if(s.functional){s._injectStyles=c;var d=s.render;s.render=function(e,n){return c.call(n),d(e,n)}}else{var p=s.beforeCreate;s.beforeCreate=p?[].concat(p,c):[c]}return{exports:e,options:s}}(a,t,[],!1,null,null,null);u.options.__file="registry/lib/components/live/badge-helper/BadgeHelper.vue";var b=u.exports},663:function(e){"use strict";e.exports=coreApis.ajax},407:function(e){"use strict";e.exports=coreApis.settings},109:function(e){"use strict";e.exports=coreApis.utils}},t={};function l(e){var n=t[e];if(void 0!==n)return n.exports;var i=t[e]={id:e,exports:{}};return o[e](i,i.exports,l),i.exports}l.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(n,{a:n}),n},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},l.t=function(o,t){if(1&t&&(o=this(o)),8&t)return o;if("object"==typeof o&&o){if(4&t&&o.__esModule)return o;if(16&t&&"function"==typeof o.then)return o}var i=Object.create(null);l.r(i);var a={};e=e||[null,n({}),n([]),n(n)];for(var r=2&t&&o;"object"==typeof r&&!~e.indexOf(r);r=n(r))Object.getOwnPropertyNames(r).forEach((function(e){a[e]=function(){return o[e]}}));return a.default=function(){return o},l.d(i,a),i},l.d=function(e,n){for(var o in n)l.o(n,o)&&!l.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return function(){"use strict";l.d(i,{component:function(){return o}});var e=l(109),n=l(551);const o={name:"badgeHelper",displayName:"直播勋章快速更换",description:{"zh-CN":"在直播区中, 可从功能面板中直接切换勋章和头衔."},entry:()=>(async()=>{const{getUID:e}=await Promise.resolve().then(l.t.bind(l,109,23));if(!e())return;const{getComponentSettings:o}=await Promise.resolve().then(l.t.bind(l,407,23)),{options:t}=o("badgeHelper");if(!t.autoMatchMedal)return;const i=document.URL.match(/^https:\/\/live\.bilibili\.com\/(blanc\/)?([\d]+)/);if(!i)return;const a=parseInt(i[2]);if(Number.isNaN(a))return void console.warn("roomID not found");const r=await(0,n.KK)();if(!t.defaultMedalID){const e=r.find((e=>e.isActive));e&&(t.defaultMedalID=e.id,console.log(`set defaultMedalID to activeMedal (${e.id})`))}const c=t.defaultMedalID?r.find((e=>e.id===t.defaultMedalID)):r.find((e=>e.isActive)),s=r.find((e=>e.roomID===a));s?(await s.activate(),console.log(`activated matchMedal (${s.id})`)):c&&(await c.activate(),console.log(`no matchMedal, fallback to defaultMedal (${c.id})`))})(),reload:e.none,unload:e.none,tags:[componentsTags.live],widget:{component:()=>Promise.resolve().then(l.bind(l,757)).then((e=>e.default)),condition:()=>Boolean((0,e.getUID)())},options:{autoMatchMedal:{defaultValue:!0,displayName:"自动佩戴当前直播间勋章"},defaultMedalID:{displayName:"默认勋章ID",hidden:!0,defaultValue:0}},urlInclude:["//live.bilibili.com"]}}(),i=i.component}()}));