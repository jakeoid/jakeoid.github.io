var target = $(".page-header").offset();

$(window).scroll(function () {
	if(target > 100){
		alert("Hello");
	}
});