class Store < ApplicationRecord
  validates :address, presence: true, uniqueness: true
  has_many :movies, dependent: :destroy
end
