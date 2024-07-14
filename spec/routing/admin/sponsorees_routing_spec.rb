require "rails_helper"

RSpec.describe SponsoreesController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/admin/sponsorees").to route_to("admin/sponsorees#index")
    end

    it "routes to #new" do
      expect(get: "/admin/sponsorees/new").to route_to("admin/sponsorees#new")
    end

    it "routes to #show" do
      expect(get: "/admin/sponsorees/1").to route_to("admin/sponsorees#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/admin/sponsorees/1/edit").to route_to("admin/sponsorees#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/admin/sponsorees").to route_to("admin/sponsorees#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/admin/sponsorees/1").to route_to("admin/sponsorees#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/admin/sponsorees/1").to route_to("admin/sponsorees#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/admin/sponsorees/1").to route_to("admin/sponsorees#destroy", id: "1")
    end
  end
end
