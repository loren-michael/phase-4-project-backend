Rails.application.routes.draw do
  # Defines the root path route ("/")
  # root "articles#index"
    
  get '/me', to: "users#show"
  post '/signup', to: "users#create"
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"

  resources :rentals
  resources :users
  resources :stores
  resources :movies
  
  get '/hello', to: 'application#hello_world'

  get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }
end
