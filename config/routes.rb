Rails.application.routes.draw do
  root 'public_pages#scieslak'
  get 'contact', to: 'public_pages#contact'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
