import{n,o as l,_ as i,a as s}from"./index.1f95d828.js";const c={components:{SectionTitle:l},props:{title:{type:String,default:"skontaktuj sie z nami"},phoneNumbers:{type:Array,default(){return[{id:1,number:"123456678"},{id:2,number:"999888777"}]}},mails:{type:Array,default(){return[{id:1,email:"qwe@qwe.com"},{id:2,email:"rty@tyu.com"}]}},secondTitle:{type:String,default:"Indywidualna oferta"},offer:{type:String,default:"Je\u015Bli jeste\u015B zainteresowany indywidualn\u0105 ofert\u0105, skontaktuj sie z nami, na pewno przygotujemy dla Ciebie propozycj\u0119 kt\xF3ra Ci\u0119 usatysfakcjonuje"}}};var _=function(){var e=this,t=e._self._c;return t("div",{staticClass:"section-container d-flex flex-column align-center"},[t("Section-title",{directives:[{name:"show",rawName:"v-show",value:e.title,expression:"title"}],attrs:{title:e.title}}),e._l(e.phoneNumbers,function(a){return t("div",{key:`${a.id}-${a.number}`,staticClass:"contact__common-section"},[t("a",{staticClass:"link-reset section-small-subtitle contact_link",attrs:{href:`tel:${a.number}`}},[e._v(e._s(a.number))])])}),e._l(e.mails,function(a){return t("div",{key:`${a.id}-${a.email}`,staticClass:"contact__common-section"},[t("a",{staticClass:"link-reset section-small-subtitle contact_link",attrs:{href:`mailto:${a.email}`}},[e._v(e._s(a.email))])])}),t("div",{staticClass:"mt-8 d-flex flex-column align-center"},[t("Section-title",{directives:[{name:"show",rawName:"v-show",value:e.secondTitle,expression:"secondTitle"}],attrs:{title:e.secondTitle}}),t("span",{directives:[{name:"show",rawName:"v-show",value:e.offer,expression:"offer"}],staticClass:"section-text"},[e._v(e._s(e.offer))])],1)],2)},m=[],u=n(c,_,m,!1,null,"602447de",null,null),r=u.exports;const d={name:"Contact",components:{ContactOverview:r,MainHeader:i,TextOverview:s},data(){return{mainHeaderProps:{title:"Kontakt",image:"data/img/gas-bottles-1750491_1280.jpg"},textOverviewProps:{title:"Obszar dzia\u0142ania",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "}}}};var v=function(){var e=this,t=e._self._c;return t("div",{staticClass:"contact"},[t(i,{attrs:{title:e.mainHeaderProps.title,subtitle:e.mainHeaderProps.subtitle,image:e.mainHeaderProps.image}}),t(s,{attrs:{title:e.textOverviewProps.title,text:e.textOverviewProps.text}}),t(r)],1)},p=[],f=n(d,v,p,!1,null,"faa9a9ee",null,null),y=f.exports;export{y as default};