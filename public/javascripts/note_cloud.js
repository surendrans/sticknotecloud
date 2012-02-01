 document.getElementsByTagName('BODY')[0].onclick = function () {
	$('.hint').css( '-webkit-transition', 'left 1s ease-in');
    $('.hint').hide('slide');
  
  	}
  
  

  $(document).ready(function(){
  
    $('#show_tags').click(animate_tags)
    $(".search").focus(search);
    $(".search").keyup(search);
   // $(".search").keyup(function(event) {
  //    $(this).css('width', '400px');
  //  });
   // $(".search").change(function(){
   //   $(this).css('	-webkit-transition', 'width 0.5s ease-out;');
   //   $(this).css('width', '200px');
   // });
	
    $('ul').delegate('li.note', "hover", function(){
      $(this).find('.note_tag').toggle();
    });

	
    function search() {
      if ($(this).attr('id') == "search_by_tag") {
        app_router.searchbyTag();
      } else if ($(this).attr('id') == "search_by_note") {
        app_router.searchbyTitle();
			
      } else {
       app_router.searchTags();
      }
    }
    
      function animate_tags() {
      if ($('#tag_holder').css('left') == "-300px") {
		$('#tag_holder').css('left', '0px');
		 $(this).html('Close Tags');
      } else {
      $(this).html('Show Tags');
      $('#tag_holder').css('left', '-300px');
      }
 
			}



    $('div').delegate('#close_new_form', 'click', function(){
      $(this).parent('div').remove();
      window.document = "";
    })
  });
