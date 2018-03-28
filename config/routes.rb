Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users, :only => [:new, :create]
  resources :parks
  resources :features
  post '/users/new'
  post '/parks/new'
  get '/auth/:provider/callback' => 'sessions#create', as: :auth_login
  get '/logout' => 'sessions#destroy'
  delete '/logout' => 'sessions#destroy'
  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  root 'welcome#home'
end
