class Movie < ApplicationRecord
  validates :title, presence: true
  validates :year, presence: true
  validates :mpaa, presence: true
  validates :runtime, presence: true
  validates :synopsis, presence: true
  validates :store_id, presence: true
  belongs_to :store

  def summary
    "#{self.synopsis[0..100]}"
  end
end
