class Note < ActiveRecord::Base
  attr_accessible :description, :source_url
  acts_as_taggable_on :tags
  
  
end
