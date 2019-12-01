(this["webpackJsonpscoreboard-react"]=this["webpackJsonpscoreboard-react"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){e.exports=a(28)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),s=a.n(l),o=(a(20),a(8)),c=a(1),i=a(2),u=a(4),p=a(3),h=a(6),d=a(5),m=(a(21),a(11)),y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Animals",t=m.filter((function(t){return t.category.startsWith(e)&&t.unicode_version<=8})),a=Math.floor(Math.random()*t.length),n=t[a];return n},b=(a(22),a(23),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"avatar",tabIndex:0,"aria-label":"Pick New Avatar",role:"button",onClick:this.props.onAvatarClick},r.a.createElement("span",{role:"img","aria-label":this.props.avatar.description},this.props.avatar.emoji))}}]),t}(n.Component)),v=(a(24),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"score-total"},this.props.total)}}]),t}(n.Component)),f=(a(25),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("ul",{className:"score-list"},this.props.scores.map((function(t,a){return r.a.createElement("li",{key:a,className:a===e.props.scores.length-1?"score-list__score score-list__score--latest":"score-list__score"},t)})))}}]),t}(n.Component)),j=(a(26),a(7)),O=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).handleScoreChange=e.handleScoreChange.bind(Object(h.a)(e)),e.handleValueChange=e.handleValueChange.bind(Object(h.a)(e)),e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"handleValueChange",value:function(e){var t=e.target.value;isNaN(Number(t))&&""!==t||this.handleScoreChange(this.props.id,t)}},{key:"handleScoreChange",value:function(e,t){this.props.onNewScoreInput(e,t)}},{key:"render",value:function(){return r.a.createElement("div",{className:""!==this.props.newValue?"score-input score-input--completed":"score-input"},r.a.createElement("input",{className:"score-input__field",type:"number",placeholder:"Score?",value:this.props.newValue,onChange:this.handleValueChange}),r.a.createElement("div",{className:"score-input__indicator"},""!==this.props.newValue&&r.a.createElement(j.a,null)))}}]),t}(n.Component),S=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"player"},r.a.createElement("div",{className:"player__title"},r.a.createElement(b,{avatar:this.props.avatar,onAvatarClick:function(){return e.props.onAvatarClick(e.props.id)}}),r.a.createElement(v,{total:this.props.total})),r.a.createElement("div",{className:"player__body"},r.a.createElement(O,{onNewScoreInput:this.props.onNewScoreInput,id:this.props.id,newValue:this.props.newScore}),r.a.createElement(f,{scores:this.props.scores})))}}]),t}(n.Component),N=(a(27),a(12)),k=a(13),C=a(14),E=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"playerInputNotComplete",value:function(){return this.props.players.some((function(e){return""===e.newScore}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"controls-tray"},r.a.createElement("button",{"aria-label":"Remove Player",title:"Remove Player",className:"controls-tray__button",onClick:this.props.onRemovePlayer,disabled:this.props.players.length<=1},r.a.createElement(k.a,null),r.a.createElement("span",{className:"controls-tray__label"},"Remove Player")),r.a.createElement("button",{"aria-label":"Round Number",title:"Round Number: ".concat(this.props.round),className:"controls-tray__button"},r.a.createElement("div",{className:"controls-tray__round-icon"},this.props.round),r.a.createElement("span",{className:"controls-tray__label"},"Round Number")),r.a.createElement("button",{"aria-label":"Submit Scores",title:"Submit Scores",className:"controls-tray__button",onClick:this.props.onSubmitScoresClick,disabled:this.playerInputNotComplete()},this.playerInputNotComplete()?r.a.createElement(C.a,null):r.a.createElement(j.a,null),r.a.createElement("span",{className:"controls-tray__label"},"Submit Scores")),r.a.createElement("button",{"aria-label":"Add Player",title:"Add Player",className:"controls-tray__button",onClick:this.props.onAddPlayer,disabled:this.props.players.length>=4},r.a.createElement(N.a,null),r.a.createElement("span",{className:"controls-tray__label"},"Add Player")))}}]),t}(r.a.Component);var _=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return Array.from(new Array(e)).map((function(){return Math.floor(Math.random()*t)}))},w=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).addPlayer=function(){return e.setState({players:[].concat(Object(o.a)(e.state.players),[e.createNewPlayerObject()])})},e.removePlayer=function(){var t=e.state.players.splice(0,e.state.players.length-1);e.setState({players:Object(o.a)(t)})},e.state={maxPlayers:4,players:[]},e.handleAvatarClick=e.handleAvatarClick.bind(Object(h.a)(e)),e.handleSubmitScoresClick=e.handleSubmitScoresClick.bind(Object(h.a)(e)),e.handlePlayerNewScoreInput=e.handlePlayerNewScoreInput.bind(Object(h.a)(e)),e.playerAddHandler=e.playerAddHandler.bind(Object(h.a)(e)),e.playerRemoveHandler=e.playerRemoveHandler.bind(Object(h.a)(e)),e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"handlePlayerNewScoreInput",value:function(e,t){var a=this.state.players.map((function(a){return a.id===e&&(""===t?a.newScore=t:"number"===typeof Number(t)&&(a.newScore=Number(t))),a}));this.setState({players:a})}},{key:"handleSubmitScoresClick",value:function(){if(!this.state.players.some((function(e){return""===e.newScore}))){var e=this.state.players.map((function(e){return e.scores.push(e.newScore),e.newScore="",e}));this.setState({players:Object(o.a)(e)})}}},{key:"handleAvatarClick",value:function(e){for(var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=y(),n=this.state.players.map((function(e){return e.avatar.emoji})),r=function(){return n.some((function(e){return e===a.emoji}))};r();)a=y();if(!t)return a;var l=this.state.players.map((function(t){return t.id===e&&(t.avatar=a),t}));this.setState({players:l})}},{key:"createNewPlayerObject",value:function(){var e=Number(String(Math.random()).split(".")[1]).toString(16);return this.handleAvatarClick(e),{id:e,scores:_(10,15),newScore:"",avatar:this.handleAvatarClick(e,!1)}}},{key:"UNSAFE_componentWillMount",value:function(){var e=this,t=[{},{},{},{}].map((function(t){return e.createNewPlayerObject()}));this.setState({players:t})}},{key:"playerAddHandler",value:function(){this.state.players.length>=this.state.maxPlayers||this.addPlayer()}},{key:"playerRemoveHandler",value:function(){this.state.players.length<=1||this.removePlayer()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"app","data-active-players":this.state.players.length},r.a.createElement("div",{className:"players"},this.state.players.map((function(t){return r.a.createElement(S,Object.assign({key:t.id},t,{onAvatarClick:e.handleAvatarClick,onNewScoreInput:e.handlePlayerNewScoreInput,total:t.scores.reduce((function(e,t){return e+t}),0)}))}))),r.a.createElement(E,{onAddPlayer:this.playerAddHandler,onRemovePlayer:this.playerRemoveHandler,players:this.state.players,round:this.state.players[0].scores.length+1,onSubmitScoresClick:this.handleSubmitScoresClick,newRoundActive:this.state.newRoundActive}))}}]),t}(n.Component);function g(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",e+"px")}s.a.render(r.a.createElement(w,null),document.getElementById("root")),window.addEventListener("resize",g),g()}],[[15,1,2]]]);
//# sourceMappingURL=main.bedd4f7a.chunk.js.map