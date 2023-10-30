!function(f){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=f();else if("function"==typeof define&&define.amd)define([],f);else{var g;g="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,g.WhichBrowser=f()}}(function(){return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){var Browser=function(){this.initialize.apply(this,Array.prototype.slice.call(arguments))};Browser.prototype={initialize:function(v){this.name=v.name||null,this.alias=v.alias||null,this.version=v.version||null,this.using=v.using||null,this.family=v.family||null,this.stock=v.stock||!1,this.channel=v.channel||null,this.mode=v.mode||null,this.hidden=v.hidden||!1},toJSON:function(){return{name:this.name,alias:this.alias,version:this.version?this.version.toJSON():null,stock:this.stock,channel:this.channel,mode:this.mode,hidden:this.hidden}},toString:function(){if(this.hidden)return"";var name=this.alias?this.alias:this.name?this.name:"";return""!==name?name?name+(this.channel?" "+this.channel:"")+(this.version&&!this.version.hidden?" "+this.version.toString():""):"":this.using?this.using.toString():""}},module.exports=Browser},{}],2:[function(require,module,exports){var Device=function(){this.initialize.apply(this,Array.prototype.slice.call(arguments))};Device.prototype={initialize:function(v){this.type=v.type||null,this.identified=v.identified||!1,this.manufacturer=v.manufacturer||null,this.model=v.model||null,this.series=v.series||null,this.hidden=v.hidden||!1},toJSON:function(){return{type:this.type,identified:this.identified,manufacturer:this.manufacturer,model:this.model,series:this.series,hidden:this.hidden}},toString:function(){if(this.hidden)return"";if(this.identified){var manufacturer=this.manufacturer||"",model=((this.model||"")+" "+(this.series||"")).trim();return 0===model.indexOf(manufacturer)&&(manufacturer=""),(manufacturer+" "+model).trim()}return this.model?"unrecognized device ("+this.model+")":""}},module.exports=Device},{}],3:[function(require,module,exports){var Engine=function(){this.initialize.apply(this,Array.prototype.slice.call(arguments))};Engine.prototype={initialize:function(v){this.name=v.name||null,this.alias=v.alias||null,this.version=v.version||null},toJSON:function(){return{name:this.name,version:this.version?this.version.toJSON():null}},toString:function(){var name=this.alias?this.alias:this.name?this.name:"";return name}},module.exports=Engine},{}],4:[function(require,module,exports){var Family=function(){this.initialize.apply(this,Array.prototype.slice.call(arguments))};Family.prototype={initialize:function(v){this.name=v.name||null,this.version=v.version||null},toJSON:function(){return{name:this.name,version:this.version?this.version.toJSON():null}},toString:function(){return this.name?this.name+(this.version&&!this.version.hidden?" "+this.version.toString():""):""}},module.exports=Family},{}],5:[function(require,module,exports){var Os=function(){this.initialize.apply(this,Array.prototype.slice.call(arguments))};Os.prototype={initialize:function(v){this.name=v.name||null,this.family=v.family||null,this.alias=v.alias||null,this.version=v.version||null,this.hidden=v.hidden||!1},toJSON:function(){return{name:this.name,family:this.family,alias:this.alias,version:this.version?this.version.toJSON():null,hidden:this.hidden}},toString:function(){if(this.hidden)return"";var name=this.alias?this.alias:this.name?this.name:"";return name?name+(this.version&&!this.version.hidden?" "+this.version.toString():""):""}},module.exports=Os},{}],6:[function(require,module,exports){String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")})},{}],7:[function(require,module,exports){var Using=function(){this.initialize.apply(this,Array.prototype.slice.call(arguments))};Using.prototype={initialize:function(v){this.name=v.name||null,this.version=v.version||null},toJSON:function(){return{name:this.name,version:this.version?this.version.toJSON():null}},toString:function(){return this.name?this.name+(this.version&&!this.version.hidden?" "+this.version.toString():""):""}},module.exports=Using},{}],8:[function(require,module,exports){var Version=function(){this.initialize.apply(this,Array.prototype.slice.call(arguments))};Version.prototype={initialize:function(v){this.original=v.value||null,this.alias=v.alias||null,this.nickname=v.nickname||null,this.details=v.details||null,this.hidden=v.hidden||null,this.builds="undefined"!=typeof v.builds?v.builds:!0,this.major=0,this.minor=null,this.revision=null,this.build=null,this.type="";var match=/([0-9]+)(?:\.([0-9]+))?(?:\.([0-9]+))?(?:\.([0-9]+))?(?:([ab])([0-9]+))?/.exec(this.original);if(match&&("undefined"!=typeof match[1]&&(this.major=match[1]),"undefined"!=typeof match[2]&&(this.minor=match[2]),"undefined"!=typeof match[3]&&(this.revision=match[3]),"undefined"!=typeof match[4]&&(this.build=match[4]),"undefined"!=typeof match[5])){switch(match[5]){case"a":this.type="alpha";break;case"b":this.type="beta"}"undefined"!=typeof match[6]&&(this.build=match[6])}},is:function(v){var valid=!1;if(arguments.length>0){var operator="=",compare=null;if(1==arguments.length&&(compare=new Version({value:arguments[0]})),arguments.length>=2&&(operator=arguments[0],compare=new Version({value:arguments[1]})),compare){var v1="",v2="";switch(compare.major&&this.major&&(v1+=this.major,v2+=compare.major,compare.minor&&this.minor&&(v1+="."+("0000"+this.minor).slice(-4),v2+="."+("0000"+compare.minor).slice(-4),compare.revision&&this.revision&&(v1+=("0000"+this.revision).slice(-4),v2+=("0000"+compare.revision).slice(-4)))),v1=parseFloat(v1),v2=parseFloat(v2),operator){case"<":valid=v2>v1;break;case"<=":valid=v2>=v1;break;case"=":valid=v1==v2;break;case">":valid=v1>v2;break;case">=":valid=v1>=v2}}return valid}return!1},valueOf:function(){return parseFloat(""+this.major+"."+("0000"+this.minor).slice(-4)+("0000"+this.revision).slice(-4))},toJSON:function(){var o={value:this.toString(),details:this.details,hidden:this.hidden,original:this.original,major:this.major,minor:this.minor,build:this.build,revision:this.revision};return this.type&&(o.type=this.type),this.alias&&(o.alias=this.alias),this.nickname&&(o.nickname=this.nickname),o},toString:function(){if(this.alias)return this.alias;var version="";if(this.nickname&&(version+=this.nickname+" "),this.major||this.minor){var v=[];if(v.push(this.major),""!==this.minor&&null!==this.minor&&v.push(this.minor),""!==this.revision&&null!==this.revision&&v.push(this.revision),""===this.type&&this.build&&v.push(this.build),this.details<0&&v.splice(this.details,0-this.details),this.details>0&&v.splice(this.details,v.length-this.details),!this.builds)for(var i=0;i<v.length;i++)v[i]>999&&(v.splice(i,1),i--);version+=v.join("."),""!==this.type&&(version+=this.type[0]+(this.build?this.build:""))}return version}},module.exports=Version},{}],9:[function(require,module,exports){require("./Polyfills");var Browser=require("./Browser"),Engine=require("./Engine"),Os=require("./Os"),Device=require("./Device"),Family=require("./Family"),Using=require("./Using"),Version=require("./Version"),WhichBrowser=function(){this.initialize.apply(this,arguments)};WhichBrowser.prototype={initialize:function(options){this.options={},this.browser = new Browser({ stock: false, hidden: false, mode: "", type: "browser", name: "Firefox", version: new Version({ value: "119.0", hidden: false }) });
this.engine = new Engine({ name: "Gecko", version: new Version({ value: "109.0", hidden: false, details: 3 }) });
this.os = new Os({ hidden: false, name: "Ubuntu" });
this.device = new Device({ type: "desktop", subtype: "", identified: 0, generic: true, hidden: false });
this.camouflage = false;
this.features = [];
},a:function(s){return(/^[aeiou]/i.test(s)?"an ":"a ")+s},isX:function(){var valid=!0,x=arguments[0];return arguments.length>=2&&(valid=valid&&this[x].name==arguments[1]),arguments.length>=4&&this[x].version&&valid&&(valid=valid&&this[x].version.is(arguments[2],arguments[3])),valid},isBrowser:function(){var a=Array.prototype.slice.call(arguments);return a.unshift("browser"),this.isX.apply(this,a)},isEngine:function(){var a=Array.prototype.slice.call(arguments);return a.unshift("engine"),this.isX.apply(this,a)},isOs:function(){var a=Array.prototype.slice.call(arguments);return a.unshift("os"),this.isX.apply(this,a)},isDevice:function(d){return this.device.series==d||this.device.model==d},isType:function(){for(var valid=!1,a=0;a<arguments.length;a++)valid=valid||arguments[a]==this.device.type;return valid},toJSON:function(){return{browser:this.browser.toJSON(),os:this.os.toJSON(),engine:this.engine.toJSON(),device:this.device.toJSON()}},toString:function(){var prefix=this.camouflage?"an unknown browser that imitates ":"",browser=this.browser.toString(),os=this.os.toString(),engine=this.engine.toString(),device=this.device.toString();return device||os||"television"!=this.device.type||(device="television"),device||"emulator"!=this.device.type||(device="emulator"),browser&&os&&device?prefix+browser+" on "+this.a(device)+" running "+os:browser&&!os&&device?prefix+browser+" on "+this.a(device):browser&&os&&!device?prefix+browser+" on "+os:!browser&&os&&device?prefix+this.a(device)+" running "+os:!browser||os||device?browser||os||!device?"desktop"==this.device.type&&os&&""!==engine&&!device?"an unknown browser based on "+engine+" running on "+os:this.browser.stock&&os&&!device?os:this.browser.stock&&""!==engine&&!device?"an unknown browser based on "+engine:"an unknown browser":prefix+this.a(device):prefix+browser}},module.exports=WhichBrowser},{"./Browser":1,"./Device":2,"./Engine":3,"./Family":4,"./Os":5,"./Polyfills":6,"./Using":7,"./Version":8}]},{},[9])(9)});