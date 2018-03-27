class User < ApplicationRecord
  has_secure_password

  validates :email, presence: true
  validates :email, uniqueness: true
  validates :name, presence: true
  validates :password_digest, presence: true
  validates :password_digest, length: { minimum: 8 }

  has_many :parks
  has_many :features, through: :parks

end
