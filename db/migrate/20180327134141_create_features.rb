class CreateFeatures < ActiveRecord::Migration[5.1]
  def change
    create_table :features do |t|
      t.string :name
      t.integer :rating
      t.text :comment

      t.timestamps
    end
  end
end
