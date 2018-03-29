Specifications for the Rails Assessment
Specs:

[X] Using Ruby on Rails for the project
[X] Include at least one has_many relationship (x has_many y e.g. User has_many Recipes)
  - park has many features
  - user has many parks
[X] Include at least one belongs_to relationship (x belongs_to y e.g. Post belongs_to User)
[X] Include at least one has_many through relationship (x has_many y through z e.g. Recipe has_many Items through Ingredients)
  - user has many features, through parks
[X] The "through" part of the has_many through includes at least one user submittable attribute (attribute_name e.g. ingredients.quantity)
 - user can create a feature?
[X] Include reasonable validations for simple model objects (list of model objects with validations e.g. User, Recipe, Ingredient, Item)
  - User
      validates :email, presence: true
      validates :email, uniqueness: true
      validates :name, presence: true
      validates :password_digest, presence: true
      validates :password_digest, length: { minimum: 8 }
  - Feature
      validates :name, presence: true
      validates :rating, inclusion: { in: 1..5 }
  - Park
      validates :name, presence: true
[X] Include a class level ActiveRecord scope method (model object & class method name and URL to see the working feature e.g. User.most_recipes URL: /users/most_recipes)
  - User.favorite_features
[X] Include signup (how e.g. Devise)
  - Bcrpyt
[X] Include login (how e.g. Devise)
  - Bcrpyt
[X] Include logout (how e.g. Devise)
  - Bcrpyt
[X] Include third party signup/login (how e.g. Devise/OmniAuth)
  - OmniAuth Google
[X] Include nested resource show or index (URL e.g. users/2/recipes)
  - parks/1/feautres/2
[X] Include nested resource "new" form (URL e.g. recipes/1/ingredients)
  - parks/1/features/new
[X] Include form display of validation errors (form URL e.g. /recipes/new)

Confirm:

[X] The application is pretty DRY
[X] Limited logic in controllers
[] Views use helper methods if appropriate
[X] Views use partials if appropriate
