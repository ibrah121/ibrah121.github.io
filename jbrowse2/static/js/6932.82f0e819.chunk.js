"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[6932],{36932:(e,t,n)=>{n.r(t),n.d(t,{default:()=>W});var l=n(7552),o=n(29499),a=n(5401),r=n(58507),c=n(75785),i=n(99546),s=n(33039),u=n.n(s),m=n(943),d=n(40985),h=n(2187),g=n(43163),p=n(61723),E=n(24387),f=n(68446),b=n(21254),C=n.n(b),w=n(30157);function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)({}).hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},v.apply(null,arguments)}const k=(0,c.n9)()((e=>({closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}})));function A(e){const t=(0,l.useRef)(null);return l.createElement(C(),{nodeRef:t,cancel:'[class*="MuiDialogContent-root"]',onStart:e=>e.target?.className?.includes("MuiDialogTitle")},l.createElement(m.A,v({ref:t},e)))}const S=(0,f.observer)((function(e){const{classes:t}=k(),{title:n,children:o,onClose:a}=e;return l.createElement(d.A,v({},e,{PaperComponent:A}),l.createElement(h.A,null,l.createElement(g.A,{style:{cursor:"move"}},n,a?l.createElement(p.A,{className:t.closeButton,onClick:()=>{a()}},l.createElement(w.A,null)):null),l.createElement(E.A,null),o))}));var y=n(75459),M=n(66395),x=n(49823),O=n(58474),T=n(42281),N=n(91388),H=n(66195),j=n(21430);const B=(0,c.n9)()({cell:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}),L=function({rows:e,onChange:t,showTips:n}){const{classes:o}=B(),[r,c]=(0,l.useState)(null),[s,u]=(0,l.useState)([]),{name:m,color:d,baseUri:h,...g}=e[0],[p,E]=(0,l.useState)("blue"),[f,b]=(0,l.useState)({idx:0,field:null});return l.createElement("div",null,l.createElement(a.A,{disabled:!s.length,onClick:e=>{c(e.currentTarget)}},"Change color of selected items"),l.createElement(a.A,{onClick:()=>{t((0,O.BO)([...e],s))},disabled:!s.length},l.createElement(j.A,null),n?"Move selected items up":null),l.createElement(a.A,{onClick:()=>{t((0,O.oJ)([...e],s))},disabled:!s.length},l.createElement(H.A,null),n?"Move selected items down":null),l.createElement(a.A,{onClick:()=>{t((0,O.BO)([...e],s,e.length))},disabled:!s.length},l.createElement(T.A,null),n?"Move selected items to top":null),l.createElement(a.A,{onClick:()=>{t((0,O.oJ)([...e],s,e.length))},disabled:!s.length},l.createElement(N.A,null),n?"Move selected items to bottom":null),l.createElement(M.FO,{anchorEl:r,color:p,onChange:n=>{E(n),s.forEach((t=>{const l=e.find((e=>e.name===t));l&&(l.color=n)})),t([...e])},onClose:()=>{c(null)}}),l.createElement("div",{style:{height:400,width:"100%"}},l.createElement(y.z,{getRowId:e=>e.name,checkboxSelection:!0,disableRowSelectionOnClick:!0,onRowSelectionModelChange:e=>{u(e)},rows:e,rowHeight:25,columnHeaderHeight:33,columns:[{field:"color",headerName:"Color",renderCell:n=>{const{value:o,id:a}=n;return l.createElement(M.Ay,{color:o||"blue",onChange:n=>{const l=e.find((e=>e.name===a));l&&(l.color=n),t([...e])}})}},{field:"name",headerName:"Name",width:(0,i.measureGridWidth)(e.map((e=>e.name)))},...Object.keys(g).map((t=>({field:t,renderCell:({value:e})=>l.createElement("div",{className:o.cell},l.createElement(x.SanitizedHTML,{html:(0,i.getStr)(e)})),width:(0,i.measureGridWidth)(e.map((e=>`${e[t]}`)))})))],sortModel:[],onSortModelChange:n=>{const l=n[0],o=(f.idx+1)%2,a=l.field||f.field;b({idx:o,field:a}),t(a?[...e].sort(((e,t)=>{const n=(0,i.getStr)(e[a]),l=(0,i.getStr)(t[a]);return 1===o?n.localeCompare(l):l.localeCompare(n)})):e)}})))},R=(0,c.n9)()({content:{minWidth:800}});function W({model:e,handleClose:t}){const{classes:n}=R(),{sources:c}=e,[s,m]=(0,l.useState)(u()(c||[])),[d,h]=(0,i.useLocalStorage)("multiwiggle-showTips",!0);return l.createElement(S,{open:!0,onClose:t,maxWidth:"xl",title:"Multi-wiggle color/arrangement editor"},l.createElement(o.A,{className:n.content},l.createElement(a.A,{variant:"contained",style:{float:"right"},onClick:()=>{h(!d)}},d?"Hide tips":"Show tips"),l.createElement("br",null),d?l.createElement(l.Fragment,null,"Helpful tips",l.createElement("ul",null,l.createElement("li",null,"You can select rows in the table with the checkboxes"),l.createElement("li",null,"Multi-select is enabled with shift-click and control-click"),l.createElement("li",null,'The "Move selected items up/down" can re-arrange subtracks'),l.createElement("li",null,"Sorting the data grid itself can also re-arrange subtracks"),l.createElement("li",null,"Changes are applied when you hit Submit"),l.createElement("li",null,"You can click and drag the dialog box to move it on the screen"),l.createElement("li",null,"Columns in the table can be hidden using a vertical '...' menu on the right side of each column"))):null,l.createElement(L,{rows:s,onChange:m,showTips:d})),l.createElement(r.A,null,l.createElement(a.A,{variant:"contained",type:"submit",color:"inherit",onClick:()=>{e.clearLayout(),m(e.sources||[])}},"Clear custom settings"),l.createElement(a.A,{variant:"contained",color:"secondary",onClick:()=>{t(),m([...e.sources||[]])}},"Cancel"),l.createElement(a.A,{variant:"contained",color:"primary",type:"submit",onClick:()=>{e.setLayout(s),t()}},"Submit")))}},58474:(e,t,n)=>{n.d(t,{A3:()=>i,BO:()=>a,oJ:()=>r});var l=n(99546),o=n(68584);function a(e,t,n=1){const l=t.map((t=>e.findIndex((e=>e.name===t)))).sort(((e,t)=>e-t));let o=0;for(const t of l){const l=Math.max(o,t-n);l>=o&&e.splice(l,0,e.splice(t,1)[0]),o+=1}return e}function r(e,t,n=1){const l=t.map((t=>e.findIndex((e=>e.name===t)))).sort(((e,t)=>t-e));let o=e.length-1;for(const t of l){const l=Math.min(o,t+n);l<=o&&e.splice(l,0,e.splice(t,1)[0]),o-=1}return e}const c=12.8;function i(e){const{prefersOffset:t}=e,{trackLabels:n}=(0,l.getContainingView)(e),a=(0,l.getContainingTrack)(e),r=(0,o.getConf)(a,"name");return"overlapping"!==n||t?10:(0,l.measureText)(r,c)+100}}}]);
//# sourceMappingURL=6932.82f0e819.chunk.js.map