(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a(21)},18:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),s=a.n(o),c=a(10),l=a(6),i=a(9),u=a(1),m=a(2),f=a(4),d=a(3),h=a(5),b=function(e){var t=e.done,a=e.todo;return r.a.createElement("div",{className:"columns is-vcentered"},r.a.createElement("div",{className:"column"},r.a.createElement("h1",{className:"title is-1"}," Exciting Todo - List ")),r.a.createElement("div",{className:"column is-narrow is-size-3 has-text-grey is-paddingless"},a," more to do, ",t," done"))},k=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"content has-text-centered"},r.a.createElement("p",null,r.a.createElement("strong",null,"Exciting Todo")," by ",r.a.createElement("a",{href:"https://github.com/rayzstar4eg"},"Alexey L"),".")))},g=a(11),p=(a(18),function(e){function t(){return Object(u.a)(this,t),Object(f.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.taskLabel,a=e.done,n=e.hot,o=e.onTaskDelete,s=e.onToggleDone,c=e.onToggleHot,l="todo-list-item__label",i="button is-warning";return n?l+=" hot":i+=" is-outlined",a&&(l+=" done"),r.a.createElement("div",{className:"todo-list-item"},r.a.createElement("span",{className:l,onClick:s},t),r.a.createElement("span",{className:"buttons"},r.a.createElement("button",{className:"button is-danger is-outlined",onClick:o},r.a.createElement("i",{className:"fas fa-trash"})),r.a.createElement("button",{className:i,onClick:c},r.a.createElement("i",{className:"fas fa-star"}))))}}]),t}(r.a.Component)),v=(a(19),function(e){var t=e.tasks,a=e.onTaskDelete,n=e.onToggleDone,o=e.onToggleHot,s=t.map(function(e){var t=e.id,s=Object(g.a)(e,["id"]);return r.a.createElement("li",{className:"panel-block",key:t},r.a.createElement(p,Object.assign({},s,{onTaskDelete:function(){return a(t)},onToggleDone:function(){return n(t)},onToggleHot:function(){return o(t)}})))});return r.a.createElement("ul",{className:"panel todo-list"},s)}),E=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(f.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).buttonsData=[{name:"all",label:"All"},{name:"active",label:"Active"},{name:"done",label:"Done"}],a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.buttonsData.map(function(t){var a=t.name,n=t.label,o=a===e.props.activeFilter?"button is-link":"button";return r.a.createElement("button",{className:o,key:a,onClick:function(){return e.props.onFiltered(a)}},n)});return r.a.createElement("div",{className:"buttons has-addons"},t)}}]),t}(r.a.Component),N=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(f.a)(this,Object(d.a)(t).call(this))).onSearchChange=function(t){e.props.onSearch(t.target.value)},e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column"},r.a.createElement("input",{className:"input",type:"text",placeholder:"Search...",onChange:this.onSearchChange})),r.a.createElement("div",{className:"column is-narrow has-text-right"},r.a.createElement(E,{onFiltered:this.props.onFiltered,activeFilter:this.props.activeFilter})))}}]),t}(r.a.Component),O=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(f.a)(this,Object(d.a)(t).call(this))).state={taskLabel:""},e.onNewTaskChange=function(t){e.setState({taskLabel:t.target.value})},e.onFormSubmit=function(t){t.preventDefault(),e.props.onTaskAdd(e.state.taskLabel),e.setState({taskLabel:""})},e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"new-task-form",onSubmit:this.onFormSubmit},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column"},r.a.createElement("input",{className:"input",type:"text",placeholder:"New task ...",onChange:this.onNewTaskChange,value:this.state.taskLabel})),r.a.createElement("div",{className:"column is-narrow"},r.a.createElement("button",{className:"button is-black is-outlined"},r.a.createElement("i",{className:"fas fa-plus"})))))}}]),t}(r.a.Component),j=(a(20),function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(f.a)(this,Object(d.a)(t).call(this))).mId=100,e.state={tasks:[e.createTask("Learn React"),e.createTask("Drink coffee"),e.createTask("Create todo-list using React")],searchLine:"",filterParam:"active"},e.toggleProperty=function(e,t,a){return t.map(function(t){return t.id===e?Object(i.a)({},t,Object(l.a)({},a,!t[a])):t})},e.deleteTask=function(t){e.setState(function(e){return{tasks:e.tasks.filter(function(e){return e.id!==t})}})},e.newTask=function(t){e.setState(function(a){var n=a.tasks;return{tasks:[].concat(Object(c.a)(n),[e.createTask(t)])}})},e.toggleDone=function(t){e.setState(function(a){var n=a.tasks;return{tasks:e.toggleProperty(t,n,"done")}})},e.toggleHot=function(t){e.setState(function(a){var n=a.tasks;return{tasks:e.toggleProperty(t,n,"hot")}})},e.onSearch=function(t){e.setState({searchLine:t})},e.search=function(e,t){return t.filter(function(t){return t.taskLabel.toLowerCase().indexOf(e.toLowerCase())>-1})},e.filter=function(e,t){switch(e){case"all":return t;case"active":return t.filter(function(e){return!e.done});case"done":return t.filter(function(e){return e.done});default:return t}},e.onFiltered=function(t){e.setState({filterParam:t})},e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"createTask",value:function(e){return{taskLabel:e,done:!1,hot:!1,id:this.mId++}}},{key:"render",value:function(){var e=this.state,t=e.tasks,a=e.searchLine,n=e.filterParam,o=this.filter(n,a.length>0?this.search(a,t):t),s=t.filter(function(e){return e.done}).length,c=t.length-s;return r.a.createElement("div",{className:"container app"},r.a.createElement(b,{todo:c,done:s}),r.a.createElement("div",{className:"main"},r.a.createElement(N,{onSearch:this.onSearch,onFiltered:this.onFiltered,activeFilter:n}),r.a.createElement(v,{tasks:o,onTaskDelete:this.deleteTask,onToggleDone:this.toggleDone,onToggleHot:this.toggleHot}),r.a.createElement(O,{onTaskAdd:this.newTask})),r.a.createElement(k,null))}}]),t}(r.a.Component));s.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.a570ff9f.chunk.js.map