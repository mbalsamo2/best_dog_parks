class AddUserIdToParks < ActiveRecord::Migration[5.1]
  def change
    add_column :parks, :user_id, :integer
  end
end
