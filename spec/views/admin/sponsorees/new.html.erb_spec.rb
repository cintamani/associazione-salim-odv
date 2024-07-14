require 'rails_helper'

RSpec.describe "admin/sponsorees/new", type: :view do
  before(:each) do
    assign(:sponsoree, Sponsoree.new(
      name: "MyString",
      surname: "MyString",
      notes: "MyText",
      emergency_fund: "",
      images: nil
    ))
  end

  it "renders new sponsoree form" do
    render

    assert_select "form[action=?][method=?]", admin_sponsorees_path, "post" do

      assert_select "input[name=?]", "sponsoree[name]"

      assert_select "input[name=?]", "sponsoree[surname]"

      assert_select "textarea[name=?]", "sponsoree[notes]"

      assert_select "input[name=?]", "sponsoree[emergency_fund]"

      assert_select "input[name=?]", "sponsoree[images]"
    end
  end
end
