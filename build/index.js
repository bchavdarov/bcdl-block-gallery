(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{5:function(e,t,a){}}]),function(e){function t(t){for(var c,l,o=t[0],i=t[1],s=t[2],u=0,b=[];u<o.length;u++)l=o[u],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&b.push(r[l][0]),r[l]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);for(d&&d(t);b.length;)b.shift()();return n.push.apply(n,s||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],c=!0,o=1;o<a.length;o++){var i=a[o];0!==r[i]&&(c=!1)}c&&(n.splice(t--,1),e=l(l.s=a[0]))}return e}var c={},r={0:0},n=[];function l(t){if(c[t])return c[t].exports;var a=c[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=c,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)l.d(a,c,function(t){return e[t]}.bind(null,c));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var o=window.webpackJsonp=window.webpackJsonp||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var d=i;n.push([7,1]),a()}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t){!function(){e.exports=this.wp.components}()},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(3),r=a(1),n=(a(5),a(0)),l=a(2),o=a(4);a(6);Object(c.registerBlockType)("bcdl-block-gallery/bcdl-block-gallery",{title:Object(r.__)("BCDL Gutenberg Block Gallery","bcdl-block-gallery"),description:Object(r.__)("BCDL block written with ESNext standard and JSX support – build step required!","bcdl-block-gallery"),category:"common",icon:"format-gallery",attributes:{title:{type:"array",source:"children",selector:"h2"},body:{type:"array",source:"children",selector:"p"},mediaAlt:{attribute:"alt",selector:".card__image"},mediaID:{type:"number"},mediaURL:{type:"string",source:"attribute",selector:"img",attribute:"src"}},supports:{html:!1},edit:function(e){e.className;var t=e.attributes,a=t.title,c=t.body,i=t.mediaAlt,s=t.mediaID,d=t.mediaURL,u=e.setAttributes;return Object(n.createElement)("div",{className:"card bcdl-mask-contain shadow"},Object(n.createElement)("div",{className:"img-contain"},Object(n.createElement)(l.MediaUploadCheck,null,Object(n.createElement)(l.MediaUpload,{onSelect:function(e){u({mediaURL:e.url,mediaID:e.id,mediaAlt:e.alt,title:e.alt,body:e.description})},allowedTypes:"image",value:s,render:function(e){var t=e.open;return Object(n.createElement)(o.Button,{className:s?"image-button":"button button-large",onClick:t},s?Object(n.createElement)("img",{src:d,alt:i,className:"card-img"}):Object(r.__)("Upload Image","bcdl-block-gallery"))}})),Object(n.createElement)("div",{className:"bcdl-mask rounded"})),Object(n.createElement)("div",{className:"card-body"},Object(n.createElement)("a",{className:"stretched-link",href:"#"},Object(n.createElement)(l.RichText,{tagName:"h2",className:"card-title h5 text-center bcdl-rounded font-weight-bold",placeholder:Object(r.__)("The card title","bcdl-block-gallery"),value:a,onChange:function(e){u({title:e})}})),Object(n.createElement)(l.RichText,{tagName:"p",className:"card-text",placeholder:Object(r.__)("The card body text","bcdl-block-gallery"),value:c,onChange:function(e){u({body:e})}})))},save:function(e){e.className;var t=e.attributes,a=t.title,c=t.body,r=t.mediaAlt,o=(t.mediaID,t.mediaURL);return Object(n.createElement)("div",{className:"card bcdl-mask-contain shadow"},Object(n.createElement)("div",{className:"img-contain"},o&&Object(n.createElement)("img",{className:"card-img",src:o,alt:r}),Object(n.createElement)("div",{class:"bcdl-mask rounded"})),Object(n.createElement)("div",{className:"card-body"},Object(n.createElement)("a",{className:"stretched-link",href:"#"},Object(n.createElement)(l.RichText.Content,{tagName:"h2",className:"card-title h5 text-center bcdl-rounded font-weight-bold",value:a})),Object(n.createElement)(l.RichText.Content,{tagName:"p",className:"card-text",value:c})))}})}]);