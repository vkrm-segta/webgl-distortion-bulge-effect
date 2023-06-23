var xt=Object.defineProperty;var bt=(n,t,e)=>t in n?xt(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var c=(n,t,e)=>(bt(n,typeof t!="symbol"?t+"":t,e),e),lt=(n,t,e)=>{if(!t.has(n))throw TypeError("Cannot "+e)};var i=(n,t,e)=>(lt(n,t,"read from private field"),e?e.call(n):t.get(n)),a=(n,t,e)=>{if(t.has(n))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(n):t.set(n,e)},u=(n,t,e,s)=>(lt(n,t,"write to private field"),s?s.call(n,e):t.set(n,e),e);import{T as Mt,V as x,R as ut,a as ct,P as dt,M as vt,g as p,C as ht,G as zt}from"./index-1d7990e3.js";const Tt=`#define GLSLIFY 1
attribute vec2 uv;attribute vec2 position;uniform vec2 uResolution;uniform vec2 uTextureResolution;varying vec2 vUv;vec2 resizeUvCover(vec2 uv,vec2 size,vec2 resolution){vec2 ratio=vec2(min((resolution.x/resolution.y)/(size.x/size.y),1.0),min((resolution.y/resolution.x)/(size.y/size.x),1.0));return vec2(uv.x*ratio.x+(1.0-ratio.x)*0.5,uv.y*ratio.y+(1.0-ratio.y)*0.5);}void main(){vUv=resizeUvCover(uv,uTextureResolution,uResolution);gl_Position=vec4(position,0,1);}`,Lt=`precision highp float;
#define GLSLIFY 1
uniform float uTime;uniform sampler2D uTexture;uniform vec2 uMouse;uniform vec2 uMouseIntro;uniform float uIntro;uniform float uRadius;uniform float uStrength;uniform float uBulge;varying vec2 vUv;vec2 bulge(vec2 uv,vec2 center){uv-=center;float dist=length(uv)/uRadius;float distPow=pow(dist,4.);float strengthAmount=uStrength/(1.0+distPow);uv*=(1.-uBulge)+uBulge*strengthAmount;uv+=center;return uv;}void main(){vec2 mixMouse=mix(uMouseIntro,uMouse,uIntro);vec2 bulgeUV=bulge(vUv,mixMouse);vec4 tex=texture2D(uTexture,bulgeUV);gl_FragColor.rgb=tex.rgb;gl_FragColor.a=1.0;}`;class Rt{constructor(){c(this,"load",(t,e)=>new Promise(s=>{const r=[];for(let o=0;o<t.length;o++){const{name:l,texture:h}=t[o];h&&!this.assets[l]&&r.push(this.loadTexture(h,l,e))}Promise.all(r).then(()=>s())}));this.assets={}}get(t){return this.assets[t]}loadTexture(t,e,s){return this.assets[e]||(this.assets[e]={}),new Promise(r=>{const o=new Image,l=new Mt(s);o.onload=()=>{l.image=o,this.assets[e]=l,r(o)},o.src=t})}}const at=new Rt;function F(){return"standalone"in navigator||window.matchMedia("(pointer: coarse)").matches?!0:window.matchMedia("(pointer: fine)").matches?!1:"ontouchstart"in window||navigator.maxTouchPoints>0}class Et{constructor(){c(this,"entries",{});c(this,"observer");c(this,"onElementObserved",t=>{t.forEach(e=>{const s=e.target.dataset.intersectId;s&&this.entries[s]&&(e.isIntersecting?this.entries[s].methodIn(e):this.entries[s].methodOut(e))})});this.observer=new IntersectionObserver(this.onElementObserved,{threshold:0})}observe(t,e,s,r){this.entries[t]={el:e,methodIn:s,methodOut:r},this.observer.observe(e)}unobserve(t,e){this.observer.unobserve(e),delete this.entries[t]}}const _t=new Et;var d,L,Y,v,b,M,R,O,B,E,_,P,W;class Ct{constructor({el:t,src:e,index:s,guiObj:r}){a(this,d,void 0);a(this,L,void 0);a(this,Y,void 0);a(this,v,void 0);a(this,b,new x(0,0));a(this,M,new x(0,0));a(this,R,void 0);a(this,O,!0);a(this,B,void 0);a(this,E,void 0);a(this,_,void 0);a(this,P,void 0);a(this,W,void 0);c(this,"show",()=>{var e;let t=0;(e=this.tlHide)==null||e.kill(),this.tlShow=p.timeline(),p.delayedCall(t,()=>{i(this,d).parentNode.parentNode.classList.add("is-visible")}),this.tlShow.fromTo(i(this,v).uniforms.uBulge,{value:1},{value:0,duration:1.8,ease:"power3.out",delay:t}),this.tlShow.to(i(this,v).uniforms.uIntro,{value:1,duration:5,delay:t},0),u(this,W,!0)});c(this,"hide",()=>{var e;let t=0;(e=this.tlShow)==null||e.kill(),this.tlHide=p.timeline(),p.delayedCall(t,()=>{i(this,d).parentNode.parentNode.classList.remove("is-visible")}),this.tlHide.to(i(this,v).uniforms.uBulge,{value:1,duration:1.8,ease:"power3.out",delay:t}),this.tlHide.to(i(this,v).uniforms.uIntro,{value:0,duration:1,delay:t},0),u(this,W,!1)});c(this,"render",t=>{i(this,v)&&(i(this,M).x=p.utils.interpolate(i(this,M).x,i(this,b).x,.1),i(this,M).y=p.utils.interpolate(i(this,M).y,i(this,b).y,.1),i(this,v).uniforms.uMouse.value=i(this,M),i(this,L).render({scene:i(this,Y)}))});c(this,"mouseMove",t=>{if(!i(this,O)||!i(this,v)||!i(this,W))return;u(this,R,i(this,d).getBoundingClientRect());let e=i(this,_)?t.touches[0].pageX:t.clientX,s=i(this,_)?t.touches[0].pageY:t.clientY;const r=(e-i(this,R).left)/i(this,d).offsetWidth,o=1-(s-i(this,R).top)/i(this,d).offsetHeight;i(this,b).x=p.utils.clamp(0,1,r),i(this,b).y=p.utils.clamp(0,1,o)});c(this,"handleMouseEnter",()=>{var t,e;i(this,O)&&((t=this.tlHide)==null||t.kill(),(e=this.tlShow)==null||e.kill(),this.tlForceIntro=new p.timeline,this.tlForceIntro.to(i(this,v).uniforms.uIntro,{value:1,duration:5,ease:"expo.out"}),p.to(i(this,v).uniforms.uBulge,{value:1,duration:1,ease:"expo.out"}))});c(this,"handleMouseLeave",()=>{var t;i(this,O)&&((t=this.tlForceIntro)==null||t.kill(),this.tlLeave=new p.timeline,this.tlLeave.to(i(this,v).uniforms.uBulge,{value:0,duration:1,ease:"expo.out"}))});c(this,"resize",()=>{const t=i(this,d).parentNode.offsetWidth,e=i(this,d).parentNode.offsetHeight;i(this,L).setSize(t,e),u(this,R,i(this,d).getBoundingClientRect()),i(this,v)&&(i(this,v).uniforms.uResolution.value=new x(t,e)),u(this,_,F())});u(this,d,t),u(this,B,e),u(this,E,s),u(this,P,r),this.setScene(),i(this,d).dataset.intersectId=s,u(this,_,F()),console.log("demo 1")}get type(){return"card"}get program(){return i(this,v)}async setScene(){u(this,L,new ut({dpr:Math.min(window.devicePixelRatio,2),canvas:i(this,d),width:i(this,d).offsetWidth,height:i(this,d).offsetHeight}));const{gl:t}=i(this,L);await at.load([{name:`image_${i(this,E)}`,texture:`./img/${i(this,B)}`}],t),t.clearColor(1,1,1,1),this.resize();const e=new ct(t),s=at.get(`image_${i(this,E)}`);u(this,v,new dt(t,{vertex:Tt,fragment:Lt,uniforms:{uTime:{value:0},uTexture:{value:s},uTextureResolution:{value:new x(s.image.width,s.image.height)},uResolution:{value:new x(t.canvas.offsetWidth,t.canvas.offsetHeight)},uMouse:{value:i(this,b)},uMouseIntro:{value:new x(.5,0)},uIntro:{value:0},uBulge:{value:0},uRadius:{value:i(this,P).radius},uStrength:{value:i(this,P).strength}}})),u(this,Y,new vt(t,{geometry:e,program:i(this,v)})),this.events(),_t.observe(i(this,E),i(this,d),this.show,this.hide)}events(){i(this,d).addEventListener("mouseenter",this.handleMouseEnter,!1),i(this,d).addEventListener("mouseleave",this.handleMouseLeave,!1)}}d=new WeakMap,L=new WeakMap,Y=new WeakMap,v=new WeakMap,b=new WeakMap,M=new WeakMap,R=new WeakMap,O=new WeakMap,B=new WeakMap,E=new WeakMap,_=new WeakMap,P=new WeakMap,W=new WeakMap;const It=`#define GLSLIFY 1
attribute vec2 uv;attribute vec2 position;uniform vec2 uResolution;varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position,0,1);}`,Ot=`precision highp float;
#define GLSLIFY 1
uniform vec3 uColor1;uniform vec3 uColor2;uniform float uTime;uniform float uScroll;varying vec2 vUv;vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}vec2 fade(vec2 t){return t*t*t*(t*(t*6.0-15.0)+10.0);}float cnoise(vec2 P){vec4 Pi=floor(P.xyxy)+vec4(0.0,0.0,1.0,1.0);vec4 Pf=fract(P.xyxy)-vec4(0.0,0.0,1.0,1.0);Pi=mod289(Pi);vec4 ix=Pi.xzxz;vec4 iy=Pi.yyww;vec4 fx=Pf.xzxz;vec4 fy=Pf.yyww;vec4 i=permute(permute(ix)+iy);vec4 gx=fract(i*(1.0/41.0))*2.0-1.0;vec4 gy=abs(gx)-0.5;vec4 tx=floor(gx+0.5);gx=gx-tx;vec2 g00=vec2(gx.x,gy.x);vec2 g10=vec2(gx.y,gy.y);vec2 g01=vec2(gx.z,gy.z);vec2 g11=vec2(gx.w,gy.w);vec4 norm=taylorInvSqrt(vec4(dot(g00,g00),dot(g01,g01),dot(g10,g10),dot(g11,g11)));g00*=norm.x;g01*=norm.y;g10*=norm.z;g11*=norm.w;float n00=dot(g00,vec2(fx.x,fy.x));float n10=dot(g10,vec2(fx.y,fy.y));float n01=dot(g01,vec2(fx.z,fy.z));float n11=dot(g11,vec2(fx.w,fy.w));vec2 fade_xy=fade(Pf.xy);vec2 n_x=mix(vec2(n00,n01),vec2(n10,n11),fade_xy.x);float n_xy=mix(n_x.x,n_x.y,fade_xy.y);return 2.3*n_xy;}void main(){float noise=cnoise(vUv*1.+uScroll+sin(uTime/10.));vec3 color=mix(uColor1,uColor2,noise);gl_FragColor.rgb=color;gl_FragColor.a=1.0;}`;var D,C,j,f,X,Z,tt;class Pt{constructor({el:t}){a(this,D,void 0);a(this,C,void 0);a(this,j,void 0);a(this,f,void 0);a(this,X,void 0);a(this,Z,void 0);a(this,tt,void 0);c(this,"render",t=>{i(this,f)&&(i(this,f).uniforms.uTime.value=t,i(this,C).render({scene:i(this,j)}))});c(this,"scroll",t=>{i(this,f).uniforms.uScroll.value=t*2});c(this,"resize",()=>{const t=window.innerWidth,e=window.innerHeight;i(this,C).setSize(t,e),i(this,f)&&(i(this,f).uniforms.uResolution.value=new x(t,e)),u(this,X,F())});u(this,D,t),this.setScene(),u(this,X,F())}get type(){return"background"}get program(){return i(this,f)}async setScene(){u(this,C,new ut({dpr:Math.min(window.devicePixelRatio,2),canvas:i(this,D),width:window.innerWidth,height:window.innerHeight}));const{gl:t}=i(this,C);t.clearColor(1,1,1,1),this.resize();const e=new ct(t);u(this,f,new dt(t,{vertex:It,fragment:Ot,uniforms:{uTime:{value:0},uScroll:{value:0},uColor1:{value:new ht("#2DA7E3")},uColor2:{value:new ht("#8049E3")},uResolution:{value:new x(t.canvas.offsetWidth,t.canvas.offsetHeight)}}})),u(this,j,new vt(t,{geometry:e,program:i(this,f)}))}}D=new WeakMap,C=new WeakMap,j=new WeakMap,f=new WeakMap,X=new WeakMap,Z=new WeakMap,tt=new WeakMap;function Q(){return Q=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(n[s]=e[s])}return n},Q.apply(this,arguments)}function K(n,t,e){return Math.max(n,Math.min(t,e))}class Wt{advance(t){var e;if(!this.isRunning)return;let s=!1;if(this.lerp)this.value=(r=this.value,o=this.to,(1-(l=1-Math.exp(-60*this.lerp*t)))*r+l*o),Math.round(this.value)===this.to&&(this.value=this.to,s=!0);else{this.currentTime+=t;const h=K(0,this.currentTime/this.duration,1);s=h>=1;const m=s?1:this.easing(h);this.value=this.from+(this.to-this.from)*m}var r,o,l;(e=this.onUpdate)==null||e.call(this,this.value,{completed:s}),s&&this.stop()}stop(){this.isRunning=!1}fromTo(t,e,{lerp:s=.1,duration:r=1,easing:o=h=>h,onUpdate:l}){this.from=this.value=t,this.to=e,this.lerp=s,this.duration=r,this.easing=o,this.currentTime=0,this.isRunning=!0,this.onUpdate=l}}class Ht{constructor({wrapper:t,content:e,autoResize:s=!0}={}){if(this.resize=()=>{this.onWrapperResize(),this.onContentResize()},this.onWrapperResize=()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)},this.onContentResize=()=>{this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth},this.wrapper=t,this.content=e,s){const r=function(o,l){let h;return function(){let m=arguments,y=this;clearTimeout(h),h=setTimeout(function(){o.apply(y,m)},250)}}(this.resize);this.wrapper!==window&&(this.wrapperResizeObserver=new ResizeObserver(r),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(r),this.contentResizeObserver.observe(this.content)}this.resize()}destroy(){var t,e;(t=this.wrapperResizeObserver)==null||t.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect()}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}let mt=()=>({events:{},emit(n,...t){let e=this.events[n]||[];for(let s=0,r=e.length;s<r;s++)e[s](...t)},on(n,t){var e;return(e=this.events[n])!=null&&e.push(t)||(this.events[n]=[t]),()=>{var s;this.events[n]=(s=this.events[n])==null?void 0:s.filter(r=>t!==r)}}});class Ut{constructor(t,{wheelMultiplier:e=1,touchMultiplier:s=2,normalizeWheel:r=!1}){this.onTouchStart=o=>{const{clientX:l,clientY:h}=o.targetTouches?o.targetTouches[0]:o;this.touchStart.x=l,this.touchStart.y=h,this.lastDelta={x:0,y:0}},this.onTouchMove=o=>{const{clientX:l,clientY:h}=o.targetTouches?o.targetTouches[0]:o,m=-(l-this.touchStart.x)*this.touchMultiplier,y=-(h-this.touchStart.y)*this.touchMultiplier;this.touchStart.x=l,this.touchStart.y=h,this.lastDelta={x:m,y},this.emitter.emit("scroll",{type:"touch",deltaX:m,deltaY:y,event:o})},this.onTouchEnd=o=>{this.emitter.emit("scroll",{type:"touch",inertia:!0,deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:o})},this.onWheel=o=>{let{deltaX:l,deltaY:h}=o;this.normalizeWheel&&(l=K(-100,l,100),h=K(-100,h,100)),l*=this.wheelMultiplier,h*=this.wheelMultiplier,this.emitter.emit("scroll",{type:"wheel",deltaX:l,deltaY:h,event:o})},this.element=t,this.wheelMultiplier=e,this.touchMultiplier=s,this.normalizeWheel=r,this.touchStart={x:null,y:null},this.emitter=mt(),this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}on(t,e){return this.emitter.on(t,e)}destroy(){this.emitter.events={},this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1})}}class kt{constructor({direction:t,gestureDirection:e,mouseMultiplier:s,smooth:r,wrapper:o=window,content:l=document.documentElement,wheelEventsTarget:h=o,smoothWheel:m=r==null||r,smoothTouch:y=!1,syncTouch:H=!1,syncTouchLerp:V=.1,touchInertiaMultiplier:w=35,duration:T,easing:$=I=>Math.min(1,1.001-Math.pow(2,-10*I)),lerp:gt=T?null:.1,infinite:pt=!1,orientation:ft=t??"vertical",gestureOrientation:wt=e??"vertical",touchMultiplier:et=1,wheelMultiplier:it=s??1,normalizeWheel:st=!1,autoResize:ot=!0}={}){this.onVirtualScroll=({type:I,inertia:yt,deltaX:G,deltaY:U,event:N})=>{if(N.ctrlKey)return;const k=I==="touch",nt=I==="wheel";if(this.options.gestureOrientation==="vertical"&&U===0||this.options.gestureOrientation==="horizontal"&&G===0||k&&this.options.gestureOrientation==="vertical"&&this.scroll===0&&!this.options.infinite&&U<=0||N.composedPath().find(S=>(S==null||S.hasAttribute==null?void 0:S.hasAttribute("data-lenis-prevent"))||k&&(S==null||S.hasAttribute==null?void 0:S.hasAttribute("data-lenis-prevent-touch"))||nt&&(S==null||S.hasAttribute==null?void 0:S.hasAttribute("data-lenis-prevent-wheel"))))return;if(this.isStopped||this.isLocked)return void N.preventDefault();if(this.isSmooth=(this.options.smoothTouch||this.options.syncTouch)&&k||this.options.smoothWheel&&nt,!this.isSmooth)return this.isScrolling=!1,void this.animate.stop();N.preventDefault();let A=U;this.options.gestureOrientation==="both"?A=Math.abs(U)>Math.abs(G)?U:G:this.options.gestureOrientation==="horizontal"&&(A=G);const St=k&&this.options.syncTouch,rt=k&&yt&&Math.abs(A)>1;rt&&(A=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+A,Q({programmatic:!1},St&&{lerp:rt?this.syncTouchLerp:.4}))},this.onScroll=()=>{if(!this.isScrolling){const I=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.direction=Math.sign(this.animatedScroll-I),this.emit()}},t&&console.warn("Lenis: `direction` option is deprecated, use `orientation` instead"),e&&console.warn("Lenis: `gestureDirection` option is deprecated, use `gestureOrientation` instead"),s&&console.warn("Lenis: `mouseMultiplier` option is deprecated, use `wheelMultiplier` instead"),r&&console.warn("Lenis: `smooth` option is deprecated, use `smoothWheel` instead"),window.lenisVersion="1.0.15",o!==document.documentElement&&o!==document.body||(o=window),this.options={wrapper:o,content:l,wheelEventsTarget:h,smoothWheel:m,smoothTouch:y,syncTouch:H,syncTouchLerp:V,touchInertiaMultiplier:w,duration:T,easing:$,lerp:gt,infinite:pt,gestureOrientation:wt,orientation:ft,touchMultiplier:et,wheelMultiplier:it,normalizeWheel:st,autoResize:ot},this.dimensions=new Ht({wrapper:o,content:l,autoResize:ot}),this.rootElement.classList.add("lenis"),this.velocity=0,this.isStopped=!1,this.isSmooth=m||y,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.animate=new Wt,this.emitter=mt(),this.options.wrapper.addEventListener("scroll",this.onScroll,{passive:!1}),this.virtualScroll=new Ut(h,{touchMultiplier:et,wheelMultiplier:it,normalizeWheel:st}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.events={},this.options.wrapper.removeEventListener("scroll",this.onScroll,{passive:!1}),this.virtualScroll.destroy(),this.dimensions.destroy(),this.rootElement.classList.remove("lenis"),this.rootElement.classList.remove("lenis-smooth"),this.rootElement.classList.remove("lenis-scrolling"),this.rootElement.classList.remove("lenis-stopped")}on(t,e){return this.emitter.on(t,e)}off(t,e){var s;this.emitter.events[t]=(s=this.emitter.events[t])==null?void 0:s.filter(r=>e!==r)}setScroll(t){this.isHorizontal?this.rootElement.scrollLeft=t:this.rootElement.scrollTop=t}resize(){this.dimensions.resize()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.velocity=0,this.animate.stop()}start(){this.isStopped=!1,this.reset()}stop(){this.isStopped=!0,this.animate.stop(),this.reset()}raf(t){const e=t-(this.time||t);this.time=t,this.animate.advance(.001*e)}scrollTo(t,{offset:e=0,immediate:s=!1,lock:r=!1,duration:o=this.options.duration,easing:l=this.options.easing,lerp:h=!o&&this.options.lerp,onComplete:m=null,force:y=!1,programmatic:H=!0}={}){if(!this.isStopped||y){if(["top","left","start"].includes(t))t=0;else if(["bottom","right","end"].includes(t))t=this.limit;else{var V;let w;if(typeof t=="string"?w=document.querySelector(t):(V=t)!=null&&V.nodeType&&(w=t),w){if(this.options.wrapper!==window){const $=this.options.wrapper.getBoundingClientRect();e-=this.isHorizontal?$.left:$.top}const T=w.getBoundingClientRect();t=(this.isHorizontal?T.left:T.top)+this.animatedScroll}}if(typeof t=="number"){if(t+=e,t=Math.round(t),this.options.infinite?H&&(this.targetScroll=this.animatedScroll=this.scroll):t=K(0,t,this.limit),s)return this.animatedScroll=this.targetScroll=t,this.setScroll(this.scroll),this.reset(),this.emit(),void(m==null||m());if(!H){if(t===this.targetScroll)return;this.targetScroll=t}this.animate.fromTo(this.animatedScroll,t,{duration:o,easing:l,lerp:h,onUpdate:(w,{completed:T})=>{r&&(this.isLocked=!0),this.isScrolling=!0,this.velocity=w-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=w,this.setScroll(this.scroll),H&&(this.targetScroll=w),T&&(r&&(this.isLocked=!1),requestAnimationFrame(()=>{this.isScrolling=!1}),this.velocity=0,m==null||m()),this.emit()}})}}}get rootElement(){return this.options.wrapper===window?this.options.content:this.options.wrapper}get limit(){return this.isHorizontal?this.dimensions.limit.x:this.dimensions.limit.y}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?(this.animatedScroll%(t=this.limit)+t)%t:this.animatedScroll;var t}get progress(){return this.limit===0?1:this.scroll/this.limit}get isSmooth(){return this.__isSmooth}set isSmooth(t){this.__isSmooth!==t&&(this.rootElement.classList.toggle("lenis-smooth",t),this.__isSmooth=t)}get isScrolling(){return this.__isScrolling}set isScrolling(t){this.__isScrolling!==t&&(this.rootElement.classList.toggle("lenis-scrolling",t),this.__isScrolling=t)}get isStopped(){return this.__isStopped}set isStopped(t){this.__isStopped!==t&&(this.rootElement.classList.toggle("lenis-stopped",t),this.__isStopped=t)}}const At=["image-7.jpg","image1.png","image-2.jpg","image-7.jpg","image1.png","image-2.jpg"];var g,q,z,J;class Ft{constructor(){a(this,g,void 0);a(this,q,void 0);a(this,z,{bulge:0,strength:1.1,radius:.95});a(this,J,void 0);c(this,"handleRAF",t=>{i(this,q).raf(t*1e3);for(let e=0;e<i(this,g).length;e++){const s=i(this,g)[e];typeof s.render=="function"&&s.render(t)}});c(this,"handleResize",()=>{for(let t=0;t<i(this,g).length;t++){const e=i(this,g)[t];typeof e.resize=="function"&&e.resize()}});c(this,"handleMouseMove",t=>{for(let e=0;e<i(this,g).length;e++){const s=i(this,g)[e];typeof s.mouseMove=="function"&&s.mouseMove(t)}});c(this,"handleScroll",t=>{this.scrollEl.classList.remove("is-visible");for(let e=0;e<i(this,g).length;e++){const s=i(this,g)[e];typeof s.scroll=="function"&&s.scroll(t.progress)}});u(this,g,this.createComponents()),u(this,q,this.createLenis()),u(this,J,this.createDebugger()),this.events()}createComponents(){const t=[];document.querySelectorAll(".card").forEach((r,o)=>{const l=r.querySelector("canvas");t.push(new Ct({el:l,src:At[o],index:o,guiObj:i(this,z)}))});const s=document.querySelector(".background__canvas");return t.push(new Pt({el:s})),t}createLenis(){const t=new kt({infinite:!1,lerp:.08});return this.scrollEl=document.querySelector(".scroll"),t.on("scroll",this.handleScroll),t}events(){p.ticker.add(this.handleRAF),window.addEventListener("resize",this.handleResize,!1),F()?window.addEventListener("touchmove",this.handleMouseMove,!1):window.addEventListener("mousemove",this.handleMouseMove,!1)}createDebugger(){const t=new zt,e=()=>{for(let s=0;s<i(this,g).length;s++){const r=i(this,g)[s];r.type==="card"&&(r.program.uniforms.uRadius.value=i(this,z).radius,r.program.uniforms.uStrength.value=i(this,z).strength)}};return t.add(i(this,z),"radius",0,1).onChange(e),t.add(i(this,z),"strength",0,3).onChange(e),t}}g=new WeakMap,q=new WeakMap,z=new WeakMap,J=new WeakMap;new Ft;
