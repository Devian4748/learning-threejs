import{D as va,H as q,F as Z,e as Y,f as za,g as Ta,T as Oa,d as M,N as wa,S as Va,E as Wa,h as qa,i as Ya,j as Sa,a as aa,k as $a,l as Xa,m as Ja,n as Ka,P as Qa,W as Za,M as ae,o as ee,p as te,q as re,r as ne,s as oe,t as se,u as ie,L as ce,C as de}from"./three.module-VmDlrP2c.js";/* empty css              */import{O as le}from"./OrbitControls-04S4mhaz.js";import{G as he}from"./lil-gui.esm-J1oMuMs2.js";class me extends va{constructor(T){super(T),this.type=q}parse(T){const g=function(e,n){switch(e){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(n||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(n||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(n||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(n||""))}},Ia=`
`,pa=function(e,n,o){n=n||1024;let m=e.pos,h=-1,t=0,p="",s=String.fromCharCode.apply(null,new Uint16Array(e.subarray(m,m+128)));for(;0>(h=s.indexOf(Ia))&&t<n&&m<e.byteLength;)p+=s,t+=s.length,m+=128,s+=String.fromCharCode.apply(null,new Uint16Array(e.subarray(m,m+128)));return-1<h?(o!==!1&&(e.pos+=t+h+1),p+s.slice(0,h)):!1},ka=function(e){const n=/^#\?(\S+)/,o=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,d=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,m=/^\s*FORMAT=(\S+)\s*$/,h=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,t={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let p,s;for((e.pos>=e.byteLength||!(p=pa(e)))&&g(1,"no header found"),(s=p.match(n))||g(3,"bad initial token"),t.valid|=1,t.programtype=s[1],t.string+=p+`
`;p=pa(e),p!==!1;){if(t.string+=p+`
`,p.charAt(0)==="#"){t.comments+=p+`
`;continue}if((s=p.match(o))&&(t.gamma=parseFloat(s[1])),(s=p.match(d))&&(t.exposure=parseFloat(s[1])),(s=p.match(m))&&(t.valid|=2,t.format=s[1]),(s=p.match(h))&&(t.valid|=4,t.height=parseInt(s[1],10),t.width=parseInt(s[2],10)),t.valid&2&&t.valid&4)break}return t.valid&2||g(3,"missing format specifier"),t.valid&4||g(3,"missing image size specifier"),t},Ca=function(e,n,o){const d=n;if(d<8||d>32767||e[0]!==2||e[1]!==2||e[2]&128)return new Uint8Array(e);d!==(e[2]<<8|e[3])&&g(3,"wrong scanline width");const m=new Uint8Array(4*n*o);m.length||g(4,"unable to allocate buffer space");let h=0,t=0;const p=4*d,s=new Uint8Array(4),N=new Uint8Array(p);let Ma=o;for(;Ma>0&&t<e.byteLength;){t+4>e.byteLength&&g(1),s[0]=e[t++],s[1]=e[t++],s[2]=e[t++],s[3]=e[t++],(s[0]!=2||s[1]!=2||(s[2]<<8|s[3])!=d)&&g(3,"bad rgbe scanline format");let v=0,R;for(;v<p&&t<e.byteLength;){R=e[t++];const E=R>128;if(E&&(R-=128),(R===0||v+R>p)&&g(3,"bad scanline data"),E){const D=e[t++];for(let xa=0;xa<R;xa++)N[v++]=D}else N.set(e.subarray(t,t+R),v),v+=R,t+=R}const Ua=d;for(let E=0;E<Ua;E++){let D=0;m[h]=N[E+D],D+=d,m[h+1]=N[E+D],D+=d,m[h+2]=N[E+D],D+=d,m[h+3]=N[E+D],h+=4}Ma--}return m},Na=function(e,n,o,d){const m=e[n+3],h=Math.pow(2,m-128)/255;o[d+0]=e[n+0]*h,o[d+1]=e[n+1]*h,o[d+2]=e[n+2]*h,o[d+3]=1},Ha=function(e,n,o,d){const m=e[n+3],h=Math.pow(2,m-128)/255;o[d+0]=Y.toHalfFloat(Math.min(e[n+0]*h,65504)),o[d+1]=Y.toHalfFloat(Math.min(e[n+1]*h,65504)),o[d+2]=Y.toHalfFloat(Math.min(e[n+2]*h,65504)),o[d+3]=Y.toHalfFloat(1)},V=new Uint8Array(T);V.pos=0;const U=ka(V),ga=U.width,ua=U.height,W=Ca(V.subarray(V.pos),ga,ua);let K,Q,C;switch(this.type){case Z:C=W.length/4;const e=new Float32Array(C*4);for(let o=0;o<C;o++)Na(W,o*4,e,o*4);K=e,Q=Z;break;case q:C=W.length/4;const n=new Uint16Array(C*4);for(let o=0;o<C;o++)Ha(W,o*4,n,o*4);K=n,Q=q;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:ga,height:ua,data:K,header:U.string,gamma:U.gamma,exposure:U.exposure,type:Q}}setDataType(T){return this.type=T,this}load(T,y,da,la){function ha(g,ma){switch(g.type){case Z:case q:g.colorSpace=za,g.minFilter=Ta,g.magFilter=Ta,g.generateMipmaps=!1,g.flipY=!0;break}y&&y(g,ma)}return super.load(T,ha,da,la)}}const z=new ce;z.onProgress=(c,T,y)=>{console.log("loading progress",c,T,y)};z.onStart=()=>{console.log("loading start")};z.onLoad=()=>{console.log("loading end")};z.onError=c=>{console.log("loading error",c)};const x=new Oa(z),ea=x.load("/learning-threejs/textures/door/color.jpg"),ta=x.load("/learning-threejs/textures/door/alpha.jpg"),ra=x.load("/learning-threejs/textures/door/ambientOcclusion.jpg"),na=x.load("/learning-threejs/textures/door/height.jpg"),oa=x.load("/learning-threejs/textures/door/metalness.jpg"),sa=x.load("/learning-threejs/textures/door/normal.jpg"),ia=x.load("/learning-threejs/textures/door/roughness.jpg"),X=x.load("/learning-threejs/textures/gradients/3.jpg"),J=x.load("/learning-threejs/textures/gradients/5.jpg"),_a=x.load("/learning-threejs/textures/matcaps/1.png"),ya=x.load("/learning-threejs/textures/matcaps/2.png"),Ra=x.load("/learning-threejs/textures/matcaps/3.png"),Ea=x.load("/learning-threejs/textures/matcaps/4.png"),Da=x.load("/learning-threejs/textures/matcaps/5.png"),ba=x.load("/learning-threejs/textures/matcaps/6.png"),Ga=x.load("/learning-threejs/textures/matcaps/7.png"),La=x.load("/learning-threejs/textures/matcaps/8.png");ea.colorSpace=M;ta.colorSpace=M;ra.colorSpace=M;na.colorSpace=M;oa.colorSpace=M;sa.colorSpace=M;ia.colorSpace=M;X.colorSpace=M;J.colorSpace=M;_a.colorSpace=M;ya.colorSpace=M;Ra.colorSpace=M;Ea.colorSpace=M;Da.colorSpace=M;ba.colorSpace=M;Ga.colorSpace=M;La.colorSpace=M;X.magFilter=wa;J.magFilter=wa;X.generateMipmaps=!1;J.generateMipmaps=!1;const Pa=document.querySelector("canvas.webgl");document.querySelector("main");const P=new Va,pe=new me;pe.load("/learning-threejs/textures/environmentMap/2k.hdr",c=>{c.mapping=Wa,P.background=c,P.environment=c});const ja=new qa(16777215,1);P.add(ja);const b=new Ya(16777215,30);b.position.x=2;b.position.y=3;b.position.z=4;P.add(b);const k=new Sa;k.roughness=0;k.metalness=0;k.transmission=.9;k.iridescence=1;const B=new aa(new $a(.5,64,64),k.clone());B.position.x=-1.5;const F=new aa(new Xa(1,1,100,100),k.clone());F.material.side=Ja;const f=new aa(new Ka(.3,.2,64,64),k.clone());f.position.x=1.5;P.add(B,F,f);const S={width:window.innerWidth,height:window.innerHeight},I=new Qa(75,S.width/S.height);I.position.z=3;P.add(I);const Aa=new le(I,Pa);Aa.enableDamping=!0;const H=new Za({canvas:Pa});H.setSize(S.width,S.height);H.setPixelRatio(Math.min(window.devicePixelRatio,2));H.render(P,I);const ge=new de,Ba=()=>{const c=ge.getElapsedTime();B.rotation.y=.1*c,F.rotation.y=.1*c,f.rotation.y=.1*c,B.rotation.x=-.15*c,F.rotation.x=-.15*c,f.rotation.x=-.15*c,Aa.update(),H.render(P,I),window.requestAnimationFrame(Ba)};Ba();window.addEventListener("resize",()=>{S.width=window.innerWidth,S.height=window.innerHeight,I.aspect=S.width/S.height,I.updateProjectionMatrix(),H.setSize(S.width,S.height),H.setPixelRatio(Math.min(window.devicePixelRatio,2))});const j=new he;j.add(ja,"visible").name("light");const O=j.addFolder("point light");O.add(b.position,"x").min(-5).max(5).step(1);O.add(b.position,"y").min(-5).max(5).step(1);O.add(b.position,"z").min(-5).max(5).step(1);O.add(b,"intensity").min(1).max(100).step(1);O.add(b,"visible");const a={},G=j.addFolder("material"),ue=new ae,Me=new ee,L=new te,xe=new re,Te=new ne,$=new oe,ca=new se,u=new ie,r=new Sa;u.roughness=.5;u.metalness=.5;u.displacementScale=.071;r.roughness=.5;r.metalness=.5;r.displacementScale=.071;r.sheenColor.set(1,1,1);r.iridescenceThicknessRange=[100,800];const _=c=>{B.material.dispose(),F.material.dispose(),f.material.dispose(),B.material=c,F.material=c,f.material=c},i=(c,T,y)=>{_(c),B.material[y]=T,F.material[y]=T,f.material[y]=T};a.changePhongMaterial=()=>{_($)};a.changeBasicMaterial=()=>{_(ue)};a.changeNormalMaterial=()=>{_(Me)};a.changeMatcapMaterial=()=>{_(L)};a.changeDepthMaterial=()=>{_(xe)};a.changeLamberMaterial=()=>{_(Te)};a.changeToonMaterial=()=>{_(ca)};a.changeStandardMaterial=()=>{_(u)};a.changePhysicalMaterial=()=>{_(r)};G.add(a,"changePhongMaterial").name("MeshPhongMaterial");G.add(a,"changeBasicMaterial").name("MeshBasicMaterial");G.add(a,"changeNormalMaterial").name("MeshNormalMaterial");G.add(a,"changeMatcapMaterial").name("MeshMatcapMaterial");G.add(a,"changeDepthMaterial").name("MeshDepthMaterial");G.add(a,"changeLamberMaterial").name("MeshLamberMaterial");G.add(a,"changeToonMaterial").name("MeshToonMaterial");G.add(a,"changeStandardMaterial").name("MeshStandardMaterial");G.add(a,"changePhysicalMaterial").name("MeshPhysicalMaterial");const A=j.addFolder("matcap material");a.changeMatcapTexture1=()=>{i(L,_a,"matcap")};a.changeMatcapTexture2=()=>{i(L,ya,"matcap")};a.changeMatcapTexture3=()=>{i(L,Ra,"matcap")};a.changeMatcapTexture4=()=>{i(L,Ea,"matcap")};a.changeMatcapTexture5=()=>{i(L,Da,"matcap")};a.changeMatcapTexture6=()=>{i(L,ba,"matcap")};a.changeMatcapTexture7=()=>{i(L,Ga,"matcap")};a.changeMatcapTexture8=()=>{i(L,La,"matcap")};A.add(a,"changeMatcapTexture1").name("matcap1");A.add(a,"changeMatcapTexture2").name("matcap2");A.add(a,"changeMatcapTexture3").name("matcap3");A.add(a,"changeMatcapTexture4").name("matcap4");A.add(a,"changeMatcapTexture5").name("matcap5");A.add(a,"changeMatcapTexture6").name("matcap6");A.add(a,"changeMatcapTexture7").name("matcap7");A.add(a,"changeMatcapTexture8").name("matcap8");const Fa=j.addFolder("phong material");Fa.add($,"shininess").min(0).max(100).step(1);Fa.addColor($,"specular").onChange(c=>{$.specular.set(c)});const fa=j.addFolder("toon material");a.changeGradientTexture3=()=>{i(ca,X,"gradientMap")};a.changeGradientTexture5=()=>{i(ca,J,"gradientMap")};fa.add(a,"changeGradientTexture3").name("gradient3");fa.add(a,"changeGradientTexture5").name("gradient5");const w=j.addFolder("standard material");a.changeStandardDoorColorTexture=()=>{i(u,ea,"map")};a.changeStandardDoorAmbientOcculationTexture=()=>{i(u,ra,"aoMap")};a.changeStandardDoorHeightTexture=()=>{i(u,na,"displacementMap")};a.changeStandardDoorMetalnessTexture=()=>{i(u,oa,"metalnessMap")};a.changeStandardDoorRoughnessTexture=()=>{i(u,ia,"roughnessMap")};a.changeStandardDoorNormalTexture=()=>{i(u,sa,"normalMap")};a.changeStandardDoorAlphaTexture=()=>{i(u,ta,"alphaMap"),u.transparent=!0};w.add(u,"metalness").min(0).max(1).step(.01);w.add(u,"roughness").min(0).max(1).step(.01);w.add(a,"changeStandardDoorColorTexture").name("door color");w.add(a,"changeStandardDoorAmbientOcculationTexture").name("door ambient occulation");w.add(a,"changeStandardDoorHeightTexture").name("door height");w.add(u,"displacementScale").min(0).max(1).step(.001);w.add(a,"changeStandardDoorMetalnessTexture").name("door metalness");w.add(a,"changeStandardDoorRoughnessTexture").name("door roughness");w.add(a,"changeStandardDoorNormalTexture").name("door normal");w.add(a,"changeStandardDoorAlphaTexture").name("door alpha");w.add(u.normalScale,"x").min(0).max(1).step(.01);w.add(u.normalScale,"y").min(0).max(1).step(.01);const l=j.addFolder("physical material");a.changePhysicalDoorColorTexture=()=>{i(r,ea,"map")};a.changePhysicalDoorAmbientOcculationTexture=()=>{i(r,ra,"aoMap")};a.changePhysicalDoorHeightTexture=()=>{i(r,na,"displacementMap")};a.changePhysicalDoorMetalnessTexture=()=>{i(r,oa,"metalnessMap")};a.changePhysicalDoorRoughnessTexture=()=>{i(r,ia,"roughnessMap")};a.changePhysicalDoorNormalTexture=()=>{i(r,sa,"normalMap")};a.changePhysicalDoorAlphaTexture=()=>{i(r,ta,"alphaMap"),r.transparent=!0};l.add(r,"metalness").min(0).max(1).step(.01);l.add(r,"roughness").min(0).max(1).step(.01);l.add(a,"changePhysicalDoorColorTexture").name("door color");l.add(a,"changePhysicalDoorAmbientOcculationTexture").name("door ambient occulation");l.add(a,"changePhysicalDoorHeightTexture").name("door height");l.add(r,"displacementScale").min(0).max(1).step(.001);l.add(a,"changePhysicalDoorMetalnessTexture").name("door metalness");l.add(a,"changePhysicalDoorRoughnessTexture").name("door roughness");l.add(a,"changePhysicalDoorNormalTexture").name("door normal");l.add(a,"changePhysicalDoorAlphaTexture").name("door alpha");l.add(r.normalScale,"x").min(0).max(1).step(.01);l.add(r.normalScale,"y").min(0).max(1).step(.01);l.add(r,"clearcoat").min(0).max(1).step(.01);l.add(r,"clearcoatRoughness").min(0).max(1).step(.01);l.add(r,"sheen").min(0).max(1).step(.01);l.add(r,"sheenRoughness").min(0).max(1).step(.01);l.add(r,"iridescence").min(0).max(1).step(.01);l.add(r,"iridescenceIOR").min(0).max(2.33).step(.01);l.add(r.iridescenceThicknessRange,"1").min(100).max(800).step(1);l.add(r,"transmission").min(0).max(1).step(.01);l.add(r,"ior").min(0).max(2.33).step(.01);l.add(r,"thickness").min(0).max(1).step(.01);
//# sourceMappingURL=materials-_v0D4zA6.js.map