(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={btn_delete:"ContactList_btn_delete__fxZvd"}},18:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),s=n.n(r),o=n(9),i=n(2),l=n(3),d=n(5),u=n(4),h=n(11),b=n(7),j=n.n(b),p=n(0),m=function(t){var e=t.state,n=e.name,a=e.number,c=t.handleChange,r=t.addContact;return Object(p.jsxs)("div",{className:j.a.contactFormContainer,children:[Object(p.jsx)("h3",{children:"Name"}),Object(p.jsxs)("form",{onSubmit:r,children:[Object(p.jsx)("input",{onChange:c,type:"text",name:"name",value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"The name can only consist of letters, apostrophes, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc.",required:!0}),Object(p.jsx)("h3",{children:"Number"}),Object(p.jsx)("input",{onChange:c,type:"tel",name:"number",value:a,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"The phone number must be numbers and can contain spaces, dashes, parentheses and can begin with is '+'",required:!0}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{type:"submit",className:j.a.btn,children:"Add contact"})})]})]})},f=n(20),O=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:"",id:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(h.a)({},a,c)),t.setState({id:Object(f.a)()})},t.addContact=function(e){e.preventDefault(),console.log(t.state.id),t.props.contacts.some((function(e){return e.name===t.state.name}))?alert("".concat(t.state.name," is already exist in contacts")):t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:"",id:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsx)(m,{state:this.state,handleChange:this.handleChange,addContact:this.addContact,handleSexRadio:this.handleChange})}}]),n}(c.a.Component),x=n(12),v=n.n(x),g=function(t){var e=t.contacts,n=t.handlerDel;return Object(p.jsx)("div",{children:Object(p.jsx)("ul",{children:e.map((function(t){var e=t.name,a=t.number,c=t.id;return Object(p.jsxs)("li",{children:[e,": ",a,Object(p.jsx)("button",{onClick:n,type:"submit",id:c,className:v.a.btn_delete,children:"delete"})]},c)}))})})},C=function(t){var e=t.handlerFilter,n=t.filter;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("p",{children:"Find contacts by name:"}),Object(p.jsx)("input",{onChange:e,type:"text",value:n})]})},_=n(8),y=n.n(_),S=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.addNewContact=function(e){t.setState((function(t){return{contacts:[].concat(Object(o.a)(t.contacts),[e])}}))},t.delContact=function(e){t.setState((function(t){return{contacts:Object(o.a)(t.contacts.filter((function(t){return t.id!==e.target.id})))}}))},t.changeFilter=function(e){var n=e.currentTarget.value;t.setState({filter:n})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"));console.log(t),t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(t,e){e.contacts!==this.state.contacts&&(localStorage.setItem("contacts",JSON.stringify(this.state.contacts)),console.log(this.state.contacts))}},{key:"render",value:function(){var t=this.getVisibleContacts();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:y.a.App__container,children:[Object(p.jsx)("h1",{children:"Phonebook"}),Object(p.jsx)(O,{contacts:this.state.contacts,onSubmit:this.addNewContact})]}),Object(p.jsxs)("div",{className:y.a.App__container,children:[Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)(C,{handlerFilter:this.changeFilter,filter:this.state.filter}),Object(p.jsx)(g,{contacts:t,handlerDel:this.delContact})]})]})}}]),n}(c.a.Component);s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(S,{})}),document.getElementById("root"))},7:function(t,e,n){t.exports={contactFormContainer:"InputForm_contactFormContainer__3fpo9",btn:"InputForm_btn__3Ikt7"}},8:function(t,e,n){t.exports={App__container:"App_App__container__2-7tG"}}},[[18,1,2]]]);
//# sourceMappingURL=main.f2d95e50.chunk.js.map