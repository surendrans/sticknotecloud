class NotesController < ApplicationController
autocomplete :tag, :name, :class_name => 'ActsAsTaggableOn::Tag'
  def index
    @notes = Note.all
    respond_to do |f|
    f.json{ render :json => @notes }
    f.html
    end
   
  end

  def show
    @note = Note.find(params[:id])
  end

  def new
    @note = Note.new
  end

  def create
    @note = Note.new(params[:note])
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
  		 @notes = Note.where("description like ? ", "%#{params[:q]}%")
@notes = Note.all if params[:q] == ""
  		 render :json => @notes
  end
   def search_by_tag
  		 @notes = Note.tagged_with([params[:q]], :any => true)
		 @notes = Note.all if params[:q] == ""
  		 render :json => @notes
  end
  
end
