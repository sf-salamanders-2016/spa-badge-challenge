class TeachersController < ApplicationController
  # skip_before_filter :verify_authenticity_token, :only => [:update]

  def index
    @teachers = Teacher.all
    render json: {data: @teachers, url: '/'}
  end

  def show
    @teacher = Teacher.find(params[:id])
    @badges = @teacher.badges
    render json: {data: @teacher, badges: @badges, url: '/'}
  end

end
