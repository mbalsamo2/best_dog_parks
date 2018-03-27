class Feature < ApplicationRecord
  has_many :park_features
  has_many :parks, through: :park_features

  validates :name, presence: true
  validates :rating, inclusion: { in: 1..5 }

end
