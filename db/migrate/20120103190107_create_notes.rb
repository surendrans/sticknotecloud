class CreateNotes < ActiveRecord::Migration
  def self.up
    create_table :notes do |t|
      t.text :desc
      t.string :source_url
      t.timestamps
    end
  end

  def self.down
    drop_table :notes
  end
end
