(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{5:function(e,t,a){}}]),function(e){function t(t){for(var l,n,o=t[0],i=t[1],d=t[2],b=0,m=[];b<o.length;b++)n=o[b],Object.prototype.hasOwnProperty.call(c,n)&&c[n]&&m.push(c[n][0]),c[n]=0;for(l in i)Object.prototype.hasOwnProperty.call(i,l)&&(e[l]=i[l]);for(s&&s(t);m.length;)m.shift()();return r.push.apply(r,d||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],l=!0,o=1;o<a.length;o++){var i=a[o];0!==c[i]&&(l=!1)}l&&(r.splice(t--,1),e=n(n.s=a[0]))}return e}var l={},c={0:0},r=[];function n(t){if(l[t])return l[t].exports;var a=l[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=l,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(a,l,function(t){return e[t]}.bind(null,l));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var o=window.webpackJsonp=window.webpackJsonp||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var s=i;r.push([7,1]),a()}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t){!function(){e.exports=this.wp.components}()},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var l=a(3),c=a(1),r=(a(5),a(0)),n=a(2),o=a(4);a(6);Object(l.registerBlockType)("bcdl-block-gallery/bcdl-block-gallery",{title:Object(c.__)("BCDL Gutenberg Block Gallery","bcdl-block-gallery"),description:Object(c.__)("BCDL block written with ESNext standard and JSX support – build step required!","bcdl-block-gallery"),category:"common",icon:"format-gallery",attributes:{title:{type:"array",source:"children",selector:"h2"},body:{type:"array",source:"children",selector:"p"},mediaAlt:{attribute:"alt",selector:".card__image"},mediaID:{type:"number"},mediaURL:{type:"string",source:"attribute",selector:"img",attribute:"src"}},supports:{html:!1},edit:function(e){e.className;var t=e.attributes,a=t.title,l=t.body,i=t.mediaAlt,d=t.mediaID,s=t.mediaURL,b=e.setAttributes;return Object(r.createElement)("div",null,Object(r.createElement)("div",{className:"card bcdl-mask-contain shadow"},Object(r.createElement)("div",{className:"img-contain"},Object(r.createElement)(n.MediaUploadCheck,null,Object(r.createElement)(n.MediaUpload,{onSelect:function(e){b({mediaURL:e.url,mediaID:e.id,mediaAlt:e.alt,title:e.alt,body:e.description})},allowedTypes:"image",value:d,render:function(e){var t=e.open;return Object(r.createElement)(o.Button,{className:d?"image-button":"button button-large",onClick:t},d?Object(r.createElement)("img",{src:s,alt:i,className:"card-img"}):Object(c.__)("Upload Image","bcdl-block-gallery"))}})),Object(r.createElement)("div",{className:"bcdl-mask rounded"})),Object(r.createElement)("div",{className:"card-body"},Object(r.createElement)("a",{className:"stretched-link",href:"#"},Object(r.createElement)(n.RichText,{tagName:"h2",className:"card-title h5 text-center bcdl-rounded font-weight-bold",placeholder:Object(c.__)("The card title","bcdl-block-gallery"),value:a,onChange:function(e){b({title:e})}})),Object(r.createElement)(n.RichText,{tagName:"p",className:"card-text",placeholder:Object(c.__)("The card body text","bcdl-block-gallery"),value:l,onChange:function(e){b({body:e})}}))),Object(r.createElement)("div",{class:"modal fade h-100",id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Object(r.createElement)("div",{class:"modal-dialog modal-xl h-100"},Object(r.createElement)("div",{class:"modal-content bg-dark"},Object(r.createElement)("div",{class:"modal-body"},s&&Object(r.createElement)("img",{className:"img-fluid",src:s,alt:i}))))))},save:function(e){e.className;var t=e.attributes,a=t.title,l=t.body,c=t.mediaAlt,o=(t.mediaID,t.mediaURL);return Object(r.createElement)("div",null,Object(r.createElement)("div",{className:"card bcdl-mask-contain shadow"},Object(r.createElement)("div",{className:"img-contain"},o&&Object(r.createElement)("img",{className:"card-img",src:o,alt:c}),Object(r.createElement)("div",{class:"bcdl-mask rounded"})),Object(r.createElement)("div",{className:"card-body"},Object(r.createElement)("a",{className:"stretched-link",href:"#","data-toggle":"modal","data-target":"#exampleModal"},Object(r.createElement)(n.RichText.Content,{tagName:"h2",className:"card-title h5 text-center bcdl-rounded font-weight-bold",value:a})),Object(r.createElement)(n.RichText.Content,{tagName:"p",className:"card-text",value:l}))),Object(r.createElement)("div",{class:"modal fade h-100",id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Object(r.createElement)("div",{class:"modal-dialog modal-xl h-100"},Object(r.createElement)("div",{class:"modal-content bg-dark"},Object(r.createElement)("div",{class:"modal-body"},o&&Object(r.createElement)("img",{className:"img-fluid",src:o,alt:c})),Object(r.createElement)("div",{class:"modal-footer"},Object(r.createElement)("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"},"Close"))))))}})}]);