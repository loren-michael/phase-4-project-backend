Rails.application.routes.draw do
  resources :movies
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do
    get '/hello', to: 'application#hello_world'
  end


  get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }
end
