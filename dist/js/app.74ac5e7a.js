(function(t){function e(e){for(var o,u,c=e[0],s=e[1],a=e[2],l=0,f=[];l<c.length;l++)u=c[l],Object.prototype.hasOwnProperty.call(i,u)&&i[u]&&f.push(i[u][0]),i[u]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,a||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(o=!1)}o&&(r.splice(e--,1),t=u(u.s=n[0]))}return t}var o={},i={app:0},r=[];function u(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=o,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)u.d(n,o,function(e){return t[e]}.bind(null,o));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/vue_todo_list/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var a=0;a<c.length;a++)e(c[a]);var d=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=n("31bd"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("NavBar"),n("TodoInput"),n("TodoItemList")],1)},u=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav"},[n("router-link",{attrs:{to:"/",exact:""}},[t._v("全部")]),n("router-link",{attrs:{to:"/active"}},[t._v("待辦中")]),n("router-link",{attrs:{to:"/done"}},[t._v("已完成")])],1)},s=[],a=n("2877"),d={},l=Object(a["a"])(d,c,s,!1,null,null,null),f=l.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"todo-input"},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.todo,expression:"todo",modifiers:{trim:!0}},{name:"focus",rawName:"v-focus"}],attrs:{type:"text",placeholder:"輸入待辦事項"},domProps:{value:t.todo},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleAddTodo(e)},blur:[function(e){t.isEmpty=!1},function(e){return t.$forceUpdate()}],input:function(e){e.target.composing||(t.todo=e.target.value.trim())}}}),n("h5",{directives:[{name:"show",rawName:"v-show",value:!t.todo&&t.isEmpty,expression:"!todo && isEmpty"}]},[t._v("待辦事項不能為空")])])},m=[],h={data:function(){return{todo:"",isEmpty:!1}},methods:{handleAddTodo:function(){if(this.todo){var t={id:1e3*Math.random(),content:this.todo,done:!1};this.$store.commit("ADD_TODO",t),this.todo="",this.isEmpty=!1}else this.isEmpty=!0}}},v=h,y=Object(a["a"])(v,p,m,!1,null,null,null),O=y.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"todo-item-list"},[t.todos.length>0?n("ul",t._l(t.todos,(function(t){return n("TodoItem",{key:t.id,attrs:{item:t}})})),1):n("h3",[t._v(" 尚無代辦事項 ")])])},b=[],T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{class:{done:t.item.done}},[null!==t.edit?n("input",{directives:[{name:"focus",rawName:"v-focus"},{name:"model",rawName:"v-model",value:t.edit,expression:"edit"}],staticClass:"edit-input",attrs:{type:"text"},domProps:{value:t.edit},on:{blur:t.handleCancelEdit,keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.handleCancelEdit(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleSubmit(e)}],input:function(e){e.target.composing||(t.edit=e.target.value)}}}):[n("input",{directives:[{name:"model",rawName:"v-model",value:t.done,expression:"done"}],attrs:{type:"checkbox",id:t.item.id},domProps:{checked:Array.isArray(t.done)?t._i(t.done,null)>-1:t.done},on:{change:function(e){var n=t.done,o=e.target,i=!!o.checked;if(Array.isArray(n)){var r=null,u=t._i(n,r);o.checked?u<0&&(t.done=n.concat([r])):u>-1&&(t.done=n.slice(0,u).concat(n.slice(u+1)))}else t.done=i}}}),n("label",{attrs:{for:t.item.id}},[t._v(t._s(t.item.content))]),n("button",{on:{click:t.handleEdit}},[t._v("編輯")]),n("button",{on:{click:function(e){return t.handleDelete(t.item.id)}}},[t._v("刪除")])]],2)},g=[],E={props:["item"],data:function(){return{edit:null}},computed:{done:{get:function(){return this.item.done},set:function(t){this.$store.commit("UPDATE_TODO",{id:this.item.id,content:this.item.content,done:t})}}},methods:{handleDelete:function(t){confirm("確認刪除".concat(this.item.content,"?"))&&this.$store.commit("DELETE_TODO",t)},handleEdit:function(){this.edit=this.item.content},handleCancelEdit:function(){this.edit=null},handleSubmit:function(){if(!this.edit)return this.handleDelete(this.item.id);this.$store.commit("UPDATE_TODO",{id:this.item.id,content:this.edit,done:this.item.done}),this.handleCancelEdit()}}},k=E,x=Object(a["a"])(k,T,g,!1,null,null,null),D=x.exports,w={components:{TodoItem:D},computed:{todos:function(){return this.$store.getters.filterTodos}}},I=w,j=Object(a["a"])(I,_,b,!1,null,null,null),S=j.exports,N={name:"App",components:{NavBar:f,TodoInput:O,TodoItemList:S},mounted:function(){this.$store.dispatch("INIT_TODOS")}},P=N,$=(n("5c0b"),Object(a["a"])(P,r,u,!1,null,null,null)),A=$.exports,C=(n("4de4"),n("c740"),n("b0c0"),n("2909")),M=n("2f62");o["a"].use(M["a"]);var J={all:function(t){return t.sort((function(t,e){return t.done-e.done}))},active:function(t){return t.filter((function(t){return!t.done}))},done:function(t){return t.filter((function(t){return t.done}))}},L={get:function(){return JSON.parse(localStorage.getItem("vue-todos"))},set:function(t){return localStorage.setItem("vue-todos",JSON.stringify(t))}},U=new M["a"].Store({state:{todos:[]},getters:{filterTodos:function(t){return J[t.route.name](t.todos)}},mutations:{INIT_TODOS:function(t,e){e&&(t.todos=e)},ADD_TODO:function(t,e){t.todos.push(e),L.set(t.todos)},UPDATE_TODO:function(t,e){var n=Object(C["a"])(t.todos),o=n.findIndex((function(t){return t.id===e.id}));n[o]=e,t.todos=n,L.set(t.todos)},DELETE_TODO:function(t,e){t.todos=t.todos.filter((function(t){return t.id!==e})),L.set(t.todos)}},actions:{INIT_TODOS:function(t){var e=t.commit,n=L.get();e("INIT_TODOS",n)}}}),B=n("8c4f");o["a"].use(B["a"]);var q=new B["a"]({routes:[{path:"/",name:"all"},{path:"/active",name:"active"},{path:"/done",name:"done"},{path:"*",redirect:"/"}]});Object(i["sync"])(U,q),o["a"].config.productionTip=!1,o["a"].directive("focus",{inserted:function(t){t.focus()}}),new o["a"]({store:U,router:q,render:function(t){return t(A)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var o=n("9c0c"),i=n.n(o);i.a},"9c0c":function(t,e,n){}});
//# sourceMappingURL=app.74ac5e7a.js.map