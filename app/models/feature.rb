class Feature < ApplicationRecord
  belongs_to :park

  validates :name, presence: true
  validates :rating, inclusion: { in: 1..5 }

end
