 document.getElementsByTagName('BODY')[0].onclick = function () {
    $('.hint').hide('slide');
  }

  $(document).ready(function(){
    $(".search").focus(search);
    $(".search").keyup(search);
    $(".search").keyup(function(event) {
      $(this).css('width', '400px');
    });
    $(".search").change(function(){
      $(this).css('	-webkit-transition', 'width 0.5s ease-out;');
      $(this).css('width', '200px');
    });
	
    $('ul').delegate('li.note', "hover", function(){
      $(this).find('.note_tag').toggle();
    });

	
    function search() {
      if ($(this).attr('id') == "tag_search") {
        app_router.searchbyTag();
      } else {
        app_router.searchbyTitle();
			
      }
    }


    $('div').delegate('#close_new_form', 'click', function(){
      $(this).parent('div').remove();
      window.document = "";
    })
  });
