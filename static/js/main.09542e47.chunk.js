(window.webpackJsonpbootcamp14=window.webpackJsonpbootcamp14||[]).push([[0],{10:function(e,a,t){e.exports={topImage:"App_topImage__HEKNi"}},2:function(e,a,t){e.exports={galleryItem:"PhotoCard_galleryItem__1uBMt",photoCard:"PhotoCard_photoCard__PgiZ5",photo:"PhotoCard_photo__24ABw",stats:"PhotoCard_stats__3CqsO",statsItem:"PhotoCard_statsItem__1Nczb",fullscreenButton:"PhotoCard_fullscreenButton__1Tn9w"}},22:function(e,a,t){e.exports={gallery:"Gallery_gallery__1_m-s"}},23:function(e,a,t){e.exports={searchForm:"SearchForm_searchForm__1sXZj"}},25:function(e,a,t){e.exports=t.p+"static/media/Moogle.0210d676.jpg"},26:function(e,a,t){e.exports=t(49)},48:function(e,a,t){},49:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(21),l=t.n(r),c=t(11),s=t(3),i=t(4),m=t(6),u=t(5),d=t(7),h=t(2),p=t.n(h),f=function(e){var a=e.id,t=e.webformatURL,n=e.largeImageURL,r=e.likes,l=e.views,c=e.comments,s=e.downloads,i=e.handleOpenModal;return o.a.createElement("li",{className:p.a.galleryItem},o.a.createElement("div",{className:p.a.photoCard},o.a.createElement("img",{className:p.a.photo,src:t,"data-src":n,alt:a}),o.a.createElement("div",{className:p.a.stats},o.a.createElement("p",{className:p.a.statsItem},o.a.createElement("i",{className:"material-icons"},"thumb_up"),r),o.a.createElement("p",{className:p.a.statsItem},o.a.createElement("i",{className:"material-icons"},"visibility"),l),o.a.createElement("p",{className:p.a.statsItem},o.a.createElement("i",{className:"material-icons"},"comment"),c),o.a.createElement("p",{className:p.a.statsItem},o.a.createElement("i",{className:"material-icons"},"cloud_download"),s)),o.a.createElement("button",{type:"button",onClick:i,className:p.a.fullscreenButton},o.a.createElement("i",{className:"material-icons"},"zoom_out_map"))))},g=t(9),v=t.n(g),y=function(e){var a=e.handleClickBtn;return o.a.createElement("div",{className:v.a.wrapBtn},o.a.createElement("button",{className:v.a.buttonLoad,type:"button",onClick:a},"Load more"))},_=t(22),b=t.n(_),E=function(e){var a=e.imagesInfo,t=e.handleClickBtn,n=e.handleOpenModal;return o.a.createElement(o.a.Fragment,null," ",o.a.createElement("ul",{className:b.a.gallery},a.map((function(e,a){return o.a.createElement(f,{key:a,id:e.id,webformatURL:e.webformatURL,largeImageURL:e.largeImageURL,likes:e.likes,views:e.views,comments:e.comments,downloads:e.downloads,handleOpenModal:n})}))),o.a.createElement(y,{handleClickBtn:t}))},C=t(23),O=t.n(C),w=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(o)))).state={query:"",page:1},t.handelChange=function(e){t.setState({query:e.target.value})},t.handleSubmit=function(e){e.preventDefault(),(0,t.props.handleSubmitForm)(t.state),t.resetSearch()},t.resetSearch=function(){t.setState({query:""})},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.state.query;return o.a.createElement("form",{className:O.a.searchForm,onSubmit:this.handleSubmit},o.a.createElement("input",{onChange:this.handelChange,value:e,type:"text",autoComplete:"off",placeholder:"Search images..."}))}}]),a}(n.Component),I=t(8),M=t.n(I),N=function(e){function a(){var e,t;Object(s.a)(this,a);for(var o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).overlayRef=Object(n.createRef)(),t.handleBtnModal=function(e){"Escape"===e.code&&t.props.handleCloseModal()},t.handleModalOverlay=function(e){e.target===t.overlayRef.current&&t.props.handleCloseModal()},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentWillMount",value:function(){window.removeEventListener("keyup",this.handleBtnModal)}},{key:"componentDidMount",value:function(){window.addEventListener("keyup",this.handleBtnModal)}},{key:"render",value:function(){var e=this.props.largeImageURL;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{onKeyUp:this.handleBtnModal,onClick:this.handleModalOverlay,className:M.a.overlay,role:"presentation",ref:this.overlayRef},o.a.createElement("div",{className:M.a.modal},o.a.createElement("img",{className:M.a.modalPhoto,src:e,alt:e}))))}}]),a}(n.Component),k=t(24),B=t.n(k),j="&key=".concat("13631456-c9d9ce7db3701f221793ce82d"),S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return B.a.get("https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=".concat(e,"&page=").concat(a,"&per_page=12").concat(j))},q=t(25),L=t.n(q),R=t(10),x=t.n(R),F=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(o)))).state={imagesInfo:[],query:"",page:1,isModalOpen:!1,largeImage:""},t.handleSubmitForm=function(e){var a=e.query,n=e.page;S(a,n).then((function(e){var n=e.data.hits;return t.setState({query:a,imagesInfo:n,page:2})})).catch((function(e){return e}))},t.handleClickBtn=function(){var e=t.state,a=e.query,n=e.page;S(a,n).then((function(e){var a=e.data;return t.setState((function(e){return{imagesInfo:[].concat(Object(c.a)(e.imagesInfo),Object(c.a)(a.hits)),page:e.page+1}}))})).catch((function(e){return e.message}))},t.handleOpenModal=function(e){var a=e.currentTarget.parentElement.firstChild.dataset.src;t.setState({isModalOpen:!0,largeImage:a})},t.handleCloseModal=function(){return t.setState({isModalOpen:!1})},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,a=this.state,t=a.query,n=a.page;S(t,n).then((function(a){var n=a.data.hits;return e.setState({query:t,imagesInfo:n,page:2})})).catch((function(e){return e}))}},{key:"componentDidUpdate",value:function(e){var a=this.state.query;e.query!==a&&window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,a=e.isModalOpen,t=e.imagesInfo,n=e.query,r=e.largeImage;return o.a.createElement("div",{className:x.a.app},o.a.createElement("img",{src:L.a,alt:"top-moogle",className:x.a.topImage}),o.a.createElement(w,{handleSubmitForm:this.handleSubmitForm,query:n}),o.a.createElement(E,{imagesInfo:t,handleClickBtn:this.handleClickBtn,handleOpenModal:this.handleOpenModal}),a&&o.a.createElement(N,{className:"modal-photo-card",handleCloseModal:this.handleCloseModal,largeImageURL:r}))}}]),a}(n.Component);t(48);l.a.render(o.a.createElement(F,null),document.getElementById("root"))},8:function(e,a,t){e.exports={overlay:"Modal_overlay__2OoL6",modal:"Modal_modal__oAqIT",modalPhoto:"Modal_modalPhoto__2Y0Ag"}},9:function(e,a,t){e.exports={wrapBtn:"Button_wrapBtn__2v-Yf",buttonLoad:"Button_buttonLoad__3blib"}}},[[26,1,2]]]);
//# sourceMappingURL=main.09542e47.chunk.js.map