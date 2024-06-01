class AddFieldsToFounder < ActiveRecord::Migration[7.1]
  def change
    change_table :founders, bulk: true do |t|
      t.string :provider
      t.string :uid
    end
  end
end
