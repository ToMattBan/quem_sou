import{d as x,c as v,a as s,t as n,o as _,_ as z,r as a,q as Q,b as w,u as d,e as t,f as T,g as k}from"./index.83593c39.js";const I={yes:"Sim",no:"N\xE3o"},N={yes:"Yes",no:"No"},g={BR:I,EN:N},B={class:"_1/1"},R=["src"],C={class:"_fz30 _ttc"},D=x({__name:"QuizResult",props:{resultTitle:{type:String,required:!0},resultImage:{type:String,required:!0},resultDesc:{type:String,required:!0}},setup(i){return(b,r)=>(_(),v("div",B,[s("img",{class:"resultImage",src:i.resultImage},null,8,R),s("div",C,n(i.resultTitle),1),s("p",null,n(i.resultDesc),1)]))}});const E=z(D,[["__scopeId","data-v-9dd6c6bc"]]),S={class:"_tac _df quizFather _fxww"},V={class:"_fw7 _fz30 _mbsm _1/1"},$={key:0,class:"_1/1 _df _fxdc _jcsb"},j={class:"_fz24"},A={class:"_df _jcse _fxww"},F=x({__name:"QuizView",setup(i){const r=k().params.name,u=a({title:"",cover:"",questions:[],resultsCovers:{}}),c=a(0),f=a(!1),l=a(""),m=Q.find(e=>e.title==r);m&&(u.value=m);const o=w[r][d],y=o.title;function q(){if(u){const e=u.value.questions[c.value].positiveAwnser;typeof e=="number"?c.value=e:p(e)}}function h(){if(u){const e=u.value.questions[c.value].negativeAwnser;typeof e=="number"?c.value=e:p(e)}}function p(e){f.value=!0,l.value=e}return(e,L)=>(_(),v("div",S,[s("div",V,n(t(y)),1),f.value?(_(),T(E,{key:1,resultTitle:t(o).results[l.value].title,resultImage:u.value.resultsCovers[l.value],resultDesc:t(o).results[l.value].desc},null,8,["resultTitle","resultImage","resultDesc"])):(_(),v("div",$,[s("div",j,[s("span",null,n(t(o).questions[c.value]),1)]),s("div",A,[s("button",{class:"_c-btn _c-btn--large _mvxxs _c-btn--confirm",onClick:q},n(t(g)[t(d)].yes),1),s("button",{class:"_c-btn _c-btn--large _mvxxs _c-btn--deny",onClick:h},n(t(g)[t(d)].no),1)])]))]))}});const Y=z(F,[["__scopeId","data-v-90f88274"]]);export{Y as default};