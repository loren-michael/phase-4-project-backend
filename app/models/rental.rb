class Rental < ApplicationRecord
  validates :user_id, presence: true
  validates :store_id, presence: true
  validates :movie_id, presence: true
  belongs_to :user
  belongs_to :store
  belongs_to :movie
end
