# == Schema Information
#
# Table name: sponsorees
#
#  id             :bigint           not null, primary key
#  date_of_birth  :date
#  emergency_fund :money
#  name           :string
#  notes          :text
#  surname        :string
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
class Sponsoree < ApplicationRecord
  has_many_attached :images
end
