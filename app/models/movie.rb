class Movie < ApplicationRecord
  validates :title, presence: true
  belongs_to :store
end
