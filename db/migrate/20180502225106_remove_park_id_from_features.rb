class RemoveParkIdFromFeatures < ActiveRecord::Migration[5.1]
  def change
    remove_column :features, :park_id, :integer
  end
end
