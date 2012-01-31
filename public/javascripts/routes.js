var AppRouter = Backbone.Router.extend({
	
    routes :{
        "" : "notes_index",
        "/" : "notes_index",
        "search_by_desc": "searchbyTitle",
        "new"   : "new_note"
    },
    notes_index : function(){
        $.getJSON('/notes', function(data) {
            if (data) {
                var notes = _(data).map(function(v) {
                    return new Note(v.note)
                });
                new NoteIndex(notes);
            }
        });
    },
		
    searchbyTitle : function() {
        $.getJSON('/notes/search_by_desc?q=' + $('#desc_search').val(), function(data) {
            if (data) {
                var notes = _(data).map(function(v) {
                    return new Note(v.note)
                });
                new NoteIndex(notes);
            }
        });
    },
		
    searchbyTag : function() {
        $.getJSON('/notes/search_by_tag?q=' + $('#tag_search').val(), function(data) {
            if (data) {
                var notes = _(data).map(function(v) {
                    return new Note(v.note)
                });
                new NoteIndex(notes);
            }
        });
    },

    new_note : function() {
        new newNote();
    }
});
var app_router = new AppRouter();
$(document).ready(function(){
    Backbone.history.start();
});

