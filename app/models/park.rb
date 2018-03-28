class Park < ApplicationRecord
  belongs_to :user
  has_many :park_features
  has_many :features, through: :park_features
  accepts_nested_attributes_for :features

  validates :name, presence: true

end
