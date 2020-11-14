$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });


$(function(){ $("iframe").each(function(){var thisI=$(this); var regEx = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i; var vidID=thisI.attr("src").match(regEx)[1]; var nqReplace="https://netqualified.com/vid/?v="+vidID+"&bg=9dd1dc&brand=0&auto=0&controls=1&bgc=bfbcbc"; thisI.attr("src", nqReplace);});window.iNo = 0;	$("video").each(function(){	window.iNo++;	var thisV = $(this);	var vidPoster = thisV.attr("poster");	var vidWidth = thisV.attr("width");	var vidHeight = thisV.attr("height");	$("<iframe class=\"video embed-responsive-item\" id=\"nq-" + window.iNo + "\" width=\"" + vidWidth + "\" height=\"" + vidHeight + "\" src=\"\" frameborder=\"0\" allowfullscreen></iframe>").insertBefore( thisV );	$myVideo = $("#nq-" + window.iNo);	$("source").each(function(){	var thisS = $(this).attr("src");	$myVideo.attr("src", "https://netqualified.com/vid/_dev/html5.php?sources="+thisS+"&img="+vidPoster+"&bg=9dd1dc&bgc=bfbcbc");	});	$(thisV).remove();	});});