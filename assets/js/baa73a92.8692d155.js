"use strict";(self.webpackChunkmonogame_extended_website=self.webpackChunkmonogame_extended_website||[]).push([[6713],{6720:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>a,default:()=>f,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var o=n(4848),i=n(8453);const s={slug:"bmfont-update",title:"BitmapFont Updates",authors:"aris",tags:["bmfont","four-oh"],enableComments:!0},a=void 0,r={permalink:"/blog/bmfont-update",editUrl:"https://github.com/craftworkgames/craftworkgames.github.io/tree/develop/blog/2024-06-13/bmfont-update/bmfont-update.md",source:"@site/blog/2024-06-13/bmfont-update/bmfont-update.md",title:"BitmapFont Updates",description:"BMFont support has had a small update in MonoGame.Extended.",date:"2024-06-13T00:00:00.000Z",tags:[{inline:!1,label:"BitmapFonts",permalink:"/blog/tags/bitmap-fonts",description:"Updates on BitmapFont Support"},{inline:!1,label:"Version 4.0",permalink:"/blog/tags/4.0",description:"Version 4.0 Related News"}],readingTime:.955,hasTruncateMarker:!1,authors:[{name:"Christopher Whitley (AristurtleDev)",title:"MonoGame.Extended Maintainer",url:"https://github.com/aristurtledev",imageURL:"https://github.com/aristurtledev.png",key:"aris"}],frontMatter:{slug:"bmfont-update",title:"BitmapFont Updates",authors:"aris",tags:["bmfont","four-oh"],enableComments:!0},unlisted:!1,prevItem:{title:"MonoGame.Extended Chews GUM",permalink:"/blog/monogame-extended-gum"},nextItem:{title:"Update Status 2024-06-12",permalink:"/blog/update-2024-06-12"}},h={authorsImageUrls:[void 0]},d=[];function u(e){const t={a:"a",code:"code",img:"img",p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"BMFont support has had a small update in MonoGame.Extended."}),"\n",(0,o.jsxs)(t.p,{children:["Previously, MonoGame.Extended required that the ",(0,o.jsx)(t.code,{children:".fnt"})," file created by BMFont be exported as XML. However, BMFont offers two other export formats, Text and Binary, both of which were not supported."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"BMFont File Format Options",src:n(8236).A+"",width:"402",height:"104"})}),"\n",(0,o.jsxs)(t.p,{children:["With ",(0,o.jsx)(t.a,{href:"https://github.com/craftworkgames/MonoGame.Extended/pull/887",children:"PR #887"})," all three export formats are now supported both when loading the file directly at runtime or if you want to use the Content Pipeline to preprocess the file."]}),"\n",(0,o.jsxs)(t.p,{children:["This change is significant because it means that you can use any tool that can export a ",(0,o.jsx)(t.code,{children:".fnt"})," file in the AngleCode Bitmap Font file format, such as ",(0,o.jsx)(t.a,{href:"https://libgdx.com/wiki/tools/hiero",children:"libGDX Hiero"})," which can be used cross platform.  Previously only the AngleCode BMFont application could be used, which was Windows only, unless you setup WINE on macOS or Linux to run it."]}),"\n",(0,o.jsx)(t.p,{children:"Another benefit of this is that Hiero supports exporting the fonts as Signed Distance Field, which means I can start implementing SDF Font Rendering support."}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.a,{href:"../../../docs/features/fonts/bitmapfont/",children:"BitmapFont Feature"})," article has also been updated to better explain how to use the feature."]}),"\n",(0,o.jsx)(t.p,{children:"That's all for now, hope everyone is having a great week."}),"\n",(0,o.jsx)(t.p,{children:"- Aris"})]})}function f(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},8236:(e,t,n)=>{n.d(t,{A:()=>o});const o="data:image/png;base64,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"},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var o=n(6540);const i={},s=o.createContext(i);function a(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);