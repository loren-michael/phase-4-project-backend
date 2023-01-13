class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :poster_url, :mpaa, :year, :runtime, :synopsis, :availability
end
