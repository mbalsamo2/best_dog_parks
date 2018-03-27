class CreateParkFeatures < ActiveRecord::Migration[5.1]
  def change
    create_table :park_features do |t|
      t.integer :park_id
      t.integer :feature_id
    end
  end
end
