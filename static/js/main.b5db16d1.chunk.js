(this.webpackJsonptodolistv2=this.webpackJsonptodolistv2||[]).push([[0],{15:function(t,e,o){},17:function(t,e,o){"use strict";o.r(e);var n=o(2),c=o.n(n),i=o(8),r=o.n(i),a=(o(15),o(6)),s=o(3),u=o(1);var d=function(t){var e=Object(n.useState)(t.edit?t.edit.value:""),o=Object(s.a)(e,2),c=o[0],i=o[1],r=Object(n.useRef)(null);Object(n.useEffect)((function(){r.current.focus()}));var a=function(t){i(t.target.value)},d=function(e){e.preventDefault(),t.onSubmit({id:Math.floor(1e4*Math.random()),text:c}),i("")};return Object(u.jsx)("form",{onSubmit:d,className:"todo-form",children:t.edit?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",{placeholder:"Update your item",value:c,onChange:a,name:"text",ref:r,className:"todo-input edit"}),Object(u.jsx)("button",{onClick:d,className:"todo-button edit",children:"Update"})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",{placeholder:"Add Your Work Here",value:c,onChange:a,name:"text",className:"todo-input",ref:r}),Object(u.jsx)("button",{onClick:d,className:"todo-button",children:"Add ToDo"})]})})},l=o(9),j=o(10),b=function(t){var e=t.todos,o=t.completeTodo,c=t.removeTodo,i=t.updateTodo,r=Object(n.useState)({id:null,value:""}),a=Object(s.a)(r,2),b=a[0],m=a[1];return b.id?Object(u.jsx)(d,{edit:b,onSubmit:function(t){i(b.id,t),m({id:null,value:""})}}):e.map((function(t,e){return Object(u.jsxs)("div",{className:t.isComplete?"todo-row complete":"todo-row",children:[Object(u.jsx)("div",{onClick:function(){return o(t.id)},children:t.text},t.id),Object(u.jsxs)("div",{className:"icons",children:[Object(u.jsx)(l.a,{onClick:function(){return c(t.id)},className:"delete-icon"}),Object(u.jsx)(j.a,{onClick:function(){return m({id:t.id,value:t.text})},className:"edit-icon"})]})]},e)}))};var m=function(){var t=Object(n.useState)([]),e=Object(s.a)(t,2),o=e[0],c=e[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"ToDo List  For You"}),Object(u.jsx)(d,{onSubmit:function(t){var e;if(t.text&&!/^\s*$/.test(t.text)){var n=[t].concat(Object(a.a)(o));c(n),(e=console).log.apply(e,Object(a.a)(o))}}}),Object(u.jsx)(b,{todos:o,completeTodo:function(t){var e=o.map((function(e){return e.id===t&&(e.isComplete=!e.isComplete),e}));c(e)},removeTodo:function(t){var e=Object(a.a)(o).filter((function(e){return e.id!==t}));c(e)},updateTodo:function(t,e){e.text&&!/^\s*$/.test(e.text)&&c((function(o){return o.map((function(o){return o.id===t?e:o}))}))}})]})};var f=function(){return Object(u.jsx)("div",{className:"todo-app",children:Object(u.jsx)(m,{})})};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.b5db16d1.chunk.js.map