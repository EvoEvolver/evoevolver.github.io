import{_ as s,a as l}from"./DocumentEnd.68fa2fac.js";import{_ as r}from"./ContentTable.177d1447.js";import{_ as m}from"./CodeBox.1066f7f1.js";import{_ as h}from"./PreviewLink.abd7d611.js";import{a as g,b as n,e,h as t,z as p,o as _,p as u}from"./entry.eab4b9ab.js";import"./components.5ea30010.js";import"./composables.93fea509.js";const x=e("h1",{class:"title"},"Evomark cheat paper",-1),f=e("h2",{id:"section-0-1",index:"0.1"},"Markdowns",-1),N=e("div",{class:"paragraph"},[t("More detailed guide for Markdown grammars in Evomark is "),e("a",{href:"grammar-markdown"},"here"),t(".")],-1),C=e("h3",{id:"section-0-1-1",index:"0.1.1"},"Heading",-1),S=e("h3",{id:"section-0-1-2",index:"0.1.2"},"List",-1),v=e("h3",{id:"section-0-1-3",index:"0.1.3"},"Math",-1),k=e("h3",{id:"section-0-1-4",index:"0.1.4"},"Inline decoration",-1),b=e("h2",{id:"section-0-2",index:"0.2"},"Container",-1),y=e("div",{class:"paragraph"},[t("More detailed guide for container, config and inline commands is "),e("a",{href:"grammar-evomark"},"here"),t(".")],-1),w=e("div",{class:"paragraph"},"What a general container looks like",-1),T=e("div",{class:"paragraph"},[t("At least "),e("strong",null,"3"),t(" characters are needed. The closer should be as long as its opener.")],-1),M=e("h3",{id:"section-0-2-1",index:"0.2.1"},"Common containers",-1),I=e("h4",{id:"section-0-2-1-1",index:"0.2.1.1"},"Theorem, Figure, Equation",-1),E=e("h4",{id:"section-0-2-1-2",index:"0.2.1.2"},"Code, Table",-1),L=e("div",{class:"paragraph"},[t("You can use "),e("code",null,"===>"),t(" and "),e("code",null,"===|"),t(" to open and close a container.")],-1),Y=e("h3",{id:"section-0-2-2",index:"0.2.2"},"One line containers",-1),j=e("h2",{id:"section-0-3",index:"0.3"},"Inline command",-1),D=e("div",{class:"paragraph"},"Inline commands must begin with brackets.",-1),B={class:"paragraph"},$=e("code",null,"()",-1),A=e("code",null,"{}",-1),P=e("code",null,"[]()",-1),U=e("h2",{id:"section-0-4",index:"0.4"},"Config",-1),F=e("h3",{id:"section-0-4-1",index:"0.4.1"},"Config on a project",-1),O=e("div",{class:"paragraph"},[t("You can put the following codes in the "),e("code",null,"project_env.toml"),t(" file in your project root. It will automatically being imported.")],-1),q=e("h3",{id:"section-0-4-2",index:"0.4.2"},"Config on every page",-1),V=e("h3",{id:"section-0-4-3",index:"0.4.3"},"Authorship",-1),H=e("h4",{id:"section-0-4-3-1",index:"0.4.3.1"},"Define affiliations",-1),z=e("h4",{id:"section-0-4-3-2",index:"0.4.3.2"},"Define authors",-1),J=e("h4",{id:"section-0-4-3-3",index:"0.4.3.3"},"Define annotation",-1),G=e("div",{class:"paragraph"},[t("You can use "),e("code",null,"=== PaperHead ==="),t(" to show the authorship configured. You can put the authorship in a page or define it globally in "),e("code",null,"project_env.toml"),t(".")],-1),Z=e("h3",{id:"section-0-4-4",index:"0.4.4"},"Math macros",-1),R=e("div",{class:"paragraph"},[t("As the LaTeX math contents usually contains the symbol "),e("code",null,"\\"),t(", which needed to be escaped by "),e("code",null,"\\\\"),t(" in YAML and JSON, we suggest only use TOML for it. In TOML, you can use '''contents ''' to write literal contents. "),e("strong",null,"''' is three single quotes"),t(".")],-1),K=e("div",{class:"paragraph"},"You can write your math macros as",-1),W=e("div",{class:"paragraph"},[t("You may include them in a "),e("code",null,"math_macros.toml"),t(" file in the project root and then import them by "),e("code",null,'--- {src:"math_macros.toml"} ---'),t(".")],-1),X=e("h2",{id:"section-0-5",index:"0.5"},"Slides",-1),Q=e("div",{class:"paragraph"},[t("More detailed guide for slides is "),e("a",{href:"slides"},"here"),t(".")],-1),ee=e("h3",{id:"section-0-5-1",index:"0.5.1"},"Simplest slides",-1),ne=e("h3",{id:"slides-animation",index:"0.5.2"},"Slides animation",-1),te=e("h3",{id:"section-0-5-3",index:"0.5.3"},"Voices",-1),pe={__name:"cheat-paper",setup(oe){return u("pageEnv",{basePath:"docs_src",outputPathPrefix:"/page_assets",projectTitle:"Evomark",linearize:["index","install","grammar-markdown","grammar-evomark","slides","open-source-future","meta-info","credit-system","how-design","white-paper"],chatUrl:"https://gitter.im/EvoEvolver/community",gitRepoUrl:"https://github.com/EvoEvolver/evomark-framework/tree/main/docs_src",license:{title:"Creative Commons Attribution-ShareAlike 4.0 International License",link:"https://creativecommons.org/licenses/by-sa/4.0/"},affils:{uoft:"Department of Computer Science, University of Toronto, Canada"},author:[{givenName:"Zi-Jian",familyName:"Zhang",affil:["uoft"],note:["email"]}],authorNotes:{email:"zijian.academic@outlook.com"},responsibleAuthor:[{name:"Zi-Jian Zhang",link:"https://github.com/doomspec"}],idNames:{"section-0-1":{title:"Markdowns",tagName:"Section",index:[0,1]},"section-0-1-1":{title:"Heading",tagName:"Section",index:[0,1,1]},"code-1":{tagName:"Code",index:[1]},"section-0-1-2":{title:"List",tagName:"Section",index:[0,1,2]},"code-2":{tagName:"Code",index:[2]},"section-0-1-3":{title:"Math",tagName:"Section",index:[0,1,3]},"code-3":{tagName:"Code",index:[3]},"section-0-1-4":{title:"Inline decoration",tagName:"Section",index:[0,1,4]},"code-4":{tagName:"Code",index:[4]},"section-0-2":{title:"Container",tagName:"Section",index:[0,2]},"code-5":{tagName:"Code",index:[5]},"section-0-2-1":{title:"Common containers",tagName:"Section",index:[0,2,1]},"section-0-2-1-1":{title:"Theorem, Figure, Equation",tagName:"Section",index:[0,2,1,1]},"code-6":{tagName:"Code",index:[6]},"code-7":{tagName:"Code",index:[7]},"code-8":{tagName:"Code",index:[8]},"section-0-2-1-2":{title:"Code, Table",tagName:"Section",index:[0,2,1,2]},"code-9":{tagName:"Code",index:[9]},"code-10":{tagName:"Code",index:[10]},"section-0-2-2":{title:"One line containers",tagName:"Section",index:[0,2,2]},"code-11":{tagName:"Code",index:[11]},"section-0-3":{title:"Inline command",tagName:"Section",index:[0,3]},"code-12":{tagName:"Code",index:[12]},"code-13":{tagName:"Code",index:[13]},"section-0-4":{title:"Config",tagName:"Section",index:[0,4]},"code-14":{tagName:"Code",index:[14]},"code-15":{tagName:"Code",index:[15]},"section-0-4-1":{title:"Config on a project",tagName:"Section",index:[0,4,1]},"code-16":{tagName:"Code",index:[16]},"section-0-4-2":{title:"Config on every page",tagName:"Section",index:[0,4,2]},"code-17":{tagName:"Code",index:[17]},"section-0-4-3":{title:"Authorship",tagName:"Section",index:[0,4,3]},"section-0-4-3-1":{title:"Define affiliations",tagName:"Section",index:[0,4,3,1]},"code-18":{tagName:"Code",index:[18]},"section-0-4-3-2":{title:"Define authors",tagName:"Section",index:[0,4,3,2]},"code-19":{tagName:"Code",index:[19]},"section-0-4-3-3":{title:"Define annotation",tagName:"Section",index:[0,4,3,3]},"code-20":{tagName:"Code",index:[20]},"section-0-4-4":{title:"Math macros",tagName:"Section",index:[0,4,4]},"code-21":{tagName:"Code",index:[21]},"section-0-5":{title:"Slides",tagName:"Section",index:[0,5]},"section-0-5-1":{title:"Simplest slides",tagName:"Section",index:[0,5,1]},"code-22":{tagName:"Code",index:[22]},"slides-animation":{title:"Slides animation",tagName:"Section",index:[0,5,2]},"code-23":{tagName:"Code",index:[23]},"section-0-5-3":{title:"Voices",tagName:"Section",index:[0,5,3]},"code-24":{tagName:"Code",index:[24]}},counter:{Section:[0,5,3,0],Code:[24]},citedKeys:[],footnotes:[],title:"Evomark cheat paper",sectionList:[["section-0-1",1,"Markdowns"],["section-0-1-1",2,"Heading"],["section-0-1-2",2,"List"],["section-0-1-3",2,"Math"],["section-0-1-4",2,"Inline decoration"],["section-0-2",1,"Container"],["section-0-2-1",2,"Common containers"],["section-0-2-1-1",3,"Theorem, Figure, Equation"],["section-0-2-1-2",3,"Code, Table"],["section-0-2-2",2,"One line containers"],["section-0-3",1,"Inline command"],["section-0-4",1,"Config"],["section-0-4-1",2,"Config on a project"],["section-0-4-2",2,"Config on every page"],["section-0-4-3",2,"Authorship"],["section-0-4-3-1",3,"Define affiliations"],["section-0-4-3-2",3,"Define authors"],["section-0-4-3-3",3,"Define annotation"],["section-0-4-4",2,"Math macros"],["section-0-5",1,"Slides"],["section-0-5-1",2,"Simplest slides"],["slides-animation",2,"Slides animation"],["section-0-5-3",2,"Voices"]],authorBoxRecord:{affilIndices:{uoft:1},noteIndices:{email:1}},creditInfo:[],slidesMode:!1,outerLinks:[],bibDict:"bibPath not identified"}),(ae,de)=>{const i=s,a=r,o=m,d=h,c=l;return _(),g("div",null,[n(i),e("article",null,[x,n(a),f,N,C,n(o,{code:'# Heading {id:"some-id"}',lang:"plaintext",id:"code-1"}),S,n(o,{code:`- Item 1
- Item 2
1. Item 1
1. Item 2`,lang:"plaintext",id:"code-2"}),v,n(o,{code:`$inline-math$
$$
Math without indexing
$$
=== Equation
Indexed math container
===`,lang:"plaintext",id:"code-3"}),k,n(o,{code:"`Code`\n**Strong**\n*Italic*",lang:"plaintext",id:"code-4"}),b,y,w,n(o,{code:`=== Container'sName {container's attributes}
Container's content
===`,lang:"plaintext",id:"code-5"}),T,M,I,n(o,{code:`=== Theorem {id:"the-id", title:"the-title"}
Some content
===`,lang:"plaintext",id:"code-6"}),n(o,{code:`=== Figure {id:"the-id",title:"the-title",src:"./the/path"}
The caption
===`,lang:"plaintext",id:"code-7"}),n(o,{code:`=== Equation {id:"the-id",title:"the-title"}
E=mc^2
===`,lang:"plaintext",id:"code-8"}),E,L,n(o,{code:`==> Code {lang:"javascript"}
function helloWorld(){
    console.log("hello world!")
}
==|`,lang:"plaintext",id:"code-9"}),n(o,{code:`==== Table
[[item]]
Name = "Mike"
Subject = "Math"
Grade = "99"
[[item]]
Name = "Sarah"
Subject = "English"
Grade = "100"
~~~~
You can put the caption after the fence
====

==== Table {src:"some.file.toml"} ====`,lang:"plaintext",id:"code-10"}),Y,n(o,{code:`=== Title ===
=== Image {src:"", type:"normal/wide/narrow"} ===
=== CitationList ===
=== PaperHead ===
=== ContentTable ===`,lang:"plaintext",id:"code-11"}),j,D,n(o,{code:`[#referenceId]
[@citationKey]`,lang:"plaintext",id:"code-12"}),n(o,{code:`[$someCommand]()
[$someCommand]{}
[$someCommand](){}`,lang:"plaintext",id:"code-13"}),e("div",B,[$,t(" accepts plain text and "),A,t(" accepts a JSON key-value pairs. You can go to "),n(d,{target:["slides-animation"]},{default:p(()=>[t("Section\u20090.5.2")]),_:1}),t(" for an example of using "),P,t(".")]),U,n(o,{code:`---
title = "You config in TOML"
---`,lang:"plaintext",id:"code-14"}),n(o,{code:`--- {lang:"yaml"}
You config in YAML
---`,lang:"plaintext",id:"code-15"}),F,O,n(o,{code:`chatUrl = "Your link to the group channel"
gitRepoUrl = "Your link to the Git repo"
linearize = ["link-to-page1","link-to-page2","link-to-page3"]
bibPath = "path/to/your/bib-file"`,lang:"toml",id:"code-16"}),q,n(o,{code:`title = "Your title"
prevPage = "your-page-path"
nextPage.title = "Google"
nextPage.link = "https://www.google.com"`,lang:"toml",id:"code-17"}),V,H,n(o,{code:`[affils]
uoft = "Department of Computer Science, University of Toronto, Canada"
someUniversity = "The University's Name"`,lang:"toml",id:"code-18"}),z,n(o,{code:`[[author]]
givenName = "Foo"
familyName = "Bar"
affil = ["uoft","someUniversity"]
note = "aFootNote"
[[author]]
givenName = "Foo Jr."
familyName = "Bar"
affil = ["someUniversity"]
note = "email"`,lang:"toml",id:"code-19"}),J,n(o,{code:`[authorNotes]
aFootNote = "These authors contributed not equal"
email = "zijian.academic@outlook.com"`,lang:"toml",id:"code-20"}),G,Z,R,K,n(o,{code:`[mathMacros]
ket = '''|#1\\rangle'''
bra = '''\\langle #1|'''
trace = '''\\operatorname{Tr}'''
expectv = '''\\langle #1\\rangle'''`,lang:"toml",id:"code-21"}),W,X,Q,ee,n(o,{code:`=======> SlidesBox

# Slide 1

--- Slide ---

# Slide 2

--- Slide
title = ""
section = ""
---

# Slide 3

=======|`,lang:"plaintext",id:"code-22"}),ne,n(o,{code:`=======> SlidesBox

=== Box {clk:""}
Show first
===

=== Box {clk:"then"}
Show first
===

[$clk](then) Show first

- [$clk] Show second
- [$clk] Show third

========|`,lang:"plaintext",id:"code-23"}),te,n(o,{code:`=======> SlidesBox {voiceLang:"default-english/chinese/japanese"}

# A heading {clk:""}
=== Voice
I will be played after the heading shows
====

========|`,lang:"plaintext",id:"code-24"}),n(c)])])}}};export{pe as default};
