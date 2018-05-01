class ParkSerializer < ActiveModel::Serializer
  attributes :id, :name, :location
  has_many :park_features
  has_many :features, :through => :park_features
  belongs_to :user
end
