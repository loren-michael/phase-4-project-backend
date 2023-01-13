class Store < ApplicationRecord
  validates :address, presence: true
  has_many :movies, :dependent => :destroy
end
