class FeatureSerializer < ActiveModel::Serializer
  attributes :id, :name, :rating, :comment
  belongs_to :park
end
