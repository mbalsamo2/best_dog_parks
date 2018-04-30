class ParkSerializer < ActiveModel::Serializer
  attributes :id, :name, :location
  has_many :features
end
