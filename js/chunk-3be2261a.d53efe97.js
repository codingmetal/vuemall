(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3be2261a"],{"0316":function(t,e,n){"use strict";var r=n("ab5a"),o=n.n(r);o.a},"057f":function(t,e,n){var r=n("fc6a"),o=n("241c").f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return o(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?s(t):o(r(t))}},1953:function(t,e,n){"use strict";var r=n("e8aa"),o=n.n(r);o.a},"25f0":function(t,e,n){"use strict";var r=n("6eeb"),o=n("825a"),i=n("d039"),a=n("ad6d"),s="toString",c=RegExp.prototype,f=c[s],u=i((function(){return"/a/b"!=f.call({source:"a",flags:"b"})})),l=f.name!=s;(u||l)&&r(RegExp.prototype,s,(function(){var t=o(this),e=String(t.source),n=t.flags,r=String(void 0===n&&t instanceof RegExp&&!("flags"in c)?a.call(t):n);return"/"+e+"/"+r}),{unsafe:!0})},"28f1":function(t,e,n){},"3ca3":function(t,e,n){"use strict";var r=n("6547").charAt,o=n("69f3"),i=n("7dd0"),a="String Iterator",s=o.set,c=o.getterFor(a);i(String,"String",(function(t){s(this,{type:a,string:String(t),index:0})}),(function(){var t,e=c(this),n=e.string,o=e.index;return o>=n.length?{value:void 0,done:!0}:(t=r(n,o),e.index+=t.length,{value:t,done:!1})}))},"4df4":function(t,e,n){"use strict";var r=n("0366"),o=n("7b0b"),i=n("9bdd"),a=n("e95a"),s=n("50c4"),c=n("8418"),f=n("35a1");t.exports=function(t){var e,n,u,l,d,b,p=o(t),m="function"==typeof this?this:Array,h=arguments.length,g=h>1?arguments[1]:void 0,v=void 0!==g,y=f(p),S=0;if(v&&(g=r(g,h>2?arguments[2]:void 0,2)),void 0==y||m==Array&&a(y))for(e=s(p.length),n=new m(e);e>S;S++)b=v?g(p[S],S):p[S],c(n,S,b);else for(l=y.call(p),d=l.next,n=new m;!(u=d.call(l)).done;S++)b=v?i(l,g,[u.value,S],!0):u.value,c(n,S,b);return n.length=S,n}},5827:function(t,e,n){"use strict";var r=n("b82c"),o=n.n(r);o.a},"5ae2":function(t,e,n){t.exports=n.p+"img/backtop.a3f44d21.svg"},"5cbe":function(t,e,n){t.exports=n.p+"img/recommend_bg.1e081077.jpg"},"622a":function(t,e,n){"use strict";var r=n("e8fb"),o=n.n(r);o.a},6547:function(t,e,n){var r=n("a691"),o=n("1d80"),i=function(t){return function(e,n){var i,a,s=String(o(e)),c=r(n),f=s.length;return c<0||c>=f?t?"":void 0:(i=s.charCodeAt(c),i<55296||i>56319||c+1===f||(a=s.charCodeAt(c+1))<56320||a>57343?t?s.charAt(c):i:t?s.slice(c,c+2):a-56320+(i-55296<<10)+65536)}};t.exports={codeAt:i(!1),charAt:i(!0)}},"746f":function(t,e,n){var r=n("428f"),o=n("5135"),i=n("e538"),a=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});o(e,t)||a(e,t,{value:i.f(t)})}},8418:function(t,e,n){"use strict";var r=n("c04e"),o=n("9bf2"),i=n("5c6c");t.exports=function(t,e,n){var a=r(e);a in t?o.f(t,a,i(0,n)):t[a]=n}},a4d3:function(t,e,n){"use strict";var r=n("23e7"),o=n("da84"),i=n("d066"),a=n("c430"),s=n("83ab"),c=n("4930"),f=n("fdbf"),u=n("d039"),l=n("5135"),d=n("e8b5"),b=n("861d"),p=n("825a"),m=n("7b0b"),h=n("fc6a"),g=n("c04e"),v=n("5c6c"),y=n("7c73"),S=n("df75"),w=n("241c"),L=n("057f"),k=n("7418"),O=n("06cf"),T=n("9bf2"),x=n("d1e7"),C=n("9112"),A=n("6eeb"),j=n("5692"),$=n("f772"),M=n("d012"),_=n("90e3"),G=n("b622"),E=n("e538"),P=n("746f"),H=n("d44e"),R=n("69f3"),N=n("b727").forEach,D=$("hidden"),I="Symbol",V="prototype",F=G("toPrimitive"),B=R.set,J=R.getterFor(I),U=Object[V],q=o.Symbol,Q=i("JSON","stringify"),W=O.f,z=T.f,K=L.f,X=x.f,Y=j("symbols"),Z=j("op-symbols"),tt=j("string-to-symbol-registry"),et=j("symbol-to-string-registry"),nt=j("wks"),rt=o.QObject,ot=!rt||!rt[V]||!rt[V].findChild,it=s&&u((function(){return 7!=y(z({},"a",{get:function(){return z(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=W(U,e);r&&delete U[e],z(t,e,n),r&&t!==U&&z(U,e,r)}:z,at=function(t,e){var n=Y[t]=y(q[V]);return B(n,{type:I,tag:t,description:e}),s||(n.description=e),n},st=f?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof q},ct=function(t,e,n){t===U&&ct(Z,e,n),p(t);var r=g(e,!0);return p(n),l(Y,r)?(n.enumerable?(l(t,D)&&t[D][r]&&(t[D][r]=!1),n=y(n,{enumerable:v(0,!1)})):(l(t,D)||z(t,D,v(1,{})),t[D][r]=!0),it(t,r,n)):z(t,r,n)},ft=function(t,e){p(t);var n=h(e),r=S(n).concat(pt(n));return N(r,(function(e){s&&!lt.call(n,e)||ct(t,e,n[e])})),t},ut=function(t,e){return void 0===e?y(t):ft(y(t),e)},lt=function(t){var e=g(t,!0),n=X.call(this,e);return!(this===U&&l(Y,e)&&!l(Z,e))&&(!(n||!l(this,e)||!l(Y,e)||l(this,D)&&this[D][e])||n)},dt=function(t,e){var n=h(t),r=g(e,!0);if(n!==U||!l(Y,r)||l(Z,r)){var o=W(n,r);return!o||!l(Y,r)||l(n,D)&&n[D][r]||(o.enumerable=!0),o}},bt=function(t){var e=K(h(t)),n=[];return N(e,(function(t){l(Y,t)||l(M,t)||n.push(t)})),n},pt=function(t){var e=t===U,n=K(e?Z:h(t)),r=[];return N(n,(function(t){!l(Y,t)||e&&!l(U,t)||r.push(Y[t])})),r};if(c||(q=function(){if(this instanceof q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=_(t),n=function(t){this===U&&n.call(Z,t),l(this,D)&&l(this[D],e)&&(this[D][e]=!1),it(this,e,v(1,t))};return s&&ot&&it(U,e,{configurable:!0,set:n}),at(e,t)},A(q[V],"toString",(function(){return J(this).tag})),A(q,"withoutSetter",(function(t){return at(_(t),t)})),x.f=lt,T.f=ct,O.f=dt,w.f=L.f=bt,k.f=pt,E.f=function(t){return at(G(t),t)},s&&(z(q[V],"description",{configurable:!0,get:function(){return J(this).description}}),a||A(U,"propertyIsEnumerable",lt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:q}),N(S(nt),(function(t){P(t)})),r({target:I,stat:!0,forced:!c},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var n=q(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!s},{create:ut,defineProperty:ct,defineProperties:ft,getOwnPropertyDescriptor:dt}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:bt,getOwnPropertySymbols:pt}),r({target:"Object",stat:!0,forced:u((function(){k.f(1)}))},{getOwnPropertySymbols:function(t){return k.f(m(t))}}),Q){var mt=!c||u((function(){var t=q();return"[null]"!=Q([t])||"{}"!=Q({a:t})||"{}"!=Q(Object(t))}));r({target:"JSON",stat:!0,forced:mt},{stringify:function(t,e,n){var r,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(r=e,(b(e)||void 0!==t)&&!st(t))return d(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!st(e))return e}),o[1]=e,Q.apply(null,o)}})}q[V][F]||C(q[V],F,q[V].valueOf),H(q,I),M[D]=!0},a630:function(t,e,n){var r=n("23e7"),o=n("4df4"),i=n("1c7e"),a=!i((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:a},{from:o})},ab5a:function(t,e,n){},ace4:function(t,e,n){"use strict";var r=n("28f1"),o=n.n(r);o.a},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b3d7:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("nav-bar",{staticClass:"home-nav",scopedSlots:t._u([{key:"center",fn:function(){return[n("p",[t._v("VueMall")])]},proxy:!0}])}),n("tab-control",{directives:[{name:"show",rawName:"v-show",value:t.tabSticky,expression:"tabSticky"}],ref:"stickTabControl",staticClass:"tab-sticky",attrs:{"tab-list":t.tabList},on:{toggleList:t.toggleList}}),n("scroll",{ref:"sc",staticClass:"content",on:{scroll:t.contentScroll,moreList:t.getMoreGoods}},[n("my-swipe",{attrs:{"emit-name":"imgLoaded","with-link":!0,banners:t.banners}}),n("recommend-list",{attrs:{recommends:t.recommends}}),n("feature-list"),n("tab-control",{ref:"tabControl",staticClass:"home-tab-control",attrs:{"tab-list":t.tabList},on:{toggleList:t.toggleList}}),n("goods-list",{attrs:{showGoods:t.showGoods}})],1),n("back-top",{attrs:{isShow:t.backTopShow},on:{backTop:t.backTop}})],1)},o=[];function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t){if(Array.isArray(t))return i(t)}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("d3b7"),n("3ca3"),n("ddb0");function s(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}n("fb6a"),n("b0c0"),n("25f0");function c(t,e){if(t){if("string"===typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t){return a(t)||s(t)||c(t)||f()}var l=n("1bab"),d="/home/multidata",b="home/data",p={getMultiData:function(){return Object(l["a"])({url:d})},getSomeGoods:function(t,e){return Object(l["a"])({url:b,params:{type:t,page:e}})}},m=n("325c"),h=n("5d17"),g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"back-top",class:{hide:!t.isShow},on:{click:t.backTop}},[r("img",{attrs:{src:n("5ae2")}})])},v=[],y={name:"BackTop",props:{isShow:{type:Boolean,default:function(){return!1}}},methods:{backTop:function(){console.log("backtop"),this.$emit("backTop")}}},S=y,w=(n("5827"),n("2877")),L=Object(w["a"])(S,g,v,!1,null,"37c99ba0",null),k=L.exports,O=n("8691"),T=n("f1d4"),x=n("9bd0"),C=n("6d71"),A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"recommend-list"},t._l(t.recommends,(function(e){return n("recommend-item",[n("a",{attrs:{href:e.link}},[n("img",{attrs:{src:e.image}}),n("p",[t._v(t._s(e.title))])])])})),1)},j=[],$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"recommend-item"},[t._t("default")],2)},M=[],_={name:"RecommendItem"},G=_,E=(n("622a"),Object(w["a"])(G,$,M,!1,null,"271bf528",null)),P=E.exports,H={name:"RecommendList",props:{recommends:Array},components:{RecommendItem:P}},R=H,N=(n("0316"),Object(w["a"])(R,A,j,!1,null,"6bef18ca",null)),D=N.exports,I=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},V=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"feature"},[r("a",{attrs:{href:"www.baidu.com"}},[r("img",{attrs:{src:n("5cbe")}})])])}],F={name:"FeatureList"},B=F,J=(n("ace4"),Object(w["a"])(B,I,V,!1,null,"42258052",null)),U=J.exports,q={name:"Home",components:{BackTop:k,Scroll:h["a"],GoodsList:C["a"],TabControl:x["a"],NavBar:T["a"],FeatureList:U,RecommendList:D,MySwipe:O["a"]},data:function(){return{banners:[],recommends:[],tabList:[{title:"流行",type:"pop"},{title:"新款",type:"new"},{title:"精选",type:"sell"}],showType:"pop",backTopShow:!1,goods:{pop:{page:0,list:[]},new:{page:0,list:[]},sell:{page:0,list:[]}},stickyOffset:0,tabSticky:!1,currentScroll:0}},computed:{showGoods:function(){return this.goods[this.showType].list}},methods:{getHomeMultiData:function(){var t=this;p.getMultiData().then((function(e){t.banners=e.data.banner.list,t.recommends=e.data.recommend.list})).catch((function(t){console.log(t)}))},getHomeGoods:function(t,e){var n=this,r=this.goods[t].page+1;p.getSomeGoods(t,r).then((function(r){var o;(o=n.goods[t].list).push.apply(o,u(r.data.list)),n.goods[t].page++,n.$refs.sc.refreshScroll(),void 0!=e&&e()})).catch((function(t){console.log(t)}))},getMoreGoods:function(){var t=this;this.getHomeGoods(this.showType,(function(){t.$refs.sc.finishPullUp()}))},toggleList:function(t,e){this.showType=t,this.$refs.stickTabControl.currentIndex=e,this.$refs.tabControl.currentIndex=e},backTop:function(){this.$refs.sc.myScrollTo(0,0,500)},contentScroll:function(t){this.backTopShow=t.y<-500,this.tabSticky=t.y<-this.stickyOffset},getStickyOffset:function(){this.stickyOffset=this.$refs.tabControl.$el.offsetTop}},created:function(){this.getHomeMultiData(),this.getHomeGoods("pop"),this.getHomeGoods("new"),this.getHomeGoods("sell")},mounted:function(){var t=this,e=Object(m["a"])(this.$refs.sc.refreshScroll,500);this.$bus.$on("imgLoaded",(function(){e(t.getStickyOffset)}))},destroyed:function(){console.log("home destroyed")},deactivated:function(){console.log("home deactivated"),this.currentScroll=this.$refs.sc.getScrollOffset()},activated:function(){console.log("home activated"),this.$refs.sc.myScrollTo(0,this.currentScroll,1),this.$refs.sc.refreshScroll()}},Q=q,W=(n("1953"),Object(w["a"])(Q,r,o,!1,null,"1682a7cf",null));e["default"]=W.exports},b82c:function(t,e,n){},d28b:function(t,e,n){var r=n("746f");r("iterator")},ddb0:function(t,e,n){var r=n("da84"),o=n("fdbc"),i=n("e260"),a=n("9112"),s=n("b622"),c=s("iterator"),f=s("toStringTag"),u=i.values;for(var l in o){var d=r[l],b=d&&d.prototype;if(b){if(b[c]!==u)try{a(b,c,u)}catch(m){b[c]=u}if(b[f]||a(b,f,l),o[l])for(var p in i)if(b[p]!==i[p])try{a(b,p,i[p])}catch(m){b[p]=i[p]}}}},e01a:function(t,e,n){"use strict";var r=n("23e7"),o=n("83ab"),i=n("da84"),a=n("5135"),s=n("861d"),c=n("9bf2").f,f=n("e893"),u=i.Symbol;if(o&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new u(t):void 0===t?u():u(t);return""===t&&(l[e]=!0),e};f(d,u);var b=d.prototype=u.prototype;b.constructor=d;var p=b.toString,m="Symbol(test)"==String(u("test")),h=/^Symbol\((.*)\)[^)]+$/;c(b,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=p.call(t);if(a(l,t))return"";var n=m?e.slice(7,-1):e.replace(h,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:d})}},e538:function(t,e,n){var r=n("b622");e.f=r},e8aa:function(t,e,n){},e8fb:function(t,e,n){},fb6a:function(t,e,n){"use strict";var r=n("23e7"),o=n("861d"),i=n("e8b5"),a=n("23cb"),s=n("50c4"),c=n("fc6a"),f=n("8418"),u=n("b622"),l=n("1dde"),d=n("ae40"),b=l("slice"),p=d("slice",{ACCESSORS:!0,0:0,1:2}),m=u("species"),h=[].slice,g=Math.max;r({target:"Array",proto:!0,forced:!b||!p},{slice:function(t,e){var n,r,u,l=c(this),d=s(l.length),b=a(t,d),p=a(void 0===e?d:e,d);if(i(l)&&(n=l.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?o(n)&&(n=n[m],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return h.call(l,b,p);for(r=new(void 0===n?Array:n)(g(p-b,0)),u=0;b<p;b++,u++)b in l&&f(r,u,l[b]);return r.length=u,r}})},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-3be2261a.d53efe97.js.map