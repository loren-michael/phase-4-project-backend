class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :poster_url, :mpaa, :year, :runtime, :synopsis, :summary, :availability, :store_id, :store

  def summary
    "#{self.object.synopsis[0..49]}"
  end
end
