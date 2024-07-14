class CreateSponsorees < ActiveRecord::Migration[7.1]
  def change
    create_table :sponsorees do |t|
      t.string :name
      t.string :surname
      t.date :date_of_birth
      t.text :notes
      t.money :emergency_fund, default: 0

      t.timestamps
    end
  end
end
