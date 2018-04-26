Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users, :only => [:new, :create]

  resources :parks do
    resources :features, only: %i[create new edit]
  end

  resources :features

  get '/parks/:park_id/features' => 'parks#feature_index', as: :park_features_index
  get '/users/favorites' => 'features#favorites', as: :favorite_features
  get '/auth/:provider/callback' => 'sessions#create', as: :auth_login
  get '/logout' => 'sessions#destroy'
  delete '/logout' => 'sessions#destroy'
  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  root 'welcome#home'
end
