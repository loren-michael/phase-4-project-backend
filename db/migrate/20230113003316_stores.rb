class Stores < ActiveRecord::Migration[7.0]
  def change
    create_table :stores do |t|
      t.string :address
    end
  end
end
