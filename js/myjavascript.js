// $(document).ready(function(){
// 	var stt =0;
// 	starImg= $("img.slide:first").attr("stt");
// 	endImg=$("img.slide:last").attr("stt");
// 	$("img.slide").each(function(){
// 		if($(this).is(':visible'))
// 			stt=$(this).attr("stt");
// 	});
// 	$("next").click(function(){
// 		if(stt==endImg){
// 			stt=-1;
// 		}
// 		next=++stt;
// 		$("img.slide").hide();
// 		$("img.slide").eq(next).show();
// 	});
// 	setInterval(function(){
// 		$("next").click();	
// 	}, 2000);
// });

// var imageList= new Array
// imageList[0] = new image; imageList[0].src="../image/slider1.png";
// imageList[1] = new image; imageList[1].src="../image/slider.png";
// function slideShow(imageNumber){
// 	document.slideShow.src=imageList[imageNumber].src
// 		imageNumber+=1		
// 	if (imageNumber<imageList.length) {
// 		window.setTimeout("slideShow("+imageNumber+")", 2000);
// 	}
// 	else{
// 		imageList=0;
// 		window.setTimeout("slideShow("+imageNumber+")", 2000);
// 	}
// }
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds