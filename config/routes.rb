Rails.application.routes.draw do
  root "tasks#app"

  resources :tasks do
    resources :subtasks
  end
end
