class FeatureSerializer < ActiveModel::Serializer
  attributes :id, :name, :rating, :comment
  has_many :parks
end
