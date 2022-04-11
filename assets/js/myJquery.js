$(document).ready(()=>{
	HandleSlideShow()// call the slide show function

	$('.nav').click(NavbarToggleFunc)// this handles sliding in the navBar when the navBar icon is clicked.

	$('.navbar li').each(function(index,item){
		$(this).click(function(){
			setTimeout(NavbarToggleFunc,700)
		})
	})// this handles sliding out the navbar when a link in it is clicked

	function NavbarToggleFunc(){	
		$('.navbar').toggleClass('active')	
		}


function HandleSlideShow(){
	
	const rctImgSrcArrray=[
		"knotless-braid.jpg el-1",
		"jell-pack-with-nice-edges.png el-2",
		 "bob-marley-deisgn.png el-3",
		 "beaded-design.png el-4",
		 "ghana-weaving.png el-5",
		 "jungle-braid.jpg el-6"
		 ]
		
		 
		 $('.recent-styles-slide').css("background-image",`url(../images/${rctImgSrcArrray[0].split(' ')[0]})`)
		  
		 $('.recent-styles-slide').click(slideFunc)

		 function slideFunc(){
			let initialItem=rctImgSrcArrray.shift()
			rctImgSrcArrray.push(initialItem)
			let newClass=rctImgSrcArrray[0].split(' ')[1]
			
			const slideParent=$('.slide-container')[0]
			slideParent.className='slide-container'
			slideParent.classList.add(newClass)			
			$('.slide-container').css('background-image',`url(../images/${rctImgSrcArrray[0].split(' ')[0]})`)
			$('.recent-styles-slide').slideUp(700)

			const slide= $('.recent-styles-slide')[0]
			setTimeout(function(){
			slide.className='recent-styles-slide'
			slide.classList.add(newClass)		

			$('.recent-styles-slide').slideDown(0)
			$('.recent-styles-slide').css("background-image",`url(../images/${rctImgSrcArrray[0].split(' ')[0]})`)

		},700)

		
		 }
		 setInterval(slideFunc,3500)

		
}



})

