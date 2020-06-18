(this["webpackJsonpscoreboard-react"]=this["webpackJsonpscoreboard-react"]||[]).push([[0],{31:function(e,t,a){e.exports=a(54)},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},49:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(19),l=a.n(s),o=(a(36),a(16)),c=a(30),i=a(1),u=a(2),d=a(5),p=a(4),h=a(3),y=(a(37),a(20)),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Animals",t=y.filter((function(t){return t.category.startsWith(e)&&t.unicode_version<=8})),a=Math.floor(Math.random()*t.length),r=t[a];return r},v=(a(38),a(39),function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"avatar",tabIndex:0,"aria-label":"Pick New Avatar",role:"button",onClick:this.props.onAvatarClick},n.a.createElement("span",{role:"img","aria-label":this.props.avatar.description},this.props.avatar.emoji))}}]),a}(r.Component)),f=(a(40),function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"score-total"},this.props.total)}}]),a}(r.Component)),b=(a(41),function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("ul",{className:"score-list"},this.props.scores.map((function(t){return n.a.createElement("li",{key:t.id,className:t.active?"score-list__score score-list__score--active":"score-list__score",onClick:function(){return e.props.onScoreEdit(e.props.playerId,t.id)}},""===t.score?n.a.createElement("span",{style:{color:"transparent"}},"Empty"):t.score)})))}}]),a}(r.Component)),k=a(56),S=function(){return Number(String(Math.random()).split(".")[1]).toString(16)},C=(a(42),a(13)),E=a(21),w=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={valid:!1,value:""},e.handleScoreChange=e.handleScoreChange.bind(Object(d.a)(e)),e.handleValueChange=e.handleValueChange.bind(Object(d.a)(e)),e}return Object(u.a)(a,[{key:"handleValueChange",value:function(e){var t=this,a=e.target,r=a.value,n=a.checkValidity()&&""!==a.value;this.setState({valid:n},(function(){t.handleScoreChange(t.props.playerId,r)}))}},{key:"handleScoreChange",value:function(e,t){var a={score:t,valid:this.state.valid};this.props.newValue.hasOwnProperty("id")?a.id=this.props.newValue.id:a.id=S(),this.props.onNewScoreInput(e,a)}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"score-input"},n.a.createElement(k.a,null,(function(t){return n.a.createElement("input",{className:"score-input__field",id:"score-input__field".concat(e.props.playerId),type:"text",pattern:"^-?\\d+",placeholder:t("score"),value:e.props.newValue.hasOwnProperty("score")&&""!==e.props.newValue.score?e.props.newValue.score:"",onChange:e.handleValueChange})})),n.a.createElement("label",{className:"score-input__indicator",htmlFor:"score-input__field".concat(this.props.playerId)},this.props.newValue.hasOwnProperty("valid")&&this.props.newValue.valid&&n.a.createElement(C.a,{className:"score-input__indicator--success"}),this.props.newValue.hasOwnProperty("valid")&&!this.props.newValue.valid&&""!==this.props.newValue.score&&n.a.createElement(E.a,{className:"score-input__indicator--error"})))}}]),a}(r.Component),O=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"player"},n.a.createElement("div",{className:"player__title"},n.a.createElement(v,{avatar:this.props.avatar,onAvatarClick:function(){return e.props.onAvatarClick(e.props.id)}}),n.a.createElement(f,{total:this.props.total})),n.a.createElement("div",{className:"player__body"},n.a.createElement(w,{onNewScoreInput:this.props.onNewScoreInput,playerId:this.props.id,newValue:this.props.newScore}),n.a.createElement(b,{playerId:this.props.id,scores:this.props.scores,onScoreEdit:this.props.onScoreEdit})))}}]),a}(r.Component),j=a(55),_=(a(49),a(24)),P=a(25),N=a(26),A=a(27),g=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).playerInputComplete=function(){return e.props.players.every((function(e){return e.newScore.hasOwnProperty("valid")&&e.newScore.valid}))},e.scoreEditActive=function(){return e.props.players.every((function(e){return e.scores.some((function(e){return e.active}))}))},e}return Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"controls-tray"},n.a.createElement("button",{"aria-label":"Remove Player",title:"Remove Player",className:"controls-tray__button",onClick:this.props.onRemovePlayerClick,disabled:this.props.players.length<=1},n.a.createElement(P.a,null),n.a.createElement("span",{className:"controls-tray__label"},n.a.createElement(j.a,null,"remove-player"))),n.a.createElement("button",{"aria-label":"Remove Scores",title:"Remove Scores",className:"controls-tray__button",onClick:this.props.onRemoveScoresClick,disabled:!this.scoreEditActive()},n.a.createElement(A.a,null),n.a.createElement("span",{className:"controls-tray__label"},n.a.createElement(j.a,null,"remove-scores"))),n.a.createElement("button",{"aria-label":"Current Round",title:"Current Round: ".concat(this.props.round),className:"controls-tray__button controls-tray__button--display",disabled:!0},n.a.createElement("div",{className:"controls-tray__round-icon"},this.props.round),n.a.createElement("span",{className:"controls-tray__label"},n.a.createElement(j.a,null,"current-round"))),n.a.createElement("button",{"aria-label":"Add Scores",title:"Add Scores",className:"controls-tray__button",onClick:this.props.onAddScoresClick,disabled:!this.playerInputComplete()},this.playerInputComplete()?n.a.createElement(C.a,null):n.a.createElement(N.a,null),n.a.createElement("span",{className:"controls-tray__label"},n.a.createElement(j.a,null,"add-scores"))),n.a.createElement("button",{"aria-label":"Add Player",title:"Add Player",className:"controls-tray__button",onClick:this.props.onAddPlayerClick,disabled:this.props.players.length>=this.props.maxPlayers},n.a.createElement(_.a,null),n.a.createElement("span",{className:"controls-tray__label"},n.a.createElement(j.a,null,"add-player"))))}}]),a}(n.a.Component);var R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return Array.from(new Array(e)).map((function(){return{id:S(),score:Math.floor(Math.random()*t),valid:!0}}))},I=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).addPlayer=function(){return e.setState({players:[].concat(Object(c.a)(e.state.players),[e.createNewPlayerObject()])})},e.removePlayer=function(){var t=e.state.players.splice(0,e.state.players.length-1);e.setState({players:t})},e.state={maxPlayers:4,players:[]},e.handleAvatarClick=e.handleAvatarClick.bind(Object(d.a)(e)),e.handleAddScoresClick=e.handleAddScoresClick.bind(Object(d.a)(e)),e.handleRemoveScoresClick=e.handleRemoveScoresClick.bind(Object(d.a)(e)),e.handlePlayerNewScoreInput=e.handlePlayerNewScoreInput.bind(Object(d.a)(e)),e.handleAddPlayerClick=e.handleAddPlayerClick.bind(Object(d.a)(e)),e.handleRemovePlayerClick=e.handleRemovePlayerClick.bind(Object(d.a)(e)),e.handleScoreEditClick=e.handleScoreEditClick.bind(Object(d.a)(e)),e}return Object(u.a)(a,[{key:"handleScoreEditClick",value:function(e,t){var a=this.state.players.findIndex((function(t){return t.id===e})),r=this.state.players[a].scores.findIndex((function(e){return e.id===t})),n=this.state.players.map((function(e){return e.newScore=e.scores[r],e.scores.forEach((function(e,t){return e.active=t===r})),e}));this.setState({players:n})}},{key:"handlePlayerNewScoreInput",value:function(e,t){var a=this.state.players.map((function(a){return a.id===e&&(a.newScore.score=t.score,a.newScore.id=t.id,a.newScore.valid=t.valid),a}));this.setState({players:a})}},{key:"handleRemoveScoresClick",value:function(){var e=this.state.players.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{scores:e.scores.filter((function(e){return!e.active})),newScore:{}})}));this.setState({players:e})}},{key:"handleAddScoresClick",value:function(){if(this.state.players.every((function(e){return e.newScore.hasOwnProperty("score")&&""!==e.newScore.score}))){var e=this.state.players.map((function(e){return e.scores.some((function(t){return t.hasOwnProperty("id")&&t.id===e.newScore.id}))?(e.newScore={},e.scores.forEach((function(e){return e.active=!1}))):(e.newScore.id=S(),e.scores.push(e.newScore),e.newScore={}),e}));this.setState({players:e})}}},{key:"handleAvatarClick",value:function(e){for(var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=m(),r=this.state.players.map((function(e){return e.avatar.emoji})),n=function(){return r.some((function(e){return e===a.emoji}))};n();)a=m();if(!t)return a;var s=this.state.players.map((function(t){return t.id===e&&(t.avatar=a),t}));this.setState({players:s})}},{key:"createNewPlayerObject",value:function(){var e=S(),t=this.state.players[0]?this.state.players[0].scores.length:5,a=this.state.players[0]?1:10;return this.handleAvatarClick(e),{id:e,scores:R(t,a),newScore:{},avatar:this.handleAvatarClick(e,!1)}}},{key:"UNSAFE_componentWillMount",value:function(){var e=this,t=[{},{},{},{}].map((function(t){return e.createNewPlayerObject()}));this.setState({players:t})}},{key:"handleAddPlayerClick",value:function(){this.state.players.length>=this.state.maxPlayers||this.addPlayer()}},{key:"handleRemovePlayerClick",value:function(){this.state.players.length<=1||this.removePlayer()}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"app","data-active-players":this.state.players.length},n.a.createElement("div",{className:"players"},this.state.players.map((function(t){return n.a.createElement(O,Object.assign({key:t.id},t,{onAvatarClick:e.handleAvatarClick,onNewScoreInput:e.handlePlayerNewScoreInput,onScoreEdit:e.handleScoreEditClick,total:t.scores.filter((function(e){var t=e.score;return Number(t)})).reduce((function(e,t){var a=t.score;return e+Number(a)}),0),editScores:e.state.editScores}))}))),n.a.createElement(g,{onAddPlayerClick:this.handleAddPlayerClick,onRemovePlayerClick:this.handleRemovePlayerClick,players:this.state.players,round:this.state.players[0].scores.length,onAddScoresClick:this.handleAddScoresClick,onRemoveScoresClick:this.handleRemoveScoresClick,newRoundActive:this.state.newRoundActive,maxPlayers:this.state.maxPlayers}))}}]),a}(r.Component),V=a(15),x=a(8),M=a(29);V.a.use(x.e).use(M.a).init({resources:{en:{translation:{"add-scores":"Add Scores","remove-scores":"Remove Scores","current-round":"Current Round","add-player":"Add Player","remove-player":"Remove Player",score:"Score?",reset:"Reset"}},ja:{translation:{"add-scores":"\u30b9\u30b3\u30a2\u3092\u8db3\u3059","remove-scores":"\u30b9\u30b3\u30a2\u3092\u6d88\u3059","current-round":"\u56de\u6570","add-player":"\u30d7\u30ec\u30fc\u30e4\u30fc\u3092\u5897\u3084\u3059","remove-player":"\u30d7\u30ec\u30fc\u30e4\u30fc\u3092\u6e1b\u3089\u3059",score:"\u30b9\u30b3\u30a2\u306e\u5165\u529b\u3092\u3053\u3061\u3089\u306b",reset:"\u30ea\u30bb\u30c3\u30c8"}}},fallbackLng:"en",debug:!0,interpolation:{escapeValue:!1}});V.a;function F(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",e+"px")}l.a.render(n.a.createElement(I,null),document.getElementById("root")),window.addEventListener("resize",F),F()}},[[31,1,2]]]);
//# sourceMappingURL=main.033d4db4.chunk.js.map