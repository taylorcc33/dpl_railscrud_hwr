class TasksController < ApplicationController
  def app
    render component: "App"
  end
  
  def index
    @tasks = Task.all

    render json: @tasks
  end

  def show
    render json: Task.find(params[:id])
  end

  # def new

  # end

  # def edit

  # end

  def create
    @task = Task.new(task_params)

    if @task.save
      render json: @task
    else
      render json: ("error")
    end
  end

  def update
    @task = Task.find(params[:id])
    if @task.update(task_params)
      render json: @task
    end
  end

  def destroy
    @task = Task.find(params[:id])

    @task.destroy
    render json: @task
  end

  private

  def task_params
    params.require(:task).permit(:name, :due_date)
  end
end
