class CreateBadges < ActiveRecord::Migration
  def change
    create_table :badges do |t|
      t.text :phrase
      t.integer :value, default: 0
      t.references :teacher, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
