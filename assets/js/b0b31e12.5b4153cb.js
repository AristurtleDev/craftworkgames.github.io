"use strict";(self.webpackChunkmonogame_extended_website=self.webpackChunkmonogame_extended_website||[]).push([[3727],{194:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var o=n(4848),a=n(8453);const i={slug:"monogame-extended-gum",title:"MonoGame.Extended Chews GUM",authors:"aris",tags:["four-oh","gum","ui"],enableComments:!0,image:"./banner.png",description:"MonoGame.Extended Meets GUM"},s=void 0,r={permalink:"/blog/monogame-extended-gum",editUrl:"https://github.com/craftworkgames/craftworkgames.github.io/tree/develop/blog/2024-06-15/monogame-extended-gum/monogame-extended-gum.md",source:"@site/blog/2024-06-15/monogame-extended-gum/monogame-extended-gum.md",title:"MonoGame.Extended Chews GUM",description:"MonoGame.Extended Meets GUM",date:"2024-06-15T00:00:00.000Z",tags:[{inline:!1,label:"Version 4.0",permalink:"/blog/tags/4.0",description:"Version 4.0 Related News"},{inline:!1,label:"GUM UI",permalink:"/blog/tags/gum",description:"Posts related to the GUI UI integration into MonoGame.Extended"},{inline:!1,label:"UI",permalink:"/blog/tags/ui",description:"Posts related to UI in MonoGame.Extended."}],readingTime:2.85,hasTruncateMarker:!1,authors:[{name:"Christopher Whitley (AristurtleDev)",title:"MonoGame.Extended Maintainer",url:"https://github.com/aristurtledev",imageURL:"https://github.com/aristurtledev.png",key:"aris"}],frontMatter:{slug:"monogame-extended-gum",title:"MonoGame.Extended Chews GUM",authors:"aris",tags:["four-oh","gum","ui"],enableComments:!0,image:"./banner.png",description:"MonoGame.Extended Meets GUM"},unlisted:!1,prevItem:{title:"FNA and KNI Support",permalink:"/blog/kni-fna"},nextItem:{title:"BitmapFont Updates",permalink:"/blog/bmfont-update"}},d={image:n(869).A,authorsImageUrls:[void 0]},l=[{value:"MonoGame.Extended.GUI",id:"monogameextendedgui",level:2},{value:"Meet GUM",id:"meet-gum",level:2},{value:"What Does This Mean?",id:"what-does-this-mean",level:2},{value:"What About MonoGame.Extended.Gui?",id:"what-about-monogameextendedgui",level:2},{value:"Let&#39;s Wrap This Up",id:"lets-wrap-this-up",level:2}];function h(e){const t={a:"a",em:"em",h2:"h2",img:"img",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"MonoGame.Extended Logo In GUM Tool",src:n(6548).A+"",width:"2376",height:"1570"})}),"\n",(0,o.jsxs)(t.p,{children:["If you've been active in the MonoGame Discord or other community spaces lately, you might have heard of ",(0,o.jsx)(t.a,{href:"https://docs.flatredball.com/gum",children:"GUM"}),". GUM is a game UI layout tool created by Victor Chelaru (",(0,o.jsx)(t.a,{href:"https://github.com/vchelaru",children:"@vchelaru"}),") and is used in the engine he maintains, ",(0,o.jsx)(t.a,{href:"https://flatredball.com/",children:"FlatRedBall"}),". Recently, it was updated to work as a standalone tool that can be used in any MonoGame project."]}),"\n",(0,o.jsx)(t.p,{children:"As I review the backlog of issues in MonoGame.Extended and prepare for the library's future, you can probably guess where this post is heading."}),"\n",(0,o.jsx)(t.h2,{id:"monogameextendedgui",children:"MonoGame.Extended.GUI"}),"\n",(0,o.jsx)(t.p,{children:"Initially, a port of Nuclex GUI was made as a GUI solution in MonoGame.Extended. Following that, Dylan, the original creator and maintainer of MonoGame.Extended, began work on the current MonoGame.Extended.Gui library."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Forum Post About Nuclex",src:n(1577).A+"",width:"1864",height:"698"})}),"\n",(0,o.jsxs)(t.p,{children:["Dylan's original statement that ",(0,o.jsx)(t.strong,{children:'"It\u2019s quite a big job creating a really solid GUI system."'})," is very true. Not only is it a big job to create one, but it's also a significant effort to maintain it, fix bugs, and add new features."]}),"\n",(0,o.jsx)(t.h2,{id:"meet-gum",children:"Meet GUM"}),"\n",(0,o.jsx)(t.p,{children:"I've been keeping an eye on Vic's GUM Tool for a while now, and it's a solid tool. GUM consists of two parts: the GUM Layout Engine, which is the code framework, and the GUM Tool."}),"\n",(0,o.jsx)(t.p,{children:"The GUM Tool is a WYSIWYG Editor where you can visually create the UI elements for your game."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"GUM Tool Editor",src:n(9435).A+"",width:"1532",height:"948"})}),"\n",(0,o.jsxs)(t.p,{children:["You can export your creations from the editor to a format that can be loaded into MonoGame and used. Alternatively, if you prefer not to use the editor, ",(0,o.jsx)(t.strong,{children:"you don't have to"}),". GUM also supports a code-first approach to creating layouts and UI."]}),"\n",(0,o.jsxs)(t.p,{children:["I highly recommend checking it out. Here's the ",(0,o.jsx)(t.a,{href:"https://docs.flatredball.com/gum/monogame/setup",children:"MonoGame Setup"})," documentation page for it."]}),"\n",(0,o.jsx)(t.h2,{id:"what-does-this-mean",children:"What Does This Mean?"}),"\n",(0,o.jsxs)(t.p,{children:["As I look forward to the future of MonoGame.Extended, I need to determine how best to maintain and advance the library. To quote Dylan again, ",(0,o.jsx)(t.strong,{children:'"It\u2019s quite a big job creating a really solid GUI system."'})," Vic has done this with GUM and done it well."]}),"\n",(0,o.jsx)(t.p,{children:"After discussing with Vic earlier today, I will begin working with him to integrate GUM into MonoGame.Extended, replacing the current MonoGame.Extended.Gui portion. This means that GUM will become the standard supported UI choice in MonoGame.Extended in the future."}),"\n",(0,o.jsx)(t.h2,{id:"what-about-monogameextendedgui",children:"What About MonoGame.Extended.Gui?"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.em,{children:"Deleted, gone"}),"...."]}),"\n",(0,o.jsx)(t.p,{children:"Just kidding. A lot of work has gone into MonoGame.Extended.Gui. From Dylan's initial efforts to the contributions from various contributors, I have great respect for the time and effort invested in it."}),"\n",(0,o.jsx)(t.p,{children:"It\u2019s a significant part of MonoGame.Extended\u2019s history, and I wouldn't just discard the work that's been done. Some may still wish to use and contribute to it in the future."}),"\n",(0,o.jsx)(t.p,{children:"Therefore, when the time comes, MonoGame.Extended.Gui will be moved out of the main MonoGame.Extended repository into its own separate project, where it can continue to exist and be used by those who prefer it."}),"\n",(0,o.jsx)(t.h2,{id:"lets-wrap-this-up",children:"Let's Wrap This Up"}),"\n",(0,o.jsx)(t.p,{children:"In conclusion, the focus of the UI portion of MonoGame.Extended will shift to using GUM UI. The existing MonoGame.Extended.Gui project will be moved to its own repository, where it can be maintained separately."}),"\n",(0,o.jsxs)(t.p,{children:["If you have a moment, I encourage you to check out ",(0,o.jsx)(t.a,{href:"https://docs.flatredball.com/gum",children:"GUM"}),". It truly is an amazing tool, and I look forward to its integration into the MonoGame.Extended ecosystem."]}),"\n",(0,o.jsx)(t.p,{children:"If you have any questions or concerns, please let me know in the comments below or on Discord. Have a great weekend, everyone."}),"\n",(0,o.jsx)(t.p,{children:"- Aris"})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},869:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/banner-f90f64060b95adf927ed25ee6a209420.png"},6548:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/banner-f90f64060b95adf927ed25ee6a209420.png"},9435:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/gum-tool-example-092f22f27f063f13bf96221696fd5fe3.png"},1577:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/nuclex-gui-d5a107f0795450ff5c5dd5b957e1fc6b.png"},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var o=n(6540);const a={},i=o.createContext(a);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);