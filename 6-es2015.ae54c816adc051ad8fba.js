(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{jxbf:function(e,t,i){"use strict";i.r(t),i.d(t,"DoubleLinkedListModule",(function(){return v}));var s=i("ofXK"),n=i("tyNb"),l=i("fXoL"),r=i("HDdC");class h{constructor(e){this.data=e,this.next=null,this.prev=null}}class d{constructor(){this.head=null,this.tail=null,this.length=0}push(e){let t=new h(e);this.head?(this.tail.next=t,t.prev=this.tail,this.tail=t):(this.head=t,this.tail=t),this.length++}pop(){let e=this.tail;if(this.head)return 1==this.length?(this.head=null,this.tail=null):(this.tail=this.tail.prev,this.tail.next=null),e.prev=null,this.length--,e.data}shift(){let e=this.head;if(this.head)return 1==this.length?(this.head=null,this.tail=null):(this.head=this.head.next,this.head.prev=null),e.next=null,this.length--,e.data}unShift(e){if(this.head){let t=new h(e);t.next=this.head,this.head.prev=t,this.head=t,this.length++}else this.push(e)}get(e){if(!(e<0||e>this.length)){let t=null;if(e>Math.floor((0+this.length)/2))for(t=this.tail;e<this.length;)t=t.prev,e++;else for(t=this.head;e>0;)t=t.next,e--;return t}}set(e,t){let i=this.get(e);return i?(i.data=t,this):"unable to set"}insert(e,t){if(!(e<0||e>=this.length)){if(0==e)this.unShift(t);else{let i=Math.floor((0+this.length)/2),s=new h(t),n=null,l=null;if(e>i)for(l=this.tail,n=l;e<this.length;)n=l,l=l.prev,e++;else for(n=this.head,l=n;e>0;)l=n,n=n.next,e--;l.next=s,s.prev=l,s.next=n,n.prev=s,this.length++}return this}}traverse(){if(!this.head)return null;let e=[],t=this.head;for(;t;)e.push(t.data),t=t.next;return e}}let a=(()=>{class e{constructor(){this.dll=new d}push(e){return this.dll.push(e)}pop(){return this.dll.pop()}traverse(e,t){let i=this.dll.traverse();return t&&i.reverse(),new r.a(t=>{for(let s=0;s<i.length;s++)this.createObserveable(i[s],t,s,e)})}createObserveable(e,t,i,s){setTimeout(()=>{t.next(e),e.textContent==s&&t.complete()},1e3*i)}unshift(e){this.dll.unShift(e)}insert(e){let t=this.dll.traverse();return new r.a(i=>{for(let s=0;s<t.length;s++)this.createObserveableIns(t[s],i,s,e,s)})}createObserveableIns(e,t,i,s,n){setTimeout(()=>{t.next([e,i]),n==s&&t.complete()},1e3*i)}insertNodeAtPos(e,t){this.dll.insert(e,t)}shift(){return this.dll.shift()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=l.Db({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var o=i("mPL+");const c=["cnt"],b=[{path:"",component:(()=>{class e{constructor(e,t){this.service=e,this.commonService=t,this.nextNode=[]}ngOnInit(){}ngAfterViewInit(){this.append=this.ele.nativeElement;for(let e=0;e<4;e++)this.insertNodeTail(Math.floor(100*Math.random()))}ngOnDestroy(){this.onDestroy()}onDestroy(){let e=this.service.dll.length;for(let t=0;t<e;t++)this.service.dll.pop();for(;this.nextNode.length;)this.nextNode.pop()}insertNodeHead(e,t){if(this.service.dll.length<=0)return t.value="",void alert("empty");this.commonService.insertNodeHead(e,this.commonService.createNode,this.service,this.append,this.commonService.createNextForDLL,this.nextNode,t,!0)}insertNodeTail(e,t){this.commonService.insertNodeTail(e,this.commonService.createNode,this.service,this.append,!1,this.commonService.createNextForDLL,this.nextNode,t,!0)}deleteNodeHead(){this.service.dll.length<=0?alert("empty"):this.commonService.deleteNodeHead(this.service.dll,this.service,this.nextNode)}deleteNodeTail(){this.service.dll.length<=0?alert("empty"):this.commonService.deleteNodeTail(this.service.dll,this.service,!1,this.nextNode,!0)}traverse(e,t,i){if(this.service.dll.length<=0)return t.value="",void alert("empty");this.commonService.traverse(e,this.service,t,i)}}return e.\u0275fac=function(t){return new(t||e)(l.Hb(a),l.Hb(o.a))},e.\u0275cmp=l.Bb({type:e,selectors:[["app-double-linked-list"]],viewQuery:function(e,t){var i;1&e&&l.ec(c,!0),2&e&&l.Wb(i=l.Sb())&&(t.ele=i.first)},decls:58,vars:0,consts:[[1,"body-color","left-right"],[1,"left"],[1,"add"],[1,"sub-add-conatiner"],[1,"sub-add-ele"],[1,"sub-head"],[1,"sub-addHead"],["type","number","placeholder","val",1,"inp"],["addHead",""],[1,"btn",3,"click"],[1,"sub-tail"],[1,"sub-addTail"],["add",""],[1,"delete"],[1,"sub-delete-conatiner"],[1,"sub-delete-ele"],[1,"sub-dhead",3,"click"],[1,"sub-dtail",3,"click"],[1,"search"],[1,"sub-search-container"],[1,"sub-search-ele"],[1,"sub-shead"],[1,"sub-searchHead"],["sVal",""],[1,"sub-stail"],[1,"sub-searchTail"],["sBTVal",""],[1,"right","right-side"],[1,"l-container"],["cnt",""]],template:function(e,t){if(1&e){const e=l.Lb();l.Kb(0,"section",0),l.Kb(1,"div",1),l.Kb(2,"div",2),l.Kb(3,"p"),l.dc(4,"Insert"),l.Jb(),l.Kb(5,"div",3),l.Kb(6,"div",4),l.Kb(7,"div",5),l.Kb(8,"p"),l.dc(9,"Head"),l.Jb(),l.Kb(10,"div",6),l.Ib(11,"input",7,8),l.Kb(13,"button",9),l.Rb("click",(function(){l.Yb(e);const i=l.Xb(12);return t.insertNodeHead(i.value,i)})),l.dc(14,"go"),l.Jb(),l.Jb(),l.Jb(),l.Kb(15,"div",10),l.Kb(16,"p"),l.dc(17,"Tail"),l.Jb(),l.Kb(18,"div",11),l.Ib(19,"input",7,12),l.Kb(21,"button",9),l.Rb("click",(function(){l.Yb(e);const i=l.Xb(20);return t.insertNodeTail(i.value,i)})),l.dc(22,"go"),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Kb(23,"div",13),l.Kb(24,"p"),l.dc(25,"Remove"),l.Jb(),l.Kb(26,"div",14),l.Kb(27,"div",15),l.Kb(28,"div",16),l.Rb("click",(function(){return t.deleteNodeHead()})),l.Kb(29,"p"),l.dc(30,"Head"),l.Jb(),l.Jb(),l.Kb(31,"div",17),l.Rb("click",(function(){return t.deleteNodeTail()})),l.Kb(32,"p"),l.dc(33,"Tail"),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Kb(34,"div",18),l.Kb(35,"p"),l.dc(36,"Search"),l.Jb(),l.Kb(37,"div",19),l.Kb(38,"div",20),l.Kb(39,"div",21),l.Kb(40,"p"),l.dc(41,"Head"),l.Jb(),l.Kb(42,"div",22),l.Ib(43,"input",7,23),l.Kb(45,"button",9),l.Rb("click",(function(){l.Yb(e);const i=l.Xb(44);return t.traverse(i.value,i)})),l.dc(46,"go"),l.Jb(),l.Jb(),l.Jb(),l.Kb(47,"div",24),l.Kb(48,"p"),l.dc(49,"Tail"),l.Jb(),l.Kb(50,"div",25),l.Ib(51,"input",7,26),l.Kb(53,"button",9),l.Rb("click",(function(){l.Yb(e);const i=l.Xb(52);return t.traverse(i.value,i,!0)})),l.dc(54,"go"),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Kb(55,"div",27),l.Ib(56,"div",28,29),l.Jb(),l.Jb()}},styles:[""]}),e})()}];let u=(()=>{class e{}return e.\u0275mod=l.Fb({type:e}),e.\u0275inj=l.Eb({factory:function(t){return new(t||e)},imports:[[n.c.forChild(b)],n.c]}),e})(),v=(()=>{class e{}return e.\u0275mod=l.Fb({type:e}),e.\u0275inj=l.Eb({factory:function(t){return new(t||e)},imports:[[s.b,u]]}),e})()}}]);