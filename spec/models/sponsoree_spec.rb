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
require 'rails_helper'

RSpec.describe Sponsoree, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
