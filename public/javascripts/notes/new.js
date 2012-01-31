newNote = Backbone.View.extend({
    events: {
        "submit form":          "save"
    },
    element : '#new-note',
    initialize: function(){
        this.render();
    },

    render : function(){
        $(this.element).html(JST.new_note());
    // $('#note_cloud').html(this.el);
    },

    save : function() {
        var note =this.$('[name=note]').val();
        var url =this.$('[name=url]').val();
        var tag_list =this.$('[name=tags]').val();
        var note = new Note({'note' : {'description' : note, 'source_url' : url}, 'tags' : tag_list })
    }

});

