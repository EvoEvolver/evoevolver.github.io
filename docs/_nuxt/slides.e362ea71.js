import{_ as w,a as b}from"./DocumentEnd.68fa2fac.js";import{_ as y}from"./CodeBox.1066f7f1.js";import{_ as S,a as I,b as N}from"./SlidesBox.53de1a02.js";import{a as C,_ as B}from"./SlidesControl.00bee2e3.js";import{q as E,y as h,o as f,a as v,m as P,h as o,t as V,u as g,b as t,e,z as n,f as $,p as T}from"./entry.eab4b9ab.js";import"./components.5ea30010.js";import"./composables.93fea509.js";const A=["href"],H={__name:"OuterRef",props:{page:String,label:String},setup(m){const a=m,s=E("globalEnv"),u=h(()=>{if(a.page)return a.page;if(!s.value)return null;for(let i in s.value.idNames)if(s.value.idNames[i][a.label])return i}),p=h(()=>{if(!s.value)return;let i;if(a.page?i=s.value.idNames[a.page]:i=s.value.idNames[u.value],!i)return"Page"+a.page+"not found";if(!a.label)return s.value.pageInfo[a.page].title;let l=i[a.label];if(!!l)return l.title?l.tagName+": "+l.title:l.tagName+" "+l.index.join(".")+"(other page)"}),c=h(()=>{let i=a.page||u.value;return i=="index"&&(i="/"),a.label&&(i+="#"+a.label),i});return(i,l)=>(f(),v("a",{href:g(c)},[P(i.$slots,"default",{},()=>[o(V(g(p)||"Here"),1)])],8,A))}},q=e("h1",{id:"section-1",index:"1"},"Making slides in Evomark",-1),Y=e("div",{class:"paragraph"},[o("To start making slides in Evomark, you just need to begin with a "),e("code",null,"SlidesBox"),o(" container.")],-1),M=e("div",{class:"paragraph"},"You can begin the container by a plain opener without specify its direction. However, we strongly suggest not to do so as a SlidesBox container will have many children containers.",-1),j=e("div",{class:"paragraph"},[o("To make a new slide, you just need to insert "),e("code",null,"--- Slide ---"),o(" to the middle of the SlidesBox. You can also put config of the new slide by using")],-1),D=e("div",{class:"paragraph"},"A usual slides in Evomark will be like",-1),L=e("div",{class:"paragraph"},"The effect of the above code is at below.",-1),R=e("h1",{id:"section-2",index:"2"},"I'm a place holder.",-1),U=e("h1",{id:"section-3",index:"3"},"I'm also a place holder.",-1),Z=e("ul",null,[e("li",null,"Hello"),e("li",null,"\u4F60\u597D"),e("li",null,"\u304A\u306F\u3088\u3046\uFF01")],-1),z=e("h1",{id:"section-4",index:"4"},"Animation in a slide",-1),J=$('<div class="paragraph">It is usually to show the content of a slide step by step in order to control the attention of the listeners. In Evomark, you can add an additional attribute <code>clk:&quot;&quot;</code> (means click) to a container to achieve this.</div><div><div><div class="paragraph">I will be shown after a click.</div></div><div><div class="paragraph">I will be shown after two clicks in total.</div></div><div><div class="paragraph">I will be shown after two clicks in total.</div></div></div><div class="paragraph">Also, as you can see in the above example, you can also add <code>clk:&quot;then&quot;</code> to the container. This will make the container show itself together with the last component with <code>clk:&quot;&quot;</code>. We show the effect below.</div>',3),O=e("div",null,[e("div",{class:"paragraph"},"I will be shown after a click.")],-1),W=e("div",null,[e("div",{class:"paragraph"},"I will be shown after two clicks in total.")],-1),F=e("div",null,[e("div",{class:"paragraph"},"I will be shown after two clicks in total.")],-1),K=e("div",{class:"paragraph"},[o("For inline contents like a paragraph, you can use inline command "),e("code",null,"[$clk]"),o(" (equivalent to "),e("code",null,'clk:""'),o(") or "),e("code",null,"[$clk](then)"),o(" to achieve the same effect. You just need to add them in the beginning of the inline content. You will see how can we use this in the next section.")],-1),G=e("h1",{id:"section-5",index:"5"},"Adding voices",-1),Q=e("div",{class:"paragraph"},[o("You can add voices in the slides by using the "),e("code",null,"Voice"),o(" container. The "),e("code",null,"Voice"),o(" containers by default are with attribute "),e("code",null,'clk:"then"'),o(". Here, we will show how can you create a bullet point presentation in Evomark.")],-1),X=e("h1",{id:"section-6",index:"6"},"Bullet points",-1),ee=e("div",{class:"paragraph",clk:"then"}," I'm a hidden paragraph!",-1),te=e("h1",{id:"section-7",index:"7"},"Columns",-1),ne=e("div",{class:"paragraph"},[o("You can divide your slides into columns by "),e("code",null,"Cols"),o(" as below.")],-1),oe=e("div",{class:"paragraph"},[o("Here, we specified the widths of the columns. If the attribute "),e("code",null,"widths"),o(" is left blank, equally spaced columns will be produced. The effect of the above code is shown below.")],-1),ie=e("table",{class:"layout-table"},[e("tr",null,[e("td",{style:{width:"25%"}},[e("div",{class:"paragraph"},"Col1")]),e("td",{style:{width:"50%"}},[e("div",{style:{"background-color":"red"}},[e("div",{class:"paragraph"},"Col2")])]),e("td",{style:{width:"25%"}},[e("div",{class:"paragraph"},"Col2")])])],-1),ae=e("h1",{id:"section-8",index:"8"},"Multi-language support",-1),le=e("div",{class:"paragraph"},"You can set the voice language of a slides by opening it like",-1),se={class:"paragraph"},ce={id:"outerlink-0"},ge={__name:"slides",setup(m){return T("pageEnv",{basePath:"docs_src",outputPathPrefix:"/page_assets",projectTitle:"Evomark",linearize:["index","install","grammar-markdown","grammar-evomark","slides","open-source-future","meta-info","credit-system","how-design","white-paper"],chatUrl:"https://gitter.im/EvoEvolver/community",gitRepoUrl:"https://github.com/EvoEvolver/evomark-framework/tree/main/docs_src",license:{title:"Creative Commons Attribution-ShareAlike 4.0 International License",link:"https://creativecommons.org/licenses/by-sa/4.0/"},affils:{uoft:"Department of Computer Science, University of Toronto, Canada"},author:[{givenName:"Zi-Jian",familyName:"Zhang",affil:["uoft"],note:["email"]}],authorNotes:{email:"zijian.academic@outlook.com"},responsibleAuthor:[{name:"Zi-Jian Zhang",link:"https://github.com/doomspec"}],idNames:{"section-1":{title:"Making slides in Evomark",tagName:"Section",index:[1]},"code-1":{tagName:"Code",index:[1]},"code-2":{tagName:"Code",index:[2]},"code-3":{tagName:"Code",index:[3]},"presentation-1":{tagName:"Presentation",index:[1]},"section-2":{title:"I'm a place holder.",tagName:"Section",index:[2]},"section-3":{title:"I'm also a place holder.",tagName:"Section",index:[3]},"section-4":{title:"Animation in a slide",tagName:"Section",index:[4]},"presentation-2":{tagName:"Presentation",index:[2]},"section-5":{title:"Adding voices",tagName:"Section",index:[5]},"code-4":{tagName:"Code",index:[4]},"presentation-3":{tagName:"Presentation",index:[3]},"section-6":{title:"Bullet points",tagName:"Section",index:[6]},"voice-1":{tagName:"Voice",index:[1]},"voice-2":{tagName:"Voice",index:[2]},"section-7":{title:"Columns",tagName:"Section",index:[7]},"code-5":{tagName:"Code",index:[5]},"presentation-4":{tagName:"Presentation",index:[4]},"section-8":{title:"Multi-language support",tagName:"Section",index:[8]},"code-6":{tagName:"Code",index:[6]}},counter:{Section:[8],Code:[6],Presentation:[4],Voice:[2]},citedKeys:[],footnotes:[],title:"Writing slides by Evomark",prevPage:"grammar-evomark",sectionList:[["section-1",0,"Making slides in Evomark"],["section-2",0,"I'm a place holder."],["section-3",0,"I'm also a place holder."],["section-4",0,"Animation in a slide"],["section-5",0,"Adding voices"],["section-6",0,"Bullet points"],["section-7",0,"Columns"],["section-8",0,"Multi-language support"]],useSlides:!0,slideMode:!0,authorBoxRecord:{affilIndices:{uoft:1},noteIndices:{email:1}},creditInfo:[],slidesMode:!1,outerLinks:[["","voice-language","outerlink-0"]],bibDict:"bibPath not identified",slideSection:null}),(s,u)=>{const p=w,c=y,i=I,l=N,r=S,d=C,_=B,x=H,k=b;return f(),v("div",null,[t(p),e("article",null,[q,Y,t(c,{code:`========> SlidesBox
The contents
========|`,lang:"plaintext",id:"code-1"}),M,j,t(c,{code:`--- Slide
section = "Section 1"
title = ""
---`,lang:"plaintext",id:"code-2"}),D,t(c,{code:`========> SlidesBox
--- Slide 
section = "Section 1"
title = "Title 1"
---

# I'm a place holder.

--- Slide ---

# I'm also a place holder.

- Hello
- \u4F60\u597D
- \u304A\u306F\u3088\u3046\uFF01

========|`,lang:"plaintext",id:"code-3"}),L,t(r,{id:"presentation-1"},{default:n(()=>[t(l,null,{default:n(()=>[t(i,{title:"Title 1",section:"Section 1"},{default:n(()=>[R]),_:1})]),_:1}),t(l,null,{default:n(()=>[t(i,{section:"Section 1"},{default:n(()=>[U,Z]),_:1})]),_:1})]),_:1}),z,J,t(r,{id:"presentation-2"},{default:n(()=>[t(l,null,{default:n(()=>[t(i,null,{default:n(()=>[t(d,{clkIn:1},{default:n(()=>[O]),_:1}),t(d,{clkIn:2},{default:n(()=>[W]),_:1}),t(d,{clkIn:2,autoIn:1},{default:n(()=>[F]),_:1})]),_:1})]),_:1})]),_:1}),K,G,Q,t(c,{code:`# Bullet points
- [$clk]Point 1
    === Voice
    Hi everyone. You can see point 1 now.
    ===
- [$clk]Point 2
    === Voice
    Hey, this is point 2!
    ===
[$clk](then) I'm a hidden paragraph!`,lang:"plaintext",id:"code-4"}),t(r,{id:"presentation-3"},{default:n(()=>[t(l,null,{default:n(()=>[t(i,null,{default:n(()=>[X,e("ul",null,[e("li",null,[t(d,{clkIn:1},{default:n(()=>[o(" Point 1")]),_:1}),t(d,{clkIn:1,autoIn:1},{default:n(()=>[t(_,{text:"Hi everyone. You can see point 1 now."})]),_:1})]),e("li",null,[t(d,{clkIn:2},{default:n(()=>[o(" Point 2")]),_:1}),t(d,{clkIn:2,autoIn:1},{default:n(()=>[t(_,{text:"Hey, this is point 2!"})]),_:1})])]),t(d,{clkIn:2,autoIn:2},{default:n(()=>[ee]),_:1})]),_:1})]),_:1})]),_:1}),te,ne,t(c,{code:`=====> SlidesBox
=====> Cols {widths:[1,2,1]}
Col1
~~~~~~
=== Box {style:"background-color:red;"}
Col2
===
~~~~~~
Col2
======|
======|`,lang:"plaintext",id:"code-5"}),oe,t(r,{id:"presentation-4"},{default:n(()=>[t(l,null,{default:n(()=>[t(i,null,{default:n(()=>[ie]),_:1})]),_:1})]),_:1}),ae,le,t(c,{code:'=====> SlidesBox {voiceLang: "Japanese"}',lang:"plaintext",id:"code-6"}),e("div",se,[o("See more in "),e("span",ce,[t(x,{page:"voice-language",label:""})]),o(".")]),t(k)])])}}};export{ge as default};