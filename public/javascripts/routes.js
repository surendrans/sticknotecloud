var AppRouter = Backbone.Router.extend({
	
		routes :{
				"" : "notes_index",
				"/" : "notes_index",
				"search_by_desc": "searchbyTitle"
		},
		notes_index : function(){
		  $.getJSON('/notes', function(data) {
			  	if (data) {
			  			var notes = _(data).map(function(v) { return new Note(v.note) });
			  			new NoteIndex(notes);
			  	}
		  });
		},
		
		searchbyTitle : function() {
			$.getJSON('/notes/search_by_desc?q=' + $('#desc_search').val(), function(data) {
			  	if (data) {
			  			var notes = _(data).map(function(v) { return new Note(v.note) });
			  			new NoteIndex(notes);
			  	}
		  });
		},
		
		searchbyTag : function() {
			$.getJSON('/notes/search_by_tag?q=' + $('#tag_search').val(), function(data) {
			  	if (data) {
			  			var notes = _(data).map(function(v) { return new Note(v.note) });
			  			new NoteIndex(notes);
			  	}
		  });
		}
		
});
 var app_router = new AppRouter();
  Backbone.history.start({pushState: true});
