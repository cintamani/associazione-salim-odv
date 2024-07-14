require 'rails_helper'

RSpec.describe "admin/sponsorees/edit", type: :view do
  let(:sponsoree) {
    Sponsoree.create!(
      name: "MyString",
      surname: "MyString",
      notes: "MyText",
      emergency_fund: "",
      images: nil
    )
  }

  before(:each) do
    assign(:sponsoree, sponsoree)
  end

  it "renders the edit sponsoree form" do
    render

    assert_select "form[action=?][method=?]", admin_sponsoree_path(sponsoree), "post" do

      assert_select "input[name=?]", "sponsoree[name]"

      assert_select "input[name=?]", "sponsoree[surname]"

      assert_select "textarea[name=?]", "sponsoree[notes]"

      assert_select "input[name=?]", "sponsoree[emergency_fund]"

      assert_select "input[name=?]", "sponsoree[images]"
    end
  end
end
