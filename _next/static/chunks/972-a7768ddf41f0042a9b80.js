(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[972],{4954:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight((function(e,t){return t(e)}),e)}}function d(e){return function t(){for(var n=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return t.apply(n,[].concat(o,r))}}}function f(e){return{}.toString.call(e).includes("Object")}function g(e){return"function"===typeof e}n.d(t,{ZP:function(){return ae}});var p=d((function(e,t){throw new Error(e[t]||e.default)}))({initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"}),h={changes:function(e,t){return f(t)||p("changeType"),Object.keys(t).some((function(t){return n=e,r=t,!Object.prototype.hasOwnProperty.call(n,r);var n,r}))&&p("changeField"),t},selector:function(e){g(e)||p("selectorType")},handler:function(e){g(e)||f(e)||p("handlerType"),f(e)&&Object.values(e).some((function(e){return!g(e)}))&&p("handlersType")},initial:function(e){var t;e||p("initialIsRequired"),f(e)||p("initialType"),t=e,Object.keys(t).length||p("initialContent")}};function m(e,t){return g(t)?t(e.current):t}function y(e,t){return e.current=l(l({},e.current),t),t}function v(e,t,n){return g(t)?t(e.current):Object.keys(n).forEach((function(n){var r;return null===(r=t[n])||void 0===r?void 0:r.call(t,e.current[n])})),n}var b={create:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};h.initial(e),h.handler(t);var n={current:e},r=d(v)(n,t),o=d(y)(n),i=d(h.changes)(e),u=d(m)(n);function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e};return h.selector(e),e(n.current)}function a(e){s(r,o,i,u)(e)}return[c,a]}},w={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.25.2/min/vs"}};var O=function(e){return{}.toString.call(e).includes("Object")};var M={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:"Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "},j=function(e){return function t(){for(var n=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return t.apply(n,[].concat(o,r))}}}((function(e,t){throw new Error(e[t]||e.default)}))(M),E={config:function(e){return e||j("configIsRequired"),O(e)||j("configType"),e.urls?(console.warn(M.deprecation),{paths:{vs:e.urls.monacoBase}}):e}},k=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight((function(e,t){return t(e)}),e)}};var C=function e(t,n){return Object.keys(n).forEach((function(r){n[r]instanceof Object&&t[r]&&Object.assign(n[r],e(t[r],n[r]))})),i(i({},t),n)},P={type:"cancelation",msg:"operation is manually canceled"};var R,T,S=function(e){var t=!1,n=new Promise((function(n,r){e.then((function(e){return t?r(P):n(e)})),e.catch(r)}));return n.cancel=function(){return t=!0},n},N=b.create({config:w,isInitialized:!1,resolve:null,reject:null,monaco:null}),V=(T=2,function(e){if(Array.isArray(e))return e}(R=N)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var u,c=e[Symbol.iterator]();!(r=(u=c.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(a){o=!0,i=a}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(R,T)||function(e,t){if(e){if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(R,T)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),I=V[0],L=V[1];function A(e){return document.body.appendChild(e)}function q(e){var t=I((function(e){return{config:e.config,reject:e.reject}})),n=function(e){var t=document.createElement("script");return e&&(t.src=e),t}("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function D(){var e=I((function(e){return{config:e.config,resolve:e.resolve,reject:e.reject}})),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],(function(t){_(t),e.resolve(t)}),(function(t){e.reject(t)}))}function _(e){I().monaco||L({monaco:e})}var x=new Promise((function(e,t){return L({resolve:e,reject:t})})),z={config:function(e){L((function(t){return{config:C(t.config,E.config(e))}}))},init:function(){if(!I((function(e){return{isInitialized:e.isInitialized}})).isInitialized){if(window.monaco&&window.monaco.editor)return _(window.monaco),S(Promise.resolve(window.monaco));k(A,q)(D),L({isInitialized:!0})}return S(x)},__getMonacoInstance:function(){return I((function(e){return e.monaco}))}},U=n(7294),F=n(5697),B=n.n(F);const W={display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"};var Y=function({content:e}){return U.createElement("div",{style:W},e)};var Z={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}};function $({width:e,height:t,isEditorReady:n,loading:r,_ref:o,className:i,wrapperClassName:u}){return U.createElement("section",{style:{...Z.wrapper,width:e,height:t},className:u},!n&&U.createElement(Y,{content:r}),U.createElement("div",{ref:o,style:{...Z.fullWidth,...!n&&Z.hide},className:i}))}$.propTypes={width:B().oneOfType([B().number,B().string]).isRequired,height:B().oneOfType([B().number,B().string]).isRequired,loading:B().oneOfType([B().element,B().string]).isRequired,isEditorReady:B().bool.isRequired,className:B().string,wrapperClassName:B().string};var G=$,H=(0,U.memo)(G);var J=function(e){(0,U.useEffect)(e,[])};var K=function(e,t,n=!0){const r=(0,U.useRef)(!0);(0,U.useEffect)(r.current||!n?()=>{r.current=!1}:e,t)};function Q(){}function X(e,t,n,r){return function(e,t){return e.editor.getModel(ee(e,t))}(e,r)||function(e,t,n,r){return e.editor.createModel(t,n,r&&ee(e,r))}(e,t,n,r)}function ee(e,t){return e.Uri.parse(t)}function te({original:e,modified:t,language:n,originalLanguage:r,modifiedLanguage:o,originalModelPath:i,modifiedModelPath:u,keepCurrentOriginalModel:c,keepCurrentModifiedModel:a,theme:l,loading:s,options:d,height:f,width:g,className:p,wrapperClassName:h,beforeMount:m,onMount:y}){const[v,b]=(0,U.useState)(!1),[w,O]=(0,U.useState)(!0),M=(0,U.useRef)(null),j=(0,U.useRef)(null),E=(0,U.useRef)(null),k=(0,U.useRef)(y),C=(0,U.useRef)(m);J((()=>{const e=z.init();return e.then((e=>(j.current=e)&&O(!1))).catch((e=>"cancelation"!==(null===e||void 0===e?void 0:e.type)&&console.error("Monaco initialization: error:",e))),()=>M.current?function(){const e=M.current.getModel();var t,n;c||null===(t=e.original)||void 0===t||t.dispose();a||null===(n=e.modified)||void 0===n||n.dispose();M.current.dispose()}():e.cancel()})),K((()=>{const e=M.current.getModifiedEditor();e.getOption(j.current.editor.EditorOption.readOnly)?e.setValue(t):t!==e.getValue()&&(e.executeEdits("",[{range:e.getModel().getFullModelRange(),text:t,forceMoveMarkers:!0}]),e.pushUndoStop())}),[t],v),K((()=>{M.current.getModel().original.setValue(e)}),[e],v),K((()=>{const{original:e,modified:t}=M.current.getModel();j.current.editor.setModelLanguage(e,r||n),j.current.editor.setModelLanguage(t,o||n)}),[n,r,o],v),K((()=>{j.current.editor.setTheme(l)}),[l],v),K((()=>{M.current.updateOptions(d)}),[d],v);const P=(0,U.useCallback)((()=>{C.current(j.current);const c=j.current.editor.createModel(e,r||n,i&&j.current.Uri.parse(i)),a=j.current.editor.createModel(t,o||n,u&&j.current.Uri.parse(u));M.current.setModel({original:c,modified:a})}),[n,t,o,e,r,i,u]),R=(0,U.useCallback)((()=>{M.current=j.current.editor.createDiffEditor(E.current,{automaticLayout:!0,...d}),P(),j.current.editor.setTheme(l),b(!0)}),[d,l,P]);return(0,U.useEffect)((()=>{v&&k.current(M.current,j.current)}),[v]),(0,U.useEffect)((()=>{!w&&!v&&R()}),[w,v,R]),U.createElement(H,{width:g,height:f,isEditorReady:v,loading:s,_ref:E,className:p,wrapperClassName:h})}te.propTypes={original:B().string,modified:B().string,language:B().string,originalLanguage:B().string,modifiedLanguage:B().string,originalModelPath:B().string,modifiedModelPath:B().string,keepCurrentOriginalModel:B().bool,keepCurrentModifiedModel:B().bool,theme:B().string,loading:B().oneOfType([B().element,B().string]),options:B().object,width:B().oneOfType([B().number,B().string]),height:B().oneOfType([B().number,B().string]),className:B().string,wrapperClassName:B().string,beforeMount:B().func,onMount:B().func},te.defaultProps={theme:"light",loading:"Loading...",options:{},keepCurrentOriginalModel:!1,keepCurrentModifiedModel:!1,width:"100%",height:"100%",beforeMount:Q,onMount:Q};var ne=function(e){const t=(0,U.useRef)();return(0,U.useEffect)((()=>{t.current=e}),[e]),t.current};const[re,oe]=b.create({backup:null}),ie=new Map;function ue({defaultValue:e,defaultLanguage:t,defaultPath:n,value:r,language:o,path:i,theme:u,line:c,loading:a,options:l,overrideServices:s,saveViewState:d,keepCurrentModel:f,width:g,height:p,className:h,wrapperClassName:m,beforeMount:y,onMount:v,onChange:b,onValidate:w}){const[O,M]=(0,U.useState)(!1),[j,E]=(0,U.useState)(!0),k=(0,U.useRef)(null),C=(0,U.useRef)(null),P=(0,U.useRef)(null),R=(0,U.useRef)(v),T=(0,U.useRef)(y),S=(0,U.useRef)(null),N=(0,U.useRef)(r),V=ne(i);J((()=>{const e=z.init();return e.then((e=>(k.current=e)&&E(!1))).catch((e=>"cancelation"!==(null===e||void 0===e?void 0:e.type)&&console.error("Monaco initialization: error:",e))),()=>C.current?function(){var e,t;null===(e=S.current)||void 0===e||e.dispose(),f?d&&ie.set(i,C.current.saveViewState()):null===(t=C.current.getModel())||void 0===t||t.dispose();C.current.dispose()}():e.cancel()})),K((()=>{const n=X(k.current,e||r,t||o,i);n!==C.current.getModel()&&(d&&ie.set(V,C.current.saveViewState()),C.current.setModel(n),d&&C.current.restoreViewState(ie.get(i)))}),[i],O),K((()=>{C.current.updateOptions(l)}),[l],O),K((()=>{C.current.getOption(k.current.editor.EditorOption.readOnly)?C.current.setValue(r):r!==C.current.getValue()&&(C.current.executeEdits("",[{range:C.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),C.current.pushUndoStop())}),[r],O),K((()=>{k.current.editor.setModelLanguage(C.current.getModel(),o)}),[o],O),K((()=>{void 0!==c&&C.current.revealLine(c)}),[c],O),K((()=>{k.current.editor.setTheme(u)}),[u],O);const I=(0,U.useCallback)((()=>{T.current(k.current);const c=i||n,a=X(k.current,r||e,t||o,c);C.current=k.current.editor.create(P.current,{model:a,automaticLayout:!0,...l},s),d&&C.current.restoreViewState(ie.get(c)),k.current.editor.setTheme(u),re().backup||oe({backup:k.current.editor.setModelMarkers}),M(!0)}),[e,t,n,r,o,i,l,s,d,u]);return(0,U.useEffect)((()=>{O&&R.current(C.current,k.current)}),[O]),(0,U.useEffect)((()=>{!j&&!O&&I()}),[j,O,I]),N.current=r,(0,U.useEffect)((()=>{var e,t;O&&b&&(null===(e=S.current)||void 0===e||e.dispose(),S.current=null===(t=C.current)||void 0===t?void 0:t.onDidChangeModelContent((e=>{const t=C.current.getValue();N.current!==t&&b(t,e)})))}),[O,b]),(0,U.useEffect)((()=>{O&&(k.current.editor.setModelMarkers=function(e,t,n){var r;null===(r=re().backup)||void 0===r||r.call(k.current.editor,e,t,n),null===w||void 0===w||w(n)})}),[O,w]),U.createElement(H,{width:g,height:p,isEditorReady:O,loading:a,_ref:P,className:h,wrapperClassName:m})}ue.propTypes={defaultValue:B().string,defaultPath:B().string,defaultLanguage:B().string,value:B().string,language:B().string,path:B().string,theme:B().string,line:B().number,loading:B().oneOfType([B().element,B().string]),options:B().object,overrideServices:B().object,saveViewState:B().bool,keepCurrentModel:B().bool,width:B().oneOfType([B().number,B().string]),height:B().oneOfType([B().number,B().string]),className:B().string,wrapperClassName:B().string,beforeMount:B().func,onMount:B().func,onChange:B().func,onValidate:B().func},ue.defaultProps={theme:"light",loading:"Loading...",options:{},overrideServices:{},saveViewState:!0,keepCurrentModel:!1,width:"100%",height:"100%",beforeMount:Q,onMount:Q,onValidate:Q};var ce=ue,ae=(0,U.memo)(ce)}}]);