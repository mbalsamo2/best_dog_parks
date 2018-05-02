class AddParkIdToFeatures < ActiveRecord::Migration[5.1]
  def change
    add_column :features, :park_id, :integer
  end
end
