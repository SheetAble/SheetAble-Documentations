"use strict";(self.webpackChunksheet_uploader_docs=self.webpackChunksheet_uploader_docs||[]).push([[4748],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,g=c["".concat(u,".").concat(d)]||c[d]||m[d]||l;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1270:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={},u="Configuration",p={unversionedId:"configuration",id:"version-0.8.1/configuration",isDocsHomePage:!1,title:"Configuration",description:"Currently, the only way to change most settings in SheetAble is through the env variables.",source:"@site/versioned_docs/version-0.8.1/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/docs/configuration",editUrl:"https://github.com/SheetAble/SheetAble-Documentations/edit/main/versioned_docs/version-0.8.1/configuration.md",tags:[],version:"0.8.1",frontMatter:{},sidebar:"version-0.8.1/tutorialSidebar",previous:{title:"Native Installation",permalink:"/docs/Installation/native-installation"},next:{title:"Develoment & Contributions",permalink:"/docs/development"}},s=[{value:"How to change environment variables",id:"how-to-change-environment-variables",children:[{value:"Change vars in Docker",id:"change-vars-in-docker",children:[]},{value:"Change vars natively",id:"change-vars-natively",children:[]}]},{value:"Available Settings",id:"available-settings",children:[]}],m={toc:s};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"configuration"},"Configuration"),(0,l.kt)("p",null,"Currently, the only way to change most settings in SheetAble is through the env variables."),(0,l.kt)("h2",{id:"how-to-change-environment-variables"},"How to change environment variables"),(0,l.kt)("h3",{id:"change-vars-in-docker"},"Change vars in Docker"),(0,l.kt)("p",null,"To change the env variables in Docker you just have to customize your running command by adding a ",(0,l.kt)("inlineCode",{parentName:"p"},'-e SETTING="SETTING_VALUE"')," to it."),(0,l.kt)("h3",{id:"change-vars-natively"},"Change vars natively"),(0,l.kt)("p",null,"You can also change env variables natively. "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Either you add a ",(0,l.kt)("inlineCode",{parentName:"li"},".env")," file in the running directory (recommended)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"The file should look like this:")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-env"},"SETTING=SETTING_VALUE\nNEXT_SETTING=NEXT_SETTING_VALUE\n"))),(0,l.kt)("li",{parentName:"ul"},"You export the env var on your OS",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Windows"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'C:\\> SET SETTING="SETTING_VALUE"')))),(0,l.kt)("li",{parentName:"ul"},"Unix based systems (",(0,l.kt)("strong",{parentName:"li"},"Mac"),", ",(0,l.kt)("strong",{parentName:"li"},"Linux"),"):",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"export SETTING=SETTING_VALUE"))))))),(0,l.kt)("h2",{id:"available-settings"},"Available Settings"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Setting"),(0,l.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"API_SECRET"),(0,l.kt)("td",{parentName:"tr",align:null},"This can be any string you want with which your jwt key is going to be encrypted")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DB_DRIVER"),(0,l.kt)("td",{parentName:"tr",align:null},"mysql, postgres, sqlite")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DB_HOST"),(0,l.kt)("td",{parentName:"tr",align:null},"Use mysql or postgres? Enter IP here.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DB_USER"),(0,l.kt)("td",{parentName:"tr",align:null},"Use mysql or postgres? Enter db username here.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DB_PASSWORD"),(0,l.kt)("td",{parentName:"tr",align:null},"Use mysql or postgres? Enter db password here.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DB_NAME"),(0,l.kt)("td",{parentName:"tr",align:null},"Use mysql or postgres? Enter db name here.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DB_PORT"),(0,l.kt)("td",{parentName:"tr",align:null},"Use mysql or postgres? Enter db port here.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ADMIN_EMAIL"),(0,l.kt)("td",{parentName:"tr",align:null},"Your admin email")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ADMIN_PASSWORD"),(0,l.kt)("td",{parentName:"tr",align:null},"Your admin password")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PORT"),(0,l.kt)("td",{parentName:"tr",align:null},"Default: 8080 - Can be mapped to any port you want (e.g. 8181:8080)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DEV"),(0,l.kt)("td",{parentName:"tr",align:null},"0, 1 -  if 1: activated dev mode for developing purposes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CONFIG_PATH"),(0,l.kt)("td",{parentName:"tr",align:null},"Path where you want your data to be instead of in the root dir")))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/SheetAble/SheetAble-Documentations/main/static/files/.env.sample"},"Get sample .env file here")))}c.isMDXComponent=!0}}]);