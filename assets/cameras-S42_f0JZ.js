import{S as a,A as d,B as w,M as c,a as h,P as m,W as g}from"./three.module-yj3wp42U.js";/* empty css              */import{O as l}from"./OrbitControls-BhWmqJ93.js";const r=document.querySelector("canvas.webgl");document.querySelector("main");const n=new a,p=new d(3);n.add(p);const u=new w(1,1,1),S=new c({color:16711680,wireframe:!0}),f=new h(u,S);n.add(f);const e={width:window.innerWidth,height:window.innerHeight},t=new m(75,e.width/e.height,.1,100);t.position.z=3;n.add(t);const o=new l(t,r);o.enableDamping=!0;const i=new g({canvas:r});i.setSize(e.width,e.height);const s=()=>{o.update(),i.render(n,t),window.requestAnimationFrame(s)};s();window.addEventListener("resize",()=>{e.width=window.innerWidth,e.height=window.innerHeight,t.aspect=e.width/e.height,t.updateProjectionMatrix(),i.setSize(e.width,e.height)});
//# sourceMappingURL=cameras-S42_f0JZ.js.map
