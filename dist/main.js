(()=>{"use strict";var n={426:(n,t,e)=>{e.d(t,{Z:()=>i});var r=e(645),a=e.n(r)()((function(n){return n[1]}));a.push([n.id,"body {\n  background-color: white;\n}\n\nh1,\nh3,\nh6,\np {\n  margin: unset;\n}\n\nbutton {\n  border: unset;\n  background-color: unset;\n  cursor: pointer;\n}\n\n.container {\n  width: 500px;\n  min-height: max-content;\n  background: #f6f6f6;\n  box-shadow: 3px 3px 3px 3px grey;\n  justify-items: stretch;\n  display: grid;\n  grid-template-rows: 36px 36px auto 36px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 10%;\n}\n\n.top {\n  display: grid;\n  grid-template-columns: 90% 10%;\n  min-height: 36px;\n  align-items: center;\n  background-color: white;\n}\n\n.title {\n  text-align: start;\n  font-family: monospace;\n  padding-left: 12px;\n  font-size: 14px;\n  grid-row-start: 1;\n  margin: unset;\n}\n\n#task-form {\n  min-height: 36px;\n  grid-row-start: 2;\n  background-color: white;\n  border: 1px solid #dcdcdc7a;\n  display: grid;\n  grid-template-columns: auto 10%;\n}\n\n.text {\n  width: 90%;\n  font-style: italic;\n  border: unset;\n  padding-left: 12px;\n}\n\n.text::first-letter {\n  text-transform: capitalize !important;\n}\n\ninput:focus-visible {\n  border: unset;\n  outline: unset;\n}\n\nul {\n  grid-row-start: 3;\n  margin: unset;\n  padding: unset;\n  background-color: white;\n  list-style-type: none;\n}\n\nli {\n  padding: unset;\n  border: 1px solid #dcdcdc7a;\n}\n\n.task {\n  display: grid;\n  grid-template-columns: 10% auto 10%;\n  padding: 1%;\n  align-items: center;\n}\n\n.description {\n  font-family: monospace;\n  font-weight: 200;\n  font-size: 12px;\n  letter-spacing: 1px;\n  border: unset;\n  background: transparent;\n}\n\n.circle {\n  width: 28px;\n  height: 28px;\n  background-color: black;\n}\n\n#add-btn {\n  opacity: 0.3;\n}\n\n.add-btn-img {\n  width: 14px;\n  opacity: 0.3;\n}\n\n.edit-btn {\n  cursor: all-scroll;\n}\n\n.refresh-btn {\n  text-align: end;\n}\n\n.dragging {\n  opacity: 0.2;\n  cursor: all-scroll;\n}\n",""]);const i=a},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=n(t);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,r){"string"==typeof n&&(n=[[null,n,""]]);var a={};if(r)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(a[o]=!0)}for(var d=0;d<n.length;d++){var s=[].concat(n[d]);r&&a[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),t.push(s))}},t}},695:n=>{var t={};n.exports=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}},379:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var i={},o=[],d=0;d<n.length;d++){var s=n[d],c=r.base?s[0]+r.base:s[0],l=i[c]||0,u="".concat(c," ").concat(l);i[c]=l+1;var p=e(u),m={css:s[1],media:s[2],sourceMap:s[3]};-1!==p?(t[p].references++,t[p].updater(m)):t.push({identifier:u,updater:a(m,r),references:1}),o.push(u)}return o}function a(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;e.update(n=t)}else e.remove()}}n.exports=function(n,a){var i=r(n=n||[],a=a||{});return function(n){n=n||[];for(var o=0;o<i.length;o++){var d=e(i[o]);t[d].references--}for(var s=r(n,a),c=0;c<i.length;c++){var l=e(i[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=s}}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t),t}},795:n=>{n.exports=function(n){var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r=e.css,a=e.media,i=e.sourceMap;a?n.setAttribute("media",a):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,n)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},31:(n,t,e)=>{n.exports=e.p+"4b93a41b701ac18332f8.svg"},72:(n,t,e)=>{n.exports=e.p+"3adb9cb42cd31f0448c7.svg"},799:(n,t,e)=>{n.exports=e.p+"ede1a9b720f79252166c.svg"}},t={};function e(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={id:r,exports:{}};return n[r](i,i.exports,e),i.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var r=t.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),(()=>{var n=e(379),t=e.n(n),r=e(795),a=e.n(r),i=e(695),o=e.n(i),d=e(216),s=e.n(d),c=e(426),l={styleTagTransform:function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}},setAttributes:function(n){var t=e.nc;t&&n.setAttribute("nonce",t)},insert:function(n){var t=o()("head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(n)}};l.domAPI=a(),l.insertStyleElement=s(),t()(c.Z,l),c.Z&&c.Z.locals&&c.Z.locals;var u=e(799),p=e(72);let m=null;var g=e(31);let f=null;window.updateLocalStorage=function(n){!0===n?null===f&&(f=JSON.parse(window.localStorage.getItem("tasks"))):window.localStorage.setItem("tasks",JSON.stringify(f)),window.displayTasks()},window.callAddTask=function(){!function(n){const t=document.getElementById("description").value,e=t.charAt(0).toUpperCase();t.replace(t.charAt(0),e);const r=t,a=(new Date).getMilliseconds();n||(n=[]);const i=n.length+1;if(n&&""!==r){const t={description:r,completed:!1,index:i,id:a};n.push(t),n.sort(((n,t)=>{const e=n.position,r=t.position;return e<r?-1:e>r?1:0})),window.update(n)}}(f)},window.restart=function(){f=null,window.updateLocalStorage(!1)},window.update=function(n){if(n)f=n;else{const n=function(){const n=document.getElementsByTagName("li"),t=[];return 0!==n.length&&Array.from(n).forEach(((n,e)=>{const r=n.getElementsByTagName("div")[0],a=r.getElementsByTagName("input")[0].checked,i=r.getElementsByTagName("input")[0].name,o={completed:a,description:r.getElementsByTagName("input")[1].value,index:e,id:i};t.push(o)})),t}();f=n}window.updateLocalStorage(!1)},window.displayTasks=function(){const n=document.getElementById("container"),t=document.createElement("ul");t.id="list",f&&f.forEach(((n,e)=>{const{description:r,id:a}=n,i=document.createElement("li");i.id=e,i.addEventListener("drop",(n=>{i.classList.remove("dragging"),function(n){n.preventDefault();const t=n.dataTransfer.getData("text"),e=document.getElementById(t),r=document.getElementById(e.data),a=document.getElementById(m),i=a.getElementsByTagName("div")[0],o=e.data,d=i.data;e.data=d,i.data=o,r.appendChild(i),r.removeChild(e),a.appendChild(e),window.update()}(n)})),i.addEventListener("dragover",(n=>{var t;(t=n).preventDefault(),m=t.currentTarget.id}));const o=document.createElement("div"),d=`div${n.index}`;o.classList.add("task"),o.id=d,o.classList.add("drag-div"),o.draggable=!0,o.addEventListener("click",(()=>function(n,t){const e=document.getElementsByClassName("drag-div");Array.from(e).forEach((e=>{if(e.id===n){e.style.backgroundColor="#fff59c78";const r=e.getElementsByTagName("img")[0];r.src=g,r.style.cursor="pointer",r.addEventListener("click",(()=>{!function(n,t){const e=n.replace("div",""),r=[];t.forEach((n=>{n.index!==parseInt(e,10)&&r.push(n)})),window.update(r)}(n,t)}))}else{e.style.backgroundColor="white";const n=e.getElementsByTagName("img")[0];n.src=p,n.style.cursor="all-scroll"}}))}(d,f))),o.data=e,o.addEventListener("dragstart",(n=>{var t;o.classList.add("dragging"),(t=n).dataTransfer.setData("text",t.currentTarget.id)}));const s=document.createElement("input");s.addEventListener("click",(()=>{window.update()})),s.type="checkbox",s.name=n.id,s.id=`input-check-${a}`,s.checked=n.completed;const c=document.createElement("input");c.id=`li-description-${a}`,c.type="text",c.classList.add("description"),c.placeholder=r,c.value=r||null,c.data=n.index,c.addEventListener("change",(()=>{window.update()}));const l=document.createElement("button");l.classList.add("edit-btn"),l.id=`edit-btn-${a}`,l.type="button";const u=document.createElement("img");u.src=p,u.alt="image",u.classList.add("add-btn-img"),l.appendChild(u),o.appendChild(s),o.appendChild(c),o.appendChild(l),i.appendChild(o),t.appendChild(i)}));const e=`\n  <div class="top">\n  <h1 class="title">Today's To Do</h1>\n           <button id="refresh-btn" type="button" \n            onclick="window.restart()"\n            type="button"> \n            <img class="add-btn-img" src=${u} alt="" /> \n            </button>\n  </div>       \n          <form onsubmit="window.callAddTask()" id="task-form">\n            <input\n              id="description"\n              type="text"\n              class="text"\n              placeholder="Add to your list ..."\n            />\n            <button id="add-btn" type="submit" \n            type="button"> \n          &#8629\n            </button>\n          </form>       \n          `;n.innerHTML=e;const r=document.createElement("button");r.id="clear-btn",r.addEventListener("click",(()=>{!function(n){const t=[];n.forEach((n=>{!0!==n.completed&&t.push(n)})),window.update(t)}(f)})),r.textContent="Clear completed tasks.",n.insertAdjacentElement("beforeend",t),n.insertAdjacentElement("beforeend",r)},window.updateLocalStorage(!0),window.displayTasks()})()})();