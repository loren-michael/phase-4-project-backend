class RentalSerializer < ActiveModel::Serializer
  attributes :id, :movie, :store, :rental_summary

  def rental_summary
    "Test"
  end
end
