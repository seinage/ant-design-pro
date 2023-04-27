"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[926],{72596:function(q,B,e){e.d(B,{Z:function(){return m}});const m=p=>p?typeof p=="function"?p():p:null},19926:function(q,B,e){e.d(B,{C:function(){return ee}});var m=e(84875),p=e.n(m),E=e(60555),w=e(7748),r=e(50959),z=e(51381),j=e(72566),G=e(10567);const R=r.createContext("default"),d=a=>{let{children:u,size:f}=a;const c=r.useContext(R);return r.createElement(R.Provider,{value:f||c},u)};var i=R,s=e(8636),t=e(99621),o=e(26431);const l=a=>{const{antCls:u,componentCls:f,iconCls:c,avatarBg:v,avatarColor:A,avatarSizeBase:C,avatarSizeLG:b,avatarSizeSM:W,avatarFontSizeBase:D,avatarFontSizeLG:S,avatarFontSizeSM:U,borderRadius:K,borderRadiusLG:F,borderRadiusSM:J,lineWidth:V,lineType:Y}=a,_=(h,Z,M)=>({width:h,height:h,lineHeight:`${h-V*2}px`,borderRadius:"50%",[`&${f}-square`]:{borderRadius:M},[`${f}-string`]:{position:"absolute",left:{_skip_check_:!0,value:"50%"},transformOrigin:"0 center"},[`&${f}-icon`]:{fontSize:Z,[`> ${c}`]:{margin:0}}});return{[f]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,o.Wf)(a)),{position:"relative",display:"inline-block",overflow:"hidden",color:A,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:v,border:`${V}px ${Y} transparent`,["&-image"]:{background:"transparent"},[`${u}-image-img`]:{display:"block"}}),_(C,D,K)),{["&-lg"]:Object.assign({},_(b,S,F)),["&-sm"]:Object.assign({},_(W,U,J)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},n=a=>{const{componentCls:u,avatarGroupBorderColor:f,avatarGroupSpace:c}=a;return{[`${u}-group`]:{display:"inline-flex",[`${u}`]:{borderColor:f},["> *:not(:first-child)"]:{marginInlineStart:c}}}};var g=(0,s.Z)("Avatar",a=>{const{colorTextLightSolid:u,controlHeight:f,controlHeightLG:c,controlHeightSM:v,fontSize:A,fontSizeLG:C,fontSizeXL:b,fontSizeHeading3:W,marginXS:D,colorBorderBg:S,colorTextPlaceholder:U}=a,K=(0,t.TS)(a,{avatarBg:U,avatarColor:u,avatarSizeBase:f,avatarSizeLG:c,avatarSizeSM:v,avatarFontSizeBase:Math.round((C+b)/2),avatarFontSizeLG:W,avatarFontSizeSM:A,avatarGroupSpace:-D,avatarGroupBorderColor:S});return[l(K),n(K)]}),x=function(a,u){var f={};for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&u.indexOf(c)<0&&(f[c]=a[c]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var v=0,c=Object.getOwnPropertySymbols(a);v<c.length;v++)u.indexOf(c[v])<0&&Object.prototype.propertyIsEnumerable.call(a,c[v])&&(f[c[v]]=a[c[v]]);return f};const I=(a,u)=>{const f=r.useContext(i),[c,v]=r.useState(1),[A,C]=r.useState(!1),[b,W]=r.useState(!0),D=r.useRef(null),S=r.useRef(null),U=(0,w.sQ)(u,D),{getPrefixCls:K}=r.useContext(z.E_),F=()=>{if(!S.current||!D.current)return;const y=S.current.offsetWidth,O=D.current.offsetWidth;if(y!==0&&O!==0){const{gap:X=4}=a;X*2<O&&v(O-X*2<y?(O-X*2)/y:1)}};r.useEffect(()=>{C(!0)},[]),r.useEffect(()=>{W(!0),v(1)},[a.src]),r.useEffect(()=>{F()},[a.gap]);const J=()=>{const{onError:y}=a;(y?y():void 0)!==!1&&W(!1)},{prefixCls:V,shape:Y="circle",size:_="default",src:h,srcSet:Z,icon:M,className:ie,rootClassName:ce,alt:de,draggable:fe,children:ae,crossOrigin:ge}=a,te=x(a,["prefixCls","shape","size","src","srcSet","icon","className","rootClassName","alt","draggable","children","crossOrigin"]),P=_==="default"?f:_,ue=Object.keys(typeof P=="object"?P||{}:{}).some(y=>["xs","sm","md","lg","xl","xxl"].includes(y)),se=(0,j.Z)(ue),ve=r.useMemo(()=>{if(typeof P!="object")return{};const y=G.c.find(X=>se[X]),O=P[y];return O?{width:O,height:O,lineHeight:`${O}px`,fontSize:M?O/2:18}:{}},[se,P]),L=K("avatar",V),[me,pe]=g(L),Ee=p()({[`${L}-lg`]:P==="large",[`${L}-sm`]:P==="small"}),le=r.isValidElement(h),Pe=p()(L,Ee,{[`${L}-${Y}`]:!!Y,[`${L}-image`]:le||h&&b,[`${L}-icon`]:!!M},ie,ce,pe),ye=typeof P=="number"?{width:P,height:P,lineHeight:`${P}px`,fontSize:M?P/2:18}:{};let k;if(typeof h=="string"&&b)k=r.createElement("img",{src:h,draggable:fe,srcSet:Z,onError:J,alt:de,crossOrigin:ge});else if(le)k=h;else if(M)k=M;else if(A||c!==1){const y=`scale(${c}) translateX(-50%)`,O={msTransform:y,WebkitTransform:y,transform:y},X=typeof P=="number"?{lineHeight:`${P}px`}:{};k=r.createElement(E.Z,{onResize:F},r.createElement("span",{className:`${L}-string`,ref:S,style:Object.assign(Object.assign({},X),O)},ae))}else k=r.createElement("span",{className:`${L}-string`,style:{opacity:0},ref:S},ae);return delete te.onError,delete te.gap,me(r.createElement("span",Object.assign({},te,{style:Object.assign(Object.assign(Object.assign({},ye),ve),te.style),className:Pe,ref:U}),k))};var N=r.forwardRef(I),H=e(75416),Q=e(2944),ne=e(22240),re=a=>{const{getPrefixCls:u,direction:f}=r.useContext(z.E_),{prefixCls:c,className:v,rootClassName:A,maxCount:C,maxStyle:b,size:W}=a,D=u("avatar",c),S=`${D}-group`,[U,K]=g(D),F=p()(S,{[`${S}-rtl`]:f==="rtl"},v,A,K),{children:J,maxPopoverPlacement:V="top",maxPopoverTrigger:Y="hover"}=a,_=(0,H.Z)(J).map((Z,M)=>(0,ne.Tm)(Z,{key:`avatar-key-${M}`})),h=_.length;if(C&&C<h){const Z=_.slice(0,C),M=_.slice(C,h);return Z.push(r.createElement(Q.Z,{key:"avatar-popover-key",content:M,trigger:Y,placement:V,overlayClassName:`${S}-popover`},r.createElement(N,{style:b},`+${h-C}`))),U(r.createElement(d,{size:W},r.createElement("div",{className:F,style:a.style},Z)))}return U(r.createElement(d,{size:W},r.createElement("div",{className:F,style:a.style},_)))};const $=N;$.Group=re;var ee=$},8570:function(q,B,e){e.d(B,{ZP:function(){return i}});var m=e(50959),p=e(84875),E=e.n(p),w=e(31316),r=e(51381),z=e(12621),j=e(72596),G=function(s,t){var o={};for(var l in s)Object.prototype.hasOwnProperty.call(s,l)&&t.indexOf(l)<0&&(o[l]=s[l]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,l=Object.getOwnPropertySymbols(s);n<l.length;n++)t.indexOf(l[n])<0&&Object.prototype.propertyIsEnumerable.call(s,l[n])&&(o[l[n]]=s[l[n]]);return o};const R=(s,t,o)=>{if(!(!t&&!o))return m.createElement(m.Fragment,null,t&&m.createElement("div",{className:`${s}-title`},(0,j.Z)(t)),m.createElement("div",{className:`${s}-inner-content`},(0,j.Z)(o)))};function d(s){const{hashId:t,prefixCls:o,className:l,style:n,placement:g="top",title:x,content:I,children:T}=s;return m.createElement("div",{className:E()(t,o,`${o}-pure`,`${o}-placement-${g}`,l),style:n},m.createElement(w.G,Object.assign({},s,{className:t,prefixCls:o}),T||R(o,x,I)))}function i(s){const{prefixCls:t}=s,o=G(s,["prefixCls"]),{getPrefixCls:l}=m.useContext(r.E_),n=l("popover",t),[g,x]=(0,z.Z)(n);return g(m.createElement(d,Object.assign({},o,{prefixCls:n,hashId:x})))}},2944:function(q,B,e){var m=e(84875),p=e.n(m),E=e(50959),w=e(51381),r=e(68180),z=e(72596),j=e(52666),G=e(8570),R=e(12621),d=function(t,o){var l={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&o.indexOf(n)<0&&(l[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var g=0,n=Object.getOwnPropertySymbols(t);g<n.length;g++)o.indexOf(n[g])<0&&Object.prototype.propertyIsEnumerable.call(t,n[g])&&(l[n[g]]=t[n[g]]);return l};const i=t=>{let{title:o,content:l,prefixCls:n}=t;return!o&&!l?null:E.createElement(E.Fragment,null,o&&E.createElement("div",{className:`${n}-title`},(0,z.Z)(o)),E.createElement("div",{className:`${n}-inner-content`},(0,z.Z)(l)))},s=E.forwardRef((t,o)=>{var l,n;const{prefixCls:g,title:x,content:I,overlayClassName:T,placement:N="top",trigger:H="hover",mouseEnterDelay:Q=.1,mouseLeaveDelay:ne=.1,overlayStyle:oe={},arrowPointAtCenter:re,arrow:$}=t,ee=d(t,["prefixCls","title","content","overlayClassName","placement","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","arrowPointAtCenter","arrow"]),{getPrefixCls:a}=E.useContext(w.E_),u=a("popover",g),[f,c]=(0,R.Z)(u),v=a(),A=p()(T,c),C=(n=(l=typeof $!="boolean"&&($==null?void 0:$.arrowPointAtCenter))!==null&&l!==void 0?l:re)!==null&&n!==void 0?n:!1,b=$!=null?$:{arrowPointAtCenter:C};return f(E.createElement(r.Z,Object.assign({placement:N,arrow:b,trigger:H,mouseEnterDelay:Q,mouseLeaveDelay:ne,overlayStyle:oe},ee,{prefixCls:u,overlayClassName:A,ref:o,overlay:E.createElement(i,{prefixCls:u,title:x,content:I}),transitionName:(0,j.mL)(v,"zoom-big",ee.transitionName),"data-popover-inject":!0})))});s._InternalPanelDoNotUseOrYouWillBeFired=G.ZP,B.Z=s},12621:function(q,B,e){var m=e(1218),p=e(79589),E=e(8636),w=e(99621),r=e(26431),z=e(56647);const j=d=>{const{componentCls:i,popoverBg:s,popoverColor:t,width:o,fontWeightStrong:l,popoverPadding:n,boxShadowSecondary:g,colorTextHeading:x,borderRadiusLG:I,zIndexPopup:T,marginXS:N,colorBgElevated:H}=d;return[{[i]:Object.assign(Object.assign({},(0,r.Wf)(d)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:T,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text","--antd-arrow-background-color":H,"&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${i}-content`]:{position:"relative"},[`${i}-inner`]:{backgroundColor:s,backgroundClip:"padding-box",borderRadius:I,boxShadow:g,padding:n},[`${i}-title`]:{minWidth:o,marginBottom:N,color:x,fontWeight:l},[`${i}-inner-content`]:{color:t}})},(0,z.ZP)(d,{colorBg:"var(--antd-arrow-background-color)"}),{[`${i}-pure`]:{position:"relative",maxWidth:"none",[`${i}-content`]:{display:"inline-block"}}}]},G=d=>{const{componentCls:i}=d;return{[i]:p.i.map(s=>{const t=d[`${s}-6`];return{[`&${i}-${s}`]:{"--antd-arrow-background-color":t,[`${i}-inner`]:{backgroundColor:t},[`${i}-arrow`]:{background:"transparent"}}}})}},R=d=>{const{componentCls:i,lineWidth:s,lineType:t,colorSplit:o,paddingSM:l,controlHeight:n,fontSize:g,lineHeight:x,padding:I}=d,T=n-Math.round(g*x),N=T/2,H=T/2-s,Q=I;return{[i]:{[`${i}-inner`]:{padding:0},[`${i}-title`]:{margin:0,padding:`${N}px ${Q}px ${H}px`,borderBottom:`${s}px ${t} ${o}`},[`${i}-inner-content`]:{padding:`${l}px ${Q}px`}}}};B.Z=(0,E.Z)("Popover",d=>{const{colorBgElevated:i,colorText:s,wireframe:t}=d,o=(0,w.TS)(d,{popoverBg:i,popoverColor:s,popoverPadding:12});return[j(o),G(o),t&&R(o),(0,m._y)(o,"zoom-big")]},d=>{let{zIndexPopupBase:i}=d;return{zIndexPopup:i+30,width:177}})}}]);
