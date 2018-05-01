class FeatureSerializer < ActiveModel::Serializer
  attributes :id, :name, :rating, :comment
  has_many :park_features
  has_many :parks, :through => :park_features
end
