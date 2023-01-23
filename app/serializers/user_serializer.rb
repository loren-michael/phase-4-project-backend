class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :rentals
end
