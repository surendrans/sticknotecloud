TagIndex = Backbone.View.extend({
 
    el : 	'.tag_cloud',
    events: {
        "click a.tag":          "show"
        
    },
    initialize: function(tags){
        this.tags = tags
        this.render()
    },
        
    render : function(){
        //var template = _.template("<b><%= value %></b><br />");
        $(this.el).html(JST.tag_list({
            tags:  this.tags
        }));
    },
        show : function (e) {
         var element = $(e.currentTarget);
        	app_router.searchbyTag1(e.currentTarget.text);
        }
        
 
});
 
