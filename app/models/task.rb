class Task < ApplicationRecord
  has_many :subtasks, dependent: :destroy
end
