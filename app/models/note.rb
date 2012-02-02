class Note < ActiveRecord::Base
  attr_accessible :description, :source_url
  acts_as_taggable_on :tags
   validates :description, :presence => true
  
  
#  Relation  
   belongs_to :user
end
