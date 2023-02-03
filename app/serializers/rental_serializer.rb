class RentalSerializer < ActiveModel::Serializer
  attributes :movie  # //, :store, :rental_summary

  def rental_summary
    "Test"
  end
end
