// JavaScript Document

/* ロールオーバー--------------------------------- */


function iconrollover() {
if(document.getElementsByTagName) {
var images = document.getElementsByTagName("img");

for(var i=0; i < images.length; i++) {
if(images[i].getAttribute("src").match("_down."))
{
images[i].onmouseover = function() {
this.setAttribute("src", this.getAttribute("src").replace("_down.", "_over."));
}
images[i].onmouseout = function() {
this.setAttribute("src", this.getAttribute("src").replace("_over.", "_down."));
}
}
}
}
}

if(window.addEventListener) {
window.addEventListener("load", iconrollover, false);
}
else if(window.attachEvent) {
window.attachEvent("onload", iconrollover);
}


/* スクロール--------------------------------- */
$(function(){
	$("a[href^=#]").click(function(){
		var Hash = $(this.hash);
		var HashOffset = $(Hash).offset().top;
		$("html,body").animate({
			scrollTop: HashOffset
		}, 1000);
		return false;
	});
});


/* サブウィンドウ--------------------------------- */

function access_print(url) {
   newwin = window.open(url,'html','width=740,height=700,status=no,scrollbars=yes,directories=no,menubar=yes,resizable=no,toolbar=no,margin=0,left=0,top=0');
   newwin.focus();
}