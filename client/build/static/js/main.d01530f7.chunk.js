(this.webpackJsonpanimaltherapy=this.webpackJsonpanimaltherapy||[]).push([[0],{13:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(6),r=a.n(o),c=(a(13),a(14),a(15),a(4)),l=a(2),d=a(7),s=a.n(d),u=["image","hosted:video","rich:video"];var m=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)(""),d=Object(l.a)(r,2),m=d[0],h=d[1],p=Object(n.useState)(0),f=Object(l.a)(p,2),g=f[0],y=f[1],b=Object(n.useState)(!1),v=Object(l.a)(b,2),w=v[0],E=v[1],j=function(){w||(E(!0),fetch("https://www.reddit.com/r/aww/top.json?limit=20&t=hour&after=".concat(m,"&count=").concat(g)).then((function(e){return e.json()})).then((function(e){h(e.data.after),y(g+e.data.dist),o([].concat(Object(c.a)(a),Object(c.a)(e.data.children.filter((function(e){return u.includes(e.data.post_hint)})).map((function(e){var t,a;switch(e.data.post_hint){case"image":t=e.data.url,a="image";break;case"rich:video":e.data.media.oembed&&(t=e.data.media.oembed.thumbnail_url,a="image");break;case"hosted:video":t=e.data.media.reddit_video.fallback_url,a="video";break;default:return null}return{title:e.data.title,url:"https://reddit.com".concat(e.data.permalink),id:e.data.id,type:a,media:t}})).filter((function(e){return null!==e}))))),E(!1)})).catch((function(e){console.log(e),E(!1)})))};return Object(n.useEffect)((function(){j()}),[]),i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{onYReachEnd:j,style:{width:"100%",display:"flex",flexDirection:"row",justifyContent:"center",flexWrap:"wrap",zIndex:1e3}},a.map((function(e){return i.a.createElement("div",{style:{display:"flex",justifyContent:"center",padding:20,marginRight:11,position:"relative"},key:e.id},i.a.createElement("div",{style:{position:"absolute",left:20,right:20,textAlign:"center",marginHorizontal:20},className:"title"},i.a.createElement("span",null,e.title.length>75?"":e.title)),"image"===e.type?i.a.createElement("img",{src:e.media,style:{maxWidth:"90vw",maxHeight:"90vh",width:"auto"},alt:e.id}):i.a.createElement("video",{src:e.media,style:{maxWidth:"90vw",maxHeight:"90vh",width:"auto"},id:e.id}),"image"!==e.type?i.a.createElement("div",{style:{position:"absolute",left:0,top:0,right:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},title:"Click to play/pause",onClick:function(){return function(e){var t=document.querySelector("#".concat(e));t.paused?(t.play.call(t),document.querySelector("#".concat(e,"_play")).classList.add("paused")):(t.pause.call(t),document.querySelector("#".concat(e,"_play")).classList.remove("paused"))}(e.id)}},document.getElementById(e.id)&&document.getElementById(e.id).paused?i.a.createElement("img",{src:"/play.png",alt:"play",className:"play",style:{height:100,width:100},id:"".concat(e.id,"_play")}):null):null)})),i.a.createElement("a",{style:{position:"fixed",left:0,right:0,bottom:5,zIndex:100},className:"copyright",href:"https://github.com/ngregrichardson/AnimalTherapy",target:"_blank",rel:"noopener noreferrer"},"Made with ",i.a.createElement("span",{role:"img"},"\u2764"),"\ufe0ffor Dani")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(21)}},[[8,1,2]]]);
//# sourceMappingURL=main.d01530f7.chunk.js.map