class FeatureSerializer < ActiveModel::Serializer
  attributes :id, :name, :rating, :comment
end
