"use strict";(self.webpackChunkmonogame_extended_website=self.webpackChunkmonogame_extended_website||[]).push([[9212],{3753:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var A=n(4848),o=n(8453);const i={id:"bitmapfont",title:"Bitmap Font",sidebar_label:"Bitmap Font"},s=void 0,r={id:"features/fonts/bitmapfont/bitmapfont",title:"Bitmap Font",description:"This is an overview of the BitmapFont feature in MonoGame.Extended.  BitmapFonts are font files (.fnt) created using the AngelCode BMFont format. You can generate these files with tools like the BMFont tool or alternatives such as libGDX Hiero.",source:"@site/docs/features/fonts/bitmapfont/bitmapfont.md",sourceDirName:"features/fonts/bitmapfont",slug:"/features/fonts/bitmapfont/",permalink:"/docs/features/fonts/bitmapfont/",draft:!1,unlisted:!1,editUrl:"https://github.com/craftworkgames/craftworkgames.github.io/tree/develop/docs/features/fonts/bitmapfont/bitmapfont.md",tags:[],version:"current",frontMatter:{id:"bitmapfont",title:"Bitmap Font",sidebar_label:"Bitmap Font"},sidebar:"docs",previous:{title:"AnimatedSprite",permalink:"/docs/features/2d-animations/animatedsprite/"},next:{title:"KeyboardExtended",permalink:"/docs/features/input/keyboardextended/"}},a={},d=[{value:"Installing BMFont",id:"installing-bmfont",level:2},{value:"The BMFont Main Window",id:"the-bmfont-main-window",level:2},{value:"Choosing A Font",id:"choosing-a-font",level:2},{value:"Choosing Export Settings",id:"choosing-export-settings",level:2},{value:"Generating the Export",id:"generating-the-export",level:2},{value:"Loading the <code>BitmapFont</code> in Your Game",id:"loading-the-bitmapfont-in-your-game",level:2},{value:"Loading From File At Runtime",id:"loading-from-file-at-runtime",level:3},{value:"Loading Using The Content Pipeline.",id:"loading-using-the-content-pipeline",level:3},{value:"Rendering text in your game",id:"rendering-text-in-your-game",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(t.p,{children:["This is an overview of the ",(0,A.jsx)(t.code,{children:"BitmapFont"})," feature in ",(0,A.jsx)(t.strong,{children:"MonoGame.Extended"}),".  ",(0,A.jsx)(t.code,{children:"BitmapFonts"})," are font files (",(0,A.jsx)(t.code,{children:".fnt"}),") created using the ",(0,A.jsx)(t.a,{href:"https://www.angelcode.com/products/bmfont/",children:"AngelCode BMFont"})," format. You can generate these files with tools like the ",(0,A.jsx)(t.a,{href:"https://www.angelcode.com/products/bmfont/",children:"BMFont"})," tool or alternatives such as ",(0,A.jsx)(t.a,{href:"https://libgdx.com/wiki/tools/hiero",children:"libGDX Hiero"}),"."]}),"\n",(0,A.jsxs)(t.p,{children:["In this article, we'll explore why ",(0,A.jsx)(t.code,{children:"BitmapFonts"})," are a great alternative to the built-in ",(0,A.jsx)(t.code,{children:"SpriteFont"})," in MonoGame. Whether you're facing limitations with SpriteFont or seeking more control over your game fonts, ",(0,A.jsx)(t.code,{children:"BitmapFonts"})," provide a robust solution."]}),"\n",(0,A.jsxs)(t.p,{children:["We'll also dive into the ",(0,A.jsx)(t.code,{children:"BitmapFont"})," class in MonoGame.Extended, designed to act as a drop-in replacement for the SpriteFont class. You'll learn how to take the ",(0,A.jsx)(t.code,{children:".fnt"})," files and associated textures generated by these tools and seamlessly load them into your game, just like any other content"]}),"\n",(0,A.jsx)(t.h2,{id:"installing-bmfont",children:"Installing BMFont"}),"\n",(0,A.jsx)(t.p,{children:"To generate the font files and associated textures, you'll need a tool that outputs in the AngelCode BMFont format. For this tutorial, we'll use the official AngelCode BMFont tool. Follow these steps to get started:"}),"\n",(0,A.jsxs)(t.ol,{children:["\n",(0,A.jsxs)(t.li,{children:["Open your browser and navigate to ",(0,A.jsx)(t.a,{href:"https://www.angelcode.com/products/bmfont/",children:"https://www.angelcode.com/products/bmfont/"}),"."]}),"\n",(0,A.jsxs)(t.li,{children:["Click the download link for version ",(0,A.jsx)(t.strong,{children:"1.14a"}),", which includes both x86 and x64 assemblies.  This will download the ",(0,A.jsx)(t.strong,{children:"bmfont1.14a.zip"})," file."]}),"\n",(0,A.jsx)(t.li,{children:"Extract the contents of the downloaded zip file."}),"\n"]}),"\n",(0,A.jsxs)(t.p,{children:["After extracting the contents of the zip file, you can run the BMFont tool by using either the ",(0,A.jsx)(t.strong,{children:"bmfont32.exe"})," or ",(0,A.jsx)(t.strong,{children:"bmfont64.exe"})," executable found in the extracted directory."]}),"\n",(0,A.jsx)(t.h2,{id:"the-bmfont-main-window",children:"The BMFont Main Window"}),"\n",(0,A.jsx)(t.p,{children:"When you first open BMFont, you'll see a screen similar to this:"}),"\n",(0,A.jsx)(t.p,{children:(0,A.jsx)(t.img,{alt:"BMFont tool",src:n(4075).A+"",width:"748",height:"505"})}),"\n",(0,A.jsx)(t.p,{children:"This is the main window of BMFont, displaying all the characters of the font. You can click and drag over the characters to highlight or unhighlight them. Only the highlighted characters will be exported. Additionally, you can use the checkboxes on the right-hand side to select a full set from the font file, such as just the Latin characters.."}),"\n",(0,A.jsx)(t.admonition,{type:"tip",children:(0,A.jsx)(t.p,{children:"Unless you need every character glyph from a font, it's recommended to highlight only the characters you'll use. This practice helps reduce the final texture size by exporting only the necessary characters."})}),"\n",(0,A.jsx)(t.h2,{id:"choosing-a-font",children:"Choosing A Font"}),"\n",(0,A.jsxs)(t.p,{children:["To change the font you want to export, open the ",(0,A.jsx)(t.strong,{children:"Font Settings"})," dialog. You can do this by clicking ",(0,A.jsx)(t.strong,{children:"Options"})," and then ",(0,A.jsx)(t.strong,{children:"Font Settings"})," from the top menu, or by using the ",(0,A.jsx)(t.strong,{children:"F"})," keyboard shortcut."]}),"\n",(0,A.jsx)(t.p,{children:(0,A.jsx)(t.img,{alt:"BMFont tool",src:n(2338).A+"",width:"286",height:"506"})}),"\n",(0,A.jsxs)(t.p,{children:["In the ",(0,A.jsx)(t.strong,{children:"Font Settings"})," dialog, you can select the font you want to export, set the font size, and adjust various other settings. These adjustments will impact the texture file generated during the export process."]}),"\n",(0,A.jsxs)(t.p,{children:["Once you've chosen your desired font and configured the settings, click the ",(0,A.jsx)(t.strong,{children:"OK"})," button at the bottom to close the ",(0,A.jsx)(t.strong,{children:"Font Settings"})," dialog."]}),"\n",(0,A.jsx)(t.h2,{id:"choosing-export-settings",children:"Choosing Export Settings"}),"\n",(0,A.jsxs)(t.p,{children:["To adjust the export settings, open the ",(0,A.jsx)(t.strong,{children:"Export Options"})," dialog. You can do this by clicking ",(0,A.jsx)(t.strong,{children:"Options"})," and then ",(0,A.jsx)(t.strong,{children:"Export Settings"})," from the top menu, or by using the ",(0,A.jsx)(t.strong,{children:"T"})," keyboard shortcut."]}),"\n",(0,A.jsx)(t.p,{children:(0,A.jsx)(t.img,{alt:"BMFont tool",src:n(6774).A+"",width:"284",height:"615"})}),"\n",(0,A.jsxs)(t.p,{children:["In the ",(0,A.jsx)(t.strong,{children:"Export Options"})," dialog, you can adjust various settings related to the export. The key settings to focus on are ",(0,A.jsx)(t.strong,{children:"File Format"}),", ",(0,A.jsx)(t.strong,{children:"Texture"}),", ",(0,A.jsx)(t.strong,{children:"Bit Depth"}),", and the ",(0,A.jsx)(t.strong,{children:"Alpha"}),", ",(0,A.jsx)(t.strong,{children:"Red"}),", ",(0,A.jsx)(t.strong,{children:"Green"}),", and ",(0,A.jsx)(t.strong,{children:"Blue"})," channel settings."]}),"\n",(0,A.jsxs)(t.ul,{children:["\n",(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.strong,{children:"Bit Depth"}),": It is recommended to set this to ",(0,A.jsx)(t.strong,{children:"32 bits"}),"."]}),"\n",(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.strong,{children:"Textures"}),": Set this to ",(0,A.jsx)(t.strong,{children:"PNG"}),"."]}),"\n",(0,A.jsxs)(t.li,{children:[(0,A.jsx)(t.strong,{children:"File Format"}),": Any of the available formats can be used, as MonoGame.Extended supports all three. The ",(0,A.jsx)(t.strong,{children:"Binary"})," format will produce a smaller file, but it is not human-readable like the XML or Text formats. Since manual editing of the file is typically unnecessary, using the Binary format is advisable."]}),"\n"]}),"\n",(0,A.jsxs)(t.p,{children:["For the ",(0,A.jsx)(t.strong,{children:"Alpha"}),", ",(0,A.jsx)(t.strong,{children:"Red"}),", ",(0,A.jsx)(t.strong,{children:"Green"}),", and ",(0,A.jsx)(t.strong,{children:"Blue"})," channel settings, it is recommended to use the ",(0,A.jsx)(t.strong,{children:"White text with alpha"})," option from the ",(0,A.jsx)(t.strong,{children:"Presets"})," drop-down."]}),"\n",(0,A.jsx)(t.p,{children:"You can experiment with different settings to see how they affect the output."}),"\n",(0,A.jsxs)(t.p,{children:["Once you have chosen your desired export settings, click the ",(0,A.jsx)(t.strong,{children:"OK"})," button at the bottom to close the ",(0,A.jsx)(t.strong,{children:"Export Options"})," dialog."]}),"\n",(0,A.jsx)(t.h2,{id:"generating-the-export",children:"Generating the Export"}),"\n",(0,A.jsxs)(t.p,{children:["Once you have finished configuring the ",(0,A.jsx)(t.strong,{children:"Font Settings"})," and ",(0,A.jsx)(t.strong,{children:"Export Options"}),", highlight all the character glyphs you want to export by clicking on them from the main screen. After selecting the desired characters, you can preview the final texture output by clicking ",(0,A.jsx)(t.strong,{children:"Options"})," and then ",(0,A.jsx)(t.strong,{children:"Visualize"})," from the top menu, or by using the ",(0,A.jsx)(t.strong,{children:"V"})," keyboard shortcut."]}),"\n",(0,A.jsxs)(t.p,{children:["Once you are satisfied with the output, generate the export by clicking ",(0,A.jsx)(t.strong,{children:"Options"})," and then ",(0,A.jsx)(t.strong,{children:"Save bitmap font as"})," from the top menu, or by using the ",(0,A.jsx)(t.strong,{children:"Ctrl+S"})," keyboard shortcut."]}),"\n",(0,A.jsxs)(t.p,{children:["Saving the font will produce a ",(0,A.jsx)(t.code,{children:".fnt"})," file along with one or more texture files."]}),"\n",(0,A.jsxs)(t.h2,{id:"loading-the-bitmapfont-in-your-game",children:["Loading the ",(0,A.jsx)(t.code,{children:"BitmapFont"})," in Your Game"]}),"\n",(0,A.jsxs)(t.p,{children:["Now that you have the ",(0,A.jsx)(t.code,{children:".fnt"})," file and textures generated, you can use them in your MonoGame project. You have two options for loading them:"]}),"\n",(0,A.jsxs)(t.ol,{children:["\n",(0,A.jsx)(t.li,{children:"Load them directly from file at runtime."}),"\n",(0,A.jsxs)(t.li,{children:["Use the MonoGame Content Pipeline to preprocess them and load them using the ",(0,A.jsx)(t.code,{children:"ContentManager"}),"."]}),"\n"]}),"\n",(0,A.jsx)(t.p,{children:"Both methods are described in the sections below."}),"\n",(0,A.jsx)(t.h3,{id:"loading-from-file-at-runtime",children:"Loading From File At Runtime"}),"\n",(0,A.jsxs)(t.p,{children:["To load the ",(0,A.jsx)(t.code,{children:"BitmapFont"})," at runtime, ensure that the ",(0,A.jsx)(t.code,{children:".fnt"})," file and the texture files associated with it are in the same directory. They must be in the same directory; otherwise, loading will fail when attempting to load the textures. Then you can load them using the ",(0,A.jsx)(t.code,{children:"BitmapFont.FromFile"})," or ",(0,A.jsx)(t.code,{children:"BitmapFont.FromStream"})," methods."]}),"\n",(0,A.jsx)(t.p,{children:(0,A.jsx)(t.strong,{children:"From File Example"})}),"\n",(0,A.jsx)(t.pre,{children:(0,A.jsx)(t.code,{className:"language-cs",children:'BitmapFont bmfont = BitmapFont.FromFile("path/to/my-font.fnt");\n'})}),"\n",(0,A.jsx)(t.p,{children:(0,A.jsx)(t.strong,{children:"From Stream Example"})}),"\n",(0,A.jsx)(t.pre,{children:(0,A.jsx)(t.code,{className:"language-cs",children:'using(var stream = TitleContainer.OpenStream("Content/my-font.fnt"))\n{\n    BitmapFont bmfont = BitmapFont.FromStream(stream);\n}\n'})}),"\n",(0,A.jsx)(t.h3,{id:"loading-using-the-content-pipeline",children:"Loading Using The Content Pipeline."}),"\n",(0,A.jsxs)(t.p,{children:["To load the ",(0,A.jsx)(t.code,{children:".fnt"})," files using the Content Pipeline, you first need to add the ",(0,A.jsx)(t.code,{children:"MonoGame.Extended.Content.Pipeline.dll"})," reference to the ",(0,A.jsx)(t.strong,{children:"MGCB Editor"}),". If you have not done this yet, please reference the ",(0,A.jsx)(t.a,{href:"/docs/getting-started/installation-monogame",children:"Installation"})," article."]}),"\n",(0,A.jsxs)(t.p,{children:["Once the reference is added, you can add the ",(0,A.jsx)(t.code,{children:".fnt"})," file and its associated textures to the ",(0,A.jsx)(t.strong,{children:"MGCB Editor"}),". If you are using directories inside the MGCB Editor to organize content, ensure that the textures for the .fnt file are placed in the same directory as the .fnt file."]}),"\n",(0,A.jsx)(t.p,{children:(0,A.jsx)(t.img,{alt:"MonoGame.Extended BMFont importer",src:n(1848).A+"",width:"886",height:"768"})}),"\n",(0,A.jsxs)(t.p,{children:["Once the ",(0,A.jsx)(t.code,{children:".fnt"})," file and textures are added to the project, build the content project. After that, you can load the ",(0,A.jsx)(t.code,{children:"BitmapFont"})," using the ",(0,A.jsx)(t.code,{children:"ContentManager"}),"."]}),"\n",(0,A.jsx)(t.pre,{children:(0,A.jsx)(t.code,{className:"language-cs",children:'BitmapFont bmfont = Content.Load<BitmapFont>("my-font");\n'})}),"\n",(0,A.jsx)(t.h2,{id:"rendering-text-in-your-game",children:"Rendering text in your game"}),"\n",(0,A.jsxs)(t.p,{children:[(0,A.jsx)(t.strong,{children:"MonoGame.Extended"})," provides extension methods for the ",(0,A.jsx)(t.code,{children:"SpriteBatch"})," that to allow you to easily render text in your game using the ",(0,A.jsx)(t.code,{children:"BitmapFont"})," file after it's been loaded."]}),"\n",(0,A.jsxs)(t.p,{children:["In your ",(0,A.jsx)(t.code,{children:"Draw"})," method use the ",(0,A.jsx)(t.code,{children:"DrawString"})," extension method to render text, much like you would with a traditional ",(0,A.jsx)(t.code,{children:"SpriteFont"}),"."]}),"\n",(0,A.jsx)(t.pre,{children:(0,A.jsx)(t.code,{className:"language-csharp",children:'_spriteBatch.Begin();\n_spriteBatch.DrawString(bmfont, "Hello World", new Vector2(50, 50), Color.White);\n_spriteBatch.End();\n'})}),"\n",(0,A.jsx)(t.p,{children:(0,A.jsx)(t.img,{alt:"MonoGame.Extended Bitmap Fonts",src:n(7170).A+"",width:"802",height:"512"})})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,A.jsx)(t,{...e,children:(0,A.jsx)(h,{...e})}):h(e)}},6774:(e,t,n)=>{n.d(t,{A:()=>A});const A=n.p+"assets/images/bmfont-export-options-eaa9d4b404ad573af96c960fa32c5791.png"},2338:(e,t,n)=>{n.d(t,{A:()=>A});const A="data:image/png;base64,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"},4075:(e,t,n)=>{n.d(t,{A:()=>A});const A=n.p+"assets/images/bmfont-tool-e64f375ec5e8f4c6da0b5f4750891c63.png"},7170:(e,t,n)=>{n.d(t,{A:()=>A});const A="data:image/png;base64,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WQAAETILACBCZgEARMgsAIAImQUAECGzAAAiZBYAQITMAgCIkFkAABEyCwAgQmYBAETILACACJkFABAhswAAImQWAECEzAIAiJBZAAARMgsAIEJmAQBEyCwAgAiZBQAQIbMAACJkFgBAhMwCAIiQWQAAETILACBCZgEARMgsAIAImQUAECGzAAAiZBYAQITMAgCIkFkAABEyCwAgQmYBAETILACACJkFABAhswAAImQWAECEzAIAiJBZAAARMgsAIEJmAQBEyCwAgAiZBQAQIbMAACJkFgBAhMwCAIiQWQAAETILACBCZgEARMgsAIAImQUAECGzAAAiZBYAQITMAgCIkFkAABEyCwAgQmYBAETILACACJkFABAhswAAImQWAECEzAIAiJBZAAARMgsAIEJmAQBEyCwAgAiZBQAQIbMAACJkFgBAhMwCAIiQWQAAETILACBCZgEARMgsAIAImQUAECGzAAAiZBYAQITMAgCIkFkAABEyCwAgQmYBAETILACACJkFABAhswAAImQWAECEzAIAiJBZAAARMgsAIEJmAQBEyCwAgAiZBQAQIbMAACJkFgBAhMwCAIiQWQAAETILACBCZgEARMgsAIAImQUAECGzAAAiZBYAQITMAgCIkFkAABEyCwAgQmYBAETILACACJkFABAhswAAImQWAECEzAIAiJBZAAARMgsAIEJmAQBEyCwAgAiZBQAQIbMAACJkFgBAhMwCAIiQWQAAETILACBCZgEARMgsAIAImQUAECGzAAAiZBYAQITMAgCIkFkAABEyCwAgQmYBAETILACACJkFABAhswAAImQWAECEzAIAiJBZAAARMgsAIEJmAQBEyCwAgAiZBQAQIbMAACJkFgBAhMwCAIiQWQAAETILACBCZgEARMgsAIAImQUAECGzAAAiZBYAQITMAgCIkFkAABEyCwAgQmYBAETILACACJkFABAhswAAImQWAECEzAIAiJBZAAARMgsAIEJmAQBEyCwAgAiZBQAQIbMAACJkFgBAhMwCAIiQWQAAETILACBCZgEARMgsAIAImQUAECGzAAAiZBYAQITMAgCIkFkAABEyCwAgQmYBAETILACACJkFABAhswAAImQWAECEzAIAiJBZAAARMgsAIEJmAQBEyCwAgAiZBQAQIbMAACJkFgBAhMwCAIiQWQAAETILACBCZgEARMgsAIAImQUAECGzAAAiZBYAQITMAgCIkFkAABEyCwAgQmYBAETILACACJkFABAhswAAImQWAECEzAIAiJBZAAARMgsAIEJmAQBEyCwAgAiZBQAQIbMAACJkFgBAhMwCAIiQWQAAETILACBCZgEARMgsAIAImQUAECGzAAAiZBYAQITMAgCIkFkAABEyCwAgQmYBAETILACACJkFABAhswAAImQWAECEzAIAiJBZAAARMgsAIEJmAQBEyCwAgAiZBQAQIbMAACJkFgBAhMwCAIiQWQAAETILACBCZgEARMgsAIAImQUAECGzAAAiZBYAQITMAgCIkFkAABEyCwAgQmYBAETILACACJkFABAhswAAImQWAECEzAIAiJBZAAARMgsAIEJmAQBEyCwAgAiZBQAQIbMAACJkFgBAhMwCAIiQWQAAETILACBCZgEARMgsAIAImQUAECGzAAAiZBYAQITMAgCIkFkAABEyCwAgQmYBAETILACACJkFABAhswAAImQWAECEzAIAiJBZAAARMgsAIEJmAQBEyCwAgAiZBQAQIbMAACJkFgBAhMwCAIiQWQAAETILACBCZgEARMgsAIAImQUAECGzAAAiZBYAQITMAgCIkFkAABEyCwAgQmYBAETILACACJkFABAhswAAImQWAECEzAIAiJBZAAARMgsAIEJmAQBEyCwAgAiZBQAQIbMAACJkFgBAhMwCAIiQWQAAETILACBCZgEARMgsAIAImQUAECGzAAAiZBYAQITMAgCIkFkAABEyCwAgQmYBAETILACACJkFABAhswAAImQWAECEzAIAiJBZAAARMgsAIEJmAQBEyCwAgAiZBQAQIbMAACJkFgBAhMwCAIiQWQAAETILACBCZgEARMgsAIAImQUAECGzAAAiZBYAQITMAgCIkFkAABEyCwAgQmYBAETILACACJkFABAhswAAImQWAECEzAIAiJBZAAARMgsAIEJmAQBEyCwAgAiZBQAQIbMAACJkFgBAhMwCAIiQWQAAETILACBCZgEARMgsAIAImQUAECGzAAAiZBYAQITMAgCIkFkAABEyCwAgQmYBAETILACACJkFABAhswAAImQWAECEzAIAiJBZAAARMgsAIEJmAQBEyCwAgIjxqampdhIAgN0yNvb/zJcogM4b0soAAAAASUVORK5CYII="},1848:(e,t,n)=>{n.d(t,{A:()=>A});const A=n.p+"assets/images/monogame-extended-bmfont-importer-processor-b4d8a656b3694592f54c1ebf2a814f70.png"},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var A=n(6540);const o={},i=A.createContext(o);function s(e){const t=A.useContext(i);return A.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),A.createElement(i.Provider,{value:t},e.children)}}}]);