"use strict"

// addRecentImagesToDom()

// function addRecentImagesToDom (){

// 	function tag(imgTittle, index){
// 		const dashRegx=/-/gi
// 		const imgFormatRegx =/\.[jp][pn]g/gi;

// 		const imgDesc= imgTittle.replace(dashRegx,' ').replace(imgFormatRegx, '')
// 		console.log(imgDesc)
			
// 		return `<div class="recent-el el-${index+1}">
// 			<div class="img-holder" style="background-image:url(./assets/images/${imgTittle}"></div>
// 			<div class="img-desc"><p className="img-title">${imgDesc}</p></div>	
// 		</div>`
// 	}

// 	rctImgSrcArrray.forEach((el,index)=>{
// 		$('.recents').append(tag(el, index))
// 	})
// }

$(document).scroll(()=>addShadowToHeader.bind(this)())


function addShadowToHeader(){
	var header=document.querySelector('header')
	
	if(this.scrollY>0){
		if(!(header.classList.contains('shadow')) ){	
			header.classList.add('shadow')
		}
	}
	else{
		if((header.classList.contains('shadow')) ){
			header.classList.remove('shadow')
		}
	}		
}

