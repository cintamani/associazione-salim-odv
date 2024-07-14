json.extract! sponsoree, :id, :name, :surname, :date_of_birth, :notes, :emergency_fund, :images, :created_at, :updated_at
json.url admin_sponsoree_url(sponsoree, format: :json)
json.images do
  json.array!(sponsoree.images) do |image|
    json.id image.id
    json.url url_for(image)
  end
end
