var main = function(){
    $('.dropdown-toggle').click(function(){
        $('.dropdown-menu').slideToggle(1000);

});

		$('.dropdown-members').hide();
       $('.dropdown-toggle-member').click(function(){
               $('.dropdown-members').slideToggle(1200);
       });
}


$(document).ready(main);