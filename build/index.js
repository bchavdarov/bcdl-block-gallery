(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{5:function(e,t,r){}}]),function(e){function t(t){for(var n,l,o=t[0],i=t[1],u=t[2],b=0,d=[];b<o.length;b++)l=o[b],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&d.push(a[l][0]),a[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(s&&s(t);d.length;)d.shift()();return c.push.apply(c,u||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,o=1;o<r.length;o++){var i=r[o];0!==a[i]&&(n=!1)}n&&(c.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},a={0:0},c=[];function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var o=window.webpackJsonp=window.webpackJsonp||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var s=i;c.push([7,1]),r()}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t){!function(){e.exports=this.wp.components}()},,function(e,t,r){},function(e,t,r){"use strict";r.r(t);var n=r(3),a=r(1),c=(r(5),r(0)),l=r(2),o=r(4);r(6);Object(n.registerBlockType)("bcdl-block-gallery/bcdl-block-gallery",{title:Object(a.__)("BCDL Gutenberg Block Gallery","bcdl-block-gallery"),description:Object(a.__)("BCDL block written with ESNext standard and JSX support – build step required!","bcdl-block-gallery"),category:"common",icon:"format-gallery",attributes:{title:{type:"array",source:"children",selector:".card__title"},body:{type:"array",source:"children",selector:".card__body"},mediaAlt:{attribute:"alt",selector:".card__image"},mediaID:{type:"number"},mediaURL:{type:"string",source:"attribute",selector:"img",attribute:"src"}},supports:{html:!1},edit:function(e){var t=e.className,r=e.attributes,n=r.title,i=r.body,u=(r.mediaAlt,r.mediaID),s=r.mediaURL,b=e.setAttributes;return Object(c.createElement)("div",{className:t},Object(c.createElement)(l.RichText,{tagName:"h2",placeholder:Object(a.__)("Write image title…","bcdl-block-gallery"),value:n,onChange:function(e){b({title:e})}}),Object(c.createElement)("div",{className:"bcdl-image"},Object(c.createElement)(l.MediaUpload,{onSelect:function(e){b({mediaURL:e.url,mediaID:e.id}),b({mediaAlt:e.alt})},allowedTypes:"image",value:u,render:function(e){var t=e.open;return Object(c.createElement)(o.Button,{className:u?"image-button":"button button-large",onClick:t},u?Object(c.createElement)("img",{src:s,alt:Object(a.__)("Upload Gallery Image","bcdl-block-gallery")}):Object(a.__)("Upload Image","bcdl-block-gallery"))}})),Object(c.createElement)(l.RichText,{tagName:"p",placeholder:Object(a.__)("Write a description","bcdl-block-gallery"),value:i,onChange:function(e){b({body:e})},className:"bcdl-body"}))},save:function(e){var t=e.className,r=e.attributes,n=r.title,a=r.body,o=r.mediaAlt,i=(r.mediaID,r.mediaURL);return Object(c.createElement)("div",{className:t},Object(c.createElement)(l.RichText.Content,{tagName:"h2",value:n}),Object(c.createElement)("div",{className:"bcdl-image"},i&&Object(c.createElement)("img",{className:"bcdl-block-image",src:i,alt:o})),Object(c.createElement)(l.RichText.Content,{tagName:"p",className:"bcdl-body",value:a}))}})}]);