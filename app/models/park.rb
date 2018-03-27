class Park < ApplicationRecord
  belongs_to :user
  has_many :park_features
  has_many :features, through: :park_features

  validates :name, presence: true

end
