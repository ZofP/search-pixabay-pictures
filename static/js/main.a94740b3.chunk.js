(this["webpackJsonpquotes-generator"]=this["webpackJsonpquotes-generator"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(3),c=a.n(i),l=(a(14),a(1)),u=a.n(l),s=a(4),o=a(5),d=a(6),h=a(8),m=a(7),f=(a(16),function(e){var t=e.picture,a=t.id,r=t.previewURL,i=t.tags,c=t.webformatURL,l=t.user,u=e.showPicture,s=i.split(",").filter(Boolean);return n.a.createElement("div",{className:"card-container"},n.a.createElement("div",{className:"img-container",onClick:function(e){return u({direction:!1,url:c,id:a,event:e})}},n.a.createElement("img",{src:r,alt:"pixabay"})),n.a.createElement("div",{className:"tags"},n.a.createElement("h4",null,"tags:"),n.a.createElement("ul",null,s.map((function(e){return n.a.createElement("li",{key:e},e)})))),n.a.createElement("p",null,"user: ",l))}),p=(a(17),function(e){var t=e.pictures,a=e.showPicture;return n.a.createElement("div",{className:"card-list"},t.map((function(e){return n.a.createElement(f,{key:e.id,picture:e,showPicture:a})})))}),g=(a(18),function(e){var t=e.placeholder,a=e.handleChange;return n.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:a})}),v=(a(19),function(e){var t=e.url,a=e.hidePicture,r=e.id,i=e.handleClickArrow;return n.a.createElement("div",{className:"enlarged-picture-component-container",onClick:function(e){return a({url:t,id:r,event:e})}},n.a.createElement("div",{className:"flexbox-container"},n.a.createElement("div",{className:"arrow left-arrow",id:r,onClick:function(e){return i({direction:"left",url:t,id:r,event:e})}},"\u2b9c"),n.a.createElement("div",{className:"big-img-container"},n.a.createElement("img",{className:"big-img",id:r,src:t,alt:"big-pixabay"})),n.a.createElement("div",{className:"arrow right-arrow",id:r,onClick:function(e){return i({direction:"right",url:t,id:r,event:e})}},"\u2b9e")))}),w=(a(20),function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.handleClick=function(t){var a=t.direction,r=t.url,n=t.id,i=t.event,c=e.state,l=c.pictures,u=c.enlargedPicture.show,s=l.map((function(e){return e.id})),o=l[s.indexOf(n)];if(u)if(Number(i.target.id)!==Number(n))e.setState({enlargedPicture:{show:!u,url:"",id:null}});else switch(a){case"left":var d=0!==s.indexOf(n)?l[s.indexOf(n)-1]:o;e.setState({enlargedPicture:{show:!0,url:d.webformatURL,id:d.id}});break;case"right":var h=s.indexOf(n)<=s.length?l[s.indexOf(n)+1]:o;e.setState({enlargedPicture:{show:!0,url:h.webformatURL,id:h.id}});break;default:return}else e.setState({enlargedPicture:{show:!u,url:r,id:n}})},e.state={pictures:[],searchField:"",enlargedPicture:{show:!1,url:"",id:null}},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(s.a)(u.a.mark((function e(){var t,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"17858990-0d6c088ba5028789850f3a8af",t="https://pixabay.com/api/?key=".concat("17858990-0d6c088ba5028789850f3a8af","&safesearch=true&per_page=200&image_type=photo"),e.next=4,fetch(t);case 4:return a=e.sent,e.next=7,a.json();case 7:r=e.sent,this.setState({pictures:r.hits});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.pictures,a=e.searchField,r=e.enlargedPicture,i=r.show,c=r.url,l=r.id,u=t.filter((function(e){return e.tags.toLowerCase().includes(a.toLowerCase())}));return n.a.createElement("div",{className:"App"},n.a.createElement("h1",null,"Search Pictures"),n.a.createElement(g,{placeholder:"search pictures by tags",handleChange:this.handleChange}),n.a.createElement(p,{pictures:u,showPicture:this.handleClick}),i&&n.a.createElement(v,{id:l,url:c,show:i,hidePicture:this.handleClick,handleClickArrow:this.handleClick}))}}]),a}(r.Component));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(w,null)),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.a94740b3.chunk.js.map