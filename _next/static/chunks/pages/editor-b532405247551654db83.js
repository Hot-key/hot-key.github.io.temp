(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[154],{8830:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return q}});var i=n(5893),o=n(9227),r=n(4972),c=n(809),d=n.n(c),a=n(2447),s=n(7294),l={"JavaScript(node.js)":{serverCode:"javascript-node",ideCode:"javascript",initData:"console.log('Hello, World!')"},TypeScript:{serverCode:"typescript",ideCode:"typescript",initData:"console.log('Hello, World!');"},python3:{serverCode:"python3",ideCode:"python",initData:'print("Hello, World!")'},"C# (.NET Core)":{serverCode:"cs-core",ideCode:"csharp",initData:'using System;\nclass Program {\n\tstatic void Main(string[] args) {\n\t\tConsole.WriteLine("Hello, World!");\n\t}\n}'},"F# (.NET Core)":{serverCode:"fs-core",ideCode:"fsharp",initData:'open System\n[<EntryPoint>]\nlet main argv =\n    printfn "Hello, World!"\n    0'},"C (clang)":{serverCode:"c-clang",ideCode:"c",initData:'#include <stdio.h>\nint main() {\n\tputs("Hello, World!");\n}'},"C++ (clang)":{serverCode:"cpp-clang",ideCode:"cpp",initData:'#include <iostream>\nint main() {\n\tstd::cout << "Hello, World!" << std::endl;\n}'}},u=n(9669),p=n.n(u);function h(t,e){return f.apply(this,arguments)}function f(){return(f=(0,a.Z)(d().mark((function t(e,n){var i;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p().post(e,n,{responseType:"json"});case 2:return i=t.sent,t.abrupt("return",i.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var x=function(){var t=(0,s.useState)({lang:Object.keys(l)[0],code:"",input:""}),e=t[0],n=t[1],i=(0,s.useState)(!1),o=i[0],r=i[1],c=(0,s.useState)(!1),u=c[0],p=c[1],f=(0,s.useState)(""),x=f[0],g=f[1],m=(0,s.useState)(""),v=m[0],w=m[1];return(0,s.useEffect)((function(){u?r(!0):p(!0)}),[e]),(0,s.useEffect)((function(){function t(){return(t=(0,a.Z)(d().mark((function t(e){var n;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!o){t.next=8;break}return t.next=3,h("https://dev-api.hotkey.sh/runner/run-code",{input:{lang:e.lang,code:e.code,input:e.input}});case 3:n=t.sent,console.log(n),g(n.result[0]),w(n.result[1]),r(!1);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(e){t.apply(this,arguments)}(e)}),[o]),[v,x,o,n]},g=n(474),m=n(9163),v=n(3935),w=function(){var t=(0,s.useState)(void 0),e=t[0],n=t[1];return(0,s.useEffect)((function(){n(document)}),[]),e},C=function(t,e){var n=(0,s.useCallback)((function(n){t.current&&!t.current.contains(n.target)&&e()}),[t,e]);(0,s.useEffect)((function(){var t=document.getElementById("__next");return t.addEventListener("click",n),function(){t.removeEventListener("click",n)}}),[n])},j=m.ZP.div.withConfig({displayName:"Dropdown__Container",componentId:"sc-oxczz9-0"})(["overflow:auto;min-width:","px;"," margin-right:-9999px;z-index:5000;"," "," "," ",";display:flex;flex-direction:column;z-index:5000;border-radius:","px;padding:","px;box-shadow:0px 0px 5px rgba(0,0,0,0.3);background:var(--mn-layer-01-color);"],(function(t){return t.minWidth}),(function(t){return t.fixed?(0,m.iv)(["position:fixed;"]):(0,m.iv)(["position:absolute;top:0;left:0;"])}),(function(t){return t.heightLimit&&(0,m.iv)(["max-height:","px;"],t.heightLimit)}),(function(t){return t.widthLimit&&!t.followParentWidth&&(0,m.iv)(["width:100%;max-width:","px;"],t.widthLimit)}),(function(t){return t.followParentWidth&&(0,m.iv)(["width:100%;max-width:","px;"],t.parentWidth)}),(function(t){return t.theme.scrollbar}),(function(t){return t.borderRadius}),(function(t){return t.padding})),y=m.ZP.div.withConfig({displayName:"Dropdown__ArrowBox",componentId:"sc-oxczz9-1"})([""," z-index:5001;svg{width:20px;height:20px;filter:drop-shadow(0px -3px 2px rgba(0,0,0,0.15));g{fill:var(--mn-layer-01-color);}}"],(function(t){return t.fixed?(0,m.iv)(["position:fixed;"]):(0,m.iv)(["position:absolute;top:0;left:0;"])})),b=function(){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",children:(0,i.jsx)("g",{children:(0,i.jsx)("path",{d:"M12.538 6.478c-.14-.146-.335-.228-.538-.228s-.396.082-.538.228l-9.252 9.53c-.21.217-.27.538-.152.815.117.277.39.458.69.458h18.5c.302 0 .573-.18.69-.457.118-.277.058-.598-.152-.814l-9.248-9.532z"})})})},k=function(t){var e,n=t.open,o=t.reference,r=t.widthLimit,c=t.heightLimit,d=t.followParentWidth,a=t.interval,l=void 0===a?5:a,u=t.direction,p=void 0===u?"right":u,h=t.minWidth,f=void 0===h?100:h,x=t.arrowPosition,g=t.fixed,m=void 0!==g&&g,k=t.borderRadius,_=void 0===k?5:k,P=t.padding,E=void 0===P?5:P,L=t.handleClose,N=t.children,Z=(0,s.useRef)(null),W=w(),I=(0,s.useState)(),S=I[0],z=I[1],O=(0,s.useCallback)((function(){if(o.current){var t=o.current.getBoundingClientRect();z("right"===p?{width:t.width,startingPosition:t.right,top:t.bottom+window.pageYOffset+l}:{width:t.width,startingPosition:t.left,top:t.bottom+window.pageYOffset+l})}}),[p,l,o]);function D(){if(o.current)return o.current.getBoundingClientRect().bottom+l}return C(Z,(function(){n&&L()})),(0,s.useEffect)((function(){O()}),[n,O]),(0,s.useEffect)((function(){return O(),window.addEventListener("resize",O),function(){return window.removeEventListener("resize",O)}}),[O]),(0,i.jsx)(i.Fragment,{children:void 0!==W&&v.createPortal((0,i.jsx)(i.Fragment,{children:n&&S&&(0,i.jsxs)(i.Fragment,{children:[x&&(0,i.jsx)(y,{fixed:m,style:{transform:"".concat(!m&&"translate(".concat(x?"right"===p?S.startingPosition-x:S.startingPosition+x:S.startingPosition,"px, ").concat(S.top-12,"px) translate(").concat("right"===p?"-100%":"0px",", 0px)")),top:"".concat(m&&"".concat((null!==(e=D())&&void 0!==e?e:0)-12,"px")),left:"".concat(m&&"".concat(S.startingPosition+x,"px"))},children:(0,i.jsx)(b,{})}),(0,i.jsx)(j,{parentWidth:S.width,widthLimit:r,heightLimit:c,followParentWidth:d,fixed:m,minWidth:f,borderRadius:_,padding:E,ref:Z,style:{transform:"".concat(m?"translate(".concat("right"===p?"-100%":"0px",", 0px)"):"translate(".concat(S.startingPosition,"px, ").concat(S.top,"px) translate(").concat("right"===p?"-100%":"0px",", 0px)")),top:"".concat(m&&"".concat(D(),"px")),left:"".concat(m&&"".concat(S.startingPosition,"px"))},children:N})]})}),W.body)})},_=m.ZP.div.withConfig({displayName:"DropdownItem__Container",componentId:"sc-1acp0f1-0"})(["display:flex;align-items:center;width:100%;padding:0.7rem;border-radius:5px;word-break:break-all;cursor:pointer;transition:background-color 0.2s ease 0s;> *{word-break:break-all;}:hover{background:var(--mn-hover-color);}p{color:var(--mn-text-secondary-color);}"]),P=function(t){var e=t.children,n=t.onClick;return(0,i.jsx)(_,{onClick:n,children:e})},E=function(){return(0,i.jsx)("svg",{height:"21",viewBox:"0 0 21 21",width:"21",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"m8.5.5-4 4-4-4",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",transform:"translate(6 8)"})})},L=function(){return(0,i.jsxs)("svg",{width:"21",height:"21",viewBox:"0 0 21 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("circle",{cx:"10.5",cy:"10.5",r:"9.5",stroke:"currentColor",strokeWidth:"2"}),(0,i.jsx)("polygon",{fill:"currentColor",stroke:"currentColor",strokeWidth:"1",points:"8,5 15,10.5 8,15"})]})},N=m.ZP.div.withConfig({displayName:"EditorConfig__Container",componentId:"sc-1cxxfs7-0"})(["background-color:#252526;width:100%;height:32px;overflow:hidden;position:relative;display:flex;flex-direction:row;color:#c9c9c9;"]),Z=m.ZP.p.withConfig({displayName:"EditorConfig__Label",componentId:"sc-1cxxfs7-1"})(["margin:auto 12px auto 12px;vertical-align:middle;"]),W=m.ZP.button.withConfig({displayName:"EditorConfig__LangSelect",componentId:"sc-1cxxfs7-2"})(["display:flex;justify-content:space-between;align-items:center;background-color:#2d2d2d;cursor:pointer;color:#c9c9c9;width:250px;height:32px;p{margin:auto 12px auto 12px;color:#c9c9c9;font-weight:600;line-height:1.2rem;font-size:0.9rem;}"]),I=m.ZP.button.withConfig({displayName:"EditorConfig__RunButton",componentId:"sc-1cxxfs7-3"})(["display:flex;justify-content:space-between;align-items:center;background-color:#2d2d2d;cursor:pointer;color:#c9c9c9;width:70px;height:32px;margin-left:12px;:active{background-color:#3a3a3a;}p{margin:auto 2px auto 12px;color:#c9c9c9;font-weight:600;line-height:1.2rem;font-size:0.9rem;}svg{margin:2px 4px 2px 2px;}"]);function S(t){var e=t.setLang,n=t.langList,o=t.runCode,r=(0,s.useState)(!1),c=r[0],d=r[1],a=(0,s.useState)(Object.keys(n)[0]),l=a[0],u=a[1],p=(0,s.useRef)(null);return(0,i.jsxs)(N,{children:[(0,i.jsx)(Z,{children:"\uc5b8\uc5b4"}),(0,i.jsxs)(W,{ref:p,onClick:function(){return d((function(t){return!t}))},children:[(0,i.jsx)("p",{children:l}),(0,i.jsx)(E,{})]}),(0,i.jsxs)(I,{onClick:o,children:[(0,i.jsx)("p",{children:"\uc2dc\uc791"}),(0,i.jsx)(L,{})]}),(0,i.jsx)(k,{reference:p,open:c,fixed:!0,padding:5,widthLimit:250,direction:"left",handleClose:function(){return d(!1)},children:Object.keys(n).map((function(t){return(0,i.jsx)(P,{onClick:function(){e(t),u(t),d(!1)},children:(0,i.jsx)("p",{children:t})},t)}))})]})}var z=m.ZP.div.withConfig({displayName:"EditorInputBox__Container",componentId:"sc-o62kl7-0"})(["background-color:#1e1e1e;width:100%;height:30%;overflow:hidden;position:relative;display:flex;flex-direction:row;border-top:1px solid #414141;"]);function O(){return(0,i.jsx)(z,{children:(0,i.jsx)("div",{})})}var D=m.ZP.div.withConfig({displayName:"OutputConfig__Container",componentId:"sc-wtmzw-0"})(["background-color:#252526;width:100%;height:32px;overflow:hidden;position:relative;display:flex;flex-direction:row;"]);function T(){return(0,i.jsx)(D,{children:(0,i.jsx)("div",{})})}var B=m.ZP.div.withConfig({displayName:"OutputConsole__Container",componentId:"sc-dpclyj-0"})(["background-color:#1e1e1e;width:100%;height:100%;overflow:hidden;position:relative;display:flex;flex-direction:column;padding:12px 12px 12px 12px;color:#bebcbc;hr{background-color:transparent;border-top:1px solid #414141;}"]),R=m.ZP.hr.withConfig({displayName:"OutputConsole__Line",componentId:"sc-dpclyj-1"})(["border-top:1px solid #414141;"]);function F(t){var e=t.outPut,n=t.info,o=t.loading,r=t.loaded;return(0,i.jsx)(B,{children:o?(0,i.jsx)("p",{children:"loading..."}):(0,i.jsx)(i.Fragment,{children:r&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("pre",{children:e}),(0,i.jsx)("br",{}),(0,i.jsx)(R,{}),(0,i.jsx)("br",{}),(0,i.jsx)("pre",{children:n})]})})})}var H=m.ZP.div.withConfig({displayName:"EditorTemplate__Container",componentId:"sc-14jyz8e-0"})(["width:100%;height:100vh;overflow:hidden;position:relative;display:flex;flex-direction:row;"]),M=m.ZP.div.withConfig({displayName:"EditorTemplate__EditorContainer",componentId:"sc-14jyz8e-1"})(["display:flex;flex-direction:column;height:100%;width:50%;"]),X=m.ZP.div.withConfig({displayName:"EditorTemplate__EditorMainContainer",componentId:"sc-14jyz8e-2"})(["height:100%;border-right:1px solid #414141;"]),Y=m.ZP.div.withConfig({displayName:"EditorTemplate__OutputContainer",componentId:"sc-14jyz8e-3"})(["height:100%;width:50%;"]);function A(){var t=(0,s.useState)(Object.keys(l)[0]),e=t[0],n=t[1],c=(0,s.useState)(""),d=c[0],a=c[1],u=(0,s.useState)(""),p=u[0],h=u[1],f=(0,s.useState)(!1),m=f[0],v=f[1],w=x(),C=(0,o.Z)(w,4),j=C[0],y=C[1],b=C[2],k=C[3],_=(0,g.Z)().selectTheme;(0,s.useEffect)((function(){_("dark"),h("")}),[]),(0,s.useEffect)((function(){a(l[e].initData)}),[e]);var P=(0,s.useCallback)((function(){k({lang:l[e].serverCode,code:d,input:p}),v(!0)}),[e,d,p]);return(0,i.jsxs)(H,{children:[(0,i.jsxs)(M,{children:[(0,i.jsx)(S,{setLang:n,langList:l,runCode:P}),(0,i.jsxs)(X,{children:[(0,i.jsx)(r.ZP,{height:"70%",theme:"vs-dark",language:l[e].ideCode,value:d,onChange:function(t,e){return a(null!==t&&void 0!==t?t:"")}}),(0,i.jsx)(O,{})]})]}),(0,i.jsxs)(Y,{children:[(0,i.jsx)(T,{}),(0,i.jsx)(F,{outPut:y,info:j,loading:b,loaded:m})]})]})}var J=n(9008);function q(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(J.default,{children:(0,i.jsx)("title",{children:"hotkey code editor"})}),(0,i.jsx)(A,{})]})}},6448:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/editor",function(){return n(8830)}])}},function(t){t.O(0,[774,369,888,179],(function(){return e=6448,t(t.s=e);var e}));var e=t.O();_N_E=e}]);