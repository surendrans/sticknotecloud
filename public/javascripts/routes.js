var AppRouter = Backbone.Router.extend({
	
    routes :{
        "" : "notes_index",
        "/" : "notes_index",
        "search_by_desc": "searchbyTitle",
        "new"   : "new_note",
        "search_tags" : "searchTags",
        "show_all" : "notes_index"
    },
    notes_index : function(){
    $('.search').val();
        $.getJSON('/notes/get_all_notes', function(data) {
            if (data) {
                var notes = _(data).map(function(v) {
                    return new Note(v)
                });
                new NoteIndex(notes);
            }
        });
        this.searchTags();
    },
		
    searchbyTitle : function() {
        $.getJSON('/notes/search_by_desc?q=' + $('#search_by_note').val(), function(data) {
            if (data) {
                var notes = _(data).map(function(v) {
                    return new Note(v)
                });
                new NoteIndex(notes);
            }
        });
    },
		
    searchbyTag : function() {
        $.getJSON('/notes/search_by_tag?q=' + $('#search_by_tag').val(), function(data) {
            if (data) {
                var notes = _(data).map(function(v) {
                    return new Note(v)
                });
                new NoteIndex(notes);
            }
        });
    },
    searchbyTag1 : function(query) {
        $.getJSON('/notes/search_by_tag?q=' + query, function(data) {
            if (data) {
                var notes = _(data).map(function(v) {
                    return new Note(v)
                });
                new NoteIndex(notes);
            }
        });
    },

    new_note : function() {
        new newNote();
    },
    
    searchTags : function () {
    	$.getJSON('/notes/search_tags?q=' + $('#search_tags').val(), function(data) {
            if (data) {
                var tags = _(data).map(function(v) {
                    return new Tag(v.tag)
                });
                new TagIndex(tags);
            }
        });
        
    }
});
var app_router = new AppRouter();
$(document).ready(function(){
    Backbone.history.start();
});

