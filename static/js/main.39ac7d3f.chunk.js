(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{124:function(e,t,n){e.exports=n(328)},129:function(e,t,n){},130:function(e,t,n){},135:function(e,t,n){},138:function(e,t,n){},154:function(e,t,n){},319:function(e,t,n){},322:function(e,t,n){},323:function(e,t,n){},328:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(46),o=n.n(r),s=(n(129),n(4)),c=n(5),l=n(7),u=n(6),d=n(8),m=(n(130),n(2)),f=(n(135),n(18)),p=n(16),h="CHANGE_FIGURE_VALUE";function b(e){return{type:h,payload:e}}var v,g=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"isActiveListElement",value:function(e){return(this.props.selectedFigure?this.props.selectedFigure.id:-1)===e?"active-list-element":""}},{key:"deleteFigureFromList",value:function(e,t){e.stopPropagation(),this.props.deleteFigure(t)}},{key:"render",value:function(){var e=this,t=this.props,n=t.figuresList,a=t.addFigure,r=t.showFigureEditor;return console.log("SVGFiguresList render"),i.a.createElement("div",{className:"svg-figures-list"},i.a.createElement("div",{className:"bg-secondary text-white",style:{height:"7vh"}},i.a.createElement("span",{className:"figures-header text-left pl-2"},"Figures"),i.a.createElement("span",{className:"mt-4 mr-4 float-right",onClick:function(){return a()}},i.a.createElement(f.a,{className:"add-figure",icon:p.a,size:"2x"}))),i.a.createElement("div",{className:"figures-list overflow-auto"},i.a.createElement("ul",{id:"figures-list",className:"list-group bg-light text-left"},n&&n.map(function(t){return i.a.createElement("li",{key:t.id+t.name,className:"list-group-item list-figure "+e.isActiveListElement(t.id),onClick:function(){return r(t.id)}},t.name,i.a.createElement("span",{onClick:function(n){return e.deleteFigureFromList(n,t.id)}},i.a.createElement(f.a,{className:"delete-figure",icon:p.c,size:"1x"})))}))))}}]),t}(i.a.PureComponent),E=Object(m.b)(function(e){var t=e.figuresProjects.present;return{figuresList:t.figuresList,selectedFigure:t.selectedFigure}},function(e){return{addFigure:function(){return e({type:"ADD_FIGURE",payload:void 0})},deleteFigure:function(t){return e(function(e){return{type:"DELETE_FIGURE",payload:{id:e}}}(t))},showFigureEditor:function(t){return e(function(e){return{type:"SHOW_FIGURE_EDITOR",payload:{id:e}}}(t))}}})(g),y=(n(138),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).fileReader=new FileReader,n.handleChooseFile=function(e){if(e.target.files[0]){var t=e.target.files[e.target.files.length-1];if(!t.name.endsWith(n.props.fileType))return void n.setState({fileName:"Only ".concat(n.props.fileType," files are allowed!"),ifCorrectFile:!1});n.setState({ifCorrectFile:!0}),n.fileReader.readAsText(t,"UTF-8"),n.fileReader.onload=function(){console.log(n.fileReader.result),n.setState({fileContent:n.fileReader.result})},n.setState({fileName:t.name})}},n.state={fileContent:"",fileName:n.props.importFilePlaceholder,ifCorrectFile:!0},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.importIdentificator,a=t.buttonTitle,r=t.importModalHeader;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"modal fade",id:n,tabIndex:-1,role:"dialog","aria-labelledby":"importModalLabel","aria-hidden":"true"},i.a.createElement("div",{className:"modal-dialog",role:"document"},i.a.createElement("div",{className:"modal-content"},i.a.createElement("div",{className:"modal-header"},i.a.createElement("h5",{className:"modal-title",id:"importModalLabel"},r),i.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},i.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),i.a.createElement("div",{className:"modal-body"},i.a.createElement("div",{className:"input-group"},i.a.createElement("div",{className:"input-group-prepend"},i.a.createElement("span",{className:"input-group-text",id:"inputGroupFileAddon01"},"Upload")),i.a.createElement("div",{className:"custom-file"},i.a.createElement("input",{type:"file",className:"custom-file-input",id:"inputGroupFile01","aria-describedby":"inputGroupFileAddon01",onChange:function(t){return e.handleChooseFile(t)},onClick:function(e){e.target.value=null}}),i.a.createElement("label",{className:"custom-file-label"},this.state.fileName)))),i.a.createElement("div",{className:"modal-footer"},this.state.ifCorrectFile?i.a.createElement("button",{type:"button",className:"btn btn-primary","data-dismiss":"modal",onClick:function(){return e.props.handleImportedProjectFile(e.state.fileContent)}},"Import"):i.a.createElement("button",{type:"button",disabled:!0,className:"btn btn-primary","data-dismiss":"modal"},"Import"))))),i.a.createElement("button",{type:"button",className:"btn btn-secondary project-button  h-100","data-toggle":"modal","data-target":"#".concat(n)},i.a.createElement("p",null," Import ",i.a.createElement("br",null)," ",a," "),"  "))}}]),t}(i.a.PureComponent)),j=Object(m.b)(null,function(e){return{handleImportedProjectFile:function(t){return e(function(e){return{type:"HANDLE_IMPORTED_PROJECT_FILE",payload:e}}({fileContent:t}))}}})(y),O=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).downloadObjectAsJson=function(e,t){var n="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(e)),a=document.createElement("a");a.setAttribute("href",n),a.setAttribute("download",t+".json"),document.body.appendChild(a),a.click(),a.remove()},n.exportProjects=function(){n.downloadObjectAsJson(n.props.projectList,"projects")},n.exportSelectedProject=function(){n.downloadObjectAsJson(n.props.selectedProject,"ProjectName")},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"isActiveListElement",value:function(e){return(null!==this.props.selectedProject?this.props.selectedProject.id:-1)===e?"active-list-element":""}},{key:"deleteProjectFromList",value:function(e,t){e.stopPropagation(),this.props.deleteProject(t)}},{key:"render",value:function(){var e=this;console.log("SVGProjectsList render");var t=this.props,n=t.projectList,a=t.addProject,r=t.setCurrentProject;return i.a.createElement("div",{className:"svg-project-list"},i.a.createElement("div",{className:"bg-secondary text-white",style:{height:"7vh"}},i.a.createElement("span",{className:"figures-header text-left pl-2"},"Projects"),i.a.createElement("span",{className:"mt-4 mr-4 float-right",onClick:function(){return a()}},i.a.createElement(f.a,{className:"add-figure",icon:p.a,size:"2x"}))),i.a.createElement("div",{className:"project-list overflow-auto border-bottom "},i.a.createElement("ul",{id:"figures-list",className:"list-group bg-light text-left"},n&&n.map(function(t){return i.a.createElement("li",{key:t.id,className:"list-group-item list-project "+e.isActiveListElement(t.id),onClick:function(){return r(t.id)}},i.a.createElement("p",{className:"h3"},t.name,i.a.createElement("span",{onClick:function(n){return e.deleteProjectFromList(n,t.id)}},i.a.createElement(f.a,{className:"delete-project",icon:p.c,size:"1x"}))))}))),i.a.createElement("div",{className:"col-lg-12 mb-1 project-export-button-group d-flex justify-content-between"},i.a.createElement(j,{buttonTitle:"projects",fileType:".json",importIdentificator:"projectImport",importModalHeader:"SVG Animation - import project",importFilePlaceholder:"Choose projects json file..."}),i.a.createElement("button",{className:"btn btn-secondary project-button h-100",onClick:function(){return e.exportSelectedProject()}},i.a.createElement("p",null,"Export ",i.a.createElement("br",null)," Selected Project")),i.a.createElement("button",{className:"btn btn-secondary project-button h-100",onClick:function(){return e.exportProjects()}},i.a.createElement("p",null,"Export ",i.a.createElement("br",null)," Projects"))))}}]),t}(i.a.PureComponent),N=Object(m.b)(function(e){var t=e.figuresProjects.present;return{selectedProject:t.selectedProject,projectList:t.projectList}},function(e){return{addProject:function(){return e({type:"ADD_PROJECT",payload:void 0})},deleteProject:function(t){return e(function(e){return{type:"DELETE_PROJECT",payload:e}}({id:t}))},setCurrentProject:function(t){return e(function(e){return{type:"SET_CURRENT_PROJECT",payload:e}}({id:t}))}}})(O),P=(n(73),function(e){var t=Object(m.d)(function(e){return e.figuresProjects.present.selectedFigure}),n=Object(m.c)(),r=Object(a.useCallback)(function(e,t){return n(b({type:e,value:t}))},[n]),o=Object(a.useRef)(null);return i.a.createElement("div",{className:"text-center mt-3"},i.a.createElement("button",{ref:o,className:"h3 actor-project-name",suppressContentEditableWarning:!0,contentEditable:!0,onBlur:function(){o&&o.current&&r(e.valueType,o.current.innerHTML)}},t[e.valueType]))}),C=n(21),k=function(e){var t=Object(m.d)(function(t){return Object(C.get)(t.figuresProjects.present.selectedFigure,e.valueType)}),n=Object(m.c)(),r=Object(a.useCallback)(function(e,t){return n(b({type:e,value:t}))},[n]);return i.a.createElement("div",{className:"form-group mt-4"},i.a.createElement("div",{className:"ml-2 mt-2 text-dark font-weight-bold"}," ",e.header),i.a.createElement("select",{value:t,className:"form-control mt-2",onChange:function(t){return n=t,void r(e.valueType,n.target.value);var n}},function(){var t=e.dropdownOptions,n=Object.keys(t);return Object.keys(t).map(function(e,t){return i.a.createElement("option",{key:t,value:n[t]},e)})}()))},F=n(112),x=n.n(F),T=(n(154),function(e){var t=Object(m.d)(function(t){return Object(C.get)(t.figuresProjects.present.selectedFigure,e.valueType)}),n=Object(m.c)(),r=Object(a.useCallback)(function(e,t){return n(b({type:e,value:t}))},[n]),o=[e.minValue,e.maxValue],s=o[0],c=o[1];return i.a.createElement("div",{className:"form-group"},i.a.createElement("div",{className:"ml-2 mt-4 text-dark font-weight-bold"}," ",e.header),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-9 mt-4 "},i.a.createElement(x.a,{minValue:s,maxValue:c,value:t,step:e.step,onChange:function(t){return r(e.valueType,Number(t))}})),i.a.createElement("div",{className:"col-lg-3 mt-3"},i.a.createElement("input",{type:"number",min:s,max:c,step:e.step,className:"form-control",value:t,onChange:function(t){return function(t){var n=t.target,a=n.min,i=n.max,o=Number(t.target.value);o=Math.max(Number(a),Math.min(Number(i),Number(o))),r(e.valueType,o)}(t)}}))))});!function(e){e.Circle="Circle",e.Polygon="Polygon",e.Square="Square"}(v||(v={}));var A,L=v,w=n(113),S=function(e){var t=Object(m.d)(function(e){return e.figuresProjects.present.selectedFigure}),n=Object(m.c)(),r=t[e.valueType],o=Object(a.useCallback)(function(e,t){return n(b({type:e,value:t}))},[n]);return i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"h5 mt-3 mb-2 text-dark font-weight-bold"},e.header),i.a.createElement(w.TwitterPicker,{color:r,onChange:function(t){return o(e.valueType,t)}}))},I=function(){var e=Object(m.d)(function(e){return e.figuresProjects.present.selectedProject}),t=Object(m.c)(),n=Object(a.useRef)(null),r=Object(a.useCallback)(function(e){return t(function(e){return{type:"CHANGE_PROJECT_NAME",payload:e}}({name:e}))},[t]);return i.a.createElement("div",{className:"text-center mt-3"},i.a.createElement("button",{ref:n,className:"h1 actor-project-name",suppressContentEditableWarning:!0,contentEditable:!0,onBlur:function(){n&&n.current&&r(n.current.innerHTML)}},e.name))},_=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){console.log("SVGFigureEditor render");var e=this.props.selectedFigure;return console.log(e,"SVGFigureEditor selected figure"),i.a.createElement("div",{className:"figure-editor"},e&&i.a.createElement(i.a.Fragment,null,i.a.createElement(I,null),i.a.createElement(P,{valueType:"name"}),i.a.createElement(k,{header:"Figure Type",valueType:"figureType",dropdownOptions:L}),i.a.createElement(T,{header:"Figure Size",valueType:"size",minValue:0,maxValue:100,step:1}),e.figureType===L.Polygon&&i.a.createElement(T,{header:"Number of sides",valueType:"numOfSides",minValue:3,maxValue:15,step:1}),i.a.createElement(T,{header:"X Position",valueType:"xPosition",minValue:0,maxValue:500,step:1}),i.a.createElement(T,{header:"Y Position",valueType:"yPosition",minValue:0,maxValue:500,step:1}),i.a.createElement("p",{className:"h3 mt-5 text-dark font-weight-bold"},"Figure Style"),i.a.createElement(T,{header:"Opacity",valueType:"opacity",minValue:0,maxValue:1,step:.01}),i.a.createElement(S,{header:"Fill",valueType:"fill"}),i.a.createElement(S,{header:"Stroke",valueType:"stroke"}),i.a.createElement(T,{header:"Stroke Width:",valueType:"strokeWidth",minValue:1,maxValue:50,step:1})))}}]),t}(i.a.PureComponent),R=Object(m.b)(function(e){return{selectedFigure:e.figuresProjects.present.selectedFigure}},{})(_);!function(e){e.cy="Vertical",e.cx="Horizontal"}(A||(A={}));var G=A,V=Object.freeze({width:500,height:500}),M=n(114),U=n.n(M),z=function(e){var t=Object(m.d)(function(t){return Object(C.get)(t.figuresProjects.present.selectedFigure,e.valueType)}),n=Object(m.c)(),r=Object(a.useCallback)(function(e,t){return n(b({type:e,value:t}))},[n]);return i.a.createElement("div",{className:"mt-4"},i.a.createElement("span",{className:"mr-2 mt-3"},e.header),i.a.createElement(U.a,{className:"ml-2 mt-2",onChange:function(t){r(e.valueType,t)},checked:t}))},D=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"animation-editor"},i.a.createElement(z,{header:"Animation Enabled",valueType:"animationEnabled"}),this.props.ifAnimationEnabled&&i.a.createElement(i.a.Fragment,null,i.a.createElement(k,{header:"Animation Axis",valueType:"animation.attributeName",dropdownOptions:G}),i.a.createElement(T,{header:"Animation Starting point",valueType:"animation.from",minValue:0,maxValue:V.width,step:1}),i.a.createElement(T,{header:"Animation ending point",valueType:"animation.to",minValue:0,maxValue:V.width,step:1}),i.a.createElement(T,{header:"Animation duration",valueType:"animation.dur",minValue:0,maxValue:20,step:.1}),i.a.createElement(T,{header:"Circle rotation diameter",valueType:"animation.r",minValue:0,maxValue:200,step:1})))}}]),t}(i.a.PureComponent),H=Object(m.b)(function(e){return{ifAnimationEnabled:e.figuresProjects.present.selectedFigure.animationEnabled}},{})(D),W=n(115),J=n.n(W),B=(n(319),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).textArea=i.a.createRef(),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"copySVGAnimation",value:function(){var e=this.props.svgText;return e&&J.a.renderToStaticMarkup(e)}},{key:"handleTextSelect",value:function(){this.textArea&&this.textArea.current&&this.textArea.current.select()}},{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{type:"button",className:"btn btn-secondary float-right mr-2 mt-2","data-toggle":"modal","data-target":"#exportModal"}," Export SVG "),i.a.createElement("div",{className:"modal fade",id:"exportModal",tabIndex:-1,role:"dialog","aria-labelledby":"exportModalLabel","aria-hidden":"true"},i.a.createElement("div",{className:"modal-dialog",role:"document"},i.a.createElement("div",{className:"modal-content"},i.a.createElement("div",{className:"modal-header"},i.a.createElement("h5",{className:"modal-title",id:"exportModalLabel"},"SVGAnimation - Export SVG"),i.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},i.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),i.a.createElement("div",{className:"modal-body"},i.a.createElement("textarea",{value:this.copySVGAnimation(),readOnly:!0,ref:this.textArea,className:"svg-text rounded bg-light w-100 mt-2",onClick:function(){return e.handleTextSelect()}})),i.a.createElement("div",{className:"modal-footer"},i.a.createElement("button",{type:"button",className:"btn btn-primary","data-dismiss":"modal"},"Done"))))))}}]),t}(i.a.PureComponent)),K=Object(m.b)(function(e){return{figuresList:e.figuresProjects.present.figuresList}},{})(B),q=n(116),X=n.n(q),Y=function e(t){Object(s.a)(this,e),this.href=void 0,this.attributeName=void 0,this.from=void 0,this.to=void 0,this.additive=void 0,this.repeatCount=void 0,this.calcMode=void 0,this.keyTimes=void 0,this.keySplines=void 0,this.dur=void 0,this.begin=void 0,this.fill=void 0,this.r=void 0,this.href="#"+t,this.attributeName="cy",this.from=0,this.to=100,this.additive="sum",this.repeatCount="indefinite",this.calcMode="spline",this.keyTimes="0;1",this.keySplines=".42 0.5 0.5 1",this.dur=5,this.begin="0s",this.fill="remove",this.r=0},$=function(){function e(){Object(s.a)(this,e),this._id=void 0,this.hrefid=void 0,this.name=void 0,this.figureType=void 0,this.animationType=void 0,this.xPosition=void 0,this.yPosition=void 0,this.numOfSides=void 0,this.opacity=void 0,this.strokeWidth=void 0,this.fill=void 0,this.stroke=void 0,this.size=void 0,this.animationEnabled=void 0,this.animation=new Y(this.hrefid),this._id=e.staticId,this.hrefid="figure"+this.id,this.name="Figure "+this.id,this.figureType="Circle",this.animationType="Move down",this.xPosition=50,this.yPosition=100,this.numOfSides=3,this.opacity=1,this.strokeWidth=1,this.fill={},this.stroke={},this.size=50,this.animationEnabled=!0,this.animation=new Y(this.hrefid),e.staticId++}return Object(c.a)(e,[{key:"id",set:function(e){this._id=e,this.hrefid="figure"+e,void 0!==this.name&&(this.name="Figure "+e),void 0!==this.animation&&(this.animation.href="#"+this.hrefid)},get:function(){return this._id}}]),e}();$.staticId=1;var Q=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={fileName:"Choose svg file...",fileContent:"",svgNotSupported:!1,alertInformation:""},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleChooseFile",value:function(e){var t=this;if(void 0!==e.target.files[0]){var n=e.target.files[e.target.files.length-1],a=new FileReader;a.onload=function(){var e=a.result;t.setState({fileContent:e})},a.readAsText(n,"UTF-8"),this.setState({fileName:n.name})}}},{key:"handleImportFile",value:function(){var e=(new X.a).parseFromString(this.state.fileContent),t=[];for(var n in console.log(e,"svgJson"),e.children){var a=e.children[n];if(this.isFigure(a))t.push(this.createFigureFromSVG(a));else{if("ANIMATE"!==a.name.toUpperCase()){var i="Not supported svg element: "+a.name+". ";return void this.setState({fileName:"Choose svg file...",svgNotSupported:!0,alertInformation:i})}this.addAnimationToFigure(a,t)}this.props.importFiguresFromFile(t)}this.setState({svgNotSupported:!1,fileName:"Choose svg file...",alertInformation:"SVG uploaded successfully."})}},{key:"isFigure",value:function(e){for(var t in L)if(L[t].toUpperCase()===e.name.toUpperCase())return!0;return!1}},{key:"createFigureFromSVG",value:function(e){var t=new $;for(var n in e.attributes){var a=e.attributes[n];"fill"===n?t.fill.hex=a:"xposition"===n?t.xPosition=parseInt(a):"yposition"===n?t.yPosition=parseInt(a):"numofsides"===n?t.numOfSides=parseInt(a):"figuretype"===n?t.figureType=a:"opacity"===n?t.opacity=parseFloat(a):"stroke-width"===n?t.strokeWidth=parseFloat(a):"size"===n?t.size=parseInt(a):"stroke"===n?t.stroke.hex=a:t[n]=a}return t}},{key:"addAnimationToFigure",value:function(e,t){var n=function(n){"#"+t[n].hrefid===e.attributes.href&&Object.keys(e.attributes).forEach(function(a,i){"_attributename"===a?t[n].animation.attributeName=e.attributes[a]:"_to"===a?t[n].animation.to=e.attributes[a]:"from"===a?t[n].animation.from=e.attributes[a]:t[n].animation[a]=e.attributes[a]})};for(var a in t)n(a)}},{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{type:"button",className:"btn btn-secondary float-right mr-2 mt-2  ","data-toggle":"modal","data-target":"#importModal"}," Import SVG "),i.a.createElement("div",{className:"modal fade",id:"importModal",tabIndex:-1,role:"dialog","aria-labelledby":"importModalLabel","aria-hidden":"true"},i.a.createElement("div",{className:"modal-dialog",role:"document"},i.a.createElement("div",{className:"modal-content"},i.a.createElement("div",{className:"modal-header"},i.a.createElement("h5",{className:"modal-title",id:"importModalLabel"},"SVGAnimation - Import SVG"),i.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},i.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),i.a.createElement("div",{className:"modal-body"},i.a.createElement("div",{className:"input-group"},i.a.createElement("div",{className:"input-group-prepend"},i.a.createElement("span",{className:"input-group-text",id:"inputGroupFileAddon01"},"Upload")),i.a.createElement("div",{className:"custom-file"},i.a.createElement("input",{type:"file",className:"custom-file-input",id:"inputGroupFile01","aria-describedby":"inputGroupFileAddon01",onChange:function(t){return e.handleChooseFile(t)},onClick:function(e){e.target.value=null}}),i.a.createElement("label",{className:"custom-file-label"},this.state.fileName)))),i.a.createElement("div",{className:"modal-footer"},i.a.createElement("button",{type:"button",className:"btn btn-primary","data-dismiss":"modal",onClick:function(){return e.handleImportFile()}},"Import"))))))}}]),t}(i.a.PureComponent),Z=Object(m.b)(null,function(e){return{importFiguresFromFile:function(t){return e(function(e){return{type:"IMPORT_FIGURES_FROM_FILE",payload:{importedFiguresList:e}}}(t))}}})(Q);var ee=function(e){var t=e.animation;return i.a.createElement("animate",{href:t.href,attributeName:void 0===e.attributeName?t.attributeName:e.attributeName,from:void 0===e.from?t.from:e.from,to:void 0===e.to?t.to:e.to,additive:t.additive,repeatCount:t.repeatCount,calcMode:t.calcMode,keyTimes:t.keyTimes,keySplines:t.keySplines,dur:"".concat(t.dur,"s"),begin:t.begin,fill:t.fill,_to:t.to,_from:t.from,_attributename:t.attributeName})};var te=function(e){var t=e.animation,n=t.r,a=2*n,r="M 0,0 m -"+n+", 0 a "+n+","+n+" 0 1,0 "+a+",0 a "+n+","+n+" 0 1,0 -"+a+",0";return i.a.createElement(i.a.Fragment,null,0!==t.r&&i.a.createElement("animateMotion",{dur:"".concat(t.dur,"s"),begin:t.begin,fill:t.fill,repeatCount:t.repeatCount,path:r}))};var ne=function(e){var t=e.figure,n=t.animationEnabled;return i.a.createElement(i.a.Fragment,null,i.a.createElement("circle",{style:{cursor:"pointer"},id:t.hrefid,opacity:t.opacity,fill:t.fill.hex,stroke:t.stroke.hex,strokeWidth:t.strokeWidth,cx:t.xPosition,cy:t.yPosition,r:t.size,href:t.href,figuretype:t.figureType,name:t.name,xposition:t.xPosition,yposition:t.yPosition,size:t.size},n&&i.a.createElement(te,{animation:t.animation})),n&&i.a.createElement(ee,{animation:t.animation}))};function ae(e){return"cx"===e.animation.attributeName?ie(e.xPosition+parseInt(e.animation.to),e.yPosition,e.size,e.numOfSides):"cy"===e.animation.attributeName?ie(e.xPosition,e.yPosition+parseInt(e.animation.to),e.size,e.numOfSides):void 0}function ie(e,t,n){var a=[];return a.push(parseInt(e-n/2),parseInt(t-n/2)),a.push(parseInt(e-n/2),parseInt(t+n/2)),a.push(parseInt(e+n/2),parseInt(t+n/2)),a.push(parseInt(e+n/2),parseInt(t-n/2)),a}var re=function(e){var t=e.figure,n=t.animationEnabled;return i.a.createElement(i.a.Fragment,null,i.a.createElement("polygon",{style:{cursor:"pointer"},id:t.hrefid,opacity:t.opacity,fill:t.fill.hex,stroke:t.stroke.hex,strokeWidth:t.strokeWidth,hrefid:t.hrefid,name:t.name,figuretype:t.figureType,xposition:t.xPosition,yposition:t.yPosition,numofsides:t.numOfSides,size:t.size},n&&i.a.createElement(te,{animation:t.animation})),n&&i.a.createElement(ee,{animation:t.animation,attributeName:"points",from:ie(t.xPosition,t.yPosition,t.size),to:ae(t)}))};function oe(e){return"cx"===e.animation.attributeName?se(e.xPosition+parseInt(e.animation.to),e.yPosition,e.size,e.numOfSides):"cy"===e.animation.attributeName?se(e.xPosition,e.yPosition+parseInt(e.animation.to),e.size,e.numOfSides):void 0}function se(e,t,n,a){for(var i=[],r=0;r<a;r++)i.push(parseInt(e+n*Math.cos(2*Math.PI*r/a)),parseInt(t+n*Math.sin(2*Math.PI*r/a)));return i}var ce=function(e){var t=e.figure,n=t.animationEnabled;return i.a.createElement(i.a.Fragment,null,i.a.createElement("polygon",{style:{cursor:"pointer"},id:t.hrefid,opacity:t.opacity,fill:t.fill.hex,stroke:t.stroke.hex,strokeWidth:t.strokeWidth,hrefid:t.hrefid,name:t.name,figuretype:t.figureType,xposition:t.xPosition,yposition:t.yPosition,numofsides:t.numOfSides,size:t.size},n&&i.a.createElement(te,{animation:t.animation})),n&&i.a.createElement(ee,{animation:t.animation,attributeName:"points",from:se(t.xPosition,t.yPosition,t.size,t.numOfSides),to:oe(t)}))},le=n(117),ue=n(118),de=n(27),me=n.n(de);function fe(){var e=Object(le.a)(["\n    cursor: ",";\n    margin: 10px;\n    display: inline-block\n"]);return fe=function(){return e},e}var pe=ue.a.div(fe(),function(e){return e.canClick?"pointer":"no-drop"}),he=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).handleKeyPress=function(e){var t=n.props,a=t.canUndo,i=t.canRedo,r=t.onUndo,o=t.onRedo;a&&e.ctrlKey&&"z"===e.key?r():i&&e.ctrlKey&&e.shiftKey&&"z"===e.key&&o()},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){var e=this.props,t=e.canUndo,n=e.canRedo,i=e.onUndo,r=e.onRedo;return a.createElement("div",null,a.createElement(pe,{canClick:t,onClick:function(){return t?i():null}},a.createElement(f.a,{icon:p.d,size:"2x"})),a.createElement(pe,{canClick:n,onClick:function(){return n?r():null}},a.createElement(f.a,{icon:p.b,size:"2x"})))}}]),t}(a.PureComponent),be=Object(m.b)(function(e){return{canUndo:e.figuresProjects.past.length>0,canRedo:e.figuresProjects.future.length>0}},function(e){return{onUndo:function(){return e(de.ActionCreators.undo())},onRedo:function(){return e(de.ActionCreators.redo())}}})(he),ve=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).svgText=i.a.createRef(),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"setFigure",value:function(e){null!==e.target.getAttribute("figuretype")&&this.props.changeActiveSVGFigure(e.target.id)}},{key:"getFiguresToRender",value:function(){var e=this.props.figuresList;return e&&e.map(function(e,t){switch(e.figureType){case"Circle":return i.a.createElement(ne,{key:t,figure:e});case"Square":return i.a.createElement(re,{key:t,figure:e});case"Polygon":return i.a.createElement(ce,{key:t,figure:e});default:return i.a.createElement(ne,{key:t,figure:e})}})}},{key:"renderSVG",value:function(){var e=this;return i.a.createElement("svg",{version:"1.1",ref:this.svgText,className:"border-top border-bottom",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(V.width," ").concat(V.height),width:"100%",height:"79vh",onClick:function(t){return e.setFigure(t)}},this.getFiguresToRender())}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"row w-100  d-flex align-content-center",style:{height:"10vh"}},i.a.createElement("div",{className:"col-lg-12 mt-5 text-center h-100"},i.a.createElement("span",{className:"h2"},"SVGAnimation"),i.a.createElement(K,{title:"SVGAnimation",svgText:this.renderSVG()}),i.a.createElement(Z,null))),this.renderSVG(),i.a.createElement(be,null))}}]),t}(i.a.PureComponent),ge=Object(m.b)(function(e){return{figuresList:e.figuresProjects.present.figuresList}},function(e){return{changeActiveSVGFigure:function(t){return e(function(e){return{type:"CHANGE_ACTIVE_SVG_FIGURE",payload:{hrefid:e}}}(t))}}})(ve),Ee=(n(322),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).isActiveEditor=function(e){return e===n.props.ifAnimationEditionMode?"active":""},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.handleEditorTabChange;return i.a.createElement("ul",{className:"svg-editor-nav nav nav-tabs nav-fill "},i.a.createElement("li",{className:"svg-editor-nav-item nav-item ",onClick:function(){return e(!1)}},i.a.createElement("button",{className:" border-left-0 nav-link btn btn-link .btn-outline-* w-100  "+this.isActiveEditor(!1)},"Properties")),i.a.createElement("li",{className:"svg-editor-nav-item nav-item",onClick:function(){return e(!0)}},i.a.createElement("button",{className:" border-right-0 nav-link btn btn-link .btn-outline-* w-100  "+this.isActiveEditor(!0)},"Animations")))}}]),t}(i.a.PureComponent)),ye=Object(m.b)(function(e){return{ifAnimationEditionMode:e.selectedList.ifAnimationEditionMode}},function(e){return{handleEditorTabChange:function(t){return e(function(e){return{type:"HANDLE_EDITOR_TAB_CHANGE",payload:e}}({flag:t}))}}})(Ee),je=(n(323),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"isActiveProjectFigureTab",value:function(e){return e===this.props.ifProjectCreationMode?" active":""}},{key:"render",value:function(){var e=this.props,t=e.selectedProject,n=e.handleProjectFigureTabChange;return i.a.createElement("ul",{className:"svg-editor-nav nav nav-tabs nav-fill",style:{height:"3vh"}},i.a.createElement("li",{className:"nav-item bg-light",onClick:function(){return n(!0)}},i.a.createElement("button",{className:"project-figure-nav-item btn btn-outline-secondary  h-100 w-100 "+this.isActiveProjectFigureTab(!0)},"Projects")),null!=t?i.a.createElement("li",{className:"nav-item bg-light ",onClick:function(){return n(!1)}},i.a.createElement("button",{className:"project-figure-nav-item btn btn-outline-secondary .btn-outline-*  h-100 w-100"+this.isActiveProjectFigureTab(!1)},"Figures")):i.a.createElement("li",{className:"nav-item  bg-light"},i.a.createElement("button",{className:"btn btn-outline-secondary .btn-outline-* h-100 w-100",disabled:!0},"Figures")))}}]),t}(i.a.PureComponent)),Oe=Object(m.b)(function(e){return{selectedProject:e.figuresProjects.present.selectedProject,ifProjectCreationMode:e.selectedList.ifProjectCreationMode}},function(e){return{handleProjectFigureTabChange:function(t){return e(function(e){return{type:"CHANGE_PROJECT_FIGURE_TAB",payload:e}}({flag:t}))}}})(je),Ne=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){console.log("SVGAnimation Mounted")}},{key:"render",value:function(){console.log("SVGAnimation render");var e=this.props,t=e.selectedFigure,n=e.ifAnimationEditionMode,a=e.ifProjectCreationMode;return i.a.createElement("div",{className:"container-fluid h-100 bg-white"},i.a.createElement("div",{className:"row h-100"},i.a.createElement("div",{className:"projects-figures col-lg-3 p-0 border-right overflow-auto"},i.a.createElement(Oe,null),a?i.a.createElement(N,null):i.a.createElement(E,null)),i.a.createElement("div",{className:"col-lg-5 p-0 h-100"},i.a.createElement(ge,null)),i.a.createElement("div",{className:"col-lg-4 h-100 bg-light overflow-auto border"},i.a.createElement(ye,null),t&&(n?i.a.createElement(H,null):i.a.createElement(R,null)))))}}]),t}(i.a.PureComponent),Pe=Object(m.b)(function(e){var t=e.figuresProjects.present.selectedFigure,n=e.selectedList;return{selectedFigure:t,ifProjectCreationMode:n.ifProjectCreationMode,ifAnimationEditionMode:n.ifAnimationEditionMode}})(Ne);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(324);var Ce=n(24),ke=n(32),Fe=n(47),xe=[new $,new $,new $];xe[0].fill.hex="#EB144C",xe[1].fill.hex="#FCB900",xe[1].xPosition=200,xe[2].fill.hex="#00D084",xe[2].xPosition=350;var Te=[new $,new $,new $];Te[0].fill.hex="#FCB900",Te[1].fill.hex="#FCB900",Te[1].xPosition=200,Te[2].fill.hex="#FCB900",Te[2].xPosition=350;var Ae=[new $,new $,new $];Ae[0].fill.hex="#EB144C",Ae[1].fill.hex="#EB144C",Ae[1].xPosition=200,Ae[2].fill.hex="#EB144C",Ae[2].xPosition=350;var Le=[xe,Te,Ae],we=n(325),Se=function e(){Object(s.a)(this,e),this.id=void 0,this.name=void 0,this.figuresList=void 0,this.id=e.staticId,this.name="Project ".concat(e.staticId.substr(0,3)),this.figuresList=[],e.staticId=we()};Se.staticId=we();var Ie=function(){var e=Object(ke.a)(Array(Le.length)).map(function(e,t){var n=new Se;return n.figuresList=Le[t],n});return e[0].name="Alpha",e[1].name="Beta",e[2].name="Gamma",{projectList:e,selectedProject:e[0],figuresList:e[0].figuresList,selectedFigure:e[0].figuresList[0]}}(),_e={ifProjectCreationMode:!0,ifAnimationEditionMode:!1};function Re(e,t){return e.filter(function(e,n){return e.id!==t})}function Ge(e,t){return null!==e&&e.id===t}function Ve(e,t,n){return e.find(function(e){return e[t]===n})}function Me(e,t){return Object.assign({},e,t)}function Ue(e){return Object(C.cloneDeep)(e)}function ze(e,t){var n=Ue(e),a=n.projectList,i=n.selectedProject,r=a.findIndex(function(e){return e.id===i.id});return a[r].figuresList=t,i.figuresList=t,{projectList:a,selectedProject:i}}var De=me()(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"HANDLE_IMPORTED_PROJECT_FILE":return function(e,t){var n=Ue(e).projectList,a=JSON.parse(t.payload.fileContent).concat(n);return Object(Fe.a)({},e,{projectList:a})}(e,t);case"IMPORT_FIGURES_FROM_FILE":return function(e,t){var n=t.payload.importedFiguresList,a=ze(e,n);return Me(e,{projectList:a.projectList,selectedProject:a.selectedProject,figuresList:n})}(e,t);case"CHANGE_ACTIVE_SVG_FIGURE":return function(e,t){var n=t.payload.hrefid;return Me(e,{selectedFigure:Ve(Ue(e).figuresList,"hrefid",n)})}(e,t);case"ADD_FIGURE":return function(e){return Object(Fe.a)({},e,{figuresList:[].concat(Object(ke.a)(e.figuresList),[new $])})}(e);case"DELETE_FIGURE":return function(e,t){var n=t.payload.id,a=Ue(e).selectedFigure,i=Re(e.figuresList,n),r=Ge(a,n),o=ze(e,i);return Me(e,{figuresList:i,selectedFigure:r?null:a,projectList:o.projectList,selectedProject:o.selectedProject})}(e,t);case"SHOW_FIGURE_EDITOR":return function(e,t){var n=Ve(e.figuresList,"id",t.payload.id);return console.log(n),Me(e,{selectedFigure:n})}(e,t);case"ADD_PROJECT":return function(e){return Object(Fe.a)({},e,{projectList:[].concat(Object(ke.a)(e.projectList),[new Se])})}(e);case"DELETE_PROJECT":return function(e,t){var n=t.payload.id,a=Ue(e),i=a.selectedProject,r=a.figuresList,o=a.selectedFigure,s=Re(e.projectList,n),c=Ge(i,n);return Me(e,{projectList:s,selectedProject:c?null:i,figuresList:c?[]:r,selectedFigure:c?null:o})}(e,t);case"SET_CURRENT_PROJECT":return function(e,t){var n=Ve(e.projectList,"id",t.payload.id);return void 0!==n?Me(e,{selectedProject:n,figuresList:n.figuresList,selectedFigure:null}):e}(e,t);case h:return function(e,t){var n=t.payload,a=n.type,i=n.value,r=Ue(e),o=r.selectedFigure,s=r.figuresList;switch(a){case"name":o.name=i;break;case"figureType":o.figureType=i,"Square"===i&&(o.numOfSides=4);break;case"size":o.size=i;break;case"xPosition":o.xPosition=i;break;case"yPosition":o.yPosition=i;break;case"numOfSides":o.numOfSides=i;break;case"opacity":o.opacity=i;break;case"fill":o.fill=i,console.log(i,"fill");break;case"stroke":o.stroke=i;break;case"strokeWidth":o.strokeWidth=i;break;case"animation.attributeName":o.animation.attributeName=i;break;case"animation.from":o.animation.from=i;break;case"animation.to":o.animation.to=i;break;case"animation.dur":o.animation.dur=i;break;case"animation.r":o.animation.r=i;break;case"animationEnabled":o.animationEnabled=i}s[s.findIndex(function(e){return e.id===o.id})]=o;var c=ze(e,s),l=c.projectList,u=c.selectedProject;return Me(e,{figuresList:s,projectList:l,selectedFigure:o,selectedProject:u})}(e,t);case"CHANGE_PROJECT_NAME":return function(e,t){var n=Ue(e),a=n.projectList,i=n.selectedProject;return i.name=t.payload.name,a[a.findIndex(function(e){return e.id===i.id})]=i,Me(e,{projectList:a,selectedProject:i})}(e,t);default:return e}},{filter:Object(de.excludeAction)(["SET_CURRENT_PROJECT","SHOW_FIGURE_EDITOR","CHANGE_ACTIVE_SVG_FIGURE"])}),He=Object(Ce.combineReducers)({figuresProjects:De,selectedList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"HANDLE_EDITOR_TAB_CHANGE":return Me(e,{ifAnimationEditionMode:t.payload.flag});case"CHANGE_PROJECT_FIGURE_TAB":return Me(e,{ifProjectCreationMode:t.payload.flag});default:return e}}}),We=n(121),Je=Object(Ce.createStore)(He,Object(We.composeWithDevTools)()),Be=document.getElementById("root");o.a.render(i.a.createElement(m.a,{store:Je},i.a.createElement(Pe,null)),Be),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},73:function(e,t,n){}},[[124,1,2]]]);
//# sourceMappingURL=main.39ac7d3f.chunk.js.map