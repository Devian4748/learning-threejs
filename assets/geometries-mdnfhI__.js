import{S as w,b as u,c as h,M as m,a as f,A as b,P as p,W as g}from"./three.module-VmDlrP2c.js";/* empty css              */import{O as x}from"./OrbitControls-04S4mhaz.js";const n=document.querySelector("canvas.webgl"),r=new w,F=500,s=new Float32Array(F*3*3);s.forEach((l,d)=>{s[d]=(Math.random()-.5)*3});const E=new u(s,3),o=new h;o.setAttribute("position",E);const A=new m({color:16711680,wireframe:!0}),M=new f(o,A);r.add(M);const k=new b(3);r.add(k);const e={width:window.innerWidth,height:window.innerHeight},t=new p(75,e.width/e.height);t.position.z=3;r.add(t);const c=new x(t,n);c.enableDamping=!0;const i=new g({canvas:n});i.setSize(e.width,e.height);i.setPixelRatio(Math.min(window.devicePixelRatio,2));i.render(r,t);const a=()=>{c.update(),i.render(r,t),window.requestAnimationFrame(a)};a();window.addEventListener("resize",()=>{e.width=window.innerWidth,e.height=window.innerHeight,t.aspect=e.width/e.height,t.updateProjectionMatrix(),i.setSize(e.width,e.height),i.setPixelRatio(Math.min(window.devicePixelRatio,2))});window.addEventListener("dblclick",()=>{document.fullscreenElement||document.webkitFullscreenElement?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen&&document.webkitExitFullscreen():n.requestFullscreen?n.requestFullscreen():n.requestWebkitFullscreen&&n.requestWebkitFullscreen()});
//# sourceMappingURL=geometries-mdnfhI__.js.map