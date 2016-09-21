class TeachersController < ApplicationController

  def index
    @teachers = Teacher.all
    render json: {data: @teachers, url: '/'}
  end

  def show
    @teacher = Teacher.find(params[:id])
    @badges = @teacher.badges
    render json: {data: @teacher, url: '/'}
  end

end
