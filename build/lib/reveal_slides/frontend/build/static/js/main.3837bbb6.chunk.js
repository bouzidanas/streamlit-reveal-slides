(this.webpackJsonpstreamlit_component_template=this.webpackJsonpstreamlit_component_template||[]).push([[0],{71:function(e,t,n){var a={"./beige.css":[73,3],"./black-contrast.css":[74,10],"./black.css":[75,11],"./blood.css":[76,12],"./dracula.css":[77,16],"./fonts/league-gothic/league-gothic.css":[78,17],"./fonts/source-sans-pro/source-sans-pro.css":[79,18],"./league.css":[80,4],"./moon.css":[81,5],"./night.css":[82,6],"./serif.css":[83,19],"./simple.css":[84,7],"./sky.css":[85,8],"./solarized.css":[86,9],"./white-contrast.css":[87,13],"./white.css":[88,14],"./white_contrast_compact_verbatim_headers.css":[89,15]};function s(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],s=t[0];return n.e(t[1]).then((function(){return n.t(s,7)}))}s.keys=function(){return Object.keys(a)},s.id=71,e.exports=s},72:function(e,t,n){"use strict";n.r(t);var a=n(6),s=n.n(a),i=n(34),o=n.n(i),c=n(5),r=n(39),l=n(10),u=n(7),f=n(15),h=n.n(f),g=n(35),d=n.n(g),m=n(20),p=n.n(m),v=n(36),j=n.n(v),b=n(37),O=n.n(b),y=n(38),x=n.n(y),w=(n(67),n(68),n(9)),S={markdown:h.a,highlight:d.a,katex:p.a.KaTeX,mathjax2:p.a.MathJax2,mathjax3:p.a.MathJax3,search:j.a,notes:O.a,zoom:x.a},_=Object(r.a)(["",""],(function(e){return e.inject})),k={width:900,height:860,margin:.05,minScale:.1,maxScale:3,controlsTutorial:!0,controlsLayout:"edges"},E=Object(l.b)((function(e){var t=e.args,s=e.disabled,i=JSON.stringify(t.config),o=JSON.stringify(t.initial_state),r=function(e){var n=Object(c.a)(Object(c.a)({},k),JSON.parse(i));if(t.allow_unsafe_html);else if("plugins"in n){var a=n.plugins;a.forEach((function(e,t){a[t]=e in S?S[e]:null})),n.plugins=a.filter((function(e){return!!e})),n.plugins.includes(h.a)||n.plugins.push(h.a)}else n.plugins=[h.a];return n};Object(a.useMemo)((function(){n(71)("./"+t.theme+".css").then((function(e){try{u.a.layout()}catch(t){console.warn("Reveal.layout() call failed.")}})).catch((function(e){console.warn("Failed CSS import: ",e)}))}),[t.theme]),Object(a.useEffect)((function(){var e=r();try{u.a.destroy()}catch(n){}return u.a.initialize(e).then((function(){var e=u.a.getPlugin("highlight");e&&e.init(u.a);var n=JSON.parse(o);if(0!==Object.keys(n).length&&u.a.setState(n),!t.display_only){var a=u.a.getState();l.a.setComponentValue(a),u.a.on("slidechanged",(function(e){var t=u.a.getState();l.a.setComponentValue({indexh:e.indexh,indexv:e.indexv,indexf:t.indexf,paused:t.paused,overview:t.overview})})),u.a.on("fragmentshown",(function(e){var t=u.a.getState();l.a.setComponentValue(t)})),u.a.on("fragmenthidden",(function(e){var t=u.a.getState();l.a.setComponentValue(t)})),u.a.on("overviewshown",(function(e){var t=u.a.getState();l.a.setComponentValue(t)})),u.a.on("overviewhidden",(function(e){var t=u.a.getState();l.a.setComponentValue(t)})),u.a.on("paused",(function(e){var t=u.a.getState();l.a.setComponentValue(t)})),u.a.on("resumed",(function(e){var t=u.a.getState();l.a.setComponentValue(t)}))}})),function(){u.a.destroy()}}),[]),Object(a.useEffect)((function(){var e=u.a.getPlugins(),n=r(),a=Object.values(e).map((function(e){return e.id}));"plugins"in t.config&&t.config.plugins.forEach((function(e){e&&-1===a.indexOf(e)&&u.a.registerPlugin(S[e])}));u.a.configure(n)}),[i,t.allow_unsafe_html]),Object(a.useEffect)((function(){var e=JSON.parse(o);u.a.isReady()&&0!==Object.keys(e).length&&u.a.setState(e)}),[o]),Object(a.useEffect)((function(){if(u.a.isReady())if(s){u.a.togglePause(!0);var e=u.a.getViewportElement();e&&(e.style.pointerEvents="none")}else{u.a.togglePause(!1);var t=u.a.getViewportElement();t&&(t.style.pointerEvents="auto")}}),[s]);var f=new ResizeObserver((function(e){var n;"auto"===t.height||"number"!==typeof t.height?(l.a.setFrameHeight(null!==(n=e[0].contentBoxSize.blockSize)&&void 0!==n?n:e[0].contentRect.height),u.a.isReady()&&u.a.layout()):(l.a.setFrameHeight(t.height),u.a.isReady()&&u.a.layout())})),g=function(e){e?f.observe(e):f.disconnect()};return t.allow_unsafe_html?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(_,{inject:t.css}),Object(w.jsx)("div",{ref:g,className:"slides",dangerouslySetInnerHTML:{__html:t.content}})]}):Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(_,{inject:t.css}),Object(w.jsx)("div",{ref:g,className:"slides",children:Object(w.jsx)("section",Object(c.a)(Object(c.a)({"data-markdown":""},t.markdown_props),{},{children:Object(w.jsx)("script",{type:"text/template",children:t.content})}))})]})}));o.a.render(Object(w.jsx)(s.a.StrictMode,{children:Object(w.jsx)(E,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.3837bbb6.chunk.js.map