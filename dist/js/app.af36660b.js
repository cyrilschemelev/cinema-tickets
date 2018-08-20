(function(e){function t(t){for(var n,s,c=t[0],i=t[1],u=t[2],l=0,p=[];l<c.length;l++)s=c[l],a[s]&&p.push(a[s][0]),a[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);f&&f(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,s=1;s<r.length;s++){var i=r[s];0!==a[i]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},o=[];function s(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"7a29333c"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=n);var o,i=document.getElementsByTagName("head")[0],u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e),o=function(t){u.onerror=u.onload=null,clearTimeout(l);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,s=new Error("Loading chunk "+e+" failed.\n("+n+": "+o+")");s.type=n,s.request=o,r[1](s)}a[e]=void 0}};var l=setTimeout(function(){o({type:"timeout",target:u})},12e4);u.onerror=u.onload=o,i.appendChild(u)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var f=u;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"03b8":function(e,t,r){},"09ba":function(e,t,r){},"106f":function(e,t,r){},1094:function(e,t,r){"use strict";var n=r("d298"),a=r.n(n);a.a},1141:function(e,t,r){"use strict";var n=r("03b8"),a=r.n(n);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("097d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Cinema Hall")]),e._v(" |\n    "),r("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),r("router-view")],1)},o=[],s=(r("5c0b"),r("2877")),c={},i=Object(s["a"])(c,a,o,!1,null,null,null);i.options.__file="App.vue";var u=i.exports,l=r("8c4f"),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("Cinema"),r("Order")],1)},p=[],d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"cinema"},e._l(this.places,function(t,n){return r("div",{key:n},[r("div",{staticClass:"row"},[r("div",{staticClass:"row-number"},[e._v(e._s(n+1))]),e._l(t,function(e){return r("Seat",{key:e.row+"-"+e.place,attrs:{props:e}})})],2)])}))},v=[],b=r("c93e"),m=r("2f62"),h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:"seat"+e.seatStyle,on:{click:function(t){e.toggleSeat(e.props)}}})},_=[],O={props:["props"],methods:Object(b["a"])({},Object(m["d"])(["toggleSeat"])),computed:{seatStyle:function(){return"unavailable"==this.props.status?" unavailable":"order"==this.props.status?" order":""}}},w=O,g=(r("cbc6"),Object(s["a"])(w,h,_,!1,null,"fddf04c8",null));g.options.__file="Seat.vue";var y=g.exports,j={name:"Cinema",components:{Seat:y},created:function(){0===this.places.length&&this.initPlaces()},methods:Object(b["a"])({},Object(m["b"])(["initPlaces"])),computed:Object(b["a"])({},Object(m["c"])(["places"]))},S=j,k=(r("1094"),Object(s["a"])(S,d,v,!1,null,"121847f5",null));k.options.__file="Cinema.vue";var C=k.exports,P=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.orderSeats.length?r("div",{staticClass:"order"},[r("h2",[e._v("Вы выбрали места:")]),e._l(e.orderSeats,function(t,n){return r("p",{key:n},[e._v("– "+e._s(t.row)+" ряд, "+e._s(t.place)+" место")])}),r("h3",[e._v("Общая стоимость: "+e._s(e.orderCost)+" руб.")]),r("div",{staticClass:"actions"},[r("button",{staticClass:"reset",on:{click:e.resetOrder}},[e._v("Отмена")]),r("button",{staticClass:"proceed",on:{click:e.proceedOrder}},[e._v("Купить")])])],2):e._e()},E=[],x={name:"Order",methods:Object(b["a"])({},Object(m["d"])(["resetOrder","proceedOrder"])),computed:Object(b["a"])({},Object(m["c"])(["orderSeats","orderCost"]))},M=x,T=(r("1141"),Object(s["a"])(M,P,E,!1,null,"0a468b82",null));T.options.__file="Order.vue";var $=T.exports,A={name:"home",components:{Cinema:C,Order:$}},B=A,H=(r("7bb9"),Object(s["a"])(B,f,p,!1,null,"3cda2f90",null));H.options.__file="Home.vue";var J=H.exports;n["a"].use(l["a"]);var R=new l["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:J},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))}}]}),U=(r("ac6a"),{toggleSeat:function(e,t){e.places.forEach(function(r){r.forEach(function(r){r.row==t.row&&r.place==t.place&&("free"===r.status?(e.places[r.row-1][r.place-1].status="order",e.order.cost+=r.price,e.order.seats.push(r)):"order"===r.status&&(e.places[r.row-1][r.place-1].status="free",e.order.cost-=r.price,e.order.seats=e.order.seats.filter(function(e){return e.row!=r.row||e.place!=r.place})))})})},createRow:function(e){e.places.push([])},createSeat:function(e,t){e.places[t.row-1].push(t)},markAsUnavailable:function(e,t){t.status="unavailable"},resetOrder:function(e){e.order.seats.forEach(function(t){e.places[t.row-1][t.place-1].status="free"}),e.order.seats=[],e.order.cost=0},proceedOrder:function(e){e.order.seats.forEach(function(t){e.places[t.row-1][t.place-1].status="unavailable"}),e.order.seats=[],e.order.cost=0,alert("Спасибо за заказ!")}}),q={initPlaces:function(e){for(var t=e.commit,r=e.state,n=e.dispatch,a=0;a<r.rows;a++){t("createRow");for(var o=0;o<r.seats;o++){var s={};s.row=a+1,s.place=o+1,s.status="free",s.price=100,t("createSeat",s)}}n("markPlacesBusy",10)},markPlacesBusy:function(e,t){for(var r=e.dispatch,n=0;n<t;n++)r("markOnePlace")},markOnePlace:function(e){var t=e.commit,r=e.state,n=e.dispatch,a=r.places[Math.floor(Math.random()*r.rows)][Math.floor(Math.random()*r.seats)];"free"==a.status?t("markAsUnavailable",a):n("markOnePlace")}},L={places:function(e){return e.places},orderSeats:function(e){return e.order.seats},orderCost:function(e){return e.order.cost}};n["a"].use(m["a"]);var N=!1,z=new m["a"].Store({strict:N,state:{order:{seats:[],cost:0},places:[],rows:10,seats:10},mutations:U,actions:q,getters:L});n["a"].config.productionTip=!1,new n["a"]({router:R,store:z,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var n=r("106f"),a=r.n(n);a.a},"7bb9":function(e,t,r){"use strict";var n=r("bc52"),a=r.n(n);a.a},bc52:function(e,t,r){},cbc6:function(e,t,r){"use strict";var n=r("09ba"),a=r.n(n);a.a},d298:function(e,t,r){}});
//# sourceMappingURL=app.af36660b.js.map