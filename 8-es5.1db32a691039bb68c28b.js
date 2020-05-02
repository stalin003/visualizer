function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var u=0;u<t.length;u++){var n=t[u];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,u){return t&&_defineProperties(e.prototype,t),u&&_defineProperties(e,u),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"1HEZ":function(e,t,u){"use strict";u.r(t),u.d(t,"QueueModule",(function(){return q}));var n,i,c,r,o=u("ofXK"),s=u("fXoL"),a=function(){function e(){_classCallCheck(this,e),this.queue=[]}return _createClass(e,[{key:"enqueue",value:function(e){this.queue.push(e)}},{key:"dequeue",value:function(){if(this.queue.length>0)return this.queue.shift()}}]),e}(),l=((n=function(){function e(){_classCallCheck(this,e),this.queue=new a}return _createClass(e,[{key:"enqueue",value:function(e){this.queue.enqueue(e)}},{key:"dequeue",value:function(){return this.queue.dequeue()}}]),e}()).\u0275fac=function(e){return new(e||n)},n.\u0275prov=s.Db({token:n,factory:n.\u0275fac,providedIn:"root"}),n),f=u("mPL+"),b=["stck"],h=((i=function(){function e(t,u){_classCallCheck(this,e),this.service=t,this.commonService=u}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"ngAfterViewInit",value:function(){this.append=this.ele.nativeElement;for(var e=0;e<3;e++)this.enqueue(Math.floor(100*Math.random()))}},{key:"ngOnDestroy",value:function(){this.destroy()}},{key:"destroy",value:function(){for(var e=this.service.queue.queue.length,t=0;t<e;t++)this.service.queue.dequeue()}},{key:"enqueue",value:function(e,t){t&&(t.value=""),this.service.queue.queue.length+1>6?alert("queue is full"):this.commonService.insertNodeTail(e,this.commonService.createQueueNode,this.service,this.append,!0)}},{key:"dequeue",value:function(){this.service.queue.queue.length?this.commonService.deleteNodeTail(this.service.queue.queue,this.service,!0):alert("queue is empty")}}]),e}()).\u0275fac=function(e){return new(e||i)(s.Hb(l),s.Hb(f.a))},i.\u0275cmp=s.Bb({type:i,selectors:[["app-queue"]],viewQuery:function(e,t){var u;1&e&&s.ec(b,!0),2&e&&s.Wb(u=s.Sb())&&(t.ele=u.first)},decls:18,vars:0,consts:[[1,"body-color","left-right"],[1,"left"],[1,"add","addStack"],[1,"sub-stack"],["type","number","placeholder","val",1,"inp"],["queue",""],[1,"btn",3,"click"],[1,"delete",3,"click"],[1,"right","right-side"],[1,"l-container"],[1,"queue-outer-container"],[1,"queue-container"],["stck",""]],template:function(e,t){if(1&e){var u=s.Lb();s.Kb(0,"section",0),s.Kb(1,"div",1),s.Kb(2,"div",2),s.Kb(3,"p"),s.dc(4,"Enqueue"),s.Jb(),s.Kb(5,"div",3),s.Ib(6,"input",4,5),s.Kb(8,"button",6),s.Rb("click",(function(){s.Yb(u);var e=s.Xb(7);return t.enqueue(e.value,e)})),s.dc(9,"go"),s.Jb(),s.Jb(),s.Jb(),s.Kb(10,"div",7),s.Rb("click",(function(){return t.dequeue()})),s.Kb(11,"p"),s.dc(12,"Dequeue"),s.Jb(),s.Jb(),s.Jb(),s.Kb(13,"div",8),s.Kb(14,"div",9),s.Kb(15,"div",10),s.Ib(16,"div",11,12),s.Jb(),s.Jb(),s.Jb(),s.Jb()}},styles:[""]}),i),d=u("tyNb"),v=[{path:"",component:h}],p=((r=function e(){_classCallCheck(this,e)}).\u0275mod=s.Fb({type:r}),r.\u0275inj=s.Eb({factory:function(e){return new(e||r)},imports:[[d.c.forChild(v)],d.c]}),r),q=((c=function e(){_classCallCheck(this,e)}).\u0275mod=s.Fb({type:c}),c.\u0275inj=s.Eb({factory:function(e){return new(e||c)},imports:[[o.b,p]]}),c)}}]);