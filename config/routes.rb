Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users, :only => [:new, :create]

  resources :parks do
    resources :features, only: %i[index create new edit]
    post '/features/new'
  end

  resources :features

  get '/users/favorites' => 'features#favorites', as: :favorite_features
  post '/users/new'
  post '/parks/new'
  get '/auth/:provider/callback' => 'sessions#create', as: :auth_login
  get '/logout' => 'sessions#destroy'
  delete '/logout' => 'sessions#destroy'
  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  root 'welcome#home'
end
