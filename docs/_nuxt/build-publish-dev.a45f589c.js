import{_ as r,a as s}from"./DocumentEnd.68fa2fac.js";import{_ as c}from"./CodeBox.1066f7f1.js";import{a as d,b as o,e,f as l,h as t,o as p,p as m}from"./entry.eab4b9ab.js";import"./components.5ea30010.js";import"./composables.93fea509.js";const h=e("h2",{id:"section-0-1",index:"0.1"},"Publish",-1),u=l('<div class="paragraph">The <a href="https://v3.nuxtjs.org/">Nuxt3</a> framework is a very new framework. We choose it because we expect it will be mature and perfect in the following years. Unfortunately, the static website generation function of Nuxt3 is still under developing, meaning that Evomark projects cannot be served by github page now. We expect the problem can be solved soon.</div><div class="paragraph"><strong>We don&#39;t recommend people who are not expert to do the following.</strong> If you want to make your Evomark project available on internet now, you need to have a server, with the following dependency installed</div><ul><li>node</li><li>npm &amp; yarn</li><li>pm2</li></ul><div class="paragraph">To deploy a project, you should create a folder named <code>.deploy</code> in the project&#39;s root, with a file <code>config.toml</code> inside. The content of <code>config.toml</code> should be</div>',4),v=e("div",{class:"paragraph"},[t("And in "),e("code",null,".deploy"),t(" there should be the private key "),e("code",null,"./key.pem"),t(" for the ssh server.")],-1),g=e("div",{class:"paragraph"},[t("With "),e("code",null,".deploy"),t(" setup, one can call")],-1),f=e("div",{class:"paragraph"},"to build and deploy the project.",-1),_=e("h2",{id:"section-0-2",index:"0.2"},"Development",-1),y=e("div",{class:"paragraph"},"If you are interested in develop this framework, you can first clone this repo, and setup the environment by running the following commands in the root.",-1),P={__name:"build-publish-dev",setup(b){return m("pageEnv",{basePath:"docs_src",outputPathPrefix:"/page_assets",projectTitle:"Evomark",linearize:["index","install","grammar-markdown","grammar-evomark","slides","open-source-future","meta-info","credit-system","how-design","white-paper"],chatUrl:"https://gitter.im/EvoEvolver/community",gitRepoUrl:"https://github.com/EvoEvolver/evomark-framework/tree/main/docs_src",license:{title:"Creative Commons Attribution-ShareAlike 4.0 International License",link:"https://creativecommons.org/licenses/by-sa/4.0/"},affils:{uoft:"Department of Computer Science, University of Toronto, Canada"},author:[{givenName:"Zi-Jian",familyName:"Zhang",affil:["uoft"],note:["email"]}],authorNotes:{email:"zijian.academic@outlook.com"},responsibleAuthor:[{name:"Zi-Jian Zhang",link:"https://github.com/doomspec"}],idNames:{"section-0-1":{title:"Publish",tagName:"Section",index:[0,1]},"code-1":{tagName:"Code",index:[1]},"code-2":{tagName:"Code",index:[2]},"section-0-2":{title:"Development",tagName:"Section",index:[0,2]},"code-3":{tagName:"Code",index:[3]}},counter:{Section:[0,2],Code:[3]},citedKeys:[],footnotes:[],sectionList:[["section-0-1",1,"Publish"],["section-0-2",1,"Development"]],authorBoxRecord:{affilIndices:{uoft:1},noteIndices:{email:1}},creditInfo:[],slidesMode:!1,outerLinks:[],bibDict:"bibPath not identified"}),(x,w)=>{const a=r,n=c,i=s;return p(),d("div",null,[o(a),e("article",null,[h,u,o(n,{code:`host = "your.host.ip.addr"
ssh_key = "./key.pem"
ssh_addr = "your.server.ip.addr"
ssh_user = "your-username"
deploy_path = "./evomark-project"`,lang:"toml",id:"code-1"}),v,g,o(n,{code:`yarn em-build ./your-project
yarn em-deploy ./your-project`,lang:"bash",id:"code-2"}),f,_,y,o(n,{code:`mkdir packages
cd packages
git clone https://github.com/EvoEvolver/evomark-loader.git
git clone https://github.com/EvoEvolver/evomark-it.git
git clone https://github.com/EvoEvolver/evomarked-nuxt.git
cd ..
yarn install`,lang:"bash",id:"code-3"}),o(i)])])}}};export{P as default};
