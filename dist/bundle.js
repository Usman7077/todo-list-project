(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>a});var o=t(81),r=t.n(o),i=t(645),d=t.n(i)()(r());d.push([e.id,"body {\n    margin: 0px;\n    background-color: beige;\n}\n\n.heading {\n    display: flex;\n    justify-content: center;\n    color: aliceblue;\n    background-color: black;\n    align-items: center;\n    height: 8vh;\n    margin: 0px;\n    font-size: 5vh;\n    font-weight: bolder;\n}\n\n.mainContainer {\n    display: flex;\n    height: 87vh;\n    width: 99vw;\n}\n\n.sideBar {\n    padding-top: 7vh;\n    padding-bottom: 7vh;\n    padding-left: 3vw;\n    padding-right: 3vw;\n    border: 2px;\n    background-color: #b0bb0b29;\n}\n\n.sidebarProjectNames>div {\n    padding: 10px;\n}\n\n.mainWindow {\n    display: flex;\n    flex-direction: column;\n    width: 81vw;\n    margin-top: 7vh;\n    margin-bottom: 7vh;\n    margin-right: 3vw;\n    margin-left: 3vw;\n    overflow: auto;\n    border: #e91616;\n    border-style: dashed;\n    border-width: 2px;\n}\n\n.addNewTaskButton {\n    color: red;\n    font-size: 1rem;\n    font-weight: 900;\n}\n\n#addTaskInputForm {\n    /* display: flex; */\n    padding: 32px;\n    flex-direction: column;\n    position: absolute;\n    background-color: rgb(203 197 195);\n    left: 37vw;\n    top: 23vh;\n}\n#editTaskInputForm {\n    /* display: flex; */\n    padding: 32px;\n    flex-direction: column;\n    position: absolute;\n    background-color: rgb(203 197 195);\n    left: 37vw;\n    top: 23vh;\n}\n\n#newProjectInputForm {\n    /* display: flex; */\n    padding: 32px;\n    flex-direction: column;\n    position: absolute;\n    background-color: rgb(203 197 195);\n    left: 37vw;\n    top: 23vh;\n}\n\n.addTodoDivContainer {\n    display: flex;\n    justify-content: space-around;\n    padding: 44px;\n    border: 2px;\n    border-style: dotted;\n}\n\n.inputForm {\n    display: flex;\n    margin: 20px;\n}\n\n.formDiv {\n    display: flex;\n}\n\n.footer {\n    display: flex;\n    justify-content: center;\n    color: white;\n    background-color: black;\n    height: 5vh;\n}",""]);const a=d},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var d={};if(o)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(d[c]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);o&&d[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),n.push(s))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var i={},d=[],a=0;a<e.length;a++){var c=e[a],l=o.base?c[0]+o.base:c[0],s=i[l]||0,u="".concat(l," ").concat(s);i[l]=s+1;var p=t(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=r(m,o);o.byIndex=a,n.splice(a,0,{identifier:u,updater:f,references:1})}d.push(u)}return d}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var d=0;d<i.length;d++){var a=t(i[d]);n[a].references--}for(var c=o(e,r),l=0;l<i.length;l++){var s=t(i[l]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}i=c}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,exports:{}};return e[o](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),r=t.n(o),i=t(569),d=t.n(i),a=t(565),c=t.n(a),l=t(216),s=t.n(l),u=t(589),p=t.n(u),m=t(426),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=d().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=s(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;let v=[],y="home";!function(){const e=document.getElementById("addNewTaskButton"),n=document.getElementById("addTaskInputForm"),t=document.getElementById("addTaskInputFormButton"),o=document.getElementById("homeProject"),r=document.getElementById("addNewProjectButton"),i=document.getElementById("newProjectInputForm"),d=document.getElementById("newProjectInputFormButton"),a=document.getElementById("editTaskInputFormButton"),c=document.getElementById("editTaskInputForm");t.addEventListener("click",(()=>{n.style.display="none",function(){const e=document.getElementById("title").value,n=document.getElementById("description").value,t=document.getElementById("dueDate").value,o=new g(e,n,t,"dummy2",y);v.push(o),document.getElementById("title").value="",document.getElementById("description").value="",document.getElementById("dueDate").value="",console.log(v)}(),h(v.filter((e=>e.project==y)))})),e.addEventListener("click",(()=>{n.style.display="flex"})),o.addEventListener("click",(()=>{y="home";const e=v.filter((e=>"home"==e.project));h(e),console.log(e)})),r.addEventListener("click",(()=>{i.style.display="flex"})),d.addEventListener("click",(()=>{i.style.display="none";const e=function(){const e=document.getElementById("projectNameInput").value;return document.getElementById("projectNameInput").value="",e}();""!=e&&function(e){const n=document.getElementById("sidebarProjectNames"),t=document.createElement("div");t.className="sidebarProjectNames",t.innerText=e,n.appendChild(t),t.addEventListener("click",(()=>{y=e;const n=v.filter((n=>n.project==e));h(n),console.log(n)}))}(e)})),a.addEventListener("click",(()=>{c.style.display="none"}))}(),console.log(v);class g{constructor(e,n,t,o){this.title=e,this.description=n,this.dueDate=t,this.priority=o,this.project=y,this.id=(new Date).getTime()}deleteButton(){}}function h(e){const n=document.getElementById("content");n.innerHTML="",e.forEach((e=>{const t=document.createElement("div");t.className="addTodoDivContainer";const o=document.createElement("div");o.className="titleDiv",o.innerText=e.title,t.appendChild(o);const r=document.createElement("div");r.className="descriptionDiv",r.innerText=e.description,t.appendChild(r);const i=document.createElement("div");i.className="dueDateDiv",i.innerText=e.dueDate,t.appendChild(i);const d=document.createElement("div");d.className="priorityDiv",d.innerText=e.priority,t.appendChild(d);const a=document.createElement("button");a.className="priorityDiv",a.innerText=e.id,a.id=e.id,t.appendChild(a),a.addEventListener("click",(()=>{v.splice(v.indexOf(e),1),h(v.filter((e=>e.project==y)))}));const c=document.createElement("button");c.className="priorityDiv",c.innerText=e.id+"edit",c.id=e.id,t.appendChild(c),c.addEventListener("click",(()=>{console.log(e.id);const n=v.filter((n=>n.id==e.id)),t=document.getElementById("editTaskInputForm");v.forEach((o=>{if(o.id==n[0].id){const o=v.indexOf(n[0]);t.style.display="flex",document.getElementById("title").value=e.title,document.getElementById("description").value=e.description,document.getElementById("dueDate").value=e.dueDate,console.log(o),console.log(v[o]),v[o].title=document.getElementById("title").value,v[o].description=document.getElementById("description").value,v[o].dueDate=document.getElementById("dueDate").value}})),h(v.filter((e=>e.project==y)))})),n.appendChild(t)}))}})()})();