$(document).ready(function(){
	
	var swiper = new Swiper('.no-banner', {
		autoplay: 2000,
        pagination: '.swiper-pagination',
        autoplayDisableOnInteraction: false,
        direction : 'vertical',
        loop : true,
        loopAdditionalSlides : 2,
        slidesPerView : 'auto',
        loopedSlides :6,
    }); 
    
    
    var index=0;
		    var slider=null;
			$(".btn ul li").click(function(){
				
				index=$(this).index(); 
				/*index()是一个方法*/
				$(".btn ul li").eq(index).css({"background-color":"red"})
				.siblings().css({"background-color":"#908B8B"})
				
				play(index);
				clearInterval(slider);
				autoplay();
				
			})
			
		function play(index){
			//序列号*-730
            //$(".btn ul li").eq(index).addClass(active).siblings().removeClass("active");
			
			//$(".str").animate({left:index*-730},1000);     //动画效果
			
			//淡入淡出
			$(".str").children().eq(index).fadeIn(400).siblings().fadeOut(400); 
			
		};
		
		//自动轮播
		function autoplay(){
			
		slider=setInterval(function(){
				
				index++;
				
				if(index==4){
					
					index=0;	
				}
				
				$(".btn ul li").eq(index).css({"background-color":"red"})
				.siblings().css({"background-color":"#908B8B"});
				
				play(index);
				
			},3000);
			
		}
		
		autoplay();
		
    
    
    
    var swiper = new Swiper('.focus-banner', {
		autoplay: 3000,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplayDisableOnInteraction: false,
        slidesPerView: 3,
        loop : true,
    }); 
    
    
    
    
    
    
    
    
    
    
	
})