(this.webpackJsonpstreamlit_component_template=this.webpackJsonpstreamlit_component_template||[]).push([[0],{72:function(e,t,n){var a={"./beige.css":[74,3],"./black-contrast.css":[75,10],"./black.css":[76,11],"./blood.css":[77,12],"./dracula.css":[78,16],"./fonts/league-gothic/league-gothic.css":[79,17],"./fonts/source-sans-pro/source-sans-pro.css":[80,18],"./league.css":[81,4],"./moon.css":[82,5],"./night.css":[83,6],"./serif.css":[84,19],"./simple.css":[85,7],"./sky.css":[86,8],"./solarized.css":[87,9],"./white-contrast.css":[88,13],"./white.css":[89,14],"./white_contrast_compact_verbatim_headers.css":[90,15]};function s(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],s=t[0];return n.e(t[1]).then((function(){return n.t(s,7)}))}s.keys=function(){return Object.keys(a)},s.id=72,e.exports=s},73:function(e,t,n){"use strict";n.r(t);var a=n(6),s=n.n(a),i=n(34),o=n.n(i),c=n(5),r=n(40),u=n(10),l=n(35),f=n(7),h=n(15),g=n.n(h),d=n(36),m=n.n(d),p=n(20),v=n.n(p),j=n(37),b=n.n(j),O=n(38),x=n.n(O),y=n(39),w=n.n(y),S=(n(68),n(69),n(9)),_=Object(r.a)(["",""],(function(e){return e.inject})),k={markdown:g.a,highlight:m.a,katex:v.a.KaTeX,mathjax2:v.a.MathJax2,mathjax3:v.a.MathJax3,search:b.a,notes:x.a,zoom:w.a},E={width:900,height:860,margin:.05,minScale:.1,maxScale:3,controlsTutorial:!0,controlsLayout:"edges"},C=Object(u.b)((function(e){var t=e.args,s=e.disabled,i=JSON.stringify(t.config),o=JSON.stringify(t.initial_state),r=function(e){var n,a=Object(c.a)(Object(c.a)({},E),JSON.parse(i));t.allow_unsafe_html?"plugins"in a&&((n=a.plugins).forEach((function(e,t){n[t]=e in k?k[e]:null})),a.plugins=n.filter((function(e){return!!e}))):"plugins"in a?((n=a.plugins).forEach((function(e,t){n[t]=e in k?k[e]:null})),a.plugins=n.filter((function(e){return!!e})),a.plugins.includes(g.a)||a.plugins.push(g.a)):a.plugins=[g.a];return a};Object(a.useMemo)((function(){n(72)("./"+t.theme+".css").then((function(e){try{f.a.layout()}catch(t){console.warn("Reveal.layout() call failed.")}})).catch((function(e){console.warn("Failed CSS import: ",e)}))}),[t.theme]),Object(a.useEffect)((function(){var e=r();try{f.a.destroy()}catch(n){}return f.a.initialize(e).then((function(){var e=f.a.getPlugin("highlight");e&&e.init(f.a);var n=JSON.parse(o);if(0!==Object.keys(n).length&&f.a.setState(n),!t.display_only){var a=f.a.getState();u.a.setComponentValue(a),f.a.on("slidechanged",(function(e){var t=f.a.getState();u.a.setComponentValue({indexh:e.indexh,indexv:e.indexv,indexf:t.indexf,paused:t.paused,overview:t.overview})})),f.a.on("fragmentshown",(function(e){var t=f.a.getState();u.a.setComponentValue(t)})),f.a.on("fragmenthidden",(function(e){var t=f.a.getState();u.a.setComponentValue(t)})),f.a.on("overviewshown",(function(e){var t=f.a.getState();u.a.setComponentValue(t)})),f.a.on("overviewhidden",(function(e){var t=f.a.getState();u.a.setComponentValue(t)})),f.a.on("paused",(function(e){var t=f.a.getState();u.a.setComponentValue(t)})),f.a.on("resumed",(function(e){var t=f.a.getState();u.a.setComponentValue(t)}))}})),function(){f.a.destroy()}}),[]),Object(a.useEffect)((function(){var e=f.a.getPlugins(),n=r(),a=Object.values(e).map((function(e){return e.id}));"plugins"in t.config&&t.config.plugins.forEach((function(e){e&&-1===a.indexOf(e)&&f.a.registerPlugin(k[e])}));f.a.configure(n)}),[i,t.allow_unsafe_html]),Object(a.useEffect)((function(){var e=JSON.parse(o);f.a.isReady()&&0!==Object.keys(e).length&&f.a.setState(e)}),[o]),Object(a.useEffect)((function(){if(f.a.isReady())if(s){f.a.togglePause(!0);var e=f.a.getViewportElement();e&&(e.style.pointerEvents="none")}else{f.a.togglePause(!1);var t=f.a.getViewportElement();t&&(t.style.pointerEvents="auto")}}),[s]);var h=new ResizeObserver((function(e){var n;"auto"===t.height||"number"!==typeof t.height?(u.a.setFrameHeight(null!==(n=e[0].contentBoxSize.blockSize)&&void 0!==n?n:e[0].contentRect.height),f.a.isReady()&&f.a.layout()):(u.a.setFrameHeight(t.height),f.a.isReady()&&f.a.layout())})),d=function(e){e?h.observe(e):h.disconnect()};return t.allow_unsafe_html?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(_,{inject:t.css}),Object(S.jsx)("div",{ref:d,className:"slides",children:Object(S.jsx)(l.a,{html:t.content})})]}):Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(_,{inject:t.css}),Object(S.jsx)("div",{ref:d,className:"slides",children:Object(S.jsx)("section",Object(c.a)(Object(c.a)({"data-markdown":""},t.markdown_props),{},{children:Object(S.jsx)("script",{type:"text/template",children:t.content})}))})]})}));o.a.render(Object(S.jsx)(s.a.StrictMode,{children:Object(S.jsx)(C,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.18f5a848.chunk.js.map