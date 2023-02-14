class Movie < ApplicationRecord
  validates :title, presence: true, uniqueness: true
  validates :year, presence: true
  validates_numericality_of :year
  validates :mpaa, presence: true
  validates :runtime, presence: true
  validates_numericality_of :runtime
  validates :synopsis, presence: true
  validates :store_id, presence: true
  belongs_to :store

  def summary
    "#{self.synopsis[0..79]}"
  end
end
