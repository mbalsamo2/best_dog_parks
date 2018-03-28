class User < ApplicationRecord
  has_secure_password

  validates :email, presence: true
  validates :email, uniqueness: true
  validates :name, presence: true
  validates :password_digest, presence: true
  validates :password_digest, length: { minimum: 8 }

  has_many :parks
  has_many :features, through: :parks


  def self.find_or_create_by_omniauth(auth_hash)
    self.where(email: auth_hash["info"]["email"]).first_or_create do |user|
      user.name = auth_hash["info"]["first_name"]
      user.password = SecureRandom.hex
    end
  end

  def favorite_features
    self.features.where("rating = 5")
  end

end
