(this.webpackJsonpuserlist=this.webpackJsonpuserlist||[]).push([[0],{22:function(e,t,a){e.exports=a(32)},32:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(13),l=a.n(s),u=a(17),i=a(14),c=a(15),m=a(21),o=a(18),d=a(16),p=a(5),h=a(9),f=a(20),E=a(11),b=a(19),v=a(10),I=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={userInput:"",list:[]},n}return Object(c.a)(a,[{key:"updateInput",value:function(e){this.setState({userInput:e})}},{key:"addItem",value:function(){if(""!==this.state.userInput){var e={id:Math.random(),value:this.state.userInput},t=Object(u.a)(this.state.list);t.push(e),this.setState({list:t,userInput:""})}}},{key:"render",value:function(){var e=this;return r.a.createElement(d.a,null,r.a.createElement(p.a,{style:{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"3rem",fontWeight:"bolder"}},"User List"),r.a.createElement("hr",null),r.a.createElement(p.a,null,r.a.createElement(h.a,{md:{span:5,offset:4}},r.a.createElement(E.a,{className:"mb-3"},r.a.createElement(b.a,{placeholder:"add item . . . ",size:"lg",value:this.state.userInput,onChange:function(t){return e.updateInput(t.target.value)},"aria-label":"add something","aria-describedby":"basic-addon2"}),r.a.createElement(E.a.Append,null,r.a.createElement(f.a,{variant:"dark",size:"lg",onClick:function(){return e.addItem()}},"Submit"))))),r.a.createElement(p.a,null,r.a.createElement(h.a,{md:{span:5,offset:4}},r.a.createElement(v.a,null,this.state.list.map((function(e){return r.a.createElement(v.a.Item,{variant:"dark",action:!0},e.value)}))))))}}]),a}(n.Component);a(31);l.a.render(r.a.createElement(I,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.0b913c0e.chunk.js.map