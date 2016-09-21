class TeachersController < ActionController::API
  def index
    @teachers = Teacher.all

    @json = @teachers.map do |teacher|
      { id: teacher.id, name: teacher.name}
    end
    render :json => @json
  end

end
