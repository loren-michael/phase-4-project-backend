class RentalSerializer < ActiveModel::Serializer
  attributes :id, :movie, :price, :price_to_currency

  def price_to_currency
    
  end
end
