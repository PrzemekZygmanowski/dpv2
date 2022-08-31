import{V as w,m as d,T as h,S as D,C as b,B as I,r as O,k as E,c as l,d as k,u as F,i as H,g as N,P as q,f as j,e as g,R as C,h as u,n as z,j as R,l as M,_ as B,a as _}from"./index.034f053c.js";var y;(function(e){e.xSmall="12px",e.small="16px",e.default="24px",e.medium="28px",e.large="36px",e.xLarge="40px"})(y||(y={}));function A(e){return["fas","far","fal","fab","fad","fak"].some(t=>e.includes(t))}function W(e){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(e)&&/[\dz]$/i.test(e)&&e.length>4}const x=d(I,b,D,h).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium(){return!1},hasClickListener(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon(){let e="";return this.$slots.default&&(e=this.$slots.default[0].text.trim()),O(this,e)},getSize(){const e={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},t=E(e).find(i=>e[i]);return t&&y[t]||l(this.size)},getDefaultData(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:{"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0,...this.attrs$},on:this.listeners$}},getSvgWrapperData(){const e=this.getSize(),t={...this.getDefaultData(),style:e?{fontSize:e,height:e,width:e}:void 0};return this.applyColors(t),t},applyColors(e){e.class={...e.class,...this.themeClasses},this.setTextColor(this.color,e)},renderFontIcon(e,t){const i=[],n=this.getDefaultData();let a="material-icons";const o=e.indexOf("-"),s=o<=-1;s?i.push(e):(a=e.slice(0,o),A(a)&&(a="")),n.class[a]=!0,n.class[e]=!s;const r=this.getSize();return r&&(n.style={fontSize:r}),this.applyColors(n),t(this.hasClickListener?"button":this.tag,n,i)},renderSvgIcon(e,t){const i={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},n=this.getSize();return n&&(i.style={fontSize:n,height:n,width:n}),t(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[t("svg",i,[t("path",{attrs:{d:e}})])])},renderSvgIconComponent(e,t){const i={class:{"v-icon__component":!0}},n=this.getSize();n&&(i.style={fontSize:n,height:n,width:n}),this.applyColors(i);const a=e.component;return i.props=e.props,i.nativeOn=i.on,t(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[t(a,i)])}},render(e){const t=this.getIcon();return typeof t=="string"?W(t)?this.renderSvgIcon(t,e):this.renderFontIcon(t,e):this.renderSvgIconComponent(t,e)}});var X=w.extend({name:"v-icon",$_wrapperFor:x,functional:!0,render(e,{data:t,children:i}){let n="";return t.domProps&&(n=t.domProps.textContent||t.domProps.innerHTML||n,delete t.domProps.textContent,delete t.domProps.innerHTML),e(x,t,n?[n]:i)}});function f(e=[],...t){return Array().concat(e,...t)}function $(e,t="top center 0",i){return{name:e,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:i},origin:{type:String,default:t}},render(n,a){const o=`transition${a.props.group?"-group":""}`,s={props:{name:e,mode:a.props.mode},on:{beforeEnter(r){r.style.transformOrigin=a.props.origin,r.style.webkitTransformOrigin=a.props.origin}}};return a.props.leaveAbsolute&&(s.on.leave=f(s.on.leave,r=>{const{offsetTop:c,offsetLeft:p,offsetWidth:m,offsetHeight:v}=r;r._transitionInitialStyles={position:r.style.position,top:r.style.top,left:r.style.left,width:r.style.width,height:r.style.height},r.style.position="absolute",r.style.top=c+"px",r.style.left=p+"px",r.style.width=m+"px",r.style.height=v+"px"}),s.on.afterLeave=f(s.on.afterLeave,r=>{if(r&&r._transitionInitialStyles){const{position:c,top:p,left:m,width:v,height:V}=r._transitionInitialStyles;delete r._transitionInitialStyles,r.style.position=c||"",r.style.top=p||"",r.style.left=m||"",r.style.width=v||"",r.style.height=V||""}})),a.props.hideOnLeave&&(s.on.leave=f(s.on.leave,r=>{r.style.setProperty("display","none","important")})),n(o,k(a.data,s),a.children)}}}function L(e,t,i="in-out"){return{name:e,functional:!0,props:{mode:{type:String,default:i}},render(n,a){return n("transition",k(a.data,{props:{name:e},on:t}),a.children)}}}function T(e="",t=!1){const i=t?"width":"height",n=`offset${F(i)}`;return{beforeEnter(s){s._parent=s.parentNode,s._initialStyle={transition:s.style.transition,overflow:s.style.overflow,[i]:s.style[i]}},enter(s){const r=s._initialStyle;s.style.setProperty("transition","none","important"),s.style.overflow="hidden";const c=`${s[n]}px`;s.style[i]="0",s.offsetHeight,s.style.transition=r.transition,e&&s._parent&&s._parent.classList.add(e),requestAnimationFrame(()=>{s.style[i]=c})},afterEnter:o,enterCancelled:o,leave(s){s._initialStyle={transition:"",overflow:s.style.overflow,[i]:s.style[i]},s.style.overflow="hidden",s.style[i]=`${s[n]}px`,s.offsetHeight,requestAnimationFrame(()=>s.style[i]="0")},afterLeave:a,leaveCancelled:a};function a(s){e&&s._parent&&s._parent.classList.remove(e),o(s)}function o(s){const r=s._initialStyle[i];s.style.overflow=s._initialStyle.overflow,r!=null&&(s.style[i]=r),delete s._initialStyle}}const G=$("fade-transition"),J=$("slide-x-transition");L("expand-transition",T());L("expand-x-transition",T("",!0));const U=d(b,j(["absolute","fixed","top","bottom"]),q,h);var K=U.extend({name:"v-progress-linear",directives:{intersect:H},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:l(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:l(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){return{opacity:this.backgroundOpacity==null?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity),[this.isReversed?"right":"left"]:l(this.normalizedValue,"%"),width:l(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible,...this.themeClasses}},computedTransition(){return this.indeterminate?G:J},isReversed(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const e={};return this.active||(e.height=0),!this.indeterminate&&parseFloat(this.normalizedBuffer)!==100&&(e.width=l(this.normalizedBuffer,"%")),e}},methods:{genContent(){const e=N(this,"default",{value:this.internalLazyValue});return e?this.$createElement("div",{staticClass:"v-progress-linear__content"},e):null},genListeners(){const e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[e]:!0}}))},onClick(e){if(!this.reactive)return;const{width:t}=this.$el.getBoundingClientRect();this.internalValue=e.offsetX/t*100},onObserve(e,t,i){this.isVisible=i},normalize(e){return e<0?0:e>100?100:parseFloat(e)}},render(e){const t={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?l(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return e("div",t,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),S=w.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return this.loading===!1?null:this.$slots.progress||this.$createElement(K,{props:{absolute:!0,color:this.loading===!0||this.loading===""?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}});var Q=d(S,C,g).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...C.options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...g.options.computed.classes.call(this)}},styles(){const e={...g.options.computed.styles.call(this)};return this.img&&(e.background=`url("${this.img}") center center / cover no-repeat`),e}},methods:{genProgress(){const e=S.options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render(e){const{tag:t,data:i}=this.generateRouteLink();return i.style=this.styles,this.isClickable&&(i.attrs=i.attrs||{},i.attrs.tabindex=0),e(t,this.setBackgroundColor(this.color,i),[this.genProgress(),this.$slots.default])}});u("v-card__actions");u("v-card__subtitle");const Y=u("v-card__text"),Z=u("v-card__title");var ee=d(h).extend({name:"v-timeline",provide(){return{timeline:this}},props:{alignTop:Boolean,dense:Boolean,reverse:Boolean},computed:{classes(){return{"v-timeline--align-top":this.alignTop,"v-timeline--dense":this.dense,"v-timeline--reverse":this.reverse,...this.themeClasses}}},render(e){return e("div",{staticClass:"v-timeline",class:this.classes},this.$slots.default)}});const te=d(b,h);var ie=te.extend().extend({name:"v-timeline-item",inject:["timeline"],props:{color:{type:String,default:"primary"},fillDot:Boolean,hideDot:Boolean,icon:String,iconColor:String,large:Boolean,left:Boolean,right:Boolean,small:Boolean},computed:{hasIcon(){return!!this.icon||!!this.$slots.icon}},methods:{genBody(){return this.$createElement("div",{staticClass:"v-timeline-item__body"},this.$slots.default)},genIcon(){return this.$slots.icon?this.$slots.icon:this.$createElement(X,{props:{color:this.iconColor,dark:!this.theme.isDark,small:this.small}},this.icon)},genInnerDot(){const e=this.setBackgroundColor(this.color);return this.$createElement("div",{staticClass:"v-timeline-item__inner-dot",...e},[this.hasIcon&&this.genIcon()])},genDot(){return this.$createElement("div",{staticClass:"v-timeline-item__dot",class:{"v-timeline-item__dot--small":this.small,"v-timeline-item__dot--large":this.large}},[this.genInnerDot()])},genDivider(){const e=[];return this.hideDot||e.push(this.genDot()),this.$createElement("div",{staticClass:"v-timeline-item__divider"},e)},genOpposite(){return this.$createElement("div",{staticClass:"v-timeline-item__opposite"},this.$slots.opposite)}},render(e){const t=[this.genBody(),this.genDivider()];return this.$slots.opposite&&t.push(this.genOpposite()),e("div",{staticClass:"v-timeline-item",class:{"v-timeline-item--fill-dot":this.fillDot,"v-timeline-item--before":this.timeline.reverse?this.right:this.left,"v-timeline-item--after":this.timeline.reverse?this.left:this.right,...this.themeClasses}},t)}});const se={mixins:[R],data(){return{dotColor:"#1b31de"}},props:{title:{type:String},text:{type:String}},computed:{function(){return this.isMobile()}}};var re=function(){var t=this,i=t._self._c;return i(M,{staticClass:"section-container"},[i(ee,{attrs:{dense:t.isMobile,reverse:!t.isMobile}},t._l(3,function(n){return i(ie,{key:n,attrs:{color:t.dotColor}},[i(Q,{staticClass:"elevation-2 card"},[i(Z,{staticClass:"section-small-title"},[t._v(" Lorem ipsum ")]),i(Y,{staticClass:"section-text"},[t._v(" Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae. ")])],1)],1)}),1)],1)},ne=[],ae=z(se,re,ne,!1,null,null,null,null),P=ae.exports;const oe={name:"Affiliation",components:{MainHeader:B,TextOverview:_,SpecialServiceLine:P},data(){return{mainHeaderProps:{title:"Zarabiaj razem z nami",image:"data/img/appliance-2257_1280.jpg"},firstTextOverviewProps:{title:"Tw\xF3j w\u0142asny punkt wymiany butli",text:"Podejmiemy wsp\xF3\u0142prac\u0119 z osobami chc\u0105cymi prowadzi\u0107 nasz punkt wymiany butli gazowych. Wsp\xF3\u0142praca nie wymaga \u017Cadnego wk\u0142adu w\u0142asnego.  Nawi\u0105\u017Cemy r\xF3nie\u017C wsp\xF3\u0142prac\u0119 z osobami prowadz\u0105cymi ju\u017C punkt wymiany butli, zaproponujemy konkurencyjne warunki wsp\xF3\u0142pracy"},secondTextOverviewProps:{title:"Punkt wymiany butli",text:"Punkt mo\u017Cna prowadzi\u0107 przy w\u0142asnym domu, sklepie, lub prowadz\u0105c dzia\u0142alno\u015B\u0107 gospodarcz\u0105, bezp\u0142atnie dostarcyzmy butle oraz klatk\u0119 do ich przechowywania"}}}};var le=function(){var t=this,i=t._self._c;return i("div",{staticClass:"affiliation"},[i(B,{attrs:{title:t.mainHeaderProps.title,subtitle:t.mainHeaderProps.subtitle,image:t.mainHeaderProps.image}}),i(_,{attrs:{title:t.firstTextOverviewProps.title,text:t.firstTextOverviewProps.text}}),i(P),i(_,{attrs:{title:t.secondTextOverviewProps.title,text:t.secondTextOverviewProps.text}})],1)},ce=[],de=z(oe,le,ce,!1,null,"b4cbb35e",null,null),ue=de.exports;export{ue as default};
