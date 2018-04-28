class RemoveParkIdFromFeatures < ActiveRecord::Migration[5.1]
  def up
    remove_column :features, :park_id, :integer
  end

end
