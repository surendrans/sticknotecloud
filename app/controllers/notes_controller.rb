class NotesController < ApplicationController
	before_filter :authenticate_user!
  
  def index
    @note = Note.new
     @tags = Note.tag_counts_on(:tags).order("name asc")
  end

def get_all_notes
    @notes = current_user.notes :include => [:tags] 
  		render :json => notes_with_tags 
end

  def show
    @note = Note.find(params[:id])
  end

  def new
    @note = Note.new
  end

  def create
    @note = current_user.notes.new(params[:note])
    @note.tag_list = params["tag_list"]
    if @note.save
      redirect_to @note, :notice => "Successfully created note."
    else
      render :action => 'new'
    end
  end

  def edit
    @note = Note.find(params[:id])
  end

  def update
    @note = Note.find(params[:id])
    if @note.update_attributes(params[:note])
    @note.tag_list = params[:tag_list]
    @note.save
      redirect_to @note, :notice  => "Successfully updated note."
    else
      render :action => 'edit'
    end
  end

  def destroy
    @note = Note.find(params[:id])
    @note.destroy
    redirect_to notes_url, :notice => "Successfully destroyed note."
  end
  
  def search_by_desc
  		 @notes = current_user.notes.where("description like ? ", "%#{params[:q]}%").includes(:tags) 
		 @notes = current_user.notes :include => [:tags]   if params[:q] == ""
  		 render :json => notes_with_tags
  end
  
  
   def search_by_tag
  		 @notes = current_user.notes.tagged_with([params[:q]], :any => true).includes(:tags)  
		 @notes = current_user.notes.all :include => [:tags]  if params[:q] == ""
  		 render :json => notes_with_tags
  end
  
  
  def search_tags 
  		 @tags = current_user.notes.tag_counts_on(:tags).order("name asc").where("name like '#{params[:q]}%'")
  		 render :json => @tags
  end
  
  def list_users
  	@users = User.all
  end
  
  private
  
  def notes_with_tags
  		@notes.collect do  |note|
	    {:description => note.description, :id => note.id, :tags => note.tags.collect(&:name)}
	    end
    end
  
end
