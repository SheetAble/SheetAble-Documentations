"use strict";(self.webpackChunksheet_uploader_docs=self.webpackChunksheet_uploader_docs||[]).push([[4947],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(h,a(a({ref:t},s),{},{components:n})):r.createElement(h,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},286:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={},u="Develoment & Contributions",p={unversionedId:"development",id:"version-0.8.1/development",isDocsHomePage:!1,title:"Develoment & Contributions",description:"This will be the getting started guide if you want to contribute or try out some stuff with SheetAble yourself!",source:"@site/versioned_docs/version-0.8.1/development.md",sourceDirName:".",slug:"/development",permalink:"/docs/development",editUrl:"https://github.com/SheetAble/SheetAble-Documentations/edit/main/versioned_docs/version-0.8.1/development.md",tags:[],version:"0.8.1",frontMatter:{},sidebar:"version-0.8.1/tutorialSidebar",previous:{title:"Configuration",permalink:"/docs/configuration"},next:{title:"Frequently Asked Questions",permalink:"/docs/faq"}},s=[{value:"Setting up the environment",id:"setting-up-the-environment",children:[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Setup the backend server",id:"setup-the-backend-server",children:[]},{value:"Setup the frontend",id:"setup-the-frontend",children:[]},{value:"Conclusion",id:"conclusion",children:[]}]}],c={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"develoment--contributions"},"Develoment & Contributions"),(0,i.kt)("p",null,"This will be the getting started guide if you want to contribute or try out some stuff with SheetAble yourself!"),(0,i.kt)("h2",{id:"setting-up-the-environment"},"Setting up the environment"),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://golang.org/"},"GoLang")," v1.6"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node")," v14, ",(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npm"))),(0,i.kt)("h3",{id:"setup-the-backend-server"},"Setup the backend server"),(0,i.kt)("h4",{id:"set-dev-mode"},"Set dev mode"),(0,i.kt)("p",null,"To setup the backend server for development you firstly have to add an ENV var to make sure CORS are activated so you can make requests from different domains. To do that simply set ",(0,i.kt)("inlineCode",{parentName:"p"},"DEV=1"),". (",(0,i.kt)("a",{parentName:"p",href:"https://www.schrodinger.com/kb/1842"},"How to set env vars?"),")"),(0,i.kt)("h4",{id:"run-server"},"Run server"),(0,i.kt)("p",null,"After that you can start running the server by going in the ",(0,i.kt)("inlineCode",{parentName:"p"},"backend")," directory and execute "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"go run main.go\n")),(0,i.kt)("h3",{id:"setup-the-frontend"},"Setup the frontend"),(0,i.kt)("p",null,"The frontend is written in React and accordingly created with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app"},"create-react-app"),". "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go into the ",(0,i.kt)("inlineCode",{parentName:"li"},"frontend")," directory with your terminal/command line"),(0,i.kt)("li",{parentName:"ol"},"Install the npm packages",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"npm install\n"))),(0,i.kt)("li",{parentName:"ol"},"Start the project",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"npm start\n")))),(0,i.kt)("h3",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"If you followed all the steps you should now have a development version of SheetAble running on your machine. Any changes in the frontend should automatically refresh your browser and the app. However if you make changes in the backend it will ",(0,i.kt)("strong",{parentName:"p"},"not")," automatically refresh the backend you have to restart the go process to take change."),(0,i.kt)("p",null,"Have fun developing \ud83c\udf89"))}d.isMDXComponent=!0}}]);