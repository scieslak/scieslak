Rails.application.routes.draw do
  get 'googlea7932c8cde93bccb.html', to: 'google#googlea7932c8cde93bccb'

  root 'public_pages#scieslak'
  get 'contact', to: 'public_pages#contact'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
