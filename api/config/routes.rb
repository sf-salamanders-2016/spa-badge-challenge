Rails.application.routes.draw do
  get '/teachers' => "teachers#index"
  get '/teachers/:id' => 'badges#index'
  post '/badges' => 'badges#create'
  put '/badges/:id' => 'badges#vote'
  root "teachers#index"
end
