Rails.application.routes.draw do
  

  namespace :api do
    resources :posts
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
