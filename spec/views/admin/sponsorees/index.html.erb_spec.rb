require 'rails_helper'

RSpec.describe "admin/sponsorees/index", type: :view do
  before(:each) do
    assign(:sponsorees, [
      Sponsoree.create!(
        name: "Name",
        surname: "Surname",
        notes: "MyText",
        emergency_fund: "",
        images: nil
      ),
      Sponsoree.create!(
        name: "Name",
        surname: "Surname",
        notes: "MyText",
        emergency_fund: "",
        images: nil
      )
    ])
  end

  it "renders a list of admin/sponsorees" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
    assert_select cell_selector, text: Regexp.new("Name".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("Surname".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("MyText".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("".to_s), count: 2
    assert_select cell_selector, text: Regexp.new(nil.to_s), count: 2
  end
end
