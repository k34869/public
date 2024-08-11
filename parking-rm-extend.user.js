// ==UserScript==
// @name         parking-rm-Extend
// @version      1.0.0
// @description  泊车RM 扩展程序
// @author       Timeic
// @license      MIT
// @run-at       document-body
// @match        *://tjv1-gawain-label.evad.mioffice.cn/appen/mashup/*
// @require      https://cdn.timeic.top/anno-horizon-extend-bundle.js
// ==/UserScript==

(function (gloabl) {
    const routeGlobal = {
        routes: '*',
        style: `*{font-family:霞鹜臻楷,Microsoft YaHei UI,Microsoft YaHei,sans-serif !important}:root{--mdui-breakpoint-xs:0px;--mdui-breakpoint-sm:600px;--mdui-breakpoint-md:840px;--mdui-breakpoint-lg:1080px;--mdui-breakpoint-xl:1440px;--mdui-breakpoint-xxl:1920px}:root{--mdui-color-primary-light:103,80,164;--mdui-color-primary-container-light:234,221,255;--mdui-color-on-primary-light:255,255,255;--mdui-color-on-primary-container-light:33,0,94;--mdui-color-inverse-primary-light:208,188,255;--mdui-color-secondary-light:98,91,113;--mdui-color-secondary-container-light:232,222,248;--mdui-color-on-secondary-light:255,255,255;--mdui-color-on-secondary-container-light:30,25,43;--mdui-color-tertiary-light:125,82,96;--mdui-color-tertiary-container-light:255,216,228;--mdui-color-on-tertiary-light:255,255,255;--mdui-color-on-tertiary-container-light:55,11,30;--mdui-color-surface-light:254,247,255;--mdui-color-surface-dim-light:222,216,225;--mdui-color-surface-bright-light:254,247,255;--mdui-color-surface-container-lowest-light:255,255,255;--mdui-color-surface-container-low-light:247,242,250;--mdui-color-surface-container-light:243,237,247;--mdui-color-surface-container-high-light:236,230,240;--mdui-color-surface-container-highest-light:230,224,233;--mdui-color-surface-variant-light:231,224,236;--mdui-color-on-surface-light:28,27,31;--mdui-color-on-surface-variant-light:73,69,78;--mdui-color-inverse-surface-light:49,48,51;--mdui-color-inverse-on-surface-light:244,239,244;--mdui-color-background-light:254,247,255;--mdui-color-on-background-light:28,27,31;--mdui-color-error-light:179,38,30;--mdui-color-error-container-light:249,222,220;--mdui-color-on-error-light:255,255,255;--mdui-color-on-error-container-light:65,14,11;--mdui-color-outline-light:121,116,126;--mdui-color-outline-variant-light:196,199,197;--mdui-color-shadow-light:0,0,0;--mdui-color-surface-tint-color-light:103,80,164;--mdui-color-scrim-light:0,0,0;--mdui-color-primary-dark:208,188,255;--mdui-color-primary-container-dark:79,55,139;--mdui-color-on-primary-dark:55,30,115;--mdui-color-on-primary-container-dark:234,221,255;--mdui-color-inverse-primary-dark:103,80,164;--mdui-color-secondary-dark:204,194,220;--mdui-color-secondary-container-dark:74,68,88;--mdui-color-on-secondary-dark:51,45,65;--mdui-color-on-secondary-container-dark:232,222,248;--mdui-color-tertiary-dark:239,184,200;--mdui-color-tertiary-container-dark:99,59,72;--mdui-color-on-tertiary-dark:73,37,50;--mdui-color-on-tertiary-container-dark:255,216,228;--mdui-color-surface-dark:20,18,24;--mdui-color-surface-dim-dark:20,18,24;--mdui-color-surface-bright-dark:59,56,62;--mdui-color-surface-container-lowest-dark:15,13,19;--mdui-color-surface-container-low-dark:29,27,32;--mdui-color-surface-container-dark:33,31,38;--mdui-color-surface-container-high-dark:43,41,48;--mdui-color-surface-container-highest-dark:54,52,59;--mdui-color-surface-variant-dark:73,69,79;--mdui-color-on-surface-dark:230,225,229;--mdui-color-on-surface-variant-dark:202,196,208;--mdui-color-inverse-surface-dark:230,225,229;--mdui-color-inverse-on-surface-dark:49,48,51;--mdui-color-background-dark:20,18,24;--mdui-color-on-background-dark:230,225,229;--mdui-color-error-dark:242,184,181;--mdui-color-error-container-dark:140,29,24;--mdui-color-on-error-dark:96,20,16;--mdui-color-on-error-container-dark:249,222,220;--mdui-color-outline-dark:147,143,153;--mdui-color-outline-variant-dark:68,71,70;--mdui-color-shadow-dark:0,0,0;--mdui-color-surface-tint-color-dark:208,188,255;--mdui-color-scrim-dark:0,0,0;font-size:16px}.mdui-theme-light,:root{color-scheme:light;--mdui-color-primary:var(--mdui-color-primary-light);--mdui-color-primary-container:var(--mdui-color-primary-container-light);--mdui-color-on-primary:var(--mdui-color-on-primary-light);--mdui-color-on-primary-container:var(--mdui-color-on-primary-container-light);--mdui-color-inverse-primary:var(--mdui-color-inverse-primary-light);--mdui-color-secondary:var(--mdui-color-secondary-light);--mdui-color-secondary-container:var(--mdui-color-secondary-container-light);--mdui-color-on-secondary:var(--mdui-color-on-secondary-light);--mdui-color-on-secondary-container:var(--mdui-color-on-secondary-container-light);--mdui-color-tertiary:var(--mdui-color-tertiary-light);--mdui-color-tertiary-container:var(--mdui-color-tertiary-container-light);--mdui-color-on-tertiary:var(--mdui-color-on-tertiary-light);--mdui-color-on-tertiary-container:var(--mdui-color-on-tertiary-container-light);--mdui-color-surface:var(--mdui-color-surface-light);--mdui-color-surface-dim:var(--mdui-color-surface-dim-light);--mdui-color-surface-bright:var(--mdui-color-surface-bright-light);--mdui-color-surface-container-lowest:var(--mdui-color-surface-container-lowest-light);--mdui-color-surface-container-low:var(--mdui-color-surface-container-low-light);--mdui-color-surface-container:var(--mdui-color-surface-container-light);--mdui-color-surface-container-high:var(--mdui-color-surface-container-high-light);--mdui-color-surface-container-highest:var(--mdui-color-surface-container-highest-light);--mdui-color-surface-variant:var(--mdui-color-surface-variant-light);--mdui-color-on-surface:var(--mdui-color-on-surface-light);--mdui-color-on-surface-variant:var(--mdui-color-on-surface-variant-light);--mdui-color-inverse-surface:var(--mdui-color-inverse-surface-light);--mdui-color-inverse-on-surface:var(--mdui-color-inverse-on-surface-light);--mdui-color-background:var(--mdui-color-background-light);--mdui-color-on-background:var(--mdui-color-on-background-light);--mdui-color-error:var(--mdui-color-error-light);--mdui-color-error-container:var(--mdui-color-error-container-light);--mdui-color-on-error:var(--mdui-color-on-error-light);--mdui-color-on-error-container:var(--mdui-color-on-error-container-light);--mdui-color-outline:var(--mdui-color-outline-light);--mdui-color-outline-variant:var(--mdui-color-outline-variant-light);--mdui-color-shadow:var(--mdui-color-shadow-light);--mdui-color-surface-tint-color:var(--mdui-color-surface-tint-color-light);--mdui-color-scrim:var(--mdui-color-scrim-light);color:rgb(var(--mdui-color-on-background));background-color:rgb(var(--mdui-color-background))}.mdui-theme-dark{color-scheme:dark;--mdui-color-primary:var(--mdui-color-primary-dark);--mdui-color-primary-container:var(--mdui-color-primary-container-dark);--mdui-color-on-primary:var(--mdui-color-on-primary-dark);--mdui-color-on-primary-container:var(--mdui-color-on-primary-container-dark);--mdui-color-inverse-primary:var(--mdui-color-inverse-primary-dark);--mdui-color-secondary:var(--mdui-color-secondary-dark);--mdui-color-secondary-container:var(--mdui-color-secondary-container-dark);--mdui-color-on-secondary:var(--mdui-color-on-secondary-dark);--mdui-color-on-secondary-container:var(--mdui-color-on-secondary-container-dark);--mdui-color-tertiary:var(--mdui-color-tertiary-dark);--mdui-color-tertiary-container:var(--mdui-color-tertiary-container-dark);--mdui-color-on-tertiary:var(--mdui-color-on-tertiary-dark);--mdui-color-on-tertiary-container:var(--mdui-color-on-tertiary-container-dark);--mdui-color-surface:var(--mdui-color-surface-dark);--mdui-color-surface-dim:var(--mdui-color-surface-dim-dark);--mdui-color-surface-bright:var(--mdui-color-surface-bright-dark);--mdui-color-surface-container-lowest:var(--mdui-color-surface-container-lowest-dark);--mdui-color-surface-container-low:var(--mdui-color-surface-container-low-dark);--mdui-color-surface-container:var(--mdui-color-surface-container-dark);--mdui-color-surface-container-high:var(--mdui-color-surface-container-high-dark);--mdui-color-surface-container-highest:var(--mdui-color-surface-container-highest-dark);--mdui-color-surface-variant:var(--mdui-color-surface-variant-dark);--mdui-color-on-surface:var(--mdui-color-on-surface-dark);--mdui-color-on-surface-variant:var(--mdui-color-on-surface-variant-dark);--mdui-color-inverse-surface:var(--mdui-color-inverse-surface-dark);--mdui-color-inverse-on-surface:var(--mdui-color-inverse-on-surface-dark);--mdui-color-background:var(--mdui-color-background-dark);--mdui-color-on-background:var(--mdui-color-on-background-dark);--mdui-color-error:var(--mdui-color-error-dark);--mdui-color-error-container:var(--mdui-color-error-container-dark);--mdui-color-on-error:var(--mdui-color-on-error-dark);--mdui-color-on-error-container:var(--mdui-color-on-error-container-dark);--mdui-color-outline:var(--mdui-color-outline-dark);--mdui-color-outline-variant:var(--mdui-color-outline-variant-dark);--mdui-color-shadow:var(--mdui-color-shadow-dark);--mdui-color-surface-tint-color:var(--mdui-color-surface-tint-color-dark);--mdui-color-scrim:var(--mdui-color-scrim-dark);color:rgb(var(--mdui-color-on-background));background-color:rgb(var(--mdui-color-background))}@media (prefers-color-scheme:dark){.mdui-theme-auto{color-scheme:dark;--mdui-color-primary:var(--mdui-color-primary-dark);--mdui-color-primary-container:var(--mdui-color-primary-container-dark);--mdui-color-on-primary:var(--mdui-color-on-primary-dark);--mdui-color-on-primary-container:var(--mdui-color-on-primary-container-dark);--mdui-color-inverse-primary:var(--mdui-color-inverse-primary-dark);--mdui-color-secondary:var(--mdui-color-secondary-dark);--mdui-color-secondary-container:var(--mdui-color-secondary-container-dark);--mdui-color-on-secondary:var(--mdui-color-on-secondary-dark);--mdui-color-on-secondary-container:var(--mdui-color-on-secondary-container-dark);--mdui-color-tertiary:var(--mdui-color-tertiary-dark);--mdui-color-tertiary-container:var(--mdui-color-tertiary-container-dark);--mdui-color-on-tertiary:var(--mdui-color-on-tertiary-dark);--mdui-color-on-tertiary-container:var(--mdui-color-on-tertiary-container-dark);--mdui-color-surface:var(--mdui-color-surface-dark);--mdui-color-surface-dim:var(--mdui-color-surface-dim-dark);--mdui-color-surface-bright:var(--mdui-color-surface-bright-dark);--mdui-color-surface-container-lowest:var(--mdui-color-surface-container-lowest-dark);--mdui-color-surface-container-low:var(--mdui-color-surface-container-low-dark);--mdui-color-surface-container:var(--mdui-color-surface-container-dark);--mdui-color-surface-container-high:var(--mdui-color-surface-container-high-dark);--mdui-color-surface-container-highest:var(--mdui-color-surface-container-highest-dark);--mdui-color-surface-variant:var(--mdui-color-surface-variant-dark);--mdui-color-on-surface:var(--mdui-color-on-surface-dark);--mdui-color-on-surface-variant:var(--mdui-color-on-surface-variant-dark);--mdui-color-inverse-surface:var(--mdui-color-inverse-surface-dark);--mdui-color-inverse-on-surface:var(--mdui-color-inverse-on-surface-dark);--mdui-color-background:var(--mdui-color-background-dark);--mdui-color-on-background:var(--mdui-color-on-background-dark);--mdui-color-error:var(--mdui-color-error-dark);--mdui-color-error-container:var(--mdui-color-error-container-dark);--mdui-color-on-error:var(--mdui-color-on-error-dark);--mdui-color-on-error-container:var(--mdui-color-on-error-container-dark);--mdui-color-outline:var(--mdui-color-outline-dark);--mdui-color-outline-variant:var(--mdui-color-outline-variant-dark);--mdui-color-shadow:var(--mdui-color-shadow-dark);--mdui-color-surface-tint-color:var(--mdui-color-surface-tint-color-dark);--mdui-color-scrim:var(--mdui-color-scrim-dark);color:rgb(var(--mdui-color-on-background));background-color:rgb(var(--mdui-color-background))}}:root{--mdui-elevation-level0:none;--mdui-elevation-level1:0 0.5px 1.5px 0 rgba(var(--mdui-color-shadow), 19%),0 0 1px 0 rgba(var(--mdui-color-shadow), 3.9%);--mdui-elevation-level2:0 0.85px 3px 0 rgba(var(--mdui-color-shadow), 19%),0 0.25px 1px 0 rgba(var(--mdui-color-shadow), 3.9%);--mdui-elevation-level3:0 1.25px 5px 0 rgba(var(--mdui-color-shadow), 19%),0 0.3333px 1.5px 0 rgba(var(--mdui-color-shadow), 3.9%);--mdui-elevation-level4:0 1.85px 6.25px 0 rgba(var(--mdui-color-shadow), 19%),0 0.5px 1.75px 0 rgba(var(--mdui-color-shadow), 3.9%);--mdui-elevation-level5:0 2.75px 9px 0 rgba(var(--mdui-color-shadow), 19%),0 0.25px 3px 0 rgba(var(--mdui-color-shadow), 3.9%)}:root{--mdui-motion-easing-linear:cubic-bezier(0, 0, 1, 1);--mdui-motion-easing-standard:cubic-bezier(0.2, 0, 0, 1);--mdui-motion-easing-standard-accelerate:cubic-bezier(0.3, 0, 1, 1);--mdui-motion-easing-standard-decelerate:cubic-bezier(0, 0, 0, 1);--mdui-motion-easing-emphasized:var(--mdui-motion-easing-standard);--mdui-motion-easing-emphasized-accelerate:cubic-bezier(0.3, 0, 0.8, 0.15);--mdui-motion-easing-emphasized-decelerate:cubic-bezier(0.05, 0.7, 0.1, 1);--mdui-motion-duration-short1:50ms;--mdui-motion-duration-short2:100ms;--mdui-motion-duration-short3:150ms;--mdui-motion-duration-short4:200ms;--mdui-motion-duration-medium1:250ms;--mdui-motion-duration-medium2:300ms;--mdui-motion-duration-medium3:350ms;--mdui-motion-duration-medium4:400ms;--mdui-motion-duration-long1:450ms;--mdui-motion-duration-long2:500ms;--mdui-motion-duration-long3:550ms;--mdui-motion-duration-long4:600ms;--mdui-motion-duration-extra-long1:700ms;--mdui-motion-duration-extra-long2:800ms;--mdui-motion-duration-extra-long3:900ms;--mdui-motion-duration-extra-long4:1000ms}.mdui-prose{line-height:1.75;word-wrap:break-word}.mdui-prose :first-child{margin-top:0}.mdui-prose :last-child{margin-bottom:0}.mdui-prose code,.mdui-prose kbd,.mdui-prose pre,.mdui-prose pre tt,.mdui-prose samp{font-family:Consolas,Courier,"Courier New",monospace}.mdui-prose caption{text-align:left}.mdui-prose [draggable=true],.mdui-prose [draggable]{cursor:move}.mdui-prose [draggable=false]{cursor:inherit}.mdui-prose dl,.mdui-prose form,.mdui-prose ol,.mdui-prose p,.mdui-prose ul{margin-top:1.25em;margin-bottom:1.25em}.mdui-prose a{text-decoration:none;outline:0;color:rgb(var(--mdui-color-primary))}.mdui-prose a:focus,.mdui-prose a:hover{border-bottom:.0625rem solid rgb(var(--mdui-color-primary))}.mdui-prose small{font-size:.875em}.mdui-prose strong{font-weight:600}.mdui-prose blockquote{margin:1.6em 2em;padding-left:1em;border-left:.25rem solid rgb(var(--mdui-color-surface-variant))}@media only screen and (max-width:599.98px){.mdui-prose blockquote{margin:1.6em 0}}.mdui-prose blockquote footer{font-size:86%;color:rgb(var(--mdui-color-on-surface-variant))}.mdui-prose mark{color:inherit;background-color:rgb(var(--mdui-color-secondary-container));border-bottom:.0625rem solid rgb(var(--mdui-color-secondary));margin:0 .375rem;padding:.125rem}.mdui-prose h1,.mdui-prose h2,.mdui-prose h3,.mdui-prose h4,.mdui-prose h5,.mdui-prose h6{font-weight:400}.mdui-prose h1 small,.mdui-prose h2 small,.mdui-prose h3 small,.mdui-prose h4 small,.mdui-prose h5 small,.mdui-prose h6 small{font-weight:inherit;font-size:65%;color:rgb(var(--mdui-color-on-surface-variant))}.mdui-prose h1 strong,.mdui-prose h2 strong,.mdui-prose h3 strong,.mdui-prose h4 strong,.mdui-prose h5 strong,.mdui-prose h6 strong{font-weight:600}.mdui-prose h1{font-size:2.5em;margin-top:0;margin-bottom:1.25em;line-height:1.1111}.mdui-prose h2{font-size:1.875em;margin-top:2.25em;margin-bottom:1.125em;line-height:1.3333}.mdui-prose h3{font-size:1.5em;margin-top:2em;margin-bottom:1em;line-height:1.6}.mdui-prose h4{font-size:1.25em;margin-top:1.875em;margin-bottom:.875em;line-height:1.5}.mdui-prose h2+*,.mdui-prose h3+*,.mdui-prose h4+*,.mdui-prose hr+*{margin-top:0}.mdui-prose code,.mdui-prose kbd{font-size:.875em;color:rgb(var(--mdui-color-on-surface-container));background-color:rgba(var(--mdui-color-surface-variant),.28);padding:.125rem .375rem;border-radius:var(--mdui-shape-corner-extra-small)}.mdui-prose kbd{font-size:.9em}.mdui-prose abbr[title]{text-decoration:none;cursor:help;border-bottom:.0625rem dotted rgb(var(--mdui-color-on-surface-variant))}.mdui-prose ins,.mdui-prose u{text-decoration:none;border-bottom:.0625rem solid rgb(var(--mdui-color-on-surface-variant))}.mdui-prose del{text-decoration:line-through}.mdui-prose hr{margin-top:3em;margin-bottom:3em;border:none;border-bottom:.0625rem solid rgb(var(--mdui-color-surface-variant))}.mdui-prose pre{margin-top:1.7143em;margin-bottom:1.7143em}.mdui-prose pre code{padding:.8571em 1.1429em;overflow-x:auto;-webkit-overflow-scrolling:touch;background-color:rgb(var(--mdui-color-surface-container));color:rgb(var(--mdui-color-on-surface-container));border-radius:var(--mdui-shape-corner-extra-small)}.mdui-prose ol,.mdui-prose ul{padding-left:1.625em}.mdui-prose ul{list-style-type:disc}.mdui-prose ol{list-style-type:decimal}.mdui-prose ol[type="A"]{list-style-type:upper-alpha}.mdui-prose ol[type="a"]{list-style-type:lower-alpha}.mdui-prose ol[type="I"]{list-style-type:upper-roman}.mdui-prose ol[type="i"]{list-style-type:lower-roman}.mdui-prose ol[type="1"]{list-style-type:decimal}.mdui-prose li{margin-top:.5em;margin-bottom:.5em}.mdui-prose ol>li,.mdui-prose ul>li{padding-left:.375em}.mdui-prose ol>li>p,.mdui-prose ul>li>p{margin-top:.75em;margin-bottom:.75em}.mdui-prose ol>li>:first-child,.mdui-prose ul>li>:first-child{margin-top:1.25em}.mdui-prose ol>li>:last-child,.mdui-prose ul>li>:last-child{margin-bottom:1.25em}.mdui-prose ol>li::marker{font-weight:400;color:rgb(var(--mdui-color-on-surface-variant))}.mdui-prose ul>li::marker{color:rgb(var(--mdui-color-on-surface-variant))}.mdui-prose ol ol,.mdui-prose ol ul,.mdui-prose ul ol,.mdui-prose ul ul{margin-top:.75em;margin-bottom:.75em}.mdui-prose fieldset,.mdui-prose img{border:none}.mdui-prose figure,.mdui-prose img,.mdui-prose video{margin-top:2em;margin-bottom:2em;max-width:100%}.mdui-prose figure>*{margin-top:0;margin-bottom:0}.mdui-prose figcaption{font-size:.875em;line-height:1.4286;margin-top:.8571em;color:rgb(var(--mdui-color-on-surface-variant))}.mdui-prose figcaption:empty::before{z-index:-1;cursor:text;content:attr(placeholder);color:rgb(var(--mdui-color-on-surface-variant))}.mdui-prose table{margin-top:2em;margin-bottom:2em;border:.0625rem solid rgb(var(--mdui-color-surface-variant));border-radius:var(--mdui-shape-corner-large)}.mdui-table{width:100%;overflow-x:auto;margin-top:2em;margin-bottom:2em;border:.0625rem solid rgb(var(--mdui-color-surface-variant));border-radius:var(--mdui-shape-corner-large)}.mdui-table table{margin-top:0;margin-bottom:0;border:none;border-radius:0}.mdui-prose table,.mdui-table table{width:100%;text-align:left;border-collapse:collapse;border-spacing:0}.mdui-prose td,.mdui-prose th,.mdui-table td,.mdui-table th{border-top:.0625rem solid rgb(var(--mdui-color-surface-variant))}.mdui-prose td:not(:first-child),.mdui-prose th:not(:first-child),.mdui-table td:not(:first-child),.mdui-table th:not(:first-child){border-left:.0625rem solid rgb(var(--mdui-color-surface-variant))}.mdui-prose td:not(:last-child),.mdui-prose th:not(:last-child),.mdui-table td:not(:last-child),.mdui-table th:not(:last-child){border-right:.0625rem solid rgb(var(--mdui-color-surface-variant))}.mdui-prose tbody:first-child tr:first-child td,.mdui-prose thead:first-child tr:first-child th,.mdui-table tbody:first-child tr:first-child td,.mdui-table thead:first-child tr:first-child th{border-top:0}.mdui-prose tfoot td,.mdui-prose tfoot th,.mdui-prose thead td,.mdui-prose thead th,.mdui-table tfoot td,.mdui-table tfoot th,.mdui-table thead td,.mdui-table thead th{position:relative;vertical-align:middle;padding:1.125rem 1rem;font-weight:var(--mdui-typescale-title-medium-weight);letter-spacing:var(--mdui-typescale-title-medium-tracking);line-height:var(--mdui-typescale-title-medium-line-height);color:rgb(var(--mdui-color-on-surface-variant));box-shadow:var(--mdui-elevation-level1)}.mdui-prose tbody td,.mdui-prose tbody th,.mdui-table tbody td,.mdui-table tbody th{padding:.875rem 1rem}.mdui-prose tbody th,.mdui-table tbody th{vertical-align:middle;font-weight:inherit}.mdui-prose tbody td,.mdui-table tbody td{vertical-align:baseline}:root{--mdui-shape-corner-none:0;--mdui-shape-corner-extra-small:0.25rem;--mdui-shape-corner-small:0.5rem;--mdui-shape-corner-medium:0.75rem;--mdui-shape-corner-large:1rem;--mdui-shape-corner-extra-large:1.75rem;--mdui-shape-corner-full:1000rem}:root{--mdui-state-layer-hover:0.08;--mdui-state-layer-focus:0.12;--mdui-state-layer-pressed:0.12;--mdui-state-layer-dragged:0.16}:root{--mdui-typescale-display-large-weight:400;--mdui-typescale-display-medium-weight:400;--mdui-typescale-display-small-weight:400;--mdui-typescale-display-large-line-height:4rem;--mdui-typescale-display-medium-line-height:3.25rem;--mdui-typescale-display-small-line-height:2.75rem;--mdui-typescale-display-large-size:3.5625rem;--mdui-typescale-display-medium-size:2.8125rem;--mdui-typescale-display-small-size:2.25rem;--mdui-typescale-display-large-tracking:0rem;--mdui-typescale-display-medium-tracking:0rem;--mdui-typescale-display-small-tracking:0rem;--mdui-typescale-headline-large-weight:400;--mdui-typescale-headline-medium-weight:400;--mdui-typescale-headline-small-weight:400;--mdui-typescale-headline-large-line-height:2.5rem;--mdui-typescale-headline-medium-line-height:2.25rem;--mdui-typescale-headline-small-line-height:2rem;--mdui-typescale-headline-large-size:2rem;--mdui-typescale-headline-medium-size:1.75rem;--mdui-typescale-headline-small-size:1.5rem;--mdui-typescale-headline-large-tracking:0rem;--mdui-typescale-headline-medium-tracking:0rem;--mdui-typescale-headline-small-tracking:0rem;--mdui-typescale-title-large-weight:400;--mdui-typescale-title-medium-weight:500;--mdui-typescale-title-small-weight:500;--mdui-typescale-title-large-line-height:1.75rem;--mdui-typescale-title-medium-line-height:1.5rem;--mdui-typescale-title-small-line-height:1.25rem;--mdui-typescale-title-large-size:1.375rem;--mdui-typescale-title-medium-size:1rem;--mdui-typescale-title-small-size:0.875rem;--mdui-typescale-title-large-tracking:0rem;--mdui-typescale-title-medium-tracking:0.009375rem;--mdui-typescale-title-small-tracking:0.00625rem;--mdui-typescale-label-large-weight:500;--mdui-typescale-label-medium-weight:500;--mdui-typescale-label-small-weight:500;--mdui-typescale-label-large-line-height:1.25rem;--mdui-typescale-label-medium-line-height:1rem;--mdui-typescale-label-small-line-height:0.375rem;--mdui-typescale-label-large-size:0.875rem;--mdui-typescale-label-medium-size:0.75rem;--mdui-typescale-label-small-size:0.6875rem;--mdui-typescale-label-large-tracking:0.00625rem;--mdui-typescale-label-medium-tracking:0.03125rem;--mdui-typescale-label-small-tracking:0.03125rem;--mdui-typescale-body-large-weight:400;--mdui-typescale-body-medium-weight:400;--mdui-typescale-body-small-weight:400;--mdui-typescale-body-large-line-height:1.5rem;--mdui-typescale-body-medium-line-height:1.25rem;--mdui-typescale-body-small-line-height:1rem;--mdui-typescale-body-large-size:1rem;--mdui-typescale-body-medium-size:0.875rem;--mdui-typescale-body-small-size:0.75rem;--mdui-typescale-body-large-tracking:0.009375rem;--mdui-typescale-body-medium-tracking:0.015625rem;--mdui-typescale-body-small-tracking:0.025rem}.mdui-lock-screen{overflow:hidden!important}`,
        extend: {
            getUrlParams(sub) {
                let res = {}
                let query = sub === 3 ? new URL(location.href).hash.substring(sub) : location.search.substring(sub)
                let vars = query.split("&")
                for (var i = 0; i < vars.length; i++) {
                    let pair = vars[i].split("=")
                    res[pair[0]] = pair[1]
                }
                return res
            }
        }
    }

    const routeMashupAts = {
        routes: '*://tjv1-gawain-label.evad.mioffice.cn/appen/mashup/ssr/annotation-task-start*',
        style: `body{background: #282c33}#record-0 > div:nth-child(2){filter: invert(1);background: bisque;}`,
        startExec() {
            this.urlParams = this.getUrlParams(1)
            mdui.snackbar({message: `🔔${decodeURIComponent(this.urlParams.title)}`})
        }
    }

    const routeMashupTools = {
        routes: '*://tjv1-gawain-label.evad.mioffice.cn/appen/mashup/ssr/tools*',
        style: `.init-btn{position: fixed;right: 100px;bottom: 50px}`,
        extend: {
            nMap: {
                '实线-白': 0,
                '实线-黄': 1,
                '虚线段-白': 2,
                '虚线段-黄': 3,
                '停止线': 4,
                '箭头': 5,
                '斑马线': 6,
                'T形路口': 7,
                'Y形路口': 8,
                '十字路口': 9,
                '其他路口': 10,
                '禁停区域': 11
            },
            dispatchMenu(index) {
                const t1 = $('.video-tracking-app .sidebar-category-instance__label:not(.hidden).selected')
                const t2 = $('.video-tracking-app .sidebar-category-instance__item:not(.hidden).selected')
                const inFrameSelected = t1.length === 0 ? t2 : t1
                inFrameSelected[0].dispatchEvent(
                    new MouseEvent('contextmenu', {
                        'view': window,
                        'bubbles': true,
                        'cancelable': false
                    })
                )
                $('.shape-menu .shape-menu-item')[index].click()
            },
            draw(target, index) {
                if (target.nodeName !== 'INPUT') {
                    const sct = $('.video-tracking-app .sidebar-category-title')[index]
                    mdui.snackbar({message: `🔔绘制 '${sct.textContent.replace(/[0-9]+/g, '')}'`})
                    sct.click()
                    $('.video-tracking-app .create-tool-selector').click()
                }
            },
            move(target, index) {
                if (target.nodeName !== 'INPUT') {
                    this.dispatchMenu(0)
                    $('.ant-select-selector')[0].dispatchEvent(new MouseEvent('mousedown', {
                        bubbles: true,
                        cancelable: true,
                        view: window
                    }))
                    const t1 = $('.video-tracking-app .sidebar-category-instance__label:not(.hidden).selected')
                    const t2 = $('.video-tracking-app .sidebar-category-instance__item:not(.hidden).selected')
                    const inFrameSelected = t1.length === 0 ? t2 : t1
                    const t = inFrameSelected.parent().parent().find('.sidebar-category-instance__label div').text()
                    const objName = t.replace(/禁停区域[禁停区域\w ]+/g, '禁停区域')
                        .replace(/实线-白[实线\-白\w ]+/g, '实线-白')
                        .replace(/实线-黄[实线\-黄\w ]+/g, '实线-黄')
                        .replace(/虚线段-白[虚线段\-白\w ]+/g, '虚线段-白')
                        .replace(/虚线段-黄[虚线段\-黄\w ]+/g, '虚线段-黄')
                        .replace(/箭头[箭头\w ]+/g, '箭头')
                        .replace(/停止线[停止线\w ]+/g, '停止线')
                        .replace(/T形路口[T形路口\w ]+/g, 'T形路口')
                        .replace(/Y形路口[Y形路口\w ]+/g, 'Y形路口')
                        .replace(/十字路口[十字路口\w ]+/g, '十字路口')
                        .replace(/斑马线[斑马线\w ]+/g, '斑马线')
                        .replace(/其他路口[其他路口\w ]+/g, '其他路口')
                    console.log(t, objName, this.nMap, this.nMap[objName], $($('.rc-virtual-list')[0]).find('.ant-select-item.ant-select-item-option'));
                    $($('.rc-virtual-list')[0]).find('.ant-select-item.ant-select-item-option')[index === undefined ? this.nMap[objName] : index].click()
                    $('.ant-select-selector')[1].dispatchEvent(new MouseEvent('mousedown', {
                        bubbles: true,
                        cancelable: true,
                        view: window
                    }))
                    $($('.rc-virtual-list')[1]).find('.ant-select-item.ant-select-item-option')[0].click()
                    $('.ant-select-selector')[2].dispatchEvent(new MouseEvent('mousedown', {
                        bubbles: true,
                        cancelable: true,
                        view: window
                    }))
                    $($('.rc-virtual-list')[2]).find('.ant-select-item.ant-select-item-option')[0].click()
                    $('.ant-select-selector')[3].dispatchEvent(new MouseEvent('mousedown', {
                        bubbles: true,
                        cancelable: true,
                        view: window
                    }))
                    $($('.rc-virtual-list')[3]).find('.ant-select-item.ant-select-item-option')[0].click()
                    $('.annotation-tools-modal .content button').click()
                    mdui.snackbar({message: `🔔创建物体: ${objName}`})
                }
            },
            dataLoad(callback) {
                const timer = setInterval(() => {
                    if ($('.video-tracking-app .attributes-panel .value-item .value-item-value')[0].textContent !== '') {
                        clearInterval(timer)
                        callback()
                    }
                }, 500)
            }
        },
        startExec() {
            this.dataLoad(() => {
                $($('.video-tracking-app .tab-header > div')[1]).on('click', () => {
                    setTimeout(() => {
                        $('.video-tracking-app .sidebar-validation-content .ant-collapse>.ant-collapse-item>.ant-collapse-header').click()    
                    }, 20)
                })
                const toolbarBtns = $('.video-tracking-app .toolbar .icon-button')
                toolbarBtns[toolbarBtns.length - 4].click()
                toolbarBtns[toolbarBtns.length - 5].click()
                $('.toolbar .dropdown-button .dropdown-menu-item')[3].click()
                $(document).on('keydown', e => {
                    if (e.code === 'KeyX') {
                        if (e.target.nodeName !== 'INPUT') 
                            this.dispatchMenu(1)
                    } else if (e.code === 'KeyR') {
                        if (e.target.nodeName !== 'INPUT') 
                            document.dispatchEvent(new KeyboardEvent('keypress', {
                                key: 'o',
                                code: 'KeyO',
                                charCode: 0,
                                keyCode: 79,
                                bubbles: true,
                                cancelable: true
                            }))
                    } else if (e.code === 'KeyE') {
                        if (e.target.nodeName !== 'INPUT') 
                            $('.video-tracking-app .frame-control .frame-action-icon')[3].click()
                    } else if (e.code === 'KeyW') 
                        this.move(e.target)
                    else if (e.code === 'KeyQ') {
                        if (e.target.nodeName !== 'INPUT') 
                            $('.video-tracking-app .frame-control .frame-action-icon')[1].click()
                    } else if (e.code === 'KeyZ') {
                        if (e.ctrlKey === false) {
                            toolbarBtns[toolbarBtns.length - 7].click()
                            mdui.snackbar({message: `🔔隐藏选中`})
                        }
                    } else if (e.code === 'KeyA') {
                        toolbarBtns[toolbarBtns.length - 6].click()
                        mdui.snackbar({message: `🔔隐藏全部`})
                    } else if (e.code === 'Digit1') 
                        this.draw(e.target, 0)
                    else if (e.code === 'Digit2')
                        this.draw(e.target, 1)
                    else if (e.code === 'Digit3')
                        this.draw(e.target, 2)
                    else if (e.code === 'Digit4')
                        this.draw(e.target, 3)
                    else if (e.code === 'Digit5')
                        this.draw(e.target, 4)
                    else if (e.code === 'Digit6')
                        this.draw(e.target, 5)
                    else if (e.code === 'Digit7')
                        this.draw(e.target, 6)
                    else if (e.code === 'Digit8')
                        this.draw(e.target, 7)
                    else if (e.code === 'Digit9')
                        this.draw(e.target, 8)
                    else if (e.code === 'Digit0')
                        this.draw(e.target, 9)
                    else if (e.code === 'Minus')
                        this.draw(e.target, 10)
                    else if (e.code === 'Equal')
                        this.draw(e.target, 11)
                    else if (e.code === 'Numpad0') 
                        this.move(9)
                    else if (e.code === 'Numpad1') 
                        this.move(0)
                    else if (e.code === 'Numpad2') 
                        this.move(1)
                    else if (e.code === 'Numpad3') 
                        this.move(2)
                    else if (e.code === 'Numpad4') 
                        this.move(3)
                    else if (e.code === 'Numpad5') 
                        this.move(4)
                    else if (e.code === 'Numpad6') 
                        this.move(5)
                    else if (e.code === 'Numpad7') 
                        this.move(6)
                    else if (e.code === 'Numpad8') 
                        this.move(7)
                    else if (e.code === 'Numpad9') 
                        this.move(8)
                    else if (e.keyCode === 109) 
                        this.move(10)
                    else if (e.keyCode === 107) 
                        this.move(11)
                })
                $(document).on('mousedown', e => {
                    if (e.button === 2) {
                        this.pageX = e.pageX
                        this.pageY = e.pageY
                    } else if (e.button === 1) 
                        this.dispatchMenu(1)
                })
                $(document).on('mouseup', e => {
                    if (this.pageX === e.pageX && this.pageY === e.pageY && e.button === 2) {
                        document.dispatchEvent(
                            new KeyboardEvent('keydown', { bubbles: true, cancelable: true, key: 'Enter' })
                        )
                        $('.video-tracking-app .operation-navigator .pointer').click()
                    }
                })
            })
            $(document).on('keydown', e => {
                if (e.code === 'KeyF') {
                    const toolbarBtns = $('.video-tracking-app .toolbar .icon-button')
                    toolbarBtns[toolbarBtns.length - 1].click()
                }
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

    gloabl.extendWebPage = extendWebPage([routeGlobal, routeMashupAts, routeMashupTools])
})(window)