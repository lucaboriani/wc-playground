import{M as O,a as Y,b as M,W as D,A as S,T as tt,P as et}from"./HTMLText.22f2e038.js";import{I as T}from"./IntersectionHandler.7eaf436d.js";import{_ as nt}from"./_plugin-vue_export-helper.c27b6911.js";import{A as x,o as H,B as V,c as it,d as ot}from"./runtime-core.esm-bundler.abef6fc8.js";class st extends O{constructor(n=200,i,a=0){super(new Float32Array(i.length*4),new Float32Array(i.length*4),new Uint16Array((i.length-1)*6)),this.points=i,this._width=n,this.textureScale=a,this.build()}get width(){return this._width}build(){const n=this.points;if(!n)return;const i=this.getBuffer("aVertexPosition"),a=this.getBuffer("aTextureCoord"),r=this.getIndex();if(n.length<1)return;i.data.length/4!==n.length&&(i.data=new Float32Array(n.length*4),a.data=new Float32Array(n.length*4),r.data=new Uint16Array((n.length-1)*6));const o=a.data,c=r.data;o[0]=0,o[1]=0,o[2]=0,o[3]=1;let U=0,I=n[0];const u=this._width*this.textureScale,N=n.length;for(let e=0;e<N;e++){const s=e*4;if(this.textureScale>0){const _=I.x-n[e].x,p=I.y-n[e].y,f=Math.sqrt(_*_+p*p);I=n[e],U+=f/u}else U=e/(N-1);o[s]=U,o[s+1]=0,o[s+2]=U,o[s+3]=1}let l=0;for(let e=0;e<N-1;e++){const s=e*2;c[l++]=s,c[l++]=s+1,c[l++]=s+2,c[l++]=s+2,c[l++]=s+1,c[l++]=s+3}a.update(),r.update(),this.updateVertices()}updateVertices(){const n=this.points;if(n.length<1)return;let i=n[0],a,r=0,o=0;const c=this.buffers[0].data,U=n.length,I=this.textureScale>0?this.textureScale*this._width/2:this._width/2;for(let u=0;u<U;u++){const N=n[u],l=u*4;u<n.length-1?a=n[u+1]:a=N,o=-(a.x-i.x),r=a.y-i.y;const e=Math.sqrt(r*r+o*o);e<1e-6?(r=0,o=0):(r/=e,o/=e,r*=I,o*=I),c[l]=N.x+r,c[l+1]=N.y+o,c[l+2]=N.x-r,c[l+3]=N.y-o,i=N}this.buffers[0].update()}update(){this.textureScale>0?this.build():this.updateVertices()}}class rt extends Y{constructor(n,i,a=0){const r=new st(n.height,i,a),o=new M(n);a>0&&(n.baseTexture.wrapMode=D.REPEAT),super(r,o),this.autoUpdate=!0}_render(n){const i=this.geometry;(this.autoUpdate||i._width!==this.shader.texture.height)&&(i._width=this.shader.texture.height,i.update()),super._render(n)}}/*!
 * @pixi/constants - v6.5.9
 * Compiled Wed, 25 Jan 2023 05:01:45 UTC
 *
 * @pixi/constants is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var y;(function(t){t[t.WEBGL_LEGACY=0]="WEBGL_LEGACY",t[t.WEBGL=1]="WEBGL",t[t.WEBGL2=2]="WEBGL2"})(y||(y={}));var m;(function(t){t[t.UNKNOWN=0]="UNKNOWN",t[t.WEBGL=1]="WEBGL",t[t.CANVAS=2]="CANVAS"})(m||(m={}));var X;(function(t){t[t.COLOR=16384]="COLOR",t[t.DEPTH=256]="DEPTH",t[t.STENCIL=1024]="STENCIL"})(X||(X={}));var C;(function(t){t[t.NORMAL=0]="NORMAL",t[t.ADD=1]="ADD",t[t.MULTIPLY=2]="MULTIPLY",t[t.SCREEN=3]="SCREEN",t[t.OVERLAY=4]="OVERLAY",t[t.DARKEN=5]="DARKEN",t[t.LIGHTEN=6]="LIGHTEN",t[t.COLOR_DODGE=7]="COLOR_DODGE",t[t.COLOR_BURN=8]="COLOR_BURN",t[t.HARD_LIGHT=9]="HARD_LIGHT",t[t.SOFT_LIGHT=10]="SOFT_LIGHT",t[t.DIFFERENCE=11]="DIFFERENCE",t[t.EXCLUSION=12]="EXCLUSION",t[t.HUE=13]="HUE",t[t.SATURATION=14]="SATURATION",t[t.COLOR=15]="COLOR",t[t.LUMINOSITY=16]="LUMINOSITY",t[t.NORMAL_NPM=17]="NORMAL_NPM",t[t.ADD_NPM=18]="ADD_NPM",t[t.SCREEN_NPM=19]="SCREEN_NPM",t[t.NONE=20]="NONE",t[t.SRC_OVER=0]="SRC_OVER",t[t.SRC_IN=21]="SRC_IN",t[t.SRC_OUT=22]="SRC_OUT",t[t.SRC_ATOP=23]="SRC_ATOP",t[t.DST_OVER=24]="DST_OVER",t[t.DST_IN=25]="DST_IN",t[t.DST_OUT=26]="DST_OUT",t[t.DST_ATOP=27]="DST_ATOP",t[t.ERASE=26]="ERASE",t[t.SUBTRACT=28]="SUBTRACT",t[t.XOR=29]="XOR"})(C||(C={}));var L;(function(t){t[t.POINTS=0]="POINTS",t[t.LINES=1]="LINES",t[t.LINE_LOOP=2]="LINE_LOOP",t[t.LINE_STRIP=3]="LINE_STRIP",t[t.TRIANGLES=4]="TRIANGLES",t[t.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",t[t.TRIANGLE_FAN=6]="TRIANGLE_FAN"})(L||(L={}));var w;(function(t){t[t.RGBA=6408]="RGBA",t[t.RGB=6407]="RGB",t[t.RG=33319]="RG",t[t.RED=6403]="RED",t[t.RGBA_INTEGER=36249]="RGBA_INTEGER",t[t.RGB_INTEGER=36248]="RGB_INTEGER",t[t.RG_INTEGER=33320]="RG_INTEGER",t[t.RED_INTEGER=36244]="RED_INTEGER",t[t.ALPHA=6406]="ALPHA",t[t.LUMINANCE=6409]="LUMINANCE",t[t.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",t[t.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",t[t.DEPTH_STENCIL=34041]="DEPTH_STENCIL"})(w||(w={}));var A;(function(t){t[t.TEXTURE_2D=3553]="TEXTURE_2D",t[t.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",t[t.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",t[t.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",t[t.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",t[t.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",t[t.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",t[t.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",t[t.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z"})(A||(A={}));var b;(function(t){t[t.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",t[t.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",t[t.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",t[t.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",t[t.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",t[t.UNSIGNED_INT=5125]="UNSIGNED_INT",t[t.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",t[t.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",t[t.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",t[t.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",t[t.BYTE=5120]="BYTE",t[t.SHORT=5122]="SHORT",t[t.INT=5124]="INT",t[t.FLOAT=5126]="FLOAT",t[t.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",t[t.HALF_FLOAT=36193]="HALF_FLOAT"})(b||(b={}));var P;(function(t){t[t.FLOAT=0]="FLOAT",t[t.INT=1]="INT",t[t.UINT=2]="UINT"})(P||(P={}));var $;(function(t){t[t.NEAREST=0]="NEAREST",t[t.LINEAR=1]="LINEAR"})($||($={}));var Z;(function(t){t[t.CLAMP=33071]="CLAMP",t[t.REPEAT=10497]="REPEAT",t[t.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"})(Z||(Z={}));var z;(function(t){t[t.OFF=0]="OFF",t[t.POW2=1]="POW2",t[t.ON=2]="ON",t[t.ON_MANUAL=3]="ON_MANUAL"})(z||(z={}));var F;(function(t){t[t.NPM=0]="NPM",t[t.UNPACK=1]="UNPACK",t[t.PMA=2]="PMA",t[t.NO_PREMULTIPLIED_ALPHA=0]="NO_PREMULTIPLIED_ALPHA",t[t.PREMULTIPLY_ON_UPLOAD=1]="PREMULTIPLY_ON_UPLOAD",t[t.PREMULTIPLY_ALPHA=2]="PREMULTIPLY_ALPHA",t[t.PREMULTIPLIED_ALPHA=2]="PREMULTIPLIED_ALPHA"})(F||(F={}));var W;(function(t){t[t.NO=0]="NO",t[t.YES=1]="YES",t[t.AUTO=2]="AUTO",t[t.BLEND=0]="BLEND",t[t.CLEAR=1]="CLEAR",t[t.BLIT=2]="BLIT"})(W||(W={}));var q;(function(t){t[t.AUTO=0]="AUTO",t[t.MANUAL=1]="MANUAL"})(q||(q={}));var j;(function(t){t.LOW="lowp",t.MEDIUM="mediump",t.HIGH="highp"})(j||(j={}));var k;(function(t){t[t.NONE=0]="NONE",t[t.SCISSOR=1]="SCISSOR",t[t.STENCIL=2]="STENCIL",t[t.SPRITE=3]="SPRITE",t[t.COLOR=4]="COLOR"})(k||(k={}));var J;(function(t){t[t.RED=1]="RED",t[t.GREEN=2]="GREEN",t[t.BLUE=4]="BLUE",t[t.ALPHA=8]="ALPHA"})(J||(J={}));var Q;(function(t){t[t.NONE=0]="NONE",t[t.LOW=2]="LOW",t[t.MEDIUM=4]="MEDIUM",t[t.HIGH=8]="HIGH"})(Q||(Q={}));var K;(function(t){t[t.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",t[t.ARRAY_BUFFER=34962]="ARRAY_BUFFER",t[t.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER"})(K||(K={}));let h;async function E(t){h=new S({background:"#000000",resizeTo:t}),t.appendChild(h.view);const n=tt.from("/trail.png"),i=[],a=[],r=20,o=100,c=[];for(let e=0;e<r;e++)i.push(0),a.push(0);for(let e=0;e<o;e++)c.push(new et(0,0));const U=new rt(n,c);U.blendmode=C.ADD,h.stage.addChild(U);let I=null;h.stage.eventMode="static",h.stage.hitArea=h.screen,h.stage.on("mousemove",e=>{I=I||{x:0,y:0},I.x=e.global.x,I.y=e.global.y}),h.ticker.add(()=>{if(I){i.pop(),i.unshift(I.x),a.pop(),a.unshift(I.y);for(let e=0;e<o;e++){const s=c[e],_=l(i,e/o*r),p=l(a,e/o*r);s.x=_,s.y=p}}});function u(e,s){return e<0&&(e=0),e>s.length-1&&(e=s.length-1),s[e]}function N(e,s,_){return s*(u(e+1,_)-u(e-1,_))/2}function l(e,s,_){_==null&&(_=1);const p=Math.floor(s),f=[N(p,_,e),N(p+1,_,e)],v=[u(p,e),u(p+1,e)];s-=p;const d=s*s,R=s*d;return(2*R-3*d+1)*v[0]+(R-2*d+s)*f[0]+(-2*R+3*d)*v[1]+(R-d)*f[1]}}function G(){console.log("app start"),h.start()}function g(){console.log("app stop"),h.stop()}function B(){h.stop(),h.destroy()}const at={__name:"VueMouseTrail",setup(t,{expose:n}){n();const i=x(null),a=c=>{console.log("handleAppIntersection");const{isIntersecting:U}=c;U?G():g()},r=()=>{console.log("handleVisibilityChange"),document.visibilityState==="visible"?i.current.getBoundingClientRect().top+window.innerHeight>0&&G():g()};H(()=>{console.log(i.value);const c={root:null,rootMargin:"0px",threshold:.01};T.init(c),T.observe(i.value,a),E(i.value),document.addEventListener("visibilitychange",r)}),V(()=>{document.removeEventListener("visibilitychange",r),T.unobserve(i.current),B()});const o={app:i,handleAppIntersection:a,handleVisibilityChange:r,ref:x,onMounted:H,onUnmounted:V,get initTrail(){return E},get start(){return G},get stop(){return g},get destroy(){return B},get IntersectionHandler(){return T}};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}},ct={ref:"app",class:"flex grow pr-2 h-96"};function It(t,n,i,a,r,o){return ot(),it("div",ct,null,512)}const _t=nt(at,[["render",It]]);export{_t as default};