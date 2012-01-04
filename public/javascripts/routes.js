var AppRouter = Backbone.Router.extend({
	
		routes :{
				"" : "notes_index"
		},
		
		notes_index : function(){
		  $.getJSON('/notes', function(data) {
			  	if (data) {
			  			var notes = _(data).map(function(v) { return new Note(v.note) });
			  			new NoteIndex(notes);
			  	}
		  });
		}
		
});
 var app_router = new AppRouter;
    Backbone.history.start({pushState: true});
