require 'rails_helper'

RSpec.describe "admin/sponsorees/show", type: :view do
  before(:each) do
    assign(:sponsoree, Sponsoree.create!(
      name: "Name",
      surname: "Surname",
      notes: "MyText",
      emergency_fund: "",
      images: nil
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Name/)
    expect(rendered).to match(/Surname/)
    expect(rendered).to match(/MyText/)
    expect(rendered).to match(//)
    expect(rendered).to match(//)
  end
end
