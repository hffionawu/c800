// JavaScript Document
	$(document).ready(function() { // On document ready
  // For each .box element
  $('#content .h50').each(function() {
    // Set up the variables
    var $this = $(this),
	  //h = $this.siblings('.left > img').height()
      h = $this.find('img').height()  ;
	  if($this.height() != $('#content .left img') .height() /2 || $(window).width() > 800 ){
      $this.height((h / 2) - 3 )
	  }
  });
  $(window).on( 'resize', function () {
	  $('#content .h50').each(function() {
    // Set up the variables
    var $this = $(this),
	  //h = $this.siblings('.left > img').height()
      h = $this.find('img').height()  ;
	  if($this.height() != $('#content .left img') .height() /2 || $(window).width() > 800 ){
      $this.height((h / 2) - 3 )
	  }
  }); 
  })
});