import{S as o,B as r,M as s,a,P as d,W as h}from"./three.module-yj3wp42U.js";/* empty css              */const w=document.querySelector("canvas.webgl");document.querySelector("main");const i=new o,c=new r(1,1,1),m=new s({color:16711680}),g=new a(c,m);i.add(g);const e={width:window.outerWidth,height:window.outerHeight},t=new d(75,e.width/e.height);t.position.z=3;i.add(t);const n=new h({canvas:w});n.setSize(e.width,e.height);n.render(i,t);window.addEventListener("resize",()=>{e.width=window.outerWidth,e.height=window.outerHeight,t.aspect=e.width/e.height,t.updateProjectionMatrix(),n.setSize(e.width,e.height)});
//# sourceMappingURL=firstProject-MVIOfCjD.js.map