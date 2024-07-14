require 'rails_helper'

# This spec was generated by rspec-rails when you ran the scaffold generator.
# It demonstrates how one might use RSpec to test the controller code that
# was generated by Rails when you ran the scaffold generator.
#
# It assumes that the implementation code is generated by the rails scaffold
# generator. If you are using any extension libraries to generate different
# controller code, this generated spec may or may not pass.
#
# It only uses APIs available in rails and/or rspec-rails. There are a number
# of tools you can use to make these specs even more expressive, but we're
# sticking to rails and rspec-rails APIs to keep things simple and stable.

RSpec.describe "/admin/sponsorees", type: :request do

  # This should return the minimal set of attributes required to create a valid
  # Sponsoree. As you add validations to Sponsoree, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) {
    skip("Add a hash of attributes valid for your model")
  }

  let(:invalid_attributes) {
    skip("Add a hash of attributes invalid for your model")
  }

  describe "GET /index" do
    it "renders a successful response" do
      Sponsoree.create! valid_attributes
      get sponsorees_url
      expect(response).to be_successful
    end
  end

  describe "GET /show" do
    it "renders a successful response" do
      sponsoree = Sponsoree.create! valid_attributes
      get admin_sponsoree_url(sponsoree)
      expect(response).to be_successful
    end
  end

  describe "GET /new" do
    it "renders a successful response" do
      get new_admin_sponsoree_url
      expect(response).to be_successful
    end
  end

  describe "GET /edit" do
    it "renders a successful response" do
      sponsoree = Sponsoree.create! valid_attributes
      get edit_admin_sponsoree_url(sponsoree)
      expect(response).to be_successful
    end
  end

  describe "POST /create" do
    context "with valid parameters" do
      it "creates a new Sponsoree" do
        expect {
          post sponsorees_url, params: { sponsoree: valid_attributes }
        }.to change(Sponsoree, :count).by(1)
      end

      it "redirects to the created sponsoree" do
        post sponsorees_url, params: { sponsoree: valid_attributes }
        expect(response).to redirect_to(sponsoree_url(Sponsoree.last))
      end
    end

    context "with invalid parameters" do
      it "does not create a new Sponsoree" do
        expect {
          post sponsorees_url, params: { sponsoree: invalid_attributes }
        }.to change(Sponsoree, :count).by(0)
      end


      it "renders a response with 422 status (i.e. to display the 'new' template)" do
        post sponsorees_url, params: { sponsoree: invalid_attributes }
        expect(response).to have_http_status(:unprocessable_entity)
      end

    end
  end

  describe "PATCH /update" do
    context "with valid parameters" do
      let(:new_attributes) {
        skip("Add a hash of attributes valid for your model")
      }

      it "updates the requested sponsoree" do
        sponsoree = Sponsoree.create! valid_attributes
        patch admin_sponsoree_url(sponsoree), params: { sponsoree: new_attributes }
        sponsoree.reload
        skip("Add assertions for updated state")
      end

      it "redirects to the sponsoree" do
        sponsoree = Sponsoree.create! valid_attributes
        patch admin_sponsoree_url(sponsoree), params: { sponsoree: new_attributes }
        sponsoree.reload
        expect(response).to redirect_to(admin_sponsoree_url(sponsoree))
      end
    end

    context "with invalid parameters" do

      it "renders a response with 422 status (i.e. to display the 'edit' template)" do
        sponsoree = Sponsoree.create! valid_attributes
        patch admin_sponsoree_url(sponsoree), params: { sponsoree: invalid_attributes }
        expect(response).to have_http_status(:unprocessable_entity)
      end

    end
  end

  describe "DELETE /destroy" do
    it "destroys the requested sponsoree" do
      sponsoree = Sponsoree.create! valid_attributes
      expect {
        delete admin_sponsoree_url(sponsoree)
      }.to change(Sponsoree, :count).by(-1)
    end

    it "redirects to the sponsorees list" do
      sponsoree = Sponsoree.create! valid_attributes
      delete admin_sponsoree_url(sponsoree)
      expect(response).to redirect_to(sponsorees_url)
    end
  end
end
