(this.webpackJsonpdecider=this.webpackJsonpdecider||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),i=n(7),a=n.n(i),r=(n(12),n(4)),l=n(2),o=(n(13),n(0));function d(e){var t=e.listContainer,n=e.setListContainer,s=e.selectedItem,i=e.setCount,a=e.count,d=Object(c.useState)(""),j=Object(l.a)(d,2),u=j[0],b=j[1],m=function(e){e.preventDefault(),i(a+1),b("");var c=u.trim().toLowerCase();""===u?(alert("Please enter an item!"),i(a)):t.find((function(e){return e===c}))?(alert("duplicate entry, please enter a new item"),i(a)):c.length>0&&n([].concat(Object(r.a)(t),[u.trim()]))};return Object(o.jsxs)("div",{className:"Add",children:["Choose from: ",Object(o.jsxs)("span",{children:[a," "]}),"items",Object(o.jsxs)("form",{onSubmit:m,id:"add-item",children:[Object(o.jsx)("input",{id:"add-item",value:u,onChange:function(e){return b(e.target.value)},placeholder:"Add an item"}),s,Object(o.jsx)("button",{id:"submit-item",onClick:m,children:"Add"})]})]})}var j=function(e){var t=e.listContainer,n=(e.setListContainer,e.setSelectedItem,e.selectedItem,e.setCount,e.count,e.completeTask),c=(e.newItem,e.setNewItem,t.map((function(e,t){return Object(o.jsx)("li",{className:"borderRed",children:Object(o.jsxs)("div",{className:"item",children:[t+1,". ",e,Object(o.jsx)("button",{onClick:function(){n(t)},children:"del"})]})},t)})));return Object(o.jsx)("div",{className:"scroll",children:Object(o.jsx)("ol",{id:"display-list",children:c})})};var u=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(""),a=Object(l.a)(i,2),u=a[0],b=a[1],m=Object(c.useState)(0),O=Object(l.a)(m,2),h=O[0],x=O[1],f=Object(c.useState)(" Add At Least Two Items"),C=Object(l.a)(f,2),p=C[0],v=(C[1],Object(c.useState)("Add At Least Two Items")),g=Object(l.a)(v,2),I=g[0],S=g[1],k=function(e){var t=Object(r.a)(n);t.splice(e,1),s(t),x(h-1)};return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("header",{children:Object(o.jsx)("h1",{children:"DECIDR"})}),Object(o.jsx)(d,{listContainer:n,setListContainer:s,completeTask:k,setCount:x,count:h}),Object(o.jsxs)("main",{children:[n.length<2&&Object(o.jsx)("div",{className:"item-warning",children:I}),u.length>0?Object(o.jsxs)("p",{id:"selected",children:[" ",u," "]}):Object(o.jsx)(j,{listContainer:n,setListContainer:s,selectedItem:u,setSelectedItem:b,setCount:x,completeTask:k})]}),Object(o.jsx)("footer",{children:Object(o.jsxs)("div",{className:"btn",children:[Object(o.jsx)("button",{id:"btn-select",onClick:function(){return function(){var e=Math.floor(Math.random()*n.length);b(n.length>1?n[e]:p),S("")}()},type:"text",children:"Selected Item"}),Object(o.jsx)("button",{onClick:function(){return function(e){var t=Object(r.a)(n);t.splice(e),s(t),b(""),x(0),S(p)}()},type:"text",children:"Clear All"})]})})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),i(e),a(e)}))};a.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.214026fe.chunk.js.map