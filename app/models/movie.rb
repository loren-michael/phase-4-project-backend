class Movie < ApplicationRecord
  validates :title, presence: true
  belongs_to :store

  def summary
    "#{self.synopsis[0..100]}"
  end
end
