 NoteIndex = Backbone.View.extend({
 
 		el : 	'#note_cloud',
 	initialize: function(notes){
 			 this.notes = notes
          this.render()
        },
        
   render : function(){
   		
   	var template = _.template("<b><%= value %></b><br />");
   	var notes = _(this.notes).map(function(note){
   				return template({value : note.get('desc')})
   			});
	   	//$(this.el).html(notes.join(''));
	   	$(this.el).html(JST.index({ notes:  this.notes }));
       // $('#note_cloud').html(this.el);
   }
        
        
 
 });
 
