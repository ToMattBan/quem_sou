import{d as x,c as v,a as s,t as u,o as _,_ as z,r as o,q as Q,b as w,u as d,e as t,f as T,g as k}from"./index.cd714962.js";const I={yes:"Sim",no:"N\xE3o"},N={yes:"Yes",no:"No"},g={BR:I,EN:N},B={class:"_1/1"},R=["src"],C={class:"_fz30"},D=x({__name:"QuizResult",props:{resultTitle:{type:String,required:!0},resultImage:{type:String,required:!0},resultDesc:{type:String,required:!0}},setup(a){return(b,r)=>(_(),v("div",B,[s("img",{class:"resultImage",src:a.resultImage},null,8,R),s("div",C,u(a.resultTitle),1),s("p",null,u(a.resultDesc),1)]))}});const E=z(D,[["__scopeId","data-v-273aeb0b"]]),S={class:"_tac _df quizFather _fxww"},V={class:"_fw7 _fz30 _mbsm _1/1"},$={key:0,class:"_1/1 _df _fxdc _jcsb"},j={class:"_fz24"},A={class:"_df _jcse _fxww"},F=x({__name:"QuizView",setup(a){const r=k().params.name,n=o({title:"",cover:"",questions:[],resultsCovers:{}}),l=o(0),f=o(!1),c=o(""),m=Q.find(e=>e.title==r);m&&(n.value=m);const i=w[r][d],y=i.title;function q(){if(n){const e=n.value.questions[l.value].positiveAwnser;typeof e=="number"?l.value=e:p(e)}}function h(){if(n){const e=n.value.questions[l.value].negativeAwnser;typeof e=="number"?l.value=e:p(e)}}function p(e){f.value=!0,c.value=e}return(e,L)=>(_(),v("div",S,[s("div",V,u(t(y)),1),f.value?(_(),T(E,{key:1,resultTitle:t(i).results[c.value].title,resultImage:n.value.resultsCovers[c.value],resultDesc:t(i).results[c.value].desc},null,8,["resultTitle","resultImage","resultDesc"])):(_(),v("div",$,[s("div",j,[s("span",null,u(l.value+1)+". ",1),s("span",null,u(t(i).questions[l.value]),1)]),s("div",A,[s("button",{class:"_c-btn _c-btn--large _mvxxs _c-btn--confirm",onClick:q},u(t(g)[t(d)].yes),1),s("button",{class:"_c-btn _c-btn--large _mvxxs _c-btn--deny",onClick:h},u(t(g)[t(d)].no),1)])]))]))}});const Y=z(F,[["__scopeId","data-v-8e5d855a"]]);export{Y as default};