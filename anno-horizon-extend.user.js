// ==UserScript==
// @name         anno-horizon-Extend
// @version      1.2.2
// @description  anno-horizon 扩展程序
// @author       Timeic
// @license      MIT
// @run-at       document-body
// @match        *://anno.horizon.ai/*
// @require      https://cdn.timeic.top/anno-horizon-extend-bundle.js
// ==/UserScript==

(function (global) {
    // 全局路由
    const routeGlobal = {
        routes: '*',
        style: `*{font-family:霞鹜臻楷,Microsoft YaHei UI,Microsoft YaHei,sans-serif !important}:root{--mdui-breakpoint-xs:0px;--mdui-breakpoint-sm:600px;--mdui-breakpoint-md:840px;--mdui-breakpoint-lg:1080px;--mdui-breakpoint-xl:1440px;--mdui-breakpoint-xxl:1920px}:root{--mdui-color-primary-light:103,80,164;--mdui-color-primary-container-light:234,221,255;--mdui-color-on-primary-light:255,255,255;--mdui-color-on-primary-container-light:33,0,94;--mdui-color-inverse-primary-light:208,188,255;--mdui-color-secondary-light:98,91,113;--mdui-color-secondary-container-light:232,222,248;--mdui-color-on-secondary-light:255,255,255;--mdui-color-on-secondary-container-light:30,25,43;--mdui-color-tertiary-light:125,82,96;--mdui-color-tertiary-container-light:255,216,228;--mdui-color-on-tertiary-light:255,255,255;--mdui-color-on-tertiary-container-light:55,11,30;--mdui-color-surface-light:254,247,255;--mdui-color-surface-dim-light:222,216,225;--mdui-color-surface-bright-light:254,247,255;--mdui-color-surface-container-lowest-light:255,255,255;--mdui-color-surface-container-low-light:247,242,250;--mdui-color-surface-container-light:243,237,247;--mdui-color-surface-container-high-light:236,230,240;--mdui-color-surface-container-highest-light:230,224,233;--mdui-color-surface-variant-light:231,224,236;--mdui-color-on-surface-light:28,27,31;--mdui-color-on-surface-variant-light:73,69,78;--mdui-color-inverse-surface-light:49,48,51;--mdui-color-inverse-on-surface-light:244,239,244;--mdui-color-background-light:254,247,255;--mdui-color-on-background-light:28,27,31;--mdui-color-error-light:179,38,30;--mdui-color-error-container-light:249,222,220;--mdui-color-on-error-light:255,255,255;--mdui-color-on-error-container-light:65,14,11;--mdui-color-outline-light:121,116,126;--mdui-color-outline-variant-light:196,199,197;--mdui-color-shadow-light:0,0,0;--mdui-color-surface-tint-color-light:103,80,164;--mdui-color-scrim-light:0,0,0;--mdui-color-primary-dark:208,188,255;--mdui-color-primary-container-dark:79,55,139;--mdui-color-on-primary-dark:55,30,115;--mdui-color-on-primary-container-dark:234,221,255;--mdui-color-inverse-primary-dark:103,80,164;--mdui-color-secondary-dark:204,194,220;--mdui-color-secondary-container-dark:74,68,88;--mdui-color-on-secondary-dark:51,45,65;--mdui-color-on-secondary-container-dark:232,222,248;--mdui-color-tertiary-dark:239,184,200;--mdui-color-tertiary-container-dark:99,59,72;--mdui-color-on-tertiary-dark:73,37,50;--mdui-color-on-tertiary-container-dark:255,216,228;--mdui-color-surface-dark:20,18,24;--mdui-color-surface-dim-dark:20,18,24;--mdui-color-surface-bright-dark:59,56,62;--mdui-color-surface-container-lowest-dark:15,13,19;--mdui-color-surface-container-low-dark:29,27,32;--mdui-color-surface-container-dark:33,31,38;--mdui-color-surface-container-high-dark:43,41,48;--mdui-color-surface-container-highest-dark:54,52,59;--mdui-color-surface-variant-dark:73,69,79;--mdui-color-on-surface-dark:230,225,229;--mdui-color-on-surface-variant-dark:202,196,208;--mdui-color-inverse-surface-dark:230,225,229;--mdui-color-inverse-on-surface-dark:49,48,51;--mdui-color-background-dark:20,18,24;--mdui-color-on-background-dark:230,225,229;--mdui-color-error-dark:242,184,181;--mdui-color-error-container-dark:140,29,24;--mdui-color-on-error-dark:96,20,16;--mdui-color-on-error-container-dark:249,222,220;--mdui-color-outline-dark:147,143,153;--mdui-color-outline-variant-dark:68,71,70;--mdui-color-shadow-dark:0,0,0;--mdui-color-surface-tint-color-dark:208,188,255;--mdui-color-scrim-dark:0,0,0;font-size:16px}.mdui-theme-light,:root{color-scheme:light;--mdui-color-primary:var(--mdui-color-primary-light);--mdui-color-primary-container:var(--mdui-color-primary-container-light);--mdui-color-on-primary:var(--mdui-color-on-primary-light);--mdui-color-on-primary-container:var(--mdui-color-on-primary-container-light);--mdui-color-inverse-primary:var(--mdui-color-inverse-primary-light);--mdui-color-secondary:var(--mdui-color-secondary-light);--mdui-color-secondary-container:var(--mdui-color-secondary-container-light);--mdui-color-on-secondary:var(--mdui-color-on-secondary-light);--mdui-color-on-secondary-container:var(--mdui-color-on-secondary-container-light);--mdui-color-tertiary:var(--mdui-color-tertiary-light);--mdui-color-tertiary-container:var(--mdui-color-tertiary-container-light);--mdui-color-on-tertiary:var(--mdui-color-on-tertiary-light);--mdui-color-on-tertiary-container:var(--mdui-color-on-tertiary-container-light);--mdui-color-surface:var(--mdui-color-surface-light);--mdui-color-surface-dim:var(--mdui-color-surface-dim-light);--mdui-color-surface-bright:var(--mdui-color-surface-bright-light);--mdui-color-surface-container-lowest:var(--mdui-color-surface-container-lowest-light);--mdui-color-surface-container-low:var(--mdui-color-surface-container-low-light);--mdui-color-surface-container:var(--mdui-color-surface-container-light);--mdui-color-surface-container-high:var(--mdui-color-surface-container-high-light);--mdui-color-surface-container-highest:var(--mdui-color-surface-container-highest-light);--mdui-color-surface-variant:var(--mdui-color-surface-variant-light);--mdui-color-on-surface:var(--mdui-color-on-surface-light);--mdui-color-on-surface-variant:var(--mdui-color-on-surface-variant-light);--mdui-color-inverse-surface:var(--mdui-color-inverse-surface-light);--mdui-color-inverse-on-surface:var(--mdui-color-inverse-on-surface-light);--mdui-color-background:var(--mdui-color-background-light);--mdui-color-on-background:var(--mdui-color-on-background-light);--mdui-color-error:var(--mdui-color-error-light);--mdui-color-error-container:var(--mdui-color-error-container-light);--mdui-color-on-error:var(--mdui-color-on-error-light);--mdui-color-on-error-container:var(--mdui-color-on-error-container-light);--mdui-color-outline:var(--mdui-color-outline-light);--mdui-color-outline-variant:var(--mdui-color-outline-variant-light);--mdui-color-shadow:var(--mdui-color-shadow-light);--mdui-color-surface-tint-color:var(--mdui-color-surface-tint-color-light);--mdui-color-scrim:var(--mdui-color-scrim-light);color:rgb(var(--mdui-color-on-background));background-color:rgb(var(--mdui-color-background))}.mdui-theme-dark{color-scheme:dark;--mdui-color-primary:var(--mdui-color-primary-dark);--mdui-color-primary-container:var(--mdui-color-primary-container-dark);--mdui-color-on-primary:var(--mdui-color-on-primary-dark);--mdui-color-on-primary-container:var(--mdui-color-on-primary-container-dark);--mdui-color-inverse-primary:var(--mdui-color-inverse-primary-dark);--mdui-color-secondary:var(--mdui-color-secondary-dark);--mdui-color-secondary-container:var(--mdui-color-secondary-container-dark);--mdui-color-on-secondary:var(--mdui-color-on-secondary-dark);--mdui-color-on-secondary-container:var(--mdui-color-on-secondary-container-dark);--mdui-color-tertiary:var(--mdui-color-tertiary-dark);--mdui-color-tertiary-container:var(--mdui-color-tertiary-container-dark);--mdui-color-on-tertiary:var(--mdui-color-on-tertiary-dark);--mdui-color-on-tertiary-container:var(--mdui-color-on-tertiary-container-dark);--mdui-color-surface:var(--mdui-color-surface-dark);--mdui-color-surface-dim:var(--mdui-color-surface-dim-dark);--mdui-color-surface-bright:var(--mdui-color-surface-bright-dark);--mdui-color-surface-container-lowest:var(--mdui-color-surface-container-lowest-dark);--mdui-color-surface-container-low:var(--mdui-color-surface-container-low-dark);--mdui-color-surface-container:var(--mdui-color-surface-container-dark);--mdui-color-surface-container-high:var(--mdui-color-surface-container-high-dark);--mdui-color-surface-container-highest:var(--mdui-color-surface-container-highest-dark);--mdui-color-surface-variant:var(--mdui-color-surface-variant-dark);--mdui-color-on-surface:var(--mdui-color-on-surface-dark);--mdui-color-on-surface-variant:var(--mdui-color-on-surface-variant-dark);--mdui-color-inverse-surface:var(--mdui-color-inverse-surface-dark);--mdui-color-inverse-on-surface:var(--mdui-color-inverse-on-surface-dark);--mdui-color-background:var(--mdui-color-background-dark);--mdui-color-on-background:var(--mdui-color-on-background-dark);--mdui-color-error:var(--mdui-color-error-dark);--mdui-color-error-container:var(--mdui-color-error-container-dark);--mdui-color-on-error:var(--mdui-color-on-error-dark);--mdui-color-on-error-container:var(--mdui-color-on-error-container-dark);--mdui-color-outline:var(--mdui-color-outline-dark);--mdui-color-outline-variant:var(--mdui-color-outline-variant-dark);--mdui-color-shadow:var(--mdui-color-shadow-dark);--mdui-color-surface-tint-color:var(--mdui-color-surface-tint-color-dark);--mdui-color-scrim:var(--mdui-color-scrim-dark);color:rgb(var(--mdui-color-on-background));background-color:rgb(var(--mdui-color-background))}@media (prefers-color-scheme:dark){.mdui-theme-auto{color-scheme:dark;--mdui-color-primary:var(--mdui-color-primary-dark);--mdui-color-primary-container:var(--mdui-color-primary-container-dark);--mdui-color-on-primary:var(--mdui-color-on-primary-dark);--mdui-color-on-primary-container:var(--mdui-color-on-primary-container-dark);--mdui-color-inverse-primary:var(--mdui-color-inverse-primary-dark);--mdui-color-secondary:var(--mdui-color-secondary-dark);--mdui-color-secondary-container:var(--mdui-color-secondary-container-dark);--mdui-color-on-secondary:var(--mdui-color-on-secondary-dark);--mdui-color-on-secondary-container:var(--mdui-color-on-secondary-container-dark);--mdui-color-tertiary:var(--mdui-color-tertiary-dark);--mdui-color-tertiary-container:var(--mdui-color-tertiary-container-dark);--mdui-color-on-tertiary:var(--mdui-color-on-tertiary-dark);--mdui-color-on-tertiary-container:var(--mdui-color-on-tertiary-container-dark);--mdui-color-surface:var(--mdui-color-surface-dark);--mdui-color-surface-dim:var(--mdui-color-surface-dim-dark);--mdui-color-surface-bright:var(--mdui-color-surface-bright-dark);--mdui-color-surface-container-lowest:var(--mdui-color-surface-container-lowest-dark);--mdui-color-surface-container-low:var(--mdui-color-surface-container-low-dark);--mdui-color-surface-container:var(--mdui-color-surface-container-dark);--mdui-color-surface-container-high:var(--mdui-color-surface-container-high-dark);--mdui-color-surface-container-highest:var(--mdui-color-surface-container-highest-dark);--mdui-color-surface-variant:var(--mdui-color-surface-variant-dark);--mdui-color-on-surface:var(--mdui-color-on-surface-dark);--mdui-color-on-surface-variant:var(--mdui-color-on-surface-variant-dark);--mdui-color-inverse-surface:var(--mdui-color-inverse-surface-dark);--mdui-color-inverse-on-surface:var(--mdui-color-inverse-on-surface-dark);--mdui-color-background:var(--mdui-color-background-dark);--mdui-color-on-background:var(--mdui-color-on-background-dark);--mdui-color-error:var(--mdui-color-error-dark);--mdui-color-error-container:var(--mdui-color-error-container-dark);--mdui-color-on-error:var(--mdui-color-on-error-dark);--mdui-color-on-error-container:var(--mdui-color-on-error-container-dark);--mdui-color-outline:var(--mdui-color-outline-dark);--mdui-color-outline-variant:var(--mdui-color-outline-variant-dark);--mdui-color-shadow:var(--mdui-color-shadow-dark);--mdui-color-surface-tint-color:var(--mdui-color-surface-tint-color-dark);--mdui-color-scrim:var(--mdui-color-scrim-dark);color:rgb(var(--mdui-color-on-background));background-color:rgb(var(--mdui-color-background))}}:root{--mdui-elevation-level0:none;--mdui-elevation-level1:0 0.5px 1.5px 0 rgba(var(--mdui-color-shadow), 19%),0 0 1px 0 rgba(var(--mdui-color-shadow), 3.9%);--mdui-elevation-level2:0 0.85px 3px 0 rgba(var(--mdui-color-shadow), 19%),0 0.25px 1px 0 rgba(var(--mdui-color-shadow), 3.9%);--mdui-elevation-level3:0 1.25px 5px 0 rgba(var(--mdui-color-shadow), 19%),0 0.3333px 1.5px 0 rgba(var(--mdui-color-shadow), 3.9%);--mdui-elevation-level4:0 1.85px 6.25px 0 rgba(var(--mdui-color-shadow), 19%),0 0.5px 1.75px 0 rgba(var(--mdui-color-shadow), 3.9%);--mdui-elevation-level5:0 2.75px 9px 0 rgba(var(--mdui-color-shadow), 19%),0 0.25px 3px 0 rgba(var(--mdui-color-shadow), 3.9%)}:root{--mdui-motion-easing-linear:cubic-bezier(0, 0, 1, 1);--mdui-motion-easing-standard:cubic-bezier(0.2, 0, 0, 1);--mdui-motion-easing-standard-accelerate:cubic-bezier(0.3, 0, 1, 1);--mdui-motion-easing-standard-decelerate:cubic-bezier(0, 0, 0, 1);--mdui-motion-easing-emphasized:var(--mdui-motion-easing-standard);--mdui-motion-easing-emphasized-accelerate:cubic-bezier(0.3, 0, 0.8, 0.15);--mdui-motion-easing-emphasized-decelerate:cubic-bezier(0.05, 0.7, 0.1, 1);--mdui-motion-duration-short1:50ms;--mdui-motion-duration-short2:100ms;--mdui-motion-duration-short3:150ms;--mdui-motion-duration-short4:200ms;--mdui-motion-duration-medium1:250ms;--mdui-motion-duration-medium2:300ms;--mdui-motion-duration-medium3:350ms;--mdui-motion-duration-medium4:400ms;--mdui-motion-duration-long1:450ms;--mdui-motion-duration-long2:500ms;--mdui-motion-duration-long3:550ms;--mdui-motion-duration-long4:600ms;--mdui-motion-duration-extra-long1:700ms;--mdui-motion-duration-extra-long2:800ms;--mdui-motion-duration-extra-long3:900ms;--mdui-motion-duration-extra-long4:1000ms}.mdui-prose{line-height:1.75;word-wrap:break-word}.mdui-prose :first-child{margin-top:0}.mdui-prose :last-child{margin-bottom:0}.mdui-prose code,.mdui-prose kbd,.mdui-prose pre,.mdui-prose pre tt,.mdui-prose samp{font-family:Consolas,Courier,"Courier New",monospace}.mdui-prose caption{text-align:left}.mdui-prose [draggable=true],.mdui-prose [draggable]{cursor:move}.mdui-prose [draggable=false]{cursor:inherit}.mdui-prose dl,.mdui-prose form,.mdui-prose ol,.mdui-prose p,.mdui-prose ul{margin-top:1.25em;margin-bottom:1.25em}.mdui-prose a{text-decoration:none;outline:0;color:rgb(var(--mdui-color-primary))}.mdui-prose a:focus,.mdui-prose a:hover{border-bottom:.0625rem solid rgb(var(--mdui-color-primary))}.mdui-prose small{font-size:.875em}.mdui-prose strong{font-weight:600}.mdui-prose blockquote{margin:1.6em 2em;padding-left:1em;border-left:.25rem solid rgb(var(--mdui-color-surface-variant))}@media only screen and (max-width:599.98px){.mdui-prose blockquote{margin:1.6em 0}}.mdui-prose blockquote footer{font-size:86%;color:rgb(var(--mdui-color-on-surface-variant))}.mdui-prose mark{color:inherit;background-color:rgb(var(--mdui-color-secondary-container));border-bottom:.0625rem solid rgb(var(--mdui-color-secondary));margin:0 .375rem;padding:.125rem}.mdui-prose h1,.mdui-prose h2,.mdui-prose h3,.mdui-prose h4,.mdui-prose h5,.mdui-prose h6{font-weight:400}.mdui-prose h1 small,.mdui-prose h2 small,.mdui-prose h3 small,.mdui-prose h4 small,.mdui-prose h5 small,.mdui-prose h6 small{font-weight:inherit;font-size:65%;color:rgb(var(--mdui-color-on-surface-variant))}.mdui-prose h1 strong,.mdui-prose h2 strong,.mdui-prose h3 strong,.mdui-prose h4 strong,.mdui-prose h5 strong,.mdui-prose h6 strong{font-weight:600}.mdui-prose h1{font-size:2.5em;margin-top:0;margin-bottom:1.25em;line-height:1.1111}.mdui-prose h2{font-size:1.875em;margin-top:2.25em;margin-bottom:1.125em;line-height:1.3333}.mdui-prose h3{font-size:1.5em;margin-top:2em;margin-bottom:1em;line-height:1.6}.mdui-prose h4{font-size:1.25em;margin-top:1.875em;margin-bottom:.875em;line-height:1.5}.mdui-prose h2+*,.mdui-prose h3+*,.mdui-prose h4+*,.mdui-prose hr+*{margin-top:0}.mdui-prose code,.mdui-prose kbd{font-size:.875em;color:rgb(var(--mdui-color-on-surface-container));background-color:rgba(var(--mdui-color-surface-variant),.28);padding:.125rem .375rem;border-radius:var(--mdui-shape-corner-extra-small)}.mdui-prose kbd{font-size:.9em}.mdui-prose abbr[title]{text-decoration:none;cursor:help;border-bottom:.0625rem dotted rgb(var(--mdui-color-on-surface-variant))}.mdui-prose ins,.mdui-prose u{text-decoration:none;border-bottom:.0625rem solid rgb(var(--mdui-color-on-surface-variant))}.mdui-prose del{text-decoration:line-through}.mdui-prose hr{margin-top:3em;margin-bottom:3em;border:none;border-bottom:.0625rem solid rgb(var(--mdui-color-surface-variant))}.mdui-prose pre{margin-top:1.7143em;margin-bottom:1.7143em}.mdui-prose pre code{padding:.8571em 1.1429em;overflow-x:auto;-webkit-overflow-scrolling:touch;background-color:rgb(var(--mdui-color-surface-container));color:rgb(var(--mdui-color-on-surface-container));border-radius:var(--mdui-shape-corner-extra-small)}.mdui-prose ol,.mdui-prose ul{padding-left:1.625em}.mdui-prose ul{list-style-type:disc}.mdui-prose ol{list-style-type:decimal}.mdui-prose ol[type="A"]{list-style-type:upper-alpha}.mdui-prose ol[type="a"]{list-style-type:lower-alpha}.mdui-prose ol[type="I"]{list-style-type:upper-roman}.mdui-prose ol[type="i"]{list-style-type:lower-roman}.mdui-prose ol[type="1"]{list-style-type:decimal}.mdui-prose li{margin-top:.5em;margin-bottom:.5em}.mdui-prose ol>li,.mdui-prose ul>li{padding-left:.375em}.mdui-prose ol>li>p,.mdui-prose ul>li>p{margin-top:.75em;margin-bottom:.75em}.mdui-prose ol>li>:first-child,.mdui-prose ul>li>:first-child{margin-top:1.25em}.mdui-prose ol>li>:last-child,.mdui-prose ul>li>:last-child{margin-bottom:1.25em}.mdui-prose ol>li::marker{font-weight:400;color:rgb(var(--mdui-color-on-surface-variant))}.mdui-prose ul>li::marker{color:rgb(var(--mdui-color-on-surface-variant))}.mdui-prose ol ol,.mdui-prose ol ul,.mdui-prose ul ol,.mdui-prose ul ul{margin-top:.75em;margin-bottom:.75em}.mdui-prose fieldset,.mdui-prose img{border:none}.mdui-prose figure,.mdui-prose img,.mdui-prose video{margin-top:2em;margin-bottom:2em;max-width:100%}.mdui-prose figure>*{margin-top:0;margin-bottom:0}.mdui-prose figcaption{font-size:.875em;line-height:1.4286;margin-top:.8571em;color:rgb(var(--mdui-color-on-surface-variant))}.mdui-prose figcaption:empty::before{z-index:-1;cursor:text;content:attr(placeholder);color:rgb(var(--mdui-color-on-surface-variant))}.mdui-prose table{margin-top:2em;margin-bottom:2em;border:.0625rem solid rgb(var(--mdui-color-surface-variant));border-radius:var(--mdui-shape-corner-large)}.mdui-table{width:100%;overflow-x:auto;margin-top:2em;margin-bottom:2em;border:.0625rem solid rgb(var(--mdui-color-surface-variant));border-radius:var(--mdui-shape-corner-large)}.mdui-table table{margin-top:0;margin-bottom:0;border:none;border-radius:0}.mdui-prose table,.mdui-table table{width:100%;text-align:left;border-collapse:collapse;border-spacing:0}.mdui-prose td,.mdui-prose th,.mdui-table td,.mdui-table th{border-top:.0625rem solid rgb(var(--mdui-color-surface-variant))}.mdui-prose td:not(:first-child),.mdui-prose th:not(:first-child),.mdui-table td:not(:first-child),.mdui-table th:not(:first-child){border-left:.0625rem solid rgb(var(--mdui-color-surface-variant))}.mdui-prose td:not(:last-child),.mdui-prose th:not(:last-child),.mdui-table td:not(:last-child),.mdui-table th:not(:last-child){border-right:.0625rem solid rgb(var(--mdui-color-surface-variant))}.mdui-prose tbody:first-child tr:first-child td,.mdui-prose thead:first-child tr:first-child th,.mdui-table tbody:first-child tr:first-child td,.mdui-table thead:first-child tr:first-child th{border-top:0}.mdui-prose tfoot td,.mdui-prose tfoot th,.mdui-prose thead td,.mdui-prose thead th,.mdui-table tfoot td,.mdui-table tfoot th,.mdui-table thead td,.mdui-table thead th{position:relative;vertical-align:middle;padding:1.125rem 1rem;font-weight:var(--mdui-typescale-title-medium-weight);letter-spacing:var(--mdui-typescale-title-medium-tracking);line-height:var(--mdui-typescale-title-medium-line-height);color:rgb(var(--mdui-color-on-surface-variant));box-shadow:var(--mdui-elevation-level1)}.mdui-prose tbody td,.mdui-prose tbody th,.mdui-table tbody td,.mdui-table tbody th{padding:.875rem 1rem}.mdui-prose tbody th,.mdui-table tbody th{vertical-align:middle;font-weight:inherit}.mdui-prose tbody td,.mdui-table tbody td{vertical-align:baseline}:root{--mdui-shape-corner-none:0;--mdui-shape-corner-extra-small:0.25rem;--mdui-shape-corner-small:0.5rem;--mdui-shape-corner-medium:0.75rem;--mdui-shape-corner-large:1rem;--mdui-shape-corner-extra-large:1.75rem;--mdui-shape-corner-full:1000rem}:root{--mdui-state-layer-hover:0.08;--mdui-state-layer-focus:0.12;--mdui-state-layer-pressed:0.12;--mdui-state-layer-dragged:0.16}:root{--mdui-typescale-display-large-weight:400;--mdui-typescale-display-medium-weight:400;--mdui-typescale-display-small-weight:400;--mdui-typescale-display-large-line-height:4rem;--mdui-typescale-display-medium-line-height:3.25rem;--mdui-typescale-display-small-line-height:2.75rem;--mdui-typescale-display-large-size:3.5625rem;--mdui-typescale-display-medium-size:2.8125rem;--mdui-typescale-display-small-size:2.25rem;--mdui-typescale-display-large-tracking:0rem;--mdui-typescale-display-medium-tracking:0rem;--mdui-typescale-display-small-tracking:0rem;--mdui-typescale-headline-large-weight:400;--mdui-typescale-headline-medium-weight:400;--mdui-typescale-headline-small-weight:400;--mdui-typescale-headline-large-line-height:2.5rem;--mdui-typescale-headline-medium-line-height:2.25rem;--mdui-typescale-headline-small-line-height:2rem;--mdui-typescale-headline-large-size:2rem;--mdui-typescale-headline-medium-size:1.75rem;--mdui-typescale-headline-small-size:1.5rem;--mdui-typescale-headline-large-tracking:0rem;--mdui-typescale-headline-medium-tracking:0rem;--mdui-typescale-headline-small-tracking:0rem;--mdui-typescale-title-large-weight:400;--mdui-typescale-title-medium-weight:500;--mdui-typescale-title-small-weight:500;--mdui-typescale-title-large-line-height:1.75rem;--mdui-typescale-title-medium-line-height:1.5rem;--mdui-typescale-title-small-line-height:1.25rem;--mdui-typescale-title-large-size:1.375rem;--mdui-typescale-title-medium-size:1rem;--mdui-typescale-title-small-size:0.875rem;--mdui-typescale-title-large-tracking:0rem;--mdui-typescale-title-medium-tracking:0.009375rem;--mdui-typescale-title-small-tracking:0.00625rem;--mdui-typescale-label-large-weight:500;--mdui-typescale-label-medium-weight:500;--mdui-typescale-label-small-weight:500;--mdui-typescale-label-large-line-height:1.25rem;--mdui-typescale-label-medium-line-height:1rem;--mdui-typescale-label-small-line-height:0.375rem;--mdui-typescale-label-large-size:0.875rem;--mdui-typescale-label-medium-size:0.75rem;--mdui-typescale-label-small-size:0.6875rem;--mdui-typescale-label-large-tracking:0.00625rem;--mdui-typescale-label-medium-tracking:0.03125rem;--mdui-typescale-label-small-tracking:0.03125rem;--mdui-typescale-body-large-weight:400;--mdui-typescale-body-medium-weight:400;--mdui-typescale-body-small-weight:400;--mdui-typescale-body-large-line-height:1.5rem;--mdui-typescale-body-medium-line-height:1.25rem;--mdui-typescale-body-small-line-height:1rem;--mdui-typescale-body-large-size:1rem;--mdui-typescale-body-medium-size:0.875rem;--mdui-typescale-body-small-size:0.75rem;--mdui-typescale-body-large-tracking:0.009375rem;--mdui-typescale-body-medium-tracking:0.015625rem;--mdui-typescale-body-small-tracking:0.025rem}.mdui-lock-screen{overflow:hidden!important}`,
        extend: {
            formatCurrentDate() {
                const today = new Date();
                let year = today.getFullYear();
                let month = (today.getMonth() + 1).toString().padStart(2, '0'); // 月份是从0开始的
                let day = today.getDate().toString().padStart(2, '0');
                return `${year}-${month}-${day}`;
            },
            /**
             * copyToClipboard 拷贝文本到剪贴板
             * @param {String} text 文本
             * @returns {void}
            */
            copyToClipboard(text) {
                const input = document.createElement('input')
                input.value = text
                document.body.appendChild(input)
                input.select()
                document.execCommand('copy')
                document.body.removeChild(input)
            },
            /**
             * receive 领取数据
             * @param {String} projectId
             * @param {String} stageId
             * @param {String} lockUsers
             * @param {String} id
             * @returns {Object} {starus|状态, msg｜消息, ...}
            */
            async receive(projectId, stageId, id, target = 'none', lStatus) {
                const s = await $.ajax({
                    type: "GET",
                    url: `https://anno.horizon.ai/api/job/v2/workflow/pull/projects/${projectId}/stages/${stageId}?prev_user_id=${localStorage.lockUsers}&status=1&data_ver_id=${id}`,
                    dataType: 'json',
                    xhrFields: {
                        withCredentials: true
                    }
                })
                if (s.data === null) {
                    if ($('.ant-tabs.ant-tabs-top.horizon-tabs .ant-tabs-nav .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn span.ant-badge').length > 0 && lStatus === true) {
                        const s = await $.ajax({
                            type: "GET",
                            url: `https://anno.horizon.ai/api/job/v2/workflow/pull/projects/${projectId}/stages/${stageId}?status=2&data_ver_id=${id}`,
                            dataType: 'json',
                            xhrFields: {
                                withCredentials: true
                            }
                        })
                        if (s.data === null) {
                            mdui.snackbar({message: `❌${s.msg}`})
                            return {status: false, msg: s.msg, id: id}
                        } else {
                            mdui.snackbar({message: `✅领取任务 ${id}`})
                            if (target !== 'none') 
                                window.open(s.data.url, target)
                            if (target === '_self')
                                location.reload()
                        }
                    } else {
                        mdui.snackbar({message: `❌${s.msg}`})
                        return {status: false, msg: s.msg, id: id}
                    }
                } else {
                    mdui.snackbar({message: `🔔${id}`})
                    if (target !== 'none') 
                        window.open(s.data.url, target)
                    if (target === '_self')
                        location.reload()
                    return {status: true}
                }
            },
            /**
             * lockReceive 锁定用户领取数据
             * @param {Object} options 配置项, { receiveManner|领取方式(gloabl|scope), dataId|数据ID, idType|dataId类型(ver|raw), projectId|项目ID, stageId, target|打开方式(_self|_blank|none) }
             * @returns {Object} 领取结果
            */
            async lockReceive(options) {
                let {receiveManner = 'global', dataId, idType = 'raw', projectId, stageId, target, lStatus = false} = options
                if (localStorage.lockUsers === undefined || localStorage.lockUsers === '') {
                    mdui.snackbar({message: `❌未设置锁定用户`})
                    return {err: '未设置锁定用户'}
                }
                let id, d = await this.getProjectDataList()
                if (receiveManner === 'global') {
                    keys = Object.keys(d.data.todo.data_raw_id)
                    for (let i = 0; i < keys.length; i++) {
                        mdui.snackbar({message: `🔔${keys[i]}: 查询中...`})
                        id = d.data.todo.data_raw_id[keys[i]].id
                        const r = await this.receive(projectId, stageId, id, target, lStatus)
                        return r
                    }
                } else if (receiveManner === 'scope') {
                    if (idType === 'raw') 
                        id = d.data.data_raw_id[dataId].id
                    else if (idType === 'ver') 
                        id = dataId
                    const r = await this.receive(projectId, stageId, id, target, lStatus)
                    return r
                }
            },
            /**
             * getProjectDataList 获取项目数据列表
             * @returns {Object} 获取结果
            */
            async getProjectDataList() {
                let res = {data: { data_raw_id: {}, id: {}, todo: {data_raw_id: {}, id: {}} }}
                let s = await $.ajax({
                    type: "GET",
                    url: `https://anno.horizon.ai/api/job/v2/projects/${this.urlParams.project === undefined ? this.urlParams.project_id : this.urlParams.project}/vers?limit=1000&stage_id=${this.urlParams.stage_id}&page=1&status=2`,
                    dataType: 'json',
                    xhrFields: {
                        withCredentials: true
                    }
                })
                if (s.error !== 0) {
                    mdui.snackbar({message: `❌${s.msg}`})
                    return
                }
                s.data.detail.forEach(e => {
                    res.data.data_raw_id[e.data_raw_id] = e
                    res.data.id[e.id] = e
                    if (e.todo_num > 0) {
                        res.data.todo.data_raw_id[e.data_raw_id] = e
                        res.data.todo.id[e.id] = e
                    }
                })
                res.data.refe = s
                return res
            },
            /**
             * getUrlParams 获取URL参数
             * @returns {Object} 获取结果, {key: value, ...}
            */
            getUrlParams(sub) {
                let res = {}
                let query = sub === 3 ? new URL(location.href).hash.substring(sub) : location.search.substring(sub)
                let vars = query.split("&")
                for (var i = 0; i < vars.length; i++) {
                    let pair = vars[i].split("=")
                    res[pair[0]] = pair[1]
                }
                return res
            },
            downloadTextFile(text, fileName) {
                const blob = new Blob([text], { type: 'text/plain' })
                const url = URL.createObjectURL(blob)
                const link = document.createElement('a')
                link.href = url
                link.download = fileName
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
                URL.revokeObjectURL(url)
            }
        },
        loadExec() {
            global.update = function (key) {
                const Pak = new Function
                Pak.prototype.get = function (subKey, listen = true) {
                    for (const i in global.extendWebPage[key]) {
                        if (typeof global.extendWebPage[key][i].hidden !== 'boolean') 
                            global.extendWebPage[key][i].hidden = false
                    }
                    if (listen) 
                        setInterval(() => {
                            localStorage[key] = JSON.stringify(global.extendWebPage[key])
                        }, 150)
                    return subKey === undefined ? global.extendWebPage[key] : global.extendWebPage[key][subKey]
                }
                Pak.prototype.set = function (subKey, value) {
                    if (typeof subKey === 'string' && value === undefined) {
                        let hidden = global.extendWebPage[key][subKey].hidden
                        global.extendWebPage[key][subKey].hidden = !hidden
                        localStorage[key] = JSON.stringify(global.extendWebPage[key])
                        global.extendWebPage[key + 'Init'](global.extendWebPage[key])
                        mdui.snackbar({message: `${hidden ? '显示' : '隐藏'} ${subKey}`})
                    } else if (typeof subKey === 'string' && typeof value === 'object') {
                        global.extendWebPage[key][subKey] = value
                        localStorage[key] = JSON.stringify(global.extendWebPage[key])
                        global.extendWebPage[key + 'Init'](global.extendWebPage[key])
                        console.log(`添加成功 ${subKey}: `, value)
                    } else
                        console.error(`添加失败 ${subKey}, 数据错误`)
                }
                Pak.prototype.export = function () {
                    let filename = `${key}_${new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toISOString().replace(/T/, '_').replace(/\..+/, '').substring(0, 19)}.json`
                    global.extendWebPage.downloadTextFile(localStorage[key], filename)
                    console.log(`导出文件: ${filename}`)
                }
                return new Pak
            }
        }
    }

    const routeDataLabel = {
        routes: ['*://anno.horizon.ai/', '*://anno.horizon.ai/data-label/*'],
        extend: {
            $anyInfo: $(`<mdui-dialog class="any-info" close-on-esc close-on-overlay-click><mdui-list><mdui-collapse class="user-list"></mdui-collapse></mdui-list></mdui-dialog>`),
            $accountSelect: $(`<mdui-select class="accountSelect" style="width: 250px" label="切换账号" value=""></mdui-select>`),
            $personnelScreening: $(`<mdui-fab extended style="position: fixed;bottom: 10px;right: 50px;z-index: 999999">人员筛选</mdui-fab>`),
            $lockReceive: $(`<mdui-fab extended style="position: fixed;bottom: 75px;right: 50px;z-index: 999999">锁定领取</mdui-fab>`),
            $usersSelect: $(`<mdui-dialog class="any-info" close-on-esc close-on-overlay-click><mdui-list><h2>设置锁定领取用户</h2><mdui-collapse><mdui-select multiple class="users-select"></mdui-select></mdui-dialog>`),
            accounts: {
                QZ_shaojiale1: {name: '邵甲乐', passwd: 'qzqh-2024'},
                QZ_ningbinbin1: {name: '宁斌斌', passwd: 'qzqh-2024'},
                QZ_houmengmeng: {name: '侯蒙蒙', passwd: 'Qzqh-2024'},
                QZ_chenjun: {name: '陈俊', passwd: 'qzqh-2024'},
                QZ_lijingqi: {name: '李靖琦', passwd: 'qzqh-2024'},
                QZ_liyueyue: {name: '李悦悦', passwd: 'Qzqh-2024'},
                QZ_guanzirui1: {name: '关子瑞', passwd: 'qzqh-2024'},
                QZ_weiqianqian1: {name: '伟倩倩', passwd: 'qzqh-2024'},
                QZ_zhangyule: {name: '张宇乐', passwd: 'Qzqh-2024'},
                QZ_wangmengting: {name: '王梦婷', passwd: 'qzqh-2024'},
                QZ_jinxiaodong: {name: '靳小东', passwd: 'Qzqh-2024'},
                QZ_luoyuxiang1: {name: '罗宇翔', passwd: 'nsw-810916'},
                QZ_sunxuehua: {name: '孙雪华', passwd: 'Qzqh-2024'},
                QZ_liujingjing: {name: '刘晶晶', passwd: 'qzqh-2024'},
                QZ_wangluyao: {name: '王路遥', passwd: 'Qzqh-2024'},
                QZ_wangyuying: {name: '王玉英', passwd: 'Qzqh-2024'},
                QZ_jianghui: {name: '姜慧', passwd: 'Qzqh-2024'},
                QZ_tiantao: {name: '田涛', passwd: 'qzqh-2024'},
                QZ_yuanyouchao: {name: '袁友超', passwd: 'Qzqh-2024'},
                QZ_weiming: {name: '韦明', passwd: 'Qzqh-2024'},
                QZ_ruirongyang: {name: '芮榕阳', passwd: 'qzqh-2024'},
                QZ_weiyu: {name: '魏宇', passwd: 'qzqh-2024'},
                QZ_tianyu1: {name: '田宇', passwd: 'qzqh-2024'},
                QZ_zhoujianhao: {name: '周建豪', passwd: 'qzqh-2024'},
                QZ_zhangyan: {name: '张岩', passwd: 'qzqh-2024'},
                quanzhiguanli: {name: '管理', passwd: 'mimaQzqh-2024', hidden: true}
            },
            users: {
                37922: {name: '李悦悦'},
                46167: {name: '伟倩倩'},
                37963: {name: '侯蒙蒙'},
                46168: {name: '关子瑞'},
                43876: {name: '张宇乐'},
                43516: {name: '靳小东'},
                43881: {name: '孙雪华'},
                43873: {name: '王路遥'},
                37925: {name: '王玉英'},
                43875: {name: '姜慧'},
                43874: {name: '韦明'},
                37917: {name: '周建豪'},
                48460: {name: '田宇'},
                48457: {name: '魏宇'},
                48462: {name: '芮榕阳'},
                46764: {name: '王梦婷'},
                46165: {name: '宁斌斌'},
                46169: {name: '罗宇翔'},
                46762: {name: '刘晶晶'},
                37923: {name: '袁友超'},
                37929: {name: '张岩'},
                37927: {name: '田涛'},
                46166: {name: '邵甲乐'},
                46765: {name: '陈俊'}
            },
            /**
             * accountsInit 账号切换初始化
             * @param {Object} accounts 账号列表
             * @returns {void}
            */
            accountsInit(accounts) {
                if ($('.label-header .header-menu > mdui-select.accountSelect').length === 0) 
                    $('.label-header .header-menu').prepend(this.$accountSelect)
                let accountKeys = Object.keys(accounts)
                this.$accountSelect.html('')
                accountKeys.forEach(e => {
                    if (accounts[e].hidden) 
                        return
                    else {
                        let {name} = accounts[e]
                        this.loginUserName = $('.label-header .header-menu .name').text()
                        this.$accountSelect.append(`<mdui-menu-item value="${e}">${name} - ${e}</mdui-menu-item>`)
                        if (e === this.loginUserName) this.$accountSelect[0].value = this.loginUserName
                    }
                })
                this.$accountSelect.find('mdui-menu-item').on('contextmenu', e => {
                    if (e.ctrlKey) 
                        global.update('accounts').set($(e.target).attr('value'))
                    e.preventDefault()
                })
                this.$accountSelect.on('change', async e => {
                    let value = this.$accountSelect[0].value
                    if (value === '' || value === this.loginUserName)
                        this.$accountSelect[0].value = this.loginUserName
                    else {
                        let s = await $.ajax({
                            type: "POST",
                            url: `https://anno.horizon.ai/datasys/rbac/home/login/`,
                            dataType: 'json',
                            data: `name=${value}&password=${this.accounts[value].passwd}&region_code=${this.accounts[value].region_code === undefined ? 'bz90077' : this.accounts[value].region_code}`,
                            xhrFields: {
                                withCredentials: true
                            }
                        })
                        if (s.error !== 0) 
                            mdui.snackbar({message: `❌${s.msg}`})
                        else 
                            location.reload()
                    }
                })
            },
            /**
             * usersInit 锁定领取初始化
             * @param {Object} users 用户列表
             * @returns {void}
            */
            usersInit(users) {
                let uids = Object.keys(users)
                let $usersSelect = this.$usersSelect.find('.users-select').html('')
                if (localStorage.lockUsers !== undefined && localStorage.lockUsers !== '') {
                    $usersSelect[0].value = localStorage.lockUsers.split(',')
                }
                uids.forEach(e => {
                    if (users[e].hidden) 
                        return 
                    else {
                        let {name} = users[e]
                        $usersSelect.append(`<mdui-menu-item value="${e}">${name}</mdui-menu-item>`)
                    }
                })
                $usersSelect.find('mdui-menu-item').on('contextmenu', e => {
                    if (e.ctrlKey) 
                        global.update('users').set($(e.target).attr('value'))
                    e.preventDefault()
                })
                $($usersSelect[0]).on('change', e => {
                    localStorage.lockUsers = $usersSelect[0].value.join(',')
                })
            },
            /**
             * getJobDataList 获取工作数据列表
             * @param {String} dataVerId data_ver_id
             * @returns {Object} 获取结果
            */
            async getJobDataList(dataVerId) {
                let res = {data: { job_id: {}, user: {} }}
                let s = await $.ajax({
                    type: "GET",
                    url: `https://anno.horizon.ai/api/job/v2/workflow/projects/${this.urlParams.project}/stages/${this.urlParams.stage_id}/job_todo_list?data_ver_id=${dataVerId}&limit=1000&page=1&j_status=todo`,
                    dataType: 'json',
                    xhrFields: {
                        withCredentials: true
                    }
                })
                if (s.error !== 0) {
                    mdui.snackbar({message: `❌${s.msg}`})
                    return
                }
                let {detail} = s.data
                if (detail === null) {
                    mdui.snackbar({message: `❌啥也没有呀!`})
                    return
                }
                for (let i = 0; i < detail.length; i++) {
                    let { job_id, image_key, data_ver_id } = detail[i]
                    detail[i].browseUrl = `https://anno.horizon.ai/annotation-tool/4d-tool-static/#/?data_ver_id=${data_ver_id}&stage_id=${this.urlParams.stage_id}&image_key=${image_key}&project_id=${this.urlParams.project}&job_id=${job_id}&act=browser&model=logical&token=undefined`
                    let r = await $.getJSON(`https://anno.horizon.ai/api/job/v2/workflow/projects/${this.urlParams.project}/jobs/${job_id}/op-log?page=1`)
                    for (let j = 0; j < r.data.log.length; j++) {
                        if (r.data.log[j].stage_name === '标注') {
                            detail[i].user = r.data.log[j].user
                            if (res.data.user[r.data.log[j].user.by_name] === undefined) 
                                res.data.user[r.data.log[j].user.by_name] = {job_id: {}}
                            res.data.user[r.data.log[j].user.by_name].job_id[job_id] = detail[i]
                            break
                        }
                    }
                    res.data.job_id[job_id] = detail[i]
                }
                res.data.refe = s
                return res
            },
            /**
             * getWorkload 获取工作量
             * @param {*} date 
             * @param {*} person 
             * @returns {Object} {data: '标注': {}, '质检': {}}
            */
            async getWorkload(date, person, projectId) {
                let res = {data: {'标注': {users: {}, list: null}, '质检': {users: {}, list: null}}},
                r = await $.getJSON(`https://anno.horizon.ai/datasys/api/v1/common-pages/personalStatWorkloadAndSettlement/contents/default?conditions=%7B%22date%22:%7B%22timeRadio%22:%22yesterday%22,%22startTime%22:%22${date}T00:00:00%2B08:00%22,%22endTime%22:%22${date}T23:59:59%2B08:00%22%7D,%22firmId%22:-1,%22userNames%22:[%22QZ_shaojiale1%22],%22projectIds%22:null,%22processId%22:-1,%22only_me%22:[]%7D&date=%7B%22s%22:%22${date}+00:00:00%22,%22e%22:%22${date}+23:59:59%22%7D&firmId=-1&userNames=${JSON.stringify(person).replace(/\"/g, '%22')}&processId=-1&commonPageOffset=0&commonPageLimit=1000&sortFields=%7B%7D`)
                if (projectId === undefined) {
                    r.data.detail.forEach(e => {
                        e.name = this.accounts[e.user_name].name
                        if (res.data[e.proc_name].users[e.user_name] === undefined) 
                            res.data[e.proc_name].users[e.user_name] = e
                        else {
                            res.data[e.proc_name].users[e.user_name].subfirst_img += e.subfirst_img
                            res.data[e.proc_name].users[e.user_name].subfirst_polyline += e.subfirst_polyline
                        }
                    })
                    res.data['标注'].list = Object.values(res.data['标注'].users).sort((a, b) => b.subfirst_polyline - a.subfirst_polyline)
                    res.data['质检'].list = Object.values(res.data['质检'].users).sort((a, b) => b.subfirst_polyline - a.subfirst_polyline)
                } else {
                    r.data.detail.forEach(e => {
                        if (e.pro_id === projectId) {
                            e.name = this.accounts[e.user_name].name
                            if (res.data[e.proc_name].users[e.user_name] === undefined) 
                                res.data[e.proc_name].users[e.user_name] = e
                        }
                    })
                    res.data['标注'].list = Object.values(res.data['标注'].users).sort((a, b) => b.subfirst_polyline - a.subfirst_polyline)
                    res.data['质检'].list = Object.values(res.data['质检'].users).sort((a, b) => b.subfirst_polyline - a.subfirst_polyline)
                }
                return res
            },
            async getQuality(date, person, projectId) {
                let res = {data: {'标注': {list: []}, '质检': {list: []}}},
                r = await $.getJSON(`https://anno.horizon.ai/datasys/api/v1/common-pages/statControlQuality/contents/final?conditions=%7B%22date%22:%7B%22timeRadio%22:%22yesterday%22,%22startTime%22:%22${date}T00:00:00%2B08:00%22,%22endTime%22:%22${date}T23:59:59%2B08:00%22%7D,%22firmId%22:-1,%22dataVersion%22:null,%22projectId%22:null,%22processId%22:-1,%22filter%22:[%22test%22],%22domain_id%22:-1,%22userNames%22:${JSON.stringify(person).replace(/\"/g, '%22')}%7D&commonPageTab=final&date=%7B%22s%22:%22${date}+00:00:00%22,%22e%22:%22${date}+23:59:59%22%7D&firmId=-1&userNames=${JSON.stringify(person).replace(/\"/g, '%22')}&processId=-1&filter=[%22test%22]&domain_id=-1&commonPageOffset=0&commonPageLimit=1000&sortFields=%7B%7D`)
                if (projectId === undefined) {
                    r.data.detail.forEach(e => {
                        e.name = this.accounts[e.user_name].name
                        res.data[e.proc_name].list.push(e)
                    })
                } else {
                    r.data.detail.forEach(e => {
                        if (e.pro_id === projectId) {
                            e.name = this.accounts[e.user_name].name
                            res.data[e.proc_name].list.push(e)
                        }
                    })
                }
                res.data['标注'].list.sort((a, b) => b.accuracy_normal - a.accuracy_normal)
                res.data['质检'].list.sort((a, b) => b.accuracy_normal - a.accuracy_normal)
                return res
            },
            async showWorkload(date, person, projectId) {
                let {data} = await this.getWorkload(date, person, projectId)
                let keys = Object.keys(data)
                this.$anyInfo.find('mdui-collapse.user-list').html(`<h2>${projectId === undefined ? '所有项目的工作量:' : `${projectId} 当前项目的工作量:`}</h2>`)[0].value = ['标注', '质检']
                keys.forEach(e => {
                    let o = $(`<mdui-collapse-item value="${e}"><mdui-list-item slot="header">${e}(${data[e].list.length})</mdui-list-item></mdui-collapse-item>`)
                    data[e].list.forEach(i => {
                        o.append(`<div style="margin-left: 2.5rem"><mdui-list-item>${i.name} - ${i.subfirst_img} - ${i.subfirst_polyline}</mdui-list-item></div>`)
                    })
                    this.$anyInfo.find('mdui-collapse.user-list').append(o)
                })
                this.$anyInfo[0].open = true
            },
            async showQuality(date, person, projectId) {
                let {data} = await this.getQuality(date, person, projectId)
                let keys = Object.keys(data)
                this.$anyInfo.find('mdui-collapse.user-list').html(`<h2>${projectId === undefined ? '所有项目的质量:' : `${projectId} 当前项目的质量:`}</h2>`)[0].value = ['标注', '质检']
                keys.forEach(e => {
                    let o = $(`<mdui-collapse-item value="${e}"><mdui-list-item slot="header">${e}(${data[e].list.length})</mdui-list-item></mdui-collapse-item>`)
                    data[e].list.forEach(i => {
                        o.append(`<div style="margin-left: 2.5rem"><mdui-list-item>${i.name} - ${i.pro_id} - ${i.accuracy_normal}</mdui-list-item></div>`)
                    })
                    this.$anyInfo.find('mdui-collapse.user-list').append(o)
                })
                this.$anyInfo[0].open = true
            },
            /**
             * showPersonScreen 显示人员筛选结果
             * @param {String} data_raw_id
             * @returns {Object} 获取结果
            */
            async showPersonScreen(data_raw_id) {
                let d = await this.getProjectDataList()
                let id = d.data.data_raw_id[data_raw_id].id
                let {data} = await this.getJobDataList(id)
                let keys = Object.keys(data.user)
                keys.forEach(e => {
                    let ids = Object.keys(data.user[e].job_id)
                    let o = $(`<mdui-collapse-item value="${e}"><mdui-list-item slot="header">${e}(${ids.length})</mdui-list-item></mdui-collapse-item>`)
                    ids.forEach(i => {
                        let d = data.user[e].job_id[i]
                        o.append(`<a href="${d.browseUrl}" target="_blank"><div style="margin-left: 2.5rem"><mdui-list-item>${d.job_id} - ${d.update_time}</mdui-list-item></div></a>`)
                    })
                    this.$anyInfo.find('mdui-collapse.user-list').append(o)
                })
                this.$anyInfo[0].open = true
            }
        },
        loadExec() {
            if (localStorage.accounts === undefined) 
                localStorage.accounts = JSON.stringify(this.accounts)
            else 
                this.accounts = JSON.parse(localStorage.accounts)
            if (localStorage.users === undefined) 
                localStorage.users = JSON.stringify(this.users)
            else 
                this.users = JSON.parse(localStorage.users)
            this.urlParams = this.getUrlParams(1)
            $(document.body).append(this.$personnelScreening, this.$anyInfo, this.$lockReceive, this.$usersSelect)
            const timer = setInterval(() => {
                if ($('.label-header .header-menu .name').text() !== '') {
                    this.accountsInit(this.accounts)
                    clearInterval(timer)
                }
            }, 50)
            this.usersInit(this.users)
            $(document).on('keydown', async e => {
                if (e.code === 'Backquote') 
                    this.$anyInfo[0].open = !this.$anyInfo[0].open
                else if (e.ctrlKey && e.code === 'Enter') {
                    let e = $('.horizon-detail .common-container-descriptions .ant-descriptions-item-container .ant-descriptions-item-content .first-item')
                    if (e.length === 1) {
                        mdui.snackbar({message: '🔔全局查询中...'})
                        await this.lockReceive({receiveManner: 'global', projectId: this.urlParams.project, stageId: this.urlParams.stage_id, target: '_blank'})
                    } else if (e.length > 1) {
                        mdui.snackbar({message: '🔔局部查询中...'})
                        let data_raw_id = e[1].textContent.replace(/#[0-9].?/, '')
                        await this.lockReceive({receiveManner: 'scope', projectId: this.urlParams.project, stageId: this.urlParams.stage_id, dataId: data_raw_id, idType: 'raw', target: '_blank', lStatus: true})
                    } else 
                        mdui.snackbar({message: `❌禁止在此处筛选`})
                } else if (e.code === 'Digit1' || e.code === 'Numpad1') {
                    let e = $('.horizon-detail .common-container-descriptions .ant-descriptions-item-container .ant-descriptions-item-content .first-item')[0]
                    if (e === undefined) 
                        mdui.snackbar({message: `❌此处无法查询`})
                    else {
                        mdui.snackbar({message: '🔔工作量查询中...'})
                        this.showWorkload(this.formatCurrentDate(), Object.keys(this.accounts), e.textContent)
                    }
                } else if (e.code === 'Digit2' || e.code === 'Numpad2') {
                    mdui.snackbar({message: '🔔工作量查询中...'})
                    this.showWorkload(this.formatCurrentDate(), Object.keys(this.accounts))
                } else if (e.code === 'Digit3' || e.code === 'Numpad3') {
                    let e = $('.horizon-detail .common-container-descriptions .ant-descriptions-item-container .ant-descriptions-item-content .first-item')[0]
                    if (e === undefined) 
                        mdui.snackbar({message: `❌此处无法查询`})
                    else {
                        mdui.snackbar({message: '🔔质量查询中...'})
                        this.showQuality(this.formatCurrentDate(), Object.keys(this.accounts), e.textContent)
                    }
                } else if (e.code === 'Digit4' || e.code === 'Numpad4') {
                    mdui.snackbar({message: '🔔质量查询中...'})
                    this.showQuality(this.formatCurrentDate(), Object.keys(this.accounts))
                }
            })
            this.$lockReceive.on('click', async () => {
                let e = $('.horizon-detail .common-container-descriptions .ant-descriptions-item-container .ant-descriptions-item-content .first-item')
                if (e.length === 1) {
                    mdui.snackbar({message: '🔔全局查询中...'})
                    await this.lockReceive({receiveManner: 'global', projectId: this.urlParams.project, stageId: this.urlParams.stage_id, target: '_blank'})
                } else if (e.length > 1) {
                    mdui.snackbar({message: '🔔局部查询中...'})
                    let data_raw_id = e[1].textContent.replace(/#[0-9].?/, '')
                    await this.lockReceive({receiveManner: 'scope', projectId: this.urlParams.project, stageId: this.urlParams.stage_id, dataId: data_raw_id, idType: 'raw', target: '_blank', lStatus: true})
                } else 
                    mdui.snackbar({message: `❌禁止在此处筛选`})
            })
            this.$personnelScreening.on('click', async () => {
                let e = $('.horizon-detail .common-container-descriptions .ant-descriptions-item-container .ant-descriptions-item-content .first-item')[1]
                if (e === undefined) {
                    mdui.snackbar({message: `❌禁止在此处筛选`})
                } else {
                    let data_raw_id = e.textContent.replace(/#[0-9].?/, '')
                    this.$anyInfo.find('mdui-collapse.user-list').html(`<h2>${data_raw_id}</h2>`)
                    mdui.snackbar({message: '🔔查询中...'})
                    await this.showPersonScreen(data_raw_id)
                }
            })
            this.$personnelScreening.on('contextmenu', e => {
                this.$anyInfo[0].open = !this.$anyInfo[0].open
                e.preventDefault()
            })
            this.$lockReceive.on('contextmenu', e => {
                this.$usersSelect[0].open = !this.$usersSelect[0].open
                e.preventDefault()
            })
        }
    }

    const routeAnnotationTool = {
        routes: '*://anno.horizon.ai/annotation-tool/*',
        style: `.property-main .property-header .property-header-close{display: none}.tool-main .tool-box .tool-box-left{color: aliceblue}.tool-main .tool-box .tool-box-center{z-index:9}`,
        extend: {
            $anyInfo: $(`<mdui-dialog class="any-info" close-on-esc close-on-overlay-click></mdui-dialog>`),
            hMaps: {
                '普通车道': '非机动车道',
                '非机动车道': '机非混合车道',
                '机非混合车道': '双向车道',
                '双向车道': '公交车道',
                '公交车道': '潮汐车道',
                '潮汐车道': '普通车道'
            },
            jMaps: {
                '普通车道': '左转待转车道',
                '左转待转车道': '右转待转车道',
                '右转待转车道': '普通车道'
            },
            getFeatureLI() {
                const maps = {}
                const items = $('.layer-main .element-layer .element-layer-item-inactive')
                for (let i = 0; i < items.length; i++) {
                    let item = $(items[i])
                    let name = item.find('span.element-layer-item-label span.element-layer-item-name').text()
                    let icon = item.find('span.element-layer-item-operation span.element-item-display-icon')
                    maps[name] = { item, icon }
                }
                return maps
            },
            hiddenFeature(features, featureLI) {
                features.forEach(e => {
                    if (featureLI[e] !== undefined) {
                        featureLI[e].icon.click()
                    }
                })
            },
            dataLodingComtated(callback) {
                const timer = setInterval(() => {
                    if ($('.layer-main .element-main-item .element--layer-item').length > 0) {
                        this.featureLI = this.getFeatureLI()
                        callback(this.featureLI)
                        clearInterval(timer)
                    }
                }, 2000)
            },
            getProps(prop) {
                let $props = $('.property-main .ant-radio-group .ant-row .ant-col label.ant-radio-wrapper')
                let res = {inProp: ''}
                for (let i = 0; i < $props.length; i++) {
                    let e = $($props[i])
                    if (e.hasClass('ant-radio-wrapper-checked') === true) {
                        res.inProp = e.text()
                    }
                    res[e.text()] = e
                }
                return prop === undefined ? res : res[prop]
            },
            async mandatorySubmit(action = 'accept', lockReceive = false) {
                let s = await $.ajax({
                    type: "POST",
                    url: `https://anno.horizon.ai/api/job/v2/workflow/dispatch`,
                    dataType: 'json',
                    contentType: 'application/json',
                    data: JSON.stringify({
                        "action": action,
                        "project_id": Number(this.urlParams.project_id),
                        "batch": [
                            {
                                "batch_id": Number(this.urlParams.batch_id),
                                "data_ver_id": Number(this.urlParams.data_ver_id)
                            }
                        ]
                    }),
                    xhrFields: {
                        withCredentials: true
                    }
                })
                if (s.error !== 0) {
                    mdui.snackbar({message: `❌${s.error} - ${s.msg}`})
                } else if (s.error === 0 && s.msg === 'success') {
                    mdui.snackbar({message: `✅提交成功`})
                    if (lockReceive) {
                        this.lockReceive({
                            receiveManner: 'scope',
                            dataId: this.urlParams.data_ver_id,
                            idType: 'ver',
                            projectId: this.urlParams.project_id,
                            stageId: this.urlParams.stage_id,
                            target: '_self',
                            lStatus: true
                        })
                    } else {
                        setTimeout(() => {
                            window.close()
                        }, 800)
                    }
                }
            }
        },
        loadExec() {
            this.urlParams = this.getUrlParams(3)
            $(document.body).append(this.$anyInfo)
            $.getJSON(`https://anno.horizon.ai/api/job/v2/workflow/projects/${this.urlParams.project_id}/jobs/${this.urlParams.job_id}/op-log?page=1`, ({data}) => {
                this.$anyInfo.html(`<mdui-list class="task-info"><h2>数据流转记录</h2></mdui-list>`)    
                let res = {}
                data.log.forEach(e => {
                    this.$anyInfo.find('.task-info').append(`<mdui-list-item>${e.user.by_name} ${e.stage_name} ${e.status_cn} - ${e.create_time.replace(/(2024-|:[0-9]{1,2}$)/g, '')}</mdui-list-item>`)
                    if (res[e.stage_name] === undefined) {
                        res[e.stage_name] = e
                    }
                })
                res['标注'] = res['标注'] === undefined ? {status_cn: '🧂', create_time: '', user: {by_name: '无'}} : res['标注']
                res['质检'] = res['质检'] === undefined ? {status_cn: '🧂', create_time: '', user: {by_name: '无'}} : res['质检']
                res['验收'] = res['验收'] === undefined ? {status_cn: '🧂', create_time: '', user: {by_name: '无'}} : res['验收']
                $('.tool-box .tool-box-left').append(`<p style="position: fixed;left:192px">标注: ${res['标注'].user.by_name}<span style="font-size: 12px;color: pink">(${res['标注'].status_cn} ${res['标注'].create_time.replace(/(2024-|:[0-9]{1,2}$)/g, '')})</span> <b style="color: red"> ❤ </b> 质检: ${res['质检'].user.by_name}<span style="font-size: 12px;color: pink">(${res['质检'].status_cn} ${res['质检'].create_time.replace(/(2024-|:[0-9]{1,2}$)/g, '')})</span> <b style="color: red"> ❤ </b> 验收: ${res['验收'].user.by_name}<span style="font-size: 12px;color: pink">(${res['验收'].status_cn} ${res['验收'].create_time.replace(/(2024-|:[0-9]{1,2}$)/g, '')})</span></p>`)
                $('.view-center .bottom-icon .icon-dianjifuzhitufuxinxi').on('contextmenu', e => {
                    this.$anyInfo[0].open = !this.$anyInfo[0].open
                })
            })
            const timer = setInterval(() => {
                const c = $('.log-title .title-list .title-name')[1]
                if (c !== undefined) {
                    $('.log-title .title-list .title-name')[1].click()
                    clearInterval(timer)
                }
            }, 100)
            this.dataLodingComtated(f => {
                try {
                    clearInterval(timer)
                } catch (err) {
                    console.error(err)
                }
                $(document).on('keydown', async e => {
                    if (e.code === 'KeyQ') {
                        if (f['中心线'].item.hasClass('element-layer-item-active') === false) {
                            f['中心线'].item.click()
                        }
                        if (e.altKey) {
                            const event = new KeyboardEvent('keydown', { bubbles: true, cancelable: true, key: 'N' })
                            document.dispatchEvent(event)
                        } else {
                            const event = new KeyboardEvent('keydown', { bubbles: true, cancelable: true, key: 'L' })
                            document.dispatchEvent(event)
                        }
                    } else if (e.code === 'KeyZ') {
                        if (f['虚拟中心线'].item.hasClass('element-layer-item-active') === false) {
                            f['虚拟中心线'].item.click()
                        }
                        const event = new KeyboardEvent('keydown', { bubbles: true, cancelable: true, key: 'N' })
                        document.dispatchEvent(event)
                    } else if (e.code === 'KeyA') {
                        const event = new KeyboardEvent('keydown', { bubbles: true, cancelable: true, key: '7' })
                        document.dispatchEvent(event)
                    } else if (e.code === 'KeyW') {
                        const event = new KeyboardEvent('keydown', { bubbles: true, cancelable: true, key: 'O' })
                        document.dispatchEvent(event)
                    } else if (e.code === 'KeyX') {
                        const event = new KeyboardEvent('keydown', { bubbles: true, cancelable: true, key: 'Backspace' })
                        document.dispatchEvent(event)
                    } else if (e.code === 'KeyD') {
                        let event = new MouseEvent('mousedown')
                        $('section.element-tools-main .tool-button-main span.icon-Vector-4').parent()[0].dispatchEvent(event)
                    } else if (e.code === 'KeyS') {
                        const event = new KeyboardEvent('keydown', { bubbles: true, cancelable: true, key: '0' })
                        document.dispatchEvent(event)
                    } else if (e.code === 'KeyR') {
                        const event = new KeyboardEvent('keydown', { bubbles: true, cancelable: true, key: 'S' })
                        document.dispatchEvent(event)
                    } else if (e.code === 'KeyF') {
                        const event = new KeyboardEvent('keydown', { bubbles: true, cancelable: true, key: 'M' })
                        document.dispatchEvent(event)
                    } else if (e.code === 'KeyH') {
                        if ($('.property-main .ant-select-single.ant-select-sm:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-item').text() === '中心线') {
                            let props = this.getProps()
                            let swProp = this.hMaps[props.inProp] === undefined ? this.hMaps['普通车道'] : this.hMaps[props.inProp]
                            mdui.snackbar({message: `🔔${swProp}`})
                            props[swProp].click()
                        }
                    } else if (e.code === 'KeyJ') {
                        if ($('.property-main .ant-select-single.ant-select-sm:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-item').text() === '中心线') {
                            let props = this.getProps()
                            let swProp = this.jMaps[props.inProp] === undefined ? this.jMaps['普通车道'] : this.jMaps[props.inProp]
                            mdui.snackbar({message: `🔔${swProp}`})
                            props[swProp].click()
                        }
                    } else if (e.code === 'Period') {
                        if ($('#viewport-container .frame-viewer-container').css('display') !== 'none') {
                            $('.frame-viewer-container .frame-viewer-main .frame-viewer-title .frame-viewer-title-operation .iconfont.icon-xiayijiedian1').click()
                        }
                    }  else if (e.code === 'Comma') {
                        if ($('#viewport-container .frame-viewer-container').css('display') !== 'none') {
                            $('.frame-viewer-container .frame-viewer-main .frame-viewer-title .frame-viewer-title-operation .iconfont.icon-shangyijiedian').click()
                        }
                    } else if (e.code === 'Digit3' || e.code === 'Numpad3') {
                        let event = new MouseEvent('mousedown')
                        $('section.element-tools-main .tool-button-main span.icon-Vector-1').parent()[0].dispatchEvent(event)
                    } else if (e.ctrlKey && e.code === 'Enter') {
                        if (this.urlParams.stage_type === 'review') {
                            if ($('.ant-message').text().indexOf('保存成功') !== -1) {
                                console.log('save')
                                await this.mandatorySubmit('accept', true)
                                return
                            } else if ($('.editor-main .toolbar-area .toolbar-preservation-button').attr('disabled') === undefined) 
                                $('.editor-main .toolbar-area .toolbar-preservation-button').click()
                            else {
                                mdui.snackbar({message: '❌非法操作'})
                                return
                            }
                            const timer = setInterval(async () => {
                                if ($('.ant-message').text().indexOf('保存成功') !== -1) {
                                    await this.mandatorySubmit('accept', true)
                                    clearInterval(timer)
                                } else {
                                    console.log('WAIT')
                                }
                            }, 100)
                        } else if (this.urlParams.stage_type === 'annotate') {
                            if ($('.logic-quality-main .ignore-div .ignore-checkbox').hasClass('ant-checkbox-wrapper-checked') === false) 
                                $('.logic-quality-main .ignore-div .ignore-checkbox').click()
                            $('.editor-main .toolbar-area .toolbar-submit-button').click()
                            setTimeout(() => {
                                $('.ant-modal-footer .ant-btn')[1].click()
                            }, 140)
                        }
                    } else if (e.altKey && e.code === 'Enter') {
                        if (this.urlParams.stage_type === 'review') {
                            if ($('.ant-message').text().indexOf('保存成功') !== -1) {
                                console.log('save')
                                await this.mandatorySubmit('accept', false)
                                return
                            } else if ($('.editor-main .toolbar-area .toolbar-preservation-button').attr('disabled') === undefined) 
                                $('.editor-main .toolbar-area .toolbar-preservation-button').click()
                            else {
                                mdui.snackbar({message: '❌非法操作'})
                                return
                            }
                            const timer = setInterval(async () => {
                                if ($('.ant-message').text().indexOf('保存成功') !== -1) {
                                    await this.mandatorySubmit('accept', false)
                                    clearInterval(timer)
                                } else 
                                    console.log('WAIT')
                            }, 100)
                        } else if (this.urlParams.stage_type === 'annotate') {
                            if ($('.logic-quality-main .ignore-div .ignore-checkbox').hasClass('ant-checkbox-wrapper-checked') === false) 
                                $('.logic-quality-main .ignore-div .ignore-checkbox').click()
                            $('.editor-main .toolbar-area .toolbar-submit-button').click()
                            setTimeout(() => {
                                $('.ant-modal-body input[type=checkbox]').click()
                                $('.ant-modal-footer .ant-btn')[1].click()
                            }, 140)
                        }
                    } else if (e.ctrlKey && e.code === 'Backspace') {
                        if ($('.ant-message').text().indexOf('保存成功') !== -1) {
                            console.log('save')
                            await this.mandatorySubmit('reject', true)
                            return
                        } else if ($('.editor-main .toolbar-area .toolbar-preservation-button').attr('disabled') === undefined) 
                            $('.editor-main .toolbar-area .toolbar-preservation-button').click()
                        else {
                            mdui.snackbar({message: '❌非法操作'})
                            return
                        }
                        const timer = setInterval(async () => {
                            if ($('.ant-message').text().indexOf('保存成功') !== -1) {
                                await this.mandatorySubmit('reject', true)
                                clearInterval(timer)
                            } else {
                                console.log('WAIT')
                            }
                        }, 100)
                    } else if (e.altKey && e.code === 'Backspace') {
                        if ($('.ant-message').text().indexOf('保存成功') !== -1) {
                            console.log('save')
                            await this.mandatorySubmit('reject', false)
                            return
                        } else if ($('.editor-main .toolbar-area .toolbar-preservation-button').attr('disabled') === undefined) 
                            $('.editor-main .toolbar-area .toolbar-preservation-button').click()
                        else {
                            mdui.snackbar({message: '❌非法操作'})
                            return
                        }
                        const timer = setInterval(async () => {
                            if ($('.ant-message').text().indexOf('保存成功') !== -1) {
                                await this.mandatorySubmit('reject', false)
                                clearInterval(timer)
                            } else 
                                console.log('WAIT')
                        }, 100)
                    } else if (e.code === 'Tab') 
                        console.log('Tab')
                })
                $(document).on('mousedown', e => {
                    if (e.button === 2) {
                        this.pageX = e.pageX
                        this.pageY = e.pageY
                    } else if (e.button === 1) {
                        const event = new KeyboardEvent('keydown', { bubbles: true, cancelable: true, key: 'Backspace' })
                        document.dispatchEvent(event)
                    }
                })
                $(document).on('mouseup', e => {
                    if (this.pageX === e.pageX && this.pageY === e.pageY && e.button === 2) {
                        if ($('#viewport-container .frame-viewer-container').css('display') !== 'none') {
                            if ($('.overview-frame-screen .overview-frame-screen-main .overview-frame-screen-btn .iconfont').length > 0) {
                                $('.overview-frame-screen .overview-frame-screen-main .overview-frame-screen-btn .iconfont').click()
                            } else {
                                $('.frame-viewer-container .frame-viewer-main .frame-viewer-title .icon-guanbi').click()
                            }
                        }
                    }
                })
                $('canvas#mainViewCanvas').on('dblclick', e => {
                    let type = $('.property-main .ant-select-single.ant-select-sm:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-item').text()
                    if (type === '中心线' || type === '虚拟中心线') {
                        let gid = $('.property-main .ant-input')[0].value
                        let prop = this.getProps().inProp
                        mdui.snackbar({message: `🔔${gid + ' ' + prop}`})
                        this.copyToClipboard(gid)
                    }
                })
                const timer = setInterval(() => {
                    const c = $('.pointclouds-main .pointcloud-parsing-tree .parsing-title')
                    if (c.length > 0) {
                        c.find('.parsing-operation span.operation-icon')[0].click()
                        clearInterval(timer)
                    }
                }, 2000)
                this.hiddenFeature(['交通灯-灯泡', '交通灯-灯箱', '标识牌', 'Ignore_Line'], this.featureLI)
            })
        }
    }

    function urlMatch(pattern, url) {
        pattern = pattern.replace(/\*/g, '.*?');
        pattern = '^' + pattern + '$';
        const regex = new RegExp(pattern);
        return regex.test(url);
    }

    function extendWebPage(options) {
        let target = {}
        for (let i = 0; i < options.length; i++) {
            let { routes, style, startExec, bodyExec, loadExec, extend } = options[i]
            if (typeof routes === 'string')
                routes = new Array(routes)
            for (let i = 0; i < routes.length; i++) {
                if (urlMatch(routes[i], location.href)) {
                    Object.assign(target, extend instanceof Object === false ? {} : extend)
                    $(document.head)
                        .append(`<style>${style}</style>`)
                    if (typeof startExec === 'function')
                        startExec.call(target)
                    if (typeof bodyExec === 'function') {
                        bodyExec = bodyExec.bind(target)
                        $(document)
                            .on('DOMContentLoaded', e.bodyExec)
                    }
                    if (typeof loadExec === 'function') {
                        loadExec = loadExec.bind(target)
                        $(window)
                            .on('load', loadExec)
                    }
                }
            }
        }
        return new Proxy(target, {
            get(target, key) {
                return target[key]
            },
            set(target, key, value) {
                target[key] = value
            }
        })
    }

    global.extendWebPage = extendWebPage([routeGlobal, routeAnnotationTool, routeDataLabel])
})(window)
