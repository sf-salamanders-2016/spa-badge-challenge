Rails.application.routes.draw do
  get '/teachers' => "teachers#index"

  root "teachers#index"
end
