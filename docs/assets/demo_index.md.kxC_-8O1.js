import{g as D}from"./chunks/sentence.Bo2MnGnf.js";import{_ as B,a4 as d,a5 as F,D as l,o as C,b as r,w as t,j as s,t as k,d as g,c as y,I as A,a as c}from"./chunks/framework.Cm8Y9Emv.js";import"./chunks/commonjsHelpers.BosuxZz1.js";const o={setup(){const i=d({list:D(100,0)});return{...F(i)}}},m={class:"list-item"},x={class:"item-title"},u={class:"index"},v=s("span",{class:"handle"},"☰",-1);function f(i,a,p,h,w,V){const E=l("virtual-list");return C(),r(E,{modelValue:i.list,"onUpdate:modelValue":a[0]||(a[0]=n=>i.list=n),keeps:15,"data-key":"id",handle:".handle",class:"basic-list"},{item:t(({record:n,index:e,dateKey:$})=>[s("div",m,[s("div",x,[s("span",u,"#"+k(e),1),v]),s("p",null,k(n.desc),1)])]),_:1},8,["modelValue"])}const _=B(o,[["render",f]]),b=s("h1",{id:"basic-usage",tabindex:"-1"},[c("Basic usage "),s("a",{class:"header-anchor",href:"#basic-usage","aria-label":'Permalink to "Basic usage"'},"​")],-1),K=JSON.parse('{"title":"Basic usage","description":"","frontmatter":{},"headers":[],"relativePath":"demo/index.md","filePath":"demo/index.md"}'),P={name:"demo/index.md"},S=g({...P,setup(i){return(a,p)=>{const h=l("demo-preview");return C(),y("div",null,[b,A(h,{title:"",description:"",code:"%3Ctemplate%3E%0A%20%20%3Cvirtual-list%0A%20%20%20%20v-model=%22list%22%0A%20%20%20%20:keeps=%2215%22%0A%20%20%20%20data-key=%22id%22%0A%20%20%20%20handle=%22.handle%22%0A%20%20%20%20class=%22basic-list%22%0A%20%20%3E%0A%20%20%20%20%3Ctemplate%20v-slot:item=%22%7B%20record,%20index,%20dateKey%20%7D%22%3E%0A%20%20%20%20%20%20%3Cdiv%20class=%22list-item%22%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20class=%22item-title%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class=%22index%22%3E#%7B%7B%20index%20%7D%7D%3C/span%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class=%22handle%22%3E%E2%98%B0%3C/span%3E%0A%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%3Cp%3E%7B%7B%20record.desc%20%7D%7D%3C/p%3E%0A%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%3C/template%3E%0A%20%20%3C/virtual-list%3E%0A%3C/template%3E%0A%0A%3Cscript%3E%0Aimport%20%7B%20reactive,%20toRefs%20%7D%20from%20'vue';%0Aimport%20%7B%20getPageData%20%7D%20from%20'../public/sentence';%0Aexport%20default%20%7B%0A%20%20setup()%20%7B%0A%20%20%20%20const%20data%20=%20reactive(%7B%0A%20%20%20%20%20%20list:%20getPageData(100,%200),%0A%20%20%20%20%7D);%0A%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20...toRefs(data),%0A%20%20%20%20%7D;%0A%20%20%7D,%0A%7D;%0A%3C/script%3E%0A%0A%3Cstyle%3E%0A.basic-list%20%7B%0A%20%20height:%20500px;%0A%7D%0A%0A.basic-list%20.list-item%20%7B%0A%20%20position:%20relative;%0A%20%20border-radius:%205px;%0A%20%20box-shadow:%200px%202px%2010px%20-5px%20#57bbb4;%0A%20%20padding:%2016px;%0A%7D%0A%0A.item-title%20%7B%0A%20%20display:%20flex;%0A%20%20justify-content:%20space-between;%0A%7D%0A%0A.index%20%7B%0A%20%20float:%20left;%0A%7D%0A%0A.handle%20%7B%0A%20%20cursor:%20grab;%0A%20%20text-align:%20right;%0A%7D%0A%3C/style%3E%0A",showCode:"%3Cpre%20class%3D%22shiki%20shiki-themes%20vitesse-light%20vitesse-dark%20vp-code%22%20tabindex%3D%220%22%20v-pre%3D%22%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Evirtual-list%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2359873A%3B--shiki-dark%3A%2380A665%22%3E%20%20%20%20v-model%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3Elist%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%20%20%3A%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2359873A%3B--shiki-dark%3A%2380A665%22%3Ekeeps%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%232F798A%3B--shiki-dark%3A%234C9A91%22%3E15%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20%20%20%20data-key%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3Eid%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20%20%20%20handle%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3E.handle%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20%20%20%20class%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3Ebasic-list%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2359873A%3B--shiki-dark%3A%2380A665%22%3E%20v-slot%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2359873A%3B--shiki-dark%3A%2380A665%22%3Eitem%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%7B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20record%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%2C%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20index%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%2C%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20dateKey%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%7D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20class%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3Elist-item%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%20%20%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20class%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3Eitem-title%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%20%20%20%20%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Espan%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20class%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3Eindex%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23393A34%3B--shiki-dark%3A%23DBD7CAEE%22%3E%23%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%7B%7B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20index%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%7D%7D%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Espan%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%20%20%20%20%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Espan%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20class%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3Ehandle%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23393A34%3B--shiki-dark%3A%23DBD7CAEE%22%3E%E2%98%B0%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Espan%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%20%20%20%20%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%20%20%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Ep%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%7B%7B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20record%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3Edesc%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%7D%7D%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Ep%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%20%20%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Evirtual-list%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%7B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20reactive%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%2C%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20toRefs%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%7D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3E%20from%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%20'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3Evue%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%7B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20getPageData%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%7D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3E%20from%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E%20'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B56959%3B--shiki-dark%3A%23C98A7D%22%3E..%2Fpublic%2Fsentence%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B5695999%3B--shiki-dark%3A%23C98A7D99%22%3E'%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Eexport%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3E%20default%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2359873A%3B--shiki-dark%3A%2380A665%22%3E%20%20setup%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E()%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23AB5959%3B--shiki-dark%3A%23CB7676%22%3E%20%20%20%20const%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3E%20data%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2359873A%3B--shiki-dark%3A%2380A665%22%3E%20reactive%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E(%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23998418%3B--shiki-dark%3A%23B8A965%22%3E%20%20%20%20%20%20list%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2359873A%3B--shiki-dark%3A%2380A665%22%3E%20getPageData%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%232F798A%3B--shiki-dark%3A%234C9A91%22%3E100%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%2C%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%232F798A%3B--shiki-dark%3A%234C9A91%22%3E%200%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E)%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%20%20%7D)%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3E%20%20%20%20return%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%20%20%20%20...%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2359873A%3B--shiki-dark%3A%2380A665%22%3EtoRefs%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3Edata%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E)%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%20%20%7D%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%20%7D%2C%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%7D%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3Ebasic-list%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23998418%3B--shiki-dark%3A%23B8A965%22%3E%20%20height%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%232F798A%3B--shiki-dark%3A%234C9A91%22%3E%20500%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23AB5959%3B--shiki-dark%3A%23CB7676%22%3Epx%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3Ebasic-list%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20.%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3Elist-item%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23998418%3B--shiki-dark%3A%23B8A965%22%3E%20%20position%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23A65E2B%3B--shiki-dark%3A%23C99076%22%3E%20relative%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23998418%3B--shiki-dark%3A%23B8A965%22%3E%20%20border-radius%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%232F798A%3B--shiki-dark%3A%234C9A91%22%3E%205%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23AB5959%3B--shiki-dark%3A%23CB7676%22%3Epx%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23998418%3B--shiki-dark%3A%23B8A965%22%3E%20%20box-shadow%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%232F798A%3B--shiki-dark%3A%234C9A91%22%3E%200%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23AB5959%3B--shiki-dark%3A%23CB7676%22%3Epx%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%232F798A%3B--shiki-dark%3A%234C9A91%22%3E%202%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23AB5959%3B--shiki-dark%3A%23CB7676%22%3Epx%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%232F798A%3B--shiki-dark%3A%234C9A91%22%3E%2010%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23AB5959%3B--shiki-dark%3A%23CB7676%22%3Epx%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%232F798A%3B--shiki-dark%3A%234C9A91%22%3E%20-5%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23AB5959%3B--shiki-dark%3A%23CB7676%22%3Epx%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%23%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23A65E2B%3B--shiki-dark%3A%23C99076%22%3E57bbb4%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23998418%3B--shiki-dark%3A%23B8A965%22%3E%20%20padding%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%232F798A%3B--shiki-dark%3A%234C9A91%22%3E%2016%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23AB5959%3B--shiki-dark%3A%23CB7676%22%3Epx%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3Eitem-title%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23998418%3B--shiki-dark%3A%23B8A965%22%3E%20%20display%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23A65E2B%3B--shiki-dark%3A%23C99076%22%3E%20flex%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23998418%3B--shiki-dark%3A%23B8A965%22%3E%20%20justify-content%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23A65E2B%3B--shiki-dark%3A%23C99076%22%3E%20space-between%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3Eindex%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23998418%3B--shiki-dark%3A%23B8A965%22%3E%20%20float%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23A65E2B%3B--shiki-dark%3A%23C99076%22%3E%20left%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E.%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23B07D48%3B--shiki-dark%3A%23BD976A%22%3Ehandle%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23998418%3B--shiki-dark%3A%23B8A965%22%3E%20%20cursor%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23A65E2B%3B--shiki-dark%3A%23C99076%22%3E%20grab%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23998418%3B--shiki-dark%3A%23B8A965%22%3E%20%20text-align%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23A65E2B%3B--shiki-dark%3A%23C99076%22%3E%20right%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%231E754F%3B--shiki-dark%3A%234D9375%22%3Estyle%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23999999%3B--shiki-dark%3A%23666666%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E",suffixName:"vue",absolutePath:"E:\\GitHub Desktop\\pages\\vue-virtual-drag-list\\components\\basic.vue",relativePath:"../components/basic.vue"},{default:t(()=>[A(_)]),_:1})])}}});export{K as __pageData,S as default};
